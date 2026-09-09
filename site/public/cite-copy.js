/* Extracted from src/components/CiteThis.astro.
 *
 * ⚠️ A FILE RATHER THAN AN ASTRO <script>, AND THE OLD COMMENT SAID THE OPPOSITE.
 * It read "A bundled Astro script, not an inline one. The production CSP is
 * script-src 'self' with no unsafe-inline, so an inline handler would need an
 * exemption" — correct about the policy and wrong about what Astro does with a
 * script this small: it INLINES it. Measured on the live site, on every document
 * page: "Executing inline script violates the following Content Security Policy
 * directive 'script-src 'self' 'wasm-unsafe-eval' https://www.googletagmanager.com'",
 * with 3 [data-cite-block] elements present and 0 copy buttons created.
 *
 * ⚠️ THIS IS THE EXACT TRAP public/audio-player.js's OWN HEADER DOCUMENTS —
 * "Inline scripts are silently blocked in production and work fine locally,
 * because the policy is a CloudFront response header" — hit again by a different
 * component, because the note lived in the file that had already learned it.
 * Seven other scripts on this site use `is:inline src=`; this is the eighth.
 *
 * Additive only: the citation text is visible and selectable without it.
 */
(function () {
  for (const block of document.querySelectorAll('[data-cite-block]')) {
    const snippet = block.querySelector('[data-cite-copy]');
    if (!snippet || !navigator.clipboard) continue;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'cite__copy';
    const label = block.querySelector('.cite__label');
    // The accessible name says which of the three snippets this copies. Three
    // buttons all named "Copy" is three identical rows to a screen-reader user.
    button.setAttribute(
      'aria-label',
      `Copy the ${(label?.textContent ?? '').trim().toLowerCase()} citation`,
    );
    button.textContent = 'Copy';

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(snippet.textContent ?? '');
        button.textContent = 'Copied';
        button.classList.add('is-copied');
      } catch {
        // Clipboard permission can be refused. Say so rather than showing
        // "Copied" over a clipboard that did not change.
        button.textContent = 'Press ⌘C';
        const range = document.createRange();
        range.selectNodeContents(snippet);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      setTimeout(() => {
        button.textContent = 'Copy';
        button.classList.remove('is-copied');
      }, 2000);
    });

    label?.append(button);
  }
})();
