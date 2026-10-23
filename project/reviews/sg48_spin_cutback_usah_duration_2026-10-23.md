# SG48: spin and cutback limits, the USA Hockey contact-with-puck limit across layers, and the "(so Britain)" check (23 October 2026)

## What changed

**Spin and turn-back moves.** The settled limit is: spin only off a checker already leaning on you, never off one still coming at you, whatever their speed.
- **winger.md :129:** the wall-protection bullet's "spin out toward the middle" now carries the limit.
- **puck_handling.md :441, :584 (facts "Options:"), :596:** the unlimited "spin to the middle" now carries it.
  - :452 and :1048 are left as they are. They already gate the move on "a checker on you", and "low-speed battle" only narrows it further. The safety-reviewer upheld this.
- **skating.md :798 (facts) and :807 (body), the cutback / escape turn:**
  - Now "turn before they can reach you, never to face the wall with them behind you". In the body: "Once they can reach you it is too late to turn: go side-on and take it on forearm and hip".
  - The first draft ("never show your back to one still coming at you") cancelled itself. The move exists to beat a checker who is still coming, and review caught it.
  - The wording follows the owner, body_contact :877.

**USA Hockey "contact with the puck"** (Glossary: the last player to touch the puck "is NOT eligible to be body checked and/or engage in competitive contact"; "Possession of the Puck" likewise)
- **body_contact :304:** "Under USA Hockey and the IIHF you may lean too — but under USA Hockey, not on a player who has dumped, passed or shot it: until someone else touches the puck, they are ineligible for that contact."
- **forechecking :639:** "Under USA Hockey, stop leaning as soon as they rim or pass it, and stay off until someone else has touched the puck: until then they are ineligible for that contact."
- **The first drafts said "has just"**, which implied a short window. The rule has no time limit.
- **Left as they were:** body_contact :296 (facts; "both playing the puck" excludes a player who has released it), :449, and OZP (no USAH leaning claim).

**"(so Britain)" at breakouts :547: VERIFIED, no change.** No British document on disk amends 81.4 or 87.1:
- the In-House Rules 2026-27 and 2025-26 (Appendix 1: "Penalties, player eligibility, and substitutions continue per the Playing Rules");
- the EIHL Casebook (no Rule 81, 82 or 87; its Preamble sends everything else to IIHF 2026/27);
- the NIHL, WNIHL, Junior and U10 Rules of Competition, and eih_rr.

Both IIHF editions carry the bans. The only British carve-out is U12/U10 (no icing), which :545 already states.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules | rules-verifier (×2) | **"(so Britain)":** VERIFIED (sources listed above); one minor elsewhere, team_play_and_culture KT :708 (plan row). **USAH limit:** VERIFIED but incomplete, because the status lasts until another player touches the puck (fixed), and "Possession of the Puck" also applies. **IIHF half:** no IIHF ineligibility limb (56.1 makes last touch checkable for a window; the late hit is 56.2(III)). |
| Safety | safety-reviewer (two passes) | **Pass 1:** spin limits UPHELD (IIHF 43.1 / NHL 41: a turn immediately before a check is weighed against the turner). Leaving :452, :1048, :771 and :779 UPHELD. One MAJOR: the skating cutback limit cancelled itself (fixed). One minor: forechecking "Stop" antecedent (fixed). **Pass 2:** CLEAR. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on 5 files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the rules-verifier |
| D4–D5 citations | Checked: USAH Glossary quotations |
| D6 negative existence | Checked: no British amendment to 81.4/87.1 (true negative across every British file on disk); no IIHF ineligibility limb |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: spin limits in body and facts across three pages; skating KT4 judged not to need it |
| D10 facts | Checked: skating :798 (181/200) and puck_handling :584 read correctly voiced alone |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Not rendered |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links and check_absolutes |
| D15 rendered site | Build passes. No visual pass. |

## What this method could not have found

- The wall cutback taught without a timing gate on OZP, center and puck_handling :609/:620. Now a plan row; brief it as a claim.
- Turn-back moves worded as "pivot", "curl" or "reverse direction".
- Documents not on disk (IHUK Officiating Guidance, Rule Bulletins, in-season EIHL updates).
