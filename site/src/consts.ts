/** Site-wide configuration. */

export const SITE_TITLE = 'Ice Hockey — Learning to Play the Game';
export const SITE_SHORT_TITLE = 'Learning to Play the Game';
export const SITE_DESCRIPTION =
  'A documentation corpus for learning ice hockey: where to be, how to execute, how to read the play, and how five players work as one unit.';

/**
 * The audio edition.
 *
 * ⚠️ NOT "narration", and the word matters. Measured 9 September 2026: every
 * episode runs 48-72 minutes REGARDLESS of its document's length — Rules Primer
 * is 93,153 words in 67.9 min, Reading Ice Hockey Diagrams is 4,198 words in
 * 53.4 min, against a ~150 wpm speech rate. No episode is a verbatim reading of
 * its document, so "narration", "narrated" and "read aloud" all assert something
 * false. The metadata in `scripts/build_podcast_audio.py` was corrected for the
 * same reason; keep the two in step.
 *
 * ⚠️ `.m4a`, NOT `.mp3`. The episodes are AAC-LC in MP4, which is what BOTH
 * platforms prefer — Apple: "we strongly recommend using AAC instead of MP3…
 * the MP4 format over the ADTS format"; Spotify's delivery spec: "MP4 with
 * AAC-LC". Transcoding to MP3 would be a second generation of lossy loss for
 * nothing. This constant previously said `.mp3` because the audio did not exist.
 *
 * ⚠️ THE FILES ARE NOT IN `site/dist`. They are gitignored (~1.12 GB) and
 * uploaded to the bucket out of band, which is why `.github/workflows/deploy.yml`
 * excludes `audio/*` from every sync pass — a sync with `--delete` that did not
 * would erase all 37. So `check-links.mjs` cannot resolve these hrefs against
 * the build output, and a link check that fails on `/audio/…` is telling you
 * about the deploy model, not about a broken link.
 */
// ⚠️ FALSE UNTIL THE AUDIO IS ACTUALLY IN THE BUCKET. This is ONE FLAG FLIP away
// from shipping, and it is deliberately not flipped yet.
//
// MEASURED in headless Chrome, 9 September 2026, with the flag on: all 37 episode
// URLs return 404, because `scripts/upload_podcast_audio.sh` is outward-facing and
// has not been run (non-negotiable 9 — it needs the owner). A reader pressing play
// got a full, healthy-looking transport control — "Listen", a play triangle,
// 0:00 / 0:00, a full-width scrubber — that did nothing at all, on every one of the
// 37 document pages. ⚠️ That is a MISLEADING affordance, not a degraded one.
//
// `public/audio-player.js` now listens for the element's `error` event and replaces
// the panel with "This episode is not available yet.", so the failure is at least
// honest. But honest-and-useless on 37 pages is not a thing to ship either.
//
// THE SEQUENCE IS: run the uploader, confirm the URLs resolve and that HTTP HEAD and
// byte-range requests work on them (Apple requires both), THEN set this to true.
// ⚠️ Do not flip it because the code looks finished. The one thing nobody has ever
// seen is this player working against a file that exists.
export const AUDIO_ENABLED = false;

/** Where audio files are served from, relative to the site root. */
export const AUDIO_BASE = '/audio';

/**
 * Who wrote it.
 *
 * Not decoration. The content is CC BY-NC 4.0 (D4), and the BY is attribution —
 * a downstream reuser has to know who to credit, so the name belongs in the
 * page footer, the document metadata and the EPUB package alike.
 */
export const SITE_AUTHOR = 'James Bloom';
export const SITE_AUTHOR_URL = 'https://github.com/jamesdbloom';

/**
 * Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'.
 *
 * Empty disables analytics entirely and emits no third-party script, which is
 * the default and what every local build and preview gets. It is populated
 * only by `PUBLIC_GA_ID` in the deploy workflow, so measurement is on in
 * production and nowhere else. Set that variable in the repository settings,
 * not here — hard-coding it is what broke this before.
 *
 * Note for anyone reading `docs/philosophy.md` or `docs/aws-design.md`: both
 * described the site as carrying no analytics and no third-party scripts. That
 * changed here, and those documents have been updated to match. `site-reviewer`
 * checks for off-origin requests, so expect `googletagmanager.com` and
 * `google-analytics.com` to appear once this is populated.
 *
 * Not a secret: a GA4 measurement ID is public by design and appears in the
 * page source of every site that uses one.
 */
/*
  Read from the environment, empty unless one is supplied.

  This was hard-coded to the live measurement ID, which made the paragraph
  above false: analytics fired from *every* build, not just deployed ones. A
  browser pass caught the request going out from `http://localhost:4321`, and
  all 42 built pages carried it — so every local preview polluted the property,
  and anyone cloning this public repository and running `npm run dev` sent hits
  to it. The deploy workflow supplies `PUBLIC_GA_ID`; nothing else does.
*/
export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_ID ?? '';

/**
 * Google Search Console verification.
 *
 * Prefer the DNS TXT method — it verifies the whole domain, survives every
 * redeploy, and is already expressible in `infra/dns.tf`. This meta-tag fallback
 * exists for the case where DNS is inconvenient; leave it empty if the TXT
 * record is in place.
 */
export const GOOGLE_SITE_VERIFICATION = '';

/**
 * Shown in the footer of every page. Required by the legal position set out in
 * §8 of the build specification.
 */
export const NON_AFFILIATION =
  'Not affiliated with, endorsed by or connected to the NHL, IIHF, USA Hockey, Hockey Canada or any league, club or association. Rule citations are references to publicly published rulebooks.';
