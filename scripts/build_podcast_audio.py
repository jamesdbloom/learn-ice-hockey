#!/usr/bin/env python3
"""Re-encode the podcast masters for the web, and give them the metadata they ship with none of.

⚠️  NEVER MODIFIES `podcasts/`. It reads the masters and writes to `podcasts_web/`.
    A backup is not the safety net here — an original you never touched is.
    Masters additionally backed up 8 September 2026 to
    `~/Documents/personal/ice_hockey_podcast_masters_backup_2026-09-08/`.

WHY 64 kbps MONO, and why that is not a quality cut.
    The masters are 257 kbps STEREO AAC — and the stereo is fake. Phase-inverting one
    channel against the other over a 60-second excerpt leaves a difference signal at
    -91.0 dB against content at -26.8 dB: a 64 dB gap, i.e. the noise floor. The two
    channels carry identical audio. So roughly half the master's bitrate encodes a
    duplicate, and going mono discards nothing at all.
    The owner listened to 90-second excerpts at 128k stereo / 96k / 80k / 64k mono and
    chose 64k mono on 8 September 2026. Measured: 4.31 GB -> ~1.12 GB, ~37 MB for a
    70-minute episode.

⚠️  GENERATION LOSS. These masters are already lossy AAC, so this is a lossy->lossy
    re-encode and the artefacts compound. That is acceptable here because the owner
    judged the RESULT by ear. It is NOT a licence to transcode again from the output:
    always re-encode from `podcasts/`, never from `podcasts_web/`.

⚠️  DO NOT ADD AN MP3 PASS WITHOUT READING THE PLAN ROW FIRST. MP3 from these files is a
    second generation of loss on top of this one. `project/plans/OPEN_ITEMS.md` TIER 0-A
    records that Spotify's and Apple's actual accepted formats have NOT been verified
    against their own documentation, and that requirement must be checked, not assumed.

⚠️  "READ ALOUD" WAS WRONG AND SHIPPED IN ALL 37 FILES. MEASURED, 9 September 2026:
    every episode runs 48-72 minutes REGARDLESS of its document's length. Rules Primer
    is 93,153 words in 67.9 min (1,371 apparent wpm); Reading Ice Hockey Diagrams is
    4,198 words in 53.4 min (79 wpm). Speech runs ~150 wpm, so no episode is a complete
    reading of its document and the 17x spread says the duration is a property of the
    production, not of the text. ⚠️  DO NOT REINTRODUCE "read aloud", "narration" or
    "narrated": each asserts a verbatim reading, and the durations refute it.

⚠️  AND DO NOT REPLACE IT WITH "the audio edition" EITHER — that was the first repair and
    the owner rejected it on 9 September 2026: "the audio should also stand alone on its
    own as a separate standalone podcast, not be too strongly stated as just an audio
    version of the site." Both wordings describe the episode by its RELATIONSHIP TO THE
    SITE rather than by its subject, which is the thing a listener scrolling a podcast
    app actually needs.
    So the description is the DOCUMENT'S OWN description sentence from `docs-meta.json` —
    corpus-derived, already reviewed, and about hockey rather than about this project —
    with the site as a trailing reference rather than the headline. The back-reference the
    owner does want is still there, in `comment` and at the end of `description`.

⚠️  --retag IS LOSSLESS AND --force IS NOT. Metadata is a container edit: `-c copy`
    remuxes the SAME AAC stream under new tags. `--force` re-encodes and spends another
    generation of loss to change a text field. If only the tags are wrong, use --retag.

TITLES come from each document's H1 in `content/`, which is authoritative. The mapping
from audio filename to document is by normalised title, and the OVERRIDES table below is
EMPTY — a silent fuzzy match is how the wrong episode gets the wrong title, so the script
refuses to run on an unmatched master rather than guessing. ⚠️  An earlier version of this
paragraph said "with FOUR EXPLICIT OVERRIDES", which was already false when it was written:
the table beneath it explains that three were never needed and the fourth was a typo the
owner fixed at source. A stale docstring outlives the code it describes.

Idempotent: an output newer than its input, encoded at the same settings, is skipped.
Run with --force to re-encode regardless.
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import subprocess
import sys
import unicodedata

REPO = pathlib.Path(__file__).resolve().parent.parent
MASTERS = REPO / "podcasts"
OUT = REPO / "podcasts_web"
STRUCTURE = REPO / "site" / "src" / "data" / "structure.json"
DOCS_META = REPO / "site" / "src" / "data" / "docs-meta.json"
CONTENT = REPO / "content"
# ⚠️ TRACKED, unlike podcasts_web/. The feed and the downloads page are built by
# Astro in GitHub Actions, where the audio does NOT exist — `.gitignore` covers
# `*.m4a`. So the per-episode byte sizes and durations Apple requires in every
# <enclosure> have to reach the build some other way, and this is it: a small
# JSON file of metadata ONLY, no audio, regenerated whenever the audio is.
# ⚠️ If this file is stale the feed lies about file sizes. Regenerate it in the
# same run that encodes.
SITE_DATA = REPO / "site" / "src" / "data" / "podcast.json"

BITRATE = "64k"
CHANNELS = "1"
SAMPLE_RATE = "44100"

SITE = "https://learn-ice-hockey.com"
AUTHOR = "James Bloom"
ALBUM_ARTIST = "Ice Hockey — Learning to Play the Game"
GENRE = "Education"

# Audio filename stem -> content document id, ONLY where normalised-title matching
# fails against the document's H1.
#
# ⚠️ EMPTY ON PURPOSE, AND IT SHOULD STAY THAT WAY. All 37 masters now match their
# document's H1 by normalised title. The one that did not — "Offense Zone Play",
# against the document "Offensive Zone Play" — was a typo in the master's filename,
# and the owner fixed it AT SOURCE on 8 September 2026 (master and backup both
# renamed) rather than papering over it here.
#
# ⚠️ An earlier draft of this file listed FOUR overrides. Three of them were not
# needed: "UK and England Rules", "Risk Management and Decision-Making" and "The
# Mental Game" match their H1 titles exactly, and only LOOKED unmatched in a
# throwaway check that compared them against document IDS (`uk_rules`,
# `risk_management`, `mental_game`) because `docs-meta.json` carries no titles.
# An override describing a problem that does not exist is the kind of wrong
# documentation that survives, because nobody re-checks a plausible list.
#
# Prefer fixing a filename to adding an entry here. The script REFUSES TO RUN on an
# unmatched master rather than guessing a title, which is the behaviour you want.
OVERRIDES: dict[str, str] = {}


def norm(s: str) -> str:
    s = unicodedata.normalize("NFKD", str(s)).lower()
    return re.sub(r"[^a-z0-9]", "", s)


def h1_title(doc_id: str) -> str:
    """The document's own H1. Authoritative — never invent a title."""
    path = CONTENT / f"{doc_id}.md"
    for line in path.read_text().split("\n"):
        if line.startswith("# "):
            return line[2:].strip()
    raise SystemExit(f"no H1 in {path}")


