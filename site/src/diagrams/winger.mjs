/**
 * Diagrams for content/positions/winger.md.
 *
 * ⚠️ THIS DOCUMENT ALREADY OWNS FOUR DIAGRAMS THAT DO NOT LIVE HERE.
 * `winger-dz-rim`, `winger-dz-reverse`, `winger-high-then-down-the-wall` and
 * `winger-offensive-zone-patches` are all `owner: content/positions/winger.md` and all
 * sit in `positions.mjs`, beside the other three position documents' specs. Do not move
 * them and do not add a second copy of any of them —
 * `grep -rn "positions/winger.md'" site/src/diagrams/*.mjs` returns both files,
 * deliberately. The brief that commissioned this file said the document had THREE; it has
 * four, and `grep -c '!\[\](diagram:' content/positions/winger.md` is the check.
 *
 * WHY FOUR NEW DIAGRAMS AND NOT FIFTEEN.
 * The document has 20 `###`/`####` teaching subsections under nine `##` sections, and
 * before this file it had four diagrams. (`grep -c '^### \|^#### '` = 20, `grep -c '^## '`
 * = 9, `grep -c '!\[\](diagram:'` = 4. The brief said 18 subsections and 3 diagrams.) Most of
 * what is undrawn in it is undrawn because a SIBLING DOCUMENT ALREADY DRAWS IT, and this
 * corpus's rule is that borrowing beats duplicating: the renderer announces the owner
 * aloud ("Diagram, from Defending the Rush.") so nobody hears one document's caption under
 * another's name. The register of what was rejected and what it is drawn under is in the
 * report that accompanied this file; the short form, because a future editor will
 * otherwise re-derive it:
 *
 *   Backchecking            -> `rush-backcheck-lanes` draws the outside-lane assignment AND
 *                              the two named alternatives; `rush-trailer` draws the F3 to
 *                              pick up. Both defending_the_rush.md. ⚠️ The brief called this
 *                              "the biggest undrawn section, ~7,579 words". It is 427 words
 *                              — the second-shortest teaching section in the file. 7,579 is
 *                              Backchecking through END OF DOCUMENT, i.e. a section splitter
 *                              that did not treat `##` as a boundary. The largest genuinely
 *                              undrawn section is `#### Net-front and the crease` at 2,281.
 *   Net-front and the crease-> rejected on SCALE, not on interest. Its working rule is
 *                              "just outside the blue paint, not on its red edge"; the
 *                              crease is 8 ft wide and a forward's glyph is 6.55 ft of ink
 *                              across, so the distinction the section turns on is smaller
 *                              than the mark that would have to carry it. The honest version
 *                              is already drawn twice — `oz-net-front-screen` and
 *                              `screen-the-goalie-sightline` — and the rest of the section
 *                              is a four-book rules comparison a caption must not carry.
 *   Icing                   -> `icing-the-race-and-the-dot`, `icing-gaining-the-line`.
 *   Faceoffs                -> `faceoff-dzone-alignment`, `faceoff-ozone-alignment` put the
 *                              wingers on the inside and outside hash marks already. The
 *                              encroachment cost is a rule, and the stick blade — which is
 *                              half of it in two books — has no glyph in this notation.
 *   Power play / kill       -> `pp-131` draws the half-wall's four options by name;
 *                              `pk-box`, `pk-diamond`, `pk-wedge-plus-1` draw the shapes.
 *                              Two things in those sections ARE undrawn and are
 *                              content/systems/special_teams.md's rather than this
 *                              document's — the walk-down from the half-wall (that file has
 *                              a whole subsection on it) and the +1's three published
 *                              routes. Reported, not drawn here.
 *   OZ forechecking (F2/F3) -> `forecheck-212`, `forecheck-212-stacked`, including the
 *                              weak-side/stacked F3 split.
 *   NZ containment vs press -> `nz-1-2-2-containment`, `nz-pressure`, `nz-1-3-1`.
 *   NZ dump-ins             -> all five kinds: `dump-hard-rim`, `dump-soft-area`,
 *                              `dump-chip-past`, `dump-cross-corner`, `dump-flip-over-trap`.
 *   "Your lane"             -> `neutral-zone-lanes` and `width-makes-the-middle-lane`.
 *   Line changes            -> not spatial. It is about who calls it and when.
 *   Contact before the drop -> not spatial at any drawable scale. Two heads "almost ear to
 *                              ear" is inches; a glyph has no head.
 *
 * ⚠️ NO DIAGRAM IN THIS FILE SHADES A ZONE, on purpose. `check_zones.py` compares shaded
 * polygons across diagrams and cannot see a region drawn consistently wrong everywhere, so
 * every new polygon is a new row in a cross-comparison for whatever teaching it buys. None
 * of these four needs one: three of them are about where a player is standing and the
 * fourth is about where a player is NOT.
 *
 * ORIENTATION. Three of the four are `half: true` with the relevant net at the RIGHT, which
 * is the convention every other winger.md and positions.mjs diagram uses, so a reader
 * moving through the document never re-orients. The exception is `winger-wall-depth-by-
 * system`, which is full-sheet because one of the three positions it draws is OUT OF THE
 * DEFENDING HALF ENTIRELY — a half-sheet picture of a stretch winger is a picture with the
 * stretch winger missing. `breakout-stretch-pass` is full-sheet for exactly that reason and
 * says so.
 *
 * ⚠️ LABEL WIDTH IS A HARD CONSTRAINT HERE AND IT DECIDED SEVERAL PLACEMENTS.
 * `placeLabels` centres a label on its player's x with `text-anchor="middle"` and avoids
 * players, routes and zones but NOT RINK MARKINGS, so a label wider than twice its
 * player's distance from a painted line is drawn through that line. On its own metric
 * (`CH = size × 0.56`) a half-sheet label is 1.568 ft a character and a FULL-SHEET one is
 * 2.666, because `TXT` is 1.7 on a full sheet. That is why:
 *   - the defenceman standing up on the blue line in `winger-arriving-at-the-line` carries
 *     NO label. At x = 26 anything longer than three characters strikes the line.
 *   - the winger in the same diagram is labelled `wide` and not `you, wide`: four
 *     characters span 6.27 ft and clear the line's outer edge at 24.5; nine span 14.1 and
 *     do not.
 *   - the stretch winger in `winger-wall-depth-by-system` sits at x = 14 rather than 16.
 *     `stretch` is 18.7 ft wide on a full sheet, so at x = 16 it reached 25.3 and struck
 *     the far blue line at 24.5–25.5. Two feet of ice bought the label.
 *   - the retrieving defenceman in that diagram is UNLABELLED. At x = −92 any label long
 *     enough to be useful runs off the end boards at −100.
 * Do not lengthen a label in this file without re-doing that arithmetic.
 *
 * ⚠️ EVERY CLEARANCE BELOW IS MEASURED ON INK, NOT ON A ROUTE SPINE OR AN ENDPOINT.
 * The figures assumed throughout, all read off the glyph and route branches in
 * site/scripts/lib/rink.mjs rather than remembered: a forward's circle is r 2.9 with a 0.75
 * outline, so 3.275 ft of VISIBLE ink (the 3.875 in `GLYPH_INK` includes the white halo,
 * which is invisible against white ice but does overlap paint); a defenceman's triangle has
 * circumradius 3.6 plus 0.4 of round-joined stroke, so 4.0; a puck is r 1.1; a route stroke
 * is 0.7, so ±0.35; a `carry` wave has amplitude 1.05, so its ink reaches ±1.4 from the
 * spine; and a curved route's arrowhead is a SEPARATE hand-drawn filled triangle 3.15 ft
 * long and 3.0 ft barb to barb, which is not part of the stroke. The `<marker>` in `<defs>`
 * is a different and wrong answer for curved routes — it is declared and unused there.
 *
 * ⚠️ AND THE BOARDS ARE NOT A RECTANGLE. The corner arc has radius 28 centred on
 * (±72, ±14.5), so a glyph in a corner has to be checked against the ARC and not against
 * x = 100 / y = 42.5. `winger-leaves-the-point`'s opposition forward was first placed at
 * (86, 36), which is 25.66 ft from the arc centre — 2.34 ft of room for 3.275 ft of ink, so
 * the glyph would have been drawn through the dasher. He is at (88, 31) now, 22.98 from the
 * centre, 5.02 ft of room. Re-derive rather than trusting this sentence.
 *
 * WHAT NO CAPTION HERE STATES. None of these four carries a rule number, a penalty tier or
 * a book comparison that its owning SECTION does not state, and the one caption that
 * carries rule numbers at all — `winger-arriving-at-the-line`, on the trail skate — takes
 * both of them (USA Hockey 630(a), Hockey Canada 6.11) from the ```facts block and body of
 * the section it sits in. That constraint exists because no `content/` sweep can see a
 * caption: `check_facts.py` and `check_rule_scope.py` read `content/` only, and
 * `check_absolutes.py` reads captions but tests for unscoped penalty-tier denials. A rule
 * corrected in the corpus would reach every markdown site and stop dead at a caption.
 */

