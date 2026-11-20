# W551: Hockey Canada's arm block where checking is barred, CARHA head hits, and two alt texts (20 November 2026)

## Content (one agent)

### rules_primer Common Mistakes :1196

**Before:** "Two minutes is the whole answer only under the NHL's head-check rule". That was false for CARHA.

**After:** two minutes is the whole answer only under the NHL's rule short of an attempt to injure, "or for accidental contact without a stick under CARHA (50(a))". The line then says a CARHA head hit can end your game "if it is deliberate or a high stick that injures (50(b), 62(b))".

Scoping the CARHA case to contact without a stick matters. 62(b) makes a high stick to the head a major whether or not injury results, and gives a game misconduct when it injures, even if accidental. The safety-reviewer's first finding added the 62(b) limb.

### rules_primer Overview :31

Now lists the PWHL among books where a head hit can end your game without intent. PWHL 48.1 tests "avoidable" contact; 48.2 gives a major; 48.5 says a game misconduct "must" follow; 48.3 allows a reduction to a minor only if accidental.

### forechecking_systems :604 (In short) and :1037

**After:** "never wrap an arm round them, block with one under USA Hockey, CARHA or wherever checking is barred, or push off with a skate."

**Path to that wording.** The first edit added Hockey Canada's "extend one after angling", but left a CARHA reader free to block. CARHA 49(a) covers anyone who "stands in front of an opponent for the purpose of making contact, and/or does not avert body contact". The safety-reviewer rated this major, and it is repaired.

### forechecking_systems :626

Aligned with the leads: "…an arm extended after angling counts as a body check, and a block against a player moving into you can (7.3)".

### puck_handling :505 (facts) and :519 (table)

**Basis.** Hockey Canada's body-check definition (hc.txt :6016–6020) includes "deliberate contact … with opposite-directional force". So where 7.3 bars checking, blocking a player moving into you can be called a body check.

**Wording.** These lines state the 7.3 act. They do not say "8.1 does not apply", following the W529 convention, because the book never reconciles 8.1 with 7.3. The safety-reviewer ruled this safe, because every layer granting the 8.1 block now names the 7.3 act in the same unit.

**Table row.** The caveat went into the row's Penalty cell, because the Legal cell is capped at 200 characters. A render (chunk 030) confirms the listener hears it straight after the permission.

## Diagrams (caption agent)

- **pk-nz-1-1-2 and pk-nz-1-3 alt texts.** "Checking" removed. They now say "toward the puck on the carrier's inside".
- **defender-holding-the-line puck: kept.** Its spot was chosen so the puck clears the passer's glyph. Moving it to the stick would either read as a puck already in flight or make the marks touch. The route aims at the passing lane, not the puck.

## Review

| Reviewer | Findings | Result |
|---|---|---|
| safety-reviewer, with rules check | Two edits OK as first made. Two majors: Hockey Canada stiff-arm block where checking is barred; CARHA omitted from the forechecking leads. One minor: the CARHA 62(b) limb. | All repaired. Re-read: all OK. |

## Rows

**Closed:**
- W546(1): rules_primer CM :1196 and Overview :31.
- W537(1) and (2).
- The pk-nz alt-text row.
- The defender-holding-the-line puck row.

**New, from W551:**
- (1) Sweep the other carriers of Hockey Canada's 8.1 strength-move permission for the 7.3 "block can be a body check" scope.
- The special_teams ~:757 describe still says "checking pressure"; filed.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit. check-arrivals runs inside it at FAIL and passes (`scratchpad/build_w551.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 3 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: CARHA 49, 50 and 62(b); PWHL 48; Hockey Canada definition and 7.3 |
| D9 | Covered: the In short, the facts line and the table cell changed together |
| D11 | Covered by the safety-reviewer |
| D12 | Covered: puck_handling table rendered |
| D13 | Out of scope |
| Others | Not engaged |

## What this method could not have found

- **A Hockey Canada interpretation on a strength move in U13 or female hockey.** None exists on disk.
- **Other documents carrying the 8.1 permission without the 7.3 scope.** Filed as a row.
- **Reviewer transcripts.** They are not on disk.
