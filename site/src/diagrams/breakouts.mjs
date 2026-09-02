/**
 * Diagrams for content/systems/breakouts.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * WHICH END. A breakout starts in your OWN defensive zone, so every diagram here
 * is `half: false` — the whole 200-foot sheet — with the play drawn at the FAR end
 * (the ':far' suffix, x negative) and moving left to right. That choice is not
 * cosmetic: a reader who assumes the other end learns the mirror image of every
 * rim, wheel and reverse in the file, so each caption says out loud which end it
 * is. It costs three-quarters of the picture in empty ice, and that is the right
 * trade — the empty ice is the thing the reader is breaking out into.
 *
 * Note the suffix form for unsided positions: 'goal-line::far', with the empty
 * side segment, because resolve() splits on ':' into [base, side, end].
 *
 * THE STRONG SIDE IS DRAWN AS +y (the top of the picture) in every diagram, so the
 * nine can be read against each other; the puck is retrieved in the right corner
 * except where the option itself moves it.
 *
 * LABELS ARE SHORT ON PURPOSE. On the full sheet a label is 1.57 ft per character
 * against a 204-ft viewBox, and the first draft's "goes back for it" was 25 ft
 * wide, could not fit between the corner and the boards, and was thrown to the far
 * blue line on a leader line. The label is an anchor; the caption does the teaching.
 */

// ---------------------------------------------------------------------------
// Points named once because more than one thing refers to them.
// ---------------------------------------------------------------------------

// D2's stated spot: "usually on the opposite side of the net, level with or
// slightly above the goal line" (section 2, the support D). dx +3 is the "slightly
// above"; dy -16 keeps the glyph clear of the goal frame (y +-3) and the crease.
const D2_LOW = { at: 'goal-line::far', dx: 3, dy: -16 };        // (-86, -16)

// The goaltender, a foot deeper than the named crease point so the circle is not
// touching a defenceman's triangle in the diagrams that put one at the net front.
const GOALIE = { at: 'crease::far', dx: -1 };                   // (-87, 0)

// D1 at the retrieval, deep in the strong-side corner and below the goal line —
// "D1 has the puck below the goal line or on the wall" (the Up option's setup).
// dy -2 as well as dx -4: at the bare corner point the defender triangle's
// circumradius of 3.6 ft leaves four tenths of a foot between the glyph and the
// dasher, and it reads as a player standing in the boards.
const RETRIEVAL = { at: 'corner:right:far', dx: -4, dy: -2 };   // (-86, 32)

// The strong-side winger's wall spot: "the boards between the hash marks and the
// goal line ... at or just below the dot line, not above it" (Language section).
// half-wall is x -69, level with the dot; dx -6 is six feet below the dot line,
// inside the band and nowhere near above it.
//
// HE IS ON THE WALL, SO dy 0. ASSUMES half-wall.y = 38.5 (site/src/data/rink.json).
// The trailing comment read (-75, 33) — stale from when half-wall.y was 33, which
// put this winger 9.5 ft off the boards and inside the faceoff circle, i.e. not on
// the wall at all. The glyph moved when the table did; only the note did not.
const WALL_SPOT = { at: 'half-wall:right:far', dx: -6 };        // (-75, 38.5)

// The centre's low support spot: "inside the faceoff dots and below the hash marks
// — the strong-side circle, not the wall" (section 5). Seven feet below the hash
// line and six inside the dot, which is 9.2 ft from the dot and so inside the
// 15-ft circle. Both of the section's two boundaries hold.
const LOW_SUPPORT = { at: 'faceoff-dot:right:far', dx: -7, dy: -6 };  // (-76, 16)

// ---------------------------------------------------------------------------
// 1 — The five roles. A frozen shape, with no routes at all.
// ---------------------------------------------------------------------------

const fiveRoles = {
  id: 'breakout-five-roles',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'The five jobs on a breakout, frozen at the instant the puck is retrieved. This is your own ' +
    'defensive zone, drawn at the left of the picture, and the play will move left to right. ' +
    'D1 has gone back for the puck in the right corner; D2 is on the opposite side of the net, ' +
    'level with the goal line, where a pass behind the net reaches him and where he can see the ' +
    'forecheck arriving behind his partner, which is why the calls are mostly his; the strong-side ' +
    'winger is on the boards between the hash marks and the goal line on the puck side; the centre ' +
    'is low support, inside the faceoff dots and below the hash marks in the strong-side circle, ' +
    'not out on the wall; the weak-side winger is the second option. ' +
    'This five-role structure is itself a coaching choice — it is the conventional swing breakout, ' +
    'and the alternatives you will meet are the centre fly, where the centre leaves early and the ' +
    'weak-side winger drops in to take low support, and flat or spread breakouts, where both wingers ' +
    'hold higher near the blue line — so ask your coach which one you play, and the weak-side ' +
    'winger’s job in particular is genuinely system-dependent. No forecheck is drawn: this is ' +
    'the shape, not a play against anybody.',

  describe:
    'The full 200-foot sheet. The defending zone is at the left, the attacking end at the right. ' +
    'Five own players and a goaltender, and no opposition. The defenceman D1 is deep in the right ' +
    'corner with the puck at his stick. The defenceman D2 is on the other side of the net, just ' +
    'above the goal line. The winger W1 is on the right boards between the hash marks and the goal ' +
    'line. The centre C is inside the right faceoff circle, below the hash marks and inside the dot. ' +
    'The winger W2 is on the weak side and higher, near the top of the left circle. The goaltender ' +
    'is in the crease. There are no routes: nothing is moving yet.',

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    { id: 'D1', pos: 'D', at: RETRIEVAL, label: 'retrieves' },
    { id: 'D2', pos: 'D', at: D2_LOW,    label: 'support' },
    { id: 'W1', pos: 'F', at: WALL_SPOT, label: 'the wall' },
    // W2 under the swing breakout is "the second option and the outlet for a
    // cross-ice or over play". The section says flatly that this job is
    // "genuinely system-dependent", so the caption says so rather than the shape
    // asserting one structure as the law.
    { id: 'W2', pos: 'F', at: { at: 'top-of-circle:left:far', dx: 2 }, label: 'second option' },
    { id: 'C',  pos: 'F', at: LOW_SUPPORT, label: 'low support' },
  ],

  routes: [],
  puck: { at: 'corner:right:far', dx: -1, dy: -7 },
};

