// Off-ice stick work (DRAFT, 1 Nov 2026), one drawing per card in "Practising on Your Own"
// section 4. Drawn from the off-ice pilot the owner approved on 1 Nov 2026; the style rulings
// are listed in lib/office_stick.mjs.
// Conventions, so a reviewer can check the geometry:
//   - Seen from ABOVE. You stand at the bottom of each panel facing UP the page, so your left is
//     the reader's left. Clockwise means clockwise as the reader sees it from above.
//   - Circled numbers are the card's step numbers.
//   - A figure of 8 is drawn twice, once in each direction: clockwise round the right-hand (or far)
//     marker, which by its shape takes the other loop anticlockwise, and then the whole 8 run the
//     other way. Each picture is named by its direction round ONE named marker, never by the
//     second loop on its own (the pilot labelled that loop anticlockwise, and it was wrong).
//   - Two cards need a handedness the card does not give (Toe drag, Shooting off a pad). Both are
//     drawn for a RIGHT-handed shot (blade on the right side, forehand on the right) and say so.
import { COL } from './lib/draw.mjs';
import { diagram, player, puck, marker, blade, path, dangle, stopBar, divider, shoe, finish, key } from './lib/office_stick.mjs';

const GROUP = 'Off-ice stick work';
const SEEN = 'Seen from above, you at the bottom facing up the page: left and right are yours, and clockwise is as seen from above.';
const H = 12.6;
const lab = (d, x, y, s, o = {}) => d.text(x, y, s, { size: 0.42, anchor: 'start', weight: 600, color: COL.ink, ...o });
const note = (d, x, y, s, o = {}) => d.text(x, y, s, { size: 0.4, anchor: 'start', ...o });
// A step badge with a label to its right (or left, with anchor 'end').
const stepLab = (d, x, y, n, lines, { end = false } = {}) => {
  d.step(x, y, n);
  lines.forEach((s, i) => lab(d, end ? x - 0.65 : x + 0.65, y + 0.2 + i * 0.68, s, { anchor: end ? 'end' : 'start', weight: i ? 400 : 600, color: i ? COL.muted : COL.ink }));
};
const base = [key.shoe('L'), key.shoe('R'), key.puck()];
// Legend glyph for a front-to-back dangle (the kit's dangle key is side to side).
const dangleFB = (label = 'dangle') => [0.6, (x, y) => `<line x1="${u(x + 0.3)}" y1="${u(y - 0.38)}" x2="${u(x + 0.3)}" y2="${u(y + 0.38)}" stroke="${COL.ink}" stroke-width="2.4" marker-start="url(#ah-ink)" marker-end="url(#ah-ink)"/>`, label];
const u = (n) => Math.round(n * 30 * 10) / 10;
// Wall passing: the spot you pass at (solid ring), and other spots for other angles (dashed ring).
const spot = (d, x, y, { other = false } = {}) => d.raw(`<circle cx="${u(x)}" cy="${u(y)}" r="${u(0.35)}" fill="none" stroke="${COL.ink}" stroke-width="${other ? 2 : 2.5}"${other ? ' stroke-dasharray="4 3"' : ''}/>`);
const spotKey = (other = false) => [0.6, (x, y) => `<circle cx="${u(x + 0.3)}" cy="${u(y)}" r="${u(0.24)}" fill="none" stroke="${COL.ink}" stroke-width="${other ? 2 : 2.5}"${other ? ' stroke-dasharray="4 3"' : ''}/>`, other ? 'other spots' : 'spot on the wall'];
// Shooting off a pad: the area to check, and the goal line.
const checkKey = [1.1, (x, y) => `<line x1="${u(x)}" y1="${u(y)}" x2="${u(x + 1.1)}" y2="${u(y)}" stroke="${COL.ink}" stroke-width="2" stroke-dasharray="6 5"/>`, 'check this area'];
const goalKey = [1.1, (x, y) => `<line x1="${u(x)}" y1="${u(y)}" x2="${u(x + 1.1)}" y2="${u(y)}" stroke="#c33" stroke-width="5" stroke-opacity="0.7"/>`, 'goal line'];

// ------------------------------------------------------------------ 1. Dangles in front
const dangles = (() => {
  const d = diagram({
    title: 'Dangles in front',
    w: 22, h: H,
    desc: `${SEEN} One: stand with knees bent, the puck in front of you, looking up. Two: dangle the puck side to side in front of you, shifting your weight in your legs as it moves. Three: then with your top hand only. Four: then with your eyes closed.`,
  });
  const F = [11, 5.9];
  dangle(d, ...F); puck(d, ...F);
  blade(d, F[0] - 0.62, F[1], -90, 11.6, 8.5);
  player(d, 11, 10.4);
  stepLab(d, 1.2, 10.3, 1, ['knees bent,', 'look up']);
  stepLab(d, 4.6, 1.3, 2, ['side to side in front,', 'shifting your weight']);
  stepLab(d, 14.6, 4.6, 3, ['top hand only']);
  stepLab(d, 14.6, 6.0, 4, ['eyes closed']);
  return finish(d, [...base, key.dangle()]);
})();

