# Getting Better — plan for a new page (DRAFT for owner review, 22 October 2026)

**Status: plan only. Nothing is written or published until the owner approves this plan, and the page ships only when it is ready.**

The owner asked for a page on getting better outside games, covering:
- **More ice:** rec team practices, finding teams and games, youth programmes, and how to do that in different places.
- **Skating practice on your own** at public sessions.
- **Off-ice stick drills and off-ice exercises.**

It must be as clear and easy to read as possible. There will be no YouTube videos of our own, though we can link to good existing ones. Step-by-step SVG diagrams or animations are wanted.

---

## 1. What already exists, and how the new page fits

The corpus already covers parts of this. If the new page repeats them, two pages will say the same thing and drift apart. That kind of drift is the propagation failure this project keeps finding.

| Existing page | What it already covers | How the new page relates |
|---|---|---|
| Getting Started §2–4 | Adult routes onto the ice (learn-to-play, drop-in/stick-and-puck, rec leagues, clubs), children's routes, what "drop-in" and "stick-and-puck" mean, and the English route in | **Link, don't repeat.** The new page gives the practical *how to find it near you* steps and points to §2–4 for definitions. |
| Practice and Development | Why some practice works; **which off-ice practice transfers and which doesn't**; the "unlearning" caution; a weekly plan | **This page is the "why"; the new page is the "how".** The drills chosen must be ones this page says transfer, and the new page links back to it rather than restating the evidence. |
| Skating | Technique, faults, a short off-ice section | Solo drills link to the matching Skating section for the technique. |
| Puck Handling, Shooting, Passing | Technique | The off-ice stick drills link to these. |
| Conditioning and Recovery | Strength, warm-up, recovery, lifting safety ("get coached on the lifts") | Off-ice exercises are taken from here and link to it. **No new strength programme is invented.** |

**Recommendation:** one new page, **"Getting Better on Your Own"**, in the **Off the Ice** section next to Practice and Development. It is a practical, step-by-step companion to that page. (An alternative is to split it into two pages, "Finding more ice" and "Practising on your own". See decision D1.)

---

## 2. Proposed outline

The structure is the same as every other page: Key focus → Overview → body → Common Mistakes → Key Takeaways, plus In short lines, facts blocks and a self-test. Each section opens with what to *do*.

1. **Key focus.** About six things a player does to improve between games, for example:
   - get more ice than your team gives you;
   - spend public sessions on edges and stops, not laps;
   - stickhandle with your head up for 15 minutes a few times a week;
   - only practise off ice what you'd want to repeat on ice.
2. **Get more ice.**
   - **Ask your own club first.** Extra practices, a second team, and adult or development sessions.
   - **Stick-and-puck and drop-in.** How to find them (rink websites, rink apps and booking systems, asking at the desk), what to bring, and drop-in etiquette.
   - **Find a team or a league.** How to ask, the questions to ask (level, checking or not, goalies, cost), and how to get placed on a team as an individual.
   - **Youth programmes.** Learn-to-skate → learn-to-play → club. What to ask, and how to find the right age group.
   - **By place.** A short "where to look" box for each country, naming the governing body's own finder or club list, verified on the day:
     - England, Scotland, Wales and Northern Ireland, with the national body for each;
     - USA;
     - Canada;
     - with a "somewhere else" fallback to the national association.

     These boxes are dated. No prices are written in.
3. **Public skating: what you can and can't do.**
   - **Before any drill:** most public sessions ban sticks and pucks and don't allow fast or backwards skating in traffic. The rink's posted rules win. This section exists so nobody gets thrown out, or runs into a child, doing a hockey drill at a public skate.
4. **Solo skating drills for a public session.** About 8 drills, each one a card:
   - what it trains;
   - the steps (numbered);
   - **a step-by-step diagram**;
   - the common mistake;
   - "do it here" (public session or stick-and-puck);
   - a link to the matching section of Skating.

   Candidates, all no-stick and doable in traffic at low speed:
   - edge glides on one foot (inside and outside);
   - C-cuts;
   - figure-eights round the circles (if allowed);
   - crossovers both ways;
   - snowplough then hockey stops both sides;
   - backward C-cuts (only where allowed);
   - transitions forwards↔backwards;
   - balance and knee-bend holds.

   **Order: easiest first, with a "you're ready for the next one when…" line.**
5. **Stick-and-puck sessions.** Adding the puck: about 6 drills (puck on your forehand and backhand while gliding, figure-eight stickhandling round two pucks, shooting off the pass back from the boards, etc.). Each is a card with a diagram, and each repeats the "keep your head up" point.
6. **Off-ice stick drills.** About 8, from the ones Practice and Development rates as transferring well:
   - stickhandling ball or puck on a pad, head up (wide, narrow, toe drag, figure-eight);
   - wall passing and a rebounder;
   - shooting off a pad into a net.

   Each card adds space and safety: where it's safe to shoot (link to the existing Common Mistakes line about garage and driveway safety), and what to put behind the net.
7. **Off-ice exercises.** About 6, all taken from Conditioning and Recovery (single-leg work, lateral bounds, hip and ankle mobility, the warm-up). Each has a diagram and links to Conditioning for load and lifting safety. No new figures, and no programme invented here.
8. **A sample week.** A simple table: one public session, one stick-and-puck, three 15-minute off-ice blocks. It links to Practice and Development's weekly plan and does not replace it.
9. **Good videos to watch (optional, see D3).** A short, vetted list of existing videos from governing bodies' own channels, for example national coaching programmes, rather than influencer channels. Each entry has the date it was checked and one line on what to watch for. A source-verifier checks every link, and link rot is tracked like every other external link.
10. **Common Mistakes / Key Takeaways / Check yourself.**

