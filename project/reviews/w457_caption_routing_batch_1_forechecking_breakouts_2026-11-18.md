# W457: caption routing batch 1 — nine forechecking and breakout captions trimmed, the body-checking enumeration made one shared constant, and the amber moved onto the instruction (18 November 2026)

**Files changed:**
- site/src/diagrams/forechecking_systems.mjs
- site/src/diagrams/breakouts.mjs
- site/src/data/diagrams.json (rebuilt)

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

No `content/` file changed.

## Source
- **Coordinator census, 18 Nov.**
  - Of 204 captions, 67 are 150 words or more, and only 16 are 0–49.
  - Amber share is no longer the problem: one caption is at 50% or more.
  - readability_and_dual_audience.md records the 25–50-word target as structurally unreachable by compression, so the remaining work is routing.
- **Plan row:** W457 (batch 1).
- **Author:** one diagram agent.

## What changed
| id | words: HEAD → now | amber share at 400 |
|---|---|---|
| forecheck-roles-rotate | 210 → 210 | 20% → 8% (glyph moved onto the instruction) |
| forecheck-212 | 247 → 238 | 15% |
| forecheck-212-stacked | 160 → 152 | 12% |
| forecheck-2-3-lock | 187 → 187 (list now a constant) | 11% |
| forecheck-press | 166 → 128 | 33% |
| forecheck-pinch | 190 → 190 (unchanged) | 22% |
| breakout-five-roles | 176 → 150 | 0 |
| breakout-reverse | 159 → 153 | 36% → 25% |
| breakout-rim | 169 → 152 | 35% → 27% |
| breakout-centre-swing | 177 → 115 | 0 |
| breakout-against-1-3-1 | 164 → 158 | 29% → 24% |

**The body-checking enumeration is now one constant, `CHECKING_BARRED_WHERE`.**
- It covers USAH 604(a)/(b), including the local opt-out; HC 7.3; IHUK U10/U12 and the Women's NIHL; and CARHA in every game.
- forecheck-212, roles-rotate and 2-3-lock all use it.
- Rule numbers were dropped; every scope limb stays.

**Cuts.** Each cut limb was carried beside the sole host's marker, per the author's layer test:
- press: two limbs;
- centre-swing: three tactical limbs;
- rim: one;
- five-roles: one tactical reason.

**Kept.** Every posture limb, every onus limb, every "find out whether you may check" limb and every coaching-choice disclosure.

**Glyph moved to the instruction** in roles-rotate, reverse, rim and 1-3-1, following W456's `captionNodes` lesson.

**Diagram-reviewer fixes:**
- rim: "…the far-side winger. The puck travels onward…". This fixes a dangling participle.
- stacked: "both defencemen on the blue line".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All OK. Every limb of `CHECKING_BARRED_WHERE` was verified against usah.txt 604(a)/(b), hc.txt 7.3, ihuk_junior_roc and ihuk_wnihl_roc format tables, and CARHA 49(a). Dropping the numbers loses no scope. |
| safety-reviewer | CLEAR. Ten hosts were rendered. Nothing is cheaper and no safety limb was lost. "Important." plays once per glyph-bearing caption. |
| diagram-reviewer | 6 BETTER, 3 NO WORSE. Two optional fixes, both applied. Every trimmed caption matches its PNG. |
| site-reviewer | 4 hosts at 400×812 DPR 2 light/dark and 1440 light on the 13:38:57 build. Worst 400 windows unchanged and under 50%. 0 bare, untreated or panels; 0 console errors. ⚠️ counts equal HEAD. Minor: at 1440, forechecking_systems rose 59.8 → 67.6 and how_to_watch 53.3 → 59.6, both in forecheck-212's diagram-heavy section; the cause was not isolated. |

### C11
The coordinator wrote no caption text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 13:38:57; the newest .mjs is 13:37:54. build-diagrams ran before check_absolutes.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts made no change. check_caption_pairs = 0. check_label_paint --severe = 2. check_callout_flow --bare = 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 604(a)/(b); HC 7.3; IHUK Junior and WNIHL RoC; CARHA 49(a) |
| D2 Exceptions | 604(b) mixed-category bar kept |
| D3 Cross-book divergence | the four-book enumeration |
| D4 Citation integrity | rule numbers dropped from one caption; caption-pairs reasons now stale (filed) |
| D5–D8 | not engaged |
| D9 Summary layer | caption vs host layer test, per limb |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | "Important." once per caption |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W457)
**1. The enumeration is repeated.** forechecking_systems states it, or part of it, five times. The diagram-reviewer's view:
- Consolidate it in forechecking_systems: complete the paragraph before the forecheck-212 marker with the four missing limbs, then cut it from the 2-3-lock caption.
- Do not push it into position pages or the spectator page.
- roles-rotate (its marker at :157 comes first in the document; rink_map is a vocabulary host) needs a chunk-distance check and a safety ruling.

**2. GM :252 (pinch)** lacks the arrive-on-contact test and a per-fixture find-out prompt.

**3. Stale text left behind by the number-dropping:**
- scripts/check_caption_pairs.py :12/:80/:91, and a forechecking_systems.mjs note, still name "604(a)/(b) / 7.3".
- defender.md and breakouts.md rim prose say "hard shot" where the caption says "pass".

**4. The 1440 rise in the forecheck-212 section** is unexplained.

## What this method could not have found
- Whether shorter captions teach faster.
- Audio chunk distances for the cut limbs.
- The six unvisited host pages in a browser.
