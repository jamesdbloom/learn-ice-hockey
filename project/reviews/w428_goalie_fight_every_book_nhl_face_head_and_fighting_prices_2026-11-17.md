# W428: a goalie joining a fight is ejected in every book; the NHL face/head ejection is no longer a three-foul list; fighting prices filled in for the NHL/PWHL "original altercation" rule, CARHA's other fighter, and spitting at an official (17 November 2026)

**Content files changed:**
- foundation/rules_primer.md
- technique/body_contact_and_battles.md
- off-the-ice/mental_game.md
- positions/goaltender.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W427 (1)–(5) and (7); From W426 (3) and (5); From W425 (4).
- **Brief:** scratchpad/w428/brief.md (the W427 brief plus a W428 addendum on NHL/PWHL/IIHF fighting tiers).
- **Agents:** A rules_primer, B bcb, C mental_game, D goaltender, E a read-only census.
- **Census result:** 0 defects outside these four files. Every voiced unit already gives the harsher IIHF 2025/26 reading, and no NHL price is offered as the PWHL's.

## What changed (voiced)
| Unit | Now |
|---|---|
| goaltender KT10, facts :1169, body :1187, :1193, CM :1687, new Sources entry | **Joining a fight ends your game in every book.** USAH 615(a); HC 7.10(b)/(e)(ii); CARHA 37(d)/59(b); IIHF 2025/26 via 20.4 and Table 6, 2026/27 46.12; **NHL and PWHL 46.7** (a fighting major after the original altercation started carries a GM, waivable if the opponent clearly instigated). The old text said "most books, and can in every one".<br>Breaking a fight up: "does in three" (HC, CARHA, USAH first in); can in the rest.<br>:1187 adds: "You would be joining a fight already under way, after skating to it — and distance travelled is the first sign of an instigator… Do not count on the let-off some books give a player who was clearly set upon."<br>:1193 states the IIHF and PWHL instigator and aggressor ejections, NHL 46.7, 46.11 and 46.12, and the PWHL Table 5 conflict. |
| rules_primer :31, :527, CM :1158 | NHL: "a major for any hit that injures the face or head ejects you" (20.4). Before, it named only boarding, charging and elbowing, but every NHL hitting major is a Table 5 major. |
| rules_primer :534 → :542/:544 | The fighting entry is split by book. :542 is the NHL (instigator extra minor plus misconduct; a game misconduct for a second in the game, a third in the season, or the last 5 minutes or overtime; 46.7; aggressor 46.2) plus "⚠️ **The PWHL ejects its instigator and its aggressor**". :544: "USA Hockey and Hockey Canada give a fighter a major plus a game misconduct; CARHA gives a fight's instigator or aggressor a match, can give one to the player who fights back, and suspends any fighter until the Chairman deals with it", then the IIHF. |
| rules_primer :420, :467, :476, :525 | Split at book boundaries. No claims changed. Long paragraphs fell from 8 to 3. |
| rules_primer KT4 | "**Never throw a punch, even gloved:** USA Hockey ejects you for one, and every book can." The interim "most books eject you" was ruled WRONG by the rules reviewer (harsh): one gloved punch is a roughing minor under NHL 51.2, IIHF and PWHL. |
| bcb CM :2097, :1921, :1922 | "Both IIHF editions, at least a five-minute major in the NHL and PWHL", plus: "In the NHL and PWHL, fighting after the original altercation has started is a major plus a game misconduct, which the referee may waive only if your opponent clearly instigated it (46.7)." An interim "unless your opponent clearly instigated it" read as automatic and was ruled WRONG (permissive). |
| bcb :1927, facts :1904 (290) | ":1927" now reads "Under the 2026/27 book". :1904 gains the IIHF base price ("a willing fighter takes 5+game misconduct (46.1; via Table 6 in 2025/26)"). The edition subrule numbers moved to the body. |
| mental_game KT11, CM :696 | "An obscene gesture, slur, spit or threat aimed at an official, or a hand on one, can end your game; in every book, most will." Before, "on an official" attached only to the hand, and the act-at-anyone reading is "can" in the NHL and PWHL (23.7). |
| mental_game :577 | IIHF spitting at an opponent is a game misconduct under 75.5(VI) ("shall"), which is now cited. Sources trailer: 75.5 added. |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:**<br>• goaltender "every book" confirmed; 46.7 reaches a goalie, and the EIHL has the same rule.<br>• "Any hit … face or head" confirmed (69.2 is marginal, harsh).<br>• bcb and mental_game OK.<br>• WRONG, harsh: KT4 and :1187.<br>• Understated: bcb did not state 46.7.<br>• In-House Section 6 vs Table 6 left unresolved.<br>**Confirmation:** all OK except CM :2097 "unless" (permissive), which was fixed with its text. 75.5(VI) confirmed in both editions. |
| safety-reviewer | **First read:** no Critical or Major.<br>• Minors: :1187 wording; :544 CARHA closed list; mental_game "hand aimed at"; :577 (later retracted).<br>• Rulings: every-book goalie claim is safe; the :534 split's added ⚠️ is earned; the unsplit paragraphs are agreed; bcb facts trade is acceptable.<br>**Confirmation:** CLEAR. Suggests KT11 "A spit or slur at anyone, …" — moved to the plan. |
| site-reviewer | Four pages at 400×812 DPR 2 light/dark and 1440 light; 21:50:56 build.<br>• Every worst window unchanged.<br>• rules_primer amber +1 (the PWHL half).<br>• goaltender runs are 48–83 characters and on the hazard.<br>• Nothing over 50% at 400. 0 bare, 0 untreated, 0 panels, 0 console errors.<br>• check_marker_pairs flagged a "split half unmarked" at rules_primer :422 (hooking). The coordinator checked HEAD: that paragraph carried 0 markers, so it is a false pairing (the safety reviewer reached the same conclusion). |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, or an author addition checked against source and confirmed by a reviewer: rules_primer :542 "a third in the season" (46.11) and mental_game :577 75.5.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 21:50:56, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST on all four files. One SPLIT candidate at rules_primer :422 is a false pairing (above).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 20.4, Table 5, 23.7, 40, 46.2/46.7/46.11/46.12/46.14/46.16, 48.3, 51, 69.2, 75.5. PWHL 46.1/46.2/46.7/46.9/46.11/46.15, Table 5. IIHF v1.1 20.4, Table 6, 23.8, 46.1/46.3/46.4/46.6/46.7, 75.5; 2026/27 46.1/46.12/46.14, 75.5. USAH 601, 615. HC 7.10, 11.3, 11.5. CARHA 37(d), 59, 81. In-House Section 6. EIHL Casebook 46. |
| D2 Exceptions | 46.7 waiver (discretionary); IIHF 46.6 unwilling combatant; USAH 615(d) first in |
| D3 Cross-book divergence | Gloved punch: USAH vs the rest; PWHL Table 5 vs 46.11 |
| D4 Citation integrity | IIHF 75.5(VI) added; :1193 citations by edition |
| D5 Provenance | New goaltender Sources entry (not source-verified) |
| D6 Negative existence | Census: 0 NHL-as-PWHL prices |
| D7 Cardinal rule | Not engaged |
| D8 Numeric ownership | "Breaking one up does in three" |
| D9 Summary layer | Goaltender claim in KT, facts, body and CM together; rules_primer NHL limb in Key focus, body and CM |
| D10 Key-facts | bcb :1904, goaltender :1169 |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | Splits rendered; each half named |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **mental_game KT11:** safety suggests "A spit or slur at anyone, or an obscene gesture, threat or hand on an official…". It needs a per-book "most will" check for "at anyone": NHL/PWHL 23.7 slur and spit at an opponent are "can".
2. **rules_primer :548:** states the In-House permissive reading (no GM for a plain NIHL fight outside the last 5 minutes) as fact. The British texts do not settle it; disclose it as a reading.
3. **rules_primer :382:** "joins as third man in, can be" does not state NHL/PWHL 46.7's mandatory GM for a skater who fights after the original altercation.
4. **bcb fighting facts block** (14/14, NHL line 298/300) has no 46.7.
5. **Corpus sweep:** other pages pricing NHL/PWHL fighting as "major only" for someone joining a scrum; any 46.7 "unless" phrasing that reads as automatic; sentences citing only IIHF 23.8 for spitting or slurs (75.5 is mandatory).
6. **rules_primer** has 3 long paragraphs left (:526 holding, :847 goalie contact, :1172 CM). Safety notes :1172 could split with "⚠️ **Contact with the goalie can end your game.**".
7. **New goaltender Sources entry** needs a source-verifier pass.

## What this method could not have found
- How officials apply 46.7 to goalie fights in practice.
- IHUK's reading of In-House Section 6.
- Real audio.
