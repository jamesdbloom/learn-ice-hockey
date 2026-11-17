# W401: "the most dangerous ice" now names one region per sentence, in the regions owner's wording, across eleven pages (17 November 2026)

**Files** (all under content/):
- foundation/on_ice_communication.md
- positions/center.md
- positions/goaltender.md
- systems/breakouts.md
- systems/defending_the_rush.md
- systems/defensive_zone_coverage.md
- systems/faceoffs.md
- systems/game_management.md
- systems/offensive_zone_play.md
- systems/special_teams.md
- technique/shooting.md

Also changed: project/plans/OPEN_ITEMS.md, and this record. No diagram changed.

## Source
From W397 (1), content-reviewer m5. About fifteen sites gave "the most dangerous ice" (or "highest-danger") to different regions:
- breakouts :52 gave it to the house;
- special_teams :119 gave it to the slot;
- defensive_zone_coverage :215 gave it to the inner slot.

The brief is scratchpad/w401/brief.md. Three authors had disjoint file sets; two more files (on_ice_communication, center) were added after review.

## The rule applied (owner: content/foundation/rink_map.md)
| Region | Owner wording |
|---|---|
| Slot | "it is where most goals are scored from" (:361/:363) |
| Low or inner slot | "The scoring evidence points here more than anywhere else — but it counts a share of goals" (:381). The only region where a superlative is supported. |
| House / home plate | "the working definition of a 'high-danger chance'" (:397). High-danger is defined by where the shot is taken from. |
| Anywhere else | Plain wording, with no ranking. |

Each sentence keeps its instruction at full strength.

