# SG142: three censuses, and the lines they found cheaper than the book (31 October 2026)

**Files:**
- content/foundation/rules_primer.md
- content/hockey-iq/risk_management.md
- content/off-the-ice/mental_game.md
- content/off-the-ice/team_play_and_culture.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- content/systems/offensive_zone_play.md
- content/technique/body_contact_and_battles.md
- content/technique/passing_and_receiving.md
- site/src/diagrams/defensive_zone_coverage.mjs (caption `dz-collapse-corner`) and the rebuilt site/src/data/diagrams.json
- project/plans/OPEN_ITEMS.md

Not in this commit: `site/src/data/podcast-principles.json` (waits on the S3 upload, as in SG141).

## Why
Three plan rows asked for sweeps nobody had run: lines saying "can end your game" for a minor (SG121), "plan on a match" claims against Hockey Canada's 14 no-match bars (SG115), and hits from behind priced in words earlier searches did not use (SG141's "could not have found"). Each was run as a read-only census by a rules-verifier, told to refute the plan row first.

## What the censuses found
- **"Can end your game" (490 hits read):** the row's hypothesis mostly failed. One permissive line (bcb butt-end hooking "is two minutes" in four books that eject on injury), one permissive-by-omission (rules_primer firing the puck), several harsh. The census's CARHA obscene-gesture finding was **refuted in review**: Rule 46's closing "Notwithstanding the above… a Gross Misconduct penalty may be assessed for any such infraction" sits at the clause margin (carha_2026_layout.txt:2342-2344), so the unscoped "can end your game" stays.
- **Hockey Canada no-match bars:** 14 bars, not 13 (7.11(c) says "will"). No harsh line: every "plan on a match" has a route through 7.1(c), which the book itself applies past its own bars (7.11 Interpretation 2, 11.2 Interpretation 3, 10.6 Interpretation 15). Wording only: Appendix D Note 1 cited alone, and "contradicts itself".
- **Hit from behind, other wordings:** no unit prices it cheaper than the book it names. Omissions: dzc low-zone facts and the `dz-collapse-corner` caption left USA Hockey and CARHA unpriced for a player at the boards; ozp's pinch and behind-the-net blocks left Hockey Canada and CARHA out. forechecking :811 and special_teams :1201 ("ejects in every book but USA Hockey") were checked and are **true** (IIHF 43 has only major + automatic game misconduct); no edit.

## What changed (one author per file; final wording)
- **defensive_zone_coverage:** facts :182 now prices all six books for a hit on a turned back, with all three USA Hockey triggers ("forceful at the boards, head first into boards or net, or reckless"; 608(b), Casebook 608 Situation 1) and "CARHA always ejects (53)"; the IIHF no longer gets a 43.5. KT4 adds "under USA Hockey too, when it is forceful at the boards or reckless". Caption: "Hockey Canada and CARHA eject you every time, and so does USA Hockey for a forceful hit on a player along the boards like this one." :600 scopes the three-stick-minor ejection's high-sticking to Junior and Senior (4.8(b)(i)).
- **offensive_zone_play:** facts :917, :920, :783 and body :794 add Hockey Canada 7.5 and CARHA 53 (eject at every tier; match into the boards).
- **passing_and_receiving:** facts :437 Hockey Canada clause now "a minor, double if meant, major and game misconduct if violent or hurt, up to a match" (7.6(a)-(c)); NHL/PWHL "a match if meant to injure". Facts :440 adds that three 7.6 penalties eject in minor and female hockey (4.8(b)(ii)).
- **body_contact_and_battles:** :1703 butt-end hooking "starts at two minutes… and can eject you in all four; under USA Hockey, plan on it ejecting you", with the injury and IIHF reckless tiers, CARHA 48(f) match and 63(a) major. Facts :1666 gives the four-book injury tier; new facts :1667 gives CARHA (48(f) double minor, match if it injures, 63(a) ejecting major). :1668 (USA Hockey) drops the "blade only" certainty. :404, :1712, :1726 cite 7.1(c) with Appendix D Note 1. :1724 "a plain hold".
- **rules_primer:** :414/:445/:505 cite "(7.1(c); Appendix D Note 1)". :810 "under CARHA, charging a goalie in their crease, or hurting one by a charge or interference, ends your game, and any deliberate contact with one can." CM :1135 prices firing it out of the rink across six books, USA Hockey's avoidable-shot minor, and the mandatory retrieving-official misconduct.
- **risk_management / defending_the_rush:** "contradicts itself" removed; the trip rule bars a match under 8.6 itself, but plan on one via 7.1(c) and Appendix D Note 1 (7.11(c) Interpretation 2 "allows").
- **team_play_and_culture:** CM :638 scopes the leave-the-box ejection to NHL, PWHL, IIHF, with the NHL/PWHL three-game ban. :397, :637, :639 and KT5 :712 add that in Hockey Canada one argument can end your game (11.1(d)/(e) Note 1); found by the safety review, pre-existing.
- **mental_game:** :574 adds that a Hockey Canada referee can go straight to a game misconduct (11.2(e) Note 1). The CARHA-gesture caveat was added at :693 and then reverted (above).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier ×3 (censuses) | as above |
| rules-verifier + safety-reviewer, batch A (pr, dzc + caption, ozp, rm, dtr) | MAJOR: dzc :182 omitted USA Hockey's reckless trigger. Minors: HC double minor; "gives" vs "allows"; 7.1(c) alone weaker; IIHF 43.5. Safety SHIP all. |
| rules-verifier + safety-reviewer, bcb | Safety FIX: :1666 gave CARHA a double-minor ceiling (48(f) match on injury; 63(a) major). Rules: 7.1(c) alone half-answer; USA Hockey "every time" unsettled; "only Hockey Canada" misses 622(b). |
| rules-verifier + safety-reviewer, batch B (rp, tp, mg) | Rules: CARHA "misconduct first" permissive (Rule 46 gross-misconduct paragraph); NHL/PWHL three-game ban missing; firing-into-the-corner act dropped. Safety: rp CM FIX (USA Hockey 601(a)(4)). |
| narrow re-reviews (rules + safety) on every repair | Safety caught p&r "major and ejection" (HC Game Ejection is a cheaper, separate penalty) → restored "game misconduct"; then the missing three-head-contact ejection in the facts layer → :440. Safety caught team_play KT5 "arguing is a minor (in Hockey Canada…)" → four sites. bcb :1666 63(a) → split into :1666/:1667. All final units CONFIRMED/SHIP. |

