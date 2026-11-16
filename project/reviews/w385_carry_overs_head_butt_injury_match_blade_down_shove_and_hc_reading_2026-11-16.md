# W385: carry-overs from W381–W384, Hockey Canada's injury match in the shared head-butt clause, USA Hockey's blade-down shove, and Hockey Canada's "plan on a match" made a disclosed reading (16 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/foundation/core_principles.md
- content/foundation/on_ice_communication.md
- content/systems/special_teams.md
- content/systems/game_management.md
- content/systems/faceoffs.md
- content/systems/offensive_zone_play.md
- content/positions/winger.md
- content/positions/center.md
- content/positions/defender.md
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

## Source
These are carry-over rows in project/plans/OPEN_ITEMS.md:
- From W384: (2), (3), (4), (5), (7), (8), (9), (10), (11)
- From W383: (1), (2), (3)
- From W382: (2), (4), (5)

Each was briefed as a hypothesis to refute. Three were refuted:
- **rules_primer:** no foul heading in the file names CARHA, so none was added to the hooking heading.
- **on_ice_communication:** CARHA 54(c)'s goalie limb was not added. The page never teaches cross-checking a goalie.
- **game_management :1192:** 53(a)'s discretionary match does not fit the line, which is at 299/300. The same section's body (:1213) states it, and the line gives no ceiling.

## What changed

### Hockey Canada's "plan on a match" for hooking, tripping and holding (rules_primer)
**Background.** HC 8.2(c), 8.6(c) and 8.1(c) bar a match for these fouls. Appendix D Note 1 says a match "shall be assessed for any deliberate attempt to injure".

**What the rules-verifier found.** It rendered the Appendix D chart from the HC PDF with pdftoppm. Hooking, tripping and holding are **not** in its Match column. 7.1(c) reaches only acts "not otherwise covered within the playing rules", so it cuts *against* the reading. The old citation "(7.1(c); Appendix D Note 1)" credited the reading to a rule that excludes these fouls (rules WRONG).

**What changed:**
- **:418 (hooking).** The verifier's text: "…a note to its penalty table says one *"shall be assessed for any deliberate attempt to injure"* (Appendix D Note 1), so for a hook meant to injure, plan on one anyway — that is this guide's reading, since 7.1(c) reaches only acts *"not otherwise covered within the playing rules"*."
  - The CARHA 64(b)/30(a)/48(a) sentence was already at HEAD and is unchanged.
  - Adds a suspension list naming the three books the unit prices: USAH 405(c), HC 4.10(a), CARHA 34(a).
- **:426, :451, :516.** "(Appendix D Note 1) — this guide's reading of the two rules". The 7.1(c) citation is removed. No instance remains in rules_primer. The same claim in comma form ("7.1(c), Appendix D Note 1"), undisclosed, survives in body_contact_and_battles :410 and :1761 and risk_management :675 (commit gate; plan row).
- **:451 (holding the stick).** The unit was about 1,340 chars. It is split into an indented "**What it costs.** ⚠️ **…**" continuation that keeps its own spoken "Important.". The split adds only the "**What it costs.**" label and its ⚠️, one more spoken "Important.". It gains the suspension list.
- **:472 and :496.** PWHL 42.4/42.5 and 50.4/50.5 are added beside the NHL, and the suspension lists now read "NHL and PWHL 21.2".

### Shared head-butt clause (winger, faceoffs, center)
**Sites:** winger CM :898, winger KT11, faceoffs CM :1325, center facts :521.

**The defect.** The clause read "a match under CARHA, or under Hockey Canada with force or injury". That left out NHL 47.4 and PWHL 47.3, which both make an injuring head-butt a match.

**First author fix, and why it failed.** The author first wrote "in most books if it injures", folding Hockey Canada's injury limb into that phrase. Both reviewers flagged it:
- The new wording no longer named Hockey Canada (safety Major 1).
- In winger KT11, the sentence before tells a Hockey Canada player only "plan on an ejection if it injures".

**What changed.** Shipped wording (rules-verifier R2): "…a double minor or more in every book, an ejection in most, and a match under CARHA, under Hockey Canada with force or if it injures, and under the NHL and PWHL if it injures".
- center :521 carries the citations: 48(b), 7.1(c), 47.4, 47.3. It is 267/300.
- USA Hockey 619(b) ("may") and the IIHF (no match penalty) are correctly not named.
- The author first suggested "a match in several, including whenever it injures". The author refuted it, since it is false for the IIHF and for USAH 619(b).

**Other edits:**
- **winger facts :561** now reads "plan on a helmet lead being called head-butting".
- **faceoffs :1162** no longer has a doubled "the referee".

