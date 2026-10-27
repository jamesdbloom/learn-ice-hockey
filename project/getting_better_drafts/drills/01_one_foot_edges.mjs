// One-foot edges (DRAFT, 22 Oct 2026; redrawn 26 Oct 2026 after the owner's second review).
// Every drill travels left to right. Drills 1, 3, 4, 5 and 6 alternate feet, one arc per foot;
// drill 7 steps backwards along a blue line; the slaloms stay on one foot.
//
// Geometry used throughout (screen coords, y down the page):
//   Forward, facing +x: the skater's LEFT is up the page, RIGHT is down.
//   Backward, travelling +x but facing -x (toe points against travel): the skater's LEFT is DOWN the page.
//   The path always bends towards the side the blade leans to: the inside edge of the right foot = its left side.
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

// ---------------------------------------------------------------- Outside edge: sharp Cs with a full crossover
// Like the lean-and-glide arcs, but each new foot CROSSES OVER in front of the old one before it lands. The
// crossover lets each C turn further, so every arc is a tighter, sharper C than the lean-and-glide arcs.
// Each C ends heading slightly back on itself; the crossing foot lands on the far side of the old track.
//   Forward (facing +x, skater's left = up): right outside edge curves right (an arch bulging up),
//     left outside edge curves left (a dip bulging down).
//   Backward (facing -x, skater's left = down): right outside edge curves to the skater's right = up the page
//     (a dip bulging down), left outside edge curves down (an arch bulging up). "In front" is the side the
//     skater faces, i.e. back along the line of travel, so the geometry is the forward one mirrored top to bottom.
function sharpCs({ title, desc, backward = false }) {
  const d = diagram({ title, desc });
  const cy = 5.5, H = 3.4, L = 5.0, over = 0.6, cross = 0.6;
  const sR = backward ? 1 : -1; // the right foot's bulge
  let x0 = 2.0;
  const arcs = [0, 1, 2].map((i) => {
    const s = i % 2 === 0 ? sR : -sR;
    const P = [[x0, cy], [x0 - over, cy + s * H], [x0 + L + over, cy + s * H], [x0 + L, cy]];
    x0 = x0 + L - cross; // the next foot lands across, on the far side of the old foot's end
    return { P, foot: i % 2 === 0 ? 'R' : 'L', s };
  });
  const skateAng = (a) => (backward ? a + 180 : a);
  arcs.forEach(({ P, foot, s }, i) => {
    d.track(`M ${r3(P[0][0])} ${r3(P[0][1])} C ${r3(P[1][0])} ${r3(P[1][1])} ${r3(P[2][0])} ${r3(P[2][1])} ${r3(P[3][0])} ${r3(P[3][1])}`, foot);
    const k = bez(P, 0.5);
    d.skate(k.x, k.y, skateAng(k.ang), foot);
    const other = foot === 'R' ? 'L' : 'R';
    // The lifted foot beside the skating foot, outside the curve.
    d.skate(k.x - 0.5, k.y + s * 0.9, skateAng(k.ang), other, { lifted: true });
    d.tag(k.x, k.y - s * 1.3, 'OUT', foot);
    d.step(k.x + 1.8, k.y + s * 0.1, i + 1);
    // The crossover: the other foot, lifted, goes over in front of this foot and lands across it.
    if (i < 2) {
      const E = P[3], nx = arcs[i + 1].P[0][0];
      const lift = { x: E[0] + 1.45, y: cy + s * 0.9 };
      d.skate(lift.x, lift.y, skateAng(0), other, { lifted: true, len: 1.1 });
      d.track(`M ${r3(lift.x - 0.7)} ${r3(lift.y - s * 0.2)} Q ${r3(E[0] + 0.1)} ${r3(cy - s * 1.3)} ${r3(nx - 0.05)} ${r3(cy - s * 0.1)}`, other, { air: true, width: 2.6 });
    }
  });
  const E0 = arcs[0].P[3], sy = -sR; // label on the side away from the first arc's bulge
  d.text(E0[0] - 1.0, cy + sy * (backward ? 3.5 : 2.9), 'left foot crosses', { size: 0.42, color: COL.L, weight: 600, anchor: 'end' });
  d.text(E0[0] - 1.0, cy + sy * (backward ? 2.9 : 3.5), 'right over in front', { size: 0.42, color: COL.L, weight: 600, anchor: 'end' });
  d.text(18.6, 9.0, 'every new foot crosses over', { size: 0.42 });
  if (backward) d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  return d.svg();
}

