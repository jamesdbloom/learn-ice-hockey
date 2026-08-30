/**
 * Diagrams for content/systems/neutral_zone_systems.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * WHY THESE ARE FULL-SHEET (`half: false`). The neutral zone is the middle third,
 * and every structure here is defined by how five players are spread across the
 * *depth* of it as well as the width — F1 deep in the opponents' end and the
 * defence at your own blue line are 114 feet apart. Cropped to one half, a 1-2-2
 * loses its first number and a trap looks identical to a containment.
 *
 * ORIENTATION, held constant across all seven. **Our own net is always at the far
 * (left) end**, x = -89, and the end our team attacks is always +x. So:
 *
 *   - in the six defensive-structure diagrams our five hold the middle third and
 *     the *opponents* break out from the right and move right-to-left;
 *   - in the regroup diagram our five have the puck and move left-to-right.
 *
 * Either way "your own blue line" is x = -25 ('blue-line::far') and "their blue
 * line" is x = +25, which is the distinction the section keeps making and the one
 * a reader has to be able to take off the picture.
 *
 * A note on ':far' — the resolver splits on ':' into base/side/end, so an *unsided*
 * position needs the empty side slot: 'blue-line::far', not 'blue-line:far'. The
 * single-colon form silently resolves to the near end.
 *
 * A note on '+y' — the coordinate table calls +y "right", but that is a name for
 * the top of the drawing, not a skater's right hand. Nothing below claims a
 * skater's handedness or which physical side of a real rink anything is on; the
 * puck is put on the +y side throughout simply so "strong side" means one thing
 * across all seven pictures.
 */

// ---------------------------------------------------------------------------
// Shared anchors. Named once because several specs refer to the same feet.
// ---------------------------------------------------------------------------

const OUR_BLUE = 'blue-line::far';        // (-25, 0)  — "your own blue line"
const THEIR_BLUE = 'blue-line';           // ( 25, 0)  — "the opposing blue line"
const OUR_G = { at: 'crease::far', dx: 1 };   // (-85, 0)
const THEIR_G = { at: 'crease', dx: -1 };     // ( 85, 0)

// The lateral lanes. y = +-33 is a wall lane — a body skating a wall lane in open
// ice, about 9.5 ft off the dasher. It is NOT the coordinate table's `half-wall`,
// which is hard against the boards at y = +-38.5; this comment used to claim the
// two were the same figure, and they were, until half-wall was corrected. Nothing
// below is anchored to half-wall, so the pictures did not move — but do not
// "reconcile" the constant to half-wall's value on the strength of the old
// comment. (This said 40, which half-wall has never been: rink.json's own
// $comment records that 40 was tried and rejected for clipping wall players by
// half a foot, and 38.5 committed instead.) y = +-22 is
// the neutral-zone dot lane, which the glossary says defencemen defending the
// rush position between.
const WALL = 33;

// ---------------------------------------------------------------------------
// 1 — the 1-2-2 containment
// ---------------------------------------------------------------------------
//
// "One forward (F1) pressures near the opponent's goal line or hash marks. Two
// forwards (F2 and F3) sit across the middle of the neutral zone, usually near the
// opposing blue line or between it and the red line. Two defencemen hold the back
// layer, around your own blue line."
//
// The frozen shape has to BE 1-2-2 read from the puck outward: one glyph at x=89,
// two at x=15, two at x=-25. That is the whole reason this diagram exists — the
// section's own convention note ("named from the puck outward") is unreadable
// until you can see the three layers at once.

const C_F1 = { at: 'goal-line', dx: -4, dy: -22 };          // (85, -22) — "near the opponent's goal line", weak side
const C_F2 = { at: THEIR_BLUE, dx: -10, dy: 31 };          // (15, 31)  — middle third, strong-side wall
const C_F3 = { at: THEIR_BLUE, dx: -10, dy: -8 };          // (15, -8)  — same layer, middle/weak side
const C_CARRIER = { at: 'behind-net', dy: 6 };             // (94, 6)   — their D retrieving
const C_W1 = { at: THEIR_BLUE, dx: 8, dy: 34 };            // (33, 34)  — "the winger receiving on the boards"

