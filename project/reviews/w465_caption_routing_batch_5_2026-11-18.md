# W465: caption routing batch 5 — eleven faceoff, puck-handling, support and practice captions trimmed; one restored to say what "the move" is (18 November 2026)

**Files changed**
- **Diagrams:**
  - site/src/diagrams/faceoffs.mjs
  - site/src/diagrams/puck_handling.mjs
  - site/src/diagrams/puck_support_and_spacing.mjs
  - site/src/diagrams/practice_and_development.mjs
  - site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record
- **Content:** no `content/` file changed.

## Source
- **Plan row:** From W464 (6), the next caption batches.
- **Authors:** four agents, one per module.
- **Builds:** the coordinator ran build-diagrams once at the end, so the agents' builds did not race.

## Captions
| id | words: HEAD → now | amber at 400 |
|---|---|---|
| faceoff-strong-side-dot | 171 → 131 | 0 |
| faceoff-dzone-alignment | 206 → 185 | 20.5% |
| the-last-player-back | 183 → 149 | 32.1% |
| the-puck-decides-not-you | 160 → 149 | 27.0% |
| you-cannot-beat-two | 179 → 148 | 37.8% (HEAD 48%) |
| support-a-battle-from-outside | 174 → 149 | 27.4% |
| support-angles | 153 → 144 | 0 |
| support-distance-range | 154 → 148 | 0 |
| drill-decision-one-defender | 168 → 134 | 27.9% |
| practice-small-area-in-one-zone | 166 → 147 | 24.6% |
| practice-the-line-and-one-rep | 152 → 126 | 20.4% (HEAD 45%) |

**Cut.** Restatement and tactical reasons the host already voices beside the marker, checked by a layer test per host.

**Kept.** Every safety, posture, onus, find-out, coaching-choice and provenance limb.

**Amber.** In five captions the glyph moved off a description or reason and onto the closing instruction. This applies the W464 lesson.

**faceoff-dzone-alignment stops at 185 words.**
- Its book split is pointed at by another caption and by how_to_watch_hockey :266.
- Its contact limb fails the layer test in five of its seven hosts.
- The rule numbers were dropped from the voiced text. The contact limb now names its books itself.

**support-distance-range.** "Before that defender does" became "a defender", because no opponent is drawn in the picture.

### Review fixes
- **the-last-player-back (diagram-reviewer: WORSE on one limb).** The trim cut "a conditional, not a ban on carrying", so "the move is off" read as "do not carry".
  - It now reads "so trying a move is off here. Carrying the puck is not."
  - The author replaced the reviewer's dash and semicolon with full stops to close two negation seams.
  - The author also refused "teammates", because the goalie is a teammate and is behind you. It now says "None of your four fellow skaters is behind you. Two are drawn up the ice."
- **practice-the-line-and-one-rep (47% amber).** It was reordered to "Keep your feet moving: … ⚠️ Above all, keep your head up…".
  - The module's "order is load-bearing" comment was read first. It guards against moving the glyph earlier and against dropping head-up. Neither happens here.
  - Safety ruled that the cold-air limb does not need the marker.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All OK. "Usually costs your centre the dot" is right in the NHL, IIHF 2026/27 and PWHL: each has an icing carve-out, and the 2025/26 warning is overridden by In-House Rule 76. HC 6.2(a) and CARHA 57(a) say "always". "Even in non-checking hockey, that is checking from behind" holds in every book (USAH 608 Note; HC 7.5(a); CARHA 53(a); 43.3). The trail-skate onside rule holds in all six books. |
| safety-reviewer | CLEAR. Each of the 8 glyph captions plays "Important." exactly once per voiced copy, across 10 rendered hosts. For you-cannot-beat-two, no CARHA scope is needed: the host voices "under CARHA, avert the contact" in the same chunk (049). **Confirmation of both fixes:** CLEAR. |
| diagram-reviewer | 9 BETTER or NO WORSE. the-last-player-back was WORSE and is now fixed. the-line was over the 45% flag and is now fixed. All 11 PNGs match their captions. |
| site-reviewer | 11 hosts at 400 light/dark and 1440 light, on the 15:52:32 build. Every glyph caption's amber opens on an instruction. Every page is under 50% at 400. 0 bare, untreated or panels; ⚠️ counts equal HEAD; 0 console errors. **Minor:** winger's 1440 worst window rose 61.3 → 76.1, in its Faceoffs section, which hosts dzone-alignment. Not inspected. |

### C11
The coordinator wrote no caption text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 15:52:32. The newest source is practice_and_development.mjs at 15:51:51.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes (certifies 408 caption units), check_geometry and check_secrets pass.
  - check_counts: no change.
  - check_caption_pairs: no violation.
  - check_label_paint --severe: 2, neither in this batch.
  - check_callout_flow --bare: 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL/IIHF/PWHL 76.4 and 76.7; HC 6.2(a); CARHA 57(a); In-House 76; USAH 608; HC 7.5(a); CARHA 53(a); the six onside rules |
| D2 Exceptions | the icing carve-out on faceoff violations |
| D3 Cross-book divergence | the faceoff contact split kept |
| D4 Citation integrity | rule numbers dropped from voiced text, kept in code comments |
| D5 Provenance | the support-distance provenance is untouched |
| D6 Negative existence | not engaged |
| D7 Cardinal rule | coaching-choice disclosures kept; "carrying the puck is not" restored |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | caption vs host layer test, per host |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | negation seams closed with full stops |
| D13 Folklore | the cold-air muscle-pull claim is unsourced (filed; pre-existing) |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W465)
1. **winger 1440 worst window** rose 61.3 → 76.1 in its Faceoffs section. faceoffs itself is 80.5 at 1440 in Defensive-zone draws. Neither has been inspected.
2. **practice-the-line-and-one-rep.** "Standing still… in cold air is how people pull something" is unsourced and not labelled as coaching caution. This predates the wave.
3. **check_caption_negations cannot see** caption text that follows a comment line inside the caption string. This is a tool gap and goes to the coordinator, between waves.
4. **Optional nits:**
   - support-a-battle-from-outside: "brings their checker out" could read "keeps their checker out"; "stick down as an exit" could read "stick down for an outlet".
   - support-angles: the trail-skate imperative has no "until the puck crosses".
   - you-cannot-beat-two: "the second defender" is drawn as a forward glyph.
5. **Captions still ≥150 words:** 39, after this batch's 10.

## What this method could not have found
- Whether shorter captions teach faster.
- Real synthesised audio of the new strings.
- The five unread dzone-alignment hosts, by chunk distance.
