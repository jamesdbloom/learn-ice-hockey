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
        ("neutral_dot_x", F["neutral_dot_x"], L["blue_line_x"] + F["neutral_dot_from_blue_line"]),
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