const containment122 = {
  id: 'nz-1-2-2-containment',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,
  numbered: true,

  caption:
    'A 1-2-2 neutral zone structure, frozen as the opposing defence starts its breakout: one forward ' +
    'pressuring deep in the opponents’ end, two forwards across the middle third near the opposing ' +
    'blue line, and both defencemen holding the back layer at your own blue line. The layers are named ' +
    'from the puck outward, so the first number is the one closest to their net. F1 is not primarily ' +
    'trying to steal the puck — his job is to take the middle away, kill the D-to-D behind the net ' +
    'and show the carrier one side of the ice, which is why the route curves across rather than at the ' +
    'puck; F2 then steps up on the winger receiving on that wall, F3 holds the middle and weak side, and ' +
    'the weak-side defenceman stays home as the safety valve. The structure concedes the first pass by ' +
    'design, which is drawn here: F1 alone cannot generate real pressure, and a calm defence with time ' +
    'will break out cleanly against it. The strong-side defenceman’s step-up on the wall, which ' +
    'is deliberately not drawn, is the most dangerous decision in it. Every neutral-zone ' +
    'structure is a coaching choice, not a law. Find out which one your team plays, and what ' +
    'the signal is to change it.',

  describe:
    'The full sheet. Our own net is at the left, the opponents’ net at the right, and the opponents ' +
    'are breaking out from right to left. Three opposition players and their goaltender: the defenceman ' +
    'D1 behind their net with the puck, his partner D2 in the far corner as the D-to-D option, and the ' +
    'winger W1 on the strong-side wall just inside their blue line. Our five: F1 at the opponents’ ' +
    'goal line on the weak side; F2 and F3 side by side across the middle third just inside the opposing ' +
    'blue line, F2 on the strong-side wall and F3 in the middle; and both defencemen on our own blue ' +
    'line, the strong-side one in the dot lane and the weak-side one nearer the middle. Three numbered ' +
    'routes: one, F1 curves across behind the net taking the middle and the D-to-D away; two, the ' +
    'conceded first pass out to the winger on the wall; three, F2 steps up on that winger, arriving on ' +
    'his inside rather than into his back. The opposition centre, who can beat this ' +
    'structure by supporting low under F2 and F3, is not drawn.',

  players: [
    // Opposition: the three players the section names in this structure — the
    // carrier, the D-to-D partner F1's route exists to take away, and the winger
    // F2 steps up on. Nobody else is drawn, because the section names nobody else.
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },
    { id: 'D', team: 'opp', pos: 'D', at: C_CARRIER, label: 'puck carrier' },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'corner:left', dx: -6 }, label: 'the D-to-D' },
    { id: 'W', team: 'opp', pos: 'F', at: C_W1, label: 'receives on the wall' },

    // Ours. 1 - 2 - 2, read from the puck outward.
    { id: 'G', pos: 'G', at: OUR_G },
    { id: 'F1', pos: 'F', at: C_F1, label: 'forces one side' },
    { id: 'F2', pos: 'F', at: C_F2, label: 'takes the wall' },
    { id: 'F3', pos: 'F', at: C_F3, label: 'middle and weak side' },
    // "D1 (strong side) steps up on the wall if the puck gets past F2" — a
    // condition, so it is a label and not an arrow. A still frame cannot say "if".
    { id: 'D1', pos: 'D', at: { at: OUR_BLUE, dy: 18 }, label: 'steps up if beaten' },
    { id: 'D2', pos: 'D', at: { at: OUR_BLUE, dy: -8 }, label: 'stays home' },
  ],

  routes: [
    // 1 — F1 "skates a curved route that shows the puck carrier the boards and
    //     takes away the D-to-D pass behind the net". It stops behind the net and
    //     does not draw the finish of the angle: the corpus forbids finishing a
    //     forechecker's route aimed at the puck ("Do not skate at the puck. Skate
    //     at the space you want to deny"), and how an angle finishes is movement
    //     over time that a still frame cannot carry. Terminal tangent here runs
    //     across the back of the net at about 95 degrees, roughly 20 degrees off
    //     the line to the carrier — checked, not eyeballed.
    { from: C_F1, to: { at: 'behind-net', dx: -3, dy: -5 }, kind: 'skate', bow: -4 },
    // 2 — the conceded first pass. "It concedes the first pass. A calm defence
    //     with time will break out cleanly against it most of the time."
    //     Stopped ~6 ft short of the receiver: an arrowhead is 3 ft long, so a
    //     pass drawn all the way to a glyph arrives inside it.
    { from: C_CARRIER, to: { at: C_W1.at, dx: C_W1.dx - 4, dy: C_W1.dy - 4 }, kind: 'pass' },
    // 3 — "Once F1 has forced the play to a side, F2 steps up on the winger
    //     receiving on the boards." Checking pressure, per the key. It finishes
    //     inside the winger and short of him: a route that finished into the back
    //     of a player facing the boards would be a checking-from-behind picture.
    { from: C_F2, to: { at: THEIR_BLUE, dx: 2, dy: 30 }, kind: 'pressure' },
  ],

  puck: { at: 'behind-net', dx: -3.5, dy: 10 },
};

// ---------------------------------------------------------------------------
// 2 — the 1-2-2 trap
// ---------------------------------------------------------------------------
//
// "The trap is a 1-2-2 with the layers dropped back and the intent changed.
// Instead of F1 pressuring deep, F1 sits high in the opponent's zone or at their
// blue line, still splitting the ice in half... F2 and F3 sit at or just inside
// the red line on the walls. The defence holds your own blue line."
//
// Drawn as the deliberate pair with the containment above: same five glyphs, same
// ids, same shape name, ~50 feet of depth different. That contrast is the thing
// the section spends a paragraph on and the thing prose is worst at.

const T_CARRIER = { at: THEIR_BLUE, dx: 18, dy: 18 };      // (43, 18) — allowed to skate
const T_F2 = { at: 'centre-ice', dx: 2, dy: WALL };        // (2, 33)  — "at or just inside the red line"
const T_ARRIVAL = { at: 'centre-ice', dx: 12, dy: 31 };    // (12, 31) — where the carrier is steered to

const trap122 = {
  id: 'nz-1-2-2-trap',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,
  // Deliberately NOT numbered. The two routes converge on the same few feet of
  // ice — that convergence is the trap — and the badges, which sit a fixed
  // distance along each route, landed on top of the carry's arrowhead. With two
  // routes the order is not in doubt anyway.

  caption:
    'The same five players and the same 1-2-2 name with the layers dropped back and the intent changed ' +
    '— this is the neutral zone trap. F1 sits high in the opponents’ zone still splitting the ' +
    'ice in half, F2 and F3 are at the red line on the walls, and the defence holds your own blue line ' +
    'rather than contesting theirs. The structure has given up on stopping the attack: the carrier is ' +
    'allowed to skate and is steered to a wall, where he arrives at the red line into F2 stepping up ' +
    'with the strong-side defenceman behind him and no lane through the middle, so the turnover happens ' +
    'with the opponents’ forwards ahead of the puck and behind the play. Not every neutral-zone ' +
    '1-2-2 is a trap, and the tell is F2’s depth and F1’s speed — depth is what this ' +
    'picture can show, but the difference between an F1 who is closing and an F1 who is gliding is not ' +
    'something a still frame can carry, so compare this shape against the containment one rather than ' +
    'trusting either arrow. The pure passive trap is no longer a viable full-time system at high levels; ' +
    'it survives as a situational tool and as the DNA inside more modern structures.',

  describe:
    'The full sheet, our net at the left and the opponents’ at the right, with the opponents ' +
    'attacking right to left. One opposition defenceman carries the puck out of their zone; both ' +
    'goaltenders are shown. Our five: F1 alone just inside the opponents’ blue line in the middle ' +
    'of the ice; F2 and F3 level with each other at the centre red line, one on each wall; both ' +
    'defencemen on our own blue line, the strong-side one behind F2. Two routes: the carrier’s way ' +
    'out, curving toward the wall he is being steered to, and F2 stepping up as the carrier reaches the ' +
    'red line, finishing inside him rather than at him. F1 is drawn with no route at all, because in a ' +
    'trap F1 is not closing. Only the carrier is drawn of the opposition’s five skaters; this is not ' +
    'a five-on-one.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },
    { id: 'D', team: 'opp', pos: 'D', at: T_CARRIER, label: 'allowed to skate' },

    { id: 'G', pos: 'G', at: OUR_G },
    // "F1 sits high in the opponent's zone or at their blue line, still splitting
    // the ice in half" — so: middle of the ice, just inside their line, no route.
    { id: 'F1', pos: 'F', at: { at: THEIR_BLUE, dx: 6 }, label: 'high, splits the ice' },
    { id: 'F2', pos: 'F', at: T_F2, label: 'kills it at the red line' },
    { id: 'F3', pos: 'F', at: { at: 'centre-ice', dx: 2, dy: -WALL }, label: 'holds the far wall' },
    { id: 'D1', pos: 'D', at: { at: OUR_BLUE, dy: 20 }, label: 'behind F2' },
    { id: 'D2', pos: 'D', at: { at: OUR_BLUE, dy: -8 }, label: 'holds the line' },
  ],

  routes: [
    // 1 — "The puck carrier is allowed to skate — the trap does not want the puck
    //     at the start — and is steered to a wall." Bowed toward the boards, which
    //     is the direction the funnel sends him.
    { from: T_CARRIER, to: T_ARRIVAL, kind: 'carry', bow: -5 },
    // 2 — "they arrive at the red line into F2 stepping up". Checking pressure,
    //     finishing on the inside shoulder: F2 is taking the ice away, not running
    //     the carrier into the boards. It runs underneath the carry route rather
    //     than crossing it — F2 is taking the inside ice, which is where the
    //     carrier would otherwise cut back.
    { from: T_F2, to: { at: 'centre-ice', dx: 18, dy: 25 }, kind: 'pressure' },
  ],

  puck: { at: THEIR_BLUE, dx: 15, dy: 21 },
};

