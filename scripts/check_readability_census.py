#!/usr/bin/env python3
"""Readability censuses for project/plans/READABILITY_AND_DUAL_AUDIENCE.md.

⚠️ WORKLIST, NOT A GATE. It has no --strict and must never gain one. Every
figure it prints is a count of CANDIDATES, not of defects:

  * a diagram marker arriving first may be an ORIENTATION diagram, which the
    owner's instruction expressly permits to come first;
  * a document opening on a facts block or a marker may still be correct;
  * Key Takeaways and Common Mistakes are the PROPAGATION DESTINATIONS, so
    ranking them by size ranks the redundancy the corpus depends on;
  * the citation measure counts WHOLE SENTENCES, so it is an upper bound on
    the apparatus, never a measurement of waste.

It exists because four censuses were run from a session scratchpad and written
into the plan, and a commit gate pointed out that no figure in that section
would be reproducible once the session ended.

⚠️ TWO DENOMINATORS, AND THEY ARE BOTH RIGHT. `words` treats `##`/`###` lines
as section boundaries and does not count them; `citations` counts them as body.
The gap is exactly the heading text. `--reconcile` prints it rather than
leaving a reader to discover two different totals both called "prose words".
"""
import argparse, collections, io, json, os, re, sys

ROOT = "content"
MARKER = re.compile(r'^!\[\]\(diagram:([^)]+)\)')
HEADING = re.compile(r'^(#{2,3})\s+(.*)')
# ⚠️ MARKER PLACEMENT USES A DIFFERENT HEADING DEPTH, ON PURPOSE, and the two
# answers differ by 18 markers. `HEADING` is `##`/`###` because that is the
# granularity word counts are attributed at. Marker placement resets at ANY
# heading depth, because a `####` subsection is still a section a diagram can
# lead -- and the owner's instruction is about a diagram arriving before the
# content it illustrates, at whatever level that content is introduced.
# Counting markers with `##`/`###` gives 268; with any depth, 286. Both are
# defensible; this file picks one and says which, because the plan previously
# carried three figures for this measure with no definition attached to any.
MARKER_HEADING = re.compile(r'^#{2,6}\s+')
ANY_HEADING = re.compile(r'^#{1,6}\s')
OPENER = re.compile(r'^## (Overview|Key focus)')
RULEREF = re.compile(r'\bRule\s+\d+|\b\d{2,3}\.\d+\b|\b\d{3}\([a-k]\)|\b\d+\.\d+\([ivx]+\)')


def documents(root=ROOT):
    for dirpath, _, filenames in os.walk(root):
        for name in sorted(filenames):
            if name.endswith(".md"):
                yield os.path.join(dirpath, name)


def unfenced(path):
    """Lines outside ``` fences, with a flag saying whether each is a heading."""
    in_fence = False
    for i, line in enumerate(io.open(path, encoding="utf-8").read().split("\n"), 1):
        if line.startswith("```"):
            in_fence = not in_fence
            continue
        if not in_fence:
            yield i, line


def markers():
    """Every diagram marker, with the prose distance from its heading.

    prose_before == 0 means the marker is the first thing in its section --
    the placement the owner's 14 September instruction reverses.
    """
    out = []
    for path in documents():
        heading, prose = "(top)", 0
        for i, line in unfenced(path):
            if MARKER_HEADING.match(line):
                heading, prose = line.lstrip("# ").strip(), 0
                continue
            m = MARKER.match(line)
            if m:
                out.append(dict(file=path, line=i, name=m.group(1),
                                heading=heading, prose_before=prose))
                continue
            if line.strip():
                prose += 1
    return out


