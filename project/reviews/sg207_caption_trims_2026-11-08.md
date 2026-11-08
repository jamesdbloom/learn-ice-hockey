# SG207: nine of the eleven longest voiced diagram captions trimmed, a Hockey Canada and CARHA match restored to the corner collapse, and the IIHF broken-skate change hedged (8 November 2026)

**Files:**
- site/src/diagrams/faceoffs.mjs
- site/src/diagrams/defensive_zone_coverage.mjs
- site/src/diagrams/body_contact_and_battles.mjs
- site/src/diagrams/puck_handling.mjs
- site/src/diagrams/positions.mjs
- site/src/diagrams/game_management.mjs
- site/src/diagrams/breakouts.mjs
- site/src/data/diagrams.json (build product)
- project/plans/OPEN_ITEMS.md (caption row, two leads, the pilot visual pass)
- project/working_guidance.md (production iframe note)

## Source
The owner put readability and diagrams first. 43 captions were over 1,000 characters, and every caption is read aloud where its diagram sits in a host page. One authoring agent owned the nine modules. It did not run the diagram build; the coordinator built once it had finished.

## What changed
| Caption | Before | After |
|---|---|---|
| faceoff-dzone-alignment | 1401 | 1356 |
| dz-collapse-corner | 1311 | 905 |
| angle-into-the-corner | 1286 | 975 |
| faceoff-where-the-draw-goes | 1274 | 1069 |
| you-cannot-beat-two | 1267 | 946 |
| winger-dz-reverse | 1262 | 830 |
| five-on-six-clear-three-outcomes | 1252 | 1019 |
| breakout-reverse | 1245 | 1101 |
| faceoff-strong-side-dot | 1244 | 1015 |

**Rule for every cut:** a cut limb is one that every host voices near the marker. Each cut has a dated source comment naming where the host voices it.

**Left unchanged:** oz-net-front-screen and icing-the-race-and-the-dot. For each, at least one host voices none of its limbs (see the plan row).

**Two rule fixes rode with the wave:**
- **dz-collapse-corner.** The Hockey Canada 7.5(c) / CARHA 53(b) mandatory match for a hit from behind into the boards on a player who cannot protect themselves is restored verbatim. The trim had cut it on the premise that the restructured host voices the price in its base-shape body. The host voices "in most books ends your game" but not the match, and the match is the exact picture the diagram draws.
- **five-on-six-clear-three-outcomes.** "(or, under the IIHF, one with a broken skate)" offered a change that the host tells readers not to plan on. IIHF 82.1, which names icing, lists no broken skate, and the Situation Handbook gives none. The caption now reads "(the IIHF's 81.4 also names a broken skate, but its 82.1 does not, so do not count on it)". The goalie clause now says the exception "is for a team putting back its own pulled goalie, not for you".

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | Nothing blocking. Hosts were rendered; chunk distance was measured for the five captions whose cuts touched a rule or safety limb, and eight captions were cleared. RECOMMENDED: restore the dz-collapse-corner match (applied verbatim). |
| rules-verifier (five-on-six) | FIX-harsher on the broken-skate parenthetical (applied in the verifier's wording). Checked "Under the NHL and the IIHF" (PWHL is 83.4, optional), the goalie clause (wording applied) and Hockey Canada 6.7(d): all CORRECT. |

### C11
- The authoring agent made the nine trims.
- The coordinator applied the two reviewers' exact wording:
  - the restored match sentence, from HEAD;
  - the broken-skate hedge and the goalie-clause wording.
- The coordinator wrote the plan entries and this record.

### Checks after the last caption edit
- `build-diagrams.mjs` exit 0, with 204 diagrams.
- check_absolutes (408 caption/describe units), check_geometry, check_links --quiet and check_caption_pairs: all clean.
- Full `npm run build` with the absolute binary, after the last caption edit: exit 0, including check:links (57 pages, all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier (five-on-six); kept limbs carried verbatim |
| D2 Exceptions | IIHF 81.4 against 82.1; HC 7.5(c) / CARHA 53(b) match |
| D11 Reader safety | safety-reviewer, with host renders and chunk distance |
| D12 Read-aloud | Captions measured in rendered hosts |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | Captions are text in an existing slot, and the amber runs come from the same plugin. No site-reviewer was run (declared). |
| Others | No content/ change; D3–D10 and D13 are not engaged beyond what is listed |

## What this method could not have found
- **A limb a host voices in words the reviewer did not search for,** whether counted as absent or as present.
- **Listening time.** Chunk distance is not listening time.
- **Seven faceoff-dzone-alignment hosts and the other unrendered hosts.** Their captions' safety limbs were unchanged, so they were not rendered.
- **How the shorter captions sit beside each diagram on the page.** No browser looked at them.
