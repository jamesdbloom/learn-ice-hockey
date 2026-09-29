# Round 29 September 2026, wave 9: P1/P2 batch B (ten files)

**Scope.** Ten documents that had not been re-aimed before, one author each, under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible":

- `how_to_watch_hockey`, `getting_started`, `reading_ice_hockey_diagrams`, `language_and_glossary`, `rink_map`
- `special_teams`, `offensive_zone_play`, `defending_the_rush`
- `passing_and_receiving`, `shooting`

One diagram caption also changed (`site/src/diagrams/rink_map_and_glossary.mjs`, `theTrapezoid.caption`, rebuilt into `site/src/data/diagrams.json`).

- **P1 re-aim:** Key focus, Overview, Common Mistakes and Key Takeaways were aimed at what a player does. Absent kernels were filled, and inherited board-posture limbs were demoted only with a per-limb layer test.
- **P2 placement:** panels were moved to inline amber on the hazard clause.
- **Lane rule:** a rules defect was repaired only if it was permissive and penalty-bearing; everything else was reported. The shared brief is reproduced in Appendix B, because the session scratchpad that held it does not survive the session.

**Method.**

1. Ten authors worked in parallel, one per file.
2. A `safety-reviewer` (`content-reviewer` for the diagrams page) read each file.
3. Every finding went back to an author for a fix. A fix batch had a re-read; every file then had a final read; every later fix had a quick read.
4. A `site-reviewer` read all ten rendered pages plus the caption's other hosts.
5. The account hit its weekly usage limit mid-round; the owner switched accounts and the failed agents were re-dispatched.

## What the reads found and what was fixed

### Permissive, penalty-bearing (fixed in every layer)

**Rule scope that read cheaper than the book**

- **HC 6.7(d)** read as optional in every division, but U18AAA and Junior are mandatory. Fixed in the `special_teams` facts line and CM, and in `how_to_watch_hockey`.
- **USA Hockey, hand on the puck:**
  - `how_to_watch_hockey` said closing a hand is "not a penalty outside the crease". Covering a loose puck on the ice is a 614(a) minor (Note; Casebook 614 Sit. 1), and picking it up is a 618(a) minor. The crease awarded goal is conditioned on "obvious and imminent".
  - `defending_the_rush`'s facts line said the same thing, voiced alone. A later reader caught that its first repair lacked "outside the crease".
- **CARHA 32(d):** the intentional high-stick suspension was added in `passing_and_receiving`.
- **USA Hockey 406(a):** the optional minor in lieu of a penalty shot is the fouled team's election (`defending_the_rush`).
- **WNIHL "non-checking"** (ihuk_wnihl_roc.txt:152-153): `defending_the_rush` had told a British women's reader that contact while playing the puck is legal. The label is now read as at least as tight as IIHF 101.1.

**Screens and the goaltender**

- **"Screen!" answered by moving the screener:**
  - The first fix (walking a screener off is interference, NHL 56.2(i)) still said "box out with hips and back".
  - CARHA 49(a) penalises failing to avert body contact. The glossary now says "hold your ground by body position, no lean, no push" at seven sites, matching the owner `on_ice_communication`.
- **Crash the net without the goaltender limb** (`offensive_zone_play`):
  - The new Overview facts Action was voiced alone.
  - Key focus narrowed "without contact" to "never initiate contact".
  - Every book puts a duty to avoid on the attacker (NHL/IIHF 69.1 effort proviso; HC 8.5 "onus is always on the attacking player"; CARHA 66(b)). It is now in all six layers.
- **KT6 in `shooting`:** it made HC's mandatory ejection for any charge on a goaltender, and CARHA 52(b)'s, into a "can".
- **63.2(VII)'s "actually being checked" read as excusing a freeze outside the crease** (`rink_map` :277 and the trapezoid caption): it is in-crease only, and IIHF Situation 63.1 penalises the out-of-crease case. The caption is voiced in `rules_primer`, `goaltender` and `how_to_watch_hockey` too, and a reader checked all three hosts.

**Safety and special teams**

- **Face injury:** `special_teams` Key focus 10 told a shot-blocker "stick first … blade out in front of you". The owner (`body_contact_and_battles` :1425) says never lead with the stick. The stick now takes the passing lane, the body blocks the shot, and the stick lies flat beside you. The standing hand position is "behind your body, backs of the gloves out".
- **"Fire that draw" out of the rink** (`special_teams` CM): a deliberate out is a minor in every book (USAH 610(c), HC 10.1(ii) with 6.3 Note 1, CARHA 75(b), NHL/IIHF/PWHL (ii)). It now reads "win the draw hard, never aim it out".

### Harsher, or neutral, fixed because cheap and in the same unit

