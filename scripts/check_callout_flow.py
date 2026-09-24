#!/usr/bin/env python3
"""Where the corpus's ⚠️ callouts sit, and which of them interrupt a section.

⚠️ WORKLIST, NOT A GATE. It has no --strict and should never gain one. A callout in
Common Mistakes is a Common Mistakes entry; a safety limb repeated in two documents is
propagation, not duplication; and a warning that closes a section is the CORRECT state
this tool is meant to produce, so its own count can never go to zero.

⚠️ IT EXISTS BECAUSE TWO CALLOUT CENSUSES WERE WRITTEN INTO project/plans/OPEN_ITEMS.md
AS PROSE AND BOTH WENT STALE. One said "1,538 callouts … runs of up to 18 in a row"; a
re-measurement days later found 1,553 and a longest run of 16, and a THIRD count using a
tighter definition found 428. None of the three was wrong — they counted different things
and none said which. That is the defect this file repairs: the figures now have an owner
that prints them, and no callout figure is ever to be written into the plan again.

THREE DEFINITIONS, AND A REPORT THAT NAMES WHICH IT IS USING:

  --all      every line carrying the marker, including list items and facts lines.
             The broadest count and the least useful: most hits are CORRECT, because a
             Common Mistakes bullet is supposed to warn. Shown for calibration only.

  (default)  FLOW-BREAKING callouts: a blockquote callout or a callout that opens its
             own paragraph, outside ## Common Mistakes, ## Key Takeaways and
             ## Check yourself. This is the population the owner's complaint is about.

  --stacks   runs of consecutive flow-breaking callouts with no prose between them.
             ⚠️ A run inside ONE blockquote is one long warning region, not N boxes, and
             the report says which — a brief that says "nine callouts" where the document
             has one thirty-line blockquote is describing a defect that is not there.

THREE MOVES, NOT TWO. A coordinator broadcast mid-wave that the only way to reduce the
count was to empty a line of markers, "exactly the costly case". That was WRONG and an
agent refuted it on its own output:

  1. KEEP the marker          -- real limb.        count: same   audio: same
  2. MOVE the marker off the paragraph OPENING
     onto the hazard clause                        count: DROPS  audio: SAME
  3. STRIP the last marker    -- hedge only.       count: drops  audio: LOSES
                                                     the spoken "Important."

⚠️ MOVE 2 IS THE RIGHT ANSWER FOR STRUCTURAL FURNITURE -- a marker sitting on
`⚠️ **What to notice.**` puts the spoken escalation on the word "What". Moving it onto
the hazard repairs that rather than hiding it.

⚠️⚠️ MOVE 2's COUNT BENEFIT HAS AN EXPIRY DATE. Two limits an agent measured and
neither is obvious:
  (a) ⚠️ THIS LIMIT IS ABOUT THE DEFAULT COUNT ONLY, AND AN EARLIER VERSION OF THIS LINE
      OVERSTATED IT AS "MOVE 2 DOES NOT WORK INSIDE A BLOCKQUOTE". IT DOES WORK -- ON THE
      SITE. `classify()` tests ">" BEFORE the marker case, and `scan()` yields any line
      holding a marker, so for the DEFAULT census the choice inside a blockquote is binary:
      marked (counted, speaks "Important.") or unmarked (uncounted, silent), and position
      does not help. ⚠️⚠️ BUT `renders_as_panel()` STRIPS THE BLOCKQUOTE PREFIX and
      `remark-corpus.mjs:615` visits paragraphs RECURSIVELY, so a marker moved off a
      blockquote paragraph's opening DOES take it from amber panel to prose. Measured
      23 September 2026 on `positions/goaltender.md`: four blockquote paragraphs
      (`:413`, `:559`, `:579`, `:850`) went panel -> prose, part of a fourteen-panel
      reduction with the spoken "Important." count unchanged at 142.
      ⚠️ THE ENDPOINTS OF THAT WAVE WERE FIRST WRITTEN HERE AS "14 -> 0" AND BOTH WERE
      WRONG; ONLY THE DELTA WAS RIGHT. Measured with this tool once it agreed with
      `site/dist`: `goaltender.md` went 19 -> 5 and the corpus went 372 -> 358. The five
      survivors are all list items. A DELTA STATED AS A PAIR OF LEVELS IS TWO CLAIMS, AND
      NEITHER HAD BEEN MEASURED.
      ⚠️ INSIDE A BLOCKQUOTE, MOVE 2 IS WHAT REMOVES THE AMBER-NESTED-IN-GREY DOUBLE
      FURNITURE. Judge it with `--panels --file <path>`, never with the default count.
  (b) In PROSE, move 2's count benefit was produced by the `startswith(("-","*"))` bug
      fixed above -- the `**Opener.**` paragraph dropped out because it was misfiled.
      NOW THAT THE BUG IS FIXED, EVERY MOVE-2 REPAIR REAPPEARS IN THIS CENSUS. The AUDIO
      benefit is real and permanent; the COUNT benefit was an artefact. Do not bank it.

⚠️ THE AUDIO IS THE RELIABLE MEASUREMENT, NOT THIS TOOL. `md_to_speech.py:2778` sets
`important = "⚠" in text` PER PARAGRAPH and `:2784` prefixes a spoken "Important. "; the
glyph itself is silent (`:313`). It is POSITION-INDEPENDENT -- a marker in a paragraph's
last sentence still hoists "Important." to its FRONT -- and BLOCKQUOTES get it too. So
count spoken "Important." before and after: the drop must equal exactly the number of
paragraphs deliberately de-marked. That check is immune to every defect in this file.

⚠️ AND THE CARRIER TEST "check the section's ```facts block" IS VACUOUS IN 13 OF 39
DOCUMENTS -- rules_primer, uk_rules, core_principles, rink_map, equipment, getting_started
and conditioning_and_recovery among them have NO facts block at all. A vacuous test reads
two ways and the dangerous one is available. Where there is none: does the edit remove any
WORDS? If not, only the spoken escalation is at stake, and the question is purely the
hurt/ejected/penalised test.

⚠️ A HIT IS A CANDIDATE. The test for each one is the style guide's: does a reader who
acts on this section WITHOUT having read the warning get hurt, ejected or penalised? If
yes it stays and may be moved to the end of the section; if no it was never a warning,
it was a hedge wearing a marker. Only reading decides. NEVER SWEEP THIS PATTERN.
"""
import argparse, pathlib, re, sys

