#!/usr/bin/env python3
"""Re-encode the podcast masters for the web, and give them the metadata they ship with none of.

⚠️  NEVER MODIFIES `podcasts/`. It reads the masters and writes to `podcasts_web/`.
    Nothing in this script writes, moves or deletes a master. Masters are replaced BY
    HAND (an accepted episode moved in from `~/Documents/personal/ice_hockey_podcast_incoming/`),
    and that manual step is the one this script cannot guard.

⚠️  BACKUPS. An earlier version of this docstring said the masters were "additionally
    backed up 8 September 2026 to `~/Documents/personal/ice_hockey_podcast_masters_backup_2026-09-08/`".
    ON 16 OCTOBER 2026 THAT FOLDER WAS NOT ON DISK, so `podcasts/` was the only copy —
    and by then four masters had already been overwritten by rejected September
    attempts. Do not trust a sentence about a backup; this script now checks for one:
      --backup     copies every file under `podcasts/` and `podcasts_web/` that is not
                   already backed up (same relative path, same size) into a NEW
                   timestamped folder under BACKUP_ROOT, outside the repository. It never
                   overwrites an earlier snapshot.
      a real run   REFUSES to encode any master that has no same-size copy in some
                   snapshot under BACKUP_ROOT, and copies every `podcasts_web/` file it is
                   about to overwrite into its own timestamped folder first.

⚠️  WHAT GETS PUBLISHED IS OPT-IN, AND A REFUSAL STOPS THE RUN. The four September
    attempts (Core Principles, Language and Glossary, Rink Map, On-Ice Communication)
    were REJECTED but their masters sit in `podcasts/`, and the old version of this
    script published every `.m4a` it found there. Now, per master, using the queue state
    in `.podcast_queue/state.json` (written by `scripts/podcast_queue.py`):
      * queue status `blocked`              -> REFUSED, always.
      * a NEW master                         -> REFUSED unless its queue status is `accepted`.
                                                No state file means no status, so a new
                                                master is refused — the safe default.
      * an UNCHANGED master                  -> allowed; this is the master the live
                                                episode was encoded from.
      * `--retag` on a NEW master            -> REFUSED: retag remuxes the OLD web output,
                                                and would then hide the new master.
    "New" means: not the master the web output was encoded from. Every encode now records
    the master's size, mtime and sha256 in `podcasts_web/manifest.json`; with a record, a
    master whose size+mtime differ is judged by sha256, so a restore that loses timestamps
    is decided by CONTENT. Entries encoded before 16 Oct 2026 have no record and fall back
    to the old rule (no output, or master newer than output), and the run says so.
    Any refusal exits 2 BEFORE anything is written. To publish around a refused master
    you must name it: `--exclude DOC_ID`. An excluded document keeps its EXISTING feed
    entry exactly as it is (guid, audio path, bytes, duration) and its web file is not
    touched; a document with no existing entry simply stays out of the feed.

⚠️  THE GUID IS PRESERVED; THE AUDIO PATH IS A CONTENT HASH (since 17 October 2026).
    `guid` is what a podcast client keys an episode on, so changing it re-delivers the
    episode to every subscriber. It is copied from the existing `site/src/data/podcast.json`
    entry whenever there is one (e.g. `learn-ice-hockey:foundation/rink_map_and_glossary`,
    pinned when `rink_map_and_glossary` was renamed `rink_map`); an entry with no `guid`
    field keeps the derived `learn-ice-hockey:<doc_id>`, and a NEW episode gets that same
    derived form. The feed's `<enclosure url>` is allowed to change; the guid is not.
    ⚠️ THE AUDIO PATH IS NOT PRESERVED FOR NEW BYTES. CloudFront serves /audio/ `immutable`
    for a year and nothing invalidates it, so new bytes uploaded to an old key would keep
    being served as the OLD audio. So every episode this run ENCODES OR RETAGS gets
    `/audio/<doc_id>-<sha8>.m4a` — the same rule as Playing principles: <sha8> is the first
    8 hex digits of the sha256 of the ENCODED file, so different bytes always get a
    different key and the same key always means the same bytes. A SKIPPED or EXCLUDED
    episode keeps whatever path it has, because its bytes have not changed. The old key is
    left in the bucket (the upload script never deletes). `--move-audio-path`, the earlier
    answer to the rink_map path split, is obsolete and now refused with this explanation.

TRACK NUMBERS are kept. The feed emits `track` as <itunes:episode>; an existing episode
keeps its published track unless `--renumber` is given, and a new one takes its
`structure.json` position. A clash between the two is refused until it is decided.

Encodes and retags write to a temp file beside the output, check it has a duration, then
replace() — an interrupted run never leaves a truncated file under the published name.
Both JSON files are written atomically, and the old manifest is backed up first.

ALWAYS DRY-RUN FIRST: `--dry-run` writes nothing (no encode, no retag, no backup, no
manifest, no `podcast.json`) and prints, per master, what would happen and why, then
the field-by-field change to every feed entry.

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

`site/src/data/podcast.json` and `podcasts_web/manifest.json` are rewritten only by a
full, non-dry run with no refusals. Episodes are never dropped from the feed silently:
an existing entry whose document has no publishable master is carried forward unchanged.

--style principles  — THE SECOND FORMAT (project/podcast_two_formats.md, owner 16 Oct 2026)
    Everything above describes the DEFAULT style, `conversation` (NotebookLM, two hosts).
    `--style principles` is a separate path for the Playing principles episodes (ElevenLabs
    Style B, one voice) and shares only the encoder settings, `tags()` and the title rules:
      input    `podcast_style_b/<stem>.wav` — lossless PCM, so this is ONE generation of
               loss, not the Conversation pipeline's two. The stem is the document's file
               stem (`shooting`); it must match exactly one doc_id in structure.json.
      output   `podcasts_principles/<doc_id>-<sha8>.m4a`, e.g.
               `podcasts_principles/technique/shooting-1a2b3c4d.m4a`, 64k mono AAC, and
               `podcasts_principles/manifest.json`. sha8 is the first 8 hex digits of the
               sha256 of the ENCODED FILE, so different bytes always get a different key —
               the bucket serves /audio/ `immutable` for a year and nothing invalidates it.
      site     `site/src/data/podcast-principles.json` — served path
               `/audio/principles/<doc_id>-<sha8>.m4a`, and an explicit guid
               `learn-ice-hockey:principles:<doc_id>` written on FIRST publish and copied
               verbatim forever after, even if the document is later renamed.
    ⚠️ OPT-IN BY NAME. A WAV in `podcast_style_b/` is NOT a publishable episode — on
       17 October 2026 that directory held three WAVs of which one was approved. So this
       path encodes ONLY the documents named with `--doc` (stem or doc_id), and refuses
       any whose `podcast_queue.py --style principles` state is `blocked`.
    ⚠️ ORDER OF OPERATIONS: encode (this) -> `upload_podcast_audio.sh --style principles --go`
       -> commit podcast-principles.json -> push. The JSON names a hashed key, so committing
       it before the upload ships a page whose Playing principles option 404s.
    ⚠️ The feed holds every Playing principles episode back until all documents have one
       (`principlesInFeed()` in site/src/lib/podcast-feed.ts, enforced again by
       site/scripts/check-podcast-guids.mjs). This script does not decide that.

--style basics  — THE BASICS (project/podcast_principles_series_plan.md, owner 20 Oct 2026)
    About thirteen short TOPIC episodes for newer or younger players. Keyed by TOPIC SLUG,
    not by document; each draws on one to three documents (`sources`). The topics are
    fixed in advance in the `planned` list of `site/src/data/podcast-basics.json`.
      input    `podcast_style_b/basics/<slug>.wav`.
      output   `podcasts_principles/basics/<slug>-<sha8>.m4a` (same 64k mono AAC settings),
               and `podcasts_principles/basics/manifest.json`.
      site     `site/src/data/podcast-basics.json` `episodes` — served path
               `/audio/principles/basics/<slug>-<sha8>.m4a`, guid `learn-ice-hockey:core:<slug>`
               written on FIRST publish and copied verbatim forever after.
    ⚠️ OPT-IN BY NAME: `--slug` is required and must be a PLANNED slug. REFUSED (exit 2,
       nothing written): an unplanned slug, a missing WAV, a `blocked` status in
       `.podcast_queue/state-basics.json` (written by `podcast_queue.py --style basics`),
       a malformed plan, or a guid or audio path that
       is already used by ANY collection (Conversation, Playing principles or Basics).
    ⚠️ BACKUP: a real run copies the WAV (unless a same-size, same-mtime copy is already in
       a snapshot) and the JSON it is about to rewrite into a new folder under BACKUP_ROOT.
    ⚠️ The feed holds The Basics back until EVERY planned topic is published
       (`basicsInFeed()` in site/src/lib/podcast-feed.ts). This script does not decide that.
    ⚠️ ORDER: encode -> `upload_podcast_audio.sh --style basics --go` -> commit the JSON -> push.
"""

