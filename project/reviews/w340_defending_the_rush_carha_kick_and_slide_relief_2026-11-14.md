# W340: defending_the_rush, CARHA's kick priced at a match for any kick, a universal "never slide counting on puck-first relief" in the facts layer, and USA Hockey's knee-drop exception given its condition (14 November 2026)

**Files:**
- content/systems/defending_the_rush.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave works the W339 commit-gate's note and that wave's plan rows. One author, O, owned the file.

## What changed
- **Body :1034, CARHA limb of the slew-footing bullet.** It said "If you kick at a CARHA opponent's skates from the side or front, plan on a match, because 86(b) reaches only a kick from behind". This was the last "side or front" framing in the corpus, and it implied a kick from behind is cheaper. The bullet now:
  - opens with "**Under CARHA, plan on a match for any kick at an opponent**", quoting 48(c) ("attempts to kick or deliberately kicks an opposing player shall be assessed a Match penalty");
  - discloses that CARHA's own ruling keeps a kicking slew-foot from behind at the referee's discretion under 86(b), "but plan on the match anyway" (Case Situation "Rule 86(b) - Tripping", carha_2026.txt:4265–4273);
  - keeps the leg drag with no kick at 86(b)'s discretionary match.

  This is the form now used in rules_primer :484, risk_management :905 and body_contact_and_battles :1855. A corpus sweep finds no "side or front", "only a kick from behind" or "any other kick" left.
- **Facts Action :1005, cap 200.** Once W339 scoped :1007 to USA Hockey, body :1002's universal "never trip or slide counting on it" had no facts-line counterpart. The block is at HARD_MAX (14/14), so the Action line was reworked to carry it, after review: "Stick on the puck only; never trip or slide trusting puck-first relief — a blade off both puck and their blade is likely a penalty; USA Hockey's relief needs a referee to rule you clearly at the puck" (200/200).
- **Facts Rule :1007, :539, body :992 and the :1180 trailer.** The USA Hockey Casebook 639 Situation 4 knee-drop exception was given without its condition at four sites. The condition: "The only exception is when a player drops to their knees to block a shot and their momentum carries them into the player shooting the puck". Each now carries it:
  - :1007: "…unless you knelt to block a shot and momentum took you into the shooter".
  - :539 (299/300): "…unless you knelt to block a shot and slid into the shooter …; a reckless one, a mandatory major + game misconduct (639(b)) — plan on a match and a likely multi-game ban (602(a))".
  - :992: "…and whose momentum carries them into the shooter".
  - :1180: "…a player who drops to their knees to block a shot and whose momentum carries them into the shooter".

## After review (coordinator applied reviewer wordings verbatim)
- **First rules-verifier pass.** A tool failure meant it verified nothing; it said so and returned UNVERIFIED. A fresh rules-verifier passed all three original hunks, reading the 2026 CARHA book, usah.txt and the Casebook. It confirmed the 86(b) Case Situation exists in the 2026 book.
- **:1034 tail (safety-reviewer).**
  - **The problem:** the bullet, the only paragraph in its spoken chunk, ended "…so a CARHA trip can end your game without a match", leaving a listener on the cheaper rung. 48(a)'s mandatory match for a trip meant to injure was in the next chunk.
  - **The fix:** "…and any other trip with your foot or leg falls under 86(a), a minor "or, at the discretion of the Referee, a Major penalty and a Game Misconduct penalty" — so even a plain CARHA trip can end your game, and 48(a) makes one meant to injure a match".
- **:1005 and :1007 (safety-reviewer).** Two parsing fixes:
  - "a blade off the puck and their blade" became "a blade off both puck and their blade";
  - the referee is named as the judge again;
  - "makes them fall tripping" and "knees … carry you" were reworded.
- **:539 and :992 (safety-reviewer, outside the original diff).** Author O added the knee-drop condition at both sites and found the :1180 trailer copy itself. The safety-reviewer's re-check asked for "a reckless one" back at :539 and gave a version that measured 301/300. The coordinator changed "major and game misconduct" to "major + game misconduct", a form the file already uses, to fit the cap. The rules-verifier checked that line: OK.
- **:1180 (rules-verifier).** "a shot whose momentum" became "a player who drops to their knees … and whose momentum".
- **Re-checks.** Both reviewers re-checked every final unit: OK. 0 LOST (88/88).
- **Logged in the plan, not applied:** risk_management :670 (facts), :696 and the :998 trailer state the same knee-drop exception without its condition.

## Reviews
| Reviewer | Result |
|---|---|
| author O | Three items done; found the :1180 trailer copy. Layer tests; renders read. |
| rules-verifier (first) | Tool failure; reported UNVERIFIED honestly, no verdict. |
| rules-verifier (retry) | All three hunks OK, every quotation read past its closing mark. Re-checks: OK, plus the :1180 wording. Final :539 OK. |
| safety-reviewer | No BLOCK. WORDING on :1034 (cheaper rung last in its chunk), :1005, :1007; found the truncated knee exception at :539/:992 and in risk_management. Re-check: OK except :539 ("a reckless one"), applied. |

### C11
The wave was written by author O. Post-review changes were reviewer wordings, applied verbatim and re-checked, plus author O's additions at :539/:992/:1180, which both reviewers re-checked. The coordinator's one edit, "and" → "+" at :539 to fit the cap, was checked by the rules-verifier. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier (retry), with re-checks |
| D4 Citations | quotations read past their closing marks; trailer corrected |
| D5–D8 | not engaged |
| D9 Summary layer | Common Mistakes :1109 and KT7 :1169 read; unchanged |
| D10 Key-facts layer | :539, :1005, :1007, each voiced alone |
| D11 Reader safety | safety-reviewer, with re-check |
| D12 Read-aloud | renders by the author and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus checks; no site-reviewer (text only) |

## What this method could not have found
- **Other CARHA rules.** A CARHA rule reaching a leg drag or sweep under another word, such as 49 body contact or 52 charging.
- **Referee practice.** How CARHA referees weigh 48(c) against the 86(b) ruling.
- **Other wordings.** Paraphrases of the knee-drop exception that use none of the searched words.
- **Listening.** Whether the 299–300-character facts lines are followable by ear, which needs the owner's listening pass.
