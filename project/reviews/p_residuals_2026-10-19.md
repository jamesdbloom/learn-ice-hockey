# P (19 October 2026): residual consistency rows from the OR round

Four author agents worked on disjoint files (brief: session scratchpad `p/brief.md`). They took on the harsh-direction residuals from the OR round's final check (or_owner_rulings_2026-10-19.md, "IIHF residuals from f4S"), plus these plan rows:
- the EIH 22.3 scope wording;
- faceoffs :4-6;
- defender :337;
- goaltender :1246;
- uk_rules :104;
- the puck_support trailer.

## Changes

- **IIHF and puck carriers.** IIHF Situation 46.4 calls a carrier slammed into the boards from behind "a major penalty for boarding and game misconduct". So no page now states an IIHF ejection as flat fact for a carrier; it says "under the IIHF, plan on it". Sites:
  - defender :463, :488, CM :907;
  - winger :746;
  - forechecking :326, :653, :755, :882;
  - defending_the_rush :330, :356, :428, CM :1041, KT9 :1111;
  - body_contact Key focus :31 and KT6 (now "every book here but USA Hockey and the IIHF … under the IIHF, plan on it").
  "None of the six asks whether he had the puck" was removed or scoped wherever it included the IIHF.
- **IIHF head-reaching hit from behind.** 43.2 "no option to award a minor" is quoted only for a hit that stays on the back. On the head the text says "plan on the major and game misconduct, never on a minor" (48.2 has a minor; 48.1 "supersedes"). Sites: rules_primer :465, goaltender :1268/:1269/:1390, body_contact :1331.
- **EIH 22.3.** The rule states no scope (eih_rr.txt :999); only 22.2 says "EIH competitions". "In its own competitions" became "its scope and standing unsettled", and each site keeps "play as though it binds your goalie", or, for attackers, "plan for theirs to come out". Sites:
  - on_ice :148/:198/:517;
  - time_and_space :497/:539;
  - puck_support :424/:451;
  - playing_without_the_puck :929;
  - defender :182;
  - goaltender :610;
  - breakouts :1099/:1113;
  - defensive_zone_coverage :835/:853;
  - faceoffs :573/:589;
  - zone_entries :788.
  uk_rules :104 now says the R&R "were written by the governing body for England and Wales (1.1)".
