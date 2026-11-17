# W420: the goalie "Who serves it" bullet now names its books, adds CARHA and IIHF junior ejection on a major, and narrows CARHA's high-stick exception to one that hurts no one; scanning names Hockey Canada's price for deliberate goalie contact (17 November 2026)

**Content files changed:**
- positions/goaltender.md
- hockey-iq/scanning_and_anticipation.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W419 (1), (3), (4) and (5). Row (2), the game_management KT14 amber run, was not worked because it is not growing.
- **Brief:** scratchpad/w420/brief.md, carrying the W419 brief and its addenda.
- **Agents:**
  - two authors: A, scanning; B, goaltender;
  - one read-only census, of "any CARHA major ejects".

## Refuted by the coordinator: From W419 (1)
The row claimed that "N(i)" citations voice as "clause one" at about 158 sites. A census of the content sites shows nearly all of them are NHL, IIHF and PWHL roman sub-clauses, plus Hockey Canada 8.3(i) and 10.1(i), so "one" is correct. Hockey Canada 2.2 and 5.2 are already handled by `ALPHABETIC_I_RULE`. The only lettered CARHA "(i)", 16(i), is now cited in words in its voiced unit, and its trailer is not voiced. No change to `scripts/` was needed.

## What changed (voiced)
| Site | Now |
|---|---|
| scanning :372 | "…deliberate contact is a minor or a major (NHL and IIHF 69.2, PWHL 71.2, Hockey Canada 8.5, CARHA 66(b)) — and a Hockey Canada or CARHA major for it ejects you (8.5(e), 30(a))." Hockey Canada was missing from the price list, although its ejection clause followed. |
| goaltender facts :752 (278) | "You do not serve a goalie's minor or misconduct yourself — in every book a teammate on the ice, designated by your coach, serves it (NHL and IIHF 27.1, 27.3; USA Hockey 407(a)) — but in every book a game misconduct takes you out of the net (NHL and IIHF 27.4; USA Hockey 407(b))". Before: "USA Hockey 407(a) adds misconducts", a false divergence. |
| goaltender :768 "Who serves it" | "in every book a teammate on the ice… serves your minor or misconduct…, so a minor still puts your team on the penalty kill. ⚠️ **In every book a game misconduct takes you out of the net, and so does a match penalty in every book that has one — the IIHF does not** (…). Under Hockey Canada and CARHA every major brings a game misconduct, so a major takes you out too (Hockey Canada 4.4(a); CARHA 30(a), bar an accidental high stick that hurts no one), and so does any major in IIHF men's under-20 and under-18 games (201.1) and in British women's hockey (In-House Rule 101)." Later in the bullet: "Under CARHA the game misconduct a major brings also costs at least one game, unless the major was for an accidental high stick (32(d))." |

At HEAD, :768 had four problems:
- The book scope was carried only by the citation brackets.
- It said "USA Hockey extends that to misconducts", but every book does.
- It listed no CARHA or IIHF-junior ejection on a major.
- An interim draft tied the power play to a misconduct.

## Census (read-only) → plan
- **DEFECT: 0.** Every high-stick unit is either act-scoped or carries the exception.
- **26 JUDGEMENT units** state a universal "a CARHA major ejects" about non-stick acts. Eight of them are voiced alone:
  - game_management KT14 :1353 and CM :1288
  - bcb CM :2067
  - special_teams CM :1265
  - facts lines: pwtp :718, forechecking_systems :803, forechecking :1067, winger :750
- **31 weak units:** "a major (there)…" sitting next to an act.
- **7 units state 32(d) with no exception:**
  - rink_map :528
  - switching :573
  - gm :1219/:1249
  - zone_entries :257/:866
  - special_teams :1341: the trailer's quotation is spliced and drops "other than the Accidental High Stick Rule".
