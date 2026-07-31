/**
 * Diagrams for content/systems/special_teams.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * TWO THINGS THIS FILE HAS TO GET RIGHT THAT OTHERS DO NOT.
 *
 * 1. COUNT. Special teams is the one place where the two sides are not equal.
 *    Every spec below states its strength in the caption and draws the right
 *    number of glyphs for it: five attackers on a 5-on-4, three killers on a
 *    5-on-3, four killers on a kill. Where the section does not fix where the
 *    other unit stands — the neutral-zone schemes describe the killers and the
 *    puck carrier and nobody else — the missing players are *not invented*, and
 *    the caption says outright that they are not drawn.
 *
 * 2. THE NAME IS THE SHAPE. A 1-3-1 that is not one, three and one teaches the
 *    wrong thing to exactly the reader who needed the picture. So each formation
 *    spec carries the count it must render as, and the frozen positions — not the
 *    arrows — have to produce it.
 *
 * PERSONNEL IS NOT SHAPE. The published key gives shape to position: circle is a
 * forward, triangle a defender. That makes every glyph a personnel claim, and the
 * section is emphatic that "who stands where inside it" is a coaching choice, and
 * that the 1-3-1's four-forwards-one-defenceman personnel is "coaching-material
 * consensus rather than a measured prevalence". There is no neutral glyph, so the
 * personnel drawn is disclosed in the caption of every diagram that has to pick.
 *
 * LABELS ARE SHORT ON PURPOSE. The placer sizes a label at roughly 1.6 rink feet
 * per character, so "the bumper — uncovered by design" is a fifty-foot box: it
 * cannot fit anywhere near its own player and lands next to somebody else's, with
 * a leader line nobody traces. The first render of this file put that label beside
 * a half-wall attacker. Everything a label wants to say beyond three or four words
 * belongs in the caption, which is also the only version a listener gets.
 */

// The goaltender, two feet off his goal line. Deep enough that a net-front glyph
// can stand at the edge of the paint without the two circles overlapping — at the
// natural (86,0) the net-front player and the goalie were drawn on top of each
// other in every diagram that has both.
const G_AT = { at: 'crease', dx: 1 };                       // (87, 0)

// The net-front player: "the edge of the blue paint, not inside it", offset to
// the strong side so the glyph clears the goaltender's.
const NET_FRONT = { at: 'net-front', dx: -2, dy: 4 };       // (82, 4)

// The 1-3-1 as the opposition power play, for the three penalty-kill diagrams.
// Same five spots as `pp-131` below, so a reader who has seen that diagram is
// looking at the same unit from the other side.
const PP_131_OPP = [
  { id: 'P', team: 'opp', pos: 'D', at: 'centre-point' },     // (25, 0)
  { id: 'H', team: 'opp', pos: 'F', at: 'half-wall:right' },  // (69, 33)
  { id: 'H', team: 'opp', pos: 'F', at: 'half-wall:left' },   // (69, -33)
  { id: 'B', team: 'opp', pos: 'F', at: 'bumper' },           // (71, 0)
  { id: 'N', team: 'opp', pos: 'F', at: NET_FRONT },          // (82, 4)
];

/* ------------------------------------------------------------------ POWER PLAY */

