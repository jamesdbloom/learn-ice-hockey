/**
 * Diagrams for content/systems/defensive_zone_coverage.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * THIS DOCUMENT IS A COMPARISON, NOT A SYSTEM. It sets out five named ways of
 * covering the defensive zone — low zone collapse, man-on-man, hybrid, Box+1 and
 * the collapsing box — plus the strong-side overload as the opposite adjustment,
 * and it says in its own first facts block that this is "the most system-dependent
 * part of hockey — two good teams can play completely different systems and both
 * be right". A picture is the most absolute-looking thing on a page, so **every
 * caption here names the system it draws and says it is one of several.** A
 * diagram that merely showed five players in the defensive zone would read as
 * "this is how defensive hockey is played", which is the exact claim the document
 * spends 600 lines refusing to make.
 *
 * TWO PAIRS, NOT SIX SINGLETONS. Two of the moments this document names are
 * transitions, and a still frame cannot carry a transition:
 *
 *   - "The weak-side winger's collapse — the moment that decides the system" is
 *     drawn as TWO frames, before and after, with the captions saying which is
 *     which. It is not drawn as one frame with an arrow and a hope.
 *   - "The walk-down from the point" is drawn TWICE, the same event answered by
 *     two different systems, because the section's own framing is "this is a
 *     coaching choice, so know your team's version". One frame would have been an
 *     answer; two are a choice.
 *
 * WHAT IS DELIBERATELY NOT DRAWN, and why, so the next reviewer does not add it:
 *
 *   - **The hybrid's base shape.** The section says a raw headcount cannot tell a
 *     hybrid from a collapse ("Both a collapse and a hybrid put three low (two D
 *     and the centre), so a raw headcount tells you nothing... What separates them
 *     is where the two wingers are and *why*"). A still frame can show where; it
 *     cannot show why. Drawing it would produce a near-copy of the collapse frames
 *     that differed only in its caption, which teaches nothing and creates a
 *     second place a correction must reach. The hybrid appears where it is
 *     visible — its answer to the walk-down — inside the man-on-man caption, which
 *     is also where the section puts it ("the cleanest answer of the three, and the
 *     main reason hybrids exist").
 *   - **The rotations** (corner to behind the net, low to high, point to point).
 *     Every one is movement over time by two or more players. Each would need its
 *     own before/after pair; five pairs is ten diagrams for material the section
 *     already carries as five bullets.
 *   - **The mistakes.** "Both wingers sagging at once", "both defencemen drawn to
 *     the same puck". A picture of a wrong shape is a picture, and a reader who
 *     glances at it takes the shape, not the caption that says not to.
 */

// ---------------------------------------------------------------------------
// Shared geometry, named once because several diagrams refer to the same points.
// ---------------------------------------------------------------------------

// The house / home plate, exactly as §"The Problem Every System Solves" defines
// it: "the region bounded by the two goalposts, widening out to the two faceoff
// dots, and up to the top of the two faceoff circles". The posts are at y = ±3
// on the goal line (rink.json goal.post_y), so the two low corners are the posts
// themselves rather than anything invented.
const HOUSE = [
  { at: 'goal-line', dy: 3 },      // (89, 3)   right goalpost
  'faceoff-dot:right',             // (69, 22)
  'top-of-circle:right',           // (54, 22)
  'top-of-circle:left',            // (54, -22)
  'faceoff-dot:left',              // (69, -22)
  { at: 'goal-line', dy: -3 },     // (89, -3)  left goalpost
];

// Our goaltender, in the paint. The crease is 6 ft deep from the goal line, so
// (87, 0) is inside it; anything further out would be a goaltending claim this
// document does not make.
const OUR_G = { at: 'crease', dx: 1 };                       // (87, 0)

