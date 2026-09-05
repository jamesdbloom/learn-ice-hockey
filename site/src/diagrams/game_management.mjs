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
  title: 'Six-on-five shape',
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
  title: 'One point stays home',
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
  title: 'Clearing at five on six',
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

// ---------------------------------------------------------------------------
// 4. The delayed penalty — game_management.md, "The delayed-penalty freebie".
// ---------------------------------------------------------------------------
//
// WHAT THE SECTION SAYS, AND ONLY THAT.
//   Rule:    "when a player on the team *not* in control of the puck commits a
//            penalty, the referee raises an arm and delays the call; play continues
//            until the team to be penalized gains control of the puck" (NHL 15.1),
//            and "during a delayed penalty the offending team cannot score unless
//            the non-offending team shoots the puck into their own net" (NHL
//            78.5(xi)). Those two rule numbers are the ONLY ones the section gives
//            for this situation, and the caption gives no others. THE SECTION
//            NAMES NO IIHF, USA HOCKEY OR HOCKEY CANADA COUNTERPART HERE — do not
//            add one to a caption, because no sweep over content/ can see a caption
//            and a later correction to one of those books would never reach it.
//   Instruction: "So: no blind D-to-D passes across your own crease during a
//            delayed call." That is a claim about WHERE a pass goes, which is what
//            a picture is for, and it is the only spatial sentence in the section.
//
// ⚠️⚠️ THE FORBIDDEN PASS WAS DRAWN, AND IT WAS DRAWN IDENTICALLY TO THE SAFE ONE.
// Two dashed routes with arrowheads left the same defenceman for the same partner:
// one bowed behind the net, one straight through the crease and across the mouth of
// the empty goal. NOTHING IN THE NOTATION DISTINGUISHED THEM, and a picture is
// absorbed before its caption — so a reader who took the picture and not the words
// away took away a pair of equivalent options, one of which is the only pass on the
// ice that can score for the other team.
//
// ⚠️ THE STRAIGHT ROUTE IS NOW NOT DRAWN, and that is the corpus's own answer rather
// than a new one. `breakout-d-to-d` (breakouts.mjs) is THE SAME PASS at the far end
// and draws ONE route, the safe one; `winger-corner-and-the-empty-point` states the
// principle outright — "NO ROUTE IS DRAWN TO THE EMPTY POINT. An arrow into empty
// ice reads as an instruction, and the instruction here is the opposite one"; and
// the corpus's failure diagrams (`lane-jump-guess`, `faceoff-dzone-clean-loss`,
// `unmarked-but-unavailable`) draw a failure ALONE precisely so the notation is
// never asked to carry a prohibition it has no symbol for. The caption carries the
// prohibition in words, and says that no route is drawn across the crease and why.
//
// ⚠️ THE OTHER TWO OPTIONS WERE WEIGHED AND REJECTED, AND THE REASONS ARE WORTH
// KEEPING. (1) Splitting this into two diagrams, failure and fix, needs a second id,
// and an id no `content/` file references is built and shown to nobody — and
// game_management.md is not this file's to edit. (2) Shading the goal mouth `danger`
// red is a real device in this notation and `breakout-d-to-d` uses it on the house
// for exactly this prohibition — but adding it HERE would make these two pictures of
// the same pass nearly identical, and the one thing that tells them apart is an
// empty crease that MAJ-5 has just established does not read at phone width. A cue
// that only works when you can already see the difference is not a cue.
//   Hedged:  "Many recreational leagues do not allow or practise pulling the goalie
//            for this, and some officials stop play early, so agree it beforehand."
//            The caption carries it, because the caption is all a listener gets.
//
// WHY THE NET IS DRAWN EMPTY. The section's instruction to the goaltender is "go,
// immediately, at the first sign", so by the time anyone is making a D-to-D in his
// own end the crease is empty. That is also what makes this a different picture
// from `breakout-d-to-d` (breakouts.md), which draws the same pass with a
// goaltender in the net and shades the house: there the cost is a point-blank
// chance against, here it is the one goal the rules still allow them.
//
// ⚠️ WHAT IS DELIBERATELY NOT CLAIMED. The section's mechanism sentence is "your own
// defenceman ringing it off your own goalie does" — which needs a goaltender who is
// NOT in this picture. So the caption states the rule (you must shoot it into your
// own net yourself) and the instruction (no blind D-to-D across your own crease) and
// does NOT assert how a puck on the drawn line ends up in the goal. Neither does
// `describe`. Drawing the across-route finishing INSIDE the net was considered and
// rejected: `pass` notation means a player deliberately putting the puck on a
// stick, and a dashed arrow into your own goal reads as a defenceman shooting at
// it on purpose, which is not what the section warns about.
//
// NOT DRAWN: your other four skaters. Six of you are on the ice — the goaltender is
// at the bench and the extra attacker is on — and the section says where none of
// them stands. The caption says so rather than letting the absence read as a claim.
//
// ⚠️ A KNOWN AMBIGUITY, ACCEPTED WITH ITS EYES OPEN AND THEN FOUND TO BE WORSE THAN
// ACCEPTED. The other three diagrams in this module put the OPPOSITION net at the
// right of a half sheet; this one puts YOURS there, and the only pictorial cue was a
// goaltender who is not drawn. That is `five-on-six-clear-three-outcomes`'s problem
// — "both ends carry the same pale crease tint" — and its fix, a label on the own
// goaltender, is unavailable here because the whole subject is that he is gone. A
// FULL sheet would settle it by showing their guarded net at the other end, and was
// rejected on legibility: the entire teaching is 60 ft of D-to-D geometry and the
// crease detail it turns on, and a full sheet renders at 51% of a half sheet's scale.
//
// ⚠️ "RENDERED AND LOOKED AT at 900 px: the empty crease reads" IS WHAT THIS NOTE USED
// TO SAY, AND 900 px WAS THE WRONG WIDTH TO LOOK AT. At 360 px — a phone, which is
// where most of this corpus is read — the crease is a pale smear, the two triangles
// are unresolvable, the puck is invisible, and there is NO CUE AT ALL that the net is
// empty. A reviewer rendered `five-on-six-clear-three-outcomes` beside it as a control
// and got the identical failure. A cue that only survives at desktop width is not a
// cue; it is a thing the author could see because he knew it was there.
//
// SO THE CREASE IS NOW LABELLED, and the label is the whole of the fix. It is carried
// by a `zones` entry with BOTH `fill: 'none'` AND `stroke: 'none'` — an entry that
// draws no region at all and exists only so that its text lands where zone labels land,
// at the mean of its own points. Half of that is already the file convention
// (`fill: 'none'` in body_contact_and_battles.mjs and shooting.mjs, `stroke: 'none'` in
// goaltender.mjs and rink_map_and_glossary.mjs); using both together is new, and it is
// deliberate. ⚠️ A TINTED REGION WAS THE ALTERNATIVE AND IS WRONG HERE: the crease is
// REAL PAINT that `rinkSvg` already fills, and a house tint laid over a real marking is
// the one confusion `reading_ice_hockey_diagrams.md` works hardest to prevent. The
// polygon traces the crease exactly, so `check_zones.py` — which compares zones by name
// — has a correct shape to compare if this label is ever used again.
//
// ⚠️ AND `D1`/`D2` BECAME `D`/`D`. A two-character id inside a triangle renders at
// font-size 2.15 against a single character's 2.6 — about 6.8 px on a 375 px phone,
// which rink.mjs records as a known cost — and here the two are already told apart by
// their labels, 'you' and 'partner', which is the section's own vocabulary for them.
// The section never calls them D1 and D2.