// "one player at the point (the blue line), three across the middle of the zone —
// two on the half-walls ... with a bumper between them in the middle of the slot —
// and one at the net front." Frozen shape: 1 at x=25, 3 at x=69-71, 1 at x=82.
const pp131 = {
  id: 'pp-131',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,

  caption:
    'The 1-3-1 power play: five attackers on a 5-on-4, with the four penalty killers not drawn ' +
    'so the shape reads on its own. One player at the point, three across the middle — two on ' +
    'the half-walls with a bumper between them in the middle of the slot — and one at the net ' +
    'front on the edge of the blue paint. The dashed lines are the four options a half-wall ' +
    'player has at once, the point, the bumper, the net front and the far half-wall through the ' +
    'seam, drawn as alternatives and not as a sequence; the solid line is the point walking the ' +
    'line laterally, which changes the angle of every passing lane in the zone. ' +
    'Which formation your team runs, and who stands where inside it, is a coaching choice and ' +
    'not a rule of hockey — the umbrella, the overload, the spread and the 2-3 are all real ' +
    'alternatives, and the bumper is most often the centre but that is team-dependent. ' +
    'It is drawn with a defenceman at the point because first units are widely described as ' +
    'running four forwards and one defenceman, but treat that personnel as coaching consensus ' +
    'rather than a measured prevalence: the shape is definitional, the personnel is a choice.',

  describe:
    'Attacking half of the rink, the opposition net at the right, the opposition goaltender in ' +
    'the crease. Five own players: one at the point in the middle of the blue line, two on the ' +
    'half-walls level with the faceoff dots, one bumper in the middle of the slot between them, ' +
    'and one at the net front just outside the crease. The puck is on the right half-wall. Four ' +
    'dashed passing options run from that player: back to the point, inside to the bumper, down ' +
    'to the net front, and across the seam to the far half-wall. A short solid route runs ' +
    'sideways along the blue line from the point. No penalty killers are drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    // "one player at the point (the blue line)" — the middle of the line, because
    // the job is walking it laterally in both directions.
    { id: 'P', pos: 'D', at: 'centre-point',      label: 'the point' },
    { id: 'H', pos: 'F', at: 'half-wall:right',   label: 'half-wall' },
    { id: 'H', pos: 'F', at: 'half-wall:left',    label: 'half-wall' },
    // rink.json names this spot for exactly this player: "the middle player of a
    // 1-3-1". "roughly the middle of the slot", between point and net front.
    { id: 'B', pos: 'F', at: 'bumper',            label: 'bumper' },
    { id: 'N', pos: 'F', at: NET_FRONT,           label: 'net front' },
  ],

  // Deliberately NOT numbered. These are four things available at the same
  // instant — "from here you can reach the point, the bumper, the net front and —
  // through the seam — the far half-wall" — not four things that happen in order.
  // Numbering them would assert a sequence the section does not describe.
  routes: [
    // The point walks the line. Ten feet is the section's own "three metres".
    { from: 'centre-point', to: { at: 'centre-point', dy: 10 }, kind: 'skate' },
    { from: 'half-wall:right', to: { at: 'centre-point', dx: 3, dy: 6 }, kind: 'pass' },
    { from: 'half-wall:right', to: { at: 'bumper', dx: -1, dy: 6 }, kind: 'pass' },
    // Stops short of the net-front player, but aimed at him: extended, this route
    // reaches (82, 3) and he is at (82, 4). An earlier endpoint stopped the same
    // distance short while pointing nine feet under him, which in the picture read
    // as a pass to nobody.
    { from: 'half-wall:right', to: { at: 'net-front', dx: -3, dy: 6 }, kind: 'pass' },
    // The seam. Bowed away from the net so it passes wide of the bumper's glyph
    // rather than through it — straight, it runs within two feet of him.
    { from: 'half-wall:right', to: { at: 'half-wall:left', dy: 5 }, kind: 'pass', bow: -10 },
  ],

  puck: { at: 'half-wall:right', dy: -4 },
};

// "three players high, arranged as an arc rather than a flat line ... One apex
// sits highest, in the middle at or just inside the blue line, and the two flanks
// sit lower than the apex on either side ... Below the arc sit two low players."
// Drawn in the MODERN version: lone defenceman at the apex, two forwards down at
// the tops of the circles. The classic version is in the caption, not the picture.
const ppUmbrella = {
  id: 'pp-umbrella',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The umbrella power play in its modern version: five attackers on a 5-on-4, the killers not ' +
    'drawn. The lone defenceman takes the apex just inside the blue line and two forwards drop ' +
    'right down to the tops of the faceoff circles, where the one-timer lives, so the three high ' +
    'players sit on a deep arc; two more sit low, one at the net front and one at the side of ' +
    'the net. The classic version is just as much an umbrella and its arc is far shallower — a ' +
    'forward at the apex with both defencemen out on the flanks, still close to the line — so ' +
    'find out which your team runs; what neither version is, is three players strung level ' +
    'across the blue line, because with no depth between them every pass is short and lateral ' +
    'and the kill barely has to move. There is no bumper in a true umbrella: the middle of the ' +
    'slot is deliberately vacated so the high players have clean lanes into it. ' +
    'The two numbered routes are one option among many — a flank pass to the apex and a shot ' +
    'aimed to be tipped or rebounded past the screen — and the shape concedes the middle by ' +
    'design, sits far from the net, and can be let alone all night by a diamond or an ' +
    'aggressive box.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Five own players in an arc and ' +
    'a pair: a defenceman at the apex in the middle just inside the blue line, two forwards ' +
    'lower than him at the tops of the left and right faceoff circles, one forward at the net ' +
    'front outside the crease and one at the side of the net below the goal line. The middle of ' +
    'the slot is empty. Two numbered routes: one, a pass from the right flank up to the apex; ' +
    'two, a shot from the apex past the low side of the screen. No penalty killers are drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    // "the lone defenceman takes the apex" — "in the middle at or just inside the
    // blue line". Three feet inside, so it reads as inside the zone.
    { id: 'A', pos: 'D', at: { at: 'centre-point', dx: 3 },   label: 'apex — highest' },
    // "two forwards drop right down to the tops of the faceoff circles". Lower
    // than the apex is what makes it an arc rather than a line.
    { id: 'F', pos: 'F', at: 'top-of-circle:right',           label: 'flank, lower' },
    { id: 'F', pos: 'F', at: 'top-of-circle:left',            label: 'flank, lower' },
    { id: 'N', pos: 'F', at: NET_FRONT,                       label: 'net front' },
    { id: 'S', pos: 'F', at: { at: 'goal-line', dx: -2, dy: -9 }, label: 'side of the net' },
  ],

  routes: [
    { from: 'top-of-circle:right', to: { at: 'centre-point', dx: 7, dy: 6 }, kind: 'pass' },
    // The shot goes to the low side of the screen and stops short of both the
    // net-front player and the goaltender: it is a delivery system for a tip or a
    // rebound, not a route that ends on a glyph.
    { from: { at: 'centre-point', dx: 3 }, to: { at: 'net-front', dx: -5, dy: -4 }, kind: 'shot' },
  ],

  puck: { at: 'top-of-circle:right', dx: -2, dy: 3 },
};

