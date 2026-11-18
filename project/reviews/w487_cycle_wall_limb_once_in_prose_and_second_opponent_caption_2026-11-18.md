# W487: the cycle section stops repeating "never turn your back, never duck" in prose after the facts line and both captions say it, and the you-cannot-beat-two caption says "second opponent" (18 November 2026)

**Files changed:**
- **Content:** systems/offensive_zone_play.md
- **Diagrams:** site/src/diagrams/puck_handling.mjs, site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan rows:** From W467 (3), From W465 (4) and From W464 (5).
- **Authors:** two agents.

## What changed
| Site | Before | Now |
|---|---|---|
| ozp :404 (chunk 022) | "…matters more than winning the puck.** ⚠️ **Never turn your back to anyone coming at you, and never duck.** Get your **skates parallel to the wall** and take it on your **forearm and hip**, head up and chin off your chest. **Never the point of your shoulder** — …" | "…matters more than winning the puck.** Get your **skates parallel to the wall** and take it on your **forearm and hip**, head up and chin off your chest. ⚠️ **Never the point of your shoulder** — …" (the ⚠️ moves onto the shoulder clause; the paragraph keeps one marker) |
| you-cannot-beat-two caption | "the teammate whose ice the second **defender** has left" | "…the second **opponent** has left" |

**Why the ozp paragraph changed.** The rendered section voiced "never turn your back… never duck" four times:
- chunk 020: the facts "Never:" line;
- chunk 021: the oz-cycle-rim caption and the oz-cycle-reverse caption, each under its own "Important.";
- chunk 022: this paragraph.

The paragraph also carries two things nothing else on the page does: the USA Hockey "tip of your shoulder" quotation and the gloves-on-the-glass last resort. So only the repeated sentence was cut. The author's first pass also cut "head up and chin off your chest". The safety reviewer had that restored, because this paragraph is the one about wall contact and should carry the neck limb itself.

**Why the caption changed.** The F glyph is deliberate: the host says only "a second defender is arriving", in the general sense. But in the legend, "defender" means the triangle glyph. The caption's own opening ("a second opponent is closing") and the describe text already said "opponent".

## Premises refuted / closed without edit
- **From W464 (5), bcb :2082 heading "undersells its body".** False. The heading names exactly what the bullet teaches. The 69.3/69.4 contact rules are in the next bullet (:2083), which has its own heading.
- **From W465 (2), practice-the-line "unsourced".** Closed by the coordinator earlier this wave. The caption says "coaches warn", and host :391 labels it "a coaching caution, not a measured finding".

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | **CLEAR**, after rendering chunks 019–023 and checking each limb per chunk. All six posture limbs reach the listener in chunks 020–021 before the paragraph. The captions are owned by this page (owner field, no other host, literal strings, not shared constants). No paragraph lost its last marker (75 = 75). One Minor: restore "head up and chin off your chest" in the paragraph. Applied. The caption change is not safety-relevant. |

The you-cannot-beat-two edit was not reviewed by a diagram reviewer. It is one word, and it aligns the caption with its own first sentence, its describe text and the glyph legend.

### C11
The coordinator wrote no content.

### D15
- **Rendered page:** the ⚠️ still leads a strong run, so it renders as inline amber; checked in the built HTML.
- **Callout checks:** `--bare` = 0, and `--panels --file` = 0.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist is newer than every source file.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts reports no change. check_caption_pairs reports 0.
- **Marker pairs:** check_marker_pairs reports 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D10 | not engaged, apart from D9 |
| D9 Summary layer | the limb is carried by the facts line and two captions in adjacent chunks |
| D11 Reader safety | safety-reviewer, with a per-chunk limb table |
| D12 Read-aloud | four voicings cut to three; the neck limb kept in the contact paragraph |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | "opponent" vs the legend's "defender" |
| D15 Rendered site | inline amber verified in dist |

## Found, not fixed
- The cycle section's "never turn your back / never duck" now lives in the facts line and the two captions. A future caption trim must keep it, or restore it to the paragraph.
- Other diagram modules were not swept for the same "defender" vs glyph clash.

## What this method could not have found
- Real synthesised audio.
- Listening behaviour, for example someone jumping straight to chunk 022.
