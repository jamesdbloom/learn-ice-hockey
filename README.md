# Ice Hockey — Learning to Play the Game

A documentation corpus for learning ice hockey: where to be, how to execute, how to read the play, and how five players work as one unit.

**35 documents. ~18,000 lines. Sixteen adversarial review rounds.** Every document ends with **Common Mistakes**, **Key Takeaways**, and a dated **Sources** section — and flags, in the text, anything that could not be independently verified.

> **Rule set:** Written to NHL rules throughout. Where IIHF, USA Hockey or typical rec-league rules differ in a way that changes how you play, it is flagged inline.
>
> **Start here if you're new:** [Getting Started](content/getting_started.md) → [Rink Map and Glossary](content/rink_map_and_glossary.md) → [Rules Primer](content/rules_primer.md) → your position.

---

## What this is, and who it is for

This is written for people who want to **play ice hockey better** — both someone who has never been on the ice and an experienced player who wants to understand why their coach asks for what they ask for.

It is not a rulebook, not a history, and not a fan's guide. Every section is meant to leave you knowing what to actually *do* on the ice, and to tell you *why*, because the reason is what makes an instruction transfer to a situation nobody described to you.

Two things shape everything here:

- **Nothing is presented as a law of hockey when it is a coaching choice.** Where a system determines your job, the system is named, at least one realistic alternative is given, and you are told to go and find out which one your team plays. (The corpus default, where one is needed, is **low zone collapse** defensive coverage with a **2-1-2 forecheck**.)
- **Uncertainty is disclosed rather than smoothed over.** Claims that could not be independently verified are kept and explicitly labelled, with the uncertainty described, rather than quietly dropped or asserted with confidence they have not earned.

*[Getting Started](content/getting_started.md) is the document for someone who has not played yet: how to find a session, what registration involves, which tier you belong in, and what actually happens in your first hour at the rink. Everything else here assumes you are already on the ice.*

---

## How this corpus is organised

The material is built on the idea that "how to play hockey" has five distinct on-ice layers, and that most hockey instruction only ever teaches one of them:

| Layer | Question it answers | Where it lives |
|---|---|---|
| **Foundation** | What is everything called, and what's legal? | Glossary, rules, communication |
| **Positional** | Where do I stand and what's my job? | The four position documents, plus moving between them |
| **Systems** | How do five of us act as one unit? | Breakouts, forechecks, zone coverage… |
| **Technique** | How do I physically execute it? | Skating, shooting, passing… |
| **Hockey IQ** | How do I read the play and decide? | Support, time and space, scanning… |

Knowing your position without the systems means you follow rules you don't understand. Knowing the systems without technique means you know where to be but can't get there. Knowing both without hockey IQ means you execute the wrong thing at the right time.

A sixth group — **Off the ice** — sits underneath all five: equipment, conditioning, practice, the mental game, team culture and how to watch. It is not a layer of play, but every layer above depends on it.

And before any of them sits **[Getting Started](content/getting_started.md)** — the only document here that assumes you have never been on the ice. The five layers teach you how to play; that one tells you how to get into a session in the first place.

**The order below is the reading order.** It is deliberate and it is not alphabetical. The website's navigation and previous/next links are generated from the same ordering, held in [`site/src/data/structure.json`](site/src/data/structure.json).

---

### Getting onto the ice — before everything else

| Document | What it covers |
|---|---|
| [Getting Started](content/getting_started.md) | How to actually start playing. Learn-to-skate and learn-to-play routes for adults and children, drop-in vs stick-and-puck vs shinny, house league vs travel vs adult rec tiers, what registration and insurance involve, what a first practice looks like hour by hour, the minimum kit, and — most importantly — how to find out what applies to *your* association, because almost all of it varies locally and changes yearly. |

---

### Foundation — read these first

