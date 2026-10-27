// Group "One-foot edges": one-foot and two-foot jumps, and the small figure 8s (DRAFT, 22 Oct 2026).
// Travel is left to right (+x) unless stated. Facing +x, the skater's LEFT side is UP the page.
import { diagram, PX, COL } from '../lib/draw.mjs';

const GROUP = 'One-foot edges';
const f = (n) => Number(n.toFixed(3));

/** A circular arc as cubic Beziers in FEET (the kit scales every number, so SVG 'A' flags would break).
 *  Angles in degrees, screen convention (0 = right, 90 = down). a1 < a0 draws anticlockwise on screen. */
function arc(cx, cy, rad, a0, a1, move = true) {
  const segs = Math.ceil(Math.abs(a1 - a0) / 90);
  const step = (a1 - a0) / segs;
  const pt = (a) => [cx + rad * Math.cos(a * Math.PI / 180), cy + rad * Math.sin(a * Math.PI / 180)];
  let [x, y] = pt(a0);
  let d = move ? `M ${f(x)} ${f(y)}` : '';
  for (let i = 0; i < segs; i++) {
    const s = a0 + step * i, e = s + step;
    const k = (4 / 3) * Math.tan((step * Math.PI / 180) / 4) * rad;
    const [x1, y1] = pt(s), [x2, y2] = pt(e);
    const ts = (s + 90) * Math.PI / 180, te = (e + 90) * Math.PI / 180;
    const c1 = [x1 + k * Math.cos(ts), y1 + k * Math.sin(ts)];
    const c2 = [x2 - k * Math.cos(te), y2 - k * Math.sin(te)];
    d += ` C ${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(x2)} ${f(y2)}`;
  }
  return d;
}

/** A small curved "rotate" arrow (for the 180 turn), centre in feet, sweep drawn anticlockwise on screen. */
function spinArrow(d, cx, cy, rad) {
  d.track(arc(cx, cy, rad, 60, -200), 'ink', { width: 2 });
}

// A hand touching the ice (or the skate): a small grey palm print. Fingers point up by default; pass
// down = true for a hand drawn below a skate, so the skate does not cover the fingers.
function hand(d, x, y, down = false) {
  d.raw(`<circle cx="${f(x * PX)}" cy="${f(y * PX)}" r="${f(0.24 * PX)}" fill="${COL.muted}" fill-opacity="0.8"/>` +
    [-50, -20, 10, 40].map((a) => {
      const r = (down ? a + 90 : a - 90) * Math.PI / 180;
      return `<circle cx="${f((x + Math.cos(r) * 0.38) * PX)}" cy="${f((y + Math.sin(r) * 0.38) * PX)}" r="${f(0.08 * PX)}" fill="${COL.muted}" fill-opacity="0.8"/>`;
    }).join(''));
}

