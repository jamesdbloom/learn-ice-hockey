/**
 * Diagrams for content/systems/faceoffs.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges — and the
 * "Full Five-Player Alignments" section opens by hedging everything at once:
 * "This entire section describes coaching choices, not rules of hockey... Find
 * out what your team runs before your first shift."
 *
 * A faceoff alignment is a five-player shape at a single instant, so most of
 * these carry no routes at all. That is the correct answer, not a thin one: the
 * frozen shape *is* the teaching, and an arrow added to make the picture look
 * busier would be a play the section does not describe.
 *
 * WHY THE POSITIONS ARE WHERE THEY ARE, geometrically.
 * All the end-zone diagrams are drawn at the right-hand circle. From
 * src/data/rink.json and Rule 1.9, which faceoffs.md quotes:
 *   - the end-zone dot is at (69, 22) — 20 ft out from the goal line, 22 ft off
 *     the middle;
 *   - the circle has a 15 ft radius, so its boards-side edge is y = 37 and its
 *     middle-of-the-ice edge is y = 7;
 *   - the four hash marks are 2 ft long, run parallel to the goal line at the
 *     outer edge of BOTH sides of the circle, and each pair is 5 ft 7 in apart —
 *     so each pair is a gate 5.58 ft wide in x, at x = 66.2 and x = 71.8.
 * Rule 76.7, as the document quotes it, forbids a non-taker from crossing into
 * the circle or "into the area between the hash marks", and Rule 76.6 requires
 * the eight non-takers to keep their bodies "on their own side of the hash
 * marks". So each winger stands just outside the circle, in the band the hash
 * marks mark out, on his own team's side of that gate: the DEFENDING team on the
 * goal-line side (x > 71.8), the ATTACKING team on the blue-line side (x < 66.2).
 * That is what makes the defensive and offensive alignments mirror images in x
 * rather than copies.
 *
 * FLAGGED: which side is "your own" is not spelled out either by faceoffs.md or
 * by the rule text it quotes. It is read here from Rule 76.4's requirement that a
 * player stand "squarely facing your opponent's end of the rink", so each team is
 * on the side toward its own end — which is also what the eye sees at any draw.
 * The reading decides only which way round the two pictures mirror, and NO
 * caption asserts it as a rule: a diagram must not state a rule its section does
 * not state.
 *
 * No diagram here draws a puck. Before the drop the puck is in the linesperson's
 * hand, not on the ice, and every one of these is frozen before or at the drop;
 * a black disc squeezed into the one-foot gap between the two centres' glyphs
 * said nothing and read as a third object in the dot.
 */

// ---------------------------------------------------------------------------
// Shared geometry. Every offset below is in rink feet from a named position.
// ---------------------------------------------------------------------------

const DOT = 'faceoff-dot:right';

// Half the separation of the two centres, who stand "roughly one stick length
// apart" (Rule 76.4, quoted in Positioning requirements). A stick is a little
// over five feet, but a player glyph is 5.8 ft across, so drawing the two
// centres a true stick length apart makes the two circles overlap into a single
// blob — which is what the first render did, and a reader cannot count two
// players in it. 4.2 ft each side is the honest way to draw "one stick length"
// at symbol scale: the glyphs separate, and nothing else in the picture moves.
const STICK = 4.2;

// Just clear of the 5 ft 7 in hash-mark gate (its edges are at x = 69 ± 2.79),
// on your own side of it.
const GATE = 5.69;   // half the 5 ft 7 in gate, plus the glyph radius, so the
                       // drawn body clears the hash marks rather than straddling them.

// 15 ft circle radius plus 1 ft, which puts the glyph's centre in the middle of
// the 2 ft band the hash marks mark out (y = 37 to 39 on the boards side) with
// both skates outside the circle.
const HASH = 16.97;   // was 16, which put both wingers 1.5 ft INSIDE the
                       // 15 ft circle once the 2.9 ft glyph radius and the
                       // dx offset were accounted for. Rule 76.7 makes a skate
                       // inside the circle a violation, and 76.4 the price is
                       // your centre ejected from the draw. Derived, not chosen:
                       // sqrt(17.9^2 - GATE^2), where 17.9 = circle 15 + glyph 2.9.

