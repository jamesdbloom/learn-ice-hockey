/**
 * Diagrams for content/hockey-iq/playing_without_the_puck.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * A NOTE ON THIS PARTICULAR DOCUMENT, because it shaped what got drawn and what
 * did not. Most of what it teaches is a *relationship* rather than a place — your
 * body relative to your man and your net, your body relative to the goalie's eyes
 * and the puck, your blade relative to a line the puck could travel. A relationship
 * has to be drawn as one concrete instance of itself, and every caption below says
 * so in terms, because the failure mode of a rink picture is a reader memorising
 * the spot instead of learning the arrangement.
 *
 * Two things this notation cannot draw, both of which matter here:
 *
 *   - A STICK. The published symbol key has no stick symbol, and this document's
 *     two central defensive ideas ("blade on the ice, flat, in the passing lane"
 *     and "a defenceman's stick lying flat across the only line") are about where a
 *     blade is, not where a body is. So those diagrams draw the body where the body
 *     goes, shade the lane, and the caption says plainly that the stick is not
 *     drawn. Inventing a stick glyph would be exactly the defect the notation
 *     header records: a symbol whose meaning came from memory rather than a key.
 *
 *   - TIME. Several claims here are two-moment claims. See the list of what was
 *     deliberately not drawn, at the foot of this file.
 */

/* ------------------------------------------------------------------------- *
 * 1 — Stick in the lane, body between man and net.
 *
 * Section: "State 2 — They have the puck" -> "Stick in the lane, body between man
 * and net". Drawn in YOUR OWN end: the net on the right is yours. Four glyphs, no
 * routes — the section describes a frozen body-position problem, not a movement,
 * and a route here would be authored.
 *
 * The opposition are given role letters rather than F1/F2, deliberately. This
 * document states twice, with emphasis, that "F1, F2 and F3 are roles defined by
 * order of arrival, not positions"; reusing those letters for opposition players
 * in its own diagrams would teach the inference the prose kills.
 * ------------------------------------------------------------------------- */

// The puck carrier is on the half-wall because that is the position this document
// names when it needs one: "the puck is on the opposite half-wall (the boards area
// roughly level with the faceoff dot)".
const D1_PUCK = 'half-wall:right';                       // (69, 38.5)
// "Your man" in the low slot — the glossary's layer "from the dots down toward the
// goalmouth, outside the crease". At (74,-10) he is outside the left faceoff
// circle, so he reads as low slot rather than as a man in the circle.
const D1_MAN = { at: 'slot', dx: -2, dy: -10 };          // (74, -10)
// You, on the goal side of him. This sits 7.6 ft from your man and 8.6 ft from your
// own goaltender (glyphs need ~6.5 ft of clearance not to touch — the first render
// had you drawn on top of your own goalie), and 2.5 ft off the straight line from
// your man to the goalmouth, which is what "between your man and your own net"
// means. It is also ~7 ft off the passing lane, and that gap is the whole point of
// the picture: the body and the blade are not in the same place, and only a stick
// joins them. Well outside the crease (which really begins at x=83).
const D1_YOU = { at: 'net-front', dx: -3, dy: -7 };      // (81, -7)

