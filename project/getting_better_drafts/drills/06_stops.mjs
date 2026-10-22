// Stops (DRAFT, 22 Oct 2026). Travel is left to right (+x) in every diagram.
// Geometry notes, so a reviewer can check the reasoning:
//   - Forward skater facing +x: their LEFT is up the page (-y), RIGHT is down (+y).
//   - A stopping blade turned across the line of travel scrapes on the edge on the side
//     AWAY from travel; snow piles up and sprays the way the skater was going.
//   - Hockey stop turning left (hips end up facing up the page): the right foot leads on
//     its INSIDE edge, the left foot trails on its OUTSIDE edge.
//   - T-stop: back foot at right angles behind the gliding heel, toe pointing out; leaning
//     back against travel puts it on its OUTSIDE edge.
//   - Backwards: the skater faces -x (toes point left) while travelling +x; their right is
//     up the page.
import { diagram, COL, PX } from '../lib/draw.mjs';

const GROUP = 'Stops';

// A pale scraped band showing where a sideways blade skids (feet coords, straight segment).
const skid = (d, x1, y1, x2, y2, half = 0.8) => d.raw(
  `<path d="M ${x1 * PX} ${(y1 - half) * PX} L ${x2 * PX} ${(y2 - half) * PX} L ${x2 * PX} ${(y2 + half) * PX} L ${x1 * PX} ${(y1 + half) * PX} Z" fill="${COL.spray}" fill-opacity="0.18"/>`);

// 1. One-foot snowplow stop, stopping foot pushed out in front.
const oneFootFront = (() => {
  const d = diagram({
    title: 'One foot stop in front',
    desc: 'Glide forward on both feet. Turn the right toe in and heel out, slide that foot a little in front, and scrape its inside edge to stop while the left foot glides straight.',
  });
  d.track('M 1.5 4.4 L 17.2 4.4', 'L');
  d.track('M 1.5 6.4 L 9.4 6.4 C 11 6.5 12.5 6.9 14.2 7.0 L 17.6 7.0', 'R', { edge: 'IN', edgeAt: [15.6, 8.3] });
  d.skate(4, 4.4, 0, 'L');
  d.skate(4, 6.4, 0, 'R');
  d.step(4, 3.1, 1);
  d.skate(10.6, 6.6, -30, 'R');
  d.step(10.6, 8.1, 2);
  d.skate(14.2, 7.0, -40, 'R');
  d.spray(14.9, 6.9, 15, { n: 5 });
  d.step(13.6, 8.6, 3);
  d.skate(18.6, 4.4, 0, 'L');
  d.skate(19.2, 7.0, -40, 'R');
  d.spray(19.9, 6.9, 15, { n: 5 });
  d.step(18.6, 3.1, 4);
  d.text(11, 2.1, 'right toe in, heel out, foot slightly ahead');
  d.travel(3, 10, 10, 10);
  return d.svg();
})();

// 2. Outside edge T-stop.
const tStop = (() => {
  const d = diagram({
    title: 'Outside edge T-stop',
    desc: 'Glide on the right foot. Place the left foot behind the right heel at a right angle, toe pointing out, then lower it and drag its outside edge until you stop.',
  });
  d.track('M 1.5 6.4 L 19 6.4', 'R');
  // lifted left foot at the start
  d.skate(4, 6.4, 0, 'R');
  d.skate(4.2, 4.7, 0, 'L', { lifted: true });
  d.step(2.4, 4.0, 1);
  // placed in a T behind the right heel, still lifted
  d.skate(9.6, 6.4, 0, 'R');
  d.skate(8.6, 5.6, -90, 'L', { lifted: true });
  d.step(8.6, 3.9, 2);
  // drag: left blade on the ice, scrape band behind it
  skid(d, 10.6, 5.6, 13.4, 5.6);
  d.skate(14.4, 6.4, 0, 'R');
  d.skate(13.4, 5.6, -90, 'L');
  d.spray(13.7, 4.95, -10, { n: 4, len: 0.8, spread: 40 });
  d.tag(11.8, 4.4, 'OUT', 'L');
  d.step(13.4, 3.9, 3);
  // stopped
  d.skate(19.2, 6.4, 0, 'R');
  d.skate(18.2, 5.6, -90, 'L');
  d.step(18.2, 3.9, 4);
  d.text(11, 8.6, 'left instep tucked behind the right heel');
  d.travel(3, 10, 10, 10);
  return d.svg();
})();

