# Round 29 September 2026, wave 5: P1 re-aim of seven documents, and cross-document permissive rows

**Scope.** 15 content files. **P1 re-aim** (the Common Mistakes and Key Takeaways lead with what a player does, absent kernels filled, and tariff walls demoted after a layer test) in `special_teams`, `shooting`, `offensive_zone_play`, `defending_the_rush`, `body_contact_and_battles`, `uk_rules` and `rules_primer`. **Wave 5b**: the permissive rows from the cross-document census ([`w5_cross_document_census_2026-09-29.md`](w5_cross_document_census_2026-09-29.md)), applied in `zone_entries`, `language_and_glossary`, `defensive_zone_coverage`, `team_play_and_culture`, `mental_game`, `defender` and `forechecking_systems`. The rules_primer reader's cage-rule finding also reached `equipment`.

**Method.** One author per file with disjoint ownership. Each return got an independent `safety-reviewer` or `rules-verifier`, and every repair was re-read by a fresh reader until a read came back with no Critical and no Major. `rules_primer`, `body_contact_and_battles`, `uk_rules` and `shooting` each took **four or five** read-and-fix cycles. The live plan log, verbatim, is Appendix A.

## What the reads found

The P1 re-aims were largely upheld. Every demoted limb was found at a carrier in the body, facts or CM, and no KT lost its spoken "Important." The defects were mostly **in the repairs and in text that the re-aim exposed**:

- **Moved qualifiers.** A qualifier that changed job when a unit was split or re-led, recurring in every document that had a large rewrite:
  - `rules_primer` KT8 "deliberate", which narrowed CARHA 54(b) and HC 7.7(b);
  - `body_contact` KT10, split out of old KT9, which presumed that moving a net-front body is allowed;
  - `body_contact` CM :1794, whose re-order promoted "take them toward the corner" with no checking scope;
  - `uk_rules` CM cross-check, where "keep it off the head" became a licence for the body;
  - `offensive_zone_play` KT10, where "wherever contact is permitted, seal the wall" licensed pinning under IIHF women's 101.1.
- **Layers built on the old answer.** In `team_play_and_culture`, CM :590 and KT5 still listed only two ladder-skipping offences after the body had added the obscene gesture and spitting. Heard alone, a gesture was priced at two minutes. That was a **Critical**.
- **CARHA pricing that read cheaper than the book.** Found repeatedly in these places:
  - the unscoped accidental-high-stick carve-out (`shooting` facts :127 and others);
  - 49(b) boards double minors, missing at five `offensive_zone_play` sites and in `forechecking` and `defender`;
  - 63(a)/(b) holding as a discretionary or injury-mandatory major;
  - 48(d) cage grab;
  - 66(e) injuring interference;
  - 54(b)/(c) head cross-checks.
- **Other books:**
  - HC 6.2(e)'s mandatory contact-with-Linesperson minor;
  - HC 8.5(b), which ejects for any charge on a goaltender wherever they stand;
  - PWHL 51.3/51.5, where a cage grab or biting is a major plus a mandatory GM;
  - IIHF 43.1–43.2, where there is no minor from behind;
  - EIH R&R 24.5 cages, which the IHUK Junior ROC brings in by reference.
- **The net-front stick lift and press were taught with no timing condition.** The USA Hockey Casebook Standard of Play Situations 3 and 5 allow it only when the puck is in the vicinity. Fixed in six units.
- **Face protection.** `uk_rules` :202 "just a visor at Under-20" contradicted the IHUK Junior ROC. The instruction is now "as a junior skater, wear a cage". It carries a one-clause disclosure of the ROC's own "cage or full visor" list and of the 2024-25 edition of R&R 24.5.

## Coordinator errors recorded against the coordinator

- A brief named `forechecking.md`, which does not exist (the file is `forechecking_systems.md`).
- A brief asserted that NHL 56.1 names "receiving a pass". Only IIHF 56.1 does. The agent caught it.
- Several sketches were corrected by their agents:
  - the USAH 623 Note also names a tug, so the M4 list needed three books;
  - "the four books that name it … and the PWHL" would have denied that the PWHL names biting;
  - "walking a body across your goalmouth is priced" was not carried by the body.
- The recurring lesson: **a repair is new text**. The final C6 read found four Majors, every one introduced or exposed by an earlier repair.

## Gate

