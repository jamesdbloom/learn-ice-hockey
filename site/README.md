# Site

The static website for the ice hockey learning corpus. Astro, TypeScript, Pagefind.
Phase 3 of [`project/site_build_specification.md`](../project/site_build_specification.md).

**The site reads `../content` and never writes to it.** `content/` is the source of truth; the
build derives everything it needs from the markdown as it stands.

---

## Requirements

| | |
|---|---|
| Node | **≥ 22.12** (Astro 7's floor). `node -v` |
| npm | ≥ 9.6.5 |

## Develop

```bash
cd site
npm install
npm run dev          # http://localhost:4321
```

`npm run dev` regenerates `src/data/docs-meta.json` from the corpus first (see
[Metadata](#metadata-extraction) below), then starts Astro.

**Search does not work in `npm run dev`.** Pagefind indexes the built HTML, so `/pagefind/*`
only exists after a production build. To see the site exactly as it will be served — search
working, links checked — use:

```bash
npm run serve        # build, then preview and open a browser
```

That is `npm run build && npm run preview --open`: full metadata extraction, render, Pagefind
index and link check, then a local server on the `dist/` directory with the browser opened for
you. It is slower than `npm run dev` and has no hot reload — use `dev` while writing components,
and `serve` when you want to check the real thing.

## Build

```bash
npm run build
```

That is four steps, and any of them can fail the build:

1. `npm run prepare:meta` — reads every document in `../content`, extracts titles, descriptions
   and related links, and checks the corpus against the declared reading order.
2. `astro build` — renders `dist/`.
3. `npm run index:search` — Pagefind writes `dist/pagefind/*`. Self-hosted; no CDN.
4. `npm run check:links` — **link integrity, run against the built HTML.** See below.

Other scripts:

```bash
npm run check        # astro check — TypeScript and .astro diagnostics
npm run preview      # serve dist/ locally
npm run serve        # build + preview + open a browser
```

## Deploy

`dist/` is a plain static directory. Per §5 of the build specification it is destined for
S3 + CloudFront with an origin access control and a CloudFront Function rewriting `/path/`
to `/path/index.html`.

```bash
npm ci
npm run build
aws s3 sync dist/ s3://<bucket>/ --delete
aws cloudfront create-invalidation --distribution-id <id> --paths '/*'
```

Cache headers to set at the distribution (not in this repo):

| Path | TTL |
|---|---|
| `*.html`, `/` | 5 minutes |
| `/_astro/*` | 1 year, immutable — content-hashed filenames |
| `/audio/*` | 1 year |

`site:` in `astro.config.mjs` is set to `https://learn-ice-hockey.com` — canonical URLs, Open
Graph tags and `/sitemap.xml` are all built from it. Change it there if the domain ever changes.

---

## How it fits together

```
site/
├── astro.config.mjs         markdown pipeline + corpus plugins
├── scripts/
│   ├── extract-meta.mjs     ../content → src/data/docs-meta.json
│   ├── check-links.mjs      link integrity over dist/
│   └── astro.mjs            Astro CLI wrapper with telemetry off
├── src/
│   ├── consts.ts            site title, AUDIO_ENABLED, footer notice
│   ├── content.config.ts    the `docs` collection, loaded from ../content
│   ├── data/
│   │   ├── structure.json   layers + reading order (hand-maintained)
│   │   ├── docs-meta.json   generated, gitignored
│   │   └── nav.ts           joins the two, exposes LAYERS / READING_ORDER
│   ├── plugins/
│   │   ├── remark-corpus.mjs   doc header, callouts, sources, links
│   │   └── rehype-corpus.mjs   table wrappers, permalinks, external links
│   ├── components/          BaseHead, Header, SidebarNav, TableOfContents,
│   │                        PrevNext, AudioPlayer, ThemeToggle, Footer
│   ├── layouts/Base.astro
│   ├── pages/               index, [...slug], search, 404, sitemap.xml
│   └── styles/global.css    the whole stylesheet; no framework
└── public/                  favicon, robots.txt
```

### Routing

Collection ids mirror the corpus tree, so URLs mirror the filenames:

| File | URL |
|---|---|
| `content/faceoffs.md` | `/faceoffs/` |
| `content/positions/center.md` | `/positions/center/` |

This is what makes the corpus's own relative links survive: `[Faceoffs](faceoffs.md)` becomes
`/faceoffs/`, `[Center](positions/center.md)` becomes `/positions/center/`, and `../faceoffs.md`
from inside `positions/` becomes `/faceoffs/` as well.

### Metadata extraction

The corpus has no frontmatter. `scripts/extract-meta.mjs` reads the house style instead:

- **Title** — the H1.
- **Description** — the first paragraph of `## Overview`, stripped to plain text and trimmed to
  ~185 characters at a sentence boundary. This is what becomes the `<meta name="description">`,
  the Open Graph description and the card text on the home page.
- **Related links** — parsed out of the `> **Related:** …` line.

It is strict on purpose. It exits non-zero — and so fails the build — if a document has no H1,
no `> **Rule set:**` header, no derivable description, or is missing from `structure.json`.
Softer deviations (no `## Overview`, no `## Common Mistakes`, no Sources footer) print a
warning.

**Adding a document to the corpus?** Add its id to a layer in `src/data/structure.json`.
The build will refuse to run until you do.

### Rendering the corpus's conventions

`src/plugins/remark-corpus.mjs` and `rehype-corpus.mjs` turn house style into structure:

| In the markdown | On the page |
|---|---|
| The H1 | Removed from the body; the layout renders the title, eyebrow and metadata |
| `> **Rule set:** … **Related:** …` | A document-header panel, with related links as chips |
| `> **⚠️ …**` | `.callout-warning` — a distinct, tinted callout. These carry rule-set warnings that change what a reader does, so they are deliberately not styled as quotes |
| Any other blockquote | `.callout-note` (or `.callout-verify` for verification notes) |
| Any table | Wrapped in `.table-scroll` — its own focusable, horizontally scrollable region. The page body never scrolls sideways |
| The `*Sources — retrieved …*` footer | A `<details>` closed by default. They are very long |
| `*Verification notes …*`, `*Unverified …*`, `## Notes on verification` | A visible `.verification-notes` block. **Rendered, never hidden** — they are evidence of rigour |
| `h2` / `h3` | GitHub-compatible ids (so `file.md#some-heading` still resolves) plus a hover permalink |

### Link integrity

`scripts/check-links.mjs` runs against `dist/`, not against the markdown, so it validates the
end result — rewriting, routing, anchors and navigation together. It checks that:

- every internal `href` resolves to an emitted page or asset;
- every `#fragment` exists as an `id` on the page it points at;
- no `.md` link survived rewriting;
- every `<img src>`, `<script src>` and `<link href>` exists in the output.

A single failure exits non-zero and fails `npm run build`. External `http(s)` URLs are counted
and skipped — they need the network and belong in the scheduled job described in §5.4 of the
build specification, not in the build.

Run it alone against an existing build:

```bash
npm run check:links
```

### Audio

The narration does not exist yet (build spec phases 4–5), so it is behind a flag:

```ts
// src/consts.ts
export const AUDIO_ENABLED = false;
```

Turning it on renders a sticky player under each document, pointed at `/audio/<id>.mp3` —
`/audio/faceoffs.mp3`, `/audio/positions/center.mp3` — and resumes the last position from
`localStorage`. Nothing else needs changing. Put the files in `public/audio/` for local
testing (that path is gitignored at the repo root) or serve them from the bucket in production.

---

## Design constraints this site holds to

- **No JavaScript is required to read anything.** Content, navigation, tables of contents,
  the sources disclosure and the collapsed footers are all plain HTML and CSS. JavaScript adds
  exactly three things: the theme toggle, search, and the audio player's resume position.
- **Nothing is loaded from a third party.** No CDN, no analytics, no fonts, no tracking.
  Pagefind ships into `dist/`. Astro's CLI telemetry is switched off by `scripts/astro.mjs`.
- **Dark mode follows `prefers-color-scheme`** and is overridden by a toggle that persists in
  `localStorage`. The stored preference is applied before first paint, so there is no flash.
- **Readable measure.** Prose is capped at ~70 characters; wide comparison tables are allowed
  to use more of the column, inside their own scroll container.
- **One production dependency**, plus `@astrojs/markdown-remark` for the remark/rehype
  pipeline. Everything else is a dev dependency.

## Known limitations

- **`npm run dev` has no search.** Pagefind runs on built HTML. Use `build` + `preview`.
- **Pagefind's Default UI.** Pagefind 1.5 also ships a newer Component UI
  (`pagefind-component-ui.js`, already in `dist/pagefind/`) with a search modal and better
  keyboard handling. Moving `/search/` onto it is a contained change to `src/pages/search.astro`.
- **`site:` is a placeholder** until the domain decision (D1) is made.
