# Findings — readability and structure

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 5 section(s).

---

### R1 Long paragraphs — real, but a smaller unit than R0

---

### T0-R RETRACTED — M9 is not a defect, and its sub-claim is false

`content-reviewer` measured all 36 sections opening into a list across 8 documents: **zero need a
lead-in.** 16 are `## Common Mistakes`/`## Key Takeaways`, whose list form the style-guide template
prescribes; 17 are heading → ` ```facts ` → list, where the listener hears the heading, then *"The key
facts for this section"*, then 3–8 facts, so orientation exists; 1 is a glossary where the list IS the
content; 1 is dropped by `md_to_speech.DROP_SECTION_HEADINGS`; 1 is bare and better bare.

⚠️ **And the plan's specific sub-claim is FALSE.** It said one list opens with the literal token `1.`
*"voiced as 'one.'"*. Rendered, `faceoffs.md` §*The sequence* emits **"First, … Second, … Third, …
Fourth, … Fifth,"**. The ordinal expansion is correct. **Whatever produced that finding is not in
these eight files.**

---

### T0-R3 `center.md` and `winger.md` are the `goaltender.md` split shape, unrecorded

Same method as the plan's M1 figure for `goaltender.md` (35% → 88%):

| document | split | before | after |
|---|---|---|---|
| `center.md` | L392 | 29.4% | **81.5%** |
| `winger.md` | L400 | 31.1% | **70.9%** |

Sharpest: `center.md`'s `### Offensive Zone: Without the Puck` is **277 words at 0% rule-citing**, and
its own child `#### The crease is the one line you don't cross` is **3,126 words at 98.9%** — an 11:1
ratio between a coaching section and the rules subsection hanging off it. `winger.md` repeats it.
⚠️ **Remedy is the plan's own `goaltender.md` remedy — SPLIT, delete nothing.** The material is
penalty-bearing.

---

### T0-P3 CLOSED (tool half) — `check_pointers.py` now sees its own construction

Modifier slot added to both table-pointer patterns:
`\bthe (?:[a-z][a-z-]* )?(?:table|column|row|chart|list) (?:above|below)\b`.

**4 hits → 7.** All three confirmed danglers now caught: `defensive_zone_coverage.md:96`
(*"The comparison table below"*), `rules_primer.md:876` (*"the broken-stick row above"* — it shares
one very long sentence with the face-off-edition clause, so the tool's display truncates before the
phrase; same hit), and `body_contact_and_battles.md` (*"the checking table above"*).

Suppressions rose 3 → 11, all in documents whose tables all read as prose. **The suppression rule was
never the bug** and is still deliberately conservative — it under-suppresses for a mixed document, and
now labels those hits ⚠️ MIXED and says in terms that it cannot tell which table the sentence means.

**Still a worklist. No `--strict`, ever.** 6 of the 7 are mixed-document hits it cannot resolve.

⚠️ **CONTENT HALF STILL OPEN.** Two spoken sentences send a listener to a table the renderer drops:
- `content/systems/defensive_zone_coverage.md:96` → the 6-column table at `:367`
- `content/foundation/rules_primer.md:876` → the 6-column, 23-row table at `:846`

⚠️ **Do NOT delete either pointer** — both are correct for a web reader, and this corpus renders to a
page as well as to speech. Carry the fact inline AND keep the pointer. For `:96` the mitigation is
already there (the three systems are voiced inline at `:88`, `:96`, `:99`, `:234`, `:245`–`:274`), so
only the wording dangles. `:876`'s substance is edition provenance and does not survive being heard.

---

### T0-P3 content half — CLEARED for `defensive_zone_coverage.md:96`, my claim refuted

The pointer at `:96` aims at the dropped 6-column table at `:367`. ⚠️ **It is correctly page-only.**
Rendered, **the same `<p>` as the pointer already voices** the net-front answer for man-on-man, the
collapsing box and the strong-side overload; hybrid is voiced at `:287`, Box+1 at `:321`. **The pointer
dangles as wording only and is legitimate for a web reader. No edit.** Shrinking the table would cost
the page reader the comparison.

**Both halves of T0-P3's content claim are now refuted** — `rules_primer.md:876` too, where the renderer
emits a substitution notice naming the website. ⚠️ **The tool fix was right; my reading of what it found
was wrong twice.**