// --- The corner situation, shared by the two low-zone-collapse frames ---------
// §"The base shape — puck in the strong-side corner". Their three forwards are
// down low ("which matches their three forwards down there") and their two
// defencemen hold the points.
// A GLYPH IN THE CORNER MUST CLEAR THE ARC, NOT THE STRAIGHT DASHER — the same
// rule positions.mjs states over its own corner cluster, which this module did
// not follow. ASSUMES `site/src/data/rink.json` at sha256-12 f789ee35b8d9, and
// the glyph branches of site/scripts/lib/rink.mjs:
//   boards       y = +/-42.5, x = +/-100        rink.json sheet 200 x 85
//   corner arc   radius 28, centres (+/-72, +/-14.5) = (100 - 28, 42.5 - 28),
//                drawn with a 0.6 stroke, so its INNER ink edge is r = 27.7
//   OPP_CARRIER  pos 'F' -> a CIRCLE. r 2.9, stroke 0.75 -> 3.275 of ink;
//                the white halo is a 1.95 stroke centred on r 2.9 -> 3.875.
// ⚠️ THIS COMMENT PREVIOUSLY DERIVED THIS CLEARANCE FOR A TRIANGLE — "opposition
// triangle, apex at cy + 3.6" — and then added 0.8 ft of MITER at the apex. Both
// halves are wrong. Shape carries the POSITION here, not the team (see the header
// of rink.mjs): OPP_CARRIER is `pos: 'F'`, so he is a circle and has no apex. And
// the triangle branch joins ROUND, not miter, so even a real triangle would carry
// 0.4 ft of ink beyond a vertex rather than 0.8 — rink.json's own `point` note
// says so. The two errors happened to land near the right number, which is why
// nothing caught them; the CONCLUSION below still holds, on different arithmetic.
//
// At (84, 34) the circle centre is 22.90 ft from the arc centre. Ink reaches
// 26.17 and the halo 26.77, against an inner boards ink edge of 27.7: 1.53 ft of
// white to the ink, 0.93 ft to the halo. The old (85, 36) was 25.12 out, so its
// ink reached 28.40 and its halo 29.00 — 0.70 ft of a body, and 1.30 ft of white
// ring, drawn THROUGH the dasher, in both frames that share this constant.
// He is still the deepest player on the ice and still in the corner.
//
// WHY NOT FURTHER IN. (82, 34) — the named `corner:right`, where the other five
// diagrams in this file put their corner forward — clears by 2.09 ft, and was
// rejected: it lands 7.81 ft from where frame one's route ends at C_IN_CORNER,
// inside the distance within which an arrowhead may not finish near an opposing
// skater — THE ARRIVAL INVARIANT, stated above `playSvg` in scripts/lib/rink.mjs
// and enforced by scripts/check-arrivals.mjs. The derivation of the figure used to
// be spelled out here; it belongs in one place, and this is not it. Moving the
// carrier to fix the boards would have moved that arrowhead onto him. At (84, 34)
// the gap is 9.43 ft — five inches clear of the 9 ft gate, and the thinnest
// non-goaltender margin in the corpus — and the route is untouched.
const OPP_CARRIER  = { at: 'corner:right', dx: 2 };          // (84, 34) in the corner
// At his stick, up the wall from him, on the side away from the two of ours
// closing on him. THE PUCK MARK IS THIS GUIDE'S OWN ADAPTATION — neither published
// key has a single-puck symbol (rink.mjs records that) — so it is the one mark
// that has to be unmistakable, and a 1.1 ft disc touching a 3.275 ft filled circle
// is not a puck, it is a lobe on a glyph. THE RULE USED HERE, derived from the
// renderer's constants rather than chosen: a puck must clear a glyph's INK by at
// least 0.75 ft of white, i.e. >= 5.125 ft from a forward's centre (3.275 + 1.1 +
// 0.75) and >= 2.25 ft from the nearest point of a triangle's path (0.4 + 1.1 +
// 0.75). Sitting ON the white halo is fine and is in fact the best case: black on
// white reads at any size.
// ⚠️ (81.5, 30) FAILED THAT AND WAS RECORDED AS PASSING. The comment here claimed
// "0.70 ft clear of the triangle's base ink, 0.94 ft clear of D_ON_PUCK's circle" —
// both glyphs named as the other shape, and both figures wrong. Measured: it sat
// 4.717 ft from the carrier, which is 0.34 ft of white against a 3.275 ft circle,
// and it overlapped his halo. It was the tightest margin in the picture and the
// comment warned a future editor off moving it on the strength of a figure twice
// the truth.
// (79, 36.5) was tried and RENDERED WRONG for a reason the arithmetic could not
// show: it sits within a foot of the straight line between the carrier and
// OPP_SUPPORT on the half-wall, so it read as a loose puck BETWEEN two opponents
// rather than as one of them having it. (80.5, 38) is board-side of that line by
// 3.5 ft, which is where a puck in a corner battle actually is, with the carrier
// between it and the ice. Measures: 0.945 ft of white to OPP_CARRIER's ink,
// 11.51 ft to OPP_SUPPORT, 10.06 ft to C_IN_CORNER, and 1.61 ft inside the
// boards' inner ink edge.
const OPP_PUCK     = { at: 'corner:right', dx: -1.5, dy: 4 };   // (80.5, 38) at his stick
const OPP_NETFRONT = { at: 'slot', dy: -6 };                 // (76, -6) the doorstep threat
const OPP_SUPPORT  = 'half-wall:right';                      // (69, 38.5) low support on the wall

// Our own five in that situation. The centre's destination is named once because
// both frames refer to it: frame one as the end of his route, frame two as where
// he is standing.
const D_ON_PUCK    = { at: 'corner:right', dx: 3, dy: -8 };  // (85, 26) 8.06 ft goal-side of the
                                                             // carrier — which is what both frames'
                                                             // `describe` has always said. It read
                                                             // "10 ft" against the carrier's old
                                                             // (85, 36); the glyph did not move when
                                                             // the carrier came off the boards, and
                                                             // the picture now matches the words.
const D_GOALMOUTH  = { at: 'goalmouth', dx: -2, dy: -6 };    // (83, -6) between the net-front
                                                             //          forward and the net
// (76, 29). Goal-side and inside of the carrier rather than out at the boards
// beside him: the first render put the centre at (78, 33), which crowded the
// carrier's glyph and the puck and pointed his arrowhead into the corner within
// 27 degrees of the carrier himself. Arriving inside him is also the support
// position the section describes — "two on one wins it" is about outnumbering the
// battle, not about joining the pin.
const C_IN_CORNER  = { at: 'corner:right', dx: -6, dy: -5 };
const W_STRONG_PT  = { at: 'point:right', dx: 8 };           // (33, 20) goal-side of their D
const W_WEAK_PT    = { at: 'point:left', dx: 8 };            // (33, -20)

// --- The walk-down situation, shared by the two walk-down frames -------------
// §"The walk-down from the point": "the opposing defenceman skates down from the
// blue line toward the top of the circle — about 35 feet from the goal line".
// top-of-circle is (54, 22) and the goal line is x = 89, so the route's own end
// point *is* the section's 35 feet. Nothing here rounds or restates it.
const WD_FROM      = 'point:right';                          // (25, 20) with the puck
const WD_TO        = 'top-of-circle:right';                  // (54, 22) = 35 ft out
// ⚠️ WAS (28, 18), WHICH IS 0.23 FT FROM THE BASE-RIGHT VERTEX OF THE CARRIER'S
// OWN TRIANGLE — the disc was drawn essentially ON the corner of the glyph and
// rendered as a bulge on it, in BOTH walk-down frames. Nothing mechanical looks at
// the puck: check-arrivals reads routes, check_geometry reads named positions.
// (28, 24.5) is 3.05 ft from the nearest point of that triangle's path, so 1.55 ft
// of white after the 0.4 ink and the 1.1 disc, and 11.6 ft from WD_WINGER. It sits
// above the carry rather than below it because the corridor below — between the
// triangle and WD_WINGER at (33, 14) — is only about 3.2 ft wide and cannot hold
// a puck with any margin at all.
const WD_PUCK      = { at: 'point:right', dx: 3, dy: 4.5 };  // (28, 24.5)
// Our strong-side winger starts goal-side of the man he is watching: the line
// from (25, 20) to the net passes y = 17.5 at x = 33, so (33, 14) is inside it —
// "between that defenceman and the net" (§base shape table).
const WD_WINGER    = { at: 'point:right', dx: 8, dy: -6 };   // (33, 14)

