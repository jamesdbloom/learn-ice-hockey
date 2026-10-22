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
const mohawk = (stepping) => {
  const d = diagram({
    title: stepping ? 'Stepping mohawks side to side' : 'Mohawk side to side',
    desc: stepping
      ? 'Zig-zag down a lane in a heel-to-heel mohawk stance. At each side of the lane the skater changes the lead foot with two quick steps, one foot then the other, staying on the ice, into the mirror stance with the other foot leading.'
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
  if (!stepping) {
    // carved switch corners
    d.track('M 7.4 8.2 Q 8 8.9 8.6 8.2', 'ink', { width: 2, arrow: false });
    d.track('M 14.2 2.6 Q 14.8 1.9 15.4 2.6', 'ink', { width: 2, arrow: false });
    d.text(10.0, 8.9, 'switch', { size: 0.42 }).text(16.6, 2.3, 'switch', { size: 0.42 });
  } else {
    // Two quick steps at each side: the old trailing foot steps round to lead, then the other follows.
    const corner = (x, y, up) => {
      const dirNew = up ? -45 : 45;
      d.skate(x - 0.35, y + (up ? 0.55 : -0.55), dirNew, up ? 'L' : 'R', { len: 1.1 });
      d.skate(x + 0.55, y + (up ? 0.95 : -0.95), dirNew + 180, up ? 'R' : 'L', { len: 1.1 });
    };
    corner(8.0, 8.2, true);
    corner(14.8, 2.6, false);
    d.text(10.4, 9.25, 'step, step', { size: 0.42 }).text(17.2, 1.9, 'step, step', { size: 0.42 });
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

// ---------------------------------------------------------------- 5 Forward crossovers & stop (sideways)
// The skater FACES UP THE PAGE the whole time and travels sideways. Facing up, their right is +x.
// Going right: the left foot crosses over in front (up) of the right, the right steps out from behind;
// twice, then a sideways stop on the INSIDE edge of the right (leading) foot. Then the same back to the left.
const fwdX = (() => {
  const d = diagram({
    title: 'Forwards cross over 2 steps & stop, sideways',
    desc: 'The skater faces up the page and moves sideways. Top row: moving right, the left foot crosses over in front of the right, the right steps out from behind, twice, then a sideways stop on the inside edge of the right foot. Bottom row: back to the left the same way, the right foot crossing over, stopping on the inside edge of the left foot.',
  });
  const row = (y, dir) => {
    // dir +1: moving right (lead R, crossing L). dir -1: moving left (lead L, crossing R).
    const lead = dir > 0 ? 'R' : 'L', cross = dir > 0 ? 'L' : 'R';
    const X = (x) => (dir > 0 ? x : 22 - x);
    d.skate(X(2.0), y, -90, cross, { len: 1.3 });
    d.skate(X(3.4), y, -90, lead, { len: 1.3 });
    // Crossing foot steps over in front (up the page), lead foot steps out from behind (down the page).
    const hops = [[2.0, 5.0], [3.4, 6.4], [5.0, 8.0], [6.4, 9.4]];
    hops.forEach(([a, b], i) => {
      const foot = i % 2 === 0 ? cross : lead;
      const bulge = i % 2 === 0 ? -1.3 : 1.1;
      d.track(`M ${X(a + 0.3)} ${y + (i % 2 === 0 ? -0.8 : 0.8)} Q ${X((a + b) / 2)} ${y + bulge} ${X(b - 0.3)} ${y + (i % 2 === 0 ? -0.8 : 0.8)}`, foot, { width: 2 });
      d.skate(X(b), y, -90, foot, { len: 1.3 });
    });
    // Sideways stop on the lead foot's inside edge: snow sprays ahead, in the direction of travel.
    d.skate(X(11.4), y, -90, lead, { len: 1.3 });
    d.skate(X(10.2), y, -90, cross, { len: 1.3, lifted: true });
    d.spray(X(11.6), y, dir > 0 ? 0 : 180, { n: 5, len: 1.1, spread: 60 });
    d.tag(X(11.4), y + 1.3, 'IN', lead);
    d.text(X(13.0), y + 0.15, 'stop', { size: 0.46, weight: 600, color: COL.ink, anchor: dir > 0 ? 'start' : 'end' });
  };
  row(3.0, 1);
  d.step(1.0, 1.6, 1);
  d.step(6.0, 1.0, 2);
  d.step(11.4, 1.2, 3);
  d.text(5.8, 4.9, 'left crosses over in front, twice', { size: 0.42, color: COL.L });
  row(7.6, -1);
  d.step(16.0, 9.6, 4);
  d.step(8.4, 8.6, 5);
  d.text(16.2, 5.6, 'right crosses over in front, twice', { size: 0.42, color: COL.R });
  d.text(18.6, 1.0, 'facing this way ↑', { size: 0.42 });
  d.travel(5, 10.3, 9, 10.3);
  d.travel(17, 10.3, 13, 10.3);
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
    d.text(6.0, Y + 2.4, 'feet cross under', { size: 0.42 });
    d.text(3.9, 8.9, 'small', { size: 0.44 });
    d.text(16.2, 9.4, 'wide, roll onto the outside edges to cross', { size: 0.42 });
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
        'Glide across towards one side of the lane with your weight over the right foot.',
        'At the side, turn your hips over and switch so the left foot now points the way you go.',
        'Glide back across to the other side, and keep switching all the way down the ice.',
      ],
      mistake: 'Stiff, straight legs: without bent knees the hips cannot open and the heels drift apart.',
      check: 'I read "mohawk" the way hockey coaches mostly use it: the open-hip, heel-to-heel position (toes pointing opposite ways), and "side to side" as zig-zagging across a lane, switching the lead foot each time. I am not certain how the owner\'s version switches feet at each side; I drew a carved switch. A common alternative meaning is the figure-skating mohawk: a turn from forwards on one foot to backwards on the other, done alternately to the left and right as you go down the ice. If that is the drill, the diagram needs redrawing.',
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
        'Glide across towards one side of the lane.',
        'At the side, take two quick steps: the left foot steps round to point the new way, then the right foot steps in behind it, heel to heel.',
        'Glide back across with the left foot leading, and step again at the other side.',
      ],
      mistake: 'Big, slow steps that open the feet wide apart instead of quick, small steps that keep the heels close.',
      check: 'Drawn as two quick steps at each side, both feet staying on the ice. Same "mohawk" question as the plain drill above.',
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
      check: '',
    },
  },
  {
    id: 'forward-crossover-steps-stop',
    group: G.two,
    title: 'Forwards cross over 2 steps & stop, sideways (toe down first)',
    svg: fwdX,
    card: {
      trains: 'Crossover confidence: it can be done very slowly, so you learn to put the crossing foot down and push under before you need to do it at speed.',
      steps: [
        'Stand facing one way, knees bent. You will move sideways, not forwards.',
        'Moving to your right, cross the left foot over in front of the right, then step the right foot out from behind.',
        'Do that twice, then stop sideways on the inside edge of the right (leading) foot.',
        'Now go back to the left: cross the right foot over in front of the left, twice.',
        'Stop on the inside edge of the left foot. Keep going back and forth, slowly at first.',
      ],
      mistake: 'Rushing it: the drill is worth most done slowly, with each crossing foot placed deliberately.',
      check: 'In ordinary continuous crossovers you do not stop: you step onto the inside edge and glide before going back the other way (that is the separate "continuous crossovers" drill). "Toe down first" I still read as setting the crossing foot down on the front of the blade first; tell me if it means something else.',
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
      check: 'The name does not say which stop. I drew a two-foot backward V-stop (heels pushed out, toes in) to match the "Two-foot edges" group. If the owner means turning into a forward hockey stop, or a one-foot backward stop, the last step changes. The diagram shows the curve to the skater\'s right; repeat the other way. I kept this one as backward crossovers on a curve rather than the sideways back-and-forth of the forward drill, because a sideways version going backwards is the same footwork as the forward one. If you want it sideways too, say so.',
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
      check: '"Feet together then wide gap" still read as small lemons first, then wide ones.',
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
      check: 'Same reading as the forward version.',
    },
  },
];
