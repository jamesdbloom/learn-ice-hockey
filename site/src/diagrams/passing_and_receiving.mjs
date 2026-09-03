/**
 * Diagrams for content/technique/passing_and_receiving.md.
 *
 * The section is the source of truth. Every player below is one its prose places,
 * every route is a puck path or a skating route its prose describes, and where the
 * prose hedges, the caption hedges.
 *
 * WHY THIS FILE EXISTS. `passing_and_receiving.md` embedded four diagrams and owned
 * none of them — the most-borrowing document in the corpus. Its subject is also the
 * one thing in `technique/` these primitives can draw: its siblings are body
 * mechanics — knee bend, grip pressure, cupping the blade — and a rink map cannot
 * show a wrist. This document is a taxonomy of puck trajectories between players on
 * a sheet of ice, which is exactly what a rink map is for.
 *
 * WHAT IS DRAWN, AND WHY THOSE THREE.
 *
 *   area-pass-into-space  §"Area pass / chip into space — passing to a place, not a
 *                         person". What the picture holds and a sentence does not is
 *                         the ABSENCE of a receiver at the target: "you are not
 *                         aiming at a blade; you are aiming at a patch of ice."
 *   lead-the-receiver     §"How to judge the lead", inside §"Passing Into Space vs
 *                         Onto the Tape". "You are aiming at a place in the future"
 *                         is a claim about one player at two times, and the picture
 *                         holds both at once — where he is, and where the puck is
 *                         going.
 *   bank-pass-angle       §"Bank / board pass — the boards as a teammate". "Play the
 *                         angle, not the target" is a statement about reflection,
 *                         and a reflection is a shape.
 *
 * WHAT IS DELIBERATELY NOT DRAWN. Recorded here so the next author does not
 * rediscover it, and because "not drawable" is a finding rather than an omission:
 *
 *   Rim vs reverse    NOT DRAWN, and not an oversight. `winger-dz-rim` and
 *                     `winger-dz-reverse` in positions.mjs already draw the pair,
 *                     this document already embeds both, and a third "contrast"
 *                     picture would duplicate two owned diagrams under a new id. The
 *                     section's teaching is the CHOICE between them, and one still
 *                     frame cannot hold two different checker positions — which is
 *                     why positions.mjs drew two in the first place.
 *   Saucer pass       NOT DRAWABLE. The pass is defined by its height: "open the face
 *                     of the blade slightly, like a wedge", "land it a few feet short
 *                     of the receiver's blade". This is a plan view and the notation
 *                     has no elevation symbol at all, so a flat line labelled
 *                     "saucer" would be a flat pass with a caption arguing otherwise.
 *   Drop pass         NOT DRAWABLE TODAY. Both published keys carry a drop-pass mark
 *                     and `rink.mjs` defines `droppuck` — but `playSvg` THROWS on it
 *                     rather than draw it, deliberately: unimplemented, it would
 *                     render as forward skating, which means something else. Adding
 *                     the glyph is a change to the shared renderer, not to this file.
 *   Pass to the side  CONSIDERED AND DECLINED. §"Passing Mechanics That Matter" item
 *   away from the     5 is spatial — "if a defender is closing from their left, put
 *   checker           the puck on their right" — but the teaching is the CONFLICT
 *                     between forehand and away-from-the-checker, and a glyph has no
 *                     facing and no handedness. The picture could show the resolved
 *                     answer and not the thing being resolved. It would also have
 *                     needed a checker converging on a receiver whose facing an
 *                     arriving pass fixes, which is a contact claim this section does
 *                     not make.
 *   Give-and-go       CONSIDERED AND DECLINED on cost. The section defines it in one
 *                     clause of one sentence; a picture would restate a sentence and
 *                     add a second place a correction has to reach.
 *
 * PERSONNEL IS NOT SHAPE, and there is no neutral glyph — a circle is a forward and a
 * triangle a defenceman, so every glyph is a personnel claim whether the diagram
 * wants one or not. This document is about a skill, not about who is on the ice, so
 * each caption discloses what was drawn and says the section does not name it. Where
 * the prose DOES name a position it is followed literally: "your winger" is a circle,
 * and "a defender who is standing you up at the blue line" is a triangle, which is
 * key (A)'s own `▲ △ Defender / Player` row.
 *
 * ⚠️ WHICH `rink.json` EVERY MEASUREMENT BELOW ASSUMES: site/src/data/rink.json AS ON
 * DISK IN THIS WORKING TREE. The datums used are
 *     blue-line        (25, 0)        half-wall:right   (69, 38.5)
 *     high-slot        (69, 0)        crease            (86, 0)
 *     sheet 200 x 85, corner radius 28
 * so the side boards are at |y| = 42.5 and are STRAIGHT for |x| <= 72 — which the
 * bank diagram depends on, because a reflection off a curved wall is not the mirror
 * angle the section describes. Ink figures are read off `rink.mjs`'s `GLYPH_INK`: a
 * forward's circle is r 2.9 with a 1.95 halo stroke centred on it, so 3.875 ft of
 * ink, and a defenceman's triangle is 3.6 circumradius plus a 1.0 halo, so 4.6. Two
 * glyphs therefore need about 7.8 ft between centres (two forwards) or 8.5 (a forward
 * and a defenceman) before their halos touch, and a puck (r 1.1) needs about 5 ft off
 * a forward. If any of those move, re-derive; do not adjust a drawing to match a
 * stale comment.
 */

