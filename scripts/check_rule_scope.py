#!/usr/bin/env python3
"""Report every rule number whose BOOK SCOPE differs between the sites that cite it.

WHY THIS EXISTS
---------------
Rounds 42-45 found the same defect five separate times, one round each, always by a
human reading:

    the airborne trail skate   18 sites, 10 documents  - one said "all three rule sets"
    body checking              7 sites                 - three named USA Hockey only
    puck over the glass        11 sites                - nine carried the carve-out, two did not
    the KHL trapezoid          31 lines, 17 documents  - two carried the hedge
    delayed-offside clearing   10 sites                - the sweep found eight

Every one is the same shape: **a rule cited in N places, where some sites name more books
than others.** Sometimes the short site dropped a scope it needed; sometimes the long site
asserted a divergence that did not exist. Both directions are defects and both are
enumerable.

The round-45 block is the proof this is worth automating. The record claimed a
rule-number sweep and named eight sites; there were ten. `winger.md:291` contains the
literal string `6.11(b)` and would have been returned. **The sweep was described and not
performed** - which is what a script is for.

WHAT IT REPORTS
---------------
For each rule number cited in three or more self-contained units, the distinct sets of
books named alongside it, and the sites holding each set. A unit is one of:

    a ```facts block line       (Rule:, Never:, Key:, ...)
    a Common Mistakes bullet
    a Key Takeaways item

Those are the units that are read alone - by the site, by the podcast, by a reader
skimming. Body prose is deliberately excluded: a paragraph names its books once and
carries the scope across several sentences, so scanning it line by line invents
divergence that is not there.

It reports and ranks. **It does not judge**, and `--strict` is deliberately not offered:
a site that names one book because it is discussing one book is correct, and no rule this
script could apply distinguishes that from a dropped scope. The output is a worklist,
ordered by how likely each entry is to be real.

WHAT IT CANNOT DO - read this before trusting a clean run
---------------------------------------------------------
**A rule nobody cites by number is invisible.** Every sweep in this project that missed
something missed it this way: `content-reviewer` reported "zero documents carry the
carve-out" because its pattern read "out of play" and the corpus says "outside the playing
area". If a site teaches a rule without naming it, nothing here sees it.

**Agreement is not correctness.** Where every site names the same books and all of them
are wrong, this is silent. Round 45's whole finding was that five sites agreed on a
divergence that did not exist - this script would have shown a clean, consistent scope.

**It cannot see the body.** The scope may be stated correctly in prose two lines above a
facts line that drops it. That is a real defect and this script will not show it; it will
show the facts line as a minority scope, which is the right prompt but the wrong reason.

**It does not check the books.** A site naming four books may name the wrong four.
`rules-verifier` owns that.
"""

import argparse
import collections
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOKS = ("NHL", "IIHF", "USA Hockey", "Hockey Canada")

FACT = re.compile(r"^[A-Z][A-Za-z ]*?:\s+\S")
RULE = re.compile(r"\b(\d{1,3}\.\d{1,2}|\d{3}\((?:[a-z]|\d)\))(\([a-z ivx]+\))?")
SKIP = ("*Rules:", "*Sources:", "*Coaching", "*Notes on sources", "*Technique")


def units(path):
    """Yield (lineno, text) for every self-contained summary-layer unit."""
    lines = open(path, encoding="utf-8").read().split("\n")
    in_facts = False
    section = None
    for i, line in enumerate(lines, 1):
        st = line.strip()
        if st.startswith("```facts"):
            in_facts = True
            continue
        if in_facts and st.startswith("```"):
            in_facts = False
            continue
        if st.startswith("## "):
            section = st[3:].strip().lower()
            continue
        if any(st.startswith(s) for s in SKIP):
            continue
        if in_facts and FACT.match(st):
            yield i, st
        elif section in ("common mistakes", "key takeaways") and re.match(r"^[-*]\s+\S|^\d+\.\s+\S", st):
            yield i, st


# A unit that says "in all four books" has stated its scope without naming them, and
# counting it as a one-book site invents a divergence. Round 44's worst defect was a
# sweep that manufactured one; this is the same error in a tool.
COUNTED = re.compile(
    r"\b(?:all|in)\s+(four|three|two)\s+(?:of the\s+)?books\b"
    r"|\b(four|three|two)\s+books of the four\b"
    r"|\bbooks of the four\b", re.I)


def scope_of(text):
    """The books a unit puts the reader on notice about.

    A unit saying "two books of the four" has declared its scope without naming all
    four, and counting it as a two-book site would invent a divergence against a site
    that names them. Declared units are therefore treated as full scope: this script
    asks "did the unit tell the reader which books this is about", not "did it list
    them". A declared scope can still be WRONG - that is `rules-verifier`'s question,
    not this one's.
    """
    if COUNTED.search(text):
        return frozenset(BOOKS)
    return frozenset(b for b in BOOKS if b in text)


def collect():
    sites = collections.defaultdict(set)
    for path in sorted(glob.glob(os.path.join(ROOT, "content", "**", "*.md"), recursive=True)):
        rel = os.path.relpath(path, ROOT)
        for lineno, text in units(path):
            named = scope_of(text)
            # one row per (file, line, rule) - a line citing 63.2 three times is one site
            for num in {m.group(1) for m in RULE.finditer(text)}:
                sites[num].add((rel, lineno, named))
    return {k: sorted(v) for k, v in sites.items()}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--min-sites", type=int, default=3,
                    help="only report rules cited in at least this many units (default 3)")
    ap.add_argument("--rule", help="report one rule number in full")
    args = ap.parse_args()

    sites = collect()

    if args.rule:
        rows = sites.get(args.rule, [])
        print(f"{args.rule}: {len(rows)} unit(s)")
        for rel, lineno, named in sorted(rows):
            print(f"  {rel}:{lineno}  {{{', '.join(sorted(named)) or '-'}}}")
        return 0

    interesting = []
    for num, rows in sites.items():
        if len(rows) < args.min_sites:
            continue
        scopes = collections.Counter(named for _, _, named in rows)
        if len(scopes) < 2:
            continue
        widest = max(len(s) for s in scopes)
        narrowest = min(len(s) for s in scopes)
        # A rule named with four books at one site and one at another is the shape that
        # was wrong five times. A one-book spread is usually a document discussing one book.
        interesting.append((widest - narrowest, len(rows), num, scopes))

    interesting.sort(reverse=True)
    total = sum(len(v) for v in sites.values())
    print(f"check_rule_scope: {len(sites)} rule numbers · {total} summary-layer citations · "
          f"{len(interesting)} with a mixed book scope\n")

    for gap, n, num, scopes in interesting:
        if gap == 0:
            continue
        print(f"  {num:<12} {n:>3} units   spread {gap}")
        for s, c in scopes.most_common():
            print(f"      {{{', '.join(sorted(s)) or '-':<38}}} x{c}")
    print("\nThis is a worklist, not a verdict. A site naming one book because it discusses\n"
          "one book is correct. Use --rule <number> to see the sites.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
