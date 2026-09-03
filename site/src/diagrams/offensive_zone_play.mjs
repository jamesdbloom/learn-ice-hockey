/**
 * Diagrams for content/systems/offensive_zone_play.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges — and this
 * document hedges more than most, because its own section 3 opens "This section
 * describes a coaching choice, not a law of hockey" and its tenth key takeaway is
 * "almost everything in this document is a coaching choice".
 *
 * Two things this set deliberately does NOT do:
 *
 *  - It does not number the fan diagrams. "The four options from the half-wall"
 *    (section 7) and "what to do from behind the net" (section 8) are menus of
 *    ALTERNATIVES, and exactly one of them happens. Numbered badges mean order in
 *    this notation, so numbering a menu would invent a sequence the prose does not
 *    have. The captions say so in words instead.
 *  - It does not try to carry rotation on one frame. "Rotation: the triangle moves,
 *    the shape does not" is movement over time; it is drawn as two diagrams, each
 *    captioned with which moment it is.
 */

// A caption clause that appears in more than one diagram is imported, never
// retyped: a sentence that appears twice is a sentence that can drift once, and
// this one already had. See rule69_clauses.mjs for why all four still say it.
import {
  CREASE_LINE_IS_THE_CREASE,
  DISALLOWED_ROWS_SHARE_THE_CREASE,
  REFEREE_JUDGEMENT,
  TABLES_ALLOW_OUTSIDE,
} from './rule69_clauses.mjs';

// ---------------------------------------------------------------------------
// Shared anchors. Named once because several diagrams refer to the same spots,
// and because a number that appears twice is a number that can drift once.
// ---------------------------------------------------------------------------

// The strong-side half-wall — "the boards area level with the faceoff dot,
// between the corner and the point" (section 7). (69, 38.5)
const HALF_WALL = 'half-wall:right';

// The goaltender, a foot back of the crease node — so two feet out from the goal
// line. Drawn deeper than the forechecking diagrams put him for a reason the
// notation forces: the player glyphs are nearly six feet across at rink scale,
// and a goaltender four feet out with a screener seven feet out renders as two
// overlapping circles. (87, 0)
const GOALIE = { at: 'crease', dx: 1 };

// The net-front screening spot for `oz-low-to-high`. Section 6 states it in feet
// — "at the edge of the blue paint, inside the faceoff dots — roughly six to
// eight feet out from the goal line ... Live just beyond the arc"
// (offensive_zone_play.md:437). Eight feet out, which is the outer end of that
// range and is what this diagram's `describe` says.
//
// ⚠️ THE dy WAS 4 AND THAT DREW INK IN THE BLUE PAINT. Measured off the BUILT SVG
// (site/public/diagrams/oz-low-to-high.svg), whose crease path is
// "M 89 -4 L 84.5 -4 A 6 6 0 0 0 84.5 4 L 89 4 Z" — side lines 4.5 ft in from the
// goal line at half-width 4, closed by a 6 ft arc struck from (88.972, 0). The
// nearest crease boundary to (81, 4) is 2.919 ft away, so the 2.9 ft glyph body
// cleared it by 0.019 ft — a quarter of an inch — while the 0.75 outline sat
// 0.36 ft INSIDE the paint and the 1.95 halo, 1.0 ft inside, rubbed out the top
// third of the crease arc's red line. That is the marking this document's own
// section 6 tells the reader to study, and F2 read as standing on it.
//
// dy 6 rather than a bigger dx, because the DEPTH is the number the document
// commits to and the lateral position is not: :437 bounds it only by "at the edge
// of the blue paint, inside the faceoff dots" (the dots are at y 22). At (81, 6)
// the nearest boundary is 3.977 ft: 1.08 ft of body daylight, 0.70 ft of outlined
// body, and 0.10 ft of halo daylight, so the arc is drawn intact. The glyph's
// inner edge falls at y 3.1, level with the post, so the drawn body still spans
// the ice from the post outward.
//
// ASSUMES, and dies if any of them moves: site/src/data/rink.json AS ON DISK IN
// THIS WORKING TREE — goal-line = (89, 0), goal.crease_width 8, crease_depth 6,
// crease_arc_radius 6 — and rink.mjs's glyph radius 2.9 with its 0.75 outline and
// 1.95 halo strokes. (81, 6)
const NET_FRONT = { at: 'goal-line', dx: -8, dy: 6 };

// ---------------------------------------------------------------------------
// 1 — The home-plate scoring area (section 1)
// ---------------------------------------------------------------------------

