# SG20: readability on the remaining 20 pages, plus rules follow-ups (22 October 2026)

## Scope

The readability brief (scratchpad z/brief.md) was applied to every page that still had a paragraph over 1,200 characters, a sentence over 60 words or a Key Takeaway over 60 words:
- forechecking_systems, offensive_zone_play, playing_without_the_puck, game_management
- special_teams, faceoffs, breakouts, defensive_zone_coverage
- defender, risk_management, on_ice_communication, neutral_zone_systems
- getting_started, switching_positions, mental_game, time_and_space
- core_principles, scanning_and_anticipation, practice_and_development, puck_support_and_spacing

It also covered three rules follow-ups in rules_primer and uk_rules.

**Corpus-wide after SG20** (tree, check_readability):
- 1 long paragraph, down from 20 before SG19;
- about 49 long Key Takeaways, down from 78. Every remaining one keeps a mandatory or safety limb.

## Rules fixes

- **rules_primer, faceoff item 1.** HEAD said "touching the line is allowed, crossing it is not". That is NHL/IIHF/PWHL wording. Hockey Canada (Glossary ENCROACHMENT) and CARHA count a skate ON the circle as encroachment, which ejects the taker (HC 6.2(d), CARHA 57(a)). The line was permissive and wrong for Canadian readers.
  - Now: "Stay off the line too" with the book split.
  - The stick clause also now says Hockey Canada, CARHA and USA Hockey keep the stick out from between the hash marks (Casebook 613 Situation 8).
- **rules_primer, freezing list.** "Throwing it forward" now says "towards the other team's net", with the 67.3(iii) Note: play goes on until that attack ends, and a goal replaces the minor.
- **uk_rules KT9.** "Play your stick to the stricter IIHF edition" was dropped, because neither edition is uniformly stricter (2026/27 60.1 narrows the definition; 60.3 widens the injury tier). Now: keep your stick below every opponent's shoulders in either edition.
- **Repairs from review:**
  - breakouts KT6: the PWHL is back under "assume". PWHL 1.8 and 27.8 enforce no trapezoid.
  - breakouts KT12: protection ends when the puck leaves your stick, not only on a pass.
  - special_teams: books named rather than "all three".
  - neutral_zone KT4: "a stand-up finished as a hit". The old wording said any finished hit is charging.
  - switching KT8: the "Called as checking from behind" scope is restored. Under Hockey Canada, head contact is priced by 7.6.
  - getting_started: the USA Hockey 608(b) reckless tier is added.
  - Scope rewording from "league" to "game": defender KT3, game_management KT14, DZC KT6.

## Readability changes (per agent reports)

- Long paragraphs split or trimmed: forechecking, OZP, game_management, special_teams, getting_started, switching, on_ice_communication.
- Long sentences split: PWTP's notes, communication's 88-word sentence, practice's concussion sentence, defender, risk.
- About 40 Key Takeaways shortened, each checked limb by limb against HEAD. neutral_zone gained KT9, the boards limb, as its own takeaway. The scanning disclosure bullets were split; nothing was cut.
- No tariff moved between layers. No facts lines were touched.

## Reviews

- **Safety: four passes over the 20 pages, plus a re-read of the repairs.**
  - **Major:** game_management's pinch split made md_to_speech restart the numbered list, ranking "pulling the goalie" second in a list ordered by safety. Rejoined; it now voices First to Fifth.
  - **Major:** breakouts KT6 PWHL trapezoid (see above).
  - **Minors, all fixed:**
    - breakouts KT12;
    - game/league scope;
    - DZC landing hazard;
    - OZP "every book penalises jumping into a check";
    - mental_game "retaliate" and "hands them a power play";
    - core_principles KT11 "if the wall is unavoidable";
    - defender KT3;
    - neutral_zone KT4 and KT9 ("On the boards").
  - **Re-read of all repairs:** CLEAR.
- **Rules: two verifiers.**
  - Fixed: the faceoff stick clause, the PWHL trapezoid, the special_teams books, switching KT8 scope, getting_started 608(b), neutral_zone KT4.
  - Confirmed: kicking (five match books plus IIHF discretionary), uk_rules KT9, freezing, the charging ladders, HC one-argument ejection, IIHF 43.2/43.3.
- **Site-reviewer (headless Chromium, all 22 pages × 3 widths × 2 themes): PASS.** Lists render as single lists (game_management 1–5, switching CM 16, NZ KT 1–11); 0 bare glyphs, 0 panels; no overflow; console clean. The neutral-zone KT9 "On the boards" edit landed after that build, so the site was rebuilt (exit 0) and the string confirmed in dist.

## Gates (after the final SG20 edit)

- `npm run build` exit 0.
- check_callout_flow --bare: 0.
- check_facts, check_links, check_geometry and check_secrets pass.
- check_absolutes passes on prose. Its caption staleness flag came from SG21's puck_handling.mjs, which has since been rebuilt, and it now passes.
- check_marker_pairs on the SG20 files: 0 LOST.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ two rules-verifiers |
| D5, D6, D8, D13 | Out of scope |
| D7 | ✓ |
| D9 | ✓ Layer tests by each agent (faceoff line rule checked in rules_primer In short and CM) |
| D10 | ✓ No facts changed |
| D11 | ✓ Four safety passes plus re-read |
| D12 | ✓ Rendered and read alone |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS; rebuilt after the last edit |

## Still open (moved to the plan)

- Faceoff line and stick on other pages. Partly done in SG21 (centre, winger). The faceoffs dzone caption should add "off the circle line".
- on_ice_communication: NHL/PWHL bar shorthanded icing when short-handed by a major with no player in the box.
- Repetition pass on all pages (not done).
- check_readability joins `> - ` items.

## What this method could not have found

- Layers built on old wording that the diff did not touch.
- A rule that prices the same act under another heading.
- How the compressed KTs sound to a listener, beyond rendering and reading them.

**Also in this commit:** the plan clean-up the owner asked for. project/plans/OPEN_ITEMS.md now holds only the work list; the standing guidance moved verbatim to project/working_guidance.md; the row triage is in project/reviews/plan_cleanup_2026-10-22.md; and the CLAUDE.md layout line was updated.