// ---------------------------------------------------------------------------
// 1 · The house
// ---------------------------------------------------------------------------
// No players. This is the target every system in the document is aiming at, and
// drawing five bodies on it would turn a shared definition into one system's
// answer to it.

const theHouse = {
  id: 'dz-the-house',
  owner: 'content/systems/defensive_zone_coverage.md',
  half: true,
  width: 900,

  caption:
    'The house, or home plate — the region every defensive-zone system ' +
    'exists to protect: bounded by the two goalposts, widening out to the two end-zone ' +
    'faceoff dots and up to the top of the two faceoff circles. ' +
    'The most dangerous chances come from inside it — a shot from in there is worth several ' +
    'times the same shot from outside, which is the part every source agrees on, while how ' +
    'much of the scoring it accounts for depends on whose figure you take and the counted ' +
    'ones are more modest than the versions repeated in dressing rooms. ' +
    'So the problem every system solves is how to ' +
    'allocate five bodies so that it is never open while still leaving somebody available ' +
    'to receive an outlet pass. A shape that packs all five players onto the goal line ' +
    'protects the house beautifully and has nobody available to receive that pass, so you ' +
    'win the puck and immediately give it back. ' +
    'Nothing here is painted on the ice: the circles, dots and crease that fix its corners ' +
    'are, and the shape is read off them. ' +
    'No system covers everything. Coverage is about choosing which chances outside the ' +
    'house you are willing to give up, and the systems in the diagrams that follow each ' +
    'concede something different.',

  describe:
    'The attacking half of the rink, the defended net at the right. A shaded six-sided ' +
    'region is drawn on the ice: its two narrow corners are the two goalposts on the goal ' +
    'line, it widens out to the two end-zone faceoff dots, and its far edge runs straight ' +
    'across between the tops of the two faceoff circles. The result is the shape of a ' +
    'baseball home plate lying on its side, pointing at the net. No skaters are drawn; ' +
    'our goaltender is in the crease, which is how you know which net this is.',

  zones: [{ points: HOUSE, label: 'the house' }],

  players: [
    { id: 'G', pos: 'G', at: OUR_G },
  ],
};

// ---------------------------------------------------------------------------
// 2 · Low zone collapse — frame one of two: the puck goes into the corner
// ---------------------------------------------------------------------------
// The frozen shape is the lesson, so check it against the section's own table
// before the arrow: strong-side D on the puck, weak-side D at the goalmouth,
// BOTH wingers still high on their points, centre still in the high slot. The
// one route is the centre going down — which is what empties the high slot and
// sets up frame two.