Build `npm run build`, first at 10:30 (after the 10:28 edit), then again after each round of gate repairs; the final build is recorded in the paragraph after the Dimension coverage table. It ran through `check:links`, and all internal links and anchors resolve. Every gate exits 0: `check_links`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check_counts` (39 documents, all figures match). `check_callout_flow --bare`: 0. `--panels`: 54, the baseline. `check_marker_pairs`: 0 lost markers in all 15 files. **Site (C10):** `site-reviewer` in Chrome, on the dist built at 10:30, found no Critical or Major. It checked every wave-5 page at DOM level: lists, 0 bare glyphs in page text, all nine new amber runs wrapped on their instruction, the KT10/KT11 split numbered 1–14, and facts rendered as `dl`. It then checked visually: the five named amber runs, light and dark themes with the toggle persisting, no console errors, no off-origin requests, the 400px iframe with no body overflow, and facts panels styled on shooting. Contrast is AA (5.71:1 light, 8.29:1 dark). A first attempt was blocked by the Chrome extension; the owner fixed it and the retry passed. Minors are carried forward.

## Gate block and repair

The first `commit-gate` run **BLOCKED**, and it was right to. It found three problems:
- **C11 / C4 / C6:** the last tiny fix added *"CARHA Hockey does not name it"* to `rules_primer` :483. No reader had seen it, and a CARHA reader would hear that nothing prices biting, although CARHA 48(a) gives a match penalty for a deliberate attempt to injure "in any manner".
- **C11:** nothing had read the rest of that fix (`rules_primer` :482–483, `uk_rules` CM :457 and KT9).
- **C3:** this record had no dimension table.

Repairs, each read by an independent reviewer:
- The CARHA biting line now reads "does not name it, but expect a match penalty under its Rule 48(a)". The author read Rule 48 in full and swept the book for the act.
- The IIHF quotation now uses the rule text *"can also result in"*, not the all-caps heading.
- A `safety-reviewer` read every last-fix unit and found no Critical or Major. It raised four minors, applied in its own wording: the PWHL 21.1 match route for biting, the NHL index pointing to 21.1, Hockey Canada's capital "Biting", and the KT9 word order.
- A new `facts-reviewer` pass for D10 found five facts lines cheaper than their bodies:
  - `defender` :404 and `offensive_zone_play` :839 stated the 49(b) double minor as universal, when only the minor converts;
  - `defensive_zone_coverage` :591 had a press with no release;
  - `defending_the_rush` :219 was missing the 32(a) count;
  - the `forechecking_systems` block at :739 had no CARHA 52(b) line.

  All five were repaired. A second `facts-reviewer` read then found two more Majors: DZC :591 had lost its start timing, and forechecking :750 had dropped 32(d). Both were fixed in that reader's wording. DZC :591 is now split into a Priority line and a Never line. Each stands alone, and the penalty is voiced at chunk distance 1, which is acceptable because the Priority line is a safe instruction on its own.
- A new `source-verifier` pass for D4/D5 checked about 52 new or re-attributed quotations against `sources/`. It found:
  - the `uk_rules` :202 EIH 24.5 quote truncated with an added full stop;
  - the Sources trailer not recording what was read.

  Both were repaired. While fixing them, the author also found :162 EIH 24.6 truncated. That cut had dropped the head-coach limb, so it read cheaper than the book, and the full sentence is now restored. A `safety-reviewer` upheld all three.
- A `rules-verifier` ruled that the "as the shot or pass arrives" timing for a stick lift or press is cheaper than IIHF 56.1, which protects a player "without possession" from "receiving a pass". Hockey Canada and USA Hockey allow it; the NHL, PWHL and CARHA are unsettled. **Owner decision, 29 September: commit wave 5 and fix this in wave 6.** It is a minor penalty with no injury cost, and it is carried forward.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes / why out of scope |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` (rules_primer, 101.1 ruling, stick-lift ruling), `safety-reviewer` ×~20 reads | Every changed rule claim was read against flattened `sources/`. |
| D2 | Rules travelling without exceptions | Yes | same, plus layer tests by each author | This is where most findings came from: moved qualifiers, the unscoped high-stick carve-out, 49(b) as universal. |
| D3 | Rule-set divergence | Yes | same | Six books on every tariff claim; British In-House/EIHL/EIH/JRoC for uk_rules and equipment. |
| D4 | Citation integrity | Yes | `source-verifier` (on disk; no new URLs), `check_quote_drift` | Two truncations were found and fixed. |
| D5 | Provenance | Yes | `source-verifier` | The uk_rules and team_play trailers were updated. Two nits carried: R&R 3.1/17.1 unlisted, and the JRoC read undated. |
| D6 | Negative existence claims | Yes | `safety-reviewer`, `rules-verifier` | "CARHA does not name biting" was tested, with 48(a) added. The label-only negatives are recorded as limits below. |
| D7 | The cardinal rule | Partly | readers, in passing | Tactics are stated as the common approach, with named alternatives (KT10 "where contact is permitted", man versus zone on the 2-on-2). No dedicated `content-reviewer` pass was run; it is carried to wave 6. |
| D8 | Numeric ownership | Not checked | — | No owned corpus figure was changed. `check_counts` matches. |
| D9 | The summary layer | Yes | every reader (the P1 subject) | CM and KT were re-led and filled; each demotion was layer-tested. |
| D10 | The key-facts layer | Yes | `facts-reviewer` ×2 | Seven Majors were found and fixed; the minors are carried. |
| D11 | Reader safety | Yes | `safety-reviewer` on every penalty-pricing file (C6) | Appendix A lists every read. |
| D12 | Read-aloud integrity | Yes | every reader rendered with `md_to_speech` and read the changed chunks de-tagged | Also covered: chunk distance, antecedents, and marker pairs (0 lost in 15 files). |
| D13 | Folklore | Not checked this wave | — | No new unsourced superlatives were introduced as far as the readers saw. The deferred D13 rows from 28 September are still open. |
| D14 | Structure, style, terminology, cross-links | Partly | `check_links`, readers | Links resolve. No dedicated style pass; carried. |
| D15 | The rendered site | Yes | `site-reviewer`: DOM check on 12 pages, plus a visual check in Chrome after the owner fixed the extension | Minors are carried. |

**Final build:** started ~11:39 after the last content edit (11:38:07, the DZC/forechecking reviewer strings), finished 11:42 (`dist/sw.js`), and ran through `check:links`. The C10 visual check ran on the 10:30 build; every change since is prose or facts-line text only.

## Carried forward

- **Wave 6: the women's IIHF 101.1 seal.** About 18 units across five documents, and a contradiction between `body_contact` and `forechecking`/`offensive_zone_play`. There is a rules-verifier ruling and a sketch sentence, and the PDF eye-check was done. See [`w5_wall_101_census_2026-09-29.md`](w5_wall_101_census_2026-09-29.md) and the carried rows.
- **Every open 🔴 row is carried verbatim into `OPEN_ITEMS.md` under "OPEN ROWS CARRIED OUT OF WAVE 5".**
- **The owner decision on CARHA 32(d) propagation is still pending.**

## What this method could not have found

- **Sibling documents** that repeat a repaired claim in other words. Each author layer-tested its own file, but only the gesture and wall censuses swept corpus-wide.
- **True negatives on labels**: CARHA and biting; CARHA and a cage-grab rule outside 48(d); USAH and PWHL head cross-check pricing.
- **Whether the IHUK Junior ROC reaches Scottish or Northern Irish juniors**, and whether EIH R&R 24.5 is still current. Neither is on disk.
- **Execution risk** for legal technique, which no rulebook grep can reach.

## Appendix A — the live plan section, verbatim

### LIVE — wave 5, dispatched 29 September 2026 after `7f468f1` was pushed

**Pushed:** `6644da8..7f468f1` (wave 4, CARHA ejection). The deploy is being watched.
**Brief:** `p1_common_v3.md` (session scratchpad): the v2 brief plus the wave-3/4 lessons (CARHA 30(a) and its scoped
exception, the pin timing, coordinator sketches as claims, KT kernels).
**P1 re-aim, one agent per file, disjoint:** `special_teams` · `shooting` · `offensive_zone_play` · `defending_the_rush` ·
`body_contact_and_battles` (the ORDERING reframe) · `uk_rules` · `rules_primer`.
**Plus a read-only census** over the cross-document rows:
- (A) the unscoped high-stick exception;
- (B) "only exception" without the skater scope;
- (C) obscene-gesture / glass-banging tariffs;
- (D) "tie up the stick";
- (E) the CARHA 49(b) boards double minor.

It feeds wave 6. **Every return gets an independent reader before commit.**

✅ **The wave-4 deploy (`7f468f1`) succeeded, and so did CI.**
**Returns:**
- `defending_the_rush`: absence again. Instructions filled into ~12 CM bullets; 4 new CM bullets; a new KT6 (2-on-2 / 3-on-2 / 3-on-1 / trailer); the KT9 tariff demoted with a layer test. Under safety review.
  🔴 Rows: KT9 is still ~2,000 chars (a split candidate); KT7/KT8 overlap; the Key focus is missing "take the middle / read the chest / backcheck / everyone has a mark" (a quality-bar brief); the Overview carries a boarding/CARHA 49(a) paragraph.