// Shared two-foot hockey stop. gap = distance between the two blades at the stop (ft).
function hockeyStop({ title, desc, gap, note }) {
  const d = diagram({ title, desc });
  const yStop = 5.4;
  const xR = 17.6, xL = xR - gap;
  // approach tracks, curving into the skid
  d.track(`M 1.5 4.6 L 8.5 4.6 C 10 4.6 ${xL - 2.4} ${yStop} ${xL - 0.6} ${yStop}`, 'L', { arrow: false });
  d.track(`M 1.5 6.4 L 8.5 6.4 C 10.5 6.4 ${xR - 2.4} ${yStop} ${xR - 0.6} ${yStop}`, 'R', { arrow: false });
  skid(d, xL - 2.2, yStop, xL, yStop);
  skid(d, xR - 2.2, yStop, xR, yStop);
  d.skate(4, 4.6, 0, 'L');
  d.skate(4, 6.4, 0, 'R');
  d.step(4, 3.3, 1);
  // mid-turn: both blades swing together
  d.skate(10.2, 4.75, -45, 'L');
  d.skate(10.8, 6.25, -45, 'R');
  d.step(9.0, 8.0, 2);
  // stopped: blades across the line of travel, toes up the page (hips turned left)
  d.skate(xL, yStop, -90, 'L');
  d.skate(xR, yStop, -90, 'R');
  d.spray(xR + 0.15, yStop, 0, { n: 6, len: 1.1, spread: 70 });
  d.tag(xL - 0.9, yStop + 1.9, 'OUT', 'L');
  d.tag(xR - 0.3, yStop + 1.9, 'IN', 'R');
  d.step(xL - 1.1, 3.3, 3);
  d.text((xL + xR) / 2, 2.1, note);
  d.travel(3, 10, 10, 10);
  return d.svg();
}

const parallelStop = hockeyStop({
  title: 'Two foot hockey stop – parallel',
  desc: 'Glide on both feet, turn hips and both blades together across the line of travel, blades parallel and about hip-width apart, and skid to a stop on the right inside edge and left outside edge.',
  gap: 1.3,
  note: 'blades parallel, about hip-width',
});

const sideBySideStop = hockeyStop({
  title: 'Two foot hockey stop – side by side',
  desc: 'The same stop with a wider base: feet well apart and level with each other, each blade skidding its own track.',
  gap: 2.8,
  note: 'feet wide and level, two separate skids',
});

// 5. One-foot glide to one-foot stop, forwards (right foot, turning left, inside edge).
const oneFootForward = (() => {
  const d = diagram({
    title: 'One foot glide to one foot stop – forwards',
    desc: 'Glide forward on the right foot with the left foot lifted, then turn the right blade across the line of travel and skid to a stop on its inside edge without putting the left foot down.',
  });
  d.track('M 1.5 6.4 L 9 6.4 C 11.5 6.4 13 6.3 14.6 6.3', 'R', { arrow: false });
  skid(d, 13.2, 6.3, 16.4, 6.3);
  d.skate(4, 6.4, 0, 'R');
  d.skate(3.6, 4.9, 0, 'L', { lifted: true });
  d.step(4, 3.6, 1);
  d.skate(11, 6.4, -45, 'R');
  d.skate(10.6, 4.9, -20, 'L', { lifted: true });
  d.step(11, 3.6, 2);
  d.skate(16.4, 6.3, -90, 'R');
  d.skate(15.0, 4.4, -90, 'L', { lifted: true });
  d.spray(16.6, 6.3, 0, { n: 6, len: 1.1, spread: 70 });
  d.tag(15.4, 8.0, 'IN', 'R');
  d.step(17.6, 4.2, 3);
  d.text(11, 9.1, 'left foot stays up the whole time');
  d.travel(3, 10, 10, 10);
  return d.svg();
})();

