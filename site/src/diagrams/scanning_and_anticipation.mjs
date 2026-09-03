/**
 * Diagrams for content/hockey-iq/scanning_and_anticipation.md.
 *
 * The section is the source of truth. Every player below is one its prose places,
 * and where the prose hedges, the caption hedges.
 *
 * WHY THIS DOCUMENT IS A HARD CASE, AND WHAT THAT DECIDED.
 *
 * Its subject is *what a player can see and when*. Almost none of that is a mark on
 * a rink: a scan is a head turn, and this notation has no head, no facing and no
 * stick. Both published keys draw a player as a circle or a triangle with no front
 * and no back — see the header of site/scripts/lib/rink.mjs — so the two things this
 * document is actually about, WHERE SOMEBODY IS LOOKING and WHEN THEY LOOKED, cannot
 * be drawn at all. Inventing a sightline arrow or an eye glyph would be exactly the
 * defect that header records: a symbol whose meaning came from memory rather than
 * from a key.
 *
 * What IS drawable is the thing the looking is FOR — the arrangement of people and
 * ice that a look buys you, drawn at the instant before it matters. So every diagram
 * here is a frozen instant with the information already on the page, and each caption
 * says plainly that the head turn itself is not drawn. The list of what was
 * deliberately not attempted, and why, is at the foot of this file.
 *
 * PERSONNEL IS NOT SHAPE. The published key has no neutral glyph: a circle is a
 * forward and a triangle a defenceman, so every glyph is a personnel claim whether
 * the diagram wants to make one or not. This document names almost nobody — it says
 * "a teammate", "a forechecker", "you" — so where a shape had to be chosen the
 * caption discloses that it was chosen and that who takes the job is a team matter.
 *
 * ⚠️ COORDINATES ASSUME site/src/data/rink.json AS ON DISK IN THIS WORKING TREE:
 * half-wall (69, 38.5), faceoff-dot (69, 22), high-slot (69, 0), top-of-circle
 * (54, 22), corner (82, 34), net-front (84, 0), crease (86, 0), goal-line (89, 0),
 * behind-net (94, 0); goal.crease_width 8, crease_depth 6, crease_arc_radius 6,
 * goal.post_y 3; sheet 200 x 85 with a 28 ft corner radius. Every clearance stated
 * in a comment below dies if one of those moves. Glyph ink is rink.mjs's: a body
 * radius of 2.9 ft, 3.275 ft with half its 0.75 outline, and 3.875 ft counting the
 * 1.95 halo stroke.
 */

// ---------------------------------------------------------------------------
// Derived offsets shared by more than one diagram below.
// ---------------------------------------------------------------------------

// One circle radius, used to reach the circles' INNER edges from an anchor that
// already sits on a dot 22 ft off the middle. One arithmetic step from
// content/foundation/rink_map_and_glossary.md: the end-zone dots sit 22 ft either
// side of the middle with a 15 ft circle, so the inner edges are 7 ft out and the
// gap between the circles is 14 ft. Copied rather than imported, deliberately:
// rink_map_and_glossary.mjs owns this and three other modules restate it, which is
// exactly the condition scripts/check_zones.py exists to police. The polygon below
// must therefore be byte-identical to the glossary's `the-high-slot`.
const CIRCLE_RADIUS = 15;

// "the high slot (the area from the faceoff dots up to the top of the circles)" —
// the section's own parenthesis, at scanning_and_anticipation.md:190 on 2 September
// 2026 and better found by searching for the phrase, which is the glossary's
// definition word for word. The polygon is the one
// rink_map_and_glossary.mjs draws for `the-high-slot`, corner for corner, so the
// corpus cannot end up with two high slots.
const HIGH_SLOT = {
  points: [
    { at: 'top-of-circle:right', dy: -CIRCLE_RADIUS },
    { at: 'faceoff-dot:right', dy: -CIRCLE_RADIUS },
    { at: 'faceoff-dot:left', dy: CIRCLE_RADIUS },
    { at: 'top-of-circle:left', dy: CIRCLE_RADIUS },
  ],
  // DELIBERATELY UNLABELLED, unlike the glossary's own copy of it. A zone label is
  // drawn at the polygon's centroid and is invisible to the label placer, so it
  // cannot be moved and nothing is moved out of its way. The centroid here is
  // (61.5, 0) and "the high slot" is 13 characters, which at 3.2 ft type reaches
  // about 11.6 ft either side — a box covering nearly the whole region. This
  // diagram puts a player inside the region, so the label would be drawn through
  // him. The band is named in the caption and in `describe` instead. Same reasoning
  // and same outcome as the unlabelled lane in playing_without_the_puck.mjs.
};

