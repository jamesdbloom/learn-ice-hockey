// One-foot edges (DRAFT, 22 Oct 2026, revised after owner feedback the same day).
// The C-cut drills are drawn on the RIGHT foot, travelling left to right.
//
// Geometry used throughout (screen coords, y down the page):
//   Forward, facing +x: the skater's LEFT is up the page, RIGHT is down.
//   Backward, travelling +x but facing -x (toe points against travel): the skater's LEFT is DOWN the page.
//   The path always bends towards the side the blade leans to: the inside edge of the right foot = its left side.
//
// A one-foot C-cut: the skating foot carves out to one side and back under the body, so its track bulges
// to one side and CURVES BACK towards the other. The side it curves back towards is the edge:
//   right foot forward, INSIDE edge : bulges to the skater's right (down), curves back left (up).
//   right foot forward, OUTSIDE edge: bulges to the skater's left (up), curves back right (down).
//   right foot backward, INSIDE edge : bulges to the skater's right (UP), curves back left (down).
//   right foot backward, OUTSIDE edge: bulges to the skater's left (DOWN), curves back right (up).
import { diagram, COL, PX } from '../lib/draw.mjs';

const f = (n) => Math.round(n * PX * 10) / 10;
const r3 = (n) => Number(n.toFixed(3));

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

// The boards, drawn along the top of the patch.
function boards(d, y = 0.55) {
  d.raw(`<rect x="${f(0.3)}" y="${f(y - 0.22)}" width="${f(d.w - 0.6)}" height="${f(0.44)}" rx="4" fill="#d9cdb8" stroke="#8a7a5e" stroke-width="2"/>`);
  d.text(d.w / 2, y + 0.15, 'BOARDS', { size: 0.36, color: '#5e5038', weight: 700 });
}

// ---------------------------------------------------------------- One-foot C-cuts (continuous)
// side: +1 = bulge DOWN the page, -1 = bulge UP. Three consecutive Cs on the right foot.
function cCuts({ title, desc, edge, backward, free = '', touch = false }) {
  const s = (edge === 'IN') !== backward ? 1 : -1;
  const d = diagram({ title, desc });
  const cy = s > 0 ? 3.0 : 7.4;      // the line the cusps sit on
  const B = 3.6;                      // bulge depth control (actual depth ~2.7 ft)
  const L = 5.6;
  const xs = [2.0, 7.6, 13.2];
  const Cs = xs.map((x0) => [[x0, cy], [x0 + 0.02 * L, cy + s * B], [x0 + 0.98 * L, cy + s * B], [x0 + L, cy]]);
  let path = `M ${xs[0]} ${cy}`;
  Cs.forEach((P) => { path += ` C ${r3(P[1][0])} ${r3(P[1][1])} ${r3(P[2][0])} ${r3(P[2][1])} ${r3(P[3][0])} ${r3(P[3][1])}`; });
  path += ` C ${r3(18.8 + 0.6)} ${r3(cy + s * 0.9)} 20.4 ${r3(cy + s * 1.0)} 21.0 ${r3(cy + s * 1.0)}`;
  d.track(path, 'R');
  const skateAng = (a) => (backward ? a + 180 : a);
  const facingSide = backward ? 180 : 0; // the way the skater faces, as a screen angle
  Cs.forEach((P, i) => {
    const k = bez(P, 0.5);
    d.skate(k.x, k.y, skateAng(k.ang), 'R');
    // Free foot, lifted, held off the skating foot towards the inside of the C.
    let q = off(k, -s * 90, 1.0);
    if (free === 'front') q = off(off(k, facingSide, 1.7), -s * 90, 0.7);
    if (free === 'behind') q = off(off(k, facingSide + 180, 1.7), -s * 90, 0.7);
    d.skate(q.x, q.y, skateAng(k.ang), 'L', { lifted: true });
    const tagP = off(k, s * 90, 0.95);
    d.tag(tagP.x, tagP.y, edge, 'R');
    if (i === 0) d.step(k.x, k.y + s * 1.9, 2);
  });
  // Step 1 at the start, step 3 at the cusp where the next C starts.
  d.step(1.1, cy - s * 0.3, 1);
  d.step(xs[1], cy - s * 0.8, 3);
  d.text(xs[1], cy - s * 1.65, 'straight into the next C', { size: 0.42 });
  if (touch) {
    const k = bez(Cs[1], 0.5);
    const hp = off(k, -s * 90, 2.0);
    hand(d, hp.x, hp.y, 'hand touches ice', s < 0);
  }
  if (free) {
    const k = bez(Cs[2], 0.5);
    const q = off(off(k, free === 'front' ? facingSide : facingSide + 180, 1.7), -s * 90, 0.7);
    d.text(k.x, k.y + s * 1.85, free === 'front' ? 'free foot in front' : 'free foot behind', { size: 0.42, color: COL.L, weight: 600 });
  }
  d.text(11, s > 0 ? 9.0 : 2.0, 'one foot the whole way: push hard, keep going', { size: 0.42 });
  if (backward) d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  d.text(21.3, 0.95, 'repeat on the other foot', { size: 0.44, anchor: 'end', weight: 600, color: COL.ink });
  return d.svg();
}

