# SG208: nine more voiced diagram captions trimmed, and the goalie-rim caption scoped to the books that mark a trapezoid (8 November 2026)

**Files:**
- site/src/diagrams/winger.mjs
- site/src/diagrams/breakouts.mjs
- site/src/diagrams/body_contact_and_battles.mjs
- site/src/diagrams/goaltender.mjs
- site/src/diagrams/defending_the_rush.mjs
- site/src/diagrams/practice_and_development.mjs
- site/src/diagrams/positions.mjs
- site/src/diagrams/rink_map_and_glossary.mjs (comment only: why the-trapezoid stays whole)
- site/src/data/diagrams.json (build product; exactly these nine captions differ from HEAD, and no `describe` changed)
- project/plans/OPEN_ITEMS.md
- project/what_it_costs_design.md (owner decision on page choice)
- project/reviews/sg208_caption_trims_batch_two_2026-11-08.md

## Source
The owner made readability and diagrams the priority. This is the second batch of the longest voiced captions; the first was SG207. One authoring agent owned eight modules. It rendered every host before and after, using an in-memory manifest, and did not build. The coordinator ran the build.

## What changed
| Caption | Before | After |
|---|---|---|
| winger-corner-and-the-empty-point | 1179 | 740 |
| breakout-winger-wall | 1162 | 746 |
| shot-block-get-close | 1152 | 804 |
| goalie-rim-stop-or-clear | 1133 | 644 |
| rush-gap-and-angle | 1127 | 1065 |
| practice-the-line-and-one-rep | 1124 | 805 |
| practice-small-area-in-one-zone | 1123 | 874 |
| winger-dz-rim | 1122 | 966 |
| rush-3-on-2-alternative | 1092 | 935 |

- **What was cut.** Each cut limb is one that every host voices at the same tier, within about one chunk of the marker. Each edit has a dated SG208 source comment naming the cut, and the file, line and chunk of every host that voices it.
- **What was left whole.** the-trapezoid (1232) is unchanged: every one of its limbs is unvoiced near the marker in at least one of its four hosts.
- **The ⚠️ sentences.** Every ⚠️ sentence is kept verbatim except in two captions.
  - **shot-block-get-close:** "The technique is the half that hurts you" and the posture list were cut as a pair, and the glyph moved onto "From in front of your own goalie, do not block". Both hosts voice the posture list in the same chunk (body_contact_and_battles.md:1587–1602; defender.md:806–823).
  - **winger-corner-and-the-empty-point:** three things were cut from inside its ⚠️ wall limb: "Those are two different injuries…", the posture sentence ("Skates parallel to the boards, forearm and hip to the wall, head up and chin off your chest") and `SHOULDER_TAIL`. What remains under the glyph is "Never turn your back to anyone coming at you and never duck…". The single host, winger.md, voices every cut limb directly before the marker: the facts block at :397–399 carries them at a higher tier (chunk 023), and the "What to do" paragraph at :408 carries the posture (chunk 024, the caption's own chunk).
- **SHOULDER_TAIL.** winger.mjs no longer imports it. The constant itself is unchanged.
- **Scope fix.** goalie-rim-stop-or-clear now opens "the trapezoid that the NHL and IIHF books mark". Without that, "out where it crossed the line, get out of the way" was voiced as universal law (non-negotiable 7). "trapezoid" and "restricted area" score 0 in usah.txt, carha_2026.txt and hc.txt.

**Now over 1,000 characters:** 31 captions, down from 43 before SG207.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | **Nothing blocking.** Hosts were rendered (winger, breakouts, body_contact_and_battles, defender, goaltender), and every removed safety or rule limb is carried at the same tier within one chunk in every host. The other four hosts' captions lost no safety text; their ⚠️ sentences are byte-identical to HEAD. RECOMMENDED: scope the goalie-rim premise. This was applied in the reviewer's wording. |

### C11
- The authoring agent made the nine trims.
- The coordinator applied the safety reviewer's exact wording for the goalie-rim scope and wrote this record.

### Checks after the last caption edit
- build-diagrams: exit 0.
- check_absolutes (caption units read from the rebuilt diagrams.json), check_geometry, check_links --quiet and check_secrets: all exit 0.
- check_caption_pairs: 0 violations.
- `node --check` on each module.
- Full `npm run build` (absolute binary) after the last caption edit: exit 0, including check:links (57 pages, all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | Kept rule limbs are verbatim. Trapezoid scope verified against the books. |
| D11 Reader safety | safety-reviewer, with host renders and chunk distance |
| D12 Read-aloud | Before and after renders by the author; host renders by the reviewer |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | Text-only changes in an existing figcaption slot. ⚠️ count unchanged except shot-block, where the glyph moved between sentences. No site-reviewer (declared). |
| Others | No content/ change |

## What this method could not have found
- A host limb voiced in words the reviewer did not search for.
- Listening time. Chunk distance is not the same thing.
- How the shorter captions sit on the page, and where the shot-block amber run now starts. No browser was used.
- The `passing_and_receiving.md:213` sentence ("the wall-contact warning both captions carry"). It binds the full wall limb into winger-dz-rim and winger-dz-reverse, so any future trim of either caption must edit that sentence first.
