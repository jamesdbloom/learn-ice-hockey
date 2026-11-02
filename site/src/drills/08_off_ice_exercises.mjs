// Off-ice exercises (1 Nov 2026): drawings for the cards in "Practising on Your Own", section 5.
// Built from the owner-approved pilot. Owner's style rulings, 1 Nov 2026: drawn FROM BEHIND so
// the player's left is the reader's left; up to three frames left to right; the kit's light blue
// panel as the floor; one reusable stick figure (lib/figure.mjs); legs blue left, orange right,
// a foot on the floor solid.
//
// DRAW ONLY WHAT THE CARD SAYS. These are safety-reviewed, so no drawing carries a technique cue
// that is not in its card. Where a picture has to commit to something the card does not state
// (a joint angle, where the arms are, which side), it is listed in the card's `check` note so a
// reviewer can see it.
//
// Cards with no drawing, and why: the RAMP warm-up (a list of many different movements, no single
// picture), Hockey intervals and Easy aerobic (a bike, rower, hill or walk at an effort level; the
// effort is the content, not a movement shape).
import { diagram, COL } from './lib/draw.mjs';
import { figure, standOn, floor, block, ball, arrow, caption, finish, key, SIDE } from './lib/figure.mjs';

const GROUP = 'Off-ice exercises';
const W = 22;

// ------------------------------------------------------------------ Lateral bounds
const lateralBound = (() => {
  const d = diagram({
    title: 'Lateral bounds',
    w: W, h: 12.4,
    desc: 'Seen from behind, three pictures left to right. One: standing on the left leg, right foot off the floor. Two: pushing off sideways and in the air, travelling to the right. Three: landed on the right leg only, left foot off the floor, holding still before the next bound. Then bound back the other way.',
  });
  const G = 9.4;
  floor(d, 0.6, 21.4, G);
  const X = [3.6, 10.9, 18.0];
  // 1. On the left leg.
  const p1 = {
    kneeL: [-0.42, 1.2], footL: [-0.5, 2.45],
    kneeR: [0.55, 1.15], footR: [0.45, 1.95],
    elbowL: [-0.95, -1.0], handL: [-1.15, -0.25],
    elbowR: [0.95, -1.0], handR: [1.15, -0.25],
  };
  figure(d, X[0], standOn(G, p1, 'L'), p1, { down: { L: true, R: false } });
  // 2. In the air, travelling right. Arms out to the sides, symmetric.
  const p2 = {
    neck: [0.35, -1.97], shL: [-0.27, -1.85], shR: [0.97, -1.8], head: [0.48, -2.72],
    kneeL: [-0.95, 1.05], footL: [-1.55, 2.0],
    kneeR: [0.75, 1.15], footR: [0.95, 2.35],
    elbowL: [-1.05, -1.25], handL: [-1.6, -0.6],
    elbowR: [1.75, -1.25], handR: [2.3, -0.6],
  };
  figure(d, X[1], standOn(G, p2, 'R') - 1.1, p2, { down: { L: false, R: false } });
  d.raw(`<ellipse cx="${X[1] * 30}" cy="${(G + 0.05) * 30}" rx="${1.3 * 30}" ry="${0.18 * 30}" fill="${COL.ink}" fill-opacity="0.12"/>`);
  // 3. Landed on the right leg, holding still.
  const p3 = {
    kneeR: [0.42, 1.2], footR: [0.5, 2.45],
    kneeL: [-0.55, 1.15], footL: [-0.45, 1.95],
    elbowL: [-0.95, -1.0], handL: [-1.15, -0.25],
    elbowR: [0.95, -1.0], handR: [1.15, -0.25],
  };
  figure(d, X[2], standOn(G, p3, 'R'), p3, { down: { L: false, R: true } });
  d.track(`M ${X[0] + 1.6} 3.0 Q ${X[1]} 0.6 ${X[2] - 1.6} 3.0`, 'ink', { air: true, width: 3 });
  caption(d, X[0] - 2.7, G + 1.0, 1, 'stand on one leg');
  caption(d, X[1] - 2.7, G + 1.0, 2, 'push off sideways');
  caption(d, X[2] - 3.1, G + 1.0, 3, 'land on the other leg', 'and hold still');
  caption(d, 0.9, 1.0, 4, 'then bound back the other way');
  d.text(21.3, 1.2, 'seen from behind', { size: 0.4, anchor: 'end' });
  return finish(d, [key.limb('L'), key.limb('R'), key.down(), key.up(), key.air()]);
})();