// ---------------------------------------------------------------------------
// 2 — Up. The direct pass to the strong-side winger on the wall.
// ---------------------------------------------------------------------------

// Deeper than the shared RETRIEVAL point, so the pass reads as a pass rather than a
// handoff: from RETRIEVAL the winger is 14.5 ft away, from here 17.2 ft. ASSUMES
// half-wall.y = 38.5 (site/src/data/rink.json) — the winger is UP_W1, on the wall.
// This said "at the shared point D1 and the winger are eight feet apart", which is
// not a figure this file has ever resolved to: at half-wall.y 33 it was 13.0 ft and
// at 38.5 it is 14.5. Eight feet made the deepening sound necessary; 14.5 to 17.2 is
// what it actually buys, and that is a legibility nudge, not a rescue.
const UP_D1 = { at: 'corner:right:far', dx: -6, dy: -4 };       // (-88, 30)
// HE IS ON THE WALL, SO dy 0. ASSUMES half-wall.y = 38.5 (site/src/data/rink.json).
const UP_W1 = { at: 'half-wall:right:far', dx: -4 };            // (-73, 38.5)

const up = {
  id: 'breakout-up',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'The “up” breakout — the direct pass from the puck-carrying defenceman to the strong-side ' +
    'winger on the wall, the fastest of the nine breakout options when the lane is open — no count ' +
    'ranks breakout plays by speed — and, when it is there, the right one. Drawn in ' +
    'your own defensive zone at the left of the picture, moving left to right. D1 has the puck ' +
    'below the goal line, the winger is on the boards between the hash marks and the goal line, and ' +
    'the centre is low in the middle as the bail-out; the read drawn here is the first forechecker ' +
    'committed behind the net, which leaves the wall lane open. Pass firmly and to the winger’s ' +
    'stick, not to the boards behind him. What a still picture cannot show is the risk: that pass ' +
    'travels the lane a forecheck posts its wall-sealer in, and any forecheck that has one — the ' +
    'second forechecker in a 2-1-2, the strong-side half-wall player in a 1-2-2 — ' +
    'is standing in it, so intercepted at the hash marks it becomes a scoring chance from the top of ' +
    'the circle.',

  describe:
    'The full sheet, the defending zone at the left. The defenceman D1 has the puck deep in the ' +
    'right corner below the goal line. The winger W1 is on the right boards between the hash marks ' +
    'and the goal line. The centre C is low in the middle, inside the right circle. The defenceman ' +
    'D2 is on the far side of the net near the goal line. One opposition forward is behind the net, ' +
    'the forecheck having committed there. A single dashed route runs from D1 up the wall to the ' +
    'winger’s stick. The winger’s own next move is deliberately not drawn: whether he ' +
    'skates first or looks up ice first is a coaching choice, and not one with a settled answer.',

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    { id: 'D1', pos: 'D', at: UP_D1,  label: 'has time' },
    { id: 'D2', pos: 'D', at: D2_LOW, label: 'second wave' },
    { id: 'W1', pos: 'F', at: UP_W1,  label: 'the outlet' },
    { id: 'C',  pos: 'F', at: LOW_SUPPORT, label: 'the bail-out' },
    // "Take it when the forecheck has committed *behind* the net or to the middle,
    // leaving the wall lane open." F1 is the forechecker by order of arrival, not
    // a position — the section is emphatic about that, so no name is implied.
    // Eight feet to the strong side of centre, which keeps the glyph off the goal
    // frame (y +-3, x -89 to -92.33) — at dy 5 it was drawn sitting on the net's
    // back corner — and well clear of the goaltender's circle.
    { id: 'F1', pos: 'F', team: 'opp', at: { at: 'behind-net::far', dy: 8 }, label: 'gone behind' },
  ],

  routes: [
    // The pass ends six feet short of the winger's glyph so the arrowhead is a
    // pass arriving at a stick, not a collision.
    { from: UP_D1, to: { at: 'half-wall:right:far', dx: -10, dy: -1 }, kind: 'pass' },
  ],

  puck: { at: 'corner:right:far', dx: -4, dy: -7 },
};

// ---------------------------------------------------------------------------
// 3 — Wheel. D1 carries it himself, behind the net and up the far side.
// ---------------------------------------------------------------------------

// The carry's exit, on the weak-side wall just below the hash marks. The bow of
// -34 is chosen so the curve's own midpoint lands at x -94.5 — behind the net's
// back rail at -92.33, which is what "cut TIGHT to the net, the net itself is your
// screen" means — while keeping the route out of the crease and, where it crosses
// the goal-mouth band at all, behind the goal frame rather than through it.
//
// The first version exited at (-76, -28) and its terminal tangent came out at 40
// degrees below the axis, so the arrowhead finished aimed at the bottom corner
// rather than up ice: a wheel that ends pointing back into your own end is not a
// wheel. Exiting further up the wall flattens the finish to 32 degrees.
//
// HE FINISHES ON THE WALL, SO dy 3 is INWARD off it — on a ':left' anchor a positive
// dy pulls toward the middle. ASSUMES half-wall.y = 38.5 (site/src/data/rink.json).
// The trailing comment read (-70, -30) and the tangent was recorded as 30 degrees;
// both were computed when half-wall.y was 33. Re-resolved at 38.5 the exit is 5.5 ft
// further out and the finish is 32.2 degrees, not 28.8 — still far flatter than the
// 40-degree version this bow exists to replace, so the argument holds, but neither
// figure was the one the code produces.
const WHEEL_EXIT = { at: 'half-wall:left:far', dx: -1, dy: 3 };      // (-70, -35.5)