MARKER = "⚠️"
SUMMARY = ("## Common Mistakes", "## Key Takeaways", "## Check yourself")
PRE = "(before the first ## — Key focus / Overview)"


# ⚠️ THE SITE'S OWN PANEL TEST, AND IT IS NOT `classify()`.
#
# `classify()` answers "what STRUCTURAL kind of line is this" and is correct at it.
# It does NOT answer "does this render as an amber panel", and those two questions
# come apart on exactly the lines this corpus is made of.
#
# `site/src/plugins/remark-corpus.mjs:617` reads:
#     if (!WARNING_RE.test(toText(node))) return;
# — the anchored `/^\s*(⚠|❗|🚫)/u` applied to the paragraph's FLATTENED text. So:
#
#   `**⚠️ Looking does not protect you.**`   -> toText drops the `**`, marker is
#                                               first -> PANELS. A raw-line regex
#                                               says it does not. WRONG.
#   `**Bold lead.** ⚠️ **Hazard clause.**`   -> marker is not first after
#                                               flattening -> INLINE, no panel.
#                                               `classify()` says "own paragraph".
#
# Both misreadings were made in one session, in opposite directions. An agent's
# first census used a raw-line regex and reported the worst-shaped page of its four
# as clean; it caught itself by rebuilding the check against the real AST. The
# coordinator made the mirror-image error and told another agent to use the raw-line
# form. Measured on the real `equipment.md` repair: `classify()` returned
# "own paragraph" before AND after, while the site went panel -> no panel.
#
# ⚠️ WHAT THIS DOES AND DOES NOT CHANGE. `renders_as_panel()` is the authority for
# panel-vs-inline and is exposed as `--panels`. The DEFAULT count still runs through
# `classify()` and is deliberately unchanged: `classify()` answers a different
# question (does this callout interrupt a section), its docstring records a 3x
# undercount from getting its branch order wrong once already, and every figure in
# project/ was measured with it. Changing the default would silently invalidate
# those. So the two counts disagree ON PURPOSE -- `--panels` is the one that
# predicts the site, and the gap between them is the amber panels that moving a
# marker off a paragraph's opening removed while the spoken "Important." survived.
# Nine pages were repaired that way; the default's numbers did not move, and that
# is why `--panels` exists rather than a rewrite of `classify()`.
INLINE_EMPHASIS = re.compile(r"(\*\*|__|\*|_|`)")


