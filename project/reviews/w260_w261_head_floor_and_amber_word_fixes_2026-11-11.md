# W260–W261: head-hit floor named in the last silent lines, and amber moved onto mandatory tiers by small word changes (11 November 2026)

**Files:**
- **W260:** content/hockey-iq/playing_without_the_puck.md, content/positions/defender.md, content/systems/defensive_zone_coverage.md, content/foundation/rules_primer.md
- **W261:** content/technique/shooting.md, content/systems/zone_entries.md, content/systems/offensive_zone_play.md, content/systems/faceoffs.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
Open items from three plan rows:
- the "Harsher of" wave row, items (1) and (2): facts lines and a table cell that gave a Hockey Canada "off the head" carve-out and named no floor for a head hit;
- the W245–W248 row, item (1): three paragraphs where the amber sat on a discretionary tier over a plain mandatory one;
- the W249–W252 row, item (6): the faceoffs kick sentence, where the amber split the subject from the verb.

All of these needed word changes, which the marker-only passes could not make.

## What changed
**W260: head floor.** Each line was made to fit by substitution, without dropping a caveat.
- **playing_without_the_puck facts :818 (299/300):** "no book prices checking from behind at a bare minor, and four books eject every call (Hockey Canada, head hit: plan on it; a match if defenceless)". The review corrected the author's "prices it", which was false under Hockey Canada because a head hit is head contact and can be a minor.
- **defender facts :811 (300/300):** "…ejecting if reckless or they go head first into boards or frame; CARHA 53(a), Hockey Canada 7.5 a game misconduct (on the head, plan on it)". The review restored the subject "they go", so a listener cannot hear the checker going in head first.
- **defensive_zone_coverage Never :476 (197/200):** "(Hockey Canada, head hit: plan on at least a game misconduct)".
- **rules_primer :1064:** a table cell gained the head-contact note. The speech renderer drops this table, so it shows on the page only.

**W261: small word changes.**
- **shooting, "Contact with a goalie" P3.** The amber now sits on "Some books make it mandatory: Hockey Canada for any charge on a goalie, and USA Hockey for a reckless charge (8.5(b); 607(b))". The discretionary "can reach a major plus a game misconduct in every book" is now plain prose.
- **zone_entries, "Contact with the goalie" P3.** The amber now covers "A charge is an automatic major and game misconduct under Hockey Canada wherever the goalie is, under CARHA in the crease or if it injures them, and under USA Hockey if it is reckless (8.5(b); 52(b); 607(b))". The subject "A charge" is the review's fix: with "It", the sentence could bind to "deliberate contact", which under 8.5(b) is a discretionary major. No limb was dropped. 602(a) stays on the reckless case, and the 607(a)/(c)/(d) floor moved to the end unchanged.
- **offensive_zone_play, "A late hit" P1.** The amber now sits on "a match penalty is mandatory if you meant to injure (21.1)".
- **faceoffs :1191.** The line now opens "**Never kick at anyone — a miss costs the same.** ⚠️ **Kicking or attempting to kick an opponent is a match penalty** under…". One amber run covers the price, and the glyph is mid-paragraph, so no panel forms. "A miss costs the same" is true in every book named: NHL and PWHL 49.3, IIHF 49.3, USA Hockey 627(b), Hockey Canada 7.1(c)(iii) and CARHA 48(c) each price an attempt as a kick.
- **zone_entries facts :239 (300/300) and :833.** "(Hockey Canada, head hit: plan on ejection; a match if defenceless)". "Ejection" replaced "it" on the review's optional wording.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×2 | Verified every mandatory/discretionary reading in flattened sources before editing (Hockey Canada 7.1, 7.4–7.6, 8.3, 8.5; USA Hockey 602, 607, 627; NHL/PWHL 21.1, 42.5, 49.3; IIHF 49.3; CARHA 48, 52, 53). Checks pass; 0 LOST; 0 panels. |
| safety-reviewer, rules and safety (W260) | Nothing blocking. WORDING: :818 "prices it" was too strong, and :811 had lost its subject; both were applied verbatim. :476 and :1064 are CORRECT. |
| safety-reviewer, rules and safety (W261) | Nothing blocking. Items 1, 3 and 4 are CORRECT (all quoted from source). WORDING: the zone_entries pronoun ("It" → "A charge"), and optionally "plan on ejection". Both were applied verbatim. |

### C11
The authors wrote every change. The coordinator applied four reviewer wordings verbatim (:818, :811, "A charge", "plan on ejection") and wrote the plan row and this record.

### Checks after the last content edit
- check_facts exit 0 (no pipe). Several lines sit at 300/300.
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs: 0 LOST on all eight files.
- Full `npm run build` (absolute binary) after the final edit. `--bare` and `--panels` are 0 on every changed page, dist has no literal `**`, and the faceoffs kick line renders inline.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | the rules listed above, quoted from source |
| D5–D8 | not engaged |
| D9 Summary layer | not engaged (no CM or KT changed) |
| D10 Key-facts layer | five facts lines, each checked voiced alone; caps respected |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | renders read; per-paragraph "Important." intact |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus panel, bare-glyph and literal-`**` scans |

## What this method could not have found
- Other copies of these claims elsewhere in the documents that still put the amber on a discretionary tier (for example zone_entries :361, :811 and KT11; see the plan row).
- How the rules_primer table cell looks on the page. It was checked only in the build, not in a browser.
