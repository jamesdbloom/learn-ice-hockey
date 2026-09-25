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

// Far enough off the dot line that the whole glyph clears the circle: at this y
// and GATE's x the glyph's CENTRE is exactly 17.9 ft from the dot, so its rim is
// tangent to the 15 ft circle and no part of the body is inside it. That puts the
// centre at y = 22 + 16.97 = 38.97 on the boards side — the outer edge of the 2 ft
// band the hash marks mark out (y 37 to 39), not its middle, and 3.53 ft off the
// dasher at 42.5.
const HASH = 16.97;   // was 16 — "the circle's 15 ft plus a foot" — which put both
                       // wingers 1.5 ft INSIDE the 15 ft circle once the 2.9 ft
                       // glyph radius and the dx offset were accounted for. Rule
                       // 76.7 makes a skate inside the circle a violation, and
                       // under 76.4 the price is your centre ejected from the
                       // draw. Derived, not chosen: sqrt(17.9^2 - GATE^2), where
                       // 17.9 = circle 15 + glyph 2.9. The prose above described
                       // the superseded 16 for as long as it stood next to 16.97.

// The defending five — the team whose own net is at the right of the picture, so
// they stand on the goal-line side of the hash-mark gate.
const D_CENTRE   = { at: DOT, dx: STICK };                    // (73.2, 22)
// These two trailing coordinates read (72.5, 38) and (72.5, 6) for as long as GATE
// and HASH have been 5.69 and 16.97 — they are the values of the constants BEFORE
// both were re-derived against the glyph radius, so they understated how far
// outside the hash-mark gate and the circle these two wingers actually stand.
const D_BOARDS_W = { at: DOT, dx: GATE, dy: HASH };           // (74.69, 38.97)
const D_INSIDE_W = { at: DOT, dx: GATE, dy: -HASH };          // (74.69, 5.03)
// "Behind and outside the boards-side winger, near the hash marks, ready to
// retrieve anything pulled back to the wall or to get behind the net." Behind is
// toward his own goal line (+x), and he is: 5.31 ft nearer it than the winger.
//
// OUTSIDE IS NOT DRAWN, AND CANNOT BE AT THIS SCALE. Outside is toward the boards
// (+y), and at y 37 this defenceman is already 1.97 ft INSIDE his winger; there is no
// room outboard of the winger to put him in.
//
// The numbers, since two previous notes here got them wrong. `pos: 'D'` draws a
// TRIANGLE whatever team he is on — shape carries the position — whose apex reaches
// R = 3.6 ft above the centroid, plus 0.4 ft of stroke now that the path carries
// `stroke-linejoin="round"`. So his ink reaches y 41.0. The boards at x = 80 are NOT
// the dasher: the corner arc starts at x = 72 (r = 28, centred (72, 14.5)), so the
// boards centreline here is 14.5 + sqrt(28² − 8²) = 41.33 and its inner ink edge is
// 41.08. He clears by 0.08 ft — which is all the room there is.
//
// ⚠️ HIS WINGER DOES NOT CLEAR, and that one is still open. A forward's circle at
// y 38.97 carries 2.9 + 0.375 = 3.275 ft of ink, reaching 42.245 against an inner edge
// of 42.12 on the arc at x = 74.69: an overlap of 0.125 ft, in this diagram and in the
// clean-loss and tie-up diagrams beside it. Rounding the join does not touch a circle,
// and lowering HASH is not available — it is derived from Rule 76.7, and a smaller
// value puts a skate inside the faceoff circle. `check_geometry.py` cannot see it,
// because it checks the coordinate table and not glyph ink.
//
// ⚠️ TWO EARLIER NOTES HERE WERE WRONG, in opposite ways. The first read "an own-team
// glyph is a CIRCLE of radius 2.9 (shape carries team, not position — this player is a
// defenceman but he is ours, so he is not a triangle)": the superseded axis. The second
// corrected the axis and then miscomputed, claiming the apex reached 40.518 and
// "clears the boards by 1.98 ft" — 40.518 adds the base's *x* half-width (3.1176) to a
// *y* coordinate, and 1.98 measured against the dasher rather than the corner arc. It
// certified a collision as clearance. Re-derive from the rendered path, not from prose:
// the SVG says `<path d="M 80 -40.60 …">` for this glyph — that is the apex VERTEX, at
// 37 + 3.6. The 41.0 above is that vertex plus the 0.4 of stroke the round join carries;
// the path data does not change when the join does.
//
// The caption still says
// "behind and outside" because that is faceoffs.md's own instruction about real
// ice; the picture delivers the "behind" and cannot deliver the "outside", and the
// `describe` below therefore states only what is drawn.
const D_WALL_D   = { at: DOT, dx: 11, dy: 15 };               // (80, 37)
// "In the slot in front of the goalie, responsible for the net front and for
// blocking a point shot." A foot and a half net-ward of the named slot position,
// which is the compromise those two jobs describe. Further net-ward than this and
// the defender's triangle and the goaltender's `G` touch, and the picture stops
// being able to say there are two players there. (The goaltender has no enclosing
// shape at all — both published keys draw a bare letter — so what collides with the
// triangle is the lettering, not a circle, as this note used to say.)
const D_SLOT_D   = { at: 'slot', dx: 1.5 };                   // (77.5, 0)
const D_GOALIE   = 'crease';                                  // (86, 0)

// The attacking five — mirrored in x about the dot, for the hash-mark reason in
// the header. Everything else about them is different, which is the point of
// drawing both.
const A_CENTRE   = { at: DOT, dx: -STICK };                   // (64.8, 22)
// Same stale pair mirrored: these read (65.5, 38) and (65.5, 6).
const A_BOARDS_W = { at: DOT, dx: -GATE, dy: HASH };          // (63.31, 38.97)
const A_INSIDE_W = { at: DOT, dx: -GATE, dy: -HASH };         // (63.31, 5.03)

