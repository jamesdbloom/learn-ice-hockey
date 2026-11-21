# W618–W619: IHUK discipline claims scoped "Outside the Elite League" (21 November 2026)

## W618 (rules-verifier, read-only)

**The line checked.** One IHUK DOPS facts Rule line was word-identical in 8 documents (md5-confirmed):
- offensive_zone_play :973
- goaltender :1380
- risk_management :854
- playing_without_the_puck :830
- defender :293
- center :896
- winger :902
- game_management :178

**Source.** IHUK DOPS Rules and Procedures 2026-27 (`eih_dops_2026-27_layout.txt`).
- §5 (:117-123) reaches "IHUK-registered participants whose ice hockey club is based in England or Wales".
- C.1 (:411-417) keeps the mandatory one-game bans "at all levels".
- s.11 (:174-177) adds one game in every other league or age group.

**Verdict:** no claim contradicted, and it errs harsh.

**One over-broad scope.** The Elite League has its own Department of Player Safety (`eihl_casebook.txt` Rule 28, :404-419). An English or Welsh Elite League club therefore satisfied both "At a club in England or Wales…" and "in the Elite League … plan on the same ban". Both gave the same advice, so it was not dangerous, but the scope collided.

**Also noted**
- C.1's triggers are acts, not calls. The game misconduct and boarding major are a reading, disclosed in game_management's trailer, and it errs harsh.
- C.1's "Mandatory IIHF one-game bans" cannot be traced to any IIHF text on disk. The IIHF Disciplinary Code is not on disk.
- Four hosts cited DOPS without naming it in their Sources: defender, center, winger, risk_management.

## W619 edits (two agents, disjoint files)

**The 8-copy line**, replaced verbatim at all 8 sites (297/300): "Rule: Outside the Elite League, at an English or Welsh club a game misconduct for checking from behind or a head check, or a boarding major, is at least a one-game ban in every league or age group you are registered in (IHUK DOPS C.1, s.11); in the Elite League, Scotland or Northern Ireland, plan on it".

**The same claim everywhere else.** About 40 more DOPS-discipline claims across 16 files were scoped the same way:
- C.1 and C.2 late-fight bans
- penalty points (Appendix E)
- slur provisional suspensions
- the suspension panel
- the leaving-the-bench tariff
- the goalie-charge ban

**Specific fixes**
- The late-fight Rule line (goaltender :1181 = special_teams :437) is scoped and kept identical. It is checked against C.2 :469.
- body_contact :653 gained "in the Elite League, plan on the same".
- body_contact :1959 dropped "whatever your league".
- The 4 missing Sources entries were added in the existing trailers' format.

**Left on purpose**
- **uk_rules :306:** In-House competitions only, so it already excludes the Elite League.
- **team_play :660:** both halves are "plan on".
- **England Ice Hockey Rules & Regulations equipment and governance claims:** a different document with a different reach.

**Readability.** Two overruns from the added scope were tightened:
- uk_rules KT19 is back to 60 words, still leading "Expect post-game discipline, even for unpenalised acts".
- team_play :412 is 1,190 characters.

No ⚠️ was added, removed or moved.

## Review

**rules-verifier.** It reviewed the applied wave and found it OK.
- The 8-copy line is verbatim.
- The late-fight line matches C.2.
- Every scoped site keeps an Elite League instruction, and none implies the Elite League is free.
- The sites left alone were right to be left.
- **One missed site:** center :888 body. It is now scoped, and its paragraph is held at 1,199.

## Rows

**Closed:** W612(2).

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w619b.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 16 files.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Whether IHUK DOPS acts at Elite League fixtures in practice.** EIHL DOPS publishes no rules document.
- **Scottish and Northern Irish discipline policies.** Not on disk.
- **DOPS claims scoped by "in Britain" or other wording.**
- **Audio.** Not rendered.
