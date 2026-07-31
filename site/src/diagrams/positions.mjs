/**
 * Diagrams for the three position documents:
 *   content/positions/center.md
 *   content/positions/winger.md
 *   content/positions/defender.md
 *
 * The owning section is the source of truth for each diagram. Every player and
 * every route below is one its own owner's prose describes, and where that prose
 * hedges — "a coaching choice, not a law", "find out which your team plays" —
 * the caption carries the hedge.
 *
 * THE THREE DOCUMENTS OVERLAP DELIBERATELY, and the overlaps are diagrammed ONCE.
 * The low zone collapse rotation is described from three sides (the centre leaving
 * the slot, the winger collapsing to it, the defenceman holding the goalmouth); it
 * is drawn once, owned by center.md, whose "Pressuring an Opponent with the Puck"
 * section is the only one that states all five own players' positions in a single
 * passage. The backcheck lane assignment is in center.md and winger.md; it is drawn
 * once, owned by center.md, which is the document that owns the middle-lane driver.
 * Nothing here draws a claim from one position's document under another's name.
 *
 * F1/F2/F3 DO NOT APPEAR IN THIS FILE. All three documents are emphatic that they
 * are roles set by order of arrival rather than people, and winger.md spends a
 * boxed note killing exactly the inference that F1 is the centre. Every glyph here
 * is labelled with the positional vocabulary its own document uses — C, LW, RW, D.
 */

// ---------------------------------------------------------------------------
// Shared anchors. Named once where more than one thing refers to them, so a
// route and the player it starts on cannot drift apart.
// ---------------------------------------------------------------------------

// The high slot, exactly as all three documents define it: "between the dots and
// the top of the circles". All four corners are named positions, so the shaded
// region cannot disagree with the coordinate table.
const HIGH_SLOT = [
  'top-of-circle:left', 'top-of-circle:right', 'faceoff-dot:right', 'faceoff-dot:left',
];

// ---------------------------------------------------------------------------
// 1 · Low zone collapse, with the centre gone to the corner
//     owner: content/positions/center.md — "Pressuring an Opponent with the Puck"
// ---------------------------------------------------------------------------

const CARRIER_1 = { at: 'corner:right', dx: 2, dy: 1 };   // (84, 35) deep in the corner
const LW_POINT = { at: 'point:left', dx: 5, dy: 3 };      // (30, -17) leaving his point

