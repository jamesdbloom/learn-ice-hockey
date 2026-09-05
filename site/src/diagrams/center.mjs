/**
 * Diagrams for content/positions/center.md.
 *
 * ⚠️ THIS DOCUMENT ALREADY OWNS THREE DIAGRAMS THAT DO NOT LIVE HERE, AND THIS FILE
 * DID NOT EXIST BEFORE. `centre-low-zone-collapse`, `centre-swing-low` and
 * `centre-backcheck-middle-lane` are all `owner: content/positions/center.md` and sit in
 * `positions.mjs`, beside the other three position documents' specs. Do not move them and
 * do not add a second copy of any of them — `grep -rn "positions/center.md'"
 * site/src/diagrams/*.mjs` returns both files, deliberately, exactly as it does for
 * `switching_positions.md`. The split is the same one that file records: the shared
 * position module holds the specs that were written when the four position documents were
 * diagrammed together, and a per-document module holds what was added afterwards.
 *
 * The owning SECTION is the source of truth for each spec. Every player and every route
 * below is one its own section's prose places, and where that prose hedges — "a coaching
 * choice, not a law", "coaching consensus rather than a counted ranking", "no study … was
 * found for this document" — the caption carries the hedge in the same direction and no
 * further. A caption more confident than its section is the ordinary failure; a caption
 * more hedged than its section is the mirror of it and just as wrong.
 *
 * ⚠️ WHAT IS DELIBERATELY NOT DRAWN, AND WHY — because the next author's first instinct
 * will be to fill these gaps, and most of them are already filled somewhere else.
 * center.md is a position document, so nearly every situation in it is ALSO described by
 * a systems document that owns the system. Borrowing beats duplicating, and the rule the
 * position modules already run on is that an overlap is drawn ONCE, under the document
 * that owns the claim:
 *
 *   - Defensive Zone: Carrying the Puck — Free Space is already drawn. It is a stated
 *     co-owner of `centre-swing-low` (positions.mjs), whose second route is that
 *     section's "carry up the middle if the lane is clearly open" verbatim.
 *   - Defensive Zone: Pressuring an Opponent with the Puck is `centre-low-zone-collapse`.
 *   - Rim and reverse are `winger-dz-rim` and `winger-dz-reverse` (winger.md), drawn as a
 *     pair from the wall. Diagram 1 below therefore names both plays and draws NEITHER —
 *     what it draws is the move the centre's own section puts first and no picture in the
 *     corpus makes, which is getting OUT of the middle before playing the puck at all.
 *   - Neutral Zone: Pressuring an Opponent with the Puck is `nz-1-2-2-containment`
 *     (neutral_zone_systems.md), which draws the same containment job — the lone forward
 *     taking the middle away and showing the carrier one side — under its owner.
 *   - Offensive Zone: Pressuring an Opponent with the Puck is `forecheck-212`
 *     (forechecking_systems.md), and center.md itself sends the reader there.
 *   - Offensive Zone: Without the Puck — Getting Open in the Slot, and its crease
 *     subsection, are `oz-net-front-screen` (offensive_zone_play.md),
 *     `screen-the-goalie-sightline` (playing_without_the_puck.md) and `the-goalmouth`
 *     (rink_map_and_glossary.md). The first of those already carries the Rule 69 clauses.
 *   - Offensive Zone: Carrying the Puck — Under Pressure is `oz-behind-the-net`
 *     (offensive_zone_play.md), whose own caption records that the wrap-around is
 *     deliberately not drawn there. That is its owner's call and not this file's to
 *     reverse.
 *   - Power Play and Penalty Kill are `pp-131`, `pp-umbrella`, `pp-overload`, `pk-box`,
 *     `pk-diamond` and `pk-wedge-plus-1` (special_teams.md). `pp-131`'s caption already
 *     says the bumper is most often the centre and that this is team-dependent.
 *   - Icing is `icing-gaining-the-line` and `icing-the-race-and-the-dot` (rules_primer.md).
 *   - Faceoff alignment is `faceoff-dzone-alignment` and its four siblings (faceoffs.md),
 *     which center.md names as the authority for the five-player alignments.
 *   - Line Changes is not spatial: it is bench timing, shift length and four books'
 *     substitution rules. A rink cannot draw any of it.
 *
 * F1/F2/F3 DO NOT APPEAR IN THIS FILE, for the reason positions.mjs states: the document
 * is emphatic that they are roles set by order of arrival rather than people. Every glyph
 * is labelled with the positional vocabulary center.md itself uses — C, RW, LW, D, G.
 *
 * ORIENTATION. The four half-sheet specs put your own or the attacked net at the RIGHT,
 * which is the frame every center.md diagram in positions.mjs already uses. The one
 * full-sheet spec follows neutral_zone_systems.mjs instead: your own net at the far left,
 * the end you attack at +x. Both conventions are stated in each caption in words, because
 * a listener hearing the caption aloud has no picture to take the orientation from.
 *
 * +y is called "right" by the coordinate table, which is a name for the top of the
 * drawing and not a skater's right hand. Nothing below claims anyone's handedness. The
 * puck is put on the +y side throughout so that "strong side" means one thing.
 */

