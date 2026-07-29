/* Extracted from src/components/BaseHead.astro.
 *
 * A file rather than an inline script because the production CSP is
 * script-src 'self' with no 'unsafe-inline' (infra/locals.tf). Inline
 * scripts are silently blocked in production and work fine locally,
 * because the policy is a CloudFront response header.
 */
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.dataset.theme = stored;
    }
  } catch (e) {
    /* private mode, storage disabled — the media query still applies */
  }
  document.documentElement.classList.add('js');
})();
