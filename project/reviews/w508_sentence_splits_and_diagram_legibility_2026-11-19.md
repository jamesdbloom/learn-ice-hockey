# W508: sentence splits across 12 documents, and diagram legibility (19 November 2026)

**Readability wave.** W507 found that the W503–W506 head-contact and after-icing repairs had lengthened sentences in their sibling documents. W508 split the over-40-word sentences those waves wrote and closed the diagram-legibility rows the W507 site review raised. Five editing agents worked from a shared brief (`scratchpad/w508_common.md`). Its rule: change only sentence boundaries and the fewest possible connecting words; keep every qualifier on what it qualifies; never split a facts line; keep each ⚠️ leading its strong run.

## Review

| Reviewer | Scope | Critical / major | Minor findings |
|---|---|---|---|
| content-reviewer | all 134 change sites in offensive_zone_play | none | 13 wording points |
| safety-reviewer | penalty-bearing splits in all 11 files | none | 3 "It ends your game" sentences carrying the USA Hockey scope only from the sentence before |
| site-reviewer | the changed figures on all host pages, and ⚠ render on 12 pages (structural) | none | four pre-W508 legibility notes and a phone-width concern, filed as plan row W508(7) |
| rules-verifier | the new USA Hockey high-stick lines in shooting and OZP | none | shooting's "The one difference" (the Casebook's Situation 10 is another); OZP :579 omits Situation 10 |

- **Content-reviewer.** No split makes an act cheaper, drops a book or condition, or separates a claim from its counterweight. Paragraph and list boundaries are unchanged: 83 lines in, 83 out. The 13 minors are mostly antecedents ("There", "It", "that rule", "that player") and grammar after a split.
- **Safety-reviewer.** It upheld defending_the_rush :735/:752, defender :954 and special_teams :1134.
- **Repairs after review.** All of these were repaired: the content-reviewer's 12 actionable minors, the safety minor ("Under USA Hockey it ends…") and the rules minor ("One difference…"). Each is confined to its finding and taken from the reviewer's sketch. OZP :592 was made more cautious than the sketch ("write no rule that takes that goal away", not "count it as a goal"). No reviewer re-read the repairs after they landed. This is the C11 terminating case.

## What changed

**Scope.** Each agent took 6c3af28c (the commit before W503) as its base. It split prose sentences over 40 words that W503–W506 wrote or lengthened and that are not mostly verbatim quotation.

- **special_teams, game_management, defender.** 5 splits. File maxima (59–60) are unchanged because they predate W503. A pre-W503 "Hockey Canada and CARHA must give a match…" family stays unsplit: plan row W508(6).
- **goaltender, shooting, forechecking_systems.** About 15 splits. Goaltender max 75 → 60; forechecking 65 → 60. Added scoping words are limited to "Under Hockey Canada", "On your head", "On the head", "Under USA Hockey". W507(5) found shooting.md carried the same wrong USA Hockey high-stick claim fixed in OZP in W507. Shooting's facts line :252 and body :267 now give USA Hockey 621(d)'s immediate whistle, Casebook 621 Situation 15's possession test, and Situation 12's opponent-declines stoppage. This was verified by the rules-verifier.
- **center, switching_positions, rules_primer, defending_the_rush.** 9 splits; defending_the_rush max 73 → 60.
  - **W507(2):** defending_the_rush facts :735 and body :752 now say "a miss leaves only your partner and goalie back", matching its own :797 and the glossary. No "nothing behind you" remains in content/.
  - **W505(7):** "reaches on violence" became "reaches on the violence" at all 8 defending_the_rush sites.
- **offensive_zone_play.** This agent went beyond the brief's scope: it split 88 of the file's 94 over-40 sentences, not only the ones the waves wrote.
  - Readability: mean sentence 19.9 → 18.4, max 56 → 50, long paragraphs 1 → 0.
  - The content-reviewer read every site. Marked units are 75 → 75 and every split paragraph still voices "Important.".
  - **W507(4):** facts :579 now reads "Casebook 621 Situation 15 plays on, unless it goes straight in, until your team is first to it; then the draw is in your end, not a penalty". It keeps the instruction and the straight-in exception. Situation 10 did not fit under the cap.
  - **W507(6):** the Situation 12 quotation cut was checked and is honest.
