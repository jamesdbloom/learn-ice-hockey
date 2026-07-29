#!/usr/bin/env python3
"""Assemble a NotebookLM episode source bundle from corpus documents.

NotebookLM has no API, so generation itself is a human pasting into a browser.
What this automates is the half either side of that: the source bundle, and the
provenance that makes an episode reproducible.

It writes **one file** — `<slug>__sources.md`. It does not write the prompt;
that is Step 2 of SKILL.md, assembled from `prompt_constraints.md` followed by
`project/podcast_generation_prompt_longer.md`, in that order.

Grouping is by layer (spec §7.3) rather than per-document, because the two-host
format needs material to work with.

The commit stamp and per-document SHA-256 are the point. §7.3 asks that episodes
record which documents fed them so they can be regenerated when the content
changes; a hash is what makes "has this changed since?" answerable later, and
nothing else in the pipeline records it.

Usage::

    python3 build_episode.py <out_dir> "<Episode Title>" <doc.md> [doc.md ...]

Standard library only. Run from the repository root.
"""

from __future__ import annotations

import hashlib
import re
import subprocess
import sys
from pathlib import Path


def head_commit() -> str:
    """Short SHA of HEAD, or 'unknown' outside a repository."""
    try:
        out = subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"],
            capture_output=True, text=True, check=True,
        ).stdout.strip()
        return out or "unknown"
    except (subprocess.CalledProcessError, FileNotFoundError):
        return "unknown"


def provenance_rows(paths: list[Path]) -> str:
    """One markdown table row per source document."""
    rows = []
    for path in paths:
        raw = path.read_bytes()
        digest = hashlib.sha256(raw).hexdigest()[:12]
        lines = raw.decode("utf-8").count("\n") + 1
        rows.append(f"| `{path.as_posix()}` | {lines} | `{digest}` |")
    return "\n".join(rows)


def main(argv: list[str]) -> int:
    if len(argv) < 3:
        print('usage: build_episode.py <out_dir> "<Episode Title>" '
              "<doc.md> [doc.md ...]", file=sys.stderr)
        return 2

    out_dir, title, *docs = argv
    paths = [Path(d) for d in docs]

    missing = [p for p in paths if not p.is_file()]
    if missing:
        for path in missing:
            print(f"not found: {path}", file=sys.stderr)
        return 2

    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    slug = re.sub(r"[^a-z0-9]+", "_", title.lower()).strip("_")

    parts = [
        f"# {title}",
        "",
        "*Source bundle for a NotebookLM Audio Overview, assembled from the ice",
        "hockey learning corpus. Do not edit here — edit the source documents.*",
        "",
        f"**Corpus commit:** `{head_commit()}`",
        "",
        "| Document | Lines | SHA-256 (first 12) |",
        "|---|---|---|",
        provenance_rows(paths),
        "",
        "---",
    ]

    for path in paths:
        parts.append(f"\n\n<!-- ===== BEGIN {path.as_posix()} ===== -->\n")
        parts.append(path.read_text(encoding="utf-8"))
        parts.append(f"\n<!-- ===== END {path.as_posix()} ===== -->\n")

    bundle = out / f"{slug}__sources.md"
    bundle.write_text("\n".join(parts), encoding="utf-8")

    text = bundle.read_text(encoding="utf-8")
    print(f"{bundle}: {len(paths)} documents, {len(text):,} characters")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
