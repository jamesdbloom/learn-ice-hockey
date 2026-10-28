# SG122: Forechecking next-game repeats, CARHA "defending players" on Body Contact, NHL face-mask intent match (28 October 2026)

**Files:**
- content/systems/forechecking_systems.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md

## What changed and why
**Forechecking (task: USA Hockey 404(b) once per page).** The agent refuted most of its brief. The owner's 21 Oct ruling (memory `project_usah_404b_ruling.md`) says the individual penalty lines are left as they are. It covers USA Hockey only, and it forbids a CARHA-only next-game clause beside a USA Hockey ejection that would imply USA Hockey has no ban. So two edits were made:
- **:597:** "throws you out of this game and suspends you for your team's next (627(a), 404(b))" became "throws you out of the game (627(a))". This was a pure per-line repeat. The next-game limb stays at facts :582 (chunk 036, voiced just before) and in the rules-summary body :660.
- **:1050 (Common Mistakes):** "under CARHA it costs at least the next game too" became "under CARHA or USA Hockey it costs at least the next game too". The old wording was the shape the ruling forbids. USA Hockey 607(b) makes a reckless charge a major plus a game misconduct, and 404(b) then applies.

The rest of the brief was checked and needed no change:
- :22 and :38 are left as they are. Both are true, and they err only harsh.
- The 1-2-2, 1-3-1, 1-4 and trap facts blocks were layer-tested and are clean.

**Body Contact and Battles.**
- **CARHA 66(a) Note 2** grants "stand their ground" or "shadow" to "the defending players", set against "the side in possession of the puck". Four sites read it as defencemen ("for defenders", "As a CARHA defender", "lets defenders", "A CARHA defender may"), and they now say "the side without the puck" or "defending players": :233, :236 (the adult-league scope moved to the opening), :475 (tariff wording compressed to fit the cap) and CM :1996.
- **NHL face-mask grab.** NHL 75.2(ii)'s "the Referee may apply Rule 21" was voiced as if the match were discretionary for a grab meant to injure. NHL 21.1 ("A match penalty shall be imposed on any player who deliberately attempts to injure…") makes it mandatory. The NHL 21.1 match was added at facts :1716 and :1818 and at body :1732. "No book here leaves it unpriced" was dropped from :1818; the same claim stands at :1730 and :1829.

## Reviews
| File | Reviewer | Result |
|---|---|---|
| forechecking | safety-reviewer (with rule checks: usah.txt 404(b), 405(c), 607(a)–(e), 627(a), Standardized Discipline Policy; hc 4.8(c)) | SHIP. "At least the next game" holds for every USA Hockey ejection the bullet names, including the 607(e) match (405(c) and the policy). Leaving Hockey Canada out is correct (4.8(c)). The ruling is applied correctly. 0 LOST. The reviewer read CARHA 32(d) in carha.txt (2020). The 2026 text was verified in SG121 (carha_2026.txt:1448) and by the bcb reviewer below (carha_2026.txt:1452–1455), and it is the same. |
| bcb | safety-reviewer (with rule checks: carha_2026 66(a) Notes 1–2, 49(a), 30(a), 32(d); NHL 21.1, 75.2(ii); IIHF 75.2(II), 21.1; PWHL 51.3/51.5) | SHIP. "The side without the puck" is a faithful reading of Note 2 and matches breakouts :213. The :236 scope move is an improvement for a listener. The NHL 21.1 match is correct, and the IIHF has no match penalty. "No book here leaves it unpriced" survives at :1730 and :1829. One minor at :475: "plus at least the next game" could be heard as attaching to the minor too (harsh direction); see C11. |

| both (C4) | rules-verifier on the staged bytes (greps and line numbers recorded in its report: usah.txt 627, 404(b), 403(b), 405(c), 602(a), 607(a)–(e), 625(a)(8); usah_casebook 607 Sit. 4–6; carha_2026 30(a), 32(a)/(d), 49(a)–(d), 50(a), 52, 53(b), 63, 66(a)/(b) with Notes and glossary; nhl 9.6, 21, 54, 75.2–75.5, Table 6, index; IIHF v1.1 and 2026/27 21, 75.2, `matchpenalt` = 0; hc 4.8(c), 8.5(b)) | All four claims CONFIRMED. :1050 is complete as a statement of the mandatory triggers; the discretionary routes (USA Hockey 607(a)/(c) major + GM; CARHA 52(a) discretionary major; 66(b) major) are unnamed but covered by "can end your game". "Side without the puck" is CONFIRMED AS A READING: CARHA does not define "defending player", and uses attacking/defending by zone elsewhere (glossary, 66(b)); 49(a) limits the practical exposure. The NHL face-mask match is CONFIRMED; whether there was intent is still the referee's judgement, with 21.5 video review. The IIHF is correctly left out. |

### C11
**bcb :475:** "a minor or an ejecting major…" became "a minor, or an ejecting major…". This is a single comma, applied on the bcb reviewer's own minor finding, to bind the next-game ban to the major. It adds no words and does not change the claim. The line is now 300/300. check_facts passes; check_marker_pairs reports 0 LOST.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on the staged bytes, plus the safety-reviewers' own rule checks |
| D2 Rules travelling without exceptions | forechecking: every 404(b) and next-game unit tabled; bcb: every "stand their ground" site grepped corpus-wide |
| D3 Rule-set divergence | Each book scoped: USA Hockey 404(b); CARHA 32(d); Hockey Canada 4.8(c) left out; the NHL match not extended to the IIHF |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | bcb reviewer: the IIHF book has no match penalty (0 hits) |
| D7 Cardinal rule | safety-reviewers: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | Both reviewers: Common Mistakes and Key Takeaways agree (forechecking KT8; bcb KT14, CM :1829/:1996/:2036) |
| D10 Key-facts layer | Both reviewers: the changed facts lines were read voiced alone and are within their caps |
| D11 Reader safety | safety-reviewers |
| D12 Read-aloud integrity | Both reviewers rendered their files |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; no paragraph over 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- Owner question: does the once-per-page ruling also cover CARHA 32(d)? If it does, the paired forechecking clauses in CM :1037, :1045, :1050 and KT8 could go together.
- Other CARHA rules pricing standing in front of an opponent (66(a)(1), 49(b)–(d), 63) were swept by act by the rules-verifier. None contradicts the changed lines; 66(a)(1) is priced at sibling lines :1502 and :1672.
- The intent-match sweep found WRONG sites on rules_primer :469, defending_the_rush :479, puck_handling :532 and team_play :283. They are being fixed in SG123.
- The "defending players" paraphrase on other pages is being swept in SG123.

- **Pre-existing, permissive, from the rules-verifier:** bcb CM :1996 says under CARHA "only accidental contact goes unpenalised — except to the head… or from behind", but CARHA 66(b) penalises accidental physical contact that impedes a goalkeeper, and an attacker who fails to avoid a goalie after being tripped. A third exception is missing (a penalty, not an injury). Next wave.
- "Side without the puck" is the corpus's reading of CARHA "defending players"; the zone reading is possible. Body :248/:461 quote the book verbatim.
- bcb :475 "(mandatory on injury)" is precise only for intentional contact (49(a)).
- bcb :1277/:1502/:1516 claims may interact with the Note 2 "shadow" grant under the possession reading. Unresolved.

## What this method could not have found
- Suspension limbs worded without "next game", "suspen" or "ban".
- USA Hockey affiliate or CARHA league discipline beyond the rulebook.
- A paraphrase of the CARHA grant that leaves no lexical trace.