const sharpC = sharpCs({
  title: 'Outside edge, sharp Cs with a full crossover',
  desc: 'Sharp C shapes down the ice, alternating feet. Carve a sharp C on the right outside edge, curving right. At the end, lift the left foot right over in front of the right and land it on its outside edge, carving a sharp C to the left. Keep alternating, crossing over every time.',
});

// ---------------------------------------------------------------- Outside edge: stepping backwards along a blue line
// No C shapes. Skating backwards (travelling +x, facing -x, skater's left = DOWN the page), small alternating
// steps. Each step puts the stepping foot BEHIND (further along the line of travel) and ACROSS the blue line to
// the far side, so the right foot always lands on the skater's left of the line (down) and the left foot on the
// skater's right (up). Crossing the line is what forces the blade onto its outside edge.
const blueLineSteps = (() => {
  const d = diagram({
    title: 'Outside edge, stepping backwards along a blue line',
    desc: 'Skating backwards to the right, facing left, straight down a blue line. Small alternating steps, no C shapes. Each step puts the stepping foot behind you and across the line: the right foot lands on your left of the line and the left foot on your right, each on its outside edge.',
  });
  const cy = 5.2, gap = 1.05, dx = 2.6;
  // Blue line, 1 ft wide, in the rink kit's blue.
  d.raw(`<rect x="${f(0.4)}" y="${f(cy - 0.5)}" width="${f(d.w - 0.8)}" height="${f(1.0)}" fill="#0f5a8f" fill-opacity="0.35"/>`);
  d.text(0.9, cy - 0.7, 'blue line', { size: 0.4, anchor: 'start', color: '#0f5a8f', weight: 600 });
  const steps = [0, 1, 2, 3, 4, 5].map((i) => {
    const foot = i % 2 === 0 ? 'R' : 'L';
    return { foot, x: 3.2 + i * dx, y: foot === 'R' ? cy + gap : cy - gap };
  });
  steps.forEach(({ foot, x, y }, i) => {
    // A short glide on the outside edge after landing: toe points back against travel.
    // Backward, the skater's right is UP the page: the right foot's outside edge curves up, back towards the
    // line, and the left foot's curves down, back towards the line.
    const side = foot === 'R' ? 1 : -1; // R below the line, L above
    d.track(`M ${r3(x + 0.6)} ${r3(y)} Q ${r3(x + 1.2)} ${r3(y - side * 0.05)} ${r3(x + 1.6)} ${r3(y - side * 0.2)}`, foot, { width: 2.6 });
    d.skate(x, y, 180, foot, { len: 1.3 });
    if (i < 4) d.tag(x, y + side * 0.8, 'OUT', foot);
    // The step: from its last spot, behind the other foot, across to its own landing.
    if (i >= 2 && i <= 3) {
      const prev = steps[i - 2];
      d.track(`M ${r3(prev.x + 0.9)} ${r3(prev.y - side * 0.15)} Q ${r3((prev.x + x) / 2 + 0.4)} ${r3(y + side * 1.4)} ${r3(x - 0.75)} ${r3(y + side * 0.15)}`, foot, { air: true, width: 2.4 });
    }
  });
  d.step(steps[0].x - 0.2, cy + gap + 1.9, 1);
  d.step(steps[1].x - 0.2, cy - gap - 1.9, 2);
  d.step(steps[2].x - 0.2, cy + gap + 1.9, 3);
  d.text(steps[4].x, cy + gap + 1.9, 'right foot lands on your left of the line', { size: 0.42, color: COL.R, weight: 600 });
  d.text(steps[3].x, cy - gap - 1.9, 'left foot lands on your right of the line', { size: 0.42, color: COL.L, weight: 600 });
  d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  return d.svg();
})();

