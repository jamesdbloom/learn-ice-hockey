#!/usr/bin/env python3
"""Report tables that the speech renderer DROPS instead of reading aloud.

⚠️  WHY THIS EXISTS. A repair in round 58 lengthened one cell of the nine-row
*Choosing a Forecheck by Game State* table in `forechecking_systems.md` to 215
characters, over `md_to_speech.TABLE_MAX_CELL_CHARS = 200`. The whole table
stopped rendering as prose and became a single sentence -- "A detailed table
appears here in the written version... it is not narrated." **A listener lost
every row.**

`check_facts.py`, `check_links.py` and `check_absolutes.py` all PASSED on that
state. It was found by an agent sentence-diffing its own rendered audio, and it
would have shipped otherwise.

⚠️  `check_pointers.py` does NOT cover this. That tool reports a spoken sentence
pointing at a layer the listener cannot reach -- so it fires only when some
sentence happens to refer to the table. **A table that degrades silently, with
no sentence pointing at it, is invisible to every existing check.** That is the
gap this fills.

⚠️  A SECOND THING THIS TOOL CANNOT SEE, found by an agent while using it.
`render_table` emits the FIRST cell of each row bare and prefixes only columns
1+ with their heading -- so **the first column's header is never spoken.** Any
voiced two-column table whose first column is a CATEGORY (`Legal | Penalty`,
`Do | Don't`, `Safe | Unsafe`) loses that label in audio, and states a permitted
act with no label immediately before a penalised one. Such a table passes every
limit here and reports as "read aloud". **Being voiced is not the same as being
understood.**

⚠️  WORKLIST, NOT A GATE, and it must never gain a `--strict`. A table dropped
from the audio is often CORRECT: a wide comparison table is genuinely unreadable
aloud, and the corpus deliberately voices the substance inline instead. The
question this tool cannot answer is whether the substance survives elsewhere --
only reading the surrounding prose settles that. What it CAN tell you is which
tables a listener never hears, and -- the useful part -- **which ones are only
just over a threshold**, because those are the ones a small edit broke.

Usage:
    python3 scripts/check_tables.py            # all documents
    python3 scripts/check_tables.py --near     # only tables close to a limit
"""

from __future__ import annotations

import argparse
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))

import md_to_speech as m  # noqa: E402

CONTENT = pathlib.Path(__file__).resolve().parent.parent / "content"

# How close to a limit counts as "one edit away". A cell at 185 of 200 is a
# latent defect; the round-58 break was a cell pushed from under to 215.
NEAR_MARGIN_CHARS = 30
NEAR_MARGIN_ROWS = 2


def parse_tables(text: str):
    """Yield (line_no, header_cells, row_cells) for every markdown pipe table.

    Deliberately simple: a header row, a separator row of dashes, then body
    rows. That is the only table form the corpus uses, and the renderer's own
    parser accepts no more.
    """
    lines = text.split("\n")
    i = 0
    while i < len(lines) - 1:
        line = lines[i].strip()
        nxt = lines[i + 1].strip()
        is_sep = (
            nxt.startswith("|")
            and set(nxt.replace("|", "").replace(" ", "")) <= set("-:")
            and "-" in nxt
        )
        if line.startswith("|") and is_sep:
            header = [c.strip() for c in line.strip("|").split("|")]
            rows = []
            j = i + 2
            while j < len(lines) and lines[j].strip().startswith("|"):
                rows.append([c.strip() for c in lines[j].strip().strip("|").split("|")])
                j += 1
            yield i + 1, header, rows
            i = j
            continue
        i += 1