const homePlate = {
  id: 'oz-home-plate',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,

  caption:
    'The home-plate area — the shape analysts use to mark off the dangerous part of the ' +
    'offensive zone. It runs across the tops of the two faceoff circles, down the sides to the ' +
    'two faceoff dots, and then angles in to the two goalposts; shots taken inside it are ' +
    'counted as scoring chances. Shots from its inner part, close to the net and between the ' +
    'dots, are counted as high-danger chances, and that inner boundary is deliberately not ' +
    'drawn, because the description of that inner boundary is not precise enough to place ' +
    'on the ice. Nothing here is painted on a real rink: it is a counting convention, not a ' +
    'marking. The two markings that are real — the faceoff circles, which have a 15-foot radius and the crease, ' +
    'six feet deep from the goal line — are the ruler everything else is measured against.',

  describe:
    'The attacking half of the rink, the net at the right. A single shaded six-sided region is ' +
    'drawn over the end zone: its up-ice edge runs across the ice at the tops of the two ' +
    'faceoff circles, its two long sides run down-ice from the top of each circle to that ' +
    "circle's faceoff dot, and from each dot an angled edge runs in to the nearer goalpost. " +
    'The goaltender is in the crease. No skaters are drawn — this diagram is geography, not a play.',

  // The polygon is the section's sentence, corner for corner: "It runs from the
  // tops of the two faceoff circles, in along the tops of the circles, down to the
  // faceoff dots, and then angles in to the two goalposts."
  //
  // The goalposts are the only two corners the position vocabulary has no name
  // for, so they are given as the goal-line node plus the half-width of the goal
  // (post_y = 3 ft, NHL Rule 1.9's 6-foot goal), not as bare coordinates.
  zones: [
    {
      points: [
        'top-of-circle:right',              // (54,  22)
        'top-of-circle:left',               // (54, -22)
        'faceoff-dot:left',                 // (69, -22)
        { at: 'goal-line', dy: -3 },        // (89,  -3)  left post
        { at: 'goal-line', dy: 3 },         // (89,   3)  right post
        'faceoff-dot:right',                // (69,  22)
      ],
      label: 'home plate',
    },
  ],

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: GOALIE },
  ],
};

// ---------------------------------------------------------------------------
// 2 — The royal road, and a pass across it (section 2)
// ---------------------------------------------------------------------------

const royalRoad = {
  id: 'oz-royal-road',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,

  caption:
    'The royal road — an imaginary line down the centre of the ice, lengthwise, from the middle ' +
    'of one net to the middle of the other — and a pass crossing it in the offensive zone, which ' +
    'is the highest-value pass type measured, roughly double the next one. Crossing it forces the ' +
    'goaltender to push laterally, re-establish depth and angle, re-find the puck visually and ' +
    'reset their stick; a shot arriving before they finish that sequence is a desperation save ' +
    'rather than a positioning save. Passes across it finished at 15.50% — volunteer-tracked ' +
    'Passing Project data, 51,308 shots at 5-on-5, counting all attempts rather than shots on ' +
    'goal, so it is not comparable with a plain shooting percentage. Be careful with the line ' +
    'itself: published descriptions of where it runs do not agree, and the net-to-net version ' +
    'drawn here is kept for being the more conservative instruction, not ' +
    'the better supported one — the two sources closest to the original figures describe a ' +
    'shorter road that stops at the tops of the faceoff circles. The receiver is drawn at the ' +
    'weak-side dot because that is where you scan first; the defenders and ' +
    "the goaltender's lateral push are not drawn.",

  describe:
    'The attacking half of the rink, the net at the right. A dashed line runs down the middle of ' +
    'the ice from the centre of the goal line out through centre ice, labelled "the royal road". ' +
    'A forward has the puck on the strong-side half-wall, level with the faceoff dot. A dashed ' +
    'pass route runs from there straight across the zone, crossing the road between the faceoff ' +
    'dots, and finishes short of a second forward standing at the weak-side faceoff dot. The ' +
    'goaltender is in the crease. No defenders are drawn.',

  // A two-point "region" is a line. The road is not a marking on the ice, so it is
  // drawn the way the shaded regions are — dashed, light, and clearly not a
  // painted line — rather than as a route, which would mean somebody skated it.
  //
  // Drawn from the centre of the goal line to centre ice. This is HALF of the line
  // the caption describes: the diagram shows the attacking half only, and the
  // caption says the full line runs net to net.
  zones: [
    {
      points: ['goal-line', 'centre-ice'],
      label: 'the royal road',
      fill: 'none',
    },
  ],

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: GOALIE },
    { id: 'F', pos: 'F', at: HALF_WALL, label: 'the passer' },
    // "your first scan is the far side of the slot — the backdoor (the far post,
    // behind the defence) and the weak-side dot." The backdoor is not drawn: a
    // route to the far post runs across the goal mouth, which this notation will
    // not draw through. The weak-side dot is the other half of the same sentence.
    { id: 'F', pos: 'F', at: { at: 'faceoff-dot:left', dy: 4 }, label: 'weak-side dot' },
  ],

  routes: [
    // Finishes six feet short of the receiver's glyph, not on it.
    { from: HALF_WALL, to: { at: 'faceoff-dot:left', dy: 10 }, kind: 'pass' },
  ],

  puck: { at: 'half-wall:right', dy: -3.5 },
};

