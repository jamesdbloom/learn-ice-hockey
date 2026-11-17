# W398: three carrier glyphs drawn as a centre's `C` recoded to `F`, the notation owner's `C` note made true, a stale module comment corrected, and "bail-out" given a glossary entry with both senses and the centre-fly alternative (17 November 2026)

**Files:**
- site/src/diagrams/rules_primer.mjs (offside-faceoff-location)
- site/src/diagrams/neutral_zone_systems.mjs (nz-stand-up-at-the-line, nz-back-off-at-the-line)
- site/src/diagrams/game_management.mjs (comment only)
- content/reading-diagrams/reading_ice_hockey_diagrams.md
- content/foundation/language_and_glossary.md
- project/plans/OPEN_ITEMS.md
- this record

Glyph ids are not in diagrams.json, so it has no diff. risk_management.md was edited and reverted (see below).

## Source
These rows from From W397 were each briefed as a hypothesis:
- (2) the bail-out glossary entry
- (3) the stale game_management.mjs comment
- (4) the carrier `C` glyphs
- (5) the bail-out line break
- (6) the breakout-up label overlap

## What changed

### Carrier `C` → `F` (diagrams)
The notation owner (reading_ice_hockey_diagrams :190-196) gives letters as roles and keys a circled `C` as a centre, or a coach on published keys. W397 counted seven `id: 'C'` glyphs that are puck carriers. The three outside Puck Support were ones a reader could not tell from a centre, so they were recoded to the corpus's generic forward `F`:
- **rules_primer.mjs :185, offside-faceoff-location.** Label "carries it in".
- **neutral_zone_systems.mjs :953, nz-stand-up-at-the-line.** Opposition; label "chips past the hip".
- **neutral_zone_systems.mjs :1067, nz-back-off-at-the-line.** Opposition; label "steered outside".

The edit changed the id and added an explanatory comment. Position, label and captions are unchanged, and no caption, describe or host prose referred to "C". The diagram-reviewer confirmed `F` against the style guide's label table and viewed all three rasters.

**Refuted:** defending_the_rush.mjs :704 ("the third attacker") is our own backchecking centre, per its describe. It is not a carrier.

**Re-count (diagram-reviewer).** There are 52 live `{ id: 'C'` glyphs: 48 centres and 4 carriers, all in puck_support_and_spacing.mjs (:105, :165, :357, :450). :536 there ("the middle") is a centre.

