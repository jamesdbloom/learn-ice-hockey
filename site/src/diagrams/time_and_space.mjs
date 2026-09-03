/**
 * Diagrams for content/hockey-iq/time_and_space.md.
 *
 * The section is the source of truth. Every player below is one its prose places,
 * and where the prose hedges, the caption hedges.
 *
 * WHY ONLY THREE, IN A DOCUMENT WITH EIGHT SECTIONS. This document is a hub: most
 * of its spatial ideas already have a picture somewhere else in the corpus, and a
 * second drawing of the same thing is a second place a correction has to reach.
 * Checked, diagram by diagram, before writing anything:
 *
 *   §2, the reverse ............. `breakout-reverse` draws it, including the
 *                                 reverse-versus-rim distinction this section's
 *                                 own parenthesis makes. Referenced, not redrawn.
 *   §3, delay and curl-back ..... `entry-delay-curl`.
 *   §3, the net and the boards .. `oz-behind-the-net`, `the-point-and-the-half-wall`.
 *   §4, gap control ............. `rush-gap-and-angle`.
 *   §4, angling ................. `angling-your-route`. The section says outright
 *                                 "do not learn it from this paragraph".
 *   §4, the active stick ........ `stick-in-lane-body-net-side`.
 *   §4, pressure with support ... `layer-not-converge`. Referenced, not redrawn.
 *   §5, the map ................. `strong-side-and-weak-side`, already referenced
 *                                 in this document before this file existed.
 *   §6, the rules ............... `the-trapezoid`, `offside-faceoff-location`,
 *                                 `icing-gaining-the-line`,
 *                                 `screen-the-goalie-sightline`.
 *
 * TWO THINGS THIS DOCUMENT WANTS DRAWN AND CANNOT BE, recorded so the next author
 * does not spend the afternoon rediscovering them:
 *
 *   §2's two cases. "You can have time with an opponent three feet away" and "you
 *   can have no time with an opponent twenty feet away" is the document's central
 *   model and it is the obvious diagram. It is UNDRAWABLE at three feet. A forward
 *   glyph is a circle of radius 2.9 ft under a 1.95-wide halo stroke centred on
 *   that radius, so its ink reaches 3.875 ft; two of them three feet apart are
 *   inside each other's bodies and the second one drawn erases the first's letter.
 *   Drawing them further apart and captioning "three feet" would be a picture
 *   disagreeing with its own caption, which is worse than no picture. The
 *   twenty-foot half on its own is `rush-gap-and-angle` seen from the other side.
 *
 *   §7's rink sizes. "The length is the same, so the change is entirely lateral"
 *   wants two sheets overlaid. The renderer draws one sheet, from rink.json, whose
 *   width is owned by rink_map_and_glossary.md. A second outline would be a
 *   dimension invented here.
 *
 * ASSUMES, and dies if any of them moves: site/src/data/rink.json AS ON DISK IN
 * THIS WORKING TREE — centre-point (25, 0), neutral-zone-mid (12, 0),
 * top-of-circle (54, +/-22), faceoff-dot (69, +/-22), half-wall (69, +/-38.5),
 * high-slot (69, 0), slot (76, 0), crease (86, 0) — and rink.mjs's glyph radius
 * 2.9 with its 0.75 outline and 1.95 halo stroke, and ARRIVAL = { glyph: 2.9,
 * noArrow: 9.0 }. Every clearance below is stated against those numbers.
 *
 * PERSONNEL IS NOT SHAPE. The published key has no neutral glyph — a circle is a
 * forward and a triangle a defenceman — so every glyph is a personnel claim
 * whether the diagram wants to make one or not. This document names almost
 * nobody: it says "you", "a defender", "two defencemen". Where it names a
 * position, the glyph follows it; where it does not, the caption says what was
 * drawn and that it is not part of the teaching.
 */

const OWNER = 'content/hockey-iq/time_and_space.md';

/* ------------------------------------------------------------------ *
 * 1 - Attack the seam, not the defender      (section 3, "Attacking
 *     into space, not at people")
 * ------------------------------------------------------------------ */

