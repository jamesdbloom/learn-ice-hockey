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
 * NO ROUTES IN THIS DIAGRAM, DELIBERATELY. The section's six-position sentence is
 * static, and FOUR of its five principles are about tempo and discipline
 * ("one-touch it", "change with possession") rather than about a route anyone
 * skates. An arrow here would be a claim the prose does not make. The frozen
 * positions have to produce the shape on their own, and the caption carries the
 * principles.
 *
 * ⚠️ THE FIFTH PRINCIPLE IS NOT LIKE THE OTHER FOUR, AND THIS PARAGRAPH USED TO SAY
 * IT WAS — it read "its five principles are about tempo and discipline ... rather
 * than about a route anyone skates", flatly, while the note above `sixOnFivePinch`
 * below refutes it in terms. A fix that reached one paragraph and stopped.
 * "The point men do not both pinch" is a claim about WHERE two named players are,
 * and that is what a picture is for. It IS drawn — as a SECOND diagram,
 * `six-on-five-one-point-stays`, not as an arrow added to this one, so the
 * sentence above stays true OF THIS DIAGRAM and is now scoped to it.
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

// ---------------------------------------------------------------------------
// 2. The pinch rule at 6-on-5 — game_management.md, "The 6-on-5 structure".
// ---------------------------------------------------------------------------
//
// WHY THIS EXISTS WHEN `six-on-five-shape` DELIBERATELY CARRIES NO ROUTES.
// The header above declines routes for that diagram on the ground that FOUR of
// the section's five principles are "about tempo and discipline ... rather than
// about a route anyone skates". ⚠️ THE FIFTH IS THIS ONE, AND THE HEADER USED TO
// SAY ALL FIVE WERE — it has been corrected, and if it ever says "five" again,
// this diagram is the counter-example.
// "**The point men do not both pinch.** Someone must be able to stop a clear.
// There is no net behind you." (game_management.md:273) is a claim about WHERE
// two named players are, and its ` ```facts ` line at :259 states it as a Never:
// "Never: Let both point men pinch — someone must be able to stop a clear,
// because there is no net behind you." A Never with a spatial answer is exactly
// what a picture is for. The frozen shape stays route-free; this is a second
// diagram, not an edit of the first.
//
// WHAT IS DRAWN AND WHAT IS NOT.
//   Drawn:    the same six positions as `six-on-five-shape`, unchanged and
//             re-anchored on the same three constants above, so the two pictures
//             cannot drift apart; one opposition skater with the puck on the
//             wall, because a pinch has to be a pinch ON something; and one
//             route.
//   Not drawn: their other four defenders. `six-on-five-shape` does not draw
//             them either, for the reason its header gives — the section never
//             says where they stand. The caption says so rather than letting the
//             absence read as a claim that they are elsewhere.
//   Not drawn: the clear itself. A dashed puck route escaping up the right wall
//             was tried and REJECTED: the player who is drawn staying is the
//             LEFT point man, 40 ft across the ice, and he cannot reach a puck
//             on the right wall. Drawing the escape and the insurance in one
//             frame would have taught that he stops that specific puck, which is
//             not what the section claims. The section's claim is only that one
//             of them stays; the caption carries it in those terms.
//
// WHICH ONE PINCHES. The section does not say, and the caption says it does not.
// The right-side point man is drawn pinching because the puck is drawn on the
// right wall, which is a drawing decision and nothing more. Personnel follows
// `six-on-five-shape` exactly — a defenceman on the right point, a forward on
// the left — so the pinching glyph is a triangle and the staying glyph a circle.
// That inherits the header's personnel note above; it does not add to it.

// The opposition skater with the puck, on the right wall between the half-wall
// and the blue line. `half-wall:right` is (69, 38.5) — the boards level with the
// faceoff dot — and dx -21 walks that 21 ft up-ice toward the line.
//
// DRAWN AS A FORWARD, not a defenceman: at 6-on-5 the section never says who
// retrieves, both are ordinary, and a circle is the smaller glyph (ink 3.875 ft
// against a triangle's 4.6), which is what buys the route's clearance below.
const THEIR_WALL = { at: 'half-wall:right', dx: -21 };          // (48, 38.5)

