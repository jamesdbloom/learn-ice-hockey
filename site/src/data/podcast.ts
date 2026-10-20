/**
 * The ONE place pages read podcast data from (project/podcast_two_formats.md).
 *
 * Each document can have two episodes, one per FORMAT:
 *   - Conversation        — NotebookLM, two hosts. `podcast.json`.
 *   - Playing principles  — ElevenLabs, one voice. `podcast-principles.json`.
 *
 * ⚠️ `podcast.json` IS NOT TO BE RESHAPED. Its guids, audio paths and byte sizes are
 * what live subscribers already hold; `scripts/build_podcast_audio.py`,
 * `scripts/podcast_queue.py` and `scripts/upload_podcast_audio.sh` all read it. This
 * module adapts it rather than changing it. Its `track` field is now HISTORICAL: the
 * feed's numbering comes from `position()` below, i.e. from structure.json, so the
 * show is grouped and ordered the way the website is.
 *
 * ⚠️ A GUID NEVER CHANGES. `guidFor()` is the old feed logic verbatim for
 * Conversation — the explicit `guid` if pinned (rink_map is), else
 * `learn-ice-hockey:<doc_id>` — and `site/scripts/check-podcast-guids.mjs` asserts the
 * built feed still carries exactly that set. A Playing principles episode MUST carry an
 * explicit `learn-ice-hockey:principles:<doc_id>` guid, written when it is first
 * published, so that a later document rename cannot move it.
 *
 * THE BASICS (owner, 20 October 2026) is a THIRD collection, `podcast-basics.json`, and
 * deliberately not a FORMAT: it is keyed by topic slug, not by document. See the
 * section at the end of this file.
 */

import structure from './structure.json';
import conversationData from './podcast.json';
import principlesData from './podcast-principles.json';
import basicsData from './podcast-basics.json';

export type FormatId = 'conversation' | 'principles';

export interface Episode {
  doc_id: string;
  title: string;
  section: string;
  /** Historical only, Conversation only. Not used for ordering any more. */
  track?: number;
  bytes: number;
  duration_s: number;
  audio: string;
  guid?: string;
}

export interface Format {
  id: FormatId;
  /** Shown on the site and in episode titles. Owner's wording, 16 October 2026. */
  label: string;
  /** Appended to `audio-position:<doc_id>`. Conversation's is EMPTY on purpose, so a
   *  listener's saved place from before this change still resumes. */
  storageSuffix: string;
  episodes: readonly Episode[];
}

export const FORMATS: readonly Format[] = [
  {
    id: 'conversation',
    label: 'Conversation',
    storageSuffix: '',
    episodes: conversationData.episodes as Episode[],
  },
  {
    id: 'principles',
    label: 'Playing principles',
    storageSuffix: ':principles',
    episodes: (principlesData.episodes ?? []) as Episode[],
  },
];

export function getFormat(id: FormatId): Format {
  const f = FORMATS.find((x) => x.id === id);
  if (!f) throw new Error(`podcast: unknown format "${id}"`);
  return f;
}

export interface FormatEpisode {
  format: Format;
  episode: Episode;
}

/** Every episode that exists for one document, in FORMATS order (Conversation first). */
export function episodesFor(docId: string): FormatEpisode[] {
  const out: FormatEpisode[] = [];
  for (const format of FORMATS) {
    const episode = format.episodes.find((e) => e.doc_id === docId);
    if (episode) out.push({ format, episode });
  }
  return out;
}

export interface Position {
  /** 1-based index of the document's section in structure.json — the feed's season. */
  season: number;
  layerId: string;
  layerTitle: string;
  /** 1-based index of the document within its section. */
  indexInSeason: number;
  /** 0-based index of the document in the whole-site reading order. */
  globalIndex: number;
}

const positions = new Map<string, Position>();
{
  let globalIndex = 0;
  structure.layers.forEach((layer, li) => {
    layer.docs.forEach((docId, di) => {
      positions.set(docId, {
        season: li + 1,
        layerId: layer.id,
        layerTitle: layer.title,
        indexInSeason: di + 1,
        globalIndex: globalIndex++,
      });
    });
  });
}

/** Where a document sits in the site, derived from structure.json. Throws for an id
 *  structure.json does not list, so an orphaned episode fails the build loudly. */
export function position(docId: string): Position {
  const p = positions.get(docId);
  if (!p) throw new Error(`podcast: "${docId}" has an episode but is not in structure.json`);
  return p;
}

/** Number of documents on the site — the target count for each format. */
export const DOCUMENT_COUNT = positions.size;

/** The episode's permanent guid. ⚠️ Conversation: the OLD feed logic, unchanged. */
export function guidFor(format: Format, ep: Episode): string {
  if (format.id === 'conversation') return ep.guid ?? `learn-ice-hockey:${ep.doc_id}`;
  if (!ep.guid) {
    throw new Error(
      `podcast: Playing principles episode "${ep.doc_id}" has no explicit guid. ` +
        `Write "learn-ice-hockey:principles:${ep.doc_id}" when it is first published, and never change it.`,
    );
  }
  return ep.guid;
}

/** Whole minutes, as shown on the toggle and the downloads page. */
export function minutes(durationS: number): number {
  return Math.max(1, Math.round(durationS / 60));
}

// Fail the build on a duplicate episode within one format: `episodesFor` would silently
// take the first and the feed would carry both.
for (const f of FORMATS) {
  const seen = new Set<string>();
  for (const ep of f.episodes) {
    if (seen.has(ep.doc_id)) throw new Error(`podcast: ${f.id} has two episodes for "${ep.doc_id}"`);
    seen.add(ep.doc_id);
    position(ep.doc_id);
  }
}

