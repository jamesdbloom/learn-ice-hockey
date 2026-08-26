#!/usr/bin/env python3
"""Re-derive every live claim about the corpus's own size, and fail if one is stale.

WHY THIS EXISTS
---------------
Rounds 42-45 were blocked by `commit-gate` about twenty times. Roughly six of those
blocks were content defects. **Roughly ten were numbers someone had typed** into a
project document and nobody had re-derived:

    "36 documents in seven sections"   -> 37 in eight, stale for four weeks
    "532,518 words - 40.3 hours"       -> 632,107 and 47.9, understating by 18%
    "eight Sources blocks"             -> nine
    "29 reader-facing sites"           -> 28
    "43 numbered rounds ... 20-43"     -> falsified by the commit that wrote it
    "five of the eleven files"         -> three
    "the ten below"                    -> nine follow it

Each cost a gate pass. None needed a reviewer; all of them are derivable in a second.
The corpus-size figures are the worst of the set because `OPEN_ITEMS.md` Tier 0 uses
them to argue a priority - a figure 18% low was **understating the case for the work it
introduces**.

The lesson recorded in `OPEN_ITEMS.md` is *put the boundary in the same sentence as the
number*. This script is the other half: **do not type the number at all.**

WHAT IT CHECKS
--------------
Ground truth is derived from `content/`:

    documents   files matching content/**/*.md
    sections    immediate subdirectories of content/
    words       whitespace split over the raw markdown of every document
    hours       words / 220 wpm, to one decimal

Then every LIVE project document is scanned for claims of those quantities. Live means
the file describes the corpus as it is now:

    CLAUDE.md, docs/README.md, project/plans/OPEN_ITEMS.md,
    project/content_style_guide.md, project/site_build_specification.md,
    project/review_process.md

`project/reviews/` is **not** scanned. A review record describes the corpus at the moment
it was written; round 21 saying "36 documents" is correct and must stay correct. That
boundary is the whole reason this script can be strict elsewhere.

    --update    rewrite the stale figures in place instead of failing

`--update` is the point. Deriving and writing is faster than typing and being caught.

WHAT IT CANNOT DO - read this before trusting a clean run
---------------------------------------------------------
**It only knows the four quantities above.** The eight-versus-nine Sources gap, the
29-versus-28 KHL sites, "five of the eleven", "the ten below" - none of those is a corpus
size. They are counts of a set defined by a sentence, and a script cannot derive the set
without being told what the sentence means. Those still need a reader.

**It cannot tell a live claim from a historical one inside a live file.** `OPEN_ITEMS.md`
deliberately records superseded figures in warnings - *"this first read 630,873, which was
HEAD"*. Those must not be rewritten. The script skips a line carrying any of the
RETROSPECT markers below, which is a heuristic and not a grammar: a stale figure phrased
some other way will be flagged, and a *live* figure that happens to sit in a sentence
containing the word "originally" will be missed.

**A word count is exact and therefore brittle by design.** Any edit to `content/` makes it
stale, and this script will say so. That is intended - the anchor figure was stale for a
month because nothing said so. Run with `--update` as the last step before staging, after
the final content edit; `project/` edits cannot move it, so it converges.

**It does not check that the number is USED correctly.** "37 documents" can be right in a
sentence whose surrounding argument is wrong.
"""

import argparse
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LIVE = [
    "CLAUDE.md",
    "docs/README.md",
    "project/plans/OPEN_ITEMS.md",
    "project/content_style_guide.md",
    "project/site_build_specification.md",
    "project/review_process.md",
]

# A line saying what a figure USED to be is not a stale figure. Heuristic, documented
# above as such: it is a phrase list, not an understanding of tense.
RETROSPECT = (
    "first read", "used to", "until round", "superseded", "was stale", "originally",
    "first version", "had said", "previously", "stood unchanged", "was written",
    "no longer", "when this was written", "before this round", "which was HEAD",
    "the first version of this figure", "as at", "after round",
)

NUM = {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7,
       "eight": 8, "nine": 9, "ten": 10, "eleven": 11, "twelve": 12}

