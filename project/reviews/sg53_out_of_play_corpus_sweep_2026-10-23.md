# SG53: the out-of-play minor swept across the remaining pages (23 October 2026)

This round follows SG52. It covers the SG52 gate follow-ons and the other pages that cite HC 10.1(v) or CARHA 55(a) (18 carriers in total, 9 of them edited across SG52 and SG53).

**Carriers read by the two sweep agents and left unedited, with their verdicts:**
- rink_map :316: correct.
- puck_support_and_spacing: no statement of the out-of-play minor.
- switching_positions :314–317, :327: judged correct. ⚠️ The commit gate later found that :317 (facts) omits CARHA's goalie limb ("names the goalie alone"). That is now a plan row.
- defensive_zone_coverage :778, :825–842, KT11: correct.
- faceoffs :158, :191: bench carve-out only, correct.
- neutral_zone_systems and offensive_zone_play: trapezoid only, a different act.
- body_contact_and_battles: freeze and fall-on limbs, a different act.
- puck_handling :20, :855, :860, KT13: scoped, correct.

risk_management was covered in SG52.

## What changed (claim: the delay-of-game minor for putting the puck out of play, wherever it appears)

- **Scope added to facts lines that voiced alone as universal:**
  - on_ice_communication :142, defender :77 and playing_without_the_puck :350 now say "Under the NHL, IIHF and PWHL".
  - "Whether or not you meant it" is false for a USA Hockey, Hockey Canada or CARHA skater.
- **rules_primer**
  - :545 "safe only if it was an accident" gains "unless you are a goalie under Hockey Canada or CARHA". It also adds the IIHF kick: Situation Handbook 63.19 and 63.34 give the minor for a defender's kick over the glass, where the NHL rule text says "hand or stick".
  - :551 gives separate HC and CARHA quotations (only HC has "directly"). "Do not reach a skater's accidental clear at all" became "do not penalise", because HC 6.4(a) costs a Junior or Senior team its line change.
- **game_management**
  - :112 was "USA Hockey writes no such minor". It is now "In play, USA Hockey penalises only a deliberate shoot-out, by a skater or a goalie (610(c))", plus "After the whistle, shooting it out can be a misconduct (601(c)(10))".
  - :113 was "Hockey Canada penalises no skater … names the goalie alone", which was false and permissive. It now merges HC and CARHA: in play, a skater is penalised only for a deliberate shoot-out (10.1(ii), 75(b)), and the goalie limbs 10.1(v) and 55(a) have no intent word, so a goalie "should not count on an accidental stick clear being free".
  - :137 "only three things escape it" was a false closed list. It now lists the three carve-outs; a deflection is not a shot; IIHF 63.29 spares a goalie's stick save; IIHF 63.34 makes a kick from your own zone the minor.
  - :143 adds CARHA, the goalie hedge and HC 6.4(a)'s line change.
- **special_teams**
  - :761 adds CARHA and HC 6.4(a). "Costs only possession" became "costs no penalty".
  - :990 is reworded so a goalie's stick clear under HC 10.1(v)/CARHA 55(a) "has no intent word, so expect the minor".
  - :992 drops "directly" for CARHA.
- **breakouts**
  - :530 has the same "expect the minor" hedge (was "a minor anywhere", settled).
  - :559 adds CARHA 75(b).
  - :561 and :933 use the intent hedge.
  - Sources: Rule 5.1 for the NHL, IIHF and PWHL, and a PWHL Rule 65.2 entry ((i), (ii), (iii) with NOTE, (vi), (viii), verbatim).
- **goaltender**
  - :1638 now carries the CARHA no-intent-word clause and "do not count on Hockey Canada's needing one either".
  - "A stick save … is not a clear" is scoped to the IIHF (63.29).

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules (C4) | rules-verifier, ×2 | **Pass 1:** no claim contradicted dangerously. Findings: the kick was cheaper than the IIHF; the closed list at :137 was false; HC intent was stated as settled at special_teams :990 and breakouts :530. Recommendations: PWHL 65.2 in the trailer. All applied. **Pass 2:** every repaired claim VERIFIED with quotes (NHL, IIHF and both Situation Handbooks, PWHL, USAH 610/631/601, HC 10.1/6.4/Glossary, CARHA 55/75). Two "incomplete in the cheaper direction" nits (rules_primer :551 "at all", special_teams :761 "only possession") were fixed by the coordinator as worded in the finding. |
| Safety (C6) | safety-reviewer, ×2, with md_to_speech renders | **Pass 1:** CLEAR, with one major (the game_management :113 facts lacked CARHA's goalie limb) and three minors (an ungrammatical :990, a book-wide "only" after the whistle, the CARHA "directly" quotation). All applied. **Pass 2:** CLEAR, with one minor ("so assume it counts" unclear voiced alone). Replaced with its sketch, "so expect the minor" (+0 chars). |
| Mechanical | coordinator | Full npm build exit 0 after the last content edit. check_facts, check_absolutes, check_secrets, check_counts and check_links all exit 0. check_marker_pairs on 8 files: 0 lost, 0 split halves. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the rules-verifier ×2 |
| D4–D5 citations | Checked: PWHL 65.2 and Rule 5.1 quotations verified character-for-character |
| D6 negative existence | Checked: "write no defending-zone limb" swept in USAH, its Casebook, HC and CARHA |
| D7, D8, D13 | Out of scope (no coaching or numeric claim) |
| D9 summary layer | Checked: the claim was layer-tested within each of the 8 files |
| D10 facts | Checked: caps within limits; facts read voiced alone |
| D11 safety | Checked by the safety-reviewer ×2 |
| D12 read-aloud | Checked: rendered by the safety-reviewer (game_management, special_teams, breakouts and others) |
| D14 structure | check_links |
| D15 site | Build passes |

## What this method could not have found

- There is no NHL or PWHL casebook on disk, so the kick and stick-save positions are IIHF-only rulings.
- Hockey Canada's goalie intent is unsettled in the book itself.
- Wordings of the act outside the searched vocabulary.
- risk_management :383's handling of the deliberate kick for USAH, HC and CARHA. That is a plan row, harsher direction.
