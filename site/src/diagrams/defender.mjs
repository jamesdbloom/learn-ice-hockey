/**
 * Diagrams for content/positions/defender.md.
 *
 * ⚠️ THIS DOCUMENT ALREADY OWNS THREE DIAGRAMS THAT DO NOT LIVE HERE.
 * `defender-two-on-one`, `defender-three-depths` and `defender-d-to-d-behind-the-net`
 * are all `owner: content/positions/defender.md` and all sit in `positions.mjs`, beside
 * the other three position documents' specs. Do not move them and do not add a second
 * copy of any of them — `grep -rn "positions/defender.md'" site/src/diagrams/*.mjs`
 * returns both files, deliberately. The brief that commissioned this file said the
 * document had "no diagram module at all", which is true of the FILE and false of the
 * DOCUMENT: `grep -c '!\[\](diagram:' content/positions/defender.md` was 3 before this
 * round. `winger.mjs` carries the same warning for the same reason.
 *
 * ⚠️ THIS FILE NOW HOLDS THREE NEW DIAGRAMS, NOT TWO — `defender-pair-overview` was added
 * in a later round as the D3 pilot (see its own block below for the design argument). The
 * paragraph immediately below this note was written for the original two and is left as
 * written rather than reworded around the third, because it is a historical account of that
 * round's reasoning and reads false if silently inflated. Do not add a fourth without either
 * updating the count here or leaving the same kind of dated note.
 *
 * WHY TWO NEW DIAGRAMS AND NOT TEN.
 * The document has 26 `###`/`####` teaching subsections under seven `##` sections
 * (`grep -c '^### \|^#### '` = 26) and is the longest positional document in the corpus
 * at 803 lines. Almost everything spatial in it is ALREADY DRAWN SOMEWHERE, because the
 * defenceman is the position the systems documents are mostly written about — and this
 * corpus's rule is that borrowing beats duplicating. The renderer announces the owner
 * aloud ("Diagram, from Defending the Rush."), so nobody hears one document's caption
 * under another's name. Six existing ids were placed into this document in the same
 * round as these two, and the register is kept here because a future editor will
 * otherwise re-derive it:
 *
 *   The high-slot rotation   -> `dz-collapse-high-slot` (defensive_zone_coverage.md).
 *                               Its caption carries BOTH halves this subsection states:
 *                               the weak-side winger dropping into the vacated high slot,
 *                               and the exception — the collapse "is not available if that
 *                               winger has already followed the opposing defenceman down
 *                               off the point", which is this subsection's own exception
 *                               paragraph almost word for word.
 *   Gap control — the method -> `rush-gap-and-angle` (defending_the_rush.md), which owns
 *                               the gap distances this subsection quotes and hedges.
 *   Faceoffs                 -> `faceoff-dzone-alignment` (faceoffs.md) puts the
 *                               boards-side defenceman behind his winger near the wall and
 *                               the second one in the slot, which is this section's
 *                               defensive-zone bullet exactly; its own caption then
 *                               contrasts that shape with the offensive-zone one, so the
 *                               comparison arrives without a second marker.
 *   Penalty kill             -> `pk-box` (special_teams.md) draws "you and your partner
 *                               low, owning the net front and the two low corners" AND the
 *                               uncovered bumper that is this section's stated reason for
 *                               the diamond.
 *   Blocking shots           -> `shot-block-get-close` (body_contact_and_battles.md). Its
 *                               caption sets ten feet against "three feet in front of your
 *                               own goalie", which is the second term defender.md says the
 *                               owning document uses — so the borrowed caption carries the
 *                               scope defender.md's ⚠️ tells the reader to read.
 *   Step up vs pinch         -> the STEP-UP is new, below. The PINCH half is
 *                               `pinch-centre-high` (risk_management.md), whose caption is
 *                               built on "what is behind it if it does not work" — which is
 *                               precisely the comparison this subsection draws between the
 *                               two plays.
 *
 * WHAT WAS DELIBERATELY NOT DRAWN, and why, because the refusals are the half that gets
 * re-litigated:
 *
 *   Backward skating /       -> `skating-pivot-toward-the-boards` (skating.md) fits the
 *   which way to pivot          words, and was still rejected: it is a half-rink picture of
 *                               a defenceman inside a carrier being steered to the wall,
 *                               which is what `rush-gap-and-angle` draws TWO SUBSECTIONS
 *                               EARLIER in the same document. Its own caption also states
 *                               that it cannot show the pivot. A near-identical second
 *                               picture that admits it cannot show its subject is
 *                               repetition, not teaching. defender.md already sends the
 *                               reader to skating.md in terms.
 *   Power play               -> `pp-131` draws the shape, but this section's question is
 *                               personnel — whether you are on the ice at all — and the
 *                               four formations are a list. Drawing one of four nominates
 *                               it. special_teams.md owns the shapes and draws all five.
 *   The trapezoid            -> `the-trapezoid` (rink_map_and_glossary.md) and
 *                               `goalie-rim-stop-or-clear` (goaltender.md) both draw it,
 *                               and defender.md's treatment is a four-book rules
 *                               comparison rather than a position on the ice. The one
 *                               spatial thing in it — the corner rim your goalie may not
 *                               fetch — is `goalie-rim-stop-or-clear`'s whole subject, and
 *                               that document is linked from the passage. Left for a
 *                               reviewer to decide; a borrow here would be defensible.
 *   Net-front technique      -> body mechanics. `net-front-walk-out-direction` states in
 *                               its own caption that this is something no diagram can
 *                               draw, and it is right.
 *   Icing / line changes     -> a rule and a clock. Neither is a place on the ice.
 *   A Note on Language       -> definitions. `the-goalmouth`, `the-high-slot`,
 *                               `strong-side-and-weak-side` are rink_map_and_glossary.md's
 *                               and the section already points there as the dictionary.
 *
 * ⚠️ A LATER ROUND ADDED FIVE MORE BORROWED MARKERS TO THE CONTENT FILE, NOT TO THIS
 * MODULE — no new diagram spec lives here for them, so the count of NEW diagrams
 * authored in this file stays THREE. A census had flagged three sections of
 * defender.md as undiagrammed gaps: "Defensive Zone: Carrying the Puck — Under
 * Pressure", "Defensive Zone: Pressuring an Opponent with the Puck" and "Net-front
 * technique — how to actually move someone" (the largest undiagrammed section on the
 * page). All three are now closed by borrows rather than by new artwork, and two of
 * them REVERSE a decision recorded above:
 *
 *   Rim vs. reverse           -> `breakout-rim` AND `breakout-reverse`
 *                               (breakouts.md, already reused in time_and_space.md
 *                               and goaltender.md). "Defensive Zone: Carrying the
 *                               Puck — Under Pressure"'s own Read line — "Rim to beat
 *                               a forechecker sealing you against the boards; reverse
 *                               to beat one who has over-committed and skated past
 *                               you" — is close to a paraphrase of the two captions:
 *                               `breakout-rim`'s is built on "a forechecker has
 *                               sealed D1 against the boards", `breakout-reverse`'s
 *                               on "the forechecker has over-committed and skated
 *                               past him". Both, not one, because the section's own
 *                               claim is that reading which of the two you are
 *                               facing "is a core defenceman skill" — the same
 *                               structure as the step-up/pinch pair above, which
 *                               already earns two markers for the same reason.
 *   The corner battle         -> `dz-collapse-corner` (defensive_zone_coverage.md).
 *                               Frame one of the two-frame low-zone-collapse
 *                               sequence this document already draws frame two of,
 *                               at "The high-slot rotation" below — the strong-side
 *                               D on the puck, the weak-side D at the goalmouth, the
 *                               centre leaving the high slot as the second body, and
 *                               both wingers still on their points, which is this
 *                               section's own "wingers stay high ... the low battle
 *                               belongs to the strong-side defenceman and the
 *                               centre" almost word for word. Its caption already
 *                               carries the man-on-man hedge this section states.
 *   The trapezoid retrieval   -> `goalie-rim-stop-or-clear` (goaltender.md), NOT
 *                               `the-trapezoid` (rink_map_and_glossary.md), which
 *                               the note above left "for a reviewer to decide" and
 *                               called a defensible borrow. Re-read both: `the-
 *                               trapezoid` draws the shape alone, no players, which
 *                               is right for a glossary entry but has nothing this
 *                               subsection needs that the body does not already
 *                               state. `goalie-rim-stop-or-clear` draws the DECISION
 *                               instead — a rimmed puck crossing the goal line well
 *                               outside the shaded area and only then entering it,
 *                               with a defenceman labelled "your defenceman" coming
 *                               back on the far side — which is this subsection's
 *                               own claim, "your goalie cannot get a rim that dies
 *                               in the corner. You have to." The reviewer's call
 *                               went the other way from the hedge above.
 *   Net-front technique       -> `net-front-walk-out-direction`
 *                               (body_contact_and_battles.md, already reused in
 *                               goaltender.md), REVERSING the refusal recorded
 *                               above. That refusal is still correct about what it
 *                               was about: the close body mechanics of a walk-out —
 *                               shoulder under the armpit, leverage, the drive
 *                               itself — are not something a top-down rink diagram
 *                               can show, and the caption says so in its own words.
 *                               But defender.md's H4 is not only the walk-out: its
 *                               own ⚠️ paragraphs and its Common Mistakes and Key
 *                               Takeaways entries carry a DIFFERENT and fully
 *                               spatial claim — move the player toward the corner,
 *                               never across the front of your own net, because
 *                               that path has a goal post at one edge and your own
 *                               goaltender at the other. That is exactly the one
 *                               route this diagram draws, and its caption carries
 *                               the same rule numbers defender.md's own prose does
 *                               for the underlying push — USA Hockey Rule 604(c),
 *                               Hockey Canada Rule 7.3(a), IIHF Rule 101.1 — plus
 *                               the goal-post spinal-injury mechanism at walking
 *                               speed; it does not itself number the majors and
 *                               match penalties defender.md's prose adds on top
 *                               (604(d)-(e), 7.3(b)-(c)), which stay this
 *                               document's own. The earlier note
 *                               was right about the technique and wrong to treat
 *                               that as settling the whole section.
 *
 * NOT drawn, and not reconsidered: "A Note on Language", "Icing" and "Line Changes"
 * — the reasons given above still hold; nothing in this round found either a rink
 * picture that teaches beyond the prose or an existing diagram that fits. "Offensive
 * Zone: Without the Puck — Supporting the Cycle from the Line" was checked against
 * every candidate in offensive_zone_play.mjs and puck_support_and_spacing.mjs: none
 * draws a DEFENCEMAN activating into the back door, every close candidate fixes both
 * defencemen at the points as background rather than showing the read, and a new
 * diagram would need its own caption carrying at least two coaching-choice hedges
 * (weak-side-default vs. strong-side, five-man rotation vs. single-high) inside this
 * corpus's 800-character new-caption budget — drawn, that risks shipping one hedge
 * bare rather than both in full. Left undrawn rather than shipped thin.
 *
 * ⚠️ NEITHER DIAGRAM HERE SHADES A ZONE, on purpose. `check_zones.py` compares shaded
 * polygons across diagrams for regions that name the same thing, and every new polygon is
 * a new row in that comparison for whatever teaching it buys. Neither of these needs one:
 * both are about where players are standing, and one of them is about where a player is
 * NOT — and an absence cannot be shaded without inventing an edge for it.
 *
 * ORIENTATION. `defender-step-up` is `half: true` with the defended net at the RIGHT,
 * which is what `defender-two-on-one` and `defender-d-to-d-behind-the-net` already use,
 * so a reader moving through the document never re-orients. `defender-holding-the-line`
 * is full-sheet because the thing it is about is the fifty feet of neutral zone between a
 * defence pair and its own forwards: a half-sheet picture of that has the forwards
 * missing. `winger-wall-depth-by-system` and `faceoff-neutral-zone` are full-sheet for
 * the same reason and say so.
 *
 * ⚠️ LABEL WIDTH DECIDED WHICH PLAYERS CARRY LABELS AND WHICH DO NOT.
 * `placeLabels` centres a label on its player's x with `text-anchor="middle"` and avoids
 * players, routes and zones but NOT RINK MARKINGS, so a label wider than twice its
 * player's distance from a painted line is drawn through that line. On its own metric
 * (`CH = size × 0.56`) a half-sheet label is 1.568 ft a character and a FULL-SHEET one is
 * 2.666, because `TXT` is 1.7 on a full sheet. That is why:
 *   - `defender-holding-the-line` labels only ONE player. Its two defencemen stand ON
 *     their own blue line, whose ink runs x −25.5 to −24.5; at x = −26 a label of even one
 *     character (2.67 ft, spanning −27.3 to −24.7) is drawn through it. Its forward with
 *     the puck is at x = 2 and the centre red line's ink is x −0.5 to 0.5, so the same
 *     applies. The one label it does carry, `up ice`, is 16.0 ft on a forward at x = 43,
 *     spanning 37.0 to 51.0 — clear of the blue line at 25.5 and of the far faceoff
 *     circle, whose leftmost ink is at x = 54.
 *   - `defender-step-up`'s stepping-up defenceman is labelled `you` and not
 *     `you, stepping up`. Three characters span 4.70 ft (27.65 to 32.35 on a player at
 *     x = 30) and clear the blue line's outer edge at 25.5 by 1.15 ft; seventeen span
 *     26.7 ft and do not. His partner is `partner` — 10.98 ft on a player at x = 46,
 *     spanning 40.5 to 51.5, clear of the near faceoff circle's leftmost ink at 54.
 *   - the opposition carrier in that diagram is UNLABELLED. At x = 6 anything long enough
 *     to be worth reading runs off the viewBox, whose left edge is x = −2.
 * Do not lengthen a label in this file without re-doing that arithmetic.
 *
 * ⚠️ EVERY CLEARANCE BELOW IS MEASURED ON INK, NOT ON A ROUTE SPINE OR AN ENDPOINT.
 * The figures used throughout, read off the glyph and route branches in
 * site/scripts/lib/rink.mjs rather than remembered: a forward's circle is r 2.9 with a
 * halo stroke of 1.95, so 3.875 ft of ink from the centre; a defenceman's triangle has
 * circumradius 3.6 plus 0.4 of round-joined stroke, so 4.0, and spans only ±3.5 in x
 * because the apex points along +y; a puck is r 1.1; a route stroke is 0.7, so ±0.35; a
 * `carry` wave has amplitude 1.05, so its ink reaches ±1.4 from the spine.
 *
 * WHAT THE CAPTIONS HERE STATE. `defender-step-up` carries four rule citations, and every
 * one of them is taken from the ```facts block and body of the subsection the marker sits
 * in AND was re-read in the primary text on disk rather than carried across:
 *   USA Hockey Rule 607 (Note)  sources/usah.txt:3663  "takes more than two strides or
 *                               travels an excessive distance to accelerate through a body
 *                               check for the purpose of punishing the opponent"
 *   USA Hockey Rule 607(a)      sources/usah.txt:3674  "A minor plus a misconduct or a
 *                               major plus a game misconduct penalty shall be assessed for
 *                               charging an opponent."
 *   Hockey Canada Rule 7.4(ii)  sources/hc.txt:6064    "Builds up speed by taking two or
 *                               more strides immediately prior to making contact."
 *   IIHF Rule 42.1              sources/iihf_rules_v1.1.txt:3928 and
 *                               sources/iihf_rules_2026-27.txt:3986  "builds up speed by
 *                               taking multiple strides"
 *   NHL Rule 42.1               sources/nhl_rules_layout.txt:4523-4526  "skates, jumps
 *                               into or charges an opponent in any manner … as a result of
 *                               distance traveled" — no stride count anywhere in it.
 * That constraint exists because no `content/` sweep can see a caption: `check_facts.py`
 * and `check_rule_scope.py` read `content/` only. A rule corrected in the corpus would
 * reach every markdown site and stop dead at a caption.
 */

