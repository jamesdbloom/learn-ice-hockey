# W249–W252: amber placement on the other eight "What it costs" sections (11 November 2026)

**Files:**
- **W249:** content/systems/defensive_zone_coverage.md, content/systems/forechecking_systems.md
- **W250:** content/systems/faceoffs.md, content/positions/center.md
- **W251:** content/positions/winger.md, content/positions/defender.md
- **W252:** content/systems/defending_the_rush.md, content/systems/special_teams.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This is the same placement-only pass as W245–W248 (record reviews/w245_w248_what_it_costs_marker_placement_2026-11-11.md), applied to the remaining eight pages that have a What it costs section. Inside each section, the amber warn-inline highlight and its spoken "Important." move off scope clauses, citations and abstractions. They land on the paragraph's top mandatory price, or on a sentence that limits a permission.

Four agents worked in parallel, two pages each, from MARKER_BRIEF.md. The brief carried lessons 7–10 from the W245–W248 safety review and gate:
- a sentence that limits a permission keeps its amber, with a second marker added for the price;
- never remove bold from a price;
- every newly marked unit is listed for the safety reviewer;
- a long amber run is trimmed only if no ejection becomes plain.

## What changed
- **Placement.** Across the eight sections, ambers moved off scope clauses, citations, abstractions and instructions. Each now sits on a mandatory price or on a limit, and the moved-off clause stays bold. Examples:
  - "Hockey Canada reaches the crease version under Delay of Game:" now sits on the Casebook limit.
  - "that is head-butting in every book" now sits on the NHL/PWHL/USA Hockey major and game misconduct and the CARHA match.
  - "it is a mandatory removal" now sits on the major and game misconduct.
  - "USA Hockey splits it by intent" now sits on 607(b)'s mandatory major.
- **New spoken escalations.** 25 units gained a marker and so a spoken "Important.":
  - defensive_zone_coverage 4, forechecking 2, faceoffs 4, center 1, winger 3, defender 4, defending_the_rush 5, special_teams 2.
  - The safety review rendered HEAD and the tree and confirmed these are the only audio changes. Its report gave the total as "29", but its own per-file list adds to 25. The commit gate re-rendered the staged tree and counted exactly 25, with 0 lost. The safety review's KEEP rulings name every one of the 25. The first draft of this record copied the 29.
  - Each one is on a mandatory price, with three exceptions, each the harshest tier its paragraph states:
    - a mandatory minor (defensive_zone_coverage :837, a puck over the glass, NHL 63.2(iii));
    - two penalty shots (center :806, defender :887).
- **Limits kept.** Where a limit and a price share a paragraph, both now carry amber. Examples: forechecking :1024 "no stride count makes a hit legal" with "either major brings a game misconduct", and winger :813 "however little force is behind it" with 620(b).
- **Safety-review fixes, applied verbatim by the coordinator** (placement only, every unit already marked, no new spoken "Important."):
  - defending_the_rush :1063: the counterweight "Only the NHL, IIHF and PWHL write the converse minor…" is amber again. HEAD had it amber, and the W252 author pass had removed that marker, leaving the amber only on the permissive half. Net of R1, the line is unchanged from HEAD.
  - defending_the_rush :911: 604(b) "bars it whenever a Competitive Contact team plays a Body Checking team".
  - defending_the_rush :929: the PWHL 52.1 step-or-glide limit.
  - winger :815: the no-intent Hockey Canada cross-check-above-the-shoulders ejection (7.6(b), 7.7(b)), beside the match.
  - special_teams :1093: "In women's hockey, plan on any fighting major ending your game" (In-House Rule 101).
- **Site-review fix tried and reverted.** The coordinator merged faceoffs :1191's mid-sentence split ("Kicking or attempting to kick an opponent ⚠️ is a match penalty") into one run, as the site reviewer suggested. That put the ⚠️ at the start of the paragraph, so the post-fix `--panels` check showed an amber PANEL. The site reviewer's suggestion had missed that `WARNING_RE` is anchored. The split is restored. It reads slightly oddly but renders inline (plan row).
- **Declined.**
  - Site R1 and R2, the trims for special_teams :1099 and forechecking :970: each would turn the Hockey Canada head-contact match or the IIHF ejection plain, the same trade-off declined in W245–W248.
  - Site R3, dropping forechecking :1087's second amber: that run is a limit, so lesson 7 keeps it.
  - Site R4, the faceoffs :1216 "floor, not the price" abstraction: it is the paragraph's first marker, and the price beside it is amber (plan row).