### C11
Every content edit was made by the authoring agent that owned its file, on reviewers' findings; the coordinator edited only the plan and this record, and ruled two reviewer disagreements: cite 7.1(c) and Appendix D Note 1 together; revert the CARHA gesture caveat (book ambiguous, conservative reading ships).

Checks after the last content edit: full `npm run build` (absolute binary) exit 0 including check:links; check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST and 0 SPLIT HALF on all nine content files (marked units HEAD = tree in each); check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on every changed unit, then on every repair |
| D2 Exceptions | HC 7.5 Interpretations 1 and 3; USA Hockey 608 open-ice push / minimal pinch; CARHA 53(a) "intentionally" |
| D3 Divergence | Each book's limb stated or scoped; IIHF discretion kept as "plan on"/"may" |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | All quotations re-read in sources/*.txt by the verifiers; hc.txt confirmed as the current HC book (one author first used the superseded print and re-verified) |
| D6 Negative existence claims | "IIHF has no match penalty" re-attacked and held; "no ruling settles which" (USA Hockey 606 vs 623) tested against the Casebook |
| D7 Cardinal rule | No coaching choice changed |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | Layer tests by every author; KTs read voiced alone |
| D10 Key-facts layer | Every changed facts line read voiced alone by safety-reviewers |
| D11 Reader safety | safety-reviewer, three passes |
| D12 Read-aloud integrity | Every edited page rendered and changed chunks read |
| D13 Folklore | None |
| D14 Structure, links | check_links and the site build's check:links pass |
| D15 Rendered site | Full build after the last edit; one caption sentence added with no glyph or bold, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
SG142 rows in OPEN_ITEMS.md: the Hockey Canada "Game Ejection" sweep; SG142 review carry-overs (mental_game gross-misconduct gaps, USA Hockey 601(c)(10)/610(c) double pricing, rules_primer :810 uncited 66(b), a corpus sweep for "arguing is a minor" without HC Note 1, bcb slew-foot citations, USA Hockey 621 unpriced on p&r :437, the p&r :437 double "minor", p&r :440 Junior/Senior misconduct ladder, team_play 11.1(vi), dzc "harsher of 43 and 48" for the IIHF, the PWHL 43.3 "45.5" typo).

## What this method could not have found
- Ejection wording without the trigger words ("your night is over", "you're done") and bare "X is a minor" lines with an injury tier; the census swept neither.
- Sibling pages carrying the same omissions fixed here (CARHA 63(a) for a shaft hold, the HC three-head-contact ejection, HC 11.1 Note 1, "ejection" for an HC game misconduct): repairs were per file.
- Official interpretations of CARHA Rule 46's closing paragraph, HC 7.1(c)'s "not otherwise covered", and USA Hockey 606 versus 623 for a shaft hold; none is on disk.
- How the new lines sound in the voice; text renders only.