// ---------------------------------------------------------------------------
// 3 and 4 — The five-man shape, and the same shift one pass later (section 3)
//
// These are a pair, and they exist as a pair because "Rotation: the triangle
// moves, the shape does not" is movement over time. One frame cannot say it.
// ---------------------------------------------------------------------------

// Where the old carrier ends up after rotating up off the wall. Expressed as an
// offset from the half-wall he came from — eight feet up-ice and five feet in off
// the half-wall — because that is what "rotates up" means relative to where he
// was, and the vocabulary has no name for the spot. ASSUMES half-wall.y = 38.5
// (site/src/data/rink.json), which leaves him 9 ft off the dasher.
//
// This read "five feet off the boards", which was true only while half-wall.y was
// 33 and the half-wall was itself 9.5 ft off the dasher; the offset has always
// been measured from the half-wall, not from the boards, and the two stopped
// being interchangeable when half-wall moved onto the wall.
const ROTATED_UP = { at: 'half-wall:right', dx: -8, dy: -5 };   // (61, 33.5)

// The high forward. Section 3: "higher in the zone, toward the top of the circles
// or the point"; the non-negotiable is that at least one forward is in or
// attacking the home-plate area, and (54, 8) is inside it.
const HIGH_F = { at: 'top-of-circle:right', dy: -14 };          // (54, 8)

// The forward below the puck — "deeper toward the goal line than the puck
// carrier". Set two feet deeper and three feet off the corner node. (84, 31)
//
// The reason recorded here was that at the bare node the glyph "rendered shoulder
// to shoulder with the half-wall carrier ... two players side by side on the wall
// rather than one below the other", and that was a statement about half-wall.y =
// 33: the corner node is y 34, so the two sat within a foot of each other and read
// as level. At 38.5 the corner node is already 4.5 ft below the half-wall and 13.8
// ft from it, so the shape reads as one below the other without this offset. The
// dy: -3 is now buying depth separation it no longer has to buy. Left in place —
// changing it moves a glyph — but do not re-derive it from the stale reason.
const DEEP_CORNER = { at: 'corner:right', dx: 2, dy: -3 };

const fiveManShape = {
  id: 'oz-five-man-shape',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The five-man offensive-zone shape, at the moment the puck is on the strong-side half-wall: ' +
    'the carrier on the wall with the puck, one forward below him in the corner and one above ' +
    'him at the top of the circles, and both defencemen holding the blue line. That ' +
    'below-level-above arrangement is the attack triangle, and it is a ' +
    'default rather than a law of hockey — overload, a five-man rotation and a ' +
    '1-3-1 spread are all real alternatives, so find out which one your team plays. The one ' +
    'non-negotiable is that at least one forward is always in or attacking the home-plate area; ' +
    'a triangle sitting entirely on the perimeter is three players passing around the outside of ' +
    'a defence that is perfectly happy about it. Two things are about to happen, in order: the ' +
    'puck goes down to the corner, and the carrier rotates up off the wall — the next diagram is ' +
    'this same shift one pass later. Defenders other than the goaltender are not drawn.',

  describe:
    'The attacking half of the rink, the net at the right. Five own players. F1 has the puck on ' +
    'the strong-side half-wall. F2 is below him in the strong-side corner, nearer the goal line. ' +
    'F3 is above him and toward the middle, at the top of the circles and inside the home-plate ' +
    'area. Two defencemen stand on the offensive blue line, one each side. The opposing ' +
    'goaltender is in the crease; no other defenders are drawn. Two numbered routes: one, the ' +
    'pass from the half-wall down to the corner, finishing short of F2; two, F1 rotating up off ' +
    'the wall. F3 has no route, because the high player holds.',

  players: [
    // F-numbers are roles set by order of arrival, and the pair of diagrams turns
    // on their being reassigned. Here F1 is on the puck; after the pass below, the
    // section says in terms "the corner player is now F1".
    //
    // ON "LEVEL WITH THE PUCK". The section's three slots are "one below the puck,
    // one level with it, one above it", and it describes the level player as being
    // "in the inside lane rather than flat on the boards". There are three forwards
    // and one of them is carrying, so the carrier occupies one of the three slots —
    // and the section's own rotation bullet settles which, by calling the arriving
    // corner player "F1 (below/level)" and the half-wall man "the old carrier". So
    // the carrier is drawn on the wall and the caption does not claim he is the
    // inside-lane support player, because he is not; that description belongs to
    // the level player on the frames where somebody else has the puck.
    { id: 'F1', pos: 'F', at: HALF_WALL,     label: 'the carrier' },
    { id: 'F2', pos: 'F', at: DEEP_CORNER,   label: 'below the puck' },
    { id: 'F3', pos: 'F', at: HIGH_F,        label: 'above the puck' },
    { id: 'D',  pos: 'D', at: 'point:right', label: 'holds the line' },
    { id: 'D',  pos: 'D', at: 'point:left',  label: 'holds the line' },
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
  ],

  routes: [
    // 1 — "Puck goes from the half-wall down to the corner". Stops six feet short
    //     of F2's glyph.
    { from: HALF_WALL, to: { at: 'corner:right', dx: -4, dy: -2 }, kind: 'pass' },
    // 2 — "the old carrier rotates up".
    { from: HALF_WALL, to: ROTATED_UP, kind: 'skate' },
  ],

  // On the boards side of the carrier, not the ice side: the ice side is where
  // route 2's badge lands, and the two were drawn on top of each other.
  puck: { at: 'half-wall:right', dx: 1, dy: 3.5 },
};