/* ------------------------------------------------------------------------- *
 * 1 — Before you receive on the wall: everything was there to be seen.
 *
 * Section: "The central idea: vision is a habit, not a gift", the Player A / Player
 * B worked example, with "When to scan" item 4 on the same reception. Line numbers
 * below are as of 2 September 2026; search the quoted phrase rather than the line.
 *
 * The section fixes every element of this picture:
 *   "two players receiving the same pass on the half-wall — the boards area level
 *    with the faceoff dot"                                             -> the receiver
 *   "the puck was still being retrieved behind the net"                -> the retrieval
 *   "a forechecker is two feet away"                                   -> the pressure
 *   "moved it to the support they had seen three seconds earlier", and
 *   "the support option — the teammate who is close enough to give the
 *    puck to under pressure, usually behind or beside you rather than
 *    ahead" (:187)                                                     -> the support
 *
 * ONE INSTANT, AND THAT IS THE WHOLE POINT. The picture is the second or two while
 * the puck is in the air — "the highest-value time in hockey" (:11). The outlet pass
 * that follows is NOT drawn: it happens after this instant, and two passes on one
 * page would read as one play. What the reader is meant to see is that every fact
 * needed to choose that outlet is already on the page before the puck lands.
 *
 * WHAT IS NOT FIXED, and is hedged in the caption rather than asserted: which side
 * the forechecker arrives from. The section makes that a variable in terms — "which
 * side matters more than the distance" (:180) — so drawing it up the wall is one
 * instance, and the caption says so.
 * ------------------------------------------------------------------------- */

// Drawn in YOUR OWN end: the net at the right is yours, the forecheck is theirs.
const D1_G = 'crease';                                        // (86, 0)

// The teammate retrieving behind the net. `behind-net` itself is (94, 0), directly
// behind the goal, where the frame hides the glyph from the front of the net — the
// same objection game_management.mjs records. Offset off the strong-side post
// instead, and offset SIDEWAYS rather than back, because this glyph is a TRIANGLE
// and a triangle is the bigger mark: its apex is 3.6 ft from the centroid, 4.0 with
// half its 0.8 round-joined stroke, against a circle's 2.9 and 3.275. The goal frame
// runs x 89..92.33, y -3..+3; the triangle's vertices at (94, 8) are (94, 11.6),
// (97.12, 6.2) and (90.88, 6.2), so the lowest of them clears the frame's top edge by
// 3.2 ft. The end boards are straight at this y — the corner arc only bites beyond
// |y| = 14.5 — with an inner ink edge at x = 99.7, so the right-hand vertex clears
// the wall by 2.58 ft of ice, 2.18 after its own stroke and 1.2 after the halo.
// ⚠️ (95, 6) was tried first and put that lower vertex 1.28 ft from the goal frame's
// upper corner. Visible in the render, not merely arithmetic.
const D1_RETRIEVE = { at: 'behind-net', dy: 8 };              // (94, 8)

// You, on the half-wall. rink.json's own note on this position is "the boards level
// with the faceoff dot", which is the section's parenthesis at :35.
const D1_YOU = 'half-wall:right';                             // (69, 38.5)

// The support option: "behind or beside you rather than ahead" (:187). Behind, in
// this end, means deeper toward your own goal line. 23.9 ft from you, 18.4 from your
// goaltender and 20.6 from the retriever, so no two glyphs read as one.
const D1_SUPPORT = { at: 'faceoff-dot:right', dx: 8, dy: -6 };  // (77, 16)

// The forechecker, closing down the wall from up ice while the puck is in the air.
// 42.5 - 36.5 = 6 ft of board clearance at the start, which is more than the 3.875 ft
// halo.
const D1_PRESSURE_FROM = { at: 'half-wall:right', dx: -19, dy: -2 };  // (50, 36.5)
// ⚠️ THE ROUTE STOPS 7.02 FT SHORT OF THE RECEIVER AND ENDS IN BARS, NOT AN
// ARROWHEAD. `pressure` is `line: 'plain', end: 'bars2'` — the mark that says arrive
// and contain rather than continue through — and the arrival invariant in
// site/scripts/lib/rink.mjs forbids an arrowhead within 9 ft of an opposing skater
// who lies ahead of the tip (2.9 glyph + 3.15 arrowhead + 2.9 glyph). At 7.02 ft an
// arrow-ended kind would be illegal here; a bar-ended one is the correct symbol
// anyway, because the section's forechecker arrives at a player standing against the
// boards and what happens in the last two feet is not this document's subject.
const D1_PRESSURE_TO = { at: 'half-wall:right', dx: -7, dy: -1 };    // (62, 37.5)

