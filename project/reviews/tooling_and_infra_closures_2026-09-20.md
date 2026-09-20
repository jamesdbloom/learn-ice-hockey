# Two small tooling/infra closures

Neither of these touches `content/`, so neither needed the C1–C11 content gate. Recorded here per
this project's own rule that closed work moves out of `OPEN_ITEMS.md` into a review record rather than
being deleted outright.

## 1. `check_quote_drift.py`'s short-quote-pair false positive — fixed

**The defect**: a line carrying two or more short quotations (each below `MINLEN`) made the tool's
regex fail to match at each short quote's own marks, then `re.finditer` resumed scanning from that
short quote's *closing* mark and misread it as a fresh *opening* mark — capturing everything up to the
next quote mark as a fabricated "quotation," which then correctly reported `NOTFOUND` (it can't be
found — it was never a real quotation) but as pure worklist noise, not a real citation gap.

**The fix**: a negative lookbehind requiring a genuine opening quote mark not be immediately preceded
by a letter or digit —

```python
pattern = (r'(?<![A-Za-z0-9])["“]([^"”]{%d,})["”]' if in_facts else
           r'\*(?<![A-Za-z0-9])["“]([^"”]{%d,})["”]\*') % MINLEN
```

A genuine opening quote follows whitespace or punctuation; a short quote's own closing mark (the thing
being misread as a fresh opener) follows the last letter of a word. In the body-prose branch the
lookbehind is functionally a no-op, since the preceding literal `\*` is never alphanumeric — it does
real work only in the facts-block branch, where the bug was originally found.

**Verification**: a synthetic reproduction of the artefact confirmed the fix directly. Corpus-wide,
across all 39 documents: `notfound` count dropped from 1,049 to 981 (−68), with **zero files showing
any change in `flagged` count** — confirming the fix removes only fabricated fragments and never
touches a genuine drift detection. Independently re-derived by a commit-gate dispatch, which reproduced
both figures from scratch.

**Committed** as `dcb5de8` — "Fix check_quote_drift.py's short-quote-pair false positive." Not pushed
at commit time; the user has since pushed independently (see `OPEN_ITEMS.md`'s Push status section for
the current state).

## 2. `/404` without a trailing slash — confirmed a local-preview-only artefact, not a production bug

**The question**: `/404` (no trailing slash) served Astro's raw framework error page in local preview
instead of the branded 404 page, because `astro.config.mjs`'s `trailingSlash: 'always'` intercepts
before the custom fallback runs. Whether this also affects production — where CloudFront, not Astro,
serves the error page — had never been confirmed.

**Investigation** (read-only, no infra changes, no Terraform run):

- `site/astro.config.mjs`: `trailingSlash: 'always'`, `build: { format: 'directory' }` — confirms the
  bug's mechanism is specific to Astro's own dev/preview server routing.
- `infra/cloudfront.tf`: two `custom_error_response` blocks — one for S3's native 404 (missing key),
  one for S3's 403 (what OAC-signed S3 actually returns for a missing key when the reader has no
  `s3:ListBucket`) — **both unconditionally rewrite to `/404.html`** at the CDN edge, with no path or
  trailing-slash logic anywhere in the config.
- `site/dist/404.html`: confirmed to be the actual build output — one flat file, not `404/index.html`
  — matching exactly what the CloudFront config points at.
- **Empirical confirmation**: visited `https://learn-ice-hockey.com/404` and a genuinely nonexistent
  path (`/this-page-genuinely-does-not-exist-xyz`), both without a trailing slash, in a real browser.
  Both served the fully branded "Page not found" page with complete navigation — production behaves
  correctly regardless of trailing slash, because CloudFront's error substitution operates purely on
  HTTP status code, independent of the requested path, and no Astro server exists in the static
  production deployment to reproduce the dev-server routing quirk at all.

**Conclusion**: this is a local Astro preview-server artefact only. No infra change is needed; the item
closes with no action taken, because none is required.
