// One-foot edges (DRAFT, 22 Oct 2026). Every drill is drawn on the RIGHT foot, travelling left to right.
//
// Geometry used throughout (screen coords, y down the page):
//   Forward, facing +x: the skater's LEFT is up the page.
//     Right foot inside edge curves up; right foot outside edge curves down.
//   Backward, travelling +x but facing -x (toe points against travel): the skater's LEFT is DOWN the page.
//     Right foot inside edge curves down; right foot outside edge curves up.
//   The path always bends towards the side the blade leans to: inside edge of the right foot = its left side.
import { diagram, COL, PX } from '../lib/draw.mjs';

const f = (n) => Math.round(n * PX * 10) / 10;

// Point and tangent angle (deg) on a cubic Bezier.
function bez(P, t) {
  const [a, b, c, d] = P;
  const u = 1 - t;
  const x = u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0];
  const y = u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1];
  const dx = 3 * u * u * (b[0] - a[0]) + 6 * u * t * (c[0] - b[0]) + 3 * t * t * (d[0] - c[0]);
  const dy = 3 * u * u * (b[1] - a[1]) + 6 * u * t * (c[1] - b[1]) + 3 * t * t * (d[1] - c[1]);
  return { x, y, ang: (Math.atan2(dy, dx) * 180) / Math.PI };
}
const cpath = (P) => `M ${P[0][0]} ${P[0][1]} C ${P[1][0]} ${P[1][1]} ${P[2][0]} ${P[2][1]} ${P[3][0]} ${P[3][1]}`;
// Offset a point along an angle (deg) by dist feet.
const off = (p, ang, dist) => ({ x: p.x + Math.cos((ang * Math.PI) / 180) * dist, y: p.y + Math.sin((ang * Math.PI) / 180) * dist });

// A hand touching the ice: a small grey palm print with a short label.
function hand(d, x, y, label = 'hand touches ice', below = false) {
  d.raw(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(0.26)}" fill="${COL.muted}" fill-opacity="0.75"/>` +
    [-50, -20, 10, 40].map((a) => {
      const rad = ((below ? a + 180 : a) - 90) * Math.PI / 180;
      return `<circle cx="${f(x + Math.cos(rad) * 0.42)}" cy="${f(y + Math.sin(rad) * 0.42)}" r="${f(0.09)}" fill="${COL.muted}" fill-opacity="0.75"/>`;
    }).join(''));
  d.text(x, below ? y + 0.95 : y - 0.7, label, { size: 0.44 });
}

// ---------------------------------------------------------------- 1. Inside edge forward
const insideEdgeForward = (() => {
  const d = diagram({
    title: 'Inside edge forward, one foot',
    desc: 'Push off the left foot out to the left, then glide on the inside edge of the right skate in an arc curving left, left foot lifted. Bend the right knee until a hand touches the ice on the inside of the curve. Repeat on the other foot.',
  });
  // 1. Push: left foot, toe turned out, pushes out to the skater's left (up the page) and back.
  d.skate(2.6, 6.0, -30, 'L');
  d.text(2.9, 4.4, 'push', { size: 0.5, color: COL.L, weight: 600, anchor: 'start' });
  d.track('M 2.4 5.6 L 1.4 4.3', 'L');
  d.step(1.0, 7.2, 1);
  // 2-3. Glide on the right inside edge, curving left (up the page).
  const P = [[3.8, 7.6], [9, 7.6], [14, 6.8], [19.5, 2.4]];
  d.track(cpath(P), 'R', { edge: 'IN', edgeAt: [11.6, 8.3] });
  const a = bez(P, 0.12);
  d.skate(a.x, a.y, a.ang, 'R');
  const af = off(a, a.ang - 90, 1.0); // free foot on the skater's left (up)
  d.skate(af.x - 0.6, af.y, a.ang, 'L', { lifted: true });
  d.step(a.x, a.y + 1.2, 2);
  const b = bez(P, 0.62);
  d.skate(b.x, b.y, b.ang, 'R');
  const bh = off(b, b.ang - 90, 1.6); // hand on the inside of the curve
  hand(d, bh.x, bh.y);
  d.step(b.x + 0.9, b.y + 1.2, 3);
  d.travel(4, 10, 11, 10);
  return d.svg();
})();

