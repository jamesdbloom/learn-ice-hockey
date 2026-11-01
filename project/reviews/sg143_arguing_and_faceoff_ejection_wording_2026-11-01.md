# SG143: arguing with officials, Hockey Canada's straight-to-misconduct notes, and faceoff "ejection" wording (1 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/foundation/on_ice_communication.md
- content/off-the-ice/mental_game.md
- content/positions/goaltender.md
- content/systems/game_management.md
- content/systems/faceoffs.md
- project/plans/OPEN_ITEMS.md

## Why
Two SG142 plan rows asked for corpus-wide sweeps: "ejection" used for a Hockey Canada game misconduct (HC's Game Ejection, 4.8(b), is a separate penalty with no automatic suspension), and "arguing is a minor" stated without Hockey Canada 11.1(d)/(e) Note 1. Each ran first as a read-only census by a rules-verifier told to refute the row.

## What the censuses found
- **HC "Game Ejection": hypothesis refuted.** hc.txt's glossary (:933-940) and Rule 4.8 describe both penalties as "removed from the game", so plain "ejects" for an HC game misconduct is correct. No unit names a game misconduct a Game Ejection, gives a 4.8(b) trigger a game misconduct, or attaches a suspension to a Game Ejection (237 HC ejection contexts, 20 Game Ejection units, 80 suspension contexts read). One different sense surfaced: faceoffs "ejects the taker" (HC 6.2(d) removes the taker from the draw only), heard alone as thrown out of the game (harsh).
- **"Arguing is a minor": mostly held.** Defects: mental_game Key focus :27 ("at least a power-play penalty… keeping at it can get you thrown out", written to the old answer while the page's CM and KT already carried HC's one-argument ejection); mental_game :573 missing HC 11.1 item (vi); rules_primer "Talking to officials" priced from NHL/IIHF only; rules_primer :568 NHL ladder on a six-book page; on_ice_communication CM :654 "a minor in every book" (USA Hockey 601(a) Note: a misconduct after the game). Separately, game_management :1178/:1193 and goaltender :752 said HC's misconduct and game misconduct still need persistence, contradicting goaltender's own trailer and five other pages.

## Coordinator ruling
HC 11.1(d)(i)/(e) keep "persists", but Note 1 to each says the referee "may assess either penalty initially", and Interpretation 4 gives a misconduct for a single act. No casebook settles it, so the conservative reading ships: pages must not promise persistence first, and must not call the higher rung automatic.

## What changed (one author per file; final wording)
- **mental_game:** Key focus :27 "arguing usually hands them a power play, and keeping at it — or, under Hockey Canada, a single argument — can get you thrown out." :573 adds 11.1 item (vi) "any inappropriate or unwanted discussion with the referee".
- **goaltender:** :752 "usually a minor, with a misconduct and then a game misconduct for persisting — but the book lets the referee give either higher penalty without a lower one first, so do not count on a minor as your warning." CM :1644 "Hockey Canada usually starts at a minor, but the referee may go straight to a misconduct or a game misconduct."
- **game_management:** facts :1178 and body :1193 now say Note 1 lets the referee start at either rung, "so do not count on a minor first" (the act: a puck shot out after the whistle, 11.1 item (v)).
- **rules_primer:** In short :1016 "Never touch or swear at an official"; new paragraph in "Talking to officials" led by "Never swear at or abuse an official": arguing a call usually starts at a minor, but swearing or making it personal can skip it (USA Hockey 601(c)(2) and CARHA 46(b)(1) for obscene or profane language; HC 11.2(d) for personal abuse), and HC (Note 1 to 11.2(e)) and the IIHF (39.5(VIII)) can throw you out; HC can open even a plain protest higher. :568 scopes the "In general" ladder to NHL, PWHL, IIHF and adds the amateur books' misconduct floor, each number beside its book. :1029 "costs at least a minor".
- **on_ice_communication:** CM :654 scopes the minor to "during the game" and ends "Never swear at an official or make it personal: swearing alone can be a misconduct under USA Hockey and CARHA, personal abuse is at least one under Hockey Canada, and Hockey Canada and the IIHF can throw you out for it." Trailer cites 601(c)(2)/(d)(10), Casebook 601 Situations 3 and 9, HC 11.2(d), 11.2(e) Note 1, Interpretation 1, CARHA 46(b)(1), IIHF 39.5(VIII), 39.2(I) and Situation Handbook 39.2/39.3.
- **faceoffs:** every faceoff-sense "eject(s)/ejection" outside quotations now says the centre is removed from (or thrown out of) the draw (~30 units across Key focus, Overview, body, facts, CM, KT12, In short). The edition panel says the 2026/27 IIHF book "changes who takes the draw" (no player change is allowed before the draw). Two pre-existing scope errors fixed on the way: :713 limits stick-refusal replacement to IIHF 2026/27 (2025/26 76.3 only warns); :1077 names the Elite League for the Situation 81.18 penalty exception (the In-House leagues run IIHF v1.1 and their own Rule 76) instead of "in Britain".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier ×2 (censuses) | as above |
| rules-verifier + safety-reviewer, batch A (mg, gt, gm, fo) | No permissive finding. Safety FIX (minor): faceoffs survivors of the same claim at :90, :851, :958, :975. Rules: mg :27 "can hand them" understates mandatory minors; fo :775 "costs your centre the draw" ambiguous. |
| rules-verifier + safety-reviewer, batch B (rp, oic) | Rules: USA Hockey "skips the minor" too harsh (Casebook 601 Sit. 3 vs Sit. 9); IIHF "plan on the ejection" too harsh (Situation Handbook rules in-game abuse a minor); HC plain swearing is 11.1. Safety: paragraph led with the tariff; HC abuse heard as capped at a misconduct while a protest could eject. |
| narrow re-reviews (rules + safety), rounds 2-4 | Rules caught the "make it personal" gate understating CARHA 46(b)(1) and USA Hockey 601(c)(2) (permissive for CARHA) → split by book; fo :713 and :1077 edition and competition scope; rp :568 HC "can be" → "always at least". Final: all units CONFIRMED, all files SHIP. |

### C11
Every content edit was made by the authoring agent that owned its file, on reviewers' findings; the coordinator edited only the plan and this record, and ruled the HC persistence reading (conservative ships) and left fo :1077's "unconditional" (accurate to the In-House text per the rules-verifier; the safety-reviewer's silence-as-permission note is non-blocking, worst case the centre loses the draw).

Checks after the last content edit (rules_primer 06:35): full `npm run build` (absolute binary) exit 0 including check:links, and the built pages carry the final text; check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST and 0 SPLIT HALF on all six content files; check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on every changed unit, then on every repair |
| D2 Exceptions | CARHA 46(a) Note (minor first for a dispute); USA Hockey Casebook 601 Sit. 3/9; IIHF 39.2(I) vs 39.5(VIII) and the Situation Handbook; HC 11.2 Interpretation 1; IIHF 76.4 post-icing carve-out |
| D3 Divergence | Each book named for its own trigger; IIHF kept at "can" |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Quotations re-read in sources/*.txt by the verifiers; current HC and CARHA files confirmed to match the older extractions for Rules 11 and 46 |
| D6 Negative existence claims | "No player minor in HC 11.2" tested (11.2(a) bench minor only) |
| D7 Cardinal rule | No coaching choice changed |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | Layer tests by every author; Key focus, CM and KT read voiced alone |
| D10 Key-facts layer | Every changed facts line read voiced alone |
| D11 Reader safety | safety-reviewer, four passes |
| D12 Read-aloud integrity | Every edited page rendered and changed chunks read |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build's check:links pass |
| D15 Rendered site | Full build after the last edit; prose-only edits with no new glyph or panel, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
SG143 carry-overs row in OPEN_ITEMS.md (faceoff "ejects the centre" on sibling pages; mental_game :574 abuse pricing; goaltender facts HC puck-out line; CARHA 46(a) Note scope; HC 10.1(ii)/11.1(d)(iii) context), plus the review notes below.

## What this method could not have found
- Paraphrases of arguing or abuse ("mouthing off", "chirping the ref") and of a faceoff removal ("sent off", "loses the dot") that use none of the swept words.
- Sibling pages carrying the same claims (team_play_and_culture and others for the swearing split; winger, center, switching_positions for faceoff "eject"): repairs were per file.
- Official interpretations of HC Note 1 against "persists", and of the reach of CARHA's 46(a) Note; none is on disk.
- Discriminatory-language routes (HC 11.4, CARHA 46(g), USA Hockey 601(e)(3)) were not added; the units do not claim them.
- How the new lines sound in the voice; text renders only.
