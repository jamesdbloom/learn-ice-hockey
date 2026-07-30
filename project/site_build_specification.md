# Ice Hockey Learning Resource — Build Specification and Plan

**Status:** draft for review · **Created:** 27 July 2026 · **Owner:** James Bloom

This document specifies the work to turn the ice hockey corpus into a public learning resource: a GitHub repository, a static website on AWS provisioned with Terraform, per-section audiobook narration, and NotebookLM podcast episodes.

It is written to be worked through over time. Each phase has an explicit **exit gate** — do not start the next phase until the gate is met.

---

## 1. What exists today

| | |
|---|---|
| Content | 35 markdown documents, ~18,100 lines |
| Structure | 31 in `content/` + 4 in `content/positions/` |
| Governance | `project/content_style_guide.md` — the rules every document follows |
| Review state | 13 adversarial review rounds; 13 criticals and ~60 majors found and fixed |
| Infrastructure | None. Local files only, no version control |

The content is the asset. Everything below is packaging.

> **Status note, 28 July 2026.** The table above records the position when this
> specification was written and is left unedited, because the phase plan in §4
> is written against it. What has changed since: review reached **19 rounds**;
> the repository is public at `jamesdbloom/learn-ice-hockey`; phases 1 to 4 are
> complete; the site is **live at https://learn-ice-hockey.com** on S3 and
> CloudFront with CI deploying via GitHub OIDC. Phase 5 onward is outstanding.
> Current state is tracked in [`../docs/`](../docs/README.md), not here.

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

### Decisions added for offline, downloads and reader focus (§10, §11)

These do not block Phase 1 — but **D13 and D14 block Phase 5**, and getting them
wrong costs a second narration run. See the sequencing note in §4.

| # | Decision | Options | Recommendation |
|---|---|---|---|
| D9 | Offline app | Native iOS + Android / PWA / neither | **PWA.** One codebase, installs to the home screen on both, and the corpus is documents — nothing here needs a native API. A native app buys reliable large-file caching and little else, at the price of two app stores |
| D10 | Audio packaging | Per-file MP3 / chaptered M4B / podcast RSS / all | **All three, from one set of MP3s.** They are containers and a feed, not three productions. Each is what some existing app already does offline well |
| D11 | Podcast feed public | Public RSS / unlisted / none | **Public RSS.** It is the single highest-leverage item in §10: every podcast app already does download, playlist, queue, resume and background playback. Building any of that yourself is strictly worse |
| D12 | Text download | PDF / EPUB / both / markdown too | **EPUB first, PDF second, markdown always.** EPUB reflows on a phone; PDF is for printing. Markdown is free — it is the source |
| D13 | Section-kind marker | HTML comment / heading suffix / front matter | **HTML comment** (`<!-- kind: evidence -->`). Invisible to every renderer that does not understand it, one regex for the speech transform. See §11.2 for the objection to it |
| D14 | Practical-cut narration | Full only / full + practical cut | **Both, decided before Phase 5.** The cut is nearly free at narration time and expensive afterwards — Polly is billed per character, so retrofitting means paying for the corpus twice |
| D15 | Offline audio default | Cache all / per-document opt-in / stream only | **Per-document opt-in.** The full narration is ~1.6 GB (§10.1). No reasonable app downloads that without being asked |

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
│   ├── … 30 more
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

> **Where this stands, 29 July 2026.** The checkboxes below are original and
> were never ticked; this table is the live status. Phases are not sequential
> any more — 5 is parked and 6 is reachable without it.
>
> | Phase | State | Evidence |
> |---|---|---|
> | 0 · Close the review | ✅ **Done, and overshot** | Targeted round 13; reached **round 22**. Records in `project/reviews/` |
> | 1 · Repository | ✅ Done | Public at `jamesdbloom/learn-ice-hockey`; 36 documents in 7 sections; licences; agents and hooks in `.claude/` |
> | 2 · Infrastructure | ✅ Done | S3 + CloudFront, Terraform, GitHub OIDC — no long-lived keys |
> | 3 · Website | ✅ Done | Live at **learn-ice-hockey.com**, 39 pages, Pagefind search, CI deploys on push to `main` |
> | 4 · Speech transform | ✅ Done | `md_to_speech.py`, all 36 documents, 83 self-test assertions, **0 unrecognised constructs** after round 22 |
> | 4b · Section kinds | ⏸ **Suspended** | Gated Phase 5 only; 0 documents tagged; D13 still open |
> | 5 · Narration | ⏸ **Parked on quality** | Pilot ran, output rejected. §7.2 |
> | 6 · Podcasts | 🟡 **Partly — 5 episodes exist** | Generated pre-repo from an older prompt. The `notebooklm-episode` skill now exists but **has never been run** |
> | 7 · Downloads and RSS | ❌ Not started | `site/public/` holds only `favicon.svg` and `robots.txt` |
> | 8 · Offline PWA | ❌ Not started | No manifest, no service worker |
>
> **What is actually left:** 6 (finish properly), 7, 8 — plus 4b and 5 if
> narration is revisited. Everything blocking a reader from *reading* the corpus
> is done; what remains is packaging it for people who want it in other forms.

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
- [ ] All 35 documents rendered, navigable, searchable
- [ ] Audio player components in place, **disabled/hidden pending Phase 5**
- [ ] Deployed via CI