const stickLaneBodyNet = {
  id: 'stick-in-lane-body-net-side',
  owner: 'content/hockey-iq/playing_without_the_puck.md',
  half: true,
  width: 900,

  caption:
    'Your own end, your net at the right: an opponent has the puck on the half-wall and the man ' +
    'you are covering is in the low slot. The shaded band is the passing lane between the puck ' +
    'and your man, and your body is deliberately not in it — you are on the goal side of him, ' +
    'between him and your net, which is the tool that takes away the shot and the net drive. ' +
    'These are two separate tools and players routinely use only one: the ' +
    'blade goes flat on the ice in the lane while the body stays net-side, and this notation has ' +
    'no stick symbol, so the picture shows only where the body goes. Read it as one instant of a ' +
    'relationship between three things — you, your man and your net — that moves as the puck ' +
    'moves, not as a spot on the ice. Where you cannot both seal the lane and stay net-side, ' +
    'net-side wins in the defensive zone, because a pass completed ' +
    'twenty feet from your net is survivable and a player alone at the goalmouth is not.',

  describe:
    'One end zone, the net at the right, defended by your own goaltender in the crease. Two ' +
    'opposition players: one with the puck on the right half-wall, level with the faceoff dot, ' +
    'and one in the low slot, the man you are covering. You are drawn as a defender roughly ' +
    'eight feet from him, on the goal side, between him and the net, and about eight feet clear ' +
    'of the shaded band. The shaded band runs from the puck down to the man in the low slot and ' +
    'is labelled "the lane". No routes are drawn: nobody moves in this picture. Sticks are not ' +
    'drawn, because the notation has no symbol for one.',

  // The lane, as a narrow band from the puck to your man. It stops a few feet short
  // of both glyphs so it reads as the space between them rather than as something
  // attached to either. Corners are perpendicular offsets from the two named
  // positions the band runs between; the label is short on purpose, because a zone
  // label is drawn at the polygon's centroid with no collision handling and a long
  // one runs out across the glyphs.
  zones: [
    {
      points: [
        { at: 'half-wall:right', dx: 2.45, dy: -3.75 }, // (71.45, 34.75)
        { at: 'slot', dx: 0, dy: -5.75 },               // (76, -5.75)
        { at: 'slot', dx: -4.95, dy: -6.3 },            // (71.05, -6.3)
        { at: 'half-wall:right', dx: -1.55, dy: -4.2 }, // (67.45, 34.3)
      ],
      label: 'the lane',
    },
  ],

  players: [
    { id: 'G', pos: 'G', at: 'crease' },
    { id: 'P', team: 'opp', pos: 'F', at: D1_PUCK, label: 'the puck carrier' },
    { id: 'M', team: 'opp', pos: 'F', at: D1_MAN,  label: 'your man' },
    // A triangle, because this document's own by-position table gives the
    // defenceman "net-front coverage, stick in the lane" as his off-puck job.
    { id: 'D', pos: 'D', at: D1_YOU, label: 'you, net-side' },
  ],

  puck: { at: 'half-wall:right', dx: -3.5, dy: -3 },
};

/* ------------------------------------------------------------------------- *
 * 2 — A loose puck in your own corner: who goes.
 *
 * Section: "State 3 — The puck is loose" -> "Who goes", the own-zone sentence:
 * "In your own zone, under a low zone collapse, the loose puck in the corner is
 * taken by whoever is closest with one teammate immediately supporting on the
 * boards side and one covering the net front — never two."
 *
 * The frozen shape IS the lesson here: three jobs, three places, and no fourth
 * player. Only one route is drawn — the closest player going — because the other
 * two jobs are positions, not movements.
 *
 * No opposition player is drawn. The section places none in this sentence, and the
 * one thing that could sensibly be added — a second player racing the same puck to
 * the same wall — is the exact picture this corpus must not draw casually: the
 * document calls a puck race to the wall "the single most dangerous moment in
 * hockey" and hands the whole of how-you-arrive to Body Contact and Battles §6/§10.
 * ------------------------------------------------------------------------- */

const D2_PUCK = { at: 'corner:right', dx: 0, dy: 1 };        // (82, 35)
// Eighteen and a half feet below the boards-side support (half-wall:right, y 38.5
// — site/src/data/rink.json), because at nine the two circles read as one stacked
// blob rather than as two players with two different jobs. This said thirteen,
// which was the gap while half-wall.y was 33; the clearance argument survives the
// correction, since the separation grew rather than shrank.
const D2_GOER = { at: 'faceoff-dot:right', dx: 0, dy: -2 };  // (69, 20)
// Finishes about five feet short of the puck. It does not finish on the puck and it
// does not reach the boards: what happens in the last five feet is the other
// document's subject, and this one says so in its own words.
const D2_GOER_TO = { at: 'corner:right', dx: -4, dy: -3 };   // (78, 31)

