"""Name every spoken unit that carried a warning marker in HEAD and carries none now.

WHY THIS EXISTS. `md_to_speech.py` sets `important = "⚠" in text` PER SPOKEN UNIT, not
per marker, so a unit that loses its LAST marker silently loses a spoken "Important."
No other checker in this repository can see that, and CLAUDE.md says so.

WHAT A UNIT IS -- and why this was rewritten on 29 September 2026. The first version split on
blank lines only. `md_to_speech` sets `important` per paragraph (`render_paragraph`), per LIST
ITEM (`render_list`), per inner paragraph of a BLOCKQUOTE (`render_quote` splits on `>` blank
lines), and per ` ```facts ` line. So a blank-line block holding several list items, or a
`>`-joined blockquote holding several paragraphs, was ONE unit here and SEVERAL for a listener:
a unit that lost its last marker while a sibling in the same block kept one was invisible.
Wave 6 measured it: the tool missed rules_primer :798, shooting :512/:514 and special_teams
:712/:1115/:1157 -- six lost escalations, every one found only by a reviewer pairing rendered
units by hand. The units below mirror `render_quote` and `_list_items` in md_to_speech.py.
⚠️ If those functions change, this must change with them: a comment asserting fidelity to
another file is not fidelity to it, so re-validate with `--base` against a known wave.

WHY AN AGGREGATE DELTA IS NOT ENOUGH. A net figure is the sum of a loss and a gain and both
are invisible in it. Measured 24 September 2026: a wave showed 79 -> 77 and the -2 was
explained as a sanctioned paragraph MERGE. Only one of the two was. The other had its last
marker stripped, inside a delta already accounted for. On 25 September
`team_play_and_culture.md` went 24 -> 33 while this script confirmed no paragraph had lost
its own marker -- an aggregate RISE can hide a loss exactly as a fall can.

WHAT IT DOES NOT DO. It keys a unit by its first 60 characters of text with ⚠ and ** removed,
so moving a glyph or splitting a bold run does not change the key, but a unit whose OPENING
WORDS were rewritten reports as "no longer present by key" rather than as a loss. That is a
CANDIDATE, not a finding: check whether the rewritten unit still carries a marker. A re-aiming
wave rewrites Key focus bullets by design and will always produce these. Duplicate keys (two
units opening with the same 60 characters) collapse to one; that is rare and errs toward
reporting nothing for the duplicate.

WORKLIST, NOT A GATE. Read every hit.

Usage: python3 scripts/check_marker_pairs.py [--base REV] <path> [<path> ...]
       --base defaults to HEAD. Use --base <commit>~1 to re-check a committed wave.
"""

import os
import re
import subprocess
import sys

LIST_RE = re.compile(r"^\s*(?:[-*+]|\d+[.)])\s+")


def blocks(text):
    return [b for b in re.split(r"\n\s*\n", text) if b.strip()]


def list_items(lines):
    """Mirror md_to_speech._list_items: one string per item, continuation lines attached."""
    items, current = [], []
    for line in lines:
        if not line.strip():
            continue
        if LIST_RE.match(line):
            if current:
                items.append("\n".join(current))
            current = [line]
        elif current:
            current.append(line)
        else:
            current = [line]
    if current:
        items.append("\n".join(current))
    return items


def split_para(para):
    return list_items(para.split("\n")) if LIST_RE.match(para) else [para]


def units(text):
    """Spoken units, in the granularity md_to_speech uses for `important`."""
    out, in_fence = [], False
    for block in blocks(text):
        lines = block.split("\n")
        first = lines[0].lstrip()
        if first.startswith("```") or in_fence:
            # A fenced block: each content line of a ```facts block is voiced alone.
            for line in lines:
                if line.lstrip().startswith("```"):
                    in_fence = not in_fence
                    continue
                if line.strip():
                    out.append(line)
            continue
        if all(l.lstrip().startswith(">") for l in lines if l.strip()):
            inner = "\n".join(re.sub(r"^\s*>\s?", "", l) for l in lines)
            for para in blocks(inner):
                out.extend(split_para(para))
            continue
        out.extend(split_para(block))
    return out


def key(unit):
    text = unit.replace("⚠️", "").replace("⚠", "").replace("**", "")
    return re.sub(r"\s+", " ", text.strip())[:60]


def marked(unit):
    return "⚠" in unit


def main(argv):
    base = "HEAD"
    if argv[:1] == ["--base"]:
        base, argv = argv[1], argv[2:]
    root = subprocess.run(["git", "rev-parse", "--show-toplevel"],
                          capture_output=True, text=True).stdout.strip()
    for path in argv:
        # git show needs a REPO-RELATIVE path. An absolute path silently yields an
        # empty blob, which printed HEAD=0 and read like a catastrophic marker loss.
        # Reported by an agent that hit it, 25 September 2026.
        rel = os.path.relpath(os.path.abspath(path), root)
        r = subprocess.run(["git", "show", f"{base}:{rel}"], capture_output=True, text=True)
        if r.returncode != 0:
            print(f"{path}: NOT IN {base} (new file?) -- skipping")
            continue
        new_text = open(path, encoding="utf-8").read()
        o = {key(u): marked(u) for u in units(r.stdout)}
        n = {key(u): marked(u) for u in units(new_text)}
        lost = [k for k, v in o.items() if v and k in n and not n[k]]
        vanished = [k for k, v in o.items() if v and k not in n]
        print(f"{path}")
        print(f"   marked units {base}={sum(o.values())} tree={sum(n.values())}")
        print(f"   LOST MARKER (same unit, marker gone): {len(lost)}")
        for k in lost:
            print(f"      -> {k!r}")
        print(f"   unit no longer present by key: {len(vanished)}")
        for k in vanished:
            print(f"      ?? {k!r}")


if __name__ == "__main__":
    main(sys.argv[1:])
