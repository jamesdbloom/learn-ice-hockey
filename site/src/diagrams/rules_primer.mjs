/**
 * Diagrams for content/foundation/rules_primer.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * THESE ARE ALL RULES DIAGRAMS, which changes what a caption may contain. A rule
 * in a caption comes from the rulebook text the owning document quotes, with the
 * document's own rule number, and from nowhere else — not from a second book, not
 * from a reading of the rule the document does not make. The primer is written to
 * NHL rules and flags divergences inline; where it flags none, the caption says
 * so rather than quietly implying the rule travels.
 *
 * A NOTE ON THE PUCK GLYPH. `playSvg` draws exactly one puck. The first two diagrams
 * are comparisons between two pucks — two ways the puck can enter a zone, and two
 * places the puck can be when a dump-in leaves the stick — so neither can mark
 * both with a glyph. offside-faceoff-location therefore draws no puck at all and
 * relies on the key's own symbols (the wave means "skating with control of the
 * puck", the dashed line means a puck travelling on its own); icing-gaining-the-
 * line puts the one glyph on the puck that is touching the red line, because that
 * contact is the entire rule, and says so in the caption. Inventing a second puck
 * symbol is the failure the notation header in rink.mjs records. The third diagram,
 * icing-the-race-and-the-dot, has only one puck to draw and draws it: it IS the
 * object of the race, and the whole caption turns on where it is relative to the
 * dots. The fourth draws none, because nothing is in play in it.
 *
 * REGISTERED in index.mjs. (A note here once said it was not, and then that it was
 * new and awaiting an import; both are stale. `grep -n rules_primer index.mjs`.)
 */

// ---------------------------------------------------------------------------
// 1 — where the faceoff goes after an offside
// ---------------------------------------------------------------------------
//
// §2 "Where the faceoff goes", quoting NHL Rule 83.6:
//
//   "Offside caused by an attacker **carrying** the puck over the line → faceoff
//    at the **neutral-zone spot nearest that attacking zone**. You lose the zone
//    but keep the neutral-zone draw."
//   "Offside caused by a **shot or pass** into the zone → faceoff **back at the
//    spot in the zone where that pass or shot originated**. If your defenceman
//    fired it in from his own end, the draw goes all the way back there."
//   "So: a carried offside costs you a little; a pass-created offside can cost
//    you 120 feet."
//
//    STALE QUOTATION, KEPT SO THE REASONING IS TRACEABLE. Section 2 has since been
//    corrected twice: the 120 ft figure was wrong (the two draws are 89 ft apart, and
//    the corpus now labels that as its own arithmetic, not a rulebook number), and the
//    pass bullet wrongly sent the draw back to the point of origin where Rule 83.6
//    sends it to the faceoff spot in the zone CLOSEST to that point. The drawing was
//    already right on both counts. Re-read the section before trusting the quote above.
//
// WHY FULL SHEET. The claim is a distance. Cropped to one half, the far marker —
// which is the whole point — is off the page.
//
// WHY AN ATTACKER IS DRAWN OVER THE LINE. The section's compressed wording reads
// as though the carrier himself causes the offside, which cannot happen: §2 also
// quotes the carrier's exemption ("A player carrying the puck may cross the line
// ahead of it, provided he had possession and control"). What the rule turns on
// is how the PUCK entered the zone. So the offside itself is drawn as §2's own
// Rule 83.1 — "Players of the attacking team must not precede the puck into the
// attacking zone" — one attacker already over the line, and the two entries are
// drawn as the alternatives they are. The caption says so in terms.
//
// TWO OFFSIDES, NOT ONE PLAY. Nothing here is a sequence and it is not numbered:
// numbering would assert that the carry and the pass happened in an order, and
// they are alternatives.

const ATT_BLUE = 'blue-line';                 // (25, 0) — the attacking blue line
const NZ_DOT = 'neutral-dot:right';           // (20, 22) — a neutral-zone spot
const OWN_DOT = 'faceoff-dot:left:far';       // (-69, -22) — a spot in our own zone

// The carrier, in the neutral zone, entering wide. Well clear of the marked
// neutral-zone spot below him, so the carry wave and the marker do not overlap.
const OFF_CARRIER = { at: NZ_DOT, dx: -13, dy: 12 };        // (7, 34)
const OFF_CARRY_TO = { at: ATT_BLUE, dx: 10, dy: 34 };      // (35, 34)
// "If your defenceman fired it in from behind his own net" (:236). Placed outside the marked
// spot rather than on it — a player standing in the box that marks where the draw
// goes reads as a player taking the draw.
// M3 (diagram-reviewer): at (-77,-32) the passer stood 12.8 ft from the marked spot, so
// the box read as "where the pass came from" — which is exactly the misreading Rule 83.6
// does NOT say and which the section was corrected to kill. Moved behind his own net, the
// section's own worked example, so the distance between where he shot and where the draw
// happens is visible at a glance.
const OFF_D = { at: 'behind-net::far', dy: -6 };            // (-94, -6)
const OFF_PASS_TO = { at: ATT_BLUE, dx: 8, dy: -10 };       // (33, -10)

