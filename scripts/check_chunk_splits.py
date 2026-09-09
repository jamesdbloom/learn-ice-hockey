#!/usr/bin/env python3
"""Does any repaired value have its PROHIBITION and its REMEDY in different audio chunks?

The whole round-70 repair shape is: end the prohibition with a FULL STOP, start the
positive instruction as its own sentence. That is correct in the ear ONLY IF a listener
hears both sentences together. Chunk packing is global: an edit anywhere re-packs every
chunk after it. If a repair lands on a boundary, the listener gets the prohibition at the
end of one audio file and the remedy at the start of the next -- STRICTLY WORSE than the
defect that was repaired, and no checker in the list looks for it.

⚠️  A WORKLIST, NOT A GATE, and it must never gain a --strict. Measured at
    introduction on 9 September 2026: 2,894 boundaries scanned, 2 hits, and
    BOTH were correct as written -- one is a reassurance ("No shame in this at
    all.") that is not a prohibition at all, and one is an explanation that
    tells the listener in terms that it is "half of a five-clause
    Interpretation", so a listener who stops there knows more is coming.
    READ EVERY HIT.

⚠️  IT EXISTS BECAUSE OF A HANDOVER, NOT A DEFECT. Round 70 made ~60 repairs
    whose shape is exactly "prohibition. remedy." An agent named this as the
    round's most dangerous unchecked side effect and could not test it, because
    chunk packing is GLOBAL -- an edit to an earlier section re-packs every
    chunk after it, so the only run that counts is one taken after every agent
    has finished.

⚠️  `check_chunk_tails.py` DOES NOT COVER THIS. That tool inspects a chunk's
    TAIL in isolation. This defect is a RELATION between a tail and the next
    chunk's HEAD, and one agent hit precisely that gap this round: it reported a
    counterweight orphaned into the following chunk and noted check_chunk_tails
    "does not fire -- it inspects tails, and this is a head."
"""
import pathlib, re, sys
sys.path.insert(0, "scripts")
import md_to_speech as m

CONTENT = pathlib.Path("content")
# The repaired shape: a negation-led sentence, then a sentence starting the remedy.
REMEDY = re.compile(r'\b(instead|get your|keep your|take (?:it|them)|head up|assume|use your|steer|cover|beat|kill|shoot|screen|ask your|find out|play the puck)\b', re.I)
NEG = re.compile(r'^\s*(never|don\'t|do not|no |none|nothing|avoid|cannot)\b', re.I)

bad, checked = [], 0
for md in sorted(CONTENT.rglob("*.md")):
    doc_id = str(md.relative_to(CONTENT)).removesuffix(".md")
    chunks, _report = m.transform_document(md, doc_id, doc_id)
    texts = [m.build_ssml(c) for c in chunks]
    # For each chunk, look at its LAST sentence and the NEXT chunk's FIRST sentence.
    for i in range(len(texts) - 1):
        tail = re.sub(r"<[^>]+>", " ", texts[i])
        head = re.sub(r"<[^>]+>", " ", texts[i + 1])
        tail_s = [s.strip() for s in re.split(r'(?<=[.!?])\s+', tail) if s.strip()]
        head_s = [s.strip() for s in re.split(r'(?<=[.!?])\s+', head) if s.strip()]
        if not tail_s or not head_s:
            continue
        checked += 1
        last, first = tail_s[-1], head_s[0]
        if NEG.search(last) and REMEDY.search(first) and not NEG.search(first):
            bad.append((md, i, last[-140:], first[:140]))

print(f"chunk-boundary scan: {checked} boundaries across the corpus")
if not bad:
    print("no prohibition/remedy pair is split across an audio chunk boundary.")
else:
    print(f"\n{len(bad)} SPLIT PAIR(S) -- read each; a prohibition ending a chunk with its remedy opening the next:")
    for md, i, last, first in bad:
        print(f"\n  {md}  boundary {i}->{i+1}")
        print(f"    ends:   ...{last}")
        print(f"    opens:  {first}...")