// ---------------------------------------------------------------------------
// 3 — the 1-3-1
// ---------------------------------------------------------------------------
//
// "One forward (F1) pressures. Three players stand spread across the ice in a line
// — conventionally F2 and F3 on the walls with one defenceman in the middle... One
// defenceman sits behind them as the last man."
//
// COUNT THE GLYPHS. One at x=22, three at x=-2, one at x=-25. A reader who counts
// a different shape from the name is worse off than with no picture, and the
// section's own reading drill is literally "count the bodies across the middle".

const NZ_WALL_X = { dx: -2 };                              // the three-man line, just inside the red line
const D131 = { at: 'centre-ice', dx: -2, dy: 0 };          // (-2, 0)  — the middle man, the read-maker
const F2_131 = { at: 'centre-ice', dx: -2, dy: WALL };     // (-2, 33)
const F3_131 = { at: 'centre-ice', dx: -2, dy: -WALL };    // (-2, -33)

const wall131 = {
  id: 'nz-1-3-1',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,

  caption:
    'A 1-3-1 in the neutral zone — count the rows and you get one, then three, then one: F1 ' +
    'pressuring alone, three players spread in a flat line across the width of the ice, and a single ' +
    'defenceman behind them as the last man. Conventionally the three across are F2 and F3 on the walls ' +
    'with a defenceman in the middle, and the middle man is the read-maker because he decides which way ' +
    'the whole line slides; some coaches put a forward in the middle and a defenceman on a wall instead, ' +
    'but what does not happen is three forwards across, because F1 is already one of your three. Each of ' +
    'the three takes a lane and they slide as a unit toward the puck — the short arrows — and ' +
    'their job is not to attack the puck but to leave no lane through them, which is the whole ' +
    'proposition: a 1-3-1 does not try to take the puck from you, it offers you the puck on terms you ' +
    'will not like. It is drawn with F1 up at the opponents’ blue line, but in the most passive ' +
    'versions F1 barely leaves the red line, and if one of the three leaves his lane to chase the puck a ' +
    'seam opens instantly, because the single defenceman behind cannot cover two lanes. Do not confuse ' +
    'this with the power play 1-3-1, which is a different shape in a different zone.',

  describe:
    'The full sheet, our net at the left, the opponents’ at the right, opponents attacking right to ' +
    'left. One opposition defenceman carries the puck out on the near-side wall; both goaltenders are ' +
    'shown. Our five in three rows: F1 alone in the middle of the ice just inside the opponents’ ' +
    'blue line; then F2 on one wall, a defenceman in the middle and F3 on the other wall, all three level ' +
    'with each other just inside the centre red line and spanning the width of the sheet; then a single ' +
    'defenceman alone on our own blue line, in the middle. Three short parallel arrows show the ' +
    'three-man line sliding as a unit toward the side the puck is on. There is deliberately open ice ' +
    'between the three-man line and our own blue line: that is the ice a stretch pass is aimed into. ' +
    'Only the carrier is drawn of the opposition’s five skaters; this is not a ' +
    'five-on-one.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },
    { id: 'D', team: 'opp', pos: 'D', at: { at: THEIR_BLUE, dx: 20, dy: 22 }, label: 'puck carrier' },

    { id: 'G', pos: 'G', at: OUR_G },
    // Row 1. "F1 does what F1 always does: splits the ice, takes the middle away,
    // forces a side. In the most passive versions F1 barely leaves the red line."
    { id: 'F1', pos: 'F', at: { at: THEIR_BLUE, dx: -3, dy: 2 }, label: 'forces a side' },
    // Row 2 — the three across. Same x, or it is not a row. Neither defenceman is
    // numbered, because the section numbers neither: it says "one defenceman in
    // the middle" and "the single back defenceman".
    { id: 'F2', pos: 'F', at: F2_131, label: 'his lane only' },
    { id: 'D', pos: 'D', at: D131, label: 'the read-maker' },
    { id: 'F3', pos: 'F', at: F3_131, label: 'his lane only' },
    // Row 3 — "the single back defenceman is the safety... and, crucially,
    // retrieves every dumped puck and starts the breakout."
    { id: 'D', pos: 'D', at: OUR_BLUE, label: 'last man, retrieves' },
  ],

  routes: [
    // "they slide as a unit toward whichever side the puck is on" — three equal,
    // parallel, short routes, because a unit that slides unevenly is not a unit.
    // Drawn as plain forward skating: the key's "lateral crossovers" symbol would
    // assert a skating technique the section does not name.
    { from: F2_131, to: { at: 'centre-ice', ...NZ_WALL_X, dy: WALL + 7 }, kind: 'skate' },
    { from: D131, to: { at: 'centre-ice', ...NZ_WALL_X, dy: 7 }, kind: 'skate' },
    { from: F3_131, to: { at: 'centre-ice', ...NZ_WALL_X, dy: -WALL + 7 }, kind: 'skate' },
  ],

  puck: { at: THEIR_BLUE, dx: 17, dy: 25 },
};

