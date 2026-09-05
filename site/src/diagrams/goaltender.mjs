/**
 * Diagrams for content/positions/goaltender.md, "Angles and Positioning — The Core
 * of the Position" and the "Depth is the fundamental decision" section above it.
 *
 * The section is the source of truth. Every player, every route and every shaded
 * region below is one its prose describes; where the prose hedges — "the rough
 * defaults, which every goalie coach will adjust", "there is no universally correct
 * answer" — the caption carries the hedge.
 *
 * WHY THESE FOUR AND NOT MORE. Goaltending is the one subject in this corpus whose
 * distances are smaller than the renderer's resolution. The whole of a goalie's
 * working area is the crease, and the crease is 8 ft by 6 ft on a 200 ft sheet, so
 * a 2 ft change of depth is about seventeen pixels at the width these render at and
 * the glyph that marks the goaltender is itself 5.8 ft across. Anything whose
 * lesson is a movement of a few feet — the post-to-post arc, the big shuffle, the
 * step off the post — cannot be drawn here honestly, and is left to the prose.
 * What survives at rink scale is the *angle*: the wedge from the puck to the two
 * posts is tens of feet long, and it is exactly the thing the section says is hard
 * to picture. Three of the four diagrams below are about that wedge.
 *
 * THE SHADED WEDGE. `zones` draws a polygon of named positions. Here it is the
 * triangle whose apex is the puck and whose base is the goal line between the
 * posts — i.e. every straight path from that puck that ends up in the net. The
 * section asks for it in terms: "Think of it geometrically... From the shooter's
 * point of view, you are a wall of a certain size at a certain distance", "the
 * shooter can only score by hitting the edges". No zone carries a `label`: a zone
 * label is drawn at the polygon's centroid, and the centroid of a shooting wedge is
 * roughly where the goaltender is standing.
 *
 * Only ONE diagram carries a wedge, and that is a decision made at the render, not
 * at the keyboard. Drawn to a six-foot net on an eighty-five-foot sheet the wedge is
 * a long thin sliver however far out the puck is, and when the puck is wide and low
 * the whole wedge is three feet deep and sits underneath the goaltender's own glyph.
 * A caption inviting a reader to compare two shaded regions, one of which is not
 * visible, is worse than no shading at all — so the "the angle closes on its own"
 * diagram states that in words and does not pretend to draw it.
 *
 * WHAT THE GLYPH IS NOT. The goaltender glyph is a fixed 5.8 ft circle. It marks
 * *where the goaltender is*, and it must not be read as how much of the wedge a
 * goaltender covers — a real goaltender is nothing like six feet wide. No caption
 * below invites that reading, and none of them claims the picture shows coverage
 * growing with depth, because at this glyph size it does not.
 *
 * ONE THING THE RENDERER DRAWS SHORT, NOTED HERE SO THE NEXT READER DOES NOT THINK
 * IT IS A FAULT IN THESE SPECS. `endZone()` in site/scripts/lib/rink.mjs draws the
 * crease's straight side lines 1 ft *inward from the goal line* and closes them with
 * a 6 ft arc between those two endpoints, which puts the painted apex 2.53 ft out.
 * The crease the corpus owns is 6 ft deep — rink.json's `crease_depth`, and this
 * document's own "the arc is six feet from the middle of the goal line". So a
 * goaltender placed at the top of the crease, correctly, renders about two and a
 * half feet outside the paint. The positions below follow the owned geometry, not
 * the drawing; the drawing is a finding against rink.mjs, which is not this file's
 * to change. If it is fixed, nothing here needs to move.
 *
 * GEOMETRY THE CORPUS OWNS. The goal line, the posts and the crease belong to
 * content/foundation/rink_map_and_glossary.md via src/data/rink.json, and
 * scripts/check_geometry.py asserts them. Nothing here restates a crease or net
 * dimension; every position below is a named position plus an offset in feet, and
 * every offset is derived in a comment from the named positions, never measured off
 * a picture.
 */

// --- the two posts, as offsets from the centre of the goal line ------------------
// 'goal-line' is (89, 0) — "the exact centre of the goal line", which is the anchor
// the section's own sentence names ("a line drawn from the puck to the exact centre
// of the goal line"). rink.json puts the posts at y = +-3.
const POST_R = { at: 'goal-line', dy: 3 };
const POST_L = { at: 'goal-line', dy: -3 };

// --- diagram 1 and 4 share a shooter, deliberately -------------------------------
// The top of the right-hand faceoff circle, on the corpus's own vocabulary. The
// puck sits ~3 ft off the glyph so the wedge's apex is the puck and not the player,
// and so the wedge does not start underneath a circle.
const TOP_CIRCLE_R = 'top-of-circle:right';                       // (54, 22)
const PUCK_TOP_CIRCLE = { at: 'top-of-circle:right', dx: 2.5, dy: -2 };  // (56.5, 20)

// The line from that puck to the centre of the goal line: (89,0) - (56.5,20) is
// (32.5, -20), length 38.16, unit (0.8517, -0.5241). Every goaltender position in
// diagrams 1 and 4 is a distance along that line back from (89, 0), so all three
// are on the same line and only the depth differs. That is the section's own
// framing: "Depth = how far out of your net you are, measured along the line from
// the puck to the middle of the goal."
//   6 ft out: (89,0) + 6 * (-0.8517, 0.5241) = (83.89, 3.14)
//   2 ft out: (89,0) + 2 * (-0.8517, 0.5241) = (87.30, 1.05)
const ON_LINE_6 = { at: 'goal-line', dx: -5.11, dy: 3.14 };
const ON_LINE_2 = { at: 'goal-line', dx: -1.7, dy: 1.05 };
// The far excursion of diagram 4. The section fixes it two ways at once — "out as far
// as the hash marks... about twenty feet from your goal line" — and the two agree:
// rink.json puts the end-zone dot 20 ft from the goal line at x = 69, and the hash
// marks straddle that dot's x. So this is the point on the puck-to-net line at
// x = 69, which is 23.5 ft along it: (89,0) + 23.5 * (-0.8517, 0.5241) = (68.99, 12.32).
// Placing it 20 ft *along the line* instead would have been 17 ft from the goal line,
// three feet short of the figure the section actually gives.
const ON_LINE_HASH_MARKS = { at: 'goal-line', dx: -20.01, dy: 12.32 };