- **No lone-goalie relief:** goaltender :1304, :1640 and :1652.
- **Source note:** the CARHA 62(b) Note restores the game misconduct on an accidental high stick that injures (carha_2026.txt ~:2969-2974).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:**<br>• scanning: OK.<br>• goaltender: "every book" claims OK across six books plus the British books. IIHF has no match penalty in any edition or handbook. HEAD's "USA Hockey extends" was false.<br>• Incomplete in the dangerous direction: the any-major list omitted CARHA 30(a) and IIHF 201.1 (5.1 makes "Player" include goalkeepers). Facts :752 has no lone-goalie qualifier, which errs harsh.<br>**Confirmation 1:** "bar an accidental high stick" WRONG (62(b) Note).<br>**Confirmation 2:** both CARHA clauses OK. |
| safety-reviewer | **First read:** no Critical or Major, nothing cheaper. Three minors:<br>• the power play tied to a misconduct (NHL 22.1);<br>• CARHA missing from the any-major list;<br>• scanning "clause a, clause b" voicing.<br>**Confirmation:** CLEAR. The amber run stays on the hazard, the CARHA relief is heard as discretionary, and a Hockey Canada goalie hears that a major takes them out. |
| site-reviewer | Two pages at 400×812 DPR 2 light/dark and 1440 light, on the 15:40:38 build. Worst windows unchanged: goaltender 46.7, scanning 8.7. The goaltender :768 amber run is 135 characters, window 14.3. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, or an author correction confirmed by both reviewers:
- **"In every book" kept on the bold run:** the safety draft dropped it, which would have unscoped the sentence. Both reviewers accepted it.
- **"that hurts no one":** the rules reviewer's text.
- **The 32(d) clause:** the rules reviewer's optional text.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 15:40:38, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on both files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 22.1, 27.1–27.5; PWHL 27.1–27.5; IIHF 5.1, 27.1–27.4, 201.1 (both editions); USAH 404(b), 407(a)/(b), Casebook 407 Sits. 7, 10; HC 4.4(a), 4.13(a)/(b), 8.5; CARHA 2026 16 Note, 30(a), 32(d), 37(a)/(b), 62(b) Note, 66(b); In-House 101; EIHL Casebook headings |
| D2 Exceptions | CARHA accidental high stick narrowed to no injury; lone-goalie relief; IIHF 201.1 men's junior only |
| D3 Cross-book divergence | False USA Hockey misconduct divergence removed; IIHF has no match penalty |
| D4 Citation integrity | HC 8.5 replaces a mis-voiced (a)/(b) run |
| D5 Provenance | Scanning trailer :658 credits 8.5(b) only for a charge (plan) |
| D6 Negative existence | IIHF "no match penalty" swept flattened in five files |
| D7 Cardinal rule | Not engaged |
| D8 Numeric ownership | 32(d) "at least one game" |
| D9 Summary layer | Goaltender facts :752 and the body fixed together; no CM or KT carries the claim |
| D10 Key-facts | Goaltender :752 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | Scanning citation run fixed; chunk 050 "Important." kept |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **Census JUDGEMENT rows**, the eight voiced alone first (listed above). A repair should name the act ("a major for it") rather than add the exception.
2. **The 32(d) units with no exception**, and the spliced special_teams :1341 trailer quotation, which needs restoring verbatim.
3. **Goaltender :1304, :1640 and :1652:** a CARHA major "ends your game", with no lone-goalie relief.
4. **CARHA 32(a):** a three-penalty ejection. Does it reach a goalkeeper? 30(a) names the goalkeeper and 32(a) does not, so this is unsettled.
5. **Sweep CARHA majors for Notes that add or remove the game misconduct.** 62(b) and 37(f) are known; also check Rule 87.
6. **Scanning facts :351 (285/300):** it names only NHL, IIHF and PWHL for deliberate contact. Not false.
7. **Scanning trailer :658:** add 8.5(a) and the first paragraph of 8.5(b).
8. **Goaltender facts :752:** no lone-goalie qualifier, which errs harsh. IIHF 27.2 and NHL 27.2 repeat-major ejections are not voiced.
9. **Sibling documents may carry a goalie major-ejects list without CARHA or IIHF 201.1.** The coordinator grepped content/ for "extends that to misconducts" and "adds misconducts" and found 0 hits, so that half is closed.

## What this method could not have found
- League or Member regulations that change goalie penalty service.
- CARHA's in-season updates.
- Ejection wording outside the census vocabulary.
