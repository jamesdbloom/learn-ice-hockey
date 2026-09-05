/**
 * Diagrams for content/technique/puck_handling.md.
 *
 * ⚠️ THIS DOCUMENT HAD NO DIAGRAMS AT ALL, AND AN EARLIER ROUND RULED IT "NOT WORK".
 * That ruling's reasoning was: "body mechanics the rink primitives cannot draw, and a
 * body-mechanics diagram would be checkable by nobody, where every existing diagram is
 * checkable because rink.json fixes the geometry." ⚠️ THAT REASONING IS RIGHT ABOUT MOST
 * OF THIS DOCUMENT AND WRONG ABOUT A FEW SECTIONS, and the line it draws is not the one
 * the plan drew. The plan's word was "spatial". The correct word is POSITIONAL, and the
 * two come apart here more than anywhere else in the corpus:
 *
 *   THIS NOTATION HAS NO FACING. A player is a circle or a triangle with no front, no
 *   back, no shoulders and no hips — site/scripts/lib/rink.mjs says so in terms in the
 *   arrival invariant ("the books partition the circle at the target's shoulder line and
 *   a glyph has no facing"), and scan-before-a-wall-reception's caption says it to the
 *   reader ("this notation has no head, no facing and no stick").
 *
 * So sections that SOUND spatial and are really about which way your body is turned are
 * not drawable at all: "backside and the outside of your hip into the pressure, not your
 * chest"; "do not get square to the boards and stop"; "skate at a shoulder, so they have
 * to turn"; "if they turn their hips to the wall, the middle is open behind them". Every
 * one of those is a facing claim. A picture of two circles cannot make any of them, and a
 * caption that claimed one would be outclaiming its picture.
 *
 * What IS drawable is where the puck is relative to a body, where a second opponent is
 * relative to a teammate, and where a puck lies relative to a painted marking. That is
 * three diagrams, and they are below.
 *
 * ⚠️ ALL THREE HAVE NOW BEEN RENDERED AND LOOKED AT — at 900 px and at 360 px, as PNGs off
 * to one side of the repository — AND THAT IS NOT THE SAME AS HAVING BEEN BUILT.
 * `build-diagrams.mjs` has still not been run for them, so `site/src/data/diagrams.json`
 * does not contain them and `check_absolutes.py`, which reads captions out of that build
 * product, has still never seen these captions. BUILD BEFORE SHIPPING.
 *
 * ⚠️ AND THE RENDER IS WHY THE ARITHMETIC BELOW IS NOT ENOUGH. Every clearance quoted here
 * was computed on the drawn quadratic rather than on the chord, and every label box was
 * read out of the placer's own output rather than guessed — and the picture still shipped
 * three defects that only a render could show: a two-bar end glyph drawn across a passing
 * lane (the arithmetic had measured two infinite lines instead of the mark), a pass whose
 * arrowhead was buried inside the receiver's own halo, and a puck rendering as a diacritic
 * on a goaltender's letter. ARITHMETIC CANNOT TELL YOU WHAT ONE MARK LOOKS LIKE NEXT TO
 * ANOTHER. Each is written up beside the coordinate it moved.
 *
 * ------------------------------------------------------------------------------------
 * WHAT WAS DELIBERATELY NOT DRAWN, WITH THE DIAGRAM THAT ALREADY DRAWS IT
 * ------------------------------------------------------------------------------------
 * Borrowing beats duplicating — switching_positions.mjs states the rule and the renderer
 * announces the owner aloud ("Diagram, from scanning and anticipation."), so a reference
 * costs nothing and a second copy costs a place for the corpus to disagree with itself.
 *
 *   "### Know your out before you get there" — THE PLAN NAMED THIS AND IT IS ALREADY
 *     DRAWN. `scan-before-a-wall-reception` (scanning_and_anticipation.mjs) is the same
 *     instant from the same side of the ice: you on the half-wall in your own end, a
 *     forechecker closing, the support option already in place behind you, and its caption
 *     already teaches that everything in the picture was there to be seen before the puck
 *     arrived. This section links to that document in its own body. The markdown should
 *     reference the id.
 *
 *   "### Using the boards" — its drawable half is drawn twice over. The escape along the
 *     wall is `corner-escape-routes` (body_contact_and_battles.mjs); the rim is
 *     `breakout-rim` and `winger-dz-rim`; the reverse is `breakout-reverse` and
 *     `winger-dz-reverse`. What is left of the section — hip and forearm to the wall,
 *     square to the boards versus angled — is facing, and see above.
 *
 *   "### Back into the checker" — facing, entirely. Its one positional consequence, that
 *     the puck ends up on the side of you away from the pressure, IS the first diagram
 *     below, so this section's picture already exists under the section that owns the idea.
 *
 *   "### The moves" (the slip) and "### Pushing it into space and skating onto it" —
 *     `dump-chip-past` (zone_entries.mjs) already draws a carrier and a puck taking
 *     separate routes past a defenceman and rejoining behind him, and it draws it at the
 *     blue line, which is where this move is most often played. ⚠️ BUT ITS CAPTION CARRIES
 *     NO ZONE QUALIFICATION, and this document's does: "Slip forward; do not slip out of
 *     trouble" — a failed slip in your own end is a loose puck in front of your own net
 *     with you on the wrong side. A reference to that id therefore needs the qualification
 *     in the prose beside it, because the caption a listener hears will not carry it.
 *     Reported rather than fixed: zone_entries.mjs is not this file's to edit.
 *
 *   "### Attack a shoulder, not the chest" — `show-one-shoulder-open-the-other`
 *     (time_and_space.mjs) draws the inside-shoulder version. What this section adds is
 *     that a well-coached defenceman lines his outside shoulder up with your inside one to
 *     steer you wide — which is a SHOULDER claim and so is exactly the thing that cannot
 *     be drawn. The defenceman's side of it is `forcing-them-outside` and
 *     `rush-gap-and-angle`.
 *
 *   "### In your own defensive zone" and "### Through the middle of the ice" — `the-risk-map`
 *     (risk_management.mjs) grades the ice by what a turnover there costs, which is the
 *     whole of both sections' argument.
 *
 * ------------------------------------------------------------------------------------
 * ORIENTATION, and it is not the same in all three, so each caption says which
 * ------------------------------------------------------------------------------------
 * All three are `half: true`. Two are drawn in the ATTACKING end (the net at the right is
 * the opposition's) and one in YOUR OWN (the net at the right is yours). That split is
 * forced by the subjects — a puck in your own crease cannot be drawn at the other end —
 * and every caption and every `describe` opens by saying whose net is on the right.
 *
 * NO SHADED ZONES ANYWHERE IN THIS FILE, on purpose. The one region these sections name
 * is the goal crease, and THE CREASE IS ACTUAL PAINT: `rinkSvg` already draws it, filled,
 * on every diagram. A `zones` polygon over it would put a house tint on a real marking,
 * which is the one confusion `reading_ice_hockey_diagrams.md` works hardest to prevent.
 * Nothing here adds a row for `check_zones.py` to compare, and that is the intended state.
 *
 * NO RULE NUMBERS IN ANY CAPTION, on purpose. switching_positions.mjs records what
 * happens otherwise: a caption carried "616(b)" and a four-book penalty comparison that
 * appeared nowhere in its document, so no `content/` sweep could ever have reached it, and
 * the sentence was wrong on its own terms as well as homeless. Every rule fact stated in
 * the crease caption below is stated in its own section, in the section's own words, and
 * without a number — so a correction to the section reaches the reader through the body
 * and the facts block, and the caption states nothing a correction would leave stranded.
 *
 * ⚠️ ONE FILED DEFECT IN THIS DOCUMENT IS DELIBERATELY NOT PROPAGATED. Its Common Mistakes
 * entry reads "Catching it is legal in every book", while its own body and trailer record
 * that USA Hockey's playing rules print no such permission and that it comes from the
 * Casebook. The crease caption below is written off the BODY (:301) and not off that
 * sentence, and it does not repeat the "every book" form. Do not "make it consistent" by
 * copying the Common Mistakes wording in here.
 */

