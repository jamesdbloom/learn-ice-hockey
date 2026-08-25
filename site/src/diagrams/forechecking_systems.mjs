/**
 * Diagrams for content/systems/forechecking_systems.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 */

// The carrier's exit point, named once because three things refer to it: the end
// of the carry, the start of the pass, and the lane F2 is attacking.
const EXIT = { at: 'faceoff-dot:right', dx: 12, dy: 4 };   // (81, 26)
const F1_AT = { at: 'goal-line', dy: -14 };                // (89, -14)
const F2_AT = { at: 'top-of-circle:right', dx: 14, dy: -2 }; // (68, 20)
// Clear of the goal frame (x 89-92.3, y +-3): the defender triangle is 6.2 ft
// across, and at dy 2 it was drawn sitting on the net's back rail.
const CARRIER = { at: 'behind-net', dy: 6 };               // (94, 6)

const forecheck212 = {
  numbered: true,
  id: 'forecheck-212',
  owner: 'content/systems/forechecking_systems.md',
  half: true,
  width: 900,

  caption:
    'A 2-1-2 forecheck at the moment the opposing defenceman retrieves the puck behind the net. ' +
    'F1 arrives from the weak side and angles the carrier towards the strong-side wall; ' +
    'F2 attacks the first passing option rather than the puck; ' +
    'F3 stays high in the middle at the top of the circles; ' +
    'both defencemen hold the offensive blue line. ' +
    'This is one forechecking system among several, and three of the details shown are ' +
    'coaching choices rather than rules — which way F1 angles the carrier, which side F3 ' +
    'sits on, and the fact that it is drawn as a spread 2-1-2 with F1 and F2 arriving from ' +
    'opposite sides rather than the stacked variant that sends both at the same corner — ' +
    'so find out which your team runs. ' +
    'The picture shows F1 taking the weak side away; how a forechecker finishes an angle is ' +
    'movement over time that a still diagram cannot carry, and is its own section. ' +
    'Whether the first pass beats F2, or F2 beats the pass, is the contest the system turns on, ' +
    'and the diagram does not settle it.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Four opposition players: ' +
    'the defenceman D1 behind the net with the puck; the partner D2 low on the weak side, the ' +
    'reverse option; the winger W1 on the strong-side half-wall, the first passing option; the ' +
    'winger W2 on the weak-side half-wall; and the goaltender in the crease. Five own players: ' +
    'F1 deep on the weak side at the goal line, F2 deep inside the strong-side circle, F3 high in ' +
    'the middle at the top of the circles, and two defencemen on the offensive blue line. ' +
    'Four numbered routes: one, F1 takes the weak side away; two, the carrier ' +
    'skates the puck out to the strong-side wall; three, F2 attacks the passing lane; four, the ' +
    'first pass to W1. The opposition centre is not drawn.',

  players: [
    // Opposition. All four are players the section names: the carrier, the partner
    // it reverses to, the strong-side winger, and the cross-ice option F3 covers.
    // The first draft drew only two, which made the forecheck look free — and the
    // section's headline concession is that it is not ("What it concedes:
    // everything behind it").
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER,                              label: 'puck carrier' },
    { id: 'D2', team: 'opp', pos: 'D', at: { at: 'corner:left', dx: -4, dy: 6 }, label: 'the reverse' },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right',                    label: 'first option' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left',                     label: 'cross-ice option' },

    // Own team. Two deep, one high, two on the line — the shape the facts block states.
    // F3's coordinate is the section's own phrase rather than a guess: the facts
    // block says "roughly the top of the circles", so it is top-of-circle with the
    // sided offset taken back out, i.e. (54, 0).
    { id: 'F1', pos: 'F', at: F1_AT,                                  label: 'takes the weak side' },
    { id: 'F2', pos: 'F', at: F2_AT,                                  label: 'takes the option' },
    { id: 'F3', pos: 'F', at: { at: 'top-of-circle:right', dy: -22 }, label: 'high, middle' },
    { id: 'D',  pos: 'D', at: 'point:right',                          label: 'holds the line' },
    { id: 'D',  pos: 'D', at: 'point:left',                           label: 'holds the line' },
  ],

  // Numbered, because four simultaneous arrows do not say what happened first —
  // and here the order is the whole lesson. The section names route 4 twice: once
  // as the thing F2 exists to prevent, once as the counter that beats the system
  // ("a quick first pass before F2 arrives").
  routes: [
    // 1 — F1 takes away the weak side, so the carrier's only route out is the
    //     strong-side wall. This route deliberately stops there and does **not**
    //     draw the finish of the angle.
    //
    //     Two earlier attempts drew that finish and both were wrong. The second
    //     ended with F1's terminal tangent at 85 degrees against the carrier's
    //     134 — within 5 degrees of pointing straight at the puck, which is what
    //     "Do not skate at the puck. Skate at the space you want to deny" forbids
    //     by name — and its curve crossed y=0 at x=85.7, through the crease. Both
    //     were invisible in the picture and both passed every geometric check.
    //     Angling is a long section about movement over time; a still frame cannot
    //     carry it, so this diagram stops asserting it and the caption sends the
    //     reader to the section instead.
    { from: F1_AT, to: { at: 'behind-net', dx: -3, dy: -5 }, kind: 'skate', bow: -2 },
    // 2 — the carrier, with the middle taken away, carries out to the strong-side wall.
    // Bowed towards the end boards, so the carrier's route hugs the wall and F1's
    // arrives inside it. Bowed the other way the two curves overlay each other and
    // the picture shows one line where it means to show a forechecker and a carrier.
    { from: CARRIER, to: EXIT, kind: 'carry', bow: -6 },
    // 3 — F2 attacks the lane, not the puck.
    { from: F2_AT, to: { at: 'half-wall:right', dx: 9, dy: -8 }, kind: 'skate', bow: 2 },
    // 4 — the first pass. Whether it beats F2 is not settled here, and must not be.
    { from: EXIT, to: { at: 'half-wall:right', dy: -3 }, kind: 'pass' },
  ],

  puck: { at: 'behind-net', dx: -3.5, dy: 10 },
};

