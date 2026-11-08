# SG199: the remaining goalie-contact sites. CARHA's fouled-attacker goal limb, USA Hockey's penalty limb, a corner permission withdrawn, and the IIHF "relevant contact" read correctly (8 November 2026)

**Files:**
- content/technique/shooting.md
- content/systems/offensive_zone_play.md
- content/hockey-iq/playing_without_the_puck.md
- content/systems/special_teams.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md (SG199 closures; leads from SG199 and the SG199d census)

## Source
These leads were recorded by SG197 and SG198. Three authoring agents worked disjoint file sets, and a read-only census (SG199d) ran alongside them to feed SG200.

## What changed
The goalie-contact settlement from f1732abf and d9faf169 is: Hockey Canada (Interpretation 1 to 8.5(a)) takes the goal for any contact the attacker starts, unless a defender's foul left them unable to avoid it; USA Hockey 617(c)(4) and CARHA 66(b) take it for interference; NHL, IIHF and PWHL 69.3/69.4 (71.3/71.4) apply inside and outside the crease; and leaning on the goalie as you screen is a penalty in every book.

### shooting.md
- **:555.** Hockey Canada "any contact you start … unless a defender's foul left you unable to avoid it". It had said "wherever it happens" with no "you start" (harsher).
- **:557.** CARHA 66(b) (carha_2026.txt:3117-3122) now reads: "if a defender trips or fouls you and you make no attempt to avoid the goalie, you still take a minor, and if your team has the puck the goal is disallowed as well". HEAD omitted the disallowed goal (cheaper).
- **:309 (facts) and :524.** The IIHF's "a relevant contact" means any contact (69.1, iihf_rules_2026-27.txt:5611). The first pass added parentheticals that made the term sound like a narrowing. The author found the definition and reverted :327 and :501 to HEAD.

### offensive_zone_play.md
- **:508.** Keep off the goalie: contact can cost the goal from outside the crease too, and leaning as you screen is a penalty in every book.
- **:594 (facts) and :620.** The goal question was answered for the NHL only; it now has a separate paragraph covering every book.
- **:620 penalty paragraph.** It now leads with the instruction ("Outside the crease (69.4), keep off the goalie"). It adds Hockey Canada 8.5's "anywhere on the ice" and "in all circumstances", and the CARHA Note to 52(b) (unnecessary contact). The "Neither …" and "the two" references now point at named things.
- **Correction to the brief.** The CARHA claim at :620 rests on the 52(b) Note, not on 66(b), so it was not an overstatement.

### playing_without_the_puck.md
- **:670.** CARHA was grouped with Hockey Canada (harsher), the error d9faf169 fixed elsewhere. It now reads "Hockey Canada any contact you start; USA Hockey and CARHA contact that interferes". It adds the lean penalty: at least a minor under Hockey Canada 8.5(a) and CARHA 66(b), and "USA Hockey files it as charging (607(d) Note 1), never a bare minor".
- **:732.** CARHA's fouled attacker who "fails to attempt to avoid" the goalie takes a minor whether or not their team has the puck (two limbs, carha_2026.txt:3117-3122). If the team has the puck, any goal is disallowed as well.
- **:1038 (Common Mistakes).** Outside-crease goal costs, by book.

### special_teams.md
- **:1127.** It now reads: "Outside it, play a goalie's puck with your stick, never your body: the goalie is still not fair game, deliberate contact is charging wherever it happens." A pointer to Body Contact and Battles gives USA Hockey's detail for a goalie in the corners. The first pass had replaced HEAD's Note 1 limit with Casebook 607 Situation 5's permission; that was blocked (see wrong premises).
- **CM :1195.** Standing in the crease can cost the goal with no contact under USA Hockey 617(c)(4)/625(b), Hockey Canada 8.5 and CARHA 66(b).

### body_contact_and_battles.md
- **CM :2024.** The outside-crease goal cost is now given by book.

