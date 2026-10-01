# Wave 27 — permissive rows in the documents wave 26 did not reach, and the wave-26 follow-ups (1 October 2026)

**Scope.** Wave 27 worked the plan's permissive rows in ten file-disjoint lanes. It changed 24 documents and two diagram caption sources.

| Lane | Files |
|---|---|
| A | language_and_glossary |
| B | defensive_zone_coverage |
| C | defending_the_rush, forechecking_systems |
| D | time_and_space, conditioning_and_recovery |
| E | special_teams |
| F | game_management, team_play_and_culture |
| G | rink_map, breakouts, passing_and_receiving (skating unchanged) |
| H | uk_rules, switching_positions |
| I | center, winger, offensive_zone_play, shooting (wave-26 follow-ups) |
| J | body_contact_and_battles, playing_without_the_puck, zone_entries, rules_primer, defender, risk_management (wave-26 follow-ups) |

The coordinator also fixed the two diagram captions in `site/src/diagrams/positions.mjs` and `zone_entries.mjs`. Both still said "a legal box-out", and lane I's re-render found them voiced in winger and zone_entries.

**Briefing.** Authors were briefed with the wave-24 rulings plus the wave-26 lesson: a correct repair placed next to an unchanged clause can make that clause, or an unnamed book, sound cheaper.

**Method.**
1. One author per lane, with every row treated as a hypothesis.
2. An independent `safety-reviewer` or `rules-verifier` read every lane, voicing each changed unit alone with its chunk neighbours.
3. Every blocked unit went back to its author.
4. Every repair was re-read, in batches late1, late2, late3, final and a last one-line check, until each came back CLEAR.
5. A `site-reviewer` covered all 24 pages on the final build.

## What was wrong, in kind

- **CARHA tiers missing where a CARHA player meets the act.**
  - **Slap shot.** 79(a)/(b): a backswing over fifteen inches makes any shot a slap shot, which is a minor, and a major if it injures. The fake slap shot is penalised too. Added to the rink_map one-timers, the breakouts "hard rim", and the time_and_space fake shot. The fake-shot wording now keys on the backswing, not on the shot type.
  - **49(b) double minor.** It counts as two of the three penalties that eject under 32(a). Added in time_and_space, defending_the_rush, game_management and others.
  - **Other tiers.** 49(a)'s duty to avert contact (glossary screen, traffic and pick, which said "CARHA gives stand-your-ground"); 53(a)/(b); 34(a); 74(a)'s duty to advance the puck.
- **The PWHL dropped from lists where it writes the same rule.** Examples: game_management's goalie-freeze bar (65.8), the no-change rule (84.1) and the time-out rule (89.1); the defensive_zone_coverage checking-from-behind comparison; the glossary's checking from behind.
- **Officials.** team_play priced force against an official as automatic suspension "in the NHL" only, then quoted the Category III floor of three games and one. Category II, deliberate force without intent to injure, is at least ten games in the NHL and four in the PWHL (Rule 40.3). The IIHF leaves the length to supplementary discipline.
- **The tactical foul.** game_management priced every penalty taken to stop a goal as a power play.
  - It now says "keep it a minor".
  - It names where a reckless trip or hook ejects: USA Hockey 639(b) and 623(b) mandatorily, the IIHF 57.4 and 55.3 at the referee's discretion, and CARHA 86(a) for any trip.
  - It names where an injuring one ejects: Hockey Canada 8.2(b) and 8.6(b), NHL and PWHL 55 and 56 for the hook, CARHA 64(b) with 30(a).
  - Key Takeaway 12 had no limit at all.
