/**
 * Diagrams for content/off-the-ice/practice_and_development.md.
 *
 * The section is the source of truth. Every player below is one its prose places or
 * describes, and where the prose hedges, the caption hedges.
 *
 * WHY THIS DOCUMENT OWNS ALMOST NOTHING DRAWABLE, AND WHAT IS LEFT.
 *
 * Most of this document is not a rink shape and cannot become one. Its long middle —
 * the 10,000-hour figure, the replication, the variance meta-analyses, contextual
 * interference, learning styles, the testing effect — is evidence about learning, and
 * a diagram of a rink cannot say anything about an effect size. Its off-ice sections
 * are about a kitchen floor, a shooting pad, a wall, a slide board and a pair of
 * inline skates; none of those is on a sheet of ice, and the renderer draws a sheet of
 * ice and nothing else. Its weekly plans, its tracking measures, its adult-beginner
 * section and its injury section are all text.
 *
 * TWO CLAIMS IN IT ARE GENUINELY SPATIAL, and both are claims the prose can only
 * assert while a picture can show:
 *
 *   1. "Most drills have exactly one correct answer, known in advance ... A passive
 *      defender who is allowed to take away *one* option is enough to turn an
 *      execution drill into a decision drill." (§Practising Decision-Making) That is a
 *      difference of exactly one glyph, which is what a pair of frames is for.
 *
 *   2. "If a full game gives the best players in the world one minute with the puck, a
 *      full-ice drill where you queue for ninety seconds to take one rep gives you
 *      almost nothing. Shrink the space and cut the numbers." (§Small-Area Games) That
 *      is an arrangement of people on a sheet, and the two arrangements can be drawn
 *      side by side with the same six SKATERS in each. ⚠️ SKATERS, not "players" — see
 *      the block above `theLine` for what that word cost when it was loose.
 *
 * ⚠️ A DRILL IS SOMEBODY'S CHOICE AND NEVER A LAW, and that applies here with more
 * force than anywhere else in this corpus, because a diagram is the most
 * absolute-looking thing on a page and a drill diagram looks like an instruction.
 * Every caption below names the arrangement as one example, names a realistic
 * alternative, and tells the reader to ask their coach. The document does the same in
 * its own words — its priority ordering, its weekly plans and its team-practice habits
 * all carry that label in the text.
 *
 * NOTATION DECISIONS TAKEN HERE, because these are the corpus's first drill diagrams
 * and project/content_style_guide.md asks for them to be taken before drawing rather
 * than after:
 *
 *   - NO COACH IS DRAWN. The style guide records one live collision with the published
 *     player key: a circled `C` is that sheet's COACH and this corpus's CENTRE, at
 *     dozens of glyphs. The §"Why standard drills don't train it" sentence mentions
 *     "the spot the coach is standing", and drawing that spot would either need the
 *     colliding glyph or would need one invented. Neither is acceptable, so the drill
 *     pair below uses a teammate as the fixed target and the caption carries the rest.
 *     ⚠️ NO GLYPH IN THIS FILE IS LABELLED `C`, and none should be added.
 *
 *   - NO PYLON, even though `X` is a pylon in both published keys, `pos: 'pylon'`
 *     renders one, and no diagram in the corpus has ever used it. A cone marks out a
 *     particular drill design, and neither the section nor any source here says where
 *     one goes. The pair's whole subject is the presence or absence of an opponent,
 *     not the shape of the pattern, so a cone would add a coaching claim to a picture
 *     that does not need one. The symbol stays unused rather than invented into.
 *
 *   - NO END-OF-REPETITION GHOST. The HEO sheet's fifth row is `Player position at the
 *     end of the repetition`, drawn as a DASHED circle or triangle — the one notation on
 *     that sheet built specifically for drill diagrams, which is what these are. It is
 *     not used here because `site/scripts/lib/rink.mjs` has no dashed-glyph branch at
 *     all: every glyph is a solid outline, so there is nothing to draw it with and it
 *     would have to be invented into the renderer. Recorded rather than passed over in
 *     silence, because an enumeration of notation decisions that omits one is a claim
 *     that it was never considered. Nothing below needs it: `theLine`'s rep ends in open
 *     ice with the rep still running, and the drill pair is drawn at one instant.
 *
 *   - NO SHOT AT A GOALTENDER IS DRAWN ANYWHERE IN THIS FILE, and that is deliberate.
 *     This document's one hard safety override is about pucks fired at goaltenders in
 *     drills, and it is a four-book rule-scope argument — a "may" in one book, a
 *     "shall" limited to U13 and below in another, no mask-specific stoppage in three
 *     of them, and an injury stoppage in every book that waits on a referee judging a
 *     player hurt. None of that fits in a caption, and a picture of a practice shot on
 *     a goaltender with a shortened version of it beside it would be worse than no
 *     picture. The drill rep in `practice-the-line-and-one-rep` therefore ends in open
 *     ice with the rep still in progress.
 *
 * ⚠️ COORDINATES ASSUME site/src/data/rink.json AS ON DISK IN THIS WORKING TREE:
 * sheet 200 x 85 with a 28 ft corner radius; blue line x 25; goal line x 89; end-zone
 * dots (69, 22) with a 15 ft circle, top-of-circle (54, 22); half-wall (69, 38.5);
 * neutral-dot (20, 22); point (25, 20); slot (76, 0); high-slot (69, 0); crease
 * (86, 0). Every clearance stated in a comment below dies if one of those moves.
 * Glyph ink is site/scripts/lib/rink.mjs's: a forward's body radius 2.9 ft, 3.275 ft
 * with half its 0.75 outline, and 3.875 ft counting the 1.95 halo stroke — so two
 * forwards need 7.75 ft between anchors before their halos touch, and a puck dot needs
 * more than 2.9 + 1.1 = 4.0 ft from a body it is not meant to be drawn inside.
 *
 * ⚠️ A PUCK DOT DRAWN ON A ROUTE IS A DIFFERENT SYMBOL. content/reading-diagrams/
 * reading_ice_hockey_diagrams.md warns the reader in terms to keep the puck "apart
 * from the marker on a drop-pass line, which is the same ink and sits *on* a route
 * rather than beside a player". Both pucks below are therefore placed roughly SQUARE
 * to the route that leaves their carrier, not along it — the first draft of both put
 * them a few feet ahead on the line, which is the drop-pass mark.
 */

