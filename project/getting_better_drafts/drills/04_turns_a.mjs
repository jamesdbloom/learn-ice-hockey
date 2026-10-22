// Turns (part A): step turns, three turns, soft drag and anchor turns. DRAFT, 22 Oct 2026.
import { diagram, PX, COL } from '../lib/draw.mjs';

const G = 'Turns';
const rad = (a) => (a * Math.PI) / 180;
const f2 = (n) => Math.round(n * 100) / 100;
const pt = (cx, cy, R, a) => [cx + R * Math.cos(rad(a)), cy + R * Math.sin(rad(a))];

/** Circular arc as cubic Beziers, in FEET, from angle a0 to a1 (screen degrees, y down). */
function arc(cx, cy, R, a0, a1, move = true) {
  const n = Math.max(1, Math.ceil(Math.abs(a1 - a0) / 90));
  const da = (a1 - a0) / n;
  const k = (4 / 3) * Math.tan(rad(da) / 4);
  let [x, y] = pt(cx, cy, R, a0);
  let d = move ? `M ${f2(x)} ${f2(y)}` : '';
  for (let i = 0; i < n; i++) {
    const s = a0 + i * da, e = s + da;
    const [x1, y1] = pt(cx, cy, R, e);
    const c1 = [x - k * R * Math.sin(rad(s)), y + k * R * Math.cos(rad(s))];
    const c2 = [x1 + k * R * Math.sin(rad(e)), y1 - k * R * Math.cos(rad(e))];
    d += ` C ${f2(c1[0])} ${f2(c1[1])} ${f2(c2[0])} ${f2(c2[1])} ${f2(x1)} ${f2(y1)}`;
    [x, y] = [x1, y1];
  }
  return d;
}

/** A small rotation symbol: a 3/4 circle arrow, clockwise (cw = true) or anticlockwise. */
function spinIcon(d, x, y, cw, R = 0.55) {
  const a0 = cw ? 150 : 30, a1 = cw ? 420 : -240;
  const p = arc(x, y, R, a0, a1).replace(/-?\d*\.?\d+/g, (n) => String(Math.round(Number(n) * PX * 10) / 10));
  d.raw(`<path d="${p}" fill="none" stroke="${COL.ink}" stroke-width="2.5" marker-end="url(#ah-ink)"/>`);
}

// ---------------------------------------------------------------------------
// 1. Turning stepping forwards to backwards, both directions.
const stepFwdBack = (() => {
  const d = diagram({
    w: 22, h: 12,
    title: 'Turning stepping forwards to backwards, both directions',
    desc: 'Two lanes, both travelling right. Top lane turns to the right: weight on the left foot, the right foot turns out and steps down backwards, then the left follows. Bottom lane turns to the left: weight on the right foot, the left foot turns out and steps down backwards, then the right follows. Both lanes finish skating backwards with the feet having swapped sides.',
  });
  // Lane A: turn to your right (clockwise). Lane centre y = 3.4.
  d.text(0.6, 1.1, 'Turn to your right', { anchor: 'start', color: COL.ink, weight: 600 });
  d.skate(3, 2.8, 0, 'L').skate(3, 4.0, 0, 'R');
  d.track('M 3.9 2.8 L 7.1 2.85', 'L', { arrow: false, width: 2 });
  d.track('M 3.9 4.0 L 6.3 4.0', 'R', { arrow: false, width: 2 });
  d.skate(8, 2.85, 0, 'L');
  d.skate(7.7, 4.1, 115, 'R', { lifted: true });
  spinIcon(d, 10.2, 3.4, true);
  d.skate(12.4, 3.0, 180, 'R');
  d.skate(12.9, 4.15, 150, 'L', { lifted: true });
  d.track('M 13.3 3.0 L 16.2 2.85', 'R', { arrow: false, width: 2 });
  d.skate(17.2, 2.8, 180, 'R').skate(17.2, 4.0, 180, 'L');
  d.track('M 18.1 2.8 L 21 2.8', 'R', { width: 2 });
  d.track('M 18.1 4.0 L 21 4.0', 'L', { width: 2 });
  d.step(3, 1.9, 1).step(8, 1.9, 2).step(12.4, 1.9, 3).step(17.2, 1.9, 4);
  d.text(3, 5.0, 'forwards').text(17.2, 5.0, 'backwards');

  // Lane B: turn to your left (anticlockwise). Lane centre y = 8.6.
  d.iceLine(0.4, 6.1, 21.6, 6.1, COL.rim);
  d.text(0.6, 6.75, 'Turn to your left', { anchor: 'start', color: COL.ink, weight: 600 });
  d.skate(3, 8.0, 0, 'L').skate(3, 9.2, 0, 'R');
  d.track('M 3.9 8.0 L 6.3 8.0', 'L', { arrow: false, width: 2 });
  d.track('M 3.9 9.2 L 7.1 9.15', 'R', { arrow: false, width: 2 });
  d.skate(8, 9.15, 0, 'R');
  d.skate(7.7, 7.9, -115, 'L', { lifted: true });
  spinIcon(d, 10.2, 8.6, false);
  d.skate(12.4, 9.0, 180, 'L');
  d.skate(12.9, 7.85, -150, 'R', { lifted: true });
  d.track('M 13.3 9.0 L 16.2 9.15', 'L', { arrow: false, width: 2 });
  d.skate(17.2, 8.0, 180, 'R').skate(17.2, 9.2, 180, 'L');
  d.track('M 18.1 8.0 L 21 8.0', 'R', { width: 2 });
  d.track('M 18.1 9.2 L 21 9.2', 'L', { width: 2 });
  d.step(3, 7.3, 1).step(8.6, 7.3, 2).step(13.4, 7.3, 3).step(17.2, 7.3, 4);
  d.text(3, 10.2, 'forwards').text(17.2, 10.2, 'backwards');

  d.travel(5, 11.2, 15, 11.2);
  return d.svg();
})();