def openers():
    """What each document's Overview/Key focus section opens with.

    ⚠️ Two earlier definitions of this measure were blind and are kept here as
    a warning: "what does the document open with?" answers `> **Rule set:**`
    for all 39, and "what is the first heading?" answers `## Overview` for all
    39. Both look like clean results and tell you nothing.
    """
    out = []
    for path in documents():
        lines = list(unfenced(path))
        idx = next((k for k, (_, l) in enumerate(lines) if OPENER.match(l)), None)
        if idx is None:
            out.append(("(no Overview or Key focus)", path, 0, ""))
            continue
        for lineno, line in lines[idx + 1:]:
            if not line.strip():
                continue
            if line.startswith("```facts"):
                kind = "FACTS BLOCK"
            elif MARKER.match(line):
                kind = "DIAGRAM MARKER"
            elif line.startswith("#"):
                kind = "heading"
            elif line.startswith("|"):
                kind = "table"
            elif line.startswith(">"):
                kind = "blockquote"
            elif line.lstrip().startswith(("- ", "* ")):
                kind = "list"
            else:
                kind = "prose"
            out.append((kind, path, lineno, re.sub(r'\*\*', '', line)[:95]))
            break
    return out


def wordcounts():
    """Per-document and per-section word counts, EXCLUDING ## and ### lines."""
    docs, secs = [], []
    for path in documents():
        section, section_words, section_line, total = None, 0, 0, 0
        for i, line in unfenced(path):
            m = HEADING.match(line)
            if m:
                if section is not None:
                    secs.append((section_words, path, section_line, section))
                section, section_words, section_line = m.group(2).strip(), 0, i
                continue
            n = len(line.split())
            total += n
            if section is not None:
                section_words += n
        if section is not None:
            secs.append((section_words, path, section_line, section))
        docs.append((total, path))
    return docs, secs


def summary_share():
    """How much of each document lives in the two summary sections."""
    rows = []
    for path in documents():
        section, words, total = None, {}, 0
        for _, line in unfenced(path):
            m = HEADING.match(line)
            if m:
                section = m.group(2).strip()
                continue
            n = len(line.split())
            total += n
            if section:
                words[section] = words.get(section, 0) + n
        kt = sum(v for k, v in words.items() if k.lower().startswith("key takeaway"))
        cm = sum(v for k, v in words.items() if k.lower().startswith("common mistake"))
        rows.append((kt + cm, total, kt, cm, path))
    return rows


def citation_share():
    """Words in sentences carrying a rule reference. Counts ## and ### lines."""
    rows = []
    for path in documents():
        body = "\n".join(l for _, l in unfenced(path))
        sentences = re.split(r'(?<=[.!?])\s+', body)
        total = sum(len(s.split()) for s in sentences)
        cited = [s for s in sentences if RULEREF.search(s)]
        rows.append((sum(len(s.split()) for s in cited), total,
                     len(cited), len(sentences), path))
    return rows