const wheel = {
  id: 'breakout-wheel',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'The wheel: the defenceman carries the puck himself, cutting tight behind his own net and coming ' +
    'up the far side. Drawn in your own defensive zone at the left of the picture, moving left to ' +
    'right. It needs two things, speed and space — a step on the first forechecker, and no second ' +
    'forechecker waiting on the far side — and the second of those is an absence, so it is the ' +
    'empty far side of this picture rather than anything drawn in it. Cut tight, because the net is ' +
    'your screen and cutting wide gives the forechecker a straight line to you. D2 is drawn already ' +
    'standing at the net front and with no route at all, and that is the whole point: a player is ' +
    'entitled to the ice he is standing on and may lengthen an opponent’s path, but stick in ' +
    'tight and vertical, hands to yourself, no bump as he goes past — sliding across into the ' +
    'forechecker’s path is an interference minor against your team under NHL Rule 56.1. The ' +
    'far-side winger and the centre are the outlets, and a second forechecker holding the far side, ' +
    'which is exactly what F2 does in a 2-1-2, turns all of this into a trap.',

  describe:
    'The full sheet, the defending zone at the left. The defenceman D1 has the puck in the right ' +
    'corner. A long smooth wave — skating with control of the puck — runs from him down behind his ' +
    'own net, passing about two feet behind the goal frame, and back up the weak side to the left ' +
    'boards below the hash marks. The defenceman D2 stands in front of the net, slightly to the ' +
    'strong side, with no route drawn. The winger W2 is on the left boards and the centre C is low ' +
    'inside the left circle; both are outlets. One opposition forechecker is up the right wall, ' +
    'behind the play. The goaltender is in the crease.',

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    { id: 'D1', pos: 'D', at: RETRIEVAL, label: 'carries it' },
    // "D2 takes up position in front of the net early." Ten feet out and slightly
    // strong side: far enough off the goaltender's glyph to be separable, and on
    // the side a forechecker cutting across from the right corner has to come past.
    { id: 'D2', pos: 'D', at: { at: 'net-front::far', dx: 5, dy: 3 }, label: 'already there' },
    { id: 'W2', pos: 'F', at: { at: 'half-wall:left:far', dx: 8 },    label: 'far-side outlet' },
    { id: 'C',  pos: 'F', at: { at: 'faceoff-dot:left:far', dx: -5, dy: 6 }, label: 'low support' },
    { id: 'F1', pos: 'F', team: 'opp', at: { at: 'corner:right:far', dx: 6, dy: 2 }, label: 'beaten' },
  ],

  routes: [
    { from: RETRIEVAL, to: WHEEL_EXIT, kind: 'carry', bow: -34 },
  ],

  puck: { at: 'corner:right:far', dx: -1, dy: -7 },
};

// ---------------------------------------------------------------------------
// 4 — Reverse. Back against the flow, off the boards, into vacated space.
// ---------------------------------------------------------------------------

// D1 pinned on the strong-side wall with the puck — "you were working up the right
// wall". HE IS ON THE WALL, SO dy 0. ASSUMES half-wall.y = 38.5 and the boards at
// y +-42.5 (site/src/data/rink.json). This carried dy: 1, under a trailing comment
// reading (-73, 34) that was stale from when half-wall.y was 33 — the glyph was
// really at 39.5. There the own-team circle's nominal edge (r 2.9) reached 42.4 and
// cleared the dasher by a tenth of a foot, but the 0.75 stroke's 0.375 halo put
// 0.28 ft of ink over the boards. The circle's ink ceiling is 39.2, not 39.6.
// dy -0.3 pulls him 0.3 ft off the wall so his TRIANGLE clears the boards: the apex
// reaches 3.6 ft from the centroid plus 0.4 of round-joined stroke = 4.0, and the
// boards' inner ink edge at x -73 is 42.23, so at 38.5 he was 0.27 ft through it.
// He is the only triangle in the corpus sitting on this datum with no dy. Moving
// rink.json's half-wall instead was tried and reverted: it falsified 54 comments in
// ten modules to fix this one glyph. See the ⚠️ in rink.json's half-wall note.
const REV_D1 = { at: 'half-wall:right:far', dx: -4, dy: -0.3 };  // (-73, 38.2)
// Where the reverse and the arriving partner converge — both below the goal line,
// which is where the section says the puck is going ("a space you cannot see,
// below your own goal line"). Kept nine feet apart so two arrowheads meeting in
// the same corner do not merge into one mark.
const REV_PUCK_TO = { at: 'corner:right:far', dx: -5, dy: -5 };  // (-87, 29)
const REV_D2_TO  = { at: 'corner:right:far', dx: -6, dy: -14 };  // (-88, 20)