# ---------------------------------------------------------------------------
# ANCHORED PATTERNS ONLY. The first version of this script matched a bare
# `N documents` and produced 38 findings, of which every one was a false
# positive: `26 documents` is the facts-block scope, `12 documents` a subset,
# `5 documents` a section, `48,673 words` the Key Takeaways total. A checker
# that cries wolf 38 times is worse than no checker, and this project's own
# style guide says so.
#
# So a figure is only checked when the sentence says it is talking about the
# whole corpus. That is a deliberate trade: an unanchored claim about corpus
# size is INVISIBLE to this script. If you write one, write it in one of these
# forms or it will not be checked.
# ---------------------------------------------------------------------------

W = r"(\d{1,3}(?:,\d{3})+|\d{4,})"
NUMWORD = "|".join(NUM)

DOC_PATTERNS = [
    r"corpus of (\d{1,3}) documents",
    r"corpus is \*?\*?(\d{1,3}) documents",
    r"The corpus\b[^.\n]{0,40}?\b(\d{1,3}) documents",
    r"(\d{1,3}) documents in (?:\d{1,2}|" + NUMWORD + r") sections",
    r"\| Content \| (\d{1,3}) documents",
]
SEC_PATTERNS = [
    r"\d{1,3} documents in (\d{1,2}|" + NUMWORD + r") sections",
    r"corpus\b[^.\n]{0,60}?\b(\d{1,2}|" + NUMWORD + r") sections",
]
WORD_PATTERNS = [
    r"corpus is \*?\*?\d{1,3} documents and " + W + r" words",
    r"corpus is \*?\*?" + W + r" words",
    r"\d{1,3} documents +" + W + r" words",
    r"Re-measured[^.\n]{0,40}?\*?\*?" + W + r" words",
]
HOUR_PATTERNS = [
    r"words[^.\n]{0,20}?(\d{1,3}\.\d) hours",
    r"— (\d{1,3}\.\d) hours of reading",
    r"words +(\d{1,3}\.\d) hours",
]


def derive():
    """Ground truth, from content/ and nowhere else."""
    docs = sorted(glob.glob(os.path.join(ROOT, "content", "**", "*.md"), recursive=True))
    sections = [d for d in os.listdir(os.path.join(ROOT, "content"))
                if os.path.isdir(os.path.join(ROOT, "content", d))]
    words = sum(len(open(f, encoding="utf-8").read().split()) for f in docs)
    return {
        "documents": len(docs),
        "sections": len(sections),
        "words": words,
        "hours": round(words / 220 / 60, 1),
    }


def spelled(n):
    for word, value in NUM.items():
        if value == n:
            return word
    return str(n)


def _quoted(line, pos):
    """True if `pos` sits inside quotation marks.

    A record MUST be able to quote a wrong number - "this said 36 documents" is the
    disclosure, not the defect. Every false positive in this script's second run was a
    quotation of superseded text. Counting quote marks before the match is crude and
    deliberate: it is the difference between a checker that can be trusted and one that
    has to be argued with.
    """
    seg = line[:pos]
    return (seg.count('"') + seg.count('\u201c') - seg.count('\u201d')) % 2 == 1


def _check(new, patterns, want, render, problems, rel, lineno):
    for pat in patterns:
        for m in re.finditer(pat, new, re.I):
            if _quoted(new, m.start(1)):
                continue
            tok = m.group(1)
            got = NUM.get(tok.lower()) if not tok[0].isdigit() else \
                  (float(tok) if "." in tok else int(tok.replace(",", "")))
            if got is None or _same(got, want):
                continue
            rep = render(tok, want)
            problems.append((rel, lineno, tok, rep))
            new = new[:m.start(1)] + rep + new[m.end(1):]
            return new, True
    return new, False


def _same(a, b):
    return abs(a - b) < 0.05 if isinstance(a, float) or isinstance(b, float) else a == b


