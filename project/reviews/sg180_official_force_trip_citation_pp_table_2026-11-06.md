# SG180: "likely multi-game" on USA Hockey's match for force against an official, tripping's own match rule cited, and a power-play table voiced again (6 November 2026)

**Files:**
- content/off-the-ice/team_play_and_culture.md
- content/hockey-iq/risk_management.md
- project/plans/OPEN_ITEMS.md

## Source
Owner ruling 6 November 2026 ("likely multi-game" for any USA Hockey match, including 601(e)(1)) and two SG178 review leftovers.

## What changed
- **team_play_and_culture :401:** "Deliberate force against one is a match penalty under USA Hockey, with a likely multi-game suspension, and under Hockey Canada and CARHA (CARHA's reaches an intentional touch)." (601(e)(1) is a mandatory match, excluded from the SDP; the owner accepts erring harsher.)
- **risk_management :667 (facts) and :696 (body):** a reckless trip's USA Hockey match now cites 639(c) (tripping's own match; SDP Level 3, 3–5 games) instead of 602(a); the intent-to-injure limbs keep 602(a).
- **risk_management table :530:** one cell shortened 244 → 190 chars by substitution so the power-play table is voiced again: "Be creative in their zone, but never turn it over at their blue line: their penalty killers break away with your players caught up ice, and a shorthanded rush is a power play's worst result."
- **special_teams :1113** left unchanged: no safe room at 300/300, and "intent to injure" already covers 8.5(c)'s attempt and deliberate injury.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | PASS all three sites (601(e)(1), Casebook summary, SDP note; 639(b)/(c), SDP Level 3; HC 11.5(c), CARHA 71(a) unchanged limbs). Optional wording notes on the table cell |
| safety-reviewer, also standing in for content (both rendered) | SHIP both files; the table cell now leads with the instruction |

### C11
- One authoring agent made every edit; the coordinator wrote the brief, the plan and this record. No post-review edits.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0; the risk_management table is voiced (10 chars of headroom).
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in both files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | 601(e.1) excluded from the SDP; 639(c) "may also" |
| D3 Divergence | Official-force limbs across three books unchanged |
| D4 Citation integrity | 639(c) replaces 602(a) for the trip's own match |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None |
| D7 Cardinal rule | Table cell is coaching craft, stated as advice |
| D8 Numeric ownership | "likely multi-game" per owner ruling |
| D9 Summary layer | team_play CM :638 and KT5 checked; no tariff to propagate |
| D10 Key-facts layer | risk_management :667 same length |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Both rendered; the table is voiced again |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs and a table cell. No site-reviewer (declared) |

## What this method could not have found
- Other pages citing 602(a) alone for a reckless trip's match.
- Whether USA Hockey affiliates actually give multi-game bans for 601(e)(1) (the SDP excludes it; the owner's ruling governs the wording).
