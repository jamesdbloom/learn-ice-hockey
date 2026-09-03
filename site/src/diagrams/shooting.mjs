/**
 * Diagrams for content/technique/shooting.md.
 *
 * The section is the source of truth. Every player and every route below is one its
 * prose places, and where the prose hedges, the caption hedges.
 *
 * WHY ONLY THREE, IN A DOCUMENT OF 941 LINES. `technique/` is under-drawn for a
 * structural reason rather than an oversight: most of it is body mechanics, and the
 * rink primitives cannot draw a body. This document is the technique document with
 * the most that IS rink-drawable, and even here the majority of it resisted a
 * picture. What resisted, and why, is enumerated at the foot of this header, because
 * an honest list of what could not be drawn is more useful than a diagram that fakes
 * it.
 *
 * WHAT IS DELIBERATELY NOT DRAWN HERE BECAUSE THE CORPUS ALREADY DRAWS IT.
 * shooting.md already carries `![](diagram:oz-home-plate)` at its "Where Shots Are
 * Worth Taking" section, which is offensive_zone_play.md's. Three more of this
 * document's spatial claims are already pictures owned elsewhere, and a fourth copy
 * is a fourth place a correction has to reach:
 *   - the royal road and the pass across it   -> `oz-royal-road`
 *   - where the screener's feet go            -> `oz-net-front-screen`,
 *                                                `screen-the-goalie-sightline`
 *   - the slot, the high slot, the goalmouth  -> `the-slot`, `the-high-slot`,
 *                                                `the-goalmouth`
 *   - the trailer, from the defending side    -> `rush-trailer`
 * Diagram 2 below overlaps `rush-trailer` in subject and not in claim: that one is
 * the defensive read on a full sheet (who takes the late man), this one is the
 * carrier's choice between his own shot and the feed. Diagram 1 overlaps
 * `oz-low-to-high` steps 3 and 4 — walk the line, then shoot — and differs in the one
 * thing that matters here: `oz-low-to-high`'s own caption says "the shot-blockers
 * this play is trying to beat are not in the picture", and the shot-blocker is the
 * entire subject of shooting.md's "Shooting Through Traffic". If the coordinator
 * judges that overlap too close, diagram 1 is the one to cut; the overlap is
 * declared here rather than left to be discovered.
 *
 * PERSONNEL IS NOT SHAPE. There is no neutral glyph: a circle is a forward and a
 * triangle a defenceman, so every marker is a personnel claim whether or not the
 * diagram wants to make one. Where this document does not say who, the caption says
 * so and says which way the marker was drawn. The only personnel this document
 * actually fixes are "a note for defencemen at the point" (:399) and "if your winger
 * is at the net front" (:465); both are used, and nothing else is inferred.
 *
 * GEOMETRY. Every position is a named position from src/data/rink.json plus an
 * offset in feet, and every offset is derived in a comment. Nothing is measured off
 * a picture.
 *
 * ⚠️ WHICH rink.json THESE ASSUME: the file AS ON DISK IN THIS WORKING TREE. The
 * values every clearance below depends on are
 *   goal-line (89, 0) · net-front (84, 0) · crease (86, 0) · point (25, 20)
 *   blue-line (25, 0) · high-slot (69, 0) · top-of-circle (54, 22)
 *   faceoff-dot (69, 22) · goal.crease_width 8 · crease_depth 6 · crease_arc_radius 6
 *   faceoff.end_zone_dot_from_goal_line 20 · faceoff.circle_radius 15
 * plus rink.mjs's glyph sizes: a forward's circle is r 2.9 reaching 3.875 ft of ink
 * once the 1.95 halo stroke is counted, and a defenceman's triangle 3.6 circumradius
 * reaching 4.6. If any of those moves, re-derive rather than adjust.
 *
 * THE CREASE, since two of these three put ink near it. Read off the crease path the
 * renderer emits — side lines 4.5 ft in from the goal line at half-width 4, closed by
 * a 6 ft arc struck from (88.972, 0), so the arc's furthest point out is x = 82.972 on
 * the centre line. `net-front` (84, 0) and `goalmouth` (85, 0) are both INSIDE that,
 * which rink.json's own note warns about: any skater on either datum needs an offset.
 *
 * ⚠️ TWO ROUTES HERE WILL REPORT AS `SKIP` IN `check-arrivals.mjs`, AND THAT IS NOT A
 * DEFECT — but it is a hole in the check and it belongs on the record rather than in a
 * surprise. That tool infers whose route a line is from the player it STARTS on, and
 * reports anything starting more than 2.9 ft from a player as unattributable and
 * unchecked. Phases 2 and 3 of the breakaway start where phase 1 and phase 2 end, 14.0
 * and 29.0 ft from the nearest marker, so both are skipped. `oz-low-to-high`'s shot
 * already does the same thing for the same reason. What makes it harmless HERE is
 * particular to this diagram and should not be generalised: a breakaway has no opposing
 * skater on the ice at all, so there is nothing either form could have found. The
 * numbers are written out beside each route anyway.
 *
 * ⚠️ NOT RENDERED THROUGH THE SHARED BUILD. `site/scripts/build-diagrams.mjs` imports
 * every module and four other agents were editing modules while this was written, so
 * the round's coordinator runs the single rebuild. These three were rendered in
 * isolation through `playSvg` into a scratch directory and looked at; they have NOT
 * been through `check-arrivals.mjs`, which imports the registry. The arrival
 * arithmetic each route depends on is written out beside it instead, so it can be
 * re-derived rather than re-trusted.
 *
 * ---------------------------------------------------------------------------------
 * WHAT RESISTED A PICTURE, AND WHY. Recorded because the open question is whether to
 * build body-mechanics primitives at all, and this is the evidence for it.
 *
 *   THE SIX SHOT TYPES (wrist, snap, slap, backhand, one-timer, tip) — all six are
 *   taught as hand position, weight transfer, blade roll, where the puck sits on the
 *   blade and how long the blade is on the puck. None of that exists at rink scale.
 *   The wrist shot's own blockquote turns on a blade rotating through a 180 ms
 *   contact; the snap-versus-slap distinction is a wind-up height; the backhand is
 *   "hands 40 to 50 cm apart". A rink diagram can say where a player stands and
 *   cannot say any of this, and faking it would be worse than leaving it undrawn.
 *
 *   "CHANGE YOUR RELEASE POINT — pull the puck 15 to 30 cm laterally" (:343). Under a
 *   foot, against a player marker 5.8 ft across. The instruction is real and it is
 *   below the renderer's resolution by a factor of six.
 *
 *   WHERE TO AIM (:366-370) — five-hole, under the arms and over the pads, blocker
 *   side, short side high. Every one of these is a target on the goaltender's body in
 *   a vertical plane. The rink is drawn in plan; there is no vertical plane in it.
 *   "Low blocker side for a rebound" additionally depends on which hand the
 *   goaltender catches with, which this document never fixes and a marker cannot
 *   carry.
 *
 *   "LOW AND HARD FOR TIPS — knee height or below" (:395) and the whole of Tips and
 *   Deflections. The teaching point is a height. Same problem.
 *
 *   THE ROYAL ROAD — drawable, and drawn: `oz-royal-road`. Not repeated.
 *
 *   "WHICH SHOT, WHEN" (:312) is the one that looks drawable and is not. It maps
 *   shots onto areas — "inside the dots, snap; with a beat of time or from range,
 *   wrist; in tight or on your off side, backhand; at the net front, tip; and slap
 *   only from the point". Three of those five are not areas at all ("with a beat of
 *   time", "on your off side", "with a lane and time"), and drawing the other two as
 *   shaded regions would require inventing boundaries the document does not give.
 *   scripts/check_zones.py exists because a region drawn from a caption rather than
 *   from its owner went 3.14x too big in two diagrams. Left undrawn.
 *
 *   THE BREAKAWAY MOVES TABLE (:618-625) — six moves, each a puck path within about
 *   six feet of the shooter's body, several of them across it. Below resolution.
 *
 *   THE RULE MATERIAL — Rule 69, the high-stick ladder, the crossbar and shoulder
 *   ceilings on a tip. These are heights, book divergences and referee judgement.
 *   `screen-the-goalie-sightline` already carries as much of Rule 69 as a picture can
 *   carry, and it carries it in the caption rather than in the drawing, which is the
 *   honest ceiling.
 * ---------------------------------------------------------------------------------
 */