| Document | What it covers |
|---|---|
| [Rink Map and Glossary](content/rink_map_and_glossary.md) | Every named area of the ice, all the lines and markings, directional vocabulary, and a full glossary. The canonical reference the rest of the corpus links to. |
| [Rules Primer](content/rules_primer.md) | The canonical rules reference — offside, icing, the full penalty catalogue, goaltender rules, faceoffs, officials, and a four-way NHL/IIHF/USA Hockey/rec comparison. |
| [On-Ice Communication](content/on_ice_communication.md) | The actual words to shout. Forty-four calls grouped by purpose, plus the goaltender's own eight, who makes each one, and what the receiver does. |

---

### Positions

| Document | Summary |
|---|---|
| [Center](content/positions/center.md) | The engine of the line. Works more of the ice than any other position — all three zones, full width — most defensive responsibility of the forwards, primary faceoff taker, and — under the most common backcheck assignment, which is a coaching choice rather than a law — owner of the middle lane on the backcheck. |
| [Winger](content/positions/winger.md) | Width, wall battles and the forecheck. Your lane is your responsibility. |
| [Defender](content/positions/defender.md) | Gap control, the net front, and the last line before the goalie. |
| [Goaltender](content/positions/goaltender.md) | Angles, depth, rebound control — and the loudest voice on the ice. Includes a section written for skaters on what your goalie needs from you. |
| [Switching Positions](content/switching_positions.md) | The bridge between the four above: what transfers when you are moved, what has to be relearned, and which of your existing good habits actively work against you in the new job. Wing↔centre, forward↔defence, anyone→goal, playing your off wing, an honest timeline, and how to ask for a switch or handle being moved without being asked. Claims are labelled coaching craft vs sourced throughout. |

The three skater documents share one skeleton: by zone (defensive, neutral, offensive), and by situation within each zone — carrying the puck in free space, carrying under pressure, pressuring an opponent, and playing without the puck. **The goaltender document deliberately does not use that grid** (you spend the game in one zone, carry the puck essentially never and pressure nobody); it is organised by skill instead, and opens with a table translating the skaters' framing into its own so you don't lose your place moving between the four.

---

### Systems and situations — how five players act as one

*(The style guide splits the last three of these out as "situational" rather than "systems". Same documents, same material; the grouping below is the pedagogic one.)*

| Document | Summary |
|---|---|
| [Breakouts](content/breakouts.md) | Getting out of your own end with control. Nine named options, when each is right, and how each is defeated. |
| [Zone Entries](content/zone_entries.md) | The hardest twenty feet in hockey. Carry vs dump vs delay, dump-in types, and using the offside rule as a tactical tool. |
| [Offensive Zone Play](content/offensive_zone_play.md) | Cycling, low-to-high, net-front play, and the royal road — why a pass across the middle before a shot is worth so much. |
| [Forechecking Systems](content/forechecking_systems.md) | 2-1-2, 1-2-2, 1-3-1, 1-4, the left-wing lock. Angling, and F1/F2/F3 as roles set by order of arrival. |
| [Neutral Zone Systems](content/neutral_zone_systems.md) | The trap and how to beat it, regroups, and lane discipline. |
| [Defensive Zone Coverage](content/defensive_zone_coverage.md) | Low zone collapse vs man-on-man vs hybrid. **Read this to find out which system your team plays** — most defensive breakdowns are two players on different assumptions. |
| [Defending the Rush](content/defending_the_rush.md) | Gap control method, backcheck lanes, and every numerical situation from 1-on-1 to 3-on-1. |
| [Special Teams](content/special_teams.md) | Power play formations (1-3-1, umbrella, overload, spread, and the 2-3 that most rec and youth teams actually run) and penalty kill structures (box, diamond, wedge+1). Plus 4-on-4, 3-on-3 and 5-on-3. |
| [Faceoffs](content/faceoffs.md) | All nine dot locations, five-player alignments, technique, violations, and set plays. |
| [Game Management](content/game_management.md) | Score effects, protecting a lead, pulling the goalie, line matching, overtime. |

---

### Technique — how to execute

