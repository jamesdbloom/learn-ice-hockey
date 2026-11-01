// Off-ice stick-handling additions to the skating-drill kit (draw.mjs), for "Practising on
// Your Own" section 4. Built from the off-ice pilot the owner approved on 1 Nov 2026, with
// the owner's style rulings that day:
//   - shoes are drawn as shoe outlines (left blue, right orange, as the skating kit's feet);
//   - the handled object is a DARK PUCK;
//   - markers are WEIGHTED PUCKS in the kit's cone colour, which is not the right-shoe orange;
//   - the floor is the SAME light-blue panel as the ice drills (no floor recolour);
//   - the stick is blade and shaft only, no hands.
// Every drawing is seen from ABOVE with the player at the bottom facing up the page, so the
// player's left is the reader's left, and clockwise is clockwise as the reader sees it.
// Units are feet in the kit's sense (PX per unit); a drawing unit is not a real foot here.
import { diagram, COL, PX, fs } from './draw.mjs';

export { diagram, COL, PX, fs };

export const MARK = { fill: '#f2b705', stroke: '#9a7000' }; // the kit's cone colour
const f = (n) => Math.round(n * PX * 10) / 10;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const scale = (path) => path.replace(/-?\d*\.?\d+/g, (n) => String(f(Number(n))));

/** Top-down shoe outline, toe pointing along angle (degrees, 0 = +x, -90 = up the page). */
export function shoe(d, x, y, angle, foot, { len = 3.0, wid = 1.15 } = {}) {
  const c = COL[foot], L = len * PX, W = wid * PX, h = W * 0.36; // heel narrower than the toe
  const p = `M ${-L / 2} 0 C ${-L / 2} ${-h} ${-L * 0.25} ${-W * 0.42} ${L * 0.05} ${-W * 0.47} ` +
    `C ${L * 0.38} ${-W * 0.52} ${L / 2} ${-W * 0.3} ${L / 2} 0 ` +
    `C ${L / 2} ${W * 0.3} ${L * 0.38} ${W * 0.52} ${L * 0.05} ${W * 0.47} ` +
    `C ${-L * 0.25} ${W * 0.42} ${-L / 2} ${h} ${-L / 2} 0 Z`;
  d.raw(`<g transform="translate(${f(x)} ${f(y)}) rotate(${angle})"><path d="${p}" fill="${c}" fill-opacity="0.9" stroke="${c}" stroke-width="2"/></g>`);
}

/** The player: two shoes side by side at (cx, y), toes up the page. */
export function player(d, cx, y, { gap = 1.6, len = 3.0, wid = 1.15, label = '' } = {}) {
  shoe(d, cx - gap, y, -90, 'L', { len, wid });
  shoe(d, cx + gap, y, -90, 'R', { len, wid });
  if (label) d.text(cx, y + 0.25, label, { size: 0.44, weight: 600, color: COL.ink });
}

/** The handled puck. ghost = where the puck goes next (dashed outline). */
export function puck(d, x, y, { r = 0.42, ghost = false } = {}) {
  if (ghost) {
    d.raw(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="#fff" fill-opacity="0.6" stroke="${COL.ink}" stroke-width="2" stroke-dasharray="3 2.5"/>`);
  } else {
    d.raw(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${COL.ink}"/>` +
      `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r * 0.68)}" fill="none" stroke="#fff" stroke-opacity="0.35" stroke-width="1.5"/>`);
  }
}

/** A weighted puck used as a marker (top-down disc, the kit's cone colour). */
export function marker(d, x, y, { r = 0.58 } = {}) {
  d.raw(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${MARK.fill}" stroke="${MARK.stroke}" stroke-width="2.5"/>` +
    `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r * 0.6)}" fill="none" stroke="${MARK.stroke}" stroke-opacity="0.55" stroke-width="1.5"/>`);
}

/** Stick blade centred at (x,y) along angle; the shaft runs from the heel end to (hx,hy). The heel is
 *  whichever end of the blade is nearer (hx,hy), as on a real stick. Returns { heel, toe }. */