// The OPPOSITION goaltender in the crease, a foot back of the `crease` node, i.e.
// two feet out from the goal line. The same anchor `oz-low-to-high` and
// `game_management` use, and for the same reason: at the natural (86, 0) a net-front
// marker and the goaltender's letter are drawn on top of each other. (87, 0)
const GOALIE_IN_CREASE = { at: 'crease', dx: 1 };

// ---------------------------------------------------------------------------
// 1 — Shooting Through Traffic: find the lane, then shoot
//
// Owner text: shooting.md "Shooting Through Traffic" (:376-399). Numbered, because
// the section's whole point is the ORDER — "It happens because players decide to
// shoot before they check whether there is a lane, so the fix is an order of
// operations rather than a skill."
// ---------------------------------------------------------------------------

// The shooter's start. `point:right` is (25, 20) — the blue-line end of the point
// area. rink.json's own note records that the point is the AREA just inside the line
// and that this marker is the schematic anchor for it; the caption says so in words.
const POINT_R = 'point:right';

// Where the shooter ends up after "one or two steps laterally along the blue line —
// toward the middle usually" (:393).
//
// ⚠️ THE SECTION GIVES NO DISTANCE, and this is not one. Ten feet is chosen so that
// the change of lane is visible at the scale these render at, and the caption tells
// the reader to take the move from the words and not the feet from the picture —
// which is the treatment `oz-net-front-screen` already gives its own six-to-eight
// feet. For scale: `oz-low-to-high` draws fourteen feet for its owner's "two or
// three strides"; ten is proportionate to "one or two steps" and is not derived
// from anything.  (25, 10)
const STEPPED_TO = { at: 'point:right', dy: -10 };

