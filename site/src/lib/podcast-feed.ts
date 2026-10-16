/**
 * Which episodes the podcast feed carries, in what order, and with what numbering.
 * `src/pages/feed/podcast.xml.ts` renders; this decides. Kept apart so the ordering
 * rules can be read, and checked, without the XML around them.
 *
 * THE OWNER'S DECISIONS, 16 October 2026 (project/podcast_two_formats.md):
 *   1. ONE SHOW. Every episode title names its format.
 *   2. GROUPED AND ORDERED THE WAY THE WEBSITE IS. Each of structure.json's sections is
 *      an `itunes:season`; within it, documents follow site order; for each document,
 *      Conversation comes first and then Playing principles.
 *   3. THE LIVE SHOW IS RENUMBERED NOW, AND THAT INCLUDES THE DATES. Every guid stays the
 *      same — `site/scripts/check-podcast-guids.mjs` fails the build otherwise.
 *   4. PLAYING PRINCIPLES GOES INTO THE FEED ONLY WHEN ALL OF THEM EXIST. See
 *      `principlesInFeed()` below.
 */

import { FORMATS, DOCUMENT_COUNT, getFormat, guidFor, position, type Episode, type Format } from '../data/podcast';

export interface FeedItem {
  format: Format;
  episode: Episode;
  guid: string;
  /** `<Section> <n> · <Document> — <Format>` */
  title: string;
  /** `<Document> — <Format>`. No numbers: Apple asks for episode and season numbers to
   *  live in their own tags, not in `itunes:title`. */
  itunesTitle: string;
  season: number;
  /** Sequential within the season, counted over the items ACTUALLY IN THE FEED. */
  episodeNumber: number;
  /** Global sequence over the items in the feed, 1-based. */
  order: number;
  pubDate: string;
}

/**
 * ⚠️ THE PLAYING PRINCIPLES GATE. Owner, 16 October 2026: Playing principles episodes
 * "go into the feed only when all 39 exist. Until then, each one can play on its own
 * document page as soon as it is made, but the feed carries Conversation episodes
 * only." Gated on a COUNT, not a flag, so nobody has to remember to flip it — and so a
 * partial set can never leak into subscribers' apps with back-dated pubDates that make
 * the gap look permanent. `DOCUMENT_COUNT` comes from structure.json, so a 40th
 * document closes the gate again until it too has an episode.
 */
export function principlesInFeed(): boolean {
  return getFormat('principles').episodes.length >= DOCUMENT_COUNT;
}

/**
 * ⚠️ pubDate IS SYNTHETIC, FIXED, AND ENCODES THE ORDER. NEVER DERIVE IT FROM THE BUILD.
 *
 * Spotify requires a pubDate (cardinality 1..1); several apps (Overcast, Pocket Casts)
 * sort by it. The owner chose to re-date the live show at once (16 October 2026), so the
 * dates now carry the site order rather than one shared constant.
 *
 * The date is a function of the DOCUMENT'S site position and the FORMAT only — not of
 * how many items happen to be in the feed — so when Playing principles joins, no
 * Conversation episode is re-dated a second time:
 *
 *     BASE + (globalIndex × 2 + formatIndex) days, at 12:00 UTC
 *
 * Noon UTC keeps the calendar date the same for a listener anywhere from UTC−11 to
 * UTC+11. BASE is chosen so that the LATEST possible date (39 documents × 2 formats)
 * still falls BEFORE 8 September 2026, the single date every episode carried before
 * this change: no live episode moves later than a date a client has already seen, so
 * re-dating should not present an old episode as new. `assertDates()` enforces it.
 *
 * Consequence the owner accepted: Playing principles episodes, added later, carry
 * back-dated pubDates and some apps will not flag them as new.
 */
const BASE_UTC_MS = Date.UTC(2026, 5, 1, 12, 0, 0); // Mon 1 June 2026, 12:00 UTC
const DAY_MS = 86_400_000;
/** The constant every episode carried before the renumbering. Upper bound, exclusive. */
const PREVIOUS_SHARED_DATE_MS = Date.UTC(2026, 8, 8, 0, 0, 0);

function pubDateFor(globalIndex: number, formatIndex: number): Date {
  return new Date(BASE_UTC_MS + (globalIndex * FORMATS.length + formatIndex) * DAY_MS);
}

/** RFC 822 with a numeric zone, as every existing pubDate in this feed was written. */
function rfc822(d: Date): string {
  return d.toUTCString().replace(/GMT$/, '+0000');
}

function assertDates(): void {
  const latest = pubDateFor(DOCUMENT_COUNT - 1, FORMATS.length - 1).getTime();
  if (latest >= PREVIOUS_SHARED_DATE_MS) {
    throw new Error(
      `podcast-feed: the latest synthetic pubDate (${new Date(latest).toISOString()}) is not before ` +
        `8 Sep 2026. Move BASE_UTC_MS earlier — do NOT derive it from the build time.`,
    );
  }
}

export function feedItems(): FeedItem[] {
  assertDates();
  const formats = FORMATS.filter((f) => f.id === 'conversation' || principlesInFeed());

  const rows = formats.flatMap((format) =>
    format.episodes.map((episode) => ({
      format,
      formatIndex: FORMATS.indexOf(format),
      episode,
      pos: position(episode.doc_id),
    })),
  );
  rows.sort((a, b) => a.pos.globalIndex - b.pos.globalIndex || a.formatIndex - b.formatIndex);

  const perSeason = new Map<number, number>();
  return rows.map((r, i) => {
    const n = (perSeason.get(r.pos.season) ?? 0) + 1;
    perSeason.set(r.pos.season, n);
    const name = `${r.episode.title} — ${r.format.label}`;
    return {
      format: r.format,
      episode: r.episode,
      guid: guidFor(r.format, r.episode),
      // When the section and the document share a name ("Getting Started"), the
      // prefix only repeats it, so the title is the plain name. Season and episode
      // tags are unchanged either way.
      title: r.pos.layerTitle === r.episode.title ? name : `${r.pos.layerTitle} ${n} · ${name}`,
      itunesTitle: name,
      season: r.pos.season,
      episodeNumber: n,
      order: i + 1,
      pubDate: rfc822(pubDateFor(r.pos.globalIndex, r.formatIndex)),
    };
  });
}
