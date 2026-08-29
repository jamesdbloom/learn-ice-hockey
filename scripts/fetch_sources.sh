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
  # ⚠️ v1.1, the edition EIH/SIHA/BUIHA adopt. Round 52 found the publisher-original at this
  # 3_the_iihf/ path (200, 11,795,028 bytes, MD5 ca5e829a949581491ddf435d92e98af5, Producer
  # "Adobe PDF Library 18.0"). The officiating-section link this used to name still serves the
  # SUPERSEDED v1.0 — and the corpus was fetching v1.0 while citing v1.1 against it. Note the
  # filename says -v1 while the document says Version 1.1; that is the IIHF's, not a typo here.
  # Do NOT substitute the rbihf.be mirror: it is a Ghostscript re-distillation whose broken
  # fi/fl ToUnicode map needs the ligature repair in sources/README.md. This file does not.
  "iihf_rules|https://www.iihf.com/|https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/3_the_iihf/2025-26_iihf_rulebook_22122025-v1.pdf"
  "iihf_situations|https://www.iihf.com/|https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf"
  "nhl_rules|https://www.nhl.com/|https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf"
  "usah|https://www.usahockey.com/|https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf"
  # ⚠️ The separate Rules AND CASEBOOK, 476pp. Round 52 fetched it and the corpus now cites it —
  # Rule 630 Situation 41 (which writes the NHL's delayed-offside own-goal exception OUT), Rule 607
  # Situation 2, Rule 203(a) Situation 6. Until this line existed it lived only in a session
  # scratchpad, so the corpus cited a book no later round could re-derive from the repository.
  # Note its own "Rule Reference 630(d.3)" in Situations 40/41 cites a sub-clause that does not
  # exist in the printed rule — the book's error, recorded rather than repaired.
  "usah_casebook|https://www.usahockey.com/|https://cdn3.sportngin.com/attachments/document/4f1a-3442850/2025-29_USAH_Playing_Rules___Casebook.pdf"
  "eiha_inhouse|https://englandicehockey.com/|https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf"
  "eih_rr|https://englandicehockey.com/|https://englandicehockey.com/wp-content/uploads/2024/09/1.0-5.0-EIH-Rules-and-Regulations.pdf"
  "iihf_coachdev_off_tactics|https://www.hockeyeasternontario.ca/|https://www.hockeyeasternontario.ca/media/n4pf15hp/iihf_coachdev_off_tactics.pdf"
  "heo_intl_drill_symbols|https://www.hockeyeasternontario.ca/|https://www.hockeyeasternontario.ca/media/ns2jrj0c/dev1_international_drill_symbols.pdf"
  "ibc|https://www.usahockey.com/|https://cdn4.sportngin.com/attachments/document/55c1-2114751/IntroductiontoBodyContact.pdf"
  "hc|https://www.hockeycanada.ca/|https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf"
)

# Books extracted BOTH ways. The plain extraction keeps the canonical name
# because every existing line citation was derived against it; the -layout
# extraction lands alongside as <name>_layout.txt. See the note in the loop.
DUAL_EXTRACT=(nhl_rules hc)

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
    #
    # ⚠️ EXCEPT for the two books in DUAL_EXTRACT. Those are extracted BOTH ways,
    # and the PLAIN one keeps the canonical name. That is not a style choice:
    # every nhl_rules.txt:NNNN and hc.txt:NNNN citation in project/ was derived
    # against the plain text, and this script used to write -layout to those
    # names — so a fresh clone got text whose line numbers did not match the
    # citations, silently. Round 52 found it.
    #
    # The two flags have COMPLEMENTARY failure modes (see sources/README.md):
    #   plain    joins hyphenated line breaks — "face-off" becomes "faceoff",
    #            measured at 88 corrupted word-instances across the two books
    #            with zero survivals. Authority for SENTENCE CONTIGUITY.
    #   -layout  puts both halves of a two-column table on one physical line, so
    #            a left-column sentence stops being contiguous. Eleven corpus
    #            quotations are greppable in plain and not in -layout.
    #            Authority for WORDING.
    # Replacing one with the other recovers 12 quotations and loses 11. Keep both.
    if printf '%s\n' "${DUAL_EXTRACT[@]}" | grep -qx "$name"; then
      pdftotext "$pdf" "$txt"
      pdftotext -layout "$pdf" "$DEST/${name}_layout.txt"
      echo " ok ($(wc -c < "$txt" | tr -d ' ') plain + $(wc -c < "$DEST/${name}_layout.txt" | tr -d ' ') layout)"
    else
      pdftotext -layout "$pdf" "$txt"
      echo " ok ($(wc -c < "$txt" | tr -d ' ') bytes of text)"
    fi
  else
    echo " FAILED (fetch)"; fail=1
  fi