const playingTheAngle = {
  id: 'goalie-playing-the-angle',
  owner: 'content/positions/goaltender.md',
  half: true,
  width: 900,

  caption:
    'An opposition shooter has the puck at the top of the right-hand faceoff circle, ' +
    'with no second attacker to pass to. The shaded wedge running from the puck to the ' +
    'two goalposts is every straight path from that puck into the net — the whole of ' +
    'what the shooter has to shoot at. The goaltender is standing on the line from the ' +
    'puck to the exact centre of the goal line, which is neither the middle of the goal ' +
    'nor the middle of the ice, and has come out to challenge. A rough ' +
    'default for this read — one shooter, from distance, no pass available — is the top ' +
    'of the crease or beyond, but it is a default every goalie coach will ' +
    'adjust, so treat the depth drawn here as an example of the read and not a measured ' +
    'instruction.',

  describe:
    'The attacking half of the rink, the defended net at the right. One opposition ' +
    'forward stands at the top of the right-hand faceoff circle with the puck just off ' +
    'the blade toward the net. A shaded triangle runs from the puck to the two goalposts, ' +
    'narrowing from the width of the net at the goal line to a point at the puck. The ' +
    'goaltender stands inside that triangle on its centre line, six feet out from the ' +
    'middle of the goal line, so slightly to the shooter’s side of the middle of the ' +
    'net rather than square in the goalmouth. No other players are drawn: the read this ' +
    'illustrates is the one with no pass available, and drawing a second attacker would ' +
    'change it into a different read.',

  // Every straight path from the puck into the net. The apex is the puck and the
  // base is the mouth of the goal, post to post.
  zones: [{ points: [PUCK_TOP_CIRCLE, POST_R, POST_L] }],

  players: [
    { id: 'F1', team: 'opp', pos: 'F', at: TOP_CIRCLE_R, label: 'the shooter' },
    // "Get to the top of the crease or beyond" — the challenge read. Six feet from
    // the centre of the goal line, measured along the puck-to-net line.
    { id: 'G', pos: 'G', at: ON_LINE_6, label: 'on the line' },
  ],

  puck: PUCK_TOP_CIRCLE,
};

// --- diagram 2: the front door against the back door -----------------------------
// A strong-side shooter and an unmarked opponent at the far post — the section's own
// two terms: "when you challenge a shooter, the shooter is the front door; the space
// you have opened up behind you, usually to the far side of the net, is the back
// door."
const SHOOTER_R = { at: 'faceoff-dot:right', dx: 4 };            // (73, 22)
const PUCK_STRONG_SIDE = { at: 'faceoff-dot:right', dx: 7, dy: -3 }; // (76, 19)
// Line from (76,19) to (89,0): (13,-19), length 23.02, unit (0.5647, -0.8254).
// Backed off to 4 ft rather than out at 6: "Pass available across the slot: back off."
//   4 ft out: (89,0) + 4 * (-0.5647, 0.8254) = (86.74, 3.30)
const ON_LINE_STRONG_4 = { at: 'goal-line', dx: -2.26, dy: 3.3 };
// The unmarked opponent on the far side of the net — the section's "space you have
// opened up behind you, usually to the far side of the net", and the spoken call's
// "unmarked opponent waiting at the far post". Set five feet off the goal line and
// seven feet wide of its centre rather than literally on the post, for one reason
// that is about the drawing and not about hockey: the pass to him has to stop short
// of his glyph AND stop outside the crease, and with him tight to the post there is
// no point on the ice that is both.
const BACK_DOOR = { at: 'goal-line', dx: -5, dy: -7 };           // (84, -7)
// Seven feet short of him along the passing line. (84,-7) minus (76,19) is (8,-26),
// length 27.2, unit (0.294, -0.956); (84,-7) - 7 * that = (81.94, -0.31). The crease
// arc reaches back only to x = 83.0 at that y, so the arrowhead stops clear of the
// paint, and it stops 4.1 ft clear of the receiving glyph's edge.
const PASS_END = { at: 'goal-line', dx: -7.06, dy: -0.31 };

const frontDoorBackDoor = {
  id: 'goalie-front-door-back-door',
  owner: 'content/positions/goaltender.md',
  half: true,
  width: 900,

  caption:
    'A strong-side shooter has the puck, and a second attacker is standing unmarked on ' +
    'the far side of the net — the back door. The goaltender is on the line from the puck to the ' +
    'centre of the goal line but has backed off toward the goal line rather than ' +
    'challenging, because the read for a pass available across the slot is to ' +
    'back off: being slightly less square to a shot you can still see beats being ' +
    'perfectly square to a shot that never comes while the back door is wide open. ' +
    'How far to back off is a judgement made situation by situation and not a fixed ' +
    'distance — the trade is always the front door against the back door, and there is ' +
    'no universally correct answer, only a correct answer for each situation. Nobody is ' +
    'drawn covering that far-post attacker, because an unmarked opponent there is ' +
    'exactly what the goaltender’s call of “back door” is for.',

  describe:
    'The attacking half of the rink, the defended net at the right. An opposition ' +
    'forward has the puck just inside the right-hand faceoff dot. A second opposition ' +
    'forward stands unmarked on the far side of the net, five feet out from the goal ' +
    'line and clear of the crease. A dashed line — the notation for a pass — shows the ' +
    'pass available across the slot, running from the puck toward that attacker and ' +
    'stopping well short of him. The goaltender stands on the line from the puck to the ' +
    'centre of the goal line, four feet out, nearer the goal line than the top of the ' +
    'crease. No defenders are drawn; the point of the picture is the goaltender’s depth ' +
    'decision and the space behind them.',

  players: [
    { id: 'F1', team: 'opp', pos: 'F', at: SHOOTER_R, label: 'the shooter' },
    { id: 'F2', team: 'opp', pos: 'F', at: BACK_DOOR, label: 'back door' },
    { id: 'G', pos: 'G', at: ON_LINE_STRONG_4, label: 'backed off' },
  ],

  // The pass the depth decision is about — "a pass available across the slot", the
  // section's own phrase. Dashed line, which is the published key's symbol for
  // passing. It stops seven feet short of the receiver and eight feet short of the
  // goal line, so it neither terminates on a glyph nor runs through the crease.
  routes: [
    { from: PUCK_STRONG_SIDE, to: PASS_END, kind: 'pass' },
  ],

  puck: PUCK_STRONG_SIDE,
};

// --- diagram 3: the angle closes on its own --------------------------------------
// "As the puck moves toward the boards the angle closes on its own; you do not need
// depth to cover a shot from the goal line, and depth there just means you cannot
// get back."
// Wide and low, just in front of the goal line rather than exactly on it: drawn on
// the line the glyph straddles the painted goal line and the reader cannot tell
// whether the shooter is in front of it or behind it, which in this section is the
// difference between a shot and a wrap-around.
const SHOOTER_WIDE = { at: 'goal-line', dx: -4, dy: 18 };        // (85, 18)
const PUCK_WIDE = { at: 'goal-line', dx: -2.5, dy: 14.5 };       // (86.5, 14.5)
// At the post, not near it. Just in front of the goal line at the right post, so the
// glyph sits against the post rather than a foot off it — which is the whole point
// of the bullet it comes from.
const AT_POST_R = { at: 'goal-line', dx: -1.5, dy: 2.6 };        // (87.5, 2.6)

