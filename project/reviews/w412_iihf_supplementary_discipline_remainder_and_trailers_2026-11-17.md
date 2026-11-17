# W412: the remaining IIHF price units now say supplementary discipline can follow, and three Sources trailers list the rules their pages cite (17 November 2026)

**Content files changed:**
- content/foundation/rules_primer.md
- content/systems/forechecking_systems.md
- content/technique/body_contact_and_battles.md
- content/foundation/rink_map.md (trailer only)
- content/systems/defensive_zone_coverage.md (trailer and :751)
- content/systems/faceoffs.md (trailer only)

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
From W411 (1), (2), (3) and (7). Brief: scratchpad/w412/brief.md, with the W411 additions. Five agents (A–E) worked disjoint file sets, each briefed as a hypothesis.

## What changed (voiced)
| Site | Now | IIHF rule |
|---|---|---|
| rules_primer :420 hooking | "…with nobody hurt (55.3), and supplementary discipline can follow (55.6). USA Hockey makes that major and game misconduct mandatory on the same trigger…" | 55.3 "may"; 55.6 |
| rules_primer :431 high-sticking | "…(60.4), and supplementary discipline can follow (60.7)" | 60.4 "may"; 60.7 |
| rules_primer :476 charging | "…with nobody hurt (42.4), and supplementary discipline can follow (42.5)… Even the NHL and the PWHL have a match for a deliberate attempt to injure (their 42.4, 21.1) and a mandatory game misconduct where a major injures the face or head (their 42.5)" | 42.4 "may"; 42.5 |
| rules_primer :515 interference | "…(56.1); supplementary discipline can follow (56.8)" | 56.5; 56.8 |
| rules_primer CM :1157 charging | "…under the IIHF, plan on a major and game misconduct even with nobody hurt, and supplementary discipline can follow. Hockey Canada makes a charge that leaves the opponent unable to defend themselves a mandatory match penalty…" | 42.4/42.5 |
| forechecking :1005 charging | "…or an IIHF major plus game misconduct (42.4), and the IIHF can add supplementary discipline to any charge (its own 42.5). A charging major that injures the face or head brings a mandatory game misconduct in the NHL and PWHL (their 42.5) and the Elite League (EIHL Casebook Rule 42)." | 42.5; 28.1 "any offense… whether or not… penalized" |
| bcb :719 head | "…no match penalty, because its book contains none anywhere.** Supplementary discipline can follow (48.4)." | 48.3 "may"; 48.4 |
| dzc :751 hit from behind | "A hit meant to injure is a match in every book but the IIHF, which has no match penalty — plan on ejection there (43.3)." | 43.2/43.3 |

**Refuted:**
- equipment.md "men's junior": the three hits are IIHF visor and neck-guard equipment rules (202.2, 202.7), not a penalty exception list.
- rules_primer :1151 and :502 sucker punch: these already say "Assume ejection" and state no ceiling.
- forechecking: the EIHL charging limb is already present.

**Trailers (not voiced):**
- rink_map: IIHF and NHL entries now carry 56.2, 56.4, 56.5 and 56.8 (NHL: 56.4/56.5).
- dzc: adds IIHF 56.4/56.5/56.8, NHL 56.4/56.5 and PWHL 57.4/57.5. The 23.2 entry is kept as accurate provenance; the body still uses the Rule 23 cluster.
- faceoffs: IIHF 2026/27 43.2/43.3; the PWHL provenance note adds 43.2/43.3/43.5/21.1. PWHL 43.3 itself cross-refers to "Rule 45.5", which is a typo in the PWHL book.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** every claim OK. Rule locations checked in both IIHF editions, plus NHL and PWHL; quotations verbatim, none truncated. "Can follow" holds for British readers (In-House Rule 28; EIHL Casebook Rule 28 → EIHL DOPS). **Re-read of post-review edits:** all four OK. "To any charge" is supported by 42.5 and 28.1. PWHL 42.4 is also a charging match. Optional: CM :1157 Hockey Canada second trigger (plan). |
| safety-reviewer | **First read:** no Critical or Major. Five readability Minors: pronouns and labels displaced by the new clauses, the double "42.5", and the :719 "and" heard as a second reason. **Final read:** CLEAR. It accepted both author corrections to its own text ("their 42.4" kept the PWHL; "to any charge" removed a false condition). |
| site-reviewer | Six pages at 400×812 DPR 2 light/dark and 1440 light, on the 11:58:46 build. Worst windows unchanged ±0.1. The four grown rules_primer units sit in windows of 9.8–21.1. Nothing over 50%; 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, or an author correction that a reviewer accepted in a final read.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 11:58:46, and no content file is newer.
- **Gate checkers:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT on all six files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier, two reads: IIHF 28.1, 42.4/42.5, 43.2/43.3, 48.2–48.4, 55.3/55.6, 56.2/56.4/56.5/56.8, 60.4/60.7 (both editions); NHL/PWHL 21.1, 42.4, 42.5, 43, 56/57; USAH 623(b)/(c); HC 7.4(c); EIHL Casebook 28/42; In-House 28 |
| D2 Exceptions | 42.5 has no tier condition (28.1 "whether or not… penalized") |
| D3 Cross-book divergence | NHL/PWHL vs IIHF 42.5 labelled "their" / "its own" |
| D4 Citation integrity | trailer additions, quoted verbatim |
| D5 Provenance | dzc 23.2 kept as accurate provenance |
| D6 Negative existence | "no IIHF match penalty" re-confirmed (v1.0, v1.1, 2026/27) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | layer tests per file; CM :1157 and body :476 agree |
| D10 Key-facts | not engaged (no facts line changed) |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | pronoun and label defects found from renders and fixed |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. rules_primer IIHF tripping, boarding, cross-checking and slashing limbs were not censused for the supplementary-discipline clause.
2. The rules_primer :1092 table cell (IIHF high-sticking) has no clause. The table is dropped from audio.
3. bcb :1366 (facts, goalie head charge, no 48.4) and :793 (floor instruction) are candidates.
4. rules_primer CM :1157 gives only Hockey Canada 7.4(c)'s first trigger, not "or one meant to injure" (this predates W412; body :476 has both).
5. forechecking :1005 "the IIHF can add supplementary discipline" could be heard as exclusive. NHL/PWHL 42.6 also allow supplementary discipline.
6. PWHL 43.3 cross-refers to "Rule 45.5", a typo in the book. Worth a note in sources/README.md.

## What this method could not have found
- How the "its own 42.5 / their 42.5" labels sound in real synthesized audio.
- IIHF Disciplinary Code sanctions that could exceed "plan on ejection".
