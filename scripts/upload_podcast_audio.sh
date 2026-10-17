#!/usr/bin/env bash
# Upload the encoded episodes and the cover to the site bucket, under /audio/.
#
# ⚠️  THIS IS OUTWARD-FACING AND PUBLISHES ~1.12 GB. Non-negotiable 9: ASK THE
#     OWNER BEFORE RUNNING IT. It defaults to a DRY RUN for that reason — you must
#     pass --go to move a single byte.
#
# THE DRY RUN MAKES NO AWS CALL AT ALL. It does not run `aws`, it does not check
# credentials and it does not need S3_BUCKET (a placeholder is printed if it is unset).
# It reads the two JSON files and the local encodes, prints every check, and prints
# exactly what --go would upload and to which key. An earlier version ran
# `aws sts get-caller-identity` and `aws s3 cp --dryrun` even in a dry run, so a dry
# run needed working credentials and touched the account.
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
# WHERE EACH FILE GOES: THE `audio` FIELD, NEVER A PATH DERIVED FROM doc_id.
# The masters are laid out as `Section Name/Document Title.m4a`, with SPACES, and Apple
# requires "only ASCII filenames and URLs that include a-z, A-Z, or 0-9", so the served
# name is not the file name. The served path is the `audio` field of each episode in
# `site/src/data/podcast.json` — the feed's <enclosure url> is `origin + audio`
# (`site/src/pages/feed/podcast.xml.ts`) — and `scripts/build_podcast_audio.py` writes
# the same `audio` into `podcasts_web/manifest.json`. That field is PRESERVED across
# rebuilds, so an episode published under an old name keeps its URL.
# ⚠️  This script used to upload to `audio/<doc_id>.m4a` and ignore `audio`. For
#     foundation/rink_map the feed serves /audio/foundation/rink_map_and_glossary.m4a, so
#     an upload would have put the new bytes at a URL the feed does not serve, while the
#     agreement check passed — it compared byte sizes only, never paths.
#
# THE AGREEMENT CHECK. Before anything is uploaded (and in a dry run, before the plan is
# trusted) every one of these must hold, or the script refuses with exit 3:
#   - manifest.json and podcast.json list the same doc_ids, each once;
#   - every manifest entry HAS an `audio` field (a manifest written before the build
#     script recorded it cannot say where its file goes) and it equals podcast.json's;
#   - their `bytes` agree, and the local encode on disk is exactly that many bytes —
#     Apple validates <enclosure length>, so the feed must declare the file we upload;
#   - every `audio` is a plain ASCII path under /audio/ ending .m4a, and no two
#     episodes share one.
# ⚠️  It compares against the LOCAL podcast.json. The feed in production serves the
#     DEPLOYED one; if the local file has uncommitted or undeployed changes, the paths
#     checked here are not the paths production serves. Deploy the site data first.
#
# CACHING. Audio is immutable — a re-encode is a new file under a NEW KEY, and the
# feed's guid is deliberately NOT derived from the enclosure URL, so a changed
# file does not orphan a subscription. A year is right.
# ⚠️  AN UPLOAD TO AN EXISTING KEY WOULD REPLACE THE BYTES BEHIND AN `immutable` URL,
#     and deploy.yml invalidates nothing under /audio/ (see the cover note below), so the
#     edge would keep serving the old audio for up to that year. Since 17 October 2026
#     BOTH styles therefore use content-hashed keys — Conversation at
#     /audio/<doc_id>-<sha8>.m4a, Playing principles at /audio/principles/<doc_id>-<sha8>.m4a
#     — and the agreement check REFUSES an unhashed Conversation path or a hash that does
#     not match the local file. With --go, a key already in the bucket at the same byte
#     length is skipped (same name means same bytes). Superseded keys stay in the bucket.
#
# ⚠️  THE MIME TYPE MUST MATCH THE FEED. `site/src/pages/feed/podcast.xml.ts` emits
#     <enclosure type="audio/x-m4a">, which is the type Apple lists for M4A and uses in
#     its own sample feed. This script previously uploaded with `audio/mp4`; both are
#     accepted, but a feed and an origin that disagree about a file's type is the kind
#     of divergence that is discovered by a podcast client and nobody else.
#
# ⚠️  NO `--delete` ANYWHERE IN THIS SCRIPT, ON PURPOSE. This uploads; it never
#     removes. Deleting audio from the bucket is a separate, deliberate act.
#
# --style principles — THE PLAYING PRINCIPLES EPISODES (project/podcast_two_formats.md).
# A separate run that reads `podcasts_principles/manifest.json` and
# `site/src/data/podcast-principles.json` (both written by
# `build_podcast_audio.py --style principles`) and uploads ONLY those files, ONLY to keys
# under `audio/principles/`. It never reads podcast.json or podcasts_web/, never uploads
# the cover, and so cannot touch a Conversation episode. Still a dry run without --go.
# Extra checks in this style, all refusals (exit 3):
#   - every `audio` is `/audio/principles/<doc_id>-<sha8>.m4a` for its OWN doc_id;
#   - <sha8> is the first 8 hex digits of the sha256 of the local file — the name is a
#     content hash, so a key can never be given different bytes (nothing invalidates
#     /audio/ at the edge, and it is served `immutable` for a year);
#   - every episode has its permanent guid `learn-ice-hockey:principles:<doc_id>`.
# With --go, a key that already exists in the bucket at the same byte length is SKIPPED
# (same name means same bytes), so publishing one new episode uploads one file.
# ⚠️ ORDER: upload FIRST, then commit podcast-principles.json, then push. The page
#    serves whatever path the deployed JSON names.

