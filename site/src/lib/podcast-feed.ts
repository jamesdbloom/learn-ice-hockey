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
 *   4. PLAYING PRINCIPLES GOES INTO THE FEED ONLY WHEN ALL OF THEM EXIST. It did, on
 *      16 October; since 22 October the gate is sticky — see `principlesInFeed()`.
 *
 * AND, 20 October 2026 (project/podcast_principles_series_plan.md):
 *   5. THE BASICS IS ITS OWN SEASON, APPENDED after every per-document season. No live
 *      episode is renumbered, retitled or re-dated — the per-document dates no longer
 *      depend on how many formats exist (PER_DOC_SLOTS below). Same gate as (4): the
 *      season entered the feed only when every planned topic was published.
 *
 * AND, 21 October 2026: all 13 are published and the season is LIVE. The gate is now
 *   sticky — LIVE_BASICS_SLUGS below — so a later edit to `planned` cannot pull it.
 */

import {
  FORMATS,
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
 * ⚠️ THE 39 DOCUMENTS THE LIVE SHOW WAS DATED FROM, FROZEN IN THEIR SITE ORDER AS OF
 * 22 October 2026 (structure.json at that date). Two things hang off this list:
 *
 *   - THE DATES. A per-document episode's pubDate comes from its document's position IN
 *     THIS LIST, never from the live structure.json. Before this list existed the date
 *     came from structure.json's running index, so inserting a 40th document mid-site
 *     (`off-the-ice/finding_more_ice`, after practice_and_development) would have moved
 *     every later live episode's pubDate a day later and pushed the last per-document
 *     date into the Basics' first date. See `pubDateFor()`.
 *   - THE PLAYING PRINCIPLES GATE. See `principlesInFeed()`.
 *
 * Never reorder, remove or append to this list. A document added to the site later is
 * NOT added here: it gets an interleaved date slot (see `pubDateFor()`). The same 39 are
 * frozen as Playing principles guids, in this order, in site/scripts/check-podcast-guids.mjs.
 */
export const DATED_DOC_IDS: readonly string[] = [
  'getting-started/getting_started',
  'foundation/core_principles',
  'reading-diagrams/reading_ice_hockey_diagrams',
  'foundation/rink_map',
  'foundation/language_and_glossary',
  'foundation/rules_primer',
  'foundation/uk_rules',
  'foundation/on_ice_communication',
  'positions/center',
  'positions/winger',
  'positions/defender',
  'positions/goaltender',
  'positions/switching_positions',
  'systems/breakouts',
  'systems/zone_entries',
  'systems/offensive_zone_play',
  'systems/forechecking_systems',
  'systems/neutral_zone_systems',
  'systems/defensive_zone_coverage',
  'systems/defending_the_rush',
  'systems/special_teams',
  'systems/faceoffs',
  'systems/game_management',
  'technique/skating',
  'technique/puck_handling',
  'technique/passing_and_receiving',
  'technique/shooting',
  'technique/body_contact_and_battles',
  'hockey-iq/puck_support_and_spacing',
  'hockey-iq/time_and_space',
  'hockey-iq/scanning_and_anticipation',
  'hockey-iq/risk_management',
  'hockey-iq/playing_without_the_puck',
  'off-the-ice/equipment',
  'off-the-ice/conditioning_and_recovery',
  'off-the-ice/practice_and_development',
  'off-the-ice/mental_game',
  'off-the-ice/team_play_and_culture',
  'off-the-ice/how_to_watch_hockey',
];

/**
 * ⚠️ THE PLAYING PRINCIPLES GATE — LIVE, AND STICKY SINCE 22 October 2026.
 *
 * Owner, 16 October 2026: Playing principles episodes "go into the feed only when all 39
 * exist." The gate was a COUNT against structure.json's document total, and it opened on
 * 16 October. Left as a count it was REVERSIBLE: a 40th document with no episode yet
 * would have closed it again and pulled 39 episodes subscribers already hold.
 *
 * So, like the Basics (LIVE_BASICS_SLUGS), the season is in the feed because the frozen
 * set DATED_DOC_IDS is non-empty, not because of a count:
 *   - every one of those 39 documents must still have its Playing principles episode;
 *     `assertPrinciplesFrozen()` fails the build otherwise (a Detailed remake replaces an
 *     episode in place and keeps its guid, so this never trips on a remake);
 *   - a document added later joins the feed in Playing principles AS SOON AS its episode
 *     is published. Its date slot is fixed by its position (see `pubDateFor()`), so that
 *     publish re-dates nothing already in the feed.
 */
export function principlesInFeed(): boolean {
  return DATED_DOC_IDS.length > 0;
}

function assertPrinciplesFrozen(): void {
  const have = new Set(getFormat('principles').episodes.map((e) => e.doc_id));
  const missing = DATED_DOC_IDS.filter((d) => !have.has(d));
  if (missing.length) {
    throw new Error(
      `podcast-feed: live Playing principles documents have no episode in podcast-principles.json: ${missing.join(', ')}. ` +
        `They have been in the feed since 16 Oct 2026; a remake replaces an episode in place.`,
    );
  }
}

/**
 * ⚠️ THE BASICS ARE LIVE, AND THE GATE IS NOW STICKY (21 October 2026).
 *
 * The gate opened when every one of the 13 planned topics had an episode (the rule was
 * the same as Playing principles': the season enters the feed only when the whole plan
 * is published). Left as a pure plan check, it would have stayed REVERSIBLE: adding a
 * 14th planned topic would have closed it again and pulled 13 episodes subscribers
 * already hold, and removing, re-slugging or reordering a topic would have dropped or
 * renumbered them.
 *
 * So these 13 slugs are FROZEN, in series order, and the season is in the feed because
 * this list is non-empty, not because of the plan:
 *   - `planned` is APPEND-ONLY. Its first 13 entries must be exactly these slugs in this
 *     order, and every one must still have its episode; `assertBasicsFrozen()` fails the
 *     build otherwise.
 *   - A topic appended after them joins the feed AS SOON AS IT IS PUBLISHED, with no
 *     whole-plan gate — but only in planned order: an appended topic waits until every
 *     topic planned before it is published, so a later publish never renumbers or
 *     re-dates an episode already in the feed.
 * The same 13 are frozen as guids in site/scripts/check-podcast-guids.mjs, which checks
 * the BUILT feed. Add a slug here only when its episode is live; never remove one.
 */
export const LIVE_BASICS_SLUGS: readonly string[] = [
  'how-a-game-works',
  'gear-and-staying-safe',
  'skating',
  'carrying-the-puck',
  'passing-and-catching',
  'shooting',
  'playing-without-the-puck',
  'defending',
  'playing-centre',
  'playing-wing',
  'playing-defence',
  'playing-goal',
  'teamwork',
];

function assertBasicsFrozen(): void {
  if (structure.layers.length + 1 !== BASICS_SEASON) {
    throw new Error(
      `podcast-feed: structure.json has ${structure.layers.length} sections, but the live Basics season is ` +
        `itunes:season ${BASICS_SEASON} (frozen when there were ${BASICS_SEASON - 1}). Adding or removing a section ` +
        `would renumber or collide with the 13 live Basics episodes. Decide the new section's season and the ` +
        `Basics' explicitly with the owner; do not let the build renumber live episodes.`,
    );
  }
  const head = BASICS_PLANNED.slice(0, LIVE_BASICS_SLUGS.length).map((t) => t.slug);
  if (head.join('\n') !== LIVE_BASICS_SLUGS.join('\n')) {
    throw new Error(
      `podcast-feed: podcast-basics.json \`planned\` must begin with the ${LIVE_BASICS_SLUGS.length} live Basics ` +
        `topics, in order (LIVE_BASICS_SLUGS). It begins: ${head.join(', ')}. A live topic may not be removed, ` +
        `re-slugged or reordered; new topics are appended after them.`,
    );
  }
  const published = new Set(BASICS_EPISODES.map((e) => e.slug));
  const missing = LIVE_BASICS_SLUGS.filter((s) => !published.has(s));
  if (missing.length) {
    throw new Error(`podcast-feed: live Basics topics have no episode in podcast-basics.json: ${missing.join(', ')}`);
  }
}

/** True once the season is live, which it has been since LIVE_BASICS_SLUGS was frozen. */
export function basicsInFeed(): boolean {
  return LIVE_BASICS_SLUGS.length > 0;
}

/** The Basics episodes the feed carries, in planned order: the frozen live topics, then
 *  each appended topic up to (not past) the first one that is not yet published. */
function basicsFeedEpisodes(): BasicsEpisode[] {
  const bySlug = new Map(BASICS_EPISODES.map((e) => [e.slug, e]));
  const out: BasicsEpisode[] = [];
  for (const t of BASICS_PLANNED) {
    const ep = bySlug.get(t.slug);
    if (!ep) break;
    out.push(ep);
  }
  return out;
}

/**
 * ⚠️ THE BASICS SEASON NUMBER IS FROZEN AT ITS LIVE VALUE (23 October 2026).
 *
 * It was `structure.layers.length + 1`, so adding a section to structure.json would have
 * silently moved all 13 live Basics episodes to a new itunes:season (and the checker
 * restated the same formula, so it agreed by construction). Subscribers' apps group by
 * season, so that is a visible renumbering of live episodes with no sign-off.
 *
 * It is 8 because structure.json had 7 sections when the Basics went live on 21 October
 * 2026. `assertBasicsFrozen()` fails the build if structure.json no longer has exactly
 * BASICS_SEASON − 1 sections: a new section would either collide with season 8 or sit
 * AFTER the Basics, against decision (5). Either way it is an owner decision, not a
 * build side effect. The same value is frozen in site/scripts/check-podcast-guids.mjs.
 */
export const BASICS_SEASON = 8;

/**
 * ⚠️ pubDate IS SYNTHETIC, FIXED, AND ENCODES THE ORDER. NEVER DERIVE IT FROM THE BUILD.
 *
 * Spotify requires a pubDate (cardinality 1..1); several apps (Overcast, Pocket Casts)
 * sort by it. The owner chose to re-date the live show at once (16 October 2026), so the
 * dates now carry the site order rather than one shared constant.
 *
 * The date is a function of the DOCUMENT'S FROZEN position (DATED_DOC_IDS) and the FORMAT
 * only — not of how many items are in the feed, and not of where structure.json now
 * puts the document — so neither a new format joining nor a new document being added
 * re-dates a live episode:
 *
 *     BASE + (frozenIndex × 2 + formatIndex) days, at 12:00 UTC
 *
 * Noon UTC keeps the calendar date the same for a listener anywhere from UTC−11 to
 * UTC+11. BASE is chosen so that the latest of these (39 documents × 2 formats, 17 Aug)
 * falls BEFORE 8 September 2026, the single date every episode carried before the
 * renumbering, and before the Basics' first date (18 Aug).
 *
 * A DOCUMENT ADDED AFTER 22 October 2026 (not in DATED_DOC_IDS) is INTERLEAVED, not
 * appended. Rule: let P be the nearest document BEFORE it in structure.json order that IS
 * in DATED_DOC_IDS (frozen index p; p = −1 if there is none). The documents between P
 * and the next frozen document are numbered k = 0, 1, … in structure.json order, and
 * each takes two consecutive 20-minute slots after P's last date:
 *
 *     BASE + (p × 2 + 1) days + ((k × 2 + formatIndex) + 1) × 20 minutes
 *
 * So `off-the-ice/finding_more_ice` (after practice_and_development, p = 35) dates
 * 11 Aug 2026 12:20 UTC (Conversation) and 12:40 UTC (Playing principles), between
 * practice_and_development's Playing principles (11 Aug, 12:00) and mental_game's
 * Conversation (12 Aug, 12:00). Interleaving, not "after the last item",
 * because the dates must rise with itunes:order (date-sorting apps would otherwise list
 * a new document after the Basics, out of site order) and stay before 8 Sep.
 * Consequence: like Playing principles before it, a newly added document's episode is
 * back-dated and some apps will not flag it as new. Up to 35 added documents fit
 * between two frozen ones; `assertDates()` fails the build past that.
 *
 * ⚠️ This only fixes DATES. A new document's episode still renumbers the later items
 * of its own season (itunes:episode and the "<Section> n ·" title prefix) and shifts
 * itunes:order for every later item, because numbering follows the site — the owner's
 * decision (2) above. That happens when the episode is PUBLISHED, not when the page is
 * added, and it needs the owner's sign-off then.
 */
const BASE_UTC_MS = Date.UTC(2026, 5, 1, 12, 0, 0); // Mon 1 June 2026, 12:00 UTC
const DAY_MS = 86_400_000;
/** The constant every episode carried before the renumbering. Upper bound, exclusive. */
const PREVIOUS_SHARED_DATE_MS = Date.UTC(2026, 8, 8, 0, 0, 0);
/** Spacing of an added document's interleaved slots (see above). */
const ADDED_STEP_MS = 20 * 60_000;
const ADDED_MAX_SLOTS = DAY_MS / ADDED_STEP_MS - 1; // 71 slots strictly inside the day

/**
 * ⚠️ FIXED AT 2, AND IT MUST NEVER BECOME `FORMATS.length` AGAIN. Until 20 October 2026
 * the formula multiplied by `FORMATS.length`, so adding ANY entry to FORMATS would have
 * re-dated all 78 live items (and pushed the last past 8 September, failing
 * assertDates). The per-document slots are Conversation (0) and Playing principles (1);
 * a third per-document format needs its own decision about dates, not a silent re-date.
 */
const PER_DOC_SLOTS = 2;

const FROZEN_INDEX = new Map(DATED_DOC_IDS.map((d, i) => [d, i]));

/** Every structure.json document's date anchor: frozen index p and, for an added
 *  document, its rank k among the added documents that follow the same frozen one. */
const DATE_ANCHOR = new Map<string, { p: number; k: number | null }>();
{
  let p = -1;
  let k = 0;
  for (const layer of structure.layers) {
    for (const docId of layer.docs) {
      const fi = FROZEN_INDEX.get(docId);
      if (fi !== undefined) {
        p = fi;
        k = 0;
        DATE_ANCHOR.set(docId, { p: fi, k: null });
      } else {
        DATE_ANCHOR.set(docId, { p, k: k++ });
      }
    }
  }
}

function pubDateFor(docId: string, formatIndex: number): Date {
  const a = DATE_ANCHOR.get(docId);
  if (!a) throw new Error(`podcast-feed: "${docId}" is not in structure.json`);
  if (a.k === null) return new Date(BASE_UTC_MS + (a.p * PER_DOC_SLOTS + formatIndex) * DAY_MS);
  const slot = a.k * PER_DOC_SLOTS + formatIndex + 1;
  if (slot > ADDED_MAX_SLOTS) {
    throw new Error(
      `podcast-feed: too many documents added after ${DATED_DOC_IDS[a.p] ?? 'the start'} to fit between two ` +
        `frozen date slots (${docId}). Decide their dates explicitly.`,
    );
  }
  return new Date(BASE_UTC_MS + (a.p * PER_DOC_SLOTS + PER_DOC_SLOTS - 1) * DAY_MS + slot * ADDED_STEP_MS);
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
  // The frozen documents must still be in structure.json, in their frozen relative order,
  // or their fixed dates would no longer rise with the site order.
  const live = structure.layers.flatMap((l) => l.docs).filter((d) => FROZEN_INDEX.has(d));
  if (live.join('\n') !== DATED_DOC_IDS.join('\n')) {
    throw new Error(
      `podcast-feed: structure.json no longer lists the ${DATED_DOC_IDS.length} dated documents (DATED_DOC_IDS) ` +
        `in their frozen order. Removing or reordering one re-dates or drops live episodes; decide that explicitly.`,
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

/** Checked on what is ACTUALLY in the feed: dates strictly rise with itunes:order, every
 *  per-document date precedes the first Basics date, and every date precedes 8 Sep 2026. */
function assertFeedDates(items: FeedItem[], perDocCount: number): void {
  let last = -Infinity;
  items.forEach((it, i) => {
    const t = Date.parse(it.pubDate);
    if (!(t > last)) throw new Error(`podcast-feed: pubDate of item ${i + 1} (${it.guid}) does not rise with order`);
    if (t >= PREVIOUS_SHARED_DATE_MS) throw new Error(`podcast-feed: pubDate of ${it.guid} is not before 8 Sep 2026`);
    if (i < perDocCount && t >= BASICS_BASE_UTC_MS) {
      throw new Error(`podcast-feed: per-document pubDate of ${it.guid} is not before the first Basics date`);
    }
    last = t;
  });
}

export function feedItems(): FeedItem[] {
  assertDates();
  if (principlesInFeed()) assertPrinciplesFrozen();
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
      pubDate: rfc822(pubDateFor(r.episode.doc_id, r.formatIndex)),
    };
  });

  if (!basicsInFeed()) {
    assertFeedDates(docItems, docItems.length);
    return docItems;
  }
  assertBasicsFrozen();

  // THE BASICS: one season after every per-document season, in planned order, numbered
  // 1..N within it, continuing the global itunes:order. The episode at position i is the
  // topic planned at position i (basicsFeedEpisodes stops at the first gap), so its
  // number and its date are fixed by the plan and no later publish moves them.
  const basicsItems: FeedItem[] = basicsFeedEpisodes().map((ep, i) => ({
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
  const all = [...docItems, ...basicsItems];
  assertFeedDates(all, docItems.length);
  return all;
}