const OWNER = 'content/technique/puck_handling.md';

/* ===================================================================================
 * 1 · Puck on the far side
 *
 * Section: "### Puck on the far side" — "The foundation. The puck lives on the side of
 * your body away from the pressure. If the checker is on your right, the puck is on your
 * left, and your torso is the wall between them."
 *
 * WHY IT EARNS A PICTURE AND WHY IT IS THE FIRST ONE. It is the only claim in the whole of
 * Puck Protection that is pure geometry: three marks, and the carrier's body between the
 * other two. Everything else in that part of the document is facing, base or grip.
 *
 * DRAWN IN OPEN ICE, NOT ON THE WALL, and that is a decision. The section says nothing
 * about the boards; putting the picture on the half-wall would have imported the whole
 * board-contact problem into a section that is about which side of you the puck is on.
 * The caption still carries this document's boards override, because a picture of a
 * checker on a carrier is one drift away from a wall — but it carries it as the document
 * states it, scoped to the boards, rather than as a caption about open ice pretending to
 * be about contact.
 * =================================================================================== */

// (54, 22) is `top-of-circle:right`, so everything below is an offset from it.

// The carrier. (46, 28) is between the blue line and the faceoff circle — 21 ft inside
// the line, and 23.8 ft from the end-zone dot at (69, 22) against a 15 ft circle, so he
// is outside the paint by 8.6 ft and no mark in this picture touches a painted line.
// 14.5 ft off the side boards at y = 42.5, which is what keeps it "open ice".
const FS_CARRIER = { at: 'top-of-circle:right', dx: -8, dy: 6 };   // (46, 28)

// The checker, on the side of the carrier NEARER THE MIDDLE of the ice, which is the
// commonest way pressure arrives on a carrier who is wide.
//
// 9.49 ft from the carrier, centre to centre. Both glyphs are circles and a circle's ink
// reaches 3.875 ft (r 2.9 plus half the 1.95 halo stroke — GLYPH_INK.forward in
// site/scripts/lib/rink.mjs), so the two halos stop 1.74 ft apart. ⚠️ THAT NUMBER IS THE
// PICTURE'S WHOLE TONE: `support-a-battle-from-outside` puts a pin at 5.85 ft centre to
// centre and says the OVERLAP is what reads as a pin. At 9.49 they are unmistakably two
// players with the pressure on, and unmistakably not a pin — which is right, because this
// section is about a puck under pressure and not about a battle.
//
// ⚠️ HE IS A CIRCLE, NOT A TRIANGLE, AND THE CAPTION SAYS SO RATHER THAN HIDING IT. The
// section says only "the checker". A triangle's ink reaches 4.6 ft (circumradius 3.6 plus
// the 1.0 halo), which at this separation leaves 1.01 ft rather than 1.74 — drawable, but
// the shape would then be asserting that the pressure on a wide carrier comes from a
// defenceman, which the section does not say. A forward was chosen because it asserts
// less, not because it is more likely.
const FS_CHECKER = { at: 'top-of-circle:right', dx: -5, dy: -3 };  // (49, 19)

// THE PUCK — the point of the diagram, so its position is derived rather than picked.
// The pressure runs carrier -> checker = (3, -9), unit (0.3162, -0.9487). "The far side"
// is that unit vector reversed, so the puck sits at the carrier plus 5.85 ft of
// (-0.3162, 0.9487) = (44.15, 33.55), rounded to (44, 33.5) to keep the offsets whole.
//
// 5.85 ft from the carrier's centre. The floor is 4.975 — the carrier's 3.875 ft of ink
// plus the puck's own 1.1 ft radius — so 0.87 ft of clear ice separates the disc from the
// halo. ⚠️ MEASURE THIS AGAINST THE HALO AND NOT AGAINST THE CIRCLE: the body is r 2.9 and
// the ink is 3.875, and a puck placed off the 2.9 would be drawn inside the white ring.
//
// The teaching number is the OTHER one: the puck is 15.34 ft from the checker and the
// carrier is 9.49 ft from him. The carrier is nearer the pressure than his own puck is,
// by 5.85 ft, and that is what "your torso is the wall between them" looks like in plan.
const FS_PUCK = { at: 'top-of-circle:right', dx: -10, dy: 11.5 };  // (44, 33.5)

