# SEO and visibility — baseline, diagnosis and plan

> **Detail, not the live list.** The open items from this file now live in
> [`OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md) **Tier 6**.
> Keep this file for the baselines, the query tables and the verification behind every figure.


**Written 22 August 2026.**

**Status: analysis complete. Nothing in this repository has been changed.**
Another agent is mid-flight across `content/` and `site/`, so every action below
that touches those trees is deliberately unstarted. HEAD moved during the session
(`ff2962e` → `113e3fe` and on), and review round 38 landed mid-session, so re-check
`git status` and `git log -1` before starting anything here.

**P7 is DONE and LIVE (22 August):**
https://blog.jamesdbloom.com/BuildingAReferenceSiteWithAI.html

| Item | State |
|---|---|
| Article published | ✅ live, 200, Disqus confirmed working in a browser |
| Linked from `index.html` and `sitemap.xml` | ✅ verified live |
| Linked from `JVMInternals.html` + `JavaCodeToByteCode_PartOne.html` | ✅ verified live after invalidation |
| `font-display: swap` on all four CSS bundles | ✅ 20/20 per bundle, verified in the served CSS |
| CloudFront compression | ✅ live, **70–89% saving** on HTML/CSS/XML/JS, measured |
| Content-Type / Cache-Control on all objects | ✅ 200/200 processed, 0 skipped, `/*` invalidated |
| Blog repo pushed to GitHub | ✅ `fc5da09..763188f master -> master` |

### Compression — DONE, measured

`DefaultCacheBehavior.Compress` set to `true` on 22 August. Measured live with
real GET requests:

| File | Uncompressed | gzip | Saving |
|---|---|---|---|
| `JavaCodeToByteCode_PartOne.html` | 86,815 | 14,582 | **83%** |
| `JavaCodeToByteCode_PartTwo.html` | 37,533 | 7,754 | **79%** |
| `JVMInternals.html` | 66,154 | 15,446 | **76%** |
| `BuildingAReferenceSiteWithAI.html` | 36,819 | 10,936 | **70%** |
| `global_normal_article.css` | 30,314 | 4,499 | **85%** |
| `sitemap.xml` | 10,517 | 1,145 | **89%** |
| `js_2013_11_17_17_56/all.js` | 2,594 | 1,016 | **60%** |

`sitemap.xml` and `all.js` compress **only because** the metadata pass corrected
their Content-Types. As `application/octet-stream` and the non-standard
`text/js` they were not on CloudFront's compressible list and would have been
skipped regardless of the `Compress` setting. The two changes had to be made
together.

#### A wrong diagnosis, corrected — do not repeat this mistake

An earlier version of this section stated that compression was enabled but "not
yet taking effect", and attributed it to objects cached before the setting
changed, noting that a cache-busting query string could not force a miss because
`ForwardedValues.QueryString` is `false`.

**That was wrong.** Compression was working the whole time. The error was the
measurement:

**CloudFront does not apply compression to `HEAD` responses.** Every check had
been `curl -sI`, which issues a HEAD, so `Content-Encoding` was absent from the
response no matter what the distribution was doing. The invalidation that
followed was unnecessary for compression, though it was still needed for the
corrected Content-Types.

Verify compression with a GET and inspect the bytes actually transferred:

```bash
curl -s -D - -o /dev/null -H 'Accept-Encoding: gzip' URL | grep -i content-encoding
curl -s -o /dev/null -H 'Accept-Encoding: gzip'     -w '%{size_download}\n' URL
curl -s -o /dev/null -H 'Accept-Encoding: identity' -w '%{size_download}\n' URL
```

This is the second measurement error in this file's history, after the
`curl --http2` one in §5. Both had the same shape: a tool limitation read as a
property of the server. Confirm what the client is actually doing before
concluding anything about the origin.

### Verified while deploying

The origin carries `OriginAccessControlId: «Origin Access Control id»` (modern Origin
Access Control), confirming that access does not depend on object ACLs and that
the copy-in-place metadata rewrite is safe.

### Five review passes ran before publication

Three on the first draft (fact-check, hostile/adversarial, prose+markup), two on
the revision (regression, new-claims verification). Between them they found,
among much else:

- A count borrowed from the wrong review dimension — itself a **D8 numeric
  ownership** violation, in the article whose closing section is about D8.
- A hedge stripped from the Berg et al. study the article leads with, which the
  corpus itself carries inline.
- An unqualified "a review record for every round" when records start at
  round 20.
- "Two players cannot silently overlap", which `rink.mjs`'s own comments
  disprove twice.
- A rhetorical antithesis ("Not found by that round. *Caused* by it") that
  contradicted the record it cited — round 37 found all seventeen.
- **A functional blocker no prose review would have caught:** the page lacked
  the `<div id="dzone">` that `all.js` writes into before initialising Disqus.
  Without it the script threw an uncaught `TypeError` and abandoned the comment
  code, so the comments the article invites would never have loaded. Found by
  static analysis of `all.js` plus a grep showing 18 of 19 sibling pages had the
  div.

**Eight of the twelve findings in the second round were defects introduced by
the repairs for the first round** — which is the article's own subject, and the
strongest evidence in this file that the multi-brief review method works.

**The gap none of the five passes could close:** nobody rendered the page.
Chrome blocked `localhost`, `file://` and the live site in that session. The
owner confirmed Disqus in a browser afterwards.

---

## 0 · Why this file exists

The question was how to increase traffic to `learn-ice-hockey.com` — ideally by
improving search placement and by getting other sites to link to it.

The answer turned out to be different from the one anyone would guess without
looking at Search Console, so the measurement baseline is recorded here in full.
**Re-pull the same report in four weeks and diff the positions, not the clicks.**
At current volume clicks are noise; positions are signal.

---

## 1 · The baseline

Google Search Console, domain property `sc-domain:learn-ice-hockey.com`,
data range **28 July – 19 August 2026** (~3.5 weeks — the property's full history,
not a 90-day window despite the "3 months" selector).

| Metric | Value |
|---|---|
| Total impressions | **5,090** |
| Total clicks | **8** |
| Average CTR | **0.2 %** |
| Average position | **20.8** |
| Distinct queries | 348 |
| Distinct pages | 43 |
| Distinct countries | 92 |

That is roughly **145 impressions a day**. Discovery is not the problem.
Indexing is not the problem. The site is shown constantly, on page two and
page three, where nobody clicks.

### Analytics

GA4 is live and firing: `G-VTE9ZGWY15`, emitted via the `PUBLIC_GA_ID` repository
variable, confirmed present in the live HTML of the home page.

**Caveat worth resolving before trusting GA history:** the `PUBLIC_GA_ID`
repository variable carries a timestamp of **2026-08-16**, but the owner reports
GA running for three to four weeks. Either the variable was rotated/updated on the
16th, or GA history before that date is thinner than expected. Check the GA
property's own data-retention start date before reading any pre-16-August figure.

---

## 2 · Where the eight clicks came from

| Page | Impressions | Position | Clicks |
|---|---|---|---|
| `reading-diagrams/reading_ice_hockey_diagrams` | 93 | **11.4** | 3 |
| `foundation/rink_map_and_glossary` | 193 | **15.8** | 2 |
| `off-the-ice/conditioning_and_recovery` | 223 | **13.0** | 1 |
| `hockey-iq/time_and_space` | 38 | **11.6** | 1 |
| `systems/faceoffs` | **657** | 24.9 | **0** |
| `foundation/rules_primer` | **625** | 36.4 | **0** |
| `systems/neutral_zone_systems` | 354 | 14.8 | 0 |
| `off-the-ice/equipment` | 228 | 14.1 | 0 |
| `systems/game_management` | 208 | 17.0 | 0 |

**Every click came from a page ranking better than ~16. Nothing below 16 has ever
produced a click on this site.**

That is not a borrowed rule of thumb — it is this property's own observed
threshold, derived from its own data. It is the single most useful number in this
file, and it sets the target: **get pages above 16, ideally into the top 10.**

---

## 3 · The strategic finding — concepts win, rules lose

Sorting the 348 queries by position produces a clean split.

**Already ranking on page one — all conceptual or vocabulary queries:**

| Query | Position |
|---|---|
| time and space hockey | 6.4 |
| what does special teams mean in hockey | 6.7 |
| a lesson in puck handling heroically | 7.7 |
| side winger | 8.0 |
| watch the player not the puck meaning | 9.0 |
| what is special teams in hockey | 9.0 |
| special teams hockey | 9.0 |
| centre hockey | 10.0 |
| puck-carrier | 10.0 |
| winger ice hockey | 10.5 |

**Ranking 40–80 — all rules queries:**

| Query | Position |
|---|---|
| hockey basic rules | 79.3 |
| basic rules in hockey | 79.7 |
| hockey rules | 72.1 |
| hockey game rules | 71.7 |
| rules of ice hockey game | 68.5 |
| rules of ice hockey | 67.7 |
| ice hockey rules | 66.8 |
| hockey main rules | 64.7 |
| forecheck | 60.8 |
| hockey face off rules | 47.6 |
| hockey faceoff rules | 42.4 |
| nhl faceoff rules | 41.6 |
| face off hockey | 40.8 |

The corpus ranks **page one for concepts, terminology and hockey IQ**, and
**40th–80th for rules**. This is exactly what the competitive landscape predicts:
almost nobody writes carefully about time and space, the half wall, or playing
without the puck; NHL.com, Wikipedia and USA Hockey own every rules term outright.

**Consequence:** `faceoffs` (657 impressions) and `rules_primer` (625 impressions)
together are **a quarter of all impressions and zero clicks**, because the query
cluster they attract is the most contested vocabulary in the sport. Those
impressions are a mirage. Stop reading them as an opportunity.

---

## 4 · Geography — North America is 11× the UK

| Country | Clicks | Impressions | Position |
|---|---|---|---|
| United States | 3 | **2,929** | 15.9 |
| Canada | 0 | **480** | 30.3 |
| United Kingdom | 2 | **307** | 22.0 |
| India | 0 | 147 | 40.0 |
| Philippines | 0 | 102 | 37.4 |
| Australia | 0 | 77 | 14.6 |
| Turkey | 0 | 66 | 39.1 |
| Germany | 1 | 52 | 8.8 |
| Denmark | 1 | 15 | 14.1 |
| Switzerland | 1 | 9 | 6.0 |

US + Canada = **3,409** against the UK's **307**.

This overturns the pre-data assumption that the UK angle (`uk_rules.md`, the
British material spread across ~20 files) was the lead. It is a real and
defensible niche, and UK position 22.0 against US 15.9 means the UK is
*under*-performing relative to the US and has headroom — but it is a side-bet,
not the main event.

### The spelling split is measurably costing rank

| Query | Position |
|---|---|
| centre hockey | **10.0** |
| how to play centre in hockey | 29.0 |
| center in hockey | 25.8 |
| hockey center position | 25.5 |
| how to play center in hockey | 26.0 |
| hockey center positioning | 24.5 |

The site is `lang="en-GB"` with British spellings throughout. Americans — 58 % of
impressions — type "center". Carrying **both** spellings where a term is
introduced is accurate content, not keyword stuffing: the corpus already has an
established habit of recording that two sources use different wording. This is a
content change and is therefore **blocked behind the review gate** (see §7).

---

## 5 · Technical SEO — already done, verified, nothing to fix

Checked directly against the live site and the source, not assumed:

- Canonical URLs, `og:type`/`og:title`/`og:description`/`og:url`/`og:site_name`,
  `twitter:card`, `author`, `license`, `sitemap` link — all present
  (`site/src/components/BaseHead.astro`).
- JSON-LD: `Article` / `WebSite` + `BreadcrumbList`, with the breadcrumb
  correctly refusing to emit crumbs for section URLs that do not exist.
- `/sitemap.xml` 200, `robots.txt` correct, IndexNow committed, Bing verified.
- **`www` → apex `301` verified working right now** (CloudFront
  `FunctionGeneratedResponse`), and `http://` apex `301`s too.

**One apparent defect investigated and dismissed:** Search Console lists
`https://www.learn-ice-hockey.com/reading-diagrams/reading_ice_hockey_diagrams/`
as a separate page with 4 impressions and 1 click. The redirect was `curl`-checked
and is clean, so this is historical residue from before the redirect and will
decay. **No action.** (a retired working note already warned to
`curl -sI` before acting on exactly this class of report. It was right.)

**Do not invest in FAQ or HowTo structured data.** Google deprecated FAQ rich
results on 7 May 2026 and had already removed HowTo; both remain valid schema.org
but produce zero search appearance. Current guidance is `Organization`,
`BreadcrumbList` and `Article` — which the site already emits. Structured data is
finished.

---

## 6 · The plan, in priority order

### P1 — Push the five striking-distance pages above the click threshold

About **1,200 impressions sitting at positions 13–17**, just below the line where
this site's own pages start converting at 1–3 %.

| Page | Impressions | Position |
|---|---|---|
| `systems/neutral_zone_systems` | 354 | 14.8 |
| `off-the-ice/equipment` | 228 | 14.1 |
| `off-the-ice/conditioning_and_recovery` | 223 | 13.0 |
| `systems/game_management` | 208 | 17.0 |
| `foundation/rink_map_and_glossary` | 193 | 15.8 |

Cheapest available traffic in the project. Mostly title, meta description,
heading and internal-linking work.

### P2 — Build out the concept and terminology surface

This is where the corpus demonstrably wins. Definition-shaped queries already
showing, none yet converting:

| Query | Position |
|---|---|
| what is the half wall in hockey | 19.6 |
| hockey half wall | 28.5 |
| half wall hockey | 46.0 |
| puck control | 28.5 |
| forechecking | 27.3 |
| forecheck definition | 32.3 |
| ice hockey zones | 32.3 |
| in the zone hockey | 20.0 |

167 glossary entries already exist in `content/foundation/rink_map_and_glossary.md`.
Give them stable per-term anchors and `DefinedTermSet` JSON-LD. **Honest caveat:**
`DefinedTerm` earns no rich result; the win is deep-linkable anchors and passage
matching, not a SERP badge.

### P3 — Section hub pages

`/technique/`, `/systems/`, `/positions/` and the other five all return **404**
(verified). Building them:

1. creates ranking targets for "hockey systems", "ice hockey positions";
2. lets `BaseHead.astro` emit a full breadcrumb trail instead of truncating to
   Home → document (the truncation is already documented in that file as a
   deliberate workaround for these missing pages);
3. redistributes internal link equity toward the P1 pages.

### P4 — Open Graph images

**No `og:image` anywhere**, and `twitter:card` is `summary` rather than
`summary_large_image`. Every share on Reddit, Discord, WhatsApp, Slack or
LinkedIn renders as a bare text box. The diagram pipeline
(`site/scripts/build-diagrams.mjs`, `site/src/diagrams/*.mjs`) can generate a
1200×630 card per document at build time from existing SVG.

**Demoted from its original position.** It does nothing for the 5,090 impressions
— it is a share and link multiplier, not a ranking fix.

### P5 — Attribution block

Content is **CC BY-NC 4.0**, so attribution is *required* of any reuser, yet the
footer states the licence without giving anyone a snippet to paste. A copy-paste
"cite this page" block emitting ready-made HTML turns the licence into a backlink
mechanism: every coach who lifts a section is obliged to credit, and now has one
click to do it correctly.

### P6 — RSS/Atom feed

`/rss.xml` returns 404. Feed readers and club newsletters are how a niche resource
gets picked up passively.

### P7 — The blog, and third-party links

`github.com/jamesdbloom/jamesdbloom_blog` — **private**, branch `master`, last
pushed 2014. Verified: the repo's `index.html` is **byte-identical** to what is
live, so the repo genuinely is the source of truth despite the 2017 S3
`Last-Modified`. Hand-written static HTML on S3 + CloudFront. `beta_blog.sh` is an
obsolete shared-hosting script (`~/domains/…`); today's deploy would be an
`aws s3 sync` plus invalidation, run by the owner.

**The authority is real.** `blog.jamesdbloom.com/JVMInternals.html` still
outranks the Medium re-post and the Scribd copy for "JVM Internals".

**But be clear-eyed:** both domains are owned by the same person, so Google
discounts a link between them. A "check out my hockey site" post buys referral
traffic and author-entity association — **not** a ranking shortcut.

**Drafted 22 August (uncommitted, not deployed):**
`AdversarialReviewWithAIAgents.html`, plus links added to `index.html` and
`sitemap.xml`. Covers how the site was built with AI agents, adversarial review
as a process, context carried in the repository rather than in prompts, local
mechanical validation and its limits, SVG diagrams generated from a validated
coordinate table using semantic position names, and the history/lessons-learned
convention. Three outbound links to `learn-ice-hockey.com`. Every figure in it
was verified in-session; the round-13 defect snapshot is quoted with its
qualification intact, per the trap recorded in `CLAUDE.md`.

**Bug found and fixed in the draft (22 August).** The article originally loaded
`global.css` + `css_section.css`, copied from `HowToFloatCorrectly.html` — but that
is the two-column code/explanation layout. Every *prose* article loads the single
pre-bundled `global_normal_article.css`. It matters: `normal_article.css` defines
`.active` and `.section.description`, and `css_section.css` does not, so the
sidebar bio block and the current-article highlight would have rendered unstyled.
Switched to `global_normal_article.css` — correct styling, and two CSS requests
become one.

**`font-display: swap` added (22 August).** All 20 `@font-face` blocks in each of
the four bundles (`global.css`, `global_home.css`, `global_css_section.css`,
`global_normal_article.css`) — 80 blocks total, verified 20/20 per file, no
malformed separators. Previously absent everywhere, so text was invisible while
~148 KB of fonts loaded. Cheapest perceived-speed win available. Adds ~360 bytes
per bundle before gzip.

**Deploy set is now seven files** (`scratchpad/deploy_blog.sh`, dry-run clean):
the article, `index.html`, `sitemap.xml`, and the four CSS bundles. Metadata in
the deploy script matches `blog_metadata.sh` so a deploy cannot regress the
Cache-Control/Content-Type pass.

**Still to do:** owner review of the prose; commit; deploy (bucket and
distribution now identified — see below).

### Blog deployment — investigated 22 August, confirmed

| Thing | Value |
|---|---|
| CloudFront distribution | **`«CloudFront distribution id»`** |
| Aliases (all one distribution) | `jamesdbloom.com`, `www.jamesdbloom.com`, `blog.jamesdbloom.com` |
| S3 bucket | **`«S3 bucket»`** (us-east-1) |
| AWS account | «redacted» — reachable via the deployment SSO profile. **Identifiers are held locally and deliberately kept out of the corpus**; `scripts/check_secrets.py` blocks them, and this repository is public. |
| Default root object | `index.html` |
| Viewer protocol | `redirect-to-https` |
| Objects live | 200, every one last modified 2017-11-05 |

**All three hostnames serve the same bucket through the same distribution**, which
is why `www.jamesdbloom.com` and `blog.jamesdbloom.com` return byte-identical
content. The pages' canonical tags do point at `blog.`, so the duplication is
consolidated — but over `http://`.

#### DO NOT `aws s3 sync` this repository to that bucket

The repo holds **1,170 files; only 200 are deployed.** A plain sync would publish
around 970 files that have never been on the live site — including a mirrored
`mock-server/` copy, `source/` build scratch, `.htaccess` files that do nothing on
S3, `beta_blog.sh`, and `promotion/sourceforge/class_editor/javadoc/` (a complete
ANTLR javadoc tree from an old SourceForge project).

A sync with `--delete` would be worse. It would remove `.well-known/keybase.txt`,
which is live and not in the repo, and it would break a working page — see below.

#### The repo is not a faithful mirror of the bucket

- **`WhyUseApplicationCache.html`** (capital U, 16,871 b) is live and returns 200.
  The repo instead contains **`WhyuseApplicationCache.html`** (lower-case u,
  16,707 b), which is a different file by both name and content and returns **403**
  live. All 23 HTML pages link to the capital-U spelling. The live site is correct;
  the repo copy is stale and misnamed. Do not let it overwrite or shadow the live
  file.
- `.well-known/keybase.txt` is live only.
- `index.html` and `sitemap.xml` differ only by the additions made on 22 August.

**Therefore the deploy is an explicit three-file upload, never a sync:**
`AdversarialReviewWithAIAgents.html`, `index.html`, `sitemap.xml` — followed by a
CloudFront invalidation of those paths plus `/`. Nothing else is touched, and
nothing is deleted.

#### Blog performance audit — 22 August

Distribution settings were **already good** apart from one field. Checked, not assumed:

| Setting | Value | Verdict |
|---|---|---|
| `HttpVersion` | `http2and3` | Optimal — HTTP/2 and HTTP/3 both on |
| `IsIPV6Enabled` | `true` | Good |
| `PriceClass` | `PriceClass_All` | All edge locations |
| TLS minimum | `TLSv1.2_2021` | Current |
| `DefaultTTL` | 86400 | Reasonable |
| Extra cache behaviours | 0 | Nothing to audit |
| **`Compress`** | **`false`** | **The one gap** |

*A note on method: an early `curl --http2` test reported HTTP/1.1 for both the blog
and the hockey site. That was meaningless, but not for the reason first given.
macOS's system `curl` (8.7.1) **does** have HTTP/2 — `nghttp2` is linked and
`HTTP2` is in its `Features:` line. The problem is that it is built against
**SecureTransport**, Apple's TLS library, which does not complete ALPN here — and
h2 over TLS can only be negotiated via ALPN. Proof: the identical test against
`cloudflare.com`, which certainly serves HTTP/2, also returns
`ALPN: server did not agree on a protocol` and falls back to HTTP/1.1. So this
`curl` cannot reach h2 on **any** host.

It also cannot do HTTP/3: `HTTP3` is absent from `Features:` and no QUIC library
is linked. It records the server's `Alt-Svc: h3=":443"` advertisement but cannot
act on it.

Checking the `Protocols:` line for `h2` — which is what was done first — is simply
the wrong line; that lists URL schemes. `Features:` is the one that matters.

The `http2and3` value above comes from the distribution config, which is
authoritative. Verify with a browser or a Homebrew `curl` (OpenSSL backend), not
with `/usr/bin/curl`.*

**Security posture is sound.** The bucket has all four public-access blocks on,
no public object ACLs, and grants read solely by bucket policy to the CloudFront
service principal scoped to this distribution (Origin Access Control). A metadata
rewrite therefore cannot drop public access.

##### Content-Type is wrong on most objects, and it defeats compression

CloudFront only compresses types on its compressible list, so
`application/octet-stream` never compresses no matter what `Compress` says.

| Object | Currently served as | Should be |
|---|---|---|
| `sitemap.xml` | `application/octet-stream` | `application/xml` |
| `all.js` | `text/js` (non-standard) | `text/javascript` |
| every PNG (68) | `application/octet-stream` | `image/png` |
| every WOFF/TTF/EOT (60) | `application/octet-stream` | font types |
| `favicon.ico` | `application/octet-stream` | `image/x-icon` |

HTML (`text/html`) and CSS (`text/css`) are correct and would compress.

##### Cache-Control is absent entirely

No object sends one. The `.htaccess` files that used to set cache headers do
nothing on S3. Fixed in the same pass as Content-Type, since
`--metadata-directive REPLACE` rewrites all metadata at once and **resets
Content-Type unless restated** — omitting it would make every page download
instead of render.

Chosen TTLs, deliberately short at the owner's request, with HTML/CSS/JS sharing
one value so a visitor can never get new HTML against stale CSS:

- `html` / `xml` / `txt` / `appcache` / `json` — `public, max-age=300`
- `css` / `js` — `public, max-age=300` (same as HTML, eliminates skew)
- images / fonts / icons — `public, max-age=86400`

Script: `scratchpad/blog_metadata.sh` (dry-run default). Dry run covers **199
objects, 0 skipped**. Operates on the live object list, never the repo. Side
effect: every object's `Last-Modified` moves from 2017-11-05 to the run date, and
ETags change. Harmless, but it is a real change to the bucket.

##### Fonts — the largest byte cost, but smaller than it first appears

20 `@font-face` families are declared; **only 4 are actually applied**:
BandaRegular (`body`), ClassicComicBold (`.author`/`.date`/`.strong`),
ComicSCFRegular (`#header`), EarwigFactoryRegular (`#footer`). Together ~148 KB
of WOFF — more than the 66 KB HTML.

The other 16 are never applied, so browsers never fetch them. **A 605 KB
`CrayonHandBold` WOFF sits in the bucket and costs a visitor nothing** — it was
initially mistaken for the headline performance problem and is not one.

Remaining font opportunities, unstarted: `font-display: swap` (absent, so text is
invisible while fonts load — cheapest perceived-speed win available); WOFF2
(~148 KB → ~100 KB); dropping the 16 unused declarations and the 4.1 MB of
SVG-format fonts, which no current browser fetches. Note gzip does **not** help
fonts — WOFF is already internally compressed.

#### CloudFront compression is off — SUPERSEDED, fixed 22 August

*Left in place as the original finding. `Compress` was set to `true` on
22 August; see "Compression is on but not yet serving" at the top of this file
for the current state and the remaining invalidation step.*

`DefaultCacheBehavior.Compress` was **`false`**, confirmed against the live
response: `JavaCodeToByteCode_PartOne.html` ships **86,695 bytes uncompressed**
with no `Content-Encoding`, even when the request advertises gzip and brotli.
Turning compression on is a one-field change to the distribution config and would
cut the largest pages by roughly three-quarters. Worth noting that this is a blog
whose own subject matter includes web performance.

**Blog technical decay found while in there** (none fixed): analytics is dead —
the pages still load Google Analytics `ga.js` with a Universal Analytics property
(`UA-32687194-1`), which stopped processing data in 2023, so **the blog currently
has no working analytics at all** and blog→site referral traffic cannot be
measured until GA4 replaces it. Also: `manifest="jamesdbloom.appcache"` on every
page (AppCache is removed from all modern browsers), a still-loading Google
AdWords conversion script, Google+ `rel="author"` and share buttons (dead since
2019), `http://` canonicals throughout, `.htaccess` files that do nothing on
S3/CloudFront, and `DesignPatterns.html` present in the repo but unlinked from
the index.

#### Trap for the `https://` cleanup — Disqus threads

The `jamesdbloom` Disqus forum is still live (`embed.js` 200, forum page 200), so
comments work. But every existing page keys its thread to an **`http://`** URL via
`disqus_url`. Disqus addresses threads by that exact string, so applying the
`https://` cleanup site-wide **would orphan every existing comment thread** unless
Disqus's URL mapper is used to migrate them first. The new article is unaffected —
it has no thread yet and uses `https://` deliberately.

**The play that actually works:** don't write a hockey post. Write the post that
blog's audience wants — how a 37-document corpus was written and put through
twenty rounds of adversarial review — which links the hockey site naturally and is
submittable to Hacker News and Lobsters, where it can earn *third-party* links
that do count. Highest upside variance in this file.

Housekeeping to fold into the same pass: canonical is `http://` not `https://`;
Google+ share buttons and `rel="author"` point at a service dead since 2019;
footer says `© 2012`; `sitemap.xml` dates from 2014; `DesignPatterns.html` exists
in the repo but is unlinked from the index.

### P8 — Outreach (owner sends; preparation can be done here)

Target UK clubs and learn-to-play programmes running thin "beginners guide" pages.
Demoted per §4 — real, defensible, but the small end of the audience. Reddit and
coaching forums work only as answer-a-question-with-a-deep-link, never as
link-drops. No accounts to be created and nothing to be posted on the owner's
behalf.

### Explicitly deprioritised

- **The rules query cluster.** Position 40–80 against NHL.com and Wikipedia is
  not a closable gap.
- **FAQ / HowTo structured data.** Dead as of May 2026 (§5).

---

## 7 · Sequencing constraint — hold

**No `content/` or `site/` change is to be made while another agent is working.**
At the time of writing, 52 files are modified across both trees and HEAD has not
moved. Per `CLAUDE.md`, a corpus-wide sweep racing a document-level edit clobbers
silently, and commit `239f70d` exists because that already happened once.

When work does start:

- P1, P3, P4, P5, P6 are `site/`-only and sit **outside** the content review gate
  — but still need `site-reviewer` and a browser pass before commit.
- P2 and the §4 spelling work **touch `content/`** and are fully gated:
  `check_links.py`, `check_facts.py`, `content-reviewer`, a review record in
  `project/reviews/`, and `commit-gate` on the staged diff.
- `main` deploys to production on push. **Ask before pushing.**

---

## 8 · Honest expectation

From a base of 8 clicks, moving ~1,200 impressions from position 15 to position
8–10 plausibly produces a few dozen clicks a month. That is an order of
magnitude — on a very small number. This compounds over months; it is not a
switch.

**Confounder to record now:** the northern-hemisphere season starts in September.
Hockey query volume will rise for reasons that have nothing to do with any change
made here. Do not read that lift as an effect of this plan.

---

## 9 · What this analysis could not have found

- **Whether any of it works.** Nothing here has been implemented or tested. Every
  position figure is a pre-change baseline.
- **Anything about the other 305 queries and 33 pages.** Search Console's
  rows-per-page control resisted automation, so this rests on the top 100 queries
  and the top 10 pages by impressions. The top 10 pages cover roughly 2,600 of
  5,090 impressions — **about half the impressions are unexamined.**
- **Bing, DuckDuckGo and any AI-assistant surface.** Only Google Search Console
  was read. Bing Webmaster Tools was verified per `state_of_play` but not opened
  here, and there is no visibility at all into LLM citation traffic, which for a
  corpus of this shape may already exceed search traffic.
- **Actual competitor pages.** No SERP was inspected to see *who* holds positions
  1–10 for the striking-distance queries, so "cheapest available traffic" is an
  inference from position, not from an assessment of what it would take to
  outrank the incumbents.
- **Whether the pages deserve to rank higher.** The P1 recommendation assumes the
  content is good enough and the packaging is the constraint. That has not been
  tested. If a page ranks 15th because it genuinely answers the query worse than
  the pages above it, no title rewrite will fix it.
- **Whether the concept/rules split is causal or coincidental.** It is a strong
  pattern across 348 queries, but "we rank well where competition is thin" is an
  inference. It has not been verified against the actual competitive density of
  those terms.
- **Anything about referral or direct traffic.** GA was confirmed to be firing but
  its reports were never opened. The entire diagnosis rests on search impressions.