const offsideFaceoffLocation = {
  id: 'offside-faceoff-location',
  owner: 'content/foundation/rules_primer.md',
  // Both entries are ours: "a teammate in the neutral zone carries it over the blue
  // line" and "one of our defencemen deep in our own end passes it the length of the
  // ice". The only opposition glyph is their goaltender, defending the zone we enter.
  half: false,
  width: 1100,

  caption:
    'Where the draw goes after an offside, under NHL Rule 83.6 — an NHL rule, and where the IIHF ' +
    'and USA Hockey books put the draw is not established here, so do not assume it is the same ' +
    'place. One attacker has preceded the puck into the ' +
    'attacking zone at the right, and the two entries drawn are alternatives rather than a ' +
    'sequence, because what the rule turns on is how the puck followed him in. Carried over the ' +
    'line, and the draw is the neutral-zone spot nearest that attacking zone: you lose the zone ' +
    'and keep the neutral-zone draw. Shot or passed in, and it goes back to ' +
    'the faceoff spot in the zone closest to where the pass came from — a spot, not the patch of ' +
    'ice he shot from — drawn here as one concrete instance, a defenceman firing it in ' +
    'from his own end, which is where a pass-created ' +
    'offside costs you the length of the neutral zone and most of your own end on top of it, ' +
    'while a carried one costs you a little: the two draws are 89 feet apart up the ice, which ' +
    'is arithmetic on the rink dimensions, not a figure from the rulebook. ' +
    'That far marker is ' +
    'this pass’s answer and not a fixed destination: move the pass and the spot moves with it, ' +
    'which is the argument for carrying the puck over the line under pressure rather than firing ' +
    'a hopeful pass into the zone.',

  describe:
    'The full sheet. The attacking zone is at the right, the attacking blue line a quarter of the ' +
    'way in from that end, and our own end is at the left. One of our attackers stands well ' +
    'inside the attacking zone, having preceded the puck. Two alternative ways the puck then ' +
    'enters are drawn. First, a teammate in the neutral zone carries it over the blue line near ' +
    'the far boards, and the neutral-zone faceoff spot just outside that blue line on the same ' +
    'side is marked and labelled "if carried". Second, one of our defencemen deep in our own end ' +
    'passes it the length of the ice across the same blue line, and the end-zone faceoff spot ' +
    'beside him is marked and labelled "if shot or passed". Both goaltenders are drawn. No puck ' +
    'is drawn, because two different offsides are shown side by side rather than one play, and ' +
    'no route is numbered, because neither entry comes before the other.',

  // The two draw spots. A marked box is not a painted line: the faceoff spots are
  // already drawn on the ice by the renderer, and these boxes only say which one
  // the rule sends you to. The points are listed so the polygon's mean — which is
  // where the renderer writes the label, with no collision handling — sits a
  // couple of feet clear of the dot rather than on top of it.
  zones: [
    {
      // Label below the dot rather than above it: the carry route runs along the
      // top of the sheet, and with the label above the spot it was written into
      // the carrier's own label.
      points: [
        { at: NZ_DOT, dx: -6, dy: -14 },  // (14, 8)
        { at: NZ_DOT, dx: 6, dy: -14 },   // (26, 8)
        { at: NZ_DOT, dx: 6, dy: 2 },     // (26, 24)
        { at: NZ_DOT, dx: -6, dy: 2 },    // (14, 24)
      ],
      label: 'if carried',
    },
    {
      points: [
        { at: OWN_DOT, dx: -7, dy: -3 },  // (-76, -25)
        { at: OWN_DOT, dx: 7, dy: -3 },   // (-62, -25)
        { at: OWN_DOT, dx: 7, dy: 13 },   // (-62, -9)
        { at: OWN_DOT, dx: -7, dy: 13 },  // (-76, -9)
      ],
      label: 'if shot or passed',
    },
  ],

  players: [
    { id: 'G', team: 'opp', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'G', pos: 'G', at: { at: 'crease::far', dx: 1 } },

    // Rule 83.1, quoted in this section: "Players of the attacking team must not
    // precede the puck into the attacking zone." Both skates well over the line —
    // this is the offside, and it is the same offside in both cases.
    { id: 'A1', pos: 'F', at: { at: ATT_BLUE, dx: 12, dy: 6 }, label: 'preceded the puck' },
    { id: 'C', pos: 'F', at: OFF_CARRIER, label: 'carries it in' },
    // Short label on purpose: the placer sizes a label by its character count, and
    // "fires it in from his own end" is wide enough to be dragged across the pass
    // route it belongs to. The caption says whose end it is.
    { id: 'D', pos: 'D', at: OFF_D, label: 'fires it in' },
  ],

  routes: [
    // The carried entry. "Skating with control of the puck", per the key.
    { from: OFF_CARRIER, to: OFF_CARRY_TO, kind: 'carry' },
    // The shot-or-passed entry. The key's passing symbol, which is also the
    // symbol this corpus uses for a puck travelling on its own. It finishes
    // eight feet inside the zone, because the puck has to completely cross the
    // leading edge of the line for the question of offside to arise at all.
    { from: OFF_D, to: OFF_PASS_TO, kind: 'pass' },
  ],
};