const afterRotation = {
  id: 'oz-rotation-one-pass-later',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,

  caption:
    'The same five players one pass later, and the point of the pair: the triangle has moved but ' +
    'the shape has not. The corner player took the pass and is now F1 — the labels are roles set ' +
    'by order of arrival, not people, so they were reassigned the moment the sequence of arrival ' +
    'changed. The old carrier has rotated up off the wall and is now F2, the high forward has ' +
    'held his position and is still F3, and both defencemen are still on the line. There is still ' +
    'one player deep on the puck, one in support and one high, and one forward is still inside ' +
    'the home-plate area. This is one default structure and not a law of ' +
    'hockey; defenders other than the goaltender are not drawn, and no routes are drawn because ' +
    'this frame is the result, not the movement.',

  describe:
    'The attacking half of the rink, the net at the right, one pass after the previous diagram. ' +
    'F1 now has the puck in the strong-side corner — this is the player who was labelled F2 a ' +
    'moment ago. F2 is the player who was carrying on the half-wall, now eight feet up-ice of it ' +
    'and five feet off the boards. F3 is unchanged at the top of the circles, inside the ' +
    'home-plate area. The two defencemen are unchanged on the blue line. The goaltender is in ' +
    'the crease. No routes are drawn.',

  players: [
    { id: 'F1', pos: 'F', at: DEEP_CORNER,   label: 'now on the puck' },
    { id: 'F2', pos: 'F', at: ROTATED_UP,    label: 'rotated up' },
    { id: 'F3', pos: 'F', at: HIGH_F,        label: 'has not moved' },
    { id: 'D',  pos: 'D', at: 'point:right', label: 'holds the line' },
    { id: 'D',  pos: 'D', at: 'point:left',  label: 'holds the line' },
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
  ],

  puck: { at: 'corner:right', dx: -1, dy: -5 },
};

// ---------------------------------------------------------------------------
// 5 — The four options from the half-wall (section 7)
//
// UNNUMBERED, ON PURPOSE. These are four alternatives and exactly one of them
// happens. In this notation a numbered badge means "this came first", so
// numbering them would assert a sequence the section does not have — its own
// framing is "Know all four before the puck arrives, and know which is on."
// The caption carries that in words instead.
// ---------------------------------------------------------------------------

// The seam receiver: the weak side of the high slot. He is up-ice of the puck,
// which keeps this frame's frozen shape the same below/level/above triangle as
// the shape diagrams, and he is across the centre line, which is what makes
// option 3 the royal road pass the section calls it. (65, -10)
const SEAM_TARGET = { at: 'high-slot', dx: -4, dy: -10 };

const halfWallOptions = {
  id: 'oz-half-wall-options',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,

  caption:
    'The four options from the strong-side half-wall, drawn on one frame: low to the corner or ' +
    'behind the net, high to the point, the seam pass across the middle, or taking it yourself ' +
    'off the wall to the inside. They are deliberately unnumbered, because this is a menu and ' +
    'not a sequence — only one of them happens, and nothing in the picture says which comes ' +
    'first. Which one is on is a read: the low pass is the safe continuation that feeds the ' +
    'cycle, the high pass is the shot generator when the defence has collapsed low and left the ' +
    'point unpressured, the seam is the highest value, the highest risk and the shortest window, and taking it ' +
    'yourself is best when your check is flat-footed or has turned their hips. The failure is ' +
    'arriving on the wall with only one of these in mind, because you will then ' +
    'play it whether or not the slot was open. Defenders other than the goaltender are not ' +
    'drawn, and you should expect the seam to be defended and to open only briefly.',

  describe:
    'The attacking half of the rink, the net at the right. A forward has the puck on the ' +
    'strong-side half-wall. Four routes leave him and none is numbered. A dashed pass runs down ' +
    'and back to a teammate deep in the strong-side corner. A second dashed pass runs up the ice ' +
    'to a defenceman at the strong-side point. A third dashed pass runs across the zone, crossing ' +
    'the centre line of the ice, to a forward on the weak side of the high slot. And a wavy ' +
    'carrying route cuts off the wall toward the middle of the ice, inside the home-plate area. ' +
    'A second defenceman is on the blue line on the weak side, and the goaltender is in the ' +
    'crease. No other defenders are drawn.',

  players: [
    { id: 'F1', pos: 'F', at: HALF_WALL,     label: 'the carrier' },
    { id: 'F2', pos: 'F', at: DEEP_CORNER,   label: 'low — the corner' },
    { id: 'F3', pos: 'F', at: SEAM_TARGET,   label: 'the seam' },
    { id: 'D',  pos: 'D', at: 'point:right', label: 'high — the point' },
    { id: 'D',  pos: 'D', at: 'point:left' },
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
  ],

  routes: [
    // Low — "to the corner or behind the net. The safe continuation."
    { from: HALF_WALL, to: { at: 'corner:right', dx: -4, dy: -2 }, kind: 'pass' },
    // High — "to the point. The low-to-high shot generator."
    { from: HALF_WALL, to: { at: 'point:right', dx: 6, dy: 4 }, kind: 'pass' },
    // Middle — "the seam pass into the slot or the backdoor. The royal road pass."
    // Crosses the centre line of the ice and stops six feet short of the receiver.
    { from: HALF_WALL, to: { at: 'high-slot', dx: -3, dy: -4 }, kind: 'pass' },
    // Yourself — "drive the net or cut to the middle. Attack the inside off the
    // wall." Drawn as the cut to the middle rather than the net drive: a route to
    // the net front from here finishes in the goal mouth, which this notation will
    // not draw through. It ends inside the home-plate area.
    { from: HALF_WALL, to: { at: 'faceoff-dot:right', dx: 6, dy: -8 }, kind: 'carry' },
  ],

  puck: { at: 'half-wall:right', dx: 1, dy: 3.5 },
};

