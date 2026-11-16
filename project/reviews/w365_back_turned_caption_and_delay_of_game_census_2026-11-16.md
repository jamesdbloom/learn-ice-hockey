# W365: the back-turned caption, a goaltender cross-check run, and the delay-of-game penalty named for every book (16 November 2026)

**Files changed:**
- content/foundation/rules_primer.md
- content/foundation/on_ice_communication.md
- content/hockey-iq/risk_management.md
- content/positions/goaltender.md
- content/positions/switching_positions.md
- content/systems/breakouts.md
- content/systems/game_management.md
- site/src/diagrams/body_contact_and_battles.mjs
- site/src/diagrams/goaltender.mjs
- site/src/data/diagrams.json (rebuilt; only angle-into-the-corner and goalie-safe-outlets changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave takes up the open rows from W364 (record `w364_last_over_half_pages_and_over_the_glass_2026-11-16.md`):
- **Row (1):** the bcb back-turned caption window was 57.8% and the goaltender window 50.5%. The defender window (47.8%) and the special_teams window (48.8%) were also tried; see below.
- **Row (3):** sibling documents might give the deliberate-clear minor for the NHL and IIHF without the PWHL.

A read-only census covered the delay-of-game penalty for a puck shot out of play in every caption and every content document except goaltender, defender, special_teams and body_contact_and_battles, which authors held in this wave.

## What changed
**Amber density.** No words changed, except where the review asked.
- **angle-into-the-corner caption** (body_contact_and_battles.mjs). Its hosts are body_contact_and_battles and skating.
  - Reordered so the amber is the injury instruction: "Never turn your back to anyone coming at you, and never duck. Get your skates parallel to the wall and take it on your forearm and hip: that is the second case." It went from 562 to 163 characters.
  - The Case 3 sentences now sit before it as plain text.
  - After the safety review, the Case 3 opening became "The third, for when you are already facing the wall and cannot turn, is damage limitation…".
- **goaltender :1304.**
  - The amber went from 450 to 75 characters: "A cross-check that reaches the head can get you thrown out in every book". The safety review supplied that text; it is true in all six books.
  - The CARHA/Hockey Canada/USA Hockey mandatory prices follow as plain text.
- **special_teams "Mistakes that get you hurt": tried and reverted.**
  - The shortened amber, "three books make a match mandatory", left its "even with no intent to injure" scope outside the amber.
  - Read alone, that is the same closed count the W363 gate blocked. The page was already under half, at 48.8%.
- **defender "Blocking Shots" (47.8%): not changed.**
  - It is the `shot-block-get-close` caption.
  - The best word-free cut only reaches about 265 characters.
  - The module records a known chunk-split risk for it.

**Delay of game, words changed (census D: 1 DEFECT, about 20 MINORs).**
- **rules_primer**
  - **:568 (DEFECT).** Knocking the puck away from an official who is retrieving it "can be a misconduct" became "deliberately knocking … is a misconduct (NHL 39.4(ii), IIHF 39.4(II), …)". It is mandatory in all six books, and each book uses an intent word.
  - **:93, :566 and :1162.** The PWHL was added. CARHA's after-whistle minor is now stated as "a plain reading of 75(b), which is not limited to live play". No CARHA rule names the act.
  - **:566.** The bold lead "the amateur books go higher" became "USA Hockey and Hockey Canada go higher". CARHA does not escalate.
  - **:562.** The strict limb is scoped and correctly cited: "in the NHL, IIHF and PWHL (NHL 63.2(iii), IIHF 63.2(III), PWHL 65.2(iii))".
  - **:1161.** "In every book a deliberate one from anywhere is a minor too."
  - **:1162.** The amber is now "Firing it out of the rink costs at least two minutes:".
- **on_ice_communication** :149, :150, :184, :188 and :190. The PWHL was added. Both facts lines were reworded so each is heard correctly alone, with no "shoot-out" and no "behind" without its owner.
- **risk_management**
  - **:352 (facts).** Now adds Hockey Canada 11.1(e)'s game misconduct and CARHA's plain reading.
  - **:381.** CARHA's plain reading is added, plus "its general unsportsmanlike minor (46(a)) could also reach it".
  - **:385.** The PWHL and PWHL 77.4(v) were added, and the sentence now reads "None of the three has ruled…".
- **switching_positions**
  - **:286 (facts).** The strict limb is scoped and the IIHF added.
  - **:299.** CARHA added to the deliberate-only list.
- **breakouts**
  - **:532 (facts).** Scoped, and the PWHL added.
  - **:535 (Key).** "a puck deflected out of play" became "out of play by accident". The deflection escape does not cover the deliberate limb.
  - **:559.** The IIHF and PWHL added.
- **game_management**
  - **:112, :113 and :1172.** The PWHL added.
  - **:1264.** The PWHL added, the IIHF cited as 39.4(II), and "deliberately" added to the official's-reach misconduct.
- **goalie-safe-outlets caption** (goaltender.mjs). Now reads "under NHL, IIHF and PWHL rules" and adds CARHA 55(a) alongside Hockey Canada 10.1(v).

## Reviews
| Reviewer | Result |
|---|---|
| census D (read-only) | Scope: every content document except goaltender, defender, special_teams and body_contact_and_battles (held by authors in this wave), plus every caption. One DEFECT: rules_primer :568, "can be" against "shall be assessed". About 20 MINORs, mostly a missing PWHL citation that a nearby sibling unit already covered. Nothing stated a deliberate clear as free. Every census item was fixed: rules_primer :93/:562/:566/:568/:1161; on_ice_communication :149/:150/:184/:188/:190; risk_management :352/:381/:385; switching_positions :286/:299; breakouts :532/:535/:559; game_management :112/:113/:1172/:1264; the goalie-safe-outlets caption. |
| rules-verifier | No cheaper-than-the-book error. Confirmed:<br>• the official's-reach misconduct is mandatory, with an intent word, in all six books (NHL/PWHL 39.4(ii), IIHF 39.4(II), USAH 601(c)(3), HC 11.1(d)(iii), CARHA 46(b)(3));<br>• "costs at least two minutes" (USAH 601(c)(10) misconduct; Hockey Canada is discretionary, so the wording is harsher than the book);<br>• the CARHA plain-reading wording, plus a second route under 46(a);<br>• PWHL 65.2(ii) reaches after a stoppage (hand or stick only);<br>• PWHL 77.4(v) is identical to NHL 75.4(v).<br>Fixes applied: the :562 citation; the :385 grammar; "deliberately" at game_management :1264. |
| safety-reviewer | No critical or major findings. Minors applied with the reviewer's text: goaltender :1304's price (M1); the caption's Case 3 opening (M2); on_ice :150 "shoot-out" (M3) and :149 "behind" (M4); risk :352 (M5); "not limited to live play" at four sites (M6). Cleared: the caption reorder (the amber is the injury instruction, and "no head contact at all" stays in the caption and in both hosts' own layers), rules_primer :1162/:566/:568, and breakouts :535 (which closes a permission). |
| safety-reviewer, final read | All six post-review items CLEAR. The risk_management :352 facts line lost "in protest of a call" on 601(d)(7) to the cap; "can make it a game misconduct" is accurate and errs harsh, and the body keeps the condition. The line's "A shoot-out" opening matches the neighbouring :351; an optional rewording was offered and not taken. |


