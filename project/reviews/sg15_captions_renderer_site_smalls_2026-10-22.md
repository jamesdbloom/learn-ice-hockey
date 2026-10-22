# SG15: diagram captions, renderer follow-ups, site asterisks, small content rows (22 October 2026)

## Changes

**Diagram captions** (site/src/diagrams/*.mjs; diagrams.json rebuilt, 204 diagrams)
- **Board posture shortened where inherited.** New shared constant `WALL_POSTURE_SHORT`: "Head up, chin off your chest, and take any contact on your forearm and hip, never the point of your shoulder." The negation comes last so it can't carry onto "head up", and "side-on" is never used.
  - **Shortened:** breakout-rim, breakout-reverse, breakout-against-1-3-1, forecheck-pinch, forecheck-press, puck-on-the-far-side. Each keeps "never turn your back to anyone coming at you" and "never duck".
  - **Kept in full:** scan-before-a-wall-reception and breakout-winger-wall, because their subject is the wall.
- **pp-umbrella:** names what the classic umbrella is.
- **pk-nz-1-3:** names the passive 1-3 and makes the same-side press its other version.
- **dz-collapse-corner:** drops the unfollowable "All six books are set out earlier".
- **oz-net-front-screen:** the amber run now opens on "Keep your feet out of the blue paint…", and the claims are unchanged.
- **the-puck-decides-not-you:** title is now "In most books the puck decides, not you". The stale comment is fixed.
- **Stale comments** fixed in breakouts.mjs and wall_contact_clauses.mjs.
- **winger-arriving-at-the-line:** no change. The caption makes no CARHA claim.

**Renderer** (scripts/md_to_speech.py)
- Sentence-initial rule numbers are now capitalised. The frozen-snapshot old/new diff shows 185 changes, case-only, 0 unexplained.
- Chunk and billed-character totals are identical.
- HC 2.2(i) was already correct: hc 2.2 is lettered (h)(i)(j), so "clause i" is right.
- Self-test: 284 assertions; the 2 failures existed before.

**Site**
- 27 literal `*` on 14 pages are down to the 3 intended footnote asterisks (uk_rules, conditioning).
- Cause: an inner `*"…"*` closed a trailer's outer italic. Fix: `_"…"_`, plus two unpaired stars removed. This is markup only, in Sources trailers that are not voiced.
- Trailers now render italic again; HEAD rendered long stretches upright.
- `.basics-ep__meta` gets `white-space: nowrap`.

**Content (small rows)**
- **practice_and_development :360/:382:** adds the facing-the-wall fallback; "if you can see the numbers on their back, don't hit them — pull up and play the puck"; owner boards wording.
- **scanning :380 (facts, 198/200), :390, :393:** the same plain pull-up instruction.
- **team_play :133:** link retargeted to rules_primer `#the-consequences`.
- **equipment :173:** already fixed (244ea01).
- **game_management :244:** the full-ice press is framed as a bench call, with its odd-man-rush cost; :946 amber opens on the quoted 640(g) price, not the citation.
- **offensive_zone_play trailer:** cites USAH 614(c)(1), Casebook 614 Sit. 6, and HC Interp 3 to 10.1(a) clauses iv–v, verbatim.
- **time_and_space :83 (facts):** reordered so "never the point of your shoulder" comes last (safety-reviewer minor; reorder only).

## Reviews

- **rules-verifier: all hold.**
  - OZP trailer quotes are verbatim against hc.txt, identical to the print file for that passage.
  - oz-net-front-screen: "can cost you the zone" is acceptable (USAH 625(b) mandatory with conditions; IIHF 69.1 discretionary).
  - The "In most books" title holds.
  - CARHA 72(c) Note 1 is two-way, but the same wording in HC 6.11(a) is ruled offside for an airborne skate by HC's added sentence. So rules_primer :1038 "assume contact is required" stands.
- **safety-reviewer: CLEAR.** Its brief covered (A) every changed caption and its hosts, and (B) the content edits: practice_and_development :360/:382, scanning :380/:390/:393, game_management :244 and :946, and the trailer markup. Every demoted caption's host carries the full posture where wall play is taught. One minor fixed: the time_and_space :83 inversion risk.
- **site-reviewer (headless Chrome via CDP; extension unavailable): PASS.**
  - 0 literal `*` on the 12 target pages; trailers 97.5–100% italic.
  - The Basics meta doesn't wrap at 320–1440.
  - All 11 changed captions are live; the amber runs form as intended; the accessible name has updated.
  - Console clean.

## Gates (after the final edit, no pipe)

- check_facts, check_links, check_absolutes, check_geometry and check_secrets pass.
- check_marker_pairs: 17 files, 0 LOST.
- check_counts: no change.
- md_to_speech --dry-run exits 0.
- `npm run build` exited 0 after the final edit.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier |
| D5, D6, D8, D13 | Out of scope |
| D7 | ✓ The press is framed as a bench call; umbrella and 1-3 versions are named as choices |
| D9 | ✓ Caption hosts were layer-tested by safety-reviewer |
| D10 | ✓ Caps respected |
| D11 | ✓ safety-reviewer CLEAR |
| D12 | ✓ Hosts rendered; renderer diff fully explained |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS |

## Still open (into the plan)

- **Pull-up wording:** two wordings now coexist ("see the numbers on their back" in 2 files; "see their numbers" in about 18). Both are safe; consistency only.
- **puck-decides caption:** the HC "also counts where you are" limb is ambiguous (10.2(a)(v) vs 4.11(a)(v)). Needs a rules look.
- **Captions:** winger-arriving-at-the-line carries the full posture for a blue-line stand-up; puck-on-the-far-side has page-about-itself text; pinch and press captions are still about 2,850 chars, mostly the 604 tariff.
- **OZP :833:** clause v "no warning" omits clause ii's cut-the-angle save exception. Optional; the cost falls on the opposing goalie.
- **rules_primer :1038:** "CARHA does not say" → "does not settle". Optional.
- **breakouts.mjs rim comment:** says it is voiced into goaltender.md; it is not (only the reverse is).
- **Renderer:** about 340 other lower-case sentence starts remain (list and heading numerals, formations, quantities). These are cosmetic.

## What this method could not have found

- Real phones, other browsers and the theme toggle; audio as synthesised.
- Whether "take any contact on your forearm and hip" without "skates parallel" changes what a young player does.
