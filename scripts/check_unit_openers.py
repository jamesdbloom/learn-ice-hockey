#!/usr/bin/env python3
"""List spoken units that OPEN on a bare pronoun, beside what the listener heard just before.

WHY THIS EXISTS. A listener hears "it", "this", "that" or "one" as the nearest thing said
before it. Inside a sentence that is usually the right thing. At the START of a spoken unit
(a paragraph, a list item, a ```facts line, a heading) the nearest thing said before is the
END OF THE PREVIOUS UNIT -- a citation run, a penalty, a diagram caption, another bullet's
last clause -- and the pronoun lands there. Found by hand in W515–W517:
  * defensive_zone_coverage :755 "**Once it reaches the head, under Hockey Canada.**", heard
    straight after USA Hockey 620(b)'s "careless contact with their head, face or neck";
  * zone_entries :361 "**Why it works:**", heard after a diagram caption about goal posts;
  * zone_entries :1204 "Under USA Hockey it is at least…", heard after careless head contact;
  * goaltender :1710 and forechecking_systems :983/:984 "Once it reaches the head…".
No grep over content/ can rank these, because the defect is the PAIR (this unit's opening,
the previous unit's ending) and the previous unit can be a heading, a facts line or a
caption-bearing diagram marker. This tool walks the document with md_to_speech's own block
parser, so a "unit" here is a unit there.

⚠️ A CHUNK BOUNDARY IS NOT THE DEFECT. md_to_speech chunks only to fit TTS request limits and
the pipeline concatenates the chunks into one file (see check_chunk_tails.py's retraction), so a
listener hears the previous unit whether or not a chunk edge falls between them. The defect is
what the previous unit ENDS on, nothing else.

⚠️ THIS IS A WORKLIST, NOT A GATE. It has no --strict and should not gain one. Most hits are
correct: a bullet "It is a minor…" under a heading naming the act, or a "This" that points at
the whole previous paragraph, reads fine. Read the pair. Fix only where the pronoun is heard as
the previous unit's last noun and that noun is not the thing meant -- then name the thing
(the minimal change), never restructure.

WHAT IT CANNOT SEE.
  * Diagram markers (`![](diagram:id)`): md_to_speech voices the CAPTION there, which this tool
    does not resolve; such a previous unit is shown as "[diagram: id]". Read the caption.
  * By default only it/its/they/them/their: "This is…" and the numeral "One …" dominate
    otherwise (--demonstratives adds this/that/these/those).
  * Pronouns that are not the unit's first word or first word after a leading subordinator
    ("Once", "When", "If", "Why", "And", "But", "So"...). A unit opening "Under USA Hockey it is"
    is caught only because "Under <book>" is skipped as a scope phrase; other scope openers are
    not, so --loose widens the window to the first six words.
  * Sources trailers and "Notes on verification" sections are skipped (not voiced).

USAGE
  python3 scripts/check_unit_openers.py                 # whole corpus, summary + hits
  python3 scripts/check_unit_openers.py --file systems/zone_entries
  python3 scripts/check_unit_openers.py --loose         # first six words, more noise
  python3 scripts/check_unit_openers.py --demonstratives # also this/that/these/those
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import md_to_speech  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"

# Default set: the pronouns that must have a single noun antecedent. "This"/"that"/"these"/"those"
# usually point at the whole previous idea and read fine, and "one" opening a unit is nearly always
# the numeral ("One skate…"), so those are --demonstratives only. Measured 20 Nov 2026: the full set
# returned 693 corpus-wide, dominated by "This is…" and "One <noun>".
PRONOUNS = {"it", "its", "they", "them", "their"}
DEMONSTRATIVES = {"this", "that", "these", "those"}
SUBORDINATORS = {
    "once", "when", "if", "why", "because", "unless", "until", "and", "but", "so",
    "or", "then", "even", "where", "while", "though", "although", "after", "before",
}
# "Under USA Hockey it is…", "In the NHL it…": a scope phrase is skipped so the pronoun after it
# is tested. Kept to the corpus's book names on purpose; --loose catches the rest.
SCOPE_RE = re.compile(
    r"^(?:under|in|for)\s+(?:the\s+)?(?:usa hockey|hockey canada|carha|nhl|iihf|pwhl|eihl|"
    r"ihuk|ncaa|the casebook|its casebook|the book|both books|every book|most books)"
    r"(?:['’]s)?(?:\s+casebook)?\s*,?\s*",
    re.I,
)
FACTS_LABEL_RE = re.compile(r"^[A-Z][A-Za-z ]{0,20}:\s+")
DIAGRAM_RE = re.compile(r"!\[[^\]]*\]\(diagram:([^)]+)\)")


def clean(text: str) -> str:
    text = text.replace("⚠️", "").replace("⚠", "").replace("❗", "").replace("🚫", "")
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)  # links -> text
    text = text.replace("**", "").replace("*", "").replace("`", "")
    return re.sub(r"\s+", " ", text).strip()


def opener_hit(text: str, loose: bool, demo: bool = False) -> str | None:
    """The pronoun the unit opens on, or None."""
    pron = PRONOUNS | DEMONSTRATIVES if demo else PRONOUNS
    t = FACTS_LABEL_RE.sub("", clean(text), count=1)
    t = SCOPE_RE.sub("", t, count=1)
    words = re.findall(r"[A-Za-z’']+", t)
    if not words:
        return None
    window = words[:6] if loose else words[:2]
    if not loose:
        first = words[0].lower()
        if first in pron:
            return words[0]
        if first in SUBORDINATORS and len(words) > 1 and words[1].lower() in pron:
            return words[1]
        return None
    for w in window:
        if w.lower() in pron:
            return w
    return None


def voiced_sequence(text: str):
    """(kind, text, first_line) for every voiced unit in reading order, headings included.

    Mirrors check_marker_pairs.voiced_units' drop rules (Sources trailer, DROP_SECTION_HEADINGS)
    and its unit dispatch, but keeps headings and paragraphs-that-are-diagram-markers as
    context, because a listener hears both."""
    out = []
    skip_level = 0
    for block in md_to_speech.parse_blocks(text):
        if block.kind == "heading":
            h = md_to_speech.strip_for_classification(block.lines[0]).lower()
            if any(h.startswith(d) for d in md_to_speech.DROP_SECTION_HEADINGS):
                skip_level = block.level
                continue
            if skip_level and block.level > skip_level:
                continue
            skip_level = 0
            out.append(("heading", re.sub(r"^#+\s*", "", block.lines[0]), block.line_number))
            continue
        if skip_level:
            continue
        if block.kind in ("paragraph", "quote") and md_to_speech.is_sources_paragraph(
                re.sub(r"^\s*>\s?", "", "\n".join(block.lines), flags=re.M)):
            break
        if block.kind == "code":
            if block.lines and block.lines[0].strip().lower().startswith("```facts"):
                for i, l in enumerate(block.lines[1:-1]):
                    if l.strip():
                        out.append(("facts", l.strip(), block.line_number + 1 + i))
        elif block.kind == "list":
            for item in md_to_speech._list_items(block.lines):
                out.append(("item", item, _line_of(block, item)))
        elif block.kind == "quote":
            inner = "\n".join(re.sub(r"^\s*>\s?", "", l) for l in block.lines)
            for para in re.split(r"\n\s*\n", inner):
                if para.strip():
                    out.append(("quote", para.replace("\n", " "), block.line_number))
        elif block.kind == "paragraph":
            joined = " ".join(block.lines)
            m = DIAGRAM_RE.search(joined)
            if m and not DIAGRAM_RE.sub("", joined).strip():
                out.append(("diagram", f"[diagram: {m.group(1)}]", block.line_number))
            else:
                out.append(("paragraph", joined, block.line_number))
    return out


def _line_of(block, item: str) -> int:
    head = item[:30]
    for i, l in enumerate(block.lines):
        if head and head in l:
            return block.line_number + i
    return block.line_number


def tail(text: str, n: int = 90) -> str:
    t = clean(text)
    return ("…" + t[-n:]) if len(t) > n else t


def scan(path: Path, loose: bool, demo: bool = False):
    seq = voiced_sequence(path.read_text(encoding="utf-8"))
    hits = []
    for i in range(1, len(seq)):
        kind, text, line = seq[i]
        if kind in ("heading", "diagram"):
            continue
        p = opener_hit(text, loose, demo)
        if p:
            prev_kind, prev_text, _ = seq[i - 1]
            hits.append((line, kind, p, clean(text)[:90], prev_kind, tail(prev_text)))
    return hits


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--file", help="one document: 'systems/zone_entries' or a content/ path")
    ap.add_argument("--loose", action="store_true", help="pronoun anywhere in the first six words")
    ap.add_argument("--demonstratives", action="store_true", help="also this/that/these/those (noisy)")
    args = ap.parse_args()

    if args.file:
        f = args.file
        f = f[len("content/"):] if f.startswith("content/") else f
        f = f if f.endswith(".md") else f + ".md"
        paths = [CONTENT / f]
        if not paths[0].exists():
            print(f"check_unit_openers: no such document: {paths[0]}", file=sys.stderr)
            return 2
    else:
        paths = sorted(CONTENT.rglob("*.md"))

    total = 0
    for path in paths:
        hits = scan(path, args.loose, args.demonstratives)
        if not hits:
            continue
        rel = path.relative_to(ROOT)
        print(f"\n{rel}  ({len(hits)})")
        for line, kind, p, opening, prev_kind, prev_tail in hits:
            print(f"  :{line} [{kind}] opens on '{p}': {opening}")
            print(f"        after [{prev_kind}]: {prev_tail}")
        total += len(hits)
    mode = "first six words" if args.loose else "first word, or first word after a subordinator/scope"
    print(f"\ncheck_unit_openers: {total} unit(s) open on a bare pronoun ({mode}) across "
          f"{len(paths)} document(s) -- a WORKLIST: read each pair; most are correct.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