// The puck in flight, 40% of the way along the pass from (94, 8) to (69, 38.5):
// (94 - 0.4 x 25, 8 + 0.4 x 30.5) = (84, 20.2). Anchored on the goal line because
// that is the named position it is nearest to. 8.2 ft from the support glyph, 20.3 ft
// from the goaltender, and far outside the crease, which reaches x 83 on the middle
// and |y| 4 at its widest.
const D1_PUCK = { at: 'goal-line', dx: -5, dy: 20.2 };        // (84, 20.2)

const wallReception = {
  id: 'scan-before-a-wall-reception',
  owner: 'content/hockey-iq/scanning_and_anticipation.md',
  half: true,
  width: 900,

  caption:
    'Your own end, your net at the right, drawn as a single instant: the puck is in the air on its ' +
    'way to you on the half-wall — the boards area level with the faceoff dot — a teammate has just ' +
    'moved it out from behind your net, and a forechecker is already closing. Everything in the ' +
    'picture was there to be seen before the puck was even passed, which is the point of it. A ' +
    'player who looked over one shoulder while the puck was still being retrieved, looked again as ' +
    'the passer’s head came up, and took a last glance a heartbeat before it arrived already knows ' +
    'about the forechecker and about the support behind them, and can receive the puck turning away ' +
    'from the pressure. A player who watches the puck the whole way finds all of it out on arrival, ' +
    'with the puck on their stick and a forechecker on top of them. The looking itself is not drawn ' +
    'and cannot be: a scan is a head turn, and this notation has no head, no facing and no stick. ' +
    'Which side the pressure comes from is not fixed — it is drawn ' +
    'coming down the wall here and could as easily come from the middle, and which it is changes ' +
    'your play, so check both shoulders and not just the one you were planning to pass to. The last ' +
    'look is always back at the puck. Who takes each of these jobs is not part of the read: a shape ' +
    'had to be chosen for every player and the notation has no neutral one, so read the retrieval ' +
    'as a job rather than as a position. ' +
    // SAFETY, LAST. The owner's own override, scanning_and_anticipation.md:149 and Key Takeaway 11
    // at :583, which says in terms that it outranks every tactical point beside it. A player
    // standing on the wall with a checker arriving is exactly the shape that override exists for,
    // so the caption cannot end without it. (Whether any other diagram in the corpus draws that
    // shape has NOT been checked here, and no claim about that is made.)
    '⚠️ Looking does not protect you; position does. A reception on the wall is a reception into ' +
    'head-on contact with the boards. Never take that contact with your back to the boards, and ' +
    'never duck. Get your skates parallel to the wall and take it on your forearm and hip, head up ' +
    'and chin off your chest — not on the point of your shoulder. If you are already facing the ' +
    'wall and cannot turn, get your stick and gloves up and spread out on the glass, with no head ' +
    'contact at all.',

  describe:
    'Your own end zone, your net at the right with your goaltender in the crease. A teammate stands ' +
    'behind the net, off the near post, and a dashed pass line runs from him up to the right ' +
    'half-wall, level with the faceoff dot, where you stand waiting to receive; the puck is drawn ' +
    'on that line, about forty per cent of the way across, so the pass is in flight. A second ' +
    'teammate stands inside and below you, between you and your own net, as the support option. An ' +
    'opposition forward is up ice on the same wall with a route running down the boards toward you ' +
    'that stops about seven feet short and ends in two short bars rather than an arrowhead, meaning ' +
    'he arrives and contains rather than skating through. Nobody else is drawn, and no head turn is ' +
    'drawn, because the notation has no symbol for one.',

  players: [
    { id: 'G', pos: 'G', at: D1_G },
    // A triangle, because a defenceman retrieving behind his own net is the
    // commonest version of this — but the section says only "a teammate", so the
    // caption discloses that the shape was chosen rather than stated.
    { id: 'D', pos: 'D', at: D1_RETRIEVE, label: 'retrieving' },
    { id: 'R', pos: 'F', at: D1_YOU, label: 'you, receiving' },
    { id: 'S', pos: 'F', at: D1_SUPPORT, label: 'support, already seen' },
    { id: 'F', team: 'opp', pos: 'F', at: D1_PRESSURE_FROM, label: 'closing' },
  ],

  routes: [
    // The pass, in flight. It passes 8.1 ft clear of the support glyph, measured on
    // the chord: the line from (94, 8) to (69, 38.5) is 39.4 ft long and the
    // perpendicular from (77, 16) to it is 8.1 ft. Its arrowhead is drawn at the
    // receiver's anchor and therefore sits under his glyph, which is what every pass
    // to a player in this corpus does; the route is 39 ft long, so nothing about the
    // short-route case in rink.mjs applies to it.
    { from: D1_RETRIEVE, to: D1_YOU, kind: 'pass' },
    // Bar-ended. See D1_PRESSURE_TO for the arithmetic and the rule.
    { from: D1_PRESSURE_FROM, to: D1_PRESSURE_TO, kind: 'pressure' },
  ],

  puck: D1_PUCK,
};

