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

`learn-ice-hockey.com`, registered through Route 53 in the same account as the
`mockserver-website` profile, per D8. The account id is deliberately not
recorded here — see `$ICE_HOCKEY_AWS_ACCOUNT_ID` in `~/.config/ice-hockey/env`.

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

## The key-facts layer

Every teaching section in the 26 how-to-play documents now opens with a fenced
```` ```facts ```` block of extracted labelled imperatives. The convention lives
in [`../project/content_style_guide.md`](../project/content_style_guide.md); this
is what building it taught.

### The source example broke its own rule

The convention was designed from a hand-made mind map. Its defender block draws
`Position`, `Action` and `Targets` from lines 36–38 of `positions/defender.md`
and `Risk` from line 66 — **the next subsection down**.

A careful author, working by hand, on one block, already drifted a fact out of
its section. That is the entire argument for *extract, never author*, and it
came from the sample rather than from a hypothetical.

### `Rule:` was the trap, and it was in the example too

The mind map labels *"never carry through the high-danger slot"* as a `Rule`. It
is a coaching instruction. Adopting that usage would have broken
[the cardinal rule](../project/content_style_guide.md) in the most visible place
on every page, in 26 documents at once.

`Rule:` is now reserved for cited rulebook text; coaching constraints take
`Never:`. Across 3,900+ facts, **every `Rule:` fact carries a citation and none
is coaching advice** — including "never through the slot", which `breakouts.md`
itself calls "the absolute rule" and which came out as `Never:`.

### `Convention:` did not exist and had to

The corpus hedges constantly and correctly — *"a coaching default, not a law"*,
*"a tendency, not a law"*. With no label for that, the pilot found the hedge
either bloated the line or was dropped. `Convention:` is used **251 times**:
251 places where a coaching choice is marked as one at a glance.

### The spec was wrong twice, and the checker found both

`scripts/check_facts.py` was written to enforce the mechanical rules. It
immediately failed content that was right:

- **A flat 8-fact cap evicted rulebook facts** — Rule 56.1, the interference and
  pick trap, and the trapezoid rule in `defender.md`. The style guide already
  said a cap must never do that. `Rule:` facts no longer count against it.
- **A flat 200-character limit fought the requirement to keep cross-book
  divergences intact.** The most valuable material in this corpus is exactly the
  material that needs a subordinate clause. `Rule:` and `Convention:` now get
  300.

> Where a fact ran long it was **split into two complete facts, never trimmed**.
> Under pressure the thing that gets trimmed is always the caveat.

### What the agents refused to write

The most reassuring output was the rejections. Independently, across 26
documents, they declined to convert qualified findings into imperatives —
`faceoffs.md`'s r-values, `shooting.md`'s royal-road share, `scanning_and_
anticipation.md`'s Berg data, `game_management.md`'s goalie-pull simulations —
and refused to restate numbers another document owns, pointing instead.

One found a **defect in the body**: `time_and_space.md` §6 states the
no-line-change-after-icing rule bare, and USA Hockey is the outlier. Rather than
promote a known-incomplete rule into the most visible layer on the page, it
dropped the fact and flagged the prose.

### The cost, stated plainly

This adds ~690 blocks to a corpus that had two summary blocks per document.
**That is roughly a tenfold increase in the surface where a corrected body can
be contradicted by a stale summary** — in the layer the style guide already
identifies as where corrections go to die. The controls are extraction over
authorship, body-wins-on-conflict, and a review round that reads only the fact
layer. **That review round has not yet run.**

---

## One directory per layer

`content/` was flat except for `content/positions/`, which held **four** of the
positional layer's **five** documents — `switching_positions.md` sat at the
root. So the one directory that existed looked like it encoded the layer
grouping and did not.

The corpus is now `content/<layer-id>/<doc>.md`, with the directory name equal
to the layer id in `structure.json`, no exceptions. `getting_started` has its
own directory despite being alone in it, because an exception is what caused the
original confusion. The `positional` layer id was renamed to `positions` so the
existing directory did not have to move and the URL still reads well.

31 files moved · 1,270 cross-links rewritten inside `content/` · 40 in the
README, `project/` and `docs/` · all 38 public URLs changed.

### Two things this broke, and one it revealed

**The remark plugin carried a hardcoded `positions/` fallback.** It resolved a
cross-link by trying the literal path, then the basename, then
`positions/<basename>` — which covered the corpus exactly as long as there was
one subdirectory. With seven, every *sibling* link inside a layer directory
stopped resolving. It now builds a basename index from the known ids, which is
directory-agnostic; the plugin's own docstring already said basenames are unique
corpus-wide, which is what makes that safe.

**`npm run build` was validating stale HTML.** The fix above appeared not to
work through four rebuilds. It had worked every time: Astro's content-layer
cache was serving renders produced before the change, and `check-links` was
faithfully checking those. Deleting `.astro`, `dist`, `node_modules/.astro` and
`node_modules/.vite` made 376 resolver calls appear and every link resolve.

> **The cache does not invalidate on plugin source changes.** A build can pass
> or fail on output that no longer corresponds to the code. `npm run build` now
> runs `clean:cache` first — three seconds against a class of bug where the
> checker lies to you.

CI never hit this, because `npm ci` starts with no cache. It is a local-only
trap, which is worse: it is the environment where you iterate.

---

## The account id these docs were written to protect

`docs/aws-design.md` opened with four constraints, the third of which read:

> **A public repository.** Nothing account-identifying may be committed.

Three lines above it, the second constraint named the AWS account id. So did
`docs/README.md`, `docs/operations.md` and this file. All four went out in
`6d72700` and sat on a public repository for four days.

The account id had been kept out of `backend.tf` deliberately, supplied through
a gitignored `backend.hcl` instead — and then written into the prose describing
that decision. **The care went into the code and not into the documentation
about the code.**

**Decision:** remove it from all four, and reference
`$ICE_HOCKEY_AWS_ACCOUNT_ID` from `~/.config/ice-hockey/env` instead.
`operations.md` no longer prints the expected account for comparison; it
compares `sts get-caller-identity` against the environment variable, which is
more useful anyway because it cannot go stale.

**Decision:** add `scripts/check_secrets.py`, running as the first CI job.
A sentence of prose forbidding something is not enforcement, and this is the
proof. Two constraints shaped it:

- *It must not contain the account id.* A scanner carrying the secret in order
  to search for it is the leak it exists to prevent. It matches the shape —
  twelve digits not part of a longer run — and additionally matches the literal
  value only when `$ICE_HOCKEY_AWS_ACCOUNT_ID` is exported, which happens
  locally and deliberately never in CI.
- *It must not print what it found.* CI logs on a public repository are public.
  An early version showed the first and last two characters, which gives away a
  third of a twelve-digit id; it now reports `file:line` and a length.

It was tested by replaying the original leak — `git show 6d72700:docs/README.md`
into the tree — and confirming it fails. A secret scanner that has never caught
anything is indistinguishable from one that does not work.

**Not decided: the git history.** The value is still reachable in `6d72700` on
a public remote, and removing it needs a rewrite and a force push. See open
threads.

## A deployed page should say what it is

Four commits sat unpushed on 28 July while the live site looked entirely
healthy. Nothing about a running site distinguishes *deployed and current* from
*deployed, successfully, four commits ago* — the CloudFront response is
identical either way, and the last three Actions runs were all green.

**Decision:** every build stamps its commit into the page.
`site/src/lib/build-version.mjs` resolves it once per build from `GITHUB_SHA`,
falling back to `git rev-parse`, and never throws — a missing stamp must not
fail a build. It surfaces twice: an HTML comment in the `<head>` of all 39
pages, and `/version.json` for scripting.

Two details worth keeping:

- `/version.json` is the one file in the five-minute cache pass that is also
  explicitly invalidated. Its entire purpose is to answer "what is live *now*",
  which a five-minute stale window undermines.
- `dirty` is emitted only for local builds with an unclean tree, and omitted
  in CI rather than being reported as `false`. `dirty: true` on production
  therefore means a hand-built upload, which is a thing worth being able to see.

---

## The facts layer was never narrated

Found by `commit-gate` during round 22, verified directly, and it invalidated a
line of reasoning three review rounds had been building on.

`scripts/md_to_speech.py` had no handling for `facts` at all — the string did
not appear in the file. Every fenced block was parsed as code and replaced with
*"A diagram appears here in the written version. It is drawn in text and cannot
be read aloud."* Generating the corpus produced **766 of those placeholders
against 764 facts blocks**, and no fact text in the SSML at all.

Two things were wrong with that.

**The listener was told something false.** The blocks are not diagrams. They are
prose, and they could be read aloud trivially.

**And it inverted the layer's purpose.** The facts layer exists to carry the
most load-bearing sentences in the corpus — 4,423 fact lines, of which **424
mention a penalty, an injury, an ejection or a prohibition**. Rounds 20, 21 and
22 all reasoned explicitly about "what a listener hears from this block with no
surrounding context", and used that reasoning to justify *putting* safety
caveats into facts blocks — the checking-legality rules in
`body_contact_and_battles.md` §5 among them. Every one of those arguments was
wrong in the same direction: the layer being optimised for the listener was the
only layer the listener never received.

**Decision:** render `facts` fences as speech. A short lead-in, then one
paragraph per fact with the label spoken as its own clause — *"Never. Lunge…"*,
*"Rule. The restricted area is I-I-H-F Rule twenty-seven point seven…"*. The
labels are imperatives by design, which is what lets them read naturally
without rewriting a single fact. Values go through the same `to_speech`
pipeline as body prose, so the numeral, abbreviation and symbol handling is
inherited rather than duplicated.

Genuine diagrams keep the placeholder. After the change the corpus reports
**764 facts-block conversions and 2 dropped code blocks**, and those two are the
ASCII rink diagrams, which is correct.

**The cost is real and belongs in the Phase 5 decision.** Billed characters go
from **2,328,233 to 2,796,473 — plus 468,240, about 20%.** Polly bills per
character, so narration gets proportionally more expensive. That is the right
trade: the alternative is paying to narrate a corpus with its safety layer
removed. But it should be priced deliberately rather than discovered on an
invoice, and it is another reason Phase 4b (section kinds) has to land before
anything is sent to Polly.

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
| **The account id in git history** | ~~Still reachable in `6d72700`~~ — **done, 29 July 2026.** Rewritten with `git filter-repo --replace-text` in a separate clone (the live repo held another agent's uncommitted work) and force-pushed. Verified from a fresh clone: zero commits and zero blobs contain it; 42 commits preserved, trees byte-identical. The local branch pointer was moved with `reset --soft` after confirming the trees matched, so no working-tree file was touched. **Caveat:** GitHub retains unreferenced objects until GC, so the old SHA may still resolve — ask GitHub Support to GC if that matters |
| **Stale root README** | ~~Still claims `.github/workflows/` and the speech tooling are "not yet written"~~ — corrected |
| **Fact-layer-only review round** | Not run. The one control on the key-facts layer that needs a reader rather than a checker, and the one the style guide's own history says matters most |
| **`##` preambles carry unblocked teaching** | Found independently by six agents. A `##` with subsections may now carry a block where its own body holds material no subsection covers, but the run used the stricter earlier rule — so `puck_support_and_spacing.md` (3 sections), `passing_and_receiving.md` (2), `forechecking_systems.md` (3), `puck_handling.md`, `zone_entries.md` §5, `switching_positions.md`, `defensive_zone_coverage.md` and `positions/goaltender.md`'s save list all have teaching with no facts block. A targeted sweep would recover it |
| **Sections at the 8-fact cap doing two jobs** | Roughly fifteen, named in the agent reports — `breakouts.md` §8, `defender.md` blocking shots, `special_teams.md` faceoffs, `offensive_zone_play.md` goaltender interference, and others. Each would be better split than capped |
