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
units by hand. 
⚠️ THE 29 SEPTEMBER REWRITE STILL RE-IMPLEMENTED THE PARSER, AND IT DIVERGED (fixed 19 October
2026). md_to_speech ends a list at a blank line unless a list item follows; this tool's blank-line
split took a block opening with an indented continuation paragraph and fused it with the items
after it, so inside Common Mistakes one "unit" ran to 13-24k characters -- a lost marker inside it
went unreported and untouched siblings reported as "no longer present by key". units() now calls
md_to_speech.parse_blocks and _list_items directly. It still mirrors the DISPATCH in
render_quote / render_facts by hand: if those change, re-validate with `--base` against a known
wave.

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
units opening with the same 60 characters) collapse to the LAST one. List markers are not part
of the key (a renumbered Key Takeaway still pairs), so a Key Takeaway that opens with the same
words as an Overview paragraph collides with it, and a LOST can then be two different units
paired by accident -- measured on goaltender.md :52 against the old KT6. Grep the key.

WORKLIST, NOT A GATE. Read every hit.

Usage: python3 scripts/check_marker_pairs.py [--base REV] <path> [<path> ...]
       --base defaults to HEAD. Use --base <commit>~1 to re-check a committed wave.
"""

import os
import re
import subprocess
import sys

LIST_RE = re.compile(r"^\s*(?:[-*+]|\d+[.)])\s+")

# Use md_to_speech's OWN block parser and list flattener, so a unit here is a unit there by
# construction rather than by a comment asserting it.
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import md_to_speech  # noqa: E402


def units(text):
    """Spoken units, exactly where md_to_speech computes `important`.

    paragraph -> render_paragraph (one unit); list -> render_list (one unit per
    _list_items item); quote -> render_quote (one unit per inner paragraph, or per item if
    the inner paragraph is a list); ```facts -> render_facts (one unit per line). Headings,
    tables and non-facts code blocks never set `important`, so they are not units.
    """
    out = []
    for block in md_to_speech.parse_blocks(text):
        if block.kind == "code":
            if block.lines and block.lines[0].strip().lower().startswith("```facts"):
                out.extend(l.strip() for l in block.lines[1:-1] if l.strip())
        elif block.kind == "list":
            out.extend(md_to_speech._list_items(block.lines))
        elif block.kind == "quote":
            inner = "\n".join(re.sub(r"^\s*>\s?", "", l) for l in block.lines)
            for para in re.split(r"\n\s*\n", inner):
                lines = [l for l in para.split("\n") if l.strip()]
                if not lines:
                    continue
                if len(lines) >= 2 and all(l.lstrip().startswith("|") for l in lines):
                    continue  # render_table: no `important`
                if re.match(r"^\s*(#{1,6})\s+", para):
                    continue  # render_heading: no `important`
                if LIST_RE.match(para):
                    out.extend(md_to_speech._list_items(para.split("\n")))
                else:
                    out.append(para.replace("\n", " "))
        elif block.kind == "paragraph":
            out.append(" ".join(block.lines))
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
    if argv[:1] in (["-h"], ["--help"]):
        print("usage: check_marker_pairs.py [--base REV] [content/....md ...]\n"
              "With no paths, checks every content/ file that differs from REV (default HEAD).")
        return
    if not argv:
        # Until 15 October 2026 a bare run checked NOTHING and exited 0, which read
        # as a clean pass. A commit gate measured it. Default to the changed files.
        argv = [os.path.join(root, f) for f in subprocess.run(
            ["git", "diff", "--name-only", base, "--", "content"],
            capture_output=True, text=True, cwd=root).stdout.split() if f.endswith(".md")]
        if not argv:
            print(f"check_marker_pairs: no content/ file differs from {base} -- nothing to check")
            return
    total_lost = 0
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
        total_lost += len(lost)
        print(f"   LOST MARKER (same unit, marker gone): {len(lost)}")
        for k in lost:
            print(f"      -> {k!r}")
        print(f"   unit no longer present by key: {len(vanished)}")
        for k in vanished:
            print(f"      ?? {k!r}")
    print(f"\ncheck_marker_pairs: {len(argv)} file(s), {total_lost} LOST MARKER(s) in total "
          f"(a worklist: read each; exit status is always 0)")


if __name__ == "__main__":
    main(sys.argv[1:])