// ------------------------------------------------------------------ Single-leg balance
const balance = (() => {
  const d = diagram({
    title: 'Single-leg balance',
    w: W, h: 11.4,
    desc: 'Seen from behind, three pictures left to right. One: standing still on the left leg, right foot off the floor. Two: the same on the right leg. Then the progression: standing on one leg while stickhandling a ball.',
  });
  const G = 8.6;
  floor(d, 0.6, 21.4, G);
  const X = [3.6, 10.6, 17.2];
  const arms = { elbowL: [-0.95, -1.0], handL: [-1.15, -0.25], elbowR: [0.95, -1.0], handR: [1.15, -0.25] };
  const onL = { ...arms, kneeL: [-0.38, 1.25], footL: [-0.42, 2.5], kneeR: [0.5, 1.2], footR: [0.42, 2.0] };
  const onR = { ...arms, kneeR: [0.38, 1.25], footR: [0.42, 2.5], kneeL: [-0.5, 1.2], footL: [-0.42, 2.0] };
  figure(d, X[0], standOn(G, onL, 'L'), onL, { down: { L: true, R: false } });
  figure(d, X[1], standOn(G, onR, 'R'), onR, { down: { L: false, R: true } });
  // 3. On the left leg, both hands on a stick held out in front and to the right.
  const p3 = { ...onL, elbowL: [-0.35, -1.05], handL: [0.35, -0.75], elbowR: [1.0, -1.0], handR: [0.85, -0.2] };
  const py = standOn(G, p3, 'L');
  const top = [X[2] + 0.35, py - 0.75], heel = [X[2] + 2.1, G - 0.15];
  d.raw(`<line x1="${top[0] * 30}" y1="${top[1] * 30}" x2="${heel[0] * 30}" y2="${heel[1] * 30}" stroke="${COL.muted}" stroke-width="6" stroke-linecap="round"/>` +
    `<line x1="${heel[0] * 30}" y1="${heel[1] * 30}" x2="${(heel[0] + 0.9) * 30}" y2="${heel[1] * 30}" stroke="${COL.ink}" stroke-width="8" stroke-linecap="round"/>`);
  ball(d, heel[0] + 1.55, G - 0.4, { r: 0.35 });
  figure(d, X[2], py, p3, { down: { L: true, R: false } });
  caption(d, X[0] - 2.7, G + 1.0, 1, 'stand on one leg', 'and hold your balance');
  caption(d, X[1] - 2.3, G + 1.0, 2, 'then the other leg');
  caption(d, X[2] - 2.75, G + 1.0, 0, 'progression: stickhandle', 'while you balance');
  d.text(21.3, 1.0, 'seen from behind', { size: 0.4, anchor: 'end' });
  return finish(d, [key.limb('L'), key.limb('R'), key.down(), key.up(), key.ball()]);
})();