const angleClosesWide = {
  id: 'goalie-angle-closes-wide',
  owner: 'content/positions/goaltender.md',
  half: true,
  width: 900,

  caption:
    'The puck has gone wide and low, out level with the goal line between the net and ' +
    'the boards, and the goaltender has come back to the near post. Two things put them ' +
    'there. The angle closes on its own as the puck moves toward the boards, so depth ' +
    'buys nothing from out here and only leaves you unable to get back; and finishing a ' +
    'lateral movement a foot short of the post rather than at it leaves a gap between ' +
    'your pad and the post for a shooter to pick — the low short-side goal, which goalie ' +
    'coaches call the cheapest goal in hockey, though that ranking is coaching emphasis ' +
    'rather than a counted statistic. Closing it does not close the whole short side: ' +
    'with your body low against the post the space over your shoulder is a separate ' +
    'exposure, and shooters at higher levels look for it. This is one end of the shallow arc ' +
    'a goaltender works along — out at the middle, curving back toward the posts as the ' +
    'puck goes wide — and the arc itself is movement the still picture cannot carry.',

  describe:
    'The attacking half of the rink, the defended net at the right. An opposition ' +
    'forward has the puck level with the goal line, about fourteen feet to the right of ' +
    'the net and between the net and the boards. The goaltender is at the near post, on the ' +
    'goal line rather than out at the top of the crease, and tight against the post ' +
    'rather than standing a foot off it. No other players are drawn, and no movement is ' +
    'drawn: the picture is one position on the goaltender’s arc, not the journey to it.',

  players: [
    { id: 'F1', team: 'opp', pos: 'F', at: SHOOTER_WIDE, label: 'the shooter' },
    { id: 'G', pos: 'G', at: AT_POST_R, label: 'at the post' },
  ],

  puck: PUCK_WIDE,
};

// --- diagram 4: the two failure modes --------------------------------------------
// "A goalie who has lost confidence goes to one extreme or the other: hiding deep in
// the net where the posts feel safe (and getting beaten to the corners), or running
// at shooters — sometimes out as far as the hash marks... about twenty feet from
// your goal line — and getting beaten by the first pass or the first change of
// direction."
//
// This is the only diagram here that draws positions the section tells you not to
// play from, and it earns that because the distance is the lesson: "twenty feet from
// your goal line" is a sentence a reader cannot picture, and twenty feet puts the
// goaltender level with the hash marks, out in the slot, a third of the way to the
// shooter. Both goaltender glyphs are the same goaltender, drawn twice; the caption
// says so in its first sentence, because the caption is all a listener gets.
const failureModes = {
  id: 'goalie-depth-failure-modes',
  owner: 'content/positions/goaltender.md',
  half: true,
  width: 900,

  caption:
    'Two positions to recognise in your own game, drawn against the same shooter, and ' +
    'neither of them one to play from — it is the same goaltender drawn twice, at two ' +
    'opposite extremes. One is hiding deep in the net, where the posts feel ' +
    'safe and where the corners of the net are open. The other has run at the shooter, ' +
    'out as far as the hash marks and about twenty feet from the goal line, where the ' +
    'first pass or the first change of direction beats them. Both are ' +
    'confidence problems rather than technique problems, so the fix is not a mechanical ' +
    'one; the position you actually want is a read made situation by situation, out and ' +
    'square and set at the depth that situation calls for.',

  describe:
    'The attacking half of the rink, the defended net at the right. One opposition ' +
    'forward stands at the top of the right-hand faceoff circle with the puck. Two ' +
    'goaltender glyphs are drawn on the line from that puck to the centre of the goal ' +
    'line, representing the same goaltender at two extremes rather than two players. ' +
    'The first is two feet out, effectively in the goalmouth, labelled too deep. The ' +
    'second is twenty feet out, level with the hash marks of the right-hand faceoff ' +
    'circle and out in the slot, labelled too far out. Nothing is drawn between them, ' +
    'because where the goaltender should be is a situation-by-situation read rather than ' +
    'a fixed spot.',

  players: [
    { id: 'F1', team: 'opp', pos: 'F', at: TOP_CIRCLE_R, label: 'the shooter' },
    { id: 'G', pos: 'G', at: ON_LINE_2, label: 'too deep' },
    { id: 'G', pos: 'G', at: ON_LINE_HASH_MARKS, label: 'too far out' },
  ],

  puck: PUCK_TOP_CIRCLE,
};

/* ===========================================================================
 * PART TWO — the sections OUTSIDE "Angles and Positioning"
 *
 * The four specs above cover "Depth is the fundamental decision" and "Playing the
 * angle". Everything below covers the parts of the document whose subject is a
 * piece of ice rather than a piece of technique: where you may play the puck,
 * where you may send it, what a rimmed puck does behind your net, where a tip
 * comes from, and what leaving your net for a loose puck costs.
 *
 * ⚠️ A MEASUREMENT CORRECTION TO THE HEADER ABOVE, MADE BY READING THE RENDERER.
 * The header says "the glyph that marks the goaltender is itself 5.8 ft across".
 * That is the FORWARD circle (r 2.9, so 5.8 ft of body plus a 1.95-wide halo
 * reaching 7.75 ft of ink). The goaltender is not drawn as a circle at all: the
 * `pos === 'G'` branch in site/scripts/lib/rink.mjs emits a bare `<text>` at
 * font-size 4.6 with no halo and no fill, so the letter is roughly 3 ft wide and
 * `glyphCovers` treats it as covering nothing. The header's CONCLUSION survives
 * untouched — the crease is 8 ft wide, a forward's or defenceman's glyph is 7.75
 * to 8.2 ft of ink across, and nothing finer than that can be drawn — but the
 * figure it rests on names the wrong glyph, and the clearances below are computed
 * against the renderer rather than against that sentence.
 *
 * WHAT IS DELIBERATELY NOT REDRAWN HERE, because the corpus already owns it:
 *   the trapezoid's SHAPE ......... `the-trapezoid`, rink_map_and_glossary.md
 *   USA Hockey's privileged area .. `the-privileged-area`, rules_primer.md
 *   the screen from the screener's
 *     side ........................ `screen-the-goalie-sightline`,
 *                                   playing_without_the_puck.md
 *   the 2-on-1 and the 3-on-2 ..... `rush-2-on-1`, `rush-3-on-2-default`,
 *                                   `rush-3-on-2-alternative`, defending_the_rush.md
 *   the PK shapes ................. `pk-box`, `pk-diamond`, `pk-wedge-plus-1`,
 *                                   special_teams.md
 * `goalie-rim-stop-or-clear` below shades the trapezoid, and does so with the
 * SAME five vertices and the same fill `the-trapezoid` uses, so the two pictures
 * cannot drift. It carries no zone LABEL: a zone label is drawn at the mean of
 * its vertices, which for that polygon is (93.4, 0), and the goaltender in that
 * spec stands at (95, 2) — the word would be written through him.
 *
 * ROUTE NOTATION, AND ONE THING NOT DRAWN BECAUSE THE KEY HAS NO MARK FOR IT.
 * A rimmed puck and an outlet are both `pass` — the key's dashed line — because
 * that is what they are. A DIRECTED REBOUND is not: it is neither a pass nor a
 * shot, and no symbol in either published key means "the puck leaves the
 * goaltender in a chosen direction". `goalie-rebound-corners-not-slot` therefore
 * draws the shot arriving and the region the rebound must not go to, and does not
 * draw the rebound itself. Inventing a glyph for it would give one line style two
 * meanings corpus-wide, which the style guide forbids in terms.
 * =========================================================================== */

