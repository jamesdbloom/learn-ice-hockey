# Wave 31 — ten permissive lanes and the owner's USA Hockey 602(a) ruling (1 October 2026)

## Scope

Ten file-disjoint lanes (A–J) worked the plan's remaining permissive rows (`scratchpad/w31/rows_A…J.md`, planned by grep candidates). Seventeen documents changed:

- body_contact_and_battles
- playing_without_the_puck
- time_and_space
- offensive_zone_play
- scanning_and_anticipation
- forechecking_systems
- puck_handling
- defensive_zone_coverage
- language_and_glossary
- shooting
- center
- zone_entries
- risk_management
- game_management
- on_ice_communication
- defending_the_rush
- rink_map

Three owned documents were checked and needed no change: uk_rules, team_play_and_culture and core_principles.

## Method

1. One author per lane.
2. A read per lane (rA–rJ).
3. A rules-verifier ruling on how USA Hockey 602(a) relates to the rule-specific match clauses, then a consistency read of every changed USA Hockey match line.
4. Repairs went back to their authors.
5. Late repairs were re-read in batches until clear: rR, rG2, rZ, rZ2, rQ, rV1, rV2, rL, rL2, and (after the first commit gate) rF2.
6. A `site-reviewer` checked all 17 pages on the final build.

## What was wrong, in kind

- **General deliberate-injury rules were missing beside rule-specific prices.**
  - NHL/PWHL 21.1 (*"A match penalty shall be imposed on any player who deliberately attempts to injure…in any manner"*) and CARHA 48(a) were absent where the NHL, PWHL or CARHA ceiling was given through a charging or late-hit rule alone. This affected game_management, center, shooting, risk_management and zone_entries.
  - One shooting facts line called the NHL/PWHL match "discretionary" (42.4) when 21.1 makes it mandatory.
- **NHL/PWHL 43.3/43.5.** A late hit on a turned player is a check from behind: a major plus a mandatory game misconduct with nobody hurt. game_management said the NHL ejection "needs an injury"; this is fixed in every layer.
- **USA Hockey 608(c).** It makes the match mandatory for a reckless check from behind with excessive force on a vulnerable or defenceless opponent. It was missing wherever Casebook 608 Situation 1's "major plus a game misconduct, or a match penalty" was quoted, in zone_entries, risk_management and defensive_zone_coverage (including a new facts line).
- **EIHL Casebook Rule 42.** Its mandatory game misconduct on a face or head injury was missing beside NHL/PWHL 42.5 in forechecking, zone_entries, rink_map, scanning and the glossary.
- **Goaltender contact.**
  - scanning priced a goalie charge as if only the crease mattered.
  - playing_without_the_puck said deliberate contact could eject only under HC and CARHA.
  - center said only HC and CARHA penalise failing to avoid the goalie. It now quotes each book's own threshold: "a reasonable effort" for the NHL, IIHF and PWHL; "clearly made every attempt" for USA Hockey; "an effort" for Hockey Canada; "attempt" for CARHA.
- **Freezing the puck while checked.** on_ice_communication said HC and CARHA excuse it while you are being checked. HC 6.12(b) and CARHA 55(a) Note 2 reach the act with no such exception.
- **Hockey Canada 8.3 box-out.** body_contact and defensive_zone_coverage said no rule reaches the box-out. Under HC 8.3(i), holding the spot can be called as interference.
- **Others.**
  - PWHL 55 was missing from the pins/holding list.
  - The 603(c) quotation was truncated.
  - The CARHA crease clause was overstated (rink_map).
  - CARHA 49(a)'s "does not avert" limb was missing from the "hold your ground" sites.
  - Cross-checking was priced in four books, not six (glossary).
  - A "top of the ladder" claim was false for five books.
  - Hockey Canada slew-foot was claimed mandatory via Appendix D Note 1 (removed: 7.1(c) is residual and 8.8(c) is discretionary).

## The USA Hockey 602(a) question and the owner's ruling

602(a) says a match "shall be assessed" to any player who "recklessly endangers or attempts to injure". Each specific rule says (b) a major plus a game misconduct "shall" be assessed, then (c)/(e)/(h) a match "may also be assessed". No precedence clause exists. Casebook 602 Situation 1 says the match "must be assessed", while the specific Casebook rulings read "major plus GM or match".

1. **Brief rule (h) was wrong.** I wrote it, and it called 602(a) mandatory for every reckless act. One author stacked a match on top of the major plus game misconduct, and a reader blocked it.
2. **First ruling.** A `rules-verifier` ruled that the specific rule governs, with the match as the referee's option. Authors applied it.
3. **Dissent.** Two `safety-reviewer`s dissented: the option reading states the cheaper side of an unsettled conflict as settled. rules_primer already said "the book does not say which governs".
4. **Owner's ruling.** Asked to decide, the owner chose **"plan on the match"**. Every reckless site that a specific rule covers now says "a mandatory major plus a game misconduct, and plan on a match penalty", quoting 602(a) in full where room allows. "Instead", "at the referee's option" and "optional" are banned for the USA Hockey reckless match.