// ---------------------------------------------------------------------------
// 2 — gaining the line
// ---------------------------------------------------------------------------
//
// §3 "Gaining the line", quoting NHL Rule 81.1:
//
//   "To nullify a potential icing, your team must 'gain the line': the puck,
//    while on a player's stick — not a skate — must make contact with the centre
//    red line (Rule 81.1)."
//   "This is the detail almost nobody knows... the question is not where *you*
//    were, it is where *the puck on your stick* was. Carry it that extra
//    half-stride so the puck touches the red line and you can dump it in freely."
//
// THE WHOLE DESIGN IS ONE CONSTRAINT: the two bodies must be in exactly the same
// place. Both carriers sit on x = 0, the centre red line, one above the other.
// Everything that differs between the two halves of the picture is where the puck
// is when the dump-in leaves. Stagger the bodies and the picture quietly teaches
// the thing the section exists to kill.
//
// THE STICK IS NOT DRAWN and cannot be: the published symbol key has no stick
// symbol. So each dump-in line simply starts where that player's puck is, six
// feet off his body, and the caption says that is what the gap is. The alternative
// — implying the body carries the distinction — is the misreading the section
// calls "the detail almost nobody knows".
//
// NOT the hybrid-icing race. Two skaters converging on a corner puck is a contact
// picture this corpus handles with great care, and it would need an "NHL and IIHF
// only, USA Hockey is automatic icing" hedge on top of everything above.

const RED = 'centre-ice';

// Bodies: identical x, one in each half of the sheet.
const ICE_BODY = { at: RED, dy: 22 };          // (0, 22)  — iced it
const LEGAL_BODY = { at: RED, dy: -22 };       // (0, -22) — gained the line
// Pucks: five feet apart, and the only difference between the two halves.
const ICE_PUCK = { at: RED, dx: -5, dy: 28 };  // (-5, 28) — still in his own half
const LEGAL_PUCK = { at: RED, dy: -28 };       // (0, -28) — touching the red line

