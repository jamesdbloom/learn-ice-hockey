#!/usr/bin/env python3
"""Report the corpus's own ABSENCE-OF-EVIDENCE DISCLOSURES, so they can be tested.

WHY THIS EXISTS
---------------
This corpus tells its reader, in many places (⚠️ RUN THE TOOL -- ~250 when written, 550 today; never quote this docstring), that it looked for something and did
not find it: *"no study was found"*, *"nobody publishes a ranking"*, *"could not be
traced to a source"*, *"no public count exists"*. Those labels are the corpus's
integrity story, and non-negotiable 4 protects them: **never strip an honest
disclosure.**

⚠️ **"Do not strip it" had quietly been read as "do not test it".** Before round 59
exactly ONE disclosure had ever been checked for truth. Three were then checked
properly and **all three were false**, each in a different way:

  * `skating.md` said a figure *"could not be traced to a source"* -- and the source
    was **in that document's own Sources list**. The refetch behind the disclosure
    had checked a different page.
  * `equipment.md` said the string `Z262` *"appears nowhere on hecc.org"*, **naming
    five pages** -- and it is on one of the five, in body prose, under HECC's own
    *Visors* heading. The corpus's supporting evidence was right and its conclusion
    wrong: a listing designation is not a test standard.
  * `breakouts.md` said a cited page *"returned 404"* -- it is **live, 200, 115,717
    bytes**, and the verification baseline already carried a warning saying so,
    unactioned. It also contradicted a sibling document citing the same URL as live.

⚠️ **They share nothing except DIRECTION. All three make the corpus look LESS
supported than it is** -- the opposite of the failure every other convention here
guards against. That is exactly why none was caught: a reviewer scanning for
over-claiming reads a disclosure and moves on.

**A disclosure is a CLAIM** -- that a search was run and came back empty -- and it
must be attacked the way any negative existence claim is attacked. **Check the
document's own Sources list FIRST.** Correcting a false disclosure is not stripping
it; it is replacing an absence claim with the source.

⚠️ **AND MOST OF THEM ARE TRUE.** `special_teams.md`'s prevalence disclosure -- the
one several documents inherit as owner -- was attacked across five refetched sources
and held. So did every trapezoid negative, IIHF 81.6's missing counterpart, the KHL
and 2005-06 negatives. Non-negotiable 4 was right. It was just never tested.

⚠️ **THIS IS A WORKLIST, NOT A GATE.** No `--strict`, and it must never gain one.
Four ways it is legitimately wrong:

  1. **A true disclosure is the CORRECT state** and the commonest hit here. Most of
     what this prints is the corpus behaving exactly as it should.
  2. **A repair contains the words of the defect it repairs.** Seven coordinator
     censuses in one round matched a repair or a disclosure rather than a defect.
  3. **The best-phrased disclosure in the corpus scores as a hit** --
     `defending_the_rush.md:511`, *"as far as this document has been able to
     establish"* -- because scoping is what makes it good.
  4. **It cannot tell a disclosure from a hedge.** *"a guide, not a law"* is about
     APPLICABILITY; *"no source states this"* is about PROVENANCE. A reviewer who
     sees the first and stops is how an unsourced number reached eight documents.

WHAT IT REPORTS
---------------
Every match, with its LAYER, because the layer decides how much a defect costs:

  * ``facts``   -- voiced ALONE, in its own <p> with a 300 ms break either side, to a
                   listener with no surrounding context. **The worst place to be
                   wrong**, and a document-level grep cannot see it, because the body
                   and the block live in the same file.
  * ``body``    -- voiced in context.
  * ``unvoiced``-- the renderer DROPS it. The Sources trailer and every
                   ``## Notes on verification`` section contribute zero spoken
                   characters. A defect there reaches the site and never the
                   listener. **Two of the three false disclosures found so far lived
                   here**, which is why they were invisible to a listening review.

⚠️  **ASK THE RENDERER; DO NOT RE-IMPLEMENT ITS TEST.** The first version of this
tool decided "unvoiced" by looking for a ``## Sources`` heading. **The Sources
trailer in this corpus has no heading** -- it is a run of italic ``*Label: [link]*``
lines at the end of the file -- so the check never fired, and every trailer
disclosure was reported as ``body``, i.e. as reaching a listener when it does not.
That is the same bug ``check_tables.py`` was written about, in the same week, by the
same author. The tool now renders each document through ``md_to_speech`` and asks
whether the words are actually in the speech.

Usage:
    python3 scripts/check_disclosures.py              # every document, by layer
    python3 scripts/check_disclosures.py --layer facts
    python3 scripts/check_disclosures.py --file skating


⚠️⚠️  TWO MEASURED DEFECTS IN THIS TOOL, FOUND BY REVIEW AND NOT YET FIXED. Read them
before you trust a single line of its output.

1. THE LAYER ATTRIBUTION IS WRONG ON THE LAYER THIS TOOL EXISTS TO FIND, and it is
   BIASED, not random. ``is_voiced`` accepts a line as reaching a listener if ANY
   seven-word run of it matches anywhere in the rendered speech. Sources-trailer lines
   are the LONGEST lines in the corpus -- one measured at 1,854 words -- so a collision
   is near-certain, and the longer the line the likelier a false ``body`` verdict.
   MEASURED: of 81 trailer-shaped disclosure lines, 68 are reported as ``body``.
   ⚠️  ``skating.md:931`` is the last line of its file, is reported ``[body]``, and does
   not appear in the rendered speech AT ALL -- it matched on the run
   "and a multi year process for elite", which is voiced in a ```facts block elsewhere.
   ⚠️  THIS IS v1's ``## Sources`` BUG BY A DIFFERENT MECHANISM. v1 detected the trailer
   by a heading the trailer does not have; v2 detects voicing by a heuristic that a long
   line defeats. Both fail in the SAME DIRECTION: they report unvoiced text as voiced.

2. ``RULEBOOK`` MATCHES A BARE LEAGUE NAME, so it silently removes real absence claims
   from the worklist. MEASURED: 77 of the 359 lines classified ``rulebook`` contain no
   rule number, no situation number and no occurrence of "rulebook" -- e.g.
   ``rink_map_and_glossary.md``'s "There is still no published census of British rink
   dimensions" and ``rules_primer.md``'s "There is no single governing document for rec
   hockey". Both are pure absence-of-evidence claims and both are what this tool was
   written to surface. ⚠️  ``--unchecked`` filters on ``classify()``, so they never appear.
   The misfire runs toward LESS VISIBLE, which is the direction this docstring itself
   says nobody catches.

⚠️  So: this tool finds CANDIDATES. Its counts are usable; its layer column and its
``rulebook`` class are not, until both are fixed.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import md_to_speech as tts  # noqa: E402

CONTENT = Path(__file__).resolve().parent.parent / "content"

#: Anchored to what is being CLAIMED -- that a search came back empty -- not to a
#: fixed vocabulary. Phrasings vary; the claim does not.
PATTERNS: tuple[tuple[str, str], ...] = (
    (r"could not be (?:traced|verified|located|found|confirmed|established|sourced)", "could-not-be-traced"),
    (r"\b(?:no|not a|nor any) (?:published |public |league-wide |independent |peer-reviewed )*"
     r"(?:stud(?:y|ies)|count|survey|census|ranking|breakdown|data|figure|source|evidence|record|analysis)\b",
     "no-X-exists"),
    (r"\bnobod(?:y|ies) (?:has |have )?(?:publish|track|count|measur|rank|test)", "nobody-does-X"),
    (r"\b(?:appears?|occurs?|is found) nowhere\b", "appears-nowhere"),
    (r"\bnowhere in (?:the|any|its|that|either|all) \w+", "nowhere-in-book"),
    (r"\bwas (?:not |never )?found\b(?![ ]to be)", "was-not-found"),
    (r"\bno (?:such )?(?:rule|clause|provision|counterpart|equivalent|entry|exception|definition)\b", "no-provision"),
    (r"\breturned? (?:a |an )?(?:404|zero|confident zero)\b", "returned-404-or-zero"),
    (r"\bunverified\b|\buncheckable\b|\bunfalsifiable\b", "labelled-unverified"),
    (r"\bis not (?:in|on) (?:the|any) (?:page|book|rulebook|list|source)", "not-in-source"),
    (r"\bno (?:book|rulebook|league|governing body) (?:writes|states|says|requires|defines|uses)", "no-book-does-X"),
)
COMPILED = tuple((re.compile(p, re.I), name) for p, name in PATTERNS)

#: Scoping phrases that make a disclosure honest about the search it actually ran.
#: Their PRESENCE is a good sign; their absence is not itself a defect.
#: ⚠️ THIS LIST IS THE TOOL'S WEAKEST PART AND IT HAS ALREADY BEEN WRONG. Its first
#: version reported `risk_management.md` as having ZERO scoped disclosures. That
#: document carries two of the better-scoped ones in the corpus -- *"was found for
#: this document"* and *"read that as 'none found here', not as proof that none
#: exists"* -- and the pattern recognised neither. An agent found it by reading the
#: file the tool had just cleared. **A headline figure of "0 of 58 scoped" was
#: published off that miss.**
#:
#: ⚠️ So: a `scoped` flag is weak evidence, and an `UNSCOPED` flag is WEAKER. There
#: is no fixed vocabulary for saying what you searched, which is the whole reason
#: the class is hard. Read the line.
SCOPED = re.compile(
    r"as far as|so far as|held here|on disk|in the (?:sources|books) (?:listed|held|searched)|"
    r"this document has been able|searched (?:here|in|across)|of the \w+ (?:searched|held|read)|"
    r"not indexed|could not (?:reach|be reached)|in the indexes searched|"
    r"for this document|none found here|not found here|found (?:for|in) this|"
    r"not proof that|rather than proof|no(?:ne)? (?:was |were )?found\b|"
    r"nothing (?:was )?found|not(?:hing)? in the (?:\w+ ){0,3}(?:searched|held|listed|read|available)|"
    r"in (?:the )?(?:\w+ ){0,2}(?:indexes|databases|volumes|editions) (?:searched|read|held)|"
    r"available here|obtainable here|reached (?:here|this session)|this session|"
    r"could not be (?:obtained|located) (?:here|from)|"
    r"my (?:reading|search)|the search (?:run|made) here",
    re.I,
)


#: ⚠️ A RULEBOOK NEGATIVE IS NOT AN ABSENCE-OF-EVIDENCE CLAIM, AND TREATING IT AS ONE
#: IS A CATEGORY ERROR. *"NHL 43.2: 'There is no provision for a minor penalty for
#: checking from behind'"* is **the book saying so in its own words**. A rulebook is a
#: closed, searchable text on disk that a reader can check; asking such a line to
#: "state what search was run" is asking it to scope a quotation.
#:
#: ⚠️ This distinction was missing from the first version of this tool, and its absence
#: produced a published figure -- "55 of 58 unscoped" -- that **overstated the problem
#: roughly three to one**. A reviewer found it by reading all 58 lines the tool had
#: classified. Of those 58: ~15 were rulebook negatives, ~20 were substantively scoped
#: in wording the pattern missed, ~5 were not absence claims at all, and **only ~15
#: genuinely asserted something no reader could check.**
RULEBOOK = re.compile(
    r"\b(?:NHL|IIHF|USA Hockey|USAH|Hockey Canada|CARHA|In-House|IHUK|EIH)\b"
    r"(?:[^.\n]{0,80}?\b(?:Rule|Rules|Situation|Casebook|Interpretation|Table|Glossary|Note)\b)?"
    r"|\bRule\s+\d|\bSituation\s+\d|\bno provision\b|\brule ?book\b",
    re.I,
)


def classify(line: str, scoped: bool) -> str:
    """Which of the four kinds this line is. ⚠️ A HINT, NOT A VERDICT -- read the line.

    Ranked by how much a reader loses: `unchecked` is the real worklist.
    """
    if RULEBOOK.search(line):
        return "rulebook"      # the book says so; a reader can check it
    if scoped:
        return "scoped"        # says what search was run
    return "unchecked"         # asserts something nobody can verify


def _words(text: str) -> list[str]:
    """Alphabetic words only, lowercased.

    Digits are excluded on purpose: the renderer speaks ``47.2`` as *"forty-seven
    point two"*, so any comparison that carries numerals through fails on exactly
    the lines this corpus cares most about.
    """
    return re.findall(r"[a-z]+", text.lower())


def spoken_words(path: Path, root: Path) -> list[str]:
    """The document's actual SPOKEN text, from the real renderer.

    ⚠️ This is the only way to know which layers survive. A grep over `content/`
    cannot answer it, because the trailer and the body it belongs to live in the
    same file.
    """
    doc_id = path.stem
    chunks, _report = tts.transform_document(path, doc_id, str(path.relative_to(root)))
    return _words(" ".join(tts.plain(chunk.tokens) for chunk in chunks))


def is_voiced(line: str, spoken: list[str], window: int = 7) -> bool:
    """True if a run of `window` consecutive words from `line` occurs in the speech.

    A run rather than the whole line, because the renderer legitimately rewrites
    parts of a sentence -- expanding rule numbers, stripping the warning glyph,
    repacking chunks. A run rather than a single word, because common words appear
    everywhere. Lines shorter than the window fall back to their full word list.
    """
    w = _words(line)
    if not w:
        return False
    if len(w) < window:
        return any(spoken[i:i + len(w)] == w for i in range(len(spoken) - len(w) + 1))
    for start in range(len(w) - window + 1):
        run = w[start:start + window]
        for i in range(len(spoken) - window + 1):
            if spoken[i:i + window] == run:
                return True
    return False


def fenced_layers(text: str):
    """Yield (line_no, fence_kind_or_None, line). Fence state only -- NOT voicing."""
    in_fence = False
    fence_kind = ""
    for n, line in enumerate(text.split("\n"), 1):
        stripped = line.strip()
        if stripped.startswith("```"):
            if in_fence:
                in_fence, fence_kind = False, ""
            else:
                in_fence, fence_kind = True, stripped[3:].strip().lower()
            continue
        yield n, (fence_kind if in_fence else None), line


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--layer", choices=("facts", "body", "unvoiced", "other-fence"))
    ap.add_argument("--unchecked", action="store_true",
                    help="only lines that assert something no reader could check -- the real worklist")
    ap.add_argument("--file", help="substring of the document path")
    args = ap.parse_args()

    root = CONTENT.parent
    per_layer: dict[str, int] = {}
    per_class: dict[str, int] = {}
    per_kind: dict[str, int] = {}
    per_doc: dict[str, dict[str, int]] = {}
    scoped_n = 0
    rows = []

    for path in sorted(CONTENT.rglob("*.md")):
        if args.file and args.file not in str(path):
            continue
        text = path.read_text(encoding="utf-8")
        spoken = spoken_words(path, root)
        for line_no, fence, line in fenced_layers(text):
            kinds = sorted({name for rx, name in COMPILED if rx.search(line)})
            if not kinds:
                continue
            if fence == "facts":
                layer = "facts"
            elif fence is not None:
                layer = "other-fence"
            else:
                layer = "body" if is_voiced(line, spoken) else "unvoiced"
            if args.layer and layer != args.layer:
                continue
            if args.unchecked and classify(line, bool(SCOPED.search(line))) != "unchecked":
                continue
            scoped = bool(SCOPED.search(line))
            kind = classify(line, scoped)
            per_class[kind] = per_class.get(kind, 0) + 1
            scoped_n += scoped
            per_layer[layer] = per_layer.get(layer, 0) + 1
            rel = str(path.relative_to(root))
            per_doc.setdefault(rel, {}).setdefault(layer, 0)
            per_doc[rel][layer] += 1
            for k in kinds:
                per_kind[k] = per_kind.get(k, 0) + 1
            rows.append((path.relative_to(root), line_no, layer, kinds, scoped, line.strip(), kind))

    for rel, line_no, layer, kinds, scoped, line, kind in rows:
        mark = "  ⚠️ " if layer == "facts" and kind == "unchecked" else "     "
        print(f"{mark}{rel}:{line_no}  [{layer} · {kind} · {','.join(kinds)}]")
        print(f"        {line[:200]}")

    print("\n" + "=" * 72)
    print("by layer: " + ", ".join(f"{k} {v}" for k, v in sorted(per_layer.items())))
    print("by kind:  " + ", ".join(f"{k} {v}" for k, v in sorted(per_class.items())))
    print("by kind:  " + ", ".join(f"{k} {v}" for k, v in sorted(per_kind.items(), key=lambda x: -x[1])))
    print(f"\n{len(rows)} disclosure lines across {len(per_doc)} of "
          f"{len(list(CONTENT.rglob('*.md')))} documents; {scoped_n} carry a scoping phrase.")
    print(
        "\n⚠️  WORKLIST, NOT A GATE, and it must never gain a --strict.\n"
        "    A TRUE disclosure is the correct state and the commonest hit here. This\n"
        "    tool cannot tell a true one from a false one -- only refetching the\n"
        "    source can, and the DOCUMENT'S OWN SOURCES LIST is where the falsifying\n"
        "    source sat in two of the three cases found so far.\n"
        "\n"
        "⚠️  THE 'unchecked' COUNT IS STILL TOO HIGH, AND THE GAP IS THE POINT.\n"
        "    A reviewer who READ all 58 facts-layer lines classified ~15 as genuinely\n"
        "    unverifiable; this tool reports 31. The difference is disclosures that\n"
        "    say what search was run in wording no pattern anticipated. There is no\n"
        "    fixed vocabulary for scoping a claim -- which is the whole reason the\n"
        "    class is hard -- so this number is an upper bound, never a worklist.\n"
        "\n"
        "⚠️  The 'scoped' flag is a HINT, not a verdict. A scoped disclosure states\n"
        "    the search it actually ran, which is what makes one honest -- but a\n"
        "    scoped disclosure can still be false, and an unscoped one can be true.\n"
        "\n"
        "⚠️  A ```facts hit is the worst case: that layer is voiced ALONE, with a\n"
        "    300 ms break either side, to a listener with no surrounding context.\n"
        "\n"
        "⚠️  Correcting a false disclosure is NOT stripping it (non-negotiable 4).\n"
        "    It is replacing an absence claim with the source. Never remove a\n"
        "    disclosure that is true, and never make the corpus look more confident\n"
        "    than it is -- every false one found so far (the count moved 3 -> 11 in one round; run this tool and read the round record rather than trusting a number printed here) ran the OTHER way."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