const lowZoneCollapse = {
  id: 'centre-low-zone-collapse',
  owner: 'content/positions/center.md',
  half: true,
  width: 900,

  caption:
    'Your own defensive zone with the puck in the strong-side corner, at the moment the centre ' +
    'has left the slot to help win it. The strong-side defenceman plays the puck and the centre ' +
    'joins him, because two of you on the puck almost always wins it; the weak-side defenceman ' +
    'stays at the goalmouth; the strong-side winger stays high covering the point; and the ' +
    'weak-side winger collapses from his own point to cover the high slot the centre has vacated. ' +
    'Those last two are two layers with two owners — the goalmouth is the weak-side defenceman’s ' +
    'and the high slot, between the dots and the top of the circles, is the centre’s — and anyone ' +
    'with a clear view calls the rotation early so the slot is never empty. ' +
    'This is a low zone collapse, the zone coverage assumed throughout, and it is ' +
    'a coaching choice rather than a rule of hockey: under man-on-man the wingers follow their ' +
    'check into the corner instead, and under a hybrid they take their man down only below the ' +
    'dots. Find out which one your team plays before your first shift.',

  describe:
    'The defending half of the rink, your own net at the right. Three opposition players: the puck ' +
    'carrier deep in the right corner, and the two opposing defencemen at their points near the ' +
    'blue line. Six of your own: the goaltender in the crease; the strong-side defenceman in the ' +
    'corner between the carrier and the net; the centre low in the strong-side circle supporting ' +
    'him; the weak-side defenceman at the goalmouth on the far side of the net; the strong-side ' +
    'winger high on the right, goal-side of the opposing defenceman he is covering; and the ' +
    'weak-side winger, who has left his point on the left and is skating to the high slot. The ' +
    'high slot is shaded. One route: the weak-side winger’s collapse. The opposition forwards ' +
    'other than the carrier are not drawn.',

  zones: [{ points: HIGH_SLOT, label: 'the high slot' }],

  players: [
    // Opposition: the carrier, and the two point men that the wingers' "stay high
    // covering the points" job is defined against — the section names the points as
    // "the areas near the blue line where the opposing defensemen normally stand".
    { id: 'G', pos: 'G', at: { at: 'crease', dx: 1 } },                    // ours, filled
    { id: 'F', team: 'opp', pos: 'F', at: CARRIER_1, label: 'puck carrier' },
    // No opposition forward is drawn at the net front, and that is a rendering
    // decision rather than a tactical one: with one there, no legal slot existed
    // for the weak-side defenceman's own label and the placer put "goalmouth"
    // between him and the goaltender, where it read as the goaltender's. The
    // instruction survives the omission — both center.md and defender.md say the
    // weak-side defenceman holds that ice whether or not somebody is standing on
    // it ("Make sure no opponent is sitting unmarked at the goalmouth").
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'point:right', dy: 4 } },  // (25, 24)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'point:left', dx: -1, dy: -4 } },  // (24, -24)

    // Own team, all five, as the section places them: "The wingers stay high
    // covering the points, and the weak-side defender holds the net front. You are
    // the flexible low support that links the corner battle and the slot."
    //
    // The strong-side defenceman is unlabelled: five labels in this corner left the
    // "goalmouth" one stranded in the gap between the weak-side defenceman and the
    // goaltender, where it read as the goaltender's. A defenceman drawn beside the
    // puck carrier needs no caption.
    { id: 'D', pos: 'D', at: { at: 'corner:right', dx: 3, dy: -7 } },                             // (85, 27)
    { id: 'C', pos: 'F', at: { at: 'faceoff-dot:right', dx: 8, dy: 3 }, label: 'low support' },   // (77, 25)
    // The goalmouth, on the weak side of the net — "at the goalmouth, between any
    // opposing forward and your goalie". One word, because the first draft's "holds
    // the goalmouth" was too wide for any free slot near the net and the placer
    // dropped it in mid-ice, across the zone label.
    { id: 'D', pos: 'D', at: { at: 'goalmouth', dx: -2, dy: -7 }, label: 'goalmouth' },           // (83, -7)
    { id: 'RW', pos: 'F', at: { at: 'point:right', dx: 8, dy: -1 }, label: 'stays high' },        // (33, 19)
    { id: 'LW', pos: 'F', at: LW_POINT, label: 'collapses' },                                     // (30, -17)
  ],

  // One route only. The rotation is the lesson; the centre is drawn already in his
  // support position rather than arrowed into the corner, because an arrow that
  // finishes pointing at the carrier is the "skate at the puck, not the space"
  // defect this project has already caught once.
  routes: [
    { from: LW_POINT, to: { at: 'high-slot', dx: -4, dy: -6 }, kind: 'skate', bow: -3 },
  ],

  puck: { at: 'corner:right', dx: -1, dy: -1 },
};

// ---------------------------------------------------------------------------
// 2 · Swinging low for the breakout
//     owner: content/positions/center.md
//            — "Without the Puck — Getting Open for the Breakout", and
//              "Carrying the Puck — Free Space"
//
// Deliberately a different moment from diagram 1, and the section says why:
// "This is the situation where your team is about to have the puck ... It is not
// defensive coverage — that is the section above." No opposition is drawn because
// the section this comes from is the free-space one.
// ---------------------------------------------------------------------------

const C_LOW = { at: 'faceoff-dot:right', dx: 6, dy: -5 };   // (75, 17)
// Behind the net and well round to the strong side. Straight behind the net at
// y=0 the puck glyph sat as close to the goaltender as to the defenceman and read
// as the goalie's, the defenceman's own label was placed nearer the goaltender
// than to him, and an outlet from the weak side would have crossed the goalmouth.
const D_BEHIND = { at: 'behind-net', dx: -2, dy: 12 };      // (92, 12)

