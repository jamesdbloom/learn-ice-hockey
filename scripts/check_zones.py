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
    """
    n = len(poly)
    if n < 3:
        return 0.0
    s = sum(poly[i][0] * poly[(i + 1) % n][1] - poly[(i + 1) % n][0] * poly[i][1]
            for i in range(n))
    return abs(s) / 2.0


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

    if not divergent:
        print("every label that appears in more than one diagram draws the same region.")
        return 0

    print(f"\n{len(divergent)} label(s) drawn as more than one region:\n")
    for label, shapes in sorted(divergent.items()):
        print(f"  {label!r}")
        ranked = sorted(shapes.items(), key=lambda kv: -area(kv[0]))
        biggest = area(ranked[0][0])
        for poly, diagrams in ranked:
            a = area(poly)
            ratio = f" ({biggest / a:.2f}x smaller)" if a and a < biggest else ""
            print(f"    {a:8.1f} sq ft{ratio}  {', '.join(sorted(diagrams))}")
            print(f"             {' '.join(f'{x:g},{y:g}' for x, y in poly)}")
        print()

    print("⚠️  WORKLIST, NOT A GATE. A label can legitimately differ -- a region")
    print("    mirrored at the other end, or a name reused for a different area.")
    print("    READ EVERY HIT. And note this compares diagrams to EACH OTHER: a")
    print("    region drawn consistently wrong everywhere is invisible here, and")
    print("    only the owner document settles it.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
