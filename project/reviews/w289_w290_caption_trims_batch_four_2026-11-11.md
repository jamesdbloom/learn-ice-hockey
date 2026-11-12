# W289–W290: voiced diagram captions trimmed, batch four (11 November 2026)

**Files:**
- **W289:** site/src/diagrams/forechecking_systems.mjs, site/src/diagrams/breakouts.mjs
- **W290:** site/src/diagrams/faceoffs.mjs, site/src/diagrams/defending_the_rush.mjs
- site/src/data/diagrams.json (build product; only the five captions below differ, and no `describe` changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
The owner set readability and diagrams as the priority on 8 November. This batch is the fourth of the longest voiced captions, after SG207–SG209. At the start, 23 captions ran over 1,000 characters.

Every caption is voiced as one spoken paragraph. The method (CAPTION_BRIEF.md) was the same as before: a limb may be cut only where every host already voices it, at the same tier or fuller, in the caption's chunk or the next. Each ⚠️ sentence stays word for word.

Two authors each owned two modules. No content/ file changed.

## What changed
| Caption | Before | After | Cut (and where the host voices it) |
|---|---|---|---|
| forecheck-131 | 1194 | 924 | The line-of-three convention, the chip past the line, "not a beginner system", and the passive meaning of the name. All four are in forechecking_systems.md facts chunk 027 and body chunks 028–029. |
| breakout-wheel | 1000 | 758 | "It needs a step…", the far-side forechecker trap, and the IIHF "do not count on it" sentence. These are in breakouts.md facts chunks 020–021 and body chunk 022, where the IIHF line is fuller ("in Britain"). |
| faceoff-where-the-draw-goes | 1069 | 1021 | Wording only. "instead" was restored on review. |
| faceoff-strong-side-dot | 1015 | 905 | The picture description was reworded. The book-by-book dot list is verbatim. "That difference" was restored on review. |
| rush-2-on-1 | 1022 | 914 | Wording only. Both hedges and the close-on-the-puck exception are kept, because goaltender.md does not voice them. |

**Left whole**, because some host voices none of their limbs near the marker. Only the three forechecking captions carry a "LEFT WHOLE" comment in their module (forechecking_systems.mjs). For the other three, the reasons are recorded here, from the authors' reports. breakout-reverse: goaltender.md voices none of D2's call, the momentum read or the counter. faceoff-dzone-alignment: center, defender and game_management voice no encroachment rule beside the marker. rush-gap-and-angle: no limb is voiced near the marker in all four hosts.
- forecheck-212 (1400)
- forecheck-122 (1188)
- forecheck-roles-rotate (1121)
- breakout-reverse (1101)
- faceoff-dzone-alignment (1356), which has seven hosts
- rush-gap-and-angle (1065)

**⚠️ sentences:** none was touched. Every glyph sentence is byte-identical to HEAD.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×2 | Rendered every host before and after the change. A dated comment in each module names every cut and the host chunk that voices it. |
| safety-reviewer | **CLEAR. Nothing blocking.** Found every host for the five captions and rendered all six host documents. Each cut limb is voiced at the same tier or fuller within one chunk. On breakout-wheel, dropping the IIHF clause is acceptable: the caption now names only the NHL and PWHL as allowing the screen, which errs cautious, and both the facts line and the body voice the IIHF position, with "in Britain". IIHF 56.2 was checked in source. Three optional WORDING notes were applied verbatim: "instead" in faceoff-where-the-draw-goes; "That difference" in faceoff-strong-side-dot, which restores the antecedent an earlier trim had protected; and a breakouts.mjs comment corrected to "in chunk 021, before the Setup paragraph". |

### C11
The authors made the trims. The coordinator applied the reviewer's three wordings verbatim, ran the final diagram rebuild and full build, and wrote the plan row and this record.

### Checks after the last caption edit
- Full `npm run build` (absolute binary), which includes the diagram build.
- check_absolutes (408 caption and describe units), check_geometry, check_caption_pairs (3 declared dependencies, 0 violations), check_caption_echo (none of the five changed captions) and check_links --quiet: all clean.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | kept limbs are verbatim; IIHF 56.2 was checked by the reviewer |
| D4 Citations | out of scope: no citation changed |
| D5–D10 | not engaged; no content/ file and no facts line changed |
| D11 Reader safety | safety-reviewer, with host renders and chunk distance |
| D12 Read-aloud | authors and reviewer rendered every host |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | the build only; no browser check of the shorter captions |

## After the commit gate
The gate BLOCKED under C8. This record and the plan row said every left-whole caption carries a LEFT WHOLE comment, but only the three forechecking ones do. Both also said faceoff-dzone-alignment has eight hosts; it has seven. Both are now corrected. The gate ruled that no site-reviewer is needed under C10, because only caption text changed, as in SG207–SG209. It verified that diagrams.json differs from HEAD in exactly the five captions, and that every ⚠️ sentence is byte-identical. 20 captions are now over 1,000 characters.

## What this method could not have found
- A host limb voiced in words nobody searched for. The limbs were read, not tagged.
- Whether a host sentence that a cut relies on is itself wrong. The cuts inherit the host's accuracy.
- How the shorter captions sit on the page. There was no browser check.
- Pre-existing unchanged caption text. For example, where-the-draw-goes says "the attacking team" for NHL/IIHF, while strong-side-dot says "the team that did not cause the stoppage" (plan row).