- `special_teams`: 4 CM fills, 2 CM re-orders; KT8 re-aimed to "pressure the puck, never the back" (1455→783), KT9/KT10 demoted with carriers.
  KT10 **reversed a claim** (it ranked the disallowed goal above the ejection, against body :1096); it needs a reader.
  Sent back: the CARHA 52(a) discretionary major's 30(a) ejection (facts :1089 / body :1110), plus the KT6 vs CM :1163 faceoff count.

- `offensive_zone_play`: KT-only changes. KT3/KT12/KT13 fills; KT5 2,694→1,374; KT7 re-ordered to "crash the net"; KT10 2,558→1,062; KT11 1,176→437; carriers listed. Under safety review.
  🔴 Rows: CM :1092/:1097/:1099 tariff walls (4–4.7k chars; they need a per-limb layer test); the §12 "most common goal against" frequency claim is unsourced; KT4's inherited board-posture limb is a demotion candidate (owner rule).

- `uk_rules`: 9 CM fills; 4 new KTs (goalie contact, trapezoid, IIHF edition/high stick, broken stick); old KT7 2,040→~1,450. Under safety review, which also rules on the author's **possible permissive defect: body ~:202 "just a visor at Under-20" outside England/Wales vs the IHUK Junior ROC full-face requirement for all U10–U19**.
  🔴 Row: KT1/KT8/KT9/KT14 (medical 2,790)/KT15 are over 800 chars.

- `shooting`: 5 CM fills; new KT11 (off the rush) and KT12 (when not to shoot); KT4/KT6/KT7/KT10 demoted (KT rules share 78%→51%). Under safety review. 🔴 Row: facts :295 HC 8.5(b) "in their crease" is narrower than the book (not permissive).

- `special_teams` follow-up: facts :1089 and body :1110 now carry the 30(a) ejection for a discretionary 52(a) major; KT6 corrected to "four books of the six" (PWHL added, verified). Under safety review, which also rules on HC 6.2(e)'s mandatory contact-with-Linesperson case, the PWHL dot-contact pricing, and CM :1168.

- **Census returned** → [`w5_cross_document_census_2026-09-29.md`](../reviews/w5_cross_document_census_2026-09-29.md). Permissive rows found: the unscoped high-stick exception (shooting :127 facts, :525; zone_entries :733; DZC :529; glossary :347); gestures (team_play :364; **:368 contradicted by NHL 75.5(ii)/40.x**; mental_game "can be"); "tie up the stick" (DZC :591/:607/:817); CARHA 49(b) (defender :403/:417, OZP :868/:1099, DTR :235, forechecking :757). **Wave 5b** dispatched to the files outside wave 5: zone_entries + glossary · DZC · team_play + mental_game · defender. The rows in wave-5 files go to their authors after their reads.
- ✅ DTR read: no Major. Sent back: the KT6 zone-crossing craft; "every other rush"; **KT9 missing the USAH 608(c) mandatory match (permissive)**; census E :235.
- `body_contact_and_battles` P1 returned: KTs 10→13 (kernels; KT rules share 96%→86%), ~14 CM fills and re-orders. Under safety review.

- ⛔ **~09:00: every running agent stalled at once** (service outage, 600 s watchdog). Tree checked at 09:20: gates pass; the four w5b agents had made no edits; `rules_primer` P1 and the `defending_the_rush` follow-up stalled MID-EDIT.
  **Re-dispatched:** `rules_primer` (told to inspect and finish or restore the partial KT rewrite) · the DTR follow-up (check what is applied first) · the 4 w5b agents.
  **Readers still to re-dispatch** (their dispatch was refused by the outage): `shooting` (+census :127/:525) · `offensive_zone_play` (+census E :868/:1099) · `uk_rules` (+ the U19 face-protection ruling) · `special_teams` (+HC 6.2(e), PWHL dot contact, CM :1168) · `body_contact_and_battles`.

- ✅ w5b `zone_entries` :733 and `language_and_glossary` :347 (+ trailer :473) scoped to "an accidental high stick that injures nobody". Needs a reader (batch it with the other w5b files).

- ✅ w5b `defender`: 49(b) double minor + the 32(a) count (facts line split, 11→12 facts; body :417). The service is back (~09:30): all five readers re-dispatched.

- ✅ w5b DZC: A :529 scoped; D :591/:607/KT11 now state the means (lift or press the blade; holding the stick is a minor in all six, verified). 20→20 markers.
- ✅ DTR follow-up: KT6 crossing tied to man-on-man, zone trades marks (CM :898 too); "every other kind of rush"; KT9 + USAH 608(c) mandatory match; body :235 + 49(b)/32(a). 28→28 markers. OPEN: KT9 "USA Hockey's Casebook requires…head first" may belong to the playing rule 608(b); sent to its reader.
- ⏳ Readers dispatched: ZE+glossary+defender; DZC+DTR follow-up.

- ✅ w5b team_play :364/:368 + mental_game :533/:644/KT10: an obscene gesture is a MANDATORY game misconduct (NHL 75.5(ii), PWHL 77.5(ii), USAH 601(d)(2); the agent also found IIHF 2026/27 75.5(II)). Markers 33→33, 4→4. Reader dispatched.
- 🔴 NEW census row (C2): other docs may still say a gesture "can be" a game misconduct, or that "the IIHF adds one the NHL does not write". Only these two files were searched. HC and CARHA gesture tariffs were not verified.

- ✅ rules_primer P1 finished: KT 5,666→2,542 words, all 10 rewritten; 13+ CM re-ordered or filled. A lane repair of a HEAD CM: "skates behind the red line = legal everywhere" was false under NHL 27.7 (the puck decides). Markers 112→113, 0 lost. KT9 (2,175 chars) and KT10 (1,661) are still long (ejection limbs). A rules-verifier reader was dispatched (six books, the new leads, "of four" frames).

- ✅ shooting reader: the P1 edit is upheld (KT4/6/7/10 demotions safe, CM fills and KT11/12 consistent). Census A confirmed: MAJOR facts :127 (unscoped HS carve-out, voiced alone), MINOR :525; the KT6 CARHA 66(e) omission (HEAD). Fix agent dispatched.
- 🔴 NEW (rules-verifier, not lane): shooting KT7, facts :693 ("Hockey Canada writes the shoulder limb only") and :707 omit HC 6.9(b), where the crossbar decides a high-stick goal. The file already cites it at :257. It costs a goal, not a penalty. :693 has 4 chars of headroom.

- ✅ OZP reader: KT3/5/7/11/12/13 are sound. M1: census E reaches FIVE sites (facts :839, :868, :925–932, CM :1098/:1099) with no 49(b) anywhere. M2: KT10 regression dropped USAH non-check adult classes. Minors: KT10 seal scope, KT5 wording. Fix agent dispatched.
- 🔴 rules-verifier row: OZP KT5 "three of the six forgive none" incidental goalie contact vs the HC 8.5 preamble ("incidental contact … may occur"). If wrong, it errs conservative. KT10 checking-from-behind "no bare two minutes" is an understatement (five of six eject); optional.

