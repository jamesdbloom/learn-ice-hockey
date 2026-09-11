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
// ⚠️ SUPERSEDED 10 September 2026 — the file it quotes no longer contains this string.
// offensive_zone_play.md:435 now reads "Inside the faceoff dots, six to eight feet out
// — and both feet off the red crease line, which the arc reaches at six". The old text:
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
// ⚠️ AND THAT CORRECTION REACHED THIS COMMENT AND STOPPED. `oz-rotation-one-pass-later`'s
// `describe` still read "five feet off the boards" on 11 September 2026 — the string a
// screen reader is served, via `describe + " " + caption` (rink.mjs `longDesc`). Fixed
// there too: it now says five feet inside the half-wall and nine feet off the boards,
// which is (61, 33.5) against a dasher at 42.5. Same shape of defect as WALKED_TO's
// below and found in the same pass: if you correct a number here, grep the `describe`.
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
    'and five feet inside it, nine feet off the boards. F3 is unchanged at the top of the ' +
    'circles, inside the ' +
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

// Where the defenceman shoots from, after walking. Section 5 (:393): "walks the
// puck toward the middle before shooting" — and that sentence is the whole of what
// the owner commits to. Fourteen feet in along the blue line: `point:right` is
// (25, 20) and `centre-point` is (25, 0) — both as on disk in site/src/data/rink.json
// IN THIS WORKING TREE — so dy 6 lands at (25, 6) and the drawn walk is 14 ft,
// entirely lateral at x 25.
//
// ⚠️ THE FOURTEEN IS ILLUSTRATIVE AND IS NOT A MEASUREMENT — the same status
// shooting.mjs's STEPPED_TO records for its own ten. NOTHING in this document fixes
// a distance for the walk: section 5 gives none, and section 11 (:980) deliberately
// refuses to — "How far is feel rather than a measurement — go until the blocker has
// to move, which is usually a step or two." The caption states no distance either,
// which is right and stays that way.
// ⚠️ THIS COMMENT USED TO CALL THE FOURTEEN "the section's 'two or three strides
// toward the middle'". That phrase is in NO content document — check_diagram_quotes
// reports it unfound. Bare "two or three strides" DOES survive, at :1056 of this
// document and in forechecking_systems.md, but both are about arriving on a check and
// neither is this walk. Re-grep before trusting any attribution here.
// ⚠️ AND THE `describe` SAID TEN, which is what this note was written about and did
// not reach. A screen reader is served `describe + " " + caption` (rink.mjs
// `longDesc`), so a blind reader was given a different picture from the drawn one.
// It now names the direction and the endpoint and no distance at all.
//
// The dy is co-constrained and is not free: route 4's lane runs from here to
// (76, -0.5) and passes 6.79 ft from HIGH_SLOT_SUPPORT's centre at (63, 8) — 2.9 ft
// of daylight past a forward's 3.875 ft of ink. Moving this dy moves that clearance.
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
    'puck in along the blue line, stopping short of the middle of the ice. Four: from there a shot, ' +
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
    'Where the net-front player actually stands to screen: just outside the blue paint, ' +
    'roughly six to eight feet out from the goal line and inside the faceoff dots, standing on ' +
    "the line between the goaltender's eyes and the puck rather than the line between the " +
    'goaltender and the net — so when the point man walks the line, the screener slides with him ' +
    'or the screen stops being a screen. Take the six-to-eight feet from these words and not off ' +
    // ⚠️ FULL STOP, NOT A COLON: "and not off the picture:" sat a negation on the separator,
    // and the inverted reading denies the drawn depth this sentence exists to disclose.
    'the picture. The marker for the screener is drawn nine and a half feet out instead, because a ' +
    'player marker on these diagrams is nearly six feet across, far wider than a player, and at ' +
    'eight feet out on that sight line it would cover the very crease line the ' +
    'diagram is about. Note the crease as it is drawn, because this is easy to ' +
    'get wrong: it is eight feet wide at the goal line and six feet deep, so the six feet is the ' +
    // ⚠️ FULL STOP AFTER "not the half-width" — the most dangerous seam in this caption.
    // It read "…not the half-width, and 'three feet out from the goal line' is inside the
    // paint", so the negation could carry across the comma and a listener hears that three
    // feet out is NOT inside the paint. That is a screener planting a foot in the crease.
    'depth and not the half-width. And "three feet out from the goal line" is inside the paint ' +
    'rather than clear of it. A screen from outside the crease without contact is normally legal ' +
    'under NHL and IIHF rules and you should do it constantly — but it is keyed to the crease: ' +
    // ⚠️ THE CLAUSE-BY-CLAUSE WORKING WAS CUT, THE CONCLUSION AND ITS DISCLOSURE KEPT.
    // This ran through 69.1's disallowing sentence, 69.3's significant-position ground and
    // 69.4's contact-only reach, then DISALLOWED_ROWS_SHARE_THE_CREASE. Both hosts state that
    // working themselves, immediately beside the marker: offensive_zone_play.md's "Screening"
    // paragraph names all three clauses, and center.md's facts block at "The crease is the one
    // line you don't cross" carries the keying AND the table citation. What could NOT be cut is
    // the pair either side of it — TABLES_ALLOW_OUTSIDE, because dropping the permissive half
    // teaches the rule as stricter than it is, and the "reads the rule's structure" disclosure,
    // which is what stops the keying claim reading as either book's own words.
    'every clause of Rule 69 that voids a goal for where you stood names the crease, and both ' +
    'books’ own reference tables agree, ' +
    TABLES_ALLOW_OUTSIDE +
    '. That reads the rule’s structure rather than anything either book states in terms, and ' +
    REFEREE_JUDGEMENT +
    ' USA Hockey Rule 625(b) and IIHF Rule 69.1 are stricter ' +
    'still — there a foot in the paint can cost you the zone and not just the goal. One rec book is ' +
    'stricter again: the CARHA Hockey Official Rule Book, Rule 66(b), bars an attacking player from ' +
    'standing in the goal crease unless the puck is in the goal crease area, disallows the goal if ' +
    'one does, and gives no incidental-contact allowance of the kind the NHL and IIHF give you. Read ' +
    // ⚠️ FULL STOP, NOT AN EM DASH — a pre-existing negation inversion, found while cutting.
    // "not as the rec position — CARHA governs CARHA-affiliated leagues only" lets the negation
    // carry across the dash, and the inverted reading says CARHA does NOT govern only its own
    // leagues, which is the opposite of the scope the sentence exists to set.
    'that as one rec book and not as the rec position. CARHA governs CARHA-affiliated leagues ' +
    'only, ' +
    'and rec and beer leagues are often said to be stricter still, which is an impression rather ' +
    'than a count. So keep your feet out of the blue paint, and off ' +
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
    // ⚠️ LABEL: "outside the paint", NOT "edge of the paint". The edge of the paint IS the
    // crease line, and CREASE_LINE_IS_THE_CREASE — imported into this very caption — says
    // so: "outside the paint" means clear of the line too, not standing on it. The caption
    // says "just outside the blue paint"; the label said stand on the one line the diagram
    // exists to keep you off. The glyph is unmoved at (79.5, 3), 3.936 ft clear of the
    // nearest crease boundary, so this is the words and not the position.
    { id: 'F', pos: 'F', at: { at: 'goal-line', dx: -9.5, dy: 3 }, label: 'outside the paint' },
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

