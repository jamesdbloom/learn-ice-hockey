#!/usr/bin/env python3
"""Synthesise a Style B podcast script into one finished audio file, via ElevenLabs.

⚠️ NOT A CHECKER AND NOT A GATE. It reads a script, calls a paid API, and writes
one audio file to a path you name. It touches nothing else in the repository.

WHY IT EXISTS
-------------
`project/podcast_style_b_script_standard.md` §11 decides the engine, the voice and
five settings, and then says plainly that the pipeline those settings belong to
**is unbuilt**. `scripts/build_podcast_audio.py` is a RE-ENCODER for NotebookLM
masters and generates nothing; `scripts/tts_sample.py` is a one-shot comparison
harness that sends `text` and `model_id` and **no `voice_settings` at all** — which
is why the owner's chosen 35 / 75 / 20 with speaker boost has still never been
heard. This is the missing generator.

⚠️ THE SETTINGS BELOW ARE CHOSEN AND UNHEARD. The comparison that selected
ElevenLabs ran on the engine's defaults, and the winning sample was short. Every
one of them is a constant here with a CLI override, because the first real use of
this script is somebody A/B-ing them at length.

⚠️ SINGLE VOICE BY DECISION, 18 September 2026. Do not add a second-speaker path —
`tts_sample.py` carries the reasoning and it stands for Style B.

REQUEST STITCHING IS THE HARD PART, AND IT IS A CORRECTNESS REQUIREMENT
-----------------------------------------------------------------------
⚠️ ElevenLabs caps ONE request at 10,000 characters. Measured 23 September 2026
against the live API, which states the number in its own 400:

    "Request text length (100000) exceeds the maximum text length of 10000
     characters. Please use Studio for long form TTS."

The exemplar script is 20,148 characters, so an episode is SEVERAL CALLS. ⚠️ At
stability 0.35 the engine's prosody is deliberately less consistent between
independently synthesised requests, so a naive splitter produces an episode whose
voice steps at each seam. Three things keep that from happening, and all three are
required:

  1. SPLIT ONLY WHERE THE SCRIPT ALREADY PAUSES. Paragraph boundaries first —
     §11 of the standard asks for exactly this — then sentence ends. ⚠️ Never
     mid-sentence: a half-sentence is synthesised with the wrong intonation
     contour at BOTH sides of the seam, so one bad split costs two chunks.
     A sentence that cannot fit is a hard error, not a silent mid-sentence cut.
  2. CARRY CONTINUITY CONTEXT ON EVERY CALL. `previous_text` / `next_text` are
     real fields and this script verified them against the live API, not against
     documentation. They are NOT billed — measured: a request whose `text` was 39
     characters and whose continuity fields added 61 more was charged for the 39.
  3. CONCATENATE WITHOUT RE-ENCODING. `ffmpeg -c copy` through the concat
     demuxer. ⚠️ `build_podcast_audio.py`'s header is emphatic that lossy->lossy
     compounds, and it is right; nothing here decodes and re-encodes a fragment.

⚠️ THE SAMPLE-EXACT ROUTE IS SHUT ON THIS ACCOUNT AND THAT IS MEASURED, NOT
ASSUMED. Requesting `pcm_44100` — which would concatenate gaplessly as raw
samples — returns 403 `output_format_not_allowed`: *"Output format 'pcm_44100' is
only available on the Pro tier and above."* So mp3 is not a preference here, it is
the only lossless-stitch option available, and each seam therefore carries the
mp3 frame padding of one boundary (measured: ~87 ms across a single join). That
padding lands on a paragraph break by construction, which is where the script was
already pausing. ⚠️ If the account is ever upgraded, `--format wav_44100` is the
better answer — the stitcher handles WAV as it handles mp3 — but raw `pcm_*` is
HEADERLESS and the concat demuxer cannot read it without being told the sample
rate, channels and width. `tts_sample.py`'s Gemini branch carries the same trap
and the same warning. **Do not assume `--format pcm_44100` works here; it is
untested and will need a branch in `stitch()`.**

CREDENTIALS — READ, NEVER WRITTEN DOWN
--------------------------------------
⚠️ THIS REPOSITORY IS PUBLIC. No key, no secret, no account identifier appears in
this file, and none is ever printed. Following `tts_sample.py`'s convention:

    ELEVENLABS_API_KEY   environment first
    otherwise            AWS Secrets Manager, via the already-authenticated CLI

⚠️ NEVER PASS A KEY ON THE COMMAND LINE — it lands in shell history and in `ps`.
There is no `--api-key` flag and there must not be one.

COST, AND WHY --dry-run IS THE MODE THAT GETS USED
---------------------------------------------------
Credits are the constraint: the monthly quota is use-it-or-lose-it, so an episode
re-synthesised because someone changed a comma is quota burned for nothing.

  * `--dry-run` makes NO API CALL. It reports the split, the per-chunk
    characters, the billed total and the credits, and exits 0.
  * Every chunk is CACHED BY CONTENT HASH of (text + voice + model + settings +
    format). Re-running after editing one paragraph re-synthesises the chunks
    that changed and no others.

⚠️ THE BILLED FIGURE IS AN UPPER BOUND AND THE SCRIPT SAYS SO RATHER THAN
PRETENDING OTHERWISE. Three live requests on this account were charged 28, 70 and
7,316 credits for 39, 96 and 10,001 characters — consistently about 73% of the
character count. That ratio is an OBSERVATION OF THREE POINTS on one account's
tier, not a formula, so the dry run quotes raw characters and a real run reports
what the API actually charged, read from the `character-cost` response header.
**Plan against the upper bound; reconcile against the header.**

FAILING LOUDLY
--------------
⚠️ This project has been bitten repeatedly by tools that fail and look like
success — the nvm shim exiting 127 while the wrapper reported 0, `md_to_speech.py
--only` printing "no markdown found" and exiting 0, `tts_sample.py` itself
returning 0 having synthesised nothing. So:

  * the output file is written ONLY when every chunk succeeded;
  * a failed chunk is a non-zero exit and an explicit message naming the chunk;
  * the stitched file's duration is measured against the sum of the parts and a
    shortfall is an ERROR. ⚠️ A partial episode is the failure mode that looks
    most like success: it plays, it sounds right, and it stops early.

USAGE
-----
    python3 scripts/synthesize_style_b.py podcast_defender_script.local.md --dry-run
    python3 scripts/synthesize_style_b.py SCRIPT.md --out ~/Downloads/defender.mp3
    python3 scripts/synthesize_style_b.py SCRIPT.md --out OUT.mp3 --stability 0.5

The script file may be a Style B markdown script — the spoken body is taken from
between `===== SCRIPT START =====` and `===== SCRIPT END =====`, so the notes
section §10 requires is never spoken — or plain text, in which case the whole
file is the body.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import pathlib
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request

# ── The owner's chosen settings, project/podcast_style_b_script_standard.md §11 ──
# ⚠️ CHOSEN AND UNHEARD. Every one has a CLI override for exactly that reason.
DEFAULT_SPEED = 1.00
DEFAULT_STABILITY = 0.35
DEFAULT_SIMILARITY = 0.75
DEFAULT_STYLE = 0.20
DEFAULT_SPEAKER_BOOST = True

DEFAULT_VOICE_ID = os.environ.get("ELEVENLABS_VOICE_ID", "L0Dsvb3SLTyegXwtm47J")
# ⚠️ The model the owner's comparison actually heard. `tts_sample.py` sends the
# same one. Changing it changes the voice, so change it deliberately.
DEFAULT_MODEL_ID = "eleven_multilingual_v2"

# ⚠️ 10,000 is the API's own stated hard limit (see the module docstring for the
# verbatim 400). This is the SPLIT TARGET, not the limit: smaller chunks make a
# failed or re-edited chunk cheap to re-request, and the seam risk is answered by
# continuity context rather than by chunk size. Raise it to reduce the number of
# seams; you cannot raise it past API_HARD_MAX_CHARS.
DEFAULT_MAX_CHUNK_CHARS = 4500
API_HARD_MAX_CHARS = 10000

# How much of the neighbouring chunk to hand the engine as context. Long enough
# to carry a sentence or two of cadence, short enough not to be its own essay.
CONTINUITY_CHARS = 500

# mp3 at 128 kbps mono is what this account can request; see the docstring for
# why the sample-exact PCM route is shut.
DEFAULT_FORMAT = "mp3_44100_128"

API_ROOT = "https://api.elevenlabs.io/v1/text-to-speech"
SECRET_ID = "ice-hockey-production/elevenlabs-api-key"

SCRIPT_START = "===== SCRIPT START ====="
SCRIPT_END = "===== SCRIPT END ====="

SENTENCE_END = re.compile(r"(?<=[.!?])\s+")


class Failure(RuntimeError):
    """Anything that must stop the run. Never caught to continue."""


# ────────────────────────────────── input ──────────────────────────────────

def extract_body(path: pathlib.Path) -> str:
    """The spoken body only. The §10 notes section must never be synthesised."""
    raw = path.read_text(encoding="utf-8")
    if SCRIPT_START in raw:
        if SCRIPT_END not in raw:
            raise Failure(f"{path}: has {SCRIPT_START} but no {SCRIPT_END}; "
                          "refusing to guess where the spoken body ends")
        body = raw.split(SCRIPT_START, 1)[1].split(SCRIPT_END, 1)[0]
    else:
        body = raw
    body = body.strip()
    if not body:
        raise Failure(f"{path}: spoken body is empty")
    # ⚠️ Markdown furniture is banned by §5 of the standard, but a stray marker in
    # a draft would be SPOKEN ALOUD as "asterisk" or "hash" by some engines. Say
    # so rather than silently stripping it — a silent strip hides a script defect
    # the standard wants caught.
    stray = {c: body.count(c) for c in "*#[]" if c in body}
    if stray:
        print("synthesize_style_b: WARNING — markdown furniture in the spoken body: "
              + ", ".join(f"{k!r}x{v}" for k, v in stray.items())
              + "\n  §5 of the standard bans it; it is being sent to the engine as written.",
              file=sys.stderr)
    return body


def split_script(body: str, max_chars: int) -> list[str]:
    """Paragraphs first, sentence ends second, never mid-sentence.

    ⚠️ Paragraphs are packed greedily rather than one-per-request: every seam is a
    place the voice can step, so the right number of chunks is the FEWEST that fit.
    """
    if max_chars > API_HARD_MAX_CHARS:
        raise Failure(f"--max-chunk-chars {max_chars} exceeds the API's own "
                      f"{API_HARD_MAX_CHARS}-character limit")

    paragraphs = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]

    # A paragraph too long for one request is broken at sentence ends. A single
    # SENTENCE too long is a hard error: cutting it would put the seam inside an
    # intonation contour, which is the one thing this splitter exists to prevent.
    units: list[str] = []
    for para in paragraphs:
        if len(para) <= max_chars:
            units.append(para)
            continue
        buf = ""
        for sentence in SENTENCE_END.split(para):
            if len(sentence) > max_chars:
                raise Failure(
                    f"a single sentence is {len(sentence)} characters, over the "
                    f"{max_chars}-character chunk size, and splitting it would put a "
                    f"seam mid-sentence. Raise --max-chunk-chars or split the "
                    f"sentence in the script.\n  {sentence[:120]}...")
            if buf and len(buf) + 1 + len(sentence) > max_chars:
                units.append(buf)
                buf = sentence
            else:
                buf = f"{buf} {sentence}".strip()
        if buf:
            units.append(buf)

    chunks: list[str] = []
    buf = ""
    for unit in units:
        joined = f"{buf}\n\n{unit}" if buf else unit
        if buf and len(joined) > max_chars:
            chunks.append(buf)
            buf = unit
        else:
            buf = joined
    if buf:
        chunks.append(buf)
    if not chunks:
        raise Failure("splitting produced no chunks")
    return chunks


# ─────────────────────────────── credentials ───────────────────────────────

def api_key() -> str:
    """Environment first, Secrets Manager second. Never printed, never an argument."""
    key = os.environ.get("ELEVENLABS_API_KEY")
    if key:
        return key.strip()
    proc = subprocess.run(
        ["aws", "secretsmanager", "get-secret-value",
         "--secret-id", SECRET_ID,
         "--profile", os.environ.get("AWS_PROFILE", "ice-hockey"),
         "--region", os.environ.get("AWS_REGION", "eu-west-2"),
         "--query", "SecretString", "--output", "text"],
        capture_output=True, text=True,
    )
    if proc.returncode != 0:
        # ⚠️ Report the CLI's own last line, which names the missing profile or
        # permission. Do not echo the command — it names the secret twice over.
        tail = proc.stderr.strip().splitlines()[-1] if proc.stderr.strip() else "no stderr"
        raise Failure("no ELEVENLABS_API_KEY in the environment and Secrets Manager "
                      f"could not be read: {tail}")
    key = proc.stdout.strip()
    if not key:
        raise Failure("Secrets Manager returned an empty secret")
    return key


# ──────────────────────────────── synthesis ────────────────────────────────

def settings_dict(args) -> dict:
    return {
        "stability": args.stability,
        "similarity_boost": args.similarity,
        "style": args.style,
        "use_speaker_boost": args.speaker_boost,
        "speed": args.speed,
    }


def chunk_hash(text: str, args, settings: dict) -> str:
    """Everything that can change the audio goes in the key, and nothing else.

    ⚠️ The continuity context is deliberately NOT hashed. It changes whenever a
    neighbouring chunk is edited, and hashing it would re-synthesise two extra
    chunks for every one-word fix — which is quota spent to chase an influence the
    engine applies only at the margins.
    """
    material = json.dumps({
        "text": text,
        "voice": args.voice,
        "model": args.model,
        "format": args.format,
        "settings": settings,
    }, sort_keys=True)
    return hashlib.sha256(material.encode()).hexdigest()[:16]


def synthesise(text: str, key: str, args, settings: dict,
               previous_text: str | None, next_text: str | None,
               previous_request_ids: list[str]) -> tuple[bytes, str | None, int | None]:
    """One request. Returns (audio, request_id, characters actually billed).

    ⚠️ `previous_request_ids` is the STRONGER continuity signal and the API
    documents that it overrides `previous_text` when both are sent — so only ids
    generated in THIS run are used. An id from a previous run may have expired
    server-side, and whether a stale id is an error or a silent no-op has not been
    verified; `previous_text` always works and costs nothing.
    """
    body: dict = {"text": text, "model_id": args.model, "voice_settings": settings}
    if previous_request_ids:
        body["previous_request_ids"] = previous_request_ids[-3:]  # API caps at 3
    elif previous_text:
        body["previous_text"] = previous_text
    if next_text:
        body["next_text"] = next_text

    url = f"{API_ROOT}/{args.voice}?output_format={args.format}"
    last: Exception | None = None
    for attempt in range(1, args.retries + 1):
        req = urllib.request.Request(
            url, data=json.dumps(body).encode(),
            headers={"xi-api-key": key, "Content-Type": "application/json",
                     "Accept": "audio/mpeg"},
        )
        try:
            with urllib.request.urlopen(req, timeout=args.timeout) as r:
                audio = r.read()
                if not audio:
                    raise Failure("the API returned 200 with an empty body")
                cost = r.headers.get("character-cost")
                return audio, r.headers.get("request-id"), int(cost) if cost else None
        except urllib.error.HTTPError as e:
            detail = e.read()[:400].decode("utf8", "replace")
            # ⚠️ 4xx other than 429 will not get better by being repeated, and a
            # retry loop over a billable endpoint is a way to spend a quota on an
            # error. Only rate limits and server faults are retried.
            if e.code != 429 and e.code < 500:
                raise Failure(f"HTTP {e.code} — {detail}") from None
            last = Failure(f"HTTP {e.code} — {detail}")
        except (urllib.error.URLError, TimeoutError, OSError) as e:
            last = Failure(str(e))
        if attempt < args.retries:
            wait = 2 ** attempt
            print(f"    retry {attempt}/{args.retries - 1} in {wait}s — {last}", file=sys.stderr)
            time.sleep(wait)
    raise Failure(f"gave up after {args.retries} attempts: {last}")


# ──────────────────────────────── stitching ────────────────────────────────

def probe_duration(path: pathlib.Path) -> float:
    proc = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True,
    )
    if proc.returncode != 0 or not proc.stdout.strip():
        raise Failure(f"ffprobe could not read {path.name}: {proc.stderr.strip()[:200]}")
    return float(proc.stdout.strip())


def stitch(parts: list[pathlib.Path], out: pathlib.Path, work: pathlib.Path) -> None:
    """Concatenate without re-encoding, then prove the result is not truncated.

    ⚠️ `-c copy` is the whole point: every fragment is already lossy, and
    `build_podcast_audio.py`'s header is right that a second encode compounds the
    artefacts. Nothing here decodes a fragment.
    """
    listing = work / "concat.txt"
    listing.write_text("".join(f"file '{p.resolve()}'\n" for p in parts), encoding="utf-8")
    proc = subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0",
         "-i", str(listing), "-c", "copy", str(out)],
        capture_output=True, text=True,
    )
    if proc.returncode != 0:
        raise Failure(f"ffmpeg concat failed: {proc.stderr.strip()[:400]}")
    if not out.exists() or out.stat().st_size == 0:
        raise Failure(f"ffmpeg reported success but {out} is missing or empty")

    # ⚠️ THE GUARD THAT MATTERS. ffmpeg exits 0 on a truncated concat, and a short
    # episode is the failure that sounds exactly like a complete one: it plays,
    # the voice is right, and it stops. Compare against the parts.
    expected = sum(probe_duration(p) for p in parts)
    actual = probe_duration(out)
    if actual < expected * 0.99:
        raise Failure(
            f"stitched audio is {actual:.1f}s against {expected:.1f}s of parts — "
            f"a {expected - actual:.1f}s shortfall. This is a PARTIAL EPISODE; "
            f"the chunks are kept so nothing needs re-synthesising.")


# ────────────────────────────────── main ───────────────────────────────────

def hms(seconds: float) -> str:
    return f"{int(seconds // 60)}m{int(seconds % 60):02d}s"


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(
        description="Synthesise a Style B podcast script through ElevenLabs.",
        epilog="There is deliberately no --api-key: a key on the command line "
               "lands in shell history and in `ps`.")
    ap.add_argument("script", type=pathlib.Path,
                    help="Style B script (spoken body between the SCRIPT START/END "
                         "delimiters) or a plain text file")
    ap.add_argument("--out", type=pathlib.Path,
                    help="output audio file; required unless --dry-run")
    ap.add_argument("--dry-run", action="store_true",
                    help="report the split and the spend; make NO API call")
    ap.add_argument("--cache-dir", type=pathlib.Path,
                    help="chunk cache; defaults to <out>.chunks/ beside the output")
    ap.add_argument("--voice", default=DEFAULT_VOICE_ID, help="ElevenLabs voice id")
    ap.add_argument("--model", default=DEFAULT_MODEL_ID)
    ap.add_argument("--format", default=DEFAULT_FORMAT,
                    help=f"ElevenLabs output_format (default {DEFAULT_FORMAT}; "
                         "pcm_* and wav_* need a Pro subscription)")
    ap.add_argument("--max-chunk-chars", type=int, default=DEFAULT_MAX_CHUNK_CHARS,
                    help=f"split target (default {DEFAULT_MAX_CHUNK_CHARS}; "
                         f"API hard limit {API_HARD_MAX_CHARS})")
    ap.add_argument("--speed", type=float, default=DEFAULT_SPEED)
    ap.add_argument("--stability", type=float, default=DEFAULT_STABILITY)
    ap.add_argument("--similarity", type=float, default=DEFAULT_SIMILARITY)
    ap.add_argument("--style", type=float, default=DEFAULT_STYLE)
    boost = ap.add_mutually_exclusive_group()
    boost.add_argument("--speaker-boost", dest="speaker_boost", action="store_true",
                       default=DEFAULT_SPEAKER_BOOST)
    boost.add_argument("--no-speaker-boost", dest="speaker_boost", action="store_false")
    ap.add_argument("--no-continuity", action="store_true",
                    help="send no previous/next context — for measuring how audible "
                         "the seams are without it, not for production")
    ap.add_argument("--retries", type=int, default=4)
    ap.add_argument("--timeout", type=int, default=300)
    ap.add_argument("--price-per-million", type=float,
                    help="optional: price per 1,000,000 credits, to print a money "
                         "figure. No price is hardcoded — quota, not currency, is "
                         "the constraint this pipeline plans against.")
    args = ap.parse_args(argv)

    if not args.dry_run and not args.out:
        ap.error("--out is required unless --dry-run")

    body = extract_body(args.script)
    chunks = split_script(body, args.max_chunk_chars)
    settings = settings_dict(args)

    total_chars = sum(len(c) for c in chunks)
    words = len(body.split())
    print(f"synthesize_style_b: {args.script}")
    print(f"  body            {len(body):,} characters, {words:,} words, "
          f"~{hms(words / 165 * 60)} at 165 wpm")
    print(f"  voice/model     {args.voice} · {args.model} · {args.format}")
    print(f"  settings        speed {args.speed} · stability {args.stability} · "
          f"similarity {args.similarity} · style {args.style} · "
          f"speaker boost {'ON' if args.speaker_boost else 'OFF'}")
    print(f"  split           {len(chunks)} chunks, target {args.max_chunk_chars:,} chars")
    for i, c in enumerate(chunks, 1):
        opening = " ".join(c.split())[:58]
        print(f"    {i:>2}  {len(c):>6,} chars  {opening}...")
    print(f"  billed          {total_chars:,} characters = {total_chars:,} credits "
          f"(UPPER BOUND — three live requests on this account were charged about "
          f"73% of their character count; the real figure is read from the "
          f"character-cost header per request)")
    if args.price_per_million:
        print(f"  at your price   {total_chars / 1e6 * args.price_per_million:,.2f} "
              f"for the upper bound")

    if args.dry_run:
        print("\nsynthesize_style_b: DRY RUN — no API call was made, no credits spent.")
        return 0

    cache = args.cache_dir or args.out.with_suffix(args.out.suffix + ".chunks")
    cache.mkdir(parents=True, exist_ok=True)
    args.out.parent.mkdir(parents=True, exist_ok=True)

    key = api_key()
    ext = "mp3" if args.format.startswith("mp3") else args.format.split("_")[0]

    print(f"\n  cache           {cache}")
    parts: list[pathlib.Path] = []
    request_ids: list[str] = []
    billed = 0
    fresh = reused = 0
    for i, text in enumerate(chunks):
        digest = chunk_hash(text, args, settings)
        part = cache / f"{i:03d}_{digest}.{ext}"
        if part.exists() and part.stat().st_size > 0:
            print(f"    {i + 1:>2}/{len(chunks)}  cached    {part.name}")
            parts.append(part)
            reused += 1
            # ⚠️ A cached chunk contributes no request id, so the next chunk falls
            # back to previous_text. That is the correct trade: reusing a stale id
            # to save a fallback would be trading a verified mechanism for an
            # unverified one.
            request_ids = []
            continue
        prev = None if args.no_continuity or i == 0 else chunks[i - 1][-CONTINUITY_CHARS:]
        nxt = None if args.no_continuity or i == len(chunks) - 1 else chunks[i + 1][:CONTINUITY_CHARS]
        ids = [] if args.no_continuity else request_ids
        try:
            audio, rid, cost = synthesise(text, key, args, settings, prev, nxt, ids)
        except Failure as e:
            # ⚠️ Loudly, and with nothing written. The chunks already synthesised
            # stay in the cache, so a re-run costs only what failed.
            print(f"\nsynthesize_style_b: FAILED on chunk {i + 1} of {len(chunks)} "
                  f"({len(text):,} chars)\n  {e}\n"
                  f"  {len(parts)} chunk(s) are cached in {cache} and will be reused; "
                  f"no output file was written.", file=sys.stderr)
            return 1
        part.write_bytes(audio)
        parts.append(part)
        fresh += 1
        if rid:
            request_ids.append(rid)
        if cost:
            billed += cost
        print(f"    {i + 1:>2}/{len(chunks)}  synthesised  {len(text):>6,} chars -> "
              f"{len(audio):>9,} bytes"
              + (f", billed {cost:,}" if cost else ", billed unknown"))

    if len(parts) != len(chunks):
        raise Failure(f"{len(parts)} parts for {len(chunks)} chunks — refusing to stitch")

    stitch(parts, args.out, cache)
    duration = probe_duration(args.out)
    print(f"\n  wrote           {args.out}  "
          f"({args.out.stat().st_size / 1e6:.1f} MB, {hms(duration)})")
    print(f"  chunks          {fresh} synthesised, {reused} reused from cache")
    print(f"  billed          {billed:,} credits this run"
          + ("" if fresh else " (everything came from cache)"))
    print("\n⚠️ The seams are at paragraph boundaries and have NOT been listened to. "
          "\n   Stability 0.35 is chosen and unheard; §11 of the standard asks for an "
          "\n   ear test at length before those settings are treated as settled.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Failure as e:
        print(f"synthesize_style_b: {e}", file=sys.stderr)
        sys.exit(1)
    except KeyboardInterrupt:
        print("\nsynthesize_style_b: interrupted; cached chunks are kept", file=sys.stderr)
        sys.exit(130)