## After the first commit gate (BLOCK on plan consistency)
The gate blocked on C8. The plan marked W364 rows (2) and (3) wholly done, but goaltender.md was outside census D's scope and still names only the NHL and IIHF at four sites:
- :1693 CM, the after-whistle shot. This is also the official's-reach floor limb from W364 (2).
- :767.
- :721 facts, voiced alone. It now disagrees with the widened goalie-safe-outlets caption.
- :746.

None makes an act cheaper than the books; each omits the PWHL. The gate also confirmed that defender :856 is correct as written: its leg/foot/arm limb is NHL/IIHF-only, because PWHL 65.2(ii) is hand or stick only.

The fix was to the plan and this record only:
- The W364 row annotations now say "partly done" or name the excluded scope.
- The four goaltender sites are carried as plan row W365(5).
- The census row above now states its scope and lists every item fixed.

No content changed. The gate re-derived the :568 misconduct, PWHL 65.2/65.9/77.4(v), CARHA 75(b)/55(a) and HC 11.1 from sources/, and passed every other condition.

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's prescribed text, except the risk_management :352 cap trade, which the final read reviewed and cleared.

## Checks after the last content edit
A full `npm run build` (absolute binary, which includes build-diagrams) ran after the final edit. It exited 0 and ran through check-links. `dist/index.html` is dated 15:29:30, and `find content site/src/diagrams -newer` that file returns nothing.

