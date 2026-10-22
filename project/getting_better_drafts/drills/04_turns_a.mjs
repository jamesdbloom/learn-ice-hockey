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

// 4. Forwards soft drag (turning left).
const fwdSoftDrag = (() => {
  const d = diagram({
    title: 'Forwards soft drag',
    desc: 'A forward turn to the left. Weight on the inside (left) foot on its outside edge, carving the turn. The outside (right) foot trails behind and wide, its inside edge lightly dragging on the ice to steady and tighten the turn. Out of the turn, the trailing foot comes back under the body. Repeat turning right.',
  });
  const R = 3.3, Rd = 4.4;
  d.track(`M 2 ${CY + R} L ${CX} ${CY + R}` + arc(CX, CY, R, 90, -90, false) + ` L 6.5 ${CY - R}`, 'L', { edge: 'OUT', edgeAt: [CX + R - 1.1, CY + 0.9] });
  d.track(arc(CX, CY, Rd, 70, -60), 'R', { width: 1.8, arrow: false, edge: 'IN', edgeAt: [CX + Rd + 0.75, CY - 0.4] });
  d.skate(5.5, CY + R, 0, 'L').skate(5.5, CY + R + 1.1, 0, 'R');
  d.step(4, CY + R - 0.9, 1);
  const [lx, ly] = pt(CX, CY, R, 30);
  d.skate(lx, ly, -60, 'L');
  d.step(lx - 1.3, ly + 0.2, 2);
  const [rx, ry] = pt(CX, CY, Rd, 52);
  d.skate(rx, ry, -10, 'R');
  d.text(rx + 1.9, ry - 0.2, 'light drag', { size: 0.42, color: COL.R, weight: 600 });
  d.step(rx - 0.4, ry + 1.25, 3);
  d.skate(8.5, CY - R, 180, 'L').skate(8.5, CY - R - 1.1, 180, 'R');
  d.step(8.5, CY - R + 1.0, 4);
  d.travel(2.5, 10.55, 8.5, 10.55);
  return d.svg();
})();

// 5. Forwards anchor (turning left).
const fwdAnchor = (() => {
  const d = diagram({
    title: 'Forwards anchor',
    desc: 'A tight forward turn to the left. The inside (left) foot is set down slightly ahead on its outside edge with pressure back on the heel, carving a small tight arc as the pivot. The outside (right) foot carves round it on its inside edge. Repeat turning right.',
  });
  const Ra = 1.6, Ro = 3.6;
  d.track(`M 2 ${CY + Ra} L ${CX} ${CY + Ra}` + arc(CX, CY, Ra, 90, -90, false) + ` L 7 ${CY - Ra}`, 'L', { edge: 'OUT', edgeAt: [CX - 0.4, CY] });
  d.track(`M 2 ${CY + Ro} L ${CX} ${CY + Ro}` + arc(CX, CY, Ro, 90, -90, false) + ` L 7 ${CY - Ro}`, 'R', { edge: 'IN', edgeAt: [CX + Ro + 0.8, CY + 1.4] });
  d.skate(5.5, CY + Ra, 0, 'L').skate(5.5, CY + Ro, 0, 'R');
  d.step(4, CY + 2.6, 1);
  const [lx, ly] = pt(CX, CY, Ra, 5);
  d.skate(lx, ly, -85, 'L');
  d.text(CX + 2.3, CY + 1.55, 'anchor', { size: 0.42, color: COL.L, weight: 600 });
  const [rx, ry] = pt(CX, CY, Ro, 22);
  d.skate(rx, ry, -68, 'R');
  d.step(CX + 2.45, CY - 0.8, 2);
  d.step(CX + Ro + 1.3, CY + 2.6, 3);
  d.skate(8.5, CY - Ra, 180, 'L').skate(8.5, CY - Ro, 180, 'R');
  d.step(8.5, CY, 4);
  d.travel(2.5, 10.55, 8.5, 10.55);
  return d.svg();
})();