const loosePuckWhoGoes = {
  id: 'loose-puck-who-goes',
  owner: 'content/hockey-iq/playing_without_the_puck.md',
  half: true,
  width: 900,

  caption:
    'A loose puck in your own corner, your net at the right, drawn under a low zone collapse, ' +
    'the coverage assumed here: the closest player goes hard to it, one teammate ' +
    'supports on the boards side, and one covers the net front — never two. Who goes is a ' +
    'coaching choice, and the worst version is not knowing, so find out which ' +
    'coverage your team plays; what survives every system is that one player goes, one supports ' +
    'and nobody else joins, because two players arriving at the same loose puck from the same ' +
    'angle leaves both committed and neither available. The other two skaters are not drawn, ' +
    'because where they stand is not fixed, and the LETTERS name positions only because the ' +
    'notation has no other way to label a player — these three jobs are assigned by who is ' +
    'closest, not by position. How you arrive is deliberately not shown: the arrow stops five ' +
    'feet short, because a puck race to the wall is the most dangerous moment in hockey, and how ' +
    'you arrive into one — angling, contact and protecting yourself against the boards — is a ' +
    'whole subject of its own.',

  describe:
    'Your own end zone, the net at the right, your goaltender in the crease. A loose puck sits ' +
    'in the right corner with no player on it. Three of your players: one starting near the ' +
    'faceoff dot with an arrow into the corner that stops about five feet short of the puck; one ' +
    'holding the right half-wall as boards-side support; and one defender in front of the net, ' +
    'outside the crease. No opposition player is drawn, and neither are your other two skaters.',

  players: [
    // Off-centre toward the near post, with the puck loose in that corner — and
    // because at dx 2 the glyph was drawn inside the goal frame, and at y 0 it
    // merged with the net-front defender it sits seven feet from.
    { id: 'G', pos: 'G', at: { at: 'crease', dy: 2.5 } },
    { id: 'F', pos: 'F', at: D2_GOER, label: 'goes hard' },
    { id: 'F', pos: 'F', at: 'half-wall:right', label: 'boards-side support' },
    // Triangle at the net front: this document's by-position table gives net-front
    // coverage to the defenceman, and the glossary's house default puts the
    // weak-side defenceman there. Three and a half feet off the net-front node and
    // outside the crease (x=83 in the real dimensions), on the weak side — the
    // glossary is strict that the net front and the slot are two different layers
    // with two different owners, so he does not drift out into the slot.
    { id: 'D', pos: 'D', at: { at: 'net-front', dx: -3, dy: -4.5 }, label: 'the net front' },
  ],

  routes: [
    { from: D2_GOER, to: D2_GOER_TO, kind: 'skate' },
  ],

  puck: D2_PUCK,
};

/* ------------------------------------------------------------------------- *
 * 3 — Unmarked is not the same as available.
 *
 * Section: "Getting open: the mechanics of separating from a check" -> "Unmarked
 * is not the same as available", requirement three: "You are ten feet from anyone,
 * waving, and there is a defenceman's stick lying flat across the only line between
 * you and the puck. You are unmarked and unavailable."
 *
 * The mirror image of diagram 1, on purpose: there it is your blade in their lane,
 * here it is their blade in yours. Same drawing constraint, same honesty in the
 * caption — the body is where the body is, and the reach is not drawn.
 *
 * NO ROUTE for the three-or-four-foot adjustment the section prescribes. At rink
 * scale a four-foot sidestep by a receiver thirty feet from the carrier swings the
 * lane past the blocking stick by about two feet, so the "before" and "after" bands
 * lie on top of one another and the picture would show one blob and claim two
 * lanes. The caption carries the fix in the section's own words instead.
 * ------------------------------------------------------------------------- */

const D3_CARRIER = 'half-wall:right';        // (69, 38.5)
const D3_RECEIVER = 'high-slot';             // (69, 0) — dots to the top of the circles
// Exactly ten feet from the receiver — the section's own figure, "you are ten feet
// from anyone, waving" — and six feet off the lane, near enough for a stick lying
// flat to reach into it. Kept low enough that the zone's centre label, which the
// renderer draws at the polygon's centroid with no collision handling, does not
// land on the triangle.
const D3_BLOCKER = { at: 'high-slot', dx: -6, dy: 8 };   // (63, 8)

