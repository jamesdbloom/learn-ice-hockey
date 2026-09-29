# Review record — 29 September 2026: wave 4, CARHA majors stated without their ejection

**Written last, after the final `content/` edit** (`goaltender.md`, 06:36, the last post-gate-block repair) and after the final build that
covers them (`site/dist` 06:38, `EXIT 0` through `check:links`; all gates re-run after it, all 0; `--bare` 0; `--panels` 54; no marker lost in any of the 17 files). **This record was first written at 06:23 and the commit gate BLOCKED it on C6** (see *Gate block and
repair* below). It has been revised after the repairs.

## What this commit contains

**17 content files.** One wave, driven by the read-only census in
[`carha_30a_census_2026-09-28.md`](carha_30a_census_2026-09-28.md): about 40 voiced units, 17 of them voiced
alone, priced a CARHA major without saying that **CARHA Rule 30(a)** makes it an ejection. That understates the
tariff, which is permissive and penalty-bearing, so it was in lane.

One agent owned each file, with disjoint ownership; one agent held the five single-site files:
- `defending_the_rush`, `defender`, `body_contact_and_battles`, `playing_without_the_puck`, `goaltender`
- `offensive_zone_play`, `puck_handling`, `passing_and_receiving`, `switching_positions`, `winger`
- `forechecking_systems`, `rules_primer`
- the five single sites: `center`, `team_play_and_culture`, `on_ice_communication`, `game_management`,
  `risk_management`

Also: the plan. **`site/package-lock.json` is NOT in this commit.**

**The rule text.** Every agent and every reader verified it in the flattened `sources/carha.txt`:
- **30(a):** a major is "Major penalty plus Game Misconduct". Its Note names the accidental high stick as the only
  exception.
- **The 62(b) Note** restores the game misconduct where an accidental high stick injures.
- **32(d):** an automatic suspension of at least one game, with "further discipline" possible.
- **The majors themselves:**
  - discretionary majors under 49(a), 52(a), 63(a), 66(b), 80(a) and 86(a);
  - majors mandatory on injury under 49(a), 52(a), 56(b), 63(b), 64(b), 66(e) and 79(a);
  - 49(b): a double minor when the contact puts a player into the boards, counting as two penalties toward the
    32(a) three-penalty ejection.
- **Found by a reader:** **Rule 16(i) Note 1** lets a referee keep a team's only dressed goalkeeper on the ice
  after an ejecting penalty. This makes "the only exception" a false exclusivity in the harsher direction. It is now
  stated once, in `rules_primer`.

**The 32(d) suspension decision is still the owner's.** The default applied throughout is that the suspension is
added only where a unit already prices the full tariff.

## How it was reviewed

- **Every file was read by a `rules-verifier` or `safety-reviewer` that did not write it** (eight readers).
  Findings went back to the authors. Most final repairs were the reader's own sketch or a stricter version of it.
- **The census under-counted.** The agents found units it had missed in `playing_without_the_puck`, `winger`,
  `goaltender` (a chunk split: the major ends chunk 144 and the 30(a) sentence opens chunk 145),
  `offensive_zone_play` (×2), `rules_primer` (79(a), plus the unscoped high-stick exception at seven sites),
  `body_contact_and_battles` (:1227), `defender` (×3) and `game_management` (×2).
- **What the readers found in the NEW text.** Every finding was repaired, and all but the last were permissive:
  - ejections attached only to the injury major (`game_management` :857, `defending_the_rush` :386/:740,
    `defender` :251);
  - "every major" or "any CARHA major" with no high-stick exception (`offensive_zone_play` :620/:588,
    `playing_without_the_puck` :642, `body_contact_and_battles` :595);
  - a truncated high-stick exception that let an injuring accidental high stick escape (`offensive_zone_play`
    :588, `rules_primer` :723);
  - the 66(e) mandatory limb missing from a Key Takeaway (`playing_without_the_puck` KT7);
  - a facts line reading "Holding is a minor everywhere" once CARHA had moved off it (`puck_handling` :439);
  - broken antecedents aloud (`team_play_and_culture`, `on_ice_communication`, `risk_management`, `switching`
    :211);
  - a lost scope tag;
  - **the `defender` pin "until help arrives" with no time limit** — USA Hockey 632(b) and Casebook 632 Sit. 6 make
    three seconds a minor, pressured or not. This was a Major. The line now reads "for a second or two… three
    seconds is a minor under USA Hockey, pressured or not", matching `body_contact_and_battles` §7.
