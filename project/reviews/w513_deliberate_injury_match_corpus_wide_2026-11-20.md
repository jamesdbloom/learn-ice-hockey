# W513: the deliberate-injury match, corpus-wide (20 November 2026)

Phase 2 of plan row W511(1), now closed. Five editing agents worked in files that did not overlap, from one shared brief (`scratchpad/w513_common.md`). The brief carried:

- the W512 safety-reviewer's ruling (`w512_owner_intent_match_and_wave_ruling_2026-11-20.md`);
- the census worklist (`hc_7_5c_intent_limb_census_2026-11-20.md`).

## The claim

Every book but the IIHF makes a hit meant to injure a match penalty, mandatory once intent is found:

| Book | Rules |
|---|---|
| NHL | 21.1 |
| PWHL | 21.1 |
| USA Hockey | 602(a) |
| Hockey Canada | 7.5(c) second paragraph; 7.6(c) and 7.7(c) on the head; 8.5(c) for a goalie; 7.2(c), 7.4(c), 9.2(c), 9.3(c) for boarding, charging, cross-checking and slashing |
| CARHA | 48(a) |

The IIHF has no match penalty. A from-behind hit that recklessly endangers is a discretionary major plus an automatic game misconduct (43.3, 20.4).

The corpus had stated Hockey Canada's and CARHA's from-behind match only as the into-the-boards limb on a defenceless player, in units that list match routes as though complete. Heard alone, those units made a deliberate open-ice hit sound as if it topped out at a game misconduct.

## The repair rule

The W512 ruling:

1. Use the all-book sentence, intent first, once per unit. Then "Even without intent, …" on the boards/net limb.
2. Never write a Hockey Canada-only graft.
3. Never drop the boards/net limb.
4. Repair only explicit match gates and book-by-book route lists. Leave floors, and units whose all-book sentence is heard in the same spoken chunk (checked by render).
5. Each owner section carries the sentence once in its body and once in its facts block.
6. Facts lines at the cap: substitution only.

## Agents and files

| Agent | Files | Notes |
|---|---|---|
| A | language_and_glossary, on_ice_communication, rules_primer, passing_and_receiving | Also two cross-check intent sentences (glossary :428, rules_primer :1164), verified. |
| B | playing_without_the_puck, puck_support_and_spacing, risk_management, shooting | puck_support had no intent statement at all; it gained a body sentence and a facts `Rule:` line. |
| C | center, defender, goaltender, switching_positions, winger | center's owner section had none, and now carries it in its body and facts. Also charging (7.4(c)) and slashing intent sentences, verified. |
| D | defending_the_rush, defensive_zone_coverage, faceoffs, forechecking_systems | forechecking :222 carried an HC-only graft and was rewritten all-book. faceoffs gained an owner facts line. |
| E | offensive_zone_play, special_teams, zone_entries, game_management | zone_entries had no voiced intent sentence. The game_management :1233 limb was repaired. |

Each agent rendered its documents before and after with md_to_speech into its own directory, and recorded a spoken-chunk number for every LEAVE that relies on adjacency. Two agents corrected their own adjacency calls after re-rendering: special_teams :659 and defending_the_rush :404.

## Review

Five safety-reviewers, one per agent's files, worked from one brief (`scratchpad/w513_review.md`). Each checked:

- **Rules**, by act, book by book on disk;
- **Safety**;
- **The facts layer**;
- **Readability**;
- **Render.**

| Reviewer | Critical | Major | Minors |
|---|---|---|---|
| A | none | **1:** on_ice_communication :604, "even an unintended one is a minor and game misconduct (7.5(a))". 7.5(a) requires an *intentional* push, so "unintended" negated the act and contradicted the CARHA 49(c) paragraph above. | 3 |
| B | none | none | 5, including shooting :954, an unrepaired Common Mistakes route list |
| C | none | none | 9, including defender :965, an HC-only clause; and winger :913 and :708, antecedents |
| D | none | none | 5, including two at-cap facts lines the agent had judged unfixable, for which the reviewer found substitutions that keep every limb |
| E | none | none | 4, including a qualifier that changed jobs at offensive_zone_play :1010 and :1248 (the boards limb could sound conditional on intent), and two game_management route lists the census missed (:1182, :1290) |

