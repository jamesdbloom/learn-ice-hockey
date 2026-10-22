// Mohawks, Starts and Two-foot edges (DRAFT, 22 Oct 2026).
import { diagram, COL } from '../lib/draw.mjs';

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
const mohawk = (jump) => {
  const d = diagram({
    title: jump ? 'Jumping mohawk side to side' : 'Mohawk side to side',
    desc: jump
      ? 'Zig-zag down a lane in a heel-to-heel mohawk stance. At each side of the lane the skater jumps, turns in the air and lands in the mirror stance with the other foot leading.'
      : 'Zig-zag down a lane in a heel-to-heel mohawk stance: right foot leading towards one side, then switch so the left foot leads back towards the other side.',
  });
  // lane edges
  d.iceLine(1, 1.1, 21, 1.1, '#9fb6c8');
  d.iceLine(1, 9.7, 21, 9.7, '#9fb6c8');
  // Leg A: down-right, right foot leads.  Leg B: up-right, left foot leads.  Leg C: down-right again.
  const legs = [
    { from: [1.8, 2.6], to: [7.4, 8.2], lead: 'R' },
    { from: [8.6, 8.2], to: [14.2, 2.6], lead: 'L' },
    { from: [15.4, 2.6], to: [21, 8.2], lead: 'R' },
  ];
  legs.forEach((g, i) => {
    const [x1, y1] = g.from, [x2, y2] = g.to;
    const dir = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
    d.track(`M ${x1} ${y1} L ${x2} ${y2}`, g.lead, { width: 2.5 });
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    heelToHeel(d, mx, my, dir, g.lead);
  });
  if (!jump) {
    // carved switch corners
    d.track('M 7.4 8.2 Q 8 8.9 8.6 8.2', 'ink', { width: 2, arrow: false });
    d.track('M 14.2 2.6 Q 14.8 1.9 15.4 2.6', 'ink', { width: 2, arrow: false });
    d.text(10.0, 8.9, 'switch', { size: 0.42 }).text(16.6, 2.3, 'switch', { size: 0.42 });
  } else {
    d.track('M 7.0 7.8 Q 8 10.2 9.0 7.8', 'ink', { air: true, width: 3 });
    d.track('M 13.8 3.0 Q 14.8 0.6 15.8 3.0', 'ink', { air: true, width: 3 });
    d.text(10.2, 8.9, 'jump', { size: 0.42 }).text(16.8, 2.3, 'jump', { size: 0.42 });
  }
  d.text(4.6, 3.6, 'heels in line', { size: 0.42 });
  d.step(2.2, 4.4, 1);
  d.step(6.3, 5.1, 2);
  d.step(6.4, 8.9, 3);
  d.step(12.6, 6.8, 4);
  d.travel(16.5, 10.3, 20.5, 10.3);
  return d.svg();
};

// ---------------------------------------------------------------- 3 Explosive V-start
const vStart = (() => {
  const d = diagram({
    title: 'Explosive V-start',
    desc: 'From a standing V (heels close, toes turned out) the skater runs forward on short, quick strides with the toes turned out, each push going out to the side; the strides lengthen and the toes come round as speed builds.',
  });
  // Start V: left foot up the page (skater faces +x, their left is -y).
  d.skate(2.6, 4.9, -45, 'L');
  d.skate(2.6, 6.1, 45, 'R');
  d.text(2.6, 3.4, 'V', { size: 0.6, weight: 700, color: COL.ink });
  d.step(1.3, 5.5, 1);
  // Strides: [x, y, angle, foot] with push tracks fanning out and back.
  const strides = [
    [4.6, 6.5, 50, 'R'],
    [6.4, 4.4, -48, 'L'],
    [8.8, 6.7, 40, 'R'],
    [11.6, 4.3, -32, 'L'],
    [15.2, 6.6, 22, 'R'],
    [19.2, 4.8, -12, 'L'],
  ];
  strides.forEach(([x, y, a, f]) => {
    d.skate(x, y, a, f);
    // push: from foot, out to its own side and back
    const side = f === 'R' ? 1 : -1;
    d.track(`M ${x - 0.3} ${y + side * 0.25} L ${x - 0.9} ${y + side * 1.25}`, f, { width: 2 });
  });
  d.text(5.5, 9.0, 'short, quick, toes out', { size: 0.44 });
  d.text(16.8, 9.0, 'longer strides', { size: 0.44 });
  d.step(4.6, 8.0, 2);
  d.step(8.4, 3.2, 3);
  d.step(17.2, 3.2, 4);
  d.travel(4, 10.2, 12, 10.2);
  return d.svg();
})();