// ---------------------------------------------------------------------------
// 1 — the area pass: a place, not a person.
//
// Section: "### Area pass / chip into space — passing to a place, not a person". Its
// own worked example is drawn, and nothing else: "the classic case is chipping a puck
// past a defender who is standing you up at the blue line, into the space behind them
// where your winger is already skating."
//
// THE ONE THING THE PICTURE MUST SAY THAT THE SECTION DOES NOT WORD: the winger is
// drawn SHORT OF THE BLUE LINE. Draw him inside it with the puck still in the neutral
// zone and the picture is a diagram of an off-side. The rule is not imported from
// outside the document — this same document states it at §"Stretch pass", quoting NHL
// Rule 83.1, and works through the two books of four that judge a lifted trail skate
// differently. The caption carries the constraint and points at that section rather
// than restating a book-by-book rule a caption cannot hold.
// ---------------------------------------------------------------------------

// Eleven feet outside the attacking blue line, on the right-hand side of the ice. The
// section does not place him; what it fixes is that the defender is between him and
// the space, which is what these three coordinates exist to produce.
const CHIP_CARRIER = { at: 'blue-line', dx: -11, dy: 18 };   // (14, 18)
// "a defender who is standing you up at the blue line" — one foot INSIDE the line,
// i.e. on his own side of it, and six feet towards the middle. 13.42 ft from the
// carrier, so a 3.875 ft circle and a 4.6 ft triangle keep 4.9 ft of ice between them.
const CHIP_DEF = { at: 'blue-line', dx: 1, dy: 12 };         // (26, 12)
// "your winger is already skating" — wider than the carrier and BEHIND him, which is
// what makes the chip a race he can win. 10.77 ft from the carrier; his 3.875 ft of
// ink reaches y = 31.88 against boards at 42.5.
const CHIP_WINGER = { at: 'blue-line', dx: -15, dy: 28 };    // (10, 28)
// His route ends FOUR FEET SHORT OF THE BLUE LINE. See the note above: that is the
// whole reason this geometry is what it is. Arrival, measured on the drawn curve: the
// tip is 16.76 ft from the opposing defenceman and the terminal tangent misses his
// anchor by 16.00 ft, against `rink.mjs`'s ARRIVAL thresholds of 9 ft (arrowhead) and
// 2.9 ft (tangent). The route is not aimed anywhere near him.
const CHIP_WINGER_TO = { at: 'blue-line', dx: -4, dy: 28 };  // (21, 28)
// The chip, finishing INSIDE the shaded patch rather than at its edge, so the picture
// says the puck goes to the ice rather than to the boundary of an idea. It passes
// 7.44 ft from the defenceman's anchor — 2.8 ft clear of his triangle's ink — which is
// what "past a defender" looks like when the defender is the reason for the play.
const CHIP_TO = { at: 'blue-line', dx: 13, dy: 21 };         // (38, 21)