**What all five reviewers confirmed.**

- Every "every book but the IIHF" claim holds for its act. That includes the charging, slashing and cross-check sentences added beyond the brief.
- Every edit makes the act dearer, never cheaper.
- The boards/net limb survives everywhere.
- No ⚠️ came off its strong run.
- **NHL/PWHL nuance.** The act rules (42.4, 43.4, 59.4, 61.4) say "may"; 21.1 says "shall". The W512 reading holds: the finding of intent is the referee's.

**Repairs after review.** The owning agents made every repair, from the reviewers' sketches or re-derived from the books:

- The major became "a push not meant to injure is still at least a minor and game misconduct (7.5(a))".
- Two deviations, each argued:
  - switching_positions :272 keeps its citation run, because its facts line does not carry it;
  - shooting :928's IIHF clause says "plan on ejection", because the paragraph covers charging as well.
- No reviewer re-read the repairs. Each is confined to its finding. This is the C11 terminating case.

## Rows

- **Closed:** W511(1).
- **New, From W513:**
  1. CARHA 53(a)'s discretionary match. The plan row gives the grep that re-finds the sites.
  2. Facts lines left at the cap without the all-book claim:
     - offensive_zone_play :967;
     - defender :288–289 and :819;
     - body_contact_and_battles :764's head portion.
  3. Citations or words lost to the cap.
  4. A charging and slashing sweep beyond the position pages.
  5. Restatement density in special_teams and zone_entries.
  6. defending_the_rush :254 and :421.
  7. Pre-existing antecedent hits.
  8. body_contact_and_battles Common Mistakes :2068–2069, optional. Carried from W511(1) after the commit gate found it had dropped when that row closed.
  9. Three wording minors raised by the commit gate: defending_the_rush :441's dash, and two in winger.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*` in dist.
- `check_marker_pairs`: 21 files, 0 lost. The 2 split-half candidates are the new special_teams facts lines :660 and :1118. They share text with body :1122, and facts lines are never marked.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. Agents and reviewers read each book on disk by act: NHL/PWHL 21.1, 42.4, 43.4, 59.4, 61.4 (PWHL 60.4, 63.4); USA Hockey 602(a), 603, 608; HC 7.1–7.7, 8.5, 9.2, 9.3; CARHA 48, 49, 52, 53, 54, 80; IIHF 2026-27, v1.1 and the British books for "match penalty" (0). |
| D2 exceptions | Covered: 7.5(a)'s "intentionally"; 7.7(c) attempt-only; 53(a) against 53(b); "may" against "shall". |
| D3 cross-book divergence | Covered: the intent match by book, and the IIHF's absence. |
| D4/D5 citations | Covered. Citations lost to caps are recorded (row 3). No URL added. |
| D6 negative existence | Covered: no IIHF match penalty, searched by label and by act wording in every IIHF-family book on disk. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered. Each agent layer-tested its documents. No Key Takeaway or Key focus states a ceiling (census pattern 1). Common Mistakes route lists repaired. |
| D10 facts layer | Covered by every reviewer: changed facts lines read alone in renders, caps checked. Residue in rows 2–3. |
| D11 reader safety | Covered: five safety-reviewers, with one major repaired. |
| D12 read-aloud integrity | Covered by agent and reviewer renders. Adjacency LEAVEs are chunk-verified. The repair round was not re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: antecedents, restatement and sentence length (row 5); check_links. |
| D15 rendered site | Structural only: 0 bare glyphs, no `<p>*`, and 269 "meant to injure" occurrences in dist. Chrome not connected. |

## What this method could not have found

- **Ceilings stated without the swept words.** A match ceiling stated without "match", "injure", "protect", "defenceless" or the rule numbers would escape every sweep.
- **Adjacency calls not checked by reviewers.** Adjacency LEAVEs that reviewers did not render-check, and chunk boundaries that later edits will move.
- **Supplementary discipline.** EIHL DOPS supplementary discipline is not on disk.
- **The referee's judgement.** Whether a referee will find intent. Every book makes that a judgement, and "is a match" carries it implicitly.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
