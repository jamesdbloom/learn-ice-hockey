#!/usr/bin/env node
/**
 * Runs the Astro CLI with anonymous usage telemetry switched off.
 *
 * Astro's telemetry is CLI-side and opt-out. The build sends nothing anywhere, and the
 * browser's only off-origin requests are the production Google Analytics tag
 * (injected when PUBLIC_GA_ID is set; local builds have none) — so the opt-out is wired into the scripts rather than left
 * to each developer to remember. A wrapper is used instead of an inline
 * `VAR=1 astro …` prefix so the scripts work on Windows too.
 *
 * Usage: node scripts/astro.mjs <astro subcommand> [...args]
 */

import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

process.env.ASTRO_TELEMETRY_DISABLED = '1';

const require = createRequire(import.meta.url);
const pkg = require.resolve('astro/package.json');
const bin = path.join(path.dirname(pkg), require('astro/package.json').bin.astro);

await import(pathToFileURL(bin).href);
