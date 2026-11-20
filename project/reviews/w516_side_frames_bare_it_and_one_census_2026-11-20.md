# W516: side frames in diagram describes and comments, bare-"it" list leads, and the "a reckless one" census (20 November 2026)

## Agents and files

| Agent | Files | Rows |
|---|---|---|
| A | comments only in game_management, practice_and_development, shooting, winger, zone_entries, offensive_zone_play and playing_without_the_puck (all .mjs) | W515(3) |
| B | goaltender, forechecking_systems, neutral_zone_systems, center and defender (all .mjs); built diagrams | W515(2), W515(6) partly, and the lock describe's dashes |
| C | offensive_zone_play.md, defensive_zone_coverage.md, zone_entries.md | W515(5) |
| D | read-only census | W514(5); written up as `one_antecedent_census_2026-11-20.md` |

## Review

| Reviewer | Scope | Critical / major | Findings |
|---|---|---|---|
| diagram-reviewer | the whole diagram diff: three PNGs viewed (forecheck-angling, goalie-safe-outlets, centre-nz-get-it-to-the-outside); every side checked against resolved coordinates; all 204 diagrams' strings compared between source and diagrams.json (0 mismatches) | **one major**, repaired | See below. |
| content-reviewer | the seven content edits, each against its section | none | All upheld. One minor, repaired. |

**Diagram-reviewer: what it upheld.**
- The comment-only edits are clean: no code changed, and every named side matches its picture.
- The center, neutral-zone and defender frame edits are correct.

**Diagram-reviewer: the major.** goalie-rim-stop-or-clear (and, borderline, goalie-safe-outlets) said "the boards on the goalie's right (the top of the picture)" for a goalie drawn behind the net. A goalie killing a rim behind the net faces the end boards, so the top is their left. A screen-reader user gets only the words. Both now use picture terms only: "the boards at the top of the picture".

**Diagram-reviewer: the minors, all repaired.**
- forecheck-angling's caption said "leave the strong-side wall as their route", where "their" could be heard as the forechecker's. It now says "the carrier's only route".
- "Up the goal line" became "along the goal line".
- forecheck-2-3-lock's "the attacker's left" became "your left as you attack". In a forecheck picture the other team carries the puck, so "the attacker" was ambiguous.

**Content-reviewer.**
- **Upheld.** All seven edits. defensive_zone_coverage :755 closes a cross-book misattribution risk: the old bare "it" followed USA Hockey 620(b)'s "careless contact".
- **The minor.** The facts line at zone_entries :733 had the same bare "it". It is now "read the dump".

No reviewer re-read the final repairs. Each is confined to its finding and taken from the reviewer's sketch. This is the C11 terminating case.

## What changed

- **Comments (W515(3)).** Nine comment sites in seven modules named an attacking-end +y anchor "right". Each now names the top or bottom of the picture and the attacker's side, and notes the key is mirrored. No string or coordinate changed.
- **Describes: frameless "near" (W515(2)).** These now state their frame:
  - goaltender: goalie-fifty-fifty-puck (the goalie's right, the top of the picture); goalie-safe-outlets and goalie-rim-stop-or-clear (the top of the picture);
  - neutral_zone_systems: four describes, "the puck's side (the top of the picture)" or similar;
  - center: three describes, "the top of the picture, your left";
  - defender: defender-step-up.
- **The lock and the angling diagram.**
  - The forecheck-2-3-lock describe is now two sentences rather than three dashes in one.
  - forecheck-angling's caption is toned down to what is drawn: the forechecker comes in "along the goal line toward a carrier … to take that side away and leave the strong-side wall as the carrier's only route". The old wording claimed a "curl" and "forcing them back", neither of which is drawn.
- **Bare-"it" list leads (W515(5)).** Seven units, each now naming the thing the listener heard "it" as something else:
  - offensive_zone_play: "If you cannot control the puck", "If the puck is already past you";
  - defensive_zone_coverage: "Once a hit from behind reaches the head, under Hockey Canada";
  - zone_entries: "Why the wide entry works", "When the wide entry fails", "read the dump" (bullet and facts line), "the dump moves the puck".
- **Census D (W514(5)).** 229 matches were classed: 106 DEFECT, 13 DEPENDENT, 27 UNSURE and 83 OK. The worklist is `one_antecedent_census_2026-11-20.md`. No content was changed by it.

## Rows

- **Closed:** W515(2), (3), (5); W515(6)'s angling-caption item. Its lane and label-paint items stay open. The lock describe's dashes were raised by the W515 commit gate rather than listed in row (6).
- **Re-pointed:** W514(5) now points to the census.
- **New:**
  - W515(7): chunk-opening bare pronouns corpus-wide; needs a render-based tool.
  - W515(8): "near side" in forecheck-roles-rotate, entry-high-triangle, entry-vs-standing-up and defend-squash-and-slide.
  - W515(9): an audit of goaltender.mjs's other "the goalie's right/left" describes for goalie position.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check_zones`, `check-arrivals`.
- `build-diagrams`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 3 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Not engaged. No rule content changed; the DZC :755 lead names its section's act, and the rule text is byte-identical. |
| D2–D6 | Not engaged. |
| D7 cardinal rule | Covered: the angling caption's coaching hedge is intact. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Partly covered: the content-reviewer read each edit's whole section. |
| D10 facts layer | Covered: zone_entries :733 repaired and checked against its cap. |
| D11 reader safety | Not engaged. No penalty, contact or technique claim changed. The goalie-frame fix is orientation only. |
| D12 read-aloud integrity | Covered: agent C rendered all three documents before and after. Census D rendered seven documents. The describe edits are screen-reader text and were not rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links; antecedents. |
| D15 rendered site | Covered by the diagram-reviewer: three PNGs viewed, and all 204 diagrams' source compared with diagrams.json. No phone viewport or dark theme. Chrome not connected. |

## What this method could not have found

- **Pronouns at chunk boundaries.** Bare pronouns that open a chunk, outside list leads, would only be found by a render-based tool (row W515(7)).
- **The owner's meaning of "the goalie's right".** Whether it means the crease frame or the goalie's body frame. W516 sidestepped the question with picture terms for a goalie behind the net.
- **Listeners.** How a real screen reader handles "the top of the picture, your left".
- **Reviewer transcripts.** They are not on disk; this record summarises them.