const puckOnTheFarSide = {
  id: 'puck-on-the-far-side',
  title: 'Puck on the far side',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'Puck protection in one picture, drawn in open ice in the attacking end with the opposition ' +
    'net at the right; the geometry is the same anywhere on the sheet. You have the puck, a checker ' +
    'is on the side of you nearer the middle of the ice, and the puck is drawn on the other side of ' +
    'you, away from him, so your body is between the two. The numbers in the picture are the ' +
    'argument for it: he is about nine and a half feet from you and about fifteen from the puck. If ' +
    'the puck sits on the pressure side instead, you have already lost it — you are asking your ' +
    'stick to beat his stick, and his has the shorter distance to travel. ' +
    'Three things the picture cannot show, and they are most of the skill. Which way you are turned ' +
    'is not drawn, because a glyph in this notation has no front and no back: read this as where ' +
    'the puck is, not as how you are standing. What the document asks for is your backside and the ' +
    'outside of your hip into the pressure rather than your chest, over a base wider than your ' +
    'shoulders with the knees bent. Your stick is not drawn either, and it belongs on the far side ' +
    'of the puck too, so that a poke check has to go through the puck and your blade to reach it. ' +
    'And a far-side puck is only available to hands that can work wide of the body — hands pinned ' +
    'to the hips leave no far side at all. The checker is drawn as a forward because a shape had to ' +
    'be chosen and this notation has no neutral one; the section says only "the checker". ' +
    'Nothing in the picture shows contact. ' +
    '⚠️ And the moment a battle like this reaches the boards, this document\'s own override ' +
    'outranks every word of it: never turn your back to the wall and never duck, and neither ' +
    'prohibition is a rule for fast checkers only. Get your skates parallel to the wall and take ' +
    'the contact on your forearm and hip, head up and chin off your chest. USA Hockey warns that ' +
    'even a light hit from behind could inflict a severe head or neck injury, and the head-down ' +
    'collision that ducking produces can break your neck at walking speed.',

  describe:
    'The attacking half of the rink, the opposition net at the right and their goaltender in the ' +
    'crease. Two skaters, both in open ice toward the top of the picture, between the blue line and ' +
    'the faceoff circle and well clear of the boards. An own-team forward, an open circle, is the ' +
    'carrier. An opposition forward, a solid circle, stands about nine and a half feet from him, ' +
    'below and slightly ahead of him — that is, on the side nearer the middle of the ice. The puck ' +
    'is a small solid dot drawn just under six feet from the carrier on the opposite side of him ' +
    'from that opponent, toward the boards, so the carrier\'s glyph lies between the puck and the ' +
    'checker and the puck is about fifteen feet from the checker. No routes are drawn, no region is ' +
    'shaded, and no stick, head or body facing is drawn, because the notation has symbols for none ' +
    'of them.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: 1 } },   // (87, 0)
    // Short labels on purpose. `placeLabels` measures a label at 0.56 of the type size a
    // character, so at the half-sheet size of 2.8 ft that is 1.57 ft a character: 'you' is
    // 4.7 ft wide and 'pressure' 12.5 ft, against 'puck on the far side' at 31 ft, which
    // would have spanned from x 30 to x 61 and could not have avoided the faceoff circle.
    // The caption does the teaching; the labels only have to name the two glyphs.
    //
    // WHERE THE PLACER ACTUALLY PUTS THEM, read out of `playSvg`'s output rather than
    // predicted: 'pressure' takes the (0, -7.5) offset to (49, 11.5), spanning x 42.7 to
    // 55.3, and the faceoff circle's near edge at that y is x 58.3 — clear by 3 ft.
    // 'you' takes (0, +8) to (46, 36), spanning x 43.6 to 48.4, where the circle's near
    // edge is x 63.6 and the dasher is 6.5 ft further out. Neither label lands on paint.
    //
    // ⚠️ THIS GLYPH READ `A1` AND THAT WAS BACKWARDS. The style guide reserves `A1 A2`
    // for "attackers, where the section counts them"; here the READER is the attacker —
    // he has the puck — so `A1` was hung on the CHECKER. A census of the corpus's other
    // uses of that pair found every one of them on an attacking player. Generic `F` and
    // `D` are permitted "where a diagram genuinely does not distinguish individuals",
    // and this section says only "the checker", so `F` is what it gets: the fill already
    // says which team, and the label already says which job.
    { id: 'F', team: 'opp', pos: 'F', at: FS_CHECKER, label: 'pressure' },
    { id: 'F',  pos: 'F', at: FS_CARRIER, label: 'you' },
  ],

  // NO ROUTES. The section is a statement about one instant and about no movement at all;
  // a `pressure` route on the checker would have said he is arriving, which is a different
  // claim and one the section does not make. His position carries the direction.
  routes: [],

  puck: FS_PUCK,
};

/* ===================================================================================
 * 2 · Where the puck is, not where you are
 *
 * Section: "### If the puck pops up, do not grab it" — and specifically its middle, which
 * the document states twice: "it is the puck that has to be in the crease, not you", and
 * the ```facts line "Whether it is a penalty shot turns on where the puck is, not where
 * you are, in all four books".
 *
 * WHY A RULES PICTURE EARNS A PLACE IN A TECHNIQUE DOCUMENT. The consequence is a penalty
 * shot against your own team, and the thing that decides it is a LOCATION — the one kind
 * of claim this notation makes natively. The confusion the section exists to clear up
 * ("I was outside the crease, so I'm fine") is a confusion between two positions, and two
 * positions are exactly what a plan view can put side by side.
 *
 * ⚠️ WHAT THE PICTURE CANNOT DO, AND THE CAPTION SAYS IT RATHER THAN GLOSSING IT. The
 * section's other half is that the crease is a VOLUME running up to the top of the goal
 * frame, so a puck caught in the air over the paint is a puck in the crease. A plan view
 * has no height. The caption states that limit in the section's own terms and does not
 * pretend the drawing carries it.
 *
 * ⚠️ NO PAIR, AND THE REASON IS THE ONE switching_positions.mjs MEASURED. The obvious
 * design is two pictures differing only in which side of the crease line the puck is on.
 * The puck is a 1.1 ft disc and it is the LEAST SALIENT MARK ON THE PAGE; that file's
 * whole rebuild exists because a reader absorbs the most salient difference first and the
 * caption second. One picture, drawn as the expensive case, with the cheap case in words.
 *
 * NO `zones` POLYGON. The crease is genuinely painted and `rinkSvg` already fills it.
 * ------------------------------------------------------------------------------------
 * GEOMETRY OF THE CREASE, from site/scripts/lib/rink.mjs and rink.json rather than from
 * memory: the goal line is x = 89; the crease's straight sides run 4.5 ft in from it at
 * |y| = 4, and a 6 ft arc closes them, bulging into the zone. The arc's centre is at
 * x = 84.5 + sqrt(36 - 16) = 88.97, y = 0, so the crease reaches x = 82.97 on the centre
 * line — which is rink.json's own "the crease reaches x = 83 on the middle".
 * =================================================================================== */

