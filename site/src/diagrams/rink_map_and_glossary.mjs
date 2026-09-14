/**
 * Diagrams for content/foundation/rink_map_and_glossary.md.
 *
 * This document owns the rink's dimensions and its spatial vocabulary, so its
 * diagrams are mostly **shaded regions** rather than plays. That makes them the
 * lowest-risk diagrams in the corpus — the geometry is already owned, and
 * scripts/check_geometry.py holds src/data/rink.json to it — and for exactly that
 * reason the highest-consequence ones to get wrong: a reader who has just been told
 * this document owns the geometry will believe a region drawn a few feet out.
 *
 * So every polygon corner below is derived from a sentence in §3 or §5, and the
 * derivation is written next to it. Nothing here is measured off a picture.
 *
 * ONE THING THE PICTURES CANNOT SAY BY THEMSELVES. Most of these regions are **not
 * painted on a rink**. §3 enumerates what actually is marked — the goal line, the
 * blue lines, the centre red line, the two creases, the nine faceoff spots and the
 * four circles, the hash marks and restraining lines, and the trapezoid — and the
 * slot, the high slot, the low slot, the goalmouth, the point and the half-wall are
 * none of them. A shaded polygon is the most paint-like thing a diagram can draw,
 * so every caption below says whether the region it shades exists on the ice.
 */

// ---------------------------------------------------------------------------
// Derived offsets. Each is one arithmetic step from a figure the document states,
// and the step is shown so a reviewer can check it without opening the renderer.
// ---------------------------------------------------------------------------

// The gap between the two end-zone faceoff circles. §3 puts the end-zone spots
// "twenty-two feet on both sides of the straight line joining the centre of the two
// goals" with a 15 ft radius circle, so the circles' inner edges sit 22 − 15 = 7 ft
// either side of the middle. "Between the two faceoff circles" is that 14 ft gap.
const CIRCLE_EDGE = 7;
// The same 7 ft said the other way round, because a polygon corner anchored to a
// *sided* position — the faceoff dot, the top of the circle — is 22 ft off the middle
// already, and reaching the circle's inner edge from there is one circle radius back.
const CIRCLE_RADIUS = 15;

// The front edge of the crease, back from the goal line. §3: the crease is "8 ft
// wide at the goal line and 6 ft deep at its deepest point". The low slot is
// defined as running down toward the goalmouth "outside the crease", so this is
// where it stops.
const CREASE_FRONT_DX = -6;
const CREASE_HALF_WIDTH = 4;          // 8 ft wide, §3

// The trapezoid, from Rule 1.8 as §3 records it: the lines begin 8 ft from each
// goal post at the goal line and finish 11 ft from each post at the end boards.
// The posts are 3 ft either side of centre (a 6 ft goal opening, §1), so the
// half-widths are 3 + 8 and 3 + 11 — which is the 22 ft / 28 ft the document
// states. NOT Rule 27.8's stale 6 ft; §3 spends four paragraphs on why.
const TRAP_HALF_AT_GOAL_LINE = 11;
const TRAP_HALF_AT_BOARDS = 14;
const GOAL_LINE_TO_BOARDS = 11;       // §1, NHL. The IIHF figure is 4.0 m; see captions.

/**
 * Points along the board arc in one corner, as offsets from the goal line.
 *
 * §1 gives the sheet as 200 ft × 85 ft with a 28 ft corner radius, and §1 puts the
 * goal line 11 ft from the end boards. That fixes the arc completely: its centre of
 * curvature is 28 ft in from the end boards and 28 ft in from the side boards, i.e.
 * at (72, 14.5) with the origin at centre ice.
 *
 * A region that runs to the wall has to follow the wall. Drawn straight across the
 * corner the polygon spills over the dasher; drawn short of it, it reads as a region
 * that stops before the boards, which is a claim the document does not make.
 *
 * @param {number} sy  +1 for the side the diagram calls "right", -1 for the other
 */
function boardArc(sy) {
  const R = 28, CX = 72, CY = 42.5 - 28;      // 14.5
  const pts = [];
  for (let x = CX; x <= 100.0001; x += 4) {
    const dy = Math.sqrt(Math.max(0, R * R - (x - CX) ** 2));
    pts.push({ at: 'goal-line', dx: +(x - 89).toFixed(3), dy: +(sy * (CY + dy)).toFixed(3) });
  }
  return pts;
}

/**
 * The same corner arc at the OTHER end of the sheet, for full-sheet diagrams.
 *
 * A separate function rather than a parameter on `boardArc`, because that one is
 * anchored in `strong-side-and-weak-side` and this file's rule is that a datum
 * restated elsewhere is not a knob to turn. The mirror is one line: `goal-line::far`
 * resolves to x = -89, so reaching the mirrored point -x needs dx = -(x - 89).
 *
 * Note the empty side slot in `goal-line::far`. `goal-line:far` is silently wrong —
 * `far` lands in the *side* slot and the near end comes back — which is the failure
 * `resolve()` in site/scripts/lib/rink.mjs raises by name.
 *
 * @param {number} sy  +1 for the side the diagram calls "right", -1 for the other
 */
function boardArcFar(sy) {
  const R = 28, CX = 72, CY = 42.5 - 28;      // 14.5
  const pts = [];
  for (let x = CX; x <= 100.0001; x += 4) {
    const dy = Math.sqrt(Math.max(0, R * R - (x - CX) ** 2));
    pts.push({ at: 'goal-line::far', dx: -(+(x - 89).toFixed(3)), dy: +(sy * (CY + dy)).toFixed(3) });
  }
  return pts;
}

/**
 * The board arc BEHIND the goal line, from the goal line round to the end boards.
 *
 * `boardArc` above starts at x 72, where the corner begins, because the regions it
 * serves run from the middle of the zone outward. The strip behind the goal line
 * starts at x 89 and is a fifth of the length, so it needs the arc sampled from
 * there — reusing `boardArc` and discarding its first four points would draw the
 * region's first vertex at x 72, five feet of ice OUTSIDE the strip it names.
 *
 * Sampled every foot rather than every four, because the arc is turning hardest in
 * exactly this stretch: from x 89 the boards come in from y 36.749 to y 14.5 over
 * eleven feet. At 4 ft spacing the chords visibly cut the corner.
 *
 * AREA, stated so a reviewer can check the shape without opening the renderer.
 * Exact, by integration: 2·∫(14.5 + √(784 − (x−72)²)) dx from 89 to 100 = 660.7
 * sq ft. The 1 ft polygon comes out at 657.8 — 0.4% under, because chords of a
 * convex arc fall inside it. That is the whole error and it is in the safe
 * direction: the shading stops a few inches short of the dasher rather than
 * spilling over it.
 *
 * @param {number} sy  +1 for the side the diagram calls "right", -1 for the other
 */
