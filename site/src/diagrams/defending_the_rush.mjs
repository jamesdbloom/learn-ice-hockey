/**
 * Diagrams for content/systems/defending_the_rush.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * ORIENTATION — the same in all six, deliberately. A rush travels the length of
 * the sheet, so every diagram here is `half: false` and the **defended net is the
 * far one, at the left**: `:far` positions are negative x. The attack therefore
 * moves right to left in all of them, and every caption says so, because a reader
 * who has to work out which way the play is going has already lost the picture.
 * Mixing orientations between diagrams in one document would be worse than either
 * choice on its own.
 *
 * COUNTS. An odd-man rush is named by its counts, so the glyph count is a claim.
 * Each spec states the count it must render, and the counts were checked in the
 * rendered PNG rather than in this file.
 *
 * TWO THINGS THE FIRST RENDER GOT WRONG, both invisible here and obvious there:
 *  - Labels of more than about eighteen characters are wider than the space
 *    between players at this scale. "the trailer, into the high slot" was placed
 *    forty feet from the trailer and seven feet from a defenceman, so it read as
 *    the defenceman's label. Every label below is short for that reason.
 *  - A backchecker's route that ends near its man finishes *pointing at* them
 *    unless the endpoint is deliberately off the line of approach. Four did —
 *    all three in the lanes diagram, one of them within 2 degrees of straight at
 *    the man, plus the centre in the 3-on-2. They now finish across their man or
 *    past them, at 100 to 129 degrees off the line to the body, and the terminal
 *    angles were measured off the drawn curve rather than the chord, because a
 *    bowed route does not finish in the direction its endpoints suggest.
 *
 * The far-end suffix on an unsided position needs the empty side field —
 * 'high-slot::far', not 'high-slot:far', which silently resolves to the near end.
 */

const OWNER = 'content/systems/defending_the_rush.md';

// The defended goaltender. Named once because five of the six diagrams place them
// the same way: in the crease, a foot out from the goal line.
const OWN_G = { at: 'crease::far', dx: 1 };            // (-85, 0)

/* ------------------------------------------------------------------ *
 * 1 · Gap control and the angle, on a 1-on-1
 * ------------------------------------------------------------------ */

// The carrier has just crossed the centre red line — the moment the section gives
// a number for: "As they cross the centre red line: tighten to around a stick and
// a half." Anchored to centre ice because that is what the instruction is about.
const GAP_CARRIER = { at: 'centre-ice', dx: -6, dy: 26 };   // (-6, 26)
// The defender: 8.9 ft away — a stick and a half, taking a stick at about 6 ft —
// and 4 ft to the INSIDE of the carrier, because "your body sits between them and
// the middle of the ice". Putting the defender on the boards side of the carrier
// is the error the section names by hand, and it is the one this diagram exists
// to make unmistakable.
const GAP_D = { at: 'centre-ice', dx: -14, dy: 22 };        // (-14, 22)

