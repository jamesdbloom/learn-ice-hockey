# SG209: eight more voiced diagram captions trimmed, and the skating-pivot caption's closed four-book boarding list opened to every rulebook (8 November 2026)

**Files:**
- site/src/diagrams/puck_support_and_spacing.mjs
- site/src/diagrams/rules_primer.mjs
- site/src/diagrams/game_management.mjs
- site/src/diagrams/playing_without_the_puck.mjs
- site/src/diagrams/skating.mjs
- site/src/diagrams/risk_management.mjs
- site/src/diagrams/defending_the_rush.mjs
- site/src/diagrams/winger.mjs
- site/src/data/diagrams.json (build product; exactly these eight captions differ from HEAD, and no `describe` field changed)
- project/plans/OPEN_ITEMS.md
- project/reviews/sg209_caption_trims_batch_three_2026-11-08.md

## Source
This is the third batch of the longest voiced captions, after SG207 and SG208. One authoring agent owned the modules. It rendered every host before and after, using an in-memory manifest, and did not build.

## What changed
| Caption | Before | After |
|---|---|---|
| the-privileged-area | 1071 | 608 |
| skating-pivot-toward-the-boards | 1046 | 708 |
| layer-not-converge | 1075 | 782 |
| loose-puck-who-goes | 1052 | 805 |
| delayed-penalty-your-own-net | 1061 | 835 |
| legal-route-through-traffic | 1041 | 858 |
| rush-backcheck-lanes | 1039 | 859 |
| winger-wall-depth-by-system | 1035 | 949 |

- **Captions left whole.** support-angles (1088) and pinch-centre-high (1041) are unchanged: some host voices none of their limbs near the marker.
- **Captions now over 1,000 characters:** 23 (43 before SG207).

**⚠️ units.** The caption is one spoken paragraph, so the "Important." covers all of it. Four changed captions carry a glyph and lost text. In each, the glyph sentence is kept word for word and "Important." is still voiced.
- **loose-puck-who-goes:** the posture instruction after "⚠️ Two postures carry two different dangers" was cut. The host voices it in full in the same chunk (playing_without_the_puck.md facts :329–331) and in the next chunk's ⚠️ paragraph (:339).
- **the-privileged-area:** the 614(c) freeze triggers and 607(c)/(d) were cut. rules_primer chunk 096 (⚠️) and chunk 097 (⚠️, the caption's own chunk) voice both at the same tier or fuller.
- **skating-pivot-toward-the-boards:** the cuts were outside the glyph sentence. The safety review also replaced the closed list "the NHL, the IIHF, USA Hockey and Hockey Canada all have a boarding rule" with "every rulebook has a boarding rule". PWHL 41.1 and CARHA 49 both write one, and the host's facts line :613 and body :624 already say "every rulebook".
- **legal-route-through-traffic:** the cuts were outside the glyph sentence.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | **Nothing blocking.** Nine hosts rendered. Every cut safety or rule limb is voiced at the same tier within one chunk. RECOMMENDED: the skating-pivot four-book list (applied, in the reviewer's wording). RECOMMENDED, outside this diff: game_management.md:383 "A deflection off an opponent doesn't count" is NHL 78.5(xi), but USA Hockey Casebook Rule 409 Situation 2 allows that goal. Recorded in the plan for a rules wave. |

### C11
- The authoring agent made the eight trims.
- The coordinator applied the safety reviewer's exact "every rulebook" wording and wrote this record.

### Checks after the last caption edit
- build-diagrams exit 0.
- check_absolutes, check_geometry, check_links --quiet and check_caption_pairs are all clean.
- Full `npm run build` (absolute binary) after the last caption edit: exit 0, including check:links (57 pages, all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | Kept limbs are verbatim. PWHL 41.1 and CARHA 49 were verified by the reviewer. |
| D11 Reader safety | safety-reviewer, with host renders and chunk distance |
| D12 Read-aloud | The author rendered before and after; the reviewer rendered the hosts |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | Text-only changes inside existing figcaption slots; no glyph moved. No site-reviewer was run (declared). |
| Others | No content/ change |

## What this method could not have found
- **Hosts not read chunk by chunk.** The hosts of layer-not-converge, rush-backcheck-lanes and winger-wall-depth-by-system were not read that way, because their diffs cut no safety limb.
- **Other books' delayed-penalty goal rules.** IIHF, Hockey Canada and PWHL were not swept for an equivalent rule.
- **Layout.** No browser was used.
