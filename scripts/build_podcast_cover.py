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
import math
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

# ⚠️ THE RINK'S OWN COLOURS, AND THEY ARE THE ONE PLACE THIS COVER IS NOT THE SITE
#     PALETTE. A rink is red-lined and blue-lined; drawing it in `--text-faint` grey
#     reads as a diagram of something, not as ice. These are muted well below the
#     real thing so the cover still belongs to the site: a broadcast-saturation red
#     on this ink background vibrates, and both platforms shrink it to 110px where
#     saturated thin lines alias into mush.
# ⚠️ CREASE IS FILLED, NOT OUTLINED, ON PURPOSE. At thumbnail size the filled creases
#     and the nine faceoff spots are the only marks that survive; every thin line
#     goes first. If you make the crease an outline, the cover stops reading as a
#     rink the moment it is small, which is the only size that matters in a podcast app.
RED = (196, 72, 72)
BLUE = (58, 104, 176)
CREASE = (38, 74, 120)

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
    read: dict[str, float] = {}

    def g(path: str) -> float:
        """`at`, but recording every path so the run can print what it actually read."""
        v = at(rink, path)
        read[path] = v
        return v

    # ---- the sheet, by name -------------------------------------------------
    L = g("sheet.length")                       # 200
    W = g("sheet.width")                        # 85 — NOT goal.width
    CORNER = g("sheet.corner_radius")           # 28
    GOAL_X = g("lines.goal_line_x")             # 89
    BLUE_X = g("lines.blue_line_x")             # 25
    EZ_X = g("faceoff.end_zone_dot_x")          # 69
    DOT_Y = g("faceoff.dot_y")                  # 22
    NZ_X = g("faceoff.neutral_dot_x")           # 20
    CIRC_R = g("faceoff.circle_radius")         # 15
    HASH_L = g("faceoff.hash_length")           # 2
    HASH_SEP = g("faceoff.hash_separation")     # 5.583 — the NHL's 5 ft 7 in
    CR_W = g("goal.crease_width")               # 8
    CR_R = g("goal.crease_arc_radius")          # 6
    POST_Y = g("goal.post_y")                   # 3
    TZ_GL = g("trapezoid.width_at_goal_line") / 2       # 11
    TZ_EB = g("trapezoid.width_at_end_boards") / 2      # 14

    # ⚠️ CROSS-CHECK THE ONE HARDCODED FIGURE AGAINST THE DATA. HASH_GATE_HALF_FT
    #     predates `faceoff.hash_separation` being in rink.json. Keeping both and
    #     asserting they agree is cheaper than deleting one and finding out later
    #     that the other was the stale copy.
    assert abs(HASH_SEP / 2 - HASH_GATE_HALF_FT) < 0.01, (
        f"rink.json says the hash gate is {HASH_SEP/2:.3f} ft either side of the dot; "
        f"HASH_GATE_HALF_FT says {HASH_GATE_HALF_FT}. One of them is stale.")

    img = Image.new("RGB", (SIZE, SIZE), INK)   # RGB, so no alpha channel. Required.
    d = ImageDraw.Draw(img)

    # ---- composition --------------------------------------------------------
    # The whole sheet, drawn to scale, above the type. Nothing overlaps: the
    # assertion at the end enforces that, because two earlier compositions hid
    # geometry behind the title and both looked fine until rendered.
    RINK_FRAC = 0.94            # of the canvas width
    Y_CENTRE = 0.335            # of the canvas height
    ppf = (SIZE * RINK_FRAC) / L

    def X(x: float) -> float:
        return SIZE / 2 + x * ppf

    def Y(y: float) -> float:
        return SIZE * Y_CENTRE + y * ppf

    stroke = lambda f, floor: max(floor, int(ppf * f))

    # Creases first, filled, so everything else draws over them. ⚠️ THE CREASE IS
    # 8 FT WIDE, NOT 12: `goal.crease_arc_radius` is the ARC, not the width. An
    # earlier draft drew a full 6 ft semicircle and made the crease half again too
    # wide. The corpus's own built SVG path is the check:
    #     M 89 -4  L 84.5 -4  A 6 6 0 0 0 84.5 4  L 89 4  Z
    # ⚠️ AND THE ARC SWEEPS THROUGH 180 DEG, NOT THROUGH 0. Interpolating the short
    #     way round bulges the crease BEHIND the goal line, into the trapezoid.
    half = CR_W / 2
    side_len = math.sqrt(max(CR_R ** 2 - half ** 2, 0.0))
    theta = math.atan2(half, side_len)
    for s in (-1, 1):
        pts = [(s * GOAL_X, -half), (s * (GOAL_X - side_len), -half)]
        a0, a1 = math.pi + theta, math.pi - theta
        steps = 40
        for i in range(steps + 1):
            a = a0 + (a1 - a0) * i / steps
            pts.append((s * (GOAL_X + CR_R * math.cos(a)), CR_R * math.sin(a)))
        pts += [(s * (GOAL_X - side_len), half), (s * GOAL_X, half)]
        d.polygon([(X(px), Y(py)) for px, py in pts], fill=CREASE)

    # Boards, with the real corner radius.
    d.rounded_rectangle([X(-L / 2), Y(-W / 2), X(L / 2), Y(W / 2)],
                        radius=CORNER * ppf, outline=PAPER, width=stroke(0.9, 8))

    # The trapezoid, behind each goal line. ⚠️ Rule 1.8 figures — rink.json warns in
    # terms NEVER to take these from Rule 27.8, which is stale pre-2014 wording.
    for s in (-1, 1):
        for sy in (-1, 1):
            d.line([X(s * GOAL_X), Y(sy * TZ_GL), X(s * L / 2), Y(sy * TZ_EB)],
                   fill=RED, width=stroke(0.42, 4))

    # Goal lines, and the goals behind them.
    for s in (-1, 1):
        d.line([X(s * GOAL_X), Y(-W / 2 * 0.86), X(s * GOAL_X), Y(W / 2 * 0.86)],
               fill=RED, width=stroke(0.42, 4))
        gx0, gx1 = sorted((X(s * GOAL_X), X(s * (GOAL_X + 4))))
        d.rectangle([gx0, Y(-POST_Y), gx1, Y(POST_Y)], outline=PAPER, width=stroke(0.42, 4))

    # Blue lines and the centre red.
    for s in (-1, 1):
        d.line([X(s * BLUE_X), Y(-W / 2), X(s * BLUE_X), Y(W / 2)], fill=BLUE, width=stroke(1.1, 10))
    d.line([X(0), Y(-W / 2), X(0), Y(W / 2)], fill=RED, width=stroke(0.9, 8))

    # Circles: centre, and one at each end-zone dot.
    d.ellipse([X(-CIRC_R), Y(-CIRC_R), X(CIRC_R), Y(CIRC_R)], outline=BLUE, width=stroke(0.42, 4))
    for s in (-1, 1):
        for sy in (-1, 1):
            cx, cy = X(s * EZ_X), Y(sy * DOT_Y)
            d.ellipse([cx - CIRC_R * ppf, cy - CIRC_R * ppf, cx + CIRC_R * ppf, cy + CIRC_R * ppf],
                      outline=RED, width=stroke(0.42, 4))
            # Hash marks: four per circle, HASH_L long, HASH_SEP apart, running
            # outward from the circle toward and away from the boards.
            for hx in (-HASH_SEP / 2, HASH_SEP / 2):
                for hs in (-1, 1):
                    d.line([X(s * EZ_X + hx), Y(sy * DOT_Y + hs * CIRC_R),
                            X(s * EZ_X + hx), Y(sy * DOT_Y + hs * (CIRC_R + HASH_L))],
                           fill=RED, width=stroke(0.34, 3))

    # The nine faceoff spots. These and the filled creases are what survive a
    # 110px podcast-app thumbnail; every thin line goes first.
    spot_r = 1.6 * ppf
    spots = [(0.0, 0.0)]
    spots += [(s * EZ_X, sy * DOT_Y) for s in (-1, 1) for sy in (-1, 1)]
    spots += [(s * NZ_X, sy * DOT_Y) for s in (-1, 1) for sy in (-1, 1)]
    for sx, sy in spots:
        d.ellipse([X(sx) - spot_r, Y(sy) - spot_r, X(sx) + spot_r, Y(sy) + spot_r],
                  fill=BLUE if (sx, sy) == (0.0, 0.0) else RED)

    # ---- type ---------------------------------------------------------------
    f_title = font(FACES_BOLD, 300)
    f_sub = font(FACES, 116)
    f_foot = font(FACES, 72)

    def centred(text, fnt, y, fill):
        l, t, rr, b = d.textbbox((0, 0), text, font=fnt)
        d.text(((SIZE - (rr - l)) / 2 - l, y), text, font=fnt, fill=fill)

    title_top = SIZE * 0.635
    centred(TITLE, f_title, title_top, PAPER)
    centred(SUBTITLE, f_sub, SIZE * 0.795, ACCENT)
    centred(FOOT, f_foot, SIZE * 0.90, MUTED)

    # ⚠️ ASSERT THE COMPOSITION RATHER THAN EYEBALLING IT. Two earlier versions hid
    # geometry behind the type — once the centre dot and line, once the lower hash
    # marks — and both looked fine until rendered.
    rink_bottom = Y(W / 2) + stroke(0.9, 8) / 2
    assert rink_bottom < title_top, (
        f"the type overlaps the rink: the boards reach {rink_bottom:.0f}px, "
        f"the title starts at {title_top:.0f}px. Every mark drawn must be visible.")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)

    w, h = Image.open(OUT).size
    assert (w, h) == (SIZE, SIZE), f"wrote {w}x{h}, expected square {SIZE}"
    assert Image.open(OUT).mode == "RGB", "alpha channel present — both platforms refuse it"
    print(f"cover: {OUT.relative_to(REPO)}  {w}x{h}  {OUT.stat().st_size/1e6:.2f} MB  RGB, no alpha")
    print("  geometry from rink.json, by explicit path:")
    for k, v in read.items():
        print(f"    {k} = {v:g}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