// ------------------------------------------------------------------ 1b, 1c. Dangles on your left / right
// The puck beside you, level with the foot, dangled FRONT TO BACK along your side.
const sideDangle = (s) => {
  const side = s < 0 ? 'left' : 'right';
  const d = diagram({
    title: `Dangles on your ${side}`,
    w: 22, h: H,
    desc: `${SEEN} One: the puck beside you on your ${side}, level with your ${side} foot, knees bent and head up. Two: dangle it forwards and backwards along your side, shifting your weight in your legs as it moves. Three: then with your top hand only.`,
  });
  const P = [11 + s * 3.6, 8.4];
  dangle(d, ...P, { angle: 90 }); puck(d, ...P);
  // Blade across the front of the puck; the shaft runs forwards of the shoe, clear of it.
  blade(d, P[0] + s * 0.25, P[1] - 0.62, 0, 11 + s * 2.7, 5.4, { len: 1.7 });
  player(d, 11, 8.4);
  const x = s < 0 ? 0.9 : 21.1, end = s > 0;
  stepLab(d, x, 1.3, 1, [`level with your ${side} foot,`, 'head up'], { end });
  stepLab(d, x, 3.2, 2, ['forwards and backwards,', 'shifting your weight'], { end });
  stepLab(d, x, 5.1, 3, ['top hand only'], { end });
  return finish(d, [...base, dangleFB()]);
};
const dangleLeft = sideDangle(-1);
const dangleRight = sideDangle(1);

// ------------------------------------------------------------------ 2. Toe drag in and out
const toeDrag = (() => {
  const d = diagram({
    title: 'Toe drag in and out',
    w: 22, h: H,
    desc: `${SEEN} Drawn for a right-handed shot, whose forehand is on the right; a left-handed shot does it on the left. One: push the puck out on your forehand, forwards and to the right. Two: roll the blade over the puck so it is on the far side, and drag the puck back towards your feet with the toe. Three: tighten your grip and roll the blade back to catch it near your feet, then go again.`,
  });
  const S = [12.8, 7.6], O = [16.2, 3.7];
  const ux = O[0] - S[0], uy = O[1] - S[1], un = Math.hypot(ux, uy), nx = -uy / un * 0.45, ny = ux / un * 0.45;
  path(d, `M ${S[0] - nx + 0.4} ${S[1] - ny - 0.35} L ${O[0] - nx - 0.45} ${O[1] - ny + 0.35}`);
  path(d, `M ${O[0] + nx - 0.5} ${O[1] + ny + 0.5} Q ${(S[0] + O[0]) / 2 + nx * 3} ${(S[1] + O[1]) / 2 + ny * 3} ${S[0] + nx + 0.45} ${S[1] + ny - 0.2}`);
  puck(d, ...S, { ghost: true });
  puck(d, ...O);
  // Blade rolled over to the FAR side of the puck, square to the pull back to the feet.
  const ang = (Math.atan2(uy, ux) * 180) / Math.PI + 90;
  const bc = [O[0] + (ux / un) * 0.8, O[1] + (uy / un) * 0.8];
  const { toe } = blade(d, bc[0], bc[1], ang, 13.9, 8.6);
  d.text(toe[0] + 0.25, toe[1] - 0.3, 'toe', { size: 0.42, anchor: 'start', weight: 600, color: COL.ink });
  player(d, 11, 10.4);
  stepLab(d, 11.4, 3.2, 1, ['push out on', 'your forehand'], { end: true });
  stepLab(d, 17.2, 6.4, 2, ['drag it back', 'with the toe']);
  stepLab(d, 15.4, 9.9, 3, ['catch it,', 'go again']);
  note(d, 0.8, 1.0, 'drawn for a right-handed shot');
  return finish(d, [...base, key.ghost(), key.path()]);
})();

// ------------------------------------------------------------------ 3. Wide pull across
const widePull = (() => {
  const d = diagram({
    title: 'Wide pull across',
    w: 22, h: H,
    desc: `${SEEN} One: the puck out wide on your left. Two: pull it across in front of you and out as wide as you can on your right. Three: let the shaft slide through your bottom hand, or let go with it, to reach further. Four: bring it back to the left and pull across again.`,
  });
  const Lp = [2.8, 6.6], Rp = [19.2, 6.6];
  // Across and back run along the same straight line: two close parallel arrows, across (lower)
  // and back (upper), so each direction shows.
  path(d, `M 3.5 6.85 L 18.5 6.85`);
  path(d, `M 18.5 6.35 L 3.5 6.35`);
  puck(d, ...Lp);
  puck(d, ...Rp, { ghost: true });
  blade(d, Lp[0] - 0.75, Lp[1], -90, 9.6, 8.4);
  player(d, 11, 10.4);
  stepLab(d, 1.2, 3.9, 1, ['wide on your left']);
  stepLab(d, 20.8, 3.9, 2, ['as wide as you can', 'on your right'], { end: true });
  stepLab(d, 1.2, 10.3, 3, ['bottom hand loose:', 'let the shaft slide']);
  stepLab(d, 8.6, 4.9, 4, ['back to the left']);
  return finish(d, [...base, key.ghost(), key.path()]);
})();