const collapseCorner = {
  id: 'dz-collapse-corner',
  owner: 'content/systems/defensive_zone_coverage.md',
  half: true,
  width: 900,

  // ⚠️ THE SAFETY UNIT IN THE MIDDLE OF THIS CAPTION IS NOT TRIMMABLE PROSE.
  // This frame draws the second body arriving into a corner, and it fixes the
  // target's facing: the puck disc is at his stick against the boards. §"The base
  // shape" attaches TWO warnings to that picture and this caption used to carry
  // only the second of them — the pin. The first is the one that ejects you:
  // ":Never: Send the second body into a back — the player digging along your
  // boards cannot see you"; and ":The second body is the one that arrives late and
  // unseen, so it is the one this warning is for."
  // WHY IT IS WORDED THE WAY IT IS. A caption is HEARD ONCE, so the floor comes
  // first, the tiers are in words rather than numbers, and only one book is priced
  // in a spoken unit — the four-book comparison and the rule numbers live in the
  // body and the ```facts blocks, where a reader can stop and re-read. Verified in
  // primary text: NHL 43.2 "There is no provision for a minor penalty for checking
  // from behind" with 43.3 the major and 43.5 the mandatory game misconduct; IIHF
  // 43.2 "there is no option to award a minor penalty" with 43.3 major plus an
  // automatic game misconduct. "At two minutes alone" rather than "ejects you in
  // every book" is deliberate and load-bearing: USA Hockey 608(a) writes "a minor
  // plus a misconduct penalty", and a USA Hockey misconduct is ten minutes (404(a)),
  // NOT an ejection. It is still never bare in any of the four.
  // ⚠️ THIS CAPTION IS THE MODULE'S LONGEST AND THIS EDIT MADE IT LONGER (220 →
  // 240 words). Room was bought by cutting the five-job enumeration of the base
  // shape, which the picture's own labels carry, the section's table at "The base
  // shape" carries, and its facts block carries — three tellings before the reader
  // reaches the picture. What was NOT cut to buy room is either warning.
  caption:
    'Low zone collapse — the house default assumed here, one of several a team might play — ' +
    'at the instant the puck goes into the strong-side corner. ' +
    'Both wingers are still high on the points, and the centre is leaving the high slot to go ' +
    'down as the second body into the corner battle, because two on one wins it. ' +
    '⚠️ The second body is the one that arrives late and unseen, and this carrier has the puck ' +
    'at his stick against the boards, with his back to the ice. ' +
    'Arrive on the puck, or on the ice he wants, or angle him off it — never into his back. ' +
    'No book prices a check from behind at two minutes alone: under the NHL and the IIHF there ' +
    'is no minor for it at all, so the floor is a major and an ejection. ' +
    '⚠️ And pin the puck, not the player — two on one is about outnumbering the battle, not ' +
    'joining a pin, and in IIHF women’s hockey pinning an opponent along the boards is an ' +
    'illegal hit. ' +
    'The centre’s trip down empties the high slot — the seam the puck comes back through — ' +
    'and this is frame one of two, not a shape to hold. ' +
    'Under man-on-man or a hybrid these five would be reading bodies, not areas — ask your ' +
    'coach which your team plays. ' +
    'All four books are set out earlier in this document.',

  describe:
    'The attacking half of the rink, the defended net at the right, with the puck in the ' +
    'strong-side corner at the top of the picture. Five opposition players: the puck carrier ' +
    'deep in the strong-side corner with the puck drawn at his stick against the boards, so he ' +
    'is facing the wall with his back to the ice, a forward supporting on the strong-side half-wall, a ' +
    'forward at the net front on the weak side of the crease, and their two defencemen at ' +
    'the two points. Six of our own: the strong-side defenceman on the puck about eight feet ' +
    'goal-side of the carrier, the weak-side defenceman on the doorstep between the net-front ' +
    'forward and the goal, the goaltender in the crease, both wingers high and just goal-side ' +
    'of the opposing defencemen at the points, and the centre in the high slot. One route: ' +
    'the centre skating from the high slot out to the corner to make it two on one, finishing ' +
    'inside the carrier and short of him rather than behind him.',

  players: [
    // Opposition. Three forwards low and two defencemen at the points, which is
    // the arrangement the section's own sentence describes: "Three of you — both
    // defencemen and the centre — live below the top of the circles, which
    // matches their three forwards down there, while the two wingers hold the
    // points so the opposing defencemen never get a clean seam pass".
    // THE CARRIER IS UNLABELLED IN BOTH FRAMES, and the placer decides that, not
    // taste. He is in a corner with four labelled players and a second opposition
    // forward around him, and `placeLabels` will not put a label anywhere that is
    // nearer somebody else than to its own anchor. Every one of its eighteen
    // offsets here is either inside a glyph's 7 x 8 ft reserve, off the ice, or
    // outside the corner arc — and its fallback sweep does not test the arc at
    // all, only `inside()` does, and the fallback never calls it. So it wrote
    // "puck carrier" 33 ft away at (51.41, 38.75) on a leader that ran within
    // 1.19 ft of the OTHER opposition forward, at (69, 38.5), and straight
    // through his glyph. Both are triangles, so the shape gave the reader no cue
    // they had landed on the wrong man.
    //
    // Shortening does not rescue it: 'carrier' lands 32.9 ft away, 'the puck'
    // 32.1, and 'on it' — five characters — goes outside the boards at (91.92,
    // 34.75). Tested, not assumed. So the words move to the prose, which is where
    // a listener gets them anyway: both captions and both `describe`s open on the
    // puck carrier deep in the strong-side corner, and the puck disc is drawn at
    // his stick. This is how positions.mjs closed the identical defect in its own
    // corner cluster.
    { id: 'F', team: 'opp', pos: 'F', at: OPP_CARRIER },
    { id: 'F', team: 'opp', pos: 'F', at: OPP_SUPPORT },
    { id: 'F', team: 'opp', pos: 'F', at: OPP_NETFRONT },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:right' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:left' },

    // Ours. Ids are the positions the section names — it never uses F1/F2/F3 in
    // this document, so neither does the diagram.
    { id: 'G', pos: 'G', at: OUR_G },
    { id: 'D', pos: 'D', at: D_ON_PUCK,   label: 'on the puck' },
    { id: 'D', pos: 'D', at: D_GOALMOUTH, label: 'the goalmouth' },
    { id: 'C', pos: 'F', at: 'high-slot', label: 'leaves the high slot' },
    { id: 'W', pos: 'F', at: W_STRONG_PT, label: 'holds the point' },
    { id: 'W', pos: 'F', at: W_WEAK_PT,   label: 'still on his point' },
  ],

  // One route only, because only one thing happens in this frame. Bowed so the
  // terminal tangent runs up the ice at about 84 degrees rather than in at the
  // carrier — the section's own instruction elsewhere is to skate at the space,
  // not at the puck, and an arrow finishing within a few degrees of an opponent
  // is a defect this project has already shipped once.
  routes: [
    { from: 'high-slot', to: C_IN_CORNER, kind: 'skate', bow: -2 },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------
// 3 · Low zone collapse — frame two of two: the weak-side winger's collapse
// ---------------------------------------------------------------------------
// No routes at all. This is the after, and the section's whole point is the
// SHAPE that results: four below the top of the circles, one winger still high.
// An arrow here would re-assert the movement frame one already showed and let
// the reader take the two frames as one instant.

const collapseHighSlot = {
  id: 'dz-collapse-high-slot',
  owner: 'content/systems/defensive_zone_coverage.md',
  half: true,
  width: 900,

  caption:
    'The same low zone collapse a beat later — the weak-side winger’s collapse, which is ' +
    'where this system succeeds or fails. ' +
    'The centre is now the second body in the corner battle — arriving inside the carrier and ' +
    'not behind him, because that carrier is facing the boards and cannot see him coming — ' +
    'and the weak-side winger has ' +
    'dropped off his point into the high slot to fill it; the strong-side winger holds his ' +
    'point, because if both wingers sag the point-to-point pass across the top gives their ' +
    'defenceman a free walk-in. ' +
    'Anyone with a clear view calls it — the centre, the weak-side defenceman or the winger ' +
    'himself — and the winger climbs straight back up to his point as soon as the puck comes ' +
    'out of the corner. ' +
    'The weak-side point is briefly unmarked, and that is deliberate: this system concedes ' +
    'point shots on purpose. ' +
    'It is one system among several, and even within it the collapse is not available if that ' +
    'winger has already followed the opposing defenceman down off the point.',

  describe:
    'The attacking half of the rink, the defended net at the right, the same moment as the ' +
    'previous diagram one beat later. The opposition are unchanged: the puck carrier deep in ' +
    'the strong-side corner, a forward on the strong-side half-wall, a forward at the net ' +
    'front, and two defencemen at the points. Two of our own players have moved. The centre ' +
    'has arrived on the inside edge of the strong-side corner, about nine feet from the carrier ' +
    'and about the same from the strong-side defenceman, so the carrier now has one of ours ' +
    'below him and one inside him — that is the two on one. The weak-side winger has come ' +
    'down from the weak-side point ' +
    'into the high slot in the middle of the ice. The strong-side winger is still high at his ' +
    'own point, and the weak-side defenceman is still on the doorstep. The opposition ' +
    'defenceman at the weak-side point now has nobody near him. No routes are drawn.',

  players: [
    // Unlabelled — see the note on the same glyph in the previous frame.
    { id: 'F', team: 'opp', pos: 'F', at: OPP_CARRIER },
    { id: 'F', team: 'opp', pos: 'F', at: OPP_SUPPORT },
    { id: 'F', team: 'opp', pos: 'F', at: OPP_NETFRONT },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:right' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:left',  label: 'briefly unmarked' },

    { id: 'G', pos: 'G', at: OUR_G },
    { id: 'D', pos: 'D', at: D_ON_PUCK,   label: 'on the puck' },
    { id: 'D', pos: 'D', at: D_GOALMOUTH, label: 'the goalmouth' },
    // The centre finishes where frame one's route ended. If these two ever
    // disagree the pair stops being a pair.
    { id: 'C', pos: 'F', at: C_IN_CORNER, label: 'second body' },
    { id: 'W', pos: 'F', at: W_STRONG_PT, label: 'holds his point' },
    { id: 'W', pos: 'F', at: 'high-slot', label: 'collapsed into the high slot' },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------
// 4 · The walk-down, answered by low zone collapse
// ---------------------------------------------------------------------------
// The rest of our five are where §"The rotations" puts them when the puck goes
// low to high: "the wingers close on their points, the centre steps up out of the
// low battle into the high slot, the defencemen recover to the net front and the
// low slot". That sentence is the only reason any of them is where it is.

const walkDownZone = {
  id: 'dz-walk-down-zone',
  owner: 'content/systems/defensive_zone_coverage.md',
  half: true,
  width: 900,

  caption:
    'The walk-down from the point, and what low zone collapse does about it — the standard ' +
    'instruction under this system is that the winger follows a few feet and stays connected ' +
    'but does not chase into the corner, so his route here ends in a stop rather than an ' +
    'arrowhead. ' +
    'The opposing defenceman skates down to the top of the circle, about 35 feet from the ' +
    'goal line, roughly halving his distance to the net without anybody touching him, and ' +
    'from there he can shoot or feed the slot. ' +
    'This, not the point shot, is the system’s real weakness — and the answer drawn here is ' +
    'a coaching choice rather than a rule of hockey: man-on-man and hybrid teams answer it ' +
    'differently, and the next diagram shows theirs. ' +
    'Find out your team’s version before you need it, and call the switch loudly, because a ' +
    'fourth attacker is now arriving low.',

  describe:
    'The attacking half of the rink, the defended net at the right. The opposition ' +
    'defenceman at the strong-side point has the puck and carries it down the ice to the top ' +
    'of the strong-side faceoff circle, about 35 feet from the goal line. Our strong-side ' +
    'winger, who started just goal-side of him at the point, moves about a dozen feet with ' +
    'him and stops, leaving a clear gap between himself and the defenceman he has released. ' +
    'The rest of our five have climbed a level with the puck: the centre in the high slot, ' +
    'one defenceman at the net front and the other in the low slot, the weak-side winger on ' +
    'the weak-side point. The opposition have a forward in the strong-side corner, one at the ' +
    'net front and one on the weak-side half-wall, and their other defenceman at the far ' +
    'point. Two numbered routes: one, the walk-down; two, the winger following and stopping.',

  players: [
    { id: 'D', team: 'opp', pos: 'D', at: WD_FROM, label: 'walks down from the point' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:left' },
    { id: 'F', team: 'opp', pos: 'F', at: 'corner:right' },
    { id: 'F', team: 'opp', pos: 'F', at: OPP_NETFRONT },
    { id: 'F', team: 'opp', pos: 'F', at: 'half-wall:left' },

    { id: 'G', pos: 'G', at: OUR_G },
    { id: 'D', pos: 'D', at: D_GOALMOUTH,        label: 'net front' },
    { id: 'D', pos: 'D', at: { at: 'slot', dy: 7 }, label: 'low slot' },
    { id: 'C', pos: 'F', at: 'high-slot',        label: 'high slot' },
    { id: 'W', pos: 'F', at: WD_WINGER,          label: 'follows a few feet, stops' },
    { id: 'W', pos: 'F', at: W_WEAK_PT,          label: 'weak-side point' },
  ],

  // Numbered because the order is the read: he walks, and only then does the
  // winger decide how far to go. Route 2 is a `stop` — the key's line ending in
  // two short bars — and not a skate, because "does not chase into the corner"
  // is the whole instruction and an arrowhead would say the opposite.
  numbered: true,
  routes: [
    { from: WD_FROM, to: WD_TO, kind: 'carry' },
    { from: WD_WINGER, to: { at: 'point:right', dx: 19, dy: -6 }, kind: 'stop' },
  ],

  puck: WD_PUCK,
};

// ---------------------------------------------------------------------------
// 5 · The walk-down, answered by man-on-man
// ---------------------------------------------------------------------------
// Same opposition, same puck, same walk-down. Only our five change — which is
// exactly the comparison the section draws in "How to Tell Which System Your
// Team Plays": "Watch what happens when an opposing defenceman walks down from
// the point. Nobody follows past a few feet — zone. Somebody tracks them all the
// way — man or hybrid."

const walkDownMan = {
  id: 'dz-walk-down-man',
  owner: 'content/systems/defensive_zone_coverage.md',
  half: true,
  width: 900,

  caption:
    'The same walk-down under man-on-man: the winger goes with him, all the way, wherever he ' +
    'goes, including into the corner — which is the sharpest practical difference from low ' +
    'zone collapse and one of the tells that separates them — though the first answer is to ask your coach. ' +
    'Everybody else is on a body too: both defencemen on the two most dangerous forwards low, ' +
    'the centre on the third, the other winger on the other defenceman. ' +
    'A hybrid produces very nearly this picture, and the difference is only the trigger — a ' +
    'hybrid winger plays the point by area and releases to man coverage as soon as his man ' +
    'crosses the team’s man-and-zone line, usually the faceoff dots, though some teams draw ' +
    'it at the hash marks or the top of the circles, so learn your team’s. ' +
    'What man coverage costs is a winger in a footrace with no help behind him, and five ' +
    'players standing wherever the other team put them at the moment you win the puck.',

  describe:
    'The attacking half of the rink, the defended net at the right, and the same walk-down as ' +
    'the previous diagram. The opposition defenceman carries the puck from the strong-side ' +
    'point down to the top of the strong-side faceoff circle. This time our strong-side ' +
    'winger tracks him the whole way, his route running a few feet goal-side of the carry and ' +
    'finishing just past it, so he ends between his man and the net. Our other four are each ' +
    'within a few feet of an ' +
    'opponent rather than in an area: one defenceman on the forward in the strong-side ' +
    'corner, the other on the forward at the net front, the centre on the forward on the ' +
    'weak-side half-wall, and the weak-side winger on the opposition defenceman at the far ' +
    'point. Two numbered routes: one, the walk-down; two, the winger going with him.',

  players: [
    { id: 'D', team: 'opp', pos: 'D', at: WD_FROM, label: 'walks down from the point' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:left' },
    { id: 'F', team: 'opp', pos: 'F', at: 'corner:right' },
    { id: 'F', team: 'opp', pos: 'F', at: OPP_NETFRONT },
    { id: 'F', team: 'opp', pos: 'F', at: 'half-wall:left' },

    { id: 'G', pos: 'G', at: OUR_G },
    // "Both defencemen normally take the two most dangerous forwards, typically
    // whoever is low and around the net" — here the corner and the net front.
    { id: 'D', pos: 'D', at: { at: 'corner:right', dy: -8 }, label: 'on the corner' },
    { id: 'D', pos: 'D', at: D_GOALMOUTH,                    label: 'on the net front' },
    // "The centre takes the third forward, often the one supporting on the wall or
    // in the slot" (:229 and :235, which read identically). BOTH locations, and the
    // quote here used to stop at "on the wall." with a full stop the document does
    // not have — a truncation that read as the section naming one place when it
    // names two. The picture draws the wall because the opposition third forward is
    // drawn on `half-wall:left`; that is ONE instance of the convention, not the
    // convention. If that opponent ever moves to the slot, this centre moves with him
    // and nothing here needs rewording.
    { id: 'C', pos: 'F', at: { at: 'half-wall:left', dy: 8 }, label: 'on the third forward' },
    { id: 'W', pos: 'F', at: WD_WINGER,                       label: 'goes with him' },
    { id: 'W', pos: 'F', at: W_WEAK_PT,                       label: 'on the other D' },
  ],

  numbered: true,
  routes: [
    { from: WD_FROM, to: WD_TO, kind: 'carry' },
    // Finishes goal-side of where the carry finishes, not on it — he is between
    // his man and the net, which is universal principle 2, and the route does not
    // terminate on anybody's glyph.
    { from: WD_WINGER, to: { at: 'top-of-circle:right', dx: 4, dy: -6 }, kind: 'skate' },
  ],

  puck: WD_PUCK,
};

// ---------------------------------------------------------------------------
// 6 · Box+1
// ---------------------------------------------------------------------------
// Drawn because the section spends a paragraph on a confusion a picture settles
// in one glance: "It is not a penalty-kill box. A penalty-kill box is four
// players with two high and two low. Box+1 is a five-man even-strength shape."
//
// The box's corners are the section's own words — "two low near the posts, two
// higher near the tops of the circles" — and the comparison table pins the high
// pair's DEPTH exactly: "The two high box players sit at the tops of the circles,
// roughly 29 feet below the blue line". The blue line is x = 25 and the top of the
// circle x = 54, so x = 54 IS the section's 29 feet. Nothing is rounded into place.
//
// WHAT THE SECTION DOES NOT FIX is how wide the two high players stand, and the
// first render exposed the cost of guessing: placed on the named `top-of-circle`
// positions they are 44 ft apart, and the shape drawn through the four of them
// came out as a kite, not "a box around the slot". Pulled 9 ft in toward the slot
// they read as the box the section names. That inset is an offset from a named
// position and not a claim, so the caption says the width is not fixed.
const BOX_HIGH_R = { at: 'top-of-circle:right', dy: -9 };    // (54, 13)
const BOX_HIGH_L = { at: 'top-of-circle:left',  dy: 9 };     // (54, -13)
// ⚠️ THE LOW PAIR IS SET BY THE COLLAPSING BOX, NOT BY THIS DIAGRAM. It is shared,
// because the collapsing box IS this box collapsed, and `dz-collapsing-box` draws
// the house around these two and captions them "all five inside the house". At the
// old (82, +/-7) the ANCHOR was 1.92 ft inside the house's goalpost-to-dot edge and
// the drawn TRIANGLE was not: its apex vertex fell 0.69 ft OUTSIDE that edge, so
// 1.09 ft of black ink and 2.09 ft of white halo were drawn past the boundary, on
// both, and the halo cut a gap in the dashed line at exactly the place the caption
// invites the reader to check. The module comment said "Every one of our five is
// inside the polygon"; that was true of the five anchors and false of the ink.
// The edge from the goalpost (89, 3) to the dot (69, 22) is 19x + 20y = 1751, and
// the support point of this triangle in that edge's normal is the apex, 2.61 ft out
// perpendicular. So a triangle centre clears with ink at 19x + 20y <= 1668 and with
// halo at <= 1651.4. (80, 6) gives 1640: 1.01 ft of ink clearance and 0.41 ft of
// halo clearance. Its base-right vertex (83.118, 4.2) also stays 1.60 ft clear of
// the crease arc, which the goalmouth datum's own $comment in rink.json warns about.
// Cost, stated: 9.49 ft from the post rather than 8.06, and a box 12 ft wide at the
// bottom rather than 14. The section says only "near the posts" and fixes no width.
const BOX_LOW_R = { at: 'goalmouth', dx: -5, dy: 6 };        // (80, 6)  near the post
const BOX_LOW_L = { at: 'goalmouth', dx: -5, dy: -6 };       // (80, -6)

const boxPlusOne = {
  id: 'dz-box-plus-one',
  owner: 'content/systems/defensive_zone_coverage.md',
  half: true,
  width: 900,

  caption:
    'Box+1, one of several defensive-zone systems rather than how defensive hockey is ' +
    'generally played — coaching material describes it as the standard introductory ' +
    'structure for young players and beginner adults, and nobody publishes a count of ' +
    'what teams actually run, so take that as coaching consensus rather than a measured ' +
    'fact. ' +
    'Four players form a box around the slot, two low near the posts and two at the tops of ' +
    'the circles about 29 feet below the blue line, and the fifth — the "+1" — is the only one ' +
    'who chases the puck. ' +
    'It is not a penalty-kill box: that is four players, two high and two low, and this is a ' +
    'five-man even-strength shape. Same word, different thing. ' +
    'The box’s depth is fixed, but how wide the two high players stand is not, so read ' +
    'the width drawn here as one reasonable version rather than a measurement. ' +
    'What it concedes is almost everything on the perimeter — the opposition defencemen here ' +
    'are unpressured, one chaser cannot pressure a good puck-moving team, and it buys ' +
    'structure at the cost of ever getting the puck back.',

  describe:
    'The attacking half of the rink, the defended net at the right. Four of our players stand ' +
    'at the corners of a shaded four-sided region drawn around the slot: two low, one either ' +
    'side of the crease near the posts, and two high and wide at the tops of the two faceoff ' +
    'circles. Our fifth player, marked plus one, is out of the box and up in the strong-side ' +
    'corner on the puck carrier; our goaltender is in the crease. The opposition have the ' +
    'carrier in the strong-side corner with the puck, a forward at the net front just outside ' +
    'the low box players, a forward on the weak-side half-wall, and both defencemen at the ' +
    'points with nobody near them. No routes are drawn.',

  // Drawn beneath the players, so the four box corners sit on the four glyphs.
  zones: [{
    points: [BOX_LOW_R, BOX_HIGH_R, BOX_HIGH_L, BOX_LOW_L],
    label: 'the box',
  }],

  players: [
    { id: 'F', team: 'opp', pos: 'F', at: 'corner:right',                 label: 'puck carrier' },
    // Outside the box, not inside it. At dy -8 he stood on the wrong side of the
    // box's own edge, so the picture showed the structure already beaten.
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'slot', dx: -3, dy: -11 } },
    { id: 'F', team: 'opp', pos: 'F', at: 'half-wall:left' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:right',                  label: 'unpressured' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:left' },

    { id: 'G',  pos: 'G', at: OUR_G },
    // Unlabelled: "near the posts" landed almost exactly equidistant between this
    // defenceman and the +1, which is a label that belongs to nobody. The caption
    // says where the low pair stand.
    { id: 'D',  pos: 'D', at: BOX_LOW_R },
    { id: 'D',  pos: 'D', at: BOX_LOW_L },
    { id: 'F',  pos: 'F', at: BOX_HIGH_R, label: '29 ft below the blue line' },
    { id: 'F',  pos: 'F', at: BOX_HIGH_L },
    // "the fifth player, the '+1', is the only one who chases the puck". Which of
    // the five it is changes with the puck — the section says the role "passes to
    // whoever is now nearest" — so the glyph carries the role, not a position.
    { id: '+1', pos: 'F', at: { at: 'corner:right', dy: -8 }, label: 'the only one chasing' },
  ],

  // ⚠️ WAS (80, 31): 3.606 ft from the carrier's centre against 3.275 ft of ink,
  // so the disc overlapped the FILLED circle and read as a lobe on the glyph.
  // (76.5, 35) was tried and COLLIDED WITH THE "puck carrier" LABEL, which
  // `placeLabels` had already put in that space — it does not know about the puck,
  // and the rendered text read "puck carrie" with the disc where the r should be.
  // (78, 30) is 5.657 ft from both the carrier and the chaser at (82, 26) — 1.28 ft
  // of white to each — clear of every label, and outside the box, which is the
  // whole point of the +1.
  puck: { at: 'corner:right', dx: -4, dy: -4 },
};

// ---------------------------------------------------------------------------
// 7 · The collapsing box
// ---------------------------------------------------------------------------
// The house is redrawn here on purpose: "all five of you are inside the house"
// is a claim about a region, and a reader cannot check it against a region that
// is not on the picture. ⚠️ SO THE TEST IS INK, NOT ANCHORS. Every one of our five
// is inside the polygon *as drawn* — outline and white halo both — and the working
// is on BOX_LOW_R and on the two flank forwards below. The anchors were inside all
// along; two of the glyphs were not, and this comment used to certify the anchors.

const collapsingBox = {
  id: 'dz-collapsing-box',
  owner: 'content/systems/defensive_zone_coverage.md',
  half: true,
  width: 900,

  caption:
    'The collapsing box — a state rather than a full system, and what low zone collapse turns ' +
    'into under maximum pressure: as the puck goes below the goal line the box shrinks toward ' +
    'the crease until all five defenders are inside the house, sticks in the passing lanes. ' +
    'It concedes the entire outside by design, including the points, where the two opposition ' +
    'defencemen here have nobody near them and a shot from them is the accepted cost. ' +
    'Teams use it protecting a lead late, defending six-on-five with the opposing goalie ' +
    'pulled, when structure has already gone, or against a team that is dangerous below the ' +
    'circles but generates nothing from its defencemen — not as a way to defend a whole game. ' +
    'With all five below the circles there is nobody high, so there is no breakout speed the ' +
    'moment you win the puck.',

  describe:
    'The attacking half of the rink, the defended net at the right, with the shaded house ' +
    'region drawn on the ice. All five of our players stand inside it: two defencemen low, ' +
    'one either side of the crease and about nine feet off the posts, and three forwards ' +
    'above them, one in the high slot and one either side of the slot. Our goaltender is in ' +
    'the crease. The opposition have the puck carrier behind the net, a forward in the ' +
    'strong-side corner, a forward on the weak-side half-wall, and both defencemen at the ' +
    'points — all five of them outside the shaded region. Only the carrier behind the net is ' +
    'near anybody, about fourteen feet from our low defenceman; the other four have nobody ' +
    'within twenty feet. No routes are drawn.',

  // The house is drawn but NOT labelled here. A zone label is written at the
  // polygon's centroid with no collision avoidance, and the centroid of the house
  // is the high slot — which in this diagram has one of our forwards standing on
  // it, so the first render printed "the house" straight through his glyph. The
  // caption and the player label carry the word instead, and `dz-the-house`
  // establishes the region.
  zones: [{ points: HOUSE }],

  players: [
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'behind-net', dy: 6 } },
    { id: 'F', team: 'opp', pos: 'F', at: 'corner:right' },
    { id: 'F', team: 'opp', pos: 'F', at: 'half-wall:left' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:right', label: 'unmarked at the point' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:left' },

    { id: 'G', pos: 'G', at: OUR_G },
    { id: 'D', pos: 'D', at: BOX_LOW_R },
    { id: 'D', pos: 'D', at: BOX_LOW_L },
    // (74, +/-10), not (76, +/-9). A circle's halo reaches 3.875, so the forward
    // constraint against the same edge is 19x + 20y <= 1644.1; (76, 9) gave 1624
    // and passed on its own. It failed against the LOW PAIR once they came inside
    // the house: at (80, 6) the triangle's path runs 3.16 ft from (76, 9), and two
    // glyphs need 3.675 ft of it before their ink touches. (74, 10) gives 5.39 —
    // 1.72 ft of white — and 1606 against the edge, so 1.38 ft of halo clearance.
    { id: 'F', pos: 'F', at: { at: 'slot', dx: -2, dy: 10 } },
    { id: 'F', pos: 'F', at: { at: 'slot', dx: -2, dy: -10 } },
    { id: 'F', pos: 'F', at: 'high-slot', label: 'all five inside the house' },
  ],

  puck: { at: 'behind-net', dx: -3.5, dy: 10 },
};

