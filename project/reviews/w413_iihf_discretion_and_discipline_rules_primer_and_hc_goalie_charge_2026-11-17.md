# W413: the rules primer's IIHF major-and-game-misconduct prices now say "may" and carry their discipline clause, all three books add discipline to a charge, and Hockey Canada's goalie charge is no longer limited to the crease (17 November 2026)

**Content files changed:**
- content/foundation/rules_primer.md
- content/systems/forechecking_systems.md
- content/technique/body_contact_and_battles.md

**Also changed:**
- sources/README.md: a note that IIHF 2026/27 Rule 20.4 points to a Table 6 the book no longer has.
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **Plan rows:** From W412 (1), (3), (4), (5), (6) and (7).
- **Brief:** scratchpad/w413/brief.md.
- **Authors:** three agents (A rules_primer, B bcb, C forechecking). Each was briefed with its items as hypotheses.

## What changed (voiced)

**rules_primer**

| Site | Now |
|---|---|
| :420 hooking, :431 high-sticking, :467 boarding | "…gives a major plus an automatic game misconduct for reckless endangerment at the referee's discretion…". The discipline clause is unchanged. |
| :423 slashing | "…only for reckless endangerment, at the referee's discretion (61.3), and supplementary discipline can follow (61.6)" |
| :428 tripping | "The IIHF gives the pair for reckless endangerment at the referee's discretion (57.4), and supplementary discipline can follow (57.7)." |
| :515 interference | "The IIHF referee may give a major plus a game misconduct for a late hit that recklessly endangers, with nobody hurt (56.5); the book says a late hit "constitutes reckless endangerment" (56.1), and supplementary discipline can follow (56.8)." |
| :525 head | "For reckless endangerment the referee may give a major plus an automatic game misconduct (48.3), and supplementary discipline can follow (48.4)." It previously said "it gives". |
| :649 high-sticking floor | "…in the IIHF and the NHL, supplementary discipline can follow (60.7)" |
| CM :1146 cross-check | "NHL and IIHF referees can give a major and game misconduct; a cross-check meant to injure is an NHL match (21.1; 59.4), and IIHF supplementary discipline can follow (59.6)." Also: "…keeps you out of games until…" and "And lift, do not chop: USA Hockey penalises hard slashes to the upper shaft, just below the hands." To fit the 1,200-character cap, two passages were reworded: the stick-lift instruction and "Below the shoulders a push can still be a cross-check". |
| CM :1157 charging | "Hockey Canada makes a charge that injures, or any charge on a goalie, in or out of the crease, a mandatory major and game misconduct, and a charge that leaves the opponent unable to defend themselves, or one meant to injure, a mandatory match. In CARHA a charge that injures, or one on a goalie in their crease, …" Sources: HC 7.4(b) para 2, 7.4(c), 8.5(b) ("any player who charges the goaltender"), and the 8.5 preamble ("anywhere on the ice"). CARHA 52(b) keeps its crease limit. |

**Other files**

| Site | Now |
|---|---|
| forechecking :1005 | "…and all three can add supplementary discipline to any charge (NHL and PWHL 42.6, the IIHF's own 42.5)". Before this change, only the IIHF was said to add discipline. |
| bcb facts :1366 (298/300) | "Rule: A goalie put in their net from behind is IIHF 43, not 42 — 43.1 names the frame, 43.2 "no option to award a minor penalty", 43.3 a major and game misconduct if reckless; plan on it. A head or neck check is 48: a minor or a reckless major and game misconduct. More discipline can follow (43.4, 48.4)" |

