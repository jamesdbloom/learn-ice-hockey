# SG169: the second tier of long sentences split for listening on nine pages, with five rule lines that read cheaper corrected (5 November 2026)

**Files:**
- content/foundation/on_ice_communication.md
- content/foundation/rink_map.md
- content/positions/winger.md
- content/technique/puck_handling.md
- content/hockey-iq/risk_management.md
- content/systems/faceoffs.md
- content/systems/defensive_zone_coverage.md
- content/systems/special_teams.md
- content/foundation/language_and_glossary.md
- project/plans/OPEN_ITEMS.md

## Source
On 4 November the owner chose "Readability first", then "keep working on all items of the plan". After SG166, this wave covers the next nine pages by longest sentence (68–84 words). Two winger sites from the SG169 census (claims 2 and 3 of SG170) were folded in.

## What changed
- **Sentences split at natural boundaries** (a semicolon, dash or colon became a full stop). Each split-off sentence names its book again, and no rule substance changed.

  | Page | Longest sentence (words) |
  |---|---|
  | on_ice_communication | 84 → 59 |
  | rink_map | 79 → 61 |
  | winger | 79 → 56 |
  | puck_handling | 74 → 51 |
  | risk_management | 79 → 57 |
  | faceoffs | 72 → 57 |
  | defensive_zone_coverage | 71 → 55 |
  | special_teams | 68 → 58 |
  | language_and_glossary | 70 → 51 |

  The paragraphs over 1,200 characters on faceoffs and special_teams were split.
- **Rule lines that read cheaper, found by review and corrected:**
  - special_teams :914 (pre-existing): Hockey Canada goalie freeze. A warning applies only to an unpressured freeze in the crease (Interpretation 3 to 10.1(a), clause iii). A freeze outside the crease is a minor with no warning (clause v), unless the goalie came out to cut down the angle and covered the shot (clause ii). The first repair dropped clause ii and was caught by the final check.
  - defensive_zone_coverage :743: USA Hockey Casebook 614 Situation 4. Pulling a crease puck in by hand is a penalty shot; only batting it out first is "only a minor penalty". The split had left the minor standing alone.
  - winger facts :749 (census claim 2): Hockey Canada 7.6 major "on violence, must if hurt". A first repair wrote "minor and ejection" for 7.5(a). Hockey Canada has a separate Game Ejection penalty that "does not trigger any automatic suspension" (Rule 4.8(b) Note 1), so it was restored to "minor and game misconduct".
  - winger Common Mistakes :776 (census claim 3): "or any reckless hit from behind, at least a mandatory major and game misconduct (608(b))".
  - winger :797: "a cross-check is at least a minor in every book".
- **Lines that read harsher or mis-cited, also corrected:**
  - special_teams :1142: "if it is reckless, plan on a match" (602(a)), no longer covering forceful and head-first hits too.
  - defensive_zone_coverage :743: Hockey Canada Interpretation 5 is tied to 10.2(a)(v) and its facts are stated correctly, and "Situation 1's player" names its Situation.
- **Wording fixes:**
  - special_teams: "do not count on one", and the colon restored.
  - winger: :777 names Hockey Canada again, and :126 is reordered.
  - puck_handling :315: "But … still penalises".
  - glossary :340.
- **Two paragraph splits:**
  - faceoffs "What it costs": its second half is the same hazard's tariff, in the same chunk after the spoken "Important.", and was ruled acceptable by the safety-reviewer.
  - special_teams: both halves carry their own ⚠️, so the spoken "Important." count went 49 → 50 and check_marker_pairs shows 0 LOST.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (on_ice, rink_map, winger, puck_handling, risk) | All PASS; nothing cheaper or false. rink_map "any major for the charge also ejects you" confirmed for USA Hockey and CARHA. Pre-existing notes (risk :696 reckless-trip lead; risk :381 11.1 cite) went to the plan |
| rules-verifier (faceoffs, dzc, special_teams, glossary) | FIX cheaper (pre-existing): special_teams :914. FIX harsher mis-cite: :1142. Optional: dzc :743, faceoffs :1233 (does not fit the 1,200 limit; true as written). All taken except :1233 |
| safety-reviewer (all nine rendered, HEAD alongside) | All 9 SHIP. Both paragraph splits are acceptable; the special_teams rise of one "Important." is the split; 0 LOST. Minor: dzc chunk seams moved by packing (adjacent; no fix needed) |
| content-reviewer | No critical or major. Fixes taken: winger :797 "at least a minor", :777, :126; special_teams :1026/:1035, :756; puck_handling :315; dzc :743; glossary :340 |
| rules-verifier census (SG169, read-only) | Two winger sites (claims 2 and 3) were routed here; the rest went to SG170 (committed 10cc1ccc) |
| rules-verifier, narrow re-check of the repairs | FIX cheaper: winger :749 "ejection" vs Hockey Canada's Game Ejection; special_teams :914 "the same freeze" scope; dzc :743 Situation 4. Ceiling: winger :776. All fixed |
| rules-verifier, final check | winger :749 and :776 PASS; dzc :743 PASS. special_teams :914 FIX: clause ii omitted (false, harsher). Fixed in the reviewer's wording; "Situation 1's player" taken |

### C11
- Four authoring agents made every edit, on disjoint file sets. The coordinator wrote only the plan and this record.
- The last edits (special_teams :914 clause ii, dzc "Situation 1's") use the final check's own wording.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST in all nine files. The one SPLIT HALF candidate (faceoffs :624) was ruled acceptable.
- Spoken "Important." counts unchanged except special_teams +1 (the split).
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×4 (two halves, re-check, final check) |
| D2 Exceptions | HC 10.1(a) Interp. 3 clauses ii/iii/v; Casebook 614 Sit. 1 and 4; HC 4.8(b) Note 1 (Game Ejection) |
| D3 Divergence | Per-book sentences after splits; scope re-attached and verified |
| D4 Citation integrity | 10.2(a)(v) Interpretation 5; 614 Situation 4; 602(a) scope |
| D5 Provenance | Quotations from `sources/` on disk; IIHF 101.1 capital corrected to the source |
| D6 Negative claims | None added |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None changed |
| D9 Summary layer | Common Mistakes splits reviewed; KTs unchanged |
| D10 Key-facts layer | winger :749 compared limb by limb with HEAD (300/300) |
| D11 Reader safety | safety-reviewer on all nine |
| D12 Read-aloud | All nine rendered by the safety-reviewer with HEAD alongside; chunk seams compared |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes; no marker lost. No site-reviewer (declared) |

## What this method could not have found
- Hockey Canada "ejection" wording on other pages (a plan row: needs a corpus census and a house ruling).
- Other Hockey Canada goalie-freeze statements that omit clause ii.
- A split whose new antecedent problem sits beyond the paragraph read.
- Chunk seams for a listener beyond the renders compared.
