// Mohawks, Starts and Two-foot edges (DRAFT, 22 Oct 2026).
import { diagram, COL } from './lib/draw.mjs';

const G = { mohawk: 'Mohawks', start: 'Starts', two: 'Two-foot edges' };
const rad = (a) => (a * Math.PI) / 180;

// Heel-to-heel (mohawk) stance centred on (x, y), lead foot's toe pointing `dir`.
function heelToHeel(d, x, y, dir, lead, { gap = 1.15 } = {}) {
  const trail = lead === 'R' ? 'L' : 'R';
  const ux = Math.cos(rad(dir)), uy = Math.sin(rad(dir));
  d.skate(x + ux * gap, y + uy * gap, dir, lead);
  d.skate(x - ux * gap, y - uy * gap, dir + 180, trail);
}

// ---------------------------------------------------------------- 1 Mohawk side to side
// Each glide in the heel-to-heel stance is a CURVED arc (owner, 26 Oct 2026): it leaves one side of the lane
// heading along it and curves round to cross to the other side, both blades on their outside edges.
// Plain: at each side the skater PIVOTS on the leading foot, turning on it so the other leg leads the next arc.
// Stepping: the switch is two quick steps instead of a pivot.
const bezPt = (P, t) => {
  const u = 1 - t;
  const c = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  const x = c[0] * P[0][0] + c[1] * P[1][0] + c[2] * P[2][0] + c[3] * P[3][0];
  const y = c[0] * P[0][1] + c[1] * P[1][1] + c[2] * P[2][1] + c[3] * P[3][1];
  const dx = 3 * u * u * (P[1][0] - P[0][0]) + 6 * u * t * (P[2][0] - P[1][0]) + 3 * t * t * (P[3][0] - P[2][0]);
  const dy = 3 * u * u * (P[1][1] - P[0][1]) + 6 * u * t * (P[2][1] - P[1][1]) + 3 * t * t * (P[3][1] - P[2][1]);
  return { x, y, ang: (Math.atan2(dy, dx) * 180) / Math.PI };
};
const mohawk = (stepping) => {
  const d = diagram({
    title: stepping ? 'Stepping mohawks side to side' : 'Mohawk side to side',
    desc: stepping
      ? 'Down a lane in a heel-to-heel mohawk stance, each glide a curved arc from one side of the lane to the other. At each side the skater turns the shoulders into the new direction first, loads the legs, and jumps from skate to skate onto the new lead foot, then curves back across with that foot leading.'
      : 'Down a lane in a heel-to-heel mohawk stance, each glide a curved arc from one side of the lane to the other. At each side the skater pivots on the leading foot and turns into the mohawk with the other leg leading, then curves back across.',
  });
  // lane edges
  d.iceLine(1, 1.1, 21, 1.1, '#9fb6c8');
  d.iceLine(1, 9.7, 21, 9.7, '#9fb6c8');
  // Arc A: right foot leads, curves from heading right to heading down. Arc B: left leads, curves up. Arc C: as A.
  const T = 2.3, Bt = 8.4; // top and bottom of the arcs
  const arc = (x0, down) => {
    const [ya, yb] = down ? [T, Bt] : [Bt, T];
    return [[x0, ya], [x0 + 4.0, ya], [x0 + 5.6, ya + (yb - ya) * 0.35], [x0 + 5.6, yb]];
  };
  const legs = [
    { P: arc(1.4, true), lead: 'R' },
    { P: arc(8.2, false), lead: 'L' },
    { P: arc(15.0, true), lead: 'R' },
  ];
  legs.forEach((g) => {
    const P = g.P;
    d.track(`M ${P[0][0]} ${P[0][1]} C ${P[1][0]} ${P[1][1]} ${P[2][0]} ${P[2][1]} ${P[3][0]} ${P[3][1]}`, g.lead, { width: 2.5 });
    const m = bezPt(P, 0.5);
    heelToHeel(d, m.x, m.y, m.ang, g.lead);
  });
  // The switch at the end of arc A (bottom) and arc B (top).
  const ends = [{ P: legs[0].P, lead: 'R', down: true }, { P: legs[1].P, lead: 'L', down: false }];
  ends.forEach(({ P, lead, down }) => {
    const E = P[3], v = down ? 1 : -1; // v: the way the arc was heading (down or up the page)
    const other = lead === 'R' ? 'L' : 'R';
    if (!stepping) {
      // Pivot: the leading foot turns on the spot; the other foot swings round from behind it to lead.
      const px = E[0] + 0.2, py = E[1] + v * 0.15;
      d.skate(px, py, v > 0 ? 45 : -45, lead, { len: 1.3 });
      d.raw(`<circle cx="${(px * 30).toFixed(1)}" cy="${(py * 30).toFixed(1)}" r="24" fill="none" stroke="${COL.ink}" stroke-width="1.5" stroke-dasharray="4 3"/>`);
      d.track(`M ${E[0] - 0.5} ${E[1] - v * 1.5} Q ${E[0] + 1.9} ${E[1] - v * 1.7} ${E[0] + 1.9} ${E[1] - v * 0.25}`, other, { width: 2 });
      d.text(E[0] + 1.25, E[1] + (down ? 0.95 : -0.55), `pivot on the ${lead === 'R' ? 'right' : 'left'} foot`, { size: 0.42, color: COL[lead], weight: 600, anchor: 'start' });
    } else {
      // Shoulders lead, then a jump from skate to skate (owner's source, 28 Oct 2026: Hockey Tutorial,
      // "Master The Elite Mohawk Turn", 13:30-14:01 — "add a shoulder motion jumping from skate to skate…
      // more power output… more weight into the blade"). The new lead foot lands, then the other follows heel to heel.
      const dirNew = down ? -45 : 45;
      d.track(`M ${E[0] - 1.1} ${E[1] - v * 1.4} Q ${E[0] - 1.6} ${E[1] + v * 0.7} ${E[0] - 0.2} ${E[1] + (down ? 0.25 : -0.25)}`, other, { air: true, width: 2.2 });
      d.skate(E[0] + 0.3, E[1] + (down ? 0.2 : -0.2), dirNew, other, { len: 1.1 });
      d.skate(E[0] + 1.2, E[1] + (down ? -0.3 : 0.3), dirNew + 180, lead, { len: 1.1 });
      // One line each, in the margin outside the lane (the larger type no longer fits two lines inside it).
      if (down) d.text(1.0, 10.55, 'shoulders turn, then jump skate to skate', { size: 0.42, anchor: 'start', weight: 600 });
      else d.text(21.3, 0.8, 'shoulders turn, then jump skate to skate', { size: 0.42, anchor: 'end', weight: 600 });
    }
  });
  d.text(3.2, 5.0, 'heels in line', { size: 0.42 });
  d.text(3.2, 5.7, 'curve across', { size: 0.42 });
  const m0 = bezPt(legs[0].P, 0.5), m1 = bezPt(legs[1].P, 0.5);
  d.step(legs[0].P[0][0], legs[0].P[0][1] + 0.9, 1);
  d.step(m0.x + 1.5, m0.y - 0.9, 2);
  d.step(legs[0].P[3][0] - 1.3, legs[0].P[3][1] + 0.3, 3);
  d.step(m1.x + 1.5, m1.y + 0.9, 4);
  d.travel(16.5, 10.3, 20.5, 10.3);
  return d.svg();
};