// 1 ─ One foot jump to other foot
// Glide on one foot, crouch and touch the gliding skate with a hand (head up), and jump onto the other
// foot as you stand back up. Two cycles: right → left → right. Facing +x, the left foot is UP the page.
const jumpToOther = (() => {
  const d = diagram({
    title: 'One foot jump to other foot',
    desc: 'Glide forward on the right foot, left foot lifted. Crouch and touch the right skate with a hand, head up. As you stand back up, jump onto the left foot. Glide, crouch and touch the left skate, and as you stand up jump back onto the right. Keep going.',
  });
  const yR = 6.4, yL = 4.6;
  // Right foot glide, touch, take-off.
  d.track(`M 1.2 ${yR} L 6.6 ${yR}`, 'R', { arrow: false });
  d.skate(2.6, yR, 0, 'R');
  d.skate(2.6, yL + 0.6, 0, 'L', { lifted: true });
  d.step(1.0, yL + 0.6, 1);
  d.skate(5.6, yR, 0, 'R');
  hand(d, 5.6, yR - 0.45);
  d.text(5.6, yR + 1.4, 'touch the skate, head up', { size: 0.42 });
  d.step(5.6, yR + 2.3, 2);
  d.track(`M 7.0 ${yR - 0.2} Q 8.6 ${yR - 2.4} 9.8 ${yL + 0.05}`, 'ink', { air: true });
  d.text(8.2, 2.9, 'stand up and jump', { size: 0.42 });
  d.step(8.3, 1.9, 3);
  // Left foot landing, glide, touch, take-off.
  d.skate(10.8, yL, 0, 'L');
  d.skate(10.8, yR - 0.6, 0, 'R', { lifted: true });
  d.track(`M 11.7 ${yL} L 15.6 ${yL}`, 'L', { arrow: false });
  d.skate(14.6, yL, 0, 'L');
  hand(d, 14.6, yL + 0.6, true);
  d.text(14.6, yL - 1.0, 'touch, head up', { size: 0.42 });
  d.step(12.6, 3.0, 4);
  d.track(`M 16.0 ${yL + 0.2} Q 17.8 ${yL + 0.2} 18.4 ${yR - 0.05}`, 'ink', { air: true });
  // Back onto the right foot.
  d.skate(19.3, yR, 0, 'R');
  d.track(`M 20.2 ${yR} L 21.3 ${yR}`, 'R');
  d.text(19.3, yR + 1.2, 'and again', { size: 0.42 });
  d.travel(4, 9.9, 11, 9.9);
  return d.svg();
})();

// 2 ─ One foot jump to same foot
const jumpToSame = (() => {
  const d = diagram({
    title: 'One foot jump to same foot',
    desc: 'Glide forward on the right foot with the left foot lifted, spring off the right foot and land back on the same right foot, the left foot staying lifted the whole time.',
  });
  d.track('M 1.5 6.2 L 8.6 6.2', 'R', { arrow: false });
  d.skate(5, 6.2, 0, 'R');
  d.skate(5, 5.0, 0, 'L', { lifted: true });
  d.step(5, 3.6, 1);
  d.skate(8.4, 6.2, 0, 'R', { label: 'spring' });
  d.step(8.4, 7.8, 2);
  d.track('M 9.6 6.2 L 13.2 6.2', 'ink', { air: true });
  d.skate(14.2, 6.2, 0, 'R');
  d.skate(14.2, 5.0, 0, 'L', { lifted: true });
  d.text(14.2, 7.4, 'land', { size: 0.5, color: COL.R, weight: 600 });
  d.step(14.2, 3.6, 3);
  d.track('M 15.1 6.2 L 20.5 6.2', 'R');
  d.text(17.8, 7.4, 'knee bent', { size: 0.44 });
  d.text(11.3, 4.3, 'left foot stays up', { size: 0.44, color: COL.L });
  d.travel(4, 9.8, 12, 9.8);
  d.text(21.3, 0.95, 'repeat on the other foot', { size: 0.44, anchor: 'end', weight: 600, color: COL.ink });
  return d.svg();
})();