// ---------------------------------------------------------------------------
// 1 · Out of the middle before you play the puck
//     owner: content/positions/center.md
//            — "Defensive Zone: Carrying the Puck — Under Pressure"
//
// The section's order of operations is the whole lesson and it is unusual: "Get to a safe
// position and quickly move the puck", "If you are under pressure in the middle, move to
// the boards or behind the net FIRST, then distribute." So the picture is a route out of
// the middle with a pass hanging off the end of it, not a pass out of the middle.
//
// The rim and the reverse are named in the caption and drawn nowhere. That is not
// timidity: winger.md owns both as a matched pair (`winger-dz-rim`, `winger-dz-reverse`),
// drawn from the wall with a checker either sealing or over-committing, and a third and
// fourth copy of them here would be the duplication the position modules exist to avoid.
// What this file adds is the move that precedes them.
//
// NO DEFENCEMAN IS DRAWN, and the `describe` says so. Two were tried. Placed in the
// strong-side corner the outlet pass ran through the glyph — 0.64 ft from its anchor,
// i.e. straight over it; moved deep to (84, 34) it cleared by 8.9 ft but stood a
// defenceman in a corner the play never goes to. The section places nobody there, and
// inventing a fifth skater to decorate a picture is how a diagram comes to disagree with
// its prose.
// ---------------------------------------------------------------------------

// (70, 6) — "the middle of the ice in your defensive zone", between the circles and above
// the crease. Anchored on `high-slot` because that is the named position nearest the ice
// the section is warning about, NOT because the high slot is the subject here: this
// section is about carrying, and the high-slot COVERAGE job is diagram 1 of positions.mjs.
const C_IN_THE_MIDDLE = { at: 'high-slot', dx: 1, dy: 6 };

// (92, 7) — behind his own net and round to the strong side, which is where the carry
// finishes and where the outlet starts.
//
// ⚠️ CLEARANCE IS MEASURED ON THE DRAWN INK, NOT ON THE SPINE, AND THE MINIMUM IS TAKEN
// OVER THE WHOLE CURVE RATHER THAN OFF ONE SAMPLED k. A `carry` renders as a wave of
// amplitude 1.05 at stroke 0.7, so it lays ~1.4 ft of ink either side of the spine. With
// bow 4 the control point is (80.8, 10.5). Sampled at 0.005 across the whole curve, the
// closest the SPINE comes to the crease — which reaches y = 4 between x = 83 and x = 89 —
// is 3.80 ft, so the lower INK edge clears the paint by 2.40 ft. (A first version of this
// note quoted 2.85 from a single hand-worked k = 0.75; that sample is not the minimum,
// and a clearance stated in a comment has been wrong in this repository four times, three
// of them by measuring the wrong thing.) The route never crosses the goalmouth, which is
// the one line a puck in your own end must not travel, and that is the reason for the bow
// rather than aesthetics.
const BEHIND_HIS_NET = { at: 'behind-net', dx: -2, dy: 7 };

// The outlet starts 2 ft beyond the carry's arrowhead rather than on it. Sharing the
// point put a filled 3.15 ft arrowhead and the first dash of a pass in the same few
// square feet, which rendered as one blob and read as neither mark.
const OUTLET_FROM = { at: 'behind-net', dy: 7.5 };

