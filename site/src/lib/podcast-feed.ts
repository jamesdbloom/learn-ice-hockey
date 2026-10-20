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
 *
 * AND, 20 October 2026 (project/podcast_principles_series_plan.md):
 *   5. THE BASICS IS ITS OWN SEASON, APPENDED after every per-document season. No live
 *      episode is renumbered, retitled or re-dated — the per-document dates no longer
 *      depend on how many formats exist (PER_DOC_SLOTS below). Same gate as (4): the
 *      season enters the feed only when every planned topic is published.
 */

import {
  FORMATS,
  DOCUMENT_COUNT,
  BASICS_PLANNED,
  BASICS_EPISODES,
  BASICS_LABEL,
  basicsTitle,
  getFormat,
  guidFor,
  position,
  type BasicsEpisode,
  type Episode,
  type Format,
} from '../data/podcast';
import structure from '../data/structure.json';

/** The bytes, duration and served path a feed item's <enclosure> declares. */
interface Media {
  bytes: number;
  duration_s: number;
  audio: string;
}

export interface FeedItem {
  /** A per-document episode: its format and episode. Absent for a Basics item. */
  format?: Format;
  episode?: Episode;
  /** A Basics topic episode. Absent for a per-document item. */
  basics?: BasicsEpisode;
  media: Media;
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
 * ⚠️ THE BASICS GATE, the same rule for the same reason: the season enters the feed only
 * when EVERY planned topic is published. Until then the feed is byte-identical to one
 * with no Basics at all; each episode still plays on /the-basics/ as soon as it exists.
 * Gated on the PLAN, so adding a planned topic closes the gate again.
 *
 * ⚠️ NOT YET STICKY (code review, 20 Oct 2026). Once the season is live, removing or
 * re-slugging a planned topic, or adding one, would pull or hold back episodes
 * subscribers already have. At launch: freeze the 13 Basics guids in
 * site/scripts/check-podcast-guids.mjs (as LIVE_PRINCIPLES_GUIDS is) and make `planned`
 * append-only, with appended topics joining the feed as published.
 */
export function basicsInFeed(): boolean {
  if (BASICS_PLANNED.length === 0) return false;
  const published = new Set(BASICS_EPISODES.map((e) => e.slug));
  return BASICS_PLANNED.every((t) => published.has(t.slug));
}

/** The Basics season number: one after the last structure.json section. */
export const BASICS_SEASON = structure.layers.length + 1;

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

/**
 * ⚠️ FIXED AT 2, AND IT MUST NEVER BECOME `FORMATS.length` AGAIN. Until 20 October 2026
 * the formula multiplied by `FORMATS.length`, so adding ANY entry to FORMATS would have
 * re-dated all 78 live items (and pushed the last past 8 September, failing
 * assertDates). The per-document slots are Conversation (0) and Playing principles (1);
 * a third per-document format needs its own decision about dates, not a silent re-date.
 */
const PER_DOC_SLOTS = 2;

function pubDateFor(globalIndex: number, formatIndex: number): Date {
  return new Date(BASE_UTC_MS + (globalIndex * PER_DOC_SLOTS + formatIndex) * DAY_MS);
}

/**
 * THE BASICS' DATES. Its own fixed run, after every per-document date: 18 August 2026
 * at 12:00 UTC, then every 12 hours in series order. With 39 documents the last
 * per-document date is 17 August, so the Basics season sorts after it in date order as
 * well as in itunes:order, and 13 topics end on 24 August, well before the 8 September
 * ceiling (room for 41 topics). Like every other date here it is synthetic and fixed —
 * a function of the topic's planned position only, never of the build.
 */
const BASICS_BASE_UTC_MS = Date.UTC(2026, 7, 18, 12, 0, 0); // Tue 18 Aug 2026, 12:00 UTC
const BASICS_STEP_MS = DAY_MS / 2;

function basicsPubDateFor(index: number): Date {
  return new Date(BASICS_BASE_UTC_MS + index * BASICS_STEP_MS);
}

/** RFC 822 with a numeric zone, as every existing pubDate in this feed was written. */
function rfc822(d: Date): string {
  return d.toUTCString().replace(/GMT$/, '+0000');
}

function assertDates(): void {
  if (FORMATS.length > PER_DOC_SLOTS) {
    throw new Error(
      `podcast-feed: ${FORMATS.length} per-document formats but PER_DOC_SLOTS is ${PER_DOC_SLOTS}. ` +
        `Decide the new format's dates explicitly; raising PER_DOC_SLOTS re-dates every live episode.`,
    );
  }
  const latest = pubDateFor(DOCUMENT_COUNT - 1, PER_DOC_SLOTS - 1).getTime();
  if (latest >= PREVIOUS_SHARED_DATE_MS) {
    throw new Error(
      `podcast-feed: the latest synthetic pubDate (${new Date(latest).toISOString()}) is not before ` +
        `8 Sep 2026. Move BASE_UTC_MS earlier — do NOT derive it from the build time.`,
    );
  }
  if (latest >= BASICS_BASE_UTC_MS) {
    throw new Error(
      `podcast-feed: the latest per-document pubDate (${new Date(latest).toISOString()}) is not before ` +
        `the first Basics date; the Basics season must date after every per-document episode.`,
    );
  }
  const basicsLatest = basicsPubDateFor(Math.max(0, BASICS_PLANNED.length - 1)).getTime();
  if (basicsLatest >= PREVIOUS_SHARED_DATE_MS) {
    throw new Error(
      `podcast-feed: the latest Basics pubDate (${new Date(basicsLatest).toISOString()}) is not before ` +
        `8 Sep 2026. ${BASICS_PLANNED.length} planned topics do not fit 12 hours apart from 18 Aug.`,
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
  const docItems: FeedItem[] = rows.map((r, i) => {
    const n = (perSeason.get(r.pos.season) ?? 0) + 1;
    perSeason.set(r.pos.season, n);
    const name = `${r.episode.title} — ${r.format.label}`;
    return {
      format: r.format,
      episode: r.episode,
      media: r.episode,
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

  if (!basicsInFeed()) return docItems;

  // THE BASICS: one season after every per-document season, in planned order, numbered
  // 1..N within it, continuing the global itunes:order. BASICS_EPISODES is already in
  // planned order and, with the gate open, holds exactly one episode per planned topic.
  const basicsItems: FeedItem[] = BASICS_EPISODES.map((ep, i) => ({
    basics: ep,
    media: ep,
    guid: ep.guid,
    // <title> "The Basics 10 · Playing wing"; <itunes:title> "Playing wing — The Basics".
    title: `${BASICS_LABEL} ${i + 1} · ${ep.title}`,
    itunesTitle: basicsTitle(ep),
    season: BASICS_SEASON,
    episodeNumber: i + 1,
    order: docItems.length + i + 1,
    pubDate: rfc822(basicsPubDateFor(i)),
  }));
  return [...docItems, ...basicsItems];
}
