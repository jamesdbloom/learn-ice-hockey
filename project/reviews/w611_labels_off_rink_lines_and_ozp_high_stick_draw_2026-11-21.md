# W611: diagram labels off rink lines, and where the draw goes after a declined high-batted puck (21 November 2026)

## Diagrams (W508(7); diagram agent, placement plus one puck nudge)

**Cleared of paint**
- winger-dz-rim "up the wall" [8,-7]
- oz-half-wall-options "high — the point" [12,-6]
- winger-dz-reverse "arriving behind you" [-13,-8]
- legal-route-through-traffic "you" [0,-6]
- shooting-lane-and-the-step "net-front traffic" [-7,-12], about 2 ft clear of the crease corner

**support-in-a-line: "puck carrier"**
- The first move to [-3,-11] put "puck carrier" under the filled opposition F, with F's own leader through "puck". It read as the opponent carrying.
- It was moved to [2,-14], under C with a leader. Ownership was chosen over paint, so it crosses a circle and the goal line.
- That made the placer stack F's "in both lanes" directly above "puck carrier", reading as C's two-line label. "In both lanes" was moved to [0,-22], below, with a straight leader to F. The stale module comment was replaced.

**Puck dot (support-in-a-line and support-triangle, a shared position):** moved from between C and the opposition F to C's far side, {corner:right, dx 5.5, dy 0.5}. That is 4.5 ft from C, 2 ft inside the corner boards.
- The reviewer's sketch would have hidden it under C's token.
- No caption or describe states the puck's side.
- support-triangle's pass still starts from C.

**Left as accepted**
- **No clean slot:** legal-route-through-traffic "your check" and corner-escape-routes "two ways out".
- **support-in-a-line "puck carrier":** still crosses an arc.
- **goalie-safe-outlets:** the G near the rim route was judged fine by the reviewer; there is no better position.

`check_label_paint`: 459 → 454.

**diagram-reviewer, three passes.** OK after two findings, both repaired: the "puck carrier" ownership flip, and the "in both lanes" stack.

## offensive_zone_play :597 (W508(20)) and W508(3)

**rules-verifier.** It confirmed the CARHA 79(a) slap-shot minor (major plus GM plus a ban on injury) and the 79(b) faked-slap-shot minor (`carha_2026.txt:3487-3503`). No other book on disk penalises a fake, so the CARHA-only scope is right.

**"Declining wins nothing"** cited only NHL/IIHF 72.3 and PWHL 74.3, which cover both teams leaving the puck. It now reads:
- "Declining earns you no extra ground under the NHL, IIHF, PWHL or Hockey Canada."
- Both teams leave it: the draw is nearest the stoppage (72.3, 74.3, Hockey Canada Interpretation 2 to 6.9).
- The offending team plays it: the draw goes to the spot that gains them least, out to the neutral zone if they were attacking (NHL/IIHF 80.2, PWHL 82.2, Hockey Canada 6.3(d) outside their own zone).

**Corrections along the way**
- The coordinator's sketch "Nothing sends it to their end" was false: under 80.2 a defending team takes the draw in its own end. The editor dropped it.
- The verifier found Hockey Canada writes no location rule for a defending-zone high stick (6.3(e) does not cover it), so 6.3(d) is scoped "outside their own zone".

Verified against `hc.txt`, the current book. The paragraph is 1,144 characters.

## Rows

**Closed:** W508(3), (7) and (20).

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary, which rebuilds the diagrams: exit 0, after every edit (`scratchpad/build_w611.log`).
- check-arrivals: 0 hard, unchanged.
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on ozp.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Real-phone and dark-theme rendering.**
- **Whether readers attach each label to the intended player.**
- **Hockey Canada officiating guidance not on disk.**
