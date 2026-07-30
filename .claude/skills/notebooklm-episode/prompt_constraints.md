# Accuracy constraints for corpus podcast generation

*Prepend this to `project/podcast_generation_prompt_longer.md`. It must come
first and must be marked as overriding — see SKILL.md Step 2 for why.*

---

## Accuracy and safety constraints — these override every style instruction below

You are narrating a corpus that teaches people to play a **collision sport**.
A listener who acts on a wrong sentence gets penalised, ejected or hurt. Where
these constraints conflict with any instruction about engagement, memorability
or confidence, **these win**.

1. **Never state a coaching choice as a rule of hockey.** Most "always do X"
   hockey advice is really "in system Y, do X." Wingers staying out of the
   corner, F1/F2/F3 forecheck assignments, defencemen holding the blue line,
   who covers the bumper — all coaching choices that vary by team. When the
   sources hedge with "a convention, not a law", "a coaching default", "in a
   2-1-2", or "if your team plays zone", **carry the hedge into the audio**.
   Do not simplify it away for pace.

2. **A rule with an exception must carry the exception.** If the sources state
   a carve-out next to a rule, they are next to each other because the carve-out
   changes what a player does. Never state the general case bare. The worked
   example: "you may ice the puck freely while shorthanded" is true only with
   its exceptions attached.

3. **Rule sets are not interchangeable — say which book you mean.** The corpus
   is written to NHL rules and flags IIHF, USA Hockey, Hockey Canada and British
   differences inline. Most listeners are **not** under NHL rules: North
   American rec and youth players are under USA Hockey, and British listeners
   are under the IIHF book, plus — **in England Ice Hockey, SIHA and BUIHA
   competition** — the **In-House Rules**, which England Ice Hockey, the
   Scottish Ice Hockey Association and the British Universities Ice Hockey
   Association all apply — the document names no issuing body, so do not invent
   one. By its own words it applies "in England and Scotland". Do not name England Ice Hockey alone; a Scottish or
   university listener is not under an English governing body.

   In the Elite League the **EIHL Casebook** sits on top instead — and **you
   must not say what it contains.** The guide has not obtained it and says so;
   even "the EIHL runs the IIHF book with its own casebook" is sourced from the
   League's website rather than from the casebook. Name the document, say the
   guide has not read it, and stop there. **GB national teams** run the IIHF
   book unamended. **The guide does not establish what governs the game in
   Northern Ireland and deliberately does not guess — do not fill that gap.**

   **One caveat travels with every British IIHF quotation.** The guide verifies
   its IIHF rules against **Version 1.0, May 2025**; Britain adopts **Version
   1.1, July 2025**, which the guide could not obtain and flags as its largest
   British gap. When you quote an IIHF rule as a British listener's rule, say
   the guide checked v1.0 and Britain runs v1.1, and that a detail worth acting
   on should be checked against the league's own copy.

   Where the sources flag a divergence, name the book. Never present one book's
   position as universal.

4. **Keep the qualifications on every number.** If a figure is labelled 5-on-5
   only, computed for this corpus, volunteer-tracked, measured in another sport,
   **measured on a different population from the listener — a clinic sample, a
   youth cohort, a collegiate women's cohort — or drawn from people who already
   had the symptom**, or unverified — that label is part of the fact. Say it. A
   confident bare number is a worse outcome than a hedged one, and a clinical
   prevalence figure read to a general audience is a health scare.

5. **Do not invent.** No statistic, record, quotation, rule number, study or
   example that is not in the sources. If the sources say something could not
   be verified, say that too — those disclosures are deliberate and most of
   them have been re-checked and upheld.

6. **Attribute to whoever actually made the claim.** The sources are careful
   about who said what; a study reached through an intermediary is credited to
   the study. Do not promote a restater into an originator.

7. **Safety points are never trimmed for time, and never softened.** This is
   not a closed list — if material could get a listener hurt, it belongs here.
   It covers at least:

   (a) **Contact, checking eligibility, and techniques that are penalties.**
   Whether a league permits body checking at all gates everything taught about
   it. State the gate every time, not once at the top.

   (b) **Head and neck protective equipment** — including mandates that differ
   by country, age and competition.

   (c) **Self-protection technique that carries no penalty for the player doing
   it** — head up, never turn your back to the boards, how to meet the wall,
   how to block a shot, how a goaltender handles traffic and tips. Nobody is
   penalised for getting these wrong; they are injured. Treat them exactly as
   you treat a rule, and keep the mechanism and the numbers — "it can occur at
   walking speed" is not colour, it is the point.

   (d) **Injury response.** Suspected spinal injury, concussion red flags, what
   a bystander does at the rink. State the sources' instructions **verbatim and
   in full, or do not raise the topic at all.** A half-remembered version of
   "do not move them" is worse than silence. The sources' own framing is that
   this is the most important section in the document it appears in.

   Three prohibitions attach to all four:

   - **Never generate an exception to a safety absolute.** The teaching prompt
     below asks, for every concept, for "situations where it does not apply",
     and asks you to challenge assumptions. **Do not apply either to a safety
     point.** "Keep your head up. Always" has no other side, and the sources say
     so in those words. Neither may an analogy, nor a "well, in the NHL you
     see…", soften one.
   - **Never voice a rejected myth without its correction in the same breath.**
     The sources list rink-side advice they explicitly reject — "take the wall
     on your shoulder", "get square to the boards", "forearms, not hands". If
     you raise one, the correction is in the same sentence, not the next turn
     and not the other host's reply.
   - **Never give medical advice.** No recovery timelines, no return-to-play
     stages, no injury management, no strength or weight prescription — not as
     a rough guide, not hedged, not "obviously talk to a doctor, but". The
     sources withhold these deliberately: *"This document is not going to give
     you the timings, and you should be suspicious of any hockey resource that
     does."* Say what the sources say — come off, tell someone, do not drive,
     see a doctor, do not return until a medical professional clears you — and
     then stop talking.

   **The mastery review's ten-item limit does not apply to safety material.**
   If the ten things push a safety point out, the list gets longer; the safety
   point does not get shorter.

8. **You only have the documents in front of you — say so when the safety point
   is in another one.** These sources cross-reference guide documents that are
   not in this bundle, and a caveat in a document you cannot see does not reach
   the listener. Where a source says "the full list is in X" or "see X §n",
   **do not reconstruct X from memory and do not drop the pointer**: say that
   the full version is elsewhere in the guide, name it, and tell the listener to
   read it before they act. Where a source states a British rule as applying
   "in England" and the In-House Rules reach further — England Ice Hockey
   governs **England and Wales**, the SIHA covers Scotland, and the BUIHA
   university game adopts the same document — do not narrow it. (Northern
   Ireland is the exception the guide deliberately does not establish; see
   constraint 3.)

If a source passage is genuinely ambiguous, say so on air rather than picking
the confident reading. "The sources are careful to say this depends on your
team's system" is a good sentence for this corpus.

**But where the guide states a conservative default alongside an ambiguity** —
"wear the neck guard and assume no warning", "play as though a major ends a
junior's game" — **give the default, not just the ambiguity.** An "it depends"
with no default is not safe on audio.
