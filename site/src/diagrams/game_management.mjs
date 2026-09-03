/**
 * Diagrams for content/systems/game_management.md.
 *
 * The section is the source of truth. Every player below is one its prose places,
 * and where the prose hedges, the caption hedges.
 *
 * WHY THIS FILE EXISTS AT ALL. `game_management.md` describes a six-player
 * formation in prose and then says "The principles matter more than the diagram"
 * — a document declining a picture it plainly wants. That sentence is kept in the
 * prose: it is a deliberate hedge, a picture does not make it untrue, and removing
 * it while adding the picture would be exactly the tidying pass it guards against.
 * The caption repeats it, because the caption is all a listener gets.
 *
 * WHAT THE SECTION FIXES, AND WHAT IT DOES NOT.
 *
 *   Fixed:   "two players at the points (the area just inside the blue line, not
 *            the line itself), two on the half-walls (level with the faceoff
 *            dots), one at the net front, and one below the goal line or in the
 *            middle of the zone" — re-taken from game_management.md:268 after that
 *            sentence was corrected. The caption below now carries the same
 *            wording rather than paraphrasing round a defect; its punctuation
 *            differs because a caption is voiced aloud and parentheses are not.
 *            ⚠️ A NOTE HERE USED TO SAY THAT :268 "AND THE ` ```facts ` LINE AT
 *            :255" BOTH EQUATED THE POINT WITH THE BLUE LINE. :255 NEVER DID: it
 *            reads "Position: Two at the points, two on the half-walls, one at the
 *            net front, one below the goal line or in the middle", which names the
 *            area and not the line, and is correct as written. Do not "fix" it on
 *            the strength of a comment. content/foundation/rink_map_and_glossary.md
 *            owns the term and denies the line reading three times (:356, :372,
 *            :621); :268 has been brought into line with it.
 *   Hedged:  "The most common shape" — and the section's own box names the
 *            umbrella, the overload and "their normal power-play look" as real
 *            alternatives. The caption carries all three.
 *   Not said: where the five defending skaters stand. They are NOT drawn and NOT
 *            invented; the caption says so.
 *   Either/or: the sixth player. Drawn below the goal line, which is the option
 *            the sentence gives first; the caption names the other one.
 *
 * PERSONNEL IS NOT SHAPE, and the published key gives no neutral glyph — a circle
 * is a forward and a triangle a defenceman, so every glyph is a personnel claim
 * whether or not the diagram wants to make one. The section does not say who
 * stands where. What it does say is that the shape "takes a standard power-play
 * look and adds a second body high", and that "the extra attacker is almost
 * always a forward". So: one defenceman at a point, as the corpus's power-play
 * shape has, and the added high body a forward. That is a reading rather than the
 * section's words, so the caption discloses the personnel drawn and says it is a
 * team choice.
 *
 * NO ROUTES, DELIBERATELY. The section's six-position sentence is static, and its
 * five principles are about tempo and discipline ("one-touch it", "change with
 * possession") rather than about a route anyone skates. An arrow here would be a
 * claim the prose does not make. The frozen positions have to produce the shape on
 * their own, and the caption carries the principles.
 */

// The OPPOSITION goaltender, two feet off his goal line — the same anchor
// special_teams.mjs uses, and for the same reason: at the natural (86, 0) a
// net-front glyph and the goaltender's letter are drawn on top of each other.
const G_AT = { at: 'crease', dx: 1 };                    // (87, 0)

// The net-front player, offset to the strong side so the glyph clears the
// goaltender's.
//
// ⚠️ THIS WAS dx -2, i.e. (82, 4), AND IT DREW THE PLAYER INSIDE THE BLUE PAINT.
// Measured off the BUILT SVG (site/public/diagrams/six-on-five-shape.svg), whose
// crease path is "M 89 -4 L 84.5 -4 A 6 6 0 0 0 84.5 4 L 89 4 Z" — side lines
// 4.5 ft in from the goal line at half-width 4, closed by a 6 ft arc struck from
// (88.972, 0). The nearest crease boundary to (82, 4) is 2.038 ft away, so the
// 2.9 ft glyph body put 0.86 ft of body and 1.24 ft of outlined body inside the
// paint, and the halo (a 1.95 stroke centred on r 2.9, so 3.875 ft of ink) rubbed
// out the upper third of the crease arc's red line. Visible in the render, not
// merely arithmetic. The corpus forbids exactly this: special_teams.md:84 "The
// net front lives at the edge of the blue paint, not inside it", and its :978
// Never: "Put a skate in the blue paint."
//
// At dx -4, i.e. (80, 4), the nearest boundary is 3.823 ft away: 0.92 ft of body
// daylight, 0.55 ft of outlined-body daylight, and 0.05 ft of halo overlap — half
// a pixel at the ~9 px/ft this file renders at.
//
// The comment here used to say "same offset as the power-play diagrams". That had
// become FALSE when special_teams.mjs was corrected and this file was not. It is
// true again, and stated as a checkable fact rather than a claim of sameness:
// special_teams.mjs uses { at: 'net-front', dx: -4, dy: 4 } and faceoffs.mjs uses
// dx -4, dy 4.5 for its extra attacker. If either moves, this comment is wrong
// again — the offsets are not shared, only equal.
//
// ASSUMES, and dies if any of them moves: site/src/data/rink.json AS ON DISK IN
// THIS WORKING TREE — net-front = (84, 0), goal-line = (89, 0), goal.crease_width
// 8, crease_depth 6, crease_arc_radius 6 — and rink.mjs's glyph radius 2.9 with
// its 0.75 outline and 1.95 halo strokes.
const NET_FRONT = { at: 'net-front', dx: -4, dy: 4 };    // (80, 4)

