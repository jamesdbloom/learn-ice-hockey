# W591: the 1-3-1 and the stretch pass, the trap count, two umbrellas, and the second homonym set (20 November 2026)

## Census (content-reviewer, read-only)

The census searched 938 matches for umbrella, diamond, spread, lock, trap, stack, "the three across", 1-2-2, 2-1-2 and 1-4. It found 35 rows: 7 at Tier 1, 12 at Tier 2 and 16 at Tier 3. The table is `w591_homonym_rows_2_2026-11-20.tsv`.

**Tier 1, mostly cross-page contradictions rather than naming:**
- **breakouts :459/:745:** "the 1-3-1 kills the stretch pass". The owner, neutral_zone_systems, says the stretch is live against it, in five places.
- **NZ :828:** "two means space to attack" sends a carrier into the page's own 1-2-2 trap, which has two at the red line. "A full trap" with four in a line exists nowhere.
- **zone_entries :879/:889:** a 1-3-1 in a forecheck list is called a trap that locks the neutral zone. The owner (forechecking :421–:447) pushes that forecheck up.
- **defender :695/:705:** "Umbrella — you have a point partner" is true only of the classic umbrella. The modern one, which the diagram draws, has a lone defenceman at the apex.

**Tier 2:**
- "aggressive 1-2-2 press" (dtr);
- "the pure 1-3-1 trap is far rarer now" (how_to_watch; the owner says the 1-2-2 trap faded);
- "never two forwards in one lane" stated as law (NZ);
- center's KT14 dropping "usually";
- forechecking's deep trap not saying which line.

## Edits

### A: breakouts, NZ, zone_entries, forechecking, how_to_watch

- **breakouts** :459, :470, :745, :754, and KT :1243, which goes beyond the row: a 1-3-1's line of three kills a pass into its line, not one to a forward already behind it. The KT now gives the option: "skate it out, go short up the wall or stretch behind its line of three — never through the middle".
- **NZ :828 and :843–:845:** count the line. Two is a 1-2-2, and a trap if they sit at the red line with F1 gliding, so do not skate into it. Three is a 1-3-1 or a left-wing lock's back line. Four is a 1-4.
- **NZ :630 and Key focus :16:** the spread is the default. Some teams stack the middle on a 1-3-1 regroup on purpose, so ask yours. :630 changes from Never to Risk. A new paragraph after :636 links Puck Support, which owns the alternative.
- **zone_entries :879/:889:** the 1-3-1 forecheck's second man is the puck-side player of the three (forechecking :442).
- **zone_entries :748/:764:** the unsourced "most commonly a 1-3-1" is dropped.
- **how_to_watch :167:** the 1-3-1 line sits "around the red line".
- **how_to_watch :176:** the faded trap is the 1-2-2 the 1995 Devils made famous. It survives as a situational tool and inside newer shapes.
- **forechecking :459/:462:** "your own blue line".
- **forechecking :745/:758:** the deep trap meets the attack at the red line and your own blue line, matching NZ's trap.

### B: defender, center, special_teams, dtr, glossary, ozp, gm

- **defender and center: classic vs modern umbrella.**
  - defender: :695, :705 ("Ask which your team runs").
  - center: :582, :588, :600, and KT14, where "usually" is restored.
- **dtr :178/:789/:795:** "aggressive neutral-zone press behind a 2-1-2 forecheck", against "a 1-3-1 or 1-2-2 trap".
- **special_teams :418:** "a classic umbrella".
- **center :401:** "usually three groups". The 1-4 is "a neutral-zone retreat rather than a forecheck in their end".
- **ozp :40, :55, :323, :328, :335:** "spread" is dropped from the even-strength 1-3-1, to avoid the power-play spread. Glossary Attack triangle follows.
- **gm :159:** "a trap-like shape".
- **Glossary:**
  - Key focus :22: 1-2-2, 1-3-1 and 1-4 are each both a forecheck and a neutral-zone structure; 2-1-2 is a forecheck.
  - Umbrella entry: classic and modern.
  - The 1-3-1 entry links each shape to its owner, with the regroup pointing at Puck Support.
  - Seven new entries: 1-2-2, 1-4, 2-1-2, 2-3, Diamond, Left-wing lock, Spread and Stack.

### special_teams owner and captions (carried from the W590 gate)

- **special_teams CM :1235:** the shape rule now includes the spread: "two high with one in the middle of the slot and two low beside the posts". The 2-3 has "nobody in the middle of the slot".
- **Captions:**
  - pp-2-3 mirrors CM :1235. Geometry checked: the 2-3's third low player is at the net front, and the spread has one mid-slot.
  - pk-box reads "as usually taught, a box kill does not rotate".
  - oz-five-man-shape reads "a 1-3-1".

No ⚠️ was added, removed or moved. No rule or tariff changed.

## Review

**safety-reviewer: OK, nothing to fix.**
- Every reconciled claim matches its owner, quoted:
  - NZ :228, :840 and :163/:170–:172 (stretch pass and trap count);
  - puck_support :470 (the regroup);
  - forechecking :442 (second man);
  - special_teams :147/:156 (the two umbrellas);
  - NZ's Pressure section (the press).
- The seven glossary entries match their owners.
- Nothing is newly stated as a law.
- The forechecking deep-trap line ("red line and your own blue line") was the agent's inference. It matches NZ's trap.

## Rows

**Closed:** the second homonym set, and the W590 gate's spread note.

**Still open:**
- winger.md never mentions the left-wing lock.
- The glossary, dzc's Key and the CM still state "does not rotate" flatly. This is accepted, because the owner hedges it once and the pk-box caption now does too.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary, which rebuilds the diagrams: exit 0, after every edit (`scratchpad/build_w591.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 12 files.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **A 1-3-1 or trap claim worded without the system's name.**
- **An outside coaching source for which reading of the 1-3-1 and stretch is right.** The corpus's owner was followed.
- **Audio.** Not rendered.