// ---------------------------------------------------------------- 2. Outside edge forward
const outsideEdgeForward = (() => {
  const d = diagram({
    title: 'Outside edge forward, one foot',
    desc: 'Push off the left foot, then glide on the outside edge of the right skate in an arc curving right, left foot lifted beside the right heel. Repeat on the other foot.',
  });
  // 1. Push off the left foot, out to the skater's left (up the page).
  d.skate(2.6, 3.2, -30, 'L');
  d.text(2.9, 1.6, 'push', { size: 0.5, color: COL.L, weight: 600, anchor: 'start' });
  d.track('M 2.4 2.8 L 1.4 1.5', 'L');
  d.step(1.0, 4.4, 1);
  // 2-3. Glide on the right outside edge, curving right (down the page).
  const P = [[3.8, 4.4], [9, 4.4], [14, 5.2], [19.5, 9.4]];
  d.track(cpath(P), 'R', { edge: 'OUT', edgeAt: [11.4, 3.7] });
  const a = bez(P, 0.14);
  d.skate(a.x, a.y, a.ang, 'R');
  const af = off(a, a.ang - 90, 0.8);
  d.skate(af.x - 0.7, af.y, a.ang, 'L', { lifted: true });
  d.step(a.x, a.y + 1.2, 2);
  const b = bez(P, 0.66);
  d.skate(b.x, b.y, b.ang, 'R');
  d.text(b.x - 2.6, b.y + 1.9, 'lean into the circle', { size: 0.44 });
  d.step(b.x + 1.2, b.y - 0.9, 3);
  d.travel(4, 10, 11, 10);
  return d.svg();
})();

// ---------------------------------------------------------------- 3. Inside edge backwards
const insideEdgeBackward = (() => {
  const d = diagram({
    title: 'Inside edge backwards, one foot',
    desc: 'Skating backwards to the right, facing left. Push with a C-cut of the left foot, then glide on the inside edge of the right skate, curving towards the skater\'s left (down the page), left foot lifted. Bend until a hand touches the ice on the inside of the curve. Repeat on the other foot.',
  });
  // 1. C-cut push with the left foot: toe turned in, heel carves out to the skater's left (down the page).
  d.skate(2.8, 4.2, 205, 'L');
  d.text(3.6, 6.4, 'C-cut push', { size: 0.5, color: COL.L, weight: 600, anchor: 'start' });
  d.track('M 3.2 4.6 Q 3.0 6.0 1.6 6.2', 'L');
  d.step(1.0, 4.0, 1);
  // 2-3. Glide backwards on the right inside edge, curving down the page.
  const P = [[4.2, 3.4], [9, 3.4], [14, 4.2], [19.5, 8.6]];
  d.track(cpath(P), 'R', { edge: 'IN', edgeAt: [11.4, 2.7] });
  const a = bez(P, 0.14);
  d.skate(a.x, a.y, a.ang + 180, 'R');
  const af = off(a, a.ang + 90, 1.0); // skater's left is down the page when going backwards
  d.skate(af.x + 0.6, af.y, a.ang + 180, 'L', { lifted: true });
  d.step(a.x, a.y - 1.1, 2);
  const b = bez(P, 0.62);
  d.skate(b.x, b.y, b.ang + 180, 'R');
  const bh = off(b, b.ang + 90, 1.6);
  hand(d, bh.x, bh.y, 'hand touches ice', true);
  d.step(b.x + 1.1, b.y - 1.0, 3);
  d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  return d.svg();
})();