const OWNER = 'content/positions/defender.md';

/* ==================================================================== *
 * 1 · Stepping up at your own line — and what is behind you
 *     owner: defender.md — '"Step up" and "pinch" are two different
 *            plays', and the Risk line in "Neutral Zone: Pressuring an
 *            Opponent with the Puck" above it
 *
 * WHY THIS ONE EXISTS. The subsection's entire subject is that two plays
 * a reader confuses are at OPPOSITE BLUE LINES with opposite things
 * behind them, which is a spatial claim and nothing else. The pinch half
 * is drawn twice already — `forecheck-pinch` and `pinch-centre-high` —
 * and the second of those is built on exactly this subsection's argument
 * ("what makes a pinch defensible is what is behind it"). NOTHING DREW
 * THE STEP-UP. `nz-stand-up-at-the-line` is the nearest thing and is a
 * different play: that defenceman's feet are STOPPED at the line, and its
 * caption says so three times over. This one's feet are moving forward.
 *
 * ⚠️ WHY THE PARTNER AND THE SECOND ATTACKER ARE DRAWN. The subsection
 * says "there is nothing but open ice behind you"; the section above it
 * says "if you step up and miss, you leave your partner alone in a
 * 2-on-1". Those are the same fact from two ends, and only the second is
 * drawable — empty ice photographs as nothing. So the picture draws the
 * consequence: one partner, two attackers, and the ice between the
 * stepping-up defenceman and his own goaltender carrying nobody at all.
 * Drawing the partner does NOT contradict "nothing behind you": he is
 * across on the far side, not behind the man who went.
 *
 * ⚠️ THE STEP-UP ROUTE IS `pressure`, WHICH TERMINATES IN TWO BARS, AND
 * THAT IS THE WHOLE POINT OF THE PICTURE. An arrowhead reads as
 * continuing through the point the line ends at; two bars read as arrive
 * and contain. This subsection's ⚠️ paragraph is that a step-up finished
 * as a hit is what the charging rules are written for, so a route through
 * the carrier would draw the offence the prose forbids. `pinch-centre-
 * high` uses the same glyph for the same reason and its caption names it.
 * A bar-ended route is also out of scope for `check-arrivals.mjs` by
 * construction — see THE ARRIVAL INVARIANT in site/scripts/lib/rink.mjs.
 *
 * GEOMETRY, all against site/src/data/rink.json. Half sheet, the DEFENDED
 * net at the right; own blue line at x = 25, neutral-zone dots at x = 20.
 *
 * ⚠️ THE FIRST DRAFT OF THIS SPEC WAS RENDERED AND WAS WRONG, and only
 * looking at it said so. Its carry ran 9.2 ft and its step-up 10.3 ft —
 * on a `carry` the wave's lambda is 5.0, so nine feet buys ONE hump plus a
 * 4.5-unit arrowhead, and the route read as a squiggle attached to the
 * glyph rather than as a player moving. Both routes are now half again as
 * long, and the two players they belong to were moved apart to buy it.
 * A route length that satisfies every clearance can still fail to be a
 * picture of movement.
 *
 *   you      (38, 16)   thirteen feet inside your own blue line, so the
 *                       step-up has somewhere to come FROM. The triangle
 *                       spans x 34.5 to 41.5 (±3.5, apex on +y).
 *   partner  (48, -14)  retreating on the far side, between the blue line
 *                       and the top of the faceoff circle. x = 48 rather
 *                       than 52 to buy clearance for the `partner` label:
 *                       at x = 52 it spans 46.5 to 57.5 and the left-hand
 *                       circle's ink at that label's height begins at
 *                       x = 56.3 — see the label note in the file header.
 *   carrier  (4, 27)    coming through the neutral zone on your side.
 *   2nd att. (18, -26)  wide on the far side, roughly level with the
 *                       neutral-zone dot there. He is the reason a miss
 *                       costs a two-on-one rather than a stride.
 * ROUTES.
 *   The carry (4, 27) -> (17, 25), bow 0, 13.2 ft. ⚠️ ARRIVAL, measured on
 *   the drawn curve exactly as `check-arrivals.mjs` does: terminal tangent
 *   is (13, -2), i.e. (0.988, -0.152) normalised. The stepping-up
 *   defenceman lies 22.9 ft from the tip — well outside `ARRIVAL.noArrow`
 *   (9.0) — and 5.72 ft off the extended ray, outside `ARRIVAL.glyph`
 *   (2.9). The partner is 49.8 ft away and 33.9 ft off it, and the
 *   goaltender 71.5 ft. Neither form fires on any of them.
 *   ⚠️ The 5.72 is the whole reason the carry ends at y = 25 rather than
 *   y = 22. Ended level with the defenceman it is a carrier skating dead
 *   at him: the tangent then passes 1.22 ft from his anchor and form (a)
 *   fires. Two feet of endpoint bought four and a half feet of tangent.
 *   The step-up (38, 16) -> (27, 20), `pressure`, 11.7 ft. Its bars finish
 *   11.2 ft from the carry's arrowhead and 24.0 ft from the carrier's own
 *   centre, so it is visibly a closing of space and not an arrival on him.
 * ==================================================================== */

