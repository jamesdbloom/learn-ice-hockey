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
 * section is emphatic that "who stands where inside it" is a coaching choice
 * (special_teams.md:75). There is no neutral glyph, so the personnel drawn is
 * disclosed in the caption of every diagram that has to pick.
 *
 * ⚠️ AND BE CAREFUL WHICH HALF IS THE COUNTED ONE, BECAUSE THIS BLOCK HAD IT
 * BACKWARDS AND SO DID pp-131's CAPTION. Both said the 1-3-1's
 * four-forwards-one-defenceman personnel was "coaching-material consensus rather
 * than a measured prevalence". That string is not in special_teams.md, and the
 * section says the opposite at :94 — "The shape is definitional; how many forwards
 * a coach puts in it is a choice, and that choice, unlike the shape, has been
 * measured." The PERSONNEL is the counted half (Cane, roughly 56% of league-wide
 * 5-on-4 ice time, 2016-17, explicitly not a first-unit figure). The UNCOUNTED half
 * is how many teams run this SHAPE rather than an umbrella or an overload. The
 * phrase itself is real but belongs to the shape, which is how
 * how_to_watch_hockey.md:158 uses it — and that document embeds this caption, so
 * the two contradicted each other sixteen spoken units apart.
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
//
// ⚠️ QUOTATION UPDATED 10 September 2026. The corpus no longer says "the edge of the
// blue paint" ANYWHERE — that phrasing put the reader ON the red crease line, which
// IIHF 1.7, USA Hockey's 625(b) Note and Casebook 103 Sit 4, and Hockey Canada's
// Glossary all count as part of the crease. The sites now read "just outside the blue
// paint" / "both feet off the red crease line". ⚠️ THE GEOMETRY ABOVE IS UNAFFECTED and
// still correct; only the quotation went stale. A comment that quotes another file is a
// claim about that file, and it goes stale silently because no checker reads comments.
//
// ⚠️ THIS WAS dx -2, i.e. (82, 4), AND THAT COMMENT WAS FALSE AS DRAWN. Measured
// off the BUILT SVG (site/public/diagrams/pp-131.svg), whose crease path is
// "M 89 -4 L 84.5 -4 A 6 6 0 0 0 84.5 4 L 89 4 Z" — side lines 4.5 ft in from the
// goal line at half-width 4, closed by a 6 ft arc struck from (88.972, 0). The
// nearest crease boundary to (82, 4) is 2.038 ft away, so a 2.9 ft glyph body put
// **0.86 ft of body and 1.24 ft of outlined body inside the blue paint**, and the
// bite it took out of the paint was plainly visible in the render. Six diagrams in
// this file drew it, and both the caption ("on the edge of the blue paint") and the
// `describe` ("just outside the crease") said the opposite of the picture — while
// the corpus is emphatic that a net-front player keeps his feet out of the crease
// (special_teams.md and offensive_zone_play.md both key Rule 69 to it).
//
// At dx -4, i.e. (80, 4), the nearest boundary is 3.823 ft away: **0.92 ft of body
// daylight**, 0.55 ft of outlined-body daylight, and the white halo (a 1.95 stroke
// centred on r 2.9, so 3.875 ft of ink) overlaps by 0.05 ft — half a pixel at the
// 9 px/ft this file renders at, and invisible. It is also the offset faceoffs.mjs
// already uses for its extra attacker.
//
// ASSUMES, and dies if any of them moves: site/src/data/rink.json AS COMMITTED
// TODAY — net-front = (84, 0), goal_line_x = 89, crease_width 8, crease_depth 6,
// crease_arc_radius 6 — and rink.mjs's `straight = 4.5` and glyph radius 2.9.
//
// ⚠️ THE SAME (82, 4) OFFSET IS DEFINED IN game_management.mjs (six-on-five-shape)
// AND A 0.38 ft VERSION AT (81, 3) IN offensive_zone_play.mjs (oz-net-front-screen).
// Neither is this file's to edit and neither has moved. Until they do, three files
// disagree about where the net front is, and game_management.mjs's comment saying
// it uses "the same offset as the power-play diagrams" is no longer true.
const NET_FRONT = { at: 'net-front', dx: -4, dy: 4 };       // (80, 4)

// The 1-3-1 as the opposition power play, for the three penalty-kill diagrams.
// Same five spots as `pp-131` below, so a reader who has seen that diagram is
// looking at the same unit from the other side.
const PP_131_OPP = [
  { id: 'P', team: 'opp', pos: 'D', at: 'centre-point' },     // (25, 0)
  { id: 'H', team: 'opp', pos: 'F', at: 'half-wall:right' },  // (69, 38.5)
  { id: 'H', team: 'opp', pos: 'F', at: 'half-wall:left' },   // (69, -38.5)
  { id: 'B', team: 'opp', pos: 'F', at: 'bumper' },           // (71, 0)
  { id: 'N', team: 'opp', pos: 'F', at: NET_FRONT },          // (80, 4)
];

