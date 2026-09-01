/**
 * Diagrams for content/systems/zone_entries.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * TWO CONVENTIONS THIS FILE COMMITS TO, BOTH DELIBERATE:
 *
 * 1. A ZONE ENTRY CROSSES THE BLUE LINE, so nothing here is cropped at it.
 *    `half: true` frames centre red line to end boards — the whole attacking zone
 *    plus 25 ft of neutral zone, which is enough run-up to show an approach. Only
 *    the flip over a trap uses `half: false`, because a flip is released from your
 *    own end of the neutral zone and there is no honest way to draw the three-man
 *    wall it goes over without the far half of the sheet.
 *
 * 2. A DUMPED PUCK IS DRAWN WITH THE KEY'S "PASSING" SYMBOL — dashed line,
 *    arrowhead. The published key (see the header of scripts/lib/rink.mjs) has
 *    exactly two symbols for a puck travelling without a stick on it: "Passing"
 *    (dashed) and "Shooting" (double line). The section says "fire", "shoot" and
 *    "lift" of the various dump-ins, but the double line reads as a shot at the
 *    net and would teach the wrong thing five times over. Dashed is used for every
 *    puck that leaves a stick and is not a shot at goal, in all five dump-in
 *    diagrams, so the line style has one meaning across the set. This is a choice
 *    between two published symbols, not an invented one — but it is a choice, and
 *    it is recorded here so a reviewer can overturn it in one place.
 *
 * WHAT IS DELIBERATELY NOT DRAWN, so its absence is not read as an oversight:
 *
 *  - The finish of a forechecker's angle (section 8, "Angle, don't chase").
 *    site/src/diagrams/forechecking_systems.mjs already declined to draw this and
 *    records two failed attempts at it; angling is movement over time and a still
 *    frame asserts a finishing direction it cannot justify. The chase routes here
 *    all stop short and up-wall of the retriever for the same reason.
 *  - Any route that finishes into a player facing the boards. A check from behind
 *    is a major plus an automatic game misconduct and the corpus treats it as a
 *    safety matter, so no opposition player in this file has an own-team route
 *    ending behind them.
 *  - The trapezoid's dimensions. The renderer paints it from src/data/rink.json,
 *    which takes Rule 1.8 and is checked against
 *    content/foundation/rink_map_and_glossary.md by scripts/check_geometry.py.
 *    Nothing in this file restates those figures, and no caption carries a number
 *    for them — that document spends four paragraphs on why the commonly-quoted
 *    ones are stale.
 */

// ---------------------------------------------------------------------------
// 1. Three lanes, and the carrier last to the line — section 4.
// ---------------------------------------------------------------------------

// The two wide players are ON the paint. The section wants them "at the line, at
// speed, onside, before the puck gets there", and the puck below has not crossed,
// so the picture is legal as drawn under every book in the document.
const WIDE_R = { at: 'blue-line', dy: 31 };            // (25, 31)
const WIDE_L = { at: 'blue-line', dy: -31 };           // (25, -31)
// "Half a stride to a full stride behind" — a stride is on the order of six or
// seven feet, so seven feet back of the line while the wingers are on it.
const LAST_MAN = { at: 'blue-line', dx: -7 };          // (18, 0)

const threeLanes = {
  id: 'entry-three-lanes',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'Three attackers arriving at the attacking blue line in three lanes — one wide on each ' +
    'side, one through the middle — drawn at the instant the two wide players are already on ' +
    'the paint at speed and the puck is still a stride short of it. That order is the whole ' +
    'point: if the carrier arrives first the supports are behind the play and the defence can ' +
    'collapse on one player, so the carrier wants to reach the line half a stride to a full ' +
    'stride behind the wingers, and arriving with speed is not the same as arriving early. ' +
    'The wide players are onside here because the puck has not yet completely crossed, which ' +
    'is exactly what the trail-skate drag is for. Which of the three carries, whether your ' +
    'team crosses lanes at all, and whether the wide lanes are held strictly are coaching ' +
    'choices that vary enormously — this is drawn with the carrier in the middle lane setting ' +
    'the clock, and you should ask your coach what your team wants before you decide you know.',

  describe:
    'The attacking half of the rink, opposition net at the right. Three own forwards approach ' +
    'the blue line in three lanes: one wide near each side wall, level with the line, and one ' +
    'in the middle seven feet short of it with the puck. Two opposition defencemen are inside ' +
    'the zone, backing in, roughly between the faceoff dots, with their goaltender in the ' +
    'crease. Three routes: each wide player continues into the zone down their own lane, and ' +
    'the carrier carries the puck across the line through the middle.',

  players: [
    // Opposition. Two defencemen backing in — the document's own defensive summary
    // has them "roughly between the faceoff dots" (the dots are at y +-22, so
    // between them is |y| < 22). They are drawn without routes and without a
    // system label, because which structure a defence uses at the line is a
    // coaching choice the section is explicit about.
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 15, dy: 12 } },   // (40, 12)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 15, dy: -12 } },  // (40, -12)

    // Own team. The frozen shape is the lesson: two on the line, one behind it.
    { id: 'F', pos: 'F', at: WIDE_R,   label: 'wide lane, at the line' },
    { id: 'F', pos: 'F', at: WIDE_L,   label: 'wide lane, at the line' },
    { id: 'F', pos: 'F', at: LAST_MAN, label: 'carrier, a stride behind' },
  ],

  // Not numbered. Numbering would assert an order between the two wide players,
  // and the section wants all three crossing "within about a second of each
  // other" — the order that matters is carried by where the glyphs are, not by
  // the arrows.
  routes: [
    { from: WIDE_R, to: { at: 'top-of-circle:right', dx: -4, dy: 6 }, kind: 'skate' },  // (50, 28)
    { from: WIDE_L, to: { at: 'top-of-circle:left', dx: -4, dy: -6 }, kind: 'skate' },  // (50, -28)
    // Long enough to read as a carry rather than a wiggle: at 14 ft the wave
    // rendered as a single squiggle with the arrowhead almost on the glyph.
    // It stops well short of both defencemen (they are at (40, +-12)).
    { from: LAST_MAN, to: { at: 'blue-line', dx: 12 }, kind: 'carry' },                 // (37, 0)
  ],

  // Behind the line and to one side of the carrier. It must not have crossed:
  // the two wide players' legality depends on it.
  puck: { at: 'blue-line', dx: -3, dy: 3 },   // (22, 3)
};

