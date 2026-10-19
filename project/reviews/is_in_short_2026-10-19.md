# IS (19 October 2026): "In short" section summaries, plus Essentials safety fixes

Readability programme item 10, approved by the owner on 19 Oct 2026. The site convention shipped in a91aeef: the first block under a long `##` or `###` heading is a one-sentence `**In short:**` line, shown in the Essentials view and voiced right after the heading. The brief is in the session scratchpad at is/brief.md.

## What was written

**447 In-short lines (count re-confirmed after the rules-verification repairs) across all 39 documents**, about 30 of them moved from an existing opening sentence.

**Rules for each line:**
- one sentence, 25 words or fewer, no ⚠️, placed directly under its heading;
- only what the section says;
- the instruction, not a tariff;
- every qualifier and scope kept;
- a coaching choice stays marked as a choice.

Ten author agents worked on disjoint files.

| Document | In-short lines added (per `git diff HEAD`) |
|---|---|
| foundation/core_principles.md | 7 |
| foundation/language_and_glossary.md | 1 |
| foundation/on_ice_communication.md | 11 |
| foundation/rink_map.md | 8 |
| foundation/rules_primer.md | 28 |
| foundation/uk_rules.md | 11 |
| getting-started/getting_started.md | 8 |
| hockey-iq/playing_without_the_puck.md | 7 |
| hockey-iq/puck_support_and_spacing.md | 3 |
| hockey-iq/risk_management.md | 13 |
| hockey-iq/scanning_and_anticipation.md | 6 |
| hockey-iq/time_and_space.md | 7 |
| off-the-ice/conditioning_and_recovery.md | 8 |
| off-the-ice/equipment.md | 18 |
| off-the-ice/how_to_watch_hockey.md | 7 |
| off-the-ice/mental_game.md | 7 |
| off-the-ice/practice_and_development.md | 2 |
| off-the-ice/team_play_and_culture.md | 10 |
| positions/center.md | 12 |
| positions/defender.md | 8 |
| positions/goaltender.md | 30 |
| positions/switching_positions.md | 8 |
| positions/winger.md | 12 |
| reading-diagrams/reading_ice_hockey_diagrams.md | 3 |
| systems/breakouts.md | 17 |
| systems/defending_the_rush.md | 14 |
| systems/defensive_zone_coverage.md | 11 |
| systems/faceoffs.md | 17 |
| systems/forechecking_systems.md | 20 |
| systems/game_management.md | 21 |
| systems/neutral_zone_systems.md | 12 |
| systems/offensive_zone_play.md | 15 |
| systems/special_teams.md | 5 |
| systems/zone_entries.md | 12 |
| technique/body_contact_and_battles.md | 39 |
| technique/passing_and_receiving.md | 4 |
| technique/puck_handling.md | 7 |
| technique/shooting.md | 14 |
| technique/skating.md | 4 |

## Essentials safety audit (alongside)

A safety-reviewer read every document's Key focus and Key Takeaways at HEAD and asked whether a reader of the Essentials view alone would miss an ejection- or injury-level consequence. Result: **35 documents OK, 4 with gaps, all fixed:**
- **defender (Key focus and KT3) and goaltender (KT12):** "Move any body toward the corner" had lost its qualifier. Heard alone, it told a player to push a parked screener, which is interference. It now reads "If a battle moves a body there, take it toward the corner…".
- **rules_primer KT4:** fighting and the punch were missing. It now says "Never throw a punch, gloved or not: under USA Hockey one thrown at an opponent is fighting, which may be called with the gloves still on, and ends your game" (615 Note; Casebook 615 Sit. 5).
- **equipment KT2:** helmet fit was missing. It now says "Fit the helmet so it moves with your skull, not on it, and size the cage separately…".
- **rules_primer KT10:** "wear your neck guard every shift" (In-House 9.12).

## Review

Four reviewers each read every line in their file group against its full section: two safety-reviewers, one content-reviewer, and one safety-reviewer on rules_primer, game_management, glossary and practice. **No CRITICALs.**

**First pass, by file group:**

| Group | MAJORs | Minors |
|---|---|---|
| technique and positions | 4 | about 12 |
| systems | 5 | 12 |
| hockey IQ, foundation, off the ice | 6 | 8 |
| rules_primer and related | 3 | 9 |