// The shot blocker, standing in the lane the shooter HAD.
//
// The old lane is the straight line from (25, 20) to the middle of the goal line
// (89, 0): direction (64, -20), length 67.05, unit (0.9545, -0.2983). Fourteen feet
// along it is (38.36, 15.82); drawn at the round (38, 16), which is 0.06 ft off that
// line — squarely in it, which is what "set for the angle you had a second ago" means —
// and 13.60 ft from the shooter in a straight line.
//
// Fourteen feet along the lane rather than closer because the two markers have to
// separate: a
// defenceman's triangle reaches 4.6 ft of ink and a forward's circle 3.875, so
// 8.475 ft of ink meet before the players do. At 13.60 ft apart there is 5.13 ft of
// daylight between them and the picture cannot be read as contact.
const BLOCKER = { at: 'blue-line', dx: 13, dy: 16 };            // (38, 16)

// The far end of that old lane, drawn so the reader can SEE what the blocker is
// standing in. ⚠️ THIS WAS NOT IN THE FIRST DRAFT AND THE PICTURE DID NOT WORK
// WITHOUT IT: rendered, the blocker simply stood off to one side of the shot, because
// the lane he is set for is the one the shooter has just left and nothing on the ice
// showed it. The line is drawn the way the shaded regions are — light, dashed, and
// unmistakably not a route — because nobody skates it and nothing travels along it.
//
// The point on the old lane at x = 76, which is the `slot` node's x: 76 is 53.43 ft
// along the unit direction (0.9545, -0.2983), so y = 20 - 0.2983 x 53.43 = 4.06.
// Stopped there rather than run to the goal line so it clears the net-front winger at
// (81, 6) by 5.36 ft instead of passing under his marker.  (76, 4.06)
const OLD_LANE_END = { at: 'slot', dy: 4.06 };

// The own winger at the net front — ":465 If your winger is at the net front, the
// shooting lane past them is also the sightline they are blocking", and the section's
// own facts line, "Screen in the sightline, feet just outside the blue paint, stick
// on the ice for a tip" (:450).
//
// ⚠️ CREASE ARITHMETIC, because this is the marker that gets drawn in the blue paint.
// At (81, 6) the nearest crease boundary is the 6 ft arc struck from (88.972, 0):
// hypot(81 - 88.972, 6) = 9.977, minus the 6 ft radius = 3.977 ft of clearance. The
// forward's ink reaches 3.875 ft (r 2.9 body plus half of the 1.95 halo stroke), so
// 0.102 ft of the halo's outer edge stands clear of the paint and the crease arc is
// drawn intact. The straight side line at y = 4, x in [84.5, 89], is further away:
// hypot(3.5, 2) = 4.031. Nine diagrams in this corpus have put a net-front marker
// inside the paint; this is the same point offensive_zone_play.mjs arrived at after
// one of them, re-derived here rather than copied.  (81, 6)
const NET_FRONT_WINGER = { at: 'goal-line', dx: -8, dy: 6 };