function behindGoalLineArc(sy) {
  const R = 28, CX = 72, CY = 42.5 - 28;      // 14.5
  const pts = [];
  for (let x = 89; x <= 100.0001; x += 1) {
    const dy = Math.sqrt(Math.max(0, R * R - (x - CX) ** 2));
    pts.push({ at: 'goal-line', dx: +(x - 89).toFixed(3), dy: +(sy * (CY + dy)).toFixed(3) });
  }
  return pts;
}

/**
 * The blue-line edge of a zone, sampled down its length.
 *
 * ⚠️ THIS IS A LABEL-PLACEMENT FIX AND IT IS SAID OUT LOUD, because it looks like
 * padding and is not. A zone's label is drawn at the **mean of its listed vertices**,
 * not at the area centroid, and nothing in the renderer moves it or moves anything
 * out of its way. A zone whose far boundary is a 16-point arc and whose near boundary
 * is two corners has its vertex mean dragged into the arc: for the attacking zone that
 * put the mean at x 79.2, and "attacking zone" — 14 characters, 3.05 ft each on a
 * full sheet by the renderer's own estimate — then ran from x 57.9 to **x 100.5**,
 * off the end boards and out of the frame.
 *
 * Sampling the straight edge at a comparable resolution to the curved one is the
 * honest fix: every point returned is genuinely ON the polygon's boundary, so the
 * SHAPE IS UNCHANGED, and the vertex mean lands near the area centroid instead of at
 * whichever edge happened to be described in most detail. Eleven points brings the
 * attacking zone's mean to x 61.2, and the label spans 39.8 to 82.5 — inside the
 * region it names, which is the test risk_management.mjs states for a zone label.
 *
 * The alternative was a dozen bare collinear vertices with no reason attached, which
 * is how a future reader "tidies" one away and silently moves a label off the page.
 *
 * @param {number} sx  +1 for the near blue line (x 25), -1 for the far one (x -25)
 * @param {number} n   points, inclusive of both corners
 */
function blueLineEdge(sx, n = 11) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    pts.push({ at: sx > 0 ? 'blue-line' : 'blue-line::far',
               dy: +(-42.5 + (85 * i) / (n - 1)).toFixed(3) });
  }
  return pts;
}

/**
 * The goal crease outline, traced as the document constructs it.
 *
 * §3, The goal crease: "a 2-inch red line runs **1 ft outside each goal post**,
 * extending **4 ft 6 in** straight out at right angles to the goal line, and the two
 * straight sides are joined by a **6 ft radius arc** struck from the centre of the
 * goal line. So it is **8 ft wide at the goal line and 6 ft deep at its deepest
 * point**."
 *
 * So: posts at y = ±3 (a 6 ft goal opening, §1), plus 1 ft, gives the 8 ft width;
 * the arc is r 6 about (89, 0), giving the deepest point at x 83 — which is the same
 * x this file's CREASE_FRONT_DX already reaches, so the crease drawn here and the
 * crease the slot diagrams stop at cannot disagree.
 *
 * ⚠️ THE STRAIGHT SIDE COMES OUT AT 4.473 ft HERE, NOT 4.5, and that is the rulebook's
 * own arithmetic rather than an error to correct. A 6 ft arc struck from the centre of
 * the goal line crosses y = ±4 at x = 89 − 6·cos(asin(4/6)) = 84.527. The two figures
 * Rule 1.7 gives — a 4 ft 6 in straight and a 6 ft arc meeting at 8 ft wide — are
 * about 0.03 ft, or a third of an inch, from being simultaneously exact. This traces
 * the arc, because the arc is what fixes the 8 ft width and the 6 ft depth the
 * document leads with. site/scripts/lib/rink.mjs draws the painted crease the other
 * way round (4.5 ft straight, then an SVG arc), which lands its deepest point at
 * x 82.97: the two differ by 0.03 ft, a quarter of a pixel at this scale.
 */
function creaseOutline() {
  const R = 6, CX = 89, HALF = 4;             // crease_arc_radius, goal_line_x, half of 8 ft
  const t0 = Math.asin(HALF / R);             // where the arc crosses y = +4
  const pts = [{ at: 'goal-line', dy: HALF }];
  const STEPS = 16;
  for (let i = 0; i <= STEPS; i++) {
    // Sweep from the +4 crossing, through the deepest point, to the −4 crossing.
    const th = (Math.PI - t0) + ((2 * t0) / STEPS) * i;
    pts.push({ at: 'goal-line',
               dx: +(R * Math.cos(th)).toFixed(3),
               dy: +(R * Math.sin(th)).toFixed(3) });
  }
  pts.push({ at: 'goal-line', dy: -HALF });
  return pts;
}

// ---------------------------------------------------------------------------
// 1 · The slot
// ---------------------------------------------------------------------------

const theSlot = {
  id: 'the-slot',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'The slot: the ice in front of the net, between the faceoff circles, from the top of ' +
    'the circles down to the goalmouth — shaded here; not painted.',

  describe:
    'The attacking half of the rink, the net at the right. A shaded rectangle runs down ' +
    'the middle of the end zone from the top of the two faceoff circles to the front edge ' +
    'of the goal crease, its sides on the inner edges of the two circles. No players are ' +
    'drawn.',

  zones: [
    {
      // Corners, clockwise from the top of the strong-side circle:
      //   (54, +7)  top of the circles, on the circle's inner edge
      //   (83, +7)  the front edge of the crease, same edge
      //   (83, -7)  mirrored
      //   (54, -7)  mirrored
      // "from the top of the circles down to the goalmouth" (§5, The slot).
      points: [
        { at: 'top-of-circle:right', dy: -CIRCLE_RADIUS },
        { at: 'goal-line', dx: CREASE_FRONT_DX, dy: CIRCLE_EDGE },
        { at: 'goal-line', dx: CREASE_FRONT_DX, dy: -CIRCLE_EDGE },
        { at: 'top-of-circle:left', dy: CIRCLE_RADIUS },
      ],
      label: 'the slot',
    },
  ],
};

