/**
 * Render the rink as SVG, from the coordinate table in src/data/rink.json.
 *
 * The point of generating rather than tracing a picture: **the viewBox is in rink
 * feet**. `x="69" y="22"` in the output is literally the end-zone faceoff dot. So a
 * diagram source never contains a pixel coordinate, positions cannot drift from the
 * dimensions the corpus owns, and scripts/check_geometry.py can assert both against
 * rink_map_and_glossary.md.
 *
 * Rink coordinates: origin at centre ice, +x toward the attacking end, +y toward the
 * top of the drawing. SVG's y grows downward, so `py()` flips it — that is the only
 * place the two coordinate systems meet.
 */

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const RINK = JSON.parse(
  readFileSync(join(HERE, '..', '..', 'src', 'data', 'rink.json'), 'utf8')
);

/** Rink y -> SVG y. The single point of contact between the two systems. */
const py = (y) => -y;

const PALETTE = {
  ice: '#ffffff',
  boards: '#1b1c1e',
  red: '#c8102e',
  blue: '#0f5a8f',
  creaseFill: '#cfe4f2',
  trapezoid: '#c8102e',
  label: '#5b5f66',
  home: '#0f5a8f',
  away: '#c8102e',
  puck: '#1b1c1e',
};

/** Resolve a named position, optionally mirrored. `half-wall:right`, `corner:left:far`. */
export function resolve(name) {
  const [base, side, end] = String(name).split(':');
  const p = RINK.positions[base];
  if (!p) throw new Error(`unknown position: ${base}`);
  const sy = side === 'left' ? -1 : 1;
  const sx = end === 'far' ? -1 : 1;
  return { x: p.x * sx, y: (p.sided ? p.y * sy : p.y) };
}

function faceoffCircle(cx, cy, r, hashLen, hashSep) {
  const half = hashSep / 2;
  const parts = [
    `<circle cx="${cx}" cy="${py(cy)}" r="${r}" fill="none" stroke="${PALETTE.red}" stroke-width="0.35"/>`,
    `<circle cx="${cx}" cy="${py(cy)}" r="1" fill="${PALETTE.red}"/>`,
  ];
  // Four hash marks, two above and two below, outside the circle.
  for (const sy of [-1, 1]) {
    for (const sx of [-1, 1]) {
      const x = cx + sx * half;
      const y0 = cy + sy * r;
      parts.push(
        `<line x1="${x}" y1="${py(y0)}" x2="${x}" y2="${py(y0 + sy * hashLen)}" ` +
          `stroke="${PALETTE.red}" stroke-width="0.3"/>`
      );
    }
  }
  return parts.join('\n    ');
}

function endZone(sx) {
  const { lines: L, goal: G, trapezoid: T, faceoff: F } = RINK;
  const gx = L.goal_line_x * sx;
  const endX = (RINK.sheet.length / 2) * sx;

  // Crease: 8 ft wide, 6 ft deep. The lines run 1 ft in from the goal line and then
  // an arc of 6 ft radius closes them. Drawn *into* the zone — the first version
  // bulged toward the end boards, which is behind the net.
  const ix = -sx; // inward: away from the end boards
  const half = G.crease_width / 2;
  const straight = 1;
  const crease =
    `<path d="M ${gx} ${py(half)} L ${gx + straight * ix} ${py(half)} ` +
    `A ${G.crease_arc_radius} ${G.crease_arc_radius} 0 0 ${sx > 0 ? 0 : 1} ` +
    `${gx + straight * ix} ${py(-half)} L ${gx} ${py(-half)} Z" ` +
    `fill="${PALETTE.creaseFill}" stroke="${PALETTE.red}" stroke-width="0.3"/>`;

  // Trapezoid: Rule 1.8 — 8 ft from each post at the goal line, 11 ft at the boards.
  const a = T.width_at_goal_line / 2;
  const b = T.width_at_end_boards / 2;
  const trap =
    `<path d="M ${gx} ${py(a)} L ${endX} ${py(b)} M ${gx} ${py(-a)} L ${endX} ${py(-b)}" ` +
    `fill="none" stroke="${PALETTE.trapezoid}" stroke-width="0.3" stroke-dasharray="1.5 1"/>`;

  const goal =
    `<rect x="${sx > 0 ? gx : gx - 3.33}" y="${py(G.post_y)}" width="3.33" height="${G.width}" ` +
    `fill="none" stroke="${PALETTE.red}" stroke-width="0.35"/>`;

  const circles = [F.dot_y, -F.dot_y]
    .map((cy) => faceoffCircle(F.end_zone_dot_x * sx, cy, F.circle_radius, F.hash_length, F.hash_separation))
    .join('\n    ');

  return [
    `<line x1="${gx}" y1="${py(RINK.sheet.width / 2)}" x2="${gx}" y2="${py(-RINK.sheet.width / 2)}" stroke="${PALETTE.red}" stroke-width="0.35"/>`,
    trap, crease, goal, circles,
  ].join('\n    ');
}

