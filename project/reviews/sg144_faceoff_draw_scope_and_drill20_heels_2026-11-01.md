# SG144: faceoff "ejects the centre" scoped to the draw on four pages, and the Drill 20 landing drawn heel to heel (1 November 2026)

**Files:**
- content/systems/neutral_zone_systems.md
- content/systems/special_teams.md
- content/positions/winger.md
- content/foundation/on_ice_communication.md
- site/src/drills/03_mohawks_starts_two_foot.mjs (stepping-mohawk drawing; the built SVG is gitignored)
- project/plans/OPEN_ITEMS.md
- project/plans/getting_better_plan.md (the owner's off-ice stick list, recorded verbatim; the drill cards are SG145)

## Owner ruling (1 November, in session)
Drill 7 ("Outside edge stepping backwards, along a blue line") is correct as drawn: each foot crosses the line. Closed in 655c114.

## Why
- SG143 scoped faceoff "eject" to the draw on faceoffs.md only. Sibling pages still had lines voiced alone (facts, Common Mistakes, Key Takeaways) saying the centre is "ejected" or "thrown out" with no "from the draw", heard as thrown out of the game. Harsh, and wrong.
- The plan's drill prose check: a diagram-reviewer found the Drill 20 (stepping mohawk) landing drawn toe to toe while page step 4 says "heels in line", and its badges one behind the page's five steps. Drill 7: prose and drawing agree.

## Census (rules-verifier, read-only, told to refute the row)
Half held. Every book's own word is "ejected from the face-off" (NHL 76.6, IIHF 2026/27 76.6, PWHL 78.6, USA Hockey 613(d), Hockey Canada 6.2(a)/(d), CARHA 57(a)); the In-House Rule 76 "replace the centre". A second violation on one draw is a penalty in all six: mandatory bench minor NHL/IIHF/PWHL, mandatory player minor USA Hockey, "may" Hockey Canada 6.2(e) (mandatory on Junior post-icing draws, 6.5(b)) and CARHA 57(d). Defects were unscoped lines voiced alone, several on pages the row did not name (neutral_zone_systems, special_teams); center, switching_positions and rules_primer were low risk (optional, carried).

## What changed (one author per file)
- **neutral_zone_systems:** facts :777 "removed from the draw", :778 "removes the centre from the draw as the NHL does"; KT11 :922 "thrown out of the draw".
- **special_teams:** KT6 :1259 and CM :1187 "thrown off the draw; a second violation can be a minor in every book and is automatic in four" (was "a penalty in four books of the six", which implied Hockey Canada and CARHA charge nothing); facts :1011/:1012 scoped.
- **winger:** facts :578, :580, :582, :584, :586, body :598, KT11 :869: "gets your centre thrown off the dot/draw", "removes … from the draw", "Take your centre's place on the draw".
- **on_ice_communication:** facts :407, :409, :412 scoped; :409 matches winger :584.
- **Drill 20 drawing:** the landed pair at each switch is heel to heel (heels 0.50 ft apart, toes 2.70 ft); the air track ends at the new lead foot's heel; badges 1-5 follow the page's steps when `stepping` is true. The plain mohawk SVG is byte-identical.

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer (drills 7, 20) | Drill 7 agrees; Drill 20 two defects (above) |
| diagram-reviewer (Drill 20 repair) | No defects; plain mohawk unchanged |
| rules-verifier (four files) | All CONFIRMED but winger :580 "cost your centre the draw" (FIX, minor: heard as losing the faceoff). "Can be a minor in every book, automatic in four" CONFIRMED |
| safety-reviewer (four files) | SHIP all four; 0 lost markers |
| site-reviewer (Practising on Your Own, Drill 20, desktop and a real 400px iframe viewport, light and dark) | PASS: badges 1-5 legible and in page order; heels share one point at both switches; badge 3 clears the jump track by about 2.5 units; no overflow, clean console; plain mohawk unchanged. Nit: badge 4 sits about 1.4 units above the bottom travel line |
| rules-verifier + safety-reviewer, narrow (winger repairs :578/:580/:598/KT11, extended by the coordinator to the same "costs your centre the dot" claim) | CONFIRMED / SHIP |

### C11
Every content and drill edit was made by the authoring agent that owned its file; the coordinator edited only the plan and this record, and extended the winger repair from :580 to the three "costs your centre the dot" sites (same claim).

Checks after the last content edit: check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST and 0 SPLIT HALF on all four content files; check_counts --update: all figures match. Full `npm run build` (absolute binary) after the last edit: see the commit gate.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on every changed unit and every repair |
| D2 Exceptions | post-icing first-violation warnings (NHL/IIHF 76.4, PWHL 78.4, HC 6.5(a) Junior, In-House); HC 6.2(e) contact with a linesperson; HC 6.5(b) |
| D3 Divergence | mandatory vs discretionary second-violation minor; bench vs player minor |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | quotations re-read in sources/*.txt; hc.txt confirmed as the current HC book |
| D6 Negative existence claims | "five books of six" (USA Hockey 613(d) never names contact) tested |
| D7 Cardinal rule | No coaching choice changed |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | layer tests by every author; KTs and CM read voiced alone |
| D10 Key-facts layer | every changed facts line read voiced alone |
| D11 Reader safety | safety-reviewer, two passes |
| D12 Read-aloud integrity | every edited page rendered and changed chunks read |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build's check:links |
| D15 Rendered site | site-reviewer on the built Practising on Your Own page (C10, after the first commit gate blocked on it); the four content pages are prose-only edits with no glyph or panel |

## Carried to the plan
SG143 carry-overs row: optional scoping on center :524, switching_positions :173, rules_primer :1067, faceoffs :1074, on_ice_communication :424, special_teams :1029; neutral_zone_systems and winger KT11 give the first-violation cost only; special_teams KT6/:1027 "in all six books" for a winger over the hash marks vs NHL 76.7(ii); on_ice_communication :407 IIHF 2025/26 post-icing carve-out; Drill 20 badge 3 near the jump track and badge 4 near the bottom travel line (cosmetic).

## What this method could not have found
- Removal paraphrases outside the swept words ("lose your centre", "your centre is gone").
- Diagram captions and podcast scripts carrying the same wording (not swept).
- Whether a listener hears "thrown off the dot" as a penalty-box trip rather than a replacement; text renders only.
- Whether a skater recognises the redrawn landing as a real stepping mohawk; the source video was not re-watched.