// ---------------------------------------------------------------------------
// 8 · The strong-side overload
// ---------------------------------------------------------------------------
// "The opposite adjustment: instead of collapsing toward the net, all five
// players shift to the puck side, cutting the ice in half." Every one of our
// five is drawn on the puck side of the centre lane — that is the shape, and if
// one of them drifted across it would stop being an overload.
//
// The counter is drawn because the section names it in the same breath: it "dies
// to one hard accurate cross-ice pass — the whole weak side is unoccupied by
// design". A picture of the shape without the counter would sell the system.

const overload = {
  id: 'dz-strong-side-overload',
  owner: 'content/systems/defensive_zone_coverage.md',
  half: true,
  width: 900,

  caption:
    'The strong-side overload — the opposite adjustment to the collapsing box. All five ' +
    'defenders shift to the puck side, cutting the ice in half and squeezing the carrier for ' +
    'time and space; it is aggressive and it generates turnovers. ' +
    'It dies to one hard, accurate cross-ice pass, drawn here as the dashed route, because ' +
    'the whole weak side is unoccupied by design — the attacker at the far post has nobody ' +
    'near him. ' +
    'Some teams use this as their base system and others as a situational squeeze when they ' +
    'need the puck back; nobody publishes a count of what teams actually run, so neither of ' +
    'those two uses is offered here as the commoner one. It is a coaching choice like every ' +
    'other defensive-zone system: find out whether yours plays it, and when.',

  describe:
    'The attacking half of the rink, the defended net at the right. The opposition puck ' +
    'carrier is on the strong-side half-wall with a teammate supporting in the strong-side ' +
    'corner, and a third forward is alone at the far post on the weak side of the net. All ' +
    'five of our players are on the puck side of the ice: a defenceman squeezing the carrier ' +
    'from below, a defenceman at the strong side of the net front, the centre inside the ' +
    'carrier, one winger above him cutting off the ice up the wall, and the other winger ' +
    'shifted across into the strong-side high slot. The entire weak side of the zone is ' +
    'empty. One route: a dashed cross-ice pass from the carrier to the attacker at the far ' +
    'post, crossing the slot in front of the crease.',

  players: [
    { id: 'F', team: 'opp', pos: 'F', at: 'half-wall:right', label: 'puck carrier' },
    { id: 'F', team: 'opp', pos: 'F', at: 'corner:right' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'goalmouth', dx: -2, dy: -8 },
      label: 'nobody on the far post' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:right' },
    { id: 'D', team: 'opp', pos: 'D', at: 'point:left' },

    { id: 'G', pos: 'G', at: OUR_G },
    // ⚠️ WAS (77, 33.5), WHICH IS INSIDE THE OPPOSITION FORWARD AT `corner:right`.
    // The nearest point of this triangle's path came 2.78 ft from that circle's
    // centre; the circle's ink alone is 3.275, so about 0.9 ft of two bodies were
    // drawn through each other and the halo took it to 2.1. A picture may not show
    // a defender standing inside an opponent, whatever the caption says.
    // (76, 30.5) is 5.16 ft from that forward's glyph — 1.49 ft of white — and
    // 8.27 ft goal-side and inside of the carrier on the half-wall, which is the
    // "squeezing the carrier from below" the `describe` names: between him and the
    // net, not out on the wall beside his support. It also keeps 2.08 ft off the
    // cross-ice pass line, which the old position had 3.36 ft of.
    { id: 'D', pos: 'D', at: { at: 'half-wall:right', dx: 7, dy: -8 } },
    { id: 'D', pos: 'D', at: { at: 'goalmouth', dx: -3, dy: 7 } },
    { id: 'C', pos: 'F', at: { at: 'faceoff-dot:right', dx: -4, dy: 2 } },
    { id: 'W', pos: 'F', at: { at: 'top-of-circle:right', dx: 2, dy: 8 } },
    { id: 'W', pos: 'F', at: { at: 'faceoff-dot:right', dx: -8, dy: -8 },
      label: 'all five on the puck side' },
  ],

  routes: [
    // Crosses y = 0 at about x = 76 — in front of the slot, not through the
    // crease or across the goal mouth — and stops about six feet short of the
    // far-post attacker rather than on his glyph.
    { from: { at: 'half-wall:right', dx: 1, dy: -5.5 }, to: { at: 'slot', dx: 1, dy: -6 },
      kind: 'pass' },
  ],

  // ⚠️ WAS (70, 34.5), 4.12 ft from the carrier's centre — 0.25 ft INSIDE his ink,
  // so the disc rendered as a bump welded to the bottom of his circle. The pass
  // starts on the puck and moves with it. (70, 33) is 5.59 ft out: 1.215 ft of
  // white to his ink, and 3.77 ft to the nearest point of our own D's triangle.
  puck: { at: 'half-wall:right', dx: 1, dy: -5.5 },
};

export default [
  theHouse,
  collapseCorner,
  collapseHighSlot,
  walkDownZone,
  walkDownMan,
  boxPlusOne,
  collapsingBox,
  overload,
];