// "four players loaded onto one side of the ice — typically a player below the
// goal line, one in the corner or low circle, one on the half-wall and one at the
// point on that side — with the fifth player weak side as a release valve."
const ppOverload = {
  id: 'pp-overload',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The overload power play: five attackers on a 5-on-4, the killers not drawn. Four are loaded ' +
    'onto one side of the ice — below the goal line, in the corner, on the half-wall and at the ' +
    'point on that side — and the fifth stands alone on the weak side as a release valve and ' +
    'safety. The numbered passes are one cycle among many, not a set play: the shape exists to ' +
    'cycle the puck relentlessly in a small area, creating repeated 3-on-2s along the strong-side ' +
    'wall until a killer over-commits, and then either attack the seam that opens or swing it ' +
    'cross-ice to the lone weak-side player for a shot with the goalie moving. ' +
    'Which formation your team runs, and who stands where inside it, is a coaching choice: the ' +
    'second spot is either the corner or the low circle and it is drawn as the corner, the ' +
    'weak-side player’s exact position is not fixed at all and is drawn at the top of the far ' +
    'circle, and at rec and youth level the overload is often run out of a 2-3 ' +
    'base with both defencemen staying at the points. ' +
    'It is excellent against a passive box that will not come out to the wall, but the passes ' +
    'are short and easy to intercept once the kill reads the pattern, and an interception on the ' +
    'strong side leads straight to a shorthanded break.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Four own players stacked on the ' +
    'right side: one below the goal line beside the net, one in the right corner, one on the ' +
    'right half-wall and one at the right point on the blue line. A fifth own player stands alone ' +
    'on the far left at the top of the left faceoff circle. Three numbered passes: one, from ' +
    'below the goal line out to the corner; two, up the wall to the half-wall; three, cross-ice ' +
    'to the weak-side player. No penalty killers are drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    // "a player below the goal line" — beside the net, clear of the goal frame,
    // which occupies x 89 to 92.3 and y plus or minus 3.
    { id: 'F', pos: 'F', at: { at: 'goal-line', dx: 3, dy: 11 },  label: 'below the line' },
    // "one in the corner or low circle" — drawn as the corner. The low-circle
    // version put this player directly on the line of the cycle pass beneath him.
    { id: 'F', pos: 'F', at: 'corner:right',                      label: 'the corner' },
    { id: 'F', pos: 'F', at: 'half-wall:right',                   label: 'half-wall' },
    { id: 'D', pos: 'D', at: 'point:right',                       label: 'the point' },
    { id: 'F', pos: 'F', at: 'top-of-circle:left',                label: 'release valve' },
  ],

  routes: [
    { from: { at: 'goal-line', dx: 3, dy: 11 }, to: { at: 'corner:right', dx: 2, dy: -6 }, kind: 'pass' },
    { from: 'corner:right', to: { at: 'half-wall:right', dx: 6 }, kind: 'pass' },
    { from: 'half-wall:right', to: { at: 'top-of-circle:left', dx: 2, dy: 6 }, kind: 'pass' },
  ],

  puck: { at: 'goal-line', dx: 1, dy: 7.5 },
};