// The faceoff circle as a polygon, so the one thing in these pictures that is a
// RULE rather than a coaching choice can be shaded. 15 ft is the circle radius
// from Rule 1.9, the same number the renderer paints the circle with.
const CIRCLE = Array.from({ length: 24 }, (_, i) => {
  const a = (i / 24) * Math.PI * 2;
  return { at: DOT, dx: +(15 * Math.cos(a)).toFixed(2), dy: +(15 * Math.sin(a)).toFixed(2) };
});

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// The same defensive-zone alignment at the OTHER circle.
//
// ⚠️ THE OWNER REPORTED THAT THE END-ZONE DOTS ARE WHERE PLAYERS MOST OFTEN GET
// CONFUSED ABOUT WHERE TO STAND, and asked for the two dots drawn. This is the
// companion to `dzoneAlignment` above, mirrored across the centre line.
//
// ⚠️ AND IT IS A MIRROR, NOT A SECOND SYSTEM. The roles do not change and the
// instructions do not change: the boards-side winger is still on the boards, the
// inside winger still ~5 ft off the middle, the boards-side D still nearer the goal
// line than his winger. What changes is which physical side of the ice each of them
// stands on — which is exactly why `faceoffs.md` says "boards-side" and "inside"
// rather than "left" and "right". A reader who learns the alignment as "the winger on
// the left" has learned it wrong at one of the two circles, and there is no way to draw
// that with one picture.
//
// ⚠️ WHY A SEPARATE DIAGRAM AND NOT BOTH CIRCLES IN ONE. Drawing both alignments on
// one sheet puts two centres, four wingers and two boards-side defencemen on the ice —
// ten figures for a five-player team. The slot defenceman and the goaltender would be
// the only two that did not double, because they stand in the same place for a draw at
// either circle. A pair of pictures says the same thing without drawing a team that
// cannot exist.
const LDOT = 'faceoff-dot:left';

const dzoneAlignmentOtherCircle = {
  id: 'faceoff-dzone-alignment-other-circle',
  title: 'The same alignment at the other circle',
  owner: 'content/systems/faceoffs.md',
  half: true,
  width: 900,

  caption:
    'The same alignment at the other end-zone circle. Every job is unchanged, and the slot defenceman' +
    ' and the goaltender stand in the same place at either circle; what changes is which side of the ' +
    'ice each of the others is on. The alignment is a coaching choice, not a rule — find out what ' +
    'your team runs. ' +
    // ⚠️ THE SHADED CIRCLE IS A CLAIM, AND IT NEEDED ITS CAVEAT. This diagram draws the
    // same no-skate-inside zone as its twin and asserted the same thing about it with
    // none of the twin's four-book warning. `dzoneCleanLoss` and `dzoneTieUp` omit that
    // warning too, but they draw NO shaded zone, so they were never a precedent for
    // dropping it here. A reader who meets this picture alone — a deep link, a search
    // result, a screen reader taking one figure — got an absolute-sounding rule.
    'The shaded circle is the rule rather than the choice: everyone but the two takers stays outside ' +
    // ⚠️ This said "not the same in all four books" until the split it points at was
    // corrected. The split names SIX -- the NHL, the IIHF and the PWHL permissive, Hockey
    // Canada and CARHA counting a skate on the line as encroachment, USA Hockey's Casebook
    // wanting everything behind the hash marks -- so the pointer's count was never the same
    // number as the thing it pointed at, and this caption's only host, faceoffs.md, declares
    // its own survey shelf as five. A pointer carries no count now; the diagram it points at
    // carries the books.
    'it. ⚠️ What counts as outside is not the same in every book — the diagram above carries that' +
    ' split.',

  describe:
    'The defending half of the rink, your own net at the right, the draw at the ' +
    'left-hand end-zone circle — a mirror image of the previous diagram. The faceoff ' +
    'circle is shaded to mark the area no player other than the two takers may put a ' +
    'skate inside. Five own players: the centre in the dot on the goal-line side of it; ' +
    'the boards-side winger level with the dot at the outer hash marks, close to the ' +
    'wall; the inside winger level with the dot at the inner hash marks, about five feet ' +
    'off the middle of the ice; the boards-side defenceman about five feet nearer the ' +
    'goal line than his winger, close to the same wall; the second defenceman in the ' +
    'slot in front of the goaltender, who is in the crease. One opposition player is ' +
    'drawn, the opposing centre, on the blue-line side of the dot. No routes: this is a ' +
    'still shape at the moment before the drop.',

  zones: [
    { points: Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return { at: LDOT, dx: +(15 * Math.cos(a)).toFixed(2), dy: +(15 * Math.sin(a)).toFixed(2) };
      }) },
  ],

  players: [
    // Mirrored across the centre line: every dy negated, every dx unchanged.
    { id: 'C', pos: 'F', at: { at: LDOT, dx: STICK } },
    { id: 'W', pos: 'F', at: { at: LDOT, dx: GATE, dy: -HASH }, label: 'boards-side winger' },
    { id: 'W', pos: 'F', at: { at: LDOT, dx: GATE, dy: HASH },  label: 'inside winger' },
    { id: 'D', pos: 'D', at: { at: LDOT, dx: 11, dy: -15 },     label: 'boards-side D' },
    // Unmirrored on purpose — the slot and the crease are on the centre line, so these
    // two stand in the same place whichever circle the draw is at. That is the point.
    { id: 'D', pos: 'D', at: D_SLOT_D, label: 'slot D' },
    { id: 'G', pos: 'G', at: D_GOALIE },
    { id: 'C', pos: 'F', team: 'opp', at: { at: LDOT, dx: -STICK } },
  ],
};

