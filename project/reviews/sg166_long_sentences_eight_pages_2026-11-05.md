# SG166: the longest sentences on eight dense pages split for listening, with every book and condition kept, and four rule lines that read cheaper corrected (4–5 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/foundation/rules_primer.md
- content/systems/offensive_zone_play.md
- content/positions/center.md
- content/systems/breakouts.md
- content/systems/defending_the_rush.md
- content/systems/game_management.md
- content/positions/defender.md
- project/plans/OPEN_ITEMS.md (SG166–SG168 closures and follow-ups)

## Source
On 4 November the owner chose "Readability first" for the loop, then "keep working on all items of the plan". This wave covers the eight pages with the longest sentences (74–113 words). Owner rules applied: shorter is better; readable beats defendable; tactics first.

## What changed
- **Sentences split at natural boundaries** (a semicolon, dash or colon became a full stop) and some tariff-first units reordered. No rule substance, facts line, heading or marker position changed.

| Page | Longest sentence (words) | Mean sentence length |
|---|---|---|
| body_contact_and_battles | 113 → 65 | 23.0 → 22.5 |
| rules_primer | 104 → 60 | 23.8 → 22.8 |
| offensive_zone_play | 99 → 54 | |
| center | 85 → 59 | |
| breakouts | 78 → 56 | |
| defending_the_rush | 77 → 60 | |
| game_management | 77 → 60 | |
| defender | 74 → 62 | |

  defender's one paragraph over 1,200 characters was split.
- **Where a split-off sentence would have lost its book, the scope was re-attached:**
  - "Under USA Hockey" (game_management :935, rules_primer :510 and :1137)
  - "Under Hockey Canada" (ozp :970, game_management :937)
  - "Under CARHA" (body_contact :2005)
  - "Under those two books" (rules_primer :1135)
  - "Even in those leagues" (rules_primer :378)
  - "There" (defender :302)
- **Rule lines that read cheaper, found by review and corrected:**
  - rules_primer :780: the split tied the Casebook 607 Situation 5 possession limit and "avoidable contact… must also be penalized" to checking games only. It now reads "Outside that area, in any game, you may…". The repair's first wording lost "outside the privileged area" and was caught by the re-check.
  - rules_primer :1137 (pre-existing): USA Hockey firing the puck out "can be a misconduct". 601(c)(10) says "shall be assessed". It now reads "assume firing it out is a misconduct (601(c)(10))", consistent with the page's own :555, which records that the book does not say whether 610(c)'s minor or 601(c)(10)'s misconduct governs.
  - rules_primer :394 (pre-existing): the USA Hockey Standardized Discipline Policy's Level 1 (6–10 games) also lists 305(b), taped hands that cut or injure in an altercation. It is now named.
  - game_management :937 (pre-existing): Hockey Canada 7.6(b) was stated "if they are hurt" only. It is now "on the violence, … mandatory if they are hurt".
- **Lines that read harsher, also corrected:**
  - body_contact :1961: Casebook 615 Situation 15 needs the helmet to come off ("and it came off").
  - :743: 640(h) "adds a match for reckless endangerment".
  - ozp :796: 608(b) covers "any player" sent head first.
  - rules_primer :1135: "in the same face-off (76.7)".
- **Wording fixes:**
  - KT6 and :776 "ends your game"
  - the :1934 citation's punctuation
  - :2012 duplicate "Under USA Hockey"
  - center :507 duplicate
  - breakouts :921 "any of these minors"
  - rules_primer :582, which puts 63.6 back beside 67.4 and cites NHL 67.5 for the empty-net goal
- **defender :328:** the England/Wales one-game-ban sentence is now its own paragraph without a marker. The safety-reviewer ruled this acceptable. "Important." was spoken once at the paragraph start, about 1,000 characters earlier. The ban is voiced in the same chunk and in the facts line :317, and it adds a consequence, not a hazard.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (body_contact, rules_primer) | FIX cheaper: rules_primer :780. FIX false-harsher: body_contact :1961. Wording: :378. Pre-existing: 305(b) at :394. All fixed |
| rules-verifier (the other six) | No blocking finding. Scope fixes: game_management :935 and :937, ozp :970, defender :302 (all fixed). Pre-existing notes (CARHA 52(b) at game_management :347; the Casebook 639 shot-block exception) went to the plan |
| safety-reviewer (4 rendered with HEAD alongside) | All 8 SHIP. The defender split half is acceptable. Optional: body_contact :743 and ozp :796 (fixed). "Important." and chunk counts identical; 0 LOST |
| content-reviewer | No cheaper or false finding. Major scope drift at body_contact :2005; minors at ozp :970, rules_primer :1135/:1137/:582, breakouts :921, body_contact :1934/:2012/KT6/:630/:702, center :507. All fixed |
| rules-verifier, narrow re-check of all repair text, standing in for the safety direction | FIX cheaper: rules_primer :780 (repair lost "outside that area") and :1137 ("can be" vs "shall"). Tightenings: :1135, :582, game_management :937 7.6(b). All fixed. The stick-lift permission and its price now sit in adjacent chunks (distance 1, the permission carries its own warning): PASS |

### C11
- Four authoring agents made every edit, on disjoint file sets. The coordinator wrote only the plan and this record.
- The final edits are confined to the re-check's findings and made in the stricter direction. rules_primer :1137 uses "assume … is a misconduct" rather than the reviewer's flat "is": it is stricter than the old "can be" and consistent with the page's own disclosure at :555.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST in all eight files. The one SPLIT HALF candidate (defender) was ruled acceptable by the safety-reviewer.
- Spoken "Important." counts unchanged in every file. rules_primer has 128 chunks (was 127), and every new boundary falls between paragraphs.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 (two halves plus the re-check) |
| D2 Exceptions | Casebook 607 Sit. 5, 615 Sit. 15, 628 Sit. 1, 608 Sit. 1; HC 7.6(b)/7.7; CARHA 86 Note |
| D3 Divergence | Per-book sentences after splits; scope re-attached and verified |
| D4 Citation integrity | 305(b), 601(c)(10), NHL 67.5 and 76.7 added or corrected against `sources/` |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None added |
| D7 Cardinal rule | No tactic presented as a rule; tariff-first units reordered to lead with the instruction |
| D8 Numeric ownership | SDP 6–10 and 3–5 game ranges from `sources/usah.txt` |
| D9 Summary layer | KT6 (body_contact) and the Common Mistakes splits reviewed |
| D10 Key-facts layer | No facts line changed |
| D11 Reader safety | safety-reviewer, plus the safety direction in the re-check |
| D12 Read-aloud | body_contact, rules_primer, defender and center rendered with HEAD alongside; chunk boundaries compared |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs; every ⚠ still leads its strong run; no marker lost. No site-reviewer (declared) |

## What this method could not have found
- A split that is right locally but contradicts another layer or document.
- Sentences of 50–60 words left as quotation-led or citation lists.
- Chunk seams in the four unrendered files.
- Other corpus lines stating USA Hockey's after-whistle price, or the 7.6(b) price, flatly.