set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GO=0
STYLE=conversation
EXPECT_STYLE=0
for arg in "$@"; do
  if [ "$EXPECT_STYLE" = 1 ]; then STYLE="$arg"; EXPECT_STYLE=0; continue; fi
  case "$arg" in
    --go) GO=1 ;;
    --dry-run|--dryrun) GO=0 ;;
    --style) EXPECT_STYLE=1 ;;
    --style=*) STYLE="${arg#--style=}" ;;
    -h|--help)
      echo "usage: $0 [--style conversation|principles] [--dry-run | --go]"
      echo "       (default: conversation, --dry-run; a dry run makes no AWS call)"
      exit 0 ;;
    *) echo "unknown argument: $arg" >&2; exit 2 ;;
  esac
done
[ "$EXPECT_STYLE" = 1 ] && { echo "--style needs a value: conversation or principles" >&2; exit 2; }

case "$STYLE" in
  conversation)
    SRC="$REPO/podcasts_web"
    SITE_DATA="$REPO/site/src/data/podcast.json"
    BUILD_HINT="scripts/build_podcast_audio.py"
    ;;
  principles)
    SRC="$REPO/podcasts_principles"
    SITE_DATA="$REPO/site/src/data/podcast-principles.json"
    BUILD_HINT="scripts/build_podcast_audio.py --style principles --doc <stem>"
    ;;
  *) echo "unknown --style: $STYLE (conversation or principles)" >&2; exit 2 ;;
esac
MANIFEST="$SRC/manifest.json"
COVER="$REPO/podcasts_web/cover.png"
COVER_DATA="$REPO/site/src/data/podcast-cover.json"

# ⚠️ The bucket is NOT hardcoded, deliberately — this repository is public. It is the
# same GitHub repository variable `.github/workflows/deploy.yml` reads, so the script
# and the deploy can never disagree about where the site lives.
#
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

if [ "$GO" = 1 ] && [ -z "${S3_BUCKET:-}" ]; then
  cat >&2 <<'HELP'
S3_BUCKET is not set.

It is a GitHub repository variable, the same one .github/workflows/deploy.yml uses.
Get it and re-run in one line:

    S3_BUCKET="$(gh variable get S3_BUCKET)" ./scripts/upload_podcast_audio.sh --go

or look it up first:

    gh variable list

⚠️ Without --go this script is a DRY RUN, needs no bucket, and makes no AWS call.
   Use --go only after the owner has approved it — it uploads ~1.12 GB.
HELP
  exit 2
fi
BUCKET_SHOWN="${S3_BUCKET:-<S3_BUCKET>}"

[ -f "$MANIFEST" ]  || { echo "missing $MANIFEST — run $BUILD_HINT first" >&2; exit 2; }
[ -f "$SITE_DATA" ] || { echo "missing $SITE_DATA — run $BUILD_HINT first" >&2; exit 2; }

# ⚠️ NOT /tmp. CLAUDE.md: "Scratchpad, not /tmp" — /tmp is world-readable and gets
# clobbered by concurrent agents. mktemp -d gives a 0700 directory; the trap removes it
# on any exit path including a failure part-way through the upload loop.
PAIRS_DIR="$(mktemp -d)"
trap 'rm -rf "$PAIRS_DIR"' EXIT
PAIRS="$PAIRS_DIR/pairs.tsv"