// The two opposing defencemen, STAGGERED, and this is a reading rather than the
// section's words — so it is disclosed in the caption.
//
// The section says only "drive the ice between the two defencemen rather than at
// the outside shoulder of one" and defines the seam as "the space neither has
// clearly claimed". A picture has to choose an arrangement, and level is the wrong
// one: content/systems/defending_the_rush.md:523 says "Both defencemen back up at
// the same speed, holding a flat line across the ice with the middle sealed
// between you. A staggered retreat opens a diagonal seam straight to the slot."
// Two defencemen drawn level with a seam shaded between them would contradict
// that document AND draw the carrier into ice it calls sealed.
//
// Anchored on `centre-point` (25, 0), "the middle of the blue line", because both
// are placed by their depth relative to their own blue line and their distance
// either side of the middle, which is exactly what that datum names.
const D_UP   = { at: 'centre-point', dx: -1, dy: 12 };   // (24, 12) stepped up
const D_BACK = { at: 'centre-point', dx: 10, dy: -10 };  // (35, -10) dropped off

// The carrier, and where his route stops.
//
// ARRIVAL, measured against rink.json as on disk in this working tree. Route runs
// (4, -6) -> (30, 1.5), bow 0, so the terminal tangent is the chord, (0.961, 0.277).
//   D_BACK (35, -10): 12.54 ft from the tip, in its forward half-plane (dot 1.61).
//     Over ARRIVAL.noArrow by 3.54 ft, so the arrowhead is allowed. Miss 12.4 ft.
//   D_UP (24, 12): 12.10 ft, dot -2.86, so BEHIND the tip and out of scope anyway.
//   The opposing goaltender is 57 ft away and form (a) excludes him regardless.
const CARRIER    = { at: 'neutral-zone-mid', dx: -8, dy: -6 };  // (4, -6)
const CARRIER_TO = { at: 'centre-point', dx: 5, dy: 1.5 };      // (30, 1.5)

const attackTheSeam = {
  id: 'attack-the-seam',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'Attacking the seam instead of a defender. The seam is the gap between two defenders ' +
    'that neither has clearly claimed — space by ambiguity rather than by distance. Nothing ' +
    'marks it on the ice and it is not a place on the rink: it appears wherever two opponents ' +
    'have not settled whose job you are, and it moves as they move. Here the carrier drives ' +
    'the ice between the two defencemen rather than at the outside shoulder of one, which ' +
    'forces a decision and a conversation between two players instead of a reaction from ' +
    'one. If they both take him, his teammates are left against whoever is behind them; if ' +
    'neither does, he is through. The two defencemen are drawn staggered, one stepped up and ' +
    'one dropped off, because that is what an unclaimed gap looks like: if two defencemen ' +
    'retreat level with each other and at the same speed, they seal the middle between them ' +
    'and there is nothing here to attack. Where a defence chooses to meet a rush is a ' +
    'coaching choice and not a law, so read this as one arrangement and not the only one, ' +
    'and the shaded band as one instant rather than a marking. The carrier’s route stops at the ' +
    'mouth of the seam, short of both defencemen: which of them moves decides what happens ' +
    'next, no contact is drawn, and a still picture cannot show either. The two wide ' +
    'teammates carry no routes because this section fixes only the carrier’s line.',

  describe:
    'The attacking half of the rink, the opposition net at the right, the attack moving left ' +
    'to right. Two opposition defencemen are drawn as solid triangles near their own blue ' +
    'line, staggered rather than level: one is stepped up to the line on the upper side of ' +
    'the ice, the other is about ten feet deeper into the zone on the lower side. A shaded ' +
    'band, labelled "the seam", runs from the gap between the two of them toward the net, ' +
    'ending level with the tops of the faceoff circles. Three own players are drawn as open ' +
    'circles: the puck carrier coming up the middle from near centre ice, with the puck on ' +
    'his stick and a skate-and-stickhandle route that ends inside the mouth of the shaded ' +
    'band, and two teammates wide on either side, a little ahead of him, with no routes ' +
    'drawn. ' +
    'The opposition goaltender is in his crease.',

  zones: [
    {
      // The seam, drawn as the lane between the two defencemen.
      //
      // Its NEAR edge is the perpendicular to the line joining them, six feet
      // either side of its midpoint: D_UP (24, 12) to D_BACK (35, -10) is
      // (11, -22), length 24.6, unit (0.447, -0.894); the midpoint is (29.5, 1),
      // so the two ends are (26.8, 6.4) and (32.2, -4.4), rounded to the coordinates
      // below. Six feet because that is one glyph body either side of the middle of
      // the gap, not because anything says the seam is twelve feet wide — nothing
      // does, and the caption says the band is an instant rather than a marking.
      //
      // Its FAR edge is drawn at the tops of the faceoff circles only so the
      // shading has an edge at all. The seam runs on toward the slot and nothing
      // gives it a depth; the same is true of the shaded middle in
      // `rush-gap-and-angle` and `angling-your-route`, which say so in the same way.
      points: [
        { at: 'centre-point', dx: 2, dy: 6.4 },      // (27, 6.4)
        { at: 'top-of-circle:right', dy: -15 },      // (54, 7)
        { at: 'top-of-circle:left', dy: 17 },        // (54, -5)
        { at: 'centre-point', dx: 7, dy: -4.4 },     // (32, -4.4)
      ],
      label: 'the seam',
    },
  ],

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: 1 } },   // (87, 0)
    // Triangles, because the section says defencemen: "drive the ice between the
    // two defencemen".
    { id: 'D', team: 'opp', pos: 'D', at: D_UP,   label: 'stepped up' },
    { id: 'D', team: 'opp', pos: 'D', at: D_BACK, label: 'dropped off' },
    // Generic `F`: the section gives none of the three attackers a role name, and
    // bare numerals are the other key's position numbering and must never label a
    // player here. Forwards because the section is describing a rush attacking a
    // pair of defencemen; which three of your players they are is not stated and
    // is not drawn.
    { id: 'F', pos: 'F', at: CARRIER, label: 'drives the seam' },
    { id: 'F', pos: 'F', at: { at: 'neutral-zone-mid', dx: 4, dy: 26 } },   // (16, 26)
    { id: 'F', pos: 'F', at: { at: 'neutral-zone-mid', dx: 4, dy: -26 } },  // (16, -26)
  ],

  routes: [
    // `carry`, not `skate`: the section's player has the puck, and a puck
    // carrier's route is the skate-and-stickhandle wave.
    { from: CARRIER, to: CARRIER_TO, kind: 'carry' },
  ],

  // 5.1 ft from the carrier's anchor, so it clears his 3.875 ft of ink.
  puck: { at: 'neutral-zone-mid', dx: -3, dy: -7 },   // (9, -7)
};

