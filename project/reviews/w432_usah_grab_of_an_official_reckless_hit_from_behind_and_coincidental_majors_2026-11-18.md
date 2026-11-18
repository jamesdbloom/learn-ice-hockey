# W432: a USA Hockey grab of an official is no longer priced at a bare misconduct; a reckless USA Hockey hit from behind is "plan on a match", not a flat mandatory one; leaving the bench is short-handed only without coincidental majors; and the IIHF suspension for a puck shot at an official is "reported" (18 November 2026)

**Content files changed:**
- off-the-ice/team_play_and_culture.md
- systems/game_management.md
- technique/shooting.md
- systems/defending_the_rush.md
- foundation/rules_primer.md
- technique/body_contact_and_battles.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W431 (1), (2), (3) and (5) (part).
- **Brief:** scratchpad/w432/brief.md, with a W432 addendum covering:
  - USAH 601(c)(7)/(d)(4)/(d)(8)/(e)(1)
  - Casebook 601 Situations 12/21/22
  - 608(a)–(c) and Casebook 608 Situation 1
  - 602(a)
  - IIHF 40 (no minimum; no match penalty)
  - 403(c)
- **Authors:** six agents, one file each:
  - A team_play
  - B game_management
  - C shooting
  - D defending_the_rush
  - E rules_primer
  - F bcb

