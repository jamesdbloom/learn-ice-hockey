# SG171: Hockey Canada and CARHA penalties named instead of "ejection", and Hockey Canada 4.8(c) added to the next-game line, on 30 pages (5 November 2026)

**Files:**
- content/foundation/core_principles.md
- content/foundation/language_and_glossary.md
- content/foundation/on_ice_communication.md
- content/foundation/rink_map.md
- content/foundation/rules_primer.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/risk_management.md
- content/hockey-iq/scanning_and_anticipation.md
- content/hockey-iq/time_and_space.md
- content/off-the-ice/equipment.md
- content/off-the-ice/mental_game.md
- content/off-the-ice/team_play_and_culture.md
- content/positions/center.md
- content/positions/defender.md
- content/positions/goaltender.md
- content/positions/winger.md
- content/systems/breakouts.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- content/systems/faceoffs.md
- content/systems/forechecking_systems.md
- content/systems/game_management.md
- content/systems/neutral_zone_systems.md
- content/systems/offensive_zone_play.md
- content/systems/special_teams.md
- content/systems/zone_entries.md
- content/technique/body_contact_and_battles.md
- content/technique/passing_and_receiving.md
- content/technique/puck_handling.md
- content/technique/shooting.md
- project/plans/OPEN_ITEMS.md

## Source
Two owner rulings, 5 November 2026, after the SG169 re-check found that "ejection" can be heard by a Hockey Canada or CARHA reader as the separate Game Ejection, which "does not trigger any automatic suspension" (HC 4.8 Note 1):
1. **Name the penalty.** For Hockey Canada and CARHA, say game misconduct, major and game misconduct, or match, never the bare noun "ejection". Multi-book lines may keep a verb ("ends your game"). Capitalised "Game Ejection" is reserved for the count-triggered penalty (HC 4.8(b), CARHA 32(a)).
2. **Add Hockey Canada.** The next-game facts line repeated across the corpus names HC 4.8(c).

## What changed
- **The next-game facts line** is now one canonical line in 19 identical copies (299/300): "A game misconduct can cost the next game: USA Hockey 404(b) any one, at least two after a second major in a game (403(b)); Hockey Canada 4.8(c) one in the last 10 minutes, overtime or postgame, at least the next game or seven days; CARHA 32(d) a major's, a game or more, bar an accidental high stick". Revision 1 said "two" after a second major. Two authors caught that it understated 404(b)'s "minimum two-game suspension", and it was corrected before review.
- **Rules-summary prose** on several pages gained the Hockey Canada 4.8(c) sentence. The sentence says "a game misconduct" rather than "one", because "one" followed "a second major" and could be heard as that (safety-reviewer).
- **CARHA 32(c)** (a Rule 46 abuse-of-officials or unsportsmanlike game misconduct in the last 10 minutes, overtime included, costs at least the next game) was added at mental_game :569 and team_play_and_culture :278. **Hockey Canada 4.9(b)** (gross misconduct, same late-game minimum) was added at team_play :278.
- **"Ejection" renamed** at Hockey Canada and CARHA sites across all 30 pages, among them facts lines, Common Mistakes and Key Takeaways (core_principles KT10, breakouts KT13, zone_entries, center). Capitalised "Game Ejection" is used only for HC 7.6(a)/4.8(b) and CARHA 32(a) counts.
- **Fixes from review (cheaper first):**
  - special_teams facts :1113: "Mandatory game misconduct" dropped the five-minute major (HC 8.5(b), CARHA 52(b)). It now reads "Mandatory major and game misconduct"; :1115 likewise.
  - breakouts KT13: "a major, or a game misconduct and a suspension" capped the price below USA Hockey's match. It now reads "or end your game and bring a suspension".
  - offensive_zone_play facts :922: "a boarding minor doubles" was narrower than 49(b). It now reads "a minor into boards doubles".
  - Census misses fixed: time_and_space :126, defender :342/:488, winger :105, core_principles :249/:263, game_management :177/:921/:923/:927/:955.
  - Wording: breakouts :331 grammar; equipment :813 "gross misconduct, which sends you to the dressing room".
- **Left as is, with the reason:** defender :342 does not add the 32(d) ban, because its accidental-high-stick limb escapes 32(d) even when it injures. USA Hockey "ejection" uses are left (the ruling covers Hockey Canada and CARHA).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (technique, foundation, positions, off-the-ice) | Nothing cheaper or false in the wave. Pre-existing omission of CARHA 32(c) and HC 4.9(b) (prose added at two pages; facts line has no room, in the plan). Census misses at defender, winger and core_principles. All fixed |
| rules-verifier (systems, hockey-iq) | FIX cheaper: special_teams :1113, breakouts KT13. FIX narrower: offensive_zone_play :922 49(b). Miss: time_and_space :126; game_management outside the list. All fixed |
| safety-reviewer, also standing in for content (4 rendered) | special_teams :1113 cheaper (as above). "One" antecedent at five sites. breakouts KT13 and :331. equipment :813 gloss. All fixed. 0 LOST in 28 files |
| rules-verifier, narrow re-check of all repair text, also covering the safety direction | 0 FIX; every site PASS, nothing cheaper than HEAD. Three LOW notes recorded in the plan |

### C11
- Five authoring agents made every edit, on disjoint file sets. The coordinator wrote the canonical line's text as a brief (checked by every author against the books, corrected once on their finding), the plan and this record.
- The post-review edits use the reviewers' wording or the stricter direction, and all were covered by the narrow re-check.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all 30 files. Spoken "Important." counts unchanged in every author's render.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 (two halves plus the re-check) |
| D2 Exceptions | CARHA 30(a) Note and 32(d) accidental high stick; HC 4.8 Note 1; 62(b) Note |
| D3 Divergence | Per-book naming; multi-book lines keep verbs |
| D4 Citation integrity | 4.8(c), 4.9(b), 32(c), 32(d), 403(b)/404(b) verified on disk |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None added |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | "Minimum two-game", "10 minutes", "seven days" from the books |
| D9 Summary layer | KTs and Common Mistakes renamed with their bodies; layer tests by authors |
| D10 Key-facts layer | 19 canonical copies identical; other facts lines compared limb by limb with HEAD |
| D11 Reader safety | safety-reviewer plus the re-check's safety direction |
| D12 Read-aloud | rules_primer, special_teams, offensive_zone_play, winger, center rendered; the canonical line heard aloud (dense but not misleading) |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes; no marker lost. No site-reviewer (declared) |

## What this method could not have found
- Hockey Canada or CARHA prices worded without "eject" (e.g. "thrown out", "gone", "sent off"), or naming the book only in an earlier sentence or a heading.
- Pages outside the 30 that build on the old "An ejection can cost" opener without repeating it.
- Chunk distance for listeners on the pages not rendered.
- Next-game routes outside the books on disk (league regulations, tournament rules).
