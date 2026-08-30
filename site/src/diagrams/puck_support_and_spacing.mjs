/**
 * Diagrams for content/hockey-iq/puck_support_and_spacing.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * ONE STANDING HAZARD IN THIS PARTICULAR SECTION. Its opening claim is that
 * "your correct position is not a place on the ice. It is a distance and an angle
 * from two moving things — the puck, and your teammates." A diagram is the most
 * absolute-looking thing on a page and draws exactly one instance of that
 * relationship, so a reader can come away with the coordinates instead of the
 * principle — which is the opposite of what the section teaches. Every caption
 * here therefore says, in its own words, that what is drawn is one instance of a
 * relationship that travels with the puck.
 */

// ---------------------------------------------------------------------------
// 1 and 2 — the contrast. "Why a triangle and not a line" is a comparison, and a
// single picture cannot make a comparison. The same four players stand in the
// same place in both diagrams except for the one player the prose moves:
// "Now pull one of those three off the line, into the middle."
//
// THE THREE TEAMMATES ARE COLLINEAR BY CONSTRUCTION, and they have to be: this
// diagram exists to draw the WRONG shape, and if the three are not actually in a
// line there is nothing for the next diagram to be a contrast with. `onLine(n)`
// steps n × 15 ft along a single bearing from the carrier, so the premise cannot
// decay the way three hand-typed coordinate pairs did. They were (83,34),
// (68,38.5) and (53,37.5) — 15.66 and 15.03 ft apart, but bent: the middle man sat
// 2.73 ft off the line through the other two, and the defender who is supposed to
// be standing IN that line sat 2.63 ft to the boards side of it. Nothing in the
// source said so, because the comment here still described the coordinates the
// three had had before rink.json's half-wall moved. The caption said "a straight
// line" and the picture showed a shallow zigzag.
//
// 8 DEGREES OFF THE BOARDS, AND IT IS NOT A FREE CHOICE. The deepest man is in the
// corner, where the dasher curves away on the 28 ft arc about (72, 14.5), so his
// glyph has to sit about 5.6 ft off it; the highest is up the straight wall, where
// an own-team circle's ink (2.9 radius plus half of the 0.75 stroke) reaches the
// boards at y 39.2. Three points 15 ft apart spanning those two cannot run
// parallel to the wall — at 8 degrees the top man is at y 38.18 with 1.05 ft of
// ice left, and any flatter draws the deep man's circle through the corner boards.
// Resolved: (83, 34), (68.15, 36.09), (53.29, 38.18), cross product 0.02.
// ASSUMES rink.json half-wall.y = 38.5 and the boards at y ±42.5.
// ---------------------------------------------------------------------------

const STEP = 15;                                   // ft between adjacent players
const TILT = 8 * Math.PI / 180;                    // the line's bearing off the boards
const onLine = (n) => ({
  at: 'corner:right',
  dx: +(1 - n * STEP * Math.cos(TILT)).toFixed(2),
  dy: +(n * STEP * Math.sin(TILT)).toFixed(2),
});

const CARRIER = onLine(0);                                  // (83, 34) deep on the wall
const WALL_MID = onLine(1);                                 // (68.15, 36.09) the near option
const WALL_HIGH = onLine(2);                                // (53.29, 38.18) furthest up the wall
// The defender stands *in* the line, at its midpoint between the carrier and the
// near receiver — 7.50 ft from one and 7.49 from the other. He has to be between
// the carrier and the near option to be between the carrier and both — that is the
// whole geometry of the section's "One defender standing in that line is between
// the carrier and *both* receivers." Kept at 7.5 ft rather than the 5 ft a stick
// actually reaches because two glyphs 5 ft apart overlap at every width this
// renders at. He was at (75.5, 39), which was neither on the line nor 7.5 ft from
// the carrier — 9.01 ft from him, and 2.63 ft off the lane he is the whole point of.
const DEFENDER = onLine(0.5);                               // (75.57, 35.04)

const supportInALine = {
  id: 'support-in-a-line',
  owner: 'content/hockey-iq/puck_support_and_spacing.md',
  half: true,
  width: 900,

  caption:
    'Three teammates strung in a straight line up the boards, with the puck on the deepest of them. ' +
    'One opposition defender standing in that line is between the carrier and both receivers, so a ' +
    'single stick blade in a single lane kills two options at once — a line is the ' +
    'cheapest shape in hockey to defend, and a line also has to be completely re-formed after every pass. ' +
    'Nothing here is a fixed spot on the ice: what is wrong is the shape, and the shape is just as cheap ' +
    'to defend wherever on the ice the three of them happen to be. ' +
    'The next diagram pulls one of the three off the line.',

  describe:
    'The attacking half of the rink, the net at the right. Three own-team forwards stand in a straight ' +
    'line along the right-hand boards, fifteen feet apart: the puck carrier deepest, in the corner; a ' +
    'second at the half-wall; a third further up the wall towards the blue line. A single opposition ' +
    'forward stands on that same line, between the carrier and the other two. No routes are drawn — ' +
    'the point of the picture is the shape, not any movement.',

  players: [
    { id: 'C',  pos: 'F', at: CARRIER,                            label: 'puck carrier' },
    { id: 'A1',  pos: 'F', at: WALL_MID,                           label: 'option one' },
    { id: 'B',  pos: 'F', at: WALL_HIGH,                          label: 'option two' },
    // SOLID CIRCLE = an opposition forward: `pos: 'F'` gives the circle (shape is the
    // position) and `team: 'opp'` gives the solid fill (fill is the team). The id is
    // just a role letter. ⚠️ This read "Open TRIANGLE = opposition", which inverted
    // both channels at once. Not 'X': the rendered
    // legend and reading_ice_hockey_diagrams.md both say in terms that an X is a
    // pylon — a practice cone — and never a player, and X-meaning-opposition is one
    // of the symbols this corpus rewrote its notation specifically to escape.
    { id: 'F',  pos: 'F', team: 'opp', at: DEFENDER,              label: 'in both lanes' },
  ],

  // Deliberately no routes. Drawing the two pass lanes would draw two dashed
  // arrows on top of each other — they are literally the same line, which is the
  // defect — and either one would have to run through the defender's glyph.
  puck: { at: 'corner:right', dx: -1.5, dy: 2 },
};

