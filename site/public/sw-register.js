/* Service worker registration.
 *
 * Separate file for the same reason as analytics.js: the production CSP does
 * not permit inline scripts. Deferred to load so it never competes with first
 * paint — the site is fully readable without it.
 */
(function () {
  if (!('serviceWorker' in navigator)) return;

  // Was a worker already in charge when this page loaded? If so, any later
  // change of controller means a *new* version took over and what the reader is
  // looking at is now stale. On a first visit there is no controller, and
  // clients.claim() fires controllerchange as a matter of course — reloading
  // then would be a pointless flash on the very first page anyone sees.
  var hadController = Boolean(navigator.serviceWorker.controller);
  var reloading = false;

  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (!hadController || reloading) return;
    reloading = true;
    // One reload, guarded. Without the flag, a worker that calls skipWaiting on
    // every activation can put the page into a refresh loop.
    window.location.reload();
  });

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(
      function (registration) {
        // Check for a new worker now rather than on the browser's own schedule,
        // which can be up to a day. This is the case that actually bit: an
        // installed home-screen app kept serving a cached page whose inline
        // script the CSP blocked, and the only cure was deleting the icon and
        // adding it again. A reader should never have to know that.
        registration.update();
      },
      function (e) {
        console.warn('[sw] registration failed', e);
      }
    );
  });
})();