const OWNER = 'content/positions/winger.md';

/* ==================================================================== *
 * 1 · Where a winger stands on the wall — and why it depends
 *     owner: winger.md — "Defensive Zone: Carrying the Puck — Free Space",
 *            and the same hedge again under "Without the Puck — Ready to
 *            Break Out"
 *
 * WHY THIS ONE EXISTS. The wall-position hedge is stated THREE TIMES in
 * winger.md — in the Free Space blockquote, in the Ready to Break Out
 * "Where to be", and in a Convention line in each of those two ```facts
 * blocks — and it is the document's most repeated instance of the corpus's
 * cardinal rule. Two of its three positions are drawn already, in
 * breakouts.mjs: `breakout-winger-wall` is the conventional swing spot and
 * `breakout-stretch-pass` has the winger who left. NOTHING DRAWS THE
 * FLAT/SPREAD DEPTH, and nothing anywhere draws the three together, which
 * is the only form in which the hedge is a picture rather than a caveat.
 *
 * ⚠️ THREE OWN-TEAM FORWARDS ON ONE WALL IS A PICTURE OF A FORMATION UNLESS
 * IT IS STOPPED FROM BEING ONE, and a picture is absorbed before its
 * caption. Three things stop it: the labels are the three STRUCTURE NAMES
 * rather than player roles, the caption's second sentence says only one of
 * them is on the ice at a time, and the `describe` — which is what a
 * listener gets — says it too. If you shorten either of those, this diagram
 * starts teaching a five-forward breakout.
 *
 * NO ROUTES, on purpose. A route from any one of the three to anywhere
 * would nominate that one as the real answer, which is the opposite of the
 * teaching. It also keeps `check-arrivals.mjs` out of it entirely: with no
 * `skate`, `carry` or `backxover` route there is nothing for the arrival
 * invariant to measure.
 *
 * GEOMETRY, all against site/src/data/rink.json: goal_line_x 89,
 * blue_line_x 25, half-wall (69, 38.5), faceoff-dot (69, 22),
 * neutral-dot (20, 22). The `::far` end mirrors x, so the defending end is
 * at negative x and the attacking end at positive.
 *
 *   SWING     (−72, 38.5)  17 ft out from the goal line at −89, i.e. below
 *                          the dot line at −69 and inside the near hash
 *                          marks, which sit at x −71.8 to −66.2. That is
 *                          the section's "between the hash marks and the
 *                          goal line ... roughly level with the faceoff dot
 *                          or just below it". x = −72 and not −73 because
 *                          −72 is the tangent point where the straight side
 *                          boards give way to the corner arc: at −73 the
 *                          glyph has 3.98 ft of room for 3.275 of ink and
 *                          0.1 ft for the halo, and at −72 it has 4.0 ft of
 *                          room measured off the straight dasher, clearing
 *                          by 0.725. One foot of x for six-tenths of ink.
 *   FLAT      (−44, 38.5)  19 ft inside your own blue line, 28 ft up the
 *                          wall from the swing spot. The section says
 *                          "higher toward the blue line" and gives no
 *                          number, so this is a schematic depth and the
 *                          caption calls it that rather than quoting it.
 *   STRETCH   ( 14, 30)    past the centre red line, 11 ft short of the FAR
 *                          blue line, off the boards. "Sends one winger up
 *                          ice entirely" is the section's wording. It is
 *                          off the boards because a stretch winger waiting
 *                          for a lead pass is not a wall outlet, and being
 *                          drawn on the wall like the other two would have
 *                          read as a third depth of the same job.
 * ==================================================================== */

