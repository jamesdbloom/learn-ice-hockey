# W404: the three wrong-player diagram labels cannot be fixed with a placer hint, and the reason is in rink.mjs (17 November 2026)

**Files:** project/plans/OPEN_ITEMS.md and this record. No content, diagram or site file changed.

## Source
From W403 (1). Three labels whose leader points to their own player but whose words sit beside another player. All three predate W403:
- faceoff-dzone-tie-up: the D's "nearest body" sits beside the C.
- faceoff-dzone-alignment-other-circle: "boards-side D" sits beside the C.
- scan-before-a-wall-reception: the D's "retrieving" sits under the G's crease.

## What was found (diagram agent)
**Method.** The agent tried every `labelHint` on a 1 ft grid (dx −24…14, dy −18…18; 1,443 slots per diagram) through a preview harness. A logging copy of rink.mjs, kept in the scratchpad only, recorded why each slot was refused.

**Result.** No accepted slot reads as the D's:
- **tie-up:** 5 of 1,443 slots accepted, all 14 ft or more below the D, beside the C. Near the D, every slot is blocked by the boards, the corner arc, the winger's 7×8 reserve, or the D's own route reserves.
- **other-circle:** 23 slots accepted, all between D and C on the circle edge. The D is never clearly the nearest player (the placer wants a 2 ft lead), or the words cross the circle.
- **scan:** 12 slots accepted, all under the crease beside the G. The D is behind the net, so its own pass route's reserves block the slots above it, the boards the right, and the G's reserve below-left.

Nothing was edited and no build was run. The labels stay where they are, so readers still see them beside the wrong player; their leaders still point to the right player. The scratch evidence (grid results, scorer, logged placer) is in the session scratchpad and is not reproducible after the session.

## Not reviewed
No content or diagram changed, so no reviewer, build or site check was run. The finding is the agent's own trace, and it proposes a change rather than making one.

## Found, not fixed (plan rows)
1. **The placer blocks a label from sitting beside its own player's route.** In scan, and likely tie-up, the D's own route reserve samples block the natural slot.
   - **Proposed fix:** tag each route's reserve samples with their player, as the reserves are already tagged for painted lines, so a label may sit beside its own route.
   - **Scope:** a site/scripts/lib/rink.mjs change that re-places labels across all 204 diagrams. It needs a full before/after diff and a diagram review.
2. **other-circle "boards-side D"** may need a two-line label, or an owner decision on whether the label is needed. Its problem is the label's shape.
3. **The search was a 1 ft integer grid within ±24 ft.** Fractional hints and slots further out were not tried.

## What this method could not have found
- Whether the proposed rink.mjs change re-places other labels for the worse. It was not built.
