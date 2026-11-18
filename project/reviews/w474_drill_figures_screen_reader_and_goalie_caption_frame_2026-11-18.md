# W474: drill figures hide their labels from screen readers and stop reading their description twice; the goalie angle caption says whose right it means (18 November 2026)

**Files changed**
- site/src/drills/lib/draw.mjs
- site/scripts/build-drills.mjs
- site/src/diagrams/goaltender.mjs
- site/src/data/diagrams.json (rebuilt)
- project/plans/OPEN_ITEMS.md and this record

No `content/` file changed.

## Source
- **Plan rows:** From W473 (1) and (2).
- **Authors:** two agents.

## Drill figures (practising_on_your_own, 72 SVGs)
1. **Labels.** draw.mjs now exports `hideLabels(svg)`, the same regex as rink.mjs, and applies it where `svg()` returns.
   - This first version left 99 labels exposed: the legends that figure.mjs and office_stick.mjs append to drills 07 and 08 after `svg()` has returned.
   - build-drills.mjs now also calls `hideLabels` once per SVG, beside `prefixIds`, so any module that appends text later is covered too.
   - Result: **1,064 of 1,064** `<text>` elements carry aria-hidden, in the built SVGs and on the dist page. `<title>` and `<desc>` are never hidden.
2. **Description read twice** (site-reviewer; already in HEAD). The root SVG had `aria-labelledby="t d"`. That made its accessible name the title plus the whole description, and its description the same `<desc>` again.
   - It now has `aria-labelledby="t" aria-describedby="d"`. `prefixIds` rewrites both.
   - Dist check: 72 of 72 use the new pair, and 0 still use the old two-id form.
3. **Nothing visible changed.** Built SVGs are byte-identical apart from these attributes, and drills.json is byte-identical to HEAD.

## goalie-playing-the-angle caption (voiced)
- Before: "An opposition shooter at the top of the right-hand faceoff circle"
- After: "…at the top of the faceoff circle on the goalie's right" (+3 words)
- **Check:** the defended net is at the right and the goalie faces left, so the top of the picture is the goalie's right. Confirmed against the PNG. The describe was anchored the same way in W473.
- **Other captions:** no other goaltender caption names a side without saying whose.

## Reviews
| Reviewer | Result |
|---|---|
| site-reviewer | Chrome accessibility tree: 0 text children on all 72 drill SVGs; labels and legends still drawn. Found the double-read, now fixed. goaltender: new caption renders; 0 bare, untreated or panels; ⚠️ count equals HEAD; worst window unchanged. |

**Reviews not run, and why:**
- **Diagram or rules review:** not needed. The caption edit anchors a side word that was already correct and touches no rule or safety limb, which matches the W472/W473 commit-gate rulings.
- **Screen-reader check after the double-read fix:** verified from the markup (dist counts above), not in a fresh accessibility-tree read.

### C11
The coordinator wrote no text or code.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 17:57:00.
- **Gates:** check_links --quiet, check_facts, check_absolutes (certifies), check_secrets pass. check_counts: no change. check_caption_pairs: 0 violations.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D13 | not engaged; D14 covers side naming |
| D15 Rendered site | site-reviewer, accessibility tree |

## Found, not fixed
- Side words that contain no left or right ("far side", "near post", "strong side") have not been audited against their geometry. Carried from W473.
- No screen-reader listening pass yet, with VoiceOver or NVDA. This needs the owner.

## What this method could not have found
- How real screen readers behave, rather than Chrome's accessibility tree.