export function blade(d, x, y, angle, hx, hy, { len = 2.3 } = {}) {
  const a = (angle * Math.PI) / 180, ux = Math.cos(a), uy = Math.sin(a);
  let heel = [x - (ux * len) / 2, y - (uy * len) / 2], toe = [x + (ux * len) / 2, y + (uy * len) / 2];
  if (Math.hypot(toe[0] - hx, toe[1] - hy) < Math.hypot(heel[0] - hx, heel[1] - hy)) [heel, toe] = [toe, heel];
  d.raw(`<line x1="${f(heel[0])}" y1="${f(heel[1])}" x2="${f(hx)}" y2="${f(hy)}" stroke="${COL.muted}" stroke-width="5" stroke-linecap="round" stroke-opacity="0.5"/>` +
    `<line x1="${f(heel[0])}" y1="${f(heel[1])}" x2="${f(toe[0])}" y2="${f(toe[1])}" stroke="${COL.ink}" stroke-width="7" stroke-linecap="round"/>`);
  return { heel, toe };
}

/** The puck's path: an SVG path in drawing units. both = arrowheads at both ends. */
export function path(d, p, { both = false, arrow = true, width = 3, color = COL.ink } = {}) {
  d.raw(`<path d="${scale(p)}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"` +
    `${both ? ' marker-start="url(#ah-ink)"' : ''}${arrow ? ' marker-end="url(#ah-ink)"' : ''}/>`);
}

/** Dangle: the puck worked quickly side to side, drawn as a short double-headed arrow through it. */
export function dangle(d, x, y, { w = 2.8, angle = 0 } = {}) {
  const a = (angle * Math.PI) / 180, dx = (Math.cos(a) * w) / 2, dy = (Math.sin(a) * w) / 2;
  d.raw(`<line x1="${f(x - dx)}" y1="${f(y - dy)}" x2="${f(x + dx)}" y2="${f(y + dy)}" stroke="${COL.ink}" stroke-width="2.4" marker-start="url(#ah-ink)" marker-end="url(#ah-ink)"/>`);
}

/** A stop bar: a short thick bar across the puck's line, where it stops dead. angle = the line's direction. */
export function stopBar(d, x, y, angle, { len = 1.1 } = {}) {
  const a = ((angle + 90) * Math.PI) / 180, dx = (Math.cos(a) * len) / 2, dy = (Math.sin(a) * len) / 2;
  d.raw(`<line x1="${f(x - dx)}" y1="${f(y - dy)}" x2="${f(x + dx)}" y2="${f(y + dy)}" stroke="${COL.ink}" stroke-width="6" stroke-linecap="round"/>`);
}