**winger KT11 length.** 149 → 153 words, counted by whitespace with markup, the list number and ⚠️ stripped.
- The safety reviewer's compression was declined because it dropped four mandatory tiers:
  - USAH 620(b): ejection for a careless or worse clash;
  - HC's ejection for a violent clash;
  - HC 7.6(c)/7.7(c): match;
  - the defenceless-player match.
- The safety reviewer agreed on its final read.
- The head-butt amber run now ends at the instruction "If you lead with your helmet, plan on a head-butting call:". Its worst 400px window fell from 48.4 to 44.2.

### defender
- **KT3.** "it can be interference" became "driving them off can be interference". The cross-check is not interference.
- **CM :1014.**
  - The bullet said "Under Hockey Canada and CARHA a two-handed shove is also cross-checking", which implied the other books do not count it. It now says: "In every book a two-handed shove with the stick can be called cross-checking; under Hockey Canada and CARHA one that injures or lands above the shoulders ends your game, a violent one can in any book, and under USA Hockey a reckless one must."
  - The safety reviewer's earlier sketch, "in every book but USA Hockey", was refuted.
  - The closing "must" is safety Minor 4 (609(b) "shall").
- **:312 (facts) and :325 (body).** These said only USA Hockey's 609 Note keeps a blade-down shove out of the definition. That omits the USA Hockey Casebook's own limit (609 Situation 1): the excuse holds only "for the purpose of attempting to gain possession of the puck", and a forceful shove "if there is no attempt to play the puck" is a cross-check.
  - The author found this.
  - The first facts wording, "with no puck to play", was narrower than "no attempt to play it" (rules WRONG, safety Major 2). The shipped text is safety's: "…excuses a blade down only while you play the puck (Casebook 609 Sit. 1): a forceful shove with no attempt to play it is a cross-check". It is 286/300.
  - :325 dropped "in five of the six books". Its ⚠️ now sits on the Casebook limit.

### special_teams
- **:1116.** Adds "CARHA can give one for any hit from behind (53(a))" and a suspension list for every non-IIHF book.
- **:1126 and CM :1272.** Each gains a suspension sentence for the books it prices.
- **KT8.** Safety Major M1: it gave a USA Hockey match a suspension but gave the HC and CARHA matches none. It now ends "Any of these matches keeps you out of later games until your case is dealt with, and under USA Hockey that likely means a multi-game suspension." KT8 went from 127 to 148 words; no tier could be cut.
- **New facts line :1114.** "Rule: A match keeps you out of later games until your case is dealt with: NHL and PWHL 21.2, Hockey Canada 4.10(a), CARHA 34(a); USA Hockey 405(c) bars practices too".

### Smaller completions
- **core_principles KT10.** 69 → 65 words. The trim was followed by the safety reviewer's two wording fixes: "a major with a game misconduct" and "barring you from games". The rules-verifier ruled that "can cost … a major" is exact for 49(a)'s discretionary trigger.
- **game_management :1192.** Now reads "accidental non-stick head contact, a 50(a) minor". It previously read "by body", but 50(a) covers body or equipment other than a stick. 299/300.
- **on_ice_communication :614.** "USA Hockey 405(c) (practices too)".
- **offensive_zone_play :673.**
  - Adds 32(d)'s one-game ban. 54(b) is left out by design: the list is an open "some" list, and body :742 carries it.
  - The citation "52(b)" becomes "52", because the injury limb is 52(a).
  - The stride threshold read "Over two strides is a charge" as a separate sentence, which sounds universal when voiced alone (safety Major 3). It now reads "CARHA calls over two steps or strides a charge", which also restores "steps" (rules).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier R1 (rules_primer, special_teams, game_management, core_principles) | **First read:** WRONG at :418's 7.1(c) citation. Appendix D was rendered from the PDF, and the same citation was flagged at :426/:451/:516. All else OK. KT10 "can" is exact. **Final read:** every site OK. |
| rules-verifier R2 (winger, faceoffs, center, defender, on_ice, ozp) | **First read:** WRONG at defender :312 ("no puck to play"). center :521's citation was misleading. "steps" missing at ozp :673. The shared clause was true but no longer named Hockey Canada's injury limb. **Final read:** every site OK. |
| safety-reviewer S1 (same four as R1) | **First read:** Major M1 at special_teams KT8 suspension asymmetry. Minors: KT10 nits, :418 ending, :426/:451/:516 disclosure, :451 length, :1116 citation. All applied. **Final read:** CLEAR. One optional Minor carried as a plan row: :418 ends on 7.1(c)'s "not otherwise covered". |
| safety-reviewer S2 (same six as R2) | **First read:** Major 1, shared clause dropped HC injury match. Major 2, defender :312. Major 3, ozp :673 stride scope. Minor 4, defender CM USAH "must". All applied. **Final read:** CLEAR. It upheld the author's refusal of its KT11 compression. |

### C11
The coordinator wrote no content. Every post-review edit is either one reviewer's text or author text that the reviewers read in final reads.