// ---------------------------------------------------------------------------
// 2. The wide entry — section 3.
// ---------------------------------------------------------------------------

const WIDE_CARRIER = { at: 'blue-line', dx: 8, dy: 36 };   // (33, 36) — just inside
                                                           // the line, on the wall
const NET_DRIVER = { at: 'high-slot', dx: -10, dy: 4 };    // (59, 4)

const wideEntry = {
  id: 'entry-wide',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'The wide entry: the carrier crosses the line outside the defenceman, down the boards, and ' +
    'goes for the goal line or below it — so the defender has to turn and skate, and every ' +
    'stride he takes toward the boards is a stride away from the front of his own net. It only ' +
    'works with the two supports drawn here: one driving the net so ' +
    'that the carrier has somewhere to put the puck when he reaches the goal line, and a third ' +
    'high for the back-door or point option. Going wide with nobody behind you is not an attack ' +
    'but a slow dump-in with extra steps, because you arrive alone below the goal line with the ' +
    'defence between you and the net. No contact is drawn: the defender is beaten by having to ' +
    'turn, not by being hit. The net drive stops at the blue paint: live at the edge of it and ' +
    'keep your body out of the crease — screening from outside it without contact is legal, ' +
    'but positioning alone can void a goal if it stops the goalie moving freely or defending the ' +
    'net (NHL Rule 69.1).',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward has just ' +
    'crossed the blue line wide on the right wall with the puck, outside an opposition ' +
    'defenceman who is inside him. A curved route carries the puck down the boards to the goal ' +
    'line. A second own forward drives from the high slot to the front of the net, stopping ' +
    'short of the crease. A third own forward waits high on the far side for the back-door or ' +
    'point option. A second opposition defenceman stands in front of his own net and the ' +
    'goaltender is in the crease. The beaten defenceman is drawn with no route, because the ' +
    'route he would have to skate finishes at a player travelling along the wall and that is a ' +
    'shape that is not drawn here.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // The defenceman being beaten: inside the carrier and level with him, which is
    // what "outside the defenceman" means.
    { id: 'D',  team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 12, dy: 27 },  // (37, 27)
      label: 'has to turn and skate' },
    // The partner. Two opposition defencemen is not decoration — the section's own
    // failure case is arriving "alone below the goal line with three defenders
    // between you and the net", and a wide entry drawn against one defender would
    // be a different situation entirely.
    { id: 'D',  team: 'opp', pos: 'D', at: { at: 'slot', dx: 2, dy: 5 } },       // (78, 5)

    // Short label on purpose. The placer works in rink feet and a long one
    // anchored this close to the left edge of the frame has no legal box near its
    // own player, so it gets thrown across the ice on a leader line.
    { id: 'F',  pos: 'F', at: WIDE_CARRIER, label: 'goes outside' },
    { id: 'F',  pos: 'F', at: NET_DRIVER,   label: 'driving the net' },
    // "A third player high for the back-door or point option" — the section's own
    // words, and one player genuinely offering either, so the label says both.
    { id: 'F',  pos: 'F', at: { at: 'top-of-circle:left', dy: 8 },               // (54, -14)
      label: 'high: back-door or point' },
  ],

  routes: [
    // Bowed toward the boards so the carry hugs the wall rather than cutting
    // across the top of the circle, which would be a different entry.
    { from: WIDE_CARRIER, to: { at: 'goal-line', dy: 29 }, kind: 'carry', bow: 6 },  // (89, 29)
    // Stops in front of the net and short of the crease. The renderer's rule and
    // the corpus's: a route may not run through the crease or across the goal mouth.
    //
    // MEASURED, against src/data/rink.json at commit b9ed6b7,
    // sha256 d441c7942e1ed27c1a55c1d6261c1232fe1eadd97cf79f3c2e8d4aa871b06579 — the
    // arithmetic below is only true of THAT table, and a nudge to `crease` or `slot`
    // moves it with no diff touching this file. Tip (78, -5); the opposition
    // goaltender's anchor (86 - 1, 0) = (85, 0). d = 8.60 ft, terminal tangent (the
    // chord: this route has no bow) 60.9 degrees off the bearing to him, so the
    // lateral miss is 7.52 ft, well outside the 2.9 ft glyph. But d is INSIDE
    // ARRIVAL.noArrow = 9, so this is the closest skater arrowhead to a goaltender in
    // the corpus, and it is the only one of the four in FRONT of the net: the two at
    // 7.81 ft (`forecheck-212`, `nz-1-2-2-containment`) finish behind the goal line
    // outside the near post with the frame interposed.
    //
    // check-arrivals downgrades a goaltender arrival to advisory BY DESIGN — every net
    // drive finishes near him by construction, so failing on it would forbid drawing
    // one — which means nothing mechanical will ever raise this. The remedy the corpus
    // uses is a caption clause, and the caption now carries the same NHL 69.1 wording
    // as `winger-offensive-zone-patches`, which was the only front-of-net drive that
    // had it. Do not "fix" this by shortening the route instead: a drive that stops
    // further out is a different play, and the caption is where the obligation belongs,
    // because what happens in the last few feet is movement over time.
    { from: NET_DRIVER, to: { at: 'slot', dx: 2, dy: -5 }, kind: 'skate' },          // (78, -5)
  ],

  puck: { at: 'blue-line', dx: 11, dy: 33 },   // (36, 33)
};