// ------------------------------------------------------------------ 4. Dangle and pull across
const danglePull = (() => {
  const d = diagram({
    title: 'Dangle and pull across',
    w: 22, h: H,
    desc: `${SEEN} One: dangle out wide on your left, side to side. Two: pull the puck across in front of you and dangle out wide on your right. Three: pull it back across, and keep going.`,
  });
  const Lp = [3.4, 6.4], Rp = [18.6, 6.4];
  // Across and back on the same straight line, drawn as two close parallel arrows.
  path(d, `M 5.4 6.65 L 16.5 6.65`);
  path(d, `M 16.5 6.15 L 5.4 6.15`);
  dangle(d, ...Lp); puck(d, ...Lp);
  dangle(d, ...Rp); puck(d, ...Rp, { ghost: true });
  player(d, 11, 10.4);
  stepLab(d, 1.2, 3.9, 1, ['dangle out wide on your left']);
  stepLab(d, 20.8, 3.9, 2, ['pull across,', 'dangle out wide'], { end: true });
  stepLab(d, 8.0, 4.9, 3, ['pull it back across']);
  return finish(d, [...base, key.ghost(), key.path(), key.dangle()]);
})();

// ------------------------------------------------------------------ 5. Pull across and snap back
const snapBack = (() => {
  const d = diagram({
    title: 'Pull across and snap back',
    w: 22, h: H,
    desc: `${SEEN} Two pictures. Left picture: one, dangle out wide on your left, side to side; two, pull the puck across to your right, then snap it straight back to your left. Right picture: three, keep going, then start out wide on your right and snap back to the right.`,
  });
  divider(d, 11, 0.4, 11, H - 0.4);
  // s = +1 starts on the left, -1 starts on the right; ox = panel left edge.
  const panel = (ox, s) => {
    const cx = ox + 5.5, start = [cx - s * 3.9, 6.2], turn = cx + s * 4.0;
    // Across and snap back on the same straight line, drawn as two close parallel arrows.
    path(d, `M ${start[0] + s * 1.5} ${start[1] + 0.25} L ${turn} ${start[1] + 0.25}`);
    path(d, `M ${turn} ${start[1] - 0.25} L ${start[0] + s * 1.5} ${start[1] - 0.25}`);
    dangle(d, ...start, { w: 2.2 }); puck(d, ...start);
    d.text(turn - s * 0.2, 4.6, 'snap back', { size: 0.4, anchor: s > 0 ? 'end' : 'start', weight: 600, color: COL.ink });
    player(d, cx, 10.6, { gap: 1.2, len: 2.2, wid: 0.85 });
  };
  panel(0, 1);
  panel(11, -1);
  stepLab(d, 0.9, 1.1, 1, ['dangle out wide on your left']);
  stepLab(d, 0.9, 2.5, 2, ['pull right, snap back']);
  stepLab(d, 11.8, 1.1, 3, ['then start out wide', 'on your right']);
  return finish(d, [...base, key.path(), key.dangle()]);
})();

// ------------------------------------------------------------------ 6. Diagonal pulls
// The side spots are where the puck sits on "Dangles on your left / right": beside the foot, level
// with it, dangled front to back. No blade is drawn here: its shaft would cross the diagonal pull.
const diagonal = (() => {
  const d = diagram({
    title: 'Diagonal pulls',
    w: 22, h: H,
    desc: `${SEEN} Three spots: beside your left foot, in front of you further forward, and beside your right foot, so the pulls between them run on diagonals. At the side spots the dangle is front to back; in front it is side to side. One: dangle beside your left foot, pull the puck diagonally forwards to in front of you, dangle there, and take it back along the same line. Two: the same from beside your right foot. Three: link them, left, front, right, front, and back to the left, without stopping.`,
  });
  const Py = 8.4, Lp = [7.4, Py], F = [11, 3.3], Rp = [14.6, Py];
  // Out and back along one straight line, drawn as two close parallel arrows.
  const seg = (P, Q) => {
    const ux = Q[0] - P[0], uy = Q[1] - P[1], n = Math.hypot(ux, uy), k0 = 1.55 / n, k1 = 1.35 / n;
    const ox = (-uy / n) * 0.25, oy = (ux / n) * 0.25;
    const A = [P[0] + ux * k0, P[1] + uy * k0], B = [Q[0] - ux * k1, Q[1] - uy * k1];
    path(d, `M ${A[0] + ox} ${A[1] + oy} L ${B[0] + ox} ${B[1] + oy}`);
    path(d, `M ${B[0] - ox} ${B[1] - oy} L ${A[0] - ox} ${A[1] - oy}`);
  };
  seg(Lp, F); seg(Rp, F);
  dangle(d, ...Lp, { angle: 90 }); puck(d, ...Lp);
  dangle(d, ...F, { w: 2.2 }); puck(d, ...F, { ghost: true });
  dangle(d, ...Rp, { angle: 90 }); puck(d, ...Rp, { ghost: true });
  player(d, 11, Py);
  stepLab(d, 1.2, 9.3, 1, ['left to front,', 'and back']);
  stepLab(d, 20.8, 9.3, 2, ['right to front,', 'and back'], { end: true });
  stepLab(d, 4.4, 1.1, 3, ['then link: left, front, right, front, left']);
  return finish(d, [...base, key.ghost(), key.path(), dangleFB('dangle, front to back'), [...key.dangle().slice(0, 2), 'dangle, side to side']]);
})();