const gapAndAngle = {
  id: 'rush-gap-and-angle',
  owner: OWNER,
  half: false,
  width: 900,

  caption:
    'A 1-on-1 at the moment the carrier crosses the centre red line, the attack moving right to left ' +
    'toward the defended net at the left. The defender is on the inside — body between the carrier and ' +
    'the middle of the ice, boardside shoulder to the middle of their chest — so the only route the ' +
    'carrier can see is toward the wall, and the shaded middle is the ice being taken away, because ' +
    'shots from the slot beat goalies and shots from below the faceoff dots on the wall mostly do not. ' +
    'The gap drawn here is about a stick and a half, which is the target at the red line; it is ' +
    'roughly two to three stick lengths through the neutral zone and roughly a stick length at your own ' +
    'blue line, and notice that it is slightly tighter where the two routes end than where they start, ' +
    'because a gap that grows as they approach is a goal waiting to happen. ' +
    'Those distances are a guide and not a law — they vary with your own backward speed and the ' +
    'attacker’s skill. What no still picture can show is the thing that matters most: that ' +
    'the defender was already at full backward speed before this instant, because a gap cannot be closed ' +
    'from a standstill.',

  describe:
    'The full sheet, the defended net at the left. Two players and a goaltender. An opposition forward ' +
    'carries the puck just past the centre red line on the right-hand side of the ice; a defender is ' +
    'about nine feet away from them, both nearer the middle of the ice and nearer the defended net — ' +
    'that is, on the inside and on the defensive side. The carrier’s route curves outward toward the ' +
    'boards and finishes short of them; the defender’s route is backward skating that stays inside the ' +
    'carrier the whole way and finishes slightly tighter than it began. A shaded rectangle between the ' +
    'two faceoff dots, from the top of the circles down to the front of the crease, marks the middle of ' +
    'the ice the angle is denying. The goaltender is in the crease. Nothing in the picture shows contact.',

  // "The middle of the ice is the dangerous ice." The rectangle is the glossary's
  // own geometry — between the circles, from the top of the circles to the net
  // front — not a shape invented for the picture, and it is drawn faintly because
  // none of it is painted on a real rink.
  zones: [
    {
      label: 'the middle',
      points: [
        'top-of-circle:right:far',                          // (-54, 22)
        { at: 'faceoff-dot:right:far', dx: -14 },           // (-83, 22)
        { at: 'faceoff-dot:left:far', dx: -14 },            // (-83, -22)
        'top-of-circle:left:far',                           // (-54, -22)
      ],
    },
  ],

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: GAP_CARRIER, label: 'puck carrier' },
    { id: 'D',  pos: 'D', at: GAP_D,                    label: 'inside, closing' },
    { id: 'G',  pos: 'G', at: OWN_G },
  ],

  routes: [
    // The carrier, with the middle taken away, has the wall lane and nothing else.
    // Finishes 8 ft short of the boards: the section's "ride them into the boards"
    // instruction is one this diagram deliberately does not draw, because it does
    // not apply in women's hockey or in any non-check league and a picture cannot
    // carry that exception.
    // Bowed hard toward the boards, for two reasons: it is the lane being
    // conceded, and at this scale two waves running four feet apart render as one
    // thick squiggle — the first version of this diagram did exactly that.
    { from: GAP_CARRIER, to: { at: 'point:right:far', dx: -19, dy: 14 }, kind: 'carry', bow: -7 },
    // The defender retreats backwards in a straight line, still inside and still
    // on the defensive side: the two routes finish 7.3 ft apart having started 8.9
    // apart, so the gap in the picture is closing rather than growing.
    { from: GAP_D, to: { at: 'top-of-circle:right:far', dx: 8, dy: 5 }, kind: 'backward', bow: 0 },
  ],

  puck: { at: 'centre-ice', dx: -10, dy: 25 },
};

/* ------------------------------------------------------------------ *
 * 2 · The 2-on-1
 * ------------------------------------------------------------------ */

// TWO attackers, ONE defender. Nothing else may be added to this picture: a third
// glyph of either team makes it a diagram of a situation with a different name.
const A1_2ON1 = { at: 'point:right:far', dx: -20, dy: 4 };    // (-45, 24) carrier
const A2_2ON1 = { at: 'point:left:far', dx: -20, dy: 6 };     // (-45, -14) far attacker
// "Sit in the passing lane, roughly on the line between the two attackers, biased
// slightly toward the middle of the ice." The midpoint of the two attackers is at
// y = 5; the defender sits at y = 2, biased toward the middle, and at x = -52 is
// on the defensive side of both — which the same numbered list requires, and
// which is why they cannot also be exactly on the segment joining them.
const D_2ON1 = { at: 'blue-line::far', dx: -27, dy: 2 };      // (-52, 2)
const RELEASE_2ON1 = { at: 'faceoff-dot:right:far', dx: -1, dy: -2 };  // (-70, 20)

