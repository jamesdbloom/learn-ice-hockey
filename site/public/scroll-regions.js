/* Scroll regions — a box is focusable and announced as scrollable only while it
 * actually scrolls.
 *
 * ⚠️ A FILE, loaded with a plain `<script src defer>`, NOT an inline script. The
 * production CSP is `script-src 'self'` with no `unsafe-inline`; the header of
 * public/cite-copy.js records what happens when that is forgotten — the script is
 * silently blocked in production and works perfectly locally, because the policy
 * is a CloudFront response header. Same-origin `src` is allowed by that policy.
 *
 * ⚠️ AND THE TAG IS INJECTED BY src/plugins/rehype-corpus.mjs, not by an .astro
 * component like the site's other seven scripts. The two wrappers this measures
 * are created by the markdown plugins, on document pages only, and the plugin is
 * the only thing that knows whether a page has one. See the note there.
 *
 * THE DEFECT. `.table-scroll` has carried `tabindex="0" role="region"
 * aria-label="Table, scrollable horizontally"` on EVERY table since it was
 * written, and `figure.diagram--full .diagram-scroll` was given the same three
 * attributes later for the same reason. Both are applied AT BUILD TIME and
 * nothing re-evaluated them against a viewport — but whether either box scrolls
 * is a question about the viewport, and global.css answers it differently at
 * different widths. Above 60rem `figure.diagram--full .diagram-scroll svg` is
 * floored at `min(640px, 100%)` rather than 640px, which is the rule that stops a
 * full sheet scrolling on a laptop at all: every one of those tab stops is dead
 * on a desktop by construction. Tables are the mirror image — two of them
 * overflow at 1440 and most of the rest only at 375.
 *
 * A `role="region"` with `tabindex="0"` on a box that does not overflow is a
 * focus stop that goes nowhere, under a name that promises a scroll the reader
 * cannot perform. On the widest documents that is dozens of them between one
 * paragraph and the next.
 *
 * Re-derive the figures rather than trusting a number written here — they move
 * whenever a table gains a column or a diagram is redrawn. In a built `dist`,
 * `grep -roh --include='*.html' 'tabindex="0"' dist | wc -l` is the population,
 * and the browser test is `[...document.querySelectorAll('[data-scroll-region]')]
 * .filter(e => e.scrollWidth > e.clientWidth + 1 || e.scrollHeight > e.clientHeight + 1)`
 * at the width in question.
 *
 * ⚠️ WHAT THIS DOES **NOT** DO, AND THE CHOICE IS DELIBERATE: it does not stop the
 * build emitting the attributes. With JavaScript disabled the page keeps exactly
 * today's behaviour — some dead tab stops — rather than losing them all. The two
 * failures are not symmetrical. A dead tab stop is noise: a keyboard user tabs
 * once more than they needed to, and a screen-reader user hears a region name
 * that overpromises. A missing tab stop on a box that IS overflowing is CONTENT
 * LOSS: the off-screen half of a six-column rule-comparison table, or the 46% of
 * a full-sheet diagram that is off-screen at 375px, becomes reachable only by
 * dragging with a pointer. This corpus teaches a collision sport and those
 * tables are where the penalties are, so the no-JS baseline is the one that
 * keeps every cell reachable. Progressive enhancement, not a rewrite.
 */
