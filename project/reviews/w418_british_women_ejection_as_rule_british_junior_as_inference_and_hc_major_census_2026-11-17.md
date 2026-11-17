# W418: British women's ejection on a major is now stated as a rule, British junior ejection is consistently a scoped "plan on" inference, Rule 201's words are no longer overstated, and a census of Hockey Canada and CARHA majors (17 November 2026)

**Content files changed:**
- foundation/uk_rules.md
- technique/body_contact_and_battles.md
- hockey-iq/risk_management.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W417 (1), (2) and (3).
- **Brief:** scratchpad/w418/brief.md, with a W418 addendum (In-House 101 is mandatory; 201 is an inference; HC 4.4 and CARHA 30(a) apply in every division).
- **Agents:** three authors (A uk_rules, B bcb, C risk) and one read-only census of whether Hockey Canada and CARHA majors are presented as costing only five minutes.

## What changed (voiced)

### uk_rules
- **:302**
  - Now reads: "In women's hockey, the WNIHL included, any major ends your game anyway — In-House Rule 101 ejects on a major "in all cases"… The In-House fighting section never says whether its "NIHL (all leagues)" scope reaches a women's fixture, so in a women's game do not count on the unwilling combatant's five without a game misconduct."
  - Before: "plan on any major ending your game", pinned on the scope of Section 6.
- **:306**
  - Now reads: "In British junior hockey, plan on any major ending your game regardless."
  - Before: "In junior hockey any major adds a game misconduct regardless." That was unscoped, stated as a rule, and contradicted the disclosure at :377.
- **:375**: "⚠️ **Play every women's game expecting a major to end it** — no official British interpretation has been obtained, but the rule's words carry no age limit."
- **CM :517**: splits the women's rule from the British junior "plan on the same".
- **KT13 :644**: "**In British women's hockey, a major ends your game at every age, adult included. In British junior hockey, U19 down to U10, plan on the same** — this document's inference rather than the rule's words. Confirm with your league."

### body_contact_and_battles
- **:215**
  - Now reads: "**In British women's hockey, or an IIHF men's under-18 or under-20 game, do not count on even that**, because a major ejects you there (In-House Rule 101; IIHF 201.1); **in British junior hockey, plan on the same.**"
  - Before, it credited "In-House Rules 101 and 201" with the junior ejection.
- **Facts :145 (200/200)**: "In British junior hockey, U19 to U10, plan on a major ending the game — an inference: In-House Rule 201 applies "these rules" to all junior groups, naming neither the IIHF nor its junior ejection rule".
- **Facts :1908 (198)**: the same, for a fighting major.
- **:162 and :754**: "In-House Rule 201 says only that *"[t]hese rules apply to all junior age groups"*, naming neither the IIHF nor 201.1". Before, both said Rule 201 "applies the IIHF junior rules".
- **:756, :1929**: "in British junior hockey, plan on…".
- **CM :2067**
  - Now reads: "Any major ejects you under Hockey Canada and CARHA, in IIHF men's under-18 and under-20 games and in British women's hockey, and in the EIHL so does a boarding major that injures the head or face; in British junior hockey, plan on ejection too."
  - The first scoping fix narrowed the list to Britain only. That left HC, CARHA and IIHF-junior players hearing that their major was not on it.

### risk_management
- **:901**: "In British women's hockey a major ejects you; in British junior hockey, plan on ejection."

## Census (read-only) → plan
- **Main finding:** no unit says outright that a Hockey Canada or CARHA major costs only five minutes. The rule is stated at rules_primer :380 and :1095, and in the glossary at :326.
- **DEFECT, game_management CM :1288**: "every one can reach a major. USA Hockey makes a reckless one a mandatory major that throws you out". This implies a major is a step below ejection. KT14 :1353 is a judgement call on the same point.
- **About 14 JUDGEMENT rows** name an HC or CARHA major without the ejection:
  - winger :505 (300/300) and :703 (299)
  - faceoffs :1131 and :1140
  - scanning :372
  - center :747
  - defender :932
  - dtr :1005
  - glossary :450
  - goaltender :1304