const twoOnOne = {
  id: 'rush-2-on-1',
  owner: OWNER,
  half: false,
  width: 900,

  caption:
    'A 2-on-1 — two attackers, one defender — with the attack moving right to left toward the ' +
    'defended net at the left. The defenceman sits in the shaded passing lane between the two attackers, ' +
    'biased slightly toward the middle of the ice, on the defensive side of both, and retreats with them ' +
    'rather than stepping toward either: the governing instruction is take away the pass and ' +
    'give up the shot, because the goalie can save the shot and cannot save the cross-ice pass. ' +
    'The goaltender is drawn set and square to the puck carrier, playing the shooter as though the second ' +
    'attacker did not exist, and the shot from the wing is the chance being conceded on purpose. ' +
    'That division of labour is a two-person agreement and it only works if both people have said it out ' +
    'loud — most goalies want it exactly this way, but some, especially at rec level and especially ' +
    'against a weak shooter, will ask you to pressure the puck instead, so ask yours before the game. ' +
    'One honest exception no picture can carry: if the second attacker gets picked up by a backchecker ' +
    'and the shooter is walking in unpressured with no realistic pass available, it is no longer a 2-on-1 ' +
    'and the defenceman should close on the puck.',

  describe:
    'The full sheet, the defended net at the left. Exactly two opposition forwards and one defender. ' +
    'The carrier is wide on the right, the second attacker is on the left driving toward the far side of ' +
    'the slot, and both are about the same distance from the defended net. The defender is between them ' +
    'and about seven feet nearer their own net than either, inside a shaded band marking the lane a pass ' +
    'between the two attackers would have to travel through; no pass is drawn. The carrier’s route ' +
    'carries the puck down to the faceoff dot and a shot goes from there toward the net, stopping short ' +
    'of the goaltender; the defender’s route is backward skating that stays between the two attackers ' +
    'and stops well above the goal line. The goaltender is a few feet out of the goal on the line ' +
    'between the net and the puck carrier.',

  // The lane a pass between the two attackers has to cross, drawn from the
  // attackers back to the defender's depth. It is what the defenceman owns and
  // never leaves. No pass arrow is drawn on purpose: whether the stick gets there
  // is the contest the situation turns on, and a still frame must not settle it.
  zones: [
    {
      label: 'the passing lane',
      points: [
        { at: 'point:right:far', dx: -18, dy: 4 },        // (-43, 24)
        // A collinear extra vertex on the top edge. It changes the polygon not at
        // all and the label's anchor a great deal: the label is drawn at the mean
        // of the vertices, and with four corners that mean sat on the apex of the
        // defenceman's triangle.
        { at: 'point:right:far', dx: -23, dy: 4 },        // (-48, 24)
        { at: 'top-of-circle:right:far', dx: 1, dy: 2 },  // (-53, 24)
        { at: 'top-of-circle:left:far', dx: 1, dy: 8 },   // (-53, -14)
        { at: 'point:left:far', dx: -18, dy: 6 },         // (-43, -14)
      ],
    },
  ],

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: A1_2ON1, label: 'puck carrier' },
    { id: 'A2', team: 'opp', pos: 'F', at: A2_2ON1, label: 'cross-ice option' },
    { id: 'D',  pos: 'D', at: D_2ON1,               label: 'owns the pass' },
    // On the line from the net to the carrier, a few feet out: "square to the
    // shot, correct depth, set and stopped before release."
    { id: 'G',  pos: 'G', at: { at: 'goal-line::far', dx: 3.5, dy: 2 }, label: 'owns the shooter' },
  ],

  routes: [
    { from: A1_2ON1, to: RELEASE_2ON1, kind: 'carry', bow: -2 },
    { from: A2_2ON1, to: { at: 'faceoff-dot:left:far', dx: -3, dy: 12 }, kind: 'skate', bow: 2 },
    // "Match the retreat speed of the attack and stay on the defensive side of
    // both." Stops at the high slot, because backpedalling behind your own goal
    // line is listed in the same numbered list as the error.
    { from: D_2ON1, to: { at: 'high-slot::far', dx: 1, dy: -2 }, kind: 'backward', bow: 0 },
    // The conceded shot. Stops 7.4 ft short of the goaltender: a route must not
    // terminate on another player's glyph.
    { from: RELEASE_2ON1, to: { at: 'goal-line::far', dx: 9, dy: 7 }, kind: 'shot' },
  ],

  puck: { at: 'point:right:far', dx: -24, dy: 3 },
};

/* ------------------------------------------------------------------ *
 * 3 · The 3-on-2, the common default
 * ------------------------------------------------------------------ */