// ---------------------------------------------------------------------------
// 4 — the 1-4
// ---------------------------------------------------------------------------
//
// "One forechecker, and four skaters in a flat line across your own blue line."
//
// The section assigns no lanes within the four, so the assignment drawn here is
// declared in the caption rather than left to look like a rule. What it does state
// is the counter, and the reason the stretch pass is not it: "A 1-4 holds its flat
// line on its own blue line, so there is no legal ice behind it."

// The chip goes through the gap between two of the four, not down the boards: a
// route squeezed between a wall player and the dasher was unreadable at this
// scale, and the section's point is that the *flatness* is the weakness, not that
// there is a lane at the wall.
const FOUR_CARRIER = { at: 'centre-ice', dx: 2, dy: 30 };   // (2, 30) — already past F1
const FOUR_CHASER = { at: 'centre-ice', dx: 10, dy: 14 };   // (10, 14) — behind the puck, so onside

const flat14 = {
  id: 'nz-1-4',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,
  numbered: true,

  caption:
    'A 1-4, the most conservative structure in hockey: one forechecker, and four skaters in a flat line ' +
    'across your own blue line. Almost nothing goes through it — controlled entries against a ' +
    'disciplined 1-4 are close to impossible and odd-man rushes are eliminated, because everybody is ' +
    'already home — but it concedes the entire neutral zone and both blue lines, generates no ' +
    'offence, and will keep you in your own end for the whole shift. Because the line is flat, nobody in ' +
    'it is deeper than anybody else, which is why the answer drawn here is a hard chip past it and a ' +
    'race for the puck: the stretch pass that beats a trap or a 1-3-1 does not work against a 1-4, ' +
    'because a line held on its own blue line leaves no legal ice behind it and a receiver already back ' +
    'there is offside the moment the puck crosses. The shape is only “four skaters in a flat ' +
    'line”, and who takes which lane is not fixed; the two defencemen are drawn in the middle two ' +
    'lanes here, which is one arrangement and not a rule. Use it protecting a lead in the last minute or ' +
    'two, killing time with a stranded unit, or against a pulled goalie — some youth teams play it ' +
    'as their default and should not.',

  describe:
    'The full sheet, our net at the left. Four of our skaters stand in a flat line across our own blue ' +
    'line, evenly spread from wall to wall, with the two defencemen in the middle two lanes and two ' +
    'forwards outside them; the fifth, F1, stands alone near the centre red line. Both goaltenders are ' +
    'shown. Two opposition forwards have come past F1 and are approaching the flat line, one with the ' +
    'puck and one behind him. Two numbered routes: one, the chip put through the gap between two of the ' +
    'four into the space behind the line; two, the second attacker’s race through the same gap to ' +
    'get to it first, starting from behind the puck so that he is onside when it crosses. There is no ' +
    'opposition receiver drawn waiting behind the line, because there cannot legally be one, and the ' +
    'other three opposition skaters are not drawn either.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },
    { id: 'F', team: 'opp', pos: 'F', at: FOUR_CARRIER, label: 'chips it past' },
    { id: 'F', team: 'opp', pos: 'F', at: FOUR_CHASER, label: 'races onto it' },

    { id: 'G', pos: 'G', at: OUR_G },
    // "F1 standing near the red line doing nothing -> 1-3-1 or 1-4" — the section's
    // own reading drill, so that is where F1 is drawn.
    { id: 'F1', pos: 'F', at: { at: 'centre-ice', dx: 6, dy: 2 }, label: 'the one' },
    // The four. Evenly spread; lane assignment is a drawing choice and the caption
    // says so. Nobody is deeper than anybody else — that flatness is the weakness
    // the chip exploits, so it must be exactly true in the picture.
    { id: 'F', pos: 'F', at: { at: OUR_BLUE, dy: 30 } },
    { id: 'D', pos: 'D', at: { at: OUR_BLUE, dy: 10 } },
    { id: 'D', pos: 'D', at: { at: OUR_BLUE, dy: -10 } },
    { id: 'F', pos: 'F', at: { at: OUR_BLUE, dy: -30 }, label: 'nobody is deeper' },
  ],

  routes: [
    // 1 — "Enter with a hard chip past the flat line and hunt it." The puck, not a
    //     pass to anybody: there is no receiver behind the line and there legally
    //     cannot be one, which is the whole point of the caption.
    { from: FOUR_CARRIER, to: { at: OUR_BLUE, dx: -20, dy: 13 }, kind: 'pass' },
    // 2 — "a puck put behind them is a genuine race". A second attacker, starting
    //     behind the puck so that he is onside when it crosses, going through the
    //     same gap.
    { from: FOUR_CHASER, to: { at: OUR_BLUE, dx: -8, dy: 20 }, kind: 'skate' },
  ],

  puck: { at: 'centre-ice', dx: 0, dy: 27 },
};

// ---------------------------------------------------------------------------
// 5 — pressure: the neutral zone behind an aggressive forecheck
// ---------------------------------------------------------------------------
//
// "It is what the middle third looks like when your team is running a 2-1-2
// forecheck inside the opponent's end... Two of your forwards are gone... That
// leaves one forward holding the middle of the neutral zone as the only layer
// between the puck and your defence, and two defencemen holding a deliberately
// tight gap, both prepared to step up."
//
// The two forecheckers' shape inside the zone is NOT drawn in any detail, on
// purpose: Forechecking Systems owns the 2-1-2 and this document says so twice.

