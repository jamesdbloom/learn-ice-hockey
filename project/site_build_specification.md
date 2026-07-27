# Ice Hockey Learning Resource — Build Specification and Plan

**Status:** draft for review · **Created:** 27 July 2026 · **Owner:** James Bloom

This document specifies the work to turn the ice hockey corpus into a public learning resource: a GitHub repository, a static website on AWS provisioned with Terraform, per-section audiobook narration, and NotebookLM podcast episodes.

It is written to be worked through over time. Each phase has an explicit **exit gate** — do not start the next phase until the gate is met.

---

## 1. What exists today

| | |
|---|---|
| Content | 37 markdown documents, ~18,100 lines |
| Structure | 33 at root + 4 in `positions/` |
| Governance | `project/content_style_guide.md` — the rules every document follows |
| Review state | 13 adversarial review rounds; 13 criticals and ~60 majors found and fixed |
| Infrastructure | None. Local files only, no version control |

The content is the asset. Everything below is packaging.

---

## 2. Decisions needed before Phase 1

These block work and only you can answer them.

| # | Decision | Options | Recommendation |
|---|---|---|---|
| D1 | Domain name | — | Something non-NHL-ish. Trademark exposure is a bigger practical risk than copyright |
| D2 | Repo visibility | Public / private | **Public** — it is a learning resource, and public repos get free GitHub Actions minutes |
| D3 | Repo name | — | Match the domain |
| D4 | Content licence | CC BY 4.0 / CC BY-NC 4.0 / all rights reserved | **CC BY-NC 4.0**. Non-commercial reduces the fair-dealing exposure discussed in §8 |
| D5 | Code licence | MIT / Apache 2.0 | **MIT** for scripts, site and Terraform |
| D6 | Site generator | Astro / MkDocs Material | **Astro** — needed for per-section audio players and layered navigation |
| D7 | Narration voice | Polly neural / Polly long-form / ElevenLabs | **Polly long-form** — materially better for continuous prose, ~$120–150 one-off |
| D8 | AWS account | Existing (MockServer) / new | **Existing**, fully separate resources. Isolated by bucket, distribution, hosted zone and IAM role |

---

## 3. Repository structure

```
<repo>/
├── README.md                      Project overview, build instructions
├── LICENSE                        Code licence (D5)
├── LICENSE-CONTENT                Content licence (D4)
├── CLAUDE.md                      Instructions for AI agents working the repo
├── .gitignore
│
├── content/                       ← the corpus, moved wholesale
│   ├── getting_started.md
│   ├── … 32 more
│   └── positions/
│       ├── center.md  winger.md  defender.md  goaltender.md
│
├── project/
│   ├── content_style_guide.md     The governing document
│   ├── content_review_and_roadmap.md
│   ├── site_build_specification.md  ← this file
│   └── review_history.md          Round-by-round record (to be written)
│
├── .claude/
│   ├── settings.json              Permissions, env
│   ├── agents/                    Reusable subagent definitions
│   │   ├── content-reviewer.md
│   │   ├── rules-verifier.md
│   │   └── source-verifier.md
│   └── skills/                    Repo-specific skills, if any
│
├── infra/                         Terraform (§5)
├── site/                          Astro app (§6)
├── scripts/                       Build and audio tooling (§7)
└── .github/workflows/             CI/CD (§5.4)
```

**Migration note.** Moving the whole tree into `content/` preserves every relative link between documents — `[Faceoffs](faceoffs.md)` and `../faceoffs.md` both still resolve. Only the root `README.md`'s links break, and it needs rewriting anyway. **Verify with a link check immediately after the move** (`scripts/check_links.py`); do not assume.

---

## 4. Phase plan

### Phase 0 — Close the review *(in progress)*

- [ ] Round 13 completes: external source layer verified
- [ ] Any criticals or majors fixed
- [ ] `project/review_history.md` written — the round-by-round record, including the coverage statement each round made about itself

**Exit gate:** a review round returns no critical or major findings, and its coverage is stated.

### Phase 1 — Repository

- [ ] `git init`, initial commit of current state *(commit before restructuring, so the move is reviewable)*
- [ ] Restructure per §3
- [ ] Run link check; fix breakage
- [ ] Write root `README.md` — what this is, how it is organised, how to build
- [ ] Add licences (D4, D5) and the non-affiliation notice (§8)
- [ ] Capture reusable agent definitions into `.claude/agents/`
- [ ] Push to GitHub

**Exit gate:** repo builds nothing yet, but content is versioned, linked correctly, and licensed.

