# W471: forecheck-212 drops its body-checking list after a safety ruling, breakout-reverse stops calling the player's left wall "right", and check_caption_pairs checks the text a pair relies on (18 November 2026)

**Files changed**
- **Diagrams:**
  - site/src/diagrams/forechecking_systems.mjs
  - site/src/diagrams/breakouts.mjs
  - site/src/data/diagrams.json (rebuilt)
- **Scripts (coordinator, between waves):** scripts/check_caption_pairs.py
- **Also:** project/plans/OPEN_ITEMS.md and this record
- No `content/` file changed.

## Source
- **Plan rows:** From W470 (1)–(3).

## forecheck-212: 238 → 179 words
**Safety ruling (safety-reviewer, all five hosts rendered).** The CHECKING_BARRED_WHERE enumeration can come out in every host.

| Host | Ruling |
|---|---|
| forechecking_systems | Voices the full list one chunk earlier (:341). |
| center | Voices the may-you-check prompt nearby. |
| winger, game_management, how_to_watch_hockey | Voice nothing nearby, but the cut is still safe. how_to_watch_hockey :130 hands this law to Forechecking Systems. |

Why the cut is safe without a nearby list:
- The caption teaches no check.
- The prompt changes behaviour; a list does not.
- The list was incomplete: no IIHF 101.1 women's limb, no PWHL. A reader not on it could infer "allowed".

**Now reads:** "Find out first whether you may body check in this game — the answer can change per fixture, not just per division. It is commonly barred at younger ages, in girls' and women's hockey and in non-check adult leagues."
- The author closed the reviewer sketch's negation seam with a full stop.
- The ⚠️ "Go hard at the carrier, never through them", the onus and the instruction are unchanged.
- The find-out phrase is unchanged byte for byte.

**Rules check: OK.**
- USAH 604(a) (12U and below, all girls'/women's, all non-check adult).
- HC 7.3 (U13, female).
- IHUK U10/U12 and WNIHL "non-checking".
- CARHA 49(a).
- IIHF 101.1 and PWHL 52.1 allow only a restricted, puck-directed check in women's play. "Commonly" is therefore accurate, and the error runs safe: a player told to find out plays more carefully than needed.
- The optional +20 words naming the IIHF/PWHL constraint were declined.

**Constant.** CHECKING_BARRED_WHERE is kept; forecheck-roles-rotate is now its only user. The brief said 2-3-lock also used it; that was refuted, since W458 removed it there.

**Dependents.** forecheck-212-stacked and forecheck-122 relied on 212 carrying the list. They now rely on its find-out prompt plus summary. The safety ruling's reasoning (no check taught, the prompt suffices) applies to both. check_caption_pairs reason strings are updated.

## breakout-reverse: "working up the right wall" → "working up the wall"
- "Right" was the picture's top wall, from the `half-wall:right:far` anchor. At this end of the rink that is the LEFT wall of a player skating up ice.
- The corpus names walls from the player's side (neutral_zone_systems lanes, faceoffs "right-shot D on the left boards", the glossary).
- The host says only "the wall". The labelled glyph shows which one.
- The caption is now 147 words.
- No other built caption names a left or right wall/corner/boards (coordinator census of diagrams.json).
- The `describe` alt-text strings carry the same picture-side naming in several modules; filed below.

## check_caption_pairs gains CARRIES (coordinator, between waves)
**The gap.** Adjacency alone would let a later trim of the required caption silently remove what the dependent dropped. The W470 gate named this.

**The change.**
- `CARRIES` lists key phrases each required caption's BUILT text must keep; currently forecheck-212's "find out first whether you may body check in this game".
- A missing phrase prints `MISSING TEXT`.
- Self-test: 3 new cases, all pass.
- Live run: 1 phrase checked, 0 missing, 0 violations.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | Ruling as above, per host, with the minimum safety block. |
| rules-verifier | "Commonly barred" OK against six books. |
| site-reviewer | 9 pages at 400 light/dark on the 17:08:59 build: 0 bare/untreated/panels, ⚠️ counts = HEAD, 0 console errors, worst windows unchanged. forecheck-212 is 20.4% amber and still sits directly above stacked on both hosts. "Right wall" is gone. |

A diagram-reviewer was not run. Neither change alters what is drawn: 212 lost a rule enumeration, and reverse lost one side-word, which was verified against the PNG by the author.

### C11
The coordinator wrote no caption text, and edited check_caption_pairs.py (tool and reason strings) between waves.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing; dist/index.html 17:08:59.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets pass.
  - check_counts: no change.
  - check_caption_pairs: 0 violations, 0 missing text.
  - check_callout_flow --bare = 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 604(a)/(b), HC 7.3, IHUK junior/WNIHL RoC, CARHA 49(a), IIHF 101.1, PWHL 52.1 |
| D2 Exceptions | IIHF/PWHL women's puck-directed checking |
| D3 Cross-book divergence | the summary clause |
| D4 Citation integrity | pair reason strings updated |
| D5–D8 | not engaged |
| D9 Summary layer | caption vs five hosts (safety ruling) |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer ruling |
| D12 Read-aloud | negation seam closed |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | wall-side convention aligned to the corpus |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W471)
1. **`describe` alt-text left/right naming.** Strings in several diagram modules name walls and corners by picture side, e.g. "deep in the right corner", "W1 is on the right boards", "left boards" for the bottom wall. At a `:far` end that is the reverse of a player's own side. md_to_speech does not voice `describe`, but screen-reader users hear it. Census `grep -n "right wall\|right corner\|right boards\|left boards\|left corner" site/src/diagrams/*.mjs`, then fix per module.
2. **The caption programme is closed.** Six captions are over 150 words at their floor: forecheck-roles-rotate 208, faceoff-dzone-alignment 185, forecheck-212 179, forecheck-pinch 179, the-trapezoid 164, angle-into-the-corner 160. forecheck-122 at 158 makes seven.

## What this method could not have found
- Whether a PWHL or IIHF women's player reads "commonly barred" as "barred for me".
- Real synthesised audio.
