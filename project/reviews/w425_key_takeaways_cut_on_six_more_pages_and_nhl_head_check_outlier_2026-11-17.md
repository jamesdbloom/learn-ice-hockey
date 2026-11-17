# W425: Key Takeaways shortened on six more pages; the NHL is no longer called "lenient" on head hits without its face/head-injury ejection; switching's mandatory-match list names USA Hockey (17 November 2026)

**Content files changed:**
- systems/zone_entries.md
- systems/faceoffs.md
- systems/forechecking_systems.md
- systems/defending_the_rush.md
- positions/goaltender.md
- technique/body_contact_and_battles.md
- foundation/rules_primer.md
- positions/switching_positions.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W423 (1), the readability next step, and From W424 (1)–(2).
- **Effect:** long Key Takeaways across the corpus fell from **33 to 25**.
- **Brief:** scratchpad/w425/brief.md, which is the W424 brief plus binding lessons:
  - Avoid closed lists.
  - Keep both halves of the approved form.
  - NHL 20.4 applies.
  - Each amber run ends where it is true for every book it names.
- **Authors:** seven, one file-set each (A–G).

## What changed (voiced)
| Unit | Words | Now |
|---|---|---|
| zone_entries KT4 | 108 → 36 | "⚠️ **Never close on the defenceman retrieving it:** their back is to you, and in most books checking from behind ends your game, and in every book it can." |
| zone_entries KT10, KT11 | 70, ~59 | No words changed. Each amber run now ends at "can end your game", and the charging ladder follows in plain text. KT10 is an accepted over-60 exception: every route in it is mandatory. |
| faceoffs KT4 | 74 → 60 | "⚠️ **Kicking or trying to kick the man ends your game in five of six books, and can under the IIHF;** **under USA Hockey a non-kicking push-off is a major and game misconduct.**" The old "can end your game in every book" understated five books where the match is mandatory. |
| faceoffs KT3 | 100 → 74 | "…it is at least a minor under Hockey Canada and CARHA and at least a minor and a misconduct under USA Hockey." It had briefly read "a minor under Hockey Canada and CARHA", a closed price, which the rules reviewer marked WRONG and the safety reviewer marked MAJOR. KT3 is an accepted over-60 exception. |
| forechecking_systems KT9 | 99 → 56 | The iced-puck instruction is kept, followed by the approved form. |
| forechecking_systems KT2 | 78 → 65 | Accepted over-60 exception. The IIHF women's scope is kept separate. |
| forechecking_systems KT8 | 62 → 59 | "In a CARHA league, so can any deliberate contact with one" (66(b)). |
| defending_the_rush KT9 | 97 → 46 | "…Take the puck, take the ice, or angle them off it. ⚠️ **In most books a hit from behind ends your game, puck or not, and in every book it can.**" |
| goaltender KT12 | 90 → 59 | The match sentence, a closed list, was cut. "Driving a player head first into the post ends the hitter's game in every book — plan on it" is kept. |
| goaltender KT9 | 67 → 62 | Reworded only. Accepted over-60 exception. |
| bcb KT6 | 78 → 54 | "⚠️ **Never hit from behind: in most books that penalty ends your game every time, and in every book it can — and so can a hit to the head.**" This also corrects the old "can end your game anywhere", which undersold the rule. |
| bcb KT9 | 83 → 60 | The closed-list kick-match clause was cut. Kept: "a slew-foot ejects you in most books and can in every one". |
| rules_primer Overview :31, :386, :525, CM :1158 | — | The NHL is now "lenient" only under its **head-check rule**: "though a boarding, charging or elbowing major that injures the face or head ejects you there too" (20.4, 41.5, 42.5, 45.5). :525's "in every book but the NHL's a hit to the head can end your game" was false, because NHL 48.5 allows a match. |
| switching CM :609 | — | After the HC/CARHA mandatory match: "and under USA Hockey a reckless hit with excessive force on a vulnerable or defenceless player is one too, boards or not" (608(c)). |