/* ------------------------------------------------------------------------- *
 * 2 — Who scores if the puck goes to the net right now.
 *
 * Section: "What to look for, in priority order", item 3 (:190) — "In your own end,
 * the question is: if the puck goes to the net right now, who scores? Usually that is
 * a body at the net front — the immediate area in the goalmouth — or a player
 * sneaking into the high slot (the area from the faceoff dots up to the top of the
 * circles)." Its Common Mistakes entry names the goal that follows from not asking:
 * "The 'I didn't see him' goal. The back-door tap-in, conceded because four players
 * watched a puck battle in the corner for three seconds... every time the puck goes
 * into a corner in your own end, check the net front." (:518)
 *
 * WHY THE COVERAGE IS NOT DRAWN. The section makes it explicitly system-dependent —
 * a collapse alternates your eyes between the puck and the nearest danger, a strict
 * man-to-man does not, a hybrid changes with where you are standing, and it tells the
 * reader to find out which their team plays. Drawing four own skaters would answer a
 * question the section deliberately leaves open, and a picture is the most
 * absolute-looking thing on a page. So they are absent and the caption says why —
 * the same treatment loose-puck-who-goes gives the two skaters it does not draw.
 *
 * A CONSEQUENCE WORTH STATING: with no coverage drawn, the two opponents read as
 * unmarked. That is the Common Mistakes entry, not an invention — but the caption
 * says the picture asks the question rather than answering it, so a reader does not
 * take "nobody is covering the back door" as the normal state of a defensive zone.
 * ------------------------------------------------------------------------- */

const D2_G = 'crease';                                        // (86, 0)

// The battle in the corner: 9.9 ft between the two glyphs, with the puck between
// them and 4.95 ft from each. Both figures clear the 4.0 ft a
// 2.9 ft body and a 1.1 ft puck dot need if the puck is not to be drawn inside a
// player. ⚠️ The first version had them 4.6 ft from the puck, which renders as a dot
// stuck to a glyph's edge. The opposition glyph sits at x 83.5, where the boards arc
// (centre (72, 14.5), radius 28) reaches y 40.03 and its ink edge 39.73: 4.23 ft of
// clearance, so even the 3.875 ft halo does not touch the wall.
const D2_OURS = { at: 'corner:right', dx: -5.5, dy: -5.5 };   // (76.5, 28.5)
const D2_THEIRS = { at: 'corner:right', dx: 1.5, dy: 1.5 };   // (83.5, 35.5)
const D2_PUCK = { at: 'corner:right', dx: -2, dy: -2 };       // (80, 32)

// The back door — the weak-side net front, which is the glossary's own name for it.
// ⚠️ CREASE ARITHMETIC, because this is the glyph nearest the paint. The crease is
// the region within 6 ft of (88.972, 0) bounded by y = +/-4 back to x = 84.5 and the
// goal line at x = 89. From (82, -7) the distance to the arc's centre is
// sqrt(6.972^2 + 7^2) = 9.88 ft, so the nearest crease boundary is 3.88 ft away:
// 0.98 ft of daylight for the 2.9 ft body, 0.6 ft for the 3.275 ft outlined body,
// and 0.005 ft for the 3.875 ft halo — half a pixel at the roughly 9 px per foot
// this file renders at. The same clearance game_management.mjs settled on, for the
// same reason: the corpus's own instruction is that the net front is at the edge of
// the blue paint and not inside it. 8.06 ft from the goaltender's glyph.
const D2_BACKDOOR = { at: 'net-front', dx: -2, dy: -7 };      // (82, -7)

// "a player sneaking into the high slot". Inside the shaded region, which spans
// x 54..69 and |y| <= 7, and 18.7 ft from the back-door player.
const D2_HIGH = { at: 'high-slot', dx: -5, dy: -2 };          // (64, -2)

