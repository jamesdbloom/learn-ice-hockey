# SG118: "never two minutes" scoped to checking from behind on Body Contact and Defensive Zone Coverage (28 October 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/systems/defensive_zone_coverage.md
- site/src/diagrams/defensive_zone_coverage.mjs
- site/src/data/diagrams.json
- project/plans/OPEN_ITEMS.md

## Why
A sweep checked the claim "no book prices a hit to the back at two minutes" against every rulebook. Said of the **foul**, checking from behind, it is true in all six books. Said of the bare **act**, it is false in five of them, though always in the stricter direction:
- **Hockey Canada:** Interpretation 1 to 7.5(a) calls a stationary cross-check from behind cross-checking, a 9.2(a) minor.
- **NHL, PWHL and IIHF:** 43.1 requires a player who is not aware of the hit, so a seen cross-check falls under 59.2 (PWHL 60.2).
- **USA Hockey:** Casebook 609 Situation 2 calls a stick to the back without the force of a check cross-checking, a 609(a) minor.
- **CARHA:** only CARHA holds for the act. 53(a) covers any intentional push from behind, and its Note bars referees from substituting another penalty.

The owner page and Defensive Zone Coverage, along with its diagram caption, are fixed here. About 35 summary-layer sites in 17 other files are deliberately left alone. They err strict, and adding the scope everywhere would cost readability. They are listed in the plan.

## What changed
**body_contact_and_battles**
- **:1482** used to say "The shove into a player's numbers is not priced as a cross-check at all". As a statement of the act, that was false. It now reads: "**In the NHL, PWHL and IIHF**, a shove into a player's numbers is checking from behind when they cannot see it coming (43.1), and cross-checking when they can (NHL and IIHF 59.2, PWHL 60.2)."
- **:1484** ("The other three treat it differently") now covers CARHA properly. CARHA 53(a) reaches any intentional push from behind anywhere on the ice, at a minor plus a game misconduct or more, and its Note bars substituting another penalty. The 53(b) match follows in the same chunk.
- **:778** gains USA Hockey Casebook 609 Situation 2 beside the Hockey Canada stationary exception.
- **:934** is now scoped to "checking from behind".
- **:2014** (Common Mistakes) now says "can be called checking from behind" in the NHL, IIHF and PWHL, and adds "CARHA always calls it that, and Hockey Canada does whenever you are moving or put them into the boards or goal". The instruction "Never put the shaft into their numbers" still leads.

**defensive_zone_coverage**
- **:207, :495 (facts), :512, :862 (Common Mistakes), :930 (Key Takeaway):** each now carries "(at two minutes alone) as checking from behind".
- **dz-collapse-corner caption:** "No book prices checking from behind at two minutes alone". Rebuilt into diagrams.json.

## Reviews
| Round | Dimension | Reviewer | Result |
|---|---|---|---|
| 0 | D2 sweep | rules-verifier | Found the act/foul distinction and listed about 55 sites. |
| 1 | D1–D3 | rules-verifier | All 11 sites CONFIRMED. INCOMPLETE: the :1482 lead was not scoped in words, and CARHA was missing from :1484. |
| 1 | D11, D12, D9, D10, D7, D13, D14 | safety-reviewer | bcb FIX, Major: the :1482 lead put the awareness test on all six books, which would send a CARHA reader to a 54(a) minor. dzc SHIP, with one minor: "alone" was missing at :862 and :930. |
| 2 | D1–D3, D11, D12 | safety-reviewer (with rule checks against carha_2026, hc, usah) | Both files SHIP. The Major is closed, "CARHA always calls it that" is upheld, and the 53(b) match shares chunk 130 with the floor. |

### Notes on coverage
- D6, D7 and D9–D14 were covered by the safety-reviewer, whose brief named them, rather than by the content-reviewer and facts-reviewer the table assigns. That was the coordinator's deliberate choice for a small wording wave; the facts line changed by four words.
- rules-verifier last saw the :1482 lead in round 1. The round-2 rule checks covered CARHA, Hockey Canada and USA Hockey. The commit gate re-derived the final NHL/PWHL/IIHF 43.1, 59.2 and 60.2 citations itself.

### C11
- The coordinator made no content edits. Every edit was made by the agent and reviewed afterwards.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier (round 1) and safety-reviewer rule checks (round 2). Sources: NHL/PWHL/IIHF 43.1–43.3 and 59.2/60.2; hc.txt 7.5 Interps. 1–2 and 9.2(a); usah 608 and Casebook 609 Situation 2; carha_2026 53(a)/(b) and the Note. |
| D2 Rules travelling without exceptions | The rules-verifier sweep; the rest of the corpus is carried in the plan. |
| D3 Rule-set divergence | rules-verifier and safety-reviewer: each book now has its own test. |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed. |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation. |
| D6 Negative existence claims | rules-verifier: neither IIHF Situation Handbook rules on 43 or 59; the EIHL Casebook scores 0 for both. |
| D7 Cardinal rule | safety-reviewer: no coaching choice stated as law. |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed. |
| D9 Summary layer | safety-reviewer: dzc's Common Mistakes and Key Takeaway now match the body. bcb's Common Mistakes :2014 matches :1482–:1484. |
| D10 Key-facts layer | safety-reviewer: dzc :495, voiced alone, is correct. |
| D11 Reader safety | safety-reviewer, rounds 1 and 2. |
| D12 Read-aloud integrity | safety-reviewer rendered bcb in both rounds and dzc in round 1. |
| D13 Folklore | safety-reviewer: none. |
| D14 Structure, style, terminology, cross-links | safety-reviewer. Paragraphs are under 1,200 characters (:1484 is 1,146). check_links passes. |
| D15 Rendered site | The coordinator ran a full site build after the last edit. Only the caption text changed, so no site-reviewer was run (declared out of scope by the coordinator). check_absolutes covers the rebuilt caption. |

## Carried to the plan
- bcb's own summary layers keep the act form, deliberately and in the strict direction: :31 (Key focus), :2001 (Common Mistakes), :2119 (KT6).
- The unscoped act form of the claim stays at about 35 summary sites in 17 files. The worst are playing_without_the_puck :806 (facts) and :832 (body), and forechecking :221. Every one errs strict.
- IIHF 43.1's "in any manner" sentence is not conditioned on awareness in its own words. The seen/unseen split is a reading, and no IIHF situation settles it.
- dz-collapse-corner caption: "the floor is a major and an ejection" is unwritten for a non-reckless IIHF check. It errs strict.

## What this method could not have found
- A layer elsewhere in bcb that was written on the old "not priced as a cross-check" premise in words nobody searched for.
- How referees actually apply the IIHF and CARHA texts.
