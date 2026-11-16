# W375: winger and zone_entries phone screens brought under half amber (16 November 2026)

**Files:**
- content/positions/winger.md
- content/systems/zone_entries.md
- site/src/diagrams/positions.mjs
- site/src/diagrams/zone_entries.mjs
- site/src/data/diagrams.json (rebuilt; only winger-dz-rim, winger-dz-reverse, entry-wide and entry-delay-curl changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
W374 row (1) (record `w374_longest_key_takeaways_next_five_pages_2026-11-16.md`). It recorded the first measurements of these windows, all over half a 400px screen:
- winger 67.4% (Common Mistakes :903–:904)
- the "Rim or reverse…" caption, 52.9%
- zone_entries 63.3% (:282)
- zone_entries 57.0% (:1168–:1170)
- the entry-delay-curl caption, 67.1%
- the entry-wide caption, 59.1%

A caption's amber runs from its glyph to the end of the caption. An inline amber run ends where its `**` ends.

## What changed
In every unit below the words are unchanged against HEAD unless stated; only the glyph, the `**` or the sentence order moved. The exception is zone_entries :1168.

**winger**
- **:903.** The amber now ends after "…once it rides above the shoulders, injures or is reckless" (287 → 129 chars).
  - The CARHA goalie-in-crease clause is its own bold run, not amber (a safety minor restored its bold).
  - The USA Hockey reckless → match sentence is plain.
- **:904.** The glyph moved onto the instruction. Amber is "Never put your stick or your body into their back" (343 → 49 chars).
  - The tariff ladder stays bold.
  - Every shorter cut of the tariff became a closed list of books (the W357 trap).
- **Captions winger-dz-rim and winger-dz-reverse.** These are hosted on winger and passing_and_receiving.
  - Sentences were reordered so the posture limb precedes the glyph. Amber went from 402 to 222 chars in each.
  - The amber keeps both prohibitions and both injuries.

**zone_entries**
- **:282.** The amber is now "the own-end faceoff for an intentional offside prices only the offside, never the hit or the swing. A swing at the carrier is slashing in every book, even if it misses." (692 → 168 chars).
- **:1168 (words added).**
  - The amber now ends "…Under Hockey Canada it ends your game while it stays off the head, and on the head plan on it anyway" (463 → 208 chars).
  - The added words copy the page's own :255, :864 and :1202 verbatim.
  - Cutting at "plan on it." would have been a closed list that dropped Hockey Canada.
- **:1170.**
  - The amber is now "Never hit a turned player from behind." (38 chars).
  - The mandatory-match sentence is a separate bold run, not amber.
- **Caption entry-wide.** The goalie-contact sentences moved ahead of the glyph. Amber went from 557 to 240 chars.
- **Caption entry-delay-curl.** This caption is hosted on zone_entries and time_and_space.
  - The first cut amber'd only the wall fallback: 634 → 279.
  - After the safety Major (below), sentences were reordered S4 → S3 → S5 with no word change. The amber covers "One safety point… curl away from the wall, and never turn your back to anyone coming at you" plus the wall fallback: 435/943.
  - The cervical-spine reason is plain text before the glyph.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | **Major M1, entry-delay-curl on time_and_space.** That page has no ⚠ between :139 and :170. The first cut left "never turn your back" plain and amber'd only the secondary wall case. Fixed with the author's own no-word-change S4 → S3 → S5 order, the reviewer's text. **Minors:** <br>• zone_entries :1170 tariff lost its bold. Restored bold, not amber, with no word change. <br>• winger :903 CARHA clause lost its bold. Restored the same way. <br>• zone_entries :282, an optional move. Not applied: new text (plan row). <br>**Accepted:** <br>• winger :904 instruction-only amber ("bold the instruction, never the price"). <br>• The reordered winger captions, including passing_and_receiving :213 "the wall-contact warning both captions carry". <br>• The zone_entries :1168 added words, checked against HC 7.5(a) and the 7.6 preamble/7.6(a). <br>• entry-wide. <br>Stale code comments in positions.mjs and zone_entries.mjs were corrected. |

No rules-verifier was engaged. The only rule-bearing new words are zone_entries :1168's "and on the head plan on it anyway", which copies three sibling lines already rules-verified and was checked against HC 7.5/7.6 by the safety reviewer.

### C11
The coordinator wrote no content. Every post-review edit is the safety reviewer's prescribed text or a bold restore with no word change.

## Checks after the last content edit
- build-diagrams ran once, after the last .mjs edit. Only the four named captions changed.
- A full `npm run build` (absolute binary) exited 0 and ran through check-links. `dist/index.html` is dated 19:23:23, and `find content site/src/diagrams site/src/data -newer` returns nothing.
- check_links --quiet, check_facts, check_absolutes (caption layer certified), check_geometry and check_secrets: pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_caption_pairs: 0 violations.
- check_marker_pairs: 0 LOST and 0 SPLIT on both pages.
- Word-multiset diffs against HEAD are equal for all four captions. winger.md matches HEAD word for word once `*` and ⚠ are stripped; zone_entries.md differs only at :1168.

## Dimensions
| Dimension | Coverage |
|---|---|
| D11 Reader safety | safety-reviewer on every changed run, read alone and voiced alone, on all four host pages |
| D12 Read-aloud | all four host stems rendered; every changed unit still opens "Important." |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 19:23:23 build (below) |
| D1–D10, D13 | not engaged: no rule claim was reworded except the :1168 sibling copy |

D15 detail: the site-reviewer covered winger, zone_entries, time_and_space and passing_and_receiving in Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark, 16 loads.
- Every changed run forms span.warn-inline with the glyph leading, and the extents are exactly as stated above.
- The second bold runs at winger :903/:904 and zone_entries :1170 render bold, in body colour, not amber.
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll.
- **No 400px window is over 50% on any of the four pages.**
- The two 1440px windows still over 50% are full-height-SVG windows whose only text is a short caption tail. This is the known metric artefact; both fell: winger 94.1 → 77.3, passing_and_receiving 90.2 → 73.0.

| Page | worst 400px window, before → after |
|---|---|
| winger | 67.4% → 44.2% (Neutral Zone, unrelated) |
| zone_entries | 67.1% → 45.7% (entry-delay-curl) |
| time_and_space | 67.1% → 45.7% (entry-delay-curl) |
| passing_and_receiving | 51.6% → 26.9% |

## Found, not fixed (plan rows)
- **zone_entries :1168.** The instruction "Pull up and play the puck — never hit a player whose back is turned to you…" is bold but not amber; the amber falls on the tariff after it, against "bold the instruction". This is pre-existing.
- **zone_entries :282, optional.** The safety reviewer suggested moving "On a carrier turned to retrieve the puck, the hit is checking from behind" into the amber run. This is new text and has not been reviewed.
- **Caption nit.** In winger-dz-rim and winger-dz-reverse, the posture fragment now follows "not once you are pinned" with no introduction.
- **entry-delay-curl** sits at 46% of its own characters. Its window measures 45.7%, close to the line.

## What this method could not have found
- Real devices, other browsers, and screen readers.
- Other hosts of these four captions beyond the four checked. A grep of content/ found none.
