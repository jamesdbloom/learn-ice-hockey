import type { APIRoute, GetStaticPaths } from 'astro';
import { LAYERS } from '../../data/nav';
import { SITE_TITLE } from '../../consts';
import podcast from '../../data/podcast.json';

/**
 * Extended M3U playlists — the whole corpus, and one per section.
 *
 * ⚠️ WHY THIS IS FIRST AND NOT LAST. The plan calls an .m3u "one text file that
 * covers most desktop clients… the single cheapest win on this list", and it is
 * right: VLC, Apple Music, foobar, car stereos and most generic players open one
 * without anything being installed, submitted or approved. It needs no feed, no
 * platform account and no third party, so unlike everything else in the audio
 * row it cannot be blocked by someone else's decision.
 *
 * FORMAT. Extended M3U, which is a de-facto convention rather than a published
 * standard: `#EXTM3U` first, then `#EXTINF:<seconds>,<title>` before each entry.
 * ⚠️ The duration is in WHOLE SECONDS and the separator is a COMMA, so a title
 * containing a comma is fine (players split on the first one) but a NEWLINE
 * would break the format — hence the guard below.
 *
 * ABSOLUTE URLS, deliberately. A playlist is a file people download and keep;
 * once it is off the site a relative path resolves against nothing. The cost is
 * that the playlist is tied to the origin it was built for, which is correct —
 * it points at where the audio actually is.
 *
 * ORDER is the corpus's own reading order, by track, for the same reason
 * rss.xml.ts uses it: this is a book, and the sequence is meant.
 */

export const getStaticPaths: GetStaticPaths = () => [
  { params: { playlist: 'all' } },
  ...LAYERS.map((l) => ({ params: { playlist: l.id } })),
];

/** ⚠️ A newline inside a title would terminate the entry early and silently
 *  shift every following track's name onto the wrong file. Titles come from
 *  document H1s so this should never fire — which is exactly why it should
 *  fail loudly rather than be sanitised away if it ever does. */
function assertSingleLine(text: string, what: string): string {
  if (/[\r\n]/.test(text)) {
    throw new Error(`m3u: ${what} contains a newline, which would corrupt the playlist: ${JSON.stringify(text)}`);
  }
  return text;
}

export const GET: APIRoute = ({ params, site }) => {
  const origin = (site ?? new URL('http://localhost/')).origin;
  const id = params.playlist!;

  const layer = LAYERS.find((l) => l.id === id);
  const episodes = podcast.episodes
    .slice()
    .sort((a, b) => a.track - b.track)
    .filter((ep) => (layer ? ep.section === layer.title : true));

  const name = layer ? `${SITE_TITLE} — ${layer.title}` : SITE_TITLE;

  const lines = [
    '#EXTM3U',
    `#PLAYLIST:${assertSingleLine(name, 'playlist name')}`,
    ...episodes.flatMap((ep) => [
      `#EXTINF:${Math.round(ep.duration_s)},${assertSingleLine(ep.title, 'episode title')}`,
      `${origin}${ep.audio}`,
    ]),
  ];

  return new Response(lines.join('\n') + '\n', {
    headers: {
      // ⚠️ THIS HEADER IS DISCARDED. Measured, not assumed: this is a STATIC build,
      // so the Response object is serialised to a FILE and its headers never reach
      // a reader — a preview server returned an EMPTY Content-Type for these, and
      // `podcast.xml` came back as `text/xml` rather than the type its endpoint sets.
      // In production S3 guesses from the extension. ⚠️ MEASURED against the live
      // bucket on 9 September 2026, after the audio was uploaded: it serves
      // `audio/mpegurl` — NOT the `audio/x-mpegurl` an earlier version of this
      // comment predicted. Both are accepted M3U types and players handle either, so
      // the outcome is fine; the point is that the prediction was a guess and is now
      // a measurement. Three reviews called this untestable locally, and it was —
      // it took a real object in a real bucket.
      // ⚠️ Kept anyway because it is correct for a dev/SSR build and costs nothing —
      // but DO NOT rely on it, and do not "fix" a content-type problem here. The
      // lever in production is S3 metadata, set at upload.
      'Content-Type': 'audio/x-mpegurl; charset=utf-8',
    },
  });
};