// ------------------------------------------------------------------ 7. V-shape
const vShape = (() => {
  const d = diagram({
    title: 'V-shape',
    w: 22, h: H,
    desc: `${SEEN} The puck traces a V with its point at your feet, drawn starting to the left; either side will do. One: push the puck as far out to one side and forwards as you can reach. Two: pull it right in to your feet, the bottom of the V. Three: push it as far out to the other side and forwards. Four: keep going, sliding your bottom hand to reach.`,
  });
  const A = [11, 7.7], Lf = [3.6, 2.7], Rt = [18.4, 2.7];
  const arm = (P, outSide) => {
    const ux = P[0] - A[0], uy = P[1] - A[1], n = Math.hypot(ux, uy);
    const nx = (-uy / n) * 0.38 * outSide, ny = (ux / n) * 0.38 * outSide;
    const at = (t, k) => [A[0] + ux * t + nx * k, A[1] + uy * t + ny * k];
    const [o1, o2, i1, i2] = [at(0.1, 1), at(0.88, 1), at(0.88, -1), at(0.1, -1)];
    path(d, `M ${o1[0]} ${o1[1]} L ${o2[0]} ${o2[1]}`);
    path(d, `M ${i1[0]} ${i1[1]} L ${i2[0]} ${i2[1]}`);
  };
  arm(Lf, 1); arm(Rt, -1);
  puck(d, ...A);
  puck(d, ...Lf, { ghost: true });
  puck(d, ...Rt, { ghost: true });
  player(d, 11, 10.6);
  stepLab(d, 1.2, 1.1, 1, ['far out and forwards']);
  stepLab(d, 4.2, 7.3, 2, ['right in to', 'your feet']);
  stepLab(d, 20.8, 1.1, 3, ['far out, the other side'], { end: true });
  stepLab(d, 14.6, 9.6, 4, ['keep going, sliding', 'your bottom hand']);
  return finish(d, [...base, key.ghost(), key.path()]);
})();

// ------------------------------------------------------------------ 8. Straight line, heel and toe
const heelToe = (() => {
  const d = diagram({
    title: 'Straight line, heel and toe',
    w: 22, h: H,
    desc: `${SEEN} One: the puck in front of your feet. Two: push it straight forwards with the heel of the blade. Three: pull it back along the same line with the toe; out and back are drawn as one line. Four: keep going, sliding your bottom hand as the puck goes out and back.`,
  });
  path(d, 'M 11 6.9 L 11 2.2', { both: true });
  puck(d, 11, 7.6);
  puck(d, 11, 1.5, { ghost: true });
  player(d, 11, 10.6);
  stepLab(d, 9.2, 7.7, 1, ['in front of your feet'], { end: true });
  stepLab(d, 10.0, 3.6, 2, ['push forwards', 'with the heel'], { end: true });
  stepLab(d, 12.0, 3.6, 3, ['pull it back', 'with the toe,', 'same line']);
  stepLab(d, 14.6, 9.6, 4, ['keep going, sliding', 'your bottom hand']);
  return finish(d, [...base, key.ghost(), key.path()]);
})();

// ------------------------------------------------------------------ 9. L-shape and R-shape
// The foot of the L runs across in front of your toes; the upright runs BACK from the corner,
// beside the shoe, to level with a point just behind your heels.
const lShape = (() => {
  const d = diagram({
    title: 'L-shape and R-shape',
    w: 22, h: H,
    desc: `${SEEN} Two pictures. Left picture, the L: one, the puck starts in front of your right foot; pull it across in front of your feet to the left, and stop at the corner. Two, pull it straight back along your left side, past your left foot, to just behind your heels, and stop. Three, pull it forwards to the corner, and stop. Four, pull it back across to where you started, and stop. Right picture: five, the R-shape, the mirror image: across to the right, back along your right side past your right foot, forwards to the corner, and back across.`,
  });
  divider(d, 11, 0.4, 11, H - 0.4);
  // s = +1: the L (corner front-left); -1: the R-shape, mirrored, corner front-right.
  const Py = 7.6, len = 2.0, Fy = 5.0, heel = Py + len / 2, End = heel + 0.7;
  const panel = (ox, s) => {
    const X = (x) => (s > 0 ? ox + x : ox + 11 - x);
    const cx = X(6.7), C = X(4.3), St = X(8.1);
    path(d, `M ${St - s * 0.75} ${Fy} L ${C + s * 0.75} ${Fy}`, { both: true });
    path(d, `M ${C} ${Fy + 0.75} L ${C} ${End - 0.75}`, { both: true });
    stopBar(d, St + s * 0.65, Fy, 0);
    stopBar(d, C - s * 0.62, Fy - 0.62, 45 * s, { len: 0.9 });
    stopBar(d, C, End + 0.65, 90);
    puck(d, St, Fy);
    puck(d, C, Fy, { ghost: true });
    puck(d, C, End, { ghost: true });
    player(d, cx, Py, { gap: 1.1, len, wid: 0.8 });
    return { C, St };
  };
  panel(0, 1);
  panel(11, -1);
  lab(d, 0.8, 1.4, 'L-shape');
  stepLab(d, 1.3, 3.2, 1, ['across, stop']);
  stepLab(d, 6.4, 3.2, 4, ['back across']);
  stepLab(d, 0.8, 6.9, 3, ['forwards', 'and stop']);
  stepLab(d, 0.7, 11.0, 2, ['back past your', 'heel, stop']);
  stepLab(d, 11.7, 1.2, 5, ['the R-shape, the mirror', 'on your right']);
  return finish(d, [...base, key.ghost(), key.path(), key.stop()]);
})();