/**
 * @param {{half?: boolean, labels?: boolean, width?: number}} opts
 *   half   — attacking half only, centre line to end boards
 *   labels — overlay the named-position vocabulary
 */
export function rinkSvg(opts = {}) {
  const { half = false, labels = false, width = 900 } = opts;
  const { sheet: S, lines: L, faceoff: F } = RINK;
  const vb = half
    ? `-2 ${-S.width / 2 - 2} ${S.length / 2 + 4} ${S.width + 4}`
    : `${-S.length / 2 - 2} ${-S.width / 2 - 2} ${S.length + 4} ${S.width + 4}`;
  const height = Math.round((width * (S.width + 4)) / (half ? S.length / 2 + 4 : S.length + 4));

  const boards =
    `<rect x="${-S.length / 2}" y="${py(S.width / 2)}" width="${S.length}" height="${S.width}" ` +
    `rx="${S.corner_radius}" fill="${PALETTE.ice}" stroke="${PALETTE.boards}" stroke-width="0.6"/>`;

  const blueLines = [1, -1]
    .map(
      (sx) =>
        `<line x1="${L.blue_line_x * sx}" y1="${py(S.width / 2)}" x2="${L.blue_line_x * sx}" y2="${py(-S.width / 2)}" stroke="${PALETTE.blue}" stroke-width="1"/>`
    )
    .join('\n    ');

  const centreLine = `<line x1="0" y1="${py(S.width / 2)}" x2="0" y2="${py(-S.width / 2)}" stroke="${PALETTE.red}" stroke-width="1"/>`;
  const centreCircle =
    `<circle cx="0" cy="0" r="${F.circle_radius}" fill="none" stroke="${PALETTE.blue}" stroke-width="0.35"/>` +
    `<circle cx="0" cy="0" r="1" fill="${PALETTE.blue}"/>`;

  const neutralDots = [1, -1]
    .flatMap((sx) => [F.dot_y, -F.dot_y].map((cy) =>
      `<circle cx="${F.neutral_dot_x * sx}" cy="${py(cy)}" r="1" fill="${PALETTE.red}"/>`))
    .join('\n    ');

  let overlay = '';
  if (labels) {
    overlay = Object.entries(RINK.positions)
      .filter(([k]) => !k.startsWith('$'))
      .flatMap(([name, p]) => {
        const sides = p.sided ? [1, -1] : [0];
        return sides.map((s) => {
          const x = p.x, y = p.sided ? p.y * s : p.y;
          if (half && x < -2) return '';
          const tag = p.sided ? `${name}:${s > 0 ? 'right' : 'left'}` : name;
          return (
            `<circle cx="${x}" cy="${py(y)}" r="0.9" fill="none" stroke="${PALETTE.label}" stroke-width="0.25"/>` +
            `<text x="${x}" y="${py(y) - 1.8}" font-size="2.4" text-anchor="middle" fill="${PALETTE.label}">${tag}</text>`
          );
        });
      })
      .join('\n    ');
  }

  // Everything inside the ice is clipped to the boards, so a goal line drawn the
  // full width of the sheet stops where the corner curves in rather than running
  // out over the dasher. Computing each line's extent by hand would put the corner
  // radius in two places; this keeps it in one.
  const clip =
    `<clipPath id="ice"><rect x="${-S.length / 2}" y="${py(S.width / 2)}" ` +
    `width="${S.length}" height="${S.width}" rx="${S.corner_radius}"/></clipPath>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${width}" height="${height}"
     font-family="-apple-system, Helvetica Neue, Arial, sans-serif" role="img">
    <defs>${clip}</defs>
    ${boards}
    <g clip-path="url(#ice)">
    ${centreLine}
    ${blueLines}
    ${centreCircle}
    ${neutralDots}
    ${endZone(1)}
    ${endZone(-1)}
    </g>
    ${overlay}
</svg>`;
}

