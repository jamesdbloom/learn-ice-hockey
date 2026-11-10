# W237 and W238: game_management and offensive_zone_play each get one "What it costs" section (10 November 2026)

**Files:**
- content/systems/game_management.md (W237)
- content/systems/offensive_zone_play.md (W238)
- project/plans/OPEN_ITEMS.md
- this record

## Source
The owner's "What it costs" method (8 November) and instruction-first rule (9 November). These are the next two pages in the census order after special_teams: game_management with 13 sites and offensive_zone_play with 12. Two authors worked in parallel, one page each, from the shared brief (WIC_BRIEF.md) plus W235's lessons:
- a moved ladder must not imply the earlier act is free;
- USA Hockey 608(c) is a mandatory match;
- the Hockey Canada head tier is split by division.

The pages' strength rules, crease and goaltender-contact sections, and the W233 never-your-back text were left exactly as scoped. The W238 safety review confirmed offensive_zone_play :606–800 is byte-identical to HEAD.

## What changed
**game_management (W237).** A new What it costs section with four subsections: Over the glass, A late hit, Where checking is barred, and After the whistle. The moved paragraphs are byte-identical apart from two dropped labels. Scene tiers were added at :137 and :883, with pointers. A census CONSOLIDATE of facts :897-902 was declined because that block is at HARD_MAX and the merge would have cut a limb. The Hockey Canada head paragraph gained its 7.7(b) Junior/Senior tier. Fixes from review:
- **CARHA lead (safety R1).** "Never hit from behind" heard alone implied other hits are allowed. It now reads "do not body check at all, and above all never from behind" (CARHA 49(a)).
- **Over the glass lead.** It now names "the only written carve-outs": a rink with no glass, a puck into the bench, and a puck straight off a faceoff (NHL 63.2(iii) and its Note, PWHL 65.2(iii), IIHF 63.2(III)). The author wrote "written carve-outs" rather than "only … escapes", because a deflected puck and IIHF Situation 63.29 are also excluded.
- **After the whistle lead.** It now names USA Hockey 601(d)(7) and Hockey Canada 11.1(e).
- **:1221.** "If the hit is reckless, under USA Hockey a match is mandatory (602(a); 608(c) where excessive force meets a vulnerable or defenceless player)".
- **Duplicate pointer.** The one at :1250 was dropped.
- **Declined.** An optional "ends your game in every book but USA Hockey" was declined because it is false for Hockey Canada head contact (7.6(a)/7.7(a)); "almost every book" stays.

**offensive_zone_play (W238).** A new What it costs section with five subsections: A hit from behind, Where checking is barred, A teammate's battle, A late hit, and Charging. The Hockey Canada head counterweight ("on the head it is head contact instead, a match if they cannot protect themselves") was added at six sites that lacked it. USA Hockey 608(c) was added to this page's closed "must give a match" lists, which W236 had missed here. Fixes from review:
- **Behind-net :818 and winger-at-the-glass :987 (rules FIX-cheaper, BLOCKING).** Moving the pinch bullet down had stripped USA Hockey 608(b)'s mandatory major plus game misconduct from both scenes. Both now carry: "a major plus a game misconduct at least if it is reckless, sends them head first into the boards or goal frame, or forcefully hits a player standing along the boards (608(b); Casebook 608, Situation 1)".
- **Charging stride cue (rules and safety, then the commit gate).**
  - The problem: "Your feet under you for the last two or three strides" could read as striding into contact (HC 7.4 "two or more strides"; CARHA 52(a), USA Hockey 607 "more than two").
  - The first fix, "stop striding two or three strides out and glide in", was BLOCKED by the commit gate. IIHF 101.1 and PWHL 52.1 penalise "any move by a player to step or glide into an opposing player", and the same edit had moved the "never step or glide into her" limb out of the pinch scene's chunk.
  - Final wording, at :975, the :1195 lead and CM: "stop striding two or three strides out, keep your feet under you, and arrive on the puck or the ice beside them".
  - The women's limb is restored at :975 ("In women's hockey, never step or glide into her — IIHF 101.1 and PWHL 52.1 make that at least a minor"), in the same chunk (064) as the cue.
- **:1159.** "never hit a player whose back is turned to you, anywhere, and above all behind the net or at the glass" (HC 7.5(a) "anywhere on the ice"; USA Hockey 608 Note "in open ice").
- **:1012.** HC 7.4(c) is glossed as "a charge that leaves them unable to defend themselves".
- **Pointers.** A redundant pointer was dropped at :983 and a duplicate at :818.
- **Emphasis (site review).** In A late hit, the amber now marks the price ("A late hit is not capped at a minor in any book") rather than a rule-number run. In A teammate's battle, the sentences were reordered so the price precedes the quotations, and the coordinator added "under USA Hockey" so the 640(g) citation names its book.

## Measured (check_readability --file; HEAD via READABILITY_CONTENT_DIR)
| | game_management HEAD → after | offensive_zone_play HEAD → after |
|---|---|---|
| prose words | 22,908 → 23,151 | 22,495 → 23,175 |
| longest sentence | 62 → 62 | 62 → 92 |
| long paragraphs | 1 → 1 | 1 → 2 |
| long Key Takeaways | 1 → 1 | 1 → 1 |
| KT max | 71 → 71 | 73 → 88 (KT8 gained the head counterweight) |
| rule references | 266 → 271 | 201 → 209 |
| ⚠ | 72 → 75 | 57 → 64 |