### Phase 2 — Infrastructure

- [ ] Terraform per §5, applied
- [ ] DNS delegated, certificate validated
- [ ] Placeholder `index.html` served over HTTPS at the domain

**Exit gate:** the domain serves a page over HTTPS from CloudFront, and `terraform destroy` / `apply` round-trips cleanly.

### Phase 3 — Website

- [ ] Astro site per §6
- [ ] All 37 documents rendered, navigable, searchable
- [ ] Audio player components in place, **disabled/hidden pending Phase 5**
- [ ] Deployed via CI

**Exit gate — this is your review gate.** The complete site is live and you have read through it. **No audio work starts until you have signed this off.**

### Phase 4 — Speech transform

- [ ] `scripts/md_to_speech.py` per §7.1
- [ ] Generate speech text for all 37 documents
- [ ] **Read a sample of the output yourself** — this is where quality is won or lost

**Exit gate:** speech text for three representative documents (one rules-heavy, one systems, one research-heavy) reads correctly aloud.

### Phase 5 — Narration

- [ ] Polly pipeline per §7.2
- [ ] Generate, upload to S3, wire players
- [ ] Spot-check output

**Exit gate:** every document has audio; three spot-checks pass.

### Phase 6 — Podcasts

- [ ] Group documents into episodes by layer (§7.3)
- [ ] Generate NotebookLM Audio Overviews
- [ ] **Check NotebookLM's current terms before publishing** (§8)
- [ ] Upload and publish

**Exit gate:** episodes published, terms checked and recorded.

---

## 5. Infrastructure (Terraform)

### 5.1 Resources

| Resource | Notes |
|---|---|
| `aws_s3_bucket` | Private. Block **all** public access. Versioning on |
| `aws_cloudfront_origin_access_control` | **OAC**, not legacy OAI |
| `aws_s3_bucket_policy` | Allows only the CloudFront service principal, conditioned on `AWS:SourceArn` of the distribution |
| `aws_acm_certificate` | **Must be in `us-east-1`** regardless of where everything else lives — CloudFront requirement. Use a `aws.us_east_1` provider alias |
| `aws_route53_zone` | If the domain is registered elsewhere, delegate NS records at the registrar |
| `aws_route53_record` | A/AAAA alias to the distribution, plus cert validation records |
| `aws_cloudfront_distribution` | See 5.2 |
| `aws_cloudfront_response_headers_policy` | HSTS, `X-Content-Type-Options`, `Referrer-Policy`, CSP |
| `aws_cloudfront_function` | Clean URLs — rewrite `/path/` to `/path/index.html` |
| `aws_iam_openid_connect_provider` + role | GitHub Actions OIDC (5.4) |

### 5.2 Cache behaviours

| Path | TTL | Why |
|---|---|---|
| `*.html`, `/` | 5 min | Content updates should appear promptly |
| `/_astro/*` | 1 year, immutable | Content-hashed filenames |
| `/audio/*` | 1 year | Large, and never changes once generated |

### 5.3 State

S3 backend with DynamoDB lock table, in the same account. Bootstrap these **by hand once** — a Terraform state backend cannot provision itself.

### 5.4 CI/CD

GitHub Actions with **OIDC role assumption — no long-lived AWS keys in GitHub**. Trust policy scoped to the specific repo and branch.

Two workflows:
- **`build-deploy.yml`** — on push to `main`: build Astro, `aws s3 sync` with `--delete`, CloudFront invalidation of `/*` for HTML paths only
- **`link-check.yml`** — weekly: run the internal link checker and the external URL table from Phase 0's round 13. **Link rot is a live problem for this corpus** — today alone it produced a redirect hijack, three hard 404s and two soft-404s

### 5.5 Cost

| | Monthly |
|---|---|
| S3 (content + ~350 MB audio) | < $0.10 |
| CloudFront (personal traffic) | $0–1 |
| Route 53 hosted zone | $0.50 |
| Domain | ~$1 (annualised) |
| **Total** | **~$2/month**, plus one-off Polly ~$120–150 |

---

## 6. Website

### 6.1 Information architecture

Follow the corpus's own five-layer framing, which the README already establishes:

```
Getting Started            ← entry point, before everything
Foundation                 rink map, rules primer
Positional                 4 positions + switching between them
Systems                    10 documents
Technique                  5 documents
Hockey IQ                  5 documents
Off the ice                6 documents
```

### 6.2 Requirements

