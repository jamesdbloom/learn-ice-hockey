# W449: the Rules Primer no longer says every "As IIHF" cell is your rule, the bench-leaving tiers cover either bench, an Elite League player's neck guard at practice is no longer "unsettled", and the jewellery bullet now names the four books that penalise tape on the hands (18 November 2026)

**Content files changed:**
- foundation/rules_primer.md
- technique/body_contact_and_battles.md
- positions/switching_positions.md
- off-the-ice/equipment.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W446 and From W447. The specific rows are:
  - rules_primer :15 and :57;
  - the bcb 70.4 label;
  - switching's EIHL practice reach;
  - the equipment :184 amber run, and other books that price material on the hands.
- **Brief:** scratchpad/w449/brief.md, a copy of the W446 brief.
- **Authors:** four agents, one file each.

## What changed (voiced)

### rules_primer
- **:15:** now adds "and by your league's own regulations". This matches the W447 headers.
- **:57:** now reads "Where it reads only "As IIHF", the IIHF cell is your rule unamended. Where a cell adds an exception — an In-House amendment, or your league's Rules of Competition, as for icing and offside at U12 — the exception is your rule."
  - HEAD's "the In-House Rules make no amendment and the IIHF cell is your rule" contradicted the table's own icing and tag-up cells, which carry the U12 exceptions from Junior RoC Appendix D.
  - It was also literally false for the High-sticking cell, which carries In-House 60.3.
- **:1093:** now reads "a cell reading only that is the IIHF rule unamended. Read anything a cell adds, marked **Amended** or not, as part of your rule."
  - HEAD's "Only cells marked Amended are British departures" was false: High-sticking (60.3) and the ejection cell (9.12) amend without the mark.
  - A first repair said "is a British departure". The rules confirmation read found the ejection cell also adds IIHF material (201.1, 22.1), so the label was dropped.

### body_contact_and_battles
- **:1989:** "still faces the IIHF on the night: 70.4's minor plus game misconduct out of the box, or 70.3 and 70.6's game misconduct if first or second off the players' bench". HEAD cited only 70.4, which is the box clause.
- **Facts :1970:** now uses safety's text. "NHL and IIHF 70.3 and 70.6 write "first or second player to leave" for either bench, but 70.4 catches every player out of the penalty box, so the limit matters only off the players' bench; USA Hockey 629(a)…".
  - HEAD called it the players'-bench tier.
  - The first repair read as self-contradictory when heard alone.
- **:1985:** now reads "off either bench".

### switching_positions
EIHL Casebook 9.12 says "This requirement also applies during warm-ups and practice sessions". The file's own Sources trailer already quoted that sentence.
- **:368:** now reads "covering practice too". It ends "Outside the Elite League, whether that reaches Scottish and Northern Irish hockey is unsettled, so wear it at practice anyway" (safety's text). The bullet is 1,196 characters.
- **Facts :353 and CM :613:** scoped to match.

### equipment
- **:184, the jewellery bullet:**
  - The amber is re-bound off the book list and onto "⚠️ **A referee may still call a loose ring or stud dangerous equipment.**", which closes the bullet.
  - The bullet now says "the NHL (46.15), PWHL (46.14), USA Hockey (305(b)) and IIHF (46.5; 46.13 from 2026/27) penalise "tape or any other material" on the hands that cuts or injures in an altercation — perhaps a ring".
    - NHL, PWHL and USA Hockey give a match penalty. The IIHF gives a major plus an automatic game misconduct, which corrects the coordinator's brief.
    - The rules review added USA Hockey: 305(c) exempts adults from the jewellery ban, so 305(b) is the only rule that reaches an adult USA Hockey player wearing a ring.
  - The bullet now reads "write no jewellery rule".
  - The Casebook paraphrase reads "clear tape securing an earring to the body".
  - The 305(c) quotation is cut to its verbatim operative fragments. The rules confirmation found it faithful.
  - "an absence of a ban, not a permission" was removed. Safety ruled that the closing amber referee clause still counter-weights the silence.
- **:109:** "in the Elite League the EIHL Casebook's Rule 9.12 covers 'warm-ups and practice sessions'. Elsewhere in Scotland and Northern Ireland, whether 24.3 reaches you is unsettled, so play as if it does."

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:**<br>• WRONG at equipment :184: USA Hockey 305(b) was missing.<br>• WRONG at rules_primer :1093: "only Amended", with a weaker form at :57.<br>• All else OK.<br>**Confirmation:**<br>• equipment :184 OK.<br>• :57 OK, including for Elite League readers: no "As IIHF"-only cell is touched by the Casebook.<br>• :1093 still mislabelled IIHF additions as British. That was fixed, and the final sentence was confirmed OK.<br>• Optional "wherever it names your competition" not applied, because most additions name no competition. |
| safety-reviewer | **First read:** no Critical or Major. Two Minors (bcb facts :1970, switching :368 "other") were applied with safety's text, and the optional "write no jewellery rule" was applied too. Silence-as-permission at :184 was ruled not heard.<br>**Confirmation:** CLEAR. "Important." counts equal HEAD on all four files. |
| site-reviewer | Four pages at 400×812 DPR 2 in light and dark, and at 1440 light, on the 11:39:42 build. Every worst window unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. The jewellery run is a single glyph-led warn-inline with the citations outside it. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text or an author's minimum-words repair confirmed by a reviewer:
- rules_primer :1093, "as part of your rule";
- the 305(c) fragments;
- switching's "because it varies" trim.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 11:39:42; the newest content file is rules_primer.md at 11:39:02.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** check_callout_flow --bare reports 0. `--panels --file` reports 0 on all four files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IIHF v1.1 and 2026/27 46.5/46.13, 65.1, 70.3/70.4/70.5/70.6, 201.1, 22.1; NHL 9.8, 46.15, 70.3/70.4/70.6; PWHL 9.8, 46.14; USAH 304, 305(b)/(c), 629(a), Casebook 305 Sits 3–4; HC 7.10(c); CARHA 2026 59(a) Note 1; EIHL Casebook 9.5, 9.12, every rule heading; In-House 9.12, 60.3, 101; EIH R&R 24.3; Junior RoC Appendix D; NIHL RoC precedence |
| D2 Exceptions | 305(c) adult exemption; U12 Appendix D |
| D3 Cross-book divergence | the tape-on-hands tariff (match vs 5 + GM); bench tiers |
| D4 Citation integrity | 70.4 vs 70.3/70.6; "USAH 304" was a mis-number for 305(b) |
| D5 Provenance | not engaged |
| D6 Negative existence | "write no jewellery rule" swept (jewel, earring, piercing) across every book; the act (tape or material on hands) swept, which found USAH 305(b) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | switching facts, body and CM together; the bcb facts/body pair |
| D10 Key-facts | bcb :1970 and switching :353 voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | antecedents at switching :368 and equipment "write no jewellery rule" |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed
- **Rules review:**
  - The EIHL Casebook numbers Rule 46 on the 2025/26 scheme, so its "46.13" is Jerseys. 2026/27's 46.13 is the dangerous punch. A note on this belongs in uk_rules.
  - bcb facts :1970 could cite "(70.4, 70.6)", because 70.6's last paragraph catches live-play leavers.
  - Whether In-House 101's women's every-major ejection departs from the IIHF.
- **Coordinator check:** uk_rules :168 already excepts the Elite League from the unsettled practice reach.
- **Site:** bcb :1989's amber run is 254 characters. It predates this wave.

## What this method could not have found
- Other documents that describe the rule-set table with "As IIHF means no amendment".
- Medical hazards from rings.
- Officiating practice on EIHL "to join".
- Real synthesised audio.
