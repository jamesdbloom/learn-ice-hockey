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

  function init() {
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