// --- the slot, as content/foundation/rink_map_and_glossary.md defines it ---------
// The SAME four vertices `the-slot` uses in rink_map_and_glossary.mjs: the top of
// the circles (x 54) to the front edge of the crease (x 83), 7 ft either side of
// centre. Restated here rather than imported because these spec files do not
// import one another — but the label is identical, which is what makes
// scripts/check_zones.py able to compare the two polygons at all.
const SLOT_ZONE = [
  { at: 'top-of-circle:right', dy: -15 },   // (54,  7)
  { at: 'goal-line', dx: -6, dy: 7 },       // (83,  7)
  { at: 'goal-line', dx: -6, dy: -7 },      // (83, -7)
  { at: 'top-of-circle:left', dy: 15 },     // (54, -7)
];

// --- the trapezoid, as src/data/rink.json and Rule 1.8 give it ------------------
// 11 = the 3 ft post offset + Rule 1.8's 8 ft; 14 = 3 + 11. The centre of the goal
// line is listed as a fifth vertex for the same reason `the-trapezoid` lists it:
// it is a point on the boundary, so the shape is unchanged, and it is where the
// goal itself stands.
const TRAPEZOID_ZONE = [
  { at: 'goal-line' },                      // ( 89,   0)
  { at: 'goal-line', dy: 11 },              // ( 89,  11)
  { at: 'goal-line', dx: 11, dy: 14 },      // (100,  14)
  { at: 'goal-line', dx: 11, dy: -14 },     // (100, -14)
  { at: 'goal-line', dy: -11 },             // ( 89, -11)
];

// ---------------------------------------------------------------------------
// 5 · The safe outlets — "The safe outlets"
// ---------------------------------------------------------------------------
//
// WHY THIS EARNS A PICTURE. The section is a RANKED list of five options and the
// ranking is spatial: the safest options are short and stay below the goal line,
// the middle ones concede possession around the boards, and the one it forbids
// runs through the middle of the ice. A reader can hold "never up the middle" as a
// slogan without ever seeing that the forbidden pass and the safe one leave the
// same stick a few degrees apart.
//
// WHY ONLY THREE OF THE FIVE ARE DRAWN, stated in the caption too.
//   1. "Leave it for a defenceman with time" is the option where you do not touch
//      the puck at all. There is no route to draw.
//   4. "Off the glass and out — along the glass, never over it" differs from the
//      rim in HEIGHT, and this is a plan view. Drawing it would be a second line
//      lying on top of the rim's, claiming a distinction the picture cannot make.
//
// The goaltender stands at (95.5, 0) — 3.2 ft behind the back of the goal frame,
// which the renderer draws as a 3.33 ft deep rectangle from the goal line. The
// bare `G` is about 3 ft wide, so it clears the frame rather than sitting on it.
// He is inside the trapezoid there (half-width 12.9 ft at x = 95.5), which is the
// state the section assumes throughout.
const G_BEHIND_NET = { at: 'behind-net', dx: 1.5 };          // (95.5, 0)
const PUCK_BEHIND_NET = { at: 'behind-net', dx: 1.5, dy: 3 }; // (95.5, 3)

// The strong-side defenceman, on the wall level with the goal line. (88, 31) is
// 6.5 ft off the boards — the boards run at y = 37.48 at that x, on the corner arc
// struck from (72, 14.5) with r 28 — and a defenceman's triangle reaches 4.6 ft
// from its centroid, so the apex finishes 1.9 ft clear of the ink.
const D_STRONG_WALL = { at: 'corner:right', dx: 6, dy: -3 };  // (88, 31)
// Eight feet short of him along the passing line, which leaves 3.4 ft between the
// arrowhead and the triangle's ink.
const PASS_SHORT_END = { at: 'corner:right', dx: 8.07, dy: -10.73 }; // (90.07, 23.27)

// The far winger, off the half-wall datum by 0.6 ft. On the datum itself a
// forward's circle reaches 42.375 ft against an inner boards ink edge of 42.25 —
// 0.125 ft over — which is the trap the half-wall $comment in rink.json records.
const W_FAR = { at: 'half-wall:left', dx: 2, dy: 0.6 };       // (71, -37.9)
const RIM_END = { at: 'goal-line', dx: -13, dy: -32 };        // (76, -32)

// The pass the section says to make almost never. Bowed -12 so it goes AROUND the
// net rather than through it: at the goal line the drawn curve is 8 ft off centre,
// clearing the post by 5 ft, and its closest approach to the crease is 6.97 ft off
// centre at x 83.5 where the crease arc reaches 2.4 ft. It finishes at (79, 1.5),
// inside the shaded slot and 3.3 ft clear of that zone's own label box.
const MIDDLE_END = { at: 'goal-line', dx: -10, dy: 1.5 };     // (79, 1.5)

