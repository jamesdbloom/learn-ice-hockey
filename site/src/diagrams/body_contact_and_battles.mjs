/**
 * Diagrams for content/technique/body_contact_and_battles.md.
 *
 * The section is the source of truth. Every player and every route below is one the
 * section that owns it describes; where the prose hedges, the caption hedges. Each
 * diagram names its own section in the banner above it: §2 "Angling", §6 "Receiving
 * a Hit Safely" (Case 1), §8 "Corner Battles", §9 "Net-Front Battles" (step 3).
 *
 * ⚠️ MOST OF THIS DOCUMENT IS UNDRAWABLE AND THAT IS NOT AN OVERSIGHT. It is the
 * corpus's second-longest document and for a long time it owned exactly one picture,
 * which looks like neglect and mostly is not: §3 is stick checks and NEITHER PUBLISHED
 * KEY THIS CORPUS DRAWS FROM HAS A STICK SYMBOL; §4, §5, §7 and §11 are a shoulder, a
 * hip, a wide low base, a stance, a pair of hands behind a body — postures, and a glyph
 * in this notation has no facing, no limbs and no posture. `skating.md` and
 * `puck_handling.md` correctly own ZERO diagrams for exactly that reason. What IS
 * drawable here is the handful of places where the teaching is a BEARING or a LINE
 * rather than a body, and those are the ones below. A picture manufactured to close a
 * count would be worse than none.
 *
 * FIRST DIAGRAMS EVER AUTHORED FOR content/technique/. Nothing in this directory
 * had a picture before, so there is no house precedent inside the section to
 * follow — the nearest neighbour is `rush-gap-and-angle` in defending_the_rush.mjs,
 * which §2 already BORROWS, under an explicit note that the distances in its
 * caption belong to that document and not to this one. This picture therefore
 * states no distance at all, in feet or in stick lengths. §2's own words:
 * "This section sets no distance of its own: what carries across is the geometry,
 * and nothing numeric."
 *
 * WHAT THIS PICTURE ADDS THAT THE BORROWED ONE CANNOT. §2 says so itself, in the
 * paragraph under the borrowed figure: "It is the same *principle* rather than the
 * same skill — that defender is travelling backward on a rush, where the four
 * things below are written for closing on a carrier in open ice." So the borrowed
 * picture draws BACKWARD skating on a one-on-one rush and this one draws a player
 * closing FORWARD in open ice, which is what the four numbered points are written
 * about. If that ever stops being true, this diagram loses its reason to exist and
 * should be cut rather than repaired — a diagram that restates its neighbour is a
 * second place a correction has to reach.
 *
 * ⚠️ THE SECTION IS SAFETY-BEARING AND THE PICTURE MUST NOT SHOW OR IMPLY CONTACT.
 * Hockey Canada Rule 7.3, quoted in §1 of the same document, makes it body checking
 * "when a player extends an arm, shoulder, or hip AFTER ANGLING an opponent" — so
 * the act this picture teaches sits one movement away from a penalty that is
 * illegal outright in a large part of the corpus's readership (USA Hockey 604(a):
 * banned at 12U and below, in all girls'/women's classifications and in all
 * non-check adult classifications). Consequences, all deliberate:
 *
 *   - the defender's route is `pressure`, which terminates in two bars. An
 *     arrowhead means "keep going through" and is what THE ARRIVAL INVARIANT in
 *     lib/rink.mjs exists to keep off a route that finishes near a person.
 *   - the route finishes on a PATCH OF ICE, not near the carrier at all: its tip
 *     is 14.5 ft from the nearest point of the carrier's drawn curve and 38.0 ft
 *     from his anchor. The arrival rule's 9 ft arrowhead threshold is not in play
 *     here and neither is its 2.9 ft tangent clearance; both are satisfied with
 *     room to spare, which is the point — this is not a picture of an arrival on
 *     a player.
 *   - no contact mark is drawn and none exists in the corpus's legend to draw:
 *     `bodycheck` is implemented in the renderer but deliberately has NO legend
 *     row, "because a legend that advertises a body-check glyph without saying who
 *     may legally deliver one is a contact instruction with no scope attached".
 *   - the caption carries §2's condition — "as long as you do not bump, push or
 *     shove them to do it" — because a picture read aloud is all a listener gets.
 *
 * ⚠️ THE SHADED BAND IS NOT LABELLED, AND THAT IS A CHOICE.
 * §2 writes: "Coaches call the middle **good ice** and the outside **bad ice**."
 * Those two phrases appear ZERO times in content/foundation/rink_map_and_glossary.md,
 * which owns the corpus's named regions — they are attributed in §2 to coaches, and
 * to a USA Hockey coaching write-up, not to a rink map. A diagram that writes a name
 * onto a patch of ice makes that name a region, and a band labelled "the high slot"
 * was once drawn at 3.14x the area its owner defines, in two diagrams, under captions
 * matching the owner's words, and passed every gate. So the band here carries no text
 * at all and the caption describes it in ordinary words instead.
 *
 * WHAT THE BAND IS, AND WHOSE GEOMETRY IT IS. rink_map_and_glossary.md owns both
 * halves of it, and it is worth quoting because they are the words §2's point 1 is
 * written on top of:
 *   §"Wide and middle" — "**Middle** = the central lane. ... 'take away the middle'
 *   means close that lane and force the play wide", and "**Wide** = out near the
 *   boards, in the outside lane."
 *   §"The neutral-zone dots" — "the four dots 5 ft outside each blue line, **44 ft
 *   apart**" and "they mark the standard lateral lanes for a neutral-zone setup."
 * So the WIDTH is the glossary's: 44 ft, edge to edge on the two faceoff-dot lines,
 * y = ±22, which rink.json carries as `faceoff.dot_y`.
 *
 * ⚠️ THE DEPTH IS THE PICTURE'S OWN AND NOTHING OWNS IT. The glossary calls the middle
 * a LANE and gives it no ends at all. The two drawn here — the centre red line and the
 * tops of the faceoff circles — exist only so the shading has an edge, and the caption
 * says so, which is the disclosure `rush-gap-and-angle` carries in its caption for the
 * same reason and which the "high slot" defect existed for want of.
 *
 * ⚠️ COST OF LEAVING IT UNLABELLED, STATED RATHER THAN HIDDEN: scripts/check_zones.py
 * only sees zones that carry a <text> label — its own docstring lists "a zone with no
 * text label" under what it cannot see. So this polygon is invisible to that worklist,
 * and the paragraph above is the review it would otherwise have got.
 *
 * WHY A HALF SHEET, IN ALL FOUR. §2's geometry is a curve changing direction — the
 * carrier's route turning from inward to outward — and the other three are a bearing
 * across a net front, two escapes out of a corner and a line into a corner. All four
 * are small, and a full sheet renders every dimension at half the size. The defended
 * net is at the right in every one of them, which is this corpus's convention for a
 * picture drawn from the defending side (all eight diagrams in
 * defensive_zone_coverage.mjs are `half: true` and say "the defended net at the right"
 * in their own describe text). The far net is not needed: nothing in any of the four
 * sections depends on it.
 */

// ---------------------------------------------------------------------------
// Angling — your route, not their route
// ---------------------------------------------------------------------------
//
// §2 "Angling — Legal in Every League", the four things you are managing:
//
//   "**1. Your route, not their route.** Skate at the ice they want, not at the
//    player. If they are trying to get to the middle, your line takes the middle
//    away and leaves them the wall."
//
//   "**2. Momentum back toward your own net.** Approach on an angle that leaves
//    you travelling *back* toward the goal you are defending, not sideways across
//    the ice. ... if they get rid of the puck, you are already going the right way
//    and you stay above them (between them and your net)."
//
// Points 3 (closing speed) and 4 (stick on the ice) are NOT drawn and cannot be: one
// is a speed, and the other needs a stick symbol, which neither of the two published
// keys this corpus draws from publishes — rules_primer.mjs records the same absence in
// terms. The caption says so, rather than letting the picture imply the list of four is
// complete.
//
// ⚠️ THE CONDITION IN POINT 1 IS LOAD-BEARING AND IS EASY TO DROP. It reads "**If**
// they are trying to get to the middle". A picture cannot draw a conditional, so the
// carrier is drawn doing the thing the condition names and the caption says that is
// the case being drawn. Drawing it without the hedge would turn a coaching read into
// a law of hockey, which is the cardinal rule of the style guide.

// The carrier: wide, in open ice, and trying to get to the middle. Six feet back from
// the neutral-zone dot along the ice and eight feet wide of it across, so he is plainly
// OUTSIDE the middle lane and heading into it.
const CARRIER = { at: 'neutral-dot:right', dx: -6, dy: 8 };      // (14, 30)
// Where his route actually finishes: turned back out toward the wall. Eight and a half
// feet short of the side boards — the route stops in open ice, because §2 draws no line
// into the boards, and the Hockey Canada interpretation it quotes ("steer or direct an
// opposing player into the boards") is a sentence about what is legal, not an
// instruction this picture is entitled to draw as a destination.
const CARRIER_TO = { at: 'top-of-circle:right', dx: -8, dy: 12 };  // (46, 34)

// The defender, inside him and a few feet nearer the net he is defending — "above
// them", in §2's word.
const D_FROM = { at: 'neutral-dot:right', dy: -18 };             // (20, 4)
// THE AIM POINT: a patch of ice inside the carrier and up-ice of him, not the carrier.
//
// Arithmetic, so the next editor can refute it rather than trust it.
//
// THE TURN, which is the one thing this picture has that the prose does not. The carry
// route is a quadratic Bezier with `bow: -14`: the chord (14,30)->(46,34) has length
// 32.25 and unit (0.992, 0.124), the perpendicular is (-0.124, 0.992), so the control
// point is the chord midpoint (30, 32) plus (-0.124, 0.992) * (-14) = (31.74, 18.11).
// The tangent where the carrier STARTS is control - from = (17.74, -11.89) — 34 degrees
// up-ice and INWARD toward the middle, which is the intent point 1 names. The tangent
// where he FINISHES is to - control = (14.26, 15.89) — 48 degrees up-ice and OUTWARD
// toward the wall. One route, no invented symbol, and an 82-degree swing between those
// two tangents says "he was going for the middle and finished going to the wall". That
// is why this is drawn as one bowed carry rather than as two routes, or as an
// "intended" route in a notation that has no such symbol.
//
// HOW CLOSE HE GETS TO THE MIDDLE, AND THAT HE NEVER ENTERS IT. Along that curve
// y(k) = 30 - 23.78k + 27.78k², whose minimum is 24.91 at k = 0.428, i.e. the point
// (28.6, 24.9). The carry glyph is a wave of amplitude 1.05 drawn at stroke 0.7, so the
// ink reaches 23.5 against the shaded band's edge at 22 — the route noses at the
// middle, comes within a couple of feet of it, and turns away without ever getting in.
// That is the picture teaching itself, and it is the reason the band is drawn at all.
//
// WHERE THE DEFENDER'S ROUTE ENDS, AND HOW FAR THAT IS FROM ANYBODY. Its tip (50, 18)
// lies 14.49 ft from the nearest point of the carrier's drawn curve (the minimum falls
// at k = 0.84) and 37.95 ft from the carrier's own anchor at (14, 30).
// It is four feet inside the middle lane and four feet up-ice of where the carrier's
// route finishes, so the defender ends the picture between the carrier and the goal he
// is defending — point 2's "you stay above them". The gap between the two routes closes
// as they run: 26.7 ft where they start, 16.5 ft where they end, which is the property
// §2 cares about and the only sense in which this picture says anything about distance.
//
// ⚠️ IT IS DELIBERATELY NOT DRAWN AS AN ARRIVAL BESIDE THE CARRIER. A real angle
// finishes with the two players a stride apart, and that is the seal, which
// §"Where the angle ends" hands to a different set of rules in every league. A still
// frame can depict arrival at a PLACE and never at a PERSON: the two facts that decide
// whether the next second is legal are the carrier's facing and what the defender does
// in the last two feet, and those are one undrawable and one movement over time. So the
// route stops where the ice is taken, and the caption carries the rest.
//
// ⚠️ AND IT IS NOT CLAIMED TO SIT ON THE CARRIER'S EXTENDED LINE. An earlier draft put
// the tip exactly on the ray leaving the carrier's start tangent and said so. That is a
// claim the geometry will not carry: extend that ray far enough to be up-ice of a
// carrier who has been turned outward and it lands 15 to 25 ft inside him, which draws
// two players with no visible relation to each other. The honest and smaller statement
// is the one above — inside him, up-ice of him, in the lane he was heading for.
const D_TO = { at: 'top-of-circle:right', dx: -4, dy: -4 };      // (50, 18)

