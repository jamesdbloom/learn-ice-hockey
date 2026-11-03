# SG160: the remaining Key Takeaways over 60 words shortened on fourteen pages, with every limb a reviewer missed put back (3 November 2026)

**Files:**
- content/foundation/rink_map.md (KT10)
- content/foundation/rules_primer.md (KT8)
- content/getting-started/getting_started.md (KT14)
- content/off-the-ice/conditioning_and_recovery.md (KT14)
- content/off-the-ice/equipment.md (KT2)
- content/off-the-ice/practice_and_development.md (KT12)
- content/positions/defender.md (KT3)
- content/positions/goaltender.md (KT12)
- content/positions/switching_positions.md (KT6, KT8)
- content/systems/breakouts.md (KT6, KT12)
- content/systems/defending_the_rush.md (KT9)
- content/systems/forechecking_systems.md (KT9)
- content/systems/neutral_zone_systems.md (KT4, KT11)
- content/systems/special_teams.md (KT6, KT10)
- project/plans/OPEN_ITEMS.md

Sixteen pages were briefed. risk_management.md was left unchanged: its KT5 is still 72 words, because every clause in it is a limb. core_principles.md's trim was fully reverted once "head up" was restored, so it is no longer in the diff.

## Source
OPEN_ITEMS readability row ("Key Takeaways over 60 words"), following SG159. Owner rules: "shorter is better" (19 Oct) and "readable beats defendable", while never making an act cheaper.

## What changed
- **Twenty KTs were trimmed** by five authors with disjoint file sets. The trims removed redundant words, restored instruction-first order and replaced "throws you out" with "ejects you".
- **Kept over 60 on purpose, because every word left is a safety or tariff limb:**
  - defender KT3 (74)
  - switching_positions KT6 (69) and KT8 (80)
  - rink_map KT10 (67)
  - neutral_zone_systems KT4 (66)
  - rules_primer KT8 (61)
  - conditioning KT14 (61)
  - getting_started KT14 (63)
- **Limbs restored after review:**
  - rink_map KT10: the skate-on-crease exception (NHL 27.8, IIHF 27.7).
  - rink_map KT11: "outside the crease" (USA Hockey 614(c)(1), CARHA 58(b), Hockey Canada 10.2(a)).
  - switching_positions KT8: "Kept off the head" (Hockey Canada 7.6, owner ruling). Its fronted "it" was replaced by naming the act ("Driving them from behind into the boards or goal frame…").
  - neutral_zone_systems KT4: Hockey Canada 7.4(c) mandatory match.
  - defender KT3: the battle condition ("If a battle moves a body there…") and "never hit anyone from behind".
  - getting_started KT14: "the injured player's" and "more".
  - core_principles KT11: "head up".
- **Wording repairs:**
  - forechecking KT9: the verb restored ("sends them head first").
  - breakouts KT6: brackets became dashes, and "sit on a rim" became "freeze it".
  - special_teams KT10: "injures them".
  - goaltender KT12: back to an instruction ("Keep a net-front body moved in a battle to the corner side").
  - neutral_zone_systems KT11: leads with "Hold your line until the puck drops".
  - defending_the_rush KT9: a semicolon before the IIHF clause.
  - equipment KT2: "with a likely multi-game suspension", replacing "until a hearing" (owner ruling 25 Oct; SDP Level 3 lists 615(c) at a recommended 3-5 games, `sources/usah.txt` around :1235).
- **Not restored, and why:**
  - defending_the_rush KT9: "five of the six books" stays out. The rules-verifier found USA Hockey Casebook 608 Situation 1 makes a forceful hit into a back at the boards a must-call ejection, and "under the IIHF … plan on it" covers the sixth book.
  - switching_positions KT6: the faceoff "touching an opponent" tariff stays out. It is an acceptable demotion, since the body, facts and Common Mistakes carry it.

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | No critical. Majors: M1 rink_map KT10 exception, M2 defender KT3 meaning and from-behind limb, M3 getting_started antecedent, M4 defending_the_rush KT9 dash. 11 minors. All taken except M4's "five of six" (refuted by rules-verifier), m2 and m5 (accepted demotions) and m10 (kept "more" to match this page's body) |
| safety-reviewer (3 files rendered) | 13 SHIP, 2 FIX: switching_positions KT8 head scope; defender KT3 conditional. Both fixed. 0 LOST markers in all files |
| rules-verifier (every changed KT against the primary text) | FIX: rink_map KT10 and KT11, switching_positions KT8, equipment KT2. Flags: neutral_zone_systems KT4, defender KT3, core_principles KT11. All fixed. PASS on the rest |
| rules-verifier, narrow re-check of all repair text, also standing in for the safety direction | All ten items PASS. Optional: defender KT3 battle trigger (taken, in the reviewer's wording); breakouts "behind the net" (not needed, because the context carries it). Confirmed the "every book but USA Hockey" tallies for checking from behind (IIHF 43.2 has no minor; 43.3's discretion is whether to call it) and goaltender KT12's "in every book" |

### C11
One authoring agent per file set made every content edit. The coordinator wrote only the plan and this record. The last edit (defender KT3) uses the re-check reviewer's own words, made in the stricter direction.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs on every changed file: 0 LOST and 0 SPLIT HALF UNMARKED.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier twice, against the primary text |
| D2 Exceptions | Trapezoid skate contact; freezing inside the crease; HC 7.6 head scope; IIHF discretion |
| D3 Divergence | Six-book tallies for checking from behind, charging, slew-foot, faceoff second violation |
| D4 Citation integrity | No citation changed |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "No book caps charging at a minor" and "no book lets them leave the crease to freeze it" tested |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | "Likely multi-game" from the USA Hockey SDP on disk |
| D9 Summary layer | Each KT checked against its body, facts and Common Mistakes by three reviewers |
| D10 Key-facts layer | No facts line changed |
| D11 Reader safety | safety-reviewer, plus the safety direction in the re-check |
| D12 Read-aloud | switching_positions, defending_the_rush, getting_started, breakouts, rink_map and neutral_zone_systems rendered; "Important." counts unchanged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only KT changes, with no layout or marker-position change. No site-reviewer (declared) |

## What this method could not have found
- A meaning change with no lexical trace in a KT nobody rendered (eight files were judged from the markdown).
- USA Hockey Casebook situations on 614(c) or 615(c) beyond the ones read.
- Whether listeners hear "defenceless" as narrowly as "unable to protect or defend themselves".
- Pre-existing harsher-only edges, now plan rows: NHL/PWHL 43.1's awareness condition, equipment :129's own-helmet "during", and rules_primer CM's missing HC "deliberate" scope.
