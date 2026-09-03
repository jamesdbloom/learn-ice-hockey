/**
 * Diagrams for content/hockey-iq/risk_management.md.
 *
 * The section is the source of truth. Every region and every player below is one
 * its prose places, and where the prose hedges, the caption hedges.
 *
 * WHY THIS DOCUMENT GETS A MAP AND TWO PLAYS, AND NOTHING ELSE. Its subject is
 * *where on the ice a mistake costs what*, which is the one thing the rink
 * primitives draw directly. Checked, section by section, before writing anything:
 *
 *   "Risk is a function of location" ... THE RISK MAP below. Nothing in the corpus
 *                                       draws the cost gradient; it is this
 *                                       document's own table and its spine.
 *   "The second test: who is behind
 *    you?" ............................ THE PINCH PAIR below. `forecheck-pinch`
 *                                       draws the pinch's EXECUTION — the race to
 *                                       the wall — and says in passing that
 *                                       holding the middle "is what makes a failed
 *                                       pinch a two-on-one rather than a
 *                                       breakaway". It does not draw the count
 *                                       behind the puck, which is what this
 *                                       section teaches and the only reason these
 *                                       two exist.
 *   §1, D-to-D through the slot ....... `breakout-d-to-d`, already referenced at
 *                                       risk_management.md:148 before this file
 *                                       existed. Referenced, not redrawn.
 *   §4, both defencemen to the puck ... `defensive-zone-support`,
 *                                       `loose-puck-who-goes`. Referenced.
 *   §"Decision hierarchies by zone" ... every option in the defensive-zone list has
 *                                       a picture in breakouts.mjs
 *                                       (`breakout-up`, `-wheel`, `-d-to-d`,
 *                                       `-reverse`, `-rim`); the neutral-zone and
 *                                       offensive-zone lists are drawn by
 *                                       zone_entries.mjs and offensive_zone_play.mjs.
 *                                       A hierarchy is an ORDER, and an order is
 *                                       not a picture.
 *
 * WHAT THIS DOCUMENT WANTS DRAWN AND CANNOT BE, recorded so the next author does
 * not spend the afternoon rediscovering it:
 *
 *   "Why north turnovers are so much worse than south turnovers". The asymmetry is
 *   between two SEQUENCES — a turnover that is the counter-attack, against one
 *   separated from it by four or five seconds. A still picture has no time axis,
 *   and two turnovers drawn on one sheet read as one play with two pucks. The
 *   risk map carries the half of it that is spatial (the gradient runs along the
 *   ice) and the caption says outright that direction is not drawn.
 *
 *   The expected-value table. Four numbers with an explicit "take the ranking, not
 *   the decimals" caveat attached, from two European professional leagues. A
 *   picture of them would be a chart, not a rink, and the corpus's notation has no
 *   vocabulary for one.
 *
 * ASSUMES, and dies if any of them moves: site/src/data/rink.json AS ON DISK IN
 * THIS WORKING TREE — blue-line (25, 0), centre-point (25, 0), point (25, +/-20),
 * neutral-dot (20, +/-22), top-of-circle (54, +/-22), faceoff-dot (69, +/-22),
 * half-wall (69, +/-38.5), boards (69, +/-42.5), high-slot (69, 0), goal-line
 * (89, 0), behind-net (94, 0), crease (86, 0), sheet 200 x 85 with a 28 ft corner
 * radius — and rink.mjs's glyph radius 2.9 with its 1.95 halo stroke (ink to
 * 3.875 ft), and ARRIVAL = { glyph: 2.9, noArrow: 9.0 }. Every clearance below is
 * stated against those numbers.
 *
 * PERSONNEL IS NOT SHAPE. The published key has no neutral glyph — a circle is a
 * forward and a triangle a defenceman — so every glyph is a personnel claim
 * whether the diagram wants to make one or not. The pinch pair is the one place
 * this document names positions itself ("your centre", "a defenceman joining the
 * attack"), so the glyphs follow its words; where it names nobody, the caption
 * says what was drawn and that it is not part of the teaching.
 */

const OWNER = 'content/hockey-iq/risk_management.md';

/* ------------------------------------------------------------------ *
 * Shared construction
 * ------------------------------------------------------------------ */

