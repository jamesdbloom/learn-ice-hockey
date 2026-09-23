# A false penalty-tier claim in five documents, and a brief that undercounted it threefold

**22 September 2026.** Found by a `safety-reviewer` that read **CARHA Rule 52 in full** instead of
grepping it, while checking unrelated work in `positions/winger.md`.

## The defect

The corpus said the ejection for charging a goaltender is mandatory under **Hockey Canada alone**.

**`sources/carha.txt:2559-2562`, Rule 52(b):**

> *"A Major penalty and a Game Misconduct **shall be assessed** to any player who charges a goalkeeper
> while the goalkeeper is within the goal crease or who injures an opponent as a result of a charge."*

⚠️ **"shall be assessed" is the book's own mandatory register, not an inference** — Rule 52(a)
contrasts it explicitly in the same rule: *"A Minor penalty or, **at the discretion of the Referee**, a
Major penalty shall be assessed."* **The book distinguishes the two itself.**

**The hazard:** a CARHA adult-rec player was told the ejection was the referee's call. It is automatic.
⚠️ **They expect two minutes and are thrown out of the game** — and most of the sites are ` ```facts `
lines, **voiced alone with a 300 ms break either side**, so a listener heard the false claim with no
surrounding prose to soften it.

## ⚠️ The brief named three sites. There were nine.

**A threefold undercount, and the coordinator wrote the brief.** Worse than the number is *where* the
six extra sites were:

| found by the brief | found only by the agent |
|---|---|
| `shooting.md:291`, `:492` (facts) | `shooting.md:515` (body) |
| `playing_without_the_puck.md:619` (facts) | `shooting.md:832` (**Common Mistakes**) |
| | `shooting.md:892` (**Key Takeaway 6**) |
| | `playing_without_the_puck.md:632` (body) |
| | `playing_without_the_puck.md:864` (**Common Mistakes**) |
| | `playing_without_the_puck.md:936` (**Key Takeaway 11**) |

⚠️⚠️ **FOUR OF THE SIX MISSED SITES WERE IN THE SUMMARY LAYERS** — two Key Takeaways and two Common
Mistakes. **That is the layer the podcast extracts and the layer a skimming reader reads.** The brief
was built from somebody else's grep for the exact strings *"alone"* and *"only"*; the agent found the
rest by **reading every charging passage in both documents**.

**The lesson is the one this project keeps relearning: a grep finds candidates, a layer test decides.**
A coordinator relaying a grep produces an agent that fixes what the grep found.

## What the books actually say — read in full this session, not grepped

| book | tier | mandatory? |
|---|---|---|
| **Hockey Canada 8.5(b)** | major + game misconduct | **Yes** — *"will be assessed to any player who charges the goaltender"* |
| **CARHA 52(b)** | major + game misconduct | **Yes** — *"shall be assessed"* |
| NHL 42.1 | *"A minor, major or a major and a game misconduct shall be imposed"* | No — the tier is the referee's |
| IIHF 42.1 / 42.4 (both editions) | major + GM on reckless endangerment | No — *"at their discretion, may assess"* |
| USA Hockey 607(c) | minor + misconduct **or** major + GM | No |
| PWHL 42.1 | the NHL's sentence in the feminine | No |
| EIHL Casebook Rule 42 | GM mandatory **only** on a major that injures a face or head | narrower trigger, already stated correctly |

**Seven playing-rule books on disk reach the tier; two make it mandatory.**

⚠️ **And the old claim was wrong in the OTHER direction too.** *"All but the IIHF add a match penalty"*
overstated: **CARHA Rule 52 writes no match penalty.** The tier exists in that book — Rule 34 defines
it, Rule 48(a) reaches one for deliberate injury, Rule 53(a) for checking from behind — **but its
charging rule contains none.** The repairs now distinguish the two outliers by their *different
reasons*, rather than lumping them together.

## The repair form: COUNT-FREE, and it got SHORTER

**No list was extended with a fifth book and another clause** — which is what the owner's readability
rule (now at the top of `CLAUDE.md`) forbids. Every repair reads *"in every book"* or *"the two that
remove the discretion"*, **so it cannot go stale as `sources/` grows, which is how this defect was
born.**

⚠️ **Substitution kept every facts line under cap while ADDING a book:** `center.md:410` went
**296 → 284 of 300**; `shooting.md:492` sits at 279; `playing_without_the_puck.md:619` at 290.
**Naming a thing really is shorter than pointing at it**, measured again.

## Also repaired: the crease line was "three of the four" and is four

Verified in four books by the agent that fixed it — IIHF 1.7 (*"The marked line belongs to the Goal
Crease"*), USA Hockey's Note to 625(b), Hockey Canada's Glossary, and **CARHA's Glossary** at
`carha.txt:273-274`. `shooting.md:14` now names all four; `:293` is a `Never:` line at its 200 cap and
reads *"most books count that line as crease"*, count-free **because naming four would have breached
the cap** — the eviction hazard, avoided rather than discovered.

## ⚠️ What this round could not have found, and it is a lower bound

**The agent searched by the corpus's own words** — `charg`, `alone`, `only one`, `all four books`,
`mandatory`. ⚠️ **A site stating the same falsehood without any of those strings is invisible to it.**
Its own words: *"a sentence reading 'under Canadian rules you are thrown out' would have scored
zero."* **That is the `kickshot` failure recorded in `CLAUDE.md` — sweeping for the corpus's label
rather than for the act.**

⚠️ **Nine sites in two files, plus two in `center.md` and two in `winger.md`, is a LOWER BOUND on the
corpus total.** The claim very likely also lives in `rules_primer.md`, `offensive_zone_play.md` and
`goaltender.md` — **all three were held by other agents today and none was read.**

**Not checked at all:** what a game misconduct costs *beyond* the game in any of these books. CARHA's
suspension schedule was not read, **so a CARHA reader now knows they are ejected and not what
follows.** And `shooting.md:515` still scopes an injury-tier claim to four books' goaltender
interference rules — **CARHA's own Rule 66 was not read.**