const swingLow = {
  id: 'centre-swing-low',
  owner: 'content/positions/center.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'Your defenceman has the puck behind his own net and the centre is swinging low to be the ' +
    'outlet — inside the faceoff dots and below the hash marks, which in practice means inside ' +
    'the strong-side faceoff circle rather than out on the boards. The boards are the strong-side ' +
    'winger’s ice: a centre who drifts out there lets one opponent cover both of them, and the ' +
    'defenceman loses the middle-lane option entirely. Having received it (one), the centre ' +
    'carries out through the middle if the lane is clearly open (two); if it is not, the puck ' +
    'goes to the winger on the boards instead. Low support like this belongs to the conventional ' +
    'swing breakout, which is a coaching choice and not a rule: under a centre fly you leave the ' +
    'zone early up the middle and the weak-side winger drops in to take this job, and under a ' +
    'flat or spread breakout both wingers hold higher near the blue line. Find out which one your ' +
    'team plays — a centre flying while the wingers hold high leaves nobody underneath the puck.',

  describe:
    'The defending half of the rink, your own net at the right, and no opposition drawn — this is ' +
    'the free-space case. Three of your own players: the defenceman behind his own net with the ' +
    'puck; the centre low in the strong-side faceoff circle, inside the dot and below the hash ' +
    'marks; and the strong-side winger out on the boards above him. Two numbered routes: one, the ' +
    'pass from the defenceman to the centre, passing above the goal frame rather than across the ' +
    'goalmouth; two, the centre carrying out through the middle of the ice toward the blue line.',

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
    // Unlabelled. Behind the net there is no room for one: the placer needs the
    // whole label box on the ice, and every long label anchored out here was
    // therefore dropped beside the goaltender instead, where it read as his.
    { id: 'D',  pos: 'D', at: D_BEHIND },
    { id: 'C',  pos: 'F', at: C_LOW,    label: 'swings low' },
    // "The boards are the strong-side winger's ice." Out at y=37 rather than 35:
    // the end-zone circle reaches y=37, so a winger drawn at 35 renders inside the
    // circle and reads as being in the centre's patch rather than on the wall.
    { id: 'RW', pos: 'F', at: { at: 'half-wall:right', dx: 4, dy: 4 }, label: 'the winger’s ice' },
  ],

  routes: [
    // 1 — the outlet. Ends six feet short of the centre's glyph, and is aimed over
    //     the top of the goal frame: it clears the crease and the goalmouth, which
    //     is where the corpus says a puck in your own end must never travel.
    { from: D_BEHIND, to: { at: 'faceoff-dot:right', dx: 11.8, dy: -6.7 }, kind: 'pass' },
    // 2 — "Carry up the middle if the lane is clearly open." Bowed so the route
    //     swings into the middle lane rather than running flat across the zone.
    { from: C_LOW, to: { at: 'blue-line', dx: 12, dy: 4 }, kind: 'carry', bow: 4 },
  ],

  puck: { at: 'behind-net', dx: -5, dy: 9 },
};

// ---------------------------------------------------------------------------
// 3 · The backcheck — the middle lane
//     owner: content/positions/center.md — "Backchecking — the middle lane is
//     usually yours"
//
// winger.md describes the same assignment from the outside lanes. It is drawn
// once, here, because this is the document that owns the middle-lane driver.
// The two defencemen are drawn retreating together and sealing the middle, which
// is the one thing both of the named ways of defending a three-attacker rush have
// in common (defender.md: "Under both: retreat together and keep the middle of
// the ice sealed as long as possible") — so the picture does not silently pick a
// 3-on-2 system that is a coaching choice.
// ---------------------------------------------------------------------------

const DRIVER = { at: 'neutral-zone-mid', dx: 14, dy: 2 };   // (26, 2)