- **"A legal box-out".** This survived at eight sites in center, winger, offensive_zone_play and shooting, and in two diagram captions. It is now "a box-out, legal or not".
- **Stick tie-ups.** Every lift now says "the stick, never the hands" (Hockey Canada 8.2(a) Interpretation 1). defensive_zone_coverage's "tie up the most dangerous stick" became "lift or press… never hook it, keep it pinned or grab it".
- **Forechecking contact.** F2 "takes the strong-side winger" and the swing "lock onto" now say stick and route, not body. A hit on a player without the puck is a penalty in every book.
- **Above-the-shoulder contact (glossary).** It was first priced in two books. It now covers all six:
  - Hockey Canada 7.6(b)/7.7(b) and CARHA 54(b): a major plus a game misconduct whether or not it injures.
  - USA Hockey 620(a)/(b).
  - NHL, IIHF and PWHL: a high-sticking minor that must be called, a double minor if it injures, an IIHF 60.4/48.3 major plus game misconduct if reckless, and an NHL 60.4 / PWHL 61.4 match penalty.
- **Women's hockey.**
  - The WNIHL's "Full ice, non-checking" (U16 and senior) was missing beside IIHF 101.1 permissions in conditioning, defensive_zone_coverage and the glossary.
  - The glossary's angling permission lacked 101.1's boards limb and PWHL 52.1's after-the-angle limb.
  - The glossary's CARHA-only "keep your body off the screener" now names CARHA, women's hockey and non-checking divisions.
- **Elite League.**
  - Casebook 9.5's neck-guard ladder (minor, then misconduct, then game misconduct) was missing where uk_rules, switching_positions and rules_primer said "warning, then a minor".
  - Casebook Rule 42's face-or-head game misconduct for an injuring charge was missing in offensive_zone_play, shooting and center.
  - special_teams said Britain has no 20-minute 5-on-5 playoff overtime, which is false for the Elite League (Casebook 84.1). That changes the tactics.
  - The British junior play-up route into checking games was added to uk_rules.
- **Smaller fixes.**
  - The USA Hockey 608(b) quotation was completed with "as a result of checking from behind" across lane J's six files. Other files still truncate it; that is carried as a row.
  - USA Hockey 624(d) "attempting to play", not "playing", in switching_positions.
  - USA Hockey 602(a) "shall" versus 607(e) "may": declared unresolved in rules_primer.
  - CARHA 36(a)(3) keeps a from-behind test on the empty net; 36(a)(4)'s reach is declared open.

## Coordinator errors this wave

- **A sketch caused a defect, again.** For game_management's facts line I told the author to write "a hook that injures ejects you in every other book". The line names CARHA earlier, so a CARHA listener heard that CARHA does not eject. The final re-read caught it. That wave-26 lesson was written in the brief and I still made the mistake myself.
- **A wave-26 row's premise was wrong.** The [CARHA 36(a)(4)] row I wrote in wave 26 suggested that CARHA awards the empty-net goal more widely. Lane J acted on it, and lane J's read refuted it: 36(a)(4) mirrors NHL 56.7's bench-interference clause, and 36(a)(3) keeps the from-behind test.
- **Crossed messages on uk_rules.** I told lane H to keep one neck-guard wording, then withdrew it. The agent reverted four lines and then restored them, while a batch re-read was reading the file. I told the reader to re-read those four sites.
- **A wrong timestamp in the site brief.** I told the site-reviewer the last content edit was 07:41. game_management was 07:46, after that build, so the 09:23 rebuild was the one that covered it. The site-reviewer also overlapped that rebuild and discarded its race pass.
- **A stalled author.** Lane F's last agent stalled after editing. I ran the gates and the render myself and sent the split line to an independent reader, which came back CLEAR.

## The lesson

The wave-26 lesson held: most blocks came from repairs whose wording named some books and left a reader of an unnamed book hearing a cheaper price. Two shapes recurred:
- **"Every other book" / "the rest".** A complement defined by omission is invisible to grep, and a line that names a book earlier silently removes it from the complement.
- **A list grown to six books.** The glossary's above-the-shoulder ladder grew a unit to 2,953 characters, and a reader flagged the instruction as buried. It was compressed to one clause in Common Mistakes, with the full ladder kept in the body. Correctness repairs keep pulling summary layers toward tariff appendices. The owner's readability rule has to be applied inside the same wave, not left for later.

## Rendered site (D15)

