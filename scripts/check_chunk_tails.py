#!/usr/bin/env python3
"""Report ` ```facts ` values that TERMINATE a rendered audio chunk.

⚠️ RETRACTION FIRST — THIS TOOL'S ORIGINAL PREMISE WAS FALSE
------------------------------------------------------------
This file was written believing a chunk was **a separate audio file the listener
might never open**. It is not, and the two greps that settle it were never run
before the tool was built:

  * `site/src/components/AudioPlayer.astro:11` is
    `const src = ${AUDIO_BASE}/${id}.mp3` -- **one file per document**, played by
    a single `<audio>` element. No playlist, no per-chunk player.
  * `md_to_speech.py`'s own docstring says chunking exists to fit **Polly's
    per-request limits**, with a manifest so the pipeline can **concatenate**.

**A chunk boundary is a seam inside one continuous file.** The listener hears
what follows after the ordinary 300 ms break, exactly as at every other value.
Anything ranked by this tool on "the next file" reasoning is over-ranked, and the
sibling fact matters too: **`###` headings do not create chunks** -- only
`block.level == 2` opens one -- so a section split can never move a boundary on
purpose.

WHY THIS STILL EXISTS
---------------------
Because the test that was doing the real work never depended on the premise.
**Every facts value is voiced alone, in its own `<p>` with a 300 ms break either
side, so it must tell the truth alone -- at any position in its block.** A value
whose limit lives in the *next* value is exactly as defective in the middle of a
block as at a seam.

So read this tool as what it actually is: **a sampler that surfaces values whose
qualification lives outside them.** The chunk edge is how it finds candidates,
not why they are defects. Rank on the standalone reading and nothing else.

The case that built it -- `special_teams.md`'s icing grant, terminal in its chunk
with both carve-outs following -- was a genuine defect, and would have been one
in mid-block for the same reason. **The finding was right and the explanation was
wrong**, which is the more dangerous combination, because the finding vouches for
the explanation.

⚠️ **No grep over `content/` can see this, and neither can any of the six gate
checkers.** The boundary is created by the renderer's chunker and depends on the
*cumulative length of everything above it*. Two consequences:

  1. A value can become chunk-terminal because of an edit made somewhere else
     entirely, in prose it has nothing to do with.
  2. Fixing one by lengthening its block MOVES the boundary, which can make a
     different value chunk-terminal. The repair and the defect are the same
     lever.

⚠️ **THIS IS A WORKLIST, NOT A GATE.** It has no `--strict` and should not gain
one. Being chunk-terminal is **not** a defect by itself -- something has to end
every chunk, and a self-contained value ending one is fine. It is a defect only
where the value **depends on what follows it**: a permission whose limits come
next, a rule whose scope comes next, a claim whose counterweight comes next.

**Read every hit.** The question to ask is the one the corpus already asks of
every facts value, with the volume turned up: *does this sentence still tell the
truth if the listener stops here?*
⚠️ **THREE WAYS TO MISREAD THIS TOOL'S OUTPUT, all learned the hard way.**

**1. `--prose` lists the last sentence that GRANTS something, not the literal last
sentence of a chunk.** An agent checking a reported boundary found the tool naming a
different sentence than the one actually ending it, and said reading the output alone
*"would have made me call the brief wrong."* **To judge a boundary, render the document
and read the chunk. Do not infer the tail from this list.**

**2. ⚠️ THE CORPUS-WIDE TOTAL IS UNUSABLE AS A BEFORE/AFTER SIGNAL WHILE OTHER AGENTS
ARE LIVE.** The GRANT total was watched drifting 31 -> 32 -> 33 across three consecutive
runs **with the document under repair byte-stable throughout** — other agents were
editing other files and the checker read a moving tree. **Scope the comparison to the
file you are changing.** The differential use this tool exists for only works
per-document.

**3. ⚠️ A REPORTED BOUNDARY MAY STRAND NOTHING.** Before treating one as a defect, check
whether the stranded limbs are already voiced in the ` ```facts ` layer of an EARLIER
chunk. In one case all four limbs of a rule were present as separate `<p>` elements one
file before the split, so the listener had heard every one of them. **The layer test
decides, not the boundary.**


"""
from __future__ import annotations

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import md_to_speech as tts  # noqa: E402

# ⚠️ Labels do NOT all render the same way. `_label_lead` renders `Never:` with an
#: EM DASH, deliberately -- a full stop would terminate the negation and leave a
#: bare imperative. So match either form, or every `Never:` value is invisible here.
#: A label standing alone after the sentence split -- "Rule." -- which must be
#: re-joined to the value it introduces before the tail is judged.
LABEL_ONLY = re.compile(
    r"(?:Rule|Convention|Never|Action|Key|Risk|Read|Technique|Targets|Options)\.")

