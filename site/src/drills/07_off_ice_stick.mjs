// Off-ice stick work (DRAFT, 1 Nov 2026), one drawing per card in "Practising on Your Own"
// section 4. Drawn from the off-ice pilot the owner approved on 1 Nov 2026; the style rulings
// are listed in lib/office_stick.mjs.
// Conventions, so a reviewer can check the geometry:
//   - Seen from ABOVE. You stand at the bottom of each panel facing UP the page, so your left is
//     the reader's left. Clockwise means clockwise as the reader sees it from above.
//   - Circled numbers are the card's step numbers, always. A card's Progression or Variations is
//     labelled in words without a circle.
//   - A figure of 8 is drawn twice, once in each direction: clockwise round the right-hand (or far)
//     marker, which by its shape takes the other loop anticlockwise, and then the whole 8 run the
//     other way. Each picture is named by its direction round ONE named marker, never by the
//     second loop on its own (the pilot labelled that loop anticlockwise, and it was wrong).
//   - One card needs a handedness the card does not give (Rebounder passing). It is drawn on the
//     forehand of a RIGHT-handed shot (blade on the right side) and says so.
import { COL } from './lib/draw.mjs';
import { diagram, player, puck, marker, blade, path, dangle, stopBar, divider, finish, key } from './lib/office_stick.mjs';

const GROUP = 'Off-ice stick work';
const SEEN = 'Seen from above, you at the bottom facing up the page: left and right are yours, and clockwise is as seen from above.';
const H = 12.6;
const lab = (d, x, y, s, o = {}) => d.text(x, y, s, { size: 0.42, anchor: 'start', weight: 600, color: COL.ink, ...o });
const note = (d, x, y, s, o = {}) => d.text(x, y, s, { size: 0.4, anchor: 'start', ...o });
// A step badge with a label to its right (or left, with anchor 'end').
// progLab: the same layout with no badge, for a card's Progression (not one of its steps).
const progLab = (d, x, y, lines, { end = false } = {}) => {
  lines.forEach((s, i) => lab(d, end ? x - 0.65 : x + 0.65, y + 0.2 + i * 0.68, s, { anchor: end ? 'end' : 'start', weight: i ? 400 : 600, color: i ? COL.muted : COL.ink }));
};
const stepLab = (d, x, y, n, lines, { end = false } = {}) => {
  d.step(x, y, n);
  lines.forEach((s, i) => lab(d, end ? x - 0.65 : x + 0.65, y + 0.2 + i * 0.68, s, { anchor: end ? 'end' : 'start', weight: i ? 400 : 600, color: i ? COL.muted : COL.ink }));
};
const base = [key.shoe('L'), key.shoe('R'), key.puck()];
// Legend glyph for a front-to-back dangle (the kit's dangle key is side to side).
const dangleFB = (label = 'dangle') => [0.6, (x, y) => `<line x1="${u(x + 0.3)}" y1="${u(y - 0.38)}" x2="${u(x + 0.3)}" y2="${u(y + 0.38)}" stroke="${COL.ink}" stroke-width="2.4" marker-start="url(#ah-ink)" marker-end="url(#ah-ink)"/>`, label];
const u = (n) => Math.round(n * 30 * 10) / 10;
// ------------------------------------------------------------------ 1. Dangles in front
const dangles = (() => {
  const d = diagram({
    title: 'Dangles in front',
    w: 22, h: H,
    desc: `${SEEN} One: stand with knees bent, the puck in front of you. Two: dangle the puck side to side in front of you, shifting your weight in your legs as it moves. Three: roll your wrists so the blade stays closed, tilted over the top of the puck, on the forehand and the backhand, and dangle as quietly as you can. Progression: eyes on the puck, to learn the movement; then head up; then head up, top hand only; then eyes closed, both hands.`,
  });
  const F = [11, 5.9];
  dangle(d, ...F); puck(d, ...F);
  blade(d, F[0] - 0.62, F[1], -90, 11.6, 8.5);
  player(d, 11, 10.4);
  stepLab(d, 1.2, 10.3, 1, ['knees bent,', 'puck in front']);
  stepLab(d, 4.6, 1.3, 2, ['side to side in front,', 'shifting your weight']);
  stepLab(d, 1.2, 7.4, 3, ['blade closed both ways,', 'as quiet as you can']);
  progLab(d, 13.6, 3.9, ['progression:', 'eyes on the puck,', 'head up,', 'head up, top hand only,', 'eyes closed, both hands']);
  return finish(d, [...base, key.dangle()]);
})();

