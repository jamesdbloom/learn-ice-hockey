# SG27: 🇬🇧 position, PWHL icing citations, forecheck captions (22 October 2026)

## Changes and why

- **🇬🇧 mid-sentence.** md_to_speech voices 🇬🇧 as "For British readers.", so a flag mid-sentence split the sentence aloud. Each flag now opens its own sentence or cell, with meaning and scope unchanged:
  - body_contact :612 and :1468 ("IIHF 43.1, the third" keeps the three-book count);
  - conditioning Key focus;
  - rules_primer :359 (a voiced table cell), :388, :769 and :1158;
  - risk_management :422;
  - team_play :319;
  - special_teams :753.
- **special_teams PWHL citations:**
  - Facts :685 and :691 cited NHL 81.6 alone for rules the IIHF (81.6) and PWHL (83.6) share.
  - Facts :1013 and the trailer cited PWHL 84.1 (the home-last-change exception) for the no-change ban, which is 83.4.
  - CM :1190 omitted the PWHL from "after your own icing… the visitors can change and you cannot".
- **forechecking_systems.mjs captions.** forecheck-press went from 2,896 to 887 characters and forecheck-pinch from 2,855 to 994. They were unreadable and unlistenable at that length.
  - Kept: the picture, the instruction, both ⚠️ limbs, the game-not-division checking prompt, the coaching-choice disclosure, and the wall posture.
  - Dropped the per-book checking-ban enumeration and the IIHF women's boards limb. Each host voices them nearby (see the review).
  - forechecking_systems.md had no prose unit over 2,500 characters. The third long unit is the forecheck-122 caption, recorded as a plan row with forecheck-131.

## Reviews

- **safety-reviewer: CLEAR.** Every dropped caption limb is still voiced in its host:
  - forechecking_systems: in the same chunk or one before;
  - game_management: the only lost limbs there are a permission (hold-ground, safe direction) and the IIHF women's boards limb, in a page that teaches no wall contact and says "pinch for the puck with your stick, not the player".
  - All 🇬🇧 moves were confirmed in rendered speech.
  - All PWHL citations were verified (83.2, 83.4, 83.6, 84.1, 89.1; IIHF 81.6).
  - Optional and unvoiced: the pinch caption's code comment overstates game_management's checking scope.
- **site-reviewer (8 pages × 4 cells, headless Chromium): PASS.**
  - Both shortened captions render, with warn-inline on their ⚠️.
  - 0 bare glyphs, 0 panels, no overflow, console clean.
  - Minor (pre-existing, plugin): 🇬🇧 has no no-break space after it, so at some widths it ends one line and its sentence starts the next. 7 of 79 flags were affected. Recorded as a plan row (remark-corpus bindGlyph).

- **rules-verifier (C4, run after the commit gate's block): all hold.** The six special_teams claims:
  - **:685 PWHL 83.6** (`pwhl_rules.txt:7202-7219`): exemption and major-penalty carve-out, word for word the NHL's (`nhl_rules.txt:8671-8689`).
  - **:691 release before expiry:** NHL `:8674-8680`, IIHF 2026/27 `:6816-6824` and v1.1 `:6704-6718`, PWHL `:7204-7211`.
  - **:1013 and trailer :1300, 84.1 → 83.4** (`:7176-7182`): 83.4 is the operative ban. 84.1 repeated it by cross-reference, so the old citation was not wrong, but 83.4 is better. 83.2 is at `:7151` and 89.1 at about `:7775`.
  - **CM :1190:** NHL/IIHF 81.4 and PWHL 83.4, with 82.1/84.1 "except in cases following an icing".
  - **:753 over the glass:** NHL 63.2(iii), IIHF 63.2(III) in both editions and PWHL 65.2(iii) carry no strength carve-out. The EIHL Casebook amends only 63.5, and the In-House Rules have no Rule 63 entry (flattened sweeps scored 0), so "it binds a British kill too" holds.
  - Optional and stricter, not cheaper: the :1013 "except for an injury" omits the goalie, strength-change and IIHF broken-skate exceptions. 63.2 omits its no-penalty-off-a-faceoff note. CM ~:1191 "never settle the point" on a steered draw needs a re-read (plan row).

## Gates (after the last edit)

- `npm run build` exit 0.
- check_callout_flow --bare: 0.
- check_facts, check_links and check_absolutes pass (408 caption units).
- check_marker_pairs: 6 files, 0 LOST.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ PWHL citations verified by the safety-reviewer and the authoring agent |
| D5, D6, D8, D13 | Out of scope |
| D7, D9 | ✓ Caption limbs traced into each host |
| D10 | ✓ Facts 297/300, 232/300, 292/300 |
| D11 | ✓ safety-reviewer CLEAR |
| D12 | ✓ Rendered |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS; flag line-wrap is a pre-existing plugin row |

## What this method could not have found

- Mid-sentence 🇬🇧 elsewhere in the corpus that the sweep pattern missed (one ending an abbreviation).
- How the shortened captions read beside their drawings on screen, beyond the site pass.