// THREE attackers, TWO defencemen, plus the backchecking centre the section says
// the middle belongs to. The third own player is not a third defender against the
// rush — the count in the name is attackers on defencemen — and the caption says
// so, because a reader who counts glyphs will otherwise read this as a 3-on-3.
const A1_3ON2 = { at: 'point:right:far', dx: -6, dy: 6 };   // (-31, 26) wide right, carrier
const A2_3ON2 = { at: 'blue-line::far', dx: -4, dy: 5 };    // (-29, 5)  middle
const A3_3ON2 = { at: 'point:left:far', dx: -6, dy: -6 };   // (-31, -26) wide left
const C_3ON2  = { at: 'blue-line::far', dx: 12, dy: -5 };   // (-13, -5) backchecker, behind the play

const threeOnTwoDefault = {
  id: 'rush-3-on-2-default',
  owner: OWNER,
  half: false,
  width: 900,

  caption:
    'A 3-on-2 defended the way assumed here — "two wide, middle to the backchecker" — with the ' +
    'attack moving right to left toward the defended net at the left. Three attackers against two ' +
    'defencemen: each defenceman takes an outside attacker, and neither chases the puck carrier, who here ' +
    'is wide on the right and therefore belongs to the defenceman in that lane. The middle attacker ' +
    'belongs to the backchecking centre arriving from behind, who is the third own player in the picture ' +
    'but is not one of the two in the name. Notice that the two defencemen are level with each other and ' +
    'retreating at the same speed with the middle sealed between them — a staggered retreat opens a ' +
    'diagonal seam straight to the slot — and that they stop above the circles rather than backing all ' +
    'the way to the goal line, which would concede the whole slot. ' +
    'This is the version this section assumes, and it is a coaching choice rather than a law: the realistic ' +
    'alternative is the next diagram, the two fail in different directions, and two defencemen playing ' +
    'different ones on the same rush is worse than either, so ask your coach which you play. ' +
    'If the backchecker is genuinely not coming, the defenceman on the puck side has to squeeze the middle ' +
    'and concede the far wide man — but not until they have looked.',

  describe:
    'The full sheet, the defended net at the left. Three opposition forwards abreast just inside the ' +
    'defending blue line: one wide right carrying the puck, one in the middle, one wide left. Two own ' +
    'defencemen level with each other about twenty feet nearer the defended net, one in each outside lane ' +
    'just inside the faceoff dots, each with a backward-skating route that ends level with the other and ' +
    'above the circles. One own forward, the backchecking centre, is behind the play up-ice and takes a ' +
    'route that passes inside the middle attacker and finishes slightly nearer the defended net than they ' +
    'are — their inside hip, not their back pocket. The goaltender is in the crease.',

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: A1_3ON2, label: 'carrier, wide' },
    { id: 'A2', team: 'opp', pos: 'F', at: A2_3ON2, label: 'the middle' },
    { id: 'A3', team: 'opp', pos: 'F', at: A3_3ON2, label: 'far wide man' },
    // Just inside the dots: wide enough to own the outside attacker, tight enough
    // that "the middle sealed between you" is true rather than decorative.
    { id: 'D1', pos: 'D', at: { at: 'top-of-circle:right:far', dx: 6, dy: -2 }, label: 'takes the wide man' },
    { id: 'D2', pos: 'D', at: { at: 'top-of-circle:left:far', dx: 6, dy: 2 },   label: 'takes the wide man' },
    { id: 'C',  pos: 'F', at: C_3ON2, label: 'the middle is his' },
    { id: 'G',  pos: 'G', at: OWN_G },
  ],

  routes: [
    { from: A1_3ON2, to: { at: 'faceoff-dot:right:far', dx: 6, dy: 8 }, kind: 'carry', bow: -2 },
    // Retreating together: same start depth, same end depth, a flat line.
    { from: { at: 'top-of-circle:right:far', dx: 6, dy: -2 },
      to:   { at: 'top-of-circle:right:far', dx: -8, dy: -1 }, kind: 'backward' },
    { from: { at: 'top-of-circle:left:far', dx: 6, dy: 2 },
      to:   { at: 'top-of-circle:left:far', dx: -8, dy: 1 },  kind: 'backward' },
    // "Take a route that puts you inside them, between them and your net, even if
    // that route is slightly longer. Arrive at their inside hip, not their back
    // pocket." The route passes 8.1 ft clear of the middle attacker (A2_3ON2, at
    // (-29, 5)) on the inside and finishes 5 ft goal-side of them, 8.6 ft away —
    // past them, not at them. These read 6.8, 4 and 7.2; none of the three
    // resolves against the current endpoints, and no anchor in this diagram has
    // moved, so they are fossils of an earlier dx/dy on this route rather than of
    // a rink.json change. The argument is unharmed — every clearance grew.
    { from: C_3ON2, to: { at: 'blue-line::far', dx: -9, dy: -2 }, kind: 'skate', bow: 1.5 },
  ],

  puck: { at: 'point:right:far', dx: -9, dy: 5 },
};

