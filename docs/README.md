# Internal documentation

How this project is built and why, for whoever picks it up next — most likely
its author, having forgotten.

These documents are **the connective tissue**, not a second copy of the
reference material. Each component already documents itself in depth, and those
files stay the source of truth:

| For | Read |
|---|---|
| What the corpus is, and the reading order | [`../README.md`](../README.md) |
| Every AWS resource, variable and failure mode | [`../infra/README.md`](../infra/README.md) |
| The Astro build, metadata extraction, link checking | [`../site/README.md`](../site/README.md) |
| The speech transform and link tooling | [`../scripts/README.md`](../scripts/README.md) |
| The rules every document follows | [`../project/content_style_guide.md`](../project/content_style_guide.md) |
| The plan, phase by phase | [`../project/site_build_specification.md`](../project/site_build_specification.md) |
| What nineteen review rounds found | [`../project/review_history.md`](../project/review_history.md) |

**If a fact belongs in one of those, put it there and link to it.** Duplication
is how documentation starts lying, and this project has already paid for that
lesson once — see the four near-identical copies of the icing rule described in
[`../project/content_review_and_roadmap.md`](../project/content_review_and_roadmap.md).

---

## What is in here

| Document | Answers |
|---|---|
| [`philosophy.md`](philosophy.md) | Why the project is built the way it is. The principles that decided the arguments |
| [`architecture.md`](architecture.md) | End to end: markdown in, website and audio out. What runs where, and in what order |
| [`aws-design.md`](aws-design.md) | The AWS resource design as a whole — the shape, and why each piece is the shape it is |
| [`operations.md`](operations.md) | The runbook. Deploying, restoring on a new laptop, and what to check when something breaks |
| [`decision-log.md`](decision-log.md) | Dated decisions and the traps discovered the hard way, with the evidence |

---

## Current state

*Accurate as of 28 July 2026. Update this table when it stops being true.*

| | |
|---|---|
| Live at | **https://learn-ice-hockey.com** (and `www.`) |
| Repository | `github.com/jamesdbloom/learn-ice-hockey`, public |
| Content | 36 documents, 21 adversarial review rounds |
| Site | Astro, 38 pages, Pagefind search, ~6,100 internal links checked at build |
| Hosting | S3 + CloudFront, `eu-west-2` (account id kept out of the repo) |
| CI/CD | GitHub Actions, OIDC role assumption, no long-lived keys |
| Phases complete | 0–4 of the build specification |
| Outstanding | Phase 4b (section kinds) · 5 (narration) · 6 (podcasts) · 7 (downloads) · 8 (offline app) |

**Known gap:** no audio exists yet. The speech *transform* has run — 1,036 SSML
chunks, 2,072,460 characters — but nothing has been narrated, so the site's
audio player is behind the `AUDIO_ENABLED` flag in `site/src/consts.ts` and is
off. See [`architecture.md`](architecture.md#audio-pipeline-not-yet-run).

**Known constraint:** the corpus narrates to roughly **37.7 hours**, about
**1.1 GB** at 64 kbps. That single number drives most of the offline and
download design in §10 of the build specification.