- **faceoffs :6:** ~~the opening now notes that PWHL 78.8 drops NHL 76.8's line-change exception~~ (WITHDRAWN: that premise was false, and the head note is restored to its HEAD wording. See "Commit gate BLOCK and fixes".)
- **goaltender :1246:** adds "IIHF 42.4: the referee's call" (42.4 "may assess"; the brief's premise that the IIHF makes it mandatory was refuted).
- **special_teams :653:** citation fixed ("no minor (43.2), no match in the book").
- **zone_entries :241:** "plan on its major and game misconduct".
- **puck_support :763:** trailer drops the discipline-policy citation the text no longer uses. The same citation was kept in time_and_space, on_ice and pwtp, whose text does use it.
- **Refuted:** defender :337 "hooking in three of the six books" holds (IIHF 55.1, HC 8.2(a) Interp. 1, USAH 623 Note; USAH Casebook 623 Sit. 1 agrees).

## Review

**A safety-reviewer (pS) on the full diff:** no CRITICAL; 1 MAJOR, 6 MINOR.
- **MAJOR:** defending_the_rush :444 and :356 said an IIHF referee "may call it boarding (Situation 46.4), which has a minor (41.2)". 46.4 itself gives the major and game misconduct, so the "minor" was an inference in the permissive direction. At :444 it was also the chunk-final sentence. **Cut** at both sites, and the :428 tail too. The brief's formula ("41.2 has a minor") was the cause.
- **MINORs, applied by the coordinator:**
  - forechecking :755 dropped a non-sequitur;
  - forechecking :653: "can be" understated the mandatory NHL/PWHL 43.3/43.5, now "is … in the NHL and PWHL; under the IIHF, plan on one";
  - body_contact :31/KT6: IIHF removed from the flat set;
  - goaltender :1246: "(CARHA leagues)" restored, "A charge on you" → "Charging you" to fit the cap;
  - defending_the_rush :330: "plan on ejection".

**A second safety-reviewer (pS2) on the coordinator's edits: CLEAR.** Verified against IIHF 41–43, NHL/PWHL 42.5/43, EIHL Casebook 42, CARHA 52(b), HC 8.5(b) and USAH 607(b). Two wording polishes were applied:
- forechecking :653 punctuation;
- body_contact KT6: "under USA Hockey it does".

It noted, as harsher than the book and not blocking, that a Hockey Canada head-reaching hit can fall to 7.6(a)'s minor in minor/female hockey.

## Commit gate BLOCK and fixes

The first commit gate BLOCKED on two grounds.

**C7/C8: defending_the_rush CM ~:1045** still said "none asks who has the puck" for all six books, IIHF included, directly under the :1041 bullet this round had fixed. The plan row had listed lines, not the claim. The coordinator removed the clause; a corpus grep finds no other copy.

**C4: no rules-verifier had run.** A rules-verifier (pR) then checked the 22.3 rewrite (16 sites, 9 files), uk_rules :104, defending_the_rush :356/:428/:1045 and goaltender :1246. All CONFIRMED. pR also found a **MAJOR in text already pushed in c35d177**:
- faceoffs said PWHL 78.8 drops NHL 76.8's re-drop line-change exception. That is false: PWHL **84.1** carries the exception word for word as NHL 82.1, so all six books lift the bar when a penalty changes the numbers.
- An author (q1) repaired every layer of faceoffs: the facts line, the body, the provenance note, and the head note (restored to its HEAD wording). It found a narrower real divergence in the process: PWHL 78.8 applies Rule 15.5, under which a team "signaled for a penalty with time required to be placed on the penalty clock, in all circumstances … shall not be permitted to make any player substitutions prior to the ensuing faceoff". The NHL has no analogue. The text now says "on a plain reading, only the other team may change".
- q1 also changed on_ice :148 from "the EIHL Casebook keeps IIHF 27.7" (the Casebook never names 27.7) to "nothing the Elite League publishes switches IIHF 27.7 off".

**A rules-verifier (qR) on the repair: CLEAR.** It read PWHL 15.5/78.8/84.1/84.4, NHL 15/76.8/82.1 (no analogue), IIHF 76.8, USAH 204(a), HC 6.2(d) (hc.txt) and CARHA 57(c), and found the "plain reading" hedge correctly pitched. Its minor notes are recorded as plan rows:
- "Nothing the Elite League publishes" is wider than the Casebook searched; this is the conservative direction;
- the facts line states 15.5 without the hedge; this is the restrictive direction.

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/on_ice_communication.md | +3/−3 |
| content/foundation/rules_primer.md | +1/−1 |
| content/foundation/uk_rules.md | +2/−2 |
| content/hockey-iq/playing_without_the_puck.md | +1/−1 |
| content/hockey-iq/puck_support_and_spacing.md | +3/−3 |
| content/hockey-iq/time_and_space.md | +2/−2 |
| content/positions/defender.md | +4/−4 |
| content/positions/goaltender.md | +5/−5 |
| content/positions/winger.md | +1/−1 |
| content/systems/breakouts.md | +2/−2 |
| content/systems/defending_the_rush.md | +6/−6 |
| content/systems/defensive_zone_coverage.md | +2/−2 |
| content/systems/faceoffs.md | +5/−5 |
| content/systems/forechecking_systems.md | +4/−4 |
| content/systems/special_teams.md | +1/−1 |
| content/systems/zone_entries.md | +2/−2 |
| content/technique/body_contact_and_battles.md | +3/−3 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifiers pR (22.3 rewrite, uk_rules :104, dtr, goaltender :1246) and qR (the PWHL faceoffs repair, on_ice :148); safety-reviewers pS and pS2 (IIHF 41–43/48, NHL/PWHL 42.5/43, EIHL 42, CARHA 52(b), HC 8.5(b), USAH 607(b)); the authors against IIHF 41/42/43/48 and the Glossary, Situation Handbook 46.4, NHL/PWHL 42/43/76.8/78.8, EIHL Casebook 42, CARHA 52/53, HC 7.5/8.2/8.5, USAH 607/608/623 and the Casebook |
| D2 exceptions | 46.4 carrier/boarding; 43.2 off-head vs 48 on-head; 78.8 vs 76.8 |
| D3 divergence | PWHL 78.8; IIHF 42.4 discretionary |
| D4/D5 citations | special_teams :653 citation corrected; the puck_support trailer aligned with its text |
| D6 negatives | "No match in the IIHF book" verified; "None of the six asks" removed where false |
| D7 cardinal rule | "Plan on" for readings, rule text only where printed |
| D8 numeric ownership | No figures changed |
| D9 summary layer | Each claim fixed in KT, CM, facts and body |
| D10 facts | check_facts passes; 300-cap trims checked limb by limb by pS |
| D11 safety | pS MAJOR fixed; pS2 CLEAR |
| D12 read-aloud | All changed files rendered by the authors; defending_the_rush and body_contact by the reviewers |
| D13 folklore | Out of scope |
| D14 structure | No headings changed; links pass |
| D15 site | Full build after the final content edit (dist 22:57 vs last edit 22:52); --bare 0; --panels 0 |

## Gates (no pipes, after the final content edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 17 files, 0 LOST, 0 SPLIT.

## What this method could not have found

- **Paraphrase.** An IIHF carrier ejection or a 22.3 scope stated in other words. The sweeps were lexical.
- **Residual 22.3 sites outside the diff:** rink_map :303, neutral_zone_systems :553/:569, center :394, offensive_zone_play :820 and special_teams :354/:1047. They still say "own competitions" or "scope unstated" without "standing". They are a plan row; each still gives the strict instruction.
- **Other IIHF rules for a carrier hit from behind** (e.g. roughing, cross-checking under 43.1's "in any manner") were not swept.