// The puck, a stride ahead of the carrier and outside him. There is no stick symbol in
// either published key — rules_primer.mjs records the same absence — so what is visible
// is where the puck is, and the gap between a body and its puck is reach rather than a
// claim about which hand he carries it in. It sits 5.83 ft from his anchor, clear of
// the glyph's ink at 3.875 ft, and 5.19 ft off the drawn curve, so neither mark eats
// the other.
const PUCK = { at: 'neutral-dot:right', dx: -1, dy: 11 };        // (19, 33)

const anglingYourRoute = {
  id: 'angling-your-route',
  owner: 'content/technique/body_contact_and_battles.md',
  half: true,
  width: 900,

  caption:
    'Angling, and all of it is the route you skate: the defender’s line is aimed at the ice the ' +
    'carrier wants, not at the carrier. The net being defended is at the right, and the attack is ' +
    'coming toward it. The carrier is wide and heading for the middle, which is the case this ' +
    'draws: it is when they are trying to get to the middle that your line takes the middle away ' +
    'and leaves them the wall. So his route starts turning inward, noses at the shaded band without ' +
    'ever getting into it, and finishes turned back out toward the wall, the lane left over. That ' +
    'band is the middle: its sides are the two faceoff-dot lines, which are not painted on real ' +
    'ice, and its ends are drawn only so the shading has an edge, because the middle is a lane ' +
    'running the length of the rink and nothing gives it a depth. Watch the direction of the ' +
    'defender’s route as much as its destination — it runs back toward the goal he is defending ' +
    'rather than flat across the ice, so if the carrier gets rid of the puck he is already going ' +
    'the right way and stays above him, between him and that goal. The route ends in two bars ' +
    'rather than an arrowhead because it finishes on a patch of ice and not on a player: no contact ' +
    'is drawn here, and steering an opponent by the route you skate is legal in every league only ' +
    'so long as you do not bump, push or shove them to do it. Two of the four things this asks of ' +
    'you cannot be drawn — how fast you close, and where your stick is — and neither can the thing ' +
    'that matters most, which is that the defender was already at speed before this instant, ' +
    'because a gap cannot be closed from a standstill. Where an angle ends depends on whether your ' +
    'league allows checking, and nothing here is a licence to hit.',

  describe:
    'The attacking half of the rink, with the net being defended at the right and our goaltender in ' +
    'its crease. Two skaters and nothing else. An opposition forward carries the puck in open ice ' +
    'on the side drawn at the top of the picture, between the centre red line and the blue line and ' +
    'wide of the faceoff-dot line, with the puck a stride ahead of him and outside him. His route ' +
    'is the skate-and-stickhandle wave: it leaves him heading up the ice and inward toward the ' +
    'middle, runs close along the edge of a shaded band without entering it, then swings up the ice ' +
    'and outward toward the side boards, finishing short of them with an arrowhead. Our defenceman ' +
    'stands inside him and a few feet nearer the defended net. His route is a straight line ending ' +
    'in two short bars rather than an arrowhead: it runs up the ice and outward on a diagonal much ' +
    'more toward the defended net than across the rink, crosses the blue line, and stops inside the ' +
    'shaded band, ahead of where the carrier’s route finishes and well clear of him. The shaded ' +
    'band is the middle lane, drawn between the two faceoff-dot lines from the centre red line down ' +
    'to the tops of the faceoff circles. The two routes start far apart and finish closer together. ' +
    'Nothing in the picture shows contact between the two players.',

  // THE MIDDLE LANE. Sides on the faceoff-dot lines at y = +/-22 (rink.json
  // `faceoff.dot_y`, owned by rink_map_and_glossary.md); ends at the centre red line
  // and the tops of the circles. UNLABELLED — see the warning in the file header for
  // why, and for what that costs.
  //
  // Every corner is an offset from a named position rather than a bare number, so the
  // 22 comes from the table and cannot drift: `neutral-dot` is (20, 22) and
  // `top-of-circle` is (54, 22).
  zones: [
    {
      points: [
        { at: 'neutral-dot:right', dx: -20 },   // (0, 22)   centre red line
        'top-of-circle:right',                  // (54, 22)
        'top-of-circle:left',                   // (54, -22)
        { at: 'neutral-dot:left', dx: -20 },    // (0, -22)
      ],
    },
  ],

  players: [
    // The carrier is the opposition, so SOLID; he is a forward, so a CIRCLE. Shape is
    // the position and fill is the team — the Hockey Eastern Ontario sheet's own
    // `● ○ Forward / Player` row, with this corpus's own assignment of open to the
    // reader's team.
    { id: 'A1', team: 'opp', pos: 'F', at: CARRIER, label: 'wants the middle' },

    // A TRIANGLE, BECAUSE HE IS A D. `pos` decides the shape.
    //
    // ⚠️ THE CHOICE OF POSITION IS THE ONE THING HERE THE SECTION DOES NOT SETTLE, so
    // it is recorded rather than left to look inevitable. §2's noun is "defenders" —
    // "This is how good defenders actually take the puck. Not by hitting people." —
    // and it is used generically, for whoever is closing; the section also says
    // "Angling is a skating skill before it is a defensive skill", and a backchecking
    // winger angles as often as a defenceman does. But every glyph in this notation
    // carries a position, there is no neutral shape, and the picture §2 already
    // borrows — `rush-gap-and-angle` — draws a D. So this is a D, and the
    // caption says "the defender" — §2's own word — rather than "the defenceman",
    // so that nothing in the words narrows a skill the section does not narrow.
    { id: 'D', pos: 'D', at: D_FROM, label: 'aims at the ice' },

    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
  ],

  // NOT NUMBERED. Numbering asserts an order, and these two routes are simultaneous:
  // the angle only works because both are happening at once. `rush-gap-and-angle`
  // makes the same call for the same reason.
  routes: [
    // The carrier, skating with control of the puck. `bow: -14` is what makes the
    // route leave him heading inward and finish heading outward — see THE TURN and
    // HOW CLOSE HE GETS TO THE MIDDLE at D_TO for the arithmetic and for the check
    // that the curve never enters the shaded band.
    { from: CARRIER, to: CARRIER_TO, kind: 'carry', bow: -14 },

    // The defender. `pressure` — a plain line ending in two bars, which in this
    // corpus's notation means the route ENDS here rather than continuing through.
    // Not `skate`: an arrowhead says keep going, and what §2 asks for is to arrive.
    // Straight, with no bow: point 2 is about the direction of a line, and a bow
    // would blur exactly the thing the reader is being asked to look at. The line
    // runs (20,4) -> (50,18), which is 25.0 degrees off the axis pointing at the
    // defended net — 0.906 of the travel toward that net against 0.423 across the ice,
    // i.e. "back toward the goal you are defending, not sideways across the ice".
    { from: D_FROM, to: D_TO, kind: 'pressure' },
  ],

  puck: PUCK,
};

// ---------------------------------------------------------------------------
// Which way you walk a net-front opponent
// ---------------------------------------------------------------------------
//
// §9 "Defending the net front", step 3 and the warning that follows it:
//
//   "**3. Work under their arms — full-checking leagues only.** To move someone, get
//    *under* them — your shoulder beneath their armpit, your legs driving, walking them
//    out sideways — **toward the corner, and with their skates staying on the ice**."
//
//   "⚠️ **Step 3 has a direction, and it is the safety half of it: walk them toward the
//    corner, not across your own goalmouth.** Which league you are in decides whether you
//    may move them at all; which way you move them decides what they hit, and that half is
//    the one nobody teaches. A body moved across the front of your own net travels sideways
//    or backwards through a space with a steel goal frame at one edge and your goaltender
//    at the other, and it is the player being moved who meets the post."
//
// ⚠️ WHY THIS ONE IS DRAWN AND MOST OF §9 IS NOT. Steps 1, 2, 4 and 5 of that list are a
// shoulder, a stick, a leverage argument and where your eyes are. None of them is a
// position on the ice, and the rink primitives cannot draw any of them — the same reason
// skating.md and puck_handling.md correctly own no diagram at all. Step 3's DIRECTION is
// the exception: it is a bearing across a piece of ice with a goal frame on it, and the
// document says in terms that it is "the one nobody teaches". A picture of a bearing is
// something a picture can actually be.
//
// ⚠️ WHAT IS DELIBERATELY NOT DRAWN: THE FORBIDDEN DIRECTION ITSELF. The obvious design is
// two routes from one defenceman, one to the corner and one across the goalmouth, so the
// reader sees the contrast. It is geometrically false and was rejected for that. A player
// is walked in the direction the defender drives, and the defender drives from the side he
// is standing on: to walk this attacker the other way the defenceman would have to be on
// his other shoulder, which is a different picture and not a second arrow on this one.
// Drawing both from one anchor would assert that one defenceman standing in one place has
// both options open, which is the thing that is not true. The hazard is carried by the
// caption, and the goal frame, the crease and the goaltender are all drawn, at the end of
// the ice the pair is being taken away from — so the reader can see what the other bearing
// runs through.
//
// ⚠️ AND NO CONTACT MARK IS DRAWN, in a picture that IS about contact. `bodycheck` exists
// in the renderer and has no legend row on purpose — "a legend that advertises a
// body-check glyph without saying who may legally deliver one is a contact instruction
// with no scope attached". The contact here is a box-out held and driven, not a check
// thrown, and the caption carries the scope: USA Hockey 604(c) and Hockey Canada 7.3(a)
// price driving a player off an established spot as a push in the divisions they name, and
// IIHF 101.1 makes it an illegal hit in women's hockey.