// The defenceman with the puck, low in the right corner. `corner:right` is
// (82, 34); this is the near-end mirror of `breakout-d-to-d`'s D1, deliberately,
// so the two pictures of the same pass cannot disagree about where it starts.
const DP_D1 = { at: 'corner:right', dx: 3, dy: -4 };      // (85, 30)
const DP_D2 = { at: 'corner:left',  dx: 3, dy: 4 };       // (85, -30)

// The opposition forward. ONE of them, and he is the reason the pass is hurried:
// the whistle comes when THEY gain control, so he is drawn between the carrier and
// the middle of the ice rather than anywhere near the goalmouth. Keeping him out
// of the crease lane matters — a solid glyph in front of the net would make the
// across-route read as an interception risk, which is a different teaching from
// the one the section gives.
// hypot(85-76, 30-27) = 9.49 ft from D1: clear of the 7.275 ft two glyphs need
// before their ink touches (a triangle's 4.0 plus a forward's 3.275).
const DP_THEM = { at: 'corner:right', dx: -6, dy: -7 };   // (76, 27)

// Behind the net, and the depth is the teaching. Mirrored from `breakout-d-to-d`,
// whose bow of -18 at the far end is +18 here: the curve's middle third runs
// x 93.6 -> 95.0 -> 94.3, i.e. four to six feet past the goal line at x 89 and
// clear of the net's back rail at 92.33 throughout. Where the route is inside the
// crease's y-band at all (|y| <= 4, around k = 0.5) it is at x = 95, so it never
// enters the paint. Max x on the curve is 95, five feet off the end boards.
const DP_BEHIND = { at: 'corner:left', dx: 5, dy: 10 };   // (87, -24)