def flattened(stripped):
    """The paragraph text as `toText()` yields it — inline emphasis removed."""
    return INLINE_EMPHASIS.sub("", stripped)


BLOCKQUOTE_PREFIX = re.compile(r"^\s*(?:>\s*)+")

# A list marker is STRUCTURE, not text: `toText(node)` never sees it, because the
# marker belongs to the listItem and the warning lives in the paragraph inside it.
# Requires the space, so `**bold` is emphasis and `*item ` is a bullet.
LIST_PREFIX = re.compile(r"^\s*(?:[-*+]|\d+[.)])\s+")

# A heading marker is structure too: `toText()` on a `### ⚠️ …` heading yields the
# text without the hashes, so the site types the block a warning and the tool must.
# Measured in `equipment.md:90` -- `> ### ⚠️ If you play in Britain` is a warning
# callout on the built page and scored False here until this was added.
HEADING_PREFIX = re.compile(r"^\s*#{1,6}\s+")


def strip_structure(stripped):
    """Remove the block structure the site's `toText()` never sees.

    Blockquote markers and list markers, repeatedly and in either order, because
    they nest: `> - text` and `- > text` both reach a paragraph node whose text
    begins at `text`.

    ⚠️ RAW FIRST, FLATTEN AFTER, AND THE ORDER IS LOAD-BEARING. A paragraph opening
    `**- ⚠️` is emphasis followed by a LITERAL hyphen; the site's `toText()` yields
    `- ⚠️ ...`, which the anchored regex correctly rejects. Stripping list markers
    from the FLATTENED text would turn that non-panel into a panel.
    """
    prev = None
    while prev != stripped:
        prev = stripped
        stripped = BLOCKQUOTE_PREFIX.sub("", stripped)
        stripped = LIST_PREFIX.sub("", stripped)
        stripped = HEADING_PREFIX.sub("", stripped)
    return stripped


def renders_as_panel(stripped):
    """True when the site wraps this paragraph in `<aside class="callout callout-warning">`.

    Mirrors `remark-corpus.mjs:615` : the anchored marker regex against the FLATTENED
    text. This is the authority for panel-vs-inline; `classify()` is not.

    ⚠️⚠️ THE BLOCKQUOTE STRIP IS NOT COSMETIC AND ITS ABSENCE UNDER-COUNTED THE WHOLE
    CORPUS. The first version ran the anchored regex over the raw line, so every
    callout nested inside a blockquote -- `> ⚠️ ...` -- scored False and was reported
    as "not a panel". IT IS A PANEL. `remark-corpus.mjs:615` is
    `visit(tree, 'paragraph', ...)`, which is RECURSIVE and says so in its own comment,
    and its ONLY skip is a parent that is ALREADY a callout. A blockquote is not a
    callout, so a `⚠️`-opening paragraph inside one gets wrapped in the amber aside and
    nested inside the grey blockquote -- double furniture, which is worse than either.

    ⚠️ MEASURED 23 September 2026, and the direction is what matters: the tool reported
    ZERO panels for `goaltender.md`. Re-running the site's own test with the prefix
    stripped found TWENTY-SIX, twelve of them in one section. An agent briefed off the
    unfixed figure would have read "0 panels" as "this file is clean" -- a false pass,
    silently, in the corpus's densest tariff area.

    ⚠️ AND IT WAS FOUND BY READING `remark-corpus.mjs`, NOT BY READING THIS FILE. The
    docstring above claimed to mirror the plugin "exactly" and had done since it was
    written. A comment asserting fidelity to another file is not fidelity to it.
    """
    return bool(
        re.match(
            r"^\s*(\u26a0|\u2757|\U0001f6ab)",
            flattened(strip_structure(stripped)),
        )
    )