// Where the pinch ARRIVES: ON THE WALL and up-ice of him, so the route cuts the
// puck's escape toward the blue line rather than finishing into a player who is
// facing the boards. Distance from the arrival point to his anchor is
// hypot(48-39, 38.5-38) = 9.01 ft — clear of the 8.5 ft two glyphs need before
// their ink touches (3.875 forward + 4.6 triangle), and clear of ARRIVAL.noArrow
// besides, though `pressure` is bar-ended and out of that check's scope by
// construction.
//
// ⚠️ dy 15, i.e. (39, 35), WAS TRIED FIRST AND THE RENDER REFUTED THE CAPTION.
// The caption says the route ends "on a patch of the wall"; at (39, 35) it ended
// 7.5 ft off the boards in open ice, which is a different claim, and the arrival
// read as passing under the opponent rather than cutting him off. Rendered and
// looked at, not computed. 4.5 ft off the boards is the same clearance
// `half-wall` itself carries.
//
// ⚠️ DO NOT GIVE THIS ROUTE AN ARROWHEAD. Two bars mean arrive and contain; an
// arrowhead means continue through, and continuing through a player on the wall
// is the one arrival this corpus treats as a safety matter. See THE ARRIVAL
// INVARIANT in site/scripts/lib/rink.mjs.
const PINCH_ARRIVAL = { at: 'point:right', dx: 14, dy: 18 };    // (39, 38)

const sixOnFivePinch = {
  id: 'six-on-five-one-point-stays',
  owner: 'content/systems/game_management.md',
  half: true,
  width: 900,

  caption:
    'The same 6-on-5 shape — two players at the points, the area just inside the blue line and ' +
    'not the line itself — at the moment one point man steps down the wall to keep a puck in, ' +
    'and the other does not go with him. That is the rule the shape lives by: the point men do ' +
    'not both pinch, because someone must be able to stop a clear and there is no net behind ' +
    'you. Your goaltender is on the bench and your own net is empty at the far end of the ice, ' +
    'so a puck that gets past both point men is not a rush against you — it is a clear path to ' +
    'an empty net. The one who stays is not being cautious; he is the whole insurance policy, ' +
    'and that is the job, not a lack of nerve. Only the defender the pinch is aimed at is ' +
    'drawn, and their other four are not, because the section does not say where they stand ' +
    'and this is a picture of your own discipline rather than of their shape. Which point man ' +
    'pinches, whether your team pinches at all with the goalie out, and who is standing at the ' +
    'points are coaching choices and not laws of hockey: the pinching player is drawn as a ' +
    'defenceman and the one who stays as a forward only because this shape is described as a ' +
    'power-play look with a body added high, so find out what your team wants before the ' +
    'goaltender leaves, because there is no time to work it out with the net empty. ' +
    '⚠️ No contact is drawn: the pinching player’s route ends in two bars, meaning arrive ' +
    'and contain, on a patch of the wall rather than on a player, and what an arrival like ' +
    'that may end in depends on whether your league allows body checking at all.',

  describe:
    'The attacking half of the rink, the opposition net at the right and their goaltender in ' +
    'the crease. The six own players stand in the same 6-on-5 shape as the previous diagram: ' +
    'two at the points, two on the half-walls level with the faceoff dots, one at the net ' +
    'front and one below the goal line. One opposition skater has the puck on the right-hand ' +
    'wall, about twenty feet up-ice of the own player on that half-wall. A single route runs ' +
    'from the right-hand point man down and out toward the wall, ending in two bars — arrive ' +
    'and contain — on a patch of boards up-ice of the opposition skater and about nine feet ' +
    'clear of him. The left-hand point man has no route at all: he is standing still, and ' +
    'that is the point of the picture. Their other four skaters are not drawn, and your own ' +
    'net, empty, is at the far end of the ice and outside this picture.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    { id: 'F', team: 'opp', pos: 'F', at: THEIR_WALL },

    // The same six anchors as `six-on-five-shape`, in the same order, so a diff
    // between the two specs shows only the pinch.
    { id: 'P', pos: 'D', at: 'point:right',      label: 'pinches to keep it in' },
    // ⚠️ THIS LABEL READ "stays at the line", WHICH ASSERTED THE RETRACTED
    // DEFINITION the sibling caption above is at pains to deny — the point is the
    // area just inside the blue line, NOT the line (rink_map_and_glossary.md :356,
    // :372, :621, and rink.json's `point` $comment). A label is four words on a
    // picture and carries no room to hedge, so it must not make the claim at all.
    { id: 'P', pos: 'F', at: 'point:left',       label: 'holds the point' },
    { id: 'H', pos: 'F', at: 'half-wall:right' },
    { id: 'H', pos: 'F', at: 'half-wall:left' },
    { id: 'N', pos: 'F', at: NET_FRONT },
    { id: 'F', pos: 'F', at: BELOW_GOAL_LINE },
  ],

  routes: [
    { from: 'point:right', to: PINCH_ARRIVAL, kind: 'pressure' },
  ],

  // 4.5 ft below his anchor, so the disc clears the glyph's 3.875 ft of ink and
  // reads as a puck on his stick rather than as part of the glyph.
  puck: { at: 'half-wall:right', dx: -21, dy: -4.5 },           // (48, 34)
};

