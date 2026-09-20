#!/usr/bin/env python3
"""Report quotations in `content/` whose ORIGINAL CHARACTERS differ from the source.

WHY THIS EXISTS
---------------
Round 78 repaired three quotation drifts in `uk_rules.md` AFTER a `safety-reviewer`
had read all fourteen of that section's quotations and reported every one verbatim.
Two more were then found in `core_principles.md`, and two more in
`body_contact_and_battles.md` -- and a systematic pass over that one document found
**47 further instances**. Corpus-wide the class is in the hundreds.

Every one of them passes `check_facts`, `check_links`, `check_absolutes` and
`check_tables`. **No gate in this repository can see any of it**, because the
Markdown is valid and the claim is true; only the characters inside the quotation
marks are wrong.

⚠️ **UNTIL 20 September 2026 THIS TOOL COULD NOT SEE THE ```facts``` LAYER AT ALL.**
Its extraction pattern required a quotation to sit inside `*"..."*` -- italicised,
the body-prose convention -- and a `Rule:`/`Convention:` line is plain text with no
asterisks, so every quotation in every facts block was structurally invisible,
silently, for every round this tool has existed. A blanket fix (dropping the `*`
requirement everywhere) was tried once and reverted the same day: ordinary body
prose uses bare quotation marks for reported speech and emphasis far more than for
verbatim rulebook text, and notfound went from 927 to 6,076. The fix that shipped
instead relaxes the requirement ONLY inside a ```facts``` fence, where every
quotation is a rulebook fragment by the style guide's own convention. Corpus-wide
this added 418 previously-unseen fragments (9,583 clean -> 10,001) and surfaced 30
new flagged drifts and 120 new notfound lines that were sitting, unseen, in the one
layer voiced alone with no surrounding context. **Read those before fixing anything
-- this is a worklist, not a gate, same as the rest of this tool.**

THE FOUR SHAPES
---------------
1. An initial capital silently lowered, with no `[x]` disclosure.
2. An initial capital silently raised.
3. A terminal period or comma added inside the quotation marks where the source
   sentence CONTINUES. ⚠️ This is the one that changes meaning: it presents a
   subordinate opener as a complete sentence. Round 78's worst instance quoted
   *"if at all possible."* where the source reads
   *"If at all possible, try to turn skates parallel to the boards before contact
   is made"* -- the timing was gone and the fragment read as the whole instruction.
4. Interior case, e.g. `Game Misconduct penalty` -> `Game Misconduct Penalty`.

HOW IT WORKS, AND WHY IT IS BUILT THIS WAY
------------------------------------------
It normalises both the quotation and every `sources/*.txt` to alphanumerics only,
finds the match, maps back to the ORIGINAL character offsets, and compares those.

⚠️ That is deliberate and it is what makes the tool work at all. Matching on
alphanumerics **defeats the page-furniture splice** that `sources/README.md`
records -- `usah.txt` puts a running header between *"first played by a"* and
*"teammate"*, and `iihf_rules.txt` puts `TABLE OF CONTENTS` inside a sentence --
while still letting the comparison see case and punctuation. A phrase grep finds
neither the quotation nor the drift.

It keeps the CLOSEST match across every occurrence in every source, so a
table-of-contents hit cannot masquerade as the body.

⚠️⚠️ WORKLIST, NOT A GATE. It has no `--strict` and should not gain one.
--------------------------------------------------------------------
- **The `[a]` bracket form is the corpus's disclosed-insertion convention and is
  CORRECT.** The tool already exempts a leading `[x]`. One document uses it 53
  times.
- **An ALL-CAPS source heading is a judgement call.** A signal name printed
  `CROSS-CHECKING` in the book and title-cased in the corpus is not obviously a
  defect.
- **A sentence-initial quotation may legitimately carry the source's capital.**
  Only reading the source decides.

WHAT IT CANNOT SEE -- and this list is the honest half
------------------------------------------------------
- ⚠️ **IT MANUFACTURES "NOT FOUND" ON A LINE WITH TWO OR MORE SHORT QUOTES.**
  Discovered 20 September 2026, independently, by both agents triaging the
  facts-layer fix's first haul. The regex requires ``MINLEN`` non-quote
  characters between two quote marks, so a genuine quotation shorter than that
  (``"pinch"``, ``"top"``, ``"no glass"``, a goalie-call term) cannot match at
  its OWN marks -- ``finditer`` fails there and resumes from that short
  quotation's CLOSING mark, which it cannot distinguish from an opener. On a
  line carrying a second short quotation further along, everything between the
  two -- ordinary prose, rule numbers, citations -- gets captured as if it were
  quoted text, and correctly reported NOTFOUND, because it was never a
  quotation. Confirmed mechanically against the regex, not just by pattern: it
  accounted for roughly two-thirds of the in-facts NOTFOUND hits both agents
  read. **A NOTFOUND hit whose "quotation" reads as ordinary connecting prose,
  on a line that ALSO carries a short quoted term nearby, is this artefact, not
  a citation gap** -- check for a second quote mark on the same line before
  spending time chasing it in `sources/`.
- ⚠️ **NHL REFERENCE TABLE 14 / IIHF APPENDIX IV TABLE 16 ROWS ALWAYS SCORE
  NOTFOUND.** `sources/README.md` documents that both tables extract with their
  two columns interleaved in raw PDF order, splitting a row's own sentence
  around unrelated text from the next column. A quotation from either table is
  real and verbatim positionally, never contiguously -- confirmed by reading
  `sources/nhl_rules.txt` at the cited line range, not by trusting the grep.
- **Any quotation whose source is not on disk.** Roughly two dozen in one document
  alone come from the open web. They are neither verified nor flagged: they are
  invisible.
- ⚠️ **ATTRIBUTION drift.** It keeps the closest match across ALL sources, so a
  sentence the corpus credits to the NHL, drifted into the IIHF's wording, scores
  **clean**. It does not check the quotation against the book the prose names.
- **A one-word change that lands on a phrase occurring elsewhere** matches the
  other occurrence silently.
- ⚠️ **It can INVENT drift, not just miss it, when two different rulebooks share
  an opening clause.** A quotation correctly attributed to one book's Casebook
  can match the CLOSEST occurrence in an entirely different book's rule text
  that happens to continue further -- flagging a fabricated "truncation" against
  a source the document never cited. Confirmed twice in one document: a CARHA
  quotation matched a different line of CARHA's own book, and a USA Hockey
  Casebook quotation matched the NHL's rule instead. Read the document's own
  attribution before trusting a DRIFT hit that spans two named rulebooks.
- ⚠️ **Whether a verbatim quotation is the RIGHT quotation.** Nothing here tests
  whether the cited rule number prints those words, whether the edition is
  current, or whether truncating at the chosen point changes the rule's meaning.
  Round 78 found a case to start from: one site stops before *"or for the purpose
  of starting an altercation"* while the same document quotes the fuller form
  twelve lines earlier.

Usage:  check_quote_drift.py <path to a content/*.md file> [min quote length]
"""
import re, sys, glob, os, unicodedata