// ------------------------------------------------------------------ Slide board
const slideBoard = (() => {
  const d = diagram({
    title: 'Slide board',
    w: W, h: 11.4,
    desc: 'Seen from behind, a slide board on the floor with a stop at each end, used in the booties or socks the board needs. One: the left foot pushes off the stop at the left end and you slide across to the right. Two: arriving at the stop at the right end, the pushing leg, the left, is brought back under the body. Three: push back the other way.',
  });
  const G = 8.0;
  floor(d, 0.6, 21.4, G + 0.35);
  // The board, and a stop at each end.
  d.raw(`<rect x="${1.2 * 30}" y="${G * 30}" width="${19.6 * 30}" height="${0.35 * 30}" rx="4" fill="#e6edf3" stroke="${COL.muted}" stroke-width="2"/>`);
  block(d, 0.9, G, 0.5, 0.75);
  block(d, 20.6, G, 0.5, 0.75);
  // 1. Pushing off the left stop: left leg out to the stop, right leg under the body.
  const p1 = {
    neck: [0.45, -1.95], shL: [-0.17, -1.85], shR: [1.07, -1.75], head: [0.6, -2.7],
    kneeL: [-1.15, 1.1], footL: [-2.05, 2.2],
    kneeR: [0.55, 1.1], footR: [0.5, 2.2],
    elbowL: [-0.6, -1.0], handL: [-0.9, -0.3], elbowR: [1.6, -1.0], handR: [1.95, -0.3],
  };
  const x1 = 3.95;
  figure(d, x1, standOn(G, p1, 'R'), p1, { down: { L: true, R: true } });
  // 2. Sliding across: both feet on the board.
  const p2 = {
    kneeL: [-0.75, 1.05], footL: [-1.05, 2.15],
    kneeR: [0.75, 1.05], footR: [1.05, 2.15],
    elbowL: [-0.95, -1.0], handL: [-1.15, -0.25], elbowR: [0.95, -1.0], handR: [1.15, -0.25],
  };
  figure(d, 11, standOn(G, p2), p2);
  // 3. At the right stop: right foot against it, the left leg brought back under the body.
  const p3 = {
    neck: [-0.35, -1.97], shL: [-0.97, -1.8], shR: [0.27, -1.85], head: [-0.45, -2.72],
    kneeR: [1.15, 1.1], footR: [2.05, 2.2],
    kneeL: [-0.45, 1.1], footL: [-0.35, 2.2],
    elbowL: [-1.5, -1.0], handL: [-1.8, -0.3], elbowR: [0.5, -1.0], handR: [0.8, -0.3],
  };
  const x3 = 18.05;
  figure(d, x3, standOn(G, p3, 'L'), p3, { down: { L: true, R: true } });
  d.raw(`<path d="M ${(x3 - 1.6) * 30} ${(G - 2.4) * 30} Q ${(x3 - 1.5) * 30} ${(G - 0.7) * 30} ${(x3 - 0.6) * 30} ${(G - 0.6) * 30}" fill="none" stroke="${COL.L}" stroke-width="2.5" stroke-dasharray="4 3" marker-end="url(#ah-L)"/>`);
  d.travel(5.9, G - 4.4, 9.2, G - 4.4);
  d.travel(12.6, G - 4.4, 15.9, G - 4.4);
  caption(d, 0.9, G + 1.25, 1, 'push off the stop at one end', 'and slide across');
  caption(d, 13.2, G + 1.25, 2, 'bring the pushing leg', 'back under you at the stop');
  caption(d, 0.9, 1.0, 3, 'then push back the other way');
  d.text(21.3, 1.2, 'seen from behind', { size: 0.4, anchor: 'end' });
  return finish(d, [key.limb('L'), key.limb('R'), key.down(), key.travel()]);
})();

// ------------------------------------------------------------------ Single-leg strength
// A hinge and a split stance cannot be read from behind, so all three panels are side views
// (facing the reader's right, so the LEFT leg is the near one).
const mirrorX = (p) => Object.fromEntries(Object.entries(p).map(([k, [x, y]]) => [k, [-x, y]]));
const singleLeg = (() => {
  const d = diagram({
    title: 'Single-leg strength',
    w: W, h: 12.6,
    desc: 'Seen from the side, facing right: three single-leg exercises, pick one. A split squat, one foot forward and one back, both knees bent. A single-leg deadlift, standing on one leg and leaning the body forward while the other leg goes out behind. A step-up, one foot up on a box. Work each leg in turn, add calf work, and get coached on the lift before you add weight.',
  });
  const G = 7.6;
  floor(d, 0.6, 21.4, G);
  for (const x of [7.6, 14.6]) d.raw(`<line x1="${x * 30}" y1="${2.2 * 30}" x2="${x * 30}" y2="${(G + 1.6) * 30}" stroke="${COL.rim}" stroke-width="2"/>`);
  // Split squat.
  const sq = { ...SIDE, kneeL: [1.15, 0.12], footL: [1.2, 1.35], kneeR: [-0.25, 1.12], footR: [-1.15, 1.28] };
  figure(d, 3.9, standOn(G, sq, 'L'), sq, { far: 'R', footAngle: { R: 35 } });
  // Single-leg deadlift: on the left leg, body hinged forward, right leg out behind.
  const dl = {
    ...SIDE, neck: [1.85, -0.65], shL: [1.75, -0.6], shR: [1.75, -0.6], head: [2.6, -0.8],
    kneeL: [0.15, 1.25], footL: [0.1, 2.5], kneeR: [-1.2, -0.1], footR: [-2.4, -0.2],
    elbowL: [1.8, 0.3], handL: [1.8, 1.15], elbowR: [1.7, 0.3], handR: [1.7, 1.15],
  };
  figure(d, 10.7, standOn(G, dl, 'L'), dl, { far: 'R', down: { L: true, R: false }, footAngle: { R: 80 } });
  // Step-up: left foot on a box.
  const su = {
    ...SIDE, neck: [0.35, -1.97], shL: [0.33, -1.82], shR: [0.33, -1.82], head: [0.47, -2.72],
    elbowL: [0.4, -0.95], handL: [0.45, -0.1], elbowR: [0.3, -0.95], handR: [0.35, -0.1],
    kneeL: [1.15, -0.1], footL: [1.15, 1.15], kneeR: [-0.2, 1.25], footR: [-0.35, 2.5],
  };
  const sx = 16.9, sy = standOn(G, su, 'R');
  block(d, sx + 0.4, G, 2.3, G - (sy + 1.15 + 0.15));
  figure(d, sx, sy, su, { far: 'R' });
  arrow(d, sx + 3.4, G - 0.4, sx + 3.4, G - 2.6);
  const lab = (x, s) => d.text(x, G + 0.95, s, { size: 0.44, weight: 600, color: COL.ink });
  lab(4.1, 'split squat'); lab(11.1, 'single-leg deadlift'); lab(18.0, 'step-up');
  caption(d, 0.9, 1.0, 1, 'pick one');
  d.text(21.3, 1.2, 'seen from the side', { size: 0.4, anchor: 'end' });
  caption(d, 0.9, G + 2.1, 2, 'work each leg in turn');
  caption(d, 11.2, G + 2.1, 3, 'add calf work');
  caption(d, 0.9, G + 3.3, 4, 'get coached on the lift before you add weight');
  return finish(d, [key.limb('L'), key.limb('R'), key.down(), key.up()]);
})();

