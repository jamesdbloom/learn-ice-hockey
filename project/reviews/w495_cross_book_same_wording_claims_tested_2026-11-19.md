# W495: claims that a second rulebook says something "in the same terms" are tested; four that were not true are corrected, one of them permissive for youth and female non-checking players (19 November 2026)

**Files changed**
- **Content:** technique/body_contact_and_battles.md, systems/game_management.md, positions/goaltender.md, foundation/uk_rules.md
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan row:** From W494 (1).
- **Method:** a read-only rules-verifier census, then four authors (one per file).
- **Census tool:** a flattener that strips page furniture, at scratchpad/w495/tool/fl.py.

## Census (read-only)
**What was searched.** 677 pattern hits in 38 files: "in the same terms", "word for word", "verbatim", "identical", "the same sentence/wording/words", "reads the same", "same clause/text/language" and others.

**What was compared.** About 130 voiced claims and about 75 Sources-trailer claims were compared in both books, at token level, with pronouns and quotation marks normalised.

**Edition claims checked by script:**
- 66 IIHF rules, v1.1 against 2026/27: the only differences are 60.1, 60.3, 76.4, 76.7 and 83.1, and the corpus already discloses each.
- 23 CARHA rules, 2020 against 2026: identical.
- 2 In-House clauses: identical.

**Four claims were not OK.** Everything else held.

| # | Site | Claim | Verdict |
|---|---|---|---|
| 1 | bcb :582 | HC Rule 7.3 is "the same wording" as the Glossary's angling limb | **DIFFERENT, permissive.** The Glossary says "extends an arm, shoulder, or hip **to maximize physical contact** after angling"; 7.3 (`hc.txt:6019-6023`) drops the purpose clause. In 7.3's divisions (U13 and below, female, Member-approved), any extension after angling is a body check. |
| 2 | game_management :218, :1362 | HC 6.7(d) has "the NHL's three exceptions word for word" | **DIFFERENT, harsh.** HC (3) allows a change after any penalty to either team; NHL 81.4 requires an on-ice-strength effect. |
| 3 | goaltender :1489 | "IIHF 8.2 reads the same way" as NHL 8.2's medical warm-up | **DIFFERENT.** IIHF 8.2: *"No warm-up shall be permitted for a substitute goalkeeper in any game."* |
| 4 | uk_rules :237 | the EIHL Casebook reproduces IIHF 9.5 "word for word" | **SUBSTANCE-ONLY.** The ladder is verbatim, under the Casebook's own opening sentence. |

## What changed (voiced)
| Site | Now |
|---|---|
| bcb :582 | "**Rule 7.3**, which applies only where checking is banned, repeats it without *"to maximize physical contact"* — there, any arm, shoulder or hip extended after angling is a body check." |
| game_management :218 | "…with the NHL's first two exceptions and a wider third — any penalty to either team" |
| game_management :1362 (trailer) | "…the NHL's first two in its own words and a third with no on-ice-strength condition" |
| goaltender :1489 | "IIHF 8.2 reads the same way on substitution and on staying in, but allows a substitute goalkeeper no warm-up in any game, and lets a team doctor on without waiting for the referee's consent." The author dropped the brief's "trainer", which is NHL wording. |
| uk_rules :237 | "…reproduces its warning-and-refusal ladder word for word, under an opening sentence of its own — so the ladder reaches every British player" |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (census author) | **CLEAR** on all four, against both books. IIHF 5.3 (an undressed third goalkeeper gets two minutes) was ruled not needed at goaltender :1489. That sentence credits "no warm-up in any game" to 8.2 by name, verbatim, and no reader acts differently on the edge case. |
| safety-reviewer | **CLEAR** on bcb :582. The scope matches `hc.txt:6024-6027`, the wider prohibition is the safe direction, and :71/:81 agree. 203 = 203 markers. |

### C11
The coordinator wrote no content.

### D15
No marker changed. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing; dist is newer than every content edit.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
- **Other checks:** check_counts made no change; check_marker_pairs reports 0 lost.
- **Old phrasings:** "8.2 reads the same way" now occurs only in its corrected form, and "reproduces it word for word" appears nowhere.

## Found, not fixed (plan row From W495)
1. **Sameness claims worded another way were not systematically searched.** These include "mirrors", "tracks", "carries the NHL's", "reproduces the NHL's 79.2", "matches" and "twin". This is the likeliest place for a further defect.
2. **Situation Handbook and Appendix IV claims were not reached.** That covers the IIHF Situation Handbook "word-identical in both Handbooks" claims and the Appendix IV table-row claims (dzc :806, special_teams :939).
3. **USA Hockey Rulebook against Casebook "same clause" claims, and within-book "says the same" claims, were not checked.**
4. **Glossary-against-rule pairs in HC and CARHA** were not checked beyond the one found.
5. **Whether HC 6.1(g) writes exceptions** to the net-off bar is unchecked (game_management :638, :651).

## What this method could not have found
- A difference carried only by a pronoun's referent, or by a defined term.
- A rider elsewhere in a rule that changes the price.