const reverse = {
  id: 'breakout-reverse',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'The reverse, drawn in your own defensive zone at the left of the picture. D1 was working up the ' +
    'right wall; the forechecker has over-committed and skated past him, so D1 sends the puck back ' +
    'down the boards behind him, against the flow, into the space that forechecker has just left — ' +
    'where D2 is arriving. In practice that is a hard backhand banked off the wall, firm and low, ' +
    'because soft reverses die in the corner and become turnovers; the drill notation has no symbol ' +
    'for a banked puck, so it is drawn simply as the pass it is. The whole play depends on the ' +
    'forechecker’s momentum, and a still picture cannot draw momentum, so read the opponent ' +
    'above D1 as a player already past him and unable to stop. The puck is being put into a space ' +
    'D1 cannot see, below ' +
    'his own goal line, so the receiving teammate has to call for it out loud — “reverse!” — because ' +
    'D1 is looking the wrong way, and if nobody is there the opposition has the puck behind your net ' +
    'with your defence facing the wrong direction. Keep this straight from the rim: a rim goes ' +
    'onward around the boards in the direction the puck was already travelling, a reverse goes back ' +
    'against it. A containing forechecker who steers rather than chases is never past you to begin ' +
    'with, and beats it.',

  describe:
    'The full sheet, the defending zone at the left. The defenceman D1 is on the right boards just ' +
    'below the hash marks with the puck. An opposition forward is on the same boards about ten feet ' +
    'further up ice, past him. Two numbered routes: one, the defenceman D2 skates from the far side ' +
    'of the net, around behind the goal, and up into the strong-side corner below the goal line; ' +
    'two, a dashed pass from D1 back down the right boards behind him, finishing in that same corner ' +
    'space. The two routes finish about nine feet apart. The goaltender is in the crease.',

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    { id: 'D1', pos: 'D', at: REV_D1, label: 'has the puck' },
    { id: 'D2', pos: 'D', at: D2_LOW, label: 'arriving' },
    // "a forechecker chasing your hip" who has then "over-committed and skated
    // past you" — so he is up-ice of D1 on the same wall, still going. dx 7 leaves
    // him 11 ft up-ice of D1, the "about ten feet" the description states.
    //
    // HE IS ON THE WALL, SO dy 0. ASSUMES half-wall.y = 38.5 and the boards at
    // y +-42.5 (site/src/data/rink.json). The opposition triangle is asymmetric —
    // apex at cy +3.6 — so the ceiling on the +y wall is 38.9. This carried dy: 2,
    // putting the apex at 44.1: 1.6 ft of forechecker through the dasher. At dy 0
    // he sits on the same wall line as D1, which is what "the same boards" means.
    { id: 'F1', pos: 'F', team: 'opp', at: { at: 'half-wall:right:far', dx: 7 },
      label: 'gone past' },
  ],

  // Numbered, because the order is the play: the teammate is arriving and calling
  // BEFORE the puck is banked. A reverse into empty ice is the section's own
  // stated failure, and a still frame that drew them simultaneously would not say
  // which came first.
  routes: [
    // 1 — D2 comes around the back of his own net. Bowed to x -94.5 at the
    //     midpoint so the route runs behind the goal frame, never across the goal
    //     mouth: where it crosses |y| < 3 it runs from x -93.8 to -94.5, so its
    //     shallowest point there is still a foot and a half behind the net's back
    //     rail at -92.33. The single figure -94.3 that stood here was inside that
    //     range but was not either end of it.
    { from: D2_LOW, to: REV_D2_TO, kind: 'skate', bow: 15 },
    // 2 — the reverse, drawn as the pass it is: back down the wall behind him,
    //     into the corner. The published key has no symbol for a puck banked off
    //     the boards, and the first attempt at drawing one — a pass bowed hard
    //     enough to touch the wall and come back — rendered as a balloon looping
    //     over D1's head, which is not a play. A small bow toward the boards is
    //     all the geometry will carry; the caption says the rest.
    { from: REV_D1, to: REV_PUCK_TO, kind: 'pass', bow: -6 },
  ],

  // The puck at D1's stick, and its dy has to track REV_D1's. At 4.5 ft from his
  // centre the disc's inner edge sits a tenth of a foot off the glyph's stroke,
  // which is what "at his stick" looks like; left at dy -3 when D1 came in off the
  // boards from 39.5 to 38.5, the disc would have been drawn inside him.
  puck: { at: 'half-wall:right:far', dx: -6, dy: -4 },
};

// ---------------------------------------------------------------------------
// 5 — Rim. Around the boards, onward, to a teammate further along.
// ---------------------------------------------------------------------------

// The rim's target: a spot ON the left boards low, four and a half feet off the
// dasher (y -38 against boards at -42.5) — "aim it to arrive where a teammate can
// meet it, not simply around". The winger is drawn just up-ice of it, stepping to
// meet it, rather than standing on it.
const RIM_TO = { at: 'boards:left:far', dx: -8, dy: 4.5 };      // (-77, -38)