const dzoneAlignment = {
  id: 'faceoff-dzone-alignment',
  title: 'Defensive-zone draw alignment',
  owner: 'content/systems/faceoffs.md',
  half: true,
  width: 900,

  caption:
    'A defensive-zone draw frozen before the drop, at the right-hand circle. The boards-side ' +
    'defenceman stands nearer the boards than his winger as well as behind him; there is no room in ' +
    'the picture to draw it. Where everyone stands is a coaching choice and not a rule — this ' +
    'alignment goes with a low zone collapse, and every team’s differs, so find out what yours runs. ' +
    'The shaded circle is the part that is a rule: every player other than the two taking the draw ' +
    'must keep both skates outside the circle and outside the hash marks. ⚠️ Whether touching the ' +
    'line is safe is not the same in every book. The NHL, the IIHF and the PWHL permit skate ' +
    'contact with the line and make it crossing the line that is illegal (NHL and IIHF Rule 76.7, ' +
    'PWHL Rule 78.7); Hockey Canada and CARHA both count a skate on the face-off circle as ' +
    'encroachment; and USA Hockey’s Casebook requires all sticks and all skates completely behind ' +
    'the hash marks. Keep your skates and your stick behind your own hash mark, and your hands and ' +
    'body off the opponent beside you: that position satisfies every book, whichever one your game ' +
    'is played under. ' +
    // ⚠️ THE COUNT AND THE SUFFICIENCY ARE TWO SEPARATE DEFECTS AND THIS CAPTION CARRIED
    // BOTH. It once ended "...and you are legal in all four books." The SUFFICIENCY half was
    // repaired first: NHL and IIHF 76.7(iii) make pre-drop contact a violation in its own right,
    // so foot position is not the whole of legality, and the corpus already knew that at
    // winger.md and faceoffs.md. THE COUNT HALF SURVIVED THAT REPAIR, and it was wrong twice.
    //
    // (1) It contradicted its own owner in the voiced layer. faceoffs.md declares its survey
    //     shelf in terms -- "'The five books' below means five, and there is a sixth on the
    //     shelf" -- and states THIS VERY INSTRUCTION as "legal in all five rulebooks this
    //     document covers", twice more in Common Mistakes and Key Takeaways. center.md's
    //     faceoff facts block says "now true in all five books" a few lines above the marker
    //     that embeds this picture.
    // (2) No count is true in all SEVEN hosts. defender.md declares six; faceoffs.md and
    //     center.md five; rink_map.md and game_management.md four; how_to_watch_hockey.md
    //     declares none. Count-free is the only wording true in every host -- and it is the
    //     owner's own ruling, faceoffs.md: "That is legal everywhere, it needs no edition and
    //     no book named."
    //
    // The book-by-book split was ALSO short two books, in BOTH directions, so widening the
    // count alone would not have repaired it. PWHL 78.7(i)-(ii) is the NHL's clause verbatim
    // (permissive, skate contact with the line allowed); CARHA's Glossary "Encroachment" is
    // Hockey Canada's verbatim -- a skate "either inside the face-off circle, on the face-off
    // circle, or in the area between the hash marks" -- so naming Hockey Canada alone told a
    // CARHA reader nothing about his own book.
    //
    // And the contact limb below was under-attributed to the NHL and IIHF. PWHL 78.7(iii) is
    // word-identical; Hockey Canada 6.2(a) and CARHA 57(a) both eject the CENTRE when a player
    // other than the taker "makes physical contact with an opponent" before the drop. USA
    // Hockey is the one book that does not name a non-taker's contact -- 613(e) reaches the
    // players facing off -- so it is left unnamed here rather than swept in.
    '⚠️ Contact is priced on its own, and your centre pays for it: any physical contact with ' +
    'an opponent before the drop is a face-off violation in its own right under the NHL, the IIHF ' +
    'and the PWHL (NHL and IIHF Rule 76.7, PWHL Rule 78.7), and under Hockey Canada Rule 6.2(a) and ' +
    'CARHA Rule 57(a) a player other than the taker who makes contact with an opponent gets their ' +
    'own centre ejected from the dot.',

  describe:
    'The defending half of the rink, your own net at the right, the draw at the right-hand ' +
    'end-zone circle. The faceoff circle is shaded to mark the area no player other than the two ' +
    'takers may put a skate inside. Five own players: the centre in the dot on the goal-line ' +
    'side of it; the boards-side winger level with the dot at the outer hash marks, close to the ' +
    'wall; the inside winger level with the dot at the inner hash marks, about five feet off the ' +
    'middle of the ice; the boards-side defenceman about five feet nearer the goal line than his ' +
    'winger, close to the same wall; the second defenceman in the slot in front of the goaltender, who is in ' +
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
  title: 'Defensive-zone draw, lost clean',
  owner: 'content/systems/faceoffs.md',
  // Not the contested case: the draw has already gone the other way. "The same
  // defensive-zone alignment on a clean loss", with "the centre picks up the man who
  // beat him" — the puck is theirs, which is why the wingers are releasing at all.
  half: true,
  width: 900,

  caption:
    'A defensive-zone draw lost clean. Both wingers release to the opposing points on the drop rather' +
    ' than after they see where the puck went — the boards-side winger to the near point, the inside ' +
    'winger the harder job, all the way to the far one. That is the zone call: under man-to-man each ' +
    'winger instead takes the specific opponent he was assigned before the draw and follows him, ' +
    'which may mean staying low, and a hybrid keeps the wingers releasing while the low defender ' +
    'stays glued to a body — so ask which one your team plays. Nobody else moves yet: the centre ' +
    'picks up the man who beat him, the slot defenceman holds the net front rather than chasing the ' +
    'puck to the point, and the boards-side defenceman takes the strong-side corner or half-wall.',

  describe:
    'The same defensive-zone draw as the previous diagram, your own net at the right. Two ' +
    'opposition defencemen have been added at the points, just inside the blue line either side ' +
    'of the middle, and the opposing centre is in the dot. Two routes, both beginning on the drop ' +
    'rather than one after the other: the boards-side winger leaves the outer hash marks and ' +
    'goes straight up the ice to the near point; the inside winger leaves the inner hash marks ' +
    'and goes diagonally across to the far point on the other side of the ice. Each route runs ' +
    'at the defenceman it is going to and stops a few feet short of him, ending in two short bars ' +
    'across the line rather than an arrowhead, because the winger is arriving to take that man ' +
    'rather than skating past him. The centre, the slot defenceman ' +
    'and the boards-side defenceman are drawn where the draw left them.',

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
  //
  // THE ROUTES GO TO THE POINTS, BECAUSE THAT IS THE SECTION'S OWN SENTENCE.
  // "Defensive-zone draws" leads its clean-loss list with "**Both wingers go
  // straight to the points.**"; the ```facts``` block above it repeats it as "On a
  // clean loss, both wingers go to the points on the drop"; and "The standard
  // setup" calls the boards-side winger "the first man to the opposing point on a
  // loss". So the destination is not a drawing choice, and a route that finishes
  // anywhere else is teaching something the document does not say.
  // (Quoted rather than cited by line: four line numbers stood here and all four
  // had gone stale, pointing into unrelated paragraphs.)
  //
  // WHAT THE ARRIVAL TEST ACTUALLY IMPLIES HERE. The test is THE ARRIVAL INVARIANT,
  // stated normatively above `playSvg` in scripts/lib/rink.mjs and enforced by
  // scripts/check-arrivals.mjs. Not restated here — this was one of four verbatim
  // copies, and the copy here also stated a STRONGER form of (a) than the invariant
  // supports: "fails (a) at every distance" drops the caveat that (a)'s reach is
  // unbounded and therefore advisory, never a build failure.
  // On THIS play the two forms are jointly unsatisfiable by any arrow-headed route, and
  // that is the whole finding rather than a tuning problem. The aim point IS the
  // defenceman, so an on-bearing tip has a miss of ~0 and fails (a) at every
  // distance; the only way to pass (a) is to bend the route off the man, and the
  // only way to pass (b) is to stop far enough short that the arrowhead is no
  // longer near him. Both bought compliance by drawing the wrong play. At the
  // ±9 version the tips sat 11.40 ft out at (32, ±29) — 11.4 ft from the point
  // men, 39° off bearing, short of the blue line and 9 ft outside their man
  // toward the boards. The picture passed the test and lost the lesson.
  //
  // `pressure` is the answer: a plain line ending in TWO bars, which is §21.1's
  // SUDDEN STOP mark, used here to mean arriving and taking the man. Be exact about
  // what that is and is not — no published key has a two-bar checking-pressure mark.
  // The Hockey Eastern Ontario sheet's "Checking pressure" is ONE bar, §21.1 has no
  // pressure symbol at all, and this corpus does not offer the one-bar terminal
  // (`rink.mjs`, above `suddenstop`). So a pressure route and a sudden stop draw the
  // same glyph here and are told apart by where the route finishes — the one place
  // these diagrams knowingly draw one mark for two things, disclosed to the reader in
  // reading_ice_hockey_diagrams.md. ⚠️ This note read "one bar" while `pressure` drew
  // two; the repair corrected the count and left "Checking pressure" standing beside
  // it, which asserted a glyph no key publishes. It
  // satisfies (b) by construction — there is no arrowhead to place — and it lets
  // the route run true to the point man and stop short of him, which is what (a)
  // is protecting. The previous note rejected `pressure` by citing this diagram's
  // own `describe` ("forward skating"), which is circular: the describe is ours,
  // and it is updated below to say what is now drawn. The document's own
  // vocabulary supports it too — "Offensive-zone draws" has the wingers "pressure
  // the puck rather than retreating" on a clean loss.
  //
  // Geometry, so the next agent can check rather than trust. Each route runs on
  // the true bearing from its winger to its point man and stops 5.5 ft short of
  // the anchor, expressed as an offset FROM `point` so it holds wherever the blue
  // line moves to:
  //   boards-side  (74.69, 38.97) -> (30.14, 21.96), bearing to (25, 20)
  //   inside       (74.69,  5.03) -> (29.91, -17.53), bearing to (25, -20)
  // The opposition triangle has its apex at cy + 3.6 and its base at cy - 1.8,
  // half-width 3.118, stroke 0.8, so a straight edge carries 0.4 ft of ink. At
  // 5.5 ft out on that bearing the line's end — and both ends of the 4 ft bar
  // drawn square across it, `bar()` being +/-2 ft — clear the nearer edge of that
  // triangle's ink by between 2.91 and 3.55 ft, the tightest being the outboard
  // end of the boards-side bar. The line stops visibly AT the man without
  // touching him, which is the whole reading of a checking-pressure mark.
  //
  // This is NOT the loose-puck false positive that clears the tie-up diagram
  // below. There, both routes aim at a puck lying on the dot and the two centres
  // merely happen to be near it. Here the aim point IS the defenceman — which is
  // exactly why the notation, and not the geometry, had to give.
  routes: [
    { from: D_BOARDS_W, to: { at: 'point:right', dx: 5.14, dy: 1.96 },  kind: 'pressure' },
    { from: D_INSIDE_W, to: { at: 'point:left',  dx: 4.91, dy: 2.47 },  kind: 'pressure' },
  ],
};