// The attacker, planted on the spot he wants and NOT in the paint. `net-front` is (84, 0),
// which rink.json's own note warns is 1 ft INSIDE the crease on the centre line, so this
// glyph is offset off both axes: at (77.5, 6) it is 11.5 ft out from the goal line and 6 ft
// off centre, and the crease reaches neither — its front face is at x = 83 and it is never
// wider than |y| = 4. Nothing here draws a skater standing in the blue paint. It is also
// 9.6 ft from the goaltender's mark; an earlier draft had him at (80.5, 4.5) and rendered
// with his glyph touching the G, which reads as an attacker standing on the goaltender and
// was invisible in the source.
const A_PLANTED = { at: 'net-front', dx: -6.5, dy: 6 };          // (77.5, 6)

// The defenceman, underneath him and on the side he is being driven FROM. He is at lower y,
// which is what makes the drive run toward the corner drawn at the top of the picture, and
// at lower x, which is up-ice of the attacker — the attacker has the inside, which is
// exactly the case step 3 is written for.
//
// ⚠️ THE 7.9 FT BETWEEN THEM IS A DRAWING CONSTRAINT AND NOT A HOCKEY ONE, and the caption
// says the shoulder is under the armpit rather than letting the gap say otherwise. A
// forward's circle reaches 3.275 ft of ink and a defenceman's triangle 4.0, so two glyphs
// closer than 7.275 ft eat each other and the white halo punches a hole in whichever was
// drawn first. In the real thing these two are in contact.
const D_UNDER = { at: 'net-front', dx: -9, dy: -1.5 };           // (75, -1.5)

// WHERE THE PAIR GOES: out toward the corner drawn at the top. `corner:right` is (82, 34),
// and the route stops 4 ft short of it, because a walk-out is a few strides and not a trip
// to the boards. The line is 24.4 ft long and runs (77.5, 6) -> (82, 30).
//
// ⚠️ ONE ROUTE, AND IT IS THE ATTACKER'S. THE DEFENCEMAN'S OWN ROUTE WAS DRAWN AND CUT.
// The obvious version gives each player an arrow, since they travel together. Rendered, it
// is wrong twice. The two of them are on the SAME LINE 8 ft apart — the driver behind, the
// driven in front — so any line drawn from the man behind passes straight through the glyph
// of the man in front, and a route through a player reads as a player skating through a
// player. Offsetting the defenceman sideways to clear him fixes the drawing by falsifying
// the hockey: a defenceman standing beside an opponent cannot drive him sideways, only one
// standing behind that shoulder can.
//
// So the single arrow is the path of the player BEING MOVED, which is also the half the
// section's warning is about — "it is the player being moved who meets the post". The
// defenceman's part is carried by where he stands and by his label.
//
// ⚠️ AND `skate` IS THE ORDINARY FORWARD-SKATING MARK, WHICH HE IS NOT DOING. There is no
// glyph in either published key for a player walked off a spot, and inventing one would put
// a symbol in the corpus that the reader's key does not define. So the mark is the ordinary
// one and the CAPTION says he goes where he is driven. That is the same trade the file
// header records for the missing stick symbol: draw what the key has, and say the rest.
//
// Neither limb of the arrival invariant is engaged. The route is owned by an OPPOSITION
// skater, so the players at risk are ours: the defenceman at (75, -1.5) and the goaltender
// at (85, 0) both lie behind the tip at (82, 30), 32.3 ft and 30.2 ft away respectively.
// ⚠️ THOSE READ "24.5 ft and 30.8 ft". The conclusion held — both are far outside the 9 ft
// limb (b) sets, and (a) excludes a goaltender outright — but neither figure was the
// distance it claimed to be, and 24.42 is the route's own LENGTH, which is probably where
// the 24.5 came from. Re-derive: hypot(82-75, 30+1.5) = 32.27, hypot(82-85, 30-0) = 30.15.
const NF_A_TO = { at: 'corner:right', dy: -4 };                  // (82, 30)

const netFrontWalkOut = {
  id: 'net-front-walk-out-direction',
  owner: 'content/technique/body_contact_and_battles.md',
  half: true,
  width: 900,

  caption:
    'Defending your own net front, the net at the right. The opposition forward has planted on the ' +
    'spot they want, clear of the blue paint, and your defenceman is underneath them on the side ' +
    'away from the corner — shoulder beneath the armpit, legs doing the driving, a body ' +
    'position no diagram can draw and the reason the two marks sit further apart here than two ' +
    'players in a battle ever are. Whose job the net front is in the first place is a coaching ' +
    'choice rather than a law of hockey — under a low zone collapse it is the weak-side ' +
    'defenceman’s, under man-on-man it belongs to whoever’s check went there, which can as easily ' +
    'be a forward — so find out which your team plays. ' +
    'Only one route is drawn, and it is the attacker’s, because they are the one being ' +
    'moved and where they end up is what this is about: out toward the corner, away from the goal. ' +
    'They are not choosing that line. This notation has no position-neutral shape and no mark for ' +
    'a player being walked off a spot, so a defenceman is drawn and an ordinary skating arrow does ' +
    'that work. ⚠️ Which league you are in decides ' +
    'whether you may move them at all, and which way you move them decides what they hit. Taking ' +
    'the inside position and tying up their stick are the parts no book scopes to a checking ' +
    'league — holding a position ' +
    'you legally established is written as legal in three of the four, with Hockey Canada silent ' +
    'rather than against it. Driving a player off a spot they have established is a different act: ' +
    'a push, and a minor under USA Hockey Rule 604(c) at 12U and below, in all ' +
    'girls’ and women’s classifications and in all non-check adult hockey, and under Hockey Canada ' +
    'Rule 7.3(a) at U13 and below, throughout female hockey and in any other division a Member has ' +
    'approved — and neither book caps it at a minor. In women’s hockey IIHF Rule 101.1 makes it an ' +
    'illegal hit. So unless your league permits full body checking, stop at the position and the ' +
    'stick. And never walk anybody across the front of your own net: that path has a steel goal ' +
    'frame at one edge and your own goaltender at the other, and it is the player being moved who ' +
    'meets the post, travelling sideways or backwards and unable to choose what lands first. Taking ' +
    'them to the corner instead is caution drawn from that hazard rather than a rule anyone writes. ' +
    'In a checking league, drive from under the arm without lifting their skates off the ice, ' +
    'because a player whose edges are gone cannot brace at all. ' +
    // ⚠️ THE RECEIVING POSTURE IS ITS OWN SENTENCE AND ITS OWN SCOPE, AND THAT IS THE WHOLE POINT
    // OF THIS BREAK. It used to be coordinated with "and" INSIDE the "In a checking league,"
    // clause above, so a reader in a non-check league -- USA Hockey 12U and below, all
    // girls'/women's and all non-check adult; Hockey Canada U13 and below and all female hockey;
    // IIHF women's play; British rec -- heard the whole sentence as not addressed to them, and
    // what they lost was "head up and chin off your chest" while being driven across a goal frame.
    // The owner scopes it the other way in terms, at §6's first line: "Read this section whatever
    // league you play in -- unexpected contact happens in non-check hockey too, and the boards and
    // the goal posts are just as hard." Both siblings on the identical hazard carry the same
    // scope: positions/winger.md and hockey-iq/playing_without_the_puck.md, "in every league,
    // checking or not". The delivering instruction stays scoped to checking leagues; this does not.
    // ⚠️ AND THE WALKING-SPEED FINDING ATTACHES TO THE INJURY, NOT THE COLLISION. This read "that
    // collision can happen at walking speed", which as the last sentence of a safety block degrades
    // to a true, empty statement and reads as a reason to relax. USA Hockey's sentence NEGATES A
    // SPEED REQUIREMENT -- "A player doesn't have to be going at full speed for this to happen --
    // it can occur at walking speed" (sources/huh.txt:228-229, read this session) -- and a
    // collision at walking speed needs no such disclaimer. Only the injury does.
    'And in every league, checking or not, if you are the one being moved: head up, chin off your ' +
    'chest. USA Hockey puts the goal post in the same spinal-injury mechanism as the boards, and ' +
    'says that injury can happen at walking speed.',

  describe:
    'The defensive half of the rink, the net being defended at the right with our goaltender in its ' +
    'crease. Two skaters and no puck. An opposition forward stands in front of the net, about eleven ' +
    'and a half feet out from the goal line and six feet to the side drawn at the top of the ' +
    'picture, clear of ' +
    'the blue crease paint. Our defenceman stands below them and a little further from the goal ' +
    'line, ' +
    'on the side away from the corner. A single straight route leaves the opposition forward and ' +
    'runs across the ice toward the corner at the top of the picture, ending in an arrowhead about ' +
    'twenty-four feet along and short of the boards. No route is drawn for our defenceman. No route ' +
    'runs across the front of the goal. The puck is not drawn, because at this moment it is up at ' +
    'the point with a player outside the picture, and the battle is for the spot rather than for a ' +
    'puck on the ice. Nothing in the picture shows a body check being delivered.',

  players: [
    // The opposition, so SOLID; a forward, so a CIRCLE. Shape is the position, fill is the
    // team — the Hockey Eastern Ontario sheet's `● ○ Forward / Player` row.
    { id: 'A1', team: 'opp', pos: 'F', at: A_PLANTED, label: 'has the spot' },

    // ⚠️ A DEFENCEMAN, AND THE SECTION DOES NOT SETTLE THAT. §9 is headed "Defending the net
    // front" and names no position at all. The owner of the assignment is
    // content/systems/defensive_zone_coverage.md, which settles it in terms and is quoted
    // rather than paraphrased: "Under the house-default low zone collapse it is the
    // weak-side defenceman, and that pairing is what the rest of this document assumes. It
    // is not universal: under man-on-man the net front belongs to whoever's check went
    // there" — which can be a forward. §8's own "Whose corner is it?" makes the same move
    // about the neighbouring patch of ice.
    //
    // ⚠️ AN EARLIER VERSION OF THIS COMMENT IDENTIFIED THE PROBLEM AND THEN CONCLUDED THAT
    // THE CAPTION HANDLED IT. It did not. The caption said "your defenceman is underneath
    // him" and stopped: no system named, no alternative named, and no instruction to find
    // out which the reader's team plays — which is the cardinal rule of the style guide, in
    // a unit that is voiced alone with a 300 ms break either side, so it read as an
    // assignment. The refutation was in this same file: `corner-escape-routes`, written the
    // same round by the same author for the adjacent patch of ice, carries the full
    // three-part treatment. This caption now carries it too. ⚠️ Naming the difficulty in a
    // comment is not discharging it.
    //
    // The notation has no position-neutral glyph, so this is a D because the net front is
    // the commonest place to find one, and the caption says so instead of implying it.
    { id: 'D', pos: 'D', at: D_UNDER, label: 'drives from underneath' },

    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
  ],

  // NOT NUMBERED. One route cannot carry an order, and adding a badge to a single route
  // would imply a second one exists somewhere.
  routes: [
    { from: A_PLANTED, to: NF_A_TO, kind: 'skate' },
  ],
};