const outOfTheMiddle = {
  id: 'centre-out-of-the-middle',
  title: 'Out of the middle first',
  owner: 'content/positions/center.md',
  half: true,
  width: 900,

  caption:
    'Your own defensive zone, your own net at the right, with the puck on the centre’s stick ' +
    'in the middle of the ice and two opponents closing through that middle. The instruction ' +
    'is not to beat them: it is to stop being there. Carry out of the middle to the safe ice ' +
    'behind your own net first and distribute from there — to the winger on the boards, which ' +
    'is the outlet drawn here, or by rimming the puck onward around the boards, or by ' +
    'reversing it back against the flow to a defenceman arriving behind you. A rim and a ' +
    'reverse are opposite plays and the read is which kind of pressure you have: a reverse ' +
    'beats a checker who has over-committed and skated past you, a rim beats one who is ' +
    'sealing you in. Getting the puck out of danger beats making a great play. That the ' +
    'middle of your own end is the most expensive place on the ice to lose it is coaching ' +
    'consensus, reasoned from shot danger and from how few seconds stand between the turnover ' +
    'and a shot — it is not a measured ranking, and no study ranking turnovers by where on the ' +
    'ice they happen was found for this document.',

  describe:
    'The defending half of the rink, your own net at the right. Two opposition forwards come ' +
    'down the middle of the zone from the left. Three of your own: the centre with the puck in ' +
    'the middle of the ice between the faceoff circles; the strong-side winger high on the ' +
    'boards; and the goaltender in the crease. Two routes. The first is the centre carrying the ' +
    'puck out of the middle and round behind his own net, curving above the crease rather than ' +
    'across the goalmouth. The second starts where that one finishes and is the outlet pass out ' +
    'to the winger on the boards, ending short of him. Neither a rim nor a reverse is drawn, ' +
    'and your defencemen are not drawn.',

  players: [
    { id: 'G',  pos: 'G', at: { at: 'crease', dx: 1 } },                                   // (87, 0)
    { id: 'C',  pos: 'F', at: C_IN_THE_MIDDLE, label: 'out of the middle first' },          // (70, 6)
    // "The boards are the strong-side winger's ice." dy -2 off the half-wall datum so the
    // circle's 3.275 ft of ink tops out at 39.775 against an inner boards ink edge of
    // 42.2 at this x — x = 71 is still on the STRAIGHT boards, since the corner arc starts
    // at |x| > 72, so 42.2 is the right edge to measure against and not a corner value.
    { id: 'RW', pos: 'F', at: { at: 'half-wall:right', dx: 2, dy: -2 } },                   // (71, 36.5)

    // The traffic. Two opponents through the middle, both up-ice of the centre, because
    // "don't try to carry through traffic" is the sentence being drawn. Both lie BEHIND
    // the carry's tip on its terminal tangent, so neither engages the arrival invariant.
    { id: 'F',  team: 'opp', pos: 'F', at: { at: 'top-of-circle:right', dx: 2, dy: -14 } }, // (56, 8)
    { id: 'F',  team: 'opp', pos: 'F', at: { at: 'top-of-circle:left', dx: 6, dy: 12 } },   // (60, -10)
  ],

  routes: [
    { from: C_IN_THE_MIDDLE, to: BEHIND_HIS_NET, kind: 'carry', bow: 4 },
    // Ends 6 ft short of the winger's glyph, the separation the position modules use so a
    // pass reads as arriving at a player rather than through him. Direction from
    // (94, 7.5) to (71, 36.5) is (-0.622, 0.784); 6 ft back along it is (74.73, 31.80),
    // which off the `half-wall:right` datum of (69, 38.5) is dx 5.73, dy -6.70. (dx 3.7
    // was written first and lands at (72.7, 31.8) — 5.00 ft from the glyph, not 6.00;
    // caught by measuring the resolved anchors rather than re-reading the comment.)
    // The route's nearest approach to the crease is 9.33 ft and to the boards 4.61 ft.
    { from: OUTLET_FROM, to: { at: 'half-wall:right', dx: 5.73, dy: -6.7 }, kind: 'pass' }, // (74.73, 31.80)
  ],

  // On his stick and clear of both his glyph (5.83 ft, against 3.275 of glyph ink plus
  // 1.1 of puck) and the carry's ink (6.2 ft below the spine at the same x).
  puck: { at: 'high-slot', dx: 4, dy: 1 },                                                  // (73, 1)
};

// ---------------------------------------------------------------------------
// 2 · Under pressure in the neutral zone: both answers go outside
//     owner: content/positions/center.md
//            — "Neutral Zone: Carrying the Puck — Under Pressure"
//
// FULL SHEET, for neutral_zone_systems.mjs's reason: a structure defined by depth across
// the middle third loses its meaning cropped to one half. Same orientation as that file —
// our own net at the far left, the end we attack at +x — so the two can be read together.
//
// The section gives exactly two plays and they have the same destination: "move the puck
// to a winger or chip it off the boards". Drawing both is the lesson, because a reader
// who takes only one of them away has learnt a play rather than the principle.
//
// ⚠️ THE CHIP STAYS INSIDE THE NEUTRAL ZONE. An earlier version put its tip at (27, 40),
// two feet past the attacking blue line — which is a dump-IN, a different play owned by
// zone_entries.md, and one that raises an offside question this section never mentions.
// The tip is now (3, 40), twenty-two feet short of the line.
//
// ⚠️⚠️ AND THE PASS RECEIVER WAS STANDING IN THE ATTACKING ZONE. RW was anchored at
// x = 26. `blue_line_x` is 25 and the painted band is 24.5 to 25.5, so his ANCHOR was half
// a foot past the far edge of the line and his glyph — a circle whose ink reaches 3.875 ft
// with the halo, 3.275 with the body outline alone — straddled the paint. He is the target
// of the drawn pass, so the picture showed a pass to a teammate already across the blue
// line while the puck was thirty feet back at x = -4. Two other things in this spec said
// otherwise and neither caught it: `describe` says "Two of your own forwards are wide, one
// in each wall lane", which places both in the NEUTRAL zone, and the caption makes a point
// of the OTHER route avoiding exactly this ("The chip is drawn finishing inside the
// neutral zone rather than across the line"). ⚠️ THE PICTURE WAS WHAT WAS WRONG. RW is now
// at (20, 34): body outline 1.225 ft clear of the band, halo 0.625 ft clear.
//
// ⚠️ AND THE TWO ROUTES FOUGHT EACH OTHER TWICE BEFORE THEY WORKED. Both outlets go to
// the strong side by construction, so from a point in the middle they leave in a narrow
// cone. The first layout ran the chip 0.71 ft from our own winger's anchor — straight
// through his glyph. The second cleared the winger and then ran the two dashed lines
// 2.74 ft apart twelve feet out from the centre, which at full-sheet scale is about
// fifteen pixels and reads as one thick line rather than two options. What resolves it is
// ANGLE, not clearance.
//
// ⚠️ MOVING RW OFF THE BLUE LINE ATE THAT ANGLE, AND THE CHIP HAD TO MOVE TOO. Pulling him
// back from x = 26 to x = 20 swings the pass's bearing from 46.8 degrees to 53.1, which
// against a chip to (8, 40) at 72.5 leaves only 19.3 degrees — 4.03 ft of separation at
// twelve feet, below the 5.32 this layout was built to hold. The chip's tip therefore
// moves from (8, 40) to (3, 40), a bearing of 79.6: 26.4 degrees of divergence and 5.49 ft
// at twelve feet, which is better than the state this replaces rather than merely equal to
// it. ⚠️ THE BRIEF THAT REPORTED THE BLUE-LINE DEFECT SAID "the bearing barely changes, so
// the 25.7 degree angular separation survives". IT DOES NOT SURVIVE, and moving one
// coordinate would have shipped a fix for one defect that caused another.
//
// ⚠️ THE PRICE IS A CLAIM THE CAPTION NO LONGER MAKES. The chip finishes at x = 3, six feet
// SHORT of the near checker at x = 9 rather than level with him, so the caption says "get
// it to the outside" and does NOT say "past the pressure" — which is also the section's own
// wording ("Keep it simple under pressure. Get the puck to the outside"), and the phrase
// was mine rather than its. A caption that had kept it would have been outclaiming its
// picture; the caption's "beside the pressure rather than past it" still holds, and holds
// with more room than before.
//
// Every number in this block was read off the resolved anchors, not off the source.
// ---------------------------------------------------------------------------

