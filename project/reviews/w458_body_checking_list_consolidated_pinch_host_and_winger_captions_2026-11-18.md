# W458: Forechecking Systems carries the full body-checking list once, Game Management's pinch advice gains the arrival test and the per-game check, and seven captions are trimmed — with two reverse captions corrected on who calls it (18 November 2026)

## Files changed
- **Content:** systems/forechecking_systems.md, systems/game_management.md
- **Diagrams:** site/src/diagrams/forechecking_systems.mjs, positions.mjs, winger.mjs, offensive_zone_play.mjs; site/src/data/diagrams.json (rebuilt)
- **Scripts (coordinator, between waves):** scripts/check_caption_pairs.py. The reason strings now name the shared constant instead of rule numbers the caption no longer prints.
- **Also:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W457 (1)–(3), (6) batch 2.
- **Authors:**
  - A: forechecking_systems.md
  - B: game_management.md
  - C: diagrams, in four passes
- **Dropped:** From W457 (4). defender and breakouts call the rim a "hard shot" where the caption says "pass". The coordinator judged that both usages are right.

## What changed

### forechecking_systems.md :341 (voiced, chunk 022)
The paragraph before the forecheck-212 marker now carries the complete list, with the instruction first:
- "⚠️ **find out whether you may body check in this game — the answer can change per fixture, not just per division.** Where it is barred, F1 still goes, with feet and stick."
- **USAH:** 604(a) bars it by age, in girls'/women's and in non-check adult; 604(b) bars it when a checking team plays a non-checking one; a local governing body may bar it in any classification.
- **HC 7.3:** U13 and below, female hockey, and any division a Member approves.
- **IHUK:** the U10/U12 junior leagues and the Women's NIHL are non-checking.
- **CARHA:** "penalises intentional body contact in every game (49(a))".
- HEAD named USAH and HC only.

### game_management.md :244 and facts :232 (voiced)
- **Added:** "**Either way, go only if you can arrive on contact** — meaning you and the puck reach the wall together, so you play the puck; on a dying rim nobody is contesting, arrive clearly first or hold the line."
- **Replaced** "Hitting is your league's call" with "Find out whether you may body check in this game, not just in your division — it can change with the opponent" (USAH 604(b)).
- **Split** the item to fit the 1,200-character cap. The posture limb is now its own marked unit (marked units 70 → 71; no marker lost).
- **Facts Read line** now ends "…only if you can reach the wall as the puck does". The rules review flagged "arrive on contact", voiced alone, as hearable as "arriving to make contact".
- **The author refuted the brief.** forechecking_systems does not bar a dying-rim pinch; it sets a higher bar.

### Captions
| id | words: HEAD → now | amber at 400 | change |
|---|---|---|---|
| forecheck-2-3-lock | 187 → 110 | 21% | enumeration cut (sole host; list at :341, ten chunks earlier) |
| winger-high-then-down-the-wall | 187 → 140 | 0 | restatement |
| winger-offensive-zone-patches | 191 → 186 | 31% | restatement |
| winger-dz-rim | 192 → 162 | 28% | leads with the instruction |
| winger-dz-reverse | 162 → 145 | 31% | **who calls corrected** |
| winger-wall-depth-by-system | 173 → 140 | 0 | picture-reading only |
| winger-arriving-at-the-line | 170 → 141 | 45% | book split cut; **onside wording corrected** |
| oz-cycle-reverse | 172 → 188 | 35% | **who calls corrected** |

**Who calls "reverse".**
- **The fault.** winger-dz-reverse said "Call it — "reverse!"", and HEAD's wording had already garbled it. oz-cycle-reverse said "…and call for it". Both told the CARRIER to call.
- **The owners say otherwise:** on_ice_communication.md :159 ("Said by a teammate arriving behind the carrier") and breakouts.md :332 ("The receiving teammate must call for it").
- **Now:**
  - dz-reverse: "that teammate calls it — "reverse!" — because you cannot see them behind you; without the call, do not reverse on hope".
  - oz-cycle: "reverse it when the teammate arriving behind you calls for it — without that call, do not reverse on hope".
- **"Facing the wall" not used.** The reviewer's sketch said "because you are facing the wall". The author refused it, because the same caption has the carrier side-on.
- **Prose sweep (coordinator).** Every content sentence about calling a reverse has a teammate, the partner D or the goalie as the caller. No prose inversion was found.

