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
    'lateral movement a foot short of the post rather than at it is how the short-side ' +
    'goal, the cheapest goal in hockey, gets scored. This is one end of the shallow arc ' +
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

export default [playingTheAngle, frontDoorBackDoor, angleClosesWide, failureModes];