const unmarkedNotAvailable = {
  id: 'unmarked-but-unavailable',
  owner: 'content/hockey-iq/playing_without_the_puck.md',
  half: true,
  width: 900,

  caption:
    'The attacking zone, with a teammate carrying the puck on the half-wall and you alone in the ' +
    'high slot: the nearest defender is a good ten feet away, and you are ' +
    'still not available. The ' +
    'shaded band is the only line the puck can travel from the carrier to your blade, and a ' +
    'defenceman standing well off to the side has laid his stick flat across it — that is the ' +
    'most common of the three failures that leave an open player unavailable, and it is ' +
    'the whole difference between ' +
    'unmarked and available. This notation has no stick symbol, so the defenceman is drawn where ' +
    'his body is and the reach into the lane is not drawn at all. The fix is to look ' +
    'at the passing lane rather than at your defender and to move, often only three or four ' +
    'feet, until the angle opens — a change too small to draw as a second band, so it is not ' +
    'attempted here.',

  describe:
    'The attacking end zone, the opposition net at the right. Your teammate has the puck on the ' +
    'right half-wall. You stand in the high slot, level with the faceoff dots, with nobody ' +
    'marking you. A shaded band runs straight down the ice between the two of you: it is the ' +
    'passing lane. An opposition defenceman stands about six feet to one side of it and about ' +
    'ten feet from you; his stick, which is not drawn, is what lies across the lane. No routes ' +
    'are drawn.',

  zones: [
    {
      points: [
        { at: 'half-wall:right', dx: 1.8, dy: -4 },   // (70.8, 34.5)
        { at: 'high-slot', dx: 2.4, dy: 3.5 },        // (71.4, 3.5)
        { at: 'high-slot', dx: -2.4, dy: 3.5 },       // (66.6, 3.5)
        { at: 'half-wall:right', dx: -1.8, dy: -4 },  // (67.2, 34.5)
      ],
      // Deliberately unlabelled, unlike the same band in the first diagram. A zone
      // label is drawn at the polygon's centroid and is invisible to the label
      // placer, so it cannot be moved and nothing gets moved out of its way: with
      // "the lane" written here, the blocker's own label was placed straight
      // through it. The band is named by the blocker's label and by the caption.
    },
  ],

  players: [
    { id: 'P', pos: 'F', at: D3_CARRIER, label: 'the carrier' },
    { id: 'R', pos: 'F', at: D3_RECEIVER, label: 'unmarked, unavailable' },
    // "a defenceman's stick lying flat across the only line" — the section's word,
    // so a triangle.
    { id: 'D', team: 'opp', pos: 'D', at: D3_BLOCKER, label: 'stick flat in the lane' },
  ],

  puck: { at: 'half-wall:right', dx: -3.5, dy: -3 },
};

/* ------------------------------------------------------------------------- *
 * 4 — Screening the goaltender: the sightline.
 *
 * Section: "Occupying defenders: the work nobody claps for" -> "Screen the goalie".
 *
 * THE RULE. This diagram sits next to goaltender interference, and a picture is the
 * most absolute-looking thing on a page. So: the caption states the constraint in
 * the document's own terms and quotes the rule the document quotes, and it says in
 * terms that the picture does not and cannot establish that any drawn position is
 * legal. The section's own conclusion — "staying out of the blue paint is
 * necessary, not sufficient", because Rule 69.1 turns on impairment "either by his
 * positioning or by contact" — is why the caption cannot simply say "outside the
 * crease, therefore legal".
 *
 * No shot is drawn. The screen stands on the puck-to-goalie line by construction,
 * so a shot route would run straight through the screener's glyph and terminate in
 * the crease, both of which this project forbids. The wedge carries it.
 * ------------------------------------------------------------------------- */

// The puck at the right point. Everything else in the picture is derived from the
// straight line between it and the middle of the goal, because that line is what
// the section means by "the sightline between the puck and the goalie".
const D4_POINT = 'point:right';                        // (25, 20)
// On that line, five feet in front of the crease's real front edge (x=83) and well
// clear of the crease as drawn. "Keep both feet outside the crease."
const D4_SCREEN = { at: 'slot', dx: 2, dy: 3.4 };      // (78, 3.4)
// The goaltender on his angle, i.e. on the same line — not parked on the centre of
// the goal line while the puck sits out at the point.
const D4_GOALIE = { at: 'crease', dy: 1 };             // (86, 1)