const whoScoresNow = {
  id: 'scan-the-danger-in-your-own-end',
  owner: 'content/hockey-iq/scanning_and_anticipation.md',
  half: true,
  width: 900,

  caption:
    'Your own end, your net at the right, with the puck in the corner and two players in a battle ' +
    'for it. The question this picture asks is not where the puck is — everybody can see that — but ' +
    'who scores if it comes out right now, and there are two usual answers, both drawn: a body at ' +
    'the net front, the immediate area in the goalmouth, and a player sneaking into the high slot, ' +
    'which is the shaded band, the ice between the two faceoff circles running from the level of ' +
    'the faceoff dots up to the top of them. The weak-side net front has its own name, the back ' +
    'door, and the tap-in conceded there is not bad luck: it is what happens when four players ' +
    'watch a puck battle in the corner for three seconds. The rule of thumb the picture exists for ' +
    'is that every time the puck goes into a corner in your own end, you check the net front. Your ' +
    'other four skaters are deliberately not drawn, so the picture asks the question rather than ' +
    'answering it — where they stand, and therefore whether either of these opponents is really ' +
    'unmarked, depends on the coverage your team plays. Under the low zone collapse this corpus ' +
    'assumes as its default, your eyes alternate between the puck and the most dangerous body near ' +
    'you and your man is whoever is currently in your area; under a strict man-to-man your ' +
    'assignment takes far more of your attention and the puck takes less; under a hybrid it depends ' +
    'on where you are standing. Find out which one your team plays, because it decides where your ' +
    'eyes belong. Neither the high slot nor the net front is painted on a rink: the circles and the ' +
    'crease that fix their edges are, and the regions themselves are names for pieces of ice.',

  describe:
    'Your own end zone, your net at the right with your goaltender in the crease. A loose puck sits ' +
    'in the right corner with two players contesting it, one of yours below it and an opposition ' +
    'player above it nearer the boards. Two further opposition players are drawn and no more of ' +
    'yours: one just outside the crease on the far side of the net, at the back door, and one ' +
    'inside a shaded band in the middle of the zone. That band runs between the inner edges of the ' +
    'two faceoff circles, from the level of the faceoff dots up to the top of the circles: it is ' +
    'the high slot. No routes are drawn — nobody moves in this picture — and your other four ' +
    'skaters are not drawn at all.',

  zones: [HIGH_SLOT],

  players: [
    { id: 'G', pos: 'G', at: D2_G },
    // Generic F on both sides of the battle: the section gives the players in the
    // corner no role and no position, only a place.
    { id: 'F', pos: 'F', at: D2_OURS, label: 'the puck battle' },
    { id: 'F', team: 'opp', pos: 'F', at: D2_THEIRS },
    { id: 'F', team: 'opp', pos: 'F', at: D2_BACKDOOR, label: 'the back door' },
    { id: 'F', team: 'opp', pos: 'F', at: D2_HIGH, label: 'sneaking in high' },
  ],

  puck: D2_PUCK,
};

/* ------------------------------------------------------------------------- *
 * 3 and 4 — Anticipation and guessing: the same read, two positions.
 *
 * Section: "Anticipation versus guessing" (:433-470). "An anticipating player moves
 * somewhere that is defensible either way — they have shaded toward the likely pass
 * while remaining between the puck and the net. A guessing player has committed to a
 * position that is worthless unless the guess lands." The test is the blockquote at
 * :450 — "Would my position still be useful if I turn out to be wrong?"
 *
 * A PAIR, BECAUSE ONE FRAME CANNOT MAKE A COMPARISON. The section's own opening
 * sentence is that the two "look identical when they work and identical when they
 * fail", so the whole teaching is that they differ in POSITION and not in outcome.
 * That is a comparison, and a comparison needs two pictures. The two frames are
 * identical in every element except where you stand — same carrier, same option,
 * same goaltender, same shaded band — so the difference on the page is the only
 * thing the reader has to look at.
 *
 * THE BAND. "Between the puck and the net" is the section's phrase and the band is
 * that phrase drawn: the ice from the puck to the front of your own crease. It is
 * UNLABELLED, because a zone label is drawn at the polygon's centroid with no
 * collision handling and frame three puts a player within a few feet of it. The
 * caption and `describe` name it instead.
 *
 * WHY THE DEFENSIVE ZONE. The section says jumping is worth it when "the puck is in
 * the neutral zone or the offensive zone, where being wrong costs you a rush against
 * rather than a goal against", and that it is how you concede a breakaway when "you
 * are in your own defensive zone, especially in the middle of it, where a miss is a
 * point-blank chance". Drawing the own-zone case is drawing the one the section
 * condemns, and the caption of frame four says in terms that the same movement in the
 * neutral or offensive zone is a play the section allows.
 *
 * WHAT THE PAIR CANNOT SHOW, said in the captions rather than left silent: the CUE.
 * The section's first condition for a legitimate jump is "an actual cue — you read
 * the passer's shoulders, or their blade is closed and pointed at that lane, or their
 * eyes have already been there". Shoulders, blade angle and eyes are all facing, and
 * this notation has no facing. Nor is there a stick, so "reaching rather than
 * skating" — the section's physical signature of a guess — cannot be drawn either.
 * ------------------------------------------------------------------------- */