// ---------------------------------------------------------------------------
// 3. The clear, from the other side — "Defending against 6-on-5".
// ---------------------------------------------------------------------------
//
// THE SECTION ENUMERATES THE THREE OUTCOMES ITSELF, which is why this is one
// picture and not three. game_management.md:341: "**A puck that goes in is a goal
// and there is no icing; a puck that misses and crosses the goal line is icing**
// ... A blind clear that goes straight to their point man is the worst outcome of
// the three." The diagram draws exactly those three and adds none.
//
// FULL SHEET, AND IT HAS TO BE. The whole teaching is that one end has your
// goaltender in it and the other has nothing, 170-odd feet away, and that the
// difference between a goal and a defensive-zone draw is a few feet at the far
// end. Neither half can carry that alone.
//
// WHAT IS DELIBERATELY NOT DRAWN. Your other four skaters. ⚠️ NOT AN OVERSIGHT
// AND NOT A SHORTCUT: the section describes the defending shape as "a tight box
// or diamond in the slot", and both of those words are BORROWED from the penalty
// kill, where they name FOUR-player shapes — while the situation here has FIVE
// skaters. The section used to gloss them as four-player shapes and then say
// nothing about the fifth; it now names the borrowing, says the count differs, and
// says outright that it does not settle where the fifth player stands. So drawing
// five would invent what the prose declines to state. Left undrawn on purpose, and
// the caption says the section does not settle it rather than letting the absence
// read as a claim.
//
// THE WORD HAS FOUR LIVE SENSES IN THIS CORPUS and they are not compatible: the
// penalty-kill box (four players, special_teams.md, the owner of both names); the
// Box+1 (five at even strength, defensive_zone_coverage.md, whose fifth player "is
// the only one who chases the puck" — the exact inversion of this section's first
// instruction); the collapsing box (five, same document); and this one. Do not
// borrow a shape across that boundary to fill the gap here.
//
// AND NOT BORROWED EITHER. `dz-collapsing-box` names this exact situation in its
// own caption — "defending six-on-five with the opposing goalie pulled" — and was
// considered for reuse here. It draws FIVE opposition skaters, because it is a
// 5-on-5 diagram. Borrowed into a 6-on-5 section, a reader who counts the
// attackers gets the wrong number, and a borrowed caption cannot be edited to
// warn them. Left alone. ⚠️ The SECTION now sends the reader there in prose
// instead — "Defensive Zone Coverage names one five-man answer for exactly this
// situation" — which is the right layer for it: a cross-reference can be hedged
// as one option, and a borrowed picture cannot.

