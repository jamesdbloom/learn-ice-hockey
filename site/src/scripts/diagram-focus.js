/* Diagram focus — a full-sheet diagram that scrolls inside its box opens on the play,
 * not on its left edge.
 *
 * THE DEFECT (W633 A). Below 60rem global.css holds a full-sheet SVG at 640px inside a
 * column of ~371px at a 400px viewport, and the box scrolls — by design, see the notes
 * on `figure.diagram--full .diagram-scroll` there. But a scroll box opens at
 * scrollLeft 0, so the reader saw the defending end and the left 58% of the sheet:
 * "ahea…" and "…tlet" cut in half on "Behind, level and ahead", "pressure" off-screen
 * on "Three neutral zone lanes", and on the two right-end diagrams ("Small-area 3-on-3
 * in one zone", "Draw with the goalie pulled") NONE of the play was on screen at all.
 *
 * WHAT THIS DOES. For each such box that actually overflows, it picks the scroll offset
 * that shows the MOST LABELS WHOLE — every <text> the play draws: player letters, the
 * goaltender's G, and the annotations ("puck carrier", "pressure") — and among offsets
 * that tie, the one whose middle is nearest the middle of the SKATERS' labels (every
 * text except a bare "G"). Offset 0 is always a candidate, so a box can never open
 * showing fewer whole labels than it did before this file existed; a breakout drawn in
 * the left end stays at 0 exactly as before.
 *
 * ⚠️ IT USED TO CENTRE ON THE PLAY'S BOUNDING BOX, AND THAT MADE ~15 DIAGRAMS WORSE.
 * Measured by a site review over all 92 overflowing boxes at 400 px: 16 diagrams draw a
 * goaltender at BOTH ends (x ±85) and long route arrows stretch the box the same way,
 * so the "action" spanned the sheet and the script centred on the red line — taking
 * "Clearing at five on six" from 6 whole labels to 2 and pushing D1 off-screen on
 * "Beating a neutral-zone 1-3-1". The fix is not a better guess at the action; it is
 * to optimise what the reader actually sees, with offset 0 as the floor.
 * ⚠️ Routes and shaded zones are deliberately NOT in the objective: an arrow may run
 * past the edge; a label cut in half is the defect.
 *
 * WHERE THE LABELS ARE, and the one structural fact it relies on.
 * scripts/lib/rink.mjs `rinkSvg` is the only producer of these SVGs, and it emits the
 * painted rink as ONE `<g clip-path="url(#ice-…)">` direct child, with the play drawn
 * after it. Only text AFTER that group is counted, so the rink's own paint is never
 * mistaken for play. An SVG without that group — `notation-key`, a legend, not a rink —
 * is left alone at its left edge, which is where a key is read from. If rink.mjs ever
 * stops emitting the group, every diagram falls back to doing nothing.
 *
 * WHAT IT MUST NOT DO, and how each is held:
 *   - Touch a box that does not overflow. Above 60rem the sheet fits the column (the
 *     `min(640px, 100%)` floor), so on a desktop this measures, finds nothing to scroll,
 *     and writes nothing: no layout shift is possible because no scroll offset or style
 *     is written. Half sheets carry no `data-scroll-region` and are never selected.
 *   - Animate. It writes `scrollLeft` with `behavior: 'instant'`, so neither a
 *     `scroll-behavior` in CSS nor a missing `prefers-reduced-motion` check can turn it
 *     into a smooth scroll. Reduced motion needs no special case because there is no
 *     motion.
 *   - Fight the reader. Once the reader has scrolled a box, it is never moved again.
 *     Until then it is re-placed whenever the box changes width — a phone rotated, the
 *     column narrowing — because the old offset was chosen for the old width.
 *     ⚠️ A WIDTH CHANGE ITSELF FIRES `scroll`: when the box widens the browser CLAMPS
 *     scrollLeft to the new, smaller range, and the first version of this file read
 *     that clamp as the reader scrolling — so 400 → 844 → 400 px (rotate and back)
 *     ended every box at 0. A scroll only counts as the reader's when the box is
 *     still the width this file last placed it at.
 *   - Change the scrollbar cue. Nothing here touches style; the persistent scrollbar in
 *     global.css now simply shows the thumb mid-track, which is the honest picture:
 *     there is more of the sheet on BOTH sides.
 *
 * ⚠️ A FILE, loaded with `<script src defer>`, NOT inline: the production CSP is
 * `script-src 'self'`. The source lives here and is served at /diagram-focus.js by
 * src/pages/diagram-focus.js.ts; src/plugins/rehype-corpus.mjs adds the tag only to
 * pages that have a full-sheet diagram.
 */