// ---------------------------------------------------------------------------
// 9 — Crossing the royal road with your feet (section 2, "How to actually
//     create one")
//
// The section's four habits are a scan order, a lead pass, a carry and a play
// from below the goal line. Three of the four are drawn elsewhere: the seam pass
// is `oz-royal-road`, the pass out from behind the net is `oz-behind-the-net`,
// and the scan order is a sequence of LOOKS, which this notation has no mark for
// — a numbered route means somebody skated or passed, not that somebody looked.
//
// What is left undrawn anywhere in the corpus is the CARRY: "A puck carrier who
// cuts through the middle drags the goalie laterally the same way a pass does.
// Driving from the half-wall into the high slot, or curling out from behind the
// net into the slot, both cross the line." Two routes, one per sentence.
//
// ⚠️ NO PUCK IS DRAWN, and that is the whole reason this frame can hold both.
// They are alternatives starting from two different places, so a puck would have
// to be on one stick or the other and the frame would assert a choice the section
// does not make. The `carry` mark — the key's skate-and-stickhandle wave — already
// says the mover has the puck, so nothing is lost. `oz-home-plate` also draws no
// puck.
//
// ⚠️ NOT A DUPLICATE OF `oz-half-wall-options`' fourth route, and the difference is
// the only thing either picture is about: that one finishes at (75, 14), on the
// STRONG side, and its caption calls it "taking it yourself off the wall to the
// inside". This one finishes across the centre line. Crossing is the claim.
// ---------------------------------------------------------------------------

