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

5. ⚠️ **Word-boundary drift** (added 23 October 2026) -- a space, or a hyphen,
   that the doc adds or drops inside a word: "website" for "web site",
   "off-side" for "offside", "player safety" for "player-safety". Shapes 1-4
   cannot see it by construction, because the match below is on alphanumerics
   only and all of those normalise to the same string. It is reported in its
   OWN section, "WORD-BOUNDARY DRIFT", with its own count line, and is NOT
   included in clean/flagged/notfound -- a fragment can be "clean" and listed
   there -- so every figure recorded before that date still means what it
   meant, and the summary is still the last line. Labels:
     JOINED       the doc runs together words the source separates
     SPLIT        the doc separates what the source prints as one word
     HYPHENATION  a hyphen in one, a space in the other
     JOINED?      the source's separator is a hyphen-then-whitespace (a print
                  line-wrap: "re-" at a line end then "cklessly",
                  or "atta- cking" mid-line) or a bare line
                  break -- almost always an EXTRACTION ARTEFACT, not drift.
                  On the first corpus run (23 October 2026) nearly every
                  hit was this, all in the IIHF extractions. Read the PDF
                  before touching the doc. Run the tool for the figure.
   Apostrophes, quote marks, `*`, soft hyphens and the brackets of a disclosed
   insertion are never boundaries; an en dash between letters counts as a
   hyphen (pwhl_rules.txt prints "face–off" with an en dash). A hit is reported only if NO
   exact-letter occurrence in ANY source segments the way the doc does, so a
   second printing of the phrase elsewhere suppresses it -- which is also how
   it can miss one (see below).

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
- ⚠️ **DECIDED 20 September 2026: silent capital-lowering (Shape 1) is ACCEPTED
  HOUSE STYLE, not a defect to sweep.** The question sat open for a session after
  a USA Hockey penalty-tier fragment ("[a] minor plus a misconduct or a major
  plus a game misconduct") turned up with its sentence-initial capital silently
  lowered at nine sites across nine documents, uniformly, with no `[a]` bracket
  -- "a lowering applied uniformly at nine sites is house practice, not drift,"
  not four independent oversights. The coordinator confirmed this generalises:
  the same source phrase recurs under multiple rule numbers in the primary text
  and across 17 corpus documents, too widespread to be anything but a deliberate
  style choice. **Do not flag a bare Shape-1 hit (no meaning change, no
  terminal-punctuation issue) as a fixable defect going forward** -- it is a
  worklist entry for awareness, not an open question. Shapes 2-4, and any Shape-1
  hit that DOES change meaning, are unaffected by this decision.
- ⚠️ **THE `[x]` EXEMPTION ONLY STRIPS A SINGLE LETTER.** `clean_quote()`'s bracket
  regex is ``\\[([a-zA-Z])\\]`` -- one character. A genuinely disclosed multi-letter
  insertion (`delay[ing]`, `kick[ing]`) still reports NOTFOUND, because the
  bracket survives into the normalised comparison. Confirmed twice in one
  triage, both correct content wrongly flagged: `faceoffs.md:218` ("delays" ->
  "delay[ing]") and `faceoffs.md:636` ("kicks" -> "kick[ing]"), both verified
  verbatim against `sources/hc.txt` once the bracket is read as intended. A
  NOTFOUND fact worth a second look: does the quoted fragment carry a bracket
  longer than one character before concluding it is missing from `sources/`.
- ⚠️ **A THIRD FALSE-POSITIVE CLASS: self-quoted coaching maxims, never claimed
  as citations.** `Key:`/`Never:`/`Convention:` facts routinely put a coined
  phrase or rhetorical question in quotation marks purely for emphasis --
  *"what is behind me, and who is it?"*, *"did I have more time than I
  thought?"*, *"two wide, middle to the backchecker"*. These correctly score
  NOTFOUND: they were never claimed to come from a rulebook or article, quoted
  for voice rather than for provenance. Confirmed a dozen-plus instances
  corpus-wide in one triage pass. Distinguish from a genuine missing citation
  by asking whether the surrounding fact reads as attributing the quotation to
  a source at all, or is simply using quotation marks as emphasis.

WHAT IT CANNOT SEE -- and this list is the honest half
------------------------------------------------------
- ⚠️ **FIXED 20 September 2026 (the short-quote-pair artefact below).** A line
  carrying two or more short quotes (``"pinch"``, ``"top"``, ``"no glass"``, a
  goalie-call term) used to manufacture a fabricated "quotation" spanning the
  ordinary prose between them, reported NOTFOUND. The regex now requires the
  opening mark be preceded by whitespace, punctuation or start-of-line
  (``(?<![A-Za-z0-9])``), not by the tail of a word -- which is exactly what a
  short quotation's own CLOSING mark looks like, and is what let it be
  misread as a fresh opener. Verified against a synthetic reproduction of the
  artefact and against the corpus: every file re-checked showed notfound drop
  or hold steady, with zero new flagged (drift) hits anywhere -- the fix only
  removes fabricated fragments, it does not touch anything that was ever a
  genuine quotation.
  ⚠️ **A NOTFOUND hit reading as ordinary connecting prose can still appear
  on some other line shape this fix doesn't cover** -- if one does, check
  first whether it's a new instance of a related pattern before assuming the
  regex has a second gap of the same kind.
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
- ⚠️ **A page header with LETTERS in it is NOT defeated by the alphanumeric
  match**, despite what "HOW IT WORKS" says about splices. `hc.txt` breaks Rule
  6.2(a) mid-sentence with "HOCKEYCANADA.CA ... HOCKEY CANADA PLAYING RULES
  2026-2028 67 SECTION 6 -- GAME FLOW", so a verbatim Hockey Canada quotation
  across that break cannot match hc.txt at all and falls through to the
  closest OTHER book. Found 23 October 2026 by the word-boundary pass: the
  quotation "moves off-side, makes physical contact with an opponent or
  encroaches on the face-off circle..." (winger.md, switching_positions.md) is
  Hockey Canada's wording exactly, matched only CARHA 57(a) (which prints
  "offside" and a comma), and scored a SPLIT that is not drift. The case pass
  scored it clean against the wrong book for the same reason. Before believing
  any hit, check whether the book the prose names has a page break there.
  ✅ **PARTLY FIXED 25 October 2026:** sources are now passed through
  `scrub_furniture()` first, which blanks recurring header/footer lines at
  page EDGES (form-feed boundaries) before matching -- see the comment above
  that function for exactly what it can and cannot reach. A splice that is not
  at a page edge, or in a file with no form feeds, is still this blind spot.
