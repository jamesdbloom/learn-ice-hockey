# W559–W560: four more labels off goal lines and nets, and five spoken warnings that were not the reader's removed or moved (20 November 2026)

## W559, diagrams (placement only, no words)

| Diagram, label | Change | Result |
|---|---|---|
| dz-box-plus-one "the only one chasing" | `[-8, -8]` | Off the goal line and the dot. Still crosses the arc |
| the-risk-map "their end" | `labelDx -9, labelDy 11` | Above the far net, clear of net, crease and goal line. About 4 ft of "th" sits outside the shading. The reviewer says it still plainly names that zone, and moving it fully inside would cross the goal line |
| dz-walk-down-man "on the corner" | `[-8, -8]` | Clean |
| dz-walk-down-man "on the net front" | `[-6, -8]` | Off the goal line. Still crosses the lower arc |

**diagram-reviewer:** all OK. One cosmetic minor: a faceoff dot sat on the letter tops of two labels. Fixed at `[-8, -8]`. The dot test missed it because of the 15% vertical inset (filed).

## W560, spoken-warning density (W539(2))

**Census (content-reviewer, read-only):**
- Of W539(2)'s four "over-escalated" markers, only goaltender :1283 is. winger :873 is the original marker of its split, not the added one. goaltender :1716 was never touched by the split. forechecking :813 is earned.
- md_to_speech sets `important` once per spoken unit, so de-marking a one-glyph unit removes one "Important.".
- The census also found forechecking's "after their icing" row (:876–881) the weakest escalation in the three files: the reader is the non-icing team.

**Edits (coordinator decisions). No words were changed, only ⚠️ and bold:**
- **goaltender :1283 de-marked** ("A hit on your back is never a bare minor…").
  - The goalie is the victim, and the unit gives no instruction.
  - Before the split (`b23567ee^`), this text was unmarked inside a paragraph whose one marker survives at :1281, which is in the same chunk.
  - `check_marker_pairs --base b23567ee^`: 0 lost.
- **forechecking :624 marker moved** from the premise onto "Changing course into a player without the puck is penalised in every book here".
- **forechecking :880 marker moved** onto "A late change is not free the way a late ask is". The delay-of-game minor reaches either team.
- **forechecking :876, :878, :879 and :881 de-marked.**
  - :876 introduces the row.
  - :878 is the IIHF 81.4 vs 82.1 exceptions note. Its bench minor falls on the icing team (IIHF 82.2(V): warning, then bench minor).
  - :879 is a PWHL renumbering note.
  - :881 is Hockey Canada's time-out rule, which binds only the team in violation of icing.

## Review

**safety-reviewer: all OK.** It asked of each de-mark whether a reader on either team, acting without the warning, could be hurt, ejected or penalised; the answer was no.
- It rendered forechecking. The one real cost in the block, the late-change minor, keeps its "Important." (chunk 058). :624 still opens with "Important." (chunk 039).
- goaltender :1281 keeps the mandatory tiers' marker.

## Rows

**Closed:** W539(2)'s four named markers, and the three pre-existing labels.

**New:** goaltender :1635–1641 and CM :1713–1715 (victim's-side ladders, a unit-by-unit decision); the ladder restatement, handed to D8; free two-glyph removals; audio density per minute; the dot-test vertical inset.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w560.log`).
- check-arrivals: 0 hard.
- `check_callout_flow --bare`: 0.
- `--panels`: 0.
- `check_marker_pairs`, against HEAD:
  - goaltender: 1 lost (:1283, intended; 0 against `b23567ee^`).
  - forechecking: 4 lost (:876, :878, :879, :881, intended).
  - No other losses.
- `check_label_paint`: 462–463 (a worklist).

## Dimension coverage

| Dimension | Status |
|---|---|
| D11 | Covered: every de-mark tested against both teams' exposure |
| D12 | Covered: forechecking rendered |
| D13 | Covered: the label moves were checked by the diagram-reviewer |
| Others | Not engaged (no words changed) |

## What this method could not have found

- **Audio density per minute.** No tool measures it.
- **Units outside the three files** that carry a marker on a cost the reader never pays.
- **The goaltender chunk** was not rendered this round. Its adjacency was read from paragraph order and the census's earlier render.
