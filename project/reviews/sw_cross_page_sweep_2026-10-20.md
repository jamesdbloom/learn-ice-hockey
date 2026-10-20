# SW (20 October 2026): cross-page sweep, 18 pages

The sweep closed the plan rows left over from the readability programme, on the pages it had not reached: CARHA 32(d) "at least a one-game suspension" propagation, stale "four books" frames, place-scoped competition rules, save-then-cover scope, plus the NIHL and Hockey Canada source refreshes. Brief: `sw/brief.md`.

- **Authors:** s2 equipment and conditioning; s3 rules_primer; s6 faceoffs, center and uk_rules; s7 defending_the_rush, special_teams and neutral_zone_systems; s8 puck_handling, on_ice_communication, language_and_glossary and rink_map; s9 winger, defender, breakouts, defensive_zone_coverage and zone_entries.
- **Held back:** goaltender (s1). Four review rounds have each found further copies of the save-then-cover claim, so it ships in its own commit after a clean read.
- **Review:** every author pair had an independent reviewer (s2R, s3R, s6R, s7R, s8R, s9R). The fixes then had second and third passes (swR2a, swR2b, s3R2, swR3, s3R3). The last passes found no CRITICAL or MAJOR, and their minors were applied by the coordinator in the reviewers' wording.

## Corrections found by review

- **on_ice_communication :186 (MAJOR, s8R).** The rewrite generalised USAH 601(c)(10) to every shot out of play. That rule excludes a shot toward a spectator, which is a game misconduct under 601(d)(9), and a match under the Note to 601(d) if reckless. It now carries the full ladder, including shots toward an official. Facts :143 now reads "a misconduct or worse".
- **defensive_zone_coverage :577 (MAJOR, s9R).** The rewrite opened on IIHF 101.1's "'bodychecking' is allowed" (cut before its own exception) and never said the WNIHL is non-checking. It now leads with the "sole object" limit and ends "The WNIHL is non-checking at U16 and senior level."
- **puck_handling :317/:292 (MAJOR, swR2a).** "In every book a kick means a deliberate one" dropped USAH 627(b)'s third limb: a kick that recklessly endangers an opponent is a match penalty even when aimed at the puck. Added to the body and the facts line.
- **rules_primer (MAJOR, s3R).**
  - :853: "USA Hockey allows a cover only under pressure" was wrong both ways. It now gives the privileged-area and behind-the-goal-line limits, the delayed-penalty exception and the Situation 6 and 9 minors.
  - :767 (MAJOR, s3R2): moving the PWHL clause made "the same number" point at 71.4. It now names IIHF 69.4.
  - Also: :142 Varsity OT is sourced to the In-House BUIHA section; :1016/:1041 Elite League overtime per Casebook 84.1; :1107 HC 6.2(e) and 6.5 mandatory limbs; PWHL taken out of the 🇬🇧 block; :1039 centre-ice exception (USAH 613(a)).
- **conditioning_and_recovery (MAJOR, s2R).** The 21-day competition floor is now scoped by the guidance's own exception (Enhanced Care pathways, ukcg.txt:615-619), not by "grassroots". The Key focus splits the competition and training floors so the "unless" cannot carry over to training.
- **equipment :173 (MAJOR, s2R).** In-House Rule 102 (half visor only from 18) now follows the competition-regulation sentence and is scoped to "domestic competition".
- **faceoffs.** Header :10 (moving early is a violation that re-drops), :784 (icing first-violation exception), :875 (IIHF 2026/27 replacement, late-to-dot warning, Situation 81.18), CM :1222 (CARHA injury ejection). The IIHF icing carve-out now carries the 81.18 limit at facts :1071 and callout :969.
- **uk_rules :35.** The IIHF 101.1 "sole object" condition is restored, and the WNIHL is stated as non-checking.
- **special_teams.**
  - :785 and :1060: the USAH save-then-cover is limited to a cover made at once (Situation 9), and the HC position is "unsettled, so have him play it".
  - Facts :626: 1-1-2 prevalence is now disclosed as unconfirmed.
  - EIHL bronze-medal game named from Casebook clause (5).