const areaPass = {
  id: 'area-pass-into-space',
  owner: 'content/technique/passing_and_receiving.md',
  half: true,
  width: 900,

  caption:
    'An area pass at the attacking blue line, and the one thing about it a picture can show and a ' +
    'sentence cannot: there is nobody at the target. A defender has stood the puck carrier up at the ' +
    'line, so rather than pass to his winger the carrier chips the puck into the shaded patch of ice ' +
    'behind that defender — a place, not a person. That is the whole idea. A pass aimed at a body can ' +
    'be intercepted and a pass aimed at a patch of ice cannot, so the play becomes a race instead of a ' +
    'turnover, which is also why it is only a good play if the winger has a genuine speed or angle ' +
    'advantage: an area pass into a defender’s feet with nobody chasing it is giving the puck away ' +
    'politely. Put it flat, with enough pace to get past the nearest defender’s stick but not so much ' +
    'that it runs to the far boards ahead of your teammate. The winger is drawn still short of the blue ' +
    'line on purpose, because a receiver whose skates both cross the leading edge of the blue line before ' +
    'the puck does is off-side — the stretch-pass section works that rule through, including the two ' +
    'books of the four that judge a lifted trail skate differently. On the personnel: the opponent is a ' +
    'triangle because the section calls him a defender and the receiver a circle because it calls him a ' +
    'winger, but the player with the puck is drawn as a forward only because this notation has no glyph ' +
    'without a position in it, and the section does not say who he is.',

  describe:
    'The attacking half of the rink, attacking to the right, with the blue line running down the picture ' +
    'about a quarter of the way across and the opposition net at the far right, their goaltender in the ' +
    'crease. Three skaters. Your puck carrier stands in the neutral zone, eleven feet outside the blue line and on ' +
    'the right-hand side of the ice, with the puck beside him. An opposition defenceman, drawn as a ' +
    'solid triangle, stands one foot inside the blue line and about six feet closer to the middle, ' +
    'between the carrier and the ice beyond him. Your winger is wider still and further back, about ten ' +
    'feet from the carrier; a plain skating arrow runs from him straight up the ice and stops four feet ' +
    'short of the blue line. A shaded rectangle of ice, fourteen feet by twelve, sits inside the ' +
    'attacking zone beginning eight feet beyond the defenceman. A dashed passing route leaves the ' +
    'carrier, passes about seven feet clear of the defenceman, and its arrowhead finishes inside that ' +
    'shaded patch. No player is drawn at the end of the pass.',

  zones: [
    // The patch of ice the pass is aimed at: 14 ft by 12, beginning 9 ft inside the
    // blue line and 8 ft beyond the defenceman. Deliberately UNLABELLED — a zone label
    // is drawn at the polygon's centroid, here (41, 24), and is invisible to the label
    // placer, so it cannot be moved out of the way of the arrowhead that finishes 3 ft
    // below it. `unmarked-but-unavailable` leaves its band unlabelled for the same
    // reason. The caption and the `describe` name it instead.
    {
      points: [
        { at: 'blue-line', dx: 9,  dy: 18 },   // (34, 18)
        { at: 'blue-line', dx: 23, dy: 18 },   // (48, 18)
        { at: 'blue-line', dx: 23, dy: 30 },   // (48, 30)
        { at: 'blue-line', dx: 9,  dy: 30 },   // (34, 30)
      ],
    },
  ],

  players: [
    // The opposition goaltender. He is 60 ft from anything that happens here and
    // takes no part in it — he is drawn because an attacking net with nobody in it
    // is a claim about a game state this diagram is not making. `lead-the-receiver`
    // carries one for the same reason.
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: 1 } },   // (87, 0)
    { id: 'P', pos: 'F', at: CHIP_CARRIER, label: 'you' },
    // A triangle, because the section calls him a defender — key (A)'s own
    // "Defender / Player" row — and solid, because he is the opposition.
    { id: 'D', team: 'opp', pos: 'D', at: CHIP_DEF, label: 'stands you up' },
    { id: 'W', pos: 'F', at: CHIP_WINGER, label: 'already skating' },
  ],

  routes: [
    // Forward skating for the winger. The puck is not on his stick, so this is not a
    // carry: he is racing the chip, not carrying it.
    { from: CHIP_WINGER, to: CHIP_WINGER_TO, kind: 'skate' },
    { from: CHIP_CARRIER, to: CHIP_TO, kind: 'pass' },
  ],

  // At the carrier's feet: 5.70 ft from his centre, so 0.72 ft of white outside his
  // ink and the puck's, and 4.03 ft off the passing route so it does not read as part
  // of the dash pattern. ⚠️ IT WAS AT (18.5, 21.5) AND THAT WAS WRONG FOR A REASON
  // ARITHMETIC DOES NOT SHOW: the neutral-zone faceoff dot is at (20, 22), so the
  // black puck (r 1.1) overlapped the red dot (r 1) at 1.58 ft between centres. Found
  // by rendering at 375 px, not by measuring against players. It is now 7.60 ft from
  // that dot, and 7.91 ft from the defenceman against 5.70 from the carrier, so it
  // reads as the carrier's puck.
  puck: { at: 'blue-line', dx: -6.5, dy: 14.5 },              // (18.5, 14.5)
};

