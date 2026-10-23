#!/usr/bin/env python3
"""Report captions that REPEAT the prose they now sit beside.

⚠️  WORKLIST, NOT A GATE. It has no `--strict` and must never gain one. Read every hit.

WHY THIS EXISTS. Two workstreams ran on 15 September 2026. One shortened ~220 diagram
captions toward an owner target of 25-50 words; the other moved 85 markers so that a
diagram FOLLOWS the prose describing it instead of leading its section. Together they
create a defect neither could create alone: **a caption is now adjacent to the paragraph
it paraphrases**, and a listener hears the same sentence twice in a row.

⚠️  THE CAPTION WAVE LARGELY FAILED — corpus-wide, 188 of 204 captions were rewritten and the
    count inside the owner's 25-50 band moved only 11 -> 14, with 189 of 204 still over 50 —
    because the
    agents could not cut SAFETY LIMBS, RULE SCOPE or HEDGES, and were right not to. This
    tool finds the words they CAN cut: the ones already voiced, in the listener's ear, a
    beat earlier. That is where the target is actually reachable.

⚠️⚠️  THREE KINDS OF OVERLAP ARE CORRECT AND MUST NOT BE CUT. A sweep over this output
      would damage the corpus in three specific ways:

  1. **A REGION DEFINITION MUST MATCH ITS OWNER WORD FOR WORD.** `the-slot`,
     `the-high-slot` and `the-goalmouth` score high here against
     `rink_map.md`, and that is the CORRECT state. A band labelled "the high
     slot" was once drawn at 3.14x the area its owner defines, in two diagrams, under
     captions matching the owner's words -- and it passed every gate. Rewording a caption
     to score lower here is how a region definition drifts. `check_zones.py` exists
     because of that defect and cannot see a region drawn consistently wrong everywhere.

  2. **A DISCLOSURE VOICED IN BOTH LAYERS IS PROPAGATION, NOT REDUNDANCY.** `breakout-up`
     scores on "no count ranks breakout plays by", which is a negative-existence claim.
     Non-negotiable 4 forbids stripping an honest disclosure, and the ```facts and caption
     layers are each voiced ALONE with a 300 ms break either side -- so a listener who
     meets one may never meet the other. Cutting the caption's copy makes the corpus look
     more confident than it is.

  3. **A SAFETY LIMB REPEATED IS REPEATED ON PURPOSE.** `winger-arriving-at-the-line`
     scores on "a hit you cannot see". Every round-10 critical was a correction that
     reached the body and stopped.

  **What IS cuttable is narrative restatement** -- the caption re-telling the tactical
  story the paragraph just told. Compare `dz-strong-side-overload` ("cutting the ice in
  half", "is unoccupied by design") against `the-slot`, and the difference is obvious on
  reading and invisible to this tool.

METHOD. For every `![](diagram:slug)` marker in `content/`, take the prose unit
immediately above it -- the paragraph, the blockquote paragraph or the tight list, never
a table, a facts block or a second blockquote paragraph (see `block_above`) -- and compare 5-word shingles against the
caption's. Then do the same for the prose unit immediately BELOW it (see `block_below`),
and report those hits in a SEPARATE, labelled section. Captions are
read from the `.mjs` SOURCES via check_caption_negations.captions(), never from
`site/src/data/diagrams.json` -- the JSON is a build product and goes stale the moment a
caption is edited.

⚠️  A BLOCK IS NOT A PARAGRAPH. Markdown bullet lists carry no blank line between items, so
    the block above a marker is often an entire list -- deliberately, see `block_above`. `--max-ratio` drops blocks more than
    N times the caption's length, because a 25-word caption scoring against a 1,754-word
    block tells you nothing. The first version of this measurement had no such filter and
    its top four rows were all artefacts of exactly that.

⚠️  THE BLOCK BELOW IS COMPARED TOO (added 23 Oct 2026). The first version looked only
    ABOVE the marker, so a caption repeating the paragraph that FOLLOWS the diagram was
    invisible -- and one was found by hand in `risk_management.md` (the cross-ice case,
    since fixed). A listener hears caption-then-paragraph just as adjacently as
    paragraph-then-caption. Below-block hits print in their own section, tagged
    `[below]`; the above-block section and its header lines are unchanged in format, so
    a before/after diff of the old output still lines up. A caption can appear in both.

`--show` takes EITHER an integer (shared runs printed per hit, default 3) OR a diagram
id, which prints every marker of that diagram with its above AND below score and all
shared runs, ignoring `--min-share` and saying when `--max-ratio` skipped a side.

Positional PATHS (files or directories) replace the default `content/` -- for a
synthetic test or a single document. Exit status is always 0.
"""
from __future__ import annotations
import re, sys, glob, pathlib, argparse, importlib.util

ROOT = pathlib.Path(__file__).resolve().parent.parent
MARK = re.compile(r'^!\[\]\(diagram:([^)]+)\)')
N = 5


def load_captions() -> dict[str, str]:
    spec = importlib.util.spec_from_file_location(
        "ccn", ROOT / "scripts" / "check_caption_negations.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return {slug: text for _f, slug, field, text in mod.captions() if field == "caption"}


def words(t: str) -> list[str]:
    return re.findall(r"[a-z']+", t.lower())


def shingles(ws: list[str]) -> set[tuple[str, ...]]:
    return {tuple(ws[i:i + N]) for i in range(len(ws) - N + 1)}


def block_above(lines: list[str], i: int) -> str:
    """The prose unit a listener hears directly before the diagram at line i.

    ⚠️ NARROWED 22 Oct 2026 (plan row 56b). This used to return the whole contiguous
    non-blank block, so a marker under a bullet list scored its caption against EVERY
    item in the list, and a marker under a blockquote against every paragraph of it --
    and `--max-ratio` then threw most of those comparisons away as too long, hiding the
    one item actually adjacent to the caption. Now:

      * blank lines and further diagram markers directly above are skipped, so the
        second of two stacked diagrams is compared with the prose above the pair;
      * the unit stops at a heading, a code fence (a ```facts block is its own layer),
        and a bare `>` line (which ends a blockquote paragraph);
      * a table directly above is not prose, and returns nothing.

    ⚠️ A TIGHT LIST IS KEPT WHOLE, ON PURPOSE. Keeping only its last item was tried
    and measured the same day: it dropped exactly three hits -- `goalie-breakaway-retreat`,
    `rush-backcheck-lanes`, `oz-cross-the-road-yourself` -- and all three were REAL
    echoes, a caption retelling the list's earlier items ("stay on your feet as long as
    you possibly can" is item 3 of 6). A listener hears the whole list and then the
    caption, so the list is the unit; `--max-ratio` still drops one too long to judge.
    """
    j = i - 1
    while j >= 0 and (not lines[j].strip() or MARK.match(lines[j].strip())):
        j -= 1
    if j < 0 or lines[j].lstrip().startswith('|'):
        return ""
    out = []
    while j >= 0:
        s = lines[j].strip()
        if (not s or s.startswith('#') or s.startswith('```')
                or re.fullmatch(r'(?:>\s*)+', s) or MARK.match(s)):
            break
        out.append(lines[j])
        j -= 1
    return " ".join(reversed(out))


def block_below(lines: list[str], i: int) -> str:
    """The prose unit a listener hears directly AFTER the diagram at line i.

    The mirror of `block_above`, with the same boundaries: blank lines and further
    diagram markers directly below are skipped (so the first of two stacked diagrams is
    compared with the prose after the pair); the unit stops at a blank line, a heading, a
    code fence, a bare `>` line or another marker; a table or a code fence (a ```facts
    block is its own layer) directly below returns nothing. A tight list is kept whole,
    for the reason `block_above` gives.
    """
    j = i + 1
    n = len(lines)
    while j < n and (not lines[j].strip() or MARK.match(lines[j].strip())):
        j += 1
    if j >= n:
        return ""
    first = lines[j].strip()
    if first.startswith('|') or first.startswith('```') or first.startswith('#'):
        return ""
    out = []
    while j < n:
        s = lines[j].strip()
        if (not s or s.startswith('#') or s.startswith('```')
                or re.fullmatch(r'(?:>\s*)+', s) or MARK.match(s)):
            break
        out.append(lines[j])
        j += 1
    return " ".join(out)


def compare(cap: str, para: str, max_ratio: float):
    """(share, caption words, block words, shared runs), or None when not comparable."""
    cws, pws = words(cap), words(para)
    if len(pws) < 8 or len(pws) > max_ratio * len(cws):
        return None
    cs = shingles(cws)
    if not cs:
        return None
    shared = cs & shingles(pws)
    return len(shared) / len(cs), len(cws), len(pws), sorted(shared)


def md_files(paths: list[str]) -> list[str]:
    if not paths:
        return sorted(glob.glob(str(ROOT / "content" / "**" / "*.md"), recursive=True))
    out = []
    for p in paths:
        pp = pathlib.Path(p)
        if pp.is_dir():
            out += glob.glob(str(pp / "**" / "*.md"), recursive=True)
        else:
            out.append(str(pp))
    return sorted(out)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("paths", nargs="*",
                    help="markdown files or directories to scan (default: content/)")
    ap.add_argument("--max-ratio", type=float, default=3.0,
                    help="skip blocks longer than this multiple of the caption (default 3)")
    ap.add_argument("--min-share", type=float, default=0.10,
                    help="only report captions sharing at least this fraction of their runs")
    ap.add_argument("--show", default="3",
                    help="an integer: shared runs to print per hit (default 3); or a "
                         "diagram id: print every marker of that diagram, both sides, "
                         "all shared runs, ignoring --min-share")
    args = ap.parse_args()

    show_slug = None
    try:
        show_n = int(args.show)
    except ValueError:
        show_slug, show_n = args.show, 10 ** 6

    caps = load_captions()
    if show_slug is not None and show_slug not in caps:
        print(f"check_caption_echo: no caption found for diagram id '{show_slug}' "
              f"(ids are read from site/src/diagrams/*.mjs)")
        return 0

    rows, below_rows, markers, compared, compared_below = [], [], 0, 0, 0
    detail = []   # for --show <slug>

    for f in md_files(args.paths):
        lines = pathlib.Path(f).read_text().splitlines()
        for i, line in enumerate(lines):
            m = MARK.match(line.strip())
            if not m:
                continue
            markers += 1
            slug = m.group(1)
            cap = caps.get(slug)
            if not cap:
                continue
            fname = pathlib.Path(f).name
            above = compare(cap, block_above(lines, i), args.max_ratio)
            below = compare(cap, block_below(lines, i), args.max_ratio)
            if above:
                compared += 1
                if above[0] >= args.min_share:
                    rows.append((above[0], slug, above[1], above[2], fname, above[3]))
            if below:
                compared_below += 1
                if below[0] >= args.min_share:
                    below_rows.append((below[0], slug, below[1], below[2], fname, below[3]))
            if slug == show_slug:
                detail.append((f, i + 1, above, below))

    if show_slug is not None:
        print(f"check_caption_echo: diagram '{show_slug}', {len(detail)} marker(s), "
              f"caption {len(words(caps[show_slug]))}w\n")
        for f, ln, above, below in detail:
            rel = pathlib.Path(f).resolve()
            try:
                rel = rel.relative_to(ROOT)
            except ValueError:
                pass
            print(f"  {rel}:{ln}")
            for side, res in (("above", above), ("below", below)):
                if res is None:
                    print(f"    [{side}]  not compared (no prose block, under 8 words, "
                          f"or over {args.max_ratio:g}x the caption)")
                    continue
                share, cw, pw, shared = res
                print(f"    [{side}]  {share*100:5.1f}%  (caption {cw}w, block {pw}w)")
                for sh in shared:
                    print(f"           \"{' '.join(sh)}\"")
        return 0

    rows.sort(reverse=True)
    below_rows.sort(reverse=True)
    print(f"check_caption_echo: {markers} markers, {compared} compared "
          f"(the rest had no prose block above, or one over {args.max_ratio:g}x the caption)")
    print(f"  {len(rows)} caption(s) sharing >= {args.min_share:.0%} of their "
          f"{N}-word runs with the block above them\n")

    for share, slug, cw, pw, fname, shared in rows:
        print(f"  {share*100:5.1f}%  {slug}  (caption {cw}w, block {pw}w)  {fname}")
        for sh in shared[:show_n]:
            print(f"           \"{' '.join(sh)}\"")

    print(f"\n  BELOW: {compared_below} compared against the prose block AFTER the marker; "
          f"{len(below_rows)} caption(s) sharing >= {args.min_share:.0%} of their "
          f"{N}-word runs with it\n")
    for share, slug, cw, pw, fname, shared in below_rows:
        print(f"  [below]  {share*100:5.1f}%  {slug}  (caption {cw}w, block {pw}w)  {fname}")
        for sh in shared[:show_n]:
            print(f"                    \"{' '.join(sh)}\"")

    print("\n⚠️  A WORKLIST. Read every hit and ask WHAT KIND of overlap it is.")
    print("⚠️  A region definition must match its owner word for word -- do NOT reword it.")
    print("⚠️  A disclosure or a safety limb voiced in both layers is propagation, not waste.")
    print("⚠️  Only NARRATIVE restatement is cuttable. This tool cannot tell the difference.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