/* ------------------------------------------------------------------------- *
 * 1 and 2 — The execution drill and the decision drill: one glyph apart.
 *
 * Section: "Why standard drills don't train it" and "How to train reads".
 *   "Most drills have exactly one correct answer, known in advance. You skate the
 *    pattern, you make the pass to the spot the coach is standing, you shoot. The read
 *    has been removed to make the skill practisable — which is legitimate, but it
 *    means the drill trains execution only."
 *   "Always have an opponent, even a token one. A passive defender who is allowed to
 *    take away *one* option is enough to turn an execution drill into a decision
 *    drill."
 * And, from §"What they train that drills cannot": "A drill removes the opponent, or
 * makes the opponent's behaviour known in advance. That is exactly the information you
 * need to learn to read."
 *
 * A PAIR, BECAUSE ONE FRAME CANNOT MAKE A COMPARISON, and the two frames are identical
 * in every element except the one added player and the route his arrival removes. The
 * reader has nothing else on the page to look at, which is the whole design.
 *
 * ⚠️ FRAME TWO HAS NO ROUTES AT ALL, and that is the teaching rather than an omission.
 * Drawing the shot, or the delay, or the carrier beating him would put the answer back
 * in the picture — and the section's point is that the answer has left it. The caption
 * says so in terms, so a reader does not read the empty frame as "there is nothing to
 * do here".
 *
 * ⚠️ ONE THING THE PAIR DOES NOT MATCH ON, recorded so nobody "fixes" it by hand: the
 * carrier's label sits ABOVE him in frame one and BELOW him in frame two. That is the
 * label placer, not the spec. It places greedily and reserves route samples as well as
 * glyphs, so frame one's pass route occupies the slot below the carrier and frame two's
 * empty ice does not. Both placements are legal and each is the nearest free one in its
 * own frame; forcing them to agree would mean adding something to frame two purely to
 * block a label, which is worse than the mismatch.
 *
 * WHAT THE PAIR CANNOT SHOW, said in the captions rather than left silent: whether the
 * player looked. The section's fix for a drill is partly a constraint that forces a
 * scan — "you must shoulder-check before every reception" — and a scan is a head turn,
 * which this notation has no head, no facing and no stick to draw.
 * ------------------------------------------------------------------------- */

// The carrier, inside the attacking zone on the right side and above the faceoff dot:
// 9.8 ft from the right circle's centre (69, 22), so unambiguously inside the circle
// rather than sitting on its edge. Board clearance at x 60 is on the STRAIGHT boards —
// the corner arc, centre (72, 14.5) radius 28, only bites beyond x 72 — so the inner
// ink edge is 42.2 and the halo clears the wall by 12.3 ft.
const DRILL_CARRIER = { at: 'top-of-circle:right', dx: 6, dy: 4 };   // (60, 26)

// The teammate at the net front. NOT on `net-front` or `goalmouth`: rink.json's own note
// records that both datums sit inside the blue paint and that any skater drawn on them
// needs an offset. From here the distance to the crease arc's centre (88.972, 0) is
// sqrt(10.972^2 + 6^2) = 12.5 ft against a 6 ft radius, so the glyph is 6.5 ft clear of
// the paint — daylight for the 3.875 ft halo — and 10.0 ft from the goaltender's glyph.
// ⚠️ (72, -6) was tried first. It is legal and it renders as a player at the top of the
// far faceoff circle, which is the slot and is NOT what "driving the net" looks like;
// the caption said one thing and the picture showed another. Found by rendering it.
const DRILL_TARGET = { at: 'slot', dx: 2, dy: -6 };                  // (78, -6)