const screenSightline = {
  id: 'screen-the-goalie-sightline',
  owner: 'content/hockey-iq/playing_without_the_puck.md',
  half: true,
  width: 900,

  caption:
    'One instance of a relationship, not a place to stand: with the puck at the right point, the ' +
    'shaded wedge is the line between the puck and the goaltender, and the screen stands inside ' +
    'it with both feet outside the crease. The wedge swings as the puck moves, so the job is to ' +
    'stand where the goalie’s eyes are rather than where the puck is going; ' +
    'the instructions the picture cannot show are to keep your stick on the ice, because a screen ' +
    'is also a tip and rebound threat, and to move late. Nothing here establishes that the ' +
    'position drawn is legal, and staying out of the blue paint is ' +
    'necessary and not sufficient: under NHL Rule 69.1 a goal is disallowed ' +
    'where an attacking player, "either by his positioning or by contact", impairs the ' +
    'goalkeeper’s ability to move freely within his crease or defend his goal — no contact ' +
    'required — and Rule 69.3 for establishing a significant position within the crease. Here ' +
    '"screen" means the goaltender’s sightline and nothing else.',

  describe:
    'The attacking end zone, the opposition net at the right with its goaltender in the crease, ' +
    'positioned on his angle. One of your players stands at the right point with the puck. A ' +
    'narrow shaded wedge, labelled "the sightline", runs from the puck down to the goaltender, ' +
    'widening as it goes. A second player of yours stands inside that wedge about eight feet in ' +
    'front of the goaltender and clear of the crease. No routes are drawn: no shot, and no ' +
    'movement.',

  zones: [
    {
      points: [
        { at: 'point:right', dx: 0.5, dy: 1.5 },   // (25.5, 21.5)
        { at: 'crease', dx: -1, dy: 4.5 },         // (85, 4.5)
        { at: 'crease', dx: -1, dy: -2.5 },        // (85, -2.5)
        { at: 'point:right', dx: -0.5, dy: -1.5 }, // (24.5, 18.5)
      ],
      label: 'the sightline',
    },
  ],

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: D4_GOALIE },
    // A triangle at the point: this document's by-position table gives the
    // defenceman the offensive blue line. Which of your players holds the puck
    // there is not the section's subject, and the caption does not make it one.
    { id: 'D', pos: 'D', at: D4_POINT },
    { id: 'S', pos: 'F', at: D4_SCREEN, label: 'the screen' },
  ],

  puck: { at: 'point:right', dx: 3, dy: -1.5 },
};

/* ------------------------------------------------------------------------- *
 * 5 — Width, and the middle lane it creates.
 *
 * Section: "Occupying defenders: the work nobody claps for" -> "Stretch the defence
 * for width", second bullet: "On a rush, a wide forward forces the defenceman to
 * respect the outside lane, which widens the gap between them and their partner —
 * and the gap between defencemen is where the middle drive goes."
 *
 * Drawn as a three-on-two entry because that is the shape the sentence describes,
 * and because it puts the document's thesis on one page: the two players who never
 * touch the puck are the reason the lane exists.
 *
 * OFFSIDE. The puck is already across the blue line, carried in, and both wingers
 * are drawn behind it. The first version put the wingers on twelve-foot routes
 * finishing inside the zone while the puck was still eleven feet outside it, which
 * — read as one instant, which is how a reader reads a diagram — is a picture of an
 * offside.
 *
 * No zone polygon. The gap is the space between the two defenders, and a shaded
 * rectangle there would have its label drawn at its centroid — directly on top of
 * the carry route running through it.
 * ------------------------------------------------------------------------- */

const D5_CARRIER = { at: 'blue-line', dx: 5 };                    // (30, 0)
// Eighteen feet, which is two wavelengths of the key's "skating with control of the
// puck" wave. At sixteen it rendered as a squiggle rather than as a notation.
const D5_CARRY_TO = { at: 'blue-line', dx: 23 };                  // (48, 0)
// ASSUME neutral-dot.x = 20 (site/src/data/rink.json). These four carried (27, 34),
// (39, 34), (27, -34), (39, -34), which were resolved when neutral-dot.x was 30 —
// the value rink.json's own $comment records as wrong, because it disagreed with
// the derived faceoff.neutral_dot_x and put anything anchored here 10 ft from the
// dot the same picture drew. The glyphs moved with the table; the notes did not.
const D5_WIDE_R = { at: 'neutral-dot:right', dx: -3, dy: 12 };    // (17, 34)
const D5_WIDE_R_TO = { at: 'neutral-dot:right', dx: 9, dy: 12 };  // (29, 34)
const D5_WIDE_L = { at: 'neutral-dot:left', dx: -3, dy: -12 };    // (17, -34)
const D5_WIDE_L_TO = { at: 'neutral-dot:left', dx: 9, dy: -12 };  // (29, -34)