from __future__ import annotations

import argparse
import json
import pathlib
import datetime
import hashlib
import re
import shutil
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
# Written by scripts/podcast_queue.py; gitignored. Read-only here.
QUEUE_STATE = REPO / ".podcast_queue" / "state.json"
# OUTSIDE the repository on purpose: `podcasts/` and `podcasts_web/` are gitignored,
# so a backup inside the checkout would share the checkout's fate.
BACKUP_ROOT = pathlib.Path.home() / "Documents" / "personal" / "ice_hockey_podcast_backups"

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
         track: int, total_docs: int, title: str | None = None) -> list[str]:
    """The ffmpeg -metadata arguments. ONE definition, so an encode and a retag
    cannot drift apart — which is exactly how the wrong description survived in
    all 37 files while the script that wrote it looked fine.
    `title` overrides the title tag only (Playing principles names its format in it);
    Conversation passes nothing and keeps the plain document title it always had."""
    url = f"{SITE}/{doc_id}/"
    return [
        "-metadata", f"title={title or doc_title}",
        "-metadata", f"artist={AUTHOR}",
        "-metadata", f"album_artist={ALBUM_ARTIST}",
        "-metadata", f"album={layer_title}",
        "-metadata", f"track={track}/{total_docs}",
        "-metadata", f"genre={GENRE}",
        "-metadata", f"comment={url}",
        "-metadata", f"description={doc_description(doc_id)} Full text at {url}",
        "-metadata", f"copyright={AUTHOR}",
    ]


def default_audio_path(doc_id: str) -> str:
    """The LEGACY unhashed path, `/audio/<doc_id>.m4a`. Only an entry written before
    17 October 2026 that carries no `audio` field could still mean this; nothing this
    script writes now uses it. Pure ASCII — Apple requires "only ASCII filenames and URLs
    that include a-z, A-Z, or 0-9", and the master filenames contain spaces, so the
    served name is NOT the file name."""
    return f"/audio/{doc_id}.m4a"


def conversation_audio_path(doc_id: str, sha8: str) -> str:
    """The served path for Conversation bytes this run wrote: `/audio/<doc_id>-<sha8>.m4a`,
    doc_id keeping its slash, exactly as Playing principles does under /audio/principles/.
    A content hash, so a re-encode can never be served from a stale edge cache."""
    return f"/audio/{doc_id}-{sha8}.m4a"


def load_queue_status() -> dict[str, str]:
    """doc_id -> queue status from `.podcast_queue/state.json`. Read-only. A missing
    file yields {}, under which every NEW master is refused (no `accepted` status)."""
    if not QUEUE_STATE.exists():
        return {}
    items = json.loads(QUEUE_STATE.read_text()).get("items", {})
    return {k: v.get("status", "") for k, v in items.items()}


def load_site_data() -> dict[str, dict]:
    """doc_id -> the EXISTING feed entry, verbatim. The source of preserved guids and
    audio paths, and of every entry carried forward unchanged."""
    if not SITE_DATA.exists():
        return {}
    return {e["doc_id"]: e for e in json.loads(SITE_DATA.read_text()).get("episodes", [])}


def load_web_manifest() -> dict[str, dict]:
    path = OUT / "manifest.json"
    if not path.exists():
        return {}
    return {e["doc_id"]: e for e in json.loads(path.read_text())}


TEMP_SUFFIXES = (".partial.m4a", ".retag.m4a")


def is_temp(path: pathlib.Path) -> bool:
    return path.name.endswith(TEMP_SUFFIXES)


