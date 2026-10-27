# SG102: three diagram majors left over from HEAD (27 October 2026)

**Files:**
- site/src/diagrams/risk_management.mjs
- site/src/diagrams/defensive_zone_coverage.mjs
- site/src/diagrams/forechecking_systems.mjs
- site/scripts/lib/rink.mjs
- project/plans/OPEN_ITEMS.md

No `content/` file changed.

## What changed and why
1. **cross-ice-in-your-own-end.** F1's label "seals the wall" was about 22 ft wide. The gap beside F1 is about 18 ft, so the placer moved the label to the top of the circle. Its long leader ran past the puck and the start of D1's pass, where it read as a second pass, and the label sat nearer D1. The label is now **"seals D1"**, directly under F1, with no leader.
   - The author first tried "the seal". The diagram reviewer rejected it: it is a noun with no object, and the glossary (`language_and_glossary.md:384`) uses "seal" for a goalie's post seal. "seals D1" is a verb, matching the caption's "sealed" and the glossary's "sealing", and it names the player being sealed.
   - breakouts.mjs keeps "seals the wall".
   - This label's relaxed-placement warning is gone (17 → 16).
2. **dz-walk-down-man.** Tag 2 (W's route) sat on the carry line and read as step 2 of the carry. It is now `badge: {along: 14, side: 'right'}`, under W's own route.
3. **forecheck-212.**
   - Tag 1 was clipped by F1's halo. It is now `badge: {along: 6.5, side: 'right'}`, beside the arrowhead.
   - "takes the weak side" sat nearer F3 and nearly stacked with "high, middle". It is now `labelHint: [-20, -2]`, level with F1 on a short leader.
4. **rink.mjs.** An explicit `badge.along` may now reach 0.8 of the route; the default still stops at the midpoint. Both forecheck-212 route 1 (9.2 ft) and dz-walk-down-man route 2 (along 14 of 25.1 ft, k = 0.558) depend on it. The comment names both, after the reviewer's Minor 1.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Diagrams | diagram-reviewer | **dz-walk-down-man:** SHIP. **forecheck-212:** SHIP. **rink.mjs:** SHIP, with a comment fix that has been applied. **cross-ice-in-your-own-end:** FIX, wording only ("the seal" → "seals D1"), applied. Regression: rendered all 204 diagrams from a HEAD worktree and from the working tree; exactly three SVGs differ. Every number in the code comments was measured against the built SVG. forecheck-122 tag 2 left as it was: acceptable, kept open as a minor. |
| C10 render | site-reviewer | SHIP. 8 host placements × 1440/390 px × light/dark, 32 cells: 0 text overlaps, 0 clipped, no sideways scroll, no console errors, no failed or off-origin requests. The Chrome extension refused localhost, so the check ran in headless Chromium over CDP. It was declared. |

### C11
The coordinator made three edits after the reviews; no reviewer has re-read them, so the commit gate reads them:
- the label string `'the seal'` → `'seals D1'`, and its two comments;
- the rink.mjs comment now names dz-walk-down-man.

The rebuild shows "seals D1" at (88.8, −14.5), the same position the reviewer checked for "the seal". The coordinator looked at the rebuilt PNG: the label sits under F1, clear of the pass and the boards. The new label is about 0.5 ft wider than the reviewed one. The site review saw "the seal", not "seals D1".

## Dimensions
| Dim | Status |
|---|---|
| D1–D6 | n/a: no rules, citations or negative claims changed. |
| D7 cardinal rule | Not affected. |
| D8 numeric ownership | n/a |
| D9–D10 summary and facts layers | n/a: no content change. Captions unchanged. |
| D11–D12 safety, read aloud | n/a: labels are not voiced. |
| D13 folklore | n/a |
| D14 structure, links | check_links and site check-links pass (56 pages). |
| D15 render | build-diagrams exit 0 (16 relax warnings). Full site build with the absolute npm: exit 0 through check-links. dist contains "seals D1". |

### Mechanical checks
check_geometry, check_absolutes, check_zones, check_secrets, check_links, check_facts and check-arrivals all exit 0. Exit codes were read directly.

## What this method could not have found
- Whether a newer player reads "seals D1" as intended. No reader who did not already know the answer has seen it.
- The site review rendered "the seal", not "seals D1". It ran in headless Chromium, not the user's Chrome, and not Safari or a real phone.
- A difference that appears only in PNG rasterisation (the regression diff compared SVGs).
- Tactical correctness of the three diagrams beyond the edited elements.