A `site-reviewer` served the 09:23 clean build (exit 0) over headless Chrome 154 via CDP; the extension refuses localhost.
- **Coverage:** all 24 pages at 400 and 1440 wide, light and dark: 96 loads with a true 400px layout viewport. 165 added-line units were found and visible in every cell. 12 sit in collapsed Sources `<details>` blocks by design.
- **Callouts:** 0 `aside.callout-warning`, and every ⚠ is wrapped. All 28 new amber runs formed a wrapper.
- **Layout:** no horizontal overflow and no markdown residue.
- **Facts:** all 29 changed facts lines render as `dd.facts__value`, including game_management's new line.
- **Captions:** both show "a box-out, legal or not".
- **Console and network:** no errors and no 4xx.
- **Race pass discarded:** the reviewer's first pass overlapped the rebuild and was discarded.
- **One minor finding:** defender :468's amber run opens on the citation "Hockey Canada 7.4(b)". It is carried as a P2 row.
- **Not reached:** theme toggle, real phone, other browsers.

## Dimension coverage

| Dim | Name | Covered | By | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `safety-reviewer`/`rules-verifier`: 10 lane reads plus late1, late2, late3, final and the one-line check | CARHA 30, 32, 34, 36(a), 49, 52, 53, 54(b), 62, 63, 64, 66, 74(a), 79, 86; USAH 602(a), 604 and Note 1, 607, 608, 613, 616, 620, 622–625, 639, Casebook SoP Sits. 12 and 15; HC 4.4, 7.3, 7.4, 7.6/7.7, 8.1–8.6 with Interps.; NHL/PWHL 21.1, 40, 43, 55/56, 57/58, 60/61, 65.8, 84.1, 87/89; IIHF 41.4, 43, 48, 55, 57, 60, 101.1; EIHL Casebook 9.5, 9.12, 42, 84.1; WNIHL, NIHL and Junior RoCs. |
| D2 | Exceptions | Yes | same | CARHA 49(c) accidental contact; HC 8.5 passive-attacker carve-out with its condition; CARHA 36(a)(3) vs (4); 602(a) vs 607(e) declared unresolved; NIHL "15 with approval". |
| D3 | Rule-set divergence | Yes | same | Every "only", "one book", "every other book" and "four books" frame in the diff named or corrected. |
| D4 | Citation integrity | Yes | readers | Quotations verified verbatim; 608(b) quotation completed in lane J's files. |
| D5 | Provenance | Yes (one citation reused) | coordinator | One URL added to a trailer: the WNIHL Rules of Competition PDF, already cited by 9 corpus documents at HEAD. No new source; no `source-verifier`. |
| D6 | Negative existence claims | Yes | readers | "USAH and the IIHF have no injury limb for tripping/hooking" (checked); "no CARHA women's scope"; IIHF Disciplinary Code not on disk, so suspensions are not called automatic for the IIHF. |
| D7 | Cardinal rule | Partly | readers | Tactical advice ("keep it a minor", "give ground", "shadow, not hit") read as coaching, not law. |
| D8 | Numeric ownership / restatement | Partly | readers | **Otherwise declared out of scope.** |
| D9 | Summary layer | Yes | readers | Key Takeaways and Key focus voiced alone; KT12's missing limit added; no permission added. |
| D10 | Key-facts layer | Yes | readers, `check_facts` | Several lines at 296–300/300, edited by substitution; one line split in two. |
| D11 | Reader safety | Yes | a reader on every lane and every repair | |
| D12 | Read-aloud integrity | Yes | every author and reader rendered `md_to_speech` | 0 lost markers on all 24 files. |
| D13 | Folklore | No | | **Declared out of scope.** |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Glossary units now 1,800–2,700 spoken characters (row). **Otherwise declared out of scope.** |
| D15 | Rendered site | Yes | `site-reviewer` | See above. |

## Gates