const dzoneTieUp = {
  id: 'faceoff-dzone-tie-up',
  title: 'Defensive-zone draw, tied up',
  owner: 'content/systems/faceoffs.md',
  half: true,
  width: 900,

  caption:
    'A defensive-zone draw on a tie-up, which is the most likely of the three outcomes — a ' +
    'coaching estimate rather than a counted figure. A tied-up draw is a loose puck in a two-foot ' +
    'area with eight players around it, and it belongs to whoever moves first. The two arrows are the' +
    ' inside winger and the boards-side defenceman, usually the two closest bodies in this alignment ' +
    '— which is a coaching default rather than a rule, so which two are nearest depends on what your ' +
    'team actually runs. Whoever has eyes on the puck calls it: "Loose!"',

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
  // passes within 1.53 ft of (69, 22) from the inside winger and 0.62 ft from the
  // defenceman, which at a glyph radius of 2.9 ft is still an arrow pointing at the
  // loose puck. This read "and it arrives at (69, 22)" exactly, and did, from the
  // inside winger's superseded (72.5, 6); he moved 2.19 ft outboard when GATE was
  // re-derived and the aim went with him. They have to stop short: a route ending
  // on the dot terminates between the two centres' glyphs and reads as a
  // collision with them, which is not what "attack the loose puck" means.
  routes: [
    { from: D_INSIDE_W, to: { at: DOT, dx: 1.8, dy: -8 }, kind: 'skate' },
    { from: D_WALL_D,   to: { at: DOT, dx: 5.5, dy: 8 },  kind: 'skate' },
  ],
};

