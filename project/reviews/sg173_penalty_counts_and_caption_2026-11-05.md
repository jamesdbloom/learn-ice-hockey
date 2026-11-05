# SG173–SG174: the rules primer's "When penalties add up" rewritten instruction-first and made complete, four CARHA trailers given the high-stick injury limb, one defender facts line and one diagram caption corrected (5 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/positions/defender.md
- content/hockey-iq/scanning_and_anticipation.md
- content/hockey-iq/time_and_space.md
- content/systems/breakouts.md
- content/technique/shooting.md
- site/src/diagrams/defensive_zone_coverage.mjs and its build product site/src/data/diagrams.json
- project/plans/OPEN_ITEMS.md

## Source
Plan rows from SG172's re-check (claim-level follow-ups) and SG171/172 census leftovers. A read-only rules-verifier census swept all of `content/` for three claims (CARHA accidental-high-stick exception, what counts toward a Game Ejection, the "deliberate" qualifier on Hockey Canada 7.6(b)) and found no spoken unit reading cheaper: "deliberate" faithfully paraphrases 7.6(b) Interpretation 2 at all 38 sites. A diagram-caption sweep (SG174) found one voiced caption pricing Hockey Canada/CARHA with "eject".

## What changed
- **rules_primer "When penalties add up"** now opens with the instruction ("After two minors in a game, stop reaching with your stick and walk away from anything after the whistle"), then: CARHA any third penalty (a double minor can count as two); Hockey Canada a third stick minor, and in minor and female hockey a third head-contact one; USA Hockey four (five for adults); "A major ends it sooner: one is enough in all three books (CARHA spares only an accidental high stick that hurts nobody). Under USA Hockey any game misconduct also costs your team's next game, and a second major in the game at least the next two (404(b), 403(b))." The Hockey Canada paragraph adds 4.8(b)(ii), Interpretation 2 and Note 1; the CARHA paragraph adds 32(a) Note 1, the Notes to 48/49(b)/50(b), 39(b) Note 1 and the 29(b) Note; the USA Hockey paragraph adds Casebook 401 Situation 9 and corrects Rule 411 from six named fouls to seventeen, with its third/fourth/fifth tiers (also at :463). :1078 no longer says its consequences "live only here".
- **defender facts :316:** "a deliberate high cross-check" → "a deliberate cross-check goes high" (7.6(b) "above the normal height of their shoulders"; Interpretation 2 puts "deliberate" on the action).
- **Sources trailers** (scanning_and_anticipation :656, time_and_space :746, breakouts :1228, shooting :1004): the CARHA 30(a) high-stick exception now carries the 62(b) Note's "when injury results" limb.
- **Diagram caption dz-collapse-corner:** "Hockey Canada and CARHA eject you every time" → "give at least a game misconduct every time" (HC 7.5(a)–(c), CARHA 53(a)/(b), USA Hockey Casebook 608 Sit. 1).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only, all `content/`, three claims) | No spoken unit cheaper; 4 trailer CHEAPER; defender :316 borderline |
| rules-verifier (all seven files) | FIX cheaper: defender :316 dropped "neck" in the first repair; Rule 411's six-foul list (pre-existing). Optional: Casebook 401 counting. Caption, trailers PASS. All fixed |
| safety-reviewer, also standing in for content | MAJOR: the new lead counted majors as steps toward three. Minor: a new amber panel on the CARHA paragraph; defender "neck". All fixed |
| rules-verifier, narrow re-check | FIX cheaper: the repaired lead said a USA Hockey major ends your game only on the second (every USA Hockey major carries a game misconduct; the coordinator relayed that sketch). "A fifth a hearing" softer than 411(a). Fixed in the reviewer's wording, "at least the next two" per 403(b)'s "in addition" |
| safety-reviewer, final narrow check | SHIP but one minor: "with the same next-game cost" two paragraphs from its antecedent, past "triggers no automatic suspension". Fixed in the reviewer's wording; stale "only here" at :1078 reworded |

### C11
- Two authoring agents (content; diagram captions) made every edit on disjoint files; the coordinator wrote the briefs, the plan and this record.
- Each repair after review used the reviewer's wording or the stricter direction and was followed by a narrower check; the last edit (":618 which also costs your team's next game", ":1078 in full") is the final safety check's own wording.

Checks after the last edit:
- Diagrams rebuilt by the caption author (204 diagrams); the full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets, check_caption_pairs: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all six content files; rules_primer has 0 amber panels (`--panels`).
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 plus the census |
| D2 Exceptions | CARHA 30(a)/62(b) Notes; 29(b) Note; 39(b) Note 1; HC Interpretation 2; USA Hockey 401(b) adult tier |
| D3 Divergence | Per-book counting rules side by side |
| D4 Citation integrity | 411 list (17 rules), 403(b), 404(b), Casebook 401 Sit. 9 verified |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "No other book counts stick minors" dropped (no longer true in framing) |
| D7 Cardinal rule | Section now leads with what a player does |
| D8 Numeric ownership | 404(b) stated once in the section (owner ruling) |
| D9 Summary layer | Lead checked against the Common Mistakes "Three majors" bullet |
| D10 Key-facts layer | defender :316 at 299/300 |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | rules_primer rendered; chunks 073–074 read; pointer distance fixed |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes; caption rebuilt; no panel added. No site-reviewer (declared) |

## What this method could not have found
- Other documents that repeat USA Hockey Rule 411's six-foul list, or state a USA Hockey major as not ending the game.
- Whether 403(b)'s two games and 404(b)'s one stack (the page says "at least the next two").
- Other in-game accumulations not in the section (Hockey Canada 4.7's second misconduct is in the plan).
- Diagram titles and on-image labels were not read individually.
