/**
 * Diagrams for content/systems/forechecking_systems.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * ⚠️ THIS FILE HOLDS ONE OVERVIEW DIAGRAM, `forecheck-angling`, ALONGSIDE THE EIGHT SHAPE
 * DIAGRAMS. It is the exception to "every player and every route below is one its prose
 * describes [a named system]" — see its own header comment, just above `forecheck212`
 * below, for the design argument and why it was contested.
 */

// The carrier's exit point, named once because three things refer to it: the end
// of the carry, the start of the pass, and the lane F2 is attacking.
const EXIT = { at: 'faceoff-dot:right', dx: 12, dy: 4 };   // (81, 26)
const F1_AT = { at: 'goal-line', dy: -14 };                // (89, -14)
const F2_AT = { at: 'top-of-circle:right', dx: 14, dy: -2 }; // (68, 20)
// Clear of the goal frame (x 89-92.3, y +-3): the defender triangle is 6.2 ft
// across, and at dy 2 it was drawn sitting on the net's back rail.
const CARRIER = { at: 'behind-net', dy: 6 };               // (94, 6)

// ===========================================================================
// OVERVIEW — ANGLING. The only diagram in this file that is not a shape.
//
// AN AUDIT OF ALL 31 RINK DOCUMENTS FOUND ONLY TWO THAT JUSTIFY AN OVERVIEW DIAGRAM, and
// this document is one of them, for a specific and quotable reason: its own "A Note on
// Language" section calls angling "the foundation of everything below" — the strongest
// explicit page-defining-idea marker the audit found anywhere — while every other diagram
// in this file, including the five named systems and the F1/F2/F3 rotation set, draws a
// SHAPE rather than the skill underneath it. ⚠️ THE VERDICT WAS CONTESTED: independent
// review passes split 2-2 on whether this earns an Overview diagram at all, against five
// sibling `positions/` documents in the same audit where every pass agreed the answer was
// no. It is carried on the Note-on-Language evidence alone, and a future editor who
// disagrees has as much standing to remove it as the argument that put it here.
//
// FOLLOWS THE OVERVIEW DESIGN RULE `defender-pair-overview` established (defender.mjs):
// draw the ONE page-defining idea as a single representative SITUATION, not a map of the
// page's regions. This document alone names at least three region-scale coaching choices
// (which side F1 angles to, weak-side vs. strong-side F3, spread vs. stacked) — three
// hedges will not fit one caption a listener hears cold, first, with no context. So this
// draws the one moment the whole document depends on and nothing else: a forechecker
// closing on a puck carrier retrieving it behind his own net.
//
// AN EXISTING ANGLING DIAGRAM WAS CHECKED AND REJECTED AS A BORROW.
// body_contact_and_battles.mjs already owns `angling-your-route`, but it draws open-ice
// angling against a rush carrier in the neutral zone, defined against a shaded middle
// lane and owned by a document teaching a different moment entirely — not a forecheck
// closing on a retrieval behind the net. Its carrier is never behind his own net and its
// defender is never a forechecker, so borrowing it here would misdirect the reader to the
// wrong picture rather than teach this document's own idea.
//
// NO F1/F2/F3. The section defining those labels ("F1 / F2 / F3 — Roles, Not People")
// comes LATER in the document than the Overview, so a reader meeting this picture first
// has not been told the roles exist. The two players are drawn as the generic
// "forechecker" and "puck carrier" the Overview's own prose uses, not as roster letters —
// unlike every system diagram below, which is free to use them because its section
// already has.
//
// REUSES F1_AT AND CARRIER FROM forecheck-212 BELOW, DELIBERATELY, rather than inventing a
// second pair of anchors for the same idea, and the route is forecheck-212's own route 1
// — "F1 takes away the weak side" — copied verbatim, `bow: -2` included. That route
// already stops well short of the carrier for a reason recorded in forecheck-212's own
// comment: two earlier attempts to draw the finish of the angle were each wrong (one
// pointed at the puck, one curved through the crease), and both passed every geometric
// check that existed at the time. Reusing the survivor costs nothing new to get wrong.
//
// CLEARANCE, measured on the drawn quadratic and not merely at the endpoint — the
// file-wide warning is that `check-arrivals.mjs` tests only the straight chord and the
// terminal tangent, so a route that bows through a glyph mid-curve is invisible to it.
// Sampled at k = 0..1 in steps of 0.0005 on this exact curve: closest approach to the
// carrier's anchor (94, 6) is 11.40 ft, against the 4.0 ft triangle threshold
// (site/scripts/lib/rink.mjs's GLYPH_INK.triangleR inflated by its stroke). The minimum
// lands at k ~ 1, i.e. at the tip, so the route never passes closer to the carrier's
// glyph mid-curve than it finishes — there is no hidden near-miss partway along.
//
// A GOALTENDER IS DRAWN (see the players comment below), unlike an earlier version of
// this diagram, which dropped the glyph to suppress a check-arrivals advisory. That was
// wrong: `check-arrivals.mjs` grades an opposing goaltender WARN, never FAIL — the rule
// is deliberately built to tolerate exactly this near-miss on the one target every
// rulebook protects unconditionally (see THE ARRIVAL INVARIANT in rink.mjs). This route's
// tip sits 7.81 ft from the goaltender's usual crease anchor, inside `ARRIVAL.noArrow`
// (9 ft), and forecheck-212 already carries the identical WARN on this identical route —
// so this diagram repeats a reviewed advisory rather than introducing a new one. Eight of
// this file's eight other diagrams ALL draw a goaltender for scene context and this one should
// not be the exception.
//
// NO CONTACT DRAWN, on the brief's own instruction, and the geometry above is why this
// picture carries none of the SAFETY SCOPE paragraphs on forecheck-212 and its siblings
// below: those pictures put a carrier and an ARRIVING forechecker close enough together
// that the ARRIVAL INVARIANT in rink.mjs (9 ft, for a hard arrowhead violation) is the
// operative constraint. This route finishes more than 11 ft from the carrier, i.e. the
// angle being SET, well before any arrival — a materially different moment from the one
// those paragraphs exist to cover. The caption still says plainly that no contact is
// drawn and states the document's own "eliminate options, not a hit" framing (both
// already in the Overview's own body text, not a new claim), but carries no quotation
// about where a hit lands or what tier it draws, because this picture does not depict one.
// ===========================================================================

const forecheckAngling = {
  id: 'forecheck-angling',
  owner: 'content/systems/forechecking_systems.md',
  title: 'Angling the retrieval',
  half: true,
  width: 900,

  caption:
    'The skill everything below assumes: skate at the space you want to deny, not at the puck. ' +
    'One forechecker curls in from the weak side on a puck carrier retrieving it behind his own ' +
    'net, cutting off that side and forcing him back toward the strong-side wall — no contact is ' +
    'drawn, because the aim is to eliminate options, not land a hit. Which side to take away is ' +
    'a coaching choice, not a rule: the common default takes the middle and forces the retreat ' +
    'to the wall, some coaches invert it, so find out which your team plays before your first shift.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Three players: the goaltender ' +
    'in the crease, their defenceman behind the net with the puck, and one forechecker below and ' +
    'to the near side of him. A single route runs from the forechecker up and across, curving to ' +
    'finish on the far side of the defenceman from the boards, well short of him, in open ice. No ' +
    'route is drawn for the defenceman and no contact is shown.',

  players: [
    // A goaltender, as scene context — see the header comment above for why this glyph was
    // restored and what it costs (one reviewed WARN, shared with forecheck-212 on this
    // identical route, never a build failure).
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', team: 'opp', pos: 'D', at: CARRIER, label: 'retrieving the puck' },
    { id: 'F', pos: 'F', at: F1_AT,                label: 'the forechecker' },
  ],

  routes: [
    // Verbatim forecheck-212's route 1 — see the header comment above for the measured
    // clearance (11.40 ft to the carrier, on the drawn curve).
    { from: F1_AT, to: { at: 'behind-net', dx: -3, dy: -5 }, kind: 'skate', bow: -2 },
  ],

  puck: { at: 'behind-net', dx: -3.5, dy: 10 },
};

const forecheck212 = {
  numbered: true,
  id: 'forecheck-212',
  owner: 'content/systems/forechecking_systems.md',
  title: 'The 2-1-2 forecheck',
  half: true,
  width: 900,

  caption:
    'A 2-1-2 forecheck at the moment the opposing defenceman retrieves the puck behind the net. ' +
    'F1 arrives from the weak side and angles the carrier towards the strong-side wall; ' +
    'F2 attacks the first passing option rather than the puck; ' +
    'F3 stays high in the middle at the top of the circles; ' +
    'both defencemen hold the offensive blue line. ' +
    'This is one forechecking system among several, and three of the details shown are ' +
    'coaching choices rather than rules — which way F1 angles the carrier, which side F3 ' +
    'sits on, and the fact that it is drawn as a spread 2-1-2 with F1 and F2 arriving from ' +
    'opposite sides rather than the stacked variant that sends both at the same corner — ' +
    'so find out which your team runs. ' +
    'The picture shows F1 taking the weak side away; how a forechecker finishes an angle is ' +
    'movement over time that a still diagram cannot carry, and is treated separately. ' +
    'Whether the first pass beats F2, or F2 beats the pass, is the contest the system turns on, ' +
    'and the diagram does not settle it. ' +
    // SAFETY SCOPE, ruled by safety-reviewer. WHY IT IS HERE AND WHY IT IS SHORT.
    // The long body-checking block on forecheck-122 and forecheck-131 is NOT the general
    // treatment: it is the reader-facing half of a round-27 remedy for two routes graded
    // Critical, and it opens by naming the route it is about ("Note what F2 is drawn doing").
    // So it tracked those two routes' history rather than the reader's exposure -- and the
    // section with the MOST exposure is this one, the house default, whose F1 "goes hard at
    // the puck carrier", and whose caption carried no rule-set scope flag of any kind.
    // Pasting the 1,187-char block here would make the warning longer than the teaching on a
    // 994-char caption voiced as one unbroken block, so it is not pasted. What is carried is
    // the part this PICTURE creates: the carrier is drawn behind his own net and route 2 takes
    // him out to the wall with his back turned. Rule 43.2 and the major tier are NOT repeated
    // here because the section's own facts block, three sentences earlier in the audio, now
    // carries them -- see forechecking_systems.md, the 2-1-2 block.
    // GLYPH LAST, no exceptions: remark-corpus.mjs captionNodes() promotes from the first
    // warning glyph to the END with no closing delimiter, so anywhere but last ambers the
    // tactical prose after it. md_to_speech.py maps the glyph away, so this is site-only.
    // Rule text checked against sources/ this session, not carried in:
    // USAH 604(a) prohibits body checking "in the 12 & under youth age classifications and
    // below, all Girls'/Women's age classifications and all non-check Adult classifications";
    // HC 7.3 "applies only in divisions of U13 and below, in female hockey, and any other
    // divisions approved by a Member of Hockey Canada" (the rule's own sentence opens "This
    // rule applies only..."; the elided form is the one the owning section carries inline).
    '\u26A0\uFE0F Going hard at the carrier does not mean going through him. The carrier drawn here is behind his own net and about to turn his back to the boards, so the onus is on you as the arriving player: take the puck, take the ice, or angle him off it, and never finish into his back. Find out first whether you may body check in this game \u2014 the answer can change per fixture, not just per division. USA Hockey Rule 604(a) bars it at 12 & under and below, in every girls\' and women\'s classification and in non-check adult hockey; 604(b) bars it outright any time a checking team plays a non-checking one; and Hockey Canada Rule 7.3 at U13 and below, throughout female hockey and in any other division a Member approves.',

  describe:
    'Attacking half of the rink, the opposition net at the right. Four opposition players: ' +
    'the defenceman D1 behind the net with the puck; the partner D2 low on the weak side, the ' +
    'reverse option; the winger W1 on the strong-side half-wall, the first passing option; the ' +
    'winger W2 on the weak-side half-wall; and the goaltender in the crease. Five own players: ' +
    'F1 deep on the weak side at the goal line, F2 deep inside the strong-side circle, F3 high in ' +
    'the middle at the top of the circles, and two defencemen on the offensive blue line. ' +
    'Four numbered routes: one, F1 takes the weak side away; two, the carrier ' +
    'skates the puck out to the strong-side wall; three, F2 attacks the passing lane; four, the ' +
    'first pass to W1. The opposition centre is not drawn.',

  players: [
    // Opposition. All four are players the section names: the carrier, the partner
    // it reverses to, the strong-side winger, and the cross-ice option F3 covers.
    // The first draft drew only two, which made the forecheck look free — and the
    // section's headline concession is that it is not ("What it concedes:
    // everything behind it").
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER,                              label: 'puck carrier' },
    { id: 'D2', team: 'opp', pos: 'D', at: { at: 'corner:left', dx: -4, dy: 6 }, label: 'the reverse' },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right',                    label: 'first option' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left',                     label: 'cross-ice option' },

    // Own team. Two deep, one high, two on the line — the shape the facts block states.
    // F3's coordinate is the section's own phrase rather than a guess: the facts
    // block says "roughly the top of the circles", so it is top-of-circle with the
    // sided offset taken back out, i.e. (54, 0).
    { id: 'F1', pos: 'F', at: F1_AT,                                  label: 'takes the weak side' },
    { id: 'F2', pos: 'F', at: F2_AT,                                  label: 'takes the option' },
    { id: 'F3', pos: 'F', at: { at: 'top-of-circle:right', dy: -22 }, label: 'high, middle' },
    { id: 'D',  pos: 'D', at: 'point:right',                          label: 'holds the line' },
    { id: 'D',  pos: 'D', at: 'point:left',                           label: 'holds the line' },
  ],

  // Numbered, because four simultaneous arrows do not say what happened first —
  // and here the order is the whole lesson. The section names route 4 twice: once
  // as the thing F2 exists to prevent, once as the counter that beats the system
  // ("a quick first pass before F2 arrives").
  routes: [
    // 1 — F1 takes away the weak side, so the carrier's only route out is the
    //     strong-side wall. This route deliberately stops there and does **not**
    //     draw the finish of the angle.
    //
    //     Two earlier attempts drew that finish and both were wrong. The second
    //     ended with F1's terminal tangent at 85 degrees against the carrier's
    //     134 — within 5 degrees of pointing straight at the puck, which is what
    //     "Do not skate at the puck. Skate at the space you want to deny" forbids
    //     by name — and its curve crossed y=0 at x=85.7, through the crease. Both
    //     were invisible in the picture and both passed every geometric check.
    //     Angling is a long section about movement over time; a still frame cannot
    //     carry it, so this diagram stops asserting it and the caption sends the
    //     reader to the section instead.
    { from: F1_AT, to: { at: 'behind-net', dx: -3, dy: -5 }, kind: 'skate', bow: -2 },
    // 2 — the carrier, with the middle taken away, carries out to the strong-side wall.
    // Bowed towards the end boards, so the carrier's route hugs the wall and F1's
    // arrives inside it. Bowed the other way the two curves overlay each other and
    // the picture shows one line where it means to show a forechecker and a carrier.
    { from: CARRIER, to: EXIT, kind: 'carry', bow: -6 },
    // 3 — F2 attacks the lane, not the puck.
    { from: F2_AT, to: { at: 'half-wall:right', dx: 9, dy: -8 }, kind: 'skate', bow: 2 },
    // 4 — the first pass. Whether it beats F2 is not settled here, and must not be.
    { from: EXIT, to: { at: 'half-wall:right', dy: -3 }, kind: 'pass' },
  ],

  puck: { at: 'behind-net', dx: -3.5, dy: 10 },
};

// ===========================================================================
// The other systems, drawn against the same opposition as the 2-1-2 above.
//
// The section's argument is that these are ALTERNATIVES a reader has to be able
// to tell apart — "there is no single correct forecheck ... a family of named
// systems, each buying pressure at the price of risk". A reader can only compare
// pictures if the only thing that changes between them is the thing being
// compared. So the opposition cast, the puck and the carrier's position are held
// identical across forecheck-212, forecheck-212-stacked, forecheck-122 and
// forecheck-131, and every difference the reader sees is a difference in the
// system.
//
// CARRIER is shared with forecheck-212 above deliberately: it is the same point,
// and a second copy of it is a second place it can drift.
//
// THE FROZEN SHAPE IS THE CLAIM. A system named for its rows is a lie if the
// glyphs do not sit in those rows, and the reader who most needs the picture is
// exactly the one who cannot tell. Count the glyphs in the render, by depth,
// before believing any of these. The bands here are: 1-2-2 → one forward at x 78,
// two at x 54 and 57, two defencemen at x 25; 1-3-1 → x 78, then three at exactly
// x 54, then one at x 25; both 2-1-2s → two forwards deep, one at x 54, two at
// x 25.
const OPP_D2 = { at: 'corner:left', dx: -4, dy: 6 };      // (78, -28) — the partner
const OPP_PUCK = { at: 'behind-net', dx: -3.5, dy: 10 };  // (90.5, 10)

// NO LABEL ON THE CARRIER IN THE THREE DIAGRAMS BELOW, and that is deliberate.
// The carrier sits at x 94, and a label of any useful length placed directly
// above or below it runs off the end boards, so the placer pushes it sideways —
// where, in these shapes, it lands nearer the goaltender than the defenceman it
// names. That is the exact defect the placer's own comments record ("'puck
// carrier' was once placed 7.4 ft from F1 and 20.3 ft from the carrier it
// named"), and the placer cannot see it here because it only knows about
// *labelled* anchors and the goaltender carries no label. The puck glyph sits on
// the carrier and the `describe` names them, which is enough. The 2-1-2 above can
// carry the label because its F1 is on the other side of the net.

// ---------------------------------------------------------------------------

// The stacked variant. It exists as a diagram because the 2-1-2 above has to
// hedge in its caption that it is "drawn as a spread 2-1-2 ... rather than the
// stacked variant that sends both at the same corner", and a hedge a reader
// cannot picture is a hedge that does nothing. Two pictures of the same system
// settle it in a glance.
const STACK_F1 = { at: 'goal-line', dy: 18 };                // (89, 18)
// Inside the strong-side circle rather than up on the wall beside their winger.
// At (78, 27) the only label slot the placer could find for F2 was one that came
// out 7.2 ft from the opposing winger and 13 ft from F2 — a label reads as
// belonging to whatever is nearest it, whatever the leader line says, and the
// placer cannot see the winger because the winger carries no label of its own.
const STACK_F2 = { at: 'faceoff-dot:right', dx: 5, dy: 2 };  // (74, 24)

