# OR (19 October 2026): the owner's 19 October rulings applied across the corpus, plus the re-triaged open rows

This round applied the owner's rulings of 19 October, recorded in the owner-rulings memory, to every document that prices the act:
1. **Hit from behind that reaches the head (IIHF, NHL, PWHL):** the harsher of Rule 43 and Rule 48. This supersedes the 15 October "keep Rule 43".
2. **CARHA:** "at least a one-game suspension" (32(d)) wherever a CARHA major is priced.
3. **EIH R&R 22.3 and 24.3:** their reach to Scotland and Northern Ireland is unsettled, so play strict: the trapezoid binds, and you wear the neck guard.
4. **USA Hockey 602(a):** add the likely multi-game suspension.
5. **Hockey Canada goalie hit from behind:** the harsher of 7.5 and 8.5.
6. **Hockey Canada sliding defender:** 8.6's puck-first exception, but plan on 8.7 for a low slide into the legs.
7. **PWHL:** a standing sixth book.

It also closed the re-triaged open rows that touched those documents.

Eight author agents worked on disjoint files (briefs in the session scratchpad, `or/`). Four rounds of review and repair followed.

## Review rounds

### Round 1 review: four rules-verifiers and one safety-reviewer
No CRITICAL findings.

**MAJORs:**
- **(safety) Wrong figure, repeated:** "6–10 games" was attached to matches the USA Hockey Standardized Discipline Policy prices at Level 2 (4–8: 603(c), 606(b), 607(e), 608(c), 619(b), 620(c), 634(d), 635(b)) or Level 3 (3–5) (usah.txt :1199-1254). It was repeated at more than 100 sites. That was both a wrong figure and clutter.
- **(safety) Concussion wording:** practice_and_development's "stop for the day".
- **(rules) England's trapezoid:** goaltender :1618, :611, :1768 and special_teams :1048 said flatly that "22.3 suspends the Restricted Area". That tells an England reader the trapezoid is off, which is permissive.
- **(rules) CARHA 32(d) misapplied:** it was applied to a match and to non-major ejections. A match falls under 34(a).
- **(rules) IIHF "never a minor":** the rules review graded "never a minor even to the head" a MAJOR for the IIHF, reading 43.3's "recklessly endangers" as leaving 48.2's minor live. **Round 3 found that this was itself wrong; see below.**

**MINORs:**
- USA Hockey 610(d)'s immediate-scoring-chance limb (game_management);
- the special_teams Hockey Canada head-hit limb;
- the Casebook 607 Situation 5 limits (time_and_space, rink_map);
- the puck_handling crease-cover split by book;
- HC 8.7(b) may/must;
- the kneeing row;
- the IHUK junior checking age;
- the faceoffs 78.8 provenance;
- and others.

### Fix round 1 and re-review (two rules-verifiers, one safety-reviewer)
The suspension clause was cut to the owner passages, with exact levels at rules_primer :388, body_contact :787/:803, goaltender :1259 and special_teams :1126. Elsewhere it reads "a likely multi-game suspension", at most twice per document. "Plan on a match" kept at every site (census: HEAD and tree counts equal).

The re-review found:
- uk_rules :256 "binds there", which was permissive for England;
- the concussion re-wording contradicting its owner's graded return (conditioning_and_recovery :324);
- remaining IIHF "never cheaper" sites.

### Fix round 2 and final checks
Concussion now matches its owner: "come off, do not return that day, do not play again until a medical professional clears you". skating KT11, which predates this round, was aligned with it by the coordinator.

The final rules check found the **IIHF Glossary, Vulnerable Position** (iihf_rules_2026-27.txt :8304): "A bodycheck to an opponent who is vulnerable is automatically considered reckless". With 43.1's definition, that made round 2's "short of reckless, 48.2's minor can apply" the **permissive** reading.

### Fix rounds 3 and 4
- **Round 3** restored the conservative reading.
- **Round 4** corrected its overreach:
  - The Glossary covers only "a skater … no longer in control or possession of the puck".
  - IIHF Situation 46.4 calls a carrier hit from behind boarding, and 41.2 keeps a minor there.
- **The settled formula:**
  - under the IIHF, "plan on the major and game misconduct — never plan on a minor";
  - the Glossary reason only for a skater without the puck, at most once per document;
  - "harsher of 43 and 48" for the NHL and PWHL only;
  - no 48.1 quotation in support of no-minor.
- **Coordinator edits:**
  - six "where the referee judges it reckless" sites in defending_the_rush, defensive_zone_coverage and forechecking_systems;
  - switching_positions :294;
  - risk_management :864;
  - passing :439/:471, two stray 6–10 sites;
  - defending_the_rush :609 "plan on it".
  All but the last were covered by the final check. The :609 edit came after it: three words, harsher, as asked.

**Final check (f4S, rules and safety combined): no CRITICAL, no MAJOR, no permissive IIHF site.** It verified "five of the six books end your game" for the defending_the_rush carrier sites:
- NHL and PWHL 43.3/43.5;
- USA Hockey Casebook 608 Situation 1;
- HC 7.5(a)/(e);
- CARHA 53(a).

Its seven harsh-direction MINORs are plan rows ("IIHF residuals from f4S").

## Commit gate BLOCK and fixes

The first commit gate BLOCKED on C4 at puck_handling :351. Round 3 had changed "five of the six books" to "all six", citing HC 4.11(a)(v). But HC 10.2(a)(v) ("occurs inside the offending team's goal crease") can reach a player in the crease with the puck outside it, and the same file's :341/:353 and defender :244 take that strict reading. The claim is restored to "five of the six; Hockey Canada writes it both ways round", and 4.11 is cited with its 10.2(a)(v) counterweight.