## What changed (voiced)
| Unit | Now |
|---|---|
| team_play :404 (+ trailer :747) | "USA Hockey prints a misconduct for touching or holding an official, but its Casebook makes a grab at least a game misconduct, and physical contact with one, or resisting a linesperson in an altercation, is a game misconduct too — so plan on being thrown out and missing your next game (404(b))." HEAD priced a grab at a misconduct (**PERMISSIVE**). The trailer now quotes 601(c)(7)/(d)(4)/(d)(8)/(e)(1), Casebook 601 Situations 21/22/12 and 404(b). |
| game_management :1227, facts :1192 (299) | "⚠️ **If the hit is reckless, under USA Hockey plan on a match** (**602(a)**) — it is mandatory where excessive force meets a vulnerable or defenceless player (**608(c)**) — and on a likely multi-game suspension." The amber now holds only the instruction. :1192 reads "reckless, plan on a match, likely multi-game ban (602(a))". HEAD said "a match is mandatory" (harsh). |
| shooting facts :509 (300), :511 (299) | :509: "…at least a major + game misconduct if reckless, forceful at the boards, head first into boards or net (608) or careless head, face or neck contact (620(b)); reckless, plan on a match (602(a)), a must for excessive force on the vulnerable or defenceless (608(c))". :511: "…USA Hockey 602(a) for an attempt to injure, and plan on one if reckless, with a likely multi-game ban". An interim "ejection" was ruled **MAJOR** by safety because it dropped the 404(b) next-game suspension. |
| dtr facts :318, :325, :440, :544 + new :545 | :544 was split into two Rule lines. The first gives the 608(a) floor, plus a major + game misconduct if forceful at the boards, head first, reckless, or careless head/neck contact. The second (:545) reads "plan on a match for a reckless hit from behind; it is mandatory with excessive force on a vulnerable or defenceless player (608(c)) or for one meant to injure (602(a)); likely multi-game ban either way". :318, :325 and :440 read "reckless, plan on a match; meant to injure, a match". :325 adds reckless to its ejection list and drops "likely multi-game ban" to fit 299; :318, :545 and body :943 still carry the ban. :440 reads "both if reckless, and plan on a match". The author rejected a sketch that cut "head first into boards or net" to "head first" (broader than 608(b)). |
| rules_primer :588 | "…a game misconduct (39.5(vi)), with an automatic suspension in the NHL and the PWHL (40.4); under the IIHF it is reported for suspension (40.4, 40.5). In all three, throwing any object at a spectator is an automatic game misconduct (23.8)…" |
| rules_primer :853, :1065 | The amber now covers only the hazard: "So under CARHA, charging a goalie in their crease, or hurting one by a charge or interference," (97 chars, was 246) and "Deliberate force against one" (31, was 225). Each tariff is in plain bold, with no words changed. Windows dropped from 24.4 to 13.4 and from 33.2 to 11.2. |
| bcb facts :1964 (294), body :1982 | "…the team kills that major shorthanded (403(a)) unless the other team takes an equal number of majors, which allows a substitute (403(c))". Body :1982 adds "…unless the other team takes an equal number of majors, when *"immediate substitution will take place"* (Rule 403(c))". |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** no WRONG; every quotation verbatim. Found Casebook 602 Situation 1 ("the match penalty must be assessed" for little regard to consequences), so game_management :175/:1187/:1235 (the 640 fallback to 602(a)) stay "a match", which is correct. Ruled :1065's flat IIHF game misconduct OK (Situation 40.2 gives a push a game misconduct). Optional text for dtr :545 and :325 (both applied). Flagged a 39.5(vii) tension at :588 (harsh).<br>**Confirmation:** all six post-review sites OK. |
| safety-reviewer | **First read:** MAJOR at shooting :509 ("ejection" dropped 404(b)'s next-game suspension; fixed with safety's text). Minors: :509 "a must" placement; dtr :440 "and plan on"; team_play :404 "+ missing your next game". All applied.<br>**Confirmation:** CLEAR. Dropping "likely multi-game ban" at dtr :325 is acceptable (the line still names the match; three carriers keep the ban). |
| site-reviewer | Six pages at 400×812 DPR 2 light/dark and 1440 light, on the 02:00:02 build. Every worst window unchanged. Nothing over 50%. 0 bare, 0 untreated, 0 panels, 0 console errors. The three re-bounded runs form warn-inline in the built HTML. rules_primer is now 230 inline and 0 panels (the W431 panel is confirmed gone). |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text applied by the file's author, or an author deviation that a reviewer confirmed:
- dtr two-line split
- "CARHA floor"
- team_play dropping "any physical contact" (Situation 12)

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 18 Nov 02:00:02; the last content edit was 01:41:39.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** --bare 0; **--panels 0 on all six files**.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all six.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 403(a)/(c), 404(b), 601(c)/(d)/(e), 602(a), 603(b)/(c), 608(a)–(c), 620(b), 625, 629, 640(b)/(g)/(h); Casebook 601 Situations 12/21/22, 602 Situation 1, 608 Situation 1, 629 Situations 1–4. NHL/PWHL 23.8, 39.5, 40.1–40.5. IIHF (both editions) 23.8, 39.5, 40.1–40.5, Situations 40.1/40.2; Disciplinary Regulations 2026. CARHA 2026 52, 71(a). |
| D2 Exceptions | 608(c) conditions; 403(c) coincidental majors; Situation 12 simple touch |
| D3 Cross-book divergence | NHL/PWHL automatic vs IIHF reported suspensions |
| D4 Citation integrity | 404(b) and 403(c) quotations verbatim; trailer quotations verbatim |
| D5 Provenance | team_play trailer adds Casebook 601 situations |
| D6 Negative existence | No other corpus carrier of the USAH "touch is a misconduct" claim (rules-verifier sweep) |
| D7 Cardinal rule | "plan on a match" for the book's 602(a)/608 conflict |
| D8 Numeric ownership | Not engaged |
| D9 Summary layer | Claim layer-tested per file; dtr and shooting facts brought into line with their bodies |
| D10 Key-facts | shooting :509/:511, gm :1192, dtr :318/:325/:440/:544/:545, bcb :1964 read alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | "a must" placement; "and plan on"; amber ends on the instruction |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **rules_primer :588:** 39.5(vii)'s "in general … minor, then misconduct, then game misconduct if they persist" sits against the flat "is a game misconduct (39.5(vi))". This errs harsh.
2. **dtr :325:** "ejecting" omits the 404(b) next-game suspension. This is inherited, and the line is at 299/300.
3. **game_management:** the second amber run in the :1227 paragraph (112 chars) carries "(7.5(c))" inside the amber.
4. **IIHF v1.1 URL** (carried from W431 (4)).
5. **Not layer-tested this wave:** Common Mistakes and Key Takeaways in these six files for HEAD wording that may remain.

## What this method could not have found
- USA Hockey referee practice on 602(a) against 608(b).
- The Standardized Discipline Policy's ban figures (not opened).
- Real audio.
