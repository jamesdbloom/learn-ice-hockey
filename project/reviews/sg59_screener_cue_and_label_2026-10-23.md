# SG59: the screener's cue, CARHA limbs on the box-out facts lines, and a label off the blue line (23 October 2026)

## What changed

- **body_contact_and_battles :1264 (facts) and :1277, the net-front attacker.** "Track the puck while feeling the defender — eyes on the puck, body on the player" was the attacker's own body on the defender. CARHA 49(a) prices that ("stands in front of an opponent for the purpose of making contact"). USA Hockey's lean permission covers only two players pursuing the puck (`usah.txt:270-285`), so it was exposure to an interference call in every book. It also contradicted the next section, where the screener touches nobody. It now reads "know where the defender is without looking … hold your ice and let them come to you, leaning on nobody". :1277 adds "Your screen is your body in the shot lane, not your body on them."
- **:1267** "a defender you are feeling rather than watching" became "a defender you cannot see". The safety-reviewer's optional sketch: "feeling" was the old contact cue's word.
- **BCB facts :1360 and DZC facts :526** (box-out) gain the CARHA limb: "under CARHA without putting a body on them at all" and "under CARHA no body contact". To fit the cap, DZC :526 now says "watch it" and "anywhere".
- **defender.md:** checked and no edit. Every box-out unit already carries "beside", "no lean, no push" and the CARHA limb.
- **dz-walk-down-man diagram.** "goes with the carrier" sat across the blue line, which ran through the "e" of "goes"; "on the other D" touched it. Both were moved with `labelHint` ([10, -7.5] and [4, -10.5]). The emitted positions were confirmed after the rebuild (x 43 and 37), and a QuickLook render shows both clear of the line. "walks down from the point" stays on the line, because its player stands on the line.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, rendered (BCB chunks 104/106/117, DZC 033) | CLEAR. Every line is stricter than before. Verified verbatim: CARHA 49(a)–(d) and 66(a) Note 2, HC 7.3 and 8.3(a), USAH Competitive Contact, NHL and IIHF 56.2. "Interference anywhere" holds in every book. No edit needed at :1266 ("take the shove braced" is a receive-contact safety technique). The optional :1267 sketch was applied. |
| Rules (C4) | safety-reviewer, which quoted every rule; no separate verifier | No rule limb is new in kind: the CARHA no-contact wording repeats DZC :535 and goaltender :1382 (gate-verified in SG58). |
| Diagram (D15) | diagram-reviewer measurement, coordinator fix | The reviewer measured the crossing (ink x 21.25–44.8 against a line at 24.5–25.5) and sketched the hint. The coordinator applied it, rebuilt, and confirmed the emitted coordinates and render. check_geometry exits 0. A corpus census (194 labels in 99 diagrams) and the leader-line z-order trade-off are now plan rows for the owner. |
| Rendered site (C10) | site-reviewer, after the first gate blocked on C10 | **PASS.** The Chrome extension refused localhost, so a headless Chromium (playwright chrome-headless-shell) was used with real `getBBox()` measurement. Both host pages (defensive_zone_coverage, how_to_watch_hockey) at 1440 and at 400px (iframe), in light and dark. The inline SVG carries x=43.00 and x=37.00. Clearances: "goes with the carrier" sits 4.75 from the blue line, 3.35 from the circle, 4.70 from route 2, 1.80 from the W token (tightest); "on the other D" sits 2.55 from the blue line. No console errors, no off-origin requests. Not covered: real phone, other font fallbacks, 375/320px. |
| Mechanical | coordinator | build-diagrams exits 0. A full npm build exits 0 after the last edit, and dist carries the new label x. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_marker_pairs: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 | Covered by the safety-reviewer's quotations |
| D4–D8, D13 | Out of scope |
| D9 summary layer | Attacker and defender cues checked across facts and body; defender.md checked |
| D10 facts | Within caps (`--near`) |
| D11 | safety-reviewer |
| D12 | Rendered |
| D14, D15 | check_links; diagram render |

## What this method could not have found

- Whether a screener who does not lean loses more rebounds on the ice.
- How a CARHA referee treats a stationary screener who is run into.
- How the label renders on a real phone or with a wider fallback font (headless Chromium at 400px only).
