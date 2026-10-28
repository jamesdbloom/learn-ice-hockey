# SG113: IIHF price on Defensive Zone Coverage, Hockey Canada intent-to-injure match, "above the shoulders" (28 October 2026)

**Files:**
- content/systems/defensive_zone_coverage.md
- content/systems/forechecking_systems.md
- content/positions/defender.md
- content/systems/offensive_zone_play.md
- project/plans/OPEN_ITEMS.md

## What changed and why
These items were carried over from the SG111 and SG112 reviews.

1. **IIHF price for a hit from behind that reaches the head** (dzc :207, :496, and the :515 body).
   - These lines gave "the harsher of Rules 43 and 48" for all three books with no price.
   - IIHF 43.3 needs reckless endangerment, and 48.2 is a minor. The lines now say: still no minor in the NHL and PWHL, and under the IIHF plan on the major and game misconduct (43.3, 48.3).
   - This stays inside the owner's 19 Oct "harsher of 43 and 48" ruling.
2. **Hockey Canada match: "if defenceless OR meant to injure"** (7.6(c), 7.7(c), and 7.5(c)'s second paragraph, which applies anywhere on the ice). Several units gave only the defenceless ground, and several said "up to a match", which made a mandatory match sound discretionary. Fixed at:
   - dzc :180, :181, :498, :515;
   - fcs :757–758 (split into two lines, so the intent match no longer reads as tied to the boards) and :767/:771;
   - defender :315 (the duplicate tail is now carried by :316), :316, :324, :863–:864 (split), :884, :902;
   - ozp :797/:799, :970, :1153.
3. **"A cross-check above the shoulders"** replaces "to the head (or neck)" at ozp :970 and fcs :771. This follows the 7.6(b)/7.7(b) text "above the normal height of their shoulders".
4. **Must-give-a-match list.** ozp :1153 and :797 now name the NHL, PWHL, Hockey Canada, CARHA and USA Hockey (21.1, 7.5(c), 48(a), 602(a)). The IIHF has no match penalty.
5. **Citation.** defender :863 now cites IIHF 43.2 for "no minor"; it said 43.1.
6. **Readability.**
   - dzc :515 and ozp :797 are split. Each new half keeps a spoken "Important.", with the glyph placed mid-paragraph so it renders inline rather than as a panel.
   - dzc now uses "meant to injure" throughout.
   - fcs :758 no longer has a dangling "also".

## Reviews
| Round | Dimension | Reviewer | Result |
|---|---|---|---|
| 1 | D1–D3 | rules-verifier | 5 of 6 CONFIRMED. The "up to a match" fix had not reached dzc :180, :498 or :515 (permissive). ozp :1153 lacked USA Hockey. defender :863's 43.1 should be 43.2. |
| 1 | D10, D9, D11 | facts-reviewer (with a safety pass) | fcs :757 Major: the intent match could be heard as tied to the boards. defender :315 and :863, and dzc :496, had traceability minors. |
| 2 | D1–D3 | rules-verifier | 12 of 13 CONFIRMED. ozp :797 lacked USA Hockey 602(a); the coordinator added it (see C11). |
| 2 | D10, D9, D11 | facts-reviewer | All 4 files SHIP. Two optional minors (dzc "anywhere"), applied by the coordinator. |
| 2 | D7, D9, D13, D14 | content-reviewer | No Critical or Major findings. Two paragraphs over length (dzc :515, ozp :797); fcs :758 "also"; the dzc IIHF clause; the dzc gloss; the duplicate tail on defender :315. All applied in round 3. |
| gate | D11 | safety-reviewer (on the staged bytes, after the first SG113 gate blocked on C6) | All 4 files SHIP. No act sounds cheaper; no qualifier licenses anything; dzc :515 halves both in chunk 032; the ozp :797 halves are in chunks 051/052, harmless; each new "Important." sits on the hazard clause. check_marker_pairs 0 LOST; --panels unchanged. Minors (harsh direction, accuracy only): dzc :180/:496 no longer signal that 7.6(a) can be a bare minor on the head; NHL 43.4 makes the CFB intent match discretionary while 21.1 says "shall". Both carried. |
| 3 | D10, D12 | facts-reviewer | All 4 files SHIP. Both new spoken "Important." markers justified; nothing lost at defender :315. Optional: move the ozp :799 amber off the rule-pricing clause (done; see C11). |

### C11
The coordinator made these edits after a review. Each is confined to a reviewer's finding and uses the reviewer's wording:
- ozp :797: added USA Hockey and 602(a) to the intent-match list (rules round 2).
- dzc :515: "and in both books a hit meant to injure is a match anywhere on the ice" (facts round 2).
- dzc :498: "anywhere on the head" became "on the head" (facts round 2).
- The content reviewer and the round-3 facts reviewer both read those three afterwards and accepted them. The commit gate re-derived both rule claims from primary text (hc.txt 7.5(c) para 2; usah.txt 602(a)), and the safety-reviewer read them on the staged bytes.
- ozp :799 (after round 3): moved the ⚠️ and its bold from "the NHL and the PWHL take the harsher of Rules 43 and 48" onto "a match if they could not protect themselves or you meant to injure them". No word changed. check_marker_pairs: 0 LOST. --panels: 1, unchanged.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier, rounds 1–2: hc.txt 7.5–7.7 and interpretations, 9.2; NHL/PWHL 21.1, 43, 48; IIHF 2026-27 43, 48; CARHA 48(a), 53; USAH 602(a) |
| D2 Rules travelling without exceptions | rules-verifier and facts-reviewer layer tests across all four files |
| D3 Rule-set divergence | rules-verifier: the IIHF's conditional 43.3 and its lack of a match penalty are now stated |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed (commit gate confirmed: C5, no citation added) |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope: no absence claim added or changed (content-reviewer confirmed) |
| D7 Cardinal rule | content-reviewer: no coaching choice stated as law |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | content-reviewer and facts-reviewer: every summary layer in the four files agrees with the bodies |
| D10 Key-facts layer | facts-reviewer, rounds 1–3 |
| D11 Reader safety | safety-reviewer on the staged bytes of all four files: SHIP. (facts-reviewer also ran safety passes in rounds 1–3) |
| D12 Read-aloud integrity | facts-reviewer rendered all four files in each round and read changed units voiced alone |
| D13 Folklore | content-reviewer: none added |
| D14 Structure, style, terminology, cross-links | content-reviewer: paragraph lengths (now under 1,200), one gloss per document, unit leads. check_links passes. |
| D15 Rendered site | The coordinator ran a full site build after the last content edit (exit 0). The commit gate confirmed in site/dist that both new amber runs form warn-inline spans and no panel was added. No site-reviewer ran. |

## Carried to the plan
- **SG114 (plan row):** "up to a match" for Hockey Canada head contact still stands outside these four files: goaltender :1273, :1651; bcb :685 (facts, no intent ground), :1613, :1829; rules_primer :472; winger :777. Found by `grep -rn "up to a match" content`. Each hit must be read, and the act also swept for without the phrase.
- dzc :180/:496 no longer signal that 7.6(a) can be a bare minor on the head (harsh direction).
- NHL 43.4 makes the CFB intent match discretionary while 21.1 says "shall"; the ozp list follows 21.1 (harsh direction).
- defender :903, a Common Mistake of 1,316 characters (predates this wave).
- The books named in the intent-match list differ across pages. Each list is correctly scoped.
- ozp facts :783/:784 name USA Hockey only for "reckless". They are at the cap.
- Ratio: dzc now restates the Rule 43 ladder four times (:182, :207, :496, :515). This is added to the SG75 cross-document ladder row.

## What this method could not have found
- A head-contact match stated without "match", "defenceless", "protect" or "injur".
- A sibling that states the Hockey Canada head-contact match without the phrase "up to a match" (the phrase-level sweep is carried as SG114).
- How the rendered inline amber looks. It is inferred from the source shape and the build, not from a browser.