/* ------------------------------------------------------------------ *
 * 4 · The 3-on-2, the realistic alternative
 * ------------------------------------------------------------------ */

// Same three attackers in the same places as the default diagram, on purpose: the
// only thing that changes between the two pictures is what the defence does, and
// that is the whole reason both are drawn.
const D1_ALT = { at: 'point:right:far', dx: -15, dy: 2 };   // (-40, 22) strong side, on the puck
const D2_ALT = { at: 'blue-line::far', dx: -17, dy: -10 };  // (-42, -10) weak side, dropped off
const C_ALT  = { at: 'blue-line::far', dx: 14, dy: -8 };    // (-11, -8)

const threeOnTwoAlternative = {
  id: 'rush-3-on-2-alternative',
  owner: OWNER,
  half: false,
  width: 900,

  caption:
    'The same 3-on-2, defended the realistic alternative way — "strong side takes the puck, weak side ' +
    'splits" — with the attack moving right to left toward the defended net at the left. The three ' +
    'attackers are in exactly the positions they hold in the previous diagram; only the defence has ' +
    'changed. The strong-side defenceman takes the puck carrier wherever they are and plays it as a ' +
    '1-on-1 with a tight gap, while the weak-side defenceman drops off and sits in the shaded lane ' +
    'between the middle attacker and the far attacker, splitting the two of them exactly as they would on ' +
    'a 2-on-1; under this version the backchecker’s job becomes the third attacker rather than the middle ' +
    'specifically, which is why that route finishes in open ice — which attacker it will be is not ' +
    'fixed, and this picture does not fix it either. ' +
    'The trade runs in both directions: this version never concedes the middle, but the weak-side ' +
    'defenceman is covering two people and the far attacker gets more room, where the default keeps three ' +
    'defenders on three attackers if the backcheck arrives and concedes the middle entirely if it does ' +
    'not. Ask your coach which one you are playing.',

  describe:
    'The full sheet, the defended net at the left. The same three opposition forwards as the previous ' +
    'diagram: wide right with the puck, in the middle, and wide left. The strong-side defenceman has ' +
    'stepped up to about ten feet from the carrier, on the inside of them, and retreats backwards ' +
    'steering them toward the boards. The weak-side defenceman is much deeper and toward the middle, ' +
    'inside a shaded band drawn between the middle attacker and the far wide attacker, and drops off ' +
    'further down that band. The backchecking centre comes back through the middle of the ice behind the ' +
    'play, passing inside the middle attacker and finishing in open ice rather than on any one of them. ' +
    'The goaltender is in the crease.',

  // The lane the weak-side defenceman splits, from the two attackers back to the
  // depth they have dropped to. Deliberately unlabelled: the label is drawn at the
  // polygon's centroid, which here is on top of the defenceman's glyph, and a
  // label written through a player is the rendering defect this project keeps
  // catching. The caption names the band instead.
  zones: [
    {
      points: [
        { at: 'blue-line::far', dx: -3, dy: 5 },     // (-28, 5)   level with the middle attacker
        { at: 'blue-line::far', dx: -19, dy: 5 },    // (-44, 5)
        { at: 'blue-line::far', dx: -19, dy: -26 },  // (-44, -26)
        { at: 'blue-line::far', dx: -3, dy: -26 },   // (-28, -26) level with the far attacker
      ],
    },
  ],

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: A1_3ON2, label: 'puck carrier' },
    { id: 'A2', team: 'opp', pos: 'F', at: A2_3ON2, label: 'the middle' },
    { id: 'A3', team: 'opp', pos: 'F', at: A3_3ON2, label: 'the far man' },
    { id: 'D1', pos: 'D', at: D1_ALT, label: 'takes the puck' },
    { id: 'D2', pos: 'D', at: D2_ALT, label: 'splits the two' },
    { id: 'C',  pos: 'F', at: C_ALT,  label: 'the third attacker' },
    { id: 'G',  pos: 'G', at: OWN_G },
  ],

  routes: [
    { from: A1_3ON2, to: { at: 'top-of-circle:right:far', dx: 2, dy: 9 }, kind: 'carry', bow: -2 },
    // Strong-side D, tight gap, retreating and steering the carrier outside.
    { from: D1_ALT, to: { at: 'top-of-circle:right:far', dx: -1, dy: 1 }, kind: 'backward', bow: -1.5 },
    // Weak-side D drops off down the lane it is splitting.
    { from: D2_ALT, to: { at: 'high-slot::far', dx: 17, dy: -8 }, kind: 'backward' },
    // The backchecker comes back through the middle and stops in open ice, 11 ft
    // from the middle attacker and 16 from the weak-side defenceman — short of
    // the lane that defenceman is splitting, because arriving into it would draw
    // two defenders onto the same two attackers. Which attacker is "the third"
    // here depends on the rush; the section does not say, so this route does not
    // either.
    { from: C_ALT, to: { at: 'blue-line::far', dx: -1, dy: -6 }, kind: 'skate', bow: 2 },
  ],

  puck: { at: 'point:right:far', dx: -9, dy: 5 },
};