// ------------------------------------------------------------------ 10. Figure of 8 round markers
// A figure of 8 drawn in either direction. Same curve as lib figure8() (lemniscate of Gerono);
// reverse = the whole 8 run the other way, anticlockwise round the right-hand (or far) lobe.
const fig8 = (d, cx, cy, A, B, { vertical = false, reverse = false } = {}) => {
  const raw = (t) => [A * Math.sin(t), -(B / 2) * Math.sin(2 * t)];
  const pt = (t) => { const [x, y] = raw(t); return vertical ? [cx + y, cy - x] : [cx + x, cy + y]; };
  const N = 120;
  let p = '';
  for (let i = 0; i <= N; i++) {
    const [x, y] = pt((i / N) * 2 * Math.PI);
    p += `${i ? 'L' : 'M'} ${x.toFixed(3)} ${y.toFixed(3)} `;
  }
  path(d, p + 'Z', { arrow: false });
  const k = reverse ? -1 : 1;
  for (const t of [Math.PI / 2 + 0.12 * k, (3 * Math.PI) / 2 + 0.12 * k, Math.PI / 4, (5 * Math.PI) / 4]) {
    const a = pt(t - 0.1 * k), b = pt(t);
    path(d, `M ${a[0].toFixed(3)} ${a[1].toFixed(3)} L ${b[0].toFixed(3)} ${b[1].toFixed(3)}`, { width: 3 });
  }
  return pt;
};
const figure8s = (() => {
  // Three rows (side by side, one in front, four in a square); left column clockwise round the
  // right-hand marker (far marker, right-hand pair), right column the whole 8 the other way.
  const R1 = 0, R2 = 10.6, R3 = 22.0, h = 35.0;
  const d = diagram({
    title: 'Figure of 8 round markers',
    w: 22, h,
    desc: `${SEEN} Six pictures in three rows; in each row the left picture is clockwise and the right picture is the whole 8 the other way, anti-clockwise. Top row: one, two markers side by side in front of you, the puck side to side in a figure of 8, one loop round each marker, clockwise round the right-hand marker, then anti-clockwise round it. Middle row: two, one marker in front of the other, the same 8 front to back, clockwise round the far marker, then anti-clockwise round it. Bottom row: three, four markers in a square, a pair on your left and a pair on your right, one behind the other, the 8 side to side with one loop round each pair, clockwise round the right-hand pair, then anti-clockwise round it, letting your bottom hand slide for the longer reach.`,
  });
  divider(d, 11, 0.4, 11, h - 0.4);
  divider(d, 0.4, R2, 21.6, R2);
  divider(d, 0.4, R3, 21.6, R3);
  const shoes = { gap: 1.0, len: 1.8, wid: 0.72 };
  const labels = (oy, n, what) => {
    stepLab(d, 0.9, oy + 1.0, n, ['clockwise round', what]);
    lab(d, 11.9 + 0.65, oy + 1.2, 'anti-clockwise round');
    lab(d, 11.9 + 0.65, oy + 1.88, what, { weight: 400, color: COL.muted });
  };
  for (const [cx, reverse] of [[5.5, false], [16.5, true]]) {
    // Side by side.
    marker(d, cx - 2.2, R1 + 5.4); marker(d, cx + 2.2, R1 + 5.4);
    const p1 = fig8(d, cx, R1 + 5.4, 4.1, 3.2, { reverse });
    puck(d, ...p1(2.3));
    player(d, cx, R1 + 9.0, shoes);
    // One in front of the other.
    marker(d, cx, R2 + 4.7); marker(d, cx, R2 + 7.3);
    const p2 = fig8(d, cx, R2 + 6.0, 2.6, 2.6, { vertical: true, reverse });
    puck(d, ...p2(2.3));
    player(d, cx, R2 + 10.1, shoes);
    // Four in a square.
    const cy = R3 + 6.6;
    for (const x of [cx - 2.9, cx + 2.9]) for (const y of [cy - 2.3, cy + 2.3]) marker(d, x, y);
    const p3 = fig8(d, cx, cy, 4.3, 7.0, { reverse });
    puck(d, ...p3(2.3));
    player(d, cx, R3 + 11.8, shoes);
  }
  labels(R1, 1, 'the right marker');
  labels(R2, 2, 'the far marker');
  labels(R3, 3, 'the right pair');
  return finish(d, [...base, key.marker(), key.path()]);
})();

