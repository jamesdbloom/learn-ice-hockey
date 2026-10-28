// Turns (part A): step turns, three turns, soft drag and anchor turns. DRAFT, 22 Oct 2026.
import { diagram, PX, COL } from './lib/draw.mjs';

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
  d.iceLine(0.4, 5.95, 21.6, 5.95, COL.rim);
  d.text(0.6, 6.62, 'Turn to your left', { anchor: 'start', color: COL.ink, weight: 600 });
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
// Owner, 27 Oct 2026: each half turn is a run of SINGLE-foot placements. Turning right from forwards:
// (a) the right foot steps out sideways, toe to the skater's right, and is the only foot down;
// (b) the left foot goes down ON ITS OWN pointing backwards, the right lifted;
// (c) only then does the right foot come down beside it, backwards. Backwards to forwards is the same again.
// Two lanes, both travelling right: top turns right (clockwise), bottom turns left (the mirror image).
// Facing +x the skater's left is up the page; facing -x (backwards) their left is down.
const step360 = (() => {
  const d = diagram({
    w: 22, h: 12.6,
    title: 'Turning stepping 360, alternate directions',
    desc: 'Two lanes, both travelling right. Top lane, a full circle turning right: from forwards, the right foot steps out sideways on its own; the left foot goes down on its own pointing backwards; then the right comes down beside it, backwards. Then the same again to come forwards: right foot sideways, left foot down on its own pointing forwards, right foot beside it. Bottom lane, the next circle turning left, leading with the left foot.',
  });
  const xs = [1.8, 4.9, 8.0, 11.1, 14.2, 17.3, 20.3];
  // Placements for the right turn, relative to the lane centre: [foot, dx, dy, angle, lifted]
  const seq = [
    [['L', 0, -0.6, 0], ['R', 0, 0.6, 0]],                          // 1 forwards, both feet
    [['R', 0, 0.45, 90], ['L', -0.4, -0.65, 0, true]],             // 2 right foot sideways, alone
    [['L', 0, 0.6, 180], ['R', 0.35, -0.6, 120, true]],            // 3 left foot down alone, backwards
    [['L', 0, 0.6, 180], ['R', 0, -0.6, 180]],                     // 4 backwards, both feet
    [['R', 0, -0.45, -90], ['L', 0.4, 0.65, 180, true]],           // 5 right foot sideways, alone
    [['L', 0, -0.6, 0], ['R', -0.35, 0.6, -60, true]],             // 6 left foot down alone, forwards
    [['L', 0, -0.6, 0], ['R', 0, 0.6, 0]],                         // 7 forwards, both feet
  ];
  const labels = ['forwards', 'sideways', 'one foot', 'backwards', 'sideways', 'one foot', 'forwards'];
  const lane = (yc, right) => {
    const sw = (f) => (right ? f : f === 'L' ? 'R' : 'L');
    seq.forEach((group, i) => {
      group.forEach(([foot, dx, dy, ang, lifted]) => {
        d.skate(xs[i] + dx, yc + (right ? dy : -dy), right ? ang : -ang, sw(foot), { lifted: !!lifted, len: 1.2 });
      });
      // A sideways skate pointing up the page needs the step number higher to clear it.
      const upSkate = group.some(([, , dy, ang]) => Math.abs(ang) === 90 && (right ? dy : -dy) < 0);
      d.step(xs[i], yc - (upSkate ? 1.85 : 1.55), i + 1);
      d.text(xs[i], yc + 1.85, labels[i], { size: 0.42 });
    });
  };
  d.text(0.6, 0.9, 'Full circle turning right', { anchor: 'start', color: COL.ink, weight: 600 });
  spinIcon(d, 8.6, 0.85, true, 0.4);
  lane(3.5, true);
  d.iceLine(0.4, 5.95, 21.6, 5.95, COL.rim);
  d.text(0.6, 6.62, 'Full circle turning left', { anchor: 'start', color: COL.ink, weight: 600 });
  spinIcon(d, 8.5, 6.7, false, 0.4);
  lane(9.3, false);
  d.travel(4, 12.0, 14, 12.0); // below the bottom-row labels, ending before them and inside the rim
  return d.svg();
})();