// ---------------------------------------------------------------------------
// 2 — the lead: aiming at a place in the future.
//
// Section: "### How to judge the lead", inside "## Passing Into Space vs Onto the
// Tape". "Pick a catch-point, then pass to it. Do not try to track a moving blade with
// your eyes. Choose the spot where their stick will be when the puck arrives, and pass
// to that spot. You are aiming at a place in the future."
//
// THE PICTURE IS THE TWO POSITIONS AT ONCE. The receiver's glyph is where he is; the
// end of the pass is where his stick will be; the gap between the end of his skating
// route and the end of the pass is the lead. Nothing else is drawn and nothing else is
// needed: the section describes a passer and a receiver, so filling the ice with
// defenders would author a situation it does not describe.
//
// ⚠️ THE ANGLE BETWEEN THE TWO ARROWS IS THE WHOLE LEGIBILITY OF THIS PICTURE, and the
// first two attempts failed on it. Drawn with the passer across the ice and the pass
// running nearly perpendicular to the receiver's route — 132 degrees between the two
// bearings — the render showed a pass going one way and a skater going another, and
// the reader had to extend a line to see that they meet. The two now converge at 39.7
// degrees, so the arrowheads point the same general way and the pass visibly overtakes
// the skater. Nothing but the rendered page finds this: every distance in the earlier
// version checked out.
//
// NO SECOND, WRONG PASS. "Aiming at a moving teammate's current position" is in the
// section and in Common Mistakes, and it is tempting to draw both and mark one bad.
// There is no glyph for a pass you should not make: a dashed line with an arrowhead
// means "the puck goes here", and two of them would read as two options. The caption
// carries the failure instead.
// ---------------------------------------------------------------------------

// The passer, just inside the attacking blue line and above the middle. He is
// stationary and has no route: the section's subject is where he puts the puck, not
// where he goes. 18.11 ft from the receiver.
const LEAD_PASSER = { at: 'blue-line', dx: 7, dy: 10 };            // (32, 10)
// The receiver as he is NOW.
const LEAD_RECEIVER = { at: 'blue-line', dx: 9, dy: -8 };          // (34, -8)
// Where his own route stops: 11.96 ft along his line of travel, which runs up-ice and
// slightly towards the middle. He has not arrived.
const LEAD_R_TO = { at: 'blue-line', dx: 20.6, dy: -5.1 };         // (45.6, -5.1)
// The catch-point: 24.0 ft along the SAME line, so 12.05 ft beyond the end of his
// arrow, and it lies on the extension of that arrow (measured 0.01 ft off it), which
// is the claim the picture exists to make. It sits in clear ice between the two
// faceoff circles — 23.0 ft from one centre and 26.9 from the other, against a 15 ft
// circle — a little inside the tops of them, which is the high slot as this document's
// own note on language defines it.
const LEAD_CATCH = { at: 'high-slot', dx: -11.7, dy: -2.2 };       // (57.3, -2.2)

