# Infrastructure

Terraform for hosting the ice hockey learning resource as a static site on AWS:
a private S3 bucket, a CloudFront distribution in front of it, ACM, Route 53,
and a GitHub Actions deploy role that uses OIDC rather than access keys.

Implements §5 of `../project/site_build_specification.md`.

> **This AWS account is shared with MockServer**, an unrelated production
> project. Read [Sharing an account with MockServer](#sharing-an-account-with-mockserver)
> before you run anything.

---

## Prerequisites

| | |
|---|---|
| Terraform | ≥ 1.9 (developed against 1.15.5) |
| AWS CLI | v2, for the bootstrap step and for deploys |
| AWS permissions | Enough to create S3, CloudFront, ACM, Route 53, IAM and DynamoDB resources |
| A domain | Registered somewhere. It does not have to be registered at Route 53 |
| A GitHub repository | For the OIDC trust policy |

The domain has **not been chosen yet** — decision D1 in the build
specification. Nothing here hardcodes one; `domain_name` is a required variable
with no default.

---

## Which AWS profile

Local profiles on this machine are `mockserver-build`, `mockserver-website` and
`default`.

**Do not use either `mockserver-*` profile.** Create a separate profile for
this project, even if it wraps the same underlying credentials — it makes the
intent legible in shell history and it is the difference between "I meant to
touch this account" and "I was in the wrong terminal".

```sh
aws configure --profile ice-hockey
```

Then either set `aws_profile = "ice-hockey"` in `terraform.tfvars`, or export
`AWS_PROFILE=ice-hockey`. Both `aws_profile` variables validate that the value
does not contain `mockserver` and will fail the plan if it does.

Confirm you are where you think you are before applying:

```sh
aws sts get-caller-identity --profile ice-hockey
```

---

## Order of operations

### 1. Bootstrap the state backend — once, by hand

```sh
cd infra/bootstrap
cp terraform.tfvars.example terraform.tfvars
$EDITOR terraform.tfvars
terraform init && terraform apply
terraform output -raw backend_config
```

This creates the state bucket and lock table. It uses local state, because a
state backend cannot provision itself. See `bootstrap/README.md`.

### 2. Point the main configuration at that backend

Paste the `backend_config` output into `backend.tf`, replacing the
`CHANGEME` bucket name. Or leave `backend.tf` alone and pass the values at init
time:

```sh
terraform init -backend-config=backend.hcl
```

### 3. Apply the main configuration

```sh
cd infra
cp terraform.tfvars.example terraform.tfvars
$EDITOR terraform.tfvars          # domain_name and github_repository are required
terraform init
terraform plan
terraform apply
```

### 4. Delegate the domain

If `create_route53_zone = true`, the apply will pause at certificate validation
until the domain resolves to the new zone. Take the name servers:

```sh
terraform output route53_name_servers
```

and set them at the registrar. Validation completes once the delegation
propagates — usually minutes, occasionally an hour. If the apply times out
waiting, re-run it; the certificate validation resource picks up where it left
off.

### 5. Deploy content

```sh
cd site && npm ci && npm run build
aws s3 sync ./dist "s3://$(terraform -chdir=../infra output -raw site_bucket_name)" --delete
aws cloudfront create-invalidation \
  --distribution-id "$(terraform -chdir=../infra output -raw cloudfront_distribution_id)" \
  --paths '/*'
```

In practice CI does this. See [GitHub Actions](#github-actions).

---

## Variables you must supply

Two have no default and the plan will not run without them:

| Variable | Example | Why |
|---|---|---|
| `domain_name` | `"example.com"` | Apex domain. Not chosen yet (D1) |
| `github_repository` | `"jamesdbloom/ice-hockey"` | Scopes the OIDC trust policy, and fills the `Repository` tag |

Everything else has a default. The ones you are most likely to change:

| Variable | Default | Notes |
|---|---|---|
| `project_name` | `"ice-hockey"` | Prefixes every resource name. Rejects anything containing `mockserver` |
| `environment` | `"production"` | Part of the name prefix and the `Environment` tag |
| `aws_region` | `"eu-west-2"` | Regional resources. ACM is pinned to `us-east-1` separately |
| `aws_profile` | `null` | Local named profile; leave unset in CI |
| `subject_alternative_names` | `[]` | e.g. `["www.example.com"]`. Must be in the same hosted zone |
| `create_route53_zone` | `true` | `false` looks up an existing zone instead of creating one |
| `create_oidc_provider` | `false` | See [GitHub Actions](#github-actions). Check the account first |
| `github_branch` | `"main"` | The only branch allowed to deploy |
| `enable_logging` | `false` | CloudFront access logs. Off because they cost money and are rarely read |
| `cloudfront_price_class` | `"PriceClass_100"` | Europe + North America, cheapest |
| `html_ttl_seconds` | `300` | HTML and directory URLs |
| `immutable_ttl_seconds` | `31536000` | Hashed assets and audio |
| `site_bucket_name` | derived | `<project>-<env>-site-<account-id>` |
| `log_retention_days` | `90` | Only when `enable_logging` |
| `oidc_thumbprint_list` | GitHub's | Only when `create_oidc_provider` |
| `tags` | `{}` | Merged **under** the four mandatory tags, so it cannot override them |

---

## What gets built

### Storage and delivery

`s3.tf` creates one private bucket. All four public-access blocks are on,
versioning is enabled, SSE-S3 encryption is applied by default, and object
ownership is `BucketOwnerEnforced` so ACLs cannot be used at all. There is
deliberately **no** `aws_s3_bucket_website_configuration` — website endpoints
are HTTP-only and public, which would defeat the point. CloudFront reads the
REST endpoint instead.

A lifecycle rule expires non-current versions after 30 days. Without it,
`s3 sync --delete` plus versioning means the bucket grows forever.

`cloudfront.tf` creates the distribution: HTTP/2 and HTTP/3, IPv6 on,
`TLSv1.2_2021` minimum, compression on, `index.html` as the default root
object, and `redirect-to-https` on every behaviour.

### How CloudFront is allowed to read the bucket, and nothing else is

An **Origin Access Control** — OAC, not the legacy OAI — signs CloudFront's
requests to S3 with SigV4. The bucket policy then allows exactly one thing:

```
Principal: cloudfront.amazonaws.com
Action:    s3:GetObject
Resource:  <this bucket>/*
Condition: AWS:SourceArn == <this distribution's ARN>
```

The `SourceArn` condition is what matters in a shared account. Without it, the
policy would allow *any* CloudFront distribution in *any* account to read the
bucket. With it, MockServer's distributions cannot, even though they are the
same service principal.

A second statement denies everything over plain HTTP.

### Cache behaviours

| Path | Policy | TTL | Why |
|---|---|---|---|
| default (HTML, directory URLs) | `<prefix>-html` | 5 min | Content edits should appear promptly |
| `/_astro/*` | `<prefix>-immutable` | 1 year | Astro content-hashes these filenames |
| `/audio/*` | `<prefix>-audio` | 1 year | Large, and never changes once generated |

All three strip cookies and query strings from the cache key. The site is
static; nothing varies on them, and including them would only fragment the
cache. The `/audio/*` policy also disables gzip and brotli, because MP3 is
already compressed.

Hashed assets additionally get `Cache-Control: public, max-age=31536000,
immutable` as a real response header. CloudFront's own TTL governs the edge
cache only; without this header the browser still revalidates.

### Clean URLs

Astro is configured with `build.format: 'directory'` and
`trailingSlash: 'always'`, so every page is emitted as `<route>/index.html`. S3
has no index-document behaviour when used as a REST origin, so a CloudFront
Function on `viewer-request` does the rewrite — `functions/clean_urls.js`:

```
/                       -> /index.html
/faceoffs/              -> /faceoffs/index.html
/faceoffs               -> /faceoffs/index.html
/_astro/x.abc123.css    -> unchanged
/favicon.svg            -> unchanged
```

Only the last path segment is tested for an extension, so a directory name
containing a dot does not defeat the rewrite. The function runs before the
cache lookup, so `/faceoffs` and `/faceoffs/` share one cache entry.

### Error responses

`404` maps to `/404.html` with a 404 status.

`403` maps there too. S3 returns `AccessDenied`, not `NoSuchKey`, for a missing
object when the reader is OAC-signed and has no `s3:ListBucket` — so without
this mapping a mistyped URL would show a raw XML error instead of the site's
own 404 page.

### Security headers

`aws_cloudfront_response_headers_policy` sets HSTS (2 years,
`includeSubDomains`, `preload`), `X-Content-Type-Options: nosniff`,
`Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`,
`Permissions-Policy`, `Cross-Origin-Opener-Policy` and a CSP.

**The CSP names no external origin.** The site is entirely self-hosted: no CDN,
no analytics, no third-party fonts. `frame-ancestors 'none'` and
`object-src 'none'` close the obvious gaps; `script-src` is `'self'` only.
`style-src` carries `'unsafe-inline'` because Astro inlines critical CSS into
the document head at build time — scripts get no such exemption. If the site
ever stops inlining styles, tighten it.

The legacy `X-XSS-Protection` auditor is explicitly disabled. It is removed
from every current browser and introduced vulnerabilities of its own; the CSP
is the actual control.

### Certificate and DNS

`dns.tf`. The certificate is created through the `aws.us_east_1` provider
alias, because CloudFront accepts certificates from `us-east-1` and nowhere
else, regardless of `aws_region`. Validation is DNS, with the validation
records written into the hosted zone and `aws_acm_certificate_validation`
waiting for them.

The hosted zone is either created here or looked up, controlled by
`create_route53_zone`. Making this a choice matters: the domain may be
registered elsewhere and only delegated, and creating a *second* zone for a
name that already has one in a shared account is a quiet way to break DNS for
everybody.

Every name — apex and each SAN — gets an A and an AAAA alias record pointing at
the distribution. Alias, not CNAME: a CNAME cannot live at a zone apex.

Note that all SANs must live in the **same** hosted zone as `domain_name`,
because there is only one zone to write validation and alias records into.

---

## GitHub Actions

No long-lived AWS keys anywhere. Workflows exchange GitHub's OIDC token for a
short-lived AWS role session.

### Before the first apply: check the OIDC provider

An AWS account can hold exactly **one** OIDC provider per URL. MockServer may
already have created one for `token.actions.githubusercontent.com`, and
creating a duplicate fails with `EntityAlreadyExists`.

```sh
aws iam list-open-id-connect-providers --profile ice-hockey
```

- Nothing for `token.actions.githubusercontent.com` → set `create_oidc_provider = true`
- It is already there → leave `create_oidc_provider = false` (the default). The
  role references the existing provider by ARN and does not manage it, so
  `terraform destroy` here will not remove MockServer's.

### The trust policy

Scoped to one repository and one branch:

```
sub = <github_oidc_subject_prefix>:ref:refs/heads/<github_branch>
aud = sts.amazonaws.com
```

Both are matched with `StringEquals`, not `StringLike` — there is no wildcard
for a fork or another repo to slip through. Checking `aud` as well is what
prevents a token minted for a different audience being replayed.

Pull requests from forks cannot assume the role, because their `sub` is
`pull_request`, not `ref:refs/heads/main`.

#### Get the subject prefix from GitHub — do not assume it

Every example you will find writes the prefix as `repo:<owner>/<repo>`. GitHub
now issues an **id-qualified** subject for some accounts, including this one:

```
repo:jamesdbloom@733179/learn-ice-hockey@1314993801
```

where `733179` is the owner id and `1314993801` the repository id. Both are
immutable, so trust survives a rename and deliberately does *not* survive
deleting the repository and recreating one with the same name.

This is set by `github_oidc_subject_prefix`, which defaults to `null` meaning
the historic `repo:<owner>/<repo>`. Ask GitHub rather than guessing:

```sh
gh api /repos/<owner>/<repo>/actions/oidc/customization/sub --jq .sub_claim_prefix
```

**Two separate things break role assumption with the same useless error**,
`Not authorized to perform sts:AssumeRoleWithWebIdentity`, which names neither
the claim nor the mismatch. Both were hit on the first deploy of this project:

1. **A `sub` prefix in the wrong format** — the case above.
2. **`environment:` on the job.** Naming a GitHub environment replaces the
   `:ref:refs/heads/<branch>` tail with `:environment:<name>`. See the comment
   in `.github/workflows/deploy.yml`. Pointing the trust policy at the
   environment form is not a fix on its own — the environment claim carries no
   branch, so without a deployment branch policy any branch could deploy.

CloudTrail is the only thing that will tell you what was actually presented:

```sh
aws cloudtrail lookup-events \
  --lookup-attributes AttributeKey=EventName,AttributeValue=AssumeRoleWithWebIdentity \
  --region <your region> \
  --query 'Events[].CloudTrailEvent' --output text | head -1
```

The `userName` in that event is the subject the token carried. Diff it against
the trust policy and the mismatch is immediately obvious.

### The permissions

`terraform output github_actions_role_arn`. That role can do exactly this:

| On | Actions |
|---|---|
| This bucket | `ListBucket`, `ListBucketVersions`, `GetBucketLocation` |
| Objects in this bucket | `GetObject`, `GetObjectVersion`, `PutObject`, `DeleteObject` |
| This distribution | `CreateInvalidation`, `GetInvalidation`, `ListInvalidations`, `GetDistribution` |

Nothing else. There is no `Resource: "*"` in the file. A **permissions
boundary** with the same resource list is attached to the role as well, so even
if somebody later attaches a broad managed policy to it by mistake, the
effective permissions still cannot reach outside this project.

`cloudfront:CreateInvalidation` is ARN-scopable, which is the important part:
the role cannot invalidate MockServer's distribution. That would be both
expensive and a live-traffic incident for a project that has nothing to do with
this one.

### Wiring it up

The role ARN is not a secret — it grants nothing without a valid OIDC token
from the trusted repo and branch. A repository variable is fine.

```yaml
# .github/workflows/build-deploy.yml
permissions:
  id-token: write     # required to request the OIDC token
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ vars.AWS_DEPLOY_ROLE_ARN }}
          aws-region: eu-west-2
          role-session-name: ice-hockey-deploy

      - run: npm ci && npm run build
        working-directory: site

      - run: aws s3 sync ./site/dist "s3://${{ vars.SITE_BUCKET }}" --delete

      - run: |
          aws cloudfront create-invalidation \
            --distribution-id "${{ vars.CLOUDFRONT_DISTRIBUTION_ID }}" \
            --paths '/*'
```

Workflow files live in `.github/`, not here.

`--paths '/*'` is fine and cheap at this traffic level: the first 1,000
invalidation paths each month are free, and `/*` counts as one. Hashed assets
under `/_astro/` do not need invalidating at all — their filenames change — but
invalidating them costs nothing.

---

## Outputs

| Output | What it is for |
|---|---|
| `site_bucket_name` | `aws s3 sync` target |
| `site_bucket_arn` | Auditing that nothing outside this project references the bucket |
| `cloudfront_distribution_id` | `create-invalidation` target |
| `cloudfront_distribution_arn` | The value the bucket policy conditions on |
| `cloudfront_domain_name` | Testing before DNS propagates |
| `site_url` | The public URL |
| `github_actions_role_arn` | `role-to-assume` in the workflow |
| `route53_zone_id` | The zone the records live in |
| `route53_name_servers` | Set these at the registrar. Empty unless the zone was created here |
| `acm_certificate_arn` | The validated certificate |
| `logs_bucket_name` | `null` unless `enable_logging` |
| `isolation_summary` | Names, tags and ids in one object, for checking separation from MockServer at a glance |

---

## Sharing an account with MockServer

Build specification decision D8 was to reuse the existing account with fully
separate resources. Here is how that separation is actually enforced, and where
it is not.

### Enforced by this configuration

**Naming.** Every resource name is built from `local.name_prefix`, which is
`<project_name>-<environment>` — `ice-hockey-production-site`,
`ice-hockey-production-clean-urls`, and so on. Nothing is called `site-bucket`
or `cdn`. `project_name` rejects any value containing `mockserver`, and both
`aws_profile` variables reject `mockserver-*`.

**Tagging.** `default_tags` on both provider blocks applies `Project`,
`ManagedBy = "terraform"`, `Repository` and `Environment` to every taggable
resource, including ones where a `tags` block was forgotten. `var.tags` is
merged *underneath* those four, so it cannot override them. Cost allocation and
"who owns this?" both resolve from tags alone.

**State.** A separate bucket and a separate lock table, created by
`bootstrap/`, with a project-scoped key (`ice-hockey/site/terraform.tfstate`).
MockServer's state is never read or written. A shared lock table would also
mean the two projects block each other's applies for no reason.

**IAM.** Every policy statement names concrete ARNs. There is no
`Resource: "*"` in `iam.tf`. Role and policies sit under the IAM path
`/ice-hockey/`, so `aws iam list-roles --path-prefix /ice-hockey/` lists
exactly this project's roles. The deploy role additionally carries a
permissions boundary capping it to the same three ARNs.

**Bucket policy.** Conditioned on `AWS:SourceArn` of this distribution
specifically, so no other distribution — in this account or any other — can
read the bucket.

**No adoption.** Nothing here imports or references a pre-existing resource
except by explicit opt-in: `create_route53_zone = false` looks up a zone, and
`create_oidc_provider = false` references a provider ARN without managing it.
There is no `terraform import` anywhere in this repository and there should not
be. Importing something you did not create is how a later `destroy` takes out
somebody else's production.

### Residual risks — read these

1. **The OIDC provider is a genuinely shared object.** If MockServer already
   owns it and later deletes it, this project's deploys break. Nothing here can
   prevent that. It is an argument for a separate AWS account, not a flaw in
   this configuration. The `create_oidc_provider = false` path at least means
   Terraform will not delete it out from under MockServer.

2. **Account-wide limits are shared.** CloudFront distributions, S3 buckets and
   Route 53 zones all have per-account quotas, and this project consumes some.
   At this scale that is not close to binding, but it is a shared resource.

3. **Whoever runs `terraform apply` has broad credentials.** The *created* role
   is tightly scoped; the *human* running Terraform must be able to create IAM
   roles and CloudFront distributions, which means they can also reach
   MockServer's resources. The isolation here protects against CI accidents and
   automated blast radius, not against a mistake at the keyboard. Check
   `aws sts get-caller-identity` and read the plan.

4. **`enable_logging` writes to a new bucket, but CloudFront standard logging
   requires ACLs.** The log bucket therefore uses `BucketOwnerPreferred` rather
   than `BucketOwnerEnforced`, which is a slightly weaker posture than the site
   bucket. It is off by default.

5. **Deleting the CloudFront distribution takes a long time.** A `destroy` will
   sit for 15–20 minutes disabling it. That is normal, not a hang. Do not
   interrupt it — a half-destroyed distribution still holds the domain aliases,
   and CloudFront will refuse to attach them elsewhere until it is gone.

6. **A single `domain_name` typo creates a real hosted zone that costs $0.50 a
   month** and, if `create_route53_zone = true` and the name happens to collide
   with something MockServer serves, could confuse delegation. Read the plan.

The honest summary: this is as separate as two projects can be inside one
account, and one account is still one blast radius. If the ice hockey site ever
grows past a personal project, move it.

---

## Files

```
infra/
├── backend.tf                  remote state configuration
├── versions.tf                 terraform and provider version constraints
├── providers.tf                aws + aws.us_east_1 aliases, default_tags
├── locals.tf                   name prefix, mandatory tags, CSP
├── variables.tf                every environment-specific input
├── s3.tf                       site bucket, bucket policy, optional log bucket
├── cloudfront.tf               OAC, function, cache policies, headers, distribution
├── dns.tf                      hosted zone, ACM certificate, alias records
├── iam.tf                      GitHub OIDC provider, deploy role, policies
├── outputs.tf
├── terraform.tfvars.example
├── functions/
│   └── clean_urls.js           viewer-request rewrite for directory URLs
└── bootstrap/                  state bucket + lock table; run once, by hand
    ├── main.tf
    ├── providers.tf
    ├── variables.tf
    ├── versions.tf
    ├── outputs.tf
    ├── terraform.tfvars.example
    └── README.md
```

## Checks

```sh
terraform fmt -recursive -check
terraform init -backend=false && terraform validate
(cd bootstrap && terraform init -backend=false && terraform validate)
```