// The defending five — the team whose own net is at the right of the picture, so
// they stand on the goal-line side of the hash-mark gate.
const D_CENTRE   = { at: DOT, dx: STICK };                    // (73.2, 22)
const D_BOARDS_W = { at: DOT, dx: GATE, dy: HASH };           // (72.5, 38)
const D_INSIDE_W = { at: DOT, dx: GATE, dy: -HASH };          // (72.5, 6)
// "Behind and outside the boards-side winger, near the hash marks, ready to
// retrieve anything pulled back to the wall or to get behind the net." Behind is
// toward his own goal line (+x); outside is toward the boards (+y), but the
// boards are at 42.5 and a defender triangle is 7.2 ft across, so the room to go
// outside is spent almost immediately — the position earns "outside" by being
// beyond the winger's shoulder rather than by another two feet of y.
const D_WALL_D   = { at: DOT, dx: 11, dy: 15 };               // (80, 37)
// "In the slot in front of the goalie, responsible for the net front and for
// blocking a point shot." A foot and a half net-ward of the named slot position,
// which is the compromise those two jobs describe. Further net-ward than this and
// the defender triangle and the goaltender's circle touch, and the picture stops
// being able to say there are two players there.
const D_SLOT_D   = { at: 'slot', dx: 1.5 };                   // (77.5, 0)
const D_GOALIE   = 'crease';                                  // (86, 0)

// The attacking five — mirrored in x about the dot, for the hash-mark reason in
// the header. Everything else about them is different, which is the point of
// drawing both.
const A_CENTRE   = { at: DOT, dx: -STICK };                   // (64.8, 22)
const A_BOARDS_W = { at: DOT, dx: -GATE, dy: HASH };          // (65.5, 38)
const A_INSIDE_W = { at: DOT, dx: -GATE, dy: -HASH };         // (65.5, 6)

// The faceoff circle as a polygon, so the one thing in these pictures that is a
// RULE rather than a coaching choice can be shaded. 15 ft is the circle radius
// from Rule 1.9, the same number the renderer paints the circle with.
const CIRCLE = Array.from({ length: 24 }, (_, i) => {
  const a = (i / 24) * Math.PI * 2;
  return { at: DOT, dx: +(15 * Math.cos(a)).toFixed(2), dy: +(15 * Math.sin(a)).toFixed(2) };
});

// ---------------------------------------------------------------------------

const dzoneAlignment = {
  id: 'faceoff-dzone-alignment',
  owner: 'content/systems/faceoffs.md',
  half: true,
  width: 900,

  caption:
    'A defensive-zone draw in your own end, frozen at the instant before the puck is dropped, ' +
    'drawn at the right-hand circle. The centre is in the dot; the boards-side winger stands at ' +
    'the outer pair of hash marks and the inside winger at the inner pair, facing the slot; the ' +
    'boards-side defenceman is behind and outside his winger, near the wall; the second ' +
    'defenceman is in the slot in front of the goaltender. ' +
    'Where those four skaters stand is a coaching choice and not a rule — the alignment drawn is ' +
    'the one that goes with a low zone collapse behind a 2-1-2 ' +
    'forecheck, and every team’s alignment differs, so find out what yours runs before your ' +
    'first shift. ' +
    'What is not a choice is the shaded circle: every player other than the two taking the draw ' +
    'must keep both skates outside the circle and outside the hash marks, and skate contact ' +
    'with the line is permitted while crossing it is not.',

  describe:
    'The defending half of the rink, your own net at the right, the draw at the right-hand ' +
    'end-zone circle. The faceoff circle is shaded to mark the area no player other than the two ' +
    'takers may put a skate inside. Five own players: the centre in the dot on the goal-line ' +
    'side of it; the boards-side winger level with the dot at the outer hash marks, close to the ' +
    'wall; the inside winger level with the dot at the inner hash marks, about five feet off the ' +
    'middle of the ice; the boards-side defenceman ten feet nearer the goal line than his winger ' +
    'and outside him; the second defenceman in the slot in front of the goaltender, who is in ' +
    'the crease. One opposition player is drawn, the opposing centre, on the blue-line side of ' +
    'the dot. The rest of the opposing five are drawn in the offensive-zone diagram instead. ' +
    'No routes: this is a still shape at the moment before the drop.',

  zones: [
    // The circle itself. Shaded rather than labelled — the label would be drawn
    // at the polygon's centroid, which is the dot, on top of the two centres.
    { points: CIRCLE },
  ],

  players: [
    // Own five, exactly the five bullets of "The standard setup".
    { id: 'C', pos: 'F', at: D_CENTRE },
    { id: 'W', pos: 'F', at: D_BOARDS_W, label: 'boards-side winger' },
    { id: 'W', pos: 'F', at: D_INSIDE_W, label: 'inside winger' },
    { id: 'D', pos: 'D', at: D_WALL_D,   label: 'boards-side D' },
    { id: 'D', pos: 'D', at: D_SLOT_D,   label: 'slot D' },
    { id: 'G', pos: 'G', at: D_GOALIE },
    // The opposing centre, because a faceoff needs two takers and the section
    // describes the draw as the official dropping the puck between the sticks of
    // two opposing players. Their other four are not drawn: the section describes
    // your alignment here, and drawing theirs would be a second team's coaching
    // choice this document does not make.
    { id: 'C', pos: 'F', team: 'opp', at: A_CENTRE },
  ],
};