const leadTheReceiver = {
  id: 'lead-the-receiver',
  owner: 'content/technique/passing_and_receiving.md',
  half: true,
  width: 900,

  caption:
    'Passing into space rather than onto the tape. The receiver is moving, so the pass is not aimed at ' +
    'him: it is aimed at the spot where his stick will be when the puck arrives, and the gap between the ' +
    'end of his skating arrow and the end of the pass is the lead. Pick that catch-point and pass to it, ' +
    'rather than trying to track a moving blade with your eyes, and read his feet rather than his chest, ' +
    'because his skates tell you where he is actually going and how fast. The two variables trade against ' +
    'each other — faster receiver, longer lead; harder pass, shorter lead — and when in doubt, lead him ' +
    'slightly, because a pass marginally ahead can be skated onto and a pass behind cannot be skated ' +
    'backwards onto. Aim where he is now and the puck arrives behind him, and he has to reach back, slow ' +
    'down or turn, every one of which kills the speed that made the play dangerous. This is not the area ' +
    'pass: that one aims at ice nobody owns yet and turns the play into a race, and this one aims at one ' +
    'particular teammate’s stick a moment from now. Two things the picture cannot hold. It cannot show ' +
    'which way either player is facing, and it cannot show which side is the receiver’s forehand — the ' +
    'section wants the puck slightly ahead and on the forehand, and away from the checker where those two ' +
    'conflict. No opponents are drawn but the goaltender, because the section describes a passer and a ' +
    'receiver only, and both are drawn as forwards, which the section does not say. The lead is judged ' +
    'the same way anywhere on the ice, although which passes are worth making is not: in your own end the ' +
    'standard is certainty rather than value.',

  describe:
    'The attacking half of the rink, attacking to the right, the opposition net at the right with their ' +
    'goaltender in the crease. Two of your players and no other opponents. Your passer stands just inside ' +
    'the attacking blue line, a little above the middle of the ice, with the puck beside him. Your ' +
    'receiver stands eighteen feet away, also just inside the blue line but below the middle. A plain ' +
    'skating arrow runs from the receiver about twelve feet up-ice, angled slightly towards the middle. A ' +
    'dashed passing route runs from the passer diagonally up-ice and across, staying about fifteen feet ' +
    'clear of the receiver, and its arrowhead finishes twelve feet beyond the end of the receiver’s arrow ' +
    'and on the straight continuation of it, in the middle of the ice between the two faceoff circles. ' +
    'The two arrowheads point in similar directions, about forty degrees apart, and no player is drawn ' +
    'at either of them.',

  players: [
    // The opposition goaltender, drawn for one reason: without him the attacking net
    // reads as empty, which is a claim about a game state this diagram is not making.
    // He is 29.78 ft from the catch-point and no route goes near him.
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: 1 } },   // (87, 0)
    { id: 'P', pos: 'F', at: LEAD_PASSER,   label: 'you' },
    { id: 'R', pos: 'F', at: LEAD_RECEIVER, label: 'where he is now' },
  ],

  routes: [
    { from: LEAD_RECEIVER, to: LEAD_R_TO, kind: 'skate' },
    { from: LEAD_PASSER, to: LEAD_CATCH, kind: 'pass' },
  ],

  // 5.39 ft from the passer and 3.64 ft off the passing route, on the up-ice side of
  // him. The receiver's own route is 15.34 ft from that route at its nearest, so the
  // pass is nowhere near running through him.
  puck: { at: 'blue-line', dx: 9, dy: 5 },                           // (34, 5)
};

