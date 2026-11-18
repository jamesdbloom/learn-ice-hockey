# W464: caption routing batch 4 — four zone-entry and four rush captions brought under 150 words; Body Contact's screening mistake split in two, and two goal-after-contact sentences corrected (18 November 2026)

**Files changed**
- Content: technique/body_contact_and_battles.md
- Diagrams: site/src/diagrams/zone_entries.mjs, site/src/diagrams/defending_the_rush.mjs, site/src/data/diagrams.json (rebuilt)
- Also: project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan rows:**
  - From W457 (6) and W458 (8): caption routing, next batches zone_entries (4) and defending_the_rush (4).
  - From W463 (3): bcb Common Mistakes bullet measured 809 px at 400.
- **Authors:** three agents, one per file.

## Captions
| id | words: HEAD → now | amber at 400 |
|---|---|---|
| entry-wide | 184 → 147 | 14.4% (was 31.8% mid-wave) |
| entry-delay-curl | 181 → 146 | 45.8% |
| entry-middle-drive | 163 → 139 | 24.7% |
| dump-and-the-trapezoid | 151 → 133 | 0 |
| rush-2-on-1 | 167 → 121 | 0 |
| rush-3-on-2-alternative | 162 → 148 | 0 |
| rush-gap-and-angle | 181 → 148 | 0 |
| rush-trailer | 161 → 140 | 0 |

**Cut.** Restatement and tactical reasons the host already carries beside the marker. Each cut was layer-tested per host with md_to_speech, chunk by chunk.

**Kept.** Every posture limb, the goalie-contact limbs, every coaching-choice and "ask your goalie/coach" disclosure, the trapezoid per-book list and KHL provenance, and the gap provenance and not-painted disclosures.

**Judgement call: rush-gap-and-angle.** "Boardside shoulder to the middle of their chest" was cut. The diagram-reviewer ruled it a mechanic, not the definition. The definition kept is "body between the carrier and the middle of the ice", and the owner still voices the shoulder detail.

**Diagram-review fixes**
- **gap-and-angle.** "…targeted at the red line, which is a guide, not a law" could be heard as calling the red line a guide. It now reads "That target is a guide, not a law."
- **gap-and-angle.** "Its edges are not painted on the ice."
- **rush-trailer.** "See them before the backcheckers do".
- Stale counts and chunk numbers in comments corrected.

**Amber, a regression caught and reversed in the same wave.**
1. The diagram-reviewer advised restoring HEAD's glyph sentence in entry-delay-curl ("⚠️ One safety point outranks the play…").
2. The site-reviewer measured the result: the caption was 56.5% amber, which took zone_entries to 54.9 and time_and_space to 55.6 at 400.
3. Both captions were reordered, with the explanation first and unmarked and the ⚠️ on the closing instruction only (the W456 rule).
4. In entry-wide, "every level" moved onto the instruction and "checking or not" stayed with the injury, so neither qualifier changes its job.

## body_contact_and_battles.md

### :1340 (voiced)
- **HEAD (permissive, deliberate-only):** "…all three take it off for deliberate contact in or out of the crease". This is the W461 shape.
- **First rewrite:** "your position or contact impairs the goalie (69.1)". The coordinator caught this as the W460 shape, with no location given.
- **Now:** "the goal comes off when your position or contact stops the goalie moving freely in their crease, you hold a screen inside it, or you start any contact with them in it (69.1, 69.3); outside it, contact does unless incidental and you tried to avoid it (69.1, 69.4). A rebound or loose puck allows incidental contact anywhere (69.7)."
- **Rules ruling:** "hold" fits Table 14 5B/5D and leaves 5A legal.

### Common Mistakes :2081–2082 (voiced)
- **The split.** The one 1,132-character bullet is now two:
  - "Setting the screen with a skate on the crease line" (289 px at 400);
  - "Treating outside the crease as licence to touch the goalie or block their way back" (578 px). This one leads with "Steer clear of the goalie and stay out of a returning goalie's lane".
- **Limbs.** Every limb was kept, and safety mapped each one.
- **:2082, rules WRONG (permissive), shipped in W463.** "under the NHL, IIHF and PWHL any contact that is more than incidental or…" put a screener who is outside the crease under the 69.4 test. But a goalie *in* the crease is covered by 69.3 (Table 14 1C): even incidental contact costs the goal. It now reads "any contact with a goalie in their crease, and with one outside it any contact that is more than incidental or that you made no reasonable effort to avoid". The coordinator then swept every other "more than incidental" site: all of them pair the in-crease limb.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | :1340 OK, :2081 OK (HC 8.5 crease-player scope kept by context), captions OK; :2082 WRONG, fixed with its text and confirmed |
| safety-reviewer | CLEAR; every HEAD limb of the split mapped; "Important." once per voiced copy in every host; W464b reorders CLEAR |
| diagram-reviewer | 6 BETTER, 2 NO WORSE; fixes applied as above |
| site-reviewer | 10 hosts at 400 light/dark and 1440 light. First pass found the delay-curl amber regression (Major). The W464b re-measure, on the 15:39:32 build, gives zone_entries 44.1 and time_and_space 44.0 at 400. Every page: 0 bare, untreated or panels; ⚠️ counts equal HEAD; 0 console errors |

### C11
The coordinator wrote no content or caption text. Reviewer texts were applied by authors and checked in context.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 15:39:32; the newest source is zone_entries.mjs at 15:38:40; body_contact_and_battles is 15:31:35.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes (certifies 408 caption units), check_geometry and check_secrets pass.
  - check_counts made no change.
  - check_caption_pairs reports no violation.
  - check_label_paint --severe = 2 (neither in this batch).
  - check_callout_flow --bare = 0; `--panels --file` = 0 on bcb.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 69.1/69.3/69.4/69.7, Table 14 1C, 2B/2D, 3A, 5A–5E; HC 8.5 Goal Crease Area interpretation |
| D2 Exceptions | 69.7; 5A legal |
| D3 Cross-book divergence | NHL/IIHF/PWHL vs HC/USAH/CARHA kept |
| D4 Citation integrity | (69.1, 69.4) |
| D5 Provenance | gap and trapezoid provenance kept |
| D6 Negative existence | not engaged |
| D7 Cardinal rule | coaching-choice disclosures kept in all four rush captions |
| D8 Numeric ownership | nine-foot gap figure unchanged |
| D9 Summary layer | caption vs host layer test, per chunk |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer, three reads |
| D12 Read-aloud | gap-and-angle mishearing fixed; negations closed |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer, two passes |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W464)
1. **entry-delay-curl** is still 45.8% amber, because its instruction is the long posture passage. Only shortening it would help.
2. **dump-and-the-trapezoid.** The picture draws no trapezoid outline while the caption says "the marked area" (pre-existing).
3. **rush-trailer.** "the attacker who arrives second" sits beside "first wave of two"; the trailer is the third attacker.
4. **rush-3-on-2-alternative.** The backchecker is labelled C, the same open C-for-centre issue as elsewhere.
5. **bcb :2082** heading undersells its body (content-reviewer call).
6. **Remaining ≥150-word captions:** 49, after this batch's 8.

## What this method could not have found
- Whether shorter captions teach faster.
- Real synthesised audio.
- The defender, how_to_watch_hockey and bcb hosts of gap-and-angle, measured by chunk distance.