def sha256_of(path: pathlib.Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def master_record(master: pathlib.Path) -> dict:
    """What a manifest entry records about the master it was ENCODED from. Written only
    at encode time — the one moment we know which master produced the output."""
    st = master.stat()
    return {"master_size": st.st_size, "master_mtime": int(st.st_mtime),
            "master_sha256": sha256_of(master)}


def master_identity(master: pathlib.Path, dest: pathlib.Path, rel: pathlib.Path,
                    old: dict | None) -> tuple[bool, str]:
    """(is_new, how-decided). A master is NEW when it is not the one the existing web
    output was encoded from.

    With a record (`master_sha256` in the old manifest entry for this file): size+mtime
    match -> unchanged; otherwise the sha256 decides, so a restore that loses or changes
    timestamps is judged by CONTENT, not by its clock.
    Without a record (every entry encoded before 16 Oct 2026): the legacy mtime rule —
    no output, or master newer than output -> new — and the output says so."""
    if not dest.exists():
        return True, "no web output"
    rec = old if old and old.get("file") == str(rel) and old.get("master_sha256") else None
    if rec:
        st = master.stat()
        if st.st_size == rec.get("master_size") and int(st.st_mtime) == rec.get("master_mtime"):
            return False, "matches recorded size+mtime"
        if st.st_size != rec.get("master_size"):
            return True, "size differs from recorded master"
        same = sha256_of(master) == rec["master_sha256"]
        return (not same), ("sha256 matches record (mtime changed)" if same
                            else "sha256 differs from recorded master")
    new = master.stat().st_mtime > dest.stat().st_mtime
    return new, "NO master record — legacy mtime rule"


def backed_up(rel: pathlib.Path, area: str, src: pathlib.Path) -> pathlib.Path | None:
    """A copy of `<area>/<rel>` with the same size AND mtime (copy2 preserves it) in ANY
    snapshot under BACKUP_ROOT, or None."""
    if not BACKUP_ROOT.is_dir():
        return None
    st = src.stat()
    for snap in sorted(BACKUP_ROOT.iterdir(), reverse=True):
        cand = snap / area / rel
        if cand.is_file():
            cs = cand.stat()
            if cs.st_size == st.st_size and abs(cs.st_mtime - st.st_mtime) < 1:
                return cand
    return None


def stamp() -> str:
    return datetime.datetime.now().strftime("%Y-%m-%dT%H%M%S")


def assert_outside_repo(path: pathlib.Path) -> None:
    try:
        path.resolve().relative_to(REPO)
    except ValueError:
        return
    raise SystemExit(f"refusing: backup location {path} is INSIDE the repository")


def copy_verified(src: pathlib.Path, dst: pathlib.Path) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    if dst.stat().st_size != src.stat().st_size:
        raise SystemExit(f"backup copy size mismatch, stopping: {src} -> {dst}")


def write_json_atomic(path: pathlib.Path, data) -> None:
    tmp = path.with_name(path.name + ".tmp")
    tmp.write_text(json.dumps(data, indent=2) + "\n")
    tmp.replace(path)


def cmd_backup(dry_run: bool) -> int:
    """Incremental, timestamped, never-overwriting snapshot of both audio trees."""
    assert_outside_repo(BACKUP_ROOT)
    todo = []
    for area, root in (("podcasts", MASTERS), ("podcasts_web", OUT)):
        if not root.is_dir():
            continue
        for f in sorted(root.rglob("*")):
            if f.is_file() and f.name != ".DS_Store" and not is_temp(f):
                rel = f.relative_to(root)
                if backed_up(rel, area, f) is None:
                    todo.append((area, root, rel, f.stat().st_size))
    snap = BACKUP_ROOT / stamp()
    total = sum(t[3] for t in todo)
    print(f"backup: {len(todo)} file(s), {total/1e9:.2f} GB not yet backed up"
          f" -> {snap}{'  (DRY RUN — nothing copied)' if dry_run else ''}")
    for area, _root, rel, size in todo:
        print(f"    {area}/{rel}  {size/1e6:.1f} MB")
    if dry_run or not todo:
        return 0
    assert_outside_repo(snap)
    snap.mkdir(parents=True, exist_ok=False)
    for area, root, rel, _size in todo:
        copy_verified(root / rel, snap / area / rel)
    print(f"backed up {len(todo)} file(s) to {snap}")
    return 0


# ---- --style principles ------------------------------------------------------------
STYLE_B = REPO / "podcast_style_b"
PRINCIPLES_OUT = REPO / "podcasts_principles"
PRINCIPLES_DATA = REPO / "site" / "src" / "data" / "podcast-principles.json"
PRINCIPLES_QUEUE_STATE = REPO / ".podcast_queue" / "state-principles.json"
PRINCIPLES_LABEL = "Playing principles"
PRINCIPLES_GUID_PREFIX = "learn-ice-hockey:principles:"


def principles_audio_path(doc_id: str, sha8: str) -> str:
    """The served path. doc_id keeps its slash, literally: technique/shooting ->
    /audio/principles/technique/shooting-<sha8>.m4a (project/podcast_two_formats.md)."""
    return f"/audio/principles/{doc_id}-{sha8}.m4a"


def principles_feed_title(doc_id: str, order: list, conversation_ids: set[str]) -> str:
    """`<Section> <n> · <Document> — Playing principles`, numbered exactly as
    `feedItems()` in site/src/lib/podcast-feed.ts will number it on the day Playing
    principles joins the feed: n counts the items in the SEASON, in site order,
    Conversation before Playing principles per document — and the feed only carries
    Playing principles once every document has one, so every principles slot counts.
    ⚠️ It is a SNAPSHOT of today's Conversation set: if a Conversation episode is added
    earlier in the same section, the feed's n moves and this file tag does not (the
    feed's <title> is computed at build time and stays right). Same rule as the feed
    for a document named like its section ("Getting Started"): no prefix."""
    layer_title = next(l for d, l, _t, _n in order if d == doc_id)
    doc_title = next(t for d, _l, t, _n in order if d == doc_id)
    n = 0
    for d, l, _t, _n in order:
        if l != layer_title:
            continue
        n += (1 if d in conversation_ids else 0) + 1
        if d == doc_id:
            break
    name = f"{doc_title} — {PRINCIPLES_LABEL}"
    return name if layer_title == doc_title else f"{layer_title} {n} · {name}"


def cmd_principles(args) -> int:
    order = reading_order()                       # (doc_id, layer_title, doc_title, track)
    total_docs = len(order)
    by_id = {r[0]: r for r in order}
    by_stem: dict[str, list[str]] = {}
    for d in by_id:
        by_stem.setdefault(d.split("/")[-1], []).append(d)

    if not args.doc:
        print("⚠️  --style principles encodes ONLY the documents named with --doc (stem or doc_id).\n"
              "    A WAV in podcast_style_b/ is not an approved episode; name each one you mean "
              "to publish.", file=sys.stderr)
        return 2

    wanted, problems = [], []
    for name in args.doc:
        if name in by_id:
            doc_id = name
        elif len(by_stem.get(name, [])) == 1:
            doc_id = by_stem[name][0]
        else:
            problems.append(f"--doc {name!r}: not a doc_id or a unique document stem in structure.json")
            continue
        if doc_id in (w for w, _ in wanted):
            continue
        wav = STYLE_B / f"{doc_id.split('/')[-1]}.wav"
        if not wav.is_file():
            problems.append(f"{doc_id}: no master at {wav.relative_to(REPO)}")
            continue
        wanted.append((doc_id, wav))

    qstate = {}
    if PRINCIPLES_QUEUE_STATE.exists():
        qstate = {k: v.get("status", "") for k, v in
                  json.loads(PRINCIPLES_QUEUE_STATE.read_text()).get("items", {}).items()}
    for doc_id, _wav in wanted:
        if qstate.get(doc_id) == "blocked":
            problems.append(f"{doc_id}: queue status is 'blocked' in "
                            f"{PRINCIPLES_QUEUE_STATE.relative_to(REPO)} (rejected episode)")
    if problems:
        print("⚠️⚠️  REFUSED — nothing written:", file=sys.stderr)
        for p in problems:
            print(f"      {p}", file=sys.stderr)
        return 2

    site = json.loads(PRINCIPLES_DATA.read_text())
    existing = {e["doc_id"]: e for e in site.get("episodes", [])}
    man_path = PRINCIPLES_OUT / "manifest.json"
    old_man = {e["doc_id"]: e for e in json.loads(man_path.read_text())} if man_path.exists() else {}
    conversation_ids = set(load_site_data())

    print(f"build_podcast_audio --style principles: {len(wanted)} document(s)"
          f"{'  — DRY RUN, nothing will be written' if args.dry_run else ''}")

    new_entries: dict[str, dict] = {}
    new_man: dict[str, dict] = {}
    for doc_id, wav in wanted:
        _d, layer_title, doc_title, track = by_id[doc_id]
        title_tag = principles_feed_title(doc_id, order, conversation_ids)
        prev_m = old_man.get(doc_id) or {}
        prev_e = existing.get(doc_id)
        st = wav.stat()
        local = PRINCIPLES_OUT / prev_m["file"] if prev_m.get("file") else None
        current = (
            not args.force and prev_e is not None and local is not None and local.is_file()
            and local.stat().st_size == prev_m.get("bytes") == prev_e.get("bytes")
            and prev_e.get("audio") == prev_m.get("audio")
            and prev_m.get("title_tag") == title_tag
            and (
                (st.st_size == prev_m.get("master_size") and int(st.st_mtime) == prev_m.get("master_mtime"))
                or (st.st_size == prev_m.get("master_size") and sha256_of(wav) == prev_m.get("master_sha256"))
            )
        )
        print(f"  {'skip' if current else 'encode':6s} {doc_id:40s} <- {wav.relative_to(REPO)}")
        print(f"         title tag: {title_tag}")
        if current:
            continue
        if args.dry_run:
            print(f"         -> podcasts_principles/{doc_id}-<sha8>.m4a, "
                  f"audio /audio/principles/{doc_id}-<sha8>.m4a")
            continue

        tmp = PRINCIPLES_OUT / f"{doc_id}.partial.m4a"
        tmp.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            ["ffmpeg", "-v", "error", "-y", "-i", str(wav), "-map", "0:a:0",
             "-c:a", "aac", "-b:a", BITRATE, "-ac", CHANNELS, "-ar", SAMPLE_RATE,
             "-map_metadata", "-1",
             *tags(doc_id, layer_title, doc_title, track, total_docs, title=title_tag),
             "-movflags", "+faststart", str(tmp)],
            check=True)
        info = probe(tmp)
        dur = float(info.get("duration", 0) or 0)
        if dur <= 0:
            tmp.unlink(missing_ok=True)
            print(f"⚠️  encode produced no playable audio for {doc_id}; stopping", file=sys.stderr)
            return 2
        sha8 = sha256_of(tmp)[:8]
        dest = PRINCIPLES_OUT / f"{doc_id}-{sha8}.m4a"
        tmp.replace(dest)
        audio = principles_audio_path(doc_id, sha8)
        rel = str(dest.relative_to(PRINCIPLES_OUT))
        if local is not None and local.is_file() and local != dest:
            print(f"         ℹ️  supersedes podcasts_principles/{prev_m['file']} (left in place; "
                  f"anything already uploaded under its key stays in the bucket)")
        # ⚠️ THE GUID IS WRITTEN ONCE. An existing entry's guid is copied verbatim, even if
        #    it does not match today's form — changing it re-delivers the episode.
        guid = (prev_e or {}).get("guid") or f"{PRINCIPLES_GUID_PREFIX}{doc_id}"
        if guid != f"{PRINCIPLES_GUID_PREFIX}{doc_id}":
            print(f"         ⚠️  keeping existing guid {guid!r} (never changed once published)")
        new_entries[doc_id] = {
            "doc_id": doc_id, "title": doc_title, "section": layer_title,
            "bytes": dest.stat().st_size, "duration_s": round(dur, 1),
            "audio": audio, "guid": guid,
        }
        new_man[doc_id] = {
            "doc_id": doc_id, "title": doc_title, "section": layer_title,
            "title_tag": title_tag, "file": rel, "bytes": dest.stat().st_size,
            "duration_s": round(dur, 1), "bitrate": int(info.get("bit_rate", 0)),
            "audio": audio, "url": f"{SITE}/{doc_id}/",
            "master": str(wav.relative_to(REPO)), "master_size": st.st_size,
            "master_mtime": int(st.st_mtime), "master_sha256": sha256_of(wav),
        }
        print(f"         -> {dest.relative_to(REPO)}  {dest.stat().st_size/1e6:.1f} MB, "
              f"{dur/60:.1f} min, audio {audio}")

    if args.dry_run:
        print("\nDRY RUN: nothing written.")
        return 0
    if not new_entries:
        print("\nNothing to encode; podcast-principles.json and manifest.json untouched.")
        return 0

    site_pos = {r[0]: i for i, r in enumerate(order)}
    eps = {**existing, **new_entries}
    site["episodes"] = sorted(eps.values(), key=lambda e: site_pos.get(e["doc_id"], 10**6))
    man = {**old_man, **new_man}
    PRINCIPLES_OUT.mkdir(parents=True, exist_ok=True)
    write_json_atomic(man_path, sorted(man.values(), key=lambda e: site_pos.get(e["doc_id"], 10**6)))
    write_json_atomic(PRINCIPLES_DATA, site)   # `note` kept verbatim
    print(f"\nsite data: {PRINCIPLES_DATA.relative_to(REPO)} ({len(site['episodes'])} episode(s))")
    print(f"manifest:  {man_path.relative_to(REPO)}")
    print("NEXT: scripts/upload_podcast_audio.sh --style principles   (dry run), then --go,\n"
          "      THEN commit site/src/data/podcast-principles.json. Never commit it first.")
    return 0