// 3 ─ One foot cross over jump
// Glide on one foot; jump the FREE foot over the gliding foot, landing on the far side of it, as the old
// gliding foot lifts. Then the same back the other way. Facing +x, the skater's left is UP the page.
const crossOverJump = (() => {
  const d = diagram({
    title: 'One foot cross over jump',
    desc: 'Glide forward on the left foot, right foot lifted on its right. Jump the right foot over the left, crossing in front of it, and land on the right foot on the far (left) side as the left foot lifts. Bring the lifted left foot round to the left of the right foot, then jump it back over the right, in front, to land on the right-hand side. Keep going, both directions.',
  });
  const yA = 6.4, yB = 4.0, yC = 6.6;
  // Glide on the left foot.
  d.track(`M 1.2 ${yA} L 7.2 ${yA}`, 'L', { arrow: false });
  d.skate(3.4, yA, 0, 'L');
  d.skate(3.4, yA + 1.1, 0, 'R', { lifted: true });
  d.step(1.6, yA + 1.4, 1);
  // The left foot's line carried on (dashed) so the cross is visible.
  d.raw(`<line x1="${7.2 * PX}" y1="${yA * PX}" x2="${12.2 * PX}" y2="${yA * PX}" stroke="${COL.L}" stroke-width="1.5" stroke-dasharray="6 6" stroke-opacity="0.55"/>`);
  // Right foot jumps over the left foot's line.
  d.track(`M 6.6 ${yA + 1.1} Q 8.6 ${yA + 0.6} 9.9 ${yB + 0.1}`, 'ink', { air: true });
  d.text(9.6, yA + 1.7, 'right foot jumps over the left', { size: 0.42, color: COL.R, anchor: 'start' });
  d.step(7.4, yA + 2.1, 2);
  // Land on the right foot, far side; left foot lifts.
  d.skate(10.9, yB, 0, 'R', { label: 'land' });
  d.skate(10.6, yA - 0.4, 0, 'L', { lifted: true });
  d.track(`M 11.8 ${yB} L 14.6 ${yB}`, 'R', { arrow: false });
  d.step(12.4, yB + 1.1, 3);
  // The lifted left foot comes round to its own (left) side of the right foot, ready to cross back.
  d.skate(13.1, yB - 1.0, 0, 'L', { lifted: true });
  // Back the other way: left foot jumps over the right.
  d.raw(`<line x1="${14.6 * PX}" y1="${yB * PX}" x2="${19.4 * PX}" y2="${yB * PX}" stroke="${COL.R}" stroke-width="1.5" stroke-dasharray="6 6" stroke-opacity="0.55"/>`);
  d.track(`M 14.2 ${yB - 0.9} Q 16.2 ${yB - 0.4} 17.4 ${yC - 0.1}`, 'ink', { air: true });
  d.text(17.2, yB - 1.2, 'left back over the right', { size: 0.42, color: COL.L });
  d.step(15.0, yB - 2.0, 4);
  d.skate(18.4, yC, 0, 'L');
  d.track(`M 19.3 ${yC} L 21.2 ${yC}`, 'L');
  d.travel(4, 10, 11, 10);
  return d.svg();
})();

// 4 ─ Two foot jump
const twoFootJump = (() => {
  const d = diagram({
    title: 'Two foot jump',
    desc: 'Glide forward on both feet, shoulder width apart. Bend deep, jump off both feet together, and land on both feet at once with knees bent, then glide on.',
  });
  d.track('M 1.5 5.0 L 8.6 5.0', 'L', { arrow: false });
  d.track('M 1.5 6.4 L 8.6 6.4', 'R', { arrow: false });
  d.skate(4.6, 5.0, 0, 'L');
  d.skate(4.6, 6.4, 0, 'R');
  d.step(4.6, 3.6, 1);
  d.skate(8.4, 5.0, 0, 'L');
  d.skate(8.4, 6.4, 0, 'R');
  d.text(8.4, 7.8, 'bend, jump', { size: 0.44 });
  d.step(8.4, 3.6, 2);
  d.track('M 9.6 5.7 L 13.2 5.7', 'ink', { air: true });
  d.skate(14.2, 5.0, 0, 'L');
  d.skate(14.2, 6.4, 0, 'R');
  d.text(14.2, 7.8, 'land on both', { size: 0.44 });
  d.step(14.2, 3.6, 3);
  d.track('M 15.1 5.0 L 20.5 5.0', 'L');
  d.track('M 15.1 6.4 L 20.5 6.4', 'R');
  d.travel(4, 9.8, 12, 9.8);
  return d.svg();
})();