/**
 * Points along the board arc in one corner, as offsets from a goal line.
 *
 * A region that runs to the wall has to follow the wall. Drawn straight across the
 * corner the polygon spills over the dasher — nothing clips a zone, the renderer
 * appends them at the top level of the SVG — and drawn short of it, it reads as a
 * region that stops before the boards, which is a claim this document does not
 * make.
 *
 * rink.json gives the sheet as 200 x 85 with a 28 ft corner radius and puts the
 * goal line 11 ft from the end boards, which fixes the arc completely: the centre
 * of curvature is 28 ft in from the end boards and 28 ft in from the side boards,
 * i.e. at (72, 14.5) with the origin at centre ice.
 *
 * ⚠️ THIS IS THE SECOND COPY OF THIS FUNCTION IN THE CORPUS. `boardArc` in
 * rink_map_and_glossary.mjs is the first, it is not exported, and no diagram
 * module imports anything. Two modules deriving one arc is exactly the shape
 * check_zones.py's own header records ("three modules define their own
 * HIGH_SLOT"), so it is written down here rather than left to be discovered: if a
 * third is ever needed, export the first instead of writing this one again.
 *
 * ⚠️ THE STEP IS ONE FOOT AND WAS FOUR, AND THE FOUR WAS VISIBLE IN THE RENDER.
 * Stepping x uniformly is wildly non-uniform in ARC LENGTH, because dy/dx runs to
 * infinity as the arc turns into the end boards. The last chord of a 4 ft walk,
 * x 96 to 100, spans 31 degrees of the quarter-circle and falls 1.02 ft inside the
 * true arc; the first spans 8.2 degrees and falls 0.07 ft inside it. On
 * `the-risk-map` that shortfall rendered as a white wedge of unshaded ice in each
 * corner of "their end" with the region's DASHED EDGE drawn straight across it —
 * the fill stopping short of the boards, and the dashes asserting a boundary where
 * the only boundary is the wall. It never showed in rink_map_and_glossary.mjs
 * because those zones carry `stroke: 'none'`. At 1 ft the worst chord falls 0.25 ft
 * inside the arc, less than the 0.35 ft stroke that draws it.
 *
 * ⚠️ AND THE STEP MOVES A ZONE LABEL, WHICH IS NOT OBVIOUS FROM ANYTHING HERE. The
 * renderer places a zone label at the polygon's VERTEX MEAN rather than its area
 * centroid, so how densely this function samples is part of where that label lands:
 * "their end" sat at x 84.11 with eight arc points a side and sits at 85.43 with
 * twenty-nine, because the two vertices at x 69 carry proportionally less of the
 * mean. The area centroid is 83.0 and does not move at all. Do not change this step
 * without re-checking that label against the end boards — the arithmetic is under
 * the "their end" zone below.
 *
 * @param {number} sy  +1 for the side the diagram calls "right", -1 for the other
 * @param {number} ex  +1 for the near end (positive x), -1 for the far end
 */
function boardArc(sy, ex) {
  const R = 28, CX = 72, CY = 42.5 - 28;      // 14.5
  const pts = [];
  for (let x = CX; x <= 100.0001; x += 1) {
    const dy = Math.sqrt(Math.max(0, R * R - (x - CX) ** 2));
    pts.push({
      at: ex > 0 ? 'goal-line' : 'goal-line::far',
      dx: +(ex * (x - 89)).toFixed(3),
      dy: +(sy * (CY + dy)).toFixed(3),
    });
  }
  return pts;
}

/* ------------------------------------------------------------------ *
 * 1 - The risk map                            (section "Risk is a
 *     function of location", and its table)
 * ------------------------------------------------------------------ */

// THE SHADING IS A GRADIENT, AND THAT IS A DEVICE RATHER THAN THE CORPUS'S
// NOTATION, so it is declared in the caption and in the <desc> instead of being
// left for a reader to infer. The renderer offers exactly two fills — `danger`
// red for "never move the puck through here" and the default blue for "stand
// here" — because one fill once meant both in the same document. Five grades will
// not fit in two fills, so the fill stays RED for every graded-by-cost region and
// only its ALPHA moves. Nothing new is being said with colour: red is still cost,
// blue is still the ice you want.
//
// Alphas, and the composite arithmetic, because the slot is drawn OVER the zone:
//   HIGH        0.15                      your own end, and the middle of the NZ
//   CATASTROPHIC 0.21 over HIGH           1 - (1 - 0.15)(1 - 0.21) = 0.33
//   MODERATE    0.09                      their blue line
//   LOW         the default blue          their end
// So the four red shades a reader actually sees are 0.33, 0.15, 0.15, 0.09 — and
// the two 0.15s are the point of the picture rather than an accident: this
// document grades your own end and the middle of the neutral zone THE SAME.
//
// ⚠️ THE GRADIENT DOES NOT SURVIVE GREYSCALE, AND THE CAPTION USED TO TELL THE
// READER TO READ THE SHADES. Sampled off the delivered PNG (Rec. 709 luma, flat
// patches, background white 255):
//
//   your own slot   Catastrophic  188.8      their end        Low       230.2
//   your own zone   High          225.3      their blue line  Moderate  236.8
//   the middle      High          225.3
//
// The four REDS do rank correctly and keep ranking correctly in greyscale. The
// break is at the red/blue boundary: "their end" is the one region graded LOW and
// the one region drawn in blue, and a 0.14 blue prints DARKER than a 0.09 red —
// so the cheapest ice on the sheet reads as more dangerous than the band at their
// blue line, and sits 4.9 luma levels from the two HIGH regions. That inversion
// cannot be alpha-tuned away: over white, red at alpha a lands at 255 - 197.7a and
// blue at 255 - 177.1a, so fitting MODERATE between HIGH and the blue LOW needs an
// alpha inside 0.125-0.15 — five grades inside a 30-level band, three of them
// within 5 levels of each other. A greyscale reader cannot rank that however it is
// tuned. So the ordering is carried by the caption's WORDS, and the caption no
// longer asks anyone to rank the shades. See the caption's closing sentences.
const HIGH = 'rgba(200,16,46,0.15)';
const CATASTROPHIC = 'rgba(200,16,46,0.21)';
const MODERATE = 'rgba(200,16,46,0.09)';

