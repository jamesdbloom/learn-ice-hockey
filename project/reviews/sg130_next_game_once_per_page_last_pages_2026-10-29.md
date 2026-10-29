# SG130: next-game suspensions once per page on On-Ice Communication and Risk Management (29 October 2026)

**Files:**
- content/foundation/on_ice_communication.md
- content/hockey-iq/risk_management.md
- project/plans/OPEN_ITEMS.md

## Why
This is the last batch of the owner's once-per-page ruling (USA Hockey 404(b), 21 October; extended to CARHA 32(d), 28 October), run with the SG128 brief and limits. Six pages were briefed:
- **language_and_glossary, scanning_and_anticipation, switching_positions:** no-ops. Each already states the ban once, or has nothing to trim.
- **equipment:** the author removed both of its per-line next-game clauses. The page has no facts block, so that left no next-game statement anywhere on the page, and the helmet-in-a-fight "one-game suspension" may be a rule-specific tariff rather than 404(b). **The coordinator restored equipment.md to HEAD before staging.** It is carried to the plan.

## What changed
- **on_ice_communication:**
  - Seven per-line clauses were removed: facts :290 (USA Hockey/CARHA pair), the chop paragraph (pair), the CARHA 49(a), 66(a)(1), 66(e) and 54(a)/(c) clauses, and USA Hockey 609(b).
  - A new body paragraph (:299), "**An ejection can cost you the next game too.** …", is the second paragraph of the "Moving a screener — what the books allow" section, covering 404(b)/403(b) and 32(d) with its high-stick exception.
  - The shared facts line was added to the Pressure warnings block (at :97), because the screener block (:279) is at HARD_MAX.
  - About 48 words added net.
- **risk_management:**
  - Facts :299 is now the shared line, with CARHA added.
  - Body :318's CARHA sentence moved into :320, which now covers both books with 403(b) and the 32(d) exception.
  - About 26 words added. The page had partial statements rather than per-line repeats.

## Reviews
| Page | rules-verifier (usah.txt 403(b) :2444–2449, 404(b) :2531–2545; carha_2026.txt 32(d)) | safety-reviewer |
|---|---|---|
| on_ice_communication | CONFIRMED at all 8 sites | SHIP. Only per-line clauses dropped, plus the once-per-page statements. |
| risk_management | All 3 hunks CONFIRMED for accuracy. Noted that the diff moves and adds a CARHA clause as well as removing one. | SHIP. One CARHA clause moved and corrected; nothing lost. |
| equipment | CONFIRMED (two USA Hockey clauses removed) | SHIP. Restored to HEAD by the coordinator anyway, because the page would have had no next-game statement left. |
| glossary, scanning, switching | No diff | No diff |

### C11
- **equipment.md restored to HEAD** (`git checkout -- content/off-the-ice/equipment.md`), so none of its edit ships.
- No other coordinator content edits. The workflow finished every trim before any review began.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on each changed page |
| D2 Rules travelling without exceptions | Word-diffs: only next-game clauses and once-per-page statements |
| D3 Rule-set divergence | Paired clauses removed together; no closed lists |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope, declared by the coordinator: no absence claim changed |
| D7 Cardinal rule | safety-reviewers: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | safety-reviewers: CM and KT keep their instructions |
| D10 Key-facts layer | safety-reviewers: the shared facts line read voiced alone |
| D11 Reader safety | safety-reviewer on each page |
| D12 Read-aloud integrity | Each page rendered by its author and its reviewer |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; paragraphs under 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- **equipment.md.** It has no facts block. Its two next-game clauses (the helmet-in-a-fight "game misconduct plus a one-game suspension", and the chin-strap clause) are its only statements. First check whether the helmet suspension is rule-specific (USA Hockey's fighting or helmet rule) or 404(b). Only then decide whether to keep one statement.
- **on_ice_communication.** The facts line sits in the Pressure warnings block (chunk 006), about 17 chunks before the screener tariffs, because the screener block is at HARD_MAX.
- **The next-game trim is now complete** across the corpus, except rules_primer and uk_rules (rules pages), team_play, rink_map and equipment (no facts block or summary). Census figures are in the SG126 record.

## What this method could not have found
- Next-game wordings outside the swept set.
