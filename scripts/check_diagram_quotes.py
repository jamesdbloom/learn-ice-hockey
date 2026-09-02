#!/usr/bin/env python3
"""Verify quoted spans inside diagram-module COMMENTS against their owner document.

⚠️  WHY THIS EXISTS. Two of round 59's diagram defects were STALE OR FALSE
QUOTATIONS SITTING IN COMMENTS, and both sat unactioned while the files around
them were edited -- which is exactly how the high-slot defect survived:

  * one quoted a section phrase the section no longer contained ("roughly 29 feet
    below the point", after `content/` moved to "below the blue line");
  * one quoted the glossary for a shape the glossary does not define -- "between
    the circles" is the glossary's wording for THE SLOT, about 7 ft of half-width,
    while the band it justified is on the DOTS at 22 ft.

⚠️  A stale quote wearing a correct note is worse than either alone, because the
next editor trusts it. One of these would have led an editor to narrow a polygon
by a factor of three.

⚠️  DO NOT READ THIS AS A FALSE-POSITIVE RATE. An earlier version of this line said
    "MEASURED FALSE-POSITIVE RATE: ~9%" over the same numbers, which inverts them: of 46
    isolated spans triaged, 4 were real defects. THAT IS A ~9% TRUE-POSITIVE RATE, so
    roughly NINE IN TEN of the MISS lines are NOT defects. Read every hit; this tool
    ranks nothing and proves nothing.
resolving against an owner, 46 isolated as altered or truncated by prefix triage,
**4 real**. The dominant false positive is a substituted terminal stop or an
elision. Two classes matter more than the rate:

  * ⚠️  `rules_primer.mjs` contains a DELIBERATELY PRESERVED stale quotation, in a
    block labelled "STALE QUOTATION, KEPT SO THE REASONING IS TRACEABLE", naming
    both corrections it records. **This tool cannot tell it from the bad case, and
    a sweep would destroy it.**
  * The corpus words its body and its ```facts block differently ON PURPOSE. A
    comment quoting the body verbatim is reported as a misquote of the block.
  * ⚠️  **ELISION MARKED WITH `...` — the class that would punish correct
    practice.** A slower full pass found **at least 8 of 43 near-matches** are
    comments that quote honestly and mark the omission:
    `a forechecking_systems.mjs caption (⚠️ LINE NUMBER DELIBERATELY OMITTED -- the one named here went stale within the round, because agents edit .mjs files while this docstring sits still)`, `neutral_zone_systems.mjs:600` and `:790`,
    `rules_primer.mjs:181` and `:258`, `special_teams.mjs:365`, `breakouts.mjs:48`
    and `:612`. **The tool cannot parse an ellipsis, so it reports every properly
    elided quotation as a miss.** Marking an elision is what the style guide asks
    for; a sweep here would remove the ellipses rather than fix anything.

⚠️  IT CANNOT ADJUDICATE A QUOTE OF A RULEBOOK, only of a `content/` document.
Two comments quote primary text and are out of its reach by construction:
`zone_entries.mjs:646` (USA Hockey 624(b)(1)'s shorthanded-icing scope) and
`forechecking_systems.mjs:505` (Hockey Canada 7.3's body-checking scope). **Both
are penalty-scope claims sitting in comments** -- the category worth a
`rules-verifier` check even when neither looks wrong.

⚠️  A LIMITATION THAT NEARLY HID ITS OWN FINDINGS. The first version scanned PER
LINE. Comments wrap at ~90 columns, so any quotation over ~70 chars is split, and
a per-line scanner sees an unterminated quote then an unopened one and reports
**neither** -- blind in proportion to how much a hit mattered. It was caught only
because repairing one hit rewrapped the quote and made the repair invisible to the
tool that had found it. Joining consecutive comment lines took coverage from 223
spans to 520. **Do not reintroduce a per-line scan.**


⚠️ A WORKLIST, NOT A GATE. It has no --strict and must never gain one. It cannot
tell a quote of the owning SECTION from a quote of the module's own caption, from a
quote of a rulebook, from a phrase in scare quotes that was never a quotation at
all. Every hit needs reading. A tool that ranked these and offered to fix them is
how round 44 manufactured a divergence that did not exist.

Why it exists: two diagram defects in one round were stale or false quotations
sitting in module comments — one quoting a section phrase the section no longer
contained, one quoting the glossary for a shape the glossary does not define. Both
sat unactioned while the files around them were edited. A stale quote wearing a
correct note is worse than either alone, because the next editor trusts it.

Known blind spots, stated so they are not rediscovered:
  - `defending_the_rush.mjs` has no literal `owner:` string; it uses a const. The
    owner set is therefore widened to every `content/**.md` path the file mentions.
  - A quotation broken across a source line ('...at its ' + 'edge') is invisible to
    a regex over the source. Comments are single-token, so this bites comments less
    than captions, but it is a real hole.
  - It only reads COMMENTS. Caption text is checked by nothing here.
"""
import json, re, sys, unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[0]
# Resolve the repo from the diagrams dir instead, so the script is location-independent.
# ⚠️  Derived, never hardcoded. This line previously held an absolute path under a developer's
# home directory -- immediately under a comment claiming the script was location-independent,
# and with a ROOT assigned from __file__ on the line above that was then never used.
# THIS REPOSITORY IS PUBLIC, and check_secrets.py does not flag a home-directory path.
REPO = Path(__file__).resolve().parent.parent
DIAG = REPO / 'site' / 'src' / 'diagrams'
MINLEN = 24          # below this, a quoted fragment is a word, not a quotation