// ---------------------------------------------------------------- Inside edge: big alternating arcs
// Feet alternate, no crossing, one big arc per foot on its INSIDE edge. Same serpentine as the lean-and-glide
// arcs, but the feet are swapped: the inside edge of a foot curves towards the OTHER foot's side.
//   Forward (facing +x, skater's left = up): right inside edge curves left (a dip bulging down),
//     left inside edge curves right (an arch bulging up).
//   Backward (facing -x, skater's left = down): right inside edge curves to the skater's left = down the page
//     (an arch bulging up), left inside edge curves up (a dip bulging down).
// On an inside edge the lifted foot and the touching hand are both on the inside of the curve.
function insideArcs({ title, desc, backward }) {
  const d = diagram({ title, desc });
  const cy = 5.5, A = 2.2, L = 6.2;
  const sR = backward ? -1 : 1; // the right foot's bulge
  const arcs = [0, 1, 2].map((i) => {
    const x0 = 1.5 + i * L, s = i % 2 === 0 ? sR : -sR;
    return { P: [[x0, cy], [x0 + 0.25 * L, cy + s * A * 1.33], [x0 + 0.75 * L, cy + s * A * 1.33], [x0 + L, cy]], foot: i % 2 === 0 ? 'R' : 'L', s };
  });
  const skateAng = (a) => (backward ? a + 180 : a);
  arcs.forEach(({ P, foot, s }, i) => {
    const gap = i === 0 ? 0 : 0.35; // a tiny gap where the new foot is set down beside the old
    const Q = [[P[0][0] + gap, P[0][1] + s * 0.25], P[1], P[2], P[3]];
    d.track(`M ${r3(Q[0][0])} ${r3(Q[0][1])} C ${r3(Q[1][0])} ${r3(Q[1][1])} ${r3(Q[2][0])} ${r3(Q[2][1])} ${r3(Q[3][0])} ${r3(Q[3][1])}`, foot);
    const k = bez(P, 0.5);
    d.skate(k.x, k.y, skateAng(k.ang), foot);
    const other = foot === 'R' ? 'L' : 'R';
    // Lifted foot on the inside of the curve (towards the centre), beside the skating foot.
    d.skate(k.x - 0.5, k.y - s * 0.9, skateAng(k.ang), other, { lifted: true });
    d.tag(k.x, k.y + s * 0.95, 'IN', foot);
    d.step(k.x + 1.8, k.y - s * 0.1, i + 1);
    if (i === 1) hand(d, k.x + 0.7, k.y - s * 2.0, 'hand touches ice', s < 0);
  });
  const sideY = (n) => cy - sR * n; // the side away from the first arc's bulge
  d.text(arcs[0].P[3][0] - 0.4, sideY(sR > 0 ? 2.6 : 2.0), 'new foot down beside,', { size: 0.42, anchor: 'end' });
  d.text(arcs[0].P[3][0] - 0.4, sideY(sR > 0 ? 2.0 : 2.6), 'no crossing', { size: 0.42, anchor: 'end' });
  d.text(18.6, 1.0, 'push hard into every arc', { size: 0.42 });
  if (backward) d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10, 11, 10);
  return d.svg();
}

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
    svg: insideArcs({
      title: 'Inside edge forward, big alternating arcs',
      desc: 'Big arcs down the ice, alternating feet. Push hard onto the right inside edge and carve a big arc to your left. Set the left foot down beside it (no crossing) and carve a big arc to your right on its inside edge. Bend low enough to touch the ice with a hand on the inside of the arc.',
      backward: false,
    }),
    card: {
      trains: 'Grip and power on the inside edge, the edge every stride, crossover and tight turn pushes from.',
      steps: [
        'Push hard onto your right foot and glide on its inside edge, so you carve a big arc to your left.',
        'At the end of the arc, set your left foot down beside the right (do not cross). Carve a big arc to your right on its inside edge.',
        'Keep switching feet. Push hard into every arc.',
        'Bend your knees low enough to touch the ice with a hand on the inside of the arc.',
      ],
      mistake: 'Making small, timid arcs on a flat blade, so the skate skids instead of biting and you hardly move.',
      check: 'Now drawn as alternating inside-edge arcs, one per foot, as you asked. "Touch the ice" is drawn as a hand on the inside of the arc. Some coaches have you touch the skating boot instead; confirm which you meant.',
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
        'Carve a sharp C on the outside edge of your right foot, curving to your right.',
        'At the end of the C, step your left foot right over in front of the right. Land it on its outside edge and carve a sharp C the other way.',
        'Keep alternating, crossing over every time. Keep it continuous and confident.',
      ],
      mistake: 'Opening the C up into a wide, lazy curve because you do not lean far enough over the edge.',
      check: 'Now drawn as alternating sharp Cs with a full crossover between them, as you asked.',
    },
  },
  {
    id: 'one-foot-inside-edge-backward',
    group: G,
    title: 'Inside edge backwards (strong push & touch the ice)',
    svg: insideArcs({
      title: 'Inside edge backwards, big alternating arcs',
      desc: 'Skating backwards to the right, facing left. Big arcs, alternating feet. Push hard onto the right inside edge and carve a big arc to your left. Set the left foot down beside it (no crossing) and carve a big arc to your right on its inside edge. Bend low enough to touch the ice with a hand on the inside of the arc.',
      backward: true,
    }),
    card: {
      trains: 'Power on the backward inside edge, the push a defenceman uses to skate backwards.',
      steps: [
        'Skating backwards, push hard onto your right foot and glide on its inside edge, so you carve a big arc to your left.',
        'At the end of the arc, set your left foot down beside the right (do not cross). Carve a big arc to your right on its inside edge.',
        'Keep switching feet. Push hard into every arc.',
        'Bend your knees low enough to touch the ice with a hand on the inside of the arc.',
      ],
      mistake: 'Leaning forward over the toes, so the blade rocks off the edge and you stall.',
      check: 'Now drawn as alternating inside-edge arcs, the backward version of the forward drill, as you asked. "Touch the ice" is read the same way as the forward drill: a hand on the inside of the arc.',
    },
  },
  {
    id: 'one-foot-outside-edge-backward-free-front',
    group: G,
    title: 'Outside edge backwards, free foot in front',
    svg: sharpCs({
      title: 'Outside edge backwards, alternating Cs with the foot put down in front',
      desc: 'Skating backwards to the right, facing left. Alternating feet, each carving a C on its outside edge. At the end of each C, the other foot crosses over in front of it, on the side you face, and lands on its outside edge to carve the next C the other way.',
      backward: true,
    }),
    card: {
      trains: 'Balance and power on the backward outside edge, which backward crossovers and pivots depend on.',
      steps: [
        'Skating backwards, carve a C on the outside edge of your right foot, curving to your right.',
        'At the end of the C, put your left foot down in front of the right, crossing over. Land it on its outside edge and carve a C the other way.',
        'Keep alternating, crossing in front every time. Keep it continuous and confident.',
      ],
      mistake: 'Looking down at the skates, which pitches the weight forward and flattens the blade.',
      check: 'Now drawn as alternating feet, each carving a C on its outside edge, with the new foot put down in front of the other, as you asked. "In front" is read as the side you face, so the feet cross in front. This makes it the backward version of the sharp-C drill.',
    },
  },
  {
    id: 'one-foot-outside-edge-backward-free-behind',
    group: G,
    title: 'Outside edge stepping backwards (along a blue line)',
    svg: blueLineSteps,
    card: {
      trains: 'Finding the backward outside edge on every step, the edge a backward crossover lands on.',
      steps: [
        'Stand on a blue line, facing back up it, and skate backwards down the line.',
        'Step your right foot behind you and across the line, so it lands on your left of the line, on its outside edge.',
        'Step your left foot behind you and across to your right of the line, on its outside edge.',
        'Keep alternating with small steps. No C shapes: just walk backwards down the line.',
      ],
      mistake: 'Putting the foot down on your own side of the line, so it lands flat or on its inside edge.',
      check: 'Redrawn to your description: stepping backwards down a blue line, no C shapes. My reading is that each foot crosses the line, so the right foot lands on your left of the line and the left foot on your right, each on its outside edge. If you meant each foot stays on its own side of the line, please say and it will be redrawn. Each short glide now curves back towards the line, which is the way an outside edge curves; it was drawn curving away. Figure-skating "backward cross strokes" are taught the same way, as close "step behinds" on outside edges (Karen Olson, icoachskating.com).',
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
