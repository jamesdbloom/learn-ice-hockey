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

# caption: 'a' + 'b' + CONST + 'c'  ->  one string
#
# ⚠️  THE IDENTIFIER ALTERNATIVE IS LOAD-BEARING AND WAS ADDED 15 September 2026.
#     Without it this pattern matched quoted literals ONLY, so an interpolated shared
#     constant ENDED THE RUN and the tool scanned a prefix. MEASURED against the build
#     product at the time of the fix: 10 of 408 caption/describe units short,
#     6,624 characters invisible, worst `oz-net-front-screen` at SIX PER CENT.
#     ⚠️  IT WAS WORST WHERE IT MATTERS MOST. `PINCH_CAVEATS` in risk_management.mjs is
#     docblocked "the sentences both captions must carry, written once so the pair cannot
#     drift apart" -- it holds a cardinal-rule hedge AND a body-checking scope, and it
#     contains "no contact is drawn: the pinching defenceman's route ends in two bars",
#     which is a negation, a bare colon and a tail. THAT IS THIS TOOL'S OWN `SHAPE`,
#     sitting in a constant the tool could not read. A shared constant is used precisely
#     BECAUSE the text is load-bearing, so the invisible text was selected for importance.
#     ⚠️  Do not "simplify" this by reading site/src/data/diagrams.json instead. That is a
#     build product and goes stale the moment a caption is edited -- see the header.
# ⚠️  A DOUBLE-QUOTED LITERAL IS NOT AN EDGE CASE, IT IS THE HOUSE STYLE FOR APOSTROPHES.
#     This corpus writes "the goaltender's eyes" in double quotes precisely BECAUSE the text
#     contains an apostrophe -- so the string most likely to be double-quoted is the one
#     carrying possessive prose about a person. Matching only '...' ended the run there.
#     MEASURED: oz-net-front-screen's caption was seen at SEVEN PER CENT for this reason
#     alone, 173 of 2,509 characters, stopping at the first apostrophe-bearing clause.
STR = r"""'(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\""""
CAPTION = re.compile(
    r"(caption|describe):\s*((?:(?:" + STR + r"|[A-Z][A-Z0-9_]*)\s*\+?\s*)+)", re.S)
PIECE = re.compile(
    r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"|\b([A-Z][A-Z0-9_]*)\b")
# ⚠️  `export const` as well as `const`: rule69_clauses.mjs EXPORTS the Rule 69 hedges that
#     several captions interpolate, and matching only a bare `const` left every one unresolved.
CONST_DECL = re.compile(
    r"^(?:export\s+)?const\s+([A-Z][A-Z0-9_]*)\s*=\s*"
    r"((?:(?://[^\n]*\n\s*)*(?:" + STR + r"|[A-Z][A-Z0-9_]*)\s*\+?\s*)+);",
    re.M | re.S)



def _unescape(lit: str) -> str:
    r'''Resolve a JS string literal's escapes to the characters the build ships.

    ⚠️  THE THIRD TRUNCATION-CLASS BLIND SPOT IN THIS FUNCTION, found 16 September 2026 by a
        commit gate. Five caption units carry RAW \uXXXX ESCAPES in source -- forecheck-212,
        forecheck-212-stacked, forecheck-122, forecheck-131 and the-trapezoid -- so every
        source-reading worklist was scanning the seven characters "\u2014" where an em dash
        ships. ⚠️  TWO of those units have a NEGATION FOLLOWED BY \u2014 in their body-checking
        scope sentence, which is PRECISELY the shape SHAPE exists to surface, and this tool
        could not see it because the separator was spelled out rather than present.
    ⚠️  check_absolutes.py is unaffected: it reads the resolved JSON build product.
        This tool reads SOURCE on purpose -- the JSON goes stale the moment a caption is
        edited -- which is exactly why it, and not that one, has to do the unescaping.
    ⚠️  `unicode_escape` is latin-1-based, so round-trip through latin-1 first or a literal
        em dash already in the file is mangled into mojibake. The two-step below is deliberate.
    '''
    out = lit.replace("\\'", "'").replace('\\"', '"')
    if "\\u" not in out:
        return out
    return out.encode("latin-1", "backslashreplace").decode("unicode_escape")


def _resolve(ident: str, consts: dict[str, str], where: str) -> str:
    r"""Look up an interpolated constant, and SAY SO when it cannot be found.

    (This docstring is a RAW string because it names \uXXXX escapes, and a plain one makes
    Python try to decode them -- which is how the first version of it failed to parse.)

    ⚠️  A FOURTH TRUNCATION CLASS LIVES IN THIS FUNCTION AND THIS CLOSES HALF OF IT.
        `consts.get(ident, "")` silently dropped an unresolvable SCREAMING_CASE name to the
        empty string, so a caption interpolating a constant this module cannot parse would be
        scanned SHORT with nothing reported -- the same silent-prefix failure as the three
        already fixed here (inline comments, double-quoted strings, \uXXXX escapes).
    ⚠️  THE OTHER HALF IS STILL OPEN AND IS NOT CLOSED BY THIS: `CAPTION`'s alternation is
        `STR | [A-Z][A-Z0-9_]*`, so a LOWERCASE identifier, a backtick TEMPLATE LITERAL, or a
        FUNCTION CALL inside a `caption:` run still ends the match and the tool scans a prefix.
        Neither is exercised today -- 408 units compared against the build product, zero short --
        but nothing prevents the next caption edit from exercising them, and nothing would report
        it. A build-product comparison is the only thing that has ever caught this class.
    """
    if ident in consts:
        return consts[ident]
    print(f"⚠️  {where}: cannot resolve interpolated constant {ident!r} — "
          f"this caption is being scanned SHORT", file=sys.stderr)
    return ""

def _constants() -> dict[str, str]:
    """Every `const NAME = 'a' + B + 'c';` in the diagram sources, resolved.

    ⚠️  Built across ALL modules, not just the one being scanned, because a constant may be
        imported from a sibling (rule69_clauses.mjs exports several). Names are SCREAMING_CASE
        and distinctive, so a flat table is safe; a collision would be a source defect.
    """
    raw: dict[str, str] = {}
    for f in sorted(SRC.glob("*.mjs")):
        src = strip_line_comments(f.read_text())
        for m in CONST_DECL.finditer(src):
            raw[m.group(1)] = m.group(2)

    resolved: dict[str, str] = {}

    def value(name: str, seen: frozenset[str]) -> str:
        if name in resolved:
            return resolved[name]
        if name in seen or name not in raw:
            return ""          # a cycle, or a name that is not a caption constant
        out = _assemble(raw[name], seen | {name})
        resolved[name] = out
        return out

    def _assemble(run: str, seen: frozenset[str]) -> str:
        parts = []
        for sq, dq, ident in PIECE.findall(run):
            if sq or dq:
                parts.append(_unescape((sq or dq)))
            else:
                parts.append(value(ident, seen))
        return "".join(parts)

    for name in list(raw):
        value(name, frozenset())
    return resolved
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
    consts = _constants()   # ⚠️ ONCE, not per module: it scans every file to build the table,
                            #     so calling it inside the loop rebuilt it 31 times. Harmless but
                            #     wasteful, and it read as if the table were module-scoped. It is not
                            #     -- a constant may be imported from a sibling, which is why the table
                            #     is global in the first place.
    for f in sorted(SRC.glob("*.mjs")):
        src = strip_line_comments(f.read_text())
        for m in CAPTION.finditer(src):
            text = "".join(
                _unescape(sq or dq) if (sq or dq) else _resolve(ident, consts, f.name)
                for sq, dq, ident in PIECE.findall(m.group(2)))
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