const supportTriangle = {
  id: 'support-triangle',
  owner: 'content/hockey-iq/puck_support_and_spacing.md',
  half: true,
  width: 900,

  caption:
    'The same three teammates with one of them pulled off the line into the middle, so the lanes out of ' +
    'the carrier now diverge. The defender has not moved: he is still in the lane up the boards, and ' +
    'covering it means turning his body away from the middle option, which is the point: ' +
    'no single defender can be in both lanes. A triangle is the smallest shape in which all three corners ' +
    'have two teammates at different angles, so whichever corner ends up with the puck already has its ' +
    'support — and when the puck moves from one corner to another you still have a triangle, where a line ' +
    'has to be rebuilt every time. ' +
    'This is one instance of a relationship rather than a set of spots: the triangle is not a formation ' +
    'you set up, it is a shape you keep while everything moves, rotating and stretching with the puck.',

  describe:
    'The attacking half of the rink, the net at the right. The puck carrier is deep on the right-hand ' +
    'boards in the corner and one teammate remains high on the same boards, but the third has moved off ' +
    'the wall into the middle of the zone, level with and just below the faceoff dot, so the three form a ' +
    'triangle. The opposition forward stands where he stood in the previous diagram, on the line between ' +
    'the carrier and the high wall option. A single dashed passing route runs from the carrier into the ' +
    'middle, stopping short of the receiver — the lane the defender cannot also be in.',

  // The shape itself, shaded — "The three players form a triangle" is the
  // section's own sentence, and three glyphs on a wide sheet do not make a reader
  // see a triangle. The corners are the three players and nothing else, so the
  // region cannot say anything the positions do not already say.
  zones: [
    { points: [CARRIER, { at: 'faceoff-dot:right', dx: 2, dy: -5 }, WALL_HIGH] },
  ],

  players: [
    { id: 'C',  pos: 'F', at: CARRIER,                                  label: 'puck carrier' },
    // "Now pull one of those three off the line, into the middle." This is the
    // near option from the line diagram, moved; the far one stays put so the
    // reader can see which player changed.
    { id: 'A1',  pos: 'F', at: { at: 'faceoff-dot:right', dx: 2, dy: -5 }, label: 'into the middle' },
    { id: 'B',  pos: 'F', at: WALL_HIGH,                                label: 'still on the wall' },
    // Unlabelled on purpose. He is boxed in by the carrier, the route and the
    // boards, and every legal slot for a label of his ended up nearer another
    // player — the placer's own ownership rule then exiles it across the zone on
    // a leader line, which is worse than no label. The caption says he has not
    // moved and is still in the lane up the boards.
    // Same player, same spot, same letter as the previous diagram — see the note
    // there on why he is not an 'X'.
    { id: 'F',  pos: 'F', team: 'opp', at: DEFENDER },
  ],

  // One pass, into the lane the defender is not in. Stopped 4 ft short of the
  // receiver's glyph. The pass up the wall is deliberately NOT drawn: the
  // defender is standing in it, and the section's claim is that covering one
  // means turning away from the other, not that both are open.
  routes: [
    { from: CARRIER, to: { at: 'faceoff-dot:right', dx: 4.3, dy: -1.7 }, kind: 'pass' },
  ],

  puck: { at: 'corner:right', dx: -1.5, dy: 2 },
};

// ---------------------------------------------------------------------------
// 3 — support distance, drawn as a BAND rather than as spots.
//
// The section refuses to make this a rule: "There is no governing body that
// publishes a support distance, and coaches differ. What follows is a
// widely-taught rule of thumb, not a rule of hockey." A diagram that plants two
// or three teammates at fixed distances teaches the coordinates; a band teaches a
// range, which is what the section actually claims.
//
// The band is 8 to 15 ft from the carrier, which is the section's own synthesis
// of its two figures: "8 to 10 feet when the carrier is pressured, stretching to
// 15 when they have time." The 8-to-10 end is the one sourced figure (Bruyere's
// "8-to-10-foot-or-less pass"); the 10-to-15 default is coaching rule of thumb.
//
// Geometry: an annulus centred on the carrier at the half-wall, inner radius 8 ft
// and outer 15 ft, swept from 175 degrees round through 265 to 355 — everything
// except the wall side. A shaded polygon is NOT clipped by the renderer, so where
// the sweep stops is the only thing keeping the band off the dasher.
//
// ASSUMES rink.json half-wall = (69, 38.5) and the boards at y ±42.5 — READ THE
// $comment ON half-wall BEFORE CHANGING EITHER. The sweep used to run 160 to 380,
// under a comment reasoning that the wall side had to be dropped "because the
// boards are 9.5 ft away" — 42.5 − 33, which was true only at the old half-wall.y
// of 33. At 38.5 the boards are 4 ft away, and both ends of that sweep put the
// outer arc at y 43.63: a foot and an eighth of shaded ice drawn straight over the
// upper dasher, at both corners, in the one diagram whose whole subject is a
// distance. Truncation was already the mechanism; it was just sized against a
// rink that no longer existed.
//
// Recomputed, the two ends are bounded by different things and the sweep is tipped
// 5 degrees to hold both. The 175 end runs out over the straight wall, so the
// limit is y ≤ 42.5; the 355 end runs into the corner, where the dasher curves in
// on the 28 ft arc about (72, 14.5) and bites sooner. At 175/355 the outer arc
// clears the boards by 2.69 and 2.36 ft respectively, and no point of the band is
// nearer than 2.36 ft to the ice edge. Straight down the wall into the corner —
// bearing 0, which the old sweep included — is 1.17 ft from the dasher at r 15 and
// is correctly outside the band.
//
// Every corner is an offset in feet from `half-wall:right`; the numbers are
// r*cos(theta) and r*sin(theta) and nothing else. Nine points per arc: five came
// out visibly polygonal, and a range drawn with corners reads as a shape somebody
// chose.
const BAND = [
  { at: 'half-wall:right', dx: -7.97, dy: 0.7 },     // inner, 175 deg
  { at: 'half-wall:right', dx: -7.63, dy: -2.41 },   // inner, 197.5
  { at: 'half-wall:right', dx: -6.13, dy: -5.14 },   // inner, 220
  { at: 'half-wall:right', dx: -3.69, dy: -7.1 },    // inner, 242.5
  { at: 'half-wall:right', dx: -0.7, dy: -7.97 },    // inner, 265
  { at: 'half-wall:right', dx: 2.41, dy: -7.63 },    // inner, 287.5
  { at: 'half-wall:right', dx: 5.14, dy: -6.13 },    // inner, 310
  { at: 'half-wall:right', dx: 7.1, dy: -3.69 },     // inner, 332.5
  { at: 'half-wall:right', dx: 7.97, dy: -0.7 },     // inner, 355
  { at: 'half-wall:right', dx: 14.94, dy: -1.31 },   // outer, 355
  { at: 'half-wall:right', dx: 13.31, dy: -6.93 },   // outer, 332.5
  { at: 'half-wall:right', dx: 9.64, dy: -11.49 },   // outer, 310
  { at: 'half-wall:right', dx: 4.51, dy: -14.31 },   // outer, 287.5
  { at: 'half-wall:right', dx: -1.31, dy: -14.94 },  // outer, 265
  { at: 'half-wall:right', dx: -6.93, dy: -13.31 },  // outer, 242.5
  { at: 'half-wall:right', dx: -11.49, dy: -9.64 },  // outer, 220
  { at: 'half-wall:right', dx: -14.31, dy: -4.51 },  // outer, 197.5
  { at: 'half-wall:right', dx: -14.94, dy: 1.31 },   // outer, 175
];