const C_NZ = { at: 'centre-ice', dx: -4, dy: 2 };        // (-4, 2)   — the middle of the neutral zone
const RW_WALL = { at: 'centre-ice', dx: 20, dy: 34 };    // (20, 34)  — wide, ~8.5 ft off the dasher
const LW_WALL = { at: 'centre-ice', dx: 12, dy: -33 };   // (12, -33)

const neutralZoneOutside = {
  id: 'centre-nz-get-it-to-the-outside',
  title: 'Get it to the outside',
  owner: 'content/positions/center.md',
  half: false,
  width: 1100,

  caption:
    'The middle of the neutral zone, your own net at the far left and the end you are ' +
    'attacking at the right, with the centre carrying and two opponents closing the middle in ' +
    'front of him. Both routes drawn finish on the outside, and that is the whole instruction: ' +
    'move the puck to a winger on the wall, or chip it off the boards. Neither is a surrender ' +
    '— quick decision-making is worth more than individual skill here, and simple is what you ' +
    'want under pressure. That the middle third is where odd-man rushes against you are made is ' +
    'coaching consensus rather than a tracked figure: no public data classifies an odd-man rush ' +
    'by the play that created it. The two routes are alternatives and only one of them happens; ' +
    'which one is on depends on whether the winger is actually open and on where the checker ' +
    'has his feet, and no still frame can tell you either. The chip is drawn finishing inside ' +
    'the neutral zone rather than across the line, because putting the puck in is a different ' +
    'play with a different question attached to it — and it is drawn going to the wall beside ' +
    'the pressure rather than past it, because getting the puck out of the middle is the point ' +
    'and beating a man with it is not.',

  describe:
    'The full sheet, your own net at the left, attacking to the right. Your centre has the ' +
    'puck just short of centre ice, in the middle lane. Two opposition forwards are ahead of ' +
    'him in the middle, closing. Two of your own forwards are wide, one in each wall lane. ' +
    'Both goaltenders are in their creases. Two routes, both starting on the centre and both ' +
    'alternatives rather than a sequence: a pass out to the wide forward on the near side, ' +
    'ending short of him, and a chip to the near boards, finishing at the wall inside the ' +
    'neutral zone and well short of the attacking blue line. Your defencemen and theirs are ' +
    'not drawn.',

  players: [
    { id: 'G',  pos: 'G', at: { at: 'crease::far', dx: 1 } },                    // (-85, 0)
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },           // (85, 0)

    { id: 'C',  pos: 'F', at: C_NZ, label: 'the middle is closing' },            // (-4, 2)
    // ⚠️ THESE TWO COMMENTS READ "(18, 33)" AND "(10, -33)" AND BOTH WERE STALE — the
    // constants above resolved to (26, 34) and (12, -33). The first one is the comment a
    // reviewer checking the blue-line question would have checked the coordinate against,
    // and it would have said the player was five feet clear when he was half a foot past.
    // A derived coordinate written beside an anchor is only worth having if it is re-derived
    // every time the anchor moves.
    { id: 'RW', pos: 'F', at: RW_WALL },                                         // (20, 34)
    { id: 'LW', pos: 'F', at: LW_WALL },                                         // (12, -33)

    // One checker square in front of him, thirteen feet up-ice, and one inside on the
    // weak side. Both ahead of the puck, because "pressured in the middle" is the
    // condition the section attaches every instruction in it to.
    { id: 'F',  team: 'opp', pos: 'F', at: { at: 'centre-ice', dx: 9, dy: 2 } },   // (9, 2)
    { id: 'F',  team: 'opp', pos: 'F', at: { at: 'centre-ice', dx: 5, dy: -10 } }, // (5, -10)
  ],

  routes: [
    // Ends 6 ft short of the winger: direction (0.5836, 0.8120) from (-4, 2) to (20, 34),
    // so the tip is (16.40, 29.20) — 8.6 ft short of the blue line, so the pass itself
    // stays in the neutral zone as well as its receiver. Its closest approach to the near
    // checker at (9, 2) is 10.40 ft and to the far one 15.0 ft.
    { from: C_NZ, to: { at: 'centre-ice', dx: 16.4, dy: 29.2 }, kind: 'pass' },
    // The chip, on a bearing 26.4 degrees off the pass so the two read as two options.
    // It clears our own winger by 17.81 ft, the near checker by 12.78 ft and the far one
    // by 15.0 ft. x = 3 is on the straight boards, so the inner ink edge is y = 42.2 and
    // the tip clears it by 2.2 ft; at y = 41 it would have been 1.2 ft, which is inside
    // the arrowhead's own half-width.
    { from: C_NZ, to: { at: 'centre-ice', dx: 3, dy: 40 }, kind: 'pass' },
  ],

  // Below him and behind him, and on the opposite side from both routes.
  //
  // ⚠️ IT WAS AT (-4, -3.5), DIRECTLY BELOW HIS ANCHOR, AND THE LABEL'S LEADER RAN THROUGH
  // IT. `placeLabels` draws a dashed leader from the player's anchor to the label box, and
  // 'the middle is closing' is 21 characters — 56 ft wide at the full-sheet type size — so
  // the placer exiled it to (-4.5, -18) and the leader ran (-4, 2) -> (-4.5, -19.2),
  // passing 0.13 ft from the puck's centre. Rendered, the leader terminated ON the puck
  // with no dash between the puck and the centre, so the label — which is an instruction
  // about the CENTRE — read as pointing at the puck.
  // Shortening the label does not fix it and makes it worse: the placer reserves a 7 x 8 ft
  // box round every player including the label's own, so no offset inside LEADER_MIN
  // (5.5 ft) is ever free and a leader is always drawn; a shorter label simply lands
  // nearer, straight down the same line. MOVING THE PUCK IS THE FIX.
  // (-7.5, -3) is 6.10 ft from the centre's anchor — 1.13 ft of clear ice past his 3.875 ft
  // of ink and the disc's own 1.1 — and 3.38 ft from the leader, which is 2.28 ft of white
  // once the disc and the leader's 0.18 stroke are counted. It is also the side away from
  // the pressure, which is where the section wants it.
  puck: { at: 'centre-ice', dx: -7.5, dy: -3 },                                  // (-7.5, -3)
};