// ---------------------------------------------------------------------------
// 2 · The high slot
// ---------------------------------------------------------------------------

const theHighSlot = {
  id: 'the-high-slot',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'The high slot: from the faceoff dots up to the top of the circles, between the two ' +
    'circles — shaded here; not painted, though the dots and circles are.',

  describe:
    'The attacking half of the rink, the net at the right. A shaded rectangle occupies the ' +
    'middle of the zone between the two faceoff circles, running from the top of the circles ' +
    'down to the depth of the two faceoff dots — the upper half of the slot. No players are ' +
    'drawn.',

  zones: [
    {
      // (54, ±7) to (69, ±7): "from the level of the faceoff dots up to the top of
      // the circles" (§5, The high slot). The faceoff dot is the depth reference,
      // so the low edge is the dot's own x with the sideways offset taken out.
      points: [
        { at: 'top-of-circle:right', dy: -CIRCLE_RADIUS },
        { at: 'faceoff-dot:right', dy: -CIRCLE_RADIUS },
        { at: 'faceoff-dot:left', dy: CIRCLE_RADIUS },
        { at: 'top-of-circle:left', dy: CIRCLE_RADIUS },
      ],
      label: 'the high slot',
    },
  ],
};

// ---------------------------------------------------------------------------
// 3 · The low slot
// ---------------------------------------------------------------------------

const theLowSlot = {
  id: 'the-low-slot',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'The low slot: from the faceoff dots down to the goalmouth, outside the crease — ' +
    'shaded here; not painted, but its edges follow real markings.',

  describe:
    'The attacking half of the rink, the net at the right. A shaded rectangle occupies the ' +
    'middle of the zone between the two faceoff circles, running from the depth of the ' +
    'faceoff dots down to the front edge of the light blue goal crease — the lower half of ' +
    'the slot. No players are drawn.',

  zones: [
    {
      // (69, ±7) to (83, ±7): "from the dots down toward the goalmouth, outside the
      // crease" (§5, The low slot). 83 is the goal line less the crease's 6 ft depth.
      points: [
        { at: 'faceoff-dot:right', dy: -CIRCLE_RADIUS },
        { at: 'goal-line', dx: CREASE_FRONT_DX, dy: CIRCLE_EDGE },
        { at: 'goal-line', dx: CREASE_FRONT_DX, dy: -CIRCLE_EDGE },
        { at: 'faceoff-dot:left', dy: CIRCLE_RADIUS },
      ],
      label: 'the low slot',
    },
  ],
};

// ---------------------------------------------------------------------------
// 4 · The goalmouth
// ---------------------------------------------------------------------------

const theGoalmouth = {
  id: 'the-goalmouth',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'The goalmouth: the immediate front of the net, at the edge of the crease — a small ' +
    'shaded box here, much smaller than the low slot.',

  describe:
    'The attacking half of the rink, the net at the right. A small shaded box sits directly ' +
    'in front of the goal, the width of the goal crease and running from the goal line out ' +
    'to the front edge of the crease. It is drawn over the light blue crease. No players are ' +
    'drawn.',

  zones: [
    {
      // The crease footprint: 8 ft wide at the goal line, 6 ft deep (§3, The goal
      // crease). §5 defines the goalmouth as "the immediate front of the net, at the
      // edge of the crease", and Key Takeaway 4 places it "at the crease", so the
      // crease's own dimensions are the only ones the document gives for it.
      points: [
        { at: 'goal-line', dy: CREASE_HALF_WIDTH },
        { at: 'goal-line', dx: CREASE_FRONT_DX, dy: CREASE_HALF_WIDTH },
        { at: 'goal-line', dx: CREASE_FRONT_DX, dy: -CREASE_HALF_WIDTH },
        { at: 'goal-line', dy: -CREASE_HALF_WIDTH },
      ],
      label: 'goalmouth',
    },
  ],
};

// ---------------------------------------------------------------------------
// 5 · The point and the half-wall
// ---------------------------------------------------------------------------

const pointAndHalfWall = {
  id: 'the-point-and-the-half-wall',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'The point and the half-wall: two spots beginners conflate. Defencemen stand at the ' +
    'point, wingers at the half-wall — placed only to mark the spots, not as a formation.',

  describe:
    'The attacking half of the rink, the net at the right. Two defencemen stand just inside ' +
    'the blue line, one toward each side, at the point. Two wingers stand against the side ' +
    'boards level with the faceoff dots, at the half-wall. The right-hand defenceman is ' +
    'labelled "the point" and the right-hand winger "the half-wall". No puck and no routes ' +
    'are drawn.',

  players: [
    // "The blue lines are where defencemen live in the offensive zone" (§3, The
    // blue lines) and
    // "the area just inside the blue line, toward each set of boards, where the
    // defencemen set up" (§5, The point). Two of them, per the section.
    { id: 'D', pos: 'D', at: 'point:right', label: 'the point' },
    { id: 'D', pos: 'D', at: 'point:left' },
    // "Wingers live here in offensive-zone possession" (§5, The half-wall).
    { id: 'W', pos: 'F', at: 'half-wall:right', label: 'the half-wall' },
    { id: 'W', pos: 'F', at: 'half-wall:left' },
  ],
};

// ---------------------------------------------------------------------------
// 6 · The trapezoid
// ---------------------------------------------------------------------------

