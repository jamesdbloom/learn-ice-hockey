# W422: CARHA "any major ejects" now names the act on seven more pages, and the goalie bullet now says which majors eject at once before it counts majors (17 November 2026)

**Content files changed:**
- technique/shooting.md
- technique/puck_handling.md
- hockey-iq/time_and_space.md
- systems/neutral_zone_systems.md
- positions/center.md
- positions/defender.md
- positions/goaltender.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W420 (1), the census body units left after W421, and From W420 (3), the goalie lone-goalie relief and the IIHF/NHL 27.2 repeat majors.
- **Brief:** scratchpad/w422/brief.md, with the W421 and W422 addenda. The W422 addendum warns that narrowing to a rule name can drop a route (CARHA 49(b)), that "the major" attaches to the injury major, and that every USA Hockey major ejects.
- **Authors:** four, each owning its files exclusively:
  - A: shooting and puck_handling
  - B: time_and_space and neutral_zone_systems
  - C: center and defender
  - D: goaltender

## What changed (voiced)
| Site | Now |
|---|---|
| shooting :925 | "CARHA 66(e) makes it a major, and 66(b) lets the referee lift deliberate contact with a goalie to one; ⚠️ **any major for interference or charging puts you *"off the ice for the remainder of the game"*** (Rule 30(a))." The interim "a major for interference" dropped the 52(a) charging route. A second interim held 203 characters of amber with citations inside, which pushed the section to 52.1% at 400px. |
| puck_handling :483 | "The major is mandatory when intentional body contact injures. Under Rule 30(a), any major for body contact brings a game misconduct and ends your game." |
| puck_handling facts :462 (296) | "; any major for contact brings a game misconduct (30(a))" |
| puck_handling :535, facts :500 | "any major for holding brings a game misconduct" |
| time_and_space :358 | "Any CARHA major for body contact, into the boards or not, brings a game misconduct and puts you out of that game (30(a))." |
| time_and_space :565 | "…and any CARHA major for body contact with a goalie brings a game misconduct (30(a))." |
| neutral_zone_systems :961 (Notes, not voiced) | Adds ", its Note excepting only an accidental high stick." |
| center :787 | "…a mandatory major there too (66(e)), and any CARHA major for contact with a goalie brings a game misconduct (30(a))." |
| defender :914 | "⚠️ **Any CARHA major for moving a screener brings a game misconduct, which ends your game** (30(a))." |
| defender :946 | "Under CARHA, any major for putting an opponent into the boards brings a game misconduct, and a minor that does so becomes a double minor…" |
| goaltender :768 | "Under Hockey Canada, CARHA and USA Hockey every major brings a game misconduct, so a major takes you out too (Hockey Canada 4.4(a); CARHA 30(a), bar an accidental high stick that hurts no one; USA Hockey's Summary of Penalties), and so does any major in IIHF men's under-20 and under-18 games (201.1) and in British women's hockey (In-House Rule 101). Elsewhere under the IIHF, NHL and PWHL, a major for slashing, cross-checking, spearing, butt-ending or hooking carries its own game misconduct, and any second IIHF major or third NHL or PWHL major ejects you (27.2). Under USA Hockey a match also brings a likely multi-game suspension, a game misconduct suspends you for the team's next scheduled game (404(b)), and a second major in the same game makes it two games at least (403(b))." |