// YOUR GOALTENDER, pushed well off the centre line so the puck can be drawn where the
// reader can see it. A goaltender is a bare letter with no halo and `glyphCovers` treats
// him as covering nothing, so the only constraint here is legibility.
//
// ⚠️ HE WAS AT (85, -1.5) AND THE PUCK AT (86, 2), 3.64 ft APART CENTRE TO CENTRE, AND
// THAT IS NOT THE MEASUREMENT THAT MATTERS. `glyphCovers` returns false for `pos === 'G'`,
// so nothing in the placer or the checkers protects the space round him — but a bold `G`
// at font-size 4.6 has a cap about 3.31 ft tall, reaching 1.71 ft above its own anchor,
// and the puck is a disc of radius 1.1. At 3.64 ft that left 0.69 ft of white between the
// disc and the letter, and rendered at 4x the puck read as a diacritic on the goaltender's
// G. THE WHOLE DIAGRAM TURNS ON WHERE THAT PUCK IS. Now 4.71 ft apart, which is 1.89 ft of
// clear ice — measured letter-edge to disc-edge, not anchor to anchor. (dy -2.3 bought
// 2.09 ft and put the letter's foot on the crease's own side line; 0.2 ft of it went back.)
//
// The crease is 8 ft across and 6 ft deep, so 4.71 ft is close to the most this picture
// can offer: the letter needs |y| <= about 2.35 and x >= about 85.8 to keep its own corners
// inside the arc, and the disc needs |y| <= 2.9 and to stay 4.9 ft of the arc centre.
const CR_G = { at: 'crease', dx: 0.3, dy: -2.1 };                  // (86.3, -2.1)

// THE PUCK, INSIDE THE CREASE, and now on the far side of the goal mouth from him.
// (86, 2.6) is 3.95 ft from the arc centre (88.97, 0) against the 6 ft arc, and |y| = 2.6
// against the 4 ft sides — inside on both tests, with the disc's own 1.1 ft radius
// reaching y = 3.7 and x = 84.9 (where the arc is at x = 84.25), still inside on both.
// ⚠️ (85, 3) WAS TRIED FIRST AND REJECTED: the disc's edge would have run to y = 4.1, over
// the crease's own side line, so the mark the whole picture turns on would have been drawn
// straddling the boundary it is supposed to be inside. (85.5, 2.6) was rejected for the
// same reason on the other axis — its left edge at x = 84.4 against an arc at x = 84.25.
const CR_PUCK = { at: 'crease', dy: 2.6 };                         // (86, 2.6)

// YOU, OUTSIDE THE CREASE ON BOTH TESTS AND VISIBLY SO. (79, 7): |y| = 7 against the 4 ft
// side lines, and 12.18 ft from the arc centre (88.97, 0) against the 6 ft arc.
//
// A TRIANGLE, because this is a skater in front of his own net and the document's own
// position section puts a defenceman there ("retrievals with your back to pressure").
// The section itself says only "a skater", so the caption discloses the choice.
// The triangle is drawn apex toward +y with circumradius 3.6, so its vertices sit at
// (79, 10.6), (82.12, 5.2) and (75.88, 5.2), and the 1.0 ft halo reaches that far again
// outward. ⚠️ THE BINDING CLEARANCE IS TO THE CREASE'S NEAR CORNER AT (84.5, 4), where the
// straight side meets the goal-line end of the arc: that corner is 2.67 ft from the
// nearest vertex, so 1.67 ft of clear ice once the halo is counted. THE GLYPH IS OUTSIDE
// THE PAINT AND IT IS OUTSIDE IT BY UNDER TWO FEET, which the caption's whole claim rests
// on — render it and look rather than trusting this line.
// Centre to centre he is 8.27 ft from the puck; the nearest vertex, (82.12, 5.2), is
// 4.67 ft from it, leaving 2.57 ft of clear ice once the puck's 1.1 ft radius and the
// triangle's own 1.0 ft halo are counted.
// 18.03 ft from the end-zone dot at (69, 22) against a 15 ft circle, so he is clear of
// the paint there too.
const CR_YOU = { at: 'goal-line', dx: -10, dy: 7 };                // (79, 7)