// ---------------------------------------------------------------- 3 Explosive V-start
const vStart = (() => {
  const d = diagram({
    title: 'Explosive V-start',
    desc: 'From a standing V (heels in, toes turned out) the skater drives forward. The first stride with each foot is short and driving, like running, each push going out to the side; the next strides get longer and the toes come round, and after a few strides the skater is in full stride.',
  });
  // Start V: left foot up the page (skater faces +x, their left is -y).
  d.skate(2.6, 4.9, -45, 'L');
  d.skate(2.6, 6.1, 45, 'R');
  d.text(2.6, 3.4, 'V', { size: 0.6, weight: 700, color: COL.ink });
  d.step(1.3, 5.5, 1);
  // Strides: [x, y, angle, foot] with push tracks fanning out and back.
  const strides = [
    [4.4, 6.5, 50, 'R'],
    [6.2, 4.4, -48, 'L'],
    [8.6, 6.7, 40, 'R'],
    [11.4, 4.3, -32, 'L'],
    [15.0, 6.6, 22, 'R'],
    [19.2, 4.8, -12, 'L'],
  ];
  strides.forEach(([x, y, a, f]) => {
    d.skate(x, y, a, f);
    // push: from foot, out to its own side and back
    const side = f === 'R' ? 1 : -1;
    d.track(`M ${x - 0.3} ${y + side * 0.25} L ${x - 0.9} ${y + side * 1.25}`, f, { width: 2 });
  });
  d.text(5.3, 9.0, 'first two: short, driving', { size: 0.44 });
  d.text(16.8, 9.0, 'longer, toes come round', { size: 0.44 });
  d.step(4.6, 7.85, 2);
  d.step(8.4, 3.2, 3);
  d.step(17.2, 3.2, 4);
  d.travel(4, 10.2, 12, 10.2);
  return d.svg();
})();