- **Diagrams (goaltender.mjs, shooting.mjs, positions.mjs, puck_support_and_spacing.mjs).**
  - **goalie-safe-outlets:** G and the puck are separated, and the rim route now clears G by about a foot. The pass end was re-derived so it still points at D1.
  - **shooting-lane-and-the-step:** badge "2" was moved off the blocker. The "step, then shoot" label is off the blue line. The non-hazard disclosure was moved before the ⚠️, so the figcaption amber run now covers only the hazard sentence.
  - **support-triangle:** "With the lanes apart, no single defender can be in both".
  - **positions.mjs:** stale comments corrected.
  - The agent viewed the PNGs before and after. check_geometry, check_label_paint and check_zones all pass.

## Rows closed

- W507(1)
- W507(2)
- W507(4)
- W507(5)
- W507(6)
- W507(8)
- W507(9)
- W507(10), except its 400px label check, which is re-filed as W508(7)
- W505(7)

## New plan rows (From W508)

1. Two facts lines lost their tactical instruction when they were rewritten for accuracy: shooting :252 and offensive_zone_play :579. OZP :579 has since regained "unless it goes straight in".
2. OZP :47's "about five times as often" drops its owner's qualification (:930).
3. OZP's CARHA Rule 79 / faked-slap-shot claims are unverified.
4. shooting :252's NHL citation numbers for a PWHL reader.
5. About 70 OZP facts lines run over 40 words, plus goaltender :1379 and forechecking :972.
6. Pre-W503 sentences of 55–78 words remain.
7. W507(10)'s 400px label check, which the commit gate found had vanished when that row closed, plus the site-reviewer's legibility notes.
8. USA Hockey Casebook 621 Situation 10 is in no voiced layer.
9. game_management :1192 still says "on violence".
10. Code-comment provenance in goaltender.mjs and shooting.mjs.
11. The goalie-safe-outlets describe.
12. shooting :267's "stops play on their own".

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0.
- `check_callout_flow --bare`: 0.
- No `<p>*` in dist.
- `check_marker_pairs`: 0 lost across all modified files.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. The rules-verifier read NHL/IIHF/PWHL 80.1/82.1, 72.3/74.3; USA Hockey 621(d) and Casebook 621 Situations 1–15; HC 6.9(a) and its interpretations, 7.6/7.7; CARHA 62(d); EIHL and In-House (no change). The safety-reviewer read USA Hockey 608 and HC 6.17(e). |
| D2 exceptions | Covered: Situation 15's straight-in exception restored; Situation 12. |
| D3 cross-book divergence | Covered: high-stick stoppage by book. |
| D4/D5 citations | Covered by the rules-verifier for the changed citations. No URL added. |
| D6 negative existence | Covered: OZP :592's "write no rule that takes that goal away" rests on a crossbar grep of usah.txt and carha.txt (goal-frame hits only). |
| D7 cardinal rule | Covered: the content-reviewer confirmed coaching choices are still named with alternatives. |
| D8 numeric ownership | One pre-existing finding (W508(2)). |
| D9 summary layers | Not engaged beyond the splits; the splits did not touch Key Takeaways' content. |
| D10 facts layer | Facts lines were not split. The four rewritten facts lines (shooting :252, OZP :579, DTR :411, :735) were reviewed. |
| D11 reader safety | Covered: the safety-reviewer checked every penalty-bearing split in 11 files. |
| D12 read-aloud integrity | Covered by agent and reviewer renders: every split paragraph still voices "Important."; the repair round was not re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: the content-reviewer's 13 wording findings; check_links. |
| D15 rendered site | Covered structurally by a **site-reviewer**, which the commit gate required for the changed geometry. Chrome was not connected after 3 tries. It checked the built SVGs (byte-identical between dist and public, and inline on all four hosts with the new coordinates). It found the figcaption warn-inline on both shooting hosts holding only the hazard sentence, with the disclosure plain text before it. It viewed the PNGs: goalie-safe-outlets' G is legible and clear of the puck (about 1.4 ft), with the rim about 0.5 ft from the letter; badge "2" sits about 6 ft below F and no longer labels it; "step, then shoot" stops about 1 ft short of the blue line. Across 12 pages every visible ⚠ forms warn-inline, with 0 bare, 0 untreated and 0 stray asterisks. No critical or major. Not covered: 400px, themes, console (plan row W508(7)). |

## What this method could not have found

- **Chunk boundaries for listeners.** A renderer sub-chunk boundary moving inside a long paragraph after 88 new full stops in OZP. Paragraph boundaries are unchanged and `check_chunk_splits` is clean.
- **Emphasis.** A shift in emphasis with no lexical trace near a split seam.
- **Long sentences outside scope.** Long sentences outside the W503–W506 scope remain, by design.
- **Missing transcripts.** The reviewer transcripts are not on disk.
