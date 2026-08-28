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
TIGHT_UNITS = ("km/h", "mph", "°F", "°C", "°", "cm", "mm", "km", "kg", "%")

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
    ("→", ","),
    ("·", ","),
    ("†", ""),          # dagger footnote marker
    ("•", ""),          # stray bullet glyph
    ("…", "…"),    # ellipsis: Polly handles it, keep the pause
    ("−", " minus "),
    ("²", " squared"),
    ("₂", " two"),
    ("️", ""),          # variation selector (emoji presentation)
    ("⚠", ""),          # warning sign
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
LEXICON: tuple[tuple[str, str], ...] = (
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
    ("VO₂max", "V O two max"),
    ("VO₂", "V O two"),
    ("R²", "R squared"),
    ("CF%", "C F percent"),
    ("FF%", "F F percent"),
    ("xGF%", "expected goals for percentage"),
    ("xG", "expected goals"),
    ("D-to-D", "D to D"),
    ("d-to-d", "D to D"),
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
        out += f", {label} {_clause_words(clause)}"
    return out


def _clause_words(clause: str) -> str:
    lowered = clause.lower()
    if lowered in ROMAN_TO_INT:
        return int_to_words(ROMAN_TO_INT[lowered])
    if clause.isdigit():
        return int_to_words(int(clause))
    return clause  # a lettered clause: '(b)' -> 'clause b'


def _bare_clause(match: re.Match) -> str:
    """'27.8 and 63.2(viii)' - the second citation has no 'Rule' in front."""
    major = int_to_words(int(match.group("major")))
    minor = int_to_words(int(match.group("minor")))
    out = f"{major} point {minor}"
    clause = match.group("c1")
    if clause:
        out += f", clause {_clause_words(clause)}"
    return out


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
    return (
        f"{int_to_words(int(match.group('major')))}, "
        f"clause {_clause_words(match.group('c1'))}"
    )


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


def _season(match: re.Match) -> str:
    """2005-06 / 2025-2026 / 2025-29 -> 'X to Y'."""
    start = int(match.group(1))
    tail = match.group(2)
    end = int(tail) if len(tail) == 4 else (start // 100) * 100 + int(tail)
    if end < start:
        end += 100
    return f"{year_to_words(start)} to {year_to_words(end)}"


def _clock(match: re.Match) -> str:
    """2:00 -> 'two minutes'; 5:04 -> '...'; 1:01.4 -> fractional seconds."""
    minutes = int(match.group(1))
    seconds_text = match.group(2) + (match.group(3) or "")
    out = f"{int_to_words(minutes)} minute" + ("s" if minutes != 1 else "")
    if float(seconds_text):
        words = decimal_to_words(seconds_text.lstrip("0") or "0")
        out += f" {words} second" + ("s" if seconds_text != "01" else "")
    return out


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
    """'30-80 s' -> 'thirty to eighty seconds'; '95-114 deg' likewise."""
    prefix = _approx_prefix(match.group("approx"))
    low = decimal_to_words(match.group("low"))
    high = decimal_to_words(match.group("high"))
    unit = match.group("unit")
    tail = _spoken_unit(unit, match.group("high")) if unit else ""
    return f"{prefix}{low} to {high}{tail}"


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


def _paren_feet(match: re.Match) -> str:
    value = int(match.group(1))
    return f"({int_to_words(value)} " + ("foot" if value == 1 else "feet") + ")"


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


def _percent_after_word(match: re.Match) -> str:
    return f"{match.group(1)} percent"


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
        "standards-code",
        re.compile(rf"\b(?:{_STANDARDS_ALT})\s?\d+(?:[-–/]\d+)*\b"),
        _standards_code,
        "CAN/BNQ 9415-370 -> 'C A N slash B N Q nine four one five dash "
        "three seven zero'",
    ),
    Rule(
        "rule-citation",
        re.compile(
            r"\b(?P<word>Rules?)\s+(?P<major>\d{1,3})"
            r"(?:\.(?P<minor>\d{1,2}))?"
            r"(?:\((?P<c1>[ivxIVX]{1,6}|[a-z]|\d{1,2})\))?"
            r"(?:\((?P<c2>[ivxIVX]{1,6}|[a-z]|\d{1,2})\))?"
        ),
        _rule_citation,
        "Rule 63.2(viii) -> 'Rule sixty-three point two, clause eight'",
    ),
    Rule(
        "bare-clause-citation",
        re.compile(
            r"(?<![\w.])(?P<major>\d{1,3})\.(?P<minor>\d{1,2})"
            r"\((?P<c1>[ivxIVX]{1,6}|[a-z])\)"
        ),
        _bare_clause,
        "'27.8 and 63.2(viii)' - second citation without the word Rule",
    ),
    Rule(
        "usa-clause-citation",
        re.compile(
            r"(?<![\w.])(?P<major>\d{3})\((?P<c1>[ivxIVX]{1,6}|[a-z])\)"
        ),
        _usa_clause_citation,
        "'Rules 624(b) and 630(a)' - the second USA Hockey citation, which "
        "carries no point and so was never a bare-clause citation",
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
        "season-range",
        re.compile(r"\b((?:19|20)\d{2})-(\d{2}|\d{4})\b"),
        _season,
        "2005-06 -> 'two thousand and five to two thousand and six'",
    ),
    Rule(
        "clock-time",
        re.compile(r"(?<![\d:])(\d{1,3}):(\d{2})(\.\d+)?(?![\d:])"),
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
        "95-114 deg -> 'ninety-five to one hundred and fourteen degrees'",
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
        re.compile(
            r"\b(?:[A-Za-z]{1,6}\d+(?:\.\d+)?[A-Za-z]{0,4}"
            r"|\d+(?:\.\d+)?[A-Za-z]{1,4})\b"
        ),
        _alphanumeric_code,
        "product and standard codes: CRT6 -> 'C R T six'; 420D -> '... D'",
    ),
    Rule(
        "bare-number",
        re.compile(r"(?<![\w.])\d+(?:,\d{3})*(?:\.\d+)?(?![\w])"),
        _bare_number,
        "any remaining number; years read as years",
    ),
)