// ---------------------------------------------------------------------------
// 3 · Arriving through the middle behind the puck
//     owner: content/positions/center.md
//            — "Neutral Zone: Without the Puck — Supporting the Rush Through the Middle"
//
// ⚠️ ITS NEAREST NEIGHBOUR IS `entry-three-lanes` (zone_entries.md) AND THE TWO ARE
// INVERSES, WHICH IS THE REASON BOTH EXIST. There the carrier is in the MIDDLE lane and
// the timing claim is about him — he wants the line half a stride to a full stride behind
// his wingers. Here the carrier is WIDE and the middle lane is the supporting centre's,
// which is the case center.md describes and the only one it describes. Nothing in this
// caption restates the entry-order claim that belongs to that document.
//
// ⚠️ NOTHING HERE SAYS ANYONE IS ONSIDE, and the caption says so out loud. The rule turns
// on where a skate is — both skates completely across, a trailing skate on the line, and
// two books of the four that require that skate to be TOUCHING — and a glyph has no
// skates. A picture that implied it had settled the question would be the worst kind of
// wrong, because offside is a whistle and the reader would have taken it from a drawing.
// ---------------------------------------------------------------------------

const C_MIDDLE_LANE = { at: 'blue-line', dx: -8, dy: 4 };    // (17, 4)
const RW_CARRIER = { at: 'blue-line', dx: -6, dy: 31 };      // (19, 31)