// ---------------------------------------------------------------- 4 Explosive crossover start
const xStart = (() => {
  const d = diagram({
    title: 'Explosive cross-over start',
    desc: 'Standing side-on to the way they want to go, the skater opens the right foot towards the travel direction, crosses the left foot over in front while the right foot pushes under on its outside edge, then sprints away on short strides. Repeat to the left.',
  });
  // 1: side-on stance, chest facing up the page; toes up.  Left foot is to the skater's left (-x).
  d.skate(1.6, 7.4, -90, 'L');
  d.skate(3.2, 7.4, -90, 'R');
  d.text(2.4, 9.3, 'side-on', { size: 0.44 });
  d.step(0.9, 9.2, 1);
  // 2: right foot pivots open towards travel; 3: it pushes under (outside edge) as the left crosses over in front.
  d.skate(5.4, 7.4, 0, 'R');
  d.track('M 4.7 7.7 L 3.6 8.7', 'R', { width: 2.5, edge: 'OUT', edgeAt: [4.9, 9.1] });
  d.text(5.0, 10.0, 'push under', { size: 0.42, color: COL.R });
  d.step(6.6, 8.6, 2);
  d.track('M 1.8 6.4 Q 4.6 3.0 7.6 6.6', 'L', { air: true, width: 2.5 });
  d.skate(8.4, 7.0, -5, 'L');
  d.text(4.6, 3.9, 'cross over in front', { size: 0.42 });
  d.step(9.0, 5.6, 3);
  // 4: sprint strides
  d.skate(12.6, 7.7, 30, 'R');
  d.skate(15.4, 5.7, -28, 'L');
  d.skate(18.8, 7.2, 18, 'R');
  d.step(15.4, 4.2, 4);
  d.travel(11, 10.2, 19, 10.2);
  return d.svg();
})();

// ---------------------------------------------------------------- 5 Forward crossovers & stop
const fwdX = (() => {
  const d = diagram({
    title: 'Forwards cross over 2/3 steps & stop',
    desc: 'Skating forward on a curve to the left, the right (outside) foot crosses over in front of the left (inside) foot two or three times, then the skater turns both blades across the line of travel into a two-foot hockey stop.',
  });
  // The curve (centre of mass path): forward, turning left (up the page).
  d.track('M 1.6 9.2 C 6 9.4 10 8.6 13 6.6', 'travel', { width: 2, arrow: false });
  // Crossover 1
  d.skate(5.0, 9.6, -2, 'L');
  d.skate(5.8, 8.5, -6, 'R', { lifted: true });
  d.track('M 5.0 9.9 L 4.7 10.6', 'L', { width: 2, edge: 'OUT', edgeAt: [3.6, 10.3] });
  d.step(4.0, 8.2, 1);
  // Crossover 2
  d.skate(8.7, 9.2, -12, 'L');
  d.skate(9.5, 7.5, -18, 'R', { lifted: true });
  d.track('M 8.7 9.5 L 8.5 10.2', 'L', { width: 2 });
  d.step(8.2, 7.2, 2);
  // Crossover 3 (optional)
  d.skate(11.9, 7.9, -28, 'L');
  d.skate(12.4, 6.1, -34, 'R', { lifted: true });
  d.text(13.0, 9.2, '2 or 3 crossovers', { size: 0.42 });
  // Stop: travel heading ~ -35deg; blades turned across it (~55deg), spray ahead.
  d.track('M 13.4 5.8 L 15.4 4.4', 'travel', { width: 2, arrow: false });
  d.skate(17.6, 3.6, 55, 'L');
  d.skate(16.4, 4.4, 55, 'R');
  d.spray(17.75, 3.4, -35, { n: 6, len: 1.3, spread: 70 });
  d.text(18.6, 6.2, 'stop', { size: 0.46, weight: 600, color: COL.ink });
  d.step(15.4, 5.6, 3);
  d.travel(2, 1.4, 9, 1.4);
  return d.svg();
})();