Two cases are unchanged by the ruling:
- An attempt to injure is a mandatory match under 602(a).
- 602(a) also prices reckless acts outside any specific rule's scope: the 603(a) rolling carve-out, and 640 in adult men's hockey.

Applying the first ruling also cut 602(a)'s reckless half at those scope-gap sites (game_management, forechecking, body_contact). Readers caught it, and it was restored.

## The first commit gate blocked

The first `commit-gate` run blocked DZC :477 and CM :752. Both still said USA Hockey's match "is not optional where the check comes with excessive force…". That implies the match is optional for any other reckless check from behind, and it uses a word the owner's ruling bans. rV1 had blocked the same construction at :177, but only :177 was repaired, and rV1 had cleared :477 and :752. Both now read "plan on a match for any reckless one (602(a))" before the 608(c) case. zone_entries :219, :775 and :1071, the same claim without the banned word, got the same clause. rF2 read all five: CLEAR. The site was rebuilt after these edits.

## Coordinator errors this wave

- Brief rule (h): 602(a) was stated as mandatory for every reckless act.
- The first 602(a) ruling did not spell out scope-gap cases.
- My suggestion "say it holds in every book" for the avoid-the-goalie threshold. It extended HC's "no effort" test to books whose tests are stricter, and was caught by rZ.

## Rendered site (D15)

A `site-reviewer` checked all 17 pages at 400 and 1440, in light and dark (68 loads). It used headless Chrome over CDP on the 18:46 clean build. The later DZC and zone_entries repairs (see below) were rebuilt at 19:11 and checked mechanically only (`--panels` 0, `--bare` 0); a browser has not re-viewed those two pages.

- Every added fragment was present and visible.
- 0 panels and 0 untreated glyphs.
- All 41 changed facts lines render as `dd.facts__value`.
- No overflow, residue, console errors or 4xx.
- **Minor:** three new amber runs land on a rule number, not the instruction (risk_management :717, game_management :179, body_contact :1124). Logged as row [W31 amber on citations].

## Dimension coverage

| Dim | Name | Covered | By | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `safety-reviewer` ×≥15 reads; `rules-verifier` ×2 | NHL/PWHL 21.1, 42.4/42.5, 43.3/43.5, 55, 59.4/60.4, 69 tables; IIHF 42, 55.3, 57.4, 59.3, 101.1; USAH 602(a), 603, 604, 607, 608, 609, 620–623, 634, 639, 640, Casebook 602/607/608/621/634/640 situations, Appendix I, Discipline Policy; HC 6.12(b), 7.3–7.5, 8.3, 8.5, 8.8, 9.2, App. D; CARHA 48(a), 49, 53, 54, 55(a), 63, 66, 86; EIHL Casebook 42. |
| D2 | Exceptions | Yes | same | 603(a) rolling carve-out; 640(b) adult-male exception; HC 10.1(i) vs 6.12(b); 8.8 Interpretation 1. |
| D3 | Rule-set divergence | Yes | same | Every new list read for the unnamed book. |
| D4 | Citation integrity | Yes | readers | Quotations verified verbatim. |
| D5 | Provenance | Yes (no new source URL) | coordinator | Trailer additions cite books already cited. |
| D6 | Negative existence claims | Yes | readers | "IIHF writes no match penalty"; "no precedence clause in USAH". |
| D7 | Cardinal rule | Partly | readers | **Otherwise declared out of scope.** |
| D8 | Numeric ownership / restatement | Partly | readers | Several W31 units now restate the 602(a) clause in neighbouring chunks (logged). **Otherwise declared out of scope.** |
| D9 | Summary layer | Yes | readers | KTs and facts voiced alone. |
| D10 | Key-facts layer | Yes | readers, `check_facts` | Several lines at 297–300/300; one new DZC facts line. |
| D11 | Reader safety | Yes | a reader on every lane and repair | |
| D12 | Read-aloud integrity | Yes | authors and readers rendered | 0 lost markers on all 17 files. |
| D13 | Folklore | No | | **Declared out of scope.** |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Many W31 units exceed 2,500 spoken characters (logged). **Otherwise declared out of scope.** |
| D15 | Rendered site | Yes | `site-reviewer` | See above. |

## Gates

- `check_links` 0, `check_facts` 0, `check_absolutes` 0, `check_geometry` 0, `check_secrets` 0.
- `check_marker_pairs` 0 lost on all 17 files.
- `--panels` 0, `--bare` 0.
- Clean build with the absolute npm, exit 0.

## What this method could not have found

- Readers read changed units and their chunk neighbours.
- Pre-W31 USA Hockey reckless sites that still make the match sound optional ("allows", "reaches", "can add", "may also be assessed" alone) remain across the corpus. They are logged under [USAH 602(a) pre-existing reckless sites] with the owner's ruling.
- Whether USAH 640 Note 2 reaches adult men's late hits (row logged).
- The 608(c) layer test across fourteen more documents (row logged).

## Plan rows closed by this wave (verbatim from OPEN_ITEMS.md)