// ---------------------------------------------------------------------------
// 3. The delay / curl-back — section 5.
// ---------------------------------------------------------------------------

// In OPEN ICE, deliberately. The section carries a safety override that outranks
// the play: "Curl in open ice, not against the wall. Never take contact with your
// back to the boards." A curl-back drawn against the wall would be the corpus
// teaching the behaviour it says is most associated with catastrophic spinal
// injury, so this one is in the middle third of the ice and nowhere near it.
const DELAY_AT = { at: 'blue-line', dx: -3, dy: -10 };    // (22, -10)
const DELAY_SUPPORT = { at: 'blue-line', dx: -23, dy: 18 };  // (2, 18)

const delayCurl = {
  id: 'entry-delay-curl',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'The delay, or curl-back — the play that runs hardest against instinct, because turning away ' +
    'from the offensive zone feels like retreating. A wasted entry at rec and youth level is ' +
    'characteristically a player alone at the line who forced something instead; what share of ' +
    'wasted entries that accounts for is not something anyone counts, so read it as a coaching ' +
    'observation rather than a measurement. ' +
    'Arriving at the line alone against two defenders, the carrier does ' +
    'not stop and does not force it: he turns away from the pressure, curls back toward the ' +
    'neutral zone with his body between the defender and the puck, looks back up ice rather ' +
    'than at the defender, and buys the one or two seconds his late support needs to arrive at ' +
    'speed. One safety point outranks the play and is why the curl is drawn out in open ice: ' +
    'curl away from the wall, and never take contact with your back to the boards. A still ' +
    'picture can only show the turn and the teammate arriving — the re-attack that follows, ' +
    'with the puck going to whoever has the best angle and the most speed and often not to you, ' +
    'is the next moment and is not drawn.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'is just short of the blue line in the middle of the ice, alone against two opposition ' +
    'defencemen who are standing up inside the line. His route turns away from them and curls ' +
    'back toward the neutral zone in open ice, well clear of both side walls. The puck is drawn ' +
    'on the far side of him from the nearest defender, which is what protecting it with your ' +
    'body means. A second own forward arrives late from behind on the other side of the ice, ' +
    'skating toward the line. The opposition goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // Standing up at their own line, and far enough off the carrier that the two
    // glyphs do not touch: at eight feet the triangle and the circle rendered as
    // one shape and the picture read as contact.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 4, dy: -14 } },  // (29, -14)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 5, dy: 6 } },    // (30, 6)

    { id: 'F', pos: 'F', at: DELAY_AT, label: 'alone: turn away, do not stop' },
    { id: 'F', pos: 'F', at: DELAY_SUPPORT, label: 'late support, arriving' },
  ],

  routes: [
    // A U-turn away from the line and back toward the neutral zone. The bow is
    // what makes it a curl rather than a retreat: the route carries on toward the
    // line, turns, and comes back. Lengthened from 17 ft to 22 ft because at the
    // shorter length the carry wave rendered as a squiggle rather than a turn.
    { from: DELAY_AT, to: { at: 'blue-line', dx: -21, dy: 2 }, kind: 'carry', bow: -18 },  // (4, 2)
    // Stops short of the line: he is the late one, and drawing him already across
    // it would contradict the label and the section.
    { from: DELAY_SUPPORT, to: { at: 'blue-line', dx: -5, dy: 22 }, kind: 'skate' },       // (20, 22)
  ],

  // On the far side of the carrier from the nearest defender — "protecting the
  // puck with your body between defender and puck".
  puck: { at: 'blue-line', dx: -6, dy: -7 },   // (19, -7)
};

