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
 * Shown in the footer of every page. Required by the legal position set out in
 * §8 of the build specification.
 */
export const NON_AFFILIATION =
  'Not affiliated with, endorsed by or connected to the NHL, IIHF, USA Hockey, Hockey Canada or any league, club or association. Rule citations are references to publicly published rulebooks.';