// The defending player with the puck, deep in his own end and up toward the
// right-hand wall: `faceoff-dot:right:far` is (-69, 22), and this sits 1 ft
// deeper and 10 ft out toward the boards. Everything below is measured off it.
//
// ⚠️ THE JUSTIFICATION THAT USED TO BE WRITTEN HERE DOES NOT REPRODUCE, AND IT WAS
// THE ONLY REASON GIVEN FOR THIS COORDINATE. It read: "The first version had him at
// (-70, 18) ... At y 18 that angle was 5 degrees ... At y 32 it is 9.3 degrees and
// they are 12 ft apart at centre ice." Re-derived from the three constants below:
//
//   at y 32  the two long routes leave at -11.310 deg and -2.793 deg  -> 8.517 deg
//            apart, and cross x = 0 at y 18.00 and y 28.59            -> 10.59 ft
//   at y 18  they leave at -6.419 deg and +2.095 deg                  -> 8.514 deg
//            apart, and cross x = 0 at y 10.12 and y 20.56            -> 10.44 ft
//
// So 9.3 was really 8.52 and 12 ft was really 10.6 ft — both overstated by 10-15%
// — but the worse half is that THE SEPARATION IS VERY NEARLY INVARIANT IN y. The
// two long routes end 24 ft apart at a net 160 ft away, so the angle they subtend
// from anywhere deep in this corner is ~8.5 deg whatever y the clearer is given
// (8.514 at y 18, 8.528 at y 22, 8.517 at y 32). Moving him up the ice CANNOT have
// bought the fan the old note credits it with. Whatever the render showed, it was
// not that. Not re-rendered at y 18 to find out what it was; recorded here rather
// than guessed.
//
// THE COORDINATE IS KEPT ANYWAY, on the ground `describe` already states rather
// than on an angle: "deep in his own end, inside the right-hand faceoff circle and
// up toward the boards". `faceoff-dot:right:far` is (-69, 22) with a 15 ft circle,
// so (-70, 32) is 10.05 ft from the dot — inside the circle — and 10.5 ft off the
// boards. It also widens the short third route away from the goal-bound one, from
// 32.06 deg of separation at y 18 to 37.78 deg here, which matters MORE since that
// route became a `shot` (see the three outcomes below) and is now drawn in the same
// double-line notation as the other two rather than in dashes.
const CLEARER = { at: 'faceoff-dot:right:far', dx: -1, dy: 10 };   // (-70, 32)

// Their point man, at YOUR blue line — which is where an attacking point man
// stands, and 64 ft from your own goal line (rink.json lines.blue_line_to_goal_line).
//
// ⚠️ THE LEFT POINT, AND THE SIDE IS FORCED, not chosen for variety. Put him on
// the right, at (-25, 20), and the goal-bound shot route crosses x = -25 at
// y = 23.0 — 3.0 ft from his anchor, INSIDE his glyph. The picture would then
// show the clear going straight through the defender it is supposed to beat,
// which is the "route that renders as something it does not say" failure this
// project keeps finding by rendering. On the left he is 43 ft clear of it.
const THEIR_POINT = 'point:left:far';                              // (-25, -20)

// Nine feet short of him along the line of the clear, so the arrowhead lands in
// front of him rather than buried under his glyph. ⚠️ NOT "in front of a
// RECEIVER", which is what this comment used to say: that word belonged to the
// `pass` notation this route no longer carries, and the whole point of the change
// is that nobody chose to put the puck on his stick. (Puck routes are out of
// THE ARRIVAL INVARIANT's scope — "a shot ending at the goalie is what a shot IS"
// — so this is a drawing clearance, not a safety one.) hypot(6, 7) = 9.22 ft.
const TO_THEIR_POINT = { at: 'point:left:far', dx: -6, dy: 7 };    // (-31, -13)

// In the net. The frame runs x 89 to 92.33 at y +/-3, so a tip at (90, 0) is
// inside the mouth and reads as a puck that went in — which is the outcome this
// route is drawn to state.
const INTO_THE_EMPTY_NET = { at: 'goal-line', dx: 1 };             // (90, 0)

// Past the goal line and well wide of it, out toward the corner — the shape of a
// real icing rather than a near-miss, and far enough off the goal-bound route to
// read as a separate line.
//
// ⚠️ CHECKED AGAINST THE BOARDS, because the corner is curved and a tip in the
// wall is not a picture of anything. rink.json gives corner_radius 28 on a
// 200 x 85 sheet, so the board curve at x = 94 sits at
// y = 42.5 - (28 - sqrt(28^2 - 22^2)) = 31.82. At y = 24 the arrowhead is 7.82 ft
// inside it. ⚠️ THE 28^2 - 20^2 FORM PRINTED HERE BEFORE IS THE x = 92 CASE, not
// this one: the corner arc's centre is (72, 14.5), so the second term is 100 - x
// subtracted from 28 — 20 at x = 92 and 22 at x = 94. It evaluates to 34.10, and
// was printed under a line claiming x = 94 and an answer of 31.8. The ANSWER was
// right and the working was one place along.
// (An earlier draft aimed at (92, 34); the board curve at x = 92 is y = 34.10, so
// that tip was ON the wall — that is what the 20 belonged to. Derived, not
// eyeballed.)
const WIDE_PAST_THE_GOAL_LINE = { at: 'goal-line', dx: 5, dy: 24 };  // (94, 24)