const supportDistance = {
  id: 'support-distance-range',
  owner: 'content/hockey-iq/puck_support_and_spacing.md',
  half: true,
  width: 900,

  caption:
    'Support has a working range, drawn here as a band of ice around a carrier on the half-wall rather ' +
    'than as a spot, because it travels with the puck. The range is eight to ten feet ' +
    'when the carrier is pressured, stretching to about fifteen when they have time — the tighter end is ' +
    'the one figure here with a source behind it, and the ten-to-fifteen default is a widely-taught ' +
    'coaching rule of thumb rather than a rule of hockey, because no governing body publishes a support ' +
    'distance and coaches differ. Shorten it under heavy pressure, in your own zone and below the ' +
    'offensive goal line; lengthen it in open ice and above the offensive dots; on wider international ' +
    'ice check the rink first, because distances scale and angles do not. ' +
    'One teammate stands inside the band and is an option; the other is inside its inner edge, which is ' +
    'supporting too close — one defender covers both of you, and you are standing ' +
    'in the escape route the carrier needs to turn into. ' +
    'The real self-test is time, not distance — if your teammate released the puck right now, would it ' +
    'reach you before that defender does?',

  describe:
    'The attacking half of the rink, the net at the right. A puck carrier stands on the right-hand ' +
    'boards level with the faceoff dot. A shaded band of ice curves around them on the open-ice side, ' +
    'its inner edge eight feet away and its outer edge fifteen. One teammate stands inside the band, ' +
    // "DASHED" WAS REMOVED HERE AND HAS BEEN PUT BACK, AND BOTH MOVES WERE RIGHT AT THE TIME.
    // The route is 8.68 ft; the carrier's glyph buries its first 3.88 ft and the arrowhead took
    // the last 2.68, leaving 2.12 ft — under one 2.4 ft dash, so nothing broken rendered at all
    // and a listener was being told about an interruption no sighted reader could see. The
    // renderer now draws a half-size arrowhead where a dashed route's visible run falls under
    // one dash (see SHORT-ROUTE ARROWHEAD in `scripts/lib/rink.mjs`), which returns 1.34 ft and
    // puts a full-pitch dash and a clear gap on the page. Checked at 375 px, magnified from the
    // device pixels rather than from the vector. The word is true again, so it is back.
    'below and inside the carrier, with a short dashed passing route drawn to them. A second teammate ' +
    'stands inside the inner edge, about seven feet from the carrier, too close to be an option. No ' +
    'opposition players are drawn.',

  // No label on the band. The renderer writes a zone's label at its centroid, and
  // the centroid of a ring is the middle of the hole — which is where the carrier
  // is standing. The figures live in the caption, which is also the only place a
  // listener would get them.
  zones: [{ points: BAND }],

  players: [
    // THE CARRIER IS DELIBERATELY UNLABELLED, and it is the placer that decides
    // that, not taste. He stands on the half-wall with the boards above him and
    // both of the other two labelled players below him, so his label's Voronoi
    // cell is the strip of ice between y 36.75 and the top of the ice — and a
    // label box is 3.5 ft deep, so nothing fits in it. Every one of `placeLabels`'
    // eighteen fixed offsets then fails: the six vertical ones are either inside
    // his own glyph's reserve or off the ice, and every remaining one is nearer S
    // or T than it is to him, which the placer's ownership rule rejects outright
    // ("a label belongs to the nearest thing to it, whatever the leader line
    // says"). The fallback sweep does NOT test the corner arc — only `inside()`
    // does, and the fallback never calls it — so it exiled "puck carrier" to
    // (87.41, -39.25): the OPPOSITE corner, 79.9 ft away, 1.2 ft outside the
    // boards, on a dashed leader crossing both circles, the crease and the net.
    // In the one diagram whose entire subject is distance.
    //
    // SHORTENING DOES NOT RESCUE IT, and the way it fails is worth recording
    // because it fails quietly. 'carrier', at seven characters, still misses every
    // fixed offset — ownership does not depend on a label's width — and still
    // falls through to the sweep; the sweep merely finds a narrower cell, at
    // (57.49, 38.75). That is on the ice and looks fine, and it is 11.51 ft from
    // the carrier and 11.20 ft from S at (62, 28.5). It is nearer the wrong
    // player. Measured, not reasoned: the sweep's ownership branch had no legal
    // cell at all here, so it degraded to the best-ratio fallback, which is the
    // branch the placer's own note says produces "puck carrier ... 7.4 ft from F1
    // and 20.3 ft from the carrier it named". A label on the wrong man is worse
    // than no label, not better than a long leader.
    //
    // So this is closed the way positions.mjs closes it — the glyph loses the
    // label and the words move to prose that a listener gets anyway. The caption
    // says "a carrier on the half-wall", the `describe` says "A puck carrier
    // stands on the right-hand boards level with the faceoff dot", and the puck
    // is drawn at his feet. Nothing is lost but the leader nobody would trace.
    { id: 'C', pos: 'F', at: 'half-wall:right' },
    // Inside the band at 12.2 ft, on a different angle from the carrier's own
    // line up the wall.
    { id: 'S', pos: 'F', at: { at: 'half-wall:right', dx: -7, dy: -10 }, label: 'in range' },
    // 7.1 ft — inside the inner edge. The section's two reasons are that one
    // defender covers both of you and that you are standing in the carrier's
    // escape. Not drawn closer than this only because two glyphs five feet apart
    // overlap at every width this renders at.
    { id: 'T', pos: 'F', at: { at: 'half-wall:right', dx: 5.5, dy: -4.5 }, label: 'too close' },
  ],

  routes: [
    { from: 'half-wall:right', to: { at: 'half-wall:right', dx: -5, dy: -7.1 }, kind: 'pass' },
  ],

  puck: { at: 'half-wall:right', dx: -1.5, dy: 1.5 },
};