// The drive off the wall finishes on the weak side of the high slot — "the high
// slot runs from the dots up to the tops of the circles" (section 1), so x 54-69,
// and y -6 is across the road. (63, -6)
const DRIVE_TO = { at: 'high-slot', dx: -6, dy: -6 };

// The curl finishes in the slot — "the area straight out in front of the net,
// between the two faceoff circles" — on the weak side of centre. The slot node is
// (76, 0), which is ON the road, so it is offset across it. (76, -4)
const CURL_TO = { at: 'slot', dy: -4 };

const crossTheRoadYourself = {
  id: 'oz-cross-the-road-yourself',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,
  title: 'Crossing the road yourself',

  caption:
    'Crossing the royal road with your feet rather than with a pass. The road is the imaginary ' +
    'line down the centre of the ice, lengthwise, from the middle of one net to the middle of the ' +
    'other, and the two wavy routes are the two carries the section names: driving off the ' +
    'strong-side half-wall into the high slot, and curling out from behind the net into the slot. ' +
    'Both finish on the far side of the line, and a carrier who cuts through the middle drags the ' +
    'goaltender laterally the same way a pass does — they have to push across, re-establish depth ' +
    'and angle, re-find the puck and reset their stick. Be careful how far you carry that: the ' +
    'measured figure this document quotes, the 15.50%, is a finishing rate on shots following a ' +
    'cross-slot pass in volunteer-tracked 5-on-5 data, and it is a measurement of passes. This ' +
    'document attaches no figure to carrying it across yourself, and neither does this picture — ' +
    'the mechanism is the argument, not a number. No puck is drawn, because ' +
    'these are two alternatives from two different places and only one of them is happening. And ' +
    'the line itself comes with a caveat this document states in full: published descriptions of ' +
    'where the royal road runs do not agree, and the net-to-net version drawn here is kept for ' +
    'being the more conservative instruction rather than the better supported one — the two ' +
    'sources closest to the original figures describe a shorter road that stops at the tops of ' +
    'the faceoff circles. Defenders other than the goaltender are not drawn, so nothing here ' +
    'shows how briefly the middle is actually open. ' +
    // ⚠️ Placed AFTER the caption's last complete sentence, not inside one.
    // My first attempt spliced it between "stops at the tops of" and "the faceoff circles" --
    // severing an honest disclosure mid-sentence AND burying the safety line, unmarked, 250
    // words into the unit. It shipped to the manifest, the page twice and the spoken layer.
    // ⚠️ I wrote an "outcome assertion" for that edit and it only checked the string was
    // PRESENT, not that it was in the right PLACE. Presence is not correctness.
    '⚠️ And both of these carries take you through the middle: head up, chin off your chest — ' +
    'you cannot brace for a hit you have not seen, and coming out past the post you can be ' +
    // ⚠️ Was "the walkout past the post IS WHERE players get driven into the goal frame" — a
    // frequency claim the owning section does not make. §8 says "you CAN STILL BE driven"
    // (:677 and :1069). `facts-reviewer` caught it in the facts line, I fixed it THERE and
    // left the identical sentence here — a repair that stopped at the clause the finding
    // named instead of at the claim. The "Presence is not correctness" note four lines above
    // is about this same caption.
    'driven into the goal frame.',

  describe:
    'The attacking half of the rink, the net at the right. A dashed line runs down the middle of ' +
    'the ice from the centre of the goal line out through centre ice, labelled "the royal road". ' +
    'Two own forwards and no puck. One stands on the strong-side half-wall, level with the ' +
    'faceoff dot; a wavy route ending in an arrowhead — the notation for skating with the puck — ' +
    'leaves him, bows toward the net and finishes on the weak side of the high slot, having ' +
    'crossed the dashed line. The second forward stands behind the goal line, ten feet to the ' +
    'strong side of the middle of the net; a second wavy route leaves him, swings out past the ' +
    'side of the net well clear of the crease, and finishes in the slot on the weak side of the ' +
    'dashed line. The goaltender is in the crease. No defenders are drawn.',

  zones: [
    // Drawn exactly as `oz-royal-road` draws it, and for the same reason: a
    // two-point "region" is a line, and the road is not a marking on the ice, so
    // it must not be drawn as a route. Goal line to centre ice is the attacking
    // HALF of the line the caption describes.
    {
      points: ['goal-line', 'centre-ice'],
      label: 'the royal road',
      fill: 'none',
    },
  ],

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
    { id: 'F1', pos: 'F', at: HALF_WALL, label: 'drives inside' },
    { id: 'F2', pos: 'F', at: BEHIND,    label: 'curls out' },
  ],

  routes: [
    // The drive off the wall. `carry` — he has the puck — with a small bow toward
    // the net so it reads as a drive bending inside rather than a straight line
    // ruled across the zone.
    //
    // ARRIVAL. Arrow-ended and owned by a skater, so the invariant applies. Tip
    // (63, -6); the only opposing player is the goaltender at (87, 0), 24.7 ft
    // away — far outside ARRIVAL.noArrow (9.0), so form (b) cannot fire, and
    // form (a) excludes goaltenders outright.
    { from: HALF_WALL, to: DRIVE_TO, kind: 'carry', bow: 6 },
    // The curl out of the corner. The bow is not decoration: the STRAIGHT line
    // from (94, 10) to (76, -4) passes through (84.5, 2.61), which is 5.18 ft
    // from the crease arc's centre (88.972, 0) with |y| < 4 — i.e. INSIDE the
    // blue paint, and a route drawn through the crease is a route no goaltender
    // would allow. With `bow: -10` the control point is (78.86, 10.89) and the
    // curve clears it everywhere: 9.63 ft from the arc centre at a quarter of the
    // way along, 9.89 ft at the halfway point and 11.05 ft at three quarters, and
    // its MINIMUM over the whole curve is 9.58 ft at about three tenths of the way
    // along — against the arc's 6 ft radius. It also gives the shape the section
    // describes: out past the side of the net at about ten feet wide, then in
    // across the line.
    //
    // ASSUMES site/src/data/rink.json as on disk: goal-line (89, 0), crease_depth
    // 6, crease_arc_radius 6, crease_width 8.
    //
    // ARRIVAL. Tip (76, -4); the goaltender at (87, 0) is 11.7 ft away, outside
    // ARRIVAL.noArrow.
    { from: BEHIND, to: CURL_TO, kind: 'carry', bow: -10 },
  ],
};