const theTrapezoid = {
  id: 'the-trapezoid',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'The trapezoid: the goaltender’s restricted area behind the net — 22 ft wide at the ' +
    'goal line, widening to 28 ft at the boards, shaded here at NHL dimensions. Playing the ' +
    'puck behind the goal line outside it is a two-minute delay-of-game minor; the rule ' +
    // ⚠️ "THE SOLE EXCEPTION" WAS FALSE, AND IT CAME FROM THE BODY, NOT FROM HERE.
    // `rules-verifier` found the IIHF Situation Handbook publishes two more, in both the
    // 2025/26 and 2026/27 editions: Situation 27.6 rules a puck stopped ON the goal line is
    // not in the restricted area at all, and 27.9 rules a puck that merely deflects off the
    // glass into a retreating goaltender draws nothing, because "the goalkeeper must PLAY
    // the puck to be penalized". ⚠️ THE FIFTH "sole exception" IN THIS CORPUS WRITTEN FROM
    // THE PLAYING RULES WITHOUT THE HANDBOOK.
    // ⚠️ MAJOR. The exception excuses PLAYING the puck and never FREEZING it. IIHF 27.7's own
    // words are "plays the puck while maintaining skate contact with their goal crease";
    // freezing is a separate minor at 63.2(I), whose boundary is the CREASE, not the trapezoid.
    // The verb survived in the body at §3 and in `goaltender.md`'s facts layer ("excuses
    // playing, never freezing") and was in NEITHER this caption nor Key Takeaway 7.
    // `md_to_speech.py` emits "Diagram. " + caption and never voices `describe`, so for a
    // listener this caption IS the diagram — and a goaltender who hears "the one exception is
    // skate contact with the crease" and nothing more can reasonably sit on the puck with a toe
    // in the paint. One clause, and it costs the listener nothing to hear.
    'text\u2019s one exception is a goaltender keeping skate contact with the crease, which ' +
    'excuses playing the puck and never freezing it; and the ' +
    'IIHF\u2019s Situation Handbook adds two more — a puck stopped on the goal line, and one ' +
    'that only deflects into you. USA Hockey and Hockey ' +
    'Canada mark no trapezoid, but both still stop the goaltender at the centre red line and ' +
    'limit where the puck may be frozen. In England and Wales, England Ice Hockey’s Rule ' +
    '22.3 says the area is not currently enforced — which frees where a goaltender may play ' +
    // ⚠️⚠️ CRITICAL, CAUGHT BY `safety-reviewer`. This ended at "freeze it" — a flat NEVER,
    // read ALONE by a listener, while the body treats two carve-outs as inseparable from
    // this exact sentence: "Both carve-outs travel with that, or you produce a goaltender
    // who will not cover a rebound." IIHF 63.2(VI)'s Note makes covering after a
    // cut-the-angle save explicitly legal; 63.2(VII) excepts a goalkeeper actually being
    // checked. A caption is the whole diagram for anyone who cannot see it.
    'the puck and never where they may freeze it. Two things stay legal either way and have ' +
    'to travel with that: coming out to cut down the angle, making the save and covering the ' +
    'puck (IIHF 63.2(VI)), and a goaltender actually being checked (63.2(VII)). Cover the ' +
    'rebound.',

  describe:
    'The attacking half of the rink, the net at the right. The area behind the goal line is ' +
    'shaded between the two red trapezoid lines, which begin either side of the goal and ' +
    'splay outward to the end boards: narrower at the goal line, wider at the boards. No ' +
    'players are drawn.',

  zones: [
    {
      // (89, ±11) at the goal line, (100, ±14) at the end boards. 11 = 3 ft post
      // offset + 8 ft, giving the 22 ft the document states; 14 = 3 + 11, giving 28 ft.
      //
      // The centre of the goal line is listed as a fifth vertex. It is a point on the
      // boundary, so the shape is unchanged, and it is where the goal itself stands —
      // the thing the whole area is measured from. It is here for a second reason
      // too, stated rather than hidden: the region's label is drawn at the mean of its
      // listed points, and on four vertices that mean sits far enough back toward the
      // end boards that the word "trapezoid" ran off the edge of the frame.
      points: [
        { at: 'goal-line' },
        { at: 'goal-line', dy: TRAP_HALF_AT_GOAL_LINE },
        { at: 'goal-line', dx: GOAL_LINE_TO_BOARDS, dy: TRAP_HALF_AT_BOARDS },
        { at: 'goal-line', dx: GOAL_LINE_TO_BOARDS, dy: -TRAP_HALF_AT_BOARDS },
        { at: 'goal-line', dy: -TRAP_HALF_AT_GOAL_LINE },
      ],
      label: 'trapezoid',
      // No outline. This is the one region in this file that is genuinely painted on
      // the ice, and the renderer already draws the two red lines that are the paint.
      // A second, blue, dashed outline drawn on top of them competes with the real
      // marking and invites a reader to take the wrong pair of lines for it.
      stroke: 'none',
      fill: 'rgba(15,90,143,0.16)',
    },
  ],
};

// ---------------------------------------------------------------------------
// 7 · Strong-side and weak-side
// ---------------------------------------------------------------------------

const strongAndWeakSide = {
  id: 'strong-side-and-weak-side',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'Strong-side and weak-side: whichever half of the ice the puck is on right now, and ' +
    'the other half — not painted; the boundary moves with the puck.',

  describe:
    'The attacking half of the rink, the net at the right, tinted in two different shades ' +
    'lengthways down the middle. The puck is on the right-hand side of the ice, just inside ' +
    'the strong-side faceoff dot. The half of the ice containing the puck is labelled ' +
    '"strong side" and the other half "weak side". No line is drawn between them and no ' +
    'players are drawn.',

  zones: [
    // Each half runs from the centre line to the end boards, following the board arc
    // round the corner so the shading reaches the wall rather than cutting across it.
    // The dividing edge is the middle of the ice — §6 defines strong and weak side
    // against the puck's side of the ice, and nothing narrower.
    //
    // Neither carries an outline, and that is the point rather than a style choice.
    // These two halves are the only "region" in this document with no edges at all:
    // there is nothing on the ice to mark them, and the boundary moves with the puck.
    // Drawn with a dashed border they became a line down the middle of the rink, which
    // is precisely the thing the section says does not exist.
    {
      points: [
        { at: 'centre-ice' },
        { at: 'centre-ice', dy: 42.5 },
        // boardArc's first point is (72, +42.5) — the side boards, where the corner
        // begins — and its last is (100, +14.5), the flat section of the end boards.
        ...boardArc(1),
        { at: 'goal-line', dx: GOAL_LINE_TO_BOARDS },
      ],
      label: 'strong side',
      fill: 'rgba(15,90,143,0.13)',
      stroke: 'none',
    },
    {
      points: [
        { at: 'centre-ice' },
        { at: 'centre-ice', dy: -42.5 },
        ...boardArc(-1),
        { at: 'goal-line', dx: GOAL_LINE_TO_BOARDS },
      ],
      label: 'weak side',
      fill: 'rgba(91,95,102,0.09)',
      stroke: 'none',
    },
  ],

  // "Strong-side = the side of the ice the puck is currently on" (§6). Nothing beyond
  // *which side* is being claimed here, so the puck goes inside the strong-side circle,
  // eight feet in off the dot toward the middle. Not on the dot — a puck drawn on the
  // spot covers it and reads as a faceoff rather than as live play, and the whole point
  // of the picture is a puck that is loose and can cross the middle at any moment.
  puck: { at: 'faceoff-dot:right', dy: -8 },
};