// ---------------------------------------------------------------------------
// 4-8. Dump-ins: the five types. Section 7.
//
// Five diagrams because the section's own claim is that this is "not one play. It
// is at least five, and choosing the wrong one is most of why dump-ins get a bad
// name" — so the set is the teaching, and each caption names its own type as one
// of five. Every one of them obeys the unifying rule the section states: the puck
// goes to a place a teammate is already going.
// ---------------------------------------------------------------------------

// --- 4. The hard rim -------------------------------------------------------

const RIM_CARRIER = { at: 'boards:right', dx: -36, dy: -4 };  // (33, 38.5)
// The rim's path round the boards is two arcs, not one. A single quadratic cannot
// hug a rounded rectangle's corner: bowed hard enough to reach the end boards it
// cuts across the goal mouth on the way back out. So the puck's path is drawn as
// two chained segments — the second starts exactly where the first ends — and the
// routes are numbered so the chain reads as one puck travelling, in order.
const RIM_CORNER = { at: 'corner:right', dx: 5, dy: 2 };      // (87, 36)
const RIM_ARRIVES = { at: 'corner:left', dx: 4, dy: 2 };      // (86, -32)

const hardRim = {
  id: 'dump-hard-rim',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The hard rim — the first of five distinct dump-ins. The read that calls ' +
    'for it is pressure coming at you from the inside with a teammate coming down the far wall ' +
    'or into the far corner: the puck is fired low and hard around the boards so that it follows ' +
    'the curve of the corner and travels onward in the direction of play, beating the ' +
    'defenceman stepping up and arriving on the far side before his partner can rotate. A rim ' +
    'is not a reverse — a reverse goes back against the flow of the play, behind you, and is a ' +
    'different play for a different purpose, so be precise about which one you are calling for. ' +
    'The picture shows where the puck is meant to arrive, not that it will: too soft and it dies ' +
    'behind the net, too hard and it comes off the far boards straight to the weak-side ' +
    'defenceman.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'is on the right wall near the blue line, with an opposition defenceman inside him and ' +
    'slightly up-ice, stepping up. Two numbered segments trace one puck path: first along the ' +
    'right wall into the right corner, then round behind the net and out to the far corner. A ' +
    'third numbered route is an own forward skating down the far wall into that corner to meet ' +
    'it. The opposition weak-side defenceman stands in the middle of the zone, the partner who ' +
    'has to rotate, and the goaltender is in the crease. No route ends on a player.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // The defenceman stepping up: inside the carrier and up-ice of him, so the
    // pressure is from the inside, which is the read. Drawn without a route —
    // any route from here finishes pointing at the carrier, and the corpus does
    // not draw arrows that read as a collision.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'boards:right', dx: -30, dy: -14 },   // (39, 28.5)
      label: 'stepping up, from inside' },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'high-slot', dx: 4, dy: -12 },        // (73, -12)
      label: 'the partner, has to rotate' },

    { id: 'F', pos: 'F', at: RIM_CARRIER, label: 'rims it, low and hard' },
    { id: 'F', pos: 'F', at: { at: 'boards:left', dx: -18, dy: 6 },                   // (51, -36.5)
      label: 'coming down the far wall' },
  ],

  routes: [
    // 1 — along the right wall into the corner. Nearly straight: the wall is.
    { from: { at: 'boards:right', dx: -35, dy: -6 }, to: RIM_CORNER, kind: 'pass', bow: 1.5 },
    // 2 — round behind the net to the far corner. Bowed toward the end boards so
    //     the puck goes *behind* the net; the unbowed chord would run straight
    //     across the goal mouth, which is forbidden and would also be a different
    //     play.
    { from: RIM_CORNER, to: RIM_ARRIVES, kind: 'pass', bow: 21 },
    // 3 — the teammate the rim is for. Stops well short of where the puck arrives,
    //     so the two arrowheads do not merge into one mark in the corner.
    { from: { at: 'boards:left', dx: -18, dy: 6 }, to: { at: 'corner:left', dx: -5, dy: 1 },
      kind: 'skate' },   // (77, -33)
  ],

  puck: { at: 'boards:right', dx: -33, dy: -7 },   // (36, 35.5)
};

// --- 5. The soft area dump -------------------------------------------------

const SOFT_CARRIER = { at: 'blue-line', dx: -2, dy: -22 };   // (23, -22)
// Out on the wall. At (39, -32) the chaser's glyph sat four feet off the dump's
// own line and the dashed puck path was drawn across it.
const SOFT_CHASER = { at: 'blue-line', dx: 14, dy: -34 };    // (39, -34)

