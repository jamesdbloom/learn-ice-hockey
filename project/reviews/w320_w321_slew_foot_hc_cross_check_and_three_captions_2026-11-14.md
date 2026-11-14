# W320–W321: the books named for a hit from behind, Hockey Canada's cross-check limb, "do not plan on a minor" for a slew-foot, and three captions shortened (14 November 2026)

**Files:**
- **W320:** content/systems/game_management.md, content/systems/forechecking_systems.md, content/hockey-iq/risk_management.md, content/systems/special_teams.md, content/positions/center.md
- **W321:** site/src/diagrams/faceoffs.mjs, site/src/diagrams/forechecking_systems.mjs, site/src/diagrams/rink_map_and_glossary.mjs, and the rebuilt site/src/data/diagrams.json
- project/plans/OPEN_ITEMS.md
- this record

## Source
W319 plan row, items (2), (3), (5a) and (6); the W303–W309 caption rows (three captions still over 1,000 characters). The authors were written on 13 November and cut off by a usage limit before review; this record covers the review and repair on 14 November.

## W320: what changed
- **game_management :185, :1176, Common Mistakes :1284, KT14 :1349.** "A hit from behind ends your game in almost every book" carried no Hockey Canada head limb. Each now uses the canonical ladder: "under the NHL, PWHL and CARHA, and under Hockey Canada unless it reaches the head, where you should plan on it anyway; under the IIHF, plan on it", with USA Hockey's own price beside it.
- **forechecking_systems :223.** "No book here prices a hit to the back at two minutes alone" was untrue of IIHF 48.2 for a head hit. It now reads "under Hockey Canada and the IIHF, only while it stays off the head", followed by "On the head, the IIHF's Rule 48 says it supersedes other rules on head contact and allows a minor (48.2), but plan on checking from behind's major and game misconduct anyway."
- **risk_management, slew-foot.** The author's IIHF changes ("at the referee's discretion" at :753 and :902, "three eject you at the floor" at :763, the named-books KT9 :986) were reverted at the commit gate; see below. What ships is the CARHA repair.
- **special_teams :1101, :1116, :1118, Common Mistakes :1261.** HC 7.6(b) and 7.7(b) both make a cross-check above the shoulders a mandatory major and game misconduct, so that limb is now stated "at every level". The "can be given if violent, must be if hurt" limb is scoped to minor and female hockey (7.6), and Junior and Senior keep 7.7(b)'s tiers.
- **center :783.** Hitting a goalie from behind gave no CARHA or USA Hockey price. It now gives CARHA 53(a)/(b) and USA Hockey 608(a)/(b)/(c).

## W321: what changed
| caption | change |
|---|---|
| faceoff-dzone-alignment | contact limb reworded shorter; coaching-choice sentence tightened |
| forecheck-212 | "Going hard at the carrier does not mean going through them" → the instruction "Go hard at the carrier, never through them"; every safety limb and the 604(a)/(b) / 7.3 list word for word |
| the-trapezoid | sentences merged; the caption now ends on the 63.2(VII) out-of-crease limit, not on a permission |

