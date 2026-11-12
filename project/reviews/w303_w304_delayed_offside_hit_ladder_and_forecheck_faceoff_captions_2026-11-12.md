# W303–W304: the delayed-offside hit priced in full in rules_primer, and two more long captions trimmed (12 November 2026)

**Files:**
- **W303:**
  - content/foundation/rules_primer.md (:200, :204, new :206 split, :212, KT1)
  - site/src/diagrams/risk_management.mjs (comments only)
- **W304:**
  - content/off-the-ice/how_to_watch_hockey.md
  - content/positions/center.md
  - content/positions/winger.md
  - content/systems/game_management.md
  - site/src/diagrams/forechecking_systems.mjs
  - site/src/diagrams/faceoffs.mjs
- **Build product:** site/src/data/diagrams.json. Against HEAD, it differs in exactly two captions: forecheck-212 and faceoff-dzone-alignment.
- **Coordinator:** project/plans/OPEN_ITEMS.md and this record.

## W303: source
The W301–W302 commit gate (68c5df63) left four rules_primer items open:
- the :204 ⚠️ named the injury major but not the deliberate-injury match;
- other Hockey Canada rules might price the same act;
- the IIHF Situation Handbook 83.7 was absent;
- "the man you hit" was gendered.

It also left two stale comments in risk_management.mjs.

## W303: what changed and why
**:204 ⚠️ ladder (Hockey Canada).** The author found that HC 7.2's preamble makes *"unnecessary contact with a Player playing the puck on an obvious … 'offside' play"* boarding if it reaches the boards, and charging otherwise. So the old ladder implied that a hit on the carrier was free in a checking division.

Two reviewers then added:
- the discretionary major for violence alone (7.2(b)–7.5(b) and 9.3(b) each open *"At the discretion of the Referee, based on the degree of violence…"*);
- head contact, which HC 7.6 says *"supersedes any other rules"*.

The final run reads:
> ⚠️ **That faceoff prices only the offside, never the hit or the swing. Under Hockey Canada, an unnecessary hit on the carrier on an obvious offside play is boarding if it puts them into the boards, and should be treated as charging if it does not: at least a minor at any level (7.2, 7.4). Where your division bars checking, any check is at least a minor (7.3(a)). From behind, at any level, it is at least a minor and a game misconduct (7.5(a)), and a swing is slashing even if it misses (9.3). Each can be a major and a game misconduct for its violence alone, and must be if the carrier is hurt (7.2(b) to 7.5(b), 9.3(b)). A charge, or a hit from behind into the boards or goal frame, on a player who cannot defend themselves is a match penalty, and so is any of them meant to injure (7.2(c) to 7.5(c), 9.3(c)). Any contact with the head is a penalty too, at least a minor, and a head hit on a player who cannot protect themselves is a match penalty (7.6; 7.7 in Junior and Senior).**

It renders as one warn-inline span with no aside: the safety-reviewer's plugin harness, re-run by the coordinator after the final edit, shows 1 span and 0 asides. "The man you hit" became "the player you hit", because 7.3(a) covers female hockey.

**:206 (split).** The USA Hockey Casebook Situation 39 text, the 6.11(b) note and the Zone Entries link now form their own paragraph. The words are unchanged.
- check_marker_pairs lists it as a SPLIT HALF UNMARKED candidate.
- The safety-reviewer ruled it safe unmarked: it is guidance to linespersons and prices nothing. The player instruction and the whole ladder stay in the marked :204.

**:200 (IIHF).** Added: "And do not check the carrier instead of clearing. Under the IIHF, if the linesperson judges you knew you were offside, an intentional offside *"may be called"*, with the draw in your own end (Situation 83.7; 83.6(IV)), and the hit itself is still boarding if it puts the carrier into the boards and should be treated as charging if it does not (41.1, 42.1)."
- The author's first version gave only the draw. The safety-reviewer BLOCKED it: chunk 015 priced an IIHF hit by the faceoff alone, and the Hockey Canada ladder in chunk 016 does not reach an IIHF reader. That is the exact defect 68c5df63 removed.
- IIHF 41.1 and 42.1 carry the same clause in both editions.

**:212 bullet.** "Under Hockey Canada, the NHL, the IIHF and the PWHL, an unnecessary hit on the carrier on an obvious offside play is boarding if it puts them into the boards and should be treated as charging if it does not, even where checking is allowed (Hockey Canada 7.2; 41.1 in the others)."
- NHL and PWHL 42.1 do not repeat the clause; 41.1 carries it in those books.
- USA Hockey (624(d), icing only) and CARHA write no offside clause, and are correctly left out.

**KT1 (:1186).** "everyone tags up; leave the puck." became "…leave the puck and its carrier alone." Heard alone, "Do not close on the carrier expecting a whistle" let the qualifier become the condition. This text predates W303.

**risk_management.mjs.** Two stale comments were corrected (the defender.md quotation, and "both captions carry the same three limbs"). build-diagrams was run afterwards, so diagrams.json is newer than the module, with no diff from these comments.

**Markers:** rules_primer 196→196, 0 LOST.

