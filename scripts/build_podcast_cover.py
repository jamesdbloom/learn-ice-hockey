#!/usr/bin/env python3
"""Draw the podcast show cover: a 3000x3000 PNG, from the site's own palette.

WHY THIS EXISTS AT ALL. Both Apple Podcasts and Spotify require show artwork and
none existed.

⚠️  THE PIXEL, COLOURSPACE AND ALPHA CONSTRAINTS ARE APPLE'S ALONE. An earlier
    version of this comment credited them jointly to Apple and to "Spotify's
    Podcast Delivery Specification v1.10 §4.2", and re-read on 10 September 2026
    §4.2 says NONE of them. It asks only for a "fully squared (1:1) aspect ratio",
    the "highest resolution available", and "TIFF, PNG or JPEG" in that order of
    preference — no minimum, no maximum, no RGB, no alpha statement.
⚠️  It also named the wrong Apple page: these live in A Podcaster's Guide to RSS,
    not the `artwork-requirements` page. The cover satisfies both books either
    way; only the SOURCING was overstated. ⚠️  A requirement attributed to two
    specifications when one of them is silent is the same defect this repository
    keeps finding in its own plan — a claim about a source made without re-reading
    the source.

Apple, A Podcaster's Guide to RSS, verified 10 September 2026:

    "Artwork must be a minimum size of 1400 x 1400 pixels and a maximum size of
     3000 x 3000 pixels, in JPEG or PNG format, 72 dpi, with appropriate file
     extensions (.jpg, .png), and in the RGB colorspace. Confirm your art does
     not contain an Alpha Channel."

Spotify, Delivery Specification v1.10 §4.2 — the whole of what it constrains:

    square (1:1) · highest resolution available · TIFF, PNG or JPEG

⚠️  NEITHER PLATFORM PUBLISHES A FILE-SIZE LIMIT. Do not add one here and do not
    let anyone "optimise to under N KB" against a limit nobody wrote down.

⚠️  NO STOCK IMAGERY, NO LEAGUE MARKS, NO TEAM MARKS, NO PLAYER LIKENESS. The
    corpus quotes four rulebooks under fair dealing and states on every page that
    it is not affiliated with the NHL, IIHF, USA Hockey, Hockey Canada or England
    Ice Hockey. A cover carrying a league's visual identity would say the opposite
    of that disclaimer in the one place a listener looks first. Everything drawn
    here is either type or plain rink geometry, which is a fact about a sheet of
    ice and belongs to nobody.

⚠️  THE GEOMETRY IS NOT DECORATION AND IT IS NOT INVENTED. The circles and lines
    are drawn from `site/src/data/rink.json`, the same measurements the corpus's
    diagrams use, so the cover cannot drift from the book. If that file says the
    faceoff circles are 15 ft in radius, that is what gets drawn. ⚠️  A cover that
    drew a plausible-looking rink from memory would be a fabrication in exactly
    the sense non-negotiable 1 means, and it would be the first thing a hockey
    player noticed.

THIS IS A PLACEHOLDER THE OWNER CAN REPLACE. Drop a 3000x3000 PNG or JPG at
`podcasts/cover.png` and it wins; this script only writes `podcasts_web/cover.png`.
"""

from __future__ import annotations

import json
import pathlib
import sys

# ⚠️ THIS IS THE ONE SCRIPT IN scripts/ THAT IS NOT STANDARD-LIBRARY-ONLY, AND
# scripts/README.md STATES THAT CONSTRAINT IN TERMS: "standard library only — no
# pip install, no lockfile, nothing to rot." Pillow is a real exception and it is
# declared here rather than discovered later.
#
# Why it was taken: both platforms require a raster cover (PNG or JPG, 1400-3000px
# square). Writing a PNG from the standard library is possible — it is zlib and
# struct, both stdlib — but RENDERING TEXT is not, and a cover with no type on it
# is not a cover. The alternatives were a hand-made image (which is what the owner
# may yet supply, and `podcasts/cover.png` overrides this) or a third-party
# rasteriser (rsvg-convert, cairosvg, ImageMagick — NONE of which is installed here;
# checked).
#
# Why it is contained: this script NEVER runs in CI. `.github/workflows/` does not
# invoke it, the site build does not invoke it, and no gate depends on it. It is a
# by-hand tool in the same class as md_to_speech.py, and its output is a gitignored
# file. ⚠️ If that ever changes — if anything in ci.yml or deploy.yml comes to
# depend on this — the constraint is genuinely broken and this needs replacing.
try:
    from PIL import Image, ImageDraw, ImageFont