/* ------------------------------------------------------------------ *
 * 5 · Backchecking lanes
 * ------------------------------------------------------------------ */

// The play sits in the defending half so that centre ice is empty, because the
// shaded lane's label is drawn at the polygon's centroid — which is centre ice —
// and the first render wrote "the middle lane" straight through the centre's glyph.
const A1_LANE = { at: 'point:right:far', dx: -9, dy: 10 };   // (-34, 30) right lane, carrier
const A2_LANE = { at: 'blue-line::far', dx: -5, dy: 6 };     // (-30, 6)  middle-lane driver
const A3_LANE = { at: 'point:left:far', dx: -8, dy: -8 };    // (-33, -28) left lane
const W1_LANE = { at: 'point:right:far', dx: 13, dy: 11 };   // (-12, 31)
const C_LANE  = { at: 'blue-line::far', dx: 9, dy: -8 };     // (-16, -8)
const W2_LANE = { at: 'point:left:far', dx: 11, dy: -11 };   // (-14, -31)

const backcheckLanes = {
  id: 'rush-backcheck-lanes',
  owner: OWNER,
  half: false,
  width: 900,

  caption:
    'Backchecking lanes, with the attack moving right to left toward the defended net at the left. ' +
    'The ice is three vertical lanes running the length of the rink: two outside lanes along the boards, ' +
    'and the shaded middle lane between the faceoff dots. In the standard assignment drawn here the centre ' +
    'takes the middle lane and the two wingers take the outside lanes, and each backchecker’s route bends ' +
    'inside their man rather than trailing their shoulder — you cannot defend anything from behind, and ' +
    'the aim is their inside hip, not their back pocket. ' +
    // The ranking this sentence used to carry — "the most commonly missed assignment in hockey" — was a
    // corpus-wide superlative with no source behind it, and a caption is the one place it reached a reader
    // as a caption rather than as prose. The mechanism is the teachable part and it survives; the league
    // table does not. Scope kept to the picture, which the picture can actually support.
    'The most dangerous player in the picture is the middle-lane driver, the attacker skating hard through ' +
    'the middle without the puck: they are missed because they do not have the puck and eyes go to the puck. ' +
    'The lane assignment is a coaching choice and not a law — other teams give the middle to the first ' +
    'man back whoever it is, and others pick up man-on-man from the puck outward, so find out which yours ' +
    'runs; under every variant somebody is responsible for the middle and nobody assumes it is ' +
    'somebody else. ' +
    'The defencemen are not drawn, because this is about the three backcheckers.',

  describe:
    'The full sheet, the defended net at the left, with a shaded band between the two faceoff dots ' +
    'running most of the length of the ice — the middle lane. Three opposition forwards attack, one in ' +
    'each lane: the carrier in the right-hand outside lane, one driving hard through the shaded middle ' +
    'lane without the puck, and one in the left-hand outside lane. Three own forwards are behind them, ' +
    'up-ice: a winger behind the carrier in the right lane, the centre behind the middle driver, and a ' +
    'winger behind the left-lane attacker. All three backcheck routes curve toward the middle of the ice ' +
    'and stop short of the attacker they are chasing, arriving inside them rather than behind them. ' +
    'The goaltender is in the crease. No defencemen are drawn.',

  // "The middle lane between the faceoff dots." Held 9 ft short of each goal line
  // so the band does not sit over a net; the caption carries "the length of the rink".
  zones: [
    {
      label: 'the middle lane',
      points: [
        { at: 'faceoff-dot:right:far', dx: -11 },   // (-80, 22)
        { at: 'faceoff-dot:right', dx: 11 },        // (80, 22)
        { at: 'faceoff-dot:left', dx: 11 },         // (80, -22)
        { at: 'faceoff-dot:left:far', dx: -11 },    // (-80, -22)
      ],
    },
  ],

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: A1_LANE, label: 'puck carrier' },
    { id: 'A2', team: 'opp', pos: 'F', at: A2_LANE, label: 'middle driver' },
    { id: 'A3', team: 'opp', pos: 'F', at: A3_LANE },
    { id: 'W1', pos: 'F', at: W1_LANE, label: 'outside lane' },
    { id: 'C',  pos: 'F', at: C_LANE,  label: 'middle lane' },
    { id: 'W2', pos: 'F', at: W2_LANE, label: 'outside lane' },
    { id: 'G',  pos: 'G', at: OWN_G },
  ],

  routes: [
    { from: A1_LANE, to: { at: 'top-of-circle:right:far', dx: 2, dy: 10 }, kind: 'carry', bow: -2 },
    // The middle-lane driver arriving into the slot at speed, with no puck.
    { from: A2_LANE, to: { at: 'high-slot::far', dx: 8, dy: 2 }, kind: 'skate', bow: 1.5 },
    // Three backcheck routes, each bowed toward the middle of the ice: "take a
    // route that puts you inside them, between them and your net, even if that
    // route is slightly longer."
    //
    // Each one finishes INSIDE its man and past them, not at them. The first
    // version of this diagram ended all three short of their man on the line of
    // approach — 7 to 9 ft away and 2, 14 and 18 degrees off straight at them —
    // so the picture showed three players skating into three bodies. That is the
    // defect the section forbids in words ("you cannot defend anything from
    // behind ... arrive at their inside hip, not their back pocket") and it was
    // invisible in the source. Terminal angles are now 74 to 124 degrees off the
    // line to the man, with 8 ft or more of clearance.
    //
    // The wingers finish inside their man but still OUTSIDE the shaded middle
    // lane, at y 24 and -23 against dots at 22. An earlier version ended them at
    // 21 and -19, inside the middle lane — which is the centre's lane, in the one
    // diagram whose whole subject is that the wingers have the outside lanes.
    { from: W1_LANE, to: { at: 'point:right:far', dx: -15, dy: 4 }, kind: 'skate', bow: 9 },
    { from: C_LANE,  to: { at: 'blue-line::far', dx: -11, dy: -2 }, kind: 'skate', bow: 2 },
    { from: W2_LANE, to: { at: 'point:left:far', dx: -15, dy: -3 }, kind: 'skate', bow: -9 },
  ],

  puck: { at: 'point:right:far', dx: -12, dy: 9 },
};