// ⚠️ THE GOALTENDER IS THE OPPOSITION'S, AND BOTH FRAMES MUST SAY SO. The rep attacks
// this net — the carrier passes to a teammate at its front — so the man in it is the one
// being attacked. He carries `team: 'opp'` below for that reason. The flag changes no ink:
// `rink.mjs` draws a `G` as a bare letter with NO TEAM BRANCH ("which net a goaltender is
// standing in settles whose they are"), so the picture cannot settle this either way and
// the WORDS are the only place it is settled. ⚠️ Both frames omitted the flag and their
// two voiced layers then said opposite things — the execution caption "the only opponent
// drawn is the goaltender" against the decision `describe`'s "your goaltender is in the
// crease" — inside a pair billed as "the same instant, exactly one thing changed".
const DRILL_G = 'crease';                                            // (86, 0)

// The puck at the carrier's stick, placed SQUARE to the pass rather than along it. The
// pass runs (60, 26) -> (78, -6), unit (0.490, -0.872); the offset (4.2, 2.35) has a
// component of 0.01 ft along that direction and 4.80 ft across it, so the dot reads as
// beside him and cannot be read as a drop-pass marker sitting on the line. 4.81 ft from
// his anchor, against the 4.0 ft a 2.9 ft body and a 1.1 ft puck need.
const DRILL_PUCK = { at: 'top-of-circle:right', dx: 10.2, dy: 6.35 }; // (64.2, 28.35)

// FRAME TWO ONLY. The one added player, standing ON the line between the other two:
// at y = 6 the pass line is at x = 60 + 18 x (20/32) = 71.25, which is this anchor
// exactly, so the three glyphs are collinear and a reader can see the lane is occupied
// without a lane being drawn. 22.9 ft from the carrier and 13.8 ft from the teammate,
// both far outside the 7.75 ft at which two forwards' halos would touch.
const DRILL_DEFENDER = { at: 'high-slot', dx: 2.25, dy: 6 };         // (71.25, 6)

const executionDrill = {
  id: 'drill-execution-no-opponent',
  owner: 'content/off-the-ice/practice_and_development.md',
  half: true,
  width: 900,

  caption:
    'The first of two frames of the same drill rep, drawn to be compared: this one has nobody ' +
    'defending, and the next one has a single defender added. The attacking net is at the right. ' +
    'You have the puck on the right side ' +
    'inside the faceoff circle, a teammate is standing at the front of the net, and the dashed ' +
    'line is the pass to him. That pass was the answer before the rep started, and it will still be ' +
    'the answer next time, because there is no opposing skater anywhere in the picture who could ' +
    'take it away — the only opponent drawn is the opposing goaltender, and he cannot stand in a ' +
    'passing lane on the other side of the ice. None of that makes the drill a bad one. Taking the ' +
    'read out ' +
    'is what makes a skill practisable, and a rep like this trains the timing, the pass and the ' +
    'finish properly; what it cannot train is the choice, because there is only one option and it ' +
    'never changes. The next frame is the same instant with a single player added — and with the ' +
    'pass route gone, because his arrival is what takes it away. This is one ' +
    'shape of drill among very many, and which ones your team runs, how they are built and what ' +
    'each is meant to teach are your coach’s decisions rather than rules of hockey — so if the ' +
    'purpose of a drill is not obvious, ask, because a rep whose point you cannot name is a rep of ' +
    'the shape of the drill rather than of the thing it was built to teach.',

  describe:
    'The attacking half of the rink, the net at the right with the opposing goaltender in the ' +
    'crease. Two own ' +
    'players and no opposition skaters. One stands inside the right faceoff circle above the dot ' +
    'with the puck drawn beside him, and a dashed passing route runs from him across the ice and ' +
    'down to the second, who stands in front of the net a little to the far side and about six feet ' +
    'clear of the crease. Nothing else is drawn: no defender, no ' +
    'other route, and no cone.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: DRILL_G },
    // Circles on both, and the shape is a choice the notation forces rather than a
    // claim the section makes: the section names no positions at all here, and the
    // published key has no neutral glyph — a circle is a forward and a triangle a
    // defenceman, so every glyph is a personnel claim whether the picture wants to
    // make one or not. Two forwards is the commonest version of this rep.
    { id: 'F', pos: 'F', at: DRILL_CARRIER, label: 'you, with the puck' },
    // ⚠️ LABELLED FOR WHERE HE IS, NOT FOR WHAT HE IS DOING. This read "driving the
    // net", which is a movement claim, and he has NO ROUTE in either frame. Giving him
    // one in frame one alone would break the pair — the two frames differ by one added
    // player and the route his arrival removes, and nothing else — so the honest repair
    // is the label rather than the ink. See DRILL_TARGET on why the anchor is where it is.
    { id: 'F', pos: 'F', at: DRILL_TARGET, label: 'at the net front' },
  ],

  routes: [
    // The pass. Its arrowhead is drawn at the receiver's anchor and therefore sits
    // under his glyph, which is what every pass to a player in this corpus does; the
    // route is 36.7 ft long — (60, 26) to (78, -6) — so nothing about the short-route
    // case in rink.mjs applies to it.
    { from: DRILL_CARRIER, to: DRILL_TARGET, kind: 'pass' },
  ],

  puck: DRILL_PUCK,
};

