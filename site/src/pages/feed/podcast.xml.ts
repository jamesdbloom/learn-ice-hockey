import type { APIRoute } from 'astro';
import { getDoc } from '../../data/nav';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_AUTHOR, PODCAST_OWNER_EMAIL } from '../../consts';
import podcast from '../../data/podcast.json';
import coverData from '../../data/podcast-cover.json';

/**
 * The PODCAST feed. Hand-rolled, like rss.xml.ts and the sitemap, so the site
 * keeps exactly one production dependency.
 *
 * ⚠️ THIS IS A SEPARATE FEED FROM `/rss.xml` AND MUST STAY ONE. `rss.xml.ts`
 * deliberately emits no `pubDate` and no `<enclosure>`, and its comment gives
 * the reasoning: the corpus "is a book, not a blog", a build-time date is a
 * claim the build cannot support, and dating it would republish all 37 to every
 * subscriber on every rebuild. That decision is made and reasoned. **Do not
 * "fix" rss.xml.ts by adding dates or enclosures to it.** Podcast clients need
 * both, so they get their own feed here.
 *
 * WHAT THE TWO PLATFORMS ACTUALLY REQUIRE — read from their own documentation
 * on 9 September 2026, not from memory or a blog:
 *
 *   - AUDIO FORMAT. Apple: "For RSS feeds, Apple Podcasts accepts MP3 or AAC
 *     formats", and "we strongly recommend using AAC instead of MP3… we
 *     recommend using the MP4 format over the ADTS format". Spotify's delivery
 *     specification v1.10 §4.1: "MP4 with AAC-LC". ⚠️ So NO MP3 IS EMITTED
 *     ANYWHERE. The episodes are already AAC-LC in MP4, which is what both
 *     platforms prefer, and transcoding to MP3 would be a second generation of
 *     lossy loss for nothing. It would also LOSE metadata: `stik`, `desc` and
 *     `ldes` have no ID3 equivalent.
 *   - MIME TYPE. Apple lists `audio/x-m4a` for M4A and uses it in its own
 *     sample feed. Not `audio/mp4`.
 *   - ENCLOSURE `length`. Apple requires all three enclosure attributes and
 *     fails validation without them; Spotify makes `length` optional. So it is
 *     emitted, from real measured byte sizes in `podcast.json`. ⚠️ Never
 *     estimate it.
 *   - ORDERING WITHOUT MEANINGFUL DATES. Apple: `itunes:type` "serial" means
 *     "episodes are intended to be consumed in sequential order… Apple Podcasts
 *     will present the oldest episodes first and display the episode numbers
 *     (required)". So `itunes:episode` carries the order for Apple. Spotify
 *     uses `itunes:order` for the same job: "If omitted the <pubDate> field will
 *     be used to generate order".
 *   - ⚠️ pubDate. Apple lists it as RECOMMENDED. Spotify's spec gives it
 *     cardinality 1..1 — MANDATORY. The two disagree, and this is the one place
 *     the podcast feed cannot keep rss.xml.ts's position outright.
 *
 * ⚠️ WHY `PUB_DATE` IS A HARD-CODED CONSTANT AND MUST STAY ONE.
 * It is emitted because Spotify's schema requires the field to exist, and it
 * carries NO ordering meaning in either platform — `itunes:episode` and
 * `itunes:order` do that job, which is exactly why a single shared date is
 * honest enough to emit and a spread of invented weekly dates would not be.
 * It is a constant, never `new Date()`, for the reason rss.xml.ts already gives:
 * a build-time date would change on every rebuild and republish all 37 episodes
 * to every subscriber — in a podcast client that means 37 push notifications.
 * **If you find yourself computing this value, stop.**
 *
 * ⚠️ GUIDs ARE NOT DERIVED FROM THE ENCLOSURE URL. Apple: a GUID must "never
 * change, even if an episode's metadata, like title or enclosure URL, do
 * change". The bitrate will very likely be revisited, which changes both the
 * file size and possibly the path — so the guid is built from the stable
 * document id, which is the one thing about an episode that does not move.
 *
 * KNOWN, MEASURED, AND NOT FIXABLE HERE: Spotify's spec says "with the
 * exception of podcast and episode descriptions, the consumer facing elements
 * should not exceed 20 characters to ensure a good fit in all Spotify clients".
 * Most of the corpus's document titles are longer than that and will truncate in
 * Spotify clients. Shortening them would break the titles the site, the EPUB and
 * the audio metadata all share, which is a worse trade.
 */

/** Escape the five XML significant characters. Real typographic punctuation is
 *  valid UTF-8 XML and is left alone — Apple forbids the named HTML entities
 *  (`&rsquo;` and friends), not the characters themselves, and asks for
 *  everything else "directly in an editor that supports UTF-8". Same function
 *  and same reasoning as rss.xml.ts. */
function xml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Escape the characters that would be read as HTML MARKUP inside a CDATA section.
 *  ⚠️ CDATA suspends XML parsing, so `xml()` above must NOT also be applied — the two are
 *  mutually exclusive and double-escaping would ship a literal `&amp;lt;p&amp;gt;` to a listener.
 *  But the podcast clients render the CDATA payload as HTML, so a `<` or `&` inside a
 *  document's own description still has to be neutralised or it becomes markup. */