const theRiskMap = {
  id: 'the-risk-map',
  owner: OWNER,
  half: false,
  width: 1100,

  caption:
    'A map of what a mistake costs, by where on the ice you make it. Your own net is at the ' +
    'left of the whole sheet, the attack moves left to right, and the shading is a cost ' +
    'gradient rather than anything painted on the ice: the darker the red, the more a ' +
    'turnover there is likely to cost. Grade any patch of ice by one question — if I lose ' +
    'the puck here, how many seconds and how many bodies stand between the turnover and a ' +
    'shot on my own net? Darkest is your own slot, the ice in front of your own net between ' +
    'the faceoff circles, where a turnover is not a chance against but very nearly a goal ' +
    'against: the opponent gets the puck with your goaltender unset and your defenders facing ' +
    'the wrong way, and no recovery time at all. Close to half of all NHL goals came from the ' +
    'inner slot alone over a three-year five-on-five sample, on Sportlogiq tracking that is ' +
    'not public and cannot be re-derived. Your own end as a whole is one shade lighter — ' +
    'everybody is home, which helps, but the puck is thirty to fifty feet from your net and ' +
    'one pass from the slot. The band across the middle of the neutral zone carries exactly ' +
    'the same shade as your own end, and that is the picture’s point: a turnover at centre ice ' +
    'catches two or three of your players skating the wrong way at full speed, so your own end ' +
    'is dangerous but organised while the middle of the neutral zone is dangerous and ' +
    'disorganised. The narrow band just inside their blue line is lighter again — a turnover ' +
    'there does not threaten your net at once, but it starts a rush the other way against a ' +
    'defence that has been supporting the attack, and the cost scales with how many of your ' +
    'players are ahead of the puck. Their end, shaded blue rather than red, is the cheapest ' +
    'ice on the sheet to make a mistake in: you are a hundred and fifty feet or more from your ' +
    'own net with all five teammates between the puck and danger, which is why it is where you ' +
    // NO WARNING GLYPH ON THIS RUN, AND THAT IS THE FIX RATHER THAN AN OVERSIGHT.
    // `captionNodes()` in site/src/plugins/remark-corpus.mjs promotes from the first ⚠️
    // to the END of the caption with no closing delimiter, so a glyph here ambered all
    // 1,243 characters that follow — and not one of them is a hazard. What follows is a
    // coaching-consensus disclosure, a negative existence claim, a greyscale/e-ink
    // legibility caveat, an undefined-edges caveat and a note about turnover direction.
    // Round 58 verified the invariant that no tactical prose is ambered anywhere; painting
    // honest limits in the safety colour is how a reader learns to discount the amber that
    // does matter. Every word below is unchanged — only the glyph went.
    'should be at your most creative. Three honest limits, and the first one matters most. ' +
    'This ordering is coaching consensus, reasoned from shot danger and from how long a ' +
    'turnover takes to become a shot on your net — it is not a measured ranking, and no study ' +
    'ranking turnovers by where on the ice they happen was found for it, so take the order of ' +
    'these five regions rather than the labels on them. Take that order from the words, ' +
    'though, and not by ranking the tints against each other: the reds do run in order, but ' +
    'their end is drawn in blue rather than red, and a light blue prints darker than the ' +
    'faintest red in greyscale, on a photocopy or on e-ink. The shading is a reminder of the ' +
    'ranking and not the statement of it. Nothing here is marked on a real rink, and the ' +
    'edges are drawn only so the shading can have one: the band at their line has no defined ' +
    'depth, and the shaded ice at their end runs from the faceoff dots back to the end boards ' +
    'where the grade given is for their corners and the ice below their goal line. And a ' +
    'turnover also has a DIRECTION, which no still map can show — losing the puck while it ' +
    'travels toward your own net makes the turnover and the counter-attack the same event, and ' +
    'that costs you more than moving one region along this map does.',

  describe:
    'The full 200-foot sheet, seen from above, with no players and no routes. Your own end is ' +
    'at the left and the opposition end at the right. Four regions are shaded in red and one ' +
    'in blue, and the four reds carry three different strengths, because two of them are ' +
    'deliberately the same. Your whole defensive zone, from the end boards at ' +
    'the left to your own blue line and following the two board arcs into the corners, carries ' +
    'a medium red. Inside it, a much darker red rectangle runs down the middle of that zone ' +
    'from the tops of the two faceoff circles to the front edge of the goal crease, its sides ' +
    'on the inner edges of the circles: it is labelled "your slot". A band of the same ' +
    'medium red as your defensive zone spans the neutral zone from blue line to blue line, its ' +
    'sides on the two faceoff-dot lines, labelled "the middle". A narrow, much fainter red band ' +
    'runs across the full width of the ice from the opposition blue line about eight feet into ' +
    'their zone. The deep end of their zone, from the boards level with their faceoff dots back ' +
    'around both corner arcs to the end boards, is shaded blue and labelled "their end". The ' +
    'ice between the faint band at their blue line and their faceoff dots is left unshaded.',

  zones: [
    {
      // YOUR OWN ZONE — the whole defensive zone, blue line to end boards, drawn
      // first so the slot can sit on top of it. Its boundary is entirely painted
      // — a blue line and the boards — which is why it carries NO dashed outline:
      // a second, dashed line drawn along a real one invites a reader to take the
      // wrong pair for the marking. Same reasoning, and the same `stroke: 'none'`,
      // as the trapezoid in rink_map_and_glossary.mjs.
      //
      // UNLABELLED, and that is a legibility decision rather than an oversight.
      // A zone label is drawn at the polygon's VERTEX MEAN, which for this
      // polygon is (-79.2, 0) — 10.7 ft from the slot's mean at (-68.5, 0), on
      // the same horizontal line. Two words about 40 ft wide would print on top
      // of each other. The blue line is painted, so the region reads without a
      // label, and the caption names it. ⚠️ A consequence worth knowing: an
      // unlabelled zone is INVISIBLE to scripts/check_zones.py, which pairs a
      // polygon with the <text> that follows it.
      points: [
        { at: 'blue-line::far', dy: 42.5 },     // (-25, 42.5)
        ...boardArc(1, -1),                     // (-72, 42.5) round to (-100, 14.5)
        ...boardArc(-1, -1).reverse(),          // (-100, -14.5) round to (-72, -42.5)
        { at: 'blue-line::far', dy: -42.5 },    // (-25, -42.5)
      ],
      danger: true,
      fill: HIGH,
      stroke: 'none',
    },
    {
      // THE MIDDLE OF THE NEUTRAL ZONE. Ends on the two blue lines; sides on the
      // two faceoff-dot lines, which is the corpus's own band — `rush-gap-and-angle`,
      // `angling-your-route`, `nz-back-off-at-the-line` and
      // `show-one-shoulder-open-the-other` all draw "the middle" that way.
      //
      // Written off `neutral-dot`, which sits 5 ft OUTSIDE the blue line in the
      // neutral zone, so dx +/-5 lands exactly on the line at the dots' own y —
      // the same construction `nz-back-off-at-the-line` uses. That ties the x to
      // the blue line and the y to the dots, so neither can drift from rink.json.
      //
      // ⚠️ THE LABEL IS "the middle" ON PURPOSE, AND check_zones.py WILL REPORT IT.
      // Three other polygons already carry that label at three different depths,
      // and the tool's own docstring records the pair as legitimate because the
      // glossary defines the middle as a DIRECTION, not a bounded region. This is
      // a fourth instance of the same accepted divergence, not a new one: the
      // sides are the corpus's sides, and only the ENDS differ, because here the
      // band is drawn across the neutral zone and nothing gives the middle a
      // length. Naming it anything else would have been a private name for a
      // region the corpus already names.
      points: [
        { at: 'neutral-dot:right:far', dx: -5 },   // (-25, 22)
        { at: 'neutral-dot:right', dx: 5 },        // (25, 22)
        { at: 'neutral-dot:left', dx: 5 },         // (25, -22)
        { at: 'neutral-dot:left:far', dx: -5 },    // (-25, -22)
      ],
      label: 'the middle',
      danger: true,
      fill: HIGH,
    },
    {
      // YOUR OWN SLOT, and this is the glossary's polygon mirrored to the far end
      // rather than one built here. `the-slot` in rink_map_and_glossary.mjs draws
      // it from the tops of the circles to the front edge of the crease, sides on
      // the circles' inner edges — 15 ft in from the dot line, i.e. y +/-7 — and
      // this document's own vocabulary section agrees: "the area in front of the
      // net between the faceoff circles". Mirroring flips the sign of every dx:
      // the near-end version reaches the crease front with dx -6 off the goal
      // line, so the far-end one reaches it with dx +6.
      //
      // Drawn AFTER the defensive zone, so the two fills composite. See the alpha
      // note above the constants.
      //
      // ⚠️ LABELLED "your slot" AND NOT "your own slot", AND THAT IS THE SAME
      // ARITHMETIC "their end" GOT AND THIS ONE DID NOT. The polygon is 29 ft long,
      // x -83 to -54, and its vertex mean is (-68.5, 0) — dead centre of it. A zone
      // label on the full sheet costs the renderer's own estimate of 3.05 ft per
      // character (`label.length * 3.2 * TXT * 0.56`, TXT 1.7), so thirteen
      // characters reserve 39.7 ft: the label ran 5 ft past the tops of the circles
      // at one end and, at the other, across the crease to within a foot of the goal
      // line, naming ice the polygon does not cover. Nine characters reserve 27.5 ft
      // and sit inside it. Measured off the delivered PNG the ink is narrower still —
      // "their end", nine characters, renders 22.5 ft wide against the 27.5 ft
      // reserved — so the estimate is the conservative one and the fit is real.
      // ⚠️ Nothing enforces this: the placer never sees a zone label's box, and no
      // checker compares a label's width to its polygon's.
      points: [
        { at: 'top-of-circle:right:far', dy: -15 },   // (-54, 7)
        { at: 'goal-line::far', dx: 6, dy: 7 },       // (-83, 7)
        { at: 'goal-line::far', dx: 6, dy: -7 },      // (-83, -7)
        { at: 'top-of-circle:left:far', dy: 15 },     // (-54, -7)
      ],
      label: 'your slot',
      danger: true,
      fill: CATASTROPHIC,
    },
    {
      // THEIR BLUE LINE. The table's row is "The offensive blue line", which is a
      // LINE, and a line cannot be shaded — so this is a band, it is drawn from
      // the line into their zone rather than straddling it, and the caption says
      // plainly that nothing gives it a depth. It stops on the far side of the
      // line rather than straddling for one reason worth stating: straddling
      // would overlap the neutral-zone band, and two graded fills composited on
      // top of each other would draw a fifth shade this document does not grade.
      //
      // Eight feet, and the boards are straight there — the corner arc does not
      // begin until |x| = 72 — so a plain rectangle to the dashers is correct
      // here in a way it is not at either end.
      points: [
        { at: 'blue-line', dy: 42.5 },              // (25, 42.5)
        { at: 'blue-line', dx: 8, dy: 42.5 },       // (33, 42.5)
        { at: 'blue-line', dx: 8, dy: -42.5 },      // (33, -42.5)
        { at: 'blue-line', dy: -42.5 },             // (25, -42.5)
      ],
      danger: true,
      fill: MODERATE,
    },
    {
      // THEIR END — the one region graded LOW, and the only one drawn in blue.
      //
      // `boards` is the datum "the boards level with the faceoff dot", x 69, so
      // the near edge is the dot line and it is named rather than measured. The
      // row it draws is "The offensive corners and below their goal line"; the
      // shading is a single quad because the corners and the ice behind the net
      // are one continuous region on this sheet and a U-shaped polygon would put
      // its own label in the hole. That means the shading also covers the ice in
      // front of their net, which the row does not name — disclosed in the
      // caption rather than silently included. The grading question answers the
      // same way there ("150-plus feet from your own net with all five teammates
      // between the puck and danger"), but the row is the row.
      //
      // Label "their end" rather than "their corners" for a reason that is pure
      // arithmetic: a zone label on the full sheet is 3.05 ft per character on the
      // renderer's own estimate, and "their corners" is thirteen of them.
      //
      // ⚠️ THE VERTEX MEAN MOVED WHEN `boardArc` WAS REFINED, and it is the vertex
      // mean rather than the area centroid that the renderer draws a label at. With
      // the old 4 ft step it was (84.11, 0); with the 1 ft step it is (85.43, 0),
      // because the two vertices at x 69 now carry less of the mean. The area
      // centroid is 83.0 either way. On the conservative 3.05 ft estimate nine
      // characters reach x 99.1, 0.9 ft inside the end boards; measured off the
      // delivered PNG the ink is 22.5 ft wide, reaching 96.7 and clearing them by
      // 3.3 ft. Both fit, and the estimate is the one to plan against.
      points: [
        'boards:right',                  // (69, 42.5)
        ...boardArc(1, 1),               // (72, 42.5) round to (100, 14.5)
        ...boardArc(-1, 1).reverse(),    // (100, -14.5) round to (72, -42.5)
        'boards:left',                   // (69, -42.5)
      ],
      label: 'their end',
    },
  ],

  // No players, no routes, no puck. This is a map, like `the-slot` and
  // `the-trapezoid`: a glyph on it would be a personnel claim about ice that is
  // being graded for everybody.
  players: [],
  routes: [],
};

