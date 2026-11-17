# W415: IIHF prices for a reckless trip, a kick, a slew-foot meant to injure and a late hit on a goalie are now stated, with British women's and junior ejection, Hockey Canada's late-hit match and a census of Hockey Canada interference (17 November 2026)

**Content files changed:**
- systems/defending_the_rush.md
- systems/offensive_zone_play.md
- hockey-iq/playing_without_the_puck.md
- technique/passing_and_receiving.md
- hockey-iq/risk_management.md

**Also changed:** project/plans/OPEN_ITEMS.md, and this record.

## Source
- **Plan rows:** From W414 (2)–(6).
- **Brief:** scratchpad/w415/brief.md, carrying the W414 addendum.
- **Census:** one read-only agent (Census A: Hockey Canada 8.3(b) stated flat; Census B: Hockey Canada head cross-check scoped to minor and female hockey).
- **Authors:** five, one file each, each briefed with its item as a hypothesis.

## What changed (voiced)

### defending_the_rush :668 (Breakaways) and :1117 (Common Mistakes)
Now reads:

> "A *reckless* trip is not capped at a minor under the IIHF: the referee may give a major, or a major and game misconduct (57.3, 57.4), and supplementary discipline can follow (57.7). In British women's hockey any major ejects you (In-House Rule 101), so plan on that in British junior hockey too. Under USA Hockey a reckless trip is a mandatory major…"

Before this change, the unit named no IIHF price. The full IIHF price appeared only about 40 chunks later.

### offensive_zone_play :1201 (A late hit)
Now reads:

> "…the PWHL (57.5, 21.1) runs the same way, and Hockey Canada makes the match mandatory too (8.3(c)). The IIHF and Hockey Canada do not wait for an injury: the referee may give a major plus a game misconduct with nobody hurt, under IIHF 56.5 if the hit recklessly endangers the player and under Hockey Canada 8.3(b) on the degree of violence. Hockey Canada ⚠️ makes that major and game misconduct mandatory where a late hit injures, and under the IIHF supplementary discipline can follow (56.8)."

Before this change, it read "reach a major plus a game misconduct with nobody hurt", with no trigger, no 56.8, and no Hockey Canada match.

The facts :956 claim that USA Hockey's "and a match" overstates 640(h)'s "may" was **refuted**: 602(a) reads "shall".

### playing_without_the_puck :744
Now reads:

> "Under the IIHF the referee can eject you for a reckless charge with nobody hurt (42.4). Checking a goalie who does not have the puck is also a late hit, and the referee can eject you for that too where it recklessly endangers (56.2(III), 56.5). Whether 56.5 also reaches a call made as goalie interference under 69.2, the book does not say."

Before this change, the disclosure said the book does not say whether 56.5 reaches goalie contact. But 56.2(III) names "the goalkeeper", so that disclosure understated the price.

### passing_and_receiving (kicking)
- **Facts :487 (296):**

  > "Rule: Never kick the man; kicking the puck is legal, but a distinct kicking motion cannot score (NHL 49.2); kicking or trying to kick an opponent is a match, injury or not, in NHL and PWHL 49.3; IIHF 49.3 lets the referee give a major and game misconduct, and supplementary discipline can follow (49.4)"

- **:506, CM :845 and KT15 :913:** each adds "supplementary discipline can follow (49.4)".
- **Trailer :928:** cites 49.4.

### risk_management (slew-foot meant to injure)
- **Facts :760 is split in two:**
  - :760 (275):

    > "Rule: A slew-foot meant to injure is a mandatory match under NHL and PWHL 21.1, CARHA 48(a) and USA Hockey 602(a), with a likely multi-game ban in USA Hockey; the IIHF has no match penalty, so plan on 52.2's major and game misconduct, and supplementary discipline can follow (52.3)"

  - :761:

    > "Rule: Under Hockey Canada, plan on a match for a slew-foot meant to injure, even if no one is hurt — this guide's reading of Appendix D Note 1"

- **Body :908:** the same NHL, PWHL and IIHF limbs.

## Census (read-only) → plan
- **A (Hockey Canada 8.3(b) stated flat):**
  - DEFECT: defender facts :260 (300/300).
  - JUDGEMENT: game_management facts :173, bcb facts :1718, rules_primer :515 ("Hockey Canada gives…" beside CARHA "at the referee's discretion").
  - Out of scope: CARHA stated flat on the same lines; bcb :700, Hockey Canada head contact "gives" with nobody hurt.
  - About 40 OK.