// ---------------------------------------------------------------------------
// 10 and 11 — Rim and reverse in the cycle (section 4, "The mechanics")
//
// A PAIR, and it has to be one. The section's read is "if the checker is still in
// front of you, rim it; if they have skated past you, reverse it", and the thing
// that decides it is WHERE THE CHECKER IS. One frame can show one checker. So the
// two diagrams are the same corner, the same carrier on the same spot, the same
// puck, and the checker moved — which makes the difference between them the whole
// content of the read.
//
// ⚠️ THE CORPUS ALREADY HAS FOUR RIM/REVERSE DIAGRAMS AND THESE ARE NOT BORROWS OF
// THEM. `breakout-rim`, `breakout-reverse`, `winger-dz-rim` and `winger-dz-reverse`
// are all drawn in the DEFENDING zone — `winger-dz-rim`'s own `describe` opens "The
// defending half of the rink, your own net at the right." Borrowing one into this
// document would flip the end of the ice in the middle of a document whose every
// other diagram attacks to the right, and no caption would say so. The play is
// also a different play: there the rim is how you get the puck OUT, here it is how
// you keep it IN.
//
// The low-to-low pass itself is NOT redrawn here. `oz-five-man-shape` already draws
// it — the pass from the half-wall down to the corner, and the carrier rotating up
// into the space — and a second picture of it would be a duplicate.
// ---------------------------------------------------------------------------

