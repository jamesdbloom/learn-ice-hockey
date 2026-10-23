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
 * Playing principles: the feed carried NONE of them until every document had one
 * (owner's decision, same date); the gate opened that day. Since 22 October 2026 it is
 * STICKY, like the Basics': the 39 are LIVE and frozen below (LIVE_PRINCIPLES_GUIDS), so
 * a document added to the site later, with no episode yet, does not close it again. The
 * feed must carry exactly the explicit guids of every Playing principles episode.
 *
 * The Basics (owner, 20 October 2026): a TOPIC collection, `podcast-basics.json`, keyed by
 * slug, as ONE extra season after every structure.json section, in planned order. The
 * feed carried none of it until every planned topic was published. Since 21 October 2026
 * all 13 are LIVE and frozen below (LIVE_BASICS_GUIDS): the season stays in the feed
 * whatever `planned` later says, `planned` must BEGIN with those 13 in order (append-only),
 * and an appended topic joins the feed once it and every topic planned before it are
 * published. That rule is restated here too, not imported.
 *
 * Across ALL THREE collections, and whatever the feed carries: every guid and every audio
 * path is unique, and every Playing principles guid frozen below is still in
 * podcast-principles.json (a Detailed remake replaces an episode IN PLACE and keeps it).
 *
 * Also checked, because they are what the renumbering changed: orders 1..N in
 * sequence, episode numbers sequential within each season, seasons non-decreasing,
 * pubDates strictly increasing and before 8 September 2026 (the single date every
 * episode carried before), the pinned rink_map guid present, and — since 22 October
 * 2026 — every LIVE episode's pubDate equal to the date it was published with
 * (FROZEN DATES below), so adding a document to the site cannot re-date one.
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
const basicsData = readJson('src/data/podcast-basics.json');
const basicsPlanned = basicsData.planned ?? [];
const basicsEpisodes = basicsData.episodes ?? [];
const structure = readJson('src/data/structure.json');
const docCount = structure.layers.reduce((n, l) => n + l.docs.length, 0);

const PINNED_RINK_MAP = 'learn-ice-hockey:foundation/rink_map_and_glossary';

// ⚠️ THE GUIDS LIVE SUBSCRIBERS HOLD, FROZEN HERE (17 October 2026). Everything above
// derives the expected set from podcast.json, so a rewrite of podcast.json that dropped
// or altered a guid would agree with itself. This list does not move with the data: each
// of these must still be in the feed. The ENCLOSURE URL may change — since 17 October
// 2026 a re-made Conversation episode is served from a content-hashed
// /audio/<doc_id>-<sha8>.m4a, because CloudFront caches /audio/ for a year — but the
// guid may not. Add a guid here once its episode has been published; never remove one.
const LIVE_CONVERSATION_GUIDS = [
  'learn-ice-hockey:getting-started/getting_started',
  'learn-ice-hockey:reading-diagrams/reading_ice_hockey_diagrams',
  'learn-ice-hockey:foundation/rink_map_and_glossary',
  'learn-ice-hockey:foundation/rules_primer',
  'learn-ice-hockey:foundation/uk_rules',
  'learn-ice-hockey:foundation/on_ice_communication',
  'learn-ice-hockey:positions/center',
  'learn-ice-hockey:positions/winger',
  'learn-ice-hockey:positions/defender',
  'learn-ice-hockey:positions/goaltender',
  'learn-ice-hockey:positions/switching_positions',
  'learn-ice-hockey:systems/breakouts',
  'learn-ice-hockey:systems/zone_entries',
  'learn-ice-hockey:systems/offensive_zone_play',
  'learn-ice-hockey:systems/forechecking_systems',
  'learn-ice-hockey:systems/neutral_zone_systems',
  'learn-ice-hockey:systems/defensive_zone_coverage',
  'learn-ice-hockey:systems/defending_the_rush',
  'learn-ice-hockey:systems/special_teams',
  'learn-ice-hockey:systems/faceoffs',
  'learn-ice-hockey:systems/game_management',
  'learn-ice-hockey:technique/skating',
  'learn-ice-hockey:technique/puck_handling',
  'learn-ice-hockey:technique/passing_and_receiving',
  'learn-ice-hockey:technique/shooting',
  'learn-ice-hockey:technique/body_contact_and_battles',
  'learn-ice-hockey:hockey-iq/puck_support_and_spacing',
  'learn-ice-hockey:hockey-iq/time_and_space',
  'learn-ice-hockey:hockey-iq/scanning_and_anticipation',
  'learn-ice-hockey:hockey-iq/risk_management',
  'learn-ice-hockey:hockey-iq/playing_without_the_puck',
  'learn-ice-hockey:off-the-ice/equipment',
  'learn-ice-hockey:off-the-ice/conditioning_and_recovery',
  'learn-ice-hockey:off-the-ice/practice_and_development',
  'learn-ice-hockey:off-the-ice/mental_game',
  'learn-ice-hockey:off-the-ice/team_play_and_culture',
  'learn-ice-hockey:off-the-ice/how_to_watch_hockey',
  // First published 17 October 2026, minted in the derived form learn-ice-hockey:<doc_id>.
  'learn-ice-hockey:foundation/core_principles',
  'learn-ice-hockey:foundation/language_and_glossary',
];

// ⚠️ THE PLAYING PRINCIPLES GUIDS LIVE SUBSCRIBERS HOLD, FROZEN HERE (20 October 2026),
// for the same reason as the list above. All 39 have been in the feed since the 16 Oct
// gate opened. A Detailed remake replaces an episode IN PLACE (owner, 20 Oct 2026): new
// bytes, new hashed audio path, SAME guid. Never remove or reorder one.
// ⚠️ THE ORDER IS LOAD-BEARING: it is the site order of the 39 documents the live show
// was dated from (structure.json as of 22 October 2026), and FROZEN DATES below derives
// each live per-document episode's pubDate from a document's position in this list.
const LIVE_PRINCIPLES_GUIDS = [
  'learn-ice-hockey:principles:getting-started/getting_started',
  'learn-ice-hockey:principles:foundation/core_principles',
  'learn-ice-hockey:principles:reading-diagrams/reading_ice_hockey_diagrams',
  'learn-ice-hockey:principles:foundation/rink_map',
  'learn-ice-hockey:principles:foundation/language_and_glossary',
  'learn-ice-hockey:principles:foundation/rules_primer',
  'learn-ice-hockey:principles:foundation/uk_rules',
  'learn-ice-hockey:principles:foundation/on_ice_communication',
  'learn-ice-hockey:principles:positions/center',
  'learn-ice-hockey:principles:positions/winger',
  'learn-ice-hockey:principles:positions/defender',
  'learn-ice-hockey:principles:positions/goaltender',
  'learn-ice-hockey:principles:positions/switching_positions',
  'learn-ice-hockey:principles:systems/breakouts',
  'learn-ice-hockey:principles:systems/zone_entries',
  'learn-ice-hockey:principles:systems/offensive_zone_play',
  'learn-ice-hockey:principles:systems/forechecking_systems',
  'learn-ice-hockey:principles:systems/neutral_zone_systems',
  'learn-ice-hockey:principles:systems/defensive_zone_coverage',
  'learn-ice-hockey:principles:systems/defending_the_rush',
  'learn-ice-hockey:principles:systems/special_teams',
  'learn-ice-hockey:principles:systems/faceoffs',
  'learn-ice-hockey:principles:systems/game_management',
  'learn-ice-hockey:principles:technique/skating',
  'learn-ice-hockey:principles:technique/puck_handling',
  'learn-ice-hockey:principles:technique/passing_and_receiving',
  'learn-ice-hockey:principles:technique/shooting',
  'learn-ice-hockey:principles:technique/body_contact_and_battles',
  'learn-ice-hockey:principles:hockey-iq/puck_support_and_spacing',
  'learn-ice-hockey:principles:hockey-iq/time_and_space',
  'learn-ice-hockey:principles:hockey-iq/scanning_and_anticipation',
  'learn-ice-hockey:principles:hockey-iq/risk_management',
  'learn-ice-hockey:principles:hockey-iq/playing_without_the_puck',
  'learn-ice-hockey:principles:off-the-ice/equipment',
  'learn-ice-hockey:principles:off-the-ice/conditioning_and_recovery',
  'learn-ice-hockey:principles:off-the-ice/practice_and_development',
  'learn-ice-hockey:principles:off-the-ice/mental_game',
  'learn-ice-hockey:principles:off-the-ice/team_play_and_culture',
  'learn-ice-hockey:principles:off-the-ice/how_to_watch_hockey',
];

// ⚠️ THE BASICS GUIDS LIVE SUBSCRIBERS HOLD, FROZEN HERE (21 October 2026), IN SERIES
// ORDER. All 13 planned topics were published that day, which opened the Basics gate.
// From here the gate is STICKY: these must be in the feed, as the FIRST 13 items of the
// Basics season, in this order, whatever `planned` says — so a 14th planned topic can no
// longer close the gate, and removing, re-slugging or reordering a topic fails here
// instead of silently pulling or renumbering episodes. A re-made episode keeps its guid.
// Add a guid once its episode is live; never remove or reorder one.
const LIVE_BASICS_GUIDS = [
  'learn-ice-hockey:core:how-a-game-works',
  'learn-ice-hockey:core:gear-and-staying-safe',
  'learn-ice-hockey:core:skating',
  'learn-ice-hockey:core:carrying-the-puck',
  'learn-ice-hockey:core:passing-and-catching',
  'learn-ice-hockey:core:shooting',
  'learn-ice-hockey:core:playing-without-the-puck',
  'learn-ice-hockey:core:defending',
  'learn-ice-hockey:core:playing-centre',
  'learn-ice-hockey:core:playing-wing',
  'learn-ice-hockey:core:playing-defence',
  'learn-ice-hockey:core:playing-goal',
  'learn-ice-hockey:core:teamwork',
];

// ---- expected: the OLD logic, restated --------------------------------------
const expected = new Map(); // guid -> enclosure url
for (const ep of conversation) {
  expected.set(ep.guid ?? `learn-ice-hockey:${ep.doc_id}`, `${origin}${ep.audio}`);
}
// Sticky since 22 October 2026 (restated, not imported): live because the frozen list is
// non-empty, so a 40th document with no episode yet cannot pull the 39. Before that, the
// rule was the count — every document had to have an episode.
const principlesExpectedInFeed = LIVE_PRINCIPLES_GUIDS.length > 0 || principles.length >= docCount;
if (principlesExpectedInFeed) {
  for (const ep of principles) {
    if (!ep.guid) fail(`principles episode ${ep.doc_id} has no explicit guid`);
    else expected.set(ep.guid, `${origin}${ep.audio}`);
  }
}
// The Basics (restated, not imported — see the header). Before 21 October 2026: in the
// feed only when every planned topic had an episode. Since then: live, because
// LIVE_BASICS_GUIDS is non-empty, and `planned` must begin with those topics in order.
const BASICS_PREFIX = 'learn-ice-hockey:core:';
const basicsSlugs = new Set(basicsEpisodes.map((e) => e.slug));
const basicsExpectedInFeed =
  LIVE_BASICS_GUIDS.length > 0 ||
  (basicsPlanned.length > 0 && basicsPlanned.every((t) => basicsSlugs.has(t.slug)));
{
  const head = basicsPlanned.slice(0, LIVE_BASICS_GUIDS.length).map((t) => `${BASICS_PREFIX}${t.slug}`);
  if (head.join('\n') !== LIVE_BASICS_GUIDS.join('\n')) {
    fail(`podcast-basics.json \`planned\` no longer begins with the ${LIVE_BASICS_GUIDS.length} live Basics topics in order (frozen list; append new topics after them)`);
  }
  const dataGuids = new Set(basicsEpisodes.map((e) => e.guid));
  for (const g of LIVE_BASICS_GUIDS) {
    if (!dataGuids.has(g)) fail(`LIVE Basics guid ${g} is no longer in podcast-basics.json episodes (frozen list; a re-made episode keeps its guid)`);
  }
}
// ⚠️ FROZEN AT ITS LIVE VALUE (23 October 2026), not derived. It was restated as
// `structure.layers.length + 1` — the same formula as src/lib/podcast-feed.ts — so a new
// structure.json section would have moved all 13 live Basics episodes to a new
// itunes:season and this check would have agreed by construction. 8 = the 7 sections
// structure.json had when the Basics went live on 21 October 2026, plus one.
const BASICS_SEASON = 8;
if (structure.layers.length + 1 !== BASICS_SEASON) {
  fail(
    `structure.json has ${structure.layers.length} sections, but the live Basics season is itunes:season ${BASICS_SEASON} ` +
      `(frozen when there were ${BASICS_SEASON - 1}); a section added or removed renumbers or collides with live episodes — decide it with the owner`,
  );
}
const plannedIndex = new Map(basicsPlanned.map((t, i) => [t.slug, i]));
for (const ep of basicsEpisodes) {
  if (!plannedIndex.has(ep.slug)) fail(`basics episode ${ep.slug} is not in \`planned\``);
  if (ep.guid !== `${BASICS_PREFIX}${ep.slug}`) fail(`basics episode ${ep.slug}: guid ${ep.guid} is not ${BASICS_PREFIX}${ep.slug}`);
  if (!new RegExp(`^/audio/principles/basics/${ep.slug}-[0-9a-f]{8}\\.m4a$`).test(ep.audio ?? '')) {
    fail(`basics episode ${ep.slug}: audio ${ep.audio} is not /audio/principles/basics/${ep.slug}-<sha8>.m4a`);
  }
}
const expectedBasicsOrder = []; // guids, in planned order
if (basicsExpectedInFeed) {
  // Planned order, stopping at the first topic with no episode: an appended topic joins
  // only once every topic planned before it is published, so nothing in the feed is
  // ever renumbered or re-dated by a later publish.
  for (const t of basicsPlanned) {
    const ep = basicsEpisodes.find((e) => e.slug === t.slug);
    if (!ep) break;
    expected.set(ep.guid, `${origin}${ep.audio}`);
    expectedBasicsOrder.push(ep.guid);
  }
}
// No structure.json section may be called `basics`: a principles path
// /audio/principles/<section>/<stem>-<sha8>.m4a would then share the Basics folder.
if (structure.layers.some((l) => l.id === 'basics')) fail('a structure.json section is named "basics", which collides with /audio/principles/basics/');

// ---- uniqueness across ALL collections, in the data (not only the feed) ------
{
  const guids = new Map();
  const paths = new Map();
  const claim = (m, key, who, what) => {
    if (!key) return;
    if (m.has(key)) fail(`${what} ${key} is used by both ${m.get(key)} and ${who}`);
    else m.set(key, who);
  };
  for (const ep of conversation) {
    claim(guids, ep.guid ?? `learn-ice-hockey:${ep.doc_id}`, `conversation ${ep.doc_id}`, 'guid');
    claim(paths, ep.audio, `conversation ${ep.doc_id}`, 'audio path');
  }
  for (const ep of principles) {
    claim(guids, ep.guid, `principles ${ep.doc_id}`, 'guid');
    claim(paths, ep.audio, `principles ${ep.doc_id}`, 'audio path');
    if ((ep.audio ?? '').startsWith('/audio/principles/basics/')) fail(`principles ${ep.doc_id}: audio ${ep.audio} is inside the Basics folder`);
  }
  for (const ep of basicsEpisodes) {
    claim(guids, ep.guid, `basics ${ep.slug}`, 'guid');
    claim(paths, ep.audio, `basics ${ep.slug}`, 'audio path');
  }
  const principlesGuids = new Set(principles.map((e) => e.guid));
  for (const g of LIVE_PRINCIPLES_GUIDS) {
    if (!principlesGuids.has(g)) fail(`LIVE principles guid ${g} is no longer in podcast-principles.json (frozen list; a Detailed remake keeps the guid)`);
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
        : guid.startsWith(BASICS_PREFIX) && !basicsExpectedInFeed
          ? `Basics episode ${guid} is in the feed before all ${basicsPlanned.length} planned topics exist (owner, 20 Oct 2026)`
          : `UNEXPECTED guid ${guid}`,
    );
  }
}
if (!actual.has(PINNED_RINK_MAP)) fail(`pinned rink_map guid ${PINNED_RINK_MAP} is not in the feed`);
for (const guid of LIVE_CONVERSATION_GUIDS) {
  if (!actual.has(guid)) fail(`LIVE guid ${guid} is not in the feed (frozen list; a guid may never change)`);
}
// Unconditional: all 39 have been live since the 16 Oct gate opened, so a missing one is
// a dropped live episode whatever the gate rule above says.
for (const guid of LIVE_PRINCIPLES_GUIDS) {
  if (!actual.has(guid)) fail(`LIVE principles guid ${guid} is not in the feed (frozen list; a guid may never change)`);
}
// Unconditional, for the same reason: the 13 Basics have been live since 21 Oct 2026, as
// the first 13 items of their season, in this order.
for (const guid of LIVE_BASICS_GUIDS) {
  if (!actual.has(guid)) fail(`LIVE Basics guid ${guid} is not in the feed (frozen list; a guid may never change)`);
}
{
  const head = items.filter((it) => it.guid?.startsWith(BASICS_PREFIX)).slice(0, LIVE_BASICS_GUIDS.length).map((it) => it.guid);
  if (head.join('\n') !== LIVE_BASICS_GUIDS.join('\n')) {
    fail(`the Basics season does not open with the ${LIVE_BASICS_GUIDS.length} live guids in frozen order: ${head.join(', ')}`);
  }
  // FROZEN NUMBERING (23 October 2026): every live Basics item keeps the itunes:season and
  // itunes:episode it was published with — season BASICS_SEASON, episode = its 1-based
  // position in LIVE_BASICS_GUIDS — checked per guid, not derived from structure.json.
  const byGuid = new Map(items.map((it) => [it.guid, it]));
  LIVE_BASICS_GUIDS.forEach((g, j) => {
    const it = byGuid.get(g);
    if (!it) return; // reported above
    if (it.season !== BASICS_SEASON || it.episode !== j + 1) {
      fail(`LIVE Basics ${g} renumbered: feed has season ${it.season} episode ${it.episode}, frozen season ${BASICS_SEASON} episode ${j + 1}`);
    }
  });
}
// The Basics season: last, its own season number, in planned order.
{
  const basicsItems = items.filter((it) => it.guid?.startsWith(BASICS_PREFIX));
  const got = basicsItems.map((it) => it.guid);
  if (basicsExpectedInFeed && got.join('\n') !== expectedBasicsOrder.join('\n')) {
    fail(`Basics items are not in planned order: ${got.join(', ')}`);
  }
  for (const it of basicsItems) {
    if (it.season !== BASICS_SEASON) fail(`Basics item ${it.guid}: season ${it.season}, expected ${BASICS_SEASON}`);
  }
  const firstBasics = items.findIndex((it) => it.guid?.startsWith(BASICS_PREFIX));
  if (firstBasics >= 0 && items.slice(firstBasics).some((it) => !it.guid?.startsWith(BASICS_PREFIX))) {
    fail('a per-document item comes after the Basics season; the Basics must be appended last');
  }
}
// Conversation enclosures must be content-hashed: new bytes under an old /audio/ key are
// served stale from the edge for a year.
for (const ep of conversation) {
  const prefix = `/audio/${ep.doc_id}-`;
  if (!ep.audio.startsWith(prefix) || !/^[0-9a-f]{8}\.m4a$/.test(ep.audio.slice(prefix.length))) {
    fail(`Conversation ${ep.doc_id}: audio ${ep.audio} is not /audio/${ep.doc_id}-<sha8>.m4a`);
  }
}