/* ------------------------------------------------------------------ *
 * 2 and 3 - The pinch, judged by who is behind you
 *           (section "The second test: who is behind you?")
 * ------------------------------------------------------------------ */

// TWO PICTURES THAT DIFFER IN ONE GLYPH IN THE SPEC. The section's claim is that the SAME
// pinch is a good decision or a bad one depending on nothing the pinching player
// can see in front of him — so everything except the centre is identical between
// the two specs, and the constants below are shared for exactly that reason. If
// you change one of these, you change both pictures, which is the point.
//
// ⚠️ "NOTHING HE CAN SEE IN FRONT OF HIM" IS ABOUT THE READ AND NOT THE GEOMETRY,
// and the prose said it the geometric way until it was checked against the sheet.
// In the second picture the centre is drawn BELOW THEIR GOAL LINE, which is in
// front of the pinching defenceman in the plainest sense of the words. What is
// identical between the two is the puck, the carrier on the wall, and his own
// chance of getting there first. risk_management.md read "everything in front of
// the pinching defenceman is identical in both", which the picture contradicts;
// it now names what he can SEE of the puck and the man on the wall. Four things
// differ visibly between the pair, not one — the centre's position, his route, the
// partner's label, and where the placer puts "pinches" — and only the first is a
// decision this file makes.
//
// WHAT THE SECTION ACTUALLY SAYS, quoted so a reviewer does not have to go and
// find it: "A pinch with your centre high in the zone behind you is a good pinch
// even if you lose the puck, because the centre becomes the third defender and
// the worst case is a 2-on-2. The same pinch with your centre below the goal line
// is a bad pinch even if you win the puck, because you were one bad bounce from a
// 2-on-1 and you did not know it." And its definition, from the same section: a
// pinch is "stepping down from the offensive blue line to keep a puck in their
// zone."

