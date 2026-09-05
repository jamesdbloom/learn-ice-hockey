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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'The slot is the ice directly in front of the net, between the two faceoff circles, ' +
    'running from the top of the circles down to the goalmouth — the shaded band here. ' +
    'It is where most goals are scored from — over a three-year five-on-five sample, ' +
    'close to half of all NHL goals came from the inner slot alone, on Sportlogiq tracking ' +
    'that is not public and cannot be re-derived — which is why ' +
    'defensive-zone coverage comes down to who is standing in it and offensive-zone play ' +
    'comes down to getting a puck and a body there at the same time. ' +
    'Nothing on a rink marks the slot out: its edges are read off the faceoff circles and ' +
    'the crease, which are painted, but the region itself is not. ' +
    'It is layered, and the layers have different jobs — the high slot from the dots up to ' +
    'the top of the circles, the low slot from the dots down, and the goalmouth at the ' +
    'crease — each of which is drawn separately.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'The high slot is the upper layer of the slot — from the level of the faceoff dots up ' +
    'to the top of the circles, still between the two circles. ' +
    'This is the shooting layer: a player left unmarked here gets a clean look with time to ' +
    'pick a corner, and a puck arriving from the half-wall is a one-timer. ' +
    'Who covers it is a coaching choice rather than a rule — in the low zone collapse (zone) ' +
    'system assumed here as the default it belongs to the centre, or to the ' +
    'weak-side winger collapsing down when the centre goes to help in the corner, while ' +
    'under man-on-man nobody holds the area at all and you go with your check wherever they ' +
    'go — so find out which system your team plays. ' +
    'Like the rest of the slot it is not painted on the ice; the circles and dots that bound ' +
    'it are.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'The low slot is the lower layer of the slot — from the faceoff dots down toward the ' +
    'goalmouth, between the circles and outside the crease. ' +
    'This is where tips, rebounds and screen position happen, which is why defenders cannot ' +
    'let anyone stand unmarked in it and why a net-front player fights for it. ' +
    'The scoring evidence points here more heavily than anywhere else on the ice — but what ' +
    'has been counted is a share of goals rather than a conversion rate for this layer on ' +
    'its own, so treat “highest-percentage ice” as the shape those figures agree on rather ' +
    'than as a measured ranking of this layer against every other one. ' +
    'It is not a marking: the shading stops at the front edge of the crease and at the inner ' +
    'edges of the two faceoff circles, and those are the painted things a player actually ' +
    'reads it off.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'The goalmouth is the immediate front of the net, at the edge of the crease — the small ' +
    'shaded box here, which sits over the light blue paint and is a great deal smaller than ' +
    'the low slot above it. ' +
    'It is where tap-ins and jam plays happen. ' +
    'It is a different job from the slot, one layer apart, and getting the two mixed up is one ' +
    'of the most common causes of a blown assignment — coaching observation rather than a ' +
    'counted ranking. ' +
    'Who owns it is a coaching choice rather than a law: in the low zone collapse (zone) ' +
    'coverage assumed here as the default the weak-side defenceman is responsible for it and ' +
    'does not leave it, under man-on-man it belongs to whoever’s check went there, and under ' +
    'a hybrid — man-on-man below the dots, zone above — to whichever of the low three is ' +
    'matched to the net-front forward. A collapsing ' +
    'box is a state rather than a system — what a low zone collapse turns into under maximum ' +
    'pressure — and in it both defencemen are inside together, plus whoever else is in there. ' +
    'So find out which system your team plays. ' +
    'The crease itself is the goaltender’s space and the shading is not an invitation to ' +
    'stand in it: the instruction is to work just outside the paint, not on its edge and not in it — three of the four books count the red line as crease.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'Two spots beginners routinely conflate, drawn together so the distance between them is ' +
    'visible. ' +
    'The point is the area just inside the blue line toward each set of boards, where the ' +
    'defencemen set up in the offensive zone — there is a strong-side point and a weak-side ' +
    'point, and it is an area rather than the blue line itself. ' +
    'The half-wall is the boards level with the faceoff dot, between the corner and the ' +
    'point, and it is where wingers live in offensive-zone possession, because from there ' +
    'the point, the slot, the corner and the net front are all available. ' +
    'They are not interchangeable: a defenceman who drifts down to the half-wall has ' +
    'abandoned the blue line. ' +
    'Neither is painted on the ice, the four players are drawn only to show where the two ' +
    'spots are and not as anybody’s formation, and only the right-hand pair is labelled — ' +
    'there is one of each on both sides.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'The trapezoid — the goalkeeper’s restricted area — is the marked area behind the net ' +
    'inside which the goaltender is allowed to play the puck: 22 ft wide along the goal line, ' +
    'widening to 28 ft at the end boards, and 11 ft deep on an NHL sheet. ' +
    'Unlike the house, the slot and the other named regions, it really is painted, in red, and ' +
    'playing the ' +
    'puck behind the goal line outside it is a two-minute minor for delay of game; the ' +
    'position of the puck decides it, and the sole exception is a goaltender playing the puck ' +
    'while keeping skate contact with the crease. ' +
    'Under the IIHF book — the British one — the shape is 6.80 m along the goal line and ' +
    '8.60 m at the boards, within a few inches of the NHL figures, but deeper, because the ' +
    'IIHF goal line is 4.0 m from the end boards rather than 11 ft. ' +
    'Where it applies is the part to check rather than assume: the NHL and IIHF play have it, both ' +
    'read directly in the rulebooks, and the KHL is commonly said to as well though no KHL rulebook ' +
    'was available to check that one. ' +
    'Neither the USA Hockey book nor the Hockey Canada ' +
    'book marks one at all, so a league running on either has none — though neither leaves ' +
    'the goalkeeper unrestricted back there: USA Hockey Rule 614(c) stops him freezing the ' +
    'puck outside the privileged area, corners excluded, and Hockey Canada assesses a minor ' +
    'with no warning for freezing it at all once he has left the crease. ' +
    'And in ' +
    'England and Wales England Ice Hockey’s own regulations say it is "not currently ' +
    'enforced" while the current In-House Rules are silent — so ask your league before ' +
    'assuming either way. ' +
    // The suspension's LIMIT, and it has to travel with the suspension. §3 spends a
    // warning block on the inference a listener draws without it, and Common Mistakes
    // carries an entry for that inference alone — but both are hundreds of spoken
    // sentences away, and the sentence immediately before this one has just taught the
    // opposite pattern for USA Hockey and Hockey Canada ("no trapezoid, still not free
    // to freeze"), so England arriving with no such rider reads as the deliberate
    // exception. IIHF Rule 63.2(I), read in sources/iihf_rules_2026-27.txt:5228-5230:
    // "On any Player, including the goalkeeper, who holds, 'freezes' or plays the puck
    // ... in such a manner as to deliberately cause a stoppage of play. Regarding to a
    // goalkeeper, this rule applies outside of their goal crease area". Two minutes by
    // Rule 16.1 (:1972-1973). The carve-out is 63.2(VI)'s Note (:5257-5259): "If a
    // goalkeeper comes out of their goal crease to 'cut down the angle' on a shot and
    // after making the save covers the puck, this shall be legal." It travels too, or
    // the caption produces a goaltender who will not cover a rebound.
    'Read that suspension narrowly if it applies to you: it frees where a goalkeeper may ' +
    'play the puck behind the net, never where they may freeze it — freezing the puck to ' +
    'cause a stoppage is a separate two-minute minor anywhere outside the goal crease ' +
    'under IIHF Rule 63.2(I), and coming out to cut down the angle, saving, and then ' +
    'covering it stays legal.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'Strong-side and weak-side are not places on the rink. The strong side is whichever side ' +
    'of the ice the puck is currently on, and the weak side — also called the off-side or the ' +
    'back side — is the other one. ' +
    'Here the puck is in play on the right-hand side of the ice, inside the strong-side ' +
    'faceoff circle, so the right half of the sheet is the strong side; move the puck ' +
    'across the middle of the ' +
    'ice and the two labels swap in that instant, which is why defence partners have to talk ' +
    'constantly and why one of them is always on the puck while the other is at the ' +
    'goalmouth. ' +
    'Nothing is painted to divide the ice this way: the boundary is the middle of the ice, ' +
    'not a marking, and this picture is one arrangement of the puck rather than a fixed map. ' +
    'The weak-side net-front area has its own name, the backdoor, and a player arriving ' +
    'there is behind the goaltender’s field of view, which is what makes it dangerous. ' +
    'How it ranks against every other unmarked position is not something anyone has counted.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  title: 'The goal crease',
  half: true,
  width: 900,

  caption:
    'The goal crease — the blue paint — shaded here. ' +
    'Under NHL Rule 1.7 a two-inch red line runs one foot outside each goal post, ' +
    'extends four feet six inches straight out at right angles to the goal line, and the ' +
    'two straight sides are joined by a six-foot radius arc struck from the centre of the ' +
    'goal line: eight feet wide at the goal line, six feet deep at its deepest point. ' +
    'Under the IIHF book — the British one — it is essentially the same shape at metric ' +
    'sizes, 2.45 m wide at the goal line. ' +
    'Why it matters to you: the crease is the boundary of goaltender interference. ' +
    'Two things this picture cannot show you. ' +
    'The crease is a volume rather than a patch of ice — the NHL extends it four feet ' +
    'vertically, to the height of the top of the goal frame, while IIHF Rule 1.7 says the ' +
    'goal crease area extends vertically until the top of the crossbar rather than to a ' +
    'fixed four feet — and a flat map of the ice draws only its floor. ' +
    'And the region is eight feet across on a map of a hundred-foot half-rink, which is ' +
    'too small a thing for any diagram at this scale to show you the difference between ' +
    'standing at the edge of the paint and standing on its red line. ' +
    'That difference is the one that costs you a goal: the red boundary line counts as ' +
    'crease under the IIHF, USA Hockey and Hockey Canada, and no rule of the NHL’s says ' +
    'either way. The single place the line’s status appears in the NHL book at all is a ' +
    'reference table — Table 14, fifth group, headed "screening situations" — and it goes ' +
    'the other way: an attacker who plants himself "on the crease line or outside the goal ' +
    'crease" so as to obstruct the goalkeeper’s vision has the goal allowed. One row of an ' +
    'appendix table, against three books that answer it the other way, is thin ground to ' +
    'stand on with a goal at stake. So take the instruction rather than the picture — ' +
    'keep your skates off the red line, not merely out of the blue paint.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'Home plate — the high-danger area, also called the house — is the shape drawn here. ' +
    'It runs in along the tops of the two faceoff circles, straight down the dot lines to ' +
    'the two faceoff dots, which are forty-four feet apart, so that part of it is ' +
    'forty-four feet wide, and then angles in to the two goalposts, six feet apart on the ' +
    'goal line. Drawn out it looks like a baseball home plate with its point at the net: ' +
    'square across the top, tapering to the width of the goal mouth. ' +
    'It is not an official marking and nothing on a rink paints it. It is a shape used by ' +
    'analysts and increasingly by coaches, and the things it is read off — the circles, ' +
    'the dots and the posts — are the ones that really are painted. ' +
    'The exact boundaries vary a little between analytics providers: Natural Stat Trick, ' +
    'Evolving Hockey and MoneyPuck all draw it slightly differently, so treat it as a ' +
    'concept rather than a measurement. ' +
    'The concept is simple and worth having. It is the working definition of a ' +
    'high-danger chance, and shots from inside it are worth several times a shot from ' +
    'outside it. ' +
    'That turns into two instructions on the ice: take your shots from inside it, and ' +
    'work the puck inside rather than shooting from outside.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  half: true,
  width: 900,

  caption:
    'The dots are the four end-zone faceoff spots, twenty feet out from the goal line. ' +
    'Used loosely, the two at this end define a depth-line straight across the zone, and ' +
    'that line is how coaches split the zone in half: above the dots is everything from ' +
    'it out to the blue line, below the dots everything from it in to the end boards. ' +
    'Note what the picture shows about that word "half" — the upper part is the longer ' +
    'of the two, so read it as the upper part and the lower part rather than as equal ' +
    'areas. ' +
    'This split is worth more than it looks, because it is the one relational term in ' +
    'this vocabulary with an exact anchor. High and low are comparatives with no ' +
    'boundary anywhere on the ice; the dots are painted, so once you know which end is ' +
    'meant, above and below them name a fixed line rather than a feeling. ' +
    'It divides jobs as well as ice. In a hybrid defensive system, for example, coverage ' +
    'is man-on-man below the dots and zone above them — one coaching choice among ' +
    'several, so find out which system your team plays. ' +
    'The line itself is not painted. Only the two dots at its ends are, and the boundary ' +
    'is read across between them — which is also how coaches use the hash marks, where ' +
    '"below the hash marks" for the low half of the zone is the same idea one step ' +
    'finer, and coaching observation rather than a counted one.',

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
  owner: 'content/foundation/rink_map_and_glossary.md',
  title: 'The three zones',
  half: false,
  width: 1100,

  caption:
    'The whole sheet, with the two blue lines dividing it into the three zones the ' +
    'rulebook names. The defending zone is the one containing the goal your team is ' +
    'defending, running from your own blue line to the end boards behind your own net. ' +
    'The neutral zone is the centre ice area between the two blue lines. The attacking ' +
    'zone is the one containing the goal you are attacking, from the opponent’s blue ' +
    'line to the end boards behind their net. ' +
    'The attacking end is drawn at the right here, and that is this picture’s choice ' +
    'rather than a fact about the building. ' +
    'Which is the part that confuses everyone: the zones are named relative to your team, ' +
    'not to the ice. The same physical piece of ice is your defensive zone and their ' +
    'offensive zone at the same moment, and because teams change ends after each period, ' +
    'the end you defended in the first is the end you attack in the second. The label ' +
    'follows the team, not the paint. So when a teammate says "get it deep", you have to ' +
    'know whose zone they mean — and if you are in any doubt, say "our end" or "their ' +
    'end" instead, which cannot be misheard. ' +
    'One thing the shading cannot show: a zone includes its blue line. For offside the ' +
    'puck is not in the attacking zone until it has completely crossed the line, and a ' +
    'player standing on the line is not yet in the zone. The line is wide enough for that ' +
    'to be a real distinction rather than a hair: NHL Rule 1.5 paints the blue lines twelve ' +
    'inches across, the IIHF book thirty centimetres. Reading the width as existing for the ' +
    'offside rule is this document’s inference, though — the rules that set the width do ' +
    'not say why it is that wide.',

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
// The two maps that replace this document's ASCII schematics.
//
// Both old drawings carried the disclaimer "schematic, not to scale" — which was
// honest, and was also the reason they were worth replacing. These are generated
// from the coordinate table, so they ARE to scale, and scripts/check_geometry.py
// asserts that table against this document's own dimensions. The relationship the
// ASCII was drawn to fix in the reader's head — how much rink sits behind the goal
// line, how far the point is from the half-wall — is now measurable off the page
// rather than asserted beside it.
export const MAPS = [
  {
    id: 'rink-map-full',
    kind: 'rink',
    owner: 'content/foundation/rink_map_and_glossary.md',
    half: false,
    labels: true,
    width: 1100,
    caption:
      'A map of the whole sheet, drawn to scale, with the standard position vocabulary ' +
      'marked on it. Two blue lines divide the ice into three zones: your defending zone, ' +
      'the neutral zone in the middle, and the attacking zone. The red centre line and the ' +
      'centre faceoff dot are in the middle; a goal line runs across each end, with the net ' +
      'on it and a strip of live ice behind. Nine faceoff dots are shown — four in the ' +
      'end zones with circles, four in the neutral zone without, and centre ice. The names ' +
      'marked here are the ones used throughout, so this is the picture to come ' +
      'back to when you hear “the half-wall” or “the point” and you ' +
      'are not sure where that is. Which end you are attacking swaps every period, so ' +
      '“defending” and “attacking” are relative to your team and not to the ice.',
    describe:
      'The full 200 by 85 foot rink seen from above, with every named position in the ' +
      'vocabulary marked by a dot and a label, and leader lines where a label ' +
      'has been moved clear of its neighbours.',
  },
  {
    id: 'rink-map-end-zone',
    kind: 'rink',
    owner: 'content/foundation/rink_map_and_glossary.md',
    half: true,
    labels: true,
    width: 1000,
    caption:
      'One end zone, drawn to scale, with the names used for the places in it. ' +
      'The blue line is at the left and the end boards at the right. Reading in from the ' +
      'line: the point, where defencemen stand; the tops of the circles; the half-wall, ' +
      'meaning the boards level with the faceoff dot; the high slot and then the slot in ' +
      'front of the net; the goalmouth and the crease; the corners; and the ice behind the ' +
      'net, with the trapezoid marked on it. These are names for areas rather than exact ' +
      'spots, and different coaches draw their boundaries slightly differently — the ' +
      'point in particular is an area just inside the blue line, not the line itself.',
    describe:
      'The attacking half of the rink seen from above: blue line at the left, end boards at ' +
      'the right, two faceoff circles, the net on the goal line with the crease in front of ' +
      'it and the trapezoid behind. Each named area of the zone is marked with a dot and a label.',
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
  ...MAPS,
];

