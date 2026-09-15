#!/usr/bin/env python3
"""check_links — internal link integrity for the markdown corpus.

The corpus is held together by relative cross-links between documents
(`[Faceoffs](faceoffs.md)`, `[Center](positions/center.md)`, `../faceoffs.md`
from inside `positions/`) and by deep links to headings (`file.md#anchor`).
Those links rot silently: a rename or a reworded heading breaks them and
nothing complains until a reader clicks.

This checker reads the markdown *source*, so it runs in a second with no build
and no dependencies. It is the gate on every pull request. The site has its own
post-build checker (`site/scripts/check-links.mjs`) that walks the rendered
HTML; the two are complementary — this one catches breakage before a build even
happens, that one proves the rendering and routing preserved it.

⚠️ It checks EVERY tracked markdown tree, not just `content/`. Until 14 September
2026 the default root was `content/` alone, so the standard `--quiet` run — the
one the commit gate makes — never opened a file under `project/` or `docs/`, and
a commit touching only those trees passed C1 with nothing checked. Widening the
default immediately found two dead links on the repository's own front page:
`README.md` still pointed at `content/foundation/rink_map_and_glossary.md`,
which had been split into two documents and no longer existed.

⚠️ `content/` is the only tree that renders to routed site pages, so it is the
only one where a link to a DIRECTORY is a defect — see renders_to_a_site_page().

What it checks
    * every relative link resolves **against the directory of the file it is
      written in** — the part naive checkers get wrong for `positions/*.md`
    * the target file exists on disk
    * the fragment, if any, matches a heading in the target file, using the same
      slug derivation as the site (GitHub style, via github-slugger semantics)
    * same-file anchors (`#some-heading`)

What it deliberately does not check
    * external `http(s)` URLs — they need the network and belong in the weekly
      job (`scripts/check_external_links.py`), not in the build

Usage
    python3 scripts/check_links.py                # every tracked tree
    python3 scripts/check_links.py --quiet        # failures only, for CI
    python3 scripts/check_links.py content        # one tree, as it used to default
    python3 scripts/check_links.py content project docs README.md
    python3 scripts/check_links.py --list-anchors content/skating.md

Exits non-zero if anything is broken.
"""

from __future__ import annotations

import argparse
import posixpath
import re
import sys
import unicodedata
import difflib
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Iterator, Sequence
from urllib.parse import unquote

# --------------------------------------------------------------------------
# Slug derivation
# --------------------------------------------------------------------------
#
# Astro assigns heading ids with `rehypeHeadingIds`, which uses `github-slugger`
# — the same package GitHub's own markdown renderer behaves like, and the thing
# the corpus's `file.md#anchor` links were written against. github-slugger is:
#
#     value.toLowerCase().replace(<big unicode class>, '').replace(/ /g, '-')
#
# The "big unicode class" strips everything that is not a letter, a mark, a
# decimal digit, a connector punctuation (`_`) or a hyphen. Reproducing it here
# by category rather than by copying 8 KB of generated ranges: verified
# identical to github-slugger across ASCII, Latin-1 and General Punctuation, and
# across all 1,576 headings in this corpus. The only divergence is in scripts
# added to Unicode after github-slugger's table was generated, which this corpus
# does not use.
#
# Consequences worth knowing, because they look like bugs and are not:
#   * `—` (em dash) is stripped, so "Rim vs reverse — two opposite plays" gives
#     `rim-vs-reverse--two-opposite-plays`: a *double* hyphen, from the spaces
#     either side of the dash. The corpus's links are written that way. Correct.
#   * `'`, `/`, `+`, `(`, `)`, `.`, `⚠️`, `→` all vanish entirely rather than
#     becoming hyphens: "Rule 63.2(viii)" -> `rule-632viii`.
#   * duplicate headings in one document get `-1`, `-2` … appended, in document
#     order, exactly as github-slugger's stateful slugger does.


def _keeps(ch: str) -> bool:
    if ch == "-":
        return True
    category = unicodedata.category(ch)
    return category[0] in ("L", "M") or category in ("Nd", "Pc")


def slugify(text: str) -> str:
    """GitHub-style heading slug, matching github-slugger for this corpus."""
    lowered = text.lower()
    return "".join(c for c in lowered if c == " " or _keeps(c)).replace(" ", "-")


class Slugger:
    """github-slugger's stateful de-duplication: repeats get -1, -2, …"""

    def __init__(self) -> None:
        self._seen: dict[str, int] = {}

    def slug(self, text: str) -> str:
        base = slugify(text)
        result = base
        while result in self._seen:
            self._seen[base] += 1
            result = f"{base}-{self._seen[base]}"
        self._seen[result] = 0
        return result


