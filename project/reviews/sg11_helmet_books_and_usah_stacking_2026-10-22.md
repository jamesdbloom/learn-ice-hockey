# SG11: helmet grabbing in the NHL/IIHF/PWHL; USA Hockey stacked suspensions (22 October 2026)

**Origin.**
- The plan row [team_play helmet: NHL/IIHF/PWHL], raised by SG10.
- The SG9 follow-up: check the "in addition to any other required suspensions" sites (615(f), 403(b)).

## Changes

| File | Change |
|---|---|
| team_play_and_culture.md :283 | One sentence added to "Hands off an opponent's head.": "The NHL, IIHF and PWHL penalise it too: usually a minor, a major and game misconduct in the PWHL for grabbing a helmet, cage or chin strap, and it can go higher in all three if it is violent or hurts them." The trailer quotes NHL/PWHL and IIHF 9.6 (attributed separately), 51.1/51.2, NHL 75.2(ii), IIHF 75.2(II) Note, PWHL 51.3, 51.5 and 21.1, and records that PWHL 77 has no face-mask clause. |
| body_contact_and_battles.md facts :1912, :1914; body :1927, :1928 | USAH Casebook 615 Situation 14: the match for deliberately removing your own helmet in an altercation is now stated "on top of any other penalty from the altercation and whether or not a fight is called". The old line quoted "Fighting penalties do not have to be assessed" without the preceding "in addition to any other penalties", so heard alone it could sound like a replacement. The 615(c) two-game suspension is now "on top of any other suspension from the incident" (usah.txt 615(c)). |
| faceoffs.md :306, forechecking_systems.md :663 | The USAH 403(b) trigger said "if you had already taken a major that game", which is harsher than the book. It now reads "if it comes with your second major of the game", matching each file's own facts line. |

## Reviews

- **Census (rules-verifier, report only).**
  - Read every USA Hockey stacking clause: 403(b), 404(b), 615(c), 615(d), 629(a), 634(d), 410, 411 and 615(f), the last of which has none.
  - Read every corpus site that cites them. No site says a suspension is the whole cost.
  - One permissive ambiguity (body_contact Sit. 14) and two harsher trigger misstatements (faceoffs, forechecking), all fixed above.
  - 615(f) "three-game suspension" is left as the book words it, because the book does not say whether it stacks with 404(b).
- **team_play rules-verifier.**
  - Confirmed every limb of the first draft.
  - F1: PWHL prices the act twice (9.6/51.2 minor for removal; 51.3/51.5 major+GM for grabbing), and the draft gave the cheaper reading.
  - F2: no PWHL tier for advantage/punish except 21.1 (deliberate injury).
  - F4: trailer quotation attribution.
  - Rewritten shorter (about 190 chars, replacing about 330). The re-read holds, "cage" included (PWHL 9.7: "cage facial protection").
- **safety-reviewer (fresh).**
  - body_contact/faceoffs/forechecking: CLEAR, rendered (facts :1912/:1914 stand alone). Optional "deliberately", applied.
  - team_play: CLEAR. Nit: "at least a minor" is stricter than IIHF 51.2 ("at their discretion") and than the in-fight helmet carve-outs (NHL 46.6, IIHF 46.12). Changed to "usually a minor".

## Gates (after the final edit, no pipe)

check_facts, check_links, check_absolutes and check_secrets pass. check_marker_pairs: 4 files, 0 LOST. check_counts: no change. `npm run build` exited 0 after the last edit, and check-links is clean.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier ×2. Every quotation in the trailers is verbatim. |
| D5, D6, D8, D13 | Out of scope. |
| D7 | ✓ Rule text only. |
| D9 | ✓ Layer tests run in each file. team_play KT12/CM :651 name only USA Hockey's harshest price without saying it is the only one, so they are left as they are. |
| D10 | ✓ Facts :1912 and :1914 are within the 300 cap; no block size changed. |
| D11 | ✓ safety-reviewer CLEAR. |
| D12 | ✓ body_contact rendered; the new facts lines make sense heard alone. |
| D14 | ✓ Shorter text, as the owner wants. |
| D15 | Prose and facts text only, with no layout change. The build passed. No site-reviewer pass. |

## Still open

- Whether "during play" in NHL/IIHF/PWHL 9.6 reaches a handshake line after the final buzzer. NHL 75.1 covers "before, during or after the game". Not resolved; the bullet avoids the question.
- Whether USAH 615(f)'s three games stack with 404(b)'s next game. The book does not say.

## What this method could not have found

- A prose summary of "the cost of a fight" with no rule number or game count. The census keyed on numbers.
- A league bulletin or casebook not on disk (there is no PWHL casebook).