def norm(s: str) -> str:
    s = unicodedata.normalize('NFC', s)
    for a, b in [('’', "'"), ('‘', "'"), ('“', '"'), ('”', '"'),
                 (' ', ' '), ('‑', '-')]:
        s = s.replace(a, b)
    s = re.sub(r'\*\*|__|(?<![\w*])\*(?!\*)|`', '', s)   # markdown emphasis / code ticks
    s = re.sub(r'\s+', ' ', s)
    return s.strip().lower()

def comments(src: str):
    """Yield (start_line, comment_block). CONSECUTIVE comment lines are JOINED.

    ⚠️ Joining is not cosmetic. Comments wrap at ~90 columns in these modules, so a
    quotation longer than about 70 characters is ALWAYS split across two lines --
    and a per-line scanner sees an unterminated quote on the first line and an
    unopened one on the second, so it reports NEITHER. The longest quotations are
    exactly the ones most worth checking, so the per-line version was blind in
    proportion to how much a hit mattered. It was caught when a repair to a hit
    this tool had found rewrapped the quote and made the repair invisible to it."""
    out, buf, start = [], [], None
    def flush():
        if buf:
            out.append((start, ' '.join(buf)))
    for i, line in enumerate(src.splitlines(), 1):
        st = line.strip()
        if st.startswith('*') or st.startswith('/*'):
            txt = st.lstrip('*/ ').rstrip()
        elif st.startswith('//'):
            txt = st[2:].strip()
        else:
            flush(); buf, start = [], None
            continue
        if start is None:
            start = i
        buf.append(txt)
    flush()
    return out

QUOTE_RE = re.compile(r'"([^"]{%d,})"|“([^”]{%d,})”' % (MINLEN, MINLEN))

content_cache = {}
def doc(p: Path) -> str:
    if p not in content_cache:
        content_cache[p] = norm(p.read_text(encoding='utf-8')) if p.is_file() else ''
    return content_cache[p]

ALL_MD = sorted((REPO / 'content').rglob('*.md'))

def main():
    # Own-caption text, so "quotes its own caption" can be separated from real drift.
    man = REPO / 'site' / 'src' / 'data' / 'diagrams.json'
    own_text = ''
    if man.is_file():
        d = json.loads(man.read_text(encoding='utf-8'))
        own_text = norm(' '.join(
            (e.get('caption') or '') + ' ' + (e.get('describe') or '')
            for e in d.values() if isinstance(e, dict)))

    hits = {'MISS': [], 'OTHER-DOC': [], 'OWN-CAPTION': []}
    checked = 0
    for f in sorted(DIAG.glob('*.mjs')):
        src = f.read_text(encoding='utf-8')
        owners = [REPO / m for m in re.findall(r"content/[\w/]+\.md", src)]
        owners = list(dict.fromkeys(owners)) or ALL_MD
        for lineno, c in comments(src):
            # Comment lines that are prose ABOUT a quote still get scanned; that is
            # the point. Skip URLs.
            for m in QUOTE_RE.finditer(c):
                q = norm(m.group(1) or m.group(2))
                if not q or q.startswith('http'):
                    continue
                checked += 1
                if any(q in doc(o) for o in owners):
                    continue
                where = [p for p in ALL_MD if q in doc(p)]
                rec = (f.name, lineno, q, [str(p.relative_to(REPO)) for p in where])
                if where:
                    hits['OTHER-DOC'].append(rec)
                elif own_text and q in own_text:
                    hits['OWN-CAPTION'].append(rec)
                else:
                    hits['MISS'].append(rec)

    for k in ('MISS', 'OTHER-DOC', 'OWN-CAPTION'):
        print(f'\n===== {k} ({len(hits[k])}) =====')
        for fn, ln, q, where in hits[k]:
            print(f'{fn}:{ln}  {q[:140]}')
            if where:
                print(f'      found instead in: {", ".join(where)}')
    print(f'\nchecked {checked} quoted spans >= {MINLEN} chars in comments; '
          f'{len(hits["MISS"])} not found in any content document.')

main()
