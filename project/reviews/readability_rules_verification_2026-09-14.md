# Rules verification for the principles index — one contradicted claim, and a book that inverts a principle

**Run:** 14 September 2026, by `rules-verifier`, against primary rulebook text in `sources/`.
**Why:** two inventory agents classified several candidate principles `rule-dependent` **on the basis of
what the corpus says** — neither opened a rulebook. A `content/foundation/core_principles.md` index would
have restated those in a **more general form, in a layer read aloud with no surrounding context**.

The verifier's coverage statement is the thing to read first: `ls sources/*.txt` returns **36 files**, and
it diffed that against its own instruction table before relying on any absence — **no stale-table defect
this round**. It read `sources/README.md` in full (1,048 lines) before quoting anything, built
de-hyphenated flattened working copies of fourteen books, and **ran every negative search with a positive
control on the same book.** That is the method this project requires and it is recorded because the
alternative has produced four "cannot be verified" reports whose answer was already in that README.

---

## ⚠️ Finding 1 — a CONTRADICTED claim in live content

`content/foundation/language_and_glossary.md`, the **Shorthanded** entry, states in substance that under
the IIHF book *"neither carve-out exists"*, so in British hockey the shorthanded icing exemption is
**"unconditional"**, and that **"Hockey Canada 6.7(b) is unconditional too."**

**Both halves are contradicted by the books.**

- **IIHF Rule 81.6's second paragraph is the NHL's timing test word for word**, including that a penalised
  player remaining in the penalty box does not alter the ruling — and it is **identical in both the v1.1
  and the 2026/27 editions on disk**, so the British reader's edition question does not rescue it.
- **Hockey Canada 6.7(b) carries a Note 1 immediately beneath the sentence the corpus quotes**: a team
  stops counting as shorthanded once the penalty time expires, whether or not the penalised player has
  left the bench. Reinforced by two Interpretations to 6.7(b).

**The reader cost is concrete and specific.** A British or Canadian penalty-killer who fires the puck down
*after* the clock reaches 0:00 while the teammate is still in the box is called for icing and takes a
defensive-zone draw with no change. **The glossary tells them that cannot happen** — and the glossary is
the layer a reader consults precisely when they do not already know.

**⚠️ It is a propagation gap, not a misreading.** `rules_primer.md`, `special_teams.md` and `faceoffs.md`
each state the timing test correctly; `rules_primer.md` says IIHF gives the same exemption *"with the same
'instant the penalty expires' test"*. **Three owners right, the glossary wrong** — and the glossary is the
layer an index borrows from. **Repair dispatched.**

### And the rule has five positions, not two

| Book | Rule | Exceptions to the shorthanded exemption | Division scope |
|---|---|---|---|
| NHL | 81.6 | **two** — the timing test, and a major-penalty team that left nobody on the penalty bench | none |
| IIHF (both editions) | 81.6 | **one** — the timing test | none |
| USA Hockey | 624(b)(1) | **one** — the timing test | ⚠️ **Youth 15-Only+, Girls 16U+, High School, Adult ONLY** |
| Hockey Canada | 6.7(b) + Note 1 | **one** — the timing test | none |
| CARHA | 65(d) | **zero written** | none |

⚠️ **Below the USA Hockey classifications named, a shorthanded team IS called for icing.** Confirmed twice
— in 624(b)(1)'s own parenthetical and independently in the USA Hockey Casebook at Rule 624 Situation 18,
which frames the question in different words. **A bare "a shorthanded team may ice the puck freely" is
under-scoped for an entire membership tier**, and this project's style guide already names this rule as
the corpus's most widely-repeated defect: a rule that travels without its exceptions.

The NHL's **second** exception is NHL-only — attacked by phrase and again by concept across all five
books, with positive controls, returning zero everywhere else.

---

## ⚠️ Finding 2 — CARHA inverts the principle the other four books protect

This is the finding most likely to be new to the corpus, and it lands on an audience the corpus names.

Four books give a defender the right to stand still:

