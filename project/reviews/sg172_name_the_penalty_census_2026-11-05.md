# SG172: the remaining Hockey Canada and CARHA "ejects you" lines name the penalty, on 30 pages, with a glossary entry for game misconduct and Game Ejection (5 November 2026)

**Files:**
- content/foundation/language_and_glossary.md
- content/foundation/on_ice_communication.md
- content/foundation/rink_map.md
- content/foundation/rules_primer.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/risk_management.md
- content/hockey-iq/scanning_and_anticipation.md
- content/hockey-iq/time_and_space.md
- content/off-the-ice/conditioning_and_recovery.md
- content/off-the-ice/mental_game.md
- content/off-the-ice/team_play_and_culture.md
- content/positions/center.md
- content/positions/defender.md
- content/positions/goaltender.md
- content/positions/switching_positions.md
- content/positions/winger.md
- content/systems/breakouts.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- content/systems/faceoffs.md
- content/systems/forechecking_systems.md
- content/systems/game_management.md
- content/systems/neutral_zone_systems.md
- content/systems/offensive_zone_play.md
- content/systems/special_teams.md
- content/systems/zone_entries.md
- content/technique/body_contact_and_battles.md
- content/technique/passing_and_receiving.md
- content/technique/puck_handling.md
- content/technique/shooting.md
- project/plans/OPEN_ITEMS.md

## Source
The SG171 commit gate found single-book Hockey Canada/CARHA lines still saying "ejects you", against the owner's 5 Nov ruling ("name the penalty"; multi-book lines may keep a verb; "Game Ejection" only for the count-triggered penalty, HC 4.8(b)/7.6(a), CARHA 32(a)). A read-only census (rules-verifier) swept all of `content/` and classified 1,167 hits: 186 lines (class A) needed renaming, two read cheaper than the rule.

## What changed
- **About 200 single-book Hockey Canada/CARHA sites renamed** across body, facts, Common Mistakes and Key Takeaways: "ejects you" / "ends your game" / "rules you off" became "brings a game misconduct", "a major and game misconduct", "a match", or, for a penalty count, "a Game Ejection". Where a newer player needs it, a plain "which ends your game" stays. Multi-book verbs (class B) were left as the ruling allows. Authors found and fixed about 25 sites the census missed, and refuted about 20 census rows (face-off "eject the centre", multi-book lines, already-named penalties).
- **Cheaper lines found and fixed:**
  - mental_game :694: throwing from the bench "can end your game" → "costs your team a bench minor, and the thrower a game misconduct once the referee can tell who it was" (HC 8.4(a), CARHA 66(c)/(d)). The coordinator's brief said Hockey Canada always gives the game misconduct; the author found 8.4(a)'s identification condition, and the re-check restored the bench minor.
  - playing_without_the_puck :711: Hockey Canada 8.5 "ejects if a foul on one injures" omitted the mandatory major and game misconduct for any charge on the goaltender (8.5(b)). Split into two facts lines (HC; CARHA).
  - defending_the_rush :683, :1004, shooting :918: a hit from behind "can end your game" now adds that under CARHA, and Hockey Canada off the head, even the minor carries a game misconduct (53(a); 7.5(a)/(e); 7.6 supersedes on the head).
  - on_ice_communication facts :294: "at least a minor and game misconduct" (53(a)/(b), 7.5(a)–(c)).
  - defending_the_rush facts :716: CARHA's slew-foot match (86(b)) restored beside 86(a).
  - winger :554: "at least a major and game misconduct" (CARHA 48(a) match for deliberate injury).
