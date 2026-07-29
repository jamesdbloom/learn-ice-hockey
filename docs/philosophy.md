# Philosophy

Why this project is built the way it is. These are the principles that settled
the arguments; almost every one of them was bought with a mistake.

---

## 1. The content is the asset. Everything else is packaging

The website, the Terraform, the CI pipeline and the audio tooling exist to
deliver 35 markdown files. None of them is the point.

This has consequences that look strange until you accept the premise:

- **`content/` is the source of truth, and nothing writes back to it.** The
  site reads it. The speech transform reads it. Neither modifies it, and adding
  a document requires no change to `site/`.
- **Every artefact is regenerable.** The site, the search index, the speech
  text, and eventually the audio and PDFs are all derived. Losing them costs
  compute, not information.
- **A tooling change is never worth a content compromise.** When the Astro
  markdown processor had to be replaced to keep GitHub-compatible heading ids,
  the processor changed — because 1,305 cross-links written against those
  anchors did not.

## 2. Uncertainty is disclosed, not smoothed

The corpus keeps claims it could not verify and says so, rather than dropping
them or asserting them with confidence they have not earned.

This is a content principle that turned out to be an engineering one. It is why
the link baseline records 611 URLs with their real HTTP status including the
dead ones, why known-dead citations are retained and labelled rather than
deleted, and why the review history publishes what each round *could not* have
found.

> **The test for deletion is whether a source contradicts the claim — never
> whether a source is merely absent.**

## 3. A clean check is a statement about the check

Round 9 of content review found nothing. Round 10 then found three criticals
and about twenty majors, with no content having changed in between. The only
difference was where the reviewer looked.

The generalisation, which applies as much to infrastructure as to prose: **a
passing test tells you about the test's coverage, not the system's health.**
The useful question is never "did this find anything" but "what could this
method not have found?" — and that answer scopes the next pass.

This is why every review report must state its own coverage limits, and why the
deploy pipeline's first green run was treated as suspicious rather than
finished. It was right to be: the `Deploy` workflow had been "passing" for two
runs while silently skipping the entire deploy job.

## 4. Never present a coaching choice as a law

The corpus's cardinal rule. Where a system determines the answer, the system is
named, an alternative is given, and the reader is told to find out which one
their team plays.

The infrastructure equivalent: **name the assumption in the file that depends on
it.** `create_route53_zone = false` is not self-explanatory, so the reason it is
false — that a second hosted zone would orphan the delegation and hang
certificate validation forever — is written next to it.

## 5. Isolation is a property you enforce, not a claim you make

The AWS account is shared with MockServer, an unrelated production project. That
is a deliberate cost decision (D8), and it means blast radius has to be
engineered rather than asserted.

Every resource name carries the project prefix. `project_name` and both
`aws_profile` variables *reject* values containing `mockserver`. Every IAM
statement names a concrete ARN — there is no `Resource: "*"` in `iam.tf`. The
bucket policy conditions on the specific distribution ARN, so no other
CloudFront distribution in any account can read it.

And the limits are stated rather than hidden: one account is still one blast
radius, and [`../infra/README.md`](../infra/README.md#residual-risks--read-these)
lists six residual risks it cannot fix.

## 6. Secrets and identifiers live outside a public repository

The repository is public and contains **no AWS account id anywhere**. That was
true before this session and is treated as a deliberate invariant.

It is why the Terraform state bucket — whose name embeds the account id, because
S3 bucket names are globally unique — is supplied at init time rather than
written into `backend.tf`, and why everything account-specific lives in one file
outside the tree that can go in a password vault.

The corollary: **make the safe path the easy path.** That file exports `TF_VAR_*`,
so a fresh clone on a new laptop needs nothing else to plan.

## 7. Make the dangerous thing require intent

The local environment file is deliberately *not* sourced from `~/.zshrc`,
because it exports `AWS_PROFILE` and this machine also holds credentials for an
unrelated production account. A shell silently carrying an `AWS_PROFILE` is how
the right plan reaches the wrong account.

Same reasoning gives this project its own AWS profile name even though it wraps
the same SSO session as another: it is the difference between "I meant to touch
this account" and "I was in the wrong terminal".

## 8. Fail loudly, or do not fail at all

Two patterns, applied deliberately:

- **Refuse to build rather than build something wrong.** Adding a document
  without registering it in `structure.json` fails the build. A broken internal
  link fails the build. There is no way to add a document and have it silently
  missing from the navigation.
- **Skip cleanly rather than fail noisily.** Before the infrastructure existed,
  the deploy workflow's preflight detected the missing variables, wrote an
  explanatory job summary and exited green — because a red build on every push
  is worse than no deploy at all.

The distinction: fail hard on things that are *wrong*, skip quietly on things
that are merely *not ready yet*.

## 9. Self-hosted, no third parties

The Content Security Policy names one external origin — Google Analytics — and
is otherwise enforced rather than aspirational: no CDN, no web fonts, no other
third-party scripts. Analytics was added deliberately in July 2026; before that
the site sent nothing anywhere, and everything else about that position still
holds. The site's own scripts are served from `/public` as files rather than
inlined, so `script-src` keeps no `'unsafe-inline'` exemption. Pagefind ships into the bundle. Astro's own CLI telemetry is switched
off in `scripts/astro.mjs` rather than left to each developer to remember.

A reader of this site is not measured, and nothing they read is reported to
anyone.

## 10. Write down why, especially when it was expensive

Nearly every rule in the content style guide is a scar. The same is true of the
comments in `infra/` and `.github/workflows/`.

When the first real deploy failed, the fix was four lines; the comment
explaining why `environment: production` breaks OIDC subject claims is
seventeen. That ratio is correct. The four lines are obvious in hindsight and
took an hour of CloudTrail archaeology to find, and the next person — the same
person, in eight months — will otherwise reintroduce it.

See [`decision-log.md`](decision-log.md) for the discoveries that earned their
comments.