LABEL = re.compile(
    r"^(Rule|Convention|Never|Action|Key|Risk|Read|Technique|Targets|Options)"
    r"(?:\.\s|\s*[\u2014\u2013]\s*)")

#: Words that make a terminal value suspicious -- it grants, permits or asserts
#: something whose qualification may live in the next chunk. Deliberately broad:
#: this is a worklist, and a false positive costs one read.
#: ⚠️ Ranked, not filtered. A terminal `Never:` value is a PROHIBITION standing
#: alone: over-strict at worst, which is the safe direction, and the label's own
#: em dash keeps the negation attached. A terminal value that GRANTS something is
#: the dangerous shape -- its limits are the thing that lives in the next chunk.
#: The first run of this tool flagged all 22 hits because "never" was in the
#: pattern, which buried the one class worth reading. Separated.
#: ⚠️ SECOND BUG, same shape as the first: this pattern was written for grants
#: phrased as PERMISSIONS and was blind to grants phrased as RELIEFS -- a
#: carve-out saying an act is *not* the thing that costs you. A live case went
#: unreported: `Rule: Being pushed, shoved or fouled into the goalie is not
#: contact you initiated...` is a relief clause, chunk-terminal, and matched
#: none of the original words. Found by an agent reading the tails by hand.
#: **A relief is exactly the dangerous shape** -- its conditions are what the
#: next chunk carries.
GRANTS = re.compile(
    r"\b(cannot be called|may|can|permitted|allowed|free|freely|no violation|"
    r"not a penalty|is legal|legal|entitled|need not|no penalty|"
    r"is not contact|not deemed|shall be allowed|will be allowed|stands|"
    r"relieves|relief|exempt|carve-out|no such|"
    r"does not (?:apply|reach|count|void|disallow))\b", re.I)
PROHIBITS = re.compile(r"^Never\b", re.I)


def last_spoken_unit(text: str) -> str | None:
    """The final spoken sentence of a chunk, with its label re-attached.

    Both of this tool's shipped bugs lived here, and both made it report a clean
    corpus. Extracted into ONE function so `self_test` exercises the code `main`
    actually runs -- a test that reimplements the logic it is testing would have
    passed against either bug, which is how the first version shipped.
    """
    parts = [s for s in re.split(r"(?<=[.!?])\s+|(?<=[.!?])(?=[A-Z])", text)
             if s and s.strip()]
    tail: list[str] = []
    for part in parts:
        if tail and LABEL_ONLY.fullmatch(tail[-1].strip()):
            tail[-1] = tail[-1].rstrip() + " " + part.lstrip()
        else:
            tail.append(part)
    if not tail:
        return None
    return " ".join(tail[-1].split())


def self_test() -> int:
    """Guard the two bugs this tool shipped with, both of which made it report clean.

    ⚠️ **A checker is code, and code has not been reviewed.** The first version of
    this file reported "23 chunk-terminal values, 0 grants" and was believed --
    including by agents who cited the figure back as evidence their repairs were
    safe. The true figures were 243 and 29. Both bugs are below; neither is
    reachable by reading the source, because both are about what the RENDERER
    emits rather than what this file does.
    """
    cases: list[tuple[str, str, str]] = [
        # (rendered chunk text, expected last unit, why)
        (
            "...uses its extra man.Action. Take away the middle and force them to one side.",
            "Action. Take away the middle and force them to one side.",
            "⚠️ The renderer emits NO SPACE between a sentence and the next label. A "
            "whitespace-anchored split returns the whole chunk as ONE sentence, so the "
            "tool reported nothing at all.",
        ),
        (
            "Something before. Rule. A team below their opponent's strength cannot be called for icing.",
            "Rule. A team below their opponent's strength cannot be called for icing.",
            "⚠️ A label is a word and a FULL STOP, so the sentence split severed it and "
            "the 'last sentence' began mid-value. Every label except `Never:` became "
            "invisible -- `Never` survived only because it renders with an EM DASH.",
        ),
        (
            "Prior text. Never - Stretch numerical strength beyond penalties.",
            "Never - Stretch numerical strength beyond penalties.",
            "The em-dash label must still be found -- it is the one that always worked, "
            "and a fix for the others must not break it.",
        ),
    ]
    failures = 0
    for text, expected, why in cases:
        got = last_spoken_unit(text)
        if got != expected:
            failures += 1
            print(f"FAIL: {why}\n  expected: {expected!r}\n  got:      {got!r}")
    # And the ranking must separate a grant from a prohibition.
    grant = "Rule. A team cannot be called for icing and no violation is called."
    prohibit = "Never - Stretch numerical strength beyond penalties."
    if not (LABEL.match(grant) and GRANTS.search(grant) and not PROHIBITS.match(grant)):
        failures += 1
        print("FAIL: a grant-shaped terminal value is not classified as a grant")
    # ⚠️ A RELIEF is a grant phrased as a denial -- "is not contact you initiated".
    # The first GRANTS pattern was blind to the whole shape and silently dropped
    # five values, including a live chunk-terminal one in `center.md`.
    relief = ("Rule. Being pushed, shoved or fouled into the goalie is not contact you "
              "initiated, provided the attacking player made a reasonable effort to avoid it.")
    if not (LABEL.match(relief) and GRANTS.search(relief)):
        failures += 1
        print("FAIL: a RELIEF-shaped terminal value is not classified as a grant")
    if not PROHIBITS.match(prohibit):
        failures += 1
        print("FAIL: a `Never:` terminal value is not classified as a prohibition")
    print(f"\n{len(cases) + 3} assertions, {failures} failure(s)")
    return 1 if failures else 0


