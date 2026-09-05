/**
 * Diagrams for content/technique/skating.md.
 *
 * ⚠️ THIS DOCUMENT HAS 45 TEACHING SUBSECTIONS AND ONE DIAGRAM. That is not neglect and
 * it is not a target to be raised. A STANDING RULING SAID SKATING WAS "NOT WORK" FOR
 * DIAGRAMS, on this reasoning: "body mechanics the rink primitives cannot draw, and a
 * body-mechanics diagram would be checkable by nobody, where every existing diagram is
 * checkable because rink.json fixes the geometry." ⚠️ THAT REASONING SURVIVES ALMOST THE
 * WHOLE DOCUMENT. What follows narrows it rather than overturning it, in the same terms
 * puck_handling.mjs used — the word that does the work is POSITIONAL, not "spatial":
 *
 *   THIS NOTATION HAS NO FACING, NO LIMBS, NO VERTICAL AXIS AND NO SCALE BELOW ABOUT A
 *   FOOT. A player is a circle or a triangle with no front, no back, no hips and no
 *   shoulders (site/scripts/lib/rink.mjs says so in terms in the arrival invariant: "the
 *   books partition the circle at the target's shoulder line and a glyph has no facing").
 *
 * So the great majority of this document is undrawable by construction, and the list of
 * what was ruled out is the more important half of this file. It is below.
 *
 * ⚠️ AND TWO OF THE THREE POSITIONAL SECTIONS ARE ALREADY DRAWN, BY DIAGRAMS THIS
 * DOCUMENT'S OWN PROSE ALREADY POINTS AT. Borrowing beats duplicating: the renderer
 * announces an owner aloud ("Diagram, from body contact and battles."), so a reference
 * costs nothing and a second copy costs a place for the corpus to disagree with itself.
 *
 * ------------------------------------------------------------------------------------
 * ALREADY DRAWN — REFERENCE THE ID, DO NOT REDRAW
 * ------------------------------------------------------------------------------------
 *   "### Arriving at the boards — head up, skates parallel, take it along your side"
 *     → `angle-into-the-corner` (body_contact_and_battles.mjs). Same instruction, same
 *     source sentence, same "decided several strides out" framing, and it already
 *     measures the two approach angles (about 22 degrees off parallel against about 50).
 *     This section explicitly hands the reader to that document for everything after the
 *     route; the picture should come from there too. Drawing a second one would put the
 *     corpus's most important safety instruction in two places with two sets of words.
 *
 *   "### Why it's a defenceman's skill specifically" (gap control)
 *     → `rush-gap-and-angle` (defending_the_rush.mjs), which draws the gap AND the inside
 *     position AND says in its own caption that what no still picture can show is that
 *     the defender was already at full backward speed — which is this section's whole
 *     point ("both of those are skating failures being scored as decision failures").
 *     This section already links to that document for the distances.
 *
 * ⚠️ ONE EXISTING DIAGRAM MUST *NOT* BE REFERENCED FROM THIS DOCUMENT, AND ITS ID LOOKS
 * LIKE AN EXACT MATCH. `strong-side-and-weak-side` (rink_map_and_glossary.mjs) shares a
 * heading with this document's "### Strong side and weak side" and means something else
 * entirely: there, strong side is whichever side of the ice the puck is on; here, it is
 * the direction your own crossovers are better in. Referencing it would teach a reader
 * that their weak side is a place on the rink. The two sections are unrelated.
 *
 * ------------------------------------------------------------------------------------
 * RULED OUT, WITH THE REASON — the longer list, and the one that matters
 * ------------------------------------------------------------------------------------
 * BODY MECHANICS (no limbs, no vertical axis, no scale): the whole of "The Basic Stance"
 * (knee bend, chest, weight over the balls of the feet, head up, hands); "Edges" (an edge
 * is a blade tilt — a fact about a quarter-inch of steel, and the smallest thing this
 * notation can draw is about a foot); the whole of "The Forward Stride" (push direction,
 * extension angle, recovery, glide, arms); "Acceleration … the technique" (toe steps, the
 * 45-degree lean, the T-start); "Crossovers: the mechanics" and "Body position" (the
 * under-push is a leg, drawn nowhere); "The backward stride — C-cuts" and "Stance"; "The
 * mohawk"; the whole of "Falling and Getting Up"; the three stops; "How to turn tighter".
 *
 * FACING (the glyph has none): "open your hips, not your shoulders"; "shoulders level and
 * hips open to the play"; "which way to pivot" AS A ROTATION — see the diagram below,
 * which draws the consequence and says in its caption that it cannot draw the turn.
 *
 * TIME (a still picture has none): "speed is not just a bigger push, it is a faster
 * return"; "almost every race is decided within three strides"; "pivot late"; "you arrive
 * at battles decelerating instead of set". The run-to-glide transition at the third stride
 * is a tempting exception — it is a distance along the ice — and it is NOT drawable here:
 * no source in the document gives a stride length in feet, so where the third stride falls
 * on a rink would be invented outright.
 *
 * PLAYER-SPECIFIC, SO NOT A FACT ABOUT THE ICE: "### The point most players never fix"
 * and "### Strong side and weak side" both turn on which of YOUR sides is weak. A picture
 * would have to choose one, and the document is emphatic that nothing establishes which
 * side is more commonly weak. The one drawable consequence — "turn instead of stopping,
 * which carries you further from the puck" — was drafted and dropped: the whole content
 * would have been an invented turn radius, and "a curve is longer than a straight line"
 * is not worth a reader's attention.
 *
 * "### A turn is not a crossover" WAS THE CLOSEST CALL. It is genuinely positional — the
 * two tools differ in the ice they consume — and the notation even has separate marks for
 * them (a plain curve against the barred lateral-crossover line). It was dropped because
 * the entire teaching content would have been two radii that no source in this document
 * or anywhere in the corpus fixes, so the picture's central quantity would have been the
 * picture's own invention. The section's own words already carry the choice ("a crossover
 * when you have room, a tight turn when you have none").
 *
 * "### Edge work in traffic" — THE CUTBACK WAS DROPPED FOR A SAFETY REASON, NOT A
 * DRAWING ONE, and the reason belongs on the record. The section puts it "with the puck
 * along the wall". `entry-delay-curl` (zone_entries.mjs) already draws the reversal, and
 * its caption states in terms why it is drawn OUT IN OPEN ICE: "Curl in open ice, not
 * against the wall. Never take contact with your back to the boards." A skating diagram
 * showing a carrier turning back against the wall would put a picture in the corpus that
 * another caption exists to warn against, and this document's own boards rule outranks
 * every stride in it. If a cutback is ever drawn, draw it where that caption draws it.
 *
 * "### Basic edge drills" and "### Backward skating drills" — figure eights around two
 * faceoff circles, circles on a circle, goal-line-to-goal-line C-cuts. All are drawable
 * and none teaches: the words are already unambiguous and the painted circles are already
 * on every diagram. "Partner mirroring" carries a one-stick-length gap that is expressly
 * A DRILL SETTING and not a game distance — drawing it beside a corpus whose gap ladder
 * is owned by defending_the_rush.md would manufacture a fifth rung.
 *
 * ------------------------------------------------------------------------------------
 * ORIENTATION AND CONVENTIONS
 * ------------------------------------------------------------------------------------
 * `half: true`, drawn in YOUR OWN end: the net at the right is the one you are defending,
 * and the attack runs left to right. The caption opens by saying so, because a listener
 * has no picture and the whole diagram turns on which net that is.
 *
 * NO RULE NUMBERS IN THE CAPTION, on purpose — switching_positions.mjs records what
 * happens otherwise. The boarding warning below is carried in the section's own words and
 * without a number, so a correction to the section reaches the reader through the body
 * and leaves nothing stranded in a caption no `content/` sweep can see.
 */

