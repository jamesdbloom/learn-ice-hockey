# scripts/

Tooling for the corpus. Python 3.9+ (3.12 in CI), **standard library only** —
no `pip install`, no lockfile, nothing to rot.

| Script | What it does | Where it runs |
|---|---|---|
| `check_links.py` | Internal link and heading-anchor integrity across `content/` | Every PR and push (`ci.yml`, `deploy.yml`) |
| `check_external_links.py` | Refetches the external citations and reports changes against a baseline | Weekly (`link-check.yml`) |
| `md_to_speech.py` | Markdown → SSML for narration (build spec §7.1) | Phase 4, by hand |

---

## `check_links.py`

```bash
python3 scripts/check_links.py                       # summary + failures
python3 scripts/check_links.py --quiet                # failures only — CI mode
python3 scripts/check_links.py --list-anchors content/skating.md
python3 scripts/check_links.py path/to/other/dir      # check a different tree
```

Exits non-zero if any internal link or anchor is broken, so CI fails.

**What it checks.** Every markdown link under `content/`, split into external
URLs (skipped — see the other script), same-document anchors, and relative
cross-links. Relative links are resolved **against the directory of the file
they are written in**, which is the part naive checkers get wrong:
`../faceoffs.md` inside `content/positions/center.md` must land on
`content/faceoffs.md`, not on something relative to the working directory. The
target file must exist, and if the link carries a `#fragment`, some heading in
the target must slug to it.