- ⚠️ **The word-boundary pass inherits that blind spot.** If any source prints
  the phrase the way the doc does -- another book, a table of contents -- the
  hit is suppressed, even where the book the prose names prints it differently.
  It also compares only fragments the alphanumeric match FOUND: a NOTFOUND
  fragment gets no boundary check, and interior punctuation other than a hyphen
  (a dropped comma, a swapped semicolon) is still invisible to every pass here.
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
        check_quote_drift.py --self-test
"""
import re, sys, glob, os, unicodedata

# An unrecognised option is an error, not something to ignore: a mistyped flag
# used to be opened as a file and crash with a traceback.
SELF_TEST = "--self-test" in sys.argv[1:]
if SELF_TEST:
    sys.argv = [sys.argv[0], "--self-test"]
_unknown = [a for i, a in enumerate(sys.argv[1:]) if a.startswith("-")
            and not (i == 0 and a in ("-h", "--help", "--self-test"))]
if _unknown:
    print(f"check_quote_drift.py: unrecognised option(s): {' '.join(_unknown)}\n"
          "usage: check_quote_drift.py <content/*.md> [min quote length] | --self-test", file=sys.stderr)
    sys.exit(2)
if len(sys.argv) < 2 or sys.argv[1] in ("-h", "--help"):
    sys.exit(__doc__.strip().split("Usage:")[-1].strip()
             if "Usage:" in __doc__ else
             "usage: check_quote_drift.py <content/*.md> [min quote length]")

DOC = sys.argv[1] if not SELF_TEST else __file__
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

# ---------------------------------------------------------------------------
# PAGE-FURNITURE SCRUB (added 25 October 2026, plan row "header splices").
# A running header or footer with LETTERS in it survives the alphanumeric match
# and splits the sentence it lands in: hc.txt breaks Rule 6.2(a) with
# "HOCKEYCANADA.CA / HOCKEY CANADA PLAYING RULES 2026-2028 67 / SECTION 6 --
# GAME FLOW", so a verbatim Hockey Canada quotation matched CARHA instead.
#
# The scrub is DATA-DRIVEN, per file, and touches PAGE EDGES ONLY. pdftotext
# ends every page with a form feed. For each page it looks at the first and
# last FURNITURE_EDGE non-blank lines; a line is furniture if its shape (digits
# folded to '#', whitespace collapsed) recurs at a page edge on at least
# FURNITURE_MIN_PAGES pages of that same file. Scanning inward from each edge,
# it blanks furniture lines and stops at the first line that is not. Blanking
# replaces every character except newlines with a space, so every offset into
# the raw text -- and so every reported source excerpt -- is unchanged.
#
# It needs no per-book header strings (sources/README.md: "each book needs its
# own header string"), because the recurrence finds them. ⚠️ What it cannot
# reach: furniture in a file with NO form feeds (a web capture), furniture that
# appears on fewer than FURNITURE_MIN_PAGES pages (a one-off stale header), and
# a splice that is not at a page edge. ⚠️ And it can blank a real line: a short
# line whose digit-folded shape is common at page edges (a bare number, a
# repeated heading like "ANSWER") is treated as furniture when it sits at an
# edge. No quotation is expected to span one, but that is an assumption.
# ---------------------------------------------------------------------------
FURNITURE_EDGE = 6
FURNITURE_MIN_PAGES = 5

def _furniture_key(line):
    return re.sub(r"\s+", " ", re.sub(r"\d+", "#", line)).strip()

def scrub_furniture(raw):
    if "\f" not in raw:
        return raw
    pages = raw.split("\f")
    paged = [p.split("\n") for p in pages]
    counts = {}
    for ls in paged:
        nb = [i for i, l in enumerate(ls) if l.strip()]
        edge = set(nb[:FURNITURE_EDGE]) | set(nb[-FURNITURE_EDGE:])
        for k in {_furniture_key(ls[i]) for i in edge}:
            counts[k] = counts.get(k, 0) + 1
    furn = {k for k, c in counts.items() if c >= FURNITURE_MIN_PAGES}
    out = []
    for ls in paged:
        ls = list(ls)
        nb = [i for i, l in enumerate(ls) if l.strip()]
        for order in (nb[:FURNITURE_EDGE], list(reversed(nb[-FURNITURE_EDGE:]))):
            for i in order:
                if _furniture_key(ls[i]) not in furn:
                    break
                ls[i] = " " * len(ls[i])
        out.append("\n".join(ls))
    res = "\f".join(out)
    assert len(res) == len(raw)
    return res

def _self_test():
    """Offline checks of the furniture scrub. Exit 0 on pass, 1 on fail."""
    ok = True
    def check(name, cond):
        nonlocal ok
        print(("PASS " if cond else "FAIL ") + name)
        ok = ok and cond
    head = "SECTION 6 \u2014 GAME FLOW"
    pages = []
    words = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf"]
    for n in range(1, 8):
        # Distinct WORDS per page: a line differing only in its digits folds to
        # one shape and would (correctly) be treated as furniture.
        body = f"filler sentence {words[n-1]} on this page.\nmore body text {words[n-1]}."
        pages.append(f"{head}\n\n{body}\nHOCKEYCANADA.CA\n\nHOCKEY CANADA PLAYING RULES 2026-2028 {n}\n")
    # Page 4 ends mid-sentence; page 5 resumes it after the furniture.
    pages[3] = pages[3].replace("more body text delta.", "If a player moves off-side, makes physical contact")
    pages[4] = pages[4].replace("filler sentence echo on this page.", "with an opponent or encroaches on the circle")
    raw = "\f".join(pages)
    sc = scrub_furniture(raw)
    check("length preserved", len(sc) == len(raw))
    target, _ = norm_map("makes physical contact with an opponent or encroaches")
    check("spliced sentence matches after scrub", target in norm_map(sc)[0])
    check("spliced sentence does NOT match before scrub", target not in norm_map(raw)[0])
    check("body text untouched", "filler sentence bravo on this page." in sc)
    check("running header removed", "HOCKEYCANADA.CA" not in sc)
    one_off = "\f".join(pages[:3]) + "\fONE-OFF HEADER\nreal text\n"
    check("a header on fewer than FURNITURE_MIN_PAGES pages is kept",
          "ONE-OFF HEADER" in scrub_furniture(one_off))
    pad = "\n".join(f"padding line {w}" for w in ("one", "two", "three", "four", "five", "six", "seven"))
    mid = "\f".join(pages) + "\f" + pad + "\nHOCKEYCANADA.CA\n" + pad.replace("line", "row") + "\n"
    sc_mid = scrub_furniture(mid)
    check("furniture shape mid-page (not within the edge window) is kept",
          sc_mid.rsplit("\f", 1)[1].count("HOCKEYCANADA.CA") == 1)
    check("file without form feeds is returned unchanged",
          scrub_furniture("HOCKEYCANADA.CA\ntext") == "HOCKEYCANADA.CA\ntext")
    print("self-test: " + ("ALL PASS" if ok else "FAILURES"))
    sys.exit(0 if ok else 1)

if SELF_TEST:
    _self_test()

sources = {}
for p in sorted(glob.glob(os.path.join(os.path.dirname(os.path.abspath(DOC)),
                                       "..", "..", "sources", "*.txt"))):
    raw = scrub_furniture(open(p, encoding="utf-8", errors="replace").read())
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
    # (?<![A-Za-z0-9]) before the opening mark, IN THE FACTS BRANCH: a genuine
    # opening quote is preceded by whitespace, punctuation or start-of-line,
    # never by the last letter of a word -- which is exactly what a SHORT
    # quote's own CLOSING mark looks like. Without this, a short quote below
    # MINLEN fails to match at its own marks, and finditer resumes from its
    # closing mark, treating that as a fresh opener and swallowing everything
    # up to the NEXT quote mark as fabricated "quoted" text (see the
    # docstring's short-quote-pair false-positive class, where this bug was
    # actually found). This lookbehind was the scoped-but-unimplemented fix;
    # verified against a synthetic reproduction of the artifact and
    # corpus-wide before landing here. It is carried into the body-prose
    # branch below for consistency, but is a no-op there: the `\*` that
    # branch requires immediately before the quote mark is never alphanumeric
    # itself, so the lookbehind always already held.
    pattern = (r'(?<![A-Za-z0-9])["\u201c]([^"\u201d]{%d,})["\u201d]' if in_facts else
               r'\*(?<![A-Za-z0-9])["\u201c]([^"\u201d]{%d,})["\u201d]\*') % MINLEN
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

# ---------------------------------------------------------------------------
# WORD-BOUNDARY PASS (added 23 October 2026, plan row "no pass that keeps
# whitespace"). The match above is on alphanumerics only, so "website" and
# "web site" normalise to the same string and the comparison above can never
# see the difference. This pass re-walks the SAME alnum-to-original mapping on
# both sides and classifies the gap before every alphanumeric character.
# ---------------------------------------------------------------------------
_HYPHENS = "-\u2010\u2011\u2013"    # hyphen-minus, hyphen, non-breaking hyphen,
                                     # and EN DASH: pwhl_rules.txt prints "face\u2013off"
                                     # with one, so without it every PWHL "face-off"
                                     # quotation scored a false HYPHENATION hit
_IGNORABLE = "'\"\u2018\u2019\u201c\u201d*\u00ad[]"  # apostrophes, quote marks,
                                     # markdown emphasis, soft hyphen, and the
                                     # brackets of a disclosed insertion
                                     # ("prevent[ed]"): none is a word boundary

def _gap_kind(gap):
    """NONE (no boundary), HYPHEN (hyphen, no whitespace), HYPHEN_EOL (a hyphen
    followed by a line break -- in an extracted PDF this is usually where the
    print broke the line, not a hyphen the book means), or BREAK (whitespace or
    any other separating punctuation)."""
    g = "".join(c for c in gap if c not in _IGNORABLE)
    if not g:
        return "NONE"
    has_hy = any(c in _HYPHENS for c in g)
    # A hyphen with whitespace AFTER it and none before it is the print's
    # line-wrap hyphen: iihf_rules.txt carries "re-\ncklessly" and also
    # "atta- cking" mid-line, where the extraction joined two lines with a space.
    if re.fullmatch("[%s]\\s+" % re.escape(_HYPHENS), g):
        return "HYPHEN_EOL"
    if has_hy and not any(c.isspace() for c in g):
        return "HYPHEN"
    return "BREAK"

def _gaps(raw, idx):
    """Gap kinds before each alnum position after the first, plus the raw gaps."""
    kinds, raws = [], []
    for a, b in zip(idx, idx[1:]):
        gap = raw[a + 1:b] if b > a else ""
        kinds.append(_gap_kind(gap)); raws.append(gap)
    return kinds, raws

def boundary_diffs(doc_frag, src_raw, src_idx, k, length):
    """Compare word segmentation of a matched quotation against its source span.

    Returns a list of (label, doc_context, src_context). Empty means the two
    segment identically (hyphen-versus-space counts as a difference)."""
    _, didx = norm_map(doc_frag)
    if len(didx) != length:
        return []
    dk, _ = _gaps(doc_frag, didx)
    sk, sraw = _gaps(src_raw, src_idx[k:k + length])
    out = []
    for i, (d, s) in enumerate(zip(dk, sk)):
        if d == s:
            continue
        if d == "HYPHEN" and s == "HYPHEN_EOL":
            continue                      # same hyphen; the source just wrapped there
        if d == "NONE" and s == "HYPHEN_EOL":
            label = "JOINED? (source hyphen then whitespace -- usually a print line-wrap, check the PDF)"
        elif d == "NONE" and s == "BREAK" and "\n" in sraw[i] and not sraw[i].strip(" \n"):
            label = "JOINED? (source gap is a line break -- may be an extraction split)"
        elif d == "NONE":
            label = "JOINED (doc runs together words the source separates)"
        elif s == "NONE":
            label = "SPLIT (doc separates what the source prints as one word)"
        else:
            label = "HYPHENATION (hyphen in one, space in the other)"
        lo, hi = max(0, i - 24), min(length - 1, i + 25)
        da, db = didx[lo], didx[hi]
        sa, sb = src_idx[k + lo], src_idx[k + hi]
        out.append((label, " ".join(doc_frag[da:db + 1].split()),
                    " ".join(src_raw[sa:sb + 1].split())))
    return out

def best_boundary(nf, f2):
    """Among EVERY exact-letter occurrence in every source, the one whose word
    segmentation differs least from the doc. A hit is reported only if no
    occurrence anywhere segments the way the doc does -- so a table-of-contents
    line or another book printing "web site" cannot manufacture a hit against a
    body that prints "website"."""
    best = None
    for name, (raw, n, ix) in sources.items():
        start = 0
        while True:
            k = n.find(nf, start)
            if k < 0: break
            start = k + 1
            s, e = ix[k], ix[k + len(nf) - 1]
            if letters(f2) != letters(raw[s:e+1]):
                continue                  # case drift belongs to the pass above
            diffs = boundary_diffs(f2, raw, ix, k, len(nf))
            if best is None or len(diffs) < len(best[1]):
                best = (name, diffs)
            if not diffs:
                return None
    return best

flagged, missing, clean = [], [], 0
boundary = []
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
        bb = best_boundary(nf, f2)
        if bb and bb[1]:
            boundary.append((ln, bb[0], bb[1]))

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
# ⚠️ Kept as a SEPARATE section with its own count, printed BEFORE the summary
# line, so the summary stays the last line in its old format: callers that
# `tail -1` this tool, and every figure recorded before 23 October 2026, still
# mean what they meant. A fragment can be both "clean" above and listed here.
print("#" * 20, "WORD-BOUNDARY DRIFT (worklist; not counted in clean/flagged)", "#" * 20)
for ln, name, diffs in boundary:
    print(f"line {ln} [{name}]")
    for label, dctx, sctx in diffs[:4]:
        print(f"   {label}")
        print(f"      doc: ...{dctx}...")
        print(f"      src: ...{sctx}...")
    if len(diffs) > 4:
        print(f"   (+{len(diffs) - 4} more in this fragment)")
nb = sum(len(d) for _, _, d in boundary)
print(f"word-boundary: fragments={len(boundary)} boundaries={nb} "
      f"(of which marked '?' as a likely extraction artefact={sum(1 for _, _, d in boundary for l, *_ in d if '?' in l)})")
print()
print(f"fragments: clean={clean} flagged={len(flagged)} notfound={len(missing)}")
