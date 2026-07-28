# AWS design

The shape of the infrastructure, and why each piece is that shape.

[`../infra/README.md`](../infra/README.md) is the reference — every resource,
every variable, every failure mode. This document is the argument behind it: the
constraints that were being solved, and what was rejected.

---

## The constraints

Four things determined nearly every choice.

1. **A static site, and genuinely static.** No server, no database, no
   sessions, no personalisation. Whatever the answer is, it should not include
   anything that runs continuously.
2. **A shared AWS account.** Account `REDACTED-ACCOUNT-ID` also hosts MockServer, an
   unrelated production project. Isolation has to be engineered.
3. **A public repository.** Nothing account-identifying may be committed.
4. **A personal project's budget.** Cheap at rest matters more than fast at
   scale.

---

## The shape

```
Route 53 (existing zone)
    │  A / AAAA alias, apex + www
    ▼
CloudFront ──── Function (viewer-request): clean URLs
    │      ├──── Response headers policy: HSTS, CSP, nosniff, frame-deny
    │      ├──── Cache policies: html 5 min · immutable 1 yr · audio 1 yr
    │      └──── Custom errors: 403 → /404.html (404), 404 → /404.html
    │  OAC, SigV4-signed
    ▼
S3 (private, all four public-access blocks on, versioned, SSE-S3)
    ▲
    │  s3:PutObject / DeleteObject, this bucket only
GitHub Actions ◄── OIDC, short-lived session, no stored keys
```

ACM lives in `us-east-1` regardless of `aws_region`, because CloudFront accepts
certificates from nowhere else. Everything regional is `eu-west-2`.

---

## Why each piece

### S3 private, never a website endpoint

There is deliberately **no** `aws_s3_bucket_website_configuration`. S3 website
endpoints are HTTP-only and public, which would defeat the point of putting a
TLS-terminating CDN in front. CloudFront reads the REST endpoint instead.

