#!/usr/bin/env python3
"""Report shaded ZONE POLYGONS that disagree about the region they name.

WHY THIS EXISTS
---------------
`positions.mjs` shaded a band labelled "the high slot" across **660 square
feet**, cutting through both end-zone faceoff circles, while the owning
glossary and a third module drew the same label at **210 square feet** -- the
ice *between* the circles. 3.14x the region the corpus defines, under captions
that said "between the dots and the top of the circles".

⚠️ **It passed every gate this project has.** `check_geometry.py` validates
named POINTS -- its only slot assertion is that the slot's x exceeds the top of
the circle. `check-arrivals.mjs` reads routes and never looks at `zones` at
all. The defect was found by a reviewer comparing two polygons in a table, and
it had already been written down, correctly, in a comment in a neighbouring
module, where it sat unactioned while the file it described was edited.

The cause is structural and will recur: **three modules define their own
`HIGH_SLOT` constant**, two define `CIRCLE_EDGE`, three define `CIRCLE_RADIUS`.
Nothing makes them agree.

WHAT IT READS
-------------
The BUILT SVGs in `site/public/diagrams/`, not the `.mjs` sources -- so it sees
the **final resolved coordinates the reader actually gets**, after every `at:`
/ `dx:` / `dy:` anchor has been evaluated. A polygon is paired with the `<text>`
label that immediately follows it, which is how the renderer emits them.

⚠️ `site/public/diagrams/` is GITIGNORED and only exists after a build. Run
`node site/scripts/build-diagrams.mjs` first (~6 minutes). If the directory is
missing this exits 0 with a message rather than pretending the corpus is clean
-- a checker that passes because it found nothing to check is the trap this
project has hit with `crt6.txt` and with a 30-byte extraction.

⚠️ **THIS IS A WORKLIST, NOT A GATE.** It has no `--strict` and should not gain
one until the corpus has been clean for a round. Two labels can legitimately
differ: a region drawn at one end of a half-rink sheet and mirrored at the
other, or a label reused for a genuinely different area in a diagram about
something else. **Read every hit.** The corpus's own history is that four
sweeps in one round would each have damaged correct text.

WHAT IT CANNOT SEE
------------------
* Whether a polygon matches its OWNER DOCUMENT's definition. It compares
  diagrams to each other, so a region drawn consistently wrong everywhere is
  invisible. Only reading `rink_map_and_glossary.md` settles that.
* A zone with no text label, or one whose label is emitted elsewhere.
* Whether the label is the right name for the region at all.
"""

from __future__ import annotations

import re
import sys
from collections import defaultdict

from pathlib import Path

SVG_DIR = Path(__file__).resolve().parent.parent / "site" / "public" / "diagrams"

#: Intersection-over-union above which two differently-named zones are judged to
#: be the SAME region under two names. 0.7 is deliberately high: this asks "same
#: ice, different name", not "one inside the other". A first attempt used
#: overlap-of-the-smaller at 0.6 and returned 45 pairs, essentially all correct
#: nesting. A reporting threshold on a worklist, never a pass/fail line.
OVERLAP_THRESHOLD = 0.7

#: The renderer emits a zone as a polygon immediately followed by its centroid
#: label. Anchored to that adjacency rather than to a class, because the fill is
#: an inline rgba() string with no stable hook.
ZONE_RE = re.compile(
    r'<polygon\s+points="(?P<points>[^"]+)"[^>]*/>\s*'
    r'<text[^>]*>(?P<label>[^<]+)</text>'
)


def normalise(points: str) -> tuple[tuple[float, float], ...]:
    """'54.00,-7.00 69.00,-7.00' -> ((54.0, -7.0), (69.0, -7.0)).

    Rounded to 2dp because the renderer already formats to 2dp; comparing the
    strings directly would report a difference between "7" and "7.00".
    """
    out = []
    for pair in points.split():
        x, _, y = pair.partition(",")
        out.append((round(float(x), 2), round(float(y), 2)))
    return tuple(out)


def area(poly: tuple[tuple[float, float], ...]) -> float:
    """Shoelace. Reported so a divergence carries its magnitude.

    The high-slot defect was 660 sq ft against 210 -- a ratio, not a nudge, and
    the ratio is what made it obvious once anyone looked.

    ⚠️ AREA EQUALITY IS NOT REGION EQUALITY, and reporting area alone was
    briefly misleading here: two polygons labelled "the middle" came back at
    1276 and 1232 sq ft -- "1.04x", which reads as agreement -- while sitting
    in DIFFERENT PLACES, overlapping over 15 ft of spans 29 ft and 44 ft long.
    That pair is legitimate (the glossary defines "the middle" as a DIRECTION,
    not a bounded region), but the near-identical ratio was accidental. Hence
    `centroid` below: separation is reported next to area so a future reader is
    not told two disjoint regions nearly match.
    """
    n = len(poly)
    if n < 3:
        return 0.0
    s = sum(poly[i][0] * poly[(i + 1) % n][1] - poly[(i + 1) % n][0] * poly[i][1]
            for i in range(n))
    return abs(s) / 2.0