const WALL_SWING = { at: 'half-wall:right:far', dx: -3 };          // (-72, 38.5)
const WALL_FLAT = { at: 'half-wall:right:far', dx: 25 };           // (-44, 38.5)
const WALL_STRETCH = { at: 'neutral-dot:right', dx: -6, dy: 8 };   // (14, 30)

const wallDepthBySystem = {
  id: 'winger-wall-depth-by-system',
  owner: OWNER,
  half: false,
  width: 900,

  caption:
    'Where a winger stands on the wall in his own end, and why there is no single answer. ' +
    'The whole sheet is drawn, your own goal at the left and the way you are attacking to ' +
    'the right, at the moment your defenceman has the puck behind his net. ' +
    'Three wingers are drawn on the same boards and only one of them is on the ice at a ' +
    'time: they are the same player under three different breakout structures. ' +
    'In the conventional swing breakout — the structure this document assumes throughout — ' +
    'you come down to the boards between the hash marks and the goal line, roughly level ' +
    'with the faceoff dot or just below it, which is the deepest of the three. Under a flat ' +
    'or spread structure you hold higher up the same wall, toward your own blue line. Under ' +
    'a stretch or flying-winger structure one winger leaves the zone altogether and waits ' +
    'up ice, drawn here out past the centre red line and short of the far blue line. ' +
    'None of the three is more correct than the others, and the failure mode of standing at ' +
    'the hash marks in a stretch system is exactly as bad as the reverse — so find out ' +
    'which one you are in. Breakouts is the authority on all three and on this landmark. ' +
    'Two things the picture cannot show. The first is timing: you come down as the puck ' +
    'becomes yours and not before, and staying high while the other team has it is what ' +
    'makes the trip short and makes you the first outlet available. The second is where you ' +
    'were standing a second earlier — high on your side, level with the opposing point man — ' +
    'because that belongs to your team’s defensive-zone system rather than to its breakout, ' +
    'and it is a separate coaching choice. This document assumes a low zone collapse there.',

  describe:
    'The full two-hundred-foot sheet, your own goal at the left and the attacking end at ' +
    'the right. Your goaltender is in his crease and one of your defencemen is behind the ' +
    'net with the puck. Three of your own forwards are drawn, all on the same right-hand ' +
    'side of the ice, and they are three alternative positions for one player rather than ' +
    'three players: the first is deep in your own end on the boards just below the faceoff ' +
    'dot, between the hash marks and the goal line; the second is on the same boards about ' +
    'twenty feet inside your own blue line; the third is out in the neutral zone past the ' +
    'centre red line, short of the far blue line and well off the boards. No opposition ' +
    'players are drawn, and no routes.',

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease::far', dx: 1 } },                  // (-85, 0)
    // Unlabelled: see the label-width note in the file header. At x = -92 there is no
    // useful label that does not run off the end boards at -100.
    { id: 'D1', pos: 'D', at: { at: 'goal-line::far', dx: -3, dy: 7 } },      // (-92, 7)
    { id: 'W', pos: 'F', at: WALL_SWING, label: 'swing' },
    { id: 'W', pos: 'F', at: WALL_FLAT, label: 'flat/spread' },
    { id: 'W', pos: 'F', at: WALL_STRETCH, label: 'stretch' },
  ],

  // 7.21 ft from the defenceman's centroid, which leaves 2.11 ft of ice on the
  // conservative measure (his full 3.6 circumradius plus 0.4 of stroke, against the puck's
  // 1.1). It was at (-89, 12) and 5.83 ft, which is 0.73 on that measure — arithmetically
  // survivable on the true triangle edge and not worth defending, since the correction
  // costs nothing. `winger-dz-rim` records what 0.125 ft of white looks like on a phone.
  puck: { at: 'goal-line::far', dx: 1, dy: 13 },                              // (-88, 13)
};

