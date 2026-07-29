/* Extracted from src/components/ThemeToggle.astro.
 *
 * A file rather than an inline script because the production CSP is
 * script-src 'self' with no 'unsafe-inline' (infra/locals.tf). Inline
 * scripts are silently blocked in production and work fine locally,
 * because the policy is a CloudFront response header.
 */
(function () {
  var button = document.getElementById('theme-toggle');
  if (!button) return;
  button.hidden = false;

  var icon = document.getElementById('theme-toggle-icon');
  var label = document.getElementById('theme-toggle-text');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    var explicit = document.documentElement.dataset.theme;
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return media.matches ? 'dark' : 'light';
  }

  function paint() {
    var next = current() === 'dark' ? 'light' : 'dark';
    if (icon) icon.textContent = current() === 'dark' ? '☀' : '☾';
    var text = 'Switch to ' + next + ' theme';
    if (label) label.textContent = text;
    button.setAttribute('aria-label', text);
  }

  button.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* ignore */
    }
    paint();
  });

  media.addEventListener('change', paint);
  paint();
})();