// ------------------------------------------------------------------ Copenhagen adduction, short-lever
// Seen from behind works here: lying on the LEFT side, head to the reader's left, so the top leg
// is the right (orange). Shows ONLY the set-up the card describes, not the movement.
const copenhagen = (() => {
  const d = diagram({
    title: 'Copenhagen adduction, short-lever',
    w: W, h: 12.2,
    desc: 'Seen from behind, the set-up only: lying on the left side on the floor, propped on the left forearm, with the top leg, the right, supported on a bench at the knee, which is the short-lever version. The bottom leg lies along the floor under the bench. It does not show the movement itself: get shown it by a coach or physio, and start very gently. Separately, not during the hold, squeeze a ball or cushion between the knees and hold it still.',
  });
  const G = 7.4;
  floor(d, 0.6, 21.4, G);
  // Bench: a top with a leg at each end, so the bottom leg can be seen passing under it.
  const bx = 12.8, bw = 6.6, bh = 1.6;
  d.raw(`<rect x="${bx * 30}" y="${(G - bh) * 30}" width="${bw * 30}" height="${0.32 * 30}" rx="4" fill="#dfe7ee" stroke="${COL.muted}" stroke-width="2"/>` +
    [bx + 0.3, bx + bw - 0.6].map((x) => `<rect x="${x * 30}" y="${(G - bh + 0.32) * 30}" width="${0.3 * 30}" height="${(bh - 0.32) * 30}" fill="#dfe7ee" stroke="${COL.muted}" stroke-width="2"/>`).join(''));
  const px = 11.75, py = G - 0.55;
  const knee = [bx + 0.45 - px, G - bh - 0.2 - py];
  const pose = {
    hipL: [0, 0.22], hipR: [0, -0.22],
    neck: [-1.9, -0.75], shL: [-1.8, -0.4], shR: [-2.0, -1.1], head: [-2.7, -1.05],
    elbowL: [-1.85, 0.42], handL: [-2.85, 0.42], elbowR: [-1.05, -0.75], handR: [-0.3, -0.45],
    kneeR: knee, footR: [knee[0] + 1.3, knee[1]],
    kneeL: [1.3, 0.3], footL: [2.6, 0.35],
  };
  figure(d, px, py, pose, { far: 'L' });
  caption(d, 0.9, 1.0, 1, 'get shown it by a coach or physio first');
  d.text(21.3, 1.2, 'seen from behind', { size: 0.4, anchor: 'end' });
  arrow(d, bx + 1.9, G - bh - 1.55, bx + 0.75, G - bh - 0.5);
  caption(d, bx + 1.4, G - bh - 2.6, 2, 'short-lever:', 'the knee on the bench');
  caption(d, 0.9, G + 1.2, 3, 'start very gently');
  caption(d, 0.9, G + 2.4, 4, 'separately, not during the hold: squeeze', 'a ball or cushion between your knees');
  return finish(d, [key.limb('L'), key.limb('R')]);
})();