// ---------------------------------------------------------------------------
// 3 — the bank pass: play the angle, not the target.
//
// Section: "### Bank / board pass — the boards as a teammate". "Play the angle, not
// the target. The puck comes off the boards at roughly the mirror of the angle it goes
// in at, so aim at the spot on the wall that reflects toward your teammate, not at
// your teammate." Drawn as the section's own first listed use — "to beat a forechecker
// along the wall" — which is why your own net is at the right of this one.
//
// THE MIRROR IS SOLVED FOR, NOT EYEBALLED. With the passer at (80, 32) and the
// receiver at (44, 20), the reflection point on the boards at y = 42.5 is x = 68.5:
// the incoming leg meets the wall normal at 47.6 degrees and the outgoing leg at 47.4.
// The drawn vertex is pulled 0.8 ft off the wall, to (68.5, 41.7), so the arrowhead
// does not overprint the 0.6-wide board stroke; that shortening moves the drawn angles
// to 49.9 and 48.5 degrees, a difference of under two degrees and invisible at this
// scale. The section's own words are "roughly the mirror", so the drawing sits inside
// its hedge either way.
//
// ⚠️ THE WALL MUST BE STRAIGHT HERE. x = 68.5 is inside the corner arc, which begins at
// |x| = 72 for a 28 ft corner radius. A reflection off the curve is not the mirror
// angle the section describes, so moving this play a few feet towards the end boards
// would quietly falsify the picture without changing a word of the caption.
//
// WHY IT IS NOT A RIM, which matters more in this document than in most: the section
// immediately below polices exactly that conflation. A rim is "hard, flat and low on
// the boards, following the curve of the rink", and `winger-dz-rim` draws one as a
// single route BOWED INTO the wall so that it hugs it. This is two straight legs
// meeting at a point, and the puck leaves the wall on a new bearing into the ice. The
// two pictures are not drawn with the same mark and cannot be confused.
//
// NO SKATING ROUTES AT ALL. Nobody in this section moves: it describes a puck path
// past a stationary obstacle. The checker in particular is drawn where his body is and
// given no route, so the picture makes no claim about contact.
// ---------------------------------------------------------------------------

// You, with the puck, along the boards out towards the corner and 9.3 ft off the wall
// — far enough off it to have an angle into it, which is what the play needs. The
// boards curve at this x, so the clearance is measured to the arc: your ink reaches
// y = 35.88 against a wall at y = 41.33 for x = 80.
const BANK_PASSER = { at: 'half-wall:right', dx: 11, dy: -6.5 };    // (80, 32)
// The forechecker, standing EXACTLY on the straight line from you to your teammate
// (measured 0.00 ft off it), because "a defender's stick or body sits in the direct
// lane" is the whole precondition for the play. He is drawn where his BODY is, as
// `unmarked-but-unavailable` does — this notation has no stick symbol, so the reach
// into the lane is not drawn at all. 12.65 ft from you and 25.30 from the receiver.
const BANK_CHECKER = { at: 'half-wall:right', dx: -1, dy: -10.5 };  // (68, 28)
// The teammate: up-ice and 22.5 ft off the wall. Off the wall is the point — a
// receiver ON the boards further round would make this a rim, which is a different
// play in the section immediately below.
const BANK_RECEIVER = { at: 'half-wall:right', dx: -25, dy: -18.5 };// (44, 20)
// The spot on the wall you actually aim at. See the note above for the solved
// reflection and for why the drawn vertex sits 0.8 ft inside the boards.
const BANK_WALL = { at: 'half-wall:right', dx: -0.5, dy: 3.2 };     // (68.5, 41.7)
// The second leg stops 4.53 ft short of the receiver rather than on him, so its
// arrowhead is not buried under his glyph — the same stand-off `support-angles` uses,
// and the defect its own note records.
const BANK_TO = { at: 'half-wall:right', dx: -21.6, dy: -15.5 };    // (47.4, 23)

