/**
 * Render the rink as SVG, from the coordinate table in src/data/rink.json.
 *
 * The point of generating rather than tracing a picture: **the viewBox is in rink
 * feet**. `x="69" y="22"` in the output is literally the end-zone faceoff dot. So a
 * diagram source never contains a pixel coordinate, positions cannot drift from the
 * dimensions the corpus owns, and scripts/check_geometry.py can assert both against
 * rink_map_and_glossary.md.
 *
 * Rink coordinates: origin at centre ice, +x toward the attacking end, +y toward the
 * top of the drawing. SVG's y grows downward, so `py()` flips it — that is the only
 * place the two coordinate systems meet.
 */

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const RINK = JSON.parse(
  readFileSync(join(HERE, '..', '..', 'src', 'data', 'rink.json'), 'utf8')
);

/**
 * A short, deterministic id suffix for one diagram's internal references.
 *
 * `clip-path="url(#ice)"` and `marker-end="url(#ah)"` are document-scoped. Two
 * diagrams inlined into the same page — which is the EPUB story, and will be the
 * web story as soon as a document carries more than one — produce duplicate ids,
 * which is invalid XML and resolves every reference to whichever diagram came
 * first. Derived from content rather than a counter so a rebuild of the same
 * diagram produces the same file.
 */
function uid(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36).slice(0, 6);
}

/** Rink y -> SVG y. The single point of contact between the two systems. */
const py = (y) => -y;

/**
 * The boards outline again, with no fill, to be painted OVER the player halos.
 *
 * Each player glyph carries a ~0.6 ft white ring so that an open glyph crossing a solid
 * one is not erased by it — the corpus is monochrome, so there is no hue to fall back
 * on. That ring also punches through anything already painted beneath it, and the wall
 * is the one line where that is not survivable: a rendered pass found nine glyphs across
 * six diagrams cutting a white gap in an unbroken board line, which in dark theme reads
 * as the ice leaking out through the wall. In `breakout-reverse` it also breached the
 * invariant `rink.json` documents in its own `half-wall` note — the halo takes a
 * defenceman's apex to 4.6 ft where the clearance was derived for 4.0.
 * Re-painting the stroke above the halos and below the glyph bodies costs one element
 * per diagram and restores the wall without weakening the separation.
 * ⚠️ The hash marks and the faceoff dots take the same damage from the GLYPH halos and
 * are NOT repaired here — 13 hash marks go from partly visible to fully hidden, and the
 * red centre dot is pinched to a sliver in every faceoff diagram, in pictures whose
 * captions teach off both. The same remedy would fix them; it is recorded in OPEN_ITEMS
 * as an owner call because it means re-emitting marks the rink layer owns.
 *
 * ⚠️ THAT LIST IS THIS ELEMENT'S SCOPE, NOT THE SCOPE OF THE DAMAGE. A second and much
 * larger source of the same erasure was the halo behind the TEXT LABELS, and its
 * casualties were not hash marks and dots but a goal line, a goal-crease outline, two
 * faceoff circles and a shaded region's own dashed boundary. See `LABEL_HALO` below for
 * the measurements, the fix, and — importantly — why this over-paint could never have
 * been extended to cover it.
 */
function boardsOutline() {
  const S = RINK.sheet;
  return `<rect x="${-S.length / 2}" y="${py(S.width / 2)}" width="${S.length}" ` +
         `height="${S.width}" rx="${S.corner_radius}" fill="none" ` +
         `stroke="${PALETTE.boards}" stroke-width="0.6"/>`;
}

const PALETTE = {
  ice: '#ffffff',
  boards: '#1b1c1e',
  red: '#c8102e',
  blue: '#0f5a8f',
  creaseFill: '#cfe4f2',
  trapezoid: '#c8102e',
  label: '#5b5f66',
  home: '#0f5a8f',
  away: '#c8102e',
  puck: '#1b1c1e',
};

/**
 * The white halo behind a text label, as a FRACTION OF THAT LABEL'S FONT SIZE.
 *
 * Labels land on painted lines constantly — a count over the placer's own output found
 * 79 of the 140 diagrams with at least one label overlapping the 1 ft blue or centre-red
 * line — and grey text read straight over a blue band is not readable. So the text is
 * stroked white beneath its fill (`paint-order="stroke"`).
 *
 * ⚠️ THE HALO MUST STAY NARROWER THAN THE GAPS BETWEEN THE LETTERS. Past that width the
 * per-letter outlines merge into each other and the halo stops being an outline: it
 * becomes a solid white rectangle the size of the whole word, and that rectangle erases
 * every rink marking running behind it. This was a flat 0.9 ft — a 0.45 ft ring outward,
 * against faceoff circles, goal lines and crease lines stroked at 0.3–0.35 — so it did
 * not thin those lines, it removed them. A browser pass re-rendering each SVG with
 * `stroke-width="0"` on the labels restored every missing line, which is what proved the
 * cause rather than inferring it.
 *
 * What it was costing, at 1400 px: `net-front-walk-out-direction` lost a stretch of goal
 * line, the top of a faceoff circle and its hash marks; `icing-gaining-the-line` had the
 * centre-ice circle severed at the top AND the bottom, in the one diagram whose whole
 * subject is where the puck crosses a line; and `the-privileged-area` — a picture of a
 * region BOUNDED BY the goal line and the crease — cut the goal line, the crease outline,
 * and the dashed boundary of the region it exists to draw.
 *
 * ⚠️ The over-paint trick that saves the boards (`boardsOutline`, above) CANNOT be
 * extended to fix this, and the tempting one-line version of the fix is therefore wrong.
 * That element is emitted inside the glyph layer — above the player halos, below the
 * glyph bodies — but labels are placed AFTER the entire glyph layer, so an over-paint
 * that reached them would have to be painted on top of the text. Repainting a goal line
 * across a label is not a repair; it is the same defect facing the other way.
 *
 * A fraction rather than a constant because half-sheet diagrams draw labels at 2.8 ft and
 * full-sheet ones at 1.7x that: a flat width that hugs the letters at one scale floods
 * them at the other, which is how a single number came to be wrong everywhere. At 0.12
 * the ring is ~0.17 ft outward on a half-sheet label — comfortably inside the letter gaps
 * — and in a rendered check every line named above ran unbroken behind its text while the
 * labels stayed legible, including the ones sitting on the 1 ft blue line.
 *
 * ⚠️ Do not raise this to "make the labels pop". The halo's job is to separate a letter
 * from what is immediately behind it, not to clear a box for the word. The sweep that set
 * this value rendered one half-sheet label — "holds the line", sitting on the blue line in
 * `forecheck-212` — at 0, 0.28, 0.35, 0.45, 0.6 and 0.9 ft, and counted the scanlines of
 * that 75 px stretch of blue line on which any blue survived: 75, 74, 74, 73, 70, 64. The
 * damage is not linear in the width, it accelerates once the outlines start touching —
 * and at the value this file shipped with, an 11 px hole. Nothing mechanical checks any
 * of that, and every one of those six pictures looks deliberate.
 */
const LABEL_HALO = 0.12;
// Glyph-box metrics as a fraction of font-size, for stopping a leader line before
// the words rather than inside them. Approximations for the sans stack above; they
// only have to be close enough that the line ends in white space.
const CAP_H = 0.72;      // baseline to cap height
const DESC_H = 0.21;     // baseline to descender
const LEADER_GAP = 0.4;  // clear air between the line's end and the glyph box
// ⚠️ The advance width used to CLIP A LEADER is deliberately NOT the one used to
// RESERVE SPACE for a label. `CH` below is size * 0.56, and a browser pass measured
// the real distribution over 118 labels: min 0.384, median 0.446, p75 0.473, max
// 0.562. So 0.56 is the distribution's MAXIMUM -- correct for collision reservation,
// where over-reserving only costs layout, and wrong for clipping, where the whole
// error lands along the leader's axis and stops it short of the words. Measured
// consequence of using 0.56 for both: 40 leaders stopped over a unit short, one
// showing 0.20 units of line across a 1.79-unit gap.
const CLIP_ADV = 0.473;  // p75 of the measured distribution, not the max

/** Resolve a named position, optionally mirrored. `half-wall:right`, `corner:left:far`. */
export function resolve(name) {
  const [base, side, end] = String(name).split(':');
  const p = RINK.positions[base];
  if (!p) throw new Error(`unknown position: ${base}`);
  // 'blue-line:far' looks right and is not: with no side to name, 'far' lands in
  // the side slot and the near end comes back with no error. It mirrored a whole
  // full-sheet diagram onto the wrong half and stacked both goaltenders on one
  // crease. Unsided positions must be written 'blue-line::far'.
  if (side && side !== 'left' && side !== 'right') {
    throw new Error(
      `bad position "${name}": "${side}" is not a side. Unsided positions take an ` +
      `empty side slot — write "${base}::${side}", not "${base}:${side}".`);
  }
  if (end && end !== 'far' && end !== 'near') throw new Error(`bad position "${name}": "${end}" is not an end.`);
  // A left/right on an unsided position is redundant but harmless — it is ignored,
  // and several specs use it as a way to reach the far end. Only a *bad token* in
  // the side slot is dangerous, and that is what the check above catches.
  const sy = side === 'left' ? -1 : 1;
  const sx = end === 'far' ? -1 : 1;
  return { x: p.x * sx, y: (p.sided ? p.y * sy : p.y) };
}

/**
 * Resolve a location: either a named position, or a named position with an offset
 * in feet — `{ at: 'behind-net', dx: -4, dy: -6 }`.
 *
 * The offsets exist because a play is not made of vocabulary. A forechecker
 * finishes his route *short of* the puck carrier, not on the carrier's node, and
 * the first version of this file had no way to say that — so an arrow pointed at
 * an opponent's glyph and the picture read as a collision. An offset stays anchored
 * to a named position, so it is still reviewable as text and still cannot drift
 * from the table; it just admits that "six feet up-ice of the half-wall" is a real
 * thing a diagram needs to say. Offsets are in rink feet, +y toward the top.
 */
export function loc(v) {
  if (typeof v === 'string') return resolve(v);
  const p = resolve(v.at);
  return { x: p.x + (v.dx ?? 0), y: p.y + (v.dy ?? 0) };
}

function faceoffCircle(cx, cy, r, hashLen, hashSep) {
  const half = hashSep / 2;
  const parts = [
    `<circle cx="${cx}" cy="${py(cy)}" r="${r}" fill="none" stroke="${PALETTE.red}" stroke-width="0.35"/>`,
    `<circle cx="${cx}" cy="${py(cy)}" r="1" fill="${PALETTE.red}"/>`,
  ];
  // Four hash marks, two above and two below, outside the circle.
  for (const sy of [-1, 1]) {
    for (const sx of [-1, 1]) {
      const x = cx + sx * half;
      const y0 = cy + sy * r;
      parts.push(
        `<line x1="${x}" y1="${py(y0)}" x2="${x}" y2="${py(y0 + sy * hashLen)}" ` +
          `stroke="${PALETTE.red}" stroke-width="0.3"/>`
      );
    }
  }
  return parts.join('\n    ');
}

function endZone(sx) {
  const { lines: L, goal: G, trapezoid: T, faceoff: F } = RINK;
  const gx = L.goal_line_x * sx;
  const endX = (RINK.sheet.length / 2) * sx;

  // Crease: 8 ft wide, 6 ft deep. The lines run 1 ft in from the goal line and then
  // an arc of 6 ft radius closes them. Drawn *into* the zone — the first version
  // bulged toward the end boards, which is behind the net.
  const ix = -sx; // inward: away from the end boards
  const half = G.crease_width / 2;
  // Rule 1.7, via the owning document: the side lines run **4 ft 6 in** out from
  // the goal line and are joined by a 6 ft arc struck from the centre of the goal
  // line, giving a crease 8 ft wide and **6 ft deep**. This was 1 ft, which put the
  // apex 2.5 ft out — a crease less than half its real depth, on every diagram, for
  // the whole life of this renderer. Two agents drawing goaltender and screening
  // diagrams found it independently; check_geometry.py could not, because it checks
  // the table and never the drawing.
  const straight = 4.5;
  const crease =
    `<path d="M ${gx} ${py(half)} L ${gx + straight * ix} ${py(half)} ` +
    `A ${G.crease_arc_radius} ${G.crease_arc_radius} 0 0 ${sx > 0 ? 0 : 1} ` +
    `${gx + straight * ix} ${py(-half)} L ${gx} ${py(-half)} Z" ` +
    `fill="${PALETTE.creaseFill}" stroke="${PALETTE.red}" stroke-width="0.3"/>`;

  // Trapezoid: Rule 1.8 — 8 ft from each post at the goal line, 11 ft at the boards.
  const a = T.width_at_goal_line / 2;
  const b = T.width_at_end_boards / 2;
  const trap =
    `<path d="M ${gx} ${py(a)} L ${endX} ${py(b)} M ${gx} ${py(-a)} L ${endX} ${py(-b)}" ` +
    `fill="none" stroke="${PALETTE.trapezoid}" stroke-width="0.3" stroke-dasharray="1.5 1"/>`;

  const goal =
    `<rect x="${sx > 0 ? gx : gx - 3.33}" y="${py(G.post_y)}" width="3.33" height="${G.width}" ` +
    `fill="none" stroke="${PALETTE.red}" stroke-width="0.35"/>`;

  const circles = [F.dot_y, -F.dot_y]
    .map((cy) => faceoffCircle(F.end_zone_dot_x * sx, cy, F.circle_radius, F.hash_length, F.hash_separation))
    .join('\n    ');

  return [
    `<line x1="${gx}" y1="${py(RINK.sheet.width / 2)}" x2="${gx}" y2="${py(-RINK.sheet.width / 2)}" stroke="${PALETTE.red}" stroke-width="0.35"/>`,
    trap, crease, goal, circles,
  ].join('\n    ');
}

/**
 * Place text labels near points without letting them collide.
 *
 * Labels stack into an unreadable pile if each is simply written above its point:
 * seven of the named positions sit on the centre line within 25 ft of each other,
 * and in a play diagram the five players of a forecheck crowd the same corner. So
 * place each greedily — the nearest free offset wins — and draw a leader line
 * whenever a label ended up far enough from its point to be ambiguous.
 *
 * Both the vocabulary overlay and the play diagrams go through here. They had
 * separate placement code for one afternoon, which is how the play diagrams
 * shipped with "takes the passing option" written straight through "first option".
 *
 * @param {Array<{text:string,x:number,y:number,dot?:boolean}>} entries — rink feet
 * @returns {string[]} SVG fragments, one per entry
 */
