/* Service worker registration.
 *
 * Separate file for the same reason as analytics.js: the production CSP does
 * not permit inline scripts. Deferred to load so it never competes with first
 * paint — the site is fully readable without it.
 */
window.addEventListener('load', function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(function (e) {
      console.warn('[sw] registration failed', e);
    });
  }
});