// The pinching defenceman, at the strong-side point. `point:right` is the same
// anchor `forecheck-pinch` uses for the defenceman who pinches, deliberately: two
// documents drawing the same act from the same spot is what stops a reader
// learning two pinches.
const PINCH_D = 'point:right';                                  // (25, 20)

// Where the pinch finishes: on the wall, 8.14 ft short of the opposing carrier's
// anchor, which clears his 3.875 ft of ink by 4.3 ft.
//
// `pressure`, which ends in the key's two bars and NOT an arrowhead. A bar says
// arrive and contain; an arrowhead says keep going through. A pinch is a seal on
// the wall, this section teaches no contact at all, and a bar-ended route is the
// safe mark by construction — ARRIVAL's two forms are both scoped to arrow-ended
// kinds precisely because a pressure route aimed at its target fails form (a) by
// construction. `forecheck-pinch` uses an arrow instead and is right to: its
// caption teaches an arrival test ("if you can't arrive on contact, don't go")
// and carries the body-checking scope that goes with one. This pair teaches the
// count behind the puck, so it does not.
//
// ⚠️ 5.5 FT OFF THE BOARDS RATHER THAN 0.5, AND THAT WAS FOUND BY RENDERING.
// At (50, 38) with bow 3 the two terminal bars — 2 ft either side of the tip,
// across travel — were drawn into the top dasher, so the mark that carries the
// whole meaning of the route half disappeared into the wall. `forecheck-pinch`
// finishes its pinch 5 ft off the boards for its own reasons and arrives at the
// same place.
const PINCH_TO = { at: 'boards:right', dx: -19, dy: -5.5 };     // (50, 37)