**Anchors are derived, not guessed.** Astro assigns heading ids with
`rehypeHeadingIds`, which uses [`github-slugger`](https://github.com/Flet/github-slugger);
the corpus's `file.md#anchor` links were written against GitHub's rendering of
the same markdown. `slugify()` reproduces that: lowercase, drop everything that
is not a letter, mark, decimal digit, `_` or `-`, then spaces to hyphens, with
`-1`, `-2` … appended to repeats within a document.

Verified against the real `github-slugger` over all 1,576 headings in the
corpus: **zero mismatches**. If you change `slugify()`, re-run that comparison.

The consequences look like bugs and are not:

- `—` is deleted, not replaced, so the spaces either side of it collapse into a
  *double* hyphen: `#rim-vs-reverse--two-opposite-plays-keep-them-straight`.
  The corpus's links are written that way and they are correct.
- `'`, `/`, `+`, `(`, `)`, `.`, `⚠️` and `→` vanish entirely rather than becoming
  hyphens: "Rule 63.2(viii)" → `rule-632viii`, "Coach's view" → `coachs-view`.

**Relationship to `site/scripts/check-links.mjs`.** That one walks the *built*
HTML and proves the rewriting, routing and ids survived rendering; it needs a
build and Node. This one reads the *source* and needs neither, so it is the fast
gate that runs first and fails in about a second. Keep both.

## `check_external_links.py`

```bash
python3 scripts/check_external_links.py                        # all 610
python3 scripts/check_external_links.py --sample 20 --seed 1   # random sample
python3 scripts/check_external_links.py --limit 20             # first N rows
python3 scripts/check_external_links.py --summary "$GITHUB_STEP_SUMMARY"
python3 scripts/check_external_links.py --json report.json --write-baseline new.tsv
```

Exits non-zero **only on new breakage** — something that was alive when
`project/verification/link_baseline.tsv` was captured and is not any more.
Recoveries, still-dead links and metadata drift are reported and do not fail
the job.

**Why a baseline rather than absolute status.** Around two dozen citations
return 403 to anything automated and read fine in a browser; a dozen more are
deliberately retained dead links, labelled in the content with the status a
reader will meet. A checker that reports those every week is a checker everyone
mutes.

Findings are bucketed: new breakage · now blocked to robots · redirect target
changed · body size moved a lot · recovered · status drift · known dead. Output
is markdown, sized for a GitHub Actions job summary or an issue body.

**401/403/429 is its own bucket, and it does not fail the run.** Those statuses
mean "we don't like you", not "this page is gone" — two dozen baseline rows were
already 403 at capture and read perfectly in a browser. A citation that has
newly started refusing robots is reported, with a note when other citations on
the same host were already blocked at baseline (strong evidence it is a bot wall
rather than a dead page), and is worth a manual look or an archive link. Use
`--strict` to make those fail too.

**Redirect comparison ignores the query string.** Springer and Wiley bounce
through `?error=cookies_not_supported&code=<fresh uuid>`, so comparing whole
URLs reported a "changed redirect" every week for pages that had not moved. Host
and path are compared; a hijack changes those, a session token does not.

### Three things this corpus taught the hard way

1. **Browser user-agent, always.** A default Python agent collects 403s from
   hosts that serve the page happily otherwise.
2. **A 200 is not proof of life.** Hockey Canada answers a missing URL with
   HTTP 200 and its "page not found" page — 167,052 bytes uncompressed
   (167,383 when re-measured on 2026-07-28; the page has a changing footer,
   hence the 1% tolerance). Both the size signature and a body sniff for
   not-found markers are checked, and either one demotes a 200 to dead.
3. **Follow redirects and compare the final URL.** One domain in this corpus
   now 301s to an unrelated commercial site: status 200, content worthless.

### The byte column means *wire* bytes

The baseline's `bytes` column was captured with `Accept-Encoding: gzip, deflate`
— it is the compressed transfer size, not the document size. Fetching without
compression makes every page look 3–5× bigger and reports all 610 rows as
changed. The script therefore sends exactly that Accept-Encoding and counts raw
bytes off the socket.

**Do not add `br` or `zstd`.** A better compressor would make every page look
like it shrank. If the baseline is ever recaptured with different headers,
change both together.

The known soft-404 signature is the *uncompressed* size, since that is how it
was observed, so it is compared against the inflated body as well as the wire
size.

### Politeness

Bounded concurrency (default 6), one in-flight request per host with a minimum
one-second gap, 25-second timeout, one retry on transient failure (timeouts,
resets, 429, 5xx). Downloads are capped at 4 MB — one cited PDF is 30 MB, and
its size comes from `Content-Length` instead. A full run of 610 URLs takes
roughly 10–20 minutes; the weekly workflow allows 45.

A 20-URL sample takes about 30 seconds. Use `--sample N --seed S` when changing
the script; a full run every time is neither fast nor polite.

### Refreshing the baseline

When a citation is fixed or a dead link is accepted deliberately:

```bash
python3 scripts/check_external_links.py --write-baseline /tmp/new.tsv
cp /tmp/new.tsv project/verification/link_baseline.tsv
```

Read the diff before committing — the point of the baseline is that a human
agreed to every row in it.

---

## CI

| Workflow | Trigger | Does |
|---|---|---|
| `.github/workflows/ci.yml` | pull request, push to `main` | `check_links.py`, then `npm ci && npm run build` in `site/`. No deploy. |
| `.github/workflows/deploy.yml` | push to `main` | Everything CI does, then S3 sync + CloudFront invalidation over OIDC |
| `.github/workflows/link-check.yml` | Mondays 06:17 UTC, or manual | `check_external_links.py`; opens/updates/closes a `link-rot` issue |

Actions are pinned to exact release tags rather than floating majors. Pin to
commit SHAs when you next have network access to resolve them — tags are
mutable, SHAs are not.

### Deploying: the parts that will bite

**Nothing deploys until the repository variables exist.** `deploy.yml`'s
`preflight` job checks for `AWS_REGION`, `AWS_ROLE_ARN`, `S3_BUCKET` and
`CLOUDFRONT_DISTRIBUTION_ID` and skips the deploy job cleanly if any is missing,
writing what is missing to the job summary. The infrastructure does not exist
yet; a red build on every push would be worse than no deploy. The guard lives in
a step, not a job-level `if`, because the `secrets` context is not available in
job-level conditions.

**`--delete` and the audio.** The narration MP3s (Phase 5) are generated outside
this build and uploaded straight to the bucket — they are not in `site/dist`. A
sync with `--delete` that did not exclude `audio/*` would delete every one of
them, which is several hours of Polly. Every sync step excludes `audio/*`. If
audio ever *does* ship from the repo, revisit that decision deliberately.

**Cache-control is set per path, in two passes.** Content-hashed assets
(`_astro/*`, Pagefind's `*.pf_fragment` / `*.pf_index` / `*.pf_meta` /
`*.pagefind`) go up first with `max-age=31536000, immutable`, so a page never
arrives before the assets it references. Everything else — HTML, `sitemap.xml`,
`robots.txt`, the favicon, `pagefind-entry.json` and Pagefind's loaders, none of
which are hashed — follows with `max-age=300, must-revalidate`.

**Invalidation is scoped to changed HTML.** The first 1,000 invalidation paths a
month are free and billed after that, so `/*` on every push is a standing
charge. The sync output is parsed and only changed `.html` keys are invalidated
(a full rebuild of the current site is 38 paths; a typical content edit is one
or two). Above 300 paths it falls back to `/*`, which by then is genuinely
cheaper. Note the assumption: the clean-URL rewrite (`/faceoffs/` →
`/faceoffs/index.html`) is a CloudFront *function on viewer request*, so the
cache key is the rewritten path and invalidating `/faceoffs/index.html` is
correct. If that rewrite ever moves to origin-request, the cache key becomes
`/faceoffs/` and the invalidation paths must change with it.
