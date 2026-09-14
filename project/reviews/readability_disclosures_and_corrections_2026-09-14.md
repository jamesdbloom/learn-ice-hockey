# The disclosure attack, the repair cascade, and two corrections to this round's own records

14 September 2026. Written by the coordinator **after** the round's two worst coordinator errors, and it
opens with them because they are the most useful thing in it.

---

# Part 1 — ⚠️ Two corrections to records this round already committed

## Correction 1 — the coordinator relayed a verifier finding that was over-broad, into four briefs

`readability_rules_verification_2026-09-14.md` says the corpus's *"two carve-outs"* on shorthanded icing
are a **timing test** and a **major-penalty exception**, and that saying other books carry *"neither"* is
therefore false. **That is not the corpus's taxonomy and it is not right.**

A corpus-wide census — run by the coordinator only *after* dispatching three agents on the strength of
it — shows the corpus defines its two carve-outs, consistently, in `rules_primer.md`, `special_teams.md`
and `breakouts.md`, as:

1. the **NHL's empty penalty bench** on a major, and
2. **USA Hockey's classification limit.**

**The timing test is a THIRD, separate condition.** On the corpus's own definition, *"IIHF carries neither
of the two carve-outs"* is **TRUE**.

⚠️ **And two documents already state the timing test correctly, which the verifier reported as absent.**
`rules_primer.md` says *"IIHF gives the same exemption, **with the same 'instant the penalty expires'
test** (Rule 81.6)"* and, separately, *"Note also the timing test in the same rule"*. `special_teams.md`
carries it as its own facts value — *"Release the puck before your penalty expires and the icing does not
apply, even if the penalty ends while it is travelling"* — and its British blockquote says *"**The expiry
test is in the same words too**"*, then quotes the IIHF verbatim.

