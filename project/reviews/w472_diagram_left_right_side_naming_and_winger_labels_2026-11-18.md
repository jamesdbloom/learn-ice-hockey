# W472: diagram alt text no longer names walls and corners from the picture's side, and six diagrams' winger labels move to the attacker's own side (18 November 2026)

**Files changed**
- **Diagram modules:**
  - breakouts.mjs
  - zone_entries.mjs
  - winger.mjs
  - practice_and_development.mjs
  - positions.mjs
  - playing_without_the_puck.mjs
  - special_teams.mjs
  - center.mjs
- **Build:** site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record
- No `content/` file changed.

## Source
- **Plan row:** From W471 (1).
- **Authors:** four agents, plus a fifth for center.mjs, which the diagram-reviewer found outside the wave.

## The defect
Anchors such as `corner:right:far` use the picture's own frame, where `:right` is the top of the picture. Text written from those anchors called the top wall "the right wall".

The corpus names a side from the player skating toward the net they attack:
- **Neutral zone systems:** the lanes are "left wall, middle, right wall".
- **Faceoffs:** "the right-shot D on the left boards".

So when the attack runs left to right, the top of the picture is the attacker's **left**. Every attacking-end "right" written from a `:right` anchor named the wall backwards. Screen-reader users hear `describe`, the diagram's alt text.

## What changed
**Alt text (`describe`)**
- Breakouts: about 30 sites, including faceoff circles, which the census grep missed.
- Zone entries: 13 sites, including "right wing lane".
- Winger and practice: 9 sites.
- Positions, playing without the puck and special teams: 16 sites in 11 diagrams.
- **Wording.** Each site now uses picture terms, "top" or "bottom" (the file's existing "upper side of the ice" convention). "Your left as you attack" is added where it helps.
- **Kept on purpose.** Own-end pictures with your own net at the right keep "right", because there the top really is your team's right. Picture-orientation phrases such as "your own zone at the left" were also kept.
- **Diagram-review minors applied:**
  - "top" now means one thing per sentence: two-on-one, pp-spread-5on3 and pp-2-3.
  - pk-wedge-plus-1 no longer mixes frames.
  - pp-overload now says "top side", not "top wall".
  - Three dump carriers sit about 20 ft off the boards, so they are now "on the top/bottom side of the ice", not "near the wall".

**One caption**
- screen-the-goalie-sightline: "the puck at the right point" became "the puck at the point". The D stands at the top point, which is the shooter's own left, and no host names a side.

**Label swaps (picture changes; no glyph moved)**
- winger-corner-and-the-empty-point: RW→LW. The text now says "Your left winger… on the winger's own side".
- winger-offensive-zone-patches: RW↔LW. This now agrees with winger.md's "your side's faceoff circle".
- center.mjs, four diagrams with RW drawn on the attacker's left. Constants were renamed and the header now notes the convention:
  - centre-oz-slot-options
  - centre-nz-arrive-behind-the-puck
  - centre-nz-get-it-to-the-outside
  - centre-nz-deciding-from-the-middle
- centre-out-of-the-middle was correctly left as RW, because its own net is at the right.

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer | **CLEAR** on 45 PNGs viewed.<br>• The label swaps are correct, with no host contradiction.<br>• 30+ alt-text edits are true of their pictures.<br>• All kept own-end sites agree.<br>• The two-on-one judgement call is upheld.<br>• Four minors were raised and applied.<br>• **Major outside the wave:** four center.mjs inversions, fixed.<br>• Confirmation: all four relabels are correct, nothing else moved, and the minors are true. |
| site-reviewer | **Swaps:** legible at 400 and 1440, not clipped, no collisions; the `<desc>` text, as seen in the accessibility tree, carries the new wording.<br>**Pages:** 18 host pages at 400 light, plus center, risk_management, zone_entries and special_teams at 400 light/dark. 0 bare/untreated/panels; ⚠️ counts = HEAD; 0 console errors; worst windows unchanged. |

No rules or safety review was needed. No rule claim and no safety limb changed. The one caption edit removed a side word only, and the hosts name no side.

### C11
The coordinator wrote no diagram text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 17:26:26.
- **Gates:** check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets pass.
  - check_counts: no change.
  - check_label_paint --severe: 2, unchanged and not in this wave.
  - check_caption_pairs: 0 violations, 0 missing.
  - check-arrivals: 0 hard.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D8 | not engaged |
| D9 Summary layer | caption, alt text and host prose checked for side words |
| D10–D13 | not engaged |
| D14 Structure, terminology, cross-links | side-naming convention aligned to the corpus |
| D15 Rendered site | site-reviewer: accessibility tree, label legibility |
| Diagrams | diagram-reviewer, two passes |

## Found, not fixed (plan row From W472)
1. **Out-of-wave alt-text census.** Many describes outside this wave still name walls by side: game_management, scanning_and_anticipation, puck_support_and_spacing, goaltender, shooting, faceoffs, defending_the_rush, passing_and_receiving, rink_map_and_glossary and switching_positions. Most are own-end and probably correct; the attacking-end ones need the same per-site test. Use the broad pattern: `(right|left)([- ]hand)? (wall|corner|boards|side|circle|faceoff circle|half-wall|point|winger|wing lane)`.
2. **A glyph-label census** of RW/LW (and W1/W2 where a side is implied) against anchors and attacking direction, in every module. Labels with no side word in the text are invisible to a text census.
3. **SVG text labels are exposed to the accessibility tree** after the `<desc>`, e.g. "G LW D D D C". Consider `aria-hidden="true"` on the label group in the renderer.
4. **Mixed frames in alt text.** Picture terms ("top wall"), hockey terms ("top of the circle") and player terms ("your left") now sit side by side. A real screen-reader listening pass is needed.
5. **Full-sheet diagrams at 400 px.** The two centre neutral-zone diagrams put their wingers just past the visible edge of the sideways-scrolling container. This predates the wave and is a design call.
6. **Opponents in your own end** are named by your team's side ("opposition forward in the right corner"). This is consistent but implicit.

## What this method could not have found
- How a screen-reader user hears the new alt text.
- Inverted labels that no text mentions, outside the RW/LW glyph census.