// ---------------------------------------------------------------------------
// 4 — the three support angles.
//
// Drawn in the neutral zone, on the full sheet, for one reason: "behind the puck"
// is defined as "between the puck and your own net", so the reader has to be able
// to see which end is their own. Up-ice is to the right; your own net is off the
// left-hand end.
//
// The neutral zone is also where the section's distance table says support goes
// "longer, and mostly lateral", which is why the level option is drawn 26 ft
// across and the other two nearer 15.
// ---------------------------------------------------------------------------

const NZ_CARRIER = { at: 'centre-ice', dy: 20 };

const supportAngles = {
  id: 'support-angles',
  owner: 'content/hockey-iq/puck_support_and_spacing.md',
  half: false,
  width: 1000,

  caption:
    'One instance of the three support angles, drawn around a carrier in the neutral zone attacking to ' +
    'the right: one teammate behind the puck, one level with it across the ice, one ahead of it. ' +
    'Behind is the outlet — a low-risk reset into space the opposition has already vacated, and the ' +
    'option that still exists when the other two are covered, so a team with nobody behind the puck has ' +
    'no answer to good pressure except dumping it away. ' +
    'Level changes the side of the ice, which is a normal, high-value play in the neutral and offensive ' +
    'zones; in your own defensive zone the same pass across the middle is the highest-risk pass in ' +
    'hockey, and the lateral option there goes behind your own net, not through the slot. ' +
    'Ahead is the only one of the three that gains ground and the most interceptable, and at the blue ' +
    'line it needs the receiver to time their entry rather than park in the zone, because both skates ' +
    'completely over the line before the puck completely crosses it is offside (NHL Rule 83) — ' +
    'and a raised trail skate is onside under NHL and IIHF rules but offside under USA Hockey ' +
    'Rule 630(a) and Hockey Canada Rule 6.11 — two books of the four — so check which book your ' +
    'league uses. ' +
    'A team needs all three at once, so the useful question when you skate to support is which of the ' +
    'three is currently missing.',

  describe:
    'The full sheet, attacking to the right. A puck carrier stands on the centre line towards the ' +
    'right-hand boards. Three teammates: one behind the puck and nearer the defensive end, one level ' +
    'with the carrier but across on the far side of the ice, and one ahead of the puck and wide, still ' +
    'well short of the attacking blue line. Three dashed passing routes run from the carrier to each, ' +
    'stopping short of the receiver, at clearly different angles. No opposition players are drawn.',

  players: [
    { id: 'C',  pos: 'F', at: NZ_CARRIER,                                label: 'puck carrier' },
    // NOT `neutral-zone-mid:far`. `resolve()` splits a location on ':' into
    // base, side, end — so ':far' is only read as the end when a side is present
    // ('corner:right:far'). On an unsided position it lands in the `side` slot
    // and is silently ignored, which put this player twelve feet AHEAD of the
    // puck in the first render of this diagram, in a diagram whose entire subject
    // is which side of the puck people are on. Offsets are unambiguous.
    { id: 'S1', pos: 'F', at: { at: 'neutral-zone-mid', dx: -24, dy: 12 }, label: 'behind — the outlet' },
    { id: 'S2', pos: 'F', at: { at: 'centre-ice', dy: -6 },              label: 'level — changes the side' },
    { id: 'S3', pos: 'F', at: { at: 'neutral-zone-mid', dx: 2, dy: 26 }, label: 'ahead — gains ground' },
  ],

  // Each stopped 4 ft short of its receiver.
  routes: [
    { from: NZ_CARRIER, to: { at: 'neutral-zone-mid', dx: -21.7, dy: 14.5 }, kind: 'pass' },
    { from: NZ_CARRIER, to: { at: 'centre-ice', dy: -2 },                      kind: 'pass' },
    { from: NZ_CARRIER, to: { at: 'neutral-zone-mid', dx: -1.7, dy: 23.6 },    kind: 'pass' },
  ],

  puck: { at: 'centre-ice', dx: -1.5, dy: 21.5 },
};