const dzoneCleanLoss = {
  id: 'faceoff-dzone-clean-loss',
  owner: 'content/systems/faceoffs.md',
  half: true,
  width: 900,

  caption:
    'The same defensive-zone alignment on a clean loss. Both wingers release straight to the ' +
    'opposing points, and they go on the drop rather than after they see where the puck went — ' +
    'it is the only thing standing between you and a shot from the top of the circle with your ' +
    'goaltender screened. The boards-side winger takes the near point; the inside winger has the ' +
    'harder job and must get all the way to the far one. ' +
    'That call belongs to zone coverage: under man-to-man coverage ' +
    'each winger instead takes the specific opponent he was assigned before the draw and follows ' +
    'him, which may mean staying low, and a hybrid keeps the wingers releasing while the low ' +
    'defender stays glued to a body — so ask which one your team plays. ' +
    'Nobody else moves yet: the centre picks up the man who beat him, the slot defenceman holds ' +
    'the net front and does not chase the puck to the point, and the boards-side defenceman ' +
    'takes the strong-side corner or half-wall.',

  describe:
    'The same defensive-zone draw as the previous diagram, your own net at the right. Two ' +
    'opposition defencemen have been added at the points, on the blue line either side of the ' +
    'middle, and the opposing centre is in the dot. Two routes, both forward skating and both ' +
    'beginning on the drop rather than one after the other: the boards-side winger leaves the ' +
    'outer hash marks and skates up the ice to the near point, finishing short of the opposing ' +
    'defenceman there; the inside winger leaves the inner hash marks and skates diagonally ' +
    'across to the far point on the other side of the ice. The centre, the slot defenceman and ' +
    'the boards-side defenceman are drawn where the draw left them.',

  players: [
    { id: 'C', pos: 'F', at: D_CENTRE },
    { id: 'W', pos: 'F', at: D_BOARDS_W, label: 'to the near point' },
    { id: 'W', pos: 'F', at: D_INSIDE_W, label: 'to the far point' },
    { id: 'D', pos: 'D', at: D_WALL_D },
    { id: 'D', pos: 'D', at: D_SLOT_D,   label: 'holds the net front' },
    { id: 'G', pos: 'G', at: D_GOALIE },
    { id: 'C', pos: 'F', team: 'opp', at: A_CENTRE },
    // The two opposing point men. They are in the section by name — the winger is
    // "the first man to the opposing point on a loss", and the danger the release
    // prevents is "a shot from the top of the circle" — and without them the two
    // routes end at empty ice and the reader cannot see what they are racing.
    { id: 'D', pos: 'D', team: 'opp', at: 'point:right' },
    { id: 'D', pos: 'D', team: 'opp', at: 'point:left' },
  ],

  // Not numbered. Numbering would say one release follows the other, and the
  // section's whole instruction is that both happen on the drop, simultaneously,
  // before anyone knows where the puck is.
  // Each finishes short of the point man, and offset to the outside of him —
  // both because a route must not end on another player's glyph, and because
  // the first attempt put the arrowhead on top of the painted neutral-zone dot
  // five feet outside the blue line, so the picture had an arrow apparently
  // aimed at a faceoff spot in the middle of a play.
  routes: [
    { from: D_BOARDS_W, to: { at: 'point:right', dx: 7, dy: 5 },  kind: 'skate' },
    { from: D_INSIDE_W, to: { at: 'point:left',  dx: 7, dy: -5 }, kind: 'skate' },
  ],
};

