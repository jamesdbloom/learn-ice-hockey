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
      check: 'Different from the one source found. CoachThem calls a punch turn a "half stop" or "hybrid turn": one foot opens onto the flat of the blade as if stopping, while the other foot tight-turns on its inside edge. This card draws a tight turn with a crossover out, which other sources call a tight turn into crossovers. Please decide which you want.',
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
