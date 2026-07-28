# Decision log

Dated decisions, and the traps found the hard way. Each entry records what was
decided, what it cost, and the evidence — so the next person does not have to
rediscover it.

Decisions **D1–D15** live in
[§2 of the build specification](../project/site_build_specification.md); this
document holds the ones taken during implementation, and the discoveries that
forced them.

---

## 28 July 2026 — Going live

The site went from "local files, no version control" to live at
`learn-ice-hockey.com` in one session. Phases 1–3 of the build specification
were completed, and Phase 4's speech transform was already done.

### Domain and account

`learn-ice-hockey.com`, registered through Route 53 in account
`REDACTED-ACCOUNT-ID` — the same account as the `mockserver-website` profile, per D8.

The registration had already created a hosted zone, which turned out to matter
enormously. See the next entry.

### `create_route53_zone = false`

**Decision:** look the existing hosted zone up rather than creating one.

**Why it was not obvious:** the variable defaults to `true`, and the example
tfvars ships with `true`. Applying as-shipped would have created a *second*
zone for the same domain.

**What that would have done:** the registrar's delegation points at the first
zone's four name servers. A second zone gets four different ones. ACM's DNS
validation records would be written into a zone nothing resolves to, so the
apply hangs at `aws_acm_certificate_validation` — indefinitely, with no error
explaining why.

**Evidence gathered before applying:**

```
zone Z05399413FOXHIIE0FLFG NS records:
  ns-960.awsdns-56.net · ns-4.awsdns-00.com
  ns-1672.awsdns-17.co.uk · ns-1263.awsdns-29.org
public `dig NS learn-ice-hockey.com`: identical, all four
```

Delegation live and correct → reuse the zone.

### `create_oidc_provider = true`

`aws iam list-open-id-connect-providers` returned an empty list, so MockServer
had never created one and there was nothing to collide with. An account holds
exactly one provider per URL; if this ever errors with `EntityAlreadyExists`,
someone else made it and the flag becomes `false`.

### The state bucket is not in the repository

**Decision:** supply it at `terraform init` time, not hardcoded in `backend.tf`.

**Why:** the bootstrap names the bucket `<project>-tfstate-<account-id>`, since
S3 bucket names are globally unique. Committing it would put an AWS account id
into a public repository — and the repository contained **zero** account ids
before, which read as deliberate rather than accidental.

`tfplan` was gitignored at the same time; a saved plan carries resource
attributes and account identifiers in the clear regardless.

**Superseded the same day** by the environment-file design below, which is a
better answer to the same problem.

### One environment file, outside the tree

**Decision:** everything account-specific lives in `~/.config/ice-hockey/env`,
described by `infra/env.example` and configured nowhere in the repository.

**Why it is better than just moving the bucket name:** the file exports
`TF_VAR_*`, which Terraform reads natively. So it is not merely *a* config file
— it is the complete one. **Verified by moving both `terraform.tfvars` and
`backend.hcl` aside and planning from the environment alone:** `No changes.
Your infrastructure matches the configuration.`

One file in a password vault restores a new laptop completely.

**Deliberately not sourced from `~/.zshrc`.** It exports `AWS_PROFILE`, and this
machine also holds credentials for an unrelated production account. A shell
silently carrying an `AWS_PROFILE` is how the right plan reaches the wrong
account.

**Known sharp edge:** where both a tfvars file and the environment set a value,
tfvars silently wins. Keeping both is safe only while they agree.

---

## The OIDC subject claim: two traps

The single most expensive thing in this project so far. The first deploy that
actually reached AWS failed with:

```
Could not assume role with OIDC: Not authorized to perform sts:AssumeRoleWithWebIdentity
```

**That message names neither the claim it rejected nor what it expected.** Two
independent faults produced it, and fixing the first revealed the second.

### Trap 1 — `environment:` rewrites the subject

The deploy job declared `environment: production`. Naming a GitHub environment
**replaces the subject's tail**:

| | |
|---|---|
| Trust policy expected | `…:ref:refs/heads/main` |
| Token actually carried | `…:environment:production` |

**Fixed on the workflow side, not the trust policy side.** Repointing the policy
at the environment form looks like the easier fix and is a security downgrade:
the environment claim contains **no branch**, so without a deployment branch
policy, any branch naming `environment: production` could assume the deploy
role. The environment carried no protection rules and no branch policy — it was
providing nothing while breaking the match.

