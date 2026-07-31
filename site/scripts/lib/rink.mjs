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

/**
 * A short, deterministic id suffix for one diagram's internal references.
 *
 * `clip-path="url(#ice)"` and `marker-end="url(#ah)"` are document-scoped. Two
 * diagrams inlined into the same page — which is the EPUB story, and will be the
 * web story as soon as a document carries more than one — produce duplicate ids,
 * which is invalid XML and resolves every reference to whichever diagram came
 * first. Derived from content rather than a counter so a rebuild of the same
 * diagram produces the same file.
 */
function uid(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36).slice(0, 6);
}

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
  // 'blue-line:far' looks right and is not: with no side to name, 'far' lands in
  // the side slot and the near end comes back with no error. It mirrored a whole
  // full-sheet diagram onto the wrong half and stacked both goaltenders on one
  // crease. Unsided positions must be written 'blue-line::far'.
  if (side && side !== 'left' && side !== 'right') {
    throw new Error(
      `bad position "${name}": "${side}" is not a side. Unsided positions take an ` +
      `empty side slot — write "${base}::${side}", not "${base}:${side}".`);
  }
  if (end && end !== 'far' && end !== 'near') throw new Error(`bad position "${name}": "${end}" is not an end.`);
  // A left/right on an unsided position is redundant but harmless — it is ignored,
  // and several specs use it as a way to reach the far end. Only a *bad token* in
  // the side slot is dangerous, and that is what the check above catches.
  const sy = side === 'left' ? -1 : 1;
  const sx = end === 'far' ? -1 : 1;
  return { x: p.x * sx, y: (p.sided ? p.y * sy : p.y) };
}

/**
 * Resolve a location: either a named position, or a named position with an offset
 * in feet — `{ at: 'behind-net', dx: -4, dy: -6 }`.
 *
 * The offsets exist because a play is not made of vocabulary. A forechecker
 * finishes his route *short of* the puck carrier, not on the carrier's node, and
 * the first version of this file had no way to say that — so an arrow pointed at
 * an opponent's glyph and the picture read as a collision. An offset stays anchored
 * to a named position, so it is still reviewable as text and still cannot drift
 * from the table; it just admits that "six feet up-ice of the half-wall" is a real
 * thing a diagram needs to say. Offsets are in rink feet, +y toward the top.
 */
