# FZ (20 October 2026): goalie-freeze and after-whistle siblings, 9 pages

goaltender.md was committed in 4cb4066 with the goalie-freeze rules fixed in every layer. This wave aligned the sibling pages with it, and checked the USAH after-whistle spectator limb (601(d)(9)). Brief: scratchpad `fz_brief.md`.

Authors:
- **fz-a:** defender, center, faceoffs
- **fz-b:** breakouts, special_teams, neutral_zone_systems
- **fz-c:** defensive_zone_coverage, zone_entries, offensive_zone_play, time_and_space

Reviewers:
- **fz-aR:** rules-verifier
- **fz-bR, fz-cR:** safety-reviewers
- **fzR2:** a final read of every post-review repair

None found anything CRITICAL or MAJOR.

## Defects found and fixed

- **Hockey Canada clause ii treated as the exception to clause v (the permissive reading).** Found in breakouts :1103/:1123, special_teams :1049, neutral_zone_systems :554/:571, defender :179/:201, defensive_zone_coverage :851 (a "working reading" that only racing out to a loose puck is barred), and time_and_space :538 (the ⚠️ sat on a pointer, not on the instruction).
  - Every site now states clause ii, clause v and the goaltender paragraph of Rule 10.2 (hc.txt ~:7661, "while outside their crease", no save exception). It says the book never says which governs, and gives the instruction: out of the crease, play it.
  - The time_and_space instruction is scoped to Hockey Canada (fz-cR).
- **USA Hockey covers.**
  - defender :181 gained the privileged-area limit (614(c)(3), Situation 12).
  - offensive_zone_play :816 and special_teams :1048 gained the body-out-of-the-crease condition (614(c)(1)). faceoffs :565 now carries "behind the goal line or outside the privileged area", with "out of the crease" opening the line.
  - special_teams :785/:1060: the "straight off the save, not drop and re-cover" limit now governs every book (IIHF Situation 63.1; USAH Casebook Situation 9). The USAH limb now reads "when attackers are close enough to pressure him" (Situations 8, 10, 11).