// ------------------------------------------------------------------ 1b, 1c. Dangles on your left / right
// The puck beside you, level with the foot, dangled FRONT TO BACK along your side.
const sideDangle = (s) => {
  const side = s < 0 ? 'left' : 'right';
  const d = diagram({
    title: `Dangles on your ${side}`,
    w: 22, h: H,
    desc: `${SEEN} One: the puck beside you on your ${side}, level with your ${side} foot, knees bent. Two: dangle it forwards and backwards along your side, shifting your weight in your legs as it moves. Progression: eyes on the puck, to learn the movement; then head up; then head up, top hand only.`,
  });
  const P = [11 + s * 3.6, 8.4];
  dangle(d, ...P, { angle: 90 }); puck(d, ...P);
  // Blade across the front of the puck; the shaft runs forwards of the shoe, clear of it.
  blade(d, P[0] + s * 0.25, P[1] - 0.62, 0, 11 + s * 2.7, 5.4, { len: 1.7 });
  player(d, 11, 8.4);
  const x = s < 0 ? 0.9 : 21.1, end = s > 0;
  stepLab(d, x, 1.3, 1, [`level with your ${side} foot,`, 'knees bent'], { end });
  stepLab(d, x, 3.2, 2, ['forwards and backwards,', 'shifting your weight'], { end });
  progLab(d, x, 9.4, ['progression:', 'eyes on the puck,', 'head up,', 'head up, top hand only'], { end });
  return finish(d, [...base, dangleFB()]);
};
const dangleLeft = sideDangle(-1);
const dangleRight = sideDangle(1);

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
    desc: `${SEEN} Three spots: beside your left foot, in front of you further forward, and beside your right foot, so the pulls between them run on diagonals. At the side spots the dangle is front to back; in front it is side to side. One: dangle beside your left foot, pull the puck diagonally forwards to in front of you, dangle there, and take it back along the same line. Two: the same from beside your right foot. Progression: link them — left, front, right, front, and back to the left, without stopping.`,
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
  progLab(d, 4.4, 1.1, ['progression: link them — left, front, right, front, left']);
  return finish(d, [...base, key.ghost(), key.path(), dangleFB('dangle, front to back'), [...key.dangle().slice(0, 2), 'dangle, side to side']]);
})();