/* ==================================================================== *
 * 2 · What leaving the point costs
 *     owner: winger.md — "Defensive Zone: Pressuring an Opponent with the
 *            Puck" (its Risk line), and Common Mistakes, first bullet
 *
 * WHY A FAILURE PICTURE. defensive_zone_coverage.mjs draws the CORRECT
 * state three times over — `dz-collapse-corner` has both wingers still high
 * on the points, `dz-collapse-high-slot` has the weak-side one dropping in,
 * `centre-low-zone-collapse` shows the same rotation from the centre's side
 * — and `winger-high-then-down-the-wall`, in this document, draws the
 * winger where he is supposed to be. NOTHING DRAWS THE COST. winger.md
 * states it twice, as a Risk line in the block and as the document's first
 * Common Mistake, and it is the one thing in that section a reader will
 * actually get wrong. Failure diagrams are an established shape here:
 * `lane-jump-guess`, `unmarked-but-unavailable`, `faceoff-dzone-clean-loss`,
 * `goalie-depth-failure-modes`.
 *
 * ⚠️ A FAILURE PICTURE IS ONLY HONEST IF IT SAYS WHOSE FAILURE IT IS. Going
 * into that corner is CORRECT under man-on-man and correct below the hash
 * marks under a hybrid. The caption carries all three systems in the
 * document's own words; do not trim it to "do not go to the corner",
 * which is the cardinal-rule violation this corpus fails at most often.
 *
 * GEOMETRY. Half sheet, own net at the right.
 *   RW      (80, 34)  in the corner. 21.08 ft from the arc centre (72, 14.5),
 *                     so 6.9 ft of room for 3.275 of ink.
 *   opp F   (88, 31)  22.98 from the arc centre, 5.02 ft of room. 8.54 ft
 *                     from the winger, so 2.0 ft of white ice between two
 *                     circles carrying 3.275 each — the separation
 *                     `winger-dz-rim` uses for two players the prose has
 *                     leaning on one another.
 *   own D   (85, 7)   the triangle spans y 5.2 to 10.6, so it clears the
 *                     crease edge at |y| = 4 by 1.2 ft. rink.json's
 *                     `goalmouth` $comment is explicit that an unoffset
 *                     skater on that datum is a drawing of a player in the
 *                     paint; this one carries dy 7.
 *   opp D   (28, 21)  three feet inside the blue line, at his point.
 *
 * ROUTES, both measured on the drawn curve.
 *   The pass (88, 31) -> (35, 29), bow 12, control (61.95, 18.01). It bows
 *   AWAY from the winger in the corner, and 2.38 ft of ice is what that buys
 *   between the pass ink and his circle, at k = 0.11. At bow 0 the straight
 *   line runs through him. It also stays 2.16 ft off the puck.
 *   The walk-down (28, 21) -> (52, 17), bow -4, control (39.34, 15.05). Bowed
 *   toward the middle rather than the boards for two reasons: it is what
 *   walking in means, and it puts 7.4 ft between its arrowhead and the pass,
 *   which bowed the other way crossed it at about 1.8 ft of clear ink.
 *   ⚠️ ARRIVAL. The walk-down is a `carry`, so `check-arrivals.mjs` measures
 *   it. Terminal tangent is `to − control` = (12.66, 1.95), not the chord;
 *   the two players of yours in the picture lie 14.9 ft and 12.5 ft off that
 *   ray, both well outside `ARRIVAL.glyph` (2.9), and the tip is 32 ft and
 *   34 ft from them, well outside `ARRIVAL.noArrow` (9.0). Neither fires.
 * ==================================================================== */