Every limb removed from a KT has a carrier in the same file; the author carrier lists are in results.md. A coordinator grep found no other "NHL … lenient" claim about head hits. The fighting-related ones are correct.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** every kept claim OK except faceoffs KT3 (WRONG: HC 7.6 head override; CARHA 50(b)).<br>• Ruled the "every time" conflict: bcb KT6 is true (5 of 6, or 4 of 6 with the HC head override), and zone_entries KT4 is weaker but true.<br>• Confirmed kicking in five books, slew-foot, head first into the post in all six books, the NHL 48 vs 20.4/41.5/42.5/45.5 fix, and USAH 608(c).<br>• Raised USAH 620 Situation 2 against the strict helmet-clash reading. **That is the owner's decision of 9 Nov 2026 (keep strict), so it was not changed.**<br>**Confirmation:** all fixes OK. |
| safety-reviewer | **First read:** no Critical.<br>• MAJOR: faceoffs KT3 closed "a minor".<br>• Minor: bcb KT6 had no head-hit price; zone_entries KT11 was 68% amber.<br>• Rulings: dtr KT9 upheld (the dropped carve-out was permissive); the over-60 exceptions are accepted; zone_entries KT10 and KT11 may both carry the ladder; goaltender KT12 is upheld; forechecking KT9's instruction is present; rules_primer :31 is upheld.<br>**Confirmation:** CLEAR. |
| site-reviewer | 8 pages at 400×812 DPR 2 light/dark and 1440 light, 17:41:28 build.<br>• Every worst window is unchanged: ze 45.7, faceoffs 43.4, fcs 41.0, dtr 39.8, goaltender 46.7, bcb 48.6, rules_primer 43.9, switching 44.5.<br>• KT windows: 14.4, 36.2, 26.2, 27.5, 41.1, 34.2, 37.7, 22.5.<br>• zone_entries KT10/KT11 amber is 37 and 96 characters; rules_primer :31's run sits in a 9.3 window.<br>• Amber-run and ⚠️ counts match HEAD. Nothing over 50% at 400. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text applied verbatim:
- faceoffs KT3 "at least"
- bcb KT6 head clause
- zone_entries KT11 boundary

zone_entries KT10 received the identical boundary move, with no words changed, and the safety reviewer confirmed it.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 17:41:28, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all eight files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 20.4, 41.5, 42, 43, 45.5, 48, 49.3, 52.2; PWHL 43, 48, 49.3, 52.1, 53.1; IIHF 43, 48.3, 49.3, 52.2, 101.1 and Situation 52.1; USAH 607, 608 and Casebook 608 Situation 1, 613(e), 619, 620, 627, 639; HC 6.2(c), 7.1, 7.5, 7.6, 7.7, 8.5(b), 8.8; CARHA 30(a), 48, 50, 52, 53, 57(b), 66(b), 86 |
| D2 Exceptions | HC 7.6 head override; USAH 608(a) minor tier; IIHF discretionary tiers |
| D3 Cross-book divergence | NHL head-check rule vs its face/head-injury game misconduct |
| D4 Citation integrity | rules_primer :525 cites 20.4, 41.5, 42.5, 45.5 |
| D5 Provenance | Not engaged |
| D6 Negative existence | "Every book but the NHL's … under the head rule itself" |
| D7 Cardinal rule | Every KT leads with its instruction |
| D8 Numeric ownership | "Five of six books" (kicking) |
| D9 Summary layer | KT layer; rules_primer claim fixed in Overview, body and CM together |
| D10 Key-facts | Not engaged |
| D11 Reader safety | safety-reviewer, two reads; one MAJOR fixed |
| D12 Read-aloud | Every changed unit rendered |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **25 long KTs remain.** Accepted exceptions:
   - risk KT9 (74)
   - faceoffs KT3 (74)
   - zone_entries KT10 (70)
   - shooting KT5 (65)
   - forechecking KT2 (65)
   - goaltender KT9 (62)
   - game_management KT14
2. **KTs over half amber that were not touched:** goaltender KT10 (73%) and faceoffs KT15 (53%). Apply the boundary fix.
3. **defender facts :820:** "NHL, PWHL: unclear, no more lenient" about checking from behind. NHL and PWHL 43.2 and 43.5 are explicit, so the line understates their certainty.
4. **rules_primer:** the NHL face/head limb names boarding, charging and elbowing. 20.4 covers every Table 5 major (cross-checking and checking from behind eject outright).
5. **USAH 602(a) "shall" match vs 608(b):** the rule text does not reconcile them, and the Casebook was not searched.

## What this method could not have found
- Whether HC 7.6 overrides 7.5 when the head strikes the boards rather than the hitter.
- Real audio.
- League regulations.
