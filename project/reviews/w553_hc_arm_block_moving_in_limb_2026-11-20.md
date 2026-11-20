# W552–W553: Hockey Canada's arm block names the 7.3 act wherever it is granted (20 November 2026)

## Why

W551 established a rule for puck_handling and forechecking. Hockey Canada 8.1 grants an arm "strength move, by blocking their opponent, provided they have body position" (hc.txt :6722–6724), and it names no division. But the Section 7 definition (hc.txt :6018–6022) counts "deliberate contact with an opposing player with opposite-directional force" as body-checking. So where 7.3 bars checking (U13 and below, female hockey, and Member-approved divisions), blocking a player moving into you can be a body check.

The convention, from W529: state the 7.3 act in the same unit as the grant, and never write "8.1 does not apply".

## W552 census (rules-verifier, read-only)

The census found 13 defect units in 9 files. Two were more than a missing limb:
- **rules_primer :534.** W551 itself had scoped 8.1 to "a body-checking division", but the book has no such limit.
- **puck_handling :544.** It told a player in a no-check division to "keep the arm as a brace", which is the contact the definition can make a check.

## W553 edits (three agents, disjoint files)

**Body Contact (5 sites):** :471, facts :488 (300/300), :1265, the :1751 table cell (199/200), and :1782.
- The facts line and table cell carry only the moving-in limb, for space. The safety-reviewer ruled this acceptable, because both are about the block and neither permits the angling act. The angling limb is still at :471, :1265 and :1782.
- The editor declined the brief's suggested cut, "no body-position carve-out" → "no carve-out in Section 8". The shorter wording is false, because 8.1's strength move is itself a Section 8 carve-out.

**Foundation (6 sites):**
- rules_primer :506 and :534/:536:
  - "In a body-checking division" was dropped from :534.
  - After review, the moving-in limb was moved into the grant sentence. It had been about 930 spoken characters later, past the USA Hockey Casebook clauses.
  - :536 keeps the angling limb and the bump, shove or push limb.
- core_principles :95. After review, the push and angling limbs were restored to definite ("a push is a minor, an arm extended after angling is a body check"), and only the moving-in limb says "can be".
- language_and_glossary :442 and :480; rink_map :526.

**Winger and Puck Handling:**
- winger facts :743 and body :750.
- winger :128 fend-off bullet: "Hockey Canada's arm permissions are the strength-move block and blocking a stick (8.1), and where it bars checking, an intentional push is a minor and blocking a player moving into you can be a body check (7.3)". The reviewer's sketch said "only arm permission", but hc.txt :6725 also lets a player "block an opponent's stick with their hands, arms, or body". The first gate BLOCKED this line, because its fend-off, a stationary arm against a player moving in, lacked the moving-in limb. It was repaired to the gate's sketch.
- puck_handling :544: "keep the arm in there".
- puck_handling :521 table cell (197/200) and :523: a held brace against a skater moving in can be a body check under 7.3.

**Wording rule:** throughout, the angling limb stays "is", because the definition states it outright. The moving-in limb is "can", because no Hockey Canada interpretation rules on a stationary block.

## Review

| Reviewer | Findings | Result |
|---|---|---|
| safety-reviewer, with rules check | Minor to major, permissive: core_principles :95 softened push and angling to "can". Minor: rules_primer :534 grant flat and limb distant in speech (rendered: chunk 062, about 930 chars). Minor, harsh: winger :128. OK: body_contact :488 and :1751 single limb; puck_handling :521, :523 and :544 (USA Hockey reader keeps "hold it, not lean"; 604(c) Note); 8.1 has no division clause. | Repaired. Commit-gate pass 1 BLOCKED on winger :128 (missing moving-in limb); repaired per the gate's sketch. core_principles and rules_primer follow the reviewer's sketches (C11 terminating case). winger :128 departs from the sketch because the sketch was false, and the coordinator checked that against hc.txt :6725. |

## Rows

**Closed:** W551(1).

**New, from W553:**
- (1) puck_handling :521, whether "leaning the bar in" counts as cross-checking under Hockey Canada 9.2.
- (2) Optional: winger :104 and :124, "never push back".
- (3) A sweep for Hockey Canada blocking grants worded without "8.1".

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w553.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 7 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: Hockey Canada Section 7 definition, 7.3 and 8.1 |
| D9 | Covered: body, facts, table and glossary changed together, and the census covered every layer |
| D11 | Covered by the safety-reviewer |
| D12 | Covered: rules_primer rendered |
| D13 | Out of scope |
| Others | Not engaged |

## What this method could not have found

- **A Hockey Canada ruling on a passive block, held brace or stationary hip** in U13 or female hockey. None exists on disk; every "can be" rests on the definition.
- **Grants worded without the census vocabulary.** Filed as row (3).
- **Chunk placement in files other than rules_primer.** Those edits are in-unit, so no distance check was run.