def bbox(poly: tuple[tuple[float, float], ...]) -> tuple[float, float, float, float]:
    xs = [x for x, _ in poly]
    ys = [y for _, y in poly]
    return min(xs), min(ys), max(xs), max(ys)


def overlap_fraction(a: tuple, b: tuple) -> float:
    """Bounding-box intersection over UNION -- i.e. "are these the same region?"

    ⚠️ The first version of this divided by the SMALLER box instead, reasoning
    that a small band inside a larger one is worth reporting. That produced 45
    pairs, essentially all of them correct nesting -- 'goalmouth' inside 'home
    plate' scores 100% and always will, because it IS inside it. Dividing by
    the union asks the question actually worth asking: two names for the SAME
    ice. Containment is a different question and this tool does not ask it.

    Bounding boxes rather than true polygon intersection because every shaded
    zone in this corpus is an axis-aligned rectangle -- if that stops being
    true this over-reports rather than under-reports, which is the right
    direction for a worklist.
    """
    ax0, ay0, ax1, ay1 = bbox(a)
    bx0, by0, bx1, by1 = bbox(b)
    ix = max(0.0, min(ax1, bx1) - max(ax0, bx0))
    iy = max(0.0, min(ay1, by1) - max(ay0, by0))
    inter = ix * iy
    union = ((ax1 - ax0) * (ay1 - ay0)) + ((bx1 - bx0) * (by1 - by0)) - inter
    return inter / union if union else 0.0


def centroid(poly: tuple[tuple[float, float], ...]) -> tuple[float, float]:
    """Vertex mean -- deliberately NOT the area centroid.

    Every zone the renderer emits is a convex quad or a simple band, where the
    two agree closely, and the vertex mean cannot divide by a zero area on a
    degenerate polygon the way the shoelace formulation can.
    """
    return (sum(x for x, _ in poly) / len(poly), sum(y for _, y in poly) / len(poly))