if len(sys.argv) < 2 or sys.argv[1] in ("-h", "--help"):
    sys.exit(__doc__.strip().split("Usage:")[-1].strip()
             if "Usage:" in __doc__ else
             "usage: check_quote_drift.py <content/*.md> [min quote length]")

DOC = sys.argv[1]
MINLEN = int(sys.argv[2]) if len(sys.argv) > 2 else 25

def norm_map(s):
    out, idx = [], []
    for i, ch in enumerate(s):
        c = ch
        if c in "‘’": c = "'"
        if c in "“”": c = '"'
        c = unicodedata.normalize("NFKD", c)
        for cc in c:
            if cc.isalnum():
                out.append(cc.lower()); idx.append(i)
    return "".join(out), idx

sources = {}
for p in sorted(glob.glob(os.path.join(os.path.dirname(os.path.abspath(DOC)),
                                       "..", "..", "sources", "*.txt"))):
    raw = open(p, encoding="utf-8", errors="replace").read()
    n, ix = norm_map(raw)
    sources[os.path.basename(p)] = (raw, n, ix)

text = open(DOC, encoding="utf-8").read()
lines = text.split("\n")
quotes, seen = [], set()
in_facts = False
for ln, l in enumerate(lines, 1):
    fence = l.strip()
    if fence == "```facts":
        in_facts = True
        continue
    if in_facts and fence == "```":
        in_facts = False
        continue
    # ASCII *and* typographic quote marks. The corpus uses both: a census on
    # 19 September 2026 found 156 italic-quoted fragments across 10 documents
    # written with U+201C/U+201D, every one of them structurally INVISIBLE to
    # this checker while the pattern accepted only '"'. forechecking_systems.md
    # held 60 of them and center.md 45. An agent found it only because its own
    # nine new quotations scored clean=900 unchanged until it converted them to
    # straight quotes, at which point the figure moved to 909.
    #
    # \u26a0\ufe0f A `Rule:`/`Convention:` line inside a ```facts``` fence is PLAIN TEXT,
    # never italicised, so its quotations carry no `*` at all -- the pattern
    # above is structurally blind to every quotation in that layer. Relaxing
    # it everywhere was tried once and reverted: ordinary body prose uses bare
    # quotation marks for reported speech and emphasis far more often than for
    # verbatim rulebook text, and dropping the `*` requirement corpus-wide
    # turned notfound from 927 into 6,076. So the relaxation applies ONLY
    # inside a ```facts``` fence, where every quotation is a rulebook fragment
    # by the style guide's own convention, never dialogue or emphasis.
    pattern = (r'["\u201c]([^"\u201d]{%d,})["\u201d]' if in_facts else
               r'\*["\u201c]([^"\u201d]{%d,})["\u201d]\*') % MINLEN
    for m in re.finditer(pattern, l):
        q = m.group(1)
        if (ln, q) in seen: continue
        seen.add((ln, q)); quotes.append((ln, q))