const backcheckMiddleLane = {
  id: 'centre-backcheck-middle-lane',
  owner: 'content/positions/center.md',
  half: true,
  width: 900,

  caption:
    'A rush coming back at you, and the centre’s backcheck. The most dangerous attacker is ' +
    'usually not the puck carrier but the forward filling the middle of the ice behind him, ' +
    'arriving late and unmarked into the slot — and under the standard positional assignment ' +
    'that player is the centre’s, with the wingers taking the outside lanes. Come back on the ' +
    'defensive side of your man, between him and your own net, rather than chasing behind his ' +
    'shoulder; and do not swing wide to help on the carrier, because your defencemen have him ' +
    'and leaving the middle abandons the exact ice they are protecting. Which backchecker takes ' +
    'which lane is a coaching choice, not a law: some teams give the middle to the first man ' +
    'back, whoever that is, and others pick up man-on-man from the puck outward, so find out ' +
    'which yours plays — under every one of them somebody is responsible for the middle and ' +
    'nobody assumes it is somebody else. The defencemen are drawn retreating together and keeping the middle ' +
    'sealed, which both named ways of defending a three-attacker rush have in common; how they ' +
    'divide the attackers between them is its own coaching choice.',

  describe:
    'The defending half of the rink, your own net at the right, with three opposition forwards ' +
    'attacking from the left. The puck carrier is wide on the right; a second forward drives the ' +
    'middle of the ice behind him, with a short route showing his late arrival; a third is wide ' +
    'on the left. Coming back: the centre in the middle lane, already goal-side of the middle ' +
    'driver and between him and his own net; a winger in each outside lane, goal-side of the ' +
    'attacker in that lane; the two defencemen retreating together in front of them, keeping the ' +
    'middle of the ice sealed; and the goaltender in the crease.',

  players: [
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'neutral-dot:right', dx: 4, dy: 4 },
      label: 'puck carrier' },                                                  // (34, 26)
    { id: 'F', team: 'opp', pos: 'F', at: DRIVER, label: 'the middle-lane driver' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'neutral-dot:left', dy: -2 } }, // (30, -24)

    // "Come back on the defensive side of your man — between them and your own net."
    { id: 'C',  pos: 'F', at: { at: 'high-slot', dx: -24, dy: -4 }, label: 'inside his man' },  // (45, -4)
    { id: 'RW', pos: 'F', at: { at: 'neutral-dot:right', dx: 16, dy: 8 }, label: 'outside lane' },  // (46, 30)
    { id: 'LW', pos: 'F', at: { at: 'neutral-dot:left', dx: 14, dy: -6 }, label: 'outside lane' }, // (44, -28)
    { id: 'D',  pos: 'D', at: { at: 'top-of-circle:right', dx: -2, dy: -12 } }, // (52, 10)
    { id: 'D',  pos: 'D', at: { at: 'top-of-circle:left', dy: 14 } },          // (54, -8)
    { id: 'G',  pos: 'G', at: { at: 'crease', dx: 1 } },
  ],

  // One route. The driver's late arrival is the thing the section says nobody
  // picks up; the centre is drawn already inside him rather than arrowed there,
  // because "get to the inside" is a state, not a movement, and an arrow from the
  // driver that finished on the centre would read as a check rather than a lane.
  routes: [
    { from: DRIVER, to: { at: 'neutral-zone-mid', dx: 29, dy: 4 }, kind: 'skate' },  // (41, 6)
  ],

  puck: { at: 'neutral-dot:right', dx: 2, dy: 2 },
};

// ---------------------------------------------------------------------------
// 4 · The winger's defensive zone: high, then down the wall
//     owner: content/positions/winger.md
//            — "Without the Puck — Ready to Break Out"
//
// The section is explicit that this job "is defined by a *move* rather than a
// spot, so hold both ends of it", and it gives both ends: high and level with the
// opposing defenceman while they have the puck, then down to between the hash
// marks and the goal line as your team wins it, "about 40 feet below where you
// started". The glyph is at the high end and the route is the trip, because the
// section's failure mode is a winger who is already at the bottom of it.
// ---------------------------------------------------------------------------

const W_HIGH = { at: 'point:right', dx: 8 };                 // (33, 20)