const arriveBehindThePuck = {
  id: 'centre-nz-arrive-behind-the-puck',
  title: 'Arriving behind the puck',
  owner: 'content/positions/center.md',
  half: true,
  width: 900,

  caption:
    'Entering the attacking zone through the middle without the puck, the net you are ' +
    'attacking at the right, drawn at the instant before the puck reaches the blue line. The ' +
    'winger is carrying wide and the centre is in the middle lane a stride further from the ' +
    'line than the puck is — level with it or slightly behind it, which is the position that ' +
    'lets the puck cross first while you keep skating. The temptation is the opposite one: ' +
    'give up speed in the middle to be certain of staying onside, and then the whole line ' +
    'arrives slowly, which is exactly the entry a defence stands up at the blue line. Nothing ' +
    'here says whether anybody is onside — a glyph has no skates, and that rule turns on where ' +
    'a skate is. And do all of it with your head up: the middle third is where open-ice ' +
    'contact happens, arriving at full speed through it is no reason to drop your eyes, and ' +
    'you cannot brace for a hit you cannot see. Which of the three carries, and how strictly ' +
    'the wide lanes are held, are coaching choices that vary a great deal.',

  describe:
    'The attacking half of the rink, the net being attacked at the right, with the attack ' +
    'coming from the left. Three of your own forwards: a winger wide on the near side with the ' +
    'puck, a stride short of the blue line; the centre in the middle lane, further from the ' +
    'line than the puck is; and the other winger wide on the far side. Two opposition ' +
    'defencemen stand just inside their blue line, one either side of the middle, and their ' +
    'goaltender is in the crease. Two routes, drawn as one instant rather than a sequence: the ' +
    'winger carrying the puck across the line on the near side, and the centre skating through ' +
    'the middle and across the line behind it. Neither reaches either defenceman.',

  players: [
    { id: 'C',  pos: 'F', at: C_MIDDLE_LANE, label: 'behind the puck, not slower' },  // (17, 4)
    { id: 'RW', pos: 'F', at: RW_CARRIER },                                           // (19, 31)
    { id: 'LW', pos: 'F', at: { at: 'blue-line', dx: -6, dy: -28 } },                 // (19, -28)

    // Their pair, inside their own line. Triangles because they are defencemen; shape
    // carries the position and fill carries the team, so these are solid triangles.
    { id: 'D',  team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 12, dy: 12 } },     // (37, 12)
    { id: 'D',  team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 14, dy: -12 } },    // (39, -12)
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },                // (85, 0)
  ],

  // Both bow 0, deliberately: the arrival arithmetic below is computed on the chord, and
  // a bow moves the terminal tangent away from it by up to tens of degrees. If either
  // route ever gains a bow, redo both clearances against `to - control`.
  routes: [
    // The carrier. Tip (33, 27); the near defenceman lies ahead of it at 15.5 ft and the
    // far one at 39.8 ft, both outside the 9 ft at which an arrowhead may not be drawn,
    // and the terminal tangent clears the near one laterally by 13.3 ft.
    { from: RW_CARRIER, to: { at: 'blue-line', dx: 8, dy: 27 }, kind: 'carry' },
    // The centre. Tip (30, 2); the two defencemen lie ahead of it at 12.2 and 16.6 ft,
    // and the tangent clears them laterally by 10.9 and 12.5 ft. The tip is deliberately
    // 3 ft SHORT of the carrier's in x: an arrow through the middle that finished ahead
    // of the puck would draw the one thing this section tells you not to do.
    { from: C_MIDDLE_LANE, to: { at: 'blue-line', dx: 5, dy: 2 }, kind: 'skate' },
  ],

  // (24.5, 25.5) — half a foot short of the line and on the carrier's stick, inside him.
  // The caption's "before the puck reaches the line" is checkable off this x, and it is
  // the only claim in the caption a coordinate can settle.
  // ⚠️ It was at (24, 27.5) and sat ON the carry: 1.99 ft from the route spine, against a
  // wave that lays 1.4 ft of ink either side and a puck glyph of radius 1.1, so the two
  // marks overlapped by half a foot. Now 3.78 ft off the spine — 1.28 ft of white — and
  // 7.78 ft from the winger's own glyph. A carry route is the SKATER's path and the puck
  // rides off to one side of it; drawing the puck on the line is drawing it under his feet.
  puck: { at: 'blue-line', dx: -0.5, dy: 25.5 },                                      // (24.5, 25.5)
};

// ---------------------------------------------------------------------------
// 4 · With the puck in the slot, and space
//     owner: content/positions/center.md
//            — "Offensive Zone: Carrying the Puck — Free Space"
//
// NO OPPOSITION SKATER IS DRAWN, and that is the section's own frame rather than a
// simplification: this is the free-space case, and `centre-swing-low` sets the same
// precedent for the same reason. The consequence is stated in the caption, because a
// picture with nobody in it will otherwise be read as a claim about how much time you
// have.
//
// Four routes off one player, unnumbered, on the pattern of `oz-half-wall-options`: this
// is a menu and not a sequence, only one of them happens, and numbering them would author
// an order the section does not give.
// ---------------------------------------------------------------------------

const C_SLOT = { at: 'slot', dx: -5, dy: 3 };   // (71, 3) — in the slot, above the crease