def clean_quote(q):
    q = q.replace("**", "").replace("*", "")
    q = re.sub(r"\[sic\]", "", q)
    q = re.sub(r"\[([a-zA-Z])\]", r"\1", q)
    return q

def letters(s): return [c for c in s if c.isalpha()]

flagged, missing, clean = [], [], 0
for ln, q in quotes:
    bracketed = bool(re.match(r'^\*{0,2}\[[a-zA-Z]\]', q))
    cq = clean_quote(q)
    frags = [f for f in re.split(r"…|\.\.\.", cq)]
    for fi, f in enumerate(frags):
        f2 = f.strip()
        nf, _ = norm_map(f2)
        if len(nf) < 15:
            continue
        best = None
        for name, (raw, n, ix) in sources.items():
            start = 0
            while True:
                k = n.find(nf, start)
                if k < 0: break
                start = k + 1
                s, e = ix[k], ix[k + len(nf) - 1]
                orig = raw[s:e+1]
                tail = raw[e+1:e+14]
                la, lb = letters(f2), letters(orig)
                d = sum(1 for x, y in zip(la, lb) if x != y)
                if best is None or d < best[0]:
                    best = (d, name, orig, tail)
                if d == 0: break
            if best and best[0] == 0: break
        if best is None:
            missing.append((ln, f2)); continue
        d, name, orig, tail = best
        o2 = " ".join(orig.split())
        flags = []
        la, lb = letters(f2), letters(o2)
        diffs = [(i, x, y) for i, (x, y) in enumerate(zip(la, lb)) if x != y]
        if diffs:
            first = diffs[0][0] == 0
            if first and bracketed and fi == 0:
                diffs = diffs[1:]
            if diffs:
                flags.append(f"CASE {diffs[:6]}")
        if f2 and f2[-1] in ".,;:":
            t = tail.lstrip("”’\"')")
            if not t.startswith(f2[-1]) and not o2.endswith(f2[-1]):
                flags.append(f"ADDED {f2[-1]!r} (source continues {tail.replace(chr(10),' ')!r})")
        if flags:
            flagged.append((ln, f2, name, o2, tail, flags))
        else:
            clean += 1

print("#" * 20, "NOT FOUND IN ANY LOCAL SOURCE", "#" * 20)
for ln, f in missing:
    print(f"{ln}\t{f[:150]}")
print()
print("#" * 20, "DRIFT", "#" * 20)
for ln, f2, name, o2, tail, flags in flagged:
    print(f"line {ln} [{name}]")
    print(f"   doc: {f2[:220]}")
    print(f"   src: {o2[:220]} | next {tail.replace(chr(10),' ')!r}")
    print(f"   >>> {'; '.join(flags)}")
print()
print(f"fragments: clean={clean} flagged={len(flagged)} notfound={len(missing)}")