// 5 ─ Two foot 180 turn jump
// Forward at take-off, backward at landing, still travelling +x. Facing -x, the skater's left is DOWN
// the page, so the blue and orange skates swap sides between take-off and landing.
const twoFoot180 = (() => {
  const d = diagram({
    title: 'Two foot 180 turn jump',
    desc: 'Glide forward on both feet, jump off both, turn half a circle in the air and land on both feet skating backwards, still travelling the same way. The toes now point back the way you came, and your left foot is on the other side. Repeat turning the other way.',
  });
  d.track('M 1.5 5.0 L 8.0 5.0', 'L', { arrow: false });
  d.track('M 1.5 6.4 L 8.0 6.4', 'R', { arrow: false });
  d.skate(4.2, 5.0, 0, 'L');
  d.skate(4.2, 6.4, 0, 'R');
  d.text(4.2, 7.8, 'forwards', { size: 0.44 });
  d.step(4.2, 3.6, 1);
  d.skate(7.8, 5.0, 0, 'L');
  d.skate(7.8, 6.4, 0, 'R');
  d.step(7.8, 3.6, 2);
  d.track('M 9.0 5.7 L 13.6 5.7', 'ink', { air: true });
  spinArrow(d, 11.3, 4.1, 0.75);
  d.text(11.3, 2.8, 'turn 180° in the air', { size: 0.44 });
  // Backward landing: toes point -x (180°). Left foot now on the lower side.
  d.skate(15.0, 5.0, 180, 'R');
  d.skate(15.0, 6.4, 180, 'L');
  d.text(15.0, 7.8, 'land backwards', { size: 0.44 });
  d.step(15.0, 3.6, 3);
  d.track('M 16.0 5.0 L 20.5 5.0', 'R');
  d.track('M 16.0 6.4 L 20.5 6.4', 'L');
  d.travel(4, 9.8, 12, 9.8);
  return d.svg();
})();

// Figure 8s: two touching circles, radius 4 ft, centres (7, 5.5) and (15, 5.5), meeting at (11, 5.5).
// Forward on the RIGHT foot: inside edge curves to the skater's left = anticlockwise on screen;
//   outside edge curves to the skater's right = clockwise on screen. LEFT foot is the mirror.
// Skate angle on a circle at screen angle t: clockwise heading = t + 90, anticlockwise = t - 90.
const R8 = 4, CL = [7, 5.5], CR = [15, 5.5];
const onCircle = (c, t) => [c[0] + R8 * Math.cos(t * Math.PI / 180), c[1] + R8 * Math.sin(t * Math.PI / 180)];

// 6 ─ Small figure of 8, inside edge
const fig8Inside = (() => {
  const d = diagram({
    title: 'Small figure of 8, inside edge',
    desc: 'Two touching circles. From the middle, push onto the right foot and skate the whole right-hand circle anticlockwise on the right inside edge. Back at the middle, change feet and skate the whole left-hand circle clockwise on the left inside edge. The edge does not change at any point on a circle.',
  });
  // Right circle, right foot, inside edge, anticlockwise: from the middle (t=180) round to t=-170.
  d.track(arc(CR[0], CR[1], R8, 175, -165), 'R', { edge: 'IN', edgeAt: [CR[0], CR[1]] });
  // Left circle, left foot, inside edge, clockwise: from the middle (t=0) round to t=350... leave a gap at the start.
  d.track(arc(CL[0], CL[1], R8, 8, 345), 'L', { edge: 'IN', edgeAt: [CL[0], CL[1]] });
  // Skates
  let [x, y] = onCircle(CR, 140); d.skate(x, y, 140 - 90, 'R'); // start of right lobe, heading down-right
  [x, y] = onCircle(CR, 0); d.skate(x, y, -90, 'R');
  [x, y] = onCircle(CL, 40); d.skate(x, y, 40 + 90, 'L');
  [x, y] = onCircle(CL, 180); d.skate(x, y, 270, 'L');
  d.step(12.3, 9.7, 1);
  d.step(20.2, 5.5, 2);
  d.step(9.7, 9.7, 3);
  d.step(1.8, 5.5, 4);
  d.text(11, 0.9, 'change feet in the middle', { size: 0.44 });
  d.text(CR[0], CR[1] + 0.9, 'right foot', { size: 0.4, color: COL.R });
  d.text(CL[0], CL[1] + 0.9, 'left foot', { size: 0.4, color: COL.L });
  return d.svg();
})();