const safeOutlets = {
  id: 'goalie-safe-outlets',
  owner: 'content/positions/goaltender.md',
  title: 'Outlets from behind your net',
  half: true,
  width: 900,

  caption:
    'You have the puck behind your own net and three of your five options are drawn, ' +
    'ranked by risk. The short pass to your defenceman on the wall on your strong side is ' +
    'simple, and if it is intercepted it is intercepted below the goal line where it means ' +
    'less. The rim around the boards to the far winger concedes possession but relieves ' +
    'pressure, so aim it to arrive where a teammate can meet it. The third runs into the ' +
    'shaded slot, and it is the one to make almost never: a goalie’s turnover in the middle ' +
    'of the ice is a shot on an empty net, and you are the one standing in it. Two options ' +
    'are not drawn because a picture cannot carry them. Leaving the puck for a defenceman ' +
    'who has time is the lowest-risk option of all and always comes first when it is ' +
    'available — it is the one where you never touch the puck. And going off the glass and ' +
    'out is rarely wrong when you are in trouble, but along the glass, never over it: a puck ' +
    'you shoot directly out of the rink from your own end is a two-minute minor under NHL ' +
    'and IIHF rules, where USA Hockey’s clause reaches only a deliberate clear. Hockey ' +
    'Canada writes a limb aimed at you specifically — Rule 10.1, clause v, "a goaltender who ' +
    'shoots or bats the puck directly out of the playing surface, with their stick" — and it ' +
    'names no zone at all, so unlike the rule just described it is not confined to your own ' +
    'end. Read the rule rather than the clause, though. The clause carries no deliberateness ' +
    'word where the clauses either side of it do, but Rule 10.1 opens by saying delay of game ' +
    'occurs when a player "deliberately causes a stoppage of play", and calls the list that ' +
    'follows one that "includes, but is not limited to, the following actions" — so the ' +
    'deliberateness sits in the rule above rather than in the clause, and the book never says ' +
    'which reading wins. Treat an accidental clear there as unsettled rather than as free, ' +
    'and keep the puck in the rink. Its Interpretation 5 gives you back the puck that touches the glass, the ' +
    'one that deflects off a player or an official, and the one sent out where there is no ' +
    'glass, such as over a bench. Whether you ' +
    'play the puck at all is your team’s convention rather than a law — some coaches want ' +
    'the goalie handling everything they legally can and others want you to touch nothing. ' +
    'Ask, and then be consistent.',

  describe:
    'The attacking half of the rink, the defended net at the right, with the goaltender ' +
    'standing behind his own net and the puck on his stick. Three dashed lines — the ' +
    'notation for a pass — leave the puck. One runs up the near boards to a defenceman of ' +
    'yours standing on the wall level with the goal line, stopping short of him. One curves ' +
    'around the back of the net and down the far boards toward one of your forwards on the ' +
    'far half-wall, again stopping short. The third arcs over the top of the net and into a ' +
    'shaded region labelled "the slot", shaded as a warning rather than as a target. No ' +
    'opponents are drawn, and no route is drawn for the two options the caption says cannot ' +
    'be pictured.',

  // `danger: true` because for a goaltender moving the puck this region means "never
  // send it through here" — the same sense breakouts.mjs shades "the house" in. In
  // the target blue it would read as "aim for this", which is the one notation
  // collision site/scripts/lib/rink.mjs warns about by name.
  zones: [{ points: SLOT_ZONE, label: 'the slot', danger: true }],

  players: [
    { id: 'G', pos: 'G', at: G_BEHIND_NET, label: 'you' },
    { id: 'D1', pos: 'D', at: D_STRONG_WALL, label: 'on the wall' },
    { id: 'W', pos: 'F', at: W_FAR, label: 'the far winger' },
  ],

  routes: [
    { from: PUCK_BEHIND_NET, to: PASS_SHORT_END, kind: 'pass' },
    { from: PUCK_BEHIND_NET, to: RIM_END, kind: 'pass', bow: 10 },
    { from: PUCK_BEHIND_NET, to: MIDDLE_END, kind: 'pass', bow: -12 },
  ],

  puck: PUCK_BEHIND_NET,
};

// ---------------------------------------------------------------------------
// 6 · The rim, and the line you may not play the puck past —
//     "Stopping pucks for your defence"
// ---------------------------------------------------------------------------
//
// WHY THIS EARNS A PICTURE RATHER THAN REUSING `the-trapezoid`. That diagram draws
// the SHAPE, with no players and no puck, and it is the right picture for a
// glossary. This one draws the DECISION the shape produces for the goaltender: a
// rimmed puck travels behind the goal line OUTSIDE the trapezoid first and only
// then comes into it, and the whole of the section's instruction is about which
// part of that journey you may touch.
//
// The drawn rim crosses the goal line at y = 31.85, where the trapezoid line is at
// y = 11 — so the picture shows the puck spending real distance in the ice you may
// not play it in, which is the fact a reader with only the words does not picture.
// It comes into the trapezoid and dies at (95, 9), where the trapezoid is 12.64 ft
// wide either side.
//
// GEOMETRY. Bowed +8 so the curve hugs the end boards the way a rim does. Its
// maximum x is 95.25 (at t = 0.869), well inside the 100 ft end boards, and at its
// widest it is 8.3 ft clear of the boards ink. It stops 7 ft short of the
// goaltender, the same clearance `goalie-front-door-back-door` uses for a pass to a
// receiver.
const RIM_START = { at: 'corner:right', dx: 2, dy: 3 };      // (84, 37)
const RIM_KILL_END = { at: 'behind-net', dx: 1, dy: 9 };     // (95, 9)
const G_KILL_RIM = { at: 'behind-net', dx: 1, dy: 2 };       // (95, 2)
const D_COMING_BACK = { at: 'goal-line', dx: 1, dy: -14 };   // (90, -14)

const rimStopOrClear = {
  id: 'goalie-rim-stop-or-clear',
  owner: 'content/positions/goaltender.md',
  title: 'The rim: stop it or clear it',
  half: true,
  width: 900,

  caption:
    'A puck rimmed hard around the boards is coming behind your net, and the shaded area is ' +
    'the trapezoid — the marked area behind the goal line inside which you are allowed to ' +
    'play it. Follow the rim: it crosses the goal line out near the boards, well outside ' +
    'that area, and only then comes into it. Inside, the most useful thing you can do is ' +
    'often not a pass at all — kill it dead, leave it for your defenceman, and call "leave ' +
    'it" early, while they are still coming back rather than as they arrive. You have turned ' +
    'a race into a pickup. Out where it crossed the line, get out of the way and let them ' +
    'have it. Under the IIHF book that is not caution, it is the ' +
    // ⚠️ DO NOT reintroduce the phrase "restricted area" into this sentence. The
    // Situation Handbook uses it for the ice behind the goal line you are BARRED
    // from, and the Rule Book uses it for the trapezoid ITSELF — Rule 1.8 is headed
    // "Goalkeeper's Restricted Area". content/positions/goaltender.md:612 flags the
    // clash in terms. A first draft of this caption wrote "blocks a pass inside the
    // restricted area" and a listener with no picture would have taken it to mean a
    // pad in the way INSIDE the trapezoid is a minor, which is the rule inverted.
    'rule: its Situation Handbook answers a goaltender who drops and blocks a pass with the ' +
    'leg pads out beyond that shaded area with a delay-of-game minor, so a pad in the way ' +
    'counts as playing the puck. Under the NHL book, whether a deliberate body block counts ' +
    'as playing it is this document’s reading rather than a quoted interpretation. In front ' +
    'of the goal line, and behind it inside the shaded area, blocking a rim with your pads is ' +
    'completely legal. One exception belongs to this rule and to no other: no penalty is ' +
    'assessed when you play the puck while keeping skate contact with your crease, and it ' +
    'excuses playing the puck rather than freezing it. Where a trapezoid applies is not ' +
    'universal — the NHL and IIHF play have one, neither the USA Hockey nor the Hockey ' +
    'Canada book marks one at all, and England Ice Hockey’s own regulations say it is "not ' +
    'currently enforced" in England and Wales. That edition is 2024-25 and the current ' +
    'In-House Rules are silent on the point, so the published documents do not settle ' +
    'whether the suspension still stands: assume it binds, ask your league, and look behind ' +
    'the net to see whether the lines are painted. ' +
    'And no trapezoid still does not free you to freeze the puck out here — but that is not ' +
    'one rule, because the two books with no trapezoid draw the freeze on different lines. ' +
    'Hockey Canada keys it to your crease and is then in two minds: clause v of ' +
    'Interpretation 3 to Rule 10.1(a) forbids the freeze once you have left the crease, with ' +
    'no warning, clause ii permits covering a shot you came out and stopped, and the book ' +
    'never says which governs. USA Hockey keys it to a region instead, and the region ' +
    'excludes the corner this rim comes through: Rule 614(c) gives the same two minutes for ' +
    'gathering the puck into your body behind the goal line with your body entirely outside ' +
    'the crease, and again anywhere outside its "goalkeeper’s privileged" area — imaginary ' +
    'lines joining the two end-zone faceoff spots and running back from each of them to the ' +
    'end boards.',

  describe:
    'The attacking half of the rink, the defended net at the right. The area behind the goal ' +
    'line between the two red trapezoid lines is shaded. A dashed line — the notation for a ' +
    'pass — starts high on the near boards in front of the goal line and curves around the ' +
    'end boards behind the net, crossing the goal line far out near the boards and outside ' +
    'the shaded area, then running into it and stopping short of the goaltender, who stands ' +
    'behind his own net inside the shaded area. One defenceman of yours is coming back on ' +
    'the far side of the net. No opponents are drawn.',

  // Same five vertices and the same fill as `the-trapezoid` in
  // rink_map_and_glossary.mjs, which owns this region. No outline for the reason
  // that diagram gives: the renderer already paints the two red trapezoid lines,
  // and a second dashed outline drawn on top of them competes with the real
  // marking. No label — see the header note above.
  zones: [{ points: TRAPEZOID_ZONE, stroke: 'none', fill: 'rgba(15,90,143,0.16)' }],

  players: [
    { id: 'G', pos: 'G', at: G_KILL_RIM, label: 'kill it and leave it' },
    { id: 'D1', pos: 'D', at: D_COMING_BACK, label: 'your defenceman' },
  ],

  routes: [{ from: RIM_START, to: RIM_KILL_END, kind: 'pass', bow: 8 }],

  puck: RIM_START,
};