/* ------------------------------------------------------------------ POWER PLAY */

// "one player at the point (the area just inside the blue line), three across the
// middle of the zone — two on the half-walls ... with a bumper between them in the
// middle of the slot — and one at the net front." Frozen shape: 1 at x=25, 3 at
// x=69-71, 1 at x=80.
//
// ⚠️ THAT QUOTATION HAS BEEN RE-TAKEN. It used to read "one player at the point
// (the blue line)" — text special_teams.md:92 no longer contains, because
// content/foundation/rink_map_and_glossary.md owns the term and denies it three
// times (:356, :372, :621): the point is the AREA JUST INSIDE the blue line, not
// the line. The glyph still stands ON the line, at rink.json's `point` anchor,
// and that is deliberate — see the note on `point` in rink.json. Only the words
// changed.
//
// FOUR `describe` STRINGS IN THIS FILE CARRIED THE SAME RETRACTED DEFINITION — "at
// the point on the blue line", in pp-131, pp-overload, pp-2-3 and pk-box — and each
// now says "just inside the blue line". They were literally true OF THE DRAWING,
// because the anchor is on the line; they were false of the term, and a `describe`
// is what a screen-reader user is given instead of the picture. The wording follows
// positions.mjs, which took the same decision for the same reason: the offset is
// smaller than the glyph carrying it, so no drawing can express it and the words are
// the only layer that can. (`describe` is NOT voiced — md_to_speech.py resolves
// `diagram:<id>` to the CAPTION alone — it becomes the SVG's `<desc>`.)
const pp131 = {
  id: 'pp-131',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,

  caption:
    'The 1-3-1 power play: five attackers on a 5-on-4, with the four penalty killers not drawn ' +
    'so the shape reads on its own. One player at the point, three across the middle — two on ' +
    'the half-walls with a bumper between them in the middle of the slot — and one at the net ' +
    // ⚠️ "on the edge of the blue paint" places the reader ON the crease line. Under IIHF
    // Rule 1.7 "the marked line belongs to the Goal Crease", so the net-front player this
    // positions is INSIDE it; under USA Hockey a goal is disallowed outright with an attacking
    // player in the crease. This caption is borrowed into center.md, whose own Technique line
    // at :380 says "off the red crease line, not on it" -- two voiced units of one document
    // contradicting each other. The `describe` field already said "just outside the crease".
    'front, just outside the blue paint and off the crease line: under the IIHF book the ' +
    'marked line belongs to the crease. The dashed lines are the four options a half-wall ' +
    'player has at once — the point, the bumper, the net front and the far half-wall through the ' +
    'seam — drawn as alternatives rather than a sequence. The solid line is the point walking the ' +
    'line laterally, which changes the angle of every passing lane in the zone. ' +
    'Which formation your team runs, and who stands where inside it, is a coaching choice and ' +
    'not a rule of hockey — the umbrella, the overload, the spread and the 2-3 are all real ' +
    'alternatives, and the bumper is most often the centre but that is team-dependent. ' +
    'It is drawn with a defenceman at the point because first units are widely described as ' +
    'running four forwards and one defenceman — and unlike the shape, that personnel has been ' +
    'counted. Matt Cane measured four-forward units at roughly 56% of 5-on-4 ice time across ' +
    'the league in 2016-17, which is a share of ice time rather than a count of teams and is not ' +
    'a first-unit figure. What is uncounted is the shape: no published count of how many teams ' +
    'run a 1-3-1 rather than an umbrella or an overload was found.',

  describe:
    'Attacking half of the rink, the opposition net at the right, the opposition goaltender in ' +
    'the crease. Five own players: one at the point, in the middle and just inside the blue line, ' +
    'two on the ' +
    'half-walls level with the faceoff dots, one bumper in the middle of the slot between them, ' +
    'and one at the net front just outside the crease. The puck is on the right half-wall. Four ' +
    'dashed passing options run from that player: back to the point, inside to the bumper, down ' +
    'to the net front, and across the seam to the far half-wall. A short solid route runs ' +
    'sideways along the blue line from the point. No penalty killers are drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    // "one player at the point (the area just inside the blue line)" — anchored in
    // the middle of the line, because the job is walking it laterally in both
    // directions. The anchor is schematic: the point is the area inside the line,
    // and rink.json's `point` $comment records why the coordinate stays on it.
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
    // The point walks the line.
    //
    // ⚠️ THIS LINE USED TO READ 'Ten feet is the section's own "three metres"'. THE
    // SECTION NO LONGER SAYS THAT, and has not since 11 September 2026: the phrase was
    // folklore — one lateral slide along the blue line was taught seven times across
    // three documents in three magnitudes and three units, and no source in `sources/`
    // fixes any of them. All seven were replaced with a stop condition. What the owner
    // says now is a CUE, not a count: its facts line reads "The point walks the line
    // laterally — sliding sideways changes the angle of every passing lane in the zone;
    // keep going until a killer turns their head or shifts across to follow", and the
    // "Point (the quarterback)" bullet under this diagram's own section says outright
    // "How far is feel rather than a measurement: keep sliding until a killer turns
    // their head or shifts across to follow you."
    //
    // ⚠️ SO THE JUSTIFICATION IS GONE, BUT THE GEOMETRY IS NOT UNJUSTIFIED — because
    // nothing a reader receives claims a distance. A route has to have SOME length, and
    // ten feet is proportioned to nothing but VISIBILITY AT THIS SCALE: shorter and the
    // lateral walk does not read as a walk against a 900-wide half sheet. The caption
    // says only "the point walking the line laterally", and the `describe` says only "a
    // short solid route runs sideways along the blue line" — neither states a figure, in
    // the layer a listener hears or the layer a screen reader reads. `shooting.mjs`'s
    // `shooting-lane-and-the-step` took the same decision for the same reason on the same
    // day, and its caption has to work harder because the STEP is what it teaches; here
    // the walk is one of five routes and the stop condition is the section's to voice.
    //
    // ⚠️ DO NOT "RESTORE" A DISTANCE HERE, in this comment or in any reader-facing
    // string. A comment that quotes another file is a claim about that file, and it goes
    // stale silently because no checker reads comments. No count of these is given here
    // on purpose — one would go stale the same way. What is true is that this file alone
    // already carries four of them, each named at the site it corrects: the net-front
    // "edge of the blue paint" quotation, `pp-131`'s "one player at the point (the blue
    // line)", `pk-wedge-plus-1`'s "chases the puck around the perimeter" — which had
    // inverted its own section — and the "it sends the reader to Zone Entries" clause at
    // the head of the PK neutral-zone group below. `shooting.mjs` has a fifth, and that
    // one is the cautionary case: a comment written to RETRACT a stale quotation ended on
    // a stale quotation of its own. If this length ever changes, change it for legibility
    // and say that is why.
    { from: 'centre-point', to: { at: 'centre-point', dy: 10 }, kind: 'skate' },
    { from: 'half-wall:right', to: { at: 'centre-point', dx: 3, dy: 6 }, kind: 'pass' },
    { from: 'half-wall:right', to: { at: 'bumper', dx: -1, dy: 6 }, kind: 'pass' },
    // Stops short of the net-front player, but aimed at him: extended, this route
    // reaches (80, 3.85) and he is at (80, 4). An earlier endpoint stopped the same
    // distance short while pointing nine feet under him, which in the picture read
    // as a pass to nobody.
    // ⚠️ Re-aimed with NET_FRONT. It used to end at (81, 6) aiming at (82, 4); once
    // the receiver moved to (80, 4) that endpoint sat a foot BEYOND him and the
    // arrow pointed past him into the crease. The tip is now 3.16 ft from his
    // centre — clear of the 2.9 ft body, under the halo, which is how a pass to a
    // receiver should land.
    { from: 'half-wall:right', to: { at: 'net-front', dx: -5, dy: 7 }, kind: 'pass' },
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
    { id: 'A1', pos: 'D', at: { at: 'centre-point', dx: 3 },   label: 'apex — highest' },
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
    'base with both defencemen staying at the points — an impression of how those levels play ' +
    'rather than a measured share, with no count of rec or youth deployments published and none ' +
    'here. ' +
    'It is excellent against a passive box that will not come out to the wall, but the passes ' +
    'are short and easy to intercept once the kill reads the pattern, and an interception on the ' +
    'strong side leads straight to a shorthanded break.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Four own players stacked on the ' +
    'right side: one below the goal line beside the net, one in the right corner, one on the ' +
    'right half-wall and one at the right point, just inside the blue line. A fifth own player ' +
    'stands alone ' +
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
    // Labelled A1..A5, NOT 1..5. A bare numeral in a circle is IIHF 21.1's POSITION
    // numbering — circle-1 is the goaltender, circle-5 the centre — so an IIHF-trained
    // reader took the attacker at the post for a goalie. It also contradicted this
    // diagram's own caption ("what is fixed is the spacing, not who plays which spot"),
    // and collided with the pass-order badges, which are numerals too.
    { id: 'A1', pos: 'F', at: { at: 'goal-line', dx: -1, dy: 8 },   label: 'outside the post' },
    { id: 'A2', pos: 'F', at: { at: 'goal-line', dx: -1, dy: -8 } },
    { id: 'A3', pos: 'D', at: 'top-of-circle:right',                label: 'high and wide' },
    { id: 'A4', pos: 'D', at: 'top-of-circle:left' },
    // "one in the middle of the slot" — the slot runs from the goalmouth out to
    // the tops of the circles, so its middle is four feet up-ice of `slot`.
    { id: 'A5', pos: 'F', at: { at: 'slot', dx: -4 },              label: 'middle of slot' },
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
    'and remains common in rec, beer-league and youth hockey — both of those are impressions ' +
    'rather than measured shares, with no count published and none here. It is the safe shape, ' +
    'because two defencemen at the line means very few shorthanded breaks and good retrieval on ' +
    'missed shots, and it is the easiest to teach — but it is also the shape that attacks the two ' +
    'areas a box is built to defend and ignores the middle of the slot entirely, so against a ' +
    'competent box it is close to harmless. Which formation your team runs is a coaching choice — and note ' +
    'the contrast with the 1-3-1, which has exactly one player at the point: if you can see two, ' +
    'you are looking at this shape, an umbrella or an overload, not a 1-3-1.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Five own players: two ' +
    'defencemen at the left and right points, just inside the blue line, and three forwards low — ' +
    'one in ' +
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

/* ------------------------------------------------------- POWER-PLAY KEY PLAYS */
//
// Of the six plays under "The key power-play plays", four are not drawn here and
// the reasons are not the same reason twice:
//   - THE SEAM PASS is already the drawing: pp-131's dashed half-wall-to-half-wall
//     route above is captioned "the seam", so a second diagram would repeat it.
//   - THE ONE-TIMER is a shooting technique (weight, timing, body position) that
//     Shooting owns, and its one spatial fact — the flank position it is shot
//     from — is already in ppUmbrella's own caption: "where the one-timer lives".
//   - THE ROYAL ROAD is drawn once, in offensive_zone_play.mjs (`oz-royal-road`).
//     shooting.mjs says outright "drawable, and drawn ... Not repeated", and this
//     section itself sends the reader to Offensive Zone Play for the figure.
//   - THE POINT SHOT's one spatial idea — walking the line to change the shot's
//     angle — is pp-131's own solid route. What is left of it is a shot-quality
//     judgement (arrives low, hard, on net, with a body in front), not a position.
//
// The other two earn a diagram because each shows a defensive commitment opening
// a specific gap that the prose describes but cannot make visible on its own.

// ⚠️ THIS WAS dx -3, i.e. (81, -4), AND THE COMMENT ABOVE IT CLAIMED TO MIRROR
// NET_FRONT'S OWN dx (-4) "across the centreline" — it did not; -3 ≠ -4, so the
// mirror claim was false on its face. A corpus-wide crease sweep on 2026-09-07,
// reading the built crease path exactly as the NET_FRONT note above does, found
// the real gap: (81, -4) sits 2.9194 ft from the nearest crease boundary (the
// front arc, not the straight side at |y|=4) — inside the 3.275 ft an own-team
// circle's BODY AND ITS OWN OUTLINE STROKE already reach, by 0.356 ft, and inside
// the 3.875 ft the halo reaches, by 0.956 ft. That is not sub-pixel: at this
// file's 9 px/ft it is roughly 3.2 px of solid glyph outline and 8.6 px of halo,
// both visibly inside the blue paint — unlike NET_FRONT's own 0.05 ft
// (half-a-pixel) halo-only overlap, which is genuinely invisible and is not this.
//
// FIXED to dx -4, i.e. (80, -4) — actually the same offset as NET_FRONT, mirrored
// in dy as the retracted comment intended. Because the crease is symmetric about
// y = 0, this inherits NET_FRONT's own already-audited numbers exactly: 3.823 ft
// to the nearest boundary, 0.923 ft of body daylight, 0.548 ft of outlined-body
// daylight, and the same 0.05 ft (invisible) halo overlap NET_FRONT's own comment
// above already accepts. Re-verified for THIS coordinate, not assumed from the
// mirror claim a second time: nearest_dist(80, -4) = 3.8234 ft, matching
// nearest_dist(80, 4) to four decimal places.
//
// pk-diamond's 'L' ("alone, low") independently sits at the OLD (81, -4) — same
// coordinate, but a triangle (pos 'D'), not a circle, and triangle reach is
// anisotropic: in the ~20-24° direction where this crease is nearest, its own
// halo reaches only 2.8-ish ft off its apex figure, clearing the boundary by
// ~0.11 ft. Checked as part of this fix; not moved, because it does not need to
// be.
const BACKDOOR = { at: 'net-front', dx: -4, dy: -4 };        // (80, -4)

// "The backdoor is the weak-side post ... Whenever the kill's low defender
// commits to the strong side or to the net-front player, it is a 2-on-1 with
// nobody defending it." Drawn generically, off any one formation: a puck holder
// up top, the net-front attacker who occupies the low defender, and the backdoor
// arriver he has stopped covering.
//
// ONLY ONE OF THE TWO NAMED DELIVERIES IS DRAWN. "The pass comes low-to-high-to-
// backdoor or straight across from below the goal line" — the second of those
// runs straight through the goal frame at the true below-the-goal-line spacing,
// which is exactly the route offensive_zone_play.mjs's own backdoor comment
// declined to draw ("a route to the far post runs across the goal mouth, which
// this notation will not draw through"). What is drawn is the high-to-backdoor
// leg of the first delivery: a cross-ice pass from up top, stopping short of the
// receiver on the same 3.16 ft clearance pp-131 uses for its own net-front pass.
const ppBackdoor = {
  id: 'pp-backdoor',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,

  caption:
    'The backdoor: the weak-side post, the far side of the net, away from the puck. Whenever ' +
    'the kill\'s low defender commits to the strong side or to the net-front player, drawn here ' +
    'occupying him, it is a 2-on-1 with nobody covering it. Arrive late: a player camped at the ' +
    'back post all shift is marked; one arriving as the pass is released is not. The pass shown ' +
    'is the high-to-backdoor leg of a low-to-high-to-backdoor delivery; a straight pass from ' +
    'below the goal line is the other way it arrives, not drawn. Either way it crosses the royal ' +
    'road, which is why it converts. This is a read available off any formation, not a shape of ' +
    'its own.',

  describe:
    'Attacking half of the rink, the opposition net at the right, the opposition goaltender in ' +
    'the crease. Three own players: one up top near the right point holding the puck, one at the ' +
    'net front just outside the crease on the right, and one at the weak-side post outside the ' +
    'crease on the left, arriving late. One opposition defenceman stands low on the right, close ' +
    'to the net-front attacker rather than the one on the left. A dashed pass runs from the point ' +
    'across the middle of the ice, stopping just short of the weak-side attacker. The other two ' +
    'power-play attackers and the other three penalty killers are not drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    // "commits to the strong side or to the net-front player" — drawn shading to
    // the net-front attacker, the same offset pk-box's own strong-side low D uses.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'net-front', dx: -4, dy: 10 }, label: 'strong side, low' },
    { id: 'N', pos: 'F', at: NET_FRONT,          label: 'net front' },
    { id: 'P', pos: 'F', at: 'point:right',      label: 'puck up top' },
    // `BD` for backdoor, not a bare letter. Every other id in this file is
    // mnemonic (P point, H half-wall, B bumper, N net front, S side, M middle,
    // L low, W wedge) and `K` decoded to nothing — no unused single letter in
    // this roster reads as "backdoor" without inventing one, so this follows
    // the two-character precedent already set by `PP` (puck carrier) in
    // pk-nz-1-3 and pk-nz-1-1-2 below rather than a single stray initial.
    { id: 'BD', pos: 'F', at: BACKDOOR,          label: 'the backdoor' },
  ],

  routes: [
    // Stops 3.16 ft short of the receiver, the same clearance pp-131 uses for its
    // own net-front pass, for the same reason: a pass that lands exactly on a
    // glyph's centre reads as arriving on top of the player rather than at him.
    // ⚠️ RE-AIMED WITH BACKDOOR. This endpoint used to be (78, -3), which was
    // exactly (-3, +1) — magnitude sqrt(10) = 3.1623 ft — off the OLD (81, -4).
    // Moving BACKDOOR to (80, -4) without touching this would have left the tip
    // 2.236 ft from the receiver instead, inside his 2.9 ft body and no longer
    // the distance the comment claims. Kept the same (-3, +1) offset and the same
    // approach line, now anchored to the new centre: (77, -3), still 3.1623 ft
    // from BD and still clear of his body, under his halo.
    { from: 'point:right', to: { at: 'net-front', dx: -7, dy: -3 }, kind: 'pass' },
  ],

  puck: { at: 'point:right', dx: 2, dy: -3 },
};