// Where the shot stops. The new lane runs from (25, 10) to (89, -2) — one foot inside
// the far post, which rink.json puts at y = -3. Direction (64, -12), length 65.11,
// unit (0.9829, -0.1843). The drawn segment stops at x = 73, i.e. 48.83 ft along, at
// y = 10 - 0.1843 x 48.83 = 1.00. So (73, 1).
//
// What that buys: 16 ft short of the goal line, so the shot never reaches the crease;
// 9.43 ft from the net-front winger's marker at (81, 6), which is 5.55 ft of daylight
// past their 3.875 ft of ink; and 14.04 ft from the goaltender's letter at (87, 0).
const SHOT_ENDS = { at: 'net-front', dx: -11, dy: 1 };          // (73, 1)

const laneAndTheStep = {
  id: 'shooting-lane-and-the-step',
  owner: 'content/technique/shooting.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'Getting a point shot through, and the order is the whole of it: find the lane first, then ' +
    'shoot. A defenceman has the puck at the point — the area just inside the blue line, not the ' +
    'line itself. The faint dashed line is the lane he had a second ago, and an opponent is ' +
    'standing squarely in it; that line is not a marking on the ice and nothing travels along it, ' +
    'it is there so you can see what the blocker is set for. First the shooter moves sideways ' +
    'along the blue line toward the middle; then the shot goes from the new spot, past the blocker ' +
    'and through to the net front. ' +
    'Take the move from those words and not the distance from the picture: the instruction is one ' +
    'or two steps sideways and it fixes no measurement, so the ten feet drawn here is only what it ' +
    'takes for the change of lane to be visible at this scale. Keep the shot low, and say out loud who you are ' +
    'shooting at, because it passes your own winger at the net front and they need to know it is ' +
    'coming and to have a blade on the ice for the tip. A point shot is almost never trying to ' +
    'score directly — it is there to make a tip, a rebound or a scramble in the slot, which is why ' +
    'getting it through beats shooting it hard. The blocker is drawn as a forward because every ' +
    'marker here is either a forward or a defenceman, while the instruction behind it is only about ' +
    '"defenders’ sticks and bodies" and never says who — so read it as one body in the lane and ' +
    'not as an assignment. No other defenders are drawn, and nothing here shows whether the blocker adjusts, ' +
    'which is the next moment rather than this one. And a shot into a defender’s shins is worse ' +
    'than no shot at all: you have given up the puck, you have not tested the goalie, and the block ' +
    'usually starts the counter-attack the other way.',

  describe:
    'The attacking half of the rink, the opposition net at the right. Own players are drawn open, ' +
    'the opposition solid. A defenceman, drawn as a triangle, stands at the strong-side point at ' +
    'the blue-line end of the point area, with the puck just off the blade toward the middle. An ' +
    'opposition forward stands about fourteen feet down-ice of them, directly on the straight line ' +
    'from that point to the middle of the goal line. That line is drawn, faintly and dashed and ' +
    'labelled "old lane", running from the defenceman past the forward and stopping thirteen feet ' +
    'short of the goal line. Two numbered routes. One: a wave ending in an ' +
    'arrowhead — the notation for skating with the puck — running ten feet along the blue line from ' +
    'the defenceman toward the middle of the ice. Two: from the end of that move, a double line ' +
    'ending in an arrowhead, which is the notation for a shot, running down the ice and stopping ' +
    'sixteen feet short of the goal line; it passes about eight feet clear of the opposition ' +
    'forward’s marker, and extended it would cross the goal line one foot inside the far post. ' +
    'An own forward stands at the net front, eight feet out from the goal line and six feet to the ' +
    'strong side of its centre, outside the crease. The opposition goaltender is in the crease. No ' +
    'other players are drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: GOALIE_IN_CREASE },
    // A triangle, because he is a D — ":399 A note for defencemen at the point".
    { id: 'D', pos: 'D', at: POINT_R, label: 'step, then shoot' },
    // Drawn as a forward; see the caption's disclosure. The section names no position.
    { id: 'F', team: 'opp', pos: 'F', at: BLOCKER, label: 'the blocker' },
    // ":465 If your winger is at the net front" — the one net-front personnel claim
    // this document actually makes.
    { id: 'W', pos: 'F', at: NET_FRONT_WINGER, label: 'net-front traffic' },
  ],

  // The lane the shooter HAD, and the reason the blocker is standing where he is.
  // Two points make a line rather than a region; `oz-royal-road` draws its road the
  // same way, and for the same reason — it is not a marking on the ice and it is not
  // a route. Label kept to two short words on purpose: at the label size these render
  // at, "the lane you had" would be a box 28 ft wide and would sit on the blocker.
  zones: [
    { points: [POINT_R, OLD_LANE_END], label: 'old lane', fill: 'none' },
  ],

  routes: [
    // 1 — "Take one or two steps laterally along the blue line — toward the middle
    //     usually". Drawn as `carry`, the key's SKATE AND STICKHANDLE: the shooter
    //     has the puck. Not `crossovers`, which is a different claim about how the
    //     feet move, and which this section makes nowhere.
    //
    //     ARRIVAL. Arrow-ended and owned by a skater, so both forms apply. Tip
    //     (25, 10); the only opposing skater is the blocker at (38, 16), 13.60 ft
    //     away — outside the 9 ft at which an arrowhead may not be drawn. The route
    //     is straight, so its terminal tangent is (0, -1); the bearing to the
    //     blocker is (0.956, 0.294), which is 107 degrees off it, so he is BEHIND
    //     the tip and not ahead of it. Miss distance 13.0 ft against a 2.9 ft glyph.
    { from: POINT_R, to: STEPPED_TO, kind: 'carry' },
    // 2 — the shot. `shot` is the key's double line with a single arrowhead. A puck
    //     route, so the arrival forms do not reach it; the clearances are derived at
    //     SHOT_ENDS above and are what keep the head off the winger and the goalie.
    { from: STEPPED_TO, to: SHOT_ENDS, kind: 'shot' },
  ],

  // Off the blade on the up-ice side, 3.64 ft from the marker's centre — outside the
  // 2.9 ft body so it is not swallowed by it, and on the opposite side from the step,
  // where the first route's badge is drawn.  (28.5, 21)
  puck: { at: 'point:right', dx: 3.5, dy: 1 },
};