/* ------------------------------------------------------------------ *
 * 6 · The trailer / late man
 * ------------------------------------------------------------------ */

const A1_TRAIL = { at: 'faceoff-dot:right:far', dx: 4, dy: 4 };    // (-65, 26) first wave, wide
const A2_TRAIL = { at: 'faceoff-dot:left:far', dx: -5, dy: 8 };    // (-74, -14) first wave, net drive
const A3_TRAIL = { at: 'high-slot::far', dx: 11, dy: 4 };          // (-58, 4)  the trailer, arriving
const D1_TRAIL = { at: 'faceoff-dot:right:far', dx: -4, dy: -3 };  // (-73, 19)
const D2_TRAIL = { at: 'faceoff-dot:left:far', dx: -11, dy: 12 };  // (-80, -10)
const F_TRAIL  = { at: 'blue-line::far', dx: -11, dy: -4 };        // (-36, -4)

const trailer = {
  id: 'rush-trailer',
  owner: OWNER,
  half: false,
  width: 900,

  caption:
    'The trailer, or late man — the attacker who arrives second — with the attack moving right to left ' +
    'toward the defended net at the left. The first wave of two has pulled both defencemen low: one is ' +
    'inside the wide carrier, the other is at the net front, and if either steps up to the trailer the ' +
    'first wave gets the net. The trailer is following a few metres behind into the high slot, where the ' +
    'look is clean and unopposed — at the instant drawn, the nearest defender to them is more than ' +
    'twenty feet away — and the backchecking forward arriving from up-ice has to take them. ' +
    'That assignment is the house default, low zone collapse behind a 2-1-2 forecheck, and it is an ' +
    'assignment rather than a law: some teams instead give the trailer to the weak-side defenceman and ' +
    'drop the third forward to the net front, which is tighter on the trailer and thinner in front, so ask ' +
    'which your team runs — a trailer covered by nobody and a trailer covered by two are both goals. ' +
    'The trailer is drawn here as a forward; it is often a defenceman who has activated. ' +
    'The defencemen will see them before the backcheckers do, and "trailer!" or "high!" is the shout.',

  describe:
    'The full sheet, the defended net at the left, the play in the defending zone. Three opposition ' +
    'attackers: one wide on the right with the puck below the faceoff dot, one driving the net front on ' +
    'the weak side, and a third — the trailer — well behind them both, skating into the high slot in ' +
    'the middle of the ice. Two own defencemen are low and occupied, one inside the wide carrier and one ' +
    'at the net front beside the weak-side attacker, neither of them near the trailer. One own forward is ' +
    'backchecking from up-ice; its route curves below the trailer and stops short of them rather than ' +
    'finishing at them. The goaltender is in the crease. No contact is drawn anywhere in the picture.',

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: A1_TRAIL, label: 'first wave' },
    { id: 'A2', team: 'opp', pos: 'F', at: A2_TRAIL, label: 'first wave' },
    { id: 'A3', team: 'opp', pos: 'F', at: A3_TRAIL, label: 'the trailer' },
    { id: 'D1', pos: 'D', at: D1_TRAIL, label: 'occupied' },
    { id: 'D2', pos: 'D', at: D2_TRAIL, label: 'occupied' },
    { id: 'F',  pos: 'F', at: F_TRAIL,  label: 'takes the trailer' },
    { id: 'G',  pos: 'G', at: OWN_G },
  ],

  routes: [
    // The first wave, taking the defencemen low. The carrier's route stays outside
    // and stops above the goal line; nothing here runs across the goal mouth.
    { from: A1_TRAIL, to: { at: 'corner:right:far', dx: 4, dy: 1 }, kind: 'carry', bow: -2 },
    // The trailer arriving into the high slot — the position the section names.
    { from: A3_TRAIL, to: { at: 'high-slot::far', dx: 1, dy: 1 }, kind: 'skate', bow: 1 },
    // "Skate first, then look." A backchecker who sprinted from the turnover can
    // catch this player; one who is five metres behind cannot. The route finishes
    // 36 degrees off the line to the trailer and 14.1 ft short of them — it must
    // not read as skating into the man. (Read 54 degrees and 12 ft. The distance
    // grew and the angle narrowed, so this one is worth re-checking if the route is
    // ever moved again.)
    // ⚠️ The angle is DESCRIPTIVE, not a threshold, and this comment used to make it
    // operative — "36 degrees ... is the one that decides whether the arrowhead reads
    // as aimed at the player." No angular criterion is defensible: THE ARRIVAL
    // INVARIANT (scripts/lib/rink.mjs) is a distance-and-half-plane test precisely
    // because the books partition the circle at the target's shoulder line and a glyph
    // has no facing. What governs this route is that test, enforced by
    // scripts/check-arrivals.mjs — not a number chosen here.
    { from: F_TRAIL, to: { at: 'high-slot::far', dx: 21, dy: -6 }, kind: 'skate', bow: 2 },
  ],

  puck: { at: 'faceoff-dot:right:far', dx: 1, dy: 6 },
};

export default [
  gapAndAngle,
  twoOnOne,
  threeOnTwoDefault,
  threeOnTwoAlternative,
  backcheckLanes,
  trailer,
];