// ------------------------------------------------------------------ Hip mobility
// 90/90 is a seated leg shape that only reads from ABOVE; the squat reads from behind.
const flipLR = (p) => {
  const m = mirrorX(p), out = {};
  for (const [k, v] of Object.entries(m)) out[k.replace(/L$/, '#').replace(/R$/, 'L').replace(/#$/, 'R')] = v;
  return out;
};
const hips = (() => {
  const d = diagram({
    title: 'Hip mobility',
    w: W, h: 12.8,
    desc: 'Left: 90/90 hip rotations, seen from above. Sitting on the floor with one leg bent in front and the other bent out to the side, both knees at right angles, then rotating both knees over to the other side, and back. Right: holding a deep squat, seen from behind. Also work the hip flexors and groin through their range, and make it strength at the end of your range, not just stretching into it.',
  });
  const G = 7.6;
  // 90/90, seen from above, facing up the page.
  const a = {
    hipL: [-0.32, 0], hipR: [0.32, 0], neck: [0, -0.9], shL: [-0.95, -0.9], shR: [0.95, -0.9], head: [0, -1.0],
    kneeL: [-0.85, -1.35], footL: [0.27, -1.79], kneeR: [1.6, 0.05], footR: [1.6, 1.3],
    elbowL: [-1.05, -0.3], handL: [-0.7, 0.2], elbowR: [1.05, -0.3], handR: [0.75, 0.2],
  };
  figure(d, 3.0, 4.9, a, { footAngle: { L: -22, R: 90 } });
  figure(d, 8.9, 4.9, flipLR(a), { footAngle: { L: 90, R: 22 } });
  d.raw(`<path d="M ${4.7 * 30} ${2.7 * 30} Q ${6.0 * 30} ${1.7 * 30} ${7.3 * 30} ${2.7 * 30}" fill="none" stroke="${COL.ink}" stroke-width="3" marker-start="url(#ah-ink)" marker-end="url(#ah-ink)"/>`);
  d.text(6.0, 1.4, 'switch sides', { size: 0.4, weight: 600, color: COL.ink });
  d.text(6.0, G + 2.05, 'seen from above', { size: 0.4 });
  d.raw(`<line x1="${12.3 * 30}" y1="${1.0 * 30}" x2="${12.3 * 30}" y2="${(G + 2.4) * 30}" stroke="${COL.rim}" stroke-width="2"/>`);
  // Deep squat, seen from behind.
  floor(d, 13.0, 21.4, G);
  const sq = {
    kneeL: [-1.0, -0.45], footL: [-0.85, 0.75], kneeR: [1.0, -0.45], footR: [0.85, 0.75],
    neck: [0, -1.95], shL: [-0.62, -1.8], shR: [0.62, -1.8], head: [0, -2.7],
    elbowL: [-1.0, -1.05], handL: [-0.15, -1.05], elbowR: [1.0, -1.05], handR: [0.15, -1.05],
  };
  figure(d, 17.2, standOn(G, sq), sq);
  d.text(17.2, G + 2.05, 'seen from behind', { size: 0.4 });
  caption(d, 0.9, G + 1.0, 1, '90/90 hip rotations');
  caption(d, 13.4, G + 1.0, 2, 'hold a deep squat');
  caption(d, 0.9, G + 3.0, 3, 'work the hip flexors and groin through their range');
  caption(d, 0.9, G + 4.0, 4, 'make it strength at the end of the range, not just stretching');
  return finish(d, [key.limb('L'), key.limb('R'), key.down()]);
})();

// ------------------------------------------------------------------ Anti-rotation core
const core = (() => {
  const d = diagram({
    title: 'Anti-rotation core',
    w: W, h: 11.6,
    desc: 'Pick one of three. A plank, seen from the side: on the forearms and toes, trunk not sagging. A dead bug, seen from the side: lying on the back, one arm reaching up and the other overhead, one leg bent up and the other straight out. A Pallof press, seen from above: standing side-on to a band fixed to a post, hands pressed out in front, not letting the band twist you. Keep the trunk from twisting or sagging throughout. Then add loaded carries, walking with something heavy.',
  });
  const G = 6.6;
  floor(d, 0.6, 14.6, G);
  for (const x of [7.4, 14.8]) d.raw(`<line x1="${x * 30}" y1="${2.2 * 30}" x2="${x * 30}" y2="${(G + 1.9) * 30}" stroke="${COL.rim}" stroke-width="2"/>`);
  // Plank, facing right.
  const pl = {
    ...SIDE, neck: [1.95, -0.32], shL: [1.85, -0.3], shR: [1.85, -0.3], head: [2.7, -0.45],
    elbowL: [1.85, 0.95], handL: [2.85, 0.95], elbowR: [1.75, 0.95], handR: [2.75, 0.95],
    kneeL: [-1.2, 0.45], footL: [-2.4, 0.9], kneeR: [-1.15, 0.5], footR: [-2.35, 0.95],
  };
  figure(d, 3.4, G - 1.1, pl, { far: 'R', footAngle: { L: 60, R: 60 } });
  // Dead bug, on the back, head to the left.
  const db = {
    ...SIDE, neck: [-1.95, 0], shL: [-1.85, 0], shR: [-1.85, 0], head: [-2.65, -0.1],
    elbowL: [-1.85, -0.9], handL: [-1.85, -1.75], elbowR: [-2.7, -0.3], handR: [-3.5, -0.4],
    kneeR: [0, -1.25], footR: [1.2, -1.25], kneeL: [1.25, -0.25], footL: [2.5, -0.35],
  };
  figure(d, 11.3, G - 0.4, db, { far: 'R', down: { L: false, R: false }, footAngle: { L: 90, R: 0 } });
  // Pallof press, seen from above, facing up the page; band from a post on the left.
  const cx = 19.3, cy = 4.6;
  const pp = {
    hipL: [-0.32, 0.15], hipR: [0.32, 0.15], neck: [0, -0.1], shL: [-0.95, -0.1], shR: [0.95, -0.1], head: [0, -0.05],
    elbowL: [-0.55, -0.95], handL: [-0.1, -1.75], elbowR: [0.55, -0.95], handR: [0.1, -1.75],
    footL: [-0.5, 0.35], footR: [0.5, 0.35],
  };
  d.raw(`<line x1="${15.9 * 30}" y1="${(cy - 1.75) * 30}" x2="${cx * 30}" y2="${(cy - 1.75) * 30}" stroke="#7a4fb3" stroke-width="4"/>` +
    `<rect x="${15.5 * 30}" y="${(cy - 2.1) * 30}" width="${0.8 * 30}" height="${0.8 * 30}" rx="4" fill="#dfe7ee" stroke="${COL.muted}" stroke-width="2"/>`);
  figure(d, cx, cy, pp, { noLegs: true, footAngle: { L: -90, R: -90 } });
  d.text(17.7, cy - 2.1, 'band', { size: 0.38, color: '#7a4fb3', weight: 600 });
  d.text(15.9, cy - 0.65, 'post', { size: 0.38 });
  const lab = (x, s, v) => { d.text(x, G + 0.95, s, { size: 0.44, weight: 600, color: COL.ink }); d.text(x, G + 1.6, v, { size: 0.38 }); };
  lab(3.9, 'plank', 'seen from the side'); lab(11.1, 'dead bug', 'seen from the side'); lab(18.3, 'Pallof press', 'seen from above');
  caption(d, 0.9, 1.0, 1, 'pick one');
  caption(d, 0.9, G + 2.6, 2, 'keep your trunk from twisting or sagging throughout');
  caption(d, 0.9, G + 3.7, 3, 'add loaded carries: walk with something heavy');
  return finish(d, [key.limb('L'), key.limb('R'), key.down(), key.up()]);
})();

// ------------------------------------------------------------------ Medicine-ball throws
// A turn of the hips and trunk only reads from ABOVE. Wall along the top.
const medBall = (() => {
  const d = diagram({
    title: 'Medicine-ball throws',
    w: W, h: 11.2,
    desc: 'Seen from above, with a solid wall along the top. One: standing side-on to the wall, left shoulder towards it, holding the medicine ball on the far side. Two: throwing it at the wall by turning the hips and trunk to face the wall; the feet are not shown in this picture. Three: then from the other side, right shoulder towards the wall.',
  });
  d.raw(`<rect x="${1.0 * 30}" y="${1.3 * 30}" width="${20 * 30}" height="${0.45 * 30}" fill="${COL.muted}" fill-opacity="0.55"/>`);
  d.text(11, 1.05, 'solid wall, away from windows', { size: 0.4, weight: 600, color: COL.ink });
  const y = 6.2;
  // 1. Facing right: left shoulder to the wall, ball on the right hip.
  const s1 = {
    hipL: [-0.1, -0.32], hipR: [-0.1, 0.32], neck: [0, 0], shL: [0, -0.95], shR: [0, 0.95], head: [0.1, 0],
    elbowL: [0.9, 0.15], handL: [0.55, 1.2], elbowR: [0.4, 1.3], handR: [0.4, 1.35],
    footL: [0.05, -0.8], footR: [-0.05, 0.8],
  };
  figure(d, 4.0, y, s1, { noLegs: true });
  ball(d, 4.0 + 0.5, y + 1.75, { r: 0.42 });
  // 2. Turned to face the wall, ball thrown.
  const s2 = {
    hipL: [-0.32, 0.05], hipR: [0.32, 0.05], neck: [0, 0], shL: [-0.95, 0], shR: [0.95, 0], head: [0, -0.1],
    elbowL: [-0.6, -0.95], handL: [-0.15, -1.75], elbowR: [0.6, -0.95], handR: [0.15, -1.75],
    footL: [0.05, -0.8], footR: [-0.05, 0.8],
  };
  figure(d, 11.0, y, s2, { noLegs: true, noFeet: true });
  ball(d, 11.0, y - 2.2, { r: 0.42 });
  d.track(`M 11 ${y - 2.75} L 11 1.95`, 'ink', { air: true, width: 3 });
  d.raw(`<path d="M ${12.4 * 30} ${(y + 0.9) * 30} A ${1.5 * 30} ${1.5 * 30} 0 0 0 ${12.4 * 30} ${(y - 0.9) * 30}" fill="none" stroke="${COL.ink}" stroke-width="2.5" marker-end="url(#ah-ink)"/>`);
  // 3. Facing left: right shoulder to the wall, ball on the left hip.
  const s3 = flipLR(s1);
  figure(d, 18.0, y, s3, { noLegs: true, footAngle: { L: 180, R: 180 } });
  ball(d, 18.0 - 0.5, y + 1.75, { r: 0.42 });
  caption(d, 1.3, y + 2.9, 1, 'stand side-on', 'to the wall');
  caption(d, 8.3, y + 2.9, 2, 'throw by turning', 'your hips and trunk');
  caption(d, 15.3, y + 2.9, 3, 'then throw from', 'the other side');
  d.text(21.3, 2.5, 'seen from above', { size: 0.4, anchor: 'end' });
  return finish(d, [key.foot('L'), key.foot('R'), key.ball('medicine ball'), key.air()]);
})();

const drills = [
  {
    id: 'office-exercise-lateral-bound', group: GROUP, title: 'Lateral bounds', svg: lateralBound,
    card: {
      trains: 'The sideways push of the stride.',
      steps: ['Stand on one leg.', 'Push off sideways and land on the other leg.', 'Stick the landing: hold still before the next bound.', 'Bound back the other way.'],
      mistake: 'Bouncing straight on without sticking the landing.',
      check: 'Implied by the drawing, not the card: knee over foot (knee bend not visible from behind); the arms are held a little out from the body; the free foot is lifted just off the floor beside the standing leg.',
    },
  },
  {
    id: 'office-exercise-single-leg-balance', group: GROUP, title: 'Single-leg balance', svg: balance,
    card: {
      trains: 'The ankle stability your edges run on.',
      steps: ['Stand on one leg and hold your balance.', 'Then the other leg.'],
      progression: 'Stickhandle while you balance.',
      mistake: 'Only ever balancing on your stronger leg.',
      check: 'Implied: knee of the standing leg nearly straight; free foot lifted a little beside the standing leg; arms a little out; in frame 3 a ball is used (the card says only "stickhandling").',
    },
  },
  {
    id: 'office-exercise-slide-board', group: GROUP, title: 'Slide board', svg: slideBoard,
    card: {
      trains: 'The sideways push and bringing the leg back under you.',
      steps: ['In the booties or socks the board needs, push off the stop at one end and slide across.', 'Bring the pushing leg back under you as you reach the stop at the other end.', 'Push back the other way.'],
      mistake: 'Treating it as skating practice; it cannot give you edges, glide or balance on a blade.',
      check: 'Implied: both feet on the board while sliding; knees bent; the outside foot against the stop at each end. Booties are not drawn.',
    },
  },
  {
    id: 'office-exercise-single-leg-strength', group: GROUP, title: 'Single-leg strength', svg: singleLeg,
    card: {
      trains: 'The push of the stride. Skating is a single-leg sport, and two-legged squats don\'t cover it.',
      steps: ['Pick a split squat, a single-leg deadlift or a step-up.', 'Work each leg in turn.', 'Add calf work.', 'Get coached on the lift before you add weight.'],
      mistake: 'Only training on two legs.',
      check: 'Side view, not from behind: a hinge and a split stance cannot be read from behind. Implied: split squat with the rear foot on the floor on its toes, both knees near right angles, trunk upright; deadlift with the body near horizontal, the free leg in line with it, the standing knee slightly bent, arms hanging; step-up box about knee height, slight forward lean. No weight is drawn. Calf work is not drawn: the card names no exercise.',
    },
  },
  {
    id: 'office-exercise-copenhagen-short-lever', group: GROUP, title: 'Copenhagen adduction, short-lever', svg: copenhagen,
    card: {
      trains: 'Groin (adductor) strength.',
      steps: ['Get shown it by a coach or physio: it is a side-lying groin exercise with your top leg supported on a bench or by a partner.', 'Start on the short-lever version, with the knee supported.', 'Start very gently; diving in makes people extremely sore.', 'Separately, not during the hold, add a squeeze: a ball or cushion between your knees, squeezed and held still.'],
      mistake: 'Going straight to the full version and being sore for days.',
      check: 'Set-up only; the movement is deliberately not drawn. Implied: lying on the left side, propped on the forearm, hips on the floor, bottom leg along the floor under the bench, bench about knee height. The squeeze is text only: the card does not say what position it is done in.',
    },
  },
  {
    id: 'office-exercise-hip-mobility', group: GROUP, title: 'Hip mobility', svg: hips,
    card: {
      trains: 'A hip strong through its whole range, for a deep, wide stride.',
      steps: ['Do 90/90 hip rotations.', 'Hold deep squats.', 'Work the hip flexors and groin through their range.', 'Make it strength at the end of your range, not just stretching into it.'],
      mistake: 'Only stretching; range you cannot control under load is no use on the ice.',
      check: '90/90 seen from above. Implied: "rotations" drawn as switching both knees from one side to the other; hands on the floor beside the hips; trunk upright. Squat: feet a little wider than the hips, knees out over the feet, hands together in front. Steps 3 and 4 are text only.',
    },
  },
  {
    id: 'office-exercise-anti-rotation-core', group: GROUP, title: 'Anti-rotation core', svg: core,
    card: {
      trains: 'Holding your ground in a battle without folding.',
      steps: ['Pick a plank, a dead bug or a Pallof press.', 'Keep your trunk from twisting or sagging throughout.', 'Add loaded carries, walking with something heavy, which is what a battle feels like.'],
      mistake: 'Letting the trunk twist or sag to finish the rep.',
      check: 'Implied by the drawing, none of it in the card: forearm plank (not straight-arm) on the toes; dead bug with opposite arm and leg extended and the other leg at a right angle; Pallof press with a band (not a cable), standing, arms straight out in front at chest height, side-on to the anchor. Carries are text only.',
    },
  },
  {
    id: 'office-exercise-medicine-ball-throws', group: GROUP, title: 'Medicine-ball throws', svg: medBall,
    card: {
      trains: 'Shot power, which comes up from the ground through a turning trunk.',
      steps: ['Stand side-on to a solid wall, away from windows.', 'Throw a medicine ball at it by turning your hips and trunk.', 'Then throw from the other side.'],
      mistake: 'Throwing with the arms.',
      check: 'Seen from above, because a turn reads only from above. Implied: ball held at the hip away from the wall; feet are left out of the throwing frame, because the card does not say what they do; distance from the wall and ball height are not shown.',
    },
  },
];
export default drills;