## What changed
| Site | Now reads (span) | Region |
|---|---|---|
| special_teams :119 | "…the tops of the circles — where most goals are scored from." | slot |
| special_teams :582 | "it protects the dangerous ice in front of the net absolutely" | slot and goalmouth (unranked) |
| game_management :77 (facts) | "Risk: Collapsing everyone to the net front concedes screened shots, and rebounds and scrambles in the house — the high-danger chances" | house |
| game_management :85 | "…concedes screened shots, rebounds and net-front scrambles — rebounds and scrambles are high-danger chances, and a screen makes even a point shot hard to stop." | house |
| game_management :131 | "…treat these as among the most dangerous chances in open play…" | chance type; now matches defending_the_rush |
| game_management :645 | "…for two seconds you are 4-on-5." | — (the bullet already says defensive zone) |
| game_management :1278 | "…4-on-5 for two seconds in your own end." | own zone (unranked) |
| faceoffs :81 (facts) | "Risk: A defensive-zone draw lost cleanly gives a set opponent a set play and a quick shot while you are stationary" | — |
| faceoffs :91 | "A clean loss gives a set opponent with a set play a quick shot — from the point or the top of the circle, often through a screen — while your five skaters stand still, facing the wrong way." | point or top of the circle (the page's own :408/:443/:545) |
| faceoffs :421 | "…the closest body to the slot, where most goals are scored from." | slot |
| breakouts :52 | "It is the high-danger area" | house |
| defensive_zone_coverage :41, :58 (facts), :68 | "The high-danger chances come from…" | house (one claim, three layers) |
| defensive_zone_coverage :47 | "…puts an opponent where most goals are scored from, in front of…" | slot |
| defensive_zone_coverage :215 | unchanged | inner slot; the superlative is supported |
| goaltender :845 | "…a turnover close to your own net." | defensive zone (unranked) |
| goaltender :896 | "a tap-in from the slot, where most goals are scored from —" | slot |
| on_ice_communication :392 | "…a turnover deep in your own zone." | sibling copy of goaltender :845 |
| offensive_zone_play :845 | "…and you arrive where most goals are scored from." | slot |
| offensive_zone_play :914 | "The puck is loose in high-danger ice." | rebound |
| shooting :374 | "…a rebound in the low slot, where more goals are scored than anywhere else —" | low slot (owner's share-of-goals superlative) |
| defending_the_rush :32, :73 | "…among the most dangerous [chances] in hockey" | chance type; the cited tracking supports "very", not "the most" |
| center :64 | "protect the slot, where most goals are scored from:" | slot |
| center :311 | "The centre operates in the slot and directs the attack." | slot (claim carried at :330) |
| center :330 | "In the slot — between the two faceoff circles, from the top of the circles down to the front of the net, where most goals are scored from." | slot; was "the high-danger area", the house's label |

**Left alone.** These rank players, lanes, passes, time or situations, not regions:
- special_teams :798/:804/:957
- goaltender :1381
- offensive_zone_play :43/:821
- defending_the_rush :214/:285/:301
- breakouts :842
- defensive_zone_coverage players and sticks

**Captions.** No hosted caption ranks a region. breakout-d-to-d's describe text ("the dangerous ice") is unranked, and rush-backcheck-lanes ranks a player.

## Reviews
**content-reviewer.**
- **First read.** No Critical, no Major. Minors:
  - m1: on_ice :392, an uncaught sibling.
  - m2: center :311, uncaught.
  - m3: game_management :131 outranked the page it links to after defending_the_rush was softened.
  - m4: screens are not high-danger by the owner's location definition.
  - m5: a lost own-zone draw yields a point or top-of-circle shot, not high-danger ice.
  - m6: game_management :645 repeated itself.
  - m7: dtr :73 "highest-danger" is the owner's location word.

  The reviewer's answers to authors' questions:
  - "Low slot" for shooting :374 is the owner's own mapping (rink_map :381 sits under "The low slot").
  - dtr's ranking clause is the corpus's own framing, not a quotation (Sources trailer :1196), so softening it needs no refetch.
- **Final read.** CLEAR on all seven, plus:
  - the author's extra center :64 fix;
  - the author's added "the" at game_management :77, so "high-danger" attaches to rebounds and scrambles and not to screened shots.

  Minor at center :330 ("the high-danger area" for the slot). Applied.

After the final read, the author's report showed that :311 and :330 now voiced "where most goals are scored from" twice in one chunk. :311 was trimmed (readable beats defendable), and the claim stays at :330 in the same chunk (render 018).

No rules-verifier or safety-reviewer was dispatched. No rule, contact or safety claim changed, and every instruction ("never pass through", "keep a body there", "don't change") is unchanged.

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, an author correction upheld in the final read, or the author-proposed :311 trim. That trim deletes a clause the next sentence restates, so it adds no claim.

## Checks after the last content edit
- **Build.** A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 05:13:55, and no content or site/src file is newer.
- **Checkers.** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update reports no change. check_callout_flow --bare reports 0.
- **check_marker_pairs.** 0 LOST and 0 SPLIT on all eleven files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3, D5, D6, D11 | not engaged: no rule, provenance, negative-existence or safety claim changed |
| D4 Citation integrity | dtr's ranking clause is not a quotation; softened, so no refetch needed (content-reviewer) |
| D7 Cardinal rule | no coaching choice stated; instructions unchanged |
| D8 Numeric ownership | every region claim now matches rink_map :361/:381/:397; shooting :374's superlative is scoped to the low slot's share of goals |
| D9 Summary layer | layer tests per file; defensive_zone_coverage's house claim reads the same in three layers, faceoffs in two, game_management in two pairs |
| D10 Key-facts | game_management :77, faceoffs :81, defensive_zone_coverage :58 read voiced alone |
| D12 Read-aloud | every file rendered by its author |
| D13 Folklore / terminology | "high-danger" reserved for the house, as the owner and glossary :338 use it |
| D14 Structure, terminology, cross-links | check_links and the build |
| D15 Rendered site | site-reviewer on the 05:13:55 build (below) |

**D15:** site-reviewer, eleven pages, Playwright Chromium at 400×812 DPR 2 (light and dark) and 1440×900 light.
- Every worst 400px window is unchanged from its previous value: on_ice 46.7, center 36.6, goaltender 46.7, breakouts 38.5, dtr 39.1, dzc 43.9, faceoffs 43.4, game_management 39.2, ozp 47.9, special_teams 48.4, shooting 43.9.
- Amber-run counts are consistent with a text-only wave.
- Nothing is over 50% at 400px. 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.
- The 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
1. **Region rankings worded without the swept vocabulary.** Phrases like "prime scoring area", "the money area" or "the key ice" were not searched.
2. **special_teams :582 "absolutely".** The wedge+1 protects that ice "absolutely", an overclaim left in place.
3. **passing_and_receiving :717 "a turnover in the most dangerous place to have one".** Rhetorical; not checked against an owner.
4. **"A screen makes even a point shot hard to stop"** (game_management :85). Unsourced coaching craft, undisclosed.
5. **"Often through a screen"** (faceoffs :91). Stated for the zone system; not tested under man-to-man faceoff alignment.
6. **Whether the NHL.com article itself ranks rush chances first** (dtr :32/:73). Optional source-verifier refetch.

## What this method could not have found
- A sentence whose meaning depends on the old "most dangerous ice" premise without using the words.
- Real devices, and a screen reader.