// The carrier, deep on the strong-side wall in the corner. DEEP_CORNER is reused
// rather than re-derived: it is the spot this module already calls "below the
// puck", and putting the carrier on a named anchor keeps the two frames identical
// except for the one thing that changes. (84, 31)
const CYCLE_CARRIER = DEEP_CORNER;

// The puck, on the boards side of the carrier — the far side of his body from the
// pressure in both frames, which is the corpus's own teaching for a wall battle.
// (85.8, 33.4), which is 4.6 ft off the dasher: the corner arc is struck from
// (72, 14.5) at radius 28, and this point is 23.4 ft from that centre.
const CYCLE_PUCK = { at: 'corner:right', dx: 3.8, dy: -0.6 };

const cycleRim = {
  id: 'oz-cycle-rim',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,
  title: 'The rim in the cycle',

  caption:
    'The rim, in an offensive-zone cycle. The carrier is deep on the strong-side wall and the ' +
    'checker is inside him, between him and the middle of the ice, sealing him against the boards ' +
    'and still in front of him — and that is the read: a rim beats pressure that has you pinned. ' +
    'The puck goes onward around the boards, following the curve of the rink, past the checker ' +
    'and out to a teammate arriving behind the net — onward, in the direction the play was ' +
    'already going, which is the whole difference between a rim and a reverse. The passer does ' +
    'not then stand still: a cycle rotates, and no route is drawn for him here because this frame ' +
    'is the read rather than the rotation. The companion ' +
    'diagram is the same corner with the checker in the other place, and the two plays point in ' +
    'opposite directions, so one of them is wrong every time. Picking the wrong one is described ' +
    'as a leading cycle turnover — take that as coaching craft rather than a measurement, ' +
    'because nobody has counted cycle turnovers by cause. ⚠️ And whichever one is on, this is a ' +
    'wall battle: never turn your back to the boards and never duck. Skates parallel to the wall, ' +
    'forearm and hip into the contact, head up and chin off your chest — and not on the point of ' +
    'your shoulder. Only the checker and the ' +
    'goaltender are drawn on the other team.',

  describe:
    'The attacking half of the rink, the net at the right. Own players are drawn open, the ' +
    'opposition solid. An own forward has the puck deep in the strong-side corner, with the puck ' +
    'on the boards side of his body. An opposition forward stands about eight feet inside him and ' +
    'two feet nearer the goal line, between him and the middle of the ice. A dashed pass route ' +
    'leaves the carrier and bows out toward the boards, running around the curve of the corner ' +
    'about five feet off the dasher, past the outside of the checker, and finishing short of a ' +
    'second own forward who stands behind the goal line to the strong side of the net. The ' +
    'goaltender is in the crease. No other opposition players are drawn, and no route is drawn ' +
    'for the passer.',

  players: [
    { id: 'F1', pos: 'F', at: CYCLE_CARRIER,               label: 'the carrier' },
    // Inside him and two feet nearer the goal line. At (86, 23) he is 8.25 ft from
    // the carrier — the glyph body is 2.9 ft in radius, so two markers need more
    // than 5.8 ft between their centres or they touch.
    { id: 'F',  team: 'opp', pos: 'F', at: { at: 'corner:right', dx: 4, dy: -11 }, label: 'sealing you in' },
    // The teammate the rim is aimed at: behind the goal line, to the strong side.
    // (94, 6) is 4.4 ft off the end boards, 9.2 ft from the goaltender, and 7.83 ft
    // from the crease arc's centre against its 6 ft radius, so it is clear of the
    // paint.
    { id: 'F2', pos: 'F', at: { at: 'behind-net', dy: 6 }, label: 'behind the net' },
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
  ],

  routes: [
    // The rim. A `pass`, not a `carry` — the puck travels and the passer does not.
    //
    // GEOMETRY, because "follows the curve of the rink" is the claim. Chord
    // (84, 31) -> (94.5, 13), length 20.84; the renderer's control point is the
    // chord midpoint offset perpendicular by `bow`, which at bow 7 puts it at
    // (95.30, 25.53). The corner arc is struck from (72, 14.5) at radius 28, so:
    // the chord's midpoint would run 9.2 ft off the dasher, the control point sits
    // 2.2 ft off it, and the drawn curve passes 5.7 ft off it at the halfway point.
    // That is a rim hugging the boards rather than a pass cut across the corner.
    //
    // PAST THE CHECKER, measured: the curve passes 5.89, 5.50 and 5.68 ft from the
    // checker's centre at one fifth, three tenths and two fifths of the way along,
    // and its closest approach over the whole curve is 5.49 ft — so it clears his
    // 2.9 ft glyph by 2.59 ft at the tightest, on the boards side of him. Going
    // where he is not is what a rim is.
    //
    // The head stops at (94.5, 13), 7.0 ft short of the receiver's marker and 5.45
    // ft off the end boards. Puck routes are outside the arrival invariant, which
    // only reaches routes that draw a player moving.
    { from: CYCLE_CARRIER, to: { at: 'behind-net', dx: 0.5, dy: 13 }, kind: 'pass', bow: 7 },
  ],

  puck: CYCLE_PUCK,
};

