/* Extracted from src/pages/search.astro.
 *
 * A file rather than an inline script because the production CSP is
 * script-src 'self' with no 'unsafe-inline' (infra/locals.tf). Inline
 * scripts are silently blocked in production and work fine locally,
 * because the policy is a CloudFront response header.
 */
window.addEventListener('DOMContentLoaded', function () {
  if (typeof PagefindUI === 'undefined') return;

  new PagefindUI({
    element: '#search',
    showSubResults: true,
    showImages: false,
    pageSize: 8,
    resetStyles: false,
  });

  var params = new URLSearchParams(window.location.search);
  var q = params.get('q');
  var input = document.querySelector('#search input');
  if (input) {
    if (q) {
      input.value = q;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
    input.focus();
  }
});
