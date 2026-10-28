# SG112: bcb checking-from-behind gaps, IIHF head-from-behind wording, HC 7.7 cross-check limb (28 October 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/systems/special_teams.md
- content/positions/winger.md
- content/foundation/rules_primer.md
- content/systems/zone_entries.md
- content/hockey-iq/risk_management.md
- project/plans/OPEN_ITEMS.md

## What changed and why

### body_contact_and_battles
SG111 sent four pages here for "every tier" of checking from behind. A completeness check against all books on disk found four gaps in that section. They are fixed here:
- :778. USA Hockey head contact was missing, which made the hit sound cheaper than it is. Added: 620(b) is a mandatory major plus game misconduct for intentional, careless or reckless head contact, and if reckless, plan on a match and a likely multi-game suspension (602(a)). Also added: "Rule 608 still applies to the hit from behind as well."
- :774. Added Hockey Canada 7.5(c)'s second sentence: a match for deliberately injuring, or attempting to injure, by checking from behind, with no boards condition.
- :816. A match costs more than tonight's game. Added: NHL and PWHL 21.2 (automatic suspension until the league rules), Hockey Canada 4.10(a), and USA Hockey 405(c) (games *and practices*).
- :776. "Ends your game every time" became "every time it is called". The sentence then names Hockey Canada's three narrow exceptions, each with its limiting condition (Interpretations 1 and 3 to 7.5(a), 7.3, 9.2(a)):
  - accidental, marginal contact while playing the puck that does not endanger the player;
  - a pin at low speed with minimal impact, which 7.3 can still penalise where body checking is not allowed;
  - a cross-check by a stationary player, not into the boards or goal, which is still at least a minor.

  The chunk ends on "A player who turns as you arrive is still your penalty (Interpretation 2)."

### IIHF wording for a hit from behind that reaches the head
- special_teams :655, :670, :1115; winger :558; risk_management :846.
- These now follow the owner's 19 Oct ruling: the NHL, IIHF and PWHL take the harsher of Rules 43 and 48.
- The price is scoped correctly. The NHL and PWHL write no minor (43.2). Under the IIHF, plan on the major and game misconduct, because IIHF 43.3 requires recklessness and 48.2 is a minor.
- Round 2 had written "no minor in any of them", which was false for the IIHF. Round 3 corrected it.
- :1115 keeps "(a reading)" for IIHF 43 reaching a goalie.

### Hockey Canada 7.7 cross-check limb
- rules_primer :427: 7.7's mandatory list gains "a cross-check above the shoulders" (7.7(b), "whether or not injury results").
- winger :749 (facts, 300/300): "up to major and game misconduct, a must if cross-checked high, if hurt (7.6 minor and female), if highly violent or head hurt off glass, ice, boards (7.7 Jr/Sr); match if defenceless". The intent match is carried at :753 in the same block and in a new body sentence at :777, which now carries every trigger and makes the line traceable.

### Smaller changes
- zone_entries KT9: shortened (63 words at HEAD; 61 by a whitespace split now), keeping "plan for the goalie to come out".
- rules_primer :1221: the trailer note no longer says the In-House §4 label is "not carried". It is carried at :442. The count is now "four provisions in it that bear on play are new" (content-reviewer found two other new, non-playing provisions).

## Round 4 changes
- winger :777: the mandatory major for a cross-check above the shoulders, hurt or not, with "(in minor and female hockey, a deliberate one)". Interpretation 2 belongs to 7.6(b) only, and 7.7(b) is unconditional.
- winger :749: each trigger now carries its scope in front of it: "always for a high cross-check, in minor and female if hurt (7.6), in Jr/Sr if highly violent or head hurt off glass, ice, boards (7.7)". Before, a silent bracket let a Junior/Senior listener hear the cross-check as minor/female only, which was permissive.
- IIHF wording at winger :558/:756, risk_management :846 and special_teams :655/:670/:1115: "Rule 43 writes no minor in any of them (43.2); the NHL and PWHL make it a major and game misconduct, and under the IIHF plan on the same". The earlier wording set the NHL/PWHL against the IIHF, which implied an IIHF minor.
- bcb :776: split into two paragraphs, with no word changed (the paragraph was 1,219 characters). Chunk 068 still ends on Interpretation 2.