const cycleReverse = {
  id: 'oz-cycle-reverse',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,
  title: 'The reverse in the cycle',

  caption:
    'The reverse — the same corner as the previous diagram, the same carrier on the same spot, ' +
    'the same puck, and one thing changed: the checker has skated past him, carrying his ' +
    'momentum on toward the end boards. That is the other half of the read. The ice he has just ' +
    'left is back up the wall, so the puck goes back against the flow, into that space, to a ' +
    'teammate arriving on the half-wall behind the play. A still picture cannot draw momentum, ' +
    'so read the checker as a player already past the carrier and unable to stop. Call for it ' +
    'out loud, because the puck is going somewhere the carrier is not looking. Get this the wrong ' +
    'way round — reverse into a checker who is actually sealing you, or rim past one who has ' +
    'already gone by — and you have handed over the puck in the offensive zone with your ' +
    'forwards below it. That ranking of the wrong read as a leading cycle turnover is coaching ' +
    'craft rather than a measurement: nobody has counted cycle turnovers by cause. ⚠️ And ' +
    'whichever one is on, this is a wall battle: never turn your back to the boards and never ' +
    'duck. Skates parallel to the wall, forearm and hip into the contact, head up and chin off ' +
    'your chest — and not on the point of your shoulder. Only the checker and the goaltender are ' +
    'drawn on the other team.',

  describe:
    'The attacking half of the rink, the net at the right, the same corner as the previous ' +
    'diagram. Own players are drawn open, the opposition solid. An own forward has the puck deep ' +
    'in the strong-side corner, in the same place as before and with the puck on the far side of ' +
    'his body from the pressure. The opposition forward is now past him, about five feet nearer ' +
    'the goal line and five feet inside, level with the goal line. A dashed pass route leaves the ' +
    'carrier and runs back up the wall, away from the checker, finishing about six feet short of ' +
    'a second own forward standing on the strong-side half-wall. The goaltender is in the crease. ' +
    'No other opposition players are drawn, and no route is drawn for the passer.',

  players: [
    { id: 'F1', pos: 'F', at: CYCLE_CARRIER, label: 'the carrier' },
    // Past him: (89, 26) is 7.07 ft from the carrier, deeper and inside, on the
    // goal line. He came from up the wall, which is where the space now is.
    { id: 'F',  team: 'opp', pos: 'F', at: { at: 'corner:right', dx: 7, dy: -8 }, label: 'gone past you' },
    // The teammate arriving into the vacated space, on the half-wall — the spot
    // this module names once and reuses. 16.8 ft from the carrier.
    { id: 'F2', pos: 'F', at: HALF_WALL, label: 'arriving behind you' },
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
  ],

  routes: [
    // The reverse. Straight, and deliberately: a reverse on the wall is in practice
    // a hard backhand banked off the boards, and this notation has no mark for a
    // banked puck, so it is drawn as the pass it is rather than given a bow that
    // would assert a curve nobody put on it. `breakout-reverse` says the same and
    // draws it the same way.
    //
    // (84, 31) -> (74.5, 35.8) is 10.6 ft long and finishes 6.13 ft short of the
    // receiver's marker at (69, 38.5). It runs away from the checker at (89, 26),
    // which is the point of it.
    { from: CYCLE_CARRIER, to: { at: 'half-wall:right', dx: 5.5, dy: -2.7 }, kind: 'pass' },
  ],

  puck: CYCLE_PUCK,
};

