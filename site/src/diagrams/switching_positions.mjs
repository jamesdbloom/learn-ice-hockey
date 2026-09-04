/**
 * Diagrams for content/positions/switching_positions.md.
 *
 * ⚠️ THIS DOCUMENT ALREADY OWNS ONE DIAGRAM THAT DOES NOT LIVE HERE.
 * `off-wing-open-to-the-ice` is `owner: content/positions/switching_positions.md`
 * and sits in `positions.mjs`, beside the three other position documents' specs.
 * Do not move it, and do not add a second copy — `grep -rn "switching_positions.md'"
 * site/src/diagrams/*.mjs` returns both files, deliberately.
 *
 * WHY ONLY ONE PAIR IS DRAWN HERE, FOR EIGHTEEN THOUSAND WORDS.
 * The subject is what changes when you move between positions. Most of the document is
 * about HABIT, MINDSET and TIMING — the honest timeline, unlearning an automatic reflex,
 * how to ask a coach for a move, the goalkeeper/skater paperwork, which neck-protector
 * rule applies where — and a rink cannot draw any of it. Most of what IS arrangement is
 * already drawn under its own owner, and borrowing beats duplicating: the centre's swing
 * low is `centre-swing-low` (center.md) and `breakout-centre-swing` (breakouts.md); the
 * winger's point coverage and the moment it expires is `winger-high-then-down-the-wall`
 * (winger.md); the three offensive-zone depths are `defender-three-depths`; D-to-D behind
 * the net rather than through your own slot is `defender-d-to-d-behind-the-net`; the low
 * zone collapse rotation is `centre-low-zone-collapse`. The markdown references two of
 * those by id instead of redrawing them, and the renderer announces the owner aloud
 * ("Diagram, from center.") so nobody hears one document's caption under another's name.
 *
 * WHAT IS LEFT THAT ONLY THIS DOCUMENT OWNS is the pair below. Its section — "'Force them
 * outside' and 'getting beaten wide' are not the same thing" — exists because converting
 * forwards hear two instructions and conclude the position contradicts itself. The two
 * outcomes look alike, because in both of them the carrier is being sent toward the
 * boards, and the whole difference is one thing: whether the defenceman is still between
 * him and the net. That is a difference of POSITION, which is the one thing a rink can
 * draw, and it is the shape this corpus has used successfully — a pair differing by one
 * deliberate change.
 *
 * ⚠️ THE PAIR NOW MOVES ONE PLAYER AND NOTHING ELSE ON THE ICE, AND IT DID NOT BEFORE.
 * The earlier version moved the defenceman AND redrew the carrier's route — out to the
 * boards in the first picture, down and in to the middle in the second — and said so in
 * both captions, on the reasoning that naming a downstream consequence beats pretending
 * to a purity the picture does not have. Rendered side by side that reasoning failed on
 * its own terms. THE ROUTE IS THE DOMINANT MARK IN BOTH PICTURES and the defenceman's
 * eighteen-foot shift is the least salient thing on the page, so the difference a reader
 * absorbs first is "forcing outside sends him out; beaten wide sends him IN" — which is
 * the opposite of what the word "wide" means, and it is absorbed before the caption is
 * read. A picture is absorbed before its caption.
 *
 * So BOTH DIAGRAMS NOW DRAW THE SAME ROUTE, off one shared constant, and the only thing
 * that MOVES between the two pictures is the defenceman. That is honest as well as
 * legible: what the carrier does after he is past you is HIS choice and not a fact about
 * your position, and drawing one particular choice of his as though the geometry forced
 * it was teaching the wrong variable. The captions carry the consequence — that in the
 * first picture the wall lane is conceded with a defenceman inside it, and in the second
 * there is nobody inside it, so he leaves that lane for the net whenever he likes, which
 * no still picture can draw.
 *
 * ⚠️ TWO THINGS DIFFER BESIDES WHERE HE STANDS, AND THIS COMMENT USED TO SAY "the only
 * input that differs between the two specs is the defenceman's `dx`", WHICH IS FALSE OF
 * BOTH. (1) His `label` differs — `goal-side` against `beaten wide` — and that is not
 * cosmetic: the eleven-character string is what strikes the blue line in the second
 * diagram, recorded under D_BEATEN. (2) THE CARRIER'S LABEL MOVES, and no spec asks it
 * to: `placeLabels` avoids the relocated defenceman, so `carrier` renders at (31, 22.8)
 * on a leader in the first picture and at (40, 19.3) on a leader in the second. Read off
 * the two built SVGs, not off the placer. Neither is a defect — the placer is doing its
 * job — but any sentence claiming the two pages are otherwise IDENTICAL is contradicted
 * at a glance, and the second caption and the markdown both used to make one.
 *
 * ⚠️ NEITHER DIAGRAM DRAWS THE DEFENCEMAN'S OWN ROUTE, and that is a decision rather than
 * an omission. Three reasons, in order of weight. (1) It would break the pair: a retreat is
 * legible in the first picture and pointless in the second, so drawing it would put a
 * second visible difference beside the one the pair is about. (2) `rush-gap-and-angle` in
 * defending_the_rush.mjs already draws a defenceman's backward retreat and owns the gap it
 * closes; a second copy here would compete with it and would have to restate distances this
 * document explicitly hands to that one. (3) A version carrying it was drawn, rendered and
 * looked at, and it read badly — but read the measurement before repeating the reason. The
 * retreat ran (47, 22) -> (75, 28) against the carry curve then drawn, and the two never
 * came closer than 8.24 ft, so they did NOT merge; `rush-gap-and-angle`'s warning is about
 * two waves four feet apart and does not apply. What was wrong is weaker than that and is a
 * legibility opinion rather than a number: the run of backward C-cuts lay near-parallel to
 * the carry wave for its whole length along the top of the faceoff circle, so it read as a
 * second wave beside the first rather than as a different mark, and it finished inside the
 * painted arc. That is the THIRD reason and not the first. Both captions say the retreat is
 * not drawn and point at the document that draws it.
 *
 * ORIENTATION — the same in both, and the same as this document's existing diagram.
 * `half: true`, YOUR OWN NET AT THE RIGHT, the attack arriving from the left. That is the
 * half-sheet convention every defensive-zone diagram in `positions.mjs` uses
 * (`centre-swing-low`, `winger-high-then-down-the-wall`, `off-wing-open-to-the-ice`), so a
 * reader moving through this document never has to re-orient. It is NOT the convention in
 * defending_the_rush.mjs, which is full-sheet with the defended net at the left; that file
 * is internally consistent too, and mixing across documents is the lesser evil. Both
 * captions say which way the play is going, because a reader who has to work that out has
 * already lost the picture.
 *
 * NO SHADED ZONE, on purpose. "The middle" is already drawn under that label at two
 * different areas, by `rush-gap-and-angle` and `angling-your-route`, both of which disclose
 * that the depth is the picture's own and that nothing in the corpus owns it. A third copy
 * would add a row to `check_zones.py`'s cross-comparison for no teaching gain. This pair is
 * about where the defenceman is standing, not about the band he is protecting.
 *
 * NO GAP CLAIM, on purpose. Gap distances are owned by content/systems/defending_the_rush.md,
 * which gives them as a guide rather than a law and records that only the neutral-zone
 * figure has a published source at all. Both captions say a gap is not what is being drawn.
 *
 * ⚠️ AND THE CONTACT COUNTERWEIGHT IS NOT THE CAPTION'S TO CARRY ALONE. The first caption
 * says "the angle is yours everywhere; the contact is not", and an earlier round wrote that
 * sentence HERE AND NOWHERE ELSE while the section it illustrates taught steering a carrier
 * into the wall — "where the wall becomes a second defender" — in its body and in its
 * ```facts block with no such limit attached. A caption is not a layer a reader can be
 * relied on to meet: the facts block is voiced alone. The counterweight now sits in the
 * body, the block, Common Mistakes and Key Takeaway 6 of the markdown, sourced there;
 * content/systems/defending_the_rush.md owns it and carries it in all four of its own
 * layers. If you edit the wording here, propagate it, and do not let this file be the only
 * place it lives again.
 *
 * ⚠️ AND IT HAPPENED TWICE MORE IN THESE SAME CAPTIONS, IN CLAIMS NO `content/` SWEEP COULD
 * SEE. The second caption carried the penalty-shot and awarded-goal consequences of a foul
 * from behind, citing rule 616(b) by number, while `switching_positions.md` contained zero
 * occurrences of 616, "penalty shot", "awarded goal", "breakaway" or "denies" (flattened,
 * with "from behind" x14 and "all four books" x5 as positive controls). The first caption
 * carried "boarding in all four books" with no "boarding" or "defenceless" anywhere in the
 * section. So a future correction to either would have reached every `content/` site and
 * STOPPED BEFORE THESE CAPTIONS: `check_rule_scope.py` and `check_facts.py` read `content/`
 * only, and `check_absolutes.py` reads captions but tests for unscoped absolutes.
 * Both now sit in the section's body, and the captions state them in the same terms.
 * ⚠️ NEITHER REACHED THE ```facts BLOCK, and that is a known gap rather than an oversight:
 * that block holds ELEVEN facts against `check_facts.py`'s HARD_MAX of 11, so a fact cannot
 * be added without evicting one, which is a judgement about the existing eleven and not a
 * repair. Flagged rather than forced.
 *
 * ⚠️ AND THE 616(b) SENTENCE WAS WRONG ON ITS OWN TERMS, not merely homeless. It read that
 * USA Hockey's referee may give a minor instead of the penalty shot "but not instead of the
 * awarded goal, which rule 616(b) gives with no alternative". Neither owner document makes
 * that claim; both put the divergence on a different axis. 616(b) awards the goal only
 * where "an obvious and imminent goal has been prevented by the fouled from behind
 * provisions" — so USA Hockey is NARROWER than the NHL, whose 25.1 carries no from-behind
 * test at all — and Hockey Canada 4.12(a), which both owners treat as a co-equal
 * divergence, was missing entirely. Verified in sources/usah.txt, nhl_rules_layout.txt and
 * hc_layout.txt before rewriting.
 *
 * ⚠️ AND THE BOARDING SENTENCE THEN INVENTED A DIVERGENCE THAT DOES NOT EXIST. The repair
 * above landed this caption on "they do not word it alike: the NHL and the IIHF both write
 * defenceless, Hockey Canada writes unsuspecting", and the markdown on "Hockey Canada 7.2
 * writes 'unsuspecting' where those two write 'defenseless'". BOTH FALSE, and false in the
 * unsafe direction: Hockey Canada's OPERATIVE MINOR, 7.2(a), reads "checks or pushes a
 * defenseless opponent in such a manner that causes the opponent to hit or impact the boards
 * violently or dangerously" — NHL/IIHF 41.1's sentence word for word, and the book's only
 * occurrence of "defenseless opponent". "Unsuspecting" is in the UNNUMBERED Rule 7.2
 * definition and in the glossary, which reads "defenseless or unsuspecting" — wider than the
 * clause, not narrower. Told the fabricated way, a Hockey Canada reader hears that their
 * book's protection turns on the opponent not seeing it coming, in a passage about riding a
 * carrier into the wall. Verified in sources/hc.txt AND hc_layout.txt (identical), whitespace
 * collapsed, positive control "penalty" = 1230; nhl_rules.txt, nhl_rules_2024-25.txt,
 * iihf_rules.txt and iihf_rules_2026-27.txt all carry 41.1's sentence unchanged.
 * defending_the_rush.md, the owner, groups Hockey Canada 7.2 with the defenceless standard in
 * all four of its layers, and defender.md already located 7.2(a) correctly — so the corpus
 * was contradicting itself and only this pair of layers was wrong. THE CAPTION NOW STATES THE
 * SHARED STANDARD AND NOTHING ELSE; the "unsuspecting" locating belongs to the markdown body,
 * rules_primer.md and defending_the_rush.md, which have room for it. Do not put a rule-set
 * CONTRAST back in here without checking the clause that imposes the penalty, not the
 * preamble above it.
 *
 * ⚠️ AND THE WIDTH CLAIM IS CONDITIONAL, NOT NATIONAL. An earlier version of this caption
 * read "the wall is a weaker second defender on wide ice than on narrow. On the sheets most
 * British and European readers play on...", flagged 🇬🇧, which renders as "For British
 * readers,". That premise is false in both directions. IIHF Rule 1.2 is a RANGE -- "60m long
 * and 26m to 30m wide" -- and 26 m is 85.3 ft, fractionally WIDER than the NHL's 85 ft, so
 * "IIHF ice" spans NHL width to about 13 ft more rather than meaning wide ice. And the IHUK
 * In-House Rules 2026-27, Rule 1, authorise British rinks "with a non-standard playing
 * surface (below 56 m x 26 m)" -- under the IIHF minimum on BOTH dimensions.
 * ⚠️ QUOTE RULE 1 WHOLE: it reads "for all levels of hockey, EXCEPT: England: Sutton -
 * permitted up to U16 only. Scotland: Coatbridge - permitted up to U16 only." Three layers
 * of this document quoted the clause and then wrote "for all levels", presenting a
 * truncation as complete. The exception is small but it is the rule's own text. content/foundation/rink_map_and_glossary.md, which owns rink size, tells a
 * British reader to assume a sheet SMALLER than both standards and lists narrow sheets of
 * 65-80 ft. So the old caption told a reader in a 70 ft rec rink to rely LESS on the wall
 * when on their sheet it helps MORE -- inverted for exactly the reader the flag addressed.
 * Keep the limit; keep it keyed to the WIDTH OF THE SHEET, never to a nationality.
 */