except ModuleNotFoundError:
    raise SystemExit(
        "build_podcast_cover.py needs Pillow, the one non-stdlib dependency in scripts/.\n"
        "  pip install Pillow\n"
        "Or skip it entirely: drop your own 3000x3000 PNG at podcasts/cover.png and it wins.\n"
        "Nothing else in scripts/ requires anything outside the standard library.")

REPO = pathlib.Path(__file__).resolve().parent.parent
RINK = REPO / "site" / "src" / "data" / "rink.json"
OUT = REPO / "podcasts_web" / "cover.png"
OVERRIDE = REPO / "podcasts" / "cover.png"

SIZE = 3000

# Half the 5 ft 7 in hash-mark gate, from site/src/diagrams/faceoffs.mjs, which
# derives it from the rulebook. rink.json does not carry it.
HASH_GATE_HALF_FT = 2.79

# From site/src/styles/global.css. The dark palette, because a podcast tile is
# almost always shown against a dark client chrome and on a small square.
INK = (20, 22, 26)          # --bg (dark)
PAPER = (230, 232, 234)     # --text (dark)
ACCENT = (61, 155, 217)     # --accent, lifted for contrast on ink
MUTED = (131, 139, 150)     # --text-faint (dark)
# ⚠️ NOT --border (#2b3037). That is a UI hairline on a screen you are reading at
# arm's length; on a podcast tile shown at 55px it vanished entirely. Lifted until
# the circle survives the thumbnail — CHECK IT AT 55px, not at full size.
LINE = (62, 71, 84)

TITLE = "Ice Hockey"
SUBTITLE = "Learning to Play the Game"
FOOT = "learn-ice-hockey.com"