const clearAtFiveOnSix = {
  id: 'five-on-six-clear-three-outcomes',
  owner: 'content/systems/game_management.md',
  half: false,
  width: 900,

  caption:
    'Defending a 6-on-5, from your own end: your goaltender is still in your net at one end, ' +
    'theirs is empty at the other, and a puck has just come free to you. Every clear from here ' +
    'is a shot, and three things can happen to it — so all three are drawn the same way, as one ' +
    'act with three endings rather than as three different decisions. Get your head up and put ' +
    'it on the empty net and it is a goal; a puck that goes in is not icing. Miss, and a puck ' +
    'that crosses their goal line untouched from your own side of the centre red line is icing. ' +
    'And the worst of the three is a blind clear that goes straight to their point man: it hands ' +
    'the puck back at your own blue line and buys you nothing. So this is a shot to take when ' +
    'you can actually hit the net, and not a blind heave. Only the player with the puck, one of ' +
    'their point men and the two nets are drawn — this is a picture of where the puck can go ' +
    'rather than of a defensive shape, and the section does not settle where your other four ' +
    'skaters stand. ⚠️ And you can be iced against a pulled goaltender, which is one of the ' +
    'worst things you can do to yourself: six players against six is equal strength and not ' +
    'below it, and NHL ' +
    'Rule 81.3 settles it in terms, saying an icing should not be nullified merely because ' +
    'their goaltender was on his way to the bench for an extra attacker. Under the NHL and the ' +
    'IIHF that whistle brings the draw back to your own end, lets the attacking team pick the ' +
    'dot, and leaves you unable to change and unable to take a time-out at all — your five most ' +
    'tired players, in your own end, against six, with no way out. Rule 81.4 does list ' +
    'exceptions, but read which ones: an injured player, or a penalty that changes the on-ice ' +
    'strength. The one that lets a goaltender come back in belongs to the team that pulled its ' +
    'own, and that is not you. What an icing costs you also depends on the book: USA Hockey ' +
    'attaches no substitution restriction to an icing at all, and Hockey Canada writes one only ' +
    'in the categories its Rule 6.7(d) names — U18AAA, Junior, and Senior at the Member’s ' +
    'option — so find out which rules your league runs before you count on any of that.',

  describe:
    'The full sheet. Your own net is at the left with your goaltender in the crease; the ' +
    'opposition net at the right is empty, with no goaltender drawn. One own player has the ' +
    'puck deep in his own end, inside the right-hand faceoff circle and up toward the boards. ' +
    'One opposition defenceman stands at the left-hand point, up at the blue-line end of your ' +
    'own zone. Three routes leave the puck carrier, and all three are drawn as shots in the ' +
    'double-line notation. One runs the length of the ice and finishes inside the empty net. ' +
    'The second runs the length of the ice beside it and finishes past the goal line, well wide ' +
    'of the net and out toward the corner. The third is much shorter and goes up-ice and across ' +
    'the zone, finishing just in front of the opposition point man. Their other five skaters ' +
    'and your other four are not drawn.',

  players: [
    // Your goaltender, at the far end and out of his crease the way every own
    // goaltender in a full-sheet diagram in this corpus is drawn.
    //
    // ⚠️ AT PHONE WIDTH THE ONE FACT THIS DIAGRAM EXISTS TO SHOW WAS INVISIBLE, AND
    // THE LABEL IS THE FIX. Both ends carry the same pale crease tint, so the only
    // thing separating "your net, guarded" from "their net, empty" was this glyph's
    // letter. Do the arithmetic on the two viewBoxes: a HALF sheet is 104 ft wide,
    // a FULL sheet 204, both rendered into the same column — so in a 360 px column
    // a half sheet is 3.46 px/ft and a full sheet 1.77 px/ft, 51% of the scale. The
    // `G` is `font-size="4.6"` in BOTH (read off the built SVGs), so on a full sheet
    // it lands at about 8 px of bold letter. That is what an eye called an
    // unreadable smudge, and it is the scale defeating the convention, not the
    // convention being wrong.
    //
    // ⚠️ THE ANSWER IS NOT A BIGGER GLYPH, and that was the tempting one. The glyph
    // radius is not a drawing size: `ARRIVAL.glyph = 2.9` in site/scripts/lib/rink.mjs
    // is quoted by THE ARRIVAL INVARIANT and by the 3.875 / 4.6 ft ink figures that
    // every clearance comment in every diagram module — three of them in this file —
    // is computed against. Scaling glyphs 1.7x on full-sheet diagrams would silently
    // falsify all of those and the check that enforces them, to make one letter
    // bigger. The renderer ALREADY carries the compensation it can safely apply:
    // `const TXT = half ? 1 : 1.7` scales LABELS and badges on a full sheet and
    // deliberately leaves glyphs alone (labels render at 4.76 here against 2.8 on a
    // half sheet — again read off the built SVGs). So the fix is to use the layer
    // that scales, not to rescale the layer that must not.
    //
    // The caption and `describe` state the asymmetry too and always did; this is not
    // instead of them. It is that a picture whose whole point is invisible in the
    // picture has pushed its own subject into the caption.
    // RENDERED AND LOOKED AT, not merely computed: `playSvg` into the session
    // scratchpad and rasterised at 360 px with the same headless Chrome invocation
    // `build-diagrams.mjs` uses, WITHOUT touching site/public/diagrams/. The label
    // lands at (-69, 8) — a 16 ft offset with a leader line, which is this diagram's
    // normal, since `their point man` and `every clear is a shot` both take leaders
    // too — and at 360 px it reads. Only labels of EIGHT characters or fewer take the
    // tidy vertical slot directly under the glyph; anything longer is pushed to this
    // offset, so do not lengthen it expecting the placement to hold.
    { id: 'G', pos: 'G', at: { at: 'crease::far', dx: 1 }, label: 'your goaltender' },  // (-85, 0)
    // ⚠️ THIS WAS `id: 'C'`, WHICH IS A CENTRE. Every one of the 39 other `id: 'C'`
    // glyphs in site/src/diagrams/ is a centre role — "the middle is his", "to the
    // centre", "middle lane" — so the letter is not generic in this corpus, it is a
    // position claim. The section never says who retrieves the puck and `describe`
    // below says only "one own player". `F` is the corpus's generic forward, used
    // 140 times. Counted with `grep -oh "id: '[A-Z0-9+]*'" site/src/diagrams/*.mjs`
    // on 2026-09-03; re-run it rather than trusting these two figures.
    { id: 'F', pos: 'F', at: CLEARER, label: 'every clear is a shot' },

    // No opposition goaltender is drawn, and that absence is the situation. It is
    // stated in the caption and in `describe` so it cannot read as an omission.
    { id: 'D', team: 'opp', pos: 'D', at: THEIR_POINT, label: 'their point man' },
  ],

  // NOT `numbered`. A badge reads as a sequence, and these are three alternatives
  // to one decision, not three things that happen in order. The section does rank
  // them, and the caption carries the ranking in words.
  //
  // ⚠️ ALL THREE ARE `shot`, AND THE THIRD USED TO BE `pass`. That was a claim the
  // section does not make and the opposite of the one it does. Its headline is
  // "**Every clear is a shot**" and the thing it warns about is "**a blind clear**
  // that goes straight to their point man" (game_management.md) — one act, three
  // fates. `pass` renders as a dashed line with an arrowhead (`pass: { line:
  // 'plain', end: 'arrow', dash: '2.4 1.8' }` in site/scripts/lib/rink.mjs), which
  // is this corpus's notation for a player deliberately putting the puck on a
  // teammate's stick. Drawn that way, the third outcome stopped being a different
  // RESULT of the same decision and became a different DECISION — and told anyone
  // reading the notation that the defender passed to the opposition on purpose.
  // Three double lines say what the section says: he shot it, and where it ended up
  // is what separates them.
  //
  // The arrival invariant is unaffected: puck routes are outside its scope by
  // construction (see THE ARRIVAL INVARIANT in site/scripts/lib/rink.mjs), and
  // `shot` and `pass` are both puck routes, so this changes nothing it tests.
  routes: [
    { from: CLEARER, to: INTO_THE_EMPTY_NET,        kind: 'shot' },
    { from: CLEARER, to: WIDE_PAST_THE_GOAL_LINE,   kind: 'shot' },
    { from: CLEARER, to: TO_THEIR_POINT,            kind: 'shot' },
  ],

  // 4.5 ft below his anchor, clear of the glyph's 3.875 ft of ink.
  puck: { at: 'faceoff-dot:right:far', dx: -1, dy: 5.5 },          // (-70, 27.5)
};

export default [sixOnFive, sixOnFivePinch, clearAtFiveOnSix];