const OWNER = 'content/positions/switching_positions.md';

// ---------------------------------------------------------------------------
// Shared anchors.
//
// ⚠️ RE-DERIVE THESE RATHER THAN TRUSTING THE COMMENTS. Module comments in this corpus
// have been measured wrong in nine places while the conclusions above them held. The
// named positions used below are `point:right` (25, 20), `half-wall:right` (69, 38.5)
// and `crease` (86, 0), all from site/src/data/rink.json.
// ---------------------------------------------------------------------------

/** Your goaltender, four feet out from the goal line, which is at x = 89. */
const OWN_G = { at: 'crease', dx: -1 };                          // (85, 0)

/**
 * The carrier — IDENTICAL IN BOTH DIAGRAMS, which is what makes the pair a pair.
 * Fifteen feet inside your blue line and wide: the end-zone dot line is at 22 and the
 * half-wall at 38.5, so 28 is out toward the wall without being on it.
 */
const CARRIER = { at: 'point:right', dx: 15, dy: 8 };            // (40, 28)

/**
 * The puck — IDENTICAL IN BOTH. On the boards side of the carrier's body and a touch
 * behind him, which is where a carrier being steered wide has it.
 *
 * It sits 5.59 ft from the carrier's centre, against a forward glyph's 3.875 ft of ink
 * plus the puck's own 1.1 (so 4.98 is the floor).
 *
 * ⚠️ ITS CLEARANCE FROM THE ROUTE IS 3.71 ft, AND THIS COMMENT USED TO GIVE 5.17 / 5.23.
 * Those were SPINE figures — 5.16 ft from the puck's CENTRE to the wave's CENTRELINE, in
 * the module whose whole thesis is that a centreline figure is not a clearance. Measured
 * on ink: centre to route ink 4.81 ft (5.16 less the 0.35 stroke half-width), and the
 * puck's own 1.1 ft radius off that leaves 3.71 ft of clear ice between the two marks.
 * The 5.23 was a perpendicular taken off a start tangent stated as (0.762, 0.648); the
 * quadratic's start tangent is (0.845, 0.535) and the perpendicular offset on it is 5.56,
 * so neither number in that sentence re-derived. All figures here are for the WAVE
 * ACTUALLY DRAWN and not for the chord; see the note on A1_WALL_LANE for why that
 * distinction is the whole of this module's geometry history.
 */