The cost of that choice is the two edge behaviours in
[`architecture.md`](architecture.md#delivery): no index-document handling, and
`AccessDenied` instead of `NoSuchKey` for missing objects. Both are solved at
the edge, and both are invisible until you try to test them locally.

Versioning is on, with a lifecycle rule expiring non-current versions after 30
days — because `s3 sync --delete` against a versioned bucket otherwise grows
forever.

### Origin Access Control, not the legacy OAI

OAC signs CloudFront's origin requests with SigV4. The bucket policy then allows
exactly one thing: `s3:GetObject`, on this bucket, **conditioned on
`AWS:SourceArn` being this distribution**.

That condition is the whole isolation argument. Without it the policy would
allow *any* CloudFront distribution in *any* AWS account to read the bucket,
since they all present the same `cloudfront.amazonaws.com` service principal.
With it, MockServer's distributions cannot — and neither can a stranger's.

A second statement denies everything over plain HTTP.

### Three cache policies, not one

| Path | TTL | Why |
|---|---|---|
| default — HTML, directory URLs | 5 min | Content edits should appear promptly |
| `/_astro/*` | 1 year | Astro content-hashes the filenames; a change is a new URL |
| `/audio/*` | 1 year | Large, and never changes once generated |

All three strip cookies and query strings from the cache key: the site is
static, nothing varies on them, and including them would fragment the cache for
no benefit. The audio policy additionally disables gzip and brotli, because MP3
is already compressed and re-compressing it wastes CPU to no effect.

Hashed assets also get a real `Cache-Control: …immutable` response header, not
just a CloudFront TTL — the TTL governs the edge, the header governs the
browser.

### CSP that names no external origin

The site is entirely self-hosted: no CDN, no analytics, no third-party fonts.
So `script-src` is `'self'` only, `frame-ancestors` and `object-src` are
`'none'`.

`style-src` carries `'unsafe-inline'`, and this is a known, deliberate
weakening: Astro inlines critical CSS into the document head at build time.
Scripts get no such exemption. If the site ever stops inlining styles, tighten
it.

The legacy `X-XSS-Protection` auditor is explicitly **disabled** rather than
set — it is gone from every current browser and introduced vulnerabilities of
its own. The CSP is the actual control.

### GitHub OIDC rather than access keys

No long-lived AWS credentials exist in GitHub. The workflow exchanges GitHub's
OIDC token for a short-lived role session.

The trust policy matches `sub` and `aud` with `StringEquals`, never
`StringLike` — there is no wildcard for a fork or another repository to slip
through, and checking `aud` is what stops a token minted for a different
audience being replayed. Pull requests from forks cannot assume the role because
their `sub` is a `pull_request` form, not `ref:refs/heads/main`.

The role's permissions name concrete ARNs. **There is no `Resource: "*"` in
`iam.tf`.** A permissions boundary with the same ARN list is attached as well,
so a broad managed policy attached by mistake later still cannot widen the
effective permissions.

`cloudfront:CreateInvalidation` being ARN-scopable is the detail that matters
most in a shared account: the role cannot invalidate MockServer's distribution,
which would be both expensive and a live-traffic incident for an unrelated
project.

> The trust policy is also the single most error-prone object here. It failed
> twice on first use, for two independent reasons, with an error message that
> named neither. See
> [`decision-log.md`](decision-log.md#the-oidc-subject-claim-two-traps).

### Route 53 — look up, do not create

`create_route53_zone = false`, and this is load-bearing.

Registering the domain already created a hosted zone, and the registrar's
delegation points at *that* zone's four name servers. Creating a second zone
would leave the delegation pointing at the first, so the ACM DNS validation
records would be written somewhere nothing resolves to — and the apply would
hang at certificate validation indefinitely, with no obvious cause.

The configuration supports both paths deliberately, because "the domain is
registered elsewhere and only delegated" is a normal situation, and creating a
duplicate zone in a shared account is a quiet way to break DNS for somebody
else.

### State, and what is not in the repository

A separate state bucket and lock table, created once by `infra/bootstrap/` with
local state — a state backend cannot provision itself. The key is project-scoped
so objects could not collide even if the bucket were ever shared. MockServer's
state is never read or written, and a shared lock table would mean the two
projects block each other's applies for no reason.

The bucket name embeds the account id, so it is supplied at `terraform init`
time from the local environment rather than written into `backend.tf`. See
[`operations.md`](operations.md#the-one-file-you-must-not-lose).

---

## Isolation: what is enforced, and what is not

**Enforced by the configuration:**

- **Naming** — every resource is `ice-hockey-production-*`. Nothing is called
  `site-bucket` or `cdn`. `project_name` *rejects* any value containing
  `mockserver`, as do both `aws_profile` variables.
- **Tagging** — `default_tags` on both providers applies `Project`, `ManagedBy`,
  `Repository` and `Environment` to every taggable resource, including ones
  where a `tags` block was forgotten. `var.tags` merges *underneath* those four
  so it cannot override them.
- **IAM paths** — roles and policies sit under `/ice-hockey/`, so
  `aws iam list-roles --path-prefix /ice-hockey/` lists exactly this project.
- **No adoption** — nothing is imported. `terraform import` appears nowhere in
  this repository and should not: importing something you did not create is how
  a later `destroy` takes out somebody else's production.

**Not enforced, and stated plainly:**

- The **GitHub OIDC provider is a genuinely shared object** — one per URL per
  account. This project created it. If MockServer later deletes it, deploys
  here break, and nothing in this configuration can prevent that.
- **Account-wide quotas are shared** — distributions, buckets, hosted zones.
- **Whoever runs `terraform apply` has broad credentials.** The created role is
  tightly scoped; the human is an administrator. This design protects against
  CI accidents and automated blast radius, not against a mistake at the
  keyboard.

> **The honest summary, carried over from the infra README: this is as separate
> as two projects can be inside one account, and one account is still one blast
> radius.** If this ever grows past a personal project, move it.

Six residual risks are enumerated in full at
[`../infra/README.md`](../infra/README.md#residual-risks--read-these).

---

## What was rejected

| Option | Why not |
|---|---|
| A separate AWS account | Correct in principle (D8 considered it), rejected on overhead for a personal project. The residual risks above are the price |
| S3 website hosting, no CloudFront | HTTP only, public bucket, no TLS at a custom domain |
| Legacy OAI | Superseded by OAC; no SigV4, weaker conditioning |
| Long-lived deploy keys in GitHub | A permanent credential in a public repository's settings, rotated by nobody |
| CloudFront access logging on by default | Costs per request, rarely read. `enable_logging` exists and defaults false |
| Hardcoding the state bucket in `backend.tf` | Publishes the AWS account id to a public repository |

---

## Cost shape

Effectively all of it is request-and-transfer, and at this traffic level that
rounds to very little. The pieces that are *not* usage-based:

- **Route 53 hosted zone** — a fixed monthly charge per zone. This is also why
  a typo'd `domain_name` with `create_route53_zone = true` is not free: it
  creates a real zone that bills.
- **S3 storage** — trivial today at ~2 MB of site. **This changes with audio:**
  ~1.1 GB of narration is still small, but whole-corpus download bundles are
  transfer-heavy rather than storage-heavy, and that is a genuine cost line to
  model before Phase 7 ships.
- **CloudFront** — `PriceClass_100` (Europe and North America), the cheapest.
  First 1,000 invalidation paths a month are free, and `/*` counts as one.

Confirm current prices against AWS rather than any figure written here.
