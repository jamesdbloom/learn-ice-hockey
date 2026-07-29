#!/usr/bin/env bash
#
# Fetch the primary rulebooks into sources/ and extract them to text.
#
# Everything it writes is gitignored — see sources/README.md for why (copyright,
# not secrecy). This script exists so a new machine, or a session that finds
# sources/ empty, can rebuild it in one command instead of rediscovering seven
# URLs and two user-agent workarounds.
#
# Idempotent: a PDF that is already present and non-trivial is not re-fetched.
#
# Usage:  bash scripts/fetch_sources.sh [--force]

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$HERE/sources"
mkdir -p "$DEST"

FORCE=0
[ "${1:-}" = "--force" ] && FORCE=1

# A browser user-agent is load-bearing, not cargo cult. USA Hockey's CDN serves
# 403 to curl's default agent, and additionally wants a usahockey.com referer.
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

# name | referer | url
DOCS=(
  "iihf_rules|https://www.iihf.com/|https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/4_sport/officiating/rule_book/25_26/2025-26_iihf_rulebook_19052025-v1.pdf"
  "iihf_situations|https://www.iihf.com/|https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf"
  "nhl_rules|https://www.nhl.com/|https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf"
  "usah|https://www.usahockey.com/|https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf"
  "eiha_inhouse|https://englandicehockey.com/|https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf"
  "eih_rr|https://englandicehockey.com/|https://englandicehockey.com/wp-content/uploads/2024/09/1.0-5.0-EIH-Rules-and-Regulations.pdf"
)

command -v pdftotext >/dev/null 2>&1 || {
  echo "pdftotext not found — install poppler (brew install poppler)" >&2
  exit 2
}

fail=0
for entry in "${DOCS[@]}"; do
  IFS='|' read -r name referer url <<< "$entry"
  pdf="$DEST/$name.pdf"
  txt="$DEST/$name.txt"

  if [ "$FORCE" -eq 0 ] && [ -s "$txt" ]; then
    printf '  skip     %-18s (already extracted)\n' "$name"
    continue
  fi

  printf '  fetch    %-18s' "$name"
  if curl -sfL --max-time 120 -A "$UA" -e "$referer" "$url" -o "$pdf"; then
    size=$(wc -c < "$pdf" | tr -d ' ')
    # A challenge page or an error page is small and is not a PDF. Catch it
    # here rather than letting pdftotext produce a plausible-looking empty file.
    if [ "$size" -lt 50000 ] || ! head -c 4 "$pdf" | grep -q '%PDF'; then
      echo " FAILED (got ${size} bytes, not a PDF — bot challenge or moved)"
      rm -f "$pdf"; fail=1; continue
    fi
    # -layout preserves the column structure of the penalty tables. Without it
    # the columns interleave and rule numbers detach from their text.
    pdftotext -layout "$pdf" "$txt"
    echo " ok ($(wc -c < "$txt" | tr -d ' ') bytes of text)"
  else
    echo " FAILED (fetch)"; fail=1
  fi
done

# Hockey Canada is not scripted: its playing rules are behind a portal rather
# than a stable public PDF URL. Download manually and extract as hc.txt.
[ -s "$DEST/hc.txt" ] || echo "  MANUAL   hc                 (Hockey Canada — see sources/README.md)"

# The edition Britain actually adopts. See sources/README.md.
[ -s "$DEST/iihf_rules_v1.1.txt" ] || cat <<'EOF'
  MISSING  iihf_rules_v1.1    Britain adopts IIHF Rule Book v1.1 (July 2025);
                              this corpus verifies against v1.0. The IIHF
                              listing page is behind a bot challenge, so this
                              one needs a browser:
                              https://www.iihf.com/en/statichub/4719/rules-and-regulations
EOF

exit $fail