| Book | Duty on the defender who has closed the boards |
|---|---|
| NHL 56.1 | *"not required to move in order to let an opponent proceed"* |
| IIHF 56.1 (both editions) | the same sentence |
| IIHF 101.1 (women's) | *"Players are allowed to 'hold their ground' … No Player is required to move out of the way"* |
| USA Hockey | *"A skater is entitled to stand their ground and is not required to move"* |
| **CARHA 49(a)** | ⚠️ **a minor or major to a player who *"stands in front of an opponent for the purpose of making contact, and/or does not avert body contact with an opponent"*** |

**A reader taught "hold your ground, you are entitled to the ice you are standing on" is taught the
precise conduct CARHA 49(a) penalises — minor, and major where injury results. CARHA governs adult
recreational leagues, which is one of this corpus's two named audiences.**

**And Hockey Canada writes no hold-your-ground clause at all** — six phrasings searched, all zero,
positive control *Interference* returning 41. Its only relevant sentence is the right to close off the
boards to force the carrier toward the middle.

---

## ⚠️ Finding 3 — what "be inside, force them outside" licenses when stated bare

Stated bare in `content/foundation/rink_map.md` at two sites; hedged with a four-book stack in
`defender.md` KT2 and `switching_positions.md`. **The brief's premise held.**

**The route is licensed; the arrival is not.** USA Hockey's Glossary names *angling* a **legal defensive
skill**, and a Note to 604(c) rules that legal competitive contact is not penalised under the
body-checking rule — so **the route survives in the classifications where checking is banned.** Hockey
Canada's Interpretation 1 to 7.3(a) permits steering an opponent into the boards *"without actually
touching or body-checking them. This is acceptable."*

⚠️ **The NHL, IIHF and CARHA books print no angling permission at all** — searched with positive controls.
What the NHL and IIHF print instead is 56.1's body-position rule, which makes the inference well-founded;
**the corpus under-sells its own evidence here.**

Four things the bare sentence licenses that a book forbids:

1. **The finish is a body check** — barred by USA Hockey 604(a) at 12 & under and below, in all
   Girls'/Women's and all non-check Adult classifications; by Hockey Canada 7.3(a) at U13 and below and
   throughout female hockey; and, per the IHUK Junior Rules of Competition read from the `_layout`
   extraction, at **U10 and U12** in the British junior structure, which is non-checking.
2. **IIHF 101.1 bars it in all women's hockey even where checking is otherwise legal**, with a *"step or
   glide into"* a minor on its own — identical in both editions.
3. **CARHA 49(a) inverts it outright** (finding 2).
4. **The permission is carrier-only and has no expiry clause.** USA Hockey 625(a)(4) makes it a minor
   where a defender changes skating lane or foot speed to play the body of an opponent *"who is no longer
   in control of the puck"*. **A steer continued half a second after release is interference in the book
   that most expressly licenses angling.**

**Repair dispatched to `safety-reviewer`, holding `rink_map.md` exclusively.**

---

## ⚠️ Finding 4 — the ducking asymmetry is sharper than the corpus states, and inverts where a young reader is

Both limbs **CONFIRMED**, with the checker's amnesty scoped **three ways over** (the rule is titled *"Head
Contact – Junior/Senior"*, its headnote restricts it, and each sub-rule and the Interpretation itself
repeat the words) and the ducker's prohibition at Rule 8.7 carrying **no division clause anywhere.**

⚠️ **And the corpus's warning that readers invert this understates it.** In **minor and female hockey** the
governing head-contact rule is **7.6, not 7.7**, and 7.6 has **no ducking amnesty of any kind** — its
headnote reads *"Regardless of the circumstances, players must be penalized for contact with an opponent's
head, face, or neck at all times"*, and 7.6(a) reaches **accidental** contact. **So in minor and female
hockey both players are exposed on the same play; in Junior/Senior only the ducker is.** That is the
opposite of the intuition.

**The ducker's limb does not generalise past Hockey Canada**, and a bare statement would be over-scoped in
four of five books: IIHF 44.1 needs *near the boards* **and** *causes an opponent to tumble over them*;
USA Hockey needs the *purpose of making contact at or below the knees*, so a duck purely to **avoid** a
check is not it; **the NHL and CARHA have no such rule at all** (`duck`/`crouch` return zero in the whole
NHL book; CARHA has no clipping rule).

**The rule and the safety instruction point the same way here** — the corpus elsewhere tells readers never
to duck, for spinal-injury reasons. Worth saying so rather than leaving the reader to infer it.

---

## ⚠️ Finding 5 — screening, where the corpus is right and better evidenced than it claims

Every limb **CONFIRMED**: NHL/IIHF 69.3's in-crease ground requires a *"significant position within the
goal crease"*; 69.4, the outside-crease rule, has **no positioning limb at all**, only contact.

