// Shared drawing kit for the Getting Better skating-drill diagrams (DRAFT, 22 Oct 2026).
//
// Every drill diagram is a TOP-DOWN view of a small patch of ice. Units are feet;
// the default patch is 24 ft wide by 14 ft high, drawn at 30 px per foot.
//
// Conventions (the legend draws them, so every diagram reads the same):
//   - LEFT foot is blue, RIGHT foot is orange.
//   - A solid skate = foot on the ice. A hollow (outlined) skate = foot lifted.
//   - A solid line = the path a blade carves on the ice, arrow at the end.
//   - A dotted line = in the air (a jump), arrow at landing.
//   - A grey wide arrow = direction of travel.
//   - Circled numbers = the order of the steps.
//   - Short hatch marks beside a blade = snow spray (a stop).
//   - Edge labels sit beside a track: "IN" = inside edge, "OUT" = outside edge.
//
// Angles are in degrees, 0 = pointing right (+x), 90 = pointing down the page (+y).
// A skate's angle is the direction its TOE points.

export const PX = 30;
export const COL = {
  L: '#1f6fd1',
  R: '#e0731b',
  ice: '#f4f9fd',
  rim: '#c9dbe8',
  travel: '#9aa7b2',
  ink: '#22303c',
  muted: '#5b6b78',
  spray: '#7fa6c4',
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const r = (n) => Math.round(n * PX * 10) / 10;

/** Start a diagram. Returns a builder; call .svg() at the end. */
export function diagram({ title, w = 22, h = 11, legend = true, desc = '' } = {}) {
  const parts = [];
  const legendH = legend ? 1.4 : 0;
  const W = w, H = h + legendH;
  const add = (s) => { parts.push(s); return api; };

  const api = {
    w, h,
    /** A blade glyph. foot 'L'|'R'; lifted draws it hollow. */
    skate(x, y, angle, foot, { lifted = false, label = '', len = 1.6 } = {}) {
      const c = COL[foot];
      const L = len * PX, Wd = 0.4 * PX;
      const fill = lifted ? 'none' : c;
      const dash = lifted ? ' stroke-dasharray="3 2"' : '';
      add(`<g transform="translate(${r(x)} ${r(y)}) rotate(${angle})">` +
        `<rect x="${-L / 2}" y="${-Wd / 2}" width="${L}" height="${Wd}" rx="${Wd / 2}" fill="${fill}" stroke="${c}" stroke-width="2"${dash}/>` +
        `<path d="M ${L / 2 - 2} ${-Wd / 2 - 3} L ${L / 2 + 7} 0 L ${L / 2 - 2} ${Wd / 2 + 3} Z" fill="${c}"/>` +
        `</g>`);
      if (label) api.text(x, y - 0.85, label, { size: 0.5, color: c, weight: 600 });
      return api;
    },
    /** A carved path. d is an SVG path in FEET (M x y C ... ). */
    track(d, foot, { air = false, arrow = true, width = 3, edge = '', edgeAt = null } = {}) {
      const c = foot === 'travel' ? COL.travel : COL[foot] || COL.ink;
      const scaled = d.replace(/-?\d*\.?\d+/g, (n) => String(r(Number(n))));
      const dash = air ? ' stroke-dasharray="2 7" stroke-linecap="round"' : '';
      const mk = arrow ? ` marker-end="url(#ah-${foot})"` : '';
      add(`<path d="${scaled}" fill="none" stroke="${c}" stroke-width="${width}"${dash}${mk}/>`);
      if (edge && edgeAt) api.tag(edgeAt[0], edgeAt[1], edge, foot);
      return api;
    },
    /** Grey wide arrow for direction of travel, from (x1,y1) to (x2,y2). */
    travel(x1, y1, x2, y2) {
      add(`<line x1="${r(x1)}" y1="${r(y1)}" x2="${r(x2)}" y2="${r(y2)}" stroke="${COL.travel}" stroke-width="9" stroke-opacity="0.45" marker-end="url(#ah-travel)"/>`);
      return api;
    },
    /** Small rounded tag, e.g. IN / OUT, in the foot colour. */
    tag(x, y, text, foot = 'ink') {
      const c = COL[foot] || COL.ink;
      const tw = 0.3 * text.length + 0.4;
      add(`<rect x="${r(x - tw / 2)}" y="${r(y - 0.33)}" width="${r(tw)}" height="${r(0.66)}" rx="6" fill="#fff" stroke="${c}" stroke-width="1.5"/>` +
        `<text x="${r(x)}" y="${r(y + 0.16)}" text-anchor="middle" font-size="${r(0.44)}" font-weight="700" fill="${c}">${esc(text)}</text>`);
      return api;
    },
    /** Circled step number. */
    step(x, y, n) {
      add(`<circle cx="${r(x)}" cy="${r(y)}" r="${r(0.4)}" fill="${COL.ink}"/>` +
        `<text x="${r(x)}" y="${r(y + 0.13)}" text-anchor="middle" font-size="${r(0.46)}" font-weight="700" fill="#fff">${n}</text>`);
      return api;
    },
    /** Plain text in feet coordinates. */
    text(x, y, s, { size = 0.48, color = COL.muted, anchor = 'middle', weight = 400 } = {}) {
      add(`<text x="${r(x)}" y="${r(y)}" text-anchor="${anchor}" font-size="${r(size)}" font-weight="${weight}" fill="${color}">${esc(s)}</text>`);
      return api;
    },
    /** Snow spray: short hatch marks fanning out on one side of a point, toward angle. */
    spray(x, y, angle, { n = 5, len = 0.9, spread = 50 } = {}) {
      for (let i = 0; i < n; i++) {
        const a = (angle - spread / 2 + (spread * i) / (n - 1)) * Math.PI / 180;
        const x1 = x + Math.cos(a) * 0.35, y1 = y + Math.sin(a) * 0.35;
        const x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len;
        add(`<line x1="${r(x1)}" y1="${r(y1)}" x2="${r(x2)}" y2="${r(y2)}" stroke="${COL.spray}" stroke-width="2" stroke-linecap="round"/>`);
      }
      return api;
    },
    /** A cone or marker on the ice (for slaloms and turns). */
    cone(x, y) {
      add(`<path d="M ${r(x)} ${r(y - 0.3)} L ${r(x + 0.25)} ${r(y + 0.22)} L ${r(x - 0.25)} ${r(y + 0.22)} Z" fill="#f2b705" stroke="#b58500" stroke-width="1"/>`);
      return api;
    },
    /** A painted line on the ice (e.g. a blue line or a reference line), feet coords. */
    iceLine(x1, y1, x2, y2, color = '#c33') {
      add(`<line x1="${r(x1)}" y1="${r(y1)}" x2="${r(x2)}" y2="${r(y2)}" stroke="${color}" stroke-width="4" stroke-opacity="0.5"/>`);
      return api;
    },
    raw(s) { return add(s); },
    svg() {
      const arrows = ['L', 'R', 'ink', 'travel'].map((k) => {
        const c = k === 'travel' ? COL.travel : COL[k] || COL.ink;
        return `<marker id="ah-${k}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="${k === 'travel' ? 3 : 5}" markerHeight="${k === 'travel' ? 3 : 5}" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="${c}"/></marker>`;
      }).join('');
      let leg = '';
      if (legend) {
        const y = h + 0.75;
        const mini = (x, foot, lifted) => {
          const c = COL[foot];
          return `<rect x="${r(x)}" y="${r(y - 0.14)}" width="${r(0.8)}" height="${r(0.28)}" rx="4" fill="${lifted ? 'none' : c}" stroke="${c}" stroke-width="2"${lifted ? ' stroke-dasharray="3 2"' : ''}/>`;
        };
        const t = (x, s) => `<text x="${r(x)}" y="${r(y + 0.14)}" font-size="${r(0.42)}" fill="${COL.muted}">${esc(s)}</text>`;
        leg = `<g>${mini(0.6, 'L')}${t(1.55, 'left foot')}${mini(4.4, 'R')}${t(5.35, 'right foot')}` +
          `${mini(8.6, 'L', true)}${t(9.55, 'lifted')}` +
          `<line x1="${r(11.6)}" y1="${r(y)}" x2="${r(12.7)}" y2="${r(y)}" stroke="${COL.ink}" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/>${t(12.9, 'in the air')}` +
          `<line x1="${r(16)}" y1="${r(y)}" x2="${r(17.1)}" y2="${r(y)}" stroke="${COL.travel}" stroke-width="8" stroke-opacity="0.45"/>${t(17.3, 'travel')}</g>`;
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W * PX} ${H * PX}" width="${W * PX}" height="${H * PX}" role="img" aria-labelledby="t d" font-family="system-ui, -apple-system, Segoe UI, sans-serif">` +
        `<title id="t">${esc(title || '')}</title><desc id="d">${esc(desc)}</desc>` +
        `<defs>${arrows}</defs>` +
        `<rect x="2" y="2" width="${w * PX - 4}" height="${h * PX - 4}" rx="18" fill="${COL.ice}" stroke="${COL.rim}" stroke-width="3"/>` +
        parts.join('') + leg + `</svg>`;
    },
  };
  return api;
}