**Onside wording (rules WRONG, permissive).**
- HEAD said "drag it with the blade in contact with the ice or the paint, which keeps you onside wherever you play". A skate dragged past the line is offside.
- Now: "The trail skate is not drawn. Drag it with the blade touching the blue line or the ice on your side of it". NHL 83.1, PWHL 85.1, IIHF 83.1, USAH 630(a), HC 6.11 Note 1 and CARHA 72(c) Note 1 all agree.

**Negations.** In oz-cycle-reverse, "cannot draw momentum — read the checker" was in check_caption_negations' MOST SUSPICIOUS list before this wave. It now reads "cannot draw momentum. Read the checker…".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | FS :341: every limb OK. Nothing missing: NIHL checking; In-House, EIH R&R and DOPS have no ban; IIHF 101.1 restricts women's checking but does not bar it; PWHL 52.1 permits it. GM: OK; "arrive on contact" ambiguity fixed. Captions: winger-arriving WRONG (fixed with its text); others OK. |
| safety-reviewer | CLEAR, then CLEAR again after the fixes. FS :341 is stricter. The GM split gains an "Important.". 2-3-lock's bare find-out prompt is enough (the caption teaches no check; the full list is ten chunks earlier). dz-reverse's "do not reverse on hope" adds a condition. |
| diagram-reviewer | 5 BETTER, 1 NO WORSE, dz-reverse WORSE (Major: caller inverted). After the fixes: all BETTER, oz-cycle-reverse's identical inversion found and fixed, pronoun fix applied. |
| site-reviewer | 7 pages at 400×812 DPR 2 light/dark and 1440 light, on the 14:05:46 build. Every changed unit and caption renders. Nothing ≥ 50% at 400 (highest: ozp 49.0). FS at 1440 is 66.9 (W457 67.6). 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. |

### C11
The coordinator wrote no content or caption text. Where an author departed from a reviewer's sketch, a reviewer confirmed it:
- "facing the wall" was declined;
- GM's "meaning".

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 14:05:46; the newest source is offensive_zone_play.mjs at 14:04:56.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts made no change. check_caption_pairs = 0. check_label_paint --severe = 2. check_callout_flow --bare = 0; `--panels --file` = 0 on both content files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 604(a)/(b), 630(a); HC 6.11 Note 1, 7.3; IHUK Junior/U10/WNIHL/NIHL RoC; In-House; CARHA 49(a), 72(c); NHL 83.1; PWHL 52.1, 85.1; IIHF 83.1, 101.1 |
| D2 Exceptions | 604(b) per-fixture bar |
| D3 Cross-book divergence | where checking is barred; onside in all six books |
| D4 Citation integrity | caption-pairs reason strings updated |
| D5 Provenance | not engaged |
| D6 Negative existence | no other British non-checking competition on disk (searched) |
| D7 Cardinal rule | coaching-choice disclosures kept |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | GM facts and body together; caption vs host layer test |
| D10 Key-facts | GM :232 voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | pronoun ("they" → "that teammate"); negation full stop |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer, three reads |

## Found, not fixed (plan row From W458)
- **forecheck-212 repeats the list** in chunk 023, immediately after :341 in chunk 022 (check_caption_echo 22.8%). Cutting it needs a safety ruling because of its non-owner hosts.
- **FS has a second "may body check at all… per fixture" paragraph** with its own run.
- **FS states the list in part elsewhere:** :38, :39, :321, :322, :607 (HC "non-check play" is looser than 7.3), :616, :618, :752, :1019, :1106, :1168, :1170.
- **passing_and_receiving :213/:215** should carry the wall prohibitions itself. Then dz-reverse could drop its wall limb, with a dz-rim → dz-reverse pair declared.
- **how_to_watch_hockey** says "below the hash marks, not level with them" one chunk before a caption saying "roughly level with the faceoff dot".
- **No tool guards a caption-to-host-paragraph dependency.** forecheck-2-3-lock now relies on FS :341.
- **Hosts with no earlier 1440 baseline:** game_management 80.7 and offensive_zone_play 93.1.

## What this method could not have found
- Whether the shorter captions teach faster.
- Real synthesised audio.
- Officiating practice.
