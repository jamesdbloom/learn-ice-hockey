# W445: British claims scoped by competition, not place. In-House amendments no longer read as reaching the Elite League, and "the main domestic softening" no longer tells In-House players a willing fight is cheap (18 November 2026)

**Content files changed:**
- positions/center.md
- foundation/uk_rules.md
- off-the-ice/equipment.md
- systems/faceoffs.md
- systems/game_management.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W443 (1).
- **Census:** W444, a read-only rules-verifier pass, in scratchpad/w444. It found 2 DEFECTS and 5 AMBIGUOUS groups across about 100 British-scoped hits. Every hit was rated against the In-House Rules (eiha_inhouse_2026-27.txt) and the EIHL Casebook (eihl_casebook.txt). The Casebook's Preamble sends every uncovered rule to IIHF 2026/27.
- **Brief:** scratchpad/w445/brief.md.
- **Authors:** five agents, one file each.
- **Follow-on census:** W446 also ran in this wave (read-only). It looked for the mirror case, an IIHF rule labelled "Britain's" where the EIHL Casebook supersedes it. Its findings are filed as the W446 plan row, for after this commit.

## What changed (voiced)
- **center**
  - Facts :807 (299/300) now reads: "Under IHUK's In-House Rules, not the Elite League, "the linesperson shall immediately replace the centre for all violations"… (Rule 76); in an Elite League game IIHF 76.7 counts a premature move as a violation and re-drops; a team's second on one draw is a bench minor". HEAD said this held "across the Home Countries".
  - The author corrected safety's first sketch, which had dropped 76.7's same-team condition. Safety's second fix closed an antecedent that had narrowed the bench-minor trigger to two premature moves.
  - Study Q4 now reads "what IHUK's In-House Rules change".
- **uk_rules**
  - :228 now reads: "Under In-House Rule 9.8, the gap… must not exceed 2.5 cm… The Elite League's Casebook sets no figure, so an Elite League game follows IIHF Rule 9.6… Keep the gap to one finger anyway." HEAD said "the figure is British".
  - :407 now reads: "The one clear softening is the Elite League's plain willing fight, where its Casebook writes the automatic game misconduct only from a second major. The In-House fighting amendment for NIHL, SNL and BUIHA Varsity never says whether it drops the ejection, so under the In-House Rules plan on it." HEAD's "The main domestic softening is the plain willing fight" told In-House readers a fight is softer. That was permissive, and the rules-verifier ruled it WRONG.
  - :140 and :148 use "the edition the In-House Rules name" in place of "Britain's 2025/26". 2026/27 Situation 60.13 reaches an Elite League game.
  - :246, :272, :43 and :294 now say "In-House" where they said "domestic" or "British".
  - :142: "there" replaced with "in it".
- **equipment**
  - :789 and :555 now read: "in IHUK-sanctioned games outside the Elite League, In-House Rule 5.4 requires a coach or manager to check…". EIHL 5.4 is a bench limit only.
  - The Sources trailer and notes record that EIHL 5.4 was read.
- **faceoffs**
  - Facts :1175 now reads: "the Elite League keeps the challenge (Casebook 38.5), but EIH and SIHA competition has none (In-House Rule 38)". HEAD said "the book British hockey plays under".
  - The :1433 edition note is scoped to match.
- **game_management**
  - The header :4–5 and :44 now read "the IIHF rule is your base… amended by the Elite League's Casebook or the In-House Rules". HEAD said "it is yours".
  - The shootout heading is re-scoped.
  - The coin toss now carries "though the Elite League gives the home team that choice, as the NHL does", in the same spoken unit (EIHL 84.4; NHL 84.4).
  - :793 and facts :771 now read "the home team choosing whether to shoot first or second".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** every changed site OK. Two wording fixes: equipment :934 ("replaces the In-House bench rule" — the Casebook never mentions the In-House Rules) and gm :793. One WRONG outside the diff: uk_rules :407 (permissive). A finding for the plan: Casebook 9.5 omits the elbow-pad sentence. **Confirmation:** all six fixes OK, and a final pass over the diff found nothing new. **Final read:** centre :807 OK against 76.7. |
| safety-reviewer | **First read:** no Critical or Major. Minors at centre :807 (premature move heard as free) and uk_rules :228 ("it" heard as the strap). **Confirmation:** CLEAR, with no "Important." lost. One optional minor, centre :807's antecedent ("a second" narrowing to premature moves), was applied with safety's text. |
| site-reviewer | Five pages at 400×812 DPR 2 light/dark and 1440 light, on the 10:32:30 build. Every worst window unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text or an author correction confirmed by a reviewer:
- centre :807: "by that team", then safety's antecedent fix.
- uk_rules :407: "second major", following Casebook 46.1's own "2nd Major Penalty".
- equipment: the author used "IHUK-sanctioned", the rule's own scope, in place of the census's league list.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 10:32:30; the newest content file is center.md at 10:31:19.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0, and `--panels --file` reports 0 on all five files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | In-House 5.4 (IHUK and SIHA), 9.8, Section 6, 10.3, 38, 76, jersey rule; EIHL Casebook Preamble, 5.4, 38.5, 46.1, 84.1/84.4; IIHF 2026/27 9.6, 76.3/76.4/76.6/76.7, 84.4, Situations 38.11/38.20/60.13; v1.1 46.6; NHL 84.4 |
| D2 Exceptions | 76.7 same-team bench minor; SIHA 5.4 has no check |
| D3 Cross-book divergence | In-House vs EIHL vs IIHF, across faceoffs, chin strap, challenge, shootout and fighting |
| D4 Citation integrity | the equipment notes provenance corrected |
| D5 Provenance | EIHL 5.4 read and recorded |
| D6 Negative existence | "the Casebook never mentions the In-House Rules" (searched) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | gm facts :771 and body :793 fixed together |
| D10 Key-facts | centre :807 and faceoffs :1175 voiced alone |
| D11 Reader safety | safety-reviewer, three reads |
| D12 Read-aloud | coin toss and its exception in one unit; "Keep the gap" |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed
- **Plan row From W445:** Casebook 9.5 elbow-pad omission; SIHA 5.4 reach; gm's base edition; uk_rules :408 errs harsh; facts lines at their cap; the "outside the Elite League" inference; whether the Casebook copy on disk is current.
- **W446 row:** the goaltender facts :1268 permissive charging line and others from the mirror census.

## What this method could not have found
- British claims worded without a place term.
- EIHL regulations outside the Casebook.
- Real synthesised audio.