def main() -> int:
    root = Path(__file__).resolve().parent.parent
    docs = sorted((root / "content").rglob("*.md"))
    if not docs:
        print("check_chunk_tails: no documents found", file=sys.stderr)
        return 2

    prose = "--prose" in sys.argv
    total = flagged = prohibitions = prose_hits = 0
    for path in docs:
        rel = path.relative_to(root / "content")
        doc_id = str(rel.with_suffix("")).replace("/", "__")
        try:
            chunks, _ = tts.transform_document(path, doc_id, str(path.relative_to(root)))
        except Exception as exc:                          # pragma: no cover
            print(f"check_chunk_tails: {path} failed to render: {exc}", file=sys.stderr)
            return 2

        for index, chunk in enumerate(chunks):
            text = tts.plain(chunk.tokens).strip()
            if not text:
                continue
            # The last spoken sentence of the chunk.
            # ⚠️ The renderer emits NO SPACE between a sentence and the next
            # label -- "...uses its extra man.Action. Take away..." -- so a
            # whitespace-anchored split silently returns the whole chunk as one
            # sentence and this checker reports nothing. Split on the capital too.
            last = last_spoken_unit(text)
            if last is None:
                continue
            if not LABEL.match(last):
                # ⚠️ BODY PROSE. Until this existed the tool scanned facts values
                # ONLY, and a whole class was invisible: a repair that adds a
                # rule's LIMIT as a NEW PARAGRAPH after its permission moves the
                # chunker's boundary and puts a file break between them. That is
                # exactly what happened in `shooting.md` -- the fix created the
                # defect it was closing, and no checker could see it.
                #
                # The remedy the agent found is the one to teach: **fold the limit
                # into the SAME SENTENCE as the permission.** The chunker splits
                # only at sentence ends, so it cannot separate them.
                #
                # Off by default: every chunk ends in prose somewhere, so this is
                # noisy by construction and is a reading list, not a finding list.
                if not prose:
                    continue
                if not GRANTS.search(last):
                    continue
                prose_hits += 1
                print(f"\n{path.relative_to(root)}  chunk {index:03d} (of {len(chunks)})  [PROSE]")
                print(f"     {last[:200]}")
                continue
            total += 1
            if PROHIBITS.match(last):
                prohibitions += 1
                continue
            if not GRANTS.search(last):
                continue
            flagged += 1
            print(f"\n{path.relative_to(root)}  chunk {index:03d} (of {len(chunks)})")
            print(f"     {last[:200]}")

    print()
    print("=" * 70)
    print(f"{total} facts value(s) end a chunk. {flagged} GRANT something and are "
          f"worth reading;")
    print(f"{prohibitions} are `Never:` prohibitions, which stand alone safely and are "
          f"not listed.")
    if prose:
        print(f"{prose_hits} BODY-PROSE chunk tails grant something -- pass --prose to list "
              f"them, as here.")
        print("⚠️  A body permission split from its limit by a chunk boundary is invisible to")
        print("    every other check. Fold the limit into the SAME SENTENCE as the permission;")
        print("    the chunker splits only at sentence ends.")
    else:
        print("(Body prose not scanned. Pass --prose: a repair that adds a limit as a NEW")
        print(" PARAGRAPH after its permission can put a file break between them.)")
    print()
    print("⚠️  WORKLIST, NOT A GATE. Ending a chunk is not itself a defect -- something")
    print("    ends every chunk. It is a defect only where the value DEPENDS on what")
    print("    follows. Ask: does this still tell the truth if the listener stops here?")
    print("⚠️  And note the lever cuts both ways: lengthening a block to fix one hit")
    print("    MOVES the boundary and can make a different value chunk-terminal.")
    return 0


if __name__ == "__main__":
    if "--self-test" in sys.argv:
        raise SystemExit(self_test())
    raise SystemExit(main())