---

## 3. Visuals: step-by-step SVGs, with animation as an option

**Recommendation: step-by-step SVG frames first. Animate only where motion is the point, using animated SVG and not GIF.**

| Option | For | Against |
|---|---|---|
| **Static step frames (SVG, 2–4 panels left→right)** | Readable at a glance; prints and works in the PDF and EPUB; screen readers get a caption per step; tiny files; same pipeline and captions as the existing diagrams; theme-aware (light/dark) | Motion is implied, not shown |
| **Animated SVG (CSS)** | Shows the motion (a C-cut, a toe drag); still tiny; can pause; respects "reduce motion"; still one source file | Needs a play/pause control (WCAG 2.2.2 says motion over 5 s must be pausable); more build work; doesn't print, so it falls back to frames |
| **Animated GIF** | Easy to view anywhere | Large files; no pause unless wrapped; no dark mode; blurry; inaccessible; can't be checked by our caption tools. **Not recommended.** |

**What has to be built:**
- The current diagram system (`site/scripts/lib/rink.mjs`) draws a **rink from above**. These drills need two new kinds of drawing:
  - **a skate-track view from above**: edges and curves drawn as lines with arrows, over a small patch of ice or a circle (mostly reusing the rink module);
  - **a simple side or front figure** for body position (knee bend, stick, ball), as a plain stick-figure style, consistent across drills, built from one shared figure module so every drill looks alike.
- Each diagram carries a short caption (spoken in the podcast and read by screen readers) and per-step labels, exactly like today's diagrams. The diagram-reviewer and site-reviewer check them.
- **Pilot:** build three drills end to end (one skating, one stick, one exercise) as frames, plus one animated version. The owner picks the style before the rest are drawn.

---

## 4. Locations: getting the "where to look" right

- Only **official sources** are named: the national governing body's club finder or member list, and the national learn-to-play programme. Each one is fetched and read the day it's written, with the date shown. No rink chains, prices or session times are written in, because they go out of date. The corpus already handles this in Getting Started ("a dated snapshot, not a price list").
- **Britain first** (the owner's home and most readers), then USA and Canada, then a general fallback.
- The 'never state from memory' rule applies: if a body's site doesn't say it, the page doesn't say it.

---

## 5. How it gets written and checked (the usual gate, plus a pilot)

1. **Owner approves this plan** (decisions D1–D6 below).
2. **Sources on disk.** Fetch each governing body's finder and programme pages, plus the public-session rules of a few rinks as examples, and save them as dated snapshots under `sources/` (recorded in `sources/README.md`).
3. **Pilot.** Write sections 3–4 (public skating rules and the solo skating drills) with three diagrams. Review: content-reviewer, safety-reviewer, diagram-reviewer, site-reviewer. **The owner reviews the pilot** for clarity and the visual style.
4. **Rest of the page**, in parallel by section (one agent each: "more ice", stick-and-puck, off-ice stick, off-ice exercises, videos), then the full review set and the commit gate.
5. **Held back from the site** until the owner says it's ready. It is built on a draft flag so it can be previewed without going live.
6. **Then** add it to the nav, the home page ways in, and Getting Started Route 1, and make its two podcast episodes (NotebookLM and ElevenLabs Detailed), plus perhaps a Basics episode ("Getting better on your own").

**Clarity rules for this page in particular:**
- one drill per card;
- numbered steps of one sentence each;
- every term defined the first time it's used;
- no rulebook content beyond the public-session and checking warnings;
- "they" throughout;
- every drill says where it can be done.

---

## 6. Decisions for the owner

| # | Question | Recommendation |
|---|---|---|
| D1 | One page ("Getting Better on Your Own") or two ("Finding More Ice" + "Practising on Your Own")? | **One**, with clear sections. Two if the drills section gets long once the pilot is done. |
| D2 | Visual style: static step frames, animated SVG, or both? | **Frames for every drill; animate a few where motion matters**, with a pause button. No GIFs. |
| D3 | Link to existing videos? | **Yes, but only governing-body or national coaching channels**, dated and checked, a short list. Or none, if you'd rather keep the page self-contained. |
| D4 | Which locations get their own "where to look" box? | **England, Scotland, Wales, Northern Ireland, USA, Canada**, plus a general fallback. |
| D5 | Section: Off the Ice, or Getting Started? | **Off the Ice**, beside Practice and Development, linked from Getting Started Route 1 and the home page. |
| D6 | Podcast episodes for it? | **Yes, once it ships:** NotebookLM and Detailed, and maybe a Basics episode. |

## 7. Risks

- **Duplication with Practice and Development and Getting Started.** Handled by the link-don't-repeat table above; content-reviewer checks for it.
- **Public-session safety and rules.** Every on-ice drill states where it's allowed; safety-reviewer checks it.
- **Off-ice injury** (shooting at home, lifting). Each drill links to the existing cautions, and no new loads are prescribed.
- **Outdated location information.** Every box is dated, uses official sources only and gives no prices; check_external_links tracks the links.
- **Diagram build effort.** The figure module is new work; the pilot measures it before we commit to 30-odd drawings.