// ---------------------------------------------------------------- 4 Explosive crossover start
const xStart = (() => {
  // Redrawn 27 Oct 2026 after checking coaching sources (IIHF coaching page, Hockey Canada skills glossary,
  // Ice Hockey Systems drill notes). Consensus: side-on stance, head/shoulders/hips turn first, the skater
  // falls over the lead leg, ONE crossover (the far foot crosses in front while the lead foot pushes under on
  // its outside edge), then a few short, quick "running" strides on the toes in a V, then full strides.
  // The skater faces UP the page and goes right, so their right foot leads and "in front" is up the page.
  const d = diagram({
    title: 'Explosive cross-over start',
    desc: 'Standing side-on, facing up the page, to go right. Turn the head, shoulders and hips to the right and fall over the right leg. The left foot crosses over in front while the right foot pushes under the body on its outside edge. Then a few short, quick running strides on the toes, feet turned out in a V, before longer strides.',
  });
  // 1: side-on stance, toes up the page. Left foot is on the skater's left (-x).
  d.skate(1.8, 6.6, -90, 'L', { len: 1.3 });
  d.skate(3.4, 6.6, -90, 'R', { len: 1.3 });
  d.text(2.6, 9.55, 'side-on,', { size: 0.42 });
  d.text(2.6, 10.25, 'knees bent', { size: 0.42 });
  d.step(1.0, 4.9, 1);
  // 2: the left foot lifts, crosses over in front (up the page) and lands on the far side of the right foot;
  //    the right foot pushes under the body, sideways towards the skater's left, on its outside edge.
  d.track('M 1.9 5.6 Q 3.0 3.3 5.0 5.6', 'L', { air: true, width: 2.5 });
  d.skate(5.4, 6.3, -35, 'L', { len: 1.3 });
  d.text(0.6, 3.75, 'left crosses over in front', { size: 0.42, color: COL.L, weight: 600, anchor: 'start' });
  d.track('M 4.0 7.3 L 2.2 7.6', 'R', { width: 2.5 });
  d.tag(3.1, 8.3, 'OUT', 'R');
  d.text(4.15, 8.5, 'right pushes under', { size: 0.42, color: COL.R, weight: 600, anchor: 'start' });
  d.step(6.45, 4.75, 2);
  // 3: short, quick running strides on the toes, feet turned out in a V, then longer strides.
  const strides = [[7.8, 7.4, 35, 'R'], [9.4, 5.8, -35, 'L'], [11.0, 7.3, 30, 'R'], [13.0, 5.9, -28, 'L'], [16.0, 7.1, 20, 'R'], [19.4, 6.0, -15, 'L']];
  strides.forEach(([x, y, a, f]) => d.skate(x, y, a, f, { len: 1.3 }));
  d.step(7.75, 4.45, 3);
  d.text(11.2, 3.95, 'short, quick steps', { size: 0.42 });
  d.text(11.2, 4.65, 'on your toes', { size: 0.42 });
  d.text(17.9, 4.65, 'then longer strides', { size: 0.42 });
  d.text(21.3, 1.0, 'facing this way ↑', { size: 0.42, anchor: 'end' });
  d.travel(8, 10.2, 19, 10.2);
  return d.svg();
})();