/**
 * Drill notation — the convention coaching material shares.
 *
 * A caveat worth keeping: this is the **common coaching convention**, not a formally
 * published international standard. USA Hockey, Hockey Canada and IIHF coaching
 * material all use something very close to it, and it varies at the edges. Nothing
 * here has been verified against a governing body's published symbol key, so the
 * legend below is the definition for this corpus and diagrams are checked against
 * the legend rather than against anyone's memory.
 *
 *   skate      solid line, arrowhead
 *   carry      solid line with cross-ticks — skating with the puck
 *   pass       dashed line, arrowhead
 *   shot       solid line ending in a bar
 *   backward   line with open loops
 *   stop       short bar across the end of the route
 *   screen     a bar in front of a player
 *
 * Own team is a filled circle, opposition an X — distinguishable without colour,
 * because the site renders in light and dark and some readers cannot separate hues.
 */

const NOTATION = {
  skate:    { dash: null,      end: 'arrow' },
  carry:    { dash: null,      end: 'arrow', ticks: true },
  pass:     { dash: '2.4 1.8', end: 'arrow' },
  shot:     { dash: null,      end: 'bar'   },
  backward: { dash: '0.1 2.6', end: 'arrow', round: true },
};

/** Cross-ticks along a route, marking "with the puck". */
function ticks(f, t, n = 3) {
  const out = [];
  const dx = t.x - f.x, dy = t.y - f.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len, ny = dx / len;
  for (let i = 1; i <= n; i++) {
    const k = i / (n + 1);
    const cx = f.x + dx * k, cy = f.y + dy * k;
    out.push(
      `<line x1="${(cx + nx * 1.1).toFixed(2)}" y1="${py(cy + ny * 1.1).toFixed(2)}" ` +
      `x2="${(cx - nx * 1.1).toFixed(2)}" y2="${py(cy - ny * 1.1).toFixed(2)}" ` +
      `stroke="${PALETTE.boards}" stroke-width="0.45"/>`
    );
  }
  return out.join('');
}

/**
 * Draw a play: players at named positions, routes between them in drill notation.
 *
 * A diagram source names positions in the corpus's own vocabulary —
 * `half-wall:right`, `behind-net` — never pixels and never feet. That is what makes
 * it writable by hand, reviewable as text, and unable to drift from the table.
 */
export function playSvg(spec, opts = {}) {
  const base = rinkSvg({ half: opts.half ?? true, width: opts.width ?? 820, legend: opts.legend });
  const P = PALETTE;

  const defs =
    `<defs>` +
    `<marker id="ah" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">` +
    `<path d="M 0 0 L 10 5 L 0 10 z" fill="${P.boards}"/></marker>` +
    `</defs>`;

  const routes = (spec.routes ?? []).map((r) => {
    const f = resolve(r.from), t = resolve(r.to);
    const n = NOTATION[r.kind] ?? NOTATION.skate;
    const bow = r.bow ?? 0;
    // Perpendicular offset for the control point, so a bowed route curves sensibly.
    const dx = t.x - f.x, dy = t.y - f.y, len = Math.hypot(dx, dy) || 1;
    const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
    const my = (f.y + t.y) / 2 + (dx / len) * bow;
    const d = `M ${f.x} ${py(f.y)} Q ${mx} ${py(my)} ${t.x} ${py(t.y)}`;
    const line =
      `<path d="${d}" fill="none" stroke="${P.boards}" stroke-width="0.7"` +
      (n.dash ? ` stroke-dasharray="${n.dash}"` : '') +
      (n.round ? ' stroke-linecap="round"' : '') +
      (n.end === 'arrow' ? ' marker-end="url(#ah)"' : '') +
      `/>`;
    // A shot ends in a bar across the route rather than an arrowhead.
    const barEnd = n.end === 'bar'
      ? `<line x1="${t.x + (-dy / len) * 2}" y1="${py(t.y + (dx / len) * 2)}" ` +
        `x2="${t.x - (-dy / len) * 2}" y2="${py(t.y - (dx / len) * 2)}" ` +
        `stroke="${P.boards}" stroke-width="0.8"/>`
      : '';
    return line + barEnd + (n.ticks ? ticks(f, t) : '');
  }).join('\n    ');

  const players = (spec.players ?? []).map((pl) => {
    const p = resolve(pl.at);
    const opp = pl.team === 'opp';
    const glyph = opp
      ? `<g stroke="${P.away}" stroke-width="0.9" stroke-linecap="round">` +
        `<line x1="${p.x - 2.1}" y1="${py(p.y) - 2.1}" x2="${p.x + 2.1}" y2="${py(p.y) + 2.1}"/>` +
        `<line x1="${p.x - 2.1}" y1="${py(p.y) + 2.1}" x2="${p.x + 2.1}" y2="${py(p.y) - 2.1}"/></g>` +
        `<text x="${p.x}" y="${py(p.y) - 3.4}" font-size="2.7" font-weight="700" text-anchor="middle" fill="${P.away}">${pl.id}</text>`
      : `<circle cx="${p.x}" cy="${py(p.y)}" r="2.9" fill="${P.home}"/>` +
        `<text x="${p.x}" y="${py(p.y) + 1.05}" font-size="3" font-weight="700" text-anchor="middle" fill="#fff">${pl.id}</text>`;
    const label = pl.label
      ? `<text x="${p.x}" y="${py(p.y) + (pl.below ? 6.6 : -4.6)}" font-size="2.5" text-anchor="middle" fill="${P.label}">${pl.label}</text>`
      : '';
    return glyph + label;
  }).join('\n    ');

  const puck = spec.puck
    ? (() => { const p = resolve(spec.puck); return `<circle cx="${p.x}" cy="${py(p.y)}" r="1.1" fill="${PALETTE.puck}"/>`; })()
    : '';

  return base.replace('</svg>', `  ${defs}\n    ${routes}\n    ${players}\n    ${puck}\n</svg>`);
}

