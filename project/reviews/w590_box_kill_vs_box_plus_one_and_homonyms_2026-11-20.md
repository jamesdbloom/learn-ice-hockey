# W589–W590: box kill vs Box+1 and other same-named systems (20 November 2026)

## W589 census (content-reviewer, read-only)

The census searched 812 lines matching 1-3-1, 2-3, box, overload and +1, filtered to 542 and read in context. It found 26 rows: 3 at Tier 1, 10 at Tier 2 and 13 at Tier 3. The table is `w590_homonym_rows_2026-11-20.tsv`.

**Tier 1, all one clash:**
- A box kill slides as one unit (special_teams).
- The Box+1 box rotates one position behind the +1 (defensive_zone_coverage). Box+1 is the rec and beginner default.
- Three bare "box" or "+1" lines let a listener apply one to the other: st :513, st :1244 (Common Mistakes) and dzc :371.
- The root cause is dzc :373: "Not a penalty-kill box — that is four players, two high and two low". That is true of both shapes, so it did not tell them apart.

## W590 edits

### A: special_teams and dzc

All 12 rows were applied. The agent searched by claim rather than by line, and qualified two more bare-box bodies (st :526, dzc :367).
- dzc :373 now states the discriminator: "a kill box slides as one unit; Box+1 is a five-player even-strength shape whose box rotates one position each time the +1 role passes on".
- dzc :383 carries the same contrast in the body.
- "The box" meaning the penalty box became "penalty box" at st :29, :957, :959, :960, :965 and :1343.
- **CM :1235 (the counting rule):** the old rule ("two at the point means an umbrella, an overload or a 2-3"; one means a 1-3-1) contradicted the page's own umbrella and overload. It is replaced by a shape rule: "two at the points with three low is a 2-3, three high in an arc is an umbrella, and four on one side is an overload".
- **After review:** the owner line st :513 now reads "As usually taught, a box kill slides…". This makes it a teaching norm, not a law.

**Layer test for slide versus rotate:**
- special_teams: body, facts and Common Mistakes qualified. Key Takeaways, Key focus and Overview never state it.
- dzc: body and facts qualified.

### B: eight other files

All 14 rows were applied.
- defender, center, winger, shooting: "1-3-1 power play", "2-3 power play", "Overload power play", "box kill".
- on_ice: "empty penalty box".
- zone_entries :879 and its body twin: "strong-side (stacked) 2-1-2", the owner's name for it.
- **Glossary:**
  - 1-3-1 now says "four different shapes", adding the regroup.
  - Overload gains the defensive strong-side sense and the stacked forecheck.
  - Penalty kill now says its box slides and is not Box+1.
  - New Box+1 entry: even strength, the box rotates, the introductory structure, and "ask what your team plays".
- scanning :440: "three on the strong side" → "four", matching every overload definition in the corpus.

### C and D: diagram captions

A diagram-reviewer audited the captions read-only. The diagram agent then edited them:
- **pk-box:** adds "When the puck moves, all four slide together as one unit — a box kill does not rotate." On winger and defender this caption follows the wedge+1 handover bullet and was the only carrier.
- **dz-box-plus-one:** the head-count discriminator is replaced with slide versus rotate, as its own sentence to keep check_caption_negations clean.
- **pp-2-3:** the same shape rule as CM :1235.
- **"power-play 1-3-1":** in pk-box, pk-diamond and pk-wedge-plus-1.
- **dump-flip-over-trap:** "neutral-zone 1-3-1".
- **never-both-defencemen-to-the-puck:** "defensive strong-side overload".
- **pk-wedge-plus-1:** a handover sentence was added, then removed after review. It weakened the antecedent of the level caveat "Whether that pressure may end in a hit", and both hosts already state the handover.

No caption is a shared constant. No ⚠️ was added, removed or moved.

## Review

**safety-reviewer: OK, with one Minor.** The Minor was the wedge sentence, now removed. The reviewer confirmed:
- The slide-versus-rotate pair is consistent across both pages, the glossary and both captions.
- It is not a law (non-negotiable 7): the page already frames which kill shape you run as a coaching choice. The "as usually taught" qualifier was the reviewer's suggestion.
- The shape rule matches the 1-3-1, umbrella, overload and 2-3 sections.
- The glossary entries match their owners.
- The scanning "four" is right.
- Every "penalty box" substitution is right.

## Rows

**Closed:** homonym collisions (overload, 1-3-1, box, +1).

**Still open:** homonyms not in the census: umbrella, diamond, spread, lock, trap, stack, "the three across", and 1-2-2 / 2-1-2 / 1-4 used for both forecheck and neutral zone.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary, which rebuilds the diagrams: exit 0, after every edit (`scratchpad/build_w590.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 10 files.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **An outside coaching source for "a box kill does not rotate".** This is the page's long-standing description, now marked "as usually taught".
- **Audio.** Not rendered.
- **Box-kill movement described without the word "box".**