- The F1 forward/forecheck scope, and "some coaches assign it by position" (diagrams in full; glossary partly: the hedge is absent at its Overview :35, entry :303 and CM :427, carried).
- "No key settles whether you may hit", since the IIHF key has a BODY CHECK glyph.
- The `rink_map` §6 Hockey Canada lane, the red line "in every book", and a stray `**`.
- `getting_started`: the neck guard's no-warning scope by competition (EIHL warns first), and the junior cage.
- The PWHL 65.2(iii) Note carve-outs in `special_teams`.
- The `shooting` from-behind wording.
- The `defending_the_rush` Casebook 608 Sit. 1 grounding.

## Gate block (C4) and repair

The first `commit-gate` blocked on **C4**: no `rules-verifier` had run. Three verifiers read the staged bytes; their evidence is below, and the plan's W9 gate rows log the rest.

**No claim was contradicted in the permissive direction except the ones listed here, all now fixed and each re-read.**

**Verifier 1 (glossary, rink_map, caption).**
- Verified: "no bare minor" in all six books; "never fair game" in every book; 63.2(VII) is in-crease only; the red line in every book.
- Two gaps in `rink_map`:
  - the possession test was "has not played the puck"; the HC Glossary test is control;
  - a flat "not whether you may hit them".

**Verifier 2 (special_teams, defending_the_rush).**
- **Permissive:** `defending_the_rush` said CARHA 36(b) was hand-only. It is not, and 58(c) Note 1 awards the goal unconditionally.
- **Harsher:** the "deliberate draw is a minor in all six" wording, against NHL/IIHF 85.1 and PWHL **87.1** "regardless…".
- **Missed:** HC Interpretation 5 to 10.1(a) (goalie clears).
- **HC 7.4(b):** it is discretionary.

**Verifier 3 (OZP, shooting, passing, getting_started, how_to_watch).**
- No contradiction.
- Slightly permissive in `offensive_zone_play`: Casebook 607 Sit. 4's arms-and-shoulder limb, and 625(b)'s stick.

**The repairs were read, and the reads found more:**
- `special_teams` facts :724 "none rules on aiming it" ignored 63.2(ii)'s deliberate minor from anywhere (permissive). It now names the tension and ends "never aim it".
- `rink_map` :424/:590 had been given the Casebook 607 Sit. 5 "can be legally checked" permission **by the coordinator's own brief**. A reader showed it was permissive against 607(d) Note 1 ("Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging"). All three layers, KT15 included, now ship the Note: engage for the puck, never the body.
- `offensive_zone_play` :642/:629 kept Casebook 625 Sit. 10's "unless it interferes with the goalie".

**Checks and build.**
- The final tiny reads were CLEAR.
- A hand check found no spoken escalation lost in DTR's KT merges (6 marked KTs → 5, both hazards kept).
- The covering build ran 19:48:52–19:50:11 (exit 0, `check:links` all resolve); the newest W9 content edit was 19:46:37.
- `site/src/data/diagrams.json` is committed at its W9-staged state (the trapezoid caption only). A later wave-10 diagram rebuild is not part of this commit.

## Gate evidence

- **Build:** first 18:27:39–18:28:44; the covering build (after the C4 repairs) ran 19:48:52–19:50:11, exit 0, 11,603 links resolve.
- **Mechanical gates:** `check_links`, `check_facts`, `check_absolutes` (408 caption units, after `build-diagrams` ran for the caption edit), `check_geometry` and `check_secrets` all exit 0. `check_counts` matches.
- **Callout checks:** `--bare` is 0. `check_marker_pairs` finds 0 lost markers across all ten files.
- **Site:** a `site-reviewer` found no Critical or Major.
  - Checked: 12 pages × 5 viewport and theme cells in headless Chrome over CDP (the extension was not connected), plus the 400px iframe.
  - 0 bare glyphs; Key focus blocks are siblings; facts blocks render intact.
  - The new trapezoid caption appears on all four hosts; there are no console errors and no off-origin requests.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | three `rules-verifier`s on the staged bytes (after the C4 block) + a `safety-reviewer` per file | See "Gate block (C4) and repair". |