/** The legend, drawn beneath the ice so a diagram is self-describing. */
export function legendSvg(width = 820) {
  const rows = [
    ['skate', 'Skating'], ['carry', 'Skating with the puck'], ['pass', 'Pass'],
    ['shot', 'Shot'], ['backward', 'Skating backward'],
  ];
  const w = 200, h = 26;
  const items = rows.map((r, i) => {
    const [kind, text] = r;
    const n = NOTATION[kind];
    const x = 6 + (i % 3) * w, y = 14 + Math.floor(i / 3) * h;
    const line =
      `<path d="M ${x} ${y} L ${x + 46} ${y}" fill="none" stroke="${PALETTE.boards}" stroke-width="2"` +
      (n.dash ? ` stroke-dasharray="${n.dash.split(' ').map(v=>v*2.2).join(' ')}"` : '') +
      (n.end === 'arrow' ? ' marker-end="url(#ahL)"' : '') + '/>';
    const bar = n.end === 'bar' ? `<line x1="${x+46}" y1="${y-5}" x2="${x+46}" y2="${y+5}" stroke="${PALETTE.boards}" stroke-width="2.4"/>` : '';
    const tick = n.ticks ? [16,26,36].map(o=>`<line x1="${x+o}" y1="${y-3.5}" x2="${x+o}" y2="${y+3.5}" stroke="${PALETTE.boards}" stroke-width="1.6"/>`).join('') : '';
    return line + bar + tick + `<text x="${x + 54}" y="${y + 4}" font-size="12" fill="#1b1c1e">${text}</text>`;
  }).join('\n    ');
  const glyphs =
    `<circle cx="${6 + 2*w + 8}" cy="40" r="7" fill="${PALETTE.home}"/>` +
    `<text x="${6 + 2*w + 8}" y="44" font-size="8" font-weight="700" text-anchor="middle" fill="#fff">C</text>` +
    `<text x="${6 + 2*w + 22}" y="44" font-size="12" fill="#1b1c1e">Own team</text>` +
    `<g stroke="${PALETTE.away}" stroke-width="2.4" stroke-linecap="round">` +
    `<line x1="${6+2*w+96}" y1="34" x2="${6+2*w+108}" y2="46"/><line x1="${6+2*w+96}" y1="46" x2="${6+2*w+108}" y2="34"/></g>` +
    `<text x="${6 + 2*w + 116}" y="44" font-size="12" fill="#1b1c1e">Opposition</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="60" viewBox="0 0 ${width} 60"
     font-family="-apple-system, Helvetica Neue, Arial, sans-serif">
    <defs><marker id="ahL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${PALETTE.boards}"/></marker></defs>
    ${items}
    ${glyphs}
</svg>`;
}
