# W328: logged leftovers — two full goalie facts blocks restructured, defender's missed block, a false slew-foot opening, and a Sources note completed (14 November 2026)

**Files:**
- content/technique/shooting.md
- content/positions/goaltender.md
- content/systems/defending_the_rush.md
- content/positions/defender.md
- content/systems/defensive_zone_coverage.md
- content/systems/offensive_zone_play.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave works the leftovers logged in the plan by W324–W327: the USA Hockey row's (1b), (1c) and set D items, and the slew-foot row's items (2) and (5). Two authors worked disjoint files: E (shooting, goaltender, defending_the_rush) and F (defender, defensive_zone_coverage, offensive_zone_play).

## What changed

### shooting: the :499 facts block (HARD_MAX 14)
- **Why it changed.** The goalie's-back line had no 620(b) limb, and there was no room to add one.
- **The merge.** The two push-in lines were merged into :511.
- **The split.** The goalie's-back line became two:
  - :506 covers every book's floor, and the Hockey Canada and CARHA match.
  - :507 covers USA Hockey: a major plus game misconduct if the hit sends the goalie head first into the boards or goal frame, is reckless, or carelessly or intentionally contacts their head, face or neck (608(b), 620(b)), and a match for excessive force (608(c)).

### goaltender: the :1361 facts block (HARD_MAX 14)
- **The merge.** Two Never lines were merged into :1367. The merge cut "on a forward who has the puck" and "choose what meets the post first". Both reviewers found that nothing a player acts on was lost.
- **The split.** The 300/300 turned-back line was split in two:
  - :1369 covers the five books, plus the Hockey Canada and CARHA match. That match is now scoped; at HEAD it was not.
  - :1370 covers USA Hockey, now with 620(b) and "head first into boards or net".

### defending_the_rush
- **:324.** "Head first" now reads "head first into boards or net". The room came from substitution: "blocking", which is 625's own word, and "hits may be". The 602(a) limb is untouched.
- **:1032.** The old opening, "Slew-footing is priced harder outside Hockey Canada", was false for CARHA. CARHA's floor is lower than Hockey Canada's, and CARHA has no injury match. The opening now gives W324's canonical count: "ejects you at the floor in four books — the NHL, PWHL, IIHF and USA Hockey — and can under Hockey Canada and CARHA".

### defender
- **:435 and :436.** The census missed this block. "Head first" now reads "head first into boards or net", and a W323 620(b) Rule line was added. The block is now 14/14.
- **:288 and :818.** "Boards or frame" became "boards or net", because "frame" is not heard as the goal frame.
- **:819.** "If careless (620(b))" became "if careless or intentional (620(b))".

### defensive_zone_coverage KT4
The Hockey Canada scope (see After review) now sits in a parenthesis, matching the body copies.

### offensive_zone_play :1318, the Sources trailer (not voiced)
The trailer now also quotes, verbatim:
- NHL and IIHF 52.1 and PWHL 53.1 ("to knock or kick an opponent's feet from under");
- every book's tripping rule: NHL 57.1, PWHL 58.1, IIHF 57.1, HC 8.6, USA Hockey 639 Note 1 and CARHA 86(a).

Author F noted that a first draft using `(*"…"*)` inside the bold run re-paired the emphasis and broke the warn-inline wrapper (7 for 8 glyphs). The harness caught it; check_marker_pairs and `--panels` did not.

### Refuted: the caption at defensive_zone_coverage.mjs:424
The brief said this caption has an untreated ⚠️. It does not:
- `captionNodes()` wraps everything from a caption's first ⚠ to its end in one `span.warn-inline`.
- The second glyph sits inside that span in the built HTML.
- The harness counts one span per glyph, so a caption with two glyphs reads to it as one short.

Bolding the caption would have rendered literal asterisks. No change was made.

## After review (coordinator applied reviewer wordings verbatim)
- **shooting :506 (both reviewers, optional).** The line now carries USA Hockey's floor: "(USA Hockey: at least a minor and misconduct, 608(a); Hockey Canada: …)". This is the rules-verifier's line.
- **shooting :511.**
  - The merge had cut 625(a)(8)'s quotation before ", unless otherwise specified in the rules". That is the carve-out the line argues about, so the rules-verifier restored it.
  - The rules-verifier's ending, "625(b) does not (a reading)", could be heard as "625(b) does not make it a minor", which is permissive. The safety-reviewer's narrow re-check replaced it.
  - The line now reads: `Rule: A push into the crease relieves your position only — USA Hockey 617(c)(4) voids the goal for "interfering with the goalkeeper", and 625(a)(8) makes contact that "interferes with the movement of the goalkeeper, unless otherwise specified in the rules" a minor; push-in relief lifts neither (a reading)` (300/300).
- **defender :435 (rules-verifier).** Author F had changed "checking from behind" to "a hit from behind". That widened a true claim about the infraction into a false claim about the act: HC 7.5 Interpretation 1, Casebook 609 Situation 2 and IIHF 43.1 all leave room for a lighter call. It is restored to "checking from behind", in the rules-verifier's wording (298/300).
- **defensive_zone_coverage KT4 (safety-reviewer).** Heard aloud, the parenthesis alone could still scope "two minutes" to Hockey Canada, which drops USA Hockey's floor out of the group. It now reads "Checking from behind is never just two minutes in any book (under Hockey Canada, only while it stays off the head)."

## Reviews
| Reviewer | Result |
|---|---|
| authors E and F | Items verified in the sources; full before/after of both restructured blocks; harness on changed ⚠️ units; renders. F5 (caption) refuted with evidence from the built HTML. |
| rules-verifier | Nothing blocking. All changes and all trailer quotations checked against NHL, PWHL, IIHF (both editions and Situations), HC, CARHA and USA Hockey with its Casebook. Three WORDING items (shooting :511, :506; defender :435), all applied. Two advisory notes went to the plan: "never a bare minor" versus 625(a)(8), and HC 8.6's slew-foot exclusion. |
| safety-reviewer | Nothing blocking. Both merges diffed line by line against HEAD: no limb a player acts on was lost. The :1032 opening is true of all six books. Two optional WORDING items were applied. |
| safety-reviewer narrow re-check | Three of four OK. One WORDING item at shooting :511 was applied. |

### C11
The W328 authors wrote the wave. Every coordinator change after review was a reviewer's wording, applied verbatim. The last of them, shooting :511, came from the narrow re-check itself; it changes one clause of one line. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all six files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | :1318 trailer quotations verified verbatim; 625(a)(8) quotation restored to its full clause |
| D5–D7 | not engaged |
| D8 Numeric ownership | the slew-foot count at defending_the_rush :1032 follows its owner (body_contact_and_battles) |
| D9 Summary layer | defensive_zone_coverage KT4 |
| D10 Key-facts layer | two restructured blocks plus defender's, each line voiced alone |
| D11 Reader safety | safety-reviewer plus a narrow re-check |
| D12 Read-aloud | authors and safety-reviewer renders |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked unit; no site-reviewer (text only, no caption changed) |

## What this method could not have found
- **Merged qualifiers.** A cut qualifier that matters in a way neither reviewer saw.
- **Other units.** Units in these files built on the old wording that were outside the diff.
- **Casebook rulings.** A Casebook ruling on a pushed-in attacker contacting the goalie, filed under a rule not searched.
- **Listening.** Whether the 298–300-character facts lines can be followed by ear.
