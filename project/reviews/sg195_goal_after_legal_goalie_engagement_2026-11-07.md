# SG195: the goalie page stops promising the goal back after a legal USA Hockey play, and an attacker headline stops saying contact costs the goal in all three books (7 November 2026)

**Files:**
- content/hockey-iq/playing_without_the_puck.md
- content/positions/goaltender.md
- project/plans/OPEN_ITEMS.md

## Source
SG194's open question: does USA Hockey disallow a goal after an attacker legally engages a goalie who has the puck outside the privileged area (Casebook 607 Situation 5)? A read-only rules-verifier research pass (scratchpad census_sg195/findings.json) answered it and classified every corpus sentence that prices goal disallowance for contact outside the crease. No sentence was found to say a goal counts when it does not. Two sentences were harsher than the book:
- goaltender :544, unconditional for USA Hockey, which over-promises to a goalie reader;
- playing_without_the_puck :670, "in all three".

## The rules (verified on disk)
- **USA Hockey 617(c)(4):** a goal is not allowed if the puck entered "while an attacking player was positioned in the crease … or interfering with the goalkeeper (see Rule 625(b) Interference)".
  - 625(a)(8): contact "in a manner that interferes with the movement of the goalkeeper, unless otherwise specified in the rules".
  - Casebook 607 Situation 5 permits engaging a goalie with the puck outside the privileged area. No USA Hockey text rules on a goal after that legal play.
- **Hockey Canada 8.5(a) Interpretation 1:** "Any goal scored on a play where an attacking player initiates contact with the goaltender will be disallowed, regardless of whether the contact occurs inside or outside of the goal crease."
- **CARHA 66(b):** "If the attacking player has physically interfered with the goalkeeper, prior to or during the scoring of the goal, the goal will be disallowed".
- **NHL/IIHF 69.4 and PWHL 71.4:** contact other than incidental disallows the goal.

## What changed
- **goaltender :544:** "Under Hockey Canada and CARHA, contact with you outside the crease costs the goal. Under USA Hockey, contact that interferes with you does, but do not count on it when an attacker legally plays for the puck you have outside your privileged area. In all three, a screen out there without contact does not cost the goal."
- **goaltender :1234:** appends "Do not count on a goal coming off for that play."
- **goaltender facts :1244 and :1285:** "check you for it" restores Situation 5's purpose ("in an effort to gain possession"). :1285 changes "deliberate contact charging" to "deliberate charging", an ellipsis that keeps every price.
- **playing_without_the_puck :670 (attacker page):** "⚠️ **But contact with the goalie outside the crease costs the goal under Hockey Canada and CARHA, and interfering with them does under USA Hockey.**" This matches center :473.
- **Not done:** merging goaltender :1244/:1245. Every limb is load-bearing, and the two lines total 593 characters against a 300 cap.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier research (read-only) | USA Hockey: no ruling, "goal stands" is a reading; the other five books disallow. :544 HARSHER (over-promises to a goalie); pwtp :670 HARSHER (attacker, cautious); the rest TRUE |
| rules-verifier (both files; usah.txt and Casebook 607/617/625, HC 8.5, CARHA 66(b), NHL 69.4) | All five changed sites PASS; neighbours :1234 "both protect you more" and :1230 Sit. 13 PASS (optional tidies in the plan) |
| safety-reviewer, also standing in for content (both rendered) | All six SHIP. The goalie page no longer over-promises; nothing is cheaper for the attacker. Noted a pre-existing CARHA "physically interfered" nuance (in the plan) |

### C11
- Two authoring agents made every edit on disjoint files. The coordinator wrote the briefs, the plan and this record.
- There were no post-review edits.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets and check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in both files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 (research, review) |
| D2 Exceptions | Hockey Canada's fouled-into-you exception; Situation 5's legal play |
| D3 Divergence | Goal disallowance across six books |
| D4 Citation integrity | 617(c)(4), 625(a)(8)/(b), Casebook 607 Sit. 5 and 625 Sit. 9/13, 8.5 Interp. 1, 66(b), 69.4 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "No USA Hockey text rules on a goal after a legal Situation 5 play" (617 and 625 Situations read; disclosed as "do not count on it") |
| D7 Cardinal rule | The goalie is told what to expect; the attacker is told to keep off the goalie |
| D8 Numeric ownership | None |
| D9 Summary layer | No KT or Common Mistakes changed; :1234 body |
| D10 Key-facts layer | :1244 and :1285 compared limb by limb with HEAD |
| D11 Reader safety | safety-reviewer; goalie and attacker directions checked separately |
| D12 Read-aloud | Both rendered; chunks 031, 084–087, 090 and 041 read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes, markers kept leading. No site-reviewer (declared) |

## What this method could not have found
- A USA Hockey referee bulletin or point of emphasis on goals after a legal Situation 5 engagement (not on disk).
- Whether "interferes with you" is heard as narrower than "contact".
- Goal-disallowance claims on other pages worded without the research's search terms.
