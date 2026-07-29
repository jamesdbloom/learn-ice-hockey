/* Extracted from src/components/Header.astro.
 *
 * A file rather than an inline script because the production CSP is
 * script-src 'self' with no 'unsafe-inline' (infra/locals.tf). Inline
 * scripts are silently blocked in production and work fine locally,
 * because the policy is a CloudFront response header.
 */
// "/" focuses search from anywhere, matching the convention readers expect.
document.addEventListener('keydown', function (event) {
  if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
  var el = document.activeElement;
  if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return;
  var input = document.querySelector('#search input[type="text"], #search input[type="search"]');
  if (input) {
    event.preventDefault();
    input.focus();
  } else {
    event.preventDefault();
    window.location.href = '/search/';
  }
});