// ---------------------------------------------------------------------------
// The two ways out of a corner
// ---------------------------------------------------------------------------
//
// §8 "Corner Battles", "You have less room and more escape routes to cover":
//
//   "The corner has boards on two sides, which helps you seal a player but also gives them
//    the option to spin either way — up the wall or out behind the net. Angle the puck
//    carrier so that the escape they have is the one you want them to take: **toward the
//    wall and up, away from the net, never back toward the slot.**"
//
// The whole of that is geometry, which is why it is drawn and most of §8 is not: "two
// players almost always beat one" is already drawn by `dz-collapse-corner`, which sends the
// centre down as the second body, and "whose corner is it" is a coverage question that
// `loose-puck-who-goes` and the defensive-zone module own.
//
// ⚠️ THE ESCAPE THAT MUST NOT BE LEFT IS NOT DRAWN AS A ROUTE, and that is deliberate. A
// third arrow from the carrier back toward the slot would have to run straight through the
// defenceman's glyph — he is standing in it, which is the point — and a route drawn through
// a player reads as a player skating through a player. It is carried by where the
// defenceman is and by the caption instead.
//
// ⚠️ AND THE SLOT IS NOT SHADED, THOUGH IT IS THE OBVIOUS THING TO SHADE. A tinted, labelled
// slot would be the clearest possible statement of "never back toward the slot" — and it
// would be a FOURTH definition of a corpus region living in a diagram module. The region
// belongs to content/foundation/rink_map_and_glossary.md, drawn once as `the-slot`; three
// modules each defining their own HIGH_SLOT is how a band came to be drawn at 3.14x the area
// its owner defines, in two diagrams, under captions matching the owner's words, and pass
// every gate. The cost of leaving it out is stated rather than hidden: a reader who does not
// already know where the slot is gets the word and not the picture, and `scripts/check_zones.py`
// has nothing here to compare.

// The carrier, in the corner with the puck and the boards on two sides of him. `corner:right`
// is (82, 34); at x = 79 the inner boards run at y = 41.1 on the corner arc, so this glyph
// stands 7.1 ft off the wall — close enough to be in a corner battle, far enough that its
// 3.275 ft of ink does not draw through the dasher and far enough off the top of the frame
// that the picture does not read as a player pinned against the edge of the page.
const C_CARRIER = { at: 'corner:right', dx: -3 };                // (79, 34)

// The puck, between him and the wall, which is §7's own instruction two sections earlier:
// "put the puck between your skates and the wall, put your body on the outside of it". It
// sits 5.3 ft from his anchor, clear of the glyph's ink, and 2.5 ft off the boards. An
// earlier draft had it at 4.6 ft and rendered as a dot stuck to the edge of his circle.
const C_PUCK = { at: 'corner:right', dx: 1, dy: 3.5 };           // (83, 37.5)

// The defenceman, arriving on an angle from the slot side rather than standing still.
// `faceoff-dot:right` is (69, 22).
const C_D_FROM = { at: 'faceoff-dot:right', dx: -8, dy: -4 };    // (61, 18)
// Where he arrives: on the carrier's INSIDE — 5 ft up-ice of him and 5 ft below him, i.e.
// between the carrier and the slot, and 7.1 ft from his anchor, outside the 3.275 ft of ink
// the carrier's glyph carries. That is the seal, and it is what leaves the wall and the ice
// behind the net as the only two ways out.
const C_D_TO = { at: 'corner:right', dx: -8, dy: -5 };           // (74, 29)

// ESCAPE 1: up the wall. Finishes 21 ft along the boards, short of the half-wall, with a
// small bow toward the wall so the route follows it rather than cutting across the ice.
// `half-wall:right` is (69, 38.5) and rink.json's note on that datum explains why it is
// 38.5 and not 42.5 — a player standing against the wall does not have their centre on the
// dasher.
const C_UP_WALL = { at: 'half-wall:right', dx: -10, dy: 0.5 };   // (59, 39)
// ESCAPE 2: out behind the net.
//
// ⚠️ THIS ROUTE PREVIOUSLY DID NOT GO BEHIND THE NET, AND FOUR LAYERS SAID IT DID. It ran
// (79,34) -> (92,7) with `bow: 6`, control (90.91, 23.10), giving x(k) = 79 + 23.81k -
// 10.81k² — MONOTONE, so its greatest x was 92 AT THE TIP, against a goal frame whose back
// face is at x = 92.33. It finished level with the back of the net and 4 ft outside the near
// post, and its terminal tangent (1.09, -16.10) ran 86 degrees ACROSS THE ICE, pointing at
// the frame. Rendered, it read as a player skating into the side of the goal. The body, the
// ` ```facts ` line, this caption and this `describe` all said "out behind the net" and the
// caption added "drawn curving round the back of the goal"; none of it was true of the
// picture. ⚠️ NO CHECK COULD SEE IT: the tip was 9.90 ft from the goaltender and the miss
// 7.46 ft, so `check-arrivals` was clean. The defect was the CLAIM, not the clearance.
//
// ⚠️ AND TWO OF THE NUMBERS IN THE COMMENT THAT REPLACED IT WERE WRONG WHILE ITS CONCLUSION
// WAS RIGHT. It said the route was "10.8 ft clear of the end boards at its widest" and the
// routes block said 9 ft; the true value was 8.0, at the tip, because x never turned over. It
// also said the route crossed the goal line 19.6 ft off centre; the curve gives 20.0. Only
// the 9.9 ft to the goaltender checked out. Re-derive these; do not carry them forward.
//
// THE ROUTE NOW DRAWN, arithmetic written out so the next editor can refute it rather than
// trust it. `behind-net` is (94, 0), so this tip is level with it and 10 ft to the WEAK side —
// past the far post, on the other side of the goal from the corner the carrier started in.
//   THE CHORD (79,34) -> (94,-10) has length 46.49 and unit (0.3227, -0.9465); the
//   perpendicular is (0.9465, 0.3227), so with bow 14 the control point is the chord midpoint
//   (86.5, 12) plus (0.9465, 0.3227) x 14 = (99.75, 16.52).
//   IT ACTUALLY PASSES BEHIND THE NET. x(k) = 79 + 41.50k - 26.50k² turns over at k = 0.783,
//   x = 95.25 — 4.75 ft off the end boards. y(k) = 34 - 34.96k - 9.04k² reaches the centre
//   line at k = 0.805, and x there is 95.24: the route crosses the middle of the ice 2.91 ft
//   BEHIND the back face of the goal frame and 4.76 ft short of the end boards, i.e. through
//   the gap the wraparound actually uses.
//   THE TERMINAL TANGENT is to - control = (-5.75, -26.52), unit (-0.212, -0.977) — 102
//   degrees, running ACROSS the ice behind the goal with a slight lean back up-ice. It points
//   at open ice on the far side, not at the frame, which is the half the old route got wrong.
//   THE DEPARTURE is control - from = (20.75, -17.48) — 40 degrees below the axis against a
//   chord at 71, so the bow swings the START through 31 degrees. ⚠️ That is the check the
//   file's other rebuild exists for: a quadratic's bow rotates BOTH ends, and 31 degrees is an
//   arc out toward the end boards rather than the hook that a bow big enough to bend the
//   finish onto a short chord produces.
//   MEASURED OFF THE DRAWN WAVE, not the centreline — the `carry` glyph is a wave of
//   amplitude 1.05 at stroke 0.7, so the ink is up to 1.4 ft either side. Read out of the
//   rendered SVG's own polyline: 1.86 ft from the goal frame, 9.19 ft from the goaltender's
//   anchor, 3.74 ft off the boards. Nothing is drawn through anything.
//   THE ARRIVAL INVARIANT IS NOT ENGAGED. The tip is 13.45 ft from the goaltender at (85, 0),
//   well outside the 9 ft (b) sets for an arrowhead, and (a) excludes a goaltender outright.
//   The only other player is the reader's defenceman at (61, 18), who lies behind the tip.
//   THE TRAPEZOID LINE at x = 94 sits at y = -12.36, so the arrowhead finishes 2.4 ft inside
//   it rather than on it. A tip at (93, -14) was drawn and rejected for landing on that line.
//
// ⚠️ RENDERED AND LOOKED AT, which is the only thing that could have caught the defect this
// replaces. Five endpoint/bow pairs were built and compared as pictures before this one.
const C_BEHIND = { at: 'behind-net', dy: -10 };                  // (94, -10)

// ⚠️ THE PIN CITATIONS WERE CORRECTLY SCOPED AND THAT LEFT A HOLE. IIHF 101.1 is Section 11,
// "Women's Hockey", and USA Hockey 604 is headed "(Competitive Contact Categories)" and scoped by
// 604(a) to 12U and below, all Girls'/Women's classifications and all non-check Adult play. So
// after the scoping, "what you pin is the puck and not the player" carried NO citation for the
// reader in a body-checking league — the one reader most likely to pin somebody.
//
// The rule that reaches that reader is USA Hockey Rule 622, `sources/usah.txt:4343-4356`, whose
// Note reads: "Holding is the action of a player wrapping their arms around an opponent or using a
// free hand to clutch, grab or hold the stick, jersey or body on the opponent. This includes
// wrapping one or both arms around the opponent along the boards in a manner that pins them
// against the boards and prevents them from playing the puck or skating…"; 622(a) makes it a minor.
// Its heading carries no category parenthetical, which is the contrast the caption draws, and the
// Casebook's three Rule 622 situations (`sources/usah_casebook.txt:14131-14181`) carve out nothing
// about the boards. `content/positions/winger.md:363` already said this in terms; the caption did
// not use it.
//
// ⚠️ NOT CLAIMED FOR EVERY BOOK, and deliberately. Hockey Canada 8.1 (`sources/hc_layout.txt:5324`)
// reaches the same act by a different route — "holds an opponent in any manner" — but it also
// permits "an arm in a strength move, by blocking their opponent, provided they have body position
// and are not using their hands in a holding manner", and its Interpretation 3 to Rule 7.5(a)
// (`hc_layout.txt:4889`) states that "Pinning a player to the boards at low speed and with minimal
// impact is permitted, even if contact is initiated from behind". That is a checking-from-behind
// interpretation rather than a holding one, but a caption that said "every book" would be wrong
// about the one most British and Canadian readers meet second.

