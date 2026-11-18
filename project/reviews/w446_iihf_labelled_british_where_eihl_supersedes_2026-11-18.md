# W446: IIHF rules labelled British where the EIHL Casebook supersedes them. A goalie charge's mandatory Elite League game misconduct is no longer heard as discretionary, an Elite League bench-leaver is no longer told the night's penalty is the IIHF's, and the IIHF jewellery rule (65.1) is no longer denied (18 November 2026)

**Content files changed:**
- positions/goaltender.md
- technique/body_contact_and_battles.md
- systems/special_teams.md
- systems/faceoffs.md
- positions/switching_positions.md
- foundation/rules_primer.md
- foundation/uk_rules.md
- off-the-ice/equipment.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Census.** A read-only rules-verifier pass ran in parallel with W445. It tabulated every EIHL Casebook change to the IIHF 2026/27 price or procedure, then searched the corpus for British-labelled IIHF statements that the Casebook supersedes.
  - It found one clear permissive defect (goaltender facts :1268), two permissive candidates, one procedural defect, four in the harsher direction, and a false IIHF negative on jewellery.
  - About 540 other units were fine.
  - Its findings are recorded in the W446 plan row, now From W446.
- **Brief.** scratchpad/w446/brief.md.
- **Authors.** Eight agents, one file each.
- **Record correction.** Commit 810cb802's message (W445) credits the "main domestic softening" fix to Rules Primer. It was uk_rules :407. History is not rewritten; this note is the correction.

## What changed (voiced)

**Permissive defects found by the census:**
- **goaltender facts :1268.** "Across the Home Countries…" became "Outside the Elite League, the IHUK In-House Rules 2026-27 leave Rule 42 alone, so the IIHF ladder prices charging you". EIHL Casebook 42 makes the game misconduct mandatory on a charging major that injures the face or head, where IIHF 42.4 says "may". The next facts line (:1269) states the EIHL rule and falls in the same chunk.
- **bcb facts :1975 and body :1989.** "…the night's penalty unchanged" became "An EIHL player who leaves either bench "to join an altercation" draws a 20 or a 2 + 20 — not only the IIHF's first or second player off". The body adds "That game misconduct reaches every player who leaves to join". Casebook Fines and Suspensions (2) has no first/second limit; IIHF 70.3/70.6 do.
- **special_teams :1099.** Now reads "…and only if it is the original fight and your first major". Casebook 46.2 gives a game misconduct for a fight joined after the altercation started. HEAD's caveat was in the next chunk.

**Harsher-direction and procedure fixes:**
- **bcb :1927 heading.** "IIHF (Rule 46) — the British base" now says that in an Elite League game Casebook 46.1 and 46.10 replace the fighter and instigator tiers, and that a second major or a joined fight still ends your game.
- **bcb facts :1904.** Now reads "The EIHL Casebook replaces the first two, not the third; … plan on 2026/27's narrower exception". The third-man exception is IIHF 46.14; the Casebook has no third-man rule.
- **switching :368.** The In-House no-warning misconduct is now scoped. A new line: "The Elite League writes its own Rule 9.12: the referee warns first, then gives a minor…".
- **rules_primer :384.**
  - "'Five minutes, then back on' is the NHL's and the PWHL's answer. In the Elite League a willing original fight that is your first major is "at least a Major Penalty" — five minutes is the floor, not a promise (a second major ejects you, and the Casebook does not limit that count to one game; EIHL Casebook 46.1)".
  - The aggressor, instigator and joined-fight lines now name the Elite League.
- **rules_primer :554.** The Elite League instigator "takes 2 + 5 + 10 and stays in the game — with a review for a further suspension — but is ejected in the last five minutes, in overtime, on a second instigation, on a second major, or as the aggressor too (Casebook 46.10, 46.2, 46.1)".
- **faceoffs, Check yourself item 2.** Now reads "the In-House answer, which is none of the four, and the Elite League's, which is the IIHF's".

**Jewellery:**
- **uk_rules :248** now opens "Jewellery: take it off before you dress".
  - The Elite League bans it outright: Casebook 9.5 says "either under a player's equipment or exposed", so a taped ring is still worn.
  - Elsewhere IIHF 65.1 applies, and the referee can order it off. Refusing is a delay-of-game minor under IIHF 9.8.
  - "If it will not come off, tape it — and only outside the Elite League."
  - HEAD said the IIHF writes no jewellery rule, which is false. It also said "Tape it or take it off" unscoped, which is wrong for EIHL players.
  - A notes line records that a claim relying on 9.5's equipment-change power was cut (non-negotiable 3), and that 9.8's reach to accessories is the conservative reading.
