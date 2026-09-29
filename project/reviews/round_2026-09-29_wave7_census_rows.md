# Round 29 September 2026, wave 7: the wave-6 sibling censuses, USA Hockey 604 settled, and CARHA's goalie exception

**Scope.** 8 content files, one diagram module, one script:
- **604 Note 1:** `faceoffs`, `defensive_zone_coverage`.
- **CARHA 32(d)/32(b) accidental high stick:** `winger`, `playing_without_the_puck`; `passing_and_receiving` was checked and needed no change.
- **CARHA 49(b)/32(a):** `switching_positions` and its `forcing-them-outside` caption.
- **"Worst case an ejection":** `defender`.
- **CARHA "only exception" / 16(i):** `goaltender`; `forechecking_systems` was checked and needed no change.
- **The IIHF women's 101.1 "reached first" condition** in each of those files where missing.
- **`body_contact_and_battles`:** the permissive puck-intent Common Mistakes bullet.
- **Script:** `scripts/check_marker_pairs.py` was rewritten between waves 6 and 7 (see Tool).

**Method.** 7 file-disjoint authors, plus one read-only census. Three grouped final reads. A dedicated `rules-verifier` ruling on USA Hockey 604. Four late fixes, then a last read across them. The live plan log is Appendix A, verbatim.

## What the reads found

- **USA Hockey 604, settled for the corpus.**
  - The census raised a Rule-versus-Casebook tension: Casebook 604 Situation 2 is conjunctive.
  - A `rules-verifier` found the book's own tie-breaker, **Casebook Appendix VI, Standard of Play Situation 14**: *"if the one player were to drop their shoulder in order to make the contact… their focus is no longer on the puck… a penalty for body checking shall be assessed."*
  - Situation 15 (angling) keeps contact legal only without *"overt hip, shoulder or forearm action"*.
  - **Adopted: going for the puck never licenses leading with a hip or shoulder in a non-checking game.** There is no operative conflict and no disclosure.
  - Every Note 1 site from waves 6 and 7 is CORRECT under it. The one permissive site was `body_contact_and_battles` CM :1798, which said *"The contact is legal because the puck is what you are going for … Going for the puck offends none of those rules"*. It is fixed, and a corpus grep found no other copy.
- **The relayed Casebook quotation was truncated.** It omitted *"…by changing their skating lane, speed or legally established body position"*. An intermediate reader then called `faceoffs` :644 a coordinator-caused harsher defect. The corpus ruling reversed that verdict.
- **CARHA 32(d).** Two harsher sites attached the automatic suspension to an injuring accidental high stick:
  - `winger` :497;
  - `playing_without_the_puck` :648 and **KT11**, which is voiced alone.

  Both now except it and name 32(b)'s Chairman referral, or are scoped to the act.
- **CARHA "only exception": ruled on.** Rule 16 Note 1 lets the referee keep a team's only dressed goalkeeper in after any ejecting penalty. It never reaches a skater. `goaltender` :1141 said *"a major is an ejection wherever you find one"*, which is false for a lone goalie; it now reads "a skater's major".
- **"Worst case an ejection" was permissive.**
  - USA Hockey 404(b) suspends on any game misconduct, and CARHA 32(d) on a major.
  - `defender` :418, CM :799, KT2 and KT3 now add *"in some books a suspension that follows it"*.
- **Double minors.** In `switching_positions` the 49(b) line read as three alternative outcomes with no 32(a) count; it is fixed.
- **Renderer.** `md_to_speech` voices an isolated CARHA letter "(i)" as roman one, so a listener heard "Rule sixteen, clause one". `goaltender` now says "Note 1 to Rule 16". The general fix is carried.

## Coordinator errors recorded against the coordinator