- ✅ uk_rules reader: KT4–7 are sound kernels; the KT11 demotion layer test is upheld. MAJOR 1: the new CM cross-check fill licensed cross-checking to the body (qualifier became the instruction). MAJOR 2: :202 "just a visor at Under-20" contradicts the IHUK Junior ROC U10–U19 full-face rule and equipment.md :97/:117; KT8, the CM cage bullet and :198/:200 women U19 need it too. Minors: KT4 "unnecessary", KT7 goalie stick, KT15 ordering. Fix agent dispatched.
- 🔴 rules-verifier rows (uk_rules, not lane): KT6 "your own shoulders" (60.1 measures the opponent's; harsher); :130 "carried high is a penalty before it touches anyone" (harsher); :158/:367 "no document says who the Proper Authorities are" vs In-House Rule 28 "Discipline Policy of the home association (EIH or SIHA)" — a disclosure that undersells.
- 🔴 NEW census row: other units that settle an unsettled scope in the lenient direction (the uk_rules :202 shape). Not swept.

- ✅ special_teams reader: changed-unit claims hold, 58→58 markers. MAJOR: the KT10 regression dropped HC 8.5(b) "any charge on a goaltender" and narrowed to "in the crease". MAJOR (pre-existing): facts :987 calls HC 6.2(e) discretionary, but its 2nd paragraph is mandatory. Minors: :990 PWHL 78.7, KT8 understatement. Fix agent dispatched. 🔴 Not lane: KT9 NHL empty-bench icing carve-out dropped. 🔴 Sibling sweep: faceoffs.md / body_contact for the HC 6.2(e) / PWHL 78.7 / HC 8.5(b) gaps.
- ✅ ZE + glossary + defender reader: ZE :733, glossary :347/:473 and defender :418 are CLEAR. Defender facts :403 (moved qualifier) and :404 (no tier) are MINOR; fix agent dispatched. The shooting :127 MAJOR is independently confirmed (already under fix). 🔴 Low: Sources trailers omit the 62(b) restoration (time_and_space :649, OZP :1173/:1189, switching :571, shooting :965) — unvoiced. 🔴 defender :418/:799/:875 "worst case an ejection" omits the CARHA 32(d) suspension.

- ✅ team_play + mental_game reader: mental_game :533/:644/KT10 are CLEAR, and IIHF 75.5(II) is in all four IIHF files. CRITICAL: team_play CM :590 and KT5 :663 were built on the old two-item skip list (force and bench), so a gesture reads as 2 minutes. MAJOR: :368 IIHF omits 39.5(VIII) abusive language. MINOR: spitting is a match penalty under USAH/HC/CARHA. Fix agent dispatched.
- 🔴 Check rules_primer#talking-to-officials for the same old skip list. It falls within the gesture census scope; after the rules_primer reader returns.

- ✅ DZC + DTR follow-up reader: no Critical or Major. KT9 Casebook attribution is correct (Casebook 608 Sit. 1, and 608(b) independently). Minors: DZC :529 circular; :607 label and the HC 8.1(b)/CARHA 63(b) injury major; press-vs-sustained-pin; DTR KT9 dropped "from behind". Fix agent dispatched. Content-reviewer nits: DTR KT6 "every other kind" (1-on-2 is uncovered) and the dropped "don't mix them".

- ✅ shooting fix: facts :127 (297/300, "one that injures still ejects you … may cost the suspension too"), :525 scoped, KT6 HC charge/injuring interference + CARHA 66(e), a new CM 66(e) sentence, KT4 names the books. 31→31 markers. Re-read dispatched.

- ✅ defender fix: :403 names CARHA 49(a) (274/300); :404 carries the tier + ejection + 49(b) + scope (297/300). 32→32 markers. Still open (awaiting the owner decision on 32(d) propagation): :418/:799/:875 "worst case an ejection" omits the CARHA 32(d) suspension.
- ✅ OZP fix: M1 at all five sites (facts :839 296/300, :868, CM :1098/:1099, blockquote + Casebook Sit. 2); KT10 non-check adult + "Wherever contact is permitted"; KT5 wording. 37→37 markers. Re-read (defender + OZP) dispatched.

- ✅ forechecking_systems (the brief said "forechecking.md", which does not exist — a coordinator error): 49(b)+32(a) at 7 sites incl. 2 new Rule facts lines and KT6. 43→43 markers. Reader dispatched.
- ✅ Gesture census → project/reviews/w5_gesture_census_2026-09-29.md. One mild permissive row: rules_primer :482 prices "obscene … gestures" on the minor→misconduct→GM ladder (75.5(ii) is correct at :484/:906). No spitting-at-official claim anywhere else. HC has no obscene-gesture rule (11.2 misconduct/gross misconduct); CARHA 46(b)(1) makes it a misconduct. 🔴 Fix rules_primer :482 after its reader returns.

- ✅ body_contact reader: every demoted limb has a carrier; KT3/KT4 upheld; no KT lost its "Important." CRITICAL: KT10 (split out of old KT9, now voiced alone) presumes moving a net-front body is allowed, with no non-check or interference scope. MAJOR: CM :1790 "Tie up their stick" gives no means (census D). MAJOR: the KT9 "puck as object keeps it legal" rationale fails under CARHA 49(a). Minors: CM :1798 "the four", KT13 self-contradiction, KT4 scope. Fix agent dispatched.
- 🔴 rules-verifier (body_contact, pre-existing, not lane): KT11 loose-puck race vs CARHA 66(a) Notes 1–2 (body §10 has no CARHA); "Only the NHL leaves a board battle to Boarding's judgement" (KT9, CM :1807) — HC and PWHL also (harsher direction); helmet-reaching is roughing under NHL/IIHF 51.1.

- ✅ DZC + DTR minors fixed (:529, :607 press caution + HC 8.1(b)/CARHA 63(b), :591, KT11; DTR KT9 608(c) wording + sibling CM :906). Markers 20→20, 28→28. Re-read dispatched.

- ✅ uk_rules fix: cross-check CM ("don't cross-check at all"), :202 face-protection rewrite + U19 limbs (:198, CM, KT9), KT5 "unnecessary", KT8 goalie stick, "Ask your league" moved to KT3. 59→59 markers (+1 marked paragraph at :202). Re-read dispatched. 🔴 :201 BUIHA "the rule above" may now dangle (pre-existing).
- ✅ special_teams fix: KT10 names all three mandatory books; facts :987/:988/:991 (HC 6.2(e) mandatory limb, PWHL 78.7); KT8 "five of the six"; CM :1163 and a new CM :1169 HC/CARHA sentence. Block 12/14. 58→58 markers. Re-read dispatched. 🔴 Sibling: faceoffs.md ("sets that split out in full") for HC 6.2(e) / PWHL 78.7.

- ✅ team_play fix: :368 spitting in all six books + IIHF abusive language + a one-line contradiction disclosure; CM :590 and KT5 :663 now carry the gesture and spitting limbs ("among them"). 33→33 markers. Re-read dispatched. 🔴 Harsher direction, not lane: CARHA 46(a) Note makes the minor a REQUIRED first step for disputing, contrary to ":590/:663 the usual course". 🔴 Unswept: other first-offence GMs against officials (USAH 601(d)(8)/(9), IIHF 39.5(VI)).

- ✅ forechecking_systems reader: 6 of 7 sites CLEAR (KT6 antecedent survives, "its Note" resolves). MAJOR: new facts :224 "penalised contact … is a double minor" (only the minor converts; the major and the injury-mandatory major are dropped). Minor: :237 body lacks 49(b); the pinch block is at 13/14. Fix dispatched.

- ✅ shooting re-read: :127, :525 and CM :847 CLEAR; KT6 CLEAR (66(b) silence OK because the list is labelled mandatory). MINOR KT4 dropped "normal/wild swing" (permissive for NHL/IIHF/PWHL); MINOR KT6 "any charge"; MAJOR (pre-existing) the crease facts block lacks the injuring-interference ejection. Second fix pass dispatched.

- ✅ body_contact fix: KT10 scoped (full-checking only, from an established position) + the stick means; CM :1790 means; KT9 CARHA avert; CM :1798; KT13 contradiction cut; KT4 "four of the six". 97→97 markers, per-KT unchanged. Re-read dispatched (incl. CM :1794 presumption, press-as-holding).

- ✅ defender + OZP re-read: defender :403/:404/:418 CLEAR (optional: lead :404 with "intentional bodying"); OZP facts, body, CM, blockquote and KT5 CLEAR. MAJOR: the OZP KT10 "Wherever contact is permitted, seal the wall" licenses pinning in IIHF women's hockey (101.1). Fix dispatched.
- ✅ DZC + DTR re-read: :529, KT9 and CM :906 CLEAR. MAJOR: DZC :607/:591 "minor in every book" vs CARHA 63(a) discretionary major (unclear text; defender :290 already hedges). MINOR: :607 readability. Fix dispatched. 🔴 Check body_contact CM :1790 / KT10 "a penalty in every book" — no tier stated, so it is fine.

- ✅ forechecking fix 2: :224 converts only the minor, "a major stays a major and still ejects"; :223 adds the injury-mandatory major (294/300); body :237 gains 49(b). 43→43 markers. Re-read dispatched.

- ✅ shooting fix 2: KT4 normal/wild-swing limit; KT6 "any charge on a goaltender, or any charge or interference that injures" (HC 7.4(b), 8.3(b)); new crease facts :502 (block 13/14). 31→31 markers. Re-read dispatched.

- ✅ OZP fix 2: KT10 adds "not at all in IIHF women's hockey, whose Rule 101.1 bars using the boards to eliminate, push or pin an opponent" (one clause). 37→37 markers. ⏳ Reader: batch it into the final pre-commit safety sweep. 🔴 Sibling census: forechecking_systems / defender / DTR "seal the wall" units vs IIHF 101.1; OZP :866 "never the boards used to eliminate, push or pin" applies it to every book (harsher).

- ✅ forechecking fix-2 re-read: :224, :237 and "Either major" UPHELD; :223 minors ("at least" suspension, "avert contact" antecedent). Tiny fix 3 dispatched; its reader is batched into the final sweep. ⏳ Census of seal-the-wall vs IIHF 101.1 dispatched (read-only).

- ✅ DZC fix 3: :591 "at least a minor" (193/200); :607 split into short sentences, "at least a holding minor in every book, and in CARHA possibly a major, which ejects you", injury clause kept. 20→20 markers. ⏳ Reader batched into the final sweep. 🔴 Census: other docs stating "a holding minor in every book" as a cap (CARHA 63(a)).

- ✅ forechecking fix 3: :223 "at least a one-game suspension", "failing to avert contact" (297/300). 43→43 markers. ⏳ Batched into the final sweep.

- ✅ special_teams re-read: KT10 three-book claim UPHELD (HC 8.5(b), CARHA 52(b), USAH 607(b)); facts :987/:988/:991 and KT8 UPHELD; no Major. Minors: KT10 place clause, :1090 "violence", :988 "they", CM :1169 ⚠ sibling look, KT9 NHL 81.6. Fix 3 dispatched.
- ✅ uk_rules re-read: KT5, KT8, the reorder, CM :467 "university" and the :198 direction UPHELD. M1 (introduced by the repair): "a minor wherever it lands" is false from behind (IIHF 43.2 has no minor). M2: "wear full face" is weaker than EIH R&R 24.5 cages (the ROC incorporates R&R §24; its U19 line says "cages"). equipment.md :97/:117 has the same issue. Minors: men's/women's visor, "18 or over", :201 "above". Fix 2 dispatched (uk_rules + equipment). 🔴 Currency: eih_rr.txt is 2024-25; is a current EIH R&R needed?

- ✅ rules_primer reader (rules-verifier): KT1–KT10 verified against six books; the new leads are CLEAR (red line, circle, trapezoid, clear); layer test OK except CARHA 54(b), which lived only in the KT. MAJOR: KT8 "deliberate" moved qualifier narrows CARHA 54(b) and HC 7.7(b). Also: the PWHL 51.3/51.5 cage-grab major+GM is omitted (pre-existing, permissive); gesture :482. Minors: KT1 "all four", the "of four" frames, the 72(e)(2) label. Fix dispatched. Left: KT6 8.7(c), KT3 81.6 timing, EIHL charging.

- ✅ team_play re-read: no Critical or Major; all spitting and gesture tariffs verified (PWHL Rule 40 is automatic, floors 8/4/1). Readability fix 3 dispatched (KT5 merge, :368 rule numbers, provenance). 🔴 rules-verifier (harsher direction): CARHA 46(a) mandatory ladder vs "usual course"; USAH 601(c)(7) touching an official is a misconduct vs CM :590 "at least a game misconduct"; IIHF 39.2(I) team minor (optional).

- ✅ shooting re-read 2: KT4, KT6 and facts :502 UPHELD (HC 7.4(b)/(e), 8.3(b), 8.5(b); CARHA 52(b), 66(e), 30(a)). Minors: KT4 omits the CARHA accidental-major floor (pre-existing); :502 cite 8.3(b); KT4 heading. Fix 3 dispatched; its reader is batched into the final sweep.

- ✅ special_teams fix 3: KT10 "with a goaltender anywhere on the ice"; :1090 "reckless endangerment"; :988 and CM :1164 "the Linesperson"; CM :1169 leading ⚠️; KT9 NHL 81.6 sentence (new text). 58→58 markers. ⏳ Batched into the final sweep.

- ✅ body_contact re-read: KT4, KT9, KT13 and CM :1798 UPHELD. MAJOR 1: the net-front lift/press has no puck-timing condition and dropped "light" (USAH Casebook SoP Sit. 3/5; HC 8.1; CARHA 63(a)); the file's own §3 calls it interference without the puck. MAJOR 2: the CM :1794 re-order promoted "Take them toward the corner" with no checking scope (KT10's twin). Fix 2 dispatched. 🔴 Census: DZC/defender/OZP lift-press units for the Casebook timing condition; rules-verifier on the NHL 56.1/56.2(i) walk-out reading.

