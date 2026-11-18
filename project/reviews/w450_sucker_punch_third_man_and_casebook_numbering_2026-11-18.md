# W450: an uninjured sucker punch is no longer heard as safe, a third man in is no longer offered a peacemaker route, and the Elite League Casebook's two old Rule 46 numbers are named (18 November 2026)

**Content files changed:**
- foundation/uk_rules.md
- technique/body_contact_and_battles.md
- foundation/rules_primer.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:**
  - From W446 (3) and (5)
  - From W447 (6)
  - From W449 (1), (2) and (4)
- **Brief:** scratchpad/w450/brief.md, a copy of the W446 brief.
- **Authors:** three agents, one file each.
- **Brief premises refuted:**
  - **The Casebook's Rule 46 numbering.** The brief said the Casebook "numbers Rule 46 on the 2025/26 scheme". It mixes the two editions: 46.2 Aggressor and 46.10 Instigator are 2026/27 numbers, while 46.2 Altercation and 46.13 Jerseys are 2025/26 numbers.
  - **The W449 commit gate's claim about 70.3.** The gate said 70.3 does not carry "first or second player". It does, in both books.

## What changed (voiced)

### uk_rules
- **:130** now names the two old numbers: "its 46.2 *Altercation* is 46.3 there, and its 46.13 *Jerseys* is 46.11, and **46.13 in 2026/27 is the sucker punch**".
- **:138** now reads: "Sucker-punching's rule text narrows from a punch that "could cause" injury to one that "causes" it, but the 2026/27 Situation Handbook gives a sucker punch a major and a game misconduct with no injury named — plan on the ejection either way."
- **KT18** now reads "⚠️ **Each ejects you** (a sucker punch even without an injury; …)". HEAD read "under 2026/27, one that injures", which told an Elite League reader that an uninjured sucker punch does not eject. The rules sweep flagged this as permissive.
- **:207** now reads: "the IIHF rule decides the call, with no Casebook criteria and, under In-House 69.1, no video review". HEAD said "runs unamended", which is false because 69.1 deletes video review.
- **:401** now reads: "the British layers mostly add to it, and the clearest softening, the Elite League's fighting rule, still costs at least a major". The safety text was used here.
- **:9 and :502** now read "your base".
- **:52** adds "your competition's own regulations add more, such as the checking age".

### body_contact_and_battles
- **Facts :1904** now ends "A third man in may be ejected; in the EIHL and under the In-House Rules' unclear edition, 46.14 (2026/27) may waive it only if an aggressor is penalised". This is safety's text.
  - HEAD's "plan on 2026/27's narrower exception" did not say what was narrowed.
  - The wave's first repair ended "only stopping an aggressor can spare you". Safety rated that a **MAJOR**: heard alone, it offered a peacemaker route into the fight, against :1915 "never go in to break it up".
- **Facts :1970** now reads "70.4 and 70.6 catch every player out of the box". 70.4 alone covers only a stoppage; the last paragraph of 70.6 covers any time.
- **:1973** now reads "the NHL and the IIHF (70.4, 70.6)".

### rules_primer
- **:510** now reads: "The 2026/27 rule (46.13) narrows "that could cause an injury" to "and causes an injury", but its Situation Handbook gives it with none named (Situation 46.15)". The bullet still ends "Assume ejection, not a mutual two."
- **:554** now reads "sucker-punching (even uninjured, plan on it)".
- **CM :1169** now reads: "Under the IIHF a sucker punch is a major and automatic game misconduct; the 2026/27 rule text names an injury and its Situation Handbook does not, so plan on it either way." This is safety's text.
- **:1271:** the edition note now lists Situation 46.15.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** all 10 changed units OK. Two were incomplete: :1904 and :510 ("adds" should be "narrows"). The sweep for the act found two permissive sites outside the diff, uk_rules KT18 and rules_primer CM :1169; both are now fixed.<br>**Confirmation:** all seven new sentences OK. |
| safety-reviewer | **First read:** one MAJOR, bcb :1904 (the peacemaker route), plus minors at :510, CM :1169 and uk_rules :401. All were fixed with safety's text.<br>**Confirmation:** CLEAR. "Important." counts equal HEAD. |
| site-reviewer | Three pages at 400×812 DPR 2 light/dark and at 1440 light, on the 11:55:40 build. Every worst window unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. KT18 is a single glyph-led warn-inline run, "Each ejects you". |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text or an author correction confirmed by a reviewer:
- KT18 drops the reviewer's explanation clause to stay at or under 60 words; the explanation moved to :138.
- :510 uses "with none named" in place of "with no injury", because the Handbook is silent rather than negative, and drops ", so plan on it" for length.
- :510 has the trims "is Head Contact" and "a mutual two".

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 11:55:40; the newest content file is uk_rules.md at 11:54:04.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** check_callout_flow --bare reports 0, and `--panels --file` reports 0 on all three files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IIHF v1.1 46.3/46.5/46.7, 2026/27 46.1/46.2/46.3/46.10/46.11/46.13/46.14/46.15, Situations 46.15/46.18, 51.2, 21.1, 70.3/70.4/70.6; NHL 70.3/70.4/70.6; EIHL Casebook Preamble, Rule 46 headings, 46.1, 46.2, 46.10, 69; In-House 37, 69.1, Section 6; HC 7.9 preamble; Junior/WNIHL/NIHL RoC checking |
| D2 Exceptions | 46.14 third-man waiver; Elite League early-instigator exception |
| D3 Cross-book divergence | rule text vs Situation Handbook on injury; v1.1 vs 2026/27 |
| D4 Citation integrity | Casebook mixed numbering; 70.4 vs 70.6 |
| D5 Provenance | rules_primer :1271 edition note |
| D6 Negative existence | Casebook has no sucker-punch or third-man clause (searched with footers stripped) |
| D7 Cardinal rule | "plan on it" where the books disagree |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | uk_rules KT18 and :138; rules_primer CM :1169 with :510/:554 |
| D10 Key-facts | bcb :1904/:1970 voiced alone |
| D11 Reader safety | safety-reviewer, two reads (one Major fixed) |
| D12 Read-aloud | "46.14 (2026/27)" order chosen so the number voices cleanly |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed
- **Optional (safety):** at rules_primer :510, "gives it with none named" could become "gives the same major and game misconduct with none named".
- **Content-reviewer notes:**
  - uk_rules :207 is followed by "The Casebook is updated during the season" after a sentence about EIH and SIHA, which have no Casebook.
  - "clearest" softening is arguable against the In-House unwilling-combatant minor.
- **Siblings not swept:** documents outside these three were not checked for the third-man waiver or the injury-only sucker punch. The rules sweep found no other sucker-punch site in the corpus.
- **Situation 46.15** cites 2025/26's 46.5, which suggests it was carried over without revision. Whether the IIHF intends 46.13's injury test to govern is unresolved.

## What this method could not have found
- A sucker-punch claim worded without "sucker", "unsuspecting" or "injur".
- In-season Handbook or Casebook revisions.
- Officiating practice.
- Real synthesised audio.