def apply_lexicon(text: str, counter: Counter) -> str:
    for source, target in LEXICON:
        if source in text:
            counter["lexicon." + source.strip()] += text.count(source)
            text = text.replace(source, target)
    return text


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
    own clause. "Never: lunge" reads naturally as "Never. Lunge." — the labels
    were chosen as imperatives, which is what makes this work without
    rewriting them.
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
        tokens = to_speech(value, report.converted)
        report.residue.extend(find_residue(tokens))
        if not plain(tokens).strip():
            continue
        out.append(Token(SSML, f'<break time="{BREAK_LIST_ITEM}"/>'))
        out.append(Token(SSML, "<p>"))
        if label:
            out.extend(done(label + ". "))
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
    text = "\n".join(re.sub(r"^\s*>\s?", "", line) for line in block.lines)
    paragraphs = [p for p in re.split(r"\n\s*\n", text) if p.strip()]
    out: list[Token] = []
    for paragraph in paragraphs:
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
    return split_oversized(chunks), report


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


RE_SENTENCE_END = re.compile(r"(?<=[.!?…])\s+")


def _split_paragraph(group: Sequence[Token]) -> list[list[Token]]:
    """Break one oversized <p> into several, at sentence boundaries.

    Only splits where no nested element is open, so the result is always
    well-formed. A single sentence longer than the limit is left whole - it
    is better to fail loudly at synthesis time than to cut mid-sentence.
    """
    if not (group and group[0].kind == SSML and group[0].text == "<p>"
            and group[-1].kind == SSML and group[-1].text == "</p>"):
        return [list(group)]

    atoms: list[tuple[Token, bool]] = []  # (token, may-break-after)
    depth = 0
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
            atoms.append((token, outer))
            continue
        pieces = RE_SENTENCE_END.split(token.text)
        for index, piece in enumerate(pieces):
            suffix = " " if index < len(pieces) - 1 else ""
            atoms.append((Token(token.kind, piece + suffix), outer))

    groups: list[list[Token]] = []
    current: list[Token] = []
    for token, breakable in atoms:
        candidate = current + [token]
        if current and breakable and _exceeds_limits(
            [Token(SSML, "<p>")] + candidate + [Token(SSML, "</p>")]
        ):
            groups.append([Token(SSML, "<p>")] + current + [Token(SSML, "</p>")])
            current = [token]
        else:
            current = candidate
    if current:
        groups.append([Token(SSML, "<p>")] + current + [Token(SSML, "</p>")])
    return groups


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
        pointers.extend(f"{report.doc_id}: {p}" for p in report.tables_as_pointer)

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
        ("Rule 63.2(viii)", "Rule sixty-three point two, clause eight"),
        ("Rule 81.6", "Rule eighty-one point six"),
        ("Rule 1.8", "Rule one point eight"),
        ("Rule 624(b)(1)",
         "Rule six hundred and twenty-four, clause b, sub-clause one"),
        ("Rule 27.8 and 63.2(viii)",
         "Rule twenty-seven point eight and sixty-three point two, clause eight"),
        ("a 5-on-3", "a five on three"),
        ("a 2-on-1 rush", "a two on one rush"),
        ("6-on-5", "six on five"),
        ("the 1-3-1 trap", "the one three one trap"),
        ("a 1-2-2 forecheck", "a one two two forecheck"),
        ("2-1-2", "two one two"),
        ("78.8%", "seventy-eight point eight percent"),
        ("~45 s", "about forty-five seconds"),
        ("30–80 s", "thirty to eighty seconds"),
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
        ("a D-to-D pass", "a D to D pass"),
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
        ("two feet (2')", "two feet (two feet)"),
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

    print(f"\n{len(cases) + len(closers) + 9 + 3} assertions, {failures} failures")
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
