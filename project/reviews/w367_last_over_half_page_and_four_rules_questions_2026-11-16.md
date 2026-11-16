# W367: the last over-half phone screen, the angle-into-the-corner case order, PWHL citations off the draw, and four open rules questions answered (16 November 2026)

**Files:**
- content/foundation/on_ice_communication.md
- content/systems/faceoffs.md
- site/src/diagrams/body_contact_and_battles.mjs
- site/src/data/diagrams.json (rebuilt; only `inside-lane-longer-route` and `angle-into-the-corner` changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
W366 plan rows (record `w366_over_half_screens_and_delay_of_game_remainder_2026-11-16.md`):
- (1) body_contact_and_battles still 54.7% at 400px;
- (3), (4) and (4b): open rules questions;
- (5) citation precision of the "regardless as to which player" quotation.

W365 plan rows (1) and (4): the angle-into-the-corner case order, and whether a puck shot at an official reaches the abuse-of-officials rules.

## What changed
A caption's amber runs from its glyph to the end of the caption.

**A. `inside-lane-longer-route` caption** (body_contact_and_battles.mjs; host body_contact_and_battles.md:1548). W366 had placed the 54.7% window in "Arrive with body position, not just with speed". Author A found that no run in the markdown was long. The 464-character run was this caption, which runs from "⚠️ Body position is what does this work…" to the end.
- First, the glyph moved to the last sentence, with no word changed. The amber became "⚠️ Never hold, pull, tug or grab with your free hand."
- After the safety Minor (see Reviews), the amber is now "⚠️ Arc for the puck, not their body, and never hold, pull, tug or grab with your free hand." (91 characters, 8 words added).
- The "only while you are going for the puck" condition, the USA Hockey 625(a)(4) minor and the Hockey Canada/CARHA sentence are now plain caption text before it, unchanged.

**B. `angle-into-the-corner` caption** (same module; hosts body_contact_and_battles.md:925, skating.md:147). "The third" became "The worst", so a reader no longer meets Case 3 before Case 2. The caption is 980 characters before and after. Every Case 3 limb is kept, and the amber is unchanged. The host prose numbers the cases, so the caption was not renumbered.

**C. Citation precision.**
- on_ice_communication :184: "Rule 85.1 (PWHL 87.1) says no penalty *"regardless as to which player may have last contacted the puck"*".
- faceoffs :1248: "the 63.2(iii) Note (PWHL 65.2(iii)) and 85.1 (PWHL 87.1) *"regardless…"*".
- No other word changed and no glyph moved.

**D. Read-only research on four open rules questions.** No content changed; the findings are in the plan (see below).
1. **IIHF 52.2 slew-foot.** It has no lesser tier. Situation 52.1 (both handbooks) says a major and game misconduct "is the only option", but a minimal act may be called roughing or tripping instead. So "ejects" is accurate for a *called* slew-foot.
2. **Hockey Canada 7.1(c)(iii).** Attempting to kick or kicking an opponent is a mandatory match. The book is internally split on whether a kick at the feet is slew-footing: the Glossary says "knock or kick", 8.8 says "knock, drag, or sweep". So "plan on a match" applies to Hockey Canada as well as CARHA.
3. **PWHL Rule 48.** The book never defines "hit". Every avoidability criterion describes a body check, and the rule has no IIHF-style "or equipment". This is unresolved. KT8's three-book list stays, and a body sentence should say not to plan on the minor.
4. **A puck shot at an official.**
   - In the NHL, PWHL and IIHF, shooting it out of an official's reach is a misconduct (39.4(ii)).
   - Shooting it in an official's general direction is a game misconduct (39.5(vi)) plus a Category III suspension (40.4): at least three games in the NHL, at least one in the PWHL, and left to the Disciplinary Code in the IIHF.
   - Throwing an object at a spectator is an automatic game misconduct (23.8).
   - In CARHA, 46(b)3 is a misconduct, and 71(c) and 48(a) give a match for an attempt to strike or injure.
   - **So the corpus's "the NHL, PWHL and IIHF stop at the minor" understates a mandatory tier for this aggravated case — the permissive direction.** This is the lead row of the next wave.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All four units OK, with rule text quoted:<br>• NHL/IIHF 85.1 and PWHL 87.1, read past the quote;<br>• PWHL 65.2(iii) Note as the twin of NHL 63.2(iii)/IIHF 63.2(III);<br>• USAH 625(a)(4), HC 8.3, CARHA 66(a)1;<br>• "never hold … free hand" true in all six books (NHL 54, IIHF 54, USAH 622, HC 8.1(a), CARHA 63(a), PWHL 55).<br>Final read of the 8 added words: OK. NHL 56.1, IIHF 56.1 and PWHL 57.1 grant body position to lengthen the path with no stick or free hand. "Not their body" is stricter than the possession-by-last-touch check those books allow, which is the safe direction. |
| safety-reviewer | **Minor: inside-lane amber.** "Never hold … free hand" beside an arcing route read as "take their line, just keep your hands off", which is the 625(a)(4) shape. It prescribed "Arc for the puck, not their body, and never hold…", applied verbatim. It also corrected the author's reasoning: the 625(a)(4) sentence leads with the act, not a citation. **Placement point at faceoffs :1248:** 65.2(iii) sat beside a quotation found only in 87.1. Fixed. angle-into-the-corner and the citations: CLEAR. |
| safety-reviewer, final read | Both CLEAR. The built page shows only the 91-character sentence in `warn-inline`. Rendered chunk 140 still opens "Important. Diagram." and voices the whole caption. |

### C11
The coordinator wrote no content. The two post-review edits use the safety reviewer's exact text and placement, and both final reads cleared them.

## Checks after the last content edit
- build-diagrams ran after the last .mjs edit. A full `npm run build` (absolute binary) exited 0 and ran through check-links. `dist/index.html` is dated 16:16:13, and `find content site/src/diagrams site/src/data -newer` returns nothing.
- check_links --quiet, check_facts, check_absolutes (caption layer certified), check_geometry, check_secrets: all pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_caption_pairs: 0 violations.
- check_marker_pairs: 0 LOST and 0 SPLIT on both content files.
- check_caption_negations: lists the new "not their body" limb. It was read and is correct.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every unit and on the post-review words; research D on four questions |
| D4 Citations | the PWHL renumbering confirmed in source (65 delay of game, 87 puck out of bounds, 85 off-side) |
| D8 Counts | "all six books" for the free-hand limb re-derived |
| D11 Reader safety | safety-reviewer, two passes |
| D12 Read-aloud | rendered body_contact_and_battles, skating, on_ice_communication and faceoffs; captions keep "Important." |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 16:16 build, Playwright Chromium 400×812 DPR 2 and 1440×900, light and dark, 32 loads. 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll. |
| D5–D7, D9, D10, D13 | not engaged |

| Site (worst 400px window) | Before | After |
|---|---|---|
| inside-lane-longer-route caption | 54.7% | 13.8% |
| body_contact page worst | 54.7% | 48.5% (the pre-existing Shot Blocking caption) |
| angle-into-the-corner (both hosts) | 17.0% | 17.0% |

No checked page is now over half a phone screen at 400px.

## Found, not fixed (plan rows)
- **The puck-at-an-official tariff** (research D Q4). It must be propagated to every layer carrying "stop at the minor" or the after-whistle tariff: rules_primer :566, playing_without_the_puck :361/:379, risk_management :383, game_management :1266, goaltender :1795, plus a layer test.
- **Hockey Canada kick** (Q2). Add Hockey Canada beside CARHA at the slew-foot sites: rules_primer KT8, risk_management :903/:928/:991, body_contact_and_battles :2081/:2182.
- **"A called slew-foot"** (Q1). Apply at rules_primer KT8, risk_management :903/:928 and body_contact_and_battles :2182 and the table cell :1733. This is optional, and the current wording errs harsh.
- **PWHL head-high cross-check** (Q3). Add a body sentence to rules_primer: at least a minor, and possibly a major plus game misconduct (60.3/60.5). Whether Rule 48 reaches a stick is unwritten, so do not plan on the minor.
- **Citation census.** risk_management :356/:375 give "the 63.2(iii) Note" for the PWHL without 65.2(iii). defensive_zone_coverage :841 says bare "Rule 85.1". Both are citation-only.
- **Page worsts now just under half:** body_contact Shot Blocking caption 48.5% (391-character run); on_ice_communication 46.7% ("Why verbal communication wins games", 426-character run).

## What this method could not have found
- A Hockey Canada casebook or bulletin on kicking, and PWHL officiating guidance on "hit". Neither is on disk.
- Whether a shot puck counts as "throws" for the spectator clause.
- Real devices and browsers other than Chromium.