(function () {
  const boxes = document.querySelectorAll('figure.diagram--full .diagram-scroll');
  if (!boxes.length) return;

  /**
   * Every label and every player glyph the play draws, as {a, b} in the box's scroll
   * coordinates, or null when the SVG has no rink group (not a rink diagram — leave it
   * alone). A glyph is a small circle, polygon or path drawn directly after the rink:
   * the player circles and defender triangles (and the puck), never a route, which is
   * far longer than GLYPH_MAX.
   */
  const GLYPH_MAX = 30; // px; a player glyph is ~19 px across at 640 px wide
  const itemsOf = (box, svg) => {
    const b = box.getBoundingClientRect();
    const origin = b.left + box.clientLeft - box.scrollLeft;
    let after = false;
    const labels = [];
    const glyphs = [];
    for (const node of svg.children) {
      if (node.localName === 'g' && node.hasAttribute('clip-path')) { after = true; continue; }
      if (!after) continue;
      if (/^(circle|polygon|path)$/.test(node.localName)) {
        const r = node.getBoundingClientRect();
        if (r.width && r.width <= GLYPH_MAX && r.height <= GLYPH_MAX) {
          glyphs.push({ a: r.left - origin, b: r.right - origin });
        }
        continue;
      }
      const texts = node.localName === 'text' ? [node] : node.querySelectorAll('text');
      for (const t of texts) {
        const r = t.getBoundingClientRect();
        if (!r.width) continue;
        labels.push({ a: r.left - origin, b: r.right - origin, goalie: t.textContent.trim() === 'G' });
      }
    }
    return after ? { labels, glyphs } : null;
  };

  /**
   * The offset showing the most whole LABELS; then, among those, the most whole player
   * GLYPHS; then the one nearest the skaters' middle. Labels come first and offset 0 is
   * always a candidate, so no box opens with fewer whole labels than at 0.
   * ⚠️ The glyph tier exists because the label count alone tied on "Beating a
   * neutral-zone 1-3-1", and the slide toward the middle stopped with D1's triangle —
   * the puck carrier — half off the left edge: its letter was inside the box, its
   * shape was not.
   */
  const choose = ({ labels, glyphs }, cw, range) => {
    if (!labels.length && !glyphs.length) return 0;
    const count = (list, s) => {
      let n = 0;
      for (const l of list) if (l.a >= s - 0.5 && l.b <= s + cw + 0.5) n += 1;
      return n;
    };
    // Lexicographic: one whole label outweighs every glyph on the sheet.
    const score = (s) => count(labels, s) * 1000 + count(glyphs, s);
    const skaters = labels.filter((l) => !l.goalie);
    const pool = skaters.length ? skaters : (labels.length ? labels : glyphs);
    const mid = (Math.min(...pool.map((l) => l.a)) + Math.max(...pool.map((l) => l.b))) / 2;
    const ideal = Math.min(range, Math.max(0, Math.round(mid - cw / 2)));
    // The counts only change where an item's edge meets a box edge, so those offsets,
    // plus 0, the far end and the ideal, are the only candidates worth testing.
    const cands = new Set([0, range, ideal]);
    for (const l of [...labels, ...glyphs]) {
      for (const s of [Math.ceil(l.a - 0.5), Math.floor(l.b + 0.5 - cw)]) {
        if (s >= 0 && s <= range) cands.add(s);
      }
    }
    let best = 0;
    let bestN = score(0);
    for (const s of cands) {
      const n = score(s);
      if (n > bestN) { best = s; bestN = n; continue; }
      if (n < bestN) continue;
      if (Math.abs(s - ideal) < Math.abs(best - ideal)) best = s;
    }
    // Slide from the chosen candidate toward the ideal while no label or glyph is lost.
    const step = Math.sign(ideal - best);
    while (step && best !== ideal && score(best + step) >= bestN) best += step;
    return best;
  };

  const state = new WeakMap(); // box -> { wrote, width, reader }

  const write = (box, left) => {
    try {
      box.scrollTo({ left, behavior: 'instant' });
    } catch {
      // A browser that predates 'instant' in the ScrollBehavior enum throws on it.
      box.scrollLeft = left;
    }
  };

  const place = (box) => {
    let s = state.get(box);
    if (!s) { s = {}; state.set(box, s); }
    if (s.reader || s.skip) return;
    const cw = box.clientWidth;
    const range = box.scrollWidth - cw;
    if (range <= 1) { s.width = null; return; } // fits: write nothing
    if (s.width === cw && Math.abs(box.scrollLeft - s.wrote) <= 1) return; // already placed
    const svg = box.querySelector('svg');
    const items = svg && itemsOf(box, svg);
    if (!items) { s.skip = true; return; }
    const left = choose(items, cw, range);
    s.width = cw;
    s.wrote = left;
    if (Math.abs(box.scrollLeft - left) > 1) write(box, left);
  };

  for (const box of boxes) {
    box.addEventListener('scroll', () => {
      const s = state.get(box);
      if (!s || s.width == null) return;
      // A width change since the last placement means this is the browser clamping
      // scrollLeft to the new range, not the reader. It is re-placed on the next frame.
      if (box.clientWidth !== s.width) return;
      if (Math.abs(box.scrollLeft - s.wrote) > 1) s.reader = true;
    }, { passive: true });
  }

  let queued = false;
  const placeAll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      for (const box of boxes) place(box);
    });
  };

  placeAll();
  // A deferred script can run before stylesheets apply; measured against an unstyled
  // box there is no overflow and nothing is written, so measure again at `load`.
  window.addEventListener('load', placeAll, { once: true });
  if (typeof ResizeObserver === 'function') {
    const observer = new ResizeObserver(placeAll);
    for (const box of boxes) observer.observe(box);
  } else {
    window.addEventListener('resize', placeAll);
  }
})();