const P_CARRIER = { at: 'corner:right', dx: 2, dy: -2 };   // (84, 32) — under pressure in the corner
const P_W1 = { at: THEIR_BLUE, dx: -8, dy: 34 };           // (17, 34) — the wall outlet, in the neutral zone
const P_D1 = { at: OUR_BLUE, dx: 14, dy: 20 };             // (-11, 20) — tight gap, strong side

const pressure = {
  id: 'nz-pressure',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,
  numbered: true,

  caption:
    'What the neutral zone looks like behind an aggressive forecheck, which is not really a ' +
    'neutral-zone structure at all: two of your forwards are gone hunting the puck in the ' +
    'opponents’ end, so F3 is the only layer between the puck and your defence, and the two ' +
    'defencemen hold a deliberately tight gap back toward your own blue line, both prepared to step up. ' +
    'F3 holds the middle, level with or slightly ahead of the puck, and does not drift to a wall, because ' +
    'the pass that hurts you comes up the middle; the strong-side defenceman steps up hard on a pass to ' +
    'the wall, which is the aggressive gap that makes the whole thing work and the riskiest decision on ' +
    'the ice; the weak-side defenceman stays home as your only genuine safety. Where the two forecheckers ' +
    'stand inside the zone is the 2-1-2’s business rather than the neutral zone’s, so it is ' +
    'drawn only as two forwards deep. Note the phase: this is the moment the puck comes out, and while ' +
    'the forecheck is still live those same two defencemen are 100 feet further up at the offensive blue ' +
    'line. Beat the two forecheckers with one pass and F3 is alone against three with the defence ' +
    'stepping up, which is how a 3-on-2 becomes a 3-on-1 — this is the right choice when you are ' +
    'chasing a goal, not a default.',

  describe:
    'The full sheet, our net at the left, the opponents’ at the right. Deep in the opponents’ ' +
    'end, two of our forwards pressure their defenceman, who has the puck in the corner; their winger has ' +
    'come up the wall into the neutral zone as the outlet. Our F3 stands alone in the middle of the ' +
    'neutral zone. Our two defencemen are between the red line and our own blue line rather than on it, ' +
    'the strong-side one in the dot lane and the weak-side one deeper and nearer the middle. Two numbered ' +
    'routes: one, the first pass out to the winger on the wall; two, the strong-side defenceman stepping ' +
    'up hard on it, finishing on the inside of the receiver. Both goaltenders are shown. Two of the ' +
    'opposition’s five skaters are drawn — the other three, the ones who make it ' +
    'a three-on-one if that first pass gets through, are not.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },
    { id: 'D', team: 'opp', pos: 'D', at: P_CARRIER, label: 'under pressure' },
    { id: 'W', team: 'opp', pos: 'F', at: P_W1, label: 'the wall outlet' },

    { id: 'G', pos: 'G', at: OUR_G },
    // Two forwards deep. Placed only as "in the opponents' end hunting the puck";
    // their shape relative to each other is the other document's claim, not this
    // one's, so nothing here should be read as the 2-1-2's geometry. F1 pressures
    // from the inside rather than along the wall: drawn on the wall he sat on top
    // of the carrier's glyph and under the outlet pass.
    { id: 'F1', pos: 'F', at: { at: 'faceoff-dot:right', dx: 9, dy: -2 }, label: 'gone hunting' },
    { id: 'F2', pos: 'F', at: { at: 'faceoff-dot:left', dx: 10, dy: 4 }, label: 'gone hunting' },
    { id: 'F3', pos: 'F', at: { at: THEIR_BLUE, dx: -8 }, label: 'the only layer' },
    { id: 'D1', pos: 'D', at: P_D1, label: 'steps up hard' },
    { id: 'D2', pos: 'D', at: { at: OUR_BLUE, dx: 8, dy: -10 }, label: 'your only safety' },
  ],

  routes: [
    // 1 — the first pass out, the thing the whole structure is a bet about.
    { from: P_CARRIER, to: { at: THEIR_BLUE, dx: -4, dy: 31 }, kind: 'pass' },
    // 2 — "The strong-side defenceman steps up hard on a pass to the wall."
    //     Checking pressure, finishing level with and *inside* the receiver, about
    //     60 degrees off the line to him. Drawn aimed at him it finished within 3
    //     degrees of his back, which is a checking-from-behind picture: the
    //     receiver is facing the puck, and the puck is coming from behind him.
    { from: P_D1, to: { at: THEIR_BLUE, dx: -9, dy: 27 }, kind: 'pressure', bow: -2 },
  ],

  puck: { at: 'corner:right', dx: 0, dy: -4 },
};

// ---------------------------------------------------------------------------
// 6 — the left-wing lock
// ---------------------------------------------------------------------------
//
// "Two forwards — conventionally the centre and the right wing — forecheck
// aggressively in the opponent's end... The moment possession is lost, the left
// wing drops back into line with the two defencemen, making a three-man defensive
// line, each responsible for roughly one third of the width of the ice."
//
// The three thirds are the section's own arithmetic, not a guess: 85 / 3 = 28.3,
// so the centres of the three lanes are y = +28, 0, -28.
//
// This is the one system in the document named for real positions rather than F1 /
// F2 / F3 roles, so the ids are C, RW, LW. No steering route is drawn: the section
// says the forecheck "often" steers to one side, and which physical side of a real
// rink that is cannot be read off a drawing whose "right" is a name for the top of
// the page.

const THIRD = 28;
const LOCK_LINE_X = -6;                                    // just inside the red line, our side

