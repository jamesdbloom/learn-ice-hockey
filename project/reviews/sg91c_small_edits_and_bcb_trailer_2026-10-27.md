# SG91c: winger, team play, faceoffs, breakouts, special teams, and the body-contact Sources trim (27 October 2026)

**Files:**
- content/positions/winger.md
- content/off-the-ice/team_play_and_culture.md
- content/systems/faceoffs.md
- content/systems/breakouts.md
- content/systems/special_teams.md
- content/technique/body_contact_and_battles.md (Sources trailer only)
- .claude/agents/rules-verifier.md (source inventory)

## What changed and why
- **winger :431.** A new facts line gives the IHUK DOPS mandatory one-game ban (C.1, s.11), word for word with defender :317 and uk_rules :413. Winger's from-behind blocks had carried the ban in the body only (SG80 follow-up).
- **team_play :286 and :653.** A fight in the handshake line also costs at least a one-game ban at clubs in England or Wales. This is the C.2 "Last 5 minutes, OT & or End of game" row. It now matches KT12, which already said so.
- **faceoffs :158.** The citation now uses the IIHF book's own case: "63.2(III) NOTE".
- **breakouts :346 (owner ruling 26 Oct, "add a short line").** "In non-checking hockey, hold your lane: stepping out of it into a forechecker is body-checking under Hockey Canada Rule 7.3, and charging or body contact under CARHA Rules 52(a) and 49(a)."
- **special_teams :767, :894 and :1267.** IIHF citations are split into the book's upper case: "NHL 63.2(vii), IIHF 63.2(VII)". The plan row at :1103 was refuted: 607(c) "checking or charging" was already restored at HEAD.
- **body_contact Sources trailer (owner ruling 26 Oct, "trim the Sources only").** The EIHL mentions were cut to what the page relies on. The second EIHL Casebook entry now points to "the EIHL Casebook cited above". The nine-line fighting facts block is unchanged.
- **rules-verifier.md.** Its source table gains the 12 `sources/*.txt` files it was missing: eih_code_of_conduct, eih_dops (+layout), five eih_web pages, ihuk_club_regs (+layout) and ihuk_sex_gender_policy (+layout).

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules: winger, team_play, faceoffs, breakouts | rules-verifier | **SHIP.** DOPS scope (§5, England or Wales) and the mandatory bans (C.1, s.11, the C.2 "End of game" row) are verified. "Outside the Elite League" copies its owner, uk_rules :678, which discloses DOPS's silence. HC 7.3 "leaves their skating lane to make contact", CARHA 52(a) and 49(a) verified. 63.2(III) and its Note verified in both IIHF editions and Situation 63.24. |
| Safety: the same four files | safety-reviewer | **SHIP.** The handshake-line fight is an end-of-game fight, so the ban applies; reusing the sentence elsewhere would need the late-fight scope. "Hold your lane" is the book's own wording; the CARHA duty to avert contact is voiced in the next paragraph. Winger omits the under-16 Appendix J warning, which errs harsh. No paragraph lost its last ⚠️. |
| Rules: special_teams | rules-verifier | **SHIP.** The IIHF (I)–(VIII) and NHL (i)–(viii) numbering was confirmed letter by letter. |
| Safety: special_teams | safety-reviewer | **SHIP.** Citation splits only; marker count unchanged (55 → 55). |
| Sources: body_contact trailer | source-verifier | **SHIP.** Refetched the EIHL Casebook URL: 200, no redirect, SHA-256 matches `sources/eihl_casebook.pdf`. The moved citations still land, the Preamble quotations are verbatim, and nothing on the page relies on what was cut (the commit gate confirmed this by grep). |

### Optional, not taken
- breakouts: "hold your lane and avoid the contact" (rules-verifier). The next paragraph already voices the CARHA duty.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | rules-verifier, as above. |
| D4–D5 citations | DOPS, HC, CARHA and IIHF text was read on disk. The trailer trim was checked by source-verifier. |
| D6 negative existence | "Outside the Elite League" rests on the owner page's disclosed silence. |
| D7 cardinal rule | "Hold your lane" is a book-defined act in non-checking divisions, not a coaching choice. |
| D8 numeric ownership | The DOPS bans follow uk_rules. |
| D9 summary layers | team_play KT12 already agreed. Winger's layers carry the ban in the body and now in the facts. |
| D10 facts layer | winger :431 added. check_facts exits 0. |
| D11–D12 safety, read aloud | Not rendered. The marker-pair unit model was used instead (declared). |
| D13 folklore | Out of scope. |
| D14 structure, links | check_links passes. |
| D15 render | Site build after the last edit to these files. |

## What this method could not have found
- Whether DOPS reaches Elite League fixtures.
- How the under-16 Appendix J warning interacts with the C.1 mandatory bans.
- Other layers of these files built on wording the edits did not touch.
