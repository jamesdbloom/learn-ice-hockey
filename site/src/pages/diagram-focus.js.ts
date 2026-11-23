/**
 * /diagram-focus.js — the full-sheet diagram focus script, served as a same-origin
 * file because the production CSP is `script-src 'self'` with no `unsafe-inline`.
 *
 * The source is src/scripts/diagram-focus.js (read its header); this endpoint only
 * copies it into `dist` at build time. It lives under src/ rather than public/ so it
 * sits beside the plugin that loads it (src/plugins/rehype-corpus.mjs).
 */

import source from '../scripts/diagram-focus.js?raw';

export function GET() {
  return new Response(source, {
    headers: { 'content-type': 'text/javascript; charset=utf-8' },
  });
}
