#!/usr/bin/env python3
"""Synthesise a Style B podcast script as ONE long-form render, via ElevenLabs Studio.

⚠️ NOT A CHECKER AND NOT A GATE. It reads a script, calls a paid API, and writes
one audio file plus one JSON sidecar beside it. It touches nothing else.

WHY IT EXISTS
-------------
`synthesize_style_b.py` goes through the plain text-to-speech endpoint, which caps
ONE request at 10,000 characters and so has to stitch an episode from several
independently synthesised requests. The API's own 400 for an over-long request
says *"Please use Studio for long form TTS."* This is that route: the whole script
goes into one Studio project, Studio converts it, and one finished file comes back.
There are no request seams for this script to manage.

WHAT THE DOCUMENTATION SAYS, fetched 17 October 2026 (quoted, not remembered)
----------------------------------------------------------------------------
  * Create: `POST /v1/studio/projects`, multipart/form-data. `from_content_json`
    takes chapters -> blocks (`sub_type` "p") -> `tts_node`s carrying a voice_id
    and text. `default_model_id`, `default_paragraph_voice_id`, `quality_preset`
    and `voice_settings` ("encoded as a list of JSON strings") are form fields.
    https://elevenlabs.io/docs/api-reference/studio/add-project
  * `quality_preset` 'ultra_lossless' is "705.6kbps with 44.1kHz sample rate ...
    in a fully lossless format"; unset, it "defaults to the highest quality preset
    available on your subscription tier". The Studio product guide: "Pro, Scale,
    Business, and Enterprise: 16-bit, 44.1 kHz WAV, or 192 kbps MP3 (Ultra
    Lossless)." https://elevenlabs.io/docs/eleven-creative/products/studio
  * Convert: `POST /v1/studio/projects/{id}/convert`. Poll `GET
    /v1/studio/projects/{id}`: project `state` is creating | default | converting
    | in_queue; each chapter has `state`, `conversion_progress` and
    `last_conversion_error`.
  * Download: `GET .../snapshots` lists snapshots; `GET .../snapshots/{sid}`
    gives `audio_duration_secs`; `POST .../snapshots/{sid}/stream` with
    `{"convert_to_mpeg": bool}` streams the audio.
  * Limits: "Each paragraph can have a maximum of 5000 characters", 400
    paragraphs per chapter, 500 chapters per project, 3,000 projects on Pro.
  * Eleven v4: "Both variants use two voice settings: Stability and Similarity.
    Style and Speed sliders are not available in Eleven v4" — so this script sends
    ONLY stability and similarity, unlike synthesize_style_b.py.

⚠️ WHAT THE DOCUMENTATION DID NOT SETTLE — every one is a live-call question:
  * "The ElevenCreative Studio API is only available upon request. To get
    access, contact sales." (api-reference/studio-api-information). A Pro key may
    simply be refused. The first live call is `create`, which bills nothing.
  * Whether `eleven_v4` is accepted as `default_model_id` through the API. The
    guide says Studio "supports our latest speech models, including Eleven v4"
    and, in the next section, that you can select "another model, including
    Eleven v3". So this script CHECKS the created project's `default_model_id`
    and its voice settings BEFORE converting, and stops if they were substituted.
  * What container `stream` returns with `convert_to_mpeg` false. The file is
    sniffed by its magic bytes and named accordingly; nothing is assumed.
  * The Studio credit rate for eleven_v4. The pricing page states only "Text to
    Speech 1 credit per character" and model-specific rates for v2 / Flash.
    The dry run quotes characters as an UPPER-BOUND-SHAPED estimate, not a price.

RESUMABLE, BECAUSE CONVERSION BILLS
-----------------------------------
The project id is written to `<out>.studio.json` the moment `create` returns, and
every later step records its progress there (`<out>.json`). A rerun reads it and POLLS; it never
re-creates or re-converts a project it already has. If the script text, voice,
model or settings change, the sidecar's fingerprint no longer matches and the
run REFUSES rather than silently billing a second project — pass `--new-project`
to mean it.

⚠️ `create` and `convert` are NEVER retried on a timeout or a dropped connection:
the request may have landed, and a blind retry is a second project or a second
conversion. Only a 429 (which by definition was not processed) is retried. Polling
GETs are retried freely.

CREDENTIALS
-----------
`ELEVENLABS_API_KEY` from the ENVIRONMENT ONLY. Never printed, never an argument,
redacted as `<redacted>` in the dry run. To use the AWS-held key for one command:

    ELEVENLABS_API_KEY="$(aws secretsmanager get-secret-value \
        --secret-id ice-hockey-production/elevenlabs-api-key --profile ice-hockey \
        --region eu-west-2 --query SecretString --output text)" \
      python3 scripts/synthesize_studio.py SCRIPT.md

USAGE
-----
    python3 scripts/synthesize_studio.py podcast_style_b/shooting.script.local.md --dry-run
    python3 scripts/synthesize_studio.py podcast_style_b/shooting.script.local.md
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import pathlib
import subprocess
import sys
import time
import urllib.error
import urllib.request
import uuid

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from synthesize_style_b import SENTENCE_END, Failure, extract_body  # noqa: E402

API = "https://api.elevenlabs.io/v1"

DEFAULT_VOICE_ID = "L0Dsvb3SLTyegXwtm47J"
DEFAULT_MODEL_ID = "eleven_v4"
DEFAULT_STABILITY = 0.30
DEFAULT_SIMILARITY = 0.50
# Pro: "16-bit, 44.1 kHz WAV, or 192 kbps MP3 (Ultra Lossless)". wav keeps the
# lossless render; mp3 asks the stream endpoint to convert_to_mpeg.
DEFAULT_OUTPUT_FORMAT = "wav"
DEFAULT_QUALITY_PRESET = "ultra_lossless"

# Documented Studio limits (help-center: project size limitations).
MAX_PARAGRAPH_CHARS = 5000
MAX_PARAGRAPHS_PER_CHAPTER = 400

MAGIC = [(b"RIFF", "wav"), (b"ID3", "mp3"), (b"\xff\xfb", "mp3"), (b"\xff\xf3", "mp3"),
         (b"\xff\xf2", "mp3"), (b"fLaC", "flac"), (b"PK\x03\x04", "zip"), (b"OggS", "ogg")]


# ────────────────────────────────── input ──────────────────────────────────

def paragraphs(body: str) -> list[str]:
    """One Studio paragraph per script paragraph; over-long ones split at sentence ends.

    ⚠️ A script paragraph over 5,000 characters becomes SEVERAL Studio paragraphs,
    which may add a paragraph-length pause the script did not ask for. It is
    reported, never silent. A single sentence over the cap is a hard error.
    """
    out: list[str] = []
    for para in (p.strip() for p in body.replace("\r\n", "\n").split("\n\n")):
        para = " ".join(para.split())
        if not para:
            continue
        if len(para) <= MAX_PARAGRAPH_CHARS:
            out.append(para)
            continue
        print(f"synthesize_studio: WARNING — a {len(para):,}-char paragraph is over "
              f"Studio's {MAX_PARAGRAPH_CHARS:,} cap and is split at sentence ends; "
              f"listen for an extra pause.\n  {para[:80]}...", file=sys.stderr)
        buf = ""
        for s in SENTENCE_END.split(para):
            if len(s) > MAX_PARAGRAPH_CHARS:
                raise Failure(f"a single sentence is {len(s):,} characters, over "
                              f"Studio's {MAX_PARAGRAPH_CHARS:,}-character paragraph cap")
            if buf and len(buf) + 1 + len(s) > MAX_PARAGRAPH_CHARS:
                out.append(buf)
                buf = s
            else:
                buf = f"{buf} {s}".strip()
        if buf:
            out.append(buf)
    if not out:
        raise Failure("no paragraphs in the spoken body")
    if len(out) > MAX_PARAGRAPHS_PER_CHAPTER:
        raise Failure(f"{len(out)} paragraphs, over Studio's {MAX_PARAGRAPHS_PER_CHAPTER} "
                      "per chapter; this script makes one chapter and will not guess a split")
    return out


def episode_stem(path: pathlib.Path) -> str:
    name = path.name
    for suffix in (".script.local.md", ".local.md", ".md", ".txt"):
        if name.endswith(suffix):
            return name[: -len(suffix)]
    return path.stem


# ──────────────────────────────── requests ─────────────────────────────────

def build_create_fields(args, paras: list[str], name: str) -> list[tuple[str, str]]:
    content = [{
        "name": name,
        "blocks": [{"sub_type": "p",
                    "nodes": [{"type": "tts_node", "voice_id": args.voice_id, "text": p}]}
                   for p in paras],
    }]
    voice_settings = {"voice_id": args.voice_id, "stability": args.stability,
                      "similarity_boost": args.similarity}
    fields = [
        ("name", name),
        ("default_model_id", args.model),
        ("default_paragraph_voice_id", args.voice_id),
        ("default_title_voice_id", args.voice_id),
        ("from_content_json", json.dumps(content, ensure_ascii=False)),
        ("quality_preset", args.quality_preset),
        # "encoded as a list of JSON strings" — one form part per entry.
        ("voice_settings", json.dumps(voice_settings)),
        ("auto_convert", "false"),  # convert is a separate, recorded, billable step
        ("volume_normalization", "true" if args.volume_normalization else "false"),
        ("language", "en"),
    ]
    return fields


def multipart(fields: list[tuple[str, str]]) -> tuple[bytes, str]:
    boundary = f"----studio{uuid.uuid4().hex}"
    out = bytearray()
    for k, v in fields:
        out += (f"--{boundary}\r\nContent-Disposition: form-data; name=\"{k}\"\r\n\r\n"
                ).encode() + v.encode("utf-8") + b"\r\n"
    out += f"--{boundary}--\r\n".encode()
    return bytes(out), f"multipart/form-data; boundary={boundary}"


def call(method: str, path: str, key: str, *, data: bytes | None = None,
         ctype: str | None = None, timeout: int = 120, retry: str = "safe",
         raw: bool = False):
    """retry='safe' retries 429/5xx/network; retry='429' retries only a 429."""
    url = f"{API}{path}"
    last: Exception | None = None
    for attempt in range(1, 6):
        headers = {"xi-api-key": key}
        if ctype:
            headers["Content-Type"] = ctype
        req = urllib.request.Request(url, data=data, method=method, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                body = r.read()
                return body if raw else (json.loads(body) if body else {})
        except urllib.error.HTTPError as e:
            detail = e.read()[:600].decode("utf8", "replace")
            if e.code == 429 or (retry == "safe" and e.code >= 500):
                last = Failure(f"{method} {path}: HTTP {e.code} — {detail}")
            else:
                raise Failure(f"{method} {path}: HTTP {e.code} — {detail}") from None
        except (urllib.error.URLError, TimeoutError, OSError) as e:
            if retry != "safe":
                raise Failure(f"{method} {path}: {e}. NOT retried — the request may have "
                              "landed; check the project in Studio before rerunning.") from None
            last = Failure(f"{method} {path}: {e}")
        wait = 2 ** attempt
        print(f"    retry {attempt} in {wait}s — {last}", file=sys.stderr)
        time.sleep(wait)
    raise Failure(f"gave up: {last}")


# ──────────────────────────────── sidecar ──────────────────────────────────

def load_state(path: pathlib.Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}


def save_state(path: pathlib.Path, state: dict) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(state, indent=2) + "\n", encoding="utf-8")
    tmp.replace(path)


def fingerprint(paras: list[str], args) -> str:
    material = json.dumps({"paras": paras, "voice": args.voice_id, "model": args.model,
                           "stability": args.stability, "similarity": args.similarity,
                           "quality_preset": args.quality_preset,
                           "volume_normalization": args.volume_normalization},
                          sort_keys=True)
    return hashlib.sha256(material.encode()).hexdigest()[:16]


# ────────────────────────────────── steps ──────────────────────────────────

def verify_project(project: dict, args) -> None:
    """Stop BEFORE conversion if Studio substituted the model or the settings."""
    got = project.get("default_model_id")
    if got != args.model:
        raise Failure(f"Studio created the project with default_model_id={got!r}, not "
                      f"{args.model!r}. Nothing has been converted or billed. The model "
                      "may not be available to Studio through the API.")
    for v in project.get("voices") or []:
        if v.get("voice_id") != args.voice_id:
            continue
        s, sim = v.get("stability"), v.get("similarity_boost")
        if (s is not None and abs(s - args.stability) > 1e-6) or \
           (sim is not None and abs(sim - args.similarity) > 1e-6):
            raise Failure(f"project voice settings are stability {s} / similarity {sim}, "
                          f"not {args.stability} / {args.similarity}. Nothing converted.")
        print(f"  verified        model {got}; voice {args.voice_id} at stability {s}, "
              f"similarity {sim}")
        return
    print("  ⚠️ the project's `voices` list did not include the voice; settings were NOT "
          "verified by read-back (model was).", file=sys.stderr)


def wait_converted(key: str, pid: str, args) -> dict:
    deadline = time.time() + args.max_wait
    while True:
        p = call("GET", f"/studio/projects/{pid}", key)
        chapters = p.get("chapters") or []
        for c in chapters:
            if c.get("last_conversion_error"):
                raise Failure(f"chapter {c.get('name')!r} reports a conversion error: "
                              f"{c['last_conversion_error']}")
        busy = p.get("state") != "default" or any(c.get("state") != "default" for c in chapters)
        prog = ", ".join(f"{(c.get('conversion_progress') or 0) * 100:.0f}%" for c in chapters)
        print(f"    state {p.get('state')}; chapters {prog or '-'}")
        if not busy and p.get("can_be_downloaded"):
            return p
        if not busy:
            raise Failure("the project is idle but not downloadable — the convert request "
                          "may never have landed. Check it in Studio; pass --reconvert to "
                          "send convert again (billable).")
        if time.time() > deadline:
            raise Failure(f"still converting after {args.max_wait}s. The project id is in "
                          "the sidecar; rerun to keep polling — it will not re-convert.")
        time.sleep(args.poll_interval)


def probe_duration(path: pathlib.Path) -> float | None:
    try:
        proc = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                               "-of", "default=nw=1:nk=1", str(path)],
                              capture_output=True, text=True)
    except FileNotFoundError:
        return None
    try:
        return float(proc.stdout.strip())
    except ValueError:
        return None


# ────────────────────────────────── main ───────────────────────────────────

def main(argv=None) -> int:
    ap = argparse.ArgumentParser(
        description="Synthesise a Style B script as one ElevenLabs Studio project.",
        epilog="There is deliberately no --api-key: ELEVENLABS_API_KEY is read from the "
               "environment only.")
    ap.add_argument("script", type=pathlib.Path)
    ap.add_argument("--out", type=pathlib.Path,
                    help="output audio; default <script dir>/<episode>.studio.<format>")
    ap.add_argument("--dry-run", action="store_true",
                    help="print the request bodies (key redacted); make NO API call")
    ap.add_argument("--model", default=DEFAULT_MODEL_ID)
    ap.add_argument("--voice-id", default=DEFAULT_VOICE_ID)
    ap.add_argument("--stability", type=float, default=DEFAULT_STABILITY)
    ap.add_argument("--similarity", type=float, default=DEFAULT_SIMILARITY)
    ap.add_argument("--output-format", choices=["wav", "mp3"], default=DEFAULT_OUTPUT_FORMAT,
                    help="wav = the lossless render as streamed; mp3 = convert_to_mpeg "
                         f"(default {DEFAULT_OUTPUT_FORMAT})")
    ap.add_argument("--quality-preset", default=DEFAULT_QUALITY_PRESET,
                    choices=["standard", "high", "ultra", "ultra_lossless"])
    ap.add_argument("--volume-normalization", action="store_true",
                    help="ask Studio for audiobook loudness post-processing (default off)")
    ap.add_argument("--new-project", action="store_true",
                    help="ignore the sidecar and create (and bill) a fresh project")
    ap.add_argument("--reconvert", action="store_true",
                    help="send convert again for the sidecar's project (billable)")
    ap.add_argument("--poll-interval", type=int, default=15)
    ap.add_argument("--max-wait", type=int, default=3600)
    args = ap.parse_args(argv)

    body = extract_body(args.script)
    paras = paragraphs(body)
    stem = episode_stem(args.script)
    out = args.out or args.script.parent / f"{stem}.studio.{args.output_format}"
    sidecar = out.with_name(out.name + ".json")
    name = f"{stem} (Style B)"
    fields = build_create_fields(args, paras, name)
    fp = fingerprint(paras, args)
    chars = sum(len(p) for p in paras)

    print(f"synthesize_studio: {args.script}")
    print(f"  body            {chars:,} characters in {len(paras)} paragraphs "
          f"(longest {max(len(p) for p in paras):,}; Studio cap {MAX_PARAGRAPH_CHARS:,})")
    print(f"  voice/model     {args.voice_id} · {args.model} · stability {args.stability} · "
          f"similarity {args.similarity}")
    print(f"  quality         {args.quality_preset} -> {args.output_format}")
    print(f"  output          {out}")
    print(f"  sidecar         {sidecar}  (fingerprint {fp})")
    print(f"  credits         ~{chars:,} if billed at 1 credit/character — the pricing page's "
          "generic TTS rate; the Studio rate for this model is NOT documented")

    if args.dry_run:
        def show(method, path, payload, ctype):
            print(f"\n  {method} {API}{path}")
            print(f"    xi-api-key: <redacted>")
            if ctype:
                print(f"    Content-Type: {ctype}")
            if payload is not None:
                print("    " + payload.replace("\n", "\n    "))
        lines = []
        for k, v in fields:
            if k == "from_content_json":
                c = json.loads(v)
                for ch in c:
                    for b in ch["blocks"]:
                        for n in b["nodes"]:
                            t = n["text"]
                            n["text"] = f"{t[:60]}... <{len(t):,} chars>" if len(t) > 60 else t
                v = json.dumps(c, indent=2, ensure_ascii=False)
            lines.append(f"[{k}] {v}")
        show("POST", "/studio/projects", "\n".join(lines), "multipart/form-data")
        print("    (from_content_json text abbreviated above; the full text is sent)")
        show("GET", "/studio/projects/<project_id>", None, None)
        print("    -> check default_model_id and voices[] BEFORE converting")
        show("POST", "/studio/projects/<project_id>/convert", None, None)
        show("GET", "/studio/projects/<project_id>", None, None)
        print(f"    -> poll every {args.poll_interval}s until state 'default', "
              f"max {args.max_wait}s")
        show("GET", "/studio/projects/<project_id>/snapshots", None, None)
        show("GET", "/studio/projects/<project_id>/snapshots/<snapshot_id>", None, None)
        show("POST", "/studio/projects/<project_id>/snapshots/<snapshot_id>/stream",
             json.dumps({"convert_to_mpeg": args.output_format == "mp3"}), "application/json")
        state = load_state(sidecar)
        if state:
            print(f"\n  sidecar exists: project {state.get('project_id')}, "
                  f"phase {state.get('phase')}, fingerprint "
                  f"{'MATCHES' if state.get('fingerprint') == fp else 'DIFFERS'}")
        print("\nsynthesize_studio: DRY RUN — no API call was made, no credits spent.")
        return 0

    key = os.environ.get("ELEVENLABS_API_KEY", "").strip()
    if not key:
        raise Failure("ELEVENLABS_API_KEY is not set in the environment")

    state = {} if args.new_project else load_state(sidecar)
    if state and state.get("fingerprint") != fp:
        raise Failure(f"{sidecar} records project {state.get('project_id')} for DIFFERENT "
                      "text or settings. Rerunning would bill a new project; pass "
                      "--new-project to do that deliberately.")
    if args.reconvert and state.get("phase") in ("converting", "converted", "downloaded"):
        state["phase"] = "verified"
    out.parent.mkdir(parents=True, exist_ok=True)

    if not state.get("project_id"):
        data, ctype = multipart(fields)
        print("\n  creating project ...")
        resp = call("POST", "/studio/projects", key, data=data, ctype=ctype, retry="429")
        pid = (resp.get("project") or {}).get("project_id")
        if not pid:
            raise Failure(f"create returned no project_id: {str(resp)[:300]}")
        state = {"project_id": pid, "fingerprint": fp, "phase": "created",
                 "script": str(args.script), "model": args.model, "voice_id": args.voice_id,
                 "created_unix": int(time.time())}
        save_state(sidecar, state)
        print(f"  project         {pid} (recorded in sidecar)")
    pid = state["project_id"]

    if state["phase"] == "created":
        # Wait out 'creating', then read back what Studio actually set up.
        for _ in range(60):
            p = call("GET", f"/studio/projects/{pid}", key)
            if p.get("state") != "creating":
                break
            time.sleep(5)
        verify_project(p, args)
        state["phase"] = "verified"
        save_state(sidecar, state)

    if state["phase"] == "verified":
        print("  converting (this is the billable step) ...")
        # Recorded BEFORE the call: if the connection drops after the request lands,
        # a rerun must poll, not convert (and bill) a second time.
        state.update(phase="converting", convert_requested_unix=int(time.time()))
        save_state(sidecar, state)
        resp = call("POST", f"/studio/projects/{pid}/convert", key, retry="429")
        if resp.get("status") != "ok":
            raise Failure(f"convert did not return status ok: {resp}")

    if state["phase"] == "converting":
        wait_converted(key, pid, args)
        snaps = call("GET", f"/studio/projects/{pid}/snapshots", key).get("snapshots") or []
        if not snaps:
            raise Failure("conversion finished but the project has no snapshot")
        snap = max(snaps, key=lambda s: s.get("created_at_unix", 0))
        state.update(phase="converted", snapshot_id=snap["project_snapshot_id"])
        save_state(sidecar, state)

    sid = state["snapshot_id"]
    meta = call("GET", f"/studio/projects/{pid}/snapshots/{sid}", key)
    expected = meta.get("audio_duration_secs")
    print(f"  downloading snapshot {sid} ({expected or '?'} s) ...")
    audio = call("POST", f"/studio/projects/{pid}/snapshots/{sid}/stream", key,
                 data=json.dumps({"convert_to_mpeg": args.output_format == "mp3"}).encode(),
                 ctype="application/json", timeout=600, raw=True)
    if not audio:
        raise Failure("stream returned an empty body")
    kind = next((ext for magic, ext in MAGIC if audio.startswith(magic)), None)
    if kind is None:
        raise Failure(f"unrecognised audio container (first bytes {audio[:8]!r}); "
                      "nothing written as the episode")
    if kind != args.output_format:
        out = out.with_suffix(f".{kind}")
        print(f"  ⚠️ Studio returned {kind}, not {args.output_format}; writing {out.name}",
              file=sys.stderr)
    part = out.with_name(out.name + ".part")
    part.write_bytes(audio)
    got = probe_duration(part)
    if expected and got is not None and got < expected * 0.99:
        raise Failure(f"downloaded {got:.1f}s against {expected:.1f}s reported — a PARTIAL "
                      f"episode, left at {part}. Rerun to download again (no re-conversion).")
    part.replace(out)
    state.update(phase="downloaded", output=str(out))
    save_state(sidecar, state)
    print(f"\n  wrote           {out}  ({len(audio) / 1e6:.1f} MB"
          + (f", {got:.0f}s" if got else ", duration not measured — no ffprobe") + ")")
    print("\n⚠️ Not listened to. Stability 0.30 on eleven_v4 is chosen and unheard.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Failure as e:
        print(f"synthesize_studio: {e}", file=sys.stderr)
        sys.exit(1)
    except KeyboardInterrupt:
        print("\nsynthesize_studio: interrupted; the sidecar keeps the project id",
              file=sys.stderr)
        sys.exit(130)
