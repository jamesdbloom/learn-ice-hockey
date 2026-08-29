import type { APIRoute } from 'astro';
import { LAYERS, READING_ORDER } from '../data/nav';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_AUTHOR } from '../consts';

/**
 * RSS 2.0 feed. Hand-rolled, like the sitemap, so the site keeps exactly one
 * production dependency.
 *
 * ORDER. The items are the corpus's reading order, not a date order, because
 * the corpus has no date order — it is a book, not a blog. A reader who
 * subscribes gets the documents in the sequence they are meant to be read.
 *
 * NO pubDate. This is the same decision BaseHead makes about `datePublished`
 * and CiteThis makes about "accessed on": the corpus carries no per-document
 * dates, and a date generated at build time is a claim the build cannot
 * support — every document would appear to have been published the moment the
 * site was last compiled, and every rebuild would republish all 37 to every
 * subscriber. `lastBuildDate` on the channel is a fact about the build and is
 * true, so that one is emitted.
 *
 * The guid is the URL and is marked isPermaLink="true", so a reader who has
 * seen a document never sees it again just because the site was rebuilt.
 */

/** Escape the five XML significant characters. The corpus uses real typographic
 *  punctuation — em dashes, curly quotes — which is valid UTF-8 XML and is left
 *  alone; only the characters that would change the markup's structure are
 *  replaced. */
function xml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('http://localhost/')).origin;
  const layerTitle = new Map(LAYERS.map((l) => [l.id, l.title]));

  const items = READING_ORDER.map((doc) => {
    const url = `${origin}${doc.href}`;
    return [
      '    <item>',
      `      <title>${xml(doc.title)}</title>`,
      `      <link>${xml(url)}</link>`,
      `      <guid isPermaLink="true">${xml(url)}</guid>`,
      `      <description>${xml(doc.description)}</description>`,
      `      <category>${xml(layerTitle.get(doc.layerId) ?? doc.layerId)}</category>`,
      '    </item>',
    ].join('\n');
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(SITE_TITLE)}</title>
    <link>${origin}/</link>
    <description>${xml(SITE_DESCRIPTION)}</description>
    <language>en-GB</language>
    <copyright>${xml(`© ${new Date().getFullYear()} ${SITE_AUTHOR}. Licensed CC BY-NC 4.0.`)}</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
