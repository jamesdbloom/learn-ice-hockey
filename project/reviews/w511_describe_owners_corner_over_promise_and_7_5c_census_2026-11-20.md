# W511: whose net a describe names, the corner over-promise, and the 7.5(c) census (20 November 2026)

## Agents and files

| Agent | Files | Rows |
|---|---|---|
| A | site/src/diagrams/body_contact_and_battles.mjs, skating.mjs | W508(19), W507(3) |
| B | site/src/diagrams/offensive_zone_play.mjs, rink_map_and_glossary.mjs | W508(18) |
| C | content/technique/body_contact_and_battles.md | found by the safety-reviewer in this wave |
| D | read-only census | the Hockey Canada 7.5(c) sweep |

Census D's output is `hc_7_5c_intent_limb_census_2026-11-20.md`, which is now plan row W511(1). The coordinator rebuilt the diagrams once, after A and B finished.

## Review

| Reviewer | Scope | Critical / major | Findings |
|---|---|---|---|
| diagram-reviewer | every changed describe and caption (30 fields), 13 PNGs viewed, diagrams.json compared to source for all 204 ids | **one major** (propagation, outside the diff) | The edited describes and caption are correct. The major and the minors are listed below. |
| safety-reviewer | the corner caption, both hosts rendered; then a re-read of agent C's repair | **two majors** (the same propagation), repaired; then one minor, repaired | See below. |

**Diagram-reviewer.**
- The 12 offensive_zone_play describes now name the opposition net; the goalie is `team: 'opp'` in every one, and every host frames them from the attackers.
- The neutral "One half of the rink, a net at the right" wording is right for the unteamed region maps. For the-trapezoid it is better than before, because goaltender.md frames that diagram as "behind your net".
- the-point-and-the-half-wall correctly keeps the attacking frame.
- **The major:** body_contact_and_battles.md still made the over-promise the caption had dropped, in two body sentences and two facts lines.
- **Minors**, all filed as plan rows W508(22)–(25):
  - puck_support_and_spacing.mjs openers;
  - rink-map-end-zone's printed labels;
  - the trapezoid label;
  - how_to_watch_hockey :84.

**Safety-reviewer.**
- It upheld the caption change as true in every book. NHL and PWHL allow a check "immediately following" loss of possession.
- The caption's ⚠️ "Never turn your back… never duck" is still voiced as "Important." in both hosts.
- It raised the same two majors as the diagram-reviewer, then re-read agent C's repair and closed both.
- **The minor:** "a checker already committed can still finish on you" in the facts lines can be heard as permission to finish a check. That is false under USA Hockey 640(b) and Situation 10, IIHF 56.1 with Vulnerable Position, and non-checking play. It was repaired to "can still hit you, legally or not", the reviewer's own sketch. No reviewer re-read that repair after it landed. This is the C11 terminating case.

## What changed

- **Describes, offensive_zone_play.mjs (12).** Each now opens "The attacking half of the rink, the opposition net at the right". The old "the net at the right" did not say whose net it was, and a bare G carries no fill.
- **Describes, rink_map_and_glossary.mjs (11).**
  - Ten unteamed region maps now open "One half of the rink, a net at the right" or "One half of the rink seen from above". Each region exists at both ends.
  - the-point-and-the-half-wall now names the opposition net.
- **Describes, body_contact_and_battles.mjs (5) and skating.mjs (1).** "The defensive half" became "The defending half", matching the other 40.
- **Caption, angle-into-the-corner.** "a chip, rim or reverse decided before you arrive takes you out of the collision" became "…moves the puck on, so you are not pinned on the wall with it". Two stale source comments were annotated.
- **body_contact_and_battles.md.**
  - **"Get off the wall", body :992 and facts :997.** "you avoid the collision entirely and keep possession" became "you are not pinned with it and the play keeps moving. It does not cancel the hit: a checker already committed can still finish on you (whether that is legal depends on your book), so keep your head up". The facts line reads "…can still hit you, legally or not, so keep your head up".
  - **"Chipping and the escape", body :1605 and facts :1610.** "it takes you out of the collision" became "gets the puck away before you are pinned with it. It does not cancel the hit: a checker already committed can still hit you, legally or not, so head up and never your back to anyone coming at you". The facts block had no posture limb before.
  - A corpus grep for "collision entirely", "out of the collision" and "avoid the collision" now finds nothing in content/ or the captions.

## Rows closed

- W508(18), except its last clause (goalie-rebound-corners-not-slot on the spectator page). The commit gate found that clause had vanished when the row closed; it is re-filed as W511(2).
- W508(19)
- W507(3)

## New plan rows

- **W511(1).** The 7.5(c) census.
- **W511(2).** The spectator-page framing carried over from W508(18).
- **W508(22)–(25).** The diagram minors.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- `build-diagrams`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, and "legally or not" is in dist.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: NHL and PWHL possession definition; the host late-hit section; HC 7.5, 7.6(c), 7.7(c) for the census. |
| D2 exceptions | Covered: USA Hockey 640(b) and Situation 10, and IIHF 56.1 narrower windows, which drove the "legally or not" repair. |
| D3 cross-book divergence | Covered: the late-hit window by book stays in the linked section. |
| D4/D5 citations | Not engaged. No citation or URL added. |
| D6 negative existence | Not engaged. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: agent C layer-tested Key focus, Overview, Common Mistakes, Check yourself and Key Takeaways for the over-promise. The census covers 7.5(c) at every layer and is not yet repaired. |
| D10 facts layer | Covered: two Goal lines repaired, voiced alone and confirmed in chunks 092 and 143. |
| D11 reader safety | Covered: the safety-reviewer, twice. |
| D12 read-aloud integrity | Covered by the agent's and the reviewer's renders. The final "legally or not" edit was not re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: the new late-hit link resolves (check_links). |
| D15 rendered site | Covered by the diagram-reviewer: 13 PNGs and diagrams.json against source. Describes are not visible text. Chrome not connected. |

## What this method could not have found

- **Other wordings.** The over-promise in wordings other than the phrases searched, such as "you're safe once it's gone".
- **Whether "can" is heard as ability or permission.** That is a judgement.
- **Screen readers.** A real screen-reader listening of the 29 changed describes.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