All run on the final tree:
- `check_links` 0, `check_facts` 0, `check_absolutes` 0 after `build-diagrams` (diagrams.json rebuilt 09:20), `check_geometry` 0, `check_secrets` 0.
- `check_marker_pairs`: 0 lost on every changed file.
- `check_callout_flow --panels` 0 and `--bare` 0.
- Clean build with the absolute npm, exit 0, at 09:23. The last content edit was game_management at 07:46.

## What this method could not have found

- Readers read changed units and their chunk neighbours, not whole documents. An unchanged layer built on an old answer and sharing no words with the new text would pass.
- A complement defined by omission ("every other book", "the rest") in files no reader opened.
- How CARHA officials apply 36(a)(4) on the ice. The IIHF Disciplinary Code (not on disk). What the WNIHL's "non-checking" prices.

## Plan rows closed by this wave (verbatim from OPEN_ITEMS.md)

- [EIHL neck guard] rules_primer :927/:947 "a warning and then a minor" for a missing neck guard vs EIHL Casebook 9.5 ("neck laceration protection not being properly worn" → minor, misconduct, game misconduct) — owner/uk_rules reader call (direction: permissive if 9.5 reaches it)
  - W27 evidence: Lane J: rules_primer :927 now adds the EIHL Casebook 9.5 ladder (misconduct, then game misconduct); :947 table cell rewritten ('fix a neck guard the first time you are warned', 9.5 quoted naming 'neck laceration protection not being properly worn', minor/misconduct/GM; old 'for other equipment' was wrong) (eihl_casebook.txt:328-339, :376-380). Lane H: uk_rules Key focus :11, Overview :29, body :160, CM :453, KT3 :581 and switching_positions facts :314 carry the same ladder. Both named files W27-owned. (Wording nit: rules_primer :927 uses 'keeps going back out without it', uk_rules uses 'refuses the change / returns without making it' — both true.)
- [bc :1280] body_contact facts :1280 cites only HC 7.6(b) (minor/female) for the mandatory above-shoulder cross-check; 7.7(b) carries it for Junior/Senior — align with winger/goaltender (accuracy; harsher)
  - W27 evidence: Lane J: body_contact facts :1280 now cites 'under 7.6(b)/7.7(b)' (296 chars; hc.txt:6316-6322 7.7(b) carries the same flat sentence); body :1319 already named both.
- [CARHA 36(a)(4) empty net] risk_management hook bullet ~:627 names NHL/IIHF/PWHL as awarding the goal for any foul with the net empty; CARHA 36(a)(4) (carha.txt:1757-1760) awards one where a defender "interferes by means of their body, stick…" with the carrier — ambiguous reach; test and scope (direction: permissive-low)
  - W27 evidence: Lane J (after safety block B1): risk_management facts :497, hook bullet :627 and :664 now put CARHA with the from-behind books under 36(a)(3) and state that 36(a)(4)'s 'interferes by means of their body, stick…' reach to a front-on foul is left open by the book (carha.txt:1743-1760); :627 adds 'do not foul him from the front and assume a penalty is all it costs'. Residual parity nit at risk :520 is filed as new row line 355.
- [ozp quiz :1184] offensive_zone_play quiz answer "never a bare minor, and under the NHL, the IIHF and the PWHL not a minor at all" (pinch) — verify vs checking-from-behind/boarding per book (direction: unverified)
  - W27 evidence: Lane I: quiz answer holds — NHL 43.2 'no provision for a minor penalty' (nhl_rules.txt:5466-5480), IIHF 43.2 'no option to award a minor' (iihf_rules_2026-27.txt:4050-4053), PWHL 43 = NHL; HC 7.5(a)/CARHA 53(a) pair any minor with a GM; USAH 608(a) minor+misconduct — 'never a bare minor' true. No edit.
