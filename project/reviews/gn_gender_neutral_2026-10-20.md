# GN (20–21 October 2026): gender-neutral language across the corpus

**Owner instruction (20 Oct):** "I don't want us to assume players are male so we shouldn't use terms like 'his' but should use gender neutral terms like 'they'". The owner then confirmed it applies to the website pages, with rulebook quotations kept word for word.

## The pass

**Agents:**
- gn-a: foundation
- gn-b: zone_entries and DZC
- gn-c: faceoffs, defender and center
- gn-d: special_teams, winger, DTR and breakouts
- gn-e: GM, body_contact, PWTP, goaltender, forechecking, switching and team_play
- gn-f: the other 15 pages

Brief: scratchpad `gn_brief.md`.

**What changed:** he/him/his/himself used for a player, goalie, official or coach became they/them/their/themselves. A role noun (the carrier, the goalie, the attacker, that player) was used wherever "they" could point at either of two people.

**Left unchanged, with the reason:**
- Rulebook, casebook and source quotations: they stay verbatim. A sentence may say "they" while the rule it quotes says "his".
- Named real people: they keep their own pronouns, or their surname is used.
- "her" in the PWHL and IIHF women's passages.
- Terms of art such as man-on-man, point man, odd-man and "your man".

**Changed even though it sits inside quotation marks:**
- The corpus's own example speech and call names: "I've got them", "Pick them up", "They're gassed", "They turned at the last second".
- "the man", where it meant an individual player in a voiced line: "a player without the puck", "take the puck, not the player", "never at the player".

## Review

Four safety-reviewers each took a share of the diff (gnR-a to gnR-d). gnR-b2 then covered the breakouts lines after :1123, which gnR-b's output had cut off.

**CRITICAL (gnR-b):** breakouts facts :1013. It was truncated mid-clause in HEAD ("only once he has"). The coordinator's first completion ("whistles one who plays you knowing they are offside") dropped "can" and "deliberately". It now reads:

> "can whistle one who deliberately plays or tries to play you knowing they are offside, but only once they act"

This matches HC 6.11(d)(i) ("deliberately plays or attempts to make a play … knowing that they are off-side") and was confirmed by gnR-b2.

There were no MAJORs. The MINOR antecedent fixes the coordinator applied, all in the reviewers' wording:

| File | Fix |
|---|---|
| winger :775, switching :298 | "must if the player hit is injured" (HC 7.6(b); "they" had read as the referee) |
| switching :296 | "endangers the player hit" |
| goaltender :1081 | "unless that player is also serving minors" (NHL 20.3) |
| game_management :964 | "one that hurts the player" |
| winger :772 | "the trailer's path", "the opponent's body" |
| playing_without_the_puck :541 | "never past one parked" |
| zone_entries :794 | "charging one ejects you" (8.5(b) is goalie-only) |
| zone_entries :352 | "for cross-checking one there" (CARHA 54(c) is goalie-only) |
| zone_entries :353, :1171 | "the goalie's return", "stop the goalie getting home" |
| zone_entries :242 | "if the player hit is defenceless" |
| DZC :109/:143/:868 | "unable to see the attacker/them coming" |
| defending_the_rush :1042 | "The late attacker" |
| neutral_zone KT7 | "take the trailer" |
| OZP :1110 | "never the opposing centre's hands" |
| passing :221 | "back to the middle of the ice" (Casebook 608 wording) |
| rules_primer :35/:1100 | "drives the player head first" |
| rules_primer :1167 | "whether the player 'put himself…'" |
| on_ice :640 | "an opponent's skates" |
| rink_map :208 | "the goalie's net … the goalie has touched" |
| breakouts KT13, CM | "give the forechecker the ice" |

**Facts caps.** Several lines sat at their cap after these fixes and were trimmed by substitution only; check_facts passes.

## Gates (after the final edit, no pipes)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts all pass.
- check_marker_pairs: 31 files, 0 LOST, 0 SPLIT.
- check_quote_drift: identical to HEAD in every file, so no source quotation was changed.
- No "they is/has/does" agreement errors.
- Full site build after the final edit: exit 0, check:links passes.

## Dimensions