const cornerEscapeRoutes = {
  id: 'corner-escape-routes',
  owner: 'content/technique/body_contact_and_battles.md',
  half: true,
  width: 900,

  caption:
    'Why a corner is harder to defend than a piece of wall, drawn in your own end with the net you ' +
    'are defending at the right. The opposition carrier has the puck against the boards with two ' +
    'walls beside him, and that gives him two ways out rather than one: up the wall, drawn running ' +
    'along the boards toward the blue line, or out behind the net, drawn curving out toward the end ' +
    'boards and round the back of the goal to the far side of it. ' +
    'There is a third way out and it is not drawn, because your defenceman is standing in ' +
    'it — his route arrives on the carrier’s inside, between him and the middle of the ice, and it ' +
    'ends in two bars rather than an arrowhead because it finishes by arriving rather than by ' +
    'carrying on through. That is the whole decision the section asks you to make: you will not ' +
    'take every escape away, so angle him so the one left open is the one you want him to take — ' +
    'toward the wall and up, away from the net, and never back toward the slot — the ice in front ' +
    'of the goal between the two faceoff circles, running from the top of the circles down to the ' +
    'goalmouth. Which of the two drawn escapes he actually ' +
    'chooses is his, not yours, and both of them are better for you than the middle. Whose corner ' +
    'this is in the first place is a coaching choice rather than a law of hockey — under a low zone ' +
    'collapse it is the strong-side defenceman’s with the centre supporting, under man-on-man a ' +
    'winger may follow his check down into it — so find out which your team plays. ⚠️ And nothing ' +
    'here is a licence to hit: the bars mean arrive and contain, the carrier has the puck at his ' +
    'stick against the boards, and whether an arrival like that may end in contact at all depends ' +
    'on your age group, your league and the book they play under. What you pin is the puck and not ' +
    'the player — in women’s hockey IIHF Rule 101.1 allows two players to push and lean only while ' +
    'possession of the puck remains the sole object of both of them, and where checking is barred USA ' +
    'Hockey Rule 604 Note 1 counts forcing an opponent off the puck with no effort to legally play it ' +
    'as an illegal body check. And if you play under body-checking rules, so that neither of those ' +
    'two is the book you are under, the act is still reached: USA Hockey Rule 622 is headed simply ' +
    '“Holding an Opponent”, without Rule 604’s category qualifier, and its note names wrapping one or ' +
    'both arms around an opponent along the boards in a manner that pins them and prevents them from ' +
    'playing the puck or skating. That is a minor penalty. Never finish ' +
    'into the back of a player who is facing the boards.',

  describe:
    'The defensive half of the rink, the net being defended at the right and our goaltender in its ' +
    // "about six feet" was wrong and is now seven: the anchor (79, 34) lies 20.72 ft from the
    // corner arc's centre (72, 14.5), so it stands 6.98 ft off the boards' inner ink edge at
    // r = 27.7 and 7.28 ft off the dasher centreline at r = 28. Six matched neither, and the
    // module's own comment beside C_CARRIER already said 7.1.
    'crease. An opposition forward stands in the corner at the top of the picture, about seven ' +
    'feet off the side boards, with the puck drawn between him and the wall. Our defenceman is out ' +
    'toward the top of the faceoff circle on the same side; his route is a straight line running ' +
    'down and across into the corner, ending in two short bars rather than an arrowhead, about ' +
    'seven feet short of the carrier and on the side of him nearer the middle of the ice. Two ' +
    'skate-and-stickhandle waves leave the carrier. One runs along the side boards away from the ' +
    'goal, finishing with an arrowhead about twenty feet up the wall. The other curves out toward ' +
    'the end boards and then round the back of the goal, passing through the gap between the back ' +
    'of the net and the end boards, and finishing with an arrowhead on the far side of the goal ' +
    'from the corner, pointing across the ice and well clear of the goaltender. ' +
    'No route runs toward the middle of the ice, and no shaded ' +
    'region is drawn. Nothing in the picture shows contact between the two players.',

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: C_CARRIER, label: 'two ways out' },

    // A D, because the section's own default has the low corner belonging to the strong-side
    // defenceman — "Under a low zone collapse, the low corner belongs to the strong-side
    // defenceman with the centre supporting". The caption says that is a coaching choice, in
    // the section's own words, rather than letting the triangle assert it.
    { id: 'D', pos: 'D', at: C_D_FROM, label: 'takes the middle away' },

    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
  ],

  // NOT NUMBERED. The defenceman's route and the carrier's options are simultaneous, and the
  // two escapes are alternatives rather than a sequence — numbering either pair would assert
  // an order the section does not.
  routes: [
    // `pressure` — a plain line ending in two bars. It aims at the carrier's inside shoulder
    // and stops 7.2 ft short of his anchor, outside his 3.275 ft of ink. A bar-ended route is
    // outside both limbs of the arrival invariant by design, and that is exactly what makes
    // it safe to point one at a player: an arrowhead would say keep going through him.
    // The bars finish 7.1 ft from the carrier's anchor, so no mark eats another.
    { from: C_D_FROM, to: C_D_TO, kind: 'pressure' },

    // Escape 1, up the wall. `carry`, because he has the puck. bow -2 bulges the route
    // toward the boards so it follows the wall instead of cutting the corner off.
    // ⚠️ THIS SAID "4.3 ft off the dasher at its furthest" AND THE TRUE FIGURE IS 3.5.
    // The control point is (69.49, 38.44), so y(k) = 34 + 8.88k - 3.88k², whose derivative
    // 8.88 - 7.76k is positive throughout: the curve is MONOTONE and its closest approach to
    // the wall is the TIP at (59, 39), 3.5 ft off a dasher at y = 42.5 — not a mid-curve
    // bulge. Off the rendered wave's own polyline the ink peaks at y = 39.23 near x = 66,
    // i.e. 3.27 ft. Nothing is drawn through the boards either way, which is why no check
    // saw it; the number was simply wrong.
    { from: C_CARRIER, to: C_UP_WALL, kind: 'carry', bow: -2 },

    // Escape 2, out behind the net. bow 14 takes it out toward the end boards — 4.75 ft clear
    // of them at its furthest — and then round behind the goal and out the far side. The
    // derivation, and the route this replaces, are at C_BEHIND above; the one number that
    // matters here is that the curve crosses the middle of the ice 2.91 ft BEHIND the back
    // face of the goal frame, which is what makes "round the back of the goal" true.
    { from: C_CARRIER, to: C_BEHIND, kind: 'carry', bow: 14 },
  ],

  puck: C_PUCK,
};

// ---------------------------------------------------------------------------
// Arriving at the wall on an angle
// ---------------------------------------------------------------------------
//
// §6 "Receiving a Hit Safely", Case 1 — the first and best of USA Hockey's three ranked
// cases, quoted there in the manual's own words:
//
//   "**Case 1 — best of all: arrive on an angle, not perpendicular.** *"Skating into the
//    boards at an angle means better puck control and less risk of injury… When players
//    skate into the corners at an angle, the risk of hitting the boards with their helmets
//    first is greatly reduced. A leg or side or an arm will absorb most of the impact"*
//    (USA Hockey, *Introduction To Body Contact*, "Angling In"). Even better: **take the
//    puck off the wall before you get there**."
//
// ⚠️ WHY THIS IS DRAWABLE WHEN CASES 2 AND 3 ARE NOT. Case 2 is skates parallel, forearm and
// upper thigh to the boards, knees bent, lean into the impact. Case 3 is stick and gloves up
// and spread on the glass, arms out as a three-part shock absorber. Both are postures — a
// hip, a forearm, a chin — and a glyph in this notation has no facing, no limbs and no
// posture, so neither can be drawn and neither is. §6 itself says where Case 1 differs:
// "choosing your angle is a skating decision made several strides out". A decision made
// several strides out is a LINE, and a line is the one thing this notation is good at. The
// caption says in terms that the posture is the part the picture cannot carry, so that a
// reader does not take a drawn arrival for a complete instruction.
//
// ⚠️ THE PERPENDICULAR ARRIVAL IS NOT DRAWN BESIDE IT. Two routes into one corner, one good
// and one bad, was the first design and it fails twice over: their tips finish within a few
// feet of each other pointing different ways, which is the arrowheads-landing-on-each-other
// defect this corpus has already paid for, and the bad one is a line drawn head first into a
// wall. The contrast is carried in words. What the picture shows is the line that is right.
//
// ⚠️ AND THE FIRST VERSION OF THIS PICTURE WAS BUILT AND THROWN AWAY, WHICH IS WHY THE
// ARITHMETIC BELOW IS WRITTEN OUT. It started the skater at (63, 22) and used a bow of 18 to
// force the arrival parallel to the boards. Every number checked: the terminal tangent came
// out 8 degrees off the wall, the curve stayed 4.5 ft inside the dasher, nothing collided.
// RENDERED, it was a loop over the top of the faceoff circle, because a quadratic's bow
// rotates BOTH ends and rotating the finish onto the wall had swung the START through 70
// degrees — so the route left the skater heading straight ACROSS the ice at the boards,
// which is the opposite of the thing the section teaches, and the caption's own words "it
// leaves in open ice pointed at the corner" were false of the picture beneath them. No
// coordinate check could have seen that. Looking at it was the only thing that could.
//
// THE FIX IS A LONGER CHORD, NOT A BIGGER BOW. Starting the skater well up-ice makes the
// chord 46 ft, so a bow of 12 bends the finish onto the wall while moving the start through
// only 27 degrees — a gentle arc rather than a hook.
//
// Arithmetic, so the next editor can refute it rather than trust it. The chord
// (40, 14) -> (80, 37) has length 46.1 and unit (0.867, 0.499); the perpendicular is
// (-0.499, 0.867), so with bow 12 the control point is the chord midpoint (60, 25.5) plus
// (-0.499, 0.867) x 12 = (54.0, 35.9).
//   THE DEPARTURE is control - from = (14.0, 21.9), unit (0.539, 0.842) — up the ice and
//   toward the corner, 27 degrees off the chord. The skater sets off at the corner.
//   THE ARRIVAL is to - control = (26.0, 1.1), unit (0.999, 0.042) — running along the
//   boards. The wall's outward normal at (80, 37) is the radius of the corner arc, whose
//   centre is (72, 14.5) with radius 28: (8, 22.5)/23.9 = (0.335, 0.941). The dot product
//   is 0.3745, and off parallel is asin of that — equivalently 90 - acos — so the route meets
//   the boards 22.0 degrees off parallel. Drawn STRAIGHT from the same start the unit is the
//   chord's own (0.867, 0.499); its dot with the SAME normal is 0.7602, i.e. 49.5 degrees off
//   parallel — much nearer square to the wall. That difference IS the picture.
//   ⚠️ THIS LINE SAID "the dot product would be 0.539, which is 57 degrees", AND THE CAPTION
//   VOICED THE 57 TO A LISTENER. Two wrong steps landed on a plausible number: 0.539 is not a
//   dot product with anything — it is the x-component of the DEPARTURE unit (0.539, 0.842) two
//   lines above — and acos was then applied to it, where the 22-degree figure beside it had
//   correctly used 90 - acos. check_absolutes, check_geometry and check-arrivals all passed
//   throughout; nothing mechanical reads a caption's arithmetic. The caption now says "about
//   fifty". Re-derive both figures rather than trusting this comment.
//   THE CLEARANCE. y(k) rises monotonically to its maximum at the finish (dy/dk = 43.8 -
//   41.6k, which is positive across the whole curve), so the closest the line comes to the
//   dasher is at its own tip, 4.1 ft off it. Nothing here is drawn through the boards.
//
// WHERE THE PUCK IS, AND WHY THE ROUTE DOES NOT TOUCH IT. The puck sits against the wall
// 2.2 ft off the dasher, and the drawn line passes 3.3 ft inside it and carries on. That is
// not a miss. Taking a puck off the wall while travelling along the wall is a stick reaching
// sideways, and there is no stick symbol in either published key this corpus draws from —
// rules_primer.mjs records the same absence in terms. So what is visible is the body's line
// and the puck's place, and the gap between them is reach. It is also the section's own
// preferred outcome: "take the puck off the wall before you get there", which is why the
// route goes PAST the puck rather than stopping on it.

