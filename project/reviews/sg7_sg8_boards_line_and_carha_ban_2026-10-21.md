# SG7 and SG8: the boards line, and the CARHA 32(d) and USA Hockey 404(b) next-game bans (21 October 2026)

**Origin.**
- **SG7.** The owner ruled on 21 Oct that in every layer voiced alone, the boards line reads **"never turn your back to anyone coming at you"** instead of "…the checker". Body text may keep "the checker" where it defines the term.
- **SG8.** The owner ruled on 19 Oct that a CARHA major carries "at least a one-game ban" under 32(d). sg6R then established that 32(d) triggers only on a game misconduct that comes with a MAJOR.

Nine agents worked under exclusive file ownership, to the brief in scratchpad `sg7_brief.md`. The coordinator's rulings for the fix rounds are in `sg7_fix_rules.md`.

## Brief defects refuted by agents

- **32(d) on a match.** The brief told agents to add 32(d) to a CARHA **match**. That is wrong. A CARHA match falls under 34(a): the player is barred "until their case has been dealt with by the Chairman". sg7i refuted it first, and four other agents refuted it independently. The coordinator corrected the brief mid-wave. No match site carries 32(d).
- **"The minor tier does not".** A new sentence said a CARHA 53(a) minor plus game misconduct carries no further cost. 32(b) reports any game misconduct to the Chairman. Now worded under R3.

## Rulings applied in the fix rounds (sg7_fix_rules.md)

- **R1.** No automatic ban is attached to an accidental high stick. 32(d) excludes "the Accidental High Stick Rule", even when the stick injures and the 62(b) Note adds a game misconduct. Where a page says the high stick escapes the ban, it cites 32(d). This reading is not settled; it is the best reading of the text.
- **R2.** USA Hockey 404(b) (usah.txt :2532–2540) suspends for the team's next game on any game misconduct, and every USA Hockey playing-rule major is a major plus game misconduct. So wherever a CARHA-only next-game clause sat beside a USA Hockey game misconduct, the clause now names both books, or the contrast is dropped. Hockey Canada has no general suspension, because 4.8(c) covers only the last 10 minutes and overtime, so it is not added.
- **R3.** No page claims that a CARHA minor plus game misconduct carries no further cost.

## Changes

All 25 files: core_principles, on_ice_communication, rules_primer, getting_started, playing_without_the_puck, puck_support_and_spacing, scanning_and_anticipation, time_and_space, conditioning_and_recovery, mental_game, center, defender, goaltender, switching_positions, winger, breakouts, defensive_zone_coverage, faceoffs, forechecking_systems, neutral_zone_systems, offensive_zone_play, special_teams, body_contact_and_battles, puck_handling, skating.

- **SG7.** About 150 sites now carry the new wording. These include Key focus, Overview, facts, Common Mistakes and Key Takeaways in every file that carried the line.
  - body_contact_and_battles is the owner document. It now defines the term: "Anyone means anyone: a player racing you to the puck as much as one coming to hit you, so it holds in a non-checking league too." Its §6 heading is renamed and its self-test references are updated.
  - "The checker" is left wherever it means the player delivering a hit.
- **SG8.**
  - **CARHA ban added.** CARHA majors priced as an ejection now carry "at least a one-game ban (32(d))", in body and summary layers. Facts lines with no room were left as they are, and their body text carries the ban.
  - **"Any CARHA major ejects" scoped.** The flat claim is now scoped to the named major, or given the accidental-high-stick exception.
  - **R2.** About 30 sites gained the USA Hockey 404(b) next-game clause.
- **Other corrections found along the way.**
  - **Puck Handling.** The defenceman note "retrievals with your back to pressure" contradicted the boards line. It now reads "with a forechecker behind you — shoulder-check, turn side-on early, and never meet the wall back-on to them", matching defender KT10.
  - **Forechecking :254/:267.** These pages said CARHA 52(a) charging was "a flat minor". It is a minor or, at the referee's discretion, a major.
  - **playing_without_the_puck :859.** The 53(a) "anywhere on the ice" quote is now attached to the offence, and "intentional" is restored.
  - **on_ice_communication :307.** CARHA 66(e) is mandatory on injury.
  - **goaltender :1197.** 66(e) is mandatory.
  - **"five-man" changed to "five-player"** in forechecking, neutral zone and defensive zone coverage.

## Reviews

- **First pass (fresh readers): sg7SA, sg7SB and sg7SC (safety-reviewer), and sg7R (rules-verifier).** None found a CRITICAL. They found:
  - **MAJOR**, the Puck Handling retrieval line.
  - **MAJOR**, the pwtp "minor tier does not".
  - **MAJOR**, the special_teams :1203 CARHA-only contrast. This was the 404(b) finding and became R2.
  - **MAJOR**, forechecking :1039 gave CARHA "your night" only, beside USA Hockey's next game.
  - **MAJOR**, forechecking :254 said CARHA 52(a) was a flat minor.
  - **Q1** (accidental high stick: winger and rules_primer contradicted each other). This became R1.
  - **About 20 MINORs**: flat bans, lost limbs ("keep the backswing short", "steps or strides"), "its" and "here" antecedents, "optional" for a discretionary rule, and "can make" for a mandatory rule.

  Every finding was fixed by the agent that owns the file.
- **Fix round, read by sg7S2 (safety-reviewer, fresh).** It found **2 MAJORs that the repairs themselves created**:
  - special_teams :1203: "in all three" pointed back at USA Hockey, the NHL and the IIHF, and dropped Hockey Canada.
  - winger KT8: an inserted ban clause made "so does" give Hockey Canada a ban.

  It also found 4 MINORs: puck_handling :491 R2; "those two" at four sites; uncited R1 exclusions in rules_primer; and goaltender :1246 "add" making a true line false. All were fixed. On re-read, sg7S2 returned **CLEAR** on every line.
- **What the reviewers upheld:**
  - No limb was lost from any facts line.
  - No ban is stated flat.
  - No 32(d) clause sits on a match, on a minor plus game misconduct, or on an accidental high stick.
  - Every 404(b) clause sits on a real USA Hockey game-misconduct outcome.
  - No marker was lost.

## Gates (after the final content edit, no pipe)

- check_facts, check_links, check_absolutes, check_geometry and check_secrets all pass.
- **check_marker_pairs:** 25 files, 0 LOST. Four SPLIT candidates were each read and are false positives: the unit was unmarked in HEAD, or a facts line shares text with a marked bullet. The candidates are scanning :559, special_teams :401 and two in faceoffs.
- **check_counts --update:** no change.
- **`npm run build`:** run after the final edit; see the commit-gate for the exit code and mtimes.

## Dimensions (D1–D15 per project/reviews/TEMPLATE.md)

| Dim | Status |
|---|---|
| D1 Rules accuracy | ✓ sg7R and the three safety reviewers quoted from disk: CARHA 2026 30(a), 32(b)–(d), 34(a), 49, 52, 53, 54, 62(b), 63, 66, 79(a), 80(a); USAH 403, 404(b), 602, 604, 607, 608, 609, 622, 625, 634 and the Summary of Penalties; HC 4.8(c), 7.4, 8.1, 8.3, 8.5; NHL 42, 56; IIHF 42.4, 56.5. |
| D2 Rules travelling without exceptions | ✓ The accidental-high-stick exclusion (R1). Match and minor-plus-game-misconduct exclusions. CARHA 52(a) discretionary major restored. |
| D3 Rule-set divergence | ✓ R2: USA Hockey's own next-game suspension is now stated beside CARHA's. Hockey Canada is correctly left out. |
| D4 Citation integrity | ✓ 32(d) and 404(b) are cited at each new clause. The 53(a) quote is re-anchored. |
| D5 Provenance | Out of scope: no external source. |
| D6 Negative existence claims | ✓ "The minor tier does not" was removed (R3). |
| D7 The cardinal rule | ✓ The changes are wording and tariffs. No coaching choice is made into a rule. |
| D8 Numeric ownership | Out of scope. |
| D9 The summary layer | ✓ Applied claim-wide across KF, Overview, facts, CM and KT. Two MAJORs from repairs to summary layers were caught and fixed. |
| D10 The key-facts layer | ✓ --near was checked before edits. Every reworded facts line was read voiced alone; sg7S2 rendered 16 documents. |
| D11 Reader safety | ✓ Five first-pass MAJORs and two repair MAJORs were all fixed. Final: CLEAR. |
| D12 Read-aloud integrity | ✓ Chunks were rendered for the changed KT, CM and facts lines. Antecedent fixes: "all three", "so does", "those two", "its", "here". |
| D13 Folklore | Out of scope. |
| D14 Structure, style, terminology, cross-links | ✓ check_links is clean. The renamed body_contact heading has no inbound links. "five-player". |
| D15 The rendered site | The build passed. The changes are prose only; no diagram or layout changed. The browser pass is deferred to the "Site-reviewer pass due" row. |

## Still open (rows in OPEN_ITEMS.md)

- **SG7 remainder:**
  - the diagram strings with the old wording;
  - zone_entries "oncoming checker" (6 sites) and its two captions;
  - special_teams :842 "five-man".
- **SG8 remainder:** facts lines with no room for the ban: center :485, OZP :927, FC :864, switching :250, OIC :282, pwtp :708/:713/:714, defender :124/:581, NZ :735, faceoffs :567, winger :102. Also winger KT8, which omits the 66(e) injury ban.
- **SG9:** the USA Hockey 404(b) census beyond the sites this wave touched.
- **Facts-antecedent nits:** OZP :360, FC :914.

## What this method could not have found

- A boards-line wording that uses none of "checker", "back to", "numbers", "hitter" or "spine".
- A CARHA major priced without CARHA named within about 300 characters, or a USA Hockey game misconduct priced several chunks away from a CARHA ban.
- A pronoun whose antecedent moved because a clause was inserted, and which left no odd lexical trace. M1 and M2 of the fix round were found only because the words were odd.
- Whether CARHA reads 32(d) as excluding an accidental high stick that injures. No casebook is on disk.
