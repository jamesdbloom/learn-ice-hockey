// Turns (part B): tight turns, jam turns, punch jams, the punch-turn progression (steps 1-3 and the
// figure eight), small-circle pivots.
// DRAFT, 22 Oct 2026. Top-down, feet; x right, y down. Travelling +x, the skater's LEFT is UP (-y).
// All one-way drills are drawn as a LEFT (anticlockwise) turn, so the LEFT foot is the inside foot.
import { diagram } from '../lib/draw.mjs';

const K = 0.5523; // cubic-Bezier factor for a quarter circle

// A U-turn path: in along y = cy + r from x0, round the right-hand side of (cx, cy), out along y = cy - r to x1.
const uTurn = (cx, cy, r, x0, x1) => {
  const k = K * r;
  return `M ${x0} ${cy + r} L ${cx} ${cy + r} ` +
    `C ${cx + k} ${cy + r} ${cx + r} ${cy + k} ${cx + r} ${cy} ` +
    `C ${cx + r} ${cy - k} ${cx + k} ${cy - r} ${cx} ${cy - r} L ${x1} ${cy - r}`;
};

// Two-foot tight turn around a cone (shared by tight turn and punch turn).
function tightTurnBase(d, { exitX, arrow = true, scissor = false }) {
  const cx = 14.5, cy = 5.5;
  d.cone(cx, cy);
  d.track(uTurn(cx, cy, 1.9, 2.5, exitX), 'L', { arrow, edge: 'OUT', edgeAt: [cx + 0.6, cy + 1.05] });
  d.track(uTurn(cx, cy, 2.8, 2.5, exitX), 'R', { arrow, edge: 'IN', edgeAt: [cx + 3.6, cy + 1.2] });
  if (!scissor) {
    // 1: approach, both feet down, left foot on the inside (up the page).
    d.skate(6, cy + 1.9, 0, 'L');
    d.skate(5.7, cy + 2.8, 0, 'R');
    d.step(4, cy + 2.35, 1);
    // 2: the turn. Inside (left) foot leads, both blades lean into the cone.
    d.skate(cx + 1.9, cy - 0.3, -90, 'L');
    d.skate(cx + 2.8, cy + 0.15, -90, 'R');
    d.step(cx + 4.2, cy - 0.3, 2);
  } else {
    // Scissor stance: the inside (left) skate well AHEAD of the outside (right) skate, both on the arc.
    d.skate(7.6, cy + 1.9, 0, 'L');
    d.skate(5.0, cy + 2.8, 0, 'R');
    d.step(3.4, cy + 2.35, 1);
    // On the turn (anticlockwise; position angle t, heading t - 90): left foot at t = -45, right at t = 25.
    const at = (r, t) => [cx + r * Math.cos(t * Math.PI / 180), cy + r * Math.sin(t * Math.PI / 180)];
    const [lx, ly] = at(1.9, -45), [rx, ry] = at(2.8, 25);
    d.skate(lx, ly, -135, 'L');
    d.skate(rx, ry, -65, 'R');
    d.step(cx + 4.3, cy - 0.3, 2);
    d.text(cx - 0.8, cy - 0.1, 'scissor: inside foot', { size: 0.42, anchor: 'end' });
    d.text(cx - 0.8, cy + 0.5, 'well ahead', { size: 0.42, anchor: 'end' });
  }
  return { cx, cy };
}

const tightTurn = (() => {
  const d = diagram({
    title: 'Tight turn',
    desc: 'Skate in on two feet in a scissor stance, the inside (left) foot well ahead of the outside foot. Turn hard left around a cone with the inside (left) foot leading on its outside edge and the outside (right) foot on its inside edge, and come out the way you came. Repeat turning right.',
  });
  const { cy } = tightTurnBase(d, { exitX: 3, scissor: true });
  // 3: out of the turn, both feet down, travelling back to the left.
  d.skate(8, cy - 1.9, 180, 'L');
  d.skate(8.3, cy - 2.8, 180, 'R');
  d.step(6.2, cy - 2.35, 3);
  d.travel(9, 10.2, 13, 10.2);
  d.travel(9, 0.8, 5, 0.8);
  return d.svg();
})();