- **Minor fixes, by page.**
  - breakouts :1125: "also excuses it outside the crease".
  - language_and_glossary :319 and on_ice facts :404: "In Britain outside the Elite League".
  - on_ice :517: save-then-cover scoped to the note's out-front case.
  - puck_handling :317: wording aligned with passing_and_receiving.

check_marker_pairs: 1 LOST, in the equipment Notes paragraph ("Whether the neck-guard mandate reaches practice was settled…"). It is a verification note the renderer does not voice, so the loss was intentional (s2, E11). Every other file: 0 LOST, 0 SPLIT.

## Files in this commit (`git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/language_and_glossary.md | +2/−2 |
| content/foundation/on_ice_communication.md | +9/−9 |
| content/foundation/rink_map.md | +1/−1 |
| content/foundation/rules_primer.md | +19/−19 |
| content/foundation/uk_rules.md | +3/−3 |
| content/off-the-ice/conditioning_and_recovery.md | +5/−5 |
| content/off-the-ice/equipment.md | +10/−10 |
| content/positions/center.md | +1/−1 |
| content/positions/defender.md | +3/−3 |
| content/positions/winger.md | +2/−2 |
| content/systems/breakouts.md | +4/−4 |
| content/systems/defending_the_rush.md | +5/−5 |
| content/systems/defensive_zone_coverage.md | +1/−1 |
| content/systems/faceoffs.md | +12/−11 |
| content/systems/neutral_zone_systems.md | +6/−4 |
| content/systems/special_teams.md | +8/−8 |
| content/systems/zone_entries.md | +1/−1 |
| content/technique/puck_handling.md | +4/−4 |
| sources/README.md | +35/−6 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier on rules_primer and goaltender; safety-reviewers with a rules lens on every other pair; every MAJOR fix re-reviewed |
| D2 exceptions | USAH 601(c)(10) carve-outs; 627(b) reckless limb; 614 Situations 5–13; Enhanced Care; IIHF 81.18 |
| D3 divergence | per-book tiers stated (kicking, goalie cover, faceoff second violation, overtime formats) |
| D4/D5 citations | quotations checked by reviewers against sources/; no character changed inside quote marks |
| D6 negatives | "no book…" claims attacked (goalie cover behind the line; CARHA trapezoid; EIHL Rule 76) |
| D7 cardinal rule | no coaching choice stated as law; prevalence disclosed (1-1-2) |
| D8 numeric ownership | 602(a) is not added beyond the cap; 32(d) is stated once per layer |
| D9 summary layer | a layer test per repaired claim in each file |
| D10 facts | check_facts passes; edited lines are within their caps |
| D11 safety | every file CLEAR or MINOR at the final pass |
| D12 read-aloud | every changed unit rendered and heard alone by its reviewer |
| D13 folklore | out of scope |
| D14 structure | no headings changed; links pass |
| D15 site | full build after the final edit; --bare 0; --panels 0. The browser check of the edited table cell (rules_primer :1041) is deferred to the site-reviewer row (OPEN_ITEMS "Site-reviewer pass due", which names it) |

## Gates (after the final edit, no pipes)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- The build passed, and its check:links step passed.

## What this method could not have found

- **Sibling copies of the same claims.**
  - USAH 601(d)(9) spectator limb in other pages.
  - HC goalie-freeze tension without the 10.2 goaltender paragraph in about 10 pages.
  - CARHA 74(b).
  - Kicking claims worded without "kick".
  
  All are plan rows.
- **The EIHL Casebook on disk may be out of date.** It is updated in-season by email.
- **Goaltender is not in this commit.**

## After the first commit gate (BLOCK on C10)

- The browser deferral is now written into the plan's site-reviewer row.
- Two gate notes were applied: puck_handling facts :292 now reads "(a puck kick that endangers him too)", and the rules_primer overtime cell now reads "knockouts play sudden-death overtime" (EIHL 84.1: only the finals repeat 20-minute periods).
- The site was rebuilt after these edits.
