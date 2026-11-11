# W269–W276: "takes precedence" corrected for Junior and Senior, goalie head matches added, and a modal taken off the mandatory match (11 November 2026)

**Files:**
- **W269:** content/positions/center.md, content/positions/winger.md, content/technique/body_contact_and_battles.md, content/systems/faceoffs.md
- **W272:** content/foundation/language_and_glossary.md, content/foundation/rules_primer.md, content/hockey-iq/risk_management.md, content/hockey-iq/playing_without_the_puck.md, content/technique/passing_and_receiving.md
- **W273:** content/positions/goaltender.md, content/positions/switching_positions.md, content/technique/shooting.md
- **W274:** content/systems/defensive_zone_coverage.md, content/systems/forechecking_systems.md, content/systems/offensive_zone_play.md, content/systems/zone_entries.md, content/systems/special_teams.md
- **W275:** the same four files as W269
- project/plans/OPEN_ITEMS.md
- this record

## Source
Three inputs fed this round:
- The W265–W268 plan row, items (1), (2), (4) and (7). Items (1), (4) and (7) were the commit gate's non-blocking notes.
- A read-only rules-verifier ruling (W271) on the reach of Hockey Canada 7.7.
- A read-only corpus-wide paraphrase sweep (W270).

**The W271 ruling.** Commit 93a7291f wrote "the book says head contact takes precedence", citing 7.6 and 7.7 together. That is accurate for 7.6 (minor and female hockey): *"This rule supersedes any other rules … any foul that results in contact to the head must be penalized as Head Contact"*. It is not accurate for 7.7 (Junior and Senior):
- 7.7's preamble lets referees penalise minimal-violence head contact *"with a minor penalty for roughing, charging, or another appropriate penalty"*.
- It supersedes only *"other rules regarding contact to the head"*.
- Interpretation 2 says minimal violence *"should not be penalized as Head Contact but under another appropriate rule"*.
- Interpretation 1 makes five acts head contact *"notwithstanding degree of violence"*.

The error was a misattribution, not a permissive one, because every site went on to "plan on … anyway".

**The W270 sweep.** It found one site the earlier census missed, passing_and_receiving :223, which still said "whichever costs more". It also found that 7.7(b)'s third paragraph is a Junior/Senior boards clause (*"hits their head on the glass, ice, or the boards in such a manner that results in a head injury"*). So "no boards clause" is true only of 7.6. No diagram caption carried the claim.

## What changed
**W269: small fixes**
- **center :779, winger :863.** Each goalie hit-from-behind head limb gained "and a match if the goalie cannot protect themselves or you meant to injure them (7.6(c); 7.7(c))".
- **body_contact :1379.** Gained "at least 7.5's minor plus game misconduct otherwise". The head-contact clause had walked the non-charge floor back.
- **faceoffs :938.** "(Rule 81.6)" became "(NHL and IIHF 81.6, PWHL 83.6, Hockey Canada 6.7(b), CARHA 65(d))".
- **center KT6.** Now reads: "Under Hockey Canada that is the rule unless the hit reaches the head; on the head, and under the IIHF, plan on it anyway". The precision lost in 93a7291f is restored, and an IIHF hit from behind is not always ejecting (43.3 needs *"recklessly endangers"*).

**W272–W275: the Junior/Senior correction, at 31 census sites plus these found by the authors**
- forechecking facts :973. It credited 7.6's *"supersedes any other rules"* to 7.7.
- body_contact CM :2036.
- center facts :874.
- faceoffs :1157 and winger :815. These applied the 7.6 quote to all of Hockey Canada.
- goaltender :1275 and others were ruled acceptable as they stand (plan row).

The claim now reads one of three ways:
- "can be called as head contact instead (7.6; 7.7 in Junior and Senior)", with the floor in the same sentence;
- "Head contact can take precedence";
- at the owner page body_contact :798, defensive_zone_coverage :753, forechecking :984 and rules_primer :472, a two-book account: "in minor and female hockey Rule 7.6 *"supersedes any other rules"*; in Junior and Senior 7.7 lets the referee send a hit with minimal violence to another rule".

The forechecking :1182 trailer now carries the 7.7 preamble quote and the 7.7(b) injured-head boards clause, and scopes its "the book does not say whether a head-first drive … is head contact" to outside Junior and Senior. The goalie sites keep "plan on the dearer / the same price anyway". goaltender :1615, the charge, keeps 8.5(b)'s mandatory major and game misconduct as the advice.