const leftWingLock = {
  id: 'nz-left-wing-lock',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,

  caption:
    'The left-wing lock, frozen the moment possession has been lost: two forwards are still forechecking ' +
    'in the opponents’ end and the left wing has dropped back into line with the two defencemen, ' +
    'making a three-man line across the back with each player responsible for roughly one third of the ' +
    '85-foot width. The effect is a 2-3 — aggressive up front, three across the back — which ' +
    'lands somewhere between a 2-1-2 and a trap: you get real forechecking pressure without the odd-man ' +
    'risk that normally comes with it, because the third man back is already there. Conventionally it is ' +
    'the centre and the right wing who forecheck, often deliberately steering the puck to one side, but ' +
    'that is a coaching choice rather than a law, and many teams now lock whichever winger is highest in ' +
    'the zone instead, which removes the personnel problem at the cost of needing a loud and immediate ' +
    'in-game call. The cost is real: it takes one player out of the counterattack and asks him to do a ' +
    'job most wingers are not trained for, and a left wing who reads the transition late gives you the ' +
    'worst of both systems.',

  describe:
    'The full sheet, our net at the left, the opponents’ at the right. Two of our forwards, marked C ' +
    'and RW, are deep in the opponents’ end forechecking their defenceman, who has the puck behind ' +
    'his own net. Three of our players stand in a line across the ice just inside the centre red line: ' +
    'the left wing LW in one outside third, a defenceman in the middle third, and the second defenceman ' +
    'in the other outside third, evenly spaced so each covers about 28 feet of width. Both goaltenders ' +
    'are shown. No routes are drawn: the drop back into the line has already happened at the instant ' +
    'shown, and the forecheck’s own routes are not the subject here. Only the puck carrier is ' +
    'drawn of the opposition’s five skaters.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'behind-net', dy: 5 }, label: 'has the puck' },

    { id: 'G', pos: 'G', at: OUR_G },
    // The two who forecheck. Deep, on opposite sides; nothing finer is claimed.
    { id: 'C', pos: 'F', at: { at: 'goal-line', dx: -5, dy: 14 }, label: 'forechecks' },
    { id: 'RW', pos: 'F', at: { at: 'faceoff-dot:left', dx: 6, dy: 2 }, label: 'forechecks' },
    // The three-man line: thirds of 85 feet, centred at +-28 and 0.
    { id: 'LW', pos: 'F', at: { at: 'centre-ice', dx: LOCK_LINE_X, dy: THIRD }, label: 'the third defender' },
    { id: 'D', pos: 'D', at: { at: 'centre-ice', dx: LOCK_LINE_X, dy: 0 }, label: 'a third of the width' },
    { id: 'D', pos: 'D', at: { at: 'centre-ice', dx: LOCK_LINE_X, dy: -THIRD }, label: 'a third of the width' },
  ],

  puck: { at: 'behind-net', dx: -3, dy: 8 },
};

// ---------------------------------------------------------------------------
// 7 — the D-to-D regroup
// ---------------------------------------------------------------------------
//
// Frame flips: here OUR team has the puck, so our five move left to right and the
// opponents are the ones holding the middle third. Our net stays at the far end.
//
// "A forward, unable to advance, turns and passes back to a defenceman... If the
// strong side is covered, they move it D-to-D across to their partner. This is the
// pivot of the whole tactic... As the puck travels D-to-D, all three forwards
// change lanes and build speed."
//
// And from Timing the forwards' swing: "Three forwards, three different depths...
// One supports close for the short outlet, one swings wide for the outside lane,
// one stays high as the stretch option."
//
// The curls themselves are NOT drawn. A curl is a reversal — back toward the puck,
// then up ice — and that is movement over time; the section describes it in five
// steps and a still frame cannot carry them. What the frame can carry, and what
// amateur teams get wrong, is the three depths and the flat D-to-D.

const R_D1 = { at: OUR_BLUE, dx: 5, dy: 20 };              // (-20, 20) — receives, hips open up the ice
const R_D2 = { at: OUR_BLUE, dx: 5, dy: -20 };             // (-20, -20) — the far point of attack
const R_F1 = { at: 'centre-ice', dx: 2, dy: 30 };          // (2, 30) — could not advance

const regroup = {
  id: 'nz-regroup-d-to-d',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,
  numbered: true,

  caption:
    'A D-to-D regroup, drawn at the instant the pass across is made — this time it is our team with ' +
    'the puck, attacking left to right. A forward who could not advance has turned and put the puck back ' +
    'to a defenceman, who receives with his hips open up the ice so he can see the whole sheet, and then ' +
    'moves it D-to-D: that pass across is the pivot of the whole tactic, because it changes the point of ' +
    'attack and forces the entire opposing structure to slide. The one hard rule is visible in the ' +
    'picture — the D-to-D is flat and hard and the lane is clean; never make it blind across the ' +
    'middle with a forechecker between you, because an interception there is an instant 2-on-1 with both ' +
    'your defencemen wrong-sided. Notice the three forwards at three different depths rather than all ' +
    'curling to the same place: one close for the short outlet, one wide for the outside lane, one high ' +
    'as the stretch option, and the receiving defenceman hits whichever has the most speed and the most ' +
    'ice. Their curls back toward the puck and up into their lanes are movement over time and are ' +
    'deliberately not drawn here; what the picture is for is the shape, and the point that you are not ' +
    'retreating — you still have the puck, and you are declining a bad entry to buy a better one.',

  describe:
    'The full sheet, with our own net at the left and our team attacking to the right. Two of our ' +
    'defencemen are just inside our own blue line, one on each side of the ice, with a clean lane between ' +
    'them. Our three forwards are at three clearly different depths in the neutral zone: one high on the ' +
    'near wall who has just turned the puck back, one swinging wide and low on the far wall, and one high ' +
    'in the middle near the opponents’ blue line as the stretch option. Two opposition players hold ' +
    'the middle third, one of them pressuring the forward who turned the puck back; neither is in the ' +
    'lane between our defencemen. Two numbered routes, both passes: one, the forward’s pass back; ' +
    'two, the flat D-to-D across. Both goaltenders are shown; the opponents’ end is otherwise empty ' +
    'because the play has not gone there, and their other three skaters are not drawn.',

  players: [
    // The opposition, drawn only as much as the section requires: something that
    // makes "unable to advance" and "the strong side is covered" true. Neither is
    // between the two defencemen, because the section forbids that pass.
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'centre-ice', dx: 11, dy: 24 }, label: 'takes the strong side' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'centre-ice', dx: 8, dy: -8 }, label: 'holds the middle' },
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },

    { id: 'G', pos: 'G', at: OUR_G },
    { id: 'D1', pos: 'D', at: R_D1, label: 'hips open up the ice' },
    { id: 'D2', pos: 'D', at: R_D2, label: 'the new point of attack' },
    // The three forwards are not numbered. The section's own language note says
    // F1, F2 and F3 are set by order of arrival at the puck, and on a regroup
    // nobody has arrived at anything — what distinguishes them is depth, which is
    // what the labels carry.
    { id: 'F', pos: 'F', at: R_F1, label: 'close — short outlet' },
    { id: 'F', pos: 'F', at: { at: 'centre-ice', dx: -4, dy: -32 }, label: 'wide — outside lane' },
    { id: 'F', pos: 'F', at: { at: THEIR_BLUE, dx: -4, dy: 8 }, label: 'high — stretch option' },
  ],

  routes: [
    // 1 — "A forward, unable to advance, turns and passes back to a defenceman."
    { from: R_F1, to: { at: OUR_BLUE, dx: 10, dy: 23 }, kind: 'pass' },
    // 2 — the D-to-D. Flat and hard, and drawn with nobody in the lane. Both
    //     passes stop ~6 ft short of their receiver; drawn to the glyph, the
    //     3 ft arrowhead lands on top of the triangle.
    { from: R_D1, to: { at: OUR_BLUE, dx: 5, dy: -14 }, kind: 'pass' },
  ],

  puck: { at: OUR_BLUE, dx: 6, dy: 23 },
};

