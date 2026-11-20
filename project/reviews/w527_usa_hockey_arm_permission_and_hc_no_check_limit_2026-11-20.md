# W527: USA Hockey's arm permission, carried with its limits, and Hockey Canada's no-check limit (20 November 2026)

## Scope

Plan row W526(3). Two editing agents carried USA Hockey's Casebook arm permission, with its limits, onto the pages that list the arm strength move:

| Agent | Files |
|---|---|
| A | body_contact_and_battles, rules_primer, time_and_space |
| B | puck_handling, winger, forechecking_systems |

A safety-reviewer with a rules check (C4/C6) then read the whole diff.

## The settled position

Verified by both agents and the reviewer against `usah_casebook.txt` :18401–18483, Standard of Play Situations 5–8:

| Situation | What is allowed | Condition |
|---|---|---|
| 5 | A forearm may steer an opponent | In front of your own net, never extended |
| 6 | A hand off the stick may keep position you legally established | Only with the puck |
| 7 | A free arm may steer or keep position | Only while engaged in a corner or in front of the goal and reaching for the puck |

In every case: never grab, never extend, never push off.

- **No arm block in USA Hockey.** It writes no arm-block "strength move" of the kind in NHL and IIHF 54.2, PWHL 55.2 and Hockey Canada 8.1. Flattened sweeps for `strengthmove` and `usetheirarm` score 0 in both USA Hockey books. The Preface (`usah.txt` :386–388) reads "so long as they do not use a hand or arm to hold or block the opponent".
- **Situation 8 extends this to no-check play.** It says the methods are the same in both categories. 604 Note 1 (`:3541–3545`) makes "overt hip, shoulder, forearm or torso action" an illegal body check in no-check play.
- **CARHA grants no arm permission.** 49(a) and 63 price bodying and holding. The same sweeps return no strength-move or free-arm text.

## Changes

| File | Site | Change |
|---|---|---|
| body_contact | :1251 | "USA Hockey writes no such permission, so keep your arm out of the block altogether" became "USA Hockey writes no arm block, so never use your arm to block an opponent there". A new paragraph adds "What its Casebook does allow is a steer, not a block", with Situations 5–7. The facts lines (:484, :1546, :1763) already carried Situations 6–7 and stay stricter than the book. |
| rules_primer | :502 | Forearm steer scoped to the front of your own net. Free-arm keep-position now carries Situation 7's location. |
| rules_primer | :526 | 604 Note 1 now includes "torso". The no-check limit is now "keep any overt hip, shoulder, forearm or torso action out of it too", so it no longer contradicts the steer granted just before. The pointer "beyond those Casebook allowances" is fixed. |
| time_and_space | :525 | Its book-by-book delayed-offside triggers now include Casebook 630 Situation 38's forcing-deeper limb, with its precondition. |
| winger | facts :741 | "USA Hockey and CARHA grant no arm block", plus the Situation 5 forearm steer. |
| winger | new facts :742 | Hockey Canada 7.3's no-check limit (see Review). |
| winger | :739 | The arm-block clause was cut, so no facts line gives it without the limit. |
| winger | prose :744–745 | Same changes as the facts block. 7.3(a) is quoted verbatim, after the agent caught its own misquote. |
| forechecking | :624 | The free-arm steer gains Situation 7's location and Situation 6's puck-carrier keep-position. |
| puck_handling | — | Unchanged. Its lines already say USA Hockey has no arm block, which errs safe, and :502 is at 293/300. |

## Review

| Reviewer | Critical | Major | Minor |
|---|---|---|---|
| safety-reviewer with rules check | none | 1 | 4 |

**The reviewer confirmed:**
- every new quotation is verbatim;
- no changed sentence licenses a free-arm steer without the reach;
- none licenses an arm block under USA Hockey or CARHA;
- none licenses forearm or torso contact in no-check play.

**The major (already in HEAD, carried forward by the rewrite).** winger's facts line gave Hockey Canada 8.1's arm block with no 7.3 limit. 7.3 applies "only in divisions of U13 and below, in female hockey, and any other divisions approved by a Member" (`hc.txt` :6004–6005). There an arm extended after angling is a body check, and a shove or push is a 7.3(a) minor. A listener in a minor or female game could hear the line alone and act on it.
- **Repaired** by the new facts line :742 and the matching prose.
- The arm-block clause was cut from :739, so it is now carried only alongside its limit.

**The minors, all repaired:**
- "write no" became "grant no";
- the no-check contradiction at rules_primer :526;
- Situation 7's location at :502.

One minor was noted and needs no change: time_and_space's paraphrase of "puck or puck carrier".

**C11.** No reviewer re-read the last repairs. Each is confined to its finding, follows the reviewer's sketch, and was checked against the source by its agent.

## Rows

- **Closed:** W526(3).
- **New, From W527:**
  1. Other pages that give Hockey Canada 8.1's arm block without 7.3's no-check limit.
  2. forechecking :628's "keep your arms… out of it" sits beside :624's "steer yes". It errs safe.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: no change.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 5 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: reviewer with rules check, all books named |
| D2 exceptions | Covered: Situations 5–8 conditions; 7.3 scope |
| D3 cross-book divergence | Covered: arm block by book |
| D4/D5 citations | Covered: verbatim checks |
| D6 negative existence | Covered: "USA Hockey and CARHA grant no arm block", swept for the act |
| D7 cardinal rule | Not engaged |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered: facts, Common Mistakes and Key Takeaways checked in all six files |
| D10 facts layer | Covered: winger :741 at 295/300, :742 new, :739 cut. Each judged voiced alone. |
| D11 reader safety | Covered by the safety-reviewer |
| D12 read-aloud integrity | Judged by reading; not rendered |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered: check_links |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **Other pages carrying Hockey Canada 8.1 without 7.3.** Filed as W527(1).
- **Whether an official treats an unextended forearm steer as "overt" forearm action.**
- **How the longer paragraphs sound aloud.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.
