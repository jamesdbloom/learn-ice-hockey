# W473: diagram alt text in the remaining modules stops naming sides backwards, and screen readers now hear only each diagram's title and description (18 November 2026)

**Files changed**
- **Content:** off-the-ice/how_to_watch_hockey.md (:270)
- **Diagram modules:**
  - game_management.mjs
  - goaltender.mjs
  - shooting.mjs
  - puck_support_and_spacing.mjs
  - passing_and_receiving.mjs
  - faceoffs.mjs
  - defending_the_rush.mjs
  - rink_map_and_glossary.mjs
- **Renderer:** site/scripts/lib/rink.mjs
- **Build:** site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan row:** From W472 (1)–(3). The W472 broad-pattern census covered the remaining ten modules.
- **Authors:** four agents, plus one for how_to_watch_hockey.

## Alt text and one caption
- **Convention:** as W472 (brief: scratchpad/w473/brief.md, with the W473 additions).
- **Fixes:**
  - game_management, goaltender, shooting: 4 describes.
  - puck_support, passing, scanning: 7 describes. scanning_and_anticipation needed none, because its hits are own-end and correct.
  - faceoffs: 4 describes, plus the **voiced caption** of faceoff-ozone-alignment. "At the right-hand circle" became "at the circle on your left as you attack". The defensive-zone diagrams keep "right-hand", which is correct.
  - defending_the_rush: 7 describes.
  - rink_map: 2 describes.
  - switching_positions: none.
- **Judgement calls, all upheld by the diagram-reviewer:**
  - **defending_the_rush moved to picture terms.** The old "wide right" was true for the attackers but backwards for the reader's defending team. "Top or bottom of the picture" is true in both frames.
  - **goaltender keeps the goalie's own frame.** With the net at the right, the top is the goalie's right. Five describes now say so once ("the goalie's right"), following the reviewer's minor.
  - **how_to_watch_hockey :270 drops "at the right-hand circle".** It had become false for the offensive-zone diagram below it, and each caption now states its own side.
- **Reviewer minor fixed:** rush-trailer's carrier is now "level with the faceoff dot", not "below" it.

## Screen readers: SVG labels hidden
- **Change:** `hideLabels()` in rink.mjs adds `aria-hidden="true"` to every `<text>` at the return of all three emitters: rinkSvg, playSvg and legendSvg. It is safe to run twice.
- **Coverage:** 1,977 of 1,977 `<text>` elements across 204 diagrams. `<title>` and `<desc>` are never hidden.
- **No visual change:**
  - Renders are byte-identical apart from the attribute. The desc differences seen were this wave's own alt-text edits.
  - No CSS targets `[aria-hidden]`.
  - Spot screenshots are pixel-identical.
- **Chrome accessibility tree:** each `role=img` diagram now exposes its name and description and **0** text children. In W472 it exposed 6–13 label fragments, for example "1 2 G D1 D2 F1 arriving has the puck gone past".

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer | CLEAR. All 24 changed describes and the caption are true against 23 PNGs. The three judgement calls are upheld. Two minors were applied. aria-hidden cannot alter rendering. |
| site-reviewer | Accessibility tree checked on 4 diagrams: 0 text children, labels still visible. 10 pages at 400 light: 0 bare, untreated or panels; ⚠️ counts equal HEAD; 0 console errors; worst windows unchanged. |

**No rules or safety review was run.** The only caption edit corrects a side word, and no rule or safety limb was touched. This follows the W472 commit-gate ruling.

### C11
The coordinator wrote no diagram or content text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0 and ended with check-links passing.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets all pass.
  - check_counts: no change.
  - check_caption_pairs: 0 violations, 0 missing.
  - check_callout_flow --bare: 0.
  - check_marker_pairs: 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D8 | not engaged |
| D9 Summary layer | host prose near each marker checked; how_to_watch_hockey :270 propagated |
| D10–D13 | not engaged |
| D14 Structure, terminology, cross-links | side-naming convention across all modules |
| D15 Rendered site | site-reviewer: accessibility tree, label visibility |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W473)
1. **Drill figures.** `site/src/drills/lib/draw.mjs` has its own `role="img"` SVG emitter. Its 1,064 `<text>` elements across 72 drill SVGs on practising_on_your_own carry no aria-hidden. Apply the same treatment.
2. **Caption frame.** goalie-playing-the-angle's **caption** says "the top of the right-hand faceoff circle" without naming whose side. It is true in the goalie's frame, but implicit.
3. **Wording the census could not see.** Side words without left/right ("far side", "near post", "strong side") were not geometry-audited.
4. **Screen-reader listening pass.** Still needed (owner/manual); see From W472 (4).
5. **`<textPath>` would escape `hideLabels`.** None exists today.

## What this method could not have found
- VoiceOver and NVDA behaviour. Only Chrome's accessibility tree was checked.
