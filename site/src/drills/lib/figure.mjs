// One reusable stick figure for the off-ice exercise drawings (1 Nov 2026), built on the
// skating-drill kit in ./draw.mjs and drawn in the same style. Owner's rulings, 1 Nov 2026:
//   - exercises are drawn FROM BEHIND where that works, so the player's left is the reader's left;
//   - the floor is the kit's light blue panel (no separate floor colour);
//   - ONE figure, so every exercise looks alike: same stroke widths, same head, same colours;
//   - legs coloured by side as in the kit (left blue, right orange); a foot on the floor is
//     solid, a lifted foot is hollow and dashed.
// Where a from-behind view cannot show a movement (a hinge, a lying exercise, a rotation seen
// from above), a drawing uses a side or overhead view of the SAME figure and says so in its
// label and its <desc>.
//
// Units are feet, y DOWN the page, as in draw.mjs. A pose is a set of joint positions in feet
// relative to the pelvis centre. Missing joints fall back to a standing figure seen from behind.
import { COL, PX, fs } from './draw.mjs';

export { COL, PX, fs };
export const BALL = '#f2b705'; // the kit's cone yellow
const f = (n) => Math.round(n * PX * 10) / 10;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

/** Standing, seen from behind, arms relaxed. Every pose starts from this. */
export const STAND = {
  hipL: [-0.32, 0], hipR: [0.32, 0],
  kneeL: [-0.36, 1.25], footL: [-0.4, 2.5],
  kneeR: [0.36, 1.25], footR: [0.4, 2.5],
  neck: [0, -2.0], shL: [-0.62, -1.85], shR: [0.62, -1.85],
  elbowL: [-0.8, -0.95], handL: [-0.9, -0.1],
  elbowR: [0.8, -0.95], handR: [0.9, -0.1],
  head: [0, -2.75],
};

/** Side view (facing the reader's right): hips and shoulders collapse to one point each. */
export const SIDE = {
  ...STAND,
  hipL: [0, 0], hipR: [0, 0], shL: [0, -1.85], shR: [0, -1.85],
  kneeL: [0.05, 1.25], footL: [0.05, 2.5], kneeR: [-0.05, 1.25], footR: [-0.05, 2.5],
  elbowL: [0.05, -0.95], handL: [0.1, -0.1], elbowR: [-0.05, -0.95], handR: [0, -0.1],
  head: [0.08, -2.75],
};