const dzoneTieUp = {
  id: 'faceoff-dzone-tie-up',
  owner: 'content/systems/faceoffs.md',
  half: true,
  width: 900,

  caption:
    'The same defensive-zone draw on a tie-up, which is the most likely of the three outcomes. ' +
    'A tied-up draw is a loose puck in a two-foot area with eight players around it, and it ' +
    'belongs to whoever moves first — this is the single most under-coached moment in hockey, ' +
    'because half the players on the ice wait to see what happens. ' +
    'Everyone jumps; the two arrows are the inside winger and the boards-side defenceman, who in ' +
    'this alignment are usually the two closest bodies and so should be the two who attack it. ' +
    'Which two are nearest depends on the alignment your team actually runs, and the one drawn ' +
    'here is a coaching default rather than a rule. Whoever has eyes on the puck calls it: ' +
    '"Loose!"',

  describe:
    'The same defensive-zone draw, your own net at the right, at the instant the two centres ' +
    'have tied each other up and the puck is loose on the dot. Two forward-skating routes, both ' +
    'beginning on the drop: the inside winger comes up from the inner hash marks toward the dot, ' +
    'and the boards-side defenceman comes down from the wall toward it. Both finish short of the ' +
    'two centres rather than on them. The boards-side winger, the slot defenceman and the ' +
    'goaltender hold their positions in the picture; the instruction is that ' +
    'everyone jumps on a tied-up puck, and the two drawn are the two nearest to it.',

  players: [
    { id: 'C', pos: 'F', at: D_CENTRE },
    { id: 'W', pos: 'F', at: D_BOARDS_W },
    { id: 'W', pos: 'F', at: D_INSIDE_W, label: 'nearest body' },
    { id: 'D', pos: 'D', at: D_WALL_D,   label: 'nearest body' },
    { id: 'D', pos: 'D', at: D_SLOT_D },
    { id: 'G', pos: 'G', at: D_GOALIE },
    { id: 'C', pos: 'F', team: 'opp', at: A_CENTRE },
  ],

  // Both stop short of the dot but stay aimed at it — extend either line and it
  // arrives at (69, 22), the loose puck. They have to stop short: a route ending
  // on the dot terminates between the two centres' glyphs and reads as a
  // collision with them, which is not what "attack the loose puck" means.
  routes: [
    { from: D_INSIDE_W, to: { at: DOT, dx: 1.8, dy: -8 }, kind: 'skate' },
    { from: D_WALL_D,   to: { at: DOT, dx: 5.5, dy: 8 },  kind: 'skate' },
  ],
};

