# Findings — site and accessibility

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 2 section(s).

---

### OPEN — full-sheet diagrams scroll inside their box at 960, 1248 and 1280 px

**Confirmed at exactly the predicted widths, both themes, both pages:**

| viewport | column | svg | overflow |
|---|---|---|---|
| 960 | 592 | 640 | **48 px** |
| 1248 | 600 | 640 | **40 px** |
| 1280 | 632 | 640 | **8 px** |

**Cause: `global.css:2019` — `min-width: 640px` against a content column under 640 px between ~900 and
~1290 px viewport.** ⚠️ **1280×800 is a very common laptop, and at 960 about 7.5% of the sheet width is
hidden until the reader scrolls inside the box.**

✅ **NONE of the five new diagrams is full-sheet, so all five render whole at every width.** **The page body
never scrolls horizontally at any width — that invariant holds.** **Fix: `min-width: min(640px, 100%)`.**

---

### ✅ CLOSED 3 September 2026 — full-sheet diagrams scrolling at desktop widths

⚠️ **THE PROPOSED FIX WAS WRONG AND THE AGENT REFUTED IT WITH ARITHMETIC.** **`min-width: min(640px, 100%)`
resolves a percentage against the container, so it can never exceed it — combined with
`figure.diagram svg { width: 100% }` it collapses to NO FLOOR AT ALL below 640.** ⚠️ **At 375 px the sheet
would render 346 px wide and the common player label would drop from 9.4 px to 5.1 px — exactly the
unreadable-on-a-phone case the existing comment records.** ***"It fixes the laptop by reintroducing the
phone defect verbatim."***

**Applied instead: the 640 px floor stays as the base rule, with one media query at `60rem` — where the
grid furniture appears — letting the column override it.** ⚠️ **Viewport, not container width, is the only
thing that can distinguish *"narrow because of the sidebar"* from *"narrow because the screen is small"*:
a 592 px column occurs BOTH at a 960 px desktop AND at a 630 px phone.**

⚠️ **AND MY BRIEF'S PREMISE WAS WRONG. The column is NOT under 640 "between roughly 900 and 1290" — it is
under 640 in TWO NARROW BANDS ONLY: 960–1007 and 1248–1287.** **At 900 the shell is still block layout
(column 871); from 1008 to 1247 the two-column layout has already grown past 640.** **Eighty-eight pixels of
viewport width in total.** **Column arithmetic derived from the tokens reproduces all five browser
measurements exactly.**

**Worst shrink the rule can ever apply: 7.5% (592/640), primary label 9.4 → 8.7 px.** ⚠️ **The agent stated
its own falsifiers — any overflow left at 960/1248/1280; the svg not 640 at 375; a `--full` figure inside a
narrower container (0 of 44 today) — and wrote them into the comment.** ⚠️ **Legibility at 592 px is
ARITHMETIC, not a screenshot. A browser pass could overturn it.**
