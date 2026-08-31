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

Exit status is 0 unless the renderer itself fails. Findings are not failures.
"""
from __future__ import annotations

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
    (r"\bthe (?:table|column|row|chart) above\b", "a table that may be a pointer"),
    (r"\bthe (?:table|column|row) below\b", "a table that may be a pointer"),
    (r"\bnot th(?:is|e) table\b", "a table that may be a pointer"),
    (r"\bin th(?:is|e) table\b", "a table that may be a pointer"),
    (r"\bthe (?:face-?off |icing |offside )?rows? above\b", "a table row"),
    (r"\bsee the note (?:above|below)\b", "a note that may be dropped"),
)

_COMPILED = tuple((re.compile(p, re.I), label) for p, label in POINTERS)
RE_SENTENCE = re.compile(r"[^.!?]*[.!?]")


def render(path: Path, root: Path):
    """Return (spoken text, DocReport) for one document.

    Goes through the real renderer rather than reading the markdown, because
    the whole question is which layers survive it. ⚠️ **A grep over content/
    cannot answer this**: the pointer and the thing it points at both live in
    the same file, so a document-level search sees them and concludes the
    reference resolves.
    """
    relative = path.relative_to(root / "content")
    doc_id = str(relative.with_suffix("")).replace("/", "__")
    chunks, report = tts.transform_document(path, doc_id, str(path.relative_to(root)))
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

    print(f"\n{len(detected) + 2} assertions, {failures} failure(s)")
    return 1 if failures else 0


def main() -> int:
    root = Path(__file__).resolve().parent.parent
    docs = sorted((root / "content").rglob("*.md"))
    if not docs:
        print("check_pointers: no documents found", file=sys.stderr)
        return 2

    total = 0
    by_target: Counter[str] = Counter()
    suppressed: Counter[str] = Counter()
    for path in docs:
        try:
            spoken, report = render(path, root)
        except Exception as exc:                      # pragma: no cover
            print(f"check_pointers: {path} failed to render: {exc}", file=sys.stderr)
            return 2
        hits: list[tuple[str, str]] = []
        for sentence in RE_SENTENCE.findall(spoken):
            sentence = " ".join(sentence.split())
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
                    hits.append((label, sentence))
                    by_target[label] += 1
                    break
        if hits:
            print(f"\n{path.relative_to(root)}")
            for label, sentence in hits:
                print(f"  -> {label}")
                print(f"     {sentence[:190]}")
            total += len(hits)

    print()
    print("=" * 70)
    print(f"{total} spoken sentences point at a layer a listener cannot reach, "
          f"in {sum(1 for _ in docs)} documents scanned.")
    for label, count in by_target.most_common():
        print(f"  {count:4}  {label}")
    if suppressed:
        print(f"  ({sum(suppressed.values())} table reference(s) suppressed: their "
              "document's tables all read as prose, so the listener heard them.)")
    print()
    print("⚠️  WORKLIST, NOT A GATE. Most hits are wording nits -- the substance is")
    print("    usually voiced inline and only the pointer dangles. A pointer aimed at")
    print("    the SITE is legitimate: this corpus renders to a web page too.")
    print("    READ EVERY HIT. Do not sweep this pattern.")
    return 0


if __name__ == "__main__":
    if "--self-test" in sys.argv:
        raise SystemExit(self_test())
    raise SystemExit(main())