## W304: what changed
| Caption | Before | After | Cut | Hosts voicing the cut limb (caption chunk → limb chunk) |
|---|---|---|---|---|
| forecheck-212 | 1400 | 1249 | spread-vs-stacked as a coaching choice; "whether the first pass beats F2" | how_to_watch_hockey 007→008 (added); winger 026→026/027 (contest added); center 023→023 (added); game_management 008→009 (added); forechecking_systems 022→022/023 (not edited) |
| faceoff-dzone-alignment | 1356 | 1259 | "everyone except the two taking the draw keeps both skates outside the circle and the hash marks" | none needed: the same caption's unchanged ⚠️ instruction says it more fully (adds the stick) in the same chunk, in all seven hosts |

**faceoff-dzone-alignment** is otherwise left whole, with a dated W304 comment:
- Its contact limb (NHL/IIHF 76.7(iii), PWHL 78.7(iii), HC 6.2(a), CARHA 57(a)) is voiced near the marker only in winger (036).
- Freeing it would need a five-book rule sentence in six hosts, two of them rink_map and game_management, where faceoff-contact law is detail in the wrong place.

**Both ⚠️ blocks are byte-identical** from the glyph to the end of each caption (670 and 882 characters), checked against HEAD by the author and the safety-reviewer. The forecheck-212 dependency (forecheck-212-stacked, forecheck-122) holds: check_caption_pairs reports 0 violations.

**Host sentences** are coaching craft from forechecking_systems.md, each naming the spread/stacked shape as a coaching choice. Two orderings were changed on safety review:
- **center.md** now leads with the tactic ("The contest the 2-1-2 turns on…"). The sentence sits straight after the caption's body-checking scope, so the chunk no longer moves from "find out whether you may body check" straight to "is a coaching choice".
- **game_management.md**'s "the contest it turns on" became "the contest the 2-1-2 turns on".

## Reviews
| Reviewer | Result |
|---|---|
| W303 author | Found HC 7.2 and 7.4 and the IIHF 83.7 placement. Left head contact out, and the reviewers overruled that (below). |
| rules-verifier (W303) | :200 and :212 CONFIRMED (both IIHF editions; NHL and PWHL 41.1). :204 PARTIAL. Every tier, modal and citation is correct, but it was missing the discretionary major for violence and head contact (HC 7.6 supersedes; 7.6(c) and 7.7(c) match on a defenceless player); the latter made an open-ice head hit sound capped at a major. "Charging" corrected to the book's "should be treated as". A narrow re-check of the coordinator-merged ladder confirmed every tier ("for its violence alone" holds in all five (b) clauses; "meant to injure" fairly covers 7.4(c)'s "attempts" form; the defenceless-match limb does not overstate) and supplied the citation and the head-contact wording. |
| safety-reviewer (W303) | BLOCKED :200 (IIHF hit priced by the draw alone). WORDING for :212 (charging limb), KT1 (qualifier as condition) and a shorter ladder. :206 safe unmarked. On narrow re-check it rejected the verifier's head-contact wording, "in Junior and Senior a light one may be called as roughing or charging", as CHEAPER than the book: 7.7 Interpretation 1 makes a blind-side or late hit to the head *"a minimum of a Minor penalty and a Misconduct Penalty"* as Head Contact, *"rather than for roughing, charging"*. That is exactly the offside forechecker's case. Its replacement was applied verbatim. Confirmed 1 span, 0 asides, and the ladder hearable at its final length. |
| W304 author | Inventoried limbs per host and rendered every host; ✂️ and LEFT WHOLE comments carry exact figures and chunks. |
| safety-reviewer (W304) | Nothing blocking. Confirmed the cut limbs per host with chunks, both ⚠️ blocks byte-identical, no safety limb lost, the faceoff-dzone-alignment judgement, and no pronoun shift. Optional WORDING for center (tactic first) and game_management ("the 2-1-2"), both applied verbatim. |

### C11
The W303 :204 ladder was merged by the coordinator from two reviewers' wordings, then re-checked by both, and every change after that re-check is a reviewer's wording applied verbatim. Every other post-review edit is a reviewer's wording applied verbatim. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary), started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_caption_pairs, check_geometry, check_secrets;
- check_marker_pairs and check_callout_flow --panels / --bare on every changed content file.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier ×2: HC 6.11, 7.2–7.7, 9.3; IIHF 41.1/42.1/83.6/83.7 and Situations 83.7/83.24 (both editions); NHL and PWHL 41.1/42.1; USA Hockey 603, 624(d), Casebook 630; CARHA 49 |
| D4 Citations | every :204 tier carries its own citation |
| D5–D6, D8 | not engaged |
| D7 Cardinal rule | W304 host sentences each name the shape as a coaching choice |
| D9 Summary layer | rules_primer KT1 corrected; Common Mistakes :1122 read (no price stated) |
| D10 Key-facts layer | not engaged |
| D11 Reader safety | safety-reviewer ×3 (W303 twice, W304 once) |
| D12 Read-aloud | rules_primer chunks 015–017; every W304 host rendered |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | build, and plugin harness on the :204 paragraph |

## What this method could not have found
- Whether IIHF head contact (42.1 is *"superseded by … 'illegal hit to the head'"*) should also be named at :200 for an IIHF reader.
- Whether "an obvious offside play" in HC 7.2 and NHL/IIHF/PWHL 41.1 is read by officials as covering a delayed offside in progress. No interpretation ties them.
- Sibling documents (zone_entries.md) that state the delayed-offside hit price more briefly. zone_entries already carries its own ⚠️ (9d211a2b), but not the boarding/charging clause.
- How the trimmed captions and the longer ladder sound in place. That needs an ear test.