# ---- the agreement check, and the upload plan it produces ------------------------
# Writes `<local path>\t<s3 key>\t<bytes>` per episode to $PAIRS, IN THE FEED'S ORDER,
# using the `audio` field (leading slash stripped) as the key. Exit 3 on any
# disagreement. The plan is written even when the check fails, so that a dry run can
# show what WOULD have been uploaded; --go never reads it in that case.
set +e
python3 - "$MANIFEST" "$SITE_DATA" "$SRC" "$STYLE" > "$PAIRS" <<'PY'
import hashlib, json, pathlib, re, sys
manifest_path, site_path, src = (pathlib.Path(a) for a in sys.argv[1:4])
style = sys.argv[4]
site_label = site_path.name
problems = []

man_list = json.loads(manifest_path.read_text())
site_list = json.loads(site_path.read_text())["episodes"]

def index(entries, label):
    out = {}
    for e in entries:
        d = e.get("doc_id")
        if d in out:
            problems.append(f"{label} lists doc_id {d!r} more than once")
        out[d] = e
    return out

man = index(man_list, "manifest.json")
site = index(site_list, site_label)

for d in sorted(set(man) - set(site)):
    problems.append(f"only in manifest.json: {d}")
for d in sorted(set(site) - set(man)):
    problems.append(f"only in {site_label}: {d}")

# ASCII only, under /audio/, ending .m4a; no '..', no '//'. Apple: "only ASCII filenames
# and URLs that include a-z, A-Z, or 0-9".
AUDIO_RE = re.compile(r"^/audio/[A-Za-z0-9][A-Za-z0-9_\-/.]*\.m4a$")
served = {}
for d, s in site.items():
    a = s.get("audio")
    if not isinstance(a, str) or not AUDIO_RE.match(a) or ".." in a or "//" in a:
        problems.append(f"{site_label} {d}: audio path {a!r} is not a plain ASCII /audio/…/.m4a path")
    elif a in served:
        problems.append(f"{site_label}: {d} and {served[a]} both serve {a}")
    else:
        served[a] = d
    # ⚠️ Playing principles: the key must be under /audio/principles/, name its OWN
    # doc_id, and carry the content hash of the file that will be uploaded to it.
    if style == "principles" and isinstance(a, str):
        m_ = re.fullmatch(r"/audio/principles/(.+)-([0-9a-f]{8})\.m4a", a)
        if not m_ or m_.group(1) != d:
            problems.append(f"{site_label} {d}: audio {a!r} is not /audio/principles/{d}-<sha8>.m4a")
        else:
            f = src / (man.get(d, {}).get("file") or "")
            if f.is_file():
                h = hashlib.sha256(f.read_bytes()).hexdigest()[:8]
                if h != m_.group(2):
                    problems.append(f"HASH {d}: {a} names {m_.group(2)} but the local file hashes to {h}")
        if s.get("guid") != f"learn-ice-hockey:principles:{d}":
            problems.append(f"GUID {d}: {s.get('guid')!r} is not learn-ice-hockey:principles:{d}")
    # ⚠️ Conversation (since 17 Oct 2026): the same content-hash rule, at
    # /audio/<doc_id>-<sha8>.m4a. An UNHASHED path is refused: uploading new bytes to an
    # old key is exactly what the one-year `immutable` edge cache turns into stale audio.
    if style == "conversation" and isinstance(a, str):
        m_ = re.fullmatch(r"/audio/(.+)-([0-9a-f]{8})\.m4a", a)
        if not m_ or m_.group(1) != d or a.startswith("/audio/principles/"):
            problems.append(f"{site_label} {d}: audio {a!r} is not the content-hashed "
                            f"/audio/{d}-<sha8>.m4a (re-run build_podcast_audio.py)")
        else:
            f = src / (man.get(d, {}).get("file") or "")
            if f.is_file():
                h = hashlib.sha256(f.read_bytes()).hexdigest()[:8]
                if h != m_.group(2):
                    problems.append(f"HASH {d}: {a} names {m_.group(2)} but the local file hashes to {h}")