def classify(stripped):
    """Which structural kind of line this is.

    ⚠️ ORDER MATTERS AND GETTING IT WRONG UNDER-REPORTED THE WHOLE CORPUS. The first
    version tested `startswith(("-", "*"))` before it could reach the paragraph case, so
    every paragraph opening `**Bold lead-in.**` — which starts with `*` — was filed as a
    LIST ITEM and dropped from the flow-breaking population. Measured at the time: 293
    bold-opening paragraphs misclassified against 618 genuine list items, and a 3×
    undercount in `core_principles.md`, the one document the owner had named. Two agents
    using the tool found it; nobody reading it did. **A list bullet is `- ` or `* ` with a
    SPACE, or `**- `; `**` is emphasis.**
    """
    if stripped.startswith(">"):
        return "blockquote"
    if stripped.startswith(MARKER):
        return "own paragraph"
    if stripped.startswith("|"):
        return "table cell"
    # Emphasis, not a bullet: `**Bold.**` / `*Italic*` open a paragraph.
    if stripped.startswith(("**", "__")) or re.match(r"^\*[^\s*]", stripped):
        return "own paragraph"
    if re.match(r"^[-*+]\s", stripped) or re.match(r"^\d+\.\s", stripped):
        return "list item"
    if re.match(r"^[A-Z][a-z]+:", stripped):
        return "facts line"
    return "inline mid-paragraph"


def scan(root):
    """Yield (path, lineno, section, kind, in_summary, text) for every marker line."""
    for p in sorted(pathlib.Path(root).rglob("*.md")):
        section = PRE
        for n, line in enumerate(p.read_text(encoding="utf-8").split("\n"), 1):
            if line.startswith("## "):
                section = line.strip()
            if MARKER not in line:
                continue
            s = line.strip()
            in_summary = section.startswith(SUMMARY)
            yield p, n, section, classify(s), in_summary, s


LIST_START = re.compile(r"^\s*(?:[-*+]|\d+[.)])\s+")


DIST = pathlib.Path("site/dist")


def bare_glyph_rows(dist=DIST):
    """Yield (page, count) for warning glyphs the SITE gives NO visual treatment.

    ⚠️⚠️ THIS EXISTS BECAUSE A `site-reviewer` SKIMMED FOUR PAGES AND SKATED PAST EVERY
    ONE OF THESE WITHOUT EXCEPTION, then found them by DOM query afterwards. Measured
    24 September 2026: 207 corpus-wide.

    ⚠️ THERE ARE THREE RENDERING STATES, NOT TWO, AND THE WHOLE CALLOUT WAVE WAS PLANNED
    ON A BINARY MODEL THAT WAS WRONG:

      1. `aside.callout-warning` -- the amber PANEL. `--panels` counts these.
      2. `span.warn-inline`      -- amber bold text, an amber left bar and a tint.
                                    A marker moved onto a STRONG run gets this. It is
                                    eye-stopping, and it is why moving a marker does not
                                    cost a skimming reader the escalation.
      3. NOTHING                 -- a small black glyph mid-sentence, often with no space
                                    after it, reading as a typo rather than a warning.

    ⚠️ STATE 3 IS WHAT THIS FUNCTION FINDS, AND IT IS THE DEFECT A MOVE-THE-MARKER WAVE
    MANUFACTURES. `remark-corpus.mjs` needs a `<strong>` after the glyph to bound the
    `.warn-inline` wrapper (see WARNING_TAIL_RE and the shape (c) pass). Marker moved in
    front of PLAIN PROSE -> no wrapper -> no colour, no bar, no bold.

    ⚠️⚠️ AND IT REPRODUCES THE OWNER'S ORIGINAL COMPLAINT IN A WORSE FORM. Before the
    wave the mismatch was panel-vs-prose ACROSS paragraphs; a bare glyph is
    amber-vs-black INSIDE ONE PARAGRAPH, sometimes three lines apart.

    ⚠️ IT READS THE BUILT HTML, because the plugin's shape rules are more than "is the
    next thing bold" and a source-level guess would be a fourth wrong model. A stale or
    missing `dist` is reported, never treated as a pass.
    """
    if not dist.exists():
        return None
    out = []
    for page in sorted(dist.rglob("index.html")):
        h = page.read_text(encoding="utf-8", errors="replace")
        h = re.sub(r'<span class="[^"]*warn-inline[^"]*".*?</span>', "", h, flags=re.S)
        h = re.sub(r'<aside class="callout callout-warning">.*?</aside>', "", h, flags=re.S)
        n = len(re.findall(r"[\u26a0\u2757\U0001f6ab]", h))
        if n:
            out.append((str(page.parent.relative_to(dist)), n))
    out.sort(key=lambda r: -r[1])
    return out


