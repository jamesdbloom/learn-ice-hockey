#!/usr/bin/env python3
"""check_label_paint.py — diagram label text that crosses painted rink lines.

A WORKLIST, NOT A GATE. It has no --strict and should not gain one: some
crossings are intentional ("goal line" sits on the goal line it names), and
moving a label off an arc often lands it on a worse hazard.

Why it exists: the diagram placer (site/scripts/lib/rink.mjs) tests a label's
box against other labels and players, and tests LEADERS against painted ice,
but never tests the label TEXT against paint (its only ink test, inkAvoid, is
against route tags). W398 found three breakout-up labels crossing
faceoff-circle lines and could find them only by eye. (Plan row From W398 (2).)

What it reads: the BUILT SVGs in site/public/diagrams/, so run
`node site/scripts/build-diagrams.mjs` first. It says so and exits 0 if the
directory is missing, rather than reporting a clean pass on nothing.

What counts as a label: a <text> carrying the white halo
(paint-order="stroke"), which is how the placer draws every caption label.
Glyph letters (G, D1, C …) carry no halo and are skipped.

What counts as paint: rink markings only —
  * a <circle> with fill="none", radius > 4 ft, stroked red or blue
    (faceoff circles and the centre circle; player glyph rings are r 2.9 and
    stroked white or near-black);
  * a <line> stroked red (#c8102e) or blue (#0f5a8f) longer than 3 ft: the
    goal lines, blue lines and centre line. Hash marks (2 ft) are ignored.
    Grey dashed leaders (#5b5f66) and route lines are not paint;
  * a red or blue <path>: the crease and the trapezoid, tested as straight
    segments, with the crease's 6 ft arc taken as its chord.

The text box is an estimate: width = characters × 0.56 × font-size (the
placer's reservation constant CH, which rink.mjs records as the MAXIMUM of the
measured advance distribution; the inset brings it near the p75, CLIP_ADV
0.473), height from the placer's measured ink ascent and descent.

Most hits are legible behind the halo at 3x. The ones that are not, measured
on a sample at 1x (a 400 px screen at DPR 1), were same-colour paint under a
bold zone label, paint running ALONG the baseline, and a 1 ft blue or centre
line through a round letter — --severe lists the first two; the third needs
eyes. Read every hit at 400 px, 1x, before moving anything.

Usage:
    python3 scripts/check_label_paint.py            # every built diagram
    python3 scripts/check_label_paint.py --id breakout-up
    python3 scripts/check_label_paint.py --summary    # count per diagram
    python3 scripts/check_label_paint.py --severe     # only what the halo cannot hide
"""
from __future__ import annotations

import argparse
import math
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIAGRAMS = ROOT / "site" / "public" / "diagrams"

PAINT = {"#c8102e", "#0f5a8f"}
CHAR_W = 0.56    # width per character, as a multiple of font size
ASCENT = 0.733   # rink.mjs inkAvoid: measured maximum over 631 labels
DESCENT = 0.211
HASH_MAX = 3.0   # painted lines this short (hash marks) are ignored
INSET = (0.08, 0.15)  # shrink the estimated box so a graze is not a crossing
RUN_ALONG = 3.0  # paint inside the label box longer than this × box height runs ALONG the words

ATTR = re.compile(r'([\w:-]+)="([^"]*)"')


def attrs(tag: str) -> dict[str, str]:
    return dict(ATTR.findall(tag))


def label_boxes(svg: str):
    for m in re.finditer(r"<text\b([^>]*)>([^<]*)</text>", svg):
        a = attrs(m.group(1))
        if a.get("paint-order") != "stroke":
            continue
        text = m.group(2).strip()
        if not text:
            continue
        try:
            x, y, fs = float(a["x"]), float(a["y"]), float(a["font-size"])
        except (KeyError, ValueError):
            continue
        w = len(text) * CHAR_W * fs
        anchor = a.get("text-anchor", "start")
        x0 = x - w / 2 if anchor == "middle" else (x - w if anchor == "end" else x)
        top, bot = y - ASCENT * fs, y + DESCENT * fs
        dx, dy = w * INSET[0], (bot - top) * INSET[1]
        yield text, a.get("fill"), (x0 + dx, top + dy, x0 + w - dx, bot - dy)


def paint_circles(svg: str):
    for m in re.finditer(r"<circle\b([^>]*)/?>", svg):
        a = attrs(m.group(1))
        if a.get("fill") != "none" or a.get("stroke") not in PAINT:
            continue
        try:
            r = float(a["r"])
        except (KeyError, ValueError):
            continue
        if r > 4:
            yield float(a.get("cx", 0)), float(a.get("cy", 0)), r, a["stroke"]


def paint_lines(svg: str):
    for m in re.finditer(r"<line\b([^>]*)/?>", svg):
        a = attrs(m.group(1))
        if a.get("stroke") not in PAINT:
            continue
        try:
            ln = (float(a["x1"]), float(a["y1"]), float(a["x2"]), float(a["y2"]))
        except (KeyError, ValueError):
            continue
        if math.hypot(ln[2] - ln[0], ln[3] - ln[1]) > HASH_MAX:
            yield ln, a["stroke"], float(a.get("stroke-width", 0))


