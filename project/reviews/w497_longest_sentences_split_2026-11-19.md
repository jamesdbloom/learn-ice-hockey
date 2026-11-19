# W497: the corpus's longest sentences (60–83 words) on five pages are split, with every qualifier kept on what it qualifies (19 November 2026)

**Files changed:**
- **Content:** technique/body_contact_and_battles.md, hockey-iq/time_and_space.md, systems/defending_the_rush.md, systems/special_teams.md, off-the-ice/equipment.md
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Why:** owner priority, readability. After W496, check_readability showed every corpus limit met except `max_sent`, which was over 60 on five pages.
- **Who:** three authors, using check_readability's own sentence splitter, which also covers Key Takeaways and facts lines. One content-review round followed.

## What changed
| Page | max_sent | Sentence split |
|---|---|---|
| body_contact_and_battles | 80 → 60 | :1700 (2025/26 46.6 retaliation): "…(46.6). If you keep punching, you are a fighter under that book's 46.1, and its Table 6 ejects a fighter. The 2026/27 book writes no protection either." :2082 (outside-crease CM): the five-book contact tests become two sentences, each book's limb kept with its scope |
| time_and_space | 83 → 59 | :557 (in-crease goal): "…incidental or not. The one exception **for contact** is incidental contact in a rebound, or while you both play a loose puck (69.7; PWHL 71.7). Rule 69.3 and PWHL Rule 71.3 also disallow the goal with no contact at all if you establish a significant position…" ("for contact" keeps 69.7 off the position limb; checked in nhl, pwhl and iihf texts) |
| defending_the_rush | 66 → 60 | :927 (IIHF 101.1): "…and lets players 'hold their ground'… It prices…" |
| special_teams | 63 → 59 | :1075: "…a screen inside the crease. Contact costs the goal too: …" |
| equipment | 63 → 60 | :789: "…pre-game warm-up". And in IHUK-sanctioned games outside the Elite League, In-House Rule 5.4…" |

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | **CLEAR** on all six splits. Checks: no claim, condition, scope, price or qualifier detached; `**` and ⚠ counts equal HEAD on every edited line; and the 69.3/71.3 heading placement was checked against the IIHF and PWHL texts for the position limb. Three minor wording findings were applied: "The same rules" → the named rules; "Keep punching and you are…" (an imperative, heard aloud) → "If you keep punching, you are…"; "Contact costs it" → "the goal". |

No rules or safety review: no claim changed, and these are sentence boundaries only.

### C11
The coordinator wrote no content.

### D15
No marker moved. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exit 0, ending with check-links passing; dist is newer than every edit.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts: no change. check_marker_pairs: 5 files, 0 lost.

## Found, not fixed
- **bcb :1700:** its Hockey Canada sentence is still about 66 words. It is inside a list item, which check_readability measures differently.
- **Splitter blind spots:** sentences the regex splits wrongly (at a rule-number full stop) and table cells are not measured.

## What this method could not have found
- Real synthesised audio: chunk boundaries were not re-rendered.