// ⚠️ `DP_ACROSS` USED TO LIVE HERE — the same pass made straight, x constant at 85
// the whole way, four feet in front of the goal line and inside the crease for
// |y| <= 4. That is literally "across your own crease". It is gone, and the reason
// is at the head of this block: drawn in the same dashed-with-an-arrowhead notation
// as the safe route, it offered the reader two equivalent-looking options, one of
// which is the only pass on the ice that can score for the other team. The
// coordinate is recorded here rather than deleted, so that nobody re-derives it
// thinking it was merely mislaid.

const delayedPenalty = {
  id: 'delayed-penalty-your-own-net',
  title: 'Delayed penalty, your own net',
  owner: 'content/systems/game_management.md',
  half: true,
  width: 900,

  caption:
    'A delayed penalty, drawn in your own defending end — so the net in this picture is yours, ' +
    'and it is empty, because your goaltender has already gone to the bench for a sixth attacker ' +
    'at the first sign of the referee’s arm, which is what he should do. ' +
    'The empty net behind you costs nothing here, and that is the whole point ' +
    'of the situation: play runs on until the team to be penalised gains control of the puck ' +
    'under NHL Rule 15.1, and until they do they cannot score — with one exception, and that ' +
    'exception is the subject of this picture. Under NHL Rule 78.5(xi) they can only score if your own team ' +
    'shoots the puck into your own net. So the one pass in this whole sequence that can beat you ' +
    'is a blind defenceman-to-defenceman pass straight down the ice, across the front of your own ' +
    'goal and through your own crease — and that pass is deliberately not drawn here. There is no ' +
    'symbol in this notation for a route you must not take, and an arrow drawn across your own ' +
    'goal mouth reads as an instruction rather than as a warning. The single route that is drawn ' +
    'is the same pass made the safe way, out and around behind your own net, well clear of the ' +
    'goal. The instruction is simply not to make the other one: no blind D-to-D passes across your ' +
    'own crease during a delayed call. Only the opponent nearest the puck is drawn, ' +
    'because the whistle comes when they gain control and keeping it away from them is the entire ' +
    'job; your other four skaters are not drawn at all, because the section does not say where ' +
    'they stand. And check before the game rather than in it: many recreational leagues do not ' +
    'allow or practise pulling the goalie on a delayed call, and some officials stop play early.',

  describe:
    'Your own defending end, your net at the right. The goal crease is empty — no goaltender is ' +
    'drawn in it, and the crease itself carries the words "no goalie" across it. One of your ' +
    'defencemen has the puck low in the right-hand corner; your other ' +
    'defenceman is across in the left-hand corner. A single opposition forward is in the right ' +
    'corner as well, inside the puck carrier and toward the middle of the ice. One dashed passing ' +
    'route leaves the puck carrier and runs to his partner. It curves out and around the ' +
    'back of the goal, running four to six feet past the goal line for the whole of its middle ' +
    'third and never entering the crease. No route is drawn across the front of the goal, ' +
    'deliberately: the pass this section warns against is described in words and not drawn. The ' +
    'route is not numbered. No other players are drawn, and no region is shaded.',

  // ⚠️ NOT A SHADED REGION. `fill: 'none'` and `stroke: 'none'` together draw nothing
  // at all; the entry exists so its label lands at the mean of its points, which is
  // (86, 0) — the middle of the crease. See the ⚠️ block above this spec for why the
  // empty net needed labelling and why tinting the crease was the wrong way to do it.
  zones: [
    {
      label: 'no goalie',
      fill: 'none',
      stroke: 'none',
      points: [
        { at: 'goal-line', dy: 4 },      // (89,  4)
        { at: 'crease', dx: -1.5, dy: 4 },   // (84.5,  4)
        { at: 'crease', dx: -3 },        // (83,  0)   the arc's deepest point
        { at: 'crease', dx: -1.5, dy: -4 },  // (84.5, -4)
        { at: 'goal-line', dy: -4 },     // (89, -4)
      ],
    },
  ],

  players: [
    // No goaltender glyph. His absence is the situation, and it is stated in the
    // caption, in `describe` and now on the crease itself, so that it cannot read
    // as an omission.
    { id: 'D', pos: 'D', at: DP_D1, label: 'you' },
    { id: 'D', pos: 'D', at: DP_D2, label: 'partner' },
    // Unlabelled: a solid circle already says opposition forward, and any label
    // worth reading at x = 76 would be drawn across the corner boards.
    { id: 'F',  pos: 'F', team: 'opp', at: DP_THEM },
  ],

  // NOT `numbered`. There is one route, and a badge on a single route reads as the
  // first step of a sequence whose other steps are missing.
  routes: [
    { from: DP_D1, to: DP_BEHIND, kind: 'pass', bow: 18 },
  ],

  // ⚠️ THE PUCK WAS AT (85, 24.5), 5.5 ft BELOW HIS ANCHOR, AND REMOVING THE STRAIGHT
  // ROUTE PUT THE LABEL'S LEADER THROUGH IT. `placeLabels` seeds itself with the
  // routes, so while the forbidden pass ran down x = 85 its own reserve samples blocked
  // every offset below this glyph and 'you' was placed out at (76, 34.5), measured off
  // the rendered SVG. With that route gone the (0, -11) slot is free, 'you' lands at
  // (85, 19), and the dashed leader runs (85, 30) -> (85, 17.8) — straight through the
  // puck disc at (85, 24.5), whose span is 23.4 to 25.6. A leader drawn through the puck
  // makes the label read as a name for the puck rather than for the player. The same
  // failure was reported in center.mjs in the same round; there the fix was also to move
  // the puck, because the leader cannot be moved.
  //
  // ⚠️ A FIX FOR ONE DEFECT MOVED THE FURNITURE AND CAUSED ANOTHER, and it did so in a
  // layer no arithmetic in this spec looks at. Removing a ROUTE changed where a LABEL
  // went. That is only visible in a render.
  //
  // (85, 36.5) is on the boards side of him instead — 6.5 ft from his anchor, so
  // 0.8 ft of clear ice past the triangle's apex ink (circumradius 3.6 plus the 1.0
  // of its 2.0 halo) and the disc's own 1.1; 4.6 ft off the side boards; 1.04 ft
  // inside the corner arc; and 13.08 ft from the opponent, which is further from the
  // pressure than it was rather than nearer. The leader now runs through open ice.
  puck: { at: 'corner:right', dx: 3, dy: 2.5 },            // (85, 36.5)
};