// ---------------------------------------------------------------------------
// 2. Turning stepping 360, alternate directions.
const step360 = (() => {
  const d = diagram({
    w: 24, h: 11,
    title: 'Turning stepping 360, alternate directions',
    desc: 'Travelling right. Starting forwards, the skater steps round to the right: right foot first to go backwards, then right foot first again to come forwards, a full circle. The next circle turns to the left, leading with the left foot each time.',
  });
  const y = 6, gap = 0.6;
  const pair = (x, fwd, leftTop) => {
    const a = fwd ? 0 : 180;
    d.skate(x, leftTop ? y - gap : y + gap, a, 'L');
    d.skate(x, leftTop ? y + gap : y - gap, a, 'R');
  };
  const xs = [2.4, 7.1, 11.8, 16.5, 21.2];
  pair(xs[0], true, true);   // forwards
  pair(xs[1], false, false); // backwards after turning right
  pair(xs[2], true, true);   // forwards: one full circle right
  pair(xs[3], false, false); // backwards after turning left
  pair(xs[4], true, true);   // forwards: one full circle left
  // The leading foot, lifted and turned out, between stations.
  d.skate(4.75, 7.3, 90, 'R', { lifted: true });   // turning right from forwards: right toe opens to your right
  d.skate(9.45, 4.7, -90, 'R', { lifted: true });  // turning right from backwards: right toe opens to your right (now up the page)
  d.skate(14.15, 4.7, -90, 'L', { lifted: true }); // turning left from forwards: left toe opens to your left
  d.skate(18.85, 7.3, 90, 'L', { lifted: true });  // turning left from backwards: left toe opens to your left (now down the page)
  spinIcon(d, 4.75, 3.0, true);
  spinIcon(d, 9.45, 3.0, true);
  spinIcon(d, 14.15, 3.0, false);
  spinIcon(d, 18.85, 3.0, false);
  d.text(7.1, 1.4, 'full circle turning right', { color: COL.ink, weight: 600 });
  d.text(16.5, 1.4, 'full circle turning left', { color: COL.ink, weight: 600 });
  d.iceLine(11.8, 1.9, 11.8, 4.2, COL.rim);
  d.step(xs[0], 8.6, 1).step(xs[1], 8.6, 2).step(xs[2], 8.6, 3).step(xs[4], 8.6, 4);
  d.text(xs[0], 4.7, 'fwd').text(xs[1], 7.9 + 0.1, 'back').text(xs[2], 4.7, 'fwd').text(xs[3], 7.9 + 0.1, 'back').text(xs[4], 4.7, 'fwd');
  d.travel(6, 10, 18, 10);
  return d.svg();
})();