const wingerHighThenWall = {
  id: 'winger-high-then-down-the-wall',
  owner: 'content/positions/winger.md',
  half: true,
  width: 900,

  caption:
    'A winger’s defensive-zone job, drawn at both ends of the one move that defines it. While the ' +
    'other team has the puck you are high on your side, roughly level with the opposing ' +
    'defenceman you are covering and between him and the slot — that is what "stay high" means, ' +
    'not halfway to the corner. The moment your team wins the battle below you it expires, and ' +
    'you come down the wall to between the hash marks and the goal line, 44 to 64 feet, ' +
    'presenting yourself as an outlet with your stick on the ice and your feet already moving. ' +
    'Watch the battle rather than the puck and turn your feet before it is won — but do not leave ' +
    'the point until it actually is: anticipating while you can still get back is coached, and ' +
    'abandoning your coverage on a hope is not. The wall position drawn here belongs to the ' +
    'conventional swing breakout, which is a coaching choice: a flat or spread structure asks you ' +
    'to hold higher toward the blue line, and a stretch or flying-winger structure sends one ' +
    'winger up ice altogether, so find out which one you are in.',

  describe:
    'The defending half of the rink, your own net at the right. Two opposition players: a ' +
    'defenceman at his point just inside the blue line on the right side, and a forechecking ' +
    'forward in the right corner. Three of your own: the goaltender in the crease; a defenceman ' +
    'in the corner contesting the puck; and the right winger high on the right side, goal-side of ' +
    'the opposing defenceman he is covering. One route runs from the winger down the wall, ' +
    'hugging the boards, to the outlet position on the boards between the hash marks and the goal ' +
    'line, arriving above the corner battle rather than in it. The centre and the weak-side ' +
    'players are not drawn.',

  players: [
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'point:right', dy: 4 }, label: 'the man you cover' },
    // The corner battle is deliberately unlabelled. Two labels eight feet apart in
    // the corner left the placer no legal slot, and it dropped "the forecheck" forty
    // feet away at the bottom of the boards with a leader line nobody would trace.
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'corner:right', dx: 4, dy: 2 } },

    { id: 'G',  pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D',  pos: 'D', at: { at: 'corner:right', dx: -2, dy: -4 } },
    { id: 'RW', pos: 'F', at: W_HIGH, label: 'high on your side' },
  ],

  // Bowed toward the boards so the trip hugs the wall, and stopped up-wall of the
  // battle: the outlet spot is where you receive, not where you join a fight. The
  // end is at y=37 rather than the half-wall's own y=33 because the end-zone circle
  // reaches y=37 — a route stopping inside it reads as ending in mid-ice, not on
  // the wall.
  routes: [
    { from: W_HIGH, to: { at: 'half-wall:right', dx: 3, dy: 4 }, kind: 'skate', bow: 6 },
  ],

  // Equidistant from the two players contesting it: the section's instruction is to
  // "watch the battle rather than the puck, and read who is going to come out of it
  // with possession", which is a loose puck, not a possessed one.
  puck: { at: 'corner:right', dx: 1, dy: -1 },
};

// ---------------------------------------------------------------------------
// 5 · The winger in the offensive zone — and the layer that is not his
//     owner: content/positions/winger.md
//            — "Without the Puck — Getting Open and Crashing the Net",
//              and "Carrying the Puck — Free Space" for the shot
//
// The high slot is shaded rather than occupied. winger.md says to leave it for the
// centre; center.md puts the centre further down, "just outside the crease", when
// getting open. Drawing a centre glyph would have to pick one of those, and that
// choice belongs to the documents, not to a picture. So the layer is marked and
// left empty.
// ---------------------------------------------------------------------------

const W_HALF_WALL = 'half-wall:right';
const W_CIRCLE = { at: 'faceoff-dot:left', dx: 4, dy: -4 };  // (73, -26)