def main() -> int:
    if not SVG_DIR.is_dir():
        print(f"check_zones: {SVG_DIR} does not exist -- run "
              f"`node site/scripts/build-diagrams.mjs` first.")
        print("check_zones: nothing checked. This is NOT a pass.")
        return 0

    svgs = sorted(SVG_DIR.glob("*.svg"))
    if not svgs:
        print(f"check_zones: no SVGs in {SVG_DIR}. This is NOT a pass.")
        return 0

    by_label: dict[str, dict[tuple, list[str]]] = defaultdict(lambda: defaultdict(list))
    zones = 0
    for svg in svgs:
        for m in ZONE_RE.finditer(svg.read_text()):
            label = " ".join(m.group("label").split())
            by_label[label][normalise(m.group("points"))].append(svg.stem)
            zones += 1

    divergent = {lab: shapes for lab, shapes in by_label.items() if len(shapes) > 1}

    print(f"check_zones: {len(svgs)} diagrams · {zones} labelled zones · "
          f"{len(by_label)} distinct labels")

    if divergent:
        print(f"\n{len(divergent)} label(s) drawn as more than one region:\n")
    else:
        print("every label that appears in more than one diagram draws the same region.")
        print("⚠️  That is NOT a clean bill -- see the second pass below, which")
        print("    compares regions the label pass cannot pair up at all.\n")
    for label, shapes in sorted(divergent.items()):
        print(f"  {label!r}")
        ranked = sorted(shapes.items(), key=lambda kv: -area(kv[0]))
        biggest = area(ranked[0][0])
        ref = centroid(ranked[0][0])
        for poly, diagrams in ranked:
            a = area(poly)
            ratio = f" ({biggest / a:.2f}x smaller)" if a and a < biggest else ""
            cx, cy = centroid(poly)
            sep = ((cx - ref[0]) ** 2 + (cy - ref[1]) ** 2) ** 0.5
            # Separation is printed even when it is 0.0, so that "same area,
            # same place" and "same area, elsewhere" cannot be confused.
            where = "  same centre" if sep < 0.5 else f"  centre {sep:.0f} ft away"
            print(f"    {a:8.1f} sq ft{ratio}{where}  {', '.join(sorted(diagrams))}")
            print(f"             {' '.join(f'{x:g},{y:g}' for x, y in poly)}")
        print()


    # ------------------------------------------------------------------
    # Second pass: the same region under DIFFERENT names.
    #
    # The pass above groups by label text, so it can only compare regions
    # that were named identically. A diagram reviewer found that the four
    # diagrams drawing the neutral-zone centre lane carry THREE different
    # labels and one none at all -- so the label pass showed 1 of 4
    # comparisons, and it happened to be the pair whose 1.04x area ratio
    # made it look like agreement. This pass has no such blind spot.
    #
    # It is noisier by construction and it is NOT a gate: two names for
    # overlapping ice are often correct ("the slot" inside "the house").
    # ------------------------------------------------------------------
    flat: list[tuple[str, tuple, str]] = []
    for label, shapes in by_label.items():
        for poly, diagrams in shapes.items():
            for d in sorted(set(diagrams)):
                flat.append((label, poly, d))

    renamed: dict[tuple[str, str], list[tuple[float, tuple, tuple, str, str]]] = defaultdict(list)
    for i in range(len(flat)):
        for j in range(i + 1, len(flat)):
            la, pa, da = flat[i]
            lb, pb, db = flat[j]
            if la == lb or da == db:
                continue
            frac = overlap_fraction(pa, pb)
            if frac >= OVERLAP_THRESHOLD:
                key = tuple(sorted((la, lb)))
                renamed[key].append((frac, pa, pb, da, db))

    if renamed:
        print(f"{len(renamed)} label pair(s) drawing overlapping ice under different names:\n")
        for (la, lb), hits in sorted(renamed.items()):
            frac, pa, pb, da, db = max(hits, key=lambda h: h[0])
            print(f"  {la!r}  vs  {lb!r}   ({frac:.0%} the same ice, by area)")
            print(f"    {area(pa):8.1f} sq ft  {da}")
            print(f"    {area(pb):8.1f} sq ft  {db}")
            if len(hits) > 1:
                print(f"    (+{len(hits) - 1} more diagram pair(s) with the same two labels)")
            print()
        print("⚠️  TWO NAMES FOR THE SAME ICE IS OFTEN CORRECT -- a general term")
        print("    beside a specific one, or one book's name beside another's.")
        print("    This pass exists because the label pass above CANNOT SEE these")
        print("    at all, not because they are defects. Read each against the")
        print("    owner document before touching anything.\n")


    # ------------------------------------------------------------------
    # Third pass: identical CROSS-ICE span under different names.
    #
    # The lane case the second pass cannot see. Four diagrams draw the
    # neutral-zone centre lane over different stretches of its length, so
    # their IoU is low by construction -- but they share a y-span exactly,
    # which is what makes them the same lane. Grouping on that span finds
    # the family; grouping on area or centroid never will.
    # ------------------------------------------------------------------
    by_span: dict[tuple[float, float], set[tuple[str, str]]] = defaultdict(set)
    for label, poly, diagram in flat:
        _, y0, _, y1 = bbox(poly)
        by_span[(y0, y1)].add((label, diagram))

    lanes = {span: mem for span, mem in by_span.items()
             if len({lab for lab, _ in mem}) > 1}
    if lanes:
        print(f"{len(lanes)} cross-ice span(s) shared by differently-named regions:\n")
        for (y0, y1), mem in sorted(lanes.items()):
            print(f"  y {y0:g} to {y1:g}  ({y1 - y0:g} ft across)")
            for lab, diagram in sorted(mem):
                print(f"    {lab!r:24}  {diagram}")
            print()
        print("⚠️  A SHARED SPAN IS NOT A DEFECT. Lanes legitimately run the length")
        print("    of the ice under more than one name, and two unrelated regions")
        print("    can share a width by coincidence. This pass exists only because")
        print("    the label and IoU passes above are both blind to it.\n")

    print("⚠️  WORKLIST, NOT A GATE. A label can legitimately differ -- a region")
    print("    mirrored at the other end, or a name reused for a different area.")
    print("    READ EVERY HIT. And note this compares diagrams to EACH OTHER: a")
    print("    region drawn consistently wrong everywhere is invisible here, and")
    print("    only the owner document settles it.")
    print("    ⚠️  AND A CLOSE AREA RATIO IS NOT AGREEMENT -- read the centre")
    print("    separation beside it. Two regions of equal size in different")
    print("    places report as '1.04x'.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
