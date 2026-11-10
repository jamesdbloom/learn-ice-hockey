# W226: twenty written leads for the largest remaining panel-first sections; follow-through and late-penalty claims scoped (10 November 2026)

**Files:**
- content/hockey-iq/playing_without_the_puck.md
- content/positions/defender.md
- content/systems/game_management.md
- content/systems/special_teams.md
- content/systems/offensive_zone_play.md
- content/technique/body_contact_and_battles.md
- content/positions/switching_positions.md
- content/systems/faceoffs.md
- content/systems/breakouts.md
- content/systems/neutral_zone_systems.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The owner's "lead with the tactic" decision of 9 November. After W225 a corpus census found 175 coaching sections still opening on a facts panel. This wave took the top 20 by panel size. Most were safety-heavy: goalie contact, the net front, driving the net, screening, and shot blocking. Four authoring agents worked on disjoint files.

## What changed
Each section below gained a one- or two-sentence lead directly under its heading, above its panel. Each lead gives the instruction with its limit in the same sentence.

**playing_without_the_puck**
- "What to do off the puck in transition"
- "Drive the net" — at the net, never at the goalie, not into the blue paint
- "To screen properly"
- "Whether you touch the goaltender" — never into the goalie, in or out of the crease

**defender**
- "Net-front technique — the stick" — as a pass or shot arrives, low on the shaft, let go; take it under the shaft or leave it on a forward bent low over the puck
- "Net-front technique — which way a body goes"
- "Step up" and "pinch" are two different plays
- "The trapezoid — which books paint one"
- "Power Play"
- Stick-lift timing made consistent at :13, :46, :243 and its facts line (~:248): "as a pass or shot arrives". To fit the 200 cap, that facts line's "can be called interference" became "can be interference".

**Other files**
- game_management "What doesn't work" — includes "no book caps a late hit at two minutes"
- special_teams "The four you will meet" and "Coincidental penalties"
- offensive_zone_play "The defencemen's three depths"
- body_contact "Where the angle ends" (with CARHA and Hockey Canada limits), "Protecting yourself on the boards" and "Shot Blocking: Technique"
- switching_positions — two leads
- faceoffs "Offensive-zone plays"
- breakouts "What it does to your breakout"

**Facts lines**
- faceoffs ~:520, special_teams ~:267, neutral_zone_systems ~:602. Each said "In a CARHA league keep the follow-through below the shoulders". Heard alone, that implies a high follow-through is free elsewhere, which is false under USA Hockey 621 (no excuse) and Hockey Canada 9.5 Interpretation 1 (Junior and Senior). They now read "Keep the … follow-through below the shoulders — only the NHL, IIHF and PWHL excuse a normal one (60.1, PWHL 61.1); CARHA 62(b) makes…". The defect was found by the W226d author and confirmed by both reviewers.