// ---------------------------------------------------------------------------
// 5 — the defensive-zone support structure.
//
// "Your defenceman retrieves the puck behind your net. Before they turn, they
// need options, and the standard set is three." Drawn at the instant before the
// turn, so all three are options and none of them has happened.
//
// NOTE THE ORIENTATION. This is the only kind of diagram in this file where the
// net drawn on the right is YOUR OWN, and up-ice is to the left. The half-sheet
// renderer always draws the attacking end, so a defensive-zone play either goes
// here at half scale on the full sheet or right-to-left on the half sheet; with
// six players and four routes in one zone, legibility won. The caption says so
// in its first sentence.
// ---------------------------------------------------------------------------

const RETRIEVER = { at: 'behind-net', dy: 5 };            // (94, 5)
const SWING = { at: 'faceoff-dot:right', dx: 8, dy: -12 };  // (77, 10)

const defensiveZoneSupport = {
  id: 'defensive-zone-support',
  owner: 'content/hockey-iq/puck_support_and_spacing.md',
  half: true,
  width: 900,

  caption:
    'The defensive-zone support structure, drawn with your own net at the right and up-ice to the left, ' +
    'at the moment your defenceman retrieves the puck behind the net and before they turn. ' +
    'The standard set of options is three: the strong-side winger on the wall roughly level with the ' +
    'faceoff dot, which is the up option; the centre swinging low through the middle and curling toward ' +
    'the same side, which is the option that turns a breakout into an attack; and the defence partner on ' +
    'the far side, reached behind the net and below the goal line, never through the slot. ' +
    'The weak-side winger stays higher and wider than everybody else, and that width is what stops the ' +
    'defence loading one side of the ice. ' +
    'The zone-specific rule is that in your own end the safe outlet outranks the attacking option — ' +
    'support short and keep the angles safe, because a tidy exit with possession is a win and a clever ' +
    'exit that fails is a goal against. ' +
    'Your goaltender has the best view on the ice and no puck to look at, so they are part of this ' +
    'structure as a voice whatever your league does about the trapezoid.',

  describe:
    'One end zone, which here is your own end: your net at the right, up-ice to the left. Your ' +
    'defenceman stands behind your own net with the puck. Three dashed passing routes leave them, each ' +
    'stopping short of its receiver: one up to the winger on the right-hand boards level with the faceoff ' +
    'dot, one to the centre low in the middle of the zone, and one back across behind the net and below ' +
    'the goal line to the defence partner. A solid route shows the centre swinging low through the middle ' +
    'and curling back toward the strong side. The weak-side winger stands high and wide on the far ' +
    'boards, above the faceoff dots. The goaltender is in the crease. No opposition players are drawn.',

  players: [
    { id: 'G',  pos: 'G', at: 'crease' },
    { id: 'D1', pos: 'D', at: RETRIEVER,                              label: 'the carrier' },
    // Reached behind the net, below the goal line. The whole segment from the
    // retriever to this player stays behind the back rail of the goal frame
    // (x 89 to 92.33), so the picture cannot be read as a pass across the mouth.
    // Held 17 ft off the carrier rather than 14 because at 14 the two triangles,
    // the goaltender and four labels were competing for the same corner and the
    // placer exiled two labels onto leader lines halfway across the zone.
    { id: 'D2', pos: 'D', at: { at: 'goal-line', dx: 3, dy: -12 },    label: 'the partner' },
    // "roughly level with the faceoff dot on the boards" — which is exactly what
    // the coordinate table's half-wall is.
    { id: 'W1', pos: 'F', at: 'half-wall:right',                      label: 'up the wall' },
    { id: 'C',  pos: 'F', at: SWING,                                  label: 'the middle' },
    // The weak-side counterpart of W1, and given W1's treatment: ON the half-wall,
    // dy 0, so "wide" tracks the coordinate table instead of a remembered one. The
    // "high" is the dx: -14, which is what puts him up-ice of the dots. He carried
    // dy: -3, harmless when half-wall.y was 33 and fatal at 38.5 — it drew his
    // centre at y = -41.5, so 1.9 ft of a 2.9 ft circle was through the dasher and
    // the painted edge was clipped by the viewport at -44.5. The caption's point
    // about this player is that "the weak-side winger stays higher and WIDER than
    // everybody else, and that width is what stops the defence loading one side of
    // the ice" — and he was the glyph drawn half-buried in the boards.
    { id: 'W2', pos: 'F', at: { at: 'half-wall:left', dx: -14 }, label: 'high and wide' },
  ],

  routes: [
    { from: RETRIEVER, to: { at: 'half-wall:right', dx: 2.7, dy: -3 },        kind: 'pass' },
    { from: RETRIEVER, to: { at: 'faceoff-dot:right', dx: 11.8, dy: -13.1 },  kind: 'pass' },
    { from: RETRIEVER, to: { at: 'goal-line', dx: 3.3, dy: -8.6 },            kind: 'pass' },
    // The swing: low through the middle, curling toward the strong side. Bowed
    // toward the net so the curve reads as a curl rather than a diagonal.
    { from: SWING, to: { at: 'faceoff-dot:right', dx: -3, dy: -2 }, kind: 'skate', bow: -4 },
  ],

  puck: { at: 'behind-net', dx: -1.5, dy: 6.5 },
};

// ---------------------------------------------------------------------------
// 6 — the neutral zone as three lanes.
//
// The lane boundaries are drawn on the faceoff-dot lines (y = plus and minus 22)
// because the section gives no boundary and the dots are the nearest thing on the
// ice to one. That is a drawing decision, not a marking on the rink, and the
// caption says so.
//
// `blue-line` is unsided, so the far blue line is an offset and NOT
// 'blue-line:far' — see the note on the previous diagram.
// ---------------------------------------------------------------------------

const NZ_FAR = -50;   // dx from `blue-line` to the far blue line