const widthMakesTheMiddle = {
  id: 'width-makes-the-middle-lane',
  owner: 'content/hockey-iq/playing_without_the_puck.md',
  half: true,
  width: 900,

  caption:
    'A three-on-two just inside the attacking blue line, drawn for what the two players without ' +
    'the puck are doing: each winger holds his width near the boards, which keeps a defenceman ' +
    'out on each side and widens the gap between the pair, and the middle drive goes through ' +
    'that gap. ' +
    'Neither wide forward touches the puck on this rush, and their ' +
    'width is the thing that made the middle lane exist. The comparison the picture cannot draw ' +
    'is the alternative: if both wingers drift inside to look busy, the defence compresses and ' +
    'the gap closes. How much width a team wants once the puck is settled in the offensive zone ' +
    'is a coaching choice, so ask — some coaches want the far winger ' +
    'high and wide against the counter-attack, others want them crashing the back post on every ' +
    'shot — and this is one instant of a rush, not a system.',

  describe:
    'The attacking half of the sheet, the opposition net and goaltender at the right. Three of ' +
    'your forwards have just crossed the blue line: one carrying the puck up the middle with a ' +
    'route driving further into the zone, and one on each side near the boards, each behind the ' +
    'puck and each with a short route straight up the wall that keeps his width. Two opposition ' +
    'defenders are drawn ahead of them, one on each side, held out toward their wingers, with a ' +
    'wide gap between them that the middle carrier is driving into. Your defencemen are not ' +
    'drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: 'crease' },
    { id: 'F', pos: 'F', at: D5_CARRIER, label: 'drives the middle' },
    { id: 'F', pos: 'F', at: D5_WIDE_R, label: 'holds width' },
    { id: 'F', pos: 'F', at: D5_WIDE_L, label: 'holds width' },
    // Twenty-one feet inside their wingers, twenty-six feet apart. Wide enough that
    // the middle lane is visibly the widest thing on the picture, which is the
    // section's claim, and not so wide that the pair has abandoned the middle
    // altogether, which would be a picture of two badly positioned defencemen.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'top-of-circle:right', dx: -2, dy: -9 }, label: 'held wide' },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'top-of-circle:left', dx: -2, dy: 9 },   label: 'held wide' },
  ],

  // Not numbered: these are simultaneous, and badges would assert an order the
  // section does not give.
  routes: [
    { from: D5_CARRIER, to: D5_CARRY_TO, kind: 'carry' },
    { from: D5_WIDE_R, to: D5_WIDE_R_TO, kind: 'skate' },
    { from: D5_WIDE_L, to: D5_WIDE_L_TO, kind: 'skate' },
  ],

  puck: { at: 'blue-line', dx: 7, dy: -2.5 },
};

/* ------------------------------------------------------------------------- *
 * 6 and 7 — Drive the net, before and after.
 *
 * Section: "Occupying defenders: the work nobody claps for" -> "Drive the net".
 *
 * THIS FILE PREVIOUSLY RECORDED THIS AS UNDRAWABLE, and the note is left below in
 * its corrected form rather than deleted, because the reasoning is worth keeping.
 * Both objections it raised were objections to a SINGLE FRAME — that one frame
 * either aims the driver's arrow at the defenceman it is meant to be pulling, or
 * shades an "open" high slot that still contains the man who has not left it — and
 * a pair dissolves both. Frame one: the driver going, the defenceman still high and
 * standing in the high slot, and no shading, because the ice is not open yet.
 * Frame two: the defenceman bent low, the high slot shaded and empty, and a
 * teammate arriving into it. The deferral was right about one frame and wrong about
 * two, and leaving the note standing beside the drawing would have been a comment
 * saying this cannot be done next to the thing being done.
 *
 * A BEFORE AND AFTER, and the captions say so. This is the opposite case from the
 * alternatives pairs elsewhere in the corpus: these two frames really are a beat
 * apart, and reading them as two options would destroy the claim, which is causal —
 * the drive is what bends the defence.
 *
 * SAFETY. The driver's route stops more than twenty feet short of the goalmouth and its
 * terminal tangent is more than ninety degrees off the bearing to the defenceman it
 * is pulling, so nothing here is a contact picture. What happens in the last few
 * feet of a genuine net drive is body contact in front of a goaltender, which this
 * section does not teach and this diagram does not show.
 *
 * NO PUCK. The section places it nowhere — its whole subject is the player who does
 * not have it — and the two things it says the drive opens are the high slot and
 * the point, so a carrier drawn in either would fill the space the picture exists
 * to show. Nor is the third of the drive's three effects drawn: "a rebound and
 * deflection threat, which changes the goalie's depth and attention" is not
 * spatial. Both are said in the captions rather than left as silent omissions.
 * ------------------------------------------------------------------------- */