const line = (pts, c, w) => `<polyline points="${pts.map((p) => `${f(p[0])},${f(p[1])}`).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

/** The foot glyph: a small rounded bar in the leg's colour, rotated by angle (degrees). */
function footGlyph(p, foot, down, angle = 0) {
  const c = COL[foot];
  return `<g transform="translate(${f(p[0])} ${f(p[1])}) rotate(${angle})"><rect x="${f(-0.42)}" y="${f(-0.15)}" width="${f(0.84)}" height="${f(0.3)}" rx="4" fill="${down ? c : '#fff'}" stroke="${c}" stroke-width="2"${down ? '' : ' stroke-dasharray="3 2"'}/></g>`;
}

/**
 * Draw the figure with its pelvis at (x, y).
 *   down:  { L, R } - which feet are on the floor (solid) and which are lifted (hollow)
 *   footAngle: { L, R } - rotation of each foot glyph; 0 = level
 *   far:   'L' | 'R' | null - in a side view, the limb side drawn first (behind the body)
 *   noLegs: true - an overhead view of a standing figure: no legs, each foot drawn as a shoe
 *           outline whose toe points along footAngle (0 = the reader's right)
 *   noFeet: true - with noLegs, leave the feet out (a frame that should not commit to them)
 */
export function figure(d, x, y, pose = {}, { down = { L: true, R: true }, footAngle = {}, far = null, noLegs = false, noFeet = false } = {}) {
  const P = { ...STAND, ...pose };
  const at = ([dx, dy]) => [x + dx, y + dy];
  const leg = (s) => (noLegs
    ? (noFeet ? '' : shoePath(at(P[`foot${s}`]), s, footAngle[s] || 0))
    : line([at(P[`hip${s}`]), at(P[`knee${s}`]), at(P[`foot${s}`])], COL[s], 9) +
      footGlyph(at(P[`foot${s}`]), s, down[s], footAngle[s] || 0));
  const arm = (s) => line([at(P[`sh${s}`]), at(P[`elbow${s}`]), at(P[`hand${s}`])], COL.ink, 7);
  const near = far === 'L' ? 'R' : 'L', farS = far || 'R';
  const torso = line([at(P.hipL), at(P.hipR)], COL.ink, 9) + line([[x, y], at(P.neck)], COL.ink, 10) +
    line([at(P.shL), at(P.neck), at(P.shR)], COL.ink, 8);
  const s0 = far
    ? leg(farS) + arm(farS) + torso + leg(near) + arm(near)
    : leg('L') + leg('R') + torso + arm('L') + arm('R');
  let s = s0;
  s += `<circle cx="${f(x + P.head[0])}" cy="${f(y + P.head[1])}" r="${f(0.55)}" fill="${COL.ink}"/>`;
  d.raw(`<g>${s}</g>`);
}

/** Pelvis height that puts the given foot (or the lower of both) on the ground line. */
export function standOn(ground, pose, plant = 'both') {
  const P = { ...STAND, ...pose };
  const ys = plant === 'L' ? [P.footL[1]] : plant === 'R' ? [P.footR[1]] : [P.footL[1], P.footR[1]];
  return ground - Math.max(...ys) - 0.15;
}

/** The floor line under a figure. */
export function floor(d, x1, x2, y) {
  d.raw(`<line x1="${f(x1)}" y1="${f(y)}" x2="${f(x2)}" y2="${f(y)}" stroke="${COL.muted}" stroke-width="2" stroke-opacity="0.6"/>`);
}

/** A box or bench seen side-on or from behind: a pale block standing on the floor. */
export function block(d, x, ground, w, h, label = '') {
  d.raw(`<rect x="${f(x)}" y="${f(ground - h)}" width="${f(w)}" height="${f(h)}" rx="4" fill="#dfe7ee" stroke="${COL.muted}" stroke-width="2"/>`);
  if (label) d.text(x + w / 2, ground - h / 2 + 0.2, label, { size: 0.4 });
}

/** A ball. ghost = an earlier or later position. */
export function ball(d, x, y, { r = 0.45, ghost = false } = {}) {
  d.raw(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${ghost ? 'none' : BALL}" stroke="#b58500" stroke-width="2"${ghost ? ' stroke-dasharray="3 2"' : ''}/>`);
}

/** Overhead shoe outline, toe along angle (degrees). Solid = on the floor. */
export function shoe(d, x, y, angle, foot, opts) {
  d.raw(shoePath([x, y], foot, angle, opts));
}
function shoePath([x, y], foot, angle, { len = 1.0, wid = 0.42 } = {}) {
  const c = COL[foot], L = len * PX, W = wid * PX, h = W * 0.36;
  const p = `M ${-L / 2} 0 C ${-L / 2} ${-h} ${-L * 0.25} ${-W * 0.42} ${L * 0.05} ${-W * 0.47} ` +
    `C ${L * 0.38} ${-W * 0.52} ${L / 2} ${-W * 0.3} ${L / 2} 0 ` +
    `C ${L / 2} ${W * 0.3} ${L * 0.38} ${W * 0.52} ${L * 0.05} ${W * 0.47} ` +
    `C ${-L * 0.25} ${W * 0.42} ${-L / 2} ${h} ${-L / 2} 0 Z`;
  return `<g transform="translate(${f(x)} ${f(y)}) rotate(${angle})"><path d="${p}" fill="${c}" fill-opacity="0.9" stroke="${c}" stroke-width="2"/></g>`;
}