# ---- --style basics ------------------------------------------------------------------
# THE BASICS: about thirteen short TOPIC episodes for newer or younger players
# (project/podcast_principles_series_plan.md, owner decisions 20 Oct 2026). Unlike the two
# per-document formats, an episode here is keyed by a TOPIC SLUG and draws on one to three
# documents (`sources`). The set of topics is fixed in advance in the `planned` list of
# site/src/data/podcast-basics.json; this script never adds a topic, it only publishes one.
BASICS_WAVS = STYLE_B / "basics"
BASICS_OUT = PRINCIPLES_OUT / "basics"
BASICS_DATA = REPO / "site" / "src" / "data" / "podcast-basics.json"
BASICS_QUEUE_STATE = REPO / ".podcast_queue" / "state-basics.json"  # podcast_queue.py --style basics
BASICS_LABEL = "The Basics"
BASICS_GUID_PREFIX = "learn-ice-hockey:core:"
BASICS_PAGE = "the-basics"
SLUG_RE = re.compile(r"[a-z0-9]+(?:-[a-z0-9]+)*")


def basics_audio_path(slug: str, sha8: str) -> str:
    """The served path: /audio/principles/basics/<slug>-<sha8>.m4a. Under the Playing
    principles prefix so the bucket keeps one ElevenLabs area, but in its own `basics/`
    folder, which no document id can produce (no structure.json section is `basics`;
    site/scripts/check-podcast-guids.mjs asserts it)."""
    return f"/audio/principles/basics/{slug}-{sha8}.m4a"


def basics_tags(slug: str, title: str, n: int, total: int) -> list[str]:
    """ffmpeg -metadata for a Basics episode. There is no document to read a reviewed
    description from, so the description is the series line the owner approved on
    20 Oct 2026 ("suitable for newer players or younger players") and nothing more."""
    url = f"{SITE}/{BASICS_PAGE}/"
    return [
        "-metadata", f"title={title} — {BASICS_LABEL}",
        "-metadata", f"artist={AUTHOR}",
        "-metadata", f"album_artist={ALBUM_ARTIST}",
        "-metadata", f"album={BASICS_LABEL}",
        "-metadata", f"track={n}/{total}",
        "-metadata", f"genre={GENRE}",
        "-metadata", f"comment={url}",
        "-metadata", f"description={title}. From {BASICS_LABEL}, suitable for newer players "
                     f"or younger players. More at {url}",
        "-metadata", f"copyright={AUTHOR}",
    ]