// ---------------------------------------------------------------------------
// 8 · The goal crease
//
// ⚠️ THE MOST CONSEQUENTIAL PIECE OF GEOMETRY THIS DOCUMENT OWNS, and until now the
// only one of its named regions with no picture at all. Many documents defer here for
// where the crease is; §3 is 1,600-plus words on it.
//
// FOUR THINGS THIS DIAGRAM DELIBERATELY DOES NOT DO.
//
// (1) NO PLAYER IS DRAWN. The crease is 8 ft wide. A forward's glyph is 2.9 ft of
//     radius plus half of a 0.75 stroke, so 6.55 ft of ink across — more than three
//     quarters of the region's width. Any skater placed near the edge encodes a
//     distinction finer than the mark that carries it, and the one the section turns
//     on ("work just outside the paint, not on its edge and not in it") is finer
//     still. A picture cannot say that, so the caption says it in words instead, and
//     says that the picture cannot.
// (2) NO GOALTENDER either, which is a change of mind worth recording: a `G` at
//     (87, 0) would orient the reader and is what dz-the-house does. It is left out
//     for consistency with the four region diagrams above it in this file, none of
//     which draws anybody — these are geography, and a lone glyph in the paint in a
//     diagram whose whole subject is who may stand in the paint invites the wrong
//     reading.
// (3) NO ZONE LABEL. The label is drawn at the vertex mean with no collision
//     avoidance, and the shortest honest name — "crease", six characters — reserves
//     10.75 ft against a region 8 ft wide, so it would name low-slot ice the polygon
//     does not cover. Same call and same reason as the unlabelled bands in
//     scanning_and_anticipation.mjs and playing_without_the_puck.mjs. The region is
//     named in the caption and in `describe`.
// (4) NO OUTLINE. site/scripts/lib/rink.mjs already draws the real crease in red on
//     every diagram, and this is genuinely painted ice. A second, dashed, blue border
//     on top of the paint competes with it and invites a reader to take the wrong pair
//     of lines for the marking — exactly the reasoning theTrapezoid records above.
// ---------------------------------------------------------------------------

const theGoalCrease = {
  id: 'the-goal-crease',
  owner: 'content/foundation/rink_map.md',
  title: 'The goal crease',
  half: true,
  width: 900,

  caption:
    'The goal crease — the blue paint — shaded here: 8 ft wide at the goal line, 6 ft ' +
    'deep, extending 4 ft up as a volume, not a floor. Three of the four books put the red ' +
    'boundary line itself inside the crease — the IIHF, USA Hockey and Hockey Canada — and ' +
    'the NHL never says either way. Keep your skates off the red line, not merely out of the ' +
    'blue paint. No shading can draw an edge that fine.',

  describe:
    'The attacking half of the rink, the net at the right. The goal crease is shaded: it ' +
    'is eight feet wide where it meets the goal line, a short straight side runs out from ' +
    'each end of that width, and the two are joined by an arc that reaches six feet out ' +
    'from the goal line at its deepest point, so the shape bulges into the zone rather ' +
    'than back toward the end boards. The goal stands on the goal line behind it, and is ' +
    'narrower than the crease. No players are drawn.',

  zones: [
    {
      points: creaseOutline(),
      // See note (3) above: no label, and note (4): no outline over the real paint.
      stroke: 'none',
      fill: 'rgba(15,90,143,0.26)',
    },
  ],
};

// ---------------------------------------------------------------------------
// 9 · Home plate / the house
//
// ⚠️ THE OWNER DID NOT DRAW ITS OWN REFERENCE SHAPE. Three other modules draw this
// region — offensive_zone_play.mjs (`oz-home-plate`), defensive_zone_coverage.mjs
// (`dz-the-house`) and breakouts.mjs — and the document that DEFINES it did not. Every
// one of those three was checked against §5 and against each other before this was
// written, and all three agree with the section corner for corner; the polygon below is
// that same shape, so nothing is being introduced, only anchored where it belongs.
//
// The corners are §5's sentence read straight off: "It runs in along the tops of the
// two faceoff circles, straight down the dot lines to the two faceoff dots — 44 ft
// apart — and then angles in to the two goalposts, which are 6 ft apart on the goal
// line." The posts are the only two corners the position vocabulary has no name for,
// so they are the goal-line node plus goal.post_y (3 ft), never a bare coordinate.
// ---------------------------------------------------------------------------

const homePlate = {
  id: 'home-plate-the-house',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'Home plate — the high-danger area, also "the house": tops of the circles down the ' +
    'dot lines to the dots, angling in to the goalposts. Not a painted marking.',

  describe:
    'The attacking half of the rink, the net at the right. A shaded six-sided region is ' +
    'drawn on the ice: its up-ice edge runs straight across between the tops of the two ' +
    'faceoff circles, its two long sides run down-ice from the top of each circle to that ' +
    "circle's faceoff dot, and from each dot an angled edge runs in to the nearer " +
    'goalpost, so the shape narrows to the width of the goal at the goal line. No players ' +
    'are drawn.',

  zones: [
    {
      points: [
        { at: 'goal-line', dy: 3 },      // (89,  3)  right goalpost
        'faceoff-dot:right',             // (69,  22)
        'top-of-circle:right',           // (54,  22)
        'top-of-circle:left',            // (54, -22)
        'faceoff-dot:left',              // (69, -22)
        { at: 'goal-line', dy: -3 },     // (89,  -3) left goalpost
      ],
      // Vertex mean (70.67, 0); "home plate", ten characters, reserves 17.9 ft and
      // spans x 61.7 to 79.6 — inside the region it names.
      label: 'home plate',
    },
  ],
};

