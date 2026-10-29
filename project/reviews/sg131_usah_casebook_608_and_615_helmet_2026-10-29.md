# SG131: USA Hockey Casebook prices for a hit at the boards and for helmet removal (29 October 2026)

**Files:**
- content/foundation/rules_primer.md
- content/systems/offensive_zone_play.md
- content/positions/goaltender.md
- content/off-the-ice/team_play_and_culture.md
- content/off-the-ice/equipment.md
- project/plans/OPEN_ITEMS.md

## Why
**(a) Checking from behind at the boards (carried from SG127b).** USA Hockey 608(a) reads "A minor plus a misconduct penalty, or a major plus a game misconduct penalty". But Casebook 608 Situation 1 keeps the minor plus misconduct for an open-ice push or minimal "pinch" contact. It says: "The major plus a game misconduct penalty, or match penalty, must be called … (1) In every instance where a player forcefully checks an opponent who is standing along the boards (back toward the middle of the ice)". Pages that priced a boards hit at 608(a) alone told a USA Hockey reader they would stay in the game.

**(b) Helmet removal.** USA Hockey 615(c)'s rule text gives a match for your own helmet only "prior to" an altercation. Casebook 615 Situations 9, 13 and 14 extend it to "prior to or during". Three pages said "before" only.

**(c) Equipment next-game (carried from SG130).** Equipment's 615(c) helmet game misconduct has no suspension clause of its own; the one game comes from 404(b). So the page now states 404(b) once.

## What changed
**(a)** A corpus-wide sweep read about 180 sentence-level hits in context. Most already carried the Casebook limb. Four were fixed:
- **rules_primer :527:** "…but a forceful one on a player facing the boards is at least a major plus a game misconduct (Casebook 608, Situation 1)";
- **offensive_zone_play :794:** "…or a forceful one from behind on a player facing the boards…";
- **offensive_zone_play facts :783:** "under USA Hockey a forceful one at the boards ejects (Casebook 608)…";
- **goaltender :1272:** "…or is forceful while you stand along the boards (Casebook 608, Situation 1)".

**(b)** "Before or during" was applied at:
- equipment :129, :813 and KT2 :885;
- rules_primer :489 (a restatement folded in, with no limb lost);
- team_play :282.
Equipment's Sources trailer now cites Situations 9, 13 and 14.

**(c)** equipment:
- :129 is the page's one statement: "every USA Hockey game misconduct also costs you your team's next game (Rule 404(b))";
- the repeats at :131 and :812 were removed;
- the rule-specific 615(c) two-game suspension (for causing an opponent's helmet to come off) is untouched.

## Reviews
| Files | rules-verifier (usah.txt 404(b), 405(c), 603(a), 608(a)–(c), 615(c), glossary "Altercation"; usah_casebook 608 Sit. 1, 615 Sit. 9, 13, 14, 15, 16, 17) | safety-reviewer |
|---|---|---|
| equipment | All four edits CONFIRMED. The two-game suspension is untouched. | SHIP. Minor: Sources trailer citation, applied. |
| rules_primer, ozp, goaltender, team_play | All six edits CONFIRMED. Edits at :527 and :794 are worded loosely enough to read as any forceful board check (harsh); scoped, see C11. | FIX (minor) on rules_primer :527 and ozp :794, same scoping point. SHIP on goaltender and team_play. The rules_primer :489 fold lost nothing. 0 LOST. |

### C11
Two coordinator edits after review, both the safety-reviewer's own wording:
- **rules_primer :527:** "a forceful hit on a player along the boards" became "a forceful one on a player facing the boards".
- **ozp :794:** "a forceful hit on a player along the boards" became "a forceful one from behind on a player facing the boards". The paragraph is now 1,168 characters.

Both narrow the claim to Situation 1's own scope ("back toward the middle of the ice"). check_facts passes; check_marker_pairs reports 0 LOST.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifiers, as listed |
| D2 Rules travelling without exceptions | A corpus sweep for the 608 claim (about 180 hits read); grep for own-helmet wording |
| D3 Rule-set divergence | USA Hockey only; other books' text untouched |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed (the Sources trailer citation was checked by the reviewer) |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope, declared by the coordinator: no absence claim changed |
| D7 Cardinal rule | safety-reviewers: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | safety-reviewers: CM and KT agree (equipment KT2; rules_primer CM :1126; ozp CM :1148) |
| D10 Key-facts layer | ozp facts :783 read voiced alone |
| D11 Reader safety | safety-reviewers |
| D12 Read-aloud integrity | Every edited page rendered |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; paragraphs under 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- **USA Hockey Casebook 615 Situation 15 (permissive, pre-existing).** Deliberately targeting an opponent's helmet or head in an altercation, so that it comes off, is a match penalty. rules_primer :489 and team_play :283 give "causing an opponent's to come off" as a game misconduct plus two games, with no deliberate-targeting tier.
- The USA Hockey "altercation" glossary definition has further conditions ("generally… at a stoppage", "requires action… to separate players"); the corpus's "a post-whistle shove that draws one roughing minor is enough" rests on its first sentence.
- risk_management :831 and switching_positions :254 facts lines rely on the next facts line for the Casebook limb (a judgement call).
- defending_the_rush :354 mentions "into the boards" but gives only USA Hockey's match tier (a judgement call).
- Diagram captions were not swept for the 608 claim.

## What this method could not have found
- A boards scene described without "from behind/back/numbers" vocabulary ("wall battle", "rim").