const ozoneAlignment = {
  id: 'faceoff-ozone-alignment',
  title: 'Offensive-zone draw alignment',
  owner: 'content/systems/faceoffs.md',
  half: true,
  width: 900,

  caption:
    'An offensive-zone draw, frozen before the drop, at the right-hand circle. Both defencemen are up' +
    ' at the points — the area just inside the blue line, not the line itself. The draw-side one is ' +
    'the shooter, with his feet already set and his stick already loaded; the far one holds the line ' +
    'as the safety against a counterattack. This is the common default and not a rule; every team’s ' +
    'alignment differs, so ask what yours runs.',

  describe:
    'The attacking half of the rink, the opposition net at the right, the draw at the right-hand ' +
    'end-zone circle. Five own players: the centre in the dot on the blue-line side of it; the ' +
    'boards-side winger level with the dot at the outer hash marks, close to the wall; the ' +
    'inside winger level with the dot at the inner hash marks; the strong-side defenceman at the ' +
    'point on the draw side, just inside the blue line; the weak-side defenceman at the far ' +
    'point. Two ' +
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
  title: 'Neutral-zone draw alignment',
  owner: 'content/systems/faceoffs.md',
  // Full sheet: the shape only makes sense if you can see how far back the
  // defencemen are, and their reference point is the far blue line.
  half: false,
  width: 980,

  caption:
    'A neutral-zone alignment, drawn at centre ice so the whole sheet is visible; you attack to the ' +
    'right. Both wingers are wide in their own lanes, level with or just behind the dot, and both ' +
    'defencemen are back toward their own blue line, one either side of the middle. That depth is the' +
    ' argument for taking risks here: a lost neutral-zone draw costs you almost nothing so long as ' +
    'your defencemen are already gapped up to meet the rush. A coaching default rather than a rule, ' +
    'and every team’s differs.',

  describe:
    'The full sheet, your own net at the left, attacking to the right. The draw is at the centre ' +
    'dot. Five own players: the centre in the dot on his own side of it; the two wingers wide in ' +
    'their lanes, one either side of the middle and well outside the centre circle, level with ' +
    'or a stride behind the dot; the two ' +
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
    // still 12.5 ft off the boards at y ±42.5; a stride behind is 2 ft.
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
  title: 'Draw with the goalie pulled',
  owner: 'content/systems/faceoffs.md',
  // Full sheet, unlike the other end-zone diagrams. The whole subject of this one
  // is a goaltender who is not there, and on the attacking half alone his absence
  // is invisible — the picture would be the offensive-zone alignment plus one
  // skater, and the caption would be carrying the entire claim on its own.
  half: false,
  width: 980,

  caption:
    'An offensive-zone draw with your own goaltender pulled for an extra attacker: your own net, at ' +
    'the far end of the picture, is empty. The extra attacker is drawn at the net front; the high ' +
    'slot is his other usual place, and both defencemen are at the points. The centre is under ' +
    'maximum pressure to win it back cleanly, because there is no safe outlet and no recovery from a ' +
    'loss. A goaltender may not take part in a faceoff in any case: the NHL and IIHF books both say ' +
    'so in the same words, at Rule 76.1. The alignment is a default rather than a rule, so ask what ' +
    'your team runs with six skaters out.',

  describe:
    'The full sheet, attacking to the right, the draw at the right-hand end-zone circle in the ' +
    'attacking zone. Your own net, at the left, has no goaltender in it. Six own skaters: the ' +
    'centre in the dot on the blue-line side; the boards-side winger at the outer hash marks; the ' +
    'inside winger at the inner hash marks; the extra attacker at the net front, just outside the ' +
    'crease and off to the draw side; and both defencemen at the points, just inside the ' +
    'attacking blue line. Two opposition players are drawn, the opposing centre in the dot and ' +
    'their goaltender in the crease. No routes: this is a still shape at the moment before the drop.',

  players: [
    { id: 'C',  pos: 'F', at: A_CENTRE },
    { id: 'W',  pos: 'F', at: A_BOARDS_W },
    { id: 'W',  pos: 'F', at: A_INSIDE_W },
    // "The extra attacker usually goes to the net front or the high slot." Net
    // front, offset off the middle so the glyph clears the goaltender's — a sixth
    // attacker standing on the goalie is not what "net front" means.
    { id: 'F',  pos: 'F', at: { at: 'net-front', dx: -4, dy: 4.5 }, label: 'extra attacker' },
    // "Both defencemen are at the points."
    { id: 'D',  pos: 'D', at: 'point:right' },
    { id: 'D',  pos: 'D', at: 'point:left' },
    { id: 'C',  pos: 'F', team: 'opp', at: D_CENTRE },
    { id: 'G',  pos: 'G', team: 'opp', at: 'crease' },
  ],
};

// ---------------------------------------------------------------------------
// WHERE THE DRAW GOES — "What sends the draw to which spot".
//
// THE RENDERER HAS NO POINT-MARKER PRIMITIVE, and this section is entirely about
// points. The only two ways to mark a spot are a player glyph, which claims a
// player who is not there, and a `zones` entry, whose label is written at the
// polygon's VERTEX MEAN. The corpus already settled this: `offside-faceoff-location`
// in rules_primer.mjs marks two draw spots with small boxes, and records why that
// is honest — "a marked box is not a painted line: the faceoff spots are already
// drawn on the ice by the renderer, and these boxes only say which one the rule
// sends you to." Same construction here, and for the same reason.
//
// EVERY BOX IS DELIBERATELY ASYMMETRIC ABOUT ITS DOT. The label lands at the
// vertex mean with no collision handling, so a box centred on its spot writes its
// own label over the spot it is pointing at. Each box below puts its dot a couple
// of feet inside one edge, which pushes the mean — and therefore the text — clear.
//
// NO SKATERS AND NO PUCK. The four boxes are four DIFFERENT stoppages, not one
// play. A puck would anchor the picture to whichever one it sat nearest, and a
// skater would say a particular player was heading for a particular spot. The
// section's own instruction — start skating to the spot before the whistle
// finishes — is carried by the caption instead, because the picture cannot say it
// four times at once.
//
// TWO GOALTENDERS WERE TRIED HERE AND REMOVED, and the reason is worth recording
// because it is a property of the notation rather than of this diagram. A full
// sheet with four boxes on it is perfectly symmetrical, so the reader cannot tell
// "your own end" from "the end you are attacking" — and three of the four labels
// need that. A goaltender looked like the fix. It is not: the glyph is a bare
// letter with NO TEAM VARIANT, and `rink.mjs` says why in terms — "which net a
// goaltender is standing in settles whose they are." In this picture nothing
// settles which net is whose, so two identical Gs answer the question with the
// question. Orientation is therefore the caption's job here, as it is in every
// full-sheet diagram in the corpus.
// ---------------------------------------------------------------------------

// Our own end is at the LEFT of a full sheet (negative x), the end we attack at
// the right. ':far' mirrors x; 'faceoff-dot' is sided in y, so the middle token is
// the side and the last is the end.
const OUR_DOT   = 'faceoff-dot:right:far';   // (-69, 22)
const THEIR_DOT = 'faceoff-dot:left';        // (69, -22)
const NZ_DOT    = 'neutral-dot:right';       // (20, 22) — outside THEIR blue line