// 6. One-foot glide to one-foot stop, backwards (right foot, toe turned out, inside edge).
const oneFootBackward = (() => {
  const d = diagram({
    title: 'One foot glide to one foot stop – backwards',
    desc: 'Skating backwards, glide on the right foot with the left foot lifted, then turn the right toe out and heel in and press the inside edge outwards to scrape to a stop.',
  });
  // Skater faces left (-x) while travelling right (+x); their right side is up the page.
  d.track('M 1.5 5.0 L 9 5.0 C 11 5.0 13 4.8 15.6 4.6', 'R', { arrow: false, edge: 'IN', edgeAt: [13.4, 6.2] });
  skid(d, 13.6, 4.75, 16.4, 4.6, 0.65);
  d.skate(4.4, 5.0, 180, 'R');
  d.skate(4.6, 6.5, 180, 'L', { lifted: true });
  d.step(4.4, 3.6, 1);
  d.skate(10.6, 5.0, -155, 'R');
  d.skate(10.4, 6.5, 180, 'L', { lifted: true });
  d.step(10.6, 3.6, 2);
  d.skate(16.4, 4.6, -125, 'R');
  d.skate(16.0, 6.3, 180, 'L', { lifted: true });
  d.spray(17.0, 4.1, -35, { n: 5, len: 1.0, spread: 60 });
  d.step(16.4, 2.6, 3);
  d.text(11, 8.6, 'skating backwards: toes point the other way to travel');
  d.travel(3, 10, 10, 10);
  return d.svg();
})();

