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

export default [anglingYourRoute, netFrontWalkOut, cornerEscapeRoutes, angleIntoTheCorner];