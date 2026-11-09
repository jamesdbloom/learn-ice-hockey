# W219: "What it costs" subsections open with what to do, not with the rules panel (9 November 2026)

**Files:** content/positions/center.md, content/systems/forechecking_systems.md, project/plans/OPEN_ITEMS.md, this record.

## Source
Owner decision, 9 November 2026 ("Instruction first"), after the SG214 site-reviewer measured center's What it costs subsections opening with all-Rule facts panels: 1,676px ("Where checking is barred") and 1,625px ("Holding the puck") at 400px before the first instruction, under an intro promising "Each part opens with what to do".

## What changed
- **center.md, 10 subsections, and forechecking_systems.md, 5 subsections:** the bold instruction paragraph moved from just below the ```facts panel to just above it. Moves only — a sorted-line diff against the pre-wave copies is empty for both files.
- **One word change, center "Holding the puck":** "**With your own net empty it is worse still.**" became "**… it is worse than a penalty shot.**" After the move, "worse still" sat an eight-line panel away from the penalty shot it compares with. The next sentence states the awarded goal, so no new claim is added.
- **defensive_zone_coverage.md and faceoffs.md were checked and needed nothing:** DZC's What it costs has no facts panels; faceoffs' subsections already led with their instruction (e661dcc6). The coordinator's brief had assumed all four pages carried the defect; two agents refuted it.

## Measured
- 400px, heading to first instruction, every subsection on both pages: 34px top to top (was 1,676px and 1,625px on center's two longest).
- Paragraph-to-panel gap: 20px (normal margin collapse).
- Spoken order now heading → instruction → "The key facts for this section." → facts lines → the rest; five center subsections gain a chunk break between instruction and facts, each instruction still heard first.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×4 | DZC and faceoffs: nothing to move (refuted the brief). forechecking: 5 moved. center: 10 moved, "worse still" antecedent reported (fixed by the coordinator). |
| site-reviewer (local preview, before commit; Playwright Chromium, real 400×860 and 1440×900, light and dark) | Nothing blocking. Instruction first in all 17 subsections in all 4 cells. ⚠️: center 90 / forechecking 143 in `<main>`, all warn-inline, 0 bare (counting the inside-strong state, excluding svg). All 19 What it costs ToC links land clear of the 56px header. No overflow; clean console. |

No rules-verifier or safety-reviewer: no rule claim changed. The one new phrase ("worse than a penalty shot") restates the comparison the next sentence prices (an awarded goal).

### C11
Authoring agents made the moves; the coordinator changed "worse still" to "worse than a penalty shot" from the agent's report, and wrote the brief, the plan rows and this record.

### Checks after the last content edit
check_facts exit 0 (889 blocks, 6158 facts), no pipe; check_links --quiet exit 0; check_absolutes exit 0; check_marker_pairs 0 LOST, 0 split-half on both files; check_facts_antecedents 0 hits on center; full `npm run build` (absolute binary) exit 0 after the last edit, check:links 57 pages all resolve.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 Rules, exceptions, divergence, citations, provenance, negatives | not engaged — no rule text changed |
| D7 Cardinal rule | instruction now leads each subsection |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | not engaged (What it costs body only) |
| D10 Key-facts layer | facts lines unchanged; checked for back-pointers to moved prose (none) |
| D11 Reader safety | no tariff moved between units; the instruction-and-tariff paragraphs are intact |
| D12 Read-aloud | rendered both pages; spoken order read |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build; ToC links clicked |
| D15 Rendered site | site-reviewer before commit |

## What this method could not have found
- Restatement the move made more visible (plan rows: forechecking bullets after panels; faceoffs "Your head at the dot").
- Real phones, Safari and Firefox, screen readers; narration audio lags until rebuilt.