**Almost every finding had the same shape: a summary heard alone drops a limit its section keeps.**

**MAJORs (all fixed):**
- **Checking lines with no scope.** Three body_contact lines now start "Where checking is allowed". The rescan then scoped four more (inside lane, net front, box-out, body position) for Hockey Canada and CARHA.
- **Concussion and injury lines softer than their sections.**
  - body_contact and getting_started now say "no return that day", an ambulance for any red flag, and medical clearance.
  - team_play's injured-player line now carries the airway exception and the ambulance.
  - mental_game's crisis line now says "get help now".
- **equipment Certification.** "check its date on any hand-me-down" read as permission to wear a second-hand helmet. It now says never; the body sentence was reconciled to match.
- **center, handling the puck.** The line licensed handling it at a live draw. It now says "keep your hand off until a third player touches it" (NHL 67.2 Note).
- **uk_rules, fighting.** "In some British competitions" became "under every British rule book, fighting back can still be penalised". This was checked against IIHF 2025/26 46.6, IIHF 2026/27 46.12, the EIHL Casebook and the In-House Rules.
- **forechecking trapezoid.** "Their goalie must not fetch it" became "…usually has to fetch it; expect their goalie anyway".
- **defending_the_rush puck-first relief.** It now says the relief is narrow and differs by book. The coordinator's sketch was rejected as false for USAH, HC and CARHA.
- **zone_entries curl-back.** It now says "in open ice, never against the wall".
- **offensive_zone_play F1/F2/F3.** It is now marked as the common attack triangle, a coaching choice.
- **faceoffs.** A moved remainder whose "that" bound to the wrong rule now restates its antecedent.
- **rules_primer Body fouls.** It now leads with "First find out whether you may hit at all".
- **game_management.**
  - The line-change claim "safest under every book" is gone; USAH 204(b) and Casebook Sit. 8 contradict it.
  - "When a penalty is worth taking" now says "keep it a minor".
  - risk_management now adds "never by hauling a breakaway down from behind".
- **time_and_space screen.** It now says "without contact, skates off the crease line".
- **goaltender net front.** It now says "not by moving the screener; if a battle moves a body, take it to the corner".
- **Leaving by another exit (game_management, rules_primer, team_play).** The claim "Hockey Canada writes no penalty" was wrong in the permissive direction: HC 6.1(a), priced as too many players at 10.7(a), applies once you are replaced, and so do CARHA 19(b)/(e) and USAH Casebook 630 Sit. 12. A "Never:" facts label that voiced the instruction reversed was also fixed, and team_play's "injured player must leave via the bench" is now scoped to a player leaving to be replaced.

**Re-review of every changed line: CLEAR in all four groups,** plus a final CLEAR on the bench-exit repairs.

## Rules verification (after the commit gate's C4 block)

The first commit gate BLOCKED on C4: no rules-verifier covered the new penalty-bearing text. **Three rules-verifiers then checked the 212 In-short lines that state a rule, penalty or permission**, split as technique/positions 63, systems 62, and foundation/IQ/off-ice 87. They also checked the Essentials and bench-exit repairs. Each line was checked by act against every book (hc.txt, not the superseded print).

**Result: no MAJOR. Nine MINORs, all applied:**
- **neutral_zone :48:** CARHA blue-line icing (Rule 65). The line now says the red line is the icing line "except in some CARHA leagues".
- **game_management :319:** the screen line now says "from outside the crease" (NHL 69.1, USAH 625(b)).
- **game_management facts under :191:** the citation was "82.1". The author refuted the verifier: 82.1 does carry the ban, word for word. 81.4 was added beside it.
- **game_management :671:** CARHA 19(b) added.
- **faceoffs :270:** "while playing it", since contact after the drop is allowed only in the course of playing the puck.
- **defender :859:** the slide now carries "under USA Hockey sliding an opponent down is tripping". It is scoped to USAH because HC and CARHA give the puck-first exception. The coordinator's unscoped sketch was rejected.
- **goaltender :640:** "Under USA Hockey, Hockey Canada and CARHA, the ice behind your net is yours", because the PWHL has no trapezoid but 65.2(viii) still bites.
- **body_contact :445:** "never lean" now applies to everyone (IIHF 101.1, NHL 56.1).
- **shooting :273:** "below the crossbar".
- **rules_primer :857 and the body bullet :864:**
  - goalie to the bench at a stoppage "unless replaced; some books allow it with permission";
  - the body now cites NHL 27.6, IIHF 27.5, PWHL 27.6 and USAH 205(c) for permission, and HC 10.1 xiv and CARHA 47(c) Note for replacement only.