**Exit gate — this is your review gate.** The complete site is live and you have read through it. **No audio work starts until you have signed this off.**

### Phase 4 — Speech transform

- [ ] `scripts/md_to_speech.py` per §7.1
- [ ] Generate speech text for all 35 documents
- [ ] **Read a sample of the output yourself** — this is where quality is won or lost

**Exit gate:** speech text for three representative documents (one rules-heavy, one systems, one research-heavy) reads correctly aloud.

### Phase 4b — Section kinds *(gated Phase 5; suspended with it, 29 July 2026)*

> **Not started — zero documents carry a kind marker.** It gated Phase 5 and
> Phase 5 is parked, so this is suspended rather than outstanding. D13 (marker
> syntax) is still an open decision. If narration resumes, do this first: the
> whole argument below still holds.

Tag every section with what kind of content it holds, per §11.

- [ ] Agree the marker syntax (D13)
- [ ] Tag one document by hand — `faceoffs.md`, which already separates evidence
      from instruction informally and is the worked example in §11.1
- [ ] **Measure the practical cut**: what fraction of the corpus is evidence and
      craft-justification rather than instruction? This number decides D14 and
      is currently unknown
- [ ] Tag the remaining 34 documents
- [ ] Build check: every `##` section has a kind, failing the build otherwise —
      the same way `structure.json` already fails it for an unlisted document

**Exit gate:** every section carries a kind, and the practical-cut duration is
measured rather than guessed.

> **⚠️ Do this before Phase 5, not after.** Polly bills per character, and the
> corpus is 2,796,473 characters. Narrating first and tagging later leaves two
> options, both bad: pay to narrate the corpus a second time to get the
> practical cut, or do not offer one. Tagging first makes the second cut a
> filter over text you were going to send anyway.
>
> The same argument applies to Phase 6. Regenerating podcast episodes is manual
> (NotebookLM has no API), so the episode inputs want to be right the first time.

### Phase 5 — Narration ⏸ *parked 29 July 2026, on quality*

A pilot narrated `center.md` in full through Polly neural and the output was
judged not good enough to ship. The pipeline works; the voice is the problem.
See the status note in §7.2 for the evidence, the corrected costs, and what
would unpark it. **Nothing here is committed and no audio exists in S3.**

Note this also **suspends Phase 4b**, which existed only to gate Phase 5 — the
argument for tagging first was that narrating first makes the practical cut
cost a second full pass. With no narration, that pressure is gone. If narration
resumes, 4b becomes a blocker again immediately.

- [ ] Polly pipeline per §7.2
- [ ] Generate, upload to S3, wire players
- [ ] Generate the practical cut as a second set, if D14 says so
- [ ] Spot-check output

**Exit gate:** every document has audio; three spot-checks pass.

### Phase 6 — Podcasts

- [ ] Group documents into episodes by layer (§7.3)
- [ ] Generate NotebookLM Audio Overviews
- [ ] **Check NotebookLM's current terms before publishing** (§8)
- [ ] Upload and publish

**Exit gate:** episodes published, terms checked and recorded.

### Phase 7 — Downloads and packaging *(new)*

Per §10. Nothing here is a new production — it is containers and feeds around
artefacts phases 4b–6 already produce.

- [ ] Per-page download block: audio, transcript, markdown, EPUB, PDF
- [ ] Whole-corpus text bundles — EPUB and PDF, full and practical cuts
- [ ] Whole-corpus audio: chaptered M4B per layer, and a `.zip` of MP3s
- [ ] **Podcast RSS feed** with enclosures (D11) — the highest-value item here
- [ ] A `/downloads` page that explains what each format is actually for

**Exit gate:** the corpus can be taken offline, in text and in audio, by
somebody who never returns to the site — and the feed validates in a real
podcast app.