const softAreaDump = {
  id: 'dump-soft-area',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'The soft area dump — the second of five distinct dump-ins, and the one ' +
    'whose value is entirely in the race, which is why the chaser is drawn already most of the ' +
    'way there. The puck is placed gently into a specific area, usually a corner, so that it ' +
    'dies there rather than rebounding: that gives your chaser a stationary puck and a body ' +
    'arriving on it, and gives the retrieving defenceman no help at all from the puck’s momentum. The ' +
    'read that calls for it is a forechecker arriving in roughly two seconds and a defence that ' +
    'has to turn and retrieve. Used when your chaser is four seconds away it is the opposite ' +
    'play — you have simply given the puck to their defenceman with time. Nothing about how the ' +
    'chase finishes is drawn here; angling is movement over time and a subject of its own.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'is just outside the blue line on the left side. A dashed route places the puck into the ' +
    'left corner. A second own forward, already well inside the zone along the left wall, skates ' +
    'toward that corner and his route stops short of the puck and up-wall of it. An opposition ' +
    'defenceman is turning back from in front of his own net toward the same corner, his route ' +
    'also stopping short. The goaltender is in the crease. The two arriving routes finish apart ' +
    'from one another and neither finishes behind the other player.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'faceoff-dot:left', dx: 6, dy: 8 },   // (75, -14)
      label: 'has to turn and retrieve' },

    { id: 'F', pos: 'F', at: SOFT_CARRIER, label: 'places it, does not fire it' },
    { id: 'F', pos: 'F', at: SOFT_CHASER,  label: 'chaser, two seconds' },
  ],

  routes: [
    // Deep into the corner rather than to the corner's nominal centre: at
    // (82, -34) the puck landed on the edge of the faceoff circle and did not
    // read as "a corner" at all.
    { from: { at: 'blue-line', dx: 0, dy: -21 }, to: { at: 'corner:left', dx: 3, dy: -3 },
      kind: 'pass' },   // (85, -37)
    // Stops short of the puck and up-wall of the retriever — between him and the
    // boards escape he wants, not behind him. The section's angling instruction
    // is a separate subsection and this diagram does not attempt it.
    { from: SOFT_CHASER, to: { at: 'corner:left', dx: -14, dy: -4 }, kind: 'skate' }, // (68, -38)
    // Bowed round the back of the circle rather than cutting straight across it,
    // so this route and the dump do not run as two near-parallel lines.
    { from: { at: 'faceoff-dot:left', dx: 6, dy: 8 }, to: { at: 'corner:left', dx: -1, dy: 4 },
      kind: 'skate', bow: 6 },   // (81, -30)
  ],

  puck: { at: 'blue-line', dx: 2, dy: -20 },   // (27, -20)
};

// --- 6. The chip past a defenceman committing early ------------------------

// Spread along the ice rather than piled into the top corner. The first attempt
// put the carrier, the defenceman, the chip and the collection all inside a
// twenty-foot square against the boards; the badges stacked on the defenceman's
// glyph and the carrier's label was pushed two-thirds of the way down the rink.
const CHIP_CARRIER = { at: 'blue-line', dx: -13, dy: 29 };   // (12, 29)
const CHIP_D = { at: 'blue-line', dx: 4, dy: 26 };           // (29, 26)
const CHIP_LANDS = { at: 'blue-line', dx: 29, dy: 36 };      // (54, 36)

const chipPast = {
  id: 'dump-chip-past',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The chip past a defenceman committing early — the third of five distinct dump-ins, and a ' +
    'possession play rather than a surrender. He is stepping ' +
    'up to meet you at or before the line with space behind him on the wall, so the puck is ' +
    'lifted or pushed past him down the wall while you change your line before you release and ' +
    'go around the other side to collect it yourself: he is moving toward you, the puck is going ' +
    'behind him, and if your feet keep moving you are behind their defence with speed. Be precise ' +
    'about the words — a defenceman challenging you at his own line is ' +
    'stepping up, while a pinch is a defenceman stepping down from the offensive blue line, and ' +
    'both get called pinches in conversation. It is under-used because giving the puck up for a ' +
    'second while going full speed at someone feels wrong, and it is one of the highest-value ' +
    'plays there is against an aggressive gap.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'comes up the right wing lane toward the blue line. An opposition defenceman is standing on ' +
    'the line in front of him. Route one is the carrier changing his line, swinging inside the ' +
    'defenceman and back out to the wall behind him. Route two is the puck, chipped past the ' +
    'defenceman on the boards side and landing on the wall inside the zone, where the carrier is ' +
    'heading. The two routes separate before the defenceman and rejoin behind him. The ' +
    'defenceman is drawn with no route of his own, because every route from him finishes ' +
    'pointing at the carrier, and an arrow that reads as a collision is not drawn here. ' +
    'The opposition goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: CHIP_D, label: 'committing hard and early' },
    { id: 'F', pos: 'F', at: CHIP_CARRIER, label: 'chips early' },
  ],

  routes: [
    // 1 — "change your line BEFORE you release so you are already accelerating
    //     around them", which is why the carrier's route is the one numbered
    //     first. Drawn as skating, not carrying: by the time it curves he has let
    //     the puck go. The bow dips well inside the defenceman — at bow -20 it
    //     cleared the base of his triangle by under four feet and read as
    //     contact — and comes back out to the wall to collect.
    { from: CHIP_CARRIER, to: { at: 'blue-line', dx: 23, dy: 30 }, kind: 'skate', bow: -22 },
    // 2 — the chip, past him on the boards side. Bowed toward the wall so it
    //     clearly clears the defenceman rather than skimming him.
    { from: { at: 'blue-line', dx: -10, dy: 30 }, to: CHIP_LANDS, kind: 'pass', bow: 4 },
    // The defenceman's own committed momentum is NOT drawn. Every route from him
    // that is long enough to see finishes within a few degrees of pointing
    // straight at the carrier, which is the shape the corpus forbids for a
    // closing route; the caption carries his momentum in words instead.
  ],

  puck: { at: 'blue-line', dx: -9, dy: 32 },   // (16, 32)
};