export default [
  {
    id: 'stops-one-foot-stop-in-front',
    group: GROUP,
    title: 'One foot stop in front',
    svg: oneFootFront,
    card: {
      trains: 'A controlled first stop, and the feel of scraping ice with an inside edge, which every harder stop builds on.',
      steps: [
        'Glide forward on both feet, knees bent, feet about hip-width apart.',
        'Turn your right toe in and heel out, and slide that foot a little in front of you.',
        'Press down onto the inside edge so it scrapes the ice and sprays a little snow.',
        'Keep the left foot gliding straight and sink your knees until you stop, then repeat with the left foot.',
      ],
      mistake: 'Leaning forward over the toes, so the scraping foot catches and tips you instead of slowing you.',
      where: 'Public session, quiet lane, low speed',
      check: 'I read this as a one-foot snowplow stop: one blade turned toe-in and pushed out in front on its inside edge while the other foot glides. If you meant a different stop with one foot placed in front of the other (for example a front-foot hockey stop), the diagram is wrong.',
    },
  },
  {
    id: 'stops-outside-edge-t-stop',
    group: GROUP,
    title: 'Outside edge T-stop',
    svg: tStop,
    card: {
      trains: 'Slowing down while staying square to the play, and control of the outside edge of the trailing foot.',
      steps: [
        'Glide forward on your right foot with the left foot lifted.',
        'Bring the left foot behind your right heel at a right angle, making a T, toe pointing out.',
        'Lower it and drag it on its outside edge, pressing a little harder as you go.',
        'Keep your shoulders and hips facing forward and your knees bent until you stop. Repeat with the other foot behind.',
      ],
      mistake: 'Twisting the hips round towards the back foot, which turns you sideways instead of stopping you.',
      where: 'Public session, quiet lane, low speed',
      check: 'I read the back foot as dragging on its outside edge, as in the usual learn-to-skate T-stop, with the instep of the back foot just behind the front heel. Some coaches also teach an inside-edge drag behind the body; if that is what you meant, the edge tag and step 3 need changing.',
    },
  },
  {
    id: 'stops-hockey-stop-parallel',
    group: GROUP,
    title: 'Two foot hockey stop – parallel',
    svg: parallelStop,
    card: {
      trains: 'The quick, full stop players use to change direction, stay with a check, or arrive at the puck under control.',
      steps: [
        'Glide forward on both feet with your knees bent.',
        'Turn your hips and both blades together across the line of travel, keeping the blades parallel.',
        'Sink your knees and lean back against the slide: front foot on its inside edge, back foot on its outside edge, until you stop. Practise turning both ways.',
      ],
      mistake: 'Turning only the shoulders or only one foot, so the blades end up at different angles and you skid round instead of stopping.',
      where: 'Only on an empty patch of a quiet public session',
      check: 'I could not be sure how you tell "parallel" from "side by side". I drew parallel as the standard stop with both blades turned together, parallel and about hip-width apart, hips square to the stop. I drew side by side as the same stop on a wider base, feet well apart and level, each blade making its own skid. If "side by side" means something else, such as two skaters stopping next to each other, or "parallel" means blades parallel as opposed to the back foot angled, tell me and I will redraw.',
    },
  },
  {
    id: 'stops-hockey-stop-side-by-side',
    group: GROUP,
    title: 'Two foot hockey stop – side by side',
    svg: sideBySideStop,
    card: {
      trains: 'A balanced, stable stop with weight on both feet, which helps you stay on your feet when stopping hard near other players.',
      steps: [
        'Glide forward on both feet with your knees bent.',
        'Turn both blades across the line of travel together, with your feet wider than for the parallel stop and level with each other.',
        'Share your weight on both blades, inside edge on the front foot and outside edge on the back foot, and sink your knees until you stop. Practise turning both ways.',
      ],
      mistake: 'Putting nearly all the weight on the front foot, so the back foot chatters or lifts.',
      where: 'Only on an empty patch of a quiet public session',
      check: 'See the note on the parallel stop: I drew "side by side" as a wider base with the feet level, which is my reading, not a term I could confirm. The two diagrams differ only in how far apart the feet are.',
    },
  },
  {
    id: 'stops-one-foot-glide-stop-forwards',
    group: GROUP,
    title: 'One foot glide to one foot stop – forwards',
    svg: oneFootForward,
    card: {
      trains: 'Balance and edge control to stop on one foot, so you can stop and push off again in one movement.',
      steps: [
        'Glide forward on your right foot with the left foot lifted beside it.',
        'Turn your hips and the right blade across the line of travel.',
        'Sink the knee and press the inside edge until you stop, keeping the left foot off the ice. Repeat on the left foot.',
      ],
      mistake: 'Putting the lifted foot down to save your balance, which turns it back into a two-foot stop.',
      where: 'Only on an empty patch of a quiet public session',
      check: 'I drew the stop on the inside edge of the gliding foot (turning towards the lifted foot), which is the usual first version. It can also be done on the outside edge, turning the other way; if you meant that, the turn and the edge tag change.',
    },
  },
  {
    id: 'stops-one-foot-glide-stop-backwards',
    group: GROUP,
    title: 'One foot glide to one foot stop – backwards',
    svg: oneFootBackward,
    card: {
      trains: 'Stopping when skating backwards, which defencemen and anyone covering an attacker need before they can push forward again.',
      steps: [
        'Skate backwards and glide on your right foot with the left foot lifted.',
        'Turn the right toe out and the heel in.',
        'Bend the knee and press the blade outwards on its inside edge so it scrapes the ice until you stop. Repeat on the left foot.',
      ],
      mistake: 'Leaning back over the heels, so the blade slides out from under you.',
      where: 'Only on an empty patch of a quiet public session',
      check: 'I read this as a one-foot backward snowplow stop: toe turned out, heel pushed out on the inside edge. It could instead mean turning the blade fully sideways from a backward glide, which is a harder stop; I am not sure which you meant.',
    },
  },
];