/* ------------------------------------------------------------------ *
 * 2 - Deny the reception, not the pass       (section 4, "Deny the
 *     reception, not the pass")
 * ------------------------------------------------------------------ */

// WHERE THE SECTION PUTS NOBODY. It says "the receiver" and "the passing lane"
// and names no positions at all. A picture has to choose, so it draws a pass from
// the wall into the middle, in your own end — the direction this document's
// §"Take away the middle first" says is worth the most, since "the middle of the
// ice is worth more than the outside, in every zone". That choice is a reading
// rather than the section's words, so the CAPTION says in terms that it is one
// instance and that the read is the same wherever the pass goes.
const PASSER   = 'half-wall:right';                          // (69, 38.5)
const RECEIVER = 'high-slot';                                // (69, 0)

// The pass stops six feet short of the receiver rather than on him, so that the
// arrowhead — 2.68 ft of it, reaching back from the tip — is not buried in his
// 3.875 ft of ink. 32.5 ft of route less 3.875 of the passer's glyph less 2.68 of
// head leaves ~26 ft of visible dashed line, which is ten full 2.4/1.8 cycles.
const PASS_TO = { at: 'high-slot', dy: 6 };                  // (69, 6)

// The covering player's route. `pressure`, which ends in the key's two bars, NOT
// an arrowhead: it finishes on a patch of ice, and a bar says arrive and contain
// where an arrowhead says keep going through. It is also what makes the arrival
// rule meetable here at all — the tip is 6.5 ft from the receiver's anchor, well
// inside ARRIVAL.noArrow, and an arrow-ended route could not be drawn at that
// distance. The nearer of the two bars sits 5.98 ft from his anchor, which is
// 2.1 ft clear of the 3.875 ft his glyph's ink reaches.
//
// Measured, so that a reviewer who recomputes it is not surprised: the terminal
// tangent runs 2.61 ft from the receiver's anchor — inside ARRIVAL.glyph, i.e.
// through the body, if this route carried an arrowhead. It does not, and that is
// the point: both forms of the rule are scoped to ARROW-ENDED kinds, because a
// pressure route aimed at its target fails form (a) by construction and
// terminating in bars is exactly what makes it safe. The bars themselves, 2 ft
// either side of the tip across travel, land 5.98 and 7.53 ft from the receiver's
// anchor, so the nearer of them clears his 3.875 ft of ink by 2.1 ft.
//
// LENGTH IS A CLAIM HERE, so it is not chosen for looks. The route is 12.1 ft.
// A 32 ft pass is in the air for well under a second, and a skater covers about
// this much ice in that time; a 25 ft route drawn to the same arrival would be a
// picture of somebody who cannot actually get there. It was 10.3 ft in the first
// render, where the two terminal bars — 2 ft either side of the tip — were nearly
// a fifth of the whole route and read as a blob rather than as a mark.
//
// The route runs (81, 13) -> (75, 2.5): it starts NET-SIDE of the receiver and
// stays there, never reaching x = 69, so it never enters the passing lane. That
// is the section's whole point — "rather than lunging at the passing lane" — and
// the lunge is deliberately not drawn.
const COVER      = { at: 'slot', dx: 5, dy: 13 };            // (81, 13)
const COVER_TO   = { at: 'slot', dx: -1, dy: 2.5 };          // (75, 2.5)

