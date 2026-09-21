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
    * every `entry.doc`/`entry.anchor` deep link in
      `site/src/data/pathways.json`, resolved against `content/` and slugged
      with the exact same machinery as an ordinary cross-link — checked
      regardless of a pathway's `status` (`draft` rots exactly like `reviewed`)
    * every `[text](doc.md), §N` house-style reference to a NUMBERED SECTION of
      another document — the corpus's way of pointing at a section without a
      deep `#anchor` — resolved to the target's own `## N. Title` heading, so a
      renumbering or reordering of that document's sections breaks the gate
      instead of rotting silently. See check_section_references().

What it deliberately does not check
    * external `http(s)` URLs — they need the network and belong in the weekly
      job (`scripts/check_external_links.py`), not in the build
    * a pathway `entry` with no `doc`/`anchor` (e.g. `entry: {"layer": "systems"}`)
      — it routes into a section hub, not a `content/` heading, so there is no
      anchor to rot

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
import json
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

# The corpus's numbered-section heading convention: "## 1. Which Contact Rules
# Are You Actually Playing Under?" — numeral, period, space, title. Confirmed
# against every document currently targeted by a `§N` house-style reference
# (content/technique/body_contact_and_battles.md, sections 1-12) and against
# two unrelated documents that use the same convention independently
# (content/foundation/rules_primer.md, content/hockey-iq/time_and_space.md),
# so this is a corpus-wide style, not one document's habit. Deliberately
# restricted to `##` (exactly two hashes): every numbered section observed is
# top-level, and a `###` subsection is never what a `§N` reference means.
SECTION_HEADING_RE = re.compile(r"^(\d+)\.\s")

# The corpus's house style for citing a NUMBERED SECTION of another document
# without a deep `#anchor`: "[Body Contact and Battles](../technique/
# body_contact_and_battles.md), §6". Matched immediately after a link's
# closing `)`, allowing the punctuation this corpus actually uses between the
# two — a trailing comma or period, and markdown italic/bold markers
# reopening around the `§` (some of these references sit inside an italicised
# Sources note) — but deliberately NOT an em dash. An em dash before `§N` in
# this corpus marks a different thing entirely: a citation to an EXTERNAL
# source's own section numbering ("USA Hockey ... (PDF) — §5"), which this
# check has no business verifying and must not be confused with the
# corpus's own cross-references.
SECTION_REF_RE = re.compile(r"\A[,.]?\s*[*_]{0,3}§(\d+)\b")

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


@dataclass(frozen=True)
class SectionRef:
    """A `[text](doc.md), §N` house-style section cross-reference.

    `destination` is the preceding link's own destination (resolved the same
    way as any other link, to find which document `number` is supposed to be
    a section of); `raw` is the matched punctuation-plus-marker text between
    the link and the `§`, kept only so a failure report can show what was
    actually written.
    """

    source: Path
    line: int
    column: int
    destination: str
    number: int
    raw: str