// ---------------------------------------------------------------------------
// 8 and 9 — denying the blue line: stand up, or back off
// ---------------------------------------------------------------------------
//
// §"Denying the blue line: stand up or back off". The section's first sentence is
// the whole brief for this pair: "At your own blue line you have two broad
// options, and they are **genuinely a trade-off rather than one being correct**."
//
// A PAIR OF ALTERNATIVES, NOT A SEQUENCE. Modelled on dz-walk-down-zone /
// dz-walk-down-man, which answer one situation two ways — and modelled on the
// defect found in that pair, which is that adjacent frames read as "and then this
// happened" to a reader who has just met a genuine before/after pair elsewhere in
// the corpus. So: the carrier, the puck and the defenceman are at *identical*
// coordinates in both frames, the only difference is the answer, and BOTH captions
// say in terms that the other frame is the same instant answered differently.
//
// WHAT IS DELIBERATELY NOT DRAWN, in either frame: backpressure. The section makes
// the read the whole skill — "Standing up is a bet that you have help. Backing off
// is the play when you do not" — so a backchecker drawn in one frame and not the
// other would settle the read the reader is supposed to make, and a backchecker
// drawn in both would make one of the two frames wrong. Neither frame has one, and
// both captions say the picture cannot show the thing that decides it. The
// defence partner is not drawn either; the section describes one defenceman's
// choice.
//
// SAFETY, and it governs the first frame. "Standing up at the line" is exactly
// where a beginner reaches for a hit, and the teaching point is stopped feet — so
// the defenceman in nz-stand-up-at-the-line carries NO ROUTE AT ALL, and nothing
// in that frame finishes into the carrier. The counter is drawn as the puck going
// past him and the carrier going round him, which is what the section says beats
// it, and both finish pointing away from him and away from each other.
//
// ONE DIAGRAM, NOT THREE. zone_entries.md §11 and switching_positions.md describe
// the same decision from the attacker's side and from the pair's side. It is drawn
// once, here, in the document that owns "Denying the blue line".

// The carrier arrives on the +y side, which is the strong side across all of this
// file's diagrams. Anchored to the neutral-zone dot rather than to a bare
// coordinate: he is a few feet up-ice of it and slightly inside.
const BL_CARRIER = { at: 'neutral-dot:right:far', dx: 14, dy: -4 };  // (-6, 18)
const BL_PUCK = { at: 'neutral-dot:right:far', dx: 9, dy: -8 };      // (-11, 14)
// "Meet the attacker at or just inside your blue line" — one foot inside it.
const BL_D = { at: OUR_BLUE, dx: -1, dy: 12 };                       // (-26, 12)

const standUpAtTheLine = {
  id: 'nz-stand-up-at-the-line',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,

  caption:
    'Standing up at your own blue line, which is at the left because our net is: the defenceman ' +
    'meets the attacker at it with his feet stopped, refuses to give ground and tries to turn the ' +
    'carry into a dump, a pass or a turnover — a carried entry is worth roughly twice a dumped ' +
    'one, and it keeps the play sixty feet from his net rather than twenty. Drawn with it is what ' +
    'beats it, the chip-and-chase: the attacker puts the puck past the ' +
    'defenceman’s hip and runs round him, and stopped feet cannot win that race, because beaten ' +
    'standing up is beaten completely. The defenceman is drawn with no route at all and nothing ' +
    'in the picture finishes into the carrier, and both of those are deliberate — stopped feet ' +
    'are the whole idea, and standing up at the line is exactly where a beginner reaches for a ' +
    'hit instead. This is not the moment before the diagram beside it: it is the same instant ' +
    'answered the other way, and the two are genuinely a trade-off ' +
    'rather than one being correct. Standing up is a bet that you have help, and whether your ' +
    'forwards got back is the read that decides it — no still frame can show that, and some ' +
    'coaches want the line held as a team identity while others want everything funnelled ' +
    'outside, so find out which yours wants before you decide to be a hero at the line.',

  describe:
    'The full sheet. Our own net is at the left with our goaltender in it, our own blue line a ' +
    'quarter of the way in from that end, and an opposition puck carrier is coming the other way ' +
    'through the neutral zone on the near side, about twenty feet short of that line. One of our ' +
    'defencemen stands just inside the blue line in front of him, in the dot lane, with no route ' +
    'drawn at all: his feet are stopped. Two routes come from the carrier and both pass outside ' +
    'the defenceman on the boards side rather than into him — a dashed line, the puck chipped ' +
    'past his hip into the zone behind, and a curved skating route round the outside of him. No ' +
    'backchecker is drawn, no defence partner is drawn, and the opposition’s other four skaters ' +
    'are not drawn. The opposing goaltender is shown at the far end.',

  players: [
    { id: 'G', pos: 'G', at: OUR_G },
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },
    { id: 'C', team: 'opp', pos: 'F', at: BL_CARRIER, label: 'chips past the hip' },
    // No route. See the header note above: this is the safety constraint, not an
    // omission, and it is also the teaching point.
    { id: 'D', pos: 'D', at: BL_D, label: 'feet stopped' },
  ],

  // Unnumbered on purpose. The badges sit a fixed distance along each route and
  // both of these leave the same glyph, so numbering stacked them on each other
  // within a few feet — and the two symbols already say which is the puck and
  // which is the man.
  routes: [
    // "a smart attacker will simply put the puck past your hip and run around
    // you". The puck, drawn with the key's passing symbol, which is what this
    // corpus uses for a puck travelling on its own. It clears the defenceman on
    // the boards side by about four and a half feet at his own line and finishes
    // 130 degrees away from him.
    { from: BL_CARRIER, to: { at: OUR_BLUE, dx: -37, dy: 26 }, kind: 'pass' },
    // "...and run around you, and if your gap has your feet stopped at the line
    // you cannot turn and win that race." Bowed outward so it arcs round him and
    // finishes running away down the wall; the terminal tangent is more than 90
    // degrees off the bearing back to the defenceman, checked rather than eyeballed.
    { from: BL_CARRIER, to: { at: OUR_BLUE, dx: -21, dy: 30 }, kind: 'skate', bow: -4 },
  ],

  puck: BL_PUCK,
};