# --------------------------------------------------------------------------
# Markdown parsing
# --------------------------------------------------------------------------

FENCE_RE = re.compile(r"^\s{0,3}(`{3,}|~{3,})")
ATX_RE = re.compile(r"^\s{0,3}(#{1,6})\s+(.*?)\s*$")
SETEXT_RE = re.compile(r"^\s{0,3}(=+|-{2,})\s*$")

# Inline link: [text](destination "optional title"). The destination may itself
# contain balanced parentheses — the corpus has Wikipedia URLs like
# `Icing_(ice_hockey)` — or be wrapped in <angle brackets>.
INLINE_LINK_RE = re.compile(
    r"""
    (?<!\\)                       # not escaped
    !?\[                          # opening bracket (image or link)
      (?:[^\[\]\\]|\\.|\[[^\]]*\])*
    \]
    \(\s*
      (?:
        <(?P<angle>[^>\n]*)>      # <destination>
        |
        (?P<plain>                # bare destination, balanced parens
          (?:[^\s()\\]|\\.|\((?:[^()\\]|\\.)*\))*
        )
      )
      (?:\s+(?:"[^"]*"|'[^']*'|\([^)]*\)))?   # optional title
    \s*\)
    """,
    re.VERBOSE,
)

# Reference definitions: [label]: destination "title"
REF_DEF_RE = re.compile(
    r"""^\s{0,3}\[(?P<label>[^\]]+)\]:\s*
        (?:<(?P<angle>[^>\n]*)>|(?P<plain>\S+))
        (?:\s+(?:"[^"]*"|'[^']*'|\([^)]*\)))?\s*$""",
    re.VERBOSE,
)

# Reference uses: [text][label] or [label][]
REF_USE_RE = re.compile(r"(?<!\\)\[(?P<text>(?:[^\[\]\\]|\\.)*)\]\[(?P<label>(?:[^\[\]\\]|\\.)*)\]")

# Inline HTML with an explicit id/name, which is also a valid anchor target.
HTML_ID_RE = re.compile(r"""<[a-zA-Z][^>]*?\s(?:id|name)\s*=\s*["']([^"']+)["']""")

EXTERNAL_SCHEME_RE = re.compile(r"^[a-zA-Z][a-zA-Z0-9+.\-]*:")

INLINE_MARKUP_RE = re.compile(
    r"""
      `+(?P<code>[^`]*)`+                       # `code`
    | !?\[(?P<link>(?:[^\[\]\\]|\\.)*)\]\([^)]*\)   # [text](url)
    | !?\[(?P<reflink>(?:[^\[\]\\]|\\.)*)\]\[[^\]]*\]
    | (?P<bold>\*\*|__)
    | (?P<em>\*|_)
    | <[^>]+>                                    # inline html
    """,
    re.VERBOSE,
)


def heading_text(raw: str) -> str:
    """The rendered text of a heading, which is what gets slugged."""
    text = re.sub(r"\s+#+\s*$", "", raw)  # closing ATX hashes

    def replace(match: re.Match[str]) -> str:
        for group in ("code", "link", "reflink"):
            if match.group(group) is not None:
                return match.group(group)
        if match.group("bold") or match.group("em"):
            return ""
        return ""

    text = INLINE_MARKUP_RE.sub(replace, text)
    return text.strip()


def strip_code(lines: list[str]) -> list[bool]:
    """Mark lines that sit inside a fenced code block."""
    inside: list[bool] = []
    fence: str | None = None
    for line in lines:
        match = FENCE_RE.match(line)
        if fence is None:
            if match:
                fence = match.group(1)[0]
                inside.append(True)
                continue
            inside.append(False)
        else:
            inside.append(True)
            if match and match.group(1)[0] == fence:
                fence = None
    return inside


def mask_inline_code(line: str) -> str:
    """Blank out `code spans` so links quoted as examples are not checked.

    ⚠️ This was inert for every code span that did not start at column 0, which
    in practice is all of them. `tick` counted the backticks with
    `len(line) - len(line[i:].lstrip("`"))`, which adds `i` to the real run
    length: a single backtick at column 2 was read as a triple, the closing
    ``` was never found, and the function then bailed and returned **the whole
    rest of the line unmasked**. Six links quoted as syntax examples inside
    backticks — `[text](url)`, `See [Doc](path).` — were reported as broken
    targets, and the failure was silent in the other direction too, because a
    real link sitting after a code span on the same line was checked by
    accident rather than by design.
    """
    out = []
    i = 0
    while i < len(line):
        if line[i] == "`":
            tick = len(line[i:]) - len(line[i:].lstrip("`"))
            marker = "`" * tick
            end = line.find(marker, i + tick)
            if end == -1:
                out.append(line[i:])
                break
            out.append(" " * (end + tick - i))
            i = end + tick
        else:
            out.append(line[i])
            i += 1
    return "".join(out)