def parse_document(
    path: Path, text: str
) -> tuple[list[str], list[Link], set[str], list[SectionRef], dict[int, str]]:
    """Return (heading ids, links, explicit html ids, section refs, numbered sections)."""
    lines = text.splitlines()
    in_code = strip_code(lines)

    slugger = Slugger()
    anchors: list[str] = []
    html_ids: set[str] = set()
    numbered_sections: dict[int, str] = {}

    for index, line in enumerate(lines):
        if in_code[index]:
            continue
        atx = ATX_RE.match(line)
        if atx:
            rendered = heading_text(atx.group(2))
            anchors.append(slugger.slug(rendered))
            if atx.group(1) == "##":
                section_match = SECTION_HEADING_RE.match(rendered)
                if section_match:
                    numbered_sections[int(section_match.group(1))] = rendered
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
    section_refs: list[SectionRef] = []
    ref_defs: dict[str, tuple[int, int, str]] = {}

    def check_section_ref(destination: str, line: str, end: int, index: int) -> None:
        """If `§N` sits right after a link ending at `end`, record it.

        Only for internal destinations — an external citation uses the same
        `§N` glyph for the SOURCE's own numbering (see SECTION_REF_RE's
        comment), and this pattern only means something for a link into this
        corpus.

        The reference is allowed to soft-wrap onto the next physical line —
        confirmed necessary by `content/technique/puck_handling.md`, where
        prose reflow puts the closing `)` at the end of one line and `§6` at
        the start of the next. Peeking one line ahead (never into a fenced
        code block) is enough: SECTION_REF_RE tolerates at most one `\n`, so
        it cannot cross a blank-line paragraph break and land on an unrelated
        `§` two paragraphs later.
        """
        if is_external(destination):
            return
        rest = line[end:]
        if index + 1 < len(lines) and not in_code[index + 1]:
            rest += "\n" + lines[index + 1]
        match = SECTION_REF_RE.match(rest)
        if not match:
            return
        # Report the line the `§N` itself actually sits on. SECTION_REF_RE
        # is matched with .match(), which always anchors at position 0 of
        # `rest` — match.start() is therefore always 0 and useless for
        # locating the match; what tells the two cases apart is whether the
        # matched text itself swallowed the injected "\n".
        matched_text = match.group(0)
        if "\n" not in matched_text:
            ref_line, column = index + 1, end + 1
        else:
            ref_line = index + 2
            column = lines[index + 1].find("§") + 1
        section_refs.append(
            SectionRef(path, ref_line, column, destination, int(match.group(1)), matched_text.strip())
        )

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
            destination = destination.strip()
            links.append(
                Link(path, index + 1, match.start() + 1, match.group(0)[:80], destination)
            )
            check_section_ref(destination, line, match.end(), index)
        for match in REF_USE_RE.finditer(masked):
            label = (match.group("label") or match.group("text")).strip().lower()
            if label in ref_defs:
                _, _, destination = ref_defs[label]
                destination = destination.strip()
                links.append(
                    Link(path, index + 1, match.start() + 1, match.group(0)[:80], destination)
                )
                check_section_ref(destination, line, match.end(), index)

    # Reference definitions are links in their own right.
    for label, (line_no, column, destination) in ref_defs.items():
        links.append(Link(path, line_no, column, f"[{label}]: {destination}"[:80], destination))

    return anchors, links, html_ids, section_refs, numbered_sections


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
        self.documents: dict[
            Path, tuple[list[str], list[Link], set[str], list[SectionRef], dict[int, str]]
        ] = {}
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
        headings, _, html_ids, _, _ = self.documents[path]
        return set(headings) | html_ids

    def numbered_sections_for(self, path: Path) -> dict[int, str]:
        """The `## N. Title` section numbers a document declares, as {number: title}.

        Reuses the same lazy on-demand parse as anchors_for() — a section-ref
        target is typically already crawled (it's `content/`), but the lookup
        works identically for one that is not.
        """
        if path not in self.documents:
            if path.suffix.lower() == ".md" and path.is_file():
                self.documents[path] = parse_document(path, path.read_text(encoding="utf-8"))
            else:
                return {}
        _, _, _, _, numbered_sections = self.documents[path]
        return numbered_sections

    def links(self) -> Iterator[Link]:
        # ⚠️ Snapshot first. `anchors_for()` parses a link TARGET on demand and
        # inserts it into `self.documents`, so iterating the live dict raises
        # "dictionary changed size during iteration" the moment a link points
        # at a file that was not crawled. That could not happen while the only
        # root was `content/` and every target was already inside it; it fires
        # immediately once `project/` links out to `content/`. The lazily added
        # documents are targets, not sources — their own links are deliberately
        # not checked, because nothing asked for that tree to be checked.
        for _, links, _, _, _ in list(self.documents.values()):
            for link in links:
                yield link

    def section_refs(self) -> Iterator[SectionRef]:
        # Same snapshot reasoning as links(): section refs only originate from
        # already-crawled SOURCE files (content/), so this never lazily grows
        # self.documents, but snapshotting keeps the two iterators symmetric
        # and safe under future change.
        for _, _, _, refs, _ in list(self.documents.values()):
            for ref in refs:
                yield ref


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


