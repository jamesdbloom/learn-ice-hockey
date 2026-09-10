#!/usr/bin/env python3
"""Report NEGATIONS that can carry onto a tail in the diagram CAPTION layer.

⚠️  A WORKLIST, NOT A GATE. It has no --strict and must never gain one. Most hits are
    correct sentences; the tool cannot tell you which. READ EVERY HIT.

WHY THIS EXISTS. A negation followed by a separator that is NOT a full stop — comma,
semicolon, colon, em dash — lets the negation carry onto whatever follows. "Never do X;
do Y" is heard as "never do Y". Commit 49f1dc6 exists solely to stop a facts line telling
a listener NEVER TO KEEP THEIR HEAD UP.

⚠️  THE CAPTION LAYER HAD NEVER BEEN SWEPT FOR IT. `check_chunk_tails.py` inspects chunk
    tails and `check_facts.py` reads the ```facts layer; NEITHER READS CAPTIONS, and a
    caption is voiced as an "Important. Diagram." block — the loudest unit after facts.
    In one wave, five agents shortening five captions each found roughly ONE PRE-EXISTING
    inversion PER CAPTION, by hand, incidentally. Measured examples, all shipped:
      - "the six feet is the depth and not the half-width, and 'three feet out from the
        goal line' is inside the paint"  -> inverts to "three feet out is NOT inside the
        paint": a screener told a foot in the crease is legal, in the caption whose
        subject IS the crease.
      - "must not get walked around; each middle takes a half-wall"  -> "must not ...
        collapse onto the bumper", reversing the shape's whole purpose.
      - "Those distances are a guide and not a law - they vary with your backward speed"
        -> "they do NOT vary with your backward speed".
      - "you cannot defend anything from behind, and the aim is their inside hip"
        -> "do not aim at their inside hip".

⚠️  THE DISCRIMINATOR, and no regex can apply it. It is a defect when the negation is a
    MAIN-CLAUSE negation immediately before the separator. It is FINE inside a relative or
    subordinate clause, behind a MATCHED PAIR of parenthetical dashes, or when an
    intervening "so"/"but" resolves it.
⚠️  THE FINAL TEST IS SEMANTIC: ASK WHAT THE INVERTED READING ACTUALLY SAYS. A grammatical
    inversion that says something absurd is not a defect; one that says something a reader
    could act on is. That judgement is a human's and this tool does not attempt it.

⚠️  A WORKED EXAMPLE OF A HIT THAT IS NOT A DEFECT, so nobody "fixes" it. The tool's own
    top-ranked hit on its first run was `angle-into-the-corner`:
        "So, in every league, checking or not, get your skates parallel"
    Negation, comma, imperative — the exact shape. It is FINE: "checking or not" is a fixed
    parenthetical scope phrase, not a main-clause negation, and the inverted reading
    ("do not get your skates parallel") is not available to a listener because the negation
    never governs the clause. ⚠️  THE TOOL CANNOT SEE THAT AND NEVER WILL. Read the hit.

⚠️  A SECOND CLEARED EXAMPLE, ruled by a `safety-reviewer` on the rendered audio, so that the
    whole family is not re-referred. Four forecheck captions share:
        "And in many leagues body checking is not allowed at all, so find out which book you
         are under ... before you plan on making contact"
    Main-clause negation, comma, imperative tail. NOT A DEFECT, on two grounds:
      (a) "so" marks what follows as the CONSEQUENCE of the negation. English marks the
          inverted reading with "so don't". Every inversion this corpus has actually repaired
          attaches its tail to a BARE separator - an em dash or a colon, no connective - so the
          tail reads as one more item inside the negation's scope.
      (b) DECISIVE: carrying the negation forward here does not produce the opposite
          instruction. The negation IS the protective half. A listener who mis-carries polarity
          anywhere in that sentence ends up MORE cautious. Every inversion the corpus has
          repaired runs the other way: a protective instruction coming out prohibited.
    ⚠️  Round 70 found that EVERY cardinal-rule instruction in site/src/diagrams/ is introduced
        by "so", and that THE ONE SITE WITH A BARE IMPERATIVE STRAIGHT AFTER A DASH WAS THE ONE
        THAT INVERTED. That is the corpus's own convention working, not an edge of it.

⚠️  READS THE .mjs SOURCES, NOT `site/src/data/diagrams.json`. The JSON is a build product
    and goes stale the moment a caption is edited, so a scan of it silently reports
    superseded text — the same trap `check_absolutes.py` refuses to fall into.
"""
from __future__ import annotations
import re, sys, pathlib, collections

SRC = pathlib.Path(__file__).resolve().parent.parent / "site" / "src" / "diagrams"

# caption: 'a' + 'b' + 'c'  ->  one string
CAPTION = re.compile(r"(caption|describe):\s*((?:'(?:[^'\\]|\\.)*'\s*\+?\s*)+)", re.S)
PIECE = re.compile(r"'((?:[^'\\]|\\.)*)'")
IDENT = re.compile(r"id:\s*'([^']+)'")