# macOS system faces, most-preferred first. ⚠️ PIL needs a real file — it cannot
# resolve the CSS stack in global.css, so this is the nearest available match and
# not the site's exact rendering.
FACES = [
    "/System/Library/Fonts/Supplemental/Georgia.ttf",
    "/System/Library/Fonts/NewYork.ttf",
    "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]
FACES_BOLD = [
    "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
] + FACES


def font(paths: list[str], size: int) -> ImageFont.FreeTypeFont:
    for p in paths:
        if pathlib.Path(p).is_file():
            try:
                return ImageFont.truetype(p, size)
            except OSError:
                continue
    raise SystemExit(
        "no usable TrueType face found. Tried:\n  " + "\n  ".join(paths) +
        "\nInstall one or edit FACES — refusing to fall back to a bitmap font, "
        "which would look wrong at 3000px and ship anyway.")


def rink_metrics() -> dict:
    """Real measurements from the corpus's own rink data — never guessed."""
    if not RINK.is_file():
        raise SystemExit(f"missing {RINK} — the geometry must come from the corpus, not from memory")
    d = json.loads(RINK.read_text())
    return d


def at(d: dict, path: str) -> float:
    """Read ONE explicitly-named dotted path out of rink.json, or fail.

    ⚠️  THIS REPLACED A FUZZY KEY SEARCH THAT WAS WRONG ON ITS FIRST RUN. The
    earlier version walked the whole document for any key called "width" and
    found `goal.width` — the six-foot GOAL MOUTH — and reported it as the width
    of an eighty-five-foot rink. It printed "rink width 6 ft" cheerfully and the
    drawing was scaled by it.

    The failure is this repository's most-recorded shape: a probe that returns a
    confident, honestly obtained, WRONG number with no symptom. It was caught
    only because the script prints what it read. ⚠️  PRINT WHAT YOU READ, AND NAME
    THE PATH — a lookup that cannot say which key it used cannot be checked.
    """
    cur = d
    for part in path.split("."):
        if not isinstance(cur, dict) or part not in cur:
            raise SystemExit(
                f"rink.json has no '{path}' — refusing to invent a rink dimension. "
                "Fix the path; do not add a fallback.")
        cur = cur[part]
    if not isinstance(cur, (int, float)):
        raise SystemExit(f"rink.json '{path}' is {cur!r}, not a number")
    return float(cur)


def main() -> int:
    if OVERRIDE.is_file():
        print(f"⚠️  {OVERRIDE.relative_to(REPO)} exists — the owner's cover wins.")
        print("    Delete it to regenerate this placeholder, or just use it directly.")
        return 0

    rink = rink_metrics()
    circle_r_ft = at(rink, "faceoff.circle_radius")   # 15 ft
    hash_len_ft = at(rink, "faceoff.hash_length")     # 2 ft
    rink_w_ft = at(rink, "sheet.width")               # 85 ft — NOT goal.width

    img = Image.new("RGB", (SIZE, SIZE), INK)   # RGB, so no alpha channel. Required.
    d = ImageDraw.Draw(img)

    # ---- composition --------------------------------------------------------
    # ⚠️ THE FIRST VERSION PUT THE TYPE OVER THE CIRCLE'S CENTRE and drew a slab
    # behind it — which hid the centre dot and the centre line completely, leaving
    # two disconnected arcs that read as a mistake rather than as a faceoff circle.
    # The geometry now sits ABOVE the type and nothing overlaps, so no slab is
    # needed and every mark drawn is a mark you can see.
    px_per_ft = SIZE / (rink_w_ft * 0.80)
    r = circle_r_ft * px_per_ft
    cx = SIZE / 2
    cy = SIZE * 0.335

    # The centre line, behind the circle, stopping short of the edges so it reads
    # as a line on ice rather than as a border.
    d.line([SIZE * 0.06, cy, SIZE * 0.94, cy], fill=LINE, width=12)
    # The faceoff circle.
    d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=LINE, width=16)
    # Hash marks: four, outside the circle, 2 ft long from the data.
    # ⚠️ THE GATE IS A REAL MEASUREMENT, NOT A FRACTION OF THE RADIUS. An earlier
    # version used `r * 0.19`, which happened to land near the right answer and
    # would have drifted the moment the radius changed. `site/src/diagrams/faceoffs.mjs`
    # records it: the four hash marks are 2 ft long, run parallel to the goal line
    # at the outer edge of BOTH sides of the circle, and each pair is 5 ft 7 in
    # apart — "a gate 5.58 ft wide in x, at x = 66.2 and x = 71.8", i.e. 2.79 ft
    # either side of the dot. Drawn from that, so the cover and the corpus's own
    # faceoff diagram cannot disagree.
    hash_len = hash_len_ft * px_per_ft
    hash_off = HASH_GATE_HALF_FT * px_per_ft
    for sx in (-1, 1):
        for sy in (-1, 1):
            x = cx + sx * hash_off
            y0 = cy + sy * r
            d.line([x, y0, x, y0 + sy * hash_len], fill=LINE, width=16)
    # The centre dot, in accent — the one spot of colour, and the only thing on
    # the cover that is exactly where the rink says it is.
    dot = r * 0.085
    d.ellipse([cx - dot, cy - dot, cx + dot, cy + dot], fill=ACCENT)

    # ---- type ---------------------------------------------------------------
    f_title = font(FACES_BOLD, 330)
    f_sub = font(FACES, 124)
    f_foot = font(FACES, 74)

    def centred(text, fnt, y, fill):
        l, t, rr, b = d.textbbox((0, 0), text, font=fnt)
        d.text(((SIZE - (rr - l)) / 2 - l, y), text, font=fnt, fill=fill)

    centred(TITLE, f_title, SIZE * 0.605, PAPER)
    centred(SUBTITLE, f_sub, SIZE * 0.775, ACCENT)
    centred(FOOT, f_foot, SIZE * 0.895, MUTED)

    # ⚠️ ASSERT THE COMPOSITION RATHER THAN EYEBALLING IT. The first two versions
    # both hid part of the geometry behind the type — once the centre dot and line,
    # once the lower pair of hash marks — and both looked fine until rendered.
    circle_bottom = cy + r + hash_len
    title_top = SIZE * 0.605
    assert circle_bottom < title_top, (
        f"the type overlaps the rink geometry: circle+hash reaches {circle_bottom:.0f}px, "
        f"title starts at {title_top:.0f}px. Every mark drawn must be visible.")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)

    w, h = Image.open(OUT).size
    assert (w, h) == (SIZE, SIZE), f"wrote {w}x{h}, expected square {SIZE}"
    assert Image.open(OUT).mode == "RGB", "alpha channel present — both platforms refuse it"
    print(f"cover: {OUT.relative_to(REPO)}  {w}x{h}  {OUT.stat().st_size/1e6:.2f} MB  RGB, no alpha")
    print(f"  geometry from rink.json: faceoff.circle_radius={circle_r_ft:g} ft · "
          f"faceoff.hash_length={hash_len_ft:g} ft · sheet.width={rink_w_ft:g} ft")
    return 0


if __name__ == "__main__":
    sys.exit(main())
