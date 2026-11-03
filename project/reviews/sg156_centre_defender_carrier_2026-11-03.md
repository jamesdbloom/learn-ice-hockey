# SG156: centre and defender — the puck carrier is not fair game, stick on the puck, and the arm pin (3 November 2026)

**Files:** content/positions/center.md; content/positions/defender.md; project/plans/OPEN_ITEMS.md

## Source
The SG155 gate's note that centre and defender had not been read for the "not in possession" shape.

## What changed
- center :731 (backcheck, after Hockey Canada's interference limit): "Once they have the puck, play the puck and never hold them: holding is a penalty with or without the puck in every book, and in some it can end your game — grab the cage under USA Hockey and it always does" (USA Hockey 622(b) mandatory major and game misconduct; the page carried no cage-grab limb).
- center :733 body, facts :721 and KT18: pressure the carrier with "your stick on the puck, never a hold or a hit from behind"; :721 reworded so "holding" is not used in two senses.
- defender facts :216: a line implying only USA Hockey and IIHF women's 101.1 price a pin now reads "Pin the puck, never the player — arms that restrain a player are holding in every book, puck or no puck (NHL and IIHF 54, PWHL 55, HC 8.1, CARHA 63); USA Hockey's Note to 622 names the arm pin on the boards, and IIHF women's 101.1 bars using the boards to push or pin her".

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | centre SHIP; defender FIX: the first rewrite of :216 dropped 101.1's "push her into the boards" → restored |
| rules-verifier | FIX centre :731 (named only HC/CARHA as able to end your game; USA Hockey 622(b) cage grab always does) → added; FIX defender :216 ("arms that pin … in every book" is written only in USA Hockey; HC 7.5 Interp. 3 permits a low-speed pin) → "arms that restrain"; :733, :721, KT18 PASS |
| rules-verifier (re-check) | All three repaired lines PASS; nothing cheaper |

### C11
One authoring agent for both files; the coordinator wrote the plan and this record. Every repair was re-checked by the rules-verifier.

Checks after the last edit: full `npm run build` with the absolute binary exit 0 including check:links; check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST (68/68, 66/66); check_counts --update matches.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 | rules-verifier and re-check across six books and the British documents |
| D4 | Quotations verbatim on disk |
| D5 | Primary text |
| D6 | "pin appears in no holding rule outside USA Hockey" (flattened sweep) |
| D7 | None |
| D8 | None |
| D9 | centre facts, body and KT18; defender facts |
| D10 | defender :216 and centre :721 voiced alone |
| D11 | safety-reviewer |
| D12 | centre rendered; final lines not re-rendered (declared) |
| D13 | None |
| D14 | check_links and the build |
| D15 | Build; text change (declared) |

## What this method could not have found
- Arm pins priced under rules not named holding (interference, boarding, roughing).
- Other pages stating a holding tariff without the USA Hockey cage-grab limb (plan).
- How the final lines sound.