const slotOptions = {
  id: 'centre-oz-slot-options',
  title: 'Options from the slot',
  owner: 'content/positions/center.md',
  half: true,
  width: 900,

  caption:
    'The centre with the puck in the slot in the attacking zone, the net at the right, with ' +
    'space in front of him. This is the free-space case, so no defenders are drawn at all and ' +
    'the picture says nothing about how much time you really have. Four things are on at once ' +
    'and only one of them happens: the shot, a pass out to the winger on the half-wall, a pass ' +
    'to the winger in the far circle, or a pass back to the defenceman at the point. With space ' +
    'in front of you the first is the answer and the instruction is not to overthink it — on ' +
    'the coaching-consensus conversion ranges behind that, roughly ten to fifteen per cent from ' +
    'the slot against two to four from the perimeter, a slot shot is worth something like three ' +
    'to seven times a perimeter one, but the source names no dataset, so trust the gap rather ' +
    'than the decimals. The other three are what you do when the space closes. What no still ' +
    'frame can show is the thing that makes the slot work at all, which is that you were moving ' +
    'before the puck arrived: a stationary centre in the slot is easy to cover.',

  describe:
    'The attacking half of the rink, the net being attacked at the right, and no opposition ' +
    'skaters drawn — this is the free-space case. Four of your own: the centre with the puck in ' +
    'the slot between the faceoff circles; a winger on the near half-wall; a winger in the far ' +
    'faceoff circle; and a defenceman at the point near the blue line. The opposing goaltender ' +
    'is in the crease. Four routes, all starting on the centre and all alternatives — a shot at ' +
    'the net, and three passes, to the winger on the half-wall, to the winger in the far ' +
    'circle, and back to the defenceman at the point. Each pass ends short of the player it is ' +
    'aimed at.',

  players: [
    { id: 'C',  pos: 'F', at: C_SLOT, label: 'space in front — shoot' },      // (71, 3)
    { id: 'RW', pos: 'F', at: { at: 'half-wall:right', dy: -3 } },            // (69, 35.5)
    { id: 'LW', pos: 'F', at: { at: 'faceoff-dot:left', dx: 2, dy: 2 } },     // (71, -20)
    // A triangle, because he is a defenceman.
    //
    // ⚠️ THIS COMMENT USED TO READ "dy -6 off the sided `point` datum keeps the glyph off
    // the blue line's own 1 ft band rather than straddling it", AND IT MEASURED THE WRONG
    // AXIS AND GOT THE WRONG ANSWER. `dy` runs ACROSS the ice, along the line; the distance
    // from the line is `dx`. At dx 3 the anchor was x = 28, and a defenceman's triangle is
    // drawn apex toward +y with circumradius 3.6, so its base vertices sit 3.118 ft either
    // side in x, plus 0.4 of its own 0.8 stroke and 1.0 of its 2.0 halo. That is a body
    // spanning x 24.48 to 31.52 and a halo spanning 23.88 to 32.12, against a painted band
    // of 24.5 to 25.5 — THE GLYPH COVERED THE WHOLE BLUE LINE, which is exactly what the
    // comment claimed it did not. `rink.json`'s own `point` note already said a triangle
    // needs x of about 29 to clear.
    // dx 5 puts him at x = 30: body 0.982 ft clear of the band, halo 0.382 ft clear. He is
    // five feet inside the line, which is the area the corpus means by "the point" and what
    // offensive_zone_play.md asks for in words — "stay a stride inside the line, not on it".
    { id: 'D',  pos: 'D', at: { at: 'point:right', dx: 5, dy: -6 } },         // (30, 14)
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },        // (85, 0)
  ],

  routes: [
    // The shot. Ends at the net front rather than at the goal line, which is where every
    // other shot in the corpus finishes; a shot that ends on the goaltender is what a
    // shot IS, and puck routes are outside the arrival invariant in any case.
    { from: C_SLOT, to: { at: 'net-front', dx: -2, dy: -3 }, kind: 'shot' },     // (82, -3)
    // The three outlets, each stopped 6 ft short of its target.
    { from: C_SLOT, to: { at: 'half-wall:right', dx: 0.4, dy: -9 }, kind: 'pass' },   // (69.4, 29.5)
    { from: C_SLOT, to: { at: 'faceoff-dot:left', dx: 2, dy: 8 }, kind: 'pass' },     // (71, -14)
    // Re-derived after the defenceman moved to (30, 14): direction (-0.9659, 0.2591) from
    // (71, 3), so 6 ft short of him is (35.80, 12.45).
    { from: C_SLOT, to: { at: 'point:right', dx: 10.8, dy: -7.55 }, kind: 'pass' },   // (35.80, 12.45)
  ],

  // Four routes leave a 122-degree gap between the shot and the half-wall pass, and the
  // puck sits on its bisector: 5.83 ft from the glyph, 5.03 ft from the shot and 5.17 ft
  // from the nearest pass. Every other position tried was inside 4 ft of a line.
  puck: { at: 'slot', dy: 6 },                                                        // (76, 6)
};

