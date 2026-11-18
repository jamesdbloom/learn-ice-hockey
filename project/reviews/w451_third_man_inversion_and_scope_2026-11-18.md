# W451: the 2025/26 third-man rule is no longer stated backwards, a British third man is told the 2026/27 waiver's conditions, and two small antecedents are fixed (18 November 2026)

**Content files changed:**
- foundation/uk_rules.md
- foundation/rules_primer.md
- technique/body_contact_and_battles.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W450 (1), (2), (3) and (4).
- **Census:** a read-only rules-verifier pass for **the act** of a third player joining or breaking up a fight. It ran across every content file and all 204 diagram captions, and quoted every book, including the NHL, PWHL, IIHF v1.1 and 2026/27, USAH, HC, CARHA, the EIHL Casebook, the In-House Rules and the Rules of Competition. It found:
  - no site telling a reader that going in avoids a penalty;
  - **one permissive DEFECT** (bcb :1928);
  - **one AMBIGUOUS-permissive** site (uk_rules :308);
  - several harsh overstatements, filed below.
- **Brief:** scratchpad/w451/brief.md.
- **Authors:** two agents, then follow-ups to the uk_rules author and the bcb author.

## What changed (voiced)
- **bcb :1928:** "The 2025/26 book **imposes** the third-man game misconduct *"except when a game misconduct penalty is being imposed in the original altercation"* (46.7)."
  - HEAD said "**waives** … except when", which inverts v1.1 46.7.
  - Read literally, it told an NIHL, SNL or BUIHA reader (In-House Section 6: a fight is a 5-minute major) that the third man escapes whenever the original fight carries no game misconduct.
- **bcb :1925:** "is **no reliable** defence in any of the six books". HEAD said "not a defence", which overstated: 2026/27 46.14 has a conditional, discretionary waiver.
- **uk_rules :308:** "…unless one is already imposed in the original altercation — but the 2026/27 book (46.14) can waive it only where an aggressor is penalised and you came in to stop a fight with an unwilling combatant, so plan on it." HEAD gave only the v1.1 exception, against the document's own instruction (:60) to play to the stricter edition.
- **uk_rules :207:** "**The Elite League's** Casebook is updated during the season". It follows a sentence telling EIH and SIHA players they have no Casebook.
- **uk_rules :401** ("clearest softening"): **unchanged, after checking**. The In-House unwilling-combatant clause restates v1.1 46.6, the edition the In-House Rules name, so it is no softening. The EIHL Casebook 46.1 is a softening.
- **rules_primer :510:** now reads "the Situation Handbook (46.15) gives the same major and game misconduct with none named" (safety's optional point from W450). To fit, "the rec-hockey glove punch at somebody" became "a glove punch at someone", and the citation order changed.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **Census:** as above. **Review:** all five changed sites OK. 46.7 is quoted verbatim (v1.1 :4164-4167), as are 46.14 (2026/27 :4308-4314), the EIHL Casebook Preamble update clause, and NHL 46.16 / PWHL 46.15. |
| safety-reviewer | CLEAR. None of the changes is cheaper than HEAD, and :308 and :1928 are stricter. "Important." counts equal HEAD. The bcb :1925 key change is a reworded opening, still marked. |
| site-reviewer | Three pages at 400×812 DPR 2 light/dark and 1440 light, on the 12:07:30 build. Worst windows unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. The :1925 run is glyph-led warn-inline, with the citation outside it. |

### C11
The coordinator wrote no content. Two authors departed from the briefed sketches:
- **uk_rules :308:** "can waive" instead of "waives", because the waiver is discretionary.
- **uk_rules :308:** the book's own "unwilling combatant" instead of "being beaten".

Both reviewers confirmed both departures.

The coordinator grepped the five documents that discuss the third man for "waive" near 46.7 or "except when". No other inversion is present.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 12:07:30; the newest content file is body_contact_and_battles.md at 12:05:34.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0. `--panels --file` reports 0 on all three files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IIHF v1.1 46.6/46.7, 2026/27 46.13/46.14, Situations 46.11/46.15/46.16; NHL 46.5/46.7/46.16; PWHL 46.7/46.15; USAH 615(d), 404(b), Casebook 615 Sits 6/21/22/24; HC 7.10(e)(ii)/(f), Interpretations 6/8, 4.8(c); CARHA 37(d), 59(b); EIHL Casebook Preamble, 46.1, 46.2; In-House Section 6 |
| D2 Exceptions | 46.7 named exemption; 46.14 conditional waiver; NHL/PWHL match-penalty exemption |
| D3 Cross-book divergence | third-man treatment in all six books |
| D4 Citation integrity | 46.7 verb inversion corrected |
| D5 Provenance | not engaged |
| D6 Negative existence | the Casebook has no third-man entry (searched); the Rules of Competition have none |
| D7 Cardinal rule | "plan on it" where the edition is unclear |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | census covered CM and KT in bcb, goaltender, team_play |
| D10 Key-facts | bcb :1900/:1904/:1910/:1911, goaltender :1170 and others voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | :308's qualifier in the same sentence (chunk 024) |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (harsh direction or unverified)
- **"Every book" overstated:** goaltender :1170, :1188, :1695 and KT10 say joining a fight "ejects you in every book". NHL, PWHL and EIHL 46.7 / Casebook 46.2 can be waived where the opponent clearly instigated.
- **"No rule set here … is free":** bcb :1926 says this. The author ruled it defensible.
- **"Three price the peacemaker by name":** bcb :1925 says this, but USA Hockey 615(d) says "first to intervene". Unverified.
- **USA Hockey teammate carve-out:** the Casebook 615 Situation 6 carve-out (a teammate breaking up two teammates) is not mentioned anywhere.
- **Renderer:** a bare "46.15" is voiced "point one five" while "Rule 46.13" is voiced "point thirteen". This joins the 46.10 renderer row.

## What this method could not have found
- A "going in is safe" claim worded without fight or altercation vocabulary.
- Diagram describe strings in the .mjs modules.
- Officiating practice on v1.1 46.7's exemption in NIHL games.
- Real synthesised audio.