const ozoneAlignment = {
  id: 'faceoff-ozone-alignment',
  owner: 'content/systems/faceoffs.md',
  half: true,
  width: 900,

  caption:
    'An offensive-zone draw, frozen before the drop, at the right-hand circle. Both defencemen ' +
    'are up at the points: the strong-side one on the draw side with his feet already set and ' +
    'his stick already loaded, because he is the shooter, and the weak-side one at the far point ' +
    'holding the line as the safety against a counterattack. The boards-side winger is at the ' +
    'outer hash marks ready to attack the wall or spin off it, the inside winger at the inner ' +
    'ones, and the centre is trying to win it back rather than forward. ' +
    'Set the shape beside the defensive-zone draw and the difference is the whole point: there, ' +
    'one defenceman stands in the slot in front of his own goaltender, and here both are on the ' +
    'blue line, because on a clean loss the priority flips instantly to not conceding a ' +
    'counterattack. ' +
    'This is the common default, not a rule; every team’s alignment differs, so ask what yours runs.',

  describe:
    'The attacking half of the rink, the opposition net at the right, the draw at the right-hand ' +
    'end-zone circle. Five own players: the centre in the dot on the blue-line side of it; the ' +
    'boards-side winger level with the dot at the outer hash marks, close to the wall; the ' +
    'inside winger level with the dot at the inner hash marks; the strong-side defenceman at the ' +
    'point on the draw side of the blue line; the weak-side defenceman at the far point. Two ' +
    'opposition players are drawn, the opposing centre in the dot and the goaltender in the ' +
    'crease; the rest of the defending five are drawn in the defensive-zone diagram instead. ' +
    'No routes: this is a still shape at the moment before the drop.',

  players: [
    { id: 'C', pos: 'F', at: A_CENTRE },
    { id: 'W', pos: 'F', at: A_BOARDS_W, label: 'boards-side winger' },
    { id: 'W', pos: 'F', at: A_INSIDE_W, label: 'inside winger' },
    // "Strong-side defenceman — at the point on the draw side, feet already set,
    // stick already loaded. This is the shooter."
    { id: 'D', pos: 'D', at: 'point:right', label: 'the shooter, feet set' },
    // "Weak-side defenceman — at the far point, holding the line as the safety
    // against a counterattack."
    { id: 'D', pos: 'D', at: 'point:left',  label: 'holds the line' },
    { id: 'C', pos: 'F', team: 'opp', at: D_CENTRE },
    { id: 'G', pos: 'G', team: 'opp', at: D_GOALIE },
  ],
};

const neutralZoneAlignment = {
  id: 'faceoff-neutral-zone',
  owner: 'content/systems/faceoffs.md',
  // Full sheet: the shape only makes sense if you can see how far back the
  // defencemen are, and their reference point is the far blue line.
  half: false,
  width: 980,

  caption:
    'A neutral-zone alignment, drawn here at centre ice so the whole sheet is visible; you ' +
    'attack to the right. The centre is in the dot, both wingers are wide in their own lanes ' +
    'level with or just behind him, and both defencemen are back toward their own blue line, one ' +
    'either side of the middle, ready to defend a rush if the draw goes the wrong way. ' +
    'That depth is the shape’s whole argument: these are the lowest-stakes draws and the ones ' +
    'most worth taking a risk on, because a lost one costs you almost nothing so long as your ' +
    'defencemen are already gapped up to meet the rush. ' +
    'On a win, advance the puck immediately and look to carry or pass it in with control — a won ' +
    'neutral-zone draw that ends in a dump-in has produced very little. ' +
    'The alignment is a coaching default rather than a rule, and every team’s differs.',

  describe:
    'The full sheet, your own net at the left, attacking to the right. The draw is at the centre ' +
    'dot. Five own players: the centre in the dot on his own side of it; the two wingers wide in ' +
    'their lanes, one near each side board, level with or a stride behind the dot; the two ' +
    'defencemen well back, just in front of their own blue line, one either side of the middle ' +
    'of the ice. The own goaltender is in the crease at the left. One opposition player is ' +
    'drawn, the opposing centre, on the far side of the dot. No routes: this is a still shape at ' +
    'the moment before the drop.',

  players: [
    // Centre ice, so nothing is sided: the centre stands on his own side of the
    // dot, which here is the defensive side.
    { id: 'C', pos: 'F', at: { at: 'centre-ice', dx: -STICK } },
    // "Both wingers wide, level with or just behind the dot, in their lanes."
    // Wide is 30 ft off the middle, which is outside the 15 ft centre circle and
    // still 12 ft off the boards; a stride behind is 2 ft.
    { id: 'W', pos: 'F', at: { at: 'centre-ice', dx: -2, dy: 30 },  label: 'wide, in his lane' },
    { id: 'W', pos: 'F', at: { at: 'centre-ice', dx: -2, dy: -30 }, label: 'wide, in his lane' },
    // "Both defencemen back toward your own blue line, one either side of the
    // middle." point:right:far and point:left:far are the far blue line's two
    // point positions, (-25, +-20); the dy pulls them in toward the middle,
    // because "either side of the middle" is a narrower instruction than the
    // point, and the dx puts them a stride in front of their own line.
    { id: 'D', pos: 'D', at: { at: 'point:right:far', dx: 2, dy: -8 }, label: 'ready for the rush' },
    { id: 'D', pos: 'D', at: { at: 'point:left:far',  dx: 2, dy: 8 } },
    // The far-end crease. 'crease' is not a sided position, so the middle segment
    // of the name is inert and only ':far' does any work — it mirrors x.
    { id: 'G', pos: 'G', at: { at: 'crease:right:far', dx: -0.5 } },
    { id: 'C', pos: 'F', team: 'opp', at: { at: 'centre-ice', dx: STICK } },
  ],
};

