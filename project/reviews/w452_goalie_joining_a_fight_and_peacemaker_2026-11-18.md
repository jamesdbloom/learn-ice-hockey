# W452: joining a fight no longer "ejects you in every book" on the goaltender page, and two Body Contact lines are exact (18 November 2026)

**Content files changed:**
- positions/goaltender.md
- technique/body_contact_and_battles.md

**Also changed:**
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **Plan rows:**
  - From W451 (1), the goaltender "every book" claim.
  - From W451 (2), the peacemaker count.
  - The W451 commit gate's note that the :1928 sentence leaves out the referee's discretion.
- **Brief:** scratchpad/w452/brief.md.
- **Authors:** two agents, one file each.

## What changed (voiced)

### goaltender
The claim was in four layers, and all four are changed.
- **facts :1170:** "either can eject you in every book, so never count on a let-off; both do under Hockey Canada and CARHA, and under USA Hockey fighting or going in first does".
- **body :1188:** "⚠️ **Joining a fight can end your game in every book, and does under USA Hockey, Hockey Canada and CARHA.**"
- **CM :1695:** "can end your game in every book — never count on being let off — and breaking one up does in three".
- **KT10:** "⚠️ **Joining the fight can end your game in every book; never count on a let-off.**" It is 59 words and keeps its instruction.

HEAD said "ejects you in every book". That was false for the books with a waiver:
- NHL and PWHL 46.7, and EIHL Casebook 46.2, waive it if the opponent was clearly the instigator.
- IIHF 2026/27 46.12 Note waives it for an unwilling combatant.

There is no goalie-specific ejection to rescue the claim. NHL and PWHL 27.6 and IIHF 27.5 are minors.

### body_contact_and_battles
- **:1925:** "The Casebook names the peacemaker and refuses the intent defence".
  - The count "three price the peacemaker by name" is correct: CARHA 59(b), HC 7.10(e)(ii), and USAH Casebook 615 Situation 24. USAH's rulebook itself never uses the word.
  - Heard alone, though, the USA Hockey sentence said only "first to intervene", so a listener counted two. It now names the peacemaker.
- **:1928:**
  - "imposes, **at the referee's discretion,** the third-man game misconduct" now matches v1.1 46.7's own wording.
  - "The 2026/27 book **allows a waiver only**…" replaces "waives it only", because 46.14 says "may be waived".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All six sites OK. For the In-House Rules, "can" still holds: Section 6 leaves the third-man rule unamended, the NIHL makes the last five minutes an automatic game misconduct, and In-House 101 ejects on any women's major. Noted, not a defect: under 2025/26, 46.7 usually spares a pure peacemaker in a fight where a game misconduct is already being imposed. |
| safety-reviewer | CLEAR. "Can … never count on a let-off" does not make joining sound survivable. KT10 keeps its instruction and its "Important.". |
| site-reviewer | Two pages at 400×812 DPR 2 light/dark and at 1440 light, on the 12:17:00 build. Worst windows unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. The :1188 and KT10 runs are glyph-led warn-inline. It noted that :1188 adds "does under three", while KT10 and CM put the three on the breaking-up half. Both reviewers had read all four sites. |

### C11
The coordinator wrote no content. KT10 uses "the fight" rather than "it", so that "it" does not point back to the crease. That was the author's own choice.

The coordinator searched every page for "ejects… every book" about fighting and found no other site. One different act stands as a candidate: special_teams facts :659 says "a hit from behind ejects in every book".

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 12:17:00; the newest content file is goaltender.md at 12:13:57.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
  - check_counts --update made no change.
  - check_callout_flow --bare reports 0, and `--panels --file` reports 0 on both files.
  - check_readability reports 0 long Key Takeaways.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 27.6, 46.7, 46.16; PWHL 46.7, 46.15; IIHF v1.1 46.1/46.6/46.7/Table 6, 2026/27 27.5/46.1/46.12/46.14; USAH 615(a)/(d), Casebook 615 Sit 24; HC 7.10(e)(ii); CARHA 2026 37(d), 59(b); EIHL Casebook 46.2; In-House Section 6, 101 |
| D2 Exceptions | 46.7 instigator waiver; 46.12 unwilling-combatant waiver; 46.14 |
| D3 Cross-book divergence | mandatory (USAH, HC, CARHA) vs waivable (NHL, PWHL, IIHF, EIHL) |
| D4 Citation integrity | CARHA 37(d) confirmed for the 2026 book |
| D5 Provenance | not engaged |
| D6 Negative existence | "peacemaker" swept across all 66 source texts; no goalie-specific ejection rule found |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | all four goaltender layers repaired together |
| D10 Key-facts | goaltender :1170 voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | bcb :1925 USAH sentence now names the peacemaker for a listener |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed
- **special_teams facts :659:** "a hit from behind ejects in every book (IIHF, and Hockey Canada on the head: plan on it)". Every other page says "in most books… can in every one". This is a candidate for the same "can" repair.

## What this method could not have found
- League or competition regulations not on disk.
- Whether "a let-off" means anything to a listener who has not heard the waiver explained.
- Real synthesised audio.