// "The walk-down is the half-wall player skating the puck down toward the goal
// line and inside rather than passing. It forces a decision: if the kill's low
// defender steps out to you, the net front is free; if they stay, you have a
// shot from the top of the circle with a moving goalie."
//
// THE SECOND BRANCH IS NOT DRAWN. The section's own words for it — a shot "from
// the top of the circle" — name a spot the glossary defines as the *shallow* end
// of the circle, nearer the blue line than the half-wall the carrier starts from
// (rink_map_and_glossary.md:387-391; rink.json's `top-of-circle` is x 54 against
// `half-wall`'s x 69). A walk-down toward the goal line moves the carrier deeper,
// not shallower, so this diagram does not place a marker for that branch — it is
// spoken in the caption in the section's own words, not drawn as a coordinate
// this file cannot square with the glossary. Flagged in the round's report for a
// content/rules read; not resolved here.
//
// ⚠️ THE FIRST BRANCH'S PASS IS NOT DRAWN EITHER, as of this round's diagram
// review. It used to run from the carry's own end (74,8) to (79.5,7) — an
// endpoint 3.04 ft from BOTH the net-front receiver at (80,4) and the opposition
// D at (80,10), equidistant, and inside the D's own 3.6 ft triangle body before
// even his stroke. That, plus the carry's arrowhead landing only 6.24 ft from the
// same D and his "strong side, low" label all converging on one small patch of
// ice, collapsed into an unreadable cluster. See the note on `routes` below.
// Both branches are now spoken in the caption, not drawn.
//
// FIGURES BELOW ARE THE CURVE'S CLOSEST APPROACH, not a bare endpoint distance —
// measured the same way `check-arrivals.mjs` measures it.
const ppWalkDown = {
  id: 'pp-walk-down',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,

  caption:
    'The walk-down: the half-wall player skates the puck down toward the goal line and inside ' +
    'rather than passing, forcing a decision. If the low defender, drawn guarding low, steps out ' +
    'to challenge, the net front is open for a pass across — a genuine 2-on-1, not drawn here. If ' +
    'he holds his ground instead, the section says you still get a shot from the top of the ' +
    'circle with a moving goaltender; that shot is not drawn either. Walk toward the dot, not the ' +
    'corner — below the goal line and wide you are harmless. Keep your feet moving; the moment ' +
    'they stop the kill resets. If it is denied, reset to the point and start again.',

  describe:
    'Attacking half of the rink, the opposition net at the right, the opposition goaltender in ' +
    'the crease. One own player carries the puck from the right half-wall, drawn with the long ' +
    'smooth wave that means skate and stickhandle, angling down and in toward the goal line and ' +
    'stopping short of the slot. One own player stands at the net front just outside the crease. ' +
    'One opposition defenceman guards low on the same side, between the carrier\'s route and the ' +
    'net-front attacker. The pass that opens to the net front if the defenceman steps out to ' +
    'challenge is not drawn. The other three power-play attackers and the other three penalty ' +
    'killers are not drawn.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: G_AT },
    // Same strong-side-low offset as pk-box and ppBackdoor above: the low
    // defender who has to choose between the carrier and the net front.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'net-front', dx: -4, dy: 10 }, label: 'strong side, low' },
    { id: 'N', pos: 'F', at: NET_FRONT,          label: 'net front' },
    { id: 'F', pos: 'F', at: 'half-wall:right',  label: 'the walk-down' },
  ],

  // ⚠️ THE PASS WAS DROPPED this round, having collapsed into an unreadable
  // cluster with the carry's own arrowhead, the low D's triangle and his "strong
  // side, low" label leader. It ran (74,8)->(79.5,7); that endpoint was 3.04 ft
  // from BOTH the net-front receiver at (80,4) and the opposition D at (80,10) —
  // equidistant, and inside the D's own 3.6 ft triangle body before even his
  // stroke — so the drawing could not say who the pass was to. Re-deriving a
  // legible pass through that gap was not possible without either widening the
  // spacing between the receiver and the D (neither of which this diagram owns)
  // or shortening the pass into meaninglessness, so it is spoken in the caption
  // instead — the same treatment this diagram already gives the shot-from-the-
  // circle branch above. The carry's own endpoint is also pushed further from
  // the D for headroom: dy -14 (74,8) had a closest approach of 6.24 ft to him;
  // dy -16 (74,6) is now 6.54 ft, both comfortably clear of his 4.0 ft of
  // triangle ink but the wider gap is what the labeller needs.
  routes: [
    // Down toward the goal line and inside, angling toward the middle of the ice
    // rather than straight at the low defender's guarding spot — he has to step
    // OUT to reach this path, which is the read the caption states. (Aimed at
    // him instead, this route's arrowhead finished 4.47 ft from an opposing
    // skater and check-arrivals.mjs failed it outright: an arrowhead that close
    // to an opponent, in the direction of travel, reads as skating through him.)
    { from: 'half-wall:right', to: { at: 'faceoff-dot:right', dx: 5, dy: -16 }, kind: 'carry' },   // (74, 6)
  ],

  puck: { at: 'half-wall:right', dy: -4 },
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
    'power play that counters it. A rectangle around the slot: two players high, both ' +
    'forwards, one on each side and each responsible for one point, and two low, both ' +
    'defencemen, covering the low corners and the goalmouth — a box has no single top, and if ' +
    'you find yourself describing "the top of the box" you are describing a diamond. The picture ' +
    'shows the shape’s one concession, which it makes by design: nobody in a box is assigned ' +
    'to the middle of the slot, so the 1-3-1’s bumper stands uncovered in the hole in the ' +
    'middle of the rectangle. The box slides with the puck rather than rotating — all four shift ' +
    'together — which is movement a still frame cannot carry, so it is not drawn. Which shape ' +
    'you run is a coaching choice and the same four players can run the box, the diamond and the ' +
    'wedge+1 in one game: the box is simply the one almost everyone is taught first — an ' +
    'impression from coaching sources rather than a measured share, because no public count ' +
    'of which shape teams run as their base exists.',

  describe:
    'Defending half of the rink, our net at the right and our goaltender in the crease. Four own ' +
    'players in a rectangle around the slot: two forwards high, level with the tops of the ' +
    'circles and inside them, and two defencemen low, either side of the net front. Five ' +
    'opposition players in a 1-3-1: one at the point just inside the blue line, two on the ' +
    'half-walls, one ' +
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
    'shooting lane, and as the only player up there must not get walked around. Each middle killer ' +
    'takes a half-wall and both collapse onto the bumper when the puck goes to the middle, which ' +
    'is why this is the only common shape that starts with an answer to the bumper. What it ' +
    'concedes: the single low player is alone against the net-front ' +
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
    { id: 'A1', pos: 'F', at: { at: 'centre-point', dx: 20 }, label: 'the apex' },
    // "two in the middle on either side" — each takes a half-wall, and both
    // collapse onto the bumper, so they sit between the two.
    { id: 'M', pos: 'F', at: { at: 'faceoff-dot:right', dx: -2, dy: -8 }, label: 'wall and bumper' },
    { id: 'M', pos: 'D', at: { at: 'faceoff-dot:left', dx: -2, dy: 8 },   label: 'wall and bumper' },
    { id: 'L', pos: 'D', at: { at: 'net-front', dx: -3, dy: -4 },         label: 'alone, low' },

    ...PP_131_OPP,
  ],

  // "pressure the point player, take away the middle shooting lane". `pressure` draws
  // TWO bars and no arrowhead — §21.1's SUDDEN STOP mark, which this corpus also uses
  // for a pressure route because the one-bar checking-pressure mark of the other key is
  // not offered here. It is NOT "the key's own end mark" for pressure: no published key
  // has a two-bar pressure glyph. It finishes short of the point player and inside him,
  // on the lane, not on his body.
  routes: [
    { from: { at: 'centre-point', dx: 20 }, to: { at: 'centre-point', dx: 7, dy: 3 }, kind: 'pressure' },
  ],

  puck: { at: 'centre-point', dx: 3, dy: -4 },
};

