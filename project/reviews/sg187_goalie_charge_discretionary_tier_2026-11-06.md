# SG187: goalie-charging lines signal the referee's discretionary major beside each book's mandatory trigger, on 9 pages (6 November 2026)

**Files:**
- content/foundation/language_and_glossary.md
- content/foundation/rink_map.md
- content/foundation/rules_primer.md
- content/hockey-iq/time_and_space.md
- content/positions/center.md
- content/positions/winger.md
- content/systems/forechecking_systems.md
- content/systems/special_teams.md
- content/systems/zone_entries.md
- project/plans/OPEN_ITEMS.md

## Source
SG186's reviewers found that the goalie-charging ladder ("can end your game … under CARHA in the crease or if it injures; under USA Hockey if reckless") listed only each book's mandatory trigger, implying a charge outside them cannot end your game. A read-only rules-verifier census (SG187) swept all of `content/` and the diagram captions: 9 CHEAPER lines, 141 CORRECT, 188 N/A; no caption affected.

## The rules (verified on disk)
- CARHA 52(a): a minor "or, at the discretion of the Referee, a Major penalty" for any charge; 30(a): any major is "Major penalty plus Game Misconduct"; 52(b): a mandatory major and game misconduct in the crease or on injury; 66(b): deliberate contact a minor, a major at the referee's discretion.
- USA Hockey 607(a)/(c): "A minor plus a misconduct or a major plus a game misconduct penalty shall be assessed" for any charge, and for a charge or body check on a goalie in the crease or privileged area; 607(b): mandatory for a reckless charge; 607(d) Note 1: deliberate contact with a goalie is charging; Casebook 607 Sit. 4 guides the referee's choice.
- Hockey Canada 8.5(b): a mandatory major and game misconduct for any charge on the goaltender.
- NHL/PWHL 42.1/42.3/42.5, IIHF 42.4 (both editions), EIHL Casebook 42: discretionary, with a game misconduct on a face/head injury (NHL/PWHL/EIHL) or for reckless endangerment (IIHF).

## What changed
- **center KT9, glossary KT11, rink_map :223, rules_primer :794, winger facts :519, time_and_space facts :278, forechecking KT8, special_teams Common Mistakes :1194 and KT10 :1265, zone_entries :802 and KT11 :1210:** the mandatory triggers read as mandatory ("must", "always", "mandatory") and the discretionary remainder is signalled ("can for any other", "at the referee's call", "can end your game"). forechecking KT8's flat "Charging one ends your game" — false for the NHL, PWHL and IIHF — now reads "can end your game". zone_entries :802 gains the CARHA crease trigger it had dropped; zone_entries KT11 gains USA Hockey.
- **Post-review wording:** special_teams :1194 "a reckless one must throw you out" → "always throws you out" (heard as a duty on the player); glossary KT11 clause order matches center KT9.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only) | 9 CHEAPER, as above |
| rules-verifier (all 11 changed sites; CARHA, USA Hockey and Casebook, HC, NHL, PWHL, IIHF both editions, EIHL Casebook) | All PASS; none cheaper, none harsher-false; "can bring a major and game misconduct in any book" true in all six. Older issues noted (in the plan) |
| safety-reviewer, also standing in for content (9 rendered) | 8 SHIP; special_teams :1194 wording FIX (applied); optional glossary reorder (applied); winger :519 USA Hockey 607(b) gap noted (pre-existing, in the plan) |

### C11
- Two authoring agents made every edit on disjoint file sets; the coordinator wrote the briefs, the plan and this record.
- The two post-review edits are the safety-reviewer's own wording (a verb and a clause order), no change of price.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all 9 files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 (census and review) |
| D2 Exceptions | CARHA 30(a) high-stick exception; Casebook 607 Sit. 4/5 |
| D3 Divergence | Goalie charging across six books plus the EIHL Casebook |
| D4 Citation integrity | 52(a)/(b), 66(b)/(e), 607(a)–(e), 8.5(b), 42 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None |
| D7 Cardinal rule | KTs still lead with "arrive under control" / "play the puck, not the goalie" |
| D8 Numeric ownership | None |
| D9 Summary layer | KTs and Common Mistakes changed with their bodies |
| D10 Key-facts layer | winger :519 (299/300) and time_and_space :278 compared limb by limb |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | 9 files rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs. No site-reviewer (declared) |

## What this method could not have found
- Goalie-charge prices in units the census did not open (forechecking :867–871, special_teams :1070–1140; in the plan).
- Other rules pricing contact with a goalie at a different tier (roughing, boarding).
