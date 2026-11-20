# W520: who a book ejects for breaking up a fight, label stutter, and diagram side frames (20 November 2026)

## Scope

Three editing agents took the leftover rows from W515 and W519:

| Agent | Files | Rows |
|---|---|---|
| A | rink_map, rules_primer, conditioning_and_recovery | W519(1) label-then-restatement stutter; W519(3) rules_primer label consistency |
| B | team_play_and_culture, goaltender | W519(2) CARHA 32(c) window; W519(4) gate minors |
| C | zone_entries.mjs, forechecking_systems.mjs, goaltender.mjs, and the built diagrams | W515(8) frameless "near side"; W515(9) "the goalie's right" audit |

Reviewers:
- A content-reviewer and a diagram-reviewer read the first pass.
- The content-reviewer found a major next to the diff: the corpus was scoping the peacemaker ejection to "first in" for books that eject any peacemaker.
- A rules-verifier then swept every other document for the same claim.
- A safety-reviewer graded the whole peacemaker set after repair.

uk_rules.md and body_contact_and_battles.md joined the wave for the repairs, owned by agents A and E (the W519 technique agent).

## The peacemaker claim

### Primary text

All read on disk this wave:

| Book | Rule | Who it reaches |
|---|---|---|
| USA Hockey | 615(d) (`usah.txt:4091`); Casebook Situations 22–24 | Mandatory, and only "the first to intervene", peacemaker or not. Situation 6 spares a teammate breaking up a fight between two players on the same team. |
| USA Hockey | 615(a) | A major plus game misconduct for anyone who fights. |
| Hockey Canada | 7.10(e)(ii) (`hc.txt:6532`); Interpretation 6 | Mandatory for anyone who "joins in a fight or acts as a peacemaker", where a fighting penalty is assessed. |
| CARHA | 59(b); 37(d) for goalies | Mandatory for any player "acting as a peacemaker". |
| NHL | 46.16 | Discretionary, for the first to intervene, and "This rule also applies to subsequent players who elect to intervene". |
| PWHL | 46.15 | As the NHL. |
| IIHF | 46.7 (2025/26), 46.14 (2026/27) | As the NHL. The 2025/26 exception, a game misconduct already imposed in the original altercation, is narrowed by Situation Handbook 46.16: a game misconduct for the foul that started the fight, such as boarding, does not count. |

### Defects found and repaired

Severity grades are the safety-reviewer's.

**Critical: "the first one in" scoped to books that eject any peacemaker.** A second peacemaker under Hockey Canada or CARHA was told they were safe, in layers voiced alone.
- rules_primer :948, the bold lead.
- team_play_and_culture Common Mistakes :658 and Key Takeaway 12.

**Major.**
- **"The other three can eject the first in".** The NHL, PWHL and IIHF texts reach later arrivals too, and a goalie coming in is rarely first.
  - goaltender :1188, :1198 and Common Mistakes :1695.
  - body_contact_and_battles facts :1902, :1928 and Common Mistakes :2102.
- **uk_rules :308** and **body_contact :1930.** Both quoted the 2025/26 IIHF exception without Situation 46.16's limit.

**Introduced by the first repair, then fixed.**
- **KT12 became a closed three-book list (major).** It now ends "and the referee can give one in every other book".
- **The rules_primer lead set "anyone who joins in" against USA Hockey's "first one in" (major).** That implied a USA Hockey player who joins later to fight is not ejected, which 615(a) contradicts. The lead now reads: "Under Hockey Canada and CARHA anyone who joins in or plays peacemaker is ejected; under USA Hockey anyone who fights is, and so is the first one in even as a peacemaker, goalies included."

**Minor, harsher than the books.**
- **body_contact :2102.** It said USA Hockey "reaches a peacemaker", where 615(d) reaches only the first player in.
- **body_contact :1928.**
  - It said "the only peacemaker waiver in any of the six"; it now names USA Hockey Situation 6.
  - "Stepping in to separate them is free" became "you can count on stepping in being free".
- **team_play :286.** "Two players arriving together" is now "two opponents arriving at exactly the same time" (Situation 22).
- **team_play :658, the CARHA next-game claim.** A 59(b) game misconduct carries no automatic suspension: 32(d) covers only a major's game misconduct, and 32(b) reports it to the Chairman. The line now matches :278: "can cost your next game too, and does under USA Hockey and Hockey Canada".

**Left on purpose: goaltender :1188 "does under USA Hockey, Hockey Canada and CARHA" (joining a fight).** The NHL, PWHL and IIHF each write a waiver for a player clearly set upon. The unit opens "can end your game in every book", and :1195 carries the detail.

## The rest of W520

- **Stutter (W519(1)).**
  - About 11 rink_map entries changed, e.g. "Why the slot matters: the slot is" → "this is…", and several "it".
  - rules_primer :523 "It is not capped at a minor." and :853 "It can end your game."
  - conditioning :119 reworded.
  - Every ⚠️ still leads its strong run.
- **Labels (W519(3)).**
  - rules_primer "What tripping costs" and "What high-sticking costs", matching NHL Rules 57 and 60.
  - rules_primer :831 "What goaltender interference or charging a goalie costs." beside :853 "…book by book."