const rim = {
  id: 'breakout-rim',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'The rim: a hard shot along the boards that follows the curve of the rink around behind the net ' +
    'to a teammate further along, usually the far-side winger. Drawn in your own defensive zone at ' +
    'the left of the picture, and it travels onward in the direction the puck was already going — ' +
    'which is the whole difference between this and a reverse. The read is the one shown: a ' +
    'forechecker has sealed D1 against the boards and there is no passing lane through him, and it ' +
    'is also the standard release valve when you simply have no time. Two things decide whether it ' +
    'works — height and pace, low and flat enough to stay on the boards and hard enough to carry all ' +
    'the way round, because a soft rim dies in the corner and is a gift; and target, aimed to arrive ' +
    'where a teammate can actually meet it rather than simply “around”. Be honest about what this ' +
    'is: the rim is the play a forecheck most expects from a defenceman sealed on the boards — ' +
    'coaching emphasis, not a counted ranking — any forecheck can post a player at the far ' +
    'wall and most do, and it concedes possession more often than any option except an outright ' +
    'clear. That ranking, too, is a coaching judgement rather than a tracked rate. The trapezoid ' +
    'rules where you play change where a rim should be aimed, and that is its ' +
    'own section.',

  describe:
    'The full sheet, the defending zone at the left. The defenceman D1 has the puck deep in the ' +
    'right corner with an opposition forward between him and the ice, sealing him against the ' +
    'boards. A single dashed route leaves D1, runs down and around the end boards about two and a ' +
    'half feet off the dasher behind the net, and comes out low on the left boards, finishing on the ' +
    'wall four and a half feet off the dasher. The winger W2 stands a few feet up-ice of where it finishes, ' +
    'stepping in to meet it. The goaltender is in the crease.',

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    // D1 carries no label here. The corner is already crowded by the forechecker
    // and by the route's own reserved space, and the placer's only legal slot for
    // one was at the far blue line on a leader line half the rink long.
    { id: 'D1', pos: 'D', at: RETRIEVAL },
    { id: 'F1', pos: 'F', team: 'opp', at: { at: 'corner:right:far', dx: 4, dy: -4 },
      label: 'seals the wall' },
    // "Under a rim-heavy structure, you are the rim's target and you're staying
    // low on your own wall to collect it."
    //
    // HE IS ON THE WALL, SO dy 0. ASSUMES half-wall.y = 38.5 and the boards at
    // y +-42.5 (site/src/data/rink.json). resolve() applies the side sign to the
    // named position and loc() then adds dy raw, so on a ':left' anchor it is a
    // NEGATIVE dy that pushes outward. This carried dy: -3 — centre at -41.5, and
    // the own-team circle (r 2.9) reaching -44.4, so 1.9 ft of winger was drawn
    // through the lower dasher. The own circle's ceiling is 39.6 nominal and 39.2
    // once the 0.75 stroke's 0.375 halo counts; at dy 0 the ink stops at -41.8.
    { id: 'W2', pos: 'F', at: { at: 'half-wall:left:far', dx: -1 }, label: 'the target' },
  ],

  routes: [
    // Bow -32 puts the curve's deepest point at x -97.7, about two and a half feet
    // off the end boards and dead behind the net — a rim that leaves the wall is
    // not a rim. It cuts the far corner by a few feet more than a real puck would;
    // one quadratic cannot trace two corners, and splitting it into two segments
    // would read as two separate passes.
    { from: RETRIEVAL, to: RIM_TO, kind: 'pass', bow: -32 },
  ],

  puck: { at: 'corner:right:far', dx: -1, dy: -7 },
};

// ---------------------------------------------------------------------------
// 6 — D-to-D. Behind your own net. Never through the slot.
// ---------------------------------------------------------------------------

const DD_D1 = { at: 'corner:right:far', dx: -3, dy: -4 };       // (-85, 30)
const DD_D2 = { at: 'corner:left:far',  dx: -3, dy: 4 };        // (-85, -30)

const dToD = {
  id: 'breakout-d-to-d',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'D-to-D: the pass across to your partner, changing which side the attack comes from and forcing ' +
    'the whole forecheck to reset and shift. Drawn in your own defensive zone at the left of the ' +
    'picture, with the strong side flooded and the far side free, which is the read the option ' +
    'needs — its real value is that it costs the opposition time, because everything they had ' +
    'covered comes uncovered while they travel. The route is the point of the picture, and it is the reason ' +
    'this diagram exists: go behind your own net, never through the shaded area. Intercepted below ' +
    'the goal line the pass means nothing, because there is no shot from there; the same pass in ' +
    'front of the net is a point-blank chance against, and it is one of the most punished mistakes ' +
    'in the game — coaching emphasis, not a counted ranking. Pass it quickly rather than skating it ' +
    'across, because carrying the puck toward your partner drags the pressure with you and hands ' +
    'him your problem.',

  describe:
    'The full sheet, the defending zone at the left. The defenceman D1 has the puck in the right ' +
    'corner; the defenceman D2 is low in the left corner. Two opposition forwards are on the right ' +
    'side, one deep and one on the wall — the flooded side. A shaded region covers the danger zone: ' +
    'the ice between the faceoff dots from the goal line up to the hash marks, plus the narrower ' +
    'slot from there out to the tops of the circles. The single dashed pass runs from D1 down and ' +
    'around behind the goal, staying between four and six feet behind the net the whole way, and up ' +
    'to D2. It never enters the shaded region. The goaltender is in the crease.',

  // The section defines the danger zone in words that are already geometry: "the
  // slot plus the ice between the faceoff dots down to the goal line". Drawn as
  // exactly that union — a rectangle from the goal line to the dot line between
  // the dots, and a narrower band from there to the tops of the circles — rather
  // than as the smoothed "home plate" shape, which would be a claim the section
  // does not make.
  zones: [
    {
      label: 'the danger zone',
      points: [
        { at: 'goal-line::far', dy: 22 },
        'faceoff-dot:right:far',
        { at: 'high-slot::far', dy: 7 },
        { at: 'top-of-circle:right:far', dy: -15 },
        { at: 'top-of-circle:left:far', dy: 15 },
        { at: 'high-slot::far', dy: -7 },
        'faceoff-dot:left:far',
        { at: 'goal-line::far', dy: -22 },
      ],
    },
  ],

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    // The labels name the players, not the ice — "the flooded side" hung on a
    // glyph reads as a description of the defenceman. The read lives in the caption.
    // D1 CARRIES NO LABEL, for the same reason the rim diagram above gives: the
    // placer had no legal slot for one and exiled it. 'has the puck' was drawn at
    // (81.5, -29.2) — the FAR END ZONE, inside the attacking right faceoff circle —
    // on a dashed leader line 176.7 ft long that ran the whole sheet and passed
    // 1.47 ft from F1's centre, i.e. straight through an opposition forward's 2.9 ft
    // glyph. The mechanism is the placer's last-resort branch: every one of its
    // eighteen offsets round D1 (-85, 30) collides with F1 (-75, 28), F2 (-67, 38.5),
    // the route or the boards, and its sweep then requires a slot nearer to D1 than
    // to any other labelled anchor. F1 is 10 ft closer to every point on the far side
    // of the rink than D1 is, so no such slot exists anywhere, and the ratio fallback
    // that catches that case maximises other/mine — which tends to 1 as the distance
    // grows, so it drives the label to the far corner of the sheet.
    //
    // Nothing is lost. The puck disc is drawn at D1's stick, which is the notation
    // for having it, and the describe says "The defenceman D1 has the puck in the
    // right corner" in words.
    { id: 'D1', pos: 'D', at: DD_D1 },
    { id: 'D2', pos: 'D', at: DD_D2, label: 'open across' },
    { id: 'F1', pos: 'F', team: 'opp', at: { at: 'corner:right:far', dx: 7, dy: -6 },
      label: 'pressure' },
    { id: 'F2', pos: 'F', team: 'opp', at: { at: 'half-wall:right:far', dx: 2 } },
  ],

  routes: [
    // Bow -18 holds the pass between x -93 and -95 for its whole middle third, so
    // it is behind the net's back rail at -92.33 everywhere it is anywhere near
    // the goal mouth. This is the one route in the file whose exact depth is the
    // teaching point.
    { from: DD_D1, to: { at: 'corner:left:far', dx: -5, dy: 10 }, kind: 'pass', bow: -18 },
  ],

  puck: { at: 'corner:right:far', dx: -1, dy: -7 },
};

