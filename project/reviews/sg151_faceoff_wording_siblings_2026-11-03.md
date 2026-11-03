# SG151: faceoff-violation wording on the remaining pages, and three small precision repairs (3 November 2026)

**Files:** content/foundation/rules_primer.md; content/positions/center.md; content/positions/winger.md; content/systems/faceoffs.md; content/systems/offensive_zone_play.md; content/systems/neutral_zone_systems.md; content/systems/special_teams.md; content/off-the-ice/mental_game.md; content/foundation/on_ice_communication.md; project/plans/OPEN_ITEMS.md

## Source
The SG150 content-reviewer census of misleading faceoff wording on sibling pages, and the SG150 commit-gate's minor notes. The owner's instruction (2 Nov): "then continue with the plan".

## What changed
- Faceoff-violation wording a listener mishears — "tossed" (undefined slang), bare "thrown out"/"ejected" (heard as a game ejection), "costs you the draw"/"lose the dot" (heard as losing the faceoff) — became "thrown off the dot", "replaced" or "removed from the draw" in every layer: rules_primer (In short, a heading, body, table cells, CARHA bullet, Common Mistakes), center (facts, body, Common Mistakes, KT7), winger (facts, body, Common Mistakes, KT11), faceoffs (heading renamed with no inbound links; In short, three facts lines, body), offensive_zone_play :1081, neutral_zone_systems :807. No "tossed" remains in content/.
- Second-violation cost added in the "can cost a minor — in most books it will" form (mandatory NHL/IIHF/PWHL 76.7/78.7 and USA Hockey 613(d); "may" in HC 6.2(e) and CARHA 57(d)): winger Common Mistakes and KT11, neutral_zone_systems KT11.
- rules_primer CARHA: the taker is removed for a teammate's violation (57(a)) and may be replaced when slow to set up (57(c)).
- special_teams :1009/:1027 and faceoffs KT12: "all six (current) books", with the IIHF from 2026/27 (the In-House leagues reach the same result through In-House Rule 76).
- faceoffs :1074/:1094: under the IIHF the post-icing warning ends once penalties after the icing have let players change (Situation 81.18).
- mental_game :574: the IIHF Situation Handbook is credited with the minor only; the misconduct for persisting is rulebook 39.4(I). on_ice_communication :756: CARHA 46(b)'s persist-to-game-misconduct sentence quoted as the basis for :654.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (rules_primer) | All PASS but one FIX: the CARHA cell read cheaper than 57(c) → fixed |
| rules-verifier (center, winger) | All PASS; "in most books it will" = 4 of 6 confirmed; winger :619 traced to IIHF Situation 76.42 |
| rules-verifier (faceoffs, offensive_zone_play, neutral_zone_systems, special_teams) | 11 PASS; FIX neutral_zone KT11 understated ("can cost a minor") → fixed; 81.18 gap at :1074/:1094 → added |
| rules-verifier (re-check of those) | PASS; optional conservative wording for 81.18 → taken |
| safety-reviewer (all nine files) | SHIP ×8; FIX (minor) neutral_zone KT11 "is a minor in most books" implied HC/CARHA never → "can cost a minor — in most books it will"; 81.18 "both teams" permissive → "let players change". Both fixed. No spoken "Important." lost; no line reads as a game ejection where it means the draw |

### C11
One authoring agent per file set (rules_primer; center+winger; faceoffs+offensive_zone+neutral_zone+special_teams; mental_game+on_ice_communication). The coordinator wrote only the plan and this record. The last repairs (neutral_zone KT11, faceoffs :1074/:1094 wording, the :952 trailer) are confined to the findings that named them and move in the stricter direction.

Checks after the last edit: full `npm run build` with the absolute binary exit 0 including check:links (the renamed faceoffs heading has no inbound link); check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST in all nine files; check_tables unchanged (the rules_primer :1067 table was already dropped from audio); check_counts --update matches.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every file, with re-checks |
| D4 Citation integrity | Quotations against sources/; no URL changed |
| D5 Provenance | Primary text on disk |
| D6 Negative claims | "CARHA has no removal for the taker's own violation" refuted (57(c)) and corrected; "no NHL/PWHL 81.18 equivalent on disk" stated as such |
| D7 Cardinal rule | None touched |
| D8 Numeric ownership | "4 of 6 books" counted from the texts |
| D9 Summary layer | Every In short, Common Mistakes and Key Takeaway carrying the wording fixed; safety-reviewer read each voiced-alone line |
| D10 Key-facts layer | center, winger, faceoffs, special_teams facts lines reviewed; caps pass (special_teams :1009 at 300) |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Not rendered (declared); rendered SSML in scripts/speech is stale until the next render |
| D13 Folklore | "Centres get thrown off the dot several times a game" is an inherited, unsourced frequency (not changed) |
| D14 Structure, links | Heading rename: no inbound links; check_links and the build |
| D15 Rendered site | Build only; text-only change (declared) |

## What this method could not have found
- Misleading faceoff phrasings the sweeps did not search for ("sent off", "kicked out", "pulled").
- NHL/PWHL officiating practice on the post-icing warning after penalty changes; IIHF rulings on a one-team change.
- How the new clauses sound (no render).