- **team_play :320.** Now "What shots and crease play after the whistle, and blocking a goalie's way back, can cost you:".
- **team_play :292 (CARHA 32(c)).** One clause added: the window is written as playing time, so it may not reach the handshake line, but every game misconduct is reported to the Chairman (32(b)).
- **goaltender Sources :1815.** It now says the three RVH concerns come from the article's free teaser, a single source, and that the full article needs a sign-up and was not read.
- **Diagrams (W515(8)/(9)).** Five describes, one caption and one label now give a stated frame:
  - forecheck-roles-rotate;
  - entry-high-triangle;
  - entry-vs-standing-up;
  - defend-squash-and-slide (caption "the defenceman on the puck's side…"; label "carries in wide");
  - goalie-fifty-fifty-puck (picture terms, because the goalie is out of the net).

  Seven "the goalie's right/left" describes were ruled correct: in each the goalie is in the crease facing out. Three "right-hand faceoff circle" describes now read "the faceoff circle on the goalie's right (the top of the picture)".
- **sources/README.md.** Records that `iihf_situations_2026-27.txt` Situations 46.11 and 46.16 still cite "Rule 46.7", which is 46.14 in 2026/27 (46.7 is now *Fighting off the playing surface*). Verified at :3764 and :3825 against `iihf_rules_2026-27.txt:4208`.

## Review

| Reviewer | Critical | Major | Minors | Notes |
|---|---|---|---|---|
| content-reviewer (5 files) | none in the diff | 1, adjacent: the peacemaker scope | 6 | All repaired or filed. Its CARHA 59(b) next-game ruling closed plan row W520(1) as harsh, not permissive. |
| diagram-reviewer | none | none | 6 | Two came from the first pass (a frame collision, a lost "nearer" referent), and the stray "near side" label. All repaired; two pre-existing minors filed. |
| rules-verifier (corpus sweep) | — | — | — | 15 sites. One permissive narrowing (goaltender, three layers), two incomplete exceptions, and several harsher-than-true lines; repaired as above. It also caught a coordinator brief citing the superseded `hc_2026-08-print.txt`; the 7.10 text is identical in `hc.txt`, and every agent confirmed its quotes against `hc.txt`. |
| safety-reviewer | none introduced | 2, introduced by the first repair | 3 | All repaired. Rendered team_play_and_culture (44 chunks) and rules_primer (137 chunks). |

C11: no reviewer re-read the last repairs (KT12, rules_primer :948, :2102, :286). Each is confined to its finding, takes the reviewer's sketch, and was checked against the rule text by the agent that made it. This is the C11 terminating case.

## Rows

- **Closed:**
  - W515(8), W515(9).
  - W519(1), W519(2), W519(3), and the W519 commit-gate minors filed after dc16caa2.
  - An interim row, filed mid-wave: the CARHA 59(b) peacemaker next-game claim. It is not the W520(1) below.
- **New, From W520:**
  1. goaltender Sources trailers quote only the opening clauses of 46.16 and 46.15 (optional).
  2. squash-and-slide caption: "holds square" and "takes the slot" (pre-existing).
  3. entry-high-triangle: "the wide driver" is ambiguous (pre-existing).
  4. USA Hockey Situation 6 is carried only in body_contact (optional).
  5. Other routes to the act: clearing the area, 46.18, leaving the bench.
  6. Peacemaker claims in other documents and other words.
  7. team_play :749 Notes line may narrate the review process.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check_zones`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 7 files, 0 lost. Its one split-half candidate (rules_primer :831, keyed to the old "What a trip costs") is a false pairing: the unit had no ⚠ in HEAD.
- `check_unit_openers`: 144, unchanged.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: every peacemaker sentence against the books named above, by three agents. |
| D2 exceptions | Covered: IIHF Situation 46.16, USA Hockey Situation 6, Hockey Canada Interpretation 6, the NHL/PWHL match-penalty exception, the 46.14 waiver. |
| D3 cross-book divergence | Covered: first-in only, any peacemaker, or discretionary with later arrivals. |
| D4/D5 citations | Covered. The InGoal teaser was refetched by the content-reviewer; the Hockey Canada file was corrected to `hc.txt`. |
| D6 negative existence | Covered: CARHA's lack of an automatic suspension for a 59(b) game misconduct, read across Rules 30–34, 37, 59, 70, 87 and Section Seven. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: the claim was tested in every layer of the five documents (body, facts, Common Mistakes, Key Takeaways). |
| D10 facts layer | Covered: body_contact :1902, rewritten within its cap at 294/300. |
| D11 reader safety | Covered: graded by the safety-reviewer. |
| D12 read-aloud integrity | Partly covered: team_play and rules_primer rendered. goaltender, body_contact and uk_rules judged by reading. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: label consistency, check_links. |
| D15 rendered site | Covered: diagram PNGs viewed by agent C and the diagram-reviewer. Prose structural only (0 bare glyphs). Chrome not connected. |

## What this method could not have found

- **Peacemaker claims elsewhere.** Documents outside the seven swept, and claims worded without the swept vocabulary ("pull them apart", "step between"). Filed as W520(6).
- **Other rules that price the same act.** Clearing the area and leaving the bench. Filed as W520(5).
- **Chunk placement.** Not rendered for goaltender, body_contact or uk_rules.
- **A coach's reading of the high-triangle cue.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.
