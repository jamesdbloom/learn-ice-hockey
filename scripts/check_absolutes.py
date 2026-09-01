#!/usr/bin/env python3
"""Find unscoped absolute denials of a penalty tier.

WHY THIS EXISTS
---------------
Round 33 produced **eighteen** instances of one defect, all written by the same hand,
and every one was caught by a reviewer rather than by the author. The shape is always
the same: a claim that widens a ceiling reaches for the strongest available form of
itself, and the strongest form is false.

    "Treating boarding as a two-minute foul. It is not one in any book."
        -> a bare minor is the base tier in three of the four.

    "a check there is not a two-minute foul: 604(c) a minor, ..."
        -> the sentence cites the rule that refutes it.

    "this one has no minor option at all: ... Hockey Canada 7.5(a) is a minor ..."
        -> written *while fixing* the previous two.

(That count is maintained by hand and was stale by two when a gate checked it. If you
are reading this after another round, assume it is low.)

The direction matters. An understated ceiling gets a reader hurt; an overstated one
teaches them to discount the accurate warnings sitting beside it. Both are defects.

WHAT IT FLAGS
-------------
The **self-refuting** subtype: a sentence that denies a penalty tier and then, in that
sentence or the next, **grants the tier itself** — without the denial being scoped to a
book. Both of these are caught:

    "not a two-minute foul: 604(c) a minor, ..."          (instance five)
    "no minor option at all: Hockey Canada 7.5(a) is a minor"   (instance ten)

Instance ten is the one that matters most, and getting it right required a distinction
the first version of this script got wrong. A book named **after** the denial does not
scope it — in instance ten the book appears *because it grants the tier*. So a book only
counts as scope when it sits **before** the denial, or **immediately after it led by a
preposition**: "no minor option at all *under the NHL or the IIHF*". Treating any nearby
book name as scope made instance ten's whole subtype invisible, and the docstring then
claimed it was caught. That claim was wrong for two revisions.

Correctly scoped denials are not flagged: "under USA Hockey 603(a) there is no bare
minor", "no minor option at all under the NHL or the IIHF", "the base tier in three
books". "bare minor" is treated as self-scoping — it denies the *bare* tier, not the tier.

WHAT IT CANNOT DO — read this before trusting a clean run
--------------------------------------------------------
**It does not catch instance one.** "It is not one in any book" is refuted by the
*rulebooks*, not by anything in the sentence — nothing in the text grants the minor, so
there is nothing here to find. Only `rules-verifier` can catch that subtype, by reading
the books.

So a clean run means "no sentence contradicts itself". It does **not** mean "no absolute
is false". Those are very different claims and this script can only make the first.

DENY is also a phrase list, not a grammar: it does not cover "there is no minor penalty",
"no minor tier", "no minor floor". Every current use of those is scoped, so nothing is
live — but a clean run says less than the phrase list suggests. And `not a minor\b` would
fire on "not a minor point"; there is no live instance, but that is the false-positive
shape to watch. It is a floor, not a ceiling.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"

# Absolute denials of a tier. Deliberately narrow: a broad pattern here produces
# false positives, and a check that cries wolf gets ignored, which is worse than
# no check at all.
DENY = re.compile(
    r"(no minor option at all"
    r"|not a minor\b"
    r"|not a two-minute"
    r"|not one in any book"
    r"|not merely a minor"
    r"|the cost is not a minor"
    r"|has no minor option"
    r"|never a minor\b)",
    re.I,
)

# A book named as the SCOPE of the denial. Two shapes count:
#   before the denial  — "under the NHL, a check has no minor option"
#   led by a preposition just after it — "no minor option at all under the NHL or the IIHF"
# A book named anywhere else after the denial does NOT scope it. That distinction is the
# whole check: instance ten read "no minor option at all: ... Hockey Canada 7.5(a) is a
# minor", where the book appears *because it grants the tier*. Treating any nearby book
# name as scope made that subtype — the one that has recurred most — invisible.
BOOK = re.compile(
    r"NHL|IIHF|USA Hockey|USAH|Hockey Canada|\bHC\b"
    r"|in (three|two) books|three books of four|in every book|no book"
    r"|bare minor",
    re.I,
)

# A scoping preposition immediately after the denial, followed by a book.
SCOPE_AFTER = re.compile(
    r"^[^.;:]{0,24}?\b(under|in|per|for|within)\b[^.;:]{0,40}?"
    r"(NHL|IIHF|USA Hockey|USAH|Hockey Canada|\bHC\b)",
    re.I,
)


# ---------------------------------------------------------------------------
# The UNDERSTATED direction, added after instance eighteen.
#
# Every one of the first seventeen instances OVERSTATED a ceiling. The eighteenth
# capped one — "if you play the puck first and trip them in doing so, it is only a
# minor" — which is true of the NHL and false of the IIHF, whose Table 7 puts
# tripping 57.4 among the majors that end your game on the first one. That direction
# is worse: an overstated ceiling gets the corpus disbelieved, an understated one gets
# a reader hurt.
#
# It cannot go in DENY. That list feeds a "denies a tier and then GRANTS it" test, and
# a cap grants nothing — what refutes it is a different book, elsewhere. So this is its
# own rule: a cap is a defect when the sentence does not say WHOSE cap it is.
# A COPULA is required. "A goal releases only a minor" is not a cap on a tier — the
# phrase is the object of "releases" — and matching it bare produced a false positive
# on a true sentence. What this looks for is a sentence SAYING the penalty *is* only a
# minor. NOT "capped at a minor": that is the corpus's own correct idiom and is always
# negated ("not capped at a minor").
CAP = re.compile(
    r"\b(?:is|are|was|were|be|becomes?|costs?|carries|gets?|draws?)\s+"
    r"(?:only|just|merely|no more than|nothing more than)\s+a\s+"
    r"(?:minor|two-minute|bare minor)\b",
    re.I,
)

# The same tier being granted after the denial.
GRANT = re.compile(r"\b(a minor\b|minor penalty|minor plus|runs minor|is a minor)", re.I)

WINDOW = 110  # characters either side of the denial in which a book may scope it


def sentences(line: str):
    return re.split(r"(?<=[.!?])\s+", line)


def caption_units():
    """Diagram captions and describe blocks, as (label, lineno, text).

    ⚠️ These are VOICED. `md_to_speech.py` loads `site/src/data/diagrams.json`
    and emits `"Diagram. " + caption`, so a caption is a spoken unit exactly as a
    facts value is -- and until this function existed, **an unscoped absolute
    denial or a capped penalty tier written in a caption passed every gate in
    this project**, because this checker read `content/**/*.md` and nothing else.
    A reviewer found four captions stating a rule with no book named, in a layer
    no gate could see.

    ⚠️ The JSON is GENERATED and gitignored-adjacent: if it is missing or stale
    this returns nothing, and `main` says so rather than counting a silent zero
    as a pass. A checker that passes because it found nothing to check is the
    trap this repository has hit with a 1,535-byte extraction that contained no
    book.
    """
    path = ROOT / "site" / "src" / "data" / "diagrams.json"
    if not path.is_file():
        return None
    try:
        data = json.loads(path.read_text())
    except (json.JSONDecodeError, OSError):
        return None
    units = []
    for did, entry in sorted(data.items()):
        if not isinstance(entry, dict):
            continue
        for field in ("caption", "describe"):
            text = entry.get(field)
            if isinstance(text, str) and text.strip():
                units.append((f"site/src/data/diagrams.json[{did}].{field}", 1, text))
    return units


def main() -> int:
    findings = []
    caps = []
    files = sorted(CONTENT.rglob("*.md"))
    if not files:
        print("check_absolutes: FATAL — no documents found under content/", file=sys.stderr)
        return 2

    units = []
    for path in files:
        rel = path.relative_to(ROOT)
        for lineno, line in enumerate(path.read_text().split("\n"), 1):
            units.append((rel, lineno, line))

    captions = caption_units()
    if captions:
        units.extend(captions)

    for rel, lineno, line in units:
        sents = sentences(line)
        for idx, sent in enumerate(sents):
            # Second rule, independent of the first: an unscoped CAP on a tier.
            # ⚠️ THIS BLOCK WAS SHIPPED AT THE WRONG INDENT and was inert: it sat
            # beside the sentence loop rather than inside it, so it saw only the
            # LAST sentence of each line, via a leaked loop variable. The script
            # reported clean while structurally unable to fire — the same failure
            # this file exists to prevent, and the second time it has happened.
            # It must also run BEFORE the `continue` below, or every sentence
            # without a denial is skipped.
            for cap in CAP.finditer(sent):
                # Scope on the clause immediately before the cap, not the whole
                # sentence. Instance eighteen's sentence DID name the NHL — for a
                # different clause, about penalty shots — so a whole-sentence
                # check cleared it. The book has to be attached to the cap.
                clause = re.split(r"[;,—]", sent[:cap.start()])[-1]
                if BOOK.search(clause):
                    continue  # "the NHL caps it at a minor" — scoped, correct
                caps.append((rel, lineno, sent.strip()))

            deny = DENY.search(sent)
            if not deny:
                continue
            before = sent[max(0, deny.start() - WINDOW) : deny.end()]
            after_all = sent[deny.end():]
            scoped = bool(BOOK.search(before)) or bool(SCOPE_AFTER.search(after_all))
            if scoped:
                continue  # the denial names the book(s) it applies to — correct
            # The grant may land in the NEXT sentence rather than this one, so look there
            # too. (This does NOT rescue instance one — nothing in its text grants the
            # minor. See the docstring.)
            after = after_all
            if idx + 1 < len(sents):
                nxt = sents[idx + 1]
                if not BOOK.search(nxt[:WINDOW]) or GRANT.search(nxt):
                    after += " " + nxt
            if GRANT.search(after):
                findings.append((rel, lineno, sent.strip()))

    if captions is None:
        print("check_absolutes: ⚠️  site/src/data/diagrams.json missing or unreadable — "
              "NO captions scanned. Run `node site/scripts/build-diagrams.mjs`.")
        print("check_absolutes: this run did NOT check the voiced caption layer.")
    print(f"check_absolutes: {len(files)} documents + "
          f"{len(captions or [])} diagram caption/describe units scanned")
    if caps:
        print(f"\n{len(caps)} unscoped cap(s) on a penalty tier:")
        for rel, lineno, sent in caps:
            print(f"  {rel}:{lineno}")
            print(f"    {sent[:200]}")
            print("    -> caps a tier without saying whose book caps it.")
    if not findings and not caps:
        print("no unscoped absolute denials or caps of a penalty tier.")
        return 0
    if not findings:
        return 1

    print(f"\n{len(findings)} problem(s):")
    for rel, lineno, sent in findings:
        print(f"  {rel}:{lineno}")
        print(f"    {sent[:200]}")
        print("    -> the sentence denies a tier without naming a book, then grants it.")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
