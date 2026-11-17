# W429: the British plain willing fight is a disclosed reading ("plan on the ejection"), the NHL/PWHL joiner's ejection is scoped and cited by book, running the goalie gets its own Common Mistake, and Mental Game prices a spit or slur at anyone (17 November 2026)

**Content files changed:** foundation/rules_primer.md, off-the-ice/mental_game.md.
**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W428 (1), (2), (3), (5), (6) for :1172, and (7).
- **Brief:** scratchpad/w429/brief.md (the W428 brief, reused).
- **Agents:** A rules_primer; B mental_game; C a read-only source-verifier pass on the goaltender fighting Sources entry; D a read-only census.

## What changed (voiced)
| Unit | Now |
|---|---|
| rules_primer :382 → split; new paragraph :384 | "**"Five minutes, then back on" is only the NHL's and the PWHL's answer.** The NIHL, SNL and BUIHA Varsity may give a plain willing fight a bare major too, but In-House Section 6 does not settle it, so plan on the ejection there. Even in the NHL and PWHL the aggressor is ejected, and so is the instigator — in the NHL only a repeat or late one — while a PWHL willing combatant *"may be"* (46.1). ⚠️ **In the NHL and PWHL, join a fight that has already started and fight, and you are ejected** — the referee may waive it only if your opponent clearly instigated (46.7). Keep going after being told to stop, or step in as third man without fighting, and the referee can still eject you (46.5; third man in, NHL 46.16, PWHL 46.15)."<br>Before: "…or joins as third man in, can be". That did not state 46.7's mandatory game misconduct, and it gave the PWHL the NHL's 46.16. |
| rules_primer :546, :548, table :1104 | "Whether that 5 replaces the IIHF's ejection for a plain willing fight earlier in the game, the text does not settle: its last-five-minutes game misconduct implies an earlier fight carries none, but it never says so or names the rule it replaces. ⚠️ **So plan on the ejection there too.**" :548 now reads "…and so does the plain willing fight under the IIHF book itself". Before, the permissive reading was stated as fact. |
| rules_primer CM :1172 split | Half one ends at "CARHA allows no deliberate contact at all." New bullet: "**"Running the goalie only ever costs two minutes."** **Do not run the goalie: go around, and pull up if you cannot.** ⚠️ **Contact with the goalie can end your game.** …" The tariff text is unchanged. |
| mental_game KT11 (60 words) | "…Keep arguing and you're gone; in Hockey Canada one argument can. An obscene gesture, slur, spit or threat at an official, or touching one, can end your game; in every book, most will. So can a spit or slur at anyone; in most books it will." The power-play limb was cut; Overview :27, body :569/:573 and CM :696 still carry it. |
| mental_game CM :696 | Adds: "Spitting or a slur at anyone, not only an official, can end your game in every book and will in most." |

**Refuted:** the safety reviewer's W428 KT11 text ("A spit or slur at anyone, or an obscene gesture, threat or hand on an official, can end your game; in every book, most will"). For that set, the NHL and PWHL make only 2 of 5 acts mandatory (23.7/23.8 "can" for an opponent).