const punchTurn = (() => {
  const d = diagram({
    title: 'Punch turn',
    desc: 'A tight turn left around a cone, finished with a hard crossover push out of the turn: the right foot crosses over in front of the left. Repeat turning right.',
  });
  const { cy } = tightTurnBase(d, { exitX: 12, arrow: false });
  // 3: the punch. Right (outside) foot lifts and crosses over in front of the left (to the left foot's
  // left side, which is DOWN the page when travelling left); the left foot pushes underneath.
  d.track('M 12 3.6 L 8.6 3.6', 'L');
  d.skate(10.6, cy - 1.9, 180, 'L');
  d.text(9.4, 2.15, 'push under', { color: '#1f6fd1', size: 0.45, weight: 600 });
  d.track('M 12 2.7 C 11 2.7 10.6 4.35 9.6 4.35', 'R', { air: true, arrow: false });
  d.skate(9.0, cy - 1.15, 180, 'R');
  d.track('M 8.2 4.35 L 5.4 4.35', 'R');
  d.text(9.0, cy - 0.15, 'cross over', { color: '#e0731b', size: 0.45, weight: 600 });
  d.step(12.6, cy - 0.6, 3);
  // 4: away at speed.
  d.step(4.4, 4.0, 4);
  d.text(4.4, 5.2, 'stride away', { size: 0.45 });
  d.travel(9, 10.2, 13, 10.2);
  d.travel(9, 0.8, 5, 0.8);
  return d.svg();
})();

// The jam: a very tight two-foot turn where the blades skid and bite (snow spray on the outside).
function jamBase(d, { exitX, arrow = true }) {
  const cx = 14.5, cy = 5.5;
  d.cone(cx, cy);
  d.track(uTurn(cx, cy, 1.0, 8.6, exitX), 'L', { arrow });
  d.track(uTurn(cx, cy, 1.8, 8.6, exitX), 'R', { arrow });
  // 1: approach with speed.
  d.skate(10.8, cy + 1.0, 0, 'L');
  d.skate(10.5, cy + 1.8, 0, 'R');
  d.step(9.2, cy + 1.4, 1);
  // 2: the jam. Blades swing past the line of travel and bite: snow sprays to the outside.
  d.skate(cx + 1.1, cy + 0.1, -125, 'L');
  d.skate(cx + 1.9, cy + 0.35, -125, 'R');
  d.spray(cx + 2.5, cy - 0.1, 10, { n: 5, len: 1.1, spread: 70 });
  d.text(cx + 4.9, cy + 1.7, 'skates bite', { size: 0.45 });
  d.step(cx + 2.3, cy - 1.8, 2);
  return { cx, cy };
}

const jamTurn = (() => {
  const d = diagram({
    title: 'Jam turn',
    desc: 'Skate in fast, then turn very sharply left around a cone so both skates dig in and spray snow, nearly stopping, and drive back out the way you came. Repeat turning right.',
  });
  const { cy } = jamBase(d, { exitX: 4 });
  // 3: drive out of the jam, back the way you came.
  d.skate(10, cy - 1.0, 180, 'L');
  d.skate(11, cy - 1.8, -155, 'R', { label: 'push' });
  d.step(8.4, cy - 1.4, 3);
  d.travel(8, 10.2, 12, 10.2);
  d.travel(9, 0.8, 5, 0.8);
  return d.svg();
})();

const punchJam = (() => {
  const d = diagram({
    title: 'Punch jam',
    desc: 'A jam turn left around a cone, skates biting and spraying snow, followed straight away by a hard crossover punch out: the right foot crosses over in front of the left. Repeat turning right.',
  });
  const { cy } = jamBase(d, { exitX: 13, arrow: false });
  // 3: the punch, straight out of the jam: right foot crosses over in front of (below) the left.
  d.track('M 13 4.5 L 9.6 4.5', 'L');
  d.skate(11.4, cy - 1.0, 180, 'L');
  d.text(11.4, 3.0, 'push under', { color: '#1f6fd1', size: 0.45, weight: 600 });
  d.track('M 13 3.7 C 12 3.7 11.4 5.3 10.4 5.3', 'R', { air: true, arrow: false });
  d.skate(9.8, 5.3, 180, 'R');
  d.track('M 9 5.3 L 6.2 5.3', 'R');
  d.text(7.0, 6.35, 'cross over', { color: '#e0731b', size: 0.45, weight: 600 });
  d.step(13.2, 2.4, 3);
  // 4: explode away.
  d.step(4.6, 4.3, 4);
  d.text(4.6, 3.3, 'stride away', { size: 0.45 });
  d.travel(8, 10.2, 12, 10.2);
  d.travel(9, 0.8, 5, 0.8);
  return d.svg();
})();

