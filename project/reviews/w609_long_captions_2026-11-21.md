# W608–W609: the longest diagram captions trimmed, including a safety-ruled shot-blocking cut (21 November 2026)

## W608 census (diagram-reviewer, read-only)

13 captions were over 800 characters. Table: `w608_long_caption_rows_2026-11-21.tsv`.

**Result:** 5 trims (about 650 characters), 1 wording-only change, and 7 held for W541's reasons. No new argument was found for: faceoff-dzone-alignment, forecheck-212, the-trapezoid, forecheck-pinch, winger-offensive-zone-patches, forecheck-122, the-call-and-who-can-see-it.

None of the 13 reaches 700, because the limbs that must stay verbatim fill the room.

## W609

### Safety ruling on pk-wedge-plus-1 (safety-reviewer)

**Yes.** The census proposed reversing W469/W362 by cutting "Blocking shots is a technique, not an act of courage" and "Half-deflecting a shot your goalie could not see is worse than letting it through cleanly".
- "Half-deflecting" is a goals-against point, not an injury instruction.
- "Technique, not courage" is framing.
- The protective mechanics stay in amber, with the ⚠️ directly before "Block from close".
- how_to_watch_hockey.md :210 now hands shot-blocking technique to Special Teams.
- special_teams.md voices both cut sentences in its Shot blocking section (:773, :778, :789; chunks 044–045). Beside the marker (chunks 030–031) it voices the lane and screening limbs, which the caption keeps.

### Edits (diagram agent, captions only)

| Caption | Before → after (chars) | What changed |
|---|---|---|
| layer-not-converge | 1005 → 779 | Departure from the sketch: "Converging on the same puck instead lets one pass beat you both." |
| practice-small-area-in-one-zone | 844 → 780 | Trimmed |
| angle-into-the-corner | 835 → 710 | Trimmed |
| winger-dz-rim | 808 → 706 | "Rimming past a checker…"; all three CARRIES phrases and SHOULDER_TAIL untouched |
| scan-before-a-wall-reception | wording only | — |
| pk-wedge-plus-1 | 950 → 805 | The approved sketch, byte for byte |

Superseded "kept word for word" module comments were updated with dated W609 notes.

## Review

**diagram-reviewer.** All six captions are OK. Each says what is drawn, every ⚠️ limb, hedge and disclosure is verbatim, and every host keeps what it needs.
- `check_caption_negations`: its hits on these captions are all in unchanged text.
- **Two Minors, both in module comments and both repaired.** Each comment named the wrong carrier for a cut:
  - **pk-wedge:** it cited chunks 030–031, but the sentences are in 044–045.
  - **practice:** it cited "the drawing shows both", but the carrier is host :329.

## Rows

**Closed:** W541(1) is updated. Seven captions remain over 800 on purpose.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary, which rebuilds the diagrams: exit 0, after every edit (`scratchpad/build_w609b.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs` (12 CARRIES phrases present), `check_tables`, `check_zones`.
- `check_callout_flow --bare`: 0.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **The pictures.** Not viewed.
- **Audio.** Host audio other than special_teams was not rendered.
- **Teaching value.** Whether the shorter captions teach as well to a first-time reader.
