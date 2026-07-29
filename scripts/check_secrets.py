#!/usr/bin/env python3
"""Fail the build if account-identifying or credential-shaped strings are committed.

This exists because docs/aws-design.md stated the rule — "A public repository.
Nothing account-identifying may be committed." — three lines after committing
the AWS account id, and nothing noticed for four days across a public repo.
Prose stating a policy is not enforcement.

Scope: tracked files only. `~/.config/ice-hockey/env`, `infra/backend.hcl` and
`infra/terraform.tfvars` legitimately hold these values and are gitignored;
this scanner deliberately never reads them.

What it will not do: it will not embed the account id in order to search for
it. A scanner carrying the secret is the leak it is trying to prevent. It
matches the *shape* instead, and additionally cross-checks against
$ICE_HOCKEY_AWS_ACCOUNT_ID when that is exported, so a local run is stricter
than CI without either one hardcoding anything.

Usage:
    python3 scripts/check_secrets.py [--quiet]

Exit status: 0 clean, 1 findings, 2 could not run.
"""

from __future__ import annotations

import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Files that may legitimately discuss these shapes. Keep this list short and
# justify every entry — an allowlist is how a scanner quietly stops working.
ALLOWLIST = {
    # This file: the patterns below are themselves account-id-shaped.
    "scripts/check_secrets.py",
}

# Binary and generated paths worth skipping outright.
SKIP_DIRS = {".git", "node_modules", "dist", ".astro", "__pycache__", "audio"}
SKIP_SUFFIXES = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".pdf",
                 ".mp3", ".m4a", ".woff", ".woff2", ".ttf", ".zip"}


class Rule:
    def __init__(self, name: str, pattern: str, why: str, ignore: str | None = None):
        self.name = name
        self.re = re.compile(pattern)
        self.why = why
        self.ignore = re.compile(ignore) if ignore else None


RULES = [
    Rule(
        "aws-account-id",
        # 12 consecutive digits, not part of a longer run of digits.
        r"(?<![0-9])[0-9]{12}(?![0-9])",
        "looks like an AWS account id — keep it in ~/.config/ice-hockey/env",
        # Timestamps, hashes-in-digits and Terraform lock ids are not account
        # ids. Anything on a line already naming an env var is a reference,
        # not a value. `123456789012` is AWS's own documentation placeholder
        # and appears in infra/bootstrap/terraform.tfvars.example; it is
        # ignored by value rather than by filename, because a real id sitting
        # in an .example file would still be a real leak.
        ignore=(
            r"ICE_HOCKEY_AWS_ACCOUNT_ID|TF_VAR_|example|EXAMPLE"
            r"|123456789012|0{12}|1{12}"
        ),
    ),
    Rule(
        "aws-access-key-id",
        r"(?<![A-Z0-9])(AKIA|ASIA|AIDA|AROA|AGPA|ANPA|ANVA|APKA)[A-Z0-9]{16}(?![A-Z0-9])",
        "looks like an AWS access key id — this project uses OIDC, so there "
        "should be no static keys anywhere",
    ),
    Rule(
        "private-key",
        r"-----BEGIN (RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----",
        "a private key block",
    ),
    Rule(
        "aws-secret-access-key",
        # Only flag when a line actually names the field: a bare 40-char
        # base64-ish run matches far too much (Pagefind hashes, SRI digests).
        r"(?i)aws_secret_access_key\s*[=:]\s*['\"]?[A-Za-z0-9/+=]{40}",
        "an AWS secret access key",
    ),
]

# When exported, the real value is matched literally as well — this catches it
# even if it appears in a shape the patterns above miss (spaced, hyphenated).
LIVE_ACCOUNT = os.environ.get("ICE_HOCKEY_AWS_ACCOUNT_ID", "").strip()


def tracked_files() -> list[str]:
    out = subprocess.run(
        ["git", "-C", str(ROOT), "ls-files"],
        capture_output=True, text=True, check=True,
    ).stdout
    return [p for p in out.splitlines() if p]


def should_scan(rel: str) -> bool:
    if rel in ALLOWLIST:
        return False
    parts = Path(rel).parts
    if any(p in SKIP_DIRS for p in parts):
        return False
    if Path(rel).suffix.lower() in SKIP_SUFFIXES:
        return False
    return True


def main() -> int:
    quiet = "--quiet" in sys.argv
    try:
        files = tracked_files()
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        print(f"check_secrets: cannot list tracked files: {exc}", file=sys.stderr)
        return 2

    findings: list[tuple[str, int, str, str, str]] = []
    scanned = 0

    for rel in files:
        if not should_scan(rel):
            continue
        path = ROOT / rel
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, FileNotFoundError, IsADirectoryError):
            continue
        scanned += 1

        for lineno, line in enumerate(text.splitlines(), 1):
            for rule in RULES:
                if rule.ignore and rule.ignore.search(line):
                    continue
                m = rule.re.search(line)
                if m:
                    findings.append((rel, lineno, rule.name, rule.why, m.group(0)))
            if LIVE_ACCOUNT and LIVE_ACCOUNT in line:
                findings.append(
                    (rel, lineno, "live-account-id",
                     "the configured AWS account id appears verbatim", LIVE_ACCOUNT)
                )

    if findings:
        print(f"check_secrets: {len(findings)} finding(s)\n", file=sys.stderr)
        for rel, lineno, name, why, hit in findings:
            # The match is never printed, not even partially. CI logs for a
            # public repo are themselves public, so a scanner that echoes the
            # secret to prove it found the secret has published it a second
            # time — and showing "first two … last two" of a 12-digit account
            # id gives away a third of it. file:line locates it precisely
            # enough; whoever is fixing it can open the file.
            print(f"  {rel}:{lineno}: [{name}] {why}", file=sys.stderr)
            print(f"      matched {len(hit)} characters (not shown)", file=sys.stderr)
        print(
            "\nIf a finding is a false positive, add a narrow ignore to the rule "
            "in scripts/check_secrets.py — do not widen ALLOWLIST to a whole file.",
            file=sys.stderr,
        )
        return 1

    if not quiet:
        note = "" if LIVE_ACCOUNT else " (set ICE_HOCKEY_AWS_ACCOUNT_ID for a stricter run)"
        print(f"check_secrets: {scanned} tracked files, no findings{note}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
