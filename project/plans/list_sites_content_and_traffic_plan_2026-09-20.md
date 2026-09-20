# List-site research: content and traffic plan

> **Status note (added during plan consolidation, not part of the original research).** This is
> the original research plan as committed directly by the repo owner on 20 September 2026, outside
> this project's normal generation process. It was subsequently adversarially reviewed against this
> project's standards — see
> [`project/reviews/traffic_plan_adversarial_review_2026-09-20.md`](../reviews/traffic_plan_adversarial_review_2026-09-20.md).
> The actionable, reframed items from that review are tracked live in `project/plans/OPEN_ITEMS.md`,
> under its "Content/traffic plan" section — not here. This file is kept as historical research
> context, not a live worklist; do not act on it directly without reading the review above first.

**Research date:** 20 September 2026

**Question:** Can the sites returned for "list of good ice hockey websites"
improve `learn-ice-hockey.com`, and can inclusion in similar lists drive useful
traffic?

## Conclusion

Yes, but the two opportunities are different.

The reviewed lists are mostly discovery directories for hockey news, teams,
statistics, video and commercial services. They are not reliable authorities
for rules, safety or learning to play. Their main content value is that they
show which beginner journeys and formats are missing from this site.

Directory inclusion may produce some referral traffic and a small amount of
discoverability, but it is unlikely to be a material acquisition channel by
itself. The stronger route is to create useful, distinctive resources that
clubs, coaches, parents and community sites have a reason to recommend.