const PUCK = { at: 'point:right', dx: 12.5, dy: 13 };            // (37.5, 33)

/**
 * ⚠️ THE ONE MOVED INPUT, AND NOW THE ONLY ONE: same anchor, same dy, one number.
 * dx 22 in the first diagram and 4 in the second. Eighteen feet.
 *
 * (47, 22) is NEARER THE MIDDLE than the carrier (22 against 28) and NEARER YOUR OWN NET
 * (47 against 40, with the goal line at 89). That pair of comparisons is how
 * content/systems/defending_the_rush.md operationalises "defensive side", also called
 * "goal side": "you are on the line between your opponent and your own goal. Anything that
 * puts an attacker between you and your net has already gone wrong."
 *
 * (29, 22) is the same defenceman eighteen feet further up the ice, with the carrier now
 * eleven feet past him toward the net and six feet outside him — past his outside shoulder,
 * with the whole end of the rink behind him empty. Eighteen rather than the thirteen this
 * first read: at thirteen the two glyphs finished 8.49 ft apart, and a forward's circle and
 * a defenceman's triangle carry 3.875 and 4.0 ft of ink, so they rendered all but touching
 * and read as a battle rather than as a man who has been gone past. At eighteen they are
 * 12.53 ft apart, 4.65 ft of clear ice between the two glyphs.
 *
 * ⚠️ (29, 22) IS FOUR FEET FROM YOUR OWN BLUE LINE, at x = 25, and that has a cost the
 * spec cannot pay. `placeLabels` avoids players, routes and zones but NOT rink markings,
 * and its first two offsets always collide with the label's own player box (reserve h 8
 * against a line height of 3.5), so this label is placed at (29, 14.5) whatever it says
 * and whatever length it is — nothing in the spec can move it.
 *
 * ⚠️ THE THRESHOLD IS A WIDTH, NOT A CHARACTER COUNT, and this comment used to give it as
 * "five characters or more", which tells the next editor the wrong thing to change. The
 * label is centred on x = 29 with `text-anchor="middle"` and the blue line's 1 ft stroke
 * is painted from 24.5 to 25.5, so the label is struck whenever its rendered width exceeds
 * `2 × (29 − 25.5)` = 7.0 ft, and by nothing else. On `placeLabels`' own metric
 * (`CH = size × 0.56`, so 1.57 ft a character at size 2.8) "beaten wide" is eleven
 * characters and 17.25 ft wide, and the struck column sits `w/2 − 4` = 4.62 ft in from the
 * left edge, which is the third character. A four-character label clears; five sits on the
 * boundary and depends on which glyphs it is made of. LABEL_HALO is 0.12
 * of the type size, ~0.34 ft, which knocks out a hairline and not a 1 ft line. Moving the
 * defenceman to clear it would cost the 12.53 ft of separation above, which is
 * load-bearing. Left as it is, and reported against the renderer rather than worked
 * around here.
 *
 * WHAT WAS FIXED IN THE SPEC, because it could be: the carrier's label was "puck carrier"
 * and at 12 characters it struck the blue line in the first diagram and the faceoff circle
 * in the second. "carrier" is 7 and lands clear of every marking in both. Measured by
 * rendering, not by reading the placer.
 */