- **Glossary (language_and_glossary):** new entries "Game Ejection" (HC 4.8(b)(i)/(ii), Note 1; CARHA 32(a) with the Notes to 48, 49(b), 50(b); CARHA 27(a) lists it as a separate class, with no claim about CARHA suspension because the book is silent) and "Game misconduct" (off for the rest of the game, a substitute takes your place; HC 4.4(a); CARHA 30(a) with the 62(b) Note injury limb; substitution checked in NHL/PWHL/IIHF 23.1, USA Hockey 404(b), HC 4.8(a), CARHA 32(b)).
- **Wording fixes from review:** mental_game :27/:694/:752 and team_play :637/:639/:712 (a game misconduct no longer heard as less than "thrown out"); dzc :577 "the CARHA major" (30(a) Note), dzc :182 ("Sit." voiced; limbs separated); forechecking :868 "if intentional contact injures" restored; goaltender :1377, switching :252/:648, defending_the_rush :233, time_and_space :296.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only, all `content/`) | 186 class-A lines, 2 cheaper, worklist JSON |
| rules-verifier (technique, foundation, off-the-ice, positions; ~115 sites) | Nothing cheaper in the dangerous direction. 4 low FIXes (on_ice :294 minor dropped; shooting :918 HC off-head scope; winger :554 match; switching :648). All fixed |
| rules-verifier (systems, hockey-iq; 84 lines; USA Hockey 607(b) on forechecking KT verified) | Nothing cheaper. 4 FIXes (dzc :577 universal; forechecking :868 harsher; dzc :182 voiced "Sit."; dtr :716 "it"/"add"). All fixed |
| safety-reviewer, also standing in for content (7 rendered) | SHIP; 7 files minor wording fixes (mental_game escalation order, team_play, dtr :716, goaltender :1377, "for a Game Ejection", on_ice :294). All fixed. 0 LOST |
| rules-verifier, narrow re-check of repair text and the new glossary entries | FIX cheaper: on_ice :294, dtr :716 (86(b)), mental_game :694 (bench minor); glossary CARHA high-stick injury limb and double-minor list. All fixed in the reviewer's wording (author kept "bench minor" in 32(a)'s list — stricter, per 32(a) Note 1) |
| commit-gate (first run) | BLOCK: glossary "Game Ejection" CARHA double-minor list closed and incomplete (Rule 48 Note covers 48(d) cage/helmet grabs and 48(f) shaft holds too). Plan rows SG171-gate and glossary-gap trimmed to what remains |
| rules-verifier, the repaired glossary sentence only | PASS: list now open ("any double minor under Rules 48, 49(b) or 50(b)"); searched CARHA by the act — only those three Notes count a double minor as two (70(b) has none and carries a game misconduct); HC Interpretation 2 (double minor counts as one) applies to 4.8(b)(i) and (ii) |

### C11
- Six authoring agents made every edit, on disjoint file sets; the coordinator wrote the briefs, the plan and this record.
- After the first commit gate blocked, one glossary sentence was rewritten to the gate's finding and verified alone by a rules-verifier.
- The final edits are confined to the re-check's findings, in the reviewer's wording or the stricter direction. One coordinator-suggested offset ("a minor or major and game misconduct") was refused by an author as harsher-sounding and reverted where applied.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all 30 files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×4 (census, two halves, re-check) |
| D2 Exceptions | CARHA 30(a) Note and 62(b) Note; HC 7.6 supersession; HC 8.4(a) identification; CARHA 66(c)/(d) |
| D3 Divergence | Per-book naming; multi-book verbs kept |
| D4 Citation integrity | 86(b), 48 Note, 50(b) Note, 27(a), 23.1 substitution verified |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | Glossary declines to say CARHA's Game Ejection carries no suspension (book silent) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None changed |
| D9 Summary layer | KTs, Common Mistakes and Key focus renamed with their bodies |
| D10 Key-facts layer | ~60 facts lines compared limb by limb with HEAD; caps pass |
| D11 Reader safety | safety-reviewer plus the re-check's safety direction |
| D12 Read-aloud | 7 files rendered by the safety-reviewer, more by authors |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build; two new glossary anchors resolve |
| D15 Rendered site | Text-only changes; no marker lost. No site-reviewer (declared) |

## What this method could not have found
- Hockey Canada or CARHA prices worded without any swept verb, or scoped only by a heading or an earlier sentence.
- Diagram captions (18 `site/src/diagrams/*.mjs` files carry "eject"); not swept.
- Other copies of the two claim-level errors the re-check found in the glossary (CARHA high-stick exception without its injury limb; boarding as the only double minor counting as two) — about 31 grep hits, in the plan.
- Whether a newer player understands "game misconduct" where a facts line now names it without "ends your game"; the glossary entry is the mitigation.