- ✅ shooting fix 3: KT4 "CARHA makes even an accidental one a major", heading "can be a penalty"; facts :502 cites 8.3(b) and 8.5(b), "also" dropped (198/300). 31→31 markers. ⏳ Batched into the final sweep.

- ✅ team_play fix 3: KT5 physical-force + spitting merged (1,510→1,430), :368 rule numbers → book names, "also lists", Sources trailer spitting record. 33→33 markers. ⏳ Batched into the final sweep. 🔴 rules-verifier: IIHF 40.1/39.5(III) "likely to cause injury" qualifier vs "at least a GM in every book" for physical force (pre-existing).

- ✅ rules_primer fix: KT8 "deliberate" scoped to the HC interpretation, CARHA 54(b)/(c) now in body :439, CM :999 and KT; PWHL 51.3/51.5 cage grab (CM :1003, :459, :482); gesture GM at :482; "of four" frames → six books (KT1, CM :1000/:1002, :442 + "Under CARHA it can too"); 72(e) label. 112→113 markers, 0 lost. Re-read dispatched. 🔴 :459 "three books of four" strength-move frame still stale; facts blocks not re-tested for cross-check/cage.

- ✅ body_contact fix 2: lift/press timing + "lightly" at 6 units (facts :1237/:1282, body :1253/:1324, CM :1790, KT10) with Casebook SoP 3/5 cited; CM :1794 scoped to full-checking + box-out rewritten; facts :1245 Never scoped. 97→97 markers. Re-read dispatched. 🔴 Census: net-front press timing in defender/OZP (DZC :607 already carries it).