def reading_order() -> list[tuple[str, str, str, int]]:
    """(doc_id, layer_title, doc_title, track) in the corpus's own reading order."""
    structure = json.loads(STRUCTURE.read_text())
    rows, track = [], 0
    for layer in structure["layers"]:
        for doc_id in layer["docs"]:
            track += 1
            rows.append((doc_id, layer["title"], h1_title(doc_id), track))
    return rows


def probe(path: pathlib.Path) -> dict:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries",
         "format=duration,bit_rate", "-of", "json", str(path)],
        capture_output=True, text=True, check=True).stdout
    return json.loads(out)["format"]


def doc_description(doc_id: str) -> str:
    """The document's own one-sentence description, as the site and the EPUB use it.
    Corpus-derived and already reviewed — never invent one, and never substitute a
    sentence about this project for a sentence about hockey."""
    docs = json.loads(DOCS_META.read_text())["docs"]
    if doc_id not in docs:
        raise SystemExit(f"docs-meta.json has no entry for {doc_id} — run 'npm run prepare:meta'")
    text = (docs[doc_id].get("description") or "").strip()
    if not text:
        raise SystemExit(f"docs-meta.json has an empty description for {doc_id}")
    return text


def tags(doc_id: str, layer_title: str, doc_title: str,
         track: int, total_docs: int) -> list[str]:
    """The ffmpeg -metadata arguments. ONE definition, so an encode and a retag
    cannot drift apart — which is exactly how the wrong description survived in
    all 37 files while the script that wrote it looked fine."""
    url = f"{SITE}/{doc_id}/"
    return [
        "-metadata", f"title={doc_title}",
        "-metadata", f"artist={AUTHOR}",
        "-metadata", f"album_artist={ALBUM_ARTIST}",
        "-metadata", f"album={layer_title}",
        "-metadata", f"track={track}/{total_docs}",
        "-metadata", f"genre={GENRE}",
        "-metadata", f"comment={url}",
        "-metadata", f"description={doc_description(doc_id)} Full text at {url}",
        "-metadata", f"copyright={AUTHOR}",
    ]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true", help="re-encode even if the output looks current")
    ap.add_argument("--limit", type=int, default=0, help="encode at most N files (for a trial run)")
    ap.add_argument("--retag", action="store_true",
                    help="rewrite metadata on the EXISTING podcasts_web files with -c copy. "
                         "Lossless: same AAC stream, new container tags. Use this, never --force, "
                         "when only the metadata is wrong.")
    args = ap.parse_args()

    if not MASTERS.is_dir():
        raise SystemExit(f"masters not found: {MASTERS}")

    order = reading_order()
    by_norm_title = {norm(t): (d, l, t, n) for d, l, t, n in order}
    by_norm_id = {norm(d.split("/")[-1]): (d, l, t, n) for d, l, t, n in order}
    total_docs = len(order)

    masters = [p for p in sorted(MASTERS.rglob("*.m4a")) if "_bitrate_samples" not in str(p)]

    pairs, unmatched = [], []
    for m in masters:
        stem = m.stem
        row = None
        if stem in OVERRIDES:
            doc_id = OVERRIDES[stem]
            row = next((r for r in order if r[0] == doc_id), None)
        if row is None:
            row = by_norm_title.get(norm(stem)) or by_norm_id.get(norm(stem))
        if row is None:
            unmatched.append(m)
        else:
            pairs.append((m, row))

    if unmatched:
        print("⚠️  UNMATCHED masters — refusing to run rather than guess a title:", file=sys.stderr)
        for m in unmatched:
            print("      " + str(m.relative_to(MASTERS)), file=sys.stderr)
        return 2

    claimed = {row[0] for _, row in pairs}
    missing = [r for r in order if r[0] not in claimed]

    print(f"build_podcast_audio: {len(pairs)} master(s) matched to {total_docs} document(s)")
    if missing:
        print(f"⚠️  {len(missing)} document(s) have NO audio — recorded, not an error:")
        for d, _l, t, _n in missing:
            print(f"      {t}  ({d})")

    if args.limit:
        pairs = pairs[: args.limit]

    manifest, done, skipped = [], 0, 0
    for master, (doc_id, layer_title, doc_title, track) in pairs:
        rel = master.relative_to(MASTERS)
        dest = OUT / rel
        dest.parent.mkdir(parents=True, exist_ok=True)

        if args.retag:
            # Container-only rewrite: the SAME AAC stream under new tags. Via a temp
            # file because ffmpeg cannot read and write one path at once.
            if not dest.exists():
                print(f"⚠️  --retag: no output to retag, run without it first: {rel}", file=sys.stderr)
                return 2
            tmp = dest.with_suffix(".retag.m4a")
            subprocess.run(
                ["ffmpeg", "-v", "error", "-y", "-i", str(dest),
                 "-map", "0:a:0", "-c", "copy", "-map_metadata", "-1",
                 *tags(doc_id, layer_title, doc_title, track, total_docs),
                 "-movflags", "+faststart", str(tmp)],
                check=True)
            tmp.replace(dest)
            done += 1
        elif dest.exists() and not args.force and dest.stat().st_mtime >= master.stat().st_mtime:
            skipped += 1
        else:
            cmd = [
                "ffmpeg", "-v", "error", "-y", "-i", str(master),
                "-map", "0:a:0", "-c:a", "aac", "-b:a", BITRATE,
                "-ac", CHANNELS, "-ar", SAMPLE_RATE,
                *tags(doc_id, layer_title, doc_title, track, total_docs),
                "-movflags", "+faststart",
                str(dest),
            ]
            subprocess.run(cmd, check=True)
            done += 1

        info = probe(dest)
        manifest.append({
            "doc_id": doc_id,
            "title": doc_title,
            "section": layer_title,
            "track": track,
            "file": str(rel),
            "bytes": dest.stat().st_size,
            "duration_s": round(float(info.get("duration", 0)), 1),
            "bitrate": int(info.get("bit_rate", 0)),
            "url": f"{SITE}/{doc_id}/",
        })
        print(f"  [{track:2d}/{total_docs}] {doc_title[:44]:44s} {dest.stat().st_size/1e6:6.1f} MB")

    manifest.sort(key=lambda r: r["track"])
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")

    # The tracked, audio-free half. `audio` is the published path: `/audio/<doc_id>.m4a`,
    # which is the convention `site/src/consts.ts` already documents and is pure ASCII —
    # Apple requires "only ASCII filenames and URLs that include a-z, A-Z, or 0-9", and
    # the master filenames contain spaces, so the served name is NOT the file name.
    if len(manifest) == total_docs:
        SITE_DATA.write_text(json.dumps({
            "note": ("Generated by scripts/build_podcast_audio.py. Metadata only — the audio "
                     "itself is gitignored and uploaded to the bucket out of band. Byte sizes "
                     "and durations are read from the encoded files and are what the podcast "
                     "feed's <enclosure> elements declare."),
            "episodes": [{
                "doc_id": r["doc_id"],
                "title": r["title"],
                "section": r["section"],
                "track": r["track"],
                "bytes": r["bytes"],
                "duration_s": r["duration_s"],
                "audio": f"/audio/{r['doc_id']}.m4a",
            } for r in manifest],
        }, indent=2) + "\n")
        print(f"site data: {SITE_DATA.relative_to(REPO)} ({len(manifest)} episodes)")
    else:
        # ⚠️ A PARTIAL RUN MUST NOT REWRITE THE TRACKED FILE. `--limit` exists for trial
        # runs; letting one truncate the feed's source data to a handful of episodes is
        # exactly the silent, mechanically-clean breakage this repository keeps recording.
        print(f"⚠️  partial run ({len(manifest)} of {total_docs}) — {SITE_DATA.name} NOT rewritten")

    tot_b = sum(r["bytes"] for r in manifest)
    tot_s = sum(r["duration_s"] for r in manifest)
    src_b = sum(m.stat().st_size for m, _ in pairs)
    print(f"\n{'retagged' if args.retag else 'encoded'} {done}, skipped {skipped}")
    print(f"masters {src_b/1e9:.2f} GB  ->  web {tot_b/1e9:.2f} GB "
          f"({tot_b/src_b*100:.0f}%)  ·  {tot_s/3600:.1f} h")
    print(f"manifest: {OUT.relative_to(REPO)}/manifest.json")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