- **rules_primer :42:** "in the Elite League, its own Casebook overrides them where they differ" (EIHL Casebook :206).
- **rules_primer :201:** the quotation is attributed to NHL 83.3, "(IIHF 83.3 to the same effect)".

**Confirmed:** the Essentials fixes (defender, goaltender KT12, rules_primer KT4 and KT10, equipment KT2), uk_rules :299 fighting, and the bench-exit repair across all six books. The day-21 line was confirmed against ukcg.txt. The concussion lines are stricter than UK grassroots guidance, which errs safe.

**New plan row:** neutral_zone_systems :51 says HC requires skate contact. HC Note 1 says "in physical contact with, or on their own side of", so this needs its own pass.

A gate also disclosed that its own HC checks in S2, S5 and T2 used the superseded print. It re-verified all 13 strings in hc.txt, and they hold.

## Coordinator errors this round

- Three wording sketches were rejected by authors because they were false against the source:
  - the dtr puck-first relief;
  - "in no book may your goalie leave the crease";
  - a centre "keep your hand off it entirely".
- A reviewer briefed against hc_2026-08-print (superseded) missed HC 6.1(a). Briefs must name hc.txt.
- The isI author's USAH-casebook false negative was a routing miss (630 Sit. 12 sits in the offside chapter).

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier ×3 on all 212 rule-bearing In-short lines, by act across all books (after the C4 block). Every penalty-bearing line was read against its section; rules newly cited in repairs were verified at source (USAH 204(b)/Casebook 204 Sit. 8, 615 Note/Casebook Sit. 5, Casebook 630 Sit. 12; HC 6.1(a), 10.7(a), 8.8 Interp. 1; CARHA 19(b)/(e); NHL 67.2 Note, 74.1, 8.1; IIHF 46.6/46.12; In-House 9.12) |
| D2 exceptions | The main finding class: dropped qualifiers restored |
| D3 divergence | Book-specific limits kept or scoped (HC/CARHA lanes, USAH-only lines) |
| D4/D5 citations | No quotation altered; moved sentences unchanged apart from bold removal |
| D6 negatives | "Hockey Canada writes no penalty" tested and corrected |
| D7 cardinal rule | Coaching choices marked (attack triangle, 2-on-1 slide, this guide's standard) |
| D8 numeric ownership | Figures only as stated in the section (3.3–4.2% possession, about 3 seconds, day 21) |
| D9 summary layer | The In-short is a new summary layer; Essentials KTs were audited |
| D10 facts | Facts lines touched by repairs stay within cap; check_facts passes |
| D11 safety | Three safety-reviewers plus the Essentials audit; every concussion, neck, airway and crisis line matches its section's force |
| D12 read-aloud | Moved remainders were checked for antecedents; one SSML trace (faceoffs); the label-voicing check found the "Never:" inversion |
| D13 folklore | Out of scope |
| D14 structure | One heading added (rules_primer "When a fight breaks out"), not linked |
| D15 site | Full build after the final edit; In-short renders (centre 12/12); no misplacement warnings; --bare 0 |

## Gates (after the final content edit, no pipes)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts all pass.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF across all 39 files.

## Open (plan)

- game_management :671 facts could also name CARHA, which is in the body, if the cap allows.
- In-shorts echo nearby facts lines in some sections. check_layer_echo was not run.
- No audio pass yet on how "In short:" sounds before each facts block.

## What this method could not have found

- **Limits elsewhere in the document.** A qualifier the section states only once, deep and unmarked, or a limit that lives in a sibling document.
- **The Essentials view as a whole.** Interactions between In-shorts and the Key focus and Key Takeaways shown beside them.
- **Accuracy of the sections themselves.** An In-short faithful to a wrong section inherits the error.