// ---------------------------------------------------------------------------
// 7 — Stretch pass. The one diagram that needs all 200 feet.
// ---------------------------------------------------------------------------

const STRETCH_D1 = { at: 'corner:right:far', dx: -2, dy: -2 };  // (-84, 32)
const STRETCH_W2 = { at: 'point:left', dx: -4 };                // (21, -20)

const stretch = {
  id: 'breakout-stretch-pass',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'The stretch pass, which is why this picture is the whole 200-foot sheet: your defensive zone is ' +
    'at the left, the far blue line at the right. One forward — usually the weak-side winger — has ' +
    'left the zone early and is waiting up ice, and the retrieving defenceman looks up before he ' +
    'handles the puck and leads him so he collects it in stride. The read is the shape drawn: the ' +
    'opposition has committed all three forwards deep and their defencemen have stepped up, which is ' +
    'what leaves both a lane and a winger behind the coverage. The winger is drawn on his own side ' +
    'of the far blue line because that is what keeps him onside — one skate in contact with the line ' +
    'or behind it at the instant the puck completely crosses is enough, NHL and IIHF Rule 83.1 in ' +
    'the same words, and a trailing skate in the air still counts because the plane is unbroken, ' +
    'though under USA Hockey Rule 630(a) and Hockey Canada Rule 6.11 an airborne skate is ' +
    'offside — two books of the four. Only the two players the ' +
    'option names are drawn for the breaking-out team. And the honest risk: a completed stretch is ' +
    'close to a breakaway, an intercepted one is a full-speed rush the other way with your winger ' +
    'sixty to eighty feet behind the puck, the pass drawn here is over a hundred feet on an NHL ' +
    'sheet, and in most amateur hockey it is not a good default.',

  describe:
    'The full 200-foot sheet. The defenceman D1 has the puck in the right corner of his own zone at ' +
    'the left of the picture. Three opposition forwards are deep in that zone: one on the right ' +
    'wall above him, one low on the left, one in the middle. Two opposition defencemen stand on the ' +
    'blue line of that zone, stepped up. The winger W2 is a long way up ice at the right, just on ' +
    'his own side of the far blue line, alone. A single long dashed pass runs from D1 diagonally ' +
    'across and up the sheet to him, passing under the near forechecker, outside the danger zone, ' +
    'and between the two stepped-up defencemen. No other own player is drawn.',

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    { id: 'D1', pos: 'D', at: STRETCH_D1, label: 'looks up first' },
    { id: 'W2', pos: 'F', at: STRETCH_W2, label: 'waiting up ice' },

    // "the opposition has committed all three forwards deep on the forecheck and
    // their defencemen have stepped up". Three deep, two on the line: that is the
    // shape the read is made against, and the shape is the read.
    //
    // HE IS ON THE WALL, SO dy 0. ASSUMES half-wall.y = 38.5 and the boards at
    // y +-42.5 (site/src/data/rink.json — read the $comment there before changing
    // either). The opposition triangle is asymmetric: apex at cy +3.6, base at
    // cy -1.8, so on the +y wall the ceiling is 38.9 and ANY positive dy here draws
    // a body through the dasher. This carried dy: 3 — centre at 41.5, apex at 45.1,
    // 2.6 ft of forechecker through the boards with 0.6 ft of it outside the viewBox
    // altogether, which is what was truncating the label. The dy was justified as
    // pushing him off the pass line, and that justification was computed when
    // half-wall.y was 33. At 38.5 the pass crosses this x at y 26.6 and misses the
    // glyph's base by ten feet, so there is nothing left to push away from.
    //
    // dx -4, not -6, because this end of the wall is round: the apex must also stay
    // inside the corner arc, radius 28 about (-72, 14.5). At dx -6 the apex clears
    // that arc by 0.24 ft; at dx -4, by 0.38 — the margin the straight wall gives.
    { id: 'F1', pos: 'F', team: 'opp', at: { at: 'half-wall:right:far', dx: -4 },
      label: 'all three deep' },
    { id: 'F2', pos: 'F', team: 'opp', at: { at: 'corner:left:far', dx: -2, dy: 4 } },
    { id: 'F3', pos: 'F', team: 'opp', at: { at: 'high-slot::far', dy: 8 } },
    { id: 'D',  pos: 'D', team: 'opp', at: 'point:right:far', label: 'stepped up' },
    { id: 'D',  pos: 'D', team: 'opp', at: 'point:left:far' },
  ],

  routes: [
    // Flat and straight: "lead the receiver so they collect it in stride". It
    // crosses the hash-mark line at y 24.6 — outside the dots, so outside the
    // danger zone — and crosses the blue line at y 2.8, between the two stepped-up
    // defencemen rather than through either of them.
    { from: STRETCH_D1, to: { at: 'point:left', dx: -10, dy: 3 }, kind: 'pass' },
  ],

  puck: { at: 'corner:right:far', dx: -2, dy: -6 },
};