function placeLabels(entries, opts = {}) {
  const { size = 2.4, dot = 0, half = false, reserve = [], avoid = [] } = opts;
  // A label further than this from its point gets a leader line drawn to it. Below
  // it no leader is drawn, so nothing can be crossed and `avoid` does not apply.
  const LEADER_MIN = 5.5;
  const CH = size * 0.56;   // approximate character width
  const LH = size * 1.25;   // line height
  const placed = [...reserve];  // {x, y, w, h} in rink feet — `reserve` blocks out
                                // space the caller has already drawn into, e.g. the
                                // player glyphs a label must not sit on top of.

  const collides = (a) =>
    placed.some((b) => Math.abs(a.x - b.x) * 2 < a.w + b.w && Math.abs(a.y - b.y) * 2 < a.h + b.h);

  // Keep labels off the boards — text running over the dasher is unreadable and
  // was the first thing to go wrong on the crowded end of the play diagrams.
  const maxY = RINK.sheet.width / 2 - 1.5;
  const minX = half ? 0 : -RINK.sheet.length / 2 + 1.5;
  const maxX = RINK.sheet.length / 2 - 1.5;
  // The boards are a rounded rectangle, not a rectangle. Testing the straight
  // bounds let labels sit up to five feet outside the dasher in the corners — four
  // of nine breakout diagrams did — because the corner arc cuts in 28 ft before the
  // rectangle's edge does. Test each corner of the label box against the arc.
  const R = RINK.sheet.corner_radius;
  const onIce = (x, y) => {
    if (Math.abs(y) > maxY || x < minX || x > maxX) return false;
    const cx = Math.sign(x) * (RINK.sheet.length / 2 - R);
    const cy = Math.sign(y) * (RINK.sheet.width / 2 - R);
    if (Math.abs(x) <= Math.abs(cx) || Math.abs(y) <= Math.abs(cy)) return true;
    return Math.hypot(x - cx, y - cy) <= R - 1.5;
  };
  const inside = (a) =>
    onIce(a.x - a.w / 2, a.y - a.h / 2) && onIce(a.x + a.w / 2, a.y - a.h / 2) &&
    onIce(a.x - a.w / 2, a.y + a.h / 2) && onIce(a.x + a.w / 2, a.y + a.h / 2);

  const OFFSETS = [
    [0, -4], [0, 4.5], [0, -7.5], [0, 8], [0, -11], [0, 11.5],
    [-9, -4], [9, -4], [-9, 4.5], [9, 4.5], [-13, 0], [13, 0],
    [0, -14.5], [0, 15], [-16, -8], [16, -8], [-16, 8], [16, 8],
  ];
  // The furthest displacement this table is willing to produce — hypot(16, 8) = 17.89 ft.
  // DERIVED FROM THE TABLE, not chosen: it is the placer's own declared idea of how far a
  // label may sit from the thing it names, so it is the right ceiling for the degraded
  // branch below. A census of the 399 leader lines the corpus drew before this change put
  // it at the 90th percentile (p90 = 18.46 ft, median 9.20), so it caps the tail and not
  // the body: 59 of the 79 labels that reach the sweep are unaffected by it, because they
  // take the `best` branch, which this ceiling deliberately does NOT constrain.
  const MAX_OFFSET = Math.max(...OFFSETS.map(([dx, dy]) => Math.hypot(dx, dy)));

  // THE LEADER LINE WAS THE ONE PART OF A LABEL NOTHING CHECKED. Placement tested the
  // label BOX against `reserve`, and the box alone: the dashed line joining box to anchor
  // was drawn wherever the two ended up. Measured over all 112 built diagrams, two leaders
  // came inside the 2.9 ft glyph radius of a player they did not belong to — the closest
  // 2.12 ft from a forward's centre, a dashed line drawn through a body — in diagrams whose
  // label boxes were both perfectly legal. `avoid` is the boxes the LINE may not
  // cross; the caller passes the players, because a leader through a route is ordinary and
  // a leader through a player is not.
  const segBox = (x1, y1, x2, y2, b) => {
    // Liang–Barsky against the box's slabs.
    const dx = x2 - x1, dy = y2 - y1;
    let t0 = 0, t1 = 1;
    for (const [p, q] of [[-dx, x1 - (b.x - b.w / 2)], [dx, (b.x + b.w / 2) - x1],
                          [-dy, y1 - (b.y - b.h / 2)], [dy, (b.y + b.h / 2) - y1]]) {
      if (p === 0) { if (q < 0) return false; continue; }
      const r = q / p;
      if (p < 0) { if (r > t1) return false; if (r > t0) t0 = r; }
      else { if (r < t0) return false; if (r < t1) t1 = r; }
    }
    return true;
  };
  const leaderClear = (cand, e) => {
    if (Math.hypot(cand.x - e.x, cand.y - e.y) <= LEADER_MIN) return true;
    return !avoid.some((b) =>
      // The label's own player sits under the anchor end of every leader. Excluding it is
      // not a fudge: the line starts there on purpose.
      !(Math.abs(b.x - e.x) < 0.5 && Math.abs(b.y - e.y) < 0.5) &&
      segBox(e.x, e.y, cand.x, cand.y, b));
  };

  // A label belongs to the nearest thing to it, whatever the leader line says.
  // "puck carrier" was once placed 7.4 ft from F1 and 20.3 ft from the carrier it
  // named — the leader line disambiguated it only for a reader who traced the
  // leader, and nobody traces the leader. So a placement is only legal if this
  // entry's own anchor is the closest anchor to it.
  const ownsIt = (cand, e) => {
    const mine = Math.hypot(cand.x - e.x, cand.y - e.y);
    return entries.every((o) => o === e || Math.hypot(cand.x - o.x, cand.y - o.y) > mine);
  };

  // Place the crowded centre-line entries first, so they get the near slots.
  const order = [...entries].sort((a, b) => Math.abs(a.y) - Math.abs(b.y) || a.x - b.x);

  // One entry's placement, at a given strictness. `strict` requires the leader line to
  // clear every box in `avoid`; the caller retries without it rather than losing a label,
  // because a label that is not drawn is the failure mode this file has already paid for
  // once — 104 goaltenders vanished from 112 diagrams with a clean exit 0.
  const placeOne = (e, w, h, strict) => {
    const ok = (cand) => inside(cand) && !collides(cand) && (!strict || leaderClear(cand, e));
    for (const [dx, dy] of OFFSETS) {
      const cand = { x: e.x + dx, y: e.y + dy, w, h };
      if (ok(cand) && ownsIt(cand, e)) return cand;
    }
    // Fallback: none of the fixed offsets was free. Sweep the ice on a coarse grid and
    // take the nearest free slot that is unambiguously this entry's. The fallback before
    // that was "18 ft below the point and hope", which on the forecheck diagram dropped
    // F1's label straight onto an opposition player — a placer whose last resort ignores
    // collisions has no last resort, so there is no such branch here now.
    //
    // Ownership and the "keep the whole box on the ice" rule can be jointly unsatisfiable:
    // a long label anchored to a player in the corner has its Voronoi cell out past the
    // boards, so every legal box is nearer someone else. That is what the degraded branch
    // below is for — see the ⚠️ on it for how its objective used to be wrong.
    //
    // ⚠️ THE GRID SWEEP USED TO TEST ONLY THE STRAIGHT BOUNDS, so the rounded-corner rule
    // twelve lines above applied to the fixed offsets and not to the fallback: 13 of the
    // 79 labels that reach here were placed outside the dasher, which is the very defect
    // `inside` was written to stop. `ok` applies it to both paths now.
    let best = null, bestD = Infinity, nearD = Infinity;
    const free = [];
    for (let gx = minX + w / 2; gx <= maxX - w / 2; gx += 2) {
      for (let gy = -maxY + h / 2; gy <= maxY - h / 2; gy += 2) {
        const cand = { x: gx, y: gy, w, h };
        if (!ok(cand)) continue;
        const mine = Math.hypot(gx - e.x, gy - e.y) || 0.001;
        const other = Math.min(...entries.filter((o) => o !== e)
          .map((o) => Math.hypot(gx - o.x, gy - o.y)), Infinity);
        if (other > mine) {
          if (mine < bestD) { bestD = mine; best = cand; }
        } else {
          if (mine < nearD) nearD = mine;
          free.push({ cand, mine, ratio: other / mine });
        }
      }
    }
    if (best) return best;
    // ⚠️ THE DEGRADED BRANCH EXILED LABELS TO THE FAR BOARDS, and did it by construction.
    // It maximised `other / mine` over the whole sheet — and that ratio TENDS TO 1 AS
    // DISTANCE GROWS, because two anchors 10 ft apart are equidistant-ish from a point 150
    // ft away. So "most decisively its own anchor's" resolved to "as far away as possible":
    // a label for a player at (-94, 8) was drawn at (82, -38), 182 ft away in the other end
    // zone, on a leader line that crossed most of the rink. Three labels were placed ~19x
    // the median leader length this way.
    //
    // The objective was wrong, not just unbounded. In the `best` branch above, distance is
    // held down by a correctness guarantee — the label is nearer its own anchor than any
    // other, so the leader is confirmation. Here ownership has ALREADY been conceded, so
    // proximity is the only cue left tying label to player, and trading it away for a ratio
    // asymptote trades away the last thing the reader has. Hence: never further than
    // MAX_OFFSET, and never further than the nearest slot that exists at all.
    const limit = Math.max(MAX_OFFSET, nearD);
    let fall = null, fallR = -Infinity, fallD = Infinity;
    for (const f of free) {
      if (f.mine > limit) continue;
      // Tie-break by distance. Two entries on the SAME point — `blue-line` and
      // `centre-point` are both (25, 0) on the rink map — make the ratio exactly 1
      // everywhere, so without this the winner was whichever cell the sweep reached first,
      // i.e. the left edge of the ice. It put `centre-point` 10.7 ft from a point it could
      // have sat 0.8 ft from.
      if (f.ratio > fallR || (f.ratio === fallR && f.mine < fallD)) {
        fallR = f.ratio; fallD = f.mine; fall = f.cand;
      }
    }
    return fall;
  };

  return order.map((e) => {
    const w = e.text.length * CH, h = LH;
    // Strict first, then again without the leader-clearance rule. The old last resort was
    // "18 ft below the point and hope", which ignored collisions entirely; there is no
    // last resort that ignores collisions any more, because one is worse than none.
    const put = placeOne(e, w, h, true) ?? placeOne(e, w, h, false);
    if (!put) {
      throw new Error(
        `placeLabels: nowhere on the ice for "${e.text}" at (${e.x}, ${e.y}). ` +
        'Loud on purpose: a label that silently does not render is the defect this file ' +
        'has already shipped once.');
    }
    placed.push(put);
    const moved = Math.hypot(put.x - e.x, put.y - e.y) > LEADER_MIN;
    // ⚠️ A LEADER MUST STOP SHORT OF THE WORDS, NOT RUN INTO THEM.
    //
    // This previously ended the line at `py(put.y) + (put.y > e.y ? -1.2 : 1.2)`.
    // SVG text is anchored at its BASELINE, not its centre, and `py` inverts the
    // axis — so that fixed offset pushed the endpoint PAST the baseline, away from
    // the anchor, which is the opposite of stopping before the text. The endpoint
    // was also always `put.x`, the text's horizontal CENTRE, so a leader arriving
    // from the side crossed half the glyphs by construction.
    //
    // ⚠️ Measured over the 534 leaders in the built corpus before this change:
    // 386 EXITED the far side of their own label, 142 ended among the glyphs, and
    // SIX were clean. The owner reported it from a rendered page, naming three
    // labels on `centre-low-zone-collapse`; it was 99% of the corpus.
    //
    // A fixed vertical offset cannot be right for a leader arriving diagonally, so
    // the segment is clipped to the label's glyph box and ends where it enters.
    const clipT = (ax, ay, bx, by, X0, X1, Y0, Y1) => {
      const dx = bx - ax, dy = by - ay;
      let t0 = 0, t1 = 1;
      const P = [-dx, dx, -dy, dy], Q = [ax - X0, X1 - ax, ay - Y0, Y1 - ay];
      for (let i = 0; i < 4; i += 1) {
        if (P[i] === 0) { if (Q[i] < 0) return null; }
        else {
          const r = Q[i] / P[i];
          if (P[i] < 0) { if (r > t1) return null; if (r > t0) t0 = r; }
          else { if (r < t0) return null; if (r < t1) t1 = r; }
        }
      }
      return t0;
    };
    const ax = e.x, ay = py(e.y), bx = put.x, by = py(put.y);
    // ⚠️ THE LEADER STILL STARTS AT THE TOKEN'S CENTRE, AND THAT IS DELIBERATE.
    // A browser pass proposed starting it at the token EDGE, because 341 of 534 leaders
    // cross their own position letter on the way out. I implemented that and MEASURED it:
    // it costs every leader the glyph's ink radius, 3.875 units, and most leaders are
    // 3-8 units long. The owner's three went from 5.08 to 1.21; `takes the strong side`
    // went from 4.40 to 0.52; two leaders disappeared under the minimum-length guard.
    // ⚠️ It made the VERIFIED-GOOD case worse to fix a cosmetic fault at the other end.
    // Reverted. The right fix is to emit leaders BEFORE the glyphs so the token occludes
    // them, which costs no length -- but that means splitting this function's output, and
    // it is filed rather than done here.
    // The label half-width uses CLIP_ADV, not CH -- see the note at CLIP_ADV above.
    const cw = e.text.length * size * CLIP_ADV;
    const tEnter = clipT(ax, ay, bx, by,
      put.x - cw / 2 - LEADER_GAP, put.x + cw / 2 + LEADER_GAP,
      by - size * CAP_H - LEADER_GAP, by + size * DESC_H + LEADER_GAP);
    // tEnter === null: the line never reaches the box, so it already stops short.
    // tEnter <= 0: the anchor is inside the label's own box — draw nothing rather
    // than a zero-length or backwards line.
    const ex = tEnter === null ? bx : ax + (bx - ax) * tEnter;
    const ey = tEnter === null ? by : ay + (by - ay) * tEnter;
    const drawLeader = moved && (tEnter === null || tEnter > 0)
      && Math.hypot(ex - ax, ey - ay) > 0.5;
    const leader = drawLeader
      ? `<line x1="${ax.toFixed(2)}" y1="${ay.toFixed(2)}" x2="${ex.toFixed(2)}" y2="${ey.toFixed(2)}" ` +
        `stroke="${PALETTE.label}" stroke-width="0.18" stroke-dasharray="0.8 0.8"/>`
      : '';
    const marker = dot ? `<circle cx="${e.x}" cy="${py(e.y)}" r="${dot}" fill="${PALETTE.label}"/>` : '';
    return (
      marker + leader +
      `<text x="${put.x.toFixed(2)}" y="${py(put.y).toFixed(2)}" font-size="${size}" text-anchor="middle" ` +
      `fill="${PALETTE.label}" paint-order="stroke" stroke="#fff" ` +
      `stroke-width="${(size * LABEL_HALO).toFixed(2)}">${e.text}</text>`
    );
  });
}

/**
 * @param {{half?: boolean, labels?: boolean, width?: number}} opts
 *   half   — attacking half only, centre line to end boards
 *   labels — overlay the named-position vocabulary
 */
/**
 * THE ACCESSIBLE NAME, kept SHORT — and why that is a correctness question, not a style one.
 *
 * ⚠️ A browser renders an SVG's <title> as a HOVER TOOLTIP. Until 4 September 2026 this
 * corpus put the WHOLE CAPTION there: measured across all 167 built diagrams, the median
 * tooltip was 1,280 characters and the worst was 4,471. Hovering any diagram dumped a wall
 * of text over the page. The owner reported it as a readability defect and was right.
 *
 * ⚠️ BUT THE OBVIOUS FIX IS A TRAP, AND THE COMMENT BELOW `a11y` RECORDS WHY. The site emits
 * `<figcaption aria-hidden="true">`, so <title> is the ONLY route by which a screen-reader
 * user receives the caption. Merely truncating <title> would have deleted the teaching for
 * exactly the readers the caption was lengthened for.
 *
 * So the caption MOVES rather than shrinks: <title> becomes a short name, and <desc> — which
 * no browser shows on hover — carries the drawn description AND the caption. A screen reader
 * announces the name, then the full description. Nothing is lost; it is in the right slot.
 *
 * `title` on a spec overrides. Absent one, the caption's first sentence is used, which is the
 * author's own words rather than a generated summary: measured at 41-121 chars, median 110.
 */
export function shortTitle(spec) {
  if (spec && typeof spec.title === 'string' && spec.title.trim()) return spec.title.trim();
  const cap = String((spec && spec.caption) || '').replace(/\s+/g, ' ').trim();
  if (!cap) return '';
  const m = cap.match(/^(.{10,120}?[.!?])(?:\s|$)/);
  if (m) return m[1];
  if (cap.length <= 120) return cap;
  // ⚠️ NEVER TRUNCATE. The first version of this sliced to 117 and appended an ellipsis,
  // and `diagram-reviewer` measured the result: 97 of 167 titles ended in "…" and
  // SEVENTEEN OF THEM CUT A HEDGE MID-SENTENCE. The worst announced a rule, named two other
  // rulebooks, and stopped immediately before "the draw is not established here, so do not
  // assume it is the same place." An accessible NAME that ends mid-qualification is worse
  // than a blunt one: it is announced first and unconditionally, and it asserts the half it
  // kept. So where no short first sentence exists we fall back to the ID, which is a name by
  // construction and cannot cut anything in half. Set an explicit `title` to do better.
  return String((spec && spec.id) || '')
    .replace(/-/g, ' ')
    .replace(/^./, (c) => c.toUpperCase());
}

/** <desc> text: what is drawn, then the caption. Never rendered as a tooltip. */
export function longDesc(spec) {
  const d = String((spec && spec.describe) || '').trim();
  const c = String((spec && spec.caption) || '').trim();
  if (d && c) return `${d} ${c}`;
  return d || c;
}