## Wrong premises and defects found by review
1. **special_teams :1127, first pass (BLOCKING, permissive).** It voiced USA Hockey Casebook 607 Situation 5's permission to engage a goalie who has the puck outside the privileged area. "Check them only in a game that allows checking" implied that engaging a goalie was fine in a non-checking game, which licenses 12U, girls' and non-checking adult players to put a body on a goalie (607(a): at least a minor plus a misconduct). It also contradicted :1129 and playing_without_the_puck :728. Decision: a power-play page does not need the permission. The limit was restored and the permission is no longer voiced.
2. **playing_without_the_puck :732, second pass (BLOCKING, cheaper).** It tied CARHA's minor to having the puck. CARHA's second limb gives a minor to an attacker without the puck who is tripped and makes no attempt to avoid the goalie. The coordinator applied the final reader's wording.
3. **The IIHF "relevant contact" parentheticals.** The first pass implied a narrowing that 69.1 does not make. They were reverted.
4. **Briefs.** The brief cited hc_2026-08-print.txt where hc.txt is current (carried over from SG198). It also said offensive_zone_play :620 rested on 66(b); it rests on the 52(b) Note.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (13 changed lines, all six books plus Casebook 607/625) | Nothing blocking. :1127 adds a new permission and needs a decision. WORDING: "contact that interferes" narrows USA Hockey's "interfering" (logged as a corpus-wide pass); "relevant contact" gloss; HC writes its own incidental-contact tolerance |
| safety-reviewer (five files rendered) | BLOCKING :1127 (fixed). RECOMMENDED: shooting :557 pronouns, playing_without_the_puck :732 lost goal, offensive_zone_play :620 readability, the IIHF gloss (all fixed) |
| safety-reviewer, final read of the rewritten units | BLOCKING playing_without_the_puck :732 (fixed). RECOMMENDED: offensive_zone_play "how the two fit" referent, :1127 duplicate clause and "defines it", playing_without_the_puck :670 grammar, shooting :557 "trips or fouls" (all fixed) |

### C11
- The authoring agents made every edit except the final reader's five. The coordinator applied those in the reader's own wording, after checking CARHA 66(b) at carha_2026.txt:3110-3127.
- The coordinator wrote the briefs, the plan entries and this record.

### Checks after the last content edit
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets and check_tables all exit 0.
  - One earlier check_links run exited 2 while a reviewer was rendering the tree. It re-ran clean twice with nothing changed.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF across the five files. The "no longer present by key" entries are rewritten openings that keep their markers (shooting :524, offensive_zone_play :620).
- check_counts --update: all figures match.
- Full `npm run build` with the absolute binary, started after the last edit to these five files: exit 0, including check:links (all internal links and anchors resolve). winger.md and mental_game.md (SG200) were still being edited and are not in this commit.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | HC Interp. 1 fouled-attacker exception; USA Hockey Casebook 607 Sit. 5 (deliberately not voiced on a power-play page); CARHA 66(b) two fouled-attacker limbs |
| D3 Divergence | Goal cost and penalty for goalie contact across six books |
| D4 Citation integrity | 66(b), the 52(b) Note, 8.5 preamble and Interp. 1, 617(c)(4), 625(b), 607(d) Note 1, 69.1/69.3/69.4, 71.3/71.4 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "none of the three says whether a penalty follows…" re-read against 69.4 |
| D7 Cardinal rule | Units lead with the instruction (keep off the goalie; stick, never body) |
| D8 Numeric ownership | None |
| D9 Summary layer | Common Mistakes changed alongside their bodies; layer tests by each author and both reviewers |
| D10 Key-facts layer | shooting :309, offensive_zone_play :594 (291/300) |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | All five rendered; changed units read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes with markers kept; no site-reviewer (declared) |

## What this method could not have found
- The same claims on pages outside these five files. All sweeps were lexical. Recorded leads: center facts :476 "requires 'a relevant contact'"; the corpus-wide USA Hockey "contact that interferes" wording.
- Whether Body Contact and Battles' corner detail, which the new special_teams pointer links to, reads consistently with "never your body".
- Other CARHA, Hockey Canada or PWHL rules that reach a fouled attacker's contact with the goalie.