# --------------------------------------------------------------------------
# pathways.json deep links
# --------------------------------------------------------------------------
#
# site/src/data/pathways.json builds homepage entry points that jump straight
# to a heading inside a content/ document via `entry: {"doc": ..., "anchor":
# ...}`. That anchor is exactly the kind of thing this checker already gates
# on for an ordinary `file.md#heading` link — a reworded heading breaks it
# just as silently, and the file's own $comment says as much: "Verified by
# scripts/check_links.py against the heading text in content/, so a reworded
# heading fails the gate rather than rotting silently." Until this was added
# that sentence was aspirational, not true — nothing ever opened the file.
#
# Reuses Corpus.anchors_for() (and its lazy on-demand parsing) rather than
# re-deriving slugs, so a pathway anchor is checked with the identical
# slugify()/Slugger() logic as every other anchor in this tool — no drift
# possible between how a regular link and a pathway link are validated.


def load_pathways(path: Path) -> list[dict] | None:
    """The `pathways` array from pathways.json, or None if the file is absent."""
    if not path.is_file():
        return None
    data = json.loads(path.read_text(encoding="utf-8"))
    return data.get("pathways", [])


def pathway_id_line(path: Path, pathway_id: str) -> int:
    """Best-effort line number of a pathway's `"id"` key, for a useful failure location.

    This is a small text search over the JSON, not a JSON-aware line mapper —
    good enough to point a human at the right pathway in a 300-line file,
    which is all a failure report needs.
    """
    try:
        lines = path.read_text(encoding="utf-8").splitlines()
    except OSError:
        return 0
    needle = f'"{pathway_id}"'
    for index, line in enumerate(lines):
        if '"id"' in line and needle in line:
            return index + 1
    return 0


def check_pathways(
    pathways_path: Path, content_root: Path, corpus: Corpus
) -> tuple[int, list[Failure]]:
    """Verify every pathway's `entry.doc`/`entry.anchor` against a real heading.

    Checked regardless of `status` — a draft pathway's anchor rots exactly like
    a reviewed one's, and draft-ness is a publication gate (`statusGate` in the
    file), not a reason to skip verification.
    """
    failures: list[Failure] = []
    count = 0
    pathways = load_pathways(pathways_path)
    if not pathways:
        return count, failures

    for pathway in pathways:
        entry = pathway.get("entry") or {}
        doc = entry.get("doc")
        anchor = entry.get("anchor")
        if not doc or not anchor:
            continue  # e.g. {"layer": "systems"} — routes into a section hub, not content/
        count += 1
        pathway_id = pathway.get("id", "?")
        line = pathway_id_line(pathways_path, pathway_id)
        destination = f"{doc}#{anchor}"

        target = (content_root / f"{doc}.md").resolve()
        display = display_path(target, content_root)

        if not target.is_file():
            failures.append(
                Failure(
                    pathways_path,
                    line,
                    1,
                    destination,
                    f"pathway '{pathway_id}': target does not exist ({display})",
                )
            )
            continue

        anchors = corpus.anchors_for(target)
        if anchor not in anchors:
            failures.append(
                Failure(
                    pathways_path,
                    line,
                    1,
                    destination,
                    f"pathway '{pathway_id}': {display} exists but no heading slugs to '{anchor}'"
                    f"{nearest(anchor, anchors)}",
                )
            )

    return count, failures


