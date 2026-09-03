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
    (("trapezoid", "width_at_end_boards"), r"widening to (\d+) ft at the end boards", "trapezoid width at end boards"),
    # Ten dimensions the owner states in prose that nothing here was reading. The
    # file's own header claimed check_geometry "reads the numbers out of that
    # document and fails if they diverge"; before these it read ten of them and
    # left the crease, the goal, the circles, the hash marks and both faceoff-dot
    # offsets free to say whatever they liked.
    (("faceoff", "dot_y"), r"(\d+) ft either side of the centre of the goal", "end-zone dot off centre"),
    (("faceoff", "dot_separation"), r"outside your own blue line, (\d+) ft apart", "faceoff dot separation"),
    (("faceoff", "neutral_dot_from_blue_line"), r"(\d+) ft outside your own blue line", "neutral dot from blue line"),
    (("faceoff", "circle_radius"), r"(\d+) ft radius red circle", "end-zone circle radius"),
    (("faceoff", "hash_length"), r"(\d+) ft long, placed \d+ ft \d+ in apart", "hash mark length"),
    (("goal", "width"), r"Goal opening \| (\d+) ft wide", "goal width"),
    (("goal", "height"), r"Goal opening \| \d+ ft wide × (\d+) ft high", "goal height"),
    (("goal", "crease_width"), r"(\d+) ft wide at the goal line and \d+ ft deep", "crease width"),
    (("goal", "crease_depth"), r"\d+ ft wide at the goal line and (\d+) ft deep", "crease depth"),
    (("goal", "crease_arc_radius"), r"(\d+) ft radius arc", "crease arc radius"),
]

