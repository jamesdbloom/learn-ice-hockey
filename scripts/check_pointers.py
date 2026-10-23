#!/usr/bin/env python3
"""Report SPOKEN sentences that point at a layer the listener never hears.

WHY THIS EXISTS
---------------
Two layers of this corpus are never voiced. Measured across ~4.5 million rendered
characters: the **Sources trailer** of all 37 documents and every
`## Notes on verification` section contribute **zero spoken characters**. A third is
nearly as bad -- a table too wide for prose mode renders as *"A detailed table
appears here in the written version... The full table is on the website."*

So a sentence like *"see the verification note at the foot of this document"* is
spoken, and the thing it points at is not. `skating.md` says it twice, and the note
it names is deleted by the renderer. A reader-only-layer audit found the same shape
in seven documents.

⚠️ **No existing checker can see this.** `check_links.py` resolves markdown links and
anchors; these are prose pointers with no link in them. `check_facts.py` reads
structure. None of the six checkers renders anything, so none of them knows which
layers reach a listener.

⚠️ **THIS IS A WORKLIST, NOT A GATE.** It has no `--strict` and should not gain one.
Three reasons, each a way it is legitimately wrong:

  1. **The substance is usually stated inline anyway**, and only the pointer dangles.
     That is a wording nit, not a defect, and it is the common case.
  2. **A pointer aimed at the SITE is fine.** This corpus renders to a web page as
     well as to audio, and "the full table is on the website" is a true sentence the
     renderer itself emits. A document telling a reader to go and look is not lying.
  3. **It cannot tell a dangling pointer from a satisfied one.** It reports that a
     spoken sentence names an unspoken layer. Whether the reader loses anything
     depends on whether the content is voiced elsewhere, which only reading decides.

A tool that ranked these and offered to fix them is precisely how round 44
manufactured a divergence that did not exist. **Read every hit before touching it.**

WHAT IT REPORTS
---------------
For each document: every spoken sentence containing a phrase that points at the
Sources trailer, a `## Notes on verification` section, a footnote, or a table that
rendered as a pointer -- with the sentence, so it can be judged without opening the
file.

CROSS-DOCUMENT POINTERS (added 23 October 2026)
-----------------------------------------------
A second pass, printed in its OWN section after the original summary and NOT
added to its count, reports spoken sentences that name ANOTHER corpus document
and point at one of its unvoiced layers: "Conditioning and Recovery carries the
red flags and the sources", "Zone Entries has the figures ... and sources",
"Rules Primer carries the same material as a lookup table". A Sources trailer
is voiced in NO episode, so that pointer reaches nothing anywhere; a table
pointer is resolved against the TARGET's own render and labelled by whether
that document's audio voices its tables, drops them, or is mixed.

How it matches, and the false positives that shaped it (first corpus run):
  - A document's names are its H1 title plus any link text that is a 2+-word
    prefix of that title. ⚠️ Raw link texts were tried first and produced
    noise: a link labelled with a SECTION heading ("the Comparison Table",
    "If you play in Britain, the IIHF column is yours") carries the layer noun
    inside the name.
  - Names match CASE-SENSITIVELY on word boundaries: case-insensitively,
    "Faceoffs" matched "differ on faceoffs" and "Defender" "beating a defender".
  - The layer noun must sit within CROSS_AFTER characters after the name, or
    immediately before it in the "the sources in X" shape. ⚠️ A looser
    before-window charged "...sets out the sources, and Playing Without the
    Puck for loose-puck races" to the second document named.
  - Bare singular "source" is excluded ("the commonest source of confusion").

What the cross-document pass cannot see:
  - A pointer that names the other document by anything but its title or a
    title prefix -- "the shooting page", "the glossary", "the rules document".
  - A pointer whose layer noun is further from the name than the window, or
    BEFORE it in any shape other than "the sources in X" -- "the two
    goal-breakdown sources read are both NHL (Neutral Zone Systems sets them
    out)" is a real pointer and is now missed.
  - Which table a "table in X" sentence means, when X is MIXED; the same
    document-level limit as the original pass, one document over.
  - Whether the pointed-at content is ALSO voiced in this document, which is
    what decides whether a listener loses anything. Most hits are the
    disclosure convention working ("Time and Space carries the two coaching
    sources") and need no change at all.
  - A section heading spoken as a link label ("Rules Primer, If you play in
    Britain, the IIHF column is yours") still scores as a table pointer.

USAGE
-----
    python3 scripts/check_pointers.py                       # every document in content/
    python3 scripts/check_pointers.py content/systems/faceoffs.md
    python3 scripts/check_pointers.py podcast_style_b/      # any .md file or directory
    python3 scripts/check_pointers.py --self-test

A relative path is tried against the current directory first, then against the
repository root, so the tool runs the same from anywhere. ⚠️ It used to hard-code
`root / "content"` with no path argument (plan row 56g), so it could not be pointed
at a single document or at a podcast script at all.

⚠️ Every run now renders ALL of content/, even for one file, because the cross-
document pass needs every target's render to classify a table pointer.

Exit status is 0 unless the renderer itself fails or the arguments are wrong (2).
Findings are not failures.
"""
from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import md_to_speech as tts  # noqa: E402