const goaliePulled = {
  id: 'faceoff-goalie-pulled',
  owner: 'content/systems/faceoffs.md',
  // Full sheet, unlike the other end-zone diagrams. The whole subject of this one
  // is a goaltender who is not there, and on the attacking half alone his absence
  // is invisible — the picture would be the offensive-zone alignment plus one
  // skater, and the caption would be carrying the entire claim on its own.
  half: false,
  width: 980,

  caption:
    'An offensive-zone draw with your own goaltender pulled for an extra attacker: your own net, ' +
    'at the far end of the picture, is empty. Six skaters changes the alignment entirely — the ' +
    'extra attacker usually goes to the net front, drawn here, or to the high slot, and both ' +
    'defencemen are at the points. ' +
    'The centre is under maximum pressure to win it back cleanly, because there is no safe ' +
    'outlet and no recovery from a loss; the empty ice behind the two defencemen is what a lost ' +
    'draw plays into. A goaltender may not take part in a faceoff in any case. ' +
    'Where the extra attacker and the two defencemen go is settled; where the wingers go is not, ' +
    'so the two of them are shown on the hash marks as at any offensive-zone draw — a default, ' +
    'not a fixed position.',

  describe:
    'The full sheet, attacking to the right, the draw at the right-hand end-zone circle in the ' +
    'attacking zone. Your own net, at the left, has no goaltender in it. Six own skaters: the ' +
    'centre in the dot on the blue-line side; the boards-side winger at the outer hash marks; the ' +
    'inside winger at the inner hash marks; the extra attacker at the net front, just outside the ' +
    'crease and off to the draw side; and both defencemen at the points on the attacking blue ' +
    'line. Two opposition players are drawn, the opposing centre in the dot and their goaltender ' +
    'in the crease. No routes: this is a still shape at the moment before the drop.',

  players: [
    { id: 'C',  pos: 'F', at: A_CENTRE },
    { id: 'W',  pos: 'F', at: A_BOARDS_W },
    { id: 'W',  pos: 'F', at: A_INSIDE_W },
    // "The extra attacker usually goes to the net front or the high slot." Net
    // front, offset off the middle so the glyph clears the goaltender's — a sixth
    // attacker standing on the goalie is not what "net front" means.
    { id: 'F6', pos: 'F', at: { at: 'net-front', dx: -4, dy: 4.5 }, label: 'extra attacker' },
    // "Both defencemen are at the points."
    { id: 'D',  pos: 'D', at: 'point:right' },
    { id: 'D',  pos: 'D', at: 'point:left' },
    { id: 'C',  pos: 'F', team: 'opp', at: D_CENTRE },
    { id: 'G',  pos: 'G', team: 'opp', at: 'crease' },
  ],
};

export default [
  dzoneAlignment,
  dzoneCleanLoss,
  dzoneTieUp,
  ozoneAlignment,
  neutralZoneAlignment,
  goaliePulled,
];