### Phase 8 — Offline app *(new)*

Per §10.4. A PWA (D9), not a native app.

- [ ] Web app manifest, icons, `display: standalone`
- [ ] Service worker: text, CSS and search index precached — audio never by default
- [ ] Per-document "make available offline" control, with a storage readout (D15)
- [ ] **Verify on real hardware**, both platforms. The iOS storage and eviction
      behaviour in §10.4 is the part most likely to be wrong by the time this
      is built

**Exit gate:** installed to a home screen on an actual iPhone and an actual
Android phone, aeroplane mode, corpus still readable.

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
| **Total** | **~$2/month**, plus one-off Polly **~$45 at neural** (measured: 2,796,473 billed characters, ~55 h of audio) |

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

> **⚠️ Status note, 29 July 2026 — D7's long-form voice does not exist in this
> region, and narration is parked on quality.**
>
> **There is no long-form voice in `eu-west-2`.** `aws polly describe-voices`
> returns none, in any language. The en-GB voices are **Emma** and **Arthur**
> (neural), and **Brian** and **Amy** (neural *and* generative). D7 chose an
> engine that cannot be used here without moving region.
>
> That makes the real cost decision much narrower than the one recorded
> elsewhere. Against **2,796,473** billed characters:
>
> | Engine | Rate | Full corpus |
> |---|---|---|
> | Standard | $4/M | $11.19 |
> | **Neural** | $16/M | **$44.74** |
> | **Generative** | $30/M | **$83.89** |
> | Long-form | $100/M | **unavailable in `eu-west-2`** |
>
> **The character count rose from 2,318,459 on 30 July 2026**, when the
> transform began reading the ` ```facts ` blocks aloud instead of announcing
> them as diagrams — 764 blocks, 4,423 fact lines, 424 of which carry a
> penalty, an injury or a prohibition. That is +468,240 characters, about 20%,
> and it is the right trade: the alternative is paying to narrate a corpus with
> its safety layer removed. See the decision log. Every figure above moves with
> it, and the pilot's own $0.68 for `center.md` is now an underestimate for the
> same document.
>
> `scripts/md_to_speech.py --report` **now prints the three engines that exist
> in this region**, with generative's narrower voice list, and says plainly
> that long-form is unavailable. It previously quoted a long-form estimate —
> the largest number on the screen, for an engine nobody here can use.
>
> **A pilot was run and the output was judged not good enough.**
> `content/positions/center.md` was narrated in full through Polly neural
> (Brian, en-GB) — 20 chunks, 42,691 billed characters, 50m 27s, $0.68 — plus a
> neural-versus-generative comparison on one chunk. Total spend $0.81. The
> transform behaved: both engines accepted the corpus's SSML unmodified, which
> was the real technical risk, since generative voices support only a subset of
> SSML. **The blocker is voice quality, not the pipeline.**
>
> So Phase 5 is **parked, not abandoned**, and nothing about it is committed.
> What would unpark it:
>
> - **Generative at length.** Only one 3½-minute chunk was heard on generative;
>   a full document is $1.28 and is the obvious next test if narration is
>   revisited.
> - **A different region.** Long-form is available elsewhere; whether that
>   justifies splitting the stack from `eu-west-2` is a real question and this
>   note does not answer it.
> - **A non-Polly engine.** Not evaluated at all.
>
> The transform work stands on its own regardless — see §7.1 and round 22.

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
3. ~~Should audio be **downloadable**, or streaming only?~~ — **answered: downloadable.** See §10.
4. ~~Is there an **RSS feed** for the podcast episodes, so they work in a real podcast app?~~ — **answered: yes, and it does more work than anything else in §10.** See §10.2.

---

## 10. Offline, download and packaging

### The objective

A reader should be able to take this corpus away — on a train, on a plane, at a
rink with no signal — and read it or listen to it without coming back. Three
separate questions hide inside that: what formats, how they are bundled, and
whether an installable app is worth building.

**The governing principle: publish standard formats and let existing apps do
the hard part.** Offline download, playlists, queueing, resume, background
playback and lock-screen controls are all solved problems inside podcast apps
and e-readers. Every one of them re-implemented in a web app is worse. The work
here is packaging, not product.

### 10.1 The number that constrains everything

Computed from `scripts/speech/index.json`, which is the real output of the
Phase 4 transform rather than an estimate of it:

| | |
|---|---|
| Documents | 35 |
| Billed characters | 2,796,473 |
| **Estimated narration** | **~55 hours** |
| At 64 kbps mono | ~1,087 MB |
| At 48 kbps mono | ~815 MB |
| At 32 kbps mono | ~544 MB |

*Duration assumes ~15.25 characters per second, which is roughly 150 words per
minute at ~6.1 characters per word including spaces. Replace it with a measured
figure as soon as the first document is narrated — everything below scales from
it.*

The longest single document, `rules_primer.md`, is on its own about **110
minutes** and ~53 MB at 64 kbps. The shortest are around 43 minutes.

Three consequences, and they shape the rest of this section:

- **"Download all the audio" is a ~1 GB action.** It is a legitimate thing to
  offer, and an illegitimate thing to do without asking. Hence D15.
- **Bitrate is a real decision, not a detail.** 48 kbps mono is a defensible
  default for spoken word and saves ~25%. Below that, prefer HE-AAC over MP3 —
  MP3 at 32 kbps is noticeably poor, while HE-AAC holds up and plays natively on
  both platforms.
- **Bandwidth is now a cost line.** Text is trivial; ~1 GB per full-audio
  download is not. Check current CloudFront pricing rather than trusting a
  figure written here, and consider whether the whole-corpus bundles should be
  a single monthly-built object rather than assembled per request.

### 10.2 Audio — three containers, one production

All three come from the same per-document MP3s. Do not produce them separately.

| Form | What it is | Why bother |
|---|---|---|
| **Per-document MP3** | One file per document, linked on its page | The atom. Everything else is a wrapper |
| **Chaptered M4B** | One file per layer, chapters = documents | The audiobook format. Remembers position, shows chapter names, works in Apple Books and every audiobook player |
| **Podcast RSS** | A feed with `<enclosure>` per episode | The single highest-leverage artefact in this plan |

**Why the feed matters more than it looks.** Subscribe in any podcast app and
you get, for free and better than you would build it: offline download, download
-all, playlists and queues, per-episode resume, background and lock-screen
playback, playback speed, sleep timer, and automatic delivery of new documents.
The user's request for "download all audio as a playlist" is *exactly* what a
podcast feed is. It is an XML file generated at build time.

Two feeds are probably right, because they are different listening experiences:

- **`/feed/narration.xml`** — the read-aloud corpus, one episode per document,
  in the corpus reading order.
- **`/feed/podcast.xml`** — the NotebookLM two-host episodes from Phase 6.

Feed requirements worth writing down now: absolute URLs, `<enclosure>` with
correct length and MIME type, `<itunes:duration>`, per-episode artwork or a
channel default, an explicit `<itunes:explicit>false</itunes:explicit>`, stable
GUIDs that do not change when a document is re-narrated, and the non-affiliation
notice in the channel description. **Validate against a real podcast app, not
just a feed validator** — they disagree.

> **⚠️ Check the licence interaction before publishing a feed.** Content is
> CC BY-NC 4.0 (D4), and a public feed is redistribution. That is fine for
> material this project owns, but §8 already flags NotebookLM's terms as the
> open question for generated audio, and a feed is a more public act than a
> page. Settle §8's NotebookLM checkbox before `/feed/podcast.xml` goes live;
> `/feed/narration.xml` has no such dependency, since Polly output from the
> project's own text carries no third-party claim.

### 10.3 Text — EPUB first, PDF second, markdown always

| Form | Good for | Bad at |
|---|---|---|
| **Markdown** | The source. Already public, already the truth | Not a reading experience |
| **EPUB** | Reading on a phone. Reflows, respects font size, works offline in Books / Play Books / KOReader | Tables — and this corpus has wide ones |
| **PDF** | Printing, and fidelity of layout | Reading on a phone. Fixed-width is the wrong shape for a 6-inch screen |

The user asked for PDF specifically, and it should exist. But **EPUB is the
better answer to the actual need** — offline reading on a phone — and both are
generated from the same HTML, so the marginal cost of doing both is small.

Practical notes:

- **Per-document and whole-corpus, both.** ~18,100 lines is a book; a single PDF
  will run to several hundred pages. Offer the layer-sized ones too.
- **Wide tables are the hard part**, exactly as they are on the site (§6.2). In
  EPUB they will need restructuring or a landscape-friendly fallback; in PDF,
  smaller type or landscape pages.
- **Cross-links must survive.** The corpus is heavily interlinked and
  `check-links.mjs` already guards that on the site. Internal links must become
  internal anchors in EPUB and PDF, not dead links to a website the reader
  cannot reach — a reader who downloaded this is by definition offline.
- **Sources sections stay.** They are collapsed on the site; in a downloaded
  artefact they are the provenance and should be present, even as endnotes.
- Generation: the site already renders HTML. Prefer that over a second
  markdown pipeline — Paged.js or WeasyPrint for PDF, and a straightforward
  EPUB 3 packager for EPUB.

**Worth investigating, not committing to: EPUB 3 Media Overlays.** That is the
standard for read-along audiobooks — text and narration synchronised, tap a
paragraph to hear it. It is the most literal possible answer to "an audiobook
version linked from each page", it uses artefacts phases 4b and 5 already
produce, and reader support is patchy enough that it should be a stretch goal
rather than a commitment.

### 10.4 The app question

**Recommendation: a PWA, not a native app (D9).**

The corpus is documents, a search index and audio files. Nothing in it needs a
native API. A PWA installs to the home screen on both platforms, ships from the
same CloudFront distribution, needs no store review, and cannot be rejected.

| | iOS / Safari | Android / Chrome |
|---|---|---|
| Install to home screen | Yes — Share → Add to Home Screen. Not automatic; needs telling | Yes, with an install prompt |
| Service worker offline | Yes | Yes |
| Large background downloads | No equivalent of Background Fetch | Background Fetch API |
| Storage quota | Historically tight, and eviction rules have changed repeatedly | Generous, quota-based |

> **⚠️ Verify the iOS storage and eviction behaviour on real hardware before
> promising offline audio.** Safari has at various times evicted cached data
> after a period of non-use, and the rules have differed between a browser tab
> and an installed home-screen app. Anything written here about it is likely to
> be stale by the time it is built. Treat "the audio is still there in three
> weeks" as an assumption to test, not a feature to advertise.

Which leads to the important design point, and it is D15:

- **Precache the text.** The whole corpus as HTML plus the Pagefind index is
  small, and this is the high-value, low-risk half. A reader with the text
  offline has the thing they came for.
- **Never precache audio.** ~1.6 GB. Offer per-document and per-layer "make
  available offline" controls with a visible storage readout, and let the
  reader choose.
- **For whole-corpus audio offline, point at a podcast app.** It already does
  this better, on both platforms, including background download. The PWA does
  not need to compete with it.

---

## 11. Reader focus: separating evidence from instruction

### The problem

The corpus mixes two things a reader wants at different moments: **what to do**,
and **how we know**. A player looking up defensive-zone assignments before a
game does not want six paragraphs of correlation coefficients first. A sceptical
reader deciding whether to trust any of this wants exactly those paragraphs.

Both readers are served today, but only by reading past the other one's content.

**The objective: let a reader focus on the part they came for, without deleting
the part they did not.** The evidence is not clutter — the review history argues
at length that the disclosures and provenance are the corpus's strongest claim
to trust. The answer is structure, not removal.

### 11.1 The corpus is already doing this by instinct

`faceoffs.md` is the worked example. It splits:

- `### What the evidence actually shows` — correlations, r-values, the spread
  between centres, whose finding each one is and at how many removes.