const backOffAtTheLine = {
  id: 'nz-back-off-at-the-line',
  owner: 'content/systems/neutral_zone_systems.md',
  half: false,
  width: 1100,

  caption:
    'The same instant as the diagram beside it, answered the other way — same carrier, same puck, ' +
    'the same defenceman in the same place, and only the answer has changed. He gives up the blue ' +
    'line and skates backwards, matching the attacker’s speed and keeping him in front, and ' +
    'funnels him outside where the shot is low-percentage; you cannot be beaten wide by pure ' +
    'speed, and it is very hard to make a catastrophic error doing this. The shaded middle is the ' +
    'thing he is not conceding: you give up the blue line but never ' +
    'the middle or your body position, and the whole cost of the choice is in the picture too — ' +
    'they come in with speed and possession and you are now defending with your feet moving ' +
    'backwards toward your own net, which is exactly the scenario the attacking team wanted. It ' +
    'is the play when you have no backpressure, when the attacker has a clear speed advantage, on ' +
    'a two-on-one or worse, or when you are the last defender and a mistake is a breakaway — and ' +
    'whether your forwards got back is a read no still frame can carry. Neither frame is a stage ' +
    'of the other and neither is the correct answer: the two are genuinely a trade-off, ' +
    'and which one you play is a coaching choice, so find out which your team wants.',

  describe:
    'The full sheet, and the same arrangement as the diagram beside it: our own net at the left ' +
    'with our goaltender, our own blue line a quarter of the way in, and an opposition puck ' +
    'carrier coming the other way on the near side about twenty feet short of that line. Our ' +
    'defenceman is in exactly the same place as in that diagram, just inside the blue line, but ' +
    'here he has a backward skating route retreating into our zone and drifting toward the middle ' +
    'of the ice as he goes. The carrier’s route curves away from him toward the near boards and ' +
    'deeper into the zone: he has been let in and steered outside. A shaded band down the centre ' +
    'of the ice from the blue line back to the level of our faceoff dots is labelled "the middle" — ' +
    'the ice the defenceman is not conceding. No backchecker, no defence partner and none of the ' +
    'opposition’s other four skaters are drawn. The opposing goaltender is shown at the far end.',

  // "giving up the blue line but never giving up the middle or your body
  // position". The middle lane is the section's own arithmetic from its lane
  // discipline rules — the ice divided lengthways into three, so the middle third
  // is 28 ft wide, +-14 from the centre. It runs from the blue line he has just
  // conceded back to the level of our faceoff dots, so it reads as a lane rather
  // than a box; the section gives the middle a width and no depth, and the caption
  // and describe both say the band is a lane and not a marked area of ice.
  zones: [
    {
      points: [
        { at: OUR_BLUE, dy: 14 },
        { at: 'faceoff-dot:right:far', dy: -8 },
        { at: 'faceoff-dot:left:far', dy: 8 },
        { at: OUR_BLUE, dy: -14 },
      ],
      label: 'the middle',
    },
  ],

  players: [
    { id: 'G', pos: 'G', at: OUR_G },
    { id: 'G', team: 'opp', pos: 'G', at: THEIR_G },
    { id: 'C', team: 'opp', pos: 'F', at: BL_CARRIER, label: 'steered outside' },
    { id: 'D', pos: 'D', at: BL_D, label: 'concedes the line' },
  ],

  routes: [
    // "You skate backwards, keeping the attacker in front of you and matching
    // their speed." §21.1's BACKWARD SKATING — the row of overlapping arches this
    // corpus draws (`backward: { line: 'loops' }`, rink.mjs) — and not forward
    // skating, which would say the opposite of the whole section.
    // ⚠️ This said "a tight wave" until round 42. That is the Hockey Eastern Ontario
    // glyph, and in THIS corpus a wave means `carry` — skate and stickhandle. A
    // comment naming the wrong key's mark points the next editor at the symbol that
    // says the opposite of the one drawn; rink.mjs:482 records that the two keys were
    // once claimed to agree here and do not.
    // Retreating and drifting inward: he ends up in the middle he is protecting,
    // and the route finishes 180 degrees away from the carrier.
    // M4 (diagram-reviewer): the D covered 22 ft while the carrier covered 46 and finished
    // level with him and 2 ft goal-side — i.e. beaten wide, drawn in the frame captioned
    // "you cannot be beaten wide by pure speed". The invariant to hold is that at the
    // arrowheads the defenceman is on the goal side of the carrier-to-our-net line.
    { from: BL_D, to: { at: OUR_BLUE, dx: -33, dy: 4 }, kind: 'backward' },
    // "you funnel the attacker to the outside where the shot is low-percentage."
    // Bowed toward the boards, and the terminal tangent runs down the wall rather
    // than at the defenceman.
    { from: BL_CARRIER, to: { at: OUR_BLUE, dx: -25, dy: 32 }, kind: 'carry', bow: -3 },
  ],

  puck: BL_PUCK,
};

export default [
  containment122,
  trap122,
  wall131,
  flat14,
  pressure,
  leftWingLock,
  regroup,
  standUpAtTheLine,
  backOffAtTheLine,
];