- **equipment :184.** "searched in full" and the IIHF negative are gone.
  - It now cites 65.1.
  - It now names Hockey Canada 7.10(c) and CARHA 59(a) Note 1, which make using a ring in a fight a match penalty (CARHA: "or altercation").
  - Its lead now reads "Take it off before you dress".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** no WRONG in the dangerous direction. Incomplete: equipment :184 (HC and CARHA ring rules), rules_primer :554 (second-major ejection) and "count the season" (unconfirmed). Wrong for EIHL players: uk_rules "Tape it".<br>**Confirmation:** 5 of 6 OK. bcb :1904 WRONG (minor misattribution: "its narrower exception"), fixed with the reviewer's text. Nit at rules_primer :384, fixed. |
| safety-reviewer | **First read:** three Majors.<br>• M1: uk_rules "65.1 names no price for refusing" (IIHF 9.8).<br>• M2: "Tape it" for EIHL players.<br>• M3: rules_primer :384 dropped Casebook 46.1's "at least".<br>All three were fixed with safety's text. Minors on the bcb heading, :1904 and rules_primer :554 were also fixed.<br>**Confirmation:** CLEAR. "Important." counts equal HEAD in all four re-rendered files. |
| site-reviewer | Eight pages at 400×812 DPR 2 light/dark and 1440 light, on the 10:49:57 build. Every worst window unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. The jewellery and fight runs are glyph-led warn-inline. Its split-half flag on bcb facts :1975 is the line both reviewers ruled on: it had no marker in HEAD. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, or an author correction confirmed by a reviewer:
- equipment "(CARHA: or an altercation)";
- bcb heading "in that league" (no "there");
- the uk_rules notes "arguable… conservative reading";
- the rules_primer :554 trims.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 10:49:57; the newest content file is body_contact_and_battles.md at 10:49:17.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** check_callout_flow --bare reports 0; `--panels --file` reports 0 on all eight files.
- **Marker pairs:** check_marker_pairs reports 0 LOST. Its single SPLIT candidate is bcb facts :1975, unmarked in HEAD as well.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | EIHL Casebook Preamble, 9.5, 9.12, 41/42, 46.1, 46.2 (both), 46.10, Fines and Suspensions (2), DOPS review clause; In-House 9.8, 9.12, 76, Section 6, 101; IIHF 2026/27 9.5, 9.8, 20.4, 42.4, 46.1–46.14, 65.1, 70.3/70.4/70.6, 76.4; HC 7.10(c); CARHA 2026 59(a) Note 1 |
| D2 Exceptions | 46.2's instigator waiver; 46.14 third-man exception |
| D3 Cross-book divergence | EIHL vs IIHF vs In-House, across charging, fighting, bench-leaving, neck guard, jewellery and faceoff order |
| D4 Citation integrity | the third-man exception now attributed to IIHF 46.14, not the Casebook |
| D5 Provenance | uk_rules notes line on the cut 9.5 claim |
| D6 Negative existence | IIHF "no jewellery rule" refuted (65.1); "write no ring rule" refuted for HC and CARHA (found by searching for the act) |
| D7 Cardinal rule | "plan on" readings kept where the book is silent |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | bcb facts and body; rules_primer body pair |
| D10 Key-facts | goaltender :1268, bcb :1904 and :1975 voiced alone |
| D11 Reader safety | safety-reviewer, two reads (three Majors fixed) |
| D12 Read-aloud | chunk distance measured at special_teams :1099 and bcb :1927 |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W446)
- The page header "Wherever this page gives the IIHF rule, it is yours" on about 25 pages (change as a set).
- Equipment :184: other books price material on the hands.
- bcb :1904: "narrower exception" heard alone.
- bcb :1989: the 70.4 label.
- Sucker-punch injury condition.
- switching EIHL practice reach.
- The renderer's "46.10".
- faceoffs Check yourself item 1.
- The 810cb802 message correction.
- Site-reviewer: the equipment :184 amber run carries two citations inside it (re-bound onto the instruction).

## What this method could not have found
- British-labelled IIHF statements worded without a British term.
- EIHL regulations outside the Casebook, and in-season Casebook updates.
- Officiating practice on taped rings.
- Real synthesised audio.
