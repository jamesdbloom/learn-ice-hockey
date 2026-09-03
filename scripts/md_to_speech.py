#!/usr/bin/env python3
"""Markdown -> SSML transform for the ice hockey learning corpus.

Turns the markdown documents in ``content/`` into SSML suitable for Amazon
Polly (en-GB, long-form), chunked to fit Polly's per-request limits, with a
manifest per document so the audio pipeline can synthesise and concatenate.

Design rules (these are requirements, not preferences):

* **Deterministic.** Same input bytes -> same output bytes. Every table in
  this file is an ordered tuple, file lists are sorted, JSON is written with
  sorted keys and a fixed separator.
* **Table-driven.** Notation expansion lives in ``NOTATION_RULES``, an ordered
  list of named ``Rule`` objects. Adding a construct means adding a row, not
  threading another regex through a function.
* **Nothing passes through silently.** Text is carried as tokens; a rule may
  only consume ``RAW`` tokens and what it emits is frozen. Whatever is still
  ``RAW`` at the end is swept by ``find_residue`` and reported.

Usage::

    python3 scripts/md_to_speech.py                    # write SSML + manifests
    python3 scripts/md_to_speech.py --report           # ... and print the report
    python3 scripts/md_to_speech.py --report --dry-run # report only, write nothing
    python3 scripts/md_to_speech.py --self-test        # unit tests for the tables

Standard library only.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import unicodedata
import xml.etree.ElementTree as ElementTree
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Iterable, Sequence
from xml.sax.saxutils import escape as xml_escape

VERSION = "1.0.0"

# --------------------------------------------------------------------------
# Polly limits.
#
# SynthesizeSpeech accepts 6000 total characters per request, of which at most
# 3000 are billed (i.e. text, not SSML markup). We chunk well inside both.
# --------------------------------------------------------------------------

#: The service's hard limits. Exceeding either is a refused request, not a
#: degraded one. MAX_* below are our own budget and sit deliberately inside.
POLLY_BILLED_LIMIT = 3000
POLLY_TOTAL_LIMIT = 6000
MAX_BILLED_CHARS = 2800
MAX_TOTAL_CHARS = 5600

# Pause lengths, in one place so the whole corpus sounds the same.
BREAK_DOC_TITLE = "900ms"
BREAK_SECTION = "1000ms"
BREAK_AFTER_HEADING = "450ms"
BREAK_SUBSECTION = "700ms"
BREAK_PARAGRAPH = "500ms"
BREAK_LIST_ITEM = "300ms"

DOC_INTRO = (
    "From the ice hockey learning resource. Written to NHL rules, with "
    "differences under other rule sets flagged where they matter."
)


# ==========================================================================
# 1. Number words
# ==========================================================================

_ONES = (
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen",
)
_TENS = (
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy",
    "eighty", "ninety",
)
_ORDINALS = (
    "", "first", "second", "third", "fourth", "fifth", "sixth", "seventh",
    "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth",
    "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth",
    "nineteenth", "twentieth",
)

# Roman numerals as they appear in rulebook clause citations: 63.2(viii).
_ROMAN = (
    ("i", 1), ("ii", 2), ("iii", 3), ("iv", 4), ("v", 5), ("vi", 6),
    ("vii", 7), ("viii", 8), ("ix", 9), ("x", 10), ("xi", 11), ("xii", 12),
    ("xiii", 13), ("xiv", 14), ("xv", 15), ("xvi", 16), ("xvii", 17),
    ("xviii", 18), ("xix", 19), ("xx", 20),
)
ROMAN_TO_INT = {roman: value for roman, value in _ROMAN}


def int_to_words(value: int) -> str:
    """British English cardinal: 624 -> 'six hundred and twenty-four'."""
    if value < 0:
        return "minus " + int_to_words(-value)
    if value < 20:
        return _ONES[value]
    if value < 100:
        tens, ones = divmod(value, 10)
        return _TENS[tens] + ("-" + _ONES[ones] if ones else "")
    if value < 1000:
        hundreds, rest = divmod(value, 100)
        out = _ONES[hundreds] + " hundred"
        return out + (" and " + int_to_words(rest) if rest else "")
    if value < 1_000_000:
        thousands, rest = divmod(value, 1000)
        out = int_to_words(thousands) + " thousand"
        if not rest:
            return out
        joiner = " and " if rest < 100 else " "
        return out + joiner + int_to_words(rest)
    millions, rest = divmod(value, 1_000_000)
    out = int_to_words(millions) + " million"
    return out + (" " + int_to_words(rest) if rest else "")


def ordinal_to_words(value: int) -> str:
    """1 -> 'first', 31 -> 'thirty-first'. Past ninety-nine: 'number N'."""
    if 1 <= value <= 20:
        return _ORDINALS[value]
    if 21 <= value <= 99:
        tens, ones = divmod(value, 10)
        if ones:
            return f"{_TENS[tens]}-{_ORDINALS[ones]}"
        return _TENS[tens][:-1] + "ieth"
    return "number " + int_to_words(value)


def decimal_to_words(text: str) -> str:
    """'78.8' -> 'seventy-eight point eight'; '0.25' -> 'nought point two five'.

    Digits after the point are read individually, which is how they are said
    aloud. A leading zero is 'nought', British-style.
    """
    text = text.replace(",", "")
    if "." not in text:
        return int_to_words(int(text))
    whole, _, frac = text.partition(".")
    if whole in ("", "0"):
        head = "nought"
    else:
        head = int_to_words(int(whole))
    tail = " ".join(_ONES[int(d)] for d in frac)
    return f"{head} point {tail}"


def year_to_words(value: int) -> str:
    """1995 -> 'nineteen ninety-five'; 2025 -> 'twenty twenty-five'."""
    if 1000 <= value <= 1999:
        high, low = divmod(value, 100)
        if low == 0:
            return int_to_words(high) + " hundred"
        if low < 10:
            return f"{int_to_words(high)} oh {_ONES[low]}"
        return f"{int_to_words(high)} {int_to_words(low)}"
    if 2000 <= value <= 2009:
        return "two thousand" + (
            " and " + int_to_words(value - 2000) if value > 2000 else ""
        )
    if 2010 <= value <= 2099:
        return f"twenty {int_to_words(value - 2000)}"
    return int_to_words(value)


def signed_number_to_words(text: str) -> str:
    """'+0.25' -> 'plus nought point two five'. Handles ASCII and U+2212."""
    text = text.strip()
    sign = ""
    if text[:1] in ("+",):
        sign, text = "plus ", text[1:]
    elif text[:1] in ("-", "−"):
        sign, text = "minus ", text[1:]
    return sign + decimal_to_words(text)


# ==========================================================================
# 2. Lookup tables
# ==========================================================================

#: Units, longest-token-first. ``(token, singular, plural)``.
UNITS: tuple[tuple[str, str, str], ...] = (
    ("km/h", "kilometre per hour", "kilometres per hour"),
    ("mph", "mile per hour", "miles per hour"),
    ("°F", "degree Fahrenheit", "degrees Fahrenheit"),
    ("°C", "degree Celsius", "degrees Celsius"),
    ("°", "degree", "degrees"),
    ("ms", "millisecond", "milliseconds"),
    ("cm", "centimetre", "centimetres"),
    ("mm", "millimetre", "millimetres"),
    ("km", "kilometre", "kilometres"),
    ("kg", "kilogram", "kilograms"),
    ("lbs", "pound", "pounds"),
    ("lb", "pound", "pounds"),
    ("oz", "ounce", "ounces"),
    ("ft", "foot", "feet"),
    ("min", "minute", "minutes"),
    ("hr", "hour", "hours"),
    ("m", "metre", "metres"),
    ("s", "second", "seconds"),
    ("%", "percent", "percent"),
)

#: Units that may follow a number with no space. The rest need whitespace,
#: because 's' and 'm' would otherwise swallow '1970s' and '30s'.
#: ⚠️ "m" sits LAST deliberately. `_unit_alternation` preserves this order, so
#: cm/mm/km must precede it or "10mm" would match on the bare "m".
#: It is here because the corpus quotes IIHF rule text verbatim, and the book
#: writes both "1.8 m" and "2.4m". The spaced rule caught the first; the second
#: voiced as "two point four m" -- a letter read out inside a rink dimension.
#: Unfixable in content/, because the strings are verbatim quotations.
TIGHT_UNITS = ("km/h", "mph", "°F", "°C", "°", "cm", "mm", "km", "kg", "%", "m")

#: Units that make ``N x M`` a dimension ("eight by fifteen inches") rather
#: than a multiplication ("eight times fifteen seconds"). A unit here may sit
#: on either side of the sign: '56 m × 26 m' is a rink, not a product.
DIMENSION_UNITS = (
    "inches", "inch", "feet", "foot", "ft", "cm", "mm", "m", "metres", "yards",
)

#: Vulgar fractions, read as words.
FRACTIONS: tuple[tuple[str, str], ...] = (
    ("½", "a half"),
    ("¼", "a quarter"),
    ("¾", "three quarters"),
    ("⅜", "three eighths"),
    ("⅝", "five eighths"),
)
FRACTION_AFTER_NUMBER: tuple[tuple[str, str], ...] = (
    ("½", "and a half"),
    ("¼", "and a quarter"),
    ("¾", "and three quarters"),
    ("⅜", "and three eighths"),
    ("⅝", "and five eighths"),
)

#: Greek letters used in the research sections.
GREEK: tuple[tuple[str, str], ...] = (
    ("α", "alpha"),
    ("β", "beta"),
    ("γ", "gamma"),
    ("η", "eta"),
    ("μ", "mu"),
    ("σ", "sigma"),
    ("χ", "chi"),
)

#: Bare symbols -> spoken words. Applied late, after the structural rules.
SYMBOLS: tuple[tuple[str, str], ...] = (
    ("≤", " less than or equal to "),
    ("≥", " greater than or equal to "),
    ("<", " less than "),      # 'p < .05' in the research citations
    (">", " greater than "),   # the pair, so the table is not half-present
    ("÷", " divided by "),
    ("±", " plus or minus "),
    ("≈", " about "),
    ("∼", " about "),
    ("×", " times "),
    ("§", "section "),
    # ⚠️ WHY THIS ROW EXISTS, AND WHY IT TOOK SO LONG TO FIND. The corpus contains
    # exactly one email address, in getting_started.md's routing table -- and that
    # table was being DROPPED from the audio for cell length, so the renderer had
    # never once been asked to say an "@". Repairing the table (round 61) put the
    # address in front of the renderer for the first time; it reached the SSML raw
    # and find_residue reported COMMERCIAL AT. A listener would have heard
    # "info-englandicehockey.com", or whatever the engine guessed.
    #
    # ⚠️ The general lesson is worth more than the row: a defect in the SPEECH layer
    # was invisible because a DIFFERENT defect was keeping the text out of the speech
    # layer. Eleven dropped tables remain, and each is a region of the corpus this
    # renderer has never been asked to read.
    ("@", " at "),
    ("→", ","),
    ("·", ","),
    ("†", ""),          # dagger footnote marker
    # The drill-symbol glyphs carry MEANING in this corpus, not decoration. The
    # reading-diagrams document teaches that shape is the position and fill is the
    # team, and it does so by quoting the International Drill Symbols key's own two
    # lines — "● ○ Forward / Player" and "▲ △ Defender / Player". Unhandled, a
    # listener heard "Forward or Player" and "Defender or Player": the two words the
    # passage is contrasting, with the contrast itself silent, in the one paragraph
    # whose whole job is to explain what the shapes mean.
    #
    # Naming the shape is transliteration, not paraphrase — the same move as reading
    # "27.8" aloud as "twenty-seven point eight". The glyph has no spoken form of its
    # own, so the alternative is not a different rendering, it is nothing at all.
    #
    # ⚠️ Fill first, then shape, because that is the order the sentence needs: the
    # key prints solid before open, and the document's next paragraph turns on which
    # is which.
    ("●", " filled circle "),
    ("○", " open circle "),
    ("▲", " filled triangle "),
    ("△", " open triangle "),
    ("•", ""),          # stray bullet glyph
    ("…", "…"),    # ellipsis: Polly handles it, keep the pause
    ("−", " minus "),
    ("²", " squared"),
    ("₂", " two"),
    ("️", ""),          # variation selector (emoji presentation)
    ("⚠", ""),          # warning sign
    # The IIHF's typographic cross-reference marker, which the corpus keeps
    # inside verbatim quotations: "in violation of ➔ Rule 63.8 - Delaying the
    # Game or ➔ Rule 81 - Icing". It is punctuation, not a word, and the
    # quotation reads correctly without it. Dropped rather than voiced because
    # there is no honest way to say it: "arrow" is noise, and "see" would be
    # putting a word into a quotation the book does not contain.
    ("➔", ""),
    # 🇬🇧 is a semantic marker in this corpus, not decoration: it flags the
    # British position — the IIHF book plus the In-House Rules issued jointly
    # by England Ice Hockey, the SIHA and the BUIHA. Dropping it silently, which
    # is what happened before this row existed, costs a UK listener the signal
    # that the sentence is about their rule book. At least one occurrence
    # introduces the mandatory neck-laceration protector, so this is a safety
    # marker and not a flourish. (No count is given: it moves with the corpus,
    # and `--report` prints the live one.)
    ("🇬🇧", " For British readers, "),
    ("=", " equals "),  # glossary definitions: 'Rim = a hard puck ...'
    ("+", " plus "),    # 'Wedge+', '11+'
    ("$", " dollars "),  # any currency a named rule missed
    ("£", " pounds "),   # ditto — note this reads after the number, so it is a
                         # fallback only; currency-sterling is what gets it right
    ("–", "—"),         # en dash left over: read as a comma-length pause
    ("|", ", "),        # a stray table pipe outside a table block
    ("~", " about "),
    ("#", ""),
    ("/", " or "),      # 'NHL/IIHF', 'and/or': Polly's own reading varies
    ("[", ""),          # editorial insertion inside a quotation: "[your] body"
    ("]", ""),
    ("{", ""),
    ("}", ""),
    ("\\", ""),
)

#: Whole-token replacements, applied first. For things no general rule can
#: get right. Ordered longest-first at build time.
#:
#: The solidus entries are here rather than in the content because the strings
#: they fix sit inside verbatim quotations from the rulebooks, and the general
#: ``/`` -> " or " row in SYMBOLS is right for 'NHL/IIHF' and wrong for every
#: one of these:
#:
#: * ``and/or`` became "and or or". In the IIHF Rule 42.1 charging definition
#:   and the USA Hockey spinal-impact symptom list, a listener could not tell
#:   whether the limbs were conjunctive or disjunctive. "and or" is how the
#:   construction is read aloud, and it keeps both readings open, which is
#:   what the source means.
#: * ``plus/minus`` became "plus or minus" — the same spoken string as ``±``,
#:   which SYMBOLS renders " plus or minus ". how_to_watch_hockey.md defines
#:   the statistic and uses the tolerance sense in the same paragraph.
#: * ``NHL/NHLPA`` became "NHL or NHLPA". Learn to Play is one programme run
#:   jointly by the two bodies, not a choice between them.
#: * ``IHUK/EIH/SIH`` became "IHUK or EIH or SIH" -- not WRONG, but it is a
#:   three-item list and English reads those "A, B or C". It is quoted from
#:   IHUK In-House Rule 9.12 at 11 sites in four documents, one of them the
#:   neck-laceration mandate, and the same book writes "References to EIH or
#:   SIH" in its own prose, so the comma-then-or form is the book's own
#:   register. ⚠️ Unlike the three rows above, nothing here was broken: this
#:   is a fluency fix inside a verbatim quotation, and it is listed so that
#:   the distinction between the two kinds of row stays visible.
LEXICON: tuple[tuple[str, str], ...] = (
    ("IHUK/EIH/SIH", "IHUK, EIH or SIH"),
    ("NHL/NHLPA", "NHL and NHLPA"),
    ("plus/minus", "plus minus"),
    ("Plus/minus", "Plus minus"),
    # Both spacings occur, and the spaced one is the IIHF Rule 42.1 charging
    # definition — the most safety-critical instance of the six. The IIHF
    # rulebook prints it with the spaces, so it is quoted that way.
    ("and / or", "and or"),
    ("And / or", "And or"),
    ("and/or", "and or"),
    ("And/or", "And or"),
    # The same collision from the other side, and not one of the six: IIHF
    # Rule 55.1 is quoted as "against the opponent's hands / or near the
    # opponent's hands", where the solidus is already followed by the word.
    # It was reaching the audio as "hands or or near". Must stay below the
    # and/or rows, which claim their solidus first.
    (" / or ", " or "),
    # The editorial [sic]. SYMBOLS drops '[' and ']' — correctly, because the
    # usual bracket in this corpus is an insertion whose *words* are meant to be
    # spoken ("[your] body"). That left the bare token 'sic', which the voice
    # says as "sick" in the middle of a verbatim rulebook quotation.
    #
    # It is spoken rather than dropped. Dropping is what this file does to
    # apparatus that carries no meaning for the listener — footnote references,
    # daggers, bare URLs — and [sic] is the opposite of that: it is the whole
    # signal that the oddity the listener just heard belongs to the source and
    # not to the narrator. Deleting it would leave a rulebook quoted as saying
    # something ungrammatical with nothing to say the fault was the rulebook's,
    # which is the same silent-gap failure the diagram handling above exists to
    # prevent. The corpus's only instance is NHL Rule 76.7, where the published
    # PDF omits the word "at"; the sentence that follows it in the document
    # explains the omission, so the marker only has to hold the listener for one
    # clause. Commas, not brackets: brackets are silent, and the marker has to be
    # audible as an aside or it reads as part of the quotation.
    ("[sic]", ", as printed in the original,"),
    ("VO₂max", "V O two max"),
    ("VO₂", "V O two"),
    ("R²", "R squared"),
    ("CF%", "C F percent"),
    ("FF%", "F F percent"),
    ("xGF%", "expected goals for percentage"),
    # ⚠️  xGoals MUST sit here, ABOVE the bare "xG". Substitution is an unbounded replace, so
    # "xG" rewrites the "xG" inside "xGoals" and leaves "expected goalsoals" -- a NON-WORD.
    # It was live twice in how_to_watch_hockey.md, ONE OF THEM INSIDE A DIRECT QUOTATION of
    # MoneyPuck's glossary, and the self-test's 258 assertions did not reach it. Same defect
    # class as "ten minutes forty-five secondspm". Ordering is exactly how xGF% above already
    # survives -- this is that trick applied one token earlier.
    ("xGoals", "expected goals"),
    ("xG", "expected goals"),
    # ⚠️ D-to-D is NOT here. LEXICON is plain str.replace with no word
    # boundaries, and "forward-to-defence" contains "d-to-d" -- it was voicing
    # as "forwarD to Defence". It lives in NOTATION_RULES, which can anchor.
    ("e.g.", "for example"),
    ("i.e.", "that is"),
    ("etc.", "and so on"),
    ("vs.", "versus"),
    (" vs ", " versus "),
    ("&", " and "),
)

#: Bodies whose standards designations are read as a code and not as prose.
#:
#: 'CAN/BNQ 9415-370' was narrating as "CAN or BNQ nine thousand four hundred
#: and fifteen-three hundred and seventy": the solidus took the SYMBOLS " or "
#: and the number took the bare-number rule. The passage exists so a buyer can
#: match the string printed on a neck protector's label, so the letters are
#: spelled, the solidus is spoken, and the digits are read one at a time —
#: which is what a code is for. SPELL_OUT alone cannot do this: it claims
#: acronyms, and the damage here is to the solidus and the digits.
STANDARDS_BODIES: tuple[str, ...] = (
    "CAN/BNQ", "ISO/DIS", "ISO/IEC", "ISO", "BNQ", "CSA", "ASTM", "NOCSAE",
)

#: Acronyms Polly is likely to try to pronounce as a word. Emitted as
#: ``<say-as interpret-as="characters">``.
SPELL_OUT: tuple[str, ...] = (
    "SDHL", "SHL", "CARHA", "ASHL", "IIHF", "CDPA", "ADM", "PDO", "CI", "SD",
    "RR", "OZ", "DZ", "NZ",
)

#: Paragraph openings that mark a verification note. Matched case-insensitively
#: against the *stripped* text of a paragraph, so the markdown emphasis form
#: (``*``, ``**``, blockquote) does not matter.
#: ⚠️ THIS LIST AND ``NOTE_START_RE`` IN ``site/src/plugins/remark-corpus.mjs``
#: SHARE VOCABULARY AND DO OPPOSITE THINGS. **Do not unify them.**
#:
#: * A lead matched HERE means the paragraph is **DROPPED from the audio**.
#: * A lead matched THERE means the paragraph is **PROMOTED out of the collapsed
#:   ``<details class="sources">`` into a visible ``<aside>`` on the page.**
#:
#: So the same opening string makes a disclosure MORE visible to a reader and
#: LESS audible to a listener. They are not two copies of one list that have
#: drifted; they are two lists with opposite effects. Making one derive from the
#: other would be a bug, not a tidy-up. As of 2026-09-01 this list holds 8 leads
#: and that one holds 24; the difference is deliberate on both sides.
#:
#: ⚠️ THE LIVE CONSEQUENCE, and the reason this comment exists: ``skating.md``
#: says in VOICED body prose, twice, *"See the verification note at the foot of
#: this document."* A site fix made that note visible on the page. It is still a
#: pointer to nothing **for a listener**, because this list deletes the paragraph
#: it points at. ``scripts/check_pointers.py`` is the instrument for that shape,
#: and it reports the hit today.
#:
#: Before adding a lead here, ask whether the paragraph should be INAUDIBLE.
#: "It looks like a verification note" is not the test.
VERIFICATION_MARKERS: tuple[tuple[str, str], ...] = (
    ("verification note", "verification-note"),
    ("a note on verification", "verification-note"),
    ("notes on verification", "verification-note"),
    ("unverified", "unverified"),
    ("could not be verified", "could-not-be-verified"),
    ("flagged as unverified", "flagged-unverified"),
    ("flagged as unsettled or unverified", "flagged-unverified"),
    ("flagged as unsettled", "flagged-unverified"),
)

#: Paragraph opening that starts the sources run at the foot of a document.
#: Compared after ``strip_for_classification``, which removes the em dash.
SOURCES_MARKER = "sources retrieved"

#: Headings whose whole section is dropped from narration.
DROP_SECTION_HEADINGS = ("notes on verification",)

#: A table is read as prose only if it is small and regular.
TABLE_MAX_COLUMNS = 3
TABLE_MAX_ROWS = 14
TABLE_MAX_CELL_CHARS = 200

#: Characters allowed to survive into the spoken text without being flagged.
#: Accented Latin letters are fine - they occur in researcher names and the
#: voice pronounces them; anything else unclaimed is a finding.
ALLOWED_RESIDUE = set(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    " .,;:!?'\"()-—’‘“”…\n"
) | {
    chr(code) for code in range(0xC0, 0x180)
    if unicodedata.category(chr(code)).startswith("L")
}


# ==========================================================================
# 3. Token pipeline
# ==========================================================================

RAW = "raw"      # not yet claimed by a rule; still eligible for rewriting
TEXT = "text"    # final spoken text; escaped on output, never rewritten again
SSML = "ssml"    # raw markup; passed through unescaped


@dataclass(frozen=True)
class Token:
    kind: str
    text: str


def raw(text: str) -> list[Token]:
    return [Token(RAW, text)] if text else []


def done(text: str) -> list[Token]:
    return [Token(TEXT, text)] if text else []


Replacer = Callable[[re.Match], "str | list[Token]"]


@dataclass(frozen=True)
class Rule:
    """One named notation rule. ``pattern`` only ever sees RAW token text."""

    name: str
    pattern: re.Pattern
    replace: Replacer
    note: str = ""


def apply_rule(tokens: Sequence[Token], rule: Rule, counter: Counter) -> list[Token]:
    """Rewrite RAW tokens through one rule. Output of a rule is frozen."""
    out: list[Token] = []
    for token in tokens:
        if token.kind != RAW:
            out.append(token)
            continue
        pos = 0
        for match in rule.pattern.finditer(token.text):
            out.extend(raw(token.text[pos:match.start()]))
            produced = rule.replace(match)
            if isinstance(produced, str):
                out.extend(done(produced))
            else:
                out.extend(produced)
            counter[rule.name] += 1
            pos = match.end()
        out.extend(raw(token.text[pos:]))
    return out


def render(tokens: Iterable[Token]) -> str:
    """Serialise tokens to an SSML fragment.

    Only ``&``, ``<`` and ``>`` are escaped. Apostrophes and quotation marks
    are left alone: they are legal in XML character data and escaping them
    would make the SSML unreadable for no benefit.
    """
    parts: list[str] = []
    for token in tokens:
        parts.append(token.text if token.kind == SSML else xml_escape(token.text))
    return "".join(parts)


def plain(tokens: Iterable[Token]) -> str:
    """Spoken text with markup removed - used for billing and residue checks."""
    return "".join(t.text for t in tokens if t.kind != SSML)


# ==========================================================================
# 4. Markdown inline stripping (phase A)
# ==========================================================================

RE_IMAGE = re.compile(r"!\[([^\]]*)\]\(([^)]*)\)")
RE_LINK = re.compile(r"\[([^\]]+)\]\(([^)]*)\)")
RE_AUTOLINK = re.compile(r"<(https?://[^>\s]+)>")
RE_BARE_URL = re.compile(r"https?://\S+")
RE_CODE = re.compile(r"`([^`]+)`")
RE_STRIKE = re.compile(r"~~(.+?)~~")
RE_BOLD_ITALIC = re.compile(r"\*\*\*(.+?)\*\*\*", re.S)
RE_BOLD = re.compile(r"\*\*(.+?)\*\*", re.S)
RE_BOLD_UNDER = re.compile(r"__(.+?)__", re.S)
# Italic: a single * that is not part of ** and does not sit mid-word.
RE_ITALIC = re.compile(r"(?<!\*)\*(?!\*)([^*\n]+?)\*(?!\*)")
RE_ITALIC_UNDER = re.compile(r"(?<![\w_])_([^_\n]+?)_(?![\w_])")
RE_FOOTNOTE_REF = re.compile(r"\[\^[^\]]+\]")


_DIAGRAMS: dict | None = None


# The document currently being transformed, as a doc_id ("systems__defending_the_rush").
# A diagram caption is written for the document that OWNS the diagram and says things like
# "the section" meaning that one, so a caption quoted elsewhere needs its source announced.
# The site does this (remark-corpus.mjs) and the reason recorded there is a defect found in
# the LISTENER experience — yet the fix went to the site only, and this pipeline is the
# listener. Threading the identity through to_speech would touch eleven call sites for one
# consumer, so it is module-scoped and set by transform_document.
_CURRENT_DOC: str | None = None


def _diagram_is_away(entry: dict) -> bool:
    """True when this diagram is quoted outside the document that owns it."""
    owner = entry.get("owner")
    if not owner or not _CURRENT_DOC:
        return False
    here = owner[len("content/"):] if owner.startswith("content/") else owner
    if here.endswith(".md"):
        here = here[:-3]
    return here.replace("/", "__") != _CURRENT_DOC


def _diagram_owner_phrase(entry: dict) -> str:
    """The owning document's title as it is spoken: "defending the rush"."""
    owner = entry.get("owner", "")
    leaf = owner.rsplit("/", 1)[-1]
    if leaf.endswith(".md"):
        leaf = leaf[:-3]
    return leaf.replace("_", " ")