export function loc(v) {
  if (typeof v === 'string') return resolve(v);
  const p = resolve(v.at);
  return { x: p.x + (v.dx ?? 0), y: p.y + (v.dy ?? 0) };
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
  // Rule 1.7, via the owning document: the side lines run **4 ft 6 in** out from
  // the goal line and are joined by a 6 ft arc struck from the centre of the goal
  // line, giving a crease 8 ft wide and **6 ft deep**. This was 1 ft, which put the
  // apex 2.5 ft out — a crease less than half its real depth, on every diagram, for
  // the whole life of this renderer. Two agents drawing goaltender and screening
  // diagrams found it independently; check_geometry.py could not, because it checks
  // the table and never the drawing.
  const straight = 4.5;
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
 * Place text labels near points without letting them collide.
 *
 * Labels stack into an unreadable pile if each is simply written above its point:
 * seven of the named positions sit on the centre line within 25 ft of each other,
 * and in a play diagram the five players of a forecheck crowd the same corner. So
 * place each greedily — the nearest free offset wins — and draw a leader line
 * whenever a label ended up far enough from its point to be ambiguous.
 *
 * Both the vocabulary overlay and the play diagrams go through here. They had
 * separate placement code for one afternoon, which is how the play diagrams
 * shipped with "takes the passing option" written straight through "first option".
 *
 * @param {Array<{text:string,x:number,y:number,dot?:boolean}>} entries — rink feet
 * @returns {string[]} SVG fragments, one per entry
 */
function placeLabels(entries, opts = {}) {
  const { size = 2.4, dot = 0, half = false, reserve = [] } = opts;
  const CH = size * 0.56;   // approximate character width
  const LH = size * 1.25;   // line height
  const placed = [...reserve];  // {x, y, w, h} in rink feet — `reserve` blocks out
                                // space the caller has already drawn into, e.g. the
                                // player glyphs a label must not sit on top of.

  const collides = (a) =>
    placed.some((b) => Math.abs(a.x - b.x) * 2 < a.w + b.w && Math.abs(a.y - b.y) * 2 < a.h + b.h);

  // Keep labels off the boards — text running over the dasher is unreadable and
  // was the first thing to go wrong on the crowded end of the play diagrams.
  const maxY = RINK.sheet.width / 2 - 1.5;
  const minX = half ? 0 : -RINK.sheet.length / 2 + 1.5;
  const maxX = RINK.sheet.length / 2 - 1.5;
  // The boards are a rounded rectangle, not a rectangle. Testing the straight
  // bounds let labels sit up to five feet outside the dasher in the corners — four
  // of nine breakout diagrams did — because the corner arc cuts in 28 ft before the
  // rectangle's edge does. Test each corner of the label box against the arc.
  const R = RINK.sheet.corner_radius;
  const onIce = (x, y) => {
    if (Math.abs(y) > maxY || x < minX || x > maxX) return false;
    const cx = Math.sign(x) * (RINK.sheet.length / 2 - R);
    const cy = Math.sign(y) * (RINK.sheet.width / 2 - R);
    if (Math.abs(x) <= Math.abs(cx) || Math.abs(y) <= Math.abs(cy)) return true;
    return Math.hypot(x - cx, y - cy) <= R - 1.5;
  };
  const inside = (a) =>
    onIce(a.x - a.w / 2, a.y - a.h / 2) && onIce(a.x + a.w / 2, a.y - a.h / 2) &&
    onIce(a.x - a.w / 2, a.y + a.h / 2) && onIce(a.x + a.w / 2, a.y + a.h / 2);

  const OFFSETS = [
    [0, -4], [0, 4.5], [0, -7.5], [0, 8], [0, -11], [0, 11.5],
    [-9, -4], [9, -4], [-9, 4.5], [9, 4.5], [-13, 0], [13, 0],
    [0, -14.5], [0, 15], [-16, -8], [16, -8], [-16, 8], [16, 8],
  ];

  // A label belongs to the nearest thing to it, whatever the leader line says.
  // "puck carrier" was once placed 7.4 ft from F1 and 20.3 ft from the carrier it
  // named — the leader line disambiguated it only for a reader who traced the
  // leader, and nobody traces the leader. So a placement is only legal if this
  // entry's own anchor is the closest anchor to it.
  const ownsIt = (cand, e) => {
    const mine = Math.hypot(cand.x - e.x, cand.y - e.y);
    return entries.every((o) => o === e || Math.hypot(cand.x - o.x, cand.y - o.y) > mine);
  };

  // Place the crowded centre-line entries first, so they get the near slots.
  const order = [...entries].sort((a, b) => Math.abs(a.y) - Math.abs(b.y) || a.x - b.x);

  return order.map((e) => {
    const w = e.text.length * CH, h = LH;
    let put = null;
    for (const [dx, dy] of OFFSETS) {
      const cand = { x: e.x + dx, y: e.y + dy, w, h };
      if (inside(cand) && !collides(cand) && ownsIt(cand, e)) { put = cand; break; }
    }
    // Fallback: none of the fixed offsets was free. Sweep the ice on a coarse grid
    // and take the nearest free slot. The previous fallback was "18 ft below the
    // point and hope", which on the forecheck diagram dropped F1's label straight
    // onto an opposition player — a placer whose last resort ignores collisions
    // has no last resort.
    //
    // Ownership and the "keep the whole box on the ice" rule can be jointly
    // unsatisfiable: a long label anchored to a player in the corner has its
    // Voronoi cell out past the boards, so every legal box is nearer someone else.
    // Degrade by ratio rather than by giving up — take the slot where the label is
    // most decisively its own anchor's, even if it is not strictly nearest. The
    // previous last resort ignored ownership entirely and wrote F1's label across
    // an opposition winger.
    if (!put) {
      let best = null, bestD = Infinity, fall = null, fallR = -Infinity;
      for (let gx = minX + w / 2; gx <= maxX - w / 2; gx += 2) {
        for (let gy = -maxY + h / 2; gy <= maxY - h / 2; gy += 2) {
          const cand = { x: gx, y: gy, w, h };
          if (collides(cand)) continue;
          const mine = Math.hypot(gx - e.x, gy - e.y) || 0.001;
          const other = Math.min(...entries.filter((o) => o !== e)
            .map((o) => Math.hypot(gx - o.x, gy - o.y)), Infinity);
          if (other > mine) {
            if (mine < bestD) { bestD = mine; best = cand; }
          } else {
            const ratio = other / mine;
            if (ratio > fallR) { fallR = ratio; fall = cand; }
          }
        }
      }
      put = best ?? fall ?? { x: Math.min(Math.max(e.x, minX + w / 2), maxX - w / 2), y: e.y - 18, w, h };
    }
    placed.push(put);
    const moved = Math.hypot(put.x - e.x, put.y - e.y) > 5.5;
    const leader = moved
      ? `<line x1="${e.x}" y1="${py(e.y)}" x2="${put.x}" y2="${py(put.y) + (put.y > e.y ? -1.2 : 1.2)}" ` +
        `stroke="${PALETTE.label}" stroke-width="0.18" stroke-dasharray="0.8 0.8"/>`
      : '';
    const marker = dot ? `<circle cx="${e.x}" cy="${py(e.y)}" r="${dot}" fill="${PALETTE.label}"/>` : '';
    return (
      marker + leader +
      `<text x="${put.x.toFixed(2)}" y="${py(put.y).toFixed(2)}" font-size="${size}" text-anchor="middle" ` +
      `fill="${PALETTE.label}" paint-order="stroke" stroke="#fff" stroke-width="0.9">${e.text}</text>`
    );
  });
}

/**
 * @param {{half?: boolean, labels?: boolean, width?: number}} opts
 *   half   — attacking half only, centre line to end boards
 *   labels — overlay the named-position vocabulary
 */
export function rinkSvg(opts = {}) {
  const { half = false, labels = false, width = 900, ns = 'r' } = opts;
  const { sheet: S, lines: L, faceoff: F } = RINK;
  // A diagram carries a one-line pointer to the notation, not a copy of it.
  //
  // The legend used to be stamped under every diagram. With one diagram that is
  // thorough; with forty it is forty copies of a definition that has already been
  // rewritten once wholesale — every one of them a place the notation can be left
  // stale. The key lives in exactly one document and the diagrams reference it,
  // which is the same ownership rule the corpus already applies to numbers.
  //
  // It is a footer rather than a caption because it must not reach the speech
  // transform: a listener being told "drill notation: see Reading the diagrams"
  // before every diagram learns nothing and loses the thread. Speech gets <title>.
  const foot = opts.footer ? 5 : 0;
  const vb = half
    ? `-2 ${-S.width / 2 - 2} ${S.length / 2 + 4} ${S.width + 4 + foot}`
    : `${-S.length / 2 - 2} ${-S.width / 2 - 2} ${S.length + 4} ${S.width + 4 + foot}`;
  const height = Math.round((width * (S.width + 4 + foot)) / (half ? S.length / 2 + 4 : S.length + 4));
  // The footer sits below the boards, i.e. outside the white ice rect, so on a dark
  // page it painted grey-on-near-black at 2.8:1. It carries its own white strip
  // rather than a theme-aware colour: the rink above it is white in both themes, so
  // matching that is the only treatment that cannot drift when the palette changes.
  const footer = opts.footer
    ? `<rect x="${-S.length / 2}" y="${S.width / 2 + 2.2}" width="${S.length}" height="${foot}" fill="#ffffff"/>` +
      `<text x="${half ? S.length / 2 : S.length / 2}" y="${S.width / 2 + 5.4}" font-size="2.5" ` +
      `text-anchor="end" fill="${PALETTE.label}">${opts.footer}</text>`
    : '';

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
    const entries = [];
    for (const [name, p] of Object.entries(RINK.positions)) {
      if (name.startsWith('$')) continue;
      for (const side of (p.sided ? [1, -1] : [0])) {
        const x = p.x, y = p.sided ? p.y * side : p.y;
        if (half && x < -2) continue;
        entries.push({ text: p.sided ? `${name}:${side > 0 ? 'R' : 'L'}` : name, x, y });
      }
    }
    overlay = placeLabels(entries, { size: 2.4, dot: 0.8, half }).join('\n    ');
  }

  // Everything inside the ice is clipped to the boards, so a goal line drawn the
  // full width of the sheet stops where the corner curves in rather than running
  // out over the dasher. Computing each line's extent by hand would put the corner
  // radius in two places; this keeps it in one.
  const clip =
    `<clipPath id="ice-${ns}"><rect x="${-S.length / 2}" y="${py(S.width / 2)}" ` +
    `width="${S.length}" height="${S.width}" rx="${S.corner_radius}"/></clipPath>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${width}" height="${height}"
     font-family="-apple-system, Helvetica Neue, Arial, sans-serif" role="img">
    <defs>${clip}</defs>
    ${boards}
    <g clip-path="url(#ice-${ns})">
    ${centreLine}
    ${blueLines}
    ${centreCircle}
    ${neutralDots}
    ${endZone(1)}
    ${endZone(-1)}
    </g>
    ${overlay}
    ${footer}
</svg>`;
}