// ---------------------------------------------------------------------------
// 8 — The strong-side winger's trip down the wall.
// ---------------------------------------------------------------------------

// The two ends of the trip. The section: "You start high, up on the opposing point
// man ... you leave the point and drop to the wall between the hash marks and the
// goal line ... Those two spots are **44 to 64 feet apart** — the point is at the
// blue line, 64 ft out from the goal line, and the outlet band runs from level with
// the faceoff dot, 20 ft out from the goal line, down to the goal line itself."
//
// DRAWN, THEY ARE NOW 47.8 FT APART — 48.3 along the bowed route — which is inside
// the section's range instead of under its floor. ASSUMES half-wall.y = 38.5
// (site/src/data/rink.json).
//
// WINGER_HIGH used to be dx -8, dy 6, which put it 56 ft out from the goal line
// rather than the blue line's 64 and left the pair 42.6 ft apart as the crow flies
// and 43.1 along the route — under the floor of 44 on every measure, while the
// caption AND the `describe` both quoted the section's 44-to-64 at the reader, and
// the `describe` is read aloud by the speech pipeline. The 8 ft was there to keep
// the glyph off the opposition defenceman standing at 'point:right:far', and the
// shortfall was reported rather than closed because closing it meant moving a
// glyph.
//
// It is closed by moving the winger UP-ICE rather than sideways, which is what the
// section describes anyway: "you start high, up on the opposing point man". At
// dx -2 he is two feet inside the blue line, 62 ft out from the goal line, and the
// clearance that dy was buying is bought by dy 9 instead — 9.22 ft from the
// opposition defenceman's anchor, against 10.00 before, so the collision the old
// placement avoided is still avoided. WINGER_LOW is unchanged at 15 ft out, inside
// the outlet band. The route's bow is unchanged and its curve peaks at y 37.73,
// nowhere near the dasher.
//
// The alternative was to correct the `describe` to the drawn 42.6 and leave the
// picture short. Rejected: the caption states 44-to-64 as a fact about the two
// spots on a real sheet, so a `describe` reading "about forty-three feet" in the
// same breath contradicts it to a listener who has only the audio — and the
// picture would still be teaching a shorter trip than the section it illustrates.
//
// What stood here before that was "Drawn, they are 41.4 ft apart, which is the
// section's own figure arrived at rather than rounded toward" against a section
// quoted as saying "about 40 feet". Both halves were dead. 41.4 is the figure this
// pair resolved to when half-wall.y was 33, and the section has since replaced
// "about 40" with the 44-to-64 range the caption already carries.
const WINGER_HIGH = { at: 'point:right:far', dx: -2, dy: 9 };   // (-27, 29)
// ASSUMES half-wall.y = 38.5 (site/src/data/rink.json).
const WINGER_LOW  = { at: 'half-wall:right:far', dx: -5, dy: -1 }; // (-74, 37.5)

const wingerWall = {
  id: 'breakout-winger-wall',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'The strong-side winger’s trip, drawn in your own defensive zone at the left of the picture ' +
    'at the instant your team wins the puck. He starts high, level with the opposing point man — ' +
    'that is his defensive-zone coverage under the house-default low zone collapse, and being there ' +
    'is not an error — and comes down the wall to the boards between the hash marks and the goal ' +
    'line, at or just below the dot line, never above it. Those two spots are 44 to 64 feet ' +
    'apart and they belong to two different moments: the trip between them, and its timing, is the ' +
    'job, and neither end of it is a place to live. Time the arrival rather than camping, because it ' +
    'is better to be a little late than a little early — it is easy to speed up and very hard to ' +
    'slow down and re-accelerate — and arrive with the body open to the ice rather than the nose ' +
    'against the glass. Wall position is system-dependent: a flat or spread structure asks wingers ' +
    'to hold higher toward the blue line, and a stretch or flying-winger structure sends one winger ' +
    'up ice entirely, so find out which one you are in. ' +
    // SAFETY. Not composed here: this is the owner's own wording, content/systems/breakouts.md:516
    // — "Never: Shield with your back to the boards, or duck. Get your skates parallel to the
    // boards instead, forearm and hip to the wall, head up and chin off your chest". The sibling
    // off-wing-open-to-the-ice teaches the same reception and already carries it. LAST, because
    // the renderer ambers from the first glyph to the end of the caption with no closing delimiter.
    '⚠️ Never shield with your back to the boards, or duck. Get your skates parallel to the ' +
    'boards instead, forearm and hip to the wall, head up and chin off your chest.',

  describe:
    'The full sheet, the defending zone at the left. The winger W1 is high in his own zone, just ' +
    'inside the blue line and level with an opposition defenceman standing on that line. A skating ' +
    'route curves from W1 out toward the right boards and then down them, finishing on the wall ' +
    'just below the hash-mark line, some forty-eight feet from where it began — inside the 44 to 64 ' +
    'feet those two spots are apart on an NHL sheet. The defenceman D1 is deep ' +
    'in the right corner with the puck, which his team has just won. The goaltender is in the ' +
    'crease. No pass is drawn: this diagram is the trip, not the exit.',

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    { id: 'D1', pos: 'D', at: RETRIEVAL, label: 'wins it' },
    { id: 'W1', pos: 'F', at: WINGER_HIGH, label: 'starts high' },
    // The opposing point man W1 has been covering. He is at the blue line, which
    // is "the point" from the other team's side of it.
    { id: 'D',  pos: 'D', team: 'opp', at: 'point:right:far', label: 'their point' },
  ],

  routes: [
    // Bowed toward the boards so the route reads as down the WALL rather than as
    // a diagonal across the zone, and so it finishes travelling down-ice along the
    // wall — the direction the winger is facing when the pass arrives.
    { from: WINGER_HIGH, to: WINGER_LOW, kind: 'skate', bow: -6 },
  ],

  puck: { at: 'corner:right:far', dx: -1, dy: -7 },
};