for d in sorted(set(man) & set(site)):
    m, s = man[d], site[d]
    if "audio" not in m:
        problems.append(f"PATH UNKNOWN {d}: manifest.json has no `audio` field "
                        f"(podcast.json serves {s.get('audio')})")
    elif m["audio"] != s.get("audio"):
        problems.append(f"PATH differs {d}: manifest.json {m['audio']} vs {site_label} {s.get('audio')}")
    if m.get("bytes") != s.get("bytes"):
        problems.append(f"BYTES differ {d}: manifest.json {m.get('bytes')} vs {site_label} {s.get('bytes')}")
    f = src / m.get("file", "")
    if not m.get("file") or not f.is_file():
        problems.append(f"MISSING {d}: no local encode at {src.name}/{m.get('file')}")
    elif f.stat().st_size != s.get("bytes"):
        problems.append(f"BYTES differ {d}: {src.name}/{m['file']} is {f.stat().st_size} bytes, "
                        f"{site_label} declares {s.get('bytes')}")

# The plan: the feed's order, the feed's path, the manifest's local file.
for s in site_list:
    d = s.get("doc_id")
    m = man.get(d)
    if not isinstance(s.get("audio"), str):
        continue
    if m is None:          # shown in a dry run as unplannable; --go has already refused
        print(f"-\t{s['audio'].lstrip('/')}\t{s.get('bytes')}")
        continue
    print(f"{src / m.get('file', '')}\t{s['audio'].lstrip('/')}\t{s.get('bytes')}")

if problems:
    print(f"⚠️  REFUSING: {src.name}/manifest.json, site/src/data/{site_label} and the local "
          "encodes DISAGREE.", file=sys.stderr)
    print("    The feed would point at a URL, or declare a length, that is not what this "
          "script would upload.", file=sys.stderr)
    for p in problems:
        print(f"      {p}", file=sys.stderr)
    print(f"    {len(problems)} problem(s). Re-run scripts/build_podcast_audio.py"
          f"{' --style principles' if style == 'principles' else ''} (it writes "
          f"`audio` into both files), then commit and deploy site/src/data/{site_label}.",
          file=sys.stderr)
    sys.exit(3)
print(f"{src.name}/manifest.json, {site_label} and the local encodes agree: {len(site)} episodes, "
      "paths and bytes" + (", content hashes and guids" if style == "principles" else ""),
      file=sys.stderr)
PY
CHECK=$?
set -e

if [ "$CHECK" != 0 ] && [ "$CHECK" != 3 ]; then
  echo "agreement check crashed (exit $CHECK); nothing uploaded" >&2
  exit "$CHECK"
fi
if [ "$CHECK" = 3 ] && [ "$GO" = 1 ]; then
  echo "Nothing uploaded." >&2
  exit 3
fi

# ---- the cover ------------------------------------------------------------------
# ⚠️ THE COVER IS UPLOADED UNDER A CONTENT-HASHED NAME AND IS IMMUTABLE.
#     It used to be `audio/cover.png` with a one-hour max-age, replaced in place.
#     That does not work here, for two reasons measured on 10 September 2026:
#       1. deploy.yml excludes `audio/*` from BOTH sync passes and only pass 2's log
#          feeds the CloudFront invalidation, so NOTHING under /audio/ is invalidated
#          by a deploy. The edge served the superseded cover with `Age: 71651` against
#          its own `max-age=3600` — twenty hours past its stated TTL.
#       2. ⚠️ Apple caches show artwork against the URL it fetched it from, so a cover
#          replaced in place can keep showing the old image in the directory after the
#          origin is right. After a show is LISTED that is slow to unpick.
#     So a new cover is a NEW URL, and the old one is simply left where it is.
# The served name comes from `site/src/data/podcast-cover.json`, which
# `scripts/build_podcast_cover.py` writes and `site/src/pages/feed/podcast.xml.ts`
# reads. ⚠️ All three derive from that one file; keep it that way.
COVER_KEY=""
if [ "$STYLE" = principles ]; then
  : # ⚠️ The cover belongs to the Conversation run. A principles run uploads episodes only.