## Reviews
| Round | Dimension | Reviewer | Result |
|---|---|---|---|
| 0 | bcb completeness (D1–D3) | rules-verifier | Anchors land; found four gaps (above) |
| 0 | HC cross-check sweep | read-only sweep agent | rules_primer :427 permissive (fixed); winger :521 true via 9.2(b); winger :749 (fixed) |
| 1 | D1–D3 | rules-verifier | 6 CONFIRMED, 5 INCOMPLETE; two permissive (repaired) |
| 1 | D11 | safety-reviewer | bcb :776 Major; winger minor (repaired) |
| 2 | D1–D3 | rules-verifier | all 9 CONFIRMED |
| 2 | D11 | safety-reviewer | SHIP on bcb, special_teams, winger, rules_primer, zone_entries. risk_management was not yet changed. |
| 2→3 | D10, D9 | facts-reviewer | IIHF "no minor" false at 5 sites (including risk_management); winger :749 wording. FIX, then repaired. Round 3 re-check: SHIP. |
| gap | D1–D3 on risk_management :846 and winger :749/:777 | rules-verifier | Found :777 "deliberate" permissive for Junior/Senior, and :749 misattachment. Repaired in round 4. Round-4 re-check: CONFIRMED on all but bcb :780. |
| gap | D11 on risk_management :846 and winger :749/:777 | safety-reviewer | :749 Critical (misattachment); repaired. Round-4 re-check: SHIP on all four files. |
| gap | D6, D7, D9, D13, D14 | content-reviewer | No Critical or Major. Minors: rules_primer count; bcb paragraph length; bcb :778 wording; winger :777 "deliberate"; record figure. All repaired. |

### C11
- The coordinator made one content edit after the last review, at bcb :780. "The checking-from-behind penalty under 608 can be called as well." became "Checking from behind (608) prices the same hit — plan on the harsher of the two." This is the rules-verifier's own sketch. The earlier wording presented "both can be called" as if the book said it, and USA Hockey is silent on stacking 608 and 620. check_marker_pairs: 0 LOST.
- Every other edit came from an agent and was reviewed afterwards.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier, rounds 0, 1, 2, the gap pass and the round-4 re-check. Sources: hc.txt, usah.txt, usah_casebook.txt, nhl_rules, pwhl_rules, iihf 2026-27 and v1.1, carha_2026, eiha_inhouse (both editions). |
| D2 Rules travelling without exceptions | rules-verifier and facts-reviewer layer tests (rounds 1–3). |
| D3 Rule-set divergence | rules-verifier: the IIHF's conditional 43.3 against the NHL/PWHL's mandatory one is now stated. |
| D4 Citation integrity | Out of scope: no URL added or changed. |
| D5 Provenance | Out of scope: no non-rulebook quotation added. |
| D6 Negative existence claims | content-reviewer re-tested rules_primer :1221 ("none has any counterpart in the 2025-26 edition") against both In-House editions, flattened, with a paragraph-level diff. It holds for all four named provisions. |
| D7 Cardinal rule | content-reviewer: no coaching choice is stated as law. |
| D8 Numeric ownership | Out of scope: no owned number changed. |
| D9 Summary layer | facts-reviewer rounds 2–3 (all files); content-reviewer for zone_entries KT9 and the rules_primer trailer. bcb Overview, Key focus and KT6 ("no bare minor in any book") err harsh against the carve-outs and were deliberately kept. |
| D10 Key-facts layer | facts-reviewer rounds 2–3; rules-verifier and safety-reviewer on winger :749 in the gap pass and round 4. |
| D11 Reader safety | safety-reviewer, rounds 1, 2, gap and round 4. |
| D12 Read-aloud integrity | safety-reviewer rendered bcb and winger each round and checked chunk placement by words. |
| D13 Folklore | content-reviewer: none added. |
| D14 Structure, style, terminology, cross-links | content-reviewer: anchors checked by hand, the paragraph-length split, read-aloud clarity at :778. check_links passes. |
| D15 Rendered site | Full site build before commit. No site-reviewer ran, because the only visual change is one paragraph split. |

## Carried to the plan
- winger :558/:777: the Hockey Canada and IIHF ladders grew on a position page. Join the SG75 cross-document ladder demotion row.
- winger :749 "always" overstates by the 7.6(b) accidental-stick sliver; it errs harsh.
- risk_management :756 opens a paragraph with ⚠️ (a panel). This predates SG112.
- winger :749 and special_teams :655 are at 300/300, with no headroom left.
- The IIHF "harsher of 43 and 48" may resolve to 48.2's minor if a referee reads 48.1's "supersedes" literally. The pages tell the reader to plan on the major. This is unresolved by any book.

## What this method could not have found
- A head-reaching IIHF price worded without "harsher of" or "no minor".
- How a USA Hockey referee applies 608 and 620 together.
- Whether the 300-character facts lines are clear when heard; no listening pass was done.
