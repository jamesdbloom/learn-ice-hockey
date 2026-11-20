# W554: "the bar as a brace" gets USA Hockey's arms-extended line, and two diagram text nits (20 November 2026)

## Rules question (W553(1)), answered by a read-only rules-verifier

The question: is leaning "the bar" (both hands on the stick, forearm and shaft) into an opponent a cross-check?

| Book | Rule text | Verdict |
|---|---|---|
| NHL | 59.1 (nhl_rules.txt :6511), "forcefully check" | Legal lean |
| IIHF | 59.1 (iihf_rules_2026-27.txt :5028), "forcefully check"; no Rule 59 situation | Legal lean |
| PWHL | 60.1 (:5497), "forcefully check" | Legal lean |
| USA Hockey | Casebook 609 Situation 2 (usah_casebook.txt :11815–11836) | Steering with two hands and "no extension of the arms" is not cross-checking; "if at any time the arms are extended and deliberate contact is made… a cross-checking infraction has occurred" |
| Hockey Canada | 9.2 (hc.txt :7221) has no force element; Interpretation 1 (:7242–7250) | A push "may not" need a penalty, but striking "must" be penalised |
| CARHA | Glossary (carha_2026.txt :318–320) has no force element | A lean may itself be a cross-check |

The verdicts for the NHL, IIHF and PWHL are readings of the definition; no book on disk rules on a lean.

**Overall:** the row was not permissive anywhere a reader would be penalised. Its soft spots were:
- it did not give USA Hockey's actual line, arm extension;
- it listed the lean as flatly legal under Hockey Canada.

## Edits to puck_handling (one agent)

**Legal cell, :521 (197/200).** "Leaning the bar in, arms bent, to hold your ground; …". It keeps the conservative non-checking clause, the Hockey Canada 7.3 moving-in limb, and CARHA's "keep it off them".

**Penalty cell, :521.** "Arms extended, driving the shaft in — **a cross-check**, a major and game misconduct under Hockey Canada and CARHA if it injures, and neither book needs force to call it".
- The first draft ended "but a Hockey Canada push is the referee's call".
- The safety-reviewer found that permissive: read aloud it cancels "neither needs force", it gives a player nothing safe to act on, and it is wrong where 7.3 bars checking.
- It was cut to the reviewer's sketch (C11 terminating case).

**Propagation:**
- :523 now reads "lean it in with your arms bent, never extended".
- The facts Technique line, :506, now reads "brace, arms bent, never a push" (199/200).

## Diagrams (one agent)

- **special_teams.mjs, pk-diamond alt text:** "applying checking pressure" became "applying pressure". The route tip was checked against the rest of the sentence.
- **defending_the_rush.mjs, rush-3-on-2-alternative comment:** "UNDECLARED PAIR" became "DECLARED PAIR", because the dependency is in `check_caption_pairs.py`. This closes W541(3).

## Review

| Reviewer | Findings | Result |
|---|---|---|
| rules-verifier (read-only) | Per-book verdicts above | Basis for the edits |
| safety-reviewer | One minor permissive finding: the Penalty-cell leniency clause. OK: "arms bent" as general craft (CARHA is covered by "keep it off them"); the rendered row (chunk 031); :523; facts :506. | Repaired to the sketch |

## Rows

**Closed:** W553(1), W541(3), and the "checking pressure" describe nit.

**New:**
- (1b) The USA Hockey interference limb for the bar.
- (1c) A sweep for the Hockey Canada push-leniency.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit. It includes check-arrivals (`scratchpad/build_w554.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`, puck_handling: 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: six books' cross-checking rules |
| D9 | Covered: table, paragraph and facts line changed together |
| D11 | Covered by the safety-reviewer |
| D12 | Covered: table rendered |
| D13 | Covered: the two diagram text changes |
| Others | Not engaged |

## What this method could not have found

- **How a referee treats a held, bent-arm brace in practice.** Hockey Canada and CARHA both leave it to the referee.
- **The interference and holding-by-stick labels applied to the bar.** Filed as row (1b).
