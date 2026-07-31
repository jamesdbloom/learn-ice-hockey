#!/usr/bin/env python3
"""Check the rink coordinate table against the document that owns the dimensions.

`site/src/data/rink.json` is a coordinate system for diagrams. Every number in it
is owned by `content/foundation/rink_map_and_glossary.md`, and this asserts the two
agree — so a diagram cannot quietly disagree with the corpus about where the blue
line is.

It also checks the table is internally consistent (derived values actually derive)
and that every named position is on the ice. A diagram that places a player in the
crowd should fail a build, not a review.

What it cannot check: whether a diagram is a good teaching picture, or whether the
positions it names are where a coach would actually put those players. That needs a
reader, and it is why a diagram is a new review dimension rather than a free win.

Usage::

    python3 scripts/check_geometry.py [--quiet]

Exits non-zero if anything failed. Standard library only.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TABLE = ROOT / "site" / "src" / "data" / "rink.json"
OWNER = ROOT / "content" / "foundation" / "rink_map_and_glossary.md"

# Dimensions the owning document states, and where to find them in its prose.
# Each is (json path, regex capturing the number, human name).
OWNED = [
    (("sheet", "length"), r"Overall \| (\d+) ft × \d+ ft", "sheet length"),
    (("sheet", "width"), r"Overall \| \d+ ft × (\d+) ft", "sheet width"),
    (("sheet", "corner_radius"), r"Corner radius \| (\d+) ft", "corner radius"),
    (("lines", "goal_line_from_end_boards"), r"Goal line to end boards \| (\d+) ft", "goal line to end boards"),
    (("lines", "blue_line_to_goal_line"), r"Blue line to goal line \| (\d+) ft", "blue line to goal line"),
    (("lines", "neutral_zone_length"), r"neutral zone\) \| (\d+) ft", "neutral zone length"),
    (("faceoff", "end_zone_dot_from_goal_line"), r"dots\*\*[^|]*\| (\d+) ft out from the goal line", "end-zone dot from goal line"),
    (("trapezoid", "from_post_at_goal_line"), r"(\d+) ft from each goal post\*\*", "trapezoid at goal line"),
    (("trapezoid", "from_post_at_end_boards"), r"(\d+) ft from each goal post\*\* at the end boards", "trapezoid at end boards"),
    (("trapezoid", "width_at_goal_line"), r"(\d+) ft wide along the goal line", "trapezoid width at goal line"),
]


def dig(d, path):
    for k in path:
        d = d[k]
    return d


def main() -> int:
    quiet = "--quiet" in sys.argv
    table = json.loads(TABLE.read_text(encoding="utf-8"))
    owner = OWNER.read_text(encoding="utf-8")
    problems: list[str] = []
    checked = 0

    # --- 1. every owned dimension matches the owning document -----------------
    for path, pattern, name in OWNED:
        want = dig(table, path)
        m = re.search(pattern, owner)
        if not m:
            problems.append(
                f"{name}: could not find it in {OWNER.name} with /{pattern}/ — "
                "either the document was reworded or the table invented a number"
            )
            continue
        got = float(m.group(1) if m.groups() else m.group(0))
        checked += 1
        if abs(got - float(want)) > 1e-6:
            problems.append(
                f"{name}: table says {want}, {OWNER.name} says {got:g}. "
                "Fix the owner first if the owner is wrong."
            )

    # --- 2. derived values actually derive ------------------------------------
    S, L, F, T, G = (table[k] for k in ("sheet", "lines", "faceoff", "trapezoid", "goal"))
    derived = [
        ("goal_line_x", L["goal_line_x"], S["length"] / 2 - L["goal_line_from_end_boards"]),
        ("blue_line_x", L["blue_line_x"], L["goal_line_x"] - L["blue_line_to_goal_line"]),
        ("neutral_zone_length", L["neutral_zone_length"], 2 * L["blue_line_x"]),
        ("end_zone_dot_x", F["end_zone_dot_x"], L["goal_line_x"] - F["end_zone_dot_from_goal_line"]),
        ("neutral_dot_x", F["neutral_dot_x"], L["blue_line_x"] - F["neutral_dot_from_blue_line"]),
        ("dot_y", F["dot_y"], F["dot_separation"] / 2),
        ("trapezoid width at goal line", T["width_at_goal_line"], 2 * (G["post_y"] + T["from_post_at_goal_line"])),
        ("trapezoid width at end boards", T["width_at_end_boards"], 2 * (G["post_y"] + T["from_post_at_end_boards"])),
        ("goal post_y", G["post_y"], G["width"] / 2),
    ]
    for name, stated, computed in derived:
        checked += 1
        if abs(stated - computed) > 1e-6:
            problems.append(f"{name}: stated {stated}, but derives to {computed:g}")

    # --- 3. the trapezoid must come from Rule 1.8, never 27.8 -----------------
    checked += 1
    if "27.8" in str(T.get("rule", "")):
        problems.append(
            "trapezoid cites Rule 27.8 — that is stale pre-2014 wording. "
            "Rule 1.8 gives the lines actually painted."
        )

    # --- 3b. directions, not just magnitudes ----------------------------------
    #
    # This section exists because the checker passed 43 assertions while four
    # faceoff dots sat five feet inside the wrong zone. It asserted
    # |blue_line_x +/- 5| and never the sign, so a dot placed on the attacking
    # side of the line satisfied it perfectly. Three separate people drawing
    # diagrams found it; no mechanical check could.
    checks_dir = [
        ("the neutral-zone dots are in the NEUTRAL zone",
         abs(F["neutral_dot_x"]) < abs(L["blue_line_x"])),
        ("the end-zone dots are inside the end zone, between the blue and goal lines",
         L["blue_line_x"] < F["end_zone_dot_x"] < L["goal_line_x"]),
        ("the goal line is nearer the end boards than the blue line is",
         L["goal_line_x"] > L["blue_line_x"]),
    ]
    for name, ok in checks_dir:
        checked += 1
        if not ok:
            problems.append(f"direction: {name} — the table says otherwise")

    # --- 3b-ii. named positions agree with the markings drawn at the same place --
    #
    # The named-position table and the dimensions table are two records of the same
    # rink, and nothing was checking that they agreed. `neutral-dot` sat at x=30
    # after `faceoff.neutral_dot_x` had been corrected to 20, so a diagram anchored
    # to the name put players ten feet from the dot the same picture painted.
    named = table["positions"]
    for nm, want, got in [
        ("neutral-dot", F["neutral_dot_x"], named["neutral-dot"]["x"]),
        ("neutral-dot y", F["dot_y"], named["neutral-dot"]["y"]),
        ("faceoff-dot", F["end_zone_dot_x"], named["faceoff-dot"]["x"]),
        ("faceoff-dot y", F["dot_y"], named["faceoff-dot"]["y"]),
        ("goal-line", L["goal_line_x"], named["goal-line"]["x"]),
        ("blue-line", L["blue_line_x"], named["blue-line"]["x"]),
    ]:
        checked += 1
        if abs(want - got) > 1e-6:
            problems.append(
                f"named position {nm!r} is at {got:g} but the dimension it names is {want:g} — "
                "the two tables describe the same rink and must agree")

    # --- 3c. the DRAWING agrees with the table --------------------------------
    #
    # Also new, and for the same reason: the crease was drawn 2.5 ft deep against
    # a stated depth of 6 for the whole life of the renderer, because every check
    # here read the table and none read the picture. Re-derive the crease apex the
    # way rink.mjs constructs it and compare with the owned depth.
    checked += 1
    straight, r = 4.5, G["crease_arc_radius"]
    # arc endpoints sit `straight` in from the goal line at +-half the width;
    # its centre is on the goal line, so the apex is r from that centre.
    apex_depth = r
    half_w = G["crease_width"] / 2
    if abs((straight ** 2 + half_w ** 2) ** 0.5 - r) > 0.25:
        problems.append(
            f"crease: side lines {straight} ft long at half-width {half_w} ft do not meet "
            f"a {r} ft arc struck from the goal line (they imply "
            f"{(straight ** 2 + half_w ** 2) ** 0.5:.2f} ft)")
    checked += 1
    if abs(apex_depth - G["crease_depth"]) > 1e-6:
        problems.append(
            f"crease: as drawn it is {apex_depth:g} ft deep, but the table says "
            f"{G['crease_depth']:g} ft. The drawing and the owner must agree.")

    # --- 4. every named position is on the ice --------------------------------
    half_l, half_w = S["length"] / 2, S["width"] / 2
    for name, p in table["positions"].items():
        if name.startswith("$"):
            continue
        checked += 1
        x, y = p["x"], p["y"]
        if abs(x) > half_l or abs(y) > half_w:
            problems.append(f"position {name!r} at ({x}, {y}) is outside the boards")

    # --- 5. the corpus's own definitional claims -------------------------------
    pos = table["positions"]
    checks = [
        ("half-wall is level with the faceoff dot",
         pos["half-wall"]["x"] == pos["faceoff-dot"]["x"]),
        # The x half of this was asserted and the y was not, so the half-wall sat
        # inside the faceoff circle for the whole life of the table while 48
        # assertions passed. It is *the boards*: it has to be outside the circle
        # and within a body's width of the dasher.
        ("half-wall is outside the faceoff circle",
         abs(pos["half-wall"]["y"]) > F["dot_y"] + F["circle_radius"]),
        ("half-wall is within a body's width of the boards",
         S["width"] / 2 - abs(pos["half-wall"]["y"]) <= 4.5),
        # A player drawn on the half-wall must fit inside the boards. The opposition
        # glyph is the larger of the two at 3.6 ft centre-to-apex. This was 40 for a
        # while and every wall player in the corpus hung half a foot through the dasher.
        ("a player glyph on the half-wall fits inside the boards",
         abs(pos["half-wall"]["y"]) + 3.6 <= S["width"] / 2),
        ("the corner is nearer the end boards than the half-wall",
         pos["corner"]["x"] > pos["half-wall"]["x"]),
        ("the point is at the blue line",
         pos["point"]["x"] == L["blue_line_x"]),
        ("behind-net is behind the goal line",
         pos["behind-net"]["x"] > L["goal_line_x"]),
        ("the slot is inside the top of the circles",
         pos["slot"]["x"] > pos["top-of-circle"]["x"]),
    ]
    for name, ok in checks:
        checked += 1
        if not ok:
            problems.append(f"definitional: {name} — the table says otherwise")

    if not quiet or problems:
        print(f"check_geometry: {checked} assertions over {len(table['positions']) - 1} named positions")
    if problems:
        print(f"\n{len(problems)} problem(s):")
        for p in problems:
            print(f"  {p}")
        return 1
    if not quiet:
        print("the coordinate table agrees with rink_map_and_glossary.md.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
