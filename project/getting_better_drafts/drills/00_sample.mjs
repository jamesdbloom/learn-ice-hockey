// SAMPLE drill module: the shape every site/src/drills/*.mjs file follows (template only; build.mjs and preview.mjs do not read it).
// Export an array of drills. Each drill: { id, group, title, svg, card }.
import { diagram } from '../../../site/src/drills/lib/draw.mjs';

const insideEdgeForward = (() => {
  const d = diagram({
    title: 'Inside edge forward, one foot',
    desc: 'Push off the left foot, then glide on the inside edge of the right skate in an arc curving left, free foot lifted; bend to touch the ice with the left hand. Repeat on the other foot.',
  });
  // Push: left skate angled out, short push track behind.
  d.skate(3, 7.6, -25, 'L', { label: 'push' });
  d.track('M 3.4 7.9 L 2 9.2', 'L');
  d.step(1.4, 6.4, 1);
  // Glide: right foot on its inside edge, arcing left (up the page).
  d.track('M 4.4 7.2 C 9 7.2 14 6.4 18 2.6', 'R', { edge: 'IN', edgeAt: [11.5, 7.6] });
  d.skate(7.6, 7.15, -3, 'R');
  d.skate(7.9, 6.0, -3, 'L', { lifted: true });
  d.step(7.6, 4.8, 2);
  d.text(14.8, 8.6, 'touch the ice with your hand');
  d.skate(15.8, 4.6, -38, 'R');
  d.step(17.4, 5.7, 3);
  d.travel(4, 10, 11, 10);
  return d.svg();
})();

export default [
  {
    id: 'sample-inside-edge-forward',
    group: 'Sample',
    title: 'Inside edge forward (strong push, touch the ice)',
    svg: insideEdgeForward,
    card: {
      trains: 'Balance and grip on the inside edge — the edge every crossover and turn pushes from.',
      steps: [
        'Push hard off one foot.',
        'Glide on the other foot\'s inside edge: knee bent over the toe, the blade leaning in, so you curve towards the side of your free foot.',
        'Reach down and touch the ice with your hand on the inside of the curve. Hold the edge until you slow, then switch feet.',
      ],
      mistake: 'Standing tall on a flat blade: the curve straightens and you lose the edge.',
      where: 'Public session at low speed, in a quiet lane.',
      check: '', // anything the owner should confirm about how the drill was read
    },
  },
];
