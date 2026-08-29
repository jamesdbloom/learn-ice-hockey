import type { APIRoute } from 'astro';
import { LAYERS, READING_ORDER } from '../data/nav';

/** Hand-rolled so the site keeps exactly one production dependency. */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('http://localhost/')).origin;
  // /offline/ is deliberately absent — it is a service-worker fallback, not a
  // page anyone should reach from a search result.
  // The eight section hubs are listed before the documents they contain. They
  // are real pages now (src/pages/[layer]/index.astro); while they were not, a
  // sitemap naming them would have been advertising eight 404s to a crawler.
  const paths = [
    '/',
    '/search/',
    '/downloads/',
    ...LAYERS.map((l) => `/${l.id}/`),
    ...READING_ORDER.map((d) => d.href),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${origin}${p}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
