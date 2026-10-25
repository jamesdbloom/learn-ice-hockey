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
is why the owner's chosen 30 / 50 / 20 with speaker boost has still never been
heard. This is the missing generator.

⚠️ THE SETTINGS BELOW ARE CHOSEN AND UNHEARD. The comparison that selected
ElevenLabs ran on the engine's defaults, and the winning sample was short. Every
one of them is a constant here with a CLI override, because the first real use of
this script is somebody A/B-ing them at length.

⚠️ SINGLE VOICE IS THE DEFAULT, BY DECISION, 18 September 2026 — `tts_sample.py`
carries the reasoning. ⚠️ An OPT-IN `--dialogue` mode was added 25 October 2026 for
the two-voice Basics pilot (`podcast_style_b/basics/pilots/*_B_dialogue.md`). It
exists so the owner CAN hear that pilot; adopting two voices for the series reopens
the 18 September decision, and that is the owner's call, not this script's. Without
`--dialogue` nothing below has changed: the single-voice path is byte-for-byte the
code it was, and prints the same output.

DIALOGUE MODE (`--dialogue --voice-map COACH=<id>,PLAYER=<id>`)
--------------------------------------------------------------
⚠️ ENDPOINT NOT YET CALLED LIVE. Everything here is from the ElevenLabs API
reference, read 25 October 2026, not from a measured request:

    POST https://api.elevenlabs.io/v1/text-to-dialogue?output_format=<fmt>
    body {"inputs": [{"text", "voice_id"}, ...], "model_id", "settings",
          "previous_text", "future_text", "previous_request_ids"}

  * model: `eleven_v4` (the docs list v4 as available on Text to Dialogue and
    recommend it; the endpoint's own default is `eleven_v3`, so the id is always sent).
  * `settings` accepts ONLY `stability` and `similarity` (the docs' field name — not
    `similarity_boost`). ⚠️ `--style`, `--speed` and speaker boost have NO dialogue
    field and are NOT sent; the dry run says so rather than letting them look applied.
  * continuity fields are `previous_text` and `future_text` (NOT `next_text`), each
    capped at 100 characters by the docs. Whether they are billed is UNMEASURED.
  * the docs ask for the combined `inputs[].text` to stay at or under 2,000
    characters per request "for reliable generation"; that is the split target.

THE INPUT. Inside the SCRIPT START/END delimiters (so the "Notes (not spoken)"
section after SCRIPT END is never sent, exactly as in single-voice mode), every
paragraph must open with an upper-case speaker label — `COACH:` or `PLAYER:` — and
the label is stripped, never spoken. ⚠️ A paragraph with no label is a HARD ERROR,
not a guess: attaching it to the previous speaker would put words in the wrong
mouth and sound perfectly fine doing it. A speaker missing from `--voice-map` is a
hard error before any request.

THE SPLIT. One paragraph is one segment. Consecutive segments are packed greedily
into requests of ≤ `--dialogue-max-chars` (2,000) characters of spoken text, so
every seam falls BETWEEN two lines, never inside one. A segment is split only if it
alone exceeds the limit, and then at sentence ends; a single sentence over the
limit is a hard error, as in single-voice mode. Chunks are cached by a content hash
of (segments + voice ids + model + dialogue settings + format) in the same cache
directory and stitched by the same `stitch()` — gapless byte-join for `pcm_*`.

REQUEST STITCHING IS THE HARD PART, AND IT IS A CORRECTNESS REQUIREMENT
-----------------------------------------------------------------------
⚠️ ElevenLabs caps ONE request at 10,000 characters. Measured 23 September 2026
against the live API, which states the number in its own 400:

    "Request text length (100000) exceeds the maximum text length of 10000
     characters. Please use Studio for long form TTS."

The exemplar script is 20,148 characters, so an episode is SEVERAL CALLS. ⚠️ At
stability 0.30 the engine's prosody is deliberately less consistent between
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

⚠️ THE SAMPLE-EXACT ROUTE. `pcm_*` (e.g. `--format pcm_44100`) returns raw,
HEADERLESS signed 16-bit little-endian mono samples. It needs the Pro tier — on a
lower tier the API answers 403 `output_format_not_allowed`. Raw s16le chunks join
GAPLESSLY by plain byte concatenation, so for `pcm_*` the stitcher does exactly
that and then wraps the joined samples as WAV with
`ffmpeg -f s16le -ar <rate> -ac 1`, the rate taken from the format string. The
ffmpeg concat demuxer is NOT used for `pcm_*`: it cannot read headerless audio
without being told rate, channels and width, and it failed on the 23 October 2026
`finding_more_ice` run. A `pcm_*` run therefore requires a `.wav` output. mp3
formats still go through the concat demuxer with `-c copy`, and each mp3 seam
carries one boundary's frame padding (measured: ~87 ms across a single join).

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
    python3 scripts/synthesize_style_b.py PILOT_B.md --dialogue --dry-run
    python3 scripts/synthesize_style_b.py PILOT_B.md --dialogue \\
        --voice-map COACH=<id>,PLAYER=<id> --format pcm_44100 --out OUT.wav
    python3 scripts/synthesize_style_b.py --self-test      # offline; parser + chunker

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
DEFAULT_STABILITY = 0.30
DEFAULT_SIMILARITY = 0.50
DEFAULT_STYLE = 0.20
DEFAULT_SPEAKER_BOOST = True

DEFAULT_VOICE_ID = os.environ.get("ELEVENLABS_VOICE_ID", "L0Dsvb3SLTyegXwtm47J")
# ⚠️ The owner's choice, 14 October 2026 (decided 30 September). Whether v4 honours
# `voice_settings` and `previous_text`/`next_text` as v2 does has NOT been tested
# against the live API. `--model eleven_multilingual_v2` restores the old model.
DEFAULT_MODEL_ID = "eleven_v4"

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

# mp3 at 128 kbps mono works on every tier. `pcm_*` (Pro tier) is the gapless,
# sample-exact route; see the docstring for how it is stitched.
DEFAULT_FORMAT = "mp3_44100_128"

API_ROOT = "https://api.elevenlabs.io/v1/text-to-speech"
SECRET_ID = "ice-hockey-production/elevenlabs-api-key"

SCRIPT_START = "===== SCRIPT START ====="
SCRIPT_END = "===== SCRIPT END ====="

SENTENCE_END = re.compile(r"(?<=[.!?])\s+")

# ── Dialogue mode. ⚠️ From the API reference, 25 October 2026; NOT yet called live. ──
# POST /v1/text-to-dialogue, output_format as a query parameter, model `eleven_v4`.
DIALOGUE_URL = "https://api.elevenlabs.io/v1/text-to-dialogue"
# The docs: keep combined inputs[].text "at or below 2,000 characters per request".
DIALOGUE_MAX_CHARS = 2000
# The docs cap `previous_text` and `future_text` at 100 characters each.
DIALOGUE_CONTEXT_CHARS = 100
SPEAKER_LABEL = re.compile(r"^([A-Z][A-Z0-9 _-]*?):[ \t]+(\S.*)$", re.S)


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


# ─────────────────────────────── dialogue input ───────────────────────────────

Segment = tuple[str, str]  # (speaker label, spoken text with the label stripped)


def parse_dialogue(body: str) -> list[Segment]:
    """One paragraph = one segment, each opening with an upper-case `LABEL:`.

    ⚠️ A paragraph with no label is a hard error. Guessing the previous speaker
    would put a line in the wrong voice, and the result would sound fine.
    """
    segments: list[Segment] = []
    for para in (p.strip() for p in re.split(r"\n\s*\n", body)):
        if not para:
            continue
        m = SPEAKER_LABEL.match(para)
        if not m:
            raise Failure("dialogue mode: a paragraph has no speaker label "
                          f"(expected e.g. 'COACH: ...'):\n  {para[:120]}")
        text = " ".join(m.group(2).split())
        segments.append((m.group(1).strip(), text))
    if not segments:
        raise Failure("dialogue mode: no speaker-labelled lines found")
    return segments


def parse_voice_map(spec: str | None) -> dict[str, str]:
    """`COACH=<id>,PLAYER=<id>` → {"COACH": id, "PLAYER": id}. Ids are not secrets."""
    if not spec:
        return {}
    out: dict[str, str] = {}
    for item in spec.split(","):
        if not item.strip():
            continue
        if "=" not in item:
            raise Failure(f"--voice-map entry {item!r} is not LABEL=<voice id>")
        label, vid = (s.strip() for s in item.split("=", 1))
        if not label or not vid:
            raise Failure(f"--voice-map entry {item!r} is not LABEL=<voice id>")
        if label in out:
            raise Failure(f"--voice-map names {label} twice")
        out[label] = vid
    return out


def split_dialogue(segments: list[Segment], max_chars: int) -> list[list[Segment]]:
    """Pack consecutive segments into requests of ≤ max_chars spoken characters.

    Seams fall only BETWEEN segments. A segment is split only when it alone is over
    the limit, and then at sentence ends; a single over-limit sentence is an error.
    """
    if max_chars > API_HARD_MAX_CHARS:
        raise Failure(f"--dialogue-max-chars {max_chars} exceeds the API's own "
                      f"{API_HARD_MAX_CHARS}-character limit")
    units: list[Segment] = []
    for speaker, text in segments:
        if len(text) <= max_chars:
            units.append((speaker, text))
            continue
        buf = ""
        for sentence in SENTENCE_END.split(text):
            if len(sentence) > max_chars:
                raise Failure(
                    f"a single {speaker} sentence is {len(sentence)} characters, over "
                    f"the {max_chars}-character dialogue request size, and splitting it "
                    f"would put a seam mid-sentence. Split the sentence in the script."
                    f"\n  {sentence[:120]}...")
            if buf and len(buf) + 1 + len(sentence) > max_chars:
                units.append((speaker, buf))
                buf = sentence
            else:
                buf = f"{buf} {sentence}".strip()
        if buf:
            units.append((speaker, buf))

    chunks: list[list[Segment]] = []
    cur: list[Segment] = []
    size = 0
    for unit in units:
        if cur and size + len(unit[1]) > max_chars:
            chunks.append(cur)
            cur, size = [], 0
        cur.append(unit)
        size += len(unit[1])
    if cur:
        chunks.append(cur)
    if not chunks:
        raise Failure("dialogue splitting produced no chunks")
    return chunks


def context_tail(text: str, limit: int = DIALOGUE_CONTEXT_CHARS) -> str:
    """The last ≤limit characters, starting at a word boundary."""
    if len(text) <= limit:
        return text
    cut = text[-limit:]
    return cut.split(" ", 1)[1] if " " in cut else cut


def context_head(text: str, limit: int = DIALOGUE_CONTEXT_CHARS) -> str:
    """The first ≤limit characters, ending at a word boundary."""
    if len(text) <= limit:
        return text
    cut = text[:limit]
    return cut.rsplit(" ", 1)[0] if " " in cut else cut


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


def dialogue_settings(args) -> dict:
    """The only two fields the dialogue `settings` object documents."""
    return {"stability": args.stability, "similarity": args.similarity}


def dialogue_inputs(chunk: list[Segment], voice_map: dict[str, str]) -> list[dict]:
    return [{"text": text, "voice_id": voice_map[speaker]} for speaker, text in chunk]


def dialogue_chunk_hash(inputs: list[dict], args, settings: dict) -> str:
    """As `chunk_hash`, for a dialogue request. `mode` keeps the two key spaces apart.

    Continuity context is not hashed, for the reason `chunk_hash` gives.
    """
    material = json.dumps({
        "mode": "dialogue",
        "inputs": inputs,
        "model": args.model,
        "format": args.format,
        "settings": settings,
    }, sort_keys=True)
    return hashlib.sha256(material.encode()).hexdigest()[:16]


def synthesise_dialogue(inputs: list[dict], key: str, args, settings: dict,
                        previous_text: str | None, future_text: str | None,
                        previous_request_ids: list[str]) -> tuple[bytes, str | None, int | None]:
    """One Text to Dialogue request. Same retry policy as `synthesise()`.

    ⚠️ NOT YET CALLED LIVE. Field names are the API reference's, 25 October 2026.
    Whether `previous_request_ids` overrides `previous_text` here as it does on
    text-to-speech is not documented on that page; only one is sent, as there.
    """
    body: dict = {"inputs": inputs, "model_id": args.model, "settings": settings}
    if previous_request_ids:
        body["previous_request_ids"] = previous_request_ids[-3:]  # docs: max 3
    elif previous_text:
        body["previous_text"] = previous_text[:DIALOGUE_CONTEXT_CHARS]
    if future_text:
        body["future_text"] = future_text[:DIALOGUE_CONTEXT_CHARS]

    url = f"{DIALOGUE_URL}?output_format={args.format}"
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

def run_ffmpeg_tool(cmd: list[str], what: str) -> subprocess.CompletedProcess:
    """Run ffmpeg/ffprobe; a missing binary is a Failure with a message, not a traceback."""
    try:
        return subprocess.run(cmd, capture_output=True, text=True)
    except FileNotFoundError:
        raise Failure(f"{cmd[0]} is not installed or not on PATH (needed to {what})") from None


def tool_error(proc: subprocess.CompletedProcess) -> str:
    """ffmpeg's own error, or an explicit note that it gave none — never an empty string."""
    err = (proc.stderr or "").strip()
    return f"exit {proc.returncode}: {err[-600:]}" if err else f"exit {proc.returncode}, no stderr"


def probe_duration(path: pathlib.Path) -> float:
    proc = run_ffmpeg_tool(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nw=1:nk=1", str(path)], "measure duration")
    if proc.returncode != 0 or not proc.stdout.strip():
        raise Failure(f"ffprobe could not read {path.name} ({tool_error(proc)})")
    try:
        return float(proc.stdout.strip())
    except ValueError:
        raise Failure(f"ffprobe returned no usable duration for {path.name}: "
                      f"{proc.stdout.strip()[:100]!r}") from None


PCM_FORMAT = re.compile(r"^pcm_(\d+)$")
PCM_SAMPLE_BYTES = 2  # ElevenLabs pcm_* is signed 16-bit little-endian, mono


def pcm_rate(fmt: str) -> int | None:
    """The sample rate of a `pcm_<rate>` format, or None for anything else."""
    m = PCM_FORMAT.match(fmt)
    return int(m.group(1)) if m else None


def check_duration(expected: float, actual: float) -> None:
    # ⚠️ THE GUARD THAT MATTERS. ffmpeg exits 0 on a truncated concat, and a short
    # episode is the failure that sounds exactly like a complete one: it plays,
    # the voice is right, and it stops. Compare against the parts.
    if actual < expected * 0.99:
        raise Failure(
            f"stitched audio is {actual:.1f}s against {expected:.1f}s of parts — "
            f"a {expected - actual:.1f}s shortfall. This is a PARTIAL EPISODE; "
            f"the chunks are kept so nothing needs re-synthesising.")


def stitch_pcm(parts: list[pathlib.Path], out: pathlib.Path, work: pathlib.Path,
               rate: int) -> None:
    """Join raw s16le mono chunks by byte concatenation, then wrap them as WAV.

    ⚠️ Raw PCM is headerless, so byte concatenation IS a gapless, sample-exact
    join — no decode, no re-encode. ffmpeg only adds the RIFF header
    (`-c:a pcm_s16le` copies the samples unchanged).
    """
    if out.suffix.lower() != ".wav":
        raise Failure(f"--format pcm_{rate} produces raw samples and is written as WAV; "
                      f"give an --out ending in .wav, not {out.name}")
    total = 0
    for p in parts:
        size = p.stat().st_size
        if size % PCM_SAMPLE_BYTES:
            raise Failure(f"{p.name} is {size:,} bytes — not a whole number of 16-bit "
                          f"samples, so it is not intact s16le PCM")
        total += size
    joined = work / "joined.pcm"
    with joined.open("wb") as dst:
        for p in parts:
            with p.open("rb") as src:
                while block := src.read(1 << 20):
                    dst.write(block)
    if joined.stat().st_size != total:
        raise Failure(f"joined PCM is {joined.stat().st_size:,} bytes against "
                      f"{total:,} bytes of parts")
    try:
        proc = run_ffmpeg_tool(
            ["ffmpeg", "-loglevel", "error", "-y", "-f", "s16le", "-ar", str(rate),
             "-ac", "1", "-i", str(joined), "-c:a", "pcm_s16le", str(out)],
            "wrap the joined PCM as WAV")
    finally:
        joined.unlink(missing_ok=True)
    if proc.returncode != 0:
        raise Failure(f"ffmpeg could not wrap the joined PCM as WAV ({tool_error(proc)})")
    if not out.exists() or out.stat().st_size == 0:
        raise Failure(f"ffmpeg reported success but {out} is missing or empty")
    check_duration(total / (rate * PCM_SAMPLE_BYTES), probe_duration(out))


def stitch(parts: list[pathlib.Path], out: pathlib.Path, work: pathlib.Path,
           fmt: str) -> None:
    """Concatenate without re-encoding, then prove the result is not truncated.

    ⚠️ `-c copy` is the whole point: every fragment is already lossy, and
    `build_podcast_audio.py`'s header is right that a second encode compounds the
    artefacts. Nothing here decodes a fragment. Headerless `pcm_*` takes its own
    route, `stitch_pcm()`, because the concat demuxer cannot read it.
    """
    rate = pcm_rate(fmt)
    if rate is not None:
        stitch_pcm(parts, out, work, rate)
        return
    listing = work / "concat.txt"
    listing.write_text("".join(f"file '{p.resolve()}'\n" for p in parts), encoding="utf-8")
    proc = run_ffmpeg_tool(
        ["ffmpeg", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0",
         "-i", str(listing), "-c", "copy", str(out)], "concatenate the chunks")
    if proc.returncode != 0:
        raise Failure(f"ffmpeg concat failed ({tool_error(proc)})")
    if not out.exists() or out.stat().st_size == 0:
        raise Failure(f"ffmpeg reported success but {out} is missing or empty")
    check_duration(sum(probe_duration(p) for p in parts), probe_duration(out))


# ────────────────────────────────── main ───────────────────────────────────

def hms(seconds: float) -> str:
    return f"{int(seconds // 60)}m{int(seconds % 60):02d}s"


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(
        description="Synthesise a Style B podcast script through ElevenLabs.",
        epilog="There is deliberately no --api-key: a key on the command line "
               "lands in shell history and in `ps`.")
    ap.add_argument("script", type=pathlib.Path, nargs="?",
                    help="Style B script (spoken body between the SCRIPT START/END "
                         "delimiters) or a plain text file")
    ap.add_argument("--self-test", action="store_true",
                    help="run the offline parser and chunker tests; no script, no API")
    ap.add_argument("--dialogue", action="store_true",
                    help="two-or-more-voice mode via Text to Dialogue: every paragraph "
                         "opens with a LABEL: (e.g. COACH:, PLAYER:)")
    ap.add_argument("--voice-map",
                    help="dialogue mode: LABEL=<voice id>,LABEL=<voice id>; "
                         "required unless --dry-run")
    ap.add_argument("--dialogue-max-chars", type=int, default=DIALOGUE_MAX_CHARS,
                    help=f"dialogue split target (default {DIALOGUE_MAX_CHARS}, the "
                         "docs' figure for reliable generation)")
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

    if args.self_test:
        return self_test()
    if args.script is None:
        ap.error("the following arguments are required: script")
    if args.voice_map and not args.dialogue:
        ap.error("--voice-map is only used with --dialogue")

    if not args.dry_run and not args.out:
        ap.error("--out is required unless --dry-run")
    # ⚠️ Checked BEFORE any request: discovering at stitch time that a pcm_* run
    # cannot be written would be credits spent for nothing.
    if args.out and pcm_rate(args.format) is not None and args.out.suffix.lower() != ".wav":
        ap.error(f"--format {args.format} is written as WAV; --out must end in .wav")

    if args.dialogue:
        if not args.dry_run and not args.voice_map:
            ap.error("--dialogue needs --voice-map LABEL=<id>,... unless --dry-run")
        return run_dialogue(args)

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

    # ⚠️ The key is fetched only when a chunk actually needs synthesising, so a
    # run served entirely from the cache touches neither the API nor Secrets Manager.
    key: str | None = None
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
            if key is None:
                key = api_key()
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

    stitch(parts, args.out, cache, args.format)
    duration = probe_duration(args.out)
    print(f"\n  wrote           {args.out}  "
          f"({args.out.stat().st_size / 1e6:.1f} MB, {hms(duration)})")
    print(f"  chunks          {fresh} synthesised, {reused} reused from cache")
    print(f"  billed          {billed:,} credits this run"
          + ("" if fresh else " (everything came from cache)"))
    print("\n⚠️ The seams are at paragraph boundaries and have NOT been listened to. "
          "\n   Stability 0.30 is chosen and unheard; §11 of the standard asks for an "
          "\n   ear test at length before those settings are treated as settled.")
    return 0


# ─────────────────────────────── dialogue run ────────────────────────────────

def run_dialogue(args) -> int:
    """The `--dialogue` path. Shares extract_body, the cache layout and stitch()."""
    body = extract_body(args.script)  # strips everything outside SCRIPT START/END
    segments = parse_dialogue(body)
    chunks = split_dialogue(segments, args.dialogue_max_chars)
    voice_map = parse_voice_map(args.voice_map)
    speakers = list(dict.fromkeys(s for s, _ in segments))
    missing = [s for s in speakers if s not in voice_map]
    unused = [s for s in voice_map if s not in speakers]
    settings = dialogue_settings(args)

    spoken = sum(len(t) for _, t in segments)
    words = sum(len(t.split()) for _, t in segments)
    print(f"synthesize_style_b: {args.script}  [DIALOGUE]")
    print(f"  body            {spoken:,} spoken characters (labels excluded), "
          f"{words:,} words, ~{hms(words / 165 * 60)} at 165 wpm")
    print(f"  segments        {len(segments)}: "
          + ", ".join(f"{s} {sum(1 for x, _ in segments if x == s)} "
                      f"({sum(len(t) for x, t in segments if x == s):,} chars)"
                      for s in speakers))
    print(f"  voices          "
          + (", ".join(f"{s}={voice_map.get(s, 'UNMAPPED')}" for s in speakers)))
    print(f"  model/format    {args.model} · {args.format} · {DIALOGUE_URL}")
    print(f"  settings        stability {args.stability} · similarity {args.similarity}"
          f"  (⚠️ style, speed and speaker boost have no dialogue field and are NOT sent)")
    print(f"  split           {len(chunks)} chunks, target ≤{args.dialogue_max_chars:,} chars")
    for i, c in enumerate(chunks, 1):
        n = sum(len(t) for _, t in c)
        who = ", ".join(f"{s}×{sum(1 for x, _ in c if x == s)}"
                        for s in dict.fromkeys(x for x, _ in c))
        print(f"    {i:>2}  {n:>6,} chars  {len(c):>2} segs  {who:<22} "
              f"{' '.join(c[0][1].split())[:40]}...")
    print(f"  billed          {spoken:,} characters (UPPER BOUND; dialogue billing is "
          f"UNMEASURED on this account — the character-cost header is read per request)")
    if args.price_per_million:
        print(f"  at your price   {spoken / 1e6 * args.price_per_million:,.2f} "
              f"for the upper bound")
    if unused:
        print(f"  ⚠️ --voice-map names speakers the script never uses: {', '.join(unused)}")

    if args.dry_run:
        if missing:
            print(f"  ⚠️ not mapped to a voice (a real run needs them): {', '.join(missing)}")
        print("\nsynthesize_style_b: DRY RUN — no API call was made, no credits spent.")
        return 0
    if missing:
        raise Failure(f"--voice-map has no voice for: {', '.join(missing)}")

    cache = args.cache_dir or args.out.with_suffix(args.out.suffix + ".chunks")
    cache.mkdir(parents=True, exist_ok=True)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    key: str | None = None
    ext = "mp3" if args.format.startswith("mp3") else args.format.split("_")[0]

    print(f"\n  cache           {cache}")
    parts: list[pathlib.Path] = []
    request_ids: list[str] = []
    billed = fresh = reused = 0
    for i, chunk in enumerate(chunks):
        inputs = dialogue_inputs(chunk, voice_map)
        digest = dialogue_chunk_hash(inputs, args, settings)
        part = cache / f"d{i:03d}_{digest}.{ext}"
        if part.exists() and part.stat().st_size > 0:
            print(f"    {i + 1:>2}/{len(chunks)}  cached    {part.name}")
            parts.append(part)
            reused += 1
            request_ids = []  # as in single-voice mode: never reuse a stale id
            continue
        prev = (None if args.no_continuity or i == 0
                else context_tail(chunks[i - 1][-1][1]))
        nxt = (None if args.no_continuity or i == len(chunks) - 1
               else context_head(chunks[i + 1][0][1]))
        ids = [] if args.no_continuity else request_ids
        try:
            if key is None:
                key = api_key()
            audio, rid, cost = synthesise_dialogue(inputs, key, args, settings, prev, nxt, ids)
        except Failure as e:
            n = sum(len(t) for _, t in chunk)
            print(f"\nsynthesize_style_b: FAILED on dialogue chunk {i + 1} of {len(chunks)} "
                  f"({n:,} chars)\n  {e}\n"
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
        print(f"    {i + 1:>2}/{len(chunks)}  synthesised  {len(inputs):>2} segs -> "
              f"{len(audio):>9,} bytes" + (f", billed {cost:,}" if cost else ", billed unknown"))

    if len(parts) != len(chunks):
        raise Failure(f"{len(parts)} parts for {len(chunks)} chunks — refusing to stitch")
    stitch(parts, args.out, cache, args.format)
    duration = probe_duration(args.out)
    print(f"\n  wrote           {args.out}  "
          f"({args.out.stat().st_size / 1e6:.1f} MB, {hms(duration)})")
    print(f"  chunks          {fresh} synthesised, {reused} reused from cache")
    print(f"  billed          {billed:,} credits this run"
          + ("" if fresh else " (everything came from cache)"))
    print("\n⚠️ Dialogue mode's first live runs are UNHEARD: check speaker turns, the "
          "\n   seams between requests, and that each line is in the right voice.")
    return 0


# ──────────────────────────────── self-test ──────────────────────────────────

def self_test() -> int:
    """Offline tests of the dialogue parser and chunker, plus extract_body's strip."""
    import tempfile
    failures: list[str] = []

    def check(name: str, cond: bool) -> None:
        print(f"  {'ok  ' if cond else 'FAIL'}  {name}")
        if not cond:
            failures.append(name)

    def raises(fn) -> bool:
        try:
            fn()
        except Failure:
            return True
        return False

    print("synthesize_style_b: self-test (offline)")

    # parse_dialogue
    segs = parse_dialogue("COACH: Hello there.\n\nPLAYER: Hi.\nStill me.\n\nCOACH: Bye.")
    check("labels parsed and stripped",
          segs == [("COACH", "Hello there."), ("PLAYER", "Hi. Still me."), ("COACH", "Bye.")])
    check("unlabelled paragraph is a hard error",
          raises(lambda: parse_dialogue("COACH: One.\n\nNo label here.")))
    check("lower-case label is not a label", raises(lambda: parse_dialogue("coach: hi")))
    check("label needs text after it", raises(lambda: parse_dialogue("COACH:")))
    check("colon later in the line is kept as text",
          parse_dialogue("PLAYER: Three things: one.") == [("PLAYER", "Three things: one.")])

    # extract_body strips the not-spoken notes
    with tempfile.TemporaryDirectory() as d:
        p = pathlib.Path(d) / "s.md"
        p.write_text("# T\n\nCOACH: header, not spoken.\n\n===== SCRIPT START =====\n\n"
                     "COACH: Spoken.\n\n===== SCRIPT END =====\n\n## Notes (not spoken)\n\n"
                     "PLAYER: never sent.\n", encoding="utf-8")
        check("only SCRIPT START/END body is parsed",
              parse_dialogue(extract_body(p)) == [("COACH", "Spoken.")])

    # parse_voice_map
    check("voice map parsed", parse_voice_map("COACH=a1, PLAYER=b2") == {"COACH": "a1", "PLAYER": "b2"})
    check("voice map rejects missing '='", raises(lambda: parse_voice_map("COACH")))
    check("voice map rejects duplicates", raises(lambda: parse_voice_map("A=x,A=y")))

    # split_dialogue
    s = [("A", "x" * 900), ("B", "y" * 900), ("A", "z" * 300)]
    ch = split_dialogue(s, 2000)
    check("packs to the limit, seams between segments",
          [len(c) for c in ch] == [2, 1] and sum(len(t) for _, t in ch[0]) == 1800)
    check("exactly at the limit stays one chunk",
          len(split_dialogue([("A", "x" * 1000), ("B", "y" * 1000)], 2000)) == 1)
    check("one char over starts a new chunk",
          len(split_dialogue([("A", "x" * 1000), ("B", "y" * 1001)], 2000)) == 2)
    check("a segment at the limit is never split",
          split_dialogue([("A", "x" * 2000)], 2000) == [[("A", "x" * 2000)]])
    long_seg = " ".join(["This is one sentence of about forty chars."] * 60)
    ch = split_dialogue([("A", long_seg)], 2000)
    check("over-limit segment split at sentence ends only",
          len(ch) == 2 and all(t.endswith(".") for c in ch for _, t in c)
          and all(sum(len(t) for _, t in c) <= 2000 for c in ch)
          and " ".join(t for c in ch for _, t in c) == long_seg
          and all(x == "A" for c in ch for x, _ in c))
    check("over-limit single sentence is a hard error",
          raises(lambda: split_dialogue([("A", "x" * 2001)], 2000)))
    check("no text lost or reordered",
          [t for c in split_dialogue(s, 2000) for _, t in c] == [t for _, t in s])

    # continuity context
    t = "word " * 60
    check("context tail ≤100 chars", len(context_tail(t)) <= 100 and t.endswith(context_tail(t)))
    check("context head ≤100 chars", len(context_head(t)) <= 100 and t.startswith(context_head(t)))

    # hash: dialogue and single-voice key spaces are distinct and voice-sensitive
    class A:  # minimal args
        model, format, voice = "eleven_v4", "pcm_44100", "v"
    h1 = dialogue_chunk_hash([{"text": "t", "voice_id": "1"}], A, {"stability": 0.3})
    h2 = dialogue_chunk_hash([{"text": "t", "voice_id": "2"}], A, {"stability": 0.3})
    check("hash changes with the voice", h1 != h2)
    check("dialogue hash differs from single-voice hash",
          h1 != chunk_hash("t", A, {"stability": 0.3}))

    print(f"\nsynthesize_style_b: self-test {'PASSED' if not failures else 'FAILED'} "
          f"({len(failures)} failure(s))")
    return 1 if failures else 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Failure as e:
        print(f"synthesize_style_b: {e}", file=sys.stderr)
        sys.exit(1)
    except KeyboardInterrupt:
        print("\nsynthesize_style_b: interrupted; cached chunks are kept", file=sys.stderr)
        sys.exit(130)
    except Exception as e:  # ⚠️ never exit non-zero without saying why
        import traceback
        traceback.print_exc()
        print(f"synthesize_style_b: FAILED — {type(e).__name__}: {e}", file=sys.stderr)
        sys.exit(1)