const wherethePuckIs = {
  id: 'the-puck-decides-not-you',
  title: 'The puck decides, not you',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'Your own net at the right, your goaltender in his crease, and a loose puck drawn inside the ' +
    'shaded blue paint beside him with you standing outside it. This is the picture worth ' +
    'carrying out of this section, because the test is not where you are — it is where the puck is. ' +
    'A skater who falls on, holds or covers the puck inside their own crease concedes a penalty ' +
    // ⚠️ "all four" flattened USA Hockey, which alone gives the referee an alternative:
    // Rule 614(b) Falling on Puck, "A penalty shot/optional minor penalty shall be
    // assessed". ⚠️ This was first written as 406(b) — the number came from a review
    // report and was not re-derived. 406 is Penalty Shot and governs WHO TAKES one
    // (usah.txt:2646); the clause quoted here is under Rule 614 (usah.txt:3981). The
    // QUOTATION was verified and the CITATION was not, which is the same defect as
    // carrying a figure out of its owner. The owner's
    // own facts block already carried the distinction; this caption had dropped it.
    'shot in all four of the books this document checks — though USA Hockey Rule 614(b) reads ' +
    '"a penalty shot/optional minor penalty shall be assessed", so that book alone lets the ' +
    'referee take the lesser option. All four exempt the goalkeeper, whose ' +
    'job that is. What decides it is the puck\'s location at the instant it is covered. So the two ' +
    'cases run opposite to the way most players guess: a defender standing inside the crease who ' +
    'covers a puck that was outside it has given away a minor penalty, and a defender standing ' +
    'outside the crease, exactly as drawn here, who covers a puck that was inside it has given away ' +
    'the penalty shot. ' +
    'Then the two things the picture cannot show, and the section is about both. The crease is a ' +
    'volume and not a patch of ice — all four books run it from the ice up to the top of the goal ' +
    'frame — so a puck you pluck out of the air over this paint, below the crossbar, is a puck in ' +
    'the crease. A plan view has no height in it, and this whole section is about a puck in the ' +
    'air, so the drawing has to put the puck on the ice and the words have to carry the rest. ' +
    'The instruction is the same wherever you are standing, which is why none of it needs working ' +
    'out in the moment: do not keep hold of it. Knock it straight down at your feet in one ' +
    'continuous motion and play it with your skate or your blade. ' +
    'Note what the shading is here, because it is the exception among these diagrams: the goal ' +
    'crease is genuinely painted on the ice, where the tinted regions elsewhere are only names for ' +
    'areas. You are drawn as a defenceman because a shape had to be chosen and the section says ' +
    'only "a skater". ' +
    '⚠️ And your goaltender is on the ice in this picture, deliberately. With him pulled for an ' +
    'extra attacker the price is worse rather than the same.',

  describe:
    'Your own defending end, your net at the right. The goal crease is drawn as the rink itself ' +
    'draws it, a shaded blue area in front of the goal with a red outline, eight feet wide and six ' +
    'feet deep. Your goaltender stands inside it, pushed off to one side of the goal mouth. The ' +
    'puck is a small solid dot drawn inside the crease on the other side of the mouth from him, ' +
    'clear of its edges, about five feet from him. One of your own skaters, an open triangle and ' +
    'so an own-team defenceman, ' +
    'stands about six feet clear of the nearest corner of the crease, up and to the side of it, ' +
    'with no part of his ' +
    'glyph touching the paint. No opposition players are drawn, no routes are drawn, and no shaded ' +
    'region has been added: the only shaded area in the picture is the crease, which is a real ' +
    'marking on a real rink.',

  players: [
    { id: 'G', pos: 'G', at: CR_G },
    // 'outside' is 7 characters, 11.0 ft wide on the placer's metric. Longer strings were
    // rejected: 'outside the crease' is 18 characters and 28.2 ft, which centred near
    // x = 79 spans x 65 to x 93 and cannot miss the goal line, the crease outline and the
    // faceoff circle at once.
    //
    // ⚠️ THE PLACER PUTS IT ON THE FACEOFF CIRCLE ANYWAY, and this is the one label in the
    // file that lands on paint. It takes the (0, +8) offset to (79, 15), a box spanning
    // x 73.5 to 84.5 and y 13.25 to 16.75, whose corners sit between 6.9 and 17.8 ft from
    // the end-zone dot — so the 15 ft arc runs straight through it. Nothing in the spec can
    // move it: the offsets are the placer's, and the alternatives it would take instead are
    // no better in a corner of the rink this crowded.
    // ✅ RENDERED AND LOOKED AT, AND THE WORRY IS DISCHARGED. At LABEL_HALO = 0.12 the ring
    // is about 0.34 ft, and the text sits clear: the arc is broken behind it rather than
    // running through the letters, which is what that halo is for. This note is kept as the
    // record that the question was asked and answered, not as an outstanding concern.
    //
    // ⚠️ WHAT THE RENDER DID SHOW IS NOT FIXABLE HERE. The dashed leader from this label
    // ends at the player's ANCHOR, which is the centre of the triangle, so it is drawn
    // straight through the `D` inside the glyph rather than stopping at the triangle's
    // boundary. That is `placeLabels` in site/scripts/lib/rink.mjs and it is universal:
    // the placer seeds `reserve` with a 7 x 8 ft box round EVERY player including the
    // label's own, so both offsets inside `LEADER_MIN` (5.5 ft) always collide and every
    // player label in the corpus therefore gets a leader that starts inside its own glyph.
    // A spec can only avoid it by having no label. Reported rather than worked around.
    { id: 'D', pos: 'D', at: CR_YOU, label: 'outside' },
  ],

  routes: [],

  puck: CR_PUCK,
};

/* ===================================================================================
 * 3 · You can beat one. You cannot beat two.
 *
 * Section: "### Against multiple defenders" — "You can beat one player. You cannot beat
 * two, and pretending otherwise is how a 2-on-2 becomes a rush the other way. When a
 * second defender is arriving: pass to the teammate their arrival has left open, chip the
 * puck into space behind them, or protect it, take the contact, and wait for support."
 *
 * WHY IT IS DRAWABLE WHERE THE REST OF "When *Not* to Stickhandle" IS NOT. Two of the
 * section's three options are PUCK ROUTES and the third is the absence of one, and the
 * reason the first option exists at all is a positional fact: the second defender vacated
 * the ice your teammate is now standing in. That is a claim about where four players are,
 * and it is the only one in this part of the document that is.
 *
 * THE THIRD OPTION IS NOT DRAWN AND THE CAPTION AND `describe` BOTH SAY SO. Protecting the
 * puck and waiting is standing still, and standing still has no symbol in this notation —
 * `stopmark` is a pair of slashes ending a route, which would say he skated somewhere and
 * stopped, not that he stayed. An unlabelled absence would have read as a two-option list.
 *
 * NEITHER OPPONENT HAS AN ARROWHEAD POINTED AT ANYBODY. The second defender's route is
 * `pressure`, which is `line: 'plain', end: 'bars2'` — the two-bar mark that means arrive
 * and contain rather than carry on through. The first defenceman has no route at all,
 * because every route from him long enough to see finishes pointing at the carrier, which
 * is the shape dump-chip-past refuses for the same reason.
 * =================================================================================== */

// (54, 22) is `top-of-circle:right` again.

// YOU, wide on the boards side inside the attacking blue line. (42, 32) is 10.5 ft off the
// side boards and 28.8 ft from the end-zone dot, so clear of the faceoff paint.
const TWO_YOU = { at: 'top-of-circle:right', dx: -12, dy: 10 };    // (42, 32)

// THE FIRST DEFENCEMAN, up-ice of you and nearer the boards — the man you have already
// engaged. 10.20 ft from you, against a circle's 3.875 ft of ink and a triangle's 4.6, so
// 1.72 ft of clear ice between the two glyphs.
// 18.79 ft from the dot at (69, 22), outside the 15 ft circle.
const TWO_D1 = { at: 'top-of-circle:right', dx: -2, dy: 8 };       // (52, 30)