def _diagram_manifest() -> dict:
    """Captions for `diagram:<id>` references, written by build-diagrams.mjs."""
    global _DIAGRAMS
    if _DIAGRAMS is None:
        path = Path(__file__).resolve().parent.parent / "site" / "src" / "data" / "diagrams.json"
        try:
            _DIAGRAMS = json.loads(path.read_text(encoding="utf-8"))
        except FileNotFoundError:
            _DIAGRAMS = {}
    return _DIAGRAMS


def strip_inline_markdown(text: str, counter: Counter) -> str:
    """Markdown -> plain prose. Emphasis markers go, the words stay."""
    text = RE_FOOTNOTE_REF.sub("", text)

    def _image(match: re.Match) -> str:
        """An image becomes the words that describe it, spoken inline.

        A diagram reference carries no alt text on purpose — the caption lives in
        the diagram's spec so there is only ever one copy of it — so resolve the
        id against the manifest the site build writes. Failing to resolve is
        fatal rather than silent: a listener would otherwise get a gap exactly
        where the sighted reader gets the whole picture, and nothing in the audio
        would show that anything had been lost.
        """
        counter["md.image"] += 1
        alt, url = match.group(1), match.group(2)
        if url.startswith("diagram:"):
            entry = _diagram_manifest().get(url[len("diagram:"):])
            if entry is None:
                raise SystemExit(
                    f"md_to_speech: unknown diagram id {url[len('diagram:'):]!r}. "
                    "Run: node site/scripts/build-diagrams.mjs"
                )
            counter["md.diagram"] += 1
            if _diagram_is_away(entry):
                # Before the caption, not after it as on the page: a listener cannot
                # glance back, so the warning has to arrive before the claim it qualifies.
                counter["md.diagram_away"] += 1
                return (f"Diagram, from {_diagram_owner_phrase(entry)}. "
                        + entry["caption"])
            return "Diagram. " + entry["caption"]
        return alt

    def _link(match: re.Match) -> str:
        counter["md.link"] += 1
        return match.group(1)

    def _autolink(match: re.Match) -> str:
        counter["md.autolink-dropped"] += 1
        return ""

    text = RE_IMAGE.sub(_image, text)
    text = RE_LINK.sub(_link, text)
    text = RE_AUTOLINK.sub(_autolink, text)
    text = RE_BARE_URL.sub(lambda m: (counter.__setitem__(
        "md.bare-url-dropped", counter["md.bare-url-dropped"] + 1) or ""), text)

    for pattern, key in (
        (RE_CODE, "md.code-span"),
        (RE_STRIKE, "md.strikethrough"),
        (RE_BOLD_ITALIC, "md.bold-italic"),
        (RE_BOLD, "md.bold"),
        (RE_BOLD_UNDER, "md.bold"),
        (RE_ITALIC, "md.italic"),
        (RE_ITALIC_UNDER, "md.italic"),
    ):
        def _keep(match: re.Match, key: str = key) -> str:
            counter[key] += 1
            return match.group(1)

        text = pattern.sub(_keep, text)

    # Unmatched emphasis runs (they occur where bold spans a list boundary).
    if "**" in text:
        counter["md.unmatched-emphasis"] += text.count("**")
        text = text.replace("**", "")
    return text


def strip_for_classification(text: str) -> str:
    """Cheap plain-text view of a line, for marker matching only."""
    text = RE_LINK.sub(r"\1", text)
    text = re.sub(r"[*_`>#—–(\[]", " ", text)
    return re.sub(r"\s+", " ", text).strip()


# ==========================================================================
# 5. Notation rules (phase B)
# ==========================================================================

def _unit_alternation(subset: Sequence[str] | None = None) -> str:
    tokens = [t for t, _, _ in UNITS] if subset is None else list(subset)
    return "|".join(re.escape(token) for token in tokens)


UNIT_LOOKUP = {token: (singular, plural) for token, singular, plural in UNITS}


def _spoken_unit(token: str, value_text: str) -> str:
    singular, plural = UNIT_LOOKUP[token]
    try:
        is_one = float(value_text.replace(",", "")) == 1.0
    except ValueError:
        is_one = False
    return " " + (singular if is_one else plural)


def _approx_prefix(match_text: str) -> str:
    return "about " if match_text else ""


# -- individual replacers ---------------------------------------------------

def _plural_rule_number(match: re.Match) -> str:
    """`81.4s` -> 'eighty-one point fours'.

    ⚠️ Found by reading a repair back as audio, not by any checker. A bare
    decimal rule number ends at a word boundary, and `3` to `s` is not one --
    so `81.4s` matched no citation rule at all. The general number rule then
    took `81` and `4` separately and the SOLIDUS-less full stop survived
    between them, reaching the listener as **"the two eighty-one.fours"**.

    The corpus writes this whenever it compares one rule across two books,
    which it does constantly, so the shape will recur. It sits above
    `rule-citation` because that rule requires a preceding "Rule"/"Rules" and
    this form never has one -- the plural is doing the work the word would.
    """
    return (f"{int_to_words(int(match.group('major')))} point "
            f"{int_to_words(int(match.group('minor')))}s")


def _rule_citation(match: re.Match) -> str:
    """Rule 63.2(viii) -> 'Rule sixty-three point two, clause eight'."""
    word = match.group("word")
    major = int(match.group("major"))
    minor = match.group("minor")
    out = f"{word} {int_to_words(major)}"
    if minor:
        out += f" point {int_to_words(int(minor))}"
    for group in ("c1", "c2"):
        clause = match.group(group)
        if not clause:
            continue
        label = "clause" if group == "c1" else "sub-clause"
        out += f", {label} {_clause_words(clause, match.string)}"
    # ⚠️ THE THIRD CODE PATH. `_bare_clause` and `_usa_clause_citation` gained
    # clause-tail handling first; this one -- the form WITH the word "Rule" --
    # was missed, so `Rule 8.1(c)/(d)` still dropped its second clause while
    # `8.1(c)/(d)` did not. Found by a self-test, not by reading.
    return out + _clause_tail(match.groupdict().get("more"))


#: ⚠️ `(i)` IS GENUINELY AMBIGUOUS AND BOTH READINGS ARE WRONG SOMEWHERE.
#: In an NHL or IIHF sub-clause run it is roman ONE -- 39.2(i), 39.4(iii),
#: 63.2(viii). In a Hockey Canada or USA Hockey run it is the LETTER i, sitting
#: between (h) and (j) -- Hockey Canada 2.2(i) and 2.2(j) are the warm-up
#: half-ice and warm-up-penalty clauses, cited side by side in `shooting.md`.
#:
#: Measured over `content/` on 2 September 2026: **30 occurrences sit in a roman
#: run (an (ii)/(iii)/(iv)/(v) within 90 characters) and 4 in an alphabetic run
#: (an (h) or (j) within 90 characters).** So roman is the right DEFAULT and the
#: fix has to be narrow -- a blanket switch would break thirty citations to
#: repair four.
#:
#: ⚠️ Found by a reviewer that noticed `2.2(i)` rendering as "clause one" while
#: `2.2(j)` two words later rendered as "clause j". Nothing else could have seen
#: it: both readings are well-formed English and the Markdown is correct.
ALPHABETIC_CLAUSE_NEIGHBOUR = re.compile(r"\((?:h|j)\)")


def _clause_words(clause: str, context: str = "") -> str:
    lowered = clause.lower()
    if lowered in ROMAN_TO_INT:
        # ⚠️ Only `i` is ambiguous; `ii`, `iii`, `iv` and `v` have no alphabetic
        # reading in a clause list, so they never take this branch.
        if lowered == "i" and ALPHABETIC_CLAUSE_NEIGHBOUR.search(context):
            return "i"
        return int_to_words(ROMAN_TO_INT[lowered])
    if clause.isdigit():
        return int_to_words(int(clause))
    # The USA Hockey Casebook's sub-clause form, "(d.3)". Spoken as the letter,
    # then the number, so a listener can write it down and find the page.
    sub = re.fullmatch(r"([a-z])\.(\d+)", clause.lower())
    if sub:
        return f"{sub.group(1)} point {int_to_words(int(sub.group(2)))}"
    return clause  # a lettered clause: '(b)' -> 'clause b'


def _bare_roman_marker(match: re.Match) -> str:
    """A parenthesised roman numeral that no citation pattern claimed.

    ⚠️ Round 58: 157 candidate sites, 19 documents. Rendering five whole
    documents showed the marker surviving into the spoken text verbatim, so a
    voice reads "(i)" and "(ii)" as the LETTER -- "eye", "eye eye". The worst
    instance enumerates the four steps of the line-change procedure in
    `how_to_watch_hockey.md`, and another enumerates the two acts that draw a
    bench minor at Rule 76.7 in `faceoffs.md`.

    ⚠️ The corpus uses parenthesised romans in TWO senses and the plan row
    feared they needed different handling. Rendering settled it: they do not.
    "preamble item (v)" wants "item five", and an enumerated step "(i) The
    referee..." wants "One. The referee...". Both want a NUMBER, so one
    conversion serves both -- but they need different patterns to find them,
    because only the citation rules may claim a roman that follows a rule
    number, and those run first.
    """
    roman = match.group("roman").lower()
    value = ROMAN_TO_INT.get(roman)
    if value is None:
        # `[ivx]{1,6}` also matches non-numerals like "iiii" or "vv". Leave
        # anything that is not a real roman numeral exactly as it was found.
        return match.group(0)
    words = int_to_words(value)
    noun = match.groupdict().get("noun")
    if noun:
        return f"{noun} {words}"
    # The conjunction form -- "points (vi) and (vii)" -- is a CONTINUATION of
    # the noun phrase, not a new sentence. Adding a full stop here put a break
    # in the middle of "points six and seven"; the self-test caught it.
    return words


def _url_path(match: re.Match) -> str:
    """'usahockey.com/playingrules' -> '... slash playingrules'.

    ⚠️ The general ``/`` -> " or " row in SYMBOLS is right for 'NHL/IIHF' and
    WRONG for a URL: `usahockey.com/playingrules` was narrating as
    **"usahockey.com OR playingrules"**, which names two things that do not
    exist instead of one address a listener could write down. Five bare URLs
    sit in voiced body prose (`getting_started.md` x3, and the NHL API path in
    two documents); the rest are in Sources trailers, which are never voiced.

    Found by an agent recovering a dropped table, in shipped prose.

    Same principle as STANDARDS_BODIES above: where the solidus is part of a
    string a reader must MATCH rather than parse, speak it.
    """
    return match.group(0).replace("/", " slash ")


def _bare_iihf_clause(match: re.Match) -> str:
    """A DETACHED uppercase clause marker: '(II)' -> 'clause two'.

    ⚠️ This needs its OWN handler, not a branch inside `_bare_roman_marker`.
    My first attempt discriminated on the match object and leaked the word
    "clause" into the noun and enumeration senses, turning "points six and
    seven" into "points six and clause seven" and an enumerated step into
    "clause one any player...". The SELF-TEST caught all four; nothing reached
    the corpus. Three senses, three handlers.

    Unlike the other two, this one must SUPPLY the noun: there is no "item" or
    "clause" in front of it in the prose, so a bare number would leave the
    listener hearing a quantity where a clause reference was meant.
    """
    roman = match.group("roman").lower()
    value = ROMAN_TO_INT.get(roman)
    if value is None:
        return match.group(0)
    return f"clause {int_to_words(value)}"


def _enumerated_roman(match: re.Match) -> str:
    """An enumerated step marker: '(i) The referee...' -> 'One. The referee...'

    Capitalised and closed with a full stop because this marker STARTS a step,
    and the sentence that follows it is already capitalised. The other sense
    (`clause-noun-roman`) must not do either -- it sits inside a sentence.
    """
    roman = match.group("roman").lower()
    value = ROMAN_TO_INT.get(roman)
    if value is None:
        return match.group(0)
    return int_to_words(value).capitalize() + "."


def _section_reference(match: re.Match) -> str:
    """'\u00a719.1.2' -> 'section nineteen point one point two'.

    The two-level citation rules stop at 'major.minor', so a three-level
    section reference rendered as 'section nineteen point one' and dropped
    a '.2' into the audio unhandled. Anchored on the section sign because
    the only other three-level numbers in the corpus are inside DOIs, which
    must never be spoken as rule numbers.
    """
    levels = [int(n) for n in match.group("levels").split(".")]
    return "section " + " point ".join(int_to_words(n) for n in levels)


#: A tail of further clauses joined by commas -- "7.5(a), (e)" or "608(a), (b)".
#: ⚠️ A COMMA-separated bracket is a second CLAUSE of the same rule; an ADJACENT
#: bracket is a SUB-clause of the first. The two mean different things and are
#: labelled differently below.
#: ⚠️ Matches the BRACKETS only, so a joining "," or " and" is dropped rather
#: than spoken -- "608(a), (b) and (c)" voices as three clauses in a list.
RE_CLAUSE_TAIL = re.compile(
    # ⚠️ The dash is a RANGE, and it is a third meaning after the comma's
    # enumeration and the slash's alternative. `76.7(I)–(II)` is "clause one TO
    # clause two". Before this it was matched by nothing: the citation rule took
    # `(I)` and abandoned `–(II)`, and because brackets are silent the listener
    # heard "clause one" and then a bare "two" with a dash between them.
    r"(?P<sep>[,/]|[ ]and|[-\u2013\u2014])[ ]?\((?P<clause>[ivxIVX]{1,6}|[a-z]|\d{1,2})\)")


def _clause_tail(more: str | None) -> str:
    """Expand ', (e), (f)' -> ', clause e, clause f'.

    ⚠️ Without this the trailing brackets were matched by NO citation rule, and
    **brackets are silent in the renderer** -- so `7.5(a), (e)` voiced as
    "seven point five, clause a, e" and the listener heard a dangling letter.
    Found by an agent reading its own repair back as audio; no checker sees it,
    because the markdown is correct and only the spoken form is wrong.
    """
    if not more:
        return ""
    out = ""
    for m in RE_CLAUSE_TAIL.finditer(more):
        # ⚠️ A SLASH means "or", not "and another one". `622(b)/(c)` is one rule
        # offering two clauses; `608(a), (b) and (c)` is a list of three. Voicing
        # a slash as a comma turns an alternative into an enumeration.
        sep = m.group("sep")
        if sep == "/":
            joiner = " or"
        elif sep in ("-", "\u2013", "\u2014"):
            joiner = " to"
        else:
            joiner = ","
        out += f"{joiner} clause {_clause_words(m.group('clause'), m.string)}"
    return out


def _bare_clause(match: re.Match) -> str:
    """'27.8 and 63.2(viii)' - the second citation has no 'Rule' in front."""
    major = int_to_words(int(match.group("major")))
    minor = int_to_words(int(match.group("minor")))
    out = f"{major} point {minor}"
    for group in ("c1", "c2"):
        clause = match.groupdict().get(group)
        if not clause:
            continue
        label = "clause" if group == "c1" else "sub-clause"
        out += f", {label} {_clause_words(clause, match.string)}"
    return out + _clause_tail(match.groupdict().get("more"))


def _situation(match: re.Match) -> str:
    """5-on-3, 5v5, 2-on-1s -> 'five on three', 'five on five', 'two on ones'."""
    out = f"{_ONES[int(match.group(1))]} on {_ONES[int(match.group(2))]}"
    return out + ("s" if match.groupdict().get("plural") else "")


def _pluralise(word: str) -> str:
    return word[:-1] + "ies" if word.endswith("y") else word + "s"


