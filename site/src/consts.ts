/** Site-wide configuration. */

export const SITE_TITLE = 'Ice Hockey — Learning to Play the Game';
export const SITE_SHORT_TITLE = 'Learning to Play the Game';
export const SITE_DESCRIPTION =
  'A documentation corpus for learning ice hockey: where to be, how to execute, how to read the play, and how five players work as one unit.';

/**
 * Audio narration.
 *
 * The narration does not exist yet (see project/site_build_specification.md,
 * phases 4 and 5). The player shell is built and styled, but is hidden until
 * this flag is turned on so the site can be reviewed without it.
 *
 * When enabled, each document expects an MP3 at `/audio/<id>.mp3`, e.g.
 * `/audio/faceoffs.mp3` and `/audio/positions/center.mp3`.
 */
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
 * the default and what every local build and preview gets. Set it to switch
 * measurement on.
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
export const GA_MEASUREMENT_ID = '';

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