// THE SECOND OPPONENT, arriving from the middle of the ice. Drawn as a forward, because
// the section says only "a second defender is arriving" and the commonest second arrival
// on a wide carrier is a forward coming across; a triangle would have asserted that both
// opponents are defencemen, which the section does not.
//
// ⚠️ HE WAS AT (50, 10) AND HAD TO MOVE, ALONG WITH THE TEAMMATE AND THE END OF HIS OWN
// ROUTE, BECAUSE OF A COLLISION NOBODY COULD FIX BY MOVING ONE THING. See the block
// headed THE TWO-BAR TERMINAL AND THE PASS below: the three of them are one geometry
// problem, and the layout that solves it is the whole of the fix.
const TWO_SECOND = { at: 'top-of-circle:right', dx: -9, dy: -15 }; // (45, 7)
// Where his route stops: 12.0 ft short of you, ending in two bars. A bar-ended route sits
// outside both limbs of the arrival invariant by design — see THE ARRIVAL INVARIANT in
// site/scripts/lib/rink.mjs — and an arrowhead here would have been illegal anyway, since
// the tip would then lie inside the 9 ft the invariant's form (b) forbids for a route
// finishing on an opposing skater ahead of it.
// The route runs (45, 7) -> (43.43, 20.09), 13.18 ft long. It comes no nearer than
// 13.10 ft to the first defenceman and 25.62 ft to the end-zone dot, so it crosses no
// paint and no glyph.
const TWO_SECOND_TO = { at: 'top-of-circle:right', dx: -10.57, dy: -1.91 }; // (43.43, 20.09)

// THE TEAMMATE THE SECOND MAN LEFT. (57.5, 8) is in the middle of the ice, 12.54 ft from
// where that opponent is standing — near enough that the reader can see whose ice it was,
// far enough that the two glyphs do not read as a pair (4.79 ft of clear ice between two
// circles' ink). 18.12 ft from the end-zone dot and 30.57 ft from the opposition
// goaltender.
// ⚠️ (62, 2) WAS DRAWN FIRST AND IS 14.42 ft FROM THAT OPPONENT, AND WAS REJECTED ON
// TEACHING GROUNDS: at fourteen feet the picture stops saying "he has just left this man"
// and starts saying "there is a teammate somewhere in the middle", which is the one thing
// this diagram has to make visible. 12.54 keeps that reading. (60, 6) — 10.77 ft, which
// this spec preferred — cannot be kept; see below.
const TWO_MATE = { at: 'top-of-circle:right', dx: 3.5, dy: -14 };  // (57.5, 8)

// THE PUCK, on the boards side of you, which is the far side from both opponents — the
// same rule the first diagram in this file draws. 5.70 ft from your centre against a floor
// of 4.975 (3.875 of ink plus the disc's 1.1), so 0.73 ft of clear ice. 6.0 ft off the
// side boards.
const TWO_PUCK = { at: 'top-of-circle:right', dx: -15.5, dy: 14.5 };// (38.5, 36.5)

// THE CHIP'S LANDING POINT, in the space behind the first defenceman and outside him on
// the wall. (60, 37) is 5.5 ft off the side boards, 10.63 ft from the defenceman, and
// 17.49 ft from the end-zone dot against a 15 ft circle whose painted outer edge is at
// 15.175 — so the whole route and its whole arrowhead stay off the paint.
//
// ⚠️ IT USED TO LAND AT (74, 38), DEEP TOWARD THE CORNER, AND THE ARROWHEAD DID NOT FIT.
// The corridor between the faceoff circle and the side boards is about five and a half
// feet wide at the dot line, and an arrowhead is 3.0 ft barb to barb and 3.15 ft long. At
// (74, 38) with bow 7 the head's nearest corner came 15.31 ft from the dot — 0.13 ft
// outside the painted edge, which is under half a pixel at the width these render at on a
// phone — while its other corner sat 2.35 ft off the dasher. ⚠️ THAT WAS FOUND BY
// COMPUTING THE HEAD'S THREE CORNERS OFF THE TERMINAL TANGENT, NOT THE TIP AND NOT THE
// SPINE: the spine's own figures at that endpoint were a comfortable 16.68 and 3.41, and
// they are the numbers an earlier draft of this comment quoted. The arrowhead is separate
// ink and it is the widest ink on a route.
// A sweep over every endpoint x 60 to 78 and y 34 to 40 at every bow 3 to 12, requiring
// 6 ft from the defenceman, 2.8 ft of spine and 2.6 ft of head off the boards and 0.4 ft
// of both spine and head outside the circle's paint, returned 51 admissible candidates;
// this one is among the most comfortable, and it says the section's own words — "chip the
// puck into the space behind them" — better than a chip to the corner did.
const TWO_CHIP_TO = { at: 'top-of-circle:right', dx: 6, dy: 15 };  // (60, 37)