// ------------------------------------------------------------------ 7. V-shape
const vShape = (() => {
  const d = diagram({
    title: 'V-shape',
    w: 22, h: H,
    desc: `${SEEN} The puck traces a V with its point at your feet, drawn starting to the left; either side will do. Forehand only, never the backhand. One: push the puck as far out to one side and forwards as you can reach. Two: pull it right in to your feet, the bottom of the V. Three: push it as far out to the other side and forwards; on your backhand side, roll your wrists a little and lift the toe of the blade over the puck, as in a toe drag, so the forehand stays on it; that wrist roll is the key part of the drill. Four: keep going, and focus on sliding your bottom hand to reach.`,
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
  lab(d, 0.8, 9.9, 'forehand only:');
  note(d, 0.8, 10.58, 'on your backhand side, roll');
  note(d, 0.8, 11.26, 'your wrists and lift the toe');
  return finish(d, [...base, key.ghost(), key.path()]);
})();

// ------------------------------------------------------------------ 8. Straight line, heel and toe
const heelToe = (() => {
  const d = diagram({
    title: 'Straight line, heel and toe',
    w: 22, h: H,
    desc: `${SEEN} One: the puck in front of your feet; the forehand of the blade does every push and pull, never turned over to the backhand. Two: push it straight forwards with the heel of the blade. Three: pull it back along the same line with the toe, rolling your wrists a little and lifting the toe over the puck; out and back are drawn as one line. Four: keep going, sliding your bottom hand as the puck goes out and back.`,
  });
  path(d, 'M 11 6.9 L 11 2.2', { both: true });
  puck(d, 11, 7.6);
  puck(d, 11, 1.5, { ghost: true });
  player(d, 11, 10.6);
  stepLab(d, 9.2, 7.7, 1, ['in front of your feet'], { end: true });
  stepLab(d, 10.0, 3.6, 2, ['push forwards', 'with the heel'], { end: true });
  stepLab(d, 12.0, 3.6, 3, ['pull it back', 'with the toe,', 'same line']);
  lab(d, 0.8, 10.4, 'forehand only,');
  note(d, 0.8, 11.08, 'never the backhand');
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
    desc: `${SEEN} Two pictures. Left picture, the L: one, the puck starts in front of your right foot; pull it across in front of your feet to the left, and stop it dead at the corner, the blade square to the pull, as at every stop. Two, lay the blade across the far side of the puck and pull it straight back along your left side, past your left foot, to just behind your heels, and stop. Three, pull it forwards to the corner, and stop. Four, pull it back across to where you started, and stop. Right picture: five, the R-shape, the mirror image: across to the right, back along your right side past your right foot, forwards to the corner, and back across.`,
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
    // Corner (owner, 2 Nov 2026): the blade is square to each pull, never diagonal. Stopping the
    // pull across, it stands front to back on the far side of the puck; above the puck it lies
    // across, square to the pull down and to the stop at the end of the pull forwards.
    stopBar(d, C - s * 0.72, Fy, 0, { len: 0.8 });
    stopBar(d, C, Fy - 0.72, 90, { len: 0.8 });
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
    desc: `${SEEN} Six pictures in three rows; in each row the left picture is clockwise and the right picture is the whole 8 the other way, anti-clockwise. The top row is the drill; the middle and bottom rows are its progression. Top row: two markers side by side in front of you, the puck side to side in a figure of 8, one loop round each marker, clockwise round the right-hand marker, then anti-clockwise round it. Middle row, progression one: one marker in front of the other, the same 8 front to back, clockwise round the far marker, then anti-clockwise round it. Bottom row, progression two: four markers in a square, a pair on your left and a pair on your right, one behind the other, the 8 side to side with one loop round each pair, clockwise round the right-hand pair, then anti-clockwise round it, letting your bottom hand slide for the longer reach.`,
  });
  divider(d, 11, 0.4, 11, h - 0.4);
  divider(d, 0.4, R2, 21.6, R2);
  divider(d, 0.4, R3, 21.6, R3);
  const shoes = { gap: 1.0, len: 1.8, wid: 0.72 };
  const labels = (oy, tag, what) => {
    progLab(d, 0.25, oy + 1.0, [tag, `clockwise round ${what}`]);
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
  labels(R1, 'start: side by side', 'the right marker');
  labels(R2, 'progression 1: front to back', 'the far marker');
  labels(R3, 'progression 2: square of four', 'the right pair');
  return finish(d, [...base, key.marker(), key.path()]);
})();

// ------------------------------------------------------------------ 11. Walking slalom
const slalom = (() => {
  const d = diagram({
    title: 'Walking slalom',
    w: 22, h: H,
    desc: `${SEEN} Two pictures. Left picture: one, a line of flat markers on a clear floor running away from you, flat because you walk over them; two, walk slowly forwards along the line with the markers passing between your feet, pulling the puck across and slightly forwards through each gap, so its path is a zig-zag, not a smooth curve; three, check the floor behind you is clear, then walk back along the line backwards, still zig-zagging. Right picture, a variation: the same with the markers on your left, stepping clear of them, then with them on your right.`,
  });
  divider(d, 11, 0.4, 11, H - 0.4);
  const ys = [3.6, 5.6, 7.6];
  const weave = (cx, top = 2.1) => {
    // A zig-zag of straight pulls, across and slightly forwards, sharp at each side: the puck goes
    // out beside a marker, then through the gap to the other side of the next one.
    const w = 1.7;
    path(d, `M ${cx} 9.2 L ${cx - w} ${ys[2]} L ${cx + w} ${ys[1]} L ${cx - w} ${ys[0]} L ${cx + 0.7} ${top}`);
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
  progLab(d, 17.0, 1.0, ['variations:', 'markers on', 'your left,', 'then your right']);
  return finish(d, [...base, key.marker(), key.path(), key.walk()]);
})();

// ------------------------------------------------------------------ 12. Rebounder passing
// Drawn on the forehand of a right-handed shot (blade on the right); the card's progression then
// takes the backhand.
const rebounder = (() => {
  const d = diagram({
    title: 'Rebounder passing',
    w: 22, h: H,
    desc: `${SEEN} A rebounder at the top. One: face the rebounder and pass the puck into it. Two: catch the return with your blade out in front of you, drawn dashed, and pull the blade back as the puck hits it, to soften it; the arrow shows the blade giving back to where the puck goes dead, nearer your feet. Three: aim for the quietest catch you can, the puck dead on your blade with no clack. Progression: forehand until you get 20 clean passes in a row, then backhand until you get 20 clean passes in a row.`,
  });
  d.raw(`<rect x="${7.0 * 30}" y="${0.7 * 30}" width="${8.0 * 30}" height="${0.9 * 30}" rx="4" fill="${COL.muted}" fill-opacity="0.35"/>`);
  d.text(15.4, 1.35, 'rebounder', { size: 0.42, anchor: 'start', weight: 600, color: COL.ink });
  path(d, 'M 10.55 6.6 L 10.55 2.2');
  path(d, 'M 11.45 2.2 L 11.45 6.6');
  puck(d, 11, 7.3);
  // The blade out in front where the puck arrives (dashed), giving back to the catch nearer the feet.
  d.raw(`<line x1="${u(9.85)}" y1="${u(5.3)}" x2="${u(12.15)}" y2="${u(5.3)}" stroke="${COL.ink}" stroke-width="5" stroke-dasharray="7 5" stroke-linecap="round"/>`);
  // The give-back: from the dashed blade to the solid one, ending on it.
  d.raw(`<line x1="${u(12.0)}" y1="${u(5.5)}" x2="${u(12.0)}" y2="${u(7.45)}" stroke="${COL.muted}" stroke-width="3"/>` +
    `<path d="M ${u(11.78)} ${u(7.4)} L ${u(12.22)} ${u(7.4)} L ${u(12.0)} ${u(7.86)} Z" fill="${COL.muted}"/>`);
  // Right-handed shot: the shaft runs back and to the LEFT, towards the top (left) hand, as on the
  // module's other right-handed drawings (the old toe drag and shooting-pad drawings).
  blade(d, 11, 8.0, 0, 8.2, 8.6);
  player(d, 11, 10.4);
  stepLab(d, 9.6, 3.6, 1, ['pass into it'], { end: true });
  stepLab(d, 12.4, 4.4, 2, ['blade out in front,', 'pull it back as', 'the puck arrives']);
  stepLab(d, 1.2, 8.6, 3, ['quietest catch:', 'no clack']);
  progLab(d, 14.0, 8.6, ['progression:', 'forehand, 20 clean', 'in a row, then', 'backhand, 20 clean']);
  note(d, 0.8, 10.9, 'drawn on the forehand of');
  note(d, 0.8, 11.55, 'a right-handed shot');
  const ghostBlade = [1.1, (x, y) => `<line x1="${u(x)}" y1="${u(y)}" x2="${u(x + 1.1)}" y2="${u(y)}" stroke="${COL.ink}" stroke-width="5" stroke-dasharray="7 5" stroke-linecap="round"/>`, 'blade, out in front'];
  const giveKey = [1.1, (x, y) => `<line x1="${u(x)}" y1="${u(y)}" x2="${u(x + 0.8)}" y2="${u(y)}" stroke="${COL.muted}" stroke-width="3"/><path d="M ${u(x + 0.75)} ${u(y - 0.2)} L ${u(x + 0.75)} ${u(y + 0.2)} L ${u(x + 1.1)} ${u(y)} Z" fill="${COL.muted}"/>`, 'blade gives back'];
  return finish(d, [...base, key.path(), ghostBlade, giveKey]);
})();

// `progression` (harder stages, in order) / `variations` (alternatives): a string for one line or an
// array for a numbered list, as the page's **Progression:** / **Variations:**; `routine`: the line
// after it, where the card has one.
const card = (trains, steps, mistake, check = '', { progression, variations, routine } = {}) => ({ trains, steps, progression, variations, routine, mistake, check });

const drills = [
  {
    id: 'office-stick-dangles', group: GROUP, title: 'Dangles in front', svg: dangles,
    card: card('Soft hands, and feeling the puck without looking at it.', [
      'Stand with your knees bent and the puck in front of you.',
      'Dangle the puck side to side in front of you, shifting your weight in your legs as it moves.',
      'Roll your wrists so the blade stays closed on both the forehand and the backhand, and dangle as quietly as you can.',
    ], 'Chopping at the puck so it clacks, or swinging the arms instead of working the wrists, which is slow and pulls you off balance.', '', {
      progression: [
        'Eyes on the puck, to learn the movement.',
        'Head up: look at the wall or the television.',
        'Head up, top hand only.',
        'Eyes closed, both hands.',
      ],
      routine: 'Once you have all four, a good routine: head up with both hands, then top hand only, then eyes closed with both hands.',
    }),
  },
  {
    id: 'office-stick-dangle-left', group: GROUP, title: 'Dangles on your left', svg: dangleLeft,
    card: card('Handling the puck beside you, front to back.', [
      'Put the puck beside you on your left, level with your left foot, and bend your knees.',
      'Dangle it forwards and backwards along your side, shifting your weight in your legs as it moves.',
    ], 'Still looking down at the puck once you know the movement.', '', {
      progression: [
        'Eyes on the puck, to learn the movement.',
        'Head up.',
        'Head up, top hand only.',
      ],
    }),
  },
  {
    id: 'office-stick-dangle-right', group: GROUP, title: 'Dangles on your right', svg: dangleRight,
    card: card('Handling the puck beside you, front to back.', [
      'Put the puck beside you on your right, level with your right foot, and bend your knees.',
      'Dangle it forwards and backwards along your side, shifting your weight in your legs as it moves.',
    ], 'Still looking down at the puck once you know the movement.', '', {
      progression: [
        'Eyes on the puck, to learn the movement.',
        'Head up.',
        'Head up, top hand only.',
      ],
    }),
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
    ], 'A steady left-right rhythm, which a defender can read.', '', {
      progression: 'Link them — left, front, right, front, and back to the left, without stopping.',
    }),
  },
  {
    id: 'office-stick-v-shape', group: GROUP, title: 'V-shape', svg: vShape,
    card: card('Pulling the puck right in to your feet and pushing it far out, using the whole reach.', [
      'Push the puck as far out to one side and forwards as you can reach. Use the forehand of the blade the whole way, never the backhand.',
      'Pull it right in to your feet, the bottom of the V.',
      'Push it as far out to the other side and forwards. On your backhand side, roll your wrists a little and lift the toe of the blade over the puck, as in a toe drag, so the forehand stays on it. That wrist roll is the key part of the drill.',
      'Keep going, and focus on sliding your bottom hand to reach.',
    ], 'Turning the blade over to the backhand on the far side, or a small V, the puck stopping short of your feet or short of full reach.',
    'Drawn starting to the left; the card says "one side".'),
  },
  {
    id: 'office-stick-heel-toe-line', group: GROUP, title: 'Straight line, heel and toe', svg: heelToe,
    card: card('Front-to-back control, which the toe drag needs.', [
      'Put the puck in front of your feet. The forehand of the blade does every push and pull; never turn it over to the backhand.',
      'Push it forwards in a straight line with the heel of the blade.',
      'Pull it back in the same line with the toe, rolling your wrists a little and lifting the toe over the puck.',
      'Keep going, sliding your bottom hand as the puck goes out and back.',
    ], 'Letting the line curve, which means the blade is turning.'),
  },
  {
    id: 'office-stick-l-shape', group: GROUP, title: 'L-shape and R-shape', svg: lShape,
    card: card('Stopping the puck dead and changing direction.', [
      'Start with the puck in front of your right foot. Pull it across in front of your feet to the left, and stop it dead, the blade square to the pull, as at every stop. That is the corner of the L.',
      'Lay the blade across the far side of the puck and pull it straight back along your left side, past your left foot, to just behind your heels, and stop. For a right-handed shot, this pull and the next are on your backhand.',
      'Pull it forwards to the corner, and stop.',
      'Pull it back across to where you started, and stop.',
      'Then do the R-shape, the mirror image: across to the right, back past your right foot, forwards, and back across.',
    ], 'Rounding the corners instead of stopping.',
    'The L (left picture) and the R-shape (right picture) are each drawn out and back (double-headed). Stop bars at the start, the corner, and behind the heel.'),
  },
  {
    id: 'office-stick-figure-of-8', group: GROUP, title: 'Figure of 8 round markers', svg: figure8s,
    card: card('Handling round an obstacle on the forehand and backhand, and pushing the puck away and pulling it back.', [
      'Put two markers side by side in front of you, two to six feet apart.',
      'Take the puck side to side in a figure of 8, one loop round each marker: clockwise round the right-hand marker, then anti-clockwise round it (the whole 8 the other way).',
    ], 'Looking down at the markers instead of keeping your head up.',
    'Owner, 1 Nov 2026: "clockwise / anti-clockwise round the right puck" is the whole 8 run one way, then the other. Owner, 2 Nov 2026: show every direction, so each 8 is drawn twice, clockwise (left) and anti-clockwise (right). The top row is steps 1-2; the middle and bottom rows are the two progression stages, labelled in words.', {
      progression: [
        'Move one marker so it sits in front of the other. Do the same front to back: clockwise round the far marker, then anti-clockwise round it.',
        'Set four markers in a square, a pair on your left and a pair on your right, one behind the other. Take the puck side to side, one loop round each pair: clockwise round the right-hand pair, then anti-clockwise round it, letting your bottom hand slide for the longer reach.',
      ],
    }),
  },
  {
    id: 'office-stick-walking-slalom', group: GROUP, title: 'Walking slalom', svg: slalom,
    card: card('Handling while you move, and planning a route with your eyes.', [
      'Set a line of markers on a clear floor. Use flat ones you cannot turn an ankle on, since you walk over them.',
      'Walk slowly forwards along the line as the markers pass between your legs. Pull the puck across and slightly forwards through each gap, so its path is a zig-zag, not a smooth curve.',
      'Check the floor behind you is clear, then walk back along the line backwards, still zig-zagging.',
    ], 'Watching the puck instead of looking ahead to the next marker.',
    'The variation is drawn with the markers on your left only; the label says "then your right".', {
      variations: 'Do it with the markers on your left, then on your right, stepping clear of them.',
    }),
  },
  {
    id: 'office-stick-rebounder-passing', group: GROUP, title: 'Rebounder passing', svg: rebounder,
    card: card('Receiving, which coaches call the more neglected half of passing. A rebounder gives you hundreds of receptions in ten minutes.', [
      'Face a rebounder and pass the puck into it.',
      'Catch the return with your blade out in front of you, and pull the blade back as the puck hits it, to soften it.',
      'Aim for the quietest catch you can: the puck goes dead on your blade, with no clack.',
    ], 'Holding the blade still, so the puck clacks off it and bounces away.',
    'Owner, 2 Nov 2026: replaces Wall passing. Drawn on the forehand of a right-handed shot; the card names no side.', {
      progression: [
        'Forehand, until you get 20 clean passes in a row.',
        'Then backhand, until you get 20 clean passes in a row.',
      ],
    }),
  },
];

export default drills;