> **Annotation (added during plan consolidation).** The adversarial review's Major finding 3 flags
> this paragraph's "unlikely to be a material acquisition channel" verdict as stated with more
> confidence than this plan's own evidence supports — nothing in "Sources reviewed" above measures
> directory-referral value for this site or a comparable one. Read the verdict as an inference from
> general directory/SEO behaviour, not a measured finding, pending the Phase 4 measurement this plan
> itself proposes. See
> [`project/reviews/traffic_plan_adversarial_review_2026-09-20.md`](../reviews/traffic_plan_adversarial_review_2026-09-20.md#major-findings).

## Sources reviewed

### Supplied examples

- [Medium/FeedSpot list](https://medium.com/@mahersoudah/top-50-ice-hockey-websites-and-blogs-on-the-web-8fa2685347b4)
- [Reddit discussion](https://www.reddit.com/r/hockey/comments/mk8qsz/good_hockey_websites_to_follow_and_read/?rdt=49911)
- [Kadaza ice hockey](https://www.kadaza.co.uk/ice-hockey)

The Medium article text was supplied during the research session. It identifies
itself as a FeedSpot list and says ranking uses Google reputation and ranking,
social influence, post quality and consistency, and FeedSpot editorial review.
It also advertises a badge, blog submission and a high-resolution badge
download. It ranks platforms and major publishers alongside instructional
resources, so being present is primarily a visibility/marketing signal, not a
teaching-quality endorsement.

The Medium page itself returned HTTP 403 when fetched. The Reddit page and its
JSON endpoint were also not available in a verifiable form. No conclusions
about individual Reddit recommendations are based on inaccessible content.

### Comparable lists and destination sites

- [FeedSpot: 60 Best Hockey Blogs](https://bloggers.feedspot.com/ice_hockey_blogs/)
- [The Hockey Writers: best NHL information sites](https://thehockeywriters.com/list-of-best-nhl-sites/)
- [Kadaza selection procedure](https://www.kadaza.co.uk/procedure)
- [Kadaza submission page](https://www.kadaza.co.uk/submit_a_site)
- [Play Ice Hockey resources](https://playicehockey.co.uk/resources/)
- [EIHA: Start Playing Ice Hockey](https://eiha.co.uk/play/)
- [Ice Hockey Systems blog](https://www.icehockeysystems.com/blog)
- [NHL Hockey 101](https://www.nhl.com/fans/hockey-101)

## Content findings

### High-value gaps exposed by the review

The recurring beginner questions are:

1. How much does starting cost?
2. How does a player find a rink, club or beginner session?
3. What happens at the first session and during the first few weeks?
4. Which equipment can be borrowed, hired or bought later?
5. How do registration and insurance work?
6. What should a parent know before a child starts?
7. What can a player practise safely away from the ice?
8. What are the etiquette and social expectations at practice and games?

The corpus already covers substantial rules, technique, positions, systems,
game understanding, equipment and watching hockey. The largest product gap is
not another generic hockey article. It is a complete participation pathway for
new players and parents.

The repository already records this gap in the draft `parent-of-a-new-player`
pathway in `site/src/data/pathways.json`. That pathway should be treated as the
first content priority, subject to the project's normal safety and jurisdiction
review.

### Useful patterns to borrow

- **Play Ice Hockey:** separates starting to play from starting to watch and
  exposes cost, kit, rink, team, training and registration tasks.
- **EIHA:** turns beginner interest into a local club action, explains loan kit
  and registration, and makes geographic scope explicit.
- **Ice Hockey Systems:** uses progressive courses, age categories, player and
  parent audiences, drills, practice plans and visual coaching material.
- **NHL Hockey 101:** demonstrates concise, approachable explanations for a
  fan who does not yet understand the game.
- **The Hockey Writers:** organises a large information space by user purpose,
  although its list is mainly NHL media and is not a beginner curriculum.
- **Kadaza:** demonstrates a simple resource map, but mixes governing bodies,
  news, statistics, retail, tickets and media without per-link rationale.

Do not import rules, safety claims or coaching prescriptions from these sites
without checking primary sources. The value is structure, format and user
journeys, not authority.

## Traffic findings

The historical SEO baseline in
`project/reviews/seo_baseline_and_analysis.md` found that the site was already
receiving impressions, mostly on page two and three. Its strongest performance
was for concepts, terminology and hockey IQ, while broad rules terms were much
more competitive. That baseline is dated and should be refreshed before using
its figures for a new decision.

The practical implication remains:

- Improve pages already close to page one before creating many new pages.
- Target specific explanation searches rather than trying to outrank
  NHL.com/Wikipedia for generic rules terms.
- Preserve the site's distinctive strengths: careful definitions, rulebook
  comparisons, safety qualification, diagrams and scenario-based pathways.
- Measure qualified pathway use, not directory count or raw backlinks.

## Acquisition plan

### Phase 1: finish the product people can recommend

1. Complete and review the parent/new-player pathway.
2. Add or strengthen cost, local-start, registration and insurance guidance.
3. Make the equipment journey explicit for loan, hire and purchase contexts.
4. Add first-session, first-game and beginner-etiquette guidance where absent.
5. Add a safe, clearly scoped home-practice route.
6. Improve glossary deep links and both `centre` and `center` terminology where
   that reflects genuine audience language.
7. Give every new-player route a clear next action and a jurisdiction caveat.

### Phase 2: improve search reach

1. Refresh Google Search Console by query, page and country.
2. Identify pages ranking positions 11–20 with meaningful impressions.
3. Improve their title, description, opening answer and internal links without
   diluting the carefully reviewed body.
4. Build or verify section hubs for positions, systems, technique and beginner
   resources.
5. Give important glossary terms and diagrams stable, shareable URLs.
6. Create comparison pages only where the comparison is real and useful, such
   as NHL/IIHF/USA Hockey differences or beginner versus checking formats.

Technical SEO is not the first lever. The repository already contains
canonical URLs, sitemap, robots, structured data, internal navigation, RSS and
site search. Re-verify the live deployment rather than assuming every older
SEO note still describes production.

### Phase 3: targeted outreach

Submit to [Kadaza](https://www.kadaza.co.uk/submit_a_site) and FeedSpot. These
are low-cost experiments, not the core strategy.

Then approach, in order:

1. EIHA and English clubs, with UK-specific participation pages.
2. Rinks, beginner programmes and local associations.
3. Coaches, parent organisations and youth-hockey newsletters.
4. Beginner-focused sites such as Play Ice Hockey.
5. Coaching publishers such as Ice Hockey Systems.
6. Relevant community discussions, including Reddit, only when the link is a
   direct answer to the question being discussed.

Each contact should offer one specific useful resource. Do not send a generic
homepage backlink request or mass-email every entry in a directory.

Avoid paid backlink packages, badge exchanges whose only purpose is SEO, and
generic directories with no relevant audience. FeedSpot explicitly combines
editorial selection, metrics, submissions and sponsorship, so inclusion there
must not be described as an independent quality endorsement.

### Phase 4: measurement

Review monthly:

- non-brand queries and positions 1–20;
- clicks to beginner and parent pathways;
- referral sessions from each directory or partner;
- links from clubs, coaches and resource pages;
- pathway completion signals and return visits;
- RSS, podcast and email subscriptions if available.

The success criterion is useful people reaching and using the learning
material. A larger list footprint without qualified visits is not success.

## Recommended order

1. Complete the parent/new-player and local-start content.
2. Refresh Search Console and improve striking-distance pages.
3. Submit to Kadaza and FeedSpot.
4. Build a small outreach list of clubs, coaches, rinks and parent resources.
5. Offer specific, genuinely useful pages to those contacts.
6. Re-measure referral traffic, rankings and pathway use after 8–12 weeks.