// ---------------------------------------------------------------- 6 Backward crossovers & stop
const bwdX = (() => {
  const d = diagram({
    title: 'Backwards cross over 2/3 steps & stop',
    desc: 'Skating backward (toes pointing back down the path) on a curve, the left (outside) foot crosses over in front of the right (inside) foot two or three times, which pushes under on its outside edge, then the skater stops with a two-foot backward V-stop, heels pushed out.',
  });
  // Travelling +x backward, curving up the page. Skater faces -x, so their RIGHT side is up (inside).
  d.track('M 1.6 9.2 C 6 9.4 10 8.6 13 6.6', 'travel', { width: 2, arrow: false });
  // Crossover 1: right (inside, up) on ice; left (outside, down) crosses over in front to the up side.
  d.skate(5.4, 8.6, 180, 'R');
  d.skate(4.6, 7.6, 182, 'L', { lifted: true });
  d.track('M 5.3 8.9 L 4.9 9.6', 'R', { width: 2, edge: 'OUT', edgeAt: [6.2, 9.7] });
  d.step(3.4, 7.0, 1);
  // Crossover 2
  d.skate(9.2, 8.3, 168, 'R');
  d.skate(8.5, 7.2, 165, 'L', { lifted: true });
  d.track('M 9.1 8.6 L 8.7 9.3', 'R', { width: 2 });
  d.step(7.4, 6.3, 2);
  // Crossover 3 (optional)
  d.skate(12.4, 7.0, 150, 'R');
  d.skate(11.6, 6.0, 148, 'L', { lifted: true });
  d.text(9.2, 10.2, '2 or 3 crossovers', { size: 0.42 });
  // Backward V-stop: travel ~ -35deg; toes in, heels out; spray off the heels (leading ends).
  d.track('M 13.4 5.8 L 15.6 4.3', 'travel', { width: 2, arrow: false });
  d.skate(17.5, 4.5, 170, 'L');  // skater's left is down-right of travel
  d.skate(16.5, 3.06, 120, 'R');
  d.spray(18.4, 4.3, -35, { n: 5, len: 1.0 });
  d.spray(17.0, 2.3, -35, { n: 5, len: 1.0 });
  d.text(19.0, 6.2, 'heels out, stop', { size: 0.44, weight: 600, color: COL.ink });
  d.step(14.6, 2.6, 3);
  d.text(5.6, 1.4, 'skating backwards', { size: 0.46 });
  d.travel(9, 1.4, 16, 1.4);
  return d.svg();
})();