| Document | Summary |
|---|---|
| [Skating](content/skating.md) | Edges, stride, crossovers, backward skating, pivots, stops. The foundation everything else is performed on top of. |
| [Puck Handling](content/puck_handling.md) | Stickhandling, head up, puck protection, deception, and beating a defender one-on-one. |
| [Passing and Receiving](content/passing_and_receiving.md) | Every pass type, passing into space, and the neglected half — receiving. |
| [Shooting](content/shooting.md) | Wrist, snap, slap, backhand, one-timers, tips. Release speed, shot selection, and where shots are actually worth taking. |
| [Body Contact and Battles](content/body_contact_and_battles.md) | Angling, stick checks, board and net-front battles, shot blocking, and receiving a hit safely. Applies in non-contact leagues too — the distinction is made throughout. |

---

### Hockey IQ — how to read and decide

| Document | Summary |
|---|---|
| [Puck Support and Spacing](content/puck_support_and_spacing.md) | The support triangle, distances and angles, and why everyone collapsing toward the puck is the biggest amateur failure. |
| [Time and Space](content/time_and_space.md) | The currency of hockey. How to create it for yourself and take it from opponents. |
| [Scanning and Anticipation](content/scanning_and_anticipation.md) | "Vision" is a habit of looking before you need to. What to read, and honestly what the research does and doesn't support. |
| [Risk Management](content/risk_management.md) | Where a mistake costs a goal and where it costs nothing. The "never" list, with reasons, and per-zone decision hierarchies. |
| [Playing Without the Puck](content/playing_without_the_puck.md) | You hold the puck for well under a minute a game — roughly three to four per cent of your **5-on-5** ice time, on NHL tracking data. This is the other 96%. |

---

### Off the ice

| Document | Summary |
|---|---|
| [Equipment](content/equipment.md) | Fit, sharpening, stick flex/curve/lie, protection, and where to spend versus save. |
| [Conditioning and Recovery](content/conditioning_and_recovery.md) | Training for repeated 45-second efforts, injury prevention, and recovery. |
| [Practice and Development](content/practice_and_development.md) | Deliberate practice, what actually transfers off-ice, and realistic plans for adult players. |
| [Mental Game](content/mental_game.md) | The shift reset, confidence, nerves, and fear. Every claim labelled by strength of evidence. |
| [Team Play and Culture](content/team_play_and_culture.md) | The bench, being a good linemate, unwritten conventions, and talking to officials. |
| [How to Watch Hockey](content/how_to_watch_hockey.md) | Seeing structure instead of following the puck, plus a full guide to hockey statistics and what they're worth. |

---

## Conventions used throughout

- **Nothing is presented as a law of hockey when it is a coaching choice.** Where a system determines your job, the system is named, an alternative is given, and you're told to find out which one your team plays. The corpus default, where one is needed, is **low zone collapse** defensive coverage with a **2-1-2 forecheck**.
- **F1 / F2 / F3 are roles defined by order of arrival**, not fixed positions or people.
- **Terminology is kept precise** where it is commonly conflated — rim vs reverse, pinch vs step up, slot vs high slot vs goalmouth, box vs diamond, bumper vs net front.
- **Claims that could not be independently verified are kept but explicitly labelled**, with the uncertainty described, rather than dropped or asserted.
- **Every number has an owning document.** A figure is taken from its owner rather than restated from memory, and the owner's qualifications travel with it — if a figure is 5-on-5 only, or the author's own computation, that is part of the fact.
- **Rules claims cite the NHL Official Rules by rule number.** Note that two rules give different trapezoid dimensions: Rule 1.8 (rink markings, 8 ft from each post) describes the lines actually painted, while Rule 27.8 retains pre-2014 wording of 6 ft. Both describe coherent shapes; 27.8's is simply the old one. The corpus follows Rule 1.8.

---

## How it was made, and why you can trust it

The content was written and then attacked — sixteen rounds of adversarial review, each run by an agent with fresh context and an explicit brief to find things wrong, with every finding fixed and then re-verified rather than argued with.