#: Phrases that, spoken, send a listener to a layer they cannot reach.
#: Each is anchored to what it points AT, not to how it is phrased, because the
#: phrasings vary and the targets do not.
POINTERS: tuple[tuple[str, str], ...] = (
    (r"at the foot of th(?:is|e) document", "the Sources trailer / a footnote"),
    (r"the sources? (?:section|list|below)", "the Sources trailer"),
    (r"(?:sources?|studies|papers?) listed below", "the Sources trailer"),
    (r"(?:sources?|references?) at the (?:foot|end|bottom)", "the Sources trailer"),
    (r"notes? on verification", "a dropped ## Notes on verification section"),
    (r"the verification note", "a dropped verification paragraph"),
    # ⚠️  THE MODIFIER SLOT IS NOT OPTIONAL DECORATION -- it is 11 of the 15 instances.
    # These patterns were anchored to ADJACENT words ("the table below"), so any modifier
    # between the article and the noun defeated them. Measured over content/ on 2026-09-07:
    # bare form 4, modified form 11 -- "the comparison table below", "the broken-stick row
    # above", "the stick-fouls list above", "the game-state table below", "the checking
    # table above", "the harmonised list below", "the do-not-buy-used list above", "the
    # technique list below/above", "the last row below". The tool saw 27% of its own
    # construction. TWO of the misses pointed at the only two tables the renderer actually
    # DROPS: defensive_zone_coverage.md:96 -> the 6-column table at :367, and
    # rules_primer.md:876 ("the broken-stick row above") -> the 6-column, 23-row table at
    # :846. A listener was sent to a row they had never heard.
    # ⚠️  The SUPPRESSION rule was never the bug and is deliberately conservative (see
    # below): it under-suppresses for a document with a mix. The failure was upstream, here.
    (r"\bthe (?:[a-z][a-z-]* )?(?:table|column|row|chart|list) above\b",
     "a table that may be a pointer"),
    (r"\bthe (?:[a-z][a-z-]* )?(?:table|column|row|chart|list) below\b",
     "a table that may be a pointer"),
    (r"\bnot th(?:is|e) table\b", "a table that may be a pointer"),
    (r"\bin th(?:is|e) table\b", "a table that may be a pointer"),
    (r"\bthe (?:face-?off |icing |offside )?rows? above\b", "a table row"),
    (r"\bsee the note (?:above|below)\b", "a note that may be dropped"),
)

_COMPILED = tuple((re.compile(p, re.I), label) for p, label in POINTERS)
RE_SENTENCE = re.compile(r"[^.!?]*[.!?]")