def _decade(match: re.Match) -> str:
    """'1970s' -> 'nineteen seventies'; '80s' -> 'eighties'."""
    text = match.group(1)
    if len(text) == 4:
        return _pluralise(year_to_words(int(text)))
    return _pluralise(_TENS[int(text) // 10])


def _leading_decimal(match: re.Match) -> str:
    """Hockey's save-percentage notation: '.920' -> 'point nine two zero'."""
    digits = " ".join(_ONES[int(d)] for d in match.group(1))
    return f"point {digits}"


def _clock_hour(match: re.Match) -> str:
    """'11pm' -> 'eleven p m'."""
    marker = "a m" if match.group(2).lower().startswith("a") else "p m"
    return f"{int_to_words(int(match.group(1)))} {marker}"


def _alphanumeric_code(match: re.Match) -> list[Token]:
    """Model numbers and standards codes: 'CRT6' -> 'C R T six'."""
    out: list[Token] = []
    for run in re.findall(r"[A-Za-z]+|\d+(?:\.\d+)?", match.group(0)):
        if out:
            out.extend(done(" "))
        if run[0].isdigit():
            out.extend(done(decimal_to_words(run)))
        elif run.isupper() and len(run) <= 5:
            out.extend(_spell_out_word(run))
        else:
            out.extend(done(run))
    return out


def _spell_out_word(word: str) -> list[Token]:
    return [
        Token(SSML, '<say-as interpret-as="characters">'),
        Token(TEXT, word),
        Token(SSML, "</say-as>"),
    ]


_DIGIT_WORD = {
    "0": "zero", "1": "one", "2": "two", "3": "three", "4": "four",
    "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine",
}


def _emergency_number(m: "re.Match[str]") -> str:
    """An emergency telephone number, spoken as digits.

    ⚠️ THIS IS A SAFETY DEFECT, NOT A TIDINESS ONE. The general number rule voiced
    `999` as "nine hundred and ninety-nine" and `111` as "one hundred and eleven".
    `mental_game.md` ships a mental-health crisis callout reading "999 in the UK and
    Ireland, 112 across the EU, 911 in the US and Canada" — all three mangled, in the
    one passage where a listener may be about to dial.

    Found by an agent writing the British emergency section, which probed the renderer
    rather than assuming: it confirmed `9-9-9` voices correctly and used that as a
    workaround in its own text. The workaround is not the fix; this is.

    ⚠️ SCOPE, STATED HONESTLY — the guard is narrower than "a dialling context".
    Two shapes fire: a dialling verb before the number (`call`/`dial`/`calling`/`ring`),
    which is tight; and the number followed by `in`/`across`/`from`/`now`/`immediately`,
    which is NOT. That second branch would also fire on "112 in the study" or "a survey
    of 999 across four clubs".

    It is safe on the corpus as it stands — the pattern was run over all of `content/`
    and every firing is a true positive — and the self-test pins the one live
    counter-example, "pooling 112 effect sizes", which the first branch cannot reach and
    the second does not match. But a future author writing a sample size of 111 or 112
    followed by "in" WILL have it read as a phone number, and nothing will warn them.
    Recorded as an open row rather than tightened blind, because a stricter pattern
    risks losing the crisis callout, which is the case that actually matters.
    """
    return " ".join(_DIGIT_WORD[d] for d in (m.group("num") or m.group("num2")))


def _standards_code(match: re.Match) -> list[Token]:
    """'CAN/BNQ 9415-370' -> 'C A N slash B N Q nine four one five dash ...'.

    Digit by digit, not as a quantity: 9415-370 is a label to be matched, and
    'nine thousand four hundred and fifteen' is not what is printed on the
    label. The separators are spoken for the same reason — a listener writing
    the code down needs them.
    """
    out: list[Token] = []
    for piece in re.findall(r"[A-Za-z]+|\d+|[/–-]", match.group(0)):
        if piece == "/":
            out.extend(done(" slash"))
            continue
        if piece in ("-", "–"):
            out.extend(done(" dash"))
            continue
        if out:
            out.extend(done(" "))
        if piece.isdigit():
            out.extend(done(" ".join(_ONES[int(digit)] for digit in piece)))
        else:
            out.extend(_spell_out_word(piece.upper()))
    return out


def _role_label_series(match: re.Match) -> str:
    """'F1 / F2 / F3' -> 'F one, F two and F three'.

    The solidus here separates three roles that exist at the same time, so the
    SYMBOLS " or " made a false choice out of them: "F one or F two or F three
    are roles defined by order of arrival" invites a listener to pick one.
    """
    labels = [
        f"{label[0]} {_ONES[int(label[1])]}"
        for label in re.findall(r"[FD][123]", match.group(0))
    ]
    return ", ".join(labels[:-1]) + " and " + labels[-1]


def _usa_clause_citation(match: re.Match) -> str:
    """'608(b)' with no 'Rule' in front -> 'six hundred and eight, clause b'.

    USA Hockey clause numbers carry no point, so the bare-clause rule above -
    which requires 'major.minor' - never saw them. The second citation in a
    sentence is the one that loses the word 'Rule', so this reached the audio
    as 'six hundred and eight(b)'.
    """
    out = f"{int_to_words(int(match.group('major')))}"
    for group in ("c1", "c2"):
        clause = match.groupdict().get(group)
        if not clause:
            continue
        label = "clause" if group == "c1" else "sub-clause"
        out += f", {label} {_clause_words(clause, match.string)}"
    out += _clause_tail(match.groupdict().get("more"))
    return out


def _number_with_fraction(match: re.Match) -> str:
    """'1½ sizes' -> 'one and a half sizes'."""
    whole = int_to_words(int(match.group(1)))
    return f"{whole} {dict(FRACTION_AFTER_NUMBER)[match.group(2)]}"


def _currency_unit(singular: str, plural: str) -> Callable[[re.Match], str]:
    """Build a currency handler for one unit.

    '$148' -> 'one hundred and forty-eight dollars'; '$10-$20' -> a range.

    A magnitude word must stay between the number and the unit, otherwise
    '$20 million' comes out as 'twenty dollars million'.

    A factory rather than one handler per currency because the only thing that
    differs is the noun, and this module's whole design is that adding a
    construct means adding a row rather than another near-copy of a function.
    """

    def whole(amount: str) -> str:
        """'5.00' -> 'five'. A price written to the penny is still a round
        number of pounds, and 'five point zero zero pounds' is not how anyone
        says it."""
        return amount[:-3] if amount.endswith(".00") else amount

    def handler(match: re.Match) -> str:
        raw_low = whole(match.group("low"))
        low = decimal_to_words(raw_low)
        magnitude = match.group("magnitude")
        tail = f" {magnitude}" if magnitude else ""
        high = match.group("high")
        if high:
            return f"{low} to {decimal_to_words(whole(high))}{tail} {plural}"
        is_one = raw_low == "1" and not magnitude
        return f"{low}{tail} {singular if is_one else plural}"

    return handler


_currency = _currency_unit("dollar", "dollars")
_currency_sterling = _currency_unit("pound", "pounds")


MONTHS = (
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December",
)


def _day_month(match: re.Match) -> str:
    """'1 September' -> 'the first of September'; adds the year if present."""
    out = f"the {ordinal_to_words(int(match.group(1)))} of {match.group(2)}"
    year = match.group(3)
    return out + (f", {year_to_words(int(year))}" if year else "")


def _month_year(match: re.Match) -> str:
    """'December 2014' -> 'December twenty fourteen'."""
    return f"{match.group(1)} {year_to_words(int(match.group(2)))}"


def _formation(match: re.Match) -> str:
    """1-3-1 -> 'one three one'. A shape, not arithmetic."""
    return " ".join(_ONES[int(d)] for d in match.group(1, 2, 3))


def _season_span(match: re.Match) -> str:
    """`2007-08 to 2014-15` -> two seasons and one span marker, not three "to"s.

    Naming each half a "season" is what makes the span audible: without it a
    listener has four bare years in a row and no way to group them.
    """
    def one(first: str, second: str) -> str:
        return _season(re.match(r"((?:19|20)\d{2})-(\d{2}|\d{4})",
                                f"{first}-{second}"))
    a = one(match.group("a1"), match.group("a2"))
    b = one(match.group("b1"), match.group("b2"))
    return f"the {a} season through to the {b} season"


def _season(match: re.Match) -> str:
    """2005-06 / 2025-2026 / 2025-29 -> 'X to Y'."""
    start = int(match.group(1))
    tail = match.group(2)
    end = int(tail) if len(tail) == 4 else (start // 100) * 100 + int(tail)
    if end < start:
        end += 100
    return f"{year_to_words(start)} to {year_to_words(end)}"


def _clock_words(minutes: str, seconds: str, fraction: str = "") -> str:
    """The spoken form of one M:SS clock reading. Shared by `_clock` and the range."""
    count = int(minutes)
    seconds_text = seconds + (fraction or "")
    out = f"{int_to_words(count)} minute" + ("s" if count != 1 else "")
    if float(seconds_text):
        words = decimal_to_words(seconds_text.lstrip("0") or "0")
        out += f" {words} second" + ("s" if seconds_text != "01" else "")
    return out


def _clock_range(match: re.Match) -> str:
    """`0:39-0:41` - a range between two clock times, not a pause between them.

    The shift-length confidence intervals are written this way. The en dash fell
    through to the symbol table, which promotes it to an em dash, so a listener
    heard "zero minutes thirty-nine seconds - zero minutes forty-one seconds"
    with a comma-length break where the word "to" belongs. Ordered before
    `volume-pages` and `clock-time`, either of which would otherwise claim half
    of it and leave the other half to the symbol table.
    """
    return (
        f"{_clock_words(match.group(1), match.group(2))} to "
        f"{_clock_words(match.group(3), match.group(4))}"
    )


def _volume_pages(match: re.Match) -> str:
    """A journal citation's `volume:first-last`, which is NOT a clock time.

    `Canadian Journal of Neurological Sciences 11:34-41` was claimed by the
    clock rule and voiced as "eleven minutes thirty-four seconds - forty-one",
    in the middle of the corpus's most consequential spinal-injury citation.
    Longer page numbers escaped the clock rule but leaked a raw colon instead:
    `Neurosurgery 34:590-597` came out as "thirty-four : five hundred and
    ninety to ...".

    The discriminator is the RANGE END, not the volume. A real clock range
    writes both ends as M:SS - `0:39-0:41`, the shift-length confidence
    intervals - so a range whose end carries no colon of its own is a page
    range. The trailing lookahead is what protects those.

    Deliberately NOT voiced as "volume ... pages ...". That reading is almost
    certainly right, but it is a claim about the citation's structure rather
    than something on the page, and this renderer's job is to say what is
    written. Naming the parts is how a rendering starts asserting things.
    """
    volume, first, last = match.group(1), match.group(2), match.group(3)
    return f"{int_to_words(int(volume))}, {int_to_words(int(first))} to {int_to_words(int(last))}"


def _time_of_day(match: re.Match) -> str:
    """'10:45pm' -> 'ten forty-five p m'. A TIME OF DAY, not a game clock.

    ⚠️ Without this the `clock-time` rule reached it and produced
    **"ten minutes forty-five secondspm"** -- a non-word -- in a ` ```facts `
    value voiced alone with a 300 ms break either side. Guarding `clock-time`
    alone was not enough: it left the colon behind as "ten:forty-five p m".
    """
    hour, minute, suffix = match.group(1), match.group(2), match.group(3)
    spoken_hour = int_to_words(int(hour))
    if minute == "00":
        spoken_minute = " o'clock"
    elif minute.startswith("0"):
        spoken_minute = f" oh {int_to_words(int(minute))}"
    else:
        spoken_minute = f" {int_to_words(int(minute))}"
    marker = " a m" if suffix.lower().startswith("a") else " p m"
    return f"{spoken_hour}{spoken_minute}{marker}"


def _clock(match: re.Match) -> str:
    """2:00 -> 'two minutes'; 5:04 -> '...'; 1:01.4 -> fractional seconds."""
    return _clock_words(match.group(1), match.group(2), match.group(3) or "")


def _confidence_interval(match: re.Match) -> str:
    """'95% CI = [5.3%, 12.1%]' -> one spoken phrase, not two glued ones."""
    low = signed_number_to_words(match.group("low"))
    high = signed_number_to_words(match.group("high"))
    pct = " percent" if match.group("pct1") or match.group("pct2") else ""
    level = match.group("level")
    band = f"{int_to_words(int(level))} percent " if level else ""
    return f"with a {band}confidence interval from {low}{pct} to {high}{pct}"


def _statistic(match: re.Match) -> str:
    """'r = +0.25' / 'beta = 0.12'."""
    symbol = match.group("symbol")
    spoken = dict(GREEK).get(symbol, symbol)
    return f"{spoken} equals {signed_number_to_words(match.group('value'))}"


def _range_with_unit(match: re.Match) -> str:
    """'30-80 s' -> 'thirty to eighty seconds'; '95-114°' likewise.

    Both units here are ABBREVIATIONS. A spelled-out unit ('30-35 seconds')
    is not matched by this rule and belongs to `range-with-spelled-unit`.
    """
    prefix = _approx_prefix(match.group("approx"))
    low = decimal_to_words(match.group("low"))
    high = decimal_to_words(match.group("high"))
    unit = match.group("unit")
    tail = _spoken_unit(unit, match.group("high")) if unit else ""
    return f"{prefix}{low} to {high}{tail}"


def _range_with_spelled_unit(match: re.Match) -> str:
    """'30-35 seconds' -> 'thirty to thirty-five seconds'.

    ``_UNITS_ALT`` holds only abbreviations ('s', 'min', 'm', '%'), so a range
    written with a SPELLED-OUT unit matched no range rule at all and fell
    through to ``bare-number`` twice, emitting "thirty-thirty-five seconds".
    The en-dash spelling was rescued by ``numeric-range``, which accepts only
    '-'; the hyphen spelling was not. That is why this survived - the corpus
    writes en dashes nearly everywhere, and all but two of the hyphen
    instances are inside quotations that must not be edited to fix a renderer
    bug. Two of the remaining sites are ``Action:`` and ``Convention:`` facts
    values, which are voiced alone.

    Widening ``numeric-range`` to accept a hyphen is the obvious fix and is
    WRONG. '2025-26 edition' and its siblings appear over a hundred times in
    this corpus and would have voiced as "two thousand and twenty-five to
    twenty-six" - the citation backbone of every rulebook reference. The
    '1-2-2' formations are held by the ``formation`` rule, but '50-50 puck',
    '2-1' scores and season identifiers are not. Requiring a spelled-out unit
    is precisely what keeps all of them out.
    """
    low, high = match.group("low"), match.group("high")
    # Season identifiers are protected by RULE ORDER, not by this guard:
    # `season-range` sits at index 17 and consumes '2025-26' long before this
    # rule at index 32 can see it. Verified by sabotage - adding 'editions?'
    # to `_SPELLED_UNITS` and disabling this branch still renders '2025-26
    # edition' correctly, because the match never reaches here.
    #
    # So this branch is UNREACHABLE today and the self-test cannot cover it.
    # It is kept as a second line of defence should the rule order ever change,
    # and documented as unreachable so nobody reads it as the thing that works.
    if len(low) == 4 and len(high) == 2:
        return match.group(0)
    prefix = _approx_prefix(match.group("approx"))
    unit = match.group("unit")
    return f"{prefix}{decimal_to_words(low)} to {decimal_to_words(high)} {unit}"


def _number_with_unit(match: re.Match) -> str:
    """'~45 s' -> 'about forty-five seconds'; '78.8%' -> '... percent'."""
    prefix = _approx_prefix(match.group("approx"))
    value = match.group("value")
    words = decimal_to_words(value)
    fraction = match.group("frac")
    if fraction:
        words += " " + dict(FRACTION_AFTER_NUMBER)[fraction]
    unit = match.group("unit")
    return f"{prefix}{words}{_spoken_unit(unit, value)}"


def _dimension(match: re.Match) -> str:
    """'8 x 15 inches' -> 'eight by fifteen inches'.

    Consumes the left operand, its unit if it carries one, and the sign; the
    right operand is left RAW so the unit rules downstream can read '15
    inches' properly.

    The unit on the left is why this exists in this form. '56 m × 26 m' - the
    most repeated British rink figure in the corpus - did not match a rule
    that required the operand to touch the sign, so it fell through to the
    SYMBOLS row and came out as "fifty-six metres times twenty-six metres",
    which parses as an area. The same document reads '200 × 85 feet'
    correctly, so 'by' is the established target.
    """
    words = decimal_to_words(match.group("a"))
    unit = match.groupdict().get("aunit")
    if unit:
        words += (
            _spoken_unit(unit, match.group("a"))
            if unit in UNIT_LOOKUP
            else " " + unit
        )
    return f"{words} by "


def _multiplier(match: re.Match) -> str:
    """'1.08x' -> 'one point nought eight times'."""
    return f"{decimal_to_words(match.group(1))} times"


def _repetitions(match: re.Match) -> str:
    """'8 x 40 seconds' -> 'eight times forty seconds'. Left operand only."""
    return f"{decimal_to_words(match.group('a'))} times "


def _inch_fraction(match: re.Match) -> str:
    """'7/16\"' and '3/8\"' -> 'seven sixteenths of an inch'."""
    numerator, denominator = int(match.group(1)), int(match.group(2))
    names = {2: "half", 3: "third", 4: "quarter", 8: "eighth", 16: "sixteenth",
             32: "thirty-second"}
    name = names.get(denominator, f"over {int_to_words(denominator)}")
    plural = "" if numerator == 1 else "s"
    return f"{int_to_words(numerator)} {name}{plural} of an inch"


def _vulgar_inch(match: re.Match) -> str:
    return dict(FRACTIONS)[match.group(1)] + " of an inch"


def _feet_inches_abbrev(match: re.Match) -> str:
    """`4 ft 6 in` -> 'four feet six inches'.

    ⚠️ `in` is DELIBERATELY absent from the unit table, and must stay absent:
    it is one of the commonest words in English, so a general `in` -> `inches`
    row would voice "3 in the slot" as "three inches the slot". The abbreviation
    is only safely readable as a unit when a `ft` measurement immediately
    precedes it, which is what this rule requires.

    Before it, `ft` expanded and `in` did not: the crease sentence reached the
    listener as **"run four feet six IN out"**. Found by an agent reading a
    rendered paragraph aloud while verifying something else.
    """
    ft = int(match.group("ft"))
    inch = int(match.group("inch"))
    return (f"{int_to_words(ft)} {'foot' if ft == 1 else 'feet'} "
            f"{int_to_words(inch)} {'inch' if inch == 1 else 'inches'}")


def _feet_inches(match: re.Match) -> str:
    """'6\'4\"' -> 'six foot four inches'.

    Both marks were surviving into the SSML raw: the corpus said a 6'4"
    goaltender and the listener got "six'four"". Straight quote and apostrophe
    are both in ALLOWED_RESIDUE -- legitimately, they are ordinary punctuation
    -- so the residue check could never have reported this.
    """
    feet = int(match.group("ft"))
    words = f"{int_to_words(feet)} foot"
    inches = match.group("inch")
    if inches is not None:
        count = int(inches)
        words += f" {int_to_words(count)} {'inch' if count == 1 else 'inches'}"
    return words


def _bare_inch(match: "re.Match[str]") -> list[Token]:
    """'65\"' -> 'sixty-five inches', but only where the mark is an inch mark.

    A straight quote after a digit is an inch mark or a closing quotation mark,
    and this corpus contains both: 'And "60 x 30" is not the IIHF standard'
    must not become 'thirty inches', and 'Read "2 plus 10" the way the penalty
    box does' must not become 'ten inches'.

    Discriminator: scan the straight quotes earlier in the line left to right,
    tracking whether a quotation is open. A quote preceded by a space, a start,
    or an opening bracket and followed by a non-space OPENS one; any other
    quote closes an open quotation, or -- if none is open -- is an inch mark.

    Counting quote parity instead does not work, and was tried: it has to
    decide whether the quote after 19 in 'match up loudly: "I\'ve got 19", "you
    take 7"' is an inch mark in order to count it, which is the question being
    asked. It turned 7 into seven inches.

    A decline returns RAW rather than a finished string, so the number stays
    eligible for the bare-number rule that runs last. Returning it as text
    would freeze '30' as a numeral.

    Note: the rule counter counts matches considered, declines included. It is
    not a count of conversions and must not be quoted as one.
    """
    prefix = match.string[: match.end() - 1]
    open_quote = False
    for index, char in enumerate(prefix):
        if char != '"':
            continue
        before = prefix[index - 1] if index else " "
        after = prefix[index + 1] if index + 1 < len(prefix) else " "
        if not open_quote and before in " \t([*\u2014\u2013-" and after not in " \t":
            open_quote = True
        elif open_quote:
            open_quote = False
    if open_quote:
        return raw(match.group(0))
    count = int(match.group("n"))
    words = int_to_words(count)
    upper = match.group("n2")
    if upper is not None:
        count = int(upper)
        words += f" to {int_to_words(count)}"
    return done(f"{words} {'inch' if count == 1 else 'inches'}")


def _paren_feet(match: re.Match) -> str:
    value = int(match.group(1))
    return f"({int_to_words(value)} " + ("foot" if value == 1 else "feet") + ")"


def _paren_minutes(match: re.Match) -> str:
    """`major (5')` -> `major (five minutes)`.

    The IIHF prints penalty durations with a minute prime — `Major penalty (5')`,
    `minor penalty (2')`, `a ten minute (10')`. That is the same glyph the NHL uses
    for feet in `four feet (4')`, and `parenthesised-feet` below rendered every one
    of them as a distance: a listener heard "a major (five feet)". Measured across
    the corpus render before this rule existed: 21 instances, all penalty tiers.

    The discriminator is the preceding word, and it is clean in both directions —
    a dimension quotation always spells the unit out first (`four feet (4')`),
    while a duration is preceded by penalty language. This rule must stay ORDERED
    BEFORE `parenthesised-feet`, which is unconditional and would otherwise win.
    """
    value = int(match.group("n"))
    unit = "minute" if value == 1 else "minutes"
    return f"{match.group('lead')}({int_to_words(value)} {unit})"


def _age_group_u_first(match: re.Match) -> str:
    return f"under {int_to_words(int(match.group(1)))}"


def _age_group_u_last(match: re.Match) -> str:
    return f"{int_to_words(int(match.group(1)))} U"


def _forward_label(match: re.Match) -> str:
    """F1 -> 'F one'. Also D1/D2."""
    return f"{match.group(1)} {_ONES[int(match.group(2))]}"


def _optional_plural(match: re.Match) -> str:
    """'glove(s)' -> 'gloves'.

    The written form offers the reader both numbers at once. Read aloud the
    brackets are silent, so the listener got 'glove s' or 'glove'; the plural
    is the form that keeps both readings true.
    """
    return _pluralise(match.group(1))


def _spell_out(match: re.Match) -> list[Token]:
    return _spell_out_word(match.group(0))


def _en_dash_range(match: re.Match) -> str:
    return f"{decimal_to_words(match.group(1))} to {decimal_to_words(match.group(2))}"


def _is_range_token(token: str) -> bool:
    """The two things a LETTER range is built from in this corpus: a single
    letter, or a short roman numeral. Both sides have to qualify, which is what
    keeps an ordinary compound out of the range branch."""
    return len(token) == 1 or (
        len(token) <= 4 and re.fullmatch(r"[ivxlcdm]+", token) is not None
    )


def _compound_en_dash(match: re.Match) -> str:
    """A closed-up en dash between letters. Two different marks share the glyph.

    `640(b-f)` and `pp. v-vi` are RANGES and read as "to". `east-west`,
    `helmet-facemask`, `pre-post`, `head-neck` and `mindfulness-acceptance-
    commitment` are COMPOUND JOINERS: one word, no pause.

    Without this rule both fell through to the en-dash row of the symbol table,
    which promotes a leftover en dash to an em dash - so a listener heard
    "an east - west pass" with a comma-length break inside a single compound,
    and heard a rule's subsection range as two unrelated letters. The chain is
    matched whole rather than pairwise, or the second dash of a three-part
    compound would be left behind for the symbol table to promote.
    """
    parts = match.group(0).split("\u2013")
    if all(_is_range_token(part) for part in parts):
        return " to ".join(parts)
    return "-".join(parts)


def _percent_after_word(match: re.Match) -> str:
    return f"{match.group(1)} percent"


def _identifier_digits(match: "re.Match[str]") -> str:
    """A long uncommaed digit run is an identifier, so read it as digits."""
    return " ".join(_DIGIT_WORD[ch] for ch in match.group("digits"))


def _bare_number(match: re.Match) -> str:
    """Anything numeric a named rule did not claim. Runs last."""
    text = match.group(0)
    if re.fullmatch(r"(19|20)\d{2}", text):
        return year_to_words(int(text))
    if "." in text:
        return decimal_to_words(text)
    return int_to_words(int(text.replace(",", "")))


def _ordinal_suffix(match: re.Match) -> str:
    """'1st', '2nd', '19th' -> ordinal words."""
    return ordinal_to_words(int(match.group(1)))


# -- the ordered rule table -------------------------------------------------

_UNITS_ALT = _unit_alternation()
_UNITS_TIGHT = _unit_alternation(TIGHT_UNITS)
_FRACTION_ALT = "|".join(re.escape(ch) for ch, _ in FRACTIONS)
_GREEK_ALT = "|".join(re.escape(ch) for ch, _ in GREEK)
_APPROX = r"(?P<approx>[~≈∼]\s?)?"

#: Units the corpus writes out in words rather than abbreviating. Deliberately
#: SHORT and deliberately excludes 'season', 'year', 'month' and 'game': the
#: whole safety of `range-with-spelled-unit` rests on this list never matching
#: the tail of a season identifier ('2025-26 season') or a score ('2-1 game').
#: Add a word here only after checking what it collides with in `content/`.
_SPELLED_UNITS = (
    r"seconds?|minutes?|hours?|days?|weeks?"
    r"|degrees?|feet|foot|inches|inch|metres?|meters?|yards?"
    r"|players?|reps?|sets?"
)
# Longest first, so 'metres' is not eaten by 'm' and 'ISO/DIS' not by 'ISO'.
_DIMENSION_UNIT_ALT = "|".join(
    re.escape(unit) for unit in sorted(DIMENSION_UNITS, key=len, reverse=True)
)
_STANDARDS_ALT = "|".join(
    re.escape(body) for body in sorted(STANDARDS_BODIES, key=len, reverse=True)
)
#: The right-hand side of a dimension: a number or a range, then a unit.
_DIMENSION_OPERAND = (
    rf"\d+(?:\.\d+)?(?:\s?[–—-]\s?\d+(?:\.\d+)?)?\s?(?:{_DIMENSION_UNIT_ALT})\b"
)

NOTATION_RULES: tuple[Rule, ...] = (
    Rule(
        "emergency-number",
        re.compile(
            # A dialling context is required on one side or the other. Without it
            # this rule would eat "112 effect sizes" in the same document.
            r"(?:(?<=\bcall )|(?<=\bdial )|(?<=\bcalling )|(?<=\bring ))"
            r"(?P<num>999|911|112|101|111)\b"
            r"|(?P<pre>\b(?P<num2>999|911|112|111)\b)(?=[ ,]+(?:in|across|from|now|immediately)\b)"
        ),
        _emergency_number,
        "'call 999' -> 'call nine nine nine'. The general number rule read it as "
        "'nine hundred and ninety-nine', in a crisis callout.",
    ),
    Rule(
        "standards-code",
        re.compile(rf"\b(?:{_STANDARDS_ALT})\s?\d+(?:[-–/]\d+)*\b"),
        _standards_code,
        "CAN/BNQ 9415-370 -> 'C A N slash B N Q nine four one five dash "
        "three seven zero'",
    ),
    Rule(
        "plural-rule-number",
        # ⚠️ Must run BEFORE `rule-citation` and before any general number rule.
        # No `Rule` word: the corpus writes "the two 81.4s" precisely when it is
        # comparing one rule across two books, and the plural replaces the noun.
        re.compile(r"\b(?P<major>\d{1,3})\.(?P<minor>\d{1,2})s\b"),
        _plural_rule_number,
        "the two 81.4s -> 'the two eighty-one point fours'; without this the "
        "full stop survived and it reached the listener as 'eighty-one.fours'",
    ),
    Rule(
        "rule-citation",
        re.compile(
            # (?!\d) or the 1-3 digit major eats the first three digits of a
            # four-digit EDITION YEAR: "Rules 2026-27" was voiced as "Rules two
            # hundred and two six - twenty-seven", 104 times across the corpus,
            # on edition and provenance markers. `season-range` runs later and
            # never got the chance. 2026/27 was hit too, not just 2026-27.
            r"\b(?P<word>Rules?)\s+(?P<major>\d{1,3})(?!\d)"
            r"(?:\.(?P<minor>\d{1,2}))?"
            r"(?:[ ]?\((?P<c1>[ivxIVX]{1,6}|[a-z]|\d{1,2})\))?"
            r"(?:[ ]?\((?P<c2>[ivxIVX]{1,6}|[a-z]|\d{1,2})\))?"
            r"(?P<more>(?:(?:,|/|[ ]and|[-–—])[ ]?\((?:[ivxIVX]{1,6}|[a-z]|\d{1,2})\))+)?"
        ),
        _rule_citation,
        "Rule 63.2(viii) -> 'Rule sixty-three point two, clause eight'",
    ),
    Rule(
        "section-reference",
        re.compile(r"\u00a7[ ]?(?P<levels>\d{1,3}(?:\.\d{1,2}){2,3})(?![\d.])"),
        _section_reference,
        "\u00a719.1.2 -> 'section nineteen point one point two' - three-level "
        "references orphaned their last level",
    ),
    Rule(
        "bare-clause-citation",
        re.compile(
            r"(?<![\w.])(?P<major>\d{1,3})\.(?P<minor>\d{1,2})"
            r"[ ]?\((?P<c1>[ivxIVX]{1,6}|[a-z])\)"
            r"(?:[ ]?\((?P<c2>[ivxIVX]{1,6}|[a-z]|\d{1,2})\))?"
            r"(?P<more>(?:(?:,|/|[ ]and|[-–—])[ ]?\((?:[ivxIVX]{1,6}|[a-z]|\d{1,2})\))+)?"
        ),
        _bare_clause,
        "'27.8 and 63.2(viii)' - second citation without the word Rule",
    ),
    Rule(
        "usa-clause-citation",
        re.compile(
            # ⚠️ `[a-z]\.\d` is the USA Hockey CASEBOOK's own sub-clause form --
            # "Rule Reference 630(d.3)". The corpus quotes it because the
            # Casebook cites a clause the printed rule does not contain, which
            # is the book's error and is recorded rather than repaired. Without
            # this branch it voiced as "six hundred and thirty(d.3)", with the
            # parenthetical reaching the listener as raw characters.
            # ⚠️ `\d{2,3}`, not `\d{3}`. CARHA numbers its rules in TWO digits --
            # 19, 49, 55, 65, 66, 79 -- so every bare CARHA clause citation fell
            # through to `bare-number` and voiced with a literal bracket:
            # "seventy-nine(a)". 33 such spans are live in `content/`, and CARHA
            # became load-bearing in round 55 when it turned out to hold the rule
            # that refuted a corpus negative about slap shots. Widening to two
            # digits cannot swallow a season or a page number: both branches
            # require an immediately following parenthesised clause letter.
            r"(?<![\w.])(?P<major>\d{2,3})[ ]?\((?P<c1>[ivxIVX]{1,6}|[a-z]\.\d|[a-z])\)"
            r"(?:[ ]?\((?P<c2>[ivxIVX]{1,6}|[a-z]|\d{1,2})\))?"
            r"(?P<more>(?:(?:,|/|[ ]and|[-–—])[ ]?\((?:[ivxIVX]{1,6}|[a-z]|\d{1,2})\))+)?"
        ),
        _usa_clause_citation,
        "'Rules 624(b) and 630(a)' - the second USA Hockey citation, which "
        "carries no point and so was never a bare-clause citation",
    ),
    Rule(
        "url-path",
        # ⚠️ Must run BEFORE the SYMBOLS pass turns every "/" into " or ".
        # Requires a real TLD and at least one path segment, so it cannot claim
        # "forward/defence" or "he/she" -- both of which SHOULD stay " or ".
        re.compile(
            r"\b[a-z0-9][a-z0-9.-]*\.(?:com|org|net|gov|edu|io|ca|uk|co\.uk)"
            r"(?:/[A-Za-z0-9._~%+-]+)+/?"
        ),
        _url_path,
        "'usahockey.com/playingrules' -> '...com slash playingrules'; the "
        "general slash rule read it as 'usahockey.com OR playingrules'",
    ),
    Rule(
        "clause-noun-roman",
        # ⚠️ MUST RUN AFTER all three citation rules. A roman that follows a
        # rule number belongs to `rule-citation`, `bare-clause-citation` or
        # `usa-clause-citation`, which voice it as "sub-clause three". This
        # rule only ever sees the ones they left behind.
        # The corpus separates a clause from its rule number with prose --
        # "Rule 11.1, preamble item (v)" -- so no citation pattern can reach
        # it. The `and`/`or` lookbehinds catch the continuation form,
        # "suspends only points (vi) and (vii)", whose second marker follows a
        # conjunction rather than the noun.
        re.compile(
            r"(?:\b(?P<noun>items?|clauses?|points?|paragraphs?|subsections?"
            r"|limbs?|sub-clauses?)[ ]+"
            # ⚠️ A bare marker after a preposition or a dash. Found by rendering
            # `faceoffs.md`: Rule 76.7's enumeration of the two acts that draw a
            # bench minor reads "— (i) any player..." and "and at (ii) inside...".
            # Neither has a capital after it, so `enumerated-roman`'s
            # new-sentence guard could not claim them, and the listener heard
            # "eye" and "eye eye" in a penalty enumeration.
            r"|(?<=\bat[ ])|(?<=[\u2013\u2014][ ]))"
            # ⚠️ Uppercase too: the IIHF books letter their clauses in CAPITALS
            # (`63.2(III)`), so a DETACHED IIHF marker is uppercase. Censused
            # before widening: 505 uppercase parenthesised romans in `content/`,
            # every sampled one a clause marker, none a pronoun or a variable.
            r"\((?P<roman>[ivxIVX]{1,6})\)"
        ),
        _bare_roman_marker,
        "'preamble item (v)' -> 'preamble item five'; without it a voice read "
        "the marker as the letter, 'eye' and 'eye eye'",
    ),
    # ⚠️ ORDER IS LOad-BEARING between these two. `enumerated-roman` is the
    # NARROWER rule -- it requires a new sentence to follow -- and it must claim
    # its markers BEFORE the general detached-clause rule below, or a step in an
    # enumeration voices as "clause one The referee gives..." instead of "One.".
    # The self-test caught exactly that when the general rule was widened to
    # lowercase and silently overtook this one.
    Rule(
        "clause-continuation-roman",
        # ⚠️ LOWERCASE ONLY, and that restriction is the whole point. This is the
        # continuation of a noun phrase -- "suspends only points (vi) and (vii)"
        # -- where the second marker inherits the first's noun and must NOT
        # repeat it. Left open to uppercase, it split one quoted rulebook ladder
        # two different ways in a single sentence: "clause one Minor penalty, or
        # TWO Major penalty". Uppercase markers fall through to
        # `bare-iihf-clause-roman`, which supplies "clause" consistently.
        re.compile(r"(?:(?<=\band[ ])|(?<=\bor[ ]))\((?P<roman>[ivx]{1,6})\)"),
        _bare_roman_marker,
        "'points (vi) and (vii)' -> 'points six and seven' -- the second marker "
        "inherits the first's noun",
    ),
    Rule(
        "enumerated-roman",
        # The enumeration sense: "(i) The referee gives the visiting team up to
        # five seconds to change. (ii) The referee then raises their hand..."
        # ⚠️ Three guards, because this is the looser of the two patterns.
        # `(?<=\s)|^` rejects every citation remnant: `63.2(iii)` has a digit
        # before the bracket and `10.2(a)(iii)` has a close-bracket, so neither
        # can reach this rule even if it somehow ran first.
        # `(?=[ ]+[A-Z])` requires a new sentence to follow, which is what an
        # enumerated step looks like and what an incidental parenthetical does
        # not.
        # ⚠️ A SENTENCE boundary, not merely whitespace. A marker after a COLON
        # is a quoted rulebook LADDER -- *"one of: (I) Minor penalty, or (II)
        # Major penalty"* -- and turning its first rung into "One." FABRICATES A
        # SENTENCE BREAK INSIDE A VERBATIM QUOTATION. Reported by an agent that
        # watched this file change under it mid-run, and reproduced.
        re.compile(r"(?:(?<=[.!?][ ])|(?<=\n)|^)\((?P<roman>[ivxIVX]{1,6})\)(?=[ ]+[A-Z])"),
        _enumerated_roman,
        "'(i) The referee gives...' -> 'One. The referee gives...'",
    ),
    Rule(
        "bare-iihf-clause-roman",
        # ⚠️ Runs after all three citation rules and after `clause-noun-roman`,
        # so it only ever sees a marker DETACHED from its rule number.
        # The IIHF books letter their clauses in CAPITALS, and the corpus refers
        # back to them as bare shorthand through long arguments -- "whether it
        # is applying (II) or reading (III) more widely than its own words",
        # "a kick meant to block a pass is not (II)'s offence". Every one voiced
        # as the LETTER: "eye eye", "eye eye eye".
        # ⚠️ CENSUSED BEFORE WIDENING: 505 uppercase parenthesised romans across
        # `content/`, every sampled one a clause marker -- none a pronoun, a
        # variable or a multiplication. Lowercase is deliberately NOT included
        # here: the lowercase residue is MENTIONS of markers ("the rule letters
        # its own steps (i) to (viii)"), where converting would make the
        # sentence say something false.
        # The quote-mark lead-in catches a marker inside quoted rulebook text,
        # such as an IIHF penalty ladder quoted verbatim.
        # ⚠️ Lowercase too: the NHL letters its clauses in lowercase romans
        # (`63.2(iii)`) exactly as the IIHF letters its in capitals, so a
        # detached NHL marker is lowercase. Both books' detached markers were
        # reaching the listener as letters.
        re.compile(r"(?:(?<=\s)|(?<=[\"\u201c])|^)\((?P<roman>[IVXivx]{1,6})\)"),
        _bare_iihf_clause,
        "'applying (II) or reading (III)' -> 'applying clause two or reading "
        "clause three'; the IIHF letters its clauses in capitals",
    ),
    Rule(
        "d-to-d",
        # The lookarounds reject a hyphen as well as a word character, so
        # "forward-to-defence" is left alone. It used to voice as
        # "forwarD to Defence", because this lived in LEXICON, which is plain
        # string replacement and cannot see a word boundary.
        re.compile(r"(?<![\w-])[Dd]-to-[Dd](?![\w-])"),
        lambda match: "D to D",
        "D-to-D -> 'D to D', but forward-to-defence is left alone",
    ),
    Rule(
        "situation",
        re.compile(r"\b(\d)-on-(\d)(?P<plural>s)?\b"),
        _situation,
        "5-on-3 -> 'five on three'; 2-on-1s -> 'two on ones'",
    ),
    Rule(
        "situation-v",
        re.compile(r"\b(\d)\s?v\s?(\d)(?P<plural>s)?\b"),
        _situation,
        "5v5 / 11 v 11 -> 'five on five'",
    ),
    Rule(
        "decade",
        re.compile(r"\b((?:1[6-9]|20)\d0|[2-9]0)s\b"),
        _decade,
        "1970s -> 'nineteen seventies'; 80s -> 'eighties'",
    ),
    Rule(
        "currency",
        re.compile(
            r"\$(?P<low>\d+(?:,\d{3})*(?:\.\d+)?)"
            r"(?:\s?[–-]\s?\$?(?P<high>\d+(?:,\d{3})*(?:\.\d+)?))?"
            r"(?:\s(?P<magnitude>million|billion|thousand))?"
        ),
        _currency,
        "$120-150 -> 'one hundred and twenty to one hundred and fifty dollars'",
    ),
    Rule(
        "currency-sterling",
        re.compile(
            r"£(?P<low>\d+(?:,\d{3})*(?:\.\d+)?)"
            r"(?:\s?[–-]\s?£?(?P<high>\d+(?:,\d{3})*(?:\.\d+)?))?"
            r"(?:\s(?P<magnitude>million|billion|thousand))?"
            # getting_started.md quotes a source verbatim as '£5.00GBP' and
            # '£20.00GBP'. Absorb the ISO code: without this the expansion butts
            # straight against it and Polly reads 'poundsGBP' as one word.
            r"(?:\s?GBP)?"
        ),
        _currency_sterling,
        "£5 -> 'five pounds'; £5.00GBP -> 'five pounds'; the registration fees "
        "quoted in getting_started.md",
    ),
    Rule(
        "season-slash",
        re.compile(r"\b((?:19|20)\d{2})/(\d{2}|\d{4})\b"),
        _season,
        "2025/26 -> 'twenty twenty-five to twenty twenty-six'",
    ),
    Rule(
        "ratio-slash",
        # The trailing " is excluded so 7/16" stays with the inch-fraction rule.
        re.compile(r"(?<![\w./])(\d{1,3})/(\d{1,3})(?![\w./\"])"),
        lambda m: f"{int_to_words(int(m.group(1)))} {int_to_words(int(m.group(2)))}",
        "50/50 -> 'fifty fifty'; 24/7 -> 'twenty-four seven'",
    ),
    Rule(
        "date-day-month",
        re.compile(rf"\b(\d{{1,2}})\s({'|'.join(MONTHS)})(?:\s(\d{{4}}))?\b"),
        _day_month,
        "1 September -> 'the first of September'",
    ),
    Rule(
        "date-month-year",
        re.compile(rf"\b({'|'.join(MONTHS)})\s(\d{{4}})\b"),
        _month_year,
        "December 2014 -> 'December twenty fourteen'",
    ),
    Rule(
        "formation",
        re.compile(r"(?<![\d-])(\d)-(\d)-(\d)(?![\d-])"),
        _formation,
        "1-3-1 -> 'one three one' (a shape, not arithmetic)",
    ),
    Rule(
        "season-span",
        # ⚠️ TWO seasons joined by "to". `season-range` expands EACH of them to
        # "<year> to <year>", so "2007-08 to 2014-15" reached the listener as
        # "two thousand and seven TO two thousand and eight TO twenty fourteen
        # TO twenty fifteen" -- four years and three "to"s, with nothing marking
        # which pair is a season and which join is the span. Found by an agent
        # reading a rendered value aloud; no checker sees it.
        #
        # Must run BEFORE `season-range`, which would otherwise claim each half.
        # "through" is the span marker because "to" is already doing the
        # within-season work and cannot also carry the between-season sense.
        #
        # ⚠️ SCOPE, deliberately narrow: hyphens and two-digit second halves
        # only -- i.e. the season form this corpus writes. It does NOT cover
        # `2007–2009 to 2008–2010` (EN DASHES, four-digit halves), which is
        # `rules_primer.md`'s BIRTH-YEAR BAND for an age category, not a season.
        # That one has the same chained-"to" artefact and one live site, and the
        # fix there is to reword the sentence rather than to teach this rule a
        # second shape it would then apply to every four-digit numeric range in
        # the corpus. Recorded so the next reader does not widen the pattern
        # and quietly turn spans of measurements into "seasons".
        re.compile(
            r"\b(?P<a1>(?:19|20)\d{2})-(?P<a2>\d{2}|\d{4})\s+to\s+"
            r"(?P<b1>(?:19|20)\d{2})-(?P<b2>\d{2}|\d{4})\b"
        ),
        _season_span,
        "2007-08 to 2014-15 -> 'the two thousand and seven to two thousand and "
        "eight season through to the twenty fourteen to twenty fifteen season'",
    ),
    Rule(
        "season-range",
        re.compile(r"\b((?:19|20)\d{2})-(\d{2}|\d{4})\b"),
        _season,
        "2005-06 -> 'two thousand and five to two thousand and six'",
    ),
    Rule(
        "clock-range",
        re.compile(r"(?<![\d:])(\d{1,3}):(\d{2})\u2013(\d{1,3}):(\d{2})(?![\d:])"),
        _clock_range,
        "0:39-0:41 reads as 'to', not as a pause",
    ),
    Rule(
        "volume-pages",
        re.compile(r"(?<![\d:])(\d{1,3}):(\d{1,4})\u2013(\d{1,4})(?![\d:])"),
        _volume_pages,
        "journal 11:34-41 is a page range, not eleven minutes thirty-four seconds",
    ),
    Rule(
        "time-of-day",
        # ⚠️ MUST RUN BEFORE `clock-time`. Found 2 September 2026 by a reviewer
        # that rendered the corpus and READ the output -- no checker renders, and
        # the Markdown reads perfectly. `10:45pm` is currently the only wall-clock
        # time in `content/`, so the exposure was two lines; the rule exists so
        # the next one is not a non-word either.
        re.compile(r"(?<![\d:.])(\d{1,2}):(\d{2})\s?([ap])\.?m\.?\b", re.IGNORECASE),
        _time_of_day,
        "10:45pm -> 'ten forty-five p m', not 'ten minutes forty-five secondspm'",
    ),
    Rule(
        "clock-time",
        # ⚠️ The lookbehind excludes a DOT as well as a digit and a colon, because
        # a standards number ends in one: `CSA Z262.1:15` was voiced as "CSA Z two
        # hundred and sixty-two.one MINUTE FIFTEEN SECONDS" -- the year suffix of
        # a CSA standard read as a game clock, in the equipment document's
        # certification section, where it is unintelligible. `alphanumeric-code`
        # owns that form but runs later and never got the chance.
        #
        # A real clock time is never preceded by a dot: a sentence-final period is
        # followed by a space, and "2:00" after "Fig." would be a citation anyway.
        # ⚠️ AND NEVER FOLLOWED BY am/pm -- THAT IS A TIME OF DAY, NOT A CLOCK.
        # Found 2 September 2026 by a reviewer that rendered the corpus and read
        # the output. `forechecking_systems.md` says "the one everybody actually
        # remembers at 10:45pm on a Tuesday", in the body AND in a ```facts value
        # voiced alone with a 300 ms break either side. It came out as
        # **"ten minutes forty-five secondspm"** -- a non-word, in the layer with
        # no surrounding context to repair it.
        #
        # A corpus-wide search confirms `10:45pm` is the ONLY wall-clock time in
        # `content/`, so those two lines were the entire exposure -- but the rule
        # would have mangled the next one too, and nothing would have caught it:
        # no checker renders, and the Markdown reads perfectly.
        re.compile(r"(?<![\d:.])(\d{1,3}):(\d{2})(\.\d+)?(?![\d:])(?!\s?[ap]\.?m\.?\b)",
                   re.IGNORECASE),
        _clock,
        "2:00 -> 'two minutes'; 1:01.4 -> 'one minute one point four seconds'",
    ),
    Rule(
        "confidence-interval",
        re.compile(
            r"(?:(?P<level>\d{2,3})\s?%\s*(?:CI|confidence interval)\s*(?:=\s*)?)?"
            r"\[\s*(?P<low>[+\-−]?\d+(?:\.\d+)?)(?P<pct1>%)?\s*,\s*"
            r"(?P<high>[+\-−]?\d+(?:\.\d+)?)(?P<pct2>%)?\s*\]"
        ),
        _confidence_interval,
        "95% CI = [5.3%, 12.1%] -> 'with a ninety-five percent confidence "
        "interval from ... to ...'",
    ),
    Rule(
        "statistic",
        re.compile(
            rf"(?<![\w])(?P<symbol>{_GREEK_ALT}|[rgdptzFR])\s?=\s?"
            r"(?P<value>[+\-−]?\d+(?:\.\d+)?)"
        ),
        _statistic,
        "r = +0.25 -> 'r equals plus nought point two five'",
    ),
    Rule(
        "feet-inches-abbrev",
        # ⚠️ Must run BEFORE the generic unit rules, which expand `ft` and leave
        # `in` untouched. Anchored on `ft` so the bare word `in` is never a unit.
        re.compile(r"\b(?P<ft>\d{1,2})\s?ft\s(?P<inch>\d{1,2})\s?in\b"),
        _feet_inches_abbrev,
        "4 ft 6 in -> 'four feet six inches'; without it the listener got "
        "'four feet six in', because `in` is not and must not be a unit",
    ),
    Rule(
        "feet-inches",
        # The inch part is required, so the parenthesised-minutes notation
        # "(5')" is left to its own rule.
        re.compile(r"\b(?P<ft>\d{1,2})'(?P<inch>\d{1,2})\"?"),
        _feet_inches,
        "6'4\" -> 'six foot four inches'. Both marks were reaching the "
        "listener raw, as \"six'four\"\".",
    ),
    Rule(
        "inch-fraction",
        re.compile(r"\b(\d{1,2})/(\d{1,2})\""),
        _inch_fraction,
        '7/16" -> "seven sixteenths of an inch"',
    ),
    Rule(
        "vulgar-inch",
        re.compile(rf"({_FRACTION_ALT})\""),
        _vulgar_inch,
        '3/8" as a vulgar fraction glyph',
    ),
    Rule(
        "bare-inch",
        # Runs after both fraction rules, which own the digits in 7/16" and
        # would otherwise lose them to this rule's 16".
        # The range arm exists because a range whose unit is the inch mark lost
        # its "to": 38-44" was voiced as "thirty-eight forty-four inches" while
        # "38-44 inches" was already correct. The inch mark was a unit nowhere.
        re.compile(
            r"(?<![\w/.])(?P<n>\d{1,3})"
            r"(?:\s?[\u2013\u2014-]\s?(?P<n2>\d{1,3}))?\""
        ),
        _bare_inch,
        '65" -> "sixty-five inches"; 38-44" -> "thirty-eight to forty-four '
        'inches". Not the closing quote in \'"60 x 30" is not the IIHF '
        'standard\'.',
    ),
    Rule(
        "parenthesised-minutes",
        re.compile(r"(?P<lead>(?:penalt(?:y|ies)|minor|major|misconduct|minute)\s+)"
                   r"\((?P<n>\d{1,3})'\)", re.IGNORECASE),
        _paren_minutes,
        "major (5') -> 'major (five minutes)' — the IIHF's minute prime, not feet",
    ),
    Rule(
        "parenthesised-feet",
        re.compile(r"\((\d{1,3})'\)"),
        _paren_feet,
        "two feet (2') -> 'two feet (two feet)' as quoted from the rulebook",
    ),
    Rule(
        "dimension",
        re.compile(
            rf"(?P<a>\d+(?:\.\d+)?)(?:\s?(?P<aunit>{_DIMENSION_UNIT_ALT})\b)?"
            rf"\s?×\s?(?={_DIMENSION_OPERAND})"
        ),
        _dimension,
        "8 x 15 inches -> 'eight by fifteen inches'; 56 m x 26 m -> "
        "'fifty-six metres by twenty-six metres'",
    ),
    Rule(
        "repetitions",
        re.compile(r"(?P<a>\d+(?:\.\d+)?)\s?×\s?(?=\d)"),
        _repetitions,
        "8 x 40 seconds -> 'eight times forty seconds'",
    ),
    Rule(
        "multiplier",
        re.compile(r"(\d+(?:\.\d+)?)×"),
        _multiplier,
        "1.08x -> 'one point nought eight times'",
    ),
    Rule(
        "range-with-spelled-unit",
        re.compile(
            rf"(?<![\w.]){_APPROX}(?P<low>\d+(?:\.\d+)?)\s?[–—-]\s?"
            rf"(?P<high>\d+(?:\.\d+)?)\s(?P<unit>{_SPELLED_UNITS})(?![\w])"
        ),
        _range_with_spelled_unit,
        "30-35 seconds -> 'thirty to thirty-five seconds'",
    ),
    Rule(
        "range-with-unit-spaced",
        re.compile(
            rf"{_APPROX}(?P<low>\d+(?:\.\d+)?)\s?[–—-]\s?"
            rf"(?P<high>\d+(?:\.\d+)?)\s(?P<unit>{_UNITS_ALT})(?![\w])"
        ),
        _range_with_unit,
        "30-80 s -> 'thirty to eighty seconds'",
    ),
    Rule(
        "range-with-unit-tight",
        re.compile(
            rf"{_APPROX}(?P<low>\d+(?:\.\d+)?)\s?[–—-]\s?"
            rf"(?P<high>\d+(?:\.\d+)?)(?P<unit>{_UNITS_TIGHT})(?![\w])"
        ),
        _range_with_unit,
        "95-114° -> 'ninety-five to one hundred and fourteen degrees'",
    ),
    Rule(
        "number-with-unit-spaced",
        re.compile(
            rf"{_APPROX}(?P<value>\d+(?:,\d{{3}})*(?:\.\d+)?)"
            rf"(?P<frac>{_FRACTION_ALT})?\s(?P<unit>{_UNITS_ALT})(?![\w])"
        ),
        _number_with_unit,
        "~45 s -> 'about forty-five seconds'",
    ),
    Rule(
        "number-with-unit-tight",
        re.compile(
            rf"{_APPROX}(?P<value>\d+(?:,\d{{3}})*(?:\.\d+)?)"
            rf"(?P<frac>{_FRACTION_ALT})?(?P<unit>{_UNITS_TIGHT})(?![\w])"
        ),
        _number_with_unit,
        "78.8% -> 'seventy-eight point eight percent'",
    ),
    Rule(
        "number-with-fraction",
        re.compile(rf"\b(\d{{1,3}})({_FRACTION_ALT})"),
        _number_with_fraction,
        "1 1/2 sizes -> 'one and a half sizes'",
    ),
    Rule(
        "percent-after-word",
        re.compile(r"\b([A-Za-z]{2,6})%"),
        _percent_after_word,
        "CF% -> 'CF percent'",
    ),
    Rule(
        "age-group-u-first",
        re.compile(r"\bU(\d{1,2})\b"),
        _age_group_u_first,
        "U13 -> 'under thirteen'",
    ),
    Rule(
        "age-group-u-last",
        re.compile(r"\b(\d{1,2})U\b"),
        _age_group_u_last,
        "16U -> 'sixteen U'",
    ),
    Rule(
        "role-label-series",
        re.compile(r"\b[FD][123](?:\s*/\s*[FD][123])+\b"),
        _role_label_series,
        "F1/F2/F3 -> 'F one, F two and F three' (simultaneous roles, not a "
        "choice between them)",
    ),
    Rule(
        "forward-label",
        re.compile(r"\b([FD])([123])\b"),
        _forward_label,
        "F1 -> 'F one'",
    ),
    Rule(
        "optional-plural",
        re.compile(r"\b([A-Za-z]{2,})\(s\)"),
        _optional_plural,
        "glove(s) -> 'gloves'",
    ),
    Rule(
        "ordinal-suffix",
        re.compile(r"\b(\d{1,2})(?:st|nd|rd|th)\b"),
        _ordinal_suffix,
        "19th -> 'nineteenth'",
    ),
    Rule(
        "compound-en-dash",
        re.compile(r"(?<!\w)[A-Za-z]+(?:\u2013[A-Za-z]+)+(?!\w)"),
        _compound_en_dash,
        "east-west reads as one word; 640(b-f) reads as 'b to f'",
    ),
    Rule(
        "numeric-range",
        re.compile(r"(?<![\w.])(\d+(?:\.\d+)?)\s?–\s?(\d+(?:\.\d+)?)(?![\w.])"),
        _en_dash_range,
        "en-dash between numbers reads as 'to'",
    ),
    Rule(
        "clock-hour",
        re.compile(r"\b(\d{1,2})\s?([ap]\.?m\.?)\b", re.I),
        _clock_hour,
        "11pm -> 'eleven p m'",
    ),
    Rule(
        "leading-decimal",
        re.compile(r"(?<![\w.])\.(\d{2,3})\b"),
        _leading_decimal,
        ".920 save percentage -> 'point nine two zero'",
    ),
    Rule(
        "spell-out-acronym",
        re.compile(r"\b(?:" + "|".join(SPELL_OUT) + r")\b"),
        _spell_out,
        "acronyms Polly would otherwise try to pronounce as words",
    ),
    Rule(
        "plural-number",
        re.compile(r"\b(\d{1,4})s\b"),
        lambda m: _pluralise(int_to_words(int(m.group(1)))),
        "under-18s -> 'under eighteens'; 404s -> 'four hundred and fours'",
    ),
    Rule(
        "alphanumeric-code",
        # ⚠️ The optional `:\d{1,4}` tail is the EDITION SUFFIX of a standards
        # number -- `CSA Z262.1:15`. Without it the code was split: the letters
        # and digits were voiced here and the `:15` was left for `clock-time`,
        # which read it as a game clock ("...point one MINUTE FIFTEEN SECONDS").
        # Guarding `clock-time` alone was not enough: the colon then reached the
        # listener as a raw character, which is the defect this file exists to
        # prevent. Swallowing the tail here lets `_alphanumeric_code`'s run-splitter
        # drop the colon and speak the parts, which is how a person reads it.
        #
        # It cannot eat a real clock time: the letters and digits must be
        # CONTIGUOUS, so "period 2:00" does not match -- the space breaks it.
        re.compile(
            r"\b(?:[A-Za-z]{1,6}\d+(?:\.\d+)?[A-Za-z]{0,4}"
            r"|\d+(?:\.\d+)?[A-Za-z]{1,4})(?::\d{1,4})?\b"
        ),
        _alphanumeric_code,
        "product and standard codes: CRT6 -> 'C R T six'; CSA Z262.1:15 -> "
        "'... Z two hundred and sixty-two point one fifteen'",
    ),
    Rule(
        "identifier-digits",
        # An UNCOMMAED run of seven or more digits. Censused across content/
        # before this was added: every such run is an identifier -- NHL game IDs,
        # PMIDs, DOI fragments, archive timestamps, URL path segments, ddmmyyyy
        # dates. NOT ONE is a quantity, because this corpus writes large
        # quantities with thousands separators, which this pattern excludes.
        #
        # The game-ID range 2024020001-2024020400 was voicing as "two thousand
        # and twenty-four MILLION twenty thousand and one to ...", in the
        # paragraph that sources the net-front penalty analysis.
        re.compile(r"(?<![\w.,])(?P<digits>\d{7,})(?![\w.,]*\d)"),
        _identifier_digits,
        "2024020001 -> 'two zero two four zero two zero zero zero one'. The "
        "general number rule read a game ID as a quantity in the millions.",
    ),
    Rule(
        "bare-number",
        re.compile(r"(?<![\w.])\d+(?:,\d{3})*(?:\.\d+)?(?![\w])"),
        _bare_number,
        "any remaining number; years read as years",
    ),
)


#: LEXICON entries that must not fire inside a quotation, and what they become
#: there instead.
#:
#: ⚠️ WHY. LEXICON is a plain `str.replace` with no awareness of quotation
#: marks, so `("etc.", "and so on")` rewrote the INSIDE of quoted rulebook text.
#: A listener heard IIHF Rule 48.1 as "(for example shooting, making or
#: receiving a pass, AND SO ON)" -- words the rulebook does not contain, inside
#: quotation marks, in a corpus whose first non-negotiable is never to fabricate
#: a quote. Measured across `content/`: 43 quoted spans in 16 documents contain
#: one of these three.
#:
#: ⚠️ THE DISTINCTION THAT DECIDES THIS, because it is not "never expand an
#: abbreviation". Any spoken rendering of "etc." is an expansion -- silence is
#: not an option and the letters cannot be voiced. The question is whether the
#: expansion is a PRONUNCIATION or a TRANSLATION:
#:
#:   * "e.g." -> "for example" and "i.e." -> "that is" are how these are READ
#:     ALOUD in English. Nobody says "ee-jee". Reading them this way inside a
#:     quotation is what a person reading the rulebook aloud would do, so they
#:     are left alone.
#:   * "etc." -> "and so on" is a PARAPHRASE. The pronunciation is "et cetera".
#:     Inside a quotation the pronunciation is the honest choice; outside one,
#:     "and so on" is friendlier and costs nothing.
#:
#: So only `etc.` is remapped, and it is remapped rather than skipped -- leaving
#: the literal string would hand the TTS engine a token to guess at, which is
#: how a defect gets traded for a different defect.
QUOTED_LEXICON = {
    "etc.": "et cetera",
}


def split_quoted(text: str) -> list[tuple[str, bool]]:
    """Split on `"` into (segment, is_inside_quotation) pairs.

    ⚠️ An UNBALANCED quote mark makes the trailing segment count as inside.
    That is deliberate and it is the safe direction: the cost of a false
    positive is `etc.` voiced "et cetera" in ordinary prose, which is merely
    formal. The cost of a false negative is fabricated wording inside quotation
    marks, which is non-negotiable 1.

    Only the straight `"` is a delimiter. The corpus normalises to straight
    quotes; a curly pair that slipped through fails safe by not opening a span.
    """
    return [(seg, i % 2 == 1) for i, seg in enumerate(text.split('"'))]


def apply_lexicon(text: str, counter: Counter) -> str:
    # Fast path: nothing quotation-sensitive present, so do not pay for the split.
    if not any(k in text for k in QUOTED_LEXICON):
        for source, target in LEXICON:
            if source in text:
                counter["lexicon." + source.strip()] += text.count(source)
                text = text.replace(source, target)
        return text

    out = []
    for segment, quoted in split_quoted(text):
        for source, target in LEXICON:
            if source not in segment:
                continue
            if quoted and source in QUOTED_LEXICON:
                target = QUOTED_LEXICON[source]
                counter["lexicon.quoted." + source.strip()] += segment.count(source)
            else:
                counter["lexicon." + source.strip()] += segment.count(source)
            segment = segment.replace(source, target)
        out.append(segment)
    return '"'.join(out)


def apply_symbols(tokens: list[Token], counter: Counter) -> list[Token]:
    out: list[Token] = []
    for token in tokens:
        if token.kind != RAW:
            out.append(token)
            continue
        text = token.text
        for source, target in SYMBOLS:
            if source in text:
                # unicodedata.name() takes one character. Some entries are a
                # grapheme cluster rather than a codepoint — 🇬🇧 is two regional
                # indicators — so name the cluster by its parts.
                label = (
                    unicodedata.name(source, source)
                    if len(source) == 1
                    else "+".join(unicodedata.name(ch, ch) for ch in source)
                )
                counter["symbol." + label] += text.count(source)
                text = text.replace(source, target)
        for source, target in FRACTIONS:
            if source in text:
                counter["fraction." + target] += text.count(source)
                text = text.replace(source, " " + target)
        for source, target in GREEK:
            if source in text:
                counter["greek." + target] += text.count(source)
                text = text.replace(source, target)
        out.extend(raw(text))
    return out


RE_SPACE_BEFORE_PUNCT = re.compile(r"[ \t]+([,.;:!?])")
RE_REPEATED_PUNCT = re.compile(r",\s*,")


def normalise_whitespace(tokens: list[Token]) -> list[Token]:
    out: list[Token] = []
    for token in tokens:
        if token.kind == SSML:
            out.append(token)
            continue
        text = re.sub(r"[ \t]+", " ", token.text)
        text = RE_SPACE_BEFORE_PUNCT.sub(r"\1", text)
        text = RE_REPEATED_PUNCT.sub(",", text)
        out.append(Token(token.kind, text))
    return tidy_boundaries(out)


def tidy_boundaries(tokens: list[Token]) -> list[Token]:
    """Drop a trailing space where the next token starts with punctuation.

    Rules produce tokens independently, so a space and the punctuation that
    should follow it can end up on either side of a token boundary.
    """
    out = list(tokens)
    for index in range(len(out) - 1):
        left, right = out[index], out[index + 1]
        if left.kind == SSML or right.kind == SSML:
            continue
        if left.text.endswith((" ", "\t")) and right.text[:1] and right.text[0] in ",.;:!?":
            out[index] = Token(left.kind, left.text.rstrip(" \t"))
    return out


def to_speech(text: str, counter: Counter) -> list[Token]:
    """Full inline pipeline: markdown -> notation -> symbols -> tokens."""
    text = strip_inline_markdown(text, counter)
    text = apply_lexicon(text, counter)
    tokens: list[Token] = raw(text)
    for rule in NOTATION_RULES:
        tokens = apply_rule(tokens, rule, counter)
    tokens = apply_symbols(tokens, counter)
    tokens = normalise_whitespace(tokens)
    return [t for t in tokens if t.text]


def find_residue(tokens: Sequence[Token]) -> list[str]:
    """Anything a rule did not claim and that is not plain prose."""
    findings: list[str] = []
    for token in tokens:
        if token.kind != RAW:
            continue
        for index, char in enumerate(token.text):
            if char in ALLOWED_RESIDUE:
                continue
            context = token.text[max(0, index - 30):index + 30].strip()
            name = unicodedata.name(char, f"U+{ord(char):04X}")
            findings.append(f"{name} in: ...{context}...")
    return findings


#: Closers that can stand between a full stop and the end of a paragraph.
SENTENCE_CLOSERS = "\"'’”)]"


def finalise_sentence(text: str) -> str:
    """Give a fragment terminal punctuation so the voice lands on it.

    Only the right-hand end is trimmed. Leading whitespace is significant:
    this is applied to the last token of a paragraph, and that token usually
    begins mid-sentence, immediately after a token a rule produced.

    A paragraph that ends on a quotation mark or a closing bracket usually
    carries its full stop *inside* it — "... not a published count of calls.)"
    — and only the last character was inspected, so a second stop was appended
    and the voice landed on "calls.)." Look past the closers before deciding.
    """
    text = text.rstrip()
    if not text:
        return text
    if text[-1] in ".!?:;…":
        return text
    if text[-1] in ",—-":
        return text[:-1].rstrip() + "."
    core = text.rstrip(SENTENCE_CLOSERS)
    if core and core[-1] in ".!?…":
        return text
    return text + "."


# ==========================================================================
# 6. Block parsing
# ==========================================================================

@dataclass
class Block:
    kind: str          # heading | paragraph | list | table | code | hrule
    lines: list[str]
    line_number: int
    level: int = 0
    ordered: bool = False


def parse_blocks(text: str) -> list[Block]:
    lines = text.split("\n")
    blocks: list[Block] = []
    index = 0
    total = len(lines)

    while index < total:
        line = lines[index]
        stripped = line.strip()

        if not stripped:
            index += 1
            continue

        if stripped.startswith("```"):
            start = index
            index += 1
            while index < total and not lines[index].strip().startswith("```"):
                index += 1
            index += 1  # closing fence
            blocks.append(Block("code", lines[start:index], start + 1))
            continue

        if re.fullmatch(r"(-{3,}|\*{3,}|_{3,})", stripped):
            blocks.append(Block("hrule", [line], index + 1))
            index += 1
            continue

        heading = re.match(r"^(#{1,6})\s+(.*)$", stripped)
        if heading:
            blocks.append(
                Block("heading", [heading.group(2)], index + 1, len(heading.group(1)))
            )
            index += 1
            continue

        if stripped.startswith("|"):
            start = index
            while index < total and lines[index].strip().startswith("|"):
                index += 1
            blocks.append(Block("table", lines[start:index], start + 1))
            continue

        if stripped.startswith(">"):
            start = index
            while index < total and (
                lines[index].strip().startswith(">") or
                (lines[index].strip() and blocks_continue_quote(lines, index))
            ):
                index += 1
            blocks.append(Block("quote", lines[start:index], start + 1))
            continue

        list_match = re.match(r"^\s*(?:[-*+]|\d+[.)])\s+", line)
        if list_match:
            start = index
            ordered = bool(re.match(r"^\s*\d+[.)]\s+", line))
            while index < total:
                current = lines[index]
                if not current.strip():
                    # A blank line ends the list unless the next line continues it.
                    nxt = lines[index + 1] if index + 1 < total else ""
                    if not re.match(r"^\s*(?:[-*+]|\d+[.)])\s+", nxt):
                        break
                    index += 1
                    continue
                if re.match(r"^\s*(?:[-*+]|\d+[.)])\s+", current) or current.startswith(("  ", "\t")):
                    index += 1
                    continue
                break
            blocks.append(Block("list", lines[start:index], start + 1, ordered=ordered))
            continue

        start = index
        while index < total and lines[index].strip() and not _starts_new_block(lines[index]):
            index += 1
        if index == start:
            index += 1
        blocks.append(Block("paragraph", lines[start:index], start + 1))

    return blocks


def blocks_continue_quote(lines: list[str], index: int) -> bool:
    """Lazy continuation lines inside a blockquote."""
    if index == 0:
        return False
    return lines[index - 1].strip().startswith(">") and not _starts_new_block(lines[index])


def _starts_new_block(line: str) -> bool:
    stripped = line.strip()
    return bool(
        stripped.startswith(("#", "|", ">", "```")) or
        re.match(r"^\s*(?:[-*+]|\d+[.)])\s+", line) or
        re.fullmatch(r"(-{3,}|\*{3,}|_{3,})", stripped)
    )


# ==========================================================================
# 7. Document model
# ==========================================================================

@dataclass
class Chunk:
    section: str
    tokens: list[Token] = field(default_factory=list)


@dataclass
class DocReport:
    doc_id: str
    source: str
    title: str = ""
    dropped: Counter = field(default_factory=Counter)
    converted: Counter = field(default_factory=Counter)
    tables_as_prose: int = 0
    tables_as_pointer: list[str] = field(default_factory=list)
    residue: list[str] = field(default_factory=list)
    #: Verification paragraphs deleted from the audio, with their opening words.
    #: ⚠️ A paragraph is dropped when its text STARTS with a marker, so
    #: "Unverified: X" is silently deleted while "This is unverified, but X" is
    #: voiced. Nothing used to warn an author which side of that line they were
    #: on, and no checker sees it — a census found the corpus's integrity labels
    #: vanishing from the audio precisely where they were written most directly.
    dropped_verification: list[str] = field(default_factory=list)
    #: Chunks still over the SERVICE's hard limits after every split was tried.
    #: ⚠️ These produce NO AUDIO -- SynthesizeSpeech refuses the request. The
    #: renderer used to emit them silently and exit 0.
    oversized: list[tuple[str, int, int]] = field(default_factory=list)
    #: Paragraphs rescued at a clause boundary because they carried no sentence
    #: end. The audio exists; the listener hears a break placed mid-sentence.
    clause_split: list[str] = field(default_factory=list)
    chunks: int = 0
    billed_chars: int = 0


def is_verification_paragraph(text: str) -> str | None:
    lowered = strip_for_classification(text).lower()
    for marker, label in VERIFICATION_MARKERS:
        if lowered.startswith(marker):
            return label
    return None


def is_sources_paragraph(text: str) -> bool:
    return strip_for_classification(text).lower().startswith(SOURCES_MARKER)


# -- block renderers --------------------------------------------------------

def render_paragraph(text: str, report: DocReport) -> list[Token]:
    important = "⚠" in text
    tokens = to_speech(text, report.converted)
    report.residue.extend(find_residue(tokens))
    spoken = plain(tokens).strip()
    if not spoken:
        return []
    prefix: list[Token] = []
    if important:
        report.converted["callout.important"] += 1
        prefix = done("Important. ")
    body = _retokenise_trimmed(tokens)
    return [Token(SSML, "<p>")] + prefix + body + [Token(SSML, "</p>")]


def _retokenise_trimmed(tokens: list[Token]) -> list[Token]:
    """Trim leading/trailing space and ensure the fragment ends in punctuation."""
    tokens = [t for t in tokens if t.text]
    if not tokens:
        return []
    out = list(tokens)
    # left trim
    for index, token in enumerate(out):
        if token.kind == SSML:
            break
        stripped = token.text.lstrip()
        out[index] = Token(token.kind, stripped)
        if stripped:
            break
    # right trim + terminal punctuation on the last textual token
    for index in range(len(out) - 1, -1, -1):
        token = out[index]
        if token.kind == SSML:
            continue
        stripped = token.text.rstrip()
        if stripped:
            out[index] = Token(token.kind, finalise_sentence(stripped))
            break
        out[index] = Token(token.kind, "")
    return [t for t in out if t.text]


def render_list(block: Block, report: DocReport) -> list[Token]:
    items = _list_items(block.lines)
    if not items:
        return []
    # One <p> per item, with a short break between: reads as a list without
    # anyone saying "bullet", and keeps each item independently splittable
    # when a chunk has to be divided for Polly.
    out: list[Token] = []
    for position, item in enumerate(items, start=1):
        important = "⚠" in item
        tokens = to_speech(item, report.converted)
        report.residue.extend(find_residue(tokens))
        if not plain(tokens).strip():
            continue
        if out:
            out.append(Token(SSML, f'<break time="{BREAK_LIST_ITEM}"/>'))
        out.append(Token(SSML, "<p>"))
        if important:
            report.converted["callout.important"] += 1
            out.extend(done("Important. "))
        if block.ordered:
            out.extend(done(ordinal_to_words(position).capitalize() + ", "))
        out.extend(_retokenise_trimmed(tokens))
        out.append(Token(SSML, "</p>"))
    if out:
        report.converted["list"] += 1
    return out


def _label_lead(label: str) -> str:
    """How a facts label is spoken before its value.

    Most labels are nouns — "Key.", "Rule.", "Action." — and a full stop after
    them is right: the label names the row, then the row is read.

    ``Never`` is not a noun. It is a negation that has to govern the clause
    after it, and a full stop stops it governing. "Never: Hit a player who is
    turned toward the boards" was rendering as "Never. Hit a player who is
    turned toward the boards." — a terminated word, then a bare imperative
    telling the listener to do the thing the corpus is prohibiting. 342 of the
    495 ``Never:`` facts open with an imperative verb, so this was the majority
    case, and it landed on checking from behind, on concussion self-assessment
    and on how to fall.

    An em dash keeps the pause and drops the full stop, so the negation still
    reaches the verb.
    """
    if label.strip().lower() == "never":
        return label + " \u2014 "
    return label + ". "


def render_facts(block: Block, report: DocReport) -> list[Token]:
    """Read a ```facts block aloud.

    Until this existed, every fenced block — including all 764 facts blocks —
    was announced as "A diagram appears here… it cannot be read aloud." Two
    things were wrong with that. The blocks are not diagrams, they are prose;
    and they are the layer the corpus puts its most load-bearing sentences in,
    including 424 fact lines that carry a penalty, an injury or a prohibition.
    So the one layer three review rounds reasoned about as "what a listener
    hears with no surrounding context" was the only layer the listener never
    heard at all.

    Rendering: a short lead-in, then one <p> per fact, the label spoken as its
    own clause.

    An earlier version of this docstring claimed "Never: lunge" reads naturally
    as "Never. Lunge." because the labels were chosen as imperatives. That was
    exactly backwards, and it stood here certifying the defect while rounds 28
    and 29 were recording it. The imperative form is what makes it FAIL: a full
    stop terminates the negation, and what the listener then hears is a bare
    instruction to do the prohibited thing. Measured in round 53: 342 of 495
    ``Never:`` facts open with an imperative verb, and the rendering landed on
    checking from behind, on concussion self-assessment and on how to fall.
    ``_label_lead`` handles it; noun labels keep the full stop.
    """
    rows: list[tuple[str, str]] = []
    for line in block.lines[1:-1]:          # strip the opening and closing fence
        if not line.strip():
            continue
        match = re.match(r"^([A-Z][A-Za-z ]*?):\s+(.+)$", line.strip())
        if match:
            rows.append((match.group(1), match.group(2)))
        else:
            # A continuation or a malformed line: read it, do not drop it.
            rows.append(("", line.strip()))
    if not rows:
        return []

    out: list[Token] = [Token(SSML, "<p>")]
    out.extend(done("The key facts for this section. "))
    out.append(Token(SSML, "</p>"))
    for label, value in rows:
        # ⚠️ The warning glyph maps to "" in SYMBOLS, so until this existed it
        # was deleted from the facts layer and NOTHING replaced it -- while
        # render_paragraph and render_list both said "Important." for the same
        # glyph. Ten facts values carry it, and every one is a rule-set
        # divergence or a penalty. The emphasis was being dropped in the layer
        # the style guide calls the most load-bearing, and in the only layer
        # that is voiced entirely alone.
        important = "⚠" in value
        tokens = to_speech(value, report.converted)
        report.residue.extend(find_residue(tokens))
        if not plain(tokens).strip():
            continue
        out.append(Token(SSML, f'<break time="{BREAK_LIST_ITEM}"/>'))
        out.append(Token(SSML, "<p>"))
        if important:
            report.converted["callout.important"] += 1
            out.extend(done("Important. "))
        if label:
            out.extend(done(_label_lead(label)))
        out.extend(_retokenise_trimmed(tokens))
        out.append(Token(SSML, "</p>"))
    report.converted["facts-block"] += 1
    return out


def _list_items(lines: Sequence[str]) -> list[str]:
    """Flatten a (possibly nested) list into one string per item."""
    items: list[str] = []
    current: list[str] = []
    for line in lines:
        if not line.strip():
            continue
        marker = re.match(r"^\s*(?:[-*+]|\d+[.)])\s+(.*)$", line)
        if marker:
            if current:
                items.append(" ".join(current))
            current = [marker.group(1).strip()]
        elif current:
            current.append(line.strip())
    if current:
        items.append(" ".join(current))
    return [item for item in items if item.strip()]


def render_quote(block: Block, report: DocReport) -> list[Token]:
    # A markdown table SEPARATOR row carries no spoken content, and a table nested
    # inside a blockquote never reaches `parse_table` (which drops these) - it falls
    # through to prose, where the symbol table turns each `|` into a comma and a
    # listener hears "dash dash dash, dash dash dash, dash dash dash". Measured in the
    # rendered corpus before this line existed. Header and body rows are kept: they
    # are the quotation's content, and a quoted table read as comma-separated cells is
    # the least-bad reading available.
    text = "\n".join(re.sub(r"^\s*>\s?", "", line) for line in block.lines)
    paragraphs = [p for p in re.split(r"\n\s*\n", text) if p.strip()]
    out: list[Token] = []
    for paragraph in paragraphs:
        lines = [line for line in paragraph.split("\n") if line.strip()]
        # ⚠️ A table nested in a blockquote used to fall through to prose, where
        # the symbol table turns every `|` into a comma. The corpus's ONLY
        # blockquoted table is the net-front penalty-enrichment table that
        # refutes the cross-checking folklore, and it was voiced as an
        # unlabelled comma stream: the column heads once, then 21 numbers with
        # nothing saying which column any of them was in.
        #
        # An earlier fix here stripped the SEPARATOR row, so the listener at
        # least stopped hearing "dash dash dash" three times -- and a comment
        # called the result "the least-bad reading available". It was not.
        # render_table's prose mode re-announces the column head before every
        # cell, and its pointer mode says plainly that the table is on the
        # website. Both are better than unlabelled numbers, and routing here
        # also puts blockquoted tables into the tables-as-prose and
        # tables-as-pointer counters, which could not see them at all.
        if len(lines) >= 2 and all(line.lstrip().startswith("|") for line in lines):
            out.extend(render_table(
                Block("table", lines, block.line_number), report
            ))
            continue
        heading = re.match(r"^\s*(#{1,6})\s+(.*)$", paragraph)
        if heading:
            # Headings do occur inside callout blockquotes.
            out.extend(render_heading(
                Block("heading", [heading.group(2)], block.line_number,
                      len(heading.group(1))),
                report,
            ))
        elif re.match(r"^\s*(?:[-*+]|\d+[.)])\s+", paragraph):
            out.extend(render_list(Block("list", paragraph.split("\n"), block.line_number), report))
        else:
            out.extend(render_paragraph(paragraph.replace("\n", " "), report))
    report.converted["blockquote"] += 1
    return out


def parse_table(lines: Sequence[str]) -> tuple[list[str], list[list[str]]]:
    rows: list[list[str]] = []
    for line in lines:
        stripped = line.strip()
        if re.fullmatch(r"\|[\s:|-]+\|", stripped):
            continue
        cells = [cell.strip() for cell in stripped.strip("|").split("|")]
        rows.append(cells)
    if not rows:
        return [], []
    return rows[0], rows[1:]


def table_is_readable(header: Sequence[str], rows: Sequence[Sequence[str]]) -> bool:
    if not rows:
        return False
    widths = {len(row) for row in rows} | {len(header)}
    if len(widths) != 1:
        return False
    if len(header) > TABLE_MAX_COLUMNS or len(rows) > TABLE_MAX_ROWS:
        return False
    longest = max(len(cell) for row in [header, *rows] for cell in row)
    return longest <= TABLE_MAX_CELL_CHARS


def render_table(block: Block, report: DocReport) -> list[Token]:
    header, rows = parse_table(block.lines)
    if not header:
        return []
    if not table_is_readable(header, rows):
        report.tables_as_pointer.append(
            f"line {block.line_number}: {len(header)} columns x {len(rows)} rows"
        )
        report.converted["table.pointer"] += 1
        return (
            [Token(SSML, "<p>")]
            + done(
                "A detailed table appears here in the written version. "
                "It does not read well aloud, so it is not narrated. "
                "The full table is on the website."
            )
            + [Token(SSML, "</p>")]
        )

    report.tables_as_prose += 1
    report.converted["table.prose"] += 1
    heading_tokens = [
        to_speech(cell, report.converted) for cell in header
    ]
    heads = [plain(t).strip().rstrip(":?") for t in heading_tokens]

    out: list[Token] = [Token(SSML, "<p>")]
    out.extend(done("The following reads as a list."))
    out.append(Token(SSML, "</p>"))

    for row in rows:
        if not any(cell.strip() for cell in row):
            continue
        out.append(Token(SSML, "<p>"))
        first = True
        for column, cell in enumerate(row):
            cell_tokens = to_speech(cell, report.converted)
            report.residue.extend(find_residue(cell_tokens))
            spoken = plain(cell_tokens).strip()
            if not spoken or spoken == "—":
                continue
            if first:
                out.extend(_retokenise_trimmed(cell_tokens))
                first = False
            else:
                out.append(Token(SSML, f'<break time="{BREAK_LIST_ITEM}"/>'))
                out.extend(done(f" {heads[column]}, " if column < len(heads) else " "))
                out.extend(_retokenise_trimmed(cell_tokens))
        out.append(Token(SSML, "</p>"))
    return out


def render_heading(block: Block, report: DocReport) -> list[Token]:
    tokens = to_speech(block.lines[0], report.converted)
    report.residue.extend(find_residue(tokens))
    if not plain(tokens).strip():
        return []
    pause = BREAK_SECTION if block.level <= 2 else BREAK_SUBSECTION
    report.converted[f"heading.h{block.level}"] += 1
    return (
        [Token(SSML, f'<break time="{pause}"/>'), Token(SSML, "<p>")]
        + _retokenise_trimmed(tokens)
        + [Token(SSML, "</p>"), Token(SSML, f'<break time="{BREAK_AFTER_HEADING}"/>')]
    )


# ==========================================================================
# 8. Document transform
# ==========================================================================

def transform_document(path: Path, doc_id: str, source_label: str) -> tuple[list[Chunk], DocReport]:
    global _CURRENT_DOC
    _CURRENT_DOC = doc_id
    report = DocReport(doc_id=doc_id, source=source_label)
    blocks = parse_blocks(path.read_text(encoding="utf-8"))

    chunks: list[Chunk] = []
    current = Chunk("(introduction)")
    chunks.append(current)

    index = 0
    total = len(blocks)
    in_sources = False
    skip_section_level = 0

    while index < total:
        block = blocks[index]
        index += 1

        if in_sources:
            report.dropped[f"after-sources.{block.kind}"] += 1
            continue

        if block.kind == "heading":
            heading_text = strip_for_classification(block.lines[0]).lower()

            if block.level == 1:
                report.title = plain(to_speech(block.lines[0], Counter())).strip()
                report.dropped["h1-replaced-by-spoken-title"] += 1
                current.tokens.extend(
                    [Token(SSML, "<p>")]
                    + done(finalise_sentence(report.title))
                    + [Token(SSML, "</p>"),
                       Token(SSML, f'<break time="{BREAK_DOC_TITLE}"/>'),
                       Token(SSML, "<p>")]
                    + done(DOC_INTRO)
                    + [Token(SSML, "</p>")]
                )
                continue

            if any(heading_text.startswith(h) for h in DROP_SECTION_HEADINGS):
                skip_section_level = block.level
                report.dropped["section.notes-on-verification"] += 1
                continue

            if skip_section_level and block.level > skip_section_level:
                report.dropped["section-body.notes-on-verification"] += 1
                continue
            skip_section_level = 0

            if block.level == 2:
                current = Chunk(plain(to_speech(block.lines[0], Counter())).strip())
                chunks.append(current)
            current.tokens.extend(render_heading(block, report))
            continue

        if skip_section_level:
            # ⚠️ The Sources trailer of two documents sits INSIDE their
            # "## Notes on verification" section, so this branch's `continue`
            # fired before the sources check below and `sources-section` never
            # incremented for them. The report said 35 documents lost their
            # trailer when the answer is 37 -- and the two it could not see are
            # precisely the two where the trailer is buried, which is where an
            # author would least expect to find it.
            #
            # Nothing about the OUTPUT changes: the section is dropped whole
            # either way. Only the count was wrong, and a count an author uses
            # to audit which documents lose a layer has to be right.
            if block.kind in ("paragraph", "quote") and is_sources_paragraph(
                re.sub(r"^\s*>\s?", "", "\n".join(block.lines), flags=re.M)
            ):
                report.dropped["sources-section"] += 1
                report.dropped["sources-section.inside-notes-section"] += 1
            else:
                report.dropped["section-body.notes-on-verification"] += 1
            continue

        if block.kind == "hrule":
            report.dropped["hrule"] += 1
            continue

        if block.kind == "code":
            # A ```facts block is prose, not a diagram — read it. Everything
            # else fenced (rink diagrams, ASCII tables) genuinely cannot be
            # spoken and keeps the placeholder below.
            if block.lines and block.lines[0].strip().lower().startswith("```facts"):
                current.tokens.extend(render_facts(block, report))
                current.tokens.append(Token(SSML, f'<break time="{BREAK_PARAGRAPH}"/>'))
                continue
            report.dropped["code-block"] += 1
            current.tokens.extend(
                [Token(SSML, "<p>")]
                + done(
                    "A diagram appears here in the written version. "
                    "It is drawn in text and cannot be read aloud. "
                    "It is on the website."
                )
                + [Token(SSML, "</p>")]
            )
            continue

        body = "\n".join(block.lines)
        classify_text = re.sub(r"^\s*>\s?", "", body, flags=re.M)

        if block.kind in ("paragraph", "quote"):
            if is_sources_paragraph(classify_text):
                in_sources = True
                report.dropped["sources-section"] += 1
                continue
            label = is_verification_paragraph(classify_text)
            if label:
                report.dropped[f"verification.{label}"] += 1
                report.dropped_verification.append(
                    " ".join(classify_text.split())[:110]
                )
                # A verification note may be followed by its own bullet list.
                if index < total and blocks[index].kind == "list":
                    report.dropped[f"verification.{label}.list"] += 1
                    index += 1
                continue

        if block.kind == "quote":
            if "rule set:" in classify_text.lower()[:40]:
                report.dropped["header-blockquote"] += 1
                continue
            current.tokens.extend(render_quote(block, report))
            current.tokens.append(Token(SSML, f'<break time="{BREAK_PARAGRAPH}"/>'))
            continue

        if block.kind == "table":
            current.tokens.extend(render_table(block, report))
            continue

        if block.kind == "list":
            current.tokens.extend(render_list(block, report))
            continue

        if block.kind == "paragraph":
            report.converted["paragraph"] += 1
            current.tokens.extend(render_paragraph(body.replace("\n", " "), report))
            continue

        report.dropped[f"unhandled.{block.kind}"] += 1

    chunks = [c for c in chunks if plain(c.tokens).strip()]
    # Snapshot the fallback log around the split so each rescued paragraph can
    # be attributed to the document it came from. _split_paragraph is several
    # calls down and has no report; tagging here is the cheapest honest way to
    # answer "which file do I fix?", and a report that cannot answer that is a
    # worklist nobody can action.
    mark = len(_CLAUSE_SPLIT_FALLBACKS)
    final = split_oversized(chunks)
    report.clause_split = list(_CLAUSE_SPLIT_FALLBACKS[mark:])
    report.oversized = oversized_after_split(final)
    return final, report


def split_oversized(chunks: Sequence[Chunk]) -> list[Chunk]:
    """Split any chunk that would exceed Polly's per-request limits.

    Splits only at top-level element boundaries (``<p>`` / ``<break>``), so a
    sentence is never cut in half.
    """
    out: list[Chunk] = []
    for chunk in chunks:
        groups: list[list[Token]] = []
        for group in _group_top_level(chunk.tokens):
            groups.extend(_split_paragraph(group) if _exceeds_limits(group) else [group])
        current: list[Token] = []
        part = 1
        for group in groups:
            candidate = current + group
            if current and _exceeds_limits(candidate):
                out.append(Chunk(_part_name(chunk.section, part), current))
                part += 1
                current = list(group)
            else:
                current = candidate
        if current:
            name = chunk.section if part == 1 else _part_name(chunk.section, part)
            out.append(Chunk(name, current))
    return out


def oversized_after_split(chunks: Sequence[Chunk]) -> list[tuple[str, int, int]]:
    """Chunks still over Polly's hard limits after every split was attempted.

    ⚠️ ``_split_paragraph`` breaks only where the previous atom ENDED A
    SENTENCE. A long semicolon or em-dash chain contains no such point, so the
    splitter finds no legal break, returns the paragraph whole, and
    ``split_oversized`` emits it anyway -- silently.

    SynthesizeSpeech REFUSES a request over 3000 billed or 6000 total
    characters, so such a chunk yields no audio at all. Nothing said so: the
    renderer exited 0, the report looked clean, and the missing audio would
    have surfaced only at synthesis time.

    Measured when this was added: 28 chunks over the billed limit, the largest
    3,496 characters, in 10 documents. ⚠️ **That diagnosis was then REFUTED** --
    the cause was `_assemble` testing one token at a time, not missing
    punctuation, and fixing it took this list to zero with no markdown change.
    See `_assemble`.

    ⚠️ **This list can still be non-empty, and there is one case nothing can
    rescue.** Verified with a synthetic paragraph of 3,839 characters carrying a
    single full stop: the clause-boundary fallback fires, is recorded, and
    **cannot split it** -- `_outer_only` re-flags the same atoms by nesting
    depth, so a paragraph that is one long token has no cut point at any tier.
    It is reported here and produces no audio.

    That is deliberate. A third tier splitting mid-word would guarantee audio at
    the cost of mangling prose, and no paragraph in the corpus needs it: the
    count is currently zero. **A loud failure an author fixes beats a quiet
    mangling nobody hears.** If this list is ever non-empty, the repair is in the
    markdown -- give the paragraph a sentence boundary.
    """
    over: list[tuple[str, int, int]] = []
    for chunk in chunks:
        billed = len(plain(chunk.tokens))
        total = len(render(chunk.tokens)) + len("<speak>\n</speak>\n")
        if billed > POLLY_BILLED_LIMIT or total > POLLY_TOTAL_LIMIT:
            over.append((chunk.section, billed, total))
    return over


#: ⚠️ The closing-quote alternative is not decoration. Without it this pattern
#: read `He said "keep the stick down." The next sentence follows.` as ONE
#: sentence -- the full stop is followed by a quotation mark, not whitespace, so
#: `(?<=[.!?…])\s+` matched nowhere in it. This corpus quotes rulebook text
#: constantly, so a large share of its sentence ends were invisible as break
#: points, and paragraphs built almost entirely of quotations had almost none.
#: RE_SENTENCE_TAIL five lines below ALREADY accepted trailing closers, so the
#: two regexes disagreed about what ends a sentence. Two fixed-width lookbehind
#: branches keep the closer with the sentence it belongs to.
#: ⚠️ U+2026 IS NOT A SENTENCE TERMINATOR HERE, and treating it as one split a
#: rulebook quotation in half across two spoken units.
#:
#: A Key Takeaway in `center.md` and `winger.md` quoted NHL 42.1 with an elision.
#: `_split_paragraph` broke at it, and the listener heard:
#:
#:   unit A ...ends "a minor, major or a major and a game misconduct …"
#:                  -- the ejection ladder, its crease condition amputated
#:   unit B  opens "on a player who charges a goalkeeper while the goalkeeper is
#:                  within his goal crease" -- an orphan clause with no subject
#:
#: ⚠️ NO CHECKER CAN SEE THIS. check_facts, check_absolutes and check_pointers
#: all pass on it; the markdown is correct and only the rendered audio is wrong.
#:
#: MEASURED BEFORE CHANGING, because a renderer change needs evidence and not an
#: intuition: U+2026 occurs 202 times in `content/`, **194 of them (96%) inside a
#: quoted span**, and **ZERO at the end of a line**. It is an elision marker in
#: this corpus and never a trailing-off. So it is removed from both patterns
#: rather than special-cased -- a quotation-depth test would be the obvious fix
#: and is the wrong one, because there is no legitimate case to preserve.
#:
#: The cost is one fewer break point in paragraphs that carry an elision, which
#: can only make a chunk longer. That is a soft failure the Polly limit check
#: already reports; splitting a rule in half is a hard one nothing reports.
#:
#: ⚠️ The closing-quote alternative below is not decoration. Without it this
#: pattern read `He said "keep the stick down." The next sentence follows.` as
#: ONE sentence -- the stop is followed by a quotation mark, not whitespace, so
#: `(?<=[.!?])\s+` matched nowhere in it. This corpus quotes rulebook text
#: constantly, so a large share of its sentence ends were invisible as break
#: points. RE_SENTENCE_TAIL below must accept exactly the same terminators, or
#: the two disagree about what ends a sentence -- which they once did.
#: ⚠️ AND AN ABBREVIATION'S FULL STOP IS NOT A SENTENCE END EITHER. `defender.md`
#: split mid-citation: one unit ended "measured by Lignell et al." and the next
#: opened "(twenty eighteen), Brocherie et al. …" -- the same defect as the
#: elision above, from the same cause, a non-terminal stop read as terminal.
#: `content/` holds **112 `et al.`, 7 `ed.`, 4 `approx.`, 2 `pp.`** -- but only the ones
#: FOLLOWED BY WHITESPACE can be break points, because this pattern matches `\s+` after
#: the stop, and that is **80, 6, 4, 2**. ⚠️ Both numbers are true of different questions
#: and an earlier version of this comment gave the second while reading as though it were
#: the first. A count is not a measurement until it says what it counted.
#:
#: ⚠️ `No.` IS DELIBERATELY ABSENT, and it is the interesting one. It occurs 31
#: times, but this corpus quotes Casebook answers -- *the Handbook answers "No."*
#: -- where the stop IS terminal. Protecting it would merge a Casebook question
#: and its answer into one spoken unit, trading this defect for a worse one.
#: Ambiguous abbreviations are left alone on purpose.
RE_SENTENCE_END = re.compile(
    r"(?:(?<=[.!?])|(?<=[.!?][\"'”’\)\]]))"
    r"(?<!et al\.)(?<!\bpp\.)(?<!\bed\.)(?<!\beds\.)(?<!approx\.)(?<!\bFig\.)(?<!\bvol\.)"
    r"\s+"
)
#: Does this piece END a sentence? Trailing quotes and brackets close after the
#: stop. Kept in step with RE_SENTENCE_END above, U+2026 excluded for the same
#: reason: a token ending in an elision is mid-quotation, not mid-sentence.
RE_SENTENCE_TAIL = re.compile(r"[.!?][\"'\u201d\u2019\)\]]*\s*$")


def _split_paragraph(group: Sequence[Token]) -> list[list[Token]]:
    """Break one oversized <p> into several, at sentence boundaries.

    Only splits where no nested element is open AND the previous atom ended a
    sentence, so the result is always well-formed and never cut mid-clause.

    ⚠️ The second condition was missing, and the promise above was false. The
    rule-citation rewriter emits each verbalised citation as its OWN token, which
    cuts the prose around it into separate tokens; `depth == 0` is a NESTING test
    and cannot see that one token continues the previous one's sentence. So a
    token opening mid-clause was a legal break point, and `RE_SENTENCE_END` —
    applied WITHIN each token — structurally could not notice.

    Measured before the fix: 40 chunk tails without terminal punctuation across
    17 documents, 31 confirmed mid-sentence by the next chunk opening lowercase
    or on a comma. One chunk ended `...though nine point five, clause a` and the
    next opened `, the only clause that actually assesses one, requires contact`.
    Any paragraph containing a rule citation was exposed, which is most of this
    corpus's rule prose — and the hazard is a permission ending one chunk with
    its limit opening the next.
    """
    if not (group and group[0].kind == SSML and group[0].text == "<p>"
            and group[-1].kind == SSML and group[-1].text == "</p>"):
        return [list(group)]

    atoms: list[tuple[Token, bool]] = []  # (token, may-break-before)
    depth = 0
    # The start of a paragraph is a sentence boundary. An SSML tag neither ends
    # a sentence nor continues one, so it leaves this flag alone.
    prev_ended = True
    for token in group[1:-1]:
        # The flag answers "may the split happen *before* this token?", so it
        # must be read before the token's own tag changes the depth. Reading it
        # after marks a closing tag (depth 1 -> 0) breakable, and the split then
        # orphans its opening tag in the previous paragraph - which is how a
        # <say-as> came to be closed by </p>.
        outer = depth == 0
        if token.kind == SSML:
            if re.fullmatch(r"<[a-z][^/>]*>", token.text):
                depth += 1
            elif token.text.startswith("</"):
                depth -= 1
            atoms.append((token, outer and prev_ended))
            continue
        pieces = RE_SENTENCE_END.split(token.text)
        for index, piece in enumerate(pieces):
            suffix = " " if index < len(pieces) - 1 else ""
            atoms.append((Token(token.kind, piece + suffix), outer and prev_ended))
            # Every piece but the last ends a sentence by construction - the
            # split consumed its terminator. The last one ends a sentence only
            # if it carries the punctuation itself.
            prev_ended = (index < len(pieces) - 1
                          or RE_SENTENCE_TAIL.search(piece) is not None)

    def _assemble(pairs: Sequence[tuple[Token, bool]]) -> list[list[Token]]:
        """Pack whole SENTENCES into groups that fit the budget.

        ⚠️ This used to test ONE TOKEN at a time, and that is why the splitter
        produced oversized groups from paragraphs that were full of sentence
        boundaries. `current` crept past the budget *inside* a sentence, and the
        cut could only fire at the next breakable atom -- by which point the
        group it emitted was already over the limit. The mid-clause rescue then
        fired on a paragraph that had 8 to 21 legal places to cut.

        ⚠️ So the advice "restore the sentence boundaries" was WRONG for most of
        the corpus, and an agent proved it by instrumenting this function:
        adding full stops to a rescued paragraph moved the chunk lengths and
        cleared nothing. **Any <p> over the budget was guaranteed a rescue
        whatever its punctuation.**

        Two details compounded it, both now handled by grouping first:
        `RE_SENTENCE_END.split` leaves an empty final piece when a token ends
        `". "`, so the breakable atom was frequently a ZERO-LENGTH token --
        `current + ['']` can never trip a size test -- and that empty piece then
        set `prev_ended = False`, marking the real next token unbreakable.

        Grouping into sentence units first means the test asks the only question
        that matters: does the NEXT WHOLE SENTENCE still fit?
        """
        units: list[list[Token]] = []
        for token, breakable in pairs:
            if breakable and units:
                units.append([token])
            elif units:
                units[-1].append(token)
            else:
                units.append([token])

        groups: list[list[Token]] = []
        current: list[Token] = []
        for unit in units:
            candidate = current + list(unit)
            if current and _exceeds_limits(
                [Token(SSML, "<p>")] + candidate + [Token(SSML, "</p>")]
            ):
                groups.append([Token(SSML, "<p>")] + current + [Token(SSML, "</p>")])
                current = list(unit)
            else:
                current = candidate
        if current:
            groups.append([Token(SSML, "<p>")] + current + [Token(SSML, "</p>")])
        return groups

    groups = _assemble(atoms)
    # FALLBACK. Prose always carries sentence boundaries, but a paragraph that
    # carries none - a run-on, or a wall of markup - would otherwise come back
    # as an oversized chunk and fail at synthesis. Retry on the nesting test
    # alone, which is what this function did before the sentence test existed.
    # Splitting mid-clause is bad; exceeding the API's limit is worse, and this
    # branch is the only way the old behaviour can still be reached.
    #
    # ⚠️ The trigger was `len(groups) == 1`, and that was too narrow to do its
    # job. A paragraph that split into TWO groups, one of them still over the
    # limit, never reached the fallback at all -- so it shipped oversized and
    # Polly would refuse it. Measured when this was widened: 27 chunks across
    # 8 documents, the largest 3,493 billed characters against a service limit
    # of 3,000, every one of them producing no audio and nothing saying so.
    #
    # Only the offending group is retried. Re-splitting the whole paragraph
    # would cut mid-clause in the parts that had split cleanly, and those parts
    # are not the problem.
    if any(_exceeds_limits(candidate) for candidate in groups):
        rescued: list[list[Token]] = []
        for candidate in groups:
            if not _exceeds_limits(candidate):
                rescued.append(candidate)
                continue
            _CLAUSE_SPLIT_FALLBACKS.append(plain(candidate).strip()[:90])
            rescued.extend(
                _assemble(_outer_only([(token, False) for token in candidate[1:-1]]))
            )
        groups = rescued
    return groups


#: Paragraphs the sentence-boundary splitter could not break, recorded so that
#: rescuing them at a clause boundary does not HIDE them. The fallback keeps the
#: audio working; this list keeps the source defect visible. The repair is
#: punctuation in the markdown -- restore the sentence boundaries -- not code.
_CLAUSE_SPLIT_FALLBACKS: list[str] = []


def _outer_only(atoms):
    """The same atoms, flagged by nesting depth alone - the pre-sentence-test rule."""
    depth = 0
    out = []
    for token, _ in atoms:
        outer = depth == 0
        if token.kind == SSML:
            if re.fullmatch(r"<[a-z][^/>]*>", token.text):
                depth += 1
            elif token.text.startswith("</"):
                depth -= 1
        out.append((token, outer))
    return out


def _part_name(section: str, part: int) -> str:
    return f"{section} (part {part})"


def _group_top_level(tokens: Sequence[Token]) -> list[list[Token]]:
    """Group tokens into indivisible units: one <p>...</p>, or one <break/>."""
    groups: list[list[Token]] = []
    current: list[Token] = []
    depth = 0
    for token in tokens:
        current.append(token)
        if token.kind == SSML:
            if token.text == "<p>":
                depth += 1
            elif token.text == "</p>":
                depth -= 1
                if depth == 0:
                    groups.append(current)
                    current = []
            elif depth == 0 and token.text.startswith("<break"):
                groups.append(current)
                current = []
    if current:
        groups.append(current)
    return groups


def _exceeds_limits(tokens: Sequence[Token]) -> bool:
    billed = len(plain(tokens))
    total = len(render(tokens)) + len("<speak>\n</speak>\n")
    return billed > MAX_BILLED_CHARS or total > MAX_TOTAL_CHARS


def spoken_text(path: Path, doc_id: str | None = None, source_label: str | None = None) -> str:
    """Return exactly what a listener hears, for a document on disk.

    ⚠️  USE THIS. Do not assemble spoken text by hand.

    Five separate reviewers have now reported the same phantom defect -- a spoken
    ``"IIHF 's"`` with a space before the possessive -- and it does not exist. It is
    produced by one of two mistakes, both of which this function removes:

      1. Joining ``token.text`` instead of rendering. ``" ".join(t.text for t in
         chunk.tokens)`` is NOT the spoken text; it inserts separators the renderer
         never emits.
      2. Stripping SSML tags with a SPACE replacement. The real markup is
         ``IIHF</say-as>'s`` with no space, so ``re.sub(r"<[^>]+>", " ", ssml)``
         manufactures one.

    Measured on ``rules_primer.md`` on 2 September 2026: ``"IIHF 's"`` occurs **0**
    times with an empty replacement and **79** times with a space. Every one of those
    79 is an artefact of the measurement.

    ⚠️  The brief for each of those five reviewers said, in bold, to strip with an
    empty replacement. Saying it again is not the fix; this function is.
    """
    # ⚠️  ACCEPT A STRING. Every brief in round 59 told reviewers to call this as
    # ``spoken_sentences('content/foo.md')``, and that raised
    # ``AttributeError: 'str' object has no attribute 'stem'`` -- so the ONE helper
    # written to stop reviewers hand-rolling a tag-strip refused the call the briefs
    # prescribed. Agents worked around it silently and nobody reported it; it was
    # found by the coordinator running its own brief's snippet verbatim.
    path = Path(path)
    doc_id = doc_id or path.stem
    source_label = source_label or str(path)
    chunks, _report = transform_document(path, doc_id, source_label)
    return re.sub(r"<[^>]+>", "", " ".join(build_ssml(c) for c in chunks))


def spoken_sentences(path: Path, doc_id: str | None = None,
                     source_label: str | None = None) -> list[str]:
    """The spoken text split into sentences -- for set-diffing an edit.

    ⚠️  Compare the SET, not the count. Chunk repacking moves sentence boundaries, so
    a count can change when nothing was lost, and a count can stay equal when a
    sentence was swapped for a different one.
    """
    text = spoken_text(path, doc_id, source_label)
    # ⚠️  SPLIT AFTER TRAILING CLOSERS TOO. The bare `(?<=[.!?])\s+` did not split a
    # sentence ending `.)` or `.)*` -- the character before the whitespace is `)`, not a
    # terminator -- so the NEXT heading was returned glued to the tail of the previous
    # sentence. ⚠️  THAT PRODUCED A FALSE FINDING IN TWO INDEPENDENT REVIEWS: 32 headings
    # corpus-wide, including `faceoffs.md`'s "Key Takeaways" and `zone_entries.md`'s
    # "Common Mistakes", were reported as reaching a listener with no audible section
    # break. ⚠️  THE AUDIO WAS ALWAYS CORRECT -- the SSML puts each heading in its own
    # <p> behind a 1000 ms break -- and it was the HELPER that was wrong. This function
    # exists to stop reviewers hand-rolling their own text extraction; a helper that
    # manufactures defects is worse than none, which is why the comment is this long.
    return [s.strip() for s in re.split(r"(?<=[.!?])[)\]\"'*”’]*\s+", text) if s.strip()]


def build_ssml(chunk: Chunk) -> str:
    body = render(chunk.tokens)
    body = re.sub(r"(</p>|/>)(?=<)", r"\1\n", body)
    return f"<speak>\n{body}\n</speak>\n"


# ==========================================================================
# 9. Driver
# ==========================================================================

def discover(content_root: Path) -> list[tuple[Path, str, str]]:
    """Every markdown document, in a stable order. (path, doc_id, label)."""
    found: list[tuple[Path, str, str]] = []
    for path in sorted(content_root.rglob("*.md")):
        relative = path.relative_to(content_root)
        doc_id = str(relative.with_suffix("")).replace("/", "__")
        found.append((path, doc_id, str(path.relative_to(content_root.parent))))
    return found


def write_document(out_root: Path, doc_id: str, chunks: Sequence[Chunk],
                   report: DocReport) -> dict:
    directory = out_root / doc_id
    directory.mkdir(parents=True, exist_ok=True)
    for stale in sorted(directory.glob("*.ssml")):
        stale.unlink()

    entries = []
    billed_total = 0
    ssml_total = 0
    for index, chunk in enumerate(chunks):
        ssml = build_ssml(chunk)
        ElementTree.fromstring(ssml)  # raises if not well-formed
        name = f"{index:03d}.ssml"
        (directory / name).write_text(ssml, encoding="utf-8")
        billed = len(plain(chunk.tokens))
        billed_total += billed
        ssml_total += len(ssml)
        entries.append({
            "billed_characters": billed,
            "file": name,
            "index": index,
            "section": chunk.section,
            "sha256": hashlib.sha256(ssml.encode("utf-8")).hexdigest(),
            "ssml_characters": len(ssml),
        })

    manifest = {
        "chunks": entries,
        "doc_id": doc_id,
        "generator": "scripts/md_to_speech.py",
        "source": report.source,
        "title": report.title,
        "totals": {
            "billed_characters": billed_total,
            "chunks": len(entries),
            "ssml_characters": ssml_total,
        },
        "version": VERSION,
        "voice": {"engine": "long-form", "language": "en-GB"},
    }
    (directory / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    report.chunks = len(entries)
    report.billed_chars = billed_total
    return manifest


def print_report(reports: Sequence[DocReport]) -> None:
    dropped = Counter()
    converted = Counter()
    residue = Counter()
    pointers: list[str] = []
    verifications: list[tuple[str, str]] = []
    oversized: list[tuple[str, str, int, int]] = []
    clause_split: list[tuple[str, str]] = []

    print("=" * 78)
    print("PER-DOCUMENT")
    print("=" * 78)
    header = f"{'document':34} {'chunks':>6} {'billed':>9} {'prose tbl':>9} {'ptr tbl':>8} {'residue':>8}"
    print(header)
    print("-" * len(header))
    for report in reports:
        print(
            f"{report.doc_id:34} {report.chunks:6d} {report.billed_chars:9,d} "
            f"{report.tables_as_prose:9d} {len(report.tables_as_pointer):8d} "
            f"{len(report.residue):8d}"
        )
        dropped.update(report.dropped)
        converted.update(report.converted)
        residue.update(report.residue)
        verifications.extend(
            (report.doc_id, t) for t in report.dropped_verification
        )
        pointers.extend(f"{report.doc_id}: {p}" for p in report.tables_as_pointer)
        oversized.extend(
            (report.doc_id, name, billed, total)
            for name, billed, total in report.oversized
        )
        clause_split.extend((report.doc_id, t) for t in report.clause_split)

    if clause_split:
        print()
        print("=" * 78)
        print("SPLIT MID-CLAUSE  -- no sentence boundary was available")
        print("=" * 78)
        print(
            "  These paragraphs carry no sentence end the splitter could cut at,\n"
            f"  and exceeded the service limit ({POLLY_BILLED_LIMIT} billed / "
            f"{POLLY_TOTAL_LIMIT} total). They were\n"
            "  rescued at a clause boundary so the audio exists at all -- but a\n"
            "  listener hears a break placed mid-sentence.\n"
            "  ⚠️ The repair is PUNCTUATION IN THE SOURCE: a long semicolon or\n"
            "  em-dash chain becomes full stops. Fix it and this list empties.\n"
        )
        per_doc = Counter(doc_id for doc_id, _ in clause_split)
        for doc_id, count in per_doc.most_common():
            print(f"  {count:3d}  {doc_id}")
        print()
        for doc_id, opening in clause_split:
            print(f"  {doc_id}: {opening}...")
        print(f"\n  {len(clause_split)} paragraphs in {len(per_doc)} documents.")

    if oversized:
        print()
        print("=" * 78)
        print("OVER THE SERVICE LIMIT  -- these chunks would produce NO AUDIO")
        print("=" * 78)
        print(
            f"  SynthesizeSpeech refuses over {POLLY_BILLED_LIMIT} billed or "
            f"{POLLY_TOTAL_LIMIT} total characters.\n"
            "  ⚠️ Reaching this list means even the clause-boundary fallback could\n"
            "  not get the unit under the limit. Nothing downstream will warn you:\n"
            "  the renderer exits 0 and the audio is simply absent.\n"
        )
        for doc_id, name, billed, total in sorted(
            oversized, key=lambda row: -row[2]
        ):
            print(f"  {billed:6,d} billed  {total:6,d} total   {doc_id}/{name}")
        print(f"\n  {len(oversized)} chunks.")

    print()
    print("=" * 78)
    print("DROPPED")
    print("=" * 78)
    for key in sorted(dropped):
        print(f"  {dropped[key]:6d}  {key}")

    print()
    print("=" * 78)
    print("CONVERTED")
    print("=" * 78)
    rule_notes = {rule.name: rule.note for rule in NOTATION_RULES}
    for key in sorted(converted):
        note = rule_notes.get(key, "")
        print(f"  {converted[key]:6d}  {key}" + (f"   -- {note}" if note else ""))

    print()
    print("=" * 78)
    print("TABLES EMITTED AS A SPOKEN POINTER (not narrated)")
    print("=" * 78)
    for line in pointers:
        print(f"  {line}")
    if not pointers:
        print("  (none)")

    print()
    print("=" * 78)
    print("VERIFICATION PARAGRAPHS DELETED FROM THE AUDIO")
    print("=" * 78)
    print("  A paragraph is dropped when its text STARTS with a verification marker.")
    print("  'Unverified: X' is deleted; 'This is unverified, but X' is spoken.")
    print("  Nothing else warns an author which side of that line they are on.")
    print()
    if not verifications:
        print("  (none)")
    for doc_id, text in verifications:
        print(f"  {doc_id}")
        print(f"      {text}")

    print()
    print("=" * 78)
    print("UNRECOGNISED CONSTRUCTS  -- these reached the SSML unhandled")
    print("=" * 78)
    if not residue:
        print("  (none)")
    for key, count in sorted(residue.items(), key=lambda kv: (-kv[1], kv[0]))[:60]:
        print(f"  {count:5d}  {key}")
    if len(residue) > 60:
        print(f"  ... and {len(residue) - 60} more distinct contexts")

    print()
    print("=" * 78)
    print("TOTALS")
    print("=" * 78)
    print(f"  documents            {len(reports)}")
    print(f"  chunks               {sum(r.chunks for r in reports)}")
    print(f"  billed characters    {sum(r.billed_chars for r in reports):,}")
    print(f"  tables as prose      {sum(r.tables_as_prose for r in reports)}")
    print(f"  tables as pointer    {sum(len(r.tables_as_pointer) for r in reports)}")
    print(f"  unrecognised (total) {sum(residue.values())}")
    # Cost, for the engines that actually exist in the region this stack runs
    # in. The previous line quoted long-form at $100/M — but `aws polly
    # describe-voices` returns no long-form voice in eu-west-2, in any
    # language, so that figure priced an engine nobody here can use and was
    # the largest number on the screen. Rates confirmed against the Polly
    # pricing page during the Phase 5 pilot; see the status note in
    # project/site_build_specification.md §7.2.
    chars = sum(r.billed_chars for r in reports)
    print("  estimated Polly cost, en-GB voices available in eu-west-2:")
    for engine, rate, voices in (
        ("standard",   4, "Emma, Arthur, Brian, Amy"),
        ("neural",    16, "Emma, Arthur, Brian, Amy"),
        ("generative", 30, "Brian, Amy"),
    ):
        print(f"    {engine:<11} ${rate:>3}/M  ${chars / 1_000_000 * rate:>8,.2f}   ({voices})")
    print("    long-form   $100/M  unavailable in eu-west-2 — would require another region")


# ==========================================================================
# 10. Self-test
# ==========================================================================

def self_test() -> int:
    cases: tuple[tuple[str, str], ...] = (
        # ⚠️ A LEXICON ENTRY THAT ATE A LONGER TOKEN. "xG" -> "expected goals" is an
        # unbounded replace, so "xGoals" rendered as "expected goalsoals" -- a NON-WORD,
        # live twice in how_to_watch_hockey.md, ONE OF THEM INSIDE A DIRECT QUOTATION of
        # MoneyPuck's glossary. 258 assertions did not reach it; it was found by a
        # reviewer rendering the corpus and reading it. The fix is ORDER, not a regex.
        ("xGoals is the column", "expected goals is the column"),
        ("an xG of 0.4", "an expected goals of nought point four"),
        ("Rule 63.2(viii)", "Rule sixty-three point two, clause eight"),
        ("Rule 81.6", "Rule eighty-one point six"),
        # ⚠️ Two seasons joined by "to": each half was expanded separately, so the
        # listener got four years and three "to"s with no grouping.
        ("2007-08 to 2014-15",
         "the two thousand and seven to two thousand and eight season through to "
         "the twenty fourteen to twenty fifteen season"),
        # ... and a lone season must be untouched by the new rule.
        ("the 2015-16 season", "the twenty fifteen to twenty sixteen season"),
        # ⚠️ The PLURAL form carries no "Rule" word, so it matched no citation
        # rule and the full stop reached the listener: "the two eighty-one.fours".
        ("The two 81.4s are not identical",
         "The two eighty-one point fours are not identical"),
        ("Both of the 60.3s carry it", "Both of the sixty point threes carry it"),
        # ... and the singular must be untouched by the new rule.
        ("Rule 81.4 in both", "Rule eighty-one point four in both"),
        ("Rule 1.8", "Rule one point eight"),
        ("Rule 624(b)(1)",
         "Rule six hundred and twenty-four, clause b, sub-clause one"),
        ("Rule 27.8 and 63.2(viii)",
         "Rule twenty-seven point eight and sixty-three point two, clause eight"),
        # ⚠️ A COMMA- or "and"-separated bracket is a further CLAUSE of the same
        # rule; an ADJACENT bracket is a SUB-clause. Before this, the trailing
        # brackets matched no citation rule at all and brackets are SILENT, so
        # "7.5(a), (e)" voiced as "...clause a, e" and the listener heard a
        # dangling letter. Found by reading a repair back as audio.
        ("Hockey Canada 7.5(a), (e)",
         "Hockey Canada seven point five, clause a, clause e"),
        ("USA Hockey 608(a), (b) and (c)",
         "USA Hockey six hundred and eight, clause a, clause b, clause c"),
        # The adjacent form must still read as a sub-clause, not a second clause.
        ("Rule 7.5(a)(e)", "Rule seven point five, clause a, sub-clause e"),
        # ⚠️ A SLASH is "or", not "and another". `622(b)/(c)` is one rule offering
        # two clauses; voicing the slash as a comma turns an alternative into an
        # enumeration. Before this it was not matched at all and the listener
        # heard a literal "clause b, open paren c close paren" -- brackets are
        # silent, so the second clause letter simply vanished.
        ("USA Hockey 622(b)/(c)",
         "USA Hockey six hundred and twenty-two, clause b or clause c"),
        ("Rule 8.1(c)/(d)", "Rule eight point one, clause c or clause d"),
        # ⚠️ And "and" before a RULE NUMBER must not be swallowed as a clause tail.
        ("Rules 27.8 and 63.2(iii)",
         "Rules twenty-seven point eight and sixty-three point two, clause three"),
        # Round 53: 146 roman clause markers reached the audio. The
        # Rule-prefixed pattern carried two clause groups; the bare and USA
        # Hockey patterns carried one, so the second clause was left as
        # literal "(iii)" for a voice to read as letters.
        ("10.2(a)(iii)",
         "ten point two, clause a, sub-clause three"),
        ("Rule 10.2(a)(iv)",
         "Rule ten point two, clause a, sub-clause four"),
        ("608(b)(iii)",
         "six hundred and eight, clause b, sub-clause three"),
        # ...and the same citation written with a space before the clause.
        ("Rule 4.11 (a)(v)",
         "Rule four point eleven, clause a, sub-clause five"),
        ("Rule 9.2 (b)", "Rule nine point two, clause b"),
        # A three-level section reference orphaned its last level.
        ("\u00a719.1.2", "section nineteen point one point two"),
        ("\u00a721.1", "section twenty-one point one"),
        # Guards: these must NOT be read as rule numbers.
        ("28.6 (road)", "twenty-eight point six (road)"),

        # ⚠️ Round 58: a bare parenthesised roman that NO citation pattern
        # claimed reached the audio as the LETTER -- "eye", "eye eye".
        ("Rule 11.1, preamble item (v)",
         "Rule eleven point one, preamble item five"),
        ("82.2(VIII) suspends only points (vi) and (vii)",
         "eighty-two point two, clause eight suspends only points six and seven"),
        ("(i) The referee gives the visiting team up to five seconds.",
         "One. The referee gives the visiting team up to five seconds."),
        # Guards: the citation rules must keep claiming their own clauses, and
        # this rule must never reach a roman that belongs to a rule number.
        ("Rule 63.2(iii)", "Rule sixty-three point two, clause three"),
        ("10.2(a)(iii)", "ten point two, clause a, sub-clause three"),
        ("608(b)(iii)", "six hundred and eight, clause b, sub-clause three"),
        ("whether it is applying (II) or reading (III) more widely",
         "whether it is applying clause two or reading clause three more widely"),
        ("is not (II)'s offence", "is not clause two's offence"),
        # Guard: an ATTACHED marker still belongs to the citation rules.
        ("IIHF Rule 63.2(III)", "IIHF Rule sixty-three point two, clause three"),
        # An IIHF penalty ladder, quoted verbatim, whose CAPITAL markers voiced
        # as the letter: "eye Minor penalty ... eye eye Major penalty".
        ("assessed one of: (I) Minor penalty (II) Major penalty",
         "assessed one of: clause one Minor penalty clause two Major penalty"),
        # ⚠️ A QUOTED RULEBOOK LADDER. Both rungs must read the SAME WAY, and
        # neither may fabricate a sentence break inside the quotation.
        ("assessed one of: (I) Minor penalty, or (II) Major penalty",
         "assessed one of: clause one Minor penalty, or clause two Major penalty"),
        ("usahockey.com/playingrules",
         "usahockey.com slash playingrules"),
        ("api-web.nhle.com/v1/gamecenter/",
         "api-web.nhle.com slash v1 slash gamecenter slash"),
        # Guards: a slash that is NOT a URL path still means "or".
        ("the forward/defence pairing", "the forward or defence pairing"),
        ("he/she may go", "he or she may go"),
        ("the NHL's (iii) reaches a player who shoots",
         "the NHL's clause three reaches a player who shoots"),
        # Guard: not a roman numeral at all, so it is left exactly as found.
        # ⚠️ A DASH between two clauses is a RANGE, not a list. Before this the
        # citation rule took the first and abandoned the second, and brackets
        # are silent, so the second clause vanished into a bare number.
        ("Rule 76.7(I)\u2013(II)",
         "Rule seventy-six point seven, clause one to clause two"),
        ("Rule 49.2(i)-(iv)",
         "Rule forty-nine point two, clause one to clause four"),
        # ...while the comma and the slash keep their own distinct meanings.
        ("Rule 7.5(a), (e)", "Rule seven point five, clause a, clause e"),
        ("USA Hockey 622(b)/(c)",
         "USA Hockey six hundred and twenty-two, clause b or clause c"),
        # A bare marker after a preposition or a dash, where no capital follows
        # and the new-sentence guard therefore cannot fire.
        ("and at (ii) inside the hash marks",
         "and at two inside the hash marks"),
        ("encroachment \u2014 (i) any player other than the centre",
         "encroachment \u2014 one any player other than the centre"),
        ("the (vv) marker", "the (vv) marker"),
        ("Rule 4.11 (see below)", "Rule four point eleven (see below)"),
        ("a 5-on-3", "a five on three"),
        ("a 2-on-1 rush", "a two on one rush"),
        ("6-on-5", "six on five"),
        ("the 1-3-1 trap", "the one three one trap"),
        ("a 1-2-2 forecheck", "a one two two forecheck"),
        ("2-1-2", "two one two"),
        ("78.8%", "seventy-eight point eight percent"),
        ("~45 s", "about forty-five seconds"),
        ("30–80 s", "thirty to eighty seconds"),
        # A STANDARDS NUMBER, whose edition suffix is a colon-two-digits and
        # was being read as a game clock: "CSA Z262.1:15" voiced as "...point
        # one MINUTE FIFTEEN SECONDS", in the equipment document's certification
        # section. Guarding `clock-time` alone left the colon reaching the
        # listener raw, so `alphanumeric-code` now swallows the tail too.
        ("CSA Z262.1:15",
         "CSA Z two hundred and sixty-two point one fifteen"),
        # ...and the clock forms it must never eat. The letters and digits have
        # to be CONTIGUOUS, so a space is what protects these.
        ("a 22:30 puck drop", "a twenty-two minutes thirty seconds puck drop"),
        ("period 2:00", "period two minutes"),
        # ⚠️ A TIME OF DAY IS NOT A GAME CLOCK. Before the `time-of-day` rule,
        # `10:45pm` came out as "ten minutes forty-five secondspm" -- a non-word,
        # in a ```facts value voiced ALONE. Guarding `clock-time` alone left
        # "ten:forty-five p m". Found by rendering the corpus and reading it.
        ("remembers at 10:45pm on a Tuesday",
         "remembers at ten forty-five p m on a Tuesday"),
        ("faceoff at 7:00 pm", "faceoff at seven o'clock p m"),
        # ⚠️ `(i)` IS AMBIGUOUS. Roman ONE in an NHL/IIHF sub-clause run, the
        # LETTER i in a Hockey Canada/USA Hockey run between (h) and (j).
        # Measured: 30 roman occurrences against 4 alphabetic in `content/`, so
        # roman is the default and the alphabetic case is detected from context.
        ("Hockey Canada 2.2(i) and 2.2(j) apply",
         "Hockey Canada two point two, clause i and two point two, clause j apply"),
        ("NHL Rule 39.2(i) and 39.4(iii)",
         "NHL Rule thirty-nine point two, clause one and thirty-nine point four, clause three"),
        ("the 6:05am skate", "the six oh five a m skate"),
        ("1:01.4", "one minute one point four seconds"),
        # A bare clause citation on a TWO-digit rule number. CARHA numbers its
        # rules in two digits, so every one of these voiced with a literal
        # bracket -- "seventy-nine(a)" -- while the three-digit USA Hockey form
        # beside it was correct. 33 spans were live in `content/` and nobody had
        # heard them, because CARHA was the book nothing had cited until the
        # round that found it holds a rule refuting a corpus negative.
        ("79(a)", "seventy-nine, clause a"),
        ("79(b)", "seventy-nine, clause b"),
        ("under 49(a) and 55(a)", "under forty-nine, clause a and fifty-five, clause a"),
        # ...and the three-digit and dotted forms must not regress.
        ("604(a)", "six hundred and four, clause a"),
        ("630(d.3)", "six hundred and thirty, clause d point three"),
        ("63.2(viii)", "sixty-three point two, clause eight"),
        # A range with a SPELLED-OUT unit. `_UNITS_ALT` holds abbreviations
        # only, so these matched no range rule and fell through to
        # `bare-number` twice: "30-35 seconds" was voiced "thirty-thirty-five
        # seconds". The en-dash spelling was rescued by `numeric-range` and
        # the hyphen spelling was not, which is why it survived - and all but
        # two of the corpus's hyphen instances sit inside quotations that must
        # not be edited to work around a renderer bug.
        ("30-35 seconds", "thirty to thirty-five seconds"),
        ("7-9 players", "seven to nine players"),
        ("6-8 weeks", "six to eight weeks"),
        ("130-155 degrees",
         "one hundred and thirty to one hundred and fifty-five degrees"),
        # ...and the four things that must NOT become ranges. Widening
        # `numeric-range` to take a hyphen would have caught the cases above
        # and wrecked every one of these; the season identifiers alone appear
        # over a hundred times and are the corpus's citation backbone.
        #
        # ⚠️ The season row below is a CANARY, not a test of the guard in
        # `_range_with_spelled_unit`. `season-range` consumes '2025-26' first,
        # so this row passes even with that guard disabled - measured, not
        # assumed. It still earns its place: it fails if the rule ORDER is
        # ever changed, which is the thing actually protecting seasons.
        ("the 2025-26 edition", "the twenty twenty-five to twenty twenty-six edition"),
        ("a 50-50 puck", "a fifty-fifty puck"),
        ("a 2-1 lead", "a two-one lead"),
        ("a 1-2-2 forecheck", "a one two two forecheck"),
        # A CLOSED-UP en dash is a different mark from the one above, and the
        # two need opposite readings. Compounds are one word with no pause; a
        # letter range reads as "to". Both used to fall through to the symbol
        # table's en-dash row, which promotes them to an em dash - so this was
        # heard as "an east - west pass", a break inside a single compound.
        # An EDITION YEAR after the word "Rules" is not a rule number. The 1-3
        # digit major ate its first three digits: "Rules two hundred and two six
        # - twenty-seven", on 104 edition and provenance markers. The slash form
        # was hit too, which the report that found this said it was not.
        ("IHUK In-House Rules 2026-27",
         "IHUK In-House Rules twenty twenty-six to twenty twenty-seven"),
        ("Rules 2026/27", "Rules twenty twenty-six to twenty twenty-seven"),
        ("Rule 630(a)", "Rule six hundred and thirty, clause a"),
        ("Rule 101.1", "Rule one hundred and one point one"),
        ("an east\u2013west pass", "an east-west pass"),
        # A journal citation's volume:pages is NOT a clock. This one was voiced as
        # "eleven minutes thirty-four seconds - forty-one" in the middle of the
        # corpus's spinal-injury citation. The discriminator is the RANGE END:
        # a real clock range writes both ends as M:SS.
        ("Canadian Journal of Neurological Sciences 11\u003a34\u201341",
         "Canadian Journal of Neurological Sciences eleven, thirty-four to forty-one"),
        ("Neurosurgery 34\u003a590\u2013597",
         "Neurosurgery thirty-four, five hundred and ninety to five hundred and ninety-seven"),
        ("0\u003a39\u20130\u003a41",
         "zero minutes thirty-nine seconds to zero minutes forty-one seconds"),
        ("at 11\u003a34 of the second period",
         "at eleven minutes thirty-four seconds of the second period"),
        ("helmet\u2013facemask combinations", "helmet-facemask combinations"),
        ("the mindfulness\u2013acceptance\u2013commitment approach",
         "the mindfulness-acceptance-commitment approach"),
        ("printed at pp. v\u2013vi", "printed at pp. v to vi"),
        ("r = +0.25", "r equals plus nought point two five"),
        ("β = 0.12", "beta equals nought point one two"),
        ("g = 0.70", "g equals nought point seven zero"),
        ("2-on-0", "two on zero"),
        ("r=−0.47", "r equals minus nought point four seven"),
        ("95% CI [5.3%, 12.1%]",
         "with a ninety-five percent confidence interval from "
         "five point three percent to twelve point one percent"),
        ("95% CI = [5.3%, 12.1%]",
         "with a ninety-five percent confidence interval from "
         "five point three percent to twelve point one percent"),
        ("[0.07, 0.17]",
         "with a confidence interval from nought point zero seven to "
         "nought point one seven"),
        ("F1 pressures, F2 supports, F3 holds",
         "F one pressures, F two supports, F three holds"),
        # The USA Hockey Casebook's own sub-clause form. It reached the listener
        # as "six hundred and thirty(d.3)" -- raw characters after a number.
        ("Rule Reference 630(d.3)",
         "Rule Reference six hundred and thirty, clause d point three"),
        # ...and the ordinary lettered clause still reads as before.
        ("Rules 624(b) and 630(a)",
         "Rules six hundred and twenty-four, clause b and "
         "six hundred and thirty, clause a"),
        # The IIHF's typographic cross-reference marker, inside a quotation.
        ("in violation of ➔ Rule 81 – Icing",
         "in violation of Rule eighty-one — Icing"),
        ("a D-to-D pass", "a D to D pass"),
        ("the d-to-d option", "the D to D option"),
        # The word-boundary guard: this used to voice as "forwarD to Defence".
        ("a forward-to-defence pass", "a forward-to-defence pass"),
        ("U13", "under thirteen"),
        ("16U", "sixteen U"),
        ("85 ft", "eighty-five feet"),
        ("a 60° angle", "a sixty degrees angle"),
        ("3 × 20 min", "three times twenty minutes"),
        ("8 × 15 inches", "eight by fifteen inches"),
        ("1.08×", "one point zero eight times"),
        # The three constructs that reached the SSML unhandled in the 29 July
        # 2026 narration pilot. Every one of them was silent — no error, just a
        # marker or a symbol the listener never heard.
        # ⚠️ Emergency numbers. The general number rule voiced these as quantities,
        # in a mental-health crisis callout — the one passage where a listener may be
        # about to dial. The false-positive guard is the second pair: the same
        # document says "pooling 112 effect sizes", which must stay a quantity.
        ("call 999 now", "call nine nine nine now"),
        ("999 in the UK and Ireland, 112 across the EU, 911 in the US",
         "nine nine nine in the UK and Ireland, one one two across the EU, "
         "nine one one in the US"),
        ("pooling 112 effect sizes", "pooling one hundred and twelve effect sizes"),
        ("dial 111 within 24 hours", "dial one one one within twenty-four hours"),
        # The drill-symbol glyphs: silent before, and the passage that quotes them
        # is the one teaching what they mean.
        ("\u25cf \u25cb Forward / Player",
         "filled circle open circle Forward or Player"),
        ("\u25b2 \u25b3 Defender / Player",
         "filled triangle open triangle Defender or Player"),
        ("🇬🇧 Neck laceration protection is mandatory",
         "For British readers, Neck laceration protection is mandatory"),
        ("⚠️ 🇬🇧 The IIHF says the opposite",
         "For British readers, The IIHF says the opposite"),
        ("a fixed fee of £5.00GBP", "a fixed fee of five pounds"),
        ("the £5 and £20 deductions",
         "the five pounds and twenty pounds deductions"),
        ("£1", "one pound"),
        ("£1.00", "one pound"),
        ("£120-150", "one hundred and twenty to one hundred and fifty pounds"),
        ("£2.50", "two point five zero pounds"),
        # the same .00 handling reaches dollars, which had it too
        ("$148.00", "one hundred and forty-eight dollars"),
        ("$20 million", "twenty million dollars"),
        # "point zero five", not "nought point zero five": the leading-decimal
        # rule deliberately omits the leading word so save percentages read as
        # ".920 -> point nine two zero", which is how they are said. A p-value
        # inherits that and is idiomatic either way.
        ("(p < .05)", "(p less than point zero five)"),
        ("n > 30", "n greater than thirty"),
        (".920 save percentage", "point nine two zero save percentage"),
        ("**bold** and *italic*", "bold and italic"),
        ("[Faceoffs](faceoffs.md)", "Faceoffs"),
        ("`code`", "code"),
        ("2:00", "two minutes"),
        ("5:04", "five minutes four seconds"),
        ("the 2005-06 season",
         "the two thousand and five to two thousand and six season"),
        ("in 1995", "in nineteen ninety-five"),
        ("2,545 receptions",
         "two thousand five hundred and forty-five receptions"),
        ("⚠️ careful", "careful"),
        ("≤ 79", "less than or equal to seventy-nine"),
        ("± 5", "plus or minus five"),
        ("VO₂max", "V O two max"),
        ("CF%", "C F percent"),
        ("7/16\"", "seven sixteenths of an inch"),
        ("⅜\"", "three eighths of an inch"),
        # Feet and inches. Both marks used to reach the listener raw: a 6'4"
        # goaltender was voiced as "six'four"", and 65" simply lost its unit.
        ("a 6'4\" goaltender", "a six foot four inches goaltender"),
        # ⚠️ The ABBREVIATED form: `ft` expanded and `in` did not, so the crease
        # sentence was voiced "run four feet six in out".
        ("run 4 ft 6 in out", "run four feet six inches out"),
        ("the 4 ft 6 in is the length", "the four feet six inches is the length"),
        # ... and the bare word `in` must NEVER become a unit. `in` is absent
        # from the unit table on purpose and this guards that.
        ("3 in the slot", "three in the slot"),
        ("2 in a row", "two in a row"),
        ("6 ft deep", "six feet deep"),
        ("players 6'6\" or taller", "players six foot six inches or taller"),
        ("5'7\" apart", "five foot seven inches apart"),
        ("(65\" by exception)", "(sixty-five inches by exception)"),
        ("8\" youth to 15\" senior", "eight inches youth to fifteen inches senior"),
        ("1\" above", "one inch above"),
        # The IIHF book writes both "1.8 m" and "2.4m"; the corpus quotes it
        # verbatim, so the unspaced form has to work too. It voiced as
        # "two point four m" -- a letter read aloud inside a rink dimension.
        ("end glass 2.4m from the goal line",
         "end glass two point four metres from the goal line"),
        # ...and the longer units must still win over the bare "m".
        ("10mm of flex", "ten millimetres of flex"),
        ("travelling 30km/h", "travelling thirty kilometres per hour"),
        # A long uncommaed digit run is an identifier, never a quantity. The
        # NHL game-ID range was voiced as "two thousand and twenty-four
        # million twenty thousand and one".
        ("games 2024020001 to 2024020400",
         "games two zero two four zero two zero zero zero one to "
         "two zero two four zero two zero four zero zero"),
        ("PMID 28557852",
         "PMID two eight five five seven eight five two"),
        # ...but a comma-formatted quantity still reads as a quantity, which is
        # what keeps the rule above safe.
        ("1,250,000 people", "one million two hundred and fifty thousand people"),
        # A range whose unit is the inch mark lost its "to", while the same
        # range with the word "inches" was already correct.
        ("youth 38\u201344\"", "youth thirty-eight to forty-four inches"),
        # A straight quote after a digit is an inch mark OR a closing quotation
        # mark, and this corpus has both. These four must NOT gain inches.
        ('And "60 \u00d7 30" is', "And \"sixty times thirty\" is"),
        ('Read "2 plus 10" the way', "Read \"two plus ten\" the way"),
        ('"I\'ve got 19", "you take 7".',
         '"I\'ve got nineteen", "you take seven".'),
        ('a "63 inch" stick', 'a "sixty-three inch" stick'),
        ("two feet (2')", "two feet (two feet)"),
        ("a major (5')", "a major (five minutes)"),
        ("minor penalty (2')", "minor penalty (two minutes)"),
        ("a ten minute (10')", "a ten minute (ten minutes)"),
        ("Major penalty (5')", "Major penalty (five minutes)"),
        ("skating → angling", "skating, angling"),
        ("$20 million", "twenty million dollars"),
        ("$148", "one hundred and forty-eight dollars"),
        ("$10–$20", "ten to twenty dollars"),
        ("1 September to 31 August",
         "the first of September to the thirty-first of August"),
        ("30 November 2023",
         "the thirtieth of November, twenty twenty-three"),
        ("December 2014", "December twenty fourteen"),
        ("a 50/50 puck", "a fifty fifty puck"),
        ("24/7", "twenty-four seven"),
        ("the 2025/26 rulebook",
         "the twenty twenty-five to twenty twenty-six rulebook"),
        ("NHL/IIHF", "NHL or IIHF"),
        ("an em-dash — here", "an em-dash — here"),
        # The symbol-expansion defects found by reading the SSML emitted for
        # all 37 documents on 30 July 2026. Every one of them produced plain
        # letters, so find_residue could not see any of them.
        #
        # 1. 'and/or' took the SYMBOLS solidus and became "and or or".
        ("multiple strides and/or travels an excessive distance",
         "multiple strides and or travels an excessive distance"),
        ("tingling in the arms and/or legs",
         "tingling in the arms and or legs"),
        ("contact and / or violently checks an opponent",
         "contact and or violently checks an opponent"),
        # ... a three-item solidus list of governing bodies, quoted from IHUK
        # In-House Rule 9.12. Never broken -- "IHUK or EIH or SIH" was merely
        # not how the list is read aloud, and the book itself writes "EIH or
        # SIH" with the comma form elsewhere.
        ("mandatory for all players in all IIHF categories and IHUK/EIH/SIH "
         "competitions",
         "mandatory for all players in all IIHF categories and IHUK, EIH "
         "or SIH competitions"),
        # ... and the disjunctive '/ or' in the IIHF hooking sentence, which
        # was never broken, must stay as it is.
        ("the opponent's hands / or near the opponent's hands",
         "the opponent's hands or near the opponent's hands"),
        # 2. a unit between the operand and the sign fell through to " times ".
        ("56 m × 26 m", "fifty-six metres by twenty-six metres"),
        ("60 m × 26–30 m", "sixty metres by twenty-six to thirty metres"),
        ("196.9 ft × 85.3 ft",
         "one hundred and ninety-six point nine feet by eighty-five point "
         "three feet"),
        ("1.83 m × 1.22 m",
         "one point eight three metres by one point two two metres"),
        ("61 × 26 m", "sixty-one by twenty-six metres"),
        # ... without disturbing the repetitions it sits next to.
        ("2 × 30–40 min", "two times thirty to forty minutes"),
        # 3. standards codes are labels to be matched, not quantities. The
        #    letters carry <say-as interpret-as="characters">, which plain()
        #    strips - the markup itself is asserted separately below.
        ("CAN/BNQ 9415-370",
         "CAN slash BNQ nine four one five dash three seven zero"),
        ("CAN/BNQ 0102-565/2023",
         "CAN slash BNQ zero one zero two dash five six five slash "
         "two zero two three"),
        ("ISO/DIS 10256-5", "ISO slash DIS one zero two five six dash five"),
        ("ISO 10256", "ISO one zero two five six"),
        # 4. three simultaneous roles, not a choice between them.
        ("F1 / F2 / F3 are roles defined by order of arrival",
         "F one, F two and F three are roles defined by order of arrival"),
        ("F1/F2/F3", "F one, F two and F three"),
        ("F2/F3 forwards", "F two and F three forwards"),
        ("F1/F2 are roles, not people", "F one and F two are roles, not people"),
        # 5. the statistic and the tolerance operator must not sound alike.
        ("Plus/minus.", "Plus minus."),
        ("a player's plus/minus", "a player's plus minus"),
        ("14.8 ± 0.45 years",
         "fourteen point eight plus or minus nought point four five years"),
        # Lower severity.
        ("Rules 624(b) and 630(a)",
         "Rules six hundred and twenty-four, clause b and six hundred and "
         "thirty, clause a"),
        ("608(b)", "six hundred and eight, clause b"),
        ("drops their stick and removes their glove(s)",
         "drops their stick and removes their gloves"),
        ("the skate(s) of a player", "the skates of a player"),
        ("NHL/NHLPA Learn to Play", "NHL and NHLPA Learn to Play"),
        # 6. the editorial [sic]. The brackets were silent and the token was
        #    not, so the corpus's one instance — inside a verbatim quotation of
        #    NHL Rule 76.7, whose published text really does omit the word
        #    "at" — reached the listener as the word "sick". Like the and/or
        #    defects above it produced plain letters, so find_residue was blind
        #    to it. The written [sic] is correct scholarship and stays.
        ("When a [sic] least two face-off violations have been committed",
         "When a, as printed in the original, least two face-off violations "
         "have been committed"),
        # The brackets must not survive on their own account either: a marker
        # that expanded but left "[" behind would still be a defect.
        ("the puck [sic] entered", "the puck, as printed in the original, entered"),
    )
    failures = 0
    for source, expected in cases:
        actual = re.sub(r"\s+", " ", plain(to_speech(source, Counter()))).strip()
        if actual != expected:
            failures += 1
            print(f"FAIL  {source!r}\n  expected {expected!r}\n  actual   {actual!r}")

    # Number words
    for value, expected in (
        (0, "zero"), (7, "seven"), (13, "thirteen"), (21, "twenty-one"),
        (100, "one hundred"), (624, "six hundred and twenty-four"),
        (1000, "one thousand"), (2545, "two thousand five hundred and forty-five"),
        (9574, "nine thousand five hundred and seventy-four"),
    ):
        if int_to_words(value) != expected:
            failures += 1
            print(f"FAIL int_to_words({value}) = {int_to_words(value)!r}")

    # Escaping: & < > escaped, apostrophes and quotes left intact.
    escaped = render([Token(TEXT, "a & b < c > d, Bloom's \"quote\"")])
    if escaped != "a &amp; b &lt; c &gt; d, Bloom's \"quote\"":
        failures += 1
        print(f"FAIL escaping: {escaped!r}")

    # SSML tokens must pass through unescaped.
    if render([Token(SSML, "<break/>")]) != "<break/>":
        failures += 1
        print("FAIL ssml passthrough")

    # Splitting an oversized paragraph must never cut between an element's
    # opening tag and its closing tag. The whole corpus rendered to invalid
    # SSML because it did: a <say-as> was left open and closed by </p>.
    # The break flag has to be read *before* the token's tag changes the depth,
    # or a closing tag looks like a safe boundary. Markup-heavy, so that the
    # total-character limit bites before the billed one and the split lands on
    # a tag rather than on a sentence end; the pad sweeps the boundary across
    # every offset in a repeating unit.
    split_failures = 0
    split_seen = 0
    for pad in range(0, 48):
        unit: list[Token] = []
        for _ in range(200):
            unit.extend(_spell_out_word("IIHF"))
            unit.append(Token(TEXT, " and "))
        paragraph = (
            [Token(SSML, "<p>"), Token(TEXT, " " * pad)] + unit + [Token(SSML, "</p>")]
        )
        parts = _split_paragraph(paragraph)
        if len(parts) > 1:
            split_seen += 1
        for part in parts:
            try:
                ElementTree.fromstring("<speak>" + render(part) + "</speak>")
            except ElementTree.ParseError:
                split_failures += 1
    if not split_seen:
        failures += 1
        print("FAIL split regression is vacuous: nothing split")
    if split_failures:
        failures += 1
        print(f"FAIL split produced malformed SSML in {split_failures} case(s)")

    # A standards code spells its letters: assert the markup, which plain()
    # cannot see. Without it the test above would pass on "CAN" being read as
    # a word, which is the whole defect.
    code = render(to_speech("CAN/BNQ 9415-370", Counter()))
    if code != (
        '<say-as interpret-as="characters">CAN</say-as> slash '
        '<say-as interpret-as="characters">BNQ</say-as> '
        "nine four one five dash three seven zero"
    ):
        failures += 1
        print(f"FAIL standards-code markup: {code!r}")

    # Terminal punctuation, including the stop that hides behind a closer.
    closers: tuple[tuple[str, str], ...] = (
        ("not a published count of calls.)", "not a published count of calls.)"),
        ('he called it "a hit.”', 'he called it "a hit.”'),
        ("(this one has no stop)", "(this one has no stop)."),
        ("a plain fragment", "a plain fragment."),
        ("a trailing comma,", "a trailing comma."),
        ("already stopped.", "already stopped."),
    )
    for source, expected in closers:
        if finalise_sentence(source) != expected:
            failures += 1
            print(f"FAIL finalise_sentence({source!r}) = "
                  f"{finalise_sentence(source)!r}, expected {expected!r}")

    # Round 53: "Never: X" rendered as "Never. X." — a terminated negation
    # followed by a bare imperative, telling the listener to do the thing the
    # fact prohibits. 342 of 495 such facts open with an imperative verb, and
    # it landed on checking from behind and on concussion self-assessment.
    label_cases = (("Never", "Never \u2014 "), ("Key", "Key. "), ("Rule", "Rule. "))
    for label, expected in label_cases:
        actual = _label_lead(label)
        if actual != expected:
            failures += 1
            print(f"FAIL  _label_lead({label!r})\n  expected {expected!r}\n  actual   {actual!r}")

    # Round 57: LEXICON is a plain str.replace and rewrote the INSIDE of quoted
    # rulebook text. A listener heard IIHF 48.1 as "(for example shooting,
    # making or receiving a pass, AND SO ON)" -- words the book does not
    # contain, inside quotation marks. 43 quoted spans in 16 documents carry
    # one of the three affected abbreviations.
    #
    # The rule being pinned: "etc." is a PARAPHRASE when it becomes "and so on"
    # and a PRONUNCIATION when it becomes "et cetera", so inside a quotation it
    # takes the pronunciation. "e.g." and "i.e." are already pronunciations --
    # nobody reads them aloud as letters -- so they are unchanged either side.
    lexicon_quote_cases: tuple[tuple[str, str], ...] = (
        # Inside a quotation: the paraphrase must not fire.
        ('the rule says "icing the puck, offsides, etc." and stops there',
         'the rule says "icing the puck, offsides, et cetera" and stops there'),
        # Outside any quotation: the friendlier paraphrase still fires.
        ("shooting, passing, etc. are covered",
         "shooting, passing, and so on are covered"),
        # Both in one line: each side takes its own treatment.
        ('outside etc. then "inside etc." after',
         'outside and so on then "inside et cetera" after'),
        # e.g./i.e. are pronunciations and are untouched by the quoting rule.
        ('"a legitimate hockey play (e.g. shooting)"',
         '"a legitimate hockey play (for example shooting)"'),
        ('"the trapezoid (i.e. familiar to NHL fans)"',
         '"the trapezoid (that is familiar to NHL fans)"'),
        # ⚠️ An UNBALANCED quote makes the tail count as quoted. Deliberate:
        # "et cetera" in prose is merely formal; fabricated wording inside
        # quotation marks is non-negotiable 1.
        ('he said "look at the etc. here',
         'he said "look at the et cetera here'),
        # No quotation-sensitive token: the fast path must behave identically.
        ("plain e.g. text with no quotes",
         "plain for example text with no quotes"),
    )
    # Round 57: U+2026 was a sentence terminator, so `_split_paragraph` could
    # break INSIDE a rulebook quotation at an elision -- one spoken unit ending
    # "a minor, major or a major and a game misconduct ..." and the next opening
    # "on a player who charges a goalkeeper", an orphan clause with no subject.
    # No checker sees it: the markdown is correct and only the audio is wrong.
    ellipsis_cases: tuple[tuple[str, int], ...] = (
        # An elision inside a quote is NOT a break point.
        ('He said "a minor, major or a major and a game misconduct \u2026 '
         'on a player who charges a goalkeeper" and stopped.', 1),
        # A real full stop still is.
        ("First sentence here. Second sentence here.", 2),
        # A stop followed by a closing quote still is -- the case the closing-quote
        # alternative exists for.
        ('He said "keep the stick down." The next sentence follows.', 2),
        # An elision AND a real stop: exactly one break, at the stop.
        ('The rule reads "a major \u2026 and a game misconduct." Then prose follows.', 2),
    )
    for source, expected in ellipsis_cases:
        actual = len(RE_SENTENCE_END.split(source))
        if actual != expected:
            failures += 1
            print(f"FAIL  RE_SENTENCE_END split of {source!r}\n  expected {expected} piece(s), got {actual}")

    # And the tail test must agree with it, or the two disagree about what ends
    # a sentence -- which they once did, and that was a defect.
    tail_cases: tuple[tuple[str, bool], ...] = (
        ("a major and a game misconduct \u2026", False),
        ('the crease"', False),
        ("ends properly.", True),
        ('ends inside a quote."', True),
    )
    for source, expected in tail_cases:
        actual = bool(RE_SENTENCE_TAIL.search(source))
        if actual != expected:
            failures += 1
            print(f"FAIL  RE_SENTENCE_TAIL({source!r}) = {actual}, expected {expected}")

    # Round 57, same class as the ellipsis: an abbreviation's stop is not a
    # sentence end. `defender.md` split mid-citation at "Lignell et al."
    abbrev_cases: tuple[tuple[str, int], ...] = (
        ("measured by Lignell et al. (2018), Brocherie et al. (2018) and others", 1),
        ("see pp. 47 and 51 for the table", 1),
        ("Smith, ed. The Rules of the Game, is the source", 1),
        ("roughly approx. thirty seconds per shift", 1),
        # ⚠️ `No.` is NOT protected: the corpus quotes Casebook answers where the
        # stop IS terminal, and merging a question with its answer is worse.
        ('The Handbook answers "No." The next situation follows.', 2),
        # A real stop after an ordinary word still breaks.
        ("First sentence here. Second sentence here.", 2),
    )
    for source, expected in abbrev_cases:
        actual = len(RE_SENTENCE_END.split(source))
        if actual != expected:
            failures += 1
            print(f"FAIL  RE_SENTENCE_END split of {source!r}\n  expected {expected}, got {actual}")

    for source, expected in lexicon_quote_cases:
        actual = apply_lexicon(source, Counter())
        if actual != expected:
            failures += 1
            print(f"FAIL  apply_lexicon({source!r})\n  expected {expected!r}\n  actual   {actual!r}")

    print(f"\n{len(cases) + len(closers) + 9 + 3 + len(label_cases) + len(lexicon_quote_cases) + len(ellipsis_cases) + len(tail_cases) + len(abbrev_cases)} "
          f"assertions, {failures} failures")
    return 1 if failures else 0


# ==========================================================================

def main(argv: Sequence[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    root = Path(__file__).resolve().parent.parent
    parser.add_argument("--content", type=Path, default=root / "content")
    parser.add_argument("--out", type=Path, default=root / "scripts" / "speech")
    parser.add_argument("--report", action="store_true",
                        help="print what was dropped, converted and not recognised")
    parser.add_argument("--dry-run", action="store_true", help="write nothing")
    parser.add_argument("--self-test", action="store_true")
    parser.add_argument("--only", help="restrict to documents whose id contains this")
    args = parser.parse_args(argv)

    if args.self_test:
        return self_test()

    documents = discover(args.content)
    if args.only:
        documents = [d for d in documents if args.only in d[1]]
    if not documents:
        print(f"no markdown found under {args.content}", file=sys.stderr)
        return 1

    reports: list[DocReport] = []
    for path, doc_id, label in documents:
        chunks, report = transform_document(path, doc_id, label)
        if args.dry_run:
            for index, chunk in enumerate(chunks):
                ElementTree.fromstring(build_ssml(chunk))
            report.chunks = len(chunks)
            report.billed_chars = sum(len(plain(c.tokens)) for c in chunks)
        else:
            write_document(args.out, doc_id, chunks, report)
        reports.append(report)

    if not args.dry_run:
        index_path = args.out / "index.json"
        index_path.parent.mkdir(parents=True, exist_ok=True)
        index_path.write_text(
            json.dumps(
                {
                    "documents": [
                        {
                            "billed_characters": r.billed_chars,
                            "chunks": r.chunks,
                            "doc_id": r.doc_id,
                            "source": r.source,
                            "title": r.title,
                        }
                        for r in reports
                    ],
                    "generator": "scripts/md_to_speech.py",
                    "totals": {
                        "billed_characters": sum(r.billed_chars for r in reports),
                        "chunks": sum(r.chunks for r in reports),
                        "documents": len(reports),
                    },
                    "version": VERSION,
                },
                ensure_ascii=False, indent=2, sort_keys=True,
            ) + "\n",
            encoding="utf-8",
        )

    if args.report:
        print_report(reports)
    else:
        print(
            f"{len(reports)} documents, {sum(r.chunks for r in reports)} chunks, "
            f"{sum(r.billed_chars for r in reports):,} billed characters"
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