// ---------------------------------------------------------------- 5/6 Crossovers & stop, diagonal zig-zag
// Owner, 27 Oct 2026: two crossover steps slightly DIAGONALLY forwards (or backwards) and sideways, a stop,
// then two the other way and a stop, so the path zig-zags along the ice. Travel is always left to right.
//   Forward: the skater faces right (+x); their left is up the page. Leg 1 goes down-right (to their right).
//   Backward: the skater faces left (-x), toes pointing back against travel; their left is DOWN the page.
//     Leg 1 goes up-right (to their right).
// On each leg the crossing foot passes IN FRONT (the side the skater faces) and the lead foot steps out from
// behind. Forward stop: one foot, the lead blade across the line of travel, inside edge biting.
// Backward stop: two-foot V-stop, heels pushed out, toes in.
function crossLeg(d, { x0, y0, ang, lead, backward, skipStart = false }) {
  const cross = lead === 'R' ? 'L' : 'R';
  const u = [Math.cos(rad(ang)), Math.sin(rad(ang))];
  const p = [u[1], -u[0]], fx = backward ? -1 : 1;
  const nf = p[0] * fx > 0 ? p : [-p[0], -p[1]]; // perpendicular to the line, on the side the skater faces
  const P = (sv, n = 0) => [x0 + u[0] * sv + nf[0] * n, y0 + u[1] * sv + nf[1] * n];
  const facing = backward ? 180 : 0;
  const toe = facing + (ang > 0 ? 12 : -12) * fx; // body turned a little towards the way it goes
  if (!skipStart) [[0, cross], [1.4, lead]].forEach(([sv, f]) => { const [x, y] = P(sv); d.skate(x, y, toe, f, { len: 1.2 }); });
  else if (skipStart !== 'all') { const [x, y] = P(1.4); d.skate(x, y, toe, lead, { len: 1.2 }); }
  const hops = [[0, 3.0], [1.4, 4.4], [3.0, 6.0], [4.4, 7.4]];
  hops.forEach(([sa, sb], i) => {
    const f = i % 2 === 0 ? cross : lead;
    const bulge = i % 2 === 0 ? 1.3 : -1.1; // crossing foot passes in front, lead foot steps out from behind
    const A = P(sa + 0.35, bulge * 0.55), M = P((sa + sb) / 2, bulge), B = P(sb - 0.35, bulge * 0.55);
    d.track(`M ${A[0]} ${A[1]} Q ${M[0]} ${M[1]} ${B[0]} ${B[1]}`, f, { width: 2 });
    const [x, y] = P(sb);
    d.skate(x, y, toe, f, { len: 1.2 });
  });
  const [sx, sy] = P(9.4);
  if (!backward) {
    // One-foot stop: lead blade across the line of travel, inside edge on the side away from travel.
    const [lx, ly] = P(8.2, -0.2);
    d.skate(lx, ly, toe, cross, { len: 1.2, lifted: true });
    d.skate(sx, sy, ang + (lead === 'R' ? -90 : 90), lead, { len: 1.3 });
    d.spray(sx + u[0] * 0.2, sy + u[1] * 0.2, ang, { n: 5, len: 1.1, spread: 60 });
  } else {
    // Two-foot backward V-stop: toes point back against travel and turn in, heels pushed out; spray off the heels.
    const f = ang + 180, right = [Math.cos(rad(f + 90)), Math.sin(rad(f + 90))];
    const rp = [sx + right[0] * 0.75, sy + right[1] * 0.75], lp = [sx - right[0] * 0.75, sy - right[1] * 0.75];
    d.skate(rp[0], rp[1], f - 35, 'R', { len: 1.3 });
    d.skate(lp[0], lp[1], f + 35, 'L', { len: 1.3 });
    [rp, lp].forEach(([x, y]) => d.spray(x + u[0] * 0.7, y + u[1] * 0.7, ang, { n: 4, len: 0.9, spread: 50 }));
  }
  return { stop: [sx, sy], P };
}

const fwdX = (() => {
  const d = diagram({
    title: 'Forwards cross over 2 steps & stop, diagonal zig-zag',
    desc: 'The skater faces right, up the ice. Two crossover steps diagonally forwards and to the right: the left foot crosses over in front of the right, toe down first, and the right steps out from behind, then a stop on the inside edge of the right foot. Then two crossover steps diagonally forwards and to the left, the right foot crossing over, and a stop on the inside edge of the left foot. The path zig-zags up the ice.',
  });
  const g1 = crossLeg(d, { x0: 1.8, y0: 2.3, ang: 30, lead: 'R', backward: false });
  const g2 = crossLeg(d, { x0: g1.stop[0], y0: g1.stop[1], ang: -30, lead: 'L', backward: false, skipStart: true });
  const s1 = g1.stop, s2 = g2.stop;
  d.tag(s1[0] + 0.2, s1[1] + 1.4, 'IN', 'R');
  d.text(s1[0] + 1.7, s1[1] + 1.55, 'stop', { size: 0.46, weight: 600, color: COL.ink, anchor: 'start' });
  d.tag(s2[0] + 1.2, s2[1] - 1.1, 'IN', 'L');
  d.text(s2[0] + 1.5, s2[1] + 0.6, 'stop', { size: 0.46, weight: 600, color: COL.ink, anchor: 'start' });
  d.text(7.6, 1.5, 'left crosses over in front,', { size: 0.42, color: COL.L, weight: 600 });
  d.text(7.6, 2.2, 'toe down first, twice', { size: 0.42, color: COL.L, weight: 600 });
  d.text(21.3, 6.7, 'right crosses over', { size: 0.42, color: COL.R, weight: 600, anchor: 'end' });
  d.text(21.3, 7.4, 'in front, twice', { size: 0.42, color: COL.R, weight: 600, anchor: 'end' });
  d.step(1.0, 3.6, 1);
  d.step(s1[0] - 2.2, s1[1] + 1.5, 2);
  d.step(s1[0] + 3.4, s1[1] + 0.4, 3);
  d.step(s2[0] - 1.4, s2[1] - 1.4, 4);
  d.text(3.0, 10.4, 'facing this way →', { size: 0.42 });
  d.travel(13, 10.2, 19, 10.2);
  return d.svg();
})();