const wingerOffensiveZone = {
  id: 'winger-offensive-zone-patches',
  owner: 'content/positions/winger.md',
  half: true,
  width: 900,

  caption:
    'Where a winger works in the offensive zone, and the one layer that is not his. The half-wall ' +
    '— the boards roughly level with the faceoff dot, between the corner and the point — is your ' +
    'home base, and from it you are ready to shoot or to feed the centre in the slot; your own ' +
    'faceoff circle is where you are ready for a one-timer off a cross-ice pass; and the side of ' +
    'the net is where rebounds and tip-ins live, so time the crash to arrive as the shot is taken ' +
    'rather than before it. Leave the high slot, between the dots and the top of the circles, for ' +
    'the centre: the goalmouth and the high slot are two patches with two owners, and running ' +
    'them together is how two forwards end up standing on the same square metre. "Shoot first" is ' +
    'a bias rather than a rule — a teammate with a clear look at an open side is always worth the ' +
    'extra pass. At the net front, live at the edge of the blue paint and keep your body out of ' +
    'the crease: screening from outside it without contact is legal, but positioning alone can ' +
    'void a goal if it stops the goalie moving freely or defending the net (NHL Rule 69.1).',

  describe:
    'The attacking half of the rink, the opposition net at the right, with only the opposition ' +
    'goaltender drawn. Two of your own players: the right winger on the right half-wall with the ' +
    'puck, and the left winger in the left faceoff circle. Two routes: a shot from the half-wall ' +
    'toward the net, stopping short of the crease, and the left winger’s skate to the side of the ' +
    'net, arriving beside it rather than in the blue paint. The high slot, between the faceoff ' +
    'dots and the top of the circles, is shaded and empty — it is the centre’s layer. The ' +
    'opposition defence is not drawn.',

  zones: [{ points: HIGH_SLOT, label: 'the high slot' }],

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'RW', pos: 'F', at: W_HALF_WALL, label: 'the half-wall' },
    { id: 'LW', pos: 'F', at: W_CIRCLE,    label: 'ready to one-time it' },
  ],

  // Not numbered: the section says to arrive "just as the shot is taken", so these
  // two are simultaneous, and a badge saying one preceded the other would teach the
  // mistiming the section warns about ("Arriving at the net front too early").
  // The crash is bowed so that it *finishes* running across the face of the net
  // toward the end boards rather than pointing into the crease. A route whose
  // terminal tangent aims at the goaltender draws goalie interference, which is
  // the one thing this caption tells the reader to stay out of.
  routes: [
    { from: W_HALF_WALL, to: { at: 'crease', dx: -7, dy: 6 }, kind: 'shot' },
    { from: W_CIRCLE, to: { at: 'goalmouth', dx: 1, dy: -10 }, kind: 'skate', bow: 6 },
  ],

  puck: { at: 'half-wall:right', dx: -1, dy: -2 },
};

// ---------------------------------------------------------------------------
// 6 · The two-on-one
//     owner: content/positions/defender.md — "Defending the Rush — quick reference"
//
// No backchecker is drawn, and that is load-bearing: the section's own caveat is
// that once a backchecker has picked up the second attacker "it is no longer a
// 2-on-1". Drawing one would draw a different situation.
// ---------------------------------------------------------------------------

const D_LANE = { at: 'blue-line', dx: 15, dy: 1 };            // (40, 1)
const CARRIER_6 = { at: 'neutral-dot:right', dx: 4, dy: -4 }; // (34, 18)

const twoOnOne = {
  id: 'defender-two-on-one',
  owner: 'content/positions/defender.md',
  half: true,
  width: 900,

  caption:
    'A two-on-one: take away the pass and give up the shot. Sit in the passing lane between the ' +
    'two attackers with your stick flat on the ice on the passing side, back up under control, ' +
    'and do not slide unless the pass has already been released — a cross-ice pass to an open ' +
    'forward is a chance your goaltender cannot save, whereas the shot is one they can see and ' +
    'are set for. That is a convention rather than a law, and it carries one honest caveat: if ' +
    'the second attacker has been picked up by a backchecker and ' +
    'the shooter is walking into the slot completely unpressured with no realistic pass ' +
    'available, it is no longer a two-on-one and you close on the puck. Read what is actually in ' +
    'front of you rather than the label. No backchecker is drawn here, because one would make ' +
    'this a different situation.',

  describe:
    'The defending half of the rink, your own net at the right. Two opposition forwards attack ' +
    'from the left, one wide on each side of the ice, with the puck on the right-hand one; a ' +
    'route shows him carrying toward the top of the circle. Between and ahead of them is a single ' +
    'defenceman, sitting in the passing lane that joins the two attackers, with a backward ' +
    'skating route showing him retreating under control rather than stepping up. The goaltender ' +
    'is in the crease. Nobody is backchecking.',

  players: [
    { id: 'F', team: 'opp', pos: 'F', at: CARRIER_6, label: 'puck carrier' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'neutral-dot:left', dx: 6, dy: 8 },
      label: 'the pass you take away' },                                        // (36, -16)
    { id: 'D', pos: 'D', at: D_LANE, label: 'in the passing lane' },
    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
  ],

  routes: [
    // Long enough that the carry's wave (lambda 9 ft) is unmistakably the long one
    // and the defenceman's backward wave (lambda 2.6 ft) the tight one. At the
    // first draft's length the two routes rendered as near-identical squiggles
    // running in parallel, which is the notation collision the reviewer checks for.
    { from: CARRIER_6, to: { at: 'top-of-circle:right', dx: 2, dy: -10 }, kind: 'carry' }, // (56, 12)
    // "Back up under control" — backward skating, not a stop and not a step-up.
    { from: D_LANE, to: { at: 'blue-line', dx: 29, dy: 1 }, kind: 'backward' },            // (54, 1)
  ],

  puck: { at: 'neutral-dot:right', dx: 2, dy: -6 },
};