const D34_G = 'crease';                                       // (86, 0)

// The opposition carrier, inside the right faceoff circle and above the dot: 9.8 ft
// from the circle's centre, so unambiguously in the circle rather than on its edge.
const D34_CARRIER = { at: 'top-of-circle:right', dx: 6, dy: -4 };  // (60, 18)
// The puck, 4.48 ft from the carrier's anchor along the line to the net — outside
// his 2.9 ft body plus the puck's own 1.1 ft radius, and in the gap between his glyph
// and the near end of the band. At 3.2 ft, which is where it started, the dot renders
// as a bump on the side of his circle.
const D34_PUCK = { at: 'top-of-circle:right', dx: 9.5, dy: -6.8 }; // (63.5, 15.2)

// His option, on the far wall: the pass a player would read a cue for and think
// about jumping. On the opposite half-wall, which puts the seam it would travel
// nearly at right angles to the line from the puck to your net — the geometry that
// makes the two frames tell each other apart. With the option drawn near the net
// instead, the passing lane and the shooting lane lie almost on top of one another
// and both frames put you in nearly the same place, which was tried first.
const D34_OPTION = 'half-wall:left';                          // (69, -38.5)

// THE BAND: the ice between the puck and your own net. Its axis runs from the
// carrier to the front edge of the crease, (89 - 6, 0) = (83, 0) — 6 ft being
// goal.crease_depth. It starts 6 ft short of the carrier's glyph so it reads as the
// space in front of him rather than as something attached to him, and finishes flush
// across the front of the crease at |y| = 3.5, inside the crease's own 8 ft width.
//
// The two near corners: the axis from (60, 18) to (83, 0) has unit direction
// (0.788, -0.617) and unit normal (0.617, 0.788), so the point 6 ft along is
// (64.73, 14.30) and the corners are that point +/- 3.5 x the normal — the same
// half-width the band has where it meets the crease, so the corridor is a uniform
// 7 ft wide. It is barely wider than the 5.8 ft glyph standing in it, which is a
// limit of the scale rather than a claim: the section gives no width and none is
// invented, so the caption says the band is a piece of ice and not a marking.
// ⚠️ 6 ft, NOT 4.5. Zones are painted first and player halos last, so a glyph within
// 3.875 ft of the polygon punches a white bite out of it: at 4.5 the carrier's halo
// cut a notch in the band's near end that rendered as an arrowhead pointing back at
// him — a mark this notation does not have, in the one picture whose whole subject is
// where a player is standing. Found by rendering it, not by arithmetic.
const D34_BAND = {
  points: [
    { at: 'top-of-circle:right', dx: 12.89, dy: -4.94 },  // (66.89, 17.06)
    { at: 'goal-line', dx: -6, dy: 3.5 },                 // (83, 3.5)
    { at: 'goal-line', dx: -6, dy: -3.5 },                // (83, -3.5)
    { at: 'top-of-circle:right', dx: 8.57, dy: -10.46 },  // (62.57, 11.54)
  ],
  // Unlabelled: the centroid is about (73.25, 7.6), which is within a few feet of
  // where frame three stands you, and a zone label cannot be moved out of the way.
};

// FRAME 3. Inside the band, 1.83 ft off its centre-line on the side nearer the
// option, against a half-width of 3.5 — "shaded toward the likely pass while
// remaining between the puck and the net". ⚠️ The glyph is 5.8 ft across and the band
// 7 ft wide, so a displacement of under 2 ft is not a visible amount of shading: the
// caption therefore claims only that you are standing in the band on the side nearer
// his option, which is what the picture actually shows. 18 ft from the carrier,
// 15.2 from the option, 14.1 from your own goaltender.
const D34_YOU_NETSIDE = { at: 'high-slot', dx: 4, dy: 5.5 };  // (73, 5.5)

// FRAME 4. The midpoint of the seam from the carrier to his option: 28.6 ft from
// each of them, and 19.4 ft off the band's centre-line, so the band is visibly
// empty. Inside the left faceoff circle, 12.6 ft from its centre.
const D34_YOU_JUMPED = { at: 'high-slot', dx: -4.5, dy: -10.25 };  // (64.5, -10.25)

