# W506: on-head and time-out sibling sweep across 19 documents (19 November 2026)

Five editing agents worked in non-overlapping files. Each used the shared W504 brief plus a W506 addendum (`scratchpad/w506_add.md`) covering two sweeps:

- **A.** Align on-head Hockey Canada planning wording to the owner, body_contact_and_battles. The target is "plan on a game misconduct anyway, which head contact reaches on the violence (7.6(b), (e); 7.7(b), (e))". For a goalie, the target is "still plan on the major and game misconduct for a charge, and a game misconduct otherwise". Every match limb is kept, and off-head and goalie 7.5 citations are left alone.
- **B.** Every Hockey Canada time-out statement gets "where it has one" (6.17(e) Note 3). "May not change during it" is scoped to 6.7(d)'s categories.

The agents also took W505(1), (3) and (8).

## Review

Two combined rules-and-safety reviewers split the 19 files. Neither found a critical or major issue, and neither found an edit that makes an act cheaper than the book.

The reviewers found minors that were repaired:
- **forechecking_systems :809 and center :791** (permissive in what it costs the team). For a goalie hit that reaches the head, they said only "plan on a game misconduct". That dropped the five-minute major for a charge, because it followed the 8.5(b) charge rung. Both now use the owner's goalie wording.
- **shooting :510 (facts).** It stated a head-contact charge major as mandatory, when 7.6(b) is discretionary unless the player is injured. It had also lost "7.7 in Junior/Senior unless minimal".
- **shooting :542.** A leftover "dearer of 7.5 and 8.5" for the on-head case.
- **switching_positions :274 and offensive_zone_play :1187.** "The harsher of the two" now named both rules. Voiced, the citation group in between made "the two" sound like 7.6 and 7.7.
- **forechecking_systems :222.** A wording nit.

Each repair used the reviewer's own sketch or the owner's wording, is confined to its finding, and widens nothing. No reviewer re-read them after they landed. This is the C11 terminating case.

The reviewer ruled on the brief's main question. Is 8.5(b)'s charge major still reachable on the head when Hockey Canada 7.6 supersedes all but fighting? Not through 8.5. On the head the major comes from head contact: 7.6(b) on the violence and mandatory if the player is hurt, and 7.7(b). So "plan on the major and game misconduct for a charge" is correct planning advice, slightly harsh where 7.6(b) is discretionary. The old "dearer of 8.5 and 7.5" on the head attributed the price to rules that 7.6 supersedes.

## What changed (about 60 edits)

- **rules_primer, shooting, language_and_glossary.**
  - 12 sentences aligned.
  - rules_primer :339 fixed a real error: "Below those categories" implied U18AAA always has a time-out. U18AAA is minor hockey, so Note 3 reaches it.
- **goaltender, winger.**
  - 11 edits.
  - At five goalie sites the "dearer of 8.5 and 7.5" was being applied on the head. They are aligned on the head and left correct off it.
  - goaltender :1281 and :1632 gained "the IIHF" in the "off your head" scope. The old "never a bare minor in any book" was false on the head under IIHF 48.2.
- **forechecking_systems, center, faceoffs.**
  - 16 repairs.
  - W505(1): forechecking :339's prose no longer repeats the caption's body-check prompt. The 604(b) per-fixture substance stays in the same paragraph, and facts :320 still says it.
- **risk_management, switching_positions, passing_and_receiving, offensive_zone_play.**
  - 7 sites aligned.
  - switching_positions' after-icing facts line was split into two lines. It now adds the PWHL (83.2, 83.4, 89.1), which closes W505(3). It no longer says "impose neither", which could be heard as CARHA allowing a time-out (W505(8)).
- **defensive_zone_coverage, special_teams, scanning_and_anticipation, on_ice_communication, how_to_watch_hockey, puck_support_and_spacing, time_and_space.**
  - 9 edits.
  - body_contact_and_battles was already correct.
  - One special_teams time-out line that W505 had missed now has "where it has one".

## Hits the two greps still return, and why each stays

A sweep for `checking from behind's` and `7\.5's` after the wave returns 14 lines. Each was read in context by its agent and a reviewer:

| Site | Why it stays |
|---|---|
| rules_primer :495 | 7.5's preamble on the onus, not a price |
| shooting :510, :540 | goalie "dearer" sentence off the head; on-head clause aligned |
| body_contact_and_battles :1391 | owner's goalie sentence, which is the model |
| winger :875 | off-head 7.5(c) match; on-head clause aligned |
| goaltender :1281, :1632, :1636 | off-head "dearer of 7.5 and 8.5"; on-head clauses aligned |
| center :791, forechecking_systems :809 | off-head goalie "dearer"; on-head clauses aligned |
| forechecking_systems :983 | IIHF: "Rule 48 says it supersedes and allows a minor, but plan on the major and game misconduct" |
| forechecking_systems :1186 | Sources line (not voiced), aligned in wording |
| special_teams :1134 | off-head goalie half; on-head half aligned |
| defensive_zone_coverage :956 | Sources citation list, no price |

The head-first-drive-into-the-boards wording that leans on 7.5 on the head (row W503(5)'s open question) stays at eight sites, all listed in plan row W506(7) with the grep that finds them:
- rules_primer :491;
- winger :873;
- faceoffs :1215;
- switching :274;
- offensive_zone_play :1187;
- forechecking_systems :986 and :1186;
- the owner, body_contact_and_battles :793.

It is harsh in direction and not unsafe. One of these was **added** in this wave: forechecking_systems :1186, the Sources trailer. It gained "and on the dearer of the two rules for a head-first drive" to match the same file's :986. The commit gate caught that an earlier draft of this record said none was added.

## Rows closed

- W505(5)
- W505(6)
- W505(1)
- W505(3)
- W505(8)

## New plan rows (From W506)

| Row | Site | Issue |
|---|---|---|
| (1) | puck_support_and_spacing :432 facts | An unscoped icing bar, and an implied CARHA time-out. Both predate this wave. |
| (2) | how_to_watch_hockey | Needs 6.1(f) alongside 6.1(g). |
| (3) | switching_positions :291 | "line change bar" can be heard as one noun. |
| (4) | special_teams :1134 | Optional match parity. |
| (5) | forechecking_systems :339 | The per-fixture limb is out of the amber run. |
| (6) | — | Readability of "where it has one". |
| (7) | eight sites | The head-first-drive 7.5 wording (full list and grep in the plan), which points to W503(5). |
| (8) | breakouts :108, :129 | Hockey Canada time-out without "where it has one". Missed by this sweep; found by the commit gate's wider grep. |
| (9) | language_and_glossary :566, defensive_zone_coverage :946 | Sources-only Note 3 gloss without the championship mandate. |

## Gates on the final tree

- `check_counts --update`: no change.
- `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check-arrivals`: all exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, 57 pages and 13,069 links resolve.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 0 lost across all modified files.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. Both reviewers re-read: HC 6.7(d), 6.17(e) Notes, 7.5–7.7 with interpretations, 8.5; IIHF 43, 48; PWHL 83.2, 83.4, 89.1; CARHA 19, 65; USA Hockey 604(b), 624, 636(f). |
| D2 exceptions | Covered: 6.7(d) categories; Note 3 including championships; 7.7 minimal violence. |
| D3 cross-book divergence | Covered: after-icing by book; head scope by book. |
| D4/D5 citations | Not engaged. Sources trailers gained 6.17(e) references only, and the rule was read this session. |
| D6 negative existence | Covered as a true negative: CARHA writes no time-out (plan row W503(6) remains). |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered for both greps across all 26 documents (table above). Paraphrases are out of reach. |
| D10 facts layer | Covered: the reviewers checked every changed facts line for caps and voiced-alone meaning. |
| D11 reader safety | Covered: two safety-reviewers. Every match limb was traced, and two cheaper-for-the-team minors were repaired. |
| D12 read-aloud integrity | Partly covered. Agents rendered every file in their first pass, and the reviewers rendered five. The repair edits were not re-rendered. No ear test. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links, antecedent fixes, check_caption_pairs. |
| D15 rendered site | Structural only (no Chrome; plan row W501(14)): 0 bare glyphs, 0 stray asterisks. |

## What this method could not have found

- **Paraphrases.** An on-head price or Hockey Canada time-out stated in words neither grep matches.
- **Unsettled rules.** Whether 7.5(c) runs alongside 7.7 on the head in Junior and Senior, and whether 8.5(b) survives on the head in Junior and Senior. Nothing on disk settles either.
- **Re-rendering.** The repair-round edits were not re-rendered.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