### The owner's `C` note (reading_ice_hockey_diagrams :197-202)
- **The author's first rewrite was false (diagram-reviewer, Major).** It said the support shapes in Puck Support draw `C` as the carrier, but that page's defensive-zone-support draws `C` as the centre, with the carrier as D1. It also missed support-angles' second host, passing_and_receiving :662.
- **Shipped text (the reviewer's):**
  > "**In the support shapes drawn around a single carrier in [Puck Support and Spacing]** — one of them also appears in [Passing and Receiving] — **the `C` is simply the puck carrier**, whoever that is, and the label beside it or the caption calls that player *the carrier*. Where neither does, `C` is the centre — including that page's own defensive-zone picture, where the carrier is a defenceman."
- The rendered speech is clean (chunk 007).

### Module comments
- **game_management.mjs :518-523.** Before: "Every one of the 39 other `id: 'C'` glyphs … is a centre role". This was stale, and its recount pattern also matched comments. The text is now the diagram-reviewer's, with the author correcting the quoted describe to "One own player" (capital O, :469). The recount pattern `\{ *id: *'C'` was tested and no longer matches the comment.
- **rules_primer.mjs :181.** "HEAD's slot under C" now reads "HEAD's slot under the carrier".

### breakout-up label overlaps: accepted, not moved (option b)
- **The overlaps.** "gone behind", "the bail-out" and "second wave" each cross a painted circle line.
- **Why "gone behind" did not move.** It has no hazard-free slot under the placer's own rules; the build says so: `kept a leader across painted ice (no hazard-free slot …)`.
- **Reviewer's verdict: cosmetic.** Each label's white halo (`paint-order="stroke"`) breaks the arc rather than striking the letters, and all three are legible on a phone-scale crop.
- **Alternatives rejected:**
  - shortening to "behind" would lose the caption's read;
  - hinting it onto the goal line would put a red line through the text;
  - moving a player changes the claim.
- **Recorded as a plan row.** No tool tests label text against painted lines.

### Glossary: "Bail-out" (language_and_glossary :274)
Shipped text (the content-reviewer's, plus one author correction; the links below are retargeted to resolve from this record):
> "**Bail-out** — the safe option you fall back on when your first one closes, and the teammate who offers it. On a breakout it is usually the centre: in the conventional swing breakout the centre swings low in the middle, below the hash marks, so that when the wall is sealed and the wheel is closed there is still a short pass. Some teams play a **centre fly** instead, sending the centre up the middle early, and the weak-side winger drops in to take that low job — find out which your team plays. See [Breakouts](../../content/systems/breakouts.md#5-the-centres-swing). More loosely, *name your bail-out* means pick your plan B while the puck is still travelling, so a first option that vanishes leaves you on plan B rather than starting from zero. See [Scanning and Anticipation](../../content/hockey-iq/scanning_and_anticipation.md)."

- **The author's first entry (content-reviewer, Major).**
  - It described the alternative without naming the centre fly.
  - It never told the reader to find out which system their team plays, so it failed the cardinal rule against breakouts :235-237, :241 and :246.
  - Minors: it missed the offering-teammate sense (offensive_zone_play :468), said "breakout" twice in one sentence, did not tie "low" to the glossary's own hash-marks definition (:65), and dropped "the wheel is closed" (:652).
- **Author correction.** "The teammate who gives it to you" became "the teammate who offers it". The original reads as passing you the puck, and at :468 the passer *is* the bail-out. The content-reviewer upheld this.
- **Sources.** Every clause was checked against breakouts :236/:237/:243/:246/:638/:640/:642/:652, scanning_and_anticipation :234 and the glossary's own :65/:74.

### Not applied: the non-breaking hyphen in risk_management
U+2011 in "bail‑out" would stop the 400px wrap. md_to_speech has no SYMBOLS row for it, and `--report` lists it under "UNRECOGNISED CONSTRUCTS — these reached the SSML unhandled". The author therefore reverted the edit, and risk_management.md is byte-identical to HEAD. A SYMBOLS row is a coordinator change to scripts/ and must be made between waves. It is carried as a plan row.

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer | **First read:** C→F correct on all three (rasters viewed); owner note Major (false for defensive-zone-support, missing second host); comment recount flaw; stale rules_primer comment; breakout-up recommend (b). **Final read:** CLEAR. One optional minor: the game_management comment could add "and the puck carrier" from describe. Not applied, because the conclusion holds. |
| content-reviewer | **First read:** bail-out Major (cardinal rule), four minors, replacement supplied. **Final read:** CLEAR; the "offers it" change upheld. |

No rule, contact or safety claim changed, so neither the rules-verifier nor the safety-reviewer was dispatched.

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's own text, with two author corrections that the reviewers upheld in final reads ("offers it"; capital-O "One own player").

## Checks after the last edit
- **Build.** build-diagrams exited 0 with 204 PNGs reused. diagrams.json md5 is unchanged. A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 04:45:38, and no content or site/src file is newer.
- **Checkers.** check_links --quiet, check_facts, check_absolutes (408 units), check_geometry, check_secrets: pass. check_counts --update: no change. check_callout_flow --bare: 0.
- **Diagram checkers.** check_caption_pairs, check_caption_negations, check_zones and check-arrivals were run by the author before the comment-only follow-up: 0 hard, 8 advisory, none on these diagrams.
- **check_marker_pairs.** 0 LOST and 0 SPLIT on both content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 | not engaged: no rule, citation, provenance or negative-existence claim changed |
| D7 Cardinal rule | content-reviewer: the bail-out entry's swing-breakout centre (Major, fixed) |
| D9 Summary layer | neither page carries the term in Key focus, Overview, CM or KT |
| D11 Reader safety | not engaged |
| D12 Read-aloud | glossary and reading-diagrams rendered; the U+2011 trial reported and reverted |
| Diagrams (no D-number) | diagram-reviewer, two reads, rasters viewed; build-diagrams; check_geometry, check_zones, check-arrivals, caption checks |
| D13 Folklore / terminology | the `C` letter against the notation owner and the style guide label table; "bail-out" against both senses in the corpus |
| D14 Structure, terminology, cross-links | check_links and the build; the new anchors resolve |
| D15 Rendered site | site-reviewer on the 04:45:38 build (below) |
| D8, D10 | not engaged |

**D15:** site-reviewer, four pages, Playwright Chromium at 400×812 DPR 2 (light and dark) and 1440×900 light.
- **Glossary entry.** It renders between Backdoor and Blocker; **centre fly** is plain bold; the anchors resolve.
- **The `C` note.** It renders in item 1 with both links.
- **Inline SVGs.** All three read F with every label present, including both NZ diagrams on defending_the_rush.
- **Worst windows at 400px:**
  - glossary 34.3
  - reading-diagrams 8.3
  - rules_primer 43.9
  - neutral_zone_systems 31.2 (first measured)
- Nothing over 50% at 400px or 1440. 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.

## Found, not fixed (plan rows)
1. **U+2011 non-breaking hyphen.** Add `("‑", "-")` to md_to_speech SYMBOLS, between waves. Then apply it to risk_management's "bail‑out" (it wraps at 400px). team_play_and_culture :739's trailer already carries U+2011.
2. **No tool tests diagram label text against painted lines.** The placer tests leaders only. Known crossings:
   - breakout-up: "gone behind", "the bail-out", "second wave"
   - nz-stand-up-at-the-line: the blue line through "feet stopped"
   - nz-back-off-at-the-line: "concedes the line" on the circle
   - breakout-up: "has time" leader past the puck dot
3. **The style guide's label table says only "`C` — a centre".** Either record the four Puck Support carrier exceptions there, or recode them. This is an owner call.
4. **offside-faceoff-location mixes `A1` with a bare `F` for the other attacker.** `A2` would keep one vocabulary. Optional.
5. **"Swing breakout" has no glossary entry,** though :18, :74 and the new Bail-out entry use it (pre-existing).
6. **Full-rink diagrams scroll sideways at 400px with no "scroll" hint.** rules_primer has 3 (pre-existing).
7. **game_management.mjs :521 comment.** Could add that describe also says "the puck carrier" (optional).

## What this method could not have found
- A carrier `C` identified only by host prose, not by label or caption.
- How a TTS voice says U+2011.
- Firefox, WebKit, real devices, and a screen reader.