const decisionDrill = {
  id: 'drill-decision-one-defender',
  owner: 'content/off-the-ice/practice_and_development.md',
  half: true,
  width: 900,

  caption:
    'The second frame: the same instant, the same two own players, the same goaltender, the same ' +
    'puck, and exactly one ' +
    'player added. A single opposing skater now stands between you and your teammate, in the lane ' +
    'the ' +
    'pass was going to travel down. Nobody has moved. And there is no route drawn in this ' +
    'picture at all, which is the point of it rather than an omission — the answer has left the ' +
    'frame. The pass you were going to make is not there any more. What is there instead is a shot, ' +
    'or holding the puck for one more beat, or beating him and going yourself, and which of those ' +
    'is right depends on what he does next and on whether you had already looked before the puck ' +
    'reached you. One defender, allowed to take away one option, is enough to turn a drill that ' +
    'trains execution into one that trains a decision. That is a coaching approach and not a rule ' +
    'of hockey, and it is not the only one: shrinking the space, shortening the clock, or a ' +
    'constraint such as being forbidden to pass back to whoever passed to you all do similar work, ' +
    'and so does simply playing a small-area game instead. Ask your coach which one a drill is ' +
    'using. ⚠️ The defender drawn here is a passive one, allowed to take away a single option and ' +
    'nothing else. How hard a defender may compete in a drill, and whether body checking is ' +
    'permitted at all, depends on your age group, your league and the book they play under, and no ' +
    'picture can tell you that.',

  describe:
    'The same attacking half and the same instant as the previous diagram, with everything unchanged ' +
    'except that one opposition player has been added and the pass route has gone. Your own two ' +
    'players are where they were — ' +
    'one inside the right faceoff circle with the puck beside him, one in front of the net — and ' +
    'the opposing goaltender is in the crease. The opposition forward stands squarely on the line ' +
    'between ' +
    'the two of them, about twenty-three feet from the puck carrier and about fourteen from the ' +
    'teammate. No routes are drawn anywhere in this frame.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: DRILL_G },
    { id: 'F', pos: 'F', at: DRILL_CARRIER, label: 'you, with the puck' },
    { id: 'F', pos: 'F', at: DRILL_TARGET, label: 'at the net front' },
    // A circle again, for the same reason: the section says only "a passive defender"
    // and names no position, so the shape is forced by the notation rather than chosen.
    { id: 'F', team: 'opp', pos: 'F', at: DRILL_DEFENDER, label: 'takes one option' },
  ],

  routes: [],

  puck: DRILL_PUCK,
};

/* ------------------------------------------------------------------------- *
 * 3 and 4 — The same six skaters, twice: the line, and the game.
 *
 * Section: "Small-Area Games", and specifically:
 *   "A small-area game is a live game played in a restricted space — a zone, a corner,
 *    between the blue lines, cross-ice — usually with fewer players, often with added
 *    constraints."
 *   "If a full game gives the best players in the world one minute with the puck, a
 *    full-ice drill where you queue for ninety seconds to take one rep gives you almost
 *    nothing. Shrink the space and cut the numbers, and puck contacts per player go up
 *    several-fold — a coaching estimate rather than a counted one."
 *   "Keep the numbers low. 2-on-2 and 3-on-3 give far more touches than 4-on-4."
 *   "keep the shifts short (30-45 seconds) or the quality collapses."
 * And from §"While you're queuing": "Half of a typical team practice is standing in a
 * line — a coaching estimate rather than a measured share."
 *
 * BOTH ARE FULL-SHEET (`half: false`), and they have to be. The argument is about how
 * much ice a group is using, so a reader who cannot see the whole sheet cannot see it.
 *
 * ⚠️ WHAT THE PAIR MAY AND MAY NOT CLAIM. It may claim what it draws: six skaters
 * arranged two ways, and how many of them are in the play at the instant drawn. It may
 * NOT claim the several-fold touch multiple, which the section itself labels a coaching
 * estimate and says outright was not found counted anywhere — so neither caption states
 * a ratio, and the picture is offered as the mechanism rather than as the measurement.
 *
 * SIX SKATERS IN BOTH, so the comparison is of arrangements and not of group sizes. Six
 * is also the smallest number that makes the second frame the 3-on-3 the section itself
 * names, and it means neither frame needs a group standing off to one side waiting for
 * a shift, which would have muddied both pictures.
 *
 * ⚠️ SIX SKATERS IS NOT SIX GLYPHS, AND THIS BLOCK ONCE SAID "SIX PLAYERS IN BOTH" WHEN
 * THE SECOND FRAME DRAWS SEVEN. The built SVGs settle it: `practice-the-line-and-one-rep`
 * renders `F F F F F F` and no goaltender; `practice-small-area-in-one-zone` renders
 * `G F F F F F F`. The extra glyph is the goaltender, and he belongs there — a game
 * played on a net with nobody in it is a different picture — but he is a SEVENTH PERSON
 * who was not in the queue, and the first caption asks the reader to COUNT: "Count the
 * picture and you have the argument." A reader who does what that sentence says gets six
 * and then seven, and the claim that these are the same group fails in their hands.
 * ⚠️ ADDING A GOALTENDER TO FRAME ONE WOULD ALSO RECONCILE THE COUNT AND IS THE WRONG
 * FIX: frame one's caption says "There is no opponent anywhere", which is TRUE of what it
 * draws today and is the sentence the whole first argument rests on. So the words change
 * and the ink does not — both captions say SIX SKATERS, and both name the goaltender
 * separately as the person he is.
 * ------------------------------------------------------------------------- */

