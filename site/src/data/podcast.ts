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
 */

import structure from './structure.json';
import conversationData from './podcast.json';
import principlesData from './podcast-principles.json';

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
