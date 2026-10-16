#!/usr/bin/env node
/**
 * Asserts the BUILT podcast feed still carries exactly the episode identities live
 * subscribers already hold.
 *
 * ⚠️ WHY THIS EXISTS. On 16 October 2026 the owner had the live show renumbered and
 * re-dated (seasons by site section, project/podcast_two_formats.md) on the condition
 * that every guid stays the same. A changed guid makes every podcast client drop the
 * episode and re-download it as new; a changed enclosure URL can break a download in
 * flight. Neither shows up in any page check — check-links.mjs skips /audio/ on
 * purpose — so this reads `dist/feed/podcast.xml` and compares it with the set the
 * PRE-RENUMBERING feed logic derives from `src/data/podcast.json`:
 *
 *     guid      = ep.guid ?? `learn-ice-hockey:${ep.doc_id}`
 *     enclosure = `${site}${ep.audio}`
 *
 * ⚠️ That logic is RE-STATED HERE ON PURPOSE, not imported from src/data/podcast.ts.
 * A check that imports the code it checks agrees with it by construction.
 *
 * Playing principles: the feed must carry NONE of them until every document has one
 * (owner's decision, same date); after that it must carry exactly their explicit
 * guids. The count rule is restated here for the same reason.
 *
 * Also checked, because they are what the renumbering changed: orders 1..N in
 * sequence, episode numbers sequential within each season, seasons non-decreasing,
 * pubDates strictly increasing, fixed, and before 8 September 2026 (the single date
 * every episode carried before), and the pinned rink_map guid present.
 *
 * Usage: node scripts/check-podcast-guids.mjs [distDir]
 *   distDir is resolved against the current directory; with no argument it is site/dist.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = process.argv[2] ? resolve(process.cwd(), process.argv[2]) : resolve(root, 'dist');
const feedPath = resolve(dist, 'feed/podcast.xml');

const failures = [];
const fail = (msg) => failures.push(msg);

if (!existsSync(feedPath)) {
  console.error(`check-podcast-guids: ${feedPath} does not exist — build first. Refusing to pass.`);
  process.exit(1);
}

const config = readFileSync(resolve(root, 'astro.config.mjs'), 'utf8');
const siteMatch = config.match(/\bsite:\s*['"]([^'"]+)['"]/);
if (!siteMatch) {
  console.error('check-podcast-guids: could not read `site:` from astro.config.mjs');
  process.exit(1);
}
const origin = new URL(siteMatch[1]).origin;

const readJson = (p) => JSON.parse(readFileSync(resolve(root, p), 'utf8'));
const conversation = readJson('src/data/podcast.json').episodes;
const principles = readJson('src/data/podcast-principles.json').episodes ?? [];
const structure = readJson('src/data/structure.json');
const docCount = structure.layers.reduce((n, l) => n + l.docs.length, 0);

const PINNED_RINK_MAP = 'learn-ice-hockey:foundation/rink_map_and_glossary';

// ---- expected: the OLD logic, restated --------------------------------------
const expected = new Map(); // guid -> enclosure url
for (const ep of conversation) {
  expected.set(ep.guid ?? `learn-ice-hockey:${ep.doc_id}`, `${origin}${ep.audio}`);
}
const principlesExpectedInFeed = principles.length >= docCount;
if (principlesExpectedInFeed) {
  for (const ep of principles) {
    if (!ep.guid) fail(`principles episode ${ep.doc_id} has no explicit guid`);
    else expected.set(ep.guid, `${origin}${ep.audio}`);
  }
}
if (!expected.has(PINNED_RINK_MAP)) {
  fail(`podcast.json no longer carries the pinned rink_map guid ${PINNED_RINK_MAP}`);
}

// ---- actual: the built feed -------------------------------------------------
const xml = readFileSync(feedPath, 'utf8');
const unescape = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
  const body = m[1];
  const tag = (name) => {
    const t = body.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
    return t ? unescape(t[1]) : undefined;
  };
  const enc = body.match(/<enclosure\s+url="([^"]*)"/);
  return {
    guid: tag('guid'),
    enclosure: enc ? unescape(enc[1]) : undefined,
    season: Number(tag('itunes:season')),
    episode: Number(tag('itunes:episode')),
    order: Number(tag('itunes:order')),
    pubDate: tag('pubDate'),
    title: tag('title'),
  };
});

const actual = new Map();
for (const it of items) {
  if (!it.guid) fail(`an item has no <guid>: ${it.title}`);
  if (!it.enclosure) fail(`an item has no enclosure url: ${it.title}`);
  if (actual.has(it.guid)) fail(`duplicate guid in feed: ${it.guid}`);
  actual.set(it.guid, it.enclosure);
}

for (const [guid, url] of expected) {
  if (!actual.has(guid)) fail(`MISSING guid ${guid}`);
  else if (actual.get(guid) !== url) fail(`enclosure moved for ${guid}: expected ${url}, feed has ${actual.get(guid)}`);
}
for (const guid of actual.keys()) {
  if (!expected.has(guid)) {
    fail(
      guid.startsWith('learn-ice-hockey:principles:') && !principlesExpectedInFeed
        ? `Playing principles episode ${guid} is in the feed before all ${docCount} exist (owner, 16 Oct 2026)`
        : `UNEXPECTED guid ${guid}`,
    );
  }
}
if (!actual.has(PINNED_RINK_MAP)) fail(`pinned rink_map guid ${PINNED_RINK_MAP} is not in the feed`);

// ---- numbering and dates ----------------------------------------------------
const CEILING = Date.UTC(2026, 8, 8);
let lastSeason = 0;
let lastEpisode = 0;
let lastDate = -Infinity;
items.forEach((it, i) => {
  const where = `item ${i + 1} (${it.guid})`;
  if (it.order !== i + 1) fail(`${where}: itunes:order ${it.order}, expected ${i + 1}`);
  if (!(it.season >= 1 && it.season <= structure.layers.length)) fail(`${where}: season ${it.season} out of range`);
  if (it.season < lastSeason) fail(`${where}: season went backwards`);
  const expectedEpisode = it.season === lastSeason ? lastEpisode + 1 : 1;
  if (it.episode !== expectedEpisode) fail(`${where}: itunes:episode ${it.episode}, expected ${expectedEpisode}`);
  lastSeason = it.season;
  lastEpisode = it.episode;
  const t = Date.parse(it.pubDate ?? '');
  if (Number.isNaN(t)) fail(`${where}: unparseable pubDate ${it.pubDate}`);
  else {
    if (t <= lastDate) fail(`${where}: pubDate ${it.pubDate} does not increase with order`);
    if (t >= CEILING) fail(`${where}: pubDate ${it.pubDate} is not before 8 Sep 2026`);
    lastDate = t;
  }
});

const seasons = new Set(items.map((i) => i.season));
const summary =
  `${items.length} items in ${seasons.size} seasons; ${expected.size} expected guids ` +
  `(${conversation.length} Conversation` +
  (principlesExpectedInFeed ? `, ${principles.length} Playing principles` : `; Playing principles held back, ${principles.length}/${docCount} exist`) +
  `); pinned rink_map guid ${actual.has(PINNED_RINK_MAP) ? 'present' : 'ABSENT'}`;

if (failures.length) {
  console.error(`check-podcast-guids: FAIL — ${summary}`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`check-podcast-guids: ${summary} — every guid and enclosure URL matches the pre-renumbering set.`);
