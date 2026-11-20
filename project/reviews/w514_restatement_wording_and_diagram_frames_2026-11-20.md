# W514: restatement, wording, Body Contact leftovers, and whose net and which side a diagram names (20 November 2026)

Four editing agents worked in files that did not overlap, on readability and diagram rows left by W508 and W513.

## Agents and files

| Agent | Files | Rows |
|---|---|---|
| 1 | special_teams.md, zone_entries.md | W513(5): restatement |
| 2 | winger.md, defending_the_rush.md | W513(9): wording |
| 3 | puck_support_and_spacing.mjs, rink_map_and_glossary.mjs, plus the built diagrams | W508(22)–(24) |
| 4 | body_contact_and_battles.md | W513(2), (3), (8) |

## Review

| Reviewer | Scope | Critical / major | Findings |
|---|---|---|---|
| safety-reviewer | all four content files, with special_teams and body_contact_and_battles rendered; HC 7.2, 7.5–7.7, 8.5, USA Hockey 602(a), CARHA 48(a) and 53, NHL 21.1, and every IIHF file for "match penalty" (0) | none | special_teams deletions upheld limb by limb. Two Body Contact minors, both repaired. |
| diagram-reviewer | the diagram diff; the-trapezoid and rink-map-end-zone PNGs viewed (trapezoid also at a 400 px proxy) | **one major, outside the diff** | rink-map-end-zone prints mirrored side labels. Filed for an owner decision as W514(1). |

### Safety-reviewer findings

**special_teams.** Every dropped limb is still in the same section:
- :1126 carries the HC head ladder (7.6/7.7, match if they cannot protect themselves or it is meant to injure, cross-check above the shoulders, minor/female "can… must", Junior/Senior triggers).
- Facts :1116 states Hockey Canada's head match for a defenceless goalie, and :1132 and :1134 carry the goalie intent and charge limbs.
- The commit gate noted that :1132 now lists only the into-net/boards routes for a goalie. Plan row W506(4) was updated to say so.

The skater lead now voices "on the head plan on being ejected anyway". The head-helpless match is first heard two chunks later, which the reviewer judged safe: the instruction is "angle to the puck", and the lead points to the stricter reading.

**Body Contact minors.** Both repaired:
- **:789's scope.** "(CARHA-affiliated adult leagues only)" could be heard as scoping USA Hockey 602(a) too. It now reads "USA Hockey 602(a) and, in CARHA-affiliated adult leagues, CARHA 48(a)…".
- **Facts :764.** The head-helpless match was only implied. It now reads "both: match if meant to injure or helpless (from behind: only into boards or goal frame)", at 299/300.

The agent also changed "So no book above…" to "None of the books above prices checking from behind at two minutes". The coordinator checked CARHA 53(a) (`carha_2026.txt`:2605–2612): a minor plus game misconduct, or a major plus game misconduct. There is no two-minute route, so the sentence stays true even if "above" is heard as including CARHA.

No reviewer re-read these last repairs. They are confined to the findings and taken from the reviewer's sketches. This is the C11 terminating case.

### Diagram-reviewer findings

**Confirmed.**
- The four puck_support describes are attacking frames, with the opposition net at the right.
- The-trapezoid label is acceptable. Two minors remain:
  - its halo breaks the goal line under "tr", because the word is wider than the region;
  - its last letter sits about 2 px from the boards at phone width.

**The major.**
- **The defect.** rink-map-end-zone (hosted in rink_map §5 and in getting_started, which says "Take the names from it") prints "right point", "right half wall" and the other right-side labels at the top of the picture.
- **Why it is mirrored.** The renderer's frame (`rink.mjs`: +x attacking) makes the top the attacking player's left. The corpus's own prose names sides from the attacker's frame. So for the only player who stands at the point, the labels are mirrored.
- **Reach.** Sighted readers only.
- **Status.** Not changed in W514. The owner chose the attacking frame, option (b), on 20 November; that is the next wave. The two options put to the owner were:
  - (a) dropping the side words;
  - (b) printing the attacking frame and stating it in the caption.

## What changed

- **special_teams.md.** Two copies of a six-sentence Hockey Canada head-contact ladder were deleted, at the skater lead (~:1110) and the goalie lead (~:1128). Both duplicated ~:1126 in adjacent chunks.
  - 211 words were cut.
  - The intent claim is voiced 5 times in the section, down from 7. Facts lines are kept because each is voiced alone.
  - Marked units are 69 before and 69 after.
- **zone_entries.md.** No change. Its three voicings fall in three different chunks and state different things.
- **defending_the_rush.md facts :441 (boarding).** The intent clause moved to the end of the line as its own sentence ("Meant to injure: a match in all but the IIHF"), so it can no longer be heard as Hockey Canada 7.2(b)'s tier. It is now 300/300.
- **winger.md.**
  - Two copies of "One meant to injure" (where "one" landed on "careless contact" or "a misconduct") became "A hit meant to injure".
  - "Even without intent, driven into the frame unable to protect themselves, it is…" became "…driving them into the frame when they cannot protect themselves is…".
- **body_contact_and_battles.md.**
  - Common Mistakes from-behind bullet (:2069) gained the all-book intent sentence.
  - Facts :764 now states the intent match for both the from-behind and the head limbs.
  - Body :789 now cites USA Hockey 602(a) and CARHA 48(a) for intent.
- **Diagrams.**
  - Four puck_support_and_spacing describes now say "the opposition net at the right".
  - The-trapezoid label moved off the net and boards.

## Rows

- **Closed:**
  - W513(5), (8) and (9);
  - W513(2)'s :764 item and W513(3)'s :765 citation item, both handled in the body;
  - W508(22), (24);
  - W508(23), moved to W514(1).
- **New, From W514:**
  1. The rink-map side labels (major; owner decision).
  2. Describes elsewhere that name a side from the picture.
  3. practice_and_development drill-execution-no-opponent.
  4. Optional: move the trapezoid label outside the region with a leader.
- **W513(10)** (added this wave): read each remaining "one meant to injure" in context.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- `build-diagrams`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 4 files, 0 lost, 0 split halves.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered (safety-reviewer, books above; coordinator read CARHA 53(a)). |
| D2 exceptions | Covered: 7.6(b) "can… must"; 7.7 minimal-violence; 602(a) scope. |
| D3 cross-book divergence | Covered: the intent match by book. |
| D4/D5 citations | Covered: 602(a) and 48(a) added in the body. No URL added. |
| D6 negative existence | Covered: no IIHF match penalty (0 hits in nine IIHF files); no CARHA two-minute from-behind route. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Partly covered. The safety-reviewer did not layer-test special_teams' Common Mistakes and Key Takeaways for a unit built on the deleted lead text. |
| D10 facts layer | Covered: :441, :764 read alone in renders; caps checked. |
| D11 reader safety | Covered (safety-reviewer). |
| D12 read-aloud integrity | Covered by agent and reviewer renders. The final body_contact repairs were rendered by the agent; winger's extra "A hit meant to injure" fix was not re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: restatement cut, wording, check_links. |
| D15 rendered site | Covered for the changed diagrams by the diagram-reviewer: PNGs viewed, a phone-width proxy, diagrams.json against source. Chrome not connected. |

## What this method could not have found

- **Restated claims in other words.** The special_teams restatement count was lexical, so the same claim in other wording was not counted.
- **Summary layers in special_teams.** Whether a Common Mistakes bullet or Key Takeaway there relied on the deleted lead text.
- **Side naming in practice.** Whether coaches universally name sides from the attacking team. This rests on the corpus's own usage, not on an external source.
- **Real devices.** A real phone viewport and dark theme for the trapezoid.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
