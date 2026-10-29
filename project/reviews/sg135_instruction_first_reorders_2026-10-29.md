# SG135: three summary units re-ordered to lead with the instruction (29 October 2026)

**Files:** content/off-the-ice/practice_and_development.md, content/systems/special_teams.md, content/reading-diagrams/reading_ice_hockey_diagrams.md, project/plans/OPEN_ITEMS.md

## Why
`check_instruction_first.py` reported 35 of 1,417 Common Mistakes and Key Takeaways units opening on a tariff (2%). Eleven are on the rules pages (uk_rules, rules_primer), where leading with the rule is correct. One agent read the other 24 in full against the owner's tactics-first rule and "THE REFRAME — ORDERING AND RESTATEMENT".

## What changed
- 3 units RE-ORDERED, with the instruction now first and no words added or removed:
  - practice_and_development CM :602 "Treating games as practice";
  - special_teams CM :1182 "Assuming last change is automatic at home";
  - reading_ice_hockey_diagrams CM :236 "Assuming a key you meet elsewhere means the same thing".
- 21 were false positives or correct as they stand. Each already leads with an instruction, and a book name or scope sits in the same sentence; or the unit is about how the books differ; or it is an honest disclosure (scanning :628). The per-unit table is in the agent report summarised here.
- check_instruction_first: 35 → 32 corpus-wide.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All three CONFIRMED as pure re-orderings. Word counts match per hunk, and no claim, qualifier or citation changed or moved to a different clause. |
| safety-reviewer | SHIP on all three files. Each leads with the instruction, none is cheaper, no ⚠️ involved; each file rendered. |

### C11
No coordinator content edits.

## Dimensions (per review_process.md:220-234)
- D1–D3: rules-verifier (no rule claim changed).
- D7 and D9–D12: safety-reviewer. All three files rendered; check_marker_pairs reports 0 LOST.
- D13: none.
- D14: check_links passes.
- Declared out of scope by the coordinator: D4–D6, D8 and D15 (no URL, quotation, absence claim, owned number or structure changed; full site build run).

## Carried to the plan
- rink_map KT :702 and scanning KT :628 open with a scope or a disclosure where an owner might prefer a player action; changing them needs new text.
- goaltender CM :1651 is a pure tariff with no instruction to move.

## What this method could not have found
- Buried instructions in body paragraphs, Key focus or Overview; the tool reads only the first sentence of CM/KT units.