// ---------------------------------------------------------------- 7/8 Lemons
const lemons = (back) => {
  const d = diagram({
    title: back ? 'Crossing under lemons backwards' : 'Crossing under lemons forwards',
    desc: back
      ? 'Backward lemons along a line: heels push out and toes turn in, then heels turn in to draw the feet back together; first two narrow lemons with the feet close, then two wide ones.'
      : 'Forward lemons along a line: toes out and push both feet apart on the inside edges, then toes turn in to draw the feet back together; first two narrow lemons with the feet close, then two wide ones.',
  });
  const Y = 5.4;
  d.iceLine(0.8, Y, 21.2, Y, '#c33');
  // Forward: skater faces +x, left foot is up (y < Y). Backward: faces -x, left foot is down.
  const top = back ? 'R' : 'L', bot = back ? 'L' : 'R';
  const lem = [
    [1.6, 4.4, 0.8],
    [6.0, 4.4, 0.8],
    [10.4, 5.2, 1.8],
    [15.6, 5.2, 1.8],
  ];
  lem.forEach(([x0, L, A], i) => {
    const x1 = x0 + L;
    const c1 = x0 + L * 0.2, c2 = x0 + L * 0.8;
    const k = A * 1.33; // bezier control for peak amplitude A
    d.track(`M ${x0} ${Y - 0.25} C ${c1} ${Y - k} ${c2} ${Y - k} ${x1} ${Y - 0.25}`, top, { width: 2.5, arrow: i === lem.length - 1 });
    d.track(`M ${x0} ${Y + 0.25} C ${c1} ${Y + k} ${c2} ${Y + k} ${x1} ${Y + 0.25}`, bot, { width: 2.5, arrow: i === lem.length - 1 });
  });
  const tg = back ? 0 : 0;
  d.tag(3.8 + tg, Y - 1.4, 'IN', top);
  d.tag(13.0, Y - 2.7, 'IN', top);
  d.tag(13.0, Y + 2.7, 'IN', bot);
  // Skates. Forward: start toes out, mid parallel, close toes in. Backward: toes point -x.
  const sk = (x, y, aTop, aBot, h) => {
    d.skate(x, Y - h, aTop, top);
    d.skate(x, Y + h, aBot, bot);
  };
  if (!back) {
    sk(1.6, 0, -30, 30, 0.55);       // together, toes out
    sk(13.0, 0, 0, 0, 1.86);          // widest, toes forward
    sk(19.7, 0, 30, -30, 1.46);       // closing, toes in
  } else {
    sk(1.6, 0, 155, 205, 0.55);       // together, toes in (heels out)
    sk(13.0, 0, 180, 180, 1.86);      // widest
    sk(19.7, 0, 210, 150, 1.46);      // closing, heels in
  }
  d.text(4.2, 8.6, 'feet close', { size: 0.44 });
  d.text(16.2, 8.6, 'wide gap', { size: 0.44 });
  d.step(1.2, 7.4, 1);
  d.step(4.2, 2.9, 2);
  d.step(7.4, 7.6, 3);
  d.step(10.0, 2.4, 4);
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
        'Glide across towards one side of the lane with your weight over the right foot.',
        'At the side, turn your hips over and switch so the left foot now points the way you go.',
        'Glide back across to the other side, and keep switching all the way down the ice.',
      ],
      mistake: 'Stiff, straight legs: without bent knees the hips cannot open and the heels drift apart.',
      where: 'Public session, quiet lane, low speed',
      check: 'I read "mohawk" the way hockey coaches mostly use it: the open-hip, heel-to-heel position (toes pointing opposite ways), and "side to side" as zig-zagging across a lane, switching the lead foot each time. I am not certain how the owner\'s version switches feet at each side; I drew a carved switch. A common alternative meaning is the figure-skating mohawk: a turn from forwards on one foot to backwards on the other, done alternately to the left and right as you go down the ice. If that is the drill, the diagram needs redrawing.',
    },
  },
  {
    id: 'jumping-mohawk-side-to-side',
    group: G.mohawk,
    title: 'Jumping mohawk side to side',
    svg: mohawk(true),
    card: {
      trains: 'Quick, balanced hip turns and soft landings, so you can change direction without losing your feet.',
      steps: [
        'Set up heel-to-heel as in the plain mohawk, right foot leading.',
        'Glide across towards one side of the lane.',
        'At the side, bend, jump off both feet, turn in the air and land soft on both feet with the left foot now leading.',
        'Glide back across and jump again at the other side.',
      ],
      mistake: 'Landing on straight legs, which throws you off balance and onto your heels.',
      where: 'Only on an empty patch of a quiet public session',
      check: 'I read this as the mohawk side-to-side drill with a small jump to change the lead foot instead of a carved switch, taking off and landing on both feet. If the owner means a one-foot take-off or landing, the steps need changing. Same "mohawk" question as the plain drill above.',
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
        'Stand with heels close and toes turned out in a V, knees bent and leaning forward.',
        'Run your first strides short and quick, toes out, pushing each foot out to the side.',
        'Keep the next few strides short and fast and stay low.',
        'As you speed up, let the strides get longer and the toes come round to point forward.',
      ],
      mistake: 'Standing up tall and taking long first strides, so you glide instead of driving.',
      where: 'Only on an empty patch of a quiet public session',
      check: '',
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
        'Stand side-on to where you want to go, knees bent.',
        'Turn your lead foot (here the right) to point where you are going, and turn your shoulders with it.',
        'Cross the back foot over in front while the lead foot pushes hard under your body on its outside edge.',
        'Drive away with short, fast strides. Repeat starting the other way.',
      ],
      mistake: 'Standing up as you turn, so the crossunder push goes into the air instead of the ice.',
      where: 'Only on an empty patch of a quiet public session',
      check: '',
    },
  },
  {
    id: 'forward-crossover-steps-stop',
    group: G.two,
    title: 'Forwards cross over 2/3 steps & stop (toe down first)',
    svg: fwdX,
    card: {
      trains: 'Gaining speed round a curve and then stopping under control, the pattern of a tight turn back into the play.',
      steps: [
        'Skate forward on a gentle curve and cross the outside foot over in front of the inside foot.',
        'Do two or three crossovers, pushing under with the inside foot each time.',
        'Turn both blades across your line of travel, knees bent, and stop on both feet.',
      ],
      mistake: 'Stepping the crossing foot down heel first, which makes the blade catch and wobble.',
      where: 'Public session, quiet lane, low speed',
      check: 'I could not be sure what "toe down first" means here. I read it as setting the crossing foot down on the front of the blade first, so it does not catch, and wrote the common mistake around that. Another possible reading is finishing each push with the toe pressing into the ice (the "toe flick"). If it refers to the stop instead, tell me. The diagram shows crossovers turning left; repeat turning right.',
    },
  },
  {
    id: 'backward-crossover-steps-stop',
    group: G.two,
    title: 'Backwards cross over 2/3 steps & stop',
    svg: bwdX,
    card: {
      trains: 'Moving backward round a curve with speed and then stopping, the way a defenceman follows a rush and then holds their ground.',
      steps: [
        'Skate backward on a gentle curve and cross the outside foot over in front of the inside foot.',
        'Do two or three crossovers, pushing under with the inside foot each time.',
        'Push both heels out, toes turned in, knees bent, and stop on both feet.',
      ],
      mistake: 'Looking down at your feet, which tips you forward onto your toes and kills the crossovers.',
      where: 'Only on an empty patch of a quiet public session',
      check: 'The name does not say which stop. I drew a two-foot backward V-stop (heels pushed out, toes in) to match the "Two-foot edges" group. If the owner means turning into a forward hockey stop, or a one-foot backward stop, the last step changes. The diagram shows the curve to the skater\'s right; repeat the other way.',
    },
  },
  {
    id: 'lemons-forwards',
    group: G.two,
    title: 'Crossing under lemons forwards (feet together then wide gap)',
    svg: lemons(false),
    card: {
      trains: 'Inside-edge control on both feet at once, which is the base of every push and stop.',
      steps: [
        'Start with heels together and toes turned out, knees bent, astride a line.',
        'Push both feet out on the inside edges, keeping the lemons small and the feet close.',
        'Turn the toes in and squeeze the feet back together, then repeat.',
        'Now push out to a wide gap before squeezing back in.',
      ],
      mistake: 'Standing up straight, so the feet only slide on flat blades and you barely move.',
      where: 'Public session, quiet lane, low speed',
      check: 'I read "lemons" as swizzles: both feet out and back in, tracing lemon shapes. "Feet together then wide gap" I read as two stages: small lemons with the feet close, then big ones with a wide gap. I am unsure what "crossing under" means. I drew the lemons running along a painted line, with the feet crossing over the line each time they come together. Other possible readings: (a) the feet actually cross (one passes in front of or under the other) at the narrow end of each lemon; (b) skating the lemons under something, such as a stick held across. Please confirm which.',
    },
  },
  {
    id: 'lemons-backwards',
    group: G.two,
    title: 'Crossing under lemons backwards (feet together then wide gap)',
    svg: lemons(true),
    card: {
      trains: 'Backward push and balance on both inside edges, the base of backward skating for defencemen and goalies.',
      steps: [
        'Start with toes together and heels apart, knees bent, astride a line.',
        'Push both heels out on the inside edges, keeping the lemons small and the feet close.',
        'Turn the heels in and squeeze the feet back together, then repeat.',
        'Now push out to a wide gap before squeezing back in.',
      ],
      mistake: 'Leaning forward over the toes, which stops the heels pushing out.',
      where: 'Only on an empty patch of a quiet public session',
      check: 'Same reading as the forward version: swizzles along a line, small then wide. The "crossing under" question applies here too.',
    },
  },
];