**Refuted or left:**
- **bcb :793:** a floor instruction ("never plan on a minor"), not a ceiling.
- **rules_primer:** :444, :450, :384/:388, the :1090/:1092 table cells and KT8 are tiers, are already conditioned, or name no price.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** every changed claim OK, with four wording changes. bcb :1366: "to the head" was too broad (48.1 covers the head or neck, and stick contact falls under 59/60) and 43.4 was missing. CM :1146: the slash sentence; USAH Casebook SoP Sit. 3 calls a lower-shaft chop "a good defensive play". :525 "gives" should be "may". :649 should add 60.7. Also flagged :515 (56.5 is "may") and CM :1157 HC 7.4(b) and Interp 3. Act sweep of rules_primer by sentence and IIHF rule number. Rule 28 has no offence limit in any book. **Final read:** CM :1157 WRONG, because HC 8.5(b) has no crease condition; fixed with the reviewer's text. **Confirmation:** all three OK; the 56.1 quote is verbatim. |
| safety-reviewer | **First read:** no Critical or Major. M1: "To the head, 48:" heard alone continued the from-behind hit (cheaper reading). M2: the CM :1146 trim lost "of games". **Final read:** M1 :515 "endangers at the referee's discretion"; M2 :1366 "Discipline can follow" heard as the listed penalties, changed to "More discipline". **Confirmation:** CLEAR. |
| site-reviewer | Three pages at 400×812 DPR 2 (light and dark) and 1440 light, on the 12:17:20 build. Worst windows unchanged (43.9 / 41.0 / 48.6). Every grown rules_primer unit sits in a window of 6.0–38.0. Nothing over 50%. 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text or an author correction that a reviewer confirmed:
- the 3-character trim at :1366;
- "in the IIHF and the NHL" in place of "in both" at :649;
- the :515 follow-on "the book says";
- the CM :1146 cap rewording;
- the CARHA sentence split at :1157.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 12:17:20, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all three files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | The rules-verifier made three reads. **IIHF** (both editions): 28.1, 41.4/41.5, 42.4/42.5, 43.1–43.4, 48.1–48.4, 55.3/55.6, 56.1/56.5/56.8, 57.4/57.7, 59.3/59.6, 60.3–60.7, 61.3/61.6. **NHL:** 21.1, 28.1, 42.6, 59.1–59.5, 60.4/60.7. **PWHL:** 28.1, 42.6. **HC:** 7.4 with Interpretations, 8.5 preamble, (b), (c). **USAH:** Standard of Play Slashing and Casebook Sit. 3. **EIHL:** Casebook 28. **In-House:** 28 and Section 4. |
| D2 Exceptions | HC 8.5(b) has no crease limit, while CARHA 52(b) does. 56.5 requires that "a major would not suffice". |
| D3 Cross-book divergence | Hockey Canada and CARHA goalie scope; "all three" add discipline. |
| D4 Citation integrity | 43.4, 48.4, 57.7, 59.6, 60.7, 61.6 and 42.6 located. The 56.1 quotation is verbatim. |
| D5 Provenance | not engaged |
| D6 Negative existence | "no IIHF match penalty" is unchanged. Rule 28 offence limit: none found in any book. |
| D7 Cardinal rule | The stick-lift instruction is still stated as craft. |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | Layer tests per file. CM :1157 is now fuller than body :476 (plan row). |
| D10 Key-facts | bcb :1366 read voiced alone, three times. |
| D11 Reader safety | The safety-reviewer made three reads. |
| D12 Read-aloud | Four listening defects found from renders and fixed. |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. Other documents may still say the IIHF "gives" a major and game misconduct, with no "may", for hooking, tripping, slashing, high-sticking, boarding, cross-checking, interference or head contact. Candidates are body_contact_and_battles, the position pages, and facts blocks and KTs.
2. Hockey Canada's goalie charge may be limited to the crease elsewhere in the corpus (8.5(b) applies "anywhere on the ice").
3. rules_primer body :476 gives Hockey Canada charging without the 8.5(b) goalie case, so CM :1157 is now fuller than the body.
4. rules_primer table cells :1090 (IIHF head) and :1092 (IIHF high-sticking) have no "may". The table is dropped from audio.
5. rules_primer CM :1146 has a 338-character amber run (CARHA and Hockey Canada over-the-shoulder, plus the USA Hockey head limb). It predates this wave. Window 38.0. Candidate for the faceoffs KT4 trim, as a safety call.
6. bcb :1366 is at 298/300. bcb :793 has no IIHF suspension limb beside USAH's "multi-game suspension" (judged too weak to hedge).
7. sources/README.md: the HC 8.5(b) Note 1 cross-reference "7.4 (b)(Interpretation 2)" points at the blindside definition under 7.4(a), which is a book defect.

## What this method could not have found
- Other rules in each book pricing the same acts. Only the cited rules were read for each act.
- Prices stated across two sentences, or with no book name or rule number. The sweep was by sentence and rule number.
- Whether "More discipline can follow" is clear to a listener who does not know discipline is decided after the game.
