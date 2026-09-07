/**
 * Diagrams for content/systems/zone_entries.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * TWO CONVENTIONS THIS FILE COMMITS TO, BOTH DELIBERATE:
 *
 * 1. A ZONE ENTRY CROSSES THE BLUE LINE, so nothing here is cropped at it.
 *    `half: true` frames centre red line to end boards — the whole attacking zone
 *    plus 25 ft of neutral zone, which is enough run-up to show an approach. Only
 *    the flip over a trap uses `half: false`, because a flip is released from your
 *    own end of the neutral zone and there is no honest way to draw the three-man
 *    wall it goes over without the far half of the sheet.
 *
 * 2. A DUMPED PUCK IS DRAWN WITH THE KEY'S "PASSING" SYMBOL — dashed line,
 *    arrowhead. The published key (see the header of scripts/lib/rink.mjs) has
 *    exactly two symbols for a puck travelling without a stick on it: "Passing"
 *    (dashed) and "Shooting" (double line). The section says "fire", "shoot" and
 *    "lift" of the various dump-ins, but the double line reads as a shot at the
 *    net and would teach the wrong thing five times over. Dashed is used for every
 *    puck that leaves a stick and is not a shot at goal, in all five dump-in
 *    diagrams, so the line style has one meaning across the set. This is a choice
 *    between two published symbols, not an invented one — but it is a choice, and
 *    it is recorded here so a reviewer can overturn it in one place.
 *
 * WHAT IS DELIBERATELY NOT DRAWN, so its absence is not read as an oversight:
 *
 *  - The finish of a forechecker's angle (section 8, "Angle, don't chase").
 *    site/src/diagrams/forechecking_systems.mjs already declined to draw this and
 *    records two failed attempts at it; angling is movement over time and a still
 *    frame asserts a finishing direction it cannot justify. The chase routes here
 *    all stop short and up-wall of the retriever for the same reason.
 *  - Any route that finishes into a player facing the boards. A check from behind
 *    is a major plus an automatic game misconduct and the corpus treats it as a
 *    safety matter, so no opposition player in this file has an own-team route
 *    ending behind them.
 *  - The trapezoid's dimensions. The renderer paints it from src/data/rink.json,
 *    which takes Rule 1.8 and is checked against
 *    content/foundation/rink_map_and_glossary.md by scripts/check_geometry.py.
 *    Nothing in this file restates those figures, and no caption carries a number
 *    for them — that document spends four paragraphs on why the commonly-quoted
 *    ones are stale.
 */

// A caption clause that appears in more than one diagram is imported, never
// retyped: a sentence that appears twice is a sentence that can drift once, and
// this one already had. See rule69_clauses.mjs for why all four still say it.
import { CREASE_LINE_IS_THE_CREASE, REFEREE_JUDGEMENT } from './rule69_clauses.mjs';

// ---------------------------------------------------------------------------
// 1. Three lanes, and the carrier last to the line — section 4.
// ---------------------------------------------------------------------------

// The two wide players are ON the paint. The section wants them "at the line, at
// speed, onside, before the puck gets there", and the puck below has not crossed,
// so the picture is legal as drawn under every book in the document.
const WIDE_R = { at: 'blue-line', dy: 31 };            // (25, 31)
const WIDE_L = { at: 'blue-line', dy: -31 };           // (25, -31)
// "Half a stride to a full stride behind" — a stride is on the order of six or
// seven feet, so seven feet back of the line while the wingers are on it.
const LAST_MAN = { at: 'blue-line', dx: -7 };          // (18, 0)

const threeLanes = {
  id: 'entry-three-lanes',
  title: 'Three lanes at the line',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'Three attackers arriving at the attacking blue line in three lanes — one wide on each ' +
    // ⚠️ "the paint" here means the BLUE LINE's twelve inches, a sense zone_entries.md
    // defines at :131. But this caption is BORROWED into how_to_watch_hockey.md, which
    // defines nothing -- and the glossary at rink_map_and_glossary.md:629 says the paint is
    // the CREASE. 10 of 12 captions use the crease sense. Voiced alone, a listener was told
    // two wingers arriving at speed stand in the goal crease, sixty-four feet away.
    'side, one through the middle — drawn at the instant the two wide players are already on ' +
    'the blue line at speed and the puck is still a stride short of it. That order is the whole ' +
    'point: if the carrier arrives first the supports are behind the play and the defence can ' +
    'collapse on one player, so the carrier wants to reach the line half a stride to a full ' +
    'stride behind the wingers, and arriving with speed is not the same as arriving early. ' +
    'The wide players are onside here because the puck has not yet completely crossed, which ' +
    'is exactly what the trail-skate drag is for. Which of the three carries, whether your ' +
    'team crosses lanes at all, and whether the wide lanes are held strictly are coaching ' +
    'choices that vary enormously — this is drawn with the carrier in the middle lane setting ' +
    'the clock, and you should ask your coach what your team wants before you decide you know.',

  describe:
    'The attacking half of the rink, opposition net at the right. Three own forwards approach ' +
    'the blue line in three lanes: one wide near each side wall, level with the line, and one ' +
    'in the middle seven feet short of it with the puck. Two opposition defencemen are inside ' +
    'the zone, backing in, roughly between the faceoff dots, with their goaltender in the ' +
    'crease. Three routes: each wide player continues into the zone down their own lane, and ' +
    'the carrier carries the puck across the line through the middle.',

  players: [
    // Opposition. Two defencemen backing in — the document's own defensive summary
    // has them "roughly between the faceoff dots" (the dots are at y +-22, so
    // between them is |y| < 22). They are drawn without routes and without a
    // system label, because which structure a defence uses at the line is a
    // coaching choice the section is explicit about.
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 15, dy: 12 } },   // (40, 12)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 15, dy: -12 } },  // (40, -12)

    // Own team. The frozen shape is the lesson: two on the line, one behind it.
    { id: 'F', pos: 'F', at: WIDE_R,   label: 'wide lane, at the line' },
    { id: 'F', pos: 'F', at: WIDE_L,   label: 'wide lane, at the line' },
    { id: 'F', pos: 'F', at: LAST_MAN, label: 'carrier, a stride behind' },
  ],

  // Not numbered. Numbering would assert an order between the two wide players,
  // and the section wants all three crossing "within about a second of each
  // other" — the order that matters is carried by where the glyphs are, not by
  // the arrows.
  routes: [
    { from: WIDE_R, to: { at: 'top-of-circle:right', dx: -4, dy: 6 }, kind: 'skate' },  // (50, 28)
    { from: WIDE_L, to: { at: 'top-of-circle:left', dx: -4, dy: -6 }, kind: 'skate' },  // (50, -28)
    // Long enough to read as a carry rather than a wiggle: at 14 ft the wave
    // rendered as a single squiggle with the arrowhead almost on the glyph.
    // It stops well short of both defencemen (they are at (40, +-12)).
    { from: LAST_MAN, to: { at: 'blue-line', dx: 12 }, kind: 'carry' },                 // (37, 0)
  ],

  // Behind the line and to one side of the carrier. It must not have crossed:
  // the two wide players' legality depends on it.
  puck: { at: 'blue-line', dx: -3, dy: 3 },   // (22, 3)
};

// ---------------------------------------------------------------------------
// 2. The wide entry — section 3.
// ---------------------------------------------------------------------------

const WIDE_CARRIER = { at: 'blue-line', dx: 8, dy: 36 };   // (33, 36) — just inside
                                                           // the line, on the wall
const NET_DRIVER = { at: 'high-slot', dx: -10, dy: 4 };    // (59, 4)

const wideEntry = {
  id: 'entry-wide',
  title: 'The wide entry',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'The wide entry: the carrier crosses the line outside the defenceman, down the boards, and ' +
    'goes for the goal line or below it — so the defender has to turn and skate, and every ' +
    'stride he takes toward the boards is a stride away from the front of his own net. It only ' +
    'works with the two supports drawn here: one driving the net so ' +
    'that the carrier has somewhere to put the puck when he reaches the goal line, and a third ' +
    'high for the back-door or point option. Going wide with nobody behind you is not an attack ' +
    'but a slow dump-in with extra steps, because you arrive alone below the goal line with the ' +
    'defence between you and the net. No contact is drawn: the defender is beaten by having to ' +
    'turn, not by being hit. The net drive stops at the blue paint: live at the edge of it, but ' +
    'keep your feet out of the paint and off ' + CREASE_LINE_IS_THE_CREASE +
    '. Screening from outside the ' +
    'crease without contact is normally legal; what risks the goal is entering the paint, or ' +
    'making contact with the goaltender — any contact once you are in the crease, and more ' +
    'than incidental contact outside it. That is Rule 69 under both the NHL and the IIHF, and it ' +
    'reads the rule’s structure rather than anything either book states in terms; ' +
    REFEREE_JUDGEMENT,

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward has just ' +
    'crossed the blue line wide on the right wall with the puck, outside an opposition ' +
    'defenceman who is inside him. A curved route carries the puck down the boards to the goal ' +
    'line. A second own forward drives from the high slot to the front of the net, stopping ' +
    'short of the crease. A third own forward waits high on the far side for the back-door or ' +
    'point option. A second opposition defenceman stands in front of his own net and the ' +
    'goaltender is in the crease. The beaten defenceman is drawn with no route, because the ' +
    'route he would have to skate finishes at a player travelling along the wall and that is a ' +
    'shape that is not drawn here.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // The defenceman being beaten: inside the carrier and level with him, which is
    // what "outside the defenceman" means.
    { id: 'D',  team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 12, dy: 27 },  // (37, 27)
      label: 'has to turn and skate' },
    // The partner. Two opposition defencemen is not decoration — the section's own
    // failure case is arriving "alone below the goal line with three defenders
    // between you and the net", and a wide entry drawn against one defender would
    // be a different situation entirely.
    { id: 'D',  team: 'opp', pos: 'D', at: { at: 'slot', dx: 2, dy: 5 } },       // (78, 5)

    // Short label on purpose. The placer works in rink feet and a long one
    // anchored this close to the left edge of the frame has no legal box near its
    // own player, so it gets thrown across the ice on a leader line.
    { id: 'F',  pos: 'F', at: WIDE_CARRIER, label: 'goes outside' },
    { id: 'F',  pos: 'F', at: NET_DRIVER,   label: 'driving the net' },
    // "A third player high for the back-door or point option" — the section's own
    // words, and one player genuinely offering either, so the label says both.
    { id: 'F',  pos: 'F', at: { at: 'top-of-circle:left', dy: 8 },               // (54, -14)
      label: 'high: back-door or point' },
  ],

  routes: [
    // Bowed toward the boards so the carry hugs the wall rather than cutting
    // across the top of the circle, which would be a different entry.
    { from: WIDE_CARRIER, to: { at: 'goal-line', dy: 29 }, kind: 'carry', bow: 6 },  // (89, 29)
    // Stops in front of the net and short of the crease. The renderer's rule and
    // the corpus's: a route may not run through the crease or across the goal mouth.
    //
    // MEASURED, against src/data/rink.json at commit b9ed6b7,
    // sha256 d441c7942e1ed27c1a55c1d6261c1232fe1eadd97cf79f3c2e8d4aa871b06579 — the
    // arithmetic below is only true of THAT table, and a nudge to `crease` or `slot`
    // moves it with no diff touching this file. Tip (78, -5); the opposition
    // goaltender's anchor (86 - 1, 0) = (85, 0). d = 8.60 ft, terminal tangent (the
    // chord: this route has no bow) 60.9 degrees off the bearing to him, so the
    // lateral miss is 7.52 ft, well outside the 2.9 ft glyph. d is INSIDE
    // ARRIVAL.noArrow = 9.
    //
    // ⚠️ THIS USED TO READ "the closest skater arrowhead to a goaltender in the
    // corpus", and then named two CLOSER ones two clauses later. It contradicted
    // itself inside one sentence. What is true, and what carries the safety weight,
    // is that it is the closest one IN FRONT OF the goaltender. Re-measured over
    // every arrow-ended skater route in DIAGRAMS against the same table — goal line
    // at x = 89, the goaltender's anchor at (85, 0):
    //
    //    7.81  forecheck-212                  tip (91, -5)   BEHIND the goal line
    //    7.81  nz-1-2-2-containment           tip (91, -5)   BEHIND the goal line
    //    8.60  entry-wide                     tip (78, -5)   IN FRONT — this route
    //   10.05  winger-offensive-zone-patches  tip (86, -10)  beside the net
    //
    // The two at 7.81 finish behind the goal line outside the near post with the
    // frame interposed. The fourth is OUTSIDE ARRIVAL.noArrow, so check-arrivals does
    // not report it and a reader running the checker sees three, not four; it is
    // listed here so the count in this block can be reconciled with the tool's.
    //
    // check-arrivals downgrades a goaltender arrival to advisory BY DESIGN — every net
    // drive finishes near him by construction, so failing on it would forbid drawing
    // one — which means nothing mechanical will ever raise this. THE ARRIVAL INVARIANT
    // in scripts/lib/rink.mjs carries that carve-out in terms, under "SKATER, not
    // goaltender, for the build failure", so the checker and the rule it enforces agree.
    //
    // ⚠️ THE READER-FACING STATEMENT OF THE SAME CONVENTION DOES NOT CARRY THE
    // CARVE-OUT, and this route is the one place that bites. content/reading-diagrams/
    // reading_ice_hockey_diagrams.md states it flat — "A route that closes on an
    // opponent ends in the two-bar mark, not an arrowhead" — and mentions the
    // goaltender nowhere in connection with it. Read strictly, that sentence forbids
    // the arrowhead below, which the code correctly permits. THE CODE IS RIGHT AND THE
    // PROSE IS SHORT. Do not "fix" the drawing to match the page.
    //
    // The remedy the corpus uses is a caption clause, and this caption takes its Rule
    // 69 wording from rule69_clauses.mjs, shared with the three other diagrams that
    // teach it, so a correction reaches all four. Do not "fix" this by shortening the
    // route either: a drive that stops further out is a different play, and the caption
    // is where the obligation belongs, because what happens in the last few feet is
    // movement over time.
    { from: NET_DRIVER, to: { at: 'slot', dx: 2, dy: -5 }, kind: 'skate' },          // (78, -5)
  ],

  puck: { at: 'blue-line', dx: 11, dy: 33 },   // (36, 33)
};

// ---------------------------------------------------------------------------
// 3. The delay / curl-back — section 5.
// ---------------------------------------------------------------------------

// In OPEN ICE, deliberately. The section carries a safety override that outranks
// the play: "Curl in open ice, not against the wall. Never take contact with your
// back to the boards." A curl-back drawn against the wall would be the corpus
// teaching the behaviour it says is most associated with catastrophic spinal
// injury, so this one is in the middle third of the ice and nowhere near it.
const DELAY_AT = { at: 'blue-line', dx: -3, dy: -10 };    // (22, -10)
const DELAY_SUPPORT = { at: 'blue-line', dx: -23, dy: 18 };  // (2, 18)

const delayCurl = {
  id: 'entry-delay-curl',
  title: 'The delay and curl-back',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'The delay, or curl-back — the play that runs against instinct, because turning away ' +
    'from the offensive zone feels like retreating. A wasted entry at rec and youth level is ' +
    'characteristically a player alone at the line who forced something instead; this document ' +
    'has no figure for what share of wasted entries that accounts for, so read it as a coaching ' +
    'observation rather than a measurement. ' +
    'Arriving at the line alone against two defenders, the carrier does ' +
    'not stop and does not force it: he turns away from the pressure, curls back toward the ' +
    'neutral zone with his body between the defender and the puck, looks back up ice rather ' +
    'than at the defender, and buys the one or two seconds his late support needs to arrive at ' +
    'speed. A still ' +
    'picture can only show the turn and the teammate arriving — the re-attack that follows, ' +
    'with the puck going to whoever has the best angle and the most speed and often not to you, ' +
    'is the next moment and is not drawn. ' +
    '⚠️ One safety point outranks the play and is why the curl is drawn out in open ice: ' +
    'curl away from the wall, and never take contact with your back to the boards. ' +
    // ⚠️ THE SECOND HALF IS NOT OPTIONAL AND IS NOT PADDING. The caption is voiced ALONE,
    // in its own <p> with a 700 ms break either side -- verified this session by rendering
    // zone_entries.md through md_to_speech.py, chunk 035. Ending it at "never take contact with
    // your back to the boards" leaves a reader tight to the wall a prohibition and no permitted
    // alternative, and the move that satisfies "curl away from the wall" plus "never your back"
    // is the one the section names as the error: turning away INTO the boards. The section
    // carries the counterweight in four other layers and this was the layer without it --
    // zone_entries.md:453 (the §5 override blockquote), :443-444 and :475-476 (both facts
    // blocks), :993 (Common Mistakes) and :1059 (Key Takeaways).
    //
    // ⚠️ THE TWO LIMBS ARE STATED SEPARATELY AND MUST STAY THAT WAY. A turned back is
    // dangerous because it makes the contact a hit from behind; a tucked chin is dangerous
    // because it straightens the cervical spine. They are different injuries with different
    // sources, and content/technique/puck_handling.md:1000 and
    // content/technique/body_contact_and_battles.md:1561 forbid joining them in terms -- "USA
    // Hockey does not say it about turning your back". The walking-speed finding belongs to the
    // head-down collision only and is deliberately NOT carried here.
    //
    // Wording taken word for word from the owner rather than compressed:
    //   "Turning your back to an oncoming checker makes the contact a hit from behind"
    //     -- zone_entries.md:453, and body_contact_and_battles.md:692.
    //   "A chin tucked to the chest straightens the cervical spine"
    //     -- body_contact_and_battles.md:682, verbatim.
    //   "if you cannot get off the boards take the contact rather than turning away into them"
    //     -- zone_entries.md:475, verbatim.
    //   "skates parallel to the wall, forearm and hip into it, head up and chin off your chest"
    //     -- zone_entries.md:476, verbatim.
    //   "never duck" -- body_contact_and_battles.md:714, "Never your back to the wall, never duck."
    //
    // NO BODY-CHECKING LEVEL CAVEAT HERE, on purpose. This is how to RECEIVE contact, and
    // body_contact_and_battles.md:649 is explicit that its receiving section is to be read
    // "whatever league you play in -- unexpected contact happens in non-check hockey too".
    // Scoping it to checking leagues would tell a non-check reader the posture is not theirs.
    //
    // Glyph placement: the addition sits AFTER the existing warning glyph and at the END of the
    // caption, so it stays inside the block remark-corpus.mjs promotes and no tactical prose
    // follows it. Caption measured after this edit: still far short of md_to_speech's
    // MAX_BILLED_CHARS of 2,800, so it is voiced as one unbroken chunk and neither absolute
    // can be separated from the other by a split.
    'Two separate postures injure a neck at the boards and they are not the same warning: ' +
    'turning your back to an oncoming checker makes the contact a hit from behind, and a chin ' +
    'tucked to the chest straightens the cervical spine. So if you cannot get off the boards, ' +
    'take the contact rather than turning away into them — skates parallel to the wall, ' +
    'forearm and hip into it, head up and chin off your chest, and never duck.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'is just short of the blue line in the middle of the ice, alone against two opposition ' +
    'defencemen who are standing up inside the line. His route turns away from them and curls ' +
    'back toward the neutral zone in open ice, well clear of both side walls. The puck is drawn ' +
    'on the far side of him from the nearest defender, which is what protecting it with your ' +
    'body means. A second own forward arrives late from behind on the other side of the ice, ' +
    'skating toward the line. The opposition goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // Standing up at their own line, and far enough off the carrier that the two
    // glyphs do not touch: at eight feet the triangle and the circle rendered as
    // one shape and the picture read as contact.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 4, dy: -14 } },  // (29, -14)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 5, dy: 6 } },    // (30, 6)

    { id: 'F', pos: 'F', at: DELAY_AT, label: 'alone: turn away, do not stop' },
    { id: 'F', pos: 'F', at: DELAY_SUPPORT, label: 'late support, arriving' },
  ],

  routes: [
    // A U-turn away from the line and back toward the neutral zone. The bow is
    // what makes it a curl rather than a retreat: the route carries on toward the
    // line, turns, and comes back. Lengthened from 17 ft to 22 ft because at the
    // shorter length the carry wave rendered as a squiggle rather than a turn.
    { from: DELAY_AT, to: { at: 'blue-line', dx: -21, dy: 2 }, kind: 'carry', bow: -18 },  // (4, 2)
    // Stops short of the line: he is the late one, and drawing him already across
    // it would contradict the label and the section.
    { from: DELAY_SUPPORT, to: { at: 'blue-line', dx: -5, dy: 22 }, kind: 'skate' },       // (20, 22)
  ],

  // On the far side of the carrier from the nearest defender — "protecting the
  // puck with your body between defender and puck".
  puck: { at: 'blue-line', dx: -6, dy: -7 },   // (19, -7)
};

// ---------------------------------------------------------------------------
// 4-8. Dump-ins: the five types. Section 7.
//
// Five diagrams because the section's own claim is that this is "not one play. It
// is at least five, and choosing the wrong one is most of why dump-ins get a bad
// name" — so the set is the teaching, and each caption names its own type as one
// of five. Every one of them obeys the unifying rule the section states: the puck
// goes to a place a teammate is already going.
// ---------------------------------------------------------------------------

// --- 4. The hard rim -------------------------------------------------------

const RIM_CARRIER = { at: 'boards:right', dx: -36, dy: -4 };  // (33, 38.5)
// The rim's path round the boards is two arcs, not one. A single quadratic cannot
// hug a rounded rectangle's corner: bowed hard enough to reach the end boards it
// cuts across the goal mouth on the way back out. So the puck's path is drawn as
// two chained segments — the second starts exactly where the first ends — and the
// routes are numbered so the chain reads as one puck travelling, in order.
const RIM_CORNER = { at: 'corner:right', dx: 5, dy: 2 };      // (87, 36)
const RIM_ARRIVES = { at: 'corner:left', dx: 4, dy: 2 };      // (86, -32)

const hardRim = {
  id: 'dump-hard-rim',
  title: 'The hard rim',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The hard rim — the first of five distinct dump-ins. The read that calls ' +
    'for it is pressure coming at you from the inside with a teammate coming down the far wall ' +
    'or into the far corner: the puck is fired low and hard around the boards so that it follows ' +
    'the curve of the corner and travels onward in the direction of play, beating the ' +
    'defenceman stepping up and arriving on the far side before his partner can rotate. A rim ' +
    'is not a reverse — a reverse goes back against the flow of the play, behind you, and is a ' +
    'different play for a different purpose, so be precise about which one you are calling for. ' +
    'The picture shows where the puck is meant to arrive, not that it will: too soft and it dies ' +
    'behind the net, too hard and it comes off the far boards straight to the weak-side ' +
    'defenceman.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'is on the right wall near the blue line, with an opposition defenceman inside him and ' +
    'slightly up-ice, stepping up. Two numbered segments trace one puck path: first along the ' +
    'right wall into the right corner, then round behind the net and out to the far corner. A ' +
    'third numbered route is an own forward skating down the far wall into that corner to meet ' +
    'it. The opposition weak-side defenceman stands in the middle of the zone, the partner who ' +
    'has to rotate, and the goaltender is in the crease. No route ends on a player.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // The defenceman stepping up: inside the carrier and up-ice of him, so the
    // pressure is from the inside, which is the read. Drawn without a route —
    // any route from here finishes pointing at the carrier, and the corpus does
    // not draw arrows that read as a collision.
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'boards:right', dx: -30, dy: -14 },   // (39, 28.5)
      label: 'stepping up, from inside' },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'high-slot', dx: 4, dy: -12 },        // (73, -12)
      label: 'the partner, has to rotate' },

    { id: 'F', pos: 'F', at: RIM_CARRIER, label: 'rims it, low and hard' },
    { id: 'F', pos: 'F', at: { at: 'boards:left', dx: -18, dy: 6 },                   // (51, -36.5)
      label: 'coming down the far wall' },
  ],

  routes: [
    // 1 — along the right wall into the corner. Nearly straight: the wall is.
    { from: { at: 'boards:right', dx: -35, dy: -6 }, to: RIM_CORNER, kind: 'pass', bow: 1.5 },
    // 2 — round behind the net to the far corner. Bowed toward the end boards so
    //     the puck goes *behind* the net; the unbowed chord would run straight
    //     across the goal mouth, which is forbidden and would also be a different
    //     play.
    { from: RIM_CORNER, to: RIM_ARRIVES, kind: 'pass', bow: 21 },
    // 3 — the teammate the rim is for. Stops well short of where the puck arrives,
    //     so the two arrowheads do not merge into one mark in the corner.
    { from: { at: 'boards:left', dx: -18, dy: 6 }, to: { at: 'corner:left', dx: -5, dy: 1 },
      kind: 'skate' },   // (77, -33)
  ],

  puck: { at: 'boards:right', dx: -33, dy: -7 },   // (36, 35.5)
};

// --- 5. The soft area dump -------------------------------------------------

const SOFT_CARRIER = { at: 'blue-line', dx: -2, dy: -22 };   // (23, -22)
// Out on the wall. At (39, -32) the chaser's glyph sat four feet off the dump's
// own line and the dashed puck path was drawn across it.
const SOFT_CHASER = { at: 'blue-line', dx: 14, dy: -34 };    // (39, -34)

const softAreaDump = {
  id: 'dump-soft-area',
  title: 'The soft area dump',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'The soft area dump — the second of five distinct dump-ins, and the one ' +
    'whose value is entirely in the race, which is why the chaser is drawn already most of the ' +
    'way there. The puck is placed gently into a specific area, usually a corner, so that it ' +
    'dies there rather than rebounding: that gives your chaser a stationary puck and a body ' +
    'arriving on it, and gives the retrieving defenceman no help at all from the puck’s momentum. The ' +
    'read that calls for it is a forechecker arriving in roughly two seconds and a defence that ' +
    'has to turn and retrieve. Used when your chaser is four seconds away it is the opposite ' +
    'play — you have simply given the puck to their defenceman with time. Nothing about how the ' +
    'chase finishes is drawn here; angling is movement over time and a subject of its own.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'is just outside the blue line on the left side. A dashed route places the puck into the ' +
    'left corner. A second own forward, already well inside the zone along the left wall, skates ' +
    'toward that corner and his route stops short of the puck and up-wall of it. An opposition ' +
    'defenceman is turning back from in front of his own net toward the same corner, his route ' +
    'also stopping short. The goaltender is in the crease. The two arriving routes finish apart ' +
    'from one another and neither finishes behind the other player.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'faceoff-dot:left', dx: 6, dy: 8 },   // (75, -14)
      label: 'has to turn and retrieve' },

    { id: 'F', pos: 'F', at: SOFT_CARRIER, label: 'places it, does not fire it' },
    { id: 'F', pos: 'F', at: SOFT_CHASER,  label: 'chaser, two seconds' },
  ],

  routes: [
    // Deep into the corner rather than to the corner's nominal centre: at
    // (82, -34) the puck landed on the edge of the faceoff circle and did not
    // read as "a corner" at all.
    { from: { at: 'blue-line', dx: 0, dy: -21 }, to: { at: 'corner:left', dx: 3, dy: -3 },
      kind: 'pass' },   // (85, -37)
    // Stops short of the puck and up-wall of the retriever — between him and the
    // boards escape he wants, not behind him. The section's angling instruction
    // is a separate subsection and this diagram does not attempt it.
    { from: SOFT_CHASER, to: { at: 'corner:left', dx: -14, dy: -4 }, kind: 'skate' }, // (68, -38)
    // Bowed round the back of the circle rather than cutting straight across it,
    // so this route and the dump do not run as two near-parallel lines.
    { from: { at: 'faceoff-dot:left', dx: 6, dy: 8 }, to: { at: 'corner:left', dx: -1, dy: 4 },
      kind: 'skate', bow: 6 },   // (81, -30)
  ],

  puck: { at: 'blue-line', dx: 2, dy: -20 },   // (27, -20)
};

// --- 6. The chip past a defenceman committing early ------------------------

// Spread along the ice rather than piled into the top corner. The first attempt
// put the carrier, the defenceman, the chip and the collection all inside a
// twenty-foot square against the boards; the badges stacked on the defenceman's
// glyph and the carrier's label was pushed two-thirds of the way down the rink.
const CHIP_CARRIER = { at: 'blue-line', dx: -13, dy: 29 };   // (12, 29)
const CHIP_D = { at: 'blue-line', dx: 4, dy: 26 };           // (29, 26)
const CHIP_LANDS = { at: 'blue-line', dx: 29, dy: 36 };      // (54, 36)

const chipPast = {
  id: 'dump-chip-past',
  title: 'The chip past a defenceman',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,
  numbered: true,

  caption:
    'The chip past a defenceman committing early — the third of five distinct dump-ins, and a ' +
    'possession play rather than a surrender. He is stepping ' +
    'up to meet you at or before the line with space behind him on the wall, so the puck is ' +
    'lifted or pushed past him down the wall while you change your line before you release and ' +
    'go around the other side to collect it yourself: he is moving toward you, the puck is going ' +
    'behind him, and if your feet keep moving you are behind their defence with speed. Be precise ' +
    'about the words — a defenceman challenging you at his own line is ' +
    'stepping up, while a pinch is a defenceman stepping down from the offensive blue line, and ' +
    'both get called pinches in conversation. It is under-used because giving the puck up for a ' +
    'second while going full speed at someone feels wrong, and it is one of the highest-value ' +
    'plays there is against an aggressive gap.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'comes up the right wing lane toward the blue line. An opposition defenceman is standing on ' +
    'the line in front of him. Route one is the carrier changing his line, swinging inside the ' +
    'defenceman and back out to the wall behind him. Route two is the puck, chipped past the ' +
    'defenceman on the boards side and landing on the wall inside the zone, where the carrier is ' +
    'heading. The two routes separate before the defenceman and rejoin behind him. The ' +
    'defenceman is drawn with no route of his own, because every route from him finishes ' +
    'pointing at the carrier, and an arrow that reads as a collision is not drawn here. ' +
    'The opposition goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: CHIP_D, label: 'committing hard and early' },
    { id: 'F', pos: 'F', at: CHIP_CARRIER, label: 'chips early' },
  ],

  routes: [
    // 1 — "change your line BEFORE you release so you are already accelerating
    //     around them", which is why the carrier's route is the one numbered
    //     first. Drawn as skating, not carrying: by the time it curves he has let
    //     the puck go. The bow dips well inside the defenceman — at bow -20 it
    //     cleared the base of his triangle by under four feet and read as
    //     contact — and comes back out to the wall to collect.
    { from: CHIP_CARRIER, to: { at: 'blue-line', dx: 23, dy: 30 }, kind: 'skate', bow: -22 },
    // 2 — the chip, past him on the boards side. Bowed toward the wall so it
    //     clearly clears the defenceman rather than skimming him.
    { from: { at: 'blue-line', dx: -10, dy: 30 }, to: CHIP_LANDS, kind: 'pass', bow: 4 },
    // The defenceman's own committed momentum is NOT drawn. Every route from him
    // that is long enough to see finishes within a few degrees of pointing
    // straight at the carrier, which is the shape the corpus forbids for a
    // closing route; the caption carries his momentum in words instead.
  ],

  puck: { at: 'blue-line', dx: -9, dy: 32 },   // (16, 32)
};

// --- 7. The cross-corner (north-south) dump --------------------------------

const CROSS_CARRIER = { at: 'blue-line', dx: -3, dy: 26 };   // (22, 26)
const CROSS_WINGER = { at: 'boards:left', dx: -22, dy: 4 };  // (47, -38.5)
const WEAK_SIDE_D = { at: 'faceoff-dot:left', dx: 2, dy: 14 };  // (71, -8)

const crossCorner = {
  id: 'dump-cross-corner',
  title: 'The cross-corner dump',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'The cross-corner dump — the fourth of five distinct dump-ins. The read ' +
    'that calls for it is the retrieving defenceman being on your side, or the strong-side ' +
    'corner being crowded: the puck is shot hard diagonally across into the far corner, which ' +
    'moves it away from the defender best placed to get it and leaves their weak-side ' +
    'defenceman a long retrieval on his backhand, facing his own boards, with a forechecker ' +
    'arriving behind him — awkward by design, though which retrievals are hardest is coaching ' +
    'judgement rather than a counted ranking. It only works because the far-side ' +
    'winger has read it and is already going there; cross-corner dumps into nobody are pure ' +
    'giveaways. The same read can instead be answered by going straight north down your own ' +
    'side, depending on where your speed is, and that alternative is not drawn. ' +
    'Nothing about how the chase finishes is drawn here; angling is movement over time and a ' +
    'subject of its own. ⚠️ Read the sentence above again before you skate it, though: a defenceman ' +
    'facing his own boards has his back to you, which is the picture the checking-from-behind ' +
    'rules are written about. Arrive on the puck, never on his back.',

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward with the puck ' +
    'is just outside the blue line on the right side; a dashed route carries the puck diagonally ' +
    'across the zone into the far, left corner. An opposition defenceman stands on the right ' +
    'side, the one the puck is being taken away from. His partner, on the left, has a long route ' +
    'across and down toward that far corner. A second own forward is driving down the left wall ' +
    'and his route finishes on the wall side, up-ice of where the puck lands and clear of the ' +
    'retrieving defenceman. The goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'top-of-circle:right', dx: 2, dy: 2 },  // (56, 24)
      label: 'best placed — taken out of it' },
    // Moved off the diagonal. At (62, -16) this triangle sat under four feet from
    // the dump's own line and rendered with the puck path drawn straight through
    // the glyph. From here, in front of his own net on the weak side, the length
    // of the retrieval is also visible, which is the point of the play.
    { id: 'D', team: 'opp', pos: 'D', at: WEAK_SIDE_D,     // (71, -8)
      label: 'long backhand retrieval' },

    { id: 'F', pos: 'F', at: CROSS_CARRIER, label: 'shoots it diagonally' },
    { id: 'F', pos: 'F', at: CROSS_WINGER,  label: 'far winger, already going' },
  ],

  routes: [
    { from: { at: 'blue-line', dx: -1, dy: 25 }, to: { at: 'corner:left', dx: 3, dy: -3 },
      kind: 'pass' },   // (85, -37)
    // The weak-side defenceman's retrieval, drawn because its length is the point.
    // Bowed toward the net so it does not run as a second line alongside the dump.
    // Stopped short of the corner and bowed toward the goal line, because at
    // (78, -29) its arrowhead was drawn sitting on the dump's dashed line.
    { from: WEAK_SIDE_D, to: { at: 'corner:left', dx: -2, dy: 10 }, kind: 'skate', bow: 7 },
    // The far winger arrives on the wall side and up-ice of the retriever, not
    // behind him. Finishing this route deeper than the defenceman would draw a
    // player being run at the end boards, which this corpus will not draw.
    { from: CROSS_WINGER, to: { at: 'corner:left', dx: -10, dy: -3 }, kind: 'skate' },  // (72, -37)
  ],

  puck: { at: 'blue-line', dx: 1, dy: 24 },   // (26, 24)
};

// --- 8. The flip / area dump over a trap -----------------------------------

// The only full-sheet diagram here. A 1-3-1 trap is a shape spread across the
// whole neutral zone, and the flip is released from your own end of it; cropped at
// the centre line there is no wall to go over.
//
// NOTE THE DOUBLE COLON. `resolve()` splits a location name on ':' into
// [base, side, end], so 'blue-line:far' puts "far" in the SIDE slot, where it is
// not 'left', so it silently means "right" — and the position comes back as the
// NEAR blue line with no error. The first render of this diagram had the carrier,
// the forechecker and our own goaltender all mirrored onto the attacking half,
// with our goalie sitting on top of theirs. Any position without `sided: true` in
// src/data/rink.json needs the empty middle segment: 'blue-line::far',
// 'crease::far'. Sided ones take the three-part form, 'corner:right:far'.
const FLIP_CARRIER = { at: 'blue-line::far', dx: 1, dy: 8 };   // (-24, 8)
const FLIP_LANDS = { at: 'corner:right', dx: -10, dy: -2 };    // (72, 32)
// Both runners are UNDER the flip's line, not on it. The first version put one
// at (4, 24), which is 7.2 ft from the opposition player at (0, 30) and 8.7 ft
// from the flip itself — the glyphs touched and the dashed puck path was drawn
// straight through our own forward.
//
// The figures here read "four feet from the opposition player at (0, 28) and
// seven from the flip". The opposition forward is drawn at { centre-ice, dy: 30 },
// so (0, 30); at 3.6 ft apex to 2.9 ft radius the glyphs still touch at 7.2 ft,
// which is why the placement was rejected — but neither number was the one the
// code produces, and the coordinate was wrong as well as the distance.
const FLIP_RUNNER = { at: 'centre-ice', dx: 14, dy: 8 };       // (14, 8)
const FLIP_SUPPORT = { at: 'centre-ice', dx: -4, dy: -16 };    // (-4, -16)
const TRAP_FORECHECKER = { at: 'blue-line::far', dx: -15, dy: 6 };  // (-40, 6)

const flipOverTrap = {
  id: 'dump-flip-over-trap',
  title: 'The flip over a trap',
  owner: 'content/systems/zone_entries.md',
  half: false,
  width: 900,

  caption:
    'The flip, or area dump, over a neutral-zone trap — the fifth of five distinct dump-ins, ' +
    'and the one the trap exists to force. The structure drawn is a ' +
    '1-3-1: one forechecker, three players across the middle and one back, with the three-across ' +
    'layer designed to kill the puck at the red line, and skating into ' +
    'the three is the trap working. So the puck is lifted high off the ice with the blade opened ' +
    'under it, to travel over sticks and bodies and land in open space behind their defence. A ' +
    'flat diagram cannot show the height, and the height is the whole play: it goes over the ' +
    'three-man wall rather than through it, and hangs long enough for your forwards to run ' +
    // ⚠️ THE SHORTHANDED EXEMPTION IS NOT UNIVERSAL, and this caption stated it as though it
    // were — while `icing-gaining-the-line` in `rules_primer.mjs` carried the full scope, so
    // one voiced layer said it two ways. USA Hockey 624(b) nullifies icing where "(1) (For all
    // Youth 15-Only and above, Girls 16U and above, High School and Adult classifications only)
    // The offending team is short-handed" — `sources/usah.txt`, Rule 624 — so below those
    // classifications a shorthanded team CAN be iced. NHL 81.6 grants it generally but withdraws
    // it from a team "'short-handed' by reason of a major penalty, and they have neglected to
    // ensure there is a player on the penalty bench to exit upon the expiry of the penalty …
    // Icing will be called" (`sources/nhl_rules.txt`).
    'underneath it. Land it past the defence but before the goal line. A puck crossing the goal ' +
    'line untouched from behind the centre red line is icing, and whether being shorthanded ' +
    'exempts you depends on the book you play under. USA Hockey grants that exemption only at ' +
    'Youth 15-Only and above, Girls 16U and above, High School and Adult (Rule 624(b)(1)), so ' +
    'below those levels a shorthanded team can be iced; the NHL grants it but withdraws it from ' +
    'a team shorthanded by a major that has left nobody on the penalty bench (Rule 81.6). Find ' +
    'out which rules your league runs.',

  describe:
    'The full sheet, own end at the left, attacking end at the right. An own forward with the ' +
    'puck is at his own blue line. One opposition forechecker pressures him. Three opposition ' +
    'players are spread across the middle of the ice at the centre red line, one near each side ' +
    'and one in the centre, and a fifth opposition player is back near their own blue line. A ' +
    'long dashed route runs from the carrier, between the players of the three-man layer, and ' +
    'lands high in the attacking zone short of the goal line. Two own forwards skate from the ' +
    'neutral zone toward that area, their routes stopping short of it. Both goaltenders are in ' +
    'their creases.',

  players: [
    // Their goaltender, and ours: on a full sheet, drawing one net manned and the
    // other empty would itself be a claim.
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'G', pos: 'G', at: { at: 'crease::far', dx: 1 } },

    // The 1-3-1 as the section describes it: "one forechecker, three players
    // across the middle and one back". The frozen shape has to be exactly that
    // count at exactly those depths, or it is not the structure it is labelled as.
    { id: 'F', team: 'opp', pos: 'F', at: TRAP_FORECHECKER, label: 'one forechecker' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'centre-ice', dy: 30 } },            // (0, 30)
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'centre-ice', dx: 2 },               // (2, 0)
      label: 'three across the middle' },
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'centre-ice', dy: -30 } },           // (0, -30)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 7, dy: -14 },       // (32, -14)
      label: 'one back' },

    { id: 'F', pos: 'F', at: FLIP_CARRIER, label: 'no route along the ice' },
    { id: 'F', pos: 'F', at: FLIP_RUNNER, label: 'running underneath it' },
    { id: 'F', pos: 'F', at: FLIP_SUPPORT },
  ],

  routes: [
    // Straight, because in plan view a lofted puck is straight. The caption
    // carries the height, since the drawing cannot.
    { from: { at: 'blue-line::far', dx: 3, dy: 9 }, to: FLIP_LANDS, kind: 'pass' },
    // Both runner routes stop well short of where the puck lands. Taken all the
    // way there they finish within a couple of feet of the flip's own arrowhead,
    // and three arrowheads in one corner say nothing at all.
    { from: FLIP_RUNNER, to: { at: 'top-of-circle:right', dx: 2 }, kind: 'skate' },   // (56, 22)
    { from: FLIP_SUPPORT, to: { at: 'high-slot', dx: -11, dy: 6 }, kind: 'skate' },   // (58, 6)
  ],

  puck: { at: 'blue-line::far', dx: 5, dy: 11 },   // (-20, 11)
};

// ---------------------------------------------------------------------------
// 9. How the trapezoid shapes where you aim — section 7.
//
// The one piece of painted geometry on this page, and the one the coordinate table
// already owns. The renderer draws the trapezoid from src/data/rink.json (Rule
// 1.8); nothing here re-declares it, and the caption carries no number for it,
// because content/foundation/rink_map_and_glossary.md owns those figures and
// spends four paragraphs on why the commonly-quoted ones are stale.
// ---------------------------------------------------------------------------

const TRAP_CARRIER = { at: 'blue-line', dx: -2, dy: 22 };   // (23, 22)
// Out toward the wall, so the chaser's route and the dump do not run within a
// couple of feet of each other with their arrowheads side by side.
const TRAP_CHASER = { at: 'blue-line', dx: 8, dy: 34 };     // (33, 34)

const trapezoidAim = {
  id: 'dump-and-the-trapezoid',
  title: 'Dumping and the trapezoid',
  owner: 'content/systems/zone_entries.md',
  half: true,
  width: 900,

  caption:
    'Where the trapezoid applies, it gives you a simple aiming rule: dump to the corners, not to ' +
    'the goaltender. Behind the goal line, the marked lines are the only area in which he may ' +
    'play the puck, what is judged is the position of the puck rather than his own position, ' +
    'and his one ' +
    'exception is playing it while keeping a skate in contact with his crease. So the corners ' +
    'are legally out of bounds for him and the ice directly behind the net is not: a puck that ' +
    'dies straight behind the net is one he can legally stop and set up for his defenceman, ' +
    'which is exactly the help you were trying to deny him, while a puck in the corner has to be ' +
    'retrieved by a skater with a forechecker arriving. If you must put it behind the net, put ' +
    'it there hard. Where the trapezoid applies is not universal — it is the NHL and ' +
    'the IIHF book, with the KHL commonly said to have one too though no KHL rulebook was ' +
    'available to check that one; neither the USA Hockey book nor the Hockey Canada book marks ' +
    'one at all, so a league running on either has none, ' +
    'and in England and Wales the status is genuinely unsettled — so look behind the net to see ' +
    'whether the lines are painted at all, ask your league, and plan as though their goalie may ' +
    'come for it. Where there is no trapezoid the advice flips: rim it hard and low so he cannot ' +
    'set up on it, or dump to the corner furthest from his stick hand.',

  describe:
    'The attacking half of the rink, opposition net at the right, with the goalkeeper’s ' +
    'restricted area marked behind the net by two dashed lines running from the goal line out ' +
    'to the end boards. The opposition goaltender stands behind his net, inside those lines. An ' +
    'own forward with the puck is just outside the blue line on the right; a dashed route sends ' +
    'the puck into the right corner, outside the marked area and behind the goal line. A second ' +
    'own forward skates down the right wall toward it, his route stopping short. An opposition ' +
    'defenceman is between the net and the corner, the skater who now has to go and get it. The ' +
    'goaltender is drawn with no route: the diagram is about where the puck may legally be ' +
    'played, not about where he skates.',

  players: [
    // Behind his own net and inside the marked area — standing exactly where a
    // puck dumped straight behind the net would arrive, which is the contrast the
    // section draws. He is allowed to stand anywhere; the label says what is
    // actually judged.
    // Clear of the goal frame, which runs from the goal line back to x 92.3: at
    // dx 1 the glyph overlapped the net's back rail and read as a goaltender
    // standing inside his own net.
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'behind-net', dx: 2.5 },   // (96.5, 0)
      label: 'only inside the marked lines' },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'faceoff-dot:right', dx: 10, dy: -6 },  // (79, 16)
      label: 'has to go and get it' },

    { id: 'F', pos: 'F', at: TRAP_CARRIER, label: 'aims for the corner' },
    { id: 'F', pos: 'F', at: TRAP_CHASER,  label: 'forechecker arriving' },
  ],

  routes: [
    // Into the corner, past the goal line and outside the marked lines. The
    // section: "the corners are legally out of bounds for the goaltender, and the
    // area directly behind the net is not."
    { from: { at: 'blue-line', dx: 0, dy: 23 }, to: { at: 'corner:right', dx: 8, dy: -1 },
      kind: 'pass' },   // (90, 33)
    // Stops well short of the corner, out on the wall side of the dump, and
    // up-wall of the retrieving defenceman.
    { from: TRAP_CHASER, to: { at: 'corner:right', dx: -8, dy: 4 }, kind: 'skate' },   // (74, 38)
  ],

  puck: { at: 'blue-line', dx: 3, dy: 24 },   // (28, 24)
};

// ---------------------------------------------------------------------------
// 10. Attack the outside shoulder — section 3.
//
// THE MIRROR OF THIS PLAY IS ALREADY DRAWN ELSEWHERE, and drawn deliberately as
// the other half: `show-one-shoulder-open-the-other` in time_and_space.mjs runs
// the carrier at the defenceman's INSIDE shoulder to open the boards, and its own
// caption records that "the mirror is not drawn and works the same way: skate at
// the outside shoulder, the defenceman widens, and the middle opens instead."
// This is that mirror, and it is this section's play rather than that one's: the
// outside shoulder is the one nearest the boards on your side, and what opens is
// the inside lane.
//
// WHY THE DEFENCEMAN GETS A ROUTE AND THE CARRIER'S SECOND MOVE DOES NOT.
// The section's sequence is three beats — aim at the outside shoulder, the hips
// open outward, THEN cut back inside. A still frame can hold two of them. Drawing
// the cut-back as a second route means running a line from the end of the first
// one across the defenceman's body: measured, a route from the carry's tip to the
// inside lane passes 2.4 ft from his anchor, i.e. straight through him. So the
// third beat is the SHADED LANE — what opens — and the caption says what to do
// with it, which is also where the section's two other continuations live (slip
// it between his feet, or hit the middle driver), neither of which is drawn.
//
// AND HE MAY NOT BITE. The section's own counter is a defender who "refuses to
// open and stays square", in which case the outside lane is there for real. The
// picture is one instance of a defenceman who moved; the caption carries the other.
// ---------------------------------------------------------------------------

const SHOULDER_CARRIER = { at: 'blue-line', dx: -20, dy: 30 };   // (5, 30)
const SHOULDER_D       = { at: 'blue-line', dx: 7, dy: 18 };     // (32, 18)

const outsideShoulder = {
  id: 'entry-outside-shoulder',
  owner: 'content/systems/zone_entries.md',
  title: 'Attacking the outside shoulder',
  half: true,
  width: 900,

  caption:
    'Attacking a defenceman’s outside shoulder — the one nearest the boards on your side — on ' +
    'the way to the attacking line, with the zone you are entering at the right. His job is to ' +
    'stay between you and the middle of the ice, and his weakest moment is the pivot: the ' +
    'instant he turns from backwards to forwards, or opens his hips to one side. So you threaten ' +
    'the lane he is least worried about and most awkward to defend, because covering it means ' +
    'opening his hips toward the boards — and the moment they open outward, the inside lane is ' +
    'the one that is available. That lane is shaded here; it is a name for a piece of ice at one ' +
    'instant and nothing marks it on the rink. What you do with it is a choice the picture does ' +
    'not make for you: cut back into the middle, slip the puck between his feet, or hit a ' +
    'teammate driving the middle. ' +
    'Two honest limits. He may refuse to open and stay square, and then nothing here happens — ' +
    'but the outside lane is yours for real, so take it and get to the goal line. And the ' +
    'carrier’s line stops well short of him on purpose: you are not trying to beat him, you are ' +
    'trying to make him commit, and no contact is drawn or intended. Pace and eyes up are the ' +
    'conditions of it. A defender who has committed to one lane cannot defend the other.',

  describe:
    'The attacking half of the rink, the opposition net at the right, the attack moving left to ' +
    'right. One own player, an open circle, carries the puck up the upper side of the ice from ' +
    'near the centre line. One opposition defenceman, a solid triangle, is between him and the ' +
    'blue line and about ten feet nearer the middle of the ice than he is. The carrier’s ' +
    'skate-and-stickhandle route runs at that defenceman’s outer shoulder, the side nearer the ' +
    'boards, and stops about twelve feet short of him. A short plain route runs from the ' +
    'defenceman outward toward the boards, showing his hips opening that way. A shaded band ' +
    'labelled "the inside lane" fills the ice on the middle side of him, running from the blue ' +
    'line toward the tops of the faceoff circles. The opposition goaltender is in his crease.',

  zones: [
    {
      // THE INSIDE LANE. Its boards-side edge is drawn level with the defenceman's
      // inside shoulder — he is at (32, 18) and a triangle's circumradius is 3.6 ft,
      // so y = 14 is one glyph off his anchor toward the middle. Its far edge is at
      // the tops of the circles only so the shading has an edge: nothing gives this
      // lane a depth, and the caption says so. Same treatment, and the same
      // disclosure, as the shaded middles in `rush-gap-and-angle`, `attack-the-seam`
      // and `show-one-shoulder-open-the-other`.
      //
      // NOT labelled "the middle" and not drawn on the faceoff-dot lines, on
      // purpose. Those four diagrams all draw a band called "the middle" between the
      // dot lines, and `check_zones.py` groups by identical label text — a fifth
      // polygon under that name, at a different width, would report as a
      // disagreement about a region the corpus has settled. This is a different
      // thing: the ice inside ONE defenceman at one instant, which is why it is
      // named for him rather than for the rink.
      points: [
        { at: 'blue-line', dy: 14 },              // (25, 14)
        { at: 'top-of-circle:right', dy: -8 },    // (54, 14)
        { at: 'top-of-circle:left', dy: 18 },     // (54, -4)
        { at: 'blue-line', dy: -4 },              // (25, -4)
      ],
      label: 'the inside lane',
    },
  ],

  players: [
    { id: 'F', pos: 'F', at: SHOULDER_CARRIER, label: 'aims at the outside shoulder' },
    { id: 'D', pos: 'D', team: 'opp', at: SHOULDER_D, label: 'hips open outward' },
    { id: 'G', pos: 'G', team: 'opp', at: { at: 'crease', dx: -1 } },
  ],

  // Not numbered. The two are cause and effect within one beat, not a sequence a
  // reader should time.
  //
  // THE CARRY. It runs on the true bearing from the carrier to a point 4 ft outboard
  // of the defenceman's anchor — his outside shoulder — and stops 12 ft short of it,
  // finishing at (20.5, 25.4). Against THE ARRIVAL INVARIANT in scripts/lib/rink.mjs:
  // the tip is 13.7 ft from the defenceman, comfortably outside the 9 ft at which
  // form (b) forbids an arrowhead, and the extended tangent misses his anchor by
  // 3.9 ft, outside the 2.9 ft of form (a). Aiming at a shoulder means missing the
  // centre by about a shoulder, so that margin is inherent to the play and not a
  // number to tune.
  //
  // ⚠️ THE CARRIER STARTS AT (5, 30), NOT (10, 28), AND THE REASON IS THE GLYPH AND
  // NOT THE HOCKEY. At the shorter start the route was 10.8 ft and rendered as a
  // single hump with the arrowhead almost on it — `entry-three-lanes` above records
  // the same failure at 14 ft and calls it "a wiggle". A `carry` is a LONG, SMOOTH
  // WAVE in the key; one hump is not that mark. At 16 ft it draws as a wave. (2, 30)
  // was tried first and put the glyph's ink within a foot of the frame's left edge.
  // The bearing and the 12 ft stand-off are unchanged, so every clearance above is
  // too — that is the point of expressing the stop-short as a distance along the
  // bearing rather than as a fixed coordinate.
  //
  // THE DEFENCEMAN'S ROUTE is 9.4 ft, outward and slightly up-ice: the hips opening
  // toward the boards. It is short because it is a weight shift and a pivot, not a
  // journey. Its arrowhead points away from the carrier, who lies behind the tip.
  routes: [
    { from: SHOULDER_CARRIER, to: { at: 'blue-line', dx: -4.5, dy: 25.4 }, kind: 'carry' },
    { from: SHOULDER_D, to: { at: 'blue-line', dx: 12, dy: 26 }, kind: 'skate' },
  ],
};

// ---------------------------------------------------------------------------
// 11. The middle drive — section 3.
//
// THE ROLES ARE THE OTHER WAY ROUND FROM `attack-the-seam`, which is why this is a
// second picture and not a copy of one. There the CARRIER drives the ice between
// two defencemen. Here the carrier is wide and a teammate WITHOUT the puck runs
// that route, which is the section's whole point: "the middle driver usually does
// not get the puck, and that is not the point."
//
// NO SHADED SEAM. `attack-the-seam` labels a band "the seam", and `check_zones.py`
// groups zone polygons by identical label — a second band under that name, drawn
// against two differently-placed defencemen, would report as a disagreement about a
// region rather than as the second instance it is. The two defencemen are drawn
// level rather than staggered here for the same reason: this diagram is not making
// a claim about how they retreat, it is making one about what the driver does to
// them.
//
// NOTHING IS DRAWN FINISHING AT THE NET. The drive stops more than twenty feet
// short of the goalmouth, which is the same limit `drive-the-net-before` states and
// for the same reason: what happens in the last few feet of a net drive is contact
// in front of a goaltender, and no diagram in this corpus teaches that.
// ---------------------------------------------------------------------------

const MD_CARRIER = { at: 'blue-line', dx: -3, dy: 30 };    // (22, 30)
const MD_DRIVER  = { at: 'blue-line', dx: -9, dy: 2 };     // (16, 2)
const MD_D_HIGH  = { at: 'blue-line', dx: 11, dy: 12 };    // (36, 12)
const MD_D_LOW   = { at: 'blue-line', dx: 11, dy: -12 };   // (36, -12)

const middleDrive = {
  id: 'entry-middle-drive',
  owner: 'content/systems/zone_entries.md',
  title: 'The middle drive',
  half: true,
  width: 900,

  caption:
    'A middle drive on the way into the zone, with the net being attacked at the right: a ' +
    'teammate without the puck skating hard through the middle of the ice, through the seam ' +
    'between the two defencemen, at the net — while the carrier comes in wide with the puck. ' +
    'The driver usually does not get it, and that is not the point. The point is that a ' +
    'defenceman who ignores a player skating at his net will get scored on, so he cannot ignore ' +
    'him — which means he cannot step up on the carrier either. One player, running one route, ' +
    'at speed, buys the carrier several extra feet of space, and those feet are the reason for ' +
    'the whole run. ' +
    'It only works if it is committed. A half-hearted middle drive is a player standing in the ' +
    'slot, which frees the defence rather than freezing it — and a still picture cannot show ' +
    'effort, so read that arrow as full speed rather than as a path. Two things are not drawn ' +
    'and are not optional. Your head is up: this is the one route where two defencemen can both ' +
    'stand you up in open ice, and looking down at the puck as you arrive is what turns that ' +
    'into an injury. And the drive stops well short of the goalmouth here, because what happens ' +
    'in the last few feet of a net drive is contact in front of a goaltender, which this picture ' +
    'does not teach. Where the two defencemen are drawn is one instance and not a system: how a ' +
    'defence meets a rush is a coaching choice.',

  describe:
    'The attacking half of the rink, the opposition net and goaltender at the right, the attack ' +
    'moving left to right. Two opposition defencemen are drawn as solid triangles just inside ' +
    'their own blue line, level with each other and about twelve feet either side of the middle ' +
    'of the ice. Two own players are drawn as open circles. One carries the puck wide on the ' +
    'upper side, just short of the blue line, with a skate-and-stickhandle route continuing ' +
    'down the wall into the zone. The other, without the puck, is in the middle of the ice behind ' +
    'the line, with a long plain route running between the two defencemen and on toward the net, ' +
    'finishing more than twenty feet short of the goalmouth. No puck is drawn on the driver and ' +
    'nothing in the picture shows contact.',

  players: [
    { id: 'D', team: 'opp', pos: 'D', at: MD_D_HIGH },
    { id: 'D', team: 'opp', pos: 'D', at: MD_D_LOW },
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'F', pos: 'F', at: MD_CARRIER, label: 'carrier, wide' },
    { id: 'F', pos: 'F', at: MD_DRIVER,  label: 'no puck, full speed' },
  ],

  // Not numbered: the drive and the carry happen together, and numbering them would
  // say one waits for the other.
  //
  // THE DRIVE runs from (16, 2) to (62, -3) — 46 ft, between the two defencemen. It
  // passes 12.1 ft from the upper one's anchor and 11.7 ft from the lower one's, so
  // it goes through the gap rather than through a body, and both of them lie BEHIND
  // its tip, which is what THE ARRIVAL INVARIANT in scripts/lib/rink.mjs scopes its
  // arrowhead rule to. The tip is 24 ft from the goaltender and 23 ft from the
  // goalmouth.
  //
  // THE CARRY is 20 ft: long enough to draw as the key's LONG, SMOOTH WAVE rather
  // than as one hump with an arrowhead on it, which is what 12 ft rendered as and
  // what `entry-three-lanes` above calls "a wiggle". It is not longer than that
  // because the section fixes the driver's line and says nothing about where the
  // carrier goes beyond "wide"; a route running to the goal line would author the
  // wide entry this section does not describe here, and `entry-wide` above already
  // owns that play. Its tip lies well up-ice of the upper defenceman, who is behind
  // it and therefore outside the arrowhead rule's scope.
  routes: [
    { from: MD_DRIVER,  to: { at: 'blue-line', dx: 37, dy: -3 }, kind: 'skate' },
    { from: MD_CARRIER, to: { at: 'blue-line', dx: 17, dy: 33 }, kind: 'carry' },
  ],
};

// ---------------------------------------------------------------------------
// 12. The trail-skate drag — section 2.
//
// FIVE NEW DIAGRAMS FOLLOW, ADDED IN ONE PASS TO CLOSE A COVERAGE GAP: sections
// 2, 3 (one subsection), 6, 10 and 11 had no rink diagram at all despite being
// some of the most spatial material in the document. Chosen over other
// candidates in those sections for a stated reason each — see the comment
// above every diagram below. Section 1 (the Tulsky findings) is not drawn: it
// is a shot-rate argument, not a spatial one, and a rink picture would not
// teach it. Section 8's forechecking angle is not redrawn: this file's own
// header above already records two failed attempts and the reason (angling is
// movement over time). Section 9's gap-distance scale is not redrawn either:
// [Defending the Rush] owns that scale in words, and this document says so.
//
// ⚠️ GEOMETRY NOTE FOR ALL FIVE: placements below are checked BY HAND against
// site/src/data/rink.json and against the glyph radii recorded in that file's
// $comment fields (forward circle r 2.9, defenceman triangle circumradius 3.6,
// both plus stroke) — not against a live render, because this session was
// told not to run build-diagrams.mjs (the coordinator owns builds and a
// concurrent build races destructively). Every clearance noted below is an
// estimate from the coordinate table, not a measured render. Confirm with
// check_geometry.py, a rebuild and diagram-reviewer before treating any of
// this as settled.
//
// THE PLAY: you are the far-side winger, a stride ahead of the puck carrier.
// Your body, hands and stick are already across the blue line; only your
// trailing skate is still legal ice. This diagram draws the universally-legal
// version of that instant — the blade gliding ON the twelve-inch painted line,
// which is onside in all four rulebooks — rather than the airborne version,
// which is legal under only two of them and cannot be drawn as a single frozen
// position without asserting a moment mid-air that a still picture cannot
// honestly place. The caption carries the book split in words instead.
//
// RULE TEXT VERIFIED THIS SESSION, grepped fresh rather than carried from the
// prose above (which was itself independently re-checked, not merely trusted):
//   sources/nhl_rules.txt:8812-8821 — "A player is off-side when both skates
//     are completely over the leading edge of the blue line... A player is
//     on-side when either of his skates are in contact with the blue line, or
//     on his own side of the line, at the instant the puck completely crosses
//     the leading edge... For the purposes of this rule, a 'skate' is to be
//     considered the blade of the skate only... If a player's skate has yet to
//     break the 'plane' prior to the puck completely crossing the leading
//     edge, he is deemed to be onside."
//   sources/iihf_rules.txt:6824-6831 (2025/26 book) — the same both-skates and
//     one-skate tests, word for word, and NO blade-only sentence in this
//     edition.
//   sources/iihf_rules_2026-27.txt:6930-6946 — the 2026/27 book, which DOES
//     add "a 'skate' is to be considered the blade of the skate only."
//   sources/nhl_rules.txt:791 — "twelve inches (12'') in width, and blue in
//     color" for the zone-dividing lines, confirming the line a trailing skate
//     may touch is a foot wide, not a mark.
//   sources/usah.txt:4664-4666 — Rule 630(a): "A player is considered
//     'offside' when the player does not have skate contact with any part of
//     the Neutral Zone or the blue line when the puck crosses the determining
//     edge of the blue line" — a contact test, not a plane test.
//   sources/hc.txt:5375-5377, 5475-5478 — Rule 6.11's "Only the player's
//     skate(s) that are in physical contact with the ice surface will be used
//     in determining an off-side," and Interpretation 3 to 6.11(a) in terms:
//     "A player has one skate above the blue-line (not touching the ice) and
//     one skate over the blue-line at the instant the puck completely crosses
//     the blue-line. OFF-SIDE."
// So: NHL and IIHF both let the trailing skate leave the ice without breaking
// the vertical plane; USA Hockey and Hockey Canada require actual contact.
// Two books of four, confirmed independently rather than carried from the
// prose above it.
// ---------------------------------------------------------------------------

const DRAG_WINGER = { at: 'blue-line', dy: 28 };          // (25, 28)
const DRAG_CARRIER = { at: 'blue-line', dx: -7, dy: 20 }; // (18, 20)
// Standing up at their own blue line — separated from the winger's lane by 16
// ft of y so the "head up" point reads as a general hazard of the entering
// zone rather than a claim that this specific defenceman is about to hit this
// specific winger, which is not what the section says.
const DRAG_D = { at: 'blue-line', dx: 3, dy: 12 };        // (28, 12)

const trailSkateDrag = {
  id: 'entry-trail-skate-drag',
  owner: 'content/systems/zone_entries.md',
  title: 'The trail-skate drag',
  half: true,
  width: 900,

  caption:
    'The trail-skate drag, drawn at the instant the puck is still a stride short of the line. ' +
    "The far-side winger's body, hands and stick are already in the attacking zone; only the " +
    'trailing blade is still on the paint, which keeps them onside everywhere, because a skate ' +
    'touching any part of the twelve-inch blue line counts as contact with it. The instant the ' +
    'puck completely crosses, the blade comes down and pushes through into the zone. Under the ' +
    'NHL and the IIHF, that trailing skate could instead be lifted, held behind the plane of the ' +
    'line without breaking it, and still be legal; under USA Hockey Rule 630(a) and Hockey ' +
    'Canada Rule 6.11 an airborne skate is offside, so keep it on the ice under those two books. ' +
    'The defenceman standing up at the line is exactly why the head stays up: the ' +
    "winger's body crosses before the skate does.",

  describe:
    'The attacking half of the rink, opposition net at the right. An own forward — the far-side ' +
    'winger — is on the blue line, body, stick and hands already inside the attacking zone, with ' +
    'a short route continuing on into the zone at speed. A second own forward, the puck carrier, ' +
    'is a stride behind, still short of the line, with the puck. An opposition defenceman stands ' +
    'up at the blue line, well clear of the winger, and the opposition goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: DRAG_D, label: 'standing up at the line' },
    { id: 'F', pos: 'F', at: DRAG_WINGER, label: 'trail skate on the paint' },
    { id: 'F', pos: 'F', at: DRAG_CARRIER, label: 'carrier, a stride behind' },
  ],

  // Not numbered: both routes happen in the same instant, not in sequence.
  routes: [
    // The push-through after the puck crosses. Ends well clear of DRAG_D
    // (dy separation stays above 15 throughout), so this does not read as
    // closing on him.
    { from: DRAG_WINGER, to: { at: 'blue-line', dx: 10, dy: 32 }, kind: 'skate' },   // (35, 32)
    // Stops short of the line by hand: 3 ft, "still a stride short of it".
    { from: DRAG_CARRIER, to: { at: 'blue-line', dx: -3, dy: 22 }, kind: 'carry' },  // (22, 22)
  ],

  // ⚠️ WAS dx -8, dy 21, i.e. (17, 21) — 1.41 ft from DRAG_CARRIER's own centre
  // (18, 20), an own-team forward: the puck landed inside his open ring and
  // collided with his own label letter. Moved to (23, 20), 5.0 ft clear — ahead
  // of him along the direction of his own carry rather than on top of him.
  puck: { at: 'blue-line', dx: -2, dy: 20 },   // (23, 20)
};

// ---------------------------------------------------------------------------
// 13. The drop pass — section 6.
//
// Section 6 had no diagram at all. A drop pass is inherently about a puck
// left in empty ice and a body arriving on it from a different angle than the
// one the defence is watching — exactly the kind of thing a still picture
// teaches better than prose can.
//
// THE FROZEN INSTANT is just after the drop: the puck sits alone, the carrier
// has already released it and is driving on as a decoy, and the trailer is
// still arriving. Drawing the moment of release itself would put two players
// on top of one puck; drawing it a beat later, as here, is the same
// convention `entry-three-lanes` above uses ("drawn at the instant...").
// ---------------------------------------------------------------------------

const DROP_PUCK_AT = { at: 'blue-line', dx: -10, dy: 5 };   // (15, 5)
const DROP_CARRIER = { at: 'blue-line', dx: -3, dy: 9 };    // (22, 9)
const DROP_TRAILER = { at: 'blue-line', dx: -20, dy: -12 }; // (5, -12)

const dropPass = {
  id: 'entry-drop-pass',
  owner: 'content/systems/zone_entries.md',
  title: 'The drop pass',
  half: true,
  width: 900,

  caption:
    'A drop pass approaching the line, attacking net at the right. The carrier has already left ' +
    'the puck rolling in the neutral zone, still short of the blue line, and drives on alone as ' +
    'a decoy — taking a defenceman with him rather than coasting. A trailing teammate, arriving ' +
    'from the far side with more speed than the defence has matched, skates onto the loose puck ' +
    'to carry it in himself. The drop is to a space, not to a stick: the receiver has to be seen ' +
    'and already moving before the puck is left. It answers one specific picture, a trailing ' +
    'teammate with room and speed behind you, and is not a default read. Dropped blind, with no ' +
    'trailer in sight, this is the worst turnover in hockey — a stationary puck left facing your ' +
    'own net.',

  describe:
    'The attacking half of the rink, opposition net at the right. A puck sits alone in the ' +
    'neutral zone, short of the blue line. An own forward who has just released it is already ' +
    'past it, angling on toward the blue line and into the zone as though he still carries it. A ' +
    'second own forward is well back and to the far side, with a long route arriving from behind ' +
    'toward the loose puck, stopping just short of it. Two opposition defencemen are positioned ' +
    'toward the side the first forward is driving into, and the goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 8, dy: 10 } },   // (33, 10)
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 9, dy: -6 } },   // (34, -6)
    { id: 'F', pos: 'F', at: DROP_CARRIER, label: 'drove on as the decoy' },
    { id: 'F', pos: 'F', at: DROP_TRAILER, label: 'arriving, has not touched it yet' },
  ],

  routes: [
    // ⚠️ WAS dy: 14, i.e. (39, 14) — a straight skate whose closest approach to the
    // opposition D at (33, 10) was 2.14 ft (at t = 0.61 along the chord), well
    // inside his 4.0 ft of triangle ink (3.6 circumradius plus half his 0.8
    // round-joined stroke — read off the glyph branches in rink.mjs, and the same
    // figure rink.json's `point` $comment derives). The line vanished under his
    // glyph and the arrowhead re-emerged the far side: a decoy skating through a
    // defenceman rather than past him — the only skate route in the corpus doing
    // that, per this round's diagram review. Steepened to dy: 20: closest approach
    // to (33, 10) is now 5.14 ft (t = 0.48), clear of the ink by more than a foot.
    // The tip (39, 20) is 11.66 ft from him, outside ARRIVAL.noArrow, so
    // check-arrivals.mjs's verdict is unchanged (still no finding on this route).
    { from: DROP_CARRIER, to: { at: 'blue-line', dx: 14, dy: 20 }, kind: 'skate' },   // (39, 20)
    // Stops about 5 ft short of the puck by hand (12,1) to (15,5) — arriving,
    // not yet on it, matching the label.
    { from: DROP_TRAILER, to: { at: 'blue-line', dx: -13, dy: 1 }, kind: 'skate' },   // (12, 1)
  ],

  puck: DROP_PUCK_AT,
};

// ---------------------------------------------------------------------------
// 14. The high triangle — section 3, "Entering with numbers".
//
// Four named 2-on-2 / 3-on-2 patterns are listed in that subsection and none
// is drawn. This is the one chosen, not all four: high triangle is the
// cleanest single frame for the section's own point — "arriving with an
// extra attacker is worth nothing unless it makes one defender responsible
// for two of you" — because it can show the cue (a defender committing to the
// wide driver) and the three roles at once without a route finishing on
// anyone. Midlane drive and triple drive both resolve to a driver arriving at
// the net, which this corpus does not draw for the reason `entry-middle-drive`
// above already states; drive-and-delay is the same turn `entry-delay-curl`
// already teaches, executed faster, per the body text's own cross-reference.
// ---------------------------------------------------------------------------

const TRI_CARRIER = { at: 'blue-line', dx: -5, dy: 32 };   // (20, 32)
const TRI_WIDE = { at: 'blue-line', dx: -5, dy: -32 };     // (20, -32)
const TRI_TRAILER = { at: 'blue-line', dx: -18, dy: 0 };   // (7, 0)
// Current position, partway through the shift toward the wide driver already —
// the route's own `from`, so check-arrivals can attribute the arrow to him
// rather than skipping it as ownerless.
const TRI_D_NEAR = { at: 'blue-line', dx: 10, dy: 12 };    // (35, 12)

const highTriangle = {
  id: 'entry-high-triangle',
  owner: 'content/systems/zone_entries.md',
  title: 'The high triangle',
  half: true,
  width: 900,

  caption:
    'The high triangle, one of several named ways to enter with an extra attacker — drawn here ' +
    'with the puck carrier driving wide, a second attacker driving wide on the far side with no ' +
    'puck, and the third trailing into the high slot. The read is whether a defenceman goes with ' +
    'the wide driver: here the near one shifts to cover him, which is what opens the shot, the ' +
    'pass across, or the drop behind for the trailer. A third attacker is worth nothing unless it ' +
    'makes one defender responsible for two of you — that single movement is the cue, not a ' +
    'route to memorise. Which named pattern your team actually runs — high triangle, midlane ' +
    'drive, triple drive, drive and delay — is a coaching choice, and most teams drill one or two ' +
    'rather than all of them, so ask rather than assume this is the one you will see.',

  describe:
    'The attacking half of the rink, opposition net at the right. Three own forwards approach ' +
    'the blue line: the puck carrier drives wide on the near side, a second forward without the ' +
    'puck drives wide on the far side, and a third trails through the middle toward the high ' +
    'slot. Two opposition defencemen are inside the zone; the nearer one has a short route ' +
    'sliding toward the side the puck carrier is driving into, and the farther one holds a ' +
    'central position. The goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: TRI_D_NEAR, label: 'goes with the wide driver' },
    { id: 'D', team: 'opp', pos: 'D', at: { at: 'blue-line', dx: 10, dy: -8 } },  // (35, -8)
    { id: 'F', pos: 'F', at: TRI_CARRIER, label: 'drives wide, has the puck' },
    { id: 'F', pos: 'F', at: TRI_WIDE, label: 'drives wide, no puck' },
    { id: 'F', pos: 'F', at: TRI_TRAILER, label: 'trails to the high slot' },
  ],

  // Not numbered: three players arriving together, the same convention
  // `entry-three-lanes` above states in terms.
  routes: [
    { from: TRI_CARRIER, to: { at: 'top-of-circle:right', dy: 10 }, kind: 'carry' },  // (54, 32)
    { from: TRI_WIDE, to: { at: 'top-of-circle:left', dy: -10 }, kind: 'skate' },     // (54, -32)
    { from: TRI_TRAILER, to: { at: 'high-slot', dx: -8 }, kind: 'skate' },            // (61, 0)
    // The near defenceman's continued shift toward the wide driver — an 8 ft
    // lateral slide, the same order of magnitude as `outsideShoulder`'s
    // defenceman route above (9.4 ft) for the same reason: a weight shift,
    // not a journey. Starts AT his own glyph (TRI_D_NEAR), not at a bare
    // point, so check-arrivals can attribute it.
    { from: TRI_D_NEAR, to: { at: 'blue-line', dx: 10, dy: 20 }, kind: 'skate' },     // (35,12)->(35,20)
  ],

  // ⚠️ WAS dx -6, dy 31, i.e. (19, 31) — 1.41 ft from TRI_CARRIER's own centre
  // (20, 32), an own-team forward: the puck landed inside his open ring and
  // collided with his own label letter. Moved to (20, 37), 5.0 ft clear — wide of
  // him toward the boards rather than on top of him.
  puck: { at: 'blue-line', dx: -5, dy: 37 },   // (20, 37)
};

// ---------------------------------------------------------------------------
// 15. Against a standing-up defence — section 10.
//
// Section 10 had no diagram at all, and it is the section the coordinator's
// brief named as the likely biggest gap: entering against a named defensive
// STRUCTURE, which is exactly what a rink picture is for. Of its four
// subsections (standing-up, 1-3-1, aggressive gap, power play), this one is
// chosen: the 1-3-1 structure is already drawn in full at `dump-flip-over-trap`
// above (one forechecker, three across, one back, and the flip going over
// it), and re-drawing it here would be the padding the brief warns against,
// not a second teaching point. Aggressive gap and the power play are both
// closer to a technique (change of pace; four across the line) than to a
// structure with a shape.
//
// TWO ANSWERS ARE DRAWN, NOT ALL FOUR THE SUBSECTION NAMES, chosen because
// together they cover ground no other diagram in this file does: the chip
// here is deliberately plain — no bowed swing-around — because
// `dump-chip-past` above already owns the detailed mechanic of a chip past a
// defenceman, and that defenceman is committing forward, not standing still.
// Drawing the same S-curve against a stationary defenceman would look like
// the same diagram twice for a different caption, which is exactly the
// clobbering-by-duplication this corpus's own conventions warn against. The
// late, unmarked fourth attacker is not drawn anywhere else in this file, so
// it carries the diagram's real weight. Attacking the seam between the two
// defencemen is not drawn here either: `attack-the-seam` (in a sibling
// module) already owns that shaded-lane shape, per the header comment on
// `entry-outside-shoulder` above, and `check_zones.py` groups shaded regions
// by label, so a second lane under a similar description would read as a
// disagreement rather than a second instance.
// ---------------------------------------------------------------------------

// ⚠️ MOVED from (27, 10). At that position — "close to the middle of the ice" per
// the old `describe` below — he was never in the wide attacker's path: the chip
// and the carrier's own route both passed more than 20 ft clear of him (measured
// this round, diagram review), so the caption's "chips it past him" and the
// describe's "curls around... to collect it" had no defenceman to be about.
// Repositioned into the lane the wide attacker (STAND_CARRIER) is actually
// skating, off toward the boards; his partner (STAND_D2, below) stays central.
const STAND_D1 = { at: 'blue-line', dx: 3, dy: 23 };    // (28, 23)
const STAND_D2 = { at: 'blue-line', dx: 2, dy: -10 };   // (27, -10)
const STAND_CARRIER = { at: 'blue-line', dx: -6, dy: 28 };  // (19, 28)
const STAND_LATE = { at: 'blue-line', dx: -20, dy: -25 };   // (5, -25)

const vsStandingUp = {
  id: 'entry-vs-standing-up',
  owner: 'content/systems/zone_entries.md',
  title: 'Against a standing-up defence',
  half: true,
  width: 900,

  caption:
    'A defence standing up at the blue line rather than backing in — one structure among ' +
    'several you will meet, holding the line level to take away the middle and daring you to go ' +
    'around it. Two answers at once: the wide attacker chips the puck past his stationary ' +
    'defenceman, who has no backward momentum to recover, and skates around to collect it — the ' +
    'ideal chip situation, because standing still leaves nothing to use against him — while a ' +
    'fourth attacker arrives late and unmarked well behind the play, because standing up means ' +
    'both defencemen are watching the puck rather than the ice behind it. Attacking the seam ' +
    'between the two of them, or swinging the puck to the weak side, are the other two answers ' +
    'to this same look and are not drawn here.',

  describe:
    'The attacking half of the rink, opposition net at the right. Two opposition defencemen ' +
    'stand at the blue line without backing in: the near one is positioned in the wide ' +
    "attacker's own lane, out toward the boards, and his partner holds centrally, denying the " +
    'middle. An own forward with the puck is near the blue line on the near side; a dashed ' +
    'route chips the puck past the near defenceman, staying wide toward the boards, and the ' +
    "forward's own route curls in front of him and back out to the boards to collect it. A " +
    'fourth own forward, well back in the neutral zone on the far side, has a long route ' +
    'arriving unmarked near the top of the far faceoff circle. The goaltender is in the crease.',

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: STAND_D1, label: 'holds the line, no momentum' },
    { id: 'D', team: 'opp', pos: 'D', at: STAND_D2, label: 'holds the line' },
    { id: 'F', pos: 'F', at: STAND_CARRIER, label: 'chips it past him' },
    { id: 'F', pos: 'F', at: STAND_LATE, label: 'late, unmarked' },
  ],

  routes: [
    // ⚠️ MEASURED AND REDRAWN this round. The chip used to run (21,30)->(41,36) and
    // the carrier's own route (19,28)->(35,30) — both more than 20 ft from STAND_D1
    // at its old position (27,10), so neither the chip nor the "curls around... to
    // collect it" of this diagram's own `describe` had a defenceman to pass or curl
    // around; see the note on STAND_D1 above. He now sits in the wide attacker's own
    // lane (28,23). The chip clears him by 8.67 ft (bow 3, closest approach at
    // t = 0.12) — genuinely past him, not merely elsewhere in the picture — and the
    // carrier's route bows inside him at 5.01 ft (bow -3, t = 0.32) before swinging
    // back out to the boards to collect it, which is the curl the `describe` claims.
    // Both clearances exceed his 4.0 ft of triangle ink (3.6 circumradius plus half
    // his 0.8 round-joined stroke).
    { from: { at: 'blue-line', dx: -3, dy: 30 }, to: { at: 'blue-line', dx: 25, dy: 35 },
      kind: 'pass', bow: 3 },   // (22,30) -> (50,35)
    { from: STAND_CARRIER, to: { at: 'blue-line', dx: 20, dy: 32 }, kind: 'skate', bow: -3 },  // (45, 32)
    // The long arrival: 5 ft off the frame's left edge by hand, the same
    // minimum `entry-outside-shoulder` above settles on and for the same
    // reason (2 ft clipped the frame there).
    { from: STAND_LATE, to: { at: 'top-of-circle:left', dy: -6 }, kind: 'skate' },    // (54, -28)
  ],

  puck: { at: 'blue-line', dx: -3, dy: 29 },   // (22, 29)
};

// ---------------------------------------------------------------------------
// 16. Squash-and-slide — section 11, "More aggressive alternatives".
//
// Section 11 had no diagram at all. Squash-and-slide is chosen over the other
// named defensive options in that subsection (F1 pressure with the D holding
// the dots; standing up at the line, drawn from the other side already at
// `entry-vs-standing-up` above; receiving the entry) because its own
// mechanism — two defencemen holding one depth and sliding across together
// "like a foosball bar" — is the one description in the whole document that
// is close to meaningless without a picture. A reader can act on "hold your
// depth, stand up, mark the dots" from words alone; "move like a foosball
// bar" is a simile for a shape, and shapes are what this format is for.
//
// TEAM LABELS ARE THE OTHER WAY ROUND FROM EVERY DIAGRAM ABOVE, ON PURPOSE.
// Sections 1-10 teach the reader as the attacker, so `own` attacks throughout
// this file. Section 11 is explicitly "everything above, from the other
// side" — the reader is defending here — so `own` is the defending pair and
// `opp` is the puck carrier. `notation.mjs`'s own rule is shape-for-position,
// fill-for-team, open-for-your-own-team: "your own team" means the reader's
// team in whatever role the section has them playing, not "the attacker" by
// default, so this is not a departure from the convention, only from this
// file's own habit so far.
// ---------------------------------------------------------------------------

const SLIDE_CARRIER = { at: 'blue-line', dx: -8, dy: 25 };  // (17, 25)
// All three own-team positions below are the CURRENT glyph position, and each
// is its own route's `from` — the convention `delayCurl`'s DELAY_SUPPORT above
// sets (glyph position and route start are the same object) — so
// check-arrivals can attribute every arrow rather than skipping it as
// ownerless. Each arrow then shows the direction of continued travel.
const SLIDE_D_NEAR = { at: 'blue-line', dx: 8, dy: 12 };    // (33, 12)
const SLIDE_D_FAR = { at: 'blue-line', dx: 8, dy: -22 };    // (33, -22)
const SLIDE_F = { at: 'blue-line', dx: 30, dy: -8 };        // (55, -8)

const squashAndSlide = {
  id: 'defend-squash-and-slide',
  owner: 'content/systems/zone_entries.md',
  title: 'Squash-and-slide',
  half: true,
  width: 900,

  caption:
    'You are defending here: squash-and-slide, one of several named ways to receive an entry — described publicly of ' +
    "Bruce Cassidy's Boston Bruins around 2018-19, not a universal system. The two defencemen " +
    'hold the same depth and slide across together like a foosball bar: the puck is on the near ' +
    'side here, so both slide toward it, the near one forcing the carrier outside while the far ' +
    'one holds square rather than dropping off deep. The first forward back does not join that ' +
    'pressure — his job is the slot, protecting the middle while the pair squashes the play to ' +
    'the wall. It buys time and space at a cost: one player sliding late, or a lazy backcheck ' +
    'leaving the slot, and the weak side is wide open. Standing up at the line, or receiving the ' +
    'entry with the defencemen simply holding the dots, are the alternatives — find out which ' +
    'your team actually runs.',

  describe:
    'The attacking half of the rink from the defending team’s point of view, their own net ' +
    'and goaltender at the right. An opposition forward carries the puck in on the near side, ' +
    'with a route continuing into the zone along that side. Two own defencemen, level with each ' +
    'other well inside their own blue line, each have a short route sliding sideways toward the ' +
    'puck side, the same distance and the same direction, so the pair moves as one unit. An own ' +
    'forward arrives from behind into the middle of the ice, well short of the slot area in ' +
    'front of the net, rather than joining the pressure on the puck carrier.',

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', pos: 'D', at: SLIDE_D_NEAR, label: 'forces the carrier outside' },
    { id: 'D', pos: 'D', at: SLIDE_D_FAR, label: 'slides the same distance' },
    { id: 'F', pos: 'F', at: SLIDE_F, label: 'protects the slot, not the puck' },
    { id: 'F', team: 'opp', pos: 'F', at: SLIDE_CARRIER, label: 'carries in on the near side' },
  ],

  routes: [
    { from: SLIDE_CARRIER, to: { at: 'blue-line', dx: 10, dy: 30 }, kind: 'carry' },  // (35, 30)
    // Both defencemen slide the same 7 ft, the same direction (+dy), so the
    // two arrows read as parallel rather than as two unrelated movements —
    // that parity is the entire point of the picture. Each starts at its own
    // glyph (SLIDE_D_NEAR / SLIDE_D_FAR), not at a bare point.
    { from: SLIDE_D_NEAR, to: { at: 'blue-line', dx: 8, dy: 19 }, kind: 'skate' },    // (33,12)->(33,19)
    { from: SLIDE_D_FAR, to: { at: 'blue-line', dx: 8, dy: -15 }, kind: 'skate' },    // (33,-22)->(33,-15)
    { from: SLIDE_F, to: { at: 'high-slot', dx: -3, dy: -3 }, kind: 'skate' },        // (55,-8)->(66,-3)
  ],

  // ⚠️ WAS dx -9, dy 26, i.e. (16, 26) — 1.41 ft from SLIDE_CARRIER's own centre
  // (17, 25). SLIDE_CARRIER is the opposition carrier here, drawn SOLID in
  // PALETTE ink (`#1b1c1e`) — the same hex as PALETTE.puck — so the puck sat
  // inside his fill, invisible against it, and broke his white "F". Moved to
  // (22, 27), 5.39 ft from his centre: clear of his 2.9 ft body and its 0.375 ft
  // of stroke, past the corpus's median puck-to-nearest-glyph distance of
  // 4.61 ft, and ahead of him along his own route rather than off to one side.
  puck: { at: 'blue-line', dx: -3, dy: 27 },   // (22, 27)
};

export default [
  threeLanes,
  wideEntry,
  delayCurl,
  hardRim,
  softAreaDump,
  chipPast,
  crossCorner,
  flipOverTrap,
  trapezoidAim,
  outsideShoulder,
  middleDrive,
  trailSkateDrag,
  dropPass,
  highTriangle,
  vsStandingUp,
  squashAndSlide,
];