// ---------------------------------------------------------------------------
// 9 — The centre's low support swing.
// ---------------------------------------------------------------------------

// The destination, in the upper part of the shaded box so the arrowhead does not
// land on the box's own label, which is drawn at the polygon's centroid.
const SWING_TO = { at: 'faceoff-dot:right:far', dx: -8, dy: -3 };  // (-77, 19)
const SWING_FROM = { at: 'top-of-circle:right:far', dx: 8, dy: -6 };  // (-46, 16)

const centreSwing = {
  id: 'breakout-centre-swing',
  owner: 'content/systems/breakouts.md',
  half: false,
  width: 900,

  caption:
    'The centre’s low support swing, drawn in your own defensive zone at the left of the ' +
    'picture. The shaded box is where the centre is going: inside the faceoff dots and below the ' +
    'hash marks, in the strong-side circle — not out on the wall, which is the strong-side ' +
    'winger’s ice, where one opponent would cover them both and the middle-lane option the ' +
    'structure depends on disappears. If you can touch the glass you are in the wrong job. The route ' +
    'curls away from the puck first and then turns back into it, which is how the centre arrives ' +
    'already moving instead of receiving standing still. Below the hash marks the lane is open, the ' +
    'pass is short and the centre receives facing up ice; above them he is level with the ' +
    'opposition’s forwards and the puck arrives into his back. Centre-low is itself a coaching ' +
    'choice — the alternative is the centre fly, and both are legitimate — but a centre flying in a ' +
    'flat or spread system where the wingers hold high near the blue line leaves nobody underneath ' +
    'the puck at all, and that is the breakdown you see most weekends.',

  describe:
    'The full sheet, the defending zone at the left. A shaded box sits in the right faceoff circle, ' +
    'bounded by the hash-mark line above, the faceoff dot line on the boards side, and the middle of ' +
    'the ice — the low support ice. The centre C is above and outside it, higher in the zone. A ' +
    'skating route runs from him, curving first away from the puck toward the middle of the ice and ' +
    'then back toward the boards, finishing inside the shaded box. The defenceman D1 has the puck in ' +
    'the right corner and the winger W1 is on the right boards above the box, on the ice the centre ' +
    'must not drift into. The goaltender is in the crease.',

  // The section gives two boundaries and only two: below the hash marks, and
  // inside the dots. The box is drawn as exactly those, closed toward the middle
  // of the ice and toward the goal line at the near edge of the circle, so it
  // reads as the strong-side circle it names rather than as a region invented here.
  //
  // Deliberately unlabelled. A zone's label is drawn at its centroid with no
  // collision avoidance, and "low support" at 3.2 ft per line is wider than the
  // box itself — it spilled over the winger's label and sat under the arrowhead.
  // The caption names the box instead, which is also what a listener gets.
  zones: [
    {
      points: [
        'faceoff-dot:right:far',
        { at: 'faceoff-dot:right:far', dx: -11 },
        { at: 'high-slot::far', dx: -11, dy: 4 },
        { at: 'high-slot::far', dy: 4 },
      ],
    },
  ],

  players: [
    { id: 'G',  pos: 'G', at: GOALIE },
    { id: 'D1', pos: 'D', at: RETRIEVAL },
    // 'the winger', not the 'not your ice' this carried. A label is hung on a glyph
    // and drawn with a leader line to it, so it describes THAT PLAYER — the rule the
    // D-to-D diagram above states in terms ("the labels name the players, not the
    // ice"). W1 is your own winger, standing exactly where the caption says he
    // belongs: the wall "is the strong-side winger's ice". Written on him, "not your
    // ice" told the winger to leave the wall, which is the opposite instruction, and
    // it collapses the breakout the rest of the picture is drawing.
    //
    // The read it was reaching for is the CENTRE's, and it stays in the caption
    // ("not out on the wall, which is the strong-side winger's ice") and in the
    // describe ("on the ice the centre must not drift into"). Both are voiced.
    { id: 'W1', pos: 'F', at: WALL_SPOT, label: 'the winger' },
    { id: 'C',  pos: 'F', at: SWING_FROM, label: 'the centre' },
  ],

  routes: [
    // "Take a route that has you moving AWAY from the puck briefly, then turning
    // back into it." Bow +12 pulls the curve toward the middle of the ice — away
    // from a puck in the right corner — before it turns back toward the boards,
    // and the route finishes travelling down-ice and outward, which is a centre
    // arriving with speed rather than stopping into the spot.
    { from: SWING_FROM, to: SWING_TO, kind: 'skate', bow: 12 },
  ],

  puck: { at: 'corner:right:far', dx: -1, dy: -7 },
};

export default [
  fiveRoles,
  up,
  wheel,
  reverse,
  rim,
  dToD,
  stretch,
  wingerWall,
  centreSwing,
];