const LEFT_POINT_D = { at: 'point:right', dx: 3, dy: 1 };          // (28, 21)
const LEFT_CORNER_F = { at: 'corner:right', dx: 6, dy: -3 };       // (88, 31)

const leavesThePoint = {
  id: 'winger-leaves-the-point',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'What it costs a winger to leave the point, drawn in your own end with your net at the ' +
    'right. You have gone down into the corner to help with the battle; the puck has come ' +
    'out of it to the opposing defenceman you were covering, and he is walking in off the ' +
    'point with nobody near him. ' +
    'Two things have gone at once, which is why the discipline of staying high pays twice. ' +
    'He now has the time and space to shoot or to walk into the middle, which is the thing ' +
    'covering the point exists to deny; and there is nobody on the boards between the hash ' +
    'marks and the goal line, so if your team does win it back there is no outlet on that ' +
    'side and the exit starts late. ' +
    '⚠️ This is a mistake only under the system the picture assumes. Staying high out of the ' +
    'corner is the low zone collapse job — the most common defensive-zone structure and a ' +
    'coaching choice rather than a rule of hockey. Under man-on-man you follow your check ' +
    'wherever he goes, corner included, and going down there is the job rather than the ' +
    'error; under a hybrid you take him down only below the hash marks. Find out which one ' +
    'your team plays before your first shift, because on the coaching account a ' +
    'defensive-zone breakdown is two players working from different assumptions more often ' +
    'than it is an effort problem — coaching emphasis rather than a counted ranking. ' +
    'Two real exceptions under collapse are not drawn here either: follow your man a few ' +
    'feet if he walks down off the point, staying connected and calling the switch, and ' +
    'engage the puck if a corner battle squirts it up the wall to you, because that one is ' +
    'your breakout rather than a corner battle. The version of this picture with the winger ' +
    'in the right place is the diagram in this document under Ready to Break Out.',

  describe:
    'The defending half of the rink, your own net at the right. Your goaltender is in the ' +
    'crease and one of your defencemen is just in front of it, off the blue paint. Your ' +
    'right winger is down in the right-hand corner with an opposition forward. An ' +
    'opposition defenceman is up at his point, a few feet inside the blue line on that ' +
    'side, with the puck beside him. Two routes are drawn: a dashed pass running from the ' +
    'corner up the length of the zone to him, bowed away from the corner battle, and his ' +
    'own skating route curving down off the point toward the middle of the ice and the top ' +
    'of the faceoff circle. The only players of yours in the picture are the one in the ' +
    'corner and the one at the net front. Nobody is near the opposing defenceman, and ' +
    'nobody is on the boards between the hash marks and the goal line.',

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },                      // (85, 0)
    { id: 'D', pos: 'D', at: { at: 'goalmouth', dy: 7 } },                    // (85, 7)
    { id: 'RW', pos: 'F', at: { at: 'corner:right', dx: -2 }, label: 'gone deep' },
    // Deliberately unlabelled: two labels eight feet apart in a corner leave the placer no
    // legal slot, and the notation already says what he is — a solid circle is an
    // opposition forward.
    { id: 'F', team: 'opp', pos: 'F', at: LEFT_CORNER_F },                    // (88, 31)
    // ⚠️ ALSO UNLABELLED, and for the measured reason in the file header rather than for
    // want of anything to say. He is at x = 28 and the blue line's stroke reaches 25.5, so
    // a label centred on him may be at most three characters wide before it is drawn
    // through the line. "nobody on him" is thirteen and spans 17.8 to 38.2. The caption
    // carries what he is doing, which is the layer that can.
    { id: 'D', team: 'opp', pos: 'D', at: LEFT_POINT_D },
  ],

  routes: [
    { from: LEFT_CORNER_F, to: { at: 'point:right', dx: 10, dy: 9 }, kind: 'pass', bow: 12 },
    { from: LEFT_POINT_D, to: { at: 'top-of-circle:right', dx: -2, dy: -5 }, kind: 'carry', bow: -4 },
  ],

  // Above him and on the boards side, 7.21 ft from the centroid — 2.11 ft of ice on the
  // conservative circumradius measure. ⚠️ IT WAS AT (30, 25) AND 4.47 ft, WHICH IS NEGATIVE
  // ON THAT MEASURE and only 0.22 ft on the true triangle edge, i.e. the two marks touching.
  // That error came of reading `point:right` as y 21 rather than 20 while adding dy 5 by
  // hand; the anchor is (25, 20). Below him the puck instead sat 0.3 ft off the walk-down's
  // wave ink, which is why it is above him and not beside him.
  puck: { at: 'point:right', dx: 7, dy: 7 },                                  // (32, 27)
};