- ✅ Wall/101.1 census → project/reviews/w5_wall_101_census_2026-09-29.md: ~18 seal/pin/ride units lack the women's IIHF 101.1 exception (body_contact :61/:209/:218/:265/:415/:428; forechecking :528/:911/KT6; OZP :834/:853/:866/:874/:955; DTR :425; game_management :511/:522). CONTRADICTION: body_contact :1121 says women may seal, while forechecking and OZP say the seal is barred. A rules-verifier ruling was dispatched. 🔴 → WAVE 6 (not this commit): one claim-brief per document once the ruling lands. Harsher: DTR :892 misattributes non-check pricing to 101.1.

- ✅ body_contact re-read 2: no Critical or Major; the timing limb is in every layer; CM :1794 and the KT10 interference clause are CLEAR. Minors: "is holding" flattened; :1282 press location; :1253 CARHA 63(b) injury-mandatory missing (permissive); the CM :1790 CARHA clause is misplaced; KT10 "the lift" ambiguous; KT10 split for readability; :339 Never line contradicts the net-front lift. Fix 3 dispatched.

- ✅ uk_rules + equipment fix 2: cross-check-from-behind (IIHF 43.2 no minor); "wear a cage" instruction (EIH R&R 24.5 2024-25) at uk_rules :202/CM :467/KT9 and equipment :97/:117/:470; men's-only visor; "18 or over"; :201. Markers 59→59, 35→35. Re-read dispatched. 🔴 Census: `grep -rn "regardless of being 18" content/` for other copies; currency of EIH R&R 24.5 (network fetch, needs the owner's OK?).

- ✅ WAVE-6 RULING on the seal under IIHF women's 101.1 (rules-verifier, 29 Sep): a POSITIONAL seal is permitted (101.1 stationary-player + "hold their ground", 56.1 body position); using the boards to eliminate, push or pin is barred (minor, or major + auto GM; Table 5 MAJOR+GMP; In-House ejection). Sustained contact pressing her to the boards is unsettled; ship the conservative reading (in contact with the boards behind her = barred). No Situation Handbook covers Rule 101. Both corpus readings overstate: body_contact :415/:428 "let the boards do the rest" is permissive; forechecking :580 "takes the seal itself away" is harsher. Sketch: "In IIHF women's hockey you may beat her to the wall and take the ice between her and the puck, then hold that ground and play the puck. What you may not do is use the boards to finish the job — push her into them, pin her there, or lean on her to keep her out of the play: that is an illegal hit under Rule 101.1, a minor or a major and an automatic game misconduct." Other books: PWHL 52.1 (no boards limb), HC 7.3 Interp. 1 (close off the boards without contact), USAH Casebook SoP Sit. 15, CARHA 49(a). 🔴 Eye-check "bodychecking is allowed" in the IIHF 101.1 opener with pdftoppm (iihf_rules_v1.1.pdf p.154). → Dispatch wave 6 after the wave-5 commit.

- ✅ body_contact fix 3: 7 minors (incl. :1253 HC 8.1(b)/CARHA 63(b) injury limbs; KT10/KT11 split with +1 ⚠; the :318/:339/:353 "not about to receive it"). ⚠️ KT RENUMBERING: the old KT11/12/13 are now KT12/13/14; plan rows citing body_contact KT numbers refer to the OLD numbering. 97→97 paragraph markers, 328→329 ⚠. Re-read dispatched.

- ✅ uk_rules + equipment re-read 2: the lead instructions (wear/buy a cage) are correct everywhere; quotes verbatim; KT9 upheld. M1: "a full visor meets IHUK's junior rules" is a half-reading (the ROC §10 baseline incorporates EIH R&R §24). M2: equipment :470 "full face cannot be wrong" contradicts its own junior clause. M3: equipment CM :705 leads with "cage or full shield". Minors: skater scope, CM :457 "not aware" (harsher), equipment KT3. Fix 3 dispatched. 🔴 WNIHL/NIHL/U10 ROCs may incorporate §24 unnamed; SIH policy is not on disk.

- ✅ IIHF 101.1 eye-check (pdftoppm, iihf_rules_v1.1.pdf p.154): "bodychecking is allowed…" is printed as extracted; no words were lost. The penalty clause (bold) sits BEFORE the boards sentence, and the boards sentence has no tariff of its own. The 2026-27 text is byte-identical, but no 2026-27 PDF is on disk. The wave-6 ruling stands.

