# W223: coaching sections lead with the tactic, wave 2 — 200 sections reordered on 13 pages (10 November 2026)

**Files**
- content/technique: skating.md, shooting.md, puck_handling.md, passing_and_receiving.md
- content/foundation/on_ice_communication.md
- content/positions/switching_positions.md
- content/systems: zone_entries.md, offensive_zone_play.md
- content/hockey-iq: playing_without_the_puck.md, puck_support_and_spacing.md, risk_management.md, time_and_space.md, scanning_and_anticipation.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
Owner decision, 9 November 2026: "Yes, lead with the tactic". Wave 1 (W222, 3d69b1d0) covered 13 pages; this wave covers the other 13 pages in the census. Five authoring agents each had exclusive ownership of their pages. Each brief carried wave 1's lesson: never move a paragraph that permits, exempts or reassures above its panel unless its scope is in the same sentence, and move a safety limit up together with its lead.

## What changed
- In each panel-first coaching section, the tactical lead paragraph was moved above its ```facts panel. It sometimes moved with the next paragraph, where that paragraph pointed back at the lead or carried its safety limit (skating "Arriving at the boards", switching_positions "Wall play", on_ice_communication "Puck direction").
- This is a moves-only change. A sorted-line diff of every file against HEAD is empty.
- Moved per page group:
  - skating and shooting: 39
  - puck_handling, on_ice_communication and switching_positions: 39
  - offensive_zone_play and playing_without_the_puck: 31
  - zone_entries and passing_and_receiving: 43
  - the four hockey-IQ pages: 48
- 200 sections in total.
- In seven pass-type sections in passing_and_receiving, "When to use it" moved rather than the first "Mechanics" paragraph. The coordinator accepted this: when to use a pass is the tactic.
- Three moves were reverted to byte-identical HEAD order, and one candidate was never moved:
  - **zone_entries "Using a teammate as a screen"** (author, on render): "the second one runs interference" would have ended one spoken chunk, with its limit at the start of the next.
  - **risk_management "The second test: who is behind you?"** (author, on render): the pinch "go" and its checking limit would have split across chunks.
  - **time_and_space "Behind the net is the safest pivot"** was never moved (author), because it reassures and its own-net limit sits two paragraphs later.
  - **passing_and_receiving "Backhand pass"** (coordinator, on the safety read): its back-to-the-ice escape names a posture whose safety rule is only a pointer. That was already so in HEAD, but leading with it made it the first thing heard. Reverted; the wording fix is a plan row.
- Sections left panel-first were left for a recorded reason: a list follows the panel; the lead ends in a colon; the left-behind paragraph points back; the lead is a rule; or moving would separate a goalie-contact or checking limit (zone_entries "The middle drive", "Forechecking during a delayed offside"; playing_without_the_puck "Whether you touch the goaltender"). These need written leads (plan).

## Measured
- Panel-first coaching headings, per author census:
  - skating 42→12
  - shooting 13→4
  - puck_handling 41→11
  - on_ice_communication 5→1
  - switching_positions 10→5
  - zone_entries 34→12
  - passing_and_receiving 24→3
  - offensive_zone_play 27→17
  - playing_without_the_puck 31→10
  - risk_management 15→4
  - puck_support 23→8
  - time_and_space 12→0
  - scanning 11→1
- Warning markers: marked units identical to HEAD in every file. 0 bare glyphs and 0 amber panels on every page.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×5 | Each confirmed an empty sorted diff and 0 LOST. They rendered SSML and checked that every safety-adjacent move keeps its limit in the same chunk; two of them compared against HEAD renders. Three reverted their own moves on that evidence. |
| safety-reviewer (all 201 moved sections — 200 shipped plus passing "Backhand pass" before its revert; renders of tree and HEAD; all 78 new chunk boundaries read) | Nothing blocking. The wave-1 shape does not occur: no moved paragraph permits, exempts or reassures with its limit only in the panel after it or in a later chunk. A permissive-language grep over every moved line found nothing permissive. Several placements are better than HEAD: skating "Arriving at the boards", switching_positions "Wall play" and puck_handling "Spinning off pressure" now keep the limit beside the lead. R1 was passing "Backhand pass" (reverted; plan). NOTES: shooting crease-screen goal-cost limb now in the next chunk (the penalty limb is covered in the same chunk); time_and_space "Delay" own-zone Never in the next chunk (tactical, scoped in the Action line); two puck_handling list splits (listening quality only). |
| site-reviewer (Playwright Chromium; real 400×860 and 1440×900; light and dark; final build; skating, puck_handling, zone_entries, risk_management, time_and_space, passing_and_receiving) | Nothing blocking. 170 prose-above-panel junctions at a consistent 20px. 228 ⚠️, all warn-inline, 0 bare, 0 panels. 216 link clicks landed clear of the header. No overflow; clean console; theme toggle persists. RECOMMENDED: 42 sections on those pages still open on a panel; each was excluded for a recorded reason (plan). |

No rules-verifier ran: no rule text changed.

### C11
- The authoring agents made the 200 moves and three of the reverts.
- The coordinator made the passing "Backhand pass" revert (byte-identical to HEAD) and wrote the briefs, the plan row and this record.
- The safety read covered every moved section, and the revert restores HEAD text.

### Checks after the last content edit
- check_facts exit 0, no pipe
- check_links --quiet exit 0
- check_absolutes exit 0
- check_marker_pairs 0 LOST and 0 SPLIT HALF on all 13 files
- Sorted-line diff against HEAD empty for all 13
- Full `npm run build` (absolute binary) exit 0 after the last edit, through check:links (57 pages, all resolve)
- check_callout_flow --bare 0 on every page

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 Rules, exceptions, divergence, citations, provenance, negatives | not engaged — no rule text changed (empty sorted diffs) |
| D7 Cardinal rule | the tactic leads each moved section |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | engaged on one page: offensive_zone_play's Overview opening paragraph moved above its panel (the only Overview whose order changed, per a section-by-section comparison against HEAD); words unchanged; covered by the safety read. Key focus, Common Mistakes and Key Takeaways untouched on all 13 |
| D10 Key-facts layer | facts lines unchanged; check_facts_antecedents hits all pre-existing |
| D11 Reader safety | safety-reviewer over every moved section, rendered against HEAD |
| D12 Read-aloud | every file rendered by its author and by the safety-reviewer; new chunk boundaries read |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build; 216 link clicks |
| D15 Rendered site | site-reviewer on the final build, 6 of 13 pages; the rest checked mechanically |

## What this method could not have found
- Order-dependent meaning with no tell-tale word.
- The 7 pages not rendered in a browser.
- The remaining panel-first sections, which need written leads (plan).
- Real phones and screen readers. The narration audio lags until it is rebuilt.