/**
 * Drill notation, from a published symbol key.
 *
 * SOURCES. There are two published keys and **they do not agree**. Both were
 * fetched and read; neither may be quoted from memory.
 *
 * (A) MOST OF THE LINE SYMBOLS COME FROM HERE — "International Drill Symbols", a one-page
 *     handout from Hockey Eastern Ontario's NCCP Development 1 coaching clinic.
 *       https://www.hockeyeasternontario.ca/media/ns2jrj0c/dev1_international_drill_symbols.pdf
 *       sha256 d0cfeca183c37dfcf34708a983bd0cb2b13cacff118656720bc41b817f5e49e7
 *       309,926 bytes, one page, retrieved 2026-07-30.
 *     The rendered page carries no logo, credit or date — but the *file* does:
 *     /Author (Brian Gillam), /CreationDate 2015-05-21, /Creator Microsoft Word
 *     2010. The title is live text typed in Word; the key beneath it is a single
 *     pasted, uncredited, cropped scan. Its origin is not recoverable.
 *
 * (B) THE PLAYER-GLYPH AXIS COMES FROM HERE, and it is the genuine
 *     "International Symbols" — IIHF Coach Development Program,
 *     Level I, Tactical (2002), section 21.1, IIHF-logo'd.
 *       https://www.hockeyeasternontario.ca/media/n4pf15hp/iihf_coachdev_off_tactics.pdf
 *       sha256 9b195d0325f74ccc2601b20ef009c77e44abd19c70dd09980babed21f5edbe01
 *       750,071 bytes, retrieved 2026-07-30.
 *
 * NEITHER KEY IS "THE BASE", and saying so in either direction is false. Five of
 * the eight line symbols are common to both. `stop` takes (A)'s name for a glyph
 * (B) names differently. `pressure` exists only in (A). `crossovers` is this
 * corpus's adaptation of (A)'s glyph. The player axis is (B)'s. An earlier version
 * of this header said (A) was what the file renders, and the reader-facing prose
 * said the base was (B); both were written honestly and both were wrong, which is
 * why the split is now enumerated symbol by symbol rather than summarised.
 *
 * DO NOT CALL THIS CORPUS'S NOTATION "INTERNATIONAL" IN READER-FACING TEXT.
 * A body of that name publishes a key of that name, and this is not it. (A)'s
 * title appears to be one coach's echo of (B)'s section heading, typed over a
 * scan of something else. The phrase "International Drill Symbols" has no
 * independent web footprint.
 *
 * WHERE (A) AND (B) DIVERGE — and the divergences land on the dangerous ones:
 *
 *   circle vs triangle   (B) encodes TEAM: circle offensive, triangle defensive.
 *                        (A) encodes POSITION: circle forward, triangle defender.
 *                        A reader trained on (B) reads every one of this corpus's
 *                        defencemen as "the defending team". This is the single
 *                        largest divergence and it is not cosmetic.
 *   line + two bars      (A) "Stopping".  (B) "SUDDEN STOP".  (B)'s STOP is `//`.
 *   line + one bar       (A) "Checking pressure". (B) HAS NO SUCH SYMBOL — and
 *                        the glyph is the left half of (B)'s SUDDEN STOP.
 *                        (B) gives BLOCKING (SCREENING) = line ending in `(` and
 *                        BODY CHECK = line ending in `)`.
 *   crossovers           (A) "Lateral crossovers", a bare picket of vertical bars.
 *                        (B) "BACKWARD CROSSOVER", a sawtooth zigzag.
 *
 * They agree on: forward skating, backward skating, pivot, skate-and-stickhandle
 * (= "skating with control of the puck"), shoot, pass, pylon = X, and the drop
 * pass. Those are the symbols this file leans on hardest, which is the only reason
 * the two keys can be combined at all without a reader meeting two contradictory
 * meanings for one glyph.
 *
 * CORPUS ADAPTATIONS — things this file draws that NEITHER key sanctions. They
 * are conventions, not transcriptions, and must be labelled as such wherever the
 * notation is explained to a reader:
 *   - fill for team (filled own, open opposition). (A) has no opposition symbol.
 *   - `crossovers` drawn as bars ON a line WITH an arrowhead. (A)'s glyph is a
 *     free-standing picket with no line through it and no arrowhead. A picket
 *     with no direction is useless in a play diagram, so this file adds both —
 *     but that is an invention, and it was previously recorded as a transcription.
 *
 * WHAT STOOD HERE BEFORE WAS WRONG, and wrong in the way this project's whole
 * process exists to catch: it was written from memory, labelled honestly as
 * unverified ("nothing here has been verified against a governing body's published
 * symbol key"), and then used anyway. Three of the five symbols meant something
 * else in the published key, and two of the collisions invert a diagram's meaning:
 *
 *   was: carry = solid line with cross-ticks   key: cross-ticks are LATERAL CROSSOVERS
 *   was: shot  = solid line ending in a bar    key: a bar-ended line is CHECKING PRESSURE
 *   was: backward = dotted line                key: backward skating is a tight wave
 *   was: opposition = X                        key: X is a PYLON
 *
 * A forecheck diagram drawn in the old notation showed a shot where it meant
 * pressure, and marked every opponent as a traffic cone.
 *
 * The key, as published:
 *
 *   (line symbols as (A) draws them; five of the eight are identical in (B))
 *
 *   Coach                              circled C
 *   Goaltender                         G
 *   Forward / Player                   circle, filled or open
 *   Defender / Player                  triangle, filled or open
 *   Position at end of the repetition  same shape, dashed outline
 *   Pylon                              X
 *   Cluster of pucks                   a scatter of dots
 *
 *   Forward skating                    straight line, arrowhead
 *   Backward skating                   tight wave
 *   Lateral crossovers                 a row of short bars across the line
 *   Pivoting                           tight wave ending in a hook, arrowhead reversed
 *   Skating with control of the puck   long, smooth wave, arrowhead
 *   Passing                            dashed line, arrowhead
 *   Shooting                           double line, single arrowhead
 *   Stopping                           straight line ending in two short bars
 *   Drop pass                          wave, a marker, then a straight line and arrowhead
 *   Checking pressure                  straight line ending in one bar
 *
 * TEAMS — **this corpus follows key (B), IIHF 21.1: SHAPE CARRIES TEAM.** A circle
 * is the reader's own team and a triangle the opposition; `playSvg` emits nothing
 * else. Key (A) uses shape for *position* instead, and this header went on
 * specifying (A)'s axis after the code had moved to (B)'s — two contradictory
 * specifications of the notation in one file, with the wrong one at the top. That
 * is exactly how a reader ends up being told to read our defencemen as forwards.
 *
 * Before you edit a spec: `pos` is now **inert** except for `'pylon'`. A player
 * marked `pos: 'D'` renders as a circle if they are on the reader's team and a
 * triangle if they are not. Comments in the diagram modules justifying a `pos: 'D'`
 * as "a triangle, because…" are stale, and acting on one flips that player's team.
 *
 * Implemented below: skate, carry, pass, shot, backward, stop, pressure,
 * crossovers. Pivoting and drop pass are in the key and are **not** implemented;
 * add them from the key, not from memory.
 */