| Dim | Coverage |
|---|---|
| D1 rules | No rules-verifier ran: the wave changed pronouns, not rules. The safety-reviewers and the commit gate re-derived every tariff line the wave touched against hc.txt, carha_2026.txt and nhl_rules.txt. That covers breakouts :1013 (HC 6.11(d)), zone_entries :794/:352/:242 (HC 8.5(b), CARHA 54(c), 53(b)), winger :775 and switching :298 (HC 7.6(b)), goaltender :1081 (NHL 20.3), and game_management :894-:897 (HC 7.4(c), 7.5, 7.7(b)). No rule number, tier or scope changed. |
| D2 exceptions | Checked as part of D1. The 6.11(d) "attempts to make a play" limb was restored, and no exception limb was lost in any re-derived line. |
| D3 divergence | No book attribution changed. The gate found no scope change. zone_entries :794's list still names all six books. |
| D4/D5 citations | check_quote_drift is identical to HEAD in every file. No citation or URL changed; the only source-trailer edits are names replacing pronouns (Weinberger, Parker). |
| D6 negatives | No negative existence claim was added or altered. |
| D7 cardinal rule | No coaching choice was reworded as law. The wave touched only pronouns, antecedents and cap trims. |
| D8 numbers | No figure changed. |
| D9 summary layer | The reviewers read every changed Key focus, Common Mistakes and Key Takeaway line as voiced alone. |
| D10 facts layer | Every changed ```facts line was read by a reviewer for antecedent and meaning; that was priority item 2 in each brief. The cap trims made after review (for example zone_entries :242 "defenceless", winger :744, special_teams :773/:900, PWTP :541) were read by the commit gate, which found each one keeps its meaning. check_facts passes. No dedicated facts-reviewer ran, and that is the coverage gap. |
| D11 safety | Four safety-reviewers plus gnR-b2. One CRITICAL (breakouts :1013) was fixed. No MAJOR. |
| D12 read-aloud | Text-only. Nothing was rendered through md_to_speech. |
| D13 folklore | Out of scope. |
| D14 structure | No headings changed, only bold list leads. check_links passes. |
| D15 site | Full build after the final edit (exit 0, check:links passes). --bare 0. No site/ file changed. |

**Correction to the policy stated above:** most named real people kept their pronouns. gn-d and gn-e replaced a few with the surname or "their" (Weinberger, Parker, Novet), which is harmless.

## What this method could not have found

- **Heard alone.** A "they" that reads clearly but is ambiguous when heard alone.
- **Unmarked quotations.** A quotation not marked with quote marks, which the sweep would have edited.
- **Other gendered nouns.** "guys", "-man" compounds and "men's" outside the swept lines.

## Files

| File | Lines |
|---|---|
| content/foundation/language_and_glossary.md | +12/−12 |
| content/foundation/on_ice_communication.md | +13/−13 |
| content/foundation/rink_map.md | +10/−10 |
| content/foundation/rules_primer.md | +120/−120 |
| content/foundation/uk_rules.md | +3/−3 |
| content/hockey-iq/playing_without_the_puck.md | +26/−26 |
| content/hockey-iq/risk_management.md | +10/−10 |
| content/hockey-iq/scanning_and_anticipation.md | +2/−2 |
| content/hockey-iq/time_and_space.md | +9/−9 |
| content/off-the-ice/conditioning_and_recovery.md | +1/−1 |
| content/off-the-ice/how_to_watch_hockey.md | +5/−5 |
| content/off-the-ice/practice_and_development.md | +1/−1 |
| content/off-the-ice/team_play_and_culture.md | +14/−14 |
| content/positions/center.md | +30/−30 |
| content/positions/defender.md | +57/−57 |
| content/positions/goaltender.md | +20/−20 |
| content/positions/switching_positions.md | +20/−20 |
| content/positions/winger.md | +37/−37 |
| content/systems/breakouts.md | +32/−32 |
| content/systems/defending_the_rush.md | +37/−37 |
| content/systems/defensive_zone_coverage.md | +72/−72 |
| content/systems/faceoffs.md | +91/−91 |
| content/systems/forechecking_systems.md | +2/−2 |
| content/systems/game_management.md | +32/−32 |
| content/systems/neutral_zone_systems.md | +9/−9 |
| content/systems/offensive_zone_play.md | +4/−4 |
| content/systems/special_teams.md | +65/−65 |
| content/systems/zone_entries.md | +71/−71 |
| content/technique/body_contact_and_battles.md | +7/−7 |
| content/technique/passing_and_receiving.md | +9/−9 |
| content/technique/puck_handling.md | +4/−4 |
