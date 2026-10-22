#!/usr/bin/env python3
"""Readability measure for the corpus (owner's readability programme, 19 Oct 2026).

Reports, per document, the figures the owner's "shorter is better" rule is
judged by. It is a WORKLIST and a PROGRESS METER, not a gate: it has no
--strict and should never gain one, because a long paragraph can be correct
and a short one can have lost a safety limb.

    python3 scripts/check_readability.py                 # table, longest first
    python3 scripts/check_readability.py --file <path>   # one document, with its worst paragraphs
    python3 scripts/check_readability.py --json          # machine-readable, for before/after diffs

What it counts, and what it skips:
  * prose      = body text outside ```facts blocks, tables, headings and the
                 Sources trailer (everything from the last "Sources" / "## Sources"
                 heading or bold label onward is provenance and is not counted).
                 A bare ">" line ends a blockquote paragraph, and a blockquote's
                 "**Related:**" navigation line is not prose.
  * words      = whitespace tokens in prose
  * sentences  = split on . ! ? followed by space and a capital or quote
  * long_par   = paragraphs over 1,200 characters (programme item 1)
  * max_par    = the longest prose paragraph, in characters
  * kt_long    = Key Takeaways over 60 words; kt_max = the longest one
  * rule_refs  = rule-number citations in prose, e.g. 7.5(c), 602(a), Rule 43 (item 5)
  * markers    = ⚠ glyphs in prose (item 6)
  * hard       = share of words of 4+ syllables (a rough plain-words signal)
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
import os
CONTENT = Path(os.environ["READABILITY_CONTENT_DIR"]) if os.environ.get("READABILITY_CONTENT_DIR") else ROOT / "content"

RULE_RE = re.compile(r"\b(?:Rule\s+)?\d{1,3}\.\d{1,2}(?:\([a-zA-Z0-9]{1,4}\))*|\b\d{3}\([a-z]\)")
# A sentence ends at . ! or ?, optionally followed by closing quotes, emphasis or a
# bracket, then whitespace, then (after any opening quote, emphasis, ⚠️/❗/🚫 marker
# or flag) a capital or digit. The old pattern did not split after a closing quote
# or before a marker glyph, so "...opponent." ⚠️ **Never...** counted as one sentence
# and the long-sentence figures were overstated on marker-heavy pages (20 Oct 2026).
SENT_RE = re.compile(
    r"(?<=[.!?])[\"'\u201d\u2019*_)\]]*\s+"
    r"(?=[\"'\u201c\u2018*_(\[\s\u26a0\u2757\U0001F6AB\uFE0F\U0001F1E6-\U0001F1FF]*[A-Z0-9])"
)
VOWELS = re.compile(r"[aeiouy]+")


def syllables(word):
    w = re.sub(r"[^a-z]", "", word.lower())
    if not w:
        return 0
    n = len(VOWELS.findall(w))
    if w.endswith("e") and n > 1 and not w.endswith("le"):
        n -= 1
    return max(n, 1)


def strip_md(s):
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)
    s = re.sub(r"[*_`>#]", "", s)
    return s.strip()


def split_layers(text):
    """Return (prose_paragraphs, key_takeaways)."""
    lines = text.split("\n")
    # cut the Sources trailer: from the last heading or bold label naming Sources
    cut = len(lines)
    for i, l in enumerate(lines):
        if re.match(r"^\s*(#+\s*Sources|\*\*Sources|\*Sources)", l):
            cut = i
    lines = lines[:cut]
    prose, kts = [], []
    in_facts = False
    in_kt = False
    buf = []

    def flush():
        if buf:
            p = " ".join(x.strip() for x in buf).strip()
            if p:
                prose.append(p)
            buf.clear()

    for l in lines:
        if l.strip().startswith("```"):
            flush()
            in_facts = not in_facts
            continue
        if in_facts:
            continue
        if l.startswith("#"):
            flush()
            in_kt = bool(re.search(r"key takeaways?", l, re.I))
            continue
        if l.strip().startswith("|"):
            flush()
            continue
        if not l.strip():
            flush()
            continue
        # A bare ">" line separates two blockquote paragraphs; it was joining
        # them, so a page header's two or three paragraphs scored as one long
        # one (z2, z3; fixed 22 Oct 2026).
        if re.match(r"^\s*>\s*$", l):
            flush()
            continue
        # A blockquote's "**Related:**" line is site navigation, not prose, and
        # it was counted inside the header paragraph above it (y3; 22 Oct 2026).
        if re.match(r"^\s*>\s*\*\*Related:?\*\*", l):
            flush()
            continue
        if in_kt and re.match(r"^\s*(\d+[.)]|[-*])\s+", l):
            flush()
            kts.append(strip_md(re.sub(r"^\s*(\d+[.)]|[-*])\s+", "", l)))
            continue
        if re.match(r"^\s*(\d+[.)]|[-*])\s+", l):
            flush()
        buf.append(l)
    flush()
    return prose, kts


def measure(path):
    text = path.read_text(encoding="utf-8")
    prose, kts = split_layers(text)
    words, sents, hard, rule_refs, markers = 0, 0, 0, 0, 0
    max_sent = 0
    par_lens = []
    for p in prose:
        par_lens.append(len(p))
        rule_refs += len(RULE_RE.findall(p))
        markers += p.count("⚠")
        clean = strip_md(p)
        ws = clean.split()
        words += len(ws)
        hard += sum(1 for w in ws if syllables(w) >= 4)
        for s in SENT_RE.split(clean):
            n = len(s.split())
            if n:
                sents += 1
                max_sent = max(max_sent, n)
    kt_words = [len(k.split()) for k in kts]
    return {
        "doc": str(path.relative_to(CONTENT)),
        "words": words,
        "mean_sent": round(words / sents, 1) if sents else 0,
        "max_sent": max_sent,
        "paragraphs": len(par_lens),
        "long_par": sum(1 for n in par_lens if n > 1200),
        "max_par": max(par_lens) if par_lens else 0,
        "kt": len(kts),
        "kt_long": sum(1 for n in kt_words if n > 60),
        "kt_max": max(kt_words) if kt_words else 0,
        "rule_refs": rule_refs,
        "markers": markers,
        "hard_pct": round(100 * hard / words, 1) if words else 0,
        "_worst": sorted(((n, p[:90]) for n, p in zip(par_lens, prose)), reverse=True)[:8],
    }


def main(argv):
    # argparse, so an unknown or mistyped flag exits 2 instead of silently running the
    # whole corpus and exiting 0 (the plan's unknown-flag row, 22 Oct 2026).
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--file", help="one document: a path, or a path under content/")
    ap.add_argument("--json", action="store_true", help="machine-readable output")
    args = ap.parse_args(argv)
    as_json = args.json
    files = []
    if args.file:
        f = Path(args.file)
        if not f.is_absolute():
            f = (ROOT / f) if (ROOT / f).exists() else (CONTENT / f)
        if f.suffix != ".md":
            f = f.with_suffix(".md")
        files = [f]
    else:
        files = sorted(CONTENT.glob("*/*.md"))
    rows = [measure(f) for f in files]
    if as_json:
        print(json.dumps([{k: v for k, v in r.items() if not k.startswith("_")} for r in rows], indent=1))
        return 0
    rows.sort(key=lambda r: -r["words"])
    hdr = f"{'document':42} {'words':>7} {'mSent':>5} {'maxS':>4} {'longP':>5} {'maxPar':>6} {'KTlong':>6} {'KTmax':>5} {'rules':>5} {'⚠':>4} {'hard%':>5}"
    print(hdr)
    print("-" * len(hdr))
    for r in rows:
        print(f"{r['doc'][:42]:42} {r['words']:>7} {r['mean_sent']:>5} {r['max_sent']:>4} {r['long_par']:>5} {r['max_par']:>6} {r['kt_long']:>6} {r['kt_max']:>5} {r['rule_refs']:>5} {r['markers']:>4} {r['hard_pct']:>5}")
    tot = sum(r["words"] for r in rows)
    print("-" * len(hdr))
    print(f"{'TOTAL prose words':42} {tot:>7}   long paragraphs: {sum(r['long_par'] for r in rows)}   long Key Takeaways: {sum(r['kt_long'] for r in rows)}")
    if len(rows) == 1:
        print("\nlongest prose paragraphs (chars, opening):")
        for n, p in rows[0]["_worst"]:
            print(f"  {n:>6}  {p}")
    print("\ncheck_readability: a worklist and progress meter, never a gate. The target is shorter AND clear AND every safety limb kept.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