// "five spots, deliberately stretched to the corners of the danger area — two low,
// one on each side of the net just outside the posts; two high and wide, at the
// tops of the circles or the points; and one in the middle of the slot."
// Drawn at 5-on-3, which is where the section says this is the standard shape, so
// the three killers are drawn too: "a tight triangle around the slot — usually two
// low in front of the net and one high".
const ppSpread = {
  id: 'pp-spread-5on3',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The spread power-play shape, drawn at 5-on-3 — five attackers against three killers, which ' +
    'is where it is the standard shape. Two attackers low, one each side of the ' +
    'net just outside the posts; two high and wide, drawn at the tops of the circles though the ' +
    'points are the other option; and one in the middle of the slot — the point ' +
    'is not the shape but the spacing: stand far enough apart that one killer cannot cover two ' +
    'of you. The three killers sit in a tight triangle around the slot, two low in front of the ' +
    'net and one high, and concede everything outside it — nobody is coming to hunt you on the ' +
    'perimeter — so the numbered passes move the puck side to side across the royal road rather ' +
    'than around the perimeter, until the goalie cannot get set; the goal usually comes from a ' +
    'one-timer at the far post or the second-wave rebound, which is why someone is at the net ' +
    'for both. Beware the word: "box" names this power-play spacing and also the standard ' +
    'penalty-kill shape, and the two are unrelated. The same spacing is worth using at 5-on-4 ' +
    'against a kill that has collapsed and conceded the outside, but there the long passes are ' +
    'interceptable; and what is fixed is the spacing, not who plays which spot.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Five own players spread wide: ' +
    'two low on the goal line just outside each post, two high and wide at the tops of the left ' +
    'and right faceoff circles, and one in the middle of the slot. Three opposition players form ' +
    'a tight triangle: two just in front of the net either side, one high in the slot. The ' +
    'opposition goaltender is in the crease. Two numbered passes: one, straight across from the ' +
    'top of the right circle to the top of the left circle, crossing the middle of the ice; two, ' +
    'from there inside to the player in the middle of the slot.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    // Three killers, not four: this is a 5-on-3.
    // "two low in front of the net and one high" — a triangle around the slot.
    // Only the high killer is labelled. With a label on each of the three, the
    // placer stacked "the triangle" and "outside the post" side by side in the
    // same corner, anchored on different teams' players.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'net-front', dx: -3, dy: 7 } },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'net-front', dx: -3, dy: -7 } },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'high-slot', dx: -6 },         label: 'the triangle' },

    // Five attackers. "two low, one on each side of the net just outside the
    // posts" — the posts are at y plus or minus 3.
    { id: '1', pos: 'F', at: { at: 'goal-line', dx: -1, dy: 8 },   label: 'outside the post' },
    { id: '2', pos: 'F', at: { at: 'goal-line', dx: -1, dy: -8 } },
    { id: '3', pos: 'D', at: 'top-of-circle:right',                label: 'high and wide' },
    { id: '4', pos: 'D', at: 'top-of-circle:left' },
    // "one in the middle of the slot" — the slot runs from the goalmouth out to
    // the tops of the circles, so its middle is four feet up-ice of `slot`.
    { id: '5', pos: 'F', at: { at: 'slot', dx: -4 },               label: 'middle of slot' },
  ],

  routes: [
    { from: 'top-of-circle:right', to: { at: 'top-of-circle:left', dy: 6 }, kind: 'pass' },
    { from: 'top-of-circle:left', to: { at: 'slot', dx: -8, dy: -5 }, kind: 'pass' },
  ],

  puck: { at: 'top-of-circle:right', dx: -2, dy: 3 },
};

// "two defencemen at the points and three forwards low — one at the net front,
// one in each circle or corner."
const pp23 = {
  id: 'pp-2-3',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The 2-3 power play: five attackers on a 5-on-4, the killers not drawn. Two defencemen at ' +
    'the points and three forwards low — one at the net front and one in each circle. The puck ' +
    'goes low-to-high and back, which is what the two numbered routes show: a pass up to the ' +
    'point and a shot judged on whether it arrives low, hard and on net with a body in front of ' +
    'the goalie, not on whether it beats him clean. It was the default power play for decades ' +
    'and remains extremely common in rec, beer-league and youth hockey; it is the safe shape, ' +
    'because two defencemen at the line means very few shorthanded breaks and good retrieval on ' +
    'missed shots, and it is the easiest to teach — but it is also the shape that attacks the two ' +
    'areas a box is built to defend and ignores the middle of the slot entirely, so against a ' +
    'competent box it is close to harmless. Which formation your team runs is a coaching choice — and note ' +
    'the contrast with the 1-3-1, which has exactly one player at the point: if you can see two, ' +
    'you are looking at this shape, an umbrella or an overload, not a 1-3-1.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Five own players: two ' +
    'defencemen at the left and right points on the blue line, and three forwards low — one in ' +
    'the right faceoff circle, one in the left faceoff circle and one at the net front outside ' +
    'the crease. The middle of the slot is empty. Two numbered routes: one, a pass from the right ' +
    'circle up to the right point; two, a shot from the point to the low side of the net front. ' +
    'No penalty killers are drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    { id: 'D', pos: 'D', at: 'point:right',        label: 'the points' },
    { id: 'D', pos: 'D', at: 'point:left',         label: 'the points' },
    // Only the far circle is labelled: the near one's label landed on the badge
    // of the pass leaving it.
    { id: 'F', pos: 'F', at: 'faceoff-dot:right' },
    { id: 'F', pos: 'F', at: 'faceoff-dot:left',   label: 'one per circle' },
    { id: 'N', pos: 'F', at: NET_FRONT,            label: 'net front' },
  ],

  routes: [
    { from: 'faceoff-dot:right', to: { at: 'point:right', dx: 6, dy: -3 }, kind: 'pass' },
    // Low and past the screen, stopping clear of both the net-front player and the
    // goaltender: "not an attempt to score from the point ... a delivery system
    // for a tip or a rebound."
    { from: 'point:right', to: { at: 'net-front', dx: -2, dy: -8 }, kind: 'shot' },
  ],

  puck: { at: 'faceoff-dot:right', dx: 2, dy: -3 },
};