(function () {
  const regions = document.querySelectorAll('[data-scroll-region]');
  if (!regions.length) return;

  /**
   * Which axes this box can scroll AND has something to scroll on.
   *
   * Both halves are needed. Asking the computed style rather than re-listing
   * `.table-scroll` and `figure.diagram--full .diagram-scroll` here is what keeps
   * this from drifting away from global.css: `--tall`'s `overflow-y: auto`, the
   * `@media print` reset that takes it away again, and the 60rem floor that stops
   * a full-sheet diagram overflowing are each decided there and read back here. A
   * half-sheet `.diagram-scroll` is `overflow: visible` and is rejected by the
   * style test without this file having to know what a half sheet is.
   *
   * ⚠️ BUT THE STYLE TEST CANNOT BE THE WHOLE ANSWER: `overflow-x: auto` makes the
   * USED value of `overflow-y` auto too (CSS Overflow 3 — global.css's note on
   * `.table-scroll th:first-child` records the same trap), so every table wrapper
   * reports two scrollable axes whether or not it is `--tall`. Style says "could";
   * the measurement says "does", and only the measurement may name an axis in the
   * label.
   *
   * The 1px tolerance is sub-pixel rounding: `scrollWidth` and `clientWidth` are
   * integers rounded from a fractional layout, so a box that fits exactly can
   * report a phantom 1px of overflow at some zoom levels and viewport widths.
   */
  const scrollable = (el) => {
    const style = getComputedStyle(el);
    const scrolls = (value) => value === 'auto' || value === 'scroll';
    return {
      x: scrolls(style.overflowX) && el.scrollWidth - el.clientWidth > 1,
      y: scrolls(style.overflowY) && el.scrollHeight - el.clientHeight > 1,
    };
  };

  const apply = (el) => {
    const { x, y } = scrollable(el);

    if (!x && !y) {
      // ⚠️ Not while the region itself holds focus. Removing `tabindex` from the
      // active element drops focus to <body>, which would throw a keyboard user
      // back to the top of the document mid-read — and the case is real: rotate a
      // phone to landscape and a table that overflowed stops overflowing. Focus
      // INSIDE the region (a link in a cell) is untouched by removing the
      // ancestor's tabindex, so only the element itself is checked. It is
      // re-measured on the next resize; until then it is a dead tab stop, which
      // is where this page started.
      if (el === document.activeElement) return;
      el.removeAttribute('tabindex');
      el.removeAttribute('role');
      el.removeAttribute('aria-label');
      return;
    }

    // The label has to match what the region actually does, which is the same
    // rule rehype-corpus.mjs states for the build-time label — telling a
    // screen-reader user it scrolls horizontally when it also scrolls vertically
    // is the same defect as not telling them at all. The third case is new here
    // and cannot be expressed at build time: a `--tall` table that fits
    // horizontally at a wide viewport but is still capped at 70svh scrolls
    // VERTICALLY ONLY, and the build labels it "horizontally and vertically".
    const axes = x && y ? 'horizontally and vertically' : x ? 'horizontally' : 'vertically';
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', `${el.dataset.scrollRegion}, scrollable ${axes}`);
  };

  // One pass per frame at most, however many notifications arrive. Reading
  // `scrollWidth` forces layout, so without the coalescing a drag-resize costs one
  // forced reflow per region per notification. No count is written here: it is
  // `grep -c data-scroll-region` on the page in question, and it moves whenever a
  // document gains a table or a full-sheet diagram.
  let queued = false;
  const measureAll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      for (const el of regions) apply(el);
    });
  };

  measureAll();

  // A deferred script runs before `load`, and whether stylesheets have been
  // applied at that point is not something to rely on: a measurement taken
  // against unstyled boxes would find no overflow anywhere and strip every
  // attribute on the page. The second pass costs one frame and removes the
  // question. (No webfonts on this site — every stack in global.css is a system
  // stack — so there is no font-swap reflow to re-measure after.)
  window.addEventListener('load', measureAll, { once: true });

  if (typeof ResizeObserver === 'function') {
    // ⚠️ ResizeObserver rather than a `resize` handler on every region. It fires
    // when the BOX changes size for any reason, not only when the window does —
    // the sidebar arriving at 60rem and the table of contents at 78rem both
    // narrow the column, `--tall`'s `70svh` cap moves when a mobile URL bar
    // collapses, and none of those are guaranteed to coincide with a resize
    // event. It also batches its own notifications per frame.
    //
    // It cannot feed itself: this callback writes only `tabindex`, `role` and
    // `aria-label`, none of which affect layout, so no observed box changes size
    // because of it.
    const observer = new ResizeObserver(measureAll);
    for (const el of regions) observer.observe(el);
  } else {
    // Pre-2020 browsers. `measureAll` is already frame-coalesced, so a plain
    // listener here is not the thing ResizeObserver was chosen over.
    window.addEventListener('resize', measureAll);
  }
})();
