# Readability round R1 (19 October 2026): shortening all 39 documents

The owner's instruction, 19 Oct 2026: *"make the text as short as possible, I want it to still be clear and easy to understand but shorter text is better then longer text"*. This sits at the top of the readability programme in `project/plans/OPEN_ITEMS.md`.

Each document had one author agent:
- **First 20 documents:** brief v1, which was shorten only.
- **Remaining 19:** brief v2, which added programme items 1–6: paragraphs of about 1,200 characters or less, rules last in each section, distinct jobs for each layer, plain words, fewer rule numbers in prose, and fewer ⚠️.

Every author had to keep every safety limb and honest disclosure, add no new claims, and lose no marker pair.

## Measured (scripts/check_readability.py)

| | Pre-R1 (72c68dd) | After R1 |
|---|---|---|
| Prose words | 1,068,411 | 794,955 (−26%) |
| Paragraphs over 1,200 chars | 1,114 | 656 |
| Key Takeaways over 60 words | 398 | 266 |

`check_counts`: 1,294,476 words in total, including the trailers and facts blocks, which were left untouched.

## Review

**Safety review.** Each document had a `safety-reviewer` checking the cut against HEAD and the primary text, with the document rendered to speech. Rules Primer was cut by 53%, so it had four reviewers in parallel: summary layers, Common Mistakes, §4, and the rest of the body. Findings went back to the author and were applied.

**The same defect appeared in almost every document: a shortened summary layer became cheaper than the book.** The recurring forms were:
- "can" where the book says "must": HC 8.5(b), CARHA 52(b), USAH 604(d), 607(b), 608, 602(a), 615(d), HC 7.10(e)(ii), CARHA 59(b), HC 11.1(e) Note 1.
- Dropped scope limbs:
  - USAH 624(b)(1) and 630(d) classifications
  - "boards or goal frame"
  - the owner's head-first harsher-of-two ruling
  - In-House Rule 76 for faceoffs
  - USAH Casebook 625 Situation 9 (goal *and* penalty)
  - 632 Situation 6 (three seconds)
  - NHL 25.2 (accidental net-off in front of a chance)
  - HC 3.2(b) (thrown stick)
  - CARHA 32(a) (three penalties)

| Severity | Count | Findings |
|---|---|---|
| Blocker | 3 | body_contact KT11 (CARHA/HC charge on a goalie made discretionary); center KT5 (HC 7.5(c)/7.6(c) mandatory match voiced as "can be"); uk_rules KT21 ("call 999 for any red flag, 111 otherwise", which sent serious non-head injuries to 111, against ukcg.txt) |
| Major | about 50 | across 30 documents |
| Minor | many | |

**Rules verification.** Three `rules-verifier` passes checked the new text the fixes introduced, because a repair is new text:
- **Batch 1, 8 documents:** found gm net-off (25.2) and defender IIHF 43 as cheaper than the book. Both fixed.
- **Batch 2, 14 documents:** found the switching_positions USA Hockey trigger, the rink_map Situation 5 vs Note 1 contradiction, and the core_principles "outside the crease keeps the goal" sentence (false under NHL/PWHL/IIHF 69.1; it was already in HEAD). All fixed.
- **rules_primer fix round:** found 6 cheaper and 3 harsher items. All fixed.

**Cross-document pointer check (`content-reviewer`).** It enumerated 2,486 links, read about 70 safety pointers in full, and ran mechanical checks on the rest. It found no safety pointer broken. Four non-safety pointers were fixed:
- shooting→rules_primer tie misquote (in HEAD)
- breakouts→uk_rules wrong target
- team_play anchor
- getting_started quote drift

It also flagged the glossary Screen entry, which was missing USAH Situation 9; that has been added.

**Amber panels.** Several cuts split paragraphs, so a mid-paragraph ⚠️ came to open a paragraph and render as a panel. The first draft of this record said all of them had been moved. That was true of only five files: rules_primer, uk_rules, scanning, zone_entries and rink_map. The commit gate measured about 74 more across 20 other files and blocked. Ten panel-repair agents then moved each glyph in front of a bold instruction or tariff, with a short bold lead-in where needed. A handful that marked orientation rather than a hazard were dropped, and each of those paragraphs kept another marker. **`--panels` is now 2 corpus-wide. Both are in special_teams.md, were present at HEAD, and were not touched by R1.**

