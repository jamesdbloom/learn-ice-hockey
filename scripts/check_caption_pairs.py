#!/usr/bin/env python3
"""Report diagram embeds whose trimmed caption relies on a sibling diagram that is not
embedded directly before it.

⚠️ WORKLIST, NOT A GATE. It has no ``--strict`` and should never gain one. It
always exits 0 (except ``--self-test``, which exits 1 on a failed case).

WHY IT EXISTS
-------------
Some captions were trimmed on the assumption that a sibling caption is spoken
IMMEDIATELY BEFORE them in every host. ``forecheck-212-stacked`` is the first:
its caption dropped the USA Hockey 604(a)/(b) and Hockey Canada 7.3 enumeration
because ``forecheck-212``'s caption carries it word for word and is the
preceding spoken chunk in both hosts (SG66; see the comment on the caption in
``site/src/diagrams/forechecking_systems.mjs``). That comment says *"If either
host ever stops embedding forecheck-212 straight before this diagram, the
enumeration must come back."* Nothing enforced it. This tool reports it.

``md_to_speech.py`` voices each diagram as ``"Diagram. " + caption``, so the two
markers being adjacent is what puts the two captions next to each other for a
listener. Only blank lines or whitespace may sit between them; any prose
between the two markers breaks the pair.

THE TABLE IS DECLARED, NOT INFERRED
-----------------------------------
``DEPENDENCIES`` below is the whole list. A dependency enters it only when a
caption is trimmed against a sibling, and the trimming comment in the diagram
module should name the dependency so a reader can find it here. ⚠️ **This tool
cannot discover an undeclared dependency** -- a caption trimmed against a sibling
without a row here is invisible to it.

WHAT IT CANNOT SEE
------------------
- Whether the required caption still carries the material the dependent one
  dropped. It checks ADJACENCY of the markers, not the caption text.
- Embeds outside ``content/`` (a diagram reused somewhere in ``site/`` directly).
- An undeclared dependency (see above).

Usage:  check_caption_pairs.py
        check_caption_pairs.py --self-test
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
CONTENT = REPO / "content"

# ``![alt](diagram:the-id)`` -- the marker remark-corpus.mjs expands.
MARKER = re.compile(r"!\[[^\]]*\]\(diagram:([A-Za-z0-9_\-]+)\)")

# (dependent diagram id, diagram that must be embedded directly before it,
#  hosts the requirement applies to -- None means EVERY host -- and why)
DEPENDENCIES: list[tuple[str, str, tuple[str, ...] | None, str]] = [
    (
        "pinch-centre-below-the-goal-line",
        "pinch-centre-high",
        None,
        "caption trimmed 27 Oct 2026 (SG94): the who-covers coaching-choice and "
        "scoreboard limbs are voiced only in pinch-centre-high's caption",
    ),
    (
        "forecheck-212-stacked",
        "forecheck-212",
        None,
        "caption trimmed 24 Oct 2026 (SG66): the 'how a forechecker finishes an angle' "
        "disclosure and the USA Hockey 604(a)/(b) / Hockey Canada 7.3 enumeration live "
        "only in forecheck-212's caption",
    ),
    (
        # Host-scoped: the shared SAFETY SCOPE comment on forecheck-122 says that in
        # how_to_watch_hockey.md forecheck-212's caption is the chunk immediately before
        # it. In forechecking_systems.md the same comment relies on the 2-1-2 SECTION
        # "a few chunks before", which is not an adjacency this tool can test.
        "forecheck-122",
        "forecheck-212",
        ("content/off-the-ice/how_to_watch_hockey.md",),
        "safety scope shortened 22 Oct 2026: drops the USA Hockey 604(a)/(b) / Hockey "
        "Canada 7.3 enumeration that forecheck-212's caption voices just before it",
    ),
]


def check_text(text: str, deps=DEPENDENCIES, host: str | None = None
               ) -> list[tuple[int, str, str, str]]:
    """Return (line, dependent, required, what came before) for each violation.

    ``what came before`` is the previous diagram id if the dependent marker is
    preceded by another marker with only whitespace between, else a short
    excerpt of the intervening text, or ``<start of document>``. A dependency
    scoped to named hosts is skipped unless ``host`` is one of them."""
    found = []
    markers = list(MARKER.finditer(text))
    for dep, req, hosts, _why in deps:
        if hosts is not None and host not in hosts:
            continue
        for i, m in enumerate(markers):
            if m.group(1) != dep:
                continue
            line = text.count("\n", 0, m.start()) + 1
            prev_end = markers[i - 1].end() if i > 0 else 0
            gap = text[prev_end:m.start()]
            if i > 0 and not gap.strip():
                prev_id = markers[i - 1].group(1)
                if prev_id == req:
                    continue
                found.append((line, dep, req, f"diagram:{prev_id}"))
            elif i == 0 and not gap.strip():
                found.append((line, dep, req, "<start of document>"))
            else:
                excerpt = " ".join(gap.split())[-80:]
                found.append((line, dep, req, f"text: ...{excerpt}"))
    return found


def run() -> int:
    hosts = 0
    violations = []
    for path in sorted(CONTENT.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        ids = set(MARKER.findall(text))
        rel = path.relative_to(REPO).as_posix()
        applicable = [d for d in DEPENDENCIES
                      if d[0] in ids and (d[2] is None or rel in d[2])]
        if not applicable:
            continue
        hosts += 1
        for v in check_text(text, host=rel):
            violations.append((path.relative_to(REPO), *v))
    print(f"check_caption_pairs: {len(DEPENDENCIES)} declared dependenc"
          f"{'y' if len(DEPENDENCIES) == 1 else 'ies'}, {hosts} host document(s) "
          f"carry an applicable dependency, {len(violations)} violation(s)")
    for dep, req, scope, why in DEPENDENCIES:
        where = "every host" if scope is None else ", ".join(scope)
        print(f"  declared: {dep} requires {req} directly before it ({where}) -- {why}")
    for dep, req, scope, _ in DEPENDENCIES:
        for s in scope or ():
            if not (REPO / s).is_file():
                print(f"  STALE ROW: {dep} names host {s}, which does not exist")
    for path, line, dep, req, before in violations:
        print(f"  VIOLATION {path}:{line}  {dep} is not directly after {req}; "
              f"preceded by {before}")
    if violations:
        print("  worklist: restore the adjacency, or restore the dropped material to the "
              "dependent caption (and remove its row here).")
    return 0


def self_test() -> int:
    deps = [("b-dep", "a-req", None, "test")]
    cases = [
        ("adjacent, blank line between: pass",
         "intro\n\n![](diagram:a-req)\n\n![](diagram:b-dep)\n", 0),
        ("adjacent, only spaces/tabs between: pass",
         "![](diagram:a-req)  \t ![](diagram:b-dep)", 0),
        ("dependent not embedded at all: pass",
         "![](diagram:a-req)\n\nprose\n", 0),
        ("prose between the two markers: violation",
         "![](diagram:a-req)\n\nSome prose.\n\n![](diagram:b-dep)\n", 1),
        ("a different diagram directly before: violation",
         "![](diagram:a-req)\n\n![](diagram:other)\n\n![](diagram:b-dep)\n", 1),
        ("dependent with no diagram before it at all: violation",
         "Text only.\n\n![](diagram:b-dep)\n", 1),
        ("dependent is the first thing in the document: violation",
         "![](diagram:b-dep)\n", 1),
        ("embedded twice, once correctly and once not: one violation",
         "![](diagram:a-req)\n![](diagram:b-dep)\n\nprose\n\n![](diagram:b-dep)\n", 1),
    ]
    ok = True
    for name, text, want in cases:
        got = len(check_text(text, deps))
        passed = got == want
        ok = ok and passed
        print(f"{'PASS' if passed else 'FAIL'} {name} (want {want}, got {got})")
    scoped = [("b-dep", "a-req", ("content/x.md",), "test")]
    bad = "Text only.\n\n![](diagram:b-dep)\n"
    for name, host, want in (("host-scoped row, named host: violation", "content/x.md", 1),
                             ("host-scoped row, other host: pass", "content/y.md", 0)):
        got = len(check_text(bad, scoped, host=host))
        passed = got == want
        ok = ok and passed
        print(f"{'PASS' if passed else 'FAIL'} {name} (want {want}, got {got})")
    print("self-test: " + ("ALL PASS" if ok else "FAILURES"))
    return 0 if ok else 1


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--self-test", action="store_true", help="run the offline cases")
    args = ap.parse_args()
    if args.self_test:
        return self_test()
    return run()


if __name__ == "__main__":
    sys.exit(main())