// The defenceman the drive is pulling. Frame one: standing in the high slot, which
// is why the high slot is not shaded there. Frame two: bent low, on the line
// between the driver and his own goalmouth, nine feet clear of the driver and
// eleven of his own goaltender — at five feet from the goaltender, which is where
// he first went, the two triangles were drawn on top of each other.
const D6_D_HIGH = { at: 'high-slot', dx: -2, dy: 4 };        // (67, 4)
const D6_D_LOW = { at: 'slot', dx: 2, dy: 9 };               // (78, 9)
// The driver. Starts wide at the top of the strong-side circle and finishes short
// of the net front and off the line between the defenceman and his own goal.
const D6_DRIVE_FROM = { at: 'top-of-circle:right', dx: -4, dy: 2 };  // (50, 24)
const D6_DRIVE_TO = { at: 'net-front', dx: -13, dy: 14 };           // (71, 14)
// The late man. Frame one at the far point, frame two halfway down and still
// outside the high slot, so that in frame two the shaded region contains nobody.
const D6_LATE_START = { at: 'point:left', dx: 6, dy: 6 };    // (31, -14)
const D6_LATE_MID = { at: 'point:left', dx: 20, dy: 8 };     // (45, -12)
const D6_LATE_TO = { at: 'high-slot', dx: -6, dy: -5 };      // (63, -5)

// "the high slot (dots to the top of the circles)" — the section's own
// parenthesis, and the glossary's definition, so the polygon is those four named
// positions and nothing else.
// parenthesis, and the glossary's own polygon in rink_map_and_glossary.mjs, which
// owns the definition: the four named positions with the circle radius taken off
// the sides, so the band is the ice BETWEEN the circles rather than a rectangle
// laid across them. (positions.mjs shades the full 44-foot-wide rectangle instead.
// The two disagree, the owner is the glossary, and that is a finding about
// positions.mjs rather than something to copy here.)
const CIRCLE_RADIUS = 15;
const HIGH_SLOT = {
  points: [
    { at: 'top-of-circle:right', dy: -CIRCLE_RADIUS },
    { at: 'faceoff-dot:right', dy: -CIRCLE_RADIUS },
    { at: 'faceoff-dot:left', dy: CIRCLE_RADIUS },
    { at: 'top-of-circle:left', dy: CIRCLE_RADIUS },
  ],
  label: 'the high slot',
};

const driveTheNetBefore = {
  id: 'drive-the-net-before',
  owner: 'content/hockey-iq/playing_without_the_puck.md',
  half: true,
  width: 900,

  caption:
    'The first of two frames a beat apart, in the attacking end with the opposition net at the ' +
    'right: you are skating hard at the net without the puck, and the defender you are about to ' +
    'pull is still high, standing in the high slot — the ice between the two faceoff circles, ' +
    'from the dots up to the tops of them. That ice is deliberately not shaded here, because it is not open yet: the ' +
    'man who has to leave it has not left it, and a picture that shades it now would be claiming ' +
    'the result before the cause. The drive has to be genuine — a half-hearted glide does not ' +
    'move anybody, and if you are going, go as if you expect the puck — which is the one thing a ' +
    'still frame cannot show you, so read the arrow as effort rather than as a path. It stops ' +
    'more than twenty feet short of the goalmouth and off the defender’s line on purpose: what ' +
    'happens ' +
    'in the last few feet of a net drive is contact in front of a goaltender, which this picture ' +
    'does not teach. No puck is drawn at all, because the whole subject here is the player who ' +
    'does not have it.',

  describe:
    'The attacking half of the rink, the opposition net and goaltender at the right. One of your ' +
    'forwards starts wide, at the top of the near faceoff circle, with a curved route driving in ' +
    'toward the net front that stops well short of it and to one side. One opposition defenceman ' +
    'stands in the high slot, level with the faceoff dots and just off the middle of the ice, ' +
    'between the driver and the net. A second forward of yours stands at the far point with no ' +
    'route, not yet involved. Nothing is shaded. No puck is drawn, and neither are the rest of ' +
    'either team.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: D6_D_HIGH, label: 'high, in the slot' },
    { id: 'F', pos: 'F', at: D6_DRIVE_FROM, label: 'drives the net' },
    { id: 'F', pos: 'F', at: D6_LATE_START, label: 'the late man' },
  ],

  routes: [
    // Bowed so the route finishes running across the net front rather than turning
    // in toward the defenceman: the terminal tangent is about 106 degrees off the
    // bearing back to him. Bowed the other way it comes back to about 78, which is
    // still legal and much less clearly so.
    { from: D6_DRIVE_FROM, to: D6_DRIVE_TO, kind: 'skate', bow: -3 },
  ],
};