// ---------------------------------------------------------------------------
// 2 — Shooting Off the Rush: your shot from the wing, or the trailer
//
// Owner text: shooting.md "Shooting Off the Rush" (:519-545), and specifically
// "On a wide rush, the goalie is hugging the near post to take away the short side
// and is exposed far side and low" (:543) and "If you have a trailer coming late into
// the high slot, delaying a beat and passing back to them is often a better chance
// than your own shot from the wing — because it converts a perimeter shot into a slot
// shot" (:545).
//
// NOT NUMBERED. These are two options and exactly one of them happens; a badge means
// order in this notation, and numbering a menu would invent a sequence the prose does
// not have. The same reason `offensive_zone_play.mjs` gives for its own fan diagrams.
// ---------------------------------------------------------------------------

// The carrier, wide on the right wing. Nine feet up-ice of the right-hand faceoff dot
// and eleven feet outside it toward the boards, which puts him 9.5 ft off the dasher
// and on the outer edge of the faceoff circle.
//
// ⚠️ THIS WAS (62, 28) AND IT DID NOT READ AS WIDE. Rendered, the marker sat well
// inside the faceoff circle and the picture looked like a shot from the top of the
// circle rather than a rush down the wing, which is the one thing this diagram has to
// establish before anything else in it means anything.  (60, 33)
const WIDE_CARRIER = { at: 'faceoff-dot:right', dx: -9, dy: 11 };

// The puck, off the blade toward the net. 3.61 ft from the carrier's centre.  (62, 30)
const PUCK_WIDE = { at: 'faceoff-dot:right', dx: -7, dy: 8 };

// The defenceman, between the carrier and the net with the gap closing — ":532 the
// defender is skating backwards, gap closing, stick out toward the puck."
//
// Sixteen feet along the straight line from the carrier (60, 33) to the middle of the
// goal line (89, 0): direction (29, -33), length 43.93, unit (0.6606, -0.7517), so
// (70.57, 20.97), drawn at (70.5, 21). Goal-side by construction — the net is 27.98 ft
// from him against the carrier's 43.93 — and inside the carrier, which is what
// "between you and the net" means on a wide rush. Sixteen feet rather than closer
// because a triangle reaches 4.6 ft of ink and a circle 3.875: at 16.01 ft apart there
// is 7.53 ft of daylight and the picture cannot be read as contact.
//
// NO ROUTE FOR HIM. "Release as their stick is closing, not after" is a moment in
// time, and a still frame draws a place and not a moment. The caption carries it.
const RUSH_D = { at: 'faceoff-dot:right', dx: 1.5, dy: -1 };    // (70.5, 21)

