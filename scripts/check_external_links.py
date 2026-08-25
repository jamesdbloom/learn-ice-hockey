#!/usr/bin/env python3
"""check_external_links — link-rot detection against a captured baseline.

The corpus cites several hundred external sources. They rot. In a single day of
verification this corpus produced a redirect hijack, three hard 404s and two
soft-404s, which is why this exists as a scheduled job rather than a hopeful
assumption.

The job is **not** "are these URLs up". Absolute status is useless here: a
couple of dozen citations are 403 to every robot on earth but fine in a browser,
and a handful are deliberately retained *known-dead* links, labelled in the
content with the status the reader will meet. Reporting those every week trains
everyone to ignore the report. So this compares against
`project/verification/link_baseline.tsv` and reports **changes**.

Things learned the hard way on this corpus, all of which are implemented here:

  * **Use a browser user-agent.** Many hosts 403 a default Python agent and
    serve the page happily otherwise.
  * **A 200 is not proof of life.** Hockey Canada serves soft-404s: HTTP 200
    with a "page not found" body, at exactly 167,052 bytes. So the byte size is
    compared against the baseline and large deviations are flagged, and the body
    is sniffed for not-found markers.
  * **Follow redirects and report the final URL.** One domain in this corpus now
    301s to an unrelated commercial site — status 200, content worthless.
  * **Be polite.** Bounded concurrency, one request at a time per host with a
    minimum interval, timeouts, one retry on transient failure.
  * **Never seed the baseline with a naive markdown-link regex.** One that stops at
    the first closing parenthesis — the ``]( ... )`` shape with a ``[^)]+`` body —
    truncates any URL containing a closing parenthesis, and Wikipedia is full of
    them — `Corsi_(statistic)`, `Icing_(ice_hockey)`. Nine such rows sat in the
    baseline recorded as hard 404s. They were not dead: the truncated form 404s and
    the real one returns 200, so the file manufactured half of its own recorded link
    rot, and `check_external_links` then dutifully reported them as known-dead
    forever — which is precisely the "trains everyone to ignore the report" failure
    this script exists to avoid. `check_links.py`'s INLINE_LINK_RE handles balanced
    parentheses correctly and is the extractor to reuse. Repaired and refetched
    2026-08-25.

Exit code is non-zero only for **new breakage** — something that was alive at
baseline and is not any more. Recoveries, already-known-dead links and metadata
drift are reported but do not fail the job.

Usage
    python3 scripts/check_external_links.py                      # everything
    python3 scripts/check_external_links.py --sample 15          # random sample
    python3 scripts/check_external_links.py --limit 20           # first N rows
    python3 scripts/check_external_links.py --summary "$GITHUB_STEP_SUMMARY"
    python3 scripts/check_external_links.py --json report.json --write-baseline new.tsv

Standard library only.
"""

from __future__ import annotations

import argparse
import json
import random
import re
import ssl
import sys
import threading
import time
import urllib.error
import urllib.request
import zlib
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable
from urllib.parse import urlsplit

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_BASELINE = REPO_ROOT / "project" / "verification" / "link_baseline.tsv"

