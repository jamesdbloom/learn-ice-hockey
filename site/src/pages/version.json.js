/**
 * /version.json — the deployed build, machine-readable.
 *
 * `curl -s https://learn-ice-hockey.com/version.json` answers "what is actually
 * live right now?" without opening GitHub Actions or reading page source.
 *
 * The deploy workflow syncs this alongside the HTML, on the same short cache
 * lifetime, so it can never describe a build newer than the pages beside it.
 */

import { BUILD_VERSION } from '../lib/build-version.mjs';

export function GET() {
  return new Response(`${JSON.stringify(BUILD_VERSION, null, 2)}\n`, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // Belt and braces: the CloudFront/S3 cache-control set at sync time is
      // authoritative, but this keeps `astro preview` honest too.
      'cache-control': 'public, max-age=300',
    },
  });
}
