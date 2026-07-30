# Architecture

Markdown in, website and audio out. What runs where, and in what order.

For the internals of any one stage, follow the link at the end of its section —
this document is the map, not the territory.

---

## The shape of it

```
content/*.md ──┬─► extract-meta.mjs ─► docs-meta.json ─┐
   (35 docs,   │                                        ├─► astro build ─► dist/
    the truth) │   structure.json (reading order) ──────┤
               │   remark-corpus / rehype-corpus ───────┘
               │                                              │
               │                                              ├─► pagefind ─► search index
               │                                              └─► check-links ─► gate
               │
               └─► md_to_speech.py ─► scripts/speech/*.ssml ─► [Polly] ─► [audio]
                                                                 ▲
                                                          not yet run

dist/ ─► GitHub Actions (OIDC) ─► S3 ─► CloudFront ─► learn-ice-hockey.com
```

Two independent consumers read `content/`, and **neither writes to it**. Adding
a document changes nothing under `site/` except one line of `structure.json`.

---

## Content layer

35 markdown documents, ~18,100 lines. No frontmatter — every document instead
follows a house style strictly enough to be parsed:

```markdown
# Title
> **Rule set:** …
> **Related:** [Doc A](doc_a.md) · [Doc B](doc_b.md)
## Overview
…
## Common Mistakes
## Key Takeaways
---
*Sources — retrieved 27 July 2026:*
```

That convention *is* the metadata schema. `extract-meta.mjs` reads titles,
descriptions and related links straight out of it, which is why the style guide
is a build dependency and not merely editorial guidance.

**Governance:** [`../project/content_style_guide.md`](../project/content_style_guide.md)
· **Provenance:** [`../project/review_history.md`](../project/review_history.md)

---

## Site build

`npm run build` is four steps, any of which fails the build:

| Step | Does | Fails when |
|---|---|---|
| `prepare:meta` | Reads `content/`, writes `docs-meta.json` | A document breaks the house style, or is missing from `structure.json` |
| `astro build` | Renders `dist/` | Normal build errors |
| `index:search` | Pagefind indexes the built HTML | — |
| `check:links` | Validates internal links **against the built HTML** | Any internal link or heading anchor does not resolve |

The link check is the important one. It last verified **6,127 internal links,
3,425 of them with anchors**, of which 1,305 are corpus cross-links written in
the markdown. External URLs are counted and skipped — they are the scheduled
`link-check.yml` workflow's job, because link rot is asynchronous.

### Two decisions worth knowing

**Reading order is data, not code.** `site/src/data/structure.json` holds the
corpus's deliberate five-layer order, and navigation, previous/next links and
the homepage all derive from it. Every file under `content/` must appear in it
exactly once or the build stops — so a document cannot be silently missing from
the navigation.

**A document's directory is its layer.** `content/<layer-id>/<doc>.md`, where
`<layer-id>` is exactly the layer's id in `structure.json`. The URL follows:
`/systems/faceoffs/`. Cross-links inside the corpus are resolved **by basename**,
which is unique corpus-wide, so a sibling link is a bare `rules_primer.md` and a
cross-layer link is `../foundation/rules_primer.md` — and neither has to be
rewritten if a document ever changes layer.

**The markdown processor was replaced to protect anchors.** The build uses an
explicit `unified()` processor rather than Astro 7's default, because the corpus
transforms are written against mdast/hast — and critically, Astro's own
`rehypeHeadingIds` runs first and assigns GitHub-compatible heading ids. Those
are what the corpus's 1,305 `file.md#anchor` cross-links were written against.

`remark-corpus` then turns house style into semantic structure: strips the H1,
promotes the rule-set blockquote to a document header, reclassifies `> **⚠️ …**`
blockquotes as callouts (they carry rule warnings that change what a reader
does), splits the footer into collapsed sources plus visible verification notes,
and rewrites `*.md` cross-links to site URLs preserving anchors.

**Detail:** [`../site/README.md`](../site/README.md)

---

## Audio pipeline (not yet run)