- ✅ rules_primer re-read: gesture :482, PWHL cage, grace-in-three all CLEAR; CARHA's gesture rule is 46(b)(1) (a misconduct). MAJOR: :442 "Under CARHA it can too" omits 63(b) mandatory-on-injury, includes goalkeepers, and 32(d); the "only book of four" contradiction. Minors: KT1 USAH 630(d)(2); CM :991 label; KT8 readability + counterweight; :482 "two"→"three"; CM :999 antecedent; CM :1000 CARHA hooking definition. Fix 2 dispatched. 🔴 Sibling sweep: "only Hockey Canada" on a head cross-check, now CARHA 54(b) too.

- ✅ FINAL SWEEP of the batched small fixes (OZP KT10, DZC :591/:607, forechecking :223, special_teams ×5, shooting KT4/:502, team_play KT5/:368/trailer): NO Critical or Major; every unit holds; no qualifier changed meaning; all ⚠ lead strong runs. Minors: team_play trailer PWHL "Official" capitalisation; special_teams :1090 "barring" is ambiguous (tiny fix dispatched); DZC :607 cite 30(a) (optional, harsher).

- ✅ uk_rules + equipment fix 3: M1 incorporation-by-reference clause (:202, CM :467); M2 equipment :470; M3 equipment CM :705; skater scope (:202, KT9); CM :457 "doesn't see it coming"; equipment KT3 "(a cage, in England and Wales)". Markers 59→59, 35→35. ⏳ Into the final pre-commit C6 read (with rules_primer fix 2 and the tiny fixes).

- ✅ Tiny fixes: team_play trailer attributes the lowercase quotes to the NHL, PWHL 40.3/40.4 with "Official" capitalised; special_teams :1090 "ruling out" (299/300). Markers unchanged. ⏳ Into the final C6 read.

- ✅ body_contact re-read 3: no Critical or Major; the KT10/11 split, the injury limbs and the CM :1790 move are UPHELD. Minors: "not about to receive it" has no time limit (IIHF 56.1 names "receiving a pass"); KT10 "into the goal frame" narrows from-behind. Fix 4 dispatched → final C6 read.

- ✅ rules_primer fix 2: :442 Major (holding ceiling: 4 books minor; HC and CARHA higher, 63(b) mandatory, goalkeeper included, 32(d)); :439 54(d); :482; CM :991/:999/:1000; KT1; KT8 split. 113→113 marked paragraphs. ⏳ Final C6 read dispatched (rules_primer + uk_rules/equipment fix 3 + tiny fixes). body_contact fix 4 is read separately when it lands.

- ✅ body_contact fix 4: "has none arriving at their blade" (:318/:339/:353); KT10 "from behind is priced anywhere on the ice". 97→97 markers. The coordinator brief carried a WRONG premise (NHL 56.1 names "receiving a pass"; only the IIHF does), caught by the agent. ⏳ Final read dispatched.

- ✅ body_contact final read: no Critical or Major; the :318/:339/:353 timing is UPHELD (no cheaper than IIHF 56.1, supported by Sit. 81.16). Minor (harsher): KT10 "driving" → "checking a player from behind" (HC Interp. 1, NHL "unable to protect"); "none" → "no pass or shot". Word-level tiny fix dispatched, as verified by the reader.

- ✅ body_contact tiny fix: KT10 "checking a player from behind"; "no pass or shot arriving" at :318/:339/:353. 97→97 markers. The body_contact content is final (the wording was verified by the reader before the edit).