// ---------------------------------------------------------------------------
// 7 · The breakaway retreat — "Breakaways"
// ---------------------------------------------------------------------------
//
// WHY THIS EARNS A PICTURE. It is the one goaltending movement in the document
// whose scale is bigger than a glyph. "Meet them well out, then back in on C-cuts,
// matching their speed so the angle stays closed the whole way" describes eight
// feet of travel along a line thirty feet long, and the key has a symbol for
// exactly that motion: `backward`, drawn as a run of overlapping flattened arches
// — horizontal C-cuts — with no arrowhead, which is how §21.1 draws both backward
// marks. This is the corpus's first use of it in a goaltending diagram and the
// section names C-cuts by that name.
//
// THE DEPTH IS AN EXAMPLE AND THE CAPTION SAYS SO. The Breakaways section gives no
// distance for "well out", and none is invented here. Eleven feet from the centre
// of the goal line sits between the two figures the document DOES give elsewhere —
// the top of the crease at six feet, which "Depth is the fundamental decision"
// offers as a rough default for a lone shooter with no pass available, and the
// hash marks at about twenty, which the same section names as a failure mode.
//
// GEOMETRY. The puck is at (49, 3); the line from it to the exact centre of the
// goal line (89, 0) has unit (0.9973, -0.0748). Both goaltender points are
// distances back along that line from (89, 0), so the retreat is drawn on the
// angle rather than merely toward the net:
//   11 ft out: (89,0) + 11 * (-0.9973, 0.0748) = (78.03, 0.82)
//    3 ft out: (89,0) +  3 * (-0.9973, 0.0748) = (86.01, 0.22)
// The carrier's route finishes at (65, 1), which is 13.03 ft from the goaltender —
// outside ARRIVAL.noArrow, so no arrowhead points into him from close range.
const BREAKAWAY_CARRIER = { at: 'blue-line', dx: 20, dy: 4 };  // (45, 4)
const PUCK_BREAKAWAY = { at: 'blue-line', dx: 24, dy: 3 };     // (49, 3)
const CARRY_END = { at: 'high-slot', dx: -4, dy: 1 };          // (65, 1)
const G_MEET_OUT = { at: 'goal-line', dx: -10.97, dy: 0.82 };  // (78.03, 0.82)
const G_RETREAT_TO = { at: 'goal-line', dx: -2.99, dy: 0.22 }; // (86.01, 0.22)

const breakawayRetreat = {
  id: 'goalie-breakaway-retreat',
  owner: 'content/positions/goaltender.md',
  half: true,
  width: 900,

  caption:
    'One attacker, you, and a lot of time to think — which is the actual difficulty. The ' +
    'answer drawn here is to meet them well out and then back in on C-cuts, matching their ' +
    'speed so the angle stays closed the whole way, rather than standing still at the top of ' +
    'the crease and letting them pick a corner, or charging out and letting them go around ' +
    'you. Keep a little backward motion the whole time: flow means you can react either way, ' +
    'and flat-footed means you can react to nothing. Stay on your feet as long as you ' +
    'possibly can, because their whole plan is to make you commit and the last one to move ' +
    'wins. How far out "well out" is is a read rather than a distance, and this document ' +
    'gives no figure for it, so treat the position drawn here as an example and not a ' +
    'measured instruction. What to watch is a genuine coaching split: one school says watch ' +
    'the puck and treats everything above it as theatre, and another says the puck is exactly ' +
    'what a shooter fakes with and asks you to read the chest and hips instead. The two agree ' +
    'on what they are against — the stick, the eyes and the shoulders. Ask your goalie coach ' +
    'which they teach and be consistent about it, because switching mid-play is how you end ' +
    'up reading neither. The poke check is available if the puck gets too far in front of ' +
    'them, and it is expensive: miss and you have neither reach nor balance.',

  describe:
    'The attacking half of the rink, the defended net at the right. One opposition forward ' +
    'carries the puck out of the neutral zone toward the net, drawn as a long smooth wave — ' +
    'the notation for skating with the puck — ending well short of the goaltender. The ' +
    'goaltender is drawn out in front of his net, about eleven feet from the centre of the ' +
    'goal line and on the line from the puck to that centre. A run of flattened arches — the ' +
    'notation for backward skating, the goaltender’s C-cuts — leads from him back along that ' +
    'same line to a point three feet out, inside the crease. No other players are drawn: a ' +
    'breakaway is one attacker and you.',

  players: [
    { id: 'F1', team: 'opp', pos: 'F', at: BREAKAWAY_CARRIER, label: 'the shooter' },
    { id: 'G', pos: 'G', at: G_MEET_OUT, label: 'meet them out' },
  ],

  routes: [
    { from: BREAKAWAY_CARRIER, to: CARRY_END, kind: 'carry' },
    // No arrowhead on this one, and that is the key's own convention for both
    // backward marks rather than a choice made here.
    { from: G_MEET_OUT, to: G_RETREAT_TO, kind: 'backward' },
  ],

  puck: PUCK_BREAKAWAY,
};