// ---------------------------------------------------------------------------
// 6 — Low-to-high, with everyone's job named (section 5)
//
// Numbered, because section 5 numbers it: "The sequence, with everyone's job
// named: 1. The passer... 2. The defenceman... " The order is the content.
// ---------------------------------------------------------------------------

// Where the defenceman shoots from, after walking. Section 5: "walks the puck
// toward the middle before shooting". Fourteen feet in along the blue line from
// the point node, which is the section's "two or three strides toward the middle".
// (Said ten; the point node is y 20 and this is y 6. Not a rink.json fossil —
// point.y is unchanged — but an internal dy edit that never reached the prose.)
const WALKED_TO = { at: 'centre-point', dy: 6 };                // (25, 6)

// The high-slot support. Section 5: "One forward supports in the high slot,
// giving the defenceman a second option and forming a triangle with the point."
// Held eight feet to the strong side of the centre line so the shot lane does not
// run through him — at dead centre the drawn shot passed within a foot of his
// glyph, which reads as a shot into a teammate. (63, 8)
const HIGH_SLOT_SUPPORT = { at: 'high-slot', dx: -6, dy: 8 };

const lowToHigh = {
  id: 'oz-low-to-high',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    "Low-to-high, with everyone's job named and in order: the puck " +
    'goes from the half-wall up to the point (1); the passer then supports toward the strong-side ' +
    'hash marks (2), both as a bail-out outlet and to be in position for the rebound; the ' +
    'defenceman walks the puck toward the middle before releasing it (3), which changes the ' +
    'angle, makes the goalie track laterally and often opens a lane through the shot-blockers; ' +
    'and the shot goes low through the screen (4). One forward is already at the net front to ' +
    'screen and tip and one in the high slot as the second option, forming a triangle with the ' +
    'point, while the weak-side defenceman reads for a rebound squirting to their side. ' +
    'Low-to-high is a means and not an end: at even strength a point shot is among the ' +
    'lowest-percentage shots on the ice, and blocked more often than a shot from anywhere else — ' +
    'but that caution is an even-strength one, and on the power play the same map puts roughly ' +
    'the whole zone at or above it, so it is no argument against a point shot there. ' +
    'The play is only worth ' +
    'doing when the net front is occupied — the identical shot with nobody in front is a ' +
    'giveaway with extra steps. Defenders other than the goaltender are not drawn, so the ' +
    'shot-blockers this play is trying to beat are not in the picture.',

  describe:
    'The attacking half of the rink, the net at the right. Four numbered routes. One: a dashed ' +
    'pass from a forward on the strong-side half-wall up the ice to a defenceman at the ' +
    'strong-side point. Two: the same forward then skates in off the wall toward the hash marks ' +
    'on the inside edge of the strong-side faceoff circle. Three: the defenceman carries the ' +
    'puck ten feet along the blue line toward the middle of the ice. Four: from there a shot, ' +
    'drawn as a double line, runs down the ice and finishes short of the net, passing to the ' +
    'weak side of a forward who is standing at the net front, eight feet out from the goal line ' +
    'and just outside the strong-side post. ' +
    'A second forward stands in the high slot on the strong side. The weak-side defenceman ' +
    'stays on the blue line. The goaltender is in the crease; no other defenders are drawn.',

  players: [
    { id: 'F1', pos: 'F', at: HALF_WALL,           label: 'passes, then supports' },
    { id: 'F2', pos: 'F', at: NET_FRONT,           label: 'screen and tip' },
    { id: 'F3', pos: 'F', at: HIGH_SLOT_SUPPORT,   label: 'high-slot option' },
    { id: 'D',  pos: 'D', at: 'point:right',       label: 'walks, then shoots' },
    { id: 'D',  pos: 'D', at: 'point:left',        label: 'reads the rebound' },
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
  ],

  routes: [
    // 1 — the low-to-high pass, finishing seven feet short of the point man.
    { from: HALF_WALL, to: { at: 'point:right', dx: 6, dy: 4 }, kind: 'pass' },
    // 2 — the passer supports "toward the strong-side hash marks". The hash marks
    //     on the inside edge of the strong-side circle are at (69 +- 2.8, 7);
    //     this finishes just short of them.
    { from: HALF_WALL, to: { at: 'faceoff-dot:right', dy: -9 }, kind: 'skate' },
    // 3 — "walks the puck toward the middle". Skating with control of the puck,
    //     which is the key's long wave, not the row of bars — the bars are lateral
    //     crossovers and would be a different claim.
    { from: 'point:right', to: WALKED_TO, kind: 'carry' },
    // 4 — the shot. Stops thirteen feet short of the goal line, so it neither
    //     enters the crease nor runs into the goaltender's or the screener's
    //     glyph: its head at (76, -0.5) is 8.2 ft from the screener's centre at
    //     (81, 6) and 11.0 ft from the goaltender's at (87, 0). Extended, its line
    //     crosses the goal line at y -2.16 — 0.84 ft inside the far post.
    //     ⚠️ THIS COMMENT SAID "two feet inside the far post". It was never two:
    //     the line runs (25, 6) to (76, -0.5), so at x 89 it is at y -2.16 against
    //     a post at y -3. Recomputed, not adjusted — the route is unchanged.
    { from: WALKED_TO, to: { at: 'net-front', dx: -8, dy: -0.5 }, kind: 'shot' },
  ],

  puck: { at: 'half-wall:right', dx: 1, dy: 3.5 },
};

