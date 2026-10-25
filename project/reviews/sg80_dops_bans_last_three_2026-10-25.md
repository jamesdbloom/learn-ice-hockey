# SG80: England and Wales ban on the last three pages (25 October 2026)

## Files

- content/positions/winger.md
- content/hockey-iq/risk_management.md
- content/systems/game_management.md
- project/plans/OPEN_ITEMS.md

## What changed

These are the three pages the SG79 record named as still uncovered. Each gets the SG79 wording that bd48adc already verified and committed:

- **Body:** one sentence on each page, at that page's own IIHF statement of checking from behind.
- **Facts:** one Rule line on risk_management and on game_management.
- **Winger facts:** skipped. Both of winger's from-behind blocks are at HARD_MAX (14/14), so the ban is stated in the body only.
- **game_management:** uses the C.1 form, because the page never prices a fight. Its late-hit block is full, so the facts line sits in "What doesn't work", next to the 404(b) line.

## Reviews

| Dimension | Reviewer | Result |
|---|---|---|
| Rules | rules-verifier | All 5 units verified against DOPS §5, §11 and C.1, and against IIHF 41.3, 43.2, 43.3 and 48.3. The game_management sentence names checking from behind, a check to the head, and boarding. It does not attach the ban to a late hit, which C.1 does not list. |
| Safety | safety-reviewer | CLEAR. Scope and cost reach the listener in the same unit, so nothing reads cheaper and nothing is overstated. check_marker_pairs: 0 LOST. Winger CM :793, :556 and KT10 carry only the in-game cost, which is not a gap. |

Both reviewers note the same two points carried over from SG79, neither blocking:

- the under-16 Appendix J warning route is not stated on single-sentence sites;
- the C.1 trigger is a disclosed reading.

## Mechanical checks

- check_facts, check_links, check_absolutes, check_geometry, check_secrets and check_counts all exit 0.
- Full build exits 0, with 0 bare glyphs.

## Dimensions

| Dimensions | Status |
|---|---|
| D1–D3, D11, D12 | Covered above |
| D4–D5 | No new citation |
| D6–D8, D13 | No such claims |
| D9 | The safety-reviewer read winger's Common Mistakes and KTs |
| D10 | Two facts lines, each verified and read voiced alone; no separate facts-reviewer |
| D14–D15 | Links pass; build passes |

## What this method could not have found

- Other passages in the three files that discuss boarding or head contact for a British reader without the ban (one statement per page by design).
- How IHUK actually triggers C.1.