// ---------------------------------------------------------------------------
// 5. The 3-on-3 regroup — game_management.md, "Regular-season 3-on-3 (NHL)".
// ---------------------------------------------------------------------------
//
// WHY THIS EXISTS. Nothing in the corpus draws three-on-three at all, and the
// section's central claim is spatial: "With no good option in the offensive zone,
// you carry or pass the puck **back out through the neutral zone**, reset, and come
// again ... The whole ice is your working space; camping in the offensive zone
// doesn't work." A route that leaves their zone and finishes on your own side of
// centre ice is what that sentence looks like.
//
// AND WHY IT IS NOT `nz-regroup-d-to-d`. That diagram (neutral_zone_systems.md)
// draws a five-on-five D-to-D regroup and teaches the pass across. This one is
// about the COUNT: three a side on two hundred feet, where the section's reason
// for declining the shot is that "giving up the puck means facing a 3-on-2 the
// other way immediately". Borrowed, a reader counting glyphs would get the wrong
// strength, and a borrowed caption cannot be edited to warn them.
//
// ⚠️ PERSONNEL IS NOT THE FORMAT. Rule 84.1 gives each side "three skaters and one
// goalkeeper" and says nothing whatever about who those three are; the section does
// not either. The published key has no neutral glyph — a circle is a forward and a
// triangle a defenceman — so every one of the six skaters here is a personnel claim
// the section declines to make. Two forwards and a defenceman a side is drawn
// because something had to be, and the caption says in terms that it is a team's
// choice rather than part of the format.
//
// FULL SHEET, AND IT HAS TO BE. "The whole ice is your working space" cannot be
// drawn on half of it, and the route's whole content is that it starts inside their
// blue line and finishes past centre ice.
//
// NOT DRAWN: any second route. The section's other principles — possession over
// shooting, changing only with possession, the goal coming off a defender who
// cannot get off — are about tempo and about the bench, and the bench is not on
// this rink at all. They are carried in the caption instead.

