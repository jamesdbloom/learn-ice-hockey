# SG83: "Likely multi-game suspension" for every USA Hockey match on the discipline policy (25 October 2026)

**Files:** project/plans/OPEN_ITEMS.md, plus these 27 content files:
- content/foundation/on_ice_communication.md
- content/foundation/rink_map.md
- content/foundation/rules_primer.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/risk_management.md
- content/hockey-iq/scanning_and_anticipation.md
- content/hockey-iq/time_and_space.md
- content/off-the-ice/equipment.md
- content/off-the-ice/mental_game.md
- content/off-the-ice/team_play_and_culture.md
- content/positions/center.md
- content/positions/defender.md
- content/positions/goaltender.md
- content/positions/winger.md
- content/systems/breakouts.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- content/systems/faceoffs.md
- content/systems/forechecking_systems.md
- content/systems/game_management.md
- content/systems/neutral_zone_systems.md
- content/systems/offensive_zone_play.md
- content/systems/special_teams.md
- content/technique/body_contact_and_battles.md
- content/technique/passing_and_receiving.md
- content/technique/puck_handling.md
- content/technique/shooting.md

## What changed and why
On 25 October the owner extended the 19 October 602(a) ruling: "Yes, all SDP matches". USA Hockey's Standardized Discipline Policy (usah.txt :1137–1254) recommends a suspension range for every match penalty it lists:
- Level 1, 6–10 games: 305(b), 601(e.2), 602(a).
- Level 2, 4–8 games: 603(c), 606(b), 607(e), 608(c), 619(b), 620(c), 634(d), 635(b).
- Level 3, 3–5 games: 601(e.3), 604(e), 609(c), 611(c), 615(c), 621(c), 622(c), 623(c), 627(b), 628(c), 633(a or b), 634(c), 639(c) and "640(e)". The policy prints 640(e), but the match is in fact 640(h).

601(e.1) is excluded. Sites priced only "until your case is heard" or with nothing at all made these matches sound like one-game events. Helmet removal is the clearest case: it read cheaper than the game misconduct beside it (equipment :813, bcb :2020, team_play :283).

Five agents, each owning disjoint files, added the clause where the match is USA Hockey's and the same limb did not already carry it. CARHA matches keep their 34(a) wording, by the owner's ruling. No range or level is stated against 640(h). The wording is always "likely", because the ranges are recommendations that a hearing may change (:1166–1169).

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules: systems (9 files) | rules-verifier | One MAJOR: forechecking :626 said NHL/PWHL "ejection only on injury", which is false because 21.1 ejects for an attempt with no injury. Minors: dzc :500 lost "at its floor" and put the ban inside the Casebook's "requires"; ozp :931 "with no injury" read as a condition. Every other hunk VERIFIED, including special_teams :1121's ranges. |
| Rules: positions and bcb | rules-verifier | One MAJOR: defender :465 merged Hockey Canada's head-first ejection into "off the head", which contradicts the page's harsher-of-7.5-and-7.6 rule. Minors: winger :519 lost the IIHF "major"; winger :518/:520 lost USA Hockey's scope on "reckless"; bcb :1140 named no book; goaltender :1372 dropped book names; nits on bcb :742/:1712 and winger :748/:751. center :754's paraphrase VERIFIED. |
| Rules: other 13 files | rules-verifier | One MAJOR, which is also the safety CRITICAL below. Moderate: playing_without_the_puck :808 "defenceless player" reads as a state, where HC 7.5(c) and CARHA 53(b) describe a result ("in such a way that"). Minors: rules_primer :390 put 601(e.2) in "three to five"; rules_primer :91 dropped "recklessly" from the puck-at-an-official trigger. |
| Safety | safety-reviewer | One CRITICAL: equipment :129/:813 and mental_game :575 changed "suspended until the case is heard" to "a likely multi-game suspension once the case is heard". That lost USA Hockey 405(c)'s interim suspension from games and practices. Minors: dzc :500, defender :342 (the match cut loose by a semicolon), goaltender :755 (404(b) left unscoped), center :754 ("or defend" dropped), rink_map :227 (implied USA Hockey has no interim exclusion beside CARHA's), ozp :801 (duplicate clause), and lines too stacked to follow. |