// The line, along the far-end boards. `half-wall:right:far` is (-69, 38.5) — rink.json's
// own note on the datum is "the boards level with the faceoff dot" — and the four
// further glyphs step 8 ft up-ice from it, which is 0.25 ft more than the 7.75 ft two
// forwards' halos need. The whole run sits on the STRAIGHT boards: the far corner arc is
// centred (-72, 14.5) with radius 28 and bites only beyond x = -72, and the nearest of
// these is at -69.
const LINE_1 = { at: 'half-wall:right:far' };             // (-69, 38.5)
const LINE_2 = { at: 'half-wall:right:far', dx: 8 };      // (-61, 38.5)
const LINE_3 = { at: 'half-wall:right:far', dx: 16 };     // (-53, 38.5)
const LINE_4 = { at: 'half-wall:right:far', dx: 24 };     // (-45, 38.5)
const LINE_5 = { at: 'half-wall:right:far', dx: 32 };     // (-37, 38.5)

// The one rep in progress, out in the neutral zone. 25.1 ft from the tail of the line,
// so he reads as gone rather than as part of it.
const REP_FROM = { at: 'neutral-dot:right:far', dy: -2 };  // (-20, 20)
// Where he is going: 3 ft inside the attacking blue line and toward the middle. A 50.0
// ft route. No opposing skater is drawn anywhere in this frame, so the arrival
// invariant in site/scripts/lib/rink.mjs has nothing to bite on.
const REP_TO = { at: 'blue-line', dx: 3, dy: 6 };          // (28, 6)
// The puck at his stick, SQUARE to the route rather than along it — the route's unit
// direction is (0.96, -0.28) and this offset (1.3, 4.4) has a component of 0.02 ft
// along it and 4.59 ft across it. 4.59 ft from his anchor, outside the 4.0 ft a body
// and a puck dot need. Placed on the line's side of him, which is where a carrier
// looking up ice would be protecting it.
const REP_PUCK = { at: 'neutral-dot:right:far', dx: 1.3, dy: 2.4 };  // (-18.7, 24.4)

