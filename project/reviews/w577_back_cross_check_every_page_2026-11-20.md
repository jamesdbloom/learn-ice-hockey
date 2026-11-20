# W576–W577: a cross-check into the back priced as the checking from behind it can be, on every page, with one USA Hockey clause (20 November 2026)

## W576 census (safety-reviewer, read-only)

The W575 finding was that a cross-check into a player's back can be called checking from behind in every book (record `w575_back_cross_check_and_carha_charging_2026-11-20.md`). The census looked for pages that still priced the act only as cross-checking, implying a minor:

| Severity | Site | What it said |
|---|---|---|
| Critical | goaltender :1660 | "Repeated cross-checks to the back put your team down a man" |
| Major | on_ice facts :589 | An NHL minor for moving a screener |
| Major | goaltender :1310 | "Two minutes at the least" |
| Major | defender :942 and CM :1024 | The cross-checking ladder only |
| Minor | on_ice :588, glossary KF :26, game_management :429, defender :329 | — |

Winger's "a cross-check is at least a minor" units never mention the back. They are filed for judgement as W576(1).

## W577 edits (five agents; brief `scratchpad/w577_common.md`)

**The added clause** is "into their back it can be called checking from behind instead". It covers:
- **NHL, PWHL and IIHF:** no minor (43.2).
- **CARHA:** a game misconduct even at the lowest rung, and the 53 Note bars any other call.
- **Hockey Canada:** a moving defender is called for checking from behind (7.5(a)).

**Sites:**
- **goaltender :1660:** the "down a man" line is replaced with "Never put the shaft into a screener's back: …".
- **goaltender :1310:** the clause is added.
- **on_ice:** facts :588 and :589. In :589 the non-safety "emphasis, not frequency" clause was dropped; it is still carried in body_contact. A body paragraph at :621 was found by the agent and fixed.
- **defender:** :942, CM :1024, and :329 ("which no book prices at a bare minor").
- **language_and_glossary:** KF :26.
- **game_management:** :429.

**The USA Hockey clause, made consistent on every page, including DZC from W575.** The safety-reviewer ruled that the two wordings in use, "once it is forceful (608)" and the 608(a)/(b) pricing, were each half true. The single clause now reads:

> "under USA Hockey, once it is forceful enough to be a check from behind (Casebook 609, Situation 2), at least a minor and a misconduct, a major and game misconduct if reckless or head first into the boards or goal frame, and a match if reckless with excessive force (608)"

- defender, goaltender and on_ice say "ending your game" for the 608(b) tier.
- DZC keeps 608(c)'s vulnerable-or-defenceless condition.
- A first DZC draft said "a game misconduct" for 608(b). That omitted the major and was repaired.
- defender said "goal frame" only, and was aligned to "boards or goal frame".

## Review

| Pass | Reviewer | Findings | Result |
|---|---|---|---|
| Census | safety-reviewer | As above | Basis for the edits |
| Edit review | safety-reviewer | Both USA Hockey wordings true but incomplete. Defender omitted 608(c) (permissive). Goaltender and on_ice gave no USA Hockey price. :329 "no bare minor" is true. Everything else accurate. | One clause applied on five pages |
| Re-read | safety-reviewer | DZC "a game misconduct" understated 608(b)'s major (permissive). Defender's "goal frame" was narrow. | Both repaired |

## Rows

**Closed:** W572(5).

**New:** W576(1), the winger floor statements.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_links --quiet`: exit 0 (also re-run after this record was written).
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w577.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost in every file.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: NHL, PWHL and IIHF 43; Hockey Canada 7.5 Interpretation 1; CARHA 53 and its Note; USA Hockey 608 and Casebook 609 Situation 2 |
| D8 | Covered: one USA Hockey clause across six pages |
| D9 | Covered |
| D11 | Covered by the safety-reviewer |
| Others | Not engaged |

## What this method could not have found

- **Units that describe a shaft into the back without the word "cross-check".**
- **Audio.** The lengthened units were not rendered.
- **Diagram captions.**