function html(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Wrap rich text for a podcast client. ⚠️ `]]>` is the ONLY sequence that can terminate a
 *  CDATA section early, so it is the one thing that must be broken up. */
function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, ']]&gt;')}]]>`;
}

/** ⚠️ A CONSTANT. See the note above. Never compute this. */
const PUB_DATE = 'Mon, 08 Sep 2026 00:00:00 +0000';

/**
 * ⚠️ THE LINK BACK TO THE SITE MUST BE AN ANCHOR, NOT A BARE URL.
 * Read from both platforms' own documentation on 10 September 2026:
 *   - Apple, A Podcaster's Guide to RSS: episode `<description>` accepts "some HTML
 *     (`<p>`, `<ol>`, `<ul>`, `<li>`, `<a>`) **if wrapped in the `<CDATA>` tag**", and
 *     "enclose all portions of your XML that contain embedded HTML in a CDATA section to
 *     prevent formatting issues, and **to ensure proper link functionality**."
 *   - Spotify, Formatting your show notes: `<a href>` is supported, and
 *     ⚠️ "**We only support https links (not http)**."
 * ⚠️ THIS PREVIOUSLY EMITTED PLAIN TEXT — "Full text at {url}" — and NEITHER PLATFORM
 *     DOCUMENTS AUTO-LINKIFYING A BARE URL. It was almost certainly not clickable.
 * ⚠️ Apple's "timed links" feature is NOT an alternative: it is scoped to links to Apple
 *     services (Books, Music, Maps, News, TV, Shazam), never to an arbitrary website.
 */

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('http://localhost/')).origin;
  // ⚠️ THE COVER URL CARRIES A CONTENT HASH, AND IT MUST NEVER BE REPLACED IN PLACE.
  //
  // Two caches sit between this feed and a listener's eyes, and an invalidation only
  // clears the first.
  //   1. CloudFront. `.github/workflows/deploy.yml` excludes `audio/*` from BOTH sync
  //      passes and only pass 2's log feeds the invalidation, so NOTHING under /audio/
  //      is ever invalidated by a deploy. Measured 10 September 2026: after the cover
  //      object was replaced, the edge served the OLD bytes with `Age: 71651` against
  //      its own `max-age=3600` — twenty hours past its stated TTL.
  //   2. ⚠️ APPLE, and this is the one that matters. Apple caches show artwork against
  //      the URL it fetched it from. A cover replaced in place can keep showing the old
  //      image in the directory after the origin is correct, and unpicking that once a
  //      show is LISTED is slow.
  //
  // So a new cover is a NEW URL. `scripts/build_podcast_cover.py` hashes the PNG it
  // writes and emits the served name into `site/src/data/podcast-cover.json`; this feed
  // and `scripts/upload_podcast_audio.sh` both read that one file, so the three cannot
  // drift. ⚠️ DO NOT hardcode `cover.png` back into this line to "simplify" it.
  const cover = `${origin}/audio/${coverData.file}`;

  const items = podcast.episodes
    .slice()
    .sort((a, b) => a.track - b.track)
    .map((ep) => {
      const doc = getDoc(ep.doc_id);
      const page = `${origin}${doc.href}`;
      return [
        '    <item>',
        `      <title>${xml(ep.title)}</title>`,
        // Stable for the life of the episode: the document id, not the file.
        `      <guid isPermaLink="false">${xml(`learn-ice-hockey:${ep.doc_id}`)}</guid>`,
        `      <link>${xml(page)}</link>`,
        `      <description>${cdata(
          `<p>${html(doc.description)}</p>` +
          `<p>Full text, diagrams and sources at ` +
          `<a href="${html(page)}">${html(page.replace(/^https?:\/\//, ''))}</a></p>`,
        )}</description>`,
        `      <itunes:title>${xml(ep.title)}</itunes:title>`,
        `      <itunes:episode>${ep.track}</itunes:episode>`,
        // Spotify-only; Apple ignores it. Same value, so the two agree.
        `      <itunes:order>${ep.track}</itunes:order>`,
        '      <itunes:episodeType>full</itunes:episodeType>',
        // Apple and Spotify both accept a bare integer of seconds and both
        // prefer or permit it, so that is the intersection.
        `      <itunes:duration>${Math.round(ep.duration_s)}</itunes:duration>`,
        '      <itunes:explicit>false</itunes:explicit>',
        `      <pubDate>${PUB_DATE}</pubDate>`,
        `      <enclosure url="${xml(`${origin}${ep.audio}`)}" length="${ep.bytes}" type="audio/x-m4a" />`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${xml(SITE_TITLE)}</title>
    <link>${origin}/</link>
    <description>${xml(SITE_DESCRIPTION)}</description>
    <language>en-GB</language>
    <copyright>${xml(`© 2026 ${SITE_AUTHOR}. Licensed CC BY-NC 4.0.`)}</copyright>
    <itunes:author>${xml(SITE_AUTHOR)}</itunes:author>
    <itunes:summary>${xml(SITE_DESCRIPTION)}</itunes:summary>
    <itunes:type>serial</itunes:type>
    <itunes:explicit>false</itunes:explicit>
    <itunes:image href="${xml(cover)}" />
    <itunes:category text="Sports">
      <itunes:category text="Hockey" />
    </itunes:category>
    <itunes:owner>
      <itunes:name>${xml(SITE_AUTHOR)}</itunes:name>
      <itunes:email>${xml(PODCAST_OWNER_EMAIL)}</itunes:email>
    </itunes:owner>
    <image>
      <url>${xml(cover)}</url>
      <title>${xml(SITE_TITLE)}</title>
      <link>${origin}/</link>
    </image>
    <atom:link href="${origin}/feed/podcast.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