**What exists:** `scripts/md_to_speech.py` has run over all 35 documents,
producing **1,305 SSML chunks** totalling **2,796,473 characters**, with a
per-document manifest and an index at `scripts/speech/index.json`.

**What does not exist:** any audio. Nothing has been narrated. The site's
`AudioPlayer.astro` is fully built and styled but sits behind
`AUDIO_ENABLED = false` in `site/src/consts.ts`; turning the flag on is the only
site-side change Phase 5 requires.

The transform has three design rules that are requirements rather than
preferences, and they are worth preserving:

- **Deterministic** — same input bytes produce same output bytes. Sorted file
  lists, ordered rule tables, JSON with sorted keys.
- **Table-driven** — notation expansion lives in an ordered `NOTATION_RULES`
  list. Adding a construct is adding a row, not threading another regex through
  a function.
- **Nothing passes through silently** — text is carried as tokens, a rule may
  only consume `RAW` tokens, and whatever is still `RAW` at the end is swept up
  and reported rather than quietly narrated wrong.

`scripts/speech/` is gitignored: it is derived, regenerable, and large.

### The number that shapes Phase 5 onward

2,796,473 characters is roughly **55 hours** of narration, about **1.6 GB** at
64 kbps mono. That figure drives the offline and download design in
[§10 of the build specification](../project/site_build_specification.md), and it
is why "download everything" cannot be a default.

**Detail:** [`../scripts/README.md`](../scripts/README.md)

---

## Delivery

Static files in a private S3 bucket, read only by CloudFront through an Origin
Access Control, served over TLS at the apex and `www`.

Three things happen at the edge that cannot happen in S3:

- **Clean URLs.** S3 has no index-document behaviour as a REST origin, so a
  CloudFront Function rewrites `/faceoffs` and `/faceoffs/` to
  `/faceoffs/index.html` on viewer-request, before the cache lookup, so both
  share one cache entry. *This cannot be tested locally* — `npm run preview`
  404s on the no-trailing-slash form.
- **Error mapping.** S3 returns `AccessDenied`, not `NoSuchKey`, for a missing
  object under OAC, so both 403 and 404 map to `/404.html`.
- **Security headers**, including a CSP that names no external origin.

**Detail:** [`../infra/README.md`](../infra/README.md) · **Design rationale:**
[`aws-design.md`](aws-design.md)

---

## CI/CD

Three workflows, all in `.github/workflows/`:

| Workflow | Trigger | Does |
|---|---|---|
| `ci.yml` | push, PR | Builds the site, checks internal links |
| `deploy.yml` | push to `main` | Builds, assumes AWS role via OIDC, syncs, invalidates |
| `link-check.yml` | schedule | Re-checks the 611 external URLs against the baseline |

**No long-lived AWS keys exist anywhere.** The deploy job exchanges GitHub's
OIDC token for a short-lived role session. The role can touch exactly one
bucket and one distribution, and carries a permissions boundary with the same
ARN list so a later mistaken policy attachment still cannot widen it.

The deploy sync runs in **two passes, in this order**: content-hashed
immutable assets first, then everything else — so a page never reaches a reader
before the assets it references.

> **The OIDC trust policy is the fiddliest part of the whole system** and it
> failed twice on first use for two unrelated reasons. Both are recorded in
> [`decision-log.md`](decision-log.md#the-oidc-subject-claim-two-traps), because
> the AWS error message names neither.

---

## What is derived, and what is not

| Not derived — losing it loses information | Derived — regenerable from the above |
|---|---|
| `content/` | `site/dist/`, `site/.astro/`, `docs-meta.json` |
| `project/`, `docs/`, `infra/`, `site/src/`, `scripts/` | `scripts/speech/`, the Pagefind index |
| `structure.json` | Audio, PDFs, EPUBs, feeds (once they exist) |
| Terraform **state** in S3 | Every AWS resource it describes |
| `~/.config/ice-hockey/env` | `terraform.tfvars`, `backend.hcl` |

The right-hand column is why the backup story is short: one env file in a
password vault, plus the repository.