/* ==================================================================== *
 * 3 · Arriving at the attacking blue line
 *     owner: winger.md — "Neutral Zone: Without the Puck — Filling Your
 *            Lane on the Rush"
 *
 * ⚠️ THE THING THIS SECTION IS ABOUT CANNOT BE DRAWN, AND THE CAPTION SAYS
 * SO IN TERMS. The trail-skate drag is the winger-specific technique in
 * this corpus, and a skate is smaller than the 0.7 ft stroke of any mark on
 * the page — a forward's glyph is 5.8 ft across, which is most of a player.
 * A caption claiming to show a trailing skate would be the outclaim defect
 * this project has already paid for once (a caption claiming a defenceman
 * was goal-side "at every point" of a route he was not).
 *
 * SO WHAT IS DRAWN IS THE PART THAT IS SPATIAL AND THAT THE SECTION SPENDS
 * ITS ⚠️ ON: the ice your body, hands and stick reach before your skate
 * does is the ice a defenceman standing up at his own line is defending.
 * That is a position, and positions are the one thing a rink draws. The
 * rule text sits in the caption, taken from the section's own ```facts
 * block and body, because a listener hears the caption and not the picture.
 *
 * ⚠️ NOT A DUPLICATE OF `nz-stand-up-at-the-line`. That one is owned by
 * neutral_zone_systems.md and is drawn for the DEFENDING team — it is about
 * whether your team stands up or backs off, with the defended net at the
 * left. This is the same instant from the attacking winger's side, and the
 * teaching is the head rather than the system. If the two ever converge,
 * this is the one to delete.
 *
 * GEOMETRY. Half sheet, attacking net at the right, attacking blue line at
 * x = 25. Only 25 ft of the 50 ft neutral zone is visible on a half sheet
 * (the viewBox runs x −2 to 102), which is enough for an arrival and not
 * enough for a regroup; a regroup here would have to be full-sheet.
 *   opp D   (26, 22)  his triangle spans x 22.88 to 29.12, so it straddles
 *                     the blue line's 1 ft stroke. That is the picture.
 *                     UNLABELLED — see the label-width note above.
 *   opp D2  (27, -12) the partner, far side.
 *   winger  (19, 33)  6 ft outside the line and wide, 13.04 ft from the
 *                     defenceman, so 5.8 ft of ice between the two glyphs.
 *   carrier (12, 20)  inside him and behind.
 * ROUTES.
 *   The winger's `skate` (19, 33) -> (37, 34), bow 0. ⚠️ ARRIVAL: the tip is
 *   16.3 ft from the defenceman, well outside `ARRIVAL.noArrow`, and the
 *   defenceman sits BEHIND the tip — the dot of (26−37, 22−34) with the
 *   terminal tangent (9, 0.5) is negative, so he is not in the forward
 *   half-plane and form (a) does not reach him either.
 *   The pass (12, 20) -> (35, 29), bow 7, control (20.14, 31.20). This one is
 *   squeezed between two things and the bow is the whole of the trade: too
 *   little and it runs through the defenceman standing up at the line, too
 *   much and it runs through the winger it is leading. Swept over endpoints
 *   y 27 to 30 and bows 4 to 14: bow 7 is the balance point at 2.32 ft of
 *   clear ink from the defenceman and 2.45 ft from the winger. Bow 8, which
 *   was drawn first, is 2.80 and 1.95 — a better figure for the player who
 *   is not the subject of the picture and a worse worst case.
 *   The pass ends at y = 29 rather than 31 so its arrowhead sits about 3 ft
 *   clear of the winger's own route rather than about 1.
 * ==================================================================== */

const LINE_WINGER = { at: 'blue-line', dx: -6, dy: 33 };           // (19, 33)
const LINE_CARRIER = { at: 'neutral-dot:right', dx: -8, dy: -2 };  // (12, 20)