/* --------------------------------------------------------------- PENALTY KILL */

// "a rectangle around the slot. Two players high — both forwards, one on each side,
// each responsible for one point — and two players low, both defencemen, covering
// the two low corners and the goalmouth."
const pkBox = {
  id: 'pk-box',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,

  caption:
    'The box penalty kill — four killers, shorthanded 4-on-5 — drawn against the five-man 1-3-1 ' +
    'power play it is worst against. A rectangle around the slot: two players high, both ' +
    'forwards, one on each side and each responsible for one point, and two low, both ' +
    'defencemen, covering the low corners and the goalmouth — a box has no single top, and if ' +
    'you find yourself describing "the top of the box" you are describing a diamond. The picture ' +
    'shows the shape’s one concession, which it makes by design: nobody in a box is assigned ' +
    'to the middle of the slot, so the 1-3-1’s bumper stands uncovered in the hole in the ' +
    'middle of the rectangle. The box slides with the puck rather than rotating — all four shift ' +
    'together — which is movement a still frame cannot carry, so it is not drawn. Which shape ' +
    'you run is a coaching choice and the same four players can run the box, the diamond and the ' +
    'wedge+1 in one game: the box is simply the one almost everyone is taught first.',

  describe:
    'Defending half of the rink, our net at the right and our goaltender in the crease. Four own ' +
    'players in a rectangle around the slot: two forwards high, level with the tops of the ' +
    'circles and inside them, and two defencemen low, either side of the net front. Five ' +
    'opposition players in a 1-3-1: one at the point on the blue line, two on the half-walls, one ' +
    'bumper in the middle of the slot inside the rectangle with no killer near him, and one at ' +
    'the net front. The puck is on the opposition’s right half-wall. No routes are drawn.',

  players: [
    { id: 'G', pos: 'G', at: G_AT },
    // "Two players high — both forwards, one on each side". Level with the tops of
    // the circles and inside them: high enough to deny the point, close enough to
    // stay in the shooting lanes.
    { id: 'F', pos: 'F', at: { at: 'top-of-circle:right', dx: 2, dy: -10 }, label: 'high, in the lane' },
    { id: 'F', pos: 'F', at: { at: 'top-of-circle:left', dx: 2, dy: 10 },   label: 'high, in the lane' },
    // "two players low, both defencemen, covering the two low corners and the
    // goalmouth". Strong side is the puck side.
    { id: 'D', pos: 'D', at: { at: 'net-front', dx: -4, dy: 10 },  label: 'strong side, low' },
    { id: 'D', pos: 'D', at: { at: 'net-front', dx: -4, dy: -10 }, label: 'goalmouth' },

    ...PP_131_OPP.map((p) =>
      p.id === 'B' ? { ...p, label: 'uncovered' } : p),
  ],

  puck: { at: 'half-wall:right', dy: -4 },
};