# --------------------------------------------------------------------------
# §N house-style section references
# --------------------------------------------------------------------------
#
# The style guide's cross-referencing convention for pointing at a numbered
# section of another document without a deep `#anchor`: "[Body Contact and
# Battles](../technique/body_contact_and_battles.md), §5." Unlike a deep
# link, the target's exact section wording never has to match — only the
# NUMBER does — but that number is exactly as capable of going stale as a
# heading slug: if body_contact_and_battles.md's sections are ever
# renumbered or reordered, every one of these `§N` references breaks, and
# nothing before this check ever read the plain text after a link to notice.
#
# This is a GATE, not a worklist, for the same reason the pathway-anchor
# check above is a gate rather than check_rule_scope.py-style human judgement:
# "does target document have a `## N. ...` heading" is a yes/no mechanical
# fact, exactly like "does this fragment match a heading slug". There is no
# judgement call for a human to make on a hit — a `§N` with no matching
# section is unambiguously broken, the same way a `#anchor` matching no slug
# is unambiguously broken. Contrast check_rule_scope.py, which reports a book
# divergence that is very often *correct* and needs a human's judgement to
# read; this check has no such legitimate-hit case.


def check_section_references(corpus: Corpus) -> tuple[int, list[Failure]]:
    """Verify every `[text](doc.md), §N` reference against a real `## N. ...` heading.

    Resolves the preceding link's destination exactly like an ordinary
    cross-link (relative to the citing file's directory), then asks the
    target document — via Corpus.numbered_sections_for(), which shares the
    lazy on-demand parse anchors_for() already uses — whether it declares a
    `## N. Title` heading for that number.

    A target that does not exist, or is not a `.md` file, is left to the main
    link-resolution loop to report — this only adds an *additional* signal on
    top of an already-resolving link, never a competing message about the
    same broken destination.
    """
    failures: list[Failure] = []
    count = 0

    for ref in corpus.section_refs():
        count += 1

        target_part, _, _ = ref.destination.partition("#")
        target_part = target_part.split("?")[0]
        relative = unquote(target_part)
        if not relative:
            continue  # a same-page "(#anchor), §N" is not this house style

        if relative.startswith("/"):
            resolved = (corpus.root / relative.lstrip("/")).resolve()
        else:
            resolved = Path(posixpath.normpath(str(ref.source.parent / relative)))

        if not resolved.is_file() or resolved.suffix.lower() != ".md":
            continue  # reported by the main link check, or not ours to parse

        sections = corpus.numbered_sections_for(resolved)
        if ref.number not in sections:
            display = display_path(resolved, corpus.root)
            available = ", ".join(str(n) for n in sorted(sections)) or "none"
            failures.append(
                Failure(
                    ref.source,
                    ref.line,
                    ref.column,
                    f"{target_part}{ref.raw}",
                    f"{display} exists but has no '## {ref.number}. ...' section "
                    f"(sections present: {available})",
                )
            )

    return count, failures


def check(
    roots: Sequence[Path],
    site_root: Path | None = None,
    pathways_path: Path | None = None,
    content_root: Path | None = None,
) -> tuple[dict[str, int], list[Failure]]:
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
        "pathway_anchors": 0,
        "section_refs": 0,
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

    if pathways_path is not None and content_root is not None:
        pathway_count, pathway_failures = check_pathways(pathways_path, content_root, corpus)
        counts["pathway_anchors"] = pathway_count
        failures.extend(pathway_failures)

    section_count, section_failures = check_section_references(corpus)
    counts["section_refs"] = section_count
    failures.extend(section_failures)

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

    # pathways.json deep-links into content/ regardless of which roots were
    # requested on the command line — a `--quiet` run scoped to just `project`
    # would otherwise never notice a pathway anchor rot. See check_pathways().
    pathways_path = repo_root / "site" / "src" / "data" / "pathways.json"
    content_root = repo_root / "content"

    if args.list_anchors:
        path = Path(args.list_anchors).resolve()
        headings, _, html_ids, _, _ = parse_document(path, path.read_text(encoding="utf-8"))
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

    counts, failures = check(roots, site_root=site_root, pathways_path=pathways_path, content_root=content_root)

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
            f"{counts['pathway_anchors']} pathway deep links, "
            f"{counts['section_refs']} §N section references, "
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
            f"{counts['pathway_anchors']} pathways.json deep links verified · "
            f"{counts['section_refs']} §N section references verified · "
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