/*
 * THE TWO PUCK ROUTES, and the clearances are computed on the quadratic actually drawn
 * rather than on the chord. Both are `pass` — a dashed line, the key's symbol for the puck
 * travelling — so neither is in scope for the arrival invariant, which covers skater
 * routes only.
 *
 * ROUTE A, the pass to the open teammate: (42, 32) -> (54.24, 13.04), no bow. It stops
 * 6.0 ft short of the teammate's anchor at (57.5, 8), along its own bearing.
 *   ⚠️ IT USED TO FINISH ON HIS ANCHOR, AND SO HAD NO VISIBLE ARROWHEAD AT ALL. The head
 *   was buried inside a circle whose ink reaches 3.875 ft and whose halo is a 1.95-wide
 *   white stroke painted UNDER the glyph bodies but OVER the routes: rendered at 4x,
 *   nothing of the head showed. `winger.mjs:551-556` records the identical failure and
 *   fixed it the identical way, and every other pass in this file already stopped short.
 *   6 ft is this corpus's separation, and it leaves 2.13 ft between the head's tip and
 *   the near edge of his ink.
 *   the first defenceman at (52, 30)  nearest approach 7.32 ft, against 4.6 ft of triangle
 *                                     ink — 2.72 ft of clear ice.
 *   the second opponent at (45, 7)    nearest approach 11.04 ft, against 3.875 ft of
 *                                     circle ink — 7.17 ft.
 *   the faceoff circle                the SPINE comes no nearer than 17.27 ft to the dot,
 *                                     and the arrowhead's own three corners, computed off
 *                                     the terminal tangent rather than off the tip, no
 *                                     nearer than 16.17 — 1.0 ft outside the painted
 *                                     outer edge at 15.175.
 *   ⚠️ A BOW WAS TRIED AND ABANDONED. With the defenceman where an earlier draft had him,
 *   at (50, 26), the straight pass ran 2.69 ft from his anchor — drawn straight through
 *   his triangle — and the fix attempted was `bow: -9`, which buys 6.6 ft of clearance and
 *   costs the truth of the mark: a quadratic's greatest departure from its chord is half
 *   the bow, so 4.5 ft of visible curve on a pass, which in this notation means a puck
 *   banked off something. MOVING THE PLAYER IS THE RIGHT FIX AND BOWING THE PASS IS NOT.
 *
 * ROUTE B, the chip into the space behind them: (42, 32) -> (60, 37), `bow: 5`.
 *   the first defenceman  nearest approach 7.10 ft, so 2.50 ft of clear ice past the
 *                         triangle's 4.6 ft of ink. ⚠️ A STRAIGHT VERSION OF THIS ROUTE
 *                         RUNS THROUGH HIM, which is why this one IS bowed where route A
 *                         is not: here the bow is doing what the play does, putting the
 *                         puck round the wall side of a man, and a chip up the boards
 *                         genuinely curves.
 *   the side boards       the spine's greatest y leaves 4.94 ft to the dasher; the
 *                         arrowhead's outermost corner leaves 3.35 ft.
 *   the faceoff circle    the whole route stays 17.49 ft from the dot or further, and so
 *                         does every corner of the arrowhead — 2.3 ft outside the painted
 *                         outer edge at 15.175.
 *   the hash marks        the tip is 6.2 ft up-ice of the near hash mark's centreline at
 *                         x = 66.21 (the figure switching_positions.mjs measured), so it
 *                         does not run into them either.
 *
 * THE TWO-BAR TERMINAL AND THE PASS — the defect this layout exists to fix, and the
 * reason three coordinates moved rather than one.
 *
 * ⚠️ THIS SPEC PREVIOUSLY CLAIMED THE TWO DO NOT MEET, IN THESE WORDS: "Neither meets the
 * second opponent's pressure route (50, 10) -> (45, 25): route A's intersection with that
 * line falls past the end of it." THAT MEASURED THE INTERSECTION OF TWO INFINITE LINES.
 * The mark that collides is not the route's spine — it is the two-bar END GLYPH, which is
 * separate ink drawn ACROSS the route, and the question is the distance from that glyph to
 * the pass. It is the fifth time a clearance in this repository has been stated against
 * the wrong object. MEASURE POINT-TO-SEGMENT, FROM EVERY DRAWN POINT OF THE MARK.
 *
 * What was actually drawn: `bars2` puts a bar of half-length
 * `clamp(len * 0.30, 1.2, 2)` across the terminal tangent, and a second one set back by
 * `clamp(len * 0.22, 0.9, 1.4)`. At len 15.81 that is barHalf 2.0, so the near bar ran
 * from (43.10, 24.37) to (46.90, 25.63). Signed distances to the pass spine (42, 32) ->
 * (60, 6): the bar's CENTRE -1.52, one of its ends +0.40 — THE SIGN FLIPS, so the bar
 * crossed the pass — and the second bar's end sat at +0.008 ft, dead on the line. The two
 * marks rendered as one lattice, and at 360 px as a smudge. The caption tells the reader
 * to read that mark, so this was the caption's own subject being illegible.
 *
 * WHY MOVING THE TIP ALONE CANNOT FIX IT, and why the reviewer's suggested (44, 28) makes
 * it WORSE. The bar is drawn across the route, and the route and the pass leave the
 * carrier on bearings 14.7 degrees apart, so the bar sticks out almost square into the
 * pass. The clearance available at a tip d feet from the carrier is about
 * `d * sin(theta) - barHalf * cos(theta)`, and with theta fixed at 14.7 degrees no d that
 * leaves a route long enough to read gets past about 1.7 ft. (44, 28) is 0.63 ft from the
 * pass spine against the old 1.52 — nearer, not further.
 *
 * ⚠️ SO THETA IS THE ONLY REAL LEVER, AND THETA IS SET BY WHERE THE OTHER TWO PLAYERS
 * STAND. A sweep over the second opponent, the teammate and the tip — requiring 2.5 ft
 * from every bar point to the pass, the teammate within 13 ft of the opponent, the pass
 * clear of the first defenceman's triangle ink by 2 ft and of the second opponent's circle
 * by 2, and both routes and the arrowhead off the faceoff paint — returned no solution at
 * all with the tip 7.6 ft short of the carrier, and none with the teammate inside 12 ft
 * of the opponent. The tension is structural rather than incidental: the teammate is open
 * BECAUSE the second man left him, so the ice he is standing in lies beyond that man from
 * the carrier, and a pass to it necessarily runs close to him.
 *
 * WHAT THE LAYOUT COSTS AND WHAT IT BUYS. The opponent moved (50, 10) -> (45, 7), the
 * teammate (60, 6) -> (57.5, 8), and the tip from 7.6 to 12.0 ft short of the carrier.
 * Theta is now 26.0 degrees and the tip is further out, and the formula above wants both:
 * 12 * sin(26.0) - 2 * cos(26.0) = 3.46. Every drawn point of both bars is at least 3.46 ft from the
 * pass spine — 2.71 ft of white ice once the pass's 0.7 stroke and the bar's 0.8 are
 * counted — and the nearest bar point to the end-zone dot is 23.62 ft, so the mark crosses
 * no paint. The bars clear the chip by 12.16 ft. The price is the teammate at 12.54 ft
 * from the opponent rather than 10.77, which is still inside the 14.42 this spec rejected.
 *
 * DO THE ROUTES CROSS EACH OTHER? A and B share their start and diverge immediately, one
 * down to (54.24, 13.04) and one up to (60, 37).
 */
const TWO_PASS = { from: TWO_YOU, to: { at: 'top-of-circle:right', dx: 0.24, dy: -8.96 }, kind: 'pass' };  // (54.24, 13.04)
const TWO_CHIP = { from: TWO_YOU, to: TWO_CHIP_TO, kind: 'pass', bow: 5 };