export function rinkSvg(opts = {}) {
  const { half = false, labels = false, width = 900, ns = 'r', caption, describe } = opts;
  const { sheet: S, lines: L, faceoff: F } = RINK;
  // A diagram carries a one-line pointer to the notation, not a copy of it.
  //
  // The legend used to be stamped under every diagram. With one diagram that is
  // thorough; with forty it is forty copies of a definition that has already been
  // rewritten once wholesale — every one of them a place the notation can be left
  // stale. The key lives in exactly one document and the diagrams reference it,
  // which is the same ownership rule the corpus already applies to numbers.
  //
  // It is a footer rather than a caption because it must not reach the speech
  // transform: a listener being told "drill notation: see Reading the diagrams"
  // before every diagram learns nothing and loses the thread. Speech gets <title>.
  const foot = opts.footer ? 5 : 0;
  const vb = half
    ? `-2 ${-S.width / 2 - 2} ${S.length / 2 + 4} ${S.width + 4 + foot}`
    : `${-S.length / 2 - 2} ${-S.width / 2 - 2} ${S.length + 4} ${S.width + 4 + foot}`;
  const height = Math.round((width * (S.width + 4 + foot)) / (half ? S.length / 2 + 4 : S.length + 4));
  // The footer sits below the boards, i.e. outside the white ice rect, so on a dark
  // page it painted grey-on-near-black at 2.8:1. It carries its own white strip
  // rather than a theme-aware colour: the rink above it is white in both themes, so
  // matching that is the only treatment that cannot drift when the palette changes.
  const footer = opts.footer
    ? `<rect x="${-S.length / 2}" y="${S.width / 2 + 2.2}" width="${S.length}" height="${foot}" fill="#ffffff"/>` +
      `<text x="${half ? S.length / 2 : S.length / 2}" y="${S.width / 2 + 5.4}" font-size="2.5" ` +
      `text-anchor="end" fill="${PALETTE.label}">${opts.footer}</text>`
    : '';

  const boards =
    `<rect x="${-S.length / 2}" y="${py(S.width / 2)}" width="${S.length}" height="${S.width}" ` +
    `rx="${S.corner_radius}" fill="${PALETTE.ice}" stroke="${PALETTE.boards}" stroke-width="0.6"/>`;

  const blueLines = [1, -1]
    .map(
      (sx) =>
        `<line x1="${L.blue_line_x * sx}" y1="${py(S.width / 2)}" x2="${L.blue_line_x * sx}" y2="${py(-S.width / 2)}" stroke="${PALETTE.blue}" stroke-width="1"/>`
    )
    .join('\n    ');

  const centreLine = `<line x1="0" y1="${py(S.width / 2)}" x2="0" y2="${py(-S.width / 2)}" stroke="${PALETTE.red}" stroke-width="1"/>`;
  const centreCircle =
    `<circle cx="0" cy="0" r="${F.circle_radius}" fill="none" stroke="${PALETTE.blue}" stroke-width="0.35"/>` +
    `<circle cx="0" cy="0" r="1" fill="${PALETTE.blue}"/>`;

  const neutralDots = [1, -1]
    .flatMap((sx) => [F.dot_y, -F.dot_y].map((cy) =>
      `<circle cx="${F.neutral_dot_x * sx}" cy="${py(cy)}" r="1" fill="${PALETTE.red}"/>`))
    .join('\n    ');

  let overlay = '';
  if (labels) {
    const entries = [];
    for (const [name, p] of Object.entries(RINK.positions)) {
      if (name.startsWith('$')) continue;
      for (const side of (p.sided ? [1, -1] : [0])) {
        const x = p.x, y = p.sided ? p.y * side : p.y;
        if (half && x < -2) continue;
        entries.push({ text: p.sided ? `${name}:${side > 0 ? 'R' : 'L'}` : name, x, y });
      }
    }
    overlay = placeLabels(entries, { size: 2.4, dot: 0.8, half }).join('\n    ');
  }

  // Everything inside the ice is clipped to the boards, so a goal line drawn the
  // full width of the sheet stops where the corner curves in rather than running
  // out over the dasher. Computing each line's extent by hand would put the corner
  // radius in two places; this keeps it in one.
  const clip =
    `<clipPath id="ice-${ns}"><rect x="${-S.length / 2}" y="${py(S.width / 2)}" ` +
    `width="${S.length}" height="${S.width}" rx="${S.corner_radius}"/></clipPath>`;

  // THE ACCESSIBLE NAME. Same contract as `playSvg`'s `a11y` branch below, and it
  // exists for the same reason: `role="img"` with neither <title> nor <desc> tells a
  // screen reader to announce an image and then gives it nothing to announce.
  //
  // ⚠️ IT IS NOT COSMETIC HERE, BECAUSE THE FIGCAPTION IS DELIBERATELY HIDDEN. The
  // site emits `<figcaption aria-hidden="true">` on every diagram precisely because
  // the <title> is expected to carry the same words, so a missing <title> does not
  // degrade to the caption — it deletes it. The two bare rink maps shipped that way,
  // and they are the corpus's *foundational vocabulary* pictures: a non-sighted
  // reader met an unlabelled graphic and a caption hidden from them.
  //
  // `playSvg` injects its own pair after calling this, and never passes these, so
  // there is no path on which a play diagram gets two titles.
  const _t = shortTitle({ title: opts.title, id: opts.id, caption, describe });
  const _d = longDesc({ caption, describe });
  const a11y =
    (_t ? `<title>${esc(_t)}</title>` : '') +
    (_d ? `<desc>${esc(_d)}</desc>` : '');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${width}" height="${height}"
     font-family="-apple-system, Helvetica Neue, Arial, sans-serif" role="img">
    ${a11y}<defs>${clip}</defs>
    ${boards}
    <g clip-path="url(#ice-${ns})">
    ${centreLine}
    ${blueLines}
    ${centreCircle}
    ${neutralDots}
    ${endZone(1)}
    ${endZone(-1)}
    </g>
    ${overlay}
    ${footer}
</svg>`;
}

/**
 * Drill notation, from a published symbol key.
 *
 * SOURCES. There are two published keys and **they do not agree**. Both were
 * fetched and read; neither may be quoted from memory.
 *
 * (A) MOST OF THE LINE SYMBOLS COME FROM HERE — "International Drill Symbols", a one-page
 *     handout from Hockey Eastern Ontario's NCCP Development 1 coaching clinic.
 *       https://www.hockeyeasternontario.ca/media/ns2jrj0c/dev1_international_drill_symbols.pdf
 *       sha256 d0cfeca183c37dfcf34708a983bd0cb2b13cacff118656720bc41b817f5e49e7
 *       309,926 bytes, one page, retrieved 2026-07-30.
 *     The rendered page carries no logo, credit or date — but the *file* does:
 *     /Author (Brian Gillam), /CreationDate 2015-05-21, /Creator Microsoft Word
 *     2010. The title is live text typed in Word; the key beneath it is a single
 *     pasted, uncredited, cropped scan. Its origin is not recoverable.
 *
 * (B) THE PLAYER-GLYPH AXIS COMES FROM HERE, and it is the genuine
 *     "International Symbols" — IIHF Coach Development Program,
 *     Level I, Tactical (2002), section 21.1, IIHF-logo'd.
 *       https://www.hockeyeasternontario.ca/media/n4pf15hp/iihf_coachdev_off_tactics.pdf
 *       sha256 9b195d0325f74ccc2601b20ef009c77e44abd19c70dd09980babed21f5edbe01
 *       750,071 bytes, retrieved 2026-07-30.
 *
 * NEITHER KEY IS "THE BASE", and saying so in either direction is false.
 * DO NOT SUMMARISE THE SPLIT AS A COUNT — the legend's row list is edited, and a
 * count goes stale silently while a name does not. Read the rows in `legendSvg`.
 * `stop` takes **(B)'s** name — its legend row reads "Sudden stop", which is §21.1's
 * term — for a glyph **(A)** calls "Stopping"; the mark itself is the same in both,
 * and only the name diverges. `pressure` is a symbol only (A) publishes, and this
 * file no longer draws (A)'s one-bar version of it or gives it a legend row: a
 * pressure route ends in the same two bars as a sudden stop and is told apart by
 * where it finishes. `crossovers` is this corpus's adaptation of (A)'s glyph.
 * ⚠️ THIS SENTENCE WAS TRUE AT THE COMMIT BEFORE THIS ONE AND IS THE FIFTH
 * HALF-APPLIED REPAIR IN IT. It read "Five of the eight line symbols are common to
 * both. `stop` takes (A)'s name for a glyph (B) names differently." The legend went
 * from eight rows to twelve, backward skating was pulled out of the agreed set, and
 * the `stop` row was relabelled from (A)'s "Stopping" to (B)'s "Sudden stop" — so the
 * count was wrong twice over and the attribution was exactly REVERSED, in the file
 * `.claude/agents/diagram-reviewer.md` calls "the authority". THE PLAYER AXIS IS (A)'s — shape is the
 * position, per (A)'s `● ○ Forward / Player` and `▲ △ Defender / Player` rows.
 * ⚠️ This sentence read "The player axis is (B)'s" while the file rendered (A)'s, and
 * it is the SIXTH stale axis comment found here. An earlier version
 * of this header said (A) was what the file renders, and the reader-facing prose
 * said the base was (B); both were written honestly and both were wrong, which is
 * why the split is now enumerated symbol by symbol rather than summarised.
 *
 * DO NOT CALL THIS CORPUS'S NOTATION "INTERNATIONAL" IN READER-FACING TEXT.
 * A body of that name publishes a key of that name, and this is not it. (A)'s
 * title appears to be one coach's echo of (B)'s section heading, typed over a
 * scan of something else. The phrase "International Drill Symbols" has no
 * independent web footprint.
 *
 * WHERE (A) AND (B) DIVERGE — and the divergences land on the dangerous ones:
 *
 *   circle vs triangle   (B) encodes TEAM: circle offensive, triangle defensive.
 *                        (A) encodes POSITION: circle forward, triangle defender.
 *                        A reader trained on (B) reads every one of this corpus's
 *                        defencemen as "the defending team". This is the single
 *                        largest divergence and it is not cosmetic.
 *   line + two bars      (A) "Stopping".  (B) "SUDDEN STOP".  (B)'s STOP is `//`.
 *   line + one bar       (A) "Checking pressure". (B) HAS NO SUCH SYMBOL — and
 *                        the glyph is the left half of (B)'s SUDDEN STOP.
 *                        (B) gives BLOCKING (SCREENING) = line ending in `(` and
 *                        BODY CHECK = line ending in an S — one lobe bulging
 *                        forward, the next back, meeting on the line's end.
 *                        ⚠️ This line said BODY CHECK was `)`, the mirror of the
 *                        screen. It is not, and the file drew the mirror for two
 *                        revisions on the strength of this sentence. Traced off
 *                        page 32 at 1200 dpi: the screen is ONE arc, the check is
 *                        TWO opposed ones. Guessing symmetry is how three of the
 *                        four earlier attempts at this glyph went wrong.
 *   crossovers           (A) "Lateral crossovers", a bare picket of vertical bars.
 *                        (B) "BACKWARD CROSSOVER", a sawtooth zigzag.
 *
 * THEY AGREE ON: forward skating; skate-and-stickhandle (which (A) calls "skating
 * with control of the puck"); shoot; pass; pylon = X; and the drop pass. Those are
 * the symbols this file leans on hardest, which is the only reason the two keys can
 * be combined at all without a reader meeting two contradictory meanings for one
 * glyph.
 * ⚠️ NOT backward skating — (A) draws a tight wave, (B) a row of separate flattened
 * arches, and this line used to claim they agreed. That claim and the reason this
 * file now draws arches cannot both be true.
 * ⚠️ A previous edit spliced that warning INTO the middle of the list above, which
 * left `(= "skating with control of the puck")` dangling with no clause to attach to
 * and made the list unreadable. The warning now follows the list instead of
 * interrupting it.
 * ⚠️ NOTE A DISCREPANCY, unresolved: counting line symbols only, this list makes FIVE
 * shared — forward skating, skate-and-stickhandle, shoot, pass, drop pass — while
 * `reading_ice_hockey_diagrams.md` tells the reader "Four line symbols", omitting the
 * drop pass. One of the two is wrong and neither has been checked against a rendered
 * page for this purpose. Do not "fix" either by copying the other.
 *
 * CORPUS ADAPTATIONS — things this file draws that NEITHER key sanctions. They
 * are conventions, not transcriptions, and must be labelled as such wherever the
 * notation is explained to a reader:
 *   - fill for team: **OPEN own, SOLID opposition**. (A) prints a solid and an open
 *     variant of each player row without saying what the pair means, and has no
 *     opposition symbol at all, so both the reading and its direction are this
 *     corpus's. ⚠️ This line read "filled own, open opposition" — inverted, and the
 *     SEVENTH stale axis comment in this file. The code is the authority:
 *     `const fill = opp ? ink : '#fff'`, so the opposition takes the ink.
 *   - THE PUCK ITSELF. A small solid dot, `r = 1.1`, drawn by most specs — count them
 *     with the renderer's own guard (`DIAGRAMS.filter(d => d.puck).length`) rather than
 *     trusting a number here, because a number here goes stale. NEITHER key
 *     publishes a single-puck mark: (A) has only "Cluster of pucks", a scatter of dots,
 *     and (B) has none at all. It is a third the diameter of a player glyph and the same
 *     ink as the drop-puck marker, so it must stay small enough not to read as either.
 *     ⚠️ This was absent from this list, from the legend and from every reader-facing
 *     layer while the great majority of the diagrams drew it — the style guide's own test is "if a diagram uses
 *     a symbol, the key must define it", and for the puck no key did and neither did we.
 *   - `droppuck` drawn as a PLAIN line with the tick-and-dot and an arrowhead. BOTH
 *     keys begin the mark with a WAVE — the carrier skating with the puck up to the
 *     point of the drop, which is the part that says whose puck it was — and this file
 *     draws the drop without the carry. (A)'s row is transcribed above as "wave, a
 *     marker, then a straight line and arrowhead"; `droppuck` is `line: 'plain'`.
 *     ⚠️ This entry was MISSING, and its absence is why `reading_ice_hockey_diagrams.md`
 *     said four line symbols are shared rather than five: listing the drop pass among
 *     the agreed marks would have obliged the document to add that this file does not
 *     draw the agreed version. The missing adaptation and the miscount are one defect.
 *   - `pressure` drawn as TWO bars. (A)'s checking-pressure mark is one bar and (B) has
 *     no pressure symbol at all, so a pressure route here shares the sudden-stop mark
 *     and is told apart by where it finishes. Disclosed to the reader in
 *     "Reading the diagrams"; listed here because this is the list that governs.
 *   - `crossovers` drawn as bars ON a line WITH an arrowhead. (A)'s glyph is a
 *     free-standing picket with no line through it and no arrowhead. A picket
 *     with no direction is useless in a play diagram, so this file adds both —
 *     but that is an invention, and it was previously recorded as a transcription.
 *
 * WHAT STOOD HERE BEFORE WAS WRONG, and wrong in the way this project's whole
 * process exists to catch: it was written from memory, labelled honestly as
 * unverified ("nothing here has been verified against a governing body's published
 * symbol key"), and then used anyway. Three of the five symbols meant something
 * else in the published key, and two of the collisions invert a diagram's meaning:
 *
 *   was: carry = solid line with cross-ticks   key: cross-ticks are LATERAL CROSSOVERS
 *   was: shot  = solid line ending in a bar    key: a bar-ended line is CHECKING PRESSURE
 *   was: backward = dotted line                key: backward skating is a tight wave
 *   was: opposition = X                        key: X is a PYLON
 *
 * A forecheck diagram drawn in the old notation showed a shot where it meant
 * pressure, and marked every opponent as a traffic cone.
 *
 * The key, as published:
 *
 *   (the ten line symbols as (A) draws them. Which are identical in (B) is
 *    enumerated under WHERE (A) AND (B) DIVERGE below — do not restate it as a
 *    count here, because that is what went stale.)
 *
 *   Coach                              circled C
 *   Goaltender                         G
 *   Forward / Player                   circle, filled or open
 *   Defender / Player                  triangle, filled or open
 *   Position at end of the repetition  same shape, dashed outline
 *   Pylon                              X
 *   Cluster of pucks                   a scatter of dots
 *
 *   Forward skating                    straight line, arrowhead
 *   Backward skating                   tight wave
 *   Lateral crossovers                 a row of short bars across the line
 *   Pivoting                           tight wave ending in a hook, arrowhead reversed
 *   Skating with control of the puck   long, smooth wave, arrowhead
 *   Passing                            dashed line, arrowhead
 *   Shooting                           double line, single arrowhead
 *   Stopping                           straight line ending in two short bars
 *   Drop pass                          wave, a marker, then a straight line and arrowhead
 *   Checking pressure                  straight line ending in one bar
 *
 * PLAYERS — **shape is the POSITION, fill is the TEAM.** Read literally off key (A),
 * "International Drill Symbols", now on disk at `sources/heo_intl_drill_symbols.pdf`:
 *
 *     ● ○   Forward / Player          ▲ △   Defender / Player
 *     G     Goaltender (a bare letter, no enclosing shape)     X   Pylon
 *
 * This corpus assigns the pair: **own team OPEN, opposition SOLID**, monochrome, so
 * the encoding survives greyscale print, photocopying and colour blindness. The key
 * itself shows both variants of each row and does not say which team is which.
 *
 * ⚠️ THIS BLOCK HAS NOW BEEN WRONG THREE TIMES, AND THE LAST TWO WERE THE SAME AXIS
 * FLIPPED BACK AND FORTH. It once said shape carried own-team-versus-opposition
 * (wrong). It was then changed to shape-carries-POSSESSION on a reading of IIHF 21.1
 * — whose columns genuinely do read `TEAMS / OFFENSIVE / DEFENSIVE`, with the
 * position carried by a NUMERAL, 1 goaltender through 6 left wing. **That reading of
 * 21.1 is correct. It is also the only one of four published keys that works that
 * way**, and it produced the defect that exposed it: a player's shape changed
 * between diagrams, so a winger was a circle on the breakout and a triangle on the
 * forecheck. Shape follows the player now, not the situation.
 *
 * **Do not take any third-hand description of this on trust, this one included.**
 * Both keys are on disk and BOTH ARE IMAGE-ONLY — `pdftotext` on the HEO sheet
 * returns its title and nothing else, and the IIHF .txt loses every glyph. Render
 * the page. That is how three glyphs stayed wrong through every check ever run.
 *
 * Before you edit a spec: **`pos` DECIDES THE SHAPE.** `'F'` draws a circle, `'D'` a
 * triangle, `'G'` a bare letter and `'pylon'` an X. A comment in a diagram module
 * justifying a `pos: 'D'` as "a triangle, because he's a D" is CORRECT.
 * ⚠️ This paragraph said the exact opposite — "`pos` is inert except for `'pylon'`;
 * shape follows possession, never position" — for as long as the possession axis
 * lasted, and it survived the reversal because it sits twenty lines below the block
 * that describes the axis and reads as a separate instruction. An editor going
 * top-to-bottom met the correct paragraph first and this one last.
 *
 * Implemented below: skate, carry, pass, shot, backward, backxover, stop, stopmark,
 * suddenstop, pivot, droppuck, bodycheck, blocking, pressure, crossovers — the whole
 * of (B)'s line key plus (A)'s lateral crossovers. Add anything further from the
 * rendered page, not from memory and not from this comment.
 */

// Stroke weight as a fraction of arch HEIGHT for the backward-skating glyph. Shared by
// the legend and the diagrams, which render at different scales and so cannot share an
// absolute stroke width — only a proportion. Page 32 measures 0.18; 0.26 is the lightest
// that still renders at diagram scale on a full-rink picture.
const ARCH_WEIGHT = 0.26;

const NOTATION = {
  skate:      { line: 'plain', end: 'arrow' },
  // lambda short enough that a route shows several humps: at 9.0 a legend-length
  // sample showed one, and one hump does not read as a wave.
  carry:      { line: 'wave',  end: 'arrow', lambda: 5.0, amp: 1.05 },
  pass:       { line: 'plain', end: 'arrow', dash: '2.4 1.8' },
  shot:       { line: 'double', end: 'arrow' },
  // Backward skating is a run of separate C-CUTS in the key — see archPath. Not a
  // wave (that is skate-and-stickhandle) and not a connected coil.
  // No arrowhead: §21.1 draws both backward marks as a bare run of the pattern.
  // ⚠️ `stroke` is derived, not chosen, and it exists for this glyph alone. Whether the
  // overlapping arches stay open depends on stroke weight relative to arch HEIGHT:
  //     page 32   14px / 77px = 0.18
  //     legend    1.45 / 5.2  = 0.28   (the legend was already thinning its own stroke)
  //     diagrams  0.70 / 1.0  = 0.70   <- 4x the page, so every arch closed into a ring
  // Round 34 recorded "the stroke was too heavy for the arch radius, closing the
  // overlaps into a blob" as FIXED. **It was fixed on the legend side only**, so the key
  // showed open scallops while all eleven diagram routes drew a chain of near-closed
  // rings — the legend and the diagrams disagreeing about one symbol, which is the
  // defect this workstream exists to remove.
  // The fix is ONE ratio used by both, because the legend and a diagram render at
  // different scales and so cannot share an absolute width — only a proportion.
  backward:   { line: 'loops', end: 'none', lambda: 1.75, amp: 1.0, stroke: 1.0 * ARCH_WEIGHT },
  // The key's BACKWARD CROSSOVER: a zigzag, and a symbol this corpus never had.
  backxover:  { line: 'zigzag', end: 'none', lambda: 2.6, amp: 1.15 },
  stop:       { line: 'plain', end: 'bars2' },
  // `pressure` was a bar-ended line taken from the Hockey Eastern Ontario handout,
  // where it means "checking pressure". IIHF 21.1 has no pressure symbol — and a
  // bar-ended line IS its SUDDEN STOP, so the old glyph read as a player stopping
  // where the diagram meant a player closing. None of its twelve uses carries a
  // label, so the glyph was the only signal and the misread was unguarded.
  //
  // It is now forward skating, which is what the player is actually doing; the
  // destination and the caption carry the intent. The body-check hook was the other
  // candidate and is *wrong*, not merely imprecise: pressure and angling are legal
  // in every division, a body check is not, and eleven of the twelve uses are
  // penalty-kill or forecheck routes that a non-check reader also has to read.
  // TERMINATING, and that is the load-bearing part: a bar says arrive and contain,
  // an arrowhead says keep going through. The rule that follows from it is stated
  // normatively at THE ARRIVAL INVARIANT below and enforced by
  // `site/scripts/check-arrivals.mjs`; do not restate it, point at it.
  // ⚠️ This comment used to say "this file states that rule itself". It did not. All
  // four mentions of the invariant in this file were back-references to a rule no
  // file stated, and nothing enforced it — `check_geometry.py` reads `rink.json` and
  // never opens a spec. Retargeting this glyph to forward skating pointed nine
  // routes' arrowheads at a player, five of them within 2 ft, which is how the gap
  // was found rather than by anything catching it.
  // Two bars terminating a line is IIHF 21.1's SUDDEN STOP, which is a mark the key
  // actually contains and which means arrive-and-stop rather than continue-through.
  pressure:   { line: 'plain', end: 'bars2' },
  // The key's own symbols for the three things a bar-, hook- or curve-ended line
  // means there. None is used by a diagram yet; they are here so that the next
  // diagram that needs one takes it from the key rather than inventing it.
  // §21.1's SUDDEN STOP is a line ending in TWO perpendicular bars — read off the
  // rendered page at 1200 dpi, not off the extracted text, which loses every glyph.
  // A ONE-bar terminal is the Hockey Eastern Ontario checking-pressure mark and is
  // in no IIHF symbol, so it is not offered here at all.
  suddenstop: { line: 'plain', end: 'bars2' },
  bodycheck:  { line: 'plain', end: 'hook' },
  blocking:   { line: 'plain', end: 'curve' },
  // §21.1's STOP is a bare pair of slashes with NO line — a different mark from
  // SUDDEN STOP, which is the line ending in two bars above. The corpus had only
  // the second and called it "stopping", which is the Hockey Eastern Ontario name.
  stopmark:   { line: 'none',  end: 'slashes' },
  // PIVOT: a curve that turns back on itself, arrowhead reversed.
  pivot:      { line: 'pivot', end: 'arrow' },
  // DROPPING THE PUCK: a route with a tick partway along, then on to an arrowhead.
  droppuck:   { line: 'plain', end: 'arrow', dropTick: true },
  crossovers: { line: 'plain', end: 'arrow', bars: true },
};

/**
 * An arrowhead drawn in rink coordinates, pointing along (ux, uy).
 *
 * Sized to match the `ah` marker so hand-drawn and marker-drawn heads are the same
 * arrow: markerUnits defaults to strokeWidth, so markerWidth 4.5 at stroke 0.7 is
 * 3.15 user units long.
 */
function arrowHead(x, y, ux, uy, L = 3.15, W = 1.5) {
  const bx = x - ux * L, by = y - uy * L;
  return `<path d="M ${x.toFixed(2)} ${py(y).toFixed(2)} ` +
    `L ${(bx - uy * W).toFixed(2)} ${py(by + ux * W).toFixed(2)} ` +
    `L ${(bx + uy * W).toFixed(2)} ${py(by - ux * W).toFixed(2)} Z" fill="${PALETTE.boards}"/>`;
}

/**
 * A quadratic Bézier redrawn as a wave running along it.
 *
 * The key draws "skating with control of the puck" and "backward skating" as waves
 * that differ only in wavelength, so both come from here with different lambda.
 * Amplitude tapers to nothing at each end, so the route starts cleanly on the
 * player and finishes straight enough for the arrowhead to point where it means to.
 */
function wavePath(f, t, bow, lambda, amp, flat) {
  const dx = t.x - f.x, dy = t.y - f.y, len = Math.hypot(dx, dy) || 1;
  const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
  const my = (f.y + t.y) / 2 + (dx / len) * bow;
  const at = (k) => ({
    x: (1 - k) ** 2 * f.x + 2 * (1 - k) * k * mx + k * k * t.x,
    y: (1 - k) ** 2 * f.y + 2 * (1 - k) * k * my + k * k * t.y,
  });
  const N = Math.max(40, Math.round(len * 6));
  const pts = [];
  let prev = at(0), s = 0;
  for (let i = 0; i <= N; i++) {
    const c = at(i / N);
    s += Math.hypot(c.x - prev.x, c.y - prev.y);
    prev = c;
    pts.push({ k: i / N, c, s });
  }
  const total = s || 1;
  const out = pts.map(({ k, c, s: sl }) => {
    const a = at(Math.max(0, k - 0.01)), b = at(Math.min(1, k + 0.01));
    const tl = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const nx = -(b.y - a.y) / tl, ny = (b.x - a.x) / tl;
    // Zero for the last TAIL feet, not merely approaching zero: the arrowhead has
    // to sit on a straight run of line, or it meets the wave at an angle.
    // Taper is a FRACTION of the route, not an absolute distance. Fixed distances
    // ate almost all of a short route: on the legend's 10 ft sample the pattern
    // survived only in the first third and the reader learned the wrong glyph from
    // the one picture that defines it.
    const TAIL = Math.min(2.6, total * 0.16);
    // In flat mode the leading ramp is dropped (the key draws uniform amplitude) but a
    // short trailing run is kept: without it the arrowhead lands on the last crest and
    // reads as a malformed head rather than a head on a line.
    const taper = flat
      // Only a token straight run. The head now begins where the route ends, so it can
      // no longer land on curvature — and on page 32 the head's base sits directly on
      // the wave's descending limb with NO straight line between them (base x=926, last
      // wave pixel x=925). An earlier revision pushed this to 30% chasing a complaint
      // about the tip, which moved the glyph further from the key AND did not fix it.
      ? Math.max(0, Math.min(1, (total - sl - total * 0.12) / (total * 0.08)))
      : Math.max(0, Math.min(1, sl / (total * 0.10 + 0.3), (total - sl - TAIL) / (total * 0.10 + 0.4)));
    const off = amp * taper * Math.sin((sl / lambda) * 2 * Math.PI);
    return `${(c.x + nx * off).toFixed(2)} ${py(c.y + ny * off).toFixed(2)}`;
  });
  return 'M ' + out.join(' L ');
}

/**
 * A row of overlapping arches along the route — IIHF 21.1 "BACKWARD SKATING".
 *
 * NOT a wave, NOT a coil, and NOT a row of sideways C's. Read off the published page:
 * the mark is a run of **semicircular arches standing on the line**, each starting
 * before the last has finished, so they cross near the baseline and read as a chain.
 *
 * This glyph has now been wrong four times in this file — a tight wave (which is the
 * key's SKATE AND STICKHANDLE, so an IIHF-trained reader took every backward route for
 * a puck carrier), a prolate cycloid, sideways C-cuts, and sparse C-cuts. Each was
 * closer than the last and none was the mark. **If you change it, compare it against
 * `sources/iihf_coachdev_off_tactics.pdf` page 32 rendered at 600 dpi or better — the
 * extracted .txt contains none of the glyphs, only their names.**
 *
 * Each arch is its own subpath so the run never becomes one continuous curve, and the
 * pitch is deliberately shorter than the arch width so consecutive arches overlap.
 */
// Each arch sweeps PAST a semicircle, so its legs turn inward and dip below the line;
// adjacent legs then cross low, near the baseline, which is what the key shows. True
// semicircles overlapped by a quarter put the crossings high and made spikes between
// the arches instead of scallops.
// The key's humps are WIDER THAN TALL — a flattened arch, not a circular one. Drawn as
// an elliptical half-arc: rx is the half-span, ry the height. Circular arcs at this size
// came out either as spikes (semicircles overlapped a quarter) or as near-closed rings
// (a 232-degree sweep). The ellipse gives steep legs that cross cleanly near the line.
const ARCH_ASPECT = 1.30;    // rx / ry
const ARCH_PITCH  = 0.70;    // pitch as a fraction of span; < 1 makes the legs cross

function archPath(f, t, bow, lambda, amp, flat) {
  const dx = t.x - f.x, dy = t.y - f.y, len = Math.hypot(dx, dy) || 1;
  const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
  const my = (f.y + t.y) / 2 + (dx / len) * bow;
  const at = (k) => ({
    x: (1 - k) ** 2 * f.x + 2 * (1 - k) * k * mx + k * k * t.x,
    y: (1 - k) ** 2 * f.y + 2 * (1 - k) * k * my + k * k * t.y,
  });
  const N = 320, pts = [];
  let prev = at(0), acc = 0;
  for (let i = 0; i <= N; i++) {
    const c = at(i / N);
    acc += Math.hypot(c.x - prev.x, c.y - prev.y);
    prev = c;
    pts.push({ c, s: acc });
  }
  const total = acc || 1;
  const atS = (target) => {
    for (let i = 1; i < pts.length; i++) if (pts[i].s >= target) return pts[i].c;
    return pts[pts.length - 1].c;
  };
  const ry = amp, rx = amp * ARCH_ASPECT;
  const width = rx * 2;                // span of one flattened arch
  const pitch = width * ARCH_PITCH;    // overlap, so consecutive legs cross
  const inset = flat ? 0 : Math.min(0.8, total * 0.05);
  const usable = total - inset * 2;
  const n = Math.max(2, Math.round((usable - width) / pitch) + 1);
  const out = [];
  for (let i = 0; i < n; i++) {
    const s0 = inset + i * pitch;
    const s1 = Math.min(total - inset, s0 + width);
    const a = atS(s0), b = atS(s1);
    // Feet a touch below the route, so adjacent legs cross under the line rather than
    // meeting on it — that dip is what makes the run read as a chain and not as humps.
    // ⚠️ This was gated on `flat`, so the LEGEND's arches dipped and the DIAGRAMS' sat
    // on the line: the same symbol drawn two ways by one function. Ungated.
    const dip = ry * 0.22;
    // Consecutive humps face OPPOSITE ways: a backward skater cuts a C on one edge and
    // then the other, and the key draws it that way — which is what makes the run
    // interlock instead of repeating. Alternating the sweep flag flips the bulge.
    // (Two comments here used to say the opposite — that every hump sits the same side
    // on sweep flag 1, and that the large-arc flag is 1. The code alternates the sweep
    // and emits a large-arc flag of 0. Page 32 alternates too: four arcs below the line
    // and three above, offset by half a period.)
    const sweep = i % 2 === 0 ? 1 : 0;
    out.push(`M ${a.x.toFixed(2)} ${py(a.y - dip).toFixed(2)} ` +
             `A ${rx.toFixed(2)} ${ry.toFixed(2)} 0 0 ${sweep} ${b.x.toFixed(2)} ${py(b.y - dip).toFixed(2)}`);
  }
  return out.join(' ');
}

/**
 * A sharp zigzag along the route — IIHF 21.1 "BACKWARD CROSSOVER".
 *
 * A separate symbol in the key, and one this corpus never had: `crossovers` was an
 * adaptation of the HEO handout's cross-tick glyph, which the key uses for something
 * else. A triangle wave rather than a sine, so it cannot be mistaken at render size
 * for either the smooth wave or the loops.
 */
function zigzagPath(f, t, bow, lambda, amp, flat) {
  const dx = t.x - f.x, dy = t.y - f.y, len = Math.hypot(dx, dy) || 1;
  const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
  const my = (f.y + t.y) / 2 + (dx / len) * bow;
  const at = (k) => ({
    x: (1 - k) ** 2 * f.x + 2 * (1 - k) * k * mx + k * k * t.x,
    y: (1 - k) ** 2 * f.y + 2 * (1 - k) * k * my + k * k * t.y,
  });
  const N = Math.max(60, Math.round(len * 10));
  const pts = [];
  let prev = at(0), s = 0;
  for (let i = 0; i <= N; i++) {
    const c = at(i / N);
    s += Math.hypot(c.x - prev.x, c.y - prev.y);
    prev = c;
    pts.push({ k: i / N, c, s });
  }
  const total = s || 1;
  // triangle wave in [-1,1] with period lambda
  const tri = (u) => { const x = ((u % 1) + 1) % 1; return x < 0.5 ? 4 * x - 1 : 3 - 4 * x; };
  const out = pts.map(({ k, c, s: sl }) => {
    const a = at(Math.max(0, k - 0.01)), b = at(Math.min(1, k + 0.01));
    const tl = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const nx = -(b.y - a.y) / tl, ny = (b.x - a.x) / tl;
    const TAIL = Math.min(1.2, total * 0.07);
    const taper = flat ? 1 : Math.max(0, Math.min(1, sl / (total * 0.07 + 0.3), (total - sl - TAIL) / (total * 0.07 + 0.3)));
    const off = amp * taper * tri(sl / lambda);
    return `${(c.x + nx * off).toFixed(2)} ${py(c.y + ny * off).toFixed(2)}`;
  });
  return 'M ' + out.join(' L ');
}

/**
 * A row of short bars across the line — the key's "lateral crossovers".
 *
 * Spaced by distance rather than by count, so a short crossover run and a long one
 * carry the same pitch; a notation whose pitch varies with route length is not a
 * notation. Bars follow the drawn quadratic, not the chord — on a bowed route the
 * chord version drew them beside the line instead of across it.
 *
 * This renderer was originally "cross-ticks meaning skating with the puck", which
 * is not what the key says a row of bars means. The drawing was fine; the meaning
 * attached to it was invented.
 */
function ticks(f, t, bow = 0) {
  const dx = t.x - f.x, dy = t.y - f.y;
  const len = Math.hypot(dx, dy) || 1;
  const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
  const my = (f.y + t.y) / 2 + (dx / len) * bow;
  // Quadratic Bézier through the same control point playSvg draws with.
  const at = (k) => ({
    x: (1 - k) ** 2 * f.x + 2 * (1 - k) * k * mx + k * k * t.x,
    y: (1 - k) ** 2 * f.y + 2 * (1 - k) * k * my + k * k * t.y,
  });
  // Minimum FOUR bars, not two. At two this glyph is a line with two crossbars, which
  // is exactly IIHF 21.1's SUDDEN STOP — and both of the corpus's crossover routes are
  // short enough to hit the old minimum, so the only lateral-crossover pictures in the
  // corpus were drawing a different key's symbol. A picket reads as a picket.
  const n = Math.max(4, Math.min(8, Math.round(len / 4)));
  const out = [];
  for (let i = 1; i <= n; i++) {
    const k = i / (n + 1);
    const c = at(k), a = at(Math.max(0, k - 0.02)), b = at(Math.min(1, k + 0.02));
    const tx = b.x - a.x, ty = b.y - a.y, tl = Math.hypot(tx, ty) || 1;
    const nx = -ty / tl, ny = tx / tl;
    out.push(
      `<line x1="${(c.x + nx * 1.5).toFixed(2)}" y1="${py(c.y + ny * 1.5).toFixed(2)}" ` +
      `x2="${(c.x - nx * 1.5).toFixed(2)}" y2="${py(c.y - ny * 1.5).toFixed(2)}" ` +
      `stroke="${PALETTE.boards}" stroke-width="0.55"/>`
    );
  }
  return out.join('');
}

/**
 * Draw a play: players at named positions, routes between them in drill notation.
 *
 * A diagram source names positions in the corpus's own vocabulary —
 * `half-wall:right`, `behind-net` — never pixels and never feet. That is what makes
 * it writable by hand, reviewable as text, and unable to drift from the table.
 */
/**
 * THE ARRIVAL INVARIANT — the one normative statement. Everything else points here.
 * Enforced by `site/scripts/check-arrivals.mjs`, which imports these constants rather
 * than restating them. If this rule needs to change, change it HERE and only here.
 *
 * A route that finishes on or near an opposing player is a claim about CONTACT, not about
 * drawing. An arrowhead reads as continuing past the point the line ends at; the two-bar
 * terminal reads as arriving and stopping there. So, for a route owned by a SKATER
 * (`skate`, `carry`, `backxover` — the arrow-ended kinds; puck routes are out of scope,
 * because a shot ending at the goalie is what a shot IS):
 *
 *   (a) TANGENT — advisory. The extended terminal tangent must clear an opposing
 *       SKATER's anchor by more than ARRIVAL.glyph ft. Below that the drawn ray passes
 *       through the body.
 *   (b) ARROWHEAD — the hard rule; the build fails on it. If a route's tip finishes
 *       within ARRIVAL.noArrow ft of an opposing SKATER who lies AHEAD of the tip, it
 *       may not carry an arrowhead at all. End it in two bars, or stop it further short.
 *
 * Three scope conditions carry the correctness, and each was got wrong once:
 *
 *   AHEAD, not merely near. A backchecker's arrow pointing away from a trailing opponent
 *   is near him and not at him. The bare-distance form flagged three such routes and was
 *   wrong to — which is why the bare form is the wrong form.
 *
 *   SKATER, not goaltender, for the build failure. Every route that drives the net
 *   finishes near the goaltender by construction, so failing the build there would forbid
 *   drawing a net drive at all. He is reported as ADVISORY instead of dropped: he is the
 *   one target every book protects unconditionally (USA Hockey Rule 607 Charging (d),
 *   2025-29 — "A goalkeeper is NOT 'fair game' because they are outside the privileged area";
 *   IIHF 42.1 CHARGING carries the same RULE in different words, not the same sentence).
 *   Form (a) excludes
 *   him outright, because a directional test cannot discriminate on a player who stands
 *   where every offensive route already points.
 *
 *   ARROW-ENDED, not every route. A `pressure` route aimed at its target fails (a) by
 *   construction — that is what pressure IS — and terminating in bars is exactly what
 *   makes it safe, so applying either form to a bar-ended route would be unmeetable.
 *
 * ⚠️ WHAT THESE NUMBERS ARE NOT. They are drawing conventions derived from the renderer's
 * own glyph sizes — NOT rules of hockey. 9 ft is 2.9 glyph + 3.15 arrowhead + 2.9 glyph,
 * the distance at which the DRAWING collides, not the players. The books partition the
 * circle at the target's shoulder line and a glyph has no facing, so no rulebook distance
 * translates into this test. Never render one into a body-scale phrase for a reader;
 * "within a stick's reach" was tried and was wrong.
 *
 * ⚠️ FORM (a) HAS NO BOUND ON REACH, and this is a known limit rather than an oversight.
 * A tangent is a ray and a ray crosses the rink, so (a) will meet a distant anchor that no
 * reader would ever follow the line to. The checker therefore reports how far beyond the
 * tip each near-miss falls, and a bound is deliberately NOT invented: none of the three
 * prior statements carried one, and a threshold chosen to separate the cases already known
 * would be fitted to them, not derived. That is why (a) is advisory and (b) is not.
 *
 * ⚠️ WHOSE ROUTE IT IS DECIDES WHO THE OPPONENT IS. Routes carry no team field, so the
 * checker infers the owner from the player a route starts on. Measured: all 80 arrow-ended
 * routes begin EXACTLY on an anchor (0.00 ft), and the smallest next-nearest player is
 * 5.66 ft away (`faceoff-dzone-tie-up`'s D route), comfortably outside the 2.9 ft tolerance,
 * so no route can resolve the wrong way. 22 of those 80 are skated by the OPPOSITION (every
 * rush carrier, every forecheck retrieval), and for those the players at risk are the
 * READER'S OWN. A check without this notion measures a quarter of the corpus against the
 * wrong team in both directions.
 * ⚠️ That licence first read "the next-nearest player 8.9 ft away". 8.9 is the FOURTH
 * smallest, not the smallest. The conclusion survives and the arithmetic did not — which is
 * the failure forechecking_systems.mjs names in terms: "a guard whose arithmetic does not
 * check out is worse than none: the next editor 'corrects' the drawing to match it."
 *
 * ⚠️ STATED THREE INCOMPATIBLE WAYS BEFORE THIS, and enforced by none of them: a bare
 * distance here, a two-part scoped test in forechecking_systems.mjs, and a purely
 * directional form in the reader-facing notation document. Two MORE verbatim copies were
 * found afterwards, in faceoffs.mjs and defensive_zone_coverage.mjs — so the count was six,
 * not four, and the faceoffs.mjs copy stated a stronger, unqualified form of (a). A third
 * file, defending_the_rush.mjs, had promoted a measured ANGLE to an operative criterion,
 * which this invariant disclaims outright. All now point here. `check_geometry.py` reads
 * `rink.json` against the glossary and never opens a spec.
 *
 * What enforcement found, measured on the curve actually drawn:
 *
 *   ONE hard (b) failure — `centre-backcheck-middle-lane`. The opposition middle-lane
 *   driver's arrowhead finished 8.94 ft from the reader's own centre, who lay in its forward
 *   half-plane. The spec's own comment three lines above the route forbids exactly that. Its
 *   tip is now 10.0 ft clear. (On that bearing the marks did not in fact collide — the
 *   tangent ran 71 degrees off him. It was a real threshold violation, not a picture of a
 *   check, and the spec now says so precisely.)
 *
 *   THREE goaltender advisories — `forecheck-212`, `nz-1-2-2-containment`, `entry-wide`,
 *   arrowheads finishing 7.8-8.6 ft from a goaltender. Rendered and inspected: none reads as
 *   a skater going through him. The first two finish BEHIND the goal line with the frame
 *   between tip and goalie; the third crosses the top of the crease to the far post.
 *
 *   FOUR (a) advisories: `nz-1-2-2-trap` at 0.91 ft — the tightest tangent in the corpus —
 *   and `faceoff-dzone-tie-up` ×2 at 2.32 and 2.68 ft. Plus `dz-walk-down-man` at 2.06 ft,
 *   28 ft beyond the tip, which is what an unbounded ray does.
 *
 *   THREE backchecks correctly NOT flagged (`rush-3-on-2-default`, `rush-backcheck-lanes`
 *   ×2), where the opponent trails the tip and the arrow points away from him.
 *
 * ⚠️ `faceoff-dzone-tie-up` IS NOT A DEFECT, and this record said it was. It read: "that
 * spec's comment measures its terminal clearance to the PUCK and never to the opposing
 * centre ... the author checked the constraint, against the wrong object." **The puck is the
 * right object.** Both routes are two players converging on a loose puck at a draw: the W
 * route passes 1.53 ft from the faceoff dot, the D route 0.61 ft, both stop 10 and 12.6 ft
 * short of the opposing centre, and the reader's own centre stands between the arrowheads
 * and him. It is the declared false-positive class. Telling the next editor that a correct
 * diagram was authored carelessly is the exact accident this checker's header records itself
 * nearly causing with `forecheck-212-stacked`.
 *
 * ⚠️ AND THE CHECK MEASURED THE WRONG LINE. Its first version took the terminal tangent as
 * `to - from` — the CHORD. Routes are quadratic Beziers and the tangent at k=1 is
 * `to - control`; 46 of the 80 are bowed, diverging by up to 59 degrees. The two clearances
 * this record once singled out as the tightest in the corpus, 0.54 ft in `forecheck-212` and
 * 0.83 ft in `nz-1-2-2-containment`, were artefacts: on the drawn curve they are 5.03 and
 * 3.85 ft and clear the glyph. The genuinely tightest, `nz-1-2-2-trap`, was UNDER-reported at
 * 2.02 against a true 0.91. No hard verdict changed, so this was never a safety emergency —
 * it was an evidence emergency, because those numbers had become the invariant's case
 * history. Third instrument error in three rounds; each was found by someone re-deriving the
 * measurement rather than re-reading the output.
 *
 * ⚠️ A GAP NEITHER FORM COVERS. (a) excludes the goaltender outright and (b) only fires
 * inside 9 ft, so an arrowhead stopping 9.5 ft short and pointing DEAD at a goaltender is
 * reported by nothing at all. Nothing does that today — the nearest is
 * `winger-offensive-zone-patches` at 10.05 ft with a 9.71 ft miss — but for the one target
 * the books protect unconditionally, "reported by nothing" belongs on the record.
 */
export const ARRIVAL = { glyph: 2.9, noArrow: 9.0 };

/**
 * The two arrowhead marker sizes, and how much route each one eats.
 *
 * `markerUnits` defaults to `strokeWidth`, so a marker's drawn size is
 * `markerWidth x stroke`, and `refX = 8.5` of a 0..10 viewBox puts the tip 85% of the
 * way along it. The head therefore reaches back from the tip by
 * `markerWidth * stroke * 0.85` feet — 2.68 ft at the full size on a 0.7 stroke.
 * That number is not decoration: it is subtracted from every dashed route's visible
 * run, and it is most of why two of them had no dash left to show.
 */
export const AH = { full: 4.5, short: 2.25, refFrac: 0.85 };
const headLen = (mw, stroke) => mw * stroke * AH.refFrac;

/**
 * Is (x, y) under the OPAQUE footprint of a player glyph?
 *
 * Routes are painted before players, and every glyph body is opaque — an own player is
 * `fill="#fff"`, an opponent `fill="#1b1c1e"` — over a white halo ring wider than the
 * body's own outline. So a route that starts on a player's anchor spends its first few
 * feet drawn and then buried. That is fine for a solid line and NOT fine for a dashed
 * one: see `dashoffset` in the route builder below.
 *
 * ⚠️ THESE NUMBERS ARE READ OFF THE GLYPH BRANCHES IN THIS SAME FUNCTION and must move
 * with them. They are NOT `ARRIVAL.glyph`: that is 2.9, the circle's radius, and the
 * ink actually reaches 3.875 because the halo is a 1.95-wide stroke centred on r = 2.9.
 * A brief that measured this defect used 2.9 + 0.6 = 3.5 — the 0.6 is the halo's visible
 * ring OUTSIDE the body outline, not its outer edge — and so under-counted every route.
 */
const GLYPH_INK = {
  forward: 2.9 + 1.95 / 2,        // circle r 2.9, halo stroke 1.95  -> 3.875
  triangleR: 3.6,                 // circumradius; halo stroke 2.0   -> inflate by 1.0
  triangleHalo: 1.0,
};
function glyphCovers(g, x, y) {
  const dx = x - g.x, dy = y - g.y;
  // A goaltender is a bare letter and a pylon two thin strokes: neither has a halo and
  // neither fills. Treated as covering nothing, which is what they visibly do.
  if (g.pos === 'G' || g.pos === 'pylon') return false;
  if (g.pos !== 'D') return Math.hypot(dx, dy) <= GLYPH_INK.forward;
  // The triangle exactly as the D branch draws it: apex toward +y, centroid on the
  // anchor, inflated by the halo's half-stroke.
  const R = GLYPH_INK.triangleR, hh = R * 1.5, half = R * 0.866;
  const V = [[0, R], [half, -(hh - R)], [-half, -(hh - R)]];
  let inside = true, near = Infinity;
  for (let i = 0; i < 3; i++) {
    const a = V[i], b = V[(i + 1) % 3];
    if ((b[0] - a[0]) * (dy - a[1]) - (b[1] - a[1]) * (dx - a[0]) > 0) inside = false;
    const ex = b[0] - a[0], ey = b[1] - a[1];
    const k = Math.max(0, Math.min(1, ((dx - a[0]) * ex + (dy - a[1]) * ey) / (ex * ex + ey * ey)));
    near = Math.min(near, Math.hypot(dx - (a[0] + ex * k), dy - (a[1] + ey * k)));
  }
  return inside || near <= GLYPH_INK.triangleHalo;
}

export function playSvg(spec, opts = {}) {
  const ns = uid(spec.id ?? spec.caption ?? JSON.stringify([spec.players, spec.routes]));
  // WHAT THIS DEPARTS FROM, AND WHY. The IIHF key puts a NUMERAL inside the glyph
  // to name the position: 1 goaltender, 2 right defense, 3 left defense, 4 right
  // wing, 5 centre, 6 left wing. This corpus cannot use them. Its most emphatic
  // section states that F1, F2 and F3 are roles set by order of arrival and *not*
  // people — "F1 is not 'the centre'" — and it spends fifty lines killing exactly
  // the inference an IIHF numeral would reinstate. Writing 5 where the section says
  // F1 would author a position assignment the prose refuses to make, which the
  // corpus forbids outright. So the glyph carries the section's own label instead.
  // That is a departure, it is deliberate, and it is documented for the reader in
  // "Reading the diagrams" rather than left for them to trip over.
  //
  // SHAPE carries the POSITION. FILL carries the TEAM.
  //
  //   circle    a forward        open (no fill)   the reader's own team
  //   triangle  a defenceman     solid            the opposition
  //   G         goaltender, a bare letter with no enclosing shape
  //   X         a pylon — never a player
  //
  // SOURCE: "International Drill Symbols", the Hockey Eastern Ontario NCCP
  // Development 1 handout — `sources/heo_intl_drill_symbols.pdf`, on disk and
  // sha256-verified. Its rows read literally `● ○  Forward / Player` and
  // `▲ △  Defender / Player`, so shape is the position and the filled/open pair in
  // each row is the team.
  //
  // ⚠️ THIS AXIS HAS NOW BEEN WRONG TWICE, IN OPPOSITE DIRECTIONS, AND THE SECOND
  // TIME WAS MINE. It was briefly changed to shape-carries-POSSESSION on a reading
  // of IIHF 21.1, whose columns really do read TEAMS / OFFENSIVE / DEFENSIVE with
  // circles in one and triangles in the other and the POSITION carried by a numeral
  // (1 goaltender … 6 left wing). That reading of 21.1 is correct — and 21.1 is the
  // only one of four published keys that does it that way. It also produced the
  // defect that exposed it: **a player's shape changed between diagrams**, so a
  // winger was a circle in the breakout picture and a triangle in the forecheck
  // picture. Shape now follows the player, not the situation.
  //
  // ⚠️ AND THE STALE COMMENTS OUTLIVE THE CODE. A comment block describing the
  // possession axis stood immediately above this one — inside this same function —
  // for five revisions after the renderer stopped using it, and it was the FIFTH such
  // comment found in this file. Round 34 recorded four and said "all corrected"; it
  // was wrong, and so was the sweep that followed it. A future editor acting on any
  // of them flips every glyph in the corpus. If you find a sixth, delete it rather
  // than adding a warning beside it — a warning is what let this one survive.
  //
  // The other keys, for the record: USA Hockey's 12U Practice Plan Manual legend
  // defines NO player symbols at all; Weiss Tech Hockey draws both teams as circles
  // and carries the team in the fill. Of the keys that encode position in shape,
  // the one this corpus cites does it this way.
  //
  // `spec.attacking` no longer exists and nothing should reintroduce it: it was
  // added only to choose circle vs triangle, and possession is carried by the puck
  // glyph and the caption.
  // TEXT SIZE COMPENSATION FOR FULL-SHEET DIAGRAMS.
  // A full rink holds twice the ice in the same column, so at any width every
  // dimension in it renders at half the size of a half-rink picture — 35 of the 109
  // diagrams, measured at 4.5-5.5 px per foot against the 73 at 9.0. `global.css`
  // already refuses to shrink the GEOMETRY to fit, and it is right to: a glyph's
  // 2.9 ft radius is a real dimension, quoted by the arrival rule that decides
  // whether a route may carry an arrowhead.
  //
  // **A label's font size asserts nothing about the ice.** So the type scales and
  // the geometry does not. Player letters are deliberately NOT scaled — they sit
  // inside a glyph and would overflow it.
  const TXT = (spec.half ?? opts.half ?? true) ? 1 : 1.7;

  const base = rinkSvg({ half: opts.half ?? true, width: opts.width ?? 820, ns,
                         footer: opts.footer ?? spec.footer });
  const P = PALETTE;

  // TWO ARROWHEADS, THE SECOND ONE HALF-SIZE. See SHORT-ROUTE ARROWHEAD in the route
  // builder for when the small one is used and why the alternative was rejected.
  // Both are the same triangle; only `markerWidth`/`markerHeight` differ, so there is
  // one shape in this file and no second mark to keep in step with the key.
  // Built AFTER the routes, because the second marker is emitted only if a route asked
  // for it — two of 112 diagrams do. An unused <marker> in the other 110 is inlined into
  // every page that carries them and is one more thing a reader has to account for.
  let usesShortHead = false;
  const arrowMarker = (id, w) =>
    `<marker id="${id}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="${w}" markerHeight="${w}" orient="auto-start-reverse">` +
    `<path d="M 0 0 L 10 5 L 0 10 z" fill="${P.boards}"/></marker>`;
  const defsOut = () =>
    `<defs>` + arrowMarker(`ah-${ns}`, AH.full) +
    (usesShortHead ? arrowMarker(`ah-short-${ns}`, AH.short) : '') +
    `</defs>`;

  // Sample points along each route, so labels can be kept off the lines as well as
  // off the players. Without this a label lands on an arrowhead and the reader
  // cannot tell which of two converging arrows the words belong to.
  const routeReserve = [];

  // Shaded regions — "the slot", "the high slot", the trapezoid, a coverage box.
  //
  // A region is the corpus's own vocabulary made visible, and the glossary defines
  // several of them in words that are already geometry ("from the level of the
  // faceoff dots up to the top of the circles"). So a region is a polygon of named
  // positions, exactly like a route, and it is the owning document that decides
  // where its corners are. Drawn beneath everything else, and never with a stroke
  // heavy enough to be mistaken for a painted line on the ice — a reader must not
  // come away thinking the slot is marked out on a real rink. It is not.
  // Zone labels are drawn at their polygon's centroid, independently of the label
  // placer — so the placer never knew they were there. At 3.2 ft they rarely clashed;
  // scaled up for full-sheet diagrams they collide, e.g. "owns the pass" landing on
  // "the passing lane". Their boxes are collected here and reserved below.
  const zoneReserve = [];
  const zones = (spec.zones ?? []).map((z) => {
    const pts = z.points.map(loc).map((q) => `${q.x.toFixed(2)},${py(q.y).toFixed(2)}`).join(' ');
    const label = z.label
      ? (() => {
          const c = z.points.map(loc).reduce((a, q) => ({ x: a.x + q.x / z.points.length, y: a.y + q.y / z.points.length }), { x: 0, y: 0 });
          const zs = 3.2 * TXT;
          zoneReserve.push({ x: c.x, y: c.y, w: z.label.length * zs * 0.56, h: zs * 1.4 });
          return `<text x="${c.x.toFixed(2)}" y="${py(c.y).toFixed(2)}" font-size="${zs.toFixed(2)}" ` +
                 `text-anchor="middle" fill="${P.home}" font-weight="700" ` +
                 `paint-order="stroke" stroke="#fff" ` +
                 `stroke-width="${(zs * LABEL_HALO).toFixed(2)}">${esc(z.label)}</text>`;
        })()
      : '';
    // `danger: true` paints the region as a warning rather than a target. One fill
    // meant "stand here" in one diagram and "never move the puck through here" in
    // another, in the same document, in identical blue — a notation with two
    // opposite meanings is worse than none.
    const fill = z.fill ?? (z.danger ? 'rgba(200,16,46,0.13)' : 'rgba(15,90,143,0.14)');
    const strk = z.stroke ?? (z.danger ? 'rgba(200,16,46,0.5)' : 'rgba(15,90,143,0.45)');
    return `<polygon points="${pts}" fill="${fill}" ` +
           `stroke="${strk}" stroke-width="0.35" ` +
           `stroke-dasharray="1.6 1.2"/>` + label;
  }).join('\n    ');

  // Resolved player anchors, for the dash-phase correction below. Same `loc` the
  // glyphs themselves are drawn from, so the two cannot drift.
  const occluders = (spec.players ?? []).map((pl) => ({ pos: pl.pos, ...loc(pl.at) }));

  const routes = (spec.routes ?? []).map((r, i) => {
    const f = loc(r.from), t = loc(r.to);
    const n = NOTATION[r.kind] ?? NOTATION.skate;
    const bow = r.bow ?? 0;
    // Perpendicular offset for the control point, so a bowed route curves sensibly.
    const dx = t.x - f.x, dy = t.y - f.y, len = Math.hypot(dx, dy) || 1;
    const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
    const my = (f.y + t.y) / 2 + (dx / len) * bow;
    const at = (k) => ({
      x: (1 - k) ** 2 * f.x + 2 * (1 - k) * k * mx + k * k * t.x,
      y: (1 - k) ** 2 * f.y + 2 * (1 - k) * k * my + k * k * t.y,
    });
    for (let s = 0; s <= 1.0001; s += 0.1) {
      const c = at(s);
      routeReserve.push({ x: c.x, y: c.y, w: 5, h: 5 });
    }

    const q = `M ${f.x} ${py(f.y)} Q ${mx} ${py(my)} ${t.x} ${py(t.y)}`;
    const d = n.line === 'wave'   ? wavePath(f, t, bow, n.lambda, n.amp)
            : n.line === 'loops'  ? archPath(f, t, bow, n.lambda, n.amp)
            : n.line === 'zigzag' ? zigzagPath(f, t, bow, n.lambda, n.amp)
            : q;

    // The terminal tangent, so end marks sit square across the route.
    const tanx = t.x - mx, tany = t.y - my, tanl = Math.hypot(tanx, tany) || 1;
    const ux = tanx / tanl, uy = tany / tanl;      // along travel
    const px_ = -uy, py_ = ux;                      // across travel

    let line;
    if (n.line === 'double') {
      // Shooting: two parallel lines converging on one arrowhead. Drawn as two
      // offset quadratics stopped short of the tip, plus a hand-drawn head — a
      // marker on each would give a shot two arrowheads.
      const o = 0.62, back = 2.6;
      const tipx = t.x, tipy = t.y;
      const ex = t.x - ux * back, ey = t.y - uy * back;
      const leg = (s) =>
        `<path d="M ${(f.x + px_ * o * s).toFixed(2)} ${py(f.y + py_ * o * s).toFixed(2)} ` +
        `Q ${(mx + px_ * o * s).toFixed(2)} ${py(my + py_ * o * s).toFixed(2)} ` +
        `${(ex + px_ * o * s).toFixed(2)} ${py(ey + py_ * o * s).toFixed(2)}" ` +
        `fill="none" stroke="${P.boards}" stroke-width="0.55"/>`;
      const head =
        `<path d="M ${tipx.toFixed(2)} ${py(tipy).toFixed(2)} ` +
        `L ${(ex + px_ * 1.9).toFixed(2)} ${py(ey + py_ * 1.9).toFixed(2)} ` +
        `L ${(ex - px_ * 1.9).toFixed(2)} ${py(ey - py_ * 1.9).toFixed(2)} Z" fill="${P.boards}"/>`;
      line = leg(1) + leg(-1) + head;
    } else {
      // A wave is emitted as a polyline, and `marker-end` orients itself off the
      // final segment — which is a fraction of a foot long and still carries the
      // residual slope of the wave. The head came out visibly askew from the line
      // it terminates. Draw it by hand along the *base curve's* terminal tangent,
      // which is the direction the route actually finishes in.
      const CURVED = n.line === 'wave' || n.line === 'loops' || n.line === 'zigzag';
      const useMarker = n.end === 'arrow' && !CURVED;
      // DASH PHASE IS MEASURED FROM THE PATH START, WHICH IS USUALLY BURIED.
      //
      // 51 of the corpus's 59 `pass` routes begin under a player's glyph — 42 of them
      // exactly on the anchor — and that glyph is opaque out to 3.875 ft. The dash pattern
      // still starts counting at the anchor, so up to a whole cycle of it is spent
      // under the glyph and the reader gets whatever phase is left. On a short pass that
      // is a single stub of line ENDING FLUSH AGAINST THE ARROWHEAD — `pp-overload`'s
      // second pass showed 1.44 ft of it and `support-distance-range` 1.81 ft, both fused
      // to the head so that what rendered read as one malformed arrow rather than as a
      // dashed passing route. In `support-distance-range`, whose `describe` promises "a
      // short dashed passing route", the arrowhead then points into the receiver's glyph
      // with nothing behind it — which is a SKATER'S ARRIVAL, a different symbol.
      //
      // Offsetting the pattern so the first dash begins where the line emerges costs no
      // geometry at all. ⚠️ AND THAT IS THE WHOLE POINT: the fix proposed for this defect
      // was to TRIM the drawn route back to the glyph edge, splitting the quadratic with
      // de Casteljau. That would have changed `len`, `mx`/`my`, `barHalf`, the `double`
      // branch and the badge parameter for no gain — the trimmed ink is invisible either
      // way, so the *only* thing trimming changes is the phase. It also credited itself
      // with recovering the buried 3.875 ft as new visible line, which it cannot: the
      // visible remainder is `arc − glyph − arrowhead` whether the ink is drawn or not.
      //
      // WHAT THIS DOES NOT FIX, stated because a phase correction looks like a cure: IT
      // ADDS NO LENGTH. Visible line is `arc − glyph − arrowhead`, and where that is under
      // one 2.4 ft dash the route draws a single unbroken segment flush against both the
      // glyph and the head — which is the `skate` mark, a different symbol. Two routes are
      // in that state and cannot be got out of it by any phase: `pp-overload` route 1
      // (1.77 ft clear, its two players 13.76 ft apart) and `support-distance-range`
      // route 0 (2.13 ft clear; C and S are 12.21 ft apart, which leaves 4.45 ft of ice
      // between the two glyphs before the head takes 2.68 of it). Those are a geometry
      // problem, not a rendering one — ⚠️ AND THE PARAGRAPH ABOVE STOPPED HERE, WHICH LEFT
      // TWO DIAGRAMS DRAWING THE WRONG SYMBOL WITH A NOTE EXPLAINING WHY. See SHORT-ROUTE
      // ARROWHEAD immediately below for what is done about it now.
      // A finer dash pitch would reach them and is rejected: 2.4/1.8 is already 9/6.75 px
      // on a 375 px phone, and halving it to rescue two routes costs legibility on 59.
      const cycleOf = (dash) => dash.split(/[\s,]+/).reduce((a, b) => a + Number(b), 0);
      const firstDash = n.dash ? Number(n.dash.split(/[\s,]+/)[0]) : 0;
      const sw = n.stroke ?? 0.7;
      let dashOff = 0, arcLen = 0, sOut = 0;
      if (n.dash) {
        const cycle = cycleOf(n.dash);
        // Step ~0.025 ft even on the 127 ft `offside-faceoff-location` pass. At a fixed
        // sample count the step grows with the route and the phase lands up to a third
        // of a foot late on the long ones, which is visible at 9 px per foot.
        //
        // The walk now runs to the end rather than breaking at emergence, because the
        // arc length is needed too and this is the only place it is measured. `len` is
        // the CHORD; on a bowed route it is short of the arc by several feet, and using
        // it here would have under-counted exactly the routes most at risk.
        const N = Math.max(400, Math.round(len * 40));
        let s = 0, prev = at(0), found = !occluders.some((g) => glyphCovers(g, f.x, f.y));
        for (let j = 1; j <= N; j++) {
          const c = at(j / N);
          s += Math.hypot(c.x - prev.x, c.y - prev.y);
          prev = c;
          if (!found && !occluders.some((g) => glyphCovers(g, c.x, c.y))) {
            found = true;
            sOut = s;
            dashOff = (cycle - (s % cycle)) % cycle;
          }
        }
        arcLen = s;
      }

      // SHORT-ROUTE ARROWHEAD — a bounded exception, and the only one.
      //
      // Visible line is `arc − glyph − arrowhead`. Where that falls under ONE DASH the
      // route draws a single unbroken segment fused to its head, which is not a degraded
      // pass: it is `skate`, a different symbol that the same key publishes. On
      // `support-distance-range` it reads as the support player skating at the carrier,
      // which is the opposite of what that document teaches. Two routes are in that
      // state — `pp-overload` route 1 (1.77 ft clear) and `support-distance-range`
      // route 0 (2.13 ft) — and nothing about phase reaches them.
      //
      // The head is the thing that is shortened, NOT the dash pitch, and the choice was
      // made by rendering both and looking at real device pixels rather than at a scaled
      // vector:
      //
      //   compressed pitch   two dashes at ~2 px each. At a 6x vector zoom it looked
      //                      convincing; magnified from the pixels a phone actually
      //                      draws, it is two specks beside an arrowhead, and one of
      //                      them fuses to the head's corner. It also contradicts the
      //                      rule recorded at `ticks` — "a notation whose pitch varies
      //                      with route length is not a notation" — which this file
      //                      adopted deliberately and which still holds.
      //   half-size head     recovers 1.34 ft and lands the two routes at 3.11 and
      //                      3.47 ft: one full-pitch dash, a clear gap, then a small
      //                      head. That is the SAME mark as `off-wing-open-to-the-ice`
      //                      and `winger-dz-reverse` at 3.16 ft, which an independent
      //                      blind reading took correctly as passes. The pitch is
      //                      untouched, so no second dash notation enters the corpus.
      //
      // ⚠️ Scaling an END MARK with the route it terminates is already this file's
      // practice — see the `bars2` branch, which does it for the same reason and says so.
      // Scaling a repeating pattern's pitch is not. The distinction is the whole basis
      // for choosing this one, so do not "simplify" the two into one rule.
      //
      // The failure modes are also asymmetric, which decides it if the visual does not:
      // a solid line with an arrowhead IS another published symbol, so the status quo is
      // WRONG; a dashed line with a small head is not any published symbol, so a head
      // that under-reads is DEGRADED. Prefer degraded.
      //
      // ⚠️ IT IS A THRESHOLD, NOT A GUARANTEE. It fires below one dash and shortens by a
      // fixed amount; a route with under ~1.1 ft clear would still draw solid, and there
      // is no such route today. It is deliberately not a function of length — that would
      // be the pitch objection again, wearing an arrowhead.
      const shortHead =
        !!n.dash && useMarker &&
        arcLen - sOut - headLen(AH.full, sw) < firstDash &&
        arcLen - sOut - headLen(AH.short, sw) >= firstDash;
      if (shortHead) usesShortHead = true;
      line =
        `<path d="${d}" fill="none" stroke="${P.boards}" stroke-width="${n.stroke ?? 0.7}"` +
        (n.dash ? ` stroke-dasharray="${n.dash}"` : '') +
        (dashOff > 0.005 ? ` stroke-dashoffset="${dashOff.toFixed(2)}"` : '') +
        (useMarker ? ` marker-end="url(#ah${shortHead ? '-short' : ''}-${ns})"` : '') +
        `/>`;
      if (n.end === 'arrow' && CURVED) line += arrowHead(t.x, t.y, ux, uy);
    }

    // Stopping and checking pressure BOTH end in two short bars here — the one-bar
    // terminal is not offered, so the two are told apart by where the route finishes.
    // (This read "checking pressure in one", describing a glyph `pressure` has not
    // drawn since it became `end: 'bars2'`.) Both are the
    // key's own end marks; neither is an arrowhead.
    // The mark scales to the route it terminates. A fixed 4 ft bar pair on a 4.7 ft
    // route is nearly as wide as the route is long and renders as a blob — five of the
    // twelve `pressure` routes are under 9 ft, and lengthening THEM is not an option:
    // it would carry the arrival closer to an opponent, which is what the 9 ft rule
    // above exists to prevent. So the glyph gives way, not the geometry. The floor
    // keeps two bars distinguishable from one at the shortest route in the corpus.
    const barHalf = Math.max(1.2, Math.min(2, len * 0.30));
    const bar = (back) =>
      `<line x1="${(t.x - ux * back + px_ * barHalf).toFixed(2)}" y1="${py(t.y - uy * back + py_ * barHalf).toFixed(2)}" ` +
      `x2="${(t.x - ux * back - px_ * barHalf).toFixed(2)}" y2="${py(t.y - uy * back - py_ * barHalf).toFixed(2)}" ` +
      `stroke="${P.boards}" stroke-width="0.8"/>`;
    // The key ends a line three ways besides an arrowhead: a perpendicular bar
    // (sudden stop), a hook (body check) and an open curve (blocking/screening).
    // Route-local frame: `e` points along travel, `n` across it. Both marks are built
    // in it so they read the same whichever way the route runs.
    const frame = () => {
      const ux2 = (t.x - f.x), uy2 = (t.y - f.y), L2 = Math.hypot(ux2, uy2) || 1;
      const ex = ux2 / L2, ey = uy2 / L2;
      // `at` returns an absolute "x y" already flipped for SVG, `a` along travel and
      // `b` across it, so the two marks below can be written as pure geometry.
      return (a, b) => `${(t.x + ex * a - ey * b).toFixed(2)} ${py(t.y + ey * a + ex * b).toFixed(2)}`;
    };
    // BODY CHECK — an S standing on the route's end, NOT a hook. Both lobes meet at the
    // end point; the leading one bulges along travel and its tip flicks back, the
    // trailing one mirrors it. Geometry taken from page 32 measured at 1200 dpi (see the
    // legend's own note); a single hook was the fourth wrong guess at this mark.
    const endHook = () => {
      const P = frame(), a = 2.6, bulge = 2.3, tip = 0.8;
      return `<path d="M ${P(-tip, -a)} C ${P(bulge, -a * 0.75)} ${P(bulge, -a * 0.2)} ${P(0, 0)} ` +
             `C ${P(-bulge, a * 0.2)} ${P(-bulge, a * 0.75)} ${P(tip, a)}" ` +
             `fill="none" stroke="${PALETTE.boards}" stroke-width="0.7"/>`;
    };
    // BLOCKING (SCREENING) — one arc, '(' : belly ON the route's end, both tips forward
    // of it. This previously had the tips on the end and the belly forward, which draws
    // the arc the other way round from both the key and this file's own legend.
    const endCurve = () => {
      const P = frame(), a = 2.6, fwd = 1.3;
      return `<path d="M ${P(fwd, -a)} Q ${P(-fwd, 0)} ${P(fwd, a)}" ` +
             `fill="none" stroke="${PALETTE.boards}" stroke-width="0.7"/>`;
    };
    // ⚠️ FAIL LOUDLY on a glyph the legend defines but this renderer cannot draw.
    // `stopmark` (a bare `//`), `pivot` and `droppuck` are all in the legend and none is
    // implemented here: `line: 'none'` and `line: 'pivot'` fall through to the plain
    // quadratic, `end: 'slashes'` has no case below, and `dropTick` is honoured only
    // inside legendSvg. So a diagram using any of them silently drew FORWARD SKATING —
    // a line with an arrowhead, which in this notation means "keep going through".
    // This file already throws at build time on a missing `attacking`, for the same
    // reason: a wrong diagram that renders is worse than a build that stops.
    if (n.line === 'none' || n.line === 'pivot' || n.end === 'slashes' || n.dropTick) {
      throw new Error(
        `diagram "${spec.id ?? '(unnamed)'}": route kind "${r.kind}" is defined in the legend ` +
        `but not implemented in playSvg — it would draw as forward skating, which means ` +
        `something else. Implement it from IIHF 21.1 page 32, or do not use it.`);
    }

    const barEnd =
      n.end === 'bars2' ? bar(0) + bar(Math.max(0.9, Math.min(1.4, len * 0.22))) :
      n.end === 'bar1'  ? bar(0) :
      n.end === 'hook'  ? endHook() :
      n.end === 'curve' ? endCurve() : '';
    // A numbered badge at the route's start. Four simultaneous arrows read as one
    // instant, and a reader cannot tell whether a pass beat a forechecker or the
    // forechecker beat the pass. Ordering the routes is the only way a still
    // picture can say which came first.
    const badge = spec.numbered
      ? (() => {
          // Far enough along the route to clear the player glyph sitting on its
          // start — at k=0.14 every badge but the pass's was drawn underneath a
          // player and invisible. ~9 ft along, or the midpoint on a short route.
          const k = Math.min(0.5, 9 / len);
          const c = at(k);
          // Nudged to the left of travel rather than sitting on the line. Two routes
          // that converge on the same point — F2 arriving in the lane, and the pass
          // crossing it — otherwise stack their badges on top of each other, which
          // is exactly where the ordering matters most.
          const a = at(Math.max(0, k - 0.05)), b = at(Math.min(1, k + 0.05));
          const tl = Math.hypot(b.x - a.x, b.y - a.y) || 1;
          const bx = c.x - ((b.y - a.y) / tl) * 3.4;
          const by = c.y + ((b.x - a.x) / tl) * 3.4;
          // A rounded tag, not a ring. An open ring is what the key's opposition
          // forward looks like, and in greyscale the badges read as two more
          // opposing players standing in the slot.
          return `<rect x="${(bx - 2.1 * TXT).toFixed(2)}" y="${(py(by) - 1.9 * TXT).toFixed(2)}" ` +
            `width="${(4.2 * TXT).toFixed(2)}" height="${(3.8 * TXT).toFixed(2)}" rx="1" fill="#fff" stroke="${P.boards}" stroke-width="0.4"/>` +
            `<text x="${bx.toFixed(2)}" y="${(py(by) + 0.85 * TXT).toFixed(2)}" font-size="${(2.6 * TXT).toFixed(2)}" ` +
            `font-weight="700" text-anchor="middle" fill="${P.boards}">${i + 1}</text>`;
        })()
      : '';
    return line + barEnd + (n.bars ? ticks(f, t, bow) : '') + badge;
  }).join('\n    ');

  const parts = (spec.players ?? []).map((pl) => {
    const p = loc(pl.at);
    const opp = pl.team === 'opp';
    // MONOCHROME, and deliberately so. Own team = OPEN (no fill, dark outline, dark
    // lettering); opposition = SOLID (dark fill, white lettering). That is the HEO
    // sheet's own `● ○` / `▲ △` pairing, and it is the only encoding that survives
    // greyscale print, photocopying and red-green colour blindness.
    const ink = PALETTE.boards;
    const fill = opp ? ink : '#fff';
    // A WHITE HALO UNDER EVERY PLAYER OUTLINE. The corpus is monochrome, so an OPEN
    // glyph crossing a SOLID one used to be erased by it — same ink, no hue to fall
    // back on — and a reader lost a player. Three such pairs were found in the rendered
    // corpus; the halo fixes the class rather than the three, because which glyph is on
    // top depends on the order players happen to appear in a spec.
    // It is emitted for EVERY glyph, not just open ones, for that reason.
    // Cost, stated because it is real: ~0.6 ft of white ring outside each outline, which
    // occludes a little more of the rink lines beneath than the glyph's own fill already
    // did. `site-reviewer` should confirm the faceoff circles and goal lines still read.
    const halo = (s) => s;
    const text = opp ? '#fff' : ink;
    const r = 2.9;
    let shape, haloStr = '', dy = 1.05, fs = 3;
    if (pl.pos === 'pylon') {
      shape = `<g stroke="${ink}" stroke-width="0.9" stroke-linecap="round">` +
              `<line x1="${p.x - 2}" y1="${py(p.y) - 2}" x2="${p.x + 2}" y2="${py(p.y) + 2}"/>` +
              `<line x1="${p.x - 2}" y1="${py(p.y) + 2}" x2="${p.x + 2}" y2="${py(p.y) - 2}"/></g>`;
    } else if (pl.pos === 'G') {
      // GOALTENDER: a bare letter, no enclosing shape. Both keys draw it that way —
      // HEO "G  Goaltender", IIHF 21.1's standalone symbol block likewise — and any
      // shape would collide: a circle says forward, a triangle says defender.
      // No team variant, and none is needed: both keys offer a bare `G` — though §21.1
      // also draws a goaltender as the numeral 1 inside a team glyph, the convention
      // this corpus does not use — and which
      // net a goaltender is standing in settles whose they are. Outlining the letter
      // to encode the team was tried and blobbed at this size.
      // NO EARLY RETURN. Fall through to the shared `return { halo, body }` like every
      // other branch — see the ⚠️ on the join below for what an early return cost here.
      // No halo: a bare letter has no outline to protect, and a white ring round it
      // would read as a badge.
      shape = `<text x="${p.x}" y="${(py(p.y) + 1.6).toFixed(2)}" font-size="4.6" ` +
              `font-weight="700" text-anchor="middle" fill="${ink}">${esc(pl.id ?? 'G')}</text>`;
      return { halo: '', body: shape };
    } else if (pl.pos === 'D') {
      // DEFENCE: triangle. SHAPE CARRIES POSITION — HEO "International Drill
      // Symbols": `▲ △ Defender / Player`.
      const R = 3.6, hh = R * 1.5, half = R * 0.866;   // centroid on the position
      const tri = `M ${p.x} ${(py(p.y) - R).toFixed(2)} ` +
                  `L ${(p.x + half).toFixed(2)} ${(py(p.y) + hh - R).toFixed(2)} ` +
                  `L ${(p.x - half).toFixed(2)} ${(py(p.y) + hh - R).toFixed(2)} Z`;
      haloStr = halo(`<path d="${tri}" fill="none" stroke="#fff" stroke-width="2.0" ` +
                     `stroke-linejoin="round"/>`);
      shape = `<path d="${tri}" fill="${fill}" stroke="${ink}" stroke-width="0.8" ` +
              `stroke-linejoin="round"/>`;
      // TWO-CHARACTER IDS DO NOT FIT A TRIANGLE AT THE CIRCLE'S TEXT SIZE. A circle
      // offers 4.59 ft of interior; a triangle offers 1.11 ft of half-width at the
      // cap-top when fs = 2.6 and the baseline sits at 1.0, against the 1.685 ft that
      // `D1` needs — so the sloping edges cut the letters. For how many glyphs, count
      // them with the predicate two lines below rather than trusting a number here:
      // `DIAGRAMS.flatMap(d => d.players ?? [])
      //   .filter(p => p.pos === 'D' && String(p.id ?? '').length >= 2).length`.
      // ⚠️ This sentence said "44 glyphs", which is the wrong denominator for a comment
      // sitting beside a spec predicate. 44 is the number of RENDERED INSTANCES; the
      // predicate matches 42 spec entries. The gap is exactly `breakout-d-to-d`, which
      // carries `D1` and `D2` and is referenced from both `content/systems/breakouts.md`
      // and `content/hockey-iq/risk_management.md`, so its two ids render twice: 42 + 2.
      // Verify with `grep -c 'font-size="2.15"'` over `site/dist/**/index.html` (44) and
      // over `site/public/diagrams/*.svg` (42) — the two numbers are both right and count
      // different things. (Counting `![](diagram:…)` across `content/` gives 116 in a clean
      // checkout and 118 in a working tree that has unstaged diagram references. Neither
      // changes the 44: the extra duplicates carry no two-character triangle ids.) Two denominators, one number, minted two lines above a predicate
      // that counts for itself. A count goes stale silently; a denominator goes unstated.
      // Derived, not chosen: interior half-width at the cap-top is
      // `half * (dy - 0.72*fs + R)/hh - (0.4 / sin 60°)`, and it must exceed half the
      // text width, measured at 1.296 em for two bold characters.
      // ⚠️ THE COST IS REAL AND IS NOT ENGINEERED AWAY: this renders `D1` at ~6.8 px on a
      // 375 px phone against a forward's ~10 px. A triangle simply holds less than a
      // circle, and the alternatives — enlarging the glyph, or single-character ids —
      // are the owner's call, not the renderer's. Recorded in OPEN_ITEMS.
      const twoChar = String(pl.id ?? '').length >= 2;
      dy = twoChar ? 1.32 : 1.0;
      fs = twoChar ? 2.15 : 2.6;
    } else {
      // FORWARD: circle. HEO: `● ○ Forward / Player`.
      haloStr = halo(`<circle cx="${p.x}" cy="${py(p.y)}" r="${r}" fill="none" ` +
                     `stroke="#fff" stroke-width="1.95"/>`);
      shape = `<circle cx="${p.x}" cy="${py(p.y)}" r="${r}" fill="${fill}" ` +
              `stroke="${ink}" stroke-width="0.75"/>`;
    }
    // A pylon carries no label; without this guard it emitted an empty <text>.
    const id = pl.pos === 'pylon' ? '' :
      `<text x="${p.x}" y="${(py(p.y) + dy).toFixed(2)}" font-size="${fs}" ` +
      `font-weight="700" text-anchor="middle" fill="${text}">${esc(pl.id ?? '')}</text>`;
    return { halo: haloStr, body: shape + id };
  });
  // HALOS FIRST, THEN THE WALL, THEN THE GLYPH BODIES. The halos have to be under every
  // glyph body — otherwise one player's ring erases a neighbour's outline, which is the
  // defect they exist to prevent — but they must not be left on top of the boards.
  // ⚠️ EVERY BRANCH ABOVE MUST RETURN `{ halo, body }`. The goaltender branch once
  // returned a bare string, and when this join started consuming `parts` TWICE — once
  // for halos, once for bodies — `g.halo` and `g.body` were both `undefined` on that
  // entry. `Array.join` renders undefined as the empty string, so all 104 goaltenders
  // vanished from all 112 diagrams with no error and a clean exit 0, while 87 captions
  // and `describe` texts went on naming a player who was not drawn — and `describe` is
  // the accessible name, so a screen-reader user was told about a goaltender that a
  // sighted reader could at least see was missing. Nothing mechanical caught it; a
  // rendered pass did. Hence the assertion: this class must fail loudly.
  for (const g of parts) {
    if (!g || typeof g !== 'object' || !('halo' in g) || !('body' in g)) {
      throw new Error(
        `player glyph branch returned ${typeof g}, not { halo, body } — see the note above`);
    }
  }
  const glyphs = parts.map((g) => g.halo).join('\n    ') + '\n    ' +
                 boardsOutline() + '\n    ' +
                 parts.map((g) => g.body).join('\n    ');

  // Player labels go through the same placer as the vocabulary overlay, seeded
  // with the glyphs themselves so a label never lands on a player.
  const labelled = (spec.players ?? []).filter((pl) => pl.label);
  const players = glyphs + '\n    ' + placeLabels(
    labelled.map((pl) => { const p = loc(pl.at); return { text: pl.label, x: p.x, y: p.y }; }),
    { size: 2.8 * TXT, half: opts.half ?? true,
      reserve: [
        ...(spec.players ?? []).map((pl) => { const p = loc(pl.at); return { x: p.x, y: p.y, w: 7, h: 8 }; }),
        ...routeReserve,
        ...zoneReserve,
      ],
      // The leader line may cross a route — routes are what a diagram is mostly made of —
      // but not a player. Same 7x8 box the reserve above uses, so there is one statement
      // in this file of how much room a glyph takes, not two that can drift.
      avoid: (spec.players ?? []).map((pl) => { const p = loc(pl.at); return { x: p.x, y: p.y, w: 7, h: 8 }; }) }
  ).join('\n    ');

  const puck = spec.puck
    ? (() => { const p = loc(spec.puck); return `<circle cx="${p.x}" cy="${py(p.y)}" r="1.1" fill="${PALETTE.puck}"/>`; })()
    : '';

  // The accessible name, and the only thing a listener gets.
  //
  // md_to_speech.py substitutes an image for its alt text verbatim and inline, so
  // `spec.caption` is spoken as a bare sentence in the middle of the prose. A
  // caption that names the system and stops ("A 2-1-2 forecheck") leaves the
  // listener with nothing while the sighted reader gets the whole picture. It has
  // to teach on its own, and it has to carry the section's hedges — a diagram is
  // the most absolute-looking thing on a page.
  //
  // Emitted as <title> (the accessible name) plus <desc> (the long description).
  // role="img" without either is worse than no role at all: it tells a screen
  // reader to announce an image and then gives it nothing to announce.
  const _t = shortTitle(spec);
  const _d = longDesc(spec);
  const a11y =
    (_t ? `<title>${esc(_t)}</title>` : '') +
    (_d ? `<desc>${esc(_d)}</desc>` : '');

  return base
    .replace('<defs>', `${a11y}<defs>`)
    .replace('</svg>', `  ${defsOut()}\n    ${zones}\n    ${routes}\n    ${players}\n    ${puck}\n</svg>`);
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * The legend, drawn beneath the ice so a diagram is self-describing.
 *
 * The legend *is* the definition of the notation — this corpus checks diagrams
 * against it rather than against anyone's memory — so it is the one part of the
 * picture that must never be the part that fails to render. Two consequences:
 *
 *  - Its viewBox is fixed and the `width` only scales it, so the text keeps its
 *    proportion of the picture at any width. The first version hard-coded a
 *    12 px font inside a 900-wide viewBox, which came out at 5 px on a phone.
 *  - It paints its own white background. Without one it inherits the page, and on
 *    a dark theme the near-black strokes and labels disappear — taking the
 *    definition of the notation with them.
 */
export function legendSvg(width = 820, opts = {}) {
  // Wording is the key's own, verbatim, so a reader who has seen the published
  // sheet reads the same words here. "Skating with control of the puck" is longer
  // than "Carry" and stays anyway — renaming a symbol is how a shared notation
  // quietly becomes a private one.
  // Every symbol the corpus actually draws must appear here. `stop` and
  // `crossovers` were used in diagrams while the legend omitted them, which left a
  // reader meeting a two-barred line with no way to know what it meant — and the
  // legend IS the definition, so an omission is not a gap, it is an undefined symbol.
  const rows = opts.rows ?? [
    ['skate', 'Forward skating'],
    ['carry', 'Skate and stickhandle'],
    ['pass', 'Passing'],
    ['shot', 'Shooting'],
    ['backward', 'Backward skating'],
    ['backxover', 'Backward crossover'],
    ['crossovers', 'Lateral crossovers'],
    // Two bars terminating a line is §21.1's SUDDEN STOP, read off the rendered page
    // at 1200 dpi. "Stopping" was the Hockey Eastern Ontario sheet's word for it, and
    // §21.1's own STOP is a bare pair of slashes with no line, which this corpus does
    // not draw. `pressure` renders the same mark deliberately: both mean the route
    // ends here rather than continuing through, which is the distinction that matters.
    ['stopmark', 'Stop'],
    ['pivot', 'Pivot'],
    ['stop', 'Sudden stop — the route ends here'],
    ['blocking', 'Blocking (screening)'],
    // NO `bodycheck` ROW, DELIBERATELY. `bodycheck` is implemented (it is in §21.1 and
    // a reader may meet it on another key) but NO diagram in this corpus uses it, and a
    // legend that advertises a body-check glyph without saying who may legally deliver
    // one is a contact instruction with no scope attached. Body checking is prohibited
    // in USA Hockey 12U and below, all girls' and women's play and all non-check adult
    // play (Rule 604(a)), and at Hockey Canada U13 and below and in female hockey (7.3).
    // The same argument keeps `pressure` out of the rows above. If a diagram ever draws
    // one, the row comes back WITH the scope, and `body_contact_and_battles.md` owns it.
    ['droppuck', 'Dropping the puck'],
  ];
  // `pressure` is deliberately absent from the rows above: it draws the SAME mark as
  // sudden stop — a line ending in two bars — so a second row claiming a distinct glyph
  // would be a legend that lies. The two are told apart by where the route finishes,
  // not by shape, and that is disclosed to the reader in reading_ice_hockey_diagrams.md.
  // ⚠️ This comment said `pressure` "now draws as forward skating", which it has not
  // since the arrowhead on a closing route was found to be a safety defect — nine of
  // twelve routes finished within 9 ft of an opponent carrying a mark that means "keep
  // going through him". It sat eight lines below the correct note above it, and the
  // reader-facing document repeated it.
  //
  // `crossovers` stays and is the one symbol here taken from the Hockey Eastern Ontario
  // sheet rather than IIHF 21.1, because the IIHF key has no lateral-crossover symbol at
  // all — and a barred line collides with nothing in the key, so it cannot be misread as
  // a different symbol. That is the test: a departure is acceptable when it collides with
  // nothing, and a defect when the key already uses that mark for something else.
  const COL = 300, h = 26;
  const VB = 640;                    // fixed layout width; `width` scales the whole
  const ROWS = Math.ceil(rows.length / 2);
  const H = ROWS * h + 84;   // +22 for the pylon's own line, +28 for the puck row below it.
                             // gy = ROWS*h + 20, and the puck row sits at gy + 48 with its
                             // label baseline at gy + 52, so anything less clips it.

  // Miniature of a route, drawn by the same code paths as the diagram so the legend
  // cannot drift from what it claims to define. A legend maintained separately from
  // its renderer is a second place for the notation to be wrong.
  const sample = (kind, x, y) => {
    const n = NOTATION[kind];
    const L = 52, S = 5.2;           // length in px, and px-per-foot for the wave
    // Arrowhead geometry lifted from the `ahL` marker the straight rows use, so every
    // row in the key terminates at the same x. `markerUnits` defaults to strokeWidth,
    // so markerWidth 4 on a 1.9 stroke is 7.6px, and refX 8 of 10 puts the TIP 1.5px
    // BEYOND the path end. That offset is why the straight rows never showed line
    // past the tip and the hand-drawn wave row — tip and line both at L — did.
    const HEAD = 7.6, TIPX = L + 1.5, BASEX = TIPX - HEAD;
    const f = { x: 0, y: 0 }, t = { x: L / S, y: 0 };
    let g;
    if (n.line === 'wave' || n.line === 'loops' || n.line === 'zigzag') {
      // Same generator as the diagram, scaled to px — a legend drawn by different
      // code from the thing it defines is a second place for the notation to be
      // wrong. The generators emit feet with y already flipped, so only scaling is left.
      //
      // The route stops at the arrowhead's BASE, not at the tip. Measured off page 32
      // at 1200 dpi: SKATE AND STICKHANDLE runs x=178..1053, the head's base is at
      // x=926 and its tip at x=1053, and the wave's last pixel is x=925 — so the head
      // replaces the final eighth of the line rather than sitting on top of it. Drawing
      // the wave to `L` as well left its round linecap protruding ~1px PAST the tip,
      // which is what "the tip isn't at the end of the line" was describing. It was
      // reported twice and both of my earlier fixes — lengthening the straight run,
      // shrinking the head — changed the wrong number.
      const tw = n.end === 'arrow' ? { x: BASEX / S, y: 0 } : t;
      const gen = n.line === 'loops'  ? archPath(f, tw, 0, n.lambda, n.amp, true)
                : n.line === 'zigzag' ? zigzagPath(f, tw, 0, n.lambda, n.amp, true)
                :                       wavePath(f, tw, 0, n.lambda, n.amp, true);
      // Scale with a transform rather than by rewriting coordinates: cCutPath
      // emits arc commands, and the old flattener stripped M/L and multiplied
      // every number, which turns an `A rx ry 0 1 0 x y` into nonsense.
      const scaled = `<g transform="scale(${S})">` +
        `<path d="${gen}" fill="none" stroke="${PALETTE.boards}" ` +
        // Pre-scale units: this path is inside a scale(S) group, so the rendered stroke
        // is this value times S. For the arches that is amp * ARCH_WEIGHT * S = 1.35px,
        // which is where the hand-tuned 1.45 had landed — the ratio now derives it.
        `stroke-width="${(n.line === 'loops' ? n.amp * ARCH_WEIGHT : 1.9 / S).toFixed(3)}" stroke-linecap="round"/></g>`;
      // The arches overlap by design, so a stroke sized for a straight line closes
      // the gaps at the crossings and the run reads as a blob. Thinner only here.
      // Head drawn by hand pointing along +x, for the same reason as in the
      // diagram: a marker on a polyline orients off its last tiny segment. Omitted
      // where the key omits it — §21.1 draws both backward marks with no arrowhead.
      // Same size as the straight rows' marker, and it starts where the line stops.
      g = scaled + (n.end === 'arrow'
        ? `<path d="M ${TIPX} 0 L ${BASEX} -3.8 L ${BASEX} 3.8 Z" fill="${PALETTE.boards}"/>` : '');
    } else if (n.line === 'double') {
      g = `<path d="M 0 -2.6 L ${L - 11} -2.6" fill="none" stroke="${PALETTE.boards}" stroke-width="1.6"/>` +
          `<path d="M 0 2.6 L ${L - 11} 2.6" fill="none" stroke="${PALETTE.boards}" stroke-width="1.6"/>` +
          `<path d="M ${L} 0 L ${L - 11} -7 L ${L - 11} 7 Z" fill="${PALETTE.boards}"/>`;
    } else if (n.line === 'pivot') {
      // PIVOT: a single hook that comes in low, turns, and leaves upward — one
      // inflection, as the key draws it. An S-curve reads as two turns, which is a
      // different move.
      g = `<path d="M ${(L * 0.10).toFixed(1)} -2 C ${(L * 0.10).toFixed(1)} 11, ` +
          `${(L * 0.40).toFixed(1)} 13, ${(L * 0.60).toFixed(1)} 1" ` +
          `fill="none" stroke="${PALETTE.boards}" stroke-width="1.9" stroke-linecap="round"/>` +
          `<path d="M ${(L * 0.60).toFixed(1)} 1 L ${(L * 0.72).toFixed(1)} -11" ` +
          `fill="none" stroke="${PALETTE.boards}" stroke-width="1.9" stroke-linecap="round"/>` +
          `<path d="M ${(L * 0.78).toFixed(1)} -17 L ${(L * 0.635).toFixed(1)} -10.5 ` +
          `L ${(L * 0.745).toFixed(1)} -6.5 Z" fill="${PALETTE.boards}"/>`;
    } else if (n.line === 'none') {
      // STOP: two slashes, no line at all.
      g = `<g stroke="${PALETTE.boards}" stroke-width="2.4" stroke-linecap="round">` +
          `<line x1="${L * 0.34}" y1="7" x2="${L * 0.46}" y2="-7"/>` +
          `<line x1="${L * 0.5}" y1="7" x2="${L * 0.62}" y2="-7"/></g>`;
    } else {
      g = `<path d="M 0 0 L ${L} 0" fill="none" stroke="${PALETTE.boards}" stroke-width="1.9"` +
          (n.dash ? ` stroke-dasharray="${n.dash.split(' ').map((v) => v * 2.2).join(' ')}"` : '') +
          (n.end === 'arrow' ? ' marker-end="url(#ahL)"' : '') + '/>';
      if (n.end === 'bar1') g += `<line x1="${L}" y1="-6" x2="${L}" y2="6" stroke="${PALETTE.boards}" stroke-width="2.2"/>`;
      if (n.end === 'bars2') g += `<line x1="${L}" y1="-6" x2="${L}" y2="6" stroke="${PALETTE.boards}" stroke-width="2.2"/>` +
                                  `<line x1="${L - 5}" y1="-6" x2="${L - 5}" y2="6" stroke="${PALETTE.boards}" stroke-width="2.2"/>`;
      // BODY CHECK and BLOCKING are NOT a mirror pair, and treating them as one was the
      // last of four wrong guesses at the body check (smooth curve, chevron, brace,
      // mirrored arc). Measured off page 32 at 1200 dpi, tracing each mark's centreline:
      //
      //   BLOCKING   one arc, '('. Belly at the line end, both tips ~41px right of it
      //              over a 167px height — a single unbroken curve opening away.
      //   BODY CHECK an S. Upper lobe bulges RIGHT and its tip flicks back LEFT of the
      //              join; lower lobe bulges LEFT and its tip flicks RIGHT. The two
      //              lobes meet exactly at the line's end, and the whole mark has
      //              180-degree rotational symmetry about that point.
      //
      // So the check is a wave standing on the end of the route, not an arc. One arc is
      // the screen; two opposed arcs are the check, and the difference is the whole
      // distinction between shielding a goaltender's eyes and hitting somebody.
      // On the page both marks are the same height (167px and 168px) and the same
      // weight, so they are drawn that way here: half-height 8, stroke 2.1.
      //
      // ⚠️ ONE LABELLED EXAGGERATION, and it does NOT rest on a collision. The page's S
      // bulges 21px peak-to-peak on a 13.5px stroke — about 1.5 stroke widths — because
      // its mark is 12x as tall as it is thick. At the legend's scale the mark is only
      // 7.6x as tall as it is thick, so a faithful 1.5-stroke bulge is a deviation
      // NARROWER THAN THE PEN, and the mark reads as a slightly bowed bar. Nor can that
      // be fixed by thinning the stroke: the bulge is defined as a multiple of it. So the
      // lobes are opened to ~3 stroke widths — the minimum that still reads as two
      // opposed curves — and the honest justification is LEGIBILITY, not collision.
      //
      // An earlier version of this note claimed the faithful mark "renders as a straight
      // vertical bar, which is `suddenstop`". That was wrong: sudden stop is TWO bars,
      // as the notation block above says correctly. A single near-vertical mark at a line
      // end is the Hockey Eastern Ontario CHECKING-PRESSURE glyph, which is in neither
      // key this corpus follows and which the corpus does not draw. By this file's own
      // test — acceptable when it collides with nothing in the key — a faithful body
      // check PASSES. The exaggeration is a legibility choice at this row height, and if
      // the row box is ever made taller it should be reduced toward 1.5.
      if (n.end === 'hook') g += `<path d="M ${L - 1.1} -8 C ${L + 4.3} -6 ${L + 4.3} -1.6 ${L} 0 ` +
                                 `C ${L - 4.3} 1.6 ${L - 4.3} 6 ${L + 1.1} 8" ` +
                                 `fill="none" stroke="${PALETTE.boards}" stroke-width="2.1" stroke-linecap="round"/>`;
      // Tips 3.9 forward of a belly that lands exactly ON the line's end — the page has
      // the tips 41px forward over a half-height of 83.5, and the belly on the line.
      // The control point is placed so the quadratic's midpoint is L, not merely near it;
      // it used to leave the belly 1.5px past the end, which reads as a detached mark.
      if (n.end === 'curve') g += `<path d="M ${L + 3.9} -8 Q ${L - 3.9} 0 ${L + 3.9} 8" ` +
                                  `fill="none" stroke="${PALETTE.boards}" stroke-width="2.1" stroke-linecap="round"/>`;
      if (n.bars) g += [12, 22, 32, 42].map((o) =>
        `<line x1="${o}" y1="-4" x2="${o}" y2="4" stroke="${PALETTE.boards}" stroke-width="1.6"/>`).join('');
      if (n.dropTick) g += `<line x1="${L * 0.45}" y1="-5" x2="${L * 0.45}" y2="5" stroke="${PALETTE.boards}" stroke-width="2"/>` +
                           `<circle cx="${L * 0.52}" cy="0" r="2" fill="${PALETTE.boards}"/>`;

    }
    return `<g transform="translate(${x} ${y})">${g}</g>`;
  };

  const items = rows.map(([kind, text], i) => {
    const x = 8 + (i % 2) * COL, y = 16 + Math.floor(i / 2) * h;
    return sample(kind, x, y) +
      `<text x="${x + 62}" y="${y + 4}" font-size="12" fill="#1b1c1e">${text}</text>`;
  }).join('\n    ');

  // Player glyphs. **Shape carries the POSITION** — circle a forward, triangle a
  // defenceman — and **fill carries the TEAM**, open yours and solid theirs. Same
  // axis as `playSvg` and as the file header, and it must stay that way: this legend
  // is the one place a reader goes to find out, so a legend that disagrees with the
  // renderer is worse than no legend.
  //
  // ⚠️ This comment described shape-carries-POSSESSION, with the fill inverted as well
  // ("filled yours and open theirs"), while the rows below it rendered correctly. It
  // was the last of the stale possession-axis comments in this file. The rows are
  // right; nothing about them needs changing on the strength of a comment.
  //
  // The pylon is here because the prose promises "an X is a pylon and never a
  // player", and a promise about a symbol the key never shows is not a definition.
  const gy = ROWS * h + 20;
  const tri = (cx, cy, fill, stroke) =>
    `<path d="M ${cx} ${cy - 7} L ${cx + 6.5} ${cy + 4.5} L ${cx - 6.5} ${cy + 4.5} Z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
  // Two facts, two channels: SHAPE is the POSITION, FILL is the TEAM. The legend has
  // to vary ONE channel per row or a reader reads the pair as a single distinction —
  // which is how the previous axis was misread. So the shape row holds the fill
  // constant and the fill row holds the shape constant.
  const INK = PALETTE.boards;
  const glyphs =
    // Shape row: both OPEN, so only the shape varies.
    `<circle cx="14" cy="${gy}" r="6.5" fill="#fff" stroke="${INK}" stroke-width="1.5"/>` +
    tri(34, gy, '#fff', INK) +
    `<text x="46" y="${gy + 4}" font-size="12" fill="${INK}">Circle is a forward; triangle a defenceman</text>` +
    // Fill row: both CIRCLES, so only the fill varies.
    `<circle cx="${8 + COL + 6}" cy="${gy}" r="6.5" fill="#fff" stroke="${INK}" stroke-width="1.5"/>` +
    `<circle cx="${8 + COL + 26}" cy="${gy}" r="6.5" fill="${INK}" stroke="${INK}" stroke-width="1.5"/>` +
    `<text x="${8 + COL + 38}" y="${gy + 4}" font-size="12" fill="${INK}">Open is your team; solid is theirs</text>` +
    // The pylon and the goaltender share the last line. The pylon sat alone before,
    // because on one line with two player channels it overran the viewBox.
    `<g stroke="${INK}" stroke-width="2" stroke-linecap="round">` +
    `<line x1="14" y1="${gy + 22}" x2="24" y2="${gy + 32}"/>` +
    `<line x1="14" y1="${gy + 32}" x2="24" y2="${gy + 22}"/></g>` +
    `<text x="34" y="${gy + 31}" font-size="12" fill="${INK}">A pylon — never a player</text>` +
    // GOALTENDER: a bare letter in both published keys, so the legend shows it bare.
    `<text x="${8 + COL + 10}" y="${gy + 32}" font-size="15" font-weight="700" ` +
    `text-anchor="middle" fill="${INK}">G</text>` +
    `<text x="${8 + COL + 26}" y="${gy + 31}" font-size="12" fill="${INK}">A goaltender</text>` +
    // THE PUCK. Neither key publishes a single-puck symbol, so this row is the corpus's
    // own and is labelled as such in "Reading the diagrams". It is here because most of
    // the diagrams draw a puck — `DIAGRAMS.filter(d => d.puck).length` for the current
    // figure — and a key that omits a symbol its pictures use fails its own purpose.
    // ⚠️ This read "97 diagrams", which was wrong (it is 92, and 97 came from grepping
    // `puck:` including comments). It survived a sweep for the same number thirty lines
    // above because the digits fell across a line break. Third instance of one count.
    // r 2.5 against the legend player's 6.5 = 38%, which is the ratio the DIAGRAMS draw
    // (puck 1.1 against player 2.9). It was 3.2, i.e. 49% — the legend is the one place a
    // reader calibrates the size from, and the body says "about a third the width".
    `<circle cx="14" cy="${gy + 48}" r="2.5" fill="${INK}"/>` +
    `<text x="34" y="${gy + 52}" font-size="12" fill="${INK}">The puck — this guide's own mark</text>`;

  // ⚠️ The provenance below was the ONLY text in the hard-coded <title> this replaces.
  // It is a source attribution and must not be dropped (non-negotiable 4), and `longDesc`
  // returns describe+caption, neither of which carries the section number. So it is appended
  // to the <desc> rather than deleted with the title it used to live in.
  const LEGEND_SOURCES =
    'Line symbols after IIHF Coach Development Program Level I section 21.1; player glyphs after ' +
    'the Hockey Eastern Ontario "International Drill Symbols" sheet.';
  // ⚠️ legendSvg was the THIRD emit site and round 64 patched only two. Its caller's own comment
  // records the lesson for `rink`: "Omitting them here did not degrade the name, it removed it".
  // The same omission left `notation-key` as the one built SVG in the corpus with no <desc> at all,
  // while the site hid its 1,573-char figcaption from assistive technology as a duplicate.
  const _t = shortTitle({ title: opts.title, id: opts.id || 'notation-key',
                          caption: opts.caption, describe: opts.describe })
             || 'The notation key';
  const _d = [longDesc(opts), LEGEND_SOURCES].filter(Boolean).join(' ');
  const height = Math.round((width * H) / VB);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${VB} ${H}"
     font-family="-apple-system, Helvetica Neue, Arial, sans-serif" role="img">
    ${_t ? `<title>${esc(_t)}</title>` : ''}${_d ? `<desc>${esc(_d)}</desc>` : ''}
    <rect x="0" y="0" width="${VB}" height="${H}" fill="#ffffff"/>
    <defs><marker id="ahL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${PALETTE.boards}"/></marker></defs>
    ${items}
    ${glyphs}
</svg>`;
}