const D_GOAL_SIDE = { at: 'point:right', dx: 22, dy: 2 };        // (47, 22)
const D_BEATEN = { at: 'point:right', dx: 4, dy: 2 };            // (29, 22)

/**
 * THE CARRIER'S ROUTE — ONE CONSTANT, DRAWN IN BOTH DIAGRAMS.
 *
 * (65, 38) is out on the wall four feet short of the dot line, where the angle to the
 * goal is poor. The route stops short of the boards themselves: this corpus does not draw
 * a route finishing at the wall, because the instruction that finishes one there is a
 * checking-league instruction and a picture cannot carry that exception.
 *
 * ⚠️ EVERY CLEARANCE BELOW IS MEASURED ON THE WAVE, NOT ON THE ENDPOINT AND NOT ON THE
 * CHORD, and that is the correction this constant exists to record. A `carry` route is
 * drawn by `wavePath` as a sine of amplitude 1.05 ft riding along the quadratic, at
 * stroke 0.7, so its ink reaches 1.4 ft either side of the spine. The version this
 * replaced ran to (74, 37) with bow 5 and its comment read "the whole curve stays outside
 * the faceoff circle except for the last few feet, where it grazes the arc by about a
 * tenth of a foot." That tenth of a foot is the SPINE's worst case (14.88 ft from the dot
 * against a 15 ft radius). The INK went 1.50 ft inside the arc, and 16.4 ft of the route —
 * 46% of it — ran within a wave's width of the painted line, near-parallel to it, so the
 * two marks were interleaved for the last third of the picture. ENDPOINT ARITHMETIC ON A
 * WAVE ROUTE IS NOT A CLEARANCE. The number to satisfy is the outer ink envelope.
 *
 * ⚠️ AND THE ARROWHEAD IS INK, WHICH IS THE THIRD TIME THIS BLOCK HAS UNDER-COUNTED ITS
 * OWN MARK. It measured the ENDPOINT once, then the SPINE, and until now the STROKE — but
 * the head is not part of the stroke. The `<marker id="ah-...">` in `<defs>` is DECLARED
 * AND UNUSED (`marker-end` returns 0 hits in both built SVGs), because `rink.mjs` draws a
 * curved route's head by hand as a filled triangle emitted after the path:
 * `M 65.00 -38.00 L 61.62 -38.85 L 62.20 -35.91 Z`. It is 3.15 ft long along the base
 * curve's terminal tangent and 3.0 ft barb to barb, against the stroke's 0.7 — so it is
 * the widest ink on the route and it is the nearest ink to two of the four markings below.
 * ⚠️ DO NOT RE-DERIVE IT FROM THE MARKER DECLARATION; that marker is unused and gives a
 * different and also wrong answer.
 *
 * Measured off the built SVG, for `bow: 2.5`, spine arc length 27.08 ft (the drawn
 * polyline, wave included, is 34.40 ft):
 *
 *   faceoff circle   nearest ink 15.48 ft from the dot at (69, 22) — that is the
 *                    ARROWHEAD; the stroke alone is 16.14 ft, which is what this block
 *                    used to give. 0.48 ft outside the 15 ft arc, and 0.31 ft outside the
 *                    paint (the arc is stroked 0.35, so its outer edge is at r 15.175).
 *                    The route crosses no painted marking. ⚠️ 0.31 ft is 1.1 px at the
 *                    360 CSS px this renders at on a phone. It is "does not cross", and
 *                    nothing may describe it as visibly clear.
 *                    ⚠️ AN EARLIER DRAFT OF THIS LINE SAID "0.0 ft of the route runs within
 *                    a wave's width of the arc". That 0.0 was the SPINE — the stroke-ink
 *                    figure is 3.74 ft, 13.8% of the 27.08 ft spine.
 *   the hash marks   nearest ink 0.86 ft to the near hash mark's centreline at x = 66.21,
 *                    y 37-39; 0.71 ft to its painted edge (stroked 0.3). ⚠️ THE NEAREST
 *                    PAINT ON THE PAGE, and this block did not measure it at all. 2.5 px
 *                    at 360 CSS px. ⚠️ The nearest ink here is the STROKE, not the head
 *                    (1.21 ft) — so correcting "stroke instead of ink" by measuring the
 *                    head alone under-counts in the other direction and yields 1.06.
 *   side boards      nearest ink 3.65 ft off the dasher — the arrowhead again; the stroke
 *                    alone is 4.15 ft. ⚠️ THAT IS UNDER THE 4 ft THE SWEEP BELOW DEMANDS.
 *   the puck         3.71 ft, ink to ink (see PUCK).
 *   the defenceman   7.38 ft of ink to (47, 22) in the first diagram; 12.18 ft to
 *                    (29, 22) in the second, at the route's start. The head is nowhere near
 *                    either, so here the stroke figure IS the ink figure.
 *   the goaltender   42.54 ft of ink to (85, 0); 42.94 ft on the spine. This block used to
 *                    say 42.1, which re-derives from nothing. The head is drawn along the
 *                    BASE CURVE's terminal tangent, (0.981, 0.196) — not (0.993, 0.121),
 *                    which this block also used to say, and not the last wave segment's
 *                    (0.985, 0.174) either. It points at the boards rather than at anybody,
 *                    so neither limb of the arrival invariant in site/scripts/lib/rink.mjs
 *                    is engaged.
 *
 * ⚠️ A DEEPER ROUTE IS NOT AVAILABLE, AND THE SWEEP THAT ESTABLISHED THAT HAS BEEN RE-RUN,
 * because its constraint was "2.8 ft of wave ink" — the same stroke-only under-count, which
 * the 3.0 ft head exceeds. Re-run with the head counted, over the same grid (every endpoint
 * x 62 to 84 and y 30 to 40, every bow 0 to 14, half-foot steps, from the carrier at
 * (40, 28)): against the 15 ft arc and 4 ft off the boards NOTHING survives past x = 65,
 * where the old figure was x = 68; against the arc's PAINTED edge at 15.175 and the same
 * 4 ft, nothing survives past x = 64.5. The corridor between arc and boards is 5.5 ft at
 * the dot line, of which the 4 ft board rule leaves 1.5 ft for a 3.0 ft head.
 *
 * ⚠️ SO THE ROUTE AS DRAWN FAILS THAT SWEEP'S OWN BOARD RULE BY 0.35 ft, and saying so is
 * the point of re-running a sweep rather than deleting it. (65, 38) at bow 2.5 clears the
 * arc paint by 0.31 ft and sits 3.65 ft off the dasher, not 4. At this endpoint only
 * bow 1.0 satisfies both, and it clears the arc by 0.11 ft — INSIDE the paint's outer edge,
 * which is worse to the eye than what is drawn. The candidates that pass everything sit at
 * x 64 to 64.5 and buy hash-mark clearance (1.36-1.86 ft) by giving up arc clearance.
 * NOTHING IN THE ADMISSIBLE SET DOMINATES THE ROUTE AS DRAWN, redrawing it changes both
 * pictures and both `describe` blocks, and that is not a repair a figure correction gets to
 * make. Left as it is and recorded. If you want a deeper route the thing to change is the
 * wave amplitude in `rink.mjs`, which is a corpus-wide notation decision and not this
 * module's to make.
 */
