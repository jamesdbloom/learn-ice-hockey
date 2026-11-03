# SG153: small carry-over rows on eight pages (3 November 2026)

**Files:** content/systems/special_teams.md; content/technique/puck_handling.md; content/systems/defensive_zone_coverage.md; content/systems/faceoffs.md; content/foundation/on_ice_communication.md; content/systems/offensive_zone_play.md; content/positions/winger.md; content/positions/defender.md; project/plans/OPEN_ITEMS.md

## Source
Open OPEN_ITEMS carry-over rows naming these pages, worked on the owner's standing instruction "keep going with the plan". Each agent treated its rows as hypotheses: several were refuted or stale and were closed without edits.

## What changed
- special_teams facts :656: CARHA 32(d) is "at least one game … except for an accidental high stick" (the exception was missing).
- puck_handling facts :492 (cage grab): Hockey Canada is a match if moderately violent (7.1(c)(ii)), may eject for any violence and must if it injures (7.1(b)); the discretionary limb was missing. Sources trailer lists 405(c), 4.10(a), 34(a).
- defensive_zone_coverage and defender Sources trailers list the match-penalty rules the bodies now cite (NHL/PWHL 21.2, USA Hockey 405(c), Hockey Canada 4.10(a), CARHA 34(a)).
- faceoffs: a hit from behind on a player turned toward the wall ejects in every book but USA Hockey (NHL/PWHL 43.3 with 43.5, IIHF 43.3, HC 7.5(a), CARHA 53(a)), with the HC 7.5(c)/CARHA 53(b) match; the USA Hockey limb moved to its own line (608; Casebook 608 Sit. 1). The body now says "at least a major and a game misconduct … and under the NHL and PWHL a match if the referee judges you tried to injure (43.4)". The In-House post-icing exception is no longer called "unconditional" (the In-House text is silent on Situation 81.18's limit; plan on it).
- on_ice_communication: a push on a screener's back ejects in CARHA (53(a)) and Hockey Canada (7.5(a)); after-game abusive language is a game misconduct under the IIHF too (75.5(V), 39.5(II)).
- offensive_zone_play: §8 "only a major" (false beside NHL 43.4) reworded; a Common Mistakes item split across two audio chunks merged into one marked paragraph with every limb kept.
- winger :557 made plainer when voiced ("Called as checking from behind, it is never two minutes and nothing else in any book…") with every limb kept.
- defender :326 no longer reads "from a minor" beside "no minor alone"; the Hockey Canada head-first limb sits with the head-contact tiers and names Hockey Canada; :351 quotes "must immediately release the stick", verbatim in all three books.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (all eight) | PASS except FIX faceoffs :622 "only a major" (NHL/PWHL 43.4 match) and FIX puck_handling :492 (the repair had dropped 7.1(c)(ii)'s match for moderate violence) → both fixed |
| safety-reviewer (all eight) | SHIP ×6; FIX puck_handling :492 (as above); FIX on_ice :294 (CARHA scope could read as only CARHA ejecting) → Hockey Canada 7.5(a) named; minors: on_ice :654 narrower than 75.5(V) → fixed; defender :326 unscoped → "Under Hockey Canada"; faceoffs :607 left (no short accurate fix; :608 follows). ozp merge kept every limb and its "Important." |
| rules-verifier (repair text) | All five PASS; optional notes taken as notes (43.4 "may"; defender "(7.5)" cite could be "(7.5, 7.6)") |

### C11
One authoring agent per file set (special_teams; puck_handling+dzc; faceoffs+on_ice_communication; ozp+winger+defender); the coordinator wrote the plan and this record.

Checks after the last edit: full `npm run build` with the absolute binary exit 0 including check:links; check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST (ozp 63→62 is the sanctioned merge of one hazard, escalation kept); check_counts --update matches.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier twice |
| D4 | Trailer citations located on disk; no URL changed |
| D5 | Primary text |
| D6 | "IIHF 43.4 is supplementary discipline, not a match" checked in both editions |
| D7 | None |
| D8 | None |
| D9 | Facts, CM and body layers per changed claim |
| D10 | Facts lines near cap reviewed voiced alone |
| D11 | safety-reviewer; every cheaper-direction finding fixed |
| D12 | ozp, winger, defender, faceoffs, on_ice rendered; puck_handling :492 final not rendered (declared) |
| D13 | None |
| D14 | check_links and the build |
| D15 | Build only; text change (declared) |

## What this method could not have found
- Other rules pricing the same acts that nobody named (e.g. roughing or unsportsmanlike for a cage grab).
- Pre-repair wording of these claims surviving in layers that share no words with the changed lines.
- How the 298-character facts lines sound.