const bwdX = (() => {
  const d = diagram({
    title: 'Backwards cross over 2 or 3 steps & stop, diagonal zig-zag',
    desc: 'Skating backwards, facing left, travelling right down the ice. Two or three crossover steps (two drawn) diagonally backwards and to the right: the left foot crosses over in front of the right, and the right steps out from behind, then a two-foot stop with the heels pushed out. Then two or three crossover steps diagonally backwards and to the left, the right foot crossing over, and the same stop. The path zig-zags down the ice.',
  });
  const g1 = crossLeg(d, { x0: 1.8, y0: 7.6, ang: -30, lead: 'R', backward: true });
  const g2 = crossLeg(d, { x0: g1.stop[0], y0: g1.stop[1], ang: 30, lead: 'L', backward: true, skipStart: 'all' });
  const s1 = g1.stop, s2 = g2.stop;
  d.text(s1[0] + 2.0, s1[1] - 1.5, 'heels out, stop', { size: 0.44, weight: 600, color: COL.ink, anchor: 'start' });
  d.text(s2[0] - 2.4, s2[1] + 1.9, 'heels out, stop', { size: 0.44, weight: 600, color: COL.ink });
  d.text(0.6, 2.6, 'left crosses over', { size: 0.42, color: COL.L, weight: 600, anchor: 'start' });
  d.text(0.6, 3.3, 'in front, 2 or 3 times', { size: 0.42, color: COL.L, weight: 600, anchor: 'start' });
  d.text(11.2, 7.55, 'right crosses over', { size: 0.42, color: COL.R, weight: 600 });
  d.text(11.2, 8.25, 'in front, 2 or 3 times', { size: 0.42, color: COL.R, weight: 600 });
  d.step(1.0, 6.3, 1);
  d.step(s1[0] - 1.6, s1[1] - 1.4, 2);
  d.step(s1[0] + 3.4, s1[1] - 0.4, 3);
  d.step(s2[0] + 1.6, s2[1] - 1.6, 4);
  d.text(3.0, 10.4, 'facing this way ←  travelling →', { size: 0.42, anchor: 'start' });
  d.travel(13, 10.2, 19, 10.2);
  return d.svg();
})();