const youCannotBeatTwo = {
  id: 'you-cannot-beat-two',
  title: 'You cannot beat two',
  owner: OWNER,
  half: true,
  width: 900,

  // NOT NUMBERED. The two puck routes are alternatives and not a sequence, and the second
  // defender's arrival is simultaneous with both. Numbering them would assert an order the
  // section does not have — the same reason corner-escape-routes leaves its two escapes
  // unnumbered.

  caption:
    'The moment a second defender arrives, drawn in the attacking end with the opposition net at ' +
    'the right. You have the puck wide, one defenceman is already on you, and a second opponent is ' +
    'closing from the middle of the ice — his route ends in two short bars rather than an ' +
    'arrowhead, which in this notation means he arrives and contains rather than carrying on ' +
    'through you. ' +
    'You can beat one player. You cannot beat two, and pretending otherwise is how a two-on-two ' +
    'becomes a rush the other way. So both of the drawn options are puck options rather than moves. ' +
    'One is the pass to the teammate the second defender\'s arrival has left open — he has just ' +
    'vacated that ice, which is the whole reason the teammate is open, and why the two are drawn ' +
    'near each other. The other is the chip into the space behind them, up the boards past the ' +
    'first defenceman. There is a third option in this section and it is not drawn: protect the ' +
    'puck, take the contact and wait for support. Standing still has no symbol here, and an ' +
    'unmarked absence would have read as a two-item list. ' +
    'Read this as one instant and not as a promise. Whether the second man has really left somebody ' +
    'open depends on who else is on the ice, and none of that is drawn — the teammate is placed to ' +
    'show what "left open" means, not to say he will be there. What is not on the list, in any ' +
    'version of it, is a third move: every extra move is another moment the puck is exposed and ' +
    'another chance for a stick to arrive. The two opponents are drawn as a defenceman and a ' +
    'forward because shapes had to be chosen and this notation has no neutral one; the section says ' +
    'only that a second defender is arriving. ' +
    '⚠️ And protecting is a way to buy a second, not a place to live: every second you hold the ' +
    'puck under pressure another checker is arriving. If this drifts to the boards, the override in ' +
    'this document outranks all of it — never turn your back to the wall and never duck, and ' +
    'neither prohibition is a rule for fast checkers only. Skates parallel to the wall, forearm and ' +
    'hip, head up and chin off your chest.',

  describe:
    'The attacking half of the rink, the opposition net at the right and their goaltender in the ' +
    'crease. An own-team forward, an open circle, has the puck wide toward the top of the picture, ' +
    'inside the blue line, with the puck drawn as a small solid dot on the boards side of him. An ' +
    'opposition defenceman, a solid triangle, stands about ten feet away, up-ice of him and a ' +
    'couple of feet nearer the middle of the ice. A second opposition player, a solid circle, ' +
    'stands out in the middle of the ice, ' +
    'with a plain route running up toward the carrier that stops about twelve ' +
    'feet short of him and ends in two short bars rather than an arrowhead. A second own-team forward stands in ' +
    'the middle of the ice, about twelve and a half feet from where that opponent is, in the ice ' +
    'he has left. ' +
    'Two dashed puck routes leave the carrier and go different ways: one down and across toward ' +
    'that teammate, ending about six feet short of him, and one curving up and out, round the ' +
    'boards side of the defenceman, finishing in ' +
    'open ice near the wall about ten feet behind him. The carrier has no route of his own. No third route is drawn, and no ' +
    'region is shaded.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: 1 } },   // (87, 0)
    // ⚠️ A SPEC ONCE PREDICTED WHERE THESE FOUR LABELS WOULD LAND AND WAS WRONG ABOUT ALL
    // OF THEM. That prediction is not restored here, because the players it reasoned about
    // have since moved. MEASURE THE PLACER'S OUTPUT; do not reason about its offsets.
    // Read out of `playSvg`'s own output at the current coordinates: 'the first' takes
    // (+13, 0) to (65, 30) and lies wholly inside the faceoff circle — every corner
    // between 7.0 and 14.8 ft from the dot against a 15 ft radius — so it crosses the arc
    // nowhere; 'the second' takes (0, -7.5) to (45, -0.5); 'you' takes (-9, -4) to
    // (33, 28); 'open' takes (0, -7.5) to (57.5, 0.5), whose nearest corner is 21.4 ft
    // from the dot. None of the four boxes lands on a painted line.
    //
    // ⚠️ THE TEAMMATE'S LABEL READ 'left open' AND HAD TO BE SHORTENED, and the reason is
    // a placer interaction rather than a wording preference. At fourteen characters its
    // box collided with 'the second' at the (0, -7.5) slot, the placer's eleventh choice
    // was (+13, 0) — out to (70.5, 8) — and there the box straddled the faceoff circle's
    // arc and read as a name for the ice inside it. Four characters frees the slot
    // directly under the glyph. The phrase the label was carrying is in the caption, in
    // full, twice.
    //
    // ⚠️ `A2` WAS ON THE SECOND OPPONENT AND WAS BACKWARDS, for the reason given on the
    // checker in diagram 1: the style guide reserves `A1 A2` for attackers, the reader is
    // the attacker here, and this glyph is a checker. Worse, the two opponents doing the
    // same job in one picture read `D` and `A2`. Both are now the sections' own generic
    // vocabulary. The teammate's `F2` went with it — `F1` `F2` `F3` name three forwards
    // whose roles this section never sets up, and a lone `F2` beside two other circles
    // asserted a numbering that is not in the prose.
    { id: 'D', team: 'opp', pos: 'D', at: TWO_D1,     label: 'the first' },
    { id: 'F', team: 'opp', pos: 'F', at: TWO_SECOND, label: 'the second' },
    { id: 'F', pos: 'F', at: TWO_YOU,  label: 'you' },
    { id: 'F', pos: 'F', at: TWO_MATE, label: 'open' },
  ],

  routes: [
    { from: TWO_SECOND, to: TWO_SECOND_TO, kind: 'pressure' },
    TWO_PASS,
    TWO_CHIP,
  ],

  puck: TWO_PUCK,
};

export default [puckOnTheFarSide, wherethePuckIs, youCannotBeatTwo];