Where texts conflicted:
- **rules_primer :418:** R1's text over S1's sketch. S1's sketch kept the 7.1(c) citation that R1 ruled wrong. S1 read R1's text in its final read and cleared it.
- **Shared clause:** R2's wording. S2's fix was equivalent.
- **defender :312:** S2's text (286 chars), over R2's equivalent 300-char text.
- **ozp :673:** S2's text, rephrased by the author to fit R2's "steps or". Both read it in final reads.

## Checks after the last content edit
- **Build:** a full `npm run build` (absolute binary) exited 0. `dist/index.html` is 21:54:01, and no content file is newer.
- **Checkers:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets all pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all ten files. defender shows one "no longer present by key": the rewritten :325 opening, which still carries three markers.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | Two rules-verifiers, two reads each. <br>• HC: 4.10, 7.1(c), 8.1/8.2/8.6(c), Appendix D chart (rendered) and Note 1, 9.2 + Interps <br>• CARHA: 30, 32, 34, 48, 49, 50, 52, 53, 54, 62, 64, 66 <br>• USAH: 405, 602, 608, 609 + Casebook Sits 1–2, 619, 620, 623 <br>• NHL/PWHL: 21, 42, 47, 50, 59/60 <br>• IIHF: 47 + Sit. 47.1, 59 |
| D4 Citations | Removed: 7.1(c) at four sites. <br>Added and verified: Appendix D Note 1, 48(a), 34(a), 4.10(a), 405(c), 21.2, PWHL 42.4/42.5/50.4/50.5, 47.4/47.3, 32(d), USAH Casebook 609 Sit. 1 |
| D8 Counts | "in most", "every book", "in every book … can be called", "Any of these matches" lists, "some net-front majors" |
| D9 Summary layer | winger KT11, special_teams KT8, core_principles KT10, defender KT3: changed and read voiced alone |
| D10 Key-facts | center :521, winger :561, defender :312, special_teams :1114, game_management :1192, ozp :673: read voiced alone |
| D11 Reader safety | Two safety-reviewers, two reads each |
| D12 Read-aloud | Every page rendered by its author into its own `--out` |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 21:54:01 build (below) |
| D5–D7, D13 | Not engaged |

**D15.** The site-reviewer checked ten pages in Playwright Chromium at 400×812 DPR 2 and 1440×900, in light and dark.
- **rules_primer :451:** the "What it costs." `<p>` sits inside its list item, with a leading glyph.
- **winger KT11:** the run ends at the instruction.
- **defender :325:** three runs, each with a leading glyph.

Worst 400px window:

| Page | Before → after |
|---|---|
| rules_primer | 43.9 |
| core_principles | 37.2 → 37.7 |
| special_teams | 48.8 → 48.4 |
| game_management | 39.2 |
| winger | 48.4 → **44.2** |
| faceoffs | 43.4 |
| center | 36.6 |
| defender | 47.7 |
| on_ice | 46.7 |
| ozp | 47.9 |

- **No 400px window is over 50%.**
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll.
- The 1440px windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
1. **KT length.**
   - special_teams KT8 is now 148 words, winger KT11 is 153, and core_principles KT10 is 65, still over the 60-word line.
   - Every tier is mandatory and voiced only there.
   - A cut means moving tiers to the body, which is an owner call.
2. **USA Hockey 602(a).** It makes a match mandatory ("shall") for reckless endangerment. The head-butt sites present USAH's match only as 619(b) "may" (faceoffs :1162), or leave it out of the shared clause.
3. **rules_primer :418, NHL limb.** It does not give NHL 21.1's mandatory match for a hook meant to injure. This is an omission, not a false statement.
4. **rules_primer :418 ending.** The sentence ends on 7.1(c)'s "not otherwise covered" wording. Optional reorder so the instruction lands last (safety S1).
5. **The Hockey Canada reading elsewhere.** The undisclosed 7.1(c) citation, in comma form, survives at body_contact_and_battles.md :410 (hooking) and :1761 (holding) and risk_management.md :675 (tripping). defending_the_rush.md :1032 and risk_management.md :760 already disclose the reading.
6. **offensive_zone_play :952.** It gives CARHA majors and hits from behind a game misconduct but no 32(d) suspension.
7. **special_teams :1120.** It prices only HC's head match with no suspension in its own chunk. Safety judged it acceptable, because the suspension is voiced in the preceding chunk.
8. **The HC PDF is not on disk in sources/.** The rules-verifier fetched it into the scratchpad to render Appendix D. Consider adding it, with a sources/README.md entry noting that the chart is unreadable in hc.txt.

## What this method could not have found
- A unit that prices these acts in words that were not searched.
- How a Hockey Canada referee actually resolves 8.x(c) against Note 1.
- Real devices.
