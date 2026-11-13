# W319: Hockey Canada head-contact precedence stated as the book writes it, and "ends your game in most books" replaced by the named books (13 November 2026)

**Files:** 20 content files, in three disjoint author sets.
- **A:** forechecking_systems, defensive_zone_coverage, faceoffs, game_management, special_teams, switching_positions. defending_the_rush was owned, judged already correct, and left unchanged.
- **B:** offensive_zone_play, zone_entries, goaltender, defender, winger, center, body_contact_and_battles.
- **C:** risk_management, playing_without_the_puck, puck_support_and_spacing, shooting, passing_and_receiving, rules_primer, language_and_glossary. team_play_and_culture was owned, judged correct, and left unchanged.

Also project/plans/OPEN_ITEMS.md and this record.

## Source
The W317–W318 plan row, items (1) and (3); that row is removed from the plan and its two surviving items carried into the W319 row. The brief named the claim (Claims A and B below) and gave search strings, and told the authors not to rely on a list of sites.

## Claim A: precedence
- **The defect.** Units said a hit that reaches the head "can be called as head contact instead (7.6; 7.7 in Junior and Senior)". That understates HC 7.6.
- **What 7.6 says.** `hc.txt:6245`: *"This rule supersedes any other rules, with the exception of Rule 7.10 – Fighting, and any foul that results in contact to the head must be penalized as Head Contact."*
- **What 7.7 says.** 7.7 supersedes "any other rules regarding contact to the head" in Junior and Senior. Interp. 2 sends a minimal-violence hit "under another appropriate rule".
- **The repair.** "is head contact" / "Hockey Canada calls it head contact (7.6; in Junior and Senior, 7.7, unless the violence is minimal)". Every "plan on … anyway" floor and every match clause is kept.
- **game_management :1227 has no caveat.** It is a late hit, and 7.7 Interp. 1(iii) forces head contact whatever the degree of violence.
- **The error ran in the harsher direction**, because every site already carried the floor. This was an accuracy fix, not a safety fix.

## Claim B: "most books"
"in most books it ends your game" and "in every book but USA Hockey; under the IIHF, plan on it" (which put the IIHF inside "every book") became:

> "ends your game under the NHL, PWHL and CARHA, and under Hockey Canada unless it reaches the head, where you should plan on it anyway; under the IIHF, plan on it"

USA Hockey's own price sits beside it. In facts lines at or near the cap, the short form "(off the head)" is used, with the Hockey Canada head limb carried in the same unit. offensive_zone_play :822, :1165 and :1224 use a variant that states the head case inline.

**Left as "most books" on purpose**, because they are true, not cheaper than any book, and the full wording does not fit:
- the facts lines defensive_zone_coverage :166, faceoffs :586 and puck_support_and_spacing :343;
- the Key focus lines playing_without_the_puck :22, risk_management :30 and zone_entries :22, restored to HEAD after review (see below). No Key focus or Overview line is changed by this wave.

## After review (coordinator applied reviewer wordings verbatim)
- **center :684.** The comma is restored: "IIHF, and Hockey Canada head hits: plan on it". Without it, the line read as limiting the IIHF to head hits.
- **defender :818.** The facts line was voiced alone with no price. It now reads "— plan on 7.5's minor and game misconduct anyway —" before the match clause. This line predates the wave.
- **rules_primer :479.** "goes to another rule" is now "can go to another rule, unless it was driven into the head".
- **risk_management :923.** "a trip or slew-foot can end it too" had come to sit after the USA Hockey clause, so it was heard as USA Hockey's price and understated 639(b) (*"The minimum penalty to be assessed for slew footing is a major plus game misconduct penalty"*). The reviewer's first repair ("under USA Hockey a slew-foot always does") was blocked by the commit gate as a false exclusivity: NHL 52.2 and PWHL 53 make it a mandatory match. A coordinator wording from the body ("ends it outright in four of the six books") was then rejected by the safety-reviewer: IIHF 52.2 is "at their discretion" (`iihf_rules_2026-27.txt:4549`), so only three books eject outright. It now reads the reviewer's "A trip can end your game too. A slew-foot ends it under the NHL, PWHL and USA Hockey; under the IIHF, plan on it, and under Hockey Canada and CARHA it can." The same claim at :900 ("four of the six eject you at the floor", pre-wave) took the reviewer's matching form.
- **shooting :945 (goalie context).** "plan on at least 7.5's minor and game misconduct anyway" is now "plan on the dearer of 7.5 and 8.5 anyway".
- **forechecking_systems :319 (facts).** "F1 goes hard but pulls up on a carrier's back" read voiced alone as contact on the back; now "F1 goes hard, never into a turned back" (gate nit, safety-reviewer wording).
- **rules_primer :479, second pass.** "unless it was driven into the head" named only 7.7 Interp. 1(i); now "unless it was direct, blind-side, late, airborne or on a player down on the ice" (Interp. 1(i)–(v), safety-reviewer wording).
- **switching_positions KT8.** The duplicated floor ", where you should plan on it anyway" was removed from the ladder sentence. The head sentence in the same KT still carries "plan on the game misconduct anyway".
- **Key focus at playing_without_the_puck :22, risk_management :30 and zone_entries :22.** All three are reverted to their HEAD sentences ("in most books ends your game" / "gets you thrown out in most books"); the commit gate found zone_entries :22, which the first revert pass missed. The owner's rule keeps rules out of Key focus unless the rule is the tactic, and the full ladder stays in each body.