- **Found:** CARHA 16(i) Note 1 lets the referee keep a team's only goalkeeper in the game. It is stated only in goaltender's Sources trailer.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** 9 of 11 OK. bcb :145 and :1908 WRONG: "applies the IIHF junior rules", but Rule 201 names neither the IIHF nor 201.1. Rule 101 is mandatory with no age limit; Rule 200 runs U19–U10. The Section 6 vs Rule 101 conflict is real if Section 6 reaches the WNIHL, so the conservative wording is right. The "British" narrowing is correct, because a first major in USA Hockey junior does not eject (403). **Confirmation:** :145, :1908, :162 and :754 OK. :2067 and :215 WRONG: IIHF 201.1 is men's junior only. Fixed by adding "men's". 201.1's "in any case" against the 2026/27 46.8 waiver is unsettled, so "do not count on" is right. |
| safety-reviewer | **First read:** no Critical. Major at bcb CM :2067: the narrowing to Britain dropped HC, CARHA and IIHF juniors. Minors: uk :375 ("that basis" landed on no hazard), uk :302 (Section 6 never introduced), KT13 (junior half lost its bold), bcb :145 and :1908 ("without naming 201.1" opaque). Optional: bcb :215 IIHF U18/U20. **Confirmation:** CLEAR. Nit: lowercase "these" in facts lines. |
| site-reviewer | Three pages at 400×812 DPR 2 light/dark and 1440 light, on the 15:07:58 build. Every worst window unchanged (uk 44.6, bcb 48.5, risk 43.8). uk :375 at 12.2, KT13 at 13.0. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text or an author correction confirmed by a reviewer:
- bcb :145 and :1908: rules and safety texts merged. "the game" fits the cap.
- bcb :162 and :754: the same claim, extended by the author.
- "men's": the rules reviewer's word.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 15:07:58, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all three files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | In-House 2026-27 100.1, 101, 200, 201 and Section 6; IIHF 101, 201.1 and 46.8/46.9 (both editions); HC 4.4, 7.2; CARHA 2026 16(i), 30(a); USAH 403; IHUK Junior, U10, WNIHL and NIHL RoCs |
| D2 Exceptions | 201.1 covers men's junior only; CARHA 30(a) high-stick exception; 16(i) only-goalie relief |
| D3 Cross-book divergence | HC and CARHA eject on any major; USAH junior does not on a first major |
| D4 Citation integrity | Rule 201's words quoted, no longer paraphrased as "applies the IIHF junior rules" |
| D5 Provenance | Inference labels kept at every junior site |
| D6 Negative existence | "names neither the IIHF nor 201.1" verified against the full Rule 201 text |
| D7 Cardinal rule | "plan on" kept for the inference; women's stated as a rule |
| D8 Numeric ownership | U19–U10 per Rule 200 |
| D9 Summary layer | CM and KT at uk_rules and bcb fixed alongside body and facts |
| D10 Key-facts | bcb :145 and :1908 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | "that basis", "Section 6" and "201.1" made speakable |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **game_management CM :1288 (DEFECT) and KT14 :1353:** a major is presented as a step below ejection. Under HC and CARHA, a late-hit major ejects.
2. **Census JUDGEMENT rows (HC/CARHA major named without the ejection):**
   - winger :505 (at 300/300) and :703
   - faceoffs :1131 and :1140
   - scanning :372
   - center :747
   - defender :932
   - dtr :1005
   - glossary :450
   - goaltender :1304
3. **CARHA 16(i) Note 1 (only-goalie relief)** is voiced nowhere. The census also found "the only exception" claims are not true of CARHA.
4. **IHUK RoC nuances, both in the harsher direction:**
   - U12: "majors must be served fully".
   - U10: records no penalties.
5. **"these rules" quotation:** in facts lines bcb :145 (at 200/200) and :1908, the lowercase "these" is not marked as changed from the source's capital.
6. **Optional:** a CM :2067-style HC/CARHA/IIHF limb at other "British-only" ejection lists in the corpus.

## What this method could not have found
- An IHUK interpretation of Rule 201 or of Section 6's scope. No bulletins are on disk.
- Junior or major claims worded without the census terms.
- Real synthesised audio.