const OT_CARRIER = { at: 'point:right',  dx: 12, dy: 2 };    // (37, 22)
// Their zone at the right, so x = 37 is twelve feet inside their blue line.

// The retreat. Bow is NEGATIVE on purpose: a positive bow drives the control point
// toward (+x, -y) and swept the curve down onto the checker's side of the ice. At
// bow -8 the control point is (7.25, 12.78) and the route's closest approach to any
// opponent is its own start, 9.22 ft.
//
// ⚠️ THE TIP WAS (-8, -6) AND THE RENDER MOVED IT. That point is 10 ft from the
// centre dot, i.e. INSIDE the 15 ft centre circle, and the arrowhead was drawn
// across the circle's line and beside the dot — a mark that reads as part of the
// rink rather than as the end of a route. (-14, -10) was tried next and was 17.2 ft
// out, which puts the TIP outside the circle and leaves the 3.15 ft arrowhead
// sitting on its painted line. (-20, -12) is 23.3 ft from the dot, so the whole
// arrowhead is clear of it, and it is still in the neutral zone — five feet short
// of your own blue line at -25.
const OT_REGROUP_TO = { at: 'centre-ice', dx: -20, dy: -12 };  // (-20, -12)

// The two supports, spread rather than stacked — "the whole ice is your working
// space". Neither carries a route: the section describes where the reset happens,
// not what they skate.
//
// OT_BACK was (-26, 16), which is one foot inside the blue line at -25, and the
// triangle rendered sitting on the painted line. Five feet deeper clears it.
const OT_WIDE = { at: 'neutral-dot:left', dx: -4, dy: -10 }; // (16, -32)
const OT_BACK = { at: 'centre-ice', dx: -30, dy: 16 };       // (-30, 16)

// Their three, and ALL THREE ARE BETWEEN THE CARRIER AND THEIR OWN NET. That is the
// arrangement the section's sentence needs — "with no good option in the offensive
// zone" — and the first version of this spec got it backwards, putting two of them
// back at their own blue line, up-ice of the puck, where they were defending
// nothing. It also ran the retreat route 6.49 ft past the checker's glyph, so the
// picture read as carrying THROUGH him rather than turning away from him. With the
// checker inside the carrier, the route's closest approach to any opponent is its
// own start: hypot(44-37, 16-22) = 9.22 ft, 2.7 ft of daylight past the two
// circles' 6.55 ft of ink.
const OT_CHECK = { at: 'point:right',        dx: 19, dy: -4 };  // (44, 16)
const OT_MID   = { at: 'top-of-circle:right', dx: -2, dy: -22 };// (52, 0)
const OT_LOW   = { at: 'top-of-circle:left',  dx: 1,  dy: 4 };  // (55, -18)