@dataclass(frozen=True)
class Link:
    source: Path
    line: int
    column: int
    raw: str
    destination: str


@dataclass(frozen=True)
class Failure:
    source: Path
    line: int
    column: int
    destination: str
    message: str


def parse_document(path: Path, text: str) -> tuple[list[str], list[Link], set[str]]:
    """Return (heading ids, links, explicit html ids) for one markdown file."""
    lines = text.splitlines()
    in_code = strip_code(lines)

    slugger = Slugger()
    anchors: list[str] = []
    html_ids: set[str] = set()

    for index, line in enumerate(lines):
        if in_code[index]:
            continue
        atx = ATX_RE.match(line)
        if atx:
            anchors.append(slugger.slug(heading_text(atx.group(2))))
            continue
        # Setext heading: text on the previous line underlined with = or -.
        if (
            index > 0
            and SETEXT_RE.match(line)
            and lines[index - 1].strip()
            and not in_code[index - 1]
            and not ATX_RE.match(lines[index - 1])
            and not lines[index - 1].lstrip().startswith(("|", ">", "-", "*", "+"))
        ):
            anchors.append(slugger.slug(heading_text(lines[index - 1].strip())))
            continue
        html_ids.update(HTML_ID_RE.findall(line))

    links: list[Link] = []
    ref_defs: dict[str, tuple[int, int, str]] = {}

    for index, line in enumerate(lines):
        if in_code[index]:
            continue
        ref = REF_DEF_RE.match(line)
        if ref:
            destination = ref.group("angle") or ref.group("plain") or ""
            ref_defs[ref.group("label").strip().lower()] = (index + 1, 1, destination)
            continue
        masked = mask_inline_code(line)
        for match in INLINE_LINK_RE.finditer(masked):
            destination = match.group("angle")
            if destination is None:
                destination = match.group("plain") or ""
            links.append(
                Link(path, index + 1, match.start() + 1, match.group(0)[:80], destination.strip())
            )
        for match in REF_USE_RE.finditer(masked):
            label = (match.group("label") or match.group("text")).strip().lower()
            if label in ref_defs:
                _, _, destination = ref_defs[label]
                links.append(
                    Link(path, index + 1, match.start() + 1, match.group(0)[:80], destination.strip())
                )

    # Reference definitions are links in their own right.
    for label, (line_no, column, destination) in ref_defs.items():
        links.append(Link(path, line_no, column, f"[{label}]: {destination}"[:80], destination))

    return anchors, links, html_ids


# --------------------------------------------------------------------------
# Checking
# --------------------------------------------------------------------------


def is_external(destination: str) -> bool:
    if destination.startswith("//"):
        return True
    if EXTERNAL_SCHEME_RE.match(destination):
        # `positions/center.md` has no scheme; `https:`, `mailto:`, `tel:` do.
        return True
    return False


def markdown_files(root: Path) -> list[Path]:
    """Every checkable markdown file under `root` — or `root` itself if it is one.

    `*.local.md` is skipped: the pattern is gitignored, so those files are
    scratch notes that never enter the record and must not be able to fail a
    gate. Excluding them here rather than in the caller keeps the rule in one
    place.
    """
    if root.is_file():
        return [root] if root.suffix == ".md" and not root.name.endswith(".local.md") else []
    return sorted(
        p
        for p in root.rglob("*.md")
        if p.is_file() and not p.name.endswith(".local.md")
    )