const icingGainingTheLine = {
  id: 'icing-gaining-the-line',
  owner: 'content/foundation/rules_primer.md',
  // Inert as drawn — "no goaltenders, no opponents and no chase" — so the renderer
  // draws circles either way. Declared anyway so the frame is on record.
  half: false,
  width: 1100,

  caption:
    'Two players in exactly the same place — both bodies on the centre red line, one drawn above ' +
    'the other — and only one of them has iced the puck. NHL Rule 81.1: to nullify a potential ' +
    'icing your team must gain the line, and the puck, while on a player’s stick and not a skate, ' +
    'must make contact with the centre red line. This is the detail almost nobody ' +
    'knows, because the question is not where you were, it is where the puck on your stick was. ' +
    'The shaded region is the shooting team’s own half, which the red line divides off for this ' +
    'purpose: the upper player’s dump-in leaves with the puck still inside it and is iced, while ' +
    'the lower player’s leaves with the puck touching the line — the black dot, which is the ' +
    'whole rule — so the identical dump is legal, and that is why you carry ' +
    'it the extra half-stride. This notation has no symbol for a stick, so what you can see is where ' +
    'each dump-in begins, and the gap between a body and the start of its line is the reach the ' +
    'rule turns on rather than anything the body itself decides. Rule 81.1 applies to a team ' +
    'equal or superior in numerical strength: on the penalty kill you may ice it freely — though ' +
    'the NHL withdraws that from a team short-handed by a major which has left nobody on the ' +
    'penalty bench (Rule 81.6), and USA Hockey grants it only at Youth 15-Only and above, Girls ' +
    '16U and above, High School and Adult (Rule 624(b)(1)), so below those levels a shorthanded ' +
    'team cannot ice the puck at all.',

  describe:
    'The full sheet, with the attacking end at the right. Two of our players are drawn, one in ' +
    'each half of the width, and both stand on the centre red line at exactly the same point ' +
    'along the ice. Each has dumped the puck the length of the ice into the far corner, drawn as ' +
    'a long dashed line crossing the far goal line. The whole of their own half, from the centre ' +
    'red line back to the end boards, is lightly shaded and labelled. The upper player’s dashed ' +
    'line begins about five feet short of the centre red line, inside the shaded half, and he is ' +
    'labelled as not ' +
    'having gained the line. The lower player’s dashed line begins on the red line itself, where ' +
    'a black puck is drawn, and he is labelled as having gained it. Nothing else is drawn — no ' +
    'goaltenders, no opponents and no chase — because the picture is about one thing.',

  // The rule's own geography, and the reason the picture is legible at all: five
  // feet of difference between two puck positions is hard to see on a 200-foot
  // sheet, but "inside the shaded half" against "on its edge" is not. §3 states
  // it — "If a team ... shoots ... the puck from their own half of the ice across
  // the opposition goal line", and "The centre red line divides the ice into
  // halves for this purpose". Six points rather than four because the boards are
  // a rounded rectangle and a square corner would sit outside the dasher.
  zones: [
    {
      points: [
        { at: RED, dy: 34 },
        { at: RED, dy: -34 },
        { at: 'goal-line::far', dy: -34 },
        { at: 'goal-line::far', dx: -7, dy: -20 },
        { at: 'goal-line::far', dx: -7, dy: 20 },
        { at: 'goal-line::far', dy: 34 },
      ],
      label: 'your own half',
    },
  ],

  players: [
    { id: 'P', pos: 'F', at: ICE_BODY, label: 'did not gain the line' },
    { id: 'P', pos: 'F', at: LEGAL_BODY, label: 'gained the line' },
  ],

  // Both dump-ins drawn with the key's passing symbol — the published symbol for
  // a puck travelling on its own, which is what the corpus already uses for a rim.
  // Each starts at that player's puck and runs above his body rather than through
  // it, so the glyph and the line's origin stay separately readable.
  routes: [
    { from: ICE_PUCK, to: { at: 'goal-line', dx: 2, dy: 30 }, kind: 'pass' },
    { from: LEGAL_PUCK, to: { at: 'goal-line', dx: 2, dy: -30 }, kind: 'pass' },
  ],

  // The one puck goes on the legal case, because "contact with the centre red
  // line" is the rule and this is the only place in the picture where the rule is
  // visibly satisfied. The other player's puck is where his dashed line starts.
  puck: LEGAL_PUCK,
};

// ---------------------------------------------------------------------------
// 3 — hybrid icing: the dot is a deadline, not a finish line
// ---------------------------------------------------------------------------
//
// §3 "Hybrid, no-touch and touch icing" states the mechanism in four steps and then
// the clarification the whole picture exists to carry: "the determining factor is
// who would touch the puck first, not who reaches the dot first. The dot is a
// deadline for the decision, not the finish line of the race."
//
// WHY THIS IS DRAWABLE AND THE TIMING DIAGRAMS ARE NOT. A still sheet has no time
// axis, so a rule whose teaching is "when" cannot be drawn. This one's teaching is
// "where": the rule names TWO PLACES — the dots, where the decision is due, and the
// puck, which is what the decision is about — and the misconception it kills is a
// misconception about places ("I got to the dot level with him, so it's my puck").
// Two marked positions and the distance between them is exactly what a plan view
// can say and prose cannot.
//
// THE ONE CONSTRAINT THE DESIGN IS BUILT ON: both skaters sit on x = 69, the
// end-zone dot line, so they reach the deadline at the same instant — and they are
// still NOT a dead heat, because the wall lane is about 25 ft from the puck and the
// inside lane about 30. Stagger them along the ice and the picture quietly teaches
// that reaching the dot first is what wins, which is the sentence the section spends
// a paragraph killing. Those two distances are read off THIS DRAWING and are not
// rulebook figures; the caption says so.
//
// NOT A CONTACT PICTURE, deliberately. Two skaters converging on a corner puck is
// the shape this corpus handles most carefully, and rules_primer's own §3 closes on
// the boarding clause for exactly this play. So the lanes are drawn 24 ft apart in
// width rather than shoulder to shoulder, neither arrowhead points at the other
// skater, both stop six feet short of the puck (5.99 and 6.00 ft, computed from the
// route endpoints against RACE_PUCK at (93,28) — an earlier draft stopped them at
// 8-9 ft and this sentence was left saying so after the routes were shortened; see
// the note on `routes` below), and the caption carries the boarding clause in all
// four books as its amber limb, plus the receiving posture, because this is a
// picture of two players skating hard at the end boards.
//
// WHY THE GOALTENDER IS DRAWN AND HAS NO ROUTE. Rule 81.3 waves the icing off if he
// "skates in the direction of the puck ... at any time", so a goaltender with a
// route on this picture would be drawing a second, different rule. Omitting him
// instead would read as an empty net, which changes the play completely.

const DOT_R = 'faceoff-dot:right';                 // (69, 22) — the near end-zone dot

