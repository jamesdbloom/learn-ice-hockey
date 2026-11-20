# W515: rink sides in the attacking frame, a mirrored left-wing lock, a goalie head match, and "one meant to injure" (20 November 2026)

## The owner decision this wave implements

On 20 November 2026 the owner was asked how the beginner rink map should label sides. The map is hosted in rink_map §5 and getting_started, which tells readers "Take the names from it". It printed "right point", "right half wall" and the other right-side labels along the top of the picture. For a player attacking the right-hand net, the top is their left, and the rest of the corpus names sides that way. The owner chose: **label sides in the attacking frame.**

## Agents and files

| Agent | Files | Rows |
|---|---|---|
| A | site/scripts/lib/rink.mjs; site/src/data/rink.json (comments only); rink_map_and_glossary.mjs; built diagrams | W514(1) |
| B | read-only census of every side-naming describe and caption | W514(2) |
| C | special_teams.md | W506(4) |
| D | center, goaltender, forechecking_systems, game_management, body_contact_and_battles | W513(10) |
| E | forechecking_systems.mjs; built diagrams | W515(1), from census B |

## Review

| Reviewer | Scope | Critical / major | Findings |
|---|---|---|---|
| diagram-reviewer (rink map) | the generator, caption and comments diff; before and after PNGs; built SVG coordinates; check_leaders, check_label_paint before and after | none | Every sided label is correct for an attacker skating right. Every leader resolves to its own dot. Paint crossings went from 8 to 7. Only rink-map-end-zone uses the label overlay. One caption minor, repaired. |
| diagram-reviewer (lock) | forecheck-2-3-lock and forecheck-angling diffs; both PNGs viewed | none | Lock winger is now on the attacker's left, matching the title, caption, host and sibling nz-left-wing-lock (before, the two diagrams disagreed). Keep the puck-side placement. Two describe minors, repaired. Optional minors filed as W515(6). |
| safety-reviewer (1) | special_teams :1134 and the nine "one" → noun edits; HC 7.3–7.7, 8.5, 9.2; USA Hockey 602(a); CARHA 53 and 54; NHL 59.4, 21.1; IIHF 59.3 | none | Two minors, both repaired. (i) The new goalie sentence lacked 7.6(c)/7.7(c)'s intent limb. (ii) center :790: "CARHA puts a game misconduct on it" now heard "it" as the hit meant to injure, which understated CARHA. |
| safety-reviewer (2) | the follow-up edits: center :790, bcb :801, goaltender :1632/:1710, forechecking :983/:984, special_teams :1134 | none | Every noun names the act its sentence prices. One minor, repaired: the goalie match sentence was not tied to the head, which was harsher than the book (an open-ice hit from behind on a defenceless goalie is 7.5(a), minor plus game misconduct). |

No reviewer re-read these final repairs:
- special_teams :1134 → "If the hit reaches the head of a goalie who cannot protect themselves, or you meant to injure them…"
- The two forechecking describe tweaks.
- The rink-map caption wording.

Each is confined to its finding and taken from the reviewer's sketch. This is the C11 terminating case.

## What changed

**Rink-map side labels.**
- **Generator.** `rink.mjs`'s sided-position loop now prints +y (top) as "left" and −y as "right". Only `rink-map-end-zone` sets `labels: true`, so no other diagram changed. The neutral-dot labels inside that map switched too.
- **Caption.** It adds: "Left and right are as the attacking team sees them, skating toward the net on the right of the picture."
- **Comments.** The rink.mjs header and rink.json's positions `$comment` now warn that anchor keys are named +y = right and so are mirrored for an attacker: the attacker's left half-wall is `half-wall:right`. No key was renamed.

