# W236: USA Hockey 608(c)'s mandatory match joins every closed "must give a match" list (10 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/hockey-iq/playing_without_the_puck.md, risk_management.md
- content/positions/switching_positions.md, winger.md
- content/systems/defending_the_rush.md, defensive_zone_coverage.md, forechecking_systems.md, zone_entries.md
- content/technique/shooting.md
- site/src/diagrams/defensive_zone_coverage.mjs (one caption)
- site/src/data/diagrams.json (rebuilt)
- project/plans/OPEN_ITEMS.md
- this record

## Source
W235 found the claim on special_teams: a closed list naming only Hockey Canada and CARHA as the books that MUST give a match for a hit from behind on a defenceless player. USA Hockey 608(c) (usah.txt:3728) also reads: "A match penalty shall be assessed for checking from behind in all instances when a player recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable or defenseless position." Casebook 608 Situation 1 says the same: "must be assessed". Every closed list therefore understated a mandatory ejection for USA Hockey readers.

A read-only rules-verifier swept every document, every layer and the diagram captions. It found:
- about 23 sites that omit 608(c);
- 7 facts lines already covered by a sibling 608(c) line;
- about 50 sites that are OK because they are open lists, already state the USA Hockey match, or are scoped to Hockey Canada and CARHA.

## What changed
- **Three authors on disjoint files.** They applied the sweep's sketches. Every addition carries 608(c)'s own condition: reckless, excessive force, and a vulnerable or defenceless opponent. None says a bare "USA Hockey too". 608(c) is narrower than Hockey Canada and CARHA in its conditions and wider in having no location limit, so additions say "boards or not" where that applies.
- **Lists the sweep missed.** The authors found and fixed about ten more closed lists:
  - defending_the_rush :941
  - defensive_zone_coverage Common Mistakes :858
  - zone_entries :253, :815, :852 and :1162
  - risk_management :855
  - switching_positions :298
  - shooting :575
- **Facts lines.** Facts lines that fit took the addition inline: risk_management :842, winger :511 and zone_entries :786. Lines at their cap got a new sibling line instead: "Rule: USA Hockey 608(c) must give a match for a hit from behind that recklessly endangers a vulnerable or defenceless opponent with excessive force — boards or not, goalie or skater". Two blocks already at HARD_MAX had a line rewritten instead: switching_positions :258 and shooting :537.
- **Caption.** The coordinator edited the defensive_zone_coverage caption to add "and under USA Hockey if it is reckless, with excessive force", then rebuilt the diagrams. diagrams.json changed only for that caption, and check_absolutes passed after the rebuild.
- **Fixes from review:**
  - **defending_the_rush :941** (rules FIX, pre-existing): "under USA Hockey so is a reckless one [a match]" overstated the penalty. 608(b) and the Casebook make a reckless hit from behind "a major plus game misconduct, or a match", with a certain match only under 608(c). It also contradicted the new 608(c) clause in the same paragraph. It now reads "for a reckless one, plan on the match and a likely multi-game suspension (602(a))".
  - **winger :511** (safety RECOMMENDED): dropping "at least" let the 608(b) tier sound like the ceiling while the body and Common Mistakes kept it. "At least" is restored, in the reviewer's wording.
  - **switching_positions :258** (safety RECOMMENDED): the Hockey Canada and IIHF parenthetical had moved after the USA Hockey clause and sounded as if it qualified USA Hockey's floor. It was reordered, in the reviewer's wording.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (read-only sweep) | About 23 OMITS-608c sites, with exact substrings and character counts; facts lines classed as inline, add-a-line, or already covered. Noted the Casebook 608 Sit. 1 half-reading (plan row). |
| authoring agents ×3 | Applied in all 11 files and found about ten more closed lists. Blocks kept within MAX_COACHING_FACTS and HARD_MAX. |
| rules-verifier (the additions) | Every 608(c) clause CORRECT; "boards or not", "goalie or skater" and "wherever it lands" CORRECT. FIX: defending_the_rush :941. The rewritten facts lines and the "plan on a match (602(a))" lists left unedited are adequate. zone_entries KT4 is correct. 602(a) and 608(b) pull against each other, so "plan on a match" is the most accurate summary. |
| safety-reviewer (rendered all ten stems) | Nothing blocking. Every condition is kept in its unit, no permission is created, and every ⚠️ sits before a bold run. RECOMMENDED: winger :511 "at least" and the switching :258 order, both applied. NOTE: USA Hockey's own summary lists 608(c) as a "Match Penalty Option" (plan row). |

### C11
The authors wrote the additions. The coordinator wrote the caption clause, applied the three reviewer fixes verbatim (one from the rules-verifier, two from the safety-reviewer), and wrote the plan row and this record.

### Checks after the last content edit
- check_facts exit 0 (no pipe).
- check_links --quiet exit 0.
- check_absolutes exit 0, after build-diagrams.
- check_marker_pairs: 0 LOST on the ten content files.
- Full `npm run build` (absolute binary) exit 0 after the final edit.
- check_callout_flow --bare 0.

No site-reviewer ran. These are clause additions inside existing units plus new facts lines, with no structure, marker or bold changes. The build and the bare-glyph check cover the rendering.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | USA Hockey 602(a), 608(a)–(c), Casebook 602 and 608 Situations, the Glossary, and the suspension table |
| D5 Provenance | not engaged |
| D6 Negatives | "no remaining closed list without a USA Hockey price", swept twice (rules and safety) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | rules_primer KT7 corrected; Common Mistakes corrected in winger, defensive_zone_coverage and zone_entries |
| D10 Key-facts layer | three inline additions, new sibling lines in seven blocks, two rewrites at HARD_MAX; each checked standing alone |
| D11 Reader safety | safety-reviewer, rendered |
| D12 Read-aloud | ten stems rendered; every condition is in the same unit as its claim |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build |
| D15 Rendered site | build plus bare-glyph check |

## What this method could not have found
- A closed list worded without "53(b)", "7.5(c)", "Hockey Canada and CARHA" or "from behind".
- Whether any USA Hockey bulletin settles the tension between 602(a) and 608(b), or between the summary's "Match Penalty Option" and the rule text's "shall".
- Real phones and screen readers. The narration audio lags until it is rebuilt.