// Level along the ice, 24 ft apart across it. The wall lane is the shorter line to
// the corner; that difference, and not the dead heat at the dots, is the judgement.
const RACE_D = { at: DOT_R, dy: 12 };              // (69, 34) — our D, wall lane
const RACE_F = { at: DOT_R, dy: -12 };             // (69, 10) — their F, inside lane
const RACE_PUCK = { at: 'goal-line', dx: 4, dy: 28 }; // (93, 28) — over the goal line, in the corner

const icingTheRaceAndTheDot = {
  id: 'icing-the-race-and-the-dot',
  owner: 'content/foundation/rules_primer.md',
  half: true,
  width: 900,

  caption:
    'Hybrid icing, and why the end-zone faceoff dot is a deadline rather than a finish line. This ' +
    'is your own end, your net at the right, and the puck has been shot the length of the ice ' +
    'over your goal line into the corner. Both skaters reach the dot line at the same instant, and ' +
    'the marked box is the near dot — marked as the cut-off for the decision, not as a place a ' +
    'draw is taken. NHL Rule 81.1, and IIHF Rule 81.1 states every sentence quoted here in the same ' +
    'words — though not the whole rule: the IIHF adds a paragraph for when there is no race at all. ' +
    '"This decision by the Linesperson will be made by no later than the instant the first player reaches ' +
    'the end zone face-off dots with the player’s skate being the determining factor" — and then, ' +
    'in the rule’s own clarifying sentence, "the determining factor is which player would first ' +
    'touch the puck, not which player would first reach the end zone face-off dots." So being ' +
    'level at the box settles nothing. Your defenceman is on the wall lane, about twenty-five feet ' +
    'from the puck; the forechecker inside him is about thirty. Those distances are measured ' +
    'off this drawing, not taken from a rulebook. What settles it is being clearly on ' +
    'course to reach the puck first, and "[i]f the ' +
    'race for the puck is too close to determine by the time the first player reaches the end zone ' +
    'face-off dots, icing shall be called." Your goaltender is drawn staying put on purpose: under ' +
    'these two books a goaltender who "feigns playing the puck, attempts to play the puck, or skates ' +
    'in the direction of the puck on an icing at any time" waves it off and leaves the other team a ' +
    'live puck in your corner (Rule 81.3). ' +
    'And this is not everybody’s icing — USA Hockey plays automatic icing: "Icing the puck shall have ' +
    'been completed the instant the puck has completely crossed the goal line" (Rule 624, Note), so there is no race to draw ' +
    'at all, and Hockey Canada runs hybrid only in U18AAA, Junior and Senior at the Member’s ' +
    'option — where it is also the book that writes the two outcomes out, a defending skater judged ' +
    'first to potentially touch the puck and "hybrid-icing will be called", an attacking skater ' +
    'judged first and "hybrid icing will be waved off and play will continue" (Rule 6.7(e)). ' +
    'Ask which your league plays. ' +
    '⚠️ The race is not a licence to hit, and three of the four books say so in one sentence each: ' +
    'unnecessary contact with a player playing the puck on an obvious icing play that results in ' +
    'him hitting or impacting the boards "is boarding and must be penalized as such" (NHL 41.1, ' +
    'IIHF 41.1, Hockey Canada 7.2, word for word), while USA Hockey penalises the same contact ' +
    'without naming boarding, at Rule 624(d). If you are clearly beaten to the puck, do not run yourself into the end boards ' +
    'for nothing. ' +
    '⚠️ And whoever wins it, how you arrive at the wall is the part that hurts people — this one holds in every ' +
    'league, checking or not, because unexpected contact happens in non-check hockey and the boards are just as ' +
    'hard. Never take that contact with your back to the boards, and never duck. Get your skates parallel to the ' +
    'wall instead, take it on your forearm and hip, head up and chin off your chest. Those are two prohibitions ' +
    'against two different injuries: a turned back makes it a hit from behind, which you can neither see nor brace ' +
    'for, and a chin tucked to the chest straightens the cervical spine — and it is that second one, from head-on ' +
    'contact with the boards or a goal post with the head down, that USA Hockey’s Heads Up Hockey guide says "can ' +
    'occur at walking speed." The walking-speed sentence belongs to that mechanism and to no other.',

  describe:
    'The defending half of the rink, your own net at the right and your goaltender in the crease. ' +
    'The puck sits in the right corner, past the goal line. Two skaters are level with each other ' +
    'along the ice, both on the line of the end-zone faceoff dots and about twenty-four feet apart ' +
    'across the ice: your defenceman is out near the boards, and an opposition forward is inside ' +
    'him toward the middle. Each has a plain skating route running toward the puck and stopping ' +
    'short of it, on clearly different bearings; the wall route is the shorter of the two. A small ' +
    'unlabelled box is drawn around the near end-zone faceoff dot, between the two skaters, marking ' +
    'the dot as the cut-off for the decision rather than as a place a draw is taken. Nothing else is ' +
    'drawn: no other skaters, no shot and no chase behind them.',

  // The box marks the dot as the DECISION CUT-OFF. It is deliberately small and does
  // not span the ice: the rule says "the instant the first player reaches the end zone
  // face-off dots", which is a pair of points, and a band drawn across the width would
  // invent a line the rulebook does not draw.
  //
  // ⚠️ NO ZONE LABEL, AND THE REASON IS THE ONE ALREADY WRITTEN DOWN IN `the-privileged-area`
  // BELOW. The renderer writes a zone's label at the polygon's MEAN, with no collision
  // handling. The comment that used to sit here reasoned that an asymmetric box would put
  // the mean "below the dot rather than on it" — and it was wrong by two feet. The points
  // are (63,14) (75,14) (75,26) (63,26), so the mean is (69,20) against a dot at (69,22):
  // two feet, against roughly 2.2 ft of type carrying a halo. Rendered, "the deadline" ran
  // about nineteen feet wide across a twelve-foot box and punched a white bite out of the
  // red dot — THE OBJECT THE ENTIRE RULE TURNS ON. Do not restore it, and do not try to
  // solve it by moving the mean: pulling it far enough clear stops the box reading as
  // centred on the dot, which is the one thing it has to say.
  //
  // The naming therefore lives in the caption and in `describe`, both of which say in
  // terms that the box is a decision cut-off and not a faceoff location — a box round a
  // faceoff dot in an icing diagram is otherwise read as one, and after an icing the draw
  // really does come to this end.
  zones: [
    {
      points: [
        { at: DOT_R, dx: -6, dy: -8 },   // (63, 14)
        { at: DOT_R, dx: 6, dy: -8 },    // (75, 14)
        { at: DOT_R, dx: 6, dy: 4 },     // (75, 26)
        { at: DOT_R, dx: -6, dy: 4 },    // (63, 26)
      ],
    },
  ],

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },
    { id: 'D', pos: 'D', at: RACE_D, label: 'nearer the puck' },
    { id: 'F', team: 'opp', pos: 'F', at: RACE_F, label: 'further from it' },
  ],

  // Plain forward skating, the key's own symbol, terminating in arrowheads because
  // both skaters carry on through the deadline — the decision is made behind them.
  // Each stops six feet short of the puck so neither picture asserts who won it.
  // ⚠️ These stopped 8-9 ft short in the first draft and the picture did not work:
  // rendered, both arrowheads died in open ice level with the top of the faceoff
  // circle, six feet apart and nowhere near the puck, so neither read as aimed at it
  // and the inside one read as pointing at the marked box instead. Six feet short is
  // close enough that the target is unmistakable and still far enough that the
  // picture does not assert who won.
  routes: [
    { from: RACE_D, to: { at: 'goal-line', dx: -1.8, dy: 29.5 }, kind: 'skate' },
    { from: RACE_F, to: { at: 'goal-line', dx: -0.8, dy: 24.4 }, kind: 'skate' },
  ],

  puck: RACE_PUCK,
};

