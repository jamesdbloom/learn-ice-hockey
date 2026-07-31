/**
 * Diagrams for content/foundation/rules_primer.md.
 *
 * The section is the source of truth. Every player and every route below is one
 * its prose describes; where the prose hedges, the caption hedges.
 *
 * THESE TWO ARE RULES DIAGRAMS, which changes what a caption may contain. A rule
 * in a caption comes from the rulebook text the owning document quotes, with the
 * document's own rule number, and from nowhere else — not from a second book, not
 * from a reading of the rule the document does not make. The primer is written to
 * NHL rules and flags divergences inline; where it flags none, the caption says
 * so rather than quietly implying the rule travels.
 *
 * A NOTE ON THE PUCK GLYPH. `playSvg` draws exactly one puck. Both diagrams below
 * are comparisons between two pucks — two ways the puck can enter a zone, and two
 * places the puck can be when a dump-in leaves the stick — so neither can mark
 * both with a glyph. offside-faceoff-location therefore draws no puck at all and
 * relies on the key's own symbols (the wave means "skating with control of the
 * puck", the dashed line means a puck travelling on its own); icing-gaining-the-
 * line puts the one glyph on the puck that is touching the red line, because that
 * contact is the entire rule, and says so in the caption. Inventing a second puck
 * symbol is the failure the notation header in rink.mjs records.
 *
 * REGISTERED in index.mjs (this note previously said it was not). This file is new and index.mjs is out of scope for
 * the agent that wrote it; until an import is added there, these two render only
 * through scripts/preview-diagrams.mjs and are not reachable from the site.
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
// "If your defenceman fired it in from his own end." Placed outside the marked
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
    { id: 'A', pos: 'F', at: { at: ATT_BLUE, dx: 12, dy: 6 }, label: 'preceded the puck' },
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

export default [offsideFaceoffLocation, icingGainingTheLine];