// ---------------------------------------------------------------- 7/8 Lemons
// Forward: skater faces +x, left foot is UP the page. Backward: faces -x, left foot is DOWN the page.
// Plain lemons: both feet push out on the inside edges and come back until the boots (ideally the blades)
// touch at the narrow end of each lemon. Crossing-under lemons: the feet roll from the inside edge onto the
// outside edge as they come in, and the tracks cross right over the centre line, under the body, before
// pushing out again.
const lemons = (back, cross) => {
  const d = diagram({
    title: `${cross ? 'Crossing under lemons' : 'Lemons'} ${back ? 'backwards' : 'forwards'}`,
    desc: cross
      ? `${back ? 'Backward' : 'Forward'} lemons along a line. Both feet push out on the inside edges, then roll onto the outside edges as they come back in, and the feet cross completely under the body, each track passing to the other side of the line, before pushing out again. Small lemons first, then wide ones.`
      : `${back ? 'Backward' : 'Forward'} lemons along a line. Both feet push out on the inside edges and come back in until the boots, ideally the blades, touch in the middle each time.`,
  });
  const Y = 5.4;
  d.iceLine(0.8, Y, 21.2, Y, '#c33');
  const top = back ? 'R' : 'L', bot = back ? 'L' : 'R';
  const lem = cross
    ? [[1.6, 4.4, 1.0], [6.0, 4.4, 1.0], [10.4, 5.2, 1.9], [15.6, 5.2, 1.9]]
    : [[1.6, 4.9, 1.5], [6.5, 4.9, 1.5], [11.4, 4.9, 1.5], [16.3, 4.9, 1.5]];
  const over = cross ? 0.55 : 0; // how far each track passes beyond the line at the crossing
  lem.forEach(([x0, L, A], i) => {
    const x1 = x0 + L;
    const c1 = x0 + L * 0.2, c2 = x0 + L * 0.8;
    const k = A * 1.33;
    const e0 = i === 0 ? 0.25 : -over, e1 = cross ? -over : 0.08; // start/end offset from the line (negative = across it)
    d.track(`M ${x0} ${Y - e0} C ${c1} ${Y - k} ${c2} ${Y - k} ${x1} ${Y - e1}`, top, { width: 2.5, arrow: i === lem.length - 1 });
    d.track(`M ${x0} ${Y + e0} C ${c1} ${Y + k} ${c2} ${Y + k} ${x1} ${Y + e1}`, bot, { width: 2.5, arrow: i === lem.length - 1 });
    if (i < lem.length - 1) {
      if (cross) {
        // the X where the feet cross under the body
        d.raw(`<circle cx="${x1 * 30}" cy="${Y * 30}" r="${0.32 * 30}" fill="none" stroke="${COL.ink}" stroke-width="1.5" stroke-dasharray="3 2"/>`);
      } else {
        d.raw(`<circle cx="${x1 * 30}" cy="${Y * 30}" r="${0.2 * 30}" fill="${COL.ink}"/>`);
      }
    }
  });
  if (cross) {
    d.tag(3.8, Y - 1.75, 'IN', top);
    d.tag(13.0, Y - 2.9, 'IN', top);
    d.tag(13.0, Y + 2.9, 'IN', bot);
    d.tag(20.0, Y - 1.25, 'OUT', top);
    d.tag(20.0, Y + 1.25, 'OUT', bot);
    d.text(6.0, Y + 2.7, 'feet cross under', { size: 0.42 });
    d.text(3.9, 9.1, 'small', { size: 0.44 });
    d.text(21.3, 9.4, 'wide, roll onto the outside edges to cross', { size: 0.42, anchor: 'end' });
  } else {
    d.tag(4.05, Y - 1.85, 'IN', top);
    d.tag(4.05, Y + 1.85, 'IN', bot);
    d.text(6.5, Y + 1.0, 'touch', { size: 0.44, weight: 600, color: COL.ink });
    d.text(13.8, 9.0, 'boots, ideally blades, touch every time', { size: 0.44 });
  }
  const sk = (x, aTop, aBot, h) => {
    d.skate(x, Y - h, aTop, top);
    d.skate(x, Y + h, aBot, bot);
  };
  const mid = cross ? 13.0 : 8.95, wide = cross ? 1.86 : 1.45;
  if (!back) {
    sk(1.6, -30, 30, 0.55);
    sk(mid, 0, 0, wide);
  } else {
    sk(1.6, 155, 205, 0.55);
    sk(mid, 180, 180, wide);
  }
  d.step(1.0, 7.4, 1);
  d.step(cross ? 4.2 : 4.05, cross ? 2.6 : 2.7, 2);
  d.step(cross ? 6.0 : 6.5, cross ? 7.0 : 7.7, 3);
  if (cross) d.step(10.0, 2.4, 4);
  if (back) d.text(19.0, 1.0, 'backwards', { size: 0.46 });
  d.travel(15, 10.3, 20.5, 10.3);
  return d.svg();
};