// ---------------------------------------------------------------------------
// 3. Three turn, forwards to backwards, from a slow glide (right forward outside three).
const threeTurn = (() => {
  const d = diagram({
    title: 'Three turn forwards to backwards, from a slow glide',
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
  d.text(cx, cy - R + 3.1, 'spin on the', { size: 0.42 });
  d.text(cx, cy - R + 3.8, 'front of the blade', { size: 0.42 });
  const [s3x, s3y] = pt(cx, cy, R, 318);
  d.skate(s3x, s3y, 318 + 90 + 180, 'R');
  d.skate(s3x - 0.65, s3y + 0.65, 318 + 90 + 180, 'L', { lifted: true });
  d.step(s3x + 1.9, s3y + 0.6, 3);
  d.text(5.9, 9.6, 'forwards').text(17.0, 9.6, 'backwards');
  d.travel(3.2, 10.3, 5.2, 7.9);
  return d.svg();
})();

// ---------------------------------------------------------------------------
// Shared U-turn geometry for the soft drag and anchor turns: in along the bottom
// travelling right, round an anticlockwise half circle, out along the top travelling left.
const CX = 12, CY = 5.5;

// 4/5/6 redrawn 27 Oct 2026 (owner): the inside foot DRAGS through the turn, it does not pivot on one spot.
//   Forwards anchor = HEEL drag, toe up, ankle collapsed, pressure through the heel.
//   Soft drag (forwards and backwards) = TOE drag, heel up.
// So the inside foot is drawn leaving a short drag mark round a tight U, its dragging end on the tip of the U.
// Forward, turning left: inside foot = LEFT, outside = RIGHT (carving on its inside edge).
// Backward (facing -x, path turning up the page = the skater's RIGHT): inside foot = RIGHT, outside = LEFT
// (left foot curving to the skater's right = its inside edge), and a sharper C.
function dragTurn({ title, desc, contact, backward = false }) {
  const d = diagram({ title, desc });
  const inside = backward ? 'R' : 'L', outside = backward ? 'L' : 'R';
  const Ro = backward ? 2.3 : 3.4, len = 1.5, rr = 0.35, ux = CX - 0.3;
  const flip = backward ? 180 : 0;
  // The inside foot comes in, drags round a tight U, and goes out; the outside foot carves round it.
  d.track(`M 2 ${CY + rr} L ${ux} ${CY + rr}` + arc(ux, CY, rr, 90, -90, false) + ` L 6.5 ${CY - rr}`, inside);
  // The drag mark: a wide pale scrape along the U where the heel (or toe) is on the ice.
  const scrape = (`M ${ux - 1.4} ${CY + rr} L ${ux} ${CY + rr}` + arc(ux, CY, rr, 90, -90, false) + ` L ${ux - 1.4} ${CY - rr}`)
    .replace(/-?\d*\.?\d+/g, (n) => String(Math.round(Number(n) * PX * 10) / 10));
  d.raw(`<path d="${scrape}" fill="none" stroke="${COL.spray}" stroke-width="11" stroke-opacity="0.45" stroke-linecap="round"/>`);
  d.track(`M 2 ${CY + Ro} L ${CX} ${CY + Ro}` + arc(CX, CY, Ro, 90, -90, false) + ` L 6.5 ${CY - Ro}`, outside, { edge: 'IN', edgeAt: [CX + Ro + 0.8, CY + 1.4] });
  // The inside skate mid-turn (travelling up the page), its dragging end on the tip of the U.
  const tip = [ux + rr, CY];
  const toeAng = -90 + flip, toeDy = Math.sin(rad(toeAng)); // -1 forwards (toe up the page), +1 backwards
  const heel = contact === 'heel';
  const cyS = tip[1] + (heel ? 1 : -1) * toeDy * len / 2;
  d.skate(tip[0], cyS, toeAng, inside, { len });
  const lines = heel ? ['heel drags, toe up,', 'ankle rolled in'] : ['toe drags,', 'heel up'];
  const above = cyS > CY; // put the label on the side away from the skate
  const ly = above ? CY - 1.6 : CY + 1.3;
  d.text(ux, ly, lines[0], { size: 0.46, color: COL.ink, weight: 700 });
  d.text(ux, ly + 0.7, lines[1], { size: 0.46, color: COL.ink, weight: 700 });
  if (heel) d.step(ux - 3.9, CY + 1.4, 2); else d.step(tip[0] + 0.95, CY + (above ? 0.3 : -0.3), 2);
  d.skate(5.5, CY + rr, flip, inside).skate(5.5, CY + Ro, flip, outside);
  d.step(4, CY + (backward ? 1.4 : 1.9), 1);
  const [rx, ry] = pt(CX, CY, Ro, 22);
  d.skate(rx, ry, -68 + flip, outside);
  d.step(CX + Ro + 1.3, CY + 2.6, 3);
  d.skate(8.5, CY - Ro, 180 + flip, outside);
  d.step(8.5, CY - (backward ? 1.2 : 1.4), 4);
  if (backward) d.text(21.3, 10.0, 'skating backwards', { size: 0.44, anchor: 'end' });
  d.travel(2.5, 10.55, 8.5, 10.55);
  return d.svg();
}

const fwdSoftDrag = dragTurn({
  title: 'Forwards soft drag',
  desc: 'A tight forward turn to the left, the same turn as the forwards anchor but on the toe. The inside (left) skate drags its toe on the ice, heel up, round a tight curve to help the turn. The outside (right) foot carves a wide arc round it on its inside edge. Repeat turning right.',
  contact: 'toe',
});
const fwdAnchor = dragTurn({
  title: 'Forwards anchor',
  desc: 'A tight forward turn to the left. The inside (left) foot is planted with the ankle rolled in and the pressure on the heel, toe up, and the heel drags round a tight curve through the turn. The outside (right) foot carves a wide arc round it on its inside edge. Repeat turning right.',
  contact: 'heel',
});
const backSoftDrag = dragTurn({
  title: 'Backwards soft drag',
  desc: 'Skating backwards, a sharp C-shaped turn. The inside (right) skate drags its toe on the ice, heel up, round a tight curve to help the turn. The outside (left) foot carves a tight arc round it on its inside edge. Repeat the other way.',
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
    // Beside the end of the push, clear of its arrowhead (the push ends at ax - 1.3 fwd, ay - 0.9 u).
    d.tag(ax - fwd * 2.51, ay - u * 0.9, 'OUT', inside);
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
  // Step numbers carry their words just to their right, baseline on the circle's centre line.
  const stepText = (x, y, n, s) => { d.step(x, y, n); d.text(x + 0.75, y + 0.22, s, { size: 0.4, anchor: 'start' }); };
  const s1 = [4 + fwd * 1.5 - 1.9, y4 - 2.1];
  if (backward) stepText(s1[0], s1[1], 1, 'cross over');
  else stepText(2.6, 4.5, 1, 'cross over');
  stepText(4 - fwd * 2.0, y4 + 2.15, 2, 'push under');
  stepText(7 + 1.2 - 1.9, y7 + 1.45, 3, 'inside edge');
  if (backward) stepText(5.3, y10 - 1.15, 4, 'cross over back'); else stepText(10.6, y10 - 1.1, 4, 'cross over back');
  if (backward) d.text(21.3, 10.0, 'facing this way ←  travelling →', { size: 0.42, anchor: 'end' });
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
        'Put that foot down on its own, pointing backwards, heel almost to the heel of the gliding foot. Then lift the other foot and turn it round.',
        'Put it down and glide backwards on both feet. Next time, turn the other way.',
      ],
      mistake: 'Turning the feet before the shoulders and hips, so the step is wide and wobbly instead of heel close to heel.',
      check: 'Checked against How To Hockey (transitions) and the open mohawk (C turn) in Wikipedia: one foot at a time, the turning foot goes down first almost heel to heel, then the other foot comes round. Drill 30 differs: there the turning foot first goes down sideways, then the OTHER foot is first to point backwards, then the turning foot joins it. Say which you want, and both drills will match it. Some coaches also teach a beginner version with both feet on the ice.',
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
        'Turn to your right: step your right foot out sideways, toe pointing to your right. It is the only foot on the ice.',
        'Put your left foot down on its own, pointing backwards, and lift the right.',
        'Bring the right foot down beside it, so you glide backwards on both feet.',
        'Keep turning right: right foot sideways, then the left foot down on its own pointing forwards, then the right beside it. That is a full circle.',
        'Do the next circle turning to your left, leading with the left foot each time.',
      ],
      mistake: 'Stopping halfway round to reset, so it becomes two separate half turns instead of one smooth circle.',
      check: 'Redrawn to your description. Each half turn is three placements: the sideways step on its own, then the other foot down on its own pointing the new way, then the sideways foot down beside it. Turning right, I read the foot that goes down alone as the left foot; confirm that is right. "Alternate directions" read as alternating the spin, not the direction of travel.',
    },
  },
  {
    id: 'turn-three-turn-forwards-to-backwards',
    group: G,
    title: 'Three turns forwards to backwards (from a slow glide)',
    svg: threeTurn,
    card: {
      trains: 'Turning round on one foot with balance, which gives you a quick turn from forwards to backwards.',
      steps: [
        'From a slow glide, stand on your right foot on its outside edge, curving to your right.',
        'Turn your shoulders and hips into the curve and rock onto the front of the blade, so the skate spins half a turn.',
        'Come out gliding backwards on the inside edge of the same foot, still curving the same way. Repeat on the left foot.',
      ],
      mistake: 'Hopping or putting the free foot down to get round, instead of letting the blade turn on the ice.',
      check: 'Checked against Wikipedia (Three-turn) and Skate Canada defined terms: forward outside edge in, backward inside edge out, same foot, turning in the direction of the curve with the exit on the same circle, so the point of the turn faces into the circle. Read as a standard figure-skating three turn (forward outside edge to backward inside edge on one foot), done slowly in a small space. "On the spot" read as "with almost no travel", not a two-foot spin or jump. The drawing shows the right foot; the same turn can also start on the forward inside edge.',
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
        'Put the inside foot\'s toe on the ice, heel up, and drag the toe round through the turn. This is the same turn as the anchor, but dragging the toe instead of the heel.',
        'Carve the outside foot round it on its inside edge.',
        'Come out of the turn and skate away. Repeat turning the other way.',
      ],
      mistake: 'Pressing the toe down too hard, so it acts as a brake and you stall in the turn.',
      check: 'Redrawn to your correction: the inside toe drags through the turn with the heel up, the mirror of the anchor\'s heel drag.',
    },
  },
  {
    id: 'turn-forwards-anchor',
    group: G,
    title: 'Forwards Anchor',
    svg: fwdAnchor,
    card: {
      trains: 'A much tighter turn by dragging the inside heel as an anchor, so you can change direction in a small space.',
      steps: [
        'Skate in forwards with a wide stance.',
        'Plant the inside foot with the ankle collapsed (rolled in), the pressure on the heel and the toe up.',
        'Drag that heel through the turn while the outside foot carves round it on its inside edge.',
        'Come out of the turn and skate away. Repeat turning the other way.',
      ],
      mistake: 'Putting the whole blade down, so the toe catches and you trip. Keep the toe up and the pressure on the heel.',
      check: 'Redrawn to your correction: the inside heel drags through the turn, toe up, ankle collapsed and pressure on the heel. It is no longer a fixed pivot.',
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
        'Put the inside foot\'s toe on the ice, heel up, and drag the toe round through the turn. Going backwards, only the toe works for this, not the heel.',
        'Carve the outside foot round it on its inside edge, in a sharp, tight C.',
        'Come out of the turn and skate away backwards. Repeat turning the other way.',
      ],
      mistake: 'Looking down at the feet: the shoulders drop and the turn wobbles. Keep your head up.',
      check: 'Redrawn to your correction: the inside toe drags through the turn with the heel up, the same as the forwards soft drag.',
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