// ------------------------------------------------------------------ 11. Walking slalom
const slalom = (() => {
  const d = diagram({
    title: 'Walking slalom',
    w: 22, h: H,
    desc: `${SEEN} Two pictures. Left picture: one, a line of flat markers on a clear floor running away from you; two, walk slowly forwards along the line with the markers passing between your feet, pulling the puck across and slightly forwards through each gap, so its path is a zig-zag, not a smooth curve; three, check the floor behind you is clear, then walk back along the line backwards, still zig-zagging. Right picture: four, the same with the markers on your left, stepping clear of them, then with them on your right.`,
  });
  divider(d, 11, 0.4, 11, H - 0.4);
  const ys = [3.6, 5.6, 7.6];
  const weave = (cx) => {
    // A zig-zag of straight pulls, across and slightly forwards, sharp at each side: the puck goes
    // out beside a marker, then through the gap to the other side of the next one.
    const w = 1.7;
    path(d, `M ${cx} 9.2 L ${cx - w} ${ys[2]} L ${cx + w} ${ys[1]} L ${cx - w} ${ys[0]} L ${cx + 0.7} 2.1`);
  };
  // Left picture: straddling the line.
  const c1 = 5.5;
  ys.forEach((y) => marker(d, c1, y));
  weave(c1);
  puck(d, c1, 9.2);
  player(d, c1, 10.9, { gap: 1.0, len: 1.8, wid: 0.72 });
  d.travel(9.5, 9.6, 9.5, 5.6);
  d.travel(2.0, 5.6, 2.0, 9.6);
  stepLab(d, 0.9, 1.0, 1, ['flat markers in a line']);
  d.step(9.5, 4.6, 2);
  d.step(2.0, 4.6, 3);
  note(d, 9.5, 10.9, 'forwards', { anchor: 'middle' });
  note(d, 2.05, 10.9, 'walk back', { anchor: 'middle' });
  note(d, 2.05, 11.55, 'backwards', { anchor: 'middle' });
  // Right picture: markers on your left.
  const c2 = 18.0, mx = 15.6;
  ys.forEach((y) => marker(d, mx, y));
  weave(mx);
  puck(d, mx, 9.2);
  player(d, c2, 10.9, { gap: 1.0, len: 1.8, wid: 0.72 });
  d.travel(20.6, 9.6, 20.6, 5.6);
  stepLab(d, 11.8, 1.0, 4, ['markers on your left,', 'then on your right']);
  return finish(d, [...base, key.marker(), key.path(), key.walk()]);
})();

// ------------------------------------------------------------------ 12. Wall passing
const wallPass = (() => {
  const d = diagram({
    title: 'Wall passing',
    w: 22, h: H,
    desc: `${SEEN} A wall across the top. One: face the wall and pass at a spot on it. Two: cushion every return, control it, and reset before the next pass. Three: take half your passes and receptions on the backhand. Four: vary the angle and distance, then return it first time, then shuffle sideways as you pass and receive.`,
  });
  d.raw(`<rect x="${0.5 * 30}" y="${0.5 * 30}" width="${21 * 30}" height="${0.8 * 30}" rx="4" fill="${COL.muted}" fill-opacity="0.35"/>`);
  d.text(20.9, 1.08, 'wall', { size: 0.42, anchor: 'end', weight: 600, color: COL.ink });
  spot(d, 11, 1.75);
  path(d, 'M 10.55 6.8 L 10.55 2.4');
  path(d, 'M 11.45 2.4 L 11.45 6.8');
  puck(d, 11, 7.5);
  // Other spots on the wall, for other angles.
  for (const x of [4.6, 17.4]) spot(d, x, 1.75, { other: true });
  player(d, 11, 10.4);
  d.travel(14.2, 11.6, 18.6, 11.6);
  stepLab(d, 9.6, 3.6, 1, ['pass at a spot'], { end: true });
  stepLab(d, 12.4, 5.0, 2, ['cushion it,', 'control, reset']);
  stepLab(d, 1.2, 9.6, 3, ['half of them', 'on the backhand']);
  stepLab(d, 14.6, 8.4, 4, ['vary the angle,', 'first time,', 'shuffle sideways']);
  return finish(d, [...base, key.path(), spotKey(), spotKey(true), [key.walk()[0], key.walk()[1], 'you shuffle']]);
})();