// ---------------------------------------------------------------------------
// 3. Three turn, forwards to backwards, on the spot (right forward outside three).
const threeTurn = (() => {
  const d = diagram({
    title: 'Three turn forwards to backwards, on the spot',
    desc: 'On the right foot only. Glide forwards on the outside edge, curving to the right. Turn the shoulders and hips into the curve and rock onto the front of the blade so the skate spins half a turn, leaving a small point in the tracing. Come out backwards on the inside edge of the same foot, still curving the same way. Repeat on the left foot.',
  });
  const cx = 11, cy = 9.6, R = 4.6;
  // Forward outside edge: clockwise from 195 to 262 degrees.
  const [ax, ay] = pt(cx, cy, R, 262);
  const [bx, by] = pt(cx, cy, R, 278);
  d.track(arc(cx, cy, R, 195, 262) + ` Q ${f2(cx - 0.25)} ${f2(cy - R + 0.2)} ${f2(cx)} ${f2(cy - R + 0.75)}`, 'R', { arrow: false, edge: 'OUT', edgeAt: [6.1, 4.9] });
  d.track(`M ${f2(cx)} ${f2(cy - R + 0.75)} Q ${f2(cx + 0.25)} ${f2(cy - R + 0.2)} ${f2(bx)} ${f2(by)}` + arc(cx, cy, R, 278, 345, false), 'R', { edge: 'IN', edgeAt: [16.0, 4.9] });
  void ax; void ay;
  // Key moments.
  const [s1x, s1y] = pt(cx, cy, R, 222);
  d.skate(s1x, s1y, 222 + 90, 'R');
  d.skate(s1x - 0.65, s1y - 0.65, 222 + 90, 'L', { lifted: true });
  d.step(s1x - 1.9, s1y + 0.6, 1);
  d.skate(cx, cy - R + 1.35, 90, 'R');
  d.step(cx, cy - R - 0.95, 2);
  d.text(cx, cy - R + 3.2, 'spin on the', { size: 0.42 });
  d.text(cx, cy - R + 3.7, 'front of the blade', { size: 0.42 });
  const [s3x, s3y] = pt(cx, cy, R, 318);
  d.skate(s3x, s3y, 318 + 90 + 180, 'R');
  d.skate(s3x - 0.65, s3y + 0.65, 318 + 90 + 180, 'L', { lifted: true });
  d.step(s3x + 1.9, s3y + 0.6, 3);
  d.text(5.0, 9.6, 'forwards').text(17.0, 9.6, 'backwards');
  d.travel(3.2, 10.3, 5.2, 7.9);
  return d.svg();
})();

// ---------------------------------------------------------------------------
// Shared U-turn geometry for the soft drag and anchor turns: in along the bottom
// travelling right, round an anticlockwise half circle, out along the top travelling left.
const CX = 12, CY = 5.5;

// 4/5/6. Soft drag (TOE) and anchor (HEEL): the same tight U-turn, drawn the same way so the difference is
// obvious. The inside skate keeps one point on a single spot on the ice and swings round it:
//   anchor    = the HEEL stays put, the toe swings round;
//   soft drag = the TOE stays put, the heel swings round.
// Forward, turning left: inside foot = LEFT, outside = RIGHT (carving on its inside edge).
// Backward (facing -x, path turning up the page = the skater's RIGHT): inside foot = RIGHT, outside = LEFT
// (left foot curving to the skater's right = its inside edge). Backwards is toe only, and a sharper C.
function pivotTurn({ title, desc, contact, backward }) {
  const d = diagram({ title, desc });
  const inside = backward ? 'R' : 'L', outside = backward ? 'L' : 'R';
  const P = [CX, CY], Ro = backward ? 2.3 : 3.4, len = 1.5;
  const flip = backward ? 180 : 0;
  // Paths: the inside foot comes in and goes out next to the pivot; the outside foot carves round.
  d.track(`M 2 ${CY + 0.35} L ${CX - 0.9} ${CY + 0.35}`, inside, { arrow: false });
  d.track(`M ${CX - 0.9} ${CY - 0.35} L 6.5 ${CY - 0.35}`, inside);
  d.track(`M 2 ${CY + Ro} L ${CX} ${CY + Ro}` + arc(CX, CY, Ro, 90, -90, false) + ` L 6.5 ${CY - Ro}`, outside, { edge: 'IN', edgeAt: [CX + Ro + 0.8, CY + 1.4] });
  // The inside skate mid-turn, with the contact point on the dot and a dashed arc for the end that swings.
  const sgn = contact === 'heel' ? 1 : -1; // heel fixed: blade lies towards the toe; toe fixed: towards the heel
  const am = -90 + flip;
  const u = [Math.cos(rad(am)), Math.sin(rad(am))];
  d.skate(P[0] + sgn * u[0] * len / 2, P[1] + sgn * u[1] * len / 2, am, inside, { len });
  const off = sgn > 0 ? 0 : 180;
  const sw = arc(P[0], P[1], len + 0.35, 0 + flip + off, -180 + flip + off).replace(/-?\d*\.?\d+/g, (n) => String(Math.round(Number(n) * PX * 10) / 10));
  d.raw(`<path d="${sw}" fill="none" stroke="${COL[inside]}" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah-${inside})"/>`);
  d.raw(`<circle cx="${P[0] * PX}" cy="${P[1] * PX}" r="${0.2 * PX}" fill="#fff" stroke="${COL.ink}" stroke-width="2.5"/>`);
  const lbl = contact === 'heel' ? 'heel anchors' : 'toe drags';
  const lp = [P[0] - sgn * u[0] * 1.0, P[1] - sgn * u[1] * 1.0];
  const below = lp[1] > P[1];
  d.text(below ? P[0] - 0.5 : lp[0] + 0.3, below ? P[1] + 1.25 : lp[1] + 0.2, lbl, { size: 0.5, color: COL.ink, weight: 700, anchor: below ? 'end' : 'start' });
  d.skate(5.5, CY + 0.35, flip, inside).skate(5.5, CY + Ro, flip, outside);
  d.step(4, CY + (backward ? 1.4 : 1.9), 1);
  if (below) d.step(P[0] + 0.5, P[1] + 1.1, 2); else d.step(lp[0] - 0.5, lp[1], 2);
  const [rx, ry] = pt(CX, CY, Ro, 22);
  d.skate(rx, ry, -68 + flip, outside);
  d.step(CX + Ro + 1.3, CY + 2.6, 3);
  d.skate(8.5, CY - Ro, 180 + flip, outside);
  d.step(8.5, CY - (backward ? 1.2 : 1.4), 4);
  if (backward) d.text(17.6, 10.0, 'skating backwards', { size: 0.44 });
  d.travel(2.5, 10.55, 8.5, 10.55);
  return d.svg();
}