Then these all passed:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets;
- check_counts --update (no change);
- check_callout_flow --bare: 0;
- check_caption_pairs: 0 violations;
- check_marker_pairs: 0 LOST and 0 SPLIT on all seven content files;
- check_readability: 0 paragraphs over 1,200.

A corpus grep for the corrected phrases ("sets no time limit", "amateur books go higher", "can be a misconduct") finds only two "can be a misconduct" hits. Both are about other acts (banging the boards, talking to the referee).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | census + rules-verifier on every changed claim |
| D4 Citations | rule text quoted from sources/ (NHL/PWHL/IIHF 39.4, 63.2/65.2, 75.4/77.4; USAH 601, 610; HC 10.1, 11.1; CARHA 46, 55, 75) |
| D8 Counts | "all six books", "every book", "None of the three", "at least two minutes": each re-derived |
| D9 Summary layer | rules_primer CM :1161/:1162 changed, each read alone |
| D10 Key-facts layer | facts lines in on_ice_communication, risk_management, switching_positions, breakouts and game_management, each read voiced alone |
| D11 Reader safety | safety-reviewer twice |
| D12 Read-aloud | rendered SSML for every changed stem and both caption hosts; marked units unchanged |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 15:29 build (details below) |
| D5–D7, D13 | not engaged |

**D15 detail.** The site-reviewer checked the 15:29 build on nine pages, using Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark.
- Every changed run forms span.warn-inline.
- 0 bare glyphs, 0 panels, 0 console errors in 40 loads, and no horizontal scroll.

| Site | Worst window at 400px, before | After |
|---|---|---|
| angle-into-the-corner caption | 57.8% | 17.0% |
| goaltender :1304 | 50.5% | 8.2% |
| rules_primer :1162 | — | 12.2% |

- The goalie-safe-outlets caption renders with no glyph, as intended.

## Found, not fixed (plan rows)
- **Caption reading order.** The angle-into-the-corner caption now reads "first and best of three cases", then the third, then the second. The safety review judged the reordered caption safe once the Case 3 opening named its situation. A wording change that puts the cases in order while keeping the instruction last would fix it.
- **Pages still over half a phone screen at 400px**, all pre-existing and none touched by W365:

| Page | Window | Cause |
|---|---|---|
| risk_management | 61.4% | "Slew-footing" run cluster |
| switching_positions | 60.6% | 401-character caption; 82.5% at 1440 including diagram text, so real |
| breakouts | 60.6% | 470-character "Wheel" caption |
| body_contact_and_battles | 56.3% | "What actually gets called" run cluster |
| rules_primer | 53.8% | Key Takeaways, 385-character run |

- **Untouched pages at 47–49%.** The defender `shot-block-get-close` caption and special_teams "Mistakes that get you hurt" stay just under half.
- **Optional wording.** risk_management :352 could read "Firing the puck out…" instead of "A shoot-out…" (the reviewer's text is in the source report). Breakouts :535 has an optional tighter deflection wording.
- **Unchecked rules for a puck shot at an official.** Whether NHL, PWHL, IIHF or CARHA abuse-of-officials or thrown-object rules reach a puck shot at an official or spectator was not swept. If they do, "the NHL, PWHL and IIHF stop at the minor" is a half-answer for that aggravated case.

## What this method could not have found
- **Act wordings outside the census keywords.** For example "launch it out" or "lift it over the boards".
- **Captions built from shared constants**, beyond the two edited.
- **The four documents outside census D's scope** (goaltender, defender, special_teams, body_contact_and_battles) were not swept for the delay-of-game omission; goaltender's four known sites are plan row W365(5).
- **Edition currency** of the CARHA, PWHL and USA Hockey copies on disk.
- **Real devices.**