// ---- The Basics ----------------------------------------------------------------------
// About thirteen short TOPIC episodes, suitable for newer players or younger players
// (owner, 20 October 2026; project/podcast_principles_series_plan.md). ⚠️ DELIBERATELY
// NOT AN ENTRY IN `FORMATS`. A format is one episode PER DOCUMENT: `episodesFor()`,
// the page player, the downloads page and the per-format duplicate check above all
// assume a `doc_id`. A Basics episode is keyed by a topic slug and draws on one to
// three documents, so it is its own collection, emitted by the feed as one extra season
// after every per-document season (src/lib/podcast-feed.ts).

export interface BasicsTopic {
  slug: string;
  /** The topic, e.g. "Playing wing". Shown as "Playing wing — The Basics". */
  title: string;
  /** The corpus documents the episode draws on (doc_ids, one to three). */
  sources: readonly string[];
}

export interface BasicsEpisode extends BasicsTopic {
  bytes: number;
  duration_s: number;
  audio: string;
  /** `learn-ice-hockey:core:<slug>`, written on first publish and never changed. */
  guid: string;
}

export const BASICS_LABEL = 'The Basics';
export const BASICS_PATH = '/the-basics/';
export const BASICS_GUID_PREFIX = 'learn-ice-hockey:core:';

/** Every planned topic, in series order. */
export const BASICS_PLANNED: readonly BasicsTopic[] = basicsData.planned as BasicsTopic[];

const basicsIndex = new Map(BASICS_PLANNED.map((t, i) => [t.slug, i]));

/** The published episodes, in series (planned) order, whatever order the file holds. */
export const BASICS_EPISODES: readonly BasicsEpisode[] = [...((basicsData.episodes ?? []) as BasicsEpisode[])].sort(
  (a, b) => (basicsIndex.get(a.slug) ?? 0) - (basicsIndex.get(b.slug) ?? 0),
);

/** "Playing wing — The Basics": the owner's title pattern, 20 October 2026. */
export function basicsTitle(t: { title: string }): string {
  return `${t.title} — ${BASICS_LABEL}`;
}

/** 1-based position of a topic in the series. */
export function basicsNumber(slug: string): number {
  const i = basicsIndex.get(slug);
  if (i === undefined) throw new Error(`podcast: "${slug}" is not a planned Basics topic`);
  return i + 1;
}

/** The PUBLISHED Basics episodes that draw on this document, in series order. Empty
 *  until one is published, so a source page shows no link to an episode that does not
 *  exist yet. */
export function basicsFor(docId: string): BasicsEpisode[] {
  return BASICS_EPISODES.filter((e) => e.sources.includes(docId));
}

// Fail the build on a malformed Basics plan or episode list.
{
  const slugs = new Set<string>();
  for (const t of BASICS_PLANNED) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(t.slug)) throw new Error(`podcast: Basics slug "${t.slug}" is not lower-case words joined by "-"`);
    if (slugs.has(t.slug)) throw new Error(`podcast: Basics plans "${t.slug}" twice`);
    slugs.add(t.slug);
    if (!t.title?.trim()) throw new Error(`podcast: Basics topic "${t.slug}" has no title`);
    if (t.sources.length < 1 || t.sources.length > 3) throw new Error(`podcast: Basics topic "${t.slug}" must name 1 to 3 sources`);
    for (const d of t.sources) position(d);
  }
  const published = new Set<string>();
  for (const ep of BASICS_EPISODES) {
    if (!slugs.has(ep.slug)) throw new Error(`podcast: Basics episode "${ep.slug}" is not in \`planned\``);
    if (published.has(ep.slug)) throw new Error(`podcast: Basics has two episodes for "${ep.slug}"`);
    published.add(ep.slug);
    if (!ep.guid?.startsWith(BASICS_GUID_PREFIX)) throw new Error(`podcast: Basics episode "${ep.slug}" has no ${BASICS_GUID_PREFIX}<slug> guid`);
    if (!new RegExp(`^/audio/principles/basics/${ep.slug}-[0-9a-f]{8}\\.m4a$`).test(ep.audio)) {
      throw new Error(`podcast: Basics episode "${ep.slug}" audio ${ep.audio} is not /audio/principles/basics/${ep.slug}-<sha8>.m4a`);
    }
  }

  // ⚠️ GUIDS AND AUDIO PATHS ARE UNIQUE ACROSS EVERY COLLECTION. Two episodes sharing a
  // guid are one episode to every podcast client; two sharing a path play the same file.
  const guids = new Map<string, string>();
  const paths = new Map<string, string>();
  const claim = (m: Map<string, string>, key: string, who: string, what: string) => {
    const prev = m.get(key);
    if (prev) throw new Error(`podcast: ${what} ${key} is used by both ${prev} and ${who}`);
    m.set(key, who);
  };
  for (const f of FORMATS) {
    for (const ep of f.episodes) {
      const who = `${f.id} ${ep.doc_id}`;
      // guidFor throws for a principles episode with no guid; that check stays in guidFor.
      if (f.id === 'conversation' || ep.guid) claim(guids, guidFor(f, ep), who, 'guid');
      claim(paths, ep.audio, who, 'audio path');
    }
  }
  for (const ep of BASICS_EPISODES) {
    claim(guids, ep.guid, `basics ${ep.slug}`, 'guid');
    claim(paths, ep.audio, `basics ${ep.slug}`, 'audio path');
  }
}
