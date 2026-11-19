# W496: sameness claims in other words and Glossary-against-rule pairs hold up; Special Teams stops saying Hockey Canada has no Possession entry and cites the right rule for its "fair game" route (19 November 2026)

**Files changed:** systems/special_teams.md, project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W495 (1) and (4).
- **Method:** a read-only rules-verifier census, then one author.
- **Reviews:** two confirmation reads.

## Census (read-only)
**(1) Sameness claims worded another way.** The census searched for mirrors, tracks, carries, reproduces, matches, twin, follows, copies, adopts, echoes, repeats, shares, "as the NHL does" and similar wording.
- It found 1,991 sentences. Of these, 328 were candidates and about 95 were real cross-book claims.
- **58 were verified against the primary text: 54 were OK, 4 were SUBSTANCE-ONLY, and 0 were DIFFERENT.** The four SUBSTANCE-ONLY claims are listed below; none needs a fix.
  - rules_primer :948: CARHA 37(d)'s goalie limb adds a leave-the-crease condition.
  - bcb :1810: IIHF 60.4 says "may", USAH 621(b) says "shall".
  - goaltender :1177: the CARHA and HC sentences match, but the prices differ, and the prices are stated separately.
  - special_teams :1062: changed this wave (see below).

**(2) Glossary against rule.**
- **Hockey Canada:** about 33 defined terms, 11 differing in a condition.
- **CARHA:** about 20 defined terms, 7 differing.
- **Corpus sites:** about 40 sites quoting either version were checked, and every one uses the rule where the rule governs.
- **One defect:** special_teams :1345 (below).

## What changed
| Site | Before | Now |
|---|---|---|
| special_teams :1345 (Sources trailer) | ⚠️ "Hockey Canada writes no counterpart to NHL and IIHF 56.1's goalkeeper-possession exclusion… the book's Glossary was read end to end: it has no *Possession* entry." | It now quotes the Glossary POSSESSION entry (`hc.txt:1115-1120`): *"The state of a player, except the goaltender, who is the last one to have come in contact with the puck. A goaltender must have control of the puck before they are considered to have possession"*. It says that entry, "unlike 56.1, lets a goaltender in control of the puck be in possession". The searches had missed "except the goaltender". |
| special_teams :1345, "fair game" route | It cited **Interpretation 2 to 8.3(a)(i)**'s premise clause as the goalie's protection. | It now cites **Rule 8.5**'s *Protection of the Goaltender* (`hc.txt:6988-6990`) as the protection. Interpretation 2 "applies the same premise the other way": a goalie *"may not make deliberate physical contact with opposing players"*, and an *"otherwise legal bodycheck"* *"must be penalized as Interference"*. The old quote was cut short, and its ruling restricts the goalie. |
| special_teams :1062 (facts, voiced) | "…Hockey Canada's Glossary and CARHA 66(a) Note 1 put a goalie outside 'possession'" | "…put a goalie **who does not control the puck** outside 'possession'". This is true in all four books it names (231/300). |

**Why it mattered.** The trailer contradicted its own voiced facts line. A later "reconciliation" could have deleted a correct interference warning, which would be permissive.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (census author) | **First confirmation:** the Possession quote is verbatim (also `hc_2026-08-print.txt:1115`). "Unlike 56.1" holds: NHL and IIHF 56.1 exclude the goalkeeper with no control exception. The facts line is now true in all four books. **NOT CLEAR** on the Interpretation 2 citation, which it judged truncated and pointing the wrong way. It supplied fix text, which was applied verbatim. |

No safety review was run. The trailer is not voiced, and the voiced facts line only narrows to the condition every named book shares, so no instruction changed. The other two citers of Interpretation 2 (goaltender :1354, glossary :566) were read by the coordinator; both use it correctly.

### C11
The coordinator wrote no content.

### D15
No marker was added. One ⚠️ was removed from the trailer together with the false claim it marked. That paragraph keeps its other markers. check_marker_pairs reports 68 → 68 and 0 lost. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exit 0, ending with check-links passing; dist is newer than the edit.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets all pass. check_counts reports no change.

## Found, not fixed
These are census blind spots.
- **The flattener drops short all-caps headings.** EIHL rule attribution needs the `_layout` file.
- **About 35 real cross-book claims in long trailers were not reached.**
- **USA Hockey Glossary-against-rule pairs** (Angling, Physical Engagement, Vulnerable or Defenseless) and IIHF definitions were not diffed.
- **Conditions stated only in Interpretations or CARHA Case Situations** were not diffed against the Glossary.

## What this method could not have found
- Another rule pricing the same act outside a pairwise diff.
- Real synthesised audio.
