# W222: coaching sections lead with the tactic, wave 1 — 159 sections reordered on 13 pages (9 November 2026)

**Files:**
- content/positions/center.md
- content/positions/defender.md
- content/positions/winger.md
- content/positions/goaltender.md
- content/systems/forechecking_systems.md
- content/systems/breakouts.md
- content/systems/faceoffs.md
- content/systems/special_teams.md
- content/systems/neutral_zone_systems.md
- content/systems/game_management.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
Owner decision, 9 November 2026: "Yes, lead with the tactic". It was made after the SG220/221 site-reviewer measured coaching sections opening on tall facts panels before any play was described. At 400px, winger "Net-front and the crease" had 2,219px of panel before the crash-the-net prose, and defender "Gap control" had 2,283px. The owner's measure: "the more interesting content on how to play is first and more obvious."

A census found 551 coaching sections on 26 pages whose first element is a ```facts panel. Wave 1 covers 13 of those pages. Five authoring agents ran in parallel, each with exclusive ownership of its pages.

## What changed
In each panel-first coaching section, the section's tactical lead paragraph moved from just after the panel to just before it. These are moves only: a sorted-line diff of every file against HEAD is empty.

Moves per author:
- **positions** (center, defender, winger, forechecking): 33
- **goaltender and breakouts**: 30
- **faceoffs and body_contact**: 26
- **game_management, defending_the_rush and DZC**: 34
- **special_teams and neutral_zone**: 38

That is 161 sections moved by the authors. Two were reverted on review (below), leaving **159 sections reordered**. In addition, the coordinator moved 4 second paragraphs up beside their leads.

Sections were left alone when moving would have broken something:
- the only thing after the panel was a list, a table or a blockquote;
- the paragraph opened with a rule or a tariff;
- the paragraph ended in a colon introducing a list;
- the paragraph left behind would have pointed back at the moved one ("that pivot", "You are not.");
- moving would have separated a claim from its counterweight (for example, DZC "Dealing with the screen", whose book-specific limits are not in the panel).

Coordinator moves:
- **defending_the_rush, "Skate first, then look"**: the bold instruction "Turn and sprint first" now also sits above the panel, after the setup line. The author had moved only the setup.
- **After the safety read**, three more moves, each bringing a limit or a dangling follow-on paragraph up beside its lead:
  - defending_the_rush "One thing holds whichever system endorses it: your head stays up and out of the shot lane";
  - body_contact "Two habits make this possible";
  - body_contact "So: put the puck between your skates and the wall".

- **Two reverts to HEAD order, faceoffs (moves only, so no new text):**
  - **"The icing exemption at a shorthanded draw"**: the commit gate BLOCKED this move. It put "A clean shorthanded win in your own end can go straight down the ice" (no book named) ahead of the panel line that limits the exemption, USA Hockey "only at 15-Only and Girls 16U up". The section is restored byte-identical to HEAD.
  - **"Using your feet"**: the safety read's R1 was first repaired by also moving "Check your book before you learn it" up. A fresh safety pass found that the move still put the permission at the end of one spoken chunk and the IIHF/British skate bar at the start of the next, where HEAD voiced them together. No order fixes this without new wording, so the section is restored byte-identical to HEAD (plan row: a scoped lead).

## Measured
- Headings opening on a facts panel across the 13 pages: 263 → 104 (102 before the two reverts).
- At 400px, heading to first tactical paragraph: winger net-front 2,219px → 8px; defender gap control 2,283px → 8px.
- Paragraph-to-panel gap: 20px, the normal margin collapse.
- Warning markers: marked units are identical to HEAD in every file; 0 bare glyphs on every page; amber panels 0 on every page except one pre-existing panel, game_management.md:937 ("⚠️ **Keep the hit off their head.**"), identical in HEAD and not caused by this change (plan).

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×5 | Every move confirmed by an empty sorted diff. Moves that need a reader's eye were reported, and the safety read and the coordinator took them up. |
| safety-reviewer (all 161 moves, rendered to SSML) | Nothing blocking. Every contact, crease, head and from-behind limit inside a moved paragraph travelled with it. **R1:** faceoffs "Using your feet" now led with "kick it back" ahead of the IIHF skate bar, which gets the centre replaced under the In-House Rules. **R2:** the defending_the_rush timed slide now led with "a different system, not a mistake" ahead of the head-and-shot-lane limit. Both were fixed by moving the limiting paragraph up beside the lead. Dangling back-references: the body_contact pair was fixed. game_management "Coaches also use last change to:" and DZC "Three consequences follow:" were left, because each introduces a list and the panel above states its premise. |
| commit-gate (first run) | BLOCK: the faceoffs icing exemption move (reverted). C11: the four follow-up moves needed a fresh safety pass. D15: re-render the three pages changed after the render. The record's count did not add up (fixed here). |
| safety-reviewer (second pass: coordinator moves and revert) | B1: the staged faceoffs copy still had the pre-revert order (re-staged; `git diff --name-only` empty). R1: "Using your feet" still split the permission from the British bar across a chunk (reverted). The timed slide, Skate first and both body_contact moves are clear: each limit lands in the same chunk as its lead. |
| site-reviewer (second render: faceoffs, defending_the_rush, body_contact_and_battles) | Nothing blocking. All six section orders as intended. 0 bare, 0 panels (faceoffs 119, defending_the_rush 89, body_contact 227 warn-inline). Links clear of the header; no overflow; clean console. Rendered before the "Using your feet" revert; the final build was checked mechanically. RECOMMENDED: body_contact still has panel-first sections of 1,495–1,818px (plan). |
| site-reviewer (Playwright Chromium, real 400×860 and 1440×900, light and dark; 5 pages sampled: winger, goaltender, faceoffs, special_teams, defending_the_rush) | Nothing blocking. winger has 0 panel-first sections. Spacing is clean. 0 bare and 0 panels on every page. 120 in-page link clicks landed clear of the header, and cold deep links worked. No overflow; clean console. RECOMMENDED: the worst remaining panel-first sections need a written lead (now a plan row). |

No rules-verifier ran: no rule text changed, and every sorted diff is empty.

### C11
Authoring agents made the 161 moves. The coordinator made the four moves and two reverts listed under "What changed" and wrote the briefs, the plan row and this record.

### Checks after the last content edit
- check_facts exit 0 (906 blocks), no pipe.
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF on all 13 files.
- Sorted-line diff against HEAD is empty for all 13 files.
- Full `npm run build` (absolute binary) exit 0 after the last edit, through check:links (57 pages, all resolve).
- check_callout_flow --bare 0 on every page.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 Rules, exceptions, divergence, citations, provenance, negatives | not engaged; no rule text changed (empty sorted diffs) |
| D7 Cardinal rule | the tactic now leads each moved section |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | engaged: the Overview's opening paragraph was reordered above its panel on six pages (center, goaltender, winger, breakouts, defensive_zone_coverage, forechecking_systems); words unchanged, so the Overview still agrees with the body; the safety-reviewer's pass over all moves covered them. Key focus, Common Mistakes and Key Takeaways untouched |
| D10 Key-facts layer | facts lines unchanged; checked for pointers to moved prose (none new) |
| D11 Reader safety | safety-reviewer over all 161 moves, rendered; R1 and R2 fixed |
| D12 Read-aloud | 13 files rendered; limits checked to land in the same chunk |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build; site-reviewer clicks |
| D15 Rendered site | site-reviewer before commit on 5 of the 13 pages |

## What this method could not have found
- Paragraphs whose meaning depended on order without any tell-tale word.
- The 8 pages the site-reviewer did not render.
- The ~102 remaining panel-first sections, which need written leads (plan).
- Real phones and screen readers; the narration audio lags until it is rebuilt.