def panel_rows(root):
    """Yield (path, lineno, text) once per amber panel the SITE actually renders.

    ⚠️⚠️ THIS IS BLOCK-AWARE AND `scan()` IS NOT, AND THAT DIFFERENCE IS THE POINT.
    `scan()` yields one row per marker-bearing LINE. The site renders one aside per
    BLOCK. Two corrections are needed to get from one to the other, and each was
    measured against the built HTML rather than reasoned about:

    1. ⚠️ ONE ASIDE PER BLOCKQUOTE, NOT PER PARAGRAPH INSIDE IT.
       `remark-corpus.mjs:567` reclassifies every remaining blockquote as a callout
       and types it `warning` if ANY child warns; the paragraph pass at `:615` then
       skips any paragraph whose parent is already a callout. A blockquote holding
       four `⚠️` paragraphs is ONE amber aside.

    2. ⚠️ ONLY THE FIRST LINE OF A PARAGRAPH CAN OPEN A PANEL. `WARNING_RE` is
       anchored to the start of the paragraph's TEXT, and an indented continuation
       line is part of the paragraph above it, not a new one. Measured in
       `rules_primer.md:128-129`: two `⚠️`-opening lines indented under the list item
       at `:127`. They are lazy continuations, the paragraph's text begins *"A player
       coming out of the penalty box"*, and the site renders NO panel for either.

    ⚠️ MEASURED 23 September 2026, corpus-wide, against `site/dist`: counting per
    marker line gave 384 panels; adding (1) gave 361; adding (2) gave the built
    figure. ⚠️ BOTH ERRORS OVER-REPORTED, WHICH IS HOW THEY SURVIVED -- an over-count
    reads as thoroughness. The UNDER-count that preceded them (no blockquote strip,
    no list strip) read as cleanliness and produced a false pass on `goaltender.md`.

    ⚠️ FENCED BLOCKS ARE NOT PARAGRAPHS. A `⚠️` inside a ` ```facts ` block is code,
    never an aside.

    ⚠️ IT AGREES WITH `site/dist` FILE BY FILE, NOT ONLY IN TOTAL -- a total can agree
    by cancellation. Re-check it that way after any change here.
    """
    for p in sorted(pathlib.Path(root).rglob("*.md")):
        lines = p.read_text(encoding="utf-8").split("\n")
        fenced = False
        prev_blank = True
        quote_emitted = False
        for n, line in enumerate(lines, 1):
            stripped = line.strip()

            if stripped.startswith("```"):
                fenced = not fenced
                prev_blank, quote_emitted = True, False
                continue
            if fenced:
                continue

            blank = not stripped
            in_quote = stripped.startswith(">")
            # A `>` on its own is a blank line INSIDE the quote: it ends the
            # paragraph but not the blockquote.
            quote_blank = in_quote and not BLOCKQUOTE_PREFIX.sub("", stripped).strip()

            if not in_quote:
                quote_emitted = False

            # A paragraph opens after a blank line, after a heading, or wherever a
            # new list item begins.
            opens = (prev_blank or blank or quote_blank
                     or stripped.startswith("#")
                     or bool(LIST_START.match(BLOCKQUOTE_PREFIX.sub("", stripped))))

            if (MARKER in line and opens and not blank
                    and renders_as_panel(stripped)):
                if in_quote:
                    if not quote_emitted:
                        quote_emitted = True
                        yield p, n, stripped
                else:
                    yield p, n, stripped

            prev_blank = blank or quote_blank or stripped.startswith("#")


def flow_breaking(rows):
    return [r for r in rows if r[3] in ("blockquote", "own paragraph") and not r[4]]