// ⚠️ THE CAPTION CARRIES BOTH OF §"While you're queuing"'s SAFETY BULLETS, and it once
// carried only one. The section writes two — "Keep your feet moving" (a pulled muscle on
// the next hard rep) and "Head up. Practices have loose pucks flying." The caption imported
// the muscle pull and dropped the head, which is the higher-consequence half and the one
// this picture is literally OF: five people standing still against the boards while a puck
// is live on the same sheet. ⚠️ "Head up / loose pucks" existed in exactly ONE layer of the
// whole document — that single bullet — so a listener who heard the caption heard the
// cheaper warning and not the dearer one. Head up now leads, and Key Takeaways carries it.
const theLine = {
  id: 'practice-the-line-and-one-rep',
  owner: 'content/off-the-ice/practice_and_development.md',
  half: false,
  width: 900,

  caption:
    'A full-ice drill on the whole two-hundred-foot sheet, drawn at one instant: six skaters, one of ' +
    'them out in the middle carrying the puck up the ice, and five standing in a line ' +
    'against the boards at the far end waiting their turn. No goaltender is drawn in this one. ' +
    'Count the picture and you have the ' +
    'argument. One player is on the puck. Five are not moving. There is no opponent anywhere, so ' +
    'nothing in the rep can surprise the player taking it. A drill shaped like this has real jobs — ' +
    'it teaches a pattern, it can be skated at game pace, and it puts a whole group through the same ' +
    'thing in turn — and this is not a picture of a badly run practice. What it is expensive in is ' +
    'time, because a queue is ice you have paid for and are not using, and the way to get value out ' +
    // ⚠️ THE SAFETY PAIR SITS LAST AND THE GLYPH OPENS IT. It used to open the run, and
    // because `captionNodes()` ambers from the first glyph to the END of the caption, the
    // amber band ran on for another 380-odd characters of non-hazard prose: a coaching
    // estimate, a "that is your coach's call" hedge, and — last of all, in the safety
    // colour — the navigational sentence pointing at the next picture. Nothing was cut;
    // those three sentences moved ahead of the glyph, in their original order, and the two
    // safety bullets moved to the end unchanged with head-up still leading. The cost of the
    // move is that "the next picture" is no longer the last thing said, which is the right
    // trade: the warning names "that line", and the next caption opens "Nobody is queuing".
    'of one is to watch the rep in front of you and name what you would do differently. That ' +
    'roughly half of a typical team practice is spent ' +
    'standing in a line is a coaching estimate rather than anything anybody has counted. How a ' +
    'practice is built is your coach’s call and not yours; what is yours is what you do while you ' +
    'wait. The next picture is the same six skaters using one end of the ice. ⚠️ Two ' +
    'things about standing in that line, and the first one is the one that hurts people: keep your ' +
    'head up, because a practice has loose pucks flying and a line against the boards is exactly ' +
    'where they arrive. The second is that standing ' +
    'still for long stretches in cold air is how people pull something on their next hard rep, ' +
    'so keep your feet moving too.',

  describe:
    'The full two-hundred-foot sheet, with no opposition and no goaltender drawn. Five own skaters ' +
    'stand in a row along the upper boards at the far end, evenly spaced about eight feet apart, ' +
    'from level with the far faceoff dot up toward the far blue line. A sixth own skater is out in ' +
    'the neutral zone above the middle with the puck beside him, and a wavy route — the mark for ' +
    'skating with the puck — runs from him about fifty feet up the ice, finishing just inside the ' +
    'attacking blue line and toward the middle. Nobody else is drawn and nothing else is moving.',

  players: [
    // Circles throughout. The section describes a queue of players and names no
    // positions in it, and the notation has no neutral glyph — so the shape is forced
    // rather than claimed, and the caption reads them as a group rather than as jobs.
    { id: 'F', pos: 'F', at: LINE_1, label: 'the line' },
    { id: 'F', pos: 'F', at: LINE_2 },
    { id: 'F', pos: 'F', at: LINE_3 },
    { id: 'F', pos: 'F', at: LINE_4 },
    { id: 'F', pos: 'F', at: LINE_5 },
    { id: 'F', pos: 'F', at: REP_FROM, label: 'the one live rep' },
  ],

  routes: [
    // `carry` is the key's skate-and-stickhandle mark, a long smooth wave: the player
    // is skating with the puck. It finishes in open ice because the rep is still in
    // progress — see the header on why no shot at a goaltender is drawn in this file.
    { from: REP_FROM, to: REP_TO, kind: 'carry' },
  ],

  puck: REP_PUCK,
};

// THE GAME. Three against three inside one end zone, at a live instant.
//
// Own team, attacking the net at the right:
//   the carrier on the half-wall — rink.json's "the boards level with the faceoff dot"
//   a teammate low and across, in the slot below the middle
//   a teammate high, just inside the blue line
// Opposition:
//   a forechecker closing on the carrier
//   a defender in front of the net
//   a defender high, matched against the player at the line
//
// EVERY PAIR OF GLYPHS IS AT LEAST 7.75 FT APART — the closest two are the low pair at
// 10.0 ft and the high pair at 8.6 ft, the forechecker's nearest neighbour is 17.9 ft,
// and the tightest to the goaltender is 12.2 ft.
// The opposition defender at (74, -2) is 15.1 ft from the crease arc's centre against
// its 6 ft radius, so no glyph is drawn in the paint — and 9.1 ft CLEAR OF THE CREASE
// ITSELF, which is the number `describe` must say. ⚠️ It said "about fifteen feet clear
// of the crease", which is the distance to the ARC CENTRE with the radius never
// subtracted; the same slip is available at every net-front anchor in this file, so check
// the subtraction and not just the hypotenuse.
// The goaltender defends the net your three are attacking, so he is the OPPOSITION'S and
// carries the flag — see the ⚠️ on DRILL_G for why the flag changes no ink and why the
// words are therefore the only place it can be settled. ⚠️ HE IS ALSO THE SEVENTH PERSON
// IN A FRAME BILLED AS "THE SAME SIX", which is what the block above this pair is about.
const SAG_G = 'crease';                                        // (86, 0)
const SAG_CARRIER = 'half-wall:right';                         // (69, 38.5)
const SAG_LOW = { at: 'slot', dx: -8, dy: -10 };               // (68, -10)
const SAG_HIGH = { at: 'point:right', dx: 4, dy: -6 };         // (29, 14)
// ⚠️ THIS WAS (52, 26) AND THE ROUTE OFF IT WAS 14.4 FT, which on a full sheet renders
// at roughly four and a half pixels to the foot: the mark came out as a stub with two
// bars on the end and did not read as a route at all. Moved back to the blue-line side
// of the top of the circle, which makes it 22.4 ft. Found by rendering it. He is still
// inside the zone — x 45 against a blue line at 25 — which the caption needs him to be.
const SAG_FORECHECK = { at: 'top-of-circle:right', dx: -9 };         // (45, 22)
const SAG_NET = { at: 'slot', dx: -2, dy: -2 };                // (74, -2)
const SAG_HIGH_D = { at: 'point:right', dx: 9, dy: -13 };      // (34, 7)

