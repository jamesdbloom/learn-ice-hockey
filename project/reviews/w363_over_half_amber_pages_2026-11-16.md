# W363: the pages still over half amber, the IIHF head scope in defensive_zone_coverage, and a closed count in special_teams (16 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/systems/special_teams.md
- content/technique/shooting.md
- content/systems/defensive_zone_coverage.md
- content/systems/faceoffs.md
- site/src/diagrams/body_contact_and_battles.mjs
- site/src/data/diagrams.json (rebuilt; only the net-front-walk-out-direction caption changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
- W362 plan row (1): four pages with a 400px window over half amber, namely body_contact_and_battles 64.8%, goaltender 58.7%, special_teams 52.6% and shooting 50.0%.
- W362 plan row (2): the next page-worst windows.
- W362 commit-gate note: defensive_zone_coverage facts :166 and :477 scoped the head exception to Hockey Canada only.

Record `w362_amber_density_and_iihf_head_scope_2026-11-16.md`.

## What changed
A caption's amber runs from the glyph to the caption end. An inline amber ends where its `**` ends.

**A: body_contact_and_battles and its .mjs** (no word changed)
- **CM :2059, USA Hockey limb.** Amber cut from 349 to 151 characters: "but a forceful hit on a player facing the wall, a reckless hit from behind, or one that sends them head first into the boards or goal frame ejects you." A second glyph run (106 characters) keeps USA Hockey 620(b) in amber: "Under USA Hockey, careless contact with their head or neck is a mandatory major plus a game misconduct too". Without it the act list would have been closed. The 602(a) "plan on a match" sentence sits between the two runs as plain text.
- **CM :2061 (255 characters).** Left unchanged. Every word-free cut either reads as a closed list missing USA Hockey 608(c) or opens the paragraph with a glyph.
- **net-front-walk-out-direction caption.** Sentences reordered; amber cut from 329 to 191 characters. The amber now holds the two prohibitions: "Never walk a screener out… Move nobody into or across the shaded goal frame and goalie." The hold-the-inside technique sentence is plain text before it. The caption appears in body_contact_and_battles, defender and goaltender.

**B: special_teams and shooting**
- **special_teams :1126 (words changed).** Now reads: "Even with no intent to injure, three books make a match mandatory for a goalie hit from behind: ⚠️ **under Hockey Canada and CARHA if it puts a goalie who cannot protect themselves into the net or boards, and under USA Hockey if it is reckless with excessive force**, boards or not, on a vulnerable or defenceless goalie (608(c))." Amber went from 253 to 163 characters. This is the rules-verifier's text, replacing the author's first pass, which had made the count closed against NHL/PWHL 21.1.
- **special_teams :1128.** "plan on the dearer: a mandatory major and game misconduct for a charge" (8.5(b)). The citation moved out of the amber. The paragraph's opening was reordered so it does not repeat :1126's phrase; this adds no new claim.
- **special_teams "Over the glass".** Unchanged; a shorter version would be a closed list. See the plan row.
- **shooting :532 and :534** (no word changed). Amber cut from 252 to 59 characters ("plan on a match penalty and a likely multi-game suspension.") and from 199 to 40 characters ("is a mandatory major and game misconduct"). The triggers are plain text, so no trigger list can be closed.

**C: defensive_zone_coverage and faceoffs**
- **IIHF head scope.** IIHF 48.1 says head contact supersedes, and 48.2 allows a minor. Changes:
  - dzc facts :166 (300/300) now reads "(under the IIHF or Hockey Canada a head hit can be, but plan on ejection)".
  - dzc :477 now reads "(IIHF or Hockey Canada, head hit: plan on ejection anyway)".
  - dzc body :753 now reads "…as does the IIHF's (48.1). Plan on the game misconduct anyway, because both can start at two minutes, and under Hockey Canada on a match if they cannot protect themselves" (IIHF 48 has no match).
- **Key Takeaways** (no word changed):
  - **Kept shortened:** dzc KT10 (now "never turn your back to anyone coming at you and never duck"), faceoffs KT14 ("Never refuse to put your stick down") and faceoffs KT15 (its permissive opening left the amber; both limits stay).
  - **Restored to their earlier extent after review:** faceoffs KT6, dzc KT11 and dzc KT12.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | No unit wrong; every moved-only unit is word-identical to HEAD. Findings:<br>• special_teams :1126 first pass: a closed count (NHL and PWHL 21.1 give a mandatory match for deliberate injury). Its replacement text was applied.<br>• dzc KT11: the amber, read alone, lost its NHL/IIHF/PWHL scope. Restored.<br>• dzc KT12: understated. Restored.<br>Confirmed:<br>• the IIHF head scope (48.1/48.2/48.3, no IIHF match) and HC 7.6/7.7;<br>• 608(c) has no boards condition;<br>• shooting :532/:534 and bcb :2059 against 602(a), 620(b), 54(b)/(c), and Casebook 608 Sit. 1.<br>Also supplied text for "Over the glass" (plan row) and showed the author's "a minor in every book if deliberate" is permissive. |
| safety-reviewer | **Major: faceoffs KT6.** The shortened amber, "never hit a player turned toward the wall", read alone as conditional permission. "Hit no one until you know your game allows checking" is what a skimmer most needs. Restored to both clauses.<br>**Minor: dzc KT12.** With the goalie pulled, the amber under-priced (penalty shot against awarded goal). Restored.<br>Judged clear:<br>• the net-front caption reorder (the technique sentence carries its own limits; it is not permission);<br>• bcb's new second glyph;<br>• shooting :532/:534 (overprices if anything);<br>• special_teams "net or not" outside the amber;<br>• the dzc IIHF facts lines.<br>An optional shooting :534 change was not applied, because author B avoided naming triggers in the amber to prevent a closed list. |
| safety-reviewer, final read | All post-review edits CLEAR (faceoffs KT6, dzc KT11/KT12, special_teams :1126/:1128). One optional point was not applied: at :1126 "a match" now sits in the plain lead-in just before the amber rather than inside it. Nothing is underpriced, and the reviewer would accept it as is. |


## After the first commit gate (BLOCK on propagation)
The gate blocked because the :1126 count repair had reached only one copy of the claim. special_teams Common Mistakes :1272 (the "back turned" bullet, which is voiced) still opened "Three books make a match mandatory:", the same closed count against NHL/PWHL 21.1.

**Fix.** The author applied the same scope: "Even with no intent to injure, three books make a match mandatory:". The amber run is byte-identical to HEAD, and every limb is kept.

**Corpus-wide search.** A grep for "three books … match" across content/ finds only :1126, :1272 and body_contact_and_battles :637. The gate cleared :637: it names CARHA, Hockey Canada and USA Hockey, and gives NHL/PWHL 43.4 and 21.1 in the next sentences.

**Reviews of :1272.**
- **rules-verifier: OK.** None of the three books requires intent for its match: HC 7.5(c) first paragraph, HC 7.6(c)/7.7(c) "unable to protect or defend themselves", CARHA 53(b), and USA Hockey 608(c) recklessness. NHL/PWHL 43.4 are discretionary, and the IIHF has no match.
  - Optional tightening, not applied: make the Hockey Canada head clause explicitly carry the defenceless condition. As written it errs harsh.
- **safety-reviewer: CLEAR.** The amber read alone names each book's match. The text is heard as one unit (chunk 082), and :1126 and :1272 now agree.

**Plan row.** The plan row that suggested a bare count "in three books:" for bcb :2061 now carries the scope.

**Rebuild and checks.** The site was rebuilt with the absolute npm binary, exit 0. `dist/index.html` is 14:47:45, nothing is newer, and the built special_teams page carries the scoped wording at both sites. These all pass: check_links, check_facts, check_absolutes, check_counts, `--bare` 0, and check_marker_pairs on special_teams (0 LOST, 0 SPLIT).

**D15.** The :1272 change is a plain-text lead-in, with no glyph or bold boundary moved, so the site-reviewer's 14:39 pass still describes the page's amber.

### C11
The coordinator wrote no content. All post-review edits are the reviewers' prescribed texts or reverts. The exception is special_teams :1128's opening, reordered by its author with no new claim, which the final read cleared.

## Checks after the last content edit
- `build-diagrams` ran once.
- A full `npm run build` (absolute binary) ran after the final edit. It exited 0 and ran through check-links. `dist/index.html` is dated 14:39:15, and `find content site/src/diagrams -newer` that file returns nothing.
- Then these all passed:
  - check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets;
  - check_counts --update, with no change;
  - check_callout_flow --bare: 0;
  - check_caption_pairs: 0 violations;
  - check_marker_pairs: 0 LOST and 0 SPLIT on all five content files;
  - check_readability: 0 paragraphs over 1,200.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every changed claim |
| D4 Citations | rule text quoted from sources/ |
| D8 Counts | "three books make a match mandatory" re-derived (HC 7.5(c), CARHA 53(b), USA Hockey 608(c); NHL/PWHL 43.4 discretionary; IIHF none), now scoped "even with no intent to injure" |
| D9 Summary layer | Key Takeaways changed in dzc and faceoffs; each read voiced alone |
| D10 Key-facts layer | dzc facts :166/:477 read voiced alone |
| D11 Reader safety | safety-reviewer twice |
| D12 Read-aloud | rendered SSML for every changed stem and every host of the caption; marked units unchanged |
| D14 Links | check_links, build check-links |
| D15 Rendered site | see below |
| D5–D7, D13 | not engaged |

**D15, rendered site.** A site-reviewer checked the 14:39 build on seven pages: body_contact_and_battles, goaltender, defender, special_teams, shooting, defensive_zone_coverage and faceoffs. It used Playwright Chromium at 400×812 DPR 2 and 1440×900, in light and dark.
- Every changed run forms span.warn-inline, including bcb's new second run (warn-inline count 236 → 237).
- 0 bare glyphs, 0 panels, 0 console errors in 28 loads, no off-origin requests, no horizontal scroll.

Worst 400px window:

| Site | Before | After |
|---|---|---|
| goaltender net-front caption | 58.7% | 36.7% |
| special_teams "A hit from behind" | 52.6% | 43.9% |
| shooting, above "Pull up" | 50.0% | 20.0% |
| dzc Key Takeaways | 40.2% | 37.5% |
| faceoffs page worst | 45.5% | 43.4% |
| bcb CM bullet | 64.8% | **55.3%** |

The bcb CM bullet stays over half amber because the unchanged 258-character :2061 run shares the window.

## Found, not fixed (plan rows)
- **bcb CM :2061 (258 characters).** Shortening it needs a word change, for example a count "in three books". That needs a rules-verifier on "only Hockey Canada, CARHA and USA Hockey make it mandatory".
- **Pages still over half a phone screen.** These pre-date this wave:
  - bcb Key Takeaways: 58.0% (runs of 236, 104 and 211 characters);
  - goaltender Common Mistakes: 53.6% (runs of 165 and 330 characters).
- **High caption window on defender.** The defender page has a 396-character run in "'Step up' and 'pinch'…" at 48.3% at 400px and 67.3% at 1440px including diagram text. That 1440px figure is high enough to look at rather than dismiss as an artefact.
- **special_teams "Over the glass".** The rules-verifier's text is in the plan.

## What this method could not have found
- Hosts of the net-front caption beyond the three rendered.
- Other wordings of the same count (e.g. "only Hockey Canada, CARHA and USA Hockey") that do not use the word "three books"; the grep keyed on the count word.
- Real devices.