// Punch-turn progression (owner's source, 28 Oct 2026: Hockey Tutorial, "Must have skating technique -
// Punch Turn Tutorial", 1:50-3:50). The punch turn there is: open the INSIDE foot and dive onto its OUTSIDE
// edge, the outside foot rides its inside edge and pulls you round, then cross over at the apex and explode out.
// Drawn turning LEFT, so the left foot is the inside foot and opens to point across the path (up the page).
const PUCK = (d, x, y) => d.raw(`<circle cx="${(x * 30).toFixed(1)}" cy="${(y * 30).toFixed(1)}" r="9" fill="#111"/>`);

function punchApproach(d) {
  d.track('M 2 5.0 L 9.6 5.0', 'L');
  d.track('M 2 6.0 L 9.2 6.0', 'R');
  d.skate(5.0, 5.0, 0, 'L');
  d.skate(4.7, 6.0, 0, 'R');
  d.step(3.2, 5.5, 1);
  d.travel(2, 10.2, 8, 10.2);
}

// Step 1: T-stop shape, the left foot turned out onto its outside edge, the right foot down behind it in a T.
const punchStep1 = (() => {
  const d = diagram({
    title: 'Punch turn step 1: T-stop onto the outside edge',
    desc: 'Skate forward slowly. Turn the left foot out to point across your path and lean back onto its outside edge, curving to the left, with the right foot set down behind it in a T as a safety foot. Then the other way.',
  });
  punchApproach(d);
  d.track('M 9.6 5.0 C 11.6 5.0 11.8 3.6 11.2 2.2', 'L');
  d.skate(11.55, 4.1, -90, 'L');
  d.tag(12.7, 3.6, 'OUT', 'L');
  d.skate(11.55, 5.25, 0, 'R', { len: 1.3 });
  d.spray(12.45, 5.45, 20, { n: 4, len: 0.6, spread: 40 });
  d.step(13.6, 2.4, 2);
  d.text(14.2, 2.6, 'lean back onto the outside edge', { size: 0.42, anchor: 'start' });
  d.step(13.6, 6.6, 3);
  d.text(14.2, 6.8, 'back foot down in a T: your safety', { size: 0.42, anchor: 'start' });
  return d.svg();
})();

// Step 2: the safety foot comes away: jump onto the outside edge, back foot hovering ready.
const punchStep2 = (() => {
  const d = diagram({
    title: 'Punch turn step 2: jump onto the outside edge',
    desc: 'Skate forward slowly. Jump onto the left foot turned out across your path, landing on its outside edge with a bent knee and digging in as it curves left. The right foot stays just off the ice behind it, ready to touch down. Then the other way.',
  });
  punchApproach(d);
  d.track('M 9.6 5.0 Q 10.6 5.4 11.3 4.5', 'L', { air: true, arrow: false });
  d.track('M 11.4 4.4 C 11.8 3.6 11.6 2.8 11.0 2.1', 'L');
  d.skate(11.55, 4.1, -90, 'L');
  d.tag(12.7, 3.6, 'OUT', 'L');
  d.skate(12.4, 6.1, 0, 'R', { len: 1.3, lifted: true });
  d.step(13.6, 2.4, 2);
  d.text(14.2, 2.6, 'jump onto it and dig in, knee bent', { size: 0.42, anchor: 'start' });
  d.step(13.6, 6.6, 3);
  d.text(14.2, 6.8, 'back foot off the ice,', { size: 0.42, anchor: 'start' });
  d.text(14.2, 7.4, 'ready to touch down', { size: 0.42, anchor: 'start' });
  return d.svg();
})();

