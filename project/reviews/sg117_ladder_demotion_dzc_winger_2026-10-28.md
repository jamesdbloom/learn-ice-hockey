# SG117: re-grown checking-from-behind ladders demoted on Defensive Zone Coverage and Winger (28 October 2026)

**Files:**
- content/systems/defensive_zone_coverage.md
- content/positions/winger.md
- project/plans/OPEN_ITEMS.md

## Why
The repair waves earlier today (SG112–SG116) put the checking-from-behind and head-contact penalty ladders back onto these two non-owner pages:
- Defensive Zone Coverage stated the Rule 43 ladder four times (:182, :207, :496, :515).
- Winger carried the Hockey Canada and IIHF ladders in its body at :557 and :777.

Two owner rules apply. First, rules are background and tactics come first. Second, every extra restatement is one more place for a correction to miss. So each page now keeps one full statement, in the section where a player meets the act, plus every limb that is the only carrier of a point voiced on its own. Everywhere else the ladder is replaced by the instruction, a short true tariff, and a link to body_contact_and_battles.

## What changed
**dzc**
- **Base-shape section** (facts :180–:184, body :205–:210): kept as the page's one full statement.
  - :182 gains "on the head, the harsher of Rules 43 and 48".
  - :207 gains the intent-to-injure match, stated correctly: "in every book but the IIHF". Until now dzc had only the "in both books" form that SG115 repaired elsewhere.
- **Cycle section**:
  - "What it costs" (:513) now leads with "Arrive on the puck, never on a back". The ladder is gone. It keeps "no book here prices a hit to the back that stays off the head at two minutes alone", the Hockey Canada and CARHA boards match, the intent match, and the England/Wales one-game clause.
  - :515 keeps the USA Hockey Casebook mandatory tier, the 602(a) reckless clause, and the Body Contact link.
- **Cycle facts block**:
  - :496 and :498 duplicated :182 and :180, so they are cut.
  - :497 rewritten. It now names Hockey Canada 7.5(c) beside CARHA 53(b) for the boards match. Before, it named CARHA only, which left a Hockey Canada reader at the boards without their own book's match. It also adds the intent match and keeps CARHA 53(a)'s ejection at every tier.
  - :500 cut. It held 404(a) misconduct time, and no body sentence anywhere supported it.

**winger**
- **:557, net front**: one instruction and one tariff. It reads "No book prices one that stays off the head at two minutes alone as checking from behind", then the Hockey Canada/CARHA goal-frame match and USA Hockey 608(b)'s head-first major and game misconduct, then a pointer to Backchecking.
- **:558**: NHL and PWHL "make it a major and game misconduct (43.3, 43.5)"; under the IIHF, plan on the same.
- **:777**: keeps the Hockey Canada head-contact trigger sentence. It is the only body carrier of 7.7(b)'s "head injury off the glass, ice or boards", so facts :749 traces to it.
- **:751, :753**: citation trims only.

**Words cut:**
- dzc: 34,146 → 33,961.
- winger: 32,551 → 32,475. Winger kept its trigger sentence, which is why less was cut there.
- Rule references fell on both pages: 252 → 243 on dzc and 168 → 159 on winger at round 1.

## Reviews
| Round | Dimension | Reviewer | Result |
|---|---|---|---|
| 1 | D1–D3 | rules-verifier | Intent match CONFIRMED in every book but the IIHF. INCOMPLETE: winger :557 "no book… two minutes" is false for a Hockey Canada stationary cross-check (Interp. 1 to 7.5(a)); dzc :513 needed "alone" restored (USA Hockey 608(a) is a minor plus a misconduct); winger :558 "plan on" understated the NHL/PWHL. No limb left either page. |
| 1 | D11, D12 | safety-reviewer | FIX on both files. M1: the dzc cycle facts block named CARHA's boards match but not Hockey Canada's. M2: winger :557 dropped USA Hockey 608(b)'s goal-frame ejection. m1: "two minutes alone" had lost "stays off the head". 0 LOST markers; 0 panels. |
| 1 | D10, D9, D7, D13, D14 | facts-reviewer | FIX on both files. Traceability: four dzc cycle facts lines and winger :749 had lost their body source. Summary layers agree. No paragraph over 1,200 characters. Every unit leads with the action. |
| 2 | D1–D3, D11, D12 | safety-reviewer (with rule checks against hc.txt, usah.txt and carha_2026.txt) | Both files SHIP. M1, M2 and m1 closed. Dropping "(CARHA adult leagues only)" from :497 is acceptable, because the line names CARHA. Every new limb was verified. |

### C11
- The agent made every edit and reviewers read each one afterwards, with one exception.
- After round 2, the coordinator changed dzc :497 "which has none" to "which has no match penalty". This is the round-2 reviewer's own wording, applied so the line stands alone when voiced. check_facts passes; check_marker_pairs reports 0 LOST.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier (round 1); safety-reviewer's rule checks in round 2. Sources: hc.txt 7.5–7.7 with interps, 9.2; usah 602(a), 608; carha_2026 48(a), 53; NHL/PWHL 21.1, 43; IIHF 2026-27 43, 48 |
| D2 Rules travelling without exceptions | rules-verifier and facts-reviewer layer tables, limb by limb, for both pages |
| D3 Rule-set divergence | rules-verifier: each book named for its own tier |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | rules-verifier: the IIHF "match penalty" search scores 0 in both editions |
| D7 Cardinal rule | facts-reviewer: no coaching choice stated as law |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | facts-reviewer: Common Mistakes, Key Takeaways and Overview agree with the body on both pages |
| D10 Key-facts layer | facts-reviewer (round 1); safety-reviewer on the changed facts lines (round 2) |
| D11 Reader safety | safety-reviewer, rounds 1 and 2 |
| D12 Read-aloud integrity | safety-reviewer rendered both pages in each round |
| D13 Folklore | facts-reviewer: none |
| D14 Structure, style, terminology, cross-links | facts-reviewer: units lead with the action; no paragraph over 1,200 characters; check_links passes |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope. |

## Carried to the plan
- dzc :513 and facts :496 say "stays off the head at two minutes alone" without winger's "as checking from behind" scope (commit gate). This is harsh-direction: a stationary cross-check or one on an aware player is a cross-checking minor.
- The dzc diagram caption (chunk 018) still says "No book prices a check from behind at two minutes alone" with no off-the-head scope. It overstates in the harsh direction.
- Other pages may carry the unscoped "two minutes alone" or "in both books" forms.
- winger :557 is accurate but heavy when voiced.
- dzc :209, "The next game", is 1,193 characters, so any addition will push it over the limit.

## What this method could not have found
- Pages outside these two.
- A limb that names no rule and so escaped the layer tables.
- The IHUK DOPS C.1 text behind the new England/Wales sentence. It was not re-opened this wave. The same claim already stands at dzc :209 and facts :496.
