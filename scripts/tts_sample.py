#!/usr/bin/env python3
"""Synthesise one script on every TTS engine we have credentials for.

⚠️ NOT A CHECKER AND NOT A GATE. A one-shot comparison harness for the ear test
that `project/plans/PODCAST_AUTOMATION_LOCAL.md` says must happen before any
engine decision. It writes audio to a directory you name and touches nothing else.

WHY IT EXISTS
-------------
The engine survey priced five vendors and heard exactly one of them. Every
quality claim about the others is their own marketing. This makes the ear test a
single command instead of four separate integrations written under time pressure
on the day someone finally has the keys.

⚠️ THE DECISION IS SINGLE-VOICE. Multi-speaker dialogue was dropped on 18
September 2026: the owner judged the value of two people talking to each other too
low against the quality risk, and a single narrator removes the turn-boundary
prosody problem that made earlier stitched attempts sound electronic. ⚠️ **So do
NOT re-add a dialogue path here** — it widens the engine field rather than
narrowing it, and OpenAI, which has no multi-speaker TTS at all, is back in
contention precisely because of this decision.

CREDENTIALS — each engine is skipped, loudly, when its key is absent
-------------------------------------------------------------------
  POLLY          AWS_PROFILE (already working: `ice-hockey`, eu-west-2)
  ELEVENLABS     ELEVENLABS_API_KEY
  OPENAI         OPENAI_API_KEY
  GOOGLE         GOOGLE_API_KEY   (Generative Language API; covers Gemini-TTS)
  GOOGLE_CLOUD   GOOGLE_API_KEY   (Cloud Text-to-Speech; covers Chirp 3 HD)

⚠️ NEVER PASS A KEY ON THE COMMAND LINE — it lands in shell history and in `ps`.
This reads the environment only, and prints no key, ever.

USAGE
-----
    python3 scripts/tts_sample.py <script.txt> --out ~/Downloads/tts-compare
    python3 scripts/tts_sample.py <script.txt> --out DIR --engines polly,openai

The script file is PLAIN TEXT, not SSML — the engines disagree about SSML support
(Polly's generative engine rejects `<emphasis>`, which cost a synthesis attempt on
18 September) and the point of this harness is to compare voices on identical
input, not to compare SSML dialects.
"""

from __future__ import annotations

import argparse
import json
import os
import pathlib
import subprocess
import sys
import urllib.error
import urllib.request

# One voice per engine, chosen for an en-GB teaching narration. Change
# deliberately: comparing different voices tells you nothing about the engines.
VOICES = {
    "polly":        {"voice": "Amy",     "note": "en-GB generative; Brian is the male alternative"},
    "elevenlabs":   {"voice": "Rachel",  "note": "swap for a British voice id from your account"},
    "openai":       {"voice": "alloy",   "note": "gpt-4o-mini-tts; `instructions` steers tone"},
    "google":       {"voice": "Kore",    "note": "Gemini 2.5 Flash TTS"},
    "google_cloud": {"voice": "en-GB-Chirp3-HD-Aoede", "note": "Chirp 3 HD"},
}


def _post(url: str, body: dict, headers: dict, raw: bool = False) -> bytes:
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(), headers={"Content-Type": "application/json", **headers}
    )
    with urllib.request.urlopen(req, timeout=180) as r:
        return r.read()


def polly(text: str, out: pathlib.Path) -> str:
    """Polly needs no HTTP here — the AWS CLI is already authenticated."""
    dest = out / "polly_generative_Amy.mp3"
    proc = subprocess.run(
        ["aws", "polly", "synthesize-speech",
         "--text-type", "text", "--text", text,
         "--engine", "generative", "--voice-id", VOICES["polly"]["voice"],
         "--output-format", "mp3", str(dest)],
        capture_output=True, text=True,
        env={**os.environ, "AWS_PROFILE": os.environ.get("AWS_PROFILE", "ice-hockey"),
             "AWS_REGION": os.environ.get("AWS_REGION", "eu-west-2")},
    )
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr.strip().splitlines()[-1] if proc.stderr else "aws polly failed")
    return str(dest)


def elevenlabs(text: str, out: pathlib.Path) -> str:
    key = os.environ["ELEVENLABS_API_KEY"]
    # Voice ids are per-account; this is the documented public "Rachel".
    vid = os.environ.get("ELEVENLABS_VOICE_ID", "21m00Tcm4TlvDq8ikWAM")
    data = _post(
        f"https://api.elevenlabs.io/v1/text-to-speech/{vid}",
        {"text": text, "model_id": "eleven_multilingual_v2"},
        {"xi-api-key": key, "Accept": "audio/mpeg"},
    )
    dest = out / "elevenlabs_v2.mp3"
    dest.write_bytes(data)
    return str(dest)