- **B (head cross-check scoped to minor and female hockey):** no defects in about 35 units.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** all 12 units OK. Two were confirmed but incomplete:<br>• dtr: In-House 101 / IIHF 201.1 make any major an ejection for women and junior.<br>• ozp :1201: HC 8.3(c) match.<br>Also:<br>• British books add no slew-foot or kicking tier (In-House, EIHL Casebook, the four IHUK RoCs, EIH DOPS).<br>• IIHF has no player attempt-to-injure rule.<br>• USAH 602(a) is Level 1, 6–10 games.<br>**Confirmation:** all four post-review edits OK. |
| safety-reviewer | **First read:** no Critical. One Major: dtr offered a plain major as a non-ejecting tier, but In-House 101 makes it an ejection for British women. Two Minors:<br>• pwtp :744 three clauses ran together;<br>• passing :487 "kicking it is legal" next to "the man".<br>**Confirmation:** CLEAR. Optional: "so plan on that" implies junior follows from Rule 101 (to the plan). |
| site-reviewer | Five pages at 400×812 DPR 2 light/dark and 1440 light, on the 14:17:01 build. Every worst window is unchanged (ozp still 49.0, in Common Mistakes). Grown units sit at 7.6–33.9. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text or an author correction confirmed by a reviewer:
- dtr: "any major" in place of "either one";
- pwtp: "the referee can eject you for that too" in place of "that can eject you too";
- risk: the facts-line split.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 14:17:01, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all five files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **IIHF**, both editions: 42.4, 49.3/49.4, 52.2/52.3, 56.1/56.2(III)/56.5/56.8, 57.3/57.4/57.7, 69.2, 201.1.<br>**Hockey Canada:** 8.3(b)/(c)/(e), 8.8, App D Note 1.<br>**CARHA 2026:** 48(a).<br>**USAH:** 602(a), 639, 640(g)/(h).<br>**NHL/PWHL:** 21.1, 49.2/49.3, 52.2/53.2.<br>**British:** In-House 101, 201; EIHL Casebook; IHUK RoCs; EIH DOPS. |
| D2 Exceptions | British women's (101) and junior (201 / 201.1) ejection; 56.2(III) brings in the goalkeeper. |
| D3 Cross-book divergence | Hockey Canada's late-hit match; IIHF has no match. |
| D4 Citation integrity | 49.4 is quoted verbatim in the trailer. |
| D5 Provenance | Not engaged. |
| D6 Negative existence | "The book does not say" narrowed to the 69.2 question and upheld (Rule 69, Situation Handbook, EIHL 69). |
| D7 Cardinal rule | "Plan on" kept as player advice. |
| D8 Numeric ownership | USAH 6–10 games behind "likely multi-game". |
| D9 Summary layer | Kicking claim fixed in facts, body, CM and KT15. Slew-foot claim fixed in facts and body. |
| D10 Key-facts | :487, :760 and :761 read voiced alone. |
| D11 Reader safety | safety-reviewer, two reads. |
| D12 Read-aloud | :744 split; :487 "it" removed. |
| D13 Folklore | Not engaged. |
| D14 Structure, terminology, cross-links | check_links. |
| D15 Rendered site | site-reviewer. |

## Found, not fixed (plan rows)
1. Census A:
   - defender facts :260 (300/300) — Hockey Canada 8.3(b) stated flat;
   - game_management :173 — the "(automatic under 8.3(e))" bracket;
   - bcb :1718;
   - rules_primer :515 — "Hockey Canada gives";
   - CARHA stated flat on the same lines;
   - bcb :700 — Hockey Canada head contact "gives".
2. dtr :668/:1117: "so plan on that in British junior hockey" implies the junior rule follows from Rule 101. Optional: "and plan on the same in British junior hockey". Also: should dtr :999/:1033/:1036 carry the British limb?
3. pwtp :744's IIHF charging limb omits the EIHL Casebook Rule 42 mandatory game misconduct for a face or head injury.
4. Sibling documents may repeat "the book does not say" about goalie interference without the 56.2(III) limb; on_ice :521 may hold a kicking sibling without 49.4.
5. pwtp :1177 Notes attribute the 69.2 quotation to 69.8 (cosmetic, not voiced).
6. Amber runs inside closed Sources panels: dtr 17, ozp 19, pwtp 11, passing 6, risk 6 (unvoiced). Candidate for a tidy.
7. passing :487 is at 296/300. ozp is at 49.0 at 400px (Common Mistakes), 1.0 below the limit.

## What this method could not have found
- Rules in each book that price these acts under another heading. Hockey Canada 7.8's late-hit note was not swept.
- British negatives are true zeros on the words searched (slew, kick, latehit). A tier written without those words would have been missed.
- How the long ozp :1201 unit (1,537 characters) sounds in real synthesised audio.