// ⚠️ THE FORECHECK ROUTE ENDS 6.74 FT SHORT OF THE CARRIER AND ENDS IN BARS, NOT AN
// ARROWHEAD. `pressure` is `line: 'plain', end: 'bars2'` — the mark that says arrive and
// contain rather than continue through — and a bar-ended route is outside the arrival
// invariant's arrowhead rule by construction, which is exactly why it is the right mark
// for a player closing on a player. It is also the honest one here: what happens in the
// last two feet of a forecheck is not this document's subject, and how hard anyone may
// arrive depends on the book they play under.
// ⚠️ THAT LAST SENTENCE WAS WRITTEN HERE AND NEVER REACHED THE CAPTION. This is the only
// picture in the file with a route ARRIVING ON A PERSON, and it was the one carrying no
// level caveat at all, while `drill-decision-one-defender` — which draws no route whatever
// — carried the full one. A comment is not a layer a reader or a listener ever gets. The
// caption now carries it. ⚠️ THE TEST FOR ANY FUTURE FRAME HERE IS THE ROUTE, NOT THE
// GLYPH: a route arriving on a person needs the caveat in the caption; a route to open ice
// (`theLine`'s carry) and a pass to a teammate (`drill-execution-no-opponent`) do not.
const SAG_FORECHECK_TO = { at: 'half-wall:right', dx: -5.5, dy: -3.9 };  // (63.5, 34.6)

// The puck at the carrier's stick, 4.8 ft below him and square to the wall. 5.57 ft
// from the end of the forecheck route, so it is not drawn on it.
const SAG_PUCK = { at: 'half-wall:right', dy: -4.8 };          // (69, 33.7)

const smallAreaGame = {
  id: 'practice-small-area-in-one-zone',
  owner: 'content/off-the-ice/practice_and_development.md',
  half: false,
  width: 900,

  caption:
    'The same six skaters and the same sheet of ice, with the game shrunk into one end zone: three ' +
    'against three below the blue line, one puck, one net, and a goaltender in it who was not in ' +
    'the queue in the last picture — he is a seventh person, and he defends the net your three are ' +
    'attacking. Nobody is queuing. ' +
    'Every one of the six skaters is in the play, none of them more than about forty-five feet from ' +
    'the puck, and there is a ' +
    'live opponent who has not been told in advance what he is going to do — which is precisely the ' +
    // ⚠️ THE ROUTE SENTENCE AND ITS SAFETY SENTENCE MOVED TO THE END AS A PAIR, AND THEY
    // HAVE TO MOVE TOGETHER. The glyph used to sit a third of the way in, so the amber band
    // ran 1,416 characters: it opened on the contact caveat and then painted ~1,100
    // characters of coaching choice, shift lengths, "ask what the rules are", and the
    // under-tested-research hedge in the safety colour. Moving the glyph alone would have
    // stranded "That is the only thing the picture says about how he arrives" 1,100
    // characters from the route it refers to, and "he" with it — a dangling demonstrative
    // read aloud. So the pair moved as one. Nothing was cut and no hedge was touched; the
    // only wording change is "One of them" -> "One of the six", because after the move
    // "them" would have picked up "use them" (= small-area games) in the sentence now
    // immediately before it rather than the six skaters it means.
    'information a drill takes out in order to make a skill practisable. Most of the rink is ' +
    'empty here only because this is the only group drawn; in a real practice another group is ' +
    'usually working in the space. Every single thing about this arrangement is a coaching choice ' +
    'and not a law of hockey: the number of players, whether the game is played in a zone, in a ' +
    'corner, between the blue lines or across the ice, whether there is a goaltender at all, what ' +
    'each team is trying to score on — this picture uses the one net the rink already has, which is ' +
    'a limit of what can be drawn rather than a recommendation — and what constraint is added, such ' +
    'as one touch only, no passes above the dots, or three passes before you may score. Small ' +
    'numbers give more touches than large ones, and shifts of about thirty to forty-five seconds ' +
    'keep the quality up. Ask what the rules of the game are before it starts, because the ' +
    'constraint is the teaching. And be careful how you argue for these: that small-area games build ' +
    'decision-making is highly plausible, near-universally believed by coaches and consistent with ' +
    'the theory, but it is genuinely under-tested, so use them and do not go quoting research you ' +
    'do not have. One of the six is already ' +
    'closing on the puck carrier on the wall, and his route ends in two short bars rather than an ' +
    'arrowhead, meaning he arrives and contains rather than skating through. ⚠️ That is the only ' +
    'thing the picture says about how he arrives, and it is deliberate: how hard anyone may compete ' +
    'for a puck, and whether body checking is permitted at all, depends on your age group, your ' +
    'league and the book they play under, and no diagram can tell you that.',

  describe:
    'The full two-hundred-foot sheet again, with the whole picture in the right-hand end zone below ' +
    'the blue line and the rest of the ice empty. Three own skaters, three opposition skaters and ' +
    'one goaltender. ' +
    'One of yours has the puck on the right half-wall, level with the faceoff dot, with the puck ' +
    'drawn just below him; one is low in the slot on the far side of the middle; one is high, just ' +
    'inside the blue line. An opposition player is about nine feet above the top of the right ' +
    'faceoff circle, on the blue-line side of it, with a ' +
    'route running out toward the carrier on the wall: it stops about seven feet short of him and ' +
    'ends in two short bars rather than an arrowhead. A second opposition player stands in front of ' +
    'the net, about nine feet clear of the crease, and a third stands high near the blue line ' +
    'beside your own high player. The opposing goaltender is in the crease. That is the only route ' +
    'in the picture; nothing else is drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: SAG_G },
    // Circles on all six. A small-area game is played by whoever is on the ice, the
    // section assigns no positions to it at all, and the notation has no neutral glyph.
    // ⚠️ DELIBERATELY UNLABELLED. "on the puck" was tried and the placer, with the
    // carrier hard against the boards in the corner of the sheet, could only fit it
    // running out toward the wall where it read as crowding the corner. He is
    // identified by the puck drawn beside him, by `describe` and by the caption — and
    // the picture's claim is that all six are in the play, which naming one of them
    // works against.
    { id: 'F', pos: 'F', at: SAG_CARRIER },
    { id: 'F', pos: 'F', at: SAG_LOW },
    { id: 'F', pos: 'F', at: SAG_HIGH },
    { id: 'F', team: 'opp', pos: 'F', at: SAG_FORECHECK, label: 'closing' },
    { id: 'F', team: 'opp', pos: 'F', at: SAG_NET },
    { id: 'F', team: 'opp', pos: 'F', at: SAG_HIGH_D },
  ],

  routes: [
    // Bar-ended. See SAG_FORECHECK_TO for the arithmetic and the reason.
    { from: SAG_FORECHECK, to: SAG_FORECHECK_TO, kind: 'pressure' },
  ],

  puck: SAG_PUCK,
};