**And the books settle it themselves, which is stronger than the corpus's structural reading.** NHL
Reference Table 14's *Screening Situations* **5C** and **5E** both put the attacker outside the crease or
on the crease line, impairing the goalkeeper's ability to defend the goal, and both read **"Goal is
allowed."** The two disallowed situations put the attacker inside. IIHF reproduces all five identically at
Appendix IV Table 16 Situation 5, under *"Contact with the goalkeeper"* rather than *"Screening
Situations"* — **exactly as the corpus says** — and unchanged in 2026/27.

**So the corpus's reading of 69.1's "only if" as a necessary condition is not an inference it made; it is
the answer the book publishes.**

**USA Hockey writes no screening rule at all** — two hits for `screen` in the rulebook and two in the
casebook, none a goaltender screen; `line of sight` zero in both. **This matches the corpus's existing
disclosure word for word** — one of the ones this round was attacking, and it **held**. What USA Hockey
writes instead is 625(b), a **flat bar on position**. Hockey Canada keys its vision provision to the
crease too, via Interpretation 3 to 8.5(a) — ⚠️ **so "the crease keying is NHL/IIHF only" is imprecise;
what is NHL/IIHF-only is a no-contact screen ground written as such.**

Two consequences relayed to the agent holding `rules_primer.md`: a **latent tension between two of that
document's own sentences** on whether Hockey Canada has a counterpart to 69.3, and the Blind Hockey crease
rules, which are stricter and have no "puck preceded the player" exception.

---

## Finding 6 — F1/F2/F3 ownership is SPLIT, and a single credit would lose the limb that catches people out

`systems/forechecking_systems.md` **does** hold the definition, in both its body and its ` ```facts `
layer — *"F1, F2 and F3 are defined by order of arrival at the puck. Nothing else."* **All borrowers agree
on the substance; no contradiction found across nine documents.**

⚠️ **But a second limb is not in the credited owner**: *"they belong to whichever team is forechecking, so
on a breakout F1 is the opponent."* It lives in `language_and_glossary.md`, and `center.md` cites the
glossary for it — **correctly.** A principles index crediting one owner would send a reader to a document
that does not contain the limb.

This also **closes wave 1's declared open question**, where one inventory agent could not reach the file
its own documents credited.

---

## What changes as a result

| | |
|---|---|
| ⬜→✅ | `language_and_glossary.md` **Shorthanded** — repair dispatched, agent holds the file exclusively |
| ⬜→✅ | `rink_map.md` **"be inside, force them outside"** at both sites — repair dispatched to `safety-reviewer` |
| ⬜→✅ | `rules_primer.md` screening framing — relayed to the agent already holding that file |
| ⬜ | **No principle enters the index bare.** Of the eight candidates checked, **six** become false or under-scoped without their qualifier |
| ⬜ | **CARHA 49(a)'s inversion needs an owner.** It is not currently stated anywhere as a general fact about adult rec hockey |
| ⬜ | **Credit both owners for F1/F2/F3**, or drop the "whichever team is forechecking" limb rather than mis-cite it |

---

## What this method could not have found

Recorded from the verifier's own closing, because it is the next round's scope.

- **How a rule is ENFORCED.** NHL and IIHF 69.1 both say Rule 69 is enforced *"exclusively in accordance
  with the on-ice judgement of the Referee(s)"* — so a verified reading of 69.3 is not a prediction about
  any actual goal.
- **A rule that exists only in a league bulletin.** `sources/README.md` records that no EIH or SIHA Rule
  Bulletin, no EIHL Casebook, no NIHL National regulations and no IIHF Sport Regulations are on disk — and
  **IIHF Rule 5.6 defers to the last of those by name.**
- **The NHL Situation Handbook**, which is not publicly obtainable. Every NHL claim here rests on rule text
  and Reference Tables **with no casebook to check them against**, while USA Hockey and Hockey Canada were
  checked against theirs. That is an asymmetry in confidence, not in effort.
- **The IIHF Situation Handbook**, either edition, which was not searched — and a `confirmed` in the
  rulebook alone is not a full result under this project's method.
- **Which book a given reader is under**, which is the question every finding above turns on.
- **Two individually-correct sentences that contradict each other read aloud in sequence.** Finding 5's
  framing tension was noticed in passing; **nobody looked for others systematically.**