// ---------------------------------------------------------------------------
// 7 — Where the screener actually stands (section 6)
// ---------------------------------------------------------------------------

const netFrontScreen = {
  id: 'oz-net-front-screen',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,

  caption:
    'Where the net-front player actually stands to screen: at the edge of the blue paint, ' +
    'roughly six to eight feet out from the goal line and inside the faceoff dots, standing on ' +
    "the line between the goaltender's eyes and the puck rather than the line between the " +
    'goaltender and the net — so when the point man walks the line, the screener slides with him ' +
    'or the screen stops being a screen. Take the six-to-eight feet from these words and not off ' +
    'the picture: the marker for the screener is drawn nine and a half feet out instead, because a ' +
    'player marker on these diagrams is nearly six feet across, far wider than a player, and at ' +
    'eight feet out on that sight line it would cover the very crease line the ' +
    'diagram is about. Note the crease as it is drawn, because this is easy to ' +
    'get wrong: it is eight feet wide at the goal line and six feet deep, so the six feet is the ' +
    'depth and not the half-width, and "three feet out from the goal line" is inside the paint ' +
    'rather than clear of it. A screen from outside the crease without contact is normally legal ' +
    'under NHL and IIHF rules and you should do it constantly — but it is keyed to the crease: ' +
    'every clause of Rule 69 that voids a goal for where you stood names it. 69.1’s disallowing ' +
    'sentence requires the attacker to have entered the crease, 69.3 voids the goal outright for a ' +
    'significant vision-obstructing position inside it with no contact at all, and 69.4, the rule ' +
    'for outside it, reaches contact only. Both books’ own reference tables agree, ' +
    TABLES_ALLOW_OUTSIDE + ' — ' + DISALLOWED_ROWS_SHARE_THE_CREASE +
    ' That reads the rule’s structure rather than anything either book states in terms, and ' +
    REFEREE_JUDGEMENT +
    ' USA Hockey Rule 625(b) and IIHF Rule 69.1 are stricter ' +
    'still — there a foot in the paint can cost you the zone and not just the goal. One rec book is ' +
    'stricter again: the CARHA Hockey Official Rule Book, Rule 66(b), bars an attacking player from ' +
    'standing in the goal crease unless the puck is in the goal crease area, disallows the goal if ' +
    'one does, and gives no incidental-contact allowance of the kind the NHL and IIHF give you. Read ' +
    'that as one rec book and not as the rec position — CARHA governs CARHA-affiliated leagues only, ' +
    'and rec and beer leagues are often said to be stricter still, though this document has no count ' +
    'of how many are. So keep your feet out of the blue paint, and off ' +
    CREASE_LINE_IS_THE_CREASE +
    " — and read your own league's rule.",

  describe:
    'The attacking half of the rink, the net at the right. A defenceman has the puck at the ' +
    'strong-side point, wide, eight feet toward the boards of the point itself. A forward stands ' +
    'at the net front, nine and a half feet out from the goal line and clear of the shaded goal ' +
    'crease, offset to the puck side of the middle of the net so that he sits on the straight ' +
    "line between the goaltender's position and the puck rather than in front of the net. The " +
    'goaltender is in the crease. A shot, drawn as a double line, runs from the point and ' +
    'finishes short of the screener; extended, it would pass through him and arrive inside the ' +
    'far post. No other players are drawn.',

  players: [
    // The point man wide, eight feet toward the boards of the point node. Wide on
    // purpose: the whole teaching is that the eyes-to-puck line is not the
    // goalie-to-net line, and the width of the puck is what opens the gap between
    // them. At the point node itself the two lines are barely two feet apart at
    // the screener and the picture asserted nothing. (25, 28)
    { id: 'D', pos: 'D', at: { at: 'point:right', dy: 8 }, label: 'the shooter' },
    // On the straight line from the goaltender at (87, 0) to the puck at
    // (29, 24) — which passes through (79.5, 3.10), so this sits 0.1 ft off it.
    // Being ON that line is the whole teaching of section 6, and the offset from
    // the middle of the net is the point.
    //
    // ⚠️ THIS WAS dx -8, i.e. (81, 3), AND IT DREW THE SCREENER'S BODY IN THE
    // PAINT. Measured off the BUILT SVG (site/public/diagrams/oz-net-front-screen.svg),
    // crease path "M 89 -4 L 84.5 -4 A 6 6 0 0 0 84.5 4 L 89 4 Z", arc struck
    // from (88.972, 0) at r 6: the nearest boundary to (81, 3) is 2.518 ft, so
    // 0.38 ft of the 2.9 ft body and 0.76 ft of the outlined body were inside it,
    // and the halo erased about a third of the crease arc's red line. In the
    // diagram whose caption says "Note the crease as it is drawn".
    //
    // ⚠️ AND THE DOCUMENT'S FIGURE AND THIS PICTURE CANNOT BOTH BE HONOURED —
    // stated rather than quietly split. offensive_zone_play.md:437 says "roughly
    // six to eight feet out from the goal line". The goaltender-to-puck line is
    // shallow near the net by construction — it is why the shooter above is drawn
    // wide, and the comment on him says the two lines are barely two feet apart at
    // the point node itself. ⚠️ That is THIS FILE's observation, not a sentence in
    // offensive_zone_play.md; the document says only that you stand between the
    // goaltender's eyes and the puck. So at
    // 8 ft out — x 81 — the line from (87, 0) to the puck at (29, 24) passes
    // through y 2.48, where the nearest crease boundary is 2.349 ft and 0.55 ft of
    // the 2.9 ft body is inside the paint. Widening the point man does not rescue
    // it. His triangle reaches 4.06 ft to the boards side of its centroid (r 3.6
    // circumradius plus the round-joined 0.8 stroke), so against an inner boards
    // ink edge of about 42.25 the centroid cannot pass y 38, which puts the puck
    // at (29, 34) — and the line then reaches only y 3.52 at x 81, where 0.19 ft
    // of body is STILL inside. There is no position at six to eight feet out, on
    // the eyes-to-puck line, that a glyph of this size clears the crease from.
    // Moving the goaltender does not help either: deeper flattens the line
    // further, and a goaltender ON the goal line reaches only y 3.2.
    //
    // So the DEPTH gives way and the LINE is kept, because the line is what this
    // diagram exists to show and the depth is stated in words in the caption
    // anyway. At (79.5, 3) — nine and a half feet out — the nearest boundary is
    // 3.936 ft: 1.04 ft of body daylight, 0.66 ft of outlined body, 0.06 ft of
    // halo daylight, so the arc renders whole. ⚠️ THE CAPTION AND `describe` BOTH
    // SAY SO IN TERMS; do not "tidy" that disclosure away, and do not restate the
    // drawn depth as the coaching figure.
    //
    // ASSUMES, and dies if any of them moves: site/src/data/rink.json AS ON DISK
    // IN THIS WORKING TREE — goal-line = (89, 0), crease = (86, 0), point = (25,
    // 20), goal.crease_width 8, crease_depth 6, crease_arc_radius 6 — and
    // rink.mjs's glyph radius 2.9 with its 0.75 outline and 1.95 halo strokes.
    // (79.5, 3)
    { id: 'F', pos: 'F', at: { at: 'goal-line', dx: -9.5, dy: 3 }, label: 'edge of the paint' },
    { id: 'G', team: 'opp', pos: 'G', at: GOALIE },
  ],

  routes: [
    // Stops six feet short of the screener. Extended, the line arrives inside the
    // far post — which is what a shot through a screen is for.
    //
    // ⚠️ RE-AIMED WHEN THE SCREENER MOVED. It ended at (75, 4) aiming at a screener
    // at (81, 3); with the screener at (79.5, 3) that head sat 4.6 ft off him and
    // the six feet the comment claims had gone. (73.5, 4.75) is on the same line
    // out of the point to within 0.03 ft — the exact point is (73.5, 4.72) — so
    // the extension is unchanged to within 0.04 ft at the goal line: it passes
    // 1.02 ft from the screener's centre, well inside his 2.9 ft body, and crosses
    // the goal line at y -2.68 against y -2.72 before, either way inside the far
    // post at y -3. The head is now 6.25 ft from the screener.
    { from: { at: 'point:right', dy: 8 }, to: { at: 'goal-line', dx: -15.5, dy: 4.75 }, kind: 'shot' },
  ],

  puck: { at: 'point:right', dx: 4, dy: 4 },
};