/* ------------------------------------------------------------------------- *
 * DELIBERATELY NOT DRAWN, and why. Most of this document is in this list, which is the
 * honest answer for a document about how people learn rather than about where they
 * stand.
 *
 * - EVERY OFF-ICE SECTION. Stickhandling on a kitchen floor, a shooting pad, a wall or
 *   a rebounder, a slide board, synthetic panels, roller skates, agility ladders,
 *   balance boards, wrist rollers. None of them happens on a sheet of ice, and the
 *   renderer draws a sheet of ice. The unlearning problem — head-down stickhandling
 *   above all — is the most important warning in those sections and is about where a
 *   head is pointing, which this notation cannot draw at all.
 *
 * - THE WHOLE EVIDENCE SPINE. The 10,000-hour figure and its failed replication, the
 *   variance meta-analyses, contextual interference, learning styles, the testing
 *   effect and its precondition, the external-focus dispute. A rink diagram can say
 *   nothing about an effect size, and the one figure in this document that is already
 *   drawn as a table — the restudy-versus-test retention table — is a table because
 *   that is what it is.
 *
 * - THE PRIORITY ORDER (skating, puck handling, passing and receiving, shooting). It is
 *   an ordering, not a place, and the document goes out of its way to say it is a
 *   coaching choice with named alternatives. A picture would give it a shape it does
 *   not have.
 *
 * - THE PLATEAU AND THE TECHNIQUE DIP. Genuinely a picture — a curve — and genuinely
 *   not a rink. The document's own point about it is that the smooth textbook curve is
 *   partly an averaging artefact and that nobody's real learning curve looks like the
 *   diagram, so drawing one would assert the thing the section retracts.
 *
 * - THE GOALTENDER SAFETY OVERRIDE. See the header: the load-bearing content is a
 *   four-book rule scope, which is text, and the picture that would carry it is a
 *   picture of somebody firing a puck at a goaltender's head from ten feet.
 *
 * - THE WEEKLY PLANS, THE PROCESS MEASURES, THE ADULT-BEGINNER SECTION AND THE INJURY
 *   SECTION. None of them is spatial. The one exception inside them is the falling
 *   technique, which is body mechanics — hip and thigh, hands in, chin in or head up
 *   depending on direction — and this notation has no body, so `skating.md` correctly
 *   owns zero diagrams for the same reason and should go on owning zero.
 *
 * - THE READ-AND-REACT REHEARSAL (pause a clip at the moment a player receives the
 *   puck). The drawable half of it — the instant before a reception, with everything
 *   already on the page that the decision needs — is already drawn, as
 *   `scan-before-a-wall-reception` in scanning_and_anticipation.mjs, and this document
 *   points the reader at that document. Redrawing it here would restate an existing
 *   picture and add a second place a correction has to reach.
 * ------------------------------------------------------------------------- */

export default [executionDrill, decisionDrill, theLine, smallAreaGame];
