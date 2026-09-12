/**
 * The site's information architecture: the corpus's own five-layer framing
 * (plus "Getting Started" before it and "Off the Ice" underneath), in the
 * corpus's own reading order. Not alphabetical, deliberately.
 *
 * The ordering lives in structure.json; titles and descriptions come from
 * docs-meta.json, generated from the content by scripts/extract-meta.mjs.
 */

import structure from './structure.json';
import meta from './docs-meta.json';

export interface DocMeta {
  id: string;
  title: string;
  description: string;
  related: { text: string; href: string }[];
}

export interface DocEntry extends DocMeta {
  href: string;
  layerId: string;
  layerTitle: string;
  /** Zero-based position in the whole-corpus reading order. */
  order: number;
}

export interface Layer {
  id: string;
  title: string;
  tagline: string;
  blurb: string;
  /* Optional. A section whose pages share a structure worth explaining carries it
     here, as one paragraph per entry, and the hub renders them under the card grid.
     Only `positions` has one: its three skater documents share a zone-by-situation
     grid and the goaltender document deliberately does not, which a reader choosing
     between them needs before they open one. Absent everywhere else, so the hub
     must render nothing at all when it is missing. */
  layout?: string[];
  docs: DocEntry[];
}

const docsMeta = meta.docs as Record<string, DocMeta>;

let cursor = 0;
export const LAYERS: Layer[] = structure.layers.map((layer) => ({
  id: layer.id,
  title: layer.title,
  tagline: layer.tagline,
  blurb: layer.blurb,
  ...('layout' in layer ? { layout: (layer as { layout: string[] }).layout } : {}),
  docs: layer.docs.map((id) => {
    const m = docsMeta[id];
    if (!m) {
      throw new Error(
        `nav: "${id}" is in structure.json but not in docs-meta.json. Run "npm run prepare:meta".`,
      );
    }
    return {
      ...m,
      href: `/${id}/`,
      layerId: layer.id,
      layerTitle: layer.title,
      order: cursor++,
    };
  }),
}));

/** Flat reading order, used for previous/next links. */
export const READING_ORDER: DocEntry[] = LAYERS.flatMap((l) => l.docs);

const byId = new Map(READING_ORDER.map((d) => [d.id, d]));

export function getDoc(id: string): DocEntry {
  const doc = byId.get(id);
  if (!doc) throw new Error(`nav: no document registered with id "${id}"`);
  return doc;
}

export function getNeighbours(id: string): { prev?: DocEntry; next?: DocEntry } {
  const doc = getDoc(id);
  return {
    prev: READING_ORDER[doc.order - 1],
    next: READING_ORDER[doc.order + 1],
  };
}

export const DOC_COUNT = READING_ORDER.length;