- ✅ Final C6 read (rules_primer/uk/equip/tiny): FOUR Majors, all introduced or exposed by repairs. uk CM :457 awareness test (43.1's second sentence has none); rules_primer :482 omits CARHA 48(d) (match/double minor); KT8 division scope moved; CM :1000 CARHA 63(a) holding-by-stick omitted. Minors: :991 ⚠ on the citation; special_teams :1090 "ruling out" still confusing; team_play trailer PWHL suspension lengths; uk KT9 by-reference; equipment England-and-Wales narrower than the incorporation (left). Two fix agents dispatched. Upheld: rules_primer :439/:442/:991/KT1, uk :202/:467, equipment.

- ✅ Fix 4 (uk/special_teams/team_play): uk CM :457 "into an opponent's back — above all one who doesn't see it coming"; uk KT9 by-reference; special_teams :1090 8.5(d) clause removed (267/300); team_play trailer PWHL 4/1-game suspensions quoted. Markers unchanged. ⏳ Final read, together with rules_primer fix 3.

- ✅ rules_primer fix 3: M2 :482 CARHA 48(d) + "four books"; M3 KT8 + CM :999 minor-and-female scope, 7.7(b) no interpretation; M4 CM :1000 (USAH 623 Note also names a tug — the agent corrected my sketch) + CARHA 63(a); :991 ⚠ moved to the instruction. 113→113, 0 lost. ⏳ Last read dispatched (with fix 4, the 43.4 question, and the "Biting … four" count).

- ✅ LAST READ (rules_primer fix 3 + fix 4): NO Critical or Major. CM :999 and KT8 are genuine repairs; CM :1000 and special_teams :1090 UPHELD; IIHF 43.4 is supplementary discipline only (no match rung). Minors: the biting "four" is stale plus the PWHL; IIHF 23.8(IV) "outright"; PWHL missing from the hair tail; uk :457 overstates (harsher); KT9 disclosure. Last word-level fix dispatched; then BUILD. 🔴 rules-verifier: :991 USAH 630(d)(2) pressure trigger and its level scope.

- ✅ Last tiny fix: rules_primer biting "five books … five ways" + PWHL 51.3/51.5, "CARHA does not name it"; IIHF 23.8(IV) "can result in"; PWHL in the hair tail; uk CM :457 "that is how the IIHF defines checking from behind"; KT9 disclosure restored. The last content edit is at 10:28. 🟢 BUILD STARTED (wave-5 commit sequence). 🔴 Carried: CARHA biting via 48(a)?; the PWHL 51.3 "minimal degree" scope.


## Appendix B — the commit-gate repair log, verbatim

### LIVE — wave-5 commit gate BLOCKED (29 Sep ~10:55)

- ⛔ commit-gate BLOCK: (1) C11/C4/C6: rules_primer :483 "CARHA Hockey does not name it" was added after the last read, is unread, and reads permissive (CARHA 48(a) match penalty for a deliberate attempt to injure "in any manner"; HC Interp. 2 calls biting an attempt to injure). (2) C11: the rest of the last tiny fix (:482-483, uk :457/KT9) is unread. (3) C3: the record has no D1–D15 table (D4/D5/D10/D6/D7/D12/D13/D14 silent). Everything mechanical passes; the index matched the tree. Unstaged (mixed reset, not destructive).
- ⏳ Dispatched: the rules_primer biting fix (+ the IIHF "could result in" heading-as-quote); facts-reviewer D10 over changed facts lines; source-verifier D4/D5 on-disk quote fidelity. Then a safety read of rules_primer :482-483 + uk :457/KT9, then the D-table and a rebuild.

- ✅ Gate fix: rules_primer :483 "CARHA Hockey does not name it, but expect a match penalty under its Rule 48(a)…"; CARHA Rule 48 was read in full and swept for the act (0 biting/teeth; 46/59(c) would be the permissive reading); *"can also result in"* is the IIHF rule text (the heading said "could"). 0 lost markers. ⏳ Safety read of all the last-fix units dispatched.

- ✅ Gate safety read (rules_primer :482-483, uk :457/KT9): NO Critical or Major; every quote verified; the CARHA 48(a) inference is worded as one; uk :457 now matches 43.1. Minors, applied as the reader worded them: the PWHL 21.1 match route, NHL index → 21.1, HC capital "Biting", KT9 aloud. ⏳ Apply.

- ✅ D10 facts-reviewer (18 changed lines): no Critical. MAJORS: defender :404 and OZP :839 state the 49(b) double minor as universal (only the minor converts); DZC :591 press with no release; DTR :219 lacks the 32(a) count that body :235 gained; forechecking :739 block has no CARHA 52(b) mandatory line. Fix dispatched (5 files). Rules question: the bc :318/:339/:353 lift-on-arriving-pass permission is sourced only to USAH; a rules-verifier was dispatched. Minors (to carry): bc :1237 "kept"; shooting :127 section traceability; shooting :502 8.3(b) not in the body + no CARHA scope flag; DZC :524 "rides every major"; special_teams :1090 "the ejection" antecedent; :991 scope placement. 🔴 Outside the wave: neutral_zone :702 HC 6.2(e) mandatory limb missing (body too?); other 49(b) facts lines without the 32(a) count (switching :211; bc :73/:477/:523/:596; DTR :386/:413/:740).

- ✅ Reader-worded minors applied: rules_primer :483 PWHL 21.1 match route, NHL index → 21.1, HC "Biting"; uk KT9 reordered. Quote drift 69→68 (the HC flag cleared). 0 lost markers. The reader's wording was applied as written (KT9 grammar only).

- ✅ D10 fixes applied (defender :404, OZP :839, DZC :591 [the agent kept the price, "until the shot is through"], DTR :219, forechecking :750 new, block 14/14, 52(b)+66(b)). ⏳ facts-reviewer re-read dispatched.
- ✅ D4/D5 source-verifier: ~52 new/re-attributed quotes verified. Defects: uk :202 EIH 24.5 quote truncated with an added period (fix dispatched); the uk Sources trailer does not record 24.5 / JRoC §10 (fix dispatched). 🔴 → wave 6: "that game misconduct … 32(d) suspension" now reads as covering the injuring accidental high stick (DZC :529 and pre-existing forechecking :987, OZP :645, bc :103; 32(d) excludes the Accidental High Stick Rule; harsher; contradicts shooting :174/:968, rules_primer :417) — brief the claim. 🔴 uk :202/:589 "by reference" is an inference stated as fact (safer direction).
- 🟠 OWNER DECISION (29 Sep): commit wave 5, fix in wave 6 → the IIHF 56.1 stick-lift finding. The "as the shot or pass arrives" lift/press timing (bc :316/:318/:339/:353/:1237/:1253/:1282/:1324/:1790/KT10; DZC :591/:607/KT11) is cheaper than IIHF 56.1 ("obstructs … an opponent 'without possession of the puck' from … receiving a pass"; possession = last touch); HC 8.2 Interp. 1 and the USAH Casebook SoP allow it; NHL/PWHL/CARHA are unsettled. A minor penalty, no injury cost. The labels "restraint"/"interference" conflict (USAH 625 interference is body-only). The rules-verifier sketch is in the w5 record. WAVE 6 item #1, alongside the 101.1 seal.
- 🔴 → wave 6: OZP :868/:1105/:1106 and defender :895 "a double minor where it puts them into the boards" — check whether each also carries "a major stays a major" (the facts-agent flagged it; the earlier OZP re-read CLEARed :868).

- ✅ facts-reviewer re-read of the 5 lines: defender :404, OZP :839 and DTR :219 PASS. MAJOR DZC :591 "until the shot is through" dropped the "as the shot comes" start (reads as licensing a waiting pin); MAJOR forechecking :750 dropped the 32(d) suspension its body states. Reader-worded fixes being applied. 🔴 → wave 6: DTR §Angle body lacks "no checking division / bodying / mandatory on injury" (the facts line carries them); defender/OZP/DTR section bodies omit 32(d) while their siblings state it; "doubles, two of the three" wording ×3.
- ✅ uk_rules :202 quote closed before the period; :162 EIH 24.6 restored in full (head-coach limb; it was cheaper); Sources trailer records R&R 1.1/22.3/24.x and JRoC §10/U19. Quote drift 9→7. ⏳ Read dispatched.

- ✅ uk_rules :162/:202/trailer read: all three UPHELD, no Critical or Major. 🔴 Trailer nits (unvoiced, wave 6): add R&R 3.1/17.1 to the list; date the JRoC §10 reading ("the same day" ambiguity).

- ✅ **Second commit-gate run BLOCKED on C11**: the 11:22 DZC :591/:592 and forechecking :750 edits had no recorded read. A `facts-reviewer` then read the STAGED bytes. The staged strings matched the earlier reviewer's wording exactly: the fix agent reported "applied exactly as written, with no deviation".
  - **:591: Major.** The lift had lost the body's "stop at their stick", and every other stick-lift site in the file carries it.
  - **:592: Minor.** The injury tier was missing.
  - **:750: Minor.** "Bans you a game" dropped 32(d)'s further discipline.
  - **Chunk break:** ruled acceptable once :591 is fixed.
- **Applied verbatim by the coordinator as the reviewer's own exact strings** (no other change):
  - DZC :591 → `Priority: Body first, puck second — lift the most dangerous stick below their bottom hand and stop at their stick, or press its blade down as the shot comes and let go once the shot is through`
  - DZC new :593 → `Rule: Holding an opponent's stick so that it injures them is a major plus a game misconduct under Hockey Canada 8.1(b), and a major under CARHA 63(b) that ejects you (30(a))`
  - forechecking :750, tail → `a major ejects, with at least a one-game ban (30(a), 32(d)) (CARHA adult leagues only)`
  - Gates: `check_facts` 0, `check_links` 0, marker pairs 0 lost in both files. The DZC block now holds 13 facts, 7 of them coaching.
- 🔴 → wave 6: the forechecking §"Why this matters" block carries no CARHA 49(a)/(b). It is at 14 facts, so a restructure is needed. The body :759 "32(d) adds an automatic one-game suspension" could take "at least" for consistency.
- ✅ The third commit-gate run found the staged strings byte-exact against the Appendix B strings and C11 satisfied. It blocked only on C8: the forechecking row was in this record but not in the plan. It is now carried in `OPEN_ITEMS.md`.