// ---------------------------------------------------------------------------
// 12 — The shape right after a shot: F3 high as the safety, the other two
//      forwards crashing for the screen and the rebound (section 10)
//
// STATIC, ON PURPOSE. Section 10 gives F3 three jobs in order — "be the
// safety", "cover the vacated point if a defenceman activates", "read the
// rebound and jump" — and the SECOND of those has three named coaching-choice
// variants for who covers the point if a defenceman pinches: the house
// default (F3 takes the line), a five-man rotation (whichever player is
// highest covers), or the weak-side defenceman sliding across instead.
// Drawing any of that would mean either three frames or one frame hedged past
// the point of use, and a picture is the most absolute-looking thing on a
// page. So this diagram draws only the part that does not vary — the moment
// BEFORE any of the three would even apply, both defencemen still on the
// line — and the caption names the choice in words rather than drawing it.
// ---------------------------------------------------------------------------

// F3's safety spot. Section 10: "at or near the top of the circle". This is
// the identical description section 3 gives the high forward in the base
// shape — "higher in the zone, toward the top of the circles" — so it reuses
// HIGH_F rather than re-deriving the same position under a second name.
// (54, 8), on the back edge of the home-plate polygon (the edge from
// (54, 22) to (54, -22)) and so already established, in this file's own
// fiveManShape comment, as being inside it.

// Hunting the strong-side rebound. (77, 13): 8.06 ft from NET_FRONT
// (dx 4, dy 7, sqrt(65)) against the 6.55 ft two forward glyphs (each 2.9 ft
// body plus half its 0.75 outline, 3.275 ft of ink) need to avoid touching —
// 1.51 ft of daylight. Also inside the home-plate polygon: the angled edge
// from faceoff-dot:right (69, 22) to the near post (89, 3) crosses y 14.4 at
// this x, above this player's y 13.
const STRONG_SIDE_REBOUND = { at: 'faceoff-dot:right', dx: 8, dy: -9 };  // (77, 13)

const postShotShape = {
  id: 'oz-post-shot-shape',
  owner: 'content/systems/offensive_zone_play.md',
  half: true,
  width: 900,

  caption:
    'The shape in the seconds right after a shot: F3 holds high, at or near the top of the ' +
    'circle, as the safety — a rebound straight out is his, and a counter-attack has to go ' +
    'through him. The other two forwards go to the net: one to the front for the screen and tip, ' +
    'one hunting the strong-side rebound. Both defencemen are still on the blue line, the house ' +
    'default and not a law: if the strong-side defenceman pinches, whether F3 covers the point, ' +
    'the highest player covers under a five-man rotation, or the weak-side defenceman slides ' +
    'across instead is a coaching choice this picture does not draw. Find out which your team plays.',

  describe:
    'The attacking half of the rink, the net at the right, in the moments right after a shot. ' +
    'Three own forwards. F3 is high, at the top of the strong-side circle and just inside the ' +
    'home-plate area, drawn as the safety. A second forward stands at the net front, just outside ' +
    'the blue paint, for the screen and tip. A third stands closer to the strong-side faceoff ' +
    'dot, also inside the home-plate area, hunting the rebound. Both defencemen remain on the ' +
    'blue line, one each side. The opposing goaltender is in the crease. No routes are drawn: ' +
    'this is the shape at a moment, not a sequence.',

  players: [
    { id: 'F3', pos: 'F', at: HIGH_F,               label: 'the safety' },
    { id: 'F',  pos: 'F', at: NET_FRONT,            label: 'screen and tip' },
    { id: 'F',  pos: 'F', at: STRONG_SIDE_REBOUND,  label: 'hunts the rebound' },
    { id: 'D',  pos: 'D', at: 'point:right',        label: 'holds the line' },
    { id: 'D',  pos: 'D', at: 'point:left',         label: 'holds the line' },
    { id: 'G',  team: 'opp', pos: 'G', at: GOALIE },
  ],
};

export default [
  homePlate,
  royalRoad,
  crossTheRoadYourself,
  fiveManShape,
  afterRotation,
  halfWallOptions,
  cycleRim,
  cycleReverse,
  lowToHigh,
  netFrontScreen,
  behindTheNet,
  postShotShape,
];
