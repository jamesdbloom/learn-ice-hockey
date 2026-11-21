# W594–W595: pronoun openers, caption echoes, and the trapezoid "band where a rim dies" (20–21 November 2026)

## W594 censuses (read-only)

**Pronoun openers (content-reviewer).** `check_unit_openers` (default mode, all layers) found 138 hits, and `check_facts_antecedents` found 9. They resolve to 12 defects: 2 at Tier 2 and 10 at Tier 3. The rest land correctly: opponent "their", labelled openers, list continuations, quotations. Table: `w594_pronoun_opener_rows_2026-11-20.tsv`.

**Caption echoes (diagram-reviewer).** `check_caption_echo` found 17 hits.
- **10 KEEP:** four region definitions matching rink_map, two safety limbs, two captions that are the only carrier of a condition for another host, and two that carry the goal-frame limb for three hosts.
- **7 CUT:** narrative restatement, plus one doubled "team choice".

## W595 edits

**Openers (one agent, 10 files).** 14 units now name their subject:
- uk_rules :306 names the three competitions.
- puck_support :72 and :378, scanning :472, how_to_watch :325, mental_game :325, practice :146.
- zone_entries :981 and :1021, plus a grammar fix at :984.
- special_teams :211 and :213, "the spread".
- puck_handling :833, defender :151.

**Trapezoid (rule-bearing).** Fixing defender :151 surfaced a false claim, verified by a rules-verifier:
- **The rules:** NHL 1.8 (`nhl_rules.txt:826-833`) puts the line 8 ft from each post at the goal line and 11 ft at the end boards. Rule 27.8's stale text (`:3445-3463`) starts at 6 ft and reaches "twenty-eight feet (28') apart at the end boards", the same end points.
- **What that means:** the 2014-15 widening is a wedge, two feet wide at the goal line and nothing at the boards. "That two-foot band a side is exactly where a rim dies" was false, and it leaned permissive: a defender could leave a dying rim to a goalie who cannot legally play it (a delay-of-game minor).
- **The fixes:**
  - defender :151 now reads "…a wedge, two feet at the goal line and nothing at the boards: a puck dying in it is your goalie's, one in the corner is yours".
  - defender :156 now reads "…a puck that dies beside the net near the goal line is now your goalie's to play, but a rim along the boards leaves the trapezoid exactly where it always did".
  - rink_map :292 now says "two feet on each side at the goal line".
- **Scope:** the NHL and IIHF scope is kept. The IIHF's 1.8 (6.80 m / 8.60 m) is the same painted shape. The PWHL, USA Hockey, Hockey Canada, CARHA and the British books have no trapezoid.
- **Elsewhere:** the diagram already draws Rule 1.8, and no caption carries the claim. Two Sources trailers' "widened two feet on each side" describe the cited NHL announcement and stay.

**dtr :440.** A Rule facts line had a comma splice; it now reads "…race by name; USA Hockey's 624(d)…". The content was checked against `usah.txt:4445`.

**Captions (diagram agent).** Seven were cut:
- defend-squash-and-slide: 427 → 239, now names the system.
- goalie-breakaway-retreat: 606 → 250.
- goalie-depth-failure-modes: 383 → 200.
- nz-1-2-2-trap: 512 → 383. F1 was checked against the drawing.
- oz-cross-the-road-yourself: the opening only.
- defender-two-on-one: 472 → 316.
- six-on-five-shape: one "team choice" instead of two.

Every disclosure and safety limb is kept. Every dropped item is in the prose beside the marker in every host. No ⚠️ changes.

## Review

**safety-reviewer: OK, nothing to fix.**
- Every named subject is right and no narrower.
- The trapezoid geometry was re-derived from 1.8 and 27.8, with the NHL and IIHF scope kept.
- For each trimmed caption, every host carries what was dropped. Examples: goaltender :933 carries the what-to-watch split; defender :821 carries "ask which your team plays"; zone_entries :1128/:1133 carry the systems-not-laws Convention and the provenance.

## Rows

**Closed:**
- The W594 pronoun and facts-antecedent census.
- The caption-echo hits judged CUT.

**Still open:**
- Echoes two blocks away and paraphrased echoes, which the tool cannot see.
- net-front-walk-out-direction: an optional host trim that needs a safety ruling.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary, which rebuilds the diagrams: exit 0, after every edit (`scratchpad/build_w595.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 12 files.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Where a rim actually stops on non-NHL rinks.**
- **Pronouns mid-unit, or inside captions.**
- **Audio.** Not rendered.
