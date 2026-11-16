# W356: blue-line label spot-check and amber density after W355 (16 November 2026, review only)

**Files:** project/plans/OPEN_ITEMS.md; this record. No content or site change.

## Source
- **Blue-line labels.** The plan row "Labels crossing the blue line (worklist, SG59)" asked for an optional site-reviewer spot-check of blue-line labels at phone width, after the owner's thicker LABEL_HALO (0.16, 9737b01a).
- **Amber density.** W355 (record `w355_long_paragraphs_split_2026-11-16.md`) added 1–3 inline ⚠️ runs per file to keep each split half's spoken warning. Nobody had viewed the result.

## Method
site-reviewer, built site at HEAD content (f79b2596).
- **Browser:** Playwright Chromium; the Chrome extension refused localhost.
- **Viewports:** 400×812 at DPR 2, and 1440×900.
- **Themes:** light and dark, set via `colorScheme`.
- **Pages:** 10.

## Findings
**Blue-line labels: pass, row closed.**
- **Census:** `getBBox` over every built SVG found 177 labels in 97 diagrams overlapping a blue-line stroke. The earlier estimate was 194 in 99, from a cruder width estimate.
- **Spot-check:** 29 confirmed crossings in 11 diagrams, checked in all four cells. Every label is legible, and the 0.16 halo separates every crossing letter. Two blue-on-blue labels were among them: "the default" and "if carried".
- **Sizes at 400px:**

| Diagram | Width | Label | Halo | Blue line |
|---|---|---|---|---|
| Half-rink | 371px | ~12px | ~1.6px | ~3.6px |
| Full-rink | 640px minimum, scrolling inside its container | ~17px | ~2.4px | — |

- **Ruling:** no checker is needed.

**Amber density after W355: no defect introduced.**
- At 400px the touched sections show 0–3 runs per screen. No panels, no bare glyphs.
- W355 shortened or kept every run it touched.
- Four screens are over 50% amber. All four are caused by runs that existed before W355:
  - **special_teams "A hit from behind":** runs at :1105 (807 chars, 543px) and :1122 (826 chars, 543px). Screen s1 is 75% amber, and the two runs repeat the Hockey Canada head-contact ladder.
  - **offensive_zone_play "A hit from behind":** a 502-char run (341px).
  - **defending_the_rush hounding CM bullet:** 558 chars (428px).
- At that length the amber stops working as emphasis. The instruction still leads in black bold.

**Outside the brief:** offensive_zone_play :1322's Sources trailer carries a 1,690-char inline amber run (874px at 400px) beginning "The phrase 'push off' was searched on the same day…". It is an amber-styled method note, and possibly the page narrating its own research (non-negotiable 6 / D6).

**Console and network:** no console errors or warnings and no page errors on the 10 pages. No off-origin requests.

Evidence (screenshots, contact sheets, `census.tsv`, `amb/amber.json`) is in the session scratchpad and is not kept in the repository.

## What this method could not have found
- **Real devices:** no real phone, Safari or Firefox; no OS text-size differences.
- **Labels:** 11 of the 97 diagrams were spot-checked. Labels crossing red lines and goal lines were not measured.
- **Amber share:** a geometric proxy for density, not an eye test.
- **Truth:** nothing here checks whether any rendered sentence is true.