const A1_WALL_LANE = { at: 'half-wall:right', dx: -4, dy: -0.5 };  // (65, 38)
const A1_ROUTE = { from: CARRIER, to: A1_WALL_LANE, kind: 'carry', bow: 2.5 };

/* ------------------------------------------------------------------ *
 * 1 · Forcing them outside
 * ------------------------------------------------------------------ */

const forcingThemOutside = {
  id: 'forcing-them-outside',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'Forcing a carrier outside, in your own end, with your net at the right and the attack ' +
    'arriving from the left. The defenceman is inside him and nearer the net, so the only ' +
    'route the carrier can see runs out toward the boards, where the angle to the goal is ' +
    'poor and the wall becomes a second defender. ' +
    'The thing to read off this picture is not the route, though. It is where the defenceman ' +
    'is standing at the moment drawn: still between the carrier and the net — nearer the ' +
    'middle of the ice than he is, and nearer your own goal, which is what the label ' +
    'goal-side on him means, and what Defending the Rush calls being on the defensive side. ' +
    'That is the whole of what makes this forcing him outside rather than getting beaten ' +
    'wide. The next diagram draws the same carrier on the same square foot of ice, skating ' +
    'the same lane, and moves one player: the defenceman, eighteen feet up the ice. ' +
    'Three things are deliberately not drawn: a gap distance, which Defending the Rush owns and ' +
    'gives as a guide rather than a law; the defenceman’s retreat, because this is one instant; ' +
    'and where your team meets a rush — standing up at the blue line and backing off into the ' +
    'zone are both coached, so find out which yours plays. ' +
    '⚠️ The angle is yours everywhere. The contact is not. Steering a carrier toward the ' +
    'boards with the route you skate is legal, and Hockey Canada writes that permission in ' +
    'terms — a player may steer or direct an opponent into the boards without actually ' +
    'touching or body-checking them — but only while neither player uses their body to ' +
    'body-check, bump, push or shove. Bumping is a lower bar than riding him along the wall. ' +
    '⚠️ And where checking is allowed the ride still has a limit, which the carrier seeing ' +
    'you coming does not lift. ' +
    'Riding him into the wall with your body is a different act. USA Hockey’s rule 604(a) ' +
    'prohibits body checking at twelve and under and below, in all girls’ and women’s ' +
    'classifications and in all non-check adult classifications — the minor is 604(c), and ' +
    'that list is a floor rather than a ceiling, because a local governing body may prohibit ' +
    'checking in any classification. Hockey Canada’s 7.3(a) bars it at under-thirteen and ' +
    'below, in female hockey, and in any other division a Member of Hockey Canada approves, ' +
    'and its own definition of a body check reaches a player who leaves their skating lane to ' +
    'make contact, or who extends an arm, shoulder or hip after angling an opponent. In ' +
    'women’s hockey, which is every level of it in Britain, IIHF rule 101.1 allows ' +
    'bodychecking where playing the puck is the clear intention, but carves the boards out: ' +
    'players competing for the puck may not use them to eliminate, push into or pin an ' +
    'opponent. ' +
    'Defenceless is not the whole test: USA Hockey’s ' +
    'rule 603 asks no such question in its base sentence, and the NHL, IIHF and Hockey Canada ' +
    'books all name unnecessary contact on a player chasing an obvious icing or off-side as ' +
    'boarding, in ' +
    'terms. In every one of the four the onus is on the player delivering the check, and USA ' +
    'Hockey 603(a) has no bare minor. A carrier you have steered is often half-turned when ' +
    'you arrive, and a check from behind into the boards is USA Hockey 608 — a major plus a ' +
    'game misconduct if he goes head first, and Hockey Canada 7.5 writes no bare minor for it ' +
    'either, reaching a match penalty where he cannot protect himself. ' +
    'Nothing in this picture ends in contact, and nothing in it is a licence to hit. ' +
    'And how much the wall does for you depends on sheet width: the wider it is, the more ' +
    'room a carrier forced outside has, so gap control and stick position matter more than ' +
    'steering. ' +
    '🇬🇧 Do not read the IIHF book as meaning wide ice — its rule 1.2 starts at twenty-six ' +
    'metres, fractionally wider than a full NHL rink — and do not assume a British sheet is a ' +
    'wide one: the IHUK In-House Rules authorise rinks below fifty-six by twenty-six metres, ' +
    'under that IIHF minimum on both dimensions, at every level bar Sutton and Coatbridge, ' +
    'each capped at under-sixteen. On a narrow sheet the wall does more of the work for you, ' +
    'not less. Rink Map and Glossary owns that limit.',

  describe:
    'The defending half of the rink, your own net at the right, your blue line at the left. ' +
    'Two skaters and a goaltender. An opposition forward carries the puck about fifteen feet ' +
    'inside your blue line, wide on the right-hand side, with the puck on the boards side of ' +
    'his body. Your defenceman stands about nine feet from him, both nearer the middle of ' +
    'the ice and nearer your own net — that is, on the inside and on the defensive side. One ' +
    'route is drawn, the carrier’s: a wave bowing gently outward toward the boards and ' +
    'finishing out on the wall a few feet short of the faceoff dot line and about four feet ' +
    'short of the boards themselves, finishing just outside the painted faceoff circle and ' +
    'just short of the nearer hash mark — close to both, crossing neither. ' +
    'The defenceman has no route drawn. Your goaltender is in the crease. Nothing in the ' +
    'picture shows contact.',

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: CARRIER, label: 'carrier' },
    { id: 'D', pos: 'D', at: D_GOAL_SIDE, label: 'goal-side' },
    { id: 'G', pos: 'G', at: OWN_G },
  ],

  routes: [A1_ROUTE],

  puck: PUCK,
};