// 7 ─ Small figure of 8, outside edge
const fig8Outside = (() => {
  const d = diagram({
    title: 'Small figure of 8, outside edge',
    desc: 'Two touching circles. From the middle, push onto the right foot and skate the whole right-hand circle clockwise on the right outside edge. Back at the middle, change feet and skate the whole left-hand circle anticlockwise on the left outside edge. The edge does not change at any point on a circle.',
  });
  // Right circle, right foot, outside edge, clockwise: from the middle (t=180) round.
  d.track(arc(CR[0], CR[1], R8, 186, 526), 'R', { edge: 'OUT', edgeAt: [CR[0], CR[1]] });
  // Left circle, left foot, outside edge, anticlockwise: from the middle (t=0) round.
  d.track(arc(CL[0], CL[1], R8, -8, -345), 'L', { edge: 'OUT', edgeAt: [CL[0], CL[1]] });
  let [x, y] = onCircle(CR, 220); d.skate(x, y, 220 + 90, 'R'); // heading up-right
  [x, y] = onCircle(CR, 0); d.skate(x, y, 90, 'R');
  [x, y] = onCircle(CL, -40); d.skate(x, y, -40 - 90, 'L');
  [x, y] = onCircle(CL, 180); d.skate(x, y, 90, 'L');
  d.step(12.3, 1.3, 1);
  d.step(20.2, 5.5, 2);
  d.step(9.7, 1.3, 3);
  d.step(1.8, 5.5, 4);
  d.text(11, 10.5, 'change feet in the middle', { size: 0.44 });
  d.text(CR[0], CR[1] + 0.9, 'right foot', { size: 0.4, color: COL.R });
  d.text(CL[0], CL[1] + 0.9, 'left foot', { size: 0.4, color: COL.L });
  return d.svg();
})();