**Refuted or left as they are:**
- **goaltender :1304, :1640 and :1652:** the CARHA lone-goalie relief was not added. Leaving it out errs harsh, the relief is voiced once at :768 with "do not count on it", and both reviewers agreed.
- **goaltender facts :752:** no room, and it errs harsh.
- **Already act-scoped:** defender facts :907, :925 and :943, and :934; the shooting and puck_handling units listed in results.md.
- **time_and_space :358:** the rules reviewer could not trace the unchanged clause "always a major where injury results from … contact into the boards; a match … serious incident". It is the CARHA casebook, Rule 49 Situation 2 (carha_2026.txt :4167-4177), and the Sources trailer at :750 already cites it.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** everything OK except shooting :925, WRONG and minor (52(a) charging route dropped).<br>• goaltender 27.2: IIHF second major, NHL and PWHL third; EIHL and In-House change nothing.<br>• :1640 "all four" verified (HC 4.4; CARHA 80(b), 54(c), 64(b), 63(b); NHL 55.4 and 61.5; PWHL 56.4 and 63.5).<br>**Confirmation:** four sites OK. Goaltender :768 incomplete: spear, butt-end and hook also carry their own game misconduct (NHL 58.5, 62.5, 55.4; PWHL 59.5, 64.5, 56.4; IIHF 58.3, 62.3, 55.3). The reviewer's text was applied. The citation "USA Hockey's Summary of Penalties" was accepted. |
| safety-reviewer | **First read:** no Critical.<br>• MAJOR: the new goaltender 27.2 sentence read as headroom on the count of majors. Slash and cross-check majors already eject; it contradicted the 201.1 and 101 clause; USA Hockey was missing.<br>• Minors: shooting :925 66(b) ordering; time_and_space :358 "that contact"; center :787 "running into" and 66(e) placement; puck_handling "it".<br>• Agreed with leaving out the lone-goalie relief.<br>**Confirmation:** CLEAR. |
| site-reviewer | **First pass, 16:13:03 build:** shooting rose from 43.9 to **52.1** at 400px, over the line, because the :925 amber run was 203 characters. The other six pages were unchanged: goaltender 46.7 (the "Who serves it" window stayed at 14.3), defender 47.7, puck_handling 47.4, time_and_space 45.7, center 36.6, nzs 31.2.<br>**Re-check, 16:16:32 build:** shooting is back to 43.9 and the :925 run is 94 characters on 2 lines. The `***` nesting closes cleanly. Nothing is over 50%. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no new words; its one edit (below) only moved an amber run and a citation. Every other post-review edit is either reviewer text or an author correction confirmed by a reviewer:
- **shooting :925:** rules text and safety ordering merged, confirmed by both reviewers.
- **goaltender :768:** safety text, then the rules reviewer's addition. The author verified each rule against the primary text.
- **shooting :925 amber reorder:** the coordinator proposed this wording to fix the site finding. It moves the amber and the citation only; no word changed. The safety-reviewer ruled it OK before it was applied, and the site-reviewer re-measured it.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 16:16:32, and no content file is newer (the last edit was shooting at 16:15:58).
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all seven files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **CARHA 2026:** 16 Note, 30(a), 32(a)/(d), 49(a)/(b) and casebook 49 Sits 1–2, 52(a)/(b) and its Note, 54(c), 63(a)/(b), 64(b), 66(a)/(b)/(e), 80(b)<br>**NHL:** 20.4, 27.2, 55.3/55.4, 58.5, 59.5, 61.5, 62.5<br>**PWHL:** 20.4, 27.2, 56, 59.5, 60.5, 63.5, 64.5<br>**IIHF** (both editions): 20.4, 27.2, 55.3, 58.3, 59.3, 61.3, 62.3, 201.1<br>**HC:** 4.4(a)<br>**USAH:** 403, 404(b), Summary of Penalties<br>**British:** In-House 101; EIHL Casebook 46.1 |
| D2 Exceptions | CARHA accidental high stick (30(a) Note, 62(b) Note); lone-goalie relief kept at :768 |
| D3 Cross-book divergence | IIHF second vs NHL/PWHL third major; stick majors with their own game misconduct |
| D4 Citation integrity | center 66(e) moved onto its clause |
| D5 Provenance | time_and_space boards-injury clause traced to the CARHA casebook |
| D6 Negative existence | Not engaged |
| D7 Cardinal rule | Lone-goalie relief stays discretionary |
| D8 Numeric ownership | 27.2 counts |
| D9 Summary layer | puck_handling body and facts fixed together; goaltender has no CM/KT major count |
| D10 Key-facts | puck_handling :462 and :500 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads; MAJOR fixed |
| D12 Read-aloud | Antecedents fixed ("that contact", "it"); "30(a)," comma |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **goaltender :768:** other NHL, PWHL and IIHF majors with an automatic game misconduct (boarding, IIHF Table 5/6 entries) could still be counted towards the second or third major. The list names the five stick fouls only.
2. **goaltender, other units:** not swept for a stick major stated without its game misconduct, or for a USA Hockey goalie major presented as bare.
3. **time_and_space :358, optional:** cite "(49 Situation 2)" inline for the boards-injury clause.
4. **center :787 and puck_handling facts :462:** "contact" literally reaches an accidental high stick that hurts no one. This errs harsh.
5. **Sibling documents:** goalie-addressed units elsewhere may carry the same "majors before ejection" framing.

## What this method could not have found
- Every USA Hockey rule checked one by one (the Summary of Penalties says it is "general application").
- League regulations.
- Ejection wording outside the swept vocabulary.
