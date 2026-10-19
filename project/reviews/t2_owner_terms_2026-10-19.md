# T2 (19 October 2026): owner-decided terms across the corpus and diagram captions

This round applies the owner's decisions of 19 October 2026 (memory: project_owner_terms_site_oct19; OPEN_ITEMS item 8). The brief is in the session scratchpad at t2/brief.md. Ten content agents worked on disjoint files, one more handled the diagram captions, and a harmonisation agent ran last.

## Decisions applied

- **British spelling throughout.**
  - "centre" and "defenceman" in prose and in link TEXT.
  - The page title `# Center` → `# Centre`, plus the podcast.json, podcast-principles.json, structure.json and og.json titles.
  - Paths stay center.md and /positions/center/.
- **"goalie" in teaching prose.** goaltender and goalkeeper are kept in:
  - rule names (goaltender or goalkeeper interference, goalkeeper's restricted area, privileged area);
  - quotations;
  - page-name link text ("Goaltender");
  - claims about a book's own word ("names goalkeepers in terms");
  - published standard titles.
- **"off side" (two words) for the hand sense.** The rule sense is untouched.
- **"house default" renamed** to one family:
  - "this guide's standard coverage", for the low zone collapse;
  - "standard forecheck", for the 2-1-2;
  - "standard five-man setup", for the offensive-zone structure;
  - "standard system", for both together.
  - Each site is scoped as this guide's assumption where it is voiced alone. The DZC heading became "— the standard coverage" and the getting_started anchor was updated with it.
- **"penalty box"** in prose. NHL and IIHF "penalty bench" quotations are kept.
- **Glossary:**
  - a new "Goalie" headword, giving goaltender and goalkeeper as the rulebook words, as in *goalkeeper interference*;
  - the Offside entry gives "off side" for the hand sense;
  - rink_map :570 and :617 language notes updated ("The American spellings are…").
- **Diagram captions** (31 modules): the same swaps, plus the T1 forms they never received (face-off → faceoff ×3, rule-sense off-side → offside ×2, bodychecking → body checking ×4). Rebuilt.

## Words changed per document (word-diff additions)

| Document | Changed words |
|---|---|
| foundation/core_principles.md | 19 |
| foundation/language_and_glossary.md | 74 |
| foundation/on_ice_communication.md | 24 |
| foundation/rink_map.md | 74 |
| foundation/rules_primer.md | 32 |
| foundation/uk_rules.md | 16 |
| getting-started/getting_started.md | 6 |
| hockey-iq/playing_without_the_puck.md | 81 |
| hockey-iq/puck_support_and_spacing.md | 7 |
| hockey-iq/risk_management.md | 22 |
| hockey-iq/scanning_and_anticipation.md | 30 |
| hockey-iq/time_and_space.md | 22 |
| off-the-ice/conditioning_and_recovery.md | 4 |
| off-the-ice/equipment.md | 21 |
| off-the-ice/how_to_watch_hockey.md | 18 |
| off-the-ice/mental_game.md | 1 |
| off-the-ice/practice_and_development.md | 5 |
| off-the-ice/team_play_and_culture.md | 25 |
| positions/center.md | 93 |
| positions/defender.md | 28 |
| positions/goaltender.md | 73 |
| positions/switching_positions.md | 29 |
| positions/winger.md | 82 |
| reading-diagrams/reading_ice_hockey_diagrams.md | 7 |
| systems/breakouts.md | 33 |
| systems/defending_the_rush.md | 15 |
| systems/defensive_zone_coverage.md | 17 |
| systems/faceoffs.md | 10 |
| systems/forechecking_systems.md | 56 |
| systems/game_management.md | 34 |
| systems/neutral_zone_systems.md | 7 |
| systems/offensive_zone_play.md | 64 |
| systems/special_teams.md | 41 |
| systems/zone_entries.md | 41 |
| technique/body_contact_and_battles.md | 78 |
| technique/passing_and_receiving.md | 4 |
| technique/puck_handling.md | 13 |
| technique/shooting.md | 84 |
| technique/skating.md | 3 |

## Review

A content-reviewer checked every one of the 1,638 changed spans by script, and read all 176 changed `Rule:` facts lines by hand.

**Mechanically clean:**
- no change inside a quotation, trailer or Notes on verification section;
- link targets unchanged except three deliberate heading-plus-link pairs;
- ⚠ 309 removed and 309 added; 0 lost markers.

The uk_rules British-book paraphrases (:200, :255, :420) were checked against IIHF 69.2/69.4/63.2(I) and EIHL Casebook 5.1, and they hold.

**Findings (all applied, then re-reviewed CLEAR):**
- **M1:** bare "standard" read as a claim about what most teams play. The most exposed site was scanning_and_anticipation :306, on the opponent's forecheck, which contradicted breakouts' "not a claim about what most teams play". It is now scoped as "this guide's standard…" there and at 9 further voiced-alone sites.
- **m2:** faceoffs :561 rule name restored to "goalkeeper's restricted area".
- **m3:** playing_without_the_puck :628, labelled "(the NHL's words)", restored to "goalkeeper's vision".
- **m4:** "standard setup" collided with faceoffs' "**The standard setup:**", so offensive_zone_play now says "standard five-man setup".
- **m6:** the glossary example became "goalkeeper interference", the NHL/IIHF/PWHL/USAH form.
- **m7:** skating's verification note was restored; "returning-goalie clause" was made consistent.

**Coordinator errors this round (recorded in OPEN_ITEMS):**
- a false premise about where DZC carries "house default";
- a rink_map sketch that would have said PWHL and USAH write "defenseman" (they never do);
- briefs that did not warn that a word regex hits link paths;
- a scratch directory shared by two agents.

**Agent link slips:** two agents briefly changed link paths or anchors (`goalie.md`). Both were repaired; check_links passes.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | No rule claim changed. All 176 changed Rule: lines were read against their meaning; three British paraphrases were checked at source |
| D2 exceptions | Out of scope |
| D3 divergence | Out of scope |
| D4/D5 citations | No quotation altered (script-verified); a near-quotation and a rule name were restored |
| D6 negatives | Out of scope |
| D7 cardinal rule | "standard" scoped as this guide's assumption (M1) |
| D8 numeric ownership | No figures |
| D9 summary layer | Swaps applied in every layer except trailers |
| D10 facts | Swaps shorten or keep length; scoping additions within cap; check_facts passes |
| D11 safety | No penalty or contact claim changed; 0 lost markers |
| D12 read-aloud | Not rendered; "goalie" and "goalkeeper" read the same aloud |
| D13 folklore | Out of scope |
| D14 structure | 9 headings changed; 3 linked ones changed together with their links; check_links and site check-links pass |
| D15 site | Diagrams rebuilt; full site build after the final edit; --bare 0; a site-reviewer confirmed "Centre" in the H1, title and nav, and the term census in dist |

## Gates (after the final content edit, no pipes)

- check_facts, check_links --quiet, check_absolutes (408 caption units), check_geometry, check_secrets and check_counts all pass.
- check_marker_pairs: 0 LOST across all 39 files. Its 3 SPLIT HALF candidates (glossary :27, breakouts :958, zone_entries :362) are false positives, because none of those units had a marker in HEAD.

## Open (plan rows)

- **offensive_zone_play:** "five-man setup" sits beside "five-man rotation" in adjacent facts lines (:285/:286). Optional: rename it by its difference ("two-on-the-line setup").
- **breakouts :575:** an Action facts line still says a bare "standard low zone collapse" (conditional, so acceptable).
- **Six unlinked headings changed their public anchors.** External bookmarks would land at the top of the page.

## What this method could not have found

- **Book wording without quote marks** that now carries "goalie".
- **How "off side" and "offside" sound aloud** to a listener.
- **Whether a listener moving across documents** hears "standard" as industry practice.