// Step 3: going straight forward with speed, dive onto the outside edge and keep the momentum forward.
const punchStep3 = (() => {
  const d = diagram({
    title: 'Punch turn step 3: dive onto the edge going forward',
    desc: 'Skate straight forward with some speed. Without slowing, open the left foot and dive onto its outside edge so it carries you round to the left, keeping your weight moving forward rather than sliding sideways. The right foot stays just off the ice. Then the other way.',
  });
  punchApproach(d);
  d.track('M 9.6 5.0 C 13.2 5.0 15.4 4.6 16.8 2.4', 'L');
  d.skate(13.4, 4.85, -20, 'L');
  d.tag(13.4, 3.9, 'OUT', 'L');
  d.skate(12.0, 6.0, -10, 'R', { len: 1.3, lifted: true });
  d.step(15.6, 5.2, 2);
  d.text(16.2, 5.4, 'dive onto the edge,', { size: 0.42, anchor: 'start' });
  d.text(16.2, 6.0, 'momentum still forward', { size: 0.42, anchor: 'start' });
  return d.svg();
})();

// Step 4: figure eight round two pucks, punching and turning both ways; crossover at the apex, explode out.
const punchFigure8 = (() => {
  const d = diagram({
    title: 'Punch turns: figure eight round two pucks',
    desc: 'A figure eight round two pucks, turning left round one and right round the other. Into each turn, dive onto the outside edge of the inside foot while the outside foot rides its inside edge and pulls you round. At the far point of the turn, cross over and explode out towards the other puck. Then add a puck on your stick.',
  });
  const r = 2.8, cy = 5.5, c1 = 8.2, c2 = 13.8;
  d.track(circ(c1, cy, r, 0, -330), 'ink', { width: 2.5 });
  d.track(circ(c2, cy, r, 180, 510), 'ink', { width: 2.5 });
  PUCK(d, c1, cy);
  PUCK(d, c2, cy);
  // Left loop, anticlockwise from the middle. Point at screen angle a; heading (sin a, -cos a).
  const P = (a) => [c1 + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  const hd = (a) => Math.atan2(-Math.cos(a * Math.PI / 180), Math.sin(a * Math.PI / 180)) * 180 / Math.PI;
  const toC = (a, k) => [-Math.cos(a * Math.PI / 180) * k, -Math.sin(a * Math.PI / 180) * k];
  // 1 Entry (a = -45): inside (left) foot on its OUTSIDE edge nearer the puck; outside (right) foot BITES on its
  // INSIDE edge, snow spraying outward, and pulls you round.
  {
    const a = -45, [x, y] = P(a), [ix, iy] = toC(a, 0.55);
    d.skate(x + ix, y + iy, hd(a), 'L', { len: 1.2 });
    d.skate(x - ix, y - iy, hd(a), 'R', { len: 1.2 });
    d.spray(x - ix * 1.9, y - iy * 1.9, a, { n: 5, len: 0.7, spread: 50 });
    d.tag(x + ix * 2.6, y + iy * 2.6, 'OUT', 'L');
    d.tag(x - ix * 3.4, y - iy * 3.4 - 0.2, 'IN', 'R');
    d.step(x + 1.7, y - 0.6, 1);
  }
  // 2 Apex (a = -180): the outside (right) foot crosses over in front of the inside foot.
  {
    const a = -180, [x, y] = P(a);
    d.skate(x + 0.5, y - 0.3, 90, 'L', { len: 1.2 });
    d.track(`M ${x - 0.6} ${y - 1.2} Q ${x - 0.9} ${y + 0.4} ${x + 0.2} ${y + 0.9}`, 'R', { air: true, width: 2.2 });
    d.skate(x + 0.35, y + 1.2, 60, 'R', { len: 1.2 });
    d.step(x - 1.5, y, 2);
  }
  // 3 Exit (a = -300): explode out towards the other puck.
  {
    const [x, y] = P(-300);
    d.step(x + 1.0, y + 0.2, 3);
  }
  // Key, top-left, in reading order.
  d.text(0.6, 9.2, '1 bite: outside foot digs in on its inside edge and pulls you round', { size: 0.4, anchor: 'start' });
  d.text(0.6, 9.75, '   (inside foot on its outside edge)', { size: 0.4, anchor: 'start' });
  d.text(0.6, 10.3, '2 cross over at the apex · 3 explode out to the other puck', { size: 0.4, anchor: 'start' });
  d.text(c2 + 2.4, 1.2, 'same, turning the other way;', { size: 0.42 });
  d.text(c2 + 2.4, 1.8, 'then carry a puck', { size: 0.42 });
  return d.svg();
})();

// Small circle: forward half, pivot to backward, backward half, step back to forward.
// Drawn for an anticlockwise circle, then mirrored (x flipped, feet swapped) for clockwise.
// Circular arc as cubic Beziers in FEET, from screen angle a0 to a1 (degrees, y down).
function circ(cx, cy, r, a0, a1) {
  const n = Math.max(1, Math.ceil(Math.abs(a1 - a0) / 90)), da = (a1 - a0) / n;
  const k = (4 / 3) * Math.tan((da * Math.PI / 180) / 4) * r;
  const P = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  const r2 = (v) => Math.round(v * 100) / 100;
  let [x, y] = P(a0);
  let d = `M ${r2(x)} ${r2(y)}`;
  for (let i = 0; i < n; i++) {
    const s = (a0 + i * da) * Math.PI / 180, e = (a0 + (i + 1) * da) * Math.PI / 180;
    const [x1, y1] = P(a0 + (i + 1) * da);
    d += ` C ${r2(x - k * Math.sin(s))} ${r2(y + k * Math.cos(s))} ${r2(x1 + k * Math.sin(e))} ${r2(y1 - k * Math.cos(e))} ${r2(x1)} ${r2(y1)}`;
    [x, y] = [x1, y1];
  }
  return d;
}

// Small circle, the skater FACING UP THE PAGE the whole time (toes always point up-ish).
// Left circle anticlockwise: forward up the right side, sideways-left over the top (pivot forward to
// backward on the toes, small hop), backward down the left side, sideways-right along the bottom
// (step from the outside leg going backward onto the other leg going forward).
// The right circle is the mirror image: clockwise.
function circleDrill(d, cx, cy, r, mirror) {
  const X = (x) => (mirror ? 2 * cx - x : x);
  const A = (a) => (mirror ? 180 - a : a);
  const F = (f) => (mirror ? (f === 'L' ? 'R' : 'L') : f);
  const arcM = (a0, a1) => (mirror ? circ(cx, cy, r, 180 - a0, 180 - a1) : circ(cx, cy, r, a0, a1));
  d.track(arcM(78, -72), 'ink', { width: 2.5 });      // forward half, up the right side
  d.track(arcM(-108, -252), 'travel', { width: 2.5 }); // backward half, down the left side
  // 1: forward up the right side, toes up.
  d.skate(X(cx + r - 0.45), cy, -90, F('L'), { len: 1.3 });
  d.skate(X(cx + r + 0.45), cy, -90, F('R'), { len: 1.3 });
  d.step(X(cx + r - 1.6), cy, 1);
  // 2: pivot at the top on the front of both skates: toes swing from pointing the way you go to pointing back.
  d.raw('<g opacity="0.35">');
  d.skate(X(cx - 0.45), cy - r, A(-135), F('L'), { len: 1.2 });
  d.skate(X(cx + 0.45), cy - r, A(-135), F('R'), { len: 1.2 });
  d.raw('</g>');
  d.skate(X(cx - 0.45), cy - r, A(-45), F('L'), { len: 1.2 });
  d.skate(X(cx + 0.45), cy - r, A(-45), F('R'), { len: 1.2 });
  d.text(cx, cy - r - 1.1, 'pivot: small hop on the toes', { size: 0.4 });
  d.step(X(cx), cy - r + 1.3, 2);
  // 3: backward down the left side, still facing up: toes up.
  d.skate(X(cx - r - 0.45), cy, -90, F('L'), { len: 1.3 });
  d.skate(X(cx - r + 0.45), cy, -90, F('R'), { len: 1.3 });
  d.step(X(cx - r + 1.6), cy, 3);
  // 4: step at the bottom: outside leg going backward, step onto the other leg going forward.
  d.skate(X(cx - 0.7), cy + r + 0.3, A(-135), F('L'), { len: 1.2 });
  d.skate(X(cx + 0.7), cy + r - 0.2, A(-45), F('R'), { len: 1.2 });
  d.text(cx, cy + r + 1.35, 'step onto the other leg', { size: 0.4 });
  d.step(X(cx), cy + r - 1.3, 4);
}

const circlePivots = (() => {
  const d = diagram({
    title: 'Small circle: forward to backward pivots, backward to forward steps',
    desc: 'Two small circles, the skater facing up the page the whole time. On the left circle (anticlockwise) they skate forward up the right side, pivot to backward on the toes with a small hop at the top, skate backward down the left side, and step from backward to forward at the bottom. The right circle is the same, clockwise.',
    h: 12,
  });
  circleDrill(d, 5.6, 5.9, 3.4, false);
  circleDrill(d, 16.4, 5.9, 3.4, true);
  d.text(5.6, 11.6, 'one way (anticlockwise)', { size: 0.45 });
  d.text(16.4, 11.6, 'then the other way (clockwise)', { size: 0.45 });
  d.text(11, 9.7, 'always facing this way ↑', { size: 0.46, weight: 600, color: '#22303c' });
  d.raw('<line x1="309" y1="168" x2="351" y2="168" stroke="#22303c" stroke-width="2.5"/>');
  d.text(11, 6.3, 'forward', { size: 0.42, color: '#22303c' });
  d.raw('<line x1="309" y1="216" x2="351" y2="216" stroke="#9aa7b2" stroke-width="2.5"/>');
  d.text(11, 7.9, 'backward', { size: 0.42, color: '#5b6b78' });
  return d.svg();
})();


export default [
  {
    id: 'turns-tight-turn',
    group: 'Turns',
    title: 'Tight turns',
    svg: tightTurn,
    card: {
      trains: 'Turning sharply without losing speed, so you can change direction to follow the puck or your check.',
      steps: [
        'Skate in on two feet, knees bent, and open into a scissor stance: inside leg well forward, outside leg back.',
        'Turn round the cone holding the scissor, inside foot well ahead: lean both blades in, inside foot on its outside edge, outside foot on its inside edge, head and stick pointing where you are going.',
        'Stay low as you come round, then stride away the way you came. Repeat turning the other way.',
      ],
      mistake: 'Standing up in the turn: the edges let go and the turn goes wide.',
      check: '',
    },
  },
  {
    id: 'turns-jam-turn',
    group: 'Turns',
    title: 'Jam turns',
    svg: jamTurn,
    card: {
      trains: 'Changing direction in the shortest space, for when the play reverses and you have to go back the other way now.',
      steps: [
        'Skate in with some speed.',
        'Sink and swing both skates hard into the turn so the blades bite and spray snow, nearly stopping, still on two feet.',
        'Push hard out of the turn and stride away the way you came. Repeat turning the other way.',
      ],
      mistake: 'Leaning back as the skates bite, so you stall or fall instead of driving out.',
      check: 'Checked against Ice Hockey Systems ("Jam Turns"): "an extremely tight turn", "not quite a stop", the inside skate leading on its outside edge and the outside foot gliding round on its inside edge. That matches. One difference: their version finishes with a crossover out of the turn, where this card pushes straight out.',
    },
  },
  {
    id: 'turns-punch-jam',
    group: 'Turns',
    title: 'Punch jams',
    svg: punchJam,
    card: {
      trains: 'Turning back on the play and getting to full speed in the new direction in one or two steps.',
      steps: [
        'Skate in with some speed.',
        'Jam the turn: both skates swing round and bite, spraying snow.',
        'Without pausing, punch out: the outside foot crosses over in front of the inside foot and the inside foot pushes hard underneath.',
        'Keep driving with short, quick strides. Repeat turning the other way.',
      ],
      mistake: 'Stopping dead after the jam and then starting again, instead of turning straight into the crossover.',
      check: 'Different from the meaning found. Ice Hockey Systems (three pages, the only source found) calls a punch jam "almost a half of a jam turn", used to fake: you point your toes one way, then snap them the other way and jam the inside skate in to cut sharply that way. It is a fake and a sharp cut, not a full turn back with a crossover out as drawn here. Please decide which you want.',
    },
  },
  {
    id: 'turns-punch-step-1',
    group: 'Turns',
    title: 'Punch turn step 1: T-stop onto the outside edge',
    svg: punchStep1,
    card: {
      trains: 'Getting comfortable committing to the outside edge of your inside foot, the first move of a punch turn, with a safety foot behind you.',
      steps: [
        'Skate forward slowly, knees bent, with clear ice ahead of you.',
        'Turn your left foot out so it points across your path, and lean back onto its outside edge.',
        'Put your right foot down behind it in a T, as in a T-stop. It is your safety, there to catch you.',
        'Glide to a stop, then do it with the right foot. Start slow and add speed as you trust the edge.',
      ],
      mistake: 'Easing onto the edge a little at a time instead of committing to it.',
      check: 'From the video you sent (Hockey Tutorial, "Must have skating technique - Punch Turn Tutorial", 1:50-2:40): "the first step to the punch turn is basically a T-stop", "getting on that outside edge and being able to lean back, but we use our other foot as kind of a security barrier", and "start slow like anything else and work your way up to speed". I read the turned-out foot as the inside (left) foot pointing across your path; say if you see it differently.',
    },
  },
  {
    id: 'turns-punch-step-2',
    group: 'Turns',
    title: 'Punch turn step 2: jump onto the outside edge',
    svg: punchStep2,
    card: {
      trains: 'Trusting the outside edge without the safety foot, so you can drop onto it fast in a game.',
      steps: [
        'Skate forward slowly, knees bent, with clear ice ahead of you.',
        'Jump onto your left foot turned out across your path. Land on its outside edge with a bent knee and dig in.',
        'Keep your right foot just off the ice behind you, ready to touch down if you need it.',
        'Do it both ways, and add speed only when it feels solid.',
      ],
      mistake: 'Putting the back foot straight down out of habit, so you never learn to trust the edge.',
      check: 'From the same video (2:40-2:58): "take away that security bar of the pointed foot of the T-stop", "we\'re still going to be able to fall back onto it but start to get comfortable on jumping onto that edge and really digging in on that outside edge".',
    },
  },
  {
    id: 'turns-punch-step-3',
    group: 'Turns',
    title: 'Punch turn step 3: dive onto the edge going forward',
    svg: punchStep3,
    card: {
      trains: 'Turning out of straight-line speed without losing it, which is what makes a punch turn quick.',
      steps: [
        'Skate straight forward with some speed. Look along your path first.',
        'Without slowing, open your left foot and dive onto its outside edge, letting it carry you round to the left.',
        'Keep your weight moving forward through the turn, not sliding off to the side. Your right foot stays just off the ice.',
        'Do it both ways.',
      ],
      mistake: 'Killing your forward speed to make the turn, so you end up sliding sideways.',
      check: 'From the same video (2:58-3:12): "we\'re going to go forward more vertically and then we\'re just going to be able to trust that our foot is going to open up and dive onto that outside edge while still keeping more of a forward momentum rather than the side".',
    },
  },
  {
    id: 'turns-punch-turn',
    group: 'Turns',
    title: 'Punch turns: figure eight round two pucks',
    svg: punchFigure8,
    card: {
      trains: 'The full punch turn: getting away from pressure with a quick, efficient change of direction, then exploding out.',
      steps: [
        'Put two pucks a few metres apart on clear ice and skate a figure eight round them: one way round the first puck, the other way round the second.',
        'As you enter each turn, dive onto the outside edge of your inside foot, and bite the ice with the inside edge of your outside foot: dig it in and pull yourself round the puck.',
        'At the far point of the turn (the apex), cross the outside foot over in front of the inside foot, then explode out towards the other puck.',
        'When that flows both ways, do it carrying a puck.',
      ],
      mistake: 'Gliding round the turn and only starting to push once you are out of it.',
      check: 'From the same video (3:12-3:50): "a simple figure eight working on punching and turning both ways", "the outside edge of our inside foot and our outside foot is going to be on the inside edge pulling ourselves around, and at the apex of the turn we\'re going to work on getting a crossover and exploding out", then "the last part is putting a puck in". This replaces the earlier punch-turn card, which drew a tight turn with a crossover out; the video\'s punch turn opens the inside foot onto its outside edge instead.',
    },
  },
  {
    id: 'turns-circle-pivots',
    group: 'Turns',
    title: 'Small circle forward to backward pivots, then backward to forward stepping (both directions)',
    svg: circlePivots,
    card: {
      trains: 'Switching between forward and backward while always facing the play, which defencemen and backcheckers do every shift.',
      steps: [
        'Face one way (say, one end of the rink) and keep facing it all the way round a small circle. Skate forward round the first side.',
        'Pivot from forward to backward on the front of both skates, heels swinging round; ideally a small hop so the heels do not cut the ice.',
        'Skate backward round the far side, still facing the same way.',
        'Step from backward to forward: with the outside leg going backward, step straight onto the other leg going forward, without stopping. Then go round the other way.',
      ],
      mistake: 'Turning the chest with the feet, so the skater ends up facing round the circle instead of facing one way.',
      check: 'Drawn with the skater facing up the page throughout, forward up one side and backward down the other, pivoting at the top and stepping at the bottom.',
    },
  },
];
