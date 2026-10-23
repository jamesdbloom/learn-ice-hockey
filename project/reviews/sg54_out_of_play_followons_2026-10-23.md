# SG54: out-of-play follow-ons, covering the goalie limb on two more pages and the deliberate kick (23 October 2026)

## What changed

- **switching_positions :317 (facts):** "its direct limb 10.1(v) names the goalie alone" omitted CARHA. Now: "Hockey Canada 10.1(ii) and CARHA 75(b) are deliberate-only for skaters, but their goalie limbs 10.1(v) and 55(a) have no intent word, so a goalie should expect the minor". :315 cites IIHF 63.2(II).
- **breakouts :529 (facts):** removes the back-pointer ("writes no such minor") and is scoped "For a skater": USA Hockey 610(c), HC 10.1(ii) and CARHA 75(b) penalise only a deliberate shoot-out.
- **breakouts :530 (facts):** "Only the accidental one is zone-limited" was untrue for the goalie limbs. It now reads "has no intent word and no zone limit, so expect the minor anywhere", and cites IIHF (II).
- **Deliberate kick:** only the NHL and IIHF deliberate limbs name the foot.
  - **rules_primer :545** now says every book can reach a deliberate kick through a general delay rule: PWHL 65.2(i), HC 10.1(a); team bench minors under CARHA 55(a) and, after a warning, USA Hockey 610(g).
  - **risk_management :383** becomes shorter (1,264 → 1,012 chars) and leads with "**Do not kick it out instead.**"
  - **risk_management :385's** bold opening is now "do not kick the puck over the glass, even when blocking a shot or pass". An interim wording, "do not clear your own zone with your skate", narrowed Situation 63.19 (no zone) in the permissive direction; the reviewer caught it.
- **special_teams :761:** left unchanged. The author rendered it and the goalie limb follows in the same chunk.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules (C4) | rules-verifier ×2 | **Pass 1:** all VERIFIED. Main finding: USA Hockey 610(g) (bench minor after a warning, "attempts to delay the game in any manner") was missing, so a USA Hockey reader could take a deliberate kick as unpriced. Also breakouts :530 "zone-limited" was wrong for the goalie limbs. Both applied. **Pass 2:** :383, rules_primer :545 and breakouts :530 CLEAR. One finding at :385: the own-zone scope is permissive for 63.19. Fixed by the coordinator with the reviewer's suggested shape (drop the zone; cover the block). |
| Safety (C6) | safety-reviewer | CLEAR with renders (breakouts :529/:530 are consecutive `<p>` in one chunk, so the goalie warning reaches a listener). Minors: the USA Hockey reason was missing in rules_primer, and the :383 length. Both applied. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_secrets, check_counts and check_links all exit 0. check_marker_pairs on 4 files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | rules-verifier ×2 |
| D4–D5 citations | Every quotation in :383 is verbatim (rules-verifier); 610(g) is cited from the rule text, not the Casebook (stale letters) |
| D6 negative existence | USA Hockey "no kick in 610(c)" swept in both volumes; replaced by a positive 610(g) claim |
| D7, D8, D13 | Out of scope |
| D9 summary layer | Layer-tested within each file by the author |
| D10 facts | Caps checked; read voiced alone |
| D11 safety | safety-reviewer |
| D12 read-aloud | Rendered by the safety-reviewer |
| D14, D15 | check_links; build |

## What this method could not have found

- No book has a situation ruling on a deliberate kick out under its general delay rule, so "can reach" is a reading.
- Whether 610(g)'s warning governs its "in any manner" clause.
- Whether the IIHF treats 63.19 as zone-limited in practice.
- The final :385 wording ("even when blocking a shot or pass") is the coordinator's application of the reviewer's suggested shape. It was not re-read by the reviewer.
