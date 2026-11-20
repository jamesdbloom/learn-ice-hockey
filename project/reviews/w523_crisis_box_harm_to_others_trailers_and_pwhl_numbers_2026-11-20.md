# W523: the crisis box reaches harm to others, project narration leaves the trailers, and the last bare PWHL numbers (20 November 2026)

## Scope

Three editing agents worked on files that did not overlap:

| Agent | Files | Rows |
|---|---|---|
| A | mental_game | W522(5) |
| B | rules_primer, language_and_glossary, winger, faceoffs | W522(3), W522(5) |
| C | team_play_and_culture, goaltender | W520(1), W520(4), W520(7) |

A safety-reviewer then read the whole diff.

## Results

### mental_game (agent A)

**The same-day tier.** §13's "In short" line, which is voiced alone, now ends: "…see a qualified professional, and straight away if it is so overwhelming you cannot function".

**Harm to others.** SMHRT-1's red flag reads "Comments related to harming self or others" (supp003 :57), under "seek immediate help". The corpus had carried only the self-harm half. The §13 bullet now reads: "Any thought of harming yourself or someone else, or of suicide. Get help now — this one is not a threshold to weigh up."

**The safety-reviewer's major.** The crisis box heading still read "If you are thinking about harming yourself or about suicide…". That excluded the reader the bullet had just sent there.
- **Repair.** The heading now names "harming yourself or someone else, or about suicide". The same wording went into Key focus :11, Overview :45, Common Mistakes :701 and KT1 :745.
- **What it does not claim.** The box's "Immediate danger — call your local emergency number… or go to your nearest emergency department" line serves that reader as written. No claim was added that Samaritans, SHOUT or 988 take calls about harming someone else; that is not verified and is filed as W523(4).
- **Rendering.** The bullet and the heading are spoken back to back, in chunk 034.

### Bare NHL-default numbers and the time-out quote (agent B)

**Changed**, each verified in `pwhl_rules.txt`, `nhl_rules.txt` and `iihf_rules_2026-27.txt`:

| Site | What it carries now |
|---|---|
| rules_primer :958, the 15-feet rule | NHL 76.2, PWHL 78.2; 4.5 m in IIHF 76.2 |
| rules_primer :1001, the scrum relocation | NHL and IIHF 76.2, PWHL 78.2 |
| rules_primer :758 and language_and_glossary :444, shorthanded icing (every book) | NHL and IIHF 81.6, PWHL 83.6 |
| winger :1019, Sources | Now says the PWHL's sub-rules differ below 52 too: head-butting's major is PWHL 47.2 against NHL 47.3 |
| faceoffs :874 | The time-out quotation is credited to the NHL 87.1 and PWHL 89.1 as printed. The IIHF prints "time-out" and "face-off" in inner quotation marks, so it now reads "the IIHF's 87.1 says the same" |
| faceoffs :862, facts | Gains PWHL 89.1 |

**Left on purpose:** rules_primer :325. Its sentence is scoped to "Under NHL rules", so the bare number is correct.

### Sources trailers (agent C)

**Project narration cut** (non-negotiable 6):
- team_play :739: "an earlier reading of this passage generalised the mask negative…".
- team_play :741: "was re-tested… and holds".
- team_play :749: "because the text previously priced it under USA Hockey alone".
- goaltender :1823: "An earlier reading of this passage recorded only the two Notes…". It now states the rule directly: the operative clauses are mandatory once their threshold is met.

**Kept:** the dates read, scope and provenance. The safety-reviewer confirmed no disclosure was stripped.

**A new factual error, found and fixed at team_play :749.** The trailer said IIHF 46.14 (2026/27) keeps 46.7's exception: "except when a game misconduct penalty is being imposed in the original altercation". It does not. 46.14 replaces it with a waiver the referee may grant, "in the referee's judgment" (`iihf_rules_2026-27.txt:4312`): an aggressor penalty is being imposed, and the player is intervening "to stop the ongoing altercation with an "unwilling combatant"".
- Each edition now has its own wording. After the reviewer's minor, the line reads "lets the referee waive".
- body_contact :1930 is the only other site quoting the old exception, and it dates it correctly to 2025/26.