# Two the owner gives in feet and inches, which the single-capture machinery above
# cannot read. (json path, regex capturing feet then inches, name, tolerance).
OWNED_FT_IN = [
    (("faceoff", "hash_separation"), r"\d+ ft long, placed (\d+) ft (\d+) in apart",
     "hash mark separation", 0.005),
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

    for path, pattern, name, tol in OWNED_FT_IN:
        want = dig(table, path)
        m = re.search(pattern, owner)
        if not m:
            problems.append(
                f"{name}: could not find it in {OWNER.name} with /{pattern}/ — "
                "either the document was reworded or the table invented a number"
            )
            continue
        got = int(m.group(1)) + int(m.group(2)) / 12
        checked += 1
        if abs(got - float(want)) > tol:
            problems.append(
                f"{name}: table says {want}, {OWNER.name} says "
                f"{m.group(1)} ft {m.group(2)} in = {got:.4f}. "
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
        # NHL Rule 1.7 as the owner quotes it at "The goal crease": the crease line
        # "runs 1 ft outside each goal post". So the crease is not an independent
        # width — it is the goal plus a foot each side, and if the goal ever moves
        # the crease has to move with it.
        ("crease width off the posts", G["crease_width"], 2 * (G["post_y"] + 1)),
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
        # The owner defines the top of the circle as "the edge of the faceoff
        # circle closest to the blue line", so it is not a free coordinate: it is
        # the dot less the radius. Nothing was checking, and it names a marking
        # the same picture paints.
        ("top-of-circle", F["end_zone_dot_x"] - F["circle_radius"], named["top-of-circle"]["x"]),
        ("top-of-circle y", F["dot_y"], named["top-of-circle"]["y"]),
        # `boards` must be ON the boards, not near them.
        ("boards y", S["width"] / 2, named["boards"]["y"]),
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
    # 4 ft 6 in is the owner's, at "The goal crease" — it was a bare 4.5 literal
    # here, which is a number this file was free to be wrong about on its own.
    m = re.search(r"extending \*\*(\d+) ft (\d+) in\*\* straight out", owner)
    if not m:
        problems.append(
            "crease side length: could not find the '4 ft 6 in' straight side in "
            f"{OWNER.name} — either it was reworded or this check invented it")
        straight = 4.5
    else:
        straight = int(m.group(1)) + int(m.group(2)) / 12
    r = G["crease_arc_radius"]
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
    #
    # ⚠️ THE LABEL USED TO OVERCLAIM THE TEST. It said "on the ice" and tested the
    # bounding RECTANGLE, but the rink is a rectangle with 28 ft corner arcs — so a
    # position out in the corner could be past the boards and pass. `corner` at
    # (82, 34) is the only named position in a corner region at all, and it clears
    # by 6 ft; the point is that nothing was checking. Now the corner arc is tested
    # too, so the sentence and the assertion say the same thing.
    half_l, half_w = S["length"] / 2, S["width"] / 2
    R = S["corner_radius"]
    for name, p in table["positions"].items():
        if name.startswith("$"):
            continue
        checked += 1
        x, y = p["x"], p["y"]
        if abs(x) > half_l or abs(y) > half_w:
            problems.append(f"position {name!r} at ({x}, {y}) is outside the boards")
            continue
        # Inside the corner quadrant, the boards are an arc of radius R centred at
        # (half_l - R, half_w - R) in each corner.
        cx, cy = half_l - R, half_w - R
        if abs(x) > cx and abs(y) > cy:
            d = ((abs(x) - cx) ** 2 + (abs(y) - cy) ** 2) ** 0.5
            if d > R:
                problems.append(
                    f"position {name!r} at ({x}, {y}) is outside the boards: it is "
                    f"{d:.2f} ft from the corner-arc centre, and the arc radius is {R}")

    # --- 5. the corpus's own definitional claims -------------------------------
    pos = table["positions"]
    checks = [
        ("half-wall is level with the faceoff dot",
         pos["half-wall"]["x"] == pos["faceoff-dot"]["x"]),
        # The x half of this was asserted and the y was not, so the half-wall sat
        # inside the faceoff circle for the whole life of the table while 48
        # assertions passed. It is *the boards*: it has to be outside the circle
        # and hard against the dasher.
        ("half-wall is outside the faceoff circle",
         abs(pos["half-wall"]["y"]) > F["dot_y"] + F["circle_radius"]),
        # ⚠️ THIS LABEL SAID "within a body's width of the boards" AND TESTED 4.5 FT,
        # which is not a body's width — a body's is nearer two. 4.5 is a drawing
        # tolerance, and what it actually bounds is that a player DRAWN on this datum
        # still touches the wall: a defence triangle's apex reaches 4.0 ft from its
        # centroid (see below), so a gap wider than that would leave open ice behind
        # a player the corpus calls "on the wall". The owner (§"The half-wall") says
        # only "the boards roughly level with the faceoff dot" and gives no offset,
        # so the number is the renderer's and the label now says so.
        ("the half-wall datum is hard against the boards, within one glyph's reach of them",
         S["width"] / 2 - abs(pos["half-wall"]["y"]) <= 4.5),
        # ⚠️ THIS ONE WAS A TRUE TEST UNDER TWO FALSE CLAIMS.
        #
        # (1) NOTATION. The comment read "the opposition glyph is the larger of the
        # two at 3.6 ft centre-to-apex". A triangle is not the opposition — SHAPE
        # CARRIES THE POSITION and FILL CARRIES THE TEAM (HEO "International Drill
        # Symbols": `▲ △ Defender / Player`; open is the reader's own team, solid the
        # opposition). The 3.6 glyph is a DEFENCEMAN, of either team. That sentence
        # was the inverted axis this project has already reverted once.
        #
        # (2) COVERAGE. The label said "a player glyph fits inside the boards" and
        # tested 3.6, the triangle's bare circumradius. The DRAWN ink goes further:
        # rink.mjs strokes the triangle 0.8 wide with a round join, so the apex ink
        # reaches 3.6 + 0.4 = 4.0, and the boards' own 0.55 stroke puts their inner
        # ink edge at 42.5 - 0.275. A defence triangle on this datum is therefore
        # about 0.28 ft THROUGH the dasher — which the corpus already knows: exactly
        # one such glyph exists, and it carries dy -0.3 in breakouts.mjs. So the
        # claim as written was false for the very case that motivated it.
        #
        # What is true, and what is now asserted: a FORWARD's circle clears. r 2.9
        # plus half of its 0.75 stroke is 3.275. Both constants are read off the
        # glyph branches in site/scripts/lib/rink.mjs and must move with them.
        # (The half-wall y was 40 for a while and every wall player hung through
        # the dasher; that is what this assertion exists to stop recurring.)
        ("a forward's circle drawn on the half-wall keeps its ink inside the boards",
         abs(pos["half-wall"]["y"]) + 3.275 <= S["width"] / 2 - 0.275),
        ("the corner is nearer the end boards than the half-wall",
         pos["corner"]["x"] > pos["half-wall"]["x"]),
        # ⚠️ THIS USED TO ASSERT A DEFINITION THE OWNER RETRACTS. It read "the
        # point is at the blue line" and tested `point.x == blue_line_x`, so the
        # checker printed "the coordinate table agrees with
        # rink_map_and_glossary.md" while asserting what that document denies in
        # three places — :356, :372 ("'the point' is an *area*, not the blue line
        # itself") and :621. An assertion string is read as authority, which is
        # why the string mattered more than the test.
        #
        # The COORDINATE is unchanged and stays unchanged: the owner gives no
        # offset anywhere, the offset is smaller than the glyph that would have to
        # carry it, and the datum is anchored in over a hundred places across 11
        # diagram modules — three of which use `point:*:far` as a neutral-zone
        # landmark for the far blue line. (This comment said "109 times", which
        # reproduces at neither HEAD nor the working tree; rink.json's `point`
        # $comment now carries the grep instead of a figure, because a count
        # copied into a comment goes stale the moment a diagram is written.)
        # rink.json's `point` $comment sets all of that out. What
        # changed here is only that nothing states the retracted definition.
        #
        # ⚠️ WHICH STATE OF THE OWNER THIS ASSUMES, because it is not the
        # committed one. The retraction lives in the WORKING TREE of
        # rink_map_and_glossary.md and was not committed as of 84671fb. At HEAD
        # that document's :356 still reads "The point is at the blue line" —
        # i.e. at HEAD the owner ASSERTS the definition this comment calls
        # retracted, and only :372 and :621 deny it. Checked by reading
        # `git show HEAD:content/foundation/rink_map_and_glossary.md`.
        # If that edit is dropped, these two comments misdescribe their owner
        # and must be revisited; the ASSERTIONS below stay correct either way,
        # because both are inequalities that a flat "at the blue line" also
        # satisfies. Every dimension regex in OWNED was re-run against the HEAD
        # text and all still match, so the numeric half of this file does not
        # depend on the uncommitted edit.
        ("the point anchor is at the blue-line end of the zone, never outside it",
         pos["point"]["x"] >= L["blue_line_x"]),
        ("the point is up at the top of the zone, not down in the circles",
         pos["point"]["x"] < pos["top-of-circle"]["x"]),
        # rink_map_and_glossary.md:683 puts the point and the half-wall "a little
        # under 44 ft" apart, having been corrected FROM a flat 44 — ⚠️ AND THAT
        # CORRECTION IS ALSO UNCOMMITTED. At HEAD :683 reads "**44 ft apart**",
        # flat, with no hedge; on that text the drawn 44 is exactly right and the
        # apology below is unnecessary. The bound holds under both readings.
        # Be honest about
        # what this asserts: with the anchor on the line the drawn separation is
        # exactly 44, i.e. sitting on the upper bound of the owner's hedged range
        # rather than inside it. That is the cost of the schematic, it is bounded
        # by the width of one glyph, and it is recorded here rather than hidden.
        ("the point and the half-wall are the better part of 44 ft apart",
         40 <= pos["half-wall"]["x"] - pos["point"]["x"] <= 44),
        ("behind-net is behind the goal line",
         pos["behind-net"]["x"] > L["goal_line_x"]),
        # The owner (§"The high slot") gives the span exactly: "from the level of
        # the faceoff dots up to the top of the circles". The anchor sits at the
        # dot end of it, which is the region's low edge — deliberate, and the
        # note on the entry says so — but it must not drift out of the span.
        ("the high-slot anchor is in the band from the dots up to the top of the circles",
         pos["top-of-circle"]["x"] <= pos["high-slot"]["x"] <= F["end_zone_dot_x"]),
        # ⚠️ THIS LABEL READ "the slot is inside the top of the circles", which is
        # not what the owner says: §"The slot" runs the slot FROM the top of the
        # circles "down to the goalmouth", so the top of the circles is the slot's
        # own upper boundary rather than something it is inside of. And the test
        # bounded one end only, so the anchor could have been drawn behind the net
        # and passed. Both ends now, and the label is about the anchor.
        ("the slot anchor lies between the top of the circles and the goalmouth",
         pos["top-of-circle"]["x"] < pos["slot"]["x"] < pos["goalmouth"]["x"]),
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