def paint_paths(svg: str):
    """Crease and trapezoid outlines. Straight segments; the crease's 6 ft arc is taken as its chord."""
    for m in re.finditer(r"<path\b([^>]*)/?>", svg):
        a = attrs(m.group(1))
        if a.get("stroke") not in PAINT:
            continue
        sw = float(a.get("stroke-width", 0))
        toks = re.findall(r"[MLAZ]|-?\d+(?:\.\d+)?", a.get("d", ""))
        cur = start = None
        i = 0
        while i < len(toks):
            t = toks[i]
            if t == "M":
                cur = start = (float(toks[i + 1]), float(toks[i + 2])); i += 3
            elif t == "L" and cur is not None:
                nxt = (float(toks[i + 1]), float(toks[i + 2]))
                yield (*cur, *nxt), a["stroke"], sw; cur = nxt; i += 3
            elif t == "A" and cur is not None:
                nxt = (float(toks[i + 6]), float(toks[i + 7]))
                yield (*cur, *nxt), a["stroke"], sw; cur = nxt; i += 8
            elif t == "Z" and cur is not None:
                yield (*cur, *start), a["stroke"], sw; cur = start; i += 1
            else:
                i += 1


def box_crosses_circle(box, cx, cy, r) -> bool:
    x0, y0, x1, y1 = box
    nx = min(max(cx, x0), x1)
    ny = min(max(cy, y0), y1)
    near = math.hypot(nx - cx, ny - cy)
    far = max(math.hypot(px - cx, py - cy) for px in (x0, x1) for py in (y0, y1))
    return near < r < far


def seg_intersects(p, q, r, s) -> bool:
    def orient(a, b, c):
        v = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
        return 0 if abs(v) < 1e-9 else (1 if v > 0 else -1)

    def on(a, b, c):
        return min(a[0], b[0]) - 1e-9 <= c[0] <= max(a[0], b[0]) + 1e-9 and \
               min(a[1], b[1]) - 1e-9 <= c[1] <= max(a[1], b[1]) + 1e-9

    o1, o2, o3, o4 = orient(p, q, r), orient(p, q, s), orient(r, s, p), orient(r, s, q)
    if o1 != o2 and o3 != o4:
        return True
    return (o1 == 0 and on(p, q, r)) or (o2 == 0 and on(p, q, s)) or \
           (o3 == 0 and on(r, s, p)) or (o4 == 0 and on(r, s, q))


def box_crosses_line(box, line) -> bool:
    x0, y0, x1, y1 = box
    a, b = (line[0], line[1]), (line[2], line[3])
    if x0 <= a[0] <= x1 and y0 <= a[1] <= y1:
        return True
    edges = [((x0, y0), (x1, y0)), ((x1, y0), (x1, y1)),
             ((x1, y1), (x0, y1)), ((x0, y1), (x0, y0))]
    return any(seg_intersects(a, b, e0, e1) for e0, e1 in edges)


def _inside(box, x, y) -> bool:
    return box[0] <= x <= box[2] and box[1] <= y <= box[3]


def len_inside_line(box, ln, n=200) -> float:
    k = sum(_inside(box, ln[0] + t / n * (ln[2] - ln[0]), ln[1] + t / n * (ln[3] - ln[1]))
            for t in range(n + 1))
    return k / n * math.hypot(ln[2] - ln[0], ln[3] - ln[1])


def len_inside_circle(box, cx, cy, r, n=720) -> float:
    k = sum(_inside(box, cx + r * math.cos(2 * math.pi * i / n), cy + r * math.sin(2 * math.pi * i / n))
            for i in range(n))
    return k / n * 2 * math.pi * r


def check(path: Path):
    svg = path.read_text(encoding="utf-8")
    circles = list(paint_circles(svg))
    lines = list(paint_lines(svg)) + list(paint_paths(svg))
    for text, fill, box in label_boxes(svg):
        what, flags = set(), set()
        h = box[3] - box[1]
        for cx, cy, r, col in circles:
            if box_crosses_circle(box, cx, cy, r):
                what.add("circle")
                if col == fill:
                    flags.add("same colour")
                if len_inside_circle(box, cx, cy, r) > RUN_ALONG * h:
                    flags.add("runs along")
        for ln, col, sw in lines:
            if box_crosses_line(box, ln):
                what.add("line")
                if col == fill:
                    flags.add("same colour")
                if len_inside_line(box, ln) > RUN_ALONG * h:
                    flags.add("runs along")
                if sw >= 1:
                    flags.add("thick")
        if what:
            yield text, sorted(what), sorted(flags)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--id", help="check one diagram id only")
    ap.add_argument("--summary", action="store_true",
                    help="one line per diagram with its count, most first")
    ap.add_argument("--severe", action="store_true",
                    help="only crossings the halo cannot hide: same-colour paint, or paint running along the words")
    args = ap.parse_args()
    if not DIAGRAMS.is_dir():
        print("check_label_paint: site/public/diagrams/ is missing — run "
              "`node site/scripts/build-diagrams.mjs` first. Nothing checked.")
        return 0
    files = sorted(DIAGRAMS.glob("*.svg"))
    if args.id:
        files = [f for f in files if f.stem == args.id]
        if not files:
            print(f"check_label_paint: no built diagram '{args.id}'.")
            return 0
    hits = 0
    per = []
    for f in files:
        found = list(check(f))
        if args.severe:
            found = [h for h in found if {"same colour", "runs along"} & set(h[2])]
        hits += len(found)
        if found:
            per.append((len(found), f.stem))
        if not args.summary:
            for text, what, flags in found:
                print(f"  {f.stem}: \"{text}\" crosses a painted {' and '.join(what)}"
                      + (f"  [{', '.join(flags)}]" if flags else ""))
    if args.summary:
        for n, stem in sorted(per, reverse=True):
            print(f"  {n:3d}  {stem}")
    scope = "severe " if args.severe else ""
    print(f"check_label_paint: {len(files)} diagram(s), {hits} {scope}label(s) crossing paint "
          "(a worklist — read each at 400 px, 1x; the crease arc is tested as its chord)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