// ⚠️ NO ROUTE IS DRAWN IN FRAME FOUR, and the reason is worth keeping because the
// route was drawn first and rendered wrong. A `skate` route from the frame-three
// position to this one is legal — its tip is 28.6 ft from the nearest opposing
// skater ahead of it, far outside the 9 ft at which an arrowhead may not be drawn,
// and its terminal tangent runs 26.7 degrees off the bearing to that player, a miss
// of 28.6 x sin 26.7 = 12.8 ft against a 2.9 ft glyph. It is still the wrong mark:
// the route ends AT the player's own final position, so the arrowhead is drawn
// underneath his glyph and the picture shows a bare line with no head on it. In every
// module read while writing this one — playing_without_the_puck.mjs, breakouts.mjs,
// defending_the_rush.mjs, game_management.mjs — the glyph sits at the START of its
// route and the arrow runs away from it; no wider claim about the corpus is made here.
// A frame that shows a player HAVING moved therefore shows him standing still, which
// is what drive-the-net-after in playing_without_the_puck.mjs does for the same
// reason. The pair is a comparison of two positions, and two static frames is what a
// comparison of positions needs.

const anticipation = {
  id: 'lane-jump-anticipation',
  owner: 'content/hockey-iq/scanning_and_anticipation.md',
  half: true,
  width: 900,

  caption:
    'The first of two frames of the same moment, showing two different choices — this one is the ' +
    'anticipating position, and the next one is the guess. Your own end, your net at the right: an ' +
    'opponent has the puck inside a faceoff circle on one side of your zone, a teammate of his is ' +
    'away across the ice on the far wall, and you have read something that says the pass is ' +
    'coming. Here you are ' +
    'standing inside the shaded band — the ice between the puck and your own net — and on the side ' +
    'of it nearer his option — shaded toward the likely pass, still between the puck and the net. If the pass comes you are already moving to it. If it never comes, you are still ' +
    'in front of your own net and still doing a job — and that, not whether you turn out to be ' +
    'right, is the test that tells them apart: would my position still be useful if I turn out to ' +
    'be ' +
    'wrong? Anticipation is acting on information and guessing is acting on hope, and they look ' +
    'identical when they work. What the picture cannot show you is the cue itself. Reading a ' +
    'passer means reading his shoulders, his blade angle and where his eyes have already been, and ' +
    'this notation has no facing and no stick, so the information you are acting on is not on the ' +
    'page. Your other four skaters are not drawn, and where they are matters, because one of the ' +
    'conditions for a jump like this is having support behind you. The band is a name for a piece ' +
    'of ice, not something painted on a rink, and you are drawn as a forward because a shape had to ' +
    'be chosen — the notation has no neutral one, and who is standing here depends on the coverage ' +
    'your team plays.',

  describe:
    'Your own end zone, your net at the right with your goaltender in the crease, and no routes ' +
    'drawn. An opposition forward has the puck inside the right faceoff circle, above the dot. A ' +
    'second opposition forward stands far across the ice on the left half-wall, level with the far ' +
    'faceoff dot. A shaded band runs from just in front of the puck carrier down to the front edge ' +
    'of the crease, narrow at the carrier’s end and about seven feet wide where it meets the ' +
    'crease: it is the ice between the puck and your net. You are drawn as a forward standing ' +
    'inside that band, about eighteen feet from the carrier and offset within the band toward the ' +
    'far-side opponent. No routes are drawn in either frame of this pair: the whole comparison is ' +
    'where you are standing. Your other four skaters are not drawn.',

  zones: [D34_BAND],

  players: [
    { id: 'G', pos: 'G', at: D34_G },
    // ⚠️ DELIBERATELY UNLABELLED, and this is a rendering finding rather than a
    // preference. A player label is drawn with a white paint-order stroke, and the
    // placer put "the carrier" across the near corner of the band — the white halo
    // on the text bit a step out of the shading that read as an arrowhead pointing
    // back at him. He is identified by the puck drawn beside him, by `describe` and
    // by the caption. Found by rendering the picture; nothing in the source says it.
    { id: 'P', team: 'opp', pos: 'F', at: D34_CARRIER },
    { id: 'A', team: 'opp', pos: 'F', at: D34_OPTION, label: 'his option' },
    // A circle. See the caption: the section names nobody, and the shape is a
    // choice the notation forces rather than a claim the prose makes.
    { id: 'F', pos: 'F', at: D34_YOU_NETSIDE, label: 'you, still net-side' },
  ],

  puck: D34_PUCK,
};