const STEPUP_YOU = { at: 'point:right', dx: 13, dy: -4 };        // (38, 16)
const STEPUP_CARRIER = { at: 'neutral-dot:right', dx: -16, dy: 5 }; // (4, 27)

const stepUp = {
  id: 'defender-step-up',
  owner: OWNER,
  half: true,
  width: 900,
  title: 'Stepping up at your own line',

  caption:
    'A step-up at your own blue line, drawn in your own end with the net you are ' +
    'defending at the right and the attack coming from the left. Stepping up means moving ' +
    'forward to challenge an oncoming carrier early instead of retreating in front of him, ' +
    'and it happens here or out in the neutral zone. Pinching is the other play and it ' +
    'happens at the other blue line, and the two being confused is what this picture is ' +
    'drawn against. ' +
    'What it is really about is the ice behind the defenceman who has gone. There is ' +
    'nobody at all between him and his own goaltender, and his partner is across on the ' +
    'far side with a second attacker already wide of him — so a step-up that misses does ' +
    'not cost a stride, it leaves that partner alone in a two-on-one. A pinch is generally ' +
    'the safer of the two for exactly the opposite reason: your forwards are still in the ' +
    'zone behind you and can help recover. Read what that compares, though — rushes coming ' +
    'back at you, and not what the two plays do to a body. ' +
    'So step up only when you are confident you can win the puck or force a turnover: ' +
    'confidence, not hope. How aggressive confident should be is a coaching choice rather ' +
    'than a rule of hockey — an aggressive neutral-zone press wants you challenging at the ' +
    'line, a passive trap wants you holding and steering the carrier wide — so ask which ' +
    'risk your coach wants to carry. ' +
    '⚠️ And a step-up is a closing of space, not a hit. The route drawn here ends in two ' +
    'bars, meaning arrive and contain, and it is drawn that way on purpose. A step-up ' +
    'finished as a hit is the geometry the charging rules are written for, and a carrier ' +
    'with his head down is the picture those rules name: that tells you he cannot change ' +
    'direction, and nothing more. None of the four books caps charging at a minor, and ' +
    'USA Hockey Rule 607(a) writes no bare one at all — "a minor plus a misconduct or a ' +
    'major plus a game misconduct penalty shall be assessed for charging an opponent". ' +
    // ⚠️ CRITICAL, found by `safety-reviewer`. This read "the Note to USA Hockey Rule 607
    // NEEDS 'more than two strides'" and stopped there. Voiced alone with a 300 ms break
    // either side, that tells a defenceman two strides is a safe harbour. IT IS NOT, IN ANY
    // BOOK -- and the caption TRUNCATED USA Hockey's own sentence at the stride clause:
    // usah.txt:3663 continues "or travels an excessive distance to accelerate through a body
    // check", and then "This includes skating or leaving one's feet (jumping) into the
    // opponent". The Casebook answers "Yes" to charging with no strides at 607 Situation 3.
    // Four layers carried the counterweight -- body, rules_primer.md:419, the facts block and
    // Common Mistakes -- and the ONE layer voiced with no surrounding text did not. Round 10's
    // shape exactly.
    'The stride counts disagree, and none of them is a threshold you may skate to. ' +
    'Hockey Canada Rule 7.4 makes "two or more strides immediately prior to making ' +
    'contact" charging, USA Hockey\'s 607 Note "more than two", the IIHF Rule 42.1 ' +
    '"multiple strides", and NHL Rule 42.1 no number at all. But every one of those books ' +
    'also reaches a check with no strides in it: USA Hockey\'s own sentence continues ' +
    '"or travels an excessive distance to accelerate through a body check for the purpose ' +
    'of punishing the opponent", and its Casebook answers "Yes" at 607 Situation 3 to a ' +
    'player who "delivers a check without taking the two fast strides, but instead ' +
    'accelerates through the check". Leaving your feet is charging in all four on its own. ' +
    'Two strides is a safe harbour in no book. ' +
    // ⚠️ The division claim below was DESTROYED by my own repair of this caption and
    // restored here. A line-index replacement cut its subject and left the tail
    // "carries a division clause..." as a subject-less fragment, voiced alone between
    // 300 ms breaks -- and the claim itself vanished from the one layer that has no
    // surrounding text. That is verbatim the shape of the critical the repair was
    // fixing. `commit-gate` caught it in the built page.
    'And charging binds every division, checking league or not — neither USA Hockey 607 ' +
    'nor Hockey Canada 7.4 carries a division clause, where the body-checking rules that ' +
    'restrict themselves say so in terms. Nothing in this picture is contact, and nothing ' +
    'in it is a licence to hit.',

  describe:
    'The defending half of the rink, your own net at the right, your goaltender in his ' +
    'crease. Your own blue line runs across the picture near the left-hand edge. One of ' +
    'your defencemen is a few feet inside that line on the near side, labelled "you", and ' +
    'his route runs forward and out across the line toward an oncoming opposition forward, ' +
    'ending in two short bars rather than an arrowhead. That forward is out in the neutral ' +
    'zone on the same side with the puck beside him, and his own route carries him toward ' +
    'the line. A second opposition forward is wide on the far side of the ice, level with ' +
    'the neutral-zone faceoff dot there, with no route. Your other defenceman, labelled ' +
    '"partner", is well back on that far side, between the blue line and the top of the ' +
    'faceoff circle. The whole of the ice between the stepping-up defenceman and his own ' +
    'goaltender is empty: no third defender, no backchecker, nobody.',

  players: [
    // ⚠️ LABELLED because `defender-step-up` and the borrowed `pinch-centre-high` sit TWO
    // LINES APART in defender.md and are compositionally near-identical half sheets --
    // net and G at the right, blue line left. They are OPPOSITE ENDS of the ice, and the
    // subsection exists to separate two plays by WHICH BLUE LINE. `diagram-reviewer`:
    // "a reader who looks rather than reads sees one end twice." The goaltender glyph
    // carries no team by design (rink.mjs:1812, and the HEO sheet prints a bare G), so
    // nothing else in the drawing can tell them apart. Naming the net fixes the class,
    // not just this pair.
    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 }, label: 'your net' },     // (85, 0)
    { id: 'D1', pos: 'D', at: STEPUP_YOU, label: 'you' },
    { id: 'D2', pos: 'D', at: { at: 'top-of-circle:left', dx: -6, dy: 8 }, label: 'partner' }, // (48, -14)
    // Unlabelled: at x = 6 any label worth reading runs off the viewBox's left edge at
    // x = -2. A solid circle already says opposition forward, and the puck says carrier.
    { id: 'F', team: 'opp', pos: 'F', at: STEPUP_CARRIER },                     // (4, 27)
    // Also unlabelled, and deliberately given no route: he is drawn to be counted rather
    // than to be followed. An arrow on him would nominate a lane the section does not name.
    { id: 'F', team: 'opp', pos: 'F', at: { at: 'neutral-dot:left', dx: -2, dy: -4 } }, // (18, -26)
  ],

  routes: [
    { from: STEPUP_CARRIER, to: { at: 'neutral-dot:right', dx: -3, dy: 3 }, kind: 'carry' }, // -> (17, 25)
    { from: STEPUP_YOU, to: { at: 'point:right', dx: 2 }, kind: 'pressure' },   // -> (27, 20)
  ],

  // 7.43 ft from the carrier's centre and BELOW the carry route rather than above it, which
  // leaves 2.46 ft of white between the puck's ink and his circle's and 2.23 ft between the
  // puck and the carry wave's ink. Above the route there is no position that clears both:
  // at 6.7 ft from the glyph the puck sits 0.96 ft off the wave, and pushed clear of the
  // wave it is 7.2 ft from the player and stops reading as his.
  puck: { at: 'neutral-dot:right', dx: -11, dy: -0.5 },                         // (9, 21.5)
};

