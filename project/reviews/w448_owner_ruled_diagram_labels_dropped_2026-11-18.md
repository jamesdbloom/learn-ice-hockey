# W448: two diagram labels that could not leave rink paint are dropped on the owner's ruling (18 November 2026)

**Files changed:**
- site/src/diagrams/zone_entries.mjs
- site/src/diagrams/neutral_zone_systems.mjs
- site/src/diagrams/defending_the_rush.mjs (a comment only)
- project/plans/OPEN_ITEMS.md
- this record

No content, caption or describe text changed.

## Source
- **Owner ruling, 18 Nov 2026**, answering the From W440 owner calls:
  - Drop the dump-and-the-trapezoid label "only inside the marked lines".
  - Drop the nz-left-wing-lock label "has the puck".
  - Keep "triangle" on pp-spread-5on3, so no change there.
- **Author:** one diagram agent.

## What changed
| Diagram | Change |
|---|---|
| dump-and-the-trapezoid | The goalie's label "only inside the marked lines" and its leader are removed. The caption still states the rule word for word: "the marked area is the only ice behind the goal line on which they may play the puck". The stale comment "the label says what is actually judged" now reads "the caption now carries what is actually judged". |
| nz-left-wing-lock | The opposition D's label "has the puck" and its leader are removed. The puck dot stays beside the D. The describe text reads "their defenceman, who has the puck behind their own net". |
| rush-gap-and-angle | Comment only. The word-gap placement holds in librsvg but not in the browser's system font (From W440 (5)). |

The severe label-on-paint count fell from 4 to 2. The two that remain, "if carried" and "carried offside", are known to be harmless.

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer | **dump-and-the-trapezoid: BETTER.** The old leader ran through the crease area, where "marked lines" could be read as the crease. **nz-left-wing-lock: BETTER.** The old label sat beside our centre, not the opposition D, so it read as the wrong team having the puck. **rush comment: accurate.** One Minor (the stale comment) was fixed. |
| site-reviewer | HEAD render vs the published SVG: only the removed text and its one leader each are gone, and no other label moved by any coordinate. Chromium with the site fonts, on all three host pages (zone_entries, forechecking_systems, neutral_zone_systems), at 400 and 1440 in light and dark: renders correctly, 0 console errors. The left-wing-lock puck dot touches the opposition D's glyph. |

### C11
The coordinator wrote no diagram text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, with check-links passing. dist/index.html is 11:21:28; the newest source, zone_entries.mjs, is 11:20:35.
- **Checks:** check_links --quiet, check_absolutes (caption layer), check_geometry and check_secrets all pass. check_label_paint --severe reports 2. check_zones and check-arrivals are unchanged (author's run).

## Dimensions
D1–D13 are not engaged: no rule, caption or content text changed.

| Dimension | Coverage |
|---|---|
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed
The dump-and-the-trapezoid describe text does not itself state the rule; only the caption does. The caption is the shown and voiced layer, so this is optional.

## What this method could not have found
- Whether a first-time reader connects the goalie to the trapezoid rule without the label.
- Whether the small puck dot is noticed at phone width.