// ===========================================================================
// The other systems, drawn against the same opposition as the 2-1-2 above.
//
// The section's argument is that these are ALTERNATIVES a reader has to be able
// to tell apart — "there is no single correct forecheck ... a family of named
// systems, each buying pressure at the price of risk". A reader can only compare
// pictures if the only thing that changes between them is the thing being
// compared. So the opposition cast, the puck and the carrier's position are held
// identical across forecheck-212, forecheck-212-stacked, forecheck-122 and
// forecheck-131, and every difference the reader sees is a difference in the
// system.
//
// CARRIER is shared with forecheck-212 above deliberately: it is the same point,
// and a second copy of it is a second place it can drift.
//
// THE FROZEN SHAPE IS THE CLAIM. A system named for its rows is a lie if the
// glyphs do not sit in those rows, and the reader who most needs the picture is
// exactly the one who cannot tell. Count the glyphs in the render, by depth,
// before believing any of these. The bands here are: 1-2-2 → one forward at x 78,
// two at x 54 and 57, two defencemen at x 25; 1-3-1 → x 78, then three at exactly
// x 54, then one at x 25; both 2-1-2s → two forwards deep, one at x 54, two at
// x 25.
const OPP_D2 = { at: 'corner:left', dx: -4, dy: 6 };      // (78, -28) — the partner
const OPP_PUCK = { at: 'behind-net', dx: -3.5, dy: 10 };  // (90.5, 10)

// NO LABEL ON THE CARRIER IN THE THREE DIAGRAMS BELOW, and that is deliberate.
// The carrier sits at x 94, and a label of any useful length placed directly
// above or below it runs off the end boards, so the placer pushes it sideways —
// where, in these shapes, it lands nearer the goaltender than the defenceman it
// names. That is the exact defect the placer's own comments record ("'puck
// carrier' was once placed 7.4 ft from F1 and 20.3 ft from the carrier it
// named"), and the placer cannot see it here because it only knows about
// *labelled* anchors and the goaltender carries no label. The puck glyph sits on
// the carrier and the `describe` names them, which is enough. The 2-1-2 above can
// carry the label because its F1 is on the other side of the net.

// ---------------------------------------------------------------------------

// The stacked variant. It exists as a diagram because the 2-1-2 above has to
// hedge in its caption that it is "drawn as a spread 2-1-2 ... rather than the
// stacked variant that sends both at the same corner", and a hedge a reader
// cannot picture is a hedge that does nothing. Two pictures of the same system
// settle it in a glance.
const STACK_F1 = { at: 'goal-line', dy: 18 };                // (89, 18)
// Inside the strong-side circle rather than up on the wall beside their winger.
// At (78, 27) the only label slot the placer could find for F2 was one that came
// out 7.2 ft from the opposing winger and 13 ft from F2 — a label reads as
// belonging to whatever is nearest it, whatever the leader line says, and the
// placer cannot see the winger because the winger carries no label of its own.
const STACK_F2 = { at: 'faceoff-dot:right', dx: 5, dy: 2 };  // (74, 24)