/* ==================================================================== *
 * 2 · Holding your own blue line as the safety valve
 *     owner: defender.md — "Neutral Zone: Without the Puck — Holding the
 *            Line as the Safety Valve"
 *
 * WHY THIS ONE EXISTS. The section's "Where to be" is three spatial
 * claims in one sentence — at your own blue line, in the middle of the
 * ice, one defender each side of the middle, roughly between the two
 * neutral-zone faceoff dots — and nothing in the registry draws it.
 * `faceoff-neutral-zone` has the same defence-pair depth but is a
 * faceoff; `nz-1-2-2-containment`, `nz-1-3-1` and `nz-1-4` are the
 * defending team's five-man structures, which is the opposite situation:
 * here YOUR TEAM HAS THE PUCK and you are the outlet behind it.
 *
 * ⚠️ THE SECTION'S OWN WORDING WAS AMBIGUOUS AND THE DIAGRAM COULD NOT
 * DUCK IT. It read "one defender on each side of the center line", and
 * in this corpus the centre line is the RED LINE at centre ice
 * (rink_map_and_glossary.md, "The centre red line"). Read that way the
 * sentence is false — two defencemen at their own blue line are both on
 * the same side of it. It means the middle of the ice lengthwise, which
 * is the reading `faceoff-neutral-zone`'s caption already uses for the
 * identical arrangement ("one either side of the middle of the ice").
 * The prose was corrected to say that, in the body and in the ```facts
 * line, in the same edit that added this diagram.
 *
 * ⚠️ NO GAP FIGURE AND NO DEPTH FIGURE IS CLAIMED. The section gives no
 * distance and the caption invents none; where a defence pair holds in
 * the neutral zone moves with the system, and the caption says so rather
 * than naming systems this file has not read.
 *
 * GEOMETRY, all against site/src/data/rink.json. FULL SHEET, own net at
 * the LEFT and the attack going right, so the defending end is negative x
 * and `::far` resolves there.
 *   D, D     (-26, ±11)  on their own blue line at x = -25: each triangle
 *                        spans x -29.5 to -22.5, so both straddle the
 *                        line's 1 ft stroke. That is the picture. |y| = 11
 *                        puts each between the middle of the ice and his
 *                        own neutral-zone dot at |y| = 22 — the section's
 *                        "roughly between the two neutral-zone faceoff
 *                        dots" — without either standing on a dot.
 *   F puck   (2, 20)     in the neutral zone with the puck, under pressure.
 *   opp F    (18, 10)    closing on him from the attacking side. 18.87 ft
 *                        away, which is what a forechecker still closing
 *                        looks like. ⚠️ He was at (12, 14) in the rendered
 *                        first draft, and the render is what moved him:
 *                        his `pressure` route was 5 ft long and drew as a
 *                        mark beside his own glyph rather than as a player
 *                        arriving. Six feet of ice bought a route that
 *                        reads.
 *   F        (40, 24)    up in the attacking zone, unlabelled.
 *   F        (43, -20)   the same, and the one player that carries a
 *                        label — x = 43 rather than 45 so `up ice` clears
 *                        the far faceoff circle. See the file header.
 * ROUTES.
 *   The pass (2, 20) -> (-18, 11.5). It stops 8.02 ft short of the near
 *   defenceman's centroid, which is 4.0 ft of white against his triangle's
 *   ink — a pass drawn to a receiver's anchor buries its arrowhead inside
 *   the glyph. `check-arrivals.mjs` does not reach a pass by design.
 *   The forechecker's `pressure` (18, 10) -> (8, 17), 12.2 ft. Bar-ended,
 *   so it is out of scope for the arrival rule by construction; its bars
 *   finish 6.71 ft from the carrier's centre, which is a closing of space
 *   rather than an arrival on him, and there is no contact anywhere in
 *   this picture.
 * ==================================================================== */