class Corpus:
    def __init__(self, roots: Sequence[Path]) -> None:
        self.roots = list(roots)
        self.root = self.roots[0]
        self.documents: dict[Path, tuple[list[str], list[Link], set[str]]] = {}
        for root in self.roots:
            for path in markdown_files(root):
                if path in self.documents:
                    continue  # a file reachable from two roots is still one file
                self.documents[path] = parse_document(path, path.read_text(encoding="utf-8"))

    def anchors_for(self, path: Path) -> set[str]:
        if path not in self.documents:
            if path.suffix.lower() == ".md" and path.is_file():
                self.documents[path] = parse_document(path, path.read_text(encoding="utf-8"))
            else:
                return set()
        headings, _, html_ids = self.documents[path]
        return set(headings) | html_ids

    def links(self) -> Iterator[Link]:
        # ⚠️ Snapshot first. `anchors_for()` parses a link TARGET on demand and
        # inserts it into `self.documents`, so iterating the live dict raises
        # "dictionary changed size during iteration" the moment a link points
        # at a file that was not crawled. That could not happen while the only
        # root was `content/` and every target was already inside it; it fires
        # immediately once `project/` links out to `content/`. The lazily added
        # documents are targets, not sources — their own links are deliberately
        # not checked, because nothing asked for that tree to be checked.
        for _, links, _ in list(self.documents.values()):
            for link in links:
                yield link


def nearest(fragment: str, anchors: set[str]) -> str:
    """A 'did you mean' hint, so the report is actionable."""
    matches = difflib.get_close_matches(fragment, sorted(anchors), n=1, cutoff=0.6)
    return f" — closest heading is '{matches[0]}'" if matches else ""


def display_path(path: Path, root: Path) -> str:
    """Repo-relative where possible; absolute paths in reports are noise."""
    for base in (Path.cwd(), root.parent, root):
        try:
            return str(path.relative_to(base))
        except ValueError:
            continue
    return str(path)


def renders_to_a_site_page(path: Path, site_root: Path | None) -> bool:
    """Is this document published as a page, or read on GitHub?

    It decides one thing: whether a link whose target is a DIRECTORY is a
    defect. Under `content/` it is — every document becomes a routed page and a
    directory has no route, so the reader gets a 404. Everywhere else the
    document is read in the repository, where a directory link renders a file
    listing and is a perfectly ordinary thing to write: `review_history.md`
    points at `../.claude/agents/` on purpose.

    ⚠️ Until 14 September 2026 the checker only ever ran over `content/`, so
    this distinction never had to exist and directory links were unconditionally
    a failure. Widening the default surfaced several legitimate ones; the summary line
    prints the running count, which moves with every `project/` document added.
    """
    if site_root is None:
        return False
    try:
        path.relative_to(site_root)
    except ValueError:
        return False
    return True


def check(roots: Sequence[Path], site_root: Path | None = None) -> tuple[dict[str, int], list[Failure]]:
    corpus = Corpus(roots)
    root = corpus.root
    counts = {
        "files": len(corpus.documents),
        "links": 0,
        "internal": 0,
        "anchors": 0,
        "external": 0,
        "same_page": 0,
        "directories": 0,
    }
    failures: list[Failure] = []

    for link in corpus.links():
        counts["links"] += 1
        destination = link.destination

        if not destination:
            failures.append(Failure(link.source, link.line, link.column, "", "empty link destination"))
            continue

        if is_external(destination):
            counts["external"] += 1
            continue

        target_part, _, fragment = destination.partition("#")
        target_part = target_part.split("?")[0]
        fragment = unquote(fragment)

        if not target_part:
            # Same-document anchor.
            counts["same_page"] += 1
            counts["anchors"] += 1
            anchors = corpus.anchors_for(link.source)
            if fragment and fragment not in anchors:
                failures.append(
                    Failure(
                        link.source,
                        link.line,
                        link.column,
                        destination,
                        f"no heading in this document slugs to '{fragment}'"
                        f"{nearest(fragment, anchors)}",
                    )
                )
            continue

        counts["internal"] += 1

        # Resolve relative to the directory of the file the link is written in.
        # This is the bit that breaks naive checkers: `../faceoffs.md` inside
        # `content/positions/center.md` must resolve to `content/faceoffs.md`,
        # not to `content/positions/../faceoffs.md` interpreted from the cwd.
        relative = unquote(target_part)
        if relative.startswith("/"):
            resolved = (root / relative.lstrip("/")).resolve()
        else:
            base = link.source.parent
            resolved = Path(posixpath.normpath(str(base / relative)))
        display = display_path(resolved, root)

        if not resolved.exists():
            failures.append(
                Failure(
                    link.source,
                    link.line,
                    link.column,
                    destination,
                    f"target does not exist ({display})",
                )
            )
            continue

        if resolved.is_dir():
            if renders_to_a_site_page(link.source, site_root):
                failures.append(
                    Failure(
                        link.source,
                        link.line,
                        link.column,
                        destination,
                        f"target is a directory, not a file ({display}) — "
                        "this document renders to a site page and a directory has no route",
                    )
                )
            else:
                counts["directories"] += 1
            continue

        if fragment:
            counts["anchors"] += 1
            if resolved.suffix.lower() != ".md":
                continue  # fragments on non-markdown targets are not ours to check
            anchors = corpus.anchors_for(resolved)
            if fragment not in anchors:
                failures.append(
                    Failure(
                        link.source,
                        link.line,
                        link.column,
                        destination,
                        f"{display} exists but no heading slugs to '{fragment}'"
                        f"{nearest(fragment, anchors)}",
                    )
                )

    return counts, failures