// ---------------------------------------------------------------------------
// 10 · Above and below the dots
//
// §5, The dots: "the four end-zone faceoff spots. Used loosely to mean the depth-line
// they define across the zone", and "'above the dots' and 'below the dots' is how
// coaches split the zone in half."
//
// The end-zone dots are at x 69 (§3: twenty feet out from the goal line), so the
// depth-line is x = 69 and the two regions are the zone either side of it: the blue
// line at x 25 to the end boards at x 100.
//
// ⚠️ "IN HALF" IS THE SECTION'S WORD AND THE TWO PARTS ARE NOT EQUAL. Above the dots
// is 44 ft of the zone's 75 and below is 31 — visible in the picture the moment it is
// drawn, which is why the caption says "the upper part and the lower part" rather than
// letting a listener hear a claim the drawing contradicts. Reported to the coordinator
// rather than edited: §5 is not this file's to change.
//
// The upper region needs no arc — the corner arc starts at x 72, so at x 69 and below
// the side boards are still straight.
// ---------------------------------------------------------------------------

const aboveAndBelowTheDots = {
  id: 'above-and-below-the-dots',
  owner: 'content/foundation/rink_map.md',
  half: true,
  width: 900,

  caption:
    'Above and below the dots: the split coaches use to divide the zone at the end-zone ' +
    'faceoff dots — unequal halves, tinted here.',

  describe:
    'The attacking half of the rink, the net at the right, tinted in two shades either ' +
    'side of an unmarked line drawn across the zone through the two faceoff dots. The ' +
    'part from that line out to the blue line is labelled "above the dots"; the part from ' +
    'it in to the end boards, containing the net, the crease and the ice behind the net, ' +
    'is labelled "below the dots". No line is painted between them and no players are ' +
    'drawn.',

  zones: [
    {
      // (25, ±42.5) to (69, ±42.5). Vertex mean (47, 0); "above the dots", fourteen
      // characters, reserves 25.1 ft and spans x 34.4 to 59.6 — inside the region.
      points: [
        { at: 'blue-line', dy: 42.5 },
        { at: 'faceoff-dot:right', dy: 20.5 },     // (69, 42.5) — the side boards
        { at: 'faceoff-dot:left', dy: -20.5 },     // (69, -42.5)
        { at: 'blue-line', dy: -42.5 },
      ],
      label: 'above the dots',
      fill: 'rgba(91,95,102,0.09)',
      stroke: 'none',
    },
    {
      // x 69 to the end boards, following the corner arc so the shading reaches the
      // wall rather than cutting across it. Vertex mean (84.1, 0); "below the dots"
      // spans x 71.6 to 96.6 — inside the region, crossing the goal line and the net,
      // which carry no glyphs in this diagram.
      points: [
        { at: 'faceoff-dot:right', dy: 20.5 },     // (69, 42.5)
        ...boardArc(1),
        ...boardArc(-1).reverse(),
        { at: 'faceoff-dot:left', dy: -20.5 },     // (69, -42.5)
      ],
      label: 'below the dots',
      fill: 'rgba(15,90,143,0.13)',
      stroke: 'none',
    },
  ],
};

// ---------------------------------------------------------------------------
// 11 · The three zones
//
// §4 has no diagram and is the section the document itself calls "the thing that
// confuses every beginner". It is a `##` rather than a `###`, so it is outside the
// subsection census this file's other additions came from; it is here because the
// confusion it names is spatial and a picture is the natural place to fix it.
//
// ⚠️ THE ONE THING A PICTURE OF THIS CAN GET WRONG is drawing the labels as though
// they belonged to the ice. They belong to the team: "the same physical piece of ice
// is *your* defensive zone and *their* offensive zone, simultaneously", and the ends
// swap every period. Positive x is the attacking end by the corpus's own convention
// (src/data/rink.json), so the picture has to make a choice — and the caption has to
// say that it is the picture's choice.
// ---------------------------------------------------------------------------

const theThreeZones = {
  id: 'the-three-zones',
  owner: 'content/foundation/rink_map.md',
  title: 'The three zones',
  half: false,
  width: 1100,

  caption:
    'The whole sheet, split by the two blue lines into defending, neutral and attacking ' +
    'zones — attacking drawn on the right here, the picture’s choice, not a fixed fact.',

  describe:
    'The whole two-hundred by eighty-five foot rink seen from above, tinted in three ' +
    'bands across its length. The band from the left-hand end boards to the near blue ' +
    'line is labelled "defending zone"; the band between the two blue lines, containing ' +
    'the centre red line and the centre faceoff circle, is labelled "neutral zone"; the ' +
    'band from the far blue line to the right-hand end boards is labelled "attacking ' +
    'zone". Each band runs the full width of the ice and follows the rounded corners to ' +
    'the boards. No players are drawn.',

  zones: [
    {
      // The far end: the blue-line edge at x -25, then round the corner arc to the end
      // boards at x -100. Vertex mean (-61.2, 0); "defending zone", fourteen characters
      // at 3.05 ft each on a full sheet, spans x -82.5 to -39.8 — inside the region.
      points: [
        ...blueLineEdge(-1),
        ...boardArcFar(1),
        ...boardArcFar(-1).reverse(),
      ],
      label: 'defending zone',
      fill: 'rgba(91,95,102,0.09)',
      stroke: 'none',
    },
    {
      // Blue line to blue line, 50 ft (§1, a derivation from Rules 1.2 and 1.5 rather
      // than a stated figure — the caption claims no number for it). Vertex mean
      // (0, 0); "neutral zone", twelve characters, spans x -18.3 to 18.3.
      points: [
        { at: 'blue-line', dy: 42.5 },
        { at: 'blue-line::far', dy: 42.5 },
        { at: 'blue-line::far', dy: -42.5 },
        { at: 'blue-line', dy: -42.5 },
      ],
      label: 'neutral zone',
      fill: 'rgba(15,90,143,0.07)',
      stroke: 'none',
    },
    {
      // The near end, mirrored. Vertex mean (61.2, 0).
      points: [
        ...blueLineEdge(1),
        ...boardArc(1),
        ...boardArc(-1).reverse(),
      ],
      label: 'attacking zone',
      fill: 'rgba(15,90,143,0.13)',
      stroke: 'none',
    },
  ],
};