// --- 7. The cross-corner (north-south) dump --------------------------------

const CROSS_CARRIER = { at: 'blue-line', dx: -3, dy: 26 };   // (22, 26)
const CROSS_WINGER = { at: 'boards:left', dx: -22, dy: 4 };  // (47, -38.5)
const WEAK_SIDE_D = { at: 'faceoff-dot:left', dx: 2, dy: 14 };  // (71, -8)

const crossCorner = {
  id: 'dump-cross-corner',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'The cross-corner dump — the fourth of five distinct dump-ins. The read ' +
    'that calls for it is the retrieving defenceman being on your side, or the strong-side ' +
    'corner being crowded: the puck is shot hard diagonally across into the far corner, which ' +
    'moves it away from the defender best placed to get it and leaves their weak-side ' +
    'defenceman a long retrieval on his backhand, facing his own boards — the single most ' +
    'uncomfortable retrieval in hockey. It only works because the far-side ' +
    'winger has read it and is already going there; cross-corner dumps into nobody are pure ' +
    'giveaways. The same read can instead be answered by going straight north down your own ' +
    'side, depending on where your speed is, and that alternative is not drawn. ' +
    'Nothing about how the chase finishes is drawn here; angling is movement over time and a ' +
    'subject of its own. Read the sentence above again before you skate it, though: a defenceman ' +
    'facing his own boards has his back to you, which is the picture the checking-from-behind ' +
    'rules are written about. Arrive on the puck, never on his back.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'is just outside the blue line on the right side; a dashed route carries the puck diagonally ' +
    'across the zone into the far, left corner. An opposition defenceman stands on the right ' +
    'side, the one the puck is being taken away from. His partner, on the left, has a long route ' +
    'across and down toward that far corner. A second own forward is driving down the left wall ' +
    'and his route finishes on the wall side, up-ice of where the puck lands and clear of the ' +
    'retrieving defenceman. The goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'top-of-circle:right', dx: 2, dy: 2 },  // (56, 24)
      label: 'best placed — taken out of it' },
    // Moved off the diagonal. At (62, -16) this triangle sat under four feet from
    // the dump's own line and rendered with the puck path drawn straight through
    // the glyph. From here, in front of his own net on the weak side, the length
    // of the retrieval is also visible, which is the point of the play.
    { id: 'D', team: 'opp', pos: 'D', at: WEAK_SIDE_D,     // (71, -8)
      label: 'long backhand retrieval' },

    { id: 'F', pos: 'F', at: CROSS_CARRIER, label: 'shoots it diagonally' },
    { id: 'F', pos: 'F', at: CROSS_WINGER,  label: 'far winger, already going' },
  ],

  routes: [
    { from: { at: 'blue-line', dx: -1, dy: 25 }, to: { at: 'corner:left', dx: 3, dy: -3 },
      kind: 'pass' },   // (85, -37)
    // The weak-side defenceman's retrieval, drawn because its length is the point.
    // Bowed toward the net so it does not run as a second line alongside the dump.
    // Stopped short of the corner and bowed toward the goal line, because at
    // (78, -29) its arrowhead was drawn sitting on the dump's dashed line.
    { from: WEAK_SIDE_D, to: { at: 'corner:left', dx: -2, dy: 10 }, kind: 'skate', bow: 7 },
    // The far winger arrives on the wall side and up-ice of the retriever, not
    // behind him. Finishing this route deeper than the defenceman would draw a
    // player being run at the end boards, which this corpus will not draw.
    { from: CROSS_WINGER, to: { at: 'corner:left', dx: -10, dy: -3 }, kind: 'skate' },  // (72, -37)
  ],

  puck: { at: 'blue-line', dx: 1, dy: 24 },   // (26, 24)
};

// --- 8. The flip / area dump over a trap -----------------------------------

// The only full-sheet diagram here. A 1-3-1 trap is a shape spread across the
// whole neutral zone, and the flip is released from your own end of it; cropped at
// the centre line there is no wall to go over.
//
// NOTE THE DOUBLE COLON. `resolve()` splits a location name on ':' into
// [base, side, end], so 'blue-line:far' puts "far" in the SIDE slot, where it is
// not 'left', so it silently means "right" — and the position comes back as the
// NEAR blue line with no error. The first render of this diagram had the carrier,
// the forechecker and our own goaltender all mirrored onto the attacking half,
// with our goalie sitting on top of theirs. Any position without `sided: true` in
// src/data/rink.json needs the empty middle segment: 'blue-line::far',
// 'crease::far'. Sided ones take the three-part form, 'corner:right:far'.
const FLIP_CARRIER = { at: 'blue-line::far', dx: 1, dy: 8 };   // (-24, 8)
const FLIP_LANDS = { at: 'corner:right', dx: -10, dy: -2 };    // (72, 32)
// Both runners are UNDER the flip's line, not on it. The first version put one
// at (4, 24), which is 7.2 ft from the opposition player at (0, 30) and 8.7 ft
// from the flip itself — the glyphs touched and the dashed puck path was drawn
// straight through our own forward.
//
// The figures here read "four feet from the opposition player at (0, 28) and
// seven from the flip". The opposition forward is drawn at { centre-ice, dy: 30 },
// so (0, 30); at 3.6 ft apex to 2.9 ft radius the glyphs still touch at 7.2 ft,
// which is why the placement was rejected — but neither number was the one the
// code produces, and the coordinate was wrong as well as the distance.
const FLIP_RUNNER = { at: 'centre-ice', dx: 14, dy: 8 };       // (14, 8)
const FLIP_SUPPORT = { at: 'centre-ice', dx: -4, dy: -16 };    // (-4, -16)
const TRAP_FORECHECKER = { at: 'blue-line::far', dx: -15, dy: 6 };  // (-40, 6)