const arrivingAtTheLine = {
  id: 'winger-arriving-at-the-line',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'Arriving at the attacking blue line as a winger, with the zone you are entering at the ' +
    'right. You are the forward who attacks that line widest and fastest, and the picture is ' +
    'drawn for one thing: where the defenceman meeting you is standing. He is stood up on ' +
    'his own line, and the ice he is defending is the ice your body, your hands and your ' +
    'stick reach before your trailing skate does. ' +
    'So a head up is the condition of the technique rather than an extra — you cannot brace ' +
    'for a hit you cannot see, and a body that is surprised does not absorb contact. ' +
    // ⚠️ This carried only the DUCKING half of a pair its owner states as inseparable
    // (body_contact_and_battles.md:21, "Those are two prohibitions against two different
    // injuries"). Voiced alone, a listener was told not to duck, not told not to turn his
    // back — which is the reflex the owner says players actually have — and given no action
    // to take instead. Now matches the pairing the two sibling captions in this file use.
    'And never turn your back to the wall and never duck. Those are two different injuries — ' +
    'a hit from behind you cannot brace for, and a chin tucked to the chest, which does not ' +
    'need speed to do it. Skates parallel to the boards, forearm and hip into the contact, ' +
    'head up and chin off your chest. Body Contact and Battles ' +
    'owns that instruction and writes it without exceptions. ' +
    '⚠️ The trail skate itself is not drawn, and cannot be at this scale — it is smaller than ' +
    'any mark on this page. What it does is still worth knowing. You are offside only when ' +
    'both skates have completely crossed the line before the puck has, so a trailing skate ' +
    'on the line keeps you onside; drag it and keep the blade in contact with the ice or the ' +
    'paint, because a dragged, touching skate is onside under all four rule sets, while a ' +
    'lifted one is onside under the NHL and the IIHF but offside under USA Hockey Rule ' +
    '630(a) and Hockey Canada Rule 6.11. Find out which book your league runs. ' +
    'And do not coast at the line to be safe: arriving late and slow is the single most ' +
    'common way a winger reaches an offensive-zone battle with nothing left, and it costs ' +
    'your line more than a whistle would.',

  describe:
    'The attacking half of the rink, the attacking net at the right and the attacking blue ' +
    'line running across the picture near the left-hand edge. Two opposition defencemen ' +
    'stand at that line, one on the right-hand side squarely on it and one on the far side ' +
    'of the ice from him, with their goaltender in his crease. Two of your own forwards are ' +
    'in the neutral zone on the near side of the line: the carrier towards the middle with ' +
    'the puck beside him, and the right winger out wide toward the boards. Two routes: the ' +
    'winger’s skating route taking him across the line and on into the zone, still wide, ' +
    'and a dashed pass from the carrier that curves over and lands just inside the line ' +
    'ahead of him. No stick, no skate and no contact is drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },         // (85, 0)
    // No label. At x = 26 a label of more than three characters is drawn through the blue
    // line, and "stands up at the line" is twenty-one. The caption carries it instead.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 1, dy: 22 } },   // (26, 22)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 2, dy: -12 } },  // (27, -12)
    { id: 'W', pos: 'F', at: LINE_WINGER, label: 'wide' },
    { id: 'F', pos: 'F', at: LINE_CARRIER, label: 'the carrier' },
  ],

  routes: [
    { from: LINE_WINGER, to: { at: 'blue-line', dx: 12, dy: 34 }, kind: 'skate' },
    { from: LINE_CARRIER, to: { at: 'blue-line', dx: 10, dy: 29 }, kind: 'pass', bow: 7 },
  ],

  // 5.50 ft from the carrier's centre, on the opposite side from the pass's first stride,
  // leaving about 1.1 ft of white between the puck's ink and his circle's.
  puck: { at: 'neutral-dot:right', dx: -13, dy: -4.3 },                       // (7, 17.7)
};

/* ==================================================================== *
 * 4 · The corner, and the point that may not be there
 *     owner: winger.md — "Offensive Zone: Carrying the Puck — Under
 *            Pressure"
 *
 * WHY THIS ONE AND NOT A CORNER-BATTLE PICTURE. The technique half of that
 * section — backside in, feet wide, feet moving, skates parallel to the
 * boards — is body position, and `net-front-walk-out-direction` in
 * body_contact_and_battles.mjs states in its own caption that this is
 * something no diagram can draw. It is right. What IS spatial in the
 * section is its Read line: "Look up before passing to the point — the
 * strong-side defender may have stepped down to support the cycle." That is
 * a picture, and getting it wrong is a turnover at the offensive blue line
 * with your whole line below the puck.
 *
 * ⚠️ THE STEP-DOWN IS A CHOICE AND THE CAPTION MUST SAY SO. defender.md owns
 * the three offensive-zone depths (`defender-three-depths`) and is explicit
 * that the top of the circle is the ACTIVATED position, taken only when
 * there is no immediate threat of a turnover — not where a defenceman
 * normally is. A caption drawing him there and not saying he may equally be
 * holding the line would be teaching a formation off one instant. The far
 * point is drawn still manned for the same reason.
 *
 * THE SAFETY LINE IS WORD-FOR-WORD THE ONE IN `winger-dz-rim` AND
 * `winger-dz-reverse`, from "never turn your back" onward. That is
 * deliberate: three captions in one document stating the same override in
 * three different forms is how a reader learns to hear it as decoration. If
 * you change it here, change it there, and check the ```facts blocks and
 * the body, which are where it actually lives.
 *
 * GEOMETRY. Half sheet, the OPPOSITION net at the right.
 *   RW      (81, 33)  in the corner with the puck. 20.57 ft from the arc
 *                     centre (72, 14.5), 7.4 ft of room.
 *   opp D   (85, 25)  inside him and goal-side, which is where a defenceman
 *                     defending his own corner stands. 8.94 ft from the
 *                     winger: a circle's 3.275 against a triangle's 4.0
 *                     leaves 1.67 ft of ice, the separation `winger-dz-rim`
 *                     settled on. At the first placement, (84, 27), the two
 *                     glyphs overlapped.
 *   own D   (56, 20)  the top of the right faceoff circle — defender.md's
 *                     activated depth, 35 ft out from the goal line.
 *   own C   (72, 6)   in the slot, 16.3 ft from the right circle's centre
 *                     so just OUTSIDE the painted arc at 15. He is not in
 *                     the high slot's own patch by accident: winger.md
 *                     leaves that layer to the centre and this is his.
 *   own D2  (25, -18) the far point, still manned.
 * ROUTES. Two dashed passes fanning from the winger, about 46 degrees apart,
 * and deliberately UNNUMBERED: this is a menu and not a sequence, the same
 * decision `oz-half-wall-options` records. ⚠️ BOTH WERE FIRST DRAWN ENDING ON
 * THEIR RECEIVER'S ANCHOR, which buries the arrowhead inside the glyph: to
 * the top of the circle it was -0.11 ft of ice and to the centre 0.50. They
 * now stop at (61, 24) and (74, 12), 2.05 and 2.70 ft clear, which is the
 * `winger-dz-rim` treatment — a rim that ends six feet short of the man it
 * is going to. The second passes 1.97 ft from the defenceman on you, which
 * is what a pass made around a man looks like and is deliberate. Neither is a `skate`, `carry` or
 * `backxover`, so `check-arrivals.mjs` does not reach them — which is
 * correct, because an arrow on a puck route arriving at a receiver is what
 * a pass is.
 * NO ROUTE IS DRAWN TO THE EMPTY POINT. An arrow into empty ice reads as an
 * instruction, and the instruction here is the opposite one.
 * ==================================================================== */

