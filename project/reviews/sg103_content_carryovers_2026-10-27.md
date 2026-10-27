# SG103 (content): carry-over rows from SG91–SG94 (27 October 2026)

**Files:**
- content/positions/goaltender.md
- content/positions/defender.md
- content/systems/defensive_zone_coverage.md
- content/systems/forechecking_systems.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md

Six agents worked on disjoint files, and each tested its plan row against the source before acting. The diagram half of the wave (agent G) is recorded separately.

## What changed and why
1. **goaltender, warm-up.**
   - :1428: "what the officials miss **is** reviewed after the game (86.6)" becomes "**may be** reviewed". The source is the EIHL Casebook 86.6 ii (`eihl_casebook.txt:931-932`); the old wording overstated it.
   - The 300/300 facts line was split into two Rule lines.
     - :1411 is the half-ice rule in every book: NHL/IIHF 86.6, USAH 636(c), HC 2.2(i). The NHL, PWHL, IIHF, HC and CARHA report a breach, and the Elite League adds a suspension or fine.
     - :1412: referees can penalise a warm-up offence under USAH 502(b), HC 2.2(j) and CARHA 27(b), and a warm-up fight is a major plus game misconduct (NHL 46.9; IIHF 2026/27 46.8).
   - The old line restored neither the USAH 636(c) citation nor the HC 2.2(i) citation. It also implied that Hockey Canada penalises a half-ice breach; HC only reports one.
2. **"Never for a whistle" was elliptical voiced alone,** so it now names the act.
   - Wording: "never hold it to get a whistle" (defender) and "never to get play stopped" (dzc, bcb). The USA Hockey three-second minor is stated with it in each unit.
   - Sites:
     - defender: In short :209 and facts :214;
     - dzc: facts :177, body :195 and Common Mistakes :204. ":195/:204 'never past three seconds'" read as a safe window, against SG92's deadline ruling;
     - bcb: In short :1146, facts :1150, body :1159 and "What it costs" :1167.
   - Other pages' "pin it / hold it for a whistle" name the act and were left alone; the coordinator grepped the corpus for this.
3. **forechecking :626.** "that pair" (twice) now names the result. HC 8.3(b)'s mandatory ejection when the hit injures was added; it was missing before this wave, and it errs permissive (found by the safety reviewer, confirmed by the rules verifier). It now reads: "IIHF 56.5 can eject; Hockey Canada 8.3(b) can too and must if hurt, 8.3(c) a match; USA Hockey 640(g) ejects if reckless". 297/300.

## Rows tested and not changed
- **goaltender :789** "those three books' rule": the antecedent is in the same line. False positive.
- **defender/center DOPS under-16 limb:** these are IHUK DOPS carriers, not the Elite League's.
  - Leaving out the Appendix J warning errs harsh.
  - The document never says how Appendix J relates to the C.1 mandatory bans.
  - Adding it could be permissive.
  - The owner pages (uk_rules :413/:654, rules_primer :392) carry it.
- **risk_management :648/:664/:692:** the tripping half was already done (ec6d1d6, fe91058). An IIHF hooking major is already a major plus automatic game misconduct (55.3), so the British women's and junior rule adds nothing.
- **forechecking :617** "reckless" against both tiers follows USAH's own structure (640(g), 640(h), 602(a)). **:1041, :1047, KT8, KT9:** true, not permissive, and 602(a) is carried in the page's facts and body. Left for shortness.
- **uk_rules DOPS C.1 boarding minor:** the DOPS on disk is IHUK's.
  - Appendix D: a minor is "0 points … no carry-over suspension".
  - Appendix H: the pathway starts at a major plus game misconduct.
  - "A major for boarding" errs harsh. Review of lesser or uncalled acts is already covered (KT19, body :176-178).

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules (all five files) | rules-verifier | Nothing WRONG. CONFIRMED: 86.6 "may be reviewed"; half-ice in every book; the four reporting books; 502(b), 2.2(j) and 27(b); NHL 46.9 and IIHF 46.8 (2026/27; 46.9 in v1.1); every-book freeze minor; "to get play stopped" keeps the intent condition the non-USAH books carry; USAH 632(b) needs no intent; "three seconds at the latest"; :626 NHL/PWHL "if hurt", IIHF 56.5 and USAH 640(g). INCOMPLETE: HC 8.3(b) mandatory-if-hurt (fixed); PWHL 88.6 also reports (added); the edition was missing from the facts line beside "46.8" (added). |
| Safety (all five files, rendered) | safety-reviewer | All SHIP, with no act cheaper. Minors: defender "three seconds is enough" could be heard as permissive, and bcb "just to get play stopped" invites a mixed-motive reading. bcb: "just" deleted. defender: the facts line now reads "three seconds is already a minor"; the In short keeps "three seconds is enough to make it one" after "that is a minor", which the commit gate judged adequate. The :626 HC omission was raised as a major and fixed. The dzc :204 USAH limb stays in the same `<p>` (chunk 013 p6). check_marker_pairs: 0 lost in all five. Incidental: the renderer voices "2.2(i)" as "clause one". That is pre-existing and filed. |

### C11
The coordinator applied the reviewers' fixes after the reviews; the commit gate reads them:
- **defender** :209 now reads "Never hold it to get a whistle: that is a minor, and under USA Hockey three seconds is enough to make it one". :214 (facts, 185/200) reads "Never hold it to get a whistle; under USA Hockey three seconds is already a minor". The Rule line :215 directly below carries the every-book minor.
- **bcb** :1159: "just" was deleted.
- **forechecking** :626: as above. "ejection if hurt" became "ejects if hurt" to fit. "with nobody hurt" was dropped from the IIHF limb, because "can eject" with no condition is accurate for 56.5. "Hockey Canada" is spelled out, because the renderer has no alias for "HC".
- **goaltender** :1411: PWHL added to the reporting list (243/300). :1412: "IIHF 2026/27 46.8".

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | rules-verifier on every changed claim, reading the 2026 CARHA book, HC 2026-28 and both IIHF editions. |
| D4–D5 citations | Casebook 632 Situations 4–6 match verbatim (bcb :1167). EIHL 86.6 ii is quoted correctly. |
| D6 negative existence | "USA Hockey writes no reporting clause for a half-ice breach" was searched by the act (warm-up, half). |
| D7 cardinal rule | Not affected. |
| D8 numeric ownership | n/a |
| D9 summary layers | The layer test covered In short, facts, body, Common Mistakes and KT in each file. No summary layer was built on the old wording (safety-reviewer). |
| D10 facts layer | check_facts exits 0. The forechecking block is at 14/14, with :626 at 297/300. The goaltender block is at 8 facts. |
| D11–D12 safety, read aloud | All five files rendered. The changed units were read alone. |
| D13 folklore | n/a |
| D14 structure, links | check_links and site check-links pass. |
| D15 render | Full site build with the absolute npm at 19:12: exit 0. It covers every content edit (last edit before 19:00). A site-reviewer is checking the rendered pages with the diagram half. |

### Mechanical checks
check_facts, check_links --quiet, check_absolutes, check_secrets, check_geometry and check_counts --update all exit 0. check_marker_pairs found 0 lost and 0 split halves on all five files.

## What this method could not have found
- Other rules that price a long pin, such as holding the opponent's stick while pinning.
- Whether HC, CARHA or USAH price a warm-up fight more harshly than the NHL and IIHF.
- How IHUK actually applies Appendix J against C.1.
- Elliptical facts lines in these files beyond the claims briefed.