// The goaltender, "hugging the near post to take away the short side".
//
// Derived rather than placed: the line from the puck (62, 30) to the middle of the
// goal line (89, 0) has direction (27, -30), length 40.36, unit (0.6690, -0.7433).
// Five feet out along it from (89, 0) is (85.66, 3.72). That is both "on the line from
// the puck to the exact centre of the goal line", which is the corpus's own account of
// a goaltender's angle, and toward the near post, which is this section's phrase — the
// two are the same point for a puck this wide, so the diagram does not have to choose
// between them.
//
// ⚠️ THIS WAS THREE AND A HALF FEET OUT AND THE CAPTION SAID SOMETHING THE PICTURE DID
// NOT SHOW. At 3.5 ft the marker sat at y 2.60, inside the posts at y +-3, so a caption
// reading "come across to the near post" was describing a goaltender drawn square in
// the goalmouth. At 5 ft out the letter sits at y 3.72, outside the near post, and the
// near-post position is visible rather than merely asserted. Still inside the crease:
// at y = 3.72 the 6 ft arc struck from (88.972, 0) reaches back to x = 84.26, so
// (85.66, 3.72) is 1.4 ft inside the paint, which is where a goaltender belongs.
const G_NEAR_POST = { at: 'goal-line', dx: -3.35, dy: 3.72 };   // (85.66, 3.72)

// The trailer, in the high slot — which this document's own glossary section defines
// as "the upper part of that area, from the faceoff dots out to the top of the
// circles" (:27), i.e. x between 54 and 69, between the circles. (56, -8) is inside
// it, and it is four feet further from the goal line than the carrier, which is what
// makes the feed a pass BACK rather than a pass across.
//
// ⚠️ DRAWN STATIC, AND THE FIRST DRAFT DREW HIM SKATING IN. That version put a skate
// route into the high slot and stopped the pass eight feet short of its arrowhead;
// rendered, the two arrowheads pointed at each other across a gap and read as two
// routes converging on nothing. A still frame can show the place he arrives at and
// cannot show that he is late — so the place is drawn and the caption and the label
// carry the lateness, which is the same treatment `goalie-front-door-back-door` gives
// its own back-door attacker.
const TRAILER = { at: 'high-slot', dx: -13, dy: -8 };           // (56, -8)

// Where the pass stops: eight feet short of the trailer, along the passing line. From
// (62, 30) to (56, -8) is (-6, -38), length 38.47, unit (-0.1560, -0.9878); (56, -8)
// plus 8 x (0.1560, 0.9878) is (57.25, -0.10).
//
// Clearance past the defenceman: the vector from the puck to (70.5, 21) is (8.5, -9),
// and its cross product with the unit direction is 9.80 ft — 5.20 ft of daylight past
// the triangle's 4.6 ft of ink, so the pass is not drawn through him.
const PASS_ENDS = { at: 'high-slot', dx: -11.75, dy: -0.1 };    // (57.25, -0.1)