const OWNER = 'content/technique/skating.md';

/* ===================================================================================
 * 1 · Pivot toward the boards
 *
 * Section: "### Which way to pivot — a coaching default, not a law" (skating.md).
 * "The standard coaching instruction for defencemen is to pivot toward the boards, not
 * toward the middle of the ice. The reasoning is about failure mode, not aesthetics: if
 * the pivot goes wrong or the attacker beats you during it, you want to be beaten toward
 * the wall — where the boards act as a second defender and the shooting angle is poor —
 * rather than beaten into the slot, which is a scoring chance."
 *
 * WHY IT EARNS A PICTURE. The instruction is a rotation and the JUSTIFICATION is a map:
 * two patches of ice, of very different value, and the pivot decides which one you leave
 * open. A plan view is the only thing that can put those two patches side by side, and
 * "the slot" is a region this corpus already owns and already draws.
 *
 * ⚠️ WHAT THE PICTURE CANNOT DO, AND THE CAPTION SAYS IT RATHER THAN GLOSSING IT. It
 * cannot draw the pivot. Which way a player turns is FACING, and this notation has none —
 * so what is drawn is where each failure leaves you, not the turn that produced it. The
 * section's other instruction, "pivot late", is timing and is drawn by nothing at all.
 *
 * ⚠️ THE INSIDE FAILURE IS DRAWN AS SHADED ICE AND NOT AS A ROUTE, and that is a decision
 * with arithmetic behind it. A "beaten to the middle" route has to pass between the
 * defenceman and the middle of the ice — that is what being beaten inside IS — and the
 * geometry does not allow it: bowed hard enough to clear the triangle's ink (up to 4.6 ft)
 * plus the route stroke, three trial curves gave closest approaches of 4.7, 5.2 and 5.9 ft
 * against a floor of about 5.0, i.e. a route drawn either through the glyph or squeezing
 * its halo. The shaded slot carries the refused failure instead, which also stops a route
 * with an arrowhead from reading as an instruction to go there.
 *
 * ⚠️ THOSE THREE FIGURES ARE HAND ARITHMETIC ON ABANDONED CURVES AND WERE NEVER MEASURED
 * ON A DRAWN ONE — read them as indicative, not as measurements. Hand arithmetic in this
 * file has already been out by 1.5 ft: the surviving route's approach to the defenceman
 * was computed at 8.77 ft and measures 7.28 on the curve the renderer actually draws. The
 * numbers on the constants below are all sampled off the quadratic at 0.001 steps.
 *
 * ⚠️ THE SEPARATION BETWEEN THE TWO PLAYERS IS NOT A GAP CLAIM AND THE CAPTION SAYS SO.
 * They are 9.43 ft apart centre to centre. The floor is set by ink, not by hockey: a
 * forward's circle reaches 3.875 ft and a defenceman's triangle up to 4.6, so two marks
 * cannot stand much closer and still read as two. `rush-gap-and-angle` draws 9 ft and
 * calls it a stick and a half AT THE CENTRE RED LINE; this instant is at the blue line,
 * where that document's ladder is nearer a stick length. Drawing the ladder's blue-line
 * rung is not possible, so the caption declines to claim one and points at the owner.
 * ------------------------------------------------------------------------------------
 * GEOMETRY, all of it an offset from a named position in src/data/rink.json:
 *   blue-line        (25,  0)     neutral-dot:right (20, 22)
 *   half-wall:right  (69, 38.5)   top-of-circle     (54, 22)   goal-line (89, 0)
 * =================================================================================== */