done

# Hockey Canada IS scripted now — the comment that used to sit here said its rules
# were "behind a portal rather than a stable public PDF URL", and that stopped being
# true. The CDN link above serves 200 with a 30 MB PDF of the 2026-2028 book.
#
# ⚠️ One thing to know before you regenerate it. The `hc.txt` this corpus has cited
# since before that change was extracted with PLAIN pdftotext, not `-layout` — the
# two are byte-comparable and the plain one is 370,730 bytes against -layout's
# 449,195. (Both re-derived 2026-08-25 from a fresh download of the URL above: it
# serves 200 with a 30,185,748-byte PDF, plain extraction is byte-identical to the
# sources/hc.txt this corpus cites, and -layout gives the larger figure. The numbers
# are measured, not carried.) So Hockey Canada is the one book whose on-disk text has the interleaved
# columns the -layout flag exists to prevent, which is the documented cause of the
# stray "Rule 7.8" header sitting between Interpretation 3 and its own carve-out
# sentence. Re-extracting with -layout is better evidence and WILL shift every
# hc.txt:NNNN line citation in project/reviews/. Decide deliberately; do not let it
# happen as a side effect of a --force run.
#
# ⚠️ ROUND 52 SETTLED THIS, AND THE ANSWER IS "KEEP BOTH". Measured 2026-08-29 from
# fresh downloads of both URLs (NHL 21,695,323 bytes MD5 14a2e6c1…; HC 30,185,748
# bytes MD5 511592dc…; plain extraction of each is byte-identical to the on-disk
# file, so neither PDF has drifted).
#
#   Plain pdftotext SILENTLY JOINS HYPHENATED LINE BREAKS. Measured: 96 hyphen
#   breaks across the two books, 84 adjacency-confirmed, 88 corrupted word-instances
#   (56 NHL across 23 words, 32 HC across 24), and ZERO cases where the hyphen
#   survived. It is deterministic, not sporadic. "face-off" becomes "faceoff"
#   (0 occurrences in -layout, 11 in plain, all artefacts); "Off-Ice Officials"
#   becomes "OffIce Officials".
#
#   Consequences, both of which have already bitten:
#     * 12 corpus quotations are VERBATIM CORRECT against the book and CANNOT BE
#       GREPPED in the plain text. A verifier searching sources/ finds zero hits and
#       concludes fabrication. One agent was dispatched to "fix" five of them and
#       correctly REFUSED, proving the extraction wrong rather than the corpus.
#     * A negative-existence search for a hyphenated term returns a FALSE ABSENCE.
#       Nine terms are invisible to a hyphenated grep of the plain files while the
#       books do use them (NHL "fore-check", "stick-measuring"; HC "self-defence",
#       "stick-checked", "three-ply", "non-playing", "re-surfaced", …). No corpus
#       claim rests on one yet. The next one written against these files is the one
#       that fires it.
#
#   BUT -layout IS NOT STRICTLY BETTER, which is why this is not a swap. It puts the
#   two halves of a two-column table on the same physical line, so a left-column
#   sentence stops being contiguous. Eleven quotations — NHL Rule 69 Table 6 (four in
#   positions/goaltender.md, plus rules_primer.md and risk_management.md) and four HC
#   glossary entries — are GREPPABLE IN PLAIN AND NOT IN -layout. Replacing the files
#   recovers 12 quotations and loses 11.
#
#   So: the two extractions have COMPLEMENTARY failure modes. Generate both.
#   -layout is the authority for WORDING; plain is the authority for SENTENCE
#   CONTIGUITY inside two-column tables and glossaries. Keeping both is additive and
#   leaves every existing nhl_rules.txt:NNNN and hc.txt:NNNN citation valid, which a
#   swap would not.
#
#   This is now implemented — see DUAL_EXTRACT above and the branch in the
#   extraction loop. It is no longer a placeholder for a human to run.

# The edition Britain actually adopts. See sources/README.md.
[ -s "$DEST/iihf_rules_v1.1.txt" ] || cat <<'EOF'
  MISSING  iihf_rules_v1.1    Britain adopts IIHF Rule Book v1.1 (July 2025);
                              this corpus verifies against v1.0. The IIHF
                              listing page is behind a bot challenge, so this
                              one needs a browser:
                              https://www.iihf.com/en/statichub/4719/rules-and-regulations
EOF

exit $fail
