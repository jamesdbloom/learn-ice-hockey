# W486: Winger tells F3 the pinching defenceman's point is usually theirs, and Forechecking Systems KT6 stops saying "by default" twice (18 November 2026)

**Files changed:** positions/winger.md, systems/forechecking_systems.md, project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W485 (1) and (2).
- **Author:** one agent.

## What changed (voiced)
| Site | Now |
|---|---|
| winger.md "As F3:" bullet (§Offensive Zone: Pressuring an Opponent with the Puck) | adds "**If your defenceman pinches, the point they left is usually yours as F3: get above the puck and hold the blue line until they are back.** Some teams give that job to the centre or slide the other defenceman across, so ask who covers a pinch." |
| winger.md facts (new Action: line, voiced alone; 193/200; block now 8/8 coaching facts) | "If your defenceman pinches, the point they left is usually yours as F3 — get above the puck and hold the blue line until they are back. Some teams use the centre or the other defenceman, so ask" |
| FS KT6 | "…with your point covered, usually by F3." (was "F3 by default", which repeated "by default"; still 64 words) |

**Why the gap was real.** `grep -i pinch` over winger.md returned 0 hits. Yet winger.md's own 2-1-2 makes the weak-side winger F3, and FS :26/:589/:682 and OZP :938 make F3 the default pinch cover. The player who covers by default was never told on their own page.

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | **CLEAR.** No contradiction with center :472: both tie the job to a role (F3 = highest forward), not a person, and each page's alternatives mirror the other's. "Usually yours as F3" is true to FS :664/:682. It carries one qualification and no guarantee. Optional facts wording ("blue line", "defenceman" spelled out) was applied. FS KT6: leave it at 64 words. "Seal with position; pin the puck, not the player" is its only wall instruction and anchors the tariff, and trimming the tariff risks misstating it. |

No rules or safety review was run. These are tactical instructions with no rule, penalty or contact limb, and the KT6 ⚠️ tariff is word-for-word unchanged.

### C11
The coordinator wrote no content.

### D15
No ⚠️ changed. `--bare` = 0, `--panels --file` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exit 0, ending with check-links passing; dist is newer than both edits.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
- **check_counts:** no change.
- **check_marker_pairs:** 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 | not engaged |
| D7 Cardinal rule | the new instruction names the default and the alternative ("so ask") |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | body and facts agree; FS KT6 keeps the default |
| D10 Key-facts | new winger Action line voiced alone |
| D11 Reader safety | not engaged |
| D12 Read-aloud | "the other D" → "the other defenceman" |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | F3 as a role, consistent with FS and center |
| D15 Rendered site | mechanical only |

## Found, not fixed
- **Winger facts block at cap.** It is now at 8/8 coaching facts, so the next addition must replace a line rather than add one.
- **FS KT6 over the guide.** It stays at 64 words, over the 60-word guide, by reviewer ruling.
- **Not re-swept.** Other position pages were not re-swept for "you cover the pinch" claims that might now clash.

## What this method could not have found
- Real synthesised audio.