def openai(text: str, out: pathlib.Path) -> str:
    key = os.environ["OPENAI_API_KEY"]
    data = _post(
        "https://api.openai.com/v1/audio/speech",
        {"model": "gpt-4o-mini-tts", "voice": VOICES["openai"]["voice"], "input": text,
         # The `instructions` field is the reason OpenAI is worth testing at all:
         # it steers tone, pacing and delivery, which no other engine here exposes.
         "instructions": "Warm, unhurried teaching voice. Explain as if to one "
                         "person sitting beside you. Let the pauses do work."},
        {"Authorization": f"Bearer {key}"},
    )
    dest = out / "openai_gpt4o_mini_tts.mp3"
    dest.write_bytes(data)
    return str(dest)


def google(text: str, out: pathlib.Path) -> str:
    """Gemini-TTS via the Generative Language API. Returns base64 PCM, not mp3."""
    import base64
    key = os.environ["GOOGLE_API_KEY"]
    data = _post(
        "https://generativelanguage.googleapis.com/v1beta/models/"
        f"gemini-2.5-flash-preview-tts:generateContent?key={key}",
        {"contents": [{"parts": [{"text": text}]}],
         "generationConfig": {
             "responseModalities": ["AUDIO"],
             "speechConfig": {"voiceConfig": {"prebuiltVoiceConfig":
                              {"voiceName": VOICES["google"]["voice"]}}}}},
        {},
    )
    payload = json.loads(data)
    b64 = payload["candidates"][0]["content"]["parts"][0]["inlineData"]["data"]
    raw = out / "gemini_flash_tts.pcm"
    raw.write_bytes(base64.b64decode(b64))
    # ⚠️ Gemini returns headerless 24 kHz signed 16-bit mono PCM. Without these
    # exact flags ffmpeg guesses, and the result is noise at the wrong speed.
    dest = out / "gemini_flash_tts.mp3"
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "s16le",
                    "-ar", "24000", "-ac", "1", "-i", str(raw), str(dest)], check=True)
    raw.unlink()
    return str(dest)


def google_cloud(text: str, out: pathlib.Path) -> str:
    """Chirp 3 HD via Cloud Text-to-Speech. Same API key works if the API is enabled."""
    import base64
    key = os.environ["GOOGLE_API_KEY"]
    data = _post(
        f"https://texttospeech.googleapis.com/v1/text:synthesize?key={key}",
        {"input": {"text": text},
         "voice": {"languageCode": "en-GB", "name": VOICES["google_cloud"]["voice"]},
         "audioConfig": {"audioEncoding": "MP3"}},
        {},
    )
    dest = out / "google_chirp3hd.mp3"
    dest.write_bytes(base64.b64decode(json.loads(data)["audioContent"]))
    return str(dest)


ENGINES = {
    "polly": (polly, lambda: True),
    "elevenlabs": (elevenlabs, lambda: bool(os.environ.get("ELEVENLABS_API_KEY"))),
    "openai": (openai, lambda: bool(os.environ.get("OPENAI_API_KEY"))),
    "google": (google, lambda: bool(os.environ.get("GOOGLE_API_KEY"))),
    "google_cloud": (google_cloud, lambda: bool(os.environ.get("GOOGLE_API_KEY"))),
}


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("script", type=pathlib.Path, help="plain-text script to speak")
    ap.add_argument("--out", type=pathlib.Path, required=True, help="output directory")
    ap.add_argument("--engines", help="comma-separated subset; default is all available")
    args = ap.parse_args(argv)

    text = args.script.read_text().strip()
    if not text:
        print("tts_sample: script is empty", file=sys.stderr)
        return 1
    args.out.mkdir(parents=True, exist_ok=True)

    wanted = args.engines.split(",") if args.engines else list(ENGINES)
    print(f"tts_sample: {len(text)} characters, ~{len(text.split())/150*60:.0f}s at 150 wpm\n")

    ran = skipped = failed = 0
    for name in wanted:
        if name not in ENGINES:
            print(f"  {name:<14} UNKNOWN ENGINE"); continue
        fn, available = ENGINES[name]
        if not available():
            print(f"  {name:<14} SKIPPED — credential not set ({VOICES[name]['note']})")
            skipped += 1
            continue
        try:
            path = fn(text, args.out)
            print(f"  {name:<14} -> {path}")
            ran += 1
        except (urllib.error.HTTPError, urllib.error.URLError, RuntimeError, KeyError) as e:
            # ⚠️ Report and continue. One missing engine must not cost the others.
            detail = getattr(e, "reason", None) or str(e)
            if isinstance(e, urllib.error.HTTPError):
                detail = f"HTTP {e.code} — {e.read()[:200].decode('utf8', 'replace')}"
            print(f"  {name:<14} FAILED — {detail}")
            failed += 1

    print(f"\ntts_sample: {ran} synthesised, {skipped} skipped, {failed} failed")
    if skipped:
        print("Set the missing keys and re-run; see PODCAST_AUTOMATION_LOCAL.md "
              "for the minimum setup steps per vendor.")
    # ⚠️ Measured 19 September 2026: with every engine skipped or failed and
    # zero synthesised, this returned 0 unconditionally — a clean exit code on
    # a run that produced no audio at all. An agent that checks the exit code,
    # as every brief in this repository instructs, would conclude the ear test
    # ran. It had synthesised nothing. Non-zero here is the whole fix.
    return 0 if ran else 1


if __name__ == "__main__":
    sys.exit(main())