const overtimeRegroup = {
  id: 'ot-3-on-3-regroup',
  title: 'The three-on-three regroup',
  owner: 'content/systems/game_management.md',
  half: false,
  width: 1100,

  caption:
    'Three-on-three overtime, and the skill the format is really about. You are inside their blue ' +
    'line with no high-quality look, so rather than force a shot you turn and take the puck back ' +
    'out through the neutral zone — the long wave running from their end to your own side of ' +
    'centre ice — to reset and come again. Overtime at three a side is a possession game: if you ' +
    'do not have a high-quality look you do not shoot, because giving the puck up means facing a ' +
    '3-on-2 the other way immediately, and a missed net in 3-on-3 is often a goal against. ' +
    'Retreating thirty or forty seconds without forcing anything is normal and correct, and the ' +
    'whole ice is your working space — camping in their zone does not work. Change only with ' +
    'possession; you never surrender the puck to get fresh legs. And the winning goal is often ' +
    'not a great shot at all but a defender who has been stuck out and cannot get off, isolated. ' +
    'All six skaters are drawn, which is what three a side actually looks like on two hundred ' +
    'feet, and both goaltenders are in their creases. Two things this picture is not: Rule 84.1 ' +
    'gives each side three skaters and one goalkeeper and says nothing about who they are, so the ' +
    'two forwards and one defenceman a side drawn here are a team’s choice and not the format; ' +
    'and all of the play above is the account coaches and players give of how this format is now ' +
    'played, rather than a rule of hockey. This is NHL regular-season overtime, and the format ' +
    'you actually play may not be it — in many British fixtures there is no overtime at all.',

  describe:
    'The full sheet. Your own net is at the left with your goaltender in the crease; the ' +
    'opposition net is at the right with their goaltender in theirs. Three own skaters and three ' +
    'opposition skaters are drawn and no more, which is the whole strength of both teams here. ' +
    'Your puck carrier, a forward, is about twelve feet inside the opposition blue line on the ' +
    'upper side of the ice, with the puck drawn just below him on the up-ice side, away from the ' +
    'checker. All ' +
    'three opposition skaters are between him and their own net: a forward inside him and a ' +
    'little deeper, a defenceman in the middle of the ice halfway to the tops of the circles, and ' +
    'a second forward on the far side at the top of the far faceoff circle. Your two supports ' +
    'are spread rather than stacked: a forward wide and low in the neutral zone on the far side, ' +
    'and a defenceman back inside your own blue line. One route is drawn, the long smooth wave ' +
    'with an arrowhead that means skate and stickhandle: it leaves the ' +
    'carrier, curves back out of the offensive zone and across the neutral zone, and finishes ' +
    'past centre ice on your own side and outside the centre circle, pointing back toward your ' +
    'own end. Nobody else has a route.',

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease::far', dx: 1 } },   // (-85, 0)
    { id: 'G', pos: 'G', team: 'opp', at: { at: 'crease', dx: -1 } },  // (85, 0)

    { id: 'F', pos: 'F', at: OT_CARRIER, label: 'you' },
    // Unlabelled. The section gives these two no role names, only the instruction
    // that the whole ice is available, and a label is four words on a picture with
    // no room to hedge a claim the prose declines to make.
    { id: 'F', pos: 'F', at: OT_WIDE },
    { id: 'D', pos: 'D', at: OT_BACK },

    { id: 'F', pos: 'F', team: 'opp', at: OT_CHECK },
    { id: 'F', pos: 'F', team: 'opp', at: OT_LOW },
    { id: 'D', pos: 'D', team: 'opp', at: OT_MID },
  ],

  // `carry` — the key's "skate and stickhandle", a long smooth wave with an
  // arrowhead. NOT `skate`: he has the puck, which is the whole reason he is
  // allowed to decline the shot and go back for it.
  //
  // THE ARRIVAL INVARIANT is satisfied trivially rather than by luck: the tip is
  // at (-8, -6) and its terminal tangent runs down and back toward your own end,
  // while every opposition skater is at x > 25. None of them lies ahead of the tip,
  // and the nearest is 35 ft away.
  routes: [
    { from: OT_CARRIER, to: OT_REGROUP_TO, kind: 'carry', bow: -8 },
  ],

  // ⚠️ 4.5 ft BELOW him, and it was 4.5 ft above him until the render was looked at.
  // On the boards side the disc sat directly under the automatically placed `you`
  // label, whose leader line then terminated on the PUCK rather than on the player —
  // a label naming the wrong object. Below him the slot above the glyph is clear.
  // The disc is 7.16 ft from the checker's anchor, so its near edge is 2.79 ft clear
  // of that glyph's 3.275 ft of ink, and 4.5 ft off the route's own spine.
  puck: { at: 'point:right', dx: 12, dy: -2.5 },              // (37, 17.5)
};

export default [sixOnFive, sixOnFivePinch, clearAtFiveOnSix, delayedPenalty, overtimeRegroup];