- **Reading order that works.** The corpus has a deliberate one; the site must not scramble it into alphabetical nav
- **Client-side search** (Pagefind — integrates cleanly with Astro, no backend)
- **Per-document audio player**, sticky, resumable position in `localStorage`
- **Podcast episode pages** with embedded player and show notes
- **Sources rendered as a collapsible section** — they are long and would otherwise dominate
- **Dark mode**, respecting `prefers-color-scheme`
- **Responsive.** Tables in this corpus are wide — they need horizontal scroll containers, not squashing
- **Deep-linkable headings** — the corpus cross-links to anchors, and those must survive rendering
- **No client-side JS required to read.** Progressive enhancement; audio is additive

### 6.3 Rendering notes specific to this corpus

- Blockquote callouts (`> **⚠️ …**`) are load-bearing — they carry rule-set warnings. Style them distinctly
- Verification notes at document feet are part of the corpus's integrity story. **Render them, do not hide them** — they are evidence of rigour, not clutter
- Rule citations should ideally link to the official rulebook PDFs

---

## 7. Audio

### 7.1 The markdown-to-speech transform *(the hard part)*

Markdown fed directly to TTS sounds terrible. `scripts/md_to_speech.py` must produce a speech variant:

| Input | Output |
|---|---|
| `**bold**`, `*italic*` | Strip markers |
| `[text](url)` | Keep `text`, drop URL |
| `Rule 63.2(viii)` | "Rule sixty-three point two, clause eight" |
| `5-on-3`, `2-on-1` | "five on three", "two on one" |
| `78.8%` | "seventy-eight point eight percent" |
| Tables | Convert to prose, or skip with a spoken pointer to the site |
| Sources sections | Omit entirely |
| Verification notes | Omit from narration; keep on the page |
| `⚠️` and emoji | Strip |
| Headings | Convert to spoken section breaks with a short pause |

**Output SSML**, not plain text — you need `<break>` at section boundaries and `<say-as>` for numbers.

This is genuinely fiddly and worth doing properly, because it is reusable for every future document.

### 7.2 Narration pipeline

- Amazon Polly, long-form voice (D7). British English (`en-GB`) — the corpus is written in British English
- Polly's synthesis limit requires **chunking by section**, then concatenating with `ffmpeg`
- Output MP3, 64 kbps mono — speech does not need more
- Upload to `s3://<bucket>/audio/<document>.mp3`
- Generate a **transcript sidecar** so the audio is searchable and accessible

### 7.3 Podcast episodes

NotebookLM has no API — this is manual. Group by layer rather than per-document; the two-host format needs more material to work with.

Suggested episodes: Getting Started · Foundation & Rules · The Four Positions · Systems I (offensive) · Systems II (defensive) · Technique · Hockey IQ · Off the Ice.

Record which documents fed each episode, so they can be regenerated when content changes.

---

## 8. Legal and licensing

**Not legal advice.** If this becomes commercial, get some.

### The exposure

The corpus quotes NHL, IIHF, USA Hockey and Hockey Canada rulebooks **extensively and verbatim** — deliberately, because that precision is what made it accurate. That is the only real risk area.

- **Rules as facts are not copyrightable.** Systems and methods of operation are excluded from copyright. "Offside requires both skates over the line" is free to state
- **Rulebook *text* is copyrighted.** UK fair dealing for quotation (CDPA s30(1ZA)) requires the use be fair, no more than necessary, and sufficiently acknowledged. The corpus attributes meticulously, which helps materially
- **Volume is the weak point.** A few rules are quoted at near-full length

### Actions

- [ ] **Trim the longest verbatim quotes** to the operative clause, linking to the official PDF. Keeps precision, cuts exposure
- [ ] **No NHL/IIHF/USA Hockey logos, marks or team branding** anywhere on the site
- [ ] **Non-affiliation notice** in the footer of every page
- [ ] **CC BY-NC** on content (D4) — non-commercial materially strengthens the fair-dealing position
- [ ] **Check NotebookLM's terms** before publishing generated audio. Personal use is clearly fine; public redistribution is greyer and the terms have changed over time
- [ ] Research quotations are short, attributed and academic-normal — no action needed

---

## 9. Open questions

1. Should the site expose the **review history** — 13 rounds, 13 criticals, the style guide? It is unusual and genuinely interesting, and it is the strongest available argument that the content is trustworthy. My inclination is yes, as an "How this was made" page.
2. Do you want **contributions** enabled (issues, PRs), or is this read-only?
3. Should audio be **downloadable**, or streaming only?
4. Is there an **RSS feed** for the podcast episodes, so they work in a real podcast app?