const HOLD_CARRIER = { at: 'centre-ice', dx: 2, dy: 20 };        // (2, 20)
const HOLD_FORECHECK = { at: 'centre-ice', dx: 18, dy: 10 };     // (18, 10)

const holdingTheLine = {
  id: 'defender-holding-the-line',
  owner: OWNER,
  half: false,
  width: 900,
  title: 'Holding your own blue line',

  caption:
    'Holding your own blue line as the safety valve, drawn on the whole sheet with your ' +
    'own goal at the left and your team attacking to the right. ' +
    'Your two defencemen are at their own blue line, one either side of the middle of the ' +
    'ice and both inside the width the two neutral-zone faceoff dots mark out. Together ' +
    'they are the last line before their own zone, which is why neither of them is drawn ' +
    'any further up the sheet. ' +
    'Your forwards are up ice with the puck, and the nearest one has a forechecker closing ' +
    'on him — so the dashed pass drawn back to the near defenceman is the job this ' +
    'position exists for. Be an option your forwards can find when everything in front of ' +
    'them is covered, and keep your stick down and in the passing lane while you wait, ' +
    'because an active stick is what turns their attempted pass into your interception. ' +
    'Then be ready to go either way: support the attack, or turn and defend, instantly. ' +
    'The thing not to do from here is drift forward to join the play. The ice you are ' +
    'standing on is the ice a turnover has to be defended from, and a defenceman who has ' +
    'drifted twenty feet up the sheet is a defenceman who is no longer in front of the ' +
    'rush that turnover creates. ' +
    'Exactly where a defence pair holds in the neutral zone is part of your team’s system ' +
    'rather than a fixed spot on the ice — Neutral Zone Systems sets out the structures ' +
    'and they do not all hold at the same depth — so read this as the job rather than as a ' +
    'square foot to memorise, and find out what yours wants. And nothing here is contact: ' +
    'the forechecker’s route ends in two bars, meaning arrive and contain.',

  describe:
    'The full two-hundred-foot sheet, your own goal at the left with your goaltender in ' +
    'his crease, and your team attacking to the right. Two of your defencemen stand on ' +
    'your own blue line, one on each side of the middle of the ice, each about eleven feet ' +
    'off the centre of the sheet and so well inside the two neutral-zone faceoff dots. ' +
    'Neither has a route: they are holding. Three of your forwards are up ice. Two are in ' +
    'the attacking zone, one of them labelled "up ice"; the third is out in the neutral ' +
    'zone just past the centre red line with the puck beside him, and a single opposition ' +
    'forward is closing on him from the attacking side, that forechecker’s route ending ' +
    'in two short bars rather than an arrowhead. One dashed passing route runs from the ' +
    'forward with the puck back down the ice toward the nearer of the two defencemen, ' +
    'stopping short of him. No other opposition players are drawn.',

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease::far', dx: 1 } },                    // (-85, 0)
    // ⚠️ BOTH DEFENCEMEN UNLABELLED, and for the measured reason in the file header rather
    // than for want of anything to say. They stand on the blue line, whose ink runs
    // -25.5 to -24.5; on a full sheet one character of label is 2.67 ft wide, so even a
    // single letter centred at x = -26 is drawn through the line. The caption carries it.
    { id: 'D1', pos: 'D', at: { at: 'point:right:far', dx: -1, dy: -9 } },      // (-26, 11)
    { id: 'D2', pos: 'D', at: { at: 'point:left:far', dx: -1, dy: 9 } },        // (-26, -11)
    // Unlabelled: at x = 2 any label crosses the centre red line's ink at x = ±0.5.
    { id: 'F', pos: 'F', at: HOLD_CARRIER },                                    // (2, 20)
    { id: 'F', team: 'opp', pos: 'F', at: HOLD_FORECHECK },                     // (18, 10)
    { id: 'F', pos: 'F', at: { at: 'top-of-circle:right', dx: -14, dy: 2 } },   // (40, 24)
    { id: 'F', pos: 'F', at: { at: 'top-of-circle:left', dx: -11, dy: 2 }, label: 'up ice' }, // (43, -20)
  ],

  routes: [
    { from: HOLD_CARRIER, to: { at: 'centre-ice', dx: -18, dy: 11.5 }, kind: 'pass' }, // -> (-18, 11.5)
    { from: HOLD_FORECHECK, to: { at: 'centre-ice', dx: 8, dy: 17 }, kind: 'pressure' }, // -> (8, 17)
  ],

  // 6.67 ft from the carrier's centre, on the boards side of him and 4.26 ft off the
  // pass's spine, so 1.70 ft of white against his circle's ink and 2.81 ft against the
  // pass's. At 5.1 ft it was 0.13 ft of white, which is two marks touching.
  puck: { at: 'centre-ice', dx: -4.5, dy: 21.5 },                               // (-4.5, 21.5)
};

