/**
 * EPUB 3 packager.
 *
 * Takes chapters that are already XHTML fragments and wraps them in the
 * container, package document and navigation an EPUB reader expects.
 *
 * Design note: chapters come from the **rendered site HTML**, not from a second
 * markdown pipeline. The build specification is explicit about this (§10.3) and
 * it is the right call — the corpus's facts blocks, rule-set callouts and
 * tables are produced by two custom rehype/remark plugins, and a parallel
 * renderer would drift from them silently.
 */

import { Zip } from './zip.mjs';

const NS = 'http://www.w3.org/1999/xhtml';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const CSS = `
:root { --fg:#1b1c1e; --muted:#5b5f66; --rule:#dedddc; --accent:#0f5a8f; }
body { font-family: Georgia, 'Times New Roman', serif; line-height: 1.6; color: var(--fg);
       margin: 0 5%; hyphens: auto; }
h1,h2,h3,h4 { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.25; margin: 1.6em 0 .5em; }
h1 { font-size: 1.7em; } h2 { font-size: 1.35em; } h3 { font-size: 1.12em; }
a { color: var(--accent); }
code, pre { font-family: 'SF Mono', Menlo, Consolas, monospace; font-size: .88em; }

/* The corpus's key-facts blocks. On the site these are styled panels; in EPUB
   they must stay visually distinct from body prose or the extraction layer
   reads as more prose. */
pre.facts, .facts { background:#f1f1ef; border-left:3px solid var(--accent);
  padding:.7em .9em; margin:1em 0; white-space:pre-wrap; font-size:.9em; }

blockquote { border-left:3px solid var(--rule); margin:1em 0; padding:.2em 0 .2em 1em;
  color: var(--muted); }

/* Wide tables are the known hard part (§10.3). Shrink and allow wrapping rather
   than clipping — a clipped rule-set comparison loses the column that matters. */
table { border-collapse: collapse; width:100%; font-size:.8em; margin:1em 0; }
th, td { border:1px solid var(--rule); padding:.35em .5em; text-align:left;
         word-wrap: break-word; }
th { background:#f1f1ef; }

hr { border:0; border-top:1px solid var(--rule); margin:2em 0; }
.sources { font-size:.85em; color: var(--muted); }
.byline { color: var(--muted); font-style: italic; margin-top:-.6em; }
`.trim();

function containerXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;
}

function packageOpf({ title, identifier, chapters, modified, subtitle, author }) {
  const items = chapters
    .map((c, i) => `    <item id="c${i}" href="${c.file}" media-type="application/xhtml+xml"/>`)
    .join('\n');
  const spine = chapters.map((c, i) => `    <itemref idref="c${i}"/>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="pub-id"
         xml:lang="en-GB">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="pub-id">${esc(identifier)}</dc:identifier>
    <dc:title>${esc(title)}</dc:title>
    <dc:creator id="author">${esc(author)}</dc:creator>
    <meta refines="#author" property="role" scheme="marc:relators">aut</meta>
    ${subtitle ? `<dc:description>${esc(subtitle)}</dc:description>` : ''}
    <dc:language>en-GB</dc:language>
    <dc:rights>© ${esc(author)}. Licensed CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/ — attribution required. Not affiliated with the NHL, IIHF, USA Hockey or Hockey Canada.</dc:rights>
    <meta property="dcterms:modified">${modified}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="css" href="style.css" media-type="text/css"/>
${items}
  </manifest>
  <spine>
    <itemref idref="nav"/>
${spine}
  </spine>
</package>`;
}

function navXhtml(title, chapters, author) {
  const lis = chapters
    .map((c) => `      <li><a href="${c.file}">${esc(c.title)}</a></li>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="${NS}" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en-GB" lang="en-GB">
<head><meta charset="utf-8"/><title>${esc(title)}</title>
<link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
  <h1>${esc(title)}</h1>
  <p class="byline">${esc(author)}</p>
  <nav epub:type="toc" id="toc">
    <h2>Contents</h2>
    <ol>
${lis}
    </ol>
  </nav>
</body>
</html>`;
}

function chapterXhtml(title, bodyXhtml) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="${NS}" xml:lang="en-GB" lang="en-GB">
<head><meta charset="utf-8"/><title>${esc(title)}</title>
<link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
${bodyXhtml}
</body>
</html>`;
}

/**
 * @param {{title:string, identifier:string, subtitle?:string, modified:string,
 *          author:string, mtime:Date,
 *          chapters:{file:string,title:string,body:string}[]}} spec
 * @returns {Buffer}
 */
export function buildEpub(spec) {
  const zip = new Zip(spec.mtime);
  // Must be first, and stored uncompressed with no extra field.
  zip.add('mimetype', 'application/epub+zip', { store: true });
  zip.add('META-INF/container.xml', containerXml());
  zip.add('OEBPS/style.css', CSS);
  zip.add('OEBPS/nav.xhtml', navXhtml(spec.title, spec.chapters, spec.author));
  zip.add('OEBPS/content.opf', packageOpf(spec));
  for (const c of spec.chapters) {
    zip.add(`OEBPS/${c.file}`, chapterXhtml(c.title, c.body));
  }
  return zip.end();
}