// The partner, holding the middle at the line. `point:left` with dy +12 is the
// anchor `forecheck-pinch` gives its weak-side defenceman, labelled there "the
// safety" — the same player doing the same job, so the same spot.
const PARTNER = { at: 'point:left', dy: 12 };                   // (25, -8)

// The centre, high in the zone behind the pinch. NOT `forecheck-pinch`'s F3_HIGH
// at (54, 0): that is the top of the circles, which is 4 ft DEEPER than this
// pinch finishes, and this section's words are "high in the zone BEHIND you". At
// (42, 10) he is 17 ft inside the blue line and 8 ft up-ice of the pinch's tip,
// so the picture says what the sentence says.
const CENTRE_HIGH = { at: 'centre-point', dx: 17, dy: 10 };     // (42, 10)

// His recovery, toward the point his defenceman has just left. It stops 9.22 ft
// short of that defenceman's glyph, which is still drawn on the spot he is in the
// act of leaving — the same endpoint, to the foot, that `forecheck-pinch` gives
// its F3 rotating back into the same vacated point, because it is the same job.
//
// ARRIVAL, measured against rink.json as on disk in this working tree: the route
// runs (42, 10) -> (31, 13), bow 0, so the terminal tangent is the chord,
// (-0.9648, 0.2631). Every opposition skater is BEHIND the tip — dots -19.34 for
// the carrier and -26.66 for the climber — so the route is out of scope in both
// forms, and its tip is 37.14 ft from the nearer of them. The opposing
// goaltender is 57.5 ft away and excluded by form (a) regardless.
const CENTRE_TO = { at: 'point:right', dx: 6, dy: -7 };         // (31, 13)

// The centre in the other picture: below their goal line, past the back of their
// net. 5 ft past the goal line and 8 ft off the middle, so he is clear of the goal
// frame and of the crease, and unmistakably below the line.
//
// ⚠️ THIS WAS `dx: -2` AND THE SOURCE COMMENT SAID FIVE FEET ANYWAY. `behind-net`
// is (94, 0) and the goal line is at x 89, so dx -2 put him 3 ft below the line,
// not 5 — and the renderer draws the goal frame as a rect 3.33 ft deep from the
// goal line, so 92 is level with the net rather than behind it. Both this comment
// and the `describe` said "five feet" and "behind the opposition net". The picture
// was worse than the arithmetic: a glyph is opaque out to 3.875 ft, so at x 92 his
// ink ran from 88.1 to 95.9 and the goal line cut straight through it — on the one
// picture of the pair whose ONLY difference from the other is whether this player
// is below that line. At the anchor itself his ink runs 90.1 to 97.9: entirely
// below the line, and still 2.1 ft off the end boards. The trapezoid's dashed
// side passes at y -12.36 there, clearing his ink by 0.49 ft.
const CENTRE_DEEP = { at: 'behind-net', dy: -8 };               // (94, -8)

// The opposition. Their carrier is on the wall trying to move the puck up it —
// which is the puck a pinch exists to kill.
const OPP_CARRIER = { at: 'half-wall:right', dx: -11 };         // (58, 38.5)

