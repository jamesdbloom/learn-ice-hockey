# W291–W292: eight more voiced diagram captions trimmed below 1,000 characters (12 November 2026)

**Files:**
- **W291:** site/src/diagrams/zone_entries.mjs, neutral_zone_systems.mjs, scanning_and_anticipation.mjs, risk_management.mjs
- **W292:** site/src/diagrams/game_management.mjs, goaltender.mjs, on_ice_communication.mjs, special_teams.mjs
- site/src/data/diagrams.json (build product; exactly the eight captions below differ, and no `describe` or `title` changed)
- scripts/check_caption_pairs.py (one new DEPENDENCIES row)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This is the fifth batch of the longest voiced captions. It took the next eight over 1,000 characters that no earlier batch had tried. It used the CAPTION_BRIEF.md method, plus the batch-four lessons:
- a dated LEFT WHOLE comment on any caption that is not trimmed;
- exact figures in comments;
- the coordinator runs the final rebuild.

Two authors each owned four modules. No content/ file changed.

## What changed
| Caption | Before | After | Cut, and where every host voices it |
|---|---|---|---|
| entry-delay-curl | 1033 | 943 | "turn away from the pressure" and "to arrive at speed". Hosts: zone_entries chunk 037; time_and_space chunks 007 and 008. In the safety tail, "turning your back to anyone coming at you makes…" became "a turned back makes…". The full absolute stays in the glyph sentence directly before it. |
| nz-back-off-at-the-line | 1032 | 922 | "neither answer is the correct one" and "the answer standing up gives the other way". Their substance is voiced by nz-stand-up-at-the-line, which comes directly before it in the same chunk in both hosts (neutral_zone_systems 026, defending_the_rush 039). The host prose also says "genuine trade-off". The coaching-choice disclosure is kept. |
| scan-before-a-wall-reception | 1027 | 984 | Wording of the picture disclosures only. "forced by the notation" became "drawn as a defenceman; read it as a job", matching the module. |
| cross-ice-in-your-own-end | 1024 | 996 | Wording only. |
| five-on-six-clear-three-outcomes | 1019 | 933 | "Head up and", which the facts line in the same chunk voices, and a description of the drawing. |
| goalie-safe-outlets | 1005 | 824 | "Two more cannot be pictured", the leave-it-for-a-defenceman option and "rarely wrong". goaltender voices all five options in chunks 044 and 045. The lead-in now reads "Clear along the glass, never over it:"; the penalty sentence's words are unchanged (its opening "A" is now lower case after the colon). |
| the-call-and-who-can-see-it | 1004 | 923 | "The words are a team matter, so agree your own". on_ice_communication voices it in chunk 004, and goaltender in chunk 056, the same chunk as the caption. |
| pk-wedge-plus-1 | 1002 | 969 | ", so ask which one your team runs". special_teams chunks 029 and 030 voice it. how_to_watch_hockey chunk 012 says "expect variation", which fits a spectator page. "a coaching choice" is kept. |

**Left whole:** pinch-centre-high (1041). defender.md chunks 033–035 voice none of its limbs. It carries a dated `LEFT WHOLE (W291)` comment.

**⚠️ sentences:** every glyph sentence is byte-identical to HEAD. The shared constants WALL_POSTURE_SHORT and SHOULDER_NOT_THE_SURFACE are unchanged.

**New caption-pair dependency:** nz-back-off-at-the-line now requires nz-stand-up-at-the-line directly before it, in every host. The coordinator declared this in scripts/check_caption_pairs.py. Both hosts satisfy it today, and the self-test passes.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×2 | Rendered every host before and after. Each ✂️ comment gives exact figures, the cuts and the host chunks. |
| safety-reviewer | **Nothing blocking. All eight captions CORRECT.** Rendered 13 host documents and confirmed each cut limb is voiced at the same tier or fuller within one chunk. Confirmed the two changed safety-tail sentences are no more permissive. Judged "expect variation" an adequate coaching-choice disclosure for the spectator host. Four WORDING notes, all on comments or rationale text nobody hears, applied: the goaltender.mjs chunk reference (046 and 048, not 047); the on_ice_communication.mjs chunk reference ("both should call" first at 040); a stale zone_entries.mjs chunk number; and the check_caption_pairs rationale ("their substance", not the exact phrases). |

### After the commit gate
The gate BLOCKED under C8 on two false sentences, now corrected. The plan row said all 12 remaining long captions had been left whole; faceoff-where-the-draw-goes was in fact trimmed, only to 1,021, in W289. The check_caption_pairs rationale said both cut phrases are voiced "only" in the sibling caption; "neither answer is the correct one" is also voiced by both hosts' prose ("a genuine trade-off"). No caption changed.

### C11
The authors made the trims. The coordinator declared the caption-pair dependency, applied the reviewer's four comment and rationale corrections, ran the final diagram rebuild and full build, and wrote the plan row and this record.

### Checks after the last edit
- Full `npm run build` (absolute binary), which includes the diagram build.
- check_absolutes (408 caption and describe units), check_geometry, check_caption_pairs (4 declared dependencies, 0 violations, self-test pass), check_caption_echo (none of the eight) and check_links --quiet: all clean.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | no tariff, book, rule number or modal changed in any caption |
| D4 Citations | out of scope |
| D5–D10 | not engaged; no content/ file changed |
| D11 Reader safety | safety-reviewer, with host renders and chunk distance |
| D12 Read-aloud | authors and reviewer rendered every host |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | build only; caption text inside existing figcaption slots, so no site-reviewer was needed (the W289–W290 gate ruling and the SG207–SG209 precedent) |

## What this method could not have found
- A later content edit that removes the host voicing a cut relies on: the goaltender options list, the on_ice "team's words" paragraph, or the how_to_watch "expect variation" line. Only nz-back-off has a mechanical guard.
- A rewording that keeps every word but moves which clause a qualifier attaches to. This was checked only by reading.
- How the shorter captions sit on the page, because no browser was used.