**Spoken markers.** `check_marker_pairs` reports 0 LOST across 39 files: no unit lost its last marker. Separately, it lists about 490 units as "no longer present by key", meaning their openings were rewritten. Each author reported reading its own candidates. The coordinator did not re-read all of them.

**Renderer.** `scripts/md_to_speech.py`'s emergency-number rule required a lower-case "call", so "Call 999" was voiced as "nine hundred and ninety-nine". The rule now accepts Call/Dial/Ring and "rather than". It was tested: "112 effect sizes" and "more than 999 players" are unchanged.

## Gates (final tree)
- check_facts: pass
- check_links --quiet: 0
- check_absolutes: pass
- check_geometry: pass
- check_secrets: pass
- check_counts: pass
- check_marker_pairs: 0 lost
- check_callout_flow --panels: 2 (both pre-existing, special_teams).
- Build: absolute npm, after the last content edit, chain through check:links. check_callout_flow --bare reports 0 on the built site.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier ×3 on new text; safety-reviewers quoted sources/*.txt |
| D2 exceptions | Classification scopes, injured-player and icing exceptions, Situation 9, 625(b) exceptions |
| D3 divergence | Book-by-book short forms checked |
| D4/D5 citations | Quote drift found and fixed (practice→getting_started, shooting tie quote, glossary [a]ny) |
| D6 negatives | Trapezoid, video review, kick-shot negatives re-searched by act |
| D7 cardinal rule | Every layer leads with the instruction |
| D8 numeric ownership | Pointer check; IIHF Table 5 count corrected to twenty-two for 2026/27 |
| D9 summary layer | The main finding class; layer tests by every reviewer |
| D10 facts | Facts blocks left untouched apart from 3 fixes (defender :435/:812) |
| D11 safety | safety-reviewer on all 39 documents |
| D12 read-aloud | Every document rendered by its reviewer; emergency-number renderer fix |
| D13 folklore | Out of scope: no new tactical claims |
| D14 structure | Headings unchanged, so anchors are stable |
| D15 site | Full build; --panels 2 corpus-wide (both pre-existing); --bare 0. No site-reviewer pass in a browser (out of scope this round; next round) |

## Rules-verifier batches (membership)

**Batch 1**
- center KT8
- shooting (the whistle bullet)
- game_management (net-off)
- defender (facts :812, CM checking from behind, KF6)
- zone_entries KT11
- neutral_zone_systems (EIHL and NHL/PWHL bullets)
- reading_ice_hockey_diagrams (604(b))
- body_contact (KT11, peacemaker, CM4)

**Batch 2**
- skating (the crease sentence)
- switching_positions (KT7 and CM)
- practice_and_development (injury stoppage)
- language_and_glossary (KF9, KT11, KT13, :411)
- time_and_space (CM crease, §3 screening, CM left-crease)
- getting_started (faceoff bullet, Route 4, trailer note)
- mental_game (KT11 and CM)
- team_play_and_culture (peacemaker, bench, officials, KT5)
- puck_support_and_spacing (§8)
- scanning_and_anticipation (CM pin)
- on_ice_communication (KT14 and CM cross-check)
- rink_map (KT15, CM14, :446)
- core_principles (crease, CM CARHA)
- neutral_zone_systems (EIHL)

**rules_primer**: its own verifier pass over the A–D fix round.

**Batch 3**, run after the commit-gate block
- uk_rules (the fix round)
- conditioning_and_recovery (the fix round)
- switching_positions (casebook trigger)
- rink_map (:446 reconciliation)
- core_principles (:130)
- language_and_glossary (Situation 9)
- getting_started (KT11)
- how_to_watch_hockey (three post-review edits)

## Findings sent inline (no fixes/*.md file)

**core_principles**
- 1 MAJOR: crease bullet "in the crease", NHL 69.3.
- 3 MINOR: CM CARHA 50(a)/53(b), KT11 fallback, British scope marker.
- Later: :130 rewritten after batch 2.

**language_and_glossary**
- CLEAR with 3 MINOR: KT11 HC 8.5(b), KT13 624(b)(1), marker moves at :293/:411 and drop at :441.
- Later: Situation 9 added after the pointer check.

**how_to_watch_hockey**
- CLEAR with 3 MINOR, applied after the reviewer's render (08:11) and before 08:14:
  1. 82.2(v): "at a stoppage … for it".
  2. 63.8: "with the same exceptions".
  3. 614(c): "with the puck outside".
- The commit gate re-derived all three as correct.

**mental_game**
- 1 MAJOR: HC 11.1(e) Note 1, "one argument can do it", in KT11 and CM.
- 5 MINOR: Kingston & Hardy comparator, PETTLEP §6, trailer 601 clauses, KT11 hand-on-official, BJSM note.

**puck_support_and_spacing**
- CLEAR with 2 MINOR: §8 icing scope (the author widened it to NHL/IIHF/PWHL/some HC), §6 "none of this".
- 1 optional: caption echo removed.

**reading_ice_hockey_diagrams**
- CLEAR with 2 MINOR: trailer "named"; 604(b) mixed-category clause.

**neutral_zone_systems**
- CLEAR with 1 MINOR: the EIHL scope split.
- 2 nits: "Some material", "charging rules".

**skating**
- CLEAR with 2 MINOR: KT1 "checking league or not"; :141 marker back on the hazard.
- Readability: walking-speed sentence reworded.
- Optional: crease line moved into the net-drive bullet.

## Corrections to the first draft of this record (the commit gate blocked on these)

**Panels.** The first draft said every new panel had been moved. That was true only of five files. The gate measured about 74 new panels across 20 other files.
- Those were repaired before commit; see the gates section.

**Spoken markers.** "0 LOST" is the tool's count of units whose marker disappeared. Separately, 491 units were reported "no longer present by key", meaning their openings were rewritten.
- Each author reported reading its own candidates.
- The coordinator did not re-read all 491.
- That limit is stated in "What this method could not have found".

## Batch 3 findings (applied before commit)

**uk_rules**
- :457 told readers a downed but awake player could go off the ice. It now says: do not move them, let the rink's first aider or medical cover assess them where they lie, and call 999 for neck pain, rigidity or any red flag.
- The cage ladder now ends in a game misconduct.
- KT6 now carries the Sutton/Coatbridge exception.

**core_principles :130 and glossary :367/:403.** Contact with the goalie from outside the crease costs the goal under Hockey Canada 8.5 Interpretation 1, CARHA 66(b) and USAH 617(c)(4)/625(a)(8). Only a pure visual screen is outside those rules.

**conditioning_and_recovery**
- A USAH match penalty suspends the player until a hearing (405(c)).
- Hockey Canada 7.3(b) violence limb added.
- UKCG "not left alone" for 24 hours added at all four sites.

**getting_started KT11.** UKCG 24 hours added.

**rink_map.** Casebook 607 Situation 5's "unnecessary or avoidable contact" limb added.

**how_to_watch_hockey.** USAH 614(c)(2)/(4) and NHL 82.3 visiting-team bench minor added.

**Left in the plan (not fixed in R1).** Each is in the harsher direction or is a book quirk:
- uk_rules KT17's other EIHL fighting limbs.
- The "26 m width" overstatement.
- KT21 drops UKCG's "within 24 hours" for 111.

## Left in the plan (`OPEN_ITEMS.md`)
- R1 corpus-claim leftovers (a)–(g), and these sibling sweeps:
  - "screen outside the crease keeps the goal"
  - IIHF "twenty" count
  - CARHA goalie charge "crease OR injures"
  - "pick up a teammate's stick" under HC/CARHA
- R2: apply programme items 1–6 to the first 20 documents, which had the v1 brief only.

## What this method could not have found
- A dropped qualifier that left no lexical trace. Reviewers traced dropped limbs by distinctive strings; several said so.
- The ~490 rewritten-opening units check_marker_pairs could not pair, beyond each author's own reading.
- The ~180 new safety pointers and ~380 older ones the pointer check did not read individually.
- Chunk distance for every moved "What it costs" block. Measured on most documents, not all.
- A legal technique executed badly at speed.