const guess = {
  id: 'lane-jump-guess',
  owner: 'content/hockey-iq/scanning_and_anticipation.md',
  half: true,
  width: 900,

  caption:
    'The second of the two frames: the same moment, the same read, and the other choice. You have ' +
    'left the ice between the puck and your own net — the shaded band, which now has nobody in it — ' +
    'and committed to the passing lane, standing out between the two of them. If the pass comes, you ' +
    'have it. If it does not come, or if it comes and you miss it by ' +
    'a foot, the carrier has a clean lane at your goaltender and there is nobody in it. That is ' +
    'a position that is worthless unless the guess lands. ' +
    'The movement itself is not the mistake and this is not an instruction never to jump: it is the ' +
    'right play when you have a real cue, when there is support behind you covering the ice you ' +
    'are vacating, and when the puck is in the neutral or the offensive zone, ' +
    'where being wrong costs a rush against rather than a goal against. What makes it a gamble here ' +
    'is the place. This is your own defensive zone, and in the middle of your own zone a miss is a ' +
    'point-blank chance rather than an inconvenience, which is why the read has to be well better ' +
    'than even before it is worth taking and considerably better than that in your own end. Your ' +
    'other four skaters are not drawn, and if you are the last player back there is no version of ' +
    'this jump worth making at all. Two things the picture ' +
    'cannot show: the cue, because reading a passer means reading shoulders, blade angle and eyes ' +
    'and this notation has no facing; and reaching for the lane with your stick instead of getting ' +
    'there with your feet, which is the physical signature of a guess and which the notation has no ' +
    'stick to draw.',

  describe:
    'The same end zone and the same instant as the previous diagram, with everything unchanged ' +
    'except where you are. The opposition carrier is still inside the right faceoff circle with the ' +
    'puck, his teammate is still on the left half-wall, your goaltender is still in the crease, and ' +
    'the shaded band still runs from the puck down to the front of the crease — but the band is now ' +
    'empty. You are drawn out in the left faceoff circle, roughly halfway along the line between ' +
    'the two opponents and about twenty-eight feet from each of them, where in the previous frame ' +
    'you stood inside the band. No routes are drawn in either frame: the pair is a comparison of ' +
    'two positions. Your other four skaters are not drawn.',

  zones: [D34_BAND],

  players: [
    { id: 'G', pos: 'G', at: D34_G },
    { id: 'P', team: 'opp', pos: 'F', at: D34_CARRIER },
    { id: 'A', team: 'opp', pos: 'F', at: D34_OPTION, label: 'his option' },
    { id: 'F', pos: 'F', at: D34_YOU_JUMPED, label: 'you, gone to the lane' },
  ],

  puck: D34_PUCK,
};

/* ------------------------------------------------------------------------- *
 * DELIBERATELY NOT DRAWN, and why. Most of this document is in this list, which is
 * the honest answer for a document about perception.
 *
 * - THE SCAN ITSELF. "A head turn, not an eye flick and not a chin dip — your chin
 *   should pass over your shoulder", "check both shoulders", "the last look is always
 *   back at the puck". Every one of those is a claim about a head, and the published
 *   key draws a player as a circle or a triangle with no facing. There is no symbol
 *   for a look, and inventing one is the defect rink.mjs's header records at length.
 *   The three diagrams above draw what a look BUYS instead, and say so.
 *
 * - READING BODIES. The chest and hips of a puck carrier, a passer's front shoulder,
 *   an open or closed blade, a shooter's hands and weight transfer, a defenceman's
 *   hips opened to one side. All of Part 2's cues are facing, limb position or
 *   weight, and none of them is a position on the ice. Same reason: no facing, no
 *   stick, no body.
 *
 * - THE BACKCHECK LOOK ("look over your inside shoulder... count opponents, not
 *   pucks"). The drawable half of this — an attacker driving the middle without the
 *   puck while everyone watches the puck — is already drawn, as
 *   `rush-backcheck-lanes` in defending_the_rush.mjs, whose caption says in terms
 *   that the middle-lane driver is "missed because they do not have the puck and eyes
 *   go to the puck". Redrawing it here would restate an existing picture and add a
 *   second place a correction has to reach. The undrawable half is the head turn.
 *
 * - THE GAP READS (a tight gap closing hard, a soft gap conceding the line). These
 *   are distances, and a diagram is a distance — but this document hands the whole
 *   scale to Defending the Rush in terms, saying its own two figures are "coaching
 *   convention rather than anything measured". Drawing them here would pin numbers
 *   this document explicitly declines to own.
 *
 * - THE 2-1-2 FORECHECK READ and the escape behind the net. Genuinely spatial, and
 *   already drawn twice: forechecking_systems.mjs owns the shape and breakouts.mjs
 *   owns the reverse and the wheel, and this section points the reader at both.
 *
 * - WHERE A RIM OR A REBOUND ENDS UP. The section's whole claim is that it VARIES —
 *   "rinks differ", "learn your home rink deliberately", and the rebound heuristic is
 *   labelled coaching craft rather than a measured finding. A diagram showing where a
 *   rim arrives would assert the one thing the prose refuses to.
 *
 * - THE STOPPAGE SCAN, the research, the priority ORDER as an order, the pre-scan,
 *   pattern recognition, the training methods. None of them is spatial.
 * ------------------------------------------------------------------------- */

export default [wallReception, whoScoresNow, anticipation, guess];