def partition(groups):
    """Least-loaded assignment of documents to disjoint agent-owned groups.

    ⚠️ CLAUDE.md: "File ownership must be disjoint, and it must be stated. AND
    STATING IT DOES NOT MAKE IT TRUE -- the coordinator is the one who gets
    this wrong." So this asserts disjointness rather than claiming it.
    """
    old = collections.Counter(m["file"] for m in markers() if m["prose_before"] == 0)
    buckets, load = [[] for _ in range(groups)], [0] * groups
    for path, n in sorted(old.items(), key=lambda kv: -kv[1]):
        i = load.index(min(load))
        buckets[i].append((path, n))
        load[i] += n
    owned = [p for b in buckets for p, _ in b]
    assert len(owned) == len(set(owned)), "PARTITION IS NOT DISJOINT"
    return buckets, load


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("census", choices=["markers", "openers", "words", "summary",
                                       "citations", "partition", "reconcile", "all"])
    ap.add_argument("--groups", type=int, default=10)
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()
    which = ["markers", "openers", "words", "summary", "citations", "reconcile"] \
        if args.census == "all" else [args.census]

    if args.json:
        payload = {}
        if "markers" in which:
            payload["markers"] = markers()
        if "openers" in which:
            payload["openers"] = openers()
        json.dump(payload, sys.stdout, indent=1)
        print()
        return 0

    for census in which:
        if census == "markers":
            rows = markers()
            old = [r for r in rows if r["prose_before"] == 0]
            per = collections.Counter(r["file"] for r in rows)
            print("MARKERS: %d across %d documents; %d arrive with ZERO prose "
                  "after their heading." % (len(rows), len(per), len(old)))
            print("%-52s %5s %5s" % ("document", "all", "old"))
            for path, n in per.most_common():
                o = sum(1 for r in old if r["file"] == path)
                print("%-52s %5d %5d%s" % (path.replace("content/", ""), n, o,
                                           "   <- already complies" if o == 0 else ""))
            print()

        elif census == "openers":
            rows = openers()
            order = {"FACTS BLOCK": 0, "DIAGRAM MARKER": 1}
            print("OPENERS: what each Overview/Key focus section opens with.")
            for kind, path, lineno, text in sorted(rows, key=lambda r: (order.get(r[0], 9), r[1])):
                print("%-14s %-48s :%-5d %s" % (kind, path.replace("content/", ""), lineno, text))
            print(collections.Counter(r[0] for r in rows))
            print()

        elif census == "words":
            docs, secs = wordcounts()
            print("WORDS: %d prose words across %d documents "
                  "(## and ### lines NOT counted).\n" % (sum(d[0] for d in docs), len(docs)))
            for total, path in sorted(docs, reverse=True):
                print("%-52s %7d" % (path.replace("content/", ""), total))
            print("\nThe 20 heaviest sections:")
            for w, path, lineno, head in sorted(secs, reverse=True)[:20]:
                print("%7d  %s:%d  %s" % (w, path.replace("content/", ""), lineno, head[:70]))
            print()

        elif census == "summary":
            rows = summary_share()
            print("SUMMARY LAYER: Key Takeaways + Common Mistakes as a share of each document.")
            print("⚠️  These are the PROPAGATION DESTINATIONS. Ranking them by size ranks")
            print("    the redundancy the corpus depends on. Consolidate within; do not delete.")
            print("%-48s %8s %8s %8s %6s" % ("document", "total", "KeyTake", "CommMis", "share"))
            tot = share = 0
            for s, t, kt, cm, path in sorted(rows, key=lambda r: -(r[0] / max(r[1], 1))):
                tot += t
                share += s
                print("%-48s %8d %8d %8d %5.1f%%" % (path.replace("content/", ""), t, kt, cm,
                                                     100.0 * s / max(t, 1)))
            print("\nCORPUS: %d of %d = %.1f%%\n" % (share, tot, 100.0 * share / tot))

        elif census == "citations":
            rows = citation_share()
            print("CITATION APPARATUS: words in sentences carrying a rule reference.")
            print("⚠️  Counts the WHOLE sentence, so this is an UPPER BOUND on the")
            print("    apparatus and never a measurement of waste.")
            print("%-48s %9s %9s %6s  %s" % ("document", "words", "cit-wds", "share", "sents"))
            tot = cited = 0
            for cw, t, nc, ns, path in sorted(rows, key=lambda r: -(r[0] / max(r[1], 1))):
                tot += t
                cited += cw
                print("%-48s %9d %9d %5.1f%%  %d/%d" % (path.replace("content/", ""),
                                                        t, cw, 100.0 * cw / max(t, 1), nc, ns))
            print("\nCORPUS: %d of %d = %.1f%%\n" % (cited, tot, 100.0 * cited / tot))

        elif census == "partition":
            buckets, load = partition(args.groups)
            print("PARTITION: %d disjoint groups, asserted disjoint before printing.\n" % args.groups)
            for i, (bucket, l) in enumerate(zip(buckets, load), 1):
                print("GROUP %02d  (%d markers on the old side)" % (i, l))
                for path, n in bucket:
                    print("    %-52s %3d" % (path, n))
            print("\ntotal: %d\n" % sum(load))

        elif census == "reconcile":
            docs, _ = wordcounts()
            words_base = sum(d[0] for d in docs)
            cit_base = sum(r[1] for r in citation_share())
            heading_words = sum(
                len(l.split()) for p in documents() for _, l in unfenced(p)
                if HEADING.match(l))
            print("RECONCILE: the two denominators, and why both are right.")
            print("  `words`     counts %d  (## and ### treated as section boundaries)" % words_base)
            print("  `citations` counts %d  (## and ### counted as body)" % cit_base)
            print("  difference  %d" % (cit_base - words_base))
            print("  ## / ###    %d" % heading_words)
            print("  reconciled:", "YES" if cit_base - words_base == heading_words else "NO -- INVESTIGATE")
            print()
    return 0


if __name__ == "__main__":
    sys.exit(main())