## Reviews
| Reviewer | Result |
|---|---|
| Three authors | Brief premises verified in sources/; sites judged already correct are listed; harness on every changed ⚠️ unit; renders |
| rules-verifier | Nothing blocking; no changed sentence is cheaper than its book. Checked: HC 7.5–7.7 with their Interpretations and 8.5(b); NHL and PWHL 43; IIHF 43 and 48.1/48.2; CARHA 53; USA Hockey 608 and Casebook 608 Sit. 1. Ruled "unless the violence is minimal" the canonical form. It is broader than Interp. 1, but it errs dearer, since a minimal hit from behind goes to 7.5. All five flagged points OK. |
| safety-reviewer ×3 (A, B and C sets) | Nothing blocking. Every floor, match clause and USA Hockey limb that HEAD carried is kept. Wordings given at center :684, defender :818, rules_primer :479, risk_management :923 and switching KT8, all applied. Set C flagged the Key focus ladders against the owner's rule, and they were reverted. |
| safety-reviewer narrow re-check | All seven applied changes OK, and the item-4 slew-foot wording was given and applied. 0 LOST across 20 files. The one SPLIT HALF candidate, center :900, was already unmarked at HEAD. |

### C11
The authors wrote the wave. Every coordinator change after review was reviewer-supplied wording applied verbatim, or a revert to HEAD bytes, including risk_management :923 and :900 after the gate blocked the first :923 repair (a coordinator-composed interim wording was rejected on re-check and not shipped). The coordinator wrote this record and the plan row.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all 20 files;
- check_callout_flow --bare / --panels on each.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, as above |
| D4 Citations | not engaged (no citation moved) |
| D5–D8 | not engaged |
| D9 Summary layer | KTs, Common Mistakes and Key focus in the changed files |
| D10 Key-facts layer | facts lines at or near the cap, read voiced alone by all four reviewers |
| D11 Reader safety | safety-reviewer ×3 plus a re-check |
| D12 Read-aloud | every changed file rendered |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every marked unit; no site-reviewer (text only) |

## What this method could not have found
- **Same claim, different words.** All searches used the claim's known words. A unit stating Hockey Canada head precedence, or the checking-from-behind ejection, in other words would have passed.
- **Units built on the old premise.** A unit built on the old "can be called" premise without those words would also have passed. Only a whole-document read finds those.
- **USA Hockey 620(b).** It makes intentional or careless head contact a mandatory major plus game misconduct. No site states this for a hit from behind on the head. "At least a minor and a misconduct" is a true floor, but it is a half-answer for USA Hockey readers. This predates the wave and is logged in the plan.
- **Old wording that remains.** "in almost every book" remains at game_management :1176 and KT14 :1349, with no Hockey Canada head limb. forechecking :223's "no book here prices a hit to the back at two minutes alone" is untrue of IIHF 48.2 for a hit to the head, but in the dearer direction. Both are logged.
- **Precedence and scope.** Whether 7.6 and 7.7 displace 7.5 entirely, which Hockey Canada does not interpret. Also whether the "(in Junior and Senior, unless…)" parenthesis is heard as "only in Junior and Senior".
- **Long KTs.** switching KT8 (about 145 words) and risk_management KT11 (about 96) have not been ear-tested.