## Read-only results
- **Source-verifier on the goaltender :1819 Sources entry:** 11 of 11 quotations found verbatim; 21 rule numbers correctly attributed; all 3 URLs are the corpus's standard links. **Finding:** the IIHF 2025/26 v1.1 URL (blob.iihf.com …-v1.pdf) returns a real 404 (Azure ResourceNotFound). It is used 49 times in content. NHL and PWHL were blocked by the local proxy, which tells us nothing about them.
- **Census:** no defect of kind (a) an NHL/PWHL joiner priced as a major only, (b) a 46.7 waiver stated as automatic, or (c) spitting or slurs priced only by IIHF 23.8. Adjacent defect: team_play KT5 :715 says spitting at an official "can" end your game, but it does in all six books. Judgement calls: team_play :286 and :641, uk_rules :415, and bcb facts :1900/:1899 (no 46.7).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:**<br>• :546 OK; recommends adding the "also" counter-reading.<br>• :382 confirmed-but-incomplete: waiver unscoped, and the PWHL third woman in rule is 46.15.<br>• New CM bullet OK.<br>• mental_game OK. On the NHL/PWHL count, a verbal threat gives 2 of 5 and a physical threat 3 of 5; either way the error runs harsh.<br>• No British text on disk settles the plain-fight question. The IHUK Officiating Guidance is not on disk.<br>**Confirmation:** every site OK. The CM "contact meant to injure … is a match under the NHL and the PWHL" is correct via 21.1 "shall". |
| safety-reviewer | **First read:** no Critical or Major; nothing cheaper than HEAD.<br>• Minors 1–4 (waiver scope, third-man "without fighting", split plus garden path, CM instruction) were applied.<br>• Minor 5 (KT11 "can do it") was not applied: 61 words.<br>• Finding 6, pre-existing, goes to the plan.<br>**Confirmation:** CLEAR, plus one minor: the split's "So" crossed a chunk boundary, so it now reads "…is only the NHL's and the PWHL's answer." |
| site-reviewer | Two pages at 400×812 DPR 2 light/dark and 1440 light, on the 22:12:04 build.<br>• Worst windows unchanged: rules_primer 43.9 (KT 37.7), mental_game 13.4.<br>• rules_primer amber 226 → 228. Both new runs are glyph-led and on the hazard.<br>• Nothing over 50%. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text applied by author A, or an author choice the reviewer allowed ("In the NHL and PWHL" in place of "In both").

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 22:12:04, and no content file is newer (rules_primer 22:11).
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets all pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on both files. rules_primer has 192 → 195 marked units; mental_game is unchanged at 4.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **NHL/PWHL:** 21.1/21.2, 23.7/23.8, 39, 40, 42.4, 46.1/46.2/46.5/46.7/46.11/46.12/46.15/46.16, 75.5/77.5.<br>**IIHF v1.1 and 2026/27:** 20.4, Table 6, Situation 46.1, 39.5, 40.1, 42.4, 46.6, 75.2, 75.5.<br>**USAH:** 601, 607(c).<br>**HC:** 7.4(b), 11.1–11.5.<br>**CARHA:** 46, 52(b), 71, 81.<br>**British:** In-House Section 6 and Introduction, EIH DOPS, the four IHUK RoCs, EIH R&R, EIHL Casebook 46. |
| D2 Exceptions | 46.7 waiver (NHL/PWHL only, discretionary); 46.6 unwilling combatant |
| D3 Cross-book divergence | Spit or slur at an opponent: "can" in the NHL and PWHL, mandatory in the other four |
| D4 Citation integrity | PWHL 46.15 corrected from 46.16 |
| D5 Provenance | goaltender Sources entry source-verified; the IIHF URL 404 recorded |
| D6 Negative existence | "the text does not settle" checked by sweeping every British file on disk |
| D7 Cardinal rule | "Do not run the goalie: go around" is coaching, stated plainly |
| D8 Numeric ownership | Per-book counts kept in this record, not in content |
| D9 Summary layer | KT4, CM and the table checked; mental_game KT and CM fixed together |
| D10 Key-facts | no facts block in rules_primer; none changed in mental_game |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | chunk-boundary "So" removed; chunks 033, 034, 065 and 129 read with tags stripped |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **The British plain-fight claim is still stated permissively elsewhere**, and those pages now contradict rules_primer:
   - uk_rules :300 and KT17 :652
   - team_play :362
   - special_teams :436 (facts), :463, :1097 and :1099
   - bcb facts :1905 and :1930

   Brief this as one claim.
2. **team_play KT5 :715:** "spit at one: each can end your game". Spitting at an official ends your game in all six books; the hand stays "can". Also team_play CM :641 and :286 (a peacemaker who then fights).
3. **bcb facts :1900** (178/300, 122 characters free): the third man's own line has no 46.7 clause. :1899 is at 298/300.
4. **uk_rules :415:** the IIHF 75.5(II) on-ice game misconduct for a slur is not stated.
5. **IIHF 2025/26 v1.1 URL now 404** (49 uses). Update the link baseline and label the links by date and status. Do not delete them.
6. **rules_primer CM :1173:** no IIHF 42.4 price for a reckless charge on the goalie (major + GM). Optional: "if the referee judges you meant it".
7. **rules_primer :548:** the "⚠️ The 2026/27 IIHF book renumbers Rule 46" run carries no action (site-reviewer). Candidate to de-escalate.
8. **mental_game KT11:** under a verbal-threat reading the NHL/PWHL count is 2 of 5. The error runs harsh. Optional exact form: "spitting at one will, in every book".
9. **Sources gap:** the IHUK In-House Rules & Officiating Guidance (ihukreferee.uk/downloads) and the SIH discipline policy are not on disk. Either may settle the British plain-fight question.
10. **rules_primer** still has long paragraphs at :526 and :847.

## What this method could not have found
- How British referees actually call a plain NIHL fight.
- NHL/PWHL casebook practice on 42.4 vs 21.1.
- Real audio.
