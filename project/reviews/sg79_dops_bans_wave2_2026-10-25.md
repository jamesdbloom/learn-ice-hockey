# SG79: England and Wales bans carried to the remaining pages (25 October 2026)

## Files

- content/off-the-ice/team_play_and_culture.md
- content/off-the-ice/mental_game.md
- content/systems/special_teams.md
- content/systems/defensive_zone_coverage.md
- content/systems/offensive_zone_play.md
- content/hockey-iq/playing_without_the_puck.md
- content/positions/goaltender.md
- content/positions/center.md
- content/positions/defender.md
- content/foundation/uk_rules.md
- content/foundation/rules_primer.md
- content/foundation/on_ice_communication.md
- content/getting-started/getting_started.md
- project/plans/OPEN_ITEMS.md

## What changed and why

SG76 put IHUK's DOPS Rules and Procedures 2026-27 bans on uk_rules, body_contact and rules_primer. A follow-up rules-verifier sweep then read every other page, and the C.2 tariff table in full. It found the old premise still in place: pages priced a British act at the IIHF in-game tariff alone. It took three shapes:

- a cost scoped to Britain that stopped at the game misconduct;
- a next-game cost named for USA Hockey or CARHA but not for Britain;
- "supplementary discipline" naming only the Elite League's body.

Two sites were WRONG in the cheaper direction:

- **mental_game KT11 and its Common Mistakes bullet:** a closed list left a slur out of "can bring a suspension". That is false under DOPS §8 and C.1, and under USA Hockey 601(e)(3).
- **team_play :407:** priced a British slur at the IIHF game misconduct alone.

## The fix

A deliberately short fix, following the owner's rules that shorter is better and that USA Hockey's 404(b) next-game rule is stated once per page:

- one body sentence per page;
- one Rule line in each page's key facts (coordinator ruling, after the 404(b) model);
- mandatory items only: the five C.1 acts and the C.2 late-fight row;
- discretionary "up to" bands appear only where a page already prices that act for a British reader, and only as "a panel can add games", never as a floor;
- scope throughout: "at a club in England or Wales, outside the Elite League".

## New content on uk_rules (the owner page)

- **DOPS penalty points** (Appendices D/E): a game misconduct is 4 points, a ten-minute misconduct 2, a major 1; 10 points is a one-game ban, 15 two, 20 three, with no appeal; 25 brings a hearing. Points carry over into the next season, except NIHL National, which keeps its own count and resets it each season (Appendices G and K). No page mentioned this before.
- **The slur** is now on the mandatory list.
- **Brevity:** body_contact's added slur sentence was cut, so that file is back to HEAD.

## Reviews

### Rules (rules-verifier, two passes)

**First pass.** Every sentence held against the source. The neck-guard example was verified: the In-House Rules 2026-27 give "an immediate 10-minute Misconduct Penalty". Six findings, each harsher or a simplification:

- "automatic suspension… decides the ban" where the rule is a provisional suspension that can be lifted;
- "the handshake line included" stated as fact, when C.2 says only "End of game";
- a slur ban extended to all taunts;
- NIHL National's own points count left out;
- "outside the Elite League" missing on on_ice_communication;
- plus the 25-point hearing, and a mild cheaper omission about carry-over.

**Second pass.** All verified, except three wording points, applied as C11 below.

### Safety (safety-reviewer, two passes)

**First pass:** no criticals.

- **M1:** the special_teams Common Mistakes bullet named only USA Hockey and CARHA for a next-game cost.
- **M2:** the key-facts layer carried no ban on 12 pages; the coordinator ruled for one facts line per page.
- Seven minors and brevity notes: merge team_play :401/:407; cut body_contact :816; tidy the grammar.

**Second pass: CLEAR.** The four special_teams mentions cover two acts, each stated once in the body and once in a summary layer, so they stay.

### C11: coordinator repairs after review

Applied in the reviewers' own terms:

- **uk_rules points:**
  - the NIHL National parenthesis now covers the reset and hangs after "carry into next season";
  - "no appeal" is attached to the automatic bans only, with the hearing separate.
- **uk_rules :413:** "at least a one-game ban too".
- **Six new facts lines:** "a head hit" → "a head check", matching C.1's "illegal head check" and the body wording.

### Mechanical checks

- Exit 0: check_facts (no pipe), check_links, check_absolutes, check_geometry, check_secrets, check_counts.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF across all 13 files.
- Full npm build after the last edit: exit 0. `check_callout_flow --bare`: 0.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1–D3 | rules-verifier, two passes, against the full DOPS text, usah 404/601/615, IIHF 39/43/49/51 and all four IHUK RoCs |
| D4–D5 | DOPS citations only; the file was registered and hashed in SG76 |
| D6 | The "IIHF writes no automatic suspension" negative re-swept in SG76; nothing new |
| D7 | Rules sentences only; no coaching claims |
| D8 | DOPS figures quoted with C.1's "starting maximum" qualification; points figures verified against the source tables |
| D9 | Inverse-propagation read by the safety-reviewer on mental_game, team_play, special_teams and goaltender |
| D10 | Seven new facts lines; each rules-verified and read voiced alone; `--near` run first; no separate facts-reviewer |
| D11 | CLEAR |
| D12 | Every changed unit rendered and read |
| D13 | None |
| D14 | Links pass |
| D15 | Build passes; bare-glyph check returns 0 |

## What this method could not have found

- **How DOPS applies its rules in practice:** which on-ice call triggers C.1; whether "End of game" covers the handshake line; how Appendix G's 5+GM line parses; whether NIHL and Junior regular-season points carry over (their RoCs mention only playoffs and Finals); and how Appendix J's under-16 warning interacts with C.1.
- **Pages outside this diff:** winger, risk_management, game_management and the low-priority rows in the plan may still price a British act without the ban.
- **Scope of IHUK's rules:** whether they reach Elite League fixtures.