const whereTheDrawGoes = {
  id: 'faceoff-where-the-draw-goes',
  owner: 'content/systems/faceoffs.md',
  title: 'Where the draw goes',
  half: false,
  width: 1100,

  caption:
    'Four common stoppages and the faceoff spot each one sends the draw to, drawn on one sheet — four' +
    ' separate situations, not one play. Your own end is at the left, the end you are attacking at ' +
    'the right. Marked at centre ice: the start of every period, and every draw after a goal. Marked ' +
    'in your own end: an icing you caused, or a penalty you took. One box is drawn round one of the ' +
    'two spots there because the rule names the END rather than the dot — under the NHL and the IIHF ' +
    'the attacking team chooses which of the two, while USA Hockey gives no choice of dot at all and ' +
    'Hockey Canada ' +
    // ⚠️ THIS SAID "only if YOU tell the referee", in a caption whose own framing is
    // "an icing you caused, or a penalty you took". HC 6.4(b) gives the choice to the
    // "attacking (non-offending) team" (hc.txt:4857), so in the situation DRAWN it belongs
    // to the reader's OPPONENTS -- and so does the duty to declare it. The identical
    // inversion was found and fixed in `faceoff-strong-side-dot` and in three layers of
    // faceoffs.md IN THIS SAME ROUND, and left standing here. The clause immediately above
    // already said "the attacking team chooses" for the NHL and IIHF, so the caption also
    // contradicted itself.
    'gives it in Junior and Senior divisions only, and gives it to the attacking team — your ' +
    'opponents, in the situation drawn here — who lose it unless they tell the referee before the ' +
    'line change procedure starts. Marked outside the blue line you were attacking: an offside where ' +
    'the puck was carried over. A puck SHOT or PASSED over the line offside goes back to the zone the' +
    ' puck came from instead, which can be your own end. Marked in the end you are attacking: a ' +
    'goalie freeze, or any other stoppage between the end-zone dots and the end boards, which under ' +
    'the NHL and the IIHF draws at the spot on the side it happened — drawn here on the lower side. ' +
    'USA Hockey answers that one differently, taking the nearest spot only where its own last-play ' +
    'face-off applies, and sending a stoppage the attacking team caused in the attacking zone out to ' +
    'the neutral zone instead. These four are the common ones and not the whole rule, and the boxes ' +
    'are markers rather than anything painted on the ice.',

  describe:
    'The full sheet, your own net at the left and the net you are attacking at the right. No ' +
    'players and no puck are drawn. Four spots are marked with boxes and labelled. One is the ' +
    'centre dot, labelled "after a goal". One is the upper end-zone faceoff spot in your own end, ' +
    'labelled "icing or penalty". One is the upper neutral-zone dot just outside the blue line ' +
    'you were attacking, labelled "carried offside". One is the lower end-zone faceoff spot in ' +
    'the end you are attacking, labelled "goalie freeze". Each label sits a few feet to one side ' +
    'of the spot it marks rather than on top of it.',

  zones: [
    // CENTRE ICE. Box 18 x 18, with the dot 1 ft inside its top edge, so the mean —
    // and the label — falls 8 ft below the dot and inside the centre circle.
    {
      points: [
        { at: 'centre-ice', dx: -9, dy: -17 },
        { at: 'centre-ice', dx: 9, dy: -17 },
        { at: 'centre-ice', dx: 9, dy: 1 },
        { at: 'centre-ice', dx: -9, dy: 1 },
      ],
      label: 'after a goal',
    },
    // YOUR OWN END. The rule names the end, not the dot, so one of the two is boxed
    // as a concrete instance and the caption carries who picks. Label pushed 7 ft
    // toward the middle of the ice, where it crosses only the faceoff circle and
    // not the net.
    {
      points: [
        { at: OUR_DOT, dx: -9, dy: 2 },
        { at: OUR_DOT, dx: 9, dy: 2 },
        { at: OUR_DOT, dx: 9, dy: -16 },
        { at: OUR_DOT, dx: -9, dy: -16 },
      ],
      label: 'icing or penalty',
    },
    // OUTSIDE THE BLUE LINE YOU WERE ATTACKING. `neutral-dot` sits 5 ft outside the
    // blue line, in the neutral zone, which is where Rule 83.6 puts a carried-in
    // offside. Label 7 ft toward the middle again.
    {
      points: [
        { at: NZ_DOT, dx: -6, dy: 2 },
        { at: NZ_DOT, dx: 6, dy: 2 },
        { at: NZ_DOT, dx: 6, dy: -16 },
        { at: NZ_DOT, dx: -6, dy: -16 },
      ],
      label: 'carried offside',
    },
    // THE END YOU ARE ATTACKING, lower side. Mirrored: the dot sits 2 ft inside the
    // BOTTOM edge so the label is pushed up toward the middle rather than into the
    // boards.
    {
      points: [
        { at: THEIR_DOT, dx: -9, dy: -2 },
        { at: THEIR_DOT, dx: 9, dy: -2 },
        { at: THEIR_DOT, dx: 9, dy: 16 },
        { at: THEIR_DOT, dx: -9, dy: 16 },
      ],
      label: 'goalie freeze',
    },
  ],
};

// ---------------------------------------------------------------------------
// STRONG SIDE — "Handedness and which side you're strong on".
//
// THE SAME CENTRE IS DRAWN TWICE, once at each circle in his own end, and that is
// the whole construction. A backward pull on the backhand goes to a fixed side of
// the PLAYER, and he faces his opponents' end at both circles — so the identical
// motion carries the puck to the boards at one circle and into the middle at the
// other. Both routes below therefore have the SAME displacement, (5.8, 11) ft from
// the centre's own position, and if one is ever changed the other must change with
// it or the picture stops making its point.
//
// HANDEDNESS IS NOT NAMED, deliberately. The section states the coaching mapping —
// right shot on the right side — and then flags that its sources "do not spell out
// the reference frame", offering instead a self-test that depends on nobody's
// convention: your strong side is the circle where your natural backward pull sends
// the puck toward the boards. That self-test is what is drawn, so the picture does
// not need the mapping and does not assert it.
//
// The pull is drawn with the key's PASSING symbol — a dashed line and an arrowhead
// — which is this corpus's mark for a puck travelling without a stick on it. It is
// not a shot and it is not a player skating.
// ---------------------------------------------------------------------------

// The same displacement from each dot: back toward his own goal line and to the
// same side of his body. 4 ft of "back" and 16 ft of "across".
//
// ⚠️ THESE WERE 5.8 AND 11, AND THE PICTURE DID NOT DELIVER EITHER CLAIM. At that
// size both arrows finished INSIDE their own faceoff circle — 14.9 ft from the dot
// against the circle's 15 — so the one labelled "pulls to the boards" stopped 8 ft
// short of the boards and the one labelled "pulls to the middle" never left its
// circle. Found by rendering it and looking; the arithmetic had been checked and
// was correct about the thing it checked, which was that the two displacements were
// equal. At 4 and 16 both tips are 18 ft from their dot, so both are outside the
// circle: the upper finishes 4 ft off the dasher, and the lower in the slot in
// front of the net and 10.6 ft clear of the goaltender.
const PULL_DX = 4;
const PULL_DY = 16;