// ONE OF THEIR FORWARDS, already released above the puck and heading for the exit.
// Drawn because without an opponent going the other way, a picture of players
// standing still behind the puck shows nothing: the whole claim is what the count
// becomes when the pinch is beaten. `forecheck-pinch` draws its one climbing
// winger for the same reason and says so.
//
// ⚠️ THERE WERE TWO, AND THE SECOND MADE THE PICTURE CONTRADICT ITS OWN CAPTION.
// A third opposition forward, then called OPP_A, was drawn at (46, -4) with a
// `skate` route to (34, -2) and the label "already climbing". With him on the
// sheet, a reader who counts gets the carrier plus two climbers against the
// partner and the centre — a THREE-on-two — under a caption reading "the worst the
// failure can produce is two of their forwards against two of his teammates",
// beside prose and a `Risk:` fact that both say 2-on-2 and 2-on-1. This is the one
// pair in the document whose entire teaching IS a count, and the caption invites
// the reader to run it. `describe` had even recorded the discrepancy in words —
// "two more forwards on the lower, weak side" — and nobody read it against the
// caption.
//
// ⚠️ THE PICTURE CHANGED AND THE WORDS DID NOT, because the words are the owner.
// The count is the section's own claim and is repeated in its facts block, and the
// carrier cannot be excused from it to make three glyphs add up to two: a carrier
// who beats a pinch IS the rush. `forecheck-pinch` draws the same situation with
// one climbing forward.
//
// ⚠️ AND IT REMOVED THE FILE'S NARROWEST ARRIVAL MARGIN. OPP_A's tip sat 10.82 ft
// from the partner's anchor against ARRIVAL.noArrow of 9.0 — 1.82 ft of headroom,
// and the reason this file said an edit lengthening a route would fail the build.
// The narrowest margin is now 21.93 ft, below.
//
// DRAWN ON THE WEAK SIDE, WHICH IS WHERE A BREAKOUT RELEASES HIM AND ALSO THE ONLY
// PLACE HE FITS. `forecheck-pinch` puts its one climbing winger at
// `top-of-circle:left` dx -6, dy -4, and this is that anchor exactly. The stronger
// reason is a defect found by rendering: a climbing forward drawn on the PUCK
// side, in the upper half, sits within a few feet of the centre and their two
// arrowheads land on top of each other, which reads as one player with two routes.
// An early version had them 8.9 ft apart, and the picture was unreadable there.
//
// ARRIVAL, measured against rink.json as on disk in this working tree. A `skate`
// route owned by the OPPOSITION, so the players at risk are the reader's own — the
// pinching defenceman at (25, 20), the partner at (25, -8) and, in the first
// picture, the centre at (42, 10).
//   (48, -26) -> (34, -28), bow 0, terminal tangent (-0.9899, -0.1414).
//     partner:    21.93 ft from the tip, dot +6.08 so ahead, miss 21.07 ft.
//     pinching D: 48.83 ft, dot +2.12, miss 48.79 ft.
//     centre:     dot -13.29, i.e. BEHIND the tip and out of scope in both forms.
//   The tip is over ARRIVAL.noArrow by 12.93 ft and every miss over ARRIVAL.glyph
//   by at least 18 ft. The centre's own route is the other arrow in the first
//   picture and finishes 37.14 ft from the nearest opposition skater.
//
// ⚠️ THIS LINE WAS MOVED ONCE AND THE FIRST VERSION IS RECORDED RATHER THAN
// QUIETLY REPLACED. It first ran (50, -16) -> (36, -12), whose terminal tangent
// passes 0.82 ft from the partner's anchor — through his body, and the tightest
// tangent in the corpus if it had shipped. The distance test would not have caught
// it: the tip was 11.7 ft away, comfortably outside ARRIVAL.noArrow. Form (a) is
// the one that finds this shape, and it is the advisory one.
const OPP_CLIMBER = { at: 'top-of-circle:left', dx: -6, dy: -4 };     // (48, -26)
const OPP_CLIMBER_TO = { at: 'top-of-circle:left', dx: -20, dy: -6 }; // (34, -28)

// 5.83 ft off the carrier's anchor, clear of his 3.875 ft of ink, and on the
// net side of him — he has just received it and has not moved it yet.
const PUCK = { at: 'half-wall:right', dx: -6, dy: -3 };         // (63, 35.5)

// The three sentences both captions must carry, written once so the pair cannot
// drift apart. The corpus's characteristic caption defect is a qualification the
// prose keeps and the caption sheds; the characteristic PAIR defect is one half
// of a pair keeping it.
// ⚠️ THE GLYPH LIVES INSIDE THIS CONSTANT, NOT AT THE JOIN IN EACH CAPTION, AND THE
// ORDER OF THESE FOUR SENTENCES IS LOAD-BEARING. It used to sit at the front, so the
// amber run was all 954 characters of the block: two coaching choices, a scoreboard
// hedge and a note about which glyphs are drawn, with the ONE contact limb buried in
// the middle of them. `captionNodes()` runs the band to the end of the caption, so the
// only way to amber the safety limb alone is to put it LAST and open it with the glyph.
// Nothing was cut: the wingers/glyph-count sentence moved from last to first, where it
// picks up the count both captions have just made, and "And no contact is drawn" still
// follows the scoreboard sentence exactly as it did before, so its "And" still lands.
// "Three things this cannot promise" still fronts three: the coaching choice, the
// scoreboard, and the contact limb.
const PINCH_CAVEATS =
  'The two wingers are not drawn, because what is being counted here is the ' +
  'players behind the puck: the defenceman who pinches has taken himself out of that count the ' +
  'moment he goes, which leaves his partner and his centre. ' +
  'Three things this cannot promise. Which forward stays high behind a pinch is a coaching ' +
  'choice and not a law of hockey: some teams give that job to the centre, some to whichever ' +
  'forward is highest when the puck arrives, and some slide the weak-side defenceman across ' +
  'instead — so find out what your team plays. Whether to pinch at all moves with the ' +
  'scoreboard and the clock, so a team protecting a one-goal lead late will wave off a pinch ' +
  'it would take in a tied first period. ⚠️ And no contact is drawn: the pinching defenceman’s ' +
  'route ends in two bars, meaning arrive and contain, on a patch of the wall rather than on a ' +
  'player, and what an arrival like that may end in depends on whether your league allows body ' +
  'checking at all.';

const PINCH_DESCRIBE_COMMON =
  'The attacking half of the rink, the opposition net at the right, the attack having been ' +
  'moving left to right. Three opposition players are drawn as solid glyphs: a forward on the ' +
  'upper half-wall, about eleven feet up-ice of the faceoff dot, with the puck at his stick; a ' +
  'second forward on the lower, weak side of the ice, just up-ice of the lower faceoff circle, ' +
  'with a plain arrowed route heading back out toward the blue ' +
  'line; and their goaltender in his crease. Own players are open glyphs: a defenceman at the ' +
  'upper point whose route curves down the boards and ends in two short bars across the line, ' +
  'about eight feet short of the puck carrier, and a second defenceman at the blue line on the ' +
  'lower side, shaded into the middle of the ice. ';