/* ==================================================================== *
 * 3 · The pair — one on the puck, one on the net (the Overview pilot)
 *     owner: defender.md — "## Overview"
 *
 * THIS IS THE D3 PILOT: the first Overview/page-summary diagram drawn
 * anywhere in the corpus, commissioned to settle a design question before
 * 31 more Overview sections get one. THE QUESTION WAS WHETHER A
 * PAGE-SUMMARY DIAGRAM SHOULD MAP THE PAGE'S REGIONS (here: one drawn
 * moment per zone — defensive, neutral, offensive) OR DRAW ONE
 * REPRESENTATIVE SITUATION. The brief's own hypothesis was the map, on
 * the reasoning that defender.md is organised by zone. That hypothesis
 * is REJECTED here, for a reason the brief could not have weighed because
 * it is about the caption, not the page:
 *
 * ⚠️ THE CAPTION BUDGET KILLS THE MAP. An Overview caption is the first
 * thing a listener hears on the page and is capped at 700 characters, well
 * under this corpus's own median (1,303). A three-zone map would need to
 * state three different jobs (contesting the puck and covering the
 * goalmouth in the defensive zone; gap control and backward skating in the
 * neutral zone; picking a depth in the offensive zone) and each of those
 * jobs carries ITS OWN coaching-choice hedge in the body this document
 * ships — low zone collapse vs. man-on-man in the defensive zone,
 * step-up/pinch aggression as a coached risk in the neutral zone, how far a
 * defenceman may activate in the offensive zone. Cardinal-rule 7 forbids
 * dropping any of those hedges, and three of them do not fit in 700
 * characters beside three job descriptions — a caption that tried would
 * either blow the budget or ship at least one bare-looking rule. A single
 * situation carries exactly one hedge and stays legible; see the caption.
 *
 * AND THE OVERVIEW'S OWN TEXT IS NOT ORGANISED BY ZONE EITHER. Its four
 * `facts` lines are the pair job, gap control, the never-cross-in-front
 * rule and the 2-on-1 convention — four ideas pulled from across the whole
 * document, not one per zone. The pair job (strong-side plays the puck,
 * weak-side holds the goalmouth, swap on a puck crossing the middle) is
 * the one that gets its own paragraph first, is the vocabulary
 * ("strong-side"/"weak-side") every other section in the document reuses,
 * and is the only one of the four that is genuinely zone-agnostic in the
 * text itself (the Note on Language section restates it as a general
 * convention, not a defensive-zone one). It is the single most
 * page-defining idea, which is what an Overview diagram should draw.
 *
 * WHAT IS DRAWN, AND WHY THIS MOMENT. A low zone collapse snapshot: the
 * opposition has the puck in the corner, the strong-side defenceman is on
 * it, the weak-side defenceman holds the goalmouth. This is deliberately
 * the SAME corner cluster `winger-high-then-down-the-wall` in positions.mjs
 * already draws and has already had its clearances worked out for —
 * opposition forward `{ at: 'corner:right', dx: 4, dy: -2 }`, own
 * defenceman `{ at: 'corner:right', dx: -4, dy: -6 }`, puck
 * `{ at: 'corner:right', dx: 2, dy: -7 }` — reused rather than
 * re-derived, because the clearance arithmetic for a triangle and a
 * circle at those exact anchors does not change between files. The
 * weak-side defenceman at `{ at: 'goalmouth', dx: -2, dy: -7 }` is the
 * same anchor `centre-low-zone-collapse` in positions.mjs uses for the
 * identical role, labelled `goalmouth` for the identical reason (it is
 * the one label that fits without straddling the crease or the net).
 *
 * NO ROUTE. The teaching point is the SPLIT and the SWAP, not a movement,
 * and the swap itself cannot be drawn as one arrow without picking a
 * direction the puck is not shown moving in. The caption states the swap
 * in words; the picture is the static shape it produces at either end of
 * it. `check-arrivals.mjs` has nothing to check here by construction.
 *
 * NO ZONE SHADED, for the reason the file header gives for the other two:
 * every new shaded polygon is a new row in `check_zones.py`'s
 * cross-diagram comparison, and this picture is about two players, not a
 * region.
 *
 * ORIENTATION matches the other three defender.md diagrams already in
 * this file and in positions.mjs: half sheet, defended net at the right.
 * ==================================================================== */

