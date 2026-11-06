# SG175: the second-misconduct rule stated for Hockey Canada, CARHA and the IIHF as well as USA Hockey; USA Hockey majors priced as always carrying a game misconduct; Rule 411's stick fouls named; three scope fixes (6 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/foundation/language_and_glossary.md
- content/foundation/on_ice_communication.md
- content/hockey-iq/time_and_space.md
- content/systems/breakouts.md
- site/src/diagrams/defensive_zone_coverage.mjs and its build product site/src/data/diagrams.json
- project/plans/OPEN_ITEMS.md

## Source
The SG173 commit gate's low notes, and a read-only rules-verifier census (SG175) of three claims across all of `content/`: USA Hockey Rule 411 (clean — 16 correct lines), a USA Hockey major leaving you in the game (2 cheaper), and in-game accumulations other than the Game Ejection count (5 cheaper omissions). Hockey Canada 4.7(c) and CARHA 31(c) — a second misconduct in a game becomes a game misconduct — were stated nowhere in the corpus.

## What changed
- **Second misconduct:** rules_primer :388 (now IIHF 22.1, British book, USA Hockey 404(a), Hockey Canada 4.7(c), CARHA 31(c); the NHL has no such trigger), the :612 lead ("and so is a second misconduct"), Common Mistakes :1133, the comparison table (not voiced; already over TABLE_MAX), the glossary "Game misconduct" entry, and on_ice_communication Common Mistakes :654 (USA Hockey, Hockey Canada, CARHA and the IIHF).
- **USA Hockey majors:** rules_primer KT4 now says a major always brings a game misconduct under USA Hockey; the glossary scopes it to "every major in its Summary of Penalties" (403(a)'s definition still describes a bare major).
- **Rule 411:** names its five stick fouls (606, 609, 621, 634, 635), not "the stick fouls".
- **Casebook 401 Situation 9:** "A penalty wiped out by a goal still counts (Casebook, 401 Situation 9, ruled for youth, girls' and high-school games)" — the scope is attribution, not an adult exemption.
- **CARHA 32(d) in two Sources trailers** (time_and_space :746, breakouts :1228): the suspension clause excludes "the Accidental High Stick Rule".
- **Diagram caption dz-collapse-corner:** adds "Drive a player into the boards from behind when they cannot protect themselves and Hockey Canada and CARHA make it a match." (HC 7.5(c), CARHA 53(b)).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only, three claims) | 411 clean; 2 cheaper USA Hockey-major lines; 5 cheaper accumulation omissions |
| rules-verifier (all changed sites, eight books flattened) | 9 PASS; FIX: Sit. 9 "Below Adult level" (cheaper for adults), caption missing "from behind" (harsher), IIHF missing from two lists. NHL/PWHL second-misconduct negatives hold |
| safety-reviewer, also standing in for content (3 rendered) | FIX major: IIHF omitted from the glossary and on_ice second-misconduct lists (British readers). Optional: Sit. 9 wording, caption "from behind". 0 LOST markers |

### C11
- Two authoring agents made every edit on disjoint files (rules_primer/time_and_space/breakouts/caption; glossary/on_ice); the coordinator wrote the briefs, the plan and this record.
- The final edits are the reviewers' own wording; the glossary author kept its narrower USA Hockey scoping (stricter about what the book says).

Checks after the last edit:
- Diagrams rebuilt by the caption author; the full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets, check_caption_pairs, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all five content files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 (census and review) |
| D2 Exceptions | 403(a) bare-major definition; CARHA 32(d) high-stick exclusion; Casebook youth scope |
| D3 Divergence | Second-misconduct trigger across six books; NHL/PWHL have none |
| D4 Citation integrity | 4.7(c), 31(c), 404(a), 22.1, 411(a) list, 7.5(c), 53(b) verified |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "the NHL book has no such trigger" — flattened sweeps return 0 in NHL and PWHL |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | 404(b) still stated once per page |
| D9 Summary layer | KT4 and Common Mistakes :1133 changed with the body |
| D10 Key-facts layer | No facts line changed |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | rules_primer and on_ice rendered; chunks read |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes; caption rebuilt; no panel added. No site-reviewer (declared) |

## What this method could not have found
- Other documents that list the second-misconduct books as a subset, still say "the stick fouls" for 411, or imply a USA Hockey major leaves you in the game (plan row "SG175 follow-up").
- Whether USA Hockey counts goal-washed penalties for Adults (the Casebook rules only for youth).
- Other diagram captions with a boarding-match claim missing "from behind".