- [center CARHA 48(a) match] center :684/:693/:725 price CARHA 49(a) as minor or major; after "each book then reaches a match penalty" a CARHA reader may hear major as top — CARHA 48(a) is a match for deliberate injury "in any manner" (direction: permissive-low)
  - W31 evidence: Lane F: center CARHA 48(a) match added in every layer the row names — body :693 'a hit meant to hurt is a match penalty under its Rule 48(a)' (quoted), facts :684 '; an attempt to injure is a match penalty (48(a))', CM :725 'and an attempt to injure is a match penalty under its Rule 48(a)'; charging list :474 now 'every book here but the IIHF's goes past the ejection to a match penalty' with CARHA 48(a) 'and a charge is a manner' (carha.txt:2389-2392); KT8 :801 already 'every book but the IIHF's'. All sites in center (W31 lane F).
- [puck_handling :280/:302 CARHA] puck_handling facts Action :280 "Use your hips and backside as the barrier" and :302 "your body should be doing the blocking" carry no CARHA scope (49(a)); arguably passive position — layer test (direction: permissive-low)
  - W31 evidence: Lane D: layer test done — puck_handling :280/:302 describe position (hips and backside as the barrier); the act CARHA 49(a) prices ('intentionally bodies, pushes, shoves, stands in front of an opponent for the purpose of making contact, and/or does not avert body contact', carha.txt:2449-2456) is already scoped to CARHA at facts :422, body :433, CM :954 and KT4 :1035; adding it to the feet section would be inherited detail (document-relative test). Single-file row, W31-owned.
- [forechecking dump-in CARHA 79] forechecking_systems dump-in sites carry no CARHA short-backswing limb — candidate only, unswept (direction: permissive-low)
  - W31 evidence: Lane D: false premise — forechecking_systems never teaches a slap shot or wind-up for a dump-in (only 'aim it into a corner'); CARHA 79 (carha.txt:3568-3574) is carried where a wind-up is taught (puck_handling :653/:663). Single-file row, W31-owned.
- [HC 8.3] defender CM :797 HC box-out "unwritten rather than barred" (slightly permissive vs 8.3(i)); glossary :377 "The instruction holds in all four books" (screen) vs HC 8.3(i) — reader's call; HC 8.1 arm-block permission questions pwtp :462-463/:477-478 (NHL/IIHF-only permission lines could name USAH Preface; HC 8.1 open), permissive-low ‖ [cross-check] `language_and_glossary.md:377` Screen entry still says "all four books"; widen only after establishing the PWHL cross-checking rule number (renumbering map lacks 59); HC 9.2 Interpretation 2 (cross-check above shoulders → Head Contact 7.6) not in the Screen entry (only in trailer :489) (direction: permissive) — (plan 51, 392, 412; 19603-19608, 19611-19612) — [merged across T1, T4] — W26 1 Oct: defender body :270 / CM :800 'unwritten rather than barred' replaced with HC 8.3 impeding interference; pwtp :462/:477 judged not permissive (and HC 8.1 permits an arm block with body position, so pwtp's 'Hockey Canada writes no such right' may be HARSHER than the book — new finding); remaining: language_and_glossary :377 Screen entry ('all four books', PWHL cross-check number, HC 9.2 Interp 2). — W27 1 Oct: glossary Screen entry no longer says 'all four books' (grep finds none in the file), names the NHL/IIHF/PWHL/USAH/CARHA with the HC 8.3/8.1 caveat, and quotes HC 7.6(b)/7.7(b) (Interp. 2 substance); remaining: the PWHL cross-checking rule number was not established (lane A: 'I did not look up the PWHL or CARHA cross-checking rule numbers') while the entry now says 'The shove is cross-checking in every book' citing only NHL/IIHF 59.2, USAH 609(a), HC 9.2(a).
  - W31 evidence: The W27 remainder was the PWHL cross-checking rule number: lane E established it as PWHL Rule 60 and the glossary Screen entry :377 now prices cross-checking in all six books — PWHL 60.2 discretionary minor and 60.5 game misconduct on the major (pwhl_rules.txt:5497-5518), CARHA 54(a)/(c) (carha.txt:2598-2611), then 54(b) above-the-shoulders 'whether or not injury results' and 54(d) match for a deliberate injury or attempt (carha.txt:2603-2615) in its own clause; 'those four' → 'all six'. Other limbs closed earlier (defender W26; glossary 'all four books' and HC 9.2 Interp. 2 substance W27; pwtp :462/:477 judged not permissive, possibly harsher). All remaining sites were in the glossary (W31 lane E).

Thirty-three further rows carry a "W31 1 Oct: … remaining: …" note. New rows logged this wave:

- [USAH 602(a) reading — dissent] (now resolved by the owner; the row records it)
- [USAH 602(a) pre-existing reckless sites]
- [USAH 608(c) layer test]
- [NHL 21.1 / CARHA 48(a) general match]
- [NHL/PWHL 43.5 late hit]
- [USAH 640 Note 2 adult men]
- [freeze-for-whistle excused while checked]
- [team_play CARHA 48(d) helmet]
- [uk_rules IIHF tables]
- [DZC long CM / glossary summary match]
- [W31 amber on citations]
- [W31 nits]
