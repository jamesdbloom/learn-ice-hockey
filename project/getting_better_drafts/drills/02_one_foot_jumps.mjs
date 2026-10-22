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

// 1 ─ One foot jump to other foot
const jumpToOther = (() => {
  const d = diagram({
    title: 'One foot jump to other foot',
    desc: 'Glide forward on the right foot with the left foot lifted, spring off the right foot, fly a short way forward and land on the left foot, then glide on with the right foot lifted. Repeat starting on the left foot.',
  });
  d.track('M 1.5 6.4 L 8.6 6.4', 'R', { arrow: false });
  d.skate(5, 6.4, 0, 'R');
  d.skate(5, 5.2, 0, 'L', { lifted: true });
  d.step(5, 3.8, 1);
  d.skate(8.4, 6.4, 0, 'R', { label: 'spring' });
  d.step(8.4, 8.0, 2);
  d.track('M 9.6 6.3 L 13.2 5.3', 'ink', { air: true });
  d.skate(14.2, 5.2, 0, 'L', { label: 'land' });
  d.skate(14.2, 6.4, 0, 'R', { lifted: true });
  d.step(14.2, 3.6, 3);
  d.track('M 15.1 5.2 L 20.5 5.2', 'L');
  d.text(17.6, 4.4, 'knee bent', { size: 0.44 });
  d.travel(4, 9.8, 12, 9.8);
  return d.svg();
})();

// 2 ─ One foot jump to same foot
const jumpToSame = (() => {
  const d = diagram({
    title: 'One foot jump to same foot',
    desc: 'Glide forward on the right foot with the left foot lifted, spring off the right foot and land back on the same right foot, the left foot staying lifted the whole time. Repeat on the left foot.',
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
  return d.svg();
})();

// 3 ─ One foot cross over jump
// Read as: glide on the left foot, spring sideways to the LEFT, and land on the right foot,
// which crosses over in front of the left (the outside foot crosses over the inside foot).
const crossOverJump = (() => {
  const d = diagram({
    title: 'One foot cross over jump',
    desc: 'Glide forward on the left foot. Spring off it sideways towards your left, swinging the right foot across in front, and land on the right foot on the far side of the left foot\'s line. Uncross and glide on. Repeat the other way: glide on the right foot and cross the left foot over to the right.',
  });
  d.track('M 1.5 7.6 L 8.6 7.6', 'L', { arrow: false });
  d.skate(4.6, 7.6, 0, 'L');
  d.skate(4.6, 6.4, 0, 'R', { lifted: true });
  d.step(4.6, 5.0, 1);
  d.skate(8.4, 7.6, -10, 'L', { label: 'spring left' });
  d.step(8.4, 9.2, 2);
  d.track('M 9.4 7.3 C 10.6 6.4 11.6 4.6 12.6 3.9', 'ink', { air: true });
  d.text(13.2, 6.6, 'right foot crosses in front', { size: 0.44, anchor: 'start', color: COL.R });
  // Landing: right foot down on the far (left) side, left foot lifted and still crossed behind.
  d.skate(14, 3.6, -8, 'R', { label: 'land' });
  d.skate(13.4, 4.8, 8, 'L', { lifted: true });
  d.step(15.8, 5.0, 3);
  d.track('M 14.9 3.5 L 20.5 3.3', 'R');
  // Reference: the line of the takeoff foot, to show the cross.
  d.raw(`<line x1="${9.6 * PX}" y1="${7.6 * PX}" x2="${20.5 * PX}" y2="${7.6 * PX}" stroke="${COL.L}" stroke-width="1.5" stroke-dasharray="6 6" stroke-opacity="0.5"/>`);
  d.text(20.4, 8.3, 'left foot\'s line', { size: 0.4, anchor: 'end', color: COL.L });
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

const ONE_FOOT_WHERE = 'Only on an empty patch of a quiet public session';

export default [
  {
    id: 'one-foot-jump-to-other-foot',
    group: GROUP,
    title: 'One foot jump to other foot',
    svg: jumpToOther,
    card: {
      trains: 'Balance and control when you leave the ice and land on the other foot ready to skate, as when hopping over a stick or a fallen player.',
      steps: [
        'Glide forward on your right foot, knee bent, left foot lifted.',
        'Bend deeper and spring up and forward off the right foot.',
        'Land on your left foot with the knee bent, and glide on balanced. Then start on the left and land on the right.',
      ],
      mistake: 'Landing with a straight leg, so the skater wobbles or puts the other foot down to save it.',
      where: ONE_FOOT_WHERE,
      check: 'Read as a small forward hop: take off from one foot, land on the other, keep travelling forward. If the owner means a sideways hop (left to right across a line), the diagram needs redrawing.',
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
        'Land back on the same right foot, knee bent, without putting the left foot down. Then do it on the left.',
      ],
      mistake: 'Putting the free foot down on landing, which turns it into a two-foot landing.',
      where: ONE_FOOT_WHERE,
      check: 'Read as a forward hop on and off the same foot, free foot up the whole time.',
    },
  },
  {
    id: 'one-foot-cross-over-jump',
    group: GROUP,
    title: 'One foot cross over jump',
    svg: crossOverJump,
    card: {
      trains: 'Crossover strength and balance: pushing sideways off one foot and landing the crossing foot cleanly, as in a quick change of direction.',
      steps: [
        'Glide forward on your left foot, right foot lifted.',
        'Spring sideways to your left off the left foot, swinging your right foot across in front of it.',
        'Land on your right foot on the far side of where the left foot was, knee bent, then uncross and skate on. Repeat the other way, crossing the left foot over to the right.',
      ],
      mistake: 'Crossing the foot behind instead of in front, or landing on a straight leg.',
      where: ONE_FOOT_WHERE,
      check: 'This name was the least clear on the list. I read it as a crossover done in the air: take off from the inside foot and land on the crossing (outside) foot, which passes in front. Other common meanings: hopping sideways over a line or a stick on one foot, or a jump on a curve while doing crossovers. Please confirm which one you mean.',
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
      where: ONE_FOOT_WHERE,
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
      where: ONE_FOOT_WHERE,
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
      where: 'Public session, quiet lane, low speed',
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
      where: 'Public session, quiet lane, low speed',
      check: 'Read as forward skating, one foot per circle, each on its outside edge for the whole curve. The outside edge is harder to hold on a small circle, so the circle may need to be a bit bigger at first. A backward version is possible; I drew forwards only.',
    },
  },
];