- **`defender` :289 was repaired twice after readers disagreed.** A safety reader ruled "a minor in all six books"
  true under either reading of CARHA 63(a). The D13 reader ruled that it settles, in the lenient direction, a
  question the body calls open. The line is now split in two, and the CARHA line reads "at least a minor… 63(a) may
  allow a major (its text is unclear)… either major ejects you (30(a))". This final text was **not re-read by a
  further reader**; the commit gate re-derives it.
- **Other repairs applied after the last read**, each the reader's own sketch or stricter:
  - `defender` "three seconds";
  - `switching` :211;
  - the single-site antecedents;
  - `offensive_zone_play` :588/:645;
  - `rules_primer` :723/:417/:945 and KT;
  - `body_contact` :73/:420/:595/:1227;
  - `puck_handling` :439;
  - `playing_without_the_puck` KT7/:642.

## Gate block and repair (C6)

The first commit gate (06:25) **BLOCKED on C6**: only `defender` had a `safety-reviewer`, and every hunk prices a
penalty. The gate re-derived every post-read repair from source and found them correct. It also found one
**permissive** defect the wave had left at sibling sites: **the unscoped accidental-high-stick exception** ("30(a)
rules any major but an accidental high stick off"), which lets an injuring accidental high stick escape the 62(b)
Note.

**Repairs:**
- the exception was scoped to "an accidental high stick that injures nobody", or the 62(b) Note limb was added
  after a verbatim 30(a) quotation, at:
  - `defender` :252/:295;
  - `playing_without_the_puck` :648/:956/:988 (32(d) is now quoted verbatim, "the Accidental High Stick Rule",
    because the book does not say whether its carve-out covers an injuring one);
  - `winger` :497/:776;
  - `forechecking_systems` :574/:757/:984;
  - `body_contact_and_battles` :103/:1522;
  - `passing_and_receiving` :792/:872;
- `rules_primer`: "the one exception" became "for a skater" at 6 sites, and 16(i) Note 1 is named in KT4. HC 4.13(b) was
  checked: it has no equivalent.
- `risk_management` :303: antecedent.

**Then five `safety-reviewer`s read all 17 files** (working tree): **0 Critical, 0 Major.** Their
permissive-direction minors were repaired, each with the reader's own sketch:
- `team_play_and_culture` :513 and `on_ice_communication` :278: the 49(a) mandatory-on-injury tier;
- `forechecking_systems` :757: "close to the rule" became "the rule for any deliberate contact";
- `goaltender` :1141/:1574: the 62(b) clawback;
- `switching_positions` CM :493: the 49(a) mandatory tier.

Their harsher-direction minors were accepted and filed:
- 32(d) stretched to an injuring accidental high stick;
- "any major there" in goalie-interference contexts;
- "52(b) in a goalkeeper's crease" heard as any crease charge.

One permissive minor was deferred: the `defender` pin tariff scoped to USA Hockey only. CARHA 74(b) and HC 10.1(a)(i)
price a deliberate hold for a stoppage with no time threshold. The body's "never hold it for a whistle" covers the
act, and the facts line has no room. It is filed.

The earlier appendix line "All wave-4 content is final (06:0x)" was superseded by these repairs.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | ✅ | a `rules-verifier` or `safety-reviewer` per file | every clause against `carha.txt`; USAH 632/Casebook, HC 8.1, NHL/IIHF/PWHL 54/55/60 where touched |
| D2 | Rules travelling without exceptions | ✅ | same | the accidental-high-stick exception; 62(b) Note; 16(i) Note 1 |
| D3 | Rule-set divergence | ✅ | same | CARHA vs the other five books kept distinct in every repaired unit |
| D4 | Citation integrity | ⚪ out of scope | — | no URL added or removed |
| D5 | Provenance | ⚪ out of scope | — | local rulebook text only |
| D6 | Negative existence claims | ✅ partial | readers | "no other exception to 30(a)" swept by pattern and by concept ("remain in the game"), which found 16(i) |
| D7 | The cardinal rule | ✅ | D13 reader | the new pin technique is craft consistent with its owner |
| D8 | Numeric ownership | ✅ | readers | "three seconds" vs "more than three"; "at least one game"; the "Three" → "Some" count |
| D9 | The summary layer | ✅ | readers | KTs and CMs voiced alone were layer-tested per claim |
| D10 | The key-facts layer | ✅ | readers; `check_facts` | caps respected; the `defender` block went 9 → 10 (≤ 14) |
| D11 | Reader safety | ✅ | **five `safety-reviewer`s covering all 17 files** (after the gate block), plus the earlier `defender` safety read | 0 Critical, 0 Major across all 17; permissive minors repaired (listed below); harsher minors accepted |
| D12 | Read-aloud integrity | ✅ | authors and readers via `md_to_speech` | antecedent and parse defects found and repaired; renderer defects filed ("16(i)" → "clause one"; "one (1)" → "one one"; "/" → "or") |
| D13 | Folklore | ✅ | `content-reviewer` (103 new units) | no new folklore; 1 D8/D2 Major (`defender` :289, repaired); 7 minors deferred to the plan |
| D14 | Structure, style, cross-links | ✅ partial | `check_links` | the short vs long CARHA scope tag is inconsistent (7 vs 148 sites), filed |
| D15 | The rendered site | ✅ | coordinator (`--bare`, `--panels`); **`site-reviewer`** | see below |

## Site review (D15 / C10)

The first attempt was blocked by the Chrome extension ("Could not verify this site's safety category"). It produced
only a structural HTML pass, which was clean. **The retry loaded 127.0.0.1 and passed**, served from the 05:52
`site/dist`:
- five pages (`defender`, `puck_handling`, `body_contact_and_battles`, `offensive_zone_play`, `rules_primer`);
- each at 1440px and a real 400px iframe viewport, in light and dark;
- every new facts line renders as a `dl.facts` row;
- no body overflow and no stray markup;
- console clean, no off-origin requests;
- the `rules_primer` comparison table scrolls inside its container and the page body does not.

One unconfirmed minor predates the wave: faint glyph fragments in the gutter when the table is scrolled at 400px
in dark mode, probably a compositor artifact of the nested iframe. It is filed.

## Mechanical state at commit time

The final `npm run build` used the absolute binary, ran after the last content edit and finished `EXIT 0` through
`check:links` (11,594 links resolve). After it, run without pipes:
- `check_links`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check_counts --update`
  all exit 0;
- `check_callout_flow --bare`: **0**;
- `--panels`: **54** (unchanged);
- `check_marker_pairs` on all 17 files: **0 paragraphs lost a marker**.

## Method lessons

1. **A census under-counts; brief the claim, not the rows.** Every agent that swept its own file found sites the
   census missed.
2. **"Every major" is the new permissive shape once an exception exists.** Repairs that stated the rule as
   universal kept running into the accidental-high-stick exception and its 62(b) Note.
3. **A flat "the only exception" needs a concept search, not a pattern search.** 16(i) Note 1 appears under
   suspended-player rules and never uses the word "exception".
4. **When two readers disagree, keep the body's uncertainty in the facts line** rather than choosing a side.

## What this method could not have found

- A CARHA major priced without the word "CARHA" or "major" (e.g. "five minutes", "the adult book") beyond each
  agent's own sweep.
- Sibling units that still carry the unqualified "accidental high stick" exception, or "the only exception",
  outside these files. Both are filed as corpus sweeps.
- Newer CARHA editions or league by-laws that change 30(a) or 32(d).
- Audio by ear.

---

## Appendix A — the live plan section for this round, moved here verbatim on closing

## 🔴 LIVE — wave 4, dispatched 29 September 2026 after `6644da8` was pushed

**Wave 4 is the CARHA 30(a) ejection fixes** from [`carha_30a_census_2026-09-28.md`](../reviews/carha_30a_census_2026-09-28.md).
**Brief:** `w4_carha.md` (session scratchpad).
**One agent per file, disjoint ownership, 13 agents:** `defending_the_rush` · `defender` (+ the :192 pin-with-body row) ·
`body_contact_and_battles` · `playing_without_the_puck` · `goaltender` · `offensive_zone_play` · `puck_handling` ·
`passing_and_receiving` · `switching_positions` · `winger` · `forechecking_systems` · `rules_primer` · one agent for
`center` + `team_play_and_culture` + `on_ice_communication` + `game_management` + `risk_management`.
**32(d) suspension:** added only where a unit already prices the full tariff (the owner decision is pending).
**Every return gets an independent reader before commit.** Deploy of `6644da8` is being watched.

**Returns:**
- `passing_and_receiving`: KT16 now carries the 62(b) Note ejection ("unless the contact was accidental and injured nobody"); the only miss in the file. Awaiting a reader.
  🔴 Row: does 32(d)'s "other than the Accidental High Stick Rule" exempt an INJURING accidental high stick from the suspension, when the 62(b) Note still ejects? The book does not reconcile these (rules-verifier or the owner).

- `switching_positions`: the ejection was added at facts :211, body :224 and CM :493. It also added **49(b) double minor + the 32(a) three-penalty count** (boards-relevant; permissive, in lane) and 32(d) in the body. `forechecking_systems`: body :236 "either major ejects… at least a one-game suspension", CM :901. Both under review (together with `passing`).
  🔴 Row: 49(b) is likely missing at sibling 49(a) sites that concern boards contact (`defender`, `body_contact`, `defending_the_rush`…), so do a layer test after wave 4.
  🔴 Row: `forechecking` KT8 names only CARHA 52(b) for goalie contact, omitting 66's minor-or-discretionary-major (not strictly permissive).

- `playing_without_the_puck`: KT7 (66(a)'s GM restored, with 30(a)/32(d)), body :642, **CM :883, a site the census missed**. `winger`: facts :463, body :477, **body :479, a site the census missed**, CM :686. Both under review.
  🔴 Row (winger): NHL/IIHF/PWHL 69.2 "a minor or a major" does not say whether that major carries a GM (unchecked).

- `goaltender`: facts :1124, CM :1462, **body :1141, found because chunk 144 priced the major and the 30(a) sentence fell in chunk 145** (a chunk-split miss the census could not see). Queued for a reader.

- `offensive_zone_play`: facts :587 (**a site the census missed**, 66(e) bare), facts :620, body :929, CM :1097 (the injury limb also added). Under review with `goaltender`. 🔴 Row: CARHA 63(a)/80/86 discretionary majors at the net front are not mentioned in OZP (a gap, not a defect).

- Singles (`center`, `team_play_and_culture`, `on_ice_communication`, `game_management` ×3, `risk_management`): 7 edits, including **game_management :857, which hung the ejection on injury only (permissive)**, and :851, both missed by the census. Under review. ⚠️ `check_facts` flags `defending_the_rush:212` at 301 chars, an in-flight agent's file; re-check it after that agent finishes.

- `rules_primer`: the ejection at 5 sites plus 79(a), which the census missed; 32(d) where the full tariff is priced; **the CARHA exception narrowed at 7 sites to "an accidental high stick that injures nobody"** (62(b) Note). Under review.
  🔴 Row: the unqualified "accidental high stick" exception to 30(a) very probably recurs in sibling documents; sweep after wave 4 (permissive: an injuring accidental high stick still ejects).

- `puck_handling`: facts :439 (299/300) and :441 (with 32(d)), CM :953, KT10 :1037; the discretionary/mandatory split kept. Queued for a reader. 🔴 Row: body :510 "five books were read" omits CARHA while CM :951/KT :1032 cite CARHA 63(a) (an inconsistency).

- `defending_the_rush`: 9 units (4 facts incl. :741 Inj-only restored, 5 body; 32(d) at :394/:758). Under review with `puck_handling`. 🔴 Row: PWHL 42.1 "minor or major" GM question (unchecked).

- `defender`: 5 facts lines (incl. :192, the pin with skate/stick) plus 6 body sites (3 the census missed: :299, :462, :782); :289 "the latter adding" implied CARHA's major carries no GM (permissive). Under safety review. 🔴 Row: the renderer voices a slash "55.3/55.4" as "or" when it means "and" (corpus-wide). 🔴 Row: :252 now repeats :251's ejection (merge candidate).

- ✅ `winger` read: all CONFIRMED; ready. `playing_without_the_puck` read: KT7 missing the 66(e) mandatory-on-injury limb (permissive); :642 "any CARHA major" overstates; both sent back.
  🔴 Row: the renderer voices "one (1) game suspension" as "one (one)".
  🔴 Row: `pwtp` CM :883 "52(b) is written about the crease" is half true (52(b) has an injury limb anywhere; winger :686 says so).

- ✅ `passing` KT16 and ✅ `forechecking` (:236 "either" → "any" optional; not applied) read: CONFIRMED; ready. `switching` read: tariffs CONFIRMED; facts :211 pronoun "they hit the boards" points at the offender; sent back (plus an optional scope/limb restore).

- Singles read: all 7 CONFIRMED; **3 insertions broke an antecedent aloud** (team_play :513 "it", on_ice :278 "That rule", risk_management :303 "then takes"); game_management :857 32(d) reads as the whole cost. Sent back. ✅ `center` and `game_management` :851/:853 ready. 🔴 Row: `game_management` "49(b) a double minor at the floor" lacks the 32(a) two-penalty count.

- ✅ `playing_without_the_puck` follow-up: KT7 66(e) clause ("compulsory if the forechecker is hurt") and :642 "a CARHA major" (the reader's sketches); ready.

- `body_contact_and_battles`: 13 units (facts :73, :420, :595, :596, **:1227, which the census missed**; body :408, :438 (+52(b) crease rung, permissive), :553, :584, :611, :1123; CM :1792, :1804). Under review. **All 13 wave-4 authors have returned.**

- ✅ `switching` facts :211: "if the opponent hits the boards"; the "stands in front of an opponent" limb restored; the line opens with the instruction (293/300); ready (the reader's points).

- ✅ `goaltender` read: all 3 CONFIRMED; ready ("ejects the player" antecedent nit, optional, not applied). `offensive_zone_play` read: **:620 "every major an ejection" is false** (the accidental high stick, and it contradicts its own :486); :1098 "that major" is ambiguous; :587 "Three" reads as complete (49(a) and 54(b) are also mandatory); 32(d) absent from the facts layer. Sent back.

- ✅ Singles follow-up (`team_play`, `on_ice`, `risk_management`, `game_management` :857): the antecedents fixed and 32(d) "at least"; all five singles ready. `rules_primer` read: no blocker; **:723 still carries the unnarrowed 30(a) exception (permissive)**; the :417/:945 32(d) scope reads as covering an injuring accidental high stick. Sent back. **New rule found: CARHA 16(i) Note 1** lets a lone dressed goalie stay on after an ejecting penalty at the referee's discretion, so "the only exception" is a false exclusivity (harsher). 🔴 Row: check other "only exception" sites corpus-wide.

- ✅ `rules_primer` follow-up: :723 62(b) limb + the 16(i) Note 1 goalie sentence; :417/:945 32(d) scoped "for every major other than an accidental high stick"; KT split as HC "always" / CARHA "almost always" (the author corrected the coordinator's sketch, which would have mis-scoped HC). Ready. 🔴 Row (scripts, coordinator): `md_to_speech` voices CARHA "16(i)" as "sixteen, clause one", treating the letter as a Roman numeral; HC uses Roman numerals, CARHA uses letters, so the rule is book-dependent.

- ✅ `offensive_zone_play` follow-ups: "either major" at 5 sites (1 the reader missed, :868); :587 "Some"; :588 "an accidental high stick that injures nobody" + 32(d); :645 the 62(b) Note limb. Ready. (:588's 32(d) arguably over-reaches to an injuring accidental high stick, which is harsher: accepted.)

- DTR + `puck_handling` read: no blocker. **DTR :386/:740 read as ejection-on-injury only (permissive)**; `puck_handling` :439 lost the USAH tier and the CARHA scope. Both sent back. 🔴 Row: the "CARHA adult leagues only" short tag (7 sites) vs the long tag (148): consistency.

- `defender` safety read: **Major, new text: the pin "until help arrives" is open-ended, but USAH 632(b)/Sit. 6 make >3 s a minor**; :289 stick-holding major unsupported; :251 ejection-on-injury reading. Sent back. `body_contact` read: 13 CONFIRMED; :595 "every major" overstated; :73/:1227 audio; :420 "only" drops "shadow". Sent back. 🔴 Row: `defender` :192/193 "not the player" is backed only by the IIHF women's rule; add USAH 622 Note (pinning = holding, any category).

- ✅ DTR follow-up: :386/:740 "either major ejects you under 30(a)"; :219 "mandatory on injury" added (298/300). Ready. ⚠️ The safety classifier was unavailable for this agent run; the coordinator verified that the tree touches only wave-4 content files and that the DTR diff is 9 lines as reported; check_facts is 0.

- ✅ `puck_handling` :439 "Holding starts as a minor everywhere and stays one in NHL and IIHF 54 and PWHL 55"; the USAH facemask tier restored; CARHA carried at :441; ready. ✅ `body_contact` facts fixes: :595 "to it" + 32(d); :73 "a major ejects you" (the author refused "that major", which would have re-created the injury-only defect); :420 "still"; :1227 "attacking player" restored (52(b) paraphrased; wording matches carha.txt:2559-2562 as quoted by two readers). Ready. **Only `defender` is outstanding.**

- ✅ `defender` "three seconds" (the reader's point); every wave-4 file was ready at 01:16. The build (01:18) and all gates are clean; no marker changed; panels 54.
- ⚠️ **Site check (D15/C10) blocked:** the Chrome extension refused 127.0.0.1 ("Could not verify this site's safety category"). A structural pass of the built HTML on 5 pages is clean. The owner is re-enabling the plugin; retry before the gate.
- **D13 wave 4: 103 new units, no new folklore; the pin technique is CLEAR. But one Major (D8/D2):** `defender` facts :289 "Holding one [a stick] is a minor in all six books" settles in the LENIENT direction a question body :299 calls open (does CARHA 63(a)'s "holding the stick… minor… recorded" cap the discretionary major?). ⚠️ The safety reader had judged this wording "true under either reading"; the two readers disagree. Resolve with the hedge, e.g. "a minor in five books and at least a minor in CARHA (whether 63(a) allows a major for it is unclear)", then re-gate. Minors (deferred unless cheap):
  - `defender` :192 tariff inside a Technique: line;
  - `defender` :203 pin trigger missing, and "penalty shot in your own crease" should be "when the puck is";
  - `switching` :211 lost its scope tag;
  - `body_contact` :1123 CARHA sentence in the checking-rules paragraph;
  - `offensive_zone_play` :588 32(d) over-reaches (accepted, harsher);
  - `rules_primer` :945 "the two books adult rec most often runs on";
  - `defending_the_rush` :219 "the adult rec book".
- ⛔ The session limit was hit at ~01:25 (it reset at 02:30); work resumed 05:50.

- ✅ `defender` :289 split into two Rule lines (five books + HC 8.1(b); CARHA "at least a minor, 63(a) may allow a major (unclear), 63(b)…, either major ejects you (30(a))"); :203 "when the puck is in your own crease". The block has 10 facts. **All wave-4 content is final (06:0x).** 🔴 Row: `defender` CARHA line :290 now partly repeats :295 (merge candidate once the owner rules on 32(d)).


## Appendix B — the gate-block plan section, moved here verbatim on closing

## 🔴 LIVE — wave-4 gate BLOCK (29 September 2026, ~06:25)

The wave-4 commit gate BLOCKED on **C6: a `safety-reviewer` read only 1 of the 17 files** (every hunk prices a
penalty). It re-derived every post-read repair from source and found them correct. Before the safety reads, the
gate's permissive finding is being fixed:
- the unscoped "accidental high stick" exception to 30(a), which lets an injuring one escape the 62(b) Note;
- sites: `defender` :252/:295, `pwtp` :648/:956, `winger` :497/:776, `forechecking` :574/:757/:984,
  `body_contact` :103/:1522, `passing` :792;
- plus `rules_primer` "only exception" vs 16(i), and the `risk_management` :303 antecedent.
Six fix agents are dispatched (disjoint files). **Then: safety readers on all 17 files, a rebuild, a re-gate, and
the record rewritten last** (the record's "06:0x" slip to be corrected).

- ✅ HS scope `body_contact` :103, :1522 (62(b) Note limb); the sweep found no other unscoped site.

- ✅ HS scope `defender` :252, :295 ("bar an accidental high stick that injures nobody (62(b))"). ⚠️ The index is now behind the tree for staged files: re-stage everything by name after the fixes and safety reads, and check `git diff --name-only`.

- ✅ HS scope `winger` :497/:776 and `forechecking` :574/:757/:984 (trailer read-lists updated for 62(b)).

- ✅ `rules_primer` "for a skater" at 6 sites + the 16(i) goalkeeper limb named once in KT4 (HC 4.13(b) checked: no equivalent); `risk_management` :303 "the discretionary major for a charge under 52(a) ejects you too, even when nobody is hurt". Waiting on `pwtp` + `passing`.

- ✅ HS scope `pwtp` :648 (30(a) scoped; 32(d) now quoted verbatim "the Accidental High Stick Rule"), KT11, trailer :988; `passing` :792 and trailer :872. **All gate-fix edits done.** Five `safety-reviewer`s dispatched across all 17 files (C6), reading the working tree.

- ✅ Safety E (5 singles): all 7 units CLEAR; a pre-existing gap became permissive with the new clause (team_play :513 / on_ice :278 49(a) omit the mandatory-on-injury tier); sent to the author.

- ✅ Safety B (DTR, OZP, forechecking): all CLEAR, no Major. Minors: 32(d) attached to an injuring accidental high stick (harsher, accepted); an unscoped "any major" at DTR chunk 034 and forechecking chunk 049 (harsher, untouched by the wave; 🔴 row); scope-label inconsistency; forechecking :757 "close to the rule" (permissive, sent to the author).

- ✅ `team_play` :513 and `on_ice` :278: the 49(a) mandatory-on-injury limb added ("either way the major also ejects you"); the reader's sketch.

- ✅ Safety C (rules_primer, passing, puck_handling): all CLEAR, no Major. Minors deferred: `rules_primer` KT9 :1163 "any major there" (harsher); `puck_handling` :439 names no CARHA group (:441 adjacent carries it); 32(d) omitted at several summary carriers (the owner decision on propagation is pending).

- ✅ Safety D (goaltender, winger, pwtp, switching): no Major. Permissive minors sent: `goaltender` :1141 the 62(b) clawback; `switching` CM :493 the 49(a) mandatory tier. Harsher minors accepted: 32(d) stretched to an injuring accidental high stick (pwtp KT11, winger :497); winger :463 "agrees".

- ✅ `forechecking` :757 "it is the rule for any deliberate contact". Noted: the 66 major ends chunk 087 and its 30(a) ejection opens 088, the very next sentence; accepted.

- ✅ `switching` CM :493 "is mandatory if intentional contact injures (Rules 30(a) and 49(a))" (the reader's sketch, "intentional" per the source).

- ✅ `goaltender` :1141 and trailer :1574: the 62(b) Note clawback added (the reader's sketch). Waiting only on safety A (`defender`, `body_contact`).

- ✅ Safety A (defender, body_contact): no Major; the pin technique is safer than HEAD. Minors deferred: 🔴 the pin tariff is scoped to USAH only (CARHA 74(b)/HC 10.1(a)(i) price a deliberate hold with no time threshold; body :203 "never hold it for a whistle" covers the act); 32(d) on an injuring accidental high stick (harsher); :595 "52(b) in a goalkeeper's crease" (harsher). **C6 met: all 17 files had a safety read. Rebuild started.**

