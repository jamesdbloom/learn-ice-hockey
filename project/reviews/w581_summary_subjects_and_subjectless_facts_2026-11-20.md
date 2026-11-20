# W580–W581: summary units and subjectless facts lines name their subject (20 November 2026)

## W580 census (content-reviewer, read-only; W518(3) follow-on)

The census applied the W579 method to the Key focus, Overview, Key Takeaways and Common Mistakes sections, using `check_unit_openers.py --loose --demonstratives` with md_to_speech's own parse.

**Result:** of 176 hits, 15 were defects. It also found 10 facts lines with no subject at all, of which W579 had noted 5. The table is at `scratchpad/w580/defects.tsv`.
- **9 are Tier 1.** Several are wrong landings, where the pronoun attached to the wrong thing:
  - core_principles :45: "Learn these as principles" was heard right after the checking category.
  - breakouts :52: "That ice" was heard after "behind the net".
  - on_ice :769: "these calls are corroborated" was heard after the undocumented calls.
  - uk_rules :37: "Those four documents" was two units from its antecedent.
- **The rest:** the concussion lines body_contact :2133 and conditioning :615, body_contact :2103, center :918 and rules_primer KT7.

## W581 edits (four agents; brief `scratchpad/w581_common.md`)

All 25 rows were applied, plus same-claim siblings. Each agent read the unit after its edit to check for a new wrong landing.

**Safety lines:**
- body_contact CM :2103: "Veering into the player you are angling at the last instant to finish the angle".
- body_contact :2133 and conditioning :615: "a possibly concussed player", W579's noun.
- center CM :918: "a hit into a player's back ends your game…".
- rules_primer KT7: "See an opponent's numbers?".

**Scope:** uk_rules :37: "The four IHUK *Rules of Competition* read for this document are all that is settled here".

**The on_ice slogan, at six sites:** "the player who can see the play makes the call". "The threat" was rejected as narrower, because the slogan also covers "time", outlet and line-change calls.

**Subjectless facts lines:**
- special_teams :176/:177: "The overload…".
- zone_entries :591, :632–:634 ("The drop pass suits…"), :693 ("Use the soft dump…") and :709.
- forechecking :467: "The 1-4 is…".
- dtr :314–:316: "your man".

**Siblings found by the agents:**
- goaltender facts :932 now matches CM :1685: "the shooter's whole plan".
- center facts :32: "Put the puck to the outside". After W579's rename, "it" had come to land on "shot".

No ⚠️ was added, removed or moved.

## Review

**safety-reviewer: OK, nothing to fix** (15 files, 33 edits).
- No hazard is narrowed and no rule changed.
- "Possibly concussed" is not softer than "suspected", and every CRT6 limb is intact.
- The uk_rules scope matches the four files listed in sources/README.md.
- "The play" is agreed.

## Rows

**Closed:** the W518(3) summary sections, the subjectless facts lines and dtr :314–:316.

**Still open under W518(3):**
- Tier 3 facts rows.
- About 1,500 body hits.
- The 25 `Countered by:` lines and the `Position:`/`Goal:` lines.
- The near-misses: team_play :725/:726 and special_teams :1338.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_links --quiet`: run after this record was written.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w581.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost in every file.

## What this method could not have found

- **Wrong landings more than one unit away.**
- **Audio.** Not rendered.
- **Other documents carrying the on_ice slogan in its old form.**
