# W443: the last "there"/"here" scope words that landed on a place are gone from four pages, the British helmet rule is scoped to In-House play, and the Elite League no longer reads as warning before a detached-helmet minor (18 November 2026)

**Content files changed:**
- positions/goaltender.md
- off-the-ice/equipment.md
- positions/switching_positions.md
- positions/defender.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W441 (1); From W442 (3) and (6).
- **Coordinator's census reading:** I read the remaining census "there"s in context. winger :522/:908, faceoffs :1204 and rules_primer :552 name their book, so they need no change. goaltender :758, equipment :125 and switching :573 were dispatched.
- **Brief:** scratchpad/w441/brief.md and w442/brief.md.
- **Authors:** four agents, one file each.

## What changed (voiced)
- **goaltender**
  - :758 now reads "so under those three books a rebound you bat out of the rink from your crease is still a minor". The old "a minor there" followed "your crease", so it could be heard as applying only in the crease.
  - Facts :746 now reads "its Casebook makes batting a rebound out of the rink before you have control no penalty".
  - Checked against NHL/IIHF 63.2(iii), PWHL 65.2(iii) and USAH Casebook 610 Sit 5.
- **equipment**
  - :125 now reads "a separate offence in the NHL and the PWHL". The old "here" followed "the penalty box".
  - :126 now reads "under the IIHF too".
  - :129 now reads "far harder under USA Hockey". This sub-bullet now opens chunk 009 and names its book. At HEAD, chunk 009 opened with no book named.
  - CM :813 now reads "also throws you out under USA Hockey" (622(b)).
  - :131 now reads "under USA Hockey Rule 622(b)".
  - :127, the British helmet duty, is now scoped "Britain outside the Elite League (In-House Rules, Rule 9.8)", and adds "in an Elite League game staying on is the IIHF's minor". In-House 9.8 does not reach EIHL play; the EIHL Casebook has no detached-helmet rule, so IIHF 9.6's minor "without a warning" governs there.
  - :117 now opens "Under the In-House Rules…".
  - KT6 now reads "⚠️ **The In-House Rules give no warning: ten minutes, then a game misconduct the second time.** The Elite League warns first on the neck guard; …". HEAD's bare "The Elite League warns first" could be heard as covering the helmet, which is permissive and false.
- **switching_positions**
  - :573 now reads "⚠️ **A CARHA major for it brings a game misconduct…**", with the citations moved outside the bold (the run is now 277 characters).
  - :571 now reads "under those two books".
  - :575 now reads "A body check in those classifications is a minor (604(c))".
  - Two Sources-trailer "there"s are re-scoped; these are not voiced.
- **defender**
  - Facts :291 and body :301 now read "a hit to the head, face or neck is at least a minor plus a misconduct however little force is behind it (620(a))". The old wording was "contact with the head, face or neck".
  - The author refuted the brief's "unless accidental" idea. Casebook 620 Situation 1 makes contact during a check decide the call. Situation 2 excuses only accidental contact while getting up from a fall, so an "unless accidental" exception would have been permissive.
  - The rules reviewer ruled against "a hit or a stick". Casebook 621 Situation 1 puts a stick to the head during a check under head contact, which "a hit" already covers. Outside a check it is 621(a), a plain minor, so "or a stick" would overstate.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | First read: every changed site OK. "A hit" is correct, and the reviewer said do NOT add "or a stick". It found the equipment :127 In-House-vs-EIHL scope collision (the harsher direction).<br>Confirmation of the equipment follow-up: all four sites OK. KT6's "third refusal" clause was already in HEAD. |
| safety-reviewer | First read: none. It upheld all three rulings (defender "a hit", equipment chunk 009, switching amber run). "Important." counts are equal. It raised an optional point at equipment :131 (book named), which was applied.<br>Confirmation of the equipment follow-up: CLEAR. KT6 is better than HEAD. |
| site-reviewer | Four pages at 400×812 DPR 2 light/dark and at 1440 light, on the 09:46:49 build. Every worst window held; equipment fell from 46.3 to 45.7. 0 bare, 0 untreated, 0 panels, 0 console errors. All six named units are glyph-led warn-inline, and the switching run closes before its citations. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text or an author correction that both reviewers confirmed. Two of these are worth naming:
- equipment :127: the author chose not to use the reviewer's league list, because Rule 9.8 names no competitions.
- equipment KT6: rewritten within the 60-word limit.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 09:46:49; the newest content file is equipment.md at 09:44:20.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** check_callout_flow --bare reports 0; `--panels --file` reports 0 on all four files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL/PWHL 9.6, 51.2/51.3/51.5/51.6, 63.2(iii)/65.2(iii); IIHF 9.5/9.6/9.12, 51.2, 63.2(III); USAH 604(a)/(c), 610(c), 620 Note/(a)–(c), 622(b)/(c), Casebook 610 Sit 5, 620 Sits 1–4, 621 Sit 1, 622 Sit 2; CARHA 2026 30(a), 32(d), 34(a), 48(a), 49(a)/(b); HC 10.1(a); In-House 9.8, 9.12; EIHL Casebook Rule 9 |
| D2 Exceptions | Casebook 620 Sit 2 is not "unless accidental"; 621 Sit 1 stick-in-a-check |
| D3 Cross-book divergence | In-House vs EIHL helmet and neck-guard ladders |
| D4 Citation integrity | switching citations moved out of the amber run |
| D5 Provenance | not engaged |
| D6 Negative existence | "USA Hockey's alone" rebound relief attacked and held |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | equipment KT6 repaired with its body text |
| D10 Key-facts | goaltender :746, defender :291 voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | scope words; equipment chunk 009 now names its book |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W443)
- "in Britain" stated about In-House rules elsewhere (likely corpus-wide).
- switching :609, HC case.
- HC glove-bat rebound silence.
- 604(e) beside 602(a).
- Casebook 622 Sit 2.
- In-House 9.8's "misconduct" length.
- Site-reviewer: equipment :131's amber run still ends on the citation "Rule 622(b)".

## What this method could not have found
- Scope words other than there/here.
- Other EIHL Gamebook sections that price a detached helmet.
- Other British competitions' own Rules of Competition.
- Real synthesised audio.