// You, coming back for it and still a long way out — which is the point, because the angle
// is chosen several strides before it is needed. `top-of-circle:right` is (54, 22).
const W_YOU = { at: 'top-of-circle:right', dx: -14, dy: -8 };    // (40, 14)
// The finish: along the boards and still moving, 4.1 ft off the dasher. Not into them, and
// not stopped on the puck.
const W_TO = { at: 'corner:right', dx: -2, dy: 3 };              // (80, 37)
// The puck, dead against the wall where a rim or a dump-in leaves it.
const W_PUCK = { at: 'corner:right', dx: -6, dy: 6 };            // (76, 40)
// The checker, inside the line you are skating — the reason the angle is a
// decision rather than a preference. He carries NO ROUTE, and that is deliberate: a route
// arriving on a person is a claim about contact, and whether he may make any is a question
// about your league that no picture can answer. His nearest approach to the drawn curve is
// 10.7 ft, so no mark is eating another.
const W_CHECKER = { at: 'top-of-circle:right', dx: 6, dy: -2 };  // (60, 20)

const angleIntoTheCorner = {
  id: 'angle-into-the-corner',
  owner: 'content/technique/body_contact_and_battles.md',
  half: true,
  width: 900,

  caption:
    'Going back for a puck in your own corner with a checker inside the line you are skating, and ' +
    'the only thing drawn is that line. It bends: it sets off pointed at the corner and finishes ' +
    'running along the boards rather than at them, meeting the wall about twenty-two degrees off ' +
    'parallel where the same journey drawn as a straight line would meet it at about fifty. ' +
    'That is the first and best of the three cases USA Hockey ranks for meeting a wall, and it is a ' +
    'decision made several strides out rather than at the boards, which is why the route is drawn ' +
    'from so far away: skating into the corners at an angle greatly reduces the risk of hitting the ' +
    'boards helmet first, and a leg or a side or an arm absorbs most of the impact instead. Better ' +
    'still is not to be there when it happens. The puck is drawn against the wall and the route ' +
    'passes a couple of feet inside it and carries on, because taking a puck off the wall on the ' +
    'move is a stick reaching sideways, and a chip, a rim or a reverse decided before you arrive ' +
    'takes you out of the collision altogether. ⚠️ What no picture can draw is how you meet the wall ' +
    'once you are there, and that half is not optional. Whether the player closing on you may check ' +
    'you at all depends on your age group, your league and the book they play under, and no diagram ' +
    'can tell you that — but nothing that follows depends on the answer. Never take that contact ' +
    'with your back to ' +
    'the boards, and never duck. Those are two separate injuries with two separate mechanisms: a ' +
    'back turned makes it a hit from behind, and USA Hockey addresses its warning about those to ' +
    'the player delivering one — even a light hit from behind could inflict a severe head or neck ' +
    'injury; and a chin tucked to the chest straightens the cervical ' +
    'spine, which USA Hockey ties to almost all on-ice cervical spine injuries on head-on contact ' +
    'with the boards or a goal post and says can happen at walking speed. So, in every league, ' +
    'checking or not — because unexpected contact happens in non-check hockey too and the boards ' +
    'and the goal posts are just as hard there — get your skates parallel ' +
    'to the wall, take it on your forearm and hip and never on the tip of your shoulder, knees bent, ' +
    'head up and chin off your chest.',

  describe:
    'The defensive half of the rink, the net being defended at the right and our goaltender in its ' +
    'crease. One of our forwards stands well up the ice in the middle of the zone, level with a ' +
    'point about fourteen feet outside the top of the faceoff circle on the side drawn at the top of ' +
    'the picture. A single curved forward-skating route leaves him and runs into the corner: it sets ' +
    'off up the ice and toward that corner, arcs gently outward as it goes, and finishes with an ' +
    'arrowhead in the corner about four feet off the side boards, pointing along them rather than ' +
    'into them. The puck is drawn hard against the boards a few feet before that arrowhead and ' +
    'about three feet outside the line of the route, so the route passes it and continues. An ' +
    'opposition forward stands inside the curve of that route, between it and the middle of the ice ' +
    'and nearer the goal than our forward, with no route drawn at all. Nothing in the picture shows ' +
    'contact between the two players, and ' +
    'nothing in it shows how a player meets the boards.',

  players: [
    { id: 'F', pos: 'F', at: W_YOU, label: 'you, several strides out' },

    { id: 'A1', team: 'opp', pos: 'F', at: W_CHECKER, label: 'inside you' },

    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
  ],

  routes: [
    // `skate` rather than `carry`: he does not have the puck yet, and the wave is the
    // skate-and-stickhandle mark for a player who does. The arrowhead is correct and is not
    // an arrival on anybody — the tip is 26.2 ft from the checker (this said 27), who lies
    // BEHIND it, so neither limb of the arrival invariant is engaged.
    { from: W_YOU, to: W_TO, kind: 'skate', bow: 12 },
  ],

  puck: W_PUCK,
};

// ---------------------------------------------------------------------------
// The inside lane, and the route it lengthens
// ---------------------------------------------------------------------------
//
// §10 "Loose Puck Races and 50-50 Pucks", "Arrive with body position, not just with
// speed". The section's own sentences, which this picture draws and nothing more:
//
//   "Winning the race is not the same as winning the puck. The player who arrives half
//    a step behind but *on the inside*, between the opponent and the puck, usually ends
//    up with it."
//
//   "A skater can use their body position while maintaining their skating lane, to force
//    an opponent to take a less direct route to the puck, so long as they do not use a
//    hand or arm to hold or block the opponent." (USA Hockey, quoted in §10.)
//
//   "**So: skate the inside lane. Make them go the long way round. Do not use your
//    hands.**"
//
//   "approach on an arc, not straight at the puck, so that you get there already turned"
//
// ⚠️ WHY THIS SECTION AND NOT §4 OR §7, WHICH TEACH THE SAME THING. Three subsections of
// this document say one idea: §4 "What that gives you" (NHL 56.1's "lengthen an
// opponent's path to the puck"), §7 "Arrive first — and arrive with position, not just
// speed", and this one. §10 is the only one of the three that writes the geometry as a
// LANE and a ROUTE — "skate the inside lane", "a less direct route to the puck", "approach
// on an arc" — and a lane and a route are the two things this notation can draw. §4's own
// vocabulary is a shoulder, a hip and a stance, and §7's is an arrival. One picture, and
// it belongs where the words are geometric. If a marker is ever wanted in §4 or §7 it
// should reference this id rather than a second drawing being made.
//
// ⚠️ AND IT IS DELIBERATELY NOT DRAWN AT THE BOARDS, though most 50-50 pucks are. §10's
// wall case is a separate subsection with its own hazards ("Protecting yourself on the
// boards"), and this document already owns a wall picture — `angle-into-the-corner`,
// referenced from §6 — whose whole subject is how a race that finishes at the wall has to
// be taken. Drawing this one in the corner too would put two routes into the same corner
// teaching two different things, and would drag a boards-safety instruction into a caption
// whose picture shows no boards contact. So the loose puck here sits in open ice, twelve
// feet off the dasher, and the caption says which case is drawn.
//
// ⚠️ THE FAINT DASHED LINE IS NOT A ROUTE AND NOT A MARKING ON THE ICE. It is the straight
// line from the opponent to the puck — the route he would take if nobody were in it — and
// it is drawn as an unfilled two-point zone, which is the device `shooting-lane-and-the-step`
// uses for the same job and discloses in its own caption in the same terms ("that line is
// not a marking on the ice and nothing travels along it"). It is there so the reader can see
// what the body position takes away. Without it the picture is two players skating, and the
// claim in the caption would have nothing under it.
//
// ⚠️ THE OPPONENT CARRIES NO ROUTE, AND THE OBVIOUS DESIGN DID. The first version gave him
// a bowed route swinging outside the arrival and finishing short of the puck on the far
// side. It fails twice. Two arrowheads then finish within about seven feet of each other
// pointing different ways, which is the arrowheads-landing-on-each-other defect this corpus
// has already paid for; and it authors a choice that is his, not the reader's — he might
// take the long way, or check up, or leave it. What the section claims is that the direct
// route is gone, and the dashed line plus a body standing on it is exactly that claim and
// no more. `angle-into-the-corner` gives its checker no route for the same reason.
//
// ⚠️ NO CONTACT IS DRAWN AND NONE IS IMPLIED. The two players never meet: the arrival is
// 24.8 ft from the opponent at the curve's closest approach to him, and he lies behind the
// tip rather than ahead of it, so neither limb of THE ARRIVAL INVARIANT in lib/rink.mjs is
// engaged. That is not incidental. §10's entitlement is an entitlement to OCCUPY ICE, and
// the same paragraph draws the line at the hands: the free hand may fend off and may not
// hold, pull, tug or grab. A picture that showed the two bodies meeting would be drawing
// the half the section spends its rules on.

// The loose puck: a rebound or a puck flipped out, sitting in open ice inside the faceoff
// circle. `faceoff-dot:right` is (69, 22), so this is (77, 26) — 12 ft up-ice of the goal
// line and 16.5 ft off the side boards, which at this x run straight at y = 42.5. Nothing
// here is a puck against a wall.
const IL_PUCK = { at: 'faceoff-dot:right', dx: 8, dy: 4 };        // (77, 26)

// The opponent, wide and up-ice, on the outside. `top-of-circle:right` is (54, 22).
const IL_OPP = { at: 'top-of-circle:right', dx: -20, dy: 12 };    // (34, 34)

// You, level with him up the ice and inside him — nearer the middle, which is what puts
// you in a position to get across his line rather than to trail him down it.
const IL_YOU = { at: 'top-of-circle:right', dx: -18, dy: -10 };   // (36, 12)