// YOU, THE DEFENCEMAN — a TRIANGLE, because `pos` decides the shape and shape carries the
// position. (30, 24): five feet inside your own blue line, and inside the carrier on both
// axes — nearer the middle of the ice (|y| 24 against his 29) and nearer the net you are
// defending (x 30 against his 22). That is the "inside and on the defensive side" position
// `rush-gap-and-angle` draws, and this section assumes it without restating it.
const PIVOT_YOU = { at: 'blue-line', dx: 5, dy: 24 };              // (30, 24)

// THE CARRIER — the opposition, so SOLID; a forward, so a CIRCLE. (22, 29) puts him three
// feet outside the blue line and wide, which is the moment the section is about: the
// defenceman has run out of ice to retreat into and has to turn.
//
// 9.43 ft from you, centre to centre. See the note above: that is an ink floor, not a gap.
const PIVOT_CARRIER = { at: 'neutral-dot:right', dx: 2, dy: 7 };   // (22, 29)

// THE PUCK, ahead of him and outside him. 7.50 ft from his centre against a floor of 4.975
// (his 3.875 ft of ink plus the disc's own 1.1 ft radius), so 2.52 ft of clear ice, and
// 3.21 ft from the nearest crest of his own wave, so 1.76 ft of white there.
//
// ⚠️ IT WAS AT (28, 31.5) AND THAT WAS A DEFECT A RENDER FOUND AND ARITHMETIC DID NOT.
// Every distance checked out — 6.50 ft from the carrier, 1.52 ft of clear ice — because
// the arithmetic measured it against the GLYPH and never against the ROUTE. The route
// leaves the carrier and passes within a third of a foot of that point, so the puck was
// drawn ON the wave and rendered as a thickening of the line: the one mark that says who
// has the puck, invisible.
//
// ⚠️ AND THE FIRST FIX WAS NOT ENOUGH EITHER, WHICH IS WHY THE CARRIER HAS NO LABEL. Moved
// clear of the wave, the puck was then boxed in from above: `placeLabels` had put "the
// carrier" at (22, 37) — an 18.8 ft wide box, because the placer measures a character at
// 0.56 of the 2.8 ft type size — and it does NOT know the puck exists, since the puck is
// not in its reserve list. That left a corridor of about 3 ft between the wave crest and
// the label box, and the puck ended up 0.29 ft off the crest inside it. Dropping the label
// opened the corridor. Nothing is lost: a solid glyph with a puck beside it already says
// opposition carrier, the caption and the `describe` both name him, and 193 of the corpus's
// 695 skater glyphs carry no label at all.
const PIVOT_PUCK = { at: 'neutral-dot:right', dx: 6.5, dy: 13 };   // (26.5, 35)