def cmd_basics(args) -> int:
    """Encode named Basics topics. Every refusal exits 2 BEFORE anything is written."""
    if not args.slug:
        print("⚠️  --style basics encodes ONLY the topics named with --slug.\n"
              "    A WAV in podcast_style_b/basics/ is not an approved episode; name each one "
              "you mean to publish.", file=sys.stderr)
        return 2
    if not BASICS_DATA.is_file():
        print(f"⚠️  REFUSED — {BASICS_DATA.relative_to(REPO)} does not exist; nothing written.",
              file=sys.stderr)
        return 2

    site = json.loads(BASICS_DATA.read_text())
    planned = site.get("planned") or []
    order = reading_order()
    known_docs = {r[0] for r in order}
    plan_index = {p.get("slug"): i for i, p in enumerate(planned)}
    existing = {e["slug"]: e for e in site.get("episodes", [])}
    problems: list[str] = []

    # The plan itself must be sound before any one topic is trusted.
    if len(plan_index) != len(planned):
        problems.append("podcast-basics.json `planned` lists a slug more than once")
    for p in planned:
        s = p.get("slug")
        if not isinstance(s, str) or not SLUG_RE.fullmatch(s):
            problems.append(f"planned slug {s!r} is not lower-case ASCII words joined by '-'")
        if not (p.get("title") or "").strip():
            problems.append(f"planned {s!r} has no title")
        srcs = p.get("sources") or []
        if not 1 <= len(srcs) <= 3:
            problems.append(f"planned {s!r}: sources must name 1 to 3 documents, has {len(srcs)}")
        for d in srcs:
            if d not in known_docs:
                problems.append(f"planned {s!r}: source {d!r} is not a doc_id in structure.json")
    for s in existing:
        if s not in plan_index:
            problems.append(f"published episode {s!r} is not in `planned`")

    wanted: list[tuple[str, pathlib.Path]] = []
    for slug in args.slug:
        if slug in (w for w, _ in wanted):
            continue
        if slug not in plan_index:
            problems.append(f"--slug {slug!r}: not a planned topic in {BASICS_DATA.name} "
                            f"(planned: {', '.join(plan_index) or 'none'})")
            continue
        wav = BASICS_WAVS / f"{slug}.wav"
        if not wav.is_file():
            problems.append(f"{slug}: no master at {wav.relative_to(REPO)}")
            continue
        wanted.append((slug, wav))

    qstate = {}
    if BASICS_QUEUE_STATE.exists():
        qstate = {k: v.get("status", "") for k, v in
                  json.loads(BASICS_QUEUE_STATE.read_text()).get("items", {}).items()}
    for slug, _wav in wanted:
        if qstate.get(slug) == "blocked":
            problems.append(f"{slug}: queue status is 'blocked' in "
                            f"{BASICS_QUEUE_STATE.relative_to(REPO)} (rejected episode)")

    # ⚠️ GUIDS AND PATHS MUST BE UNIQUE ACROSS EVERY COLLECTION, not only within this one.
    #    A Basics guid that equalled a live Conversation or Playing principles guid would make
    #    every podcast client treat two episodes as one.
    taken: dict[str, str] = {}
    for label, path in (("podcast.json", SITE_DATA), ("podcast-principles.json", PRINCIPLES_DATA)):
        if path.exists():
            for e in json.loads(path.read_text()).get("episodes", []):
                g = e.get("guid") or (f"learn-ice-hockey:{e['doc_id']}" if label == "podcast.json" else None)
                if g:
                    taken[g] = f"{label} {e['doc_id']}"
                if e.get("audio"):
                    taken[e["audio"]] = f"{label} {e['doc_id']}"
    for s, e in existing.items():
        for key in (e.get("guid"), e.get("audio")):
            if not key:
                continue
            if key in taken:
                problems.append(f"COLLISION: basics {s!r} {key!r} is already used by {taken[key]}")
            taken[key] = f"podcast-basics.json {s}"
    for slug, _wav in wanted:
        guid = (existing.get(slug) or {}).get("guid") or f"{BASICS_GUID_PREFIX}{slug}"
        owner = taken.get(guid)
        if owner and owner != f"podcast-basics.json {slug}":
            problems.append(f"COLLISION: guid {guid!r} for {slug} is already used by {owner}")

    if problems:
        print("⚠️⚠️  REFUSED — nothing written:", file=sys.stderr)
        for p in problems:
            print(f"      {p}", file=sys.stderr)
        return 2

    man_path = BASICS_OUT / "manifest.json"
    old_man = {e["slug"]: e for e in json.loads(man_path.read_text())} if man_path.exists() else {}
    total = len(planned)
    run_backup = BACKUP_ROOT / f"{stamp()}-before-basics"

    print(f"build_podcast_audio --style basics: {len(wanted)} topic(s)"
          f"{'  — DRY RUN, nothing will be written' if args.dry_run else ''}")

    new_entries: dict[str, dict] = {}
    new_man: dict[str, dict] = {}
    for slug, wav in wanted:
        n = plan_index[slug] + 1
        topic = planned[n - 1]
        title_tag = f"{topic['title']} — {BASICS_LABEL}"
        prev_m = old_man.get(slug) or {}
        prev_e = existing.get(slug)
        st = wav.stat()
        local = BASICS_OUT / prev_m["file"] if prev_m.get("file") else None
        current = (
            not args.force and prev_e is not None and local is not None and local.is_file()
            and local.stat().st_size == prev_m.get("bytes") == prev_e.get("bytes")
            and prev_e.get("audio") == prev_m.get("audio")
            and prev_m.get("title_tag") == title_tag and prev_m.get("track") == f"{n}/{total}"
            and (
                (st.st_size == prev_m.get("master_size") and int(st.st_mtime) == prev_m.get("master_mtime"))
                or (st.st_size == prev_m.get("master_size") and sha256_of(wav) == prev_m.get("master_sha256"))
            )
        )
        rel_wav = pathlib.Path("basics") / wav.name
        have_backup = backed_up(rel_wav, "podcast_style_b", wav)
        print(f"  {'skip' if current else 'encode':6s} [{n:2d}/{total}] {slug:28s} <- {wav.relative_to(REPO)}")
        print(f"         title tag: {title_tag}")
        if current:
            continue
        print(f"         master backup: "
              + (f"already in {have_backup.parent.parent.parent.name}" if have_backup
                 else f"{'WOULD COPY' if args.dry_run else 'copying'} to "
                      f"{run_backup}/podcast_style_b/{rel_wav}"))
        if args.dry_run:
            print(f"         -> podcasts_principles/basics/{slug}-<sha8>.m4a, "
                  f"audio /audio/principles/basics/{slug}-<sha8>.m4a")
            continue

        # ⚠️ The WAV is the only lossless copy of a paid synthesis; copy it out first.
        assert_outside_repo(BACKUP_ROOT)
        if have_backup is None:
            copy_verified(wav, run_backup / "podcast_style_b" / rel_wav)
        tmp = BASICS_OUT / f"{slug}.partial.m4a"
        tmp.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            ["ffmpeg", "-v", "error", "-y", "-i", str(wav), "-map", "0:a:0",
             "-c:a", "aac", "-b:a", BITRATE, "-ac", CHANNELS, "-ar", SAMPLE_RATE,
             "-map_metadata", "-1",
             *basics_tags(slug, topic["title"], n, total),
             "-movflags", "+faststart", str(tmp)],
            check=True)
        info = probe(tmp)
        dur = float(info.get("duration", 0) or 0)
        if dur <= 0:
            tmp.unlink(missing_ok=True)
            print(f"⚠️  encode produced no playable audio for {slug}; stopping", file=sys.stderr)
            return 2
        sha8 = sha256_of(tmp)[:8]
        dest = BASICS_OUT / f"{slug}-{sha8}.m4a"
        tmp.replace(dest)
        audio = basics_audio_path(slug, sha8)
        if local is not None and local.is_file() and local != dest:
            print(f"         ℹ️  supersedes podcasts_principles/basics/{prev_m['file']} (left in "
                  f"place; anything already uploaded under its key stays in the bucket)")
        # ⚠️ THE GUID IS WRITTEN ONCE and copied verbatim forever after.
        guid = (prev_e or {}).get("guid") or f"{BASICS_GUID_PREFIX}{slug}"
        new_entries[slug] = {
            "slug": slug, "title": topic["title"], "sources": list(topic["sources"]),
            "bytes": dest.stat().st_size, "duration_s": round(dur, 1),
            "audio": audio, "guid": guid,
        }
        new_man[slug] = {
            "slug": slug, "title": topic["title"], "title_tag": title_tag,
            "track": f"{n}/{total}", "file": dest.name, "bytes": dest.stat().st_size,
            "duration_s": round(dur, 1), "bitrate": int(info.get("bit_rate", 0)),
            "audio": audio, "url": f"{SITE}/{BASICS_PAGE}/",
            "master": str(wav.relative_to(REPO)), "master_size": st.st_size,
            "master_mtime": int(st.st_mtime), "master_sha256": sha256_of(wav),
        }
        print(f"         -> {dest.relative_to(REPO)}  {dest.stat().st_size/1e6:.1f} MB, "
              f"{dur/60:.1f} min, audio {audio}")

    if args.dry_run:
        print("\nDRY RUN: nothing written.")
        return 0
    if not new_entries:
        print("\nNothing to encode; podcast-basics.json and manifest.json untouched.")
        return 0

    eps = {**existing, **new_entries}
    site["episodes"] = sorted(eps.values(), key=lambda e: plan_index[e["slug"]])
    man = {**old_man, **new_man}
    BASICS_OUT.mkdir(parents=True, exist_ok=True)
    for f in (man_path, BASICS_DATA):
        if f.exists():
            copy_verified(f, run_backup / "json" / f.name)
    write_json_atomic(man_path, sorted(man.values(), key=lambda e: plan_index.get(e["slug"], 10**6)))
    write_json_atomic(BASICS_DATA, site)   # `note` and `planned` kept verbatim
    print(f"\nsite data: {BASICS_DATA.relative_to(REPO)} ({len(site['episodes'])}/{total} episode(s))")
    print(f"manifest:  {man_path.relative_to(REPO)}")
    print(f"backup:    {run_backup}")
    print("NEXT: scripts/upload_podcast_audio.sh --style basics   (dry run), then --go,\n"
          "      THEN commit site/src/data/podcast-basics.json. Never commit it first.")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Encode accepted podcast masters for the web and regenerate the feed's "
                    "site data. Run with --dry-run first; it writes nothing.")
    ap.add_argument("--dry-run", action="store_true",
                    help="write NOTHING (no encode, retag, backup, manifest or podcast.json); "
                         "print what would happen to every master and every feed entry")
    ap.add_argument("--force", action="store_true", help="re-encode even if the output looks current")
    ap.add_argument("--limit", type=int, default=0,
                    help="encode at most N files (trial run; never rewrites podcast.json or "
                         "manifest.json, and exits non-zero to say so)")
    ap.add_argument("--retag", action="store_true",
                    help="rewrite metadata on the EXISTING podcasts_web files with -c copy. "
                         "Lossless: same AAC stream, new container tags. Use this, never --force, "
                         "when only the metadata is wrong. Refused for a NEW master.")
    ap.add_argument("--exclude", action="append", default=[], metavar="DOC_ID",
                    help="leave this document's master unpublished and carry its EXISTING feed "
                         "entry forward unchanged. Required, by name, for every refused master.")
    ap.add_argument("--move-audio-path", action="append", default=[], metavar="DOC_ID",
                    help="OBSOLETE since 17 Oct 2026 and refused: every encoded or retagged "
                         "episode now gets a content-hashed /audio/<doc_id>-<sha8>.m4a path "
                         "(guid kept). See the docstring.")
    ap.add_argument("--renumber", action="store_true",
                    help="renumber every episode's track from structure.json. Without it, existing "
                         "episodes keep their published track (<itunes:episode>).")
    ap.add_argument("--backup", action="store_true",
                    help=f"snapshot podcasts/ and podcasts_web/ into a new timestamped folder under "
                         f"{BACKUP_ROOT} (incremental; with --dry-run, lists only). Combine with "
                         f"nothing but --dry-run.")
    ap.add_argument("--style", choices=("conversation", "principles", "basics"), default="conversation",
                    help="conversation (default): NotebookLM masters in podcasts/. principles: "
                         "Playing principles WAVs in podcast_style_b/, encoded to "
                         "podcasts_principles/ and site/src/data/podcast-principles.json. "
                         "basics: The Basics topic WAVs in podcast_style_b/basics/, encoded to "
                         "podcasts_principles/basics/ and site/src/data/podcast-basics.json. "
                         "See the docstring.")
    ap.add_argument("--doc", action="append", default=[], metavar="STEM_OR_DOC_ID",
                    help="--style principles only, REQUIRED: a document to encode (repeatable). "
                         "Nothing is encoded that is not named.")
    ap.add_argument("--slug", action="append", default=[], metavar="SLUG",
                    help="--style basics only, REQUIRED: a planned topic slug to encode "
                         "(repeatable). Nothing is encoded that is not named.")
    args = ap.parse_args()
    sys.stdout.reconfigure(line_buffering=True)  # keep stdout and the stderr refusals in order

    if args.slug and args.style != "basics":
        print("⚠️  --slug is for --style basics only", file=sys.stderr)
        return 2
    if args.style == "basics":
        others = [n for n, v in (("--limit", args.limit), ("--retag", args.retag),
                                 ("--exclude", args.exclude), ("--backup", args.backup),
                                 ("--move-audio-path", args.move_audio_path),
                                 ("--renumber", args.renumber), ("--doc", args.doc)) if v]
        if others:
            print(f"⚠️  --style basics takes only --slug, --dry-run and --force; not {others}",
                  file=sys.stderr)
            return 2
        return cmd_basics(args)
    if args.style == "principles":
        others = [n for n, v in (("--limit", args.limit), ("--retag", args.retag),
                                 ("--exclude", args.exclude), ("--backup", args.backup),
                                 ("--move-audio-path", args.move_audio_path),
                                 ("--renumber", args.renumber)) if v]
        if others:
            print(f"⚠️  --style principles takes only --doc, --dry-run and --force; not {others}",
                  file=sys.stderr)
            return 2
        return cmd_principles(args)
    if args.doc:
        print("⚠️  --doc is for --style principles only", file=sys.stderr)
        return 2

    if args.backup:
        others = [n for n, v in (("--force", args.force), ("--limit", args.limit),
                                 ("--retag", args.retag), ("--exclude", args.exclude),
                                 ("--move-audio-path", args.move_audio_path),
                                 ("--renumber", args.renumber)) if v]
        if others:
            print(f"⚠️  --backup does nothing else; it cannot be combined with {others}",
                  file=sys.stderr)
            return 2
        return cmd_backup(args.dry_run)

    if not MASTERS.is_dir():
        raise SystemExit(f"masters not found: {MASTERS}")

    order = reading_order()
    by_norm_title = {norm(t): (d, l, t, n) for d, l, t, n in order}
    by_norm_id = {norm(d.split("/")[-1]): (d, l, t, n) for d, l, t, n in order}
    total_docs = len(order)
    known_ids = {r[0] for r in order}

    if args.move_audio_path:
        print("⚠️  --move-audio-path is obsolete: every episode this run encodes or retags now "
              "gets a content-hashed /audio/<doc_id>-<sha8>.m4a path, and its guid is kept. "
              "Drop the flag.", file=sys.stderr)
        return 2

    bad = [d for d in args.exclude if d not in known_ids]
    if bad:
        print(f"⚠️  unknown doc_id(s), not in structure.json: {bad}", file=sys.stderr)
        return 2

    masters = [p for p in sorted(MASTERS.rglob("*.m4a"))
               if "_bitrate_samples" not in str(p) and not is_temp(p)]

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

    dupes = sorted({r[0] for _, r in pairs if sum(1 for _, q in pairs if q[0] == r[0]) > 1})
    if dupes:
        print(f"⚠️  more than one master matches {dupes} — refusing to choose", file=sys.stderr)
        return 2

    status = load_queue_status()
    existing = load_site_data()
    old_manifest = load_web_manifest()
    excluded = set(args.exclude)
    struct_track = {d: n for d, _l, _t, n in order}

    def feed_track(doc_id: str) -> int:
        """Existing episodes keep their published track unless --renumber."""
        if not args.renumber and doc_id in existing and "track" in existing[doc_id]:
            return existing[doc_id]["track"]
        return struct_track[doc_id]

    # ---- the publish gate: decide every master BEFORE anything is written ----------
    plan, refused, legacy = [], [], 0
    for master, row in pairs:
        doc_id = row[0]
        rel = master.relative_to(MASTERS)
        dest = OUT / rel
        st = status.get(doc_id, "(no queue state)")
        new, how = master_identity(master, dest, rel, old_manifest.get(doc_id))
        if doc_id in excluded:
            plan.append((master, row, "EXCLUDED", f"--exclude; queue status {st}"))
            continue
        if st == "blocked":
            refused.append((rel, doc_id, "queue status is 'blocked' (rejected episode)"))
            continue
        if new and st != "accepted":
            refused.append((rel, doc_id, f"NEW master ({how}) and queue status is {st!r}, not 'accepted'"))
            continue
        if args.retag and new:
            # ⚠️ A retag remuxes the OLD web output, never the master. On a new master it
            # would publish the old audio under fresh tags, and the newer output mtime would
            # then make the new master read as already published — lost silently.
            refused.append((rel, doc_id, f"--retag on a NEW master ({how}) would retag the OLD "
                                         f"encode and hide the new master; encode it without --retag"))
            continue
        if "legacy" in how:
            legacy += 1
        if args.retag:
            action = "retag"
        elif new or args.force:
            action = "encode"
        else:
            action = "skip"
        plan.append((master, row, action, f"queue status {st}; {'new' if new else 'unchanged'} master, {how}"))

    action_of = {row[0]: a for _m, row, a, _w in plan if a != "EXCLUDED"}

    # (The old path-preservation gate lived here. It refused a rewrite whose preserved
    # `audio` differed from /audio/<doc_id>.m4a. Rewritten bytes now always get a new
    # content-hashed key, which the upload script reads from `audio`, so the split it
    # guarded against cannot occur.)

    print(f"build_podcast_audio: {len(pairs)} master(s) matched to {total_docs} document(s)"
          f"{'  — DRY RUN, nothing will be written' if args.dry_run else ''}")
    print(f"queue state: {QUEUE_STATE}"
          f"{'' if QUEUE_STATE.exists() else '  (MISSING — every new master will be refused)'}")
    print()
    print("Per master, in site order:")
    rows = [(row[3], row[0], str(master.relative_to(MASTERS)), action, why)
            for master, row, action, why in plan]
    rows += [(struct_track[d], d, str(rel), "REFUSED", why) for rel, d, why in refused]
    for n, d, rel, action, why in sorted(rows):
        print(f"  [{n:2d}] {action:8s} {d:45s} {rel}  ({why})")
    if legacy:
        print(f"\nℹ️  {legacy} master(s) have NO recorded identity in manifest.json (encoded before "
              f"records were kept), so 'unchanged' was decided by mtime alone. A re-encode "
              f"records size, mtime and sha256.")

    claimed = {row[0] for _, row in pairs}
    missing = [r for r in order if r[0] not in claimed]
    if missing:
        print(f"\n{len(missing)} document(s) have NO master — recorded, not an error:")
        for d, _l, t, _n in missing:
            print(f"      {t}  ({d})")

    if refused:
        print("\n⚠️⚠️  REFUSED — these masters must NOT be published, and the run STOPS here:",
              file=sys.stderr)
        for rel, d, why in refused:
            print(f"      {d:45s} {rel}\n          {why}", file=sys.stderr)
        print("    Nothing has been written. To publish everything else, name each one:\n"
              "      " + " ".join(f"--exclude {d}" for _r, d, _w in refused) + "\n"
              "    An excluded document keeps its existing feed entry unchanged. A new master is\n"
              "    publishable only once its queue status is 'accepted' (scripts/podcast_queue.py\n"
              "    set-status), which is set only after transcript review has passed.",
              file=sys.stderr)
    if refused:
        return 2

    # ---- backup gate: same answer in a dry run and a real one ------------------------
    no_backup = [m.relative_to(MASTERS) for m, _row, a, _w in plan
                 if a == "encode" and backed_up(m.relative_to(MASTERS), "podcasts", m) is None]
    if no_backup:
        print(f"\n⚠️⚠️  REFUSED — no backup (same size and mtime) of these masters under {BACKUP_ROOT}:",
              file=sys.stderr)
        for rel in no_backup:
            print(f"      {rel}", file=sys.stderr)
        print("    `podcasts/` may be the only copy. Run first:\n"
              "      python3 scripts/build_podcast_audio.py --backup", file=sys.stderr)
        if not args.dry_run:
            return 2

    run_backup = BACKUP_ROOT / f"{stamp()}-before-build"
    if not args.dry_run:
        assert_outside_repo(BACKUP_ROOT)

    if args.limit:
        live = [p for p in plan if p[2] != "EXCLUDED"][: args.limit]
        plan = live + [p for p in plan if p[2] == "EXCLUDED"]

    manifest, done, skipped, would = [], 0, 0, 0
    for master, (doc_id, layer_title, doc_title, _struct_n), action, _why in plan:
        if action == "EXCLUDED":
            continue
        track = feed_track(doc_id)
        rel = master.relative_to(MASTERS)
        dest = OUT / rel
        old = old_manifest.get(doc_id) or {}
        record = {k: old[k] for k in ("master_size", "master_mtime", "master_sha256")
                  if k in old and old.get("file") == str(rel)}

        if action in ("encode", "retag") and args.dry_run:
            would += 1
            manifest.append({"doc_id": doc_id, "title": doc_title, "section": layer_title,
                             "track": track, "file": str(rel), "bytes": None,
                             "duration_s": None, "bitrate": None,
                             "url": f"{SITE}/{doc_id}/", "new_audio": None})
            continue

        if action in ("encode", "retag"):
            dest.parent.mkdir(parents=True, exist_ok=True)
            # ⚠️ podcasts_web/ can hold the ONLY copy of a published encode (the masters
            # behind On-Ice Communication and Rink Map were overwritten in September), so
            # never overwrite one without copying it out first.
            if dest.exists():
                copy_verified(dest, run_backup / "podcasts_web" / rel)

        if action == "skip":
            skipped += 1
        else:
            # Write to a temp file in the SAME directory, check it, then replace(): an
            # interrupted run must never leave a truncated file under the published name.
            tmp = dest.with_name(dest.stem + (".retag.m4a" if action == "retag" else ".partial.m4a"))
            if action == "retag":
                src_args = ["-i", str(dest), "-map", "0:a:0", "-c", "copy", "-map_metadata", "-1"]
            else:
                src_args = ["-i", str(master), "-map", "0:a:0", "-c:a", "aac", "-b:a", BITRATE,
                            "-ac", CHANNELS, "-ar", SAMPLE_RATE]
                record = master_record(master)
            subprocess.run(
                ["ffmpeg", "-v", "error", "-y", *src_args,
                 *tags(doc_id, layer_title, doc_title, track, total_docs),
                 "-movflags", "+faststart", str(tmp)],
                check=True)
            dur = float(probe(tmp).get("duration", 0) or 0)
            if dur <= 0:
                tmp.unlink(missing_ok=True)
                print(f"⚠️  {action} produced no playable audio for {rel}; stopping, "
                      f"{dest.name} left as it was", file=sys.stderr)
                return 2
            tmp.replace(dest)
            done += 1

        # ⚠️ New bytes, new key: the served path is the content hash of the file just
        # written. A skipped episode has no `new_audio` and keeps its existing path.
        new_audio = (conversation_audio_path(doc_id, sha256_of(dest)[:8])
                     if action in ("encode", "retag") else None)
        info = probe(dest)
        manifest.append({
            "new_audio": new_audio,
            "doc_id": doc_id,
            "title": doc_title,
            "section": layer_title,
            "track": track,
            "file": str(rel),
            "bytes": dest.stat().st_size,
            "duration_s": round(float(info.get("duration", 0)), 1),
            "bitrate": int(info.get("bit_rate", 0)),
            "url": f"{SITE}/{doc_id}/",
            **record,
        })
        if not args.dry_run:
            print(f"  [{track:2d}/{total_docs}] {doc_title[:44]:44s} {dest.stat().st_size/1e6:6.1f} MB")

    # ---- carry forward every existing feed entry this run did not produce ------------
    processed = set(action_of)
    carried, carry_problems = [], []
    for doc_id, ep in existing.items():
        if doc_id in processed:
            continue
        old = old_manifest.get(doc_id)
        file = None
        if old and old.get("file"):
            f = OUT / old["file"]
            if f.is_file() and f.stat().st_size == ep.get("bytes"):
                file = old["file"]
        if file is None:
            # Identify the local file by EXACT byte length — the very number the feed's
            # <enclosure length> declares, so a match is the file the feed describes.
            hits = [f for f in OUT.rglob("*.m4a")
                    if not is_temp(f) and f.stat().st_size == ep.get("bytes")]
            if len(hits) == 1:
                file = str(hits[0].relative_to(OUT))
        if file is None:
            carry_problems.append(doc_id)
        carried.append((doc_id, ep, file))
        if doc_id not in known_ids:
            print(f"⚠️  feed entry {doc_id} is not in structure.json — carried forward unchanged")

    def site_entry(r: dict) -> dict:
        prev = existing.get(r["doc_id"], {})
        e = {}
        if "guid" in prev:
            e["guid"] = prev["guid"]          # NEVER drop a pinned guid
        if r.get("new_audio"):
            audio = r["new_audio"]
        elif action_of.get(r["doc_id"]) in ("encode", "retag"):
            audio = f"/audio/{r['doc_id']}-<sha8>.m4a"          # dry run: hash not yet known
        else:
            audio = prev.get("audio", default_audio_path(r["doc_id"]))
        e.update({"doc_id": r["doc_id"], "title": r["title"], "section": r["section"],
                  "track": r["track"], "bytes": r["bytes"], "duration_s": r["duration_s"],
                  "audio": audio})
        return e

    new_eps = [site_entry(r) for r in manifest]
    for doc_id, ep, _file in carried:
        e = dict(ep)
        if args.renumber and doc_id in struct_track:
            e["track"] = struct_track[doc_id]
        new_eps.append(e)
    new_eps.sort(key=lambda e: e["track"])

    # ---- the feed diff, field by field -----------------------------------------------
    print("\nFeed entries (site/src/data/podcast.json), planned vs existing:")
    new_by = {e["doc_id"]: e for e in new_eps}
    for doc_id in sorted(set(existing) | set(new_by), key=lambda d: struct_track.get(d, 999)):
        a, b = existing.get(doc_id), new_by.get(doc_id)
        if a is None:
            print(f"  + ADDED    {doc_id}  guid=learn-ice-hockey:{doc_id} (default)  "
                  f"audio={b['audio']}  track={b['track']}")
            continue
        if b is None:
            print(f"  - DROPPED  {doc_id}  ⚠️ an episode would leave the feed")
            continue
        changes = []
        for k in ("guid", "audio", "track", "title", "section", "bytes", "duration_s"):
            if a.get(k) != b.get(k):
                tag = ("  ⚠️ RE-DELIVERY RISK" if k == "guid" else
                       "  (new content-hashed key; guid unchanged)" if k == "audio" else "")
                val = "(after encode)" if b.get(k) is None else b.get(k)
                changes.append(f"{k}: {a.get(k)} -> {val}{tag}")
        how = action_of.get(doc_id, "carried")
        print(f"  {'=' if not changes else '~'} {how:9s} {doc_id}"
              + (f"  guid={a['guid']} (pinned, kept)" if "guid" in a and a.get("guid") == b.get("guid") else "")
              + ("" if not changes else "\n        " + "\n        ".join(changes)))

    renumbered = [d for d in existing if d in new_by and existing[d].get("track") != new_by[d].get("track")]
    if renumbered:
        print(f"\nℹ️  {len(renumbered)} existing episode(s) change track number (--renumber). Since "
              f"16 Oct 2026 the feed numbers episodes from structure.json, not from `track`; "
              f"`track` now sets the m3u playlist order and the file's track tag. Not a "
              f"re-delivery (guid decides that).")
    tracks = [e["track"] for e in new_eps]
    clashes = sorted({t for t in tracks if tracks.count(t) > 1})
    if clashes:
        print(f"\n⚠️⚠️  track number(s) {clashes} would be used by more than one episode. A new "
              f"episode takes its structure.json track; existing ones keep theirs. Decide on "
              f"--renumber (renumbers every episode) before publishing.", file=sys.stderr)

    if carry_problems:
        print("\n⚠️  carried-forward feed entries with NO local web file of matching byte length:",
              file=sys.stderr)
        for d in carry_problems:
            print(f"      {d}", file=sys.stderr)

    if args.dry_run:
        print(f"\nDRY RUN: would encode/retag {would}, skip {sum(1 for p in plan if p[2] == 'skip')}, "
              f"exclude {len(excluded)}, carry forward {len(carried)}. "
              f"Nothing written; {SITE_DATA.relative_to(REPO)} and manifest.json untouched.")
        if no_backup or carry_problems or clashes:
            print("⚠️  a real run with these arguments would REFUSE (see above).", file=sys.stderr)
            return 2
        return 0

    if args.limit:
        # ⚠️ A PARTIAL RUN MUST NOT REWRITE EITHER TRACKED-SHAPE FILE. `--limit` exists for
        # trial runs; letting one truncate the feed's source data (or the upload manifest)
        # to a handful of episodes is exactly the silent, mechanically-clean breakage this
        # repository keeps recording.
        print(f"⚠️  partial run (--limit) — {SITE_DATA.name} and manifest.json NOT rewritten; "
              f"they no longer describe {OUT.name}/ until a full run.", file=sys.stderr)
        return 1
    if carry_problems or clashes:
        print(f"⚠️  {SITE_DATA.name} and manifest.json NOT rewritten (see above)", file=sys.stderr)
        return 2

    out_manifest = []
    for r in manifest:
        r = dict(r)
        r["audio"] = site_entry(r)["audio"]
        r.pop("new_audio", None)
        out_manifest.append(r)
    for doc_id, ep, file in carried:
        old = old_manifest.get(doc_id) or {}
        rec = {k: old[k] for k in ("master_size", "master_mtime", "master_sha256")
               if k in old and old.get("file") == file}
        out_manifest.append({"doc_id": doc_id, "title": ep.get("title"), "section": ep.get("section"),
                             "track": ep.get("track") if not args.renumber
                             else struct_track.get(doc_id, ep.get("track")),
                             "file": file, "bytes": ep.get("bytes"),
                             "duration_s": ep.get("duration_s"),
                             "url": f"{SITE}/{doc_id}/", "audio": ep.get("audio"), **rec})
    out_manifest.sort(key=lambda r: r["track"])

    old_manifest_path = OUT / "manifest.json"
    if old_manifest_path.exists():
        copy_verified(old_manifest_path, run_backup / "podcasts_web" / "manifest.json")
    write_json_atomic(old_manifest_path, out_manifest)
    write_json_atomic(SITE_DATA, {
        "note": ("Generated by scripts/build_podcast_audio.py. Metadata only — the audio "
                 "itself is gitignored and uploaded to the bucket out of band. Byte sizes "
                 "and durations are read from the encoded files and are what the podcast "
                 "feed's <enclosure> elements declare."),
        "episodes": new_eps,
    })
    print(f"site data: {SITE_DATA.relative_to(REPO)} ({len(new_eps)} episodes)")

    tot_b = sum(r["bytes"] for r in out_manifest)
    tot_s = sum(r["duration_s"] for r in out_manifest)
    print(f"\n{'retagged' if args.retag else 'encoded'} {done}, skipped {skipped}, "
          f"carried forward {len(carried)}")
    print(f"web {tot_b/1e9:.2f} GB  ·  {tot_s/3600:.1f} h")
    print(f"manifest: {OUT.relative_to(REPO)}/manifest.json")
    if run_backup.exists():
        print(f"overwritten files backed up to: {run_backup}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