const denyTheReception = {
  id: 'deny-the-reception',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'Denying the reception rather than the pass. You will spend a career trying to intercept ' +
    'passes and mostly failing, because passes are fast and you are guessing — and a lunge ' +
    'that misses leaves you out of position at the worst moment. So instead of lunging at ' +
    'the lane, take a route that arrives on the receiver at the moment the puck does, ' +
    'between them and your own net, so that the option they wanted — turning toward your ' +
    'goal — is the one you have taken away. The pass then works and gains them nothing, ' +
    'because they have to turn back with you on them; and a receiver forced to catch a puck ' +
    'while somebody is closing loses their scan, which is a second of blindness you created ' +
    'without touching anybody. This is drawn as one instance, a pass from the wall into the ' +
    'middle of your own end, because a picture has to put people somewhere — the read is the ' +
    'same wherever the pass goes. Three things it cannot show. Your stick: this notation has ' +
    'no stick symbol, and the section wants the blade on the receiver’s blade or in the ' +
    'lane they are receiving through. The timing, which is the whole play — the pass and the ' +
    'covering run are one instant here, not one after the other. And what you do in the last two feet: the ' +
    'route ends in two bars rather than an arrowhead because it finishes on a patch of ice ' +
    'and not on a person, no contact is drawn here, and what an arrival like this may end in ' +
    'depends on whether your league allows body checking. Come from where the receiver can ' +
    'see you, and never finish into the back of a player who is turned away from you. The ' +
    'covering player is drawn as a forward; who takes this job depends on the coverage your ' +
    'team plays, and the read is the same for a defenceman.',

  describe:
    'Your own end, your net at the right and your goaltender in the crease. Two opposition ' +
    'players are drawn as solid circles: one on the boards level with the faceoff dot with ' +
    'the puck, and one in the middle of the ice level with the faceoff dots, in the high ' +
    'slot. A dashed passing route runs from the first to the second, stopping just short of ' +
    'him. One own player, an open circle, stands between the receiver and your net and a ' +
    'little to the puck side; his route curves out toward the receiver and ends in two short ' +
    'bars across the line, about six feet short of him, on the net side. It does not cross ' +
    'the passing lane at any point. The two routes are drawn as one instant rather than as a ' +
    'sequence, and neither is numbered.',

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease', dx: 1 } },      // (87, 0), your own
    { id: 'A1', team: 'opp', pos: 'F', at: PASSER,   label: 'the pass is made' },
    { id: 'A2', team: 'opp', pos: 'F', at: RECEIVER, label: 'the receiver' },
    // A forward. The section says "you" and nothing else; see the caption, which
    // discloses the choice and says the read does not depend on it.
    { id: 'F', pos: 'F', at: COVER, label: 'arrives as the puck does' },
  ],

  // NOT `numbered`. The section's instruction is "arrive as the puck does" — the
  // two routes are one instant, and numbering them would say one preceded the
  // other, which is the opposite of the teaching.
  routes: [
    { from: PASSER, to: PASS_TO, kind: 'pass' },
    { from: COVER, to: COVER_TO, kind: 'pressure', bow: 1.5 },
  ],

  // 5.0 ft off the passer's anchor, clear of his 3.875 ft of ink.
  puck: { at: 'half-wall:right', dx: -4, dy: -3 },           // (65, 35.5)
};