const flipOverTrap = {
  id: 'dump-flip-over-trap',
  owner: 'content/systems/zone_entries.md',
  half: false,
  width: 900,

  caption:
    'The flip, or area dump, over a neutral-zone trap — the fifth of five distinct dump-ins, ' +
    'and the one the trap exists to force. The structure drawn is a ' +
    '1-3-1: one forechecker, three players across the middle and one back, with the three-across ' +
    'layer designed to kill the puck at the red line, and skating into ' +
    'the three is the trap working. So the puck is lifted high off the ice with the blade opened ' +
    'under it, to travel over sticks and bodies and land in open space behind their defence. A ' +
    'flat diagram cannot show the height, and the height is the whole play: it goes over the ' +
    'three-man wall rather than through it, and hangs long enough for your forwards to run ' +
    // ⚠️ THE SHORTHANDED EXEMPTION IS NOT UNIVERSAL, and this caption stated it as though it
    // were — while `icing-gaining-the-line` in `rules_primer.mjs` carried the full scope, so
    // one voiced layer said it two ways. USA Hockey 624(b) nullifies icing where "(1) (For all
    // Youth 15-Only and above, Girls 16U and above, High School and Adult classifications only)
    // The offending team is short-handed" — `sources/usah.txt`, Rule 624 — so below those
    // classifications a shorthanded team CAN be iced. NHL 81.6 grants it generally but withdraws
    // it from a team "'short-handed' by reason of a major penalty, and they have neglected to
    // ensure there is a player on the penalty bench to exit upon the expiry of the penalty …
    // Icing will be called" (`sources/nhl_rules.txt`).
    'underneath it. Land it past the defence but before the goal line. A puck crossing the goal ' +
    'line untouched from behind the centre red line is icing, and whether being shorthanded ' +
    'exempts you depends on the book you play under. USA Hockey grants that exemption only at ' +
    'Youth 15-Only and above, Girls 16U and above, High School and Adult (Rule 624(b)(1)), so ' +
    'below those levels a shorthanded team can be iced; the NHL grants it but withdraws it from ' +
    'a team shorthanded by a major that has left nobody on the penalty bench (Rule 81.6). Find ' +
    'out which rules your league runs.',

  describe:
    'The full sheet, own end at the left, attacking end at the right. An own forward with the ' +
    'puck is at his own blue line. One opposition forechecker pressures him. Three opposition ' +
    'players are spread across the middle of the ice at the centre red line, one near each side ' +
    'and one in the centre, and a fifth opposition player is back near their own blue line. A ' +
    'long dashed route runs from the carrier, between the players of the three-man layer, and ' +
    'lands high in the attacking zone short of the goal line. Two own forwards skate from the ' +
    'neutral zone toward that area, their routes stopping short of it. Both goaltenders are in ' +
    'their creases.',

  players: [
    // Their goaltender, and ours: on a full sheet, drawing one net manned and the
    // other empty would itself be a claim.
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'G', pos: 'G', at: { at: 'crease::far', dx: 1 } },

    // The 1-3-1 as the section describes it: "one forechecker, three players
    // across the middle and one back". The frozen shape has to be exactly that
    // count at exactly those depths, or it is not the structure it is labelled as.
    { id: 'F', team: 'opp', pos: 'F', at: TRAP_FORECHECKER, label: 'one forechecker' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'centre-ice', dy: 30 } },            // (0, 30)
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'centre-ice', dx: 2 },               // (2, 0)
      label: 'three across the middle' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'centre-ice', dy: -30 } },           // (0, -30)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 7, dy: -14 },       // (32, -14)
      label: 'one back' },

    { id: 'F', pos: 'F', at: FLIP_CARRIER, label: 'no route along the ice' },
    { id: 'F', pos: 'F', at: FLIP_RUNNER, label: 'running underneath it' },
    { id: 'F', pos: 'F', at: FLIP_SUPPORT },
  ],

  routes: [
    // Straight, because in plan view a lofted puck is straight. The caption
    // carries the height, since the drawing cannot.
    { from: { at: 'blue-line::far', dx: 3, dy: 9 }, to: FLIP_LANDS, kind: 'pass' },
    // Both runner routes stop well short of where the puck lands. Taken all the
    // way there they finish within a couple of feet of the flip's own arrowhead,
    // and three arrowheads in one corner say nothing at all.
    { from: FLIP_RUNNER, to: { at: 'top-of-circle:right', dx: 2 }, kind: 'skate' },   // (56, 22)
    { from: FLIP_SUPPORT, to: { at: 'high-slot', dx: -11, dy: 6 }, kind: 'skate' },   // (58, 6)
  ],

  puck: { at: 'blue-line::far', dx: 5, dy: 11 },   // (-20, 11)
};