// ---------------------------------------------------------------- 4/5. Outside edge backwards
function outsideEdgeBackward(freeFront) {
  const d = diagram({
    title: `Outside edge backwards, free foot ${freeFront ? 'in front' : 'behind'}`,
    desc: `Skating backwards to the right, facing left. Push off the left foot, then glide on the outside edge of the right skate, curving towards the skater's right (up the page). The lifted left foot is held ${freeFront ? 'in front of the body, ahead of the skating foot' : 'behind the body, on the side you are travelling towards'}. Repeat on the other foot.`,
  });
  // 1. Push off the left foot (C-cut), out to the skater's left (down the page).
  d.skate(2.8, 7.4, 205, 'L');
  d.text(3.6, 9.4, 'push', { size: 0.5, color: COL.L, weight: 600, anchor: 'start' });
  d.track('M 3.2 7.8 Q 3.0 9.2 1.6 9.4', 'L');
  d.step(1.0, 6.6, 1);
  // 2-3. Glide backwards on the right outside edge, curving up the page.
  const P = [[4.2, 6.8], [9, 6.8], [14, 6.0], [19.5, 1.8]];
  d.track(cpath(P), 'R', { edge: 'OUT', edgeAt: [9.8, 5.45] });
  for (const [t, n] of [[0.2, 2], [0.66, 3]]) {
    const p = bez(P, t);
    d.skate(p.x, p.y, p.ang + 180, 'R');
    // Free foot: in front = towards the way the skater faces (against travel); behind = towards travel.
    const q = off(off(p, freeFront ? p.ang + 180 : p.ang, 1.9), p.ang + 90, 0.55);
    d.skate(q.x, q.y, p.ang + 180, 'L', { lifted: true });
    d.step(p.x - 0.9, p.y - 1.1, n);
  }
  const p = bez(P, 0.66);
  const q = off(off(p, freeFront ? p.ang + 180 : p.ang, 1.9), p.ang + 90, 0.55);
  d.text(q.x + (freeFront ? -0.6 : 0.8), q.y + 1.3, freeFront ? 'free foot in front' : 'free foot behind', { size: 0.44, color: COL.L, weight: 600 });
  d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  return d.svg();
}

// ---------------------------------------------------------------- 6/7. One-foot slalom
function slalom(backward) {
  const d = diagram({
    title: `One-foot slalom ${backward ? 'backwards' : 'forwards'}`,
    desc: `${backward ? 'Skating backwards to the right, facing left, ' : 'Skating forwards to the right, '}on the right foot only, weaving past a line of markers by rolling from one edge to the other. ${backward ? 'Going backwards, passing above a marker is the inside edge and passing below it is the outside edge.' : 'Passing above a marker is the outside edge and passing below it is the inside edge.'} Repeat on the other foot.`,
  });
  const cy = 5.2, cones = [5, 9, 13, 17];
  cones.forEach((x) => d.cone(x, cy));
  // 1. Push off the left foot onto the right.
  if (backward) {
    d.skate(1.6, 7.4, 205, 'L');
    d.text(2.4, 9.5, 'push', { size: 0.5, color: COL.L, weight: 600, anchor: 'start' });
    d.track('M 2.0 7.8 Q 1.9 9.0 0.8 9.2', 'L', { width: 2.5 });
  } else {
    d.skate(1.5, 4.4, -30, 'L');
    d.text(1.3, 2.4, 'push', { size: 0.5, color: COL.L, weight: 600, anchor: 'start' });
    d.track('M 1.3 4.0 L 0.6 3.0', 'L', { width: 2.5 });
  }
  d.step(0.8, backward ? 5.4 : 6.2, 1);
  // Weave: start crossing at x=3, then over cone 1, under cone 2, over 3, under 4, crossing at x=19.
  const A = 1.3, B = 2.2;
  let path = `M 1.9 ${cy + 1.4} C 2.3 ${cy + 1.3} 2.6 ${cy + 0.9} 3 ${cy}`;
  const segs = [];
  for (let i = 0; i < 4; i++) {
    const x0 = 3 + 4 * i, s = i % 2 === 0 ? -1 : 1; // -1 = above the marker
    const P = [[x0, cy], [x0 + A, cy + s * B], [x0 + 4 - A, cy + s * B], [x0 + 4, cy]];
    segs.push({ P, s });
    path += ` C ${P[1][0]} ${P[1][1]} ${P[2][0]} ${P[2][1]} ${P[3][0]} ${P[3][1]}`;
  }
  path += ` C ${19 + A * 0.5} ${cy - B * 0.5} 20.2 ${cy - 1.2} 21 ${cy - 1.3}`;
  d.track(path, 'R');
  segs.forEach(({ P, s }, i) => {
    // Above a marker the path bends down the page; below, it bends up.
    // Forward on the right foot: bending down = outside edge. Backward: bending down = inside edge.
    const edge = (s < 0) !== backward ? 'OUT' : 'IN';
    const m = bez(P, 0.5);
    d.tag(m.x, m.y + s * 1.05, edge, 'R');
    const k = bez(P, 0.5);
    d.skate(k.x, k.y, backward ? k.ang + 180 : k.ang, 'R', { len: 1.4 });
    if (i < 2) d.step(k.x, k.y + s * 2.15, i + 2);
  });
  d.text(17, 9.0, 'only the right foot touches the ice', { size: 0.42 });
  if (backward) d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  return d.svg();
}