// ---------------------------------------------------------------------------
// 12 · §2's map of the sheet, in two pictures
//
// ⚠️ WHAT THESE REPLACE, AND THE MEASUREMENT THAT DECIDED IT. §2 carried ONE
// picture, `rink-map-full`: the whole sheet at `kind: 'rink'` with `labels: true`,
// which overlays EVERY entry in src/data/rink.json. Three things were wrong with it
// and only the first is about scale.
//
// (1) THE OVERLAY'S TYPE IS THE SMALLEST IN THE CORPUS AND NOTHING COMPENSATES IT.
//     `rinkSvg` draws the overlay at a flat `size: 2.4` rink-feet. `playSvg` scales
//     its own text by TXT = 1.7 on a full sheet, precisely because a full sheet holds
//     twice the ice in the same column — but the overlay never goes through that
//     path. So the labels came out at 2.4 ft on a 204-unit viewBox: 2.4 x 792/204 =
//     9.3 px in a 792 px desktop column, against 3.2 x 792/104 = 24.4 px for a zone
//     label on a half sheet. Under 40% of the size, in the one picture a beginner is
//     told to come back to.
//
// (2) EVERY LABEL WAS IN THE RIGHT-HAND HALF, AND ON A PHONE THAT HALF STARTS
//     OFF-SCREEN. All 19 entries in rink.json have x >= 0 — 26 labels once the seven
//     sided ones are drawn twice — so they crowded into the attacking end while two
//     thirds of the sheet carried none. A full-sheet figure is held at
//     `min-width: 640px` inside a 346 px scroll box at 375 px (global.css:2188), so
//     640 px of a 204-unit viewBox shows 110 units: x -102 to about +8, and ONLY
//     `centre-ice` falls in it. The reader met an unlabelled rink and had to guess to
//     drag inside the box. ⚠️ The px-per-foot is nearly the same on a phone either way
//     (3.14 full against 3.33 half) — on a PHONE the defect is the hidden half, and on
//     a DESKTOP it is the type size. Two different failures, one picture.
//
// (3) THE LABELS WERE NODE IDENTIFIERS, NOT THE VOCABULARY. `half-wall:R`,
//     `top-of-circle:L`, `faceoff-dot:R` — the coordinate table's own keys with a
//     mirror suffix, under a caption that promised the standard position vocabulary.
//     §5 calls these the half-wall, the top of the circle, the dots. Two of the
//     labels — `bumper` and `neutral-zone-mid` — name no area in §5 at all.
//
// ⚠️ AND THE SHADED-REGION INSTRUCTION CANNOT RESCUE THAT MAP — which is worth
// stating, because shading an area instead of dotting it is the obvious repair and it
// does not work HERE. Shading is right wherever the document bounds the region, and
// §5's end-zone vocabulary splits cleanly in two:
//
//   BOUNDED, and therefore shadeable — the slot, the high slot, the low slot, the
//   goalmouth, home plate, the crease, the trapezoid, above and below the dots. ⚠️ But
//   they OVERLAP each other by construction: home plate contains the slot, the slot
//   contains the high and low slot, the goalmouth sits over the crease, the trapezoid
//   sits inside "below the dots". Every one already has its OWN diagram in this file,
//   drawn alone, for exactly that reason.
//
//   UNBOUNDED, and therefore not shadeable at all — the point, the half-wall, the
//   corners, the boards, the office, the top of the circle, behind the net as against
//   the corners. §5 gives these no extent, deliberately: rink.json's own `point` note
//   spends a paragraph on why inventing an offset for it is forbidden.
//
// So a single map of the end zone cannot shade its vocabulary: half of it would be
// unreadable overlap and the other half would be invented geometry. Each of these two
// pictures therefore shades exactly ONE region, and it is a region §1 or §2 gives a
// dimension for.
// ---------------------------------------------------------------------------

const neutralZoneMap = {
  id: 'rink-map-neutral-zone',
  owner: 'content/foundation/rink_map.md',
  title: 'The neutral zone',
  half: false,
  width: 1100,

  caption:
    'The whole sheet, with the neutral zone — the middle third between the two blue ' +
    'lines — shaded, showing the centre line, centre dot and four neutral-zone spots.',

  describe:
    'The full two hundred by eighty-five foot rink seen from above. The band between the ' +
    'two blue lines is shaded and labelled "neutral zone". In it are the centre red line, ' +
    'the centre faceoff dot inside its blue circle, and four red faceoff spots without ' +
    'circles, two just outside each blue line. The two end zones either side are ' +
    'unshaded, each with its goal, crease, trapezoid and pair of faceoff circles. No ' +
    'players are drawn.',

  zones: [
    {
      // ⚠️ DELIBERATELY THE SAME FOUR VERTICES AS `the-three-zones`' middle band, and
      // under the same label. The two pictures answer different questions — §4's is
      // about the zones being named relative to your TEAM, this one is about what is
      // painted in the middle third — but they are the same ice, and a second polygon
      // for it would be a second definition. scripts/check_zones.py groups by label
      // and reports divergence, so identical is the only safe form.
      points: [
        { at: 'blue-line', dy: 42.5 },
        { at: 'blue-line::far', dy: 42.5 },
        { at: 'blue-line::far', dy: -42.5 },
        { at: 'blue-line', dy: -42.5 },
      ],
      label: 'neutral zone',
      // The vertex mean is (0, 0) — the centre dot, inside the centre circle, where
      // the words would sit on top of both. Moved DOWN 28 ft: "neutral zone" is twelve
      // characters at 3.05 ft each on a full sheet, so it spans x -18.3 to 18.3 (inside
      // the band, which reaches ±25) and y -31.8 to -24.2 — clear of the circle, whose
      // bottom is y -15, and clear of the two lower neutral-zone dots at (±20, -22),
      // which the label's x span never reaches. The POLYGON is untouched.
      labelDy: -28,
      fill: 'rgba(15,90,143,0.13)',
      stroke: 'none',
    },
  ],
};

