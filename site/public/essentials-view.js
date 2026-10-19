/*
 * "Essentials" / "Full guide" view for a document page.
 *
 * A file in public/, loaded with `<script is:inline src>`, like theme-init.js.
 * ⚠️ It must stay a FILE: the production CSP is `script-src 'self'` with no
 * 'unsafe-inline' (infra/locals.tf), and Astro inlines a processed <script> this
 * small, which would work locally and silently die in production. As a root-level
 * .js it is also precached by scripts/build-pwa.mjs, so the toggle works offline.
 *
 * Loaded synchronously in <head>, like theme-init.js, for one reason: a reader who
 * chose Essentials must not see the full page paint and then collapse. Only the
 * first few lines run before the body exists; the rest waits for DOMContentLoaded.
 *
 * What the view does is CSS (global.css, `html.view-essentials`), keyed off the
 * `ess` class remark-corpus.mjs puts on the blocks the view keeps. With scripting
 * off none of this runs, the toggle stays `hidden`, and the full page shows.
 *
 * Rules:
 *   - Default is the full guide. Only an explicit click on the toggle is
 *     remembered (localStorage, wrapped: storage can throw in private modes).
 *   - A page opened at a #fragment opens in the full guide, whatever is stored —
 *     a deep link names a place, and the place may be hidden. Not remembered.
 *   - Following an in-page link, or a hash change, to a hidden target switches to
 *     the full guide first, so the browser's own scroll lands on a visible element.
 *     Also not remembered: one deep link should not undo a stated preference.
 *
 * Two small page behaviours ride along because they need this file's hooks:
 *   - the contents list marks the section being read (trackContents below);
 *   - `html.audio-idle` keeps the phone audio bar out of the sticky stack until
 *     its first play (global.css).
 */