| D2 | Exceptions | Yes | same | Airway, crease scope, catch vs cover, the deliberate/accidental draw. |
| D3 | Rule-set divergence | Yes | same | WNIHL, EIHL vs In-House, HC/CARHA vs NHL/IIHF. |
| D4 | Citation integrity | Yes | readers | New quotations checked verbatim; `[w]`/`[a]` bracket convention. |
| D5 | Provenance | Partly | readers | Trailers were extended where new citations landed. No `source-verifier` refetch this wave; declared out of scope. |
| D6 | Negative existence claims | Yes | readers | "No book allows a bare minor"; "has no defending-zone minor". |
| D7 | Cardinal rule | Yes | every reader | 2-on-1, the low zone collapse, F1, and own-end defaults are named as coaching choices. |
| D8 | Numeric ownership | Partly | readers | Shift length and the three-second figure were checked against the body and its source note. Other figures were not re-derived from owners; declared out of scope. |
| D9 | Summary layer | Yes | every reader (the P1 subject) | |
| D10 | Key-facts layer | Yes | readers | Each changed facts line was read voiced alone. |
| D11 | Reader safety | Yes | `safety-reviewer`, twice per file plus quick reads | |
| D12 | Read-aloud integrity | Yes | readers rendered with `md_to_speech` | |
| D13 | Folklore | Yes | readers | Craft labels on the blade-deflection claim. |
| D14 | Structure, style, cross-links | Partly | `check_links`, the site reviewer | Body prose outside the re-aimed layers was not style-reviewed; declared out of scope. |
| D15 | Rendered site | Yes | `site-reviewer` | |

## Carried forward

All open rows are in `OPEN_ITEMS.md` under the wave-8 section's W9 rows. The heads for the next wave:

- **Censuses**, each to be briefed as a claim, not a line:
  - covering the puck by hand (risk_management, game_management, DZC, faceoffs, center);
  - "ask your officials" for HC/CARHA screens (body_contact, goaltender, defender);
  - "hips and back" (puck_handling, on_ice_communication);
  - "two routes" (playing_without_the_puck :467, breakouts CM :1010);
  - flat "a one-game suspension" (about 14 files);
  - crash the net without the avoid-the-goaltender limb;
  - stick-forward blocking / "hands tucked".
- Site minors: a stray `*` in `defending_the_rush` :1002 (pre-existing); the trapezoid label clipped at the end boards (diagram-reviewer); `getting_started`'s two amber Key focus bullets beside seven plain ones (owner judgement).
- (Closed in the C4 repair: the `special_teams` deliberate-draw claim now names the 85.1/87.1 vs 63.2(ii)/65.2(ii) tension and ends "never aim it".)

## What this method could not have found

- **Unnamed rules:** every reader verified the rules the text or brief named. A second rule pricing the same act, found by none, is the true-negative trap. The hand-on-puck and CARHA 49(a) findings were each found only because a reader happened to read the neighbouring rule.
- **Untouched body text:** it was not re-read.
- **Real devices and ears:** there was no listening test, and the site check used headless Chrome.

## Appendix A — the wave-9 rows of the live plan, verbatim