export default [
  {
    id: 'one-foot-jump-to-other-foot',
    group: GROUP,
    title: 'One foot jump to other foot',
    svg: jumpToOther,
    card: {
      trains: 'Balance and leg drive from a deep crouch, landing on the other foot ready to skate, with your head up the whole time.',
      steps: [
        'Glide forward on your right foot, knee bent, left foot lifted.',
        'Crouch and touch the right skate with your hand, keeping your head up.',
        'As you stand back up, jump onto your left foot.',
        'Glide, crouch and touch the left skate, and jump back onto the right as you stand up. Keep it going, one jump after another.',
      ],
      mistake: 'Looking down at the skate to touch it, so the head drops and the balance goes with it.',
      check: 'Open point: no coaching source found that describes this exact drill. The IIHF practice manuals have the parts (one-foot glides, a squat touching the heels with the hands, one-foot jumps) but not the touch-then-jump combination. Confirm the touch comes before the jump, not on landing.',
    },
  },
  {
    id: 'one-foot-jump-to-same-foot',
    group: GROUP,
    title: 'One foot jump to same foot',
    svg: jumpToSame,
    card: {
      trains: 'Strength and balance on one leg, so a skater can recover on one foot after contact or a stumble.',
      steps: [
        'Glide forward on your right foot, knee bent, left foot lifted.',
        'Bend deeper and spring up and forward off the right foot.',
        'Land back on the same right foot, knee bent, without putting the left foot down.',
        'Repeat on the other foot: work both feet equally.',
      ],
      mistake: 'Putting the free foot down on landing, which turns it into a two-foot landing.',
      check: 'Read as a forward hop on and off the same foot, free foot up the whole time.',
    },
  },
  {
    id: 'one-foot-cross-over-jump',
    group: GROUP,
    title: 'One foot cross over jump',
    svg: crossOverJump,
    card: {
      trains: 'Crossover strength and balance: driving off one foot and landing the crossing foot cleanly on the far side, as in a quick change of direction.',
      steps: [
        'Glide forward on your left foot, right foot lifted.',
        'Jump your right foot over the left, crossing in front of it.',
        'Land on the right foot on the far side, knee bent, as the left foot lifts.',
        'Bring the lifted left foot round to the left of the right foot, then jump it back over the right, in front, to land on the right-hand side. Keep going, both directions.',
      ],
      mistake: 'Landing on a straight leg, or putting the lifted foot down to catch your balance.',
      check: 'Open point: no coaching source found that names this drill, so crossing in front is drawn because a normal crossover crosses in front (Wikipedia, Crossover (figure skating); HockeyShot, Crossovers Tips). Confirm in front or behind. Drawn travelling forward with a little sideways movement on each jump; done on the spot or back and forth over a line, it is the same idea without the forward travel.',
    },
  },
  {
    id: 'two-foot-jump',
    group: GROUP,
    title: 'Two foot jump',
    svg: twoFootJump,
    card: {
      trains: 'Leg power and a soft, balanced landing, the base for every other jump on this list.',
      steps: [
        'Glide forward on both feet, shoulder width apart, knees bent.',
        'Bend deeper and jump off both feet together.',
        'Land on both feet at the same time with knees bent, and glide on.',
      ],
      mistake: 'Landing stiff-legged or on the heels, which throws the weight back.',
      check: 'Read as a forward jump on the spot while gliding, no obstacle. Some coaches have players jump over a stick laid on the ice.',
    },
  },
  {
    id: 'two-foot-180-turn-jump',
    group: GROUP,
    title: 'Two foot 180 turn jump',
    svg: twoFoot180,
    card: {
      trains: 'Turning quickly from forwards to backwards while keeping your balance, as a defenceman does to face the play.',
      steps: [
        'Glide forward on both feet, knees bent.',
        'Jump off both feet and turn half a circle in the air.',
        'Land on both feet skating backwards, knees bent, still travelling the same way. Repeat turning the other way.',
      ],
      mistake: 'Turning only the shoulders, so the skates land part-way round and catch an edge.',
      check: 'Read as forwards to backwards in one jump, travelling the same way. Some coaches also jump back from backwards to forwards straight after. The arrow shows one turn direction only; practise both.',
    },
  },
  {
    id: 'small-figure-8-inside-edge',
    group: GROUP,
    title: 'Small figure of 8, inside edge',
    svg: fig8Inside,
    card: {
      trains: 'Holding an inside edge all the way round a tight curve, the edge a tight turn and a crossover push from.',
      steps: [
        'Start where the two circles meet and push onto your right foot.',
        'Skate the whole right-hand circle on the right inside edge, curving to your left. Do not change edge.',
        'Back in the middle, change feet and push onto your left foot.',
        'Skate the whole left-hand circle on the left inside edge, curving to your right, back to the middle.',
      ],
      mistake: 'Flattening the blade part-way round, so the circle opens up and does not come back to the middle.',
      check: 'Read as forward skating, one foot per circle: right foot on the right-hand circle, left foot on the left-hand circle, each on its inside edge from start to finish of the curve. Size is about 8 ft across per circle; adjust if you mean smaller. A backward version would also be possible; I drew forwards only.',
    },
  },
  {
    id: 'small-figure-8-outside-edge',
    group: GROUP,
    title: 'Small figure of 8, outside edge',
    svg: fig8Outside,
    card: {
      trains: 'Holding an outside edge round a curve, the edge the inside foot pushes from, under the body, in a crossover.',
      steps: [
        'Start where the two circles meet and push onto your right foot.',
        'Skate the whole right-hand circle on the right outside edge, curving to your right. Do not change edge.',
        'Back in the middle, change feet and push onto your left foot.',
        'Skate the whole left-hand circle on the left outside edge, curving to your left, back to the middle.',
      ],
      mistake: 'Dropping onto the inside edge or putting the free foot down when the lean feels too far.',
      check: 'Read as forward skating, one foot per circle, each on its outside edge for the whole curve. The outside edge is harder to hold on a small circle, so the circle may need to be a bit bigger at first. A backward version is possible; I drew forwards only.',
    },
  },
];