const wideRushAndTheTrailer = {
  id: 'shooting-rush-wide-and-the-trailer',
  owner: 'content/technique/shooting.md',
  half: true,
  width: 900,

  caption:
    'A wide rush, at the moment the decision is made. You are carrying the puck down the right ' +
    'wing, a defenceman is between you and the net with the gap closing, and the goaltender has ' +
    'come across to the near post to take away the short side — which is exactly what leaves them ' +
    'exposed far side and low. Two things are worth doing from here and only one of them happens. ' +
    'The first is your own shot, released as the defender’s stick is closing rather than after ' +
    'it arrives, because if you wait until you are in a good spot you are shooting into a blocked ' +
    'lane from a bad angle. That shot is not drawn: a plan view of the ice cannot show height, and ' +
    '"far side and low" is half a height instruction. The second is drawn — delay a beat and feed ' +
    'the trailer, who has arrived late into the high slot — the ice between the circles from the ' +
    'level of the faceoff dots out to the tops of the circles. That is the whole argument for it: ' +
    'it turns a shot from the wing, which is a perimeter shot, into a slot shot, and it only ' +
    'exists if you knew what your second wave was doing before you got to the line. Three things ' +
    'the picture cannot say. It cannot say when the defender’s stick arrives, which is the read ' +
    'the shot depends on, and it cannot show the delay, which is a beat of time rather than a ' +
    'movement backwards. It shows the trailer at the moment he gets there rather than skating in, ' +
    'because a still frame can draw a place and not a late arrival. And he is drawn as a forward ' +
    'only because a marker has to be a forward or a defenceman — what you are told is that a ' +
    'trailer is coming, not who it is. No other defenders and no backcheckers are drawn.',

  describe:
    'The attacking half of the rink, the opposition net at the right. Own players are drawn open, ' +
    'the opposition solid. An own forward has the puck wide on the right wing, nine feet up-ice ' +
    'of the right-hand faceoff dot and eleven feet outside it toward the boards, about nine feet ' +
    'off the side wall, with the puck off the blade toward the net. An opposition defenceman, ' +
    'drawn as a triangle, stands sixteen feet away on the straight line between that carrier and ' +
    'the middle of the goal line, just inside and below the faceoff dot; no route is drawn for ' +
    'them. The opposition goaltender stands five feet out from the middle of the goal ' +
    'line, on the line from the puck to the centre of the goal, which puts the letter just outside ' +
    'the near post rather than square in the goalmouth. A second own forward — the trailer — ' +
    'stands in the ' +
    'high slot on the far side of the middle, four feet further out from the goal line than the ' +
    'carrier. A dashed line ending in an arrowhead, which is the notation for a pass, runs from ' +
    'the puck straight back down the ice and stops eight feet short of them. No shot is drawn, ' +
    'no route is drawn for the trailer, and there are no other players.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_NEAR_POST, label: 'near post' },
    { id: 'F', pos: 'F', at: WIDE_CARRIER, label: 'wide, with the puck' },
    { id: 'D', team: 'opp', pos: 'D', at: RUSH_D, label: 'gap closing' },
    { id: 'F', pos: 'F', at: TRAILER, label: 'the trailer, late' },
  ],

  routes: [
    // The feed. Dashed line and arrowhead — the key's PASSING. A puck route, so the
    // arrival forms do not apply to it; the clearances are derived at PASS_ENDS. It is
    // the only route in the picture: the shot is the option NOT drawn, for the reason
    // the caption gives, and the defenceman's closing gap is a moment rather than a
    // place.
    { from: PUCK_WIDE, to: PASS_ENDS, kind: 'pass' },
  ],

  puck: PUCK_WIDE,
};

// ---------------------------------------------------------------------------
// 3 — Breakaways: the approach, which is the part that gets skipped
//
// Owner text: shooting.md "Approach speed — slower than you think" (:568-584), plus
// the goaltender read in "The one thing that decides it: who moves first" (:555-566)
// and the rec-level observation at :666.
//
// Numbered, because the section numbers it in prose: "Come in hard to the blue line,
// then ease off through the top of the circles and accelerate again as you make your
// move." Three phases, and the order is the content.
// ---------------------------------------------------------------------------

// The carrier, alone in the neutral zone, fourteen feet short of the blue line.
// (11, 0)
const APPROACH_START = { at: 'blue-line', dx: -14 };

// The blue line itself, in the middle of the ice — "come in hard to the blue line".
const AT_THE_LINE = 'blue-line';                                 // (25, 0)

// The point on the centre line level with the tops of the two faceoff circles —
// "arrive at the top of the circles". Written as the top-of-circle node brought back
// to the middle so the derivation is visible: `top-of-circle:right` is (54, 22), and
// dy -22 puts it on the centre line at the same x. That x is itself derived, not
// stated: rink.json's end-zone dot sits 20 ft from the goal line with a 15 ft circle
// radius, so the tops of the circles are 35 ft out from the goal line.  (54, 0)
const TOP_OF_CIRCLES_MID = { at: 'top-of-circle:right', dy: -22 };

// Where the third phase stops. Thirteen feet further in and three feet off the middle.
//
// ⚠️ THE THREE FEET ARE A DRAWING CHOICE AND NOT A MOVE. The section's instruction is
// "do not decide before you can see them" (:602), so the diagram must not say which
// way the shooter goes; the offset exists so the last arrowhead does not point dead
// down the middle at the goaltender's letter, and the caption says the move is
// deliberately not drawn. The side is arbitrary and carries nothing — this document
// never fixes the shooter's handedness.
//
// ARRIVAL: tip (67, -3). There are no opposing skaters on the ice, which is what
// makes it a breakaway. The goaltender at (83, 0) is 16.28 ft away; the terminal
// tangent (0.9745, -0.2249) runs 23.6 degrees off the bearing to him, so the miss is
// 6.52 ft against a 2.9 ft glyph, and 16.28 ft is well outside the 9 ft at which an
// arrowhead may not be drawn.  (67, -3)
const MOVE_BEGINS = { at: 'high-slot', dx: -2, dy: -3 };