const fwdSoftDrag = pivotTurn({
  title: 'Forwards soft drag',
  desc: 'A tight forward turn to the left, the same turn as the forwards anchor but on the toe. The inside (left) skate keeps its toe on one spot on the ice and drags round it, the heel swinging round, to help the turn. The outside (right) foot carves a wide arc round it on its inside edge. Repeat turning right.',
  contact: 'toe', backward: false,
});
const fwdAnchor = pivotTurn({
  title: 'Forwards anchor',
  desc: 'A tight forward turn to the left. The inside (left) skate is planted and pivots on its heel, which stays in one spot like an anchor, the toe swinging round from pointing forward to pointing back the way you came. The outside (right) foot carves a wide arc round it on its inside edge. Repeat turning right.',
  contact: 'heel', backward: false,
});
const backSoftDrag = pivotTurn({
  title: 'Backwards soft drag',
  desc: 'Skating backwards, a sharp C-shaped turn. The inside (right) skate keeps its toe on one spot on the ice and drags round it to help the turn. The outside (left) foot carves a tight arc round it on its inside edge. Repeat the other way.',
  contact: 'toe', backward: true,
});

// 7/8. Continuous crossovers (cross-unders), forwards and backwards.
// A snake down the ice. On each bend the outside foot crosses over in front and the INSIDE foot pushes under
// the body on its OUTSIDE edge (the cross-under). At the change of direction the skater steps onto the
// INSIDE edge of that same foot, which starts the bend the other way, and the next crossover goes back.
// Forward: the skater's left is UP. Backward (facing -x): the skater's left is DOWN, and "in front" is -x.
function contX(backward) {
  const d = diagram({
    title: `Continuous crossovers ${backward ? 'backwards' : 'forwards'}`,
    desc: `Skating ${backward ? 'backwards' : 'forwards'} down the ice in a snake. On each bend, the outside foot crosses over in front and the inside foot pushes hard under the body on its outside edge. At the change of direction, step onto the inside edge, then cross over back the other way. Continuous, no stopping.`,
  });
  const cy = 5.3, A = 2.0, W = 6, x0 = 4;
  const yAt = (x) => cy + A * Math.cos(Math.PI * (x - x0) / W);
  const angAt = (x) => (Math.atan2(-A * Math.PI / W * Math.sin(Math.PI * (x - x0) / W), 1) * 180) / Math.PI;
  let path = '';
  for (let x = 1.2; x <= 20.6; x += 0.2) path += `${path ? 'L' : 'M'} ${f2(x)} ${f2(yAt(x))} `;
  d.track(path.trim(), 'travel', { width: 2 });
  const flip = backward ? 180 : 0, fwd = backward ? -1 : 1;
  const leftSide = backward ? 1 : -1; // +1 = down the page
  [4, 10, 16].forEach((ax, i) => {
    const ay = yAt(ax);
    const u = i % 2 === 0 ? -1 : 1; // which side the turn centre is on (-1 = up)
    const inside = u === leftSide ? 'L' : 'R', outside = inside === 'L' ? 'R' : 'L';
    // Inside foot pushing under, on its outside edge.
    d.skate(ax, ay + u * 0.5, flip, inside, { len: 1.4 });
    d.track(`M ${f2(ax - fwd * 0.3)} ${f2(ay + u * 0.45)} Q ${f2(ax - fwd * 1.0)} ${f2(ay)} ${f2(ax - fwd * 1.3)} ${f2(ay - u * 0.9)}`, inside, { width: 2 });
    d.tag(ax - fwd * 2.0, ay - u * 1.05, 'OUT', inside);
    // Outside foot crossing over in front, to the inside.
    d.skate(ax + fwd * 1.5, ay + u * 1.1, flip + (u * fwd > 0 ? 12 : -12), outside, { lifted: true, len: 1.4 });
    if (i < 2) {
      // Step onto the inside edge of the same (old inside) foot at the change of direction.
      const ix = ax + W / 2, iy = yAt(ix);
      d.skate(ix, iy, angAt(ix) + flip, inside, { len: 1.4 });
      d.tag(ix + 1.2, iy + (u < 0 ? 0.6 : -0.6) * -1 * -1, 'IN', inside);
    }
  });
  const y4 = yAt(4), y10 = yAt(10), y7 = yAt(7);
  d.step(4 + fwd * 1.5 - 1.9, y4 - 2.1, 1);
  d.text(4 + fwd * 1.5, y4 - 1.9, 'cross over', { size: 0.4 });
  d.step(4 - fwd * 2.0, y4 + 1.9, 2);
  d.text(4 - fwd * 2.0, y4 + 2.85, 'push under', { size: 0.4 });
  d.step(7 + 1.2 - 1.9, y7 + 1.45, 3);
  d.text(7 + 1.2, y7 + 1.6, 'inside edge', { size: 0.4 });
  const c4y = backward ? y10 - 1.0 : y10 + 2.85;
  if (backward) d.step(10 + fwd * 1.5 - 2.2, c4y - 0.15, 4); else d.step(9.3, c4y - 0.15, 4);
  d.text(10 + fwd * 1.5, c4y, 'cross over back', { size: 0.4 });
  if (backward) d.text(17.6, 10.0, 'facing this way ←  travelling →', { size: 0.42 });
  d.travel(4, 10.2, 11, 10.2);
  return d.svg();
}

