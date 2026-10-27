# SG105: readability on the pages SG104 did not touch (27 October 2026)

**Files:**
- content/foundation/core_principles.md
- content/foundation/language_and_glossary.md
- content/foundation/rink_map.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/time_and_space.md
- content/off-the-ice/conditioning_and_recovery.md
- content/off-the-ice/mental_game.md
- content/positions/defender.md
- content/positions/switching_positions.md
- content/reading-diagrams/reading_ice_hockey_diagrams.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- content/systems/faceoffs.md
- content/systems/game_management.md
- content/systems/neutral_zone_systems.md
- content/systems/offensive_zone_play.md
- content/systems/special_teams.md
- content/technique/passing_and_receiving.md
- project/plans/OPEN_ITEMS.md

## Why
This continues SG104 (owner: readable beats defendable; shorter is better). Seven agents worked on disjoint pages from a brief listing the nine shapes SG104's reviewers had caught:
1. a next-game ban dropped beside CARHA's;
2. "must" turned into "can";
3. a narrowed scope (CARHA 52(b)/49(a), HC 7.6 vs 7.7);
4. a sentence that orders a foul;
5. a split paragraph opening with ⚠️ (a new panel);
6. a dropped disclosure;
7. a dangling antecedent;
8. a vague window;
9. 60 words treated as a cap.

## Result
Corpus-wide, long paragraphs went from 8 to 1, and long KTs from 36 to 30. Most of the remaining long KTs are deliberately over 60 to keep a safety limb, because each repair added words back. practice_and_development ended unchanged: its one trim was reverted in review.

## Reviews
**First pass:** two safety reviewers and one rules verifier. **Second pass:** a narrow rules and safety re-review of every repaired unit, listed in the appendix.

The first pass found:
- **offensive_zone_play KT8:** dropping "keep" made it read as arriving with arms and skates out. Fixed.
- **game_management :933:** the split made "Unlike the NHL… the IIHF gives a game misconduct" a general claim. That is false for NHL kneeing and head-butting, and IIHF 56.5 is discretionary. Now scoped to late-hit and interference, "can".
- **defender KT3:** "Never let a body cross your goalmouth" had lost its battle scope. Restored.
- **defender's new CM bullet:** it narrowed Hockey Canada to head hits. Rewritten.
- **defending_the_rush KT9:** "that stays off the head" restored.
- **passing :223:** the split made the victim the object of "prices". Fixed.
- **conditioning CM :609:** "bar it" dangled. Now names body checking.
- **mental_game KT11 and CM :693:** "can end your game" understated mandatory ejections. USA Hockey 601(d)/(e) and HC 11.3(c), 11.4 and 11.5(c) are now named.
- **dzc :592 and :600:** "on contact alone" became "whether or not anyone is hurt", plus the HC 7.6(b) Interpretation 2 minor/female scope.
- **Minors:** rink_map KT10's antecedent; playing_without_the_puck KT11 "mind the posts"; core_principles KT11 "if the wall is unavoidable"; "in most books" restored; switching KT8 now names HC and CARHA; OZP :976 "deliberate"; neutral_zone KT4 wording.

The rules verifier also settled three questions:
- **The IIHF on checking from behind:** a call always ejects (43.2 has no minor), but whether it is called turns on recklessness (43.3). So both pages were right.
- **game_management's IIHF head contact:** it complies with the owner's 19 October "harsher of 43 and 48" ruling, and now says so in that form.
- **The HC 7.6 cross-check lines:** harsh rather than wrong. Only "on contact alone" overreached.

| Dimension | Reviewer | Result |
|---|---|---|
| Rules, first pass | rules-verifier | Two items to fix (game_management :933 and OZP KT8), plus minors and four answered questions. No claim had been made wrong in the permissive direction. |
| Safety, first pass | safety-reviewer ×2 | FIX on 6 files, as above. |
| Rules, re-review | rules-verifier | CONFIRMED except: the defender HC head-contact price was unstated; mental_game's HC list omitted 11.5(c)(ii) (any deliberate hand on an official is a match) and overstated "a threat" (only a physical threat to an official is a match, 11.5(c)(i)); game_management "that is" dropped IIHF discretion; neutral_zone "meets the charging rules". All fixed. |
| Safety, re-review | safety-reviewer | 17 SHIP; mental_game FIX (the same 11.5 omission). Invariants: 0 LOST markers on 18 files; `--panels` equal to HEAD on every file; no glyph inside a strong run. |