// WHERE THE BACKWARD RETREAT RUNS OUT. (44, 27) is 14.3 ft up-ice of you and three feet
// wider, because a defenceman staying inside a carrier who is going wide has to widen too.
// `backward` draws a run of C-cut arches and NO ARROWHEAD — §21.1 draws both backward
// marks as a bare run of the pattern — so this route cannot fail the arrival invariant.
//
// ⚠️ IT WAS 11.2 FT AND THAT WAS TOO SHORT TO READ. At 900 px a half-sheet renders at
// about 8.7 px a foot and the arches have a 1.75 ft wavelength, so eleven feet is six
// scallops in a 97 px run: at the width a phone gives it, that is a scribble beside the
// glyph rather than a symbol. Lengthening it is free: measured on the drawn curve, the
// carrier's route never comes nearer to this one than 7.28 ft, and that closest point is
// this route's START — the defenceman's own anchor — not its end. The two never converge.
const PIVOT_YOU_BACK_TO = { at: 'blue-line', dx: 19, dy: 27 };     // (44, 27)

// WHERE BEING BEATEN WIDE LEAVES HIM: out on the boards, past the end-zone faceoff dot and
// heading for the corner. Written as an offset from the named `half-wall` position rather
// than as a bare pair of numbers — six feet nearer the goal line and a foot off it.
//
// ⚠️ IT ENDED ON THE HALF-WALL ITSELF (69, 38.5) AND THE RENDER SAID NO. Level with the
// dot is not yet poor-angle ice, and the arrowhead landed on the faceoff circle's top hash
// mark, so the mark that carries the whole outcome was drawn on painted ice. Six feet
// deeper puts it past the dot, off the circle, and in ice a reader can see is a bad place
// to shoot from.
//
// CLEARANCES, SAMPLED OFF THE DRAWN QUADRATIC AT 0.001 STEPS — bow +5, so the curve is not
// the chord and the terminal tangent is `to - control`, not `to - from`:
//   • closest approach to the defenceman's anchor 7.28 ft, against a triangle whose ink
//     reaches at most 4.6 — so 2.68 ft of white at the tightest point
//   • the WAVE CREST (the curve offset by the carry glyph's own 1.05 ft amplitude, which is
//     what is actually inked) reaches y 38.60, and its minimum clearance to the boards is
//     3.76 ft measured against the corner arc as well as the straight dasher
//   • the centreline stays OUTSIDE the faceoff circle the whole way: minimum 15.53 ft from
//     the circle centre against a 15 ft radius
//   • the terminal tangent is (1.000, -0.025) — straight up the ice, a fraction inward — so
//     the arrowhead's ray passes about 37 ft from the goaltender, and check-arrivals reports
//     0 hard and 0 advisory for this file
//   • the backward route's nearest point to this one is 7.28 ft, which is its start, i.e.
//     the defenceman's own anchor: the two routes never converge.
const PIVOT_BEATEN_WIDE = { at: 'half-wall:right', dx: 6, dy: -1 };  // (75, 37.5)