/** A straight arrow in ink, feet coordinates; both = arrowheads at both ends. */
export function arrow(d, x1, y1, x2, y2, { both = false, width = 3, dashed = false } = {}) {
  d.raw(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${COL.ink}" stroke-width="${width}"${dashed ? ' stroke-dasharray="2 7" stroke-linecap="round"' : ''} marker-end="url(#ah-ink)"${both ? ' marker-start="url(#ah-ink)"' : ''}/>`);
}

/** A numbered badge with a bold line and an optional plain second line, left-aligned after it. */
export function caption(d, x, y, n, bold, plain = '') {
  if (n) d.step(x, y, n);
  const tx = n ? x + 0.65 : x;
  d.text(tx, y + 0.2, bold, { size: 0.42, anchor: 'start', weight: 600, color: COL.ink });
  if (plain) d.text(tx, y + 0.85, plain, { size: 0.4, anchor: 'start' });
}

/**
 * Finish the drawing with an off-ice legend in place of the kit's skate legend.
 * The diagram must be built with the kit's legend on (the default), so its height is reserved.
 */
export function finish(d, keys) {
  let svg = d.svg();
  const i = svg.lastIndexOf('<g>');
  const y = d.h + 0.75, size = fs(0.42);
  const t = (x, s) => `<text x="${f(x)}" y="${f(y + size * 0.34)}" font-size="${f(size)}" fill="${COL.muted}">${esc(s)}</text>`;
  const gap = 0.22, tw = (s) => s.length * size * 0.5;
  const used = keys.reduce((acc, [gw, , s]) => acc + gw + gap + tw(s), 0);
  const pad = 0.6, between = keys.length > 1 ? Math.max(0.5, (d.w - 2 * pad - used) / (keys.length - 1)) : 0;
  let x = pad, g = '';
  for (const [gw, glyph, s] of keys) { g += glyph(x, y) + t(x + gw + gap, s); x += gw + gap + tw(s) + between; }
  return svg.slice(0, i) + `<g>${g}</g></svg>`;
}

// Legend glyphs (x = left edge, y = centre line), in feet.
export const key = {
  limb: (foot) => [0.8, (x, y) => `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + 0.8)}" y2="${f(y)}" stroke="${COL[foot]}" stroke-width="7" stroke-linecap="round"/>`, foot === 'L' ? 'left leg' : 'right leg'],
  down: () => [0.8, (x, y) => `<rect x="${f(x)}" y="${f(y - 0.15)}" width="${f(0.8)}" height="${f(0.3)}" rx="4" fill="${COL.L}" stroke="${COL.L}" stroke-width="2"/>`, 'foot down'],
  up: () => [0.8, (x, y) => `<rect x="${f(x)}" y="${f(y - 0.15)}" width="${f(0.8)}" height="${f(0.3)}" rx="4" fill="#fff" stroke="${COL.L}" stroke-width="2" stroke-dasharray="3 2"/>`, 'foot up'],
  air: () => [1.1, (x, y) => `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + 1.1)}" y2="${f(y)}" stroke="${COL.ink}" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/>`, 'in the air'],
  travel: () => [1.1, (x, y) => `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + 1.1)}" y2="${f(y)}" stroke="${COL.travel}" stroke-width="8" stroke-opacity="0.45"/>`, 'travel'],
  foot: (side) => [0.8, (x, y) => `<rect x="${f(x)}" y="${f(y - 0.15)}" width="${f(0.8)}" height="${f(0.3)}" rx="4" fill="${COL[side]}" stroke="${COL[side]}" stroke-width="2"/>`, side === 'L' ? 'left foot' : 'right foot'],
  ball: (label = 'ball') => [0.6, (x, y) => `<circle cx="${f(x + 0.3)}" cy="${f(y)}" r="${f(0.24)}" fill="${BALL}" stroke="#b58500" stroke-width="2"/>`, label],
};