# A real browser UA. Not cloaking — the citations are all publicly readable
# pages; several CDNs simply refuse anything that looks automated.
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
)
HEADERS = {
    "User-Agent": USER_AGENT,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,application/pdf;q=0.8,*/*;q=0.7",
    "Accept-Language": "en-GB,en;q=0.9",
    # Byte counts here mean **bytes on the wire**, and the baseline was captured
    # with exactly this Accept-Encoding. Verified: for every URL spot-checked,
    # `gzip, deflate` reproduces the baseline size to within a byte or two,
    # while an uncompressed fetch is 3–5x larger and every single row would be
    # reported as a change. Do not add `br` or `zstd` here — a smaller encoding
    # would silently look like a shrinking page. If the baseline is ever
    # recaptured with different headers, change both together.
    "Accept-Encoding": "gzip, deflate",
    "Connection": "close",
}

# Body sizes known to be a soft-404 rather than a page. Hockey Canada answers a
# missing URL with HTTP 200 and its "page not found" page, whose *uncompressed*
# size is this. (Measured again on 2026-07-28: 167,383 bytes — the page carries a
# changing footer, hence the 1% tolerance where this is used.)
SOFT_404_SIGNATURES: dict[str, set[int]] = {
    "hockeycanada.ca": {167052},
}

# Sniffed in the first chunk of an HTML body when the status says 200.
SOFT_404_MARKERS = (
    re.compile(rb"<title>[^<]{0,80}(404|page not found|not found|error)", re.I),
    re.compile(rb"(page (you requested|you are looking for) (could not be|cannot be|was not) found)", re.I),
    re.compile(rb"(this page (does not exist|isn.t available))", re.I),
)

MAX_READ = 4 * 1024 * 1024  # cap the download; one cited PDF is 30 MB
SNIFF_BYTES = 64 * 1024
SIZE_TOLERANCE = 0.25  # fraction; beyond this a size change is reported


# --------------------------------------------------------------------------
# Baseline
# --------------------------------------------------------------------------


@dataclass
class BaselineRow:
    url: str
    status: str
    size: int
    final_url: str
    note: str

    @property
    def status_code(self) -> int:
        try:
            return int(self.status)
        except ValueError:
            return 0

    @property
    def suspected_soft_404(self) -> bool:
        return "SOFT404" in self.note.upper()

    @property
    def was_alive(self) -> bool:
        """Alive at baseline: a 2xx that was not flagged as a soft-404."""
        return 200 <= self.status_code < 300 and not self.suspected_soft_404


def load_baseline(path: Path) -> list[BaselineRow]:
    rows: list[BaselineRow] = []
    with path.open(encoding="utf-8") as handle:
        header = handle.readline().rstrip("\n").split("\t")
        if header[:2] != ["url", "status"]:
            raise SystemExit(f"{path}: unexpected header {header!r}")
        for line in handle:
            line = line.rstrip("\n")
            if not line.strip():
                continue
            parts = line.split("\t")
            parts += [""] * (5 - len(parts))
            url, status, size, final_url, note = parts[:5]
            try:
                size_value = int(size)
            except ValueError:
                size_value = -1
            rows.append(BaselineRow(url.strip(), status.strip(), size_value, final_url.strip(), note.strip()))
    return rows


# --------------------------------------------------------------------------
# Fetching
# --------------------------------------------------------------------------


@dataclass
class FetchResult:
    url: str
    status: int
    size: int
    final_url: str
    error: str = ""
    truncated: bool = False
    soft_404: bool = False
    reason: str = ""
    elapsed: float = 0.0

    @property
    def alive(self) -> bool:
        return 200 <= self.status < 300 and not self.soft_404


class HostThrottle:
    """One request at a time per host, with a minimum gap between them."""

    def __init__(self, interval: float) -> None:
        self.interval = interval
        self._locks: dict[str, threading.Lock] = {}
        self._last: dict[str, float] = {}
        self._guard = threading.Lock()

    def lock_for(self, host: str) -> threading.Lock:
        with self._guard:
            return self._locks.setdefault(host, threading.Lock())

    def wait(self, host: str) -> None:
        with self._guard:
            last = self._last.get(host, 0.0)
        gap = self.interval - (time.monotonic() - last)
        if gap > 0:
            time.sleep(gap)

    def done(self, host: str) -> None:
        with self._guard:
            self._last[host] = time.monotonic()


def _decompress(body: bytes, encoding: str) -> bytes:
    """Best-effort decompression *for sniffing only* — the body may be truncated,
    so a partial inflate is a success, not an error."""
    if not encoding:
        return body
    wbits = 16 + zlib.MAX_WBITS if encoding == "gzip" else -zlib.MAX_WBITS
    try:
        decompressor = zlib.decompressobj(wbits)
        return decompressor.decompress(body, SNIFF_BYTES)
    except (OSError, zlib.error):
        try:  # deflate is served both raw and zlib-wrapped in the wild
            return zlib.decompressobj().decompress(body, SNIFF_BYTES)
        except (OSError, zlib.error):
            return body


def _decoded_size(raw: bytes, encoding: str, truncated: bool) -> int:
    """Uncompressed body size, or -1 if it cannot be known cheaply."""
    if truncated:
        return -1
    if not encoding:
        return len(raw)
    if len(raw) > 1024 * 1024:  # not worth inflating a megabyte to count it
        return -1
    wbits = 16 + zlib.MAX_WBITS if encoding == "gzip" else -zlib.MAX_WBITS
    for attempt in (wbits, zlib.MAX_WBITS):
        try:
            return len(zlib.decompressobj(attempt).decompress(raw))
        except (OSError, zlib.error):
            continue
    return -1


def _looks_soft_404(
    url: str, final_url: str, size: int, decoded_size: int, head: bytes, content_type: str
) -> tuple[bool, str]:
    host = urlsplit(final_url or url).netloc.lower()
    for known_host, sizes in SOFT_404_SIGNATURES.items():
        if not host.endswith(known_host):
            continue
        for signature in sizes:
            # The signature is an *uncompressed* size (that is how it was
            # observed during verification), so compare against the inflated
            # body — and allow a little drift, since the page carries a footer
            # that changes. Compare the wire size too, in case a future baseline
            # records it that way.
            for candidate in (decoded_size, size):
                if candidate > 0 and abs(candidate - signature) <= max(1, signature // 100):
                    return True, (
                        f"body is {candidate:,} bytes — {known_host}'s known soft-404 page "
                        f"(signature {signature:,})"
                    )
    if "html" in content_type.lower() or head[:15].lstrip().lower().startswith((b"<!doctype", b"<html")):
        for marker in SOFT_404_MARKERS:
            if marker.search(head):
                return True, "HTTP 200 but the body reads as a not-found page"
    return False, ""


def fetch(url: str, timeout: float, context: ssl.SSLContext) -> FetchResult:
    started = time.monotonic()
    request = urllib.request.Request(url, headers=HEADERS, method="GET")
    try:
        with urllib.request.urlopen(request, timeout=timeout, context=context) as response:
            raw = response.read(MAX_READ + 1)
            truncated = len(raw) > MAX_READ
            raw = raw[:MAX_READ]
            encoding = (response.headers.get("Content-Encoding") or "").lower().strip()
            declared = response.headers.get("Content-Length")
            # Wire bytes, to match the baseline. urllib does not decompress for
            # us, so len(raw) is exactly what came down the socket.
            if truncated:
                size = int(declared) if declared and declared.isdigit() else -1
            else:
                size = len(raw)
            body = _decompress(raw[: SNIFF_BYTES * 4], encoding)
            soft, reason = _looks_soft_404(
                url,
                response.geturl(),
                size,
                _decoded_size(raw, encoding, truncated),
                body[:SNIFF_BYTES],
                response.headers.get("Content-Type", ""),
            )
            return FetchResult(
                url=url,
                status=response.status,
                size=size,
                final_url=response.geturl(),
                truncated=truncated,
                soft_404=soft,
                reason=reason,
                elapsed=time.monotonic() - started,
            )
    except urllib.error.HTTPError as error:
        body = b""
        try:
            body = error.read(MAX_READ)
        except Exception:  # noqa: BLE001 - the body is a nicety, not the point
            pass
        return FetchResult(
            url=url,
            status=error.code,
            size=len(body),
            final_url=error.url or url,
            error=f"HTTP {error.code} {error.reason}",
            elapsed=time.monotonic() - started,
        )
    except urllib.error.URLError as error:
        return FetchResult(url, 0, 0, url, error=f"{type(error.reason).__name__}: {error.reason}",
                           elapsed=time.monotonic() - started)
    except (TimeoutError, OSError) as error:
        return FetchResult(url, 0, 0, url, error=f"{type(error).__name__}: {error}",
                           elapsed=time.monotonic() - started)
    except Exception as error:  # noqa: BLE001 - one bad URL must not kill the run
        return FetchResult(url, 0, 0, url, error=f"{type(error).__name__}: {error}",
                           elapsed=time.monotonic() - started)


TRANSIENT = {0, 408, 425, 429, 500, 502, 503, 504}


def fetch_with_retry(url: str, timeout: float, throttle: HostThrottle, context: ssl.SSLContext) -> FetchResult:
    host = urlsplit(url).netloc.lower()
    with throttle.lock_for(host):
        throttle.wait(host)
        try:
            result = fetch(url, timeout, context)
            if result.status in TRANSIENT:
                # Timeouts, connection resets and rate limits are usually noise.
                # One retry, after a pause; keep it only if it did better.
                time.sleep(2.0)
                retried = fetch(url, timeout, context)
                if retried.status not in TRANSIENT:
                    result = retried
            return result
        finally:
            throttle.done(host)


# --------------------------------------------------------------------------
# Comparison
# --------------------------------------------------------------------------

NEW_BREAKAGE = "new_breakage"
BLOCKED = "blocked"
STILL_DEAD = "still_dead"
RECOVERED = "recovered"
SIZE_CHANGE = "size_change"
REDIRECT_CHANGE = "redirect_change"
STATUS_DRIFT = "status_drift"
UNCHANGED = "unchanged"

# 401/403/429 mean "we don't like you", not "this page is gone". Two dozen
# citations in the baseline were already 403 at capture and read perfectly in a
# browser. So a citation that has *become* 403 gets its own bucket: reported,
# because it may be worth an archive link, but not treated as breakage unless
# --strict says so. A 404 or a dead host is a different matter entirely.
BLOCKING_STATUSES = {401, 403, 429}


@dataclass
class Finding:
    url: str
    category: str
    baseline_status: str
    baseline_size: int
    now_status: int
    now_size: int
    final_url: str
    detail: str = ""
    note: str = ""
    extra: dict = field(default_factory=dict)


def destination(url: str) -> tuple[str, str]:
    """Scheme-insensitive host and path — what a redirect actually *means*.

    The query string is left out on purpose. Springer and Wiley bounce through
    `?error=cookies_not_supported&code=<fresh uuid>`, so comparing whole URLs
    reports a "changed redirect" every single week for a page that has not
    moved. A hijack changes the host or the path; a session token does not.
    """
    parts = urlsplit(url)
    return parts.netloc.lower(), parts.path.rstrip("/").lower()


def classify(row: BaselineRow, result: FetchResult, blocked_hosts: set[str] | None = None) -> Finding:
    detail_bits: list[str] = []
    category = UNCHANGED

    if row.was_alive and not result.alive:
        if result.status in BLOCKING_STATUSES:
            category = BLOCKED
            detail_bits.append(f"was HTTP {row.status}, now HTTP {result.status} — refusing automated requests")
            host = urlsplit(row.url).netloc.lower()
            if blocked_hosts and host in blocked_hosts:
                detail_bits.append(
                    f"other citations on {host} were already {result.status} at baseline, "
                    "so this is the host's bot wall rather than a dead page"
                )
            else:
                detail_bits.append("check it by hand in a browser before treating it as lost")
        else:
            category = NEW_BREAKAGE
            if result.soft_404:
                detail_bits.append(result.reason)
            elif result.error:
                detail_bits.append(result.error)
            else:
                detail_bits.append(f"was HTTP {row.status}, now HTTP {result.status}")
    elif not row.was_alive and result.alive:
        category = RECOVERED
        detail_bits.append(f"was HTTP {row.status}{' (soft-404)' if row.suspected_soft_404 else ''}, now HTTP 200")
    elif not row.was_alive and not result.alive:
        category = STILL_DEAD
        detail_bits.append(
            f"known dead at baseline (HTTP {row.status}"
            f"{', soft-404' if row.suspected_soft_404 else ''}); now HTTP {result.status or 'no response'}"
        )
        if result.status != row.status_code:
            detail_bits.append(f"status moved {row.status} → {result.status}")
    else:
        # Both alive. Look for the quieter forms of rot.
        baseline_final = row.final_url if row.final_url and row.final_url != "-" else row.url
        if destination(result.final_url) != destination(baseline_final):
            category = REDIRECT_CHANGE
            detail_bits.append(f"redirects to a different place: `{baseline_final}` → `{result.final_url}`")
        if row.size > 0 and result.size >= 0:
            delta = abs(result.size - row.size) / row.size
            if delta > SIZE_TOLERANCE:
                if category == UNCHANGED:
                    category = SIZE_CHANGE
                direction = "shrank" if result.size < row.size else "grew"
                detail_bits.append(
                    f"body {direction} {delta:.0%} ({row.size:,} → {result.size:,} bytes)"
                    + (" — check for a soft-404 or a paywall" if result.size < row.size else "")
                )
        if category == UNCHANGED and result.status != row.status_code:
            category = STATUS_DRIFT
            detail_bits.append(f"status moved {row.status} → {result.status} (both fine)")

    return Finding(
        url=row.url,
        category=category,
        baseline_status=row.status,
        baseline_size=row.size,
        now_status=result.status,
        now_size=result.size,
        final_url=result.final_url,
        detail="; ".join(detail_bits),
        note=row.note if row.note != "-" else "",
        extra={"truncated": result.truncated, "elapsed": round(result.elapsed, 2)},
    )


# --------------------------------------------------------------------------
# Reporting
# --------------------------------------------------------------------------

TITLES = {
    NEW_BREAKAGE: "🔴 New breakage — was alive at baseline, is not now",
    BLOCKED: "🟣 Now blocked to robots — 401/403/429, probably still fine in a browser",
    RECOVERED: "🟢 Recovered — was dead at baseline, alive now",
    STILL_DEAD: "⚪ Known dead — unchanged, already labelled in the content",
    REDIRECT_CHANGE: "🟠 Redirect target changed — check it still cites what we said it does",
    SIZE_CHANGE: "🟡 Body size moved a lot — possible soft-404, paywall or rewrite",
    STATUS_DRIFT: "🔵 Status drift — still readable",
}
ORDER = [NEW_BREAKAGE, BLOCKED, REDIRECT_CHANGE, SIZE_CHANGE, RECOVERED, STATUS_DRIFT, STILL_DEAD]


def render_markdown(findings: list[Finding], checked: int, baseline_path: Path, sampled: str) -> str:
    buckets: dict[str, list[Finding]] = {key: [] for key in ORDER}
    unchanged = 0
    for finding in findings:
        if finding.category == UNCHANGED:
            unchanged += 1
        else:
            buckets[finding.category].append(finding)

    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = [
        "## External link check",
        "",
        f"`{baseline_path.name}` · {checked} URL(s) checked{sampled} · {stamp}",
        "",
        "| Outcome | Count |",
        "| --- | ---: |",
        f"| Unchanged | {unchanged} |",
    ]
    for key in ORDER:
        if buckets[key]:
            lines.append(f"| {TITLES[key].split(' — ')[0]} | {len(buckets[key])} |")
    lines.append("")

    if not any(buckets[key] for key in ORDER):
        lines.append("Nothing has changed since the baseline.")
        return "\n".join(lines) + "\n"

    for key in ORDER:
        rows = buckets[key]
        if not rows:
            continue
        lines += ["", f"### {TITLES[key]} ({len(rows)})", "", "| URL | Baseline | Now | Detail |", "| --- | --- | --- | --- |"]
        for finding in sorted(rows, key=lambda f: f.url):
            now = str(finding.now_status) if finding.now_status else "no response"
            size = f" · {finding.now_size:,} B" if finding.now_size > 0 else ""
            base_size = f" · {finding.baseline_size:,} B" if finding.baseline_size > 0 else ""
            detail = finding.detail.replace("|", "\\|")
            lines.append(
                f"| <{finding.url}> | {finding.baseline_status}{base_size} | {now}{size} | {detail} |"
            )
    lines.append("")
    return "\n".join(lines) + "\n"


def write_baseline(path: Path, rows: list[BaselineRow], results: dict[str, FetchResult]) -> None:
    with path.open("w", encoding="utf-8") as handle:
        handle.write("url\tstatus\tbytes\tfinal_url\tnote\n")
        for row in rows:
            result = results.get(row.url)
            if result is None:
                handle.write(f"{row.url}\t{row.status}\t{row.size}\t{row.final_url}\t{row.note or '-'}\n")
                continue
            note = row.note or "-"
            if result.soft_404 and "SOFT404" not in note.upper():
                note = "SOFT404?" if note == "-" else f"{note}; SOFT404?"
            handle.write(f"{result.url}\t{result.status}\t{result.size}\t{result.final_url}\t{note}\n")


# --------------------------------------------------------------------------
# Entry point
# --------------------------------------------------------------------------


def main(argv: Iterable[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    parser.add_argument("--baseline", default=str(DEFAULT_BASELINE), help="baseline TSV (default: project/verification/link_baseline.tsv)")
    parser.add_argument("--sample", type=int, default=0, help="check a random sample of N URLs")
    parser.add_argument("--limit", type=int, default=0, help="check only the first N URLs")
    parser.add_argument("--seed", type=int, default=None, help="seed for --sample, for reproducibility")
    parser.add_argument("--concurrency", type=int, default=6, help="parallel requests (default: 6)")
    parser.add_argument("--per-host-interval", type=float, default=1.0, help="minimum seconds between requests to one host")
    parser.add_argument("--timeout", type=float, default=25.0, help="per-request timeout in seconds")
    parser.add_argument("--summary", help="write the markdown report here (e.g. $GITHUB_STEP_SUMMARY)")
    parser.add_argument("--json", dest="json_path", help="write the findings as JSON here")
    parser.add_argument("--write-baseline", dest="new_baseline", help="write a refreshed baseline TSV here")
    parser.add_argument("-q", "--quiet", action="store_true", help="do not print progress")
    parser.add_argument(
        "--strict",
        action="store_true",
        help="also fail on citations that have started refusing robots (401/403/429)",
    )
    args = parser.parse_args(list(argv) if argv is not None else None)

    baseline_path = Path(args.baseline).resolve()
    if not baseline_path.is_file():
        print(f"check_external_links: no baseline at {baseline_path}", file=sys.stderr)
        return 2

    rows = load_baseline(baseline_path)
    total = len(rows)

    selected = rows
    sampled = ""
    if args.sample:
        rng = random.Random(args.seed)
        selected = rng.sample(rows, min(args.sample, total))
        sampled = f" (random sample of {len(selected)} from {total}, seed {args.seed})"
    elif args.limit:
        selected = rows[: args.limit]
        sampled = f" (first {len(selected)} of {total})"

    context = ssl.create_default_context()
    throttle = HostThrottle(args.per_host_interval)
    results: dict[str, FetchResult] = {}
    done = 0
    progress_lock = threading.Lock()

    def run(row: BaselineRow) -> tuple[BaselineRow, FetchResult]:
        nonlocal done
        result = fetch_with_retry(row.url, args.timeout, throttle, context)
        with progress_lock:
            done += 1
            if not args.quiet:
                flag = "ok " if result.alive else "DEAD"
                print(f"[{done}/{len(selected)}] {flag} {result.status:>3} {row.url}", file=sys.stderr)
        return row, result

    # Hosts that were already refusing robots when the baseline was captured.
    # Evidence, when a sibling URL on the same host starts doing the same.
    blocked_hosts = {
        urlsplit(row.url).netloc.lower()
        for row in rows
        if row.status_code in BLOCKING_STATUSES
    }

    findings: list[Finding] = []
    with ThreadPoolExecutor(max_workers=max(1, args.concurrency)) as pool:
        for row, result in pool.map(run, selected):
            results[row.url] = result
            findings.append(classify(row, result, blocked_hosts))

    report = render_markdown(findings, len(selected), baseline_path, sampled)
    print(report)

    if args.summary:
        with open(args.summary, "a", encoding="utf-8") as handle:
            handle.write(report)

    if args.json_path:
        payload = {
            "checked_at": datetime.now(timezone.utc).isoformat(),
            "baseline": str(baseline_path),
            "checked": len(selected),
            "findings": [asdict(finding) for finding in findings if finding.category != UNCHANGED],
        }
        Path(args.json_path).write_text(json.dumps(payload, indent=2), encoding="utf-8")

    if args.new_baseline:
        write_baseline(Path(args.new_baseline), rows, results)

    fatal = {NEW_BREAKAGE} | ({BLOCKED} if args.strict else set())
    broken = [finding for finding in findings if finding.category in fatal]
    if broken:
        print(f"check_external_links: {len(broken)} newly broken link(s)", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
