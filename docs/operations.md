# Operations

The runbook. Deploying, restoring on a new laptop, and what to check when
something breaks.

---

## The one file you must not lose

**`~/.config/ice-hockey/env`** — described by
[`../infra/env.example`](../infra/env.example), configured nowhere in the
repository. Keep it in a password vault.

It holds everything account-specific: the AWS profile, account id, state bucket,
domain, and the `TF_VAR_*` values Terraform reads natively. With it sourced,
**neither `infra/terraform.tfvars` nor `infra/backend.hcl` needs to exist** —
verified by moving both aside and planning from the environment alone.

```sh
source ~/.config/ice-hockey/env
```

**Do not source it from `~/.zshrc`.** It exports `AWS_PROFILE`, and this machine
also holds credentials for an unrelated production account. Source it when you
mean to work on this project.

> Where both a tfvars file and the environment set a value, **tfvars silently
> wins**. Keeping both is safe only while they agree. For a single source of
> truth, delete `terraform.tfvars` and `backend.hcl`.

### Keeping it out of the repository

The repository is public, so no account id, state bucket name or role ARN may
be committed. `scripts/check_secrets.py` enforces that on every push and pull
request, scanning tracked files for account-id and credential shapes.

```sh
python3 scripts/check_secrets.py
```

Run it with the env file **sourced** and it does more: it additionally matches
the real account id literally, catching a spelling the shape rules would miss.
CI cannot do this — supplying the id as a repository secret so CI could grep
for it would reintroduce the value the check exists to keep out — so the local
run is the stricter one.

The scanner never prints what it matched, only `file:line` and a length. CI
logs on a public repository are public, and a scanner that echoes the secret to
prove it found the secret has published it twice.

This was written after the account id reached a pushed commit in `docs/`, three
lines below a sentence in `aws-design.md` forbidding exactly that. Prose stating
a policy is not enforcement.

---

## Restoring on a new laptop

```sh
git clone git@github.com:jamesdbloom/learn-ice-hockey.git
cd learn-ice-hockey

mkdir -p ~/.config/ice-hockey
$EDITOR ~/.config/ice-hockey/env          # paste from the vault
chmod 600 ~/.config/ice-hockey/env

# AWS SSO profile — the env file names it, but the profile itself is local
aws configure sso --profile ice-hockey    # or copy the block into ~/.aws/config
aws sso login --profile ice-hockey

source ~/.config/ice-hockey/env
cd infra
terraform init -backend-config="bucket=$ICE_HOCKEY_TF_STATE_BUCKET"
terraform plan                            # expect: No changes
```

`No changes` confirms the restore is complete. Nothing else is needed —
everything else in the repository is either committed or derived.