## Defects found by review, all repaired
1. **Safety BLOCK, the coordinator's first version of the three follow-through lines.** It said "below the shoulders in every book" on a `Rule:` line. That is a made-up restriction for NHL, IIHF and PWHL readers, and it contradicts the owner page, shooting.md :170/:241. Replaced with the safety-reviewer's wording, which names the three books that excuse a normal follow-through. A rules re-check confirmed it against all six books, including Hockey Canada 7.6 in minor hockey.
2. **Rules FIX-cheaper, special_teams "Coincidental penalties".** "In Britain a minor against a major gives you 4-on-4" omitted that the major's team then plays three minutes short. IIHF 19.1 serves the differential "in the normal manner", and Appendix IV example 19 ("Teams play 4 – 4", with the late-game differential) and the pattern spelled out in example 18 ("Teams play 4-4 for two (2) minutes … followed by Team B short-handed") show the shape. The lead and the facts line ~:952 now say so. A rules re-check confirmed both against both IIHF editions. Neither British book amends Rule 19.
3. **Facts layer.** The next facts line opened "But not late —", which points back at a line a listener may not connect it to. It now opens "A minor against a major…".
8. **Commit gate (first run) BLOCK, propagation.** game_management ~:1041–1042 carried the identical pair of facts lines (the incomplete 4-on-4 line and "But not late —"), and game_management is in this commit. Both now carry the same wording verified at special_teams. The plan row's unmeasured "175 → ~155" and unscoped "~863px" were also corrected.
4. **Safety R1, defender stick lead.** The face hazard was absent from the whole section. Added: "on a forward bent low over the puck, take it under the shaft or leave it — a miss that catches the face is a high stick however low your hands were". This is consistent with body_contact :350/:356/:1771.
5. **Safety R2, defender goalmouth lead.** "Keep any contact off their head" added. A narrow re-read then scoped "a legal check" to "where your game allows checking, a check".
6. **Safety R3, screener lead.** "Braced" could be heard as a locked frame, and "they" as the defender. It now reads "on a wide base with your knees and hips giving … but never a goalie's — give ground the moment a goalie leans into you".
7. **Safety R4, faceoffs.** "The tip play when you want the safest option" became "…the lowest-risk option against a counterattack", because the tip play puts teammates in the shot lane.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (20 leads and the facts lines; NHL, IIHF ×2, PWHL, USA Hockey and its Casebook, Hockey Canada, CARHA 2026, In-House, EIHL Casebook) | One FIX-cheaper (item 2) and one WORDING (the follow-through lines); everything else CORRECT. Verified as CORRECT: "avoiding the goalie is on you" in all six books; "position alone can cost the goal"; the trapezoid and freeze limits; "no book caps a late hit"; NHL/PWHL 19.1 4-on-4 against IIHF 19.1 substitution; CARHA 79(a). |
| safety-reviewer (20 leads, rendered) | BLOCK ×1 (item 1). R1–R4 applied. Every lead keeps its limit in the same sentence and chunk. |
| rules-verifier (narrow re-check of the coordinator's edits) | The follow-through lines, 4-on-4 and facts ~:952 are CORRECT. |
| safety-reviewer (narrow re-read of R1–R4) | Nothing blocking; two small wording fixes on the defender goalmouth lead, applied. |
| commit-gate (first run) | BLOCK: the game_management copies (item 8) and the plan row's unmeasured figures; every other condition passed, including source re-derivation of the follow-through lines, the 4-on-4 claim, goalie freeze and crease leads, and a corpus-wide check that no CARHA-only follow-through framing survives. |
| site-reviewer (Playwright Chromium, real 400×860 and 1440×900, light and dark, 10 pages, final build) | Nothing blocking. 20/20 leads are first under their heading, then the panel. 928 ⚠️, all warn-inline, 0 bare, 0 panels. 58 anchors per viewport land clear of the header. No overflow; clean console. RECOMMENDED: 73 panel-first headings remain on these pages, the tallest ~863px (plan); an all-bold lead under an H4 looks like the heading (plan, CSS). |

### C11
- The authoring agents wrote the 20 leads and the defender timing changes.
- The coordinator edited the three follow-through facts lines. The first version was BLOCKED; the safety-reviewer's wording replaced it and a rules re-check confirmed it.
- The coordinator applied: the rules-verifier's 4-on-4 wording (lead and ~:952, and the identical game_management ~:1041–1042 pair after the first commit gate); the safety R1–R4 wording; the narrow safety re-read's goalmouth wording; and the "But not late" fix.
- The coordinator wrote the briefs, the plan rows and this record.

### Checks after the last content edit
- check_facts exit 0, run with no pipe
- check_links --quiet exit 0
- check_absolutes exit 0
- check_facts_antecedents 0 on special_teams
- check_marker_pairs 0 LOST and 0 SPLIT HALF on all 10 files
- full `npm run build` (absolute binary) exit 0 after the last edit, through check:links
- check_callout_flow --bare 0 on every page

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 across 10 books |
| D2 Exceptions | follow-through carve-out by book; Hockey Canada Junior/Senior 9.5 and minor 7.6; IIHF 19.3 late-game; PWHL trapezoid "as though it binds" |
| D3 Divergence | stated per book in each lead and facts line |
| D4 Citation integrity | 60.1 / PWHL 61.1; Appendix IV table numbers by edition |
| D5 Provenance | verbatim against sources/ |
| D6 Negative claims | "only the NHL, IIHF and PWHL excuse a normal follow-through"; "no book caps a late hit"; "no trapezoid in USA Hockey / Hockey Canada / CARHA" |
| D7 Cardinal rule | each lead states the tactic with its limit |
| D8 Numeric ownership | the follow-through claim aligned with its owner, shooting.md |
| D9 Summary layer | not engaged (section leads and facts lines) |
| D10 Key-facts layer | four facts lines changed, each re-verified; antecedents 0 |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | each lead and its limit in one chunk |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build; 58 anchors |
| D15 Rendered site | site-reviewer on the final build, 10 pages |

## What this method could not have found
- Other copies of the incomplete 4-on-4 claim worded differently (the gate's sweep matched "4-on-4" near "major"); body copies found are plan rows.
- Whether "can be called hooking" at the hands is how officials actually call a net-front lift.
- Real phones and screen readers. The narration audio lags until it is rebuilt.