const neutralZoneLanes = {
  id: 'neutral-zone-lanes',
  owner: 'content/hockey-iq/puck_support_and_spacing.md',
  half: false,
  width: 1000,

  caption:
    'The neutral zone organised as three lanes — strong-side boards, middle, weak-side boards — with one ' +
    'player in each, attacking to the right. One player per lane is the usual default and a coaching ' +
    'choice rather than a law: two players in the same lane can be covered by one defender, which is the ' +
    'same-lane-same-checker failure, but the realistic alternative is a 1-3-1 regroup that deliberately ' +
    'stacks the middle lane with a low centre and a high middle support, to overload the seam and pull ' +
    'the opposing defence inward, accepting that one checker can see both. ' +
    'Find out whether your team spreads or stacks, because the two look identical for the first stride ' +
    'and then require opposite decisions. ' +
    'The three are at different depths on curved routes on purpose — different lane, different speed, ' +
    'and a curve lets you receive the puck already facing forward. ' +
    'The lane boundaries are drawn here on the faceoff-dot lines so that the shading has an edge; they ' +
    'are not marked on the ice.',

  describe:
    'The full sheet, attacking to the right. The neutral zone between the two blue lines is shaded in ' +
    'three bands: a boards lane on each side and a middle lane between the faceoff-dot lines. One own ' +
    'player is in each band, at three different depths, none of them level with another. The player in ' +
    'the strong-side boards lane has the puck and carries it up ice on a curved route; the other two ' +
    'skate curved routes of their own, all three stopping well short of the attacking blue line. No ' +
    'opposition players are drawn.',

  zones: [
    { points: [
      { at: 'blue-line', dx: NZ_FAR, dy: 22 }, { at: 'blue-line', dy: 22 },
      { at: 'blue-line', dy: 42 },             { at: 'blue-line', dx: NZ_FAR, dy: 42 },
    ] },
    { points: [
      { at: 'blue-line', dx: NZ_FAR, dy: -22 }, { at: 'blue-line', dy: -22 },
      { at: 'blue-line', dy: 22 },              { at: 'blue-line', dx: NZ_FAR, dy: 22 },
    ] },
    { points: [
      { at: 'blue-line', dx: NZ_FAR, dy: -42 }, { at: 'blue-line', dy: -42 },
      { at: 'blue-line', dy: -22 },             { at: 'blue-line', dx: NZ_FAR, dy: -22 },
    ] },
  ],

  // Three different depths as well as three different widths: "different lane,
  // different speed". Drawn abreast, the frozen shape would say the opposite of
  // what the sentence says.
  players: [
    { id: 'F1', pos: 'F', at: { at: 'centre-ice', dx: -10, dy: 32 }, label: 'strong-side lane' },
    { id: 'F2', pos: 'F', at: { at: 'centre-ice', dx: 2, dy: 10 },   label: 'middle lane' },
    { id: 'F3', pos: 'F', at: { at: 'centre-ice', dx: -4, dy: -32 }, label: 'weak-side lane' },
  ],

  routes: [
    { from: { at: 'centre-ice', dx: -10, dy: 32 }, to: { at: 'centre-ice', dx: 16, dy: 30 },  kind: 'carry', bow: -3 },
    { from: { at: 'centre-ice', dx: 2, dy: 10 },   to: { at: 'centre-ice', dx: 18, dy: 16 },  kind: 'skate', bow: 3 },
    { from: { at: 'centre-ice', dx: -4, dy: -32 }, to: { at: 'centre-ice', dx: 16, dy: -28 }, kind: 'skate', bow: -3 },
  ],

  puck: { at: 'centre-ice', dx: -11.5, dy: 33.5 },
};

// ---------------------------------------------------------------------------
// 7 — helping a board battle by leaving it.
//
// "Your teammate is pinned on the boards in a two-player battle. Every instinct
// says go and help. Usually, don't — at least not into the battle."
//
// The support player is drawn 16.5 ft from the battle, which is the section's own
// "open ice about five metres away" and nothing rounder. The opponent beside them
// is the checker the section says you bring with you if you go in.
//
// ASSUMES rink.json half-wall = (69, 38.5), boards at y = 42.5, own-team glyph
// radius 2.9. Every offset below is anchored to the half-wall rather than to a
// remembered y, and the two distances this diagram states in words — the pinned
// player being ON the boards, and the support player being five metres away — are
// derived from that anchor. If half-wall.y moves, this comment is wrong and the
// picture is not: that is the intended failure mode.
// ---------------------------------------------------------------------------