- [stick lift wording] ozp facts :1081 lacks "play the puck" (body has it; USAH 625(a)(2), HC 8.2(a) Interp. 1); every lift unit (center :19/:489/:503/:524, ozp :1081/:1092) lacks "the stick, not the hands" (HC 8.2(a) Interp. 1 hooking; USAH 613(e)); "press… never hold it down" not actionable (nit, harsher-safe)
  - W27 evidence: Lane I: ozp facts :1081 now 'Lift or press their centre's stick with yours — the stick, never the hands — then play the puck…' (199/200); same hands limb added at ozp body :1092, center Overview :19, facts :489, body :503, bullet :524 (diff confirms center :19/:489/:503/:524). Sources HC 8.2(a) Interp. 1 (hc.txt:6772-6776), USAH 613(e). 'press… never hold it down' nit is harsher-safe, left.
- [W26 nits] rules_primer :455 "USA Hockey writes no such permission" (arm bar) — CARHA lacks it too (W24 ruling 3); :461 NHL 21.1 paraphrase drops second "deliberately" (harsher); zone_entries :739 "under all four" with six books in play; ZE facts "never a bare minor there" → "which is never a bare minor" (harsher misreading) (nit)
  - W27 evidence: Lane J: rules_primer :455 now names IIHF/PWHL/HC 8.1 as printing the strength-move words and 'USA Hockey and CARHA write no such permission' (CARHA 63(a), carha.txt:3007-3011); :461 NHL 21.1 now 'deliberately attempts to injure or deliberately injures'; zone_entries :739 'under every book here'; ZE facts :303/:331/:369 'which is never a bare minor'. All in W27-owned files.
- [pwtp stricter?] playing_without_the_puck facts ~:634 "CARHA writes no incidental-contact permission" vs CARHA 49(c) accidental; :470 "Hockey Canada writes no arm-block right" vs HC 8.1 strength move — verify (direction: harsher-if-wrong; accuracy)
  - W27 evidence: Lane J: pwtp facts ~:634 rewritten to what each book penalises (HC 8.5 'must make an effort to avoid contact in all circumstances'; CARHA 52(b) Note, 66(b)) — disputed negative dropped, no permission added; :470/:471 'no right to lengthen an opponent's path' judged ACCURATE after safety block B2 (HC 8.1 assumes body position, does not grant it) and reverted byte-for-byte to HEAD — harsher premise fails there.
- [bc 608(b) quote] body_contact :1258/:1780/:1797 608(b) quotation still stops before "…as a result of checking from behind" (framing compensates) (direction: accuracy)
  - W27 evidence: Lane J: 608(b) quotation completed with ', as a result of checking from behind' at body_contact :544/:1258/:1780/:1797, defender :424, risk_management :792/:904, zone_entries :229/:1145, pwtp :995 (usah.txt:3722-3725). The same truncation in non-J files is now filed as new row line 353.
- [legal box-out] corpus — "a legal box-out" assumed legal at center :415/:730, winger :442/:690/:757, offensive_zone_play :487/:1128, shooting :858 (CARHA 49(a) prices standing in front to make contact); route as one claim, not file by file (direction: permissive-low)
  - W27 evidence: Lane I fixed all named sites to 'a box-out, legal or not (in your book)': center screening bullet + CM, winger :442/:690/:757, ozp :487/:1128, shooting :858; lane J also bc :1800/:1901. Voiced caption copies found by lane I are fixed in the diff (site/src/diagrams/positions.mjs 'a box-out, legal or not, walks you…'; zone_entries.mjs caption + comment). The rules_primer/bc 'legal battle position' family is filed as new row line 354.
- [CARHA 79] corpus-wide — sweep point-shot / one-timer / wind-up advice for the CARHA 15-inch limb in docs W20/W21 did not reach (W21 did defender, ST, faceoffs, ozp, NZS, t&s; check skating, passing, puck_handling fakes, rink_map KT8 :650 one-timer), permissive (direction: permissive) — (plan 306, 327, 329) — [T1] — W26 1 Oct: done in puck_handling (fake shot body+facts carry CARHA 79(a)/(b)), NZS (hard rim/dump), OZP (point-shot body+facts), faceoffs facts :882 one-timer; defender already carried it; remaining: skating, passing, rink_map KT8 :650 one-timer.
  - W27 evidence: Lane G: rink_map :566/:571 and KT8 now carry 'in a CARHA league… backswing under fifteen inches… slap shot and a penalty' (carha.txt:3568-3584); passing :123/:130 judged false premise (pass destination, no shooter wind-up taught); skating has no one-timer/slap/wind-up content. Lane D also added the limb to time_and_space (body, facts, KT2) where HEAD had none. Injury-tier follow-up for rink_map is filed as new row line 346.
