# SG185: Key Takeaways shortened and long paragraphs split on 16 pages, with every limb a listener needs kept in the kernel (6 November 2026)

**Files:**
- content/foundation/language_and_glossary.md
- content/foundation/rink_map.md
- content/foundation/rules_primer.md
- content/foundation/uk_rules.md
- content/hockey-iq/risk_management.md
- content/off-the-ice/team_play_and_culture.md
- content/positions/center.md
- content/positions/defender.md
- content/positions/switching_positions.md
- content/positions/winger.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- content/systems/faceoffs.md
- content/systems/forechecking_systems.md
- content/systems/offensive_zone_play.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md

## Source
The readability meter (`check_readability.py`) showed 35 Key Takeaways over 60 words and 7 paragraphs over 1,200 characters. Owner rulings: shorter is better; readable beats defendable; tactics first.

## What changed
- **Key Takeaways shortened** across the 16 pages, leading with what a player does; rule numbers and tariff detail the body or a facts line already carries were cut from the kernel, with each cut limb's carrier named by the author.
- **Long paragraphs split** at sentence boundaries: defending_the_rush :434, forechecking :345 and :824, faceoffs Common Mistakes :1233, risk_management :696, winger :554, team_play :283. Each half that carries a hazard keeps or gained a mid-paragraph ⚠️ leading a strong run (no new panel).
- **Limbs restored after review**, because heard alone the shortened KT read cheaper: defending_the_rush KT9 (the boards match under Hockey Canada 7.5(c), CARHA 53(b) and USA Hockey 608(c) if reckless, with a likely multi-game ban); defensive_zone_coverage KT4 and offensive_zone_play KT8 ("never just two minutes", with Hockey Canada's off-head scope); center KT6 and switching KT8 (USA Hockey's full trigger list, "while it stays off the head"); switching KT6 ("stick included"); rink_map KT11 ("outside the crease"); risk_management KT5 (unambiguous "over it on purpose"); winger KT11 ("a second violation on that draw can cost a minor (in most books, will)").
- **Restored after the commit gate:** the gate blocked because center KT6 and switching KT8 had dropped the boards/net match from a KT voiced alone — the same cut the reviewers ruled cheaper on defending_the_rush KT9, ruled differently by the other reviewer. Restored in all three in one form: "Into the boards or net on a player who cannot protect themselves, Hockey Canada and CARHA make it a match; USA Hockey does for any reckless one, with a likely multi-game ban." Also restored: center KT9's Hockey Canada interference-that-injures limb and glossary KT11's attempt-to-injure limb. center KT6 (99) and switching KT8 (94) are back to their original length.
- **Kept long by design** (every remaining word a limb or a scope): uk_rules KT19, rules_primer KT8, defender KT3, risk_management KT5, defensive_zone_coverage KT4, defending_the_rush KT9, offensive_zone_play KT8, winger KT11, center KT6 (in the plan).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (positions, foundation, off-the-ice) | No KT false; NITs: "head first" without "into the boards or net", "touch nobody" losing the stick, rink_map "outside the crease". All fixed |
| rules-verifier (systems, technique, hockey-iq) | FIX cheaper: dtr KT9 (match dropped from the KT's own scene), dzc KT4 and ozp KT8 ("never just two minutes" dropped); risk KT5 ambiguous. All fixed |
| safety-reviewer, also standing in for content (8 rendered) | All files SHIP; the dropped "never just two minutes" floor is the one real under-pricing (fixed); "off the head" fragment nits (fixed) |
| commit-gate (first run) | BLOCK: center KT6 and switching KT8 dropped the match from a KT voiced alone (inconsistent with the dtr KT9 ruling); center KT9 and glossary KT11 candidates |
| safety-reviewer, final re-check of the five restored KTs (also rules direction, primary text quoted) | All SHIP; FIX minor: restore "or net" (HC 7.5(c) goal frame, CARHA 53(b) goal net) in center KT6 and switching KT8 — applied, and in dtr KT9 for consistency |
| rules-verifier, narrow re-check of the repaired KTs (also safety direction) | 6 PASS; FIX: dtr KT9's restored match list closed without USA Hockey 608(c) (cheaper; fixed), dzc KT4 scope placement, ozp KT8 scope wording, winger "a second" → "a second violation". All fixed in the reviewer's wording |

### C11
- Three authoring agents made every edit on disjoint file sets; the coordinator wrote the briefs, the plan and this record.
- Every post-review edit is a reviewer's own wording, confined to the finding; the last round was re-checked narrowly. One coordinator choice: dtr KT9 keeps USA Hockey's match inside the KT's "into the boards" scene (608(c) has no boards condition) — recorded in the plan.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST in all 16 files; one SPLIT HALF candidate (forechecking :828) is a false positive both reviewers read (unmarked in HEAD).
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 |
| D2 Exceptions | HC 7.6 supersession; 608(a) floor; 614(c)(1) crease condition; faceoff "may" vs "shall" |
| D3 Divergence | Checking-from-behind ladder and faceoff second violation across six books |
| D4 Citation integrity | Rule numbers cut from KTs remain in body/facts |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "Never just two minutes in any book" re-checked |
| D7 Cardinal rule | KTs lead with what a player does |
| D8 Numeric ownership | "likely multi-game" kept where a USA Hockey match is named |
| D9 Summary layer | The whole wave is the KT layer; carriers named per cut limb |
| D10 Key-facts layer | Not edited (carriers only) |
| D11 Reader safety | safety-reviewer plus the re-check's safety direction |
| D12 Read-aloud | 8+ files rendered; split halves keep "Important." |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text changes and three new mid-paragraph ⚠️ (glyph leading a strong run). No site-reviewer (declared) |

## What this method could not have found
- Whether a listener actually hears "ends your game" as the ceiling (an ear test).
- A cut limb whose only other carrier is worded so differently that grep missed it.
- British competition books behind "five of six books" (In-House, EIHL Casebook, IHUK RoC) for checking from behind.