// ---- numbering and dates ----------------------------------------------------
const CEILING = Date.UTC(2026, 8, 8);
let lastSeason = 0;
let lastEpisode = 0;
let lastDate = -Infinity;
items.forEach((it, i) => {
  const where = `item ${i + 1} (${it.guid})`;
  if (it.order !== i + 1) fail(`${where}: itunes:order ${it.order}, expected ${i + 1}`);
  const maxSeason = structure.layers.length + (basicsExpectedInFeed ? 1 : 0);
  if (!(it.season >= 1 && it.season <= maxSeason)) fail(`${where}: season ${it.season} out of range`);
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

// ---- FROZEN DATES (22 October 2026) -----------------------------------------
// ⚠️ Restated, not imported. Every LIVE item's pubDate must be exactly the date it was
// published with. Until 22 October 2026 a per-document date came from the document's
// running index in structure.json, so inserting a document mid-site re-dated every live
// episode after it; nothing here caught that, because the dates still rose with order.
//   per-document: 1 Jun 2026 12:00 UTC + (i × 2 + f) days, i = the document's index in
//                 LIVE_PRINCIPLES_GUIDS (the frozen site order), f = 0 Conversation,
//                 1 Playing principles
//   Basics:       18 Aug 2026 12:00 UTC + j × 12 hours, j = index in LIVE_BASICS_GUIDS
// A document or topic added later is not frozen here; it is held only to the ordering
// and ceiling checks above.
{
  const DAY = 86_400_000;
  const BASE = Date.UTC(2026, 5, 1, 12, 0, 0);
  const BASICS_BASE = Date.UTC(2026, 7, 18, 12, 0, 0);
  const frozenDate = new Map();
  const convGuid = new Map(conversation.map((ep) => [ep.doc_id, ep.guid ?? `learn-ice-hockey:${ep.doc_id}`]));
  LIVE_PRINCIPLES_GUIDS.forEach((g, i) => {
    const docId = g.slice('learn-ice-hockey:principles:'.length);
    frozenDate.set(g, BASE + (i * 2 + 1) * DAY);
    const cg = convGuid.get(docId);
    if (!cg) fail(`no Conversation episode in podcast.json for frozen document ${docId}`);
    else frozenDate.set(cg, BASE + i * 2 * DAY);
  });
  LIVE_BASICS_GUIDS.forEach((g, j) => frozenDate.set(g, BASICS_BASE + j * (DAY / 2)));
  for (const g of LIVE_CONVERSATION_GUIDS) {
    if (!frozenDate.has(g)) fail(`LIVE guid ${g} has no frozen date (its document is not in LIVE_PRINCIPLES_GUIDS order)`);
  }
  for (const it of items) {
    const want = frozenDate.get(it.guid);
    if (want === undefined) continue;
    if (Date.parse(it.pubDate ?? '') !== want) {
      fail(`pubDate MOVED for live ${it.guid}: feed has ${it.pubDate}, frozen ${new Date(want).toUTCString()}`);
    }
  }
}

const seasons = new Set(items.map((i) => i.season));
const summary =
  `${items.length} items in ${seasons.size} seasons; ${expected.size} expected guids ` +
  `(${conversation.length} Conversation` +
  (principlesExpectedInFeed ? `, ${principles.length} Playing principles` : `; Playing principles held back, ${principles.length}/${docCount} exist`) +
  (basicsExpectedInFeed ? `, ${basicsEpisodes.length} Basics` : `; Basics held back, ${basicsEpisodes.length}/${basicsPlanned.length} planned exist`) +
  `); ${LIVE_CONVERSATION_GUIDS.filter((g) => actual.has(g)).length}/${LIVE_CONVERSATION_GUIDS.length} frozen live guids present; ` +
  `${LIVE_PRINCIPLES_GUIDS.filter((g) => actual.has(g)).length}/${LIVE_PRINCIPLES_GUIDS.length} frozen principles guids in feed; ` +
  `${LIVE_BASICS_GUIDS.filter((g) => actual.has(g)).length}/${LIVE_BASICS_GUIDS.length} frozen Basics guids in feed; pinned rink_map guid ${actual.has(PINNED_RINK_MAP) ? 'present' : 'ABSENT'}`;

if (failures.length) {
  console.error(`check-podcast-guids: FAIL — ${summary}`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`check-podcast-guids: ${summary} — every guid and enclosure URL matches the pre-renumbering set.`);