// ---------------------------------------------------------------------------
// 8 · The tip off a point shot — "Reading a tip"
// ---------------------------------------------------------------------------
//
// WHY THIS EARNS A PICTURE. The section's read is a geometric one — "if a forward
// is set up at the goalmouth with their blade in the shooting lane, treat every
// point shot as a probable tip" — and the lane is a line thirty feet long that a
// reader cannot see in the prose.
//
// ⚠️ WHAT THE PICTURE CANNOT DO, AND THE CAPTION SAYS SO. A real net-front tipper
// stands at the edge of the crease, four or five feet from the goaltender. A
// forward's glyph is 7.75 ft of ink across, so two glyphs will not fit in that much
// ice: the tipper is drawn at (76, 3.8), thirteen feet out from the goal line and
// 10.5 ft from the goaltender, which is further off the goalmouth than he would
// really stand. Drawing him where he belongs would put one glyph inside another.
//
// GEOMETRY. The puck is at (27, 18); the line from it to the centre of the goal
// line passes y = 3.77 at x = 76, so the tipper at (76, 3.8) is on the shooting
// lane rather than merely near it. The shot stops at (69, 5.81), which is on the
// same line and 7.28 ft short of him. The goaltender is 2.88 ft out along it, at
// (86.12, 0.84), inside the crease.
//
// ⚠️ THE DEPTH IS A CONSEQUENCE OF WHAT FITS, NOT AN INSTRUCTION, and the caption
// says that too. How deep to play a screened point shot is a live coaching split
// the document flags twice — one school wanting you deeper for time to find the
// puck, and one calling the deep retreat a common error and wanting a close gap —
// and a diagram must not settle it by drawing one of them.
const TIP_POINT = 'point:right';                              // (25, 20)
const PUCK_POINT = { at: 'point:right', dx: 2, dy: -2 };      // (27, 18)
const SHOT_END = { at: 'high-slot', dy: 5.81 };               // (69, 5.81)
const TIPPER = { at: 'goalmouth', dx: -9, dy: 3.8 };          // (76, 3.8)
const G_TIP_DEPTH = { at: 'goal-line', dx: -2.88, dy: 0.84 }; // (86.12, 0.84)

const readingATip = {
  id: 'goalie-tip-from-the-point',
  owner: 'content/positions/goaltender.md',
  half: true,
  width: 900,

  caption:
    'A shot is coming from the point and an opposition forward is set in the shooting lane ' +
    'with his blade on the ice. Watch the sticks and not just the puck: a forward standing ' +
    'there makes every point shot a probable tip, and a tip changes the puck’s direction a ' +
    'few feet in front of you, where no reflex is fast enough to follow it. So you do not ' +
    'try. Stay tall and patient for as long as you can, because a tip that stays low will hit ' +
    'you if you are big and set, and a tip that goes up will not if you are already down. ' +
    'Your best chance is being in the right place with a wide body and a still head, not a ' +
    'heroic reaction. Getting that forward moved is your defenceman’s job, and shouting for ' +
    'it is yours. Two things this picture cannot show you. The forward is drawn further out ' +
    'from the goalmouth than he would really stand, because two player glyphs will not fit ' +
    'in the few feet of ice between a tipper and a goaltender. And the depth the goaltender ' +
    'is drawn at is a consequence of what fits on the page rather than an instruction: how ' +
    'deep to play a screened shot from distance is a genuine coaching split, one school ' +
    'wanting you deeper for time to find the puck and another calling the deep retreat a ' +
    'common error and wanting a close gap to take away room for the puck and for tips. Ask ' +
    'which one your coach teaches before you pick one.',

  describe:
    'The attacking half of the rink, the defended net at the right. An opposition defenceman ' +
    'stands at the right-hand point with the puck. A double line — the notation for a shot — ' +
    'runs from the puck toward the net and stops part of the way there. An opposition forward ' +
    'stands on that line about thirteen feet out from the goal line, in the shooting lane and ' +
    'clear of the crease. The goaltender is on the same line, inside the crease, a little ' +
    'under three feet out from the centre of the goal line. No defenders of yours are drawn: ' +
    'the player who would move that forward is not part of what this picture is about.',

  players: [
    { id: 'D1', team: 'opp', pos: 'D', at: TIP_POINT, label: 'the point shot' },
    { id: 'F1', team: 'opp', pos: 'F', at: TIPPER, label: 'blade in the lane' },
    { id: 'G', pos: 'G', at: G_TIP_DEPTH, label: 'stay tall' },
  ],

  routes: [{ from: PUCK_POINT, to: SHOT_END, kind: 'shot' }],

  puck: PUCK_POINT,
};

// ---------------------------------------------------------------------------
// 9 · The corners, not the slot — "Directing the rebound"
// ---------------------------------------------------------------------------
//
// ⚠️ WHAT IS NOT DRAWN, AND WHY IT IS NOT A GAP. The rebound itself has no glyph.
// It is not a pass and it is not a shot, and neither published key has a mark
// meaning "the puck leaves the goaltender in a chosen direction". Reusing the
// dashed pass line for it would give one line style two meanings corpus-wide,
// which the style guide forbids in terms. So this spec draws the shot arriving,
// the attacker standing where the rebound must not go, and the region itself —
// and the caption names the target in words rather than the picture claiming it.
//
// ONE REGION AND NOT TWO. "The corners — wide and low toward the boards, below the
// goal line if you can" is the section's own description of the target, and it is
// a description rather than a polygon: no document in this corpus owns a shape
// called "the corner". Shading one would be this file inventing a region, which is
// the failure the zone checker exists to catch. The slot IS owned, by
// rink_map_and_glossary.md, and its four vertices are the ones used here.
//
// GEOMETRY. The shot comes from the left point, so the goaltender sits below the
// centre line and the attacker in the slot sits above it: the puck at (27, -18)
// gives a line to (89, 0) with unit (0.9604, 0.2788), the goaltender is 6 ft out
// at (83.24, -1.67) and the shot stops 15 ft out at (74.59, -4.18), which is 9 ft
// short of him. The attacker at (74, 6.9) clears the zone's own label box — the
// placer draws "the slot" at the polygon's centroid (68.5, 0) in a box reaching
// y = 2.24 and x = 75.67 — by 0.79 ft of glyph ink, and stays inside the slot,
// whose edge is at y = 7. It was first placed at 6.5, which cleared by 0.39 ft.
const REBOUND_POINT = 'point:left';                            // (25, -20)
const PUCK_REBOUND = { at: 'point:left', dx: 2, dy: 2 };       // (27, -18)
const REBOUND_SHOT_END = { at: 'goal-line', dx: -14.41, dy: -4.18 }; // (74.59, -4.18)
const G_REBOUND = { at: 'goal-line', dx: -5.76, dy: -1.67 };   // (83.24, -1.67)
const SLOT_ATTACKER = { at: 'slot', dx: -2, dy: 6.9 };         // (74, 6.9)