/* ------------------------------------------------------------------ *
 * 3 - Show one shoulder to open the other    (section 3, "Deception",
 *     the "showing one option to open another" bullet)
 * ------------------------------------------------------------------ */

// "Skate at a defender's inside shoulder and they close the middle, which opens
// the outside." Both halves are the section's own sentence, so both are drawn:
// the carrier's line at the inside shoulder, and the defenceman's line closing
// the middle. The mirror case in the same bullet — outside shoulder, defender
// widens, middle opens — is named in the caption and not drawn, because drawing
// two contradictory routes off one player would read as one player doing both.
const DEF        = { at: 'centre-point', dx: 11, dy: 28 };   // (36, 28)
const DEF_TO     = { at: 'centre-point', dx: 9, dy: 17 };    // (34, 17)

// ARRIVAL, measured against rink.json as on disk in this working tree. The
// carrier's route runs (8, 30) -> (25, 25.5), bow 0, terminal tangent
// (0.966, -0.256). The tip is on the blue line: he shows the shoulder as he
// arrives at it.
//   DEF (36, 28): 11.28 ft from the tip and in its forward half-plane (dot 9.99),
//     so it is in scope and it is over ARRIVAL.noArrow by 2.28 ft — the arrowhead
//     is allowed. Miss = 5.23 ft, above ARRIVAL.glyph by 2.33 ft and above the
//     4.6 ft his triangle and its halo actually cover, so the extended ray passes
//     outside the ink as well as outside the body.
//   That miss is deliberately the smallest in this file and cannot be much larger:
//   the section's instruction IS to aim near a shoulder. The aim point is five
//   feet inside the defenceman's anchor, which is what buys the clearance, and
//   the route is stopped eleven feet short because "you are not trying to beat
//   them at the point of contact" — the section's words, and the reason the line
//   has to end before it gets there rather than at him.
// The defenceman's own route (36, 28) -> (34, 17) has the reader's carrier 29 ft
// away and BEHIND its tip (dot -8.14), so it is out of scope in both forms.
//
// ⚠️ THREE THINGS HERE WERE FOUND BY RENDERING AND ARE INVISIBLE IN THE NUMBERS,
// so they are recorded rather than silently fixed. (1) The carrier first stopped
// 13.9 ft along; at lambda 5.0 that draws two humps under a full-size arrowhead
// and reads as a stub rather than as a drive. It is 17.6 ft now. (2) The shaded
// band was first drawn 2 ft from the defenceman, and his glyph's 4.6 ft of halo
// punched a white notch through the fill and its dashed outline; he now stands
// 6 ft clear of the edge. (3) The band was first a region of my own construction,
// "the outside", 12 ft wide with a 20 ft label lying across it. It is now THE
// MIDDLE, which is the corpus's own band and is what the section says the
// defenceman closes — sides on the two faceoff-dot lines, exactly as
// `rush-gap-and-angle`, `angling-your-route` and `nz-back-off-at-the-line` draw
// it. Those three already disagree about its DEPTH and say so; nothing defines a
// depth for them to conflict about, and this one says so too.
//
// ONE THING RECORDED RATHER THAN FIXED. Extended far enough, the carrier's
// terminal tangent passes 8.79 ft from the OPPOSING GOALTENDER, 64 ft beyond the
// arrowhead and at the far end of the rink. Form (a) excludes goaltenders
// outright and form (b) fires only inside 9 ft, so nothing reports it; the
// invariant names this as a known gap rather than an oversight, and says plainly
// that a ray crosses the rink and that no principled bound is available.
const WIDE       = { at: 'neutral-zone-mid', dx: -4, dy: 30 };  // (8, 30)
const WIDE_TO    = { at: 'centre-point', dy: 25.5 };            // (25, 25.5)

const showAShoulder = {
  id: 'show-one-shoulder-open-the-other',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'Showing a defender one option in order to open another — space created in the ' +
    'defender’s mind before it exists on the ice. The carrier is wide, and his line is ' +
    'aimed at the defenceman’s inside shoulder, the shoulder toward the middle of the ' +
    'ice; the defenceman closes the middle — the shaded band, whose sides are the two ' +
    'faceoff-dot lines — and the ice outside it, between him and the boards, is what opens. The mirror is not drawn and works the ' +
    'same way: skate at the outside shoulder, the defenceman widens, and the middle opens ' +
    'instead. You are not trying to beat him where the two lines meet — you are trying to ' +
    'make him commit before you have decided, which is why the carrier’s line stops well ' +
    'short of him and why no contact is drawn. Two honest limits. A defender who does not ' +
    'bite gives you nothing, so read this as a picture of a defender who moved and not as a ' +
    'promise that he will; and deception costs you a beat, so with two forecheckers closing ' +
    'and your back to the boards, fake nothing and make the simple play. Nothing here is ' +
    'painted on the ice either: the band’s sides are the two faceoff-dot lines, which ' +
    'are not painted, and its ends are drawn only so the shading has an edge — the middle ' +
    'is a lane running the length of the rink and nothing gives it a depth.',

  describe:
    'The attacking half of the rink, the opposition net at the right, the attack moving left ' +
    'to right. One own player, an open circle, carries the puck wide on the upper side of ' +
    'the ice near centre ice. One opposition defenceman, a solid triangle, is between him ' +
    'and the blue line, out toward the same side and a few feet outside the faceoff-dot ' +
    'line. The carrier’s skate-and-stickhandle route runs toward the defenceman’s ' +
    'inside shoulder — the side nearer the middle of the ice — and stops on the blue line, ' +
    'about eleven feet short of him. A shaded band labelled "the middle" fills the centre of ' +
    'the zone, its sides on the two faceoff-dot lines and its ends at the blue line and the ' +
    'tops of the faceoff circles. A second route runs from the defenceman inward, about ' +
    'eleven feet, ending inside that band. The opposition goaltender is in his crease.',

  zones: [
    {
      // THE MIDDLE, and this is the corpus's own band rather than one built here:
      // its sides are the two faceoff-dot lines, which is how `rush-gap-and-angle`,
      // `angling-your-route` and `nz-back-off-at-the-line` all draw it.
      //
      // Its ENDS are drawn only so the shading has an edge. The middle is a lane
      // running the length of the rink and nothing gives it a depth, which is why
      // those three diagrams already draw it at three different depths and each
      // says so; check_zones.py reports one label at several areas, and they are
      // not in conflict because there is nothing defined for them to conflict
      // about. Here it runs from the attacking blue line to the tops of the
      // circles, which is the ice a carrier attacking the line is choosing between.
      //
      // The near end is written off `neutral-dot`, which sits 5 ft OUTSIDE the
      // blue line in the neutral zone, so dx +5 lands exactly on the line at the
      // dots' own y — the same construction `nz-back-off-at-the-line` uses.
      points: [
        { at: 'neutral-dot:right', dx: 5 },        // (25, 22)  the blue line
        'top-of-circle:right',                     // (54, 22)
        'top-of-circle:left',                      // (54, -22)
        { at: 'neutral-dot:left', dx: 5 },         // (25, -22)
      ],
      label: 'the middle',
    },
  ],

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: 1 } },   // (87, 0)
    // A triangle, because he is a defenceman: the section's sentence is about
    // skating at "a defender's" shoulder and this draws the one you meet wide on
    // an entry, which is a defenceman.
    { id: 'D', team: 'opp', pos: 'D', at: DEF, label: 'closes the middle' },
    { id: 'F', pos: 'F', at: WIDE, label: 'shows the inside shoulder' },
  ],

  routes: [
    { from: WIDE, to: WIDE_TO, kind: 'carry' },
    // The defenceman's reaction. `skate`: he has no puck.
    { from: DEF, to: DEF_TO, kind: 'skate' },
  ],

  // 4.5 ft off the carrier's anchor, clear of his 3.875 ft of ink.
  puck: { at: 'neutral-zone-mid', dy: 28 },                  // (12, 28)
};

export default [attackTheSeam, denyTheReception, showAShoulder];