- [CARHA 49] body_contact §10 CARHA tariff omits 49(a) mandatory major on injury; CARHA 66(a) Note 2 "shadow" never mentioned in bc; glossary lacks CARHA 49(a) counterweight, permissive-low (direction: permissive) — (plan 408, 412) — [T1] — W26 1 Oct: done in body_contact (§10 :1359 and facts :596 carry 49(a) mandatory major on injury; 66(a) Note 2 'shadow' already at :218/:408); remaining: language_and_glossary CARHA 49(a) counterweight.
  - W27 evidence: Lane A: glossary Screen, Traffic and Pick entries and KT12 now carry CARHA 49(a) 'does not avert body contact' with the mandatory major on injury and 30(a) (carha.txt:2449-2456, :1417-1420); after the safety re-reads the Screen/Traffic/KT12 limb was widened to 'in a CARHA game, in women's hockey or in any non-checking division' (IIHF 101.1, PWHL 52.1, HC 7.3(a), USAH 604(c)). Only remaining site was the glossary.
- [USAH/HC talking to officials] team_play → rules_primer#talking-to-officials gives only NHL/IIHF route, not USAH/HC/CARHA match; rules_primer section still carries old skip list?; cross-doc 5 "force against an official is a GM" — USAH 601(e)(1)/HC 11.5(c)(ii)/CARHA 71(a) MATCH — rules_primer carries the claim, permissive (direction: permissive) — (plan 633, 798, 817) — [T1] — W26 1 Oct: rules_primer :908 now prices force against an official in all six books (USAH 601(e)(1)/HC 11.5(c)/CARHA 71(a) match; NHL/PWHL/IIHF Rule 40 GM + suspension); remaining: team_play_and_culture route to rules_primer#talking-to-officials not re-checked against the new text, and the 'old skip list?' question unanswered.
  - W27 evidence: Lane F: team_play body :370, CM :596, KT5 :669 now say Rule 40 adds a suspension in the NHL, PWHL and IIHF (automatic in NHL/PWHL; corrected tiers after safety block B3: NHL ≥10/PWHL ≥4 without intent, 20/8 with, 3/1 only for pushing free/demeaning/throwing), trailer :685 adds PWHL/IIHF 40; route to rules_primer#talking-to-officials agrees with the six-book :908 text, so the 'old skip list?' question is answered (nothing stale).
- [HC 7.6(b)/7.7(b)] language_and_glossary / body_contact / goaltender — cross-check above shoulder height is MANDATORY major+GM "whether or not injury results" (a fourth route into the tier), mentioned only in a trailer; four-book "one clause names cross-check + goal frame" frame likely also in bc and goaltender, permissive-omission (direction: permissive) — (plan 3106) — [T1] — W26 1 Oct: done in body_contact (facts :1280 now 'mandatory major plus game misconduct under 7.6(b), whether or not injury results'; body :1319/CM :1793 already had it; no four-book goal-frame frame) and goaltender (:1141 + trailer :1576, with 7.6(b)/7.7(b) split); also winger CM :689; remaining: language_and_glossary.
  - W27 evidence: Lane A: glossary CM 'Answering "Screen!"' and Screen body now price the above-shoulder shove in all six books (HC 7.6(b)/7.7(b) and CARHA 54(b) major+GM whether or not injury results; USAH 620(a)/(b); NHL/IIHF 60.2-60.4, PWHL 61.2-61.4, IIHF 48.3); the four-book goal-frame frame survives only as a trailer provenance note. Glossary was the only remaining site.