// ---------------------------------------------------------------------------
// 9. How the trapezoid shapes where you aim — section 7.
//
// The one piece of painted geometry on this page, and the one the coordinate table
// already owns. The renderer draws the trapezoid from src/data/rink.json (Rule
// 1.8); nothing here re-declares it, and the caption carries no number for it,
// because content/foundation/rink_map_and_glossary.md owns those figures and
// spends four paragraphs on why the commonly-quoted ones are stale.
// ---------------------------------------------------------------------------

const TRAP_CARRIER = { at: 'blue-line', dx: -2, dy: 22 };   // (23, 22)
// Out toward the wall, so the chaser's route and the dump do not run within a
// couple of feet of each other with their arrowheads side by side.
const TRAP_CHASER = { at: 'blue-line', dx: 8, dy: 34 };     // (33, 34)

const trapezoidAim = {
  id: 'dump-and-the-trapezoid',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'Where the trapezoid applies, it gives you a simple aiming rule: dump to the corners, not to ' +
    'the goaltender. Behind the goal line, the marked lines are the only area in which he may ' +
    'play the puck, what is judged is the position of the puck rather than his own position, ' +
    'and his one ' +
    'exception is playing it while keeping a skate in contact with his crease. So the corners ' +
    'are legally out of bounds for him and the ice directly behind the net is not: a puck that ' +
    'dies straight behind the net is one he can legally stop and set up for his defenceman, ' +
    'which is exactly the help you were trying to deny him, while a puck in the corner has to be ' +
    'retrieved by a skater with a forechecker arriving. If you must put it behind the net, put ' +
    'it there hard. Where the trapezoid applies is not universal — it is the NHL and ' +
    'the IIHF book, with the KHL commonly said to have one too though no KHL rulebook was ' +
    'available to check that one; neither the USA Hockey book nor the Hockey Canada book marks ' +
    'one at all, so a league running on either has none, ' +
    'and in England and Wales the status is genuinely unsettled — so look behind the net to see ' +
    'whether the lines are painted at all, ask your league, and plan as though their goalie may ' +
    'come for it. Where there is no trapezoid the advice flips: rim it hard and low so he cannot ' +
    'set up on it, or dump to the corner furthest from his stick hand.',

  describe:
    'The attacking half of the rink, opposition net at the right, with the goalkeeper’s ' +
    'restricted area marked behind the net by two dashed lines running from the goal line out ' +
    'to the end boards. The opposition goaltender stands behind his net, inside those lines. An ' +
    'own forward with the puck is just outside the blue line on the right; a dashed route sends ' +
    'the puck into the right corner, outside the marked area and behind the goal line. A second ' +
    'own forward skates down the right wall toward it, his route stopping short. An opposition ' +
    'defenceman is between the net and the corner, the skater who now has to go and get it. The ' +
    'goaltender is drawn with no route: the diagram is about where the puck may legally be ' +
    'played, not about where he skates.',

  players: [
    // Behind his own net and inside the marked area — standing exactly where a
    // puck dumped straight behind the net would arrive, which is the contrast the
    // section draws. He is allowed to stand anywhere; the label says what is
    // actually judged.
    // Clear of the goal frame, which runs from the goal line back to x 92.3: at
    // dx 1 the glyph overlapped the net's back rail and read as a goaltender
    // standing inside his own net.
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'behind-net', dx: 2.5 },   // (96.5, 0)
      label: 'only inside the marked lines' },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'faceoff-dot:right', dx: 10, dy: -6 },  // (79, 16)
      label: 'has to go and get it' },

    { id: 'F', pos: 'F', at: TRAP_CARRIER, label: 'aims for the corner' },
    { id: 'F', pos: 'F', at: TRAP_CHASER,  label: 'forechecker arriving' },
  ],

  routes: [
    // Into the corner, past the goal line and outside the marked lines. The
    // section: "the corners are legally out of bounds for the goaltender, and the
    // area directly behind the net is not."
    { from: { at: 'blue-line', dx: 0, dy: 23 }, to: { at: 'corner:right', dx: 8, dy: -1 },
      kind: 'pass' },   // (90, 33)
    // Stops well short of the corner, out on the wall side of the dump, and
    // up-wall of the retrieving defenceman.
    { from: TRAP_CHASER, to: { at: 'corner:right', dx: -8, dy: 4 }, kind: 'skate' },   // (74, 38)
  ],

  puck: { at: 'blue-line', dx: 3, dy: 24 },   // (28, 24)
};

export default [
  threeLanes,
  wideEntry,
  delayCurl,
  hardRim,
  softAreaDump,
  chipPast,
  crossCorner,
  flipOverTrap,
  trapezoidAim,
];
