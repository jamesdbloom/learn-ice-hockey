# SG181: six restored open items closed — a women's-hockey rule given its book, USA Hockey's shot-block exception propagated, CARHA's crease-charge ejection added, the USA Hockey discipline levels completed, and two facts lines clarified (6 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/systems/defending_the_rush.md
- content/systems/game_management.md
- content/systems/faceoffs.md
- content/foundation/rules_primer.md
- content/systems/defensive_zone_coverage.md
- project/plans/OPEN_ITEMS.md

## Source
The six items restored to the plan from the SG166–SG168 row (SG179 gate) plus optional SG176–SG179 review notes.

## What changed
- **body_contact :951:** "IIHF Rule 101.1 lets women players…" (the book was unnamed).
- **defending_the_rush CM :1024:** adds USA Hockey Casebook 639 Situation 4's shot-block exception (the facts lines and body already carried it). **KT9 :1086:** "ends your game in five of six books, puck or not (under Hockey Canada, while it stays off the head); under the IIHF, with no minor, plan on it."
- **game_management :347:** adds "charging a goalie in their crease is a mandatory major and game misconduct (52(b))" — the CARHA price cited only 66(b)'s discretionary major.
- **rules_primer :394:** the USA Hockey discipline summary now names Level 3 (3–5 games), including hateful or discriminatory language (601(e.3)), "which the league may raise or send straight to a hearing". Levels 1–2 were already right. **:1124** left: the 615 Note makes any punch at an opponent fighting.
- **defensive_zone_coverage facts :500:** "(608(a)'s minor and misconduct; two misconducts eject)" — "a second ejects" could be heard as a second hit.
- **faceoffs facts :607:** the author first added NHL/PWHL 43.1's "if unaware of it" and shortened the match clause to "a defenceless player"; both reviewers flagged the match clause (both books require "from behind") and the safety-reviewer the awareness clause (heard alone it priced a seen hit as free and contradicted body chunk 038). The coordinator took the safety-reviewer's line, which restores the HEAD price structure: "…it ejects under Hockey Canada 7.5(a) off the head, CARHA 53(a), and NHL and PWHL 43.3, 43.5; IIHF 43.3: plan on it. Driving them into the boards unable to protect themselves is a match (Hockey Canada 7.5(c), CARHA 53(b))".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (all six files) | 5 PASS; faceoffs :607 FIX (match clause lost "from behind"; awareness clause heard as covering all books). Upheld the 601(e.3) addition and the "the rest" sweep |
| safety-reviewer, also standing in for content (4 rendered) | 5 SHIP; faceoffs :607 FIX (awareness clause reads cheaper alone and contradicts chunk 038; match clause too broad). Line supplied, 285/300 |

### C11
- Two authoring agents made every edit on disjoint files; the coordinator wrote the briefs, the plan and this record.
- The reviewers disagreed on :607 (keep the awareness split reordered vs drop it); the coordinator chose the safety-reviewer's stricter line, applied verbatim — the stricter direction, matching the page body.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all six files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | Casebook 639 Sit. 4; 601(e.1) exclusion; 601(e.3) Note; NHL/PWHL 43.1 |
| D3 Divergence | Checking-from-behind tally across six books |
| D4 Citation integrity | IIHF 101.1; CARHA 52(b); SDP Level 3 list |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "The rest get three to five" — every USA Hockey match clause is in Levels 1–3 except 601(e.1) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | SDP ranges from usah.txt |
| D9 Summary layer | defending_the_rush CM and KT; shot-block exception now in every layer |
| D10 Key-facts layer | dzc :500 and faceoffs :607 compared limb by limb |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | faceoffs, defending_the_rush, game_management, rules_primer rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs. No site-reviewer (declared) |

## What this method could not have found
- Other pages repeating the shortened "a defenceless player into the boards is a match" without "from behind".
- Whether the owner wants the NHL/PWHL awareness split voiced on faceoffs (in the plan).