// "one player high at the apex, two in the middle on either side, and one low. A
// diamond, not a rectangle: it has exactly one player at the top."
const pkDiamond = {
  id: 'pk-diamond',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,

  caption:
    'The diamond penalty kill — four killers, shorthanded 4-on-5 — drawn against the five-man ' +
    '1-3-1 it exists to answer, at the moment the puck is at the point. One player high at the ' +
    'apex, two in the middle either side, one low: exactly one player at the top, which is what ' +
    'makes it a diamond and not a box. The apex pressures the point and takes away the middle ' +
    'shooting lane, and being the only player up there must not get walked around; each middle ' +
    'takes a half-wall and both collapse onto the bumper when the puck goes to the middle, which ' +
    'is why this is the only common shape that starts with an answer to the bumper. What it ' +
    'concedes is drawn as well as said: the single low player is alone against the net-front ' +
    'presence and a backdoor arriver, a genuine 2-on-1 you are choosing to give up, and the shape ' +
    'is narrow enough that a quick cross-seam pass to the far half-wall pulls it apart. ' +
    'Which shape you run is a coaching choice, and the only personnel that is even loosely fixed ' +
    'is the apex — often the centre, but it varies by team — so the two forwards and two ' +
    'defencemen drawn here are the usual kill personnel and not a rule.',

  describe:
    'Defending half of the rink, our net at the right and our goaltender in the crease. Four own ' +
    'players in a diamond: one high in the middle between the blue line and the tops of the ' +
    'circles, two in the middle of the zone either side of the slot, and one alone in front of ' +
    'the net. Five opposition players in a 1-3-1: one at the point with the puck, two on the ' +
    'half-walls, a bumper in the middle of the slot between the two middle killers, and one at ' +
    'the net front. One route: the apex applying checking pressure out toward the point player, ' +
    'finishing short of him and inside him, on the middle shooting lane.',

  players: [
    { id: 'G', pos: 'G', at: G_AT },
    // "one player high at the apex" — up between the tops of the circles and the
    // blue line, close enough to reach the point player and take the lane away.
    { id: 'A', pos: 'F', at: { at: 'centre-point', dx: 20 }, label: 'the apex' },
    // "two in the middle on either side" — each takes a half-wall, and both
    // collapse onto the bumper, so they sit between the two.
    { id: 'M', pos: 'F', at: { at: 'faceoff-dot:right', dx: -2, dy: -8 }, label: 'wall and bumper' },
    { id: 'M', pos: 'D', at: { at: 'faceoff-dot:left', dx: -2, dy: 8 },   label: 'wall and bumper' },
    { id: 'L', pos: 'D', at: { at: 'net-front', dx: -3, dy: -4 },         label: 'alone, low' },

    ...PP_131_OPP,
  ],

  // "pressure the point player, take away the middle shooting lane". Checking
  // pressure is the key's own end mark — one bar, no arrowhead. It finishes short
  // of the point player and inside him, on the lane, not on his body.
  routes: [
    { from: { at: 'centre-point', dx: 20 }, to: { at: 'centre-point', dx: 7, dy: 3 }, kind: 'pressure' },
  ],

  puck: { at: 'centre-point', dx: 3, dy: -4 },
};

// "three killers hold a tight triangle around the net — two defencemen just off
// the crease edges, one forward at the mid-to-high slot — while the fourth player,
// the '+1', chases the puck around the perimeter."
const pkWedge = {
  id: 'pk-wedge-plus-1',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,

  caption:
    'The wedge+1 penalty kill, also called triangle-and-one — four killers, shorthanded 4-on-5 — ' +
    'drawn against a five-man 1-3-1 with the puck on the half-wall. Three killers hold a tight ' +
    'triangle around the net, two defencemen just off the crease edges — drawn wider apart than ' +
    'they really stand, because at the true spacing their glyphs would sit on top of the ' +
    'net-front attacker they are boxing out — and one forward at the mid-to-high slot; they stay ' +
    'tight, protect the slot and the goalmouth, block shots and rotate as a connected unit, and ' +
    'they do not chase. The fourth, the +1, pressures whoever has the puck, and the drawn ' +
    'route is checking pressure rather than an attempt to win it: the job is to make every ' +
    'possession uncomfortable. The route drawn here — straight out from the goal at the ' +
    'carrier — is one of three published readings and a coaching choice rather than the ' +
    'system: others sweep the +1 laterally across the top of the zone above the circles, ' +
    'and others let him roam out to the wall and the point, so ask which one your team ' +
    'runs. What the picture cannot show is the exchange, which is the hard part — when ' +
    'the pressure forces the puck to move, the nearest wedge player becomes the new +1 and the ' +
    'old one drops into the triangle, and that is movement over time, not one frozen instant. ' +
    'Coaching material describes this as popular at NHL level, but no league-wide count is ' +
    'published, so treat the prevalence claim as unverified; it is also a poor choice for a young ' +
    'or ad-hoc unit because of the cognitive load, and if the +1 chases without purpose you are ' +
    'killing with three players.',

  describe:
    'Defending half of the rink, our net at the right and our goaltender in the crease. Three own ' +
    'players form a tight triangle around the net: two defencemen just outside the crease edges ' +
    'either side, and one forward in the slot in front of them. A fourth own player, the +1, is ' +
    'out on the right side between the net and the puck, with a checking-pressure route running ' +
    'outward toward the puck carrier on the half-wall and finishing short of him. Five opposition ' +
    'players in a 1-3-1: one at the point, two on the half-walls with the puck on the right, a ' +
    'bumper in the middle of the slot shaded to the puck side, and one at the net front.',

  players: [
    { id: 'G', pos: 'G', at: G_AT },
    // "two defencemen just off the crease edges" — the crease is 8 ft wide, so its
    // edges are at y plus or minus 4. Seven feet outside them rather than one or
    // two, because a glyph is six feet across and the net-front attacker they are
    // boxing out is standing on the same ice: at the true distance the two shapes
    // are drawn on top of each other. The tightness is stated in the caption
    // instead, which is the honest place for a thing the picture cannot scale.
    { id: 'W', pos: 'D', at: { at: 'goal-line', dx: -4, dy: 11 },  label: 'the wedge' },
    { id: 'W', pos: 'D', at: { at: 'goal-line', dx: -4, dy: -11 } },
    // "one forward at the mid-to-high slot".
    { id: 'W', pos: 'F', at: { at: 'high-slot', dx: 3, dy: -2 } },
    // The +1, working outward from the net toward the puck: on the line between
    // the goalmouth and the carrier rather than beside it.
    { id: '+1', pos: 'F', at: { at: 'faceoff-dot:right', dx: 8, dy: -2 }, label: 'pressures the puck' },

    ...PP_131_OPP.map((p) =>
      // The bumper "constantly adjusts his angle so a passing lane exists from at
      // least one half-wall" — shaded to the puck side here, which also keeps his
      // glyph off the wedge's slot forward.
      p.id === 'B' ? { ...p, at: { at: 'bumper', dy: 6 } } : p),
  ],

  routes: [
    { from: { at: 'faceoff-dot:right', dx: 8, dy: -2 }, to: { at: 'half-wall:right', dx: 3, dy: -4 }, kind: 'pressure' },
  ],

  puck: { at: 'half-wall:right', dy: -4 },
};