// ---------------------------------------------------------------------------
// 5 · A loose puck in your own crease — it is the puck's position that decides
//     owner: content/positions/center.md
//            — "Handling the puck — catching it is free, holding it is not"
//
// ⚠️⚠️ THIS SPEC IS DELIBERATELY NOT IN THE EXPORT ARRAY, AND MUST NOT BE ADDED TO IT
// WITHOUT AN OWNER DECISION. `puck_handling.mjs` — written in the same round, by another
// agent, in a file neither of us could see the other writing — contains
// `the-puck-decides-not-you`, `owner: content/technique/puck_handling.md`. It is the same
// picture: your own net at the right, the goaltender in his crease, a loose puck inside
// the paint, a skater standing outside it, and the same lesson in the same words ("the
// test is not where you are — it is where the puck is"). Registering both would ship the
// corpus's most-guarded defect, a claim drawn twice under two owners, where a later
// correction reaches one copy and not the other.
//
// ⚠️ THE RECOMMENDATION IS TO DROP THIS ONE, not the other, and the reason is not
// politeness. That caption carries two things this one does not and cannot: that all four
// books exempt the GOALKEEPER, and that the crease is a VOLUME running to the top of the
// goal frame — which is the half of the rule a plan view is structurally unable to draw
// and the half a centre plucking a puck out of the air most needs. center.md can reference
// `the-puck-decides-not-you` by id instead of redrawing it, exactly as
// switching_positions.md references `centre-swing-low`; the renderer announces the owner
// aloud, so no listener hears one document's caption under another's name.
//
// It is left here rather than deleted because the decision is the owner's and reinstating
// it is one line. If it is reinstated, the OTHER copy has to go, and `puck_handling.mjs`
// is not this file's to edit.
//
// The one spatial fact in a section that is otherwise four books' rule text, and the one
// the section says is hardest to assemble: "it is the puck that has to be in the crease,
// not you." Nothing in the corpus draws it. `the-privileged-area` (rules_primer.md) draws
// a different region under a different book, and `the-goalmouth` draws the goalmouth.
//
// NO ROUTE IS DRAWN. There is no notation for knocking a puck down, and inventing one
// would breach the rule that a symbol is only as good as the key that defines it. The
// picture is a position and the caption does the rest — which makes this the thinnest
// spec in the file, and it is here because the misconception it corrects ("I was outside
// the crease, so I am fine") is exactly the one a centre standing in front of his own net
// will have.
// ---------------------------------------------------------------------------

const creaseThePuckDecides = {
  id: 'centre-crease-the-puck-decides',
  title: 'A puck in your own crease',
  owner: 'content/positions/center.md',
  half: true,
  width: 900,

  caption:
    'A loose puck inside your own goal crease, your own net at the right, with the centre ' +
    'standing just outside the blue paint and an opponent at the net front. Being outside the ' +
    'crease yourself does not make covering that puck safe, and this is the picture worth ' +
    'carrying: what the books judge is where the puck is, not where you are. Close your hand on ' +
    'a puck that is in your own crease, or smother it under your body there, and under the NHL ' +
    // ⚠️ QUOTED VERBATIM FROM THE SECTION, INCLUDING THE CAPITAL. NHL Rule 63.6's sentence
    // begins "The significant factor", and center.md quotes it that way. An earlier draft
    // silently lower-cased it to fit the clause, which is the kind of edit that turns a
    // quotation into a paraphrase without anyone noticing it happened.
    'and the IIHF it is a penalty shot — "The significant factor when determining whether or ' +
    'not a penalty shot is warranted is the location of the puck at the time it was held, ' +
    'grabbed or gathered into the body" — a penalty shot or an optional minor under USA Hockey, ' +
    'and the same answer under Hockey Canada, though that book takes three separate passages to ' +
    'reach it. With your own net empty it becomes an awarded goal instead, and USA Hockey alone ' +
    'conditions that on the act having prevented an obvious and imminent goal. Catching the ' +
    'puck out of the air is not the offence in any of the four books, though USA Hockey’s ' +
    'permission is a casebook interpretation rather than rule text — provided you knock it ' +
    'straight down where you caught it, rather than holding it, carrying it, or dropping it ' +
    'somewhere better.',

  describe:
    'The defending half of the rink, your own net at the right. The puck lies inside the goal ' +
    'crease, close to the goal line and just to one side of the middle. Your centre stands ' +
    'outside the crease, short of its front edge and off to one side; an opposition forward ' +
    'stands at the net front on the other side, also outside the crease; and your goaltender is ' +
    'in the crease behind the puck. No routes are drawn, and no other player is drawn.',

  players: [
    // Displaced within his crease rather than square, because a puck loose in there means
    // the goaltender has already had to move. 4.1 ft from the puck glyph.
    { id: 'G', pos: 'G', at: { at: 'crease', dx: 1, dy: 3 } },                    // (87, 3)
    // (80, -5). Outside the crease on both counts: x = 80 is 3 ft short of the crease's
    // front edge at x = 83 on the centre line, and |y| = 5 is outside its 8 ft width.
    // The circle's 3.275 ft of ink does not reach either boundary.
    { id: 'C', pos: 'F', at: { at: 'net-front', dx: -4, dy: -5 }, label: 'outside the paint' },
    // (81, 6). Also outside the crease, on the far side, so the picture shows a scramble
    // rather than a player standing alone beside a stationary puck. Whether he may be
    // there at all is his own book's question and this diagram makes no claim about it.
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'net-front', dx: -3, dy: 6 } },
  ],

  routes: [],

  // (86, -2): inside the crease on both axes — x between 83 and 89, |y| = 2 against a
  // half-width of 4. The whole diagram turns on this coordinate, so it is stated here
  // rather than left to be read off the picture.
  puck: { at: 'goal-line', dx: -3, dy: -2 },
};

// ⚠️ `creaseThePuckDecides` IS NOT IN THIS LIST ON PURPOSE. See the block above spec 5:
// `puck_handling.mjs` draws the same picture under a different owner, its version carries
// two things this one cannot, and shipping both would put one claim under two owners.
// Adding it here is a one-line change and requires removing the other copy first.
export default [
  outOfTheMiddle,
  neutralZoneOutside,
  arriveBehindThePuck,
  slotOptions,
];