const STRONG_C = { at: DOT, dx: STICK };                          // (73.2, 22)
const WEAK_C   = { at: 'faceoff-dot:left', dx: STICK };           // (73.2, -22)

const strongSideDot = {
  id: 'faceoff-strong-side-dot',
  owner: 'content/systems/faceoffs.md',
  title: 'Your strong-side circle',
  half: true,
  width: 900,

  caption:
    'Which of the two circles in your own end is your strong side. The same centre is drawn twice, ' +
    'once at each circle, making the same motion both times: a backward pull on the backhand, which ' +
    'goes to a fixed side of your own body and therefore to the same side of the ice at both circles.' +
    ' At one circle that carries the puck toward the boards, the safest place it can go; at the other' +
    ' the identical motion carries it toward the middle, and a defensive-zone draw won into the slot ' +
    'is barely better than a loss. That is the self-test: your strong side is the circle where your ' +
    'natural backward pull sends the puck toward the boards. Coaching sources state it as a ' +
    'handedness rule instead, but they do not spell out the reference frame they mean, so no ' +
    'handedness is drawn here and none should be read into it. It is also what makes a choice of dot ' +
    'worth more than it looks — and only some books give one: the NHL and the IIHF to the team that ' +
    'did not cause the stoppage, USA Hockey none at all, and Hockey Canada only after an icing or a ' +
    'time penalty, only in Junior and Senior divisions, and only to the attacking non-offending team,' +
    ' which loses it unless it tells the referee the dot it wants before the line change procedure ' +
    'starts (Rule 6.4(b)).',

  describe:
    'The defending half of the rink, your own net and goaltender at the right, both end-zone ' +
    'circles visible. The same centre is drawn at both dots, each time on the goal-line side of ' +
    'the spot with an opposing centre facing him on the far side of it. From each of the two own ' +
    'centres a dashed line with an arrowhead runs back and across at the same angle, showing the ' +
    'puck pulled backwards. From the upper circle it finishes out toward the side boards; from ' +
    'the lower circle the identical line finishes in open ice toward the middle, in front of the ' +
    'net. No other skaters are drawn.',

  players: [
    { id: 'C', pos: 'F', at: STRONG_C, label: 'pulls to the boards' },
    { id: 'C', pos: 'F', at: WEAK_C,   label: 'pulls to the middle' },
    { id: 'C', pos: 'F', team: 'opp', at: { at: DOT, dx: -STICK } },
    { id: 'C', pos: 'F', team: 'opp', at: { at: 'faceoff-dot:left', dx: -STICK } },
    { id: 'G', pos: 'G', at: D_GOALIE },
  ],

  // Not numbered: neither pull comes before the other. They are one motion drawn at
  // two places.
  //
  // The upper route finishes at (77.2, 38), which at that x is 4 ft short of the
  // dasher — unmistakably outboard, and 18 ft from its dot, so outside the 15 ft
  // circle. The lower finishes at the identical offset from its own dot, (77.2, -6),
  // which is in the slot in front of the net: 10.6 ft from the goaltender's glyph,
  // which is close enough to read as "toward the net" and far enough not to read as
  // a pass to him.
  routes: [
    { from: STRONG_C, to: { at: DOT, dx: STICK + PULL_DX, dy: PULL_DY }, kind: 'pass' },
    { from: WEAK_C,   to: { at: 'faceoff-dot:left', dx: STICK + PULL_DX, dy: PULL_DY }, kind: 'pass' },
  ],
};

// ---------------------------------------------------------------------------
// TWO OFFENSIVE-ZONE SET PLAYS — "Set Plays / Offensive-zone plays".
//
// Drawn as a PAIR, because the section defines the second by what it fixes in the
// first: the winger walk-out is "better than the D one-timer against a team that
// immediately pressures the point, because you're attacking the space they
// vacated". One picture cannot hold two different point-pressure states.
//
// THE INSIDE WINGER IS NOT DRAWN ON THE HASH MARKS IN THE ONE-TIMER, and this is
// the one thing in the pair that had to be decided rather than measured. Drawn at
// his alignment position, (63.31, 5.03), he sits about 2 ft from the line a
// strong-side point shot takes to the net — that is not a drawing artefact, it is
// the geometry of the play, and it is the section's own stated weakness of it:
// "the inside winger's shooting lane needs to be cleared by someone." A picture
// cannot show a lane being cleared and a shot going down it at the same instant.
// So these are plays drawn a beat AFTER the drop — the alignment before the drop is
// `faceoff-ozone-alignment` beside them — the winger is drawn already out of the
// lane, and the caption says so rather than the picture pretending to.
//
// WHO clears it is deliberately not drawn. The section says "usually the net-front
// player stepping across", and the default five-player alignment it describes has
// nobody at the net front. Drawing a step-across would have authored the answer.
//
// NEITHER PLAY IS NUMBERED. Both were, and the badges are set a fixed distance
// along each route from its start, so on the one-timer the shot's badge landed
// beside the pull-back's arrowhead at the same defenceman — two numbers 4 ft apart,
// on different routes, at the busiest point in the picture. The notation already
// carries the order: you cannot shoot the puck before it reaches you.
// ---------------------------------------------------------------------------

const OT_WINGER = { at: DOT, dx: -3, dy: -28 };        // (66, -6) — already clear of
                                                        // the shooting lane
const OT_SHOOTER = 'point:right';                       // (25, 20)