# ---------------------------------------------------------------------------
# CROSS-DOCUMENT POINTERS (added 23 October 2026, plan row "cannot see a
# pointer at another document's unvoiced layer").
#
# The patterns above only fire on a pointer at THIS document's layers ("the
# table below", "at the foot of this document"). A spoken sentence such as
# "Conditioning and Recovery carries the red flags and the sources for both"
# sends the listener to ANOTHER document's Sources trailer -- which is voiced
# in no episode at all -- and "Zone Entries carries the full table" sends them
# to a table that may be dropped from that document's own audio too.
#
# How it finds them: a sentence is a candidate when it names another corpus
# document -- by a markdown link text this document uses for it, or by that
# document's H1 title -- AND a layer noun sits within a short window after
# the name (or just before it, for "the sources in X"). The window is the
# whole defence against noise: "sources" and "table" are common words.
# ---------------------------------------------------------------------------
RE_DOC_LINK = re.compile(r"\[([^\]\n]+)\]\(([^)\s]+?\.md)(?:#[^)\s]*)?\)")
#: (pattern, kind). kind decides how the target is resolved.
CROSS_LAYERS: tuple[tuple[re.Pattern, str], ...] = (
    (re.compile(r"\bnotes? on verification\b|\bverification notes?\b", re.I), "notes"),
    # Plural "sources" (noun or verb: "X sources that figure"), or a singular
    # "the/its source" after a carrying verb. A bare singular "source" is
    # excluded: "the commonest source of confusion", "no source behind it".
    (re.compile(r"\bsources\b|\bsource list\b|\bfootnotes?\b"
                r"|\b(?:carries|has|gives|cites|names|owns) (?:the|its|their) source\b", re.I),
     "sources"),
    (re.compile(r"\b(?:tables?|rows?|columns?|chart)\b", re.I), "table"),
)
#: Characters after / before the document name in which the layer noun must sit.
CROSS_AFTER, CROSS_BEFORE = 90, 40


def _doc_names(docs: list[Path]) -> dict[Path, set[str]]:
    """Every name a document goes by: its H1 title, plus any link text another
    document uses for it that is a two-word-or-longer PREFIX of that title
    ("Risk Management" for "Risk Management and Decision-Making").

    ⚠️ Link texts in general are NOT used, and the first version did use them:
    a link labelled with a SECTION heading ("the Comparison Table", "If you play
    in Britain, the IIHF column is yours") carries the layer noun inside the
    name itself, and every sentence quoting the heading scored as a pointer.
    Names are matched CASE-SENSITIVELY on word boundaries for the same reason --
    case-insensitively, "Faceoffs" matched "the two editions differ on
    faceoffs" and "Defender" matched "beating a defender"."""
    names: dict[Path, set[str]] = {d: set() for d in docs}
    titles: dict[Path, str] = {}
    for d in docs:
        m = re.search(r"^# (.+)$", d.read_text(encoding="utf-8"), re.M)
        if m:
            titles[d] = m.group(1).strip()
            names[d].add(titles[d])
    for d in docs:
        for lm in RE_DOC_LINK.finditer(d.read_text(encoding="utf-8")):
            target = (d.parent / lm.group(2)).resolve()
            title = titles.get(target)
            if not title:
                continue
            label = re.split(r"[,:→(]", re.sub(r"[*_`]", "", lm.group(1)))[0].strip()
            if len(label.split()) >= 2 and title.startswith(label):
                names[target].add(label)
    return names


def cross_hits(sentence: str, self_path: Path, names: dict[Path, set[str]],
               reports: dict[Path, object]) -> list[tuple[str, Path]]:
    """Labels for every other-document layer this spoken sentence points at."""
    out: list[tuple[str, Path]] = []
    for target, ns in names.items():
        if target == self_path:
            continue
        for name in sorted(ns, key=len, reverse=True):
            m = re.search(r"(?<![\w-])%s(?![\w-])" % re.escape(name), sentence)
            if not m:
                continue
            i = m.start()
            after = sentence[i + len(name): i + len(name) + CROSS_AFTER]
            before = sentence[max(0, i - CROSS_BEFORE): i]
            for pat, kind in CROSS_LAYERS:
                # BEFORE the name only counts in the "the sources IN X" shape:
                # the noun, then at most a short preposition phrase, then the
                # name. Without this, "...sets out the sources, and Playing
                # Without the Puck for loose-puck races" charged the trailer to
                # the SECOND document named.
                pre = pat.search(before)
                pre_ok = bool(pre) and re.fullmatch(
                    r"\s*(?:in|of|from|for|behind|at the foot of|at the end of)?\s*(?:the\s+)?",
                    before[pre.end():])
                if not (pat.search(after) or pre_ok):
                    continue
                tgt = target.stem
                if kind == "notes":
                    label = f"CROSS-DOC: {tgt}'s Notes on verification (never voiced)"
                elif kind == "sources":
                    label = f"CROSS-DOC: {tgt}'s Sources trailer (voiced in no episode)"
                else:
                    rep = reports.get(target)
                    if rep is None or not rep.tables_as_pointer:
                        label = (f"CROSS-DOC: a table in {tgt} -- every table there is "
                                 f"voiced, so only a listener of THIS episode misses it")
                    elif rep.tables_as_prose:
                        label = (f"CROSS-DOC: a table in {tgt} -- ⚠️ MIXED: "
                                 f"{rep.tables_as_prose} voiced, "
                                 f"{len(rep.tables_as_pointer)} dropped in its own audio")
                    else:
                        label = (f"CROSS-DOC: a table in {tgt} -- DROPPED from its own "
                                 f"audio too ({len(rep.tables_as_pointer)} table(s))")
                out.append((label, target))
                break
            break                       # one name per target is enough
    return out


