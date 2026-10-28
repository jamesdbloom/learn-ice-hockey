/**
 * Build the skating-drill diagrams for "Practising on Your Own".
 *
 * Reads every module in src/drills/*.mjs (each default-exports an array of
 * { id, group, title, svg, card }) and writes:
 *
 *   public/drills/<id>.svg   the standalone SVG, ids prefixed (see below)
 *   src/data/drills.json     { <id>: { id, title, group, alt, svg } }
 *
 * Content embeds a drill as `![](drill:<id>)`. remark-corpus.mjs inlines the SVG
 * from public/drills/ and md_to_speech.py voices nothing for it (the page prose
 * describes each drill), but both resolve the id against drills.json and fail on
 * an unknown one, so a typo cannot ship as a silently missing picture.
 *
 * WHY THE IDS ARE PREFIXED. The drawing kit gives every SVG the same internal ids
 * (`t`, `d`, `ah-L`, `ah-travel` …). Inlined, fifty of them on one page would
 * collide: every `aria-labelledby="t d"` would name the FIRST drill, and every
 * `url(#ah-L)` arrowhead would resolve to the first drill's marker. So each id is
 * rewritten to `drill-<id>-<old>` here, once, and every reference with it.
 *
 * WHY `alt` IS THE <desc>. The desc is the drawn description written with the
 * picture. It is the accessible description of the inlined SVG; drills.json
 * carries a decoded copy so anything that needs plain alt text has it.
 *
 * The `card` (draft step text and owner-review notes) is deliberately NOT carried:
 * the page's prose is written and reviewed in content/, not here.
 *
 * Usage:  node scripts/build-drills.mjs
 */
import { readdirSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, '..', 'src', 'drills');
const OUT = join(HERE, '..', 'public', 'drills');
const MANIFEST = join(HERE, '..', 'src', 'data', 'drills.json');

const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const decode = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'").replace(/&amp;/g, '&');

function prefixIds(svg, id) {
  const ids = [...svg.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const map = new Map(ids.map((old) => [old, `drill-${id}-${old}`]));
  let out = svg.replace(/(\sid=")([^"]+)(")/g, (m, a, old, b) => a + map.get(old) + b);
  out = out.replace(/url\(#([^)]+)\)/g, (m, old) => {
    if (!map.has(old)) throw new Error(`drill "${id}": url(#${old}) points at no id in its SVG`);
    return `url(#${map.get(old)})`;
  });
  out = out.replace(/(aria-(?:labelledby|describedby)=")([^"]+)(")/g, (m, a, list, b) =>
    a + list.split(/\s+/).map((old) => {
      if (!map.has(old)) throw new Error(`drill "${id}": ${a.trim()} names "${old}", which is not in its SVG`);
      return map.get(old);
    }).join(' ') + b);
  if (/href="#/.test(out)) throw new Error(`drill "${id}": an href="#…" reference is not handled by prefixIds`);
  return out;
}

const files = readdirSync(SRC).filter((f) => f.endsWith('.mjs')).sort();
if (!files.length) throw new Error(`build-drills: no drill modules in ${SRC}`);

const manifest = {};
const svgs = new Map();
for (const f of files) {
  const mod = await import(pathToFileURL(join(SRC, f)).href);
  if (!Array.isArray(mod.default)) throw new Error(`${f}: default export is not an array of drills`);
  for (const d of mod.default) {
    const where = `${f}: drill "${d?.id}"`;
    if (!d?.id || !ID_RE.test(d.id)) throw new Error(`${where}: id must be lower-case words joined by hyphens`);
    if (manifest[d.id]) throw new Error(`${where}: duplicate id (also in ${manifest[d.id].file})`);
    if (!d.title || !d.group || typeof d.svg !== 'string') throw new Error(`${where}: missing title, group or svg`);
    const desc = /<desc[^>]*>([\s\S]*?)<\/desc>/.exec(d.svg);
    const alt = desc ? decode(desc[1]).replace(/\s+/g, ' ').trim() : '';
    if (!alt) throw new Error(`${where}: its SVG has no <desc>, so it would ship with no text alternative`);
    svgs.set(d.id, prefixIds(d.svg, d.id));
    manifest[d.id] = { id: d.id, title: d.title, group: d.group, alt, svg: `/drills/${d.id}.svg`, file: f };
  }
}

// Clear the output first so a renamed or removed drill does not leave a stale file
// behind that a mistyped reference could still resolve against.
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
for (const [id, svg] of svgs) writeFileSync(join(OUT, `${id}.svg`), svg + '\n');
const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
console.log(`build-drills: ${svgs.size} drills from ${files.length} module(s) -> public/drills/, src/data/drills.json`);