const ozoneDOneTimer = {
  id: 'faceoff-ozone-d-one-timer',
  owner: 'content/systems/faceoffs.md',
  title: 'The D one-timer',
  half: true,
  width: 900,

  caption:
    'The D one-timer off an offensive-zone draw, a beat after the puck is dropped: the centre pulls ' +
    'it straight back to the strong-side defenceman at the point, who shoots first time. The shot’s ' +
    'line to the net runs straight through the inner hash marks, where the inside winger stands for ' +
    'the draw, and he is drawn here already out of it; who does the clearing is not drawn at all, ' +
    'because this five-player alignment has nobody at the net front. All of it is a coaching choice ' +
    'and not a rule of hockey — find out what your team runs, and what the call is, before your first' +
    ' shift.',

  describe:
    'The attacking half of the rink, the opposition net and goaltender at the right, the draw at ' +
    'the right-hand end-zone circle. Five own players: the centre in the dot on the blue-line ' +
    'side; the boards-side winger at the outer hash marks; the inside winger below the dot line ' +
    'and off to one side of the middle, clear of the shooting lane; and both defencemen at the ' +
    'points just inside the blue line. The opposing centre is on the far side of the dot, and ' +
    'their goaltender is in the crease. Two routes. A dashed line runs from the centre in the ' +
    'dot back up the ice to the strong-side defenceman at the near point, stopping short of him. ' +
    'A double line — a shot — runs from that defenceman down to the front of the net, passing ' +
    'about eleven feet clear of the inside winger. No route is drawn for any other player.',

  players: [
    { id: 'C', pos: 'F', at: A_CENTRE },
    { id: 'W', pos: 'F', at: A_BOARDS_W },
    { id: 'W', pos: 'F', at: OT_WINGER, label: 'clear of the lane' },
    { id: 'D', pos: 'D', at: OT_SHOOTER,   label: 'feet already set' },
    { id: 'D', pos: 'D', at: 'point:left', label: 'the safety' },
    { id: 'C', pos: 'F', team: 'opp', at: D_CENTRE },
    { id: 'G', pos: 'G', team: 'opp', at: D_GOALIE },
  ],

  // THE PULL-BACK stops 5 ft short of the defenceman's anchor rather than on it, so
  // the arrowhead sits beside his triangle and not inside it.
  //
  // THE SHOT runs (25, 20) to (77, 1). Its line passes 10.6 ft from the winger's
  // anchor at (66, -6) — 7 ft of clear ice outside his drawn ink — which is how the
  // picture says the lane is open. It finishes 9 ft from the goaltender's glyph: a
  // shot ending at the goaltender is what a shot is, and THE ARRIVAL INVARIANT in
  // scripts/lib/rink.mjs excludes puck routes from both of its forms for exactly
  // that reason — but at (79, 1) the drawn arrowhead TOUCHED the letter, which is a
  // different complaint from the invariant's and only visible in a render.
  routes: [
    { from: A_CENTRE,   to: { at: OT_SHOOTER, dx: 5, dy: 0.25 }, kind: 'pass' },
    { from: OT_SHOOTER, to: { at: 'net-front', dx: -7, dy: 1 }, kind: 'shot' },
  ],
};

const ozoneWingerWalkout = {
  id: 'faceoff-ozone-winger-walkout',
  owner: 'content/systems/faceoffs.md',
  title: 'The winger walk-out',
  half: true,
  width: 900,

  caption:
    'The winger walk-out off an offensive-zone draw: instead of going back to the point, the centre ' +
    'pulls the puck to the inside winger standing in the circle, who takes a stride toward the middle' +
    ' of the ice and then either shoots or feeds the slot. Which of those two he does is not drawn, ' +
    'because the section gives both and the walk-out itself is the play; the picture stops where the ' +
    'choice begins. Both defencemen stay at the points, one of them as the safety against a ' +
    'counterattack. Every part of this is a coaching choice rather than a rule of hockey, and which ' +
    'play is on is a call rather than an individual read — ask what your team’s are.',

  describe:
    'The attacking half of the rink, the opposition net and goaltender at the right, the draw at ' +
    'the right-hand end-zone circle, and the same five own players as the offensive-zone ' +
    'alignment: the centre in the dot on the blue-line side, the boards-side winger at the outer ' +
    'hash marks, the inside winger at the inner hash marks, and both defencemen at the points. ' +
    'The opposing centre is on the far side of the dot, and their goaltender is in the crease. ' +
    'Two numbered routes. First, a dashed line runs from the centre in the dot down to the ' +
    'inside winger, stopping about six feet short of him. Second, a plain line with an ' +
    'arrowhead takes that winger about nine feet toward the middle of the ice, finishing level ' +
    'with the middle. Neither defenceman has a route: they hold the points, and nothing is drawn ' +
    'going to the net.',

  numbered: true,

  players: [
    { id: 'C', pos: 'F', at: A_CENTRE },
    { id: 'W', pos: 'F', at: A_BOARDS_W },
    { id: 'W', pos: 'F', at: A_INSIDE_W, label: 'walks out' },
    { id: 'D', pos: 'D', at: 'point:right' },
    { id: 'D', pos: 'D', at: 'point:left', label: 'the safety' },
    { id: 'C', pos: 'F', team: 'opp', at: D_CENTRE },
    { id: 'G', pos: 'G', team: 'opp', at: D_GOALIE },
  ],

  // THE PULL-BACK stops 6 ft short of the winger's anchor, and both ends of that
  // number were set by looking at a render rather than by arithmetic.
  //
  // At 5 ft the arrowhead was drawn TOUCHING the top of his circle: the head is
  // 3.15 ft long and the glyph 2.9 ft in radius, so five feet of clearance from an
  // anchor is not five feet of clearance from what is drawn.
  //
  // At 8 ft it cleared, and then failed the other way: only 3.4 ft of line survived
  // the glyph and the head, which draws as ONE dash and a head. That is above
  // `playSvg`'s short-head threshold — which fires below a single dash — so nothing
  // warned, but a dashed route reduced to one dash is a `pass` doing an impression
  // of a `skate`, and `skate` is a symbol the same key publishes. It would have read
  // as the centre skating down to his winger. At 6 ft, 5.4 ft of line survives: two
  // dashes, and the head is still 2.7 ft clear of the winger's ink.
  //
  // THE WALK-OUT finishes at (69, -2), which is the high-slot line: 9 ft, or about a
  // stride and a half. A true single stride was tried at 7 ft and read as a stub. It
  // starts on the winger's own glyph rather than where the pull-back ends, because
  // `check-arrivals.mjs` infers whose route a route is from the player it starts on
  // and a route beginning in empty ice has no owner to infer.
  //
  // Only two routes, so the two numbered badges are 13 ft apart. A third — the shot
  // or the feed — was drawn and removed: the section gives both finishes, so drawing
  // one authors the choice, and the two badges landed within a few feet of each
  // other at the winger.
  routes: [
    { from: A_CENTRE,   to: { at: DOT, dx: -5.4, dy: -11 }, kind: 'pass' },
    { from: A_INSIDE_W, to: { at: 'high-slot', dy: -2 }, kind: 'skate' },
  ],
};

export default [
  dzoneAlignment,
  // Immediately after its twin: the pair only teaches anything read together.
  dzoneAlignmentOtherCircle,
  dzoneCleanLoss,
  dzoneTieUp,
  ozoneAlignment,
  neutralZoneAlignment,
  goaliePulled,
  whereTheDrawGoes,
  strongSideDot,
  ozoneDOneTimer,
  ozoneWingerWalkout,
];
