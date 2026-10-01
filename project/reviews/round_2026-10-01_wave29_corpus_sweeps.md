# Wave 29 — two corpus-wide sweeps, and the owner's rules_primer Key focus ruling (1 October 2026)

**Scope.** Nine file-disjoint lanes swept the 30 documents waves 26–28 had not covered for two shapes:
1. **Above-shoulder stick contact priced as a closed price** ("a minor", "a double minor") where a book goes higher.
2. **A women's-hockey contact permission without the WNIHL limb.** IIHF 101.1 or PWHL 52.1 was stated, but IHUK's WNIHL Rules of Competition, *"Full ice, non-checking"* at U16 and senior (`ihuk_wnihl_roc.txt:152-153`), were missing.

Twenty-one of the 30 had no site or were already correct. Edits were made in 9 documents and in 4 diagram captions:
- language_and_glossary
- rink_map
- uk_rules
- playing_without_the_puck
- defender
- winger
- defensive_zone_coverage
- game_management
- offensive_zone_play
- the captions `site/src/diagrams/forechecking_systems.mjs` (forecheck-122, -131, -press, -pinch), which are spoken into forechecking_systems, how_to_watch_hockey and game_management.

rules_primer carries only the owner's ruling below. It was held out of the sweep and remains the one document left for both rows.

**The owner's ruling.** On the rules_primer Key focus (:26), the owner chose "Add 'at least'" (1 October 2026). The first wording, "at least two minutes", put the floor on the *time*. USA Hockey 402 pro-rates youth minors to 1:00 and 1:30, and the same document says so at :92, so a `safety-reviewer` blocked it. The line now reads *"each of them costs you at least a minor — two minutes a skater short (NHL Rule 16.1)"*, which keeps the owner's intent of removing the cap and is true in every book. It was re-read and CLEAR.

**Method.**
- One author per lane, with each site treated as a hypothesis.
- Four independent `safety-reviewer` batch reads.
- Every blocked unit went back to its author and was re-read.
- A `site-reviewer` checked the 10 pages and 2 caption hosts on the final build.

## What was wrong, in kind

- **High-stick floors stated as ceilings.**
  - uk_rules :134 stopped at the double minor. IIHF 60.4's reckless major plus game misconduct is now added.
  - The glossary's "Answering 'Screen!'" Common Mistake raised the price only for HC, CARHA and USAH. IIHF 60.4 and NHL 60.4 / PWHL 61.4 match penalties are now added.
  - defensive_zone_coverage gave the NHL 60.3 double minor as the whole price at five sites. It now carries "at least" and the per-book ladder, with:
    - HC 7.6(b)'s mandatory injury limb in minor and female hockey;
    - the match penalties at USAH 620(c)/621(c), CARHA 62(c) and HC 7.6(c)/7.7(c);
    - CARHA's 62(b) Note game misconduct "if it was deliberate or injures".
  - KT11 was then compressed to one clause for readability: *"a swing that catches someone high is a penalty, and one that hurts them can get you ejected in every book here."*
- **WNIHL limb missing.** British women's readers heard the IIHF 101.1 permission without the WNIHL ban in:
  - winger Common Mistakes;
  - defender :420 (PWHL 52.1 angling);
  - rink_map body and KT14;
  - game_management facts, body, Common Mistakes and trailer;
  - offensive_zone_play facts, §10, Technique :884, Common Mistakes, KT10 and trailer;
  - playing_without_the_puck facts and KT3;
  - the four forechecking captions, which wave 28's markdown repair had not reached.
- **Repairs that created new defects, caught by the reads.**
  - offensive_zone_play facts :859 rewrote "any step or glide into an opponent" as "into her", where "her" pointed back at the checker. Restored.
  - winger :689's new WNIHL lead made the following "the same limit" equate WNIHL non-checking with 101.1's limited permission. Now "looser than that, though still limited".
  - defensive_zone_coverage's ladder opened "the floor, not the top", and three of its book entries understated their tops. KT11 also said USA Hockey "can" where its rule says "shall".

## Coordinator errors this wave

- **The rules_primer "at least two minutes" wording was mine,** written to apply the owner's choice. It was blocked, and the reviewer's floor-on-penalty wording replaced it.
- **My KT11 sketch was false.** "At least a double minor" is wrong in HC Junior/Senior, where 9.5(a) is a minor with the double minor discretionary, and in USAH, which has no double-minor tier. The author caught it before writing.

Counted from the wave 27–29 records, at least five defects reached a file from coordinator wording: wave 27, game_management "every other book"; wave 28, body_contact "CARHA writes no double minor", the five-book "minor or double minor" list, and special_teams "late in a game, do not fight"; wave 29, rules_primer "at least two minutes". The KT11 sketch was caught before it was written. **Briefs should state constraints and let the author write.**