// ---------------------------------------------------------------------------
// 7 · The three depths in the offensive zone
//     owner: content/positions/defender.md
//            — "Offensive Zone / Carrying the Puck — Free Space"
//
// The section says "Picture three depths in the offensive zone", which is an
// invitation a diagram can accept literally. Depth 3 is shaded and empty on
// purpose: the section calls it "always a commitment" and says somebody must have
// taken your job at the line *before* you go, so a defenceman drawn standing there
// would be teaching the error rather than the rule.
// ---------------------------------------------------------------------------

const threeDepths = {
  id: 'defender-three-depths',
  owner: 'content/positions/defender.md',
  half: true,
  width: 900,

  caption:
    'The three depths a defenceman plays at in the offensive zone. Just inside the blue line is ' +
    'the default, and where both of you normally are. The top of the faceoff circle is the ' +
    'activated position: the strong-side defenceman may step down to it to support a cycle or ' +
    'create a shot, but only when there is no immediate threat of a turnover, and from there you ' +
    'can still recover. Below the circles is not always wrong, but it is always a commitment — ' +
    'down there you are a fourth forward, you cannot recover if it turns over, and somebody must ' +
    'have taken your job at the blue line before you go rather than after, which is why that ' +
    'band is drawn empty. Only one defenceman steps in at a time and the other holds the line as ' +
    'the safety: that is a near-universal coaching convention rather than a rule, and coaches do ' +
    'call exceptions — a full-ice press, a delayed penalty, six-on-five. When in doubt, stay at ' +
    'the line.',

  describe:
    'The attacking half of the rink, the opposition net at the right. Three shaded bands run ' +
    'across the ice, marking the three depths: one just inside the blue line, one at the top of ' +
    'the faceoff circles, and one below the circles near the goal line. Both of your defencemen ' +
    'are in the first band, just inside the blue line. A route runs from the strong-side ' +
    'defenceman down to the second band at the top of the circle. The third band is empty. One ' +
    'of your forwards is on the strong-side half-wall with the puck, the cycle the strong-side ' +
    'defenceman is stepping down to support. The rest of the forwards and the opposition are ' +
    'not drawn.',

  zones: [
    { points: [
        { at: 'blue-line', dy: 38 }, { at: 'blue-line', dx: 7, dy: 38 },
        { at: 'blue-line', dx: 7, dy: -38 }, { at: 'blue-line', dy: -38 },
      ], label: 'the default' },
    { points: [
        { at: 'top-of-circle:right', dx: -3, dy: 16 }, { at: 'top-of-circle:right', dx: 3, dy: 16 },
        { at: 'top-of-circle:right', dx: 3, dy: -60 }, { at: 'top-of-circle:right', dx: -3, dy: -60 },
      ], label: 'activated' },
    // Below the circles: the circles' near edge to the goal line. Held to y = ±30
    // so the band stays inside the corner radius rather than running out over the
    // dasher, which zones are not clipped against.
    { points: [
        { at: 'corner:right', dx: 2, dy: -4 }, { at: 'goal-line', dy: 30 },
        { at: 'goal-line', dy: -30 }, { at: 'corner:left', dx: 2, dy: 4 },
      ], label: 'a commitment' },
  ],

  // Two feet inside the point, so the glyphs sit inside the "default" band instead
  // of straddling its edge and reading as though they were outside it.
  players: [
    { id: 'D', pos: 'D', at: { at: 'point:right', dx: 2 }, label: 'may step down' },
    { id: 'D', pos: 'D', at: { at: 'point:left', dx: 2 },  label: 'holds the line' },
    { id: 'F', pos: 'F', at: { at: 'half-wall:right', dy: 2 }, label: 'the cycle' },
  ],

  routes: [
    { from: { at: 'point:right', dx: 2 }, to: { at: 'top-of-circle:right', dx: -1 }, kind: 'skate' },
  ],

  puck: { at: 'half-wall:right', dx: -3, dy: -2 },
};

