// Assemble the private preview page for the owner: every drill's SVG beside its card.
// Reads the one source, site/src/drills/ (the modules the site builds from).
// Usage (from repo root): node project/getting_better_drafts/preview.mjs  -> out/skating-drills.html
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, '..', '..', 'site', 'src', 'drills');
const OUT = join(HERE, 'out');
mkdirSync(OUT, { recursive: true });
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const files = readdirSync(SRC).filter((f) => f.endsWith('.mjs') && !f.startsWith('00_')).sort();
const drills = [];
for (const f of files) {
  const mod = await import(pathToFileURL(join(SRC, f)).href);
  drills.push(...mod.default);
}
const groups = [];
for (const d of drills) {
  let g = groups.find((x) => x.name === d.group);
  if (!g) groups.push((g = { name: d.group, items: [] }));
  g.items.push(d);
}
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

let n = 0;
const sections = groups.map((g) => `
<section class="group" id="${slug(g.name)}">
  <h2>${esc(g.name)} <span class="count">${g.items.length}</span></h2>
  ${g.items.map((d) => { n++; return `
  <article class="drill" id="${esc(d.id)}">
    <div class="fig"><div class="svgwrap">${d.svg.replace(/ width="[\d.]+" height="[\d.]+"/, '')}</div></div>
    <div class="card">
      <p class="num">Drill ${n}</p>
      <h3>${esc(d.title)}</h3>
      <p class="trains">${esc(d.card.trains)}</p>
      <ol class="steps">${(d.card.steps || []).map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
      <p class="mistake"><span class="lbl">Common mistake</span> ${esc(d.card.mistake)}</p>
      ${d.card.check ? `<div class="check"><span class="lbl">For you to confirm</span> ${esc(d.card.check)}</div>` : ''}
    </div>
  </article>`; }).join('')}
</section>`).join('');

const html = `<title>Skating Drill Drafts</title>
<meta name="claude:viewport-fit-sides" content="cover">
<style>
/* Layout: a working proof sheet — figure left, card right, stacking on phones. */
:root{
  --bg:#f3f6f8; --panel:#ffffff; --fg:#1d2933; --muted:#566673; --rule:#d6e0e7;
  --accent:#1f6fd1; --warm:#e0731b; --check-bg:#fff6e5; --check-fg:#7a4a00;
  --ok:#2f7d4f; --mid:#9a6b00; --bad:#a33a2b;
  --display:"Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
  --body:"Source Sans 3", system-ui, -apple-system, "Segoe UI", sans-serif;
}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){
  --bg:#12181d; --panel:#1b232a; --fg:#e4ebf0; --muted:#9fb0bd; --rule:#2c3943;
  --accent:#6fa8ff; --warm:#ffa25c; --check-bg:#3a2d12; --check-fg:#ffd58a;
  --ok:#7fd3a0; --mid:#e9c46a; --bad:#ff9a8a; color-scheme:dark}}
:root[data-theme="dark"]{
  --bg:#12181d; --panel:#1b232a; --fg:#e4ebf0; --muted:#9fb0bd; --rule:#2c3943;
  --accent:#6fa8ff; --warm:#ffa25c; --check-bg:#3a2d12; --check-fg:#ffd58a;
  --ok:#7fd3a0; --mid:#e9c46a; --bad:#ff9a8a; color-scheme:dark}
body{background:var(--bg);color:var(--fg);font-family:var(--body);font-size:16px;line-height:1.5}
.wrap{max-width:1180px;margin:0 auto;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));padding-block:28px 64px}
header h1{font-family:var(--display);font-weight:700;font-size:2.4rem;letter-spacing:.01em;margin:0 0 .25rem;text-wrap:balance}
header p{color:var(--muted);max-width:68ch;margin:.25rem 0}
.draft{display:inline-block;font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--warm);color:var(--warm);border-radius:4px;padding:1px 7px;margin-bottom:.6rem}
nav{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 8px}
nav a{color:var(--fg);text-decoration:none;border:1px solid var(--rule);background:var(--panel);border-radius:999px;padding:4px 12px;font-size:.9rem}
nav a:hover,nav a:focus-visible{border-color:var(--accent);outline:none}
.group h2{font-family:var(--display);font-size:1.7rem;margin:36px 0 12px;border-bottom:2px solid var(--rule);padding-bottom:4px}
.count{font-family:var(--body);font-size:.9rem;color:var(--muted);font-weight:400}
.drill{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:20px;background:var(--panel);border:1px solid var(--rule);border-radius:10px;padding:16px;margin:14px 0}
@media (max-width:820px){.drill{grid-template-columns:minmax(0,1fr)}}
.fig{min-width:0}
.svgwrap{overflow-x:auto;border-radius:8px}
.svgwrap svg{display:block;width:100%;height:auto;min-width:520px}
.card{min-width:0}
.num{margin:0;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.card h3{font-family:var(--display);font-size:1.45rem;margin:.1rem 0 .4rem;line-height:1.15;text-wrap:balance}
.trains{margin:.2rem 0 .6rem}
.steps{margin:.2rem 0 .7rem;padding-left:1.4rem}
.steps li{margin:.15rem 0}
.lbl{display:inline-block;font-size:.72rem;letter-spacing:.07em;text-transform:uppercase;font-weight:700;margin-right:.35rem;color:var(--muted)}
.mistake,.where{margin:.35rem 0}
.where.w-public .lbl{color:var(--ok)}
.where.w-quiet .lbl{color:var(--mid)}
.where.w-practice .lbl{color:var(--bad)}
.check{margin-top:.6rem;background:var(--check-bg);color:var(--check-fg);border-radius:8px;padding:8px 10px;font-size:.95rem}
.check .lbl{color:var(--check-fg)}
footer{color:var(--muted);font-size:.9rem;margin-top:40px}
</style>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Source+Sans+3:wght@400;600;700&display=swap">
<div class="wrap">
<header>
  <span class="draft">Draft for review</span>
  <h1>Skating Drill Drafts</h1>
  <p>Every public-skating drill from your list, drawn from above with a short card beside it. Blue is the left foot, orange the right; a hollow skate is a lifted foot; dotted lines are in the air; the grey arrow is the direction of travel.</p>
  <p>Amber boxes are how a drill name was read where the name is coaching slang. Correct anything that is off and the diagram and card will be redrawn.</p>
</header>
<nav aria-label="Drill groups">${groups.map((g) => `<a href="#${slug(g.name)}">${esc(g.name)} (${g.items.length})</a>`).join('')}</nav>
${sections}
<footer>${n} drills. Drafts only: not on the public site.</footer>
</div>`;
writeFileSync(join(OUT, 'skating-drills.html'), html);
console.log(`${n} drills in ${groups.length} groups -> out/skating-drills.html`);
