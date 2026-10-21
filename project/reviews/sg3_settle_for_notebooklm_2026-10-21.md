# SG3: settling eight pages for NotebookLM batch 2 (21 October 2026)

**Why.** The owner asked for NotebookLM batch 2 from "pages that won't be edited any more". A triage of all 28 remaining pages (nlm-triage) found 2 SETTLED (switching_positions, defensive_zone_coverage) and 8 NEARLY, held open only by rows (m), (n), (p), (q) and the (r) sweep. SG3 closed those rows on the 8 pages, one agent per file. Brief: scratchpad sg3_brief.md.

**Coordinator ruling (row m), recorded in OPEN_ITEMS.** Reword "they have no puck, so it can be called interference" to the unconditional form defensive_zone_coverage already uses: "can be called interference wherever you play, and where checking is barred an illegal check as well". Voiced alone, the possession reason implies a puck carrier is fair game.

## Changes by file

| File | Item A (CARHA 79 backswing) | Item B (goalie race) | Item C (the "so" shape) | Rows |
|---|---|---|---|---|
| center.md | rim facts + body :106 | forecheck dump-in facts + body :421 | body :743, CM :826, KT5 | — |
| winger.md | rim facts :102 + body :112 | NZ dump chase facts :258, body :287, KT7; icing chase facts :695, body :710, KT15 | Key focus :19, CM :790 | — |
| defender.md | rim body :100 + facts :123 | n/a (no race to the opposing goalie) | Overview :46, facts :270/:278, CM :904, KT3 | (n) :639 colons |
| goaltender.md | goalie rim facts :708 + body :717 (CARHA 30(a) and the glossary count a goalie as a player) | n/a | body :561/:1378/:1381, facts :1367, CM :1633 | — |
| breakouts.md | already present (:417/:426) | chip-and-chase facts :794 + body :808 | n/a | (n) facts :107/:528 now say "released" and "a 5-on-3 stays exempt after the first" |
| offensive_zone_play.md | n/a (no hard clear taught) | dump-in chase body | CM cut-across | (p) CM, KT8 and self-check Q6 now say "in most books it ends your game — plan on it" for a hit on a winger facing the glass (after sg3R MINOR-5; the gate aligned Q6); rim keep-in posture (body + facts split into two lines); third D variant in Options |
| defending_the_rush.md | n/a | n/a | facts :329/:330/:334, body :344/:411 ("puck or not", "puck or no puck") | — |
| faceoffs.md | quick-rim body :572 + facts :567 | n/a | CM :1230 | (q) :404 "boards-side" now means half of a circle; facts :535 and body :541: the inside winger steps out of the shot's line, not "clear the lane" |
| site/src/diagrams/body_contact_and_battles.mjs | — | — | `net-front-walk-out-direction` caption (hosted on body_contact, defender, goaltender) | — |
| site/src/diagrams/faceoffs.mjs | — | — | — | `faceoff-ozone-d-one-timer` caption matches (q); "he" → "they" |

Plus one word on zone_entries :679, from the review: "injures someone" → "injures an opponent".

## Reviews

**sg3S (safety-reviewer)** read every changed hunk in all 8 files and rendered all 8.

Its findings: no CRITICAL, no MAJOR, no new permission anywhere. Item C sites keep the off-puck player named in the unit, except center CM :826, which is now unconditional. That is conservative, and it is safe because center :730 defines the middle-lane driver as having no puck. Marker pairs 0 LOST. Rules verified from `sources/`:
- CARHA 79(a)/Note, 30(a) and the glossary;
- USAH 604 Note 1, HC 7.3(a), CARHA 49(a);
- NHL 43.2–43.5, IIHF 43.2–43.3, CARHA 53, HC 7.5(a), USAH Casebook 608 Sit. 1;
- NHL and IIHF 81.6, PWHL 83.6, USAH short-handed icing.

Its MINORs:
1. DTR facts :329: an unscoped "your man" with interference. **Applied** in the reviewer's wording, "a man off the puck".
2. Faceoffs facts :567: the paired dashes let "Never" bind to "rim it hard". **Applied** in the reviewer's wording (period and "instead").
3. Defender facts :270 lost "well below the hands" to the cap. **Accepted**: it is carried two chunks later in the caption and in the next facts lines.
4. "If it injures someone" overstates CARHA 79(a). **Applied**: "an opponent" (center, winger and zone_entries).