- **game_management:** 70 → 73 marked units. What it costs starts 80% down the page at 400px.
- **offensive_zone_play:** 63 → 68 marked units, with a split-half candidate at :1167 (ladder A), ruled NOT a defect by the safety-reviewer because it is voiced in the same chunk as its marked lead. What it costs starts 85% down the page at 400px.
- **Both pages:** check_marker_pairs 0 LOST; `--panels` 0; `--bare` 0.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×2 | Restructured each page; wrote limb inventories (no limb lost except recorded duplicates); applied fixes; refined three sketches for exactness and declined one false one. |
| rules-verifier (game_management) | Nothing cheaper. Glass, late hit, CARHA, the HC 7.7(b) addition, the checking-barred lead, the after-whistle lead and the adult-men survival (facts :175 and :176) are CORRECT. WORDING items were applied. UNCONFIRMED and inherited: HC "harsher of head contact and checking from behind" (plan row). |
| safety-reviewer (game_management, full page, rendered) | Nothing blocking. R1 CARHA lead, applied. Every limb reaches its scene; strength rules untouched. |
| rules-verifier (offensive_zone_play) | FIX-cheaper at :818 and :987 (608(b) stripped), applied. :985, :989 (640(e)), :991 (640(b) and Note 2), :1167, :1169, :1175 (604(a)) and CM :1218 CORRECT. Stride wording, applied. The dropped duplicate and the CARHA qualifier lost nothing. |
| safety-reviewer (offensive_zone_play, full page, rendered) | Nothing blocking. Head counterweight correct at all six sites; KT8 safe voiced alone. R1 pointer and R2 "anywhere", both applied. |
| commit-gate (first run) | BLOCK: (1) the "glide in" cue collided with IIHF 101.1/PWHL 52.1, and the women's limb had left the scene's chunk; (2) the battle paragraph was reordered after review with no rulebook re-check; (3) the record's D10 wrongly said no facts line was new. Everything else passed: 608(b) restored, scene tiers in their chunks, the unchanged sections, the readability table, timing. |
| safety-reviewer (narrow final, rules and safety) | Nothing blocking. The cue is consistent with IIHF 101.1, PWHL 52.1, HC 7.4, CARHA 52(a) and USA Hockey 607, and with the checking-league permission. The women's limb is accurate and shares chunk 064 with the cue. Every limb of the battle paragraph was re-derived (640(e) and its Note, 640(g), 640(h), 602(a)); "under USA Hockey" was necessary after the reorder and attaches correctly. Facts :1164 is accurate voiced alone. |
| site-reviewer (both pages; Playwright Chromium at 400 and 1440, light and dark) | Nothing blocking. Subsections render instruction → amber → panel → ladder; 0 warning panels, 0 bare glyphs, 0 literal `**`; Common Mistakes anchors clear the header and audio bar; console clean. RECOMMENDED: the amber on a citation and the battle order (both applied); the late-hit subsection's height and mid-list pointers (plan row). |

### C11
The authors wrote the restructures and the fixes. The coordinator added "under USA Hockey" (three words, no rule change) to the reordered battle paragraph, and wrote the plan row and this record. The emphasis and reorder edits, the cue rewrite and the restored women's limb all came after the site review. A narrow rules-and-safety check re-derived the battle paragraph, the cue, the women's limb and facts :1164 from the rulebooks. The final build was checked mechanically.

### Checks after the last content edit
- check_facts exit 0 (no pipe).
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs 0 LOST.
- Full `npm run build` (absolute binary) exit 0 after the final edit.
- check_callout_flow --bare 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | rules-verifier ×2: NHL 56, 63; PWHL 43, 57, 65; IIHF 43, 56, 63, 101; USA Hockey 601, 602, 604, 607, 608, 640 and Casebook 608 and 640; Hockey Canada 7.3–7.7, 8.3, 11.1; CARHA 30, 34, 48, 49, 52, 53, 75; WNIHL RoC |
| D5 Provenance | not engaged |
| D6 Negatives | "no CARHA game misconduct for firing the puck away" (rules); "only written carve-outs" |
| D7 Cardinal rule | every subsection leads with the instruction |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | offensive_zone_play KT8, Q6 and CM gained the head counterweight; Common Mistakes links retargeted on both pages |
| D10 Key-facts layer | offensive_zone_play gained one NEW facts line at :1164, a verbatim copy of the W236 sibling line ("Rule: USA Hockey 608(c) must give a match … boards or not, goalie or skater"), checked against 608(c) by the narrow final check. No other facts line changed except in moved blocks. (The first draft of this record wrongly said the line was moved; the commit gate caught it.) |
| D11 Reader safety | safety-reviewer ×2, full pages, rendered |
| D12 Read-aloud | both pages rendered more than once; scene tiers share chunks with their scenes |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; anchors clicked |
| D15 Rendered site | site-reviewer on the restructure build; final edits checked mechanically |

## What this method could not have found
- Full owner parity with body_contact_and_battles beyond the clauses each reviewer read.
- Whether the moved verbatim ladders are each complete. They were confirmed to arrive intact, and the rules-verifier spot-checked them, but they were not exhaustively re-derived.
- Real phones and screen readers. The narration audio lags until it is rebuilt.
