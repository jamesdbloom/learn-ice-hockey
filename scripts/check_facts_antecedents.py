#!/usr/bin/env python3
"""Report ` ```facts ` lines that point at something a listener has not heard.

⚠️ WORKLIST, NOT A GATE. No ``--strict``, and it must never gain one — most
demonstratives in this corpus are correct, and a sweep on this pattern would do
real damage. See "WHY THE OBVIOUS PATTERN IS USELESS" below.

WHY IT EXISTS
-------------
Every facts line is voiced **alone**: ``md_to_speech`` gives it its own ``<p>``
with a 300 ms break either side. **So a line that refers to the line above it
refers, for a listener, to nothing at all.**

Two instances were found by hand in two consecutive rounds, in different
documents, and neither ``check_facts.py`` nor any worklist could see them:

- ``special_teams.md`` carried *"runs no such test"* — the test being the one named
  in the preceding fact. Repaired by substitution to *"runs no impairment test"*,
  which was **two characters shorter** than the broken version.
- ``playing_without_the_puck.md`` ended a rule fact on the permissive half of a
  conflict, with the instruction living only in its sibling.

⚠️ WHY THE OBVIOUS PATTERN IS USELESS, AND THIS IS THE POINT OF THE TOOL
------------------------------------------------------------------------
Matching every facts value opening on a demonstrative or a bare negation returns
**over a hundred hits, and the overwhelming majority are CORRECT.** Two shapes are
fine and must not be touched:

1. **The demonstrative RESTATES its claim.** *"That a change of speed beats top
   speed is coaching craft, not a measured finding"* — a listener hearing this
   alone has the whole claim and its hedge. ⚠️ **This is the corpus's disclosure
   convention and non-negotiable 4 protects it.**
2. **The subject is concrete and self-naming.** *"Both defencemen back toward your
   own blue line"*, *"Neither USA Hockey nor Hockey Canada penalises a goalkeeper's
   forward throw"* — nothing is being pointed at.

**The discriminator that works: a demonstrative attached to a SHORT ABSTRACT NOUN
that names a thing the listener has not been given** — *that count*, *that
ranking*, *that pair*, *those conversion ranges*, *that exchange*, *that freeze*,
*that minor*, *that area*, *that exclusion*. **The noun is a pointer, not a
description.**

⚠️ **A HIT IS A CANDIDATE, NOT A DEFECT.** Some are legitimately scoped by the rest
of the line. **Read each one, voiced alone, and ask what a listener knows at that
moment.** Only that decides.

FIXING ONE
----------
⚠️ **Try SUBSTITUTION before concluding a line is too long to repair.** Naming the
thing is frequently *shorter* than pointing at it, and this has now been measured
twice. **NEVER trade out a caveat to make room** — a traded-away caveat looks like
a clean edit and passes every checker, which is why this class went unseen.
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
CONTENT = REPO / "content"

FACT = re.compile(r"^([A-Z][A-Za-z ]*?):\s+(.+)$")

# The abstract nouns that act as pointers rather than descriptions. Deliberately a
# closed list: a broad "any noun" match reproduces the hundred-hit false positive
# rate this tool exists to avoid.
POINTER = re.compile(
    r"^(That|Those|These|This)\s+([a-z-]+\s+)?("
    r"count|ranking|pair|figure|range|ranges|number|numbers|exchange|area|minor|"
    r"freeze|exclusion|limb|carve-out|window|order|finding|study|clause|clauses|"
    r"bar|instruction|test|rule|split|gap|distinction"
    r")\b",
    re.IGNORECASE,
)

# Shown with --all: the broad pattern, for anyone who wants to see the noise the
# narrow one filters out. Never the default.
BROAD = re.compile(
    r"^(That|This|These|Those|The same|It |Its |Their |Both |Neither |Either |"
    r"runs no|writes no|has no|does no)",
    re.IGNORECASE,
)


def facts_lines(path: pathlib.Path):
    """Yield (lineno, label, value) for every facts line in one document."""
    inside = False
    for n, line in enumerate(path.read_text().split("\n"), 1):
        stripped = line.strip()
        if stripped.startswith("```facts"):
            inside = True
            continue
        if inside and stripped == "```":
            inside = False
            continue
        if not inside:
            continue
        m = FACT.match(stripped)
        if m:
            yield n, m.group(1), m.group(2)


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument(
        "--all",
        action="store_true",
        help="also list the BROAD pattern's hits — mostly correct, shown for calibration",
    )
    ap.add_argument("paths", nargs="*", type=pathlib.Path,
                    help="documents to scan (default: all of content/)")
    args = ap.parse_args(argv)

    docs = args.paths or sorted(CONTENT.rglob("*.md"))
    narrow, broad = [], []
    scanned = 0
    for path in docs:
        if not path.is_file():
            continue
        scanned += 1
        for n, label, value in facts_lines(path):
            # ⚠️ A path given on the command line may be RELATIVE, and
            # `Path.relative_to` raises rather than resolving it — so
            # `check_facts_antecedents.py content/foo.md` crashed with a
            # ValueError naming a path that plainly exists. Reported by an agent
            # whose brief told it to run this tool. Resolve before comparing, and
            # fall back to the path as given if it lies outside the repo.
            try:
                rel = path.resolve().relative_to(REPO)
            except ValueError:
                rel = path
            if POINTER.match(value):
                narrow.append((rel, n, label, value))
            elif args.all and BROAD.match(value):
                broad.append((rel, n, label, value))

    print(f"check_facts_antecedents: {scanned} documents, "
          f"{len(narrow)} facts lines pointing at an abstract noun a listener has not heard")

    for rel, n, label, value in narrow:
        print(f"\n{rel}:{n}  [{label}]  {len(value)} chars")
        print(f"    {value}")

    if args.all:
        print(f"\n--- BROAD pattern, {len(broad)} more. "
              f"⚠️ MOSTLY CORRECT — shown to calibrate, not to fix. ---")
        for rel, n, label, value in broad:
            print(f"  {rel}:{n} [{label}]  {value[:110]}")

    # Worklist: never non-zero. A demonstrative is usually right.
    return 0


if __name__ == "__main__":
    sys.exit(main())