The full account is in **[project/review_history.md](project/review_history.md)**, including what each class of defect looked like and the several places where the review's own methods were the thing at fault. Three points worth knowing before you read anything here:

- **The failures were about attribution, not arithmetic.** Across roughly 340 body-verified citations, no quoted number turned out to be wrong. What went wrong was *provenance* — a real standard credited to the wrong governing body, a sentence from a review's introduction presented as that review's own finding, quotation marks manufactured around reported speech.
- **The most dangerous claims were the ones nobody thought to check.** "The centre covers more ice than any other position" sat in five documents through eight review rounds because it reads like common knowledge. A primary source contradicts it.
- **A clean review round is a statement about the round, not the corpus.** Round 9 returned zero critical defects; round 10 changed only *where it looked* and found three criticals and about twenty majors. Every round therefore states its own coverage limits — what it read in full, what it sampled, what it did not reach — and the next round is scoped by that admission.

The rules that came out of all this are written down in **[project/content_style_guide.md](project/content_style_guide.md)**, which is the governing document for anything added to the corpus. Nearly every rule in it exists because something went wrong once.

The external citation layer has a machine-checkable baseline: [`project/verification/link_baseline.tsv`](project/verification/link_baseline.tsv) records every external URL in the corpus with its HTTP status and final URL after redirects. Known-dead links are kept and labelled in the content with the date and status observed, rather than silently removed.

---

## Repository layout

```
.
├── README.md                       this file — the corpus index and reading order
├── LICENSE                         MIT, for site/, infra/ and scripts/
├── LICENSE-CONTENT                 CC BY-NC 4.0, for content/ and project/
├── CLAUDE.md                       instructions for AI agents working in this repo
│
├── content/                        the corpus — 35 documents
│   └── positions/                  4 of them: centre, winger, defender, goaltender
│
├── project/                        governance and process, not teaching material
│   ├── content_style_guide.md      the governing document; read before writing anything
│   ├── review_history.md           what the sixteen review rounds found
│   ├── content_review_and_roadmap.md  the original review that the corpus was built from
│   ├── site_build_specification.md the phased plan for site, infra and audio
│   ├── podcast_generation_prompt.md / _longer.md
│   └── verification/link_baseline.tsv  external URLs with status and final URL
│
├── .claude/
│   ├── settings.json               permissions and environment
│   └── agents/                     reusable review agents distilled from the rounds
│
├── docs/                           how it is built and why (see docs/README.md)
│   ├── philosophy.md               the principles that decided the arguments
│   ├── architecture.md             markdown in, website and audio out
│   ├── aws-design.md               the AWS resource design, and what was rejected
│   ├── operations.md               runbook: deploy, restore, troubleshoot
│   └── decision-log.md             dated decisions and the traps found the hard way
│
├── scripts/                        link checking, and speech/audio tooling
├── site/                           the Astro static site (see site/README.md)
├── infra/                          Terraform: S3, CloudFront, ACM, Route 53, GitHub OIDC
└── .github/workflows/              CI: build and deploy, plus a scheduled link check
```

**`content/` is the source of truth.** The site reads it and never writes to it; nothing in `site/` needs to change when a document does.

Two conventions matter if you are editing:

- **`content/` holds only teaching documents.** Everything in it is turned into a podcast episode, so process and governance files live in `project/` and must never be fed to the generator.
- **Adding a document means adding its id to [`site/src/data/structure.json`](site/src/data/structure.json).** The site build refuses to run until you do — there is no way to add a document and have it silently missing from the navigation.

> **Status, 28 July 2026.** Everything in the tree above exists, and the site is live at **https://learn-ice-hockey.com**. The one gap is **audio**: the markdown-to-speech transform has run over all 35 documents, but nothing has been narrated yet, so the per-document audio player is behind a flag and hidden. Narration, podcasts, downloadable bundles and the offline app are phases 5 to 8 of [`project/site_build_specification.md`](project/site_build_specification.md). Current state is tracked in [`docs/README.md`](docs/README.md).