/** A thin divider between panels. */
export function divider(d, x1, y1, x2, y2) {
  d.raw(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${COL.rim}" stroke-width="3"/>`);
}

/**
 * A figure of 8 (lemniscate of Gerono) centred at (cx, cy), lobes A from the centre, height B.
 * It is drawn in ONE direction of travel: clockwise round the RIGHT lobe (vertical: the FAR lobe),
 * which makes the other lobe anticlockwise, as any 8 does. Arrowheads at the tips of both lobes.
 * Returns pt(t) so a puck can be put on it.
 */
export function figure8(d, cx, cy, A, B, { vertical = false } = {}) {
  const raw = (t) => [A * Math.sin(t), -(B / 2) * Math.sin(2 * t)];
  // Vertical: rotate the picture a quarter turn so the right lobe becomes the far one. A rotation
  // keeps clockwise clockwise: (x, y) -> (y, -x) on a y-down screen.
  const pt = (t) => { const [x, y] = raw(t); return vertical ? [cx + y, cy - x] : [cx + x, cy + y]; };
  const N = 120;
  let p = '';
  for (let i = 0; i <= N; i++) {
    const [x, y] = pt((i / N) * 2 * Math.PI);
    p += `${i ? 'L' : 'M'} ${x.toFixed(3)} ${y.toFixed(3)} `;
  }
  path(d, p + 'Z', { arrow: false });
  for (const t of [Math.PI / 2 + 0.12, (3 * Math.PI) / 2 + 0.12, Math.PI / 4, (5 * Math.PI) / 4]) {
    const a = pt(t - 0.1), b = pt(t);
    path(d, `M ${a[0].toFixed(3)} ${a[1].toFixed(3)} L ${b[0].toFixed(3)} ${b[1].toFixed(3)}`, { width: 3 });
  }
  return pt;
}

// ---------------------------------------------------------------- legend
// Legend glyphs (x = left edge, y = centre line), in drawing units.
export const key = {
  shoe: (foot) => [0.8, (x, y) => `<rect x="${f(x)}" y="${f(y - 0.16)}" width="${f(0.8)}" height="${f(0.32)}" rx="5" fill="${COL[foot]}" stroke="${COL[foot]}" stroke-width="2"/>`, foot === 'L' ? 'left shoe' : 'right shoe'],
  puck: () => [0.6, (x, y) => `<circle cx="${f(x + 0.3)}" cy="${f(y)}" r="${f(0.26)}" fill="${COL.ink}"/>`, 'puck'],
  ghost: () => [0.6, (x, y) => `<circle cx="${f(x + 0.3)}" cy="${f(y)}" r="${f(0.25)}" fill="#fff" stroke="${COL.ink}" stroke-width="2" stroke-dasharray="3 2.5"/>`, 'puck, later'],
  marker: () => [0.7, (x, y) => `<circle cx="${f(x + 0.35)}" cy="${f(y)}" r="${f(0.3)}" fill="${MARK.fill}" stroke="${MARK.stroke}" stroke-width="2.5"/>`, 'weighted puck (marker)'],
  path: () => [1.1, (x, y) => `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + 1.1)}" y2="${f(y)}" stroke="${COL.ink}" stroke-width="3"/>`, 'puck path'],
  dangle: () => [1.1, (x, y) => `<line x1="${f(x + 0.15)}" y1="${f(y)}" x2="${f(x + 0.95)}" y2="${f(y)}" stroke="${COL.ink}" stroke-width="2.4" marker-start="url(#ah-ink)" marker-end="url(#ah-ink)"/>`, 'dangle'],
  walk: () => [1.1, (x, y) => `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + 1.1)}" y2="${f(y)}" stroke="${COL.travel}" stroke-width="8" stroke-opacity="0.45"/>`, 'you walk'],
  stop: () => [0.5, (x, y) => `<line x1="${f(x + 0.25)}" y1="${f(y - 0.3)}" x2="${f(x + 0.25)}" y2="${f(y + 0.3)}" stroke="${COL.ink}" stroke-width="6" stroke-linecap="round"/>`, 'stop dead'],
};

/**
 * Finish the drawing: replace the kit's skate legend with these keys ([glyphWidth, glyph, label]),
 * wrapping onto a second row (and growing the canvas) when they do not fit one.
 */
export function finish(d, keys) {
  let svg = d.svg();
  const i = svg.lastIndexOf('<g>');
  const size = fs(0.42), gap = 0.22, tw = (s) => s.length * size * 0.46, minBetween = 0.7, pad = 0.6;
  const width = ([gw, , s]) => gw + gap + tw(s);
  const rows = [[]];
  let used = 0;
  for (const k of keys) {
    const need = width(k) + (rows.at(-1).length ? minBetween : 0);
    if (rows.at(-1).length && used + need > d.w - 2 * pad) { rows.push([]); used = 0; }
    used += width(k) + (rows.at(-1).length ? minBetween : 0);
    rows.at(-1).push(k);
  }
  const rowH = 0.95;
  let g = '';
  rows.forEach((row, ri) => {
    const y = d.h + 0.75 + ri * rowH;
    const tot = row.reduce((a, k) => a + width(k), 0);
    const between = rows.length === 1 && row.length > 1
      ? Math.max(minBetween, (d.w - 2 * pad - tot) / (row.length - 1)) : minBetween;
    let x = pad;
    for (const [gw, glyph, s] of row) {
      g += glyph(x, y) + `<text x="${f(x + gw + gap)}" y="${f(y + size * 0.34)}" font-size="${f(size)}" fill="${COL.muted}">${esc(s)}</text>`;
      x += gw + gap + tw(s) + between;
    }
  });
  svg = svg.slice(0, i) + `<g>${g}</g></svg>`;
  const H = (d.h + 1.4 + (rows.length - 1) * rowH) * PX;
  svg = svg.replace(/viewBox="0 0 ([\d.]+) [\d.]+" width="([\d.]+)" height="[\d.]+"/, `viewBox="0 0 $1 ${H}" width="$2" height="${H}"`);
  return svg;
}