def render(path: Path, root: Path):
    """Return (spoken text, DocReport) for one document.

    Goes through the real renderer rather than reading the markdown, because
    the whole question is which layers survive it. ⚠️ **A grep over content/
    cannot answer this**: the pointer and the thing it points at both live in
    the same file, so a document-level search sees them and concludes the
    reference resolves.
    """
    # A file outside content/ (a podcast script, a scratch copy) has no layer
    # directory, so its stem is its id; inside content/ the id is the one
    # md_to_speech gives it, `<layer>__<stem>`.
    try:
        relative = path.resolve().relative_to((root / "content").resolve())
        doc_id = str(relative.with_suffix("")).replace("/", "__")
    except ValueError:
        doc_id = path.stem
    try:
        label = str(path.relative_to(root))
    except ValueError:
        label = str(path)
    chunks, report = tts.transform_document(path, doc_id, label)
    return " ".join(tts.plain(chunk.tokens) for chunk in chunks), report


def self_test() -> int:
    """Guard the classifier against the two ways it can silently under-report.

    ⚠️ **A checker is code, and code has not been reviewed.** `check_chunk_tails.py`
    shipped this round reporting the corpus clean and was wrong twice over --
    blind to every label but one, and blind to permissions phrased as reliefs.
    Both bugs made it UNDER-report, and a clean result is the least trustworthy
    kind because nothing distinguishes "nothing to find" from "cannot see".

    So this exercises the real `POINTERS` patterns and the real suppression
    rule, not a reimplementation of them.
    """
    detected = [
        ("See the verification note at the foot of this document.",
         "the Sources trailer / a footnote",
         "the shape the tool was written for -- skating.md says it twice and the "
         "note it names is deleted by the renderer"),
        ("The studies listed below set out the evidence.",
         "the Sources trailer",
         "a spoken pointer at a trailer that contributes ZERO spoken characters"),
        ("Full detail is in the notes on verification.",
         "a dropped ## Notes on verification section",
         "a section the renderer removes entirely"),
    ]
    failures = 0
    for sentence, expected_label, why in detected:
        hit = None
        for pattern, label in _COMPILED:
            if pattern.search(sentence):
                hit = label
                break
        if hit != expected_label:
            failures += 1
            print(f"FAIL: {why}\n  sentence: {sentence!r}\n"
                  f"  expected: {expected_label!r}\n  got:      {hit!r}")

    # ⚠️ The suppression rule is the half most likely to hide a real hit. A table
    # reference is suppressed ONLY where the document's tables all read as prose;
    # it must NOT suppress a Sources-trailer pointer in the same document.
    table_sentence = "The rows above give the four books side by side."
    table_label = None
    for pattern, label in _COMPILED:
        if pattern.search(table_sentence):
            table_label = label
            break
    if table_label is None or "table" not in table_label:
        failures += 1
        print("FAIL: a table reference is not classified as a table reference, so the "
              "suppression rule can never fire and every such hit is reported blind")

    trailer_sentence = "The sources at the end of this document list them."
    trailer_label = None
    for pattern, label in _COMPILED:
        if pattern.search(trailer_sentence):
            trailer_label = label
            break
    if trailer_label is None or "table" in (trailer_label or ""):
        failures += 1
        print("FAIL: a Sources-trailer pointer is classified as a table reference and "
              "would be SUPPRESSED in any document whose tables read as prose")

    # Cross-document pass: the two shapes it exists to catch, and the three
    # false positives its first version produced on the real corpus.
    from types import SimpleNamespace
    other, me = Path("/x/time_and_space.md"), Path("/x/self.md")
    names = {other: {"Time and Space"}, me: {"Self Doc"}}
    dropped = {other: SimpleNamespace(tables_as_pointer=["line 9"], tables_as_prose=0)}
    cross_cases = [
        ("Time and Space carries the two coaching sources behind it.", dropped,
         "Sources trailer", "a pointer at another document's trailer"),
        ("Time and Space carries the full table.", dropped,
         "DROPPED from its own", "a table the target's own audio drops"),
        ("Deeper: Body Contact sets out the sources, and Time and Space for races.",
         dropped, None, "a noun BEFORE the name belonging to an earlier clause"),
        ("The two editions differ on time and space tables.", dropped, None,
         "a lower-case ordinary phrase is not a document name"),
        ("Self Doc carries the sources.", dropped, None,
         "a document pointing at its own trailer is the original pass's job"),
    ]
    for sentence, reps, want, why in cross_cases:
        got = cross_hits(sentence, me, names, reps)
        ok = (not got) if want is None else any(want in lab for lab, _ in got)
        if not ok:
            failures += 1
            print(f"FAIL (cross-doc): {why}\n  sentence: {sentence!r}\n"
                  f"  expected: {want!r}\n  got:      {got!r}")

    print(f"\n{len(detected) + 2 + len(cross_cases)} assertions, {failures} failure(s)")
    return 1 if failures else 0


