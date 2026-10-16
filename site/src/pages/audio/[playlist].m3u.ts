import type { APIRoute, GetStaticPaths } from 'astro';
import { LAYERS } from '../../data/nav';
import { SITE_TITLE } from '../../consts';
import { getFormat, position, type Episode } from '../../data/podcast';

const conversation = getFormat('conversation');
const principles = getFormat('principles');

/**
 * PLAYING PRINCIPLES PLAYLISTS (owner, 16 October 2026: two formats per document).
 * `principles-all` and `principles-<layer>`, each emitted ONLY when it has at least
 * one episode — an empty playlist is a file that plays nothing. Grouped by the
 * document's place in structure.json, not by a stored `section` string, so the
 * orphan problem described below cannot happen to this set.
 * The Conversation set keeps its original names and order, unchanged.
 */
const PRINCIPLES_PREFIX = 'principles-';

function principlesFor(layerId: string | null): Episode[] {
  return principles.episodes
    .filter((ep) => layerId === null || position(ep.doc_id).layerId === layerId)
    .slice()
    .sort((a, b) => position(a.doc_id).globalIndex - position(b.doc_id).globalIndex);
}

function playlistNames(): string[] {
  const names = ['all', ...LAYERS.map((l) => l.id)];
  if (principles.episodes.length > 0) {
    names.push(`${PRINCIPLES_PREFIX}all`);
    for (const l of LAYERS) {
      if (principlesFor(l.id).length > 0) names.push(`${PRINCIPLES_PREFIX}${l.id}`);
    }
  }
  // ⚠️ A layer whose id were `all`, or began `principles-`, would make two playlists
  // claim one file name and Astro would silently keep one. Fail instead.
  const dupes = names.filter((n, i) => names.indexOf(n) !== i);
  if (dupes.length) throw new Error(`m3u: playlist name collision: ${dupes.join(', ')}`);
  for (const l of LAYERS) {
    if (l.id.startsWith(PRINCIPLES_PREFIX)) {
      throw new Error(`m3u: layer id "${l.id}" collides with the Playing principles playlist prefix`);
    }
  }
  return names;
}

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

export const getStaticPaths: GetStaticPaths = () =>
  playlistNames().map((playlist) => ({ params: { playlist } }));

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

/** ⚠️ An episode's `section` is a STRING STORED IN podcast.json, written there by
 *  scripts/build_podcast_audio.py from the layer title in structure.json. The filter
 *  below matches it against the layer title, so regrouping a document in
 *  structure.json WITHOUT regenerating podcast.json leaves an episode whose section
 *  names a layer that no longer exists — and it then silently appears in no section
 *  playlist at all, only in `all`. That is exactly what happened when "Reading the
 *  Diagrams" stopped being a layer: nothing failed, nothing warned, and the episode
 *  was simply missing. The audio is gitignored and uploaded out of band, so
 *  regenerating podcast.json is not always possible — hence a check here instead. */
function assertSectionsAreRealLayers(): void {
  const titles = new Set(LAYERS.map((l) => l.title));
  const orphans = conversation.episodes.filter((ep) => !titles.has(ep.section));
  if (orphans.length > 0) {
    throw new Error(
      `m3u: ${orphans.length} episode(s) name a section that is not a layer in structure.json, ` +
        `so they would appear in no section playlist: ` +
        orphans.map((ep) => `${ep.doc_id} -> "${ep.section}"`).join(', ') +
        `. Fix the "section" field in podcast.json (or re-run scripts/build_podcast_audio.py).`,
    );
  }
}

export const GET: APIRoute = ({ params, site }) => {
  const origin = (site ?? new URL('http://localhost/')).origin;
  const id = params.playlist!;

  assertSectionsAreRealLayers();

  const isPrinciples = id.startsWith(PRINCIPLES_PREFIX);
  const layerId = isPrinciples ? id.slice(PRINCIPLES_PREFIX.length) : id;
  const layer = LAYERS.find((l) => l.id === layerId);

  let episodes: Episode[];
  let name: string;
  let entryTitle: (ep: Episode) => string;
  if (isPrinciples) {
    episodes = principlesFor(layer ? layer.id : null);
    name = `${SITE_TITLE} — ${principles.label}${layer ? ` — ${layer.title}` : ''}`;
    entryTitle = (ep) => `${ep.title} — ${principles.label}`;
  } else {
    episodes = conversation.episodes
      .slice()
      .sort((a, b) => (a.track ?? 0) - (b.track ?? 0))
      .filter((ep) => (layer ? ep.section === layer.title : true));
    name = layer ? `${SITE_TITLE} — ${layer.title}` : SITE_TITLE;
    entryTitle = (ep) => ep.title;
  }

  const lines = [
    '#EXTM3U',
    `#PLAYLIST:${assertSingleLine(name, 'playlist name')}`,
    ...episodes.flatMap((ep) => [
      `#EXTINF:${Math.round(ep.duration_s)},${assertSingleLine(entryTitle(ep), 'episode title')}`,
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