### C11: coordinator repairs after review, each confined to its finding
- forechecking :626 (F1 MAJOR): "ejection only on injury" (false; NHL/PWHL 21.1 eject for an attempt with no injury) → "game misconduct on injury" (NHL 56.5, PWHL 57.5); "a match and likely multi-game ban" → "a match, likely multi-game ban" to fit 297/300.
- dzc :500 (F2): restored "at its floor (608(a)'s minor plus misconduct)"; the ban moved out of the Casebook's "requires" clause to a trailing "; a match: likely multi-game ban". 291/300.
- ozp :931 (F3): "with no injury" → "with nobody hurt" (unambiguous); "not capped there" → "uncapped there" to fit.
- F1 MAJOR (rules-verifier B): equipment :129 and :813, and mental_game :575, had "a likely multi-game suspension once the case is heard/reviewed", which lost USAH 405(c)'s interim suspension (suspended from games and practices UNTIL the case is dealt with). Now "suspended until the case is heard, likely for several games". Corpus-wide grep for "once (the|your) case is" confirmed only those three sites.
- F2 (playing_without_the_puck :808): "on a defenceless player" (the victim's state) → "so they can't defend themselves" (the result of the hit, per HC 7.5(c) and CARHA 53(b) "in such a way that").
- F3 (rules_primer :390): the SDP Level 1 range now also covers 601(e.2) (spitting, threats, a puck shot recklessly at an official); before, those fell into "three to five for most others".
- F4 (rules_primer :91): added "recklessly" to the puck-at-an-official match trigger (Note to 601(d)).
- Safety C1 = rules F1 (the interim 405(c) suspension): fixed as above.
- Safety M5 (rink_map :227): the new USA Hockey sentence sat beside CARHA's interim exclusion and implied USA Hockey has none. It now reads "keeps you out of games and practices until your case is heard, and a multi-game suspension is likely" (405(c)).
- Safety M7 (ozp :801): removed the duplicated clause; the next sentence already carries it.
- Safety M6 (forechecking :738): restored a verb: "its Casebook for any forceful one at the boards".
- defender :465 (rules MAJOR: the merge dropped Hockey Canada's head-first ejection, which contradicts the body's harsher-of-7.5-and-7.6) and winger :518/:519/:520 (the IIHF 43.2 limb lost "major"; USA Hockey's name was stripped from 609(b)/602(a), so "reckless" read as a mandatory tier in every book): **reverted to HEAD**. These four lines are now cap-blocked (plan row). Each page states the clause elsewhere.
- defender :342 (safety M2): the 602(a) match was cut loose by a semicolon, so it read as the price of any hook. Now joined: "…USA Hockey 623(b), with a USA Hockey match and likely multi-game ban (602(a))".
- goaltender :755 (safety M3): restored "Under USA Hockey … also" on the 404(b) next-game sentence.
- center :754 (safety M4): restored "or defend" to the Hockey Canada and CARHA test; "boards or net" → "boards/net" and the colon dropped, to fit.
- bcb :1140: the new suspension sentence now names USA Hockey (the paragraph opens on the NHL). bcb :1712: parenthesis untangled. bcb :742: "the IIHF has none" restores the verb; "NHL and PWHL" → "NHL, PWHL" to fit.

- **rules_primer :390, after the commit gate (BLOCK):** the F3 repair had scoped all of 601(e.2) to "at an official", so spitting at an opponent, threatening a player, or a puck shot at a spectator fell into "three to five". It now reads "for spitting at an opponent, spectator or official, threatening an official or opponent with harm, or recklessly shooting the puck at an official or spectator (601(e.2))", following 601(e)(2) and the Note to 601(d). "Recommends a suspension for each match" now adds "except one for striking an official", because 601(e.1) is excluded from the policy (:1146–1150). Both changes were verified by a rules-verifier against usah.txt.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | Three rules-verifiers. Every MAJOR and moderate finding was repaired (see C11). **Accepted minors, left unchanged:** goaltender :1372 "(7.5(c), 53(b))" without book names (both books are named earlier in the line; restoring them runs to 308/300); winger :748 "boards or frame" and :751 "The IIHF has none" (nits; meaning intact). |
| D4–D5 citations, provenance | No new citation. Paraphrases that replaced quotations were checked against hc.txt and carha_2026.txt (center :754, playing_without_the_puck :808). |
| D6 negative existence claims | "The IIHF has none" / "writes none" re-checked by grep in both IIHF editions. |
| D7 cardinal rule | None; the clause is a price, not a coaching choice. |
| D8 numeric ownership | No figure added. Three existing range statements (team_play :285/:290, special_teams :1121) were verified against the SDP and kept; there is an owner row on whether to simplify them. |
| D9 summary layers | Each agent swept every layer of its files. The interim-suspension loss was layer-tested in equipment and mental_game. |
| D10 facts layer | Every reworded facts line was read against primary text by a verifier. Four over-compressed lines were reverted to HEAD. check_facts exits 0. |
| D11–D12 safety, read aloud | safety-reviewer. Winger and center were rendered to audio. Stacked lines were repaired where they lost a verb. |
| D13 folklore | Out of scope: no new unsourced claim. |
| D14 structure and links | check_links and the site check-links pass. |
| D15 render | The site build exits 0. check-podcast-guids passes. |

### Mechanical checks (after the last content edit)
- Exit 0, run without a pipe: check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets, check_counts --update.
- check_marker_pairs: 0 lost markers. There is 1 split-half candidate (dzc :500); it is a pre-existing unmarked facts line that shares words with a marked body unit, not a split.
- check_tables: no table dropped by this wave.
- Site build with the absolute npm: exit 0, and every link resolves.

## What this method could not have found
- USA Hockey matches phrased without "match" or a rule number (for example "ends your game and more").
- Chunk placement of most added clauses. Only two documents were rendered.
- A sentence elsewhere written on the old "until heard" wording that names no match.