/* ------------------------------------------ PK NEUTRAL-ZONE PRESSURE SCHEMES */
//
// Both of these draw four killers and ONE attacker. The section describes the
// killers' shape and the puck carrier and says nothing about where the other four
// power-play players stand on an entry — it sends the reader to Zone Entries for
// that — so the other four are not drawn rather than invented, and both captions
// say so. Full sheet, because a neutral-zone scheme spans both blue lines.

// "one forward up on the puck, the other forward and both defencemen in a line
// across the ice behind him." Passive version: "F1 gives token pressure to make
// the power play commit to a side while the three behind back up in unison."
const pkNz13 = {
  id: 'pk-nz-1-3',
  owner: 'content/systems/special_teams.md',
  half: false,
  width: 900,

  caption:
    'The 1-3 neutral-zone scheme on the penalty kill, in its passive version — four killers, ' +
    'shorthanded 4-on-5, defending the net on the right against a power play attacking from the ' +
    'left. One forward is up on the puck and the other forward and both defencemen form a line ' +
    'across the ice behind him, backing up in unison and refusing to be split; F1 gives token ' +
    'pressure to make the power play commit to a side, and the goal is not to win the puck but ' +
    'to make them dump it in. The other version of the same scheme is the same-side press, where ' +
    'F1 angles the carrier to one side and F2 closes from that side to force a dump or a ' +
    'turnover — more pressure, but it needs killers who can read and accelerate — and the 1-1-2, ' +
    'the retreating box and tandem pressure are three further schemes you will meet, so ask which ' +
    'is called. F1 and F2 are roles set by who is first and second to the puck, not positions, ' +
    'and which of the three across takes the middle is not fixed. Only the puck ' +
    'carrier of the five-man power play is drawn, because where the ' +
    'other four attackers stand is not fixed either; beat F1 or spread the three-man line and there is a lot of ice ' +
    'behind it.',

  describe:
    'The full sheet. We defend the net at the right; the opposition power play attacks from the ' +
    'left. One opposition player carries the puck in the neutral zone on the upper side. Four own ' +
    'players: F1 ahead of the carrier, giving token checking pressure back toward him and ' +
    'finishing short of him; and behind F1 a line of three across the ice — a forward in the ' +
    'middle and a defenceman near each side — each backing up toward our blue line, drawn with ' +
    'the tight wave that means backward skating. Our goaltender is in the crease at the right. ' +
    'The other four power-play attackers are not drawn.',

  players: [
    { id: 'G', pos: 'G', at: G_AT },
    { id: 'PP', team: 'opp', pos: 'F', at: { at: 'centre-ice', dx: -24, dy: 14 }, label: 'puck carrier' },

    // "one forward up on the puck" — ahead of the carrier, between him and the
    // three-man line, giving token pressure rather than attacking. Twenty-two feet
    // of daylight between him and the line behind him, because a 1-3 drawn with
    // the 1 and the 3 at the same depth is a 4 across.
    { id: 'F1', pos: 'F', at: { at: 'centre-ice', dx: -10, dy: 12 }, label: 'token pressure' },

    // "the other forward and both defencemen in a line across the ice behind him".
    // Which of the three takes the middle is not stated by the section; drawn with
    // the forward in the middle and the defencemen wide. Spread to plus and minus
    // 26 feet of an 85-foot sheet, because "a line across the ice" that covers
    // only the middle half is not one.
    { id: 'F2', pos: 'F', at: { at: 'neutral-zone-mid' },          label: 'three across' },
    { id: 'D',  pos: 'D', at: { at: 'neutral-zone-mid', dy: 26 } },
    { id: 'D',  pos: 'D', at: { at: 'neutral-zone-mid', dy: -26 } },
  ],

  routes: [
    { from: { at: 'centre-ice', dx: -10, dy: 12 }, to: { at: 'centre-ice', dx: -18, dy: 13 }, kind: 'pressure' },
    // "the three behind back up in unison, refusing to be split" — the key's tight
    // wave, all three the same length, toward their own blue line.
    { from: { at: 'neutral-zone-mid' },          to: { at: 'blue-line', dx: -3 },          kind: 'backward' },
    { from: { at: 'neutral-zone-mid', dy: 26 },  to: { at: 'blue-line', dx: -3, dy: 26 },  kind: 'backward' },
    { from: { at: 'neutral-zone-mid', dy: -26 }, to: { at: 'blue-line', dx: -3, dy: -26 }, kind: 'backward' },
  ],

  puck: { at: 'centre-ice', dx: -24, dy: 9.5 },
};

