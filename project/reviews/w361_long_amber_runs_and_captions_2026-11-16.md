# W361: long amber runs and caption warnings cut to their instruction; IIHF head scope in shooting (16 November 2026)

**Files:**
- content/technique/shooting.md
- content/systems/forechecking_systems.md
- site/src/diagrams/forechecking_systems.mjs
- site/src/diagrams/faceoffs.mjs
- site/src/diagrams/defensive_zone_coverage.mjs
- site/src/data/diagrams.json (rebuilt; captions changed only for dz-collapse-corner, faceoff-dzone-alignment, forecheck-roles-rotate, forecheck-122 and forecheck-131)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave covers W360 plan rows (1) and (2) (record `w360_late_hits_iihf_captions_and_census_fixes_2026-11-16.md`):
- amber runs and caption warnings that are too long to work as emphasis on a phone;
- the forechecking facts line :750, which put the head caveat on all five books;
- the optional wording at forechecking :1077;
- the forecheck-212 comment drift the W360 gate noted.

## What changed
A caption's amber runs from its first ⚠ to the end of the caption, so the only way to shorten a caption's amber is to end the caption on the instruction and put the glyph there. Authors did not run build-diagrams; the coordinator ran it once.

**shooting.md (author A)**
- **:536 body run.** Closing `**` moved only. Amber 434 → 93 characters: "Driving into their back is checking from behind, and no book prices it at a bare two minutes,".
- **CM :947.** Closing `**` moved. Amber 392 → 97 characters, plus a new 20-character run "⚠️ **It can end your game**" added after the safety review.
- **IIHF head scope at :536, :914 and :947** (rules-verifier, then safety). IIHF 48.1 "supersedes all similar actions regarding hits to the head and neck" and 48.2 allows a minor, so "no book prices it at a bare two minutes" was untrue for an IIHF hit to the head. Each site now:
  - scopes the floor "under the IIHF and Hockey Canada … off the head";
  - gives the IIHF on-head instruction in the next clause: "plan on the major and game misconduct anyway under the IIHF" at :914 and :947, and "(under the IIHF, a major and game misconduct; under Hockey Canada, at least 7.5's minor and game misconduct)" at :536.

**forechecking_systems.md and .mjs (author B)**
- **:339.** The shortening (393 → 187) was **reverted to HEAD** after the safety review rated it Major (see Reviews). It is byte-identical to HEAD.
- **facts :750.** Now reads: "Never: Hit a carrier's back; take the puck, the ice or angle them off it — a hit from behind ejects under the NHL, PWHL and CARHA, and the IIHF and Hockey Canada off the head; on the head, plan on it". "on a flush" was dropped to fit the line. That widens the scope in the safe direction, and the next Rule line keeps the flush context.
- **:1077.** "only where that major is for an injury (NHL 56.4–56.5, PWHL 57.4–57.5)".
- **forecheck-122 and forecheck-131** (identical literals). Amber 880 → 184 characters. The amber is now the onus instruction and "Never finish into the back of a player facing away." Scope and tariffs come first as plain text. Word changes:
  - "no minor for that" → "no minor for checking from behind";
  - after review, "The NHL, PWHL and IIHF have no minor … mandatory in the NHL and PWHL, …" (PWHL 43.2/43.5).
- **forecheck-roles-rotate.** Amber 608 → 223 characters. "; and CARHA in every game" was added to its barred-checking list (CARHA 49(a)), mirroring forecheck-212.
- **forecheck-212.** Comment only: it now records the dropped "and".

**faceoffs.mjs and defensive_zone_coverage.mjs (author C).** No word changed in either; sentences were re-ordered and the glyph moved.
- **faceoff-dzone-alignment.** Amber 776 → 228 characters. The amber is now "If you are not taking the draw, keep your skates and stick behind your own hash mark… that satisfies every book." Hosts: faceoffs, center, defender, winger, game_management, rink_map, how_to_watch_hockey.
- **dz-collapse-corner.** Amber 812 → 203 characters. The amber is now "Arrive on the puck… never into their back. ⚠️ And pin the puck, not the player…". The "arrives late and unseen" hazard and the mandatory-match tariff come immediately before it as plain text.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Nothing W361 changed is wrong. Confirmed: <ul><li>NHL/IIHF 43.2 for the 122/131 word change</li><li>CARHA 49(a) and no checking division</li><li>:750 against NHL/PWHL 43, CARHA 53 and its Note, IIHF 48.1 and HC 7.6</li><li>:1077 against 56.5 and 57.5</li><li>word-multiset compares for the moved-only units</li></ul>Findings, all applied: <ul><li>the :750 ellipsis did not parse</li><li>the PWHL was missing from 122/131</li><li>the IIHF head scope in shooting (pre-existing overstatement in the harsh direction)</li></ul>It judged :339 not a closed list on the general USA Hockey 608(a) floor. |
| safety-reviewer | **Major at forechecking :339.** The shortened amber listed five ejecting books and dropped USA Hockey in the very scene the paragraph teaches: a hit at the boards, which USA Hockey prices at a mandatory major and game misconduct under 608(b) ("head first into the boards"). Fixed by restoring HEAD's extent (a safety judgement on the specific scene, which overrides the general-floor reading). Minors: shooting CM :947 "It can end your game" (glyph added); :750 parse. Judged acceptable: the dz-collapse-corner reorder, the faceoff order (not heard as permission), and the 122/131/roles-rotate scope-first order. |
| safety-reviewer, final read | **Major at shooting :914**, created by the IIHF head-scope edit. The new parenthetical told an IIHF reader the head case may be a bare minor, and the "plan on it" counterweight went only to Hockey Canada; the IIHF counterweight sat chunks away at :926. Fixed with the reviewer's text. Minor at :536: "the off-head price" had no IIHF referent; fixed with the reviewer's text. Everything else was clear: :339 restored, :750, 122/131 PWHL, :947. |