**So the defect is far narrower than dispatched.** It is the word **"unconditional" / "unqualified"** used
in units that are **heard alone** — a ` ```facts ` value, a Key Takeaway, a bolded blockquote lead — where
the expiry test is not in the same unit to qualify it. **Corrections were sent to all four agents.** One
had already been told to attack a negative-existence claim (*"The rulebook does not state a general
'moment of the shot' test"*) that is probably sound; that instruction was withdrawn.

> **This is CLAUDE.md's named failure verbatim: a wrong premise promoted by the dispatcher into another
> agent's brief as its top priority. The census that refuted it took one command and should have been run
> before the first dispatch, not after the third.**

## Correction 2 — the coordinator relayed a mis-statement of IIHF Rule 101.1, and an agent caught it

The same record says IIHF 101.1 *"bars it in all women's hockey even where checking is otherwise legal"*.
**The agent holding `rink_map.md` read the book and refused the wording.** 101.1 opens:

> *"In Women's Hockey 'bodychecking' is allowed when there is a clear intention of playing the puck or
> attempting to 'gain possession' of the puck, with the exception from the situation described in this
> rule."*

**101.1 does not bar body checking in women's hockey.** What it bars is the specific arrival: competing
players *"are not allowed to use the boards to make contact with an opponent to eliminate her from the
play, push her into the boards, or pin her along the boards"*, plus *"[a]ny move by a Player to step or
glide into an opposing Player"* as a minor.

⚠️ **Had the brief's wording been carried, `rink_map.md` would have told every woman reading it that her
book bans body checking.** And `switching_positions.md` already states 101.1 correctly — *"allows
bodychecking where the puck is the clear object, but carves the boards out"* — so **a later consistency
sweep aligning it to the coordinator's version would have corrected the right document into the wrong
one.** The agent flagged that explicitly.

**Both corrections have the same cause: a reviewer's quotation treated as verification.** The review
process says so in terms — *"A reviewer's quotation is evidence, not verification… Re-derive from the book
before any quoted string, number or tier enters `content/` — including one a reviewer has just handed
you."* It does not currently say *including one you are only putting in a brief*, and on this evidence it
should.

---

# Part 2 — the disclosure attack

Four negative-existence claims were attacked, each with the style guide's mandatory three-step order:
the document's **own Sources trailer**, then `sources/` and the working directory, then **siblings** —
before any web search.

| Disclosure | File | Layer | Verdict |
|---|---|---|---|
| *"no study ranking turnovers by where on the ice they happen was found"* | `risk_management.md` | ` ```facts ` | **NARROWER THAN STATED** |
| *"Spacing is a large part of possession… reasoning, not a measured result"* | `puck_support_and_spacing.md` | ` ```facts ` | **UPHELD** |
| *"no governing body publishes a support distance"* | `puck_support_and_spacing.md` | body + **Key Takeaway** | **NARROWER — falsifier in its own Sources list** |
| *"'most impactful' is not 'highest return on effort', and nobody has measured either"* | `time_and_space.md` | body | **UPHELD** |
| *"Nobody publishes a ranking of amateur communication mistakes"* | `on_ice_communication.md` | body | **UPHELD as written** |

⚠️ **Every defective one fails in the same direction: it makes the corpus look LESS supported than it is.**
That is precisely the shape the style guide records from round 59 as invisible to reviewers, *"which is the
opposite of the failure every other convention here guards against, and exactly why no reviewer stopped on
them."* **It has now happened again, in a round that was specifically looking for it.**

## The one that is worst, because the document already knew

`puck_support_and_spacing.md` says in three places that **no governing body publishes a support
distance** — including in its **Key Takeaway**, the flattest form and the one a reader who goes no deeper
will land on.

**Its own Sources trailer cites a USA Hockey article.** Refetched: HTTP 200, no redirect, string located in
the **rendered** body inside a named coach's quoted speech:

> *"They know that, generally, the 40-foot pass isn't a good option. **The 8-to-10-foot-or-less pass is
> really what the small-area games are all about.**"*

⚠️ **And six lines below the denial, the document relies on it**: *"Note the tension with the one sourced
number. Bruyere's '8-to-10-foot-or-less pass' above is tighter than this default… Where they conflict, the
sourced figure is the more defensible one."*

**The document denies, six lines above, what it relies on below.** The repair is a scoping one — a
governing body *publishing a coach's rule of thumb* is not a governing body *issuing a standard*, and the
disclosure's real content survives — but the flat sentences must stop conflating *no standard* with *no
figure*.

⚠️ **A prior attack is on record and missed it.** `round_28_summary_layers.md` tested this claim and wrote
*"Not falsified."* **Round 28 did not check the document's own Sources list** — the exact failure the style
guide names.

**Positive evidence found for the narrower form, and recorded nowhere in the corpus until now:**
`sources/iihf_coachdev_off_tactics.txt`, the IIHF's own Coach Development Level I manual on disk, treats
support fully (Offensive Principle #3, §20.2.3 *Mid-Lane Support*) and **gives no distance at all** — its
wording is *"close and quick support"*.

## The one that is false rather than narrow, and its falsifier has a DOI

`risk_management.md` and `body_contact_and_battles.md` both relay the communication disclosure **with the
scoping word dropped**: *"no published ranking of amateur mistakes has been found… and [On-Ice
Communication] says exactly that about the same class of claim."*

**Wrong twice.** The owner says *amateur **communication** mistakes*, so it does not say "exactly that".
And the unscoped form is contradicted by a study **this corpus already cites, with a DOI** —
`game_management.md`'s *Gilbert & Trudel, "A Profile of Rule Infractions in Bantam Level Ice Hockey", ASTM
STP 1341 (2000), doi:10.1520/STP15246S* — 55 games, five leagues, 850 penalties, 62.4% minor aggression
penalties. ⚠️ **And `risk_management.md` itself points the reader at the section built on that study.**

**The owner's scoped version held under attack** — tested against its own eleven sources, `sources/`, the
siblings, two Europe PMC queries and OpenAlex. `on_ice_communication.md` needs no change, and is a model
of how to phrase one of these.

## A provenance finding that fell out of it

`zone_entries.md` reaches Thibaud Chatel's 47%/18% entry figures **second-hand through Hockey's Arsenal**,
while the author's own 2022 post is live (HTTP 200, 186,225 bytes) and carries the sample the second-hand
version lacks: **56,700 5-on-5 entries, manually tracked, Swiss National League, since 2019.** The post
also contains material **adverse** to the corpus's framing of blue-line risk, which is owed to the reader.

## One handover the coordinator took, and could not close

The attack named its own highest-value follow-up: read **Schulte et al. (2017), *"A Markov Game model for
valuing actions, LOCATIONS, and team performance in ice hockey"*, doi:10.1007/s10618-017-0496-z** — the
most likely remaining falsifier of the turnover disclosure.

**Attempted this session and failed.** Springer's article URL 303s to an identity-provider cookie wall;
the browser was blocked from the domain; Semantic Scholar's API returns `isOpenAccess: false` with **no
open PDF**. ⚠️ **It is UNREACHABLE, not absent, and the distinction is the corpus's own rule.** The
underlying Routley MSc thesis **is** open and was read: it values NHL actions by zone but publishes zone
splits **for faceoffs only**, and its two giveaway examples are context-conditioned and opposite in sign.
**So the verdict stands at NARROWER, not FALSE — and the row stays open.**

---

# Part 3 — the cascade, and what it says about method

The round was scoped to two pilot documents. **The verification the plan itself demanded then found
defects in nine more**, none of which was in any plan row:

| File | Why |
|---|---|
| `language_and_glossary.md` | contradicted claim — **repaired** |
| `rink_map.md` | bare contact instruction at two sites — **repaired** |
| `special_teams.md` | "unconditional" in a facts value, a Key Takeaway and a blockquote lead |
| `faceoffs.md` | "unqualified" in a facts value |
| `goaltender.md` | ⚠️ **in nobody's brief** — found because the glossary agent refused to treat its own file as the whole defect |
| `rules_primer.md` | two relayed findings, into an agent already holding the file |
| `puck_support_and_spacing.md` | disclosure denies what the document relies on |
| `body_contact_and_battles.md` | unscoped relay, falsified inside the corpus |
| `risk_management.md` | both of the above |
| `zone_entries.md` | second-hand provenance |

**Three method observations worth keeping:**

1. ⚠️ **The single highest-yield action of the round was an agent looking beyond its own file.** The
   glossary repair was briefed as one file. Its agent went looking for siblings and found four, including
   `goaltender.md`, which no brief, plan row or verifier report named. **Nothing in the dispatch found
   that; refusing the dispatch's implicit scope did.**
2. ⚠️ **The coordinator's census should precede the dispatch, not follow it.** One `grep` over `content/`
   for the claim's own wording refuted the brief three agents were already acting on, and found three more
   sites in `breakouts.md` at the same time.
3. **Three agents refuted a coordinator premise this round, and every refutation was correct.** The
   instruction to attack the brief is doing the work the record says it does.

---

# What this could not have found

- **Whether the repairs are right.** Every one is new text, and **new text has not been reviewed.** Nine
  files are mid-repair as this is written; none has been through `content-reviewer`, `facts-reviewer`,
  `safety-reviewer` or `site-reviewer`, and the round is not committable until they have.
- **The Schulte paper**, above — the one unreached falsifier, recorded as unreachable rather than absent.
- **Whether other disclosures are false.** Four were attacked out of a corpus-wide population the tool
  counts in the hundreds. **Two of four were defective. Nobody should read that rate as reassuring.**
- **Whether any relay of the "two carve-outs" conflation exists in a layer nobody has grepped** — the
  census covered `content/`, not diagram captions in `site/src/diagrams/*.mjs`, which are **voiced** and
  which no agent this round has read.
- **Whether the coordinator made the same relay error a third time.** Two were caught, both by agents
  rather than by the coordinator. There is no reason to think the rate is zero.