### C11
The coordinator made these edits after both re-reviews; the commit gate reads them:
- **mental_game :693 and :751:** "under Hockey Canada spitting, a slur, a physical threat or any deliberate hand on an official will".
- **defender :911:** "priced as head contact instead, anything from a minor to a match depending on force, injury and whether they could protect themselves,".
- **game_management :933:** "under the IIHF, plan on the major and game misconduct".
- **neutral_zone :915 (KT4):** "it can be called charging in every division".
- **rink_map :702 (KT10):** "expect a British goalie to come out", so it no longer takes in the PWHL.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 | Two rules passes, covering NHL, PWHL, IIHF (both editions), USAH and its Casebook, HC 2026-28, CARHA 2026, the EIHL Casebook, In-House, the IHUK RoCs, the EIH R&R and the DOPS. |
| D4–D5 | Quotations verified (HC 7.5, 7.6 Interpretation 2). |
| D6 | The HC "threat to an opponent is not a match" negative was searched (11.2), and declared as not proven exhaustively. |
| D7 | Not affected. |
| D8 | n/a |
| D9 | This wave is the summary layers. Carriers were checked for every dropped limb. |
| D10 | No facts lines changed. check_facts exits 0. |
| D11–D12 | Every changed unit was rendered and read alone, twice. |
| D13 | n/a |
| D14 | check_links and site check-links pass. |
| D15 | Full site build with the absolute npm after the last edit: exit 0. `--bare` 0. |

## What this method could not have found
- A sibling layer elsewhere built on an old premise.
- A dropped limb with no lexical trace.
- Whether HC prices a threat to an opponent elsewhere.
- Pre-existing items left:
  - special_teams quotes the 2026/27 IIHF wording for In-House readers (v1.1 46.3 is the same substance);
  - switching KT8 "Even off the head… ends your game" errs harsh under HC 7.6.

## Appendix: the repaired units both re-reviewers read

- offensive_zone_play.md:
  - KT8 "keeping your arms and skates out of the seal";
  - :976 "…or it was a deliberate cross-check to the head" (inside the 7.6 minor/female sentence).
- special_teams.md: "Under the In-House Rules or the Elite League's, the instigator minor…".
- game_management.md :933:
  - "Unlike NHL and PWHL interference, the IIHF's late-hit rule can add a game misconduct for a reckless hit with nobody hurt (56.5), from any angle and with no attempt to injure.";
  - "⚠️ **If a hit from behind reaches their head, the NHL, IIHF and PWHL take the harsher of Rule 43 and Rule 48 (head contact); under the IIHF that is the major and game misconduct.**"
- defending_the_rush.md KT9: "…at the wall that stays off the head ejects you in five of the six books, puck or not; under the IIHF there is no minor, so plan on it."
- playing_without_the_puck.md:
  - KT11 "Mind the posts, head up, never duck.";
  - the USA Hockey paragraph, now with the bold on "But every forceful check on a player standing at the boards, back to the middle of the ice, is a major and game misconduct or a match".
- defender.md:
  - KT3 "If a battle moves a body at your net, keep it to the corner side, never across your goalmouth — and never hit anyone from behind.";
  - Common Mistakes "Hitting a player whose back is turned to you": "It ends your game in the NHL, PWHL, Hockey Canada and CARHA — under the IIHF, plan on it — and under USA Hockey if … Under Hockey Canada a hit that reaches the head is priced as head contact instead, but one that drives them head first into the boards still ejects." Check against the owner's 15/18 Oct HC 7.6 rulings in /Users/uk45004860/.claude/projects/-Users-uk45004860-Documents-personal-ice-hockey/memory/project_owner_rulings_oct15.md. Does "It ends your game in … Hockey Canada" contradict the next sentence, which says a head hit can be a 7.6 minor?
- defensive_zone_coverage.md: :592 and :600 "whether or not anyone is hurt"; :600 adds "In minor and female hockey it is aimed at a deliberate cross-check, not minimal accidental stick contact (Interpretation 2 to 7.6(b))."
- rink_map.md KT10: "expect the other goalie to come out".
- neutral_zone_systems.md KT4: "it meets the charging rules in every division".
- passing_and_receiving.md :223: "Hockey Canada's Rule 7.5 names the picture — a player 'digging the puck out' who is 'hit from behind and driven head-first into the boards' — and prices the hit at least a minor…".
- conditioning_and_recovery.md:
  - CM :609 "body-checking age lines … checking age … bar body checking";
  - KT14 "differing from CRT6's ten both ways; act on whichever fires first".
- switching_positions.md KT8: "a mandatory match under Hockey Canada and CARHA".
- mental_game.md:
  - KT11 "…can end your game. Under USA Hockey all but a light touch will, and under Hockey Canada spitting, a slur or a threat will; any of them can bring a suspension.";
  - CM :693 the same claim.
- practice_and_development.md KT12: "in most books".
- core_principles.md KT11: "if the wall is unavoidable".


## Gate notes (commit-gate CLEAR, carried to the plan)
- **switching_positions :296:** the split-off head-contact half carries a match price with no ⚠️. It is a SPLIT HALF UNMARKED candidate, not a LOST marker, because the marked half above voices "Important.". Listener pass: consider an inline ⚠️ before the bolded match clause.
- **Limbs dropped from KTs, still carried in the body:**
  - time_and_space KT5 "skates parallel" (body :213, facts :197);
  - conditioning KT11 "Local bodies can widen the ban" (CM :608).
- **defender :911** "head first into the boards still ejects" leaves out the goal frame. This was there before the wave; the owner's "keep goal frame in" ruling covers it.
- **mental_game** "a physical threat" has no stated target; under HC it is a match only against an official. It errs harsh.
- **The appendix lists practice_and_development KT12**, but its trim was reverted and the file is unchanged.