(function () {
  var KEY = 'doc-view';
  var CLS = 'view-essentials';
  var root = document.documentElement;

  var stored = null;
  try {
    stored = window.localStorage.getItem(KEY);
  } catch (e) {
    /* storage unavailable: default view */
  }
  if (stored === 'essentials' && !window.location.hash) root.classList.add(CLS);

  /* Not Essentials, but it needs the same early hook and this is the file that has
     it: on a phone the audio bar stays in the flow until its first play, then sticks
     (global.css, `html.audio-idle`). Set here in <head> so there is no sticky first
     paint; cleared on the first `playing` in the document, whichever format. `playing`
     rather than `play`: `play` fires before a fetch that may fail. Media
     events do not bubble, so listen in the capture phase. */
  root.classList.add('audio-idle');
  document.addEventListener('playing', function () {
    root.classList.remove('audio-idle');
  }, true);

  function isEssentials() {
    return root.classList.contains(CLS);
  }

  /* Hidden = inside the document body but not inside a block the view keeps. */
  function hiddenInEssentials(el) {
    if (!el || !el.closest) return false;
    return !!el.closest('.prose') && !el.closest('.prose > .ess');
  }

  function targetOf(hash) {
    if (!hash || hash.length < 2) return null;
    var id = hash.slice(1);
    try {
      id = decodeURIComponent(id);
    } catch (e) {
      /* keep raw */
    }
    return document.getElementById(id);
  }

  function sync() {
    var on = isEssentials();
    var buttons = document.querySelectorAll('[data-view]');
    for (var i = 0; i < buttons.length; i += 1) {
      var b = buttons[i];
      b.setAttribute('aria-pressed', String((b.getAttribute('data-view') === 'essentials') === on));
    }
    /* Mute contents entries whose section is hidden, so the list says what a click will do. */
    var links = document.querySelectorAll('.toc a[href^="#"], .toc-inline a[href^="#"]');
    for (var j = 0; j < links.length; j += 1) {
      var hidden = on && hiddenInEssentials(targetOf(links[j].getAttribute('href')));
      links[j].classList.toggle('toc-link--elsewhere', hidden);
    }
    refreshContents();
  }

  /* Switch view, keeping `anchor` (the control that was used) where it was on screen. */
  function setView(view, remember, anchor) {
    var before = anchor ? anchor.getBoundingClientRect().top : 0;
    root.classList.toggle(CLS, view === 'essentials');
    sync();
    if (anchor) {
      var delta = anchor.getBoundingClientRect().top - before;
      if (delta) window.scrollBy(0, delta);
    }
    if (remember) {
      try {
        window.localStorage.setItem(KEY, view);
      } catch (e) {
        /* not remembered; the view still changes */
      }
    }
  }

  /*
   * Contents: mark the entry for the section being read (both the desktop rail and
   * the inline list). It lives here, not in its own file, because it has to know what
   * the Essentials view hides: a hidden heading is never "current", and switching
   * view re-picks the entry.
   *
   * The current section is the last VISIBLE heading whose top has passed the line
   * where a contents click lands it (`scroll-padding-top`, which already counts the
   * header and the audio bar). An IntersectionObserver whose top edge is that line
   * says when a heading (or any top-level block) crosses it; nothing runs on scroll
   * otherwise. The one
   * exception is the end of the page, where the last short sections can never
   * reach the line: while the footer is on screen a rAF-throttled scroll listener
   * picks the last heading on screen once the page cannot scroll further.
   *
   * Only a class and `aria-current` change, and the CSS for them is colour and
   * box-shadow, so marking an entry never moves anything.
   */
  var refreshContents = function () {};

  function trackContents() {
    if (!('IntersectionObserver' in window) || !window.requestAnimationFrame) return;
    var links = document.querySelectorAll('.toc a[href^="#"], .toc-inline a[href^="#"]');
    var heads = [];
    var linksFor = {};
    for (var i = 0; i < links.length; i += 1) {
      var h = targetOf(links[i].getAttribute('href'));
      if (!h || !h.id) continue;
      if (!linksFor[h.id]) {
        linksFor[h.id] = [];
        heads.push(h);
      }
      linksFor[h.id].push(links[i]);
    }
    if (!heads.length) return;

    var rail = document.querySelector('nav.toc');
    var footer = document.querySelector('.site-footer');
    var current = null;
    var io = null;
    var line = -1;
    var pending = false;
    var footerOnScreen = false;

    function lineNow() {
      var pad = parseFloat(window.getComputedStyle(root).scrollPaddingTop) || 0;
      return Math.round(pad) + 8;
    }

    function shown(el) {
      return el.getClientRects().length > 0;
    }

    function mark(id) {
      if (id === current) return;
      var old = current ? linksFor[current] : [];
      for (var a = 0; a < old.length; a += 1) {
        old[a].classList.remove('toc-link--current');
        old[a].removeAttribute('aria-current');
      }
      current = id;
      var now = id ? linksFor[id] : [];
      for (var b = 0; b < now.length; b += 1) {
        now[b].classList.add('toc-link--current');
        now[b].setAttribute('aria-current', 'location');
      }
      /* Keep the entry in view inside the rail's own scroll box, never the page's. */
      var inRail = null;
      for (var c = 0; c < now.length; c += 1) if (rail && rail.contains(now[c])) inRail = now[c];
      if (inRail && rail.clientHeight > 0 && rail.scrollHeight > rail.clientHeight) {
        var top = inRail.offsetTop;
        if (top < rail.scrollTop || top + inRail.offsetHeight > rail.scrollTop + rail.clientHeight) {
          rail.scrollTop = Math.max(0, top - rail.clientHeight / 3);
        }
      }
    }

    function update() {
      pending = false;
      var l = lineNow();
      if (l !== line) {
        observe(l);
        return;
      }
      var pick = null;
      var lastOnScreen = null;
      var vh = window.innerHeight;
      for (var k = 0; k < heads.length; k += 1) {
        if (!shown(heads[k])) continue;
        var t = heads[k].getBoundingClientRect().top;
        if (t <= l) pick = heads[k];
        if (t < vh) lastOnScreen = heads[k];
        else break;
      }
      var doc = document.documentElement;
      if (footerOnScreen && lastOnScreen && window.scrollY + vh >= doc.scrollHeight - 2) {
        pick = lastOnScreen;
      }
      mark(pick ? pick.id : null);
    }

    function schedule() {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(update);
    }

    function onIntersect(entries) {
      for (var e = 0; e < entries.length; e += 1) {
        if (entries[e].target !== footer) continue;
        var was = footerOnScreen;
        footerOnScreen = entries[e].isIntersecting;
        if (footerOnScreen && !was) window.addEventListener('scroll', schedule, { passive: true });
        if (!footerOnScreen && was) window.removeEventListener('scroll', schedule);
      }
      schedule();
    }

    /* The line moves when the audio bar changes height or stops being sticky, so the
       observer is rebuilt whenever it does. */
    function observe(l) {
      line = l;
      if (io) io.disconnect();
      io = new IntersectionObserver(onIntersect, { rootMargin: '-' + l + 'px 0px 0px 0px' });
      /* Every top-level block, not only the headings: a long jump (a link, Home/End,
         a scrollbar drag) can carry a heading from below the screen to above the line
         without it ever intersecting, which fires nothing for it. Some block always
         enters or leaves the band on such a jump, and that is enough to re-pick. */
      for (var m = 0; m < heads.length; m += 1) io.observe(heads[m]);
      var blocks = document.querySelectorAll('.prose > *');
      for (var n = 0; n < blocks.length; n += 1) io.observe(blocks[n]);
      if (footer) io.observe(footer);
      schedule();
    }

    refreshContents = schedule;
    observe(lineNow());
    window.addEventListener('resize', schedule);
    /* Media events do not bubble; capture them at the document. */
    document.addEventListener('play', schedule, true);
    document.addEventListener('pause', schedule, true);
  }

  function init() {
    trackContents();
    if (!document.querySelector('.prose .ess')) {
      /* Nothing to show in Essentials on this page: never strand a reader on it. */
      root.classList.remove(CLS);
      return;
    }
    var toggles = document.querySelectorAll('[data-view-toggle]');
    for (var t = 0; t < toggles.length; t += 1) toggles[t].hidden = false;

    var controls = document.querySelectorAll('[data-view], [data-view-set]');
    for (var i = 0; i < controls.length; i += 1) {
      controls[i].addEventListener('click', function (ev) {
        var el = ev.currentTarget;
        /* Hold steady something that stays visible in BOTH views: the closing button
           and the note both vanish in the full guide, so their own position after the
           switch is 0 and would fling the page. The closing button holds the last kept
           block (normally Key Takeaways) where it was; everything else holds the toggle. */
        var kept = document.querySelectorAll('.prose > .ess');
        var anchor = el.closest('.ess-end') && kept.length
          ? kept[kept.length - 1]
          : document.querySelector('[data-view-toggle]');
        setView(el.getAttribute('data-view') || el.getAttribute('data-view-set'), true, anchor);
      });
    }

    /* Capture phase, so the view is full BEFORE the browser performs the jump. */
    document.addEventListener('click', function (ev) {
      if (!isEssentials() || ev.defaultPrevented || ev.button !== 0) return;
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      var a = ev.target && ev.target.closest ? ev.target.closest('a[href*="#"]') : null;
      if (!a || a.origin !== window.location.origin || a.pathname !== window.location.pathname) return;
      if (hiddenInEssentials(targetOf(a.hash))) setView('full', false, null);
    }, true);

    window.addEventListener('hashchange', function () {
      var el = targetOf(window.location.hash);
      if (isEssentials() && hiddenInEssentials(el)) {
        setView('full', false, null);
        el.scrollIntoView();
      }
    });

    sync();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
