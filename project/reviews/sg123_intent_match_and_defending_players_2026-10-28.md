# SG123: NHL/PWHL intent-to-injure match is mandatory; CARHA's grant belongs to the side without the puck (28 October 2026)

**Files:**
- content/foundation/rules_primer.md
- content/systems/defending_the_rush.md
- content/technique/puck_handling.md
- content/off-the-ice/team_play_and_culture.md
- content/foundation/core_principles.md
- content/hockey-iq/playing_without_the_puck.md
- content/positions/winger.md
- content/positions/defender.md
- content/systems/defensive_zone_coverage.md
- project/plans/OPEN_ITEMS.md

## Why
Two claims, each found while repairing a single site, were swept corpus-wide.

**(a) The intent-to-injure match.** NHL 21.1 and PWHL 21.1 read: "A match penalty shall be imposed on any player who deliberately attempts to injure or who deliberately injures an opponent in any manner." A foul's own discretionary clause (43.4, 75.2(ii)) does not make that match optional. Four sites told an NHL or PWHL reader otherwise, either by giving only the "may" clause or by a closed list of books that left them out. These are permissive errors.

**(b) CARHA 66(a) Note 2** grants "stand their ground" or "shadow" to "the defending players", set against "the side in possession of the puck" (carha_2026.txt:3083–3088). Twelve sites read it as the defenceman position, or as a grant to "you" on either side, or left out "shadow".

## What changed
**(a), one agent:**
- **rules_primer :469:** "an attempt to injure or a deliberate injury is a match (21.1, 43.4)".
- **rules_primer :570:** "Rule 21.1 makes it mandatory for a deliberate attempt to injure, hurt or not".
- **defending_the_rush :479 and facts :842:** "a match in every book but the IIHF (NHL and PWHL 21.1, Hockey Canada 7.2(c) / 7.4(c), USA Hockey 602(a), CARHA 48(a))".
- **team_play :315** (two coordinator edits after the safety review):
- On rules-verifier pass 1, the coordinator rewrote it as "…is no licence to block a goalie: 66(a)(1) prices impeding an opponent not in possession, and under Note 1 a goalie never counts as in possession".
- Pass 2 found that rewrite WRONG: it overstated the rule and cited the wrong source.
- The final text is the verifier's own defensible form, applied verbatim: "under CARHA, 66(a)(1) can price impeding a goalie even without contact, since by CARHA's definition a goalie is never in possession."
- The paragraph's instruction ("get out of their lane… Get out of the way") is unchanged.
- check_links and check_marker_pairs pass (0 LOST).

**puck_handling :532:** NHL 75.2(ii)'s injury route plus the 21.1 match (see C11).
- **team_play :283:** the NHL and PWHL 21.1 match for a grab meant to injure.
- **team_play :744:** Sources, "which the NHL shares".

**(b), across two agents:** "defending players" or "the side without the puck", with "shadow" added where it was missing:
- core_principles :97, CM :249, KT :263;
- playing_without_the_puck facts :509, :546;
- winger facts :747, body :775;
- defender :305;
- defensive_zone_coverage facts :556, and :575 (quotation completed);
- team_play :315 and :557 ("an opponent's path").

team_play :315 changed meaning twice after review; see C11. It now reads: "…Hockey Canada writes no stand-your-ground limb, and under CARHA, 66(a)(1) can price impeding a goalie even without contact, since by CARHA's definition a goalie is never in possession."

## Reviews
| Files | Reviewer | Result |
|---|---|---|
| core_principles, playing_without_the_puck, winger, defender, defensive_zone_coverage | safety-reviewer (rule checks: carha_2026 66(a) Notes 1–2, 49(a)) | SHIP on all five. Every change narrows or sharpens the grant and none widens it. Quotations are exact. The winger :747 rewording ("not averting", "if intentional contact injures") keeps the 49(a) meaning. 0 LOST. |
| rules_primer, defending_the_rush, puck_handling, team_play | safety-reviewer (rule checks: NHL/PWHL 21.1, 43.4, 75.2(ii); hc 7.2(c), 7.4(c); carha_2026 48(a), 66; usah 602(a), 607(e); IIHF 2026-27 and v1.1 have no match penalty) | SHIP on rules_primer, defending_the_rush and team_play. The team_play :315 meaning change was upheld: it is closer to the book and errs safe, and the 66(a)/66(b) cost is in the same chunk (017). FIX (minor) on puck_handling :532: 75.2(ii)'s printed "specifically when injury results" route had dropped out of every spoken layer, which understates. See C11. |

