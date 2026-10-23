# SG55: Heads Up, Don't Duck attribution, IIHF limb capitals, breakouts goalie escapes (23 October 2026)

## What changed

- **Heads Up, Don't Duck attribution.** The page at hecc.org/headsup.html (now /safety-guidelines/heads-up-dont-duck/) is a brochure that HECC reproduces. The Massachusetts Medical Society distributes it, and Dr Alan Ashare is named as the contact; no author byline is printed.
  - **skating :1046 and body_contact_and_battles :2139** credited HECC as the author. They now read "the programme brochure HECC's site reproduces, distributed by the Massachusetts Medical Society". "All three bodies" became "all three sources".
  - **The 1995 date** (body_contact :881, unchanged) was suspected of lacking a source. It is sourced: Look Up Line's page (already in Sources) says "In 1995, Dr. Alan Ashare started the Heads Up, Don't Duck Program", and so does the programme's own archived /about/ page (Wayback 20161022195131). The trailer at :2125 now says so.
- **IIHF 63.2 limbs in capitals.** The IIHF writes 63.2(I)…(X). "NHL and IIHF 63.2(ii)" became "NHL 63.2(ii), IIHF 63.2(II)", and so on, at:
  - on_ice_communication :143, :517, :519
  - playing_without_the_puck :354, :372
  - game_management :114, :141, :1194
  - defensive_zone_coverage :828
  - special_teams :739, :777, :991
  - defender :78, :767, :1006

  Two defender facts lines (:79, :215) stay as "NHL and IIHF 63.2(ii)/(i)". The compact slash form fitted the cap, but the coordinator rendered it and it voiced as "clause two or clause two", so it was reverted.
- **breakouts :530 (facts).** "So expect the minor anywhere" overstated the goalie stick-clear limb: HC Interpretation 5(i) and CARHA 55 Note 1 exempt a puck that touches the glass or deflects off a player or official. It now reads "has no intent word or zone limit: expect a minor unless it touches glass or a player".
  - The sweep agent's "deflects" was unscoped, so it read as permissive for a deflection off the frame; both reviewers flagged it. The coordinator's same-length fix is "or a player", which omits "official" (harsher).
  - The no-glass spot and HC 5(ii) (both ends similar) are omitted, also harsher.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Sources (C5) | source-verifier | Refetched hecc.org (200, 76,659 bytes, redirect on the same site, not a soft-404) and lookupline.org (200). headsupdontduck.org has no DNS record, so the Wayback copy was used. The cushion quotation and the 1995 sentence were both located in the rendered text. |
| Rules (C4) | rules-verifier | Every NHL→IIHF limb mapping VERIFIED: (I), (II), (V) and (VI) carry the same Notes; the IIHF's own index and Situation 63.1 use capitals. on_ice :517's Hockey Canada Interpretation 3 checked. breakouts :530 VERIFIED, with one permissive gap ("deflects" unscoped), fixed as above. HECC lines carry no rule claim. |
| Safety (C6) | safety-reviewer, with renders of all 9 documents | CLEAR. The HECC lines are in the unvoiced trailer. The cushion instruction and the shoulder hedge still reach a listener from the body, at :913 / chunk 084. The citation case changes alter no claim. breakouts :530 is better than HEAD, with the same "deflects" minor, now fixed. check_marker_pairs on 9 files: 0 lost. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_secrets, check_counts and check_links all exit 0. check_marker_pairs: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | rules-verifier |
| D4–D5 citations and provenance | source-verifier (HECC, Look Up Line, Wayback) |
| D6 negative existence | The "1995 date is not on that page / find its source" premise was refuted: the source is already in Sources |
| D7, D8, D13 | Out of scope |
| D9 summary layer | The HECC claim lives in the trailer and the body; the body wording at :913 ("HECC's page asks") is true and was left (plan nit). |
| D10 facts | Caps checked (`--near`); breakouts :530 at 296/300 |
| D11 safety | safety-reviewer |
| D12 read-aloud | Rendered by the safety-reviewer and the coordinator (the slash form was rejected for how it reads aloud) |
| D14, D15 | check_links; build |

## What this method could not have found

- Whether the brochure's original printing credits an author.
- Other IIHF limbs still in lowercase. These are listed in the plan, and none is a rule error.
- How the Elite League Casebook treats 63.2: it was not read for this cosmetic sweep.