To reinstate it later, three things must happen together: a deployment branch
policy limiting it to `main`, a `:ref` condition in the trust policy so AWS
still enforces the branch itself, and only then the `:sub` change.

### Trap 2 — the subject is id-qualified

With the environment removed, the subject became the `:ref:refs/heads/main`
form — and it still failed. CloudTrail showed why:

```
repo:jamesdbloom@733179/learn-ice-hockey@1314993801:ref:refs/heads/main
```

against a trust policy demanding:

```
repo:jamesdbloom/learn-ice-hockey:ref:refs/heads/main
```

GitHub issues an **id-qualified** subject for this account — `733179` is the
owner id, `1314993801` the repository id. Every published example writes
`repo:owner/repo`. GitHub will tell you which form you get:

```sh
gh api /repos/<owner>/<repo>/actions/oidc/customization/sub --jq .sub_claim_prefix
```

The ids are immutable, which is a genuine security improvement: trust follows a
rename, and does **not** follow a repository name freed by deletion and claimed
by somebody else.

**Implemented as `github_oidc_subject_prefix`**, defaulting to `null` meaning
the historic format — a separate variable rather than a change to
`github_repository`, because that value also feeds the mandatory `Repository`
tag and the role description, which want the readable `owner/repo` form.

### The lesson

**CloudTrail is the only thing that will tell you what was actually presented.**
The AWS error is useless, the GitHub logs show only that assumption failed, and
the trust policy looks correct in isolation in both cases. The lookup is in
[`operations.md`](operations.md#deploy-fails-not-authorized-to-perform-stsassumerolewithwebidentity).

---

## `printf` failed a deploy that had already succeeded

```
printf: - : invalid option
```

`printf '- \`%s\`\n' "${PATHS[@]}"` — bash parses the format string's leading
`-` as an option flag. Under `bash -e` that exits 2 and fails the job.

**Everything that mattered had already succeeded**: the role was assumed, both
sync passes ran, and the invalidation was created and returned
`I75ZVUQ2R1J8P1BV3E3EDWHT63`. Only the job summary broke, and it took the whole
run down with it — reporting a green deploy as red.

`printf --` ends option parsing. It had never fired before because earlier runs
never reached the line.

**Generalises to:** a step that only reports should not be able to fail the
thing it reports on.

---

## Zscaler, not a bug

`https://learn-ice-hockey.com` returned 403 from the work machine. Time was
spent looking at OAC, bucket policy and custom error responses before checking
the response body:

```html
<title>Internet Security by Zscaler</title>
```

The corporate proxy blocks newly-registered and uncategorised domains. The site
was live and correct throughout — `*.cloudfront.net` is categorised and passed
straight through, which is what distinguished the two.

**Generalises to:** verify the failure is where you think it is before
debugging it. Diagnostic tooling on a corporate laptop is on a corporate
network.

---

## `npm run serve`

Added because search cannot be checked in the fast loop: Pagefind indexes built
HTML, so `/pagefind/*` does not exist under `npm run dev` and the search page is
dead there. Checking it meant remembering to chain `build` and `preview` by
hand — the kind of thing that does not get done.

`serve` runs the full build then serves `dist/` and opens a browser.

---

## Open threads

Things decided provisionally, or not yet decided, that a future session should
pick up.

| Thread | State |
|---|---|
| **Section kinds before narration** | D13/D14. Polly bills per character and the corpus is 2,072,460 of them — tagging after narrating means paying twice or shipping no practical cut. Phase 4b exists to force the order |
| **The unused `production` environment** | Still exists on GitHub with no protection rules, now referenced by nothing. Harmless; delete it or give it a branch policy and use it properly |
| **`terraform.tfvars` and the env file both exist** | They agree today. Two sources of truth, and tfvars wins silently. Recommend deleting the tfvars file |
| **`style-src 'unsafe-inline'`** | Required while Astro inlines critical CSS. Tighten if that ever stops |
| **NotebookLM terms** | §8 of the build spec. Must be settled before a public podcast feed, not before narration |
| **iOS offline storage behaviour** | §10.4. Documented from general knowledge and **likely stale**; verify on real hardware before promising offline audio |
| **Stale root README** | Still claims `.github/workflows/` and the speech tooling are "not yet written". Both exist |