def scan(truth, update):
    problems, touched = [], 0
    for rel in LIVE:
        path = os.path.join(ROOT, rel)
        if not os.path.exists(path):
            continue
        out, changed = [], False
        for lineno, line in enumerate(open(path, encoding="utf-8").read().split("\n"), 1):
            if any(m in line.lower() for m in RETROSPECT):
                out.append(line)
                continue
            new, hit = line, True
            while hit:
                hit = False
                for pats, want, render in _RENDERERS(truth):
                    new, did = _check(new, pats, want, render, problems, rel, lineno)
                    hit = hit or did
            if new != line:
                changed = True
                touched += 1
            out.append(new)
        if update and changed:
            open(path, "w", encoding="utf-8").write("\n".join(out))
    return problems, touched


SELF_TEST = [
    # (line, should_flag, why) — the five are the real defects rounds 42-45 were blocked
    # on; the seven are the false-positive shapes the first two versions produced.
    ("A corpus of 36 documents teaching people to play ice hockey", True, "CLAUDE.md:3"),
    ("The corpus. 36 documents in seven sections. The product.", True, "CLAUDE.md:199"),
    ("| Content | 36 documents; 44 numbered adversarial review rounds |", True, "docs/README.md:47"),
    ("The corpus is **532,518 words \u2014 40.3 hours of reading**, and its", True, "Tier 0 anchor"),
    ("36 documents          532,518 words          40.3 hours of reading", True, "superseded table"),
    ("A corpus of 37 documents teaching people to play ice hockey", False, "correct"),
    ("**Applies only to the 26 documents that teach how to play**", False, "facts-block scope"),
    ("round 43 across all 26 documents, 773 blocks, 4,605 facts", False, "facts scope"),
    ('this plan own entry said "all 36 documents" \u2014 so', False, "quotation"),
    ('prints a table reading *"36 documents / 532,518 words"*.', False, "quotation"),
    ("**48,673 words: 9% of the corpus is its own summary.**", False, "Key Takeaways total"),
    ("- **The section is probably two sections.**", False, "not a corpus claim"),
]


def self_test():
    truth = {"documents": 37, "sections": 8, "words": 632592, "hours": 47.9}
    bad = 0
    for line, want, why in SELF_TEST:
        problems, new, hit = [], line, True
        while hit:
            hit = False
            for pats, w, render in _RENDERERS(truth):
                new, did = _check(new, pats, w, render, problems, "self-test", 1)
                hit = hit or did
        got = bool(problems)
        if got != want:
            bad += 1
            print(f"  FAIL  flag={got} want={want}  {why}\n        {line}")
    print(f"check_counts self-test: {len(SELF_TEST) - bad}/{len(SELF_TEST)} assertions pass")
    return 1 if bad else 0


def _RENDERERS(truth):
    return (
        (DOC_PATTERNS, truth["documents"], lambda t, w: str(w)),
        (SEC_PATTERNS, truth["sections"],
         lambda t, w: (spelled(w) if not t[0].isdigit() else str(w))),
        (WORD_PATTERNS, truth["words"], lambda t, w: f"{w:,}"),
        (HOUR_PATTERNS, truth["hours"], lambda t, w: str(w)),
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--update", action="store_true",
                    help="rewrite stale figures in place instead of failing")
    ap.add_argument("--quiet", action="store_true")
    ap.add_argument("--self-test", action="store_true",
                    help="run the assertions and exit")
    args = ap.parse_args()

    if args.self_test:
        return self_test()

    truth = derive()
    problems, fixed = scan(truth, args.update)

    if not args.quiet:
        print(f'check_counts: {truth["documents"]} documents · {truth["sections"]} sections · '
              f'{truth["words"]:,} words · {truth["hours"]} hours at 220 wpm')

    if not problems:
        if not args.quiet:
            print("every live corpus-size figure matches the corpus.")
        return 0

    if args.update:
        print(f"\nupdated {len(problems)} stale figure(s) across {fixed} line(s):")
        for rel, lineno, was, now in problems:
            print(f"  {rel}:{lineno}  {was!r} -> {now!r}")
        return 0

    print(f"\n{len(problems)} stale figure(s):")
    for rel, lineno, was, now in problems:
        print(f"  {rel}:{lineno}\n    says {was!r}, corpus is {now!r}")
    print("\nRe-run with --update to rewrite them, as the last step before staging.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