Also fixed from the gate:
- language_and_glossary :393: CARHA 30(a) Note/32(d) exempt every accidental high stick, not only one "that injures nobody";
- stale "in progress" plan labels;
- the superseded rvG2 IIHF row marked as such;
- the sentence above about the :609 edit.

A rules-verifier checked the two repaired sentences: **CLEAR**.
- NHL 63.6, IIHF 63.6, PWHL 65.6, CARHA 58(c)/61(c), HC 4.11(a)(v), 10.2(a)(iv)–(vi) with Interpretation 5, and USAH 614(b) with Casebook Situations 1, 2 and 4 support "five of the six; Hockey Canada writes it both ways round".
- CARHA 30(a) Note and 32(d) support the Glossary line.

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/language_and_glossary.md | +10/−10 |
| content/foundation/on_ice_communication.md | +18/−18 |
| content/foundation/rink_map.md | +6/−6 |
| content/foundation/rules_primer.md | +25/−21 |
| content/foundation/uk_rules.md | +12/−12 |
| content/getting-started/getting_started.md | +5/−5 |
| content/hockey-iq/playing_without_the_puck.md | +11/−11 |
| content/hockey-iq/puck_support_and_spacing.md | +5/−5 |
| content/hockey-iq/risk_management.md | +9/−8 |
| content/hockey-iq/scanning_and_anticipation.md | +4/−4 |
| content/hockey-iq/time_and_space.md | +7/−7 |
| content/off-the-ice/conditioning_and_recovery.md | +5/−5 |
| content/off-the-ice/equipment.md | +5/−5 |
| content/off-the-ice/how_to_watch_hockey.md | +1/−1 |
| content/off-the-ice/mental_game.md | +2/−2 |
| content/off-the-ice/practice_and_development.md | +3/−3 |
| content/off-the-ice/team_play_and_culture.md | +4/−4 |
| content/positions/center.md | +16/−17 |
| content/positions/defender.md | +13/−13 |
| content/positions/goaltender.md | +26/−26 |
| content/positions/switching_positions.md | +12/−14 |
| content/positions/winger.md | +9/−9 |
| content/systems/breakouts.md | +6/−6 |
| content/systems/defending_the_rush.md | +11/−11 |
| content/systems/defensive_zone_coverage.md | +12/−12 |
| content/systems/faceoffs.md | +23/−23 |
| content/systems/forechecking_systems.md | +10/−10 |
| content/systems/game_management.md | +12/−12 |
| content/systems/neutral_zone_systems.md | +4/−4 |
| content/systems/offensive_zone_play.md | +13/−13 |
| content/systems/special_teams.md | +16/−16 |
| content/systems/zone_entries.md | +9/−10 |
| content/technique/body_contact_and_battles.md | +40/−36 |
| content/technique/passing_and_receiving.md | +12/−12 |
| content/technique/puck_handling.md | +12/−12 |
| content/technique/shooting.md | +13/−13 |
| content/technique/skating.md | +3/−3 |

The three LOST markers check_marker_pairs reports (equipment ×2, mental_game ×1) are italic edition notes in the unvoiced trailer. They were confirmed unvoiced by an md_to_speech render.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | Four rules-verifiers on the first pass; two on the re-review; one final; f4S combined. Each claim checked by act against the books on disk (hc.txt, carha_2026, usah plus Casebook, nhl, pwhl, iihf v1.1 and 2026/27, plus the Situation Handbook, eih_rr, In-House, EIHL Casebook, IHUK RoCs) |
| D2 exceptions | 43.1 deliberate turn; 8.6 puck-first; Casebook 607 Situations 4/5; HC 4.11(a)(v) vs 10.2(a)(v); CARHA 32(c) Rule 46 |
| D3 divergence | PWHL 78.8 vs NHL 76.8; IIHF 43.1 "other penalties"; CARHA no vulnerable-position clause |
| D4/D5 citations | Every new quotation verified by an author and a reviewer |
| D6 negatives | "No British document touches 63.2(I)" corrected (IHUK U12); CARHA no clipping rule; EIHL Casebook no Rule 43/48 |
| D7 cardinal rule | Rulings applied as instructions ("plan on"), not as laws; board-posture demotion only in inherited layers (owner ruling of 23 Sep) |
| D8 numeric ownership | Suspension levels only in owner passages; "a likely multi-game suspension" elsewhere |
| D9 summary layer | Each claim fixed in every layer (KT, CM, facts, body); layer tests by the authors and the re-reviewers |
| D10 facts | check_facts passes; trims checked for dropped limbs by the reviewers |
| D11 safety | safety-reviewer on every round; concussion aligned with its owner; no permissive site at the final check |
| D12 read-aloud | md_to_speech renders of about 15 documents across rounds; KT, CM and facts heard alone |
| D13 folklore | Out of scope |
| D14 structure | No headings or anchors broken; check_links and the site check-links pass |
| D15 site | Full build after the final content edit (dist 22:21 vs last edit 22:17, after the gate fixes); --bare 0; --panels 0 |

## Gates (after the final content edit, no pipes)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 37 files, 3 LOST (unvoiced, above), 0 SPLIT HALF.

## What this method could not have found

- **Lexical sweeps miss paraphrases.** Every sweep keyed on phrases ("reckless", "43.x", "harsher", "6–10"). A price stated in other words would pass; one did, at defending_the_rush :609.
- **The IIHF's own reading is unsettled.** 48.1 "supersedes" against 43.2 "no option to award a minor", and the Glossary against a puck carrier: the books and the Situation Handbook do not settle either. The corpus states the conservative reading as "plan on".
- **Officiating practice** under the In-House Rules (§4 directs a cross-check to the head to be called cross-checking, not Rule 48) is not measured. It is a plan row.