### C11
The coordinator wrote no content. All edits made after the final read use the reviewer's prescribed text verbatim (:914, :536).

## Checks after the last content edit
- **Diagrams:** `build-diagrams.mjs` ran once (only the 5 captions above changed).
- **Site build:** a full `npm run build` (absolute binary) ran after the final edit at 13:53:38. It exited 0 and ran through check-links. shooting/index.html was written at 13:59:07, and `find content site/src/diagrams -newer` that file returns nothing. The built shooting page carries the final :914/:947 IIHF clause (2 hits).
- **Checkers:** all of the following then passed:
  - check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets;
  - check_counts --update (no change);
  - check_callout_flow --bare: 0;
  - check_caption_pairs: 0 violations;
  - check_marker_pairs: 0 LOST and 0 SPLIT on both content files (shooting 66/66, forechecking 93/93);
  - check_readability: 0 paragraphs over 1,200.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every changed claim and the word changes |
| D4 Citations | rule text quoted from sources/ |
| D8 Counts | "every book", "the NHL, PWHL and IIHF", "in every game" checked book by book |
| D9 Summary layer | no Key Takeaway changed; the facts :750 change was read voiced alone |
| D11 Reader safety | safety-reviewer twice (all units, then every post-review edit) |
| D12 Read-aloud | rendered SSML for shooting, forechecking_systems, defensive_zone_coverage, faceoffs, center, how_to_watch_hockey and rink_map. Captions are still one "Important." paragraph each; marked units are unchanged |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | See below. |
| D5–D7, D10, D13 | not engaged |

**D15 detail.** A site-reviewer viewed the 13:51 build: eight pages (shooting, forechecking_systems, faceoffs, center, game_management, defensive_zone_coverage, rink_map, how_to_watch_hockey), using Playwright Chromium at 400×812 DPR 2 and 1440×900, in light and dark.
- **Rendering:** every changed run forms span.warn-inline. There were 0 bare glyphs, 0 panels, 0 console errors in 32 loads, no off-origin requests and no horizontal scroll.
- **Worst window at 400px containing each site:**

| Site | Before | After |
|---|---|---|
| forecheck-131 | 76.2% (page worst) | 14.9% |
| forecheck-122 | — | 14.1% |
| forecheck-roles-rotate | — | 21.9% |
| faceoff-dzone-alignment, center | 68.5% (page worst) | 24.1% |
| faceoff-dzone-alignment, game_management | 94.6% (page worst) | 28.1% |
| dz-collapse-corner | 97.0% | 24.2% |
| shooting CM | 52.6% | 29.7% |
| shooting body | 60.8% | 50.0% (now set by two pre-existing neighbouring runs) |

- **forechecking :339 (unchanged):** 47.9%.
- **1440px caption windows:** they still read 77–90% on the usual metric, but the screenshots show the caption's one amber line under the sticky audio player and no visible amber. This is a measurement artefact; the 400px figures are the useful ones.
- **The two final shooting edits (:914, :536):** plain-prose word additions, with no glyph or bold boundary moved. They landed after that pass and are in the 13:59 rebuild (grep above). They were not re-viewed in a browser.

## Found, not fixed (plan rows)
- **forechecking :339 run (396 characters).** It cannot be shortened without a word change, because the amber must keep USA Hockey's boards limb.
- **Pre-existing long caption runs:**
  - game_management "Defending against 6-on-5" (534 characters; now that page's worst, 57.8% at 400);
  - faceoffs "A hit on the player fetching a rim" body run (513 characters; 56.5%);
  - forechecking captions: stacked 2-1-2 (384), 2-3 (387), full-ice press (412) and pinch (417);
  - forechecking "A hit from behind" body run (449 characters; 49.7%);
  - defensive_zone_coverage "A hit from behind" runs (301 and 165 characters; 57.8%);
  - how_to_watch_hockey wedge+1 caption (358 characters).
- **shooting facts :508.** "never a bare minor" overstates for an IIHF hit to the head (in the harsh direction). The line is at 298/300.
- **Same IIHF scope gap elsewhere.** Other documents saying "Hockey Canada, off the head" may need the IIHF too (body_contact_and_battles, goaltender, the forechecking body); not swept. The forechecking :750 / :339 "ejects under … the IIHF" wording overstates 43.3, which is discretionary and reckless-only (W360(3)).
- **Lists that say where checking is barred.** The forecheck-212 and roles-rotate lists omit IHUK Junior U10/U12, the Women's NIHL and USA Hockey 604(a)'s local opt-out.
- **The shooting Sources-trailer amber note (402 characters, :1076).** It is a provenance note, not a hazard, and may not need a glyph.
- **The amber-share metric** needs a 1440 caption variant that reflects what is visible.

## What this method could not have found
- A reordered caption sentence whose pronoun now binds differently. Word-multiset compares cannot see it, and only 122/131 and roles-rotate were read for it.
- Whether IIHF 43.1's "in any manner" or 48.1's supersession governs a hit from behind to the head. No IIHF Situation rules on it.
- The three caption hosts not rendered: defender, winger, game_management.
- Real devices.