def main(argv: Iterable[str] | None = None) -> int:
    repo_root = Path(__file__).resolve().parent.parent
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    parser.add_argument(
        "roots",
        nargs="*",
        help=(
            "directories or files of markdown to check "
            "(default: every tracked markdown tree — content/, project/, docs/ "
            "and the markdown at the repository root)"
        ),
    )
    parser.add_argument("-q", "--quiet", action="store_true", help="print only failures (for CI)")
    parser.add_argument(
        "--list-anchors",
        metavar="FILE",
        help="print the derived heading anchors for one file and exit",
    )
    args = parser.parse_args(list(argv) if argv is not None else None)

    # ⚠️ THE DEFAULT USED TO BE `content/` ALONE, and that was a silent hole:
    # the standard `--quiet` invocation — the one the commit gate runs — never
    # opened a file under `project/` or `docs/`. A commit touching only those
    # trees passed C1 without a single link being checked, while
    # `review_process.md` says "C1 always applies". Found by a gate auditing a
    # two-file `project/` diff: it passed, and had checked neither staged file.
    # The default is now every tracked markdown tree, so the invocation nobody
    # thinks about covers everything a rename can break.
    default_roots = [
        repo_root / "content",
        repo_root / "project",
        repo_root / "docs",
        repo_root,          # CLAUDE.md, README.md — files only, rglob is not used on a file
    ]
    if args.roots:
        roots = [Path(r).resolve() for r in args.roots]
    else:
        roots = [r for r in default_roots if r.exists()]
        # The repo root is included for its own *.md, not for a second crawl of
        # everything beneath it — markdown_files() on a directory would rglob
        # into site/, node_modules/ and infra/. Expand it to its files here.
        roots = [r for r in roots if r != repo_root]
        roots += sorted(
            p for p in repo_root.glob("*.md")
            if p.is_file() and not p.name.endswith(".local.md")
        )

    # `content/` is the only tree that renders to routed site pages, so it is
    # the only one where a link to a directory is a defect. See
    # renders_to_a_site_page().
    site_root = repo_root / "content"

    if args.list_anchors:
        path = Path(args.list_anchors).resolve()
        headings, _, html_ids = parse_document(path, path.read_text(encoding="utf-8"))
        for anchor in headings:
            print(anchor)
        for anchor in sorted(html_ids):
            print(f"{anchor}  (html id)")
        return 0

    missing = [r for r in roots if not r.exists()]
    if missing:
        for r in missing:
            print(f"check_links: no such path: {r}", file=sys.stderr)
        return 2
    if not roots:
        print("check_links: nothing to check", file=sys.stderr)
        return 2

    counts, failures = check(roots, site_root=site_root)

    if failures:
        print(f"\n{len(failures)} broken internal link(s):\n", file=sys.stderr)
        for failure in failures:
            try:
                location = failure.source.relative_to(Path.cwd())
            except ValueError:
                location = failure.source
            print(f"  {location}:{failure.line}:{failure.column}", file=sys.stderr)
            print(f"      {failure.destination}", file=sys.stderr)
            print(f"      {failure.message}", file=sys.stderr)
            print(file=sys.stderr)
        print(
            f"checked {counts['links']} links across {counts['files']} files "
            f"({counts['internal']} internal, {counts['same_page']} same-page anchors, "
            f"{counts['external']} external skipped) — {len(failures)} broken",
            file=sys.stderr,
        )
        return 1

    if not args.quiet:
        print(
            f"check_links: {counts['files']} files · {counts['links']} links · "
            f"{counts['internal']} internal cross-links · "
            f"{counts['same_page']} same-page anchors · "
            f"{counts['anchors']} fragments verified against derived heading slugs · "
            f"{counts['external']} external skipped"
            + (
                f" · {counts['directories']} directory links, legitimate outside content/"
                if counts["directories"]
                else ""
            )
        )
        print("all internal links and anchors resolve.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
