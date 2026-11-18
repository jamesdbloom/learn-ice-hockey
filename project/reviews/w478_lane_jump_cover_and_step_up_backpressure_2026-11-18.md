# W478: a lane jump needs a teammate covering the ice you leave, and a step-up needs backpressure — the summaries now say what the bodies and owners say (18 November 2026)

**Files changed**
- **Content:**
  - hockey-iq/scanning_and_anticipation.md
  - positions/defender.md
  - systems/defending_the_rush.md
- **Diagrams:**
  - site/src/diagrams/defender.mjs
  - site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan row:** From W469 (2) and (3), checked first in a read-only content review.
- **Authors:** three agents.

## Content review
**No real contradiction.**
- center.md's "never leave the slot empty in your own end" agrees with scanning's near-certain read plus cover.
- A defender's neutral-zone step-up is not a lane jump. The corpus defines the two separately (defender :420; neutral_zone_systems :359/:392; time_and_space :424–432).

**Three wording gaps found.**
1. Scanning's summary layers said a lane jump needs "support behind you". For a centre in the high slot, the weak-side defender at the goalmouth is literally behind him, so the slot could still be left empty. The body (:495) already says "covering the ice you leave".
2. Defender's step-up section was conditioned on confidence alone. The owners condition it on backpressure and say to back off as the last defender: defending_the_rush :754, :768, :779 and neutral_zone_systems :355, :377, :460.
3. "Behind you" was used in two senses on defender and on defending_the_rush:
   - backpressure, meaning forwards tracking back behind the play;
   - nobody between you and your goalie.

## What changed
| Site | Now |
|---|---|
| scanning Key focus :25, facts :476, KT11 :622 | "with a teammate covering the ice you leave" (KT11 is 47 words) |
| defender facts :404 Read, :407 Never | step up only if you can win the puck **and your forwards are tracking back**; as the last defender, or when unsure, back up and deny a clean entry |
| defender body :414, :418 | the same conditions. ":414: Otherwise — and always when you are the last defender, where a miss is a breakaway — back up under control." The press-versus-trap coaching choice is kept. |
| defender :9, CM :1014 | "a teammate above the puck to cover for you" (the page's own height vocabulary) |
| defending_the_rush facts :736, body :754 | "backpressure — forwards tracking back behind the play" |
| defender-step-up caption | adds "with your forwards tracking back" (still 150 words) |
| defender-step-up describe | "…no third defender and nobody else. Any of your forwards tracking back would be behind the carrier, beyond the left-hand edge of the picture." This stops the screen-reader text, which said "no backchecker, nobody", from contradicting the caption. |

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | **First read:** the census and the findings above. **Confirmation:** CLEAR on all three changes. Each is in the tactic register, nothing contradicts the owners, and no summary layer still states an unconditioned step-up (CM :1035 and the KTs state costs only). The describe/caption Minor is fixed. |
| site-reviewer | All three pages at 400 light: 0 bare, untreated or panels; ⚠️ counts equal HEAD; 0 console errors; worst windows unchanged. |

No rules or safety review was needed. Every edit is tactical text, and no rule or safety limb changed.

### C11
The coordinator wrote no content or caption text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing.
- **Gates:** check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets pass. check_counts: no change. check_caption_pairs: 0 violations.
- **Marker pairs:** check_marker_pairs: 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 | not engaged |
| D7 Cardinal rule | step-up default and alternative named; press/trap choice kept |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | scanning KF/facts/KT; defender facts, body and CM; owner alignment |
| D10 Key-facts | four facts lines |
| D11–D13 | not engaged |
| D14 Structure, terminology, cross-links | "backpressure" adopted from neutral_zone_systems |
| D15 Rendered site | site-reviewer |

## Found, not fixed
- defending_the_rush :796 uses both senses of "behind you" in one sentence, one for the step-up and one for the pinch. The contrast is internal to that sentence and is not contradicted by the new text.
- The acts were not swept under other names ("cheat", "gamble", "shoot the gap").

## What this method could not have found
- Audio: whether the scanning Key focus and KT11 reach a listener intact.
- Whether coaches outside the corpus treat a step-up on a wall pass as a lane jump.