// 6. Backwards soft drag (travelling backwards, path turning up the page).
const backSoftDrag = (() => {
  const d = diagram({
    title: 'Backwards soft drag',
    desc: 'Skating backwards, turning. Weight on the inside (right) foot on its outside edge, carving the turn. The other (left) foot is out in front of the body, toe turned in, its inside edge lightly dragging on the ice to steady and tighten the turn. It comes back under the body to finish. Repeat the other way.',
  });
  const R = 3.3, Rd = 4.4;
  d.track(`M 2 ${CY + R} L ${CX} ${CY + R}` + arc(CX, CY, R, 90, -90, false) + ` L 6.5 ${CY - R}`, 'R', { edge: 'OUT', edgeAt: [CX + R - 1.1, CY + 0.9] });
  d.track(arc(CX, CY, Rd, 70, -60), 'L', { width: 1.8, arrow: false, edge: 'IN', edgeAt: [CX + Rd + 0.75, CY - 0.4] });
  d.skate(5.5, CY + R, 180, 'R').skate(5.5, CY + R + 1.1, 180, 'L');
  d.step(4, CY + R - 0.9, 1);
  const [rx, ry] = pt(CX, CY, R, 30);
  d.skate(rx, ry, 120, 'R');
  d.step(rx - 1.3, ry + 0.2, 2);
  const [lx, ly] = pt(CX, CY, Rd, 52);
  d.skate(lx, ly, 175, 'L');
  d.text(lx + 1.9, ly - 0.2, 'light drag', { size: 0.42, color: COL.L, weight: 600 });
  d.step(lx - 0.4, ly + 1.25, 3);
  d.skate(8.5, CY - R, 0, 'R').skate(8.5, CY - R - 1.1, 0, 'L');
  d.step(8.5, CY - R + 1.0, 4);
  d.text(8.8, CY + R - 0.5, 'backwards');
  d.travel(2.5, 10.55, 8.5, 10.55);
  return d.svg();
})();

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
      where: 'Only on an empty patch of a quiet public session',
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
      where: 'Only on an empty patch of a quiet public session',
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
      where: 'Public session, quiet lane, low speed',
      check: 'Read as a standard figure-skating three turn (forward outside edge to backward inside edge on one foot), done slowly in a small space. "On the spot" read as "with almost no travel", not a two-foot spin or jump. The drawing shows the right foot; the same turn can also start on the forward inside edge.',
    },
  },
  {
    id: 'turn-forwards-soft-drag',
    group: G,
    title: 'Forwards Soft Drag',
    svg: fwdSoftDrag,
    card: {
      trains: 'Control in a tight turn: a light drag of the trailing foot steadies you and tightens the turn without stopping.',
      steps: [
        'Skate in forwards on both feet, knees bent.',
        'Lean into the turn, weight on the inside foot on its outside edge.',
        'Let the outside foot trail behind and wide, its inside edge lightly dragging on the ice.',
        'Bring the trailing foot back under you and skate out. Repeat turning the other way.',
      ],
      mistake: 'Pressing the drag foot too hard, so it acts as a brake and you stall in the turn.',
      where: 'Only on an empty patch of a quiet public session',
      check: '"Soft drag" is coaching slang and I am not sure of the owner\'s exact meaning. I read it as: weight on the inside foot, outside foot trailing behind with its inside edge lightly ("softly") touching the ice to steady and tighten the turn. A common alternative is a heel drag, where the trailing foot is turned out and dragged on its heel. Please confirm which.',
    },
  },
  {
    id: 'turn-forwards-anchor',
    group: G,
    title: 'Forwards Anchor',
    svg: fwdAnchor,
    card: {
      trains: 'A tighter turn by using the inside foot as a pivot, so you can change direction in a small space.',
      steps: [
        'Skate in forwards with a wide stance.',
        'Set the inside foot down a little ahead, on its outside edge with weight back on the heel. This is the anchor.',
        'Carve the outside foot round the anchor on its inside edge.',
        'Come out of the turn on both feet and skate away. Repeat turning the other way.',
      ],
      mistake: 'Standing up straight, so the anchor foot skids instead of gripping and the turn goes wide.',
      where: 'Only on an empty patch of a quiet public session',
      check: '"Anchor" is coaching slang and I am not sure of the owner\'s exact meaning. I read it as the inside foot set down on its outside edge, weight on the heel, as a tight pivot that the outside foot carves round. An alternative is the inside foot dragged on its edge behind you as a "brake anchor", which would be close to the soft drag. Please confirm which.',
    },
  },
  {
    id: 'turn-backwards-soft-drag',
    group: G,
    title: 'Backwards Soft Drag',
    svg: backSoftDrag,
    card: {
      trains: 'Turning under control while skating backwards, as a defenceman does when the play changes direction.',
      steps: [
        'Skate backwards on both feet, knees bent.',
        'Lean into the turn, weight on the inside foot on its outside edge.',
        'Put the other foot out in front of you, toe turned in, its inside edge lightly dragging on the ice.',
        'Bring that foot back under you and skate out backwards. Repeat turning the other way.',
      ],
      mistake: 'Looking down at the feet: the shoulders drop and the turn wobbles. Keep your head up.',
      where: 'Only on an empty patch of a quiet public session',
      check: 'Read as the backwards version of the forwards soft drag: the dragging foot is in front of the body (which is behind you along the path, since you face backwards), lightly dragging its inside edge. Same uncertainty as the forwards soft drag: please confirm the meaning.',
    },
  },
];