// WHERE YOU ARRIVE: on his line, seven feet short of the puck.
//
// Arithmetic, so the next editor can refute it rather than trust it. Every figure below is
// re-derivable from the four anchors and the bow, and none should be carried forward if any
// of them moves.
//
// IT IS ON HIS LINE, AND THAT IS THE WHOLE CLAIM. The dashed line runs (34, 34) -> (77, 26),
// i.e. y = 34 - (8/43)(x - 34). At x = 70 that is 34 - 6.698 = 27.302, and the arrival is
// drawn at (70, 27.3) — 0.002 ft off it. It sits 7.12 ft from the puck, outside the 3.275 ft
// of ink a forward's circle carries plus the puck disc's own 1.1, so no mark eats another.
//
// ⚠️ THE FIRST VERSION OF THIS PICTURE WAS GEOMETRICALLY IMPOSSIBLE AND EVERY DISTANCE IN IT
// CHECKED OUT. It had you at (30, 10) and him at (42, 36), and the arithmetic beside it was
// right about the arc, the clearances and the crossing. It was still false: he was 29.1 ft
// from the arrival point along his own line and your route to the same point was 47 ft, so
// the picture asserted that you win a lane you cannot reach first. NO CHECKER LOOKS AT THIS —
// `check-arrivals` measures clearances and never a race — and no clearance was wrong. The
// layout now carries the comparison explicitly:
//   HIS DISTANCE TO THE ARRIVAL, along the line he is drawn on: hypot(36, -6.7) = 36.62 ft.
//   YOURS, integrated along the DRAWN CURVE rather than taken off the chord: 38.40 ft, which
//   lies between the chord's 37.28 and the control polygon's 40.57 as a quadratic's length
//   must. ⚠️ Do not use the chord here: it under-reports by 1.1 ft, which is most of the
//   difference this comparison is about.
//   So you travel 1.78 ft further to the same patch of ice, which is the section's own
//   "arrives half a step behind but on the inside" and not a claim that you get there first.
//
// THE ARC, which is the second thing the section asks for and the one a still picture can
// show. The route is a quadratic Bezier with `bow: -8`: the chord (36,12) -> (70,27.3) has
// length 37.29 and unit (0.9118, 0.4103), the perpendicular is (-0.4103, 0.9118), so the
// control point is the chord midpoint (53, 19.65) plus (-0.4103, 0.9118) x (-8) =
// (56.28, 12.36).
//   THE DEPARTURE is control - from = (20.28, 0.36), 1.0 degree — he sets off straight up the
//   ice, inside him, rather than angling out at the puck.
//   THE ARRIVAL TANGENT is to - control = (13.72, 14.94), 47.5 degrees — running up-ice and
//   ACROSS his lane. The 46-degree swing between the two is the arc: "approach on an arc, not
//   straight at the puck". Drawn straight from the same start he would arrive on the chord's
//   own 24.2 degrees.
//   ⚠️ WHAT THE ARC DOES NOT DRAW, and the caption says so: the turn. §10's instruction is to
//   "turn your hips so your backside is between the opponent and the puck", and a glyph in
//   this notation HAS NO FACING. A tangent is the direction of travel and says nothing about
//   which way a body is pointed. Claiming the picture shows an arrival "already turned" would
//   be a caption outclaiming its picture.
//   ⚠️ AND THE BOW-TO-CHORD RATIO IS THE THING TO WATCH, NOT THE BOW. `angle-into-the-corner`
//   records a bow of 18 on a 46 ft chord rendering as a loop over the top of a faceoff circle,
//   because a quadratic's bow rotates BOTH ends. This is 8 on 37.29, a ratio of 0.215 against
//   that failure's 0.39 and against the 0.26 that worked there. Rendered and looked at, at
//   900 px and at 360 px.
//   IT NEVER CROSSES HIS LINE. x(k) = 36 + 40.57k - 6.57k² is monotone and y(k) = 12 + 0.71k +
//   14.59k² rises throughout. Sampled against the dashed line: at k = 0.5 the curve is at
//   y 16.00 against the line's 30.16; at k = 0.9, 24.46 against 27.83; at k = 0.98, 26.71
//   against 27.40. The curve runs BELOW the line the whole way and meets it only at the tip.
//   So the picture says he got across the line at the end of the race, not that he cut in
//   front of him early.
//   HOW FAR THE TWO PLAYERS STAY APART: the curve's closest approach to the opponent's anchor
//   at (34, 34) is 22.1 ft, at the start. Nothing here is drawn near anybody.
const IL_ARRIVE = { at: 'faceoff-dot:right', dx: 1, dy: 5.3 };    // (70, 27.3)

const insideLaneLongerRoute = {
  id: 'inside-lane-longer-route',
  owner: 'content/technique/body_contact_and_battles.md',
  half: true,
  width: 900,
  title: 'The inside lane',

  caption:
    'A loose puck neither team has, drawn in open ice in your own end with the net you are ' +
    'defending at the right — a rebound or a puck flipped out rather than one against a wall, ' +
    'because a race that finishes at the boards is a different case and the section treats it ' +
    'separately. Winning the race is not the same as winning the puck. The faint dashed line is ' +
    'the straight route the opposition forward would take to that puck; it is not a marking on ' +
    'the ice and nothing travels along it, and it is drawn only so you can see what your body ' +
    'position takes away. Your own route is the one thing here that is a skill: it leaves you ' +
    'inside him and arrives on that line, between him and the puck, so the direct way there is ' +
    'gone. What is left for him is a less direct route — USA Hockey’s own phrase — and that is ' +
    'deliberately not drawn, because which way he goes round is his choice and not yours. ' +
    'Watch the shape of your own route as much as its destination. It bends, because the ' +
    'instruction is to approach on an arc rather than straight at the puck, and the arc is what ' +
    'gets you there already turned rather than square; the turn itself is not drawn, because a ' +
    'marker on these diagrams has no facing at all. On this drawing you travel about two feet ' +
    'further to that patch of ice than he would along his straight line, which is the drawing’s ' +
    'geometry rather than a fact about hockey and is there so the picture does not quietly ' +
    'claim you win the race outright. Arriving half a step behind but on the inside usually ' +
    'wins the puck, and arriving first with your body in the wrong place is worse than arriving ' +
    'second with it in the right one. The rules are explicit that this is legal, and the two ' +
    'books quoted on it write it differently: USA Hockey has a skater entitled to the ice they ' +
    'occupy so long as they maintain their skating speed and body position between an opponent ' +
    'and the loose puck, and entitled separately to stand their ground; the NHL attaches no ' +
    'speed condition at all, allowing a player the ice he is standing on and not requiring him ' +
    'to move to let an opponent proceed. So do not read the skating-speed wording as meaning ' +
    'that stopping forfeits your ice. ⚠️ What is not legal is doing any of it with your hands. ' +
    'Your stick, arm, hand and skates may not obstruct an opponent’s route to the puck; the ' +
    'free hand may fend off an opponent or their stick and may never hold, pull, tug or grab, ' +
    'which is NHL and IIHF Rule 56.1, while USA Hockey writes that permission in its Casebook ' +
    'and conditions it, and Hockey Canada Rule 8.1 permits blocking a stick rather than holding ' +
    'one. Nothing here shows the two players meeting, and the rest of the arrival is not ' +
    'something a diagram can draw: hips turned so your backside is between the opponent and the ' +
    'puck, low and wide with your feet outside your shoulders, and your feet still moving.',

  describe:
    'The defensive half of the rink, the net being defended at the right and our goaltender in ' +
    'its crease. Two skaters. A loose puck is drawn on its own in open ice on the side at the top ' +
    'of the picture, inside the faceoff circle, about twelve feet up-ice of the goal line and well ' +
    'clear of the side boards. An opposition forward stands up-ice of it and wide, out toward the ' +
    'boards. A faint dashed line runs from him straight to the puck. One of our forwards stands ' +
    'level with him up the ice and well inside him, nearer the middle of the rink. A single curved ' +
    'forward-skating route leaves our forward: it sets off up the ice, arcs outward as it goes, ' +
    'and finishes with an arrowhead sitting on the dashed line about seven feet short of the puck, ' +
    'pointing across the ice rather than at the puck. No route is drawn for the opposition ' +
    'forward. The two players are never close to one another, and nothing in the picture shows ' +
    'contact between them.',

  // THE ROUTE HE WOULD HAVE TAKEN. A two-point unfilled zone, which the renderer draws as a
  // faint dashed line rather than a shaded region — the device `shooting-lane-and-the-step`
  // uses for its "old lane". Both ends are named positions plus offsets, so neither can drift.
  zones: [
    { points: [IL_OPP, IL_PUCK], label: 'the direct route', fill: 'none' },
  ],

  players: [
    // OURS, so OPEN; a forward, so a CIRCLE. Shape is the position and fill is the team.
    //
    // ⚠️ THE POSITION IS THE SECTION'S ONE SILENCE, so it is recorded rather than left to
    // look inevitable. §10 says "skater" throughout and names no position anywhere in the
    // subsection — a loose puck is contested by whoever is nearest, which is the whole point
    // of `loose-puck-who-goes` in playing_without_the_puck.mjs. But this notation has no
    // position-neutral glyph, and the commonest player in a 50-50 race is a forward. So both
    // skaters are circles and the caption says "you" and "the opposition forward" rather
    // than naming a job.
    { id: 'F', pos: 'F', at: IL_YOU, label: 'inside him' },

    { id: 'A1', team: 'opp', pos: 'F', at: IL_OPP, label: 'outside you' },

    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
  ],

  // NOT NUMBERED. One route cannot carry an order, and a badge on a single route would
  // imply a second one exists somewhere — which here would be the opponent's, and the
  // reason he has none is written out above.
  routes: [
    // `skate` rather than `carry`: he does not have the puck, and the wave is the
    // skate-and-stickhandle mark for a player who does. The arrowhead is correct and is not
    // an arrival on anybody — the only opposing skater lies 29 ft BEHIND the tip, so limb
    // (b) of the arrival invariant is not engaged and limb (a) has nothing ahead to clear.
    // The arrowhead rather than two bars because §10 asks in terms for the feet to keep
    // moving: "a stationary player on the wall gets pinned while one with momentum can
    // escape along the boards or spin out to the middle".
    { from: IL_YOU, to: IL_ARRIVE, kind: 'skate', bow: -8 },
  ],

  puck: IL_PUCK,
};

// ---------------------------------------------------------------------------
// Where a shot is blocked from
// ---------------------------------------------------------------------------
//
// §11 "Shot Blocking", "Shot Blocking: Technique", first instruction:
//
//   "**Get close.** The closer you are to the shooter, the more net you take away and the
//    less time the puck has to accelerate or change direction. Blocking from ten feet away
//    is far safer and more effective than blocking from three feet in front of your own
//    goalie, where a deflection is a goal."
//
// ⚠️ WHY THIS ONE INSTRUCTION AND NOT THE OTHER SIX. The rest of §11's technique list is
// shin guards front-on, a thigh, a hip, a body square to the puck, a head out of the lane,
// hands behind the body with the backs of the gloves out, a leg that must not lift and a
// stick that must not lead. Every one of those is a POSTURE, and a glyph in this notation
// has no facing, no limbs and no vertical axis — the same reason skating.md and
// puck_handling.md correctly own no diagram at all. "Get close" is the exception because it
// is a DISTANCE ALONG A LINE, and a distance along a line is a thing a rink diagram is for.
// The caption says so, so that a reader does not take a drawn position for a complete
// instruction: the picture is where you stand and none of how you stand.
//
// ⚠️ THE BAD POSITION IS NOT DRAWN BESIDE THE GOOD ONE, and it cannot be. The obvious design
// puts two blockers on the same line — one ten feet from the shooter, one three feet in front
// of the goaltender — so the reader sees the comparison the section makes. That would draw TWO
// PLAYERS. This notation has no way to say "the same player at a different distance", and two
// glyphs on one lane is a picture of a team with two men in the shot lane, which is a different
// and worse instruction. The contrast is carried in words, which is the same trade
// `angle-into-the-corner` records for the perpendicular arrival it refuses to draw.
//
// ⚠️ NO SHOT IS DRAWN EITHER, and the section is the reason. §11's own last read is "Stay on
// your feet until the puck is actually released — committing early is what a shot fake is
// designed to draw." A `shot` route in this picture would fix the moment at "released" and
// quietly delete that instruction from the frame it matters in. So what is drawn is the LANE
// the shot would take, faint and dashed, and the body standing in it.
//
// ⚠️ THE TEN FEET IS THE SECTION'S AND THE FOURTEEN IS THE DRAWING'S, and the caption says
// which is which. A forward's circle reaches 3.275 ft of ink and a defenceman's triangle 4.0,
// so two glyphs closer than 7.275 ft eat each other and the white halo punches a hole in
// whichever was drawn first. At the section's ten feet the two markers all but touch and the
// picture reads as a collision rather than a block. `oz-net-front-screen` makes the identical
// disclosure about its six-to-eight feet, in terms, and it is the honest move: draw it legibly
// and tell the reader to take the number from the words.