// ---------------------------------------------------------------------------
// 8 — Behind the net as an attacking position (section 8)
//
// UNNUMBERED for the same reason as the half-wall fan: these are alternatives.
// Two of the section's five are missing and the caption says which and why —
// the wrap-around and the bank off the goalie's pads both live in the goal
// mouth, and a route drawn across the goal mouth is one this project's rules
// forbid.
// ---------------------------------------------------------------------------

// Off to one side behind the goal line. Ten feet from the net centre, which is
// seven feet outside the post: from the node itself every route out to the slot
// runs through the crease, and a pass drawn through the blue paint is a pass no
// goaltender would ever allow to arrive.
const BEHIND = { at: 'behind-net', dy: 10 };                    // (94, 10)

const behindTheNet = {
  id: 'oz-behind-the-net',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,

  caption:
    'Attacking from behind the net, which is a place to go on purpose and not a place you end ' +
    'up. The pass out to the slot is the primary play and not the last resort: because it comes ' +
    'from below the goal line it crosses the royal road almost by definition and arrives at a ' +
    'player already inside the home-plate area, and passes from below the goal line finished at ' +
    '6.73% — the second-most dangerous pass type measured, behind only royal road passes, in ' +
    'volunteer-tracked Passing Project data, 51,308 shots at 5-on-5, counting all attempts ' +
    'rather than shots on goal. The other route drawn is the reverse back out to the corner to ' +
    'restart the cycle, because possession retained is a perfectly good outcome; the two are ' +
    'alternatives and only one of them happens, which is why neither is numbered. Three further ' +
    'options are deliberately not drawn: the wrap-around and the bank off the ' +
    "back of the goalie's pads both live in the goal mouth, which this notation will not draw a " +
    'route through, and the walkout — coming out into the slot yourself with the puck — takes ' +
    'the same ice as the pass, so drawn together the two arrows could not be told apart. ⚠️ Nobody ' +
    'can come at you from directly behind here, but that is geometry and not immunity: checking ' +
    'from behind is a penalty anywhere on the playing surface and players do get driven into the ' +
    'goal frame, so keep your head up and know who is arriving.',

  describe:
    'The attacking half of the rink, the net at the right. A forward has the puck behind the ' +
    'goal line, ten feet to one side of the middle of the net. Two unnumbered routes leave him. ' +
    'A dashed pass runs out past the side of the net, clear of the crease, and across the centre ' +
    'line of the ice, finishing short of a forward standing on the weak side of the high slot. ' +
    'A second dashed pass runs back up to a teammate deep in the strong-side corner — the ' +
    'reverse that restarts the cycle. The goaltender is in the crease. No defenders are drawn.',

  players: [
    { id: 'F1', pos: 'F', at: BEHIND,       label: 'the carrier' },
    { id: 'F2', pos: 'F', at: DEEP_CORNER,  label: 'the reverse' },
    // "Look for the high-slot forward or the backdoor player." The backdoor
    // player is not drawn: a route to the far post crosses the goal mouth.
    { id: 'F3', pos: 'F', at: { at: 'high-slot', dx: -8, dy: -6 }, label: 'high-slot forward' },
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
  ],

  routes: [
    // The pass out to the slot. Traced to clear the crease arc at every point:
    // eight feet up-ice of the goal line it is still more than a foot outside the
    // paint, and it crosses the centre line of the ice inside the slot.
    //
    // The walkout was drawn here and has been cut. It has to leave the same point
    // and finish on the same side of the ice as this pass, so with the bow needed
    // to keep it out of the crease the two lines ran within a foot of each other
    // across the front of the net. Two arrows a reader cannot separate teach less
    // than one arrow they can; the caption says the walkout exists and is not drawn.
    { from: BEHIND, to: { at: 'high-slot', dx: -2, dy: -2 }, kind: 'pass' },
    // The reverse, back out to the corner it came from.
    { from: BEHIND, to: { at: 'corner:right', dx: 1, dy: -8 }, kind: 'pass' },
  ],

  puck: { at: 'behind-net', dx: -2, dy: 7 },
};

export default [
  homePlate,
  royalRoad,
  fiveManShape,
  afterRotation,
  halfWallOptions,
  lowToHigh,
  netFrontScreen,
  behindTheNet,
];
