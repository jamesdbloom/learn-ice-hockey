/* Google Analytics 4 bootstrap.
 *
 * A separate file rather than an inline script because the production CSP is
 * script-src 'self' with no 'unsafe-inline' (infra/locals.tf). The measurement
 * id travels on a meta tag so this file needs no build-time substitution and
 * stays cacheable. If the meta tag is absent, this does nothing at all.
 */
(function () {
  var el = document.querySelector('meta[name="ga-measurement-id"]');
  var id = el && el.content;
  if (!id) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id, { anonymize_ip: true });
})();