/* ------------------------------------------------------------------ *
 * 2 · Getting beaten wide
 * ------------------------------------------------------------------ */

const gettingBeatenWide = {
  id: 'getting-beaten-wide',
  owner: OWNER,
  half: true,
  width: 900,

  caption:
    'The same rush as the diagram before this one, your net at the right, with one thing ' +
    'moved: the defenceman is eighteen feet further up the ice, and the carrier is past his ' +
    'outside shoulder. That is what getting beaten wide means, and it is not what forcing ' +
    'somebody outside means. ' +
    'Nobody else has moved, deliberately — the carrier stands on the same ' +
    'square foot of ice and skates the same lane toward the boards, because what separates ' +
    'the two pictures is not where he goes. It is where you are standing. In the first ' +
    'picture that wall lane was something conceded on purpose, with a defenceman inside it ' +
    'at the moment drawn. Here there is nobody inside it and nobody between the carrier and the ' +
    'net, so he can leave it for the goal whenever he chooses — and a still picture cannot ' +
    'draw "whenever he chooses", which is why the route is left as it is rather than being ' +
    'redrawn to the net. A route redrawn to the net is the commonest way this pair is got ' +
    'wrong: it teaches that being beaten wide sends a carrier inside, which is the opposite ' +
    'of what the word means. ' +
    'Neither picture draws the defenceman’s own skating, which is where this pair stops ' +
    'being useful: what decides which of the two you are standing in is very often not a ' +
    'decision at all but backward speed, and no still picture can show that. Defending the ' +
    'Rush draws the retreat and owns the distances. ' +
    'So the instinct this pair is asking a converting forward to build is stay on the ' +
    'defensive side of the puck — anything that puts an attacker between you and your net has ' +
    'already gone wrong — rather than never let anyone reach the outside. Those are not the ' +
    'same instruction, and only the first one is available on every shift. ' +
    '⚠️ Chasing from behind, your stick goes on the puck and nothing else. A hook, trip, hold ' +
    'or slash from behind that denies the scoring chance is a penalty shot rather than a ' +
    'two-minute penalty under the NHL and IIHF books, and an awarded goal if your own net is ' +
    'empty. The other two books are narrower here rather than the same. Under USA Hockey’s ' +
    'rule 616(a) the referee may give a minor instead of the penalty shot, and its 616(b) ' +
    'awards the empty-net goal only where the chance was prevented by the fouled-from-behind ' +
    'provisions, so that test survives with the net empty where the NHL’s awarded-goal rule ' +
    'carries none. Hockey Canada’s 4.12(a) routes its awarded goal through its own breakaway ' +
    'criteria. All four have conditions, and Defending the Rush owns them and sets out the ' +
    'rule text. ' +
    '⚠️ And catching him is not a licence to lean on him. The angle is yours everywhere; the ' +
    'contact that moves him off it is not, and from behind there is no cheap version of it ' +
    'in any book. This picture stops before any of it.',

  describe:
    'The defending half of the rink, your own net at the right, your blue line at the left. ' +
    'The same two skaters and goaltender as the diagram before, and the opposition carrier ' +
    'stands in exactly the same place, wide on the right-hand side about fifteen feet inside ' +
    'your blue line, with the puck on the boards side of his body. He skates the same route ' +
    'as in that diagram, and it is the only route drawn: a wave bowing gently outward toward ' +
    'the boards and finishing out on the wall a few feet short of the faceoff dot line. ' +
    'Your defenceman has moved, and he is the only player who has: he is now eighteen feet ' +
    'further up the ice, back toward your blue line, so the carrier is about eleven feet ' +
    'past him toward the net and six feet outside him, with the whole end of the rink ' +
    'behind him empty. The defenceman has no route drawn. Your goaltender is in the crease. ' +
    'Nothing in the picture shows contact.',

  players: [
    { id: 'A1', team: 'opp', pos: 'F', at: CARRIER, label: 'carrier' },
    { id: 'D', pos: 'D', at: D_BEATEN, label: 'beaten wide' },
    { id: 'G', pos: 'G', at: OWN_G },
  ],

  routes: [A1_ROUTE],

  puck: PUCK,
};

export default [forcingThemOutside, gettingBeatenWide];