**W276: the modal taken off the match**
"Can be called as head contact, a match if they cannot protect themselves" let "can" govern a match that 7.6(c) and 7.7(c) make mandatory (*"will be assessed"*). Two reviewers blocked it: one at switching :272, one at five W275 sites. It was then repaired at every site with the reviewers' "plan on a match if…":
- glossary :292
- playing_without_the_puck ×3
- risk_management ×3
- zone_entries ×4
- forechecking :223, :810, :973
- switching :272
- body_contact :798, :2036
- center :874, :879
- faceoffs :1220

A narrow re-check then smoothed the double-"and" shape at glossary, playing_without_the_puck and risk_management ("but plan on a match … and on at least … anyway, since head contact's lowest rungs can keep you in the game").

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier W271 (read-only ruling) | The ruling above; a 30-site census with priorities. |
| general-purpose W270 (read-only sweep) | One A site (passing_and_receiving :223), four C sites, no caption hits. |
| safety-reviewer W269 | Nothing blocking. WORDING ×3 applied verbatim: center :779 intent limb, body_contact "7.5's minor", KT6. The faceoffs citation option was applied verbatim. |
| safety-reviewer W272 | Nothing blocking. WORDING ×2 applied verbatim: the glossary sentence joined, and rules_primer "lets the referee send". The coordinator extended "lets the referee send" to the identical phrase at DZC :753 and FC :984; W274's reviewer had flagged the same overbreadth there. |
| safety-reviewer W273 | **BLOCKING:** switching :272, "can call it head contact, ⚠️ **a match…**", where the modal governed a mandatory match. Fixed verbatim. WORDING: goaltender :1627 and shooting :536 changed to "can be called", applied verbatim. Ruled that the flat "calls it head contact" population is acceptable, and that a mechanical edit would recreate the defect. |
| safety-reviewer W274 | Nothing blocking. WORDING: FC :223 (attachment, plus the missing match), applied verbatim. All FC :1182 quotes verified verbatim. |
| safety-reviewer W275 | **BLOCKING:** the same modal shape at body_contact :798 and :2036, center :879 and :874 (facts), and faceoffs :1220. All fixed verbatim. Optional winger :863 intent limb applied. Every "supersedes any other rules" site outside the wave is scoped. |
| safety-reviewer, narrow re-check (W276) | Covered the coordinator's extension of "plan on a match" to 15 sites. Nothing blocking. WORDING: the double-"and" sites ×6, switching and faceoffs (", and" → " —"), and risk :908 "but". All applied verbatim. A sweep of all 17 files found no other modal over a mandatory penalty. |

### C11
The authors wrote every precedence change. The coordinator applied review wordings verbatim. The coordinator also extended two reviewer fixes to identical sites in its own hand:
- "lets the referee send" at DZC :753 and FC :984;
- "plan on a match" at 15 sites, including the FC :810 rewording.

The second extension was re-checked by a separate safety-reviewer, which found it CORRECT and gave the final wordings, applied verbatim. The first is an identical phrase substitution of a reviewer's own wording. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
- check_facts exit 0 (no pipe).
- check_links --quiet exit 0.
- check_absolutes passes.
- check_marker_pairs: 17 files, 0 LOST, 0 SPLIT HALF UNMARKED. Three "no longer present by key" entries are rewritten openings; each still carries its ⚠️ and its count is unchanged.
- Full `npm run build` (absolute binary), started after the final content edit. `--bare` and `--panels` show 0 on every changed page, and dist has 0 literal `**`.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | hc.txt 6.7, 7.4, 7.5, 7.6, 7.7 (preamble and Interpretations 1–3), 8.5 and 9.5; nhl_rules 43 and 81.6; iihf 43 and 81.6; pwhl 43 and 83.6; carha 53 and 65; usah 624(b)(1) |
| D5–D8 | not engaged |
| D9 Summary layer | center KT6; Common Mistakes on body_contact, goaltender, playing_without_the_puck and zone_entries |
| D10 Key-facts layer | forechecking :973, center :874 and shooting :507, each voiced alone and within caps |
| D11 Reader safety | safety-reviewer ×7 |
| D12 Read-aloud | renders on all 17 files; chunk co-location of the claim, the match and the floor confirmed |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; dist check-links |
| D15 Rendered site | build, plus panel, bare-glyph and literal-`**` scans |

## What this method could not have found
- A softening made by sentence structure rather than a modal (a match moved into a subordinate clause, or "plan on" governing the wrong noun) at sites the reviewers did not read.
- Unmodified documents that still say "is head contact, a match if…". These are accurate but now inconsistent in wording (plan row (1)).
- How referees actually reconcile 7.7's minimal-violence route with 8.5(b) or 7.5. No Hockey Canada casebook is on disk.
- Whether 7.6 applies in Junior and Senior at all. Its preamble is unscoped in the text (plan row (8)).