## After review (coordinator applied reviewer wordings verbatim)
- **the-trapezoid, BLOCKING (rules-verifier).** "Cover the rebound: coming out … covering the puck stays legal (IIHF 63.2(VI))" labelled the save-then-cover permission as covering a rebound. A rebound is a loose puck, and 63.2(VI) penalises a goalie who *"'races out'… and instead of playing the puck jumps on the puck"*. It now reads "Cover the puck straight off your own save: coming out to cut down the angle, making the save and covering it stays legal (IIHF 63.2(VI))."
- **faceoff-dzone-alignment (safety-reviewer).** "it gets your centre ejected" would be heard as thrown out of the game, and the non-taker scope had been dropped (a taker's own contact is a minor under HC 6.2(c) / CARHA 57(b)). It now ends "…where it usually costs your centre the dot; under Hockey Canada Rule 6.2(a) and CARHA Rule 57(a), contact by anyone but the taker always does." A code comment's pointer to the superseded August HC print was changed to `hc.txt :4586-4594`.
- **risk_management :753, :761, :900, and :754 (rules-verifier).** "No book prices a slew-foot at a bare minor" could not be stood up for CARHA. 86(b) is a discretionary match, and 86(a) tripping (*"uses their … foot … in any manner"*) has no slew-foot exclusion, unlike HC 8.6. All three sites now read "Do not plan on a minor for a slew-foot"; :754 adds "and short of it still a trip (86(a))". The claim errs harsher, so this was an accuracy fix.
- **forechecking :223 (safety-reviewer).** "says it supersedes" now names what it supersedes: "other rules on head contact".
- **center :783 (safety-reviewer, then the narrow re-check).** CARHA 53(b)'s mandatory match and USA Hockey 608(b) were added, then 608(c)'s match, so the sentence no longer stops at major and game misconduct as the ceiling.
- **Commit gate BLOCK (C7/D8): risk_management's IIHF slew-foot hunks reverted to HEAD.** They moved a dependant off its owner: body_contact_and_battles (:1726, :1847, CM :2071, KT9 :2172) and rules_primer :484 say four books eject at the floor, the IIHF included, and IIHF Situation 52.1 (`iihf_situations_2026-27.txt:3946`) says a major and game misconduct "is the only option", sending only minimal actions to Rules 51/57. So 52.2's "at their discretion" is most likely about whether the act is a slew-foot, not the price. :753, :763, :902 and KT9 :986 are back to HEAD bytes on the IIHF; the CARHA changes stay. One reading across all carriers, including W319's :900 and CM :923 ("under the IIHF, plan on it"), is a plan row.
- **Commit gate BLOCK (C10): no site-reviewer on the captions.** A site-reviewer then checked the built HTML on all 16 host pages; see Reviews.
- **Not applied:** the safety-reviewer's optional "A non-taker's contact" opening for the faceoff limb (the applied wording already scopes HC and CARHA), and its optional trapezoid wording, superseded by the rules-verifier's.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Every W320 and W321 rule claim verified in the current books (hc.txt, NHL, PWHL, IIHF 2026/27 and 2025/26, CARHA 2026, USA Hockey and Casebook). The ladder (NHL/PWHL 43.2, 43.5; CARHA 53(a); HC 7.5(a)/(e), 7.6; IIHF 43.3; USA Hockey 608) holds; HC 7.6(b)/7.7(b) cross-check limb confirmed at every level; IIHF 48.1/48.2 confirmed. BLOCKING on the-trapezoid; WORDING on the slew-foot "bare minor" claim (CARHA 86(a)/(b)) and the comment pointer; all applied. HC 8.8 is a double minor with 8.6 excluding tripping, so "no bare minor" holds there. |
| safety-reviewer (W320 content) | Nothing blocking. 0 LOST; harness 1 warn-inline per glyph, 0 asides on every changed line; KT9, CM :1284, KT14, CM :1261 and :763 rendered and self-contained. WORDING at forechecking :223 and center :783, applied. Raised the body_contact_and_battles slew-foot divergence (plan row). |
| safety-reviewer (W321 captions) | Nothing blocking; all three are finished edits; no limb, counterweight or book lost. Hosts rendered (center, defender, faceoffs, game_management, how_to_watch_hockey, rink_map, winger, forechecking_systems, goaltender, rules_primer): each caption voiced whole in one paragraph. check_caption_pairs 0 violations. WORDING on the faceoff limb, applied. |
| safety-reviewer narrow re-check | All five applied wordings OK; one further WORDING at center :783 (608(c)), applied. check_facts passes (:753 268, :754 272 chars); 0 LOST. |
| commit-gate (first pass) | BLOCK on C7/D8 (IIHF slew-foot reading diverged from the owner) and C10 (no site-reviewer on captions). Both addressed as above. Non-blocking plan-row nit (closed items still listed as open) fixed. |
| site-reviewer | All three captions match diagrams.json exactly on all 16 hosts in the built HTML; faceoff-dzone-alignment and forecheck-212 each get one `warn-inline` span, the-trapezoid none; no literal markup or escapes; amber-on-tint contrast 5.71:1 light, 8.29:1 dark from the built tokens. **The visual half was not done: the Chrome extension was not connected**, so no screenshot, 400px, light or dark check. The change is caption text only, with no CSS or layout change. |

### C11
The W320 and W321 authors wrote the wave. Every coordinator change after review was reviewer-supplied wording applied verbatim, plus a code comment recording the trapezoid change. The coordinator wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary, exit 0, check-links clean) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all five .md files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --panels --file on each (0 panels) and --bare (0);
- diagrams.json carries the final caption strings.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, as above |
| D4 Citations | one source pointer in a code comment corrected; no content citation moved |
| D5–D7 | not engaged |
| D8 Numeric ownership | engaged by the gate: the IIHF slew-foot count follows its owner (body_contact_and_battles) after the revert |
| D9 Summary layer | KTs and Common Mistakes in risk_management, game_management and special_teams |
| D10 Key-facts layer | risk_management :753/:754, voiced alone, checked by two reviewers |
| D11 Reader safety | safety-reviewer ×2 plus a narrow re-check |
| D12 Read-aloud | changed files and every caption host rendered |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, the harness on every changed marked unit, and a site-reviewer on the built HTML of all caption hosts (no browser: extension not connected) |

## What this method could not have found
- **The slew-foot claim in other documents.** body_contact_and_battles, the slew-foot owner, still says four books eject at the floor (:1726, :1847, CM :2071, KT9 :2172) and "no book prices it at a bare minor" (:1844). Paraphrases elsewhere were not swept. Logged in the plan.
- **CARHA's fallback** from 86(b) to 86(a) is a reading; CARHA does not state it. Nor is it settled whether CARHA 48(c) kicking reaches a slew-foot.
- **IIHF 52.2's discretion.** Situation Handbook 52.1 says a major and game misconduct "is the only option", so the discretion may be about whether the act is a slew-foot at all. "Plan on it" is safe either way.
- **Women's Senior** under HC 7.6 or 7.7 is not settled on disk.
- **center :783 and special_teams :1118** say the IIHF writes "no minor" for a goalie hit from behind; on the head, 48.2 allows one. This errs harsher.
- **The rendered page** was not opened in a browser: the captions' amber block, 400px layout and both themes are unseen.
- **risk_management :900 and CM :923** (committed in W319) still say "under the IIHF, plan on it" for a slew-foot while the owner says the IIHF ejects at the floor. Both tell a British reader to expect ejection; reconciling them is the plan row.
