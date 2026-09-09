#!/usr/bin/env bash
# Upload the encoded episodes and the cover to the site bucket, under /audio/.
#
# ⚠️  THIS IS OUTWARD-FACING AND PUBLISHES ~1.12 GB. Non-negotiable 9: ASK THE
#     OWNER BEFORE RUNNING IT. It defaults to a DRY RUN for that reason — you must
#     pass --go to move a single byte.
#
# WHY THE AUDIO IS NOT IN `site/dist` AND MUST NEVER BE PUT THERE.
# `.github/workflows/deploy.yml` syncs `site/dist` to the bucket with `--delete`,
# and excludes `audio/*` from EVERY pass. Its own comment says why: the audio is
# "generated outside this build and uploaded straight to the bucket… A sync with
# --delete that did not exclude them would cheerfully delete every one of them."
# ⚠️  So this script is the ONLY thing that puts audio in the bucket, and the
#     deploy is deliberately blind to it. Do not "simplify" by copying the audio
#     into site/public — that would put 1.12 GB into git and into every build.
#
# THE SERVED NAME IS NOT THE FILE NAME. The masters are laid out as
# `Section Name/Document Title.m4a`, with SPACES. Apple requires "only ASCII
# filenames and URLs that include a-z, A-Z, or 0-9". So each file is uploaded to
# `audio/<doc_id>.m4a` — the mapping is in `podcasts_web/manifest.json`, which
# `scripts/build_podcast_audio.py` writes, and it is the same path
# `site/src/data/podcast.json` publishes to the feed and the downloads page.
# ⚠️  The three must agree. They all derive from that one manifest; keep it that way.
#
# CACHING. Audio is immutable in practice — a re-encode is a new file, and the
# feed's guid is deliberately NOT derived from the enclosure URL, so a changed
# file does not orphan a subscription. A year is right. The COVER is not: it is
# referenced by a stable URL and may be replaced, so it gets a short max-age.
#
# ⚠️  THE MIME TYPE MUST MATCH THE FEED. `site/src/pages/feed/podcast.xml.ts` emits
#     <enclosure type="audio/x-m4a">, which is the type Apple lists for M4A and uses in
#     its own sample feed. This script previously uploaded with `audio/mp4`; both are
#     accepted, but a feed and an origin that disagree about a file's type is the kind
#     of divergence that is discovered by a podcast client and nobody else.
#
# ⚠️  NO `--delete` ANYWHERE IN THIS SCRIPT, ON PURPOSE. This uploads; it never
#     removes. Deleting audio from the bucket is a separate, deliberate act.

set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$REPO/podcasts_web"
MANIFEST="$SRC/manifest.json"
COVER="$SRC/cover.png"

DRY="--dryrun"
for arg in "$@"; do
  case "$arg" in
    --go) DRY="" ;;
    *) echo "unknown argument: $arg" >&2; exit 2 ;;
  esac
done

# ⚠️ The bucket is NOT hardcoded, deliberately — this repository is public. It is the
# same GitHub repository variable `.github/workflows/deploy.yml` reads, so the script
# and the deploy can never disagree about where the site lives.
#
# An earlier version of this guard just named the variable, which told the operator
# what was missing and not where to get it. Say where.
# ⚠️ THE `default` PROFILE HAS NO CREDENTIALS FOR THIS ACCOUNT, AND THE ERROR SAYS
# "session has expired" RATHER THAN "wrong profile" — which sends you to re-run a
# login you have already run. Measured 9 September 2026: `aws login` succeeded and
# `aws sts get-caller-identity` still reported an expired session, because
# `~/.aws/config`'s `[default]` carries only a region, while the account the bucket
# lives in is reached through the `ice-hockey` profile.
#
# ⚠️ THE ACCOUNT ID IS NOT WRITTEN HERE, AND AN EARLIER VERSION OF THIS COMMENT PUT IT
# HERE — in the same comment that explains why the bucket name is kept out of the file,
# in a PUBLIC repository. `check_secrets.py` caught it. The id is in `~/.aws/config`
# and in the GitHub repository variables, which is where it belongs.
#
# So default to that profile, and let the environment override it.
export AWS_PROFILE="${AWS_PROFILE:-ice-hockey}"

if [ -z "${S3_BUCKET:-}" ]; then
  cat >&2 <<'HELP'
S3_BUCKET is not set.

It is a GitHub repository variable, the same one .github/workflows/deploy.yml uses.
Get it and re-run in one line:

    S3_BUCKET="$(gh variable get S3_BUCKET)" ./scripts/upload_podcast_audio.sh

or look it up first:

    gh variable list

⚠️ This script is a DRY RUN by default and moves no bytes. Add --go to publish,
   and only after the owner has approved it — it uploads ~1.12 GB.