// "one below the goal line". `behind-net` (94, 0) is directly behind the net,
// where the frame hides the player from the front of the goal, so this is offset
// off the weak post instead: below the goal line (x 89) with a lane back out.
// ⚠️ dy -5 was tried first and the glyph's 2.9 ft body cut the goal frame's lower
// corner — the frame runs y -3..+3 at x 89..92.33, and a route-free formation
// diagram has nothing else to explain a circle overlapping the net. At (92, -8)
// the body's top edge is y -5.1, 2.1 ft clear of the post line, 9.4 ft from the
// goaltender's glyph and 8 ft off the end boards.
const BELOW_GOAL_LINE = { at: 'behind-net', dx: -2, dy: -8 };    // (92, -8)

const sixOnFive = {
  id: 'six-on-five-shape',
  owner: 'content/systems/game_management.md',
  half: true,
  width: 900,

  caption:
    'The most common 6-on-5 shape, with your goaltender pulled for a sixth attacker: two players ' +
    'at the points — the area just inside the blue line, not the line itself — two on the half-walls ' +
    'level with the faceoff dots, one at the ' +
    'net front, and one below the goal line — that last player can sit in the middle of the zone ' +
    'instead. The five defending skaters are not drawn, so the shape reads on its own, and your ' +
    'own net is at the far end, empty. Which shape your team uses at 6-on-5 is a system choice and ' +
    'not a rule of hockey: some teams run an umbrella with three players high, some overload four ' +
    'onto one side, and some just add a net-front body to their normal power-play look — learn ' +
    'yours in practice, because there is no time to work it out in the game. It is drawn with one ' +
    'defenceman and five forwards, the defenceman at a point, because this shape is described as a ' +
    'power-play look with a body added high and the extra attacker is almost always a forward — ' +
    'but who is out there, and who stands where, is a team choice and not part of the shape. ' +
    'The principles matter more than the ' +
    'diagram: get set up rather than entering the zone again and again, put the puck to the net ' +
    'with a screen because the extra man is a body in front and not a sixth passer, move it ' +
    'one-touch, never let both point men pinch because there is no net behind you, and change with ' +
    'possession rather than while chasing the puck.',

  describe:
    'The attacking half of the rink, the opposition net at the right and their goaltender in the ' +
    'crease. Six own players and no defenders. Two stand at the points, up at the blue-line end of ' +
    'the zone, one either side of the middle and about forty feet apart: one is drawn as a ' +
    'defenceman, the other as a forward. Two ' +
    'more stand on the boards level with the faceoff dots, one on each side of the zone. One ' +
    'stands at the net front, just outside the crease and a little to one side of it. The sixth ' +
    'stands below the goal line, off the post on the other side of the net from the net-front ' +
    'player. No routes are drawn: this is a shape, not a sequence. Your own goal, empty, is at ' +
    'the far end of the ice and outside this picture.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    // The points. One defenceman, one forward — see the personnel note in the
    // file header. Both anchored on rink.json's `point`, which sits ON the blue
    // line and is a SCHEMATIC anchor, not the definition: the point is the area
    // just inside the line. rink.json's `point` $comment records why the
    // coordinate stays where it is — chiefly that the owner states no offset, and
    // that the offset would be smaller than the 5.8 ft glyph drawn on it.
    { id: 'P', pos: 'D', at: 'point:right',      label: 'the point' },
    { id: 'P', pos: 'F', at: 'point:left',       label: 'the point' },
    // "two on the half-walls (level with the faceoff dots)". rink.json's own note
    // on this position is "the boards level with the faceoff dot", so the section's
    // parenthesis and the coordinate table say the same thing.
    { id: 'H', pos: 'F', at: 'half-wall:right',  label: 'half-wall' },
    { id: 'H', pos: 'F', at: 'half-wall:left',   label: 'half-wall' },
    { id: 'N', pos: 'F', at: NET_FRONT,          label: 'net front' },
    // Generic `F`: the section gives this player no role name, only a place.
    { id: 'F', pos: 'F', at: BELOW_GOAL_LINE,    label: 'below the goal line' },
  ],
};

export default [sixOnFive];