NEGATION = r"\b(never|not|no|neither|nor|cannot|nothing|none)\b"
# negation ... separator-that-is-not-a-full-stop ... tail
SHAPE = re.compile(NEGATION + r"([^.!?]{0,70}?)([;:,—])\s+(\w[^.!?]{0,90})", re.I)

# signals that RAISE suspicion; none is proof
IMPERATIVE = re.compile(
    r"^(find|get|keep|take|ask|read|treat|stay|play|make|use|watch|put|drive|skate|check|"
    r"call|look|turn|angle|arrive|carry|hold|leave|move|start|stop|square|seal|block)\b", re.I)
RESOLVER = re.compile(r"^(so|but|because|which|who|whose|since|though|although)\b", re.I)


def strip_line_comments(src: str) -> str:
    """Drop WHOLE-LINE `//` comments only.

    ⚠️  MEASURED 10 September 2026, and this is why the function exists: `CAPTION` requires an
        UNINTERRUPTED run of quoted strings, so a `//` line inside a `'a' + 'b'` concatenation
        ENDED THE RUN and the tool scanned only the prefix of that caption. 55 caption/describe
        blocks in 27 modules carry inline `//` lines. The tool saw 358,089 chars in 391 blocks;
        the comment-stripped assembly is 408,890 in 395. **50,801 characters — 12.4% of the
        layer — had NEVER been scanned**, hiding 156 hit occurrences, 4 at score 3 and 14 at
        score 2. ⚠️  IT WAS WORST WHERE IT MATTERS MOST: the safety-counterweight captions
        (`defending_the_rush.mjs` 44 comment lines, `zone_entries.mjs` 39,
        `forechecking_systems.mjs` 31 and 30, `playing_without_the_puck.mjs` 30,
        `body_contact_and_battles.mjs` 20) — and the crease caption at
        `offensive_zone_play.mjs`, three of whose inline comments RECORD PREVIOUSLY-REPAIRED
        INVERSIONS. A round that "finished" this worklist would have finished the prefix.

    ⚠️  WHOLE-LINE ONLY. A caption containing `https://` loses half its text to a naive
        strip, and this corpus's captions do carry URLs.
    """
    return "\n".join(l for l in src.splitlines() if not l.lstrip().startswith("//"))


def captions() -> list[tuple[str, str, str, str]]:
    out = []
    for f in sorted(SRC.glob("*.mjs")):
        src = strip_line_comments(f.read_text())
        for m in CAPTION.finditer(src):
            text = "".join(p.replace("\\'", "'") for p in PIECE.findall(m.group(2)))
            if not text:
                continue
            before = src[max(0, m.start() - 4000):m.start()]   # 1500 left 13 of 68 hits
                                                             # reporting as [?], which is
                                                             # unactionable on a worklist
            ids = IDENT.findall(before)
            out.append((f.name, ids[-1] if ids else "?", m.group(1), text))
    return out


def main() -> int:
    only = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("-") else None
    rows = captions()
    hits = []
    for fname, did, field, text in rows:
        if only and only not in (fname, did):
            continue
        for m in SHAPE.finditer(text):
            neg, mid, sep, tail = m.group(1), m.group(2), m.group(3), m.group(4).strip()
            # ⚠️  A MATCHED PARENTHETICAL PAIR DEFUSES THE CARRY, but `mid` is capped at 70
            #     chars by SHAPE, so a pair whose OPENING dash sits further back scored as a
            #     bare dash. MEASURED: 16 of 68 hits — ~24% of the whole band, and the single
            #     largest false-positive family. Count from the start of the SENTENCE instead.
            sent = re.split(r"[.!?]\s", text[:m.start()])[-1]
            # an intervening resolver in the middle span defuses most carries
            resolved = bool(re.search(r"\b(so|but)\b", mid, re.I)) or bool(RESOLVER.match(tail))
            score = 0
            if IMPERATIVE.match(tail):
                score += 2                      # a command is the dangerous tail
            if not resolved:
                score += 1
            if sep == "—" and (sent + mid).count("—") == 0:
                score += 1                      # an UNMATCHED em dash, not a parenthetical pair
            hits.append((score, fname, did, field, neg, sep, tail))

    hits.sort(key=lambda h: (-h[0], h[1], h[2]))
    scanned = len({(f, d, x) for f, d, x, _ in rows})
    print(f"check_caption_negations: {len(rows)} caption/describe strings in {len(set(r[0] for r in rows))} modules")
    print(f"  {len(hits)} negation-before-separator occurrences")
    for band, label in ((4, "MOST SUSPICIOUS"), (3, "suspicious"), (2, "worth a look"), (0, "low signal")):
        band_hits = [h for h in hits if h[0] >= band] if band == 4 else [h for h in hits if h[0] == band]
        if band == 0:
            band_hits = [h for h in hits if h[0] <= 1]
        if not band_hits:
            continue
        print(f"\n=== {label} ({len(band_hits)}) ===")
        for score, fname, did, field, neg, sep, tail in band_hits[:200]:
            print(f"  [{did}] ({field}) …{neg}… {sep!r} → {tail[:88]}")
    print("\n⚠️  A WORKLIST. Read every hit and ask what the INVERTED reading SAYS.")
    print("⚠️  Do not sweep this pattern: most hits are correct sentences.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
