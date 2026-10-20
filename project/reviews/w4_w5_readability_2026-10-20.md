# W4 and W5 (20 October 2026): readability pages 25–39, plus three cross-page sweep files

This commit completes the owner's readability programme: every one of the 39 pages has now had a pass. It also ships three files from the SW cross-page sweep (Body Contact, Game Management, Offensive Zone Play) whose reviews cleared.

Agents:
- **W4** (ya–yh, brief `w4/brief.md`): shooting, passing_and_receiving, getting_started, team_play_and_culture, switching_positions, mental_game, risk_management, time_and_space.
- **W5** (za–zc, brief `w5/brief.md`): how_to_watch_hockey, reading_ice_hockey_diagrams, skating, practice_and_development, scanning_and_anticipation, puck_support_and_spacing, core_principles.
- **SW sweep** (s4, s5, brief `sw/brief.md`): body_contact_and_battles, game_management, offensive_zone_play.

Every W4 page had its own safety-reviewer with a rules lens. Pages with MAJOR findings were re-reviewed after the fix. The seven W5 pages had one combined reviewer (zS). The two sweep pairs had s4R and s5R.

## Corrections found by review

**W4**
- **time_and_space.** CRITICAL, pre-existing: no facts line and no KT priced goalie contact as more than the goal or a minor. Added:
  - a `Rule:` facts line: "contact can be a penalty in every book, and a charge can end your game in each; it always does under Hockey Canada (8.5(b)), under CARHA in the crease or on injury, with at least a one-game ban (52(b), 30(a), 32(d)), and under USA Hockey if reckless (607(b))", in the yhS2 reviewer's wording;
  - a new KT11, "Stay off the goalie".
  
  MINORs: KT10 "skates off its red line"; KT6 "hold your line"; CARHA 32(d) on the slap-shot major.
- **switching_positions.**
  - MAJOR introduced by the split: the checking gate had gone from every KT. KT7 now says "find out whether yours allows it", and KT8 says "do not hit him, whatever your league".
  - MAJOR, pre-existing: CM lacked HC "harsher of" for head-first. Added per the 18 Oct ruling: head-first into the boards takes the harsher of 7.5 and 7.6.
  - yeS2 minors: "every other book, and in USA Hockey's too"; "Either major brings at least a one-game suspension (32(d))"; IIHF added to "harsher of Rule 43 and Rule 48" per the 19 Oct ruling.
  - Not applied: adding the 602(a) suspension at :290/:570. The document already carries it twice, which is the cap.
- **mental_game.**
  - MAJOR: KT11 said only a hand on an official brings a suspension. Spitting, a threat or a hand on an official can all bring one (NHL/PWHL 40.3/40.4; USAH 601(e); HC 11.3(c)/11.5(c)).
  - MAJOR: CM "Arguing with officials" never mentioned a hand on an official. It now opens "never put a hand on an official".
  - MINORs: KT9 "head up and out of the lane"; §10 "Under the IIHF, resisting a linesperson…".
- **team_play_and_culture.** MAJOR, pre-existing: board-banging was presented as legal applause. NHL/PWHL/IIHF 39.2 make it a minor "at any time"; USAH 601(b)(5) a bench minor for cheering a hit; 601(d)(3) a game misconduct at a call. Rewritten, with "Never bang the boards at a call, or to cheer a hit." MINORs: KT11 "here"; KT4 and CM scope aligned.
- **risk_management.** MAJOR: KT11 lost "pull up" ("pull up and play the puck"). MINORs: KT5 "a deliberate clear out of play"; 32(d) at body :323 and facts :752.
- **getting_started.** CLEAR. Minors applied:
  - KT14 "After a head injury, red flags mean an ambulance… Whatever the signs, do not remove the helmet";
  - KT11 "In Britain, protect the face";
  - KT13 antecedent;
  - used gear "bought, borrowed or handed down", plus mouthguards.
- **shooting.** CLEAR. Minors: the CARHA 53(b) match now carries 34(a) in the body and CM, and the trailer is corrected; the CARHA slap shot is "any backswing past fifteen inches".
- **passing_and_receiving.** The author corrected HC 7.1(c)(iii)/CARHA 48(c): an attempt to kick needs no intent. The reviewer then noted that every book defines a kick as deliberate. KT15 and CM now say so, and 32(d) is added to the CM high stick.