elif [ -f "$COVER" ]; then
  COVER_NAME="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["file"])' "$COVER_DATA")"
  # ⚠️ Refuse if the tracked name is not the hash of the file about to be uploaded —
  #     that means the cover was rebuilt without the site data being regenerated, and the
  #     feed would point at a URL that does not exist.
  ACTUAL="cover-$(python3 -c 'import hashlib,sys;print(hashlib.sha256(open(sys.argv[1],"rb").read()).hexdigest()[:8])' "$COVER").png"
  if [ "$COVER_NAME" != "$ACTUAL" ]; then
    echo "⚠️  REFUSING: site/src/data/podcast-cover.json says '$COVER_NAME' but $COVER hashes to '$ACTUAL'." >&2
    echo "    Re-run scripts/build_podcast_cover.py and commit the site data." >&2
    [ "$GO" = 1 ] && { echo "Nothing uploaded." >&2; exit 3; }
    CHECK=3
  else
    COVER_KEY="audio/${COVER_NAME}"
  fi
else
  echo "⚠️  no cover at $COVER — run scripts/build_podcast_cover.py. The feed REQUIRES it:" >&2
  echo "    itunes:image is a REQUIRED channel tag for Apple Podcasts." >&2
fi

# ---- dry run: print the plan, touch nothing ---------------------------------------
if [ "$GO" = 0 ]; then
  echo
  if [ "$CHECK" = 3 ]; then
    echo "⚠️  DRY RUN — AND --go WOULD REFUSE (see above). This is the plan as $(basename "$SITE_DATA")"
    echo "    describes it; it would NOT run until the disagreement is fixed."
  else
    echo "DRY RUN. No AWS call is made and nothing is uploaded. --go would run exactly:"
  fi
  echo
  n=0; total=0
  while IFS=$'\t' read -r local key bytes; do
    if [ "$local" = "-" ]; then
      printf '  %-62s -> s3://%s/%s  NOT PLANNED: in %s, not in manifest.json\n' "<no local file>" "$BUCKET_SHOWN" "$key" "$(basename "$SITE_DATA")"
      continue
    fi
    n=$((n + 1)); case "$bytes" in (*[!0-9]*|"") ;; (*) total=$((total + bytes)) ;; esac
    printf '  %-62s -> s3://%s/%s  (%s bytes)\n' "${local#"$SRC"/}" "$BUCKET_SHOWN" "$key" "$bytes"
  done < "$PAIRS"
  [ -n "$COVER_KEY" ] && printf '  %-62s -> s3://%s/%s\n' "cover.png" "$BUCKET_SHOWN" "$COVER_KEY"
  echo
  echo "  ${n} ${STYLE} episode(s), ${total} bytes; content-type audio/x-m4a,"
  echo "  cache-control 'public, max-age=31536000, immutable'. No --delete."
  echo "  With --go, a key already in the bucket at the same byte length is skipped."
  echo
  if [ "$CHECK" = 3 ]; then
    echo "Dry run complete. Nothing was uploaded. --go WOULD REFUSE."
    exit 3
  fi
  echo "Dry run complete. Nothing was uploaded. Re-run with --go to publish."
  exit 0
fi

# ---- --go: authenticate, then upload --------------------------------------------
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

while IFS=$'\t' read -r local key bytes; do
  [ "$local" = "-" ] && { echo "internal error: unplanned entry $key reached --go" >&2; exit 3; }
  case "$STYLE:$key" in
    principles:audio/principles/*) ;;
    principles:*) echo "internal error: principles run planned $key, outside audio/principles/" >&2; exit 3 ;;
    conversation:audio/principles/*) echo "internal error: conversation run planned $key, inside audio/principles/" >&2; exit 3 ;;
  esac
  # Content-hashed key (both styles): if it is already there at this length, it is these bytes.
  have="$(aws s3api head-object --bucket "$S3_BUCKET" --key "$key" \
           --query ContentLength --output text 2>/dev/null || true)"
  if [ "$have" = "$bytes" ]; then
    echo "already in bucket, skipped: $key"
    continue
  fi
  aws s3 cp "$local" "s3://${S3_BUCKET}/${key}" \
    --content-type "audio/x-m4a" \
    --cache-control "public, max-age=31536000, immutable" \
    --no-progress
done < "$PAIRS"

if [ -n "$COVER_KEY" ]; then
  aws s3 cp "$COVER" "s3://${S3_BUCKET}/${COVER_KEY}" \
    --content-type "image/png" \
    --cache-control "public, max-age=31536000, immutable" \
    --no-progress
fi

echo
echo "Uploaded. ⚠️ Now check the feed's enclosure URLs actually resolve, and that"
echo "   HTTP HEAD and byte-range requests work on them — Apple requires both."
echo "   A replaced file under an unchanged path may need a CloudFront invalidation."
