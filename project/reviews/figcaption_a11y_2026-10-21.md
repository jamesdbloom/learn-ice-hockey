# Diagram captions are now read by screen readers (21 October 2026)

**Origin.** On 21 Oct nzSite found that every diagram `<figcaption>` was `aria-hidden="true"`. That had been done deliberately, so the caption would not be read twice: the SVG `<desc>` held the describe text followed by the caption. In practice it meant a screen-reader user reached the caption only as the tail of a long image description. That route can't be navigated, isn't always announced, and has no amber treatment. Several captions carry safety instructions, for example nz-1-4 "pull up rather than finish on the goalie".

**Change** (site/src/plugins/remark-corpus.mjs, by a11y-cap):
- Where a diagram SVG is inlined into a page, the caption text is cut out of its `<desc>`.
- The figcaption is no longer `aria-hidden`, so the caption is read once, as the visible figcaption.
- If the caption is not found in `<desc>`, the build now fails with "Run build-diagrams" instead of skipping, so a caption can never be read twice and a stale one can never be read.
- The standalone `public/diagrams/*.svg` files are unchanged and keep the caption in `<desc>`, because they have no figcaption.

**Review: a11ySite (site-reviewer, C10).**
- Build: exit 0; check-links clean.
- Driven with CDP and headless Chrome 154, because the Chrome extension was blocked.

| Check | Result | Detail |
|---|---|---|
| 1. Visual regression | PASS | Caption screenshots were byte-identical with and without the attribute in all 16 cells (4 pages × 2 widths × 2 themes). The amber runs are intact. |
| 2. Accessibility tree | PASS | The caption appears once, under Figcaption. The image description is the describe text only. |
| 3. All built figures | PASS | 330 figures. None is missing a `<desc>`, none has an empty figcaption, and no caption remains inside a `<desc>`. |
| 4. Console | PASS | Clean, and no requests went off-origin. |

**Found, not caused by this change** (logged in the plan):
- 58 diagram titles repeat word for word inside their own captions.
- 67 titles are just the diagram id (for example "Nz 1 2 2 containment").
- rink-map-end-zone has no `<title>`, so its image has no accessible name.
- Chromium gives `<figure>` an empty name, which is expected.
- SVG `<text>` labels show up as children of the image in the accessibility tree.

**What this method could not have found:** how real screen readers behave (VoiceOver, NVDA, JAWS), and how Firefox and Safari name the figure.