// "F1 up on the puck, F2 layered behind on the same side forming a wall parallel
// to the boards, two defencemen abreast near the line."
const pkNz112 = {
  id: 'pk-nz-1-1-2',
  owner: 'content/systems/special_teams.md',
  half: false,
  width: 900,

  caption:
    'The 1-1-2 neutral-zone scheme on the penalty kill — four killers, shorthanded 4-on-5, ' +
    'defending the net on the right against a power play attacking from the left. F1 is up on ' +
    'the puck, F2 is layered behind him on the same side, forming a wall parallel to the boards, ' +
    'and the two defencemen are abreast near the line: aggressive without over-committing, it ' +
    'bleeds clock and forces contested entries. Coaching material commonly describes this as a ' +
    'current NHL default for neutral-zone pressure — a different decision from the in-zone shape, ' +
    'not a competing one — but that prevalence claim is not independently verified, and the 1-3, ' +
    'the retreating box and tandem pressure are the alternatives you will meet. F1 and F2 are ' +
    'roles set by who is first and second to the puck, not positions. Only the puck carrier of ' +
    'the five-man power play is drawn, because where the other four ' +
    'attackers stand is not fixed — and the weakness is theirs to exploit: quick direction changes and drop ' +
    'passes at the red line slide underneath F1 and F2 at once.',

  describe:
    'The full sheet. We defend the net at the right; the opposition power play attacks from the ' +
    'left. One opposition player carries the puck up the upper side of the neutral zone. Four own ' +
    'players: F1 ahead of the carrier on the same side of the ice with a checking-pressure route ' +
    'running back toward him and finishing short; F2 stacked behind F1 on that same side, level ' +
    'with him along the boards; and two defencemen abreast just in front of our blue line, one ' +
    'either side of the middle. Our goaltender is in the crease at the right. The other four ' +
    'power-play attackers are not drawn.',

  players: [
    { id: 'G', pos: 'G', at: G_AT },
    { id: 'PP', team: 'opp', pos: 'F', at: { at: 'centre-ice', dx: -24, dy: 22 }, label: 'puck carrier' },

    { id: 'F1', pos: 'F', at: { at: 'centre-ice', dx: -10, dy: 22 },    label: 'on the puck' },
    // "layered behind on the same side forming a wall parallel to the boards" —
    // same side, same distance off the wall, further back. Fourteen feet behind
    // F1 and sixteen ahead of the defence pair: a 1-1-2 whose three depths are not
    // visibly three depths is not a 1-1-2.
    { id: 'F2', pos: 'F', at: { at: 'centre-ice', dx: 4, dy: 24 },      label: 'F2, same side' },

    { id: 'D', pos: 'D', at: { at: 'blue-line', dx: -5, dy: 14 },  label: 'two abreast' },
    { id: 'D', pos: 'D', at: { at: 'blue-line', dx: -5, dy: -14 } },
  ],

  routes: [
    { from: { at: 'centre-ice', dx: -10, dy: 22 }, to: { at: 'centre-ice', dx: -18, dy: 22 }, kind: 'pressure' },
  ],

  puck: { at: 'centre-ice', dx: -24, dy: 17.5 },
};

export default [
  pp131, ppUmbrella, ppOverload, ppSpread, pp23,
  pkBox, pkDiamond, pkWedge,
  pkNz13, pkNz112,
];
