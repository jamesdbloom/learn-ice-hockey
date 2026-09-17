# `core_principles` podcast episode — NO-GO, 17 September 2026

**Verdict: NO-GO for public use.** Not accepted. `.podcast_queue/state.json` records
`foundation/core_principles` as `blocked`, failure count 1.

## What was generated

A NotebookLM Long/Deep-dive Audio Overview (44:33, `podcasts/Foundation/Core
Principles.m4a`, 86 MB master), generated from three notebook sources:

1. The live rendered page `https://learn-ice-hockey.com/foundation/core_principles/`
   (chosen over uploading the raw `.md` file after `file_upload` could not locate a
   real `<input type=file>` element in NotebookLM's DOM — the upload button opens a
   native picker this session cannot see, and no hidden input was found by
   `document.querySelectorAll('input[type=file]')` either).
2. A source titled `OVERRIDING ACCURACY AND SAFETY CONSTRAINTS FOR THIS PODCAST`,
   the full text of `.claude/skills/notebooklm-episode/prompt_constraints.md`
   (lightly reformatted, bold markup stripped), pasted via NotebookLM's "Copied
   text" source type.
3. A source titled `TEACHING-STYLE INSTRUCTIONS FOR THIS PODCAST`, the full text
   of `project/podcast_generation_prompt_longer.md`, also pasted as a "Copied
   text" source, marked explicitly secondary to source 2.

**Why sources instead of the Customise dialog's own "focus" field:** that field
has a client-side `maxLength` of exactly 5000 characters, enforced silently — no
error, no truncation warning. The full constraints document is 8,636 characters;
the first attempt to paste it directly into the focus field was cut off
mid-sentence inside constraint 7(a), losing 7(b)–(d) and constraint 8 entirely.
Confirmed via `document.querySelectorAll('textarea')` returning
`maxLength: 5000` on that specific field (the "Paste copied text" source dialog's
own textarea has no such limit — `maxLength: -1`). The focus field itself was
then used only for a ~1,400-character pointer telling the model which source to
treat as overriding.

## The finding

Two independent reviewers — `rules-verifier` and `safety-reviewer` — read a
machine transcript of the episode (produced locally with `whisper-cli`, model
`ggml-base.en.bin`, no cloud transcription used) against
`content/foundation/core_principles.md` and each returned NO-GO independently,
before either saw the other's report.

**Fabrications, not paraphrase — content asserted with specific, confident
detail that does not exist anywhere in the source document:**

- An invented IIHF "version 1.0 vs 1.1" provenance narrative, with invented
  dates (May 2025 / July 2025) and an invented "we could not obtain version 1.1"
  claim — which is not merely absent from the source, it is **false of this
  project**: `sources/iihf_rules_v1.1.txt` is on disk and is exactly the edition
  this corpus cites for British readers.
- An invented governing-body scope for the "In-House Rules" (England and
  Scotland, naming England Ice Hockey, the Scottish body, and BUIHA as covered)
  — the source says the opposite: its own British section explicitly disclaims
  reaching BUIHA, NIHL National, or Scottish domestic competition.
- An invented "EIHL Casebook" backstory (that the EIHL runs the IIHF book with
  its own casebook layered on top, not obtained) — the source names the EIHL
  exactly once, as a competition it does not reach, nothing more.
- Invented physiological/biomechanical rationale ("neuromuscular control",
  "force transfer") for why USA Hockey's checking-age line sits at 12-and-under
  — the source states the rule and its scope only, no rationale.

**Worse — a fabricated, actively dangerous injury-response instruction,**
attributed to "the texts" and repeated in the closing summary: "come off the
ice immediately, tell someone, do not drive, see a doctor" presented as *the*
protocol for "if you suspect an injury." No such passage exists anywhere in
`core_principles.md`. The corpus deliberately keeps two different injury
protocols separate because they call for opposite first actions: a suspected
spinal injury (`body_contact_and_battles.md:832`) is "nobody moves them,
someone phones for help" — self-extracting from the ice is exactly the wrong
instruction; a suspected concussion (`:850`) is "off the ice, no return that
day." The episode collapsed both into one blanket instruction that is wrong
for the more urgent case.

**Also found:** Hockey Canada Rule 7.3's third permission clause ("and any
other divisions approved by a Member of Hockey Canada") was silently dropped
from the episode's statement of the rule, in both the body and the summary —
a rule stated without an exception the source explicitly attaches to it.

**What held up:** the episode did NOT state any coaching convention as a
universal rule, did not soften or add an exception to any of the boards-contact
safety absolutes, correctly refused to guess at EIHL Casebook contents or
Northern Ireland's governing rules, and correctly preserved most of the
document's evidentiary hedges (the possession/scanning statistics, the
CARHA grammar tension, the risk-map "coaching reasoning not measured result"
qualifier in the body, though not in the final summary list).

## What this means for the pipeline

Giving the generator the full accuracy/safety constraints as an overriding
source — not summarized, not compressed, the actual text — did not stop it
from confidently inventing specifics, and it invented them precisely in the
areas the constraints most emphasized (rule-set/edition scope, safety
material). The review step caught it, which is the process working as
designed — but it means **no episode from this pipeline can be accepted
without this same two-reviewer pass, every time**, regardless of how carefully
the generation prompt is written. This is a property of the generator, not a
fixable prompt-wording problem, as far as this one test can show.

## Disposition

- `foundation/core_principles`: `blocked`, failure count 1. Master audio kept
  at `podcasts/Foundation/Core Principles.m4a` (not published, not in
  `podcasts_web/`, not in the site manifest).
- `foundation/rink_map` and `foundation/language_and_glossary`: generated in
  the same batch, using the identical three-source method. Held at
  `downloaded`/`processing` pending the same two-reviewer pass — not assumed
  clean by association.
- The stale pre-13-September notebooks for `rink_map` and
  `language_and_glossary` (dated 12 September, predating both the file split
  and several later content fixes) were deleted from NotebookLM on the user's
  explicit instruction before this batch was generated.
- Decision on whether to continue the podcast automation under this
  two-reviewer-per-episode cost, try a different mitigation, or pause,
  is with the user — raised directly, not decided here.

## What this record could not establish

Whether a different prompting strategy (e.g. explicitly forbidding invented
provenance narratives, or using NotebookLM's "Critique" format to self-check
before Deep-dive generation) would reduce this failure rate — not tested.
Whether the fabrication rate is consistent across different source documents
or specific to content with a British-rules section (which is where three of
the four rules-accuracy fabrications landed) — only one episode has been
through this review so far.
