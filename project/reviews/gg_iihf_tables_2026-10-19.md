# (gg) IIHF Appendix IV table numbering, 19 October 2026

## Mapping

Read from the Appendix IV headings in both books and diffed whitespace-normalised.

| 2025/26 | 2026/27 | Notes |
|---|---|---|
| Tables 1–4 | 1–4 | Unchanged |
| Tables 5, 6 and 7 | One Table 5 | Columns "MAJOR ONLY" and "MAJOR + GMP"; content changed |
| Table 9 (there is no 8) | 7 | |
| Table 10 | 8 | |
| Tables 11–18 | 9–16 | Rows identical |

The goalkeeper-interference table is 16 → 14, with zero differences across 11,212 characters. The 2026/27 book's own 20.4 and 20.5 still cite the old "Table 6" and "Tables 5, 6 and 7".

## Convention applied

- Cite the 2026/27 number, with the 2025/26 number in brackets where readers may be on either edition.
- The merged tables are scoped by edition rather than renumbered.
- Sources trailers that record a reading keep the number they were read under, with the other edition's number added.

## Files changed

| Document |
|---|
| foundation/language_and_glossary.md |
| foundation/on_ice_communication.md |
| foundation/rink_map.md |
| foundation/rules_primer.md |
| foundation/uk_rules.md |
| hockey-iq/playing_without_the_puck.md |
| hockey-iq/scanning_and_anticipation.md |
| hockey-iq/time_and_space.md |
| positions/center.md |
| positions/goaltender.md |
| positions/winger.md |
| systems/defensive_zone_coverage.md |
| systems/game_management.md |
| systems/special_teams.md |
| technique/body_contact_and_battles.md |

**Content corrections found in passing:**
- **rules_primer :373.** It said the IIHF unwilling combatant's major was "guaranteed" to leave you in the game. That was true for 2025/26 Table 5 only, and even then not for fights outside the periods or off the ice (46.9, 46.11). Under 2026/27, 46.12 makes the game misconduct the default, waivable by the referee. It now reads "the only major listed without a game misconduct (Table 5, 46.6)", plus the 2026/27 position. The direction is stricter; the old line was permissive for a 2026/27 reader.
- **uk_rules :306.** It now reads "a willing combatant's fighting major carries an automatic game misconduct".
- **goaltender.** The Key line saying the 2025/26 table numbers were used throughout was deleted, because it became false. The Caveats now say table numbers are 2026/27 while the rule text follows the 2025/26 book.

## Review

- **rules-verifier:** the mapping was confirmed and every changed citation points to the right row in both editions. It raised 5 MINORs, all applied (the rules_primer :373 edge case, uk_rules :306 and :421, defensive_zone_coverage :105, goaltender :1768). Re-check: CLEAR.
- **safety-reviewer (C6)** on the penalty-bearing lines (rules_primer :373, uk_rules :306/:421, playing_without_the_puck :829/:856): CLEAR, with renders. No line got cheaper, no limb was lost, and markers were preserved.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier on every changed citation and the two penalty corrections |
| D2 exceptions | 46.9 and 46.11 edge limbs |
| D3 divergence | Edition split stated |
| D4/D5 citations | Table numbers verified at source; no quotation altered |
| D6 negatives | Out of scope |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | Table counts (20, 22) confirmed incidentally |
| D9 summary layer | The goaltender Key line removed because it became false |
| D10 facts | pwtp :829 at 300/300 and dzc :105 at 299/300, both under cap |
| D11 safety | safety-reviewer CLEAR |
| D12 read-aloud | 3 documents rendered |
| D13 folklore | Out of scope |
| D14 structure | Unchanged |
| D15 site | Full build after the final edit; --bare 0 |

## What this method could not have found

- A table citation written in words with no number.
- Sibling layers built on the old reading that every Table 6 fighting major ejects. Examples are rules_primer :1031 and the uk_rules KT; they were not re-read.
- Table ticks placed by column alignment in the text extraction. The PDFs were not rendered.
