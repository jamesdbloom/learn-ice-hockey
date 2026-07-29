#!/usr/bin/env python3
"""Validate the ```facts blocks against the rules in project/content_style_guide.md.

The key-facts layer is a summary layer, and this project's own review history is
blunt about those: "the summary layer is where corrections go to die". This
checks the mechanical rules so a human review can spend itself on the ones that
need judgement.

What it checks
--------------
* Every label is in the closed set. No invented labels.
* ``Rule:`` facts cite something. A coaching instruction wearing a ``Rule:``
  label is the cardinal-rule failure this convention exists to avoid.
* No block on ``## Common Mistakes`` or ``## Key Takeaways`` — they are already
  extraction layers.
* No block on a ``##`` that has ``###`` subsections; it would restate its own
  heading.
* Fact counts inside 3-8, and blocks are well formed and closed.
* Only in-scope documents carry blocks at all.

What it cannot check
--------------------
Whether a fact is true, and whether it is traceable to its own section. That is
the extract-never-author rule, and it needs a reader.

Usage::

    python3 scripts/check_facts.py            # all in-scope documents
    python3 scripts/check_facts.py a.md b.md  # just these

Exits non-zero if anything failed. Standard library only.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
STRUCTURE = ROOT / "site" / "src" / "data" / "structure.json"

# Layers whose documents teach how to play. Style guide, "Key facts blocks".
# These are layer ids from structure.json, which are also the directory names
# under content/ — the two are kept identical deliberately.
IN_SCOPE_LAYERS = {"positions", "systems", "technique", "hockey-iq"}
# Sits in Foundation but is purely instructional — a list of what to shout.
IN_SCOPE_EXTRA = {"foundation/on_ice_communication"}

LABELS = (
    "Position", "Action", "Goal", "Priority", "Technique", "Options",
    "Targets", "Read", "Countered by", "Never", "Convention", "Risk",
    "Key", "Mindset", "Rule",
)

EXEMPT_HEADINGS = {"common mistakes", "key takeaways"}

# The cap governs how much COACHING content a block holds. Rulebook facts are
# mandatory — the style guide is explicit that a cap must never evict one — so
# they do not count against it. The hard ceiling still applies to everything.
MIN_FACTS, MAX_COACHING_FACTS, HARD_MAX = 3, 8, 11

# A terse imperative. `Rule:` carries a citation and `Convention:` carries the
# body's hedge, and both are mandatory, so they are allowed more room. Neither
# gets unlimited room: past this it is prose and belongs in the body.
MAX_LEN, MAX_LEN_QUALIFIED = 200, 300
QUALIFIED = {"Rule", "Convention"}

FACT_RE = re.compile(r"^([A-Z][A-Za-z ]*?):\s+(.+)$")
# A Rule: fact must point at something — a numbered rule, or a named rulebook.
# A `Rule:` fact has to point at the book it came from. The last four
# alternatives are the rule sets by name; the first three are citation shapes
# ("Rule 27.7", "R404", "76.6").
#
# England Ice Hockey was added when the corpus gained its fifth rule set. Until
# then an EIH-only fact could not cite anything the checker recognised, so it
# had to name a second book it was not actually quoting — which is the opposite
# of what this check exists to enforce. `Rules 9.12` (plural, as the In-House
# Rules style themselves) also failed `\bRule\s+\d`, so the plural is allowed.
CITES_RE = re.compile(
    r"\bRules?\s+\d|\bR\d{3}\b|\b\d{2,3}\.\d|\bNHL\b|\bIIHF\b"
    r"|USA Hockey|Hockey Canada|England Ice Hockey|In-House Rules?|\bEIH\b",
)


def in_scope() -> set[str]:
    data = json.loads(STRUCTURE.read_text())
    ids = {
        doc
        for layer in data["layers"]
        if layer["id"] in IN_SCOPE_LAYERS
        for doc in layer["docs"]
    }
    return ids | IN_SCOPE_EXTRA


def parse(path: Path):
    """Yield (heading_level, heading_text, facts, lineno) for each facts block."""
    lines = path.read_text().split("\n")
    heading = ("", 0, 0)          # text, level, lineno
    parent = ""                   # nearest enclosing ## — the positional
                                  # documents legitimately repeat a ### such as
                                  # "Carrying the Puck — Free Space" once per
                                  # zone, so identity is (parent, heading)
    subsections: dict[int, int] = {}
    in_fence = False
    fence_lang = ""
    buf: list[str] = []
    start = 0
    blocks = []
    headings = []

    for i, line in enumerate(lines, 1):
        fence = re.match(r"^```(\w*)", line)
        if fence and not in_fence:
            in_fence, fence_lang, buf, start = True, fence.group(1), [], i
            continue
        if in_fence:
            if line.startswith("```"):
                if fence_lang == "facts":
                    blocks.append((heading[0], heading[1], buf[:], start, parent))
                in_fence = False
            else:
                buf.append(line)
            continue

        h = re.match(r"^(#{2,6})\s+(.*)", line)
        if h:
            level, text = len(h.group(1)), h.group(2).strip()
            heading = (text, level, i)
            if level == 2:
                parent = text
            headings.append((level, text, i))
            for lvl in list(subsections):
                if lvl >= level:
                    del subsections[lvl]
            if level > 2:
                subsections[level] = subsections.get(level, 0) + 1

    # which ## headings have ### children, and which of those carry substantive
    # prose of their own before the first child. A ## that is a one-line
    # container must not carry a block — it would restate its own heading. A ##
    # whose own body holds material no subsection covers legitimately may.
    has_children = set()
    own_prose: dict[str, int] = {}
    current_h2 = None
    h2_line = 0
    for level, text, ln in headings:
        if level == 2:
            current_h2, h2_line = text, ln
        elif level == 3 and current_h2:
            if current_h2 not in has_children:
                has_children.add(current_h2)
                between = lines[h2_line:ln - 1]
                own_prose[current_h2] = sum(
                    1 for x in between if x.strip() and x.strip() != "---"
                )

    container = {h for h in has_children if own_prose.get(h, 0) <= 3}
    return blocks, headings, container


def check(path: Path, scope: set[str]) -> list[str]:
    doc_id = str(path.relative_to(CONTENT)).removesuffix(".md")
    problems: list[str] = []
    blocks, headings, container = parse(path)

    if doc_id not in scope:
        if blocks:
            problems.append(
                f"{doc_id}: has {len(blocks)} facts block(s) but is NOT in scope"
            )
        return problems

    if not blocks:
        problems.append(f"{doc_id}: in scope but has no facts blocks")
        return problems

    seen: set[tuple[str, str, int]] = set()
    for text, level, facts, ln, parent in blocks:
        where = f"{doc_id}:{ln} under {'#' * level} {text!r}"

        if text.lower() in EXEMPT_HEADINGS:
            problems.append(f"{where}: exempt heading must not carry a block")
        if level == 2 and text in container:
            problems.append(
                f"{where}: ## is a one-line container — block belongs on its subsections"
            )
        if (parent, text, level) in seen:
            problems.append(f"{where}: duplicate block for this heading")
        seen.add((parent, text, level))

        body = [f for f in facts if f.strip()]
        rules = sum(1 for f in body if f.startswith("Rule:"))
        coaching = len(body) - rules
        if len(body) < MIN_FACTS:
            problems.append(f"{where}: {len(body)} facts, fewer than {MIN_FACTS}")
        elif coaching > MAX_COACHING_FACTS:
            problems.append(
                f"{where}: {coaching} non-rule facts, over {MAX_COACHING_FACTS}"
                " — the section is probably two sections"
            )
        elif len(body) > HARD_MAX:
            problems.append(f"{where}: {len(body)} facts, over the hard max {HARD_MAX}")

        for fact in body:
            m = FACT_RE.match(fact)
            if not m:
                problems.append(f"{where}: unparseable fact {fact[:60]!r}")
                continue
            label, value = m.group(1), m.group(2)
            if label not in LABELS:
                problems.append(f"{where}: unknown label {label!r}")
            if label == "Rule" and not CITES_RE.search(value):
                problems.append(
                    f"{where}: Rule: fact cites nothing — {value[:70]!r}"
                )
            limit = MAX_LEN_QUALIFIED if label in QUALIFIED else MAX_LEN
            if len(value) > limit:
                problems.append(
                    f"{where}: {label}: fact is {len(value)} chars, over {limit}"
                    " — split it or move it to the body"
                )
    return problems


def main() -> int:
    scope = in_scope()
    if len(sys.argv) > 1:
        paths = [Path(a).resolve() for a in sys.argv[1:]]
    else:
        paths = sorted(CONTENT.rglob("*.md"))

    problems, checked, total_blocks, total_facts = [], 0, 0, 0
    for path in paths:
        doc_id = str(path.relative_to(CONTENT)).removesuffix(".md")
        found = check(path, scope)
        problems += found
        if doc_id in scope:
            checked += 1
            blocks, _, _ = parse(path)
            total_blocks += len(blocks)
            total_facts += sum(len([f for f in b[2] if f.strip()]) for b in blocks)

    print(
        f"check_facts: {checked} in-scope documents · "
        f"{total_blocks} blocks · {total_facts} facts"
    )
    if problems:
        print(f"\n{len(problems)} problem(s):")
        for p in problems:
            print(f"  {p}")
        return 1
    print("all facts blocks conform to the style guide.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