- **The wave-7 brief called `faceoffs` :644 a defect.** HEAD quoted Note 1's inclusion limb. The repair led with the definition, and the final ruling found both forms correct. No harm, but the premise was an unverified census row.
- **A relayed Casebook quotation was truncated** (the census's), which drove a false "harsher" verdict for a while.

## Tool

`scripts/check_marker_pairs.py` now pairs spoken units the way `md_to_speech` sets `important`: per paragraph, per list item, per blockquote inner paragraph and per facts line. It gains `--base <rev>`, and it strips ⚠ and ** from the key. **Validated against 7bafbc8:** exactly 5/5/9 losses in rules_primer, shooting and special_teams, matching the wave-6 reviewers' hand-paired counts. That includes the six the old version missed. The CLAUDE.md scripts entry is updated.

## Gate

- **Build:** see "Gate block and repair". The covering build is 17:04:51–17:06:16. The first build, 14:59–15:00, predates the defender/bc gate fixes.
- **Build output:** all 11,597 internal links and anchors resolve.
- **Callout checks:** `--bare` is 0 and `--panels` is 53, unchanged from wave 6.
- **Mechanical gates:** `check_links`, `check_facts`, `check_absolutes` (after `build-diagrams`), `check_geometry`, `check_secrets` and `check_counts` all exit 0.
- **Markers:** `check_marker_pairs` (unit-level) finds 0 lost markers across all 8 content files.
- **Caption:** the new `forcing-them-outside` caption is in `dist` on `switching_positions`, and the old text appears nowhere in `dist`.

## Last read (after every final read and every fix)

`safety-reviewer`, on the working tree after the four late fixes and before the build. It rendered and read voiced each of:
- bc CM :1798 and facts :1105;
- DZC :494;
- switching facts :211;
- goaltender :1141.

**All four CLEAR.** Minors are carried: the unscoped CM :1798 opening is a coaching absolute that is harsh in a checking league (for `content-reviewer`), and "two of three penalties that eject" is compressed.

## Gate block and repair

The first gate run stalled. The retry BLOCKED on reviewer and build coverage, not on content:
- **C6.** `defender` had no `safety-reviewer`. A `safety-reviewer` then read the staged bytes and found no Critical or Major. It raised one recommended minor: facts :400 had dropped "only", so HC 7.3 Interp. 1's no-bump condition read as a list item. The fix was "only while neither bumps, pushes or shoves;". Optionally, body :418 now names "USA Hockey (404(b)) and CARHA (32(d)) among them". A quick safety read CLEARED both.
- **C4.** A `rules-verifier` read the STAGED bytes of winger :497/:687/:776/:790, PWP :648/KT11/:988, switching :211/:493/:571, DZC's 101.1 and 604 sites, and the switching caption. Nothing was contradicted or cheaper. The harsher or neutral incompletes are carried: switching :211 lacks 49(a) mandatory-on-injury; switching trailer :571 lacks 32(d)'s high-stick carve-out; PWP :988 cites "31(a) Note 1" where it is 31(c). The caption dropping 101.1's "competing for possession" trigger is acceptable, because the drawn situation meets it and riding a player without the puck has no licence anyway.
- **Gate suggestion taken.** bc CM :1798's new opening was a coaching absolute in a checking league. It now reads "and, where body checking is barred, never by leading with a hip or shoulder"; a safety read CLEARED it.
- **C10.** An unrecorded process rewrote diagrams.json/SVGs at 15:05 (byte-identical to the index) and rebuilt dist at 15:30/15:45. **The recorded build that covers the staged bytes:** `npm run build` with the absolute binary, 17:04:51–17:06:16, exit 0, through `check:links` (11,603 internal links; all resolve). The newest staged content file is defender at 17:03:15.
- **C8/D11.** D11 said "safety-reviewer on every file", which was false for defender until the C6 read. It is corrected below.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×3 (defender+goaltender; the 604 ruling; C4 on the staged winger/PWP/switching/DZC/caption), `safety-reviewer` ×7 | Every changed claim was read against `sources/`. |
| D2 | Rules travelling without exceptions | Yes | same, plus per-author layer tests | The 16(i) goalie route; the 32(d) high-stick exception; the Casebook tie-breaker. |
| D3 | Rule-set divergence | Yes | same | Suspension regimes in six books; 604 and HC 7.3. |
| D4 | Citation integrity | Yes | readers + `check_quote_drift`; new quotations verified verbatim (16(i) across a footer splice; 604 Note 1; 101.1) | No URL changed. |
| D5 | Provenance | Yes | readers | Trailers: goaltender 16(i), winger 32(d)/32(b), PWP 32(b), switching 62(b). |
| D6 | Negative existence claims | Yes | the "only exception" act-sweep; the 604 Situation sweep | Label and true-negative limits below. |
| D7 | The cardinal rule | Partly | readers | The CM :1798 opening is flagged as a coaching absolute and carried. |
| D8 | Numeric ownership | Not checked | — | No owned figure changed; `check_counts` matches. |
| D9 | The summary layer | Yes | every reader | KT11 (PWP), KT2/KT3 (defender) and the CM layers were repaired. |
| D10 | The key-facts layer | Yes | readers | Facts lines read voiced alone (switching :211, DZC :156/:512, defender :254/:400, bc :1105). |
| D11 | Reader safety | Yes | `safety-reviewer` on every file: winger+PWP, DZC+faceoffs+switching+caption, the last read (bc/DZC/switching/goaltender), defender (C6, added after the first gate), bc :1798 scope, defender :400/:418 | goaltender's safety coverage is the last read plus the rules-verifier. |
| D12 | Read-aloud integrity | Yes | every reader rendered; the (i) misvoicing was found this way | |
| D13 | Folklore | Not checked | — | Nothing new asserted. |
| D14 | Structure, style, cross-links | Partly | `check_links`, readers | |
| D15 | The rendered site | Partly, by declaration | coordinator: dist grep for the caption; `--bare` 0, `--panels` 53 | No browser pass: wave 7 moved no ⚠️ glyph and changed no structure. Every change is prose inside existing units, plus one caption string confirmed in `dist`. The wave-6 `site-reviewer` covered the rendering states on these pages. |

## Carried forward

- Every open 🔴 row in Appendix A is carried into `OPEN_ITEMS.md` under "OPEN ROWS CARRIED OUT OF WAVE 7".
- **Heads for wave 8:**
  - the "worst case an ejection" sibling census;
  - rules_primer KT8 :1098 "do not assume a stick foul needs contact", which is voiced alone and contradicts its own :438;
  - shooting facts :161;
  - 17 lines that quote only the 604(c) no-effort sentence, to re-cite as Standard of Play Situation 15;
  - the context-aware "(i)" renderer fix;
  - "reached first" versus "set on / stationary" wording, corpus-wide.

## What this method could not have found

- **Lexical sweeps.** A claim reworded without the searched strings (for example "costs you the next game", "take her out of the play") passes.
- **Officiating practice.** How CARHA Chairmen and USA Hockey officials actually apply these rules is not on disk.
- **Execution risk** for legal technique done badly.

## Appendix A — the live plan log, verbatim

**Wave 7 status (29 Sep):** `831adb2` was pushed on the owner's instruction. check_marker_pairs was fixed between waves (see below). ⏳ **Dispatched, file-disjoint:** faceoffs (604 Note 1 :644); DZC (604 :516/:749 + seal "first"); winger (:497 32(d) + seal); passing_and_receiving + playing_without_the_puck (the 32(d)/49(b) census); switching_positions + its .mjs caption (49(b), 32(d), 101.1, the :357 caption); defender ("worst case an ejection" suspensions, seal "first", CARHA 16(i)); goaltender + forechecking (the "only exception" / CARHA 16(i) ruling). Plus a READ-ONLY census (non-lexical boards instructions, captions, "carried high"/"by reference"/"your own shoulders", non-lexical 604 forms). Every brief carries the adopted rulings and forbids the "whether or not" gloss.
- ✅ W7 faceoffs: :644 now reads "defines an illegal check as intentional contact 'using overt hip, shoulder, forearm or torso action', including 'physically forcing … puck' (Rule 604 Note 1)". :1246 (the trailer, "to include") is correct. No other layer carries Note 1. 90→90 marked units. ⏳ Reader (batched).
- ✅ W7 passing + PWP. PWP :648 (harsher: "a net-front foul that hurts somebody ends… your next one" → scoped to interference) and KT11 :956 (voiced alone, harsher: "any major but an accidental high stick that injures nobody … 32(d)" → "any major for body contact with a goaltender") were fixed; :988 notes add 32(b). passing_and_receiving needed no change (it prices the ejection only, correctly). No 49(b) sites. 35→35, 23→23. 🔴 PWP :337 quote-drift flag (probably a wrong closest match; unverified). 🔴 passing_and_receiving never prices the CARHA 32(d)/32(b) suspension (under-statement by omission; the doc prices no suspensions).
- ✅ W7 winger. :497 32(d) now excepts the accidental high stick + 32(b) Chairman (harsher before); :776 note the same; CM :687 women's hold-ground gains "ice you reached first; arrive late and it is on you to skate around her"; :790 note fixed (it had said the boards limb "is not claimed anywhere above", which was false). 40→40.
- ✅ W7 DZC. 604: :516 now gives Note 1's definition (overt action) + inclusion; CM :749 drops the no-effort condition ("driving them off theirs is a push"). 101.1: facts :156 named only pinning when voiced alone and now has all three acts; "reached first" added at facts :512, body :494/:516, CM :749 (Key focus :24, KT3 and facts :507 left alone as general box-out coaching). 29→29. ⏳ Reader: check whether the :494 box-out addition is too long for the owner's readability rule, and whether :749 "is a push" is exact in both books.
- ✅ W7 switching_positions. H1 refuted as briefed (no site converts a major), but facts :211 read as three alternative outcomes with no 32(a) count → "a minor or an ejecting major (30(a)); into the boards a minor doubles, two of the three that eject (49(b), 32(a))" (300/300); CM :493 gains 32(a). The trailer :571 30(a) exception is now "an accidental high stick that causes no injury" (+62(b)). 101.1 "first" is carried by the body's stationary-player sentence. Caption forcing-them-outside: "in women's hockey IIHF 101.1 bars using the boards to push, pin or eliminate an opponent"; build-diagrams exit 0, and only that caption changed in diagrams.json. 17→17. check_absolutes is now 0 again.
- ✅ W7 "only exception" RULING (CARHA 16(i) Note 1, carha.txt :771-785, a footer splice at :777/:782): at the referee's discretion, a team's ONLY dressed goalkeeper may stay in after ANY ejecting penalty, with a teammate serving the time. It never reaches a skater. For a skater, the 30(a) Note's accidental-high-stick exception is the only one (the Note's own word "only"). No other non-ejecting route was found by the act sweep. goaltender :1141 now scopes "a skater's major is an ejection" + the 16(i) clause (it had been false for a lone goalie, on a page goalies read); the :1574 trailer quotes 16(i). forechecking: no change (skater-facing, exact). 🔴 goaltender :1035/:1049 "37(d) ejects" a goalie who joins a fight: 16(i) could keep a lone goalie in. NOT added (it would soften a "Never"), so this is an owner/reader call. 🔴 "in the whole book" overclaims at body_contact :103 and shooting :174 → scope "for a skater" (harsher for a goalie; low). 🔴 ~18 other "only exception"/"every CARHA major ejects" sites are skater-facing, so true for their reader (list in the agent report; low). 🔴 **RENDERER DEFECT (scripts/, between waves): md_to_speech voices "16(i)" as "sixteen, clause one", reading the roman numeral as a digit, so the listener hears the WRONG CLAUSE; this likely hits every roman sub-clause (HC 7.10(e)(ii), 16(i), IIHF 23.8(IV)…).**
- ✅ W7 defender. "Worst case an ejection" was CONFIRMED permissive (USAH 404(b) suspends on any GM; 608(b) is always major + GM; CARHA 32(d); USAH 405(c)/HC 4.10(a) match penalties suspend pending a hearing) → ", and in some books a suspension that follows it" at :418, CM :799, KT2 :875, KT3 :876 (placed away from the HC list, because HC 4.8(c) is not a mid-game automatic suspension). Facts :400 now has all three boards acts + the PWHL 52.1 grant; facts :254 "so get there first". The 16(i) ruling agrees with the goaltender agent's; defender is skater-facing, so no change. 39→39. 🔴 SIBLING CENSUS: "worst case is an ejection" as the ceiling in USAH/CARHA contexts: body_contact, winger, center, rules_primer, defending_the_rush.
- ✅ W7 FINAL READ winger + PWP (safety): **both CLEAR.** KT11 "any major for body contact with a goaltender" is exact (never a high stick; the match tier is covered by the same KT). Minor, and it bears on the ADOPTED READING corpus-wide: "ice you reached first" swaps 101.1's test ("A Player, who is STATIONARY, is entitled to that area … the opponent is obliged to skate around the stationary Player"; "hold their ground … established their position") for arrival order. A player who arrived first but is still moving is not stationary. The late-arriver half errs cautious and step-or-glide is priced next to it, so the hazard is small. 🔴 WAVE 8 ROW: consider "ice you are already set on" wherever "reached first" now stands (wave 6 + 7 files); the reader's sketch. Nits: the winger :790 note says "the one quoted", but :414 paraphrases; PWP "one (1)" is voiced "one (one)" (renderer).
- ✅ W7 FINAL READ DZC + faceoffs + switching + caption (safety): **all CLEAR.** 604 quotes are exact and no gloss was added. DZC :516/:749 now read STRICTER than the book (the walk-out of a puckless screener fails the 604(c) Note's legal-contact conditions anyway). 101.1 sites are accurate. Minors: DZC :494 is a ~1,100-char run-on in which the "exactly as in [Moving the screen]" pointer now attaches to the women's clause (sketch: close the sentence, then a separate women's sentence); switching facts :211 "two of the three that eject" has no noun voiced alone (→ "two of three ejecting penalties"), and it omits 49(a) mandatory-on-injury (pre-existing; body and CM carry it). ✅ Addendum on Casebook 604 Sit. 2 (usah_casebook.txt:11325-11330): **the census/relay quotation was TRUNCATED.** The sentence continues "…physically forces the opponent off the puck BY CHANGING THEIR SKATING LANE, SPEED OR LEGALLY ESTABLISHED BODY POSITION", and the front matter (:357-361) says the same. So the book's test includes no attempt to play the puck: quoting Note 1's standalone definition is a HALF-ANSWER in the HARSHER direction (verbatim, correctly attributed, so acceptable but imprecise). DZC :516/:749's conclusion is right (the walk-out changes "legally established body position"), but :516's "because Note 1 defines…" is the weaker reason → sketch: cite the Casebook test instead. ⚠️ **COORDINATOR ERROR: faceoffs :644's HEAD wording (the inclusion limb, which carries "no effort to legally play the puck") was CORRECT for two centres contesting the puck. My wave-7 brief called it a defect, and the repair made it harsher. Revert toward HEAD or add the Casebook test.** ✅ **CORPUS RULING (rules-verifier), which SUPERSEDES the addendum's "half-answer, harsher": USAH Casebook Appendix VI Standard of Play Sit. 14 (usah_casebook.txt:18612-18630): two players going for the puck may collide; "However, if the one player were to drop their shoulder in order to make the contact… their focus is no longer on the puck… a penalty for body checking shall be assessed."** Sit. 15 (angling): legal only "provided the Team B player does not use any overt hip, shoulder or forearm action". The Declaration's Preface bullet 2 and the Glossary ("the primary focus of a body check must be an attempt to gain possession of the puck", so puck-play cannot be what separates legal contact from a check) agree. Sit. 2/16 are conjunctive, but Sit. 14 shows that the overt shoulder IS the loss of puck focus. **No operative conflict and no disclosure needed. ADOPTED: going for the puck never licenses leading with a hip or shoulder in a non-checking game.** Per site: team_play :509/KT4, bc :483/:487/:1118, faceoffs :644 (so the coordinator's "error" flag above is WITHDRAWN; SoP Sit. 11 is the direct centres-on-a-draw ruling), DZC :516/:749 and fc :580 are all CORRECT. **PERMISSIVE: bc CM :1798 "Going for the puck offends none of those rules"** (after quoting Note 1; also permissive against HC 7.3(a) "bumps"). Optional: bc facts :1105 ", even going for the puck". 🔴 WAVE 8: 17 lines quote only the 604(c) no-effort sentence (the permissive half heard alone); the angling facts (fc :246, DTR :597 at 304 chars, DTR :236/:612/:891) should cite SoP Sit. 15 (their instructions are conservative); defender :416's tail needs a layer test. Also unverified: faceoffs' IIHF-men's "skate through him … contact for the puck" claim and its 56 exposure.
- ✅ W7 FINAL READ defender + goaltender (rules-verifier): **both CLEAR.** "In some books a suspension" is true at the ejection tier (automatic in USAH 404(b)/CARHA 32(d); HC conditional 4.8(c)/4.10(a); NHL/IIHF/PWHL discretionary or accumulation). At the match tier a suspension follows in at least five books, so "some" undersells it there (harsher-safe framing, not blocking). 16(i) Note 1 reading and trailer confirmed verbatim (footer splice). Nits: defender facts :400 "while neither bumps…" floats over all three books when voiced; goaltender :1035 facts / CM on leaving the net price a lone goalie's own CARHA ejection without 16(i) (harsher, optional). 🔴 **RENDERER, refined: CARHA's "(i)" is a LETTER (the ninth clause), not roman one, so a fix must be context-aware (a single "(i)" after "(h)" is a letter; HC "(ii)" is roman). Chunk 145 voices "Rule sixteen, clause one Note one", which sends the listener to 16(a).** Workaround for any single site: cite "Rule 16, Note 1".
- ✅ W7 last fixes: DZC :494 is now three sentences, with the pointer back on the no-checking half and the women's clause on its own (29→29). goaltender :1141 is now "Note 1 to Rule 16" (Rule 16 has only one "(Note 1)"; voiced "Note one to Rule sixteen"; 110→110). 🔴 RENDERER detail for wave 8: md_to_speech already reads "(i)" as a LETTER only when "(h)" or "(j)" is within 90 chars, so every isolated CARHA/HC letter-(i) citation is misread as roman one. Sweep the spoken layers for "(i)" citations.
- ✅ W7 bc CM :1798 fixed. It had TWO permissive statements, both now fixed: the opening "The contact is legal because the puck is what you are going for" → "win it by holding your skating lane and your position — never by leading with a hip or shoulder"; the closing "Going for the puck offends none" + "drop a shoulder … USA Hockey's Casebook calls it a body check even though you were going for the puck". The agent used "holding your lane and position" in place of the sketch's "leaning", because HC 7.3(a) penalises an intentional push (a new permissive claim avoided). Facts :1105 gains ", even going for the puck" (196/200). 142→142 units. Coordinator grep: no other "legal because the puck" / "offends none" site in content/. ✅ W7 switching :211: "two of three penalties that eject" (298/300); the 49(a) injury limb does not fit without eviction or overstatement.
- ✅ W7 READ-ONLY CENSUS (scratch: w7_census/). **Row B captions: clean** (0 "seal unavailable", 0 Note 1 "no effort"-only, 0 CARHA 32(d) high-stick; boards-limb captions correct). **Row A** (non-lexical boards verbs; 123 women+wall units read): no unit tells a women's reader to finish/squeeze/ride her into the boards. Mild: A1 body_contact facts :415 seal voiced alone without "first"/step-or-glide (the body :428 has both); A2 forechecking :170 "A hit that separates the carrier from the puck is a bonus" unscoped until :301 (permissive for women/non-check readers); A3 OZP facts :834 "where your book allows it seal the wall" (harsher; the seal is available everywhere). **Row C** ("carried high"; "by reference" = 0 corpus-wide): C1 shooting facts :161 "a raised stick can be high-sticking with no contact at all … 60.1" (harsher: 60.1 is a definition, 60.2 needs contact); **C2 rules_primer KT8 :1098 "do not assume a stick foul needs contact" (harsher, VOICED ALONE, contradicts its own :438)**; C3 rules_primer CM :989 "the answer flips" (mild). **Row D:** all 12 explicit Note 1 citations carry the overt definition. ⚠️⚠️ **RULE-vs-CASEBOOK TENSION: USAH Casebook 604 Sit. 2 makes the body-check test three conditions TOGETHER ("initiates any physical contact with their hips, shoulders or arms, AND makes no attempt to play the puck AND instead physically forces the opponent off the puck"), which is looser than Note 1 read alone. The wave-6/7 604 repairs quote Note 1 verbatim; whether that is a half-answer needs a ruling BEFORE any wave adds Note 1 anywhere else.** Relayed to the DZC/faceoffs final reader. 13 units quote only the 604(c) Note's no-effort sentence (D1 defender facts :245, D2 forechecking facts :246, D3 DTR facts :597 are mild-permissive IF Note 1 governs, and have Casebook support if not).
- ✅ Coordinator census of "injures nobody" + "32(d)" across content/: the other sites (rules_primer :417/:945/:1013, forechecking :576/:760, OZP :588) already scope 32(d) away from the accidental high stick or to a non-stick major. No further site.

