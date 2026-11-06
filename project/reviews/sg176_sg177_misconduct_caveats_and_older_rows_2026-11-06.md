# SG176–SG177: USA Hockey's checking-from-behind floor given its second-misconduct caveat, boarding matches scoped "from behind", and five older plan rows closed (6 November 2026)

**Files:**
- content/systems/defensive_zone_coverage.md
- content/systems/forechecking_systems.md
- content/systems/offensive_zone_play.md
- site/src/diagrams/defensive_zone_coverage.mjs and its build product site/src/data/diagrams.json
- content/foundation/uk_rules.md
- content/systems/defending_the_rush.md
- content/positions/center.md
- content/positions/winger.md
- content/systems/faceoffs.md
- project/plans/OPEN_ITEMS.md

## Source
SG176: a read-only rules-verifier census of the corpus outside the three pages commit d06aba4b fixed, for four claims (second-misconduct trigger; USA Hockey major; Rule 411; from-behind match) — no voiced cheaper claim except one minor omission; five small fixes. SG177: older plan rows (uk_rules KT19 DOPS slur; defending_the_rush KT9 608(c); center IIHF flat statements; winger 608(b) reckless; faceoffs USA Hockey "ejection").

## What changed
- **USA Hockey checking-from-behind floor:** "not an ejection unless it is your second misconduct of the game" (404(a)) at dzc :208, dzc facts :500 ("a second ejects"), and two Sources trailers (dzc :950, forechecking :1121).
- **From-behind match:** ozp :796 "Driving a player from behind into the boards or goal frame when they cannot protect themselves" (HC 7.5(c), CARHA 53(b)); ozp facts :919 adds "defenceless"; dz-collapse-corner caption now declarative ("A hit from behind into the boards on a player who cannot protect themselves is a match under Hockey Canada and CARHA.").
- **uk_rules KT19:** "A discriminatory slur is at least a one-game ban too, with an immediate suspension while it is investigated." (EIH DOPS C.1, §8; same sentence as the body :413).
- **defending_the_rush KT9:** "and under USA Hockey a reckless one is a match too, with a likely multi-game suspension" (608(c), SDP Level 2; owner 25 Oct).
- **center KT6:** "under the IIHF, plan on it" (43.2/43.3; owner 28 Oct). :775 and :812 refuted — already "can end your game", not flat.
- **winger :557, :798:** USA Hockey 608(b)'s reckless trigger added beside head-first; "at the least" (608(c) match).
- **faceoffs :1233:** "at least a major and game misconduct" (owner 5 Nov "name the penalty").

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (SG176, read-only) | 0 voiced cheaper on USA Hockey major and 411; 3 second-misconduct omissions (1 voiced), 2 harsher from-behind sites |
| rules-verifier SG176 (also standing in for the safety direction) | All 6 sites PASS; ozp :796/:919 correct HEAD's too-broad wording. Advisory: dzc :500 "a second ejects" (no room at 300/300) — in the plan |
| rules-verifier SG177 | All 6 sites PASS; center :775/:812 refutation upheld. Optional notes (inclusion workshop; "excessive force") — in the plan |
| safety-reviewer SG177, also standing in for content (4 rendered) | All 5 files SHIP; optional center KT6 trim — in the plan |
| commit-gate (first run) | BLOCK: C6 — SG176 files had no safety-reviewer (a rules-verifier "standing in" does not satisfy C6); C10 — no site-reviewer on the changed caption |
| safety-reviewer SG176 (staged bytes; ozp and dzc rendered) | All four SHIP. ozp :796 narrowing to "from behind" is a correction toward the rule (HC 7.2(a) boarding of a defenceless opponent starts at a minor; CARHA 49 has no match), and the page still warns about boarding elsewhere. Optional notes in the plan |
| site-reviewer, dz-collapse-corner caption (Chrome; desktop and a 400px iframe viewport; light and dark) | SHIP: sentence present and legible in all four cells, amber warn-inline contrast 5.71:1 light / 8.29:1 dark, no overflow, console clean, no off-site requests. A first attempt was blocked by the browser extension's site-safety check and the owner cleared it |

### C11
- Two authoring agents (SG176; SG177) made every edit on disjoint files; the coordinator wrote the briefs, the plan and this record. No post-review edits.

Checks after the last edit:
- Diagrams rebuilt by the SG176 author; the full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets, check_caption_pairs, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all eight content files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 (census, SG176, SG177) |
| D2 Exceptions | 404(a) second misconduct; 608(b)/(c) tiers; IIHF 43.3 discretion; DOPS C.1 floor |
| D3 Divergence | HC/CARHA/USA Hockey/IIHF checking-from-behind tiers |
| D4 Citation integrity | 404(a), 608(b)/(c), SDP Level 2, 7.5(c), 53(b), DOPS C.1/§8 verified |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "the only book here whose lowest tier does not eject" re-checked |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | "likely multi-game" per owner ruling |
| D9 Summary layer | KTs in uk_rules, defending_the_rush, center changed with the body |
| D10 Key-facts layer | dzc :500 (300/300) and ozp :919 compared limb by limb |
| D11 Reader safety | safety-reviewer (SG176 and SG177) |
| D12 Read-aloud | ozp, dzc, uk_rules, defending_the_rush, center, winger rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | site-reviewer on the changed caption (desktop and 400px, light and dark); the other changes are text inside existing runs |

## What this method could not have found
- Other pages giving USA Hockey's 608(b) trigger as head-first only, or USA Hockey's floor as "not an ejection" without the second-misconduct caveat, worded outside the sweeps.
- Whether the EIHL Casebook prices discriminatory slurs.
- Whether a listener hears "a second ejects" at dzc :500 as a second misconduct.