// ---------------------------------------------------------------------------
// 8 · D-to-D goes behind the net, never across the slot
//     owner: content/positions/defender.md
//            — "Carrying the Puck — Free Space", the D-to-D rule
//
// The picture shows only the play the section tells you to make. The play it
// forbids is carried by the shaded slot and by the caption, because the notation
// has no symbol for "not this" and inventing one is how a private notation starts.
// ---------------------------------------------------------------------------

const D_STRONG = { at: 'faceoff-dot:right', dx: 14, dy: 2 };  // (83, 24)
const D_WEAK = { at: 'faceoff-dot:left', dx: 14, dy: -2 };    // (83, -24)

const dToD = {
  id: 'defender-d-to-d-behind-the-net',
  owner: 'content/positions/defender.md',
  half: true,
  width: 900,

  caption:
    'A defence-to-defence pass in your own end goes behind your own net, below the goal line, and ' +
    'never across the slot — the shaded area, and the highest-danger ice there is. A D-to-D pass ' +
    'in front of the net that gets intercepted there is a point-blank chance against, and it is ' +
    'one of the most punished mistakes in hockey. The same holds if you are carrying rather than ' +
    'passing: if no pass is on, skate behind the net to the other side instead of going through ' +
    'the middle. Moving the puck to your partner is often all you need, because it makes the ' +
    'forecheck reset and shift across.',

  describe:
    'The defending half of the rink, your own net at the right. Two of your defencemen stand low ' +
    'in the zone, one on each side, level with the faceoff dots and toward the goal line, with ' +
    'the puck on the right-hand one. A passing route runs from him around behind his own net, ' +
    'staying below the goal line and passing behind the goal frame, to his partner on the far ' +
    'side. The goaltender is in the crease and an opposition forward stands in the slot, in the ' +
    'lane the pass is deliberately not taking. The slot is shaded.',

  // The shaded slot stops at the front of the crease rather than running to the
  // goal line. A zone's label is drawn at the mean of its points with no collision
  // avoidance, and the full-depth version put "the slot" straight through the
  // goaltender's glyph. The goalmouth is a separate layer with a separate owner in
  // this document anyway.
  zones: [
    { points: [
        'faceoff-dot:right', { at: 'crease', dx: -3, dy: 22 },
        { at: 'crease', dx: -3, dy: -22 }, 'faceoff-dot:left',
      ], label: 'the slot' },
  ],

  players: [
    // Deeper in the crease than elsewhere in this file, because the zone label sits
    // at the mean of the zone's points and a goaltender at the front of the crease
    // was drawn across the end of the word "slot".
    { id: 'G', pos: 'G', at: { at: 'crease', dx: 1 } },
    { id: 'D', pos: 'D', at: D_STRONG, label: 'you, with the puck' },
    { id: 'D', pos: 'D', at: D_WEAK,   label: 'your partner' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'slot', dx: -2, dy: 9 } },   // (74, 9)
  ],

  // Bowed hard enough to pass behind the goal frame (which reaches x = 92.3) and
  // still stay inside the end boards: the arc's furthest point is about x = 95.
  routes: [
    { from: { at: 'faceoff-dot:right', dx: 16, dy: -4 },
      to:   { at: 'faceoff-dot:left', dx: 16, dy: 4 }, kind: 'pass', bow: 20 },
  ],

  puck: { at: 'faceoff-dot:right', dx: 17, dy: -3 },
};

export default [
  lowZoneCollapse, swingLow, backcheckMiddleLane,
  wingerHighThenWall, wingerOffensiveZone,
  twoOnOne, threeDepths, dToD,
];
