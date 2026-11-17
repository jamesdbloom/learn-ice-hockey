# W405: letting a label sit beside its own player's route was built, measured and rejected (17 November 2026)

**Files:** project/plans/OPEN_ITEMS.md and this record. `site/scripts/lib/rink.mjs` was changed, measured and **reverted to HEAD**. No content, diagram or site file changed.

## Source
From W404 (1). The proposal was to tag each route's reserve samples with the labelled player the route starts on, so the placer's existing `owner` skip would let a label sit beside its own route. W404 had predicted this would fix two of three wrong-player labels.

## What was done (diagram agent)
- **Mechanism.** The change took effect. `placeLabels`'s `collides` skips a reserve box only when its `owner` equals the label's `name`, and every other box still blocks.
- **Corpus-wide.** All 204 diagrams were rendered before and after. 56 diagrams changed and 67 labels moved. Labels sitting over a route went from 2 to 36 of the 67, and 34 landed on their own player's arrow. Examples include oz-royal-road ("the passer" onto the pass line), dump-soft-area ("has to turn and retrieve" across the retrieval arc), faceoff-strong-side-dot, pp-131, pp-walk-down, oz-half-wall-options, rush-2-on-2 and forecheck-212. Only 3 of the 56 were viewed by eye; the rest rests on the route census.
- **The targets.**
  - faceoff-dzone-tie-up's "nearest body" moved beside the D, but onto the D's own arrow.
  - scan-before-a-wall-reception's "retrieving" moved above the D, onto its pass line and across the goal line.
  - faceoff-dzone-alignment-other-circle's D has no route, so nothing changed.
  - A hint grid run with the change in place, rejecting any slot over a route, found no clean slot for any target.
- **Decision.** The agent reverted rink.mjs, and a full re-render matches the built tree exactly.

## Conclusion
W404's diagnosis was wrong. The player's own route was not taking a free slot; it was the only open ground near the player, and it should stay reserved. For these three D's there is no slot that is near the player, off the paint and off routes. What is left needs an owner call:
- move the player or the route;
- shorten the wording;
- give rink.mjs two-line labels;
- or drop the label and let the caption carry it.

## Not reviewed
Nothing shipped, so no reviewer, build or site check was run. The finding rests on the agent's census and three 1× views. The scratch evidence (pre/post SVGs, census, hint grids) is in the session scratchpad and is not reproducible after the session ends; the reverted diff is described above.

## Found, not fixed (plan rows)
1. The three wrong-player labels from W403 (1) and W404 need an owner call (the four options above).

## What this method could not have found
- The route census samples path vertices with an approximate box. It can miss an arrowhead crossing, or count a crossing the halo would leave legible.