**goaltender :1827.** The NHL 46.16, PWHL 46.15 and IIHF 46.7 quotations now run through "This rule also applies to subsequent players who elect to intervene…". They were verified verbatim. The trailer now matches the body at :1198.

**Not added: USA Hockey Casebook 615 Situation 6.** Its same-team carve-out is one book's permissive exception. Adding it beside a "do not go in" instruction would not change what most readers do.

## Review

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| safety-reviewer | none | 1 (crisis box heading) | 1 (46.14 waiver read as automatic) | Both repaired |

The safety-reviewer also spot-checked every rule number and quotation in the diff against the sources.

| rules-verifier (C4, after the first gate blocked on its absence) | none | none | none | Every changed rule claim VERIFIED against the staged text, with source lines. |

**What the rules-verifier read** (`git show :content/…`, the staged text):
- **Shorthanded icing** in all six books: NHL and IIHF 81.6, PWHL 83.6, USA Hockey 624(b)(1), Hockey Canada 6.7(b), CARHA 65(d).
- **The 15-feet rule:** NHL 76.2 :7965, PWHL 78.2 :6674, IIHF 76.2 "4.50m".
- **The scrum relocation:** NHL :7996, PWHL :6690, IIHF :6282 (2026/27).
- **PWHL 47.2 against NHL 47.3** (:4840 and :5880).
- **Time-out after a faceoff violation:** NHL 87.1 :9396 and PWHL 89.1 :7769 have no inner quotes; IIHF 87.1 has them in v1.0, v1.1 and 2026/27.
- **IIHF 46.7 (v1.1 :4164) against 46.14 (2026/27 :4308–4318),** including the waiver "in the referee's judgment". It also checked that 46.14 is the body rule, not the Appendix VII pilot.
- **The NHL 46.16, PWHL 46.15 and IIHF 46.7 quotations,** verbatim.

**Declared gap:** the British book scope of :749 and :1827. It did not check the EIHL Casebook for a third-man-in departure.

**Commit gate, first pass: BLOCK on C4.** No rules-verifier had run. One was run (above), and the wave was re-gated.

**C11.** The two repairs were not re-read. Each is confined to its finding and follows the reviewer's sketch.

## Rows

- **Closed:** W520(1), W520(4), W520(7), W522(3), W522(5).
- **New, From W523:**
  1. NHL-numbered lists that also cover the PWHL: faceoffs :166–182 and rules_primer §8.
  2. rules_primer :1019's time-out bar.
  3. Whether USA Hockey, Hockey Canada and CARHA have the 15-feet and scrum rules.
  4. Whether the crisis lines take calls about harming others.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: no change.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 7 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. Every changed number and quotation was checked, by agent and reviewer. |
| D2 exceptions | Covered: IIHF 46.7's exception against 46.14's waiver. |
| D3 cross-book divergence | Covered: the PWHL's numbering and the IIHF's time-out quotation marks. |
| D4/D5 citations | Covered: trailer quotations checked verbatim. |
| D6 negative existence | Not engaged. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: harm to others carried into all six mental_game layers. |
| D10 facts layer | Covered: faceoffs :862 within its cap. |
| D11 reader safety | Covered by the safety-reviewer. |
| D12 read-aloud integrity | Covered for mental_game (rendered, chunk 034). The trailers are not voiced. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: narration removed (non-negotiable 6); `check_links`. |
| D15 rendered site | Structural only. Chrome is not connected. |

## What this method could not have found

- **Whether the suicide crisis lines take harm-to-others calls,** and whether the emergency number is the right route for intrusive thoughts. Filed as W523(4).
- **Narration worded without the cues the agent scanned for.**
- **Other documents that repeat the self-only crisis wording.** Only mental_game carries a crisis box.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