(The offensive_zone_play Critical and Major, their fix and the re-read are described in full under "Screens and the goaltender" above; the row below is the log's shorthand.)

**Wave 9 = P1/P2 batch B, dispatched 29 Sep, one author per file, on files unstaged in wave 8:** how_to_watch_hockey, getting_started, reading_ice_hockey_diagrams, language_and_glossary, rink_map, special_teams, offensive_zone_play, defending_the_rush (which also takes the WNIHL row), passing_and_receiving, shooting. The shared brief is in the session scratchpad (w9_brief.md). ⏳
- ✅ W9 offensive_zone_play: Key focus 5→10 (net-front body, crash the net deciding before the shot, somebody above the puck, the triangle, end every cycle, point shot through, the pinch read, learn your system); the unscoped 69.3 narrowing was removed from the Key focus and Overview; Overview +4 paragraphs; the Overview facts map line replaced with Action/Priority; 6 CM re-led plus a new point-shot CM; the KT4 posture limb demoted with a layer test; markers 50→50; 0 panels. The facts :851 seal was refuted as permissive. ⏳ safety reader. 🔴 CARHA 63(a)/80/86 net-front majors not mentioned (gap).
- ✅ W9 how_to_watch awarded-goal fix: "…or an awarded goal if that team's net is empty and it stopped an obvious goal (618(a), 614(b))". The agent caught that my sketch's bare "if your net is empty" was HARSHER than both rules ("obvious and imminent goal") — a sketch is a claim. 🔴 Does the NHL/IIHF sentence just before it (67.2(ii), 67.4, 67.5, 63.6) also need the obvious-goal condition? (That would be harsher.)
- ✅ W9 special_teams minors fixed: the KT7 craft label; the PWHL 65.2(iii) Note carve-outs at facts :723/:724, body :738/:739/:978, CM :1164 (en-dash noted; "the same NOTE" pointer replaced); the trailer extended. Layer test clean. Markers 59→59. ✅ Final read B: shooting, getting_started, how_to_watch and diagrams all CLEAR; special_teams has 1 MAJOR (permissive). CM :1164 "Fire that draw" out — a deliberate out is a minor in every book (USAH 610(c), HC 10.1(ii) + 6.3 Note 1, CARHA 75(b), NHL/IIHF/PWHL (ii)); the faceoff Note sits on the zone limb only; HC 6.4(a) Jr/Sr loses the change. ✅ Fixed ("Win the draw hard … never aim it out"; accidental = exempt / just a faceoff; HC Jr/Sr no change; deliberate = minor) at CM :1164, facts :724 and body :739; the quick read is CLEAR. 🔴 Carried (strict direction): whether NHL/IIHF/PWHL 85.1 "regardless" shelters a deliberate draw out — the text says "minor in all six". (was: CHECK CM :1164 "fire that draw" out under USAH 610(c)/HC 10.1(ii)/CARHA 75(b) deliberate-shoot-out limbs (possibly permissive).
- ✅ W9 diagrams minors fixed: KT7 + CM F1 hedge ("whichever forward…; some coaches assign it by position"); KT10 "No key settles whether you may hit, not even one with a mark for a body check…"; the body notes that the IIHF key's BODY CHECK glyph was rendered from p.32. Markers 4→4. ⏳ final read in the batch.
- ⚠️ W9 DTR reader: 1 MAJOR (permissive, pre-existing). Facts :680 "a hand closed OUTSIDE the crease … not a penalty (618(a))" is heard as covering the puck, which is a 614(a) minor (Casebook 614 Sit. 1); the same framing is in trailer :1000. Minors: :402 "tighter than 101.1" is an inference; KT4 women's ride "barred outright" lost the Britain scope (PWHL 52.1); KT9 nit. The WNIHL, 406(a), boarding layer test, KT merges, Sit. 3 and new KF are all UPHELD. ✅ Fixed: facts :678/:680/:681 ("Never cover a loose puck with your hand" 614(a)+Note, Casebook 614 Sit. 1; only a caught puck gets the stoppage), body :690 (+⚠️ "That leniency is for a catch"), trailer :1000; :402 "a label the regulations do not define"; KT4 Britain scope; KT9 grounded in Casebook 608 Sit. 1. 0 lost markers. ✅ Final read C: :678/:680/:690, the trailer, :402, KT4 (In-House 101) and the KT9 match limbs are UPHELD; 1 MAJOR in the new facts :681 (no location; inside the crease it is a penalty shot, 614(b)/618(a)). ✅ Scoped: "Outside the crease, never cover a loose puck…" (244/300); KT9 "leaves its minor-and-misconduct for a push in open ice or a pinch"; :690 names 618(a). ✅ Quick read CLEAR. 🔴 Carried: :690 chunk 071 opens "In the crease 618(a)" without the book name. 🔴 CENSUS (the covering-puck claim): risk_management :903, game_management :1036/:1190, DZC :829 (+ faceoffs :508/:522, center :537 from the earlier row).
- ⚠️ W9 rink_map reader: 1 MAJOR (permissive, pre-existing, in a re-marked paragraph). :278 and the diagram caption (rink_map_and_glossary.mjs:434) present IIHF/NHL 63.2(VII) "actually being checked" as a carve-out from the OUT-of-crease freeze minor; 63.2(VII) is in-crease only, and IIHF Sit. 63.1 penalises it. Minors: §6 HC "no equivalent … do not hold a lane" contradicts 7.3(a) Interp 1 (over-restrictive); CM :591 stray ** (renders literally); KT11 red line "every book". KT tariffs, the layer test, blue line "every book" and the owner definitions are all UPHELD. ✅ Fixed: :277 now reads "One carve-out travels … ⚠️ Being checked does not travel" (63.2(VII) in-crease; IIHF Sit. 63.1); the caption theTrapezoid (inline, only this module; embedded in rules_primer, goaltender and how_to_watch too) was rebuilt via build-diagrams; §6 HC now reads "close off the boards on the carrier, but do not stand in the path of a skater without the puck" (8.3); CM :591 stray ** removed; KT11 red line "in every book" (NHL 27.7 / IIHF 27.6 on the puck). All gates are 0; markers 25→25. ✅ Final read A: CLEAR (63.2(VII) in-crease verified; caption hosts rules_primer :748, goaltender :548 and how_to_watch :445 do not contradict it). 🔴 Minor: §6 :485 "do not stand in the path" → "do not step into the path" (HC 8.3 impedes progress; holding established ice vs a screener). The site/src/diagrams .mjs + diagrams.json go in the W9 commit. 🔴 CENSUS: "actually being checked" framing in glossary, rules_primer, special_teams, goaltender.
- ⚠️ W9 glossary reader: 1 MAJOR (permissive for CARHA). "Box out with hips and back" at 6 sites; CARHA 49(a) "does not avert body contact" makes leaning a penalty (owner on_ice_communication :273/:278: "hold your ground, do not lean on them"); KT12's "non-checking league switches none of this off" drifted. Minors: KF "off it"→"theirs"; KT11 HC charge mandatory for ANY charge; KT12 injury rationale; the PWHL is missing from "no bare minor". The screen fix, the checking-from-behind ladder, HC 7.3, KF3/4 and the CM leads are UPHELD. ✅ Fixed: "hold your ground by body position, no lean, no push" at all 7 sites ("hips" / "with your body" gone); KT12 "a stick shove is not a body check, so it is cross-checking in a non-checking league too" + the injury reason; KT11 HC mandatory for any charge; PWHL 43.2 + trailer; F1 forward scope + hedge at KF2/Overview/§/entry/KT3. Markers 25→25. ✅ Final read A: CLEAR. 🔴 Carried: the F1 hedge is absent at the Overview :35, entry :303 and CM :427; the KT12 "screener faces the net" premise is shaky (inherited). 🔴 CENSUS: "hips and back" box-out elsewhere — puck_handling.md and on_ice_communication.md (the owner) also carry the phrase; check they say hold-your-ground, no lean, for CARHA; HC 7.3(a) "bumps" / USAH 604(c) Note vs the owner's "stop at the box-out" (owner question).
- ✅ W9 fix-batch re-read (how_to_watch, OZP, special_teams, diagrams): all CLEAR on the fixes. Minors dispatched: how_to_watch USAH crease limb lacks "awarded goal if your net is empty" (618(a)/614(b); permissive omission); special_teams KT7 craft label, the PWHL 65.2(iii) Note faceoff carve-out at CM :1164/facts :724/:737-739, :978 propagation; diagrams KT7 F1 hedge, KT10 "no key settles whether you may hit" (the IIHF key has a BODY CHECK glyph). ⏳ Carried: OZP :45 625(b) also triggers on a stick in the crease (costs a faceoff).
- ✅ W9 getting_started minors fixed: KF6/CM/KT10 no-warning scoped to "IHUK, England, Scottish and university competitions; only the Elite League warns first" (BUIHA via In-House :43); KT10 adds "A junior in England and Wales wears a cage in every game" (EIH 24.5, eih_rr.txt:1155). ⏳ reader. 🔴 uk_rules/equipment: same place-vs-competition check on no-warning; BUIHA vs non-BUIHA opponent.
- ⚠️ W9 shooting reader: 1 MAJOR (permissive). KT6 "charging one in the crease can end your game in every book" dropped HC's mandatory-anywhere (hc.txt:7010) and CARHA 52(b) mandatory ejection. Minors: the "no minor at all" garden path; KF8 prices only the goal; CM follow-your-shot lacks "pull up". The Overview cut, KT7 spin-o-rama and :174 are UPHELD. ✅ Fixed: KT6 now says HC mandatory anywhere (hc.txt:7009-7010) and CARHA mandatory in the crease or on injury (52(b)); "Hitting a goalie from behind costs a major and a GM in the NHL and IIHF, with no minor to fall back on" (43.2/43.3/43.5); KF8 adds the effort-to-avoid + "and you a penalty"; CM "pull up short of the goaltender". Markers 54→54. ⏳ reader. 🔴 The HEAD KT6 "HC mandatory for any charge or interference that injures" limb was not restored (verify HC 8.5(b) interference); PWHL 43 is unchecked in the from-behind sentence.
- ✅ W9 shooting: Key focus 5→8 (+ make the goalie move sideways, get it through, follow the shot for the rebound); Overview screen paragraph 2,790→1,612 chars with a layer test (the Coach's Challenge clause moved to the body); KT6 re-aimed (crease-scoped charging, self-caught); KT7 re-aimed (USAH/CARHA "write no spin-o-rama rule but still require the puck moving toward the goal line"); :174 → "for a skater"; new CM; markers 54→54. ⏳ safety reader. 🔴 facts ~:167 60.1 implies a no-contact IIHF penalty (harsher). 🔴 The moved Coach's Challenge clause is unscoped for Britain (IIHF only at selected championships; In-House deletes review for EIH/SIHA) — mildly permissive, not penalty-bearing.
- ✅ W9 passing reader: CLEAR. 32(d) is verified in all 3 layers (the quote cut is not misleading; 34(a) is harsher and compatible); the posture layer test and kicking tariffs (NHL 49.3, USAH 627, HC 7.1(c)(iii), CARHA 48(c), IIHF 49.3) are re-verified. Carried minors: facts :426 at 300/300 lacks the 32(d) ban (substitute only, never trade the "or trying to" limb); the CARHA match → 34(a) bar is unstated at :446; CM :786 wall bullet has no ⚠️ (pre-existing); D-to-D "above the circles" vs "no cross-ice" tension at :30/:692 (content).
- ✅ W9 passing_and_receiving: Key focus 8→9 (+ get open for the passer, receive open, the completable pass / decide your out; never across the front of your own goal leads the own-end bullet); the wall-posture Key focus demoted with a layer test (the spoken "Important." is still in body :211/:517); Overview rewritten; CM re-led; KT5 merged into KT10, new KT13, KT14 re-aimed; **CARHA 32(d) PERMISSIVE fix**: body :446 / CM / KT16 now say an intentional high-stick major adds an automatic one-game suspension (carha.txt:1515-1518), matching shooting :174. The plan row :313 (facts :422 62(c)) is REFUTED as stale. Markers 23→22, 0 lost. ⏳ safety reader. 🔴 The suspension after a match penalty is unpriced in any book (part of the owner's suspension-propagation question).
- ✅ W9 getting_started reader: CLEAR (body-checking chain, neck guard universal, helmet and posture layer tests upheld; 0 panels; +1 spoken escalation). Minors sent to the author: KF6/KT10/CM place-vs-competition scope (harsher); KT10 facial pointer → add junior cages in England and Wales. ⏳ Carried: the insurance sentence drops 21.2 training cover (conservative).
- ✅ W9 getting_started: Key focus 5→9 (the checking question moved in from a panel; learn to skate / stop both ways; short shifts; eyes up); Overview 2→4 discussion paragraphs; KT 12→10 with a layer test; panels 4→0 (verified by running remark-corpus.mjs on the tree; needs a build); markers 13→14, 0 lost; the EIHL 9.12 limb moved to §8 (eihl_casebook.txt:376-380). The "most clubs" row is REFUTED (already fixed). ⏳ safety reader. 🔴 §1 "in all fixtures" In-House rink size vs EIHL (place vs competition). 🔴 KT10/CM In-House "across England, Wales, Scotland and NI" no-warning neck-guard enforcement is wrong for EIHL (warning under 9.12; harsher). 🔴 The In-House 9.12 tariff (a 10-min misconduct, then a GM) is unstated.
- ✅ W9 language_and_glossary: Key focus 4→9 (location words, F-number, strong/weak side, "stay high" ends on possession, forecheck vs backcheck, rim vs reverse, act on calls, play the puck not the goalie); Overview +3; CM re-led; KT11/KT12 cut to kernels, with the checking-from-behind ladder (incl. NHL 43.4 match, which lived only in KT12) moved into the body entry + CARHA 53; panels 4→0; markers 25→25. **PERMISSIVE fix: "Screen!" answered by MOVING the screener with hips and back** → box out by holding ice (NHL 56.2(i) interference; nhl_rules.txt:6250-6252/:6319-6323) in the Key focus, Overview, KT12, CM and the Screen entry. ⏳ safety reader. 🔴 KT11/CM "finishing a check on a goalie out of the crease is charging" is harsher than USAH Casebook 607 Sit. 5. 🔴 on_ice_communication :444 "Move, or move the man who is blocking me… How much you may legally do to move them depends on your rule set" is pre-existing and qualified in the same bullet; but its own :280 says walking a screener out is interference in every book. So "depends on your rule set" is mildly permissive: re-word to the box-out / hold-ice answer (next wave).
- ✅ W9 defending_the_rush: Key focus 5→10 (goal side, early gap closing, chest not puck, take the middle, backcheck inside, 2-on-1 with an alternative, call your job, step up or off, stick on the puck from behind, don't create the rush); Overview rewritten with a layer test; +2 CM; KT restructured (12); markers 44→43, 0 lost. **WNIHL PERMISSIVE fix** (ihuk_wnihl_roc.txt:152-153 "Full ice, non-checking") at facts :395, body :402 + label at :228/:244/KT4/Overview. **USAH 406(a) PERMISSIVE fix**: the optional minor is the fouled team's election, not the referee's. "No strides at all" → Sit. 3 wording (6 sites); "writes no bare one" reworded. The "worst case is ejection" row is REFUTED here. ⏳ safety reader. 🔴 Sit. 15 (USAH angling into the boards is no penalty if the lane is kept) makes :236/:605/:612/:891 HARSHER than USAH. 🔴 Whether 101.1 push-and-lean survives the undefined "non-checking" label is not settled on disk.
- ✅ W9 rink_map: Key focus 5→10 (our/their end, win the slot, home plate, inside/outside by position, above the puck, behind your net never through your slot, net front off the red line, F-roles, trapezoid, look at the ice); Overview rewritten; CM re-led + 1; KT 15→16 with a layer test (HC 8.1 "no equivalent" limb moved into §6); panels 5→0; markers 25→25; no region definitions changed. ⏳ safety reader. 🔴 §6 HC "no equivalent" vs 7.3(a) Interpretation 1 "right to close off the boards" (possibly harsher). 🔴 The §3 "Both answers misnumber it" note reads close to narration.
- ✅ W9 diagrams minors M1-M7 fixed by the author (the F1 forward/forecheck scope + "some coaches assign by position"; one-bar per the body; whiteboard split with the disclosure intact). ⏳ quick re-read in the batch.
- ⚠️ W9 how_to_watch reader: 1 MAJOR (permissive). USAH covering the puck on the ice with a hand is a 614(a) minor (Casebook 614 Sit. 1), but :274 read it as a stoppage. The item-1 HC fix and the CM re-order are upheld. Minor: Overview :42 lacks "clear of the goaltender". ✅ Fixed by the author: "USA Hockey splits the act" (caught-and-held = a stoppage 618(a); covering = a 614(a) minor + Note, Casebook 614 Sit. 1; picking up = a minor); the Sources line was extended; "clear of the goaltender" added at the Overview and Key focus. ⏳ Re-read in the fix batch (check "inside the crease any of them" against 618(a)'s defending-player scope and 614(b)). 🔴 CENSUS (brief the claim): the same "closing a hand is not a penalty" framing for USAH at faceoffs :508/:522, game_management :1028, defending_the_rush :680, DZC :624/:638, center :537. The PWHL also carries both line-change bars (83.4).
- ⚠️ W9 special_teams reader: 1 MAJOR (face-injury). Key focus 10 "stick first … blade out in front of you" merged the passing lane with shot blocking, against the owner body_contact :1425 "Never lead with your stick". Minors: "hands tucked" standing (4 sites); the Overview block lacks "on your feet"; the PWHL 65.2(iii) is missing. HC 6.7(d), the Overview carve-outs, KT8 "five of six" and the posture demotion are all UPHELD. ✅ Fixed by the author: KF10 "your stick takes the passing lane, your body blocks the shot" + "block with your body, not your stick … stick flat beside you" (craft-labelled) at KF10, body ~:790, a new facts Never line and KT7; "hands behind your body, backs of the gloves out" at 4 sites; the Overview gains "on your feet, head out"; the PWHL 65.2(iii) is added at 5 sites (self-caught "wider of the two"). ⏳ Re-read in the fix batch. 🔴 Does the PWHL 65.2(iii) Note carry the faceoff carve-out (CM shorthanded draw)? 🔴 CENSUS: stick-forward blocking / "hands tucked" in defender, winger and others.
- ⚠️ W9 offensive_zone_play reader: 1 CRITICAL, 1 MAJOR (permissive).
- ✅ W9 how_to_watch_hockey: **HC 6.7(d) PERMISSIVE fix** ("mandatory in U18AAA and Junior"; + 6.7(d)(iii) time-out nuance; + 6.1(g)); **USAH 618(a) PERMISSIVE fix, new**: "closing a hand is not a penalty at all outside the crease" now adds "picking the puck up off the ice with a hand is a delay-of-game minor anywhere". Key focus 5→9 (entries at the blue line, net front after a shot, film yourself, one thing to practice); 15 CM re-led; KT 14→15, stats KTs re-led as actions; 0 panels; 2→2 markers. 4 self-caught overstatements. ⏳ safety + rules reader. Not verified: trapezoid ~:445, the NHL 82 walkthrough, IIHF 76.6/76.7.
- ✅ W9 special_teams: **HC 6.7(d) PERMISSIVE fix**. The facts line :992 read all-optional; it now says U18AAA and Junior are mandatory, Senior at the Member's option (hc.txt:5095). Body :1020 was already right. The CM :1157/:1159 divisions are named. Key focus 10 (stick lanes folded in); Overview +2 discussion paragraphs, with the HC/CARHA skater-only scope made explicit (self-caught permissive-for-goalies); 4 CM re-led; the KT8 posture limb demoted with a layer test; marked units 59→59, 0 lost; panels 0. The row that KT9 dropped the NHL empty-bench carve-out is REFUTED. ⏳ safety + rules reader. 🔴 KT8 "in five of the six any call for it ends your night" (checking from behind) is unverified. 🔴 The tariff paragraphs ~:684/:1077/:1111 are 3-10k chars (concision).
- ✅ W9 diagrams content reader: CLEAR with 7 minors (M2: F1 "whatever position you play" drops the forward/forecheck scope; M1 shape-vs-fill attribution; M3 one-bar "three meanings" vs the body's two + none; M4-M7). The author was resumed to fix them. ⏳
- ✅ W9 reading_ice_hockey_diagrams: Key focus 3→6 (read the caption first, find yourself, routes in order, position as a relationship, a route ending on an opponent is not permission to hit, check the key); panels 2→0; marked units 4→4; CM re-ordered; KT9+KT10 merged into a check-the-key kernel; new KT8. Self-caught: the "published key's convention" overstatement (reading fill as the team is this guide's own choice). No rules repairs (USAH 604(a) and HC 7.3(a) verified). ⏳ content reader. 🔴 check the captions for agreement (not reached).
- 🟠 NOTE (W9): passing_and_receiving KT16 now carries 32(d) (permissive, under the lane rule), which partly pre-empts this question. OWNER: propagate the CARHA 32(d) suspension beyond units that already price the full tariff? Fetch Hockey Canada officiating material to settle 6.9(b) crossbar vs shoulder? Unwrap the ~30k-character shooting §Screens blockquote into prose (the audio is unchanged)?

## Appendix B — the shared author brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. You are one of ten parallel authors (wave 9 / P1-P2 batch B).

You own EXCLUSIVELY the one file named in your task. Do not edit any other file. Never touch project/, scripts/, site/ or git: no add, no stash, no checkout. Other agents are editing sibling files concurrently. If a checker fails on a file you do not own, that is not yours; ignore it.

READ FIRST: CLAUDE.md (in particular "THE CORPUS TEACHES TACTICS", "READABLE BEATS DEFENDABLE", the rendering-states and marker sections, and the non-negotiables), then project/content_style_guide.md.

TASK:
- P1: re-aim the summary layers (Key focus, Overview, Common Mistakes, Key Takeaways) at what a player DOES.
  - Key focus holds up to 10 bullets, each truly one of the things a player should MOST focus on. Stated as actions. Siblings must look like siblings.
  - The Overview DISCUSSES those points; it is not a map of the rules.
  - Common Mistakes: lead each bullet with the instruction, then the tariff. RE-ORDER; do not strip.
  - Key Takeaways are kernels: what a player does in a situation.
  - The defect is usually ABSENCE: add the core craft a coach names first, if it is missing.
  - State tactics plainly as the common approach, name a realistic alternative, and say to check what your team plays. Do not present a coaching choice as a law.
  - Document-relative: keep a limb that is this document's subject. Demote an inherited limb only with a per-limb LAYER TEST showing it is carried elsewhere in the document.
- P2: `python3 scripts/check_callout_flow.py --panels --file <path>` (it reads site/dist, which is current as of 17:23). Move a panel's ⚠️ off a paragraph opening onto a **strong** run of the hazard clause (bold the instruction, never a citation). Split `**head, ⚠️ hazard**` into `**head,** ⚠️ **hazard**`. Never strip a paragraph's LAST marker. Repair, re-run and repeat until the listing stops changing.

LANE RULE (the owner's): repair a rules defect ONLY if it is PERMISSIVE and PENALTY-BEARING, i.e. it tells a reader an act is cheaper than the book makes it. Verify against sources/*.txt: grep with flattened wraps, quote the wording, ask whether the rule is the book's WHOLE answer to the act, and check every book in `ls sources/*.txt`. Report everything else rather than fixing it.

PLAN ROWS AS HYPOTHESES: `grep -n <your stem> project/plans/OPEN_ITEMS.md` and read hits in lines 25-240 (the carried-row sections). Each row naming your file is a hypothesis. Refute it before acting; line numbers may be stale. A row that is permissive and penalty-bearing is in your lane; fix it in EVERY layer of your file ("this claim, wherever it appears") and report the layer test.

RULES OF WORK:
- Never fabricate; never state a rule from memory; never strip an honest disclosure; no project narration in content.
- Airway: never write a flat "don't move them"; the CRT6 exception is "except to keep their airway clear". The helmet stays on.
- Facts caps: run `python3 scripts/check_facts.py --near <path>` before editing a block. Value caps are 300 for Rule:/Convention: and 200 otherwise. Block caps are MIN 3, MAX_COACHING (non-Rule) 8, HARD_MAX 14.
- When a qualifier moves between layers, ask what it was qualifying.
- Summaries overstate toward harsher, simpler rules. Re-read every new sentence against the body it summarises.

GATES, run on your file without pipes before you finish:
  python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py
  python3 scripts/check_marker_pairs.py <path>
For every LOST marker, restore it or justify it. Render with `python3 scripts/md_to_speech.py --only <stem> --out <SCRATCH>/<stem>`, where SCRATCH is /private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad/w9 (use only your own subdir). Read your new KTs and facts lines voiced alone.

REPORT:
- Key focus count before → after, with the list.
- Panels before → after, and marked units before → after (checker output).
- Every rules repair: the staged line, the source quote with file:line, and the direction.
- Every rules issue you did NOT fix, as a plan row with its direction.
- Self-caught defects in your own new text.
- "What this method could not have found."