Accepted without change: goaltender facts :1367, which has no barred-checking limb. It is still unconditional, and the block and body carry the limb.

**The two captions** were edited by sg3-captions and rebuilt with build-diagrams. check_absolutes was clean on the rebuilt json (408 units). The commit gate is the reader for those two strings and for the coordinator-applied MINORs (C11).

## Rules verification (sg3R) and post-review edits

sg3R found no CRITICAL or MAJOR. Its MINORs:
- **MINOR-1:** the CARHA 32(d) one-game suspension was missing. **Applied** on the center facts :101 Rule line, which is voiced alone and was weakest ("…a major if it injures, which ends your game and the next"). The body sites that say "ends your game" are true and are logged in row t.
- **MINOR-5:** OZP "plan on being thrown out" overstated USAH 608(a)'s minimal-pinch tier. **Applied** in the verifier's wording at the CM and KT8: "…and in most books it ends your game — plan on it".
- **MINORs 2–4:** :528 omits High School; NHL 56.2(iii) and the USAH 625 Note would be better citations for the walk-out. **Logged** as row t.

## Gates (after the final content edit, no pipe)

- check_facts, check_links, check_absolutes, check_geometry and check_secrets all pass.
- check_marker_pairs: 9 files, 0 LOST, 0 SPLIT.
- check_counts: no change.
- `npm run build`: exit 0, check-links clean.

## Dimensions (D1–D15 per project/reviews/TEMPLATE.md)

| Dim | Status |
|---|---|
| D1 Rules accuracy | ✓ sg3R (rules-verifier) checked every changed rule claim against sources/ and quoted each grep line: CARHA 79/30(a)/32(d) and the glossary; NHL/IIHF/PWHL 81.6/83.6; USAH 624(b)(1); NHL/IIHF/PWHL 43, HC 7.5–7.7, CARHA 53, USAH 608 and its Casebook; 56.1/56.2/57.x, HC 8.3, USAH 625 and Casebook 609 Sit. 2; USAH 604, HC 7.3, CARHA 49/66(a) |
| D2 Rules travelling without exceptions | ✓ The NHL/PWHL empty-box major exception is carried in the same facts line as the icing exemption. The USAH age floor is on :528 (High School is on :111; row t). The CARHA backswing applies to goalies per the glossary :431 |
| D3 Rule-set divergence | ✓ The CARHA-only backswing is scoped "in a CARHA league". The USAH 608(a) minor-plus-misconduct tier is kept honest by "in most books it ends your game — plan on it" (OZP) |
| D4 Citation integrity | ✓ No new citation except CARHA 79(a) on the center Rule line, which was verified. MINORs 3–4 (NHL 56.2(iii), USAH 625 Note fit better) are logged as row t |
| D5 Provenance | Out of scope: no new external source |
| D6 Negative existence claims | Out of scope: none made |
| D7 The cardinal rule | ✓ "Pull up if the goalie comes out for it" and "take the lane they want to pass into" are given as instructions, not claimed as law. No coaching choice is stated as a rule |
| D8 Numeric ownership | ✓ "Fifteen inches" comes from the CARHA 79 Note |
| D9 The summary layer | ✓ Claim-wide per file: KT3/KT5/KT7/KT8/KT15 and the CMs carry the same wording as the body |
| D10 The key-facts layer | ✓ Caps checked with --near; every changed facts line read voiced alone (sg3S, gate) |
| D11 Reader safety | ✓ sg3S: no CRITICAL, no MAJOR, no new permission |
| D12 Read-aloud integrity | ✓ All 8 pages rendered; each limb shares a <p> with its act |
| D13 Folklore | Out of scope: no folklore claims touched |
| D14 Structure, style, terminology, cross-links | ✓ One short clause per site; check_links clean; "boards-side" now defined to match its use |
| D15 The rendered site | ✓ sg3W (site-reviewer) checked both changed captions on all four host pages, light and dark, at 1440px and 400px. The warn-inline treatment is intact, with 0 bare glyphs, no overflow and a clean console; the prose spot-checks were clean too |

## What this method could not have found

- A hard clear or goalie race described in words the keyword sweeps did not use.
- A sentence built on the old possession reason that left no lexical trace.
- Rule claims outside the changed hunks.
- How the repeated limbs sound aloud.
