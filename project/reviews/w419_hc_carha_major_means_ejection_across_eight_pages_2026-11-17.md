# W419: a Hockey Canada or CARHA major now says it ejects, across eight pages, and CARHA's lone-goalie relief is voiced (17 November 2026)

**Content files changed:**
- systems/game_management.md
- positions/winger.md
- systems/faceoffs.md
- hockey-iq/scanning_and_anticipation.md
- positions/center.md
- systems/defending_the_rush.md
- foundation/language_and_glossary.md
- positions/goaltender.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W418 (1)–(3).
- **Brief:** scratchpad/w419/brief.md, with a W419 addendum. HC 4.4(a) and CARHA 30(a) make any major an ejection. CARHA's exceptions are an accidental high stick and the 16(i) lone-goalie note.
- **Authors:** nine agents, one file each. defender :932 was refuted: chunk 063 already states CARHA 30(a) for a slash.
- **Process note:** the coordinator first launched the authors through the Workflow tool without the owner's opt-in. It was stopped before any file changed (`git status` confirmed) and re-dispatched as ordinary agents.

## What changed (voiced)
| Site | Now |
|---|---|
| game_management CM :1288 | "No book caps a late hit at a minor: every one can reach a major, and a Hockey Canada or CARHA major ejects you. USA Hockey makes a reckless hit a mandatory major and ejection; …". Previously only USA Hockey's major "throws you out". |
| game_management KT14 | "⚠️ **A late hit can cost a major or more, and under Hockey Canada and CARHA a major ejects you. …**" |
| winger facts :505 (294) | "…CARHA 66(b) and Hockey Canada 8.5 (the last two eject on a major), and charging in USA Hockey, no bare minor (607); all six penalise needless contact: no goalie is "fair game"" |
| winger facts :703 (300) | "…its 49(a) penalises not averting body contact: a major ejects (30(a)) and is mandatory if intentional contact injures" |
| winger :787 | "…or at the referee's discretion a major, which ejects (30(a))…" |
| faceoffs facts :1131 (297) | "…CARHA 49(a) in every game, a minor, or a major that ejects (30(a)); …" |
| faceoffs :1140 | Adds: "Under CARHA a major for that lean — mandatory if intentional contact injures — also puts you out of the game (30(a))." |
| faceoffs facts :1170 (293) | "…CARHA 63(a), which may allow a major that ejects (30(a)); …". Previously a flat "allows". 63(a) records a stick-hold as a minor only. |
| faceoffs :1178 | "…may also allow a major — and a CARHA major for it puts you out of the game (30(a))." |
| scanning :372 | "…— and a Hockey Canada or CARHA major for it ejects you (8.5(e), 30(a))." |
| center :747, :749 | "…a minor or a major and game misconduct under CARHA…"; "…under **Rule 30(a)** a major for any of those acts brings a game misconduct, which ends your game." |
| defending_the_rush :1005 | HC 8.7 clipping: "with a major and game misconduct on the degree of violence, mandatory where it injures (8.7(b))" |
| glossary :434, :450 | "…a CARHA major for it brings a game misconduct and at least a one-game suspension (30(a), 32(d))"; "…a CARHA major for it ejects you and bans you for at least a game (30(a), 32(d))." |
| goaltender :1304 | "…up to a major or a match. Under Hockey Canada and CARHA a major for a slash or a cross-check ends your game (4.4(a), 30(a)). A teammate serves your minor…" |
| goaltender :768 | Adds: "If you are your team's only goalie dressed, a CARHA referee may let you stay in the net after a penalty that would eject you, with a teammate serving the time (the lone-goalkeeper note to CARHA Rule 16) — that is the referee's call, so do not count on it. Hockey Canada has no such relief: with no backup dressed, any player on the game sheet can take your place in net (4.13(b))." Also adds "Under USA Hockey a misconduct is ten minutes…". |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** all claims supported. Four tightenings:<br>• "any major" / "a CARHA major" drops the accidental-high-stick exception;<br>• faceoffs :1170 "allows" should be "may";<br>• scanning :372 should name HC 8.5(e);<br>• goaltender :768 should attribute the USA Hockey misconduct sentence.<br>Also checked:<br>• HC has no lone-goalie relief (sweep of hc.txt).<br>• 16(i) Note 1, 4.13(b), 8.5(e), 8.7(b)/(e), 9.2(e) and 9.3(e) are verified.<br>**Confirmation:** all nine post-review edits OK. |
| safety-reviewer | **First read:** no Critical or Major, nothing cheaper. Minors:<br>• "for it" scoping (m1/m2);<br>• "16(i)" voiced "sixteen, clause one" (m3);<br>• faceoffs "(an ejection, 30(a))" heard as a third option (m4).<br>Upheld "the last two", "defenders" and "that lean".<br>**Confirmation:** CLEAR, including the author's "those acts" at center :749 ("for it" would have pointed at the injury). |
| site-reviewer | Eight pages at 400×812 DPR 2 light/dark and 1440 light, on the 15:25:08 build.<br>Seven worst windows unchanged; game_management 39.2 → 42.3, from the 350-character KT14 amber run.<br>Nothing over 50%. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text or an author correction confirmed by both reviewers:
- center :749 "those acts";
- goaltender :768, the content-only citation after the prefixed form still mis-rendered;
- faceoffs :1170 and scanning :372, combined texts.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 15:25:08, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT on all eight files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **HC:** 4.4(a), 4.13(b), 8.1, 8.3, 8.5(b)/(e), 8.7(b)/(e), 9.2(e), 9.3(e). **CARHA 2026:** 16(i), 30(a), 32(d), 49(a), 54, 63(a)/(b), 66(a)/(b), 80. **USAH:** 404(a), 407, 607, 640(g). |
| D2 Exceptions | CARHA accidental high stick; 16(i) lone goalie; 63(a) stick-hold minor |
| D3 Cross-book divergence | HC has no lone-goalie relief (4.13(b) instead) |
| D4 Citation integrity | "(607)" covers 607(a)/(c)/(d) Note 1; 8.5(e) |
| D5 Provenance | 16(i) moved from trailer-only into a voiced unit; trailer keeps the exact clause |
| D6 Negative existence | "Hockey Canada has no such relief" swept in hc.txt |
| D7 Cardinal rule | "do not count on it" on the discretionary relief |
| D8 Numeric ownership | 32(d) "at least a game" |
| D9 Summary layer | game_management CM and KT14 fixed together |
| D10 Key-facts | winger :505/:703, faceoffs :1131/:1170 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | "16(i)" mis-voicing worked around; "(an ejection…)" reworded |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **scripts/md_to_speech.py `ALPHABETIC_I_RULE`.** It covers only HC 2.2 and 5.2, so "N(i)" citations voice as "clause one". There are about 158 sites in content. Extend it to CARHA (and other books' letter clauses) between waves.
2. **game_management KT14 amber run (350 characters; window 42.3).** If it grows, end the amber after "a major ejects you."
3. **scanning :372.** It still lists no Hockey Canada price for deliberate contact with a goalie (only the ejection clause names HC).
4. **goaltender "Who serves it" bullet.** The earlier USA Hockey 407(b) sentence is scoped only by its citation. The bullet is also silent on whether CARHA 16(i) relief affects the 32(d) suspension (the book says nothing).
5. **Other "any CARHA major" wording predating this wave** may carry the same accidental-high-stick overreach. It was not swept.

## What this method could not have found
- Hockey Canada Member or league regulations that might grant a lone-goalie relief.
- CARHA's in-season updates.
- HC or CARHA prices worded without "major".