const PAIR_STRONG_D = { at: 'corner:right', dx: -4, dy: -6 };  // (78, 28)
const PAIR_OPP_F = { at: 'corner:right', dx: 4, dy: -2 };      // (86, 32)

const pairOverview = {
  id: 'defender-pair-overview',
  owner: OWNER,
  half: true,
  width: 900,
  title: 'The defence pair',

  caption:
    // ⚠️ THREE DEFECTS FOUND BY REVIEW; THE FIXES ARE DELIBERATE.
    // (1) 'contesting a loose puck', NOT 'the puck carrier'. These corner anchors are
    //     reused from positions.mjs's winger-high-then-down-the-wall, where the puck at
    //     (84,27) was placed EQUIDISTANT IN INK on purpose — 5.39 and 6.08 ft — to read
    //     as a 50/50. Possession is carried by the puck here, so a caption asserting a
    //     carrier contradicted the geometry it was drawn on.
    // (2) The goalmouth is glossed in ITS OWNER'S words. It read 'the ice between any
    //     opposing forward and your goaltender' — a region defined against a MOBILE
    //     opponent, which is not a layer. rink_map_and_glossary.md owns the term and
    //     warns that confusing goalmouth with slot is a common cause of a blown assignment.
    // (3) NO trailing 'every zone below'. This caption is BORROWED into
    //     switching_positions.md, which has no zone sections below its heading — the exact
    //     defect this round repaired in dz-collapse-high-slot. A borrowed caption must
    //     stand alone in every document that hosts it.
    'Two defencemen working as a pair, shown in your own end, contesting a loose puck in ' +
    'the corner. One of you plays the puck; the other holds the goalmouth — the ice at ' +
    'the mouth of your own goal — and you swap those jobs the moment the puck crosses ' +
    'the middle of the ice. That net-front assignment is a low zone collapse — the ' +
    'coverage assumed throughout this guide, and a coaching choice rather than a rule: under ' +
    'man-on-man the net front belongs to whoever\'s man is standing there, so find out ' +
    'which your team plays.',

  describe:
    'The defending half of the rink, your own net at the right, your goaltender in his ' +
    'crease. One opposition forward is deep in the right corner with a loose puck between them. Your ' +
    'strong-side defenceman is beside him, contesting the puck. Your weak-side ' +
    'defenceman is on the opposite side of the net from the corner, at the goalmouth, ' +
    'labelled "goalmouth", between the net front and where an unmarked opponent would ' +
    'stand. No route is drawn: the picture is the shape the pair forms, not a movement.',

  players: [
    { id: 'G', pos: 'G', at: { at: 'crease', dx: -1 } },                       // (85, 0)
    { id: 'F', team: 'opp', pos: 'F', at: PAIR_OPP_F },                        // (86, 32)
    { id: 'D', pos: 'D', at: PAIR_STRONG_D },                                  // (78, 28)
    { id: 'D', pos: 'D', at: { at: 'goalmouth', dx: -2, dy: -7 }, label: 'goalmouth' }, // (83, -7)
  ],

  puck: { at: 'corner:right', dx: 2, dy: -7 },                                 // (84, 27)
};

export default [
  stepUp,
  holdingTheLine,
  pairOverview,
];