const driveTheNetAfter = {
  id: 'drive-the-net-after',
  owner: 'content/hockey-iq/playing_without_the_puck.md',
  half: true,
  width: 900,

  caption:
    'The same drive a beat later — this pair is a before and an after, not two alternatives, and ' +
    'the second frame is the reason for the first. The defender has bent low with the driver, ' +
    'because leaving a man driving the goalmouth is unacceptable to any defenceman, and the high ' +
    'slot he was standing in is now shaded and empty; that ice, and the point behind it, is what ' +
    'the drive opens, and a teammate arriving into it late is how it gets ' +
    'cashed. Neither of the two players who matter here has the puck, which is the ' +
    'whole point about the work nobody claps for, so no puck is drawn. The drive does a third ' +
    'thing this picture cannot show — it makes a rebound and deflection threat, which changes the ' +
    'goaltender’s depth and attention — and the shaded band is a name for a piece of ice, not ' +
    'something painted on a real rink. Only the defender who is pulled is drawn, because he is ' +
    'the only one the play fixes: where the other four defenders are, and where the arriving ' +
    'teammate starts from, are not fixed, so read his route as one instance ' +
    'and not as a place to stand.',

  describe:
    'The attacking half of the rink, the opposition net and goaltender at the right, a beat after ' +
    'the previous diagram. The driver has arrived, standing more than twenty feet out from the ' +
    'goalmouth and to one side, where the previous frame’s route ended, and he has no route now. ' +
    'The opposition defenceman who was in the high slot has come down with him and now stands ' +
    'between him and the net and well outside the crease. The high slot — the band between the ' +
    'two faceoff circles, from the dots up to the tops of them — is shaded, labelled, and ' +
    'contains nobody. Your second forward, ' +
    'who was at the far point, is halfway down with a route finishing inside that shaded region ' +
    'and running across it rather than on toward the net. No puck is drawn.',

  zones: [HIGH_SLOT],

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: D6_D_LOW, label: 'pulled low' },
    // Where frame one's route ended. If these two ever disagree the pair stops
    // being a pair. Deliberately unlabelled: the two labels this frame carries are
    // the two things it teaches, and a third one down here had nowhere to go — the
    // placer put "came with him" straight across the zone's own label, which is
    // drawn at the polygon's centroid and is invisible to the placer. He is named
    // in the caption and in the frame beside this one.
    { id: 'F', pos: 'F', at: D6_DRIVE_TO },
    { id: 'F', pos: 'F', at: D6_LATE_MID, label: 'arrives late' },
  ],

  routes: [
    // Bowed so it finishes flat, running into the high slot rather than on through
    // it at the net: the terminal tangent is 40 degrees off the bearing to the
    // defenceman now standing at the net front and 66 off the driver. Drawn
    // straight it finished within 8 degrees of the defenceman's back, which is the
    // shape this project has twice graded Critical. It does finish 14 degrees off
    // the bearing to the goaltender 23 feet away, which is deliberate and not the
    // same thing: a player arriving in the high slot is arriving to shoot, and
    // width-makes-the-middle-lane in this same file already draws a carry
    // finishing dead at the goaltender from 38 feet. The constraint is skaters.
    { from: D6_LATE_MID, to: D6_LATE_TO, kind: 'skate', bow: 4 },
  ],
};

/* ------------------------------------------------------------------------- *
 * DELIBERATELY NOT DRAWN
 *
 * - "Layer, do not duplicate". The section hands the geometry to Puck Support and
 *   Spacing in terms ("how far behind and how far off to the side to sit... take
 *   the distances from there rather than from memory"). A diagram is a distance.
 * - Backchecking lanes. Three named alternatives, all coaching choices, with the
 *   full treatment owned by Defending the Rush. A picture of one of the three is
 *   the cardinal-rule failure in its most absolute-looking form.
 * - The scramble priority list, the four off-puck states, effort, habit, attention,
 *   the possession arithmetic, and the bench questions. None of them are spatial.
 *
 * RESOLVED, and left here as a record. "Drive the net" was on this list, on the
 * grounds that a single frame cannot carry a two-moment claim. That was correct
 * and it was not a reason not to draw it: it was a reason to draw two frames. See
 * drive-the-net-before / drive-the-net-after above.
 * ------------------------------------------------------------------------- */

export default [
  stickLaneBodyNet,
  loosePuckWhoGoes,
  unmarkedNotAvailable,
  screenSightline,
  widthMakesTheMiddle,
  driveTheNetBefore,
  driveTheNetAfter,
];
