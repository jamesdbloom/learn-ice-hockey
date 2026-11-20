# W548: check-arrivals tests pressure routes, and the W547 diagram minors (20 November 2026)

## check-arrivals form (p)

`site/scripts/check-arrivals.mjs` checked only arrow-ended skater routes. W545–W547 had to hand-measure five pressure routes that ran through a player, or within 2.9 ft of one.

The script now tests all 27 pressure routes under rule 1: an opponent within 9 ft of the tip, with terminal-tangent miss ≤ 2.9 ft. It uses the same Bezier tangent as forms (a) and (b) and the renderer, and tests every opponent, goaltenders included.

- **Status: advisory.** `PRESSURE_LEVEL = 'WARN'`, so exit stays 0. There is no baseline (header note 4), so promoting it means setting `PRESSURE_LEVEL` to FAIL once its findings are triaged.
- **Puck exemption `[p-x]`.** A route is exempt only when all three hold:
  - the tangent passes within 1.0 ft of `spec.puck`;
  - the puck is ahead of the tip;
  - the puck is clear of the player's ink (`along − pkAlong > ARRIVAL.glyph`). The reviewer's minor (a) added this condition.

  A line through a player's back to a puck beyond him is never exempt; `the-last-player-back` stays flagged. Header note 6 also says the exemption cannot see a `spec.puck` placed somewhere other than where the caption's aim point refers.
- **Findings: nine** across eight diagrams, now printed with route index and tip:
  - defender-holding-the-line
  - deny-the-reception
  - faceoff-dzone-clean-loss (two routes)
  - pk-nz-1-1-2
  - pk-nz-1-3
  - pk-wedge-plus-1 (miss 1.53)
  - the-call-and-who-can-see-it
  - the-last-player-back

  They are filed for triage. Pressure aimed at a player may be intended.
- **Cross-check.** The W547 hand measurements all reproduce to two decimals and pass: corner-escape 5.84, practice 4.34, scan-before 5.83, both pinch diagrams 4.21.
- `site/scripts/lib/rink.mjs`: comment only. The "would be unmeetable" invariant now points at form (p).

## Diagram minors

**pinch-centre-high and pinch-centre-below-the-goal-line.** `PUCK` moved from (63, 35.5), on A1's net side, to (52.5, 39.5), on his up-wall side. `PUCK` is used only by these two diagrams.
- "Stick on the puck" no longer means reaching past the carrier.
- Bars-to-A1 versus puck-to-A1 bearing: 138° became 21°.
- Tangent miss on the puck is 0.20; on A1 it stays 4.21.
- The puck is 5.59 ft off A1. Its disc edge is 1.9 ft from the dasher.
- Captions ("with the puck at that forward's stick") and hosts agree.

**corner-escape-routes alt text.** Now reads "heading past the carrier's net side".

**nz-1-2-2-containment.** Now reads "never into the receiver's body or back."

**layer-not-converge.**
- Alt text: "a checking pressure route" became "a pressure route".
- **Caption (major, re-read).** The W547 "stick on the puck" contradicted the picture. The puck sits on the far side of the carrier from F1's bars, about 170° away. It now reads "⚠️ Arrive on the carrier's inside, stick on the ice inside them, and never into the back of a player facing the boards". That keeps an aim point, which the W547 safety re-read required so that "no hit" does not leave a pin or bump open, and it matches the drawn route and alt text.

## Review

The diagram-reviewer read the check-arrivals code, ran it, and checked both pinch PNGs and all alt texts and captions. Its findings were one major (layer-not-converge, which traced back to its own W547 sketch) and three checker minors. All four were repaired.

**C11.** No one re-read the final layer-not-converge wording; the coordinator approved it against the picture and alt text. The checker minors were re-run against both the corpus and a fixture.

## Gates

- Full `npm run build` with the v22.23.4 binary: exit 0, after the last edit (`scratchpad/build_w548.log`).
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_zones`, `check-arrivals`.
- `check-arrivals` totals: 0 hard, 17 advisory.

## Rows

- **Closed:** the W547 minors.
- **Updated:** the pressure-route row now reads "triage the 9 [p] advisories, then promote".
- **Owner decision pending:** W521(2); diagram-reviewer item 4 wording.

## What this method could not have found

- **A curve that bows through a player before its tip.**
- **Targets more than 9 ft from the tip.**
- **The facing a glyph cannot express.**
- **Phone width.**
