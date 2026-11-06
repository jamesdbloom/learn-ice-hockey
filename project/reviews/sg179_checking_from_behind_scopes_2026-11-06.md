# SG179: checking from behind — USA Hockey's head-first trigger restored to a takeaway, the off-head scope moved onto Hockey Canada, and the IIHF given "plan on it" where it was stated flat (6 November 2026)

**Files:**
- content/systems/defensive_zone_coverage.md
- content/systems/defending_the_rush.md
- content/systems/forechecking_systems.md
- content/systems/offensive_zone_play.md
- content/foundation/rules_primer.md
- project/plans/OPEN_ITEMS.md

## Source
A read-only rules-verifier census (SG179) of all `content/` for three claim shapes: USA Hockey 608(b) triggers (0 cheaper; 1 incomplete), the "off the head" scope (owner 3 Nov: Hockey Canada only; 1 fix), and the IIHF stated flatly as ejecting for checking from behind (house form "under the IIHF, plan on it"; 4 flat).

## What changed
- **defensive_zone_coverage KT4 :932:** USA Hockey "when it is forceful at the boards, sends them head first into the boards or net, or is reckless" (608(b); Casebook 608 Sit. 1).
- **defending_the_rush KT9 :1086:** "ends your game, puck or not (under Hockey Canada, while it stays off the head); under the IIHF, with no minor, plan on it."
- **forechecking :654, offensive_zone_play :794, rules_primer Key focus :19 and table :1064:** the NHL and PWHL as "any call ejects you" / "a major and a game misconduct (43.3, 43.5)", the IIHF as "plan on it" (43.2 no minor; 43.3 discretionary for reckless endangerment).
- **Refused, upheld by both reviewers:** a coordinator fix to forechecking facts :38 ("all but USA Hockey and the IIHF do so at their lightest penalty") — the IIHF's only written tier is a major and automatic game misconduct, so the change would have read cheaper.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only) | As above |
| rules-verifier (NHL, PWHL, IIHF both editions and Situation Handbook, USA Hockey and Casebook, HC, CARHA, British books) | All six sites PASS; no mandatory NHL/PWHL game misconduct lost; refusal upheld. Advisory on dtr KT9 heard alone (in the plan) |
| safety-reviewer, also standing in for content (all five rendered) | All five SHIP; no "plan on it" reads as optional; refusal upheld; KT length advisory (in the plan) |

### C11
- One authoring agent made every edit; the coordinator wrote the briefs, the plan and this record. No post-review edits.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all five files; marked-unit counts unchanged.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 (census and review) |
| D2 Exceptions | IIHF 43.3 discretion; HC 7.6 supersession; USA Hockey 608(a) floor |
| D3 Divergence | Checking from behind across six books plus the British books |
| D4 Citation integrity | 43.2/43.3/43.5 per book; 608(b); Casebook 608 Sit. 1 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "No British book departs from Rule 43" re-checked |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None changed |
| D9 Summary layer | KTs and Key focus changed; layer test found no surviving flat IIHF line in the five files |
| D10 Key-facts layer | forechecking :38 left as is (refusal) |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | All five rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs and one table cell (table not voiced; already over limits). No site-reviewer (declared) |

## What this method could not have found
- Checking-from-behind prices worded without the census anchors ("from behind", "back", "numbers", 608, 43).
- Other rules that price the same act more heavily (boarding, cross-checking, head contact) where a sentence names only Rule 43/608/7.5/53.
- How "plan on it" sounds in the synthesised audio.