- **CARHA 58(b) added** where the no-trapezoid books were named without it: DZC :833, zone_entries :821, OZP :816/:832 and the three trailers. The quotation was checked verbatim (carha_2026.txt:2815-2818).
- **USAH after-whistle shot.** defender :79 now says "in protest or toward an official or a spectator, a game misconduct (601(d))". No other file in the wave made the claim.
- **OZP §3 heading.** "The Five-Man Shape" is now "The Standard Setup". No anchor links pointed at the old heading. The diagram caption that still says "five-man" is a plan row.
- **Post-review repairs (fzR2 minors, applied by the coordinator in the reviewer's wording).**
  - OZP :818 "(under Hockey Canada, unsettled)": the repair before it had said "never says", which was false, because clause ii does say it.
  - OZP :832: "straight off a save out front, under USA Hockey only when pressured".
  - faceoffs :592: "61(b) reaches anywhere…".
  - defender :199: "after a save under pressure".

## Files (`git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/hockey-iq/time_and_space.md | +1/−1 |
| content/positions/defender.md | +5/−5 |
| content/systems/breakouts.md | +2/−2 |
| content/systems/defensive_zone_coverage.md | +4/−4 |
| content/systems/faceoffs.md | +2/−2 |
| content/systems/neutral_zone_systems.md | +2/−2 |
| content/systems/offensive_zone_play.md | +5/−5 |
| content/systems/special_teams.md | +6/−6 |
| content/systems/zone_entries.md | +3/−3 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | fz-aR rules-verifier on defender and faceoffs; fz-bR, fz-cR and fzR2 read hc.txt, usah.txt, usah_casebook.txt, carha_2026.txt, the IIHF Situations, and the NHL/PWHL Notes at the cited lines |
| D2 exceptions | HC clause ii vs clause v / 10.2; USAH Casebook Situations 5–14; 63.2(vii) "being checked" |
| D3 divergence | per-book cover rules, consistent with goaltender.md |
| D4/D5 citations | quotations verbatim (58(b), clause ii, clause v, 10.2, 101.1); a negative attacked ("HC never says which governs": flattened sweep, no reconciling text) |
| D6 negatives | as D4/D5 |
| D7 cardinal rule | the instruction leads each repaired unit |
| D8 numeric | no figures |
| D9 summary layer | whole-file layer tests per reviewer; no layer left on the old "clause ii is the exception" premise |
| D10 facts | check_facts passes; several lines are within 3 characters of the cap |
| D11 safety | every reviewer found no CRITICAL or MAJOR |
| D12 read-aloud | every changed unit rendered and heard alone (fzR2 did not render defender, DZC or zone_entries; fz-aR and fz-cR rendered them) |
| D13 folklore | out of scope |
| D14 structure | one heading renamed (OZP §3); no anchors broken; check_links passes |
| D15 site | full build after the final edit; --bare 0; --panels 0 |

## What this method could not have found

- **Freeze claims in other wordings.** A freeze claim phrased with none of the search terms ("glove it", "hold it for the whistle").
- **NHL and PWHL casebooks.** None is on disk, so the drop-then-cover limit is a conservative reading for those books.
- **Hockey Canada referees.** Whether they treat clause ii as an exception in practice.

## After the first commit gate (BLOCK on C4/C6)

The gate found that two reviewer types were missing. Both have now run:
- **fz-aS (safety-reviewer) on defender and faceoffs.** No CRITICAL or MAJOR findings.
  - MINOR, applied: defender facts :79 now names the act ("A deliberate clear out of play…"), so the line no longer points back at the line above it. It also gains the top tier from the Note to 601(d): "a match if it endangers one".
  - MINOR, not applied: the conditional catch in :199. The paragraph's closing "after a save under pressure" already carries it in the same chunk.
- **fz-bcV (rules-verifier) on the seven other files.** Every rules claim was checked against primary text: NHL, IIHF and PWHL 63.2 and 65.2 with their Notes; IIHF Situation 63.1; USAH 614(c) and Casebook Situations 5–14; HC Interpretation 3 and the 10.2 goaltender paragraph; CARHA 58(b) and 61(b). No CRITICAL or MAJOR findings. Its MINORs were applied by the coordinator:
  - **special_teams :775.** The Notes are now cited generically: "The 63.2(vi) Notes let a goalie cover a save he came out to make (straight off, IIHF rules)". The "straight off" limit is attributed to the IIHF ruling, Situation 63.1, rather than presented as NHL/PWHL Note text.
  - **special_teams :1052.** "separately, 63.2(VII) makes a freeze in the crease a minor unless he is 'actually being checked by an opponent'". The line no longer reads as a second carve-out from 63.2(I).
  - **zone_entries :795.** "Hockey Canada's clauses conflict" replaces "never says". Clause ii does permit the cover.

check_facts and check_marker_pairs pass (0 LOST). The site was rebuilt after these edits.

## After the second commit gate (BLOCK on C11, defender :79)

The coordinator's rewrite of defender facts :79 dropped USAH 610(c), the after-stoppage minor, a limb that HEAD carried. That made the act sound cheaper to the team than it is. The minor is restored: "under USA Hockey after the whistle it is a minor (610(c)) and a misconduct (601(c)(10)), a game misconduct in protest or toward an official or spectator, a match if it endangers one (601(d))".

fz-aS re-checked the line against usah.txt 610(c), 601(c)(10), 601(d)(7), 601(d)(9) and the Note to 601(d), and against NHL and IIHF 63.2(ii). Result: **CLEAR**. Nothing that HEAD carried is dropped, and the line reads correctly heard alone. The site was rebuilt after the edit.

Two notes are left open:
- Whether USA Hockey pairs 610(c) with 601(c)(10) or applies them as alternatives is not stated in the book. Reading them as a pair errs toward overstating the cost.
- The 601(a)(4) avoidable after-whistle shot is out of this line's scope.