const battleSupport = {
  id: 'support-a-battle-from-outside',
  owner: 'content/hockey-iq/puck_support_and_spacing.md',
  half: true,
  width: 900,

  caption:
    'Your teammate is pinned on the boards with the puck in a two-player battle, and every instinct says ' +
    'go and help. Usually, don\'t — at least not into the battle: another body in a space that already ' +
    'has no room brings your own checker in with it, so the exits the puck has to come out of are more ' +
    'crowded than before. The support player here has instead moved to open ice about five metres away ' +
    'with their stick down, so the puck has somewhere to go and they collect it with time. ' +
    'The exception is real, and it is two exceptions: go in to win the puck when it is a genuine ' +
    'fifty-fifty scramble that nobody has, and many teams do assign a second player to arrive at the ' +
    'wall — so find out whether that is your job before you decide it is not. ' +
    // ⚠️ THIS IS THE ONE CAPTION IN THE CORPUS THAT SENDS A READER *INTO* A WALL BATTLE, and it
    // was the one with no arrival posture on it. `winger-dz-rim`, `winger-dz-reverse` and
    // `off-wing-open-to-the-ice` all carry the warning, so the form already existed and this was
    // the outlier. Wording is the owning section's own — `content/hockey-iq/
    // puck_support_and_spacing.md`: "going in does not change how you arrive", "skates parallel
    // to the wall … forearm and hip, head up and chin off your chest — never your back to the
    // boards, never duck". The caption is VOICED (`md_to_speech.py` resolves `diagram:<id>` to
    // it) and is also the SVG title and the visible figcaption, which is why it cannot rely on
    // the paragraph beside it: quoted anywhere else, the instruction to go in would travel
    // without the posture.
    //
    // ⚠️ THE TAIL USED TO READ "no speed is slow enough to make turning your back, or ducking,
    // safe" — ONE UNIVERSAL CLAIM COVERING TWO PROHIBITIONS, AND THE EVIDENCE ONLY REACHES ONE.
    // USA Hockey's walking-speed finding is stated of "the head being slightly flexed (head
    // down) while making head-on contact with the boards or goal post" (Heads Up Hockey Program
    // Guide, `sources/huh.txt`), and the corpus's own Sources note in
    // `content/technique/body_contact_and_battles.md` records that the guide does NOT attach it
    // to a player turning their back. The strongest text on disk for the turned back is
    // "Even a light hit from behind could inflict a severe head or neck injury"
    // (`sources/ibc.txt`, §5 Checking From Behind) — a possibility claim, not a universal one,
    // and addressed to the checker rather than to the player who turns.
    //
    // ⚠️ WHAT MAY NOT CHANGE IS THE PROHIBITION. Only the evidence attached to each limb moves.
    // Read aloud, two clauses of unequal strength can be heard as the weaker one granting
    // permission, so the absolute lands first and on its own — "Never turn your back to the
    // wall and never duck" — and "neither prohibition is a rule for fast arrivals only" covers
    // both before either quote is heard. A listener must not be able to reach
    // "so a slow hit from behind is fine."
    '⚠️ And if you do go in, how you arrive outranks winning the puck. Never turn your back to ' +
    'the wall and never duck. Skates parallel to the wall, forearm and hip into the contact, ' +
    'head up and chin off your chest. Loose-puck races and fifty-fifty pucks at the wall are ' +
    'where checking-from-behind and boarding injuries happen, and neither prohibition is a rule ' +
    'for fast arrivals only: USA Hockey warns that even a light hit from behind could inflict a ' +
    'severe head or neck injury, and the head-down collision that ducking produces can break ' +
    'your neck at walking speed.',

  describe:
    'The attacking half of the rink, the net at the right. An own-team forward is on the right-hand ' +
    'boards with the puck, level with the faceoff dot, with an opposition forward tight to their inside ' +
    'shoulder, pinning them against the wall. A second own forward stands about sixteen feet away in ' +
    'open ice, inside and up-ice of the battle, near the faceoff dot. An opposition forward stands ' +
    'between that support player and the net, marking them. No routes are drawn.',

  players: [
    // ON the half-wall — dy is 0, so he tracks the coordinate rather than an offset
    // from a remembered one. He carried dy: +5, which put him at y = 43.5: a foot
    // beyond the dasher, with 1.90 ft of his glyph cut off by the viewport. The
    // caption opens "your teammate is pinned on the boards with the puck", and he
    // was the one player in the picture the reader could not see whole. At 38.5 the
    // circle tops out at 41.4, or 41.78 counting the 0.75 stroke — 0.72 ft of ice
    // to spare. Anything above 39.6 puts an own-team circle through the boards.
    { id: 'T',  pos: 'F', at: 'half-wall:right',                          label: 'pinned on the wall' },
    // The checker doing the pinning: inside him and half a body deeper, 5.85 ft
    // centre to centre, the overlap at the shoulder being what reads as a pin. He
    // moved down with the man he is pinning — the offset from T is unchanged, so
    // the picture is the same picture, five feet lower.
    //
    // Not 'X1'. An X in this corpus is a pylon — a practice cone — and never a
    // player: the rendered legend and reading_ice_hockey_diagrams.md both say so in
    // terms. See the note on the first diagram in this file. Not 'F1'/'F2' either,
    // which would be the obvious way to tell two opponents apart: this same module
    // uses F1/F2/F3 for OWN-TEAM roles set by order of arrival in the neutral-zone
    // and layering diagrams, and playing_without_the_puck.mjs refuses those letters
    // for opposition on exactly that ground. Two glyphs sharing a role letter is
    // already the corpus's convention — faceoffs.mjs draws two 'W's and two 'D's in
    // one picture — because the letter names the kind of player, not the person.
    { id: 'F',  pos: 'F', team: 'opp', at: { at: 'half-wall:right', dx: 2, dy: -5.5 } },
    // 16.5 ft from the teammate on the wall — five metres (16.49 ft = 5.03 m).
    // dy: +0.5 restores that: with T back on the half-wall the straight 4 ft offset
    // measured 16.98, and the 16.5 in this comment was computed when half-wall.y
    // was 33 — a stale number of exactly the kind that moved the winger in
    // positions.mjs to the wrong place.
    { id: 'S',  pos: 'F', at: { at: 'faceoff-dot:right', dx: -4, dy: 0.5 }, label: 'open ice, stick down' },
    // Your checker, between you and the net. Same reasoning on the letter.
    { id: 'F',  pos: 'F', team: 'opp', at: { at: 'faceoff-dot:right', dx: 4, dy: -6 }, label: 'your checker' },
  ],

  // No routes on purpose. The movement this section describes is a player NOT
  // going somewhere, and an arrow drawn into the pile — however it were labelled
  // — is the instruction a reader takes from a glance.
  // On the far side of the pinned player from the checker — the boards side, which
  // is the side they are shielding it on. It rode up with T's old dy: +5 and sat at
  // (65, 44.5), two feet outside the dasher and half of it cut off by the viewport,
  // so the puck the caption is about was in the crowd. At dy: +1.5 it is at (65, 40)
  // — 1.5 ft of ice above it, 4.27 ft from T's centre, so it sits just off the rim of
  // his glyph rather than under it, and squarely opposite the checker.
  puck: { at: 'half-wall:right', dx: -4, dy: 1.5 },
};

