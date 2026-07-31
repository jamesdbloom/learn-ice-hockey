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
    'More goals are scored from it than from everywhere else combined, which is why ' +
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
    'weak-side winger collapsing down when the centre goes to help in the corner, so find ' +
    'out which system your team plays. ' +
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
    'This is where tips, rebounds and screen position happen, and shots from here go in at a ' +
    'far higher rate than shots from anywhere else, which is why defenders cannot let anyone ' +
    'stand unmarked in it and why a net-front player fights for it. ' +
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
    'It is a different job from the slot, one layer apart: in the low zone collapse (zone) ' +
    'coverage assumed here as the default — a coaching choice, not a rule — the ' +
    'weak-side defenceman is responsible for the goalmouth and does not leave it, and getting the two mixed ' +
    'up is one of the most common causes of a blown assignment. ' +
    'The crease itself is the goaltender’s space and the shading is not an invitation to ' +
    'stand in it: the instruction is to live at the edge of the paint, not in it.',

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
    // "They are where defencemen live in the offensive zone" (§3, The blue lines) and
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
    'Where it applies is the part to check rather than assume: the NHL, the KHL and IIHF play ' +
    'have it, most North American rec, beer-league and youth associations do not, and in ' +
    'England and Wales England Ice Hockey’s own regulations say it is "not currently ' +
    'enforced" while the current In-House Rules are silent — so ask your league before ' +
    'assuming either way.',

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
    'The weak-side net-front area has its own name, the backdoor, and it is the most ' +
    'dangerous unmarked space in hockey, because a player arriving there is behind the ' +
    'goaltender’s field of view.',

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
  ...MAPS,
];