// The shooter: an opposition defenceman at the point. `point:right` is (25, 20), the
// blue-line end of the point area — rink.json's own note is emphatic that the point is the
// area just inside the blue line and not the line itself, and the caption does not claim
// otherwise because nothing here turns on it.
//
// ⚠️ A DEFENCEMAN, AND §11 DOES NOT SAY THAT. The section is about blocking any shot and
// names no shooter at all; a point shot is drawn because it is the shot an amateur is most
// often asked to block and because it is the one with room in it to show a distance. The
// glyph is a triangle because at the point the shooter usually is a D, and the caption says
// the instruction is about any shot rather than about this one.
const SB_SHOOTER = 'point:right';                                // (25, 20)

// The puck, off his blade toward the middle. 6.71 ft from his anchor, against 4.0 ft of ink
// for a triangle plus the puck disc's own 1.1 — a 1.61 ft gap. An earlier placement at
// 3.16 ft drew the disc inside the glyph, and one at 5.59 ft left only half a foot.
//
// ⚠️ AND `puck:` WAS MISSING FROM THE SPEC ALTOGETHER IN THE FIRST BUILD. This constant was
// defined, used to anchor the lane, and never handed to the renderer — so the picture drew a
// shot lane leaving a defenceman who had no puck, in a diagram whose whole subject is where
// that puck is going. Every coordinate in the file was right and nothing mechanical could
// see it. Found by rendering the SVG and looking at it.
const SB_PUCK = { at: 'point:right', dx: 6, dy: -3 };            // (31, 17)

// THE SHOT LANE: the straight line from that puck to the middle of the goal line, stopped
// short so it does not run through our own goaltender.
//
// Arithmetic. (31, 17) -> (89, 0) has slope -17/58 = -0.29310.
//   THE FAR END is drawn at (76, 3.81): 17 - 0.29310 x 45 = 3.810, so the point is on the
//   line, it is 13 ft short of the goal line, and it is 9.77 ft from the goaltender's mark at
//   (85, 0). Extended, it arrives at the middle of the goal line. A tip at the goal line
//   itself was drawn first and ran the dashes straight through the G.
//   ⚠️ THIS IS A LINE, NOT A REGION, and it is deliberately not shaded. A tinted wedge from
//   the puck to the two posts would be the clearest possible statement of "the more net you
//   take away" — and it would be false of this picture, because a player marker here is
//   nearly six feet across and would engulf the whole wedge near its apex, drawing a claim
//   that one body removes the entire shooting angle. §11 promises nothing of the kind: it is
//   explicit that blocking is "genuinely useful and genuinely dangerous". A line says where
//   the puck is going and claims nothing about how much of it a body covers.
const SB_LANE_END = { at: 'goal-line', dx: -13, dy: 3.81 };      // (76, 3.81)

// The blocker, on the lane and up at the shooter's end of it.
//   ON THE LANE: at x = 38.5 the line is at y = 17 - 0.29310 x 7.5 = 14.802, and this is
//   drawn at 14.8.
//   HOW CLOSE, AND TO WHAT: hypot(13.5, 5.2) = 14.47 ft from the shooter's anchor, and
//   hypot(46.5, 14.8) = 48.80 ft from the goaltender. The distances are the picture. He is at
//   the shooter's end of a 60 ft lane and nowhere near the end where a deflection is a goal.
//   He sits 7.82 ft from the puck, against 3.275 of circle ink plus the disc's 1.1.
const SB_BLOCKER = { at: 'point:right', dx: 13.5, dy: -5.2 };    // (38.5, 14.8)

const shotBlockGetClose = {
  id: 'shot-block-get-close',
  owner: 'content/technique/body_contact_and_battles.md',
  half: true,
  width: 900,
  title: 'Blocking close to the shooter',

  caption:
    'Where a blocked shot should be blocked from, drawn in your own end with the net you are ' +
    'defending at the right and your own goaltender in its crease. An opposition defenceman has ' +
    'the puck at the point; the faint dashed line is the straight path from that puck to the ' +
    'middle of your goal, which is not a marking on the ice and has nothing travelling along ' +
    'it — it stops short of your goaltender rather than through him, and it is drawn so you can ' +
    'see the one thing this picture is about, which is where along it you stand. Get close. The ' +
    'closer you are to the shooter, the more net you take away and the less time the puck has to ' +
    'accelerate or change direction, and blocking from ten feet away is far safer and more ' +
    'effective than blocking from three feet in front of your own goalie, where a deflection is a ' +
    'goal. Take the ten feet from those words and not off the picture: the marker is drawn about ' +
    'fourteen feet out instead, because a player marker on these diagrams is nearly six feet ' +
    'across, far wider than a player, and at ten feet the two markers would touch and read as a ' +
    'collision. A point shot is drawn because it is the shot with room in it to show a distance, ' +
    'and the instruction is about any shot. The blocker is drawn as a forward because this ' +
    'notation has no position-neutral shape and the section names none; read it as one body in ' +
    'the lane and not as an assignment. ⚠️ Blocking shots is genuinely useful and genuinely ' +
    'dangerous, and both of those matter. Nothing in the picture is the technique, and the ' +
    'technique is the half that hurts you, and it is equipment being asked to do its actual ' +
    'job — shin guards that cover shin and ankle, gloves not worn through in the palm. ' +
    'Shin guards front-on, thigh and hip, body square to ' +
    'the puck, head up and out of the shot lane, feet on the ice, hands behind your body with ' +
    'the backs of the gloves out — tucked in behind your shin pads is the form for a block taken ' +
    'on the ice and not one taken standing. Never turn your back, never turn sideways and never ' +
    'lift a leg, because all three expose what armour does not cover and turning away means you ' +
    'cannot see the puck. Do not lead with your stick: a puck deflected off an outstretched ' +
    'blade goes upward, often into your own face. Close with your feet rather than lunging, and ' +
    'stay on your feet until the puck is actually released, because committing early is what a ' +
    'shot fake is designed to draw. And there are places not to do this at all. Not on a ' +
    'two-on-one, where your job as the lone defender is the pass and the goalie has the ' +
    'shooter — though what that forbids is going to the ice at the shot, and some teams do coach ' +
    'a timed slide at the pass as their two-on-one method, which is a different act on a ' +
    // ⚠️ The slide was presented as a coach-sanctioned method with NO penalty exposure, in
    // the one voiced unit that teaches shot blocking end to end. USA Hockey's Casebook
    // exempts the drop-to-knees SHOT block and nothing else; a slide across a PASSING lane
    // is not exempted, and 639(b) is mandatory with no injury trigger.
    'different axis. It is not a free mistake either: under USA Hockey a slide that puts an ' +
    'opponent on the ice is tripping "regardless of who gains possession of the puck", and the ' +
    // ⚠️ The exemption was stated one condition short here, in the fact and in the body. The
    // Casebook's is narrower than "a knee-drop shot block": the momentum limb is part of it.
    // Dropping it widened a penalty exemption -- the direction that makes a hazard look LESS
    // penalised, which is the direction no reviewer stops on.
    'only exception the Casebook names is narrower than a shot block — it is dropping to your ' +
    'knees to block a shot "and their momentum carries them into the player shooting the puck, ' +
    'causing them to fall" (Rule 639, Situation 4). Rule 639(b) then makes "a major penalty plus a game misconduct penalty" ' +
    // ⚠️ "with nobody hurt" can be HEARD as a condition on the penalty rather than as a
    // statement that injury is not required. The body and the facts line say it the long way.
    'mandatory for one a referee judges to recklessly endanger an opponent, and nobody has to ' +
    'be hurt for it to be called. ' +
    'So ask your coach how they want it done. And not from a position where you ' +
    'are screening your own goaltender: either commit fully and take the shot or get out of the ' +
    'lane and let them see it, and the one thing you cannot do is stand half in the way with ' +
    'your eyes closed. How much your team blocks at all is a coaching choice rather than a law ' +
    'of hockey — some systems ask defenders to block aggressively and collapse in front of the ' +
    'goalie, others to take the lane away on their feet and let the goalie see everything, and ' +
    'neither is right in the abstract — so find out which yours plays, and ask your goalie what ' +
    'they want.',

  describe:
    'The defensive half of the rink, the net being defended at the right and our goaltender in ' +
    'its crease. Three players and no routes. An opposition defenceman stands at the strong-side ' +
    'point on the side drawn at the top of the picture, with the puck just off the blade toward ' +
    'the middle of the ice. A faint dashed line runs from that puck down the ice toward the ' +
    'middle of the goal, stopping about thirteen feet short of the goal line and well clear of ' +
    'the goaltender; extended, it would reach the middle of the goal line. One of our forwards ' +
    'stands squarely on that line about fourteen feet from the shooter, so he is at the ' +
    'shooter’s end of it and roughly fifty feet from his own goaltender. No shot is drawn, no ' +
    'route is drawn, and no second blocker is drawn anywhere on the line.',

  // THE LANE. A two-point unfilled zone, so the renderer draws a faint dashed line rather
  // than a shaded region. Both ends are named positions plus offsets.
  zones: [
    { points: [SB_PUCK, SB_LANE_END], label: 'the shot lane', fill: 'none' },
  ],

  players: [
    { id: 'D', team: 'opp', pos: 'D', at: SB_SHOOTER, label: 'the shooter' },

    // OURS, so OPEN; a forward, so a CIRCLE. `shooting-lane-and-the-step` draws the mirror
    // image of this player — an opponent standing in a shooter's lane — as a forward and
    // discloses the same silence in the same words: "read it as one body in the lane and not
    // as an assignment". §11 names no position for a shot blocker anywhere, and the one place
    // it does name a job it is the lone defenceman on a two-on-one, which is the case it tells
    // you NOT to block in.
    { id: 'F', pos: 'F', at: SB_BLOCKER, label: 'close to the shooter' },

    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
  ],

  puck: SB_PUCK,
};

export default [
  anglingYourRoute,
  netFrontWalkOut,
  cornerEscapeRoutes,
  angleIntoTheCorner,
  insideLaneLongerRoute,
  shotBlockGetClose,
];