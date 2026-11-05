# SG170: five claims SG166 corrected on one page each, propagated to every other copy a census found, on ten pages (5 November 2026)

**Files:**
- content/systems/game_management.md
- content/positions/goaltender.md
- content/foundation/rules_primer.md
- content/positions/defender.md
- content/technique/body_contact_and_battles.md
- content/technique/shooting.md
- content/positions/center.md
- content/systems/zone_entries.md
- content/systems/forechecking_systems.md
- content/off-the-ice/team_play_and_culture.md
- project/plans/OPEN_ITEMS.md

## Source
SG166's reviews found five claims stated cheaper than the book on one page each. The owner had asked to "keep working on all items of the plan". A read-only rules-verifier census (SG169) then swept every `content/` file for other copies of the five claims, in every layer.

## The five claims (verified on disk)
1. **USA Hockey, puck shot out during a stoppage.** 601(c)(10): "A misconduct penalty shall be assessed…". 610(c) also prices it as a minor. The book never says which governs. House form: lead with "assume a misconduct (601(c)(10))", and keep the disclosure, but not leading.
2. **Hockey Canada major "on the violence".** 7.6(b), 7.5(b) and 7.2(b): "At the discretion of the Referee, based on the degree of violence of the impact, the Referee may assess a Major penalty and Game Misconduct penalty", mandatory if injury results. 7.3(b) has the same structure. House form: "on the violence, mandatory if hurt". A line pricing the major only "if hurt" is cheaper.
3. **USA Hockey 608 checking from behind.** The triggers include RECKLESS (608(b); Casebook 608 Situation 1 instance 3, "regardless of whether or not board contact is made").
4. **Casebook 607 Situation 5.** Only "can be legally checked" depends on checking being allowed. The possession limit and the avoidable-contact floor apply in any game.
5. **"Likely multi-game suspension"** on USA Hockey matches (owner ruling 25 Oct).

## What changed
- **Claim 1:** game_management facts :112, :1105, :1177 and body :1191; goaltender facts :736, body :752 and CM :1645; rules_primer :555; defender facts :79.
  - goaltender :736 also gained 601(d)(9) (a game misconduct toward an official or spectator).
- **Claim 2:**
  - rules_primer :427, :438, :472, :487 and :584;
  - defender facts :316 (the Junior/Senior limb restated as "a must"), :326 and :488 (7.2(b) boarding);
  - body_contact facts :751 and body :786;
  - goaltender facts :1379;
  - game_management facts :897;
  - center :123 (7.3(b), found by the rules-verifier);
  - shooting's Sources trailer.
- **Claim 3:**
  - center :775;
  - zone_entries :804;
  - forechecking facts :752 and body :767;
  - body_contact facts :753.
- **Claim 4:**
  - forechecking facts :865: "checking-game only" now sits on "legally checked" alone.
  - rules_primer :780: now reads "Outside the privileged area, in any game, you may physically engage them only…".
  - rules_primer :856.
- **Claim 5:**
  - team_play :283 and :285: "for any match";
  - rules_primer :489 and :1123;
  - zone_entries :804;
  - forechecking :752;
  - body_contact :753.
- **Wording:**
  - game_management :897 and forechecking :754: "off the head" became "that misses the head" or "with no head contact", because it could be heard as "glancing off the head".
  - body_contact :751: "high cross-check" is now joined by "or" to the mandatory list.
- **Refuted by an author:** goaltender facts :1375. It prices a single act (head first into boards or frame), not a trigger list, and the body :1273 carries the full list.
- **Left, in the plan:**
  - body_contact Kneeing table cell: no room for "likely multi-game".
  - team_play :401: 601(e)(1) is outside the SDP and needs an owner call.
  - center facts :754: "Hockey Canada off the head", at the cap.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only, all `content/`) | Found the CHEAPER copies listed above, plus CORRECT and HARSHER copies left as they are |
| rules-verifier (game_management, goaltender, rules_primer, defender, team_play) | Nothing cheaper or false. Wording fix game_management :897; older gaps goaltender :736 (601(d)(9)) and team_play :283 (multi-game). All fixed |
| rules-verifier (body_contact, shooting, center, zone_entries, forechecking) | Nothing cheaper or false. Multi-game gaps at body_contact :753, zone_entries :804 and forechecking :752; out-of-diff center :123 (7.3(b)); wording "driven" at :751. All fixed |
| safety-reviewer, also standing in for the content dimension (4 rendered) | 8 of 10 SHIP. FIX Major: defender :316, where the Junior/Senior limb was heard as discretionary. FIX Minor: game_management :897 "off the head". Both fixed. 0 LOST markers |
| rules-verifier, narrow re-check of all repair text | Every site PASS, nothing cheaper than HEAD. FIX: body_contact :751, where "high cross-check" could be heard as discretionary (fixed in the reviewer's wording). Nit: rules_primer :780 "There" (fixed by naming the area) |

### C11
- Four authoring agents made every edit, on disjoint file sets. The coordinator wrote only the plan and this record.
- The final edits (body_contact :751, rules_primer :780) follow the re-check and are made in the stricter direction or as a prose clarification.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all ten files. Spoken "Important." counts were unchanged in the authors' renders.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 plus the census |
| D2 Exceptions | 601(c)(10)/610(c) conflict disclosed; HC 7.2/7.3/7.5/7.6/7.7(b); Casebook 607 Sit. 5, 608 Sit. 1 |
| D3 Divergence | HC minor/female vs Junior/Senior; USA Hockey triggers |
| D4 Citation integrity | 601(d)(9) added; "7.5–7.7" range; 7.2(b) and 7.3(b) verified |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "The Casebook has no situation on which governs" (flattened search) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | SDP ranges unchanged; "likely multi-game" per the owner ruling |
| D9 Summary layer | Per-file layer tests by every author |
| D10 Key-facts layer | 14 facts lines rewritten, compared limb by limb with HEAD, all within caps |
| D11 Reader safety | safety-reviewer plus the safety direction in the re-check |
| D12 Read-aloud | game_management, goaltender, body_contact and defender rendered; "7.5–7.7" and "Jr/Sr" confirmed voiced correctly |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes; no marker lost. No site-reviewer (declared) |

## What this method could not have found
- A copy of a claim worded without the census's search terms.
- A layer built on the old answer that never states it.
- Whether "in any game" for Casebook 607 Situation 5 is how USA Hockey officials apply it. This is an inference from the 604(c) Note.
- Hockey Canada "ejection" wording vs its separate Game Ejection penalty (plan row, found in SG169's re-check).