def longest_cell(header, rows) -> int:
    cells = list(header) + [c for r in rows for c in r]
    return max((len(c) for c in cells), default=0)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--near",
        action="store_true",
        help="only tables within a small margin of a limit -- the ones an edit can break",
    )
    args = ap.parse_args()

    dropped, near, voiced = [], [], 0

    for path in sorted(CONTENT.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        for line_no, header, rows in parse_tables(text):
            cols = len(header)
            n_rows = len(rows)
            longest = longest_cell(header, rows)
            title = " | ".join(header)[:58]

            # ⚠️ ASK THE RENDERER, DO NOT RE-IMPLEMENT ITS TEST. The first
            # version of this tool checked only columns, rows and cell length,
            # and MISSED two of the four conditions `table_is_readable` applies
            # -- a RAGGED column count and an empty body. An agent found the
            # gap by reading `md_to_speech.py` beside this file: "a table the
            # renderer drops for a reason the tool does not model would not
            # appear on the worklist at all." Calling the real function is the
            # only thing that keeps the two from diverging again.
            readable = m.table_is_readable(header, rows)

            over_cols = cols > m.TABLE_MAX_COLUMNS
            over_rows = n_rows > m.TABLE_MAX_ROWS
            over_cell = longest > m.TABLE_MAX_CELL_CHARS
            ragged = len({len(r) for r in rows} | {cols}) != 1

            if not readable:
                why = []
                if ragged:
                    widths = sorted({len(r) for r in rows} | {cols})
                    why.append(f"RAGGED: row widths {widths}")
                if not rows:
                    why.append("no body rows")
                if over_cols:
                    why.append(f"{cols} cols > {m.TABLE_MAX_COLUMNS}")
                if over_rows:
                    why.append(f"{n_rows} rows > {m.TABLE_MAX_ROWS}")
                if over_cell:
                    why.append(f"cell {longest} > {m.TABLE_MAX_CELL_CHARS} chars")
                if not why:
                    why.append("rejected by table_is_readable for a reason "
                               "this tool does not model -- read md_to_speech.py")
                dropped.append((path, line_no, title, ", ".join(why),
                                over_cell and not over_cols and not over_rows and not ragged))
            else:
                voiced += 1
                margin_cell = m.TABLE_MAX_CELL_CHARS - longest
                margin_rows = m.TABLE_MAX_ROWS - n_rows
                if margin_cell <= NEAR_MARGIN_CHARS or margin_rows <= NEAR_MARGIN_ROWS:
                    near.append(
                        (path, line_no, title, f"{margin_cell} chars and {margin_rows} rows of headroom")
                    )

    root = CONTENT.parent

    if not args.near:
        print(f"Tables a listener NEVER HEARS ({len(dropped)}):\n")
        for path, line_no, title, why, cell_only in sorted(dropped, key=lambda x: str(x[0])):
            mark = "  ⚠️ " if cell_only else "     "
            print(f"{mark}{path.relative_to(root)}:{line_no}  [{why}]")
            print(f"        {title}")
        if any(c for *_, c in dropped):
            print(
                "\n  ⚠️  The ⚠️ rows are over on CELL LENGTH ALONE -- narrow enough and\n"
                "      short enough to be read aloud, and dropped only because one cell\n"
                "      is long. Those are the ones an ordinary edit breaks, and the ones\n"
                "      worth shortening."
            )

    print(f"\nTables within one edit of being dropped ({len(near)}):\n")
    for path, line_no, title, margin in sorted(near, key=lambda x: str(x[0])):
        print(f"     {path.relative_to(root)}:{line_no}  [{margin}]")
        print(f"        {title}")

    print(
        f"\n{'=' * 70}\n"
        f"{len(dropped)} dropped, {voiced} read aloud, {len(near)} of those near a limit.\n"
        f"limits: {m.TABLE_MAX_COLUMNS} cols, {m.TABLE_MAX_ROWS} rows, "
        f"{m.TABLE_MAX_CELL_CHARS} chars/cell\n"
        "\n"
        "⚠️  WORKLIST, NOT A GATE. A dropped table is often CORRECT -- a wide\n"
        "    comparison table cannot be read aloud, and this corpus deliberately\n"
        "    voices the substance inline instead. This tool CANNOT tell you\n"
        "    whether it does. Read the surrounding prose before changing anything,\n"
        "    and never shorten a cell by dropping a hedge, a citation or a scope\n"
        "    flag to get under the limit.\n"
        "\n"
        "⚠️  It exists because a repair pushed one cell to 215 chars and silently\n"
        "    cost a listener a nine-row table, while every gate passed."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
