# W578–W579: facts lines name their subject instead of pointing at a heading, and winger's net-front cross-check gets the from-behind route (20 November 2026)

## W578 B: winger (W576(1))

Winger's four net-front cross-check units are :804, the facts line ~:809, :813 and Common Mistakes :925. The page itself says a skater boxing you out "usually has their back to you", so each unit now says a cross-check into that back can be called checking from behind:
- **NHL, PWHL and IIHF:** no minor.
- **CARHA:** a game misconduct even on the minor (53, Note).
- **Hockey Canada:** applies if you are moving (7.5(a)). The first draft omitted this limit, which made it harsher than Interpretation 1; it was added on the coordinator's correction.
- **USA Hockey:** the W577 clause. After review, the body and Common Mistakes sites carry 608(a)–(c) in full. The facts line, at its cap, carries the 608(a) floor only.

## W578 A: census (content-reviewer, read-only; W518(3))

Every ```facts line is voiced alone. The census triaged all 577 facts-layer hits from `check_unit_openers.py --loose --demonstratives`.

**Result: 210 defects**, where a pronoun or demonstrative's only antecedent was a heading or an earlier line. The table is at `scratchpad/w518_3/defects.tsv`.

| Tier | Count | What it covers |
|---|---|---|
| 1 | 28 | Rule or safety lines, or a pronoun that points at the wrong thing |
| 2 | 118 | A named technique, system or play is lost |
| 3 | 64 | they/them meaning the section's one opponent |

## W579: six agents, one per file group (brief `scratchpad/w579_common.md`)

All Tier 1 and Tier 2 rows were applied across 24 files; Tier 3 was not. Every agent checked each sketch in context. About 20 sketches were reworded and several were judged wrong.

**Corrections of substance:**
- **body_contact :1995: a false claim removed.** It said the IIHF prices leaving the box during a fight "the same way" as USA Hockey. USA Hockey Casebook 629 Situation 1 gives a major and game misconduct, for a player whose penalty had expired. IIHF Situation Handbook 70.1 gives "an additional minor penalty plus a game misconduct", for a player still serving. The line now states the IIHF case alone. A coordinator grep found no other "same way" carrier of this claim.
- **faceoffs :793.** The sketch, "Hockey Canada and CARHA write encroachment differently", was false: the two glossaries are word for word the same. The line now reads "draw the stick line at the hash marks".
- **defending_the_rush :237.** "A carrier" would have narrowed a boarding hazard during an icing race, so it reads "anyone".
- **center :864.** Now "its no-change-on-icing rule", the book's own name for 6.7(d).
- **special_teams :115.** "This" had landed on "diamond"; it now names the 1-3-1.

**Safety lines:**
- **body_contact :527, the "Never" line for no-check leagues.** After review it reads "Deliver a body check, push or shove of any kind", because CARHA 49(a) prices pushes and shoves too.
- **body_contact :1069/:1070.** Concussion aftercare now names "a possibly concussed player".
- **defender :438–:440.** "Anyone", which is broader than before.

## Review

**safety-reviewer, with rules check.** It checked every Tier 1 row, every changed sketch, and about 20 Tier 2 rows. No wrong subjects were found.
- **Finding 1 (minor, narrowing).** body_contact :527 "a body check of any kind" dropped pushes and shoves. Repaired.
- **Finding 2 (minor).** winger :804 and CM :925 carried only USA Hockey's 608 floor. Repaired with the W577 clause.
- **Confirmed:**
  - body_contact :1995 (iihf_situations Situation 70.1).
  - faceoffs :793: both glossaries read "not in the area between the hash marks".
  - puck_handling :301, against carha_2026.txt Rule 69.
  - special_teams :1165 and :1167, goaltender :1408, center :864, ozp :719.
  - All "anyone" substitutions.

## Rows

**Closed:** W576(1), and W518(3) for the facts layer (Tier 1 and 2).

**Still open under W518(3):**
- 64 Tier 3 rows.
- 1,037 non-facts hits.
- Subjectless facts lines.
- Pronouns beyond the six-word window.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_links --quiet`: run after this record was written.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w579.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 25 files, 0 lost. No ⚠️ was added, removed or moved.
- `check_unit_openers` facts-layer hits fell in every edited file; the agents' reports give the per-file figures.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: rule-flagged rows checked against the source text by agents and reviewer |
| D5/D12 | Covered: facts lines voiced alone now name their subject |
| D11 | Covered by the safety-reviewer |
| Others | Not engaged |

## What this method could not have found

- **Facts lines that are unclear when heard alone without a flagged word.**
- **Audio.** None of the lines was rendered.
- **Repetition.** Adjacent facts lines now repeat a subject's name, which is right for a listener but may read as repetitive on the page.
