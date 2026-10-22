// Turns (part B): tight turns, jam turns, punch jams, punch turns, small-circle pivots.
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
function tightTurnBase(d, { exitX, arrow = true }) {
  const cx = 14.5, cy = 5.5;
  d.cone(cx, cy);
  d.track(uTurn(cx, cy, 1.9, 2.5, exitX), 'L', { arrow, edge: 'OUT', edgeAt: [cx + 0.6, cy + 1.05] });
  d.track(uTurn(cx, cy, 2.8, 2.5, exitX), 'R', { arrow, edge: 'IN', edgeAt: [cx + 3.6, cy + 1.2] });
  // 1: approach, both feet down, left foot on the inside (up the page).
  d.skate(6, cy + 1.9, 0, 'L');
  d.skate(5.7, cy + 2.8, 0, 'R');
  d.step(4, cy + 2.35, 1);
  // 2: the turn. Inside (left) foot leads, both blades lean into the cone.
  d.skate(cx + 1.9, cy - 0.3, -90, 'L');
  d.skate(cx + 2.8, cy + 0.15, -90, 'R');
  d.step(cx + 4.2, cy - 0.3, 2);
  return { cx, cy };
}

const tightTurn = (() => {
  const d = diagram({
    title: 'Tight turn',
    desc: 'Skate in on two feet, turn hard left around a cone with the inside (left) foot leading on its outside edge and the outside (right) foot on its inside edge, and come out the way you came. Repeat turning right.',
  });
  const { cy } = tightTurnBase(d, { exitX: 3 });
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

// Small circle: forward half, pivot to backward, backward half, step back to forward.
// Drawn for an anticlockwise circle, then mirrored (x flipped, feet swapped) for clockwise.
function circleDrill(d, cx, cy, rad, mirror, firstStep) {
  const X = (x) => (mirror ? 2 * cx - x : x);
  const A = (a) => (mirror ? 180 - a : a);
  const F = (f) => (mirror ? (f === 'L' ? 'R' : 'L') : f);
  const k = K * rad;
  const p = (pts) => pts.map((v, i) => (i % 2 === 0 ? X(v) : v)).join(' ');
  // Forward half: left point -> bottom -> right point (anticlockwise on the page).
  d.track(`M ${p([cx - rad, cy])} C ${p([cx - rad, cy + k, cx - k, cy + rad, cx, cy + rad])} ` +
    `C ${p([cx + k, cy + rad, cx + rad, cy + k, cx + rad, cy + 0.4])}`, 'ink', { width: 2.5 });
  // Backward half: right point -> top -> left point.
  d.track(`M ${p([cx + rad, cy - 0.2])} C ${p([cx + rad, cy - k, cx + k, cy - rad, cx, cy - rad])} ` +
    `C ${p([cx - k, cy - rad, cx - rad, cy - k, cx - rad, cy - 0.4])}`, 'travel', { width: 2.5 });
  // 1: forward on the bottom, inside foot nearer the centre.
  d.skate(X(cx + 0.3), cy + rad - 0.4, A(0), F('L'));
  d.skate(X(cx - 0.2), cy + rad + 0.4, A(0), F('R'));
  d.step(X(cx), cy + rad - 1.4, firstStep);
  // 2: pivot forward to backward, heels together: one blade still forward, the other turned round.
  d.skate(X(cx + rad - 0.45), cy, A(-90), F('L'));
  d.skate(X(cx + rad + 0.45), cy - 0.5, A(90), F('R'));
  d.step(X(cx + rad - 1.5), cy, firstStep + 1);
  // 3: backward on the top: toes point against travel.
  d.skate(X(cx - 0.3), cy - rad - 0.4, A(0), F('L'));
  d.skate(X(cx), cy - rad + 0.4, A(0), F('R'));
  d.step(X(cx), cy - rad + 1.4, firstStep + 2);
  // 4: step back to forward: one blade still backward, the other set down pointing forward.
  d.skate(X(cx - rad + 0.45), cy, A(-90), F('R'));
  d.skate(X(cx - rad - 0.45), cy + 0.5, A(90), F('L'));
  d.step(X(cx - rad + 1.5), cy, firstStep + 3);
}

const circlePivots = (() => {
  const d = diagram({
    title: 'Small circle: forward to backward pivots, backward to forward steps',
    desc: 'Two small circles. On each, skate forward round the bottom half, pivot to backward, skate backward round the top half, then step back to forward. The left circle goes anticlockwise, the right circle clockwise.',
    h: 12,
  });
  circleDrill(d, 5.6, 5.6, 3.6, false, 1);
  circleDrill(d, 16.4, 5.6, 3.6, true, 1);
  d.text(5.6, 11.5, 'one way (anticlockwise)', { size: 0.45 });
  d.text(16.4, 11.5, 'then the other way (clockwise)', { size: 0.45 });
  d.raw('<line x1="309" y1="138" x2="351" y2="138" stroke="#22303c" stroke-width="2.5"/>');
  d.text(11, 5.3, 'forward', { size: 0.42, color: '#22303c' });
  d.raw('<line x1="309" y1="186" x2="351" y2="186" stroke="#9aa7b2" stroke-width="2.5"/>');
  d.text(11, 6.9, 'backward', { size: 0.42, color: '#5b6b78' });
  return d.svg();
})();

const PUBLIC_QUIET = 'Public session, quiet lane, low speed';
const EMPTY_PATCH = 'Only on an empty patch of a quiet public session';
const PRACTICE = 'Stick-and-puck or a practice, not a busy public session';

export default [
  {
    id: 'turns-tight-turn',
    group: 'Turns',
    title: 'Tight turns',
    svg: tightTurn,
    card: {
      trains: 'Turning sharply without losing speed, so you can change direction to follow the puck or your check.',
      steps: [
        'Skate in on two feet, knees bent, feet about hip-width apart.',
        'Turn round the cone with your inside foot a little ahead: lean both blades in, inside foot on its outside edge, outside foot on its inside edge, head and stick pointing where you are going.',
        'Stay low as you come round, then stride away the way you came. Repeat turning the other way.',
      ],
      mistake: 'Standing up in the turn: the edges let go and the turn goes wide.',
      where: PUBLIC_QUIET,
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
      where: EMPTY_PATCH,
      check: 'I read "jam turn" as a sharp two-foot turn where the skates dig in and skid, part turn and part stop, then you push straight back out. I am not sure this is the owner\'s meaning: some coaches use "jam" for a one-foot stop-and-go or for a sharp heel-pivot on the inside foot. Please confirm.',
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
      where: PRACTICE,
      check: 'I read "punch jam" as a jam turn (sharp, biting, nearly a stop) finished with a hard crossover "punch" out of it, so it differs from a jam turn only in the exit. I am unsure of this one. Alternatives I know of: a full stop on one side then an explosive crossover start back the other way; or a jam done repeatedly in a zig-zag. Please confirm which the owner means.',
    },
  },
  {
    id: 'turns-punch-turn',
    group: 'Turns',
    title: 'Punch turns',
    svg: punchTurn,
    card: {
      trains: 'Coming out of a turn faster than you went in, which wins races to loose pucks.',
      steps: [
        'Skate in on two feet, knees bent.',
        'Make a tight turn round the cone, inside foot leading, both blades leaning in. No skid: the blades carve.',
        'As you come out, punch: the outside foot crosses over in front and the inside foot pushes hard underneath.',
        'Keep accelerating with short, quick strides. Repeat turning the other way.',
      ],
      mistake: 'Standing up as you leave the turn, so the crossover pushes sideways instead of driving you forward.',
      where: PRACTICE,
      check: 'I read "punch turn" as a carved tight turn finished with one or two hard crossovers "punched" out of it. Some coaches use "punch turn" for a tight turn with a crossover in the middle of the turn, not only at the exit; I drew it at the exit. Please confirm.',
    },
  },
  {
    id: 'turns-circle-pivots',
    group: 'Turns',
    title: 'Small circle forward to backward pivots, then backward to forward stepping (both directions)',
    svg: circlePivots,
    card: {
      trains: 'Switching between forward and backward without losing speed or the line you are on, which defencemen and backcheckers do every shift.',
      steps: [
        'Skate forward round a small circle, knees bent.',
        'Pivot to backward: keep one blade forward, turn the other round heel to heel, then bring the first foot round.',
        'Skate backward round the next half of the circle, looking up.',
        'Step back to forward: open your hips and set one foot down pointing forward, heel to heel. Do it the other way round on a second circle.',
      ],
      mistake: 'Stopping the circle to turn: the pivot should happen while you keep travelling round.',
      where: EMPTY_PATCH,
      check: 'I drew the forward half round the bottom of each circle and the backward half round the top, with one pivot and one step per lap. Coaches differ on whether the pivot opens towards the centre of the circle or away from it, and which foot stays down; the diagram shows the feet only roughly at those two moments. Please confirm how the owner teaches it.',
    },
  },
];