const pinchCentreHigh = {
  id: 'pinch-centre-high',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'A pinch at the offensive blue line with the centre high in the zone behind it — the ' +
    'arrangement that makes a pinch defensible. A pinch is stepping down from the offensive ' +
    'blue line to keep a puck in their zone, and the defenceman here has left the point to kill ' +
    'a puck their player is trying to move up the wall. What makes it a good pinch is not ' +
    'whether it works. It is what is behind it if it does not: his partner has held the middle ' +
    'at the line and his centre is high in the zone rather than deep, so the centre becomes the ' +
    'third defender and the worst the failure can produce is two of their forwards against two ' +
    'of his teammates — a rush a team can defend. That is the question to run before you jump a ' +
    'lane, pinch or activate: not only "am I right?" but "what happens if I am right and I still ' +
    'miss it?" A pinch this well backed is a good decision even when you lose the puck. ' +
    PINCH_CAVEATS,

  describe:
    PINCH_DESCRIBE_COMMON +
    'A centre is drawn on the upper side of the middle of the ice, about seventeen feet inside ' +
    'the blue line and higher up the zone than the point where the pinching defenceman’s route ' +
    'ends, with a plain arrowed route running back toward the point his partner has vacated and ' +
    'stopping about nine feet short of that defenceman’s glyph. So the pinching defenceman has ' +
    'committed himself to the wall, and the two own players left to defend a rush the other way ' +
    'are his partner and his centre — against the carrier and the one forward climbing with him.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: 1 } },        // (87, 0)
    // A forward: the player carrying a puck up his own wall out of his own end is
    // a skater the section does not name, and a wall carrier on a breakout is a
    // winger far more often than a defenceman. The caption does not teach off it.
    { id: 'A1', team: 'opp', pos: 'F', at: OPP_CARRIER, label: 'up the wall' },
    { id: 'A2', team: 'opp', pos: 'F', at: OPP_CLIMBER, label: 'already climbing' },
    // Triangles, because the section says defencemen: a pinch is a defenceman
    // stepping down from the blue line, and "the same pinch" is set against his
    // partner staying home.
    { id: 'D',  pos: 'D', at: PINCH_D, label: 'pinches' },
    { id: 'D',  pos: 'D', at: PARTNER, label: 'holds the middle' },
    // A circle, and labelled C, because the section names him: "your centre high
    // in the zone behind you".
    { id: 'C',  pos: 'F', at: CENTRE_HIGH, label: 'high in the zone' },
  ],

  // NOT `numbered`. Nothing here is a sequence: the picture is the instant the
  // decision is made, with their forwards already leaving. Numbering would say
  // the pinch happened before the release, which is the opposite of the read.
  routes: [
    { from: PINCH_D, to: PINCH_TO, kind: 'pressure', bow: 2.5 },
    { from: CENTRE_HIGH, to: CENTRE_TO, kind: 'skate' },
    { from: OPP_CLIMBER, to: OPP_CLIMBER_TO, kind: 'skate' },
  ],

  puck: PUCK,
};

const pinchCentreDeep = {
  id: 'pinch-centre-below-the-goal-line',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'A pinch at the offensive blue line with the centre below their goal line behind the net — ' +
    'the arrangement that makes a pinch a bad decision even when it works. Everything in front ' +
    'of the pinching defenceman is the same as it would be in a good one: he has left the point ' +
    'to kill a puck their player is trying to move up the wall, and he may well get there ' +
    'first. What is different is behind him. His centre has gone below their goal line, at the ' +
    'far end of the zone from anywhere a third defender can help from, so his partner is the ' +
    'only player between two of their forwards and his own end. Beat the pinch and it is a ' +
    'two-on-one the other way — and it was a two-on-one waiting to happen whether the pinch ' +
    'came off or not, which is the whole point: this is not a picture of a play that went ' +
    'wrong, it is a picture of a decision that was wrong before anybody touched the puck. So ' +
    'the question to run before you jump a lane, pinch or activate is not only "am I right?" ' +
    'but "what happens if I am right and I still miss it?" ' + PINCH_CAVEATS,

  describe:
    PINCH_DESCRIBE_COMMON +
    'A centre is drawn below their goal line and past the back of their net, five feet below ' +
    'the line and eight feet out to the weak side of it, with no route: he is at the far end of ' +
    'the picture from the play and from his own end. So the pinching defenceman has committed ' +
    'himself to the wall and his partner is the only own player left to defend a rush the other ' +
    'way — one man against the carrier and the one forward climbing with him.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: 1 } },        // (87, 0)
    { id: 'A1', team: 'opp', pos: 'F', at: OPP_CARRIER, label: 'up the wall' },
    { id: 'A2', team: 'opp', pos: 'F', at: OPP_CLIMBER, label: 'already climbing' },
    { id: 'D',  pos: 'D', at: PINCH_D, label: 'pinches' },
    { id: 'D',  pos: 'D', at: PARTNER, label: 'the only one back' },
    // No route. He is not late to anything — he is in the wrong half of the
    // picture, and a route would suggest he can still be part of it.
    { id: 'C',  pos: 'F', at: CENTRE_DEEP, label: 'below the goal line' },
  ],

  routes: [
    { from: PINCH_D, to: PINCH_TO, kind: 'pressure', bow: 2.5 },
    { from: OPP_CLIMBER, to: OPP_CLIMBER_TO, kind: 'skate' },
  ],

  puck: PUCK,
};

export default [theRiskMap, pinchCentreHigh, pinchCentreDeep];