const reboundCornersNotSlot = {
  id: 'goalie-rebound-corners-not-slot',
  owner: 'content/positions/goaltender.md',
  half: true,
  width: 900,

  caption:
    'A shot is on its way from the point, and an opposition forward is standing in the ' +
    'shaded slot waiting for what comes off you. A save that produces a rebound into that ' +
    'area has not really been a save; it has converted a shot from distance into a shot from ' +
    'six feet. When you cannot absorb the puck you have to aim it, and the target is the ' +
    'corners — wide and low toward the boards, below the goal line if you can, where nobody ' +
    'is standing and where the puck becomes a battle rather than a chance. Only the area to ' +
    'avoid is marked here; the corners are named in words because this document describes ' +
    'them rather than measuring them out. You aim by angling your surfaces: a pad or blocker ' +
    'turned even slightly changes where the puck goes, so on a shot to your blocker side ' +
    'rotate the blocker so its face points at the corner rather than back up the ice. The ' +
    'half that actually decides it is mental and happens before the shot. Look off the puck ' +
    'while it is still on the shooter’s blade and register who is where, and be specific ' +
    'about it — not "there’s a guy open" but "there’s a left shot open at the back post". ' +
    'That detail tells you both which save to select and where the rebound must not go. ' +
    'Nothing is drawn coming off the goaltender, because the rebound itself has no symbol in ' +
    'the notation this corpus uses.',

  describe:
    'The attacking half of the rink, the defended net at the right. An opposition defenceman ' +
    'stands at the left-hand point with the puck, and a double line — the notation for a shot ' +
    '— runs from it toward the net, stopping about nine feet short of the goaltender. The ' +
    'goaltender is on the line from that puck to the centre of the goal line, six feet out. ' +
    'An opposition forward stands in the slot on the other side of the centre line, inside a ' +
    'shaded region labelled "the slot" and shaded as a warning rather than as a target. No ' +
    'rebound is drawn, and no corner is shaded.',

  zones: [{ points: SLOT_ZONE, label: 'the slot', danger: true }],

  players: [
    { id: 'D1', team: 'opp', pos: 'D', at: REBOUND_POINT, label: 'the shot' },
    { id: 'F1', team: 'opp', pos: 'F', at: SLOT_ATTACKER, label: 'waiting for it' },
    { id: 'G', pos: 'G', at: G_REBOUND, label: 'you' },
  ],

  routes: [{ from: PUCK_REBOUND, to: REBOUND_SHOT_END, kind: 'shot' }],

  puck: PUCK_REBOUND,
};

// ---------------------------------------------------------------------------
// 10 · The fifty-fifty puck — "The discipline of not playing it"
// ---------------------------------------------------------------------------
//
// WHY THIS EARNS A PICTURE. "If you lose the race, the net is empty and you are
// behind the play" is a sentence about two distances and one empty net, and all
// three are at rink scale. It is the one thing in this document a still picture
// carries better than the prose does, because the empty net is simply visible.
//
// NO ROUTES, DELIBERATELY. An arrow from the goaltender to the puck would finish
// 6.8 ft from the forechecker with him in its forward half-plane — a hard failure
// of the arrival invariant, and rightly so, because an arrowhead landing on a
// player reads as skating through him. The commitment is carried by where the
// goaltender is standing instead, which is the same device
// `goalie-depth-failure-modes` uses.
//
// THE RACE IS DRAWN AS ONE THE GOALTENDER IS LOSING. The forechecker is 5.4 ft
// from the puck and the goaltender 6.1 ft, which is what "fifty-fifty" looks like
// from the losing side. Nothing about the two figures is claimed as a measurement
// of anything; they exist so the picture does not accidentally show a race the
// goaltender wins, which would teach the opposite of the section.
//
// IN FRONT OF THE GOAL LINE ON PURPOSE. The puck is at (84, 32), which is 5 ft in
// FRONT of the goal line, so no trapezoid question arises and the picture is about
// the race alone. `goalie-rim-stop-or-clear` above is where the line behind the
// goal line is drawn.
const LOOSE_PUCK_CORNER = { at: 'corner:right', dx: 2, dy: -2 };  // (84, 32)
const G_OUT_OF_NET = { at: 'corner:right', dx: 3, dy: -8 };       // (85, 26)
const FORECHECKER = { at: 'corner:right', dx: -3 };               // (79, 34)

const fiftyFiftyPuck = {
  id: 'goalie-fifty-fifty-puck',
  owner: 'content/positions/goaltender.md',
  title: 'The fifty-fifty puck',
  half: true,
  width: 900,

  caption:
    'This is the picture the section exists to stop you making. A loose puck is in the corner ' +
    'and you have left your net for it, and the forechecker is closer to it than you are — so ' +
    'look at where your net is. The best puck-handling decision a goalie makes is usually to ' +
    'leave the puck alone, and the first rule is not to leave your net for a fifty-fifty ' +
    'puck: if you lose the race, the net is empty and you are behind the play. The rulebook ' +
    'anticipates it as well. Racing out of your crease to beat an attacker to a loose puck ' +
    'and then jumping on it instead of playing it is a two-minute minor under NHL and IIHF ' +
    'Rule 63.2(vi). That is not a reason to hesitate over a puck you have already stopped — ' +
    'both books attach a note to the same clause saying that coming out to cut down the ' +
    'angle, making the save and then covering the puck is legal, and Hockey Canada permits ' +
    'it at clause ii of Interpretation 3 to Rule 10.1(a). Hockey Canada is not settled, ' +
    'though: clause v of that same interpretation says a goaltender who leaves their crease ' +
    'will not be allowed to freeze the puck at all, and the book nowhere says which of the ' +
    'two governs a cover made after a save outside the crease, so treating clause ii as the ' +
    'exception is a reading and not a ruling. The puck here is in front of the goal line, so nothing ' +
    'about the trapezoid is in play; this is only the race. And if you do commit, commit — ' +
    'the worst outcome of all is starting for the puck, changing your mind, and leaving both ' +
    'of you out of position. Call "I’ve got it" and mean it. A goalie who handles the puck ' +
    'well is a real asset; a goalie who believes they handle it well is a liability.',

  describe:
    'The attacking half of the rink, the defended net at the right, and the net has nobody in ' +
    'it. A loose puck sits in the near corner, in front of the goal line. The goaltender is ' +
    'drawn out of his crease and part of the way to it, about six feet away. An opposition ' +
    'forward is arriving at the same puck from the other side and is slightly closer to it ' +
    'than the goaltender is. No routes are drawn, and nothing marks who wins the race: the ' +
    'point of the picture is the distance between the goaltender and his own empty net.',

  players: [
    { id: 'G', pos: 'G', at: G_OUT_OF_NET, label: 'out of your net' },
    { id: 'F1', team: 'opp', pos: 'F', at: FORECHECKER, label: 'the forechecker' },
  ],

  puck: LOOSE_PUCK_CORNER,
};

export default [
  playingTheAngle,
  frontDoorBackDoor,
  angleClosesWide,
  failureModes,
  safeOutlets,
  rimStopOrClear,
  breakawayRetreat,
  readingATip,
  reboundCornersNotSlot,
  fiftyFiftyPuck,
];