| all nine (C4) | rules-verifier, two passes (greps recorded in its report: flattened `matchpenalt` = 0 across both IIHF editions, both situation handbooks, the IIHF disciplinary regs, the EIHL Casebook and the In-House Rules; `standtheirground`/`shadow` = 0 in hc.txt) | Pass 1: every quotation and rule number CONFIRMED except team_play :315. Its reason "speaks of attacking skaters, not a goalie" was unsupported: the CARHA Definitions (:428–431) count a goalkeeper as a player, and Note 1 only excludes the goalie from possession. D2 sweep: NHL/PWHL 41.4 and 42.4 carry the same "may" as 43.4, and neither book reconciles them with 21.1, so the corpus takes the harsh reading (as recorded in SG113). USAH 603(c), CARHA 48(h) and HC 7.1(c) contradict nothing. CARHA's goalie rules are 66(b) (both limbs), the 52(b) Note, 52(b), 66(e), 49(a) and 49(d); none prices non-contact obstruction of a goalie specifically. Pass 2, on the coordinator's rewrite of :315: WRONG. "66(a)(1) prices…" overstated, because Note 2 may cover a stationary skater if a goalie is an attacking player, and "Note 1" was the wrong citation (the Possession definition at :432–434 is the right one). The verifier gave a defensible form, which was applied verbatim. |

### C11
**team_play :315** (two coordinator edits after the safety review):
- On rules-verifier pass 1, the coordinator rewrote it as "…is no licence to block a goalie: 66(a)(1) prices impeding an opponent not in possession, and under Note 1 a goalie never counts as in possession".
- Pass 2 found that rewrite WRONG: it overstated the rule and cited the wrong source.
- The final text is the verifier's own defensible form, applied verbatim: "under CARHA, 66(a)(1) can price impeding a goalie even without contact, since by CARHA's definition a goalie is never in possession."
- The paragraph's instruction ("get out of their lane… Get out of the way") is unchanged.
- check_links and check_marker_pairs pass (0 LOST).

**puck_handling :532:** "though under NHL **21.1** a grab meant to injure is a match…" became "though NHL 75.2(ii) lets the referee go to a match *"specifically when injury results"*, and under **21.1** a grab meant to injure is a match…". This is the reviewer's own fix wording. It restores a limb that HEAD carried and matches rules_primer :570. check_facts and check_links pass; check_marker_pairs reports 0 LOST. The paragraph is 876 characters.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier (two passes) and both safety-reviewers' own rule checks |
| D2 Rules travelling without exceptions | The author agents' corpus sweeps: (a) four passes over about 485 hits; (b) 346 hits read in context. The reviewers checked layers per file |
| D3 Rule-set divergence | The IIHF is excluded from "every book but"; USA Hockey's own grant is left untouched |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Reviewer: "matchpenalt" scores 0 in both IIHF editions, the EIHL Casebook and the In-House Rules |
| D7 Cardinal rule | Reviewers: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | Reviewers: core_principles KT10; team_play has no facts/CM/KT on the grab; puck_handling facts :494 already stated 21.1 |
| D10 Key-facts layer | Reviewers read every changed facts line voiced alone |
| D11 Reader safety | safety-reviewers |
| D12 Read-aloud integrity | Every file rendered by its author and its reviewer |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; paragraphs under 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- defending_the_rush :354, :434, :586 and CM :1016 attach "meant to injure" to USA Hockey alone without naming NHL/PWHL 21.1. None says "only".
- playing_without_the_puck :509, voiced alone, prices 49(a) without a level.
- No 49(a) paraphrase mentions 49(c)'s accidental-contact carve-out (harsh direction).
- The CARHA grant was not swept in diagram captions or podcast scripts.
- playing_without_the_puck :509 and :546 say "lets ONLY the side without the puck". That is a reading: Note 2 does not forbid the side with the puck from standing its ground, only from running interference (harsh direction).
- Whether a CARHA goalie skating back counts as an "attacking player" under Note 2: not settled in any text on disk.

## What this method could not have found
- A paraphrase that uses neither "ground", "shadow" nor the rule number.
- An intent-to-injure sentence worded without "match".
- League amendments; whether 75.2(ii)'s "may apply Rule 21" reaches a non-deliberate injurious grab.
