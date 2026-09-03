/**
 * Diagrams for content/technique/body_contact_and_battles.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * §2 "Angling — Legal in Every League" describes; where the prose hedges, the
 * caption hedges.
 *
 * FIRST DIAGRAM EVER AUTHORED FOR content/technique/. Nothing in this directory
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
 * WHY A HALF SHEET. §2's geometry is a curve changing direction — the carrier's
 * route turning from inward to outward — and a full sheet renders every dimension
 * at half the size. The defended net is at the right, which is this corpus's
 * convention for a picture drawn from the defending side (all eight diagrams in
 * defensive_zone_coverage.mjs are `half: true` and say "the defended net at the right"
 * in their own describe text). The far net is not needed: nothing in §2 depends on
 * it.
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

export default [anglingYourRoute];