const forecheck212Stacked = {
  id: 'forecheck-212-stacked',
  owner: 'content/systems/forechecking_systems.md',
  title: 'The stacked 2-1-2',
  half: true,
  width: 900,

  caption:
    'The strong-side or stacked 2-1-2 — the variant of the diagram above, drawn against the same puck ' +
    'carrier. F1 and F2 both come from the same side to overload one corner, and F3 shades to the puck side ' +
    'as well instead of sitting weak-side, so all three forwards are on one half of the ice. ' +
    'The count has not changed — two forwards deep, one high, both defencemen on the offensive blue line — ' +
    'and only the sides have moved, which is why this is the same system and not a different one. ' +
    'What the shape gives up is drawn as well: the far-side breakout, conceded deliberately, with the carrier ' +
    'free to come out the other way into the half of the ice none of your forwards is standing on. ' +
    'Which of the two your team runs is a bench call rather than a rule, and it decides whether F2 following ' +
    'F1 into the same corner is the plan or one of the standing mistakes in forechecking — so find out before your ' +
    'first shift, not during it. ' +
    'F1 and F2 are drawn arriving nowhere, because how a forechecker finishes an angle is movement over time ' +
    'that a still frame cannot carry. ' +
    // SAFETY SCOPE, ruled by safety-reviewer. See the note on forecheck-212 above for why this
    // is short and why it is here at all. ONE OBJECTION ANSWERED, because it is a good one: a
    // diagram reviewer argued a counterweight about finishing a check is "a claim the picture
    // does not make", since the only route in this diagram belongs to the OPPOSITION carrier.
    // True of the routes, not of the caption. The caption itself instructs "F1 and F2 both come
    // from the same side to overload one corner", against a carrier it names as being behind
    // his own net -- so the caption is the thing making the claim, and the counterweight is
    // attached to the caption's instruction rather than to a route. Glyph last, same reason.
    '\u26A0\uFE0F Sending two forwards into one corner is not a licence to go through the man in it. The carrier drawn here is behind his own net and about to turn his back to the boards, so the onus is on the arriving player: take the puck, take the ice, or angle him off it, and never finish into his back. Find out first whether you may body check in this game \u2014 the answer can change per fixture, not just per division. USA Hockey Rule 604(a) bars it at 12 & under and below, in every girls\' and women\'s classification and in non-check adult hockey; 604(b) bars it outright any time a checking team plays a non-checking one; and Hockey Canada Rule 7.3 at U13 and below, throughout female hockey and in any other division a Member approves.',

  describe:
    'Attacking half of the rink, the opposition net at the right, and the same five opposition players as the ' +
    'other forecheck diagrams: the defenceman D1 behind the net with the puck, the partner D2 low on the far ' +
    'side, the wingers W1 and W2 on the two half-walls, and the goaltender in the crease. Five own players, ' +
    'all three forwards on the strong side: F1 deep at the goal line towards the strong-side corner, F2 deep ' +
    'inside the strong-side circle, F3 high but shaded across to the strong side rather than sitting in the ' +
    'middle, and both defencemen on the offensive blue line at the two points. One route: the carrier taking ' +
    'the puck out around the back of the net to the far corner, the escape the shape concedes. The whole weak ' +
    'side of the ice below the net is empty of own players.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER },
    { id: 'D2', team: 'opp', pos: 'D', at: OPP_D2 },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right' },
    // Unlabelled, and not for want of trying. Their winger and their partner sit
    // 13.8 ft apart down there (10.3 ft when half-wall.y was 33, which is where the
    // "10 ft" this used to read came from), so every label slot the placer can
    // reach is about as near one as the other — "the far-side option" came out
    // 11.1 ft from the
    // defenceman and 11.5 ft from the winger it named. The conceded side is said
    // by the route running into it, by the emptiness of that half, and by the
    // caption, which is enough.
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // "F1 and F2 both come from the same side to overload one corner". F1 is at
    // the same depth as the spread version's F1 and on the opposite side of the
    // net, so the two pictures differ in exactly the thing being compared.
    { id: 'F1', pos: 'F', at: STACK_F1,                       label: 'first in' },
    { id: 'F2', pos: 'F', at: STACK_F2,                       label: 'same corner' },
    // "F3 shades to the puck side instead, so that all three forwards overload
    // one corner and the far-side breakout is conceded deliberately." Same depth
    // as the spread version's F3 (x 54); only the side has changed.
    { id: 'F3', pos: 'F', at: { at: 'top-of-circle:right', dy: -6 }, label: 'shades to the puck' },
    { id: 'D',  pos: 'D', at: 'point:right',                  label: 'holds the line' },
    { id: 'D',  pos: 'D', at: 'point:left',                   label: 'holds the line' },
  ],

  // One route, and it is the cost rather than the benefit: "the far-side breakout
  // is conceded deliberately".
  //
  // Bowed hard, because the straight line between these two points goes through
  // the net. At bow 4 it cleared the back rail (x 92.33) by a tenth of a foot on
  // the base curve — and a carry is drawn as a wave with an amplitude of 1.25 ft
  // either side, so the drawn line sat on the net. At bow 8 the base curve crosses
  // the middle of the ice at x 94.8 and the wave's inner edge at 93.6.
  routes: [
    { from: CARRIER, to: { at: 'corner:left', dx: 4, dy: 8 }, kind: 'carry', bow: 8 },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------

// F1 in BOTH containment systems below. The section describes the two jobs in
// almost the same words — 1-2-2: "pressures the carrier but does not commit to
// winning the puck ... cut the ice in half"; 1-3-1: "does not chase. They steer.
// They take away the middle and shepherd the breakout to one side" — and nowhere
// distinguishes where the two stand. Drawing them in one place says what the
// section says: the difference between a 1-2-2 and a 1-3-1 is entirely BEHIND F1.
//
// Deep and inside the strong-side dot, so the glyph itself shows "stay on the
// inside so it cannot come back across". Neither system gets an F1 route: how a
// forechecker finishes an angle is movement over time, it is its own section, and
// the note on route 1 of the 2-1-2 above records what happened both times it was
// drawn anyway.
const F1_STEER = { at: 'faceoff-dot:right', dx: 9, dy: -8 };   // (78, 14)

const EXIT_122 = { at: 'faceoff-dot:right', dx: 14, dy: 5 };   // (83, 27)
const F2_FOX = { at: 'top-of-circle:right', dy: 8 };           // (54, 30)

const forecheck122 = {
  numbered: true,
  id: 'forecheck-122',
  owner: 'content/systems/forechecking_systems.md',
  title: 'The 1-2-2 forecheck',
  half: true,
  width: 900,

  caption:
    'A 1-2-2 forecheck against the same puck carrier as the 2-1-2 above, so the two can be compared: one ' +
    'forward deep, two across the middle of the zone, two defencemen high at the offensive blue line. ' +
    'One forward deep and not two is the whole difference — this system concedes the retrieval on purpose and ' +
    'builds a wall the opponent has to pass through instead. ' +
    'F1 pressures without committing to winning the puck, cutting the ice in half and then staying inside so ' +
    'the play cannot come back across; F2 sits up the strong-side wall and is the player who actually creates ' +
    'the turnover, by jumping an outlet F1 has made predictable; F3 holds the high middle. ' +
    'Some coaches teach the three as the dog, the fox and the hawk, which is a memory hook some teams use ' +
    'rather than standard hockey vocabulary, and the labels here follow it. ' +
    'Three things drawn are coaching choices and not laws — which side F1 cuts off, the weak-side defenceman ' +
    'holding the middle rather than the far point, and the choice of this system at all, since the ' +
    'more usual default is the 2-1-2 — so find out which your team runs. ' +
    'Whether the outlet beats F2 or F2 beats the outlet is the contest the system turns on, and the diagram ' +
    'does not settle it. ' +
    // SAFETY SCOPE. The long body-checking block below is VERBATIM SHARED by four captions in this
    // file -- forecheck-122, forecheck-131, forecheck-pinch and forecheck-press. 604(b)'s text, its
    // provenance and why it may not be split from 604(a) are argued out in the comment above
    // forecheck-pinch. Edit all four together or they drift.
    'Note what F2 is drawn doing: arriving at the wall, not at the winger. ⚠️ Where body checking is allowed at all, the arriving player carries the whole onus — take the puck, take the ice, or angle them off it. Neither the NHL nor the IIHF writes a minor for checking from behind at all — Rule 43.2 in both — so the floor for finishing into the back of a player who is facing away is a major with a game misconduct on it: mandatory under NHL 43.3 and 43.5, and at the referee\u2019s discretion under IIHF 43.3 for a check that recklessly endangers the fouled player. And in many leagues body checking is not allowed at all, so find out which book you are under, and whether you may body check in this game rather than merely in your division, before you plan on making contact: USA Hockey Rule 604(a) prohibits it at 12-and-under and below, in every girls\' and women\'s classification and in non-check adult hockey, and lets a local governing body prohibit it in any classification on top of that; 604(b) bars it outright any time a checking team plays a non-checking one; Hockey Canada Rule 7.3 penalises it at U13 and below, throughout female hockey and in any other division a Member approves; and the IIHF book restricts by category instead of age, allowing bodychecking in women\'s hockey only where there is a clear intention of playing the puck or an attempt to gain possession of it, subject to the exception the rule itself then sets out.',

  describe:
    'Attacking half of the rink, the opposition net at the right. The same five opposition players as the ' +
    '2-1-2 diagram: the defenceman D1 behind the net with the puck, the partner D2 low on the far side as the ' +
    'D-to-D reset, the wingers W1 and W2 on the two half-walls, and the goaltender in the crease. Five own ' +
    'players in three bands: F1 alone deep, inside the strong-side faceoff dot; F2 up the strong-side wall ' +
    'and F3 in the high middle, level with each other around the top of the circles; and both defencemen on ' +
    'the offensive blue line, the strong-side one at the point and the weak-side one shaded into the middle. ' +
    'Three numbered routes: one, the carrier picks the puck up unmolested and carries it out to the ' +
    'strong-side wall; two, F2 jumps down the wall onto the outlet; three, the outlet pass to W1. F1 is drawn ' +
    'with no route.',

  players: [
    // Opposition — identical to forecheck-212, for the comparison to mean anything.
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER },
    // The section's own counter to this system: "D-to-D passes to shift the wall",
    // and "if the whole shape simply shifts across ... D-to-D is a free reset".
    { id: 'D2', team: 'opp', pos: 'D', at: OPP_D2,             label: 'the D-to-D reset' },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right',  label: 'the outlet' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // One glyph deep (x 78), two level in the middle band (x 54 and 57), two on
    // the line (x 25). The labels are the animal names alone because the jobs do
    // not fit: the placer sizes a label by its character count, and the long
    // versions crowded the carrier's corner badly enough to move other labels
    // onto the goaltender. The caption carries the jobs.
    { id: 'F1', pos: 'F', at: F1_STEER,                        label: 'the dog' },
    { id: 'F2', pos: 'F', at: F2_FOX,                          label: 'the fox' },
    // "F3 (hawk) roams the high middle, protecting the centre lane." Level with
    // F2 rather than behind it, because the shape's middle layer is a layer.
    { id: 'F3', pos: 'F', at: { at: 'high-slot', dx: -12 },     label: 'the hawk' },
    { id: 'D',  pos: 'D', at: 'point:right',                    label: 'holds the line' },
    // "the weak-side D stays home in the middle as the safety" — and the counter
    // section is explicit that this player is "the safety *inside* the shape,
    // covering the middle behind the forwards, not a fifth man stationed behind
    // the pair". Drawn at the line, shaded to the middle, which is what that says.
    { id: 'D',  pos: 'D', at: { at: 'point:left', dy: 12 },     label: 'the safety' },
  ],

  routes: [
    // 1 — "You are letting their defencemen pick the puck up unmolested and
    //     choose a play." That concession is the system, so it is route one.
    //     Bowed toward the end boards so it hugs the wall; it crosses the goal
    //     line at y = 21, nowhere near the goal mouth.
    { from: CARRIER, to: EXIT_122, kind: 'carry', bow: -6 },
    // 2 — "F2 is the one who actually creates the turnover in this system, by
    //     jumping an outlet pass that F1 has made predictable." Ordered BEFORE
    //     the pass, because jumping a pass means anticipating it — the same
    //     ordering the 2-1-2 above uses for F2 attacking the option.
    //
    //     Bowed inward and finishing outward toward the wall. The measurement
    //     that matters is against the PLAYER, not the puck — an earlier version of
    //     this comment quoted an angle to the puck, which is the wrong reference,
    //     and quoted two figures neither of which reproduced against either
    //     coordinate set. A guard whose arithmetic does not check out is worse
    //     than none: the next editor "corrects" the drawing to match it.
    //     SAFETY, ruled by safety-reviewer. This route is governed by THE ARRIVAL
    //     INVARIANT — stated normatively above `playSvg` in scripts/lib/rink.mjs and
    //     enforced by scripts/check-arrivals.mjs, which fails the build. It is
    //     deliberately NOT restated here. SIX copies of it existed, no two alike and
    //     none enforced: two verbatim in this file, a differently-scoped third in
    //     rink.mjs, two more in faceoffs.mjs and defensive_zone_coverage.mjs, and a
    //     reader-facing sixth in reading_ice_hockey_diagrams.md — plus an operative
    //     ANGLE in defending_the_rush.mjs that the invariant disclaims. The first
    //     consolidation pass found four of the six and would have claimed all of them,
    //     which is how a route came to finish on a player in positions.mjs three
    //     lines below a comment forbidding exactly that. The case history below is
    //     what belongs in this file; the rule is not.
    //     Both of the corpus's previously accepted arrivals sit at d ~ 7 ft with a
    //     bar. This route sat at d = 6.3 ft with an arrowhead, and its clearance
    //     was 0.83 ft against the half-wall value that was committed at the time —
    //     i.e. the ray went through the winger. It only cleared at all because an
    //     unrelated, uncommitted change had moved the half-wall 5.5 ft (33 to 38.5,
    //     site/src/data/rink.json; this said 7 ft). Safety must
    //     not depend on a coordinate edited for a cosmetic reason, so the endpoint
    //     is now expressed relative to the winger himself and capped.
    { from: F2_FOX, to: { at: 'half-wall:right', dx: -11, dy: -2 }, kind: 'pressure', bow: -2 },
    // 3 — the outlet. Whether it beats F2 is not settled here.
    { from: EXIT_122, to: { at: 'half-wall:right', dx: 4, dy: -3 }, kind: 'pass' },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------

// The line of three, flat. "the line is flat, so anything behind it is behind all
// three at once" — so all three sit at exactly the same x, and any temptation to
// stagger them for a prettier picture destroys the thing being taught.
const LINE3_WALL = { at: 'top-of-circle:right', dy: 11 };   // (54, 33)
const LINE3_MID = { at: 'high-slot', dx: -15 };             // (54, 0)
const LINE3_FAR = { at: 'top-of-circle:left', dy: -11 };    // (54, -33)

const forecheck131 = {
  id: 'forecheck-131',
  owner: 'content/systems/forechecking_systems.md',
  title: 'The 1-3-1 forecheck',
  half: true,
  width: 900,

  caption:
    'The 1-3-1 pushed up into the offensive zone, against the same puck carrier as the other diagrams: one ' +
    'forward pressuring, three players spread flat across the width of the ice, and one player behind them as ' +
    'the last man. ' +
    'The line of three is conventionally F2, F3 and one defenceman, the defenceman in the middle as the ' +
    'read-maker and the two forwards on the walls — it cannot be three forwards, because F1 is already a ' +
    'forward and there are only three on the ice. ' +
    'F1 does not chase but steers, taking the middle away and shepherding the breakout to one side; as the ' +
    'puck commits to that side the whole line shifts with it, the puck-side player stepping down as an ' +
    'immediate second attacker while the other two slide across to cover the retreat. ' +
    'What it concedes is drawn as plainly as what it takes: the initial puck entirely, and a great deal of ' +
    'ice behind a line that is flat, so a chip past it is past all three at once. ' +
    'It is one system among several and not a beginner one — it asks three players to read and skate ' +
    'laterally at the same time — and the far more common use of the same name is a passive neutral-zone ' +
    'shape that is not a forecheck in any literal sense. ' +
    // SAFETY SCOPE. The long body-checking block below is VERBATIM SHARED by four captions in this
    // file -- forecheck-122, forecheck-131, forecheck-pinch and forecheck-press. 604(b)'s text, its
    // provenance and why it may not be split from 604(a) are argued out in the comment above
    // forecheck-pinch. Edit all four together or they drift.
    'Note what F2 is drawn doing: arriving at the wall, not at the winger. ⚠️ Where body checking is allowed at all, the arriving player carries the whole onus — take the puck, take the ice, or angle them off it. Neither the NHL nor the IIHF writes a minor for checking from behind at all — Rule 43.2 in both — so the floor for finishing into the back of a player who is facing away is a major with a game misconduct on it: mandatory under NHL 43.3 and 43.5, and at the referee\u2019s discretion under IIHF 43.3 for a check that recklessly endangers the fouled player. And in many leagues body checking is not allowed at all, so find out which book you are under, and whether you may body check in this game rather than merely in your division, before you plan on making contact: USA Hockey Rule 604(a) prohibits it at 12-and-under and below, in every girls\' and women\'s classification and in non-check adult hockey, and lets a local governing body prohibit it in any classification on top of that; 604(b) bars it outright any time a checking team plays a non-checking one; Hockey Canada Rule 7.3 penalises it at U13 and below, throughout female hockey and in any other division a Member approves; and the IIHF book restricts by category instead of age, allowing bodychecking in women\'s hockey only where there is a clear intention of playing the puck or an attempt to gain possession of it, subject to the exception the rule itself then sets out.',

  describe:
    'Attacking half of the rink, the opposition net at the right, and the same five opposition players as the ' +
    'other forecheck diagrams. Five own players in three bands: F1 alone deep, inside the strong-side faceoff ' +
    'dot; then a flat line of three at the top of the circles — F2 on the strong-side wall, a defenceman in ' +
    'the middle of the ice, F3 on the far wall, all three at exactly the same depth; then the second ' +
    'defenceman alone on the offensive blue line in the middle, as the safety behind them. Three unnumbered ' +
    'routes, because they happen together: F2 steps down the strong-side wall as the second attacker, and the ' +
    'defenceman in the middle and F3 on the far wall both slide laterally towards the puck side. F1 is drawn ' +
    'with no route.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER },
    { id: 'D2', team: 'opp', pos: 'D', at: OPP_D2 },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right', label: 'the outlet' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // 1 — 3 — 1, counted from the goal line outwards: F1 at x 78, the line at
    // x 54, the safety at x 25. Three unambiguous bands.
    { id: 'F1', pos: 'F', at: F1_STEER,   label: 'steers, does not chase' },
    { id: 'F2', pos: 'F', at: LINE3_WALL, label: 'on the wall' },
    // "with the defenceman in the middle as the read-maker" — a defender triangle
    // in the middle of the line of three is what makes this a 1-3-1 rather than
    // the three-forward shape the section explicitly rules out.
    { id: 'D',  pos: 'D', at: LINE3_MID,  label: 'the read-maker' },
    { id: 'F3', pos: 'F', at: LINE3_FAR,  label: 'the far wall' },
    // "The single high player is the safety, responsible for anything that gets
    // behind the line of three." One player, in the middle, behind the line.
    { id: 'D',  pos: 'D', at: 'centre-point', label: 'the safety, last man' },
  ],

  // Unnumbered on purpose. "As the puck commits to one side, the whole line
  // shifts with it" is one movement by three players at once, not a sequence —
  // numbering it would invent an order the section does not state.
  routes: [
    // F2: "the puck-side player becomes an immediate second attacker". Finishes
    // outward towards the wall rather than in at the carrier.
    //     SAFETY, ruled by safety-reviewer. This route is governed by THE ARRIVAL
    //     INVARIANT — stated normatively above `playSvg` in scripts/lib/rink.mjs and
    //     enforced by scripts/check-arrivals.mjs, which fails the build. It is
    //     deliberately NOT restated here. SIX copies of it existed, no two alike and
    //     none enforced: two verbatim in this file, a differently-scoped third in
    //     rink.mjs, two more in faceoffs.mjs and defensive_zone_coverage.mjs, and a
    //     reader-facing sixth in reading_ice_hockey_diagrams.md — plus an operative
    //     ANGLE in defending_the_rush.mjs that the invariant disclaims. The first
    //     consolidation pass found four of the six and would have claimed all of them,
    //     which is how a route came to finish on a player in positions.mjs three
    //     lines below a comment forbidding exactly that. The case history below is
    //     what belongs in this file; the rule is not.
    //     Both of the corpus's previously accepted arrivals sit at d ~ 7 ft with a
    //     bar. This route sat at d = 6.3 ft with an arrowhead, and its clearance
    //     was 0.83 ft against the half-wall value that was committed at the time —
    //     i.e. the ray went through the winger. It only cleared at all because an
    //     unrelated, uncommitted change had moved the half-wall 5.5 ft (33 to 38.5,
    //     site/src/data/rink.json; this said 7 ft). Safety must
    //     not depend on a coordinate edited for a cosmetic reason, so the endpoint
    //     is now expressed relative to the winger himself and capped.
    { from: LINE3_WALL, to: { at: 'half-wall:right', dx: -11, dy: -3 }, kind: 'pressure', bow: -2 },
    // The other two: "the whole line shifts with it ... while the others cover
    // the retreat". Lateral, so the key's LATERAL CROSSOVERS symbol and not
    // forward skating — the two mean different things and the key defines both.
    { from: LINE3_MID, to: { at: 'high-slot', dx: -15, dy: 11 }, kind: 'crossovers' },
    { from: LINE3_FAR, to: 'top-of-circle:left', kind: 'crossovers' },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------

// The pinch. Drawn inside a 2-1-2 because a picture of a defenceman needs forwards
// somewhere and any arrangement of them names a system — so it names the
// document's declared house default rather than pretending to be system-neutral,
// and the caption says so. The exchange itself the section states generally: "at
// 5-on-5 in every forecheck described above, only one defenceman pinches at a
// time", and every system above keeps F3 high.
//
// Their strong-side winger is NOT drawn. The section's pinch test has two cases —
// arrive on contact so you can "play the puck or legally seal the opposing winger
// against the boards", or, on "a pure race for a loose puck or a dying rim with
// nobody contesting it", arrive clearly first. Drawing the second case keeps every
// arrowhead off a player: a diagram of a defenceman finishing into a winger pinned
// against the boards is a checking-from-behind picture waiting for a bad reader,
// and this section is not the place to teach that contact.
const RIM_FROM = { at: 'corner:right', dx: -1, dy: 1 };     // (81, 35)
const RIM_TO = { at: 'boards:right', dx: -12, dy: -5 };     // (57, 37.5)
const D_STRONG = 'point:right';                             // (25, 20)
const F3_HIGH = { at: 'high-slot', dx: -15 };               // (54, 0)

const forecheckPinch = {
  numbered: true,
  id: 'forecheck-pinch',
  owner: 'content/systems/forechecking_systems.md',
  title: 'The pinch from the point',
  half: true,
  width: 900,

  caption:
    'The exchange that decides whether a forecheck is worth running, drawn inside a 2-1-2 because the ' +
    'forwards have to be somewhere: their defenceman rims the puck up the strong-side wall to escape, your ' +
    'strong-side defenceman steps down from the offensive blue line to kill it, and F3 leaves the high middle ' +
    'to cover the point that has just been vacated. ' +
    'The two arrows finish pointing at each other and about ten feet apart on purpose — the test for going is ' +
    '"if you can\'t arrive on contact, don\'t go", meaning you and the puck reach the wall at the same moment ' +
    '— and on the pure race drawn here, a dying rim with nobody to seal, the bar is higher still: you have to ' +
    'arrive clearly first, not probably first. ' +
    'The weak-side defenceman does not join in, and holding the middle is what makes a failed pinch a ' +
    'two-on-one rather than a breakaway — which is why their far winger is drawn already climbing towards ' +
    'the exit. ' +
    'Two things here are coaching choices rather than laws: that only one defenceman pinches at a time, which ' +
    'is close to universal but still a choice, and that F3 is the one who covers the vacated point, where ' +
    'some teams slide the weak-side defenceman across instead and some pinch only when F3 has already called ' +
    'that they are high — so ask which yours is. ' +
    'And note what the picture cannot promise: a rim that gets past a pinching defenceman is the ' +
    'counter that hurts a 2-1-2 most, because it turns two deep forecheckers into two irrelevant ones ' +
    '— that ranking is coaching emphasis, not a counted one. ' +
    // SAFETY SCOPE. The caption's go/no-go test is a CONTACT instruction, so it carries the same
    // scope sentence as forecheck-122 and forecheck-131 above, verbatim and in one shared form.
    // It sits LAST, and the placement is load-bearing rather than stylistic. The renderer promotes
    // caption text from the first warning glyph to the END of the caption with no closing delimiter
    // (`captionNodes()` in remark-corpus.mjs), so a glyph on this block anywhere but last would
    // amber every tactical sentence after it and destroy the treatment's meaning. This block used
    // to sit at 29% of the caption, unglyphed, on the argument that the section puts the caveat
    // BEFORE the test ("First, though: none of this applies if you may not body check at all") --
    // but unglyphed it rendered as the faintest text on the page, which is the defect. The section's
    // ordering survives the move because the caption's test is a RESTRAINT ("if you can't arrive on
    // contact, don't go"), not an instruction to hit, so a reader who meets it first is not being
    // told to make contact before being told they may not. Rule text checked against sources/ this
    // session, not carried in:
    // USAH 604(a) "Body checking is prohibited in the 12 & under youth age classifications and
    // below, all Girls'/Women's age classifications and all non-check Adult classifications", plus
    // "A local governing body may prohibit body checking in any classification"; HC 7.3 "This rule
    // applies only in divisions of U13 and below, in female hockey, and any other divisions approved
    // by a Member of Hockey Canada"; IIHF 101.1 bodychecking in women's hockey "allowed when there
    // is a clear intention of playing the puck or attempting to 'gain possession' of the puck with
    // the exception from the situation described in this rule" -- two limbs, then a qualifier. Read
    // at sources/iihf_rules_v1.1.txt:7491-7493 this session, and identical there in v1.0, in the
    // repaired mirror iihf_rules.txt, and in the 2026/27 book.
    // ⚠ THIS QUOTATION USED TO STOP AT "playing the puck" -- one limb short, qualifier gone --
    // and the caption below was written off it and shipped the same truncation. With "only" in
    // front of it that is not a truncation but a FALSE PROHIBITION: it told a woman playing under
    // the IIHF book that a check made while going for a puck she does not yet have is illegal. It
    // is legal. A truncated quotation in a provenance comment is how a half-rule reaches a
    // listener; the same half-rule shipped in on_ice_communication.mjs and in this file's
    // forecheck-122 and forecheck-131 captions, and all four were repaired together. The short
    // form for the qualifier is the corpus's settled one, matched to on_ice_communication.mjs so
    // the two files cannot drift.
    // And its SEPARATE boards limb: where two or more
    // players are competing for possession "they are not allowed to use the boards to make contact
    // with an opponent to eliminate her from the play, push her into the boards, or pin her along
    // the boards". ⚠ An earlier version of this comment attached the proviso "provided that
    // 'possession of the puck' remains the sole object" to that boards limb. It does not belong to
    // it -- it qualifies the PRECEDING sentence, the push-and-lean permission -- and the boards
    // limb has its own trigger, which is competing for the puck. Re-read in sources/ this session.
    // The second sentence is the consequence, without which the reader has a rule and no play.
    // ⚠ 604(b) IS CARRIED WITH 604(a) AND MUST STAY IN THE SAME SENTENCE AS IT. USAH 604(b)
    // (sources/usah.txt:3577), read this session: "Any time a team from a Competitive Contact
    // category (see sub-section (a) above) plays a team from a Body Checking category, body
    // checking shall be prohibited under this rule." 604's Note 2 (:3546) names the two categories
    // -- Competitive Contact is where checking is prohibited, Body Checking where a legal check is
    // permissible -- and (a) closes "These levels would be considered the Competitive Contact
    // Category of play" (:3558). That pairing is what makes "any time a checking team plays a
    // non-checking one" the whole of (b) rather than a narrowing of it.
    // WHY: (a) on its own is an enumeration of DIVISIONS, and a fifteen-year-old in a 16U checking
    // division hears it, finds himself in none of the listed bars, and concludes he may check. (b)
    // makes the permission a property of the FIXTURE -- the exposure at a tournament with mixed
    // entries, or a girls' team entered on a boys' schedule. The framing verb was widened with it,
    // because the clause alone answers a question the old verb ("which book you are under") did not
    // ask. Both halves are inside ONE sentence deliberately: _split_paragraph breaks only where the
    // previous atom ended a sentence, so a hazard and its counterweight split across two sentences
    // can be voiced as two units, and this pair may not be.
    // This block is VERBATIM SHARED with forecheck-122, forecheck-131 and forecheck-press. Edit
    // all four together or they drift.
    '⚠️ And in many leagues body checking is not allowed at all, so find out which book you are under, and whether you may body check in this game rather than merely in your division, before you plan on making contact: USA Hockey Rule 604(a) prohibits it at 12-and-under and below, in every girls\' and women\'s classification and in non-check adult hockey, and lets a local governing body prohibit it in any classification on top of that; 604(b) bars it outright any time a checking team plays a non-checking one; Hockey Canada Rule 7.3 penalises it at U13 and below, throughout female hockey and in any other division a Member approves; and the IIHF book restricts by category instead of age, allowing bodychecking in women\'s hockey only where there is a clear intention of playing the puck or an attempt to gain possession of it, subject to the exception the rule itself then sets out. Where it is barred, a pinch is a play on the puck alone and the seal against the boards is not available to you; IIHF 101.1 adds that in women\'s hockey players competing for the puck may not use the boards to eliminate an opponent, even where possession is the sole object. ' +
    // RECEIVING POSTURE. Added because this caption's go/no-go test sends the reader down the
    // wall at speed and everything above it was about DELIVERING contact: the section had no
    // receiving posture at all, and the picture's whole subject is a defenceman arriving at the
    // boards with an opponent and a puck arriving at the same moment. It sits INSIDE the amber
    // band, at the end of it, so the glyph-to-end promotion still covers safety and nothing else.
    // ⚠ SCOPE, and it is the half that gets got wrong: this is scoped as its owner scopes it,
    // content/technique/body_contact_and_battles.md §6 -- "whatever league you play in", because
    // unexpected contact happens in non-check hockey too. It is NOT scoped to checking leagues,
    // even though the sentence before it is about where checking is barred.
    // ⚠ TWO MECHANISMS, KEPT SEPARATE. A turned back makes the contact a HIT FROM BEHIND; a
    // dropped chin STRAIGHTENS THE CERVICAL SPINE. They are different injuries with different
    // sources, and three owner documents forbid joining the walking-speed evidence to the turned
    // back -- USA Hockey's walking-speed sentence is about a HEAD-DOWN, head-first collision and
    // it writes nothing of the kind about a turn. That separation is unchanged.
    // ⚠ WHAT CHANGED: THE WALKING-SPEED QUALIFIER IS NOW CARRIED, AND THE ARGUMENT FOR LEAVING
    // IT OUT WAS WRONG. This comment used to end "a caption that quoted one without its
    // qualification is exactly how a half-rule ships", and on that argument left the caption
    // stating the ducking prohibition AND naming its mechanism with nothing attached. Stated
    // bare, "a chin tucked to the chest straightens the cervical spine" reads as a HIGH-SPEED
    // hazard and hands the reader their strongest excuse -- "I was only going slowly" -- which
    // is the one thing USA Hockey's sentence exists to defeat: "A player doesn't have to be
    // going at full speed for this to happen -- it can occur at walking speed"
    // (sources/huh.txt:228-229, read this session). The qualification fits in one subordinate
    // clause, which rules_primer.mjs's icing-the-race-and-the-dot already demonstrates. The
    // convention, stated so the next editor does not have to re-derive it: a layer that states
    // the prohibition AND gives its mechanism carries the qualifier; a layer that states the
    // prohibition BARE does not, and should not.
    // ⚠ AND IT ATTACHES TO THE INJURY, NOT THE COLLISION. A collision at walking speed is
    // definitionally possible and needs no disclaimer; only the injury does, which is why USA
    // Hockey's sentence NEGATES A SPEED REQUIREMENT rather than asserting a speed.
    // The light-hit quotation is still NOT carried here: it belongs to the turned back, and it
    // is in the section and in body_contact_and_battles.md §6, where the scoping around it can
    // be stated in full.
    'And whatever your book says about contact, one thing holds in every league, checking or not: never take contact on the wall with your back to the boards, and never duck. Get your skates parallel to the wall instead, forearm and hip to it, head up and chin off your chest. Those are two prohibitions against two different injuries — a turned back makes the contact a hit from behind, which you can neither see nor brace for, and a chin tucked to the chest straightens the cervical spine — and the injury that follows, on head-down, head-on contact with the boards or a goal post, is one USA Hockey says can occur at walking speed.',

  describe:
    'Attacking half of the rink, the opposition net at the right, with the puck in the strong-side corner. ' +
    'Three opposition players: the defenceman D1 in the corner rimming the puck up the wall, their far winger ' +
    'W2 already high on the weak side heading for the exit, and the goaltender. Five own players in a 2-1-2: ' +
    'F1 deep, sealing the strong-side corner; F2 deep inside the strong-side circle; F3 high in the middle at ' +
    'the top of the circles; the strong-side defenceman at the offensive blue line; and the weak-side ' +
    'defenceman at the line but shaded into the middle of the ice. Three numbered routes: one, the rim ' +
    'travelling up the boards outside everybody; two, the strong-side defenceman stepping down the wall to ' +
    'meet it, the two arrows finishing about ten feet apart and pointing at each other; three, F3 leaving the ' +
    'high middle for the vacated point, stopping short of the defenceman who is still drawn on it.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // Short label on purpose. "rims it up the wall" is 19 characters, and the
    // placer sizes a label by its character count: the long version was wide
    // enough to collide with F1's glyph in every slot near the carrier, so it fell
    // through to the grid fallback and landed nearer F1 than the carrier it named.
    // The route and the caption say what a rim is.
    { id: 'D1', team: 'opp', pos: 'D', at: 'corner:right',   label: 'the rim' },
    // "by the time their defenceman has the puck down there their forwards have
    // already released above it — climbing towards their blue line looking for
    // the exit". Drawn because it is the reason the weak-side defenceman stays
    // home; without an opponent going the other way, a safety looks like a player
    // doing nothing.
    { id: 'W2', team: 'opp', pos: 'F', at: { at: 'top-of-circle:left', dx: -6, dy: -4 },
      label: 'already climbing' },

    // Two deep, one high, two on the line — the 2-1-2 of the section above, with
    // the puck now in the corner rather than behind the net.
    // Both deliberately unlabelled: this diagram is about the defencemen, and the
    // five labels it does carry are the five things it teaches. A label on F1 came
    // out 11 ft from F1 and 13.9 ft from F2, which is close enough to be either.
    { id: 'F1', pos: 'F', at: { at: 'faceoff-dot:right', dx: 3, dy: 5 } },
    { id: 'F2', pos: 'F', at: { at: 'half-wall:right', dx: -9, dy: -10 } },
    // "Pinch only when F3 is high and in position to rotate back and cover the
    // point you are vacating. This is the exchange that makes pinching safe: you
    // go down, F3 comes back. If F3 is in the corner, the exchange is not
    // available."
    { id: 'F3', pos: 'F', at: F3_HIGH,                                     label: 'covers the point' },
    { id: 'D',  pos: 'D', at: D_STRONG,                                    label: 'arrive on contact' },
    { id: 'D',  pos: 'D', at: { at: 'point:left', dy: 12 },                label: 'the safety' },
  ],

  routes: [
    // 1 — the rim. It hugs the boards and passes outside F2, which is the whole
    //     reason a rim beats a forechecker sealing you in: it goes around
    //     everybody rather than through them. Drawn with the key's PASSING symbol
    //     because that is the published symbol for a puck travelling on its own;
    //     the key has no separate symbol for a rim, and inventing one is the
    //     failure the notation header in rink.mjs records.
    { from: RIM_FROM, to: RIM_TO, kind: 'pass', bow: -2 },
    // 2 — the pinch. Ends about ten feet short of where the rim's arrow ends, so
    //     the two point at each other and the picture says "these arrive
    //     together" rather than "the defenceman gets there first", which the
    //     section never promises. Neither arrowhead lands on a player.
    { from: D_STRONG, to: { at: 'boards:right', dx: -22, dy: -5 }, kind: 'skate', bow: 3 },
    // 3 — the rotation behind the pinch. "The common default is that F3 recovers
    //     towards the middle and replaces them at the blue line" — that clause is
    //     what this arrow draws, and it is the only part worth quoting here: the
    //     rationale the section attaches to it has already been rewritten once (it
    //     used to end "this is the single most commonly missed job on the
    //     forecheck", a ranking the corpus no longer makes), while the clause the
    //     arrow depends on did not change. A default and not a law — the caption
    //     names the same two alternatives the section does, the weak-side D sliding
    //     across and pinching only on F3's call.
    //     Stops nine feet short of the defenceman's glyph, which is still drawn at
    //     the point it is in the act of leaving.
    { from: F3_HIGH, to: { at: 'point:right', dx: 6, dy: -7 }, kind: 'skate', bow: -2 },
  ],

  puck: { at: 'corner:right', dx: -1.5, dy: 1.5 },
};

// ===========================================================================
// THE ROTATION. This is the only diagram in the file that is not about a shape.
//
// The section it belongs to ("F1 / F2 / F3 — Roles, Not People") is a DEFINITION
// and a definition is not a thing to draw. Its subsection "The roles rotate
// mid-shift" is not: it is three players changing job at one instant, which is
// who-is-where-when and is exactly what a picture can carry and a sentence
// cannot. So the diagram is placed on the subsection, not on the section.
//
// THE DEVICE, stated once because everything below depends on it: the GLYPH
// carries the role the player has just TAKEN and the LABEL carries the role they
// held a second ago. That is why an `F3` is drawn deep and an `F2` high — the
// labels have moved and the bodies have not yet. Read the other way round the
// picture is nonsense, so the caption says the device outright in its second
// sentence rather than leaving it to be inferred.
//
// Five opposition players, the same cast as the four system diagrams, because a
// rotation drawn against two opponents looks like a rotation nobody is
// contesting. D2 is the ONE cast member that moves: OPP_D2 (78, -28) sits 12 ft
// from where the new F1 has to stand, which left no room to draw him arriving.
// He is at (84, -32) here — still the far corner, further from the middle.
const ROT_D2 = { at: 'corner:left', dx: 2, dy: 2 };            // (84, -32)
// Deep on the strong side, where the beaten forechecker actually was: he was on
// the carrier when the carrier still had it.
const ROT_BEATEN = { at: 'goal-line', dy: 18 };                // (89, 18)
const ROT_NEAREST = { at: 'faceoff-dot:left', dx: -3, dy: -4 }; // (66, -26)
// The high middle, the same (54, 0) every other diagram in this file uses for a
// forward in the middle band.
const ROT_HIGH = { at: 'high-slot', dx: -15 };                 // (54, 0)

const forecheckRolesRotate = {
  id: 'forecheck-roles-rotate',
  owner: 'content/systems/forechecking_systems.md',
  title: 'The roles rotate mid-shift',
  half: true,
  width: 900,

  caption:
    'The instant after the opponents move the puck defenceman to defenceman, and the point of the picture ' +
    'is that nobody has swapped position — they have swapped job. ' +
    'Each glyph carries the role that player has just taken; the label beside it says which role they held ' +
    'a second earlier. ' +
    'The forward who was F1 has been beaten by the pass and is now behind the play, so he does not turn ' +
    'and chase: he climbs, and takes the vacated support role — usually, as here, the high job as the ' +
    'new F3. ' +
    'The forward who was F2 is nearest the new carrier, so he is the new F1 and closes on him. ' +
    'The forward who was F3 comes down off the high middle into the support job as the new F2. ' +
    'Which body ends up in which role is settled by who is nearest the puck and by nothing else, so this ' +
    'is one instance and not a pattern to memorise — put the pass the other way and the same three moves ' +
    'belong to three different players. ' +
    'The shape drawn around them is the 2-1-2 this guide takes as its house default, because three forwards ' +
    'have to be standing somewhere and any arrangement of them names a system; the rotation itself is not ' +
    'a property of that system, because it is simply what F1, F2 and F3 mean. ' +
    'The two defencemen hold the offensive blue line and their jobs do not rotate. ' +
    // SAFETY SCOPE, ruled by safety-reviewer. The caption instructs a forward to close on a
    // carrier picking a puck up in his own corner, which is the same exposure forecheck-212's
    // "goes hard at the puck carrier" creates, so it carries the same short scope sentence in
    // the same settled words. GLYPH LAST: remark-corpus.mjs captionNodes() promotes from the
    // first warning glyph to the END with no closing delimiter, so a glyph anywhere but last
    // ambers the tactical prose after it.
    // Rule text checked against sources/ this session, not carried in:
    // USAH 604(a) (sources/usah.txt:3555) "Body checking is prohibited in the 12 & under youth
    // age classifications and below, all Girls'/Women's age classifications and all non-check
    // Adult classifications"; HC 7.3 (sources/hc.txt:6005) "This rule applies only in divisions
    // of U13 and below, in female hockey, and any other divisions approved by a Member of
    // Hockey Canada".
    // USAH 604(b) (sources/usah.txt:3577), read this session: "Any time a team from a Competitive
    // Contact category (see sub-section (a) above) plays a team from a Body Checking category, body
    // checking shall be prohibited under this rule." 604's Note 2 (:3546) names the two categories --
    // Competitive Contact is where checking is prohibited, Body Checking where a legal check is
    // permissible -- and (a) closes "These levels would be considered the Competitive Contact
    // Category of play" (:3558). That pairing is what makes "any time a checking team plays a
    // non-checking one" the whole of (b) rather than a narrowing of it. WHY IT IS IN THE CAPTION AT
    // ALL: (a) alone is an enumeration of DIVISIONS, and a reader in a checking division finds
    // himself in none of them and stops. (b) makes the permission a property of the FIXTURE, which
    // is the exposure at a tournament with mixed entries or a girls' team on a boys' schedule. It
    // is inside the same sentence as (a) on purpose: the hazard and its counterweight have to be
    // one voiced unit, and _split_paragraph breaks only at sentence ends.
    '⚠️ Being the new F1 is not a licence to go through the man. He is picking the puck up in his own corner and is about to turn his back to you, so the onus is on you as the arriving player: take the puck, take the ice, or angle him off it, and never finish into his back. Find out first whether you may body check in this game — the answer can change per fixture, not just per division. USA Hockey Rule 604(a) bars it at 12 & under and below, in every girls\' and women\'s classification and in non-check adult hockey; 604(b) bars it outright any time a checking team plays a non-checking one; and Hockey Canada Rule 7.3 at U13 and below, throughout female hockey and in any other division a Member approves.',

  describe:
    'Attacking half of the rink, the opposition net at the right, and the same five opposition players as ' +
    'the forecheck diagrams: the defenceman D1 behind the net, who has just passed; his partner D2 taking ' +
    'that pass in the far corner; the wingers W1 and W2 on the two half-walls; and the goaltender in the ' +
    'crease. Five own players. The three forwards are labelled twice over — the letters inside the glyphs ' +
    'are the roles they have just taken and the words beside them are the roles they held before the pass. ' +
    'Deep on the near side of the net stands the forward marked F3, labelled "was F1, beaten", with an ' +
    'arrow taking him up ice towards the high middle. Deep on the far side stands the forward marked F1, ' +
    'labelled "was F2, closest", with a short route ending in two bars towards the new carrier. In the ' +
    'high middle stands the forward marked F2, labelled "was F3, high", with an arrow taking him down and ' +
    'across to the far side. The two defencemen are on the offensive blue line at the points, with no ' +
    'routes at all. A dashed pass runs from behind the net, round the back of the goal, to the far corner.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER,             label: 'the D-to-D' },
    { id: 'D2', team: 'opp', pos: 'D', at: ROT_D2,              label: 'the new carrier' },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // GLYPH = the new role, LABEL = the old one. See the header note.
    { id: 'F3', pos: 'F', at: ROT_BEATEN,  label: 'was F1, beaten' },
    { id: 'F1', pos: 'F', at: ROT_NEAREST, label: 'was F2, closest' },
    { id: 'F2', pos: 'F', at: ROT_HIGH,    label: 'was F3, high' },
    // Unlabelled deliberately: five labels is already the ceiling the placer
    // handles well here, and these two do not rotate, which is the caption's job
    // to say rather than the picture's.
    { id: 'D',  pos: 'D', at: 'point:right' },
    { id: 'D',  pos: 'D', at: 'point:left' },
  ],

  // UNNUMBERED, and the reason is forecheck-131's: the three responses happen at
  // once, and numbering them would teach a reader to wait for one before starting
  // the next. The section numbers its three steps, but that is an order of
  // exposition, not an order in time. The pass is told apart from the responses by
  // being drawn as a pass — dashed — rather than by a numeral.
  routes: [
    // The D-to-D itself, round the BACK of the goal. Bowed 5 because the straight
    // chord goes through the net: sampled on the drawn quadratic, the curve's
    // minimum x while |y| <= 3.6 is 93.4 against a back rail at 92.33, and its
    // maximum x is 94.0 against end boards at 100. At bow 0 that minimum is 91.5,
    // i.e. inside the goal frame. The corpus's own instruction is to take a D-to-D
    // behind your own net rather than through the slot, so a picture of one cutting
    // across the goal mouth would contradict the sibling document that owns it.
    { from: CARRIER, to: ROT_D2, kind: 'pass', bow: 5 },
    // The new F1 closing. `pressure`, so it ends in two bars: arrive and contain,
    // not continue through. Its tip is 9.5 ft from D2 and 10.9 ft off the line to
    // their winger.
    { from: ROT_NEAREST, to: { at: 'corner:left', dx: -7, dy: 5 }, kind: 'pressure' },
    // The beaten forechecker climbing. THE MOST IMPORTANT ARROW IN THE PICTURE,
    // because it draws the thing the section says not to do the opposite of: he
    // goes up ice, not back at the puck. Its tip is in open ice with no opponent
    // within 25 ft.
    { from: ROT_BEATEN, to: { at: 'top-of-circle:right', dx: 6, dy: -12 }, kind: 'skate' },
    // The old F3 dropping into the support job.
    { from: ROT_HIGH, to: { at: 'high-slot', dx: -12, dy: -16 }, kind: 'skate' },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------

// The 2-3 and the left-wing lock. Drawn against the same opposition cast as the
// four system diagrams above, for the same reason they share it: the reader is
// being asked to tell these shapes apart, and can only do that if the only thing
// that changes between the pictures is the thing being compared.
//
// F1 and F2 sit on STACK_F1 and STACK_F2, the stacked 2-1-2's two deep forwards,
// and that is deliberate rather than lazy. Against the stacked picture this one
// then differs in EXACTLY ONE THING — where the third forward is — which is
// exactly what the section says the lock is: "instead of joining the attack, they
// drop back to the half-boards".
//
// The third forward is `F3` and not `LW`. The style guide's label set has no LW,
// and the section's own headline rule is that F1/F2/F3 are roles set by order of
// arrival and not people, so putting a body's position inside the glyph would
// contradict the document three sections earlier. The caption carries the classic
// personnel and the modern variant that does not use it.
const LOCK_WINGER = { at: 'half-wall:left', dx: -11 };         // (58, -38.5)

const forecheck23Lock = {
  id: 'forecheck-2-3-lock',
  owner: 'content/systems/forechecking_systems.md',
  title: 'The left-wing lock',
  half: true,
  width: 900,

  caption:
    'The 2-3, drawn against the same puck carrier as the other forecheck diagrams so the shapes can be ' +
    'compared: two forwards in on the puck, and three players across the ice behind them. ' +
    'The third forward is the whole of the difference. Instead of joining the attack he sits up the wall ' +
    'above their winger, and if the puck is not won he slides back into line with the two defencemen — ' +
    'the arrow drawn from him — so that he is effectively a third defenceman whenever the puck is going ' +
    'the other way. ' +
    'What that buys is two-man pressure with three players always between the puck and your net. What it ' +
    'costs is the fifth attacker in the offensive zone, so you cycle less, and a winger with the ' +
    'positional discipline and the skating to do the job. ' +
    'The famous version is the left-wing lock, in which the centre and the right winger are the two who go ' +
    'and the left winger is the one who locks; a modern variant locks whichever winger is highest instead, ' +
    'so which bodies fill these three jobs is a bench call and not a property of the shape. ' +
    'It is one system among several and the default assumed throughout this document is a 2-1-2, so find ' +
    'out which your team plays. ' +
    'The picture puts the locking winger into the middle of the line because the two defencemen already ' +
    'hold the two points; which lane he actually fills is a coaching detail this does not settle. ' +
    'His arrow stops short of the line on purpose, because he goes back only if the puck is not won. ' +
    // SAFETY SCOPE, ruled by safety-reviewer. The caption instructs two forwards in on a carrier
    // the picture puts behind his own net, so it carries the same exposure as forecheck-212 and
    // the same settled scope sentence -- which is also what the section itself does: '"Hard"
    // means the same thing here as it does in the 2-1-2, and carries the same two conditions'.
    // GLYPH LAST, same renderer reason as every other caption in this file.
    // Rule text checked against sources/ this session, not carried in: USAH 604(a)
    // (sources/usah.txt:3555); HC 7.3 (sources/hc.txt:6005).
    // USAH 604(b) (sources/usah.txt:3577), read this session: "Any time a team from a Competitive
    // Contact category (see sub-section (a) above) plays a team from a Body Checking category, body
    // checking shall be prohibited under this rule." 604's Note 2 (:3546) names the two categories --
    // Competitive Contact is where checking is prohibited, Body Checking where a legal check is
    // permissible -- and (a) closes "These levels would be considered the Competitive Contact
    // Category of play" (:3558). That pairing is what makes "any time a checking team plays a
    // non-checking one" the whole of (b) rather than a narrowing of it. WHY IT IS IN THE CAPTION AT
    // ALL: (a) alone is an enumeration of DIVISIONS, and a reader in a checking division finds
    // himself in none of them and stops. (b) makes the permission a property of the FIXTURE, which
    // is the exposure at a tournament with mixed entries or a girls' team on a boys' schedule. It
    // is inside the same sentence as (a) on purpose: the hazard and its counterweight have to be
    // one voiced unit, and _split_paragraph breaks only at sentence ends.
    '⚠️ Forechecking hard describes the speed of your arrival, not what you do when you get there. The carrier drawn here is behind his own net and about to turn his back to the boards, so the onus is on you as the arriving player: take the puck, take the ice, or angle him off it, and never finish into his back. Find out first whether you may body check in this game — the answer can change per fixture, not just per division. USA Hockey Rule 604(a) bars it at 12 & under and below, in every girls\' and women\'s classification and in non-check adult hockey; 604(b) bars it outright any time a checking team plays a non-checking one; and Hockey Canada Rule 7.3 at U13 and below, throughout female hockey and in any other division a Member approves.',

  describe:
    'Attacking half of the rink, the opposition net at the right, and the same five opposition players as ' +
    'the other forecheck diagrams: the defenceman D1 behind the net with the puck, the partner D2 low in ' +
    'the far corner, the wingers W1 and W2 on the two half-walls, and the goaltender in the crease. Five ' +
    'own players in two groups rather than three: F1 deep at the goal line on the puck side and F2 deep ' +
    'inside the puck-side circle, the two who forecheck; and behind them the two defencemen on the ' +
    'offensive blue line at the two points. The third forward, F3, is the odd one out — he stands on the ' +
    'far wall well above the opposing winger there, out of the attack, and a single arrow runs from him ' +
    'diagonally back up the ice, finishing short of the blue line between the two defencemen. Nobody else ' +
    'is drawn with a route.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    // Unlabelled for the reason set out above forecheck-212-stacked: a label on a
    // player at x 94 gets pushed sideways and lands nearer the goaltender.
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER },
    { id: 'D2', team: 'opp', pos: 'D', at: OPP_D2 },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // "Two forwards forechecking aggressively" — the stacked 2-1-2's two, on the
    // same two points, so the comparison isolates the third forward.
    { id: 'F1', pos: 'F', at: STACK_F1,    label: 'first in' },
    { id: 'F2', pos: 'F', at: STACK_F2,    label: 'second in' },
    // 11 ft above their winger, which is what lets him lock: he is between that
    // winger and the line he has to get back to. At the bare half-wall datum the
    // two glyphs sit on the same point.
    { id: 'F3', pos: 'F', at: LOCK_WINGER, label: 'the winger locks' },
    { id: 'D',  pos: 'D', at: 'point:right', label: 'holds the line' },
    { id: 'D',  pos: 'D', at: 'point:left',  label: 'holds the line' },
  ],

  // One route, and it is the conditional half of the job: "if the puck is not
  // won, slide into line with the two defencemen". It stops 8 ft short of the
  // line, because a glyph planted on the line would draw the third defenceman as
  // a fact rather than as what happens when the forecheck does not win it.
  routes: [
    { from: LOCK_WINGER, to: { at: 'centre-point', dx: 8, dy: -6 }, kind: 'skate', bow: -3 },
  ],

  puck: OPP_PUCK,
};

// ---------------------------------------------------------------------------

// The full-ice press. What this diagram has to teach is an ABSENCE — "what it
// concedes: literally everything" — and an absence is the one thing prose is bad
// at and a picture is good at. Three forwards deep, both defencemen leaving the
// line, and the whole middle third of the drawing empty.
//
// F1 and F2 again sit on the stacked 2-1-2's two deep forwards, so that what the
// reader sees against that picture is one extra forward deep and two defencemen
// with routes. The section's own preferred name for the system is "an aggressive
// 2-1-2 with both D pinching", so drawing it as one is the section's framing and
// not an editorial choice.
const PRESS_F3 = { at: 'faceoff-dot:left', dx: 4, dy: 4 };     // (73, -18)

const forecheckPress = {
  id: 'forecheck-press',
  owner: 'content/systems/forechecking_systems.md',
  title: 'The full-ice press',
  half: true,
  width: 900,

  caption:
    'The full-ice press, drawn against the same puck carrier as the other forecheck diagrams: all three ' +
    'forwards deep or nearly deep and hunting the puck, and both defencemen stepping down from the ' +
    'offensive blue line rather than one. ' +
    'The empty ice is the system. Nothing at all is drawn between those five players and your own end, ' +
    'because there is nothing there — no third forward high, no weak-side defenceman holding the middle, ' +
    'no safety of any kind — so a single clean pass out of the zone is a breakaway or an empty-net goal ' +
    'against. That is not a flaw in the shape; it is the trade being made. ' +
    'It is less a system than a decision to accept unlimited risk in exchange for keeping the puck in ' +
    'their end, which is why coaches reach for it almost exclusively late and trailing: down a goal in ' +
    'the last few minutes, with the goaltender pulled, or on a delayed penalty where you have an extra ' +
    'skater until the whistle goes. Nobody runs it for sixty minutes. ' +
    'Both defencemen going is a called situation and not your own read: unless the bench has called one, ' +
    'the default this document assumes is that only one pinches at a time and the other holds the middle, ' +
    'which is what makes a failed pinch a two-on-one instead of a breakaway. ' +
    'Call it a full-ice press or an all-out forecheck when you talk to your team. "2-2-1" is standard ' +
    'basketball terminology and is not what hockey coaching material standardly calls this, and the other ' +
    'name coaching sources use for the same picture is an aggressive 2-1-2 with both defencemen pinching. ' +
    // SAFETY SCOPE, ruled by safety-reviewer. This caption instructs BOTH defencemen down the
    // walls, which is the pinch exposure rather than the arriving-forechecker one, so it carries
    // forecheck-pinch's settled sentence rather than forecheck-212's -- the section makes the
    // same distinction itself: '"On anything" is about the puck, not about the man.'
    // GLYPH LAST, same renderer reason as every other caption in this file.
    // Rule text checked against sources/ this session, not carried in: USAH 604(a)
    // (sources/usah.txt:3555); HC 7.3 (sources/hc.txt:6005); IIHF 101.1
    // (sources/iihf_rules_v1.1.txt:7492 and :7503) -- the permission has TWO limbs and a
    // qualifier, "allowed when there is a clear intention of playing the puck or attempting to
    // 'gain possession' of the puck with the exception from the situation described in this
    // rule", and the boards limb is SEPARATE and triggered by competing for the puck: "If two
    // 604(b) is carried alongside 604(a) here as it is in the other three captions sharing this
    // block; its text, its provenance and why it may not be split from (a) are argued out in the
    // comment above forecheck-pinch and are not restated.
    // (2) or more Players are competing for 'possession of the puck', they are not allowed to
    // use the boards to make contact with an opponent to eliminate her from the play, push her
    // into the boards, or pin her along the boards."
    '⚠️ Pinching on anything is about the puck, not about the man. In many leagues body checking is not allowed at all, so find out which book you are under, and whether you may body check in this game rather than merely in your division, before you plan on making contact: USA Hockey Rule 604(a) prohibits it at 12-and-under and below, in every girls\' and women\'s classification and in non-check adult hockey, and lets a local governing body prohibit it in any classification on top of that; 604(b) bars it outright any time a checking team plays a non-checking one; Hockey Canada Rule 7.3 penalises it at U13 and below, throughout female hockey and in any other division a Member approves; and the IIHF book restricts by category instead of age, allowing bodychecking in women\'s hockey only where there is a clear intention of playing the puck or an attempt to gain possession of it, subject to the exception the rule itself then sets out. Where it is barred, a pinch is a play on the puck alone and the seal against the boards is not available to you; IIHF 101.1 adds that in women\'s hockey players competing for the puck may not use the boards to eliminate an opponent, even where possession is the sole object. ' +
    // RECEIVING POSTURE. Carried here for the reason forecheck-pinch carries it and the other
    // four diagrams do not: this is the ONE picture in the set that sends BOTH defencemen down
    // BOTH walls at once, so it has the set's maximum exposure to arriving at the boards, and a
    // caption that instructs "pinch on anything" and then says nothing about how you meet the
    // wall is the half-treatment. VERBATIM identical to forecheck-pinch's, deliberately, so the
    // two cannot drift; its scoping, its two-mechanism separation and its walking-speed
    // qualifier are all argued out in the comment above that caption and are not restated here.
    'And whatever your book says about contact, one thing holds in every league, checking or not: never take contact on the wall with your back to the boards, and never duck. Get your skates parallel to the wall instead, forearm and hip to it, head up and chin off your chest. Those are two prohibitions against two different injuries — a turned back makes the contact a hit from behind, which you can neither see nor brace for, and a chin tucked to the chest straightens the cervical spine — and the injury that follows, on head-down, head-on contact with the boards or a goal post, is one USA Hockey says can occur at walking speed.',

  describe:
    'Attacking half of the rink, the opposition net at the right, and the same five opposition players as ' +
    'the other forecheck diagrams: the defenceman D1 behind the net with the puck, the partner D2 low in ' +
    'the far corner, the wingers W1 and W2 on the two half-walls, and the goaltender in the crease. Five ' +
    'own players, all of them below the top of the circles or heading there: F1 deep at the goal line on ' +
    'the puck side, F2 deep inside the puck-side circle, and F3 deep as well on the far side rather than ' +
    'high in the middle. Both defencemen are drawn at the offensive blue line in the act of leaving it, ' +
    'each with an arrow running down its own wall towards the boards. The entire middle of the picture ' +
    'behind them, from the blue line back, is empty of own players.',

  players: [
    { id: 'G',  team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D1', team: 'opp', pos: 'D', at: CARRIER },
    { id: 'D2', team: 'opp', pos: 'D', at: OPP_D2 },
    { id: 'W1', team: 'opp', pos: 'F', at: 'half-wall:right' },
    { id: 'W2', team: 'opp', pos: 'F', at: 'half-wall:left' },

    // "Three forwards deep or nearly deep". F1 and F2 unlabelled: the thing this
    // picture teaches is the third forward and the second defenceman, and the
    // caption carries what all three forwards are doing.
    { id: 'F1', pos: 'F', at: STACK_F1 },
    { id: 'F2', pos: 'F', at: STACK_F2 },
    // 11.2 ft off their far-side defenceman and 20.9 off their far winger, so the
    // glyph reads as a third forechecker rather than as a man marking either.
    { id: 'F3', pos: 'F', at: PRESS_F3,      label: 'deep as well' },
    { id: 'D',  pos: 'D', at: 'point:right', label: 'pinches' },
    { id: 'D',  pos: 'D', at: 'point:left',  label: 'pinches' },
  ],

  // Both defencemen down both walls — the one thing that separates this from the
  // 2-1-2, where "only one defenceman pinches at a time". Neither arrowhead
  // finishes near a player: each tip is 22 ft from the winger on its own wall,
  // well outside the 9 ft the arrival rule in site/scripts/lib/rink.mjs sets, and
  // each ray runs on off the ice rather than into anybody. Unnumbered: the two
  // pinches are one decision, not a sequence.
  routes: [
    { from: 'point:right', to: { at: 'boards:right', dx: -22, dy: -5 }, kind: 'skate', bow: 3 },
    { from: 'point:left',  to: { at: 'boards:left',  dx: -22, dy: 5 },  kind: 'skate', bow: -3 },
  ],

  puck: OPP_PUCK,
};

// Document order, so the registry reads the way the page does.
export default [
  forecheckAngling,
  forecheckRolesRotate,
  forecheck212,
  forecheck212Stacked,
  forecheck122,
  forecheck131,
  forecheck23Lock,
  forecheckPress,
  forecheckPinch,
];