// ---------------------------------------------------------------------------
// 8 — layering rather than converging, defending.
//
// Drawn as a forecheck because the section names one — "a forechecking F1
// pressures while F2 supports on the puck-side and reads the escape" — which
// keeps the attacking net on the right, as in the first three diagrams, and keeps
// the two defending players' shapes out of the argument about who plays where.
//
// The second player's spot is doing two jobs the section names: it is up the wall
// from the first, which is where the carrier goes if the first player is beaten
// on the side he is being angled toward, and it sits 6.2 ft off the passing lane
// to the opposition's up-wall option — within a stick and a half of it, which is
// what standing in a lane means at this scale. That figure read "about two and a
// half feet" and was computed before rink.json's half-wall moved to 38.5; the
// second player is anchored to the half-wall, so he moved with it and the number
// did not. The pass along that lane is still deliberately not drawn: the section's
// claim is that the layer covers it, not that it is open, and an arrow squeezing
// between the second player's glyph and the winger he is covering asserts the
// opposite of what the caption says.
// ---------------------------------------------------------------------------

const F1_AT = { at: 'faceoff-dot:right', dx: -5, dy: 4 };   // (64, 26)

const layerNotConverge = {
  id: 'layer-not-converge',
  owner: 'content/hockey-iq/puck_support_and_spacing.md',
  half: true,
  width: 900,

  caption:
    'Two players defending one puck carrier, forechecking towards the net on the right: the first ' +
    'pressures, and the second layers behind and to the side of them instead of converging on the same ' +
    'puck. First and second here are the order they arrive in, not two particular players. ' +
    'The layer is offset diagonally rather than directly behind, at a similar ' +
    'two-to-three-stick-lengths range — close enough to take over the coverage, far enough that a single ' +
    'move does not beat both of you — and it covers two things at once: the space the carrier goes if ' +
    'the first player is beaten, and the passing lane out of the pressure. ' +
    'Converging instead puts two of you on one puck, both beaten by the same pass, and by definition ' +
    'leaves the other three of you covering four of them, and it is the free man who scores. ' +
    'Whether you may hold that layer at all is system-dependent and changes between zone, man-to-man and ' +
    'hybrid coverage, and a deliberate double-team — commonly allowed below your own goal line, where a ' +
    'turnover is contained by the net and the boards — is a coaching decision rather than something to ' +
    'freelance, so ask your coach where and when your team doubles.',

  describe:
    'The attacking half of the rink, the opposition net at the right. An opposition defenceman has the ' +
    'puck in the right-hand corner. One own forward closes from up-ice and inside, with a checking ' +
    'pressure route that finishes short of the carrier and aimed at the ice inside them rather than at ' +
    'the puck. A second own forward stands about fifteen feet behind and to the boards side of the ' +
    'first, up the wall and a stick’s reach off the lane to the opposition winger who waits higher up ' +
    'the same boards. No pass is drawn.',

  players: [
    { id: 'D',  pos: 'D', team: 'opp', at: { at: 'corner:right', dx: -4 },              label: 'puck carrier' },
    { id: 'W',  pos: 'F', team: 'opp', at: { at: 'top-of-circle:right', dx: -10, dy: 8 }, label: 'the escape option' },
    // THE LABELS SAY THE JOB; THE IDS SAY THE ORDER. They read "first, pressures"
    // and "second, layers", and the "first"/"second" was redundant twice over —
    // the glyphs are already F1 and F2, and the caption already says "First and
    // second here are the order they arrive in, not two particular players".
    // Dropping it is not cosmetic. F2 stands up the wall at (55, 37.5) with the
    // boards above him, W below-left and F1 below-right, so his label has to go
    // down; at fourteen characters its box is 21.95 ft wide, which is wider than
    // the gaps between those two glyphs' 7 ft reserves, and every one of the
    // placer's eighteen offsets collided. The fallback sweep does not test the
    // corner arc, so it exiled "second, layers" to (40.98, -39.25) — 78.0 ft away
    // in the opposite corner, on a DASHED leader, in a corpus where a dashed line
    // means a pass, and it was the only long line in the picture.
    //
    // The arithmetic, so the next label written here is checkable rather than
    // guessed: `placeLabels` sizes a box at 0.56 x the 2.8 ft font per character
    // by 3.5 ft deep, reserves 7 x 8 ft around every glyph, and collides on
    // overlap of the two boxes. The slot that works is [0, -7.5] = (55, 30); it
    // clears W's reserve at (44, 30) for any width, and clears F1's at (64, 26)
    // only while the box is at most 11 ft wide — SEVEN CHARACTERS. 'layers' is
    // six. Checked by rendering three widths rather than by arithmetic alone: six
    // and seven characters both land at (55, 30), and eight falls out of the fixed
    // offsets into the sweep and lands at (66.27, 38.75) — 11.3 ft away instead of
    // 7.5, still its own anchor's but a leader twice as long across a busier part
    // of the picture. So if this label ever grows a word, re-render it and look.
    { id: 'F1', pos: 'F', at: F1_AT,                                                    label: 'pressures' },
    { id: 'F2', pos: 'F', at: { at: 'half-wall:right', dx: -14, dy: -1 },               label: 'layers' },
  ],

  // Checking pressure, finishing at the ice inside the carrier — 23 degrees off
  // the straight line to him, and stopping 8.6 ft short. "Skate at the space you
  // want to deny" is the corpus's rule about this, and a route that finishes
  // within a few degrees of the carrier's glyph is the defect it exists to catch.
  routes: [
    { from: F1_AT, to: { at: 'corner:right', dx: -9, dy: -7 }, kind: 'pressure' },
  ],

  // Held on the boards side of the carrier, away from the pressure. At dx -5.5,
  // dy -1.5 it was drawn inside the carrier's own glyph, and it also put the
  // puck 4 ft from where the pressure route finishes — which is the thing this
  // corpus checks a pressure route against.
  puck: { at: 'corner:right', dx: -1, dy: 3 },
};

export default [
  supportInALine, supportTriangle, supportDistance, supportAngles,
  defensiveZoneSupport, neutralZoneLanes, battleSupport, layerNotConverge,
];