// THE SLOT, copied vertex for vertex from `the-slot` (rink_map_and_glossary.mjs), which
// owns it, and from the identical SLOT_ZONE in goaltender.mjs — (54, ±7) at the top of the
// circles to (83, ±7) at the front of the crease. `check_zones.py` compares regions of the
// same name across diagrams, and a fourth spelling of the slot is exactly what it exists
// to catch. `danger: true` paints it as a warning rather than as a target: this is ice to
// keep an attacker out of, not ice to aim for.
const SLOT_ZONE = [
  { at: 'top-of-circle:right', dy: -15 },   // (54,  7)
  { at: 'goal-line', dx: -6, dy: 7 },       // (83,  7)
  { at: 'goal-line', dx: -6, dy: -7 },      // (83, -7)
  { at: 'top-of-circle:left', dy: 15 },     // (54, -7)
];

const pivotTowardTheBoards = {
  id: 'skating-pivot-toward-the-boards',
  title: 'Pivot toward the boards',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'Why defencemen are taught to pivot toward the boards, drawn as the two failures rather than ' +
    'as the turn. Your own end, the net you are defending at the right, the attack coming from the ' +
    'left: a carrier is wide and outside you, you are inside him and nearer your own net, and you ' +
    'are still skating backwards. The standard coaching instruction is to pivot toward the boards ' +
    'rather than toward the middle, and the reasoning is about the failure and not about the ' +
    'aesthetics — if the attacker beats you during the turn, you want to be beaten toward the wall, ' +
    'drawn here finishing out on the boards past the faceoff dot and heading for the corner, where ' +
    'the shooting angle is poor and the wall is a second defender. ' +
    'The other failure is the shaded ice in the middle: the ' +
    'slot, the ice in front of the net between the two faceoff circles, from the top of the circles ' +
    'down to the goalmouth, which is where goals come from. It is shaded as a warning and not as a ' +
    'target, and no route is drawn into it. ' +
    'Three things this picture cannot show. It cannot show the pivot: which way a player turns is a ' +
    'fact about hips and shoulders, and a glyph in this notation has no front and no back, so read ' +
    'this as where each failure leaves you rather than as the turn that produced it. It cannot show ' +
    'the more universal half of the instruction, which is to pivot late — once you have turned to ' +
    'skate forwards you have given up your ability to react to a change of direction. And the ' +
    'distance drawn between the two players is not a gap figure: it is about the closest two marks ' +
    'can stand and still read as two, and the gap ladder belongs to Defending the Rush. ' +
    '⚠️ Pivoting toward the boards is a coaching default and not a law of hockey. Some coaches want ' +
    'a pivot to the middle on specific reads — when pivoting away would blind you to the puck, or ' +
    'when you have inside help and the greater risk is the attacker cutting behind you — and either ' +
    'choice needs you competent both ways, because the right direction is decided by where the ' +
    'attacker is and not by which way you happen to be good at. Ask your coach which they want, and ' +
    'drill both. ' +
    'How much the wall is worth to you depends on the building you are standing in: this is an ' +
    'eighty-five-foot sheet, and on a wider one an attacker forced outside still has room to keep ' +
    'skating. What does not change with width is the direction of the choice. ' +
    '⚠️ And being beaten toward the wall is not an invitation to ride him into it. Driving an ' +
    'opponent into the boards is a separate act, and the NHL, the IIHF, USA Hockey and Hockey ' +
    'Canada all have a boarding rule that reaches it — they do not grade it the same way. Nothing ' +
    'in this picture shows contact.',

  describe:
    'The defensive half of the rink, the net being defended at the right with our goaltender in its ' +
    'crease. Two skaters. An opposition forward, a solid circle, is in the neutral zone three feet ' +
    'outside the blue line and wide, toward the side drawn at the top of the picture, with the puck ' +
    'a small solid dot about seven and a half feet from him, ahead of him and nearer the boards. Our ' +
    'defenceman, an open triangle, stands about nine and a half feet from him, inside the blue line ' +
    'and nearer both the middle of the ice and the defended net. A run of backward-skating ' +
    'arches leaves the defenceman and runs up the ice and slightly wider, ending with no arrowhead. ' +
    'A single skate-and-stickhandle wave leaves the carrier, bows outward toward the side boards, ' +
    'passes outside the faceoff circle and finishes with an arrowhead against the boards past the ' +
    'end-zone faceoff dot, about four feet off the wall and short of the corner. ' +
    'A rectangle down the middle of the end ' +
    'zone, from the top of the two faceoff circles to the front edge of the crease, is shaded as a ' +
    'warning and labelled "the slot"; no route enters it. Nothing in the picture shows contact ' +
    'between the two players, and no turn or pivot is drawn.',

  zones: [{ points: SLOT_ZONE, label: 'the slot', danger: true }],

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease', dx: 1 } },            // (87, 0)

    // NO LABEL ON THE CARRIER — see the puck constant above for the measurement that
    // removed it. The solid fill says opposition, the circle says forward, the puck says
    // who has it, and the caption names him.
    { id: 'F', team: 'opp', pos: 'F', at: PIVOT_CARRIER },

    // ONE LABEL, AND IT IS THE SHORT ONE. The placer measures a character at 0.56 of the
    // 2.8 ft half-sheet type size, so 'you' is 4.7 ft of ice; it lands below the triangle
    // with a leader, clear of the blue line by about 2.4 ft. `placeLabels` is a GLOBAL
    // solver — any edit anywhere in this spec can move it — so re-render after any change.
    { id: 'D', pos: 'D', at: PIVOT_YOU, label: 'you' },
  ],

  routes: [
    // You, still retreating. `backward` is the key's run of C-cut arches, not a wave —
    // a wave is skate-and-stickhandle, which is what the carrier's route is.
    { from: PIVOT_YOU, to: PIVOT_YOU_BACK_TO, kind: 'backward' },

    // The carrier, IF he beats you: wide, and away from the middle. `carry`, because he
    // has the puck. Bowed +5 so it bends outward round you rather than through you.
    { from: PIVOT_CARRIER, to: PIVOT_BEATEN_WIDE, kind: 'carry', bow: 5 },
  ],

  puck: PIVOT_PUCK,
};

export default [pivotTowardTheBoards];
