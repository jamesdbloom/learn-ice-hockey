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
// The three teammates are collinear by construction: (83,34), (68,33), (53,32)
// all sit on the same line, 15 ft apart, running up the strong-side boards —
// the section's own example, "say all three strung up the boards".
// ---------------------------------------------------------------------------

const CARRIER = { at: 'corner:right', dx: 1 };              // (83, 34) deep on the wall
const WALL_HIGH = { at: 'half-wall:right', dx: -16, dy: -1 }; // (53, 32) furthest up the wall
// The defender stands *in* the line, 7.5 ft from the carrier and 7.5 ft from the
// nearer receiver. He has to be between the carrier and the near option to be
// between the carrier and both — that is the whole geometry of the section's
// "One defender standing in that line is between the carrier and *both*
// receivers." Kept at 7.5 ft rather than the 5 ft a stick actually reaches
// because two glyphs 5 ft apart overlap at every width this renders at.
const DEFENDER = { at: 'half-wall:right', dx: 6.5, dy: 0.5 }; // (75.5, 33.5)

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
    { id: 'A',  pos: 'F', at: { at: 'half-wall:right', dx: -1 },  label: 'option one' },
    { id: 'B',  pos: 'F', at: WALL_HIGH,                          label: 'option two' },
    // Open glyph = opposition, per the corpus's convention on top of the key.
    { id: 'X',  pos: 'F', team: 'opp', at: DEFENDER,              label: 'in both lanes' },
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
    { id: 'A',  pos: 'F', at: { at: 'faceoff-dot:right', dx: 2, dy: -5 }, label: 'into the middle' },
    { id: 'B',  pos: 'F', at: WALL_HIGH,                                label: 'still on the wall' },
    // Unlabelled on purpose. He is boxed in by the carrier, the route and the
    // boards, and every legal slot for a label of his ended up nearer another
    // player — the placer's own ownership rule then exiles it across the zone on
    // a leader line, which is worse than no label. The caption says he has not
    // moved and is still in the lane up the boards.
    { id: 'X',  pos: 'F', team: 'opp', at: DEFENDER },
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
// and outer 15 ft, swept from 160 degrees round through 270 to 380 — everything
// except the wall side, because the boards are 9.5 ft away there and a shaded
// polygon is not clipped by the renderer, so a full ring would be drawn over the
// dasher. Every corner is an offset in feet from `half-wall:right`; the numbers
// are r*cos(theta) and r*sin(theta) and nothing else. Nine points per arc: five
// came out visibly polygonal, and a range drawn with corners reads as a shape
// somebody chose.
const BAND = [
  { at: 'half-wall:right', dx: -7.52, dy: 2.74 },    // inner, 160 deg
  { at: 'half-wall:right', dx: -7.93, dy: -1.04 },   // inner, 187.5
  { at: 'half-wall:right', dx: -6.55, dy: -4.59 },   // inner, 215
  { at: 'half-wall:right', dx: -3.69, dy: -7.1 },    // inner, 242.5
  { at: 'half-wall:right', dx: 0, dy: -8 },          // inner, 270
  { at: 'half-wall:right', dx: 3.69, dy: -7.1 },     // inner, 297.5
  { at: 'half-wall:right', dx: 6.55, dy: -4.59 },    // inner, 325
  { at: 'half-wall:right', dx: 7.93, dy: -1.04 },    // inner, 352.5
  { at: 'half-wall:right', dx: 7.52, dy: 2.74 },     // inner, 380
  { at: 'half-wall:right', dx: 14.1, dy: 5.13 },     // outer, 380
  { at: 'half-wall:right', dx: 14.87, dy: -1.96 },   // outer, 352.5
  { at: 'half-wall:right', dx: 12.29, dy: -8.6 },    // outer, 325
  { at: 'half-wall:right', dx: 6.93, dy: -13.31 },   // outer, 297.5
  { at: 'half-wall:right', dx: 0, dy: -15 },         // outer, 270
  { at: 'half-wall:right', dx: -6.93, dy: -13.31 },  // outer, 242.5
  { at: 'half-wall:right', dx: -12.29, dy: -8.6 },   // outer, 215
  { at: 'half-wall:right', dx: -14.87, dy: -1.96 },  // outer, 187.5
  { at: 'half-wall:right', dx: -14.1, dy: 5.13 },    // outer, 160
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
    'below and inside the carrier, with a short dashed passing route running to them. A second teammate ' +
    'stands inside the inner edge, about six feet from the carrier, too close to be an option. No ' +
    'opposition players are drawn.',

  // No label on the band. The renderer writes a zone's label at its centroid, and
  // the centroid of a ring is the middle of the hole — which is where the carrier
  // is standing. The figures live in the caption, which is also the only place a
  // listener would get them.
  zones: [{ points: BAND }],

  players: [
    { id: 'C', pos: 'F', at: 'half-wall:right',                        label: 'puck carrier' },
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
    'Rule 630(a), so check which book your league uses. ' +
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
    { id: 'W2', pos: 'F', at: { at: 'half-wall:left', dx: -14, dy: -3 }, label: 'high and wide' },
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
    'wall — so find out whether that is your job before you decide it is not.',

  describe:
    'The attacking half of the rink, the net at the right. An own-team forward is on the right-hand ' +
    'boards with the puck, level with the faceoff dot, with an opposition forward tight to their inside ' +
    'shoulder, pinning them against the wall. A second own forward stands about sixteen feet away in ' +
    'open ice, inside and up-ice of the battle, near the faceoff dot. An opposition forward stands ' +
    'between that support player and the net, marking them. No routes are drawn.',

  players: [
    { id: 'T',  pos: 'F', at: { at: 'half-wall:right', dy: 5 },           label: 'pinned on the wall' },
    { id: 'X1', pos: 'F', team: 'opp', at: { at: 'half-wall:right', dx: 2, dy: -0.5 } },
    // 16.5 ft from the teammate on the wall — five metres.
    { id: 'S',  pos: 'F', at: { at: 'faceoff-dot:right', dx: -4 },        label: 'open ice, stick down' },
    { id: 'X2', pos: 'F', team: 'opp', at: { at: 'faceoff-dot:right', dx: 4, dy: -6 }, label: 'your checker' },
  ],

  // No routes on purpose. The movement this section describes is a player NOT
  // going somewhere, and an arrow drawn into the pile — however it were labelled
  // — is the instruction a reader takes from a glance.
  // On the far side of the pinned player from the checker — the side they are
  // shielding it on. At dy 6 it was drawn on top of their own glyph.
  puck: { at: 'half-wall:right', dx: -4, dy: 6 },
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
// on the side he is being angled toward, and it sits within about two and a half
// feet of the passing lane to the opposition's up-wall option. The pass along
// that lane is deliberately not drawn — the second player is standing in it, so
// drawing it would run a route through a glyph.
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
    'two-to-three-stick-lengths range — close enough to take over the check, far enough that a single ' +
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
    'the puck. A second own forward stands about eleven feet behind and to the boards side of the first, ' +
    'up the wall, standing in the lane to the opposition winger who waits higher up the same boards. No ' +
    'pass is drawn.',

  players: [
    { id: 'D',  pos: 'D', team: 'opp', at: { at: 'corner:right', dx: -4 },              label: 'puck carrier' },
    { id: 'W',  pos: 'F', team: 'opp', at: { at: 'top-of-circle:right', dx: -10, dy: 8 }, label: 'the escape option' },
    { id: 'F1', pos: 'F', at: F1_AT,                                                    label: 'first, pressures' },
    { id: 'F2', pos: 'F', at: { at: 'half-wall:right', dx: -14, dy: -1 },               label: 'second, layers' },
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