## Rendered site (D15)

A `site-reviewer` served the 11:29 clean build (exit 0; last content edit 11:24, plan and diagrams.json 11:27) over headless Chrome via CDP. It covered 12 pages, the 10 changed plus 2 caption hosts, at 400 and 1440 wide in light and dark: 48 loads.
- All 54 added-text keys matched source counts. One `Rule:` label key renders as `<dt>`, and its value matched.
- 0 `aside.callout-warning`; 0 glyphs outside `warn-inline`.
- The three new amber runs land on instructions.
- The changed facts lines render as `dd.facts__value`.
- All four captions show the WNIHL clause inside their amber run.
- No overflow, no residue, no console errors, no 4xx.

Not reached: phone, other browsers, screen reader, and the SVG `<desc>` text.

## Dimension coverage

| Dim | Name | Covered | By | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `safety-reviewer` ×4 batches plus re-reads (ozp, DZC final, DZC KT11, rules_primer ×2) | NHL/IIHF 60.1–60.4, PWHL 61.1–61.4, 16.1; IIHF 101.1, 48.3; PWHL 52.1; USAH 402, 620, 621, Casebook 621 Sit. 1; HC 6.9(c), 7.6, 7.7, 9.5 and its list; CARHA 54(b), 62(b) with its Note, 62(c); IHUK WNIHL RoC. |
| D2 | Exceptions | Yes | same | CARHA accidental high stick without a GM unless injury; HC 9.5 double minor discretionary; USAH 402 pro-rated minors. |
| D3 | Rule-set divergence | Yes | same | Each new limb read for what an unnamed book's reader hears. |
| D4 | Citation integrity | Yes | readers | 101.1 and 52.1 quotations verified. |
| D5 | Provenance | Yes (no new source) | coordinator | The WNIHL RoC URL was added to trailers (winger, game_management, offensive_zone_play); already cited in 11 content documents at HEAD (`git grep -l` on HEAD). |
| D6 | Negative existence claims | Yes | readers | "IIHF writes no match penalty"; "USAH has no double-minor tier". |
| D7 | Cardinal rule | Partly | readers | "Plan no hit at all" is read as an instruction under a competition rule. |
| D8 | Numeric ownership / restatement | Partly | readers | **Otherwise declared out of scope.** |
| D9 | Summary layer | Yes | readers | KT3, KT10, KT11, KT14 and rules_primer KF voiced alone; KT11 compressed. |
| D10 | Key-facts layer | Yes | readers, `check_facts` | Several lines at 293–300/300, edited by substitution. |
| D11 | Reader safety | Yes | a reader on every lane and every repair | |
| D12 | Read-aloud integrity | Yes | every author and reader rendered `md_to_speech` | 0 lost markers. |
| D13 | Folklore | No | | **Declared out of scope.** |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | The glossary CM, winger CM and DZC :133/:618 units are 1,900–2,700 spoken characters (rows). **Otherwise declared out of scope.** |
| D15 | Rendered site | Yes | `site-reviewer` | See above. |

## Gates

All run on the final tree:
- `check_links` 0, `check_facts` 0, `check_absolutes` 0 (after build-diagrams), `check_geometry` 0, `check_secrets` 0.
- `check_marker_pairs`: 0 lost on every changed file.
- `check_callout_flow --panels` 0, `--bare` 0.
- Clean build 11:29, exit 0.

## What this method could not have found

- Sweeps were lexical on the act. A price phrased without the search terms would pass ("a stick in the visor", "a hit on a woman" with no 101.1 or women term).
- Whether the WNIHL's "non-checking" label also withdraws 101.1's push-and-lean in a puck race. The RoC never defines it, so the corpus says "do not hit / do not body check", not "no contact".
- rules_primer is not yet swept for either row.

## Plan rows closed by this wave (verbatim from OPEN_ITEMS.md)

- [rules_primer KF :26] "each of them is two minutes a skater short (NHL 16.1)" — owner call on whether a bare-minor framing in the Key focus needs scope (readability)
  - Evidence: owner ruled 1 Oct 2026 ("Add 'at least'"); rules_primer :26 now "each of them costs you at least a minor — two minutes a skater short (NHL Rule 16.1)"; the first wording ("at least two minutes") conflicted with USAH 402 pro-rated youth minors (:92) and was moved onto the penalty tier; safety-reviewer re-read CLEAR.

The two corpus-wide rows remain open with a W29 note; only rules_primer is left. New rows cover:
- winger CM :689 length
- puck_handling CARHA 79 tier
- the ozp CARHA 62(c) match
- ozp "Britain publishes no age"
- the DZC :37 USAH 620-vs-621 citation
- the winger :689 British scope