// The goaltender, out at the top of the crease. The crease arc's furthest point out
// on the centre line is x = 82.972, so (83, 0) is the top of the paint — six feet out
// from the goal line, which is rink.json's own `crease_depth`. A goaltender's marker
// is a bare letter with no halo, so there is no ink question here; a goaltender in
// his crease is where a goaltender belongs.
const G_TOP_OF_CREASE = { at: 'goal-line', dx: -6 };             // (83, 0)

const breakawayApproach = {
  id: 'shooting-breakaway-approach',
  owner: 'content/technique/shooting.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The approach on a breakaway, which is the half of it most players skip. Three phases, in ' +
    'order: come in hard to the blue line; ease off through the top of the circles, arriving there ' +
    'with less speed than you feel like carrying; then accelerate again into your move. Speed costs ' +
    'you three things out here. It shortens the decision window — at full flight you get roughly ' +
    'one option, where at three-quarter pace you can see the goaltender’s depth, change your ' +
    'mind and still execute. It hands the goaltender their easiest read, because a shooter flying ' +
    'in on a straight line has told them exactly where they will be in half a second. And a deke ' +
    'needs room to happen in: you cannot pull the puck across your body and get it back once you ' +
    'are past the post. Note the distance, because it is why the pattern works — the tops of the ' +
    'circles are thirty-five feet out from the goal line, so easing off there still leaves you most ' +
    'of a zone to accelerate through. What the last arrow does not say is which move you make, and ' +
    'that is deliberate: the instruction is not to decide at the blue line, before you can see what ' +
    'the goaltender is actually giving you. Two hedges travel with this. That a change of pace ' +
    'beats raw pace, and is worth more than any hand skill, is coaching craft rather than a ' +
    'measured finding — no source this document holds measures either ranking against a ' +
    'goaltender. And the goaltender is drawn out at the top of the crease because that is the ' +
    'well-coached one, who meets you out and retreats with you; their retreat is not drawn, and at ' +
    'rec level a goaltender is far more likely to be deep, flat-footed and square, which is itself ' +
    'a coaching observation rather than a counted one. Nobody else is on the ice, which is what ' +
    'makes it a breakaway.',

  describe:
    'The attacking half of the rink, the opposition net at the right. Own players are drawn open, ' +
    'the opposition solid. One own forward, alone, is in the neutral zone fourteen feet short of ' +
    'the blue line in the middle of the ice, with the puck just ahead of the blade. Three numbered ' +
    'routes run up the middle of the ice, each a wave ending in an arrowhead, which is the notation ' +
    'for skating with the puck. One: from the forward to the blue line. Two: from the blue line to ' +
    'a point level with the tops of the two faceoff circles, thirty-five feet out from the goal ' +
    'line. Three: from there, thirteen feet further in and three feet off the middle, finishing ' +
    'sixteen feet short of the goaltender and pointing past him rather than at him. The opposition ' +
    'goaltender stands at the top of the crease, six feet out from the goal line. No other players ' +
    'are on the ice, and nothing is drawn between the end of the third route and the net.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_TOP_OF_CREASE, label: 'top of the crease' },
    // Drawn as a forward. The section says nothing about who takes a breakaway, and
    // a marker has to be one shape or the other; the caption does not claim otherwise.
    { id: 'F', pos: 'F', at: APPROACH_START, label: 'alone, with the puck' },
  ],

  routes: [
    // 1 — "Come in hard to the blue line." `carry`, the key's SKATE AND STICKHANDLE.
    //     Tip (25, 0): no opposing skater on the ice; the goaltender's letter is
    //     58.0 ft away, which no reader reads as an arrival.
    { from: APPROACH_START, to: AT_THE_LINE, kind: 'carry' },
    // 2 — "ease off through the top of the circles". Tip (54, 0), goaltender 29.0 ft
    //     away. Same reasoning.
    { from: AT_THE_LINE, to: TOP_OF_CIRCLES_MID, kind: 'carry' },
    // 3 — "accelerate again as you make your move". See MOVE_BEGINS for the arrival
    //     numbers and for why the tip is three feet off the middle.
    { from: TOP_OF_CIRCLES_MID, to: MOVE_BEGINS, kind: 'carry' },
  ],

  // Just ahead of the blade, 3.90 ft from the marker's centre.  (14, -2.5)
  puck: { at: 'blue-line', dx: -11, dy: -2.5 },
};

export default [laneAndTheStep, wideRushAndTheTrailer, breakawayApproach];
