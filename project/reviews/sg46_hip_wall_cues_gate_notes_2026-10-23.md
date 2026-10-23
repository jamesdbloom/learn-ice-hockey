# SG46: the remaining hip and wall cues, and the SG45 gate notes (23 October 2026)

## What changed

**Hip and wall cues** (follow-on to SG45; the claim: a cue to drive a hip, backside or forearm into a checker is penalised under CARHA 49(a), HC 7.3(a) in non-checking divisions, and USAH 604(c) with Note 1)
- **puck_handling.md :448 (facts, voiced alone):** "backside into the pressure" became "backside to the pressure". Its block's Action and Rule lines carry the scope.
- **puck_handling.md :548 (spin-off):** "hip into the checker" became "hip toward the checker".
- **center.md :371, breakouts.md :854:** "forearm and hip into the contact" became "forearm and hip to the wall", matching the corpus-wide wall posture.
- **defender.md and skating.md:** swept; no unscoped cue. skating :1005 "into the wall" is a receiving posture and was left alone.

**SG45 gate notes**
- **body_contact :73:** "boxing someone out at the net front" was removed from the "legal in every league" list. HC 8.3(i) interference and CARHA 49(a) can reach it. Boxing out is still taught at :457, :461, :473 and :1374 with "without leaning or pushing".
- **winger.md :126:** "keeps only the contact that comes from simply maintaining established body position" overstated USAH 604(c). It now reads "whose legal contact includes two players after the puck 'simply maintaining established body position', or closing a gap you have already angled". The rules-verifier recommended "includes" over "is", because the Glossary and Preface also allow leaning, collisions and standing ground.
- **winger.md :31 (facts):** now carries the CARHA limb: "never bump where checking is barred; in CARHA avoid contact". It is at the 200 cap.
- **breakouts "Then attack":** the own-empty-net caveat was not restored. It is stated in the same list's next bullet and at :955.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules | rules-verifier | All three claims hold; none is contradicted. The 604(c) Note quotation is verbatim, with the scope matching 604(a). "Bump" is HC 7.3(a)'s own word, Note 1 covers overt hip, and CARHA 49(a) covers "does not avert". On "holding the lane… you reached first": express support in NHL 56.1, IIHF Rule 56 and 101.1, PWHL 52.1(iii) and 57.1, USAH Preface and 625 Note, and CARHA 66(a) Note 2. HC permits it by definition and 7.3 Interpretation 1 but has no stand-your-ground clause; no British departure. Notes (non-blocking, plan rows): "is"→"includes" (applied); running interference for a puck carrier must not be read into "holding the lane". |
| Safety | safety-reviewer (also checked rules) | CLEAR on all seven edits. Each removes a driving reading: USAH Note 1 "overt hip, shoulder, forearm or torso action", and usah.txt:417 bars a forearm in delivering a check. Posture cues sourced to huh.txt:465-468 and :642-647. |
| Mechanical | coordinator | Full npm build after the last edit (the "includes" word), exit 0. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on the 5 content files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the rules-verifier |
| D4–D5 citations | Checked: the 604(c) Note quotation is verbatim |
| D6 negative existence | Checked: HC has no stand-your-ground clause (true negative; searched flattened) |
| D7 cardinal rule | Out of scope: no coaching choice changed |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: winger Key focus, KT6, facts and body all carry the scope (SG45/46) |
| D10 facts | Checked: winger :31 at 200/200 and puck_handling :448 make sense voiced alone; check_facts exit 0 |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Not rendered |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links and check_absolutes |
| D15 rendered site | Build passes. No visual pass. |

## What this method could not have found

- Cues worded without the swept vocabulary ("use your size", "put your body on them").
- Diagram captions spoken into these pages.
- How HC referees treat holding a lane against a player without the puck (no interpretation on disk).
