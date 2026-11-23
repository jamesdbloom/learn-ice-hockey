# W625: USA Hockey match reword, batch 2 (22–23 November 2026)

This batch continues the owner's W521(2) decision of 22 Nov 2026. The decision, its exceptions and batch 1 are recorded in `w624_usah_match_reword_batch1_2026-11-22.md` and `project/working_guidance.md`.

**The form.** Where the act's own USA Hockey rule says a match "may also be assessed", write "a mandatory major and game misconduct (6xx(b)), and it can be a match (6xx(e))".

**"Plan on a match" stays** for:
- 602(a) attempt to injure;
- 608(c);
- 627(b);
- Casebook 620 Sit. 4, with its purpose "to punish or intimidate";
- Casebook 622 Sit. 3, fingers inside the facemask and then twisting or pulling;
- acts with no reckless tier of their own (625 interference/picks, holding, and adult men's late hits, which 640(b) excepts).

## Files and sites

- **body_contact_and_battles:** 62 lines, including 23 facts lines.
- **playing_without_the_puck, center, winger:** 41 lines.
- **faceoffs, zone_entries, offensive_zone_play:** about 45 lines.

Rule letters were verified in flattened `usah.txt` / `usah_casebook.txt` by each agent and re-verified by each reviewer.

## Review: three safety-reviewers, all OK after repairs

**MAJOR, faceoffs :1216 (facts) and :1226.** The conversion had narrowed the old "in any game … 602(a)" reckless price to games where checking is barred. That left a reckless check at the wall in a checking game unpriced in the file, and the facts line is heard alone. It now prices boarding in a checking game (603(b)–(c)), alongside 604(d)–(e) and 602(a). Re-checked: OK.

A corpus check of both batches' diffs for other narrowed "in any game … 602(a)" clauses found only this one.

**Minor repairs, all re-checked OK:**
- **body_contact :670 / :2091, late hits.** "Plan on a match" is now scoped to adult men. Others get the 640(g) floor and the 640(h) "can be".
- **body_contact :688 / :1764.** 640(h) is no longer stated as certain.
- **body_contact facemask.** Casebook 622 Sit. 3 has no purpose test, so the wording "to twist" became "that then twist".
- **faceoffs :1321.** A loose antecedent; it now reads "All three … under that Situation".
- **ozp :1230.** The adult-men residual now says to plan on 602(a)'s match.
- **winger :813.** "the same" became "also mandatory".
- **pwtp :521.** The pick's own 640(h).

**Accepted.** In capped facts lines, "likely multi-game ban" was cut where another unit on the page states it: center :891, winger :797/:813, ozp :687/:971.

**Optional, carried to the plan:**
- body_contact :688's grammar.
- pwtp :536/:1014/:1052, which are harsher than :521.

## Gates on the final tree

- check_counts --update: exit 0.
- Full npm run build (v22.23.4): exit 0, after every edit (`scratchpad/build_w625.log`).
- Exit 0: check_facts, check_absolutes, check_geometry, check_secrets, check_caption_pairs, check_tables.
- --bare: 0.
- check_marker_pairs: 0 lost ×7.
- check_readability: 0 long paragraphs.
- check_links --quiet: run after this record was written.

## What this method could not have found

- A USA Hockey match stated as certain without "match", "plan on" or "602(a)".
- Audio chunk distance between a floor and its "can be a match". Not rendered.
- About 16 smaller files remain for batch 3.
