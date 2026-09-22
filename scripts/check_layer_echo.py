#!/usr/bin/env python3
"""Report SUMMARY LAYERS that restate each other instead of adding to each other.

⚠️  WORKLIST, NOT A GATE. It has no `--strict` and must never gain one. Read every hit.

WHY THIS EXISTS
---------------
Every document carries five fixed layers — `## Key focus`, `## Overview`, the body,
`## Common Mistakes`, `## Key Takeaways` (and `## Check yourself` in 36 of 39). Read one
after another they are supposed to REINFORCE AND ADD DETAIL. The owner reported on
22 September 2026 that they had instead felt REPETITIVE: the takeaway, the summary and
the body saying the same thing in the same words.

It is a measured failure mode here, not a worry. `project/reviews/corpus_structure_measurements.md`
row P2 recorded Overviews restating their own facts blocks VERBATIM — `defender.md` 11 of 11,
`goaltender.md` 8 of 8, `center.md` 7 of 8 — and that repair reached only 5 of 9 documents
before it stopped. ⚠️ **Do not quote those figures as current. Run this tool.**

⚠️⚠️ THREE MEASURED BLIND SPOTS. Read these before believing a number.

  1. **A TRUNCATED SAFETY LIST SCORES LOWER, SO IT LOOKS CLEANER.** Found the day this tool
     was written: conditioning_and_recovery.md's Overview carries SIX of CRT6's TEN concussion
     red flags while Key focus carries all ten. A layer carrying a safety list in full scores
     HIGH and looks like a defect; a layer carrying six of ten scores LOW and looks clean.
     ⚠️ The incentive gradient points at truncating safety lists. For a safety list, a LOW
     score is actively suspicious. This tool cannot find that class — a layer test can.
  2. **`_words()` DROPS EVERY TOKEN OF FOUR CHARACTERS OR FEWER**, so the percentage measures
     CONTENT-WORD overlap, not what a listener hears. "a new player is the one person on the
     ice with an unlimited licence to ask" — 18 words, verbatim across two layers — reduces to
     four content words and produces ZERO 6-shingles. It scores 0.0%.
  3. **The sixth pair was missing.** See the note on PAIRS below.

⚠️  A PREMISE THIS FILE ONCE GOT WRONG, corrected 22 September 2026 by rendering:
    **ONLY ` ```facts ` LINES ARE VOICED ALONE**, each in its own <p> with a 300 ms break
    either side. ORDINARY PROSE PARAGRAPHS ARE NOT — the renderer groups several <p> into one
    <speak> chunk (special_teams.md's Overview renders as five <p> in ONE chunk). A prose
    paragraph is isolated only if it HAPPENS TO START A CHUNK, and chunk boundaries move when
    text above them changes. ⚠️ So re-render and re-check after editing; never infer a layer's
    spoken isolation from its name.

⚠️  AND REPETITION IS A CORRECTNESS RISK, NOT ONLY A READING ONE. `content_style_guide.md`
    puts it exactly: *"A third restatement is one more place for a correction to fail to
    reach."* Every round-10 critical was a correction that reached the body and stopped.
    A layer that merely re-words another is a copy nobody will remember to update.

WHAT IT MEASURES
----------------
Verbatim 6-word phrase overlap between layer pairs, as a percentage of the SMALLER layer.
High means the smaller layer is largely inside the larger one — a restatement rather than
a different job.

⚠️⚠️  THREE KINDS OF OVERLAP ARE CORRECT AND CUTTING THEM DAMAGES THE CORPUS. This is the
      same list `check_caption_echo.py` carries, for the same reasons, and it is not
      advisory:

  1. **A SAFETY LIMB REPEATED IS REPEATED ON PURPOSE.** Any condition needed to act safely
     or legally must appear in the SAME visible and spoken unit as its instruction. If the
     instruction is in three layers, the condition is in three layers. Never trade a
     caveat away to lower a score here.
  2. **A DISCLOSURE VOICED IN TWO LAYERS IS PROPAGATION, NOT REDUNDANCY.** Non-negotiable 4
     forbids stripping an honest disclosure. A ` ```facts ` line is voiced alone, and a prose
     paragraph that starts a chunk is too — so a listener who meets one copy may never meet
     the other.
  3. **A DEFINITION MUST MATCH ITS OWNER WORD FOR WORD.** Region and rule definitions score
     high against their owning document and that is the correct state; rewording to score
     lower is how a definition drifts.

  ⚠️ So the target is NEVER zero, and a document scoring 0% is not thereby good — it may
     simply have failed to propagate. **This tool cannot tell restatement from propagation.
     Only reading the two layers can.**

THE TEST TO APPLY WHEN READING A HIT
------------------------------------
Not "do these share words?" but **"does each layer do a DIFFERENT JOB?"**

    Key focus       the instruction — what to do, and the condition that makes it safe
    Overview        why it matters and what the document will cover — the map, not the trip
    body            the mechanism, the worked example, the alternatives
    Common Mistakes the failure mode — what going wrong looks like from inside
    Key Takeaways   the kernel worth retaining a week later

Same fact, different job, is REINFORCEMENT and is the goal. Same fact, same job, same
words, is the defect. A hit where both layers state the instruction in the instruction's
own words is cuttable; a hit where one states the instruction and the other states the
failure mode is not, however high it scores.

USAGE
-----
    python3 scripts/check_layer_echo.py                 # ranked, worst first
    python3 scripts/check_layer_echo.py --min 20        # only pairs at or above 20%
    python3 scripts/check_layer_echo.py --doc center    # one document, all pairs
    python3 scripts/check_layer_echo.py --show center   # print the shared phrases too
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

LAYERS = ("Key focus", "Overview", "Common Mistakes", "Key Takeaways")
# ⚠️ ALL SIX pairs. `("Overview", "Common Mistakes")` was MISSING until 22 September 2026,
# and it is the pair with the Overview as a member — the layer the differentiation wave
# rewrites. A live instance was hiding in that wave's own output: a repair took
# switching_positions.md's Overview from 5 shared words with Common Mistakes to 18 VERBATIM
# while cutting its Key focus overlap, and scored as a clean win. Never drop a pair to make
# the output shorter; an unmeasured pair is where a defect goes to be moved rather than fixed.
PAIRS = (
    ("Key focus", "Overview"),
    ("Key focus", "Key Takeaways"),
    ("Key focus", "Common Mistakes"),
    ("Overview", "Key Takeaways"),
    ("Overview", "Common Mistakes"),
    ("Common Mistakes", "Key Takeaways"),
)
SHINGLE = 6


def _words(text: str) -> list[str]:
    """Strip Markdown furniture and short words; what remains is the claim."""
    text = re.sub(r"```facts.*?```", " ", text, flags=re.S)
    text = re.sub(r"[*_`>#\[\]()]", " ", text.lower())
    text = re.sub(r"[^a-z0-9 ]", " ", text)
    return [w for w in text.split() if len(w) > 3]


def _shingles(words: list[str]) -> set[tuple[str, ...]]:
    return {tuple(words[i:i + SHINGLE]) for i in range(max(0, len(words) - SHINGLE + 1))}


def _layers(path: pathlib.Path) -> dict[str, str]:
    lines = path.read_text().split("\n")
    heads = [(i, m.group(1).strip()) for i, l in enumerate(lines) if (m := re.match(r"^## (.+)", l))]
    found: dict[str, str] = {}
    for n, (i, h) in enumerate(heads):
        end = heads[n + 1][0] if n + 1 < len(heads) else len(lines)
        for key in LAYERS:
            if h.lower().startswith(key.lower()) and key not in found:
                found[key] = "\n".join(lines[i + 1:end])
    return found


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--min", type=float, default=0.0, help="only report pairs at or above this %%")
    ap.add_argument("--doc", help="restrict to documents whose filename contains this")
    ap.add_argument("--show", help="print the shared phrases for documents matching this")
    args = ap.parse_args(argv)

    root = pathlib.Path(__file__).resolve().parent.parent
    docs = sorted((root / "content").rglob("*.md"))
    if args.doc:
        docs = [d for d in docs if args.doc in d.name]

    rows = []
    for path in docs:
        layers = _layers(path)
        sh = {k: _shingles(_words(v)) for k, v in layers.items()}
        for a, b in PAIRS:
            if a not in sh or b not in sh or not sh[a] or not sh[b]:
                continue
            small, large = (a, b) if len(sh[a]) <= len(sh[b]) else (b, a)
            shared = sh[small] & sh[large]
            pct = 100 * len(shared) / len(sh[small])
            if pct >= args.min:
                rows.append((pct, path, small, large, shared))

    rows.sort(key=lambda r: -r[0])
    if not rows:
        print("check_layer_echo: nothing at or above the threshold")
        return 0

    print(f"{'document':<34}{'pct':>7}  smaller layer -> larger layer")
    for pct, path, small, large, _ in rows:
        print(f"{path.name:<34}{pct:6.1f}%  {small} -> {large}")

    if args.show:
        for pct, path, small, large, shared in rows:
            if args.show not in path.name:
                continue
            print(f"\n--- {path.name}: {small} -> {large} ({pct:.1f}%) ---")
            for phrase in sorted(" ".join(s) for s in shared)[:40]:
                print(f"    {phrase}")

    print(f"\ncheck_layer_echo: {len(rows)} pair(s) across "
          f"{len({r[1] for r in rows})} document(s).")
    print("⚠️  CANDIDATES, NOT DEFECTS. A safety limb, an honest disclosure and a definition")
    print("    matching its owner all score here and are all CORRECT. Ask whether each layer")
    print("    does a DIFFERENT JOB, not whether it shares words. Never cut a caveat to score lower.")
    # ⚠️ Always 0. This is a worklist: a hit is a question, not a failure, and a non-zero
    # exit would let a future brief wire it into a gate by accident.
    return 0


if __name__ == "__main__":
    sys.exit(main())