Node must be **≥ 22.12** (Astro 7's floor).

---

## Everyday tasks

### Build and look at the site

```sh
cd site
npm ci
npm run serve        # build → Pagefind index → link check → preview + open browser
```

`npm run dev` is the fast loop for editing components, but **search does not
work there** — Pagefind indexes built HTML. Use `serve` to see the real thing.

`/faceoffs` without a trailing slash **404s locally**. That rewrite is the
CloudFront Function's job and cannot be tested outside AWS.

### Deploy

Push to `main`. That is the whole procedure — CI builds, assumes the AWS role via
OIDC, syncs to S3 in two passes, and invalidates changed HTML.

To deploy by hand, if CI is broken:

```sh
source ~/.config/ice-hockey/env
cd site && npm ci && npm run build
aws s3 sync dist/ "s3://$ICE_HOCKEY_SITE_BUCKET" --delete
aws cloudfront create-invalidation \
  --distribution-id "$ICE_HOCKEY_CLOUDFRONT_DISTRIBUTION_ID" --paths '/*'
```

### Change infrastructure

```sh
source ~/.config/ice-hockey/env
cd infra
terraform plan          # read it
terraform apply
```

**Read the plan.** `0 to destroy` is the number that matters in a shared
account.

### Add a document

1. Write it into `content/`, following
   [the house style](../project/content_style_guide.md) — it is a build
   dependency, not a preference.
2. Add its id to `site/src/data/structure.json`. **The build refuses to run
   until you do**, which is deliberate: there is no way to add a document and
   have it silently missing from navigation.
3. `npm run build` locally, then push.

---

## Troubleshooting

### The site looks 403 / blocked from this machine

**Check whether it is Zscaler before checking anything in AWS.** The corporate
proxy blocks newly-registered and uncategorised domains and serves its own 403
page:

```sh
curl -s https://learn-ice-hockey.com/ | grep -o '<title>[^<]*</title>'
# <title>Internet Security by Zscaler</title>   ← the proxy, not the site
```

`*.cloudfront.net` is a categorised domain and passes straight through, so test
the distribution directly to tell the two apart:

```sh
curl -sI https://d3ngzvowkosmtk.cloudfront.net/ | head -1
```

This wasted real time once. The site was live and correct throughout.

### Deploy fails: "Not authorized to perform sts:AssumeRoleWithWebIdentity"

The error names neither the claim it rejected nor what it wanted. **Ask
CloudTrail what was actually presented:**

```sh
source ~/.config/ice-hockey/env
aws cloudtrail lookup-events \
  --lookup-attributes AttributeKey=EventName,AttributeValue=AssumeRoleWithWebIdentity \
  --region "$ICE_HOCKEY_AWS_REGION" --max-results 5 --output json \
| python3 -c 'import json,sys
for e in json.load(sys.stdin)["Events"]:
    ct=json.loads(e["CloudTrailEvent"])
    print(ct["eventTime"], ct.get("errorCode","OK"), ct["userIdentity"].get("userName"))'
```

Diff the `userName` against the trust policy:

```sh
aws iam get-role --role-name ice-hockey-production-github-deploy \
  --query 'Role.AssumeRolePolicyDocument.Statement[0].Condition' --output json
```

Two known causes, both hit on first use —
[`decision-log.md`](decision-log.md#the-oidc-subject-claim-two-traps) has the
full account:

- The subject prefix is **id-qualified** (`repo:owner@1234/repo@5678`), not
  `repo:owner/repo`. Confirm with
  `gh api /repos/<owner>/<repo>/actions/oidc/customization/sub --jq .sub_claim_prefix`.
- A job declaring `environment:` gets `:environment:<name>` in place of
  `:ref:refs/heads/<branch>`.

### What commit is actually live?

Ask the site. Every build stamps the commit it came from into two places, both
written from `site/src/lib/build-version.mjs`:

```sh
curl -s https://learn-ice-hockey.com/version.json
```
```json
{ "commit": "239f70d…", "short": "239f70d", "ref": "main",
  "commitDate": "…", "builtAt": "…", "runId": "1234567890" }
```

and an HTML comment in the `<head>` of all 39 pages, for when only a browser is
to hand:

```sh
curl -s https://learn-ice-hockey.com/ | grep -o '<!-- build:[^>]*-->'
```

Compare against local:

```sh
git rev-parse HEAD
git log --oneline "$(curl -s https://learn-ice-hockey.com/version.json \
  | python3 -c 'import json,sys; print(json.load(sys.stdin)["commit"])')"..HEAD
```
Anything listed is written but not live.

`runId` links straight to the Actions run that produced the build. `dirty: true`
appears only on local builds with an unclean tree — in CI the field is absent,
so a `dirty` flag on production means something was uploaded by hand.

This exists because a *successful deploy of an old commit* is externally
indistinguishable from an up-to-date one, and on 28 July four commits sat
unpushed while the live site looked healthy.

### Deploy is green but nothing deployed

Check the job list, not just the conclusion. The `Build and deploy` job **skips
cleanly** when the four repository variables are unset, and the run stays green
by design.

```sh
gh variable list --repo jamesdbloom/learn-ice-hockey
# AWS_REGION · AWS_ROLE_ARN · S3_BUCKET · CLOUDFRONT_DISTRIBUTION_ID
```

### Terraform wants to change things you did not change

Run `terraform plan` and read what moved. If it wants to **create a Route 53
zone**, `create_route53_zone` has flipped to `true` — stop. A second zone
orphans the delegation and hangs certificate validation.

If `terraform init` complains the backend changed, re-init:

```sh
terraform init -reconfigure -backend-config="bucket=$ICE_HOCKEY_TF_STATE_BUCKET"
```

### Checking you are in the right account

```sh
# Account should equal $ICE_HOCKEY_AWS_ACCOUNT_ID from ~/.config/ice-hockey/env
aws sts get-caller-identity --profile ice-hockey --query Account --output text
[ "$(aws sts get-caller-identity --profile ice-hockey --query Account --output text)" \
  = "$ICE_HOCKEY_AWS_ACCOUNT_ID" ] && echo "right account" || echo "WRONG ACCOUNT"
cd infra && terraform output isolation_summary
```

`isolation_summary` prints names, tags and ids in one object precisely so
separation from MockServer can be eyeballed.

---

## Health checks

```sh
# infrastructure matches configuration
cd infra && terraform plan -detailed-exitcode      # 0 = no drift

# site content matches the last build
aws s3 ls "s3://$ICE_HOCKEY_SITE_BUCKET" --recursive | wc -l

# distribution serving, both aliases attached
aws cloudfront get-distribution --id "$ICE_HOCKEY_CLOUDFRONT_DISTRIBUTION_ID" \
  --query 'Distribution.{Status:Status,Aliases:DistributionConfig.Aliases.Items}'

# external citations still resolve — this is a real, recurring problem
python3 scripts/check_external_links.py
```

---

## Things that will bite

- **CloudFront `destroy` takes 15–20 minutes** disabling the distribution. That
  is normal, not a hang. Do not interrupt it — a half-destroyed distribution
  still holds the domain aliases and CloudFront will refuse to attach them
  elsewhere until it is gone.
- **The OIDC provider is shared with MockServer's account.** If it is ever
  deleted, deploys here break and nothing in this repository can prevent it.
- **`git push` over HTTPS is rejected** — the stored OAuth token lacks `workflow`
  scope, so any commit touching `.github/workflows/` fails. The remote is set to
  SSH for this reason. Do not change it back.
- **Link rot is continuous.** A single day's checking once produced a redirect
  hijack, three hard 404s and two soft-404s. `link-check.yml` runs on a
  schedule for this reason, and a `200` is not proof a page exists — Hockey
  Canada serves its 404 page with a 200 status.