const CORNER_RW = { at: 'corner:right', dx: -1, dy: -1 };          // (81, 33)

const cornerAndTheEmptyPoint = {
  id: 'winger-corner-and-the-empty-point',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'A winger with the puck in the offensive corner, drawn for the look that is easiest to ' +
    'skip. The opposition net is at the right and their defenceman is on you from the ' +
    'inside, so your body is the wall between him and the puck and the puck is drawn on the ' +
    'far side of you from the pressure. Two outlets are drawn, and they are the two the ' +
    'section names: your own defenceman, and your centre. ' +
    'What the picture is actually about is where that defenceman is. He has stepped down ' +
    'off the blue line to the top of the faceoff circle to support the cycle, which is a ' +
    'normal and legitimate thing for him to do — so the point behind him, which is exactly ' +
    'where a blind pass up the wall goes, is empty. Look up before you throw it there. He ' +
    'may equally be holding the line, and this picture shows one of the two rather than the ' +
    'way it always is; the far-side point here is still manned. ' +
    'Protecting the puck and waiting for support beats a rushed pass that turns it over, ' +
    'and forcing it out of the corner through heavy traffic is the thing not to do. ' +
    '⚠️ Never turn your back to the wall and never duck. Those are two different injuries — ' +
    'a hit from behind you cannot brace for, and a chin tucked to the chest, which does not ' +
    'need speed to do it. Skates parallel to the boards, forearm and hip into the contact, ' +
    'head up and chin off your chest. Nothing in this picture is contact, and nothing in it ' +
    'is a licence to hit.',

  describe:
    'The attacking half of the rink, the opposition net at the right. Your right winger has ' +
    'the puck in the right-hand corner, the puck drawn on the boards side of his body, away ' +
    'from an opposition defenceman who is inside him and nearer the net. Three more of your ' +
    'own players are drawn: a defenceman at the top of the right faceoff circle rather than ' +
    'up at the blue line, your centre in the slot in front of the net, and your second ' +
    'defenceman across at the far-side point. The right-hand point, just inside the blue ' +
    'line on the winger’s own side, has nobody in it. Two dashed passing routes leave the ' +
    'winger, one to the defenceman at the top of the circle and one to the centre; neither ' +
    'is numbered, because only one of them happens. The opposition goaltender is in his ' +
    'crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },         // (85, 0)
    { id: 'RW', pos: 'F', at: CORNER_RW, label: 'you' },
    // Unlabelled: at x = 85 any label long enough to be worth reading is drawn through the
    // goal line at x = 89. A solid triangle already says opposition defenceman.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'corner:right', dx: 3, dy: -9 } },  // (85, 25)
    { id: 'D', pos: 'D', at: { at: 'top-of-circle:right', dx: 2, dy: -2 }, label: 'stepped down' },
    { id: 'D', pos: 'D', at: { at: 'point:left', dy: 2 } },                   // (25, -18)
    { id: 'C', pos: 'F', at: { at: 'high-slot', dx: 3, dy: 6 }, label: 'the centre' },
  ],

  routes: [
    { from: CORNER_RW, to: { at: 'top-of-circle:right', dx: 7, dy: 2 }, kind: 'pass' },
    { from: CORNER_RW, to: { at: 'high-slot', dx: 5, dy: 12 }, kind: 'pass' },
  ],

  // 6.10 ft from the winger's centre and on the boards side of him, away from the
  // defenceman: 1.7 ft of white between the puck's ink and his circle's. At 5.0 ft it was
  // 0.63, which is the "lollipop" state `winger-dz-rim` records — arithmetically fine and
  // one shape on a phone.
  puck: { at: 'corner:right', dx: -6, dy: 2.5 },                              // (76, 36.5)
};

export default [
  wallDepthBySystem,
  leavesThePoint,
  arrivingAtTheLine,
  cornerAndTheEmptyPoint,
];