---

## Building the site locally

Requires **Node ≥ 22.12** (Astro 7's floor) and npm ≥ 9.6.5.

```bash
cd site
npm install
npm run dev          # http://localhost:4321
```

For a production build:

```bash
npm run build        # metadata → astro build → Pagefind index → link check
npm run preview      # serve dist/ locally
```

`npm run build` is four steps and any of them fails the build: it regenerates document metadata from `../content`, renders `dist/`, builds the Pagefind search index, and runs an internal link check against the built HTML. **Search does not work under `npm run dev`** — Pagefind indexes built HTML.

To see the site as it will actually be served, search included, one command does the lot:

```bash
npm run serve        # build, then preview and open a browser
```

Full detail, including the metadata extraction rules and what the link checker validates, is in **[site/README.md](site/README.md)**.

---

## Deploying

The site is a plain static directory served from S3 behind CloudFront, provisioned by the Terraform in [`infra/`](infra): a private bucket with all public access blocked, an origin access control (not a legacy OAI), an ACM certificate pinned to `us-east-1`, Route 53 records, a response-headers policy, and a CloudFront Function rewriting `/path/` to `/path/index.html`.

```bash
cd infra
terraform init
terraform plan
terraform apply

cd ../site
npm ci && npm run build
aws s3 sync dist/ s3://<bucket>/ --delete
aws cloudfront create-invalidation --distribution-id <id> --paths '/*'
```

Two things to know before the first apply:

- **The Terraform state backend has to be bootstrapped by hand once.** A state backend cannot provision itself.
- **CI deploys via GitHub Actions OIDC role assumption — there are no long-lived AWS keys in GitHub.** The trust policy is scoped to this repository and branch.

`site:` in `site/astro.config.mjs` is set to `https://learn-ice-hockey.com` — canonical URLs, Open Graph tags and `/sitemap.xml` are all built from it. Change it there if the domain ever changes.

Cache behaviour, cost estimates and the full infrastructure plan are in [`project/site_build_specification.md`](project/site_build_specification.md) §5.

---

## Licensing

Two licences, because the code and the writing carry different risks.

| What | Licence | |
|---|---|---|
| `site/`, `infra/`, `scripts/` | **MIT** | [LICENSE](LICENSE) |
| `content/`, `project/` | **CC BY-NC 4.0** | [LICENSE-CONTENT](LICENSE-CONTENT) |

You may share and adapt the writing for **non-commercial** purposes with attribution. The non-commercial restriction is deliberate rather than defensive: the corpus quotes the NHL, IIHF, USA Hockey and Hockey Canada rulebooks verbatim, meticulously attributed, and relies on fair dealing for quotation (UK CDPA s30(1ZA)) to do so. Non-commercial use materially strengthens that position. Rule *text* is copyrighted even though the rules themselves, as facts and methods of operation, are not.

Quoted rulebook and research material remains the property of its respective owners and is not relicensed by either licence above. This is not legal advice.

---

## Non-affiliation

**This project is not affiliated with, endorsed by, sponsored by or associated with the National Hockey League, the NHLPA, the International Ice Hockey Federation, USA Hockey, Hockey Canada, or any other league, club, association or governing body.**

All trademarks, service marks and trade names — including team names, logos and league marks — are the property of their respective owners. No such logo, mark or branding appears in this repository or on the site.

Rule citations are quotations from publicly published rulebooks, reproduced for the purpose of teaching and criticism, with attribution to the rulebook and rule number in every case. Where a rulebook is quoted at length, the quotation is there because paraphrasing it would change what a reader does on the ice.

**This is a learning resource written by a player, not an official source.** Rules vary by league, by association and by age classification, and they change. Where your league's rulebook disagrees with anything here, your league's rulebook is right. When it matters — eligibility, safety equipment, whether a technique is legal at your level — check with your own association.