const endZoneMarkings = {
  id: 'rink-map-end-zone-markings',
  owner: 'content/foundation/rink_map.md',
  title: 'One half of the sheet',
  half: true,
  width: 1000,

  caption:
    'One half of the sheet at twice the scale: the blue line, faceoff circles, goal ' +
    'line, crease, trapezoid, and the shaded strip of ice behind the net.',

  describe:
    'One half of the rink seen from above, from the centre red line at the left to the ' +
    'end boards at the right. A blue line crosses a quarter of the way in; then two ' +
    'faceoff circles with their hash marks; then the goal line, with the net standing on ' +
    'it, the light blue crease in front of it and two dashed red trapezoid lines behind ' +
    'it. The strip of ice between the goal line and the end boards is shaded, running the ' +
    'full width of the sheet and following the curve of the corners round to the end ' +
    'boards. No players are drawn.',

  zones: [
    {
      // The goal line at x 89 to the end boards at x 100, following the corner arc so
      // the shading reaches the wall rather than cutting across it. 657.8 sq ft drawn
      // against 660.7 exact — see `behindGoalLineArc` for the derivation and the sign
      // of the error.
      points: [
        ...behindGoalLineArc(1),
        ...behindGoalLineArc(-1).reverse(),
      ],
      // ⚠️ NO LABEL, AND IT IS A MEASUREMENT RATHER THAN A PREFERENCE. A zone label is
      // drawn at the vertex mean with no collision avoidance — here (94.5, 0) — and the
      // shortest honest name, "behind the net", is fourteen characters reserving 25.1 ft
      // on a half sheet. The strip is 11 ft deep. The words would run from x 81.9 to
      // 107.1: across the crease, out past the end boards at x 100 and off the frame,
      // which stops at x 102. Same call and same reason as `theGoalCrease` above. The
      // region is named in the caption and in `describe`.
      // ⚠️ NO OUTLINE either: the goal line and the two trapezoid lines are already
      // painted red along two of this polygon's edges, and a dashed blue border drawn
      // over real paint invites a reader to take the wrong lines for the marking.
      stroke: 'none',
      // ⚠️ 0.13, NOT theTrapezoid's 0.16, and the difference is the point. That diagram
      // shades the trapezoid in this same document; this one shades the whole strip,
      // trapezoid included, and the trapezoid's own dashed lines show THROUGH it. Two
      // regions in one document under an identical wash, one inside the other, is how a
      // reader comes away thinking the shaded thing is the marked thing. The lighter
      // fill is the same one theThreeZones and aboveAndBelowTheDots use for "a zone".
      fill: 'rgba(15,90,143,0.13)',
    },
  ],
};

// ---------------------------------------------------------------------------
// The map that replaced this document's ASCII schematic of one end zone.
//
// The old drawing carried the disclaimer "schematic, not to scale" — which was
// honest, and was also the reason it was worth replacing. This is generated
// from the coordinate table, so it IS to scale, and scripts/check_geometry.py
// asserts that table against this document's own dimensions. The relationship the
// ASCII was drawn to fix in the reader's head — how much rink sits behind the goal
// line, how far the point is from the half-wall — is now measurable off the page
// rather than asserted beside it.
export const MAPS = [
  {
    id: 'rink-map-end-zone',
    kind: 'rink',
    owner: 'content/foundation/rink_map.md',
    half: true,
    labels: true,
    width: 1000,
    // The owner's own polygons, copied from `theHighSlot` and `theLowSlot` above rather
    // than re-derived — see the ⚠️ in rink.mjs on why copying is the correct move here.
    // High slot: the tops of the circles in to the dots. Low slot: the dots in to the
    // front of the crease, x 83 being the goal line less its 6 ft depth.
    zones: [
      // Staggered: the labels are wider than their own regions, so centring both on
      // y 0 printed them through each other. One up, one down — see the ⚠️ in rink.mjs.
      { points: [{ x: 54, y: 7 }, { x: 69, y: 7 }, { x: 69, y: -7 }, { x: 54, y: -7 }],
        // Pushed left as well as up: centred, its box reached x 71.7 and denied
        // `bumper` (anchor x 71) the only slot that keeps it off the lower circle's
        // arc, which the owner reported as unreadable. The label is still inside its
        // own region; the region is what carries the meaning, not the centring.
        label: 'the high slot', labelDy: 3.6, labelDx: -5 },
      { points: [{ x: 69, y: 7 }, { x: 83, y: 7 }, { x: 83, y: -7 }, { x: 69, y: -7 }],
        label: 'the low slot', labelDy: -3.6 },
    ],
    // ⚠️ THE ORIENTATION SENTENCE IS THE FIRST THING A LISTENER HEARS, AND IT MUST
    // MATCH `half: true`'s ACTUAL FRAME. `rinkSvg` builds a half viewBox of
    // `-2 -44.5 104 89` — its own parameter doc says "attacking half only, CENTRE LINE
    // to end boards" — so the left edge is two feet PAST centre ice, not the blue line.
    // Against src/data/rink.json the centre red line is x 0, the blue line x 25, the
    // goal line x 89 and the end boards x 100, which puts the blue line 27 of 104 units
    // in: a quarter of the way across, not at the edge. The centre red line IS drawn
    // (full width, 1 ft, PALETTE red) and `centre-ice` is one of the overlay labels, so
    // naming it points at something the reader can see. This caption said "the blue line
    // is at the left" and the prose at rink_map_and_glossary.md §5 said the same; both
    // were wrong, and this diagram is borrowed into getting_started.md, whose readers
    // cannot tell a blue line from a red one by looking. `endZoneMarkings` above — the
    // other `half: true` map in §2 — already words it correctly; keep the two together.
    caption:
      'One end zone at twice the scale, labelled with the standard position vocabulary: ' +
      'the point, half-wall, crease and corners, with the high and low slot shaded as ' +
      'regions.',
    describe:
      'The attacking half of the rink seen from above, from the centre red line at the ' +
      'left to the end boards at the right, with the blue line about a quarter of the way ' +
      'in: two faceoff circles, the net on the goal line with the crease in front of ' +
      'it and the trapezoid behind. Most named areas — the point, the half-wall, the top ' +
      'of the circle, the crease and the corners among them — are marked with a dot and a ' +
      'plain-English label; the high slot and the low slot are shown instead as two ' +
      'shaded regions in front of the net.',
  },
];

export default [
  theSlot,
  theHighSlot,
  theLowSlot,
  theGoalmouth,
  pointAndHalfWall,
  theTrapezoid,
  strongAndWeakSide,
  theGoalCrease,
  homePlate,
  aboveAndBelowTheDots,
  theThreeZones,
  // §2's pair, kept adjacent and in the order §2 introduces them: the whole sheet
  // first for orientation, then one half of it at twice the scale.
  neutralZoneMap,
  endZoneMarkings,
  ...MAPS,
];