const NOTATION = {
  skate:      { line: 'plain', end: 'arrow' },
  carry:      { line: 'wave',  end: 'arrow', lambda: 9.0, amp: 1.25 },
  pass:       { line: 'plain', end: 'arrow', dash: '2.4 1.8' },
  shot:       { line: 'double', end: 'arrow' },
  backward:   { line: 'wave',  end: 'arrow', lambda: 2.6, amp: 1.0 },
  stop:       { line: 'plain', end: 'bars2' },
  pressure:   { line: 'plain', end: 'bar1' },
  crossovers: { line: 'plain', end: 'arrow', bars: true },
};

/**
 * An arrowhead drawn in rink coordinates, pointing along (ux, uy).
 *
 * Sized to match the `ah` marker so hand-drawn and marker-drawn heads are the same
 * arrow: markerUnits defaults to strokeWidth, so markerWidth 4.5 at stroke 0.7 is
 * 3.15 user units long.
 */
function arrowHead(x, y, ux, uy, L = 3.15, W = 1.5) {
  const bx = x - ux * L, by = y - uy * L;
  return `<path d="M ${x.toFixed(2)} ${py(y).toFixed(2)} ` +
    `L ${(bx - uy * W).toFixed(2)} ${py(by + ux * W).toFixed(2)} ` +
    `L ${(bx + uy * W).toFixed(2)} ${py(by - ux * W).toFixed(2)} Z" fill="${PALETTE.boards}"/>`;
}

/**
 * A quadratic Bézier redrawn as a wave running along it.
 *
 * The key draws "skating with control of the puck" and "backward skating" as waves
 * that differ only in wavelength, so both come from here with different lambda.
 * Amplitude tapers to nothing at each end, so the route starts cleanly on the
 * player and finishes straight enough for the arrowhead to point where it means to.
 */
function wavePath(f, t, bow, lambda, amp) {
  const dx = t.x - f.x, dy = t.y - f.y, len = Math.hypot(dx, dy) || 1;
  const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
  const my = (f.y + t.y) / 2 + (dx / len) * bow;
  const at = (k) => ({
    x: (1 - k) ** 2 * f.x + 2 * (1 - k) * k * mx + k * k * t.x,
    y: (1 - k) ** 2 * f.y + 2 * (1 - k) * k * my + k * k * t.y,
  });
  const N = Math.max(40, Math.round(len * 6));
  const pts = [];
  let prev = at(0), s = 0;
  for (let i = 0; i <= N; i++) {
    const c = at(i / N);
    s += Math.hypot(c.x - prev.x, c.y - prev.y);
    prev = c;
    pts.push({ k: i / N, c, s });
  }
  const total = s || 1;
  const out = pts.map(({ k, c, s: sl }) => {
    const a = at(Math.max(0, k - 0.01)), b = at(Math.min(1, k + 0.01));
    const tl = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const nx = -(b.y - a.y) / tl, ny = (b.x - a.x) / tl;
    // Zero for the last TAIL feet, not merely approaching zero: the arrowhead has
    // to sit on a straight run of line, or it meets the wave at an angle.
    const TAIL = 2.6;
    const taper = Math.max(0, Math.min(1, sl / 1.2, (total - sl - TAIL) / 1.5));
    const off = amp * taper * Math.sin((sl / lambda) * 2 * Math.PI);
    return `${(c.x + nx * off).toFixed(2)} ${py(c.y + ny * off).toFixed(2)}`;
  });
  return 'M ' + out.join(' L ');
}