const forecheck212Stacked = {
  id: 'forecheck-212-stacked',
  owner: 'content/systems/forechecking_systems.md',
  half: true,
  width: 900,

  caption:
    'The strong-side or stacked 2-1-2 — the variant of the diagram above, drawn against the same puck ' +
    'carrier. F1 and F2 both come from the same side to overload one corner, and F3 shades to the puck side ' +
    'as well instead of sitting weak-side, so all three forwards are on one half of the ice. ' +
    'The count has not changed — two forwards deep, one high, both defencemen on the offensive blue line — ' +
    'and only the sides have moved, which is why this is the same system and not a different one. ' +
    'What the shape gives up is drawn as well: the far-side breakout, conceded deliberately, with the carrier ' +
    'free to come out the other way into the half of the ice none of your forwards is standing on. ' +
    'Which of the two your team runs is a bench call rather than a rule, and it decides whether F2 following ' +
    'F1 into the same corner is the plan or the commonest mistake in forechecking — so find out before your ' +
    'first shift, not during it. ' +
    'F1 and F2 are drawn arriving nowhere, because how a forechecker finishes an angle is movement over time ' +
    'that a still frame cannot carry.',

  describe:
    'Attacking half of the rink, the opposition net at the right, and the same five opposition players as the ' +
    'other forecheck diagrams: the defenceman D1 behind the net with the puck, the partner D2 low on the far ' +
    'side, the wingers W1 and W2 on the two half-walls, and the goaltender in the crease. Five own players, ' +
    'all three forwards on the strong side: F1 deep at the goal line towards the strong-side corner, F2 deep ' +
    'inside the strong-side circle, F3 high but shaded across to the strong side rather than sitting in the ' +
    'middle, and both defencemen on the offensive blue line at the two points. One route: the carrier taking ' +
    'the puck out around the back of the net to the far corner, the escape the shape concedes. The whole weak ' +
    'side of the ice below the net is empty of own players.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER },
    { id: 'D2', team: 'opp', pos: 'D', at: OPP_D2 },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right' },
    // Unlabelled, and not for want of trying. Their winger and their partner sit
    // 13.8 ft apart down there (10.3 ft when half-wall.y was 33, which is where the
    // "10 ft" this used to read came from), so every label slot the placer can
    // reach is about as near one as the other — "the far-side option" came out
    // 11.1 ft from the
    // defenceman and 11.5 ft from the winger it named. The conceded side is said
    // by the route running into it, by the emptiness of that half, and by the
    // caption, which is enough.
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // "F1 and F2 both come from the same side to overload one corner". F1 is at
    // the same depth as the spread version's F1 and on the opposite side of the
    // net, so the two pictures differ in exactly the thing being compared.
    { id: 'F1', pos: 'F', at: STACK_F1,                       label: 'first in' },
    { id: 'F2', pos: 'F', at: STACK_F2,                       label: 'same corner' },
    // "F3 shades to the puck side instead, so that all three forwards overload
    // one corner and the far-side breakout is conceded deliberately." Same depth
    // as the spread version's F3 (x 54); only the side has changed.
    { id: 'F3', pos: 'F', at: { at: 'top-of-circle:right', dy: -6 }, label: 'shades to the puck' },
    { id: 'D',  pos: 'D', at: 'point:right',                  label: 'holds the line' },
    { id: 'D',  pos: 'D', at: 'point:left',                   label: 'holds the line' },
  ],

  // One route, and it is the cost rather than the benefit: "the far-side breakout
  // is conceded deliberately".
  //
  // Bowed hard, because the straight line between these two points goes through
  // the net. At bow 4 it cleared the back rail (x 92.33) by a tenth of a foot on
  // the base curve — and a carry is drawn as a wave with an amplitude of 1.25 ft
  // either side, so the drawn line sat on the net. At bow 8 the base curve crosses
  // the middle of the ice at x 94.8 and the wave's inner edge at 93.6.
  routes: [
    { from: CARRIER, to: { at: 'corner:left', dx: 4, dy: 8 }, kind: 'carry', bow: 8 },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------

// F1 in BOTH containment systems below. The section describes the two jobs in
// almost the same words — 1-2-2: "pressures the carrier but does not commit to
// winning the puck ... cut the ice in half"; 1-3-1: "does not chase. They steer.
// They take away the middle and shepherd the breakout to one side" — and nowhere
// distinguishes where the two stand. Drawing them in one place says what the
// section says: the difference between a 1-2-2 and a 1-3-1 is entirely BEHIND F1.
//
// Deep and inside the strong-side dot, so the glyph itself shows "stay on the
// inside so it cannot come back across". Neither system gets an F1 route: how a
// forechecker finishes an angle is movement over time, it is its own section, and
// the note on route 1 of the 2-1-2 above records what happened both times it was
// drawn anyway.
const F1_STEER = { at: 'faceoff-dot:right', dx: 9, dy: -8 };   // (78, 14)

const EXIT_122 = { at: 'faceoff-dot:right', dx: 14, dy: 5 };   // (83, 27)
const F2_FOX = { at: 'top-of-circle:right', dy: 8 };           // (54, 30)

const forecheck122 = {
  numbered: true,
  id: 'forecheck-122',
  owner: 'content/systems/forechecking_systems.md',
  half: true,
  width: 900,

  caption:
    'A 1-2-2 forecheck against the same puck carrier as the 2-1-2 above, so the two can be compared: one ' +
    'forward deep, two across the middle of the zone, two defencemen high at the offensive blue line. ' +
    'One forward deep and not two is the whole difference — this system concedes the retrieval on purpose and ' +
    'builds a wall the opponent has to pass through instead. ' +
    'F1 pressures without committing to winning the puck, cutting the ice in half and then staying inside so ' +
    'the play cannot come back across; F2 sits up the strong-side wall and is the player who actually creates ' +
    'the turnover, by jumping an outlet F1 has made predictable; F3 holds the high middle. ' +
    'Some coaches teach the three as the dog, the fox and the hawk, which is a memory hook some teams use ' +
    'rather than standard hockey vocabulary, and the labels here follow it. ' +
    'Three things drawn are coaching choices and not laws — which side F1 cuts off, the weak-side defenceman ' +
    'holding the middle rather than the far point, and the choice of this system at all, since the ' +
    'more usual default is the 2-1-2 — so find out which your team runs. ' +
    'Whether the outlet beats F2 or F2 beats the outlet is the contest the system turns on, and the diagram ' +
    'does not settle it. ' +
    'Note what F2 is drawn doing: arriving at the wall, not at the winger. Where body checking is allowed at all, the arriving player carries the whole onus — take the puck, take the ice, or angle them off it. Finishing into the back of a player who is facing away is a major and an automatic game misconduct under both the NHL and IIHF books, with no minor option available. And body checking is not allowed at all in many leagues: USA Hockey Rule 604(a) prohibits it at 12-and-under and below, in every girls\' and women\'s classification, and in non-check adult hockey.',

  describe:
    'Attacking half of the rink, the opposition net at the right. The same five opposition players as the ' +
    '2-1-2 diagram: the defenceman D1 behind the net with the puck, the partner D2 low on the far side as the ' +
    'D-to-D reset, the wingers W1 and W2 on the two half-walls, and the goaltender in the crease. Five own ' +
    'players in three bands: F1 alone deep, inside the strong-side faceoff dot; F2 up the strong-side wall ' +
    'and F3 in the high middle, level with each other around the top of the circles; and both defencemen on ' +
    'the offensive blue line, the strong-side one at the point and the weak-side one shaded into the middle. ' +
    'Three numbered routes: one, the carrier picks the puck up unmolested and carries it out to the ' +
    'strong-side wall; two, F2 jumps down the wall onto the outlet; three, the outlet pass to W1. F1 is drawn ' +
    'with no route.',

  players: [
    // Opposition — identical to forecheck-212, for the comparison to mean anything.
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER },
    // The section's own counter to this system: "D-to-D passes to shift the wall",
    // and "if the whole shape simply shifts across ... D-to-D is a free reset".
    { id: 'D2', team: 'opp', pos: 'D', at: OPP_D2,             label: 'the D-to-D reset' },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right',  label: 'the outlet' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // One glyph deep (x 78), two level in the middle band (x 54 and 57), two on
    // the line (x 25). The labels are the animal names alone because the jobs do
    // not fit: the placer sizes a label by its character count, and the long
    // versions crowded the carrier's corner badly enough to move other labels
    // onto the goaltender. The caption carries the jobs.
    { id: 'F1', pos: 'F', at: F1_STEER,                        label: 'the dog' },
    { id: 'F2', pos: 'F', at: F2_FOX,                          label: 'the fox' },
    // "F3 (hawk) roams the high middle, protecting the centre lane." Level with
    // F2 rather than behind it, because the shape's middle layer is a layer.
    { id: 'F3', pos: 'F', at: { at: 'high-slot', dx: -12 },     label: 'the hawk' },
    { id: 'D',  pos: 'D', at: 'point:right',                    label: 'holds the line' },
    // "the weak-side D stays home in the middle as the safety" — and the counter
    // section is explicit that this player is "the safety *inside* the shape,
    // covering the middle behind the forwards, not a fifth man stationed behind
    // the pair". Drawn at the line, shaded to the middle, which is what that says.
    { id: 'D',  pos: 'D', at: { at: 'point:left', dy: 12 },     label: 'the safety' },
  ],

  routes: [
    // 1 — "You are letting their defencemen pick the puck up unmolested and
    //     choose a play." That concession is the system, so it is route one.
    //     Bowed toward the end boards so it hugs the wall; it crosses the goal
    //     line at y = 21, nowhere near the goal mouth.
    { from: CARRIER, to: EXIT_122, kind: 'carry', bow: -6 },
    // 2 — "F2 is the one who actually creates the turnover in this system, by
    //     jumping an outlet pass that F1 has made predictable." Ordered BEFORE
    //     the pass, because jumping a pass means anticipating it — the same
    //     ordering the 2-1-2 above uses for F2 attacking the option.
    //
    //     Bowed inward and finishing outward toward the wall. The measurement
    //     that matters is against the PLAYER, not the puck — an earlier version of
    //     this comment quoted an angle to the puck, which is the wrong reference,
    //     and quoted two figures neither of which reproduced against either
    //     coordinate set. A guard whose arithmetic does not check out is worse
    //     than none: the next editor "corrects" the drawing to match it.
    //     SAFETY, ruled by safety-reviewer. This route is governed by THE ARRIVAL
    //     INVARIANT — stated normatively above `playSvg` in scripts/lib/rink.mjs and
    //     enforced by scripts/check-arrivals.mjs, which fails the build. It is
    //     deliberately NOT restated here. SIX copies of it existed, no two alike and
    //     none enforced: two verbatim in this file, a differently-scoped third in
    //     rink.mjs, two more in faceoffs.mjs and defensive_zone_coverage.mjs, and a
    //     reader-facing sixth in reading_ice_hockey_diagrams.md — plus an operative
    //     ANGLE in defending_the_rush.mjs that the invariant disclaims. The first
    //     consolidation pass found four of the six and would have claimed all of them,
    //     which is how a route came to finish on a player in positions.mjs three
    //     lines below a comment forbidding exactly that. The case history below is
    //     what belongs in this file; the rule is not.
    //     Both of the corpus's previously accepted arrivals sit at d ~ 7 ft with a
    //     bar. This route sat at d = 6.3 ft with an arrowhead, and its clearance
    //     was 0.83 ft against the half-wall value that was committed at the time —
    //     i.e. the ray went through the winger. It only cleared at all because an
    //     unrelated, uncommitted change had moved the half-wall 5.5 ft (33 to 38.5,
    //     site/src/data/rink.json; this said 7 ft). Safety must
    //     not depend on a coordinate edited for a cosmetic reason, so the endpoint
    //     is now expressed relative to the winger himself and capped.
    { from: F2_FOX, to: { at: 'half-wall:right', dx: -11, dy: -2 }, kind: 'pressure', bow: -2 },
    // 3 — the outlet. Whether it beats F2 is not settled here.
    { from: EXIT_122, to: { at: 'half-wall:right', dx: 4, dy: -3 }, kind: 'pass' },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------

// The line of three, flat. "the line is flat, so anything behind it is behind all
// three at once" — so all three sit at exactly the same x, and any temptation to
// stagger them for a prettier picture destroys the thing being taught.
const LINE3_WALL = { at: 'top-of-circle:right', dy: 11 };   // (54, 33)
const LINE3_MID = { at: 'high-slot', dx: -15 };             // (54, 0)
const LINE3_FAR = { at: 'top-of-circle:left', dy: -11 };    // (54, -33)

const forecheck131 = {
  id: 'forecheck-131',
  owner: 'content/systems/forechecking_systems.md',
  half: true,
  width: 900,

  caption:
    'The 1-3-1 pushed up into the offensive zone, against the same puck carrier as the other diagrams: one ' +
    'forward pressuring, three players spread flat across the width of the ice, and one player behind them as ' +
    'the last man. ' +
    'The line of three is conventionally F2, F3 and one defenceman, the defenceman in the middle as the ' +
    'read-maker and the two forwards on the walls — it cannot be three forwards, because F1 is already a ' +
    'forward and there are only three on the ice. ' +
    'F1 does not chase but steers, taking the middle away and shepherding the breakout to one side; as the ' +
    'puck commits to that side the whole line shifts with it, the puck-side player stepping down as an ' +
    'immediate second attacker while the other two slide across to cover the retreat. ' +
    'What it concedes is drawn as plainly as what it takes: the initial puck entirely, and a great deal of ' +
    'ice behind a line that is flat, so a chip past it is past all three at once. ' +
    'It is one system among several and not a beginner one — it asks three players to read and skate ' +
    'laterally at the same time — and the far more common use of the same name is a passive neutral-zone ' +
    'shape that is not a forecheck in any literal sense. ' +
    'Note what F2 is drawn doing: arriving at the wall, not at the winger. Where body checking is allowed at all, the arriving player carries the whole onus — take the puck, take the ice, or angle them off it. Finishing into the back of a player who is facing away is a major and an automatic game misconduct under both the NHL and IIHF books, with no minor option available. And body checking is not allowed at all in many leagues: USA Hockey Rule 604(a) prohibits it at 12-and-under and below, in every girls\' and women\'s classification, and in non-check adult hockey.',

  describe:
    'Attacking half of the rink, the opposition net at the right, and the same five opposition players as the ' +
    'other forecheck diagrams. Five own players in three bands: F1 alone deep, inside the strong-side faceoff ' +
    'dot; then a flat line of three at the top of the circles — F2 on the strong-side wall, a defenceman in ' +
    'the middle of the ice, F3 on the far wall, all three at exactly the same depth; then the second ' +
    'defenceman alone on the offensive blue line in the middle, as the safety behind them. Three unnumbered ' +
    'routes, because they happen together: F2 steps down the strong-side wall as the second attacker, and the ' +
    'defenceman in the middle and F3 on the far wall both slide laterally towards the puck side. F1 is drawn ' +
    'with no route.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER },
    { id: 'D2', team: 'opp', pos: 'D', at: OPP_D2 },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right', label: 'the outlet' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // 1 — 3 — 1, counted from the goal line outwards: F1 at x 78, the line at
    // x 54, the safety at x 25. Three unambiguous bands.
    { id: 'F1', pos: 'F', at: F1_STEER,   label: 'steers, does not chase' },
    { id: 'F2', pos: 'F', at: LINE3_WALL, label: 'on the wall' },
    // "with the defenceman in the middle as the read-maker" — a defender triangle
    // in the middle of the line of three is what makes this a 1-3-1 rather than
    // the three-forward shape the section explicitly rules out.
    { id: 'D',  pos: 'D', at: LINE3_MID,  label: 'the read-maker' },
    { id: 'F3', pos: 'F', at: LINE3_FAR,  label: 'the far wall' },
    // "The single high player is the safety, responsible for anything that gets
    // behind the line of three." One player, in the middle, behind the line.
    { id: 'D',  pos: 'D', at: 'centre-point', label: 'the safety, last man' },
  ],

  // Unnumbered on purpose. "As the puck commits to one side, the whole line
  // shifts with it" is one movement by three players at once, not a sequence —
  // numbering it would invent an order the section does not state.
  routes: [
    // F2: "the puck-side player becomes an immediate second attacker". Finishes
    // outward towards the wall rather than in at the carrier.
    //     SAFETY, ruled by safety-reviewer. This route is governed by THE ARRIVAL
    //     INVARIANT — stated normatively above `playSvg` in scripts/lib/rink.mjs and
    //     enforced by scripts/check-arrivals.mjs, which fails the build. It is
    //     deliberately NOT restated here. SIX copies of it existed, no two alike and
    //     none enforced: two verbatim in this file, a differently-scoped third in
    //     rink.mjs, two more in faceoffs.mjs and defensive_zone_coverage.mjs, and a
    //     reader-facing sixth in reading_ice_hockey_diagrams.md — plus an operative
    //     ANGLE in defending_the_rush.mjs that the invariant disclaims. The first
    //     consolidation pass found four of the six and would have claimed all of them,
    //     which is how a route came to finish on a player in positions.mjs three
    //     lines below a comment forbidding exactly that. The case history below is
    //     what belongs in this file; the rule is not.
    //     Both of the corpus's previously accepted arrivals sit at d ~ 7 ft with a
    //     bar. This route sat at d = 6.3 ft with an arrowhead, and its clearance
    //     was 0.83 ft against the half-wall value that was committed at the time —
    //     i.e. the ray went through the winger. It only cleared at all because an
    //     unrelated, uncommitted change had moved the half-wall 5.5 ft (33 to 38.5,
    //     site/src/data/rink.json; this said 7 ft). Safety must
    //     not depend on a coordinate edited for a cosmetic reason, so the endpoint
    //     is now expressed relative to the winger himself and capped.
    { from: LINE3_WALL, to: { at: 'half-wall:right', dx: -11, dy: -3 }, kind: 'pressure', bow: -2 },
    // The other two: "the whole line shifts with it ... while the others cover
    // the retreat". Lateral, so the key's LATERAL CROSSOVERS symbol and not
    // forward skating — the two mean different things and the key defines both.
    { from: LINE3_MID, to: { at: 'high-slot', dx: -15, dy: 11 }, kind: 'crossovers' },
    { from: LINE3_FAR, to: 'top-of-circle:left', kind: 'crossovers' },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------

// The pinch. Drawn inside a 2-1-2 because a picture of a defenceman needs forwards
// somewhere and any arrangement of them names a system — so it names the
// document's declared house default rather than pretending to be system-neutral,
// and the caption says so. The exchange itself the section states generally: "at
// 5-on-5 in every forecheck described above, only one defenceman pinches at a
// time", and every system above keeps F3 high.
//
// Their strong-side winger is NOT drawn. The section's pinch test has two cases —
// arrive on contact so you can "play the puck or legally seal the opposing winger
// against the boards", or, on "a pure race for a loose puck or a dying rim with
// nobody contesting it", arrive clearly first. Drawing the second case keeps every
// arrowhead off a player: a diagram of a defenceman finishing into a winger pinned
// against the boards is a checking-from-behind picture waiting for a bad reader,
// and this section is not the place to teach that contact.
const RIM_FROM = { at: 'corner:right', dx: -1, dy: 1 };     // (81, 35)
const RIM_TO = { at: 'boards:right', dx: -12, dy: -5 };     // (57, 37.5)
const D_STRONG = 'point:right';                             // (25, 20)
const F3_HIGH = { at: 'high-slot', dx: -15 };               // (54, 0)

const forecheckPinch = {
  numbered: true,
  id: 'forecheck-pinch',
  owner: 'content/systems/forechecking_systems.md',
  half: true,
  width: 900,

  caption:
    'The exchange that decides whether a forecheck is worth running, drawn inside a 2-1-2 because the ' +
    'forwards have to be somewhere: their defenceman rims the puck up the strong-side wall to escape, your ' +
    'strong-side defenceman steps down from the offensive blue line to kill it, and F3 leaves the high middle ' +
    'to cover the point that has just been vacated. ' +
    'The two arrows finish pointing at each other and about ten feet apart on purpose — the test for going is ' +
    '"if you can\'t arrive on contact, don\'t go", meaning you and the puck reach the wall at the same moment ' +
    '— and on the pure race drawn here, a dying rim with nobody to seal, the bar is higher still: you have to ' +
    'arrive clearly first, not probably first. ' +
    'The weak-side defenceman does not join in, and holding the middle is what makes a failed pinch a ' +
    'two-on-one rather than a breakaway — which is why their far winger is drawn already climbing towards ' +
    'the exit. ' +
    'Two things here are coaching choices rather than laws: that only one defenceman pinches at a time, which ' +
    'is close to universal but still a choice, and that F3 is the one who covers the vacated point, where ' +
    'some teams slide the weak-side defenceman across instead and some pinch only when F3 has already called ' +
    'that they are high — so ask which yours is. ' +
    'And note what the picture cannot promise: a rim that gets past a pinching defenceman is the ' +
    'highest-value counter there is to an aggressive forecheck, because it turns two deep forecheckers into ' +
    'two irrelevant ones.',

  describe:
    'Attacking half of the rink, the opposition net at the right, with the puck in the strong-side corner. ' +
    'Three opposition players: the defenceman D1 in the corner rimming the puck up the wall, their far winger ' +
    'W2 already high on the weak side heading for the exit, and the goaltender. Five own players in a 2-1-2: ' +
    'F1 deep, sealing the strong-side corner; F2 deep inside the strong-side circle; F3 high in the middle at ' +
    'the top of the circles; the strong-side defenceman at the offensive blue line; and the weak-side ' +
    'defenceman at the line but shaded into the middle of the ice. Three numbered routes: one, the rim ' +
    'travelling up the boards outside everybody; two, the strong-side defenceman stepping down the wall to ' +
    'meet it, the two arrows finishing about ten feet apart and pointing at each other; three, F3 leaving the ' +
    'high middle for the vacated point, stopping short of the defenceman who is still drawn on it.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // Short label on purpose. "rims it up the wall" is 19 characters, and the
    // placer sizes a label by its character count: the long version was wide
    // enough to collide with F1's glyph in every slot near the carrier, so it fell
    // through to the grid fallback and landed nearer F1 than the carrier it named.
    // The route and the caption say what a rim is.
    { id: 'D1', team: 'opp', pos: 'D', at: 'corner:right',   label: 'the rim' },
    // "by the time their defenceman has the puck down there their forwards have
    // already released above it — climbing towards their blue line looking for
    // the exit". Drawn because it is the reason the weak-side defenceman stays
    // home; without an opponent going the other way, a safety looks like a player
    // doing nothing.
    { id: 'W2', team: 'opp', pos: 'F', at: { at: 'top-of-circle:left', dx: -6, dy: -4 },
      label: 'already climbing' },

    // Two deep, one high, two on the line — the 2-1-2 of the section above, with
    // the puck now in the corner rather than behind the net.
    // Both deliberately unlabelled: this diagram is about the defencemen, and the
    // five labels it does carry are the five things it teaches. A label on F1 came
    // out 11 ft from F1 and 13.9 ft from F2, which is close enough to be either.
    { id: 'F1', pos: 'F', at: { at: 'faceoff-dot:right', dx: 3, dy: 5 } },
    { id: 'F2', pos: 'F', at: { at: 'half-wall:right', dx: -9, dy: -10 } },
    // "Pinch only when F3 is high and in position to rotate back and cover the
    // point you are vacating. This is the exchange that makes pinching safe: you
    // go down, F3 comes back. If F3 is in the corner, the exchange is not
    // available."
    { id: 'F3', pos: 'F', at: F3_HIGH,                                     label: 'covers the point' },
    { id: 'D',  pos: 'D', at: D_STRONG,                                    label: 'arrive on contact' },
    { id: 'D',  pos: 'D', at: { at: 'point:left', dy: 12 },                label: 'the safety' },
  ],

  routes: [
    // 1 — the rim. It hugs the boards and passes outside F2, which is the whole
    //     reason a rim beats a forechecker sealing you in: it goes around
    //     everybody rather than through them. Drawn with the key's PASSING symbol
    //     because that is the published symbol for a puck travelling on its own;
    //     the key has no separate symbol for a rim, and inventing one is the
    //     failure the notation header in rink.mjs records.
    { from: RIM_FROM, to: RIM_TO, kind: 'pass', bow: -2 },
    // 2 — the pinch. Ends about ten feet short of where the rim's arrow ends, so
    //     the two point at each other and the picture says "these arrive
    //     together" rather than "the defenceman gets there first", which the
    //     section never promises. Neither arrowhead lands on a player.
    { from: D_STRONG, to: { at: 'boards:right', dx: -22, dy: -5 }, kind: 'skate', bow: 3 },
    // 3 — "The common default is that F3 recovers towards the middle and replaces
    //     them at the blue line — this is the single most commonly missed job on
    //     the forecheck." Stops nine feet short of the defenceman's glyph, which
    //     is still drawn at the point it is in the act of leaving.
    { from: F3_HIGH, to: { at: 'point:right', dx: 6, dy: -7 }, kind: 'skate', bow: -2 },
  ],

  puck: { at: 'corner:right', dx: -1.5, dy: 1.5 },
};

export default [forecheck212, forecheck212Stacked, forecheck122, forecheck131, forecheckPinch];