**Mirrored left-wing lock (found by census B).**
- **The defect.** forecheck-2-3-lock drew its lock winger at `half-wall:left` (58, −38.5), the attacker's right, under a title, caption and host that all say "left winger".
- **The fix.**
  - The lock winger now sits at `half-wall:right` (58, 38.5), with its route mirrored.
  - The describe now says "on the top wall — the attacker's left and the puck side — nearer the blue line than the opposing winger there".
  - forecheck-angling's frameless "near side" and its over-described route were rewritten to match the drawing.

**Census B's other results.**
- **Correct.** Every other side-named describe was correct:
  - own-end sides from the defending team's direction;
  - goalie's-view sides stated;
  - attacking-end sides in the attacker's frame or in picture terms.
- **Filed as W515(2)–(4):**
  - about 20 near/far phrases with no stated frame;
  - comment-only mirrors in seven modules;
  - what the census could not check.

**special_teams goalie head match (W506(4)).** W514's deletion of a duplicate ladder had left Hockey Canada's head match for a defenceless goalie only in a facts line. :1134 now reads "⚠️ **If the hit reaches the head of a goalie who cannot protect themselves, or you meant to injure them, that is a mandatory match** (7.6(c); 7.7(c); for intent, 8.5(c) too). Short of that, …".

**"one meant to injure" (W513(10)).**
- **Found.** A case-insensitive sweep found 12 sites; the plan row's own grep was case-sensitive and missed two capitalised ones. Nine had "one" landing on the wrong noun. Each became the act:
  - "a charge", "a hit", "a cross-check";
  - "a check" (plus "a reckless check");
  - "a head hit", "a grab";
  - "a violent check".
- **Follow-ups.** These repaired the pronouns that the new nouns then captured:
  - center :790 now says "on checking from behind". The sketch's "any hit from behind" was rejected, because CARHA 53(a) needs an intentional hit.
  - goaltender :1632 and :1710 now say "Once a hit from behind reaches your head".
  - forechecking :983 and :984 now open their bullets "Once a hit from behind reaches the head".

## Rows

- **Closed:** W514(1), W514(2), W506(4), W513(10), W515(1), and the forecheck-angling part of W515(2).
- **New, From W515:**
  - (2) near/far wording;
  - (3) comment-only mirrors;
  - (4) census limits;
  - (5) list items opening with a bare "it";
  - (6) optional lock-diagram minors.
- **Also new:** W514(5), "a reckless / forceful / violent one" antecedents.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check_zones`, `check-arrivals`.
- `build-diagrams`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 5 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered by both safety-reviewers (books above). |
| D2 exceptions | Covered: 7.7's minimal-violence carve-out (harsher direction kept, as the conservative reading); 7.5(c)'s boards condition, which drove the head scoping; CARHA 53(a)'s "intentionally". |
| D3 cross-book divergence | Not engaged beyond the above. |
| D4/D5 citations | Not engaged. No URL added. |
| D6 negative existence | Census: no other diagram uses the label overlay, and no other side-named describe is mirrored (true negatives with stated limits, W515(4)). |
| D7 cardinal rule | Covered: the lock caption still names the "whichever winger is highest" variant. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Partly covered. Pronoun follow-ups were checked for the sentences next to each edit only (row W515(5)). |
| D10 facts layer | Covered: center :763 and bcb :1881 facts edits, under their caps. |
| D11 reader safety | Covered: two safety-reviewers. |
| D12 read-aloud integrity | Covered by agent renders of every changed unit. The final special_teams and describe repairs were rendered by their agents. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links; antecedents. |
| D15 rendered site | Covered by two diagram-reviewers who viewed the changed PNGs: rink-map-end-zone (before and after), forecheck-2-3-lock and forecheck-angling. No phone viewport or dark theme. Chrome not connected. |

## What this method could not have found

- **Pictures mirrored with no side word in their text.** The census found the lock only because its title said "left".
- **Routes, handedness and drills.** Route and arrow directions, forehand/backhand claims against drawn sides, and the drill SVGs.
- **Beginner and coach readings.** Whether a beginner notices the caption's frame clause, and whether coaches read the puck-side lock as a left-wing lock.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