// ------------------------------------------------------------------ 13. Shooting off a pad
const padShot = (() => {
  const d = diagram({
    title: 'Shooting off a pad',
    w: 22, h: H,
    desc: `${SEEN} A net at the top, a shooting pad at the bottom. Drawn for a right-handed shot, standing side-on with the left shoulder towards the net and the puck beside the back foot; a left-handed shot mirrors it. One: check who is near, and what is behind and around the net, including windows and glass. Two: stand on the shooting pad, not concrete, with the net in front of you. Three: shoot into the net.`,
  });
  // The net from above: the goal line between the posts, the net bulging back behind it.
  const nl = 8.0, nr = 14.0, gl = 3.2;
  d.raw(`<path d="M ${nl * 30} ${gl * 30} C ${nl * 30} ${1.2 * 30} ${nr * 30} ${1.2 * 30} ${nr * 30} ${gl * 30}" fill="${COL.muted}" fill-opacity="0.12" stroke="${COL.muted}" stroke-width="2.5"/>`);
  d.raw(`<line x1="${nl * 30}" y1="${gl * 30}" x2="${nr * 30}" y2="${gl * 30}" stroke="#c33" stroke-width="5" stroke-opacity="0.7"/>`);
  d.text(11, 2.45, 'net', { size: 0.42, weight: 600, color: COL.ink });
  // Behind and around the net: the zone to check.
  d.raw(`<path d="M ${6.0 * 30} ${4.0 * 30} L ${6.0 * 30} ${0.45 * 30} L ${16.0 * 30} ${0.45 * 30} L ${16.0 * 30} ${4.0 * 30}" fill="none" stroke="${COL.ink}" stroke-width="2" stroke-dasharray="6 5"/>`);
  // The pad.
  d.raw(`<rect x="${6.4 * 30}" y="${6.2 * 30}" width="${9.2 * 30}" height="${5.8 * 30}" rx="6" fill="#fff" stroke="${COL.muted}" stroke-width="2"/>`);
  d.text(15.3, 11.7, 'shooting pad', { size: 0.4, anchor: 'end' });
  // Side-on stance, right-handed shot: toes point right, left (front) foot nearer the net.
  shoe(d, 9.6, 8.2, 0, 'L', { len: 2.6, wid: 1.0 });
  shoe(d, 9.6, 10.4, 0, 'R', { len: 2.6, wid: 1.0 });
  puck(d, 12.0, 9.9);
  blade(d, 12.0, 10.65, 0, 9.9, 9.3);
  path(d, 'M 12.0 9.3 L 11.3 3.8');
  stepLab(d, 0.9, 1.2, 1, ['check who is', 'near, and', 'behind the net']);
  stepLab(d, 1.2, 8.4, 2, ['on a pad,', 'not concrete']);
  stepLab(d, 13.0, 5.4, 3, ['shoot into the net']);
  note(d, 21.3, 11.6, 'right-handed shot', { anchor: 'end' });
  return finish(d, [...base, key.path(), checkKey, goalKey]);
})();

const card = (trains, steps, mistake, check = '') => ({ trains, steps, mistake, check });