export default [
  {
    id: 'mohawk-side-to-side',
    group: G.mohawk,
    title: 'Mohawk side to side',
    svg: mohawk(false),
    card: {
      trains: 'Opening the hips so you can move across the ice while still facing the play, the way a defenceman turns to follow an attacker.',
      steps: [
        'Turn both feet out heel-to-heel: right toe pointing where you are going, left toe pointing back, heels in line and knees bent.',
        'Glide on a curve across towards one side of your lane (a strip of clear ice a few metres wide that you have to yourself), weight over the right foot. Let both edges carry you round.',
        'At the side, pivot on your leading right foot: turn on it so you end in the mohawk with the left leg leading.',
        'Curve back across to the other side, pivot on the left foot, and keep going all the way down the ice.',
      ],
      mistake: 'Stiff, straight legs: without bent knees the hips cannot open and the heels drift apart.',
      check: 'Redrawn to your description: each glide in the mohawk is a curved arc, and at each side you pivot on the leading foot into the mohawk with the other leg leading. I drew both blades on their outside edges through the curve. Say if you meant the inside edges.',
    },
  },
  {
    id: 'stepping-mohawk-side-to-side',
    group: G.mohawk,
    title: 'Stepping mohawks side to side',
    svg: mohawk(true),
    card: {
      trains: 'Quick, balanced hip turns with fast feet, so you can change direction while still facing the play.',
      steps: [
        'Set up heel-to-heel as in the plain mohawk, right foot leading.',
        'Look along your path, then glide on a curve across towards one side of your lane. As you glide, keep your weight a little more back than forward, on the back half of the blades, chest up; lean back past your heels and you tip over.',
        'At the side, turn your shoulders into the new direction first, so your legs load under you.',
        'Then jump from skate to skate: land on the left foot, knee bent, pointing the new way, and bring the right in behind it, heels in line. Push off the ice into the jump; that is where the power comes from. Learn the switch as two quick steps first, then add the jump.',
        'Curve back across with the left foot leading, and turn and jump again at the other side.',
      ],
      mistake: 'Switching with the feet only, shoulders still. It works, but there is no load in the legs and no power out of the ice.',
      check: 'Redrawn from the video you sent (Hockey Tutorial, "Master The Elite Mohawk Turn", 13:30-14:01): the coach adds "a shoulder motion jumping from skate to skate" so you load the legs and get "more weight into the blade". The switch is now shoulders first, then a jump onto the new lead foot, instead of two steps with both feet on the ice. Your note that the coach shifts the weight "more backwards than forward" is now in step 2, for the glide across the lane, as a controlled bias: the back half of the blades, chest up, not leaning past the heels. The drawing does not show weight, so it is unchanged.',
    },
  },
  {
    id: 'explosive-v-start',
    group: G.start,
    title: 'Explosive V-start',
    svg: vStart,
    card: {
      trains: 'Getting to speed in the first few strides, which wins races to loose pucks.',
      steps: [
        'Stand with heels in and toes turned out in a V, knees bent and leaning forward, weight on the front of the blades.',
        'Drive off one foot, then the other. The first stride with each foot is short and driving, more like running, with the push going out to the side and the leg fully extended.',
        'Keep the skates low to the ice so each foot comes back fast for the next push.',
        'Make the next strides longer. The toes come round as you speed up, and after a few strides you are in full stride.',
      ],
      mistake: 'Standing up tall and taking long, gliding first strides, so you glide instead of driving.',
      check: 'Checked against Hockey Canada Coach 1 (front start) and Laura Stamm (Human Kinetics): the first stride with each foot is short and driving, then the strides lengthen, full stride by about the sixth. I had said to keep the next few strides short too; that is now corrected.',
    },
  },
  {
    id: 'explosive-crossover-start',
    group: G.start,
    title: 'Explosive cross-over start',
    svg: xStart,
    card: {
      trains: 'Going from standing side-on to full speed sideways, as when you react to a puck that goes past you.',
      steps: [
        'Stand side-on to where you want to go, knees well bent, weight on the balls of your feet.',
        'Turn your head, shoulders and hips the way you want to go, and fall over your lead foot (here the right).',
        'Cross your left foot over in front while the right foot pushes hard under your body on its outside edge.',
        'Come out of it with a few short, quick running strides on your toes, feet turned out in a V. Stay low, then lengthen your strides.',
        'Repeat starting the other way.',
      ],
      mistake: 'Standing up as you turn, so the push goes into the air instead of the ice.',
      check: 'Redrawn after checking coaching sources: the IIHF coaching page, the Hockey Canada skills glossary and Ice Hockey Systems drill notes. They agree on a side-on start, head and shoulders turning first, one crossover, then a few quick running strides before full strides. One source has you open the lead toe to point the way as you go; I have not drawn that as a separate step. Say if you teach it that way.',
    },
  },
  {
    id: 'forward-crossover-steps-stop',
    group: G.two,
    title: 'Forwards cross over 2 steps & stop, diagonal (toe down first)',
    svg: fwdX,
    card: {
      trains: 'Crossover confidence: it can be done very slowly, so you learn to put the crossing foot down and push under before you need to do it at speed.',
      steps: [
        'Face up the ice, knees bent. You will zig-zag up the ice, slightly forwards and sideways each way.',
        'Moving diagonally forwards and to your right, cross the left foot over in front of the right, toe down first, then step the right foot out from behind.',
        'Do that twice, then stop on the inside edge of the right (leading) foot.',
        'Now go diagonally forwards and to your left: cross the right foot over in front of the left, twice.',
        'Stop on the inside edge of the left foot. Keep zig-zagging up the ice, slowly at first.',
      ],
      mistake: 'Rushing it: the drill is worth most done slowly, with each crossing foot placed deliberately.',
      check: 'Redrawn to your description: two crossover steps slightly diagonally forwards and sideways, a stop, then two the other way, so the path zig-zags up the ice. "Toe down first" I read as setting the crossing foot down on the front of the blade first; tell me if it means something else.',
    },
  },
  {
    id: 'backward-crossover-steps-stop',
    group: G.two,
    title: 'Backwards cross over 2/3 steps & stop',
    svg: bwdX,
    card: {
      trains: 'Moving backwards and sideways with speed and then stopping, the way a defenceman follows a rush and then holds their ground.',
      steps: [
        'Skate backwards down the ice, knees bent. You will zig-zag, slightly backwards and sideways each way.',
        'Moving diagonally backwards and to your right, cross the left foot over in front of the right, then step the right foot out from behind.',
        'Do that two or three times, then push both heels out, toes turned in, and stop on both feet.',
        'Now go diagonally backwards and to your left: cross the right foot over in front of the left, two or three times, and stop again.',
        'Keep zig-zagging down the ice, slowly at first.',
      ],
      mistake: 'Looking down at your feet, which tips you forward onto your toes and kills the crossovers.',
      check: 'Redrawn to match the forward drill: crossover steps slightly diagonally backwards and sideways, a stop, then the other way, so the path zig-zags down the ice. Two steps are drawn each way; the name allows three. The name does not say which stop. I drew a two-foot backward V-stop (heels pushed out, toes in). If you mean turning into a forward hockey stop, or a one-foot backward stop, the stop changes.',
    },
  },
  {
    id: 'lemons-forwards',
    group: G.two,
    title: 'Lemons forwards',
    svg: lemons(false, false),
    card: {
      trains: 'Inside-edge push and control on both feet at once, the base of every stride and stop.',
      steps: [
        'Start with heels together and toes turned out, knees bent, astride a line.',
        'Push both feet out on the inside edges.',
        'Turn the toes in and bring the feet back together until the boots, ideally the blades, touch in the middle. Repeat every time.',
      ],
      mistake: 'Stopping short of the middle, so the feet never come back together and the lemon stays open.',
      check: '',
    },
  },
  {
    id: 'lemons-backwards',
    group: G.two,
    title: 'Lemons backwards',
    svg: lemons(true, false),
    card: {
      trains: 'Backward push and balance on both inside edges; this backward version is harder and especially valuable, the base of backward skating.',
      steps: [
        'Start with toes together and heels apart, knees bent, astride a line.',
        'Push both heels out on the inside edges.',
        'Turn the heels in and bring the feet back together until the boots, ideally the blades, touch in the middle. Repeat every time.',
      ],
      mistake: 'Leaning forward over the toes, which stops the heels pushing out.',
      check: '',
    },
  },
  {
    id: 'crossing-under-lemons-forwards',
    group: G.two,
    title: 'Crossing under lemons forwards (feet together then wide gap)',
    svg: lemons(false, true),
    card: {
      trains: 'Rolling from inside edge to outside edge on both feet, and getting the feet right under the body, as a crossover push does.',
      steps: [
        'Start with heels together and toes turned out, knees bent, astride a line.',
        'Push both feet out on the inside edges.',
        'As they come back in, roll the feet onto the outside edges so both edges are used, and let the feet cross completely under your body.',
        'Push out again from the crossed position. Do small lemons first, then wide ones.',
      ],
      mistake: 'Stopping the feet at the middle on the inside edges, so they never roll over and never cross.',
      check: '"Feet together then wide gap" still read as small lemons first, then wide ones. Open point: I found no coaching source that uses the name "crossing under lemons". The nearest drill I found, the criss-cross in slalom skating, does have the feet cross, but one foot passes in front of the other rather than both meeting on the line as drawn. Which foot goes in front, and does it swap each time?',
    },
  },
  {
    id: 'crossing-under-lemons-backwards',
    group: G.two,
    title: 'Crossing under lemons backwards (feet together then wide gap)',
    svg: lemons(true, true),
    card: {
      trains: 'Rolling between inside and outside edges skating backwards, the feel behind backward crossovers.',
      steps: [
        'Start with toes together and heels apart, knees bent, astride a line.',
        'Push both heels out on the inside edges.',
        'As they come back in, roll onto the outside edges so both edges are used, and let the feet cross completely under your body.',
        'Push out again from the crossed position. Small lemons first, then wide ones.',
      ],
      mistake: 'Leaning forward over the toes, which stops the heels pushing out and the feet crossing.',
      check: 'Same reading and the same open point as the forward version: no source found for the name, and the drawing does not yet show which foot passes in front when they cross. The start, toes together and heels apart, matches Learn to Skate USA backward swizzles.',
    },
  },
];