HELP
  exit 2
fi

[ -f "$MANIFEST" ] || { echo "missing $MANIFEST — run scripts/build_podcast_audio.py first" >&2; exit 2; }

# ⚠️ FAIL ON AUTH BEFORE MOVING A GIGABYTE, NOT AFTER THE FIRST FILE. The previous
# run discovered an expired session by attempting a 29 MB upload and failing on it.
# Cheap to check, and it names the profile so the remedy is obvious.
if ! CALLER="$(aws sts get-caller-identity --query Arn --output text 2>&1)"; then
  cat >&2 <<HELP
AWS credentials are not usable for profile '${AWS_PROFILE}'.

  ${CALLER}

Log in, then re-run:

    awsl-web            # or: aws sso login --profile ${AWS_PROFILE}

⚠️ If you HAVE just logged in and still see "session has expired", it is the
   PROFILE, not the session: ~/.aws/config's [default] has no sso_session, so a
   bare 'aws' finds no credentials. This script defaults AWS_PROFILE to
   'ice-hockey'; override it with AWS_PROFILE=<name> if the account moves.
HELP
  exit 3
fi
echo "authenticated as: ${CALLER}"

# ⚠️ Refuse to upload against a manifest that disagrees with the tracked site data.
# If they differ, the feed would declare byte sizes for files that are not the ones
# in the bucket — and Apple validates on <enclosure length>. Fail loudly.
python3 - "$REPO" <<'PY'
import json, pathlib, sys
repo = pathlib.Path(sys.argv[1])
man = {r["doc_id"]: r["bytes"] for r in json.loads((repo / "podcasts_web/manifest.json").read_text())}
site = {e["doc_id"]: e["bytes"] for e in json.loads((repo / "site/src/data/podcast.json").read_text())["episodes"]}
if man != site:
    only_m = sorted(set(man) - set(site))
    only_s = sorted(set(site) - set(man))
    diff = sorted(k for k in set(man) & set(site) if man[k] != site[k])
    print("⚠️  podcasts_web/manifest.json and site/src/data/podcast.json DISAGREE.", file=sys.stderr)
    print("    The feed would declare sizes for files that are not these.", file=sys.stderr)
    for k in only_m: print(f"      only in manifest: {k}", file=sys.stderr)
    for k in only_s: print(f"      only in site data: {k}", file=sys.stderr)
    for k in diff:   print(f"      size differs: {k} ({man[k]} vs {site[k]})", file=sys.stderr)
    print("    Re-run scripts/build_podcast_audio.py, then commit site/src/data/podcast.json.", file=sys.stderr)
    sys.exit(3)
print(f"manifest agrees with site data: {len(man)} episodes")
PY

if [ -n "$DRY" ]; then
  echo
  echo "⚠️  DRY RUN. Nothing will be uploaded. Re-run with --go to publish."
  echo
fi

# Each episode, to its ASCII served path.
# ⚠️ NOT /tmp. CLAUDE.md: "Scratchpad, not /tmp" — /tmp is world-readable and gets
# clobbered by concurrent agents. mktemp -d gives a 0700 directory; the trap removes it
# on any exit path including a failure part-way through the upload loop.
PAIRS_DIR="$(mktemp -d)"
trap 'rm -rf "$PAIRS_DIR"' EXIT
PAIRS="$PAIRS_DIR/pairs.tsv"

python3 - "$REPO" <<'PY' > "$PAIRS"
import json, pathlib, sys
repo = pathlib.Path(sys.argv[1])
for r in json.loads((repo / "podcasts_web/manifest.json").read_text()):
    print(f'{r["file"]}\t{r["doc_id"]}')
PY

while IFS=$'\t' read -r rel doc_id; do
  aws s3 cp $DRY "$SRC/$rel" "s3://${S3_BUCKET}/audio/${doc_id}.m4a" \
    --content-type "audio/x-m4a" \
    --cache-control "public, max-age=31536000, immutable" \
    --no-progress
done < "$PAIRS"

if [ -f "$COVER" ]; then
  aws s3 cp $DRY "$COVER" "s3://${S3_BUCKET}/audio/cover.png" \
    --content-type "image/png" \
    --cache-control "public, max-age=3600" \
    --no-progress
else
  echo "⚠️  no cover at $COVER — run scripts/build_podcast_cover.py. The feed REQUIRES it:" >&2
  echo "    itunes:image is a REQUIRED channel tag for Apple Podcasts." >&2
fi

echo
if [ -n "$DRY" ]; then
  echo "Dry run complete. Nothing was uploaded."
else
  echo "Uploaded. ⚠️ Now check the feed's enclosure URLs actually resolve, and that"
  echo "   HTTP HEAD and byte-range requests work on them — Apple requires both."
fi