def _resolve(arg: str, root: Path) -> Path | None:
    """A path as given, else under the repository root, else under content/ (so
    `systems/faceoffs` works as it does for check_callout_flow); None if none exists."""
    tries = [Path(arg), root / arg, root / "content" / arg]
    tries += [t.with_suffix(".md") for t in tries if t.suffix != ".md"]
    for candidate in tries:
        if candidate.exists():
            return candidate.resolve()
    return None


def _display(path: Path, root: Path) -> str:
    try:
        return str(path.relative_to(root))
    except ValueError:
        return str(path)


def main(argv: list[str] | None = None) -> int:
    root = Path(__file__).resolve().parent.parent
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("paths", nargs="*",
                    help="markdown files or directories (default: content/ under the repository)")
    ap.add_argument("--self-test", action="store_true",
                    help="exercise the classifier and the suppression rule, then exit")
    # ⚠️ argparse exits 2 on an unknown flag. Before 22 Oct 2026 this tool read
    # sys.argv by hand, so `--bogus` (or a mistyped `--file`) scanned the whole
    # corpus and exited 0 -- a silent false pass of the kind CLAUDE.md records for
    # `md_to_speech --only` (plan row 56e).
    args = ap.parse_args(argv)
    if args.self_test:
        return self_test()

    docs: list[Path] = []
    for arg in args.paths or [str(root / "content")]:
        path = _resolve(arg, root)
        if path is None:
            print(f"check_pointers: no such file or directory: {arg}", file=sys.stderr)
            return 2
        docs.extend(sorted(path.rglob("*.md")) if path.is_dir() else [path])
    if not docs:
        print("check_pointers: no documents found", file=sys.stderr)
        return 2

    # The cross-document pass resolves a "table in X" pointer against X's own
    # render, so every content/ document is rendered, not only the ones named.
    corpus = sorted((root / "content").rglob("*.md"))
    rendered: dict[Path, tuple[str, object]] = {}
    for path in sorted(set(corpus) | set(docs)):
        try:
            rendered[path] = render(path, root)
        except Exception as exc:                      # pragma: no cover
            print(f"check_pointers: {path} failed to render: {exc}", file=sys.stderr)
            return 2
    names = _doc_names(corpus)
    reports = {p: rep for p, (_, rep) in rendered.items()}

    total = 0
    cross_total = 0
    cross_by: Counter[str] = Counter()
    cross_lines: list[str] = []
    by_target: Counter[str] = Counter()
    suppressed: Counter[str] = Counter()
    for path in docs:
        spoken, report = rendered[path]
        hits: list[tuple[str, str]] = []
        doc_cross: list[tuple[str, str]] = []
        for sentence in RE_SENTENCE.findall(spoken):
            sentence = " ".join(sentence.split())
            for label, _target in cross_hits(sentence, path, names, reports):
                doc_cross.append((label, sentence))
                cross_by[label.split(" -- ")[0].split("'s ")[-1] if "'s " in label
                         else "a table in another document"] += 1
            for pattern, label in _COMPILED:
                if pattern.search(sentence):
                    # A "the table above" reference only dangles if this
                    # document actually HAS a table that rendered as a pointer.
                    # Where every table was read as prose the listener heard it
                    # and the reference is fine. Suppressing those is the
                    # difference between a worklist somebody works and one they
                    # stop opening.
                    if "table" in label and not report.tables_as_pointer:
                        suppressed[label] += 1
                        break
                    # ⚠️ THE SUPPRESSION IS DOCUMENT-LEVEL, NOT TABLE-LEVEL, and in a
                    # document with a MIX it under-suppresses: the sentence may point
                    # at a table the renderer read out in full while a DIFFERENT table
                    # elsewhere is what made `tables_as_pointer` non-empty. That fired
                    # on `body_contact_and_battles.md`, whose checking-eligibility
                    # table is voiced row by row -- the hit was real as a sentence and
                    # false as a pointer. Resolving it properly means finding the
                    # NEAREST table in the direction the sentence names and asking
                    # whether THAT one survived, which needs positions this report does
                    # not carry. Until then, say so at the hit rather than leaving the
                    # reader to rediscover it.
                    if "table" in label and report.tables_as_prose:
                        label = (f"{label} -- ⚠️ MIXED DOCUMENT: "
                                 f"{report.tables_as_prose} table(s) read as prose, "
                                 f"{len(report.tables_as_pointer)} dropped. This tool "
                                 f"cannot tell which one the sentence means")
                    hits.append((label, sentence))
                    by_target[label] += 1
                    break
        if hits:
            print(f"\n{_display(path, root)}")
            for label, sentence in hits:
                print(f"  -> {label}")
                print(f"     {sentence[:190]}")
            total += len(hits)
        if doc_cross:
            cross_lines.append(f"\n{_display(path, root)}")
            for label, sentence in doc_cross:
                cross_lines.append(f"  => {label}")
                cross_lines.append(f"     {sentence[:220]}")
            cross_total += len(doc_cross)

    print()
    print("=" * 70)
    print(f"{total} spoken sentences point at a layer a listener cannot reach, "
          f"in {sum(1 for _ in docs)} documents scanned.")
    for label, count in by_target.most_common():
        print(f"  {count:4}  {label}")
    mixed = sum(c for lab, c in by_target.items() if "MIXED DOCUMENT" in lab)
    if mixed:
        print(f"  ⚠️  {mixed} of those are in MIXED documents, where this tool cannot")
        print("      tell whether the table the sentence means was voiced or dropped.")
        print("      One such hit was checked by hand and the table WAS voiced in full:")
        print("      the sentence was still wrong, but about its own content, not about")
        print("      being a pointer. Read the rendered SSML, not this label.")
    if suppressed:
        print(f"  ({sum(suppressed.values())} table reference(s) suppressed: their "
              "document's tables all read as prose, so the listener heard them.)")
    # ⚠️ Printed AFTER the original summary, in its own section with its own
    # count, so the first summary line and every figure recorded before
    # 23 October 2026 keep their meaning.
    print()
    print("=" * 70)
    print("CROSS-DOCUMENT POINTERS -- a spoken sentence naming ANOTHER document's")
    print("unvoiced layer. Not included in the count above.")
    for line in cross_lines:
        print(line)
    print()
    print(f"{cross_total} spoken sentence-pointers at another document's layer.")
    for label, count in cross_by.most_common():
        print(f"  {count:4}  {label}")
    print("  A table pointer whose target voices every table is the mildest kind; a")
    print("  Sources pointer reaches nothing in any episode. The window is "
          f"{CROSS_AFTER} chars after")
    print(f"  the name and {CROSS_BEFORE} before, so 'sources' in an unrelated clause can still hit.")
    print()
    print("⚠️  WORKLIST, NOT A GATE. Most hits are wording nits -- the substance is")
    print("    usually voiced inline and only the pointer dangles. A pointer aimed at")
    print("    the SITE is legitimate: this corpus renders to a web page too.")
    print("    READ EVERY HIT. Do not sweep this pattern.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