def stacks(root):
    """Runs of consecutive flow-breaking callouts separated only by blanks or '>' lines."""
    out = []
    for p in sorted(pathlib.Path(root).rglob("*.md")):
        lines = p.read_text(encoding="utf-8").split("\n")
        section = PRE
        marked = []
        for i, line in enumerate(lines):
            if line.startswith("## "):
                section = line.strip()
            s = line.strip()
            if MARKER in s and classify(s) in ("blockquote", "own paragraph") \
                    and not section.startswith(SUMMARY):
                marked.append((i, section, s.startswith(">")))
        run = []
        for item in marked:
            gap = [lines[j] for j in range(run[-1][0] + 1, item[0])] if run else []
            contiguous = run and all(not g.strip() or g.strip().startswith(">") for g in gap)
            # ⚠️ A BLANK LINE ENDS A BLOCKQUOTE. The first version called a run
            # "one blockquote" whenever every marked line began with ">", so TWO ADJACENT
            # PANELS separated by a blank line scored as one region -- which is the defect
            # the label told agents to ignore. One agent nearly skipped a genuine two-panel
            # stack on its word; another found FIVE separate panels reported as one.
            broken = any(not g.strip() for g in gap)
            if contiguous:
                if broken:
                    item = (item[0], item[1], False)
                run.append(item)
            else:
                if len(run) >= 2:
                    out.append((p, run))
                run = [item]
        if len(run) >= 2:
            out.append((p, run))
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--root", default="content")
    ap.add_argument("--all", action="store_true",
                    help="every marker line, by kind — calibration noise, never a worklist")
    ap.add_argument("--stacks", action="store_true",
                    help="runs of consecutive flow-breaking callouts")
    ap.add_argument("--by-section", action="store_true",
                    help="group a document's flow-breaking callouts by the section holding them")
    ap.add_argument("--bare", action="store_true",
                    help="warning glyphs the SITE renders with NO visual treatment at "
                         "all -- neither an amber panel nor an inline amber run. Reads "
                         "site/dist, so BUILD FIRST.")
    ap.add_argument("--panels", action="store_true",
                    help="count paragraphs the SITE renders as amber panels, via the "
                         "plugin's own flattened-and-anchored test (not classify())")
    ap.add_argument("--markers", action="store_true",
                    help="markers PER LINE -- shows which de-marks are free and which cost audio")
    ap.add_argument("--file", help="restrict to one document (substring match on the path)")
    args = ap.parse_args()

    rows = list(scan(args.root))
    if args.file:
        rows = [r for r in rows if args.file in str(r[0])]
    if not rows:
        print("check_callout_flow: no markdown matched — check --root and --file", file=sys.stderr)
        return 1

    if args.all:
        kinds = {}
        for r in rows:
            kinds[r[3]] = kinds.get(r[3], 0) + 1
        print(f"ALL marker-bearing lines: {len(rows)}")
        for k, v in sorted(kinds.items(), key=lambda kv: -kv[1]):
            print(f"  {v:>5}  {k}")
        print("\n⚠️  Calibration only. A list-item marker in Common Mistakes is correct.")
        return 0

    fb = flow_breaking(rows)

    if args.bare:
        rows = bare_glyph_rows()
        if rows is None:
            print("check_callout_flow: site/dist not found -- build first, then re-run.")
            print("   This check reads the BUILT HTML on purpose: the plugin's wrapper")
            print("   rules are more than \"is the next thing bold\", and guessing from")
            print("   source would be a fourth wrong model of the same thing.")
            return 0
        total = sum(n for _, n in rows)
        print(f"check_callout_flow: {total} warning glyphs render with NO visual "
              f"treatment, across {len(rows)} pages\n")
        for pg, n in rows[:40]:
            print(f"  bare {n:>4}  {pg}")
        if len(rows) > 40:
            print(f"\n  ... {len(rows) - 40} more pages NOT LISTED")
        print("\n\u26a0\ufe0f  A bare glyph is a marker with NO panel and NO inline amber run.")
        print("   A site-reviewer skimming four pages stopped on every amber mark and")
        print("   SKATED PAST EVERY BARE ONE, finding them only by DOM query afterwards.")
        print("   FIX: bold the clause that states the hazard, so the glyph precedes a")
        print("   strong run and the plugin can bound an inline amber wrapper around it.")
        print("   \u26a0\ufe0f  Bold the INSTRUCTION, never a citation -- the wrapper ends")
        print("   where the strong run ends, so a bolded rule number takes the colour and")
        print("   leaves the instruction after it black.\n")
        return 0

    if args.panels:
        panelled = [(str(p), n, t) for p, n, t in panel_rows(args.root)
                    if not args.file or args.file in str(p)]
        print(f"check_callout_flow: {len(panelled)} paragraphs render as amber panels "
              f"of {len(rows)} marker-bearing lines\n")
        print("\u26a0\ufe0f  This is the SITE's test (remark-corpus.mjs WARNING_RE over the")
        print("   FLATTENED paragraph), not classify(). The two disagree on purpose --")
        print("   see the note beside renders_as_panel(). A paragraph that is NOT here")
        print("   reads as prose and still speaks its \"Important.\".\n")
        for f, n, t in panelled[:40]:
            print(f"  panel  {f}:{n}  {t[:70]}")
        # ⚠️ THE SLICE APPLIES WITH --file TOO, AND ITS SILENCE COST A WHOLE PASS.
        # An agent repairing the corpus's heaviest file worked the 40 listed rows,
        # re-ran, and found SEVEN MORE it had never been shown -- in that file's
        # densest penalty area. The header said 47 the whole time. A truncation
        # that does not announce itself is the same species as the silent exit-0
        # false passes catalogued in CLAUDE.md: the tool reports success and you
        # read the wrong bytes. Announce it instead of documenting it.
        if len(panelled) > 40:
            print(f"\n  ... {len(panelled) - 40} more NOT LISTED (listing is capped at 40). "
                  f"Repair these, re-run, and the next ones appear.")
        return 0

    if args.markers:
        rows_m = [(str(p), n, t.count(MARKER), t) for p, n, _, _, _, t in rows]
        multi = [r for r in rows_m if r[2] > 1]
        print(f"check_callout_flow: {len(rows_m)} marker-bearing lines; "
              f"{len(multi)} carry MORE THAN ONE\n")
        print("⚠️  A line with 2+ markers can lose one for FREE -- the paragraph keeps its")
        print("   spoken \"Important.\". A line at 1 marker loses the escalation if de-marked.\n")
        for f, n, c, t in sorted(multi, key=lambda r: -r[2])[:30]:
            print(f"  {c:>2} markers  {f}:{n}  {t[:70]}")
        return 0

    if args.stacks:
        st = stacks(args.root)
        if args.file:
            st = [s for s in st if args.file in str(s[0])]
        st.sort(key=lambda s: -len(s[1]))
        held = sum(len(r) for _, r in st)
        print(f"check_callout_flow: {len(st)} stacks of 2+ consecutive flow-breaking callouts, "
              f"holding {held} of {len(fb)} ({round(100 * held / len(fb))}%)\n")
        for p, run in st:
            shape = "one blockquote" if all(b for _, _, b in run) else "separate blocks"
            sec = run[0][1]
            print(f"  {len(run):>2} in a row  {p}:{run[0][0] + 1}-{run[-1][0] + 1}  "
                  f"[{shape}]  {sec[:56]}")
        print("\n⚠️  'one blockquote' is ONE long warning region, not N boxes. "
              "Do not brief it as N callouts.")
        return 0

    if args.by_section:
        per = {}
        for p, n, sec, _, _, _ in fb:
            per.setdefault(str(p), {}).setdefault(sec, []).append(n)
        for f in sorted(per, key=lambda f: -sum(len(v) for v in per[f].values())):
            print(f"{sum(len(v) for v in per[f].values()):>4}  {f}")
            for sec, ns in sorted(per[f].items(), key=lambda kv: -len(kv[1])):
                print(f"        {len(ns):>3}  {sec[:64]}  lines {ns[0]}…{ns[-1]}")
        return 0

    per = {}
    for p, *_ in fb:
        per[str(p)] = per.get(str(p), 0) + 1
    print(f"check_callout_flow: {len(fb)} flow-breaking callouts across {len(per)} documents "
          f"(blockquote or own-paragraph, outside the summary sections)\n")
    for f, n in sorted(per.items(), key=lambda kv: -kv[1]):
        print(f"  {n:>4}  {f}")
    print("\n⚠️  A hit is a CANDIDATE, never a fix. Read it and apply the "
          "hurt/ejected/penalised test. Never sweep.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
