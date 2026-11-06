# SG190: lines pricing unavoidable goalie contact as only an interference minor gain USA Hockey's hard-drive rung, and the right to engage a goalie with the puck is limited to checking games (6 November 2026)

**Files:**
- content/foundation/rink_map.md
- content/foundation/rules_primer.md
- content/hockey-iq/playing_without_the_puck.md
- content/positions/goaltender.md
- content/systems/offensive_zone_play.md
- content/systems/special_teams.md
- content/systems/zone_entries.md
- content/technique/body_contact_and_battles.md
- content/technique/shooting.md
- project/plans/OPEN_ITEMS.md (SG185 items closed by SG189 removed; SG190 follow-ups recorded)

## Source
A read-only rules-verifier census (SG189) read all six USA Hockey Casebook Rule 607 Situations and every corpus line pricing USA Hockey goalie contact against them. It found units telling an attacker that contact they could not avoid is only an interference minor (607(d) Note 1, 625(a)(8)), with no word of Situation 4's middle rung. It also found the corpus split on whether Situation 5's "physically engage" applies in any game.

## The rules (verified on disk)
- **Casebook 607 Situation 4** (`usah_casebook.txt` ~:11673–11712), for "charging a goalkeeper while in their crease or privileged area":
  - no penalty if a defender forced you in and you "clearly made every attempt to avoid the contact";
  - "If the attacking player is going hard to the goal and then makes an honest attempt to avoid the goalkeeper once it is realized contact is unavoidable, a minor plus misconduct penalty is deemed appropriate";
  - accelerating through, or arms or shoulder → "the major plus game misconduct, or match penalty option".
- **Situation 5:**
  - a goalie outside the area "can be legally checked";
  - "A penalty should be assessed in every instance where unnecessary or avoidable contact is made with the goalkeeper";
  - an attacker may "physically engage" a goalie "When the goalkeeper has possession of the puck".
- **Situation 6:** the privileged area runs to the end boards behind the net.
- **Privileged area** (Glossary and 607 Note 2): a box between the end-zone dots (20 ft out) running perpendicular to the end boards. The net front and crease are always inside it; the corners are not.
- **Glossary on possession:** a player in "possession of the puck" is "NOT eligible to be body checked and/or engage in competitive contact".

## What changed
- **Claim 1, the middle rung added, scoped to the crease or privileged area or "at the net":**
  - body_contact :1291, facts :1330 (taking the USA Hockey limb from :1336), :1354 (lead and quotation corrected);
  - zone_entries :362;
  - playing_without_the_puck facts :710/:713, folded into one new facts line, plus :725 and :733;
  - shooting :329;
  - special_teams facts :1110/:1111;
  - offensive_zone_play facts :645/:646;
  - rink_map :457;
  - goaltender facts :1245, :1259 ("only deliberate contact is charging" corrected) and Common Mistakes :1651.
- **Claim 2:** rules_primer :784 and :860 now limit "physically engage" to games that allow body checking (the conservative reading; the books do not settle it). :784 also gains Situation 5's every-instance floor "in any game", so a non-checking reader still hears that avoidable contact with a goalie is penalised.
- **Post-review wording (reviewers' findings):**
  - "drive hard at the goalie" → "to the net", with the scope on the contact (rink_map, special_teams, ozp, goaltender);
  - body_contact :1352's inserted sentence deleted (it shifted "it" in "607(c) writes no bare minor for it");
  - special_teams :1129 "Which rule you are under turns on deliberateness, not force";
  - special_teams :1127, the privileged area "but not the corners" (the goal-line overstatement removed);
  - ozp :646 "arms out or shoulder down" (a bare comma list could be heard as all three required), fitted by ", mandatory" and "expect a match".
- **Commit-gate BLOCK, then repaired:** a third substitution fitting that fix changed "no penalty only if a defender forced you in and you 'clearly made every attempt'" to "no penalty unless…", which reverses Situation 4 ("no penalty should be assessed provided…"). The coordinator had passed it as harmless; only the gate caught it. Restored to "only if". The gate also noted that rules_primer :784 credited the Casebook with the checking-game limit; the limit is now the corpus's own sentence ("In such a game you may…").
- **After the block's re-check:** ozp :646 had lost "goalie" ("forced you in… to avoid it" had no object). "goalie in crease or privileged area" restored, fitted by "USA Hockey 607 Sit. 4" (the existing "USA Hockey 625 Sit. 9" form) and "ram through" (Situation 4's "accelerating through the contact"). No price changed.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only) | Situations 1–6 tabled; about eight cheaper sites; Situation 5 split |
| rules-verifier (all nine files) | Both claims PASS; net front always inside the privileged area (rink markings 20 ft/22 ft); nothing priced lost; optional fixes taken |
| safety-reviewer, also standing in for content (nine rendered) | 7 SHIP, 2 minor FIX (rules_primer :784 scope, body_contact :1352), both applied |
| rules-verifier, narrow re-check of all repair text | All PASS; optional ozp :646 "or" (cheaper heard aloud), applied |
| commit-gate | BLOCK: ozp :646 "unless" reversed Situation 4 (post-review substitution); rules_primer :784 attribution (non-blocking) |
| rules-verifier, re-check after the block | ozp :646 "only if" and rules_primer :784 PASS; no other Situation 4 inversion in `content/`; minor: ozp :646 antecedent "goalie" (applied) |

### C11
- Two authoring agents made every edit on disjoint file sets. The coordinator wrote the briefs, the plan and this record.
- A post-review substitution ("unless") reversed a rule and passed the coordinator; the gate caught it. The lesson is recorded: a substitution made to fit a cap changes a claim, and needs a reader, however small.
- The final ozp :646 edit is the last re-check's own finding (the antecedent). Its two fitting substitutions are a citation form and a synonym, with no price changed.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all nine files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 (census, review, re-check) |
| D2 Exceptions | Situation 4 no-penalty rung; Situation 5 possession limit and floor |
| D3 Divergence | USA Hockey only (the wave's claim) |
| D4 Citation integrity | 607(c)/(d) Note 1/(b), 625(a)(8), Casebook 607 Sit. 4–6 |
| D5 Provenance | Quotations from `sources/` on disk, clause cuts checked |
| D6 Negative claims | "The books do not settle" Situation 5 in non-checking games (Glossary read) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | Privileged-area dimensions from the rink markings |
| D9 Summary layer | Common Mistakes (goaltender :1651) with its bodies |
| D10 Key-facts layer | Facts lines rewritten or merged and compared limb by limb with HEAD |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Nine files rendered; chunk adjacency of rungs checked |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes, markers kept in place. No site-reviewer (declared) |

## What this method could not have found
- Units pricing USA Hockey goalie contact in other words ("a bump is two minutes") without the census terms.
- Whether officials apply Situation 5 in non-checking games.
- The follow-ups recorded in the plan (forechecking :869, outside-the-crease lines, harsher-direction lines).
