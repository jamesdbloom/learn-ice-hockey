# SG116: Hockey Canada's "No Match penalty" bars, three wording repairs (28 October 2026)

**Files:**
- content/foundation/rules_primer.md
- content/systems/defending_the_rush.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md

## Why
A read-only rules-verifier sweep listed all 14 places where Hockey Canada says "No Match penalty may (or will) be assessed" (hc.txt). It then checked every Hockey Canada match claim in content/ for those fouls. It found no claim that states a match as certain under a rule that bars one, and no permissive "never". It did flag three wording points, and they are repaired here.

## What changed
1. **rules_primer :445, holding the stick.** The old text said "plan on a match for a hold meant to injure (Appendix D Note 1)" and never mentioned that 8.1(c) bars a match. It now reads: "the holding rule bars a match (8.1(c)), but for a hold meant to injure, plan on one anyway (Appendix D Note 1)". This is the house form already used for hooking at rules_primer :414 and bcb :404.
2. **rules_primer :505, holding, "What it costs".** The same clause is added after 8.1(b)'s mandatory major. Before, a Hockey Canada reader could take the major as the ceiling, while every other book in that paragraph was given its match route.
3. **defending_the_rush :709, facts line voiced alone.** "The book settles it for a rule with the same bar" became "Unsettled for tripping, but 7.11(c) has the same bar and its Interpretation 2 allows 7.1(c): plan on the match". The facts line now agrees with the body at :726.
4. **bcb :1954.** "7.1(c)(iv)" became "7.1(c)". Interpretation 15 to 10.6 prints "(iv)", which is the weapon limb, but the act it describes matches limb (ii). Citing bare 7.1(c) is accurate and does not repeat the book's slip.

## Why "plan on one anyway" is honest
- The book contradicts itself. 8.1(c) and 8.6(c) bar a match, and 7.1(c) reaches only acts "not otherwise covered". Appendix D Note 1 says "A Match penalty shall be assessed for any deliberate attempt to injure… (Rule 7.1)".
- The chart says of itself that it "does not cover all time penalties". Its Match column also leaves out slashing, yet 9.3(c) gives a match for a slash meant to injure. So a foul missing from that column is not evidence that no match exists.
- "Plan on one" is the conservative reading. It tells a reader the act is more expensive, never cheaper.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| D1–D2 | rules-verifier | All four edits CONFIRMED against hc.txt 8.1, 8.6, 7.1(c) items i–iv, 7.11(c) Interp. 2, 9.3(c), 10.6 Interp. 15, and Appendix D with Note 1. "Plan on one anyway" upheld (see above). |
| D11, D12, D9, D10, D7, D13, D14 | safety-reviewer (covering content dimensions for these four units) | All three files SHIP. Nothing sounds cheaper than it is. Each unit traces to the book and its section. Summary layers agree. 0 LOST markers; 0 panels; :709 at 291/300. Optional minor: :709 voices "seven point eleven, clause c" and "seven point one, clause c" without naming what they are. |

### C11
- The coordinator made no content edits.
- Every edit was made by the agent and reviewed afterwards.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier (the sweep, then the edit review) |
| D2 Rules travelling without exceptions | rules-verifier sweep of every barred-foul claim in content/ |
| D3 Rule-set divergence | Out of scope, declared by the coordinator: Hockey Canada only |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | rules-verifier: flattened sweep of hc.txt; no interpretation settles 8.1(c)/8.6(c) against Note 1 |
| D7 Cardinal rule | safety-reviewer: "plan on" is presented as advice, not law |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | safety-reviewer: Common Mistakes and Key Takeaways agree with every edit |
| D10 Key-facts layer | safety-reviewer: :709 traces to :726 and stands alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud integrity | safety-reviewer rendered all three files and checked the words |
| D13 Folklore | safety-reviewer: none |
| D14 Structure, style, terminology, cross-links | safety-reviewer: wording now matches the sibling units; check_links passes |
| D15 Rendered site | The coordinator ran a full site build after the last content edit (exit 0); the commit gate confirmed the staged text in site/dist. The site-reviewer part is declared out of scope by the coordinator: the hunks are in-paragraph wording and one facts line, with no marker, heading, table or structure changed. |

## Carried to the plan
- defending_the_rush :709 voices two rule numbers without naming them. An optional fix: "allows 7.1(c)'s match".
- rules_primer :1195 (Sources trailer, not voiced) still says "7.1(c)(iv)". That is faithful to the book but now differs from bcb.
- bcb :1871 states the Hockey Canada fight floor (7.10(b)) without the 7.10(c) taped-hands match or the 7.11 Interp. 2 match. It is true as a floor, so this is low priority.
- The "this guide's reading of Appendix D Note 1" disclosure appears at risk_management :749 and bcb :1786 but not at the other sites.

## What this method could not have found
- A Hockey Canada match claim for a barred foul worded without the sweep's keywords.
- Diagram captions and podcast scripts that state tariffs.
- What Hockey Canada referees actually do with the Note 1 conflict.
