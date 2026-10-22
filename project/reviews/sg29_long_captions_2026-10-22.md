# SG29: nine long diagram captions cut (22 October 2026)

## Why

Captions are read under the picture and voiced into every host page. At 1,700–2,800 characters they were too long to read beside a diagram or to follow aloud, and most of their rule detail already sat in the host's body or facts a chunk or two away.

## What changed (built lengths, site/src/data/diagrams.json)

| Caption | Module | Old | New |
|---|---|---|---|
| defender-step-up | defender.mjs | 2,806 | 956 |
| breakout-wheel | breakouts.mjs | 2,670 | 1,000 |
| oz-net-front-screen | offensive_zone_play.mjs | 2,617 | 1,496 |
| winger-offensive-zone-patches | positions.mjs | 2,555 | 986 |
| icing-the-race-and-the-dot | rules_primer.mjs | 2,440 | 1,673 |
| the-privileged-area | rules_primer.mjs | 1,801 | 1,071 |
| angle-into-the-corner | body_contact_and_battles.mjs | 2,311 | 1,536 |
| inside-lane-longer-route | body_contact_and_battles.mjs | 1,767 | 865 |
| shot-block-get-close | body_contact_and_battles.mjs | 1,785 | 1,487 |

The method, for each caption:
- Every host was found with check_caption_hosts and rendered with md_to_speech.
- A limb was dropped only where every host voices it within a chunk or two. Otherwise it was kept.
- Each module carries a comment recording what was dropped and where the host voices it.
- No shared constant was edited. Imports left unused by a cut were removed.

Captions above 1,000 characters keep limbs a second host does not voice nearby:
- the CARHA crease ban and the crease-line clause (oz screen);
- the full receiving posture and the USA Hockey/CARHA automatic-icing scope (icing);
- Case 3 of the corner posture (skating.md);
- "commit fully or get out of the lane" (defender.md).

## Rule fixes made along the way

- **breakout-wheel.**
  - It called a standing screen legal under the IIHF. IIHF 56.2 says the minor "shall be assessed", and the host page already said not to count on it. The caption now agrees.
  - "The major is mandatory if it injures" now reads "a major and a game misconduct". Sources: Hockey Canada 8.3(b) second paragraph; CARHA 66(e) with 30(a), under which every major is ruled off for the game.
- **icing.** USA Hockey 624(d) penalises any unnecessary contact on an obvious icing, not only contact into the boards.
- **privileged area.**
  - 614(c)'s trigger is where the puck is.
  - The inside-the-area triggers (c)(2) and (c)(4) were added.
  - The other books "draw no such area".
- **oz screen.** The rec-league hedge was shortened to "Other rec leagues may be stricter still".
- **Source comments.** Two cited superseded copies (carha.txt and hc_2026-08-print.txt); both now cite the current books.

## Reviews

- **safety-reviewer (contact and icing captions): CLEAR.** Every dropped limb is voiced within one or two chunks in each host. All new wording was checked against the books:
  - "and at any speed";
  - the free-hand instruction;
  - "two strides is a safe harbour in no book";
  - jumping as charging in all six books;
  - the icing boarding limb, with PWHL 41.1 added.
- **rules-verifier (all captions):** found one point in the cheaper direction (the Hockey Canada game misconduct) and several cautious-direction or wording points. All were fixed. Re-read CLEAR, including CARHA 30(a), HC 8.3(b), the 41.1 boards clause in four books, USAH 624(d), and 614(c)(1)–(4).
- **site-reviewer (9 pages × 3 widths × 2 themes, headless Chromium): PASS.**
  - All nine captions match diagrams.json exactly on all 13 host instances.
  - 54 caption ⚠️, all in warn-inline.
  - No overflow (breakout-wheel scrolls inside its own diagram box at phone width, as designed). Console clean.

## Gates (after the last edit)

- Diagram build exit 0 (under lock).
- `npm run build` exit 0.
- check_absolutes passes (408 units).
- check_callout_flow --bare: 0.
- check_facts and check_links pass.
- No content/ file changed.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier and re-read |
| D5, D6, D8, D13 | Out of scope |
| D7, D9 | ✓ Host-by-host limb trace per caption |
| D10 | N/A (no facts lines) |
| D11 | ✓ safety-reviewer CLEAR |
| D12 | ✓ Hosts rendered |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS |

## What this method could not have found

- A dropped limb voiced nearby in different wording (kept unnecessarily; safe), or a nearby copy with a different scope.
- Chunk distances drift as host pages change. If a host's nearby body or facts line is later cut, a dropped caption limb loses its near carrier, and nothing would flag it.