## Verified
- **Words unchanged.** In all eight files, HEAD and the result give identical text once `⚠️`, `*` and whitespace are stripped. The coordinator checked this after every edit round: WORDS IDENTICAL.
- **check_marker_pairs.** 0 LOST and 0 SPLIT HALF across all eight files.
- **Rendering.**
  - All four authors, and then the safety reviewer for every changed line, ran the sections through `remark-corpus.mjs`. Glyphs equal `warn-inline` wrappers, with no panels.
  - The site review covered 8 pages × 400/1440 × light/dark = 32 runs. Inside What it costs it found 0 panels, 0 bare glyphs, 0 glyphs inside strong runs and 0 literal `**`, with glyphs equal to wrappers on every page. There was no horizontal scroll, the console was clean, there were no off-origin requests, and each page had one h1.
  - The coordinator rebuilt after the final fixes and checked bare glyphs, panels and literal `**` again.
- **Mandatory-or-discretionary readings.** The authors read the rule text wherever a placement depended on it. The safety reviewer independently read USA Hockey 602(a), 604, 620 and 640; Hockey Canada 7.3–7.7, 8.1 and 9.2; CARHA 53 and 63; NHL 52.2, 60.4 and 63.2(iii); PWHL 52.1; IIHF 46.1; In-House Section 6 and Rule 101; and EIHL Casebook 46.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×4 | Placement-only edits. Each ran the word check, check_marker_pairs, `--panels`, check_facts and check_links, and rendered its sections through the plugin. Each listed every newly marked unit and every price it could not reach. |
| safety-reviewer (independent; HEAD and tree rendered and de-tagged) | Nothing blocking. Audio changes only by "Important." on the 25 units, all ruled KEEP. Forechecking :1072 "ejects you in any division" is TRUE: 640(d)/(e) carry no classification clause and 640(g) is "shall". No amber run is permissive-false and no price lost its bold. R1–R5 were applied. R6 needs a word change (plan row). N1–N5 are optional or leave-as-is. |
| commit-gate (first run) | BLOCK under C8/C11: the record said 29 new escalations and the staged render has 25. The safety review's list matches the 25; the 29 was a sum slip, now corrected. It also flagged the R1 wording. Everything else passed: words identical, every change inside What it costs, 0 LOST, the audio delta is "Important." only, dist covers the diff with 0 panels, bare glyphs or literal `**` on all eight pages, R2–R5 present, the kick revert applied, and timing correct. |
| site-reviewer (32 runs) | Nothing blocking. No subsection reads as a wall: per-subsection amber share is at most 22%. The two "walls" are single very long runs that predate this pass. R5 (the kick split) was applied; R1–R4 were declined as above. |

### C11
The authors made the placement edits. The coordinator applied the safety review's five fixes verbatim, all placement-only, and tried and reverted the site review's kick merge. It then re-verified the words and markers, rebuilt, and wrote the plan row and this record. No word was written by the coordinator in content.

### Checks after the last content edit
- check_facts: exit 0.
- check_links --quiet: exit 0.
- check_marker_pairs: 0 LOST on all eight.
- Word check: WORDS IDENTICAL on all eight.
- Full `npm run build` (absolute binary) after the final edit, followed by `--bare` and `--panels` on all eight and a literal-`**` scan of dist.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | not engaged; no word changed. Mandatory-or-discretionary was read in the source where placement depended on it |
| D5–D8 | not engaged |
| D9 Summary layer | out of scope (What it costs only) |
| D10 Key-facts layer | not engaged |
| D11 Reader safety | safety-reviewer on all eight sections, rendered against HEAD; fixes applied |
| D12 Read-aloud | 25 new "Important." units, each ruled; 0 LOST (commit gate re-counted from the staged render) |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | site-reviewer, 32 runs; coordinator rebuild after the final fixes |

## What this method could not have found
- A limit that was never amber, in a paragraph this pass did not touch.
- Whether a mandatory tier stated in an unchanged sentence is mandatory in its book, where no one read the rule. The amber now points harder at those sentences.
- How the 25 new "Important." units sound to a listener. The audio has not been rebuilt.
- Real phones, other browsers and screen readers.