const drills = [
  {
    id: 'office-stick-dangles', group: GROUP, title: 'Dangles in front', svg: dangles,
    card: card('Soft hands, and feeling the puck without looking at it.', [
      'Stand with your knees bent, the puck in front of you, and look up at the wall or the television.',
      'Dangle the puck side to side in front of you, shifting your weight in your legs as it moves.',
      'Then dangle with your top hand only.',
      'Then with your eyes closed.',
    ], 'Swinging the arms instead of working the wrists, which is slow and pulls you off balance.'),
  },
  {
    id: 'office-stick-dangle-left', group: GROUP, title: 'Dangles on your left', svg: dangleLeft,
    card: card('Handling the puck beside you, front to back.', [
      'Put the puck beside you on your left, level with your left foot. Bend your knees and keep your head up.',
      'Dangle it forwards and backwards along your side, shifting your weight in your legs as it moves.',
      'Then dangle with your top hand only.',
    ], 'Looking down at the puck instead of keeping your head up.'),
  },
  {
    id: 'office-stick-dangle-right', group: GROUP, title: 'Dangles on your right', svg: dangleRight,
    card: card('Handling the puck beside you, front to back.', [
      'Put the puck beside you on your right, level with your right foot. Bend your knees and keep your head up.',
      'Dangle it forwards and backwards along your side, shifting your weight in your legs as it moves.',
      'Then dangle with your top hand only.',
    ], 'Looking down at the puck instead of keeping your head up.'),
  },
  {
    id: 'office-stick-toe-drag', group: GROUP, title: 'Toe drag in and out', svg: toeDrag,
    card: card('Pulling the puck back to your feet past a reaching stick.', [
      'Push the puck out on your forehand.',
      'Roll the blade over it and drag it back towards your feet with the toe.',
      'Tighten your grip and roll the blade back to catch it, then go again.',
    ], 'Rushing the catch at the end, which is the hard part.',
    'Drawn for a right-handed shot (forehand on the right); the card names no side.'),
  },
  {
    id: 'office-stick-wide-pull', group: GROUP, title: 'Wide pull across', svg: widePull,
    card: card("Reach, and moving the puck across a defender's stick.", [
      'Put the puck out wide on your left.',
      'Pull it across in front of you and out as wide as you can on your right.',
      'Let the shaft slide through your bottom hand, or let go with it, to reach further.',
      'Bring it back to the left and pull across again.',
    ], 'Gripping the bottom hand tight, so it fights the top hand and shortens your reach.'),
  },
  {
    id: 'office-stick-dangle-pull', group: GROUP, title: 'Dangle and pull across', svg: danglePull,
    card: card('Carrying the puck from one side of your body to the other under control.', [
      'Dangle out wide on your left.',
      'Pull the puck across in front of you and dangle out wide on your right.',
      'Pull it back across and keep going.',
    ], 'A pull that stops in front of your feet instead of reaching the other side.'),
  },
  {
    id: 'office-stick-snap-back', group: GROUP, title: 'Pull across and snap back', svg: snapBack,
    card: card('A quick change of direction.', [
      'Dangle out wide on your left.',
      'Pull the puck across to your right, then snap it straight back to your left.',
      'Keep going, then start out wide on your right and snap back to the right.',
    ], 'Leaving your weight on one leg, so the snap back comes from the arms alone.'),
  },
  {
    id: 'office-stick-diagonal-pulls', group: GROUP, title: 'Diagonal pulls', svg: diagonal,
    card: card('Moving the puck on a diagonal, not only side to side.', [
      'Dangle front to back beside your left foot. Pull the puck diagonally forwards to in front of you, dangle there, and take it back.',
      'Do the same from beside your right foot.',
      'Then link them: left, front, right, front, and back to the left, without stopping.',
    ], 'A steady left-right rhythm, which a defender can read.'),
  },
  {
    id: 'office-stick-v-shape', group: GROUP, title: 'V-shape', svg: vShape,
    card: card('Pulling the puck right in to your feet and pushing it far out, using the whole reach.', [
      'Push the puck as far out to one side and forwards as you can reach.',
      'Pull it right in to your feet, the bottom of the V.',
      'Push it as far out to the other side and forwards.',
      'Keep going, sliding your bottom hand to reach.',
    ], 'A small V, the puck stopping short of your feet or short of full reach.',
    'Drawn starting to the left; the card says "one side".'),
  },
  {
    id: 'office-stick-heel-toe-line', group: GROUP, title: 'Straight line, heel and toe', svg: heelToe,
    card: card('Front-to-back control, which the toe drag needs.', [
      'Put the puck in front of your feet.',
      'Push it forwards in a straight line with the heel of the blade.',
      'Pull it back in the same line with the toe.',
      'Keep going, sliding your bottom hand as the puck goes out and back.',
    ], 'Letting the line curve, which means the blade is turning.'),
  },
  {
    id: 'office-stick-l-shape', group: GROUP, title: 'L-shape and R-shape', svg: lShape,
    card: card('Stopping the puck dead and changing direction.', [
      'Start with the puck in front of your right foot. Pull it across in front of your feet to the left, and stop. That is the corner of the L.',
      'Pull it straight back along your left side, past your left foot, to just behind your heels, and stop. For a right-handed shot, this pull and the next are on your backhand.',
      'Pull it forwards to the corner, and stop.',
      'Pull it back across to where you started, and stop.',
      'Then do the R-shape, the mirror image: across to the right, back past your right foot, forwards, and back across.',
    ], 'Rounding the corners instead of stopping.',
    'The L (left picture) and the R-shape (right picture) are each drawn out and back (double-headed). Stop bars at the start, the corner, and behind the heel.'),
  },
  {
    id: 'office-stick-figure-of-8', group: GROUP, title: 'Figure of 8 round markers', svg: figure8s,
    card: card('Handling round an obstacle on the forehand and backhand, and pushing the puck away and pulling it back.', [
      'Put two markers side by side in front of you, two to six feet apart. Take the puck side to side in a figure of 8, one loop round each marker: clockwise round the right-hand marker, then anti-clockwise round it (the whole 8 the other way).',
      'Move one marker so it sits in front of the other. Do the same front to back: clockwise round the far marker, then anti-clockwise round it.',
      'Set four markers in a square, a pair on your left and a pair on your right, one behind the other. Take the puck side to side, one loop round each pair: clockwise round the right-hand pair, then anti-clockwise round it, letting your bottom hand slide for the longer reach.',
    ], 'Looking down at the markers instead of keeping your head up.',
    'Owner, 1 Nov 2026: "clockwise / anti-clockwise round the right puck" is the whole 8 run one way, then the other. Owner, 2 Nov 2026: show every direction, so each 8 is drawn twice, clockwise (left) and anti-clockwise (right).'),
  },
  {
    id: 'office-stick-walking-slalom', group: GROUP, title: 'Walking slalom', svg: slalom,
    card: card('Handling while you move, and planning a route with your eyes.', [
      'Set a line of markers on a clear floor; for the between-the-legs version use flat ones you cannot turn an ankle on.',
      'Walk slowly forwards along the line as the markers pass between your legs. Pull the puck across and slightly forwards through each gap, so its path is a zig-zag, not a smooth curve.',
      'Check the floor behind you is clear, then walk back along the line backwards, still zig-zagging.',
      'Then do it with the markers on your left, then on your right, stepping clear of them.',
    ], 'Watching the puck instead of looking ahead to the next marker.',
    'Step 4 is drawn with the markers on your left only; the label says "then on your right".'),
  },
  {
    id: 'office-stick-wall-passing', group: GROUP, title: 'Wall passing', svg: wallPass,
    card: card('Receiving, which coaches call the neglected half of passing.', [
      'Face a wall or a rebounder and pass at a spot on it.',
      'Cushion every return, control it, and reset before the next pass.',
      'Take half your passes and receptions on the backhand.',
      'Vary the angle and distance, then return it first time, then shuffle sideways as you pass and receive.',
    ], 'Stopping the return dead instead of cushioning it.'),
  },
  {
    id: 'office-stick-pad-shooting', group: GROUP, title: 'Shooting off a pad', svg: padShot,
    card: card('Release, weight transfer and hand path; it cannot train when to shoot.', [
      'Check who is near and what is behind and around the net, including windows and glass.',
      'Stand on a shooting pad, not concrete, with the net in front of you.',
      'Shoot into the net.',
    ], 'Shooting off concrete, which wrecks the blade and teaches you to chop at the puck.',
    'Drawn side-on for a right-handed shot; the card names no side.'),
  },
];

export default drills;