// ---------------------------------------------------------------------------
// 4 — USA Hockey's goalkeeper's privileged area
// ---------------------------------------------------------------------------
//
// §7 "The trapezoid (goalkeeper's restricted area)" and the paragraph under it,
// "⚠️ But USA Hockey is not restriction-free behind the net". The region is defined
// in the rulebook THREE times, not twice — Rule 607(d) Note 2 and the Note closing
// Rule 614(c) in identical words, and the Glossary at "Goalkeeper's Privileged Area"
// in slightly shorter ones (usah.txt:6104-6107). ⚠️ The Glossary entry ends "(see rink
// diagram)", so USA Hockey may mark the region on its own rink plate; that has NOT been
// checked, because the plate is a figure and this file is read from the text extraction.
// The Casebook settles the far edge at Rule 607, Situation 6.
//
// WHY IT EARNS A PICTURE. "No trapezoid" is the fact everyone repeats, and the thing
// it is heard as — "so the goalie may do what he likes back there" — is wrong twice
// over: he may not FREEZE the puck outside this region, and contact on him INSIDE it
// is priced under a rule with no bare minor in it. The region is a rectangle bounded
// by the dots and the end boards, with the corners cut off, and building that shape
// from the prose is exactly the work a reader should not have to do in their head.
//
// THE TRAPEZOID IS NOT REDRAWN HERE — and it turns up anyway. `the-trapezoid`, owned
// by content/foundation/rink_map_and_glossary.md, is the diagram that draws it. But
// `rinkSvg`'s `endZone` paints the trapezoid lines on EVERY end of EVERY diagram, so
// this picture shows a USA Hockey rule on an NHL-marked sheet whether it wants to or
// not. Found by rendering it; invisible in the source. That is a conflict — the
// caption's whole point is that this book marks no trapezoid — so the caption names
// the dashed lines, says whose they are and why they are on the ice here, and uses
// the accident: the two shapes side by side are the comparison the section is making
// in prose. Do not try to suppress them; site/scripts/lib/rink.mjs is a shared tool.
//
// GEOMETRY. Rule 607(d) Note 2: "connecting the end zone face-off spots with an
// imaginary line and imaginary lines from each face-off spot running perpendicular to
// the end boards", plus the Casebook's "extends to the closer end boards". So:
// x from 69 (the dot line) to the boards, |y| <= 22. The boards are a rounded
// rectangle — corner radius 28, arc centre (72, 14.5) at this end — so the last few
// feet follow the curve rather than a square corner, and the polygon is inset about
// half a foot so its dashed stroke sits inside the dasher rather than on it:
//     y = ±22   ->  x = 72 + sqrt(27.5² − 7.5²)  = 98.46
//     y = ±19   ->  x = 72 + sqrt(27.5² − 4.5²)  = 99.13
//     y = ±14.5 ->  x = 72 + 27.5                = 99.50   (arc meets the straight boards)
// Those are derived from sheet.corner_radius and sheet.length in rink.json, not
// measured off a picture. NOT a rink datum and not added to one: this region belongs
// to one book's rule, not to the ice.
//
// THE LABEL. The region is symmetric about y = 0 and so its centroid — where the
// renderer writes the label, with no collision handling — lands on the net. The
// goaltender is therefore drawn off the centre line, behind the net on the short
// side, and the label is left to sit across the goal line where the region genuinely
// is. Read the rendered picture before moving either.