// "three killers hold a tight triangle around the net — two defencemen just off
// the crease edges, one forward at the mid-to-high slot — while the fourth player,
// the '+1', pressures whoever has the puck" (:523).
//
// ⚠️ THIS QUOTATION USED TO END "chases the puck around the perimeter", which is
// not a paraphrase of the section — it is the behaviour the section names as the
// FAILURE. :523: "a +1 who simply follows the puck round the perimeter has broken
// the shape rather than run it", and "a +1 who chases is the counter to this
// system, not the system, and leaves you killing with three players". A comment
// that inverts its own section is worse than one that is merely out of date,
// because this block is the first thing an editor reads and it would have licensed
// redrawing the route around the outside.
//
// The caption and the route below were always right: the route is `kind:
// 'pressure'`, drawn straight out from the goal at the carrier, and the caption
// says so and hedges it — because :523 also says "Exactly how he does that is
// where published descriptions part company, so ask your coach which one you are
// running", and lists three. Do not "reconcile" the drawing to the old comment.
const pkWedge = {
  id: 'pk-wedge-plus-1',
  owner: 'content/systems/special_teams.md',
  half: true,
  width: 900,

  caption:
    'The wedge+1 penalty kill, also called triangle-and-one — four killers, shorthanded 4-on-5 — ' +
    'drawn against a five-man 1-3-1 with the puck on the half-wall. Three killers hold a tight ' +
    // W HERE IS *WEDGE*, AND IT IS THE ONLY DIAGRAM IN THE CORPUS WHERE IT IS NOT *WINGER*.
    // Measured: `W` appears on 31 glyphs across 17 diagrams; 29 carry `pos: 'F'` and are
    // wingers, and the two that carry `pos: 'D'` are both here. The shapes are individually
    // right — shape carries position, and a defenceman IS a triangle — but a reader who
    // learned the letter from any of the other sixteen pictures meets a W drawn as a triangle,
    // which is the "a player's shape changed between diagrams" signal the style guide forbids.
    // The gloss goes in the CAPTION and not into new ids: `content/systems/special_teams.md`'s
    // wedge+1 section supplies no letter vocabulary at all — it says "the wedge", "wedge
    // player", "two defencemen", "one forward" and "the +1" — so `WD`/`WF` would be a glyph
    // this corpus invented for one figure, and two-character ids on a triangle render at
    // font-size 2.15 (see the D branch's own note on what that costs on a phone).
    // Plain text, no emphasis marks: a caption is the SVG <title>, the visible figcaption and
    // the string `md_to_speech.py` voices, and none of the three is markdown. Asterisks here
    // would be read out. This was the only caption in the corpus that had any, briefly.
    'triangle around the net — all three are marked W for the wedge here rather than for a ' +
    'winger — two defencemen just off the crease edges, drawn wider apart than ' +
    'they really stand, because at the true spacing their glyphs would sit on top of the ' +
    'net-front attacker they are boxing out — and one forward at the mid-to-high slot; they stay ' +
    // ⚠️ "BLOCK SHOTS" WAS BARE HERE, and this caption is voiced: `md_to_speech.py` resolves
    // `diagram:<id>` to the caption, so a listener got the instruction with none of the
    // technique. The qualification is the owning section's own, from `#### Shot blocking` in
    // `content/systems/special_teams.md` — "Blocking shots is a technique, not an act of
    // courage", "in the lane before the shot, not sliding into it", "Never block from a
    // screening position." Taken verbatim rather than paraphrased, so the caption and the
    // section cannot drift.
    'tight, protect the slot and the goalmouth, block shots and rotate as a connected unit, and ' +
    'they do not chase. Blocking shots is a technique, not an act of courage. Be in the lane ' +
    'before the shot, not sliding into it, and never block from a screening position — ' +
    'half-deflecting a shot your goaltender could not see is worse than letting it through ' +
    'cleanly. The fourth, the +1, pressures whoever has the puck, and the drawn ' +
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
    'killing with three players. ' +
    // SAFETY. The caption instructs "Be in the lane before the shot" and dropped the two elements
    // that make the block survivable. Owner's own wording, content/systems/special_teams.md:704
    // and again verbatim in its Key Takeaway 7 (:1103) — "Block from close and on your feet, head
    // out of the lane and hands tucked." LAST, for the promotion rule.
    '⚠️ And block from close and on your feet, head out of the lane and hands tucked.',

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
// Both of these draw four killers and ONE attacker. The section that hosts them —
// "The four you will meet" — describes the killers' shape and the puck carrier and
// says nothing about where the other four power-play players stand on an entry, so
// the other four are not drawn rather than invented, and both captions say so. Full
// sheet, because a neutral-zone scheme spans both blue lines.
//
// ⚠️ THIS BLOCK USED TO ADD "it sends the reader to Zone Entries for that", AND THAT
// CLAUSE IS FALSE OF THE SECTION IT DESCRIBES. Checked 11 September 2026: the whole
// document links `zone_entries.md` in exactly two places, its Related trailer and the
// POWER-PLAY entries section — nowhere in the PK neutral-zone sections these two
// diagrams sit in. The delegation is real but belongs 250 lines away and to the other
// unit. The substance above — nothing fixes the other four, so they are not drawn —
// stands on the section's own silence and needed no borrowed sentence to hold it up.
//
// ⚠️ AND THAT DELEGATION IS WHY THE ATTACKING-SIDE COMPANION TO THESE TWO IS NOT
// DRAWN. A "five attackers against the four-man wall, through the narrow gate"
// picture for the power-play entries section was proposed and is REJECTED here, so the
// next triage reads it in the file instead of rediscovering it:
//
//   1. ⚠️ IT WOULD HAVE TO INVENT FOUR OF THE FIVE. That section names no entry
//      formation, no lane assignment and no attacker position. Its one spatial
//      sentence is "one or two players arcing back to gather speed and receive
//      already moving forward ... The single swing (one forward swings, one stays
//      wide)" — which fixes two players loosely and no side, no depth and no distance
//      from the line. Inventing the rest is the exact failure convention 1 at the head
//      of this file exists to prevent, and it would be inventing the OWN unit, which
//      is worse than inventing the opposition: a reader takes the shape he is shown
//      for the shape his team runs.
//   2. ⚠️ THE SECTION DISOWNS THE SUBJECT IN ITS OWN WORDS: "The entry toolkit itself
//      — carry, chip, dump, delay, the drive-and-drop, and the data on what each is
//      worth — is in Zone Entries, and everything there applies here. What changes
//      with the extra man is only this:" — and of the six things that follow, two are
//      tracked-data caveats, one is calibration, one is a four-book trapezoid rules
//      passage, and the two spatial ones (the drop, the swing) are the toolkit it just
//      handed to another document. A picture placed under that sentence contradicts it.
//   3. THE EXISTING ALTERNATIVES ARE ALREADY DISPOSED OF. Borrowing `entry-drop-pass`
//      into that section was rejected on the record on three independent grounds, one
//      of which was that it draws a 2-on-2 even-strength rush into a section about
//      bringing five men through four. And `pk-nz-1-3` and `pk-nz-1-1-2` ALREADY draw
//      the wall being entered — in this same document, which is why re-placing either
//      of them there is not available: no diagram appears twice in one document.
//   4. THE SWING ITSELF BELONGS TO ANOTHER OWNER. `neutral_zone_systems.md`'s timing-
//      the-swing section is an open DRAW item with three forwards at three depths;
//      drawing a swing here would build a second maintenance point for it in the voice
//      of the wrong unit.
//
//   What would change the answer: the entries section acquiring its own words for
//   where the five stand. Until it does, the honest picture of that section is the one
//   already on the page from the other side.

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
    'the row of separate overlapping arches that means backward skating. Our goaltender is in ' +
    'the crease at the right. ' +
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
  ppBackdoor, ppWalkDown,
  pkBox, pkDiamond, pkWedge,
  pkNz13, pkNz112,
];