export default [
  {
    id: 'turn-step-forwards-to-backwards',
    group: G,
    title: 'Turning stepping forwards to backwards – both directions',
    svg: stepFwdBack,
    card: {
      trains: 'Turning from forwards to backwards without stopping, the way a defenceman turns to face the play.',
      steps: [
        'Glide forwards on both feet, knees bent.',
        'Turn your shoulders and hips the way you want to go, put your weight on one foot, and lift the other with its toe turned out.',
        'Put that foot down pointing backwards, then lift the other foot and turn it round.',
        'Put it down and glide backwards on both feet. Next time, turn the other way.',
      ],
      mistake: 'Turning the feet before the shoulders and hips, so the step is wide and wobbly instead of heel close to heel.',
      check: 'Read as a stepped (open, mohawk-style) turn: turning right, the right foot steps round first; turning left, the left foot does. Some coaches teach it with both feet staying on the ice (a two-foot pivot). Say if that is what you meant.',
    },
  },
  {
    id: 'turn-step-360',
    group: G,
    title: 'Turning stepping 360 – alternate directions',
    svg: step360,
    card: {
      trains: 'Turning all the way round while still moving, so you can look behind you and keep your speed.',
      steps: [
        'Glide forwards on both feet.',
        'Turn to your right: step your right foot round to go backwards, then bring the left round.',
        'Keep turning right: step the right foot round again to go forwards, then the left. That is a full circle.',
        'Do the next full circle turning to your left, leading with the left foot each time.',
      ],
      mistake: 'Stopping halfway round to reset, so it becomes two separate half turns instead of one smooth circle.',
      check: 'Read as a full turn made of two stepped half turns that keep spinning the same way, travelling in a straight line, then the next one spinning the other way. "Alternate directions" read as alternating the spin, not the direction of travel.',
    },
  },
  {
    id: 'turn-three-turn-forwards-to-backwards',
    group: G,
    title: 'Three turns forwards to backwards (on the spot)',
    svg: threeTurn,
    card: {
      trains: 'Turning round on one foot with balance, which gives you a quick turn from forwards to backwards.',
      steps: [
        'From a slow glide, stand on your right foot on its outside edge, curving to your right.',
        'Turn your shoulders and hips into the curve and rock onto the front of the blade, so the skate spins half a turn.',
        'Come out gliding backwards on the inside edge of the same foot, still curving the same way. Repeat on the left foot.',
      ],
      mistake: 'Hopping or putting the free foot down to get round, instead of letting the blade turn on the ice.',
      check: 'Read as a standard figure-skating three turn (forward outside edge to backward inside edge on one foot), done slowly in a small space. "On the spot" read as "with almost no travel", not a two-foot spin or jump. The drawing shows the right foot; the same turn can also start on the forward inside edge.',
    },
  },
  {
    id: 'turn-forwards-soft-drag',
    group: G,
    title: 'Forwards Soft Drag',
    svg: fwdSoftDrag,
    card: {
      trains: 'A tighter turn by letting the inside foot help it round, so you can change direction in a small space.',
      steps: [
        'Skate in forwards, knees bent.',
        'Put the inside foot\'s toe on the ice and let it drag on one spot while the heel swings round. This is the same turn as the anchor, but on the toe instead of the heel.',
        'Carve the outside foot round it on its inside edge.',
        'Come out of the turn and skate away. Repeat turning the other way.',
      ],
      mistake: 'Pressing the toe down too hard, so it acts as a brake and you stall in the turn.',
      check: '',
    },
  },
  {
    id: 'turn-forwards-anchor',
    group: G,
    title: 'Forwards Anchor',
    svg: fwdAnchor,
    card: {
      trains: 'A much tighter turn by using the inside foot as a pivot, so you can change direction in a small space.',
      steps: [
        'Skate in forwards with a wide stance.',
        'Plant the inside foot and anchor it on the heel of the skate: the heel stays in one spot while the toe swings round.',
        'Carve the outside foot round the anchor on its inside edge.',
        'Come out of the turn and skate away. Repeat turning the other way.',
      ],
      mistake: 'Letting the inside heel slide, so there is no anchor and the turn goes wide.',
      check: '',
    },
  },
  {
    id: 'turn-backwards-soft-drag',
    group: G,
    title: 'Backwards Soft Drag',
    svg: backSoftDrag,
    card: {
      trains: 'Turning sharply while skating backwards, as a defenceman does when the play changes direction.',
      steps: [
        'Skate backwards, knees bent.',
        'Put the inside foot\'s toe on the ice and let it drag on one spot to help the turn. Going backwards, only the toe works for this, not the heel.',
        'Carve the outside foot round it on its inside edge, in a sharp, tight C.',
        'Come out of the turn and skate away backwards. Repeat turning the other way.',
      ],
      mistake: 'Looking down at the feet: the shoulders drop and the turn wobbles. Keep your head up.',
      check: '',
    },
  },
  ...[false, true].map((backward) => ({
    id: `continuous-crossovers-${backward ? 'backward' : 'forward'}`,
    group: G,
    title: `Continuous crossovers ${backward ? 'backwards' : 'forwards'} (cross-unders)`,
    svg: contX(backward),
    card: {
      trains: backward
        ? 'Backward power and changes of direction without stopping, the way a defenceman stays in front of a rush that cuts across.'
        : 'Building speed through turns and changing direction without stopping, which is how you skate in the flow of a game.',
      steps: [
        `Skating ${backward ? 'backwards' : 'forwards'}, cross the outside foot over in front.`,
        'Think cross-UNDER: the real push is the inside foot driving out under your body on its outside edge.',
        'Step onto the inside edge of that foot, which starts the curve the other way.',
        'Cross over back the other way and push under again. Keep going: crossover, inside edge, crossover, inside edge, without stopping.',
      ],
      mistake: 'Stepping the outside foot over without the under-push, so the crossover just walks round the curve and adds no speed.',
      check: backward ? 'Backwards, "in front" means the side you face, so the crossing foot passes in front of you, away from where you are travelling.' : '',
    },
  })),
];
