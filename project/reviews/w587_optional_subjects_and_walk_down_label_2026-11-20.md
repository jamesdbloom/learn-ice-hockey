# W587: optional Risk and Options subjects, two switching-positions pointers, and one walk-down label (20 November 2026)

## Content (one agent, 8 files)

The agent judged the 21 optional `Risk:`/`Options:` rows from `w585_risk_options_optional_rows_2026-11-20.tsv`, each heard alone.

**Applied (11):**
- center :353, "Under pressure, …"
- defender :386, "Under neutral-zone pressure, …"
- defender :585, "Under severe pressure at the offensive blue line, …". "A chip out of the zone" no longer reads as clearing your own zone.
- defender :589, "Losing the offensive blue line"
- goaltender :859, "Direction calls —"
- dtr :838, "Rush calls —"
- faceoffs :235, "On a draw, …". Heard alone, "backhand snap" sounded like a shot.
- faceoffs :370, "Weak-side answers —"
- faceoffs :528, "Offensive-zone faceoff plays —"
- ozp :777, "all four half-wall options". The four lines after it now land.
- puck_handling :734, "Sell a fake with head and eyes"

**Left (10)** as clear when heard alone, with reasons in the agent's report: center :75 and :324, goaltender :858, switching :295, winger :397, breakouts :433 and :609, dtr :538, ozp :891 and :907.

**Also fixed:**
- switching_positions :83: "Being slow for the first few weeks after a switch is normal, and it passes".
- switching_positions :462: "Abandon a position switch … at the bottom of the performance dip".

No ⚠️ was added, removed or moved. No Rule: or Convention: line was touched.

## Diagram (one agent, defensive_zone_coverage.mjs)

- dz-walk-down-man "on the corner": `labelHint` [-8,-8] → [-9,-8]. It now clears the circle arc, the dot and the other paint, with its leader to its defenceman. Checked at 400 px.
- "On the net front", dz-box-plus-one "the only one chasing" and the-risk-map "their end" stay where they were. A search of every accepted slot (−24…16 ft; for the zone label, every labelDx and labelDy) found none that clears the arc and still names its owner. Those arc crossings are now accepted.

## Review

**safety-reviewer: OK, nothing to fix** (13 lines).
- The situation each line names was checked against its section heading: center :344, defender :379 and :578.
- defender :585's "chip out … to reset" agrees with the block's own Risk line.
- No line is narrower or changed in claim, and every next line lands.

## Rows

**Closed:**
- The 21 W584 optional rows.
- switching_positions :83 and :463.
- The W559 arc sub-row: one fixed, three accepted.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w587.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- `check_label_paint`: 460 → 459.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 8 files.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Audio.** Not rendered.
- **Other heading-dependent lines in these blocks that the census did not list**, e.g. defender :385 "Action: Move the puck quickly".