/**
 * A row of short bars across the line — the key's "lateral crossovers".
 *
 * Spaced by distance rather than by count, so a short crossover run and a long one
 * carry the same pitch; a notation whose pitch varies with route length is not a
 * notation. Bars follow the drawn quadratic, not the chord — on a bowed route the
 * chord version drew them beside the line instead of across it.
 *
 * This renderer was originally "cross-ticks meaning skating with the puck", which
 * is not what the key says a row of bars means. The drawing was fine; the meaning
 * attached to it was invented.
 */
function ticks(f, t, bow = 0) {
  const dx = t.x - f.x, dy = t.y - f.y;
  const len = Math.hypot(dx, dy) || 1;
  const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
  const my = (f.y + t.y) / 2 + (dx / len) * bow;
  // Quadratic Bézier through the same control point playSvg draws with.
  const at = (k) => ({
    x: (1 - k) ** 2 * f.x + 2 * (1 - k) * k * mx + k * k * t.x,
    y: (1 - k) ** 2 * f.y + 2 * (1 - k) * k * my + k * k * t.y,
  });
  const n = Math.max(2, Math.min(7, Math.round(len / 6)));
  const out = [];
  for (let i = 1; i <= n; i++) {
    const k = i / (n + 1);
    const c = at(k), a = at(Math.max(0, k - 0.02)), b = at(Math.min(1, k + 0.02));
    const tx = b.x - a.x, ty = b.y - a.y, tl = Math.hypot(tx, ty) || 1;
    const nx = -ty / tl, ny = tx / tl;
    out.push(
      `<line x1="${(c.x + nx * 1.5).toFixed(2)}" y1="${py(c.y + ny * 1.5).toFixed(2)}" ` +
      `x2="${(c.x - nx * 1.5).toFixed(2)}" y2="${py(c.y - ny * 1.5).toFixed(2)}" ` +
      `stroke="${PALETTE.boards}" stroke-width="0.55"/>`
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
  const ns = uid(spec.id ?? spec.caption ?? JSON.stringify([spec.players, spec.routes]));
  const base = rinkSvg({ half: opts.half ?? true, width: opts.width ?? 820, ns,
                         footer: opts.footer ?? spec.footer });
  const P = PALETTE;

  const defs =
    `<defs>` +
    `<marker id="ah-${ns}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">` +
    `<path d="M 0 0 L 10 5 L 0 10 z" fill="${P.boards}"/></marker>` +
    `</defs>`;

  // Sample points along each route, so labels can be kept off the lines as well as
  // off the players. Without this a label lands on an arrowhead and the reader
  // cannot tell which of two converging arrows the words belong to.
  const routeReserve = [];

  // Shaded regions — "the slot", "the high slot", the trapezoid, a coverage box.
  //
  // A region is the corpus's own vocabulary made visible, and the glossary defines
  // several of them in words that are already geometry ("from the level of the
  // faceoff dots up to the top of the circles"). So a region is a polygon of named
  // positions, exactly like a route, and it is the owning document that decides
  // where its corners are. Drawn beneath everything else, and never with a stroke
  // heavy enough to be mistaken for a painted line on the ice — a reader must not
  // come away thinking the slot is marked out on a real rink. It is not.
  const zones = (spec.zones ?? []).map((z) => {
    const pts = z.points.map(loc).map((q) => `${q.x.toFixed(2)},${py(q.y).toFixed(2)}`).join(' ');
    const label = z.label
      ? (() => {
          const c = z.points.map(loc).reduce((a, q) => ({ x: a.x + q.x / z.points.length, y: a.y + q.y / z.points.length }), { x: 0, y: 0 });
          return `<text x="${c.x.toFixed(2)}" y="${py(c.y).toFixed(2)}" font-size="3.2" ` +
                 `text-anchor="middle" fill="${P.home}" font-weight="700" ` +
                 `paint-order="stroke" stroke="#fff" stroke-width="1.1">${esc(z.label)}</text>`;
        })()
      : '';
    // `danger: true` paints the region as a warning rather than a target. One fill
    // meant "stand here" in one diagram and "never move the puck through here" in
    // another, in the same document, in identical blue — a notation with two
    // opposite meanings is worse than none.
    const fill = z.fill ?? (z.danger ? 'rgba(200,16,46,0.13)' : 'rgba(15,90,143,0.14)');
    const strk = z.stroke ?? (z.danger ? 'rgba(200,16,46,0.5)' : 'rgba(15,90,143,0.45)');
    return `<polygon points="${pts}" fill="${fill}" ` +
           `stroke="${strk}" stroke-width="0.35" ` +
           `stroke-dasharray="1.6 1.2"/>` + label;
  }).join('\n    ');

  const routes = (spec.routes ?? []).map((r, i) => {
    const f = loc(r.from), t = loc(r.to);
    const n = NOTATION[r.kind] ?? NOTATION.skate;
    const bow = r.bow ?? 0;
    // Perpendicular offset for the control point, so a bowed route curves sensibly.
    const dx = t.x - f.x, dy = t.y - f.y, len = Math.hypot(dx, dy) || 1;
    const mx = (f.x + t.x) / 2 + (-dy / len) * bow;
    const my = (f.y + t.y) / 2 + (dx / len) * bow;
    const at = (k) => ({
      x: (1 - k) ** 2 * f.x + 2 * (1 - k) * k * mx + k * k * t.x,
      y: (1 - k) ** 2 * f.y + 2 * (1 - k) * k * my + k * k * t.y,
    });
    for (let s = 0; s <= 1.0001; s += 0.1) {
      const c = at(s);
      routeReserve.push({ x: c.x, y: c.y, w: 5, h: 5 });
    }

    const q = `M ${f.x} ${py(f.y)} Q ${mx} ${py(my)} ${t.x} ${py(t.y)}`;
    const d = n.line === 'wave' ? wavePath(f, t, bow, n.lambda, n.amp) : q;

    // The terminal tangent, so end marks sit square across the route.
    const tanx = t.x - mx, tany = t.y - my, tanl = Math.hypot(tanx, tany) || 1;
    const ux = tanx / tanl, uy = tany / tanl;      // along travel
    const px_ = -uy, py_ = ux;                      // across travel

    let line;
    if (n.line === 'double') {
      // Shooting: two parallel lines converging on one arrowhead. Drawn as two
      // offset quadratics stopped short of the tip, plus a hand-drawn head — a
      // marker on each would give a shot two arrowheads.
      const o = 0.62, back = 2.6;
      const tipx = t.x, tipy = t.y;
      const ex = t.x - ux * back, ey = t.y - uy * back;
      const leg = (s) =>
        `<path d="M ${(f.x + px_ * o * s).toFixed(2)} ${py(f.y + py_ * o * s).toFixed(2)} ` +
        `Q ${(mx + px_ * o * s).toFixed(2)} ${py(my + py_ * o * s).toFixed(2)} ` +
        `${(ex + px_ * o * s).toFixed(2)} ${py(ey + py_ * o * s).toFixed(2)}" ` +
        `fill="none" stroke="${P.boards}" stroke-width="0.55"/>`;
      const head =
        `<path d="M ${tipx.toFixed(2)} ${py(tipy).toFixed(2)} ` +
        `L ${(ex + px_ * 1.9).toFixed(2)} ${py(ey + py_ * 1.9).toFixed(2)} ` +
        `L ${(ex - px_ * 1.9).toFixed(2)} ${py(ey - py_ * 1.9).toFixed(2)} Z" fill="${P.boards}"/>`;
      line = leg(1) + leg(-1) + head;
    } else {
      // A wave is emitted as a polyline, and `marker-end` orients itself off the
      // final segment — which is a fraction of a foot long and still carries the
      // residual slope of the wave. The head came out visibly askew from the line
      // it terminates. Draw it by hand along the *base curve's* terminal tangent,
      // which is the direction the route actually finishes in.
      const useMarker = n.end === 'arrow' && n.line !== 'wave';
      line =
        `<path d="${d}" fill="none" stroke="${P.boards}" stroke-width="0.7"` +
        (n.dash ? ` stroke-dasharray="${n.dash}"` : '') +
        (useMarker ? ` marker-end="url(#ah-${ns})"` : '') +
        `/>`;
      if (n.end === 'arrow' && n.line === 'wave') line += arrowHead(t.x, t.y, ux, uy);
    }

    // Stopping ends in two short bars, checking pressure in one. Both are the
    // key's own end marks; neither is an arrowhead.
    const bar = (back) =>
      `<line x1="${(t.x - ux * back + px_ * 2).toFixed(2)}" y1="${py(t.y - uy * back + py_ * 2).toFixed(2)}" ` +
      `x2="${(t.x - ux * back - px_ * 2).toFixed(2)}" y2="${py(t.y - uy * back - py_ * 2).toFixed(2)}" ` +
      `stroke="${P.boards}" stroke-width="0.8"/>`;
    const barEnd =
      n.end === 'bars2' ? bar(0) + bar(1.4) :
      n.end === 'bar1'  ? bar(0) : '';
    // A numbered badge at the route's start. Four simultaneous arrows read as one
    // instant, and a reader cannot tell whether a pass beat a forechecker or the
    // forechecker beat the pass. Ordering the routes is the only way a still
    // picture can say which came first.
    const badge = spec.numbered
      ? (() => {
          // Far enough along the route to clear the player glyph sitting on its
          // start — at k=0.14 every badge but the pass's was drawn underneath a
          // player and invisible. ~9 ft along, or the midpoint on a short route.
          const k = Math.min(0.5, 9 / len);
          const c = at(k);
          // Nudged to the left of travel rather than sitting on the line. Two routes
          // that converge on the same point — F2 arriving in the lane, and the pass
          // crossing it — otherwise stack their badges on top of each other, which
          // is exactly where the ordering matters most.
          const a = at(Math.max(0, k - 0.05)), b = at(Math.min(1, k + 0.05));
          const tl = Math.hypot(b.x - a.x, b.y - a.y) || 1;
          const bx = c.x - ((b.y - a.y) / tl) * 3.4;
          const by = c.y + ((b.x - a.x) / tl) * 3.4;
          // A rounded tag, not a ring. An open ring is what the key's opposition
          // forward looks like, and in greyscale the badges read as two more
          // opposing players standing in the slot.
          return `<rect x="${(bx - 2.1).toFixed(2)}" y="${(py(by) - 1.9).toFixed(2)}" ` +
            `width="4.2" height="3.8" rx="1" fill="#fff" stroke="${P.boards}" stroke-width="0.4"/>` +
            `<text x="${bx.toFixed(2)}" y="${(py(by) + 0.85).toFixed(2)}" font-size="2.6" ` +
            `font-weight="700" text-anchor="middle" fill="${P.boards}">${i + 1}</text>`;
        })()
      : '';
    return line + barEnd + (n.bars ? ticks(f, t, bow) : '') + badge;
  }).join('\n    ');

  // Player glyphs. Shape carries TEAM — see the block below and the file header., G a
  // goaltender, X a **pylon** — which is why opposition players are no longer drawn
  // as X. Fill carries the team (filled own, open opposition); that part is this
  // corpus's convention on top of the key, since the key has no opposition symbol.
  // Shape and fill together mean the picture never depends on hue.
  // Player glyphs — IIHF 21.1 "International Symbols", section 21.1 of the IIHF
  // Coach Development Program Level I manual.
  //
  // **Shape carries TEAM, not position.** That is the IIHF key's axis and it is the
  // single largest divergence from the Hockey Eastern Ontario handout this project
  // started from, which used shape for position. Getting this wrong means a reader
  // trained on IIHF material reads every defenceman in the corpus as "the defending
  // team" — an inversion, in diagrams whose whole subject is who is where.
  //
  //   circle    the reader's own team
  //   triangle  the opposition
  //   G         goaltender (the key gives G as a standalone symbol)
  //   X         pylon — never a player. It means a cone, and nothing else.
  //
  // WHAT THIS DEPARTS FROM, AND WHY. The IIHF key puts a NUMERAL inside the glyph
  // to name the position: 1 goaltender, 2 right defense, 3 left defense, 4 right
  // wing, 5 centre, 6 left wing. This corpus cannot use them. Its most emphatic
  // section states that F1, F2 and F3 are roles set by order of arrival and *not*
  // people — "F1 is not 'the centre'" — and it spends fifty lines killing exactly
  // the inference an IIHF numeral would reinstate. Writing 5 where the section says
  // F1 would author a position assignment the prose refuses to make, which the
  // corpus forbids outright. So the glyph carries the section's own label instead.
  // That is a departure, it is deliberate, and it is documented for the reader in
  // "Reading the diagrams" rather than left for them to trip over.
  //
  // The IIHF key maps offensive/defensive; this corpus maps own/opposition, because
  // every diagram here is drawn from the reader's team's point of view and a reader
  // learning to play needs to know which glyph is them. Same axis, stated frame.
  const glyphs = (spec.players ?? []).map((pl) => {
    const p = loc(pl.at);
    const opp = pl.team === 'opp';
    const col = opp ? P.away : P.home;
    const r = 2.9;
    let shape, dy = 1.05, fs = 3;
    if (pl.pos === 'pylon') {
      shape = `<g stroke="${col}" stroke-width="0.9" stroke-linecap="round">` +
              `<line x1="${p.x - 2}" y1="${py(p.y) - 2}" x2="${p.x + 2}" y2="${py(p.y) + 2}"/>` +
              `<line x1="${p.x - 2}" y1="${py(p.y) + 2}" x2="${p.x + 2}" y2="${py(p.y) - 2}"/></g>`;
    } else if (opp) {
      const R = 3.6, hh = R * 1.5, half = R * 0.866;   // centroid on the position
      shape = `<path d="M ${p.x} ${(py(p.y) - R).toFixed(2)} ` +
              `L ${(p.x + half).toFixed(2)} ${(py(p.y) + hh - R).toFixed(2)} ` +
              `L ${(p.x - half).toFixed(2)} ${(py(p.y) + hh - R).toFixed(2)} Z" ` +
              `fill="#fff" stroke="${col}" stroke-width="0.8"/>`;
      dy = 1.0; fs = 2.6;
    } else {
      shape = `<circle cx="${p.x}" cy="${py(p.y)}" r="${r}" fill="${col}" ` +
              `stroke="${col}" stroke-width="0.75"/>`;
    }
    const id = pl.pos === 'pylon' ? '' :
      `<text x="${p.x}" y="${(py(p.y) + dy).toFixed(2)}" font-size="${fs}" ` +
      `font-weight="700" text-anchor="middle" fill="${opp ? col : '#fff'}">${esc(pl.id ?? '')}</text>`;
    return shape + id;
  }).join('\n    ');

  // Player labels go through the same placer as the vocabulary overlay, seeded
  // with the glyphs themselves so a label never lands on a player.
  const labelled = (spec.players ?? []).filter((pl) => pl.label);
  const players = glyphs + '\n    ' + placeLabels(
    labelled.map((pl) => { const p = loc(pl.at); return { text: pl.label, x: p.x, y: p.y }; }),
    { size: 2.8, half: opts.half ?? true,
      reserve: [
        ...(spec.players ?? []).map((pl) => { const p = loc(pl.at); return { x: p.x, y: p.y, w: 7, h: 8 }; }),
        ...routeReserve,
      ] }
  ).join('\n    ');

  const puck = spec.puck
    ? (() => { const p = loc(spec.puck); return `<circle cx="${p.x}" cy="${py(p.y)}" r="1.1" fill="${PALETTE.puck}"/>`; })()
    : '';

  // The accessible name, and the only thing a listener gets.
  //
  // md_to_speech.py substitutes an image for its alt text verbatim and inline, so
  // `spec.caption` is spoken as a bare sentence in the middle of the prose. A
  // caption that names the system and stops ("A 2-1-2 forecheck") leaves the
  // listener with nothing while the sighted reader gets the whole picture. It has
  // to teach on its own, and it has to carry the section's hedges — a diagram is
  // the most absolute-looking thing on a page.
  //
  // Emitted as <title> (the accessible name) plus <desc> (the long description).
  // role="img" without either is worse than no role at all: it tells a screen
  // reader to announce an image and then gives it nothing to announce.
  const a11y =
    (spec.caption ? `<title>${esc(spec.caption)}</title>` : '') +
    (spec.describe ? `<desc>${esc(spec.describe)}</desc>` : '');

  return base
    .replace('<defs>', `${a11y}<defs>`)
    .replace('</svg>', `  ${defs}\n    ${zones}\n    ${routes}\n    ${players}\n    ${puck}\n</svg>`);
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * The legend, drawn beneath the ice so a diagram is self-describing.
 *
 * The legend *is* the definition of the notation — this corpus checks diagrams
 * against it rather than against anyone's memory — so it is the one part of the
 * picture that must never be the part that fails to render. Two consequences:
 *
 *  - Its viewBox is fixed and the `width` only scales it, so the text keeps its
 *    proportion of the picture at any width. The first version hard-coded a
 *    12 px font inside a 900-wide viewBox, which came out at 5 px on a phone.
 *  - It paints its own white background. Without one it inherits the page, and on
 *    a dark theme the near-black strokes and labels disappear — taking the
 *    definition of the notation with them.
 */
export function legendSvg(width = 820, opts = {}) {
  // Wording is the key's own, verbatim, so a reader who has seen the published
  // sheet reads the same words here. "Skating with control of the puck" is longer
  // than "Carry" and stays anyway — renaming a symbol is how a shared notation
  // quietly becomes a private one.
  // Every symbol the corpus actually draws must appear here. `stop` and
  // `crossovers` were used in diagrams while the legend omitted them, which left a
  // reader meeting a two-barred line with no way to know what it meant — and the
  // legend IS the definition, so an omission is not a gap, it is an undefined symbol.
  const rows = opts.rows ?? [
    ['skate', 'Forward skating'],
    ['carry', 'Skating with control of the puck'],
    ['pass', 'Passing'],
    ['shot', 'Shooting'],
    ['backward', 'Backward skating'],
    ['crossovers', 'Lateral crossovers'],
    ['stop', 'Stopping'],
    ['pressure', 'Checking pressure'],
  ];
  const COL = 300, h = 26;
  const VB = 640;                    // fixed layout width; `width` scales the whole
  const ROWS = Math.ceil(rows.length / 2);
  const H = ROWS * h + 34;

  // Miniature of a route, drawn by the same code paths as the diagram so the legend
  // cannot drift from what it claims to define. A legend maintained separately from
  // its renderer is a second place for the notation to be wrong.
  const sample = (kind, x, y) => {
    const n = NOTATION[kind];
    const L = 52, S = 5.2;           // length in px, and px-per-foot for the wave
    const f = { x: 0, y: 0 }, t = { x: L / S, y: 0 };
    let g;
    if (n.line === 'wave') {
      // Same generator as the diagram, scaled to px — a legend drawn by different
      // code from the thing it defines is a second place for the notation to be
      // wrong. wavePath emits feet with y already flipped, so only scaling is left.
      const pts = wavePath(f, t, 0, n.lambda, n.amp)
        .replace(/[ML]/g, ' ').trim().split(/\s+/).map(Number);
      const path = [];
      for (let i = 0; i < pts.length; i += 2) {
        path.push(`${(pts[i] * S).toFixed(1)} ${(pts[i + 1] * S).toFixed(1)}`);
      }
      // Head drawn by hand pointing along +x, for the same reason as in the
      // diagram: a marker on a polyline orients off its last tiny segment.
      g = `<path d="M ${path.join(' L ')}" fill="none" stroke="${PALETTE.boards}" stroke-width="1.9"/>` +
          `<path d="M ${L} 0 L ${L - 10} -5 L ${L - 10} 5 Z" fill="${PALETTE.boards}"/>`;
    } else if (n.line === 'double') {
      g = `<path d="M 0 -2.6 L ${L - 11} -2.6" fill="none" stroke="${PALETTE.boards}" stroke-width="1.6"/>` +
          `<path d="M 0 2.6 L ${L - 11} 2.6" fill="none" stroke="${PALETTE.boards}" stroke-width="1.6"/>` +
          `<path d="M ${L} 0 L ${L - 11} -7 L ${L - 11} 7 Z" fill="${PALETTE.boards}"/>`;
    } else {
      g = `<path d="M 0 0 L ${L} 0" fill="none" stroke="${PALETTE.boards}" stroke-width="1.9"` +
          (n.dash ? ` stroke-dasharray="${n.dash.split(' ').map((v) => v * 2.2).join(' ')}"` : '') +
          (n.end === 'arrow' ? ' marker-end="url(#ahL)"' : '') + '/>';
      if (n.end === 'bar1') g += `<line x1="${L}" y1="-6" x2="${L}" y2="6" stroke="${PALETTE.boards}" stroke-width="2.2"/>`;
      if (n.end === 'bars2') g += `<line x1="${L}" y1="-6" x2="${L}" y2="6" stroke="${PALETTE.boards}" stroke-width="2.2"/>` +
                                  `<line x1="${L - 5}" y1="-6" x2="${L - 5}" y2="6" stroke="${PALETTE.boards}" stroke-width="2.2"/>`;
      if (n.bars) g += [12, 22, 32, 42].map((o) =>
        `<line x1="${o}" y1="-4" x2="${o}" y2="4" stroke="${PALETTE.boards}" stroke-width="1.6"/>`).join('');
    }
    return `<g transform="translate(${x} ${y})">${g}</g>`;
  };

  const items = rows.map(([kind, text], i) => {
    const x = 8 + (i % 2) * COL, y = 16 + Math.floor(i / 2) * h;
    return sample(kind, x, y) +
      `<text x="${x + 62}" y="${y + 4}" font-size="12" fill="#1b1c1e">${text}</text>`;
  }).join('\n    ');

  // Player glyphs. **Shape carries TEAM** — circle own, triangle opposition — which
  // is IIHF 21.1's axis and what playSvg emits. This row previously read "Own team
  // — forward, defender" against a filled circle and a filled triangle, i.e. the
  // superseded shape-for-position axis. It was defining combinations the renderer
  // cannot produce, and telling the reader to read our defencemen as forwards and
  // their forwards as defencemen, in the one place they go to find out.
  //
  // The pylon is here because the prose promises "an X is a pylon and never a
  // player", and a promise about a symbol the key never shows is not a definition.
  const gy = ROWS * h + 20;
  const tri = (cx, cy, fill, stroke) =>
    `<path d="M ${cx} ${cy - 7} L ${cx + 6.5} ${cy + 4.5} L ${cx - 6.5} ${cy + 4.5} Z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
  const glyphs =
    `<circle cx="14" cy="${gy}" r="6.5" fill="${PALETTE.home}" stroke="${PALETTE.home}" stroke-width="1.5"/>` +
    `<text x="26" y="${gy + 4}" font-size="12" fill="#1b1c1e">Your own team</text>` +
    tri(8 + COL - 20, gy, '#fff', PALETTE.away) +
    `<text x="${8 + COL - 8}" y="${gy + 4}" font-size="12" fill="#1b1c1e">The opposition</text>` +
    `<g stroke="#1b1c1e" stroke-width="2" stroke-linecap="round">` +
    `<line x1="${8 + 2 * COL - 130}" y1="${gy - 5}" x2="${8 + 2 * COL - 120}" y2="${gy + 5}"/>` +
    `<line x1="${8 + 2 * COL - 130}" y1="${gy + 5}" x2="${8 + 2 * COL - 120}" y2="${gy - 5}"/></g>` +
    `<text x="${8 + 2 * COL - 112}" y="${gy + 4}" font-size="12" fill="#1b1c1e">A pylon — never a player</text>`;

  const height = Math.round((width * H) / VB);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${VB} ${H}"
     font-family="-apple-system, Helvetica Neue, Arial, sans-serif" role="img">
    <title>Legend: the drill notation used by the diagrams in this corpus, after IIHF Coach Development Program Level I section 21.1</title>
    <rect x="0" y="0" width="${VB}" height="${H}" fill="#ffffff"/>
    <defs><marker id="ahL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${PALETTE.boards}"/></marker></defs>
    ${items}
    ${glyphs}
</svg>`;
}