const G = 'One-foot edges';
const BACK_WHERE = 'Only on an empty patch of a quiet public session';

export default [
  {
    id: 'one-foot-inside-edge-forward',
    group: G,
    title: 'Inside edge forward (strong push & touch the ice)',
    svg: insideEdgeForward,
    card: {
      trains: 'Grip and balance on the inside edge, the edge every stride, crossover and tight turn pushes from.',
      steps: [
        'Push hard off one foot to build speed.',
        'Glide on the other foot\'s inside edge, free foot lifted, so you curve towards the side of your free foot.',
        'Bend the skating knee until your hand touches the ice on the inside of the curve, then hold the edge until you slow. Repeat on the other foot.',
      ],
      mistake: 'Standing tall on a flat blade, so the curve straightens out and the edge is lost.',
      where: 'Public session, quiet lane, low speed',
      check: '"Touch the floor" read as: bend the skating knee so low that a hand touches the ice beside you. I drew the hand on the inside of the curve. Some coaches have the player touch the ice next to the skating boot, or touch the knee instead; confirm which you meant.',
    },
  },
  {
    id: 'one-foot-outside-edge-forward',
    group: G,
    title: 'Outside edge forward (strong push)',
    svg: outsideEdgeForward,
    card: {
      trains: 'Control on the outside edge, the edge you ride through the inside half of every crossover and tight turn.',
      steps: [
        'Push hard off one foot to build speed.',
        'Glide on the other foot\'s outside edge, free foot lifted beside the skating heel, so you curve away from your free foot.',
        'Lean your body into the circle, knee bent, and hold the edge until you slow. Repeat on the other foot.',
      ],
      mistake: 'Leaning only the upper body while the blade stays flat, so the skater tips over instead of curving.',
      where: 'Public session, quiet lane, low speed',
      check: '',
    },
  },
  {
    id: 'one-foot-inside-edge-backward',
    group: G,
    title: 'Inside edge backwards (strong push & touch the ice)',
    svg: insideEdgeBackward,
    card: {
      trains: 'Grip on the backward inside edge, the edge a defenceman pushes from in backward C-cuts and pivots.',
      steps: [
        'Skating backwards, push with a C-cut: toe turned in, heel carving out to the side.',
        'Glide backwards on the other foot\'s inside edge, free foot lifted, so you curve towards the side of your free foot.',
        'Bend the skating knee until your hand touches the ice on the inside of the curve, and hold the edge. Repeat on the other foot.',
      ],
      mistake: 'Leaning forward over the toes, so the blade rocks off the edge and the skater stalls.',
      where: BACK_WHERE,
      check: '"Touch the floor" read the same way as the forward drill: bend until a hand touches the ice on the inside of the curve. Confirm which hand or spot you meant.',
    },
  },
  {
    id: 'one-foot-outside-edge-backward-free-front',
    group: G,
    title: 'Outside edge backwards, free foot in front',
    svg: outsideEdgeBackward(true),
    card: {
      trains: 'Balance on the backward outside edge, which backward crossovers and pivots depend on.',
      steps: [
        'Skating backwards, push off one foot.',
        'Glide backwards on the other foot\'s outside edge, so you curve away from your free foot.',
        'Hold the lifted free foot in front of you, close to the ice, chest up, and keep the edge until you slow. Repeat on the other foot.',
      ],
      mistake: 'Looking down at the skates, which pitches the weight forward and flattens the blade.',
      where: BACK_WHERE,
      check: '"In front" read as the free foot held ahead of the body in the direction the skater FACES (which is behind them in the direction of travel). If you meant the free foot crossed in front of the skating leg, the picture needs changing.',
    },
  },
  {
    id: 'one-foot-outside-edge-backward-free-behind',
    group: G,
    title: 'Outside edge backwards, free foot behind',
    svg: outsideEdgeBackward(false),
    card: {
      trains: 'Balance on the backward outside edge with the weight further back, as when looking over the shoulder to skate backwards.',
      steps: [
        'Skating backwards, push off one foot.',
        'Glide backwards on the other foot\'s outside edge, so you curve away from your free foot.',
        'Hold the lifted free foot behind you, towards where you are going, and keep the edge until you slow. Repeat on the other foot.',
      ],
      mistake: 'Sitting back on the heel so far that the blade slips out; keep the weight over the middle of the blade.',
      where: BACK_WHERE,
      check: '"Behind" read as the free foot held behind the body, on the side the skater is travelling towards. Confirm this is the pairing you meant with the "free foot in front" drill.',
    },
  },
  {
    id: 'one-foot-slalom-forward',
    group: G,
    title: 'One-foot slalom forwards',
    svg: slalom(false),
    card: {
      trains: 'Rolling from outside edge to inside edge on one foot, the control behind tight weaving with the puck.',
      steps: [
        'Push off one foot and lift it.',
        'On the skating foot, roll onto the outside edge to curve one way round the first marker.',
        'Roll across to the inside edge to curve back round the next marker. Keep alternating to the end, then repeat on the other foot.',
      ],
      mistake: 'Twisting the shoulders to steer while the blade stays flat, so the line wobbles instead of curving.',
      where: 'Public session, quiet lane, low speed',
      check: 'Drawn with markers. Most public sessions will not allow cones, so there the player would weave past imaginary points or along a painted line. I started on the outside edge; starting on the inside edge is just as valid.',
    },
  },
  {
    id: 'one-foot-slalom-backward',
    group: G,
    title: 'One-foot slalom backwards',
    svg: slalom(true),
    card: {
      trains: 'Edge-to-edge control skating backwards, which a defenceman uses to stay in front of an attacker who changes direction.',
      steps: [
        'Skating backwards, push off one foot and lift it.',
        'On the skating foot, roll onto the inside edge to curve one way round the first marker.',
        'Roll across to the outside edge to curve back round the next marker. Keep alternating to the end, then repeat on the other foot.',
      ],
      mistake: 'Bending at the waist instead of the knees, so the weight is over the toes and the edges will not grip.',
      where: BACK_WHERE,
      check: 'Drawn with markers, as for the forward slalom; on a public session these are usually imaginary. Going backwards on the right foot the edges swap: passing above a marker is the inside edge here, the outside edge in the forward version.',
    },
  },
];
