# W470: last caption routing batch — forechecking and breakout captions trimmed to their floors, and Goaltender's clearing price stated twice near its diagram instead of four times (18 November 2026)

**Files changed**
- **Content:** positions/goaltender.md (:714)
- **Diagrams:**
  - site/src/diagrams/forechecking_systems.mjs
  - site/src/diagrams/breakouts.mjs
  - site/src/diagrams/goaltender.mjs
  - site/src/data/diagrams.json (rebuilt)
- **Scripts (coordinator, between waves):** scripts/check_caption_pairs.py. The forecheck-212-stacked reason now names the may-you-check prompt it now relies on.
- **Also:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:**
  - From W469 (5): the last 12 long captions.
  - From W469 (1): goaltender restatement routing.
- **Authors:** three agents. The coordinator built once, at the end.

## Captions
| id | words: HEAD → now | amber at 400 | note |
|---|---|---|---|
| forecheck-212-stacked | 152 → 114 | 15.7% | find-out prompt routed to forecheck-212, voiced directly before it (pair enforced) |
| forecheck-pinch | 190 → 179 | 23.7% | floor |
| forecheck-roles-rotate | 210 → 208 | 8.1% | floor; now names "the opponents" pass |
| forecheck-212 | 238 (untouched) | — | **held** pending a safety ruling on its body-checking list (non-owner hosts) |
| forecheck-122 | 158 (untouched) | — | floor (dog/fox/hawk key, arrival-test note, sole tariff in how_to_watch_hockey) |
| breakout-five-roles | 150 → 144 | 0 | wording |
| breakout-reverse | 153 → 148 | 26.4% | wording; names no caller (the W458 rule is not contradicted) |
| breakout-rim | 152 → 150 | 27.1% | wording; "It" ambiguity fixed |
| breakout-against-1-3-1 | 158 → 149 | 25.1% | "your defenceman… your winger": opponent/carrier collision fixed |
| goalie-safe-outlets | 148 → 93 | 0 | book split routed to host :730 (same chunk) and :721 |

## Goaltender clearing price
**The problem.** The split was stated three times directly before the goalie-safe-outlets marker, and the caption made a fourth.

**:714 lead now reads:** "In trouble, put it along the glass, never over it: every book can make a clear out of the rink a minor, and the fourth option below sets out when."
- The author refused the brief's suggested "a penalty in every book". USA Hockey 610(c) penalises a deliberate clear only, so "every book is" would overstate it. "Can" holds for all six books (rules-verifier).

**Unchanged:**
- :721, the facts line, voiced alone. It is the only short form that stays accurate.
- :730, list item 4, which carries the full split.
- :763 and :1702.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All OK. "Every book can make… a minor" checked against NHL 63.2(ii)/(iii), IIHF, PWHL 65.2, HC 10.1(v), CARHA 55(a) and USAH 610(c). The forecheck-pinch lead was checked against USAH 604(b). |
| safety-reviewer | CLEAR. "Important." plays ×1 per voiced copy across 10 hosts. forecheck-212's "Find out first whether you may body check" plays within 1,600 characters before stacked, in the same chunk, in both hosts. Breakout posture limbs unchanged. Goaltender upheld. |
| diagram-reviewer | 7 cleared. Three fixes applied: roles-rotate whose-pass, rim stiffness, 1-3-1 collision. forecheck-212 recorded as **held**, not floor. A false module comment about rink_map's D-to-D sentence was corrected. |
| site-reviewer | 10 pages at 400 light/dark on the 17:01:23 build. 0 bare, untreated or panels; ⚠️ counts equal HEAD; 0 console errors; every worst window unchanged; no glyph caption over 45%. forecheck-212 renders directly above stacked on both hosts. |

### C11
The coordinator wrote no content or caption text. The coordinator edited only a reason string in check_caption_pairs.py, between waves.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 17:01:23. The newest source is breakouts.mjs, 17:00:39.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets pass.
  - check_counts: no change.
  - check_caption_pairs: 0 violations.
  - check_callout_flow --bare = 0.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## The caption routing programme, closed
- **At its 18 Nov census:** 67 of 204 captions were 150 words or more.
- **Now:** seven remain over 150, and each is at its layer-test floor or held:
  - forecheck-212 (238, held)
  - forecheck-roles-rotate (208)
  - faceoff-dzone-alignment (185)
  - forecheck-pinch (179)
  - the-trapezoid (164)
  - angle-into-the-corner (160)
  - forecheck-122 (158)

- **Amber:** at 400, every glyph caption measured in W464–W470 is under 45%.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | 63.2, 65.2, HC 10.1(v), CARHA 55(a), USAH 610(c), USAH 604(b) |
| D2 Exceptions | — |
| D3 Cross-book divergence | clearing split kept in the facts line and body |
| D4 Citation integrity | check_caption_pairs reason updated |
| D5–D8 | not engaged |
| D9 Summary layer | restatement routing (four restatements down to two near the marker) |
| D10 Key-facts | :721 kept self-contained |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | antecedent fixes (roles-rotate, rim, 1-3-1) |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W470)
1. **forecheck-212's body-checking list** needs a safety ruling before it can be cut. Its non-owner hosts are winger, center, game_management and how_to_watch_hockey. how_to_watch_hockey :130 says the captions' "body-checking law belongs to Forechecking Systems".
2. **breakout-reverse.** "D1 was working up the **right** wall" uses rink coordinates. A player skating up ice would call it their left. Check this against rink_map's convention (pre-existing).
3. **forecheck-212-stacked** now depends entirely on forecheck-212's caption keeping its find-out prompt word for word. check_caption_pairs enforces the adjacency, but not the text.

## What this method could not have found
- Whether the shorter captions teach faster.
- Real synthesised audio of the new strings.
