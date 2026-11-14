# W339: rules_primer's slew-foot relief and CARHA kick, a slide line scoped to USA Hockey, and USA Hockey's reckless limb in defensive_zone_coverage (14 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave works the W338 commit-gate's non-blocking notes and its plan rows. Three authors worked disjoint files:
- **L:** rules_primer.
- **M:** defending_the_rush.
- **N:** defensive_zone_coverage.

## What changed
- **rules_primer :424 (body) and Common Mistakes :1138 (L, then reviewers).** :424 said USA Hockey's, Hockey Canada's and CARHA's puck-first relief "none reaches slew-footing". That is false for CARHA, which prints its Note under 86(b), its slew-footing clause, and repeats it in its slew-foot ruling.
  - :424 now opens with **"Do not count on any book's puck-first relief for a slew-foot."** It then gives:
    - USA Hockey: 639(a) "except slew footing"; Casebook 639 Situation 5, "A minor penalty is NOT an option for slew footing".
    - Hockey Canada: 8.6 does not apply to 8.8.
    - CARHA: the Note excuses only a player already falling or sliding who knocks the puck "off the opponent's stick" before any body contact, and "a leg through someone's skates while you are on your feet is not that".
  - :1138 gained the same CARHA limb, ending "do not count on any puck-first relief for a slew-foot".
- **rules_primer :484 (rules-verifier wording).** This sentence was not in the brief. It still priced CARHA's kick as "plan on a match if your foot comes through with a kicking motion from the side or front … a match for any other kick (48(c))", which is the "any other kick" wording W333 rejected. The three sibling documents now say "any kick". It now reads: "**Under CARHA, plan on a match for any kick at an opponent**, because 48(c) prints a mandatory one for any kick or attempted kick. CARHA's own ruling keeps a kicking slew-foot from behind at the referee's discretion under 86(b), but plan on the match anyway." A corpus sweep finds no remaining "any other kick" and no "knocks the puck away/clear".
- **defending_the_rush facts :1007 (M), 300 → 298/300.**
  - **Before:** "No puck-first relief saves a slide — USA Hockey's Casebook…". The line named its book only after the dash, so voiced alone it claimed the rule for every book.
  - **What the books say:** Hockey Canada 8.6 Interpretation 2 ("A penalty will NOT be assessed if, while falling or sliding along the ice, a player contacts the puck prior to contacting the body of their opponent…") and CARHA's 86 Note excuse a puck-first slide. NHL, PWHL and IIHF tripping have no slide wording.
  - **Now:** "In USA Hockey no puck-first relief saves a slide — its Casebook calls tripping…", with "ruling says opponent, not carrier" (rules-verifier: the Situation's question says "puck carrier"). Every other copy in the file was already scoped to USA Hockey.
- **defensive_zone_coverage :488 (N).** W338's sentence gave USA Hockey's mandatory ejection only for a hard hit at the boards or a head-first hit, and dropped 608(b)'s reckless limb (Casebook 608 Situation 1(3): "regardless of whether or not board contact is made"). The paragraph's 608(c) match covers only a vulnerable or defenceless player. The sentence now uses KT4's reviewed form: "Under USA Hockey it does whenever it is forceful at the boards, sends them head first into the boards or net, or is reckless."

## After review (coordinator applied reviewer wordings verbatim)
- **rules_primer :424 (safety-reviewer, which folded in the rules-verifier's point).** The author's text said "knocks the puck away", looser than "from their opponent's stick". Its instruction covered only a player on their feet, so a sliding player whose leg went through the carrier's skates could read the Note as cover. The safety-reviewer's replacement leads with the universal instruction and was applied.
- **rules_primer :1138 (safety-reviewer).** Same gap; the reviewer's sentence was applied.
- **rules_primer :484 (rules-verifier).** As above.
- **defending_the_rush :1007 (rules-verifier, optional).** "It says" became "ruling says".
- **Re-checks.** Both reviewers re-checked all four applied units: OK. 0 LOST in rules_primer (197/197) and defending_the_rush (88/88).
- **Upheld, no change:**
  - defending_the_rush KT7 :1169, "Puck first does not excuse a low slide or a slew-foot". It is stricter than CARHA, which has no clipping rule and has the 86 Note. Both reviewers judged it safe.
- **Logged in the plan, not applied:**
  - :1002's universal "never trip or slide counting on it" has no facts-line counterpart now that :1007 is scoped;
  - :1007's knee exception drops the momentum-into-the-shooter condition; there is no room;
  - rules_primer :1138 omits Hockey Canada 8.6 Interpretation 1 (the safe direction).

## Reviews
| Reviewer | Result |
|---|---|
| authors L, M, N | Premises confirmed in sources. L also fixed :1138. M scoped :1007 and found the rest of the file already scoped. N used KT4's reviewed sentence. Layer tests and renders given. |
| rules-verifier | No BLOCK. :424 WORDING ("off the opponent's stick"; "too"). :484 WORDING (inconsistent and leaning permissive). :1007 OK with an optional tweak. KT7 OK (stricter). :488 OK. Re-check: all four applied units OK. |
| safety-reviewer | No BLOCK. :424 and :1138 WORDING (instruction covered only a player on their feet). :1007 OK. :488 OK. Re-check: all OK, chunk by chunk. |

### C11
The wave was written by authors L, M and N. Every coordinator change after review was a reviewer's wording, applied verbatim and re-checked by both reviewers. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all three files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, with re-check |
| D4 Citations | quotations verified (Casebook 639 Situations 4 and 5; CARHA Note; 48(c)) |
| D5–D8 | not engaged |
| D9 Summary layer | rules_primer Common Mistakes :1138; defending_the_rush KT7 read and upheld |
| D10 Key-facts layer | defending_the_rush :1007, voiced alone |
| D11 Reader safety | safety-reviewer, with re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus checks; no site-reviewer (text only) |

## What this method could not have found
- **Referee practice.** How a CARHA referee applies 48(c) against 86(b), or the 86 Note to a sliding slew-foot.
- **Technique.** Whether a puck-first slide is executed feet-first into the carrier's legs. No rulebook grep reaches technique.
- **Other books.** Any rule in CARHA, the NHL, PWHL or IIHF that prices a slide in words the authors did not search for.