// ---------------------------------------------------------------- Outside edge (a): small step-overs
// Feet alternate. Each foot steps over in front of the other and lands on its OUTSIDE edge:
//   right foot lands on the skater's left (up) and curves right (down) back across;
//   left foot lands on the skater's right (down) and curves left (up) back across.
const stepOvers = (() => {
  const d = diagram({
    title: 'Outside edge, small step-overs',
    desc: 'Travelling roughly straight down the ice. The feet alternate: each one steps over in front of the other and lands on its outside edge, curving a little back across the line, then the other foot steps over. Small, quick steps.',
  });
  const cy = 5.2;
  const segs = [];
  let x = 2.0;
  for (let i = 0; i < 6; i++) {
    const foot = i % 2 === 0 ? 'R' : 'L';
    const s = foot === 'R' ? -1 : 1; // R lands up (skater's left), L lands down
    const P = [[x, cy + s * 0.75], [x + 1.0, cy + s * 1.05], [x + 2.0, cy + s * 0.5], [x + 2.9, cy - s * 0.35]];
    segs.push({ P, foot, s });
    x += 3.0;
  }
  segs.forEach(({ P, foot, s }, i) => {
    d.track(`M ${r3(P[0][0])} ${r3(P[0][1])} C ${r3(P[1][0])} ${r3(P[1][1])} ${r3(P[2][0])} ${r3(P[2][1])} ${r3(P[3][0])} ${r3(P[3][1])}`, foot, { width: 2.6 });
    const k = bez(P, 0.3);
    if (i < 4) d.skate(k.x, k.y, k.ang, foot, { len: 1.3 });
    if (i === 1 || i === 2) d.tag(k.x + 0.5, k.y + s * 1.0, 'OUT', foot);
  });
  // The foot being lifted to step over, on the first two.
  d.step(1.1, cy - 2.1, 1);
  d.step(segs[1].P[0][0] + 0.4, cy + 2.6, 2);
  d.step(segs[2].P[0][0] + 0.4, cy - 2.6, 3);
  d.text(segs[1].P[0][0] + 0.4, cy + 3.6, 'left steps over', { size: 0.42, color: COL.L, weight: 600 });
  d.text(segs[2].P[0][0] + 0.4, cy - 3.3, 'right steps over', { size: 0.42, color: COL.R, weight: 600 });
  d.text(16.5, 9.0, 'small steps, roughly straight line', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  return d.svg();
})();

// ---------------------------------------------------------------- Outside edge (b): big lean-and-glide arcs
// Feet alternate, no crossing: right outside edge curves right (an arch bulging up), then the left foot is
// set down BESIDE it and its outside edge curves left (a dip bulging down). A serpentine.
const leanGlide = (() => {
  const d = diagram({
    title: 'Outside edge, big lean-and-glide arcs',
    desc: 'Big arcs down the ice, alternating feet. Glide on the right outside edge curving right, then set the left foot down beside it (no crossing) and lean over onto its outside edge curving left. Lean and glide; do not step over.',
  });
  const cy = 5.5, A = 2.2, L = 6.2;
  const arcs = [0, 1, 2].map((i) => {
    const x0 = 1.5 + i * L, s = i % 2 === 0 ? -1 : 1; // -1 = bulge up (right foot), +1 = bulge down (left foot)
    return { P: [[x0, cy], [x0 + 0.25 * L, cy + s * A * 1.33], [x0 + 0.75 * L, cy + s * A * 1.33], [x0 + L, cy]], foot: s < 0 ? 'R' : 'L', s };
  });
  arcs.forEach(({ P, foot, s }, i) => {
    const gap = i === 0 ? 0 : 0.35; // a tiny gap where the new foot is set down beside the old
    const Q = [[P[0][0] + gap, P[0][1] + s * 0.25], P[1], P[2], P[3]];
    d.track(`M ${r3(Q[0][0])} ${r3(Q[0][1])} C ${r3(Q[1][0])} ${r3(Q[1][1])} ${r3(Q[2][0])} ${r3(Q[2][1])} ${r3(Q[3][0])} ${r3(Q[3][1])}`, foot);
    const k = bez(P, 0.5);
    d.skate(k.x, k.y, k.ang, foot);
    const other = foot === 'R' ? 'L' : 'R';
    const q = off(k, k.ang + (foot === 'R' ? -90 : 90), 0.9);
    d.skate(q.x - 0.5, q.y, k.ang, other, { lifted: true });
    d.tag(k.x, k.y - s * 1.3, 'OUT', foot);
    d.step(k.x + 1.8, k.y + s * 0.1, i + 1);
  });
  d.text(arcs[0].P[3][0] - 0.4, cy + 1.6, 'new foot down beside,', { size: 0.42, anchor: 'end' });
  d.text(arcs[0].P[3][0] - 0.4, cy + 2.2, 'no crossing', { size: 0.42, anchor: 'end' });
  d.travel(4, 10, 11, 10);
  return d.svg();
})();

// ---------------------------------------------------------------- Outside edge (c): big sharp C, full step-over
// Boards along the top. Right foot, OUTSIDE edge, so every C turns to the skater's right (clockwise on screen).
// Each C starts heading towards the boards and turns all the way round until it is heading towards the boards
// again; the left foot then steps right over in front and the right foot is set down for the next C.
// Traced as a looped cycloid: x = k t + r sin t, y = yc - r cos t. Heading is up-towards-the-boards at t = 3π/2.
const sharpC = (() => {
  const d = diagram({
    title: 'Outside edge, big sharp C with full step-over',
    desc: 'Boards along the top. Start facing the boards. On the right outside edge, carve a big, sharp C that turns you away from the boards and all the way round until you face the boards again. Step the left foot right over in front, set the right foot down, and carve the next C. Repeat on the left foot going the other way.',
    h: 12,
  });
  boards(d);
  const k = 0.75, rr = 2.7, yc = 4.5, x0 = 1.6 + 0.75 * Math.PI / 2 + 2.7;
  const pt = (t) => ({ x: x0 + k * t + rr * Math.sin(t), y: yc - rr * Math.cos(t) });
  const head = (t) => (Math.atan2(rr * Math.sin(t), k + rr * Math.cos(t)) * 180) / Math.PI;
  const trace = (t0, t1, n = 48) => {
    let s = '';
    for (let i = 0; i <= n; i++) {
      const p = pt(t0 + ((t1 - t0) * i) / n);
      s += `${i === 0 ? 'M' : 'L'} ${r3(p.x)} ${r3(p.y)} `;
    }
    return s.trim();
  };
  const TAU = 2 * Math.PI, gap = 0.45;
  const starts = [-Math.PI / 2, 1.5 * Math.PI, 3.5 * Math.PI]; // facing the boards
  starts.forEach((t0, i) => {
    const a = t0 + (i === 0 ? 0 : gap), b = t0 + TAU - gap;
    d.track(trace(a, b), 'R', { width: 3 });
    // Skate at the start (facing the boards) and mid-turn (facing away).
    const ps = pt(a + 0.05);
    d.skate(ps.x, ps.y, head(a + 0.05), 'R', { len: 1.4 });
    const pm = pt(t0 + Math.PI);
    d.skate(pm.x, pm.y, head(t0 + Math.PI), 'R', { len: 1.4 });
    if (i === 1) d.tag(pm.x, pm.y - 1.0, 'OUT', 'R');
    // Step-over by the left foot between Cs.
    if (i < 2) {
      const e = pt(b), n = pt(t0 + TAU + gap);
      d.track(`M ${r3(e.x - 0.25)} ${r3(e.y + 0.1)} L ${r3(n.x - 0.15)} ${r3(n.y + 0.35)}`, 'L', { width: 2.6 });
    }
  });
  const p1 = pt(starts[0]);
  d.step(p1.x - 1.0, p1.y + 0.4, 1);
  d.text(p1.x + 0.1, p1.y + 1.5, 'start facing the boards', { size: 0.4, anchor: 'start' });
  const pm0 = pt(starts[0] + Math.PI);
  d.step(pm0.x + 1.0, pm0.y - 0.6, 2);
  d.text(pm0.x + 0.6, pm0.y + 1.2, 'facing away', { size: 0.4, anchor: 'start' });
  const e0 = pt(starts[0] + TAU - gap);
  d.step(e0.x - 1.0, e0.y - 0.9, 3);
  d.text(e0.x - 0.6, yc + 4.1, 'facing the boards again: left foot steps right over', { size: 0.42, color: COL.L, weight: 600, anchor: 'start' });
  d.travel(4, 11, 11, 11);
  d.text(21.3, 11.3, 'repeat on the other foot', { size: 0.44, anchor: 'end', weight: 600, color: COL.ink });
  return d.svg();
})();

// ---------------------------------------------------------------- One-foot slalom, four ways
// Weave on ONE foot past a line of markers. Passing ABOVE a marker the path bends DOWN the page there.
//   Forward: down the page = skater's right. Backward: down the page = skater's left.
//   Right foot: bending to its right = OUTSIDE edge. Left foot: bending to its right = INSIDE edge.
function slalom(foot, backward) {
  const other = foot === 'R' ? 'L' : 'R';
  const footWord = foot === 'R' ? 'right' : 'left';
  const d = diagram({
    title: `One-foot slalom ${backward ? 'backwards' : 'forwards'}, ${footWord} foot`,
    desc: `${backward ? 'Skating backwards to the right, facing left, ' : 'Skating forwards to the right, '}on the ${footWord} foot only, weaving past a line of markers by rolling from one edge to the other of the same blade.`,
  });
  const cy = 5.2, cones = [5, 9, 13, 17];
  cones.forEach((x) => d.cone(x, cy));
  // Push off the other foot, out to its own side.
  // The pushing foot's side: forward, the left foot is up the page; backward, the left foot is down.
  const pushUp = (other === 'L') !== backward; // push foot is on the upper side
  const py = pushUp ? 3.0 : 7.4;
  if (backward) {
    d.skate(1.6, py, pushUp ? 155 : 205, other);
    d.track(pushUp ? 'M 2.0 2.6 Q 1.9 1.4 0.8 1.2' : 'M 2.0 7.8 Q 1.9 9.0 0.8 9.2', other, { width: 2.5 });
  } else {
    d.skate(1.5, py, pushUp ? -30 : 30, other);
    d.track(pushUp ? 'M 1.3 2.6 L 0.6 1.6' : 'M 1.3 7.8 L 0.6 8.8', other, { width: 2.5 });
  }
  d.text(2.6, pushUp ? 1.6 : 9.4, 'push', { size: 0.5, color: COL[other], weight: 600, anchor: 'start' });
  // Start the weave on the side away from the push foot.
  const first = pushUp ? 1 : -1; // +1: first marker passed below; -1: above
  d.step(0.8, cy, 1);
  const A = 1.3, B = 2.2;
  let path = `M 1.9 ${cy - first * 1.4} C 2.3 ${cy - first * 1.3} 2.6 ${cy - first * 0.9} 3 ${cy}`;
  const segs = [];
  for (let i = 0; i < 4; i++) {
    const x0 = 3 + 4 * i, s = (i % 2 === 0 ? 1 : -1) * first;
    const P = [[x0, cy], [x0 + A, cy + s * B], [x0 + 4 - A, cy + s * B], [x0 + 4, cy]];
    segs.push({ P, s });
    path += ` C ${P[1][0]} ${P[1][1]} ${P[2][0]} ${P[2][1]} ${P[3][0]} ${P[3][1]}`;
  }
  const last = segs[3].s;
  path += ` C ${19 + A * 0.5} ${cy - last * B * 0.5} 20.2 ${cy - last * 1.2} 21 ${cy - last * 1.3}`;
  d.track(path, foot);
  segs.forEach(({ P, s }, i) => {
    // s < 0: passing above the marker, the path bends down the page.
    const bendsDown = s < 0;
    const bendsToSkatersRight = bendsDown !== backward;
    const edge = bendsToSkatersRight === (foot === 'R') ? 'OUT' : 'IN';
    const m = bez(P, 0.5);
    d.tag(m.x, m.y + s * 1.05, edge, foot);
    d.skate(m.x, m.y, backward ? m.ang + 180 : m.ang, foot, { len: 1.4 });
    if (i < 2) d.step(m.x, m.y + s * 2.15, i + 2);
  });
  d.text(17, 9.0, `only the ${footWord} foot touches the ice`, { size: 0.42 });
  if (backward) d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  return d.svg();
}

const G = 'One-foot edges';
const CONT = 'Keep it continuous: one C runs straight into the next, as hard and as confidently as you can, all the way down the ice.';

const slalomCard = (foot, backward) => {
  const fw = foot === 'R' ? 'right' : 'left';
  // Which edge the first marker is taken on, matching slalom().
  const other = foot === 'R' ? 'L' : 'R';
  const pushUp = (other === 'L') !== backward;
  const firstBendsDown = !pushUp; // first marker passed above when the push foot is below
  const firstEdge = (firstBendsDown !== backward) === (foot === 'R') ? 'outside' : 'inside';
  const secondEdge = firstEdge === 'outside' ? 'inside' : 'outside';
  return {
    trains: backward
      ? 'Edge-to-edge control skating backwards, which a defenceman uses to stay in front of an attacker who changes direction.'
      : 'Rolling from one edge to the other on one foot, the control behind tight weaving with the puck.',
    steps: [
      `${backward ? 'Skating backwards, push' : 'Push'} off your other foot and lift it, so you are on your ${fw} foot only.`,
      `Roll onto the ${firstEdge} edge of the ${fw} skate to curve round the first marker.`,
      `Roll across to the ${secondEdge} edge to curve back round the next one. Keep alternating to the end.`,
    ],
    mistake: backward
      ? 'Bending at the waist instead of the knees, so the weight is over the toes and the edges will not grip.'
      : 'Twisting the shoulders to steer while the blade stays flat, so the line wobbles instead of curving.',
    check: 'Drawn with markers to show the line; without them, weave past imaginary points or along a painted line. Which edge comes first just depends on which side of the first marker you start; both are fine.',
  };
};

export default [
  {
    id: 'one-foot-inside-edge-forward',
    group: G,
    title: 'Inside edge forward (strong push & touch the ice)',
    svg: cCuts({
      title: 'Inside edge forward, one-foot C-cuts',
      desc: 'Skating forwards to the right on the right foot only, left foot lifted. The right skate carves a series of C shapes: out to the skater\'s right on the inside edge and curving back under the body, then straight into the next C. A hand touches the ice on the inside of a C.',
      edge: 'IN', backward: false, touch: true,
    }),
    card: {
      trains: 'Grip and power on the inside edge, the edge every stride, crossover and tight turn pushes from.',
      steps: [
        'Glide on your right foot, left foot lifted, knee well bent.',
        'Push the right skate out to the side on its inside edge, hard, carving the shape of a C.',
        'Curve it back under your body and go straight into the next C. Bend low enough to touch the ice with a hand. ' + CONT + '',
        'Repeat on the other foot: work both feet equally.',
      ],
      mistake: 'Making small, timid Cs on a flat blade, so the skate skids instead of biting and you hardly move.',
      check: '"Touch the floor" read as: bend the skating knee so low that a hand touches the ice beside you, drawn on the inside of the C. Some coaches have the player touch the skating boot instead; confirm which you meant.',
    },
  },
  {
    id: 'one-foot-outside-edge-forward-step-overs',
    group: G,
    title: 'Outside edge forward: small step-overs',
    svg: stepOvers,
    card: {
      trains: 'Getting onto the outside edge quickly, as the inside foot does in every crossover.',
      steps: [
        'Skate roughly straight down the ice with small, quick steps.',
        'Step your left foot over in front of the right and land it on its outside edge.',
        'Step your right foot over in front of the left and land it on its outside edge. Keep alternating, continuous and confident.',
      ],
      mistake: 'Landing the stepping foot flat or on its inside edge, so there is no curve and it is just a walk.',
      check: 'Read as feet alternating, each one crossing in front of the other and landing on its OWN outside edge, with each landing curving a little back across the line, so the overall path stays roughly straight. If you meant one foot only (stepping the same foot over each time), the diagram needs changing.',
    },
  },
  {
    id: 'one-foot-outside-edge-forward-lean-glide',
    group: G,
    title: 'Outside edge forward: big lean-and-glide arcs',
    svg: leanGlide,
    card: {
      trains: 'Trusting a deep outside edge at speed, which is what lets a skater carve a wide turn without slowing.',
      steps: [
        'Glide on your right foot and lean over onto its outside edge, so you carve a big arc to your right.',
        'At the end of the arc, set your left foot down beside the right (do not cross) and lean over onto its outside edge, carving a big arc to your left.',
        'Keep switching feet, leaning further each time. Glide, do not step. Go as hard and as confidently as you can.',
      ],
      mistake: 'Leaning only the upper body while the blade stays flat, so the skater tips over instead of curving.',
      check: 'Read as alternating feet, one big arc per foot, the new foot placed beside the old one rather than crossed over it.',
    },
  },
  {
    id: 'one-foot-outside-edge-forward-sharp-c',
    group: G,
    title: 'Outside edge forward: big sharp C with full step-over',
    svg: sharpC,
    card: {
      trains: 'A deep, sharp outside edge with a full crossover, the base of a tight, powerful turn.',
      steps: [
        'Start facing the boards, on your right foot.',
        'Carve a big, sharp C on the right outside edge, turning away from the boards and all the way round.',
        'When you face the boards again, step the left foot right over in front, put the right foot back down and carve the next C. Keep it continuous and confident, then do it on the left foot going the other way.',
      ],
      mistake: 'Opening the C up into a wide, lazy curve because the skater does not lean far enough over the edge.',
      check: 'This was the hardest of the three to draw. A C that starts and ends facing the boards has to turn all the way round, so I drew each C as a near-loop on the right foot, travelling along the boards, with the left foot crossing right over in front between Cs. If you meant the Cs to alternate feet, or each C to turn only half-way (boards to away from the boards), please say and it will be redrawn.',
    },
  },
  {
    id: 'one-foot-inside-edge-backward',
    group: G,
    title: 'Inside edge backwards (strong push & touch the ice)',
    svg: cCuts({
      title: 'Inside edge backwards, one-foot C-cuts',
      desc: 'Skating backwards to the right, facing left, on the right foot only. The right skate carves a series of C shapes on the inside edge: heel out to the skater\'s right and curving back under the body, then straight into the next C. A hand touches the ice on the inside of a C.',
      edge: 'IN', backward: true, touch: true,
    }),
    card: {
      trains: 'Power on the backward inside edge, the push a defenceman uses to skate backwards.',
      steps: [
        'Skating backwards on your right foot, left foot lifted, knees well bent.',
        'Push the heel out on the inside edge, hard, carving the shape of a C.',
        'Pull it back under your body and go straight into the next C. Bend low enough to touch the ice with a hand. ' + CONT + '',
        'Repeat on the other foot: work both feet equally.',
      ],
      mistake: 'Leaning forward over the toes, so the blade rocks off the edge and the skater stalls.',
      check: '"Touch the floor" read the same way as the forward drill: bend until a hand touches the ice on the inside of the C.',
    },
  },
  {
    id: 'one-foot-outside-edge-backward-free-front',
    group: G,
    title: 'Outside edge backwards, free foot in front',
    svg: cCuts({
      title: 'Outside edge backwards, one-foot C-cuts, free foot in front',
      desc: 'Skating backwards to the right, facing left, on the right foot only. The right skate carves a series of C shapes on the outside edge, bulging to the skater\'s left and curving back to their right. The lifted left foot is held in front, the way the skater faces.',
      edge: 'OUT', backward: true, free: 'front',
    }),
    card: {
      trains: 'Balance and power on the backward outside edge, which backward crossovers and pivots depend on.',
      steps: [
        'Skating backwards on your right foot, left foot lifted and held in front of you.',
        'Carve a C on the outside edge of the right skate, out to your left and curving back to your right.',
        'Go straight into the next C. ' + CONT + '',
        'Repeat on the other foot: work both feet equally.',
      ],
      mistake: 'Looking down at the skates, which pitches the weight forward and flattens the blade.',
      check: 'Your feedback described the three forward outside-edge versions; I assumed the backward outside-edge drills stay as one-foot C-cuts, done continuously. "In front" read as the free foot held ahead of the body in the direction the skater FACES.',
    },
  },
  {
    id: 'one-foot-outside-edge-backward-free-behind',
    group: G,
    title: 'Outside edge backwards, free foot behind',
    svg: cCuts({
      title: 'Outside edge backwards, one-foot C-cuts, free foot behind',
      desc: 'Skating backwards to the right, facing left, on the right foot only. The right skate carves a series of C shapes on the outside edge, bulging to the skater\'s left and curving back to their right. The lifted left foot is held behind, towards where the skater is going.',
      edge: 'OUT', backward: true, free: 'behind',
    }),
    card: {
      trains: 'Balance on the backward outside edge with the weight further back, as when looking over the shoulder to skate backwards.',
      steps: [
        'Skating backwards on your right foot, left foot lifted and held behind you, towards where you are going.',
        'Carve a C on the outside edge of the right skate, out to your left and curving back to your right.',
        'Go straight into the next C. ' + CONT + '',
        'Repeat on the other foot: work both feet equally.',
      ],
      mistake: 'Sitting back on the heel so far that the blade slips out; keep the weight over the middle of the blade.',
      check: 'As for the "free foot in front" version, I assumed this stays a one-foot C-cut drill. "Behind" read as the free foot held behind the body, on the side the skater is travelling towards.',
    },
  },
  ...[['R', false], ['L', false], ['R', true], ['L', true]].map(([foot, backward]) => ({
    id: `one-foot-slalom-${backward ? 'backward' : 'forward'}-${foot === 'R' ? 'right' : 'left'}`,
    group: G,
    title: `One-foot slalom ${backward ? 'backwards' : 'forwards'}, ${foot === 'R' ? 'right' : 'left'} foot`,
    svg: slalom(foot, backward),
    card: slalomCard(foot, backward),
  })),
];