const bankPass = {
  id: 'bank-pass-angle',
  owner: 'content/technique/passing_and_receiving.md',
  half: true,
  width: 900,

  caption:
    'A bank pass off the boards, drawn in your own end: your own net is at the right of this picture and ' +
    'up-ice is to the left. A forechecker’s body sits in the direct lane between you and your teammate, ' +
    'so the puck is not sent at the teammate at all. It is sent at a spot on the wall, chosen so that the ' +
    'puck comes off the boards at roughly the mirror of the angle it went in at and arrives where he is: ' +
    'play the angle, not the target. That is also the entire safety argument for the play, and it is ' +
    'worth keeping apart from the reliability of it, because they are two different things. It is safe ' +
    'because the puck never travels through the lane the checker is defending — it goes behind him, off a ' +
    'wall he cannot cover, so there is nothing for a stick or a skate to intercept. It is only moderately ' +
    'reliable because the bounce is not fully predictable and board liveliness genuinely varies from rink ' +
    'to rink, which is why you test a bank in warm-up and why you call it: a puck your teammate is not ' +
    'expecting is a turnover however well it beat the checker. Two things this picture cannot show, and ' +
    'they are the two that decide whether the bounce is true — keep the puck flat and firm, and hit the ' +
    'boards low, because contact near the bottom of the boards gives the truest bounce and higher up you ' +
    'can catch the glass stanchion and lose the angle entirely. The checker is drawn where his body is; ' +
    'this notation has no stick symbol, so his stick reaching into the lane is not drawn. He is a circle ' +
    'because the section’s first example of this pass is beating a forechecker along the wall, and your ' +
    'teammate is a circle for no reason the section gives — it names nobody, and the geometry is the same ' +
    'whoever is in the lane and whoever is receiving.',

  describe:
    'One end zone, drawn with your own net at the right of the picture and up-ice to the left, so the ' +
    'play runs from right to left. Your goaltender is in the crease. You stand along the right-hand ' +
    'boards, out towards the corner and about nine feet off the wall, with the puck between you and the ' +
    'boards. An opposition forward, drawn as a solid circle, stands about thirteen feet up-ice of you and ' +
    'towards the middle, exactly on the straight line between you and your teammate; his stick is not ' +
    'drawn. Your teammate stands further up-ice again, roughly level with the top of the faceoff circle ' +
    'and about twenty-two feet off the boards, thirty-eight feet from you. The puck’s route is two ' +
    'straight dashed legs meeting at a point on the boards up-ice of you: the first runs from you out ' +
    'into the wall and its arrowhead points at the wall itself, and the second leaves that point at the ' +
    'mirror of the same angle, passes about ten feet outside the forechecker, and finishes four and a ' +
    'half feet short of your teammate. The straight line from you to your teammate, the one the ' +
    'forechecker is standing in, is not drawn.',

  players: [
    // Your own goaltender, for orientation: this is the one kind of picture in this
    // file where the net at the right is YOUR OWN, and the caption says so first.
    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },              // (85, 0)
    { id: 'P', pos: 'F', at: BANK_PASSER, label: 'you' },
    { id: 'F', team: 'opp', pos: 'F', at: BANK_CHECKER, label: 'in the direct lane' },
    { id: 'R', pos: 'F', at: BANK_RECEIVER, label: 'your teammate' },
  ],

  // Two legs, both `pass`, both straight. The first arrowhead points at the wall,
  // which is the instruction itself: aim at the spot, not at the man. Measured on the
  // drawn legs, the checker is 10.79 ft from the first and 9.92 ft from the second, so
  // the puck visibly goes round the outside of him.
  routes: [
    { from: BANK_PASSER, to: BANK_WALL, kind: 'pass' },
    { from: BANK_WALL, to: BANK_TO, kind: 'pass' },
  ],

  // On the boards side of you, 5.70 ft from your centre, 5.17 ft off the first leg,
  // and 2.24 ft inside the boards at its own x — the wall curves here, so that last
  // clearance is measured to the arc and not to y = 42.5.
  puck: { at: 'half-wall:right', dx: 12.5, dy: -1 },                 // (81.5, 37.5)
};

export default [areaPass, leadTheReceiver, bankPass];