- `### So why bother?` — four practical claims that survive the evidence.
- **`**The practical version:** don't chase your faceoff percentage…`** — a
  one-line answer for a reader who wants only that.

That is exactly the right shape. The problems are that it is **ad hoc** (a
convention in one author's head, applied unevenly across 35 documents),
**invisible to the tooling** (the site cannot offer a control it cannot see),
and **unavailable to the other pipelines** (the speech transform cannot skip
what it cannot identify).

### 11.2 Proposal: a closed vocabulary of section kinds

Tag every section with one of a small, fixed set of kinds. Small and fixed
matters — an open vocabulary becomes 40 tags and means nothing.

| Kind | Holds | The reader asking for it |
|---|---|---|
| `instruction` | What to do, where to be, what to decide | "It's Tuesday, I'm playing in an hour" |
| `mechanism` | Why the instruction works | "I'll remember this better if I understand it" |
| `evidence` | Statistics, research findings, cited measurement | "Is any of this actually true?" |
| `rules` | Rulebook text and citation | "Is this legal?" |
| `craft` | Coaching heuristic, explicitly not evidence-backed | "Whose opinion am I reading?" |
| `reference` | Glossary, locations, tables to look things up in | "What is that called?" |

This is not a new taxonomy imported from outside. The style guide **already**
insists on the `craft` / sourced distinction, already requires that a coaching
choice is never presented as a rule of hockey, and already carries verification
notes. This makes an existing editorial instinct machine-readable.

**Marker syntax (D13).** It has to survive three consumers — the site's remark
pipeline, `md_to_speech.py`, and whatever generates EPUB and PDF — and it must
not damage the raw markdown, which is itself published.

```markdown
### What the evidence actually shows
<!-- kind: evidence -->
```

- Invisible in every renderer that does not understand it, including GitHub.
- One regex in Python, one visitor in remark. No plugin fights.
- Does not touch heading text, so **existing `file.md#anchor` cross-links keep
  working** — which matters, because the corpus has 1,305 of them.

> **⚠️ The objection, stated because this project has been bitten by it.**
> The review history records a quotation that existed *only inside an HTML
> comment* — commented-out 2019/20 copy that a naive grep found and no reader
> could ever see. Using comments as semantic carriers sits uncomfortably beside
> that scar. The distinction is that these carry no prose and make no claims:
> they are structural annotation, and the build check in Phase 4b should assert
> that no HTML comment in `content/` contains anything but a `kind:` marker.
> If that is still too close for comfort, the alternative is a visible heading
> suffix (`### What the evidence shows ^evidence`), which is uglier in the
> source and safer in principle.

### 11.3 What tagging unlocks

The point of the tags is what they let every downstream consumer do:

- **A focus control on each page** — *All · Practical · Evidence*. "Practical"
  shows `instruction`, `rules` and `reference`, and collapses the rest. Nothing
  is deleted; a collapsed section is one click away.
- **Distinct visual treatment**, so a reader skimming can see which is which
  without reading. `Sources` is already collapsible (§6.2); `evidence` is the
  same argument.
- **Honest per-page reading times**, split — "22 min, of which 7 min evidence".
- **A practical narration cut** (D14). This is where it pays most: the full
  narration is ~55 hours, and a cut that drops evidence and craft
  justification is a materially different product for someone listening in a
  car. **The fraction is currently unknown and Phase 4b must measure it.**
- **Search filters.** The Pagefind build currently reports `Indexed 0 filters`.
  Section kind is the obvious first one — "search the instructions only".
- **EPUB and PDF variants** (§10.3) from the same tagged source.

### 11.4 Editorial work this implies

Tagging will expose sections that are genuinely two things at once, and the fix
is to split them rather than to invent a `mixed` kind. That is real editorial
work across 35 documents, and it is the honest cost of this proposal.

Two rules to write into the style guide alongside it:

- **Every `##` section resolves to exactly one kind.** If it cannot, it is two
  sections.
- **Instruction must never depend on evidence the reader has skipped.** If the
  practical cut stops making sense without a statistic, that statistic belonged
  in the instruction. `faceoffs.md` passes this test — *"chase the ten or
  fifteen draws a game where the outcome actually changes something"* stands
  alone — and it is the standard the rest should be held to.

> **This is a content-quality change wearing a tooling change's clothes.** The
> tags are cheap. The value is in the discipline of deciding, section by
> section, what each one is *for* — which is the same discipline that produced
> the corpus's separation of coaching craft from rules, and it found real
> defects then.

---

## 12. Key facts: extracting the actionable layer

### The request

For content that teaches **how to play**, lead each section with the key facts,
and — where a section carries many — summarise them at the end. A player should
be able to take what they need to do off the page without reading the prose
around it, and then read the prose when they want the reasoning.

The model is `mind_map.pdf` (untracked, `*.pdf` is gitignored), a hand-made
breakdown of the defender, centre and winger documents. Its unit is not a
paragraph or a bullet — it is a **short labelled imperative**, one line:

```
Position: Behind net or along boards
Action:   Quick, purposeful breakout pass
Targets:  Winger on boards, low centre, or partner
Never:    Carry through the high-danger slot
Risk:     Slot turnovers lead to direct scoring chances
```

That density is the target. Each line is a thing to do, where to be, or what
goes wrong — never an explanation.

### 12.1 Scope: only where the content is about playing

25 of the 35 documents, being the four instructional layers:

| Layer | Documents | In scope |
|---|---|---|
| Positions | 5 | ✅ |
| Systems and Situations | 10 | ✅ |
| Technique | 5 | ✅ |
| Hockey IQ | 5 | ✅ |
| Getting Started | 1 | ❌ How to reach a rink, not what to do on one |
| Foundation | 3 | ❌ Reference. The glossary and rules primer are already lookup documents; imperatives would misrepresent them |
| Off the Ice | 6 | ❌ Equipment, conditioning, culture, watching — not on-ice action |

**One judgement call to settle:** `on_ice_communication.md` sits in Foundation
but is purely instructional — it is a list of what to shout and when. It is the
strongest candidate for an exception, and taking it would make the count 26.

### 12.2 The label vocabulary

A closed set, so the blocks stay scannable and mean the same thing everywhere:

| Label | Holds |
|---|---|
| `Position:` | Where you are |
| `Action:` | What you do |
| `Goal:` | What it is for |
| `Priority:` | What wins when two things compete |
| `Technique:` | How to execute it |
| `Options:` | Alternatives, where more than one is legitimate |
| `Targets:` | Who or where to pass |
| `Never:` | A hard coaching constraint |
| `Risk:` | What goes wrong, and how badly |
| `Key:` | The one thing to remember |
| `Mindset:` | The attitude the situation calls for |
| `Convention:` | **A coaching choice, marked as one** — "a default, not a law" |
| `Read:` | The cue that selects this option over its siblings |
| `Countered by:` | How the opposition defeats it |
| `Rule:` | **An actual rulebook rule, cited** |

The last three were added after the pilot (§12.7). `Convention:` exists because
the corpus hedges constantly and correctly — *"a coaching default, not a law"*,
*"a tendency, not a law"* — and with no label for it, the hedge either bloats
the line or gets dropped. Making the coaching-choice/rule distinction visible at
a glance is the whole point. `Read:` and `Countered by:` exist because the
systems documents are built from named options that each have a selecting cue
and a defeat, and collapsing a counter into `Risk:` misrepresents it.

> **⚠️ `Rule:` is the trap in this whole proposal, and the source mind map falls
> into it.** It labels *"Never carry through the high-danger slot"* as a `Rule`.
> That is a coaching instruction, not a law of hockey — and
> [the cardinal rule of the style guide](content_style_guide.md) is that the two
> must never be confused. Adopting the mind map's usage would commit that error
> in every one of 25 documents simultaneously, which is precisely the failure
> the corpus has spent nineteen review rounds keeping out.
>
> Hence `Never:` for coaching constraints, and `Rule:` reserved for NHL, IIHF,
> USA Hockey or Hockey Canada text, cited as the body cites it.

### 12.3 The real cost, from this project's own history

The style guide already records what happens to a summary layer:

> **The summary layer is where corrections go to die.** Every critical in round
> 10 lived in a Key Takeaway or Common Mistakes bullet left behind when its
> body was fixed.

Each document currently has **two** summary blocks. This proposal adds one per
`##` section — call it ten to fifteen more per document, across 25 documents.
**That is roughly a tenfold increase in the surface where a corrected body can
be contradicted by a stale summary**, in a corpus whose most expensive defects
have lived in exactly that layer.

This does not make the proposal wrong. It makes three controls mandatory rather
than optional:

1. **Extraction, not authorship.** Every fact must be traceable to a sentence
   already in the body. A fact block may not contain a claim the section does
   not make. If a fact cannot be extracted without inventing, that is a finding
   about the section, not a licence to write it.
2. **The body is the source of truth, always.** Where a fact and the body
   disagree, the fact is wrong by definition.
3. **A review pass that only reads the fact layer**, because — per §5 of the
   review history — a check finds what its method looks at, and none of the
   nineteen completed rounds was looking at a layer that did not yet exist.

### 12.4 Where the blocks go

**Revised after the pilot — the level was wrong in the first draft.**

- **At `###`, not `##`, wherever subsections exist.** In `defender.md` the `##`
  headings are one-sentence containers: `## Defensive Zone` is a single line
  introducing its subsections, and yields two facts that restate its own
  heading. `## Other Situations` yields none. The `###` subsections are where
  the teaching lives, and they are already written as *Where to be / What to do
  / Goal / Key considerations* — which maps onto the labels almost
  mechanically.
- **At `##` only where a section has no subsections** and is itself the unit of
  teaching.
- **Closing summary** — only where a section runs long or carries many facts.
  Not every section earns one; a summary of four facts is noise.
- **`## Common Mistakes` and `## Key Takeaways` are exempt.** Both pilots
  reached this independently. They are already extraction layers of terse
  one-liners — every Common Mistakes entry takes `Never:`, so the label column
  carries no information — and a third restatement above two existing ones adds
  another place for a correction to fail to reach. See §12.3.
- **Document level** — the existing `## Key Takeaways` already does this job and
  **stays as it is**. This proposal adds a section-level layer beneath it, and
  should not duplicate it.

**Fact budget: 3–6 by default, up to 8 where the section earns it, or split the
section.** The pilots found the tight cap doing real damage in dense sections —
in `breakouts.md` §2 the casualty was Rule 56.1, the interference/pick trap that
costs two minutes; in `defender.md` the neutral-zone pressuring subsection had
to choose between the step-up/pinch distinction and the trapezoid rule. **When a
cap forces a rulebook fact out, the cap is wrong, not the fact.**

### 12.5 How it interacts with §11

These two are complementary, and doing them together is cheaper than doing them
in sequence:

- §11 asks *what kind* of content each section is.
- §12 asks *what a player must do* about it.

A fact block is the `instruction` kind, distilled. Sections tagged `evidence` or
`craft` should generally **not** carry one — a statistic is not something you
do. So **tagging first tells you which sections need fact blocks**, and the two
passes want to be one editorial sweep rather than two.

It also feeds the practical narration cut (D14) and the offline formats (§10):
a fact block is the natural thing to read aloud at the top of a section, and the
natural thing to render as a card on a phone.

### 12.6 Plan

**Phase 4c — Key facts**, after 4b and before Phase 5, for the same reason 4b
comes before 5: narration should be generated once, from final text.

- [x] **Pilot run on two documents** — `positions/defender.md` (positional) and
      `breakouts.md` (systems). Findings in §12.7; proposals kept in
      [`pilots/`](pilots/)
- [ ] Settle the `on_ice_communication` question (§12.1)
- [ ] Decide the three sections the pilot says need splitting rather than
      capping (§12.7)
- [ ] Add the convention to `content_style_guide.md`, including the `Rule:`
      restriction and the exemptions
- [ ] Apply across the in-scope documents, parallelisable per document
- [ ] **Fact-layer-only review round**, per §12.3
- [ ] Render fact blocks distinctly on the site; feed them to the speech
      transform as a section preamble

**Exit gate:** every in-scope section leads with facts traceable to its own
body, and a review round that read *only* the fact layer has run clean.

### 12.7 What the pilot found

Two documents, chosen for different shapes. **220 facts proposed, every one
line-traced to its source.** Full proposals in [`pilots/`](pilots/).

| | `defender.md` | `breakouts.md` |
|---|---|---|
| Headings covered | 27 (8 `##`, 19 `###`) | 14 `##` |
| Facts proposed | 143 | 77 |
| Blocks recommended | 24 of 26 | 10 of 13 |

**It works, and it works best exactly where the corpus is already well
structured.** The twelve zone-by-zone `###` subsections of `defender.md` needed
almost no interpretation. The `Rule:` discipline held completely in both runs:
nine `Rule:` facts in `breakouts.md`, all citing provisions the document itself
cites, and every coaching instruction that *reads* like a law — including
"never through the slot", which the body itself calls "the absolute rule" —
came out as `Never:` or `Priority:`.

**Four things it changed in this specification**, all folded in above: the
`###` level (§12.4), the three new labels (§12.2), the softer fact budget
(§12.4), and the Common Mistakes / Key Takeaways exemption (§12.4).

**Three things still to decide:**

1. **Sections that need splitting, not capping.** `breakouts.md` §3 *The Named
   Breakout Options* is 124 lines, nine options × five attributes, ~45
   extractable facts. No six-fact selection is honest: naming some options and
   not others implies a preference order **the document deliberately refuses to
   assert**. It needs per-`###` blocks, which means giving the nine options
   their own subheadings. Same for `defender.md`'s neutral-zone pressuring
   subsection and `breakouts.md` §8.
2. **What happens to the system-dependence caveats.** Five of thirteen
   `breakouts.md` blocks spend a fact slot on one. They are the least
   imperative-looking lines in every block and would be first cut if anyone
   tightened the budget later — which is precisely how the cardinal rule gets
   broken by attrition. `Convention:` is the mitigation; it needs enforcing.
3. **Ownership collisions.** A fact can restate a number another document owns.
   Both agents caught themselves doing it and stopped — the Tulsky zone-entry
   rates belong to `zone_entries.md`, the hash-mark dimensions to
   `rink_map_and_glossary.md`. The style guide's ownership convention has to
   extend to the fact layer explicitly, or 25 documents will quietly duplicate
   each other's numbers.

**And one finding about this specification's own example.** The mind map block
quoted in §12 is not section-traceable: `Position`, `Action` and `Targets` come
from `defender.md` lines 36–38, but `Risk: Slot turnovers lead to direct
scoring chances` comes from line 66 — the *next* subsection down. A hand-made
example, by a careful author, already drifted one fact out of its section.

> That is the whole argument for "extract, never author" in one line. It is not
> a hypothetical failure mode; it is in the sample the convention was designed
> from.
