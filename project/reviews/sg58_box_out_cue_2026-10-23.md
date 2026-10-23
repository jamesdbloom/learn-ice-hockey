# SG58: the box-out cue, "body beside", not "body on" (23 October 2026)

## What changed

- **Corner wording sweep.** The agent read body_contact, defensive_zone_coverage, winger, center and goaltender for any remaining active "take/send a body toward the corner". None was left (SG57 had covered goaltender and defender). Angling a puck carrier "toward the wall" is a different, legal claim, and was left.
- **defensive_zone_coverage :535 (box-out).**
  - **Old:** "eyes on the puck, body on the man … take the inside position on the body in front of you and hold it". There was no no-push limit, and "body on" is the act CARHA 49(a) prices ("does not avert body contact").
  - **New:** "body beside the man … get to the inside of the player in front of you and hold that spot — no lean, no push, and in a CARHA game hold it without putting a body on them at all". The CARHA limb uses goaltender :1382's wording, because the interim "no body on them" sounds like "nobody on them" when voiced; the reviewer caught it.
- **defensive_zone_coverage facts :526.** It now carries the limb: "box out the man — hold the inside, no lean, no push, never walk them off it".
- **body_contact_and_battles facts :1367** ("body on the player" → "body beside the player") and **step 5 :1384**.
  - **Step 5 old:** "body on the player. Feel them; watch the shot."
  - **Step 5 new:** "body beside the player. Know where they are without turning your head; watch the shot."
  - The wording matches KT10 and the redrawn diagram.
- **goaltender :1361 In short.** "keep skates down" did not say whose skates. It now reads "keep their skates on the ice", matching :1383.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, rendered (DZC chunk 034, BCB 117/118, goaltender 098–130) | CLEAR. Every edit swaps a contact cue for a position cue; stricter, never looser. Verified CARHA 49(a)–(d) and 66(a) Note 2, HC 7.3 (scope) and 8.3(i) verbatim. **Minors:** the "no body"/"nobody" misreading, and facts :526 lacking the limb. Both applied using the reviewer's sketches, as was the optional "without turning your head". **Tactical cost noted:** the touch cue ("feel them") is gone for checking leagues. This is a small loss, accepted for one cue across every book. **Caption** net-front-walk-out-direction: no "corner" remains; prohibition only. check_marker_pairs: 0 lost. |
| Rules (C4) | not dispatched; commit-gate re-derived | One CARHA-scoped rule limb was added at DZC :535 ("in a CARHA game hold it without putting a body on them at all"). Its wording is reused from goaltender :1382. The gate checked it against CARHA 49(a) in both editions ("stands in front of an opponent for the purpose of making contact, and/or does not avert body contact"), and a flattened search confirmed CARHA is the outlier: USAH's Glossary says no player must move to avoid contact. No other rule claim changed. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_secrets, check_counts and check_links all exit 0. check_marker_pairs: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 | No rule claim changed |
| D4–D8, D13 | Out of scope |
| D9 summary layer | Box-out claim tested in body, facts and KT across DZC and BCB |
| D10 facts | :526 at 185 characters; :1367 within cap |
| D11 safety | safety-reviewer |
| D12 read-aloud | Rendered; the homophone was found this way |
| D14, D15 | check_links; build |

## What this method could not have found

- Whether a no-contact box-out loses more rebounds on the ice.
- The attacker's "body on the player" at BCB :1264/:1277 (plan row).
- Documents not opened (defender embeds the same diagram).
