# W427: the last non-exception long Key Takeaways shortened; kicking and fighting prices corrected where they read cheap; PWHL fighting price stated (17 November 2026)

**Content files changed:**
- off-the-ice/mental_game.md
- foundation/rink_map.md
- foundation/on_ice_communication.md
- off-the-ice/team_play_and_culture.md
- getting-started/getting_started.md
- technique/passing_and_receiving.md
- off-the-ice/conditioning_and_recovery.md
- foundation/uk_rules.md
- technique/body_contact_and_battles.md
- foundation/rules_primer.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W426 (1), (2) and (7), plus item (4) ruled.
- **Effect:** long Key Takeaways across the corpus fell from **16 to 9**. Most of the nine are accepted exceptions.
- **Brief:** scratchpad/w427/brief.md, which is the W426 brief plus W426 lessons.
- **Lesson correction made this wave:** under IIHF v1.1, Table 6 makes the 46.1 fighting game misconduct automatic.
- **Authors:** eight, A–H.
- **Process note:** the first dispatch attempt was blocked by a transient tool-permission outage. It was retried about an hour later. No files were touched in between.

## What changed (voiced)
| Unit | Now |
|---|---|
| mental_game KT11 | 65 → 60 words. "…can end your game; in every book, most will." Before, it read "under USA Hockey and Hockey Canada most of them will". That was a closed list, cheap for the NHL, PWHL, IIHF and CARHA. |
| rink_map KT10 | 65 → 60 words. Wording only (trapezoid). |
| on_ice_communication KT12, body :120, CM :676 | "⚠️ **Kicking at an opponent ends your game in five of the six books** — a match penalty, hurt or not — and under the IIHF the referee may give a major and an automatic game misconduct". Every site previously read "can end your game in every book", which understated the mandatory match. The facts line :97 was already correct. |
| on_ice_communication KT2 | 62 → 57 words. Redundant clause cut. |
| team_play_and_culture KT4 | 64 → 60 words. "⚠️ **Some books go further:** …" |
| team_play_and_culture :361 | "⚠️ **Plan on ejection under the 2025/26 edition too.**" The 2025/26 Table 6 makes the game misconduct automatic, and 46.3/46.4 eject the instigator and aggressor. Before, the amber read "The older wording, which left ejection to the referee". |
| team_play_and_culture :278 | "⚠️ **A fight there brings a game misconduct or worse in most books…**" Breaking it up "can too, and does under Hockey Canada and CARHA and, for the first one in, under USA Hockey". Before, it read "can bring". |
| getting_started KT14 | 63 → 61 words (accepted). Concussion red flags, wording only, plus "numbness" (safety). |
| passing_and_receiving KT15 | 61 → 59 words. Wording only. |
| conditioning_and_recovery KT14 | 61 → 54 words. Pointer sentence cut; the link moved into the bold lead. No flag touched. |
| uk_rules KT19 | "…plus a game in every other league or age group you are registered in" (DOPS §11's phrase), 76 words. Safety ruled: do not trim. |
| body_contact_and_battles, new PWHL bullet | "**PWHL (Rule 46).** A fight is a major… *"may be ejected"* (46.1)… outside the periods a major plus a game misconduct unless your opponent instigated it (46.9). ⚠️ **An instigator or an aggressor is ejected:** … (46.11, though its Table 5 lists the game misconduct only for a repeat or late instigator), … (46.2)." Neither file had stated a PWHL fighting price. |
| rules_primer :534, :382 | :534 adds the PWHL instigator, aggressor and Table 5 conflict. :382 "those leagues" implied the NHL ejects every instigator; it now says the NHL ejects only a repeat or late instigator. |

**Refuted or ruled:**
- uk_rules :306 already states the harsher 2025/26 Table 6 reading, with 46.3/46.4 in the same chunk.
- bcb :1925/:1932 and rules_primer :534 IIHF were already correct.
- DOPS C.1 boarding ban: Appendix D gives minors no carry-over suspension, so "a boarding major" is the conservative reading.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **All sites OK**, no WRONG. Confirmed:<br>• mental_game "most will" in all six books for acts at an official<br>• kicking: five-book match, IIHF 49.3 discretionary (both editions)<br>• team_play :361 and :278<br>• PWHL quotations verbatim, with the Table 5 conflict<br>• rules_primer :382 (NHL 46.2/46.11/46.12; In-House Section 6 with v1.1 46.3/46.4, an inference)<br>• uk_rules KT19 against DOPS §11<br>• getting_started KT14 against rendered CRT6<br><br>Optional notes, applied: bcb Table 5 note. |
| safety-reviewer | No Critical or Major.<br>**Minors, all applied with its text:**<br>• team_play KT4 noun<br>• :278 USAH first one in<br>• getting_started numbness<br>• bcb PWHL 46.9<br><br>**Rulings:**<br>• getting_started moving advice is safe (stricter than CRT6 for bystanders)<br>• conditioning KT14 upheld<br>• uk_rules KT19 at 76 words: do not trim<br>• new PWHL "Important." is earned |
| site-reviewer | Ten pages at 400×812 DPR 2 light/dark and 1440 light; 21:10:33 build.<br>• Every worst window unchanged.<br>• conditioning first measured at 45.3, in its KT section (first-aid amber).<br>• uk_rules KT window 44.5.<br>• Amber runs unchanged, except bcb +1 (new PWHL bullet).<br>• conditioning KT14 link renders inside the bold lead; target 200.<br>• Nothing over 50% at 400. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, applied verbatim or with a source-checked trim that the author reported.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 21:10:33, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all ten files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 23.7, 40, 46, 49.3, 75.5<br>PWHL 46.1/46.2/46.9/46.11, Table 5<br>IIHF 46 and Table 6 (v1.1), 49.3/49.4<br>USAH 601, 615, 627<br>HC 7.1(c)(iii), 7.10, 11.3–11.5<br>CARHA 45, 48(c), 59, 71, 81<br>DOPS §11, App C/D<br>In-House Section 6<br>CRT6 (rendered) |
| D2 Exceptions | PWHL 46.9 instigator's opponent; USAH 615(d) first in; NHL first instigator |
| D3 Cross-book divergence | PWHL Table 5 vs 46.11; IIHF edition split |
| D4 Citation integrity | PWHL quotations verbatim |
| D5 Provenance | Not engaged |
| D6 Negative existence | Not engaged |
| D7 Cardinal rule | Every KT leads with its instruction |
| D8 Numeric ownership | "Five of the six books" (kicking) |
| D9 Summary layer | Kicking claim fixed in KT, body and CM together |
| D10 Key-facts | on_ice facts :97 confirmed |
| D11 Reader safety | safety-reviewer; concussion KT stricter than CRT6 for bystanders |
| D12 Read-aloud | Every changed unit rendered |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links; KT14 link target checked |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **rules_primer paragraph length:** one more paragraph is now over 1,200 characters (7 → 8), likely :382 or :534. Split it.
2. **bcb facts :1904:** gives no IIHF base or aggressor fighting price. The block is at 14/14.
3. **bcb CM :2096:** says "the IIHF's current book". This is ambiguous for British 2025/26 readers, and the CM gives no NHL/PWHL price.
4. **rules_primer KT4:** "USA Hockey ejects you for fighting" names one book.
5. **mental_game KT11:** the NHL/PWHL slur and spitting-at-opponent tiers are "can" (23.7). "Most will" holds only for acts aimed at an official.
6. **conditioning KT section** is now its page-worst at 400px (45.3), from first-aid amber.
7. **Corpus-wide:** other pages may still carry an NHL-only fighting price for a PWHL reader.

## What this method could not have found
- How the PWHL resolves its 46.11 / Table 5 conflict.
- Casebook Situations that narrow these tiers.
- Real audio.
