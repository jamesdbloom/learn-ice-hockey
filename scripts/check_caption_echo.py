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

METHOD. For every `![](diagram:slug)` marker in `content/`, take the contiguous non-heading
block immediately above it and compare 5-word shingles against the caption's. Captions are
read from the `.mjs` SOURCES via check_caption_negations.captions(), never from
`site/src/data/diagrams.json` -- the JSON is a build product and goes stale the moment a
caption is edited.

⚠️  A BLOCK IS NOT A PARAGRAPH. Markdown bullet lists carry no blank line between items, so
    the block above a marker is often an entire list. `--max-ratio` drops blocks more than
    N times the caption's length, because a 25-word caption scoring against a 1,754-word
    block tells you nothing. The first version of this measurement had no such filter and
    its top four rows were all artefacts of exactly that.
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
    """The contiguous non-blank, non-heading block immediately above line i."""
    j = i - 1
    while j >= 0 and not lines[j].strip():
        j -= 1
    out = []
    while j >= 0 and lines[j].strip() and not lines[j].startswith('#'):
        out.append(lines[j])
        j -= 1
    return " ".join(reversed(out))


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--max-ratio", type=float, default=3.0,
                    help="skip blocks longer than this multiple of the caption (default 3)")
    ap.add_argument("--min-share", type=float, default=0.10,
                    help="only report captions sharing at least this fraction of their runs")
    ap.add_argument("--show", type=int, default=3, help="shared runs to print per hit")
    args = ap.parse_args()

    caps = load_captions()
    rows, markers, compared = [], 0, 0

    for f in sorted(glob.glob(str(ROOT / "content" / "**" / "*.md"), recursive=True)):
        lines = pathlib.Path(f).read_text().splitlines()
        for i, line in enumerate(lines):
            m = MARK.match(line.strip())
            if not m:
                continue
            markers += 1
            cap = caps.get(m.group(1))
            if not cap:
                continue
            para = block_above(lines, i)
            cws, pws = words(cap), words(para)
            if len(pws) < 8 or len(pws) > args.max_ratio * len(cws):
                continue
            compared += 1
            cs = shingles(cws)
            if not cs:
                continue
            shared = cs & shingles(pws)
            share = len(shared) / len(cs)
            if share >= args.min_share:
                rows.append((share, m.group(1), len(cws), len(pws),
                             pathlib.Path(f).name, sorted(shared)))

    rows.sort(reverse=True)
    print(f"check_caption_echo: {markers} markers, {compared} compared "
          f"(the rest had no prose block above, or one over {args.max_ratio:g}x the caption)")
    print(f"  {len(rows)} caption(s) sharing >= {args.min_share:.0%} of their "
          f"{N}-word runs with the block above them\n")

    for share, slug, cw, pw, fname, shared in rows:
        print(f"  {share*100:5.1f}%  {slug}  (caption {cw}w, block {pw}w)  {fname}")
        for sh in shared[:args.show]:
            print(f"           \"{' '.join(sh)}\"")

    print("\n⚠️  A WORKLIST. Read every hit and ask WHAT KIND of overlap it is.")
    print("⚠️  A region definition must match its owner word for word -- do NOT reword it.")
    print("⚠️  A disclosure or a safety limb voiced in both layers is propagation, not waste.")
    print("⚠️  Only NARRATIVE restatement is cuttable. This tool cannot tell the difference.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