**W5 (zS: CLEAR, four minors, applied by the coordinator in the reviewer's wording)**
- core_principles: CARHA 53(b) "in a way that leaves them unable to protect themselves" (it was "so that", which can be heard as intent), at both sites. KT11 grammar.
- practice: KT12 "the mask hit itself".
- scanning: "CARHA's book adds at least a one-game suspension".
- Plan rows found already fixed: skating "stick blade", practice concussion pointer, how_to_watch :733, puck_support slash.

**SW sweep**
- **body_contact_and_battles (s4R: CLEAR):**
  - kneeing :596: HC 7.8 is contact with the opponent's knee;
  - :1404 "whichever of that and head contact costs more";
  - four stale "four books" frames fixed;
  - :1462 scoped to EIH/SIHA (In-House §4);
  - CARHA 30(a)/32(d) facts;
  - the coordinator applied s4R's two minors: :88 restores "though not at the head or from behind into the boards or net" (the first version of this repair dropped "or net"; the commit gate blocked it against CARHA 53(b) "into the boards or goal net"), and :626 kneeing is "wider than the NHL, IIHF, PWHL and USA Hockey wording".
- **game_management and offensive_zone_play (s5R: CLEAR):**
  - 32(d) added to the GM facts;
  - trailers corrected to six books;
  - "five-man setup" renamed;
  - OZP save-then-cover scoped to out front, never behind the goal line;
  - the coordinator applied s5R's minor: facts :818 "Under USA Hockey when pressured".

Rules re-verified at source across these passes:
- CARHA 30, 32, 34, 46, 48, 49, 50, 52, 53, 54, 56, 57, 58, 61, 62, 66, 79, 80, 81, 86, 87
- HC 4.8, 6.18, 7.1, 7.3–7.8, 8.3, 8.5, 9.2, 10.2, 11.1–11.5
- USAH 404, 602, 604, 607, 608, 609, 613, 614, 615, 623, 625, 627, 628, 634, 637, 639, 640, plus the Casebook
- NHL, PWHL and IIHF 21.1, 39, 40, 42, 43, 48, 49, 50, 56, 61, 63, 67, 69, 81.4, 101.1
- In-House 9.12, 102 and §4; EIHL Casebook; IHUK RoCs; CRT6 (rendered); ukcg

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/core_principles.md | +7/−7 |
| content/getting-started/getting_started.md | +22/−20 |
| content/hockey-iq/puck_support_and_spacing.md | +3/−3 |
| content/hockey-iq/risk_management.md | +22/−22 |
| content/hockey-iq/scanning_and_anticipation.md | +4/−4 |
| content/hockey-iq/time_and_space.md | +19/−17 |
| content/off-the-ice/how_to_watch_hockey.md | +3/−3 |
| content/off-the-ice/mental_game.md | +17/−17 |
| content/off-the-ice/practice_and_development.md | +3/−3 |
| content/off-the-ice/team_play_and_culture.md | +15/−15 |
| content/positions/switching_positions.md | +28/−25 |
| content/reading-diagrams/reading_ice_hockey_diagrams.md | +2/−2 |
| content/systems/game_management.md | +2/−2 |
| content/systems/offensive_zone_play.md | +9/−9 |
| content/technique/body_contact_and_battles.md | +13/−13 |
| content/technique/passing_and_receiving.md | +6/−6 |
| content/technique/shooting.md | +11/−11 |
| content/technique/skating.md | +4/−4 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | a safety-reviewer with a rules lens on every page; re-reviews for MAJOR fixes (yhS2, yeS2) |
| D2 exceptions | USAH 607(d) Note 1; HC 7.6 Interp 2; CARHA 32(d) limits; 601(c)(10) carve-outs |
| D3 divergence | per-book tiers stated for goalie contact, officials, board-banging and kicking |
| D4/D5 citations | no character changed inside quotation marks; CRT6 rendered; quotations checked by reviewers |
| D6 negatives | "no book…" claims tested (kicking, IIHF/In-House match) |
| D7 cardinal rule | KTs lead with the instruction; "ask your coach" kept |
| D8 numeric ownership | 602(a) suspension ≤2 per document, checked |
| D9 summary layer | layer tests for goalie contact (time_and_space), checking gate (switching), officials (mental_game) |
| D10 facts | facts edited in time_and_space, risk_management, puck_support, body_contact and game_management; check_facts passes |
| D11 safety | every page CLEAR after fixes |
| D12 read-aloud | every page rendered by its author and its reviewer; KTs and CM heard alone |
| D13 folklore | out of scope |
| D14 structure | no headings changed; links pass |
| D15 site | full build after the final edit; --bare 0; --panels 0. The browser look of new list items is deferred to the site-reviewer row |

## Gates (no pipes, after the final edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 18 files, 0 LOST, 0 SPLIT.

## What this method could not have found

- **Sibling documents.** Rows added for: Situation 63.1 / HC 10.2(a) save-then-cover; the spectator limb of 601(d)(9); the "five-man" caption.
- **Sweep files still under review.** goaltender, equipment, conditioning, faceoffs, center, uk_rules, rules_primer, defending_the_rush, special_teams, neutral_zone_systems, puck_handling, on_ice_communication, language_and_glossary, rink_map, winger, defender, breakouts, defensive_zone_coverage and zone_entries are not in this commit.
