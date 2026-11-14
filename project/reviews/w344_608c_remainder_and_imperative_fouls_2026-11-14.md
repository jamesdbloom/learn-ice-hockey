# W344: the last USA Hockey 608(c) boards-frame sites, and fouls voiced as instructions (14 November 2026)

**Files:**
- content/positions/defender.md
- content/technique/body_contact_and_battles.md
- content/positions/winger.md
- content/foundation/rules_primer.md
- content/positions/goaltender.md
- content/systems/zone_entries.md
- content/systems/defensive_zone_coverage.md
- content/systems/special_teams.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave works the W343 plan row: seven 608(c) sites outside W343, and three zone_entries units that a listener could hear as an instruction to commit the foul. A coordinator sweep found the same imperative shape in defensive_zone_coverage KT4 and special_teams :1257, so author AC was added. Six authors worked disjoint files:
- **W:** defender.
- **X:** body_contact_and_battles.
- **Y:** winger, rules_primer.
- **Z:** goaltender.
- **AB:** zone_entries.
- **AC:** defensive_zone_coverage, special_teams.

## What changed
**(A) USA Hockey 608(c).** Each site gives 608(c) its own sentence with its full condition. The basis is usah.txt:3729: "…in all instances when a player recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable or defenseless position", which has no boards condition. The usual form is "USA Hockey makes any hit from behind a match when it recklessly endangers a vulnerable or defenceless player with excessive force, boards or not (608(c))".

| Document | Units |
|---|---|
| defender | :298, :460, :949 (body); facts :437 |
| body_contact_and_battles | :782, :2055; facts :766, :1228 (reworded to fit the cap: "major and game misconduct", "Sit. 1") |
| winger | facts :511 split into two Rule lines (block 13/14) because the fix could not fit 300; body :715, :855 |
| rules_primer | :481 ("or defenceless"); KT7 :1204 |
| goaltender | facts :1370 ("vulnerable or defenceless" added; "likely a multi-game ban" dropped to fit, see below); :1616, :1628, :1652 |

Several sites were found by searching for the claim, beyond the candidate list. Every 602(a) "plan on a match" limb is kept; the safety-reviewer tallied it per line.

**(B) Fouls voiced as instructions.** These units opened with the foul as an imperative, for example "Drive them into the boards or goal frame unable to protect themselves and a match penalty is mandatory…". Each is now a "Never … / If you …" conditional or a gerund, with no change of substance:
- zone_entries :257 (right after a spoken "Important."), :1170, :1204: "Never drive them into the boards or goal frame unable to protect themselves. If you do, ⚠️ **a match penalty is mandatory**…";
- defensive_zone_coverage KT4 :927, :871 and KT12 :935;
- special_teams :1257, :1076, :713, and facts :1059, :1151, :973.

## After review
- **defender :437 (both reviewers, optional).** "a must with excessive force" read awkwardly aloud. The coordinator applied the safety-reviewer's "mandatory with excessive force" (299/300) without a further re-check. It is a one-word substitution of the same meaning, confined to the finding.
- **goaltender :1370, the dropped ban.**
  - The rules-verifier noted that 608(c) is Level 2 in USA Hockey's match suspension table, with 4–8 games recommended, and asked for the ban back only if room could be found.
  - The safety-reviewer ruled the drop acceptable: the line still voices the full playing-rule penalty; the ban is a consequence of the match, not a rule condition; and the body carries it at :1616, :1628 and :1652. The block is at 14/14 and the tightest rewrite came to 306/300.
  - Left as is and logged in the plan.
- **Not applied, logged in the plan:**
  - zone_entries :257's "them" sits across a chunk boundary from its referent (it predates this wave);
  - the imperative-foul sweep has covered only three documents.

## Reviews
| Reviewer | Result |
|---|---|
| authors W, X, Y, Z, AB, AC | Candidates read one by one, and more sites found by claim than listed. Layer tests and renders given. |
| rules-verifier | No BLOCK. Every (A) line matches 608(c), Casebook 608 Situation 1, 602(a), 620(b), Hockey Canada 7.5(c) and CARHA 53(b) (2026); the match suspension table supports "likely multi-game". Every (B) line keeps its rule meaning (NHL 63.2(ii), 63.6, 67.4, 69.7; IIHF 67.5). Two optional wordings. |
| safety-reviewer | No BLOCK. Every changed unit voiced alone: nothing cheaper; 602(a) kept; all 18 ⚠️ form warn-inline runs; 0 LOST in all eight files. Ruled on :1370 and winger :511 line A (safe alone). Two optional wordings. |

### C11
The wave was written by the six authors. The coordinator's only content change after review was one reviewer word at defender :437. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all eight files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | 608(c) citations added where missing |
| D5–D8 | not engaged |
| D9 Summary layer | rules_primer KT7, defensive_zone_coverage KT4 and KT12, voiced alone |
| D10 Key-facts layer | defender :437, body_contact :766/:1228, winger :511–512, goaltender :1370, special_teams :1059/:1151/:973, each voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness; no site-reviewer (text only) |

## What this method could not have found
- **Missed wordings.** A USA Hockey match stated without "608(c)" or its condition words.
- **Other imperatives.** An imperative-as-instruction foul in the documents not swept, or one using a verb outside the sweep's list.
- **Diagram captions.** Captions carrying either shape.