const PRIV_DOT_R = 'faceoff-dot:right';   // (69, 22)
const PRIV_DOT_L = 'faceoff-dot:left';    // (69, -22)

const thePrivilegedArea = {
  id: 'the-privileged-area',
  owner: 'content/foundation/rules_primer.md',
  half: true,
  width: 900,

  caption:
    'The goalkeeper’s privileged area, shaded — USA Hockey’s own term and USA Hockey’s own shape. Searched ' +
    'here for both: neither the words nor the construction that draws them appears anywhere in the NHL, IIHF ' +
    '2025/26 or 2026/27, Hockey Canada or CARHA books, and what those four use to bound the same two questions ' +
    'is the goal crease instead. So this is a region one book draws and the others do not, rather than a ' +
    'rule the others write differently. It is also the answer to "USA Hockey has no trapezoid", which is true and is not the ' +
    'same thing as no restriction behind the net. Rule 607(d) Note 2 draws it "by connecting the ' +
    'end zone face-off spots with an imaginary line and imaginary lines from each face-off spot ' +
    'running perpendicular to the end boards", the same words closing Rule 614(c), and the ' +
    'Casebook at Rule 607, Situation 6 answers in terms that it "extends to the closer end ' +
    'boards". So the shape is fixed by the dots and the boards rather than by any measurement, ' +
    'and it travels with whatever sheet you are on; it is drawn here on the NHL-dimensioned rink ' +
    'these diagrams use. Look at what it takes in and what it leaves out: the whole net front, the ' +
    'goal line, and all the ice directly behind the net — but not the corners. Two separate rules ' +
    'turn on it. Rule 614(c) makes it a minor for delay of game where a goalkeeper falls on or ' +
    'gathers in the puck and causes a stoppage while "[t]he puck is outside the boundaries of the ' +
    '‘goalkeeper’s privileged’ area", so under this book a goaltender may go to the corner and ' +
    'play the puck there — what he may not do is smother it. Read the region as a boundary and not ' +
    'as a licence inside it, though: it is one of four separate triggers in 614(c), and another of ' +
    'them catches him wherever "[t]he puck is behind the goal line and their body is entirely ' +
    'outside of the goal crease" — which takes in every part of the shading behind the goal ' +
    'line. And Rule 607(c) prices contact on ' +
    'him inside the region, with 607(d) Note 1 sending "any accidental or unavoidable contact" to ' +
    'the interference rule instead. The two red dashed lines behind the net are not part of it: ' +
    'that is the trapezoid, which this sheet carries because the rink these diagrams draw is the ' +
    'NHL’s, and which USA Hockey marks nowhere at all. Set the two shapes against each other and ' +
    'they are not even the same kind of rule — the trapezoid is much the smaller and says where a ' +
    'goaltender may play the puck, while the shading says nothing at all about playing it and ' +
    'bounds where he may freeze it and where contact on him is priced instead. ⚠️ 607(c) is the half to ' +
    'know before you go hard to the net, and it writes no bare minor: "A minor plus a misconduct or a major plus a game ' +
    'misconduct penalty shall be assessed to a player who body checks or charges a goalkeeper ' +
    'while the goalkeeper is within the goal crease or privileged area", with 607(e) adding that ' +
    '"[a] match penalty for reckless endangerment may also be assessed for charging." A ' +
    'goaltender anywhere inside this shading, behind his own net included, is not somebody to ' +
    'finish a check on. ' +
    '⚠️ And the edge of the shading is not the edge of a permission — that is the half a diagram ' +
    'of a region invites you to read into it, and 607(d) forecloses it: "A goalkeeper is NOT ‘fair ' +
    'game’ because they are outside the privileged area. A penalty for interference or charging ' +
    'should be called in every case where an opposing player makes unnecessary contact with a ' +
    'goalkeeper." Note 1 under it sends any accidental or unavoidable contact to the interference ' +
    'rule and "any deliberate body contact or check that is delivered to the goalkeeper" to ' +
    'charging, and the Casebook at Rule 607, Situation 5 repeats the restriction outside the ' +
    'region in its own words — a penalty "should be assessed in every instance where unnecessary ' +
    'or avoidable contact is made with the goalkeeper – even when outside the privileged area" — ' +
    'before conceding that where the goalkeeper has possession of the puck an attacker "is ' +
    'permitted to physically engage" with him for it — and taking the concession straight back in ' +
    'the next sentence, because "any check delivered with the intent to intimidate or punish the ' +
    'goalkeeper should be penalized as charging", and once he is no longer in control of the puck ' +
    '"any avoidable contact… must also be penalized under this rule." And since the other four ' +
    'books searched here draw no such region at all, under them there is no outside-the-region ' +
    'permission to be had in the first place.',

  describe:
    'The defending half of the rink, the net at the right, and no play in progress. A large shaded ' +
    'region is drawn on the ice: its inner edge is a straight line joining the two end-zone ' +
    'faceoff dots, and from each dot a straight edge runs directly back to the end boards, so the ' +
    'region is a rectangle taking in the net front, the goal line, the crease and all the ice ' +
    'behind the net, and stopping short of both corners. Its far edge follows the curve of the end ' +
    'boards. The two red dashed trapezoid lines the rink itself carries run behind the net inside ' +
    'the shading, splaying out from beside the goal to the end boards, and are a different and ' +
    'much smaller shape. The goaltender stands behind his own net, inside the shaded region and ' +
    'off to one side of it, and it is his label that names the region. No other players are drawn.',

  zones: [
    {
      points: [
        { at: PRIV_DOT_L },                          // (69, -22)
        { at: 'goal-line', dx: 9.46, dy: -22 },      // (98.46, -22)
        { at: 'goal-line', dx: 10.13, dy: -19 },     // (99.13, -19)
        { at: 'goal-line', dx: 10.5, dy: -14.5 },    // (99.50, -14.5)
        { at: 'goal-line', dx: 10.5, dy: 14.5 },     // (99.50, 14.5)
        { at: 'goal-line', dx: 10.13, dy: 19 },      // (99.13, 19)
        { at: 'goal-line', dx: 9.46, dy: 22 },       // (98.46, 22)
        { at: PRIV_DOT_R },                          // (69, 22)
      ],
      // ⚠️ NO ZONE LABEL, AND THE REASON IS GEOMETRIC RATHER THAN EDITORIAL. The
      // renderer writes a zone's label at the polygon's MEAN, with no collision
      // handling. This region is symmetric about y = 0, so its mean is (91.5, 0) —
      // on the net. Rendered with a label there, "privileged area" first ran off the
      // right-hand edge of the picture and was clipped mid-word; pulled back into
      // frame by extra boundary points, it then sat squarely across the goal frame
      // and hid the net, which is the landmark the whole region is described
      // against ("all the ice directly behind the net"). Both states were seen, not
      // reasoned about. So the naming goes on the goaltender's label instead, which
      // the label placer DOES route around obstacles, and the caption and the
      // description both name the region in words.
    },
  ],

  // The goaltender only, and he carries the region's name because the zone cannot —
  // see the note in the zone above. Placed behind his own net, which is the part of
  // the region readers are most likely to get wrong: a trapezoid would not let him
  // stand there under the NHL's book, and this shape is not a trapezoid. No attacker
  // is drawn: 607(c) is a contact rule, and a picture of the contact is not what
  // teaches the region.
  players: [
    // dy -14 rather than +9: at +9 the placer, routing round the goal frame, laid the
    // label straight across the net — the landmark the caption describes the region
    // against. Dropped below the goal line it has the empty ice between the lower
    // circle and the boards to sit in. Rendered both.
    { id: 'G', pos: 'G', at: { at: 'behind-net', dy: -14 }, label: 'inside the privileged area' },
  ],
};

export default [
  offsideFaceoffLocation,
  icingGainingTheLine,
  icingTheRaceAndTheDot,
  thePrivilegedArea,
];