- [HC 8.3] act sweep — what OTHER HC/CARHA rule reaches a stationary net-front screen (holding, obstruction, SoP annex); breakouts CM/KT layer test for a surviving permissive HC/CARHA screen reading, permissive-if-found (direction: permissive) — (plan 3783) — [T1]
  - W27 evidence: Lane G swept the act in hc.txt ('screen' 0, 'stand … ground' 0, 'establish' 0, obstruct 2): the reaching rule is 8.3's 'may not run deliberate interference for the puck carrier' plus limb (i) and 8.3(b)/(c); breakouts body :169 already quotes it with CARHA 66(a), Note 2 and 49(a); CM :1012 and KT13 :1075 already conservative. No permissive copy in any breakouts layer.
- [IIHF no-match leniency] playing_without_the_puck :724 (facts), :954 (KT10), :893 (CM); shooting :525; body_contact :642 (and :1534 candidate); language_and_glossary :267; forechecking_systems :575; center :800 candidate — "every book but the IIHF reaches a match" must add that IIHF 43.3 + 20.4/Table 6 make the GM automatic once the major is called (never "the IIHF's is automatic", never "strictest"); special_teams :635 already fixed, permissive-impression ‖ [goalie contact] `center.md:800` KT8 still ends "with a match penalty above it in every book but the IIHF's" without IIHF 42.4 major+GM (winger:472 was fixed); also `defending_the_rush.md:403` (boarding) and `playing_without_the_puck.md:724` (from behind) same thinner shape. Permissive, low (direction: permissive) — (plan 4558; 22142-22145, 22164-22165) — [merged across T1, T4] — W26 1 Oct: pwtp facts/CM/KT10 and shooting already fixed; bc :642 gone and facts :1534 now names IIHF 21.1 major+automatic GM; center KT8 :800 already names IIHF 42.4; winger CM :688/KT8 now name NHL/PWHL/IIHF 43.2 with mandatory GM; remaining: language_and_glossary :267, forechecking_systems :575, defending_the_rush :403.
  - W27 evidence: Lane A: glossary :267 shape not present (git -S none) but the same gap in Checking from behind fixed (PWHL 43.3-43.5 beside NHL; IIHF 43.3 major with automatic GM, at referee's discretion; CM likewise). Lane C: forechecking :594 already names the automatic GM and 20.4; DTR facts :421/body :434 already name IIHF 41.4, CM :904 now 'the IIHF's 41.4 a major plus a game misconduct'. All three remaining sites W27-owned.
- [WNIHL] conditioning :231, body_contact :167, DZC :521 — units telling a British woman IIHF 101.1's puck-directed bodycheck applies to her vs WNIHL "Full ice, non-checking" (ihuk_wnihl_roc :152-153); chunk-distance check each, permissive (direction: permissive) — (plan 384) — [T1] — W26 1 Oct: done in body_contact (:167/:173 add WNIHL non-checking at both levels, ihuk_wnihl_roc.txt:150-151); remaining: conditioning :231, DZC :521.
  - W27 evidence: Lane D: conditioning :231 now opens 'In the WNIHL, do not body check at all' (ihuk_wnihl_roc.txt:150-153) plus 'in any other women's competition, ask your league'; KT11 leads with the WNIHL instruction. Lane B: DZC :521 now names Britain's WNIHL 'Full ice, non-checking' in the same unit (chunk 047), WNIHL RoC added to the trailer.
- [101.1] center :96/:666/:720/:804, DZC :510/:819, defender :46/:880, DTR :318, forechecking :504, time_and_space :44/:267, glossary :197, body_contact :1106/:1523/:1771, conditioning :225 — "where (body) checking is barred" without the women's step-or-glide limb; triage only the contrast shape implying a hit is fine elsewhere (most are prohibitions), permissive-low (direction: permissive) — (plan 382) — [T1] — W26 1 Oct: center (:95/:107/:666/CM :720/KT12 :804), defender (:13/:46/:880) and body_contact sites read — all prohibitions, no contrast shape; remaining: DZC :510/:819, DTR :318, forechecking :504, time_and_space :44/:267, glossary :197, conditioning :225.
  - W27 evidence: all remaining sites read in W27: DZC :510/:819 prohibitions (lane B, false premise); DTR :318 prohibitions (lane C); forechecking :504 fixed (IIHF women's step-or-glide and boards limb added); time_and_space :44 already has 'veering, stepping or gliding', :267 a scoped 604(d) prohibition; conditioning :225 with :229/:231 limbs (lane D, false premise); glossary :197 Angling fixed plus Shoulder check entry (lane A, IIHF 101.1/PWHL 52.1, WNIHL).
- [lift] "tie up" at center :489 ("tie up your opponent's stick") and DZC :590 ("tie up the most dangerous stick") — holding is a penalty; layer test, permissive (direction: permissive) — (plan 699) — [T1] — W26 1 Oct: center Key focus, facts :489 and body :503 now 'lift or press their stick with your own, then play the puck — never hook it, hold it down, or grab it with your hand'; remaining: DZC :590 'tie up the most dangerous stick'.
  - W27 evidence: Lane B: DZC body ~:616 'Tie up the most dangerous stick' now 'Take the most dangerous stick away with your own…' with 'Never hook it, keep it pinned or grab it with your hand' and 'at least a holding minor in every book'; KT11 rewritten the same way (NHL/IIHF 54.2, PWHL 55.2, USAH 622(a), HC 8.1(a)/(b), CARHA 63(a)/(b)+30(a)).
- [British checking] content/foundation/uk_rules.md — carries no play-up route (NIHL 16+, WNIHL girls 14+, `ihuk_junior_roc_layout.txt:645-648`) beside its checking age table (uk_rules:31); permissive-gap (direction: permissive) — (plan 13122–13129) — [T3b]
  - W27 evidence: Lane H: uk_rules Overview :31 (⚠️ 'The line goes with the game you are dressed for…' — play up one age group; NIHL from 16, '15 with approval'), Key focus :13, CM :460 and KT4 :583 now carry the play-up route (ihuk_junior_roc_layout.txt:629-647; ihuk_nihl_roc_layout.txt:219-226).
- [HC stick lift hands] center :489/:503 stick lift — HC 8.2(a) Interp. 1 makes a lift that contacts the hands hooking; consider "below the hands" (nit)
  - W27 evidence: Lane I: center :19/:489/:503/:524 and ozp :1081/:1092 now carry "the stick, never the hands" (HC 8.2(a) Interp. 1); read I and late2 CLEAR.
- [safety list] `conditioning_and_recovery.md` Overview still carries a partial CRT6 red-flag set (Key focus and KT carry the full set; a term probe finds ~6 terms in Overview vs 11–14) — `safety-reviewer` verdict needed. Permissive (truncated safety list) ‖ [Overview escalations] conditioning_and_recovery.md Overview — dropped spinal limb, "not left alone for 3 hours", "symptoms clearing is not the all-clear"; safety-reviewer call (direction: permissive) — (plan 17864; 26357–26361) — [merged across T3d, T5]
  - W27 evidence: W27 read D (safety-reviewer) ruled: not a safety gap — the Overview gives no handling instruction the limbs would qualify; the full set is voiced in Key focus :33 (immediately before), body :274, CM :595 and KT13; a fifth carrier would be a restatement-count risk. No edit.

Twenty-four further rows were partly worked and carry a "W27 1 Oct: done in …; remaining: …" note in the plan. New rows from this wave cover:
- above-shoulder stick ceilings corpus-wide;
- women's contact without the WNIHL corpus-wide;
- 608(b) truncation elsewhere;
- special_teams nits;
- USAH 404(b) GM suspension;
- the special_teams :451 British majors;
- the rink_map CARHA 79 injury tier;
- faceoffs tie-up;
- ozp push-off negative;
- DTR/FC harsher nits;
- bc legal battle position;
- risk :520 CARHA parity;
- defender :468 amber;
- glossary length.
