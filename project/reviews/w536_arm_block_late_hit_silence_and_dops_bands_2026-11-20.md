# W536: no arm block under USA Hockey on the forecheck, a late-hit block that no longer contradicts itself aloud, and the full DOPS bands (20 November 2026)

## Scope

| Agent | Files | Rows |
|---|---|---|
| A | body_contact_and_battles, offensive_zone_play | W535(3), W535(4) |
| B | forechecking_systems | W527(2), W535(2) |
| C (read-only rules-verifier) | — | W533(2), W531(3) |
| D | uk_rules | W533(2) |

One safety-reviewer, with a rules check (C4/C6), reviewed all four files.

## Findings and repairs

### body_contact: the late-hit facts block, rendered

Lines :668–:670 are heard together in chunk 057. In that order, ":668 says the book is silent for adult men" then ":670 says adult men included" sounded like a contradiction.

- **Fix at :668.** The line now reads "so, below the head, the book is silent" (300/300).
  - It is scoped by 640(b)'s "(except Adult Male Classifications)" (usah.txt :5111).
  - 640(g) and (h) reach only "(b, c, d, e or f)".
  - The reviewer's minor changed "off the head" to "below the head", because "off the head" can be heard as "off the top of my head".
- **:669 left unchanged.** Its "does not settle it" is about whether a player who has released the puck counts as defenceless, not about the tariff.
- **Chunk check.** The charging lines :696/:697 (chunk 061) and the Casebook 620 Situation 4 line :703 (chunk 062) are adjacent.

### "likely multi-game ban" restored

Restored by substitution at body_contact :1474 ("NHL 59.3 on severity"; 59.3 reads "based on the severity of the contact") and at OZP :968.

At OZP :968 a dash keeps the 602(a) match on "reckless". A corpus grep now finds no "likely ban" left.

### forechecking: the arms contradiction (W527(2))

The "keep your arms… out of it" claim appeared in three places: In short :602, facts :606 and body :630. Each contradicted :624's book-scoped arm permission, so each was reworded.

**The safety-reviewer's major.** The first rewording forbade only "a wrap or push". That implicitly allowed an arm block, which USA Hockey 622 Note makes holding: "using a free arm/hand to restrain or impede the opponent's progress" (usah.txt :4343–4352; Casebook Standard of Play Situation 7, :18457–18459). The old line had been safe in every book, so the rewording was a regression in this wave.

| Line | Now reads |
|---|---|
| :606 | "…pin the puck, not the player — hands, stick and skates off them; no arm block under USA Hockey, never a wrap or push" (199/200) |
| :602 | "never wrap an arm, block with one under USA Hockey, or use a skate" |
| :624 | Gains "On the wall," before "a free arm may only steer" (reviewer's minor). Casebook Situation 5 also allows a forearm steer at your own net front before the puck arrives. |

**Coordinator render.** This found :624 at the end of chunk 039 and :630's "your book allows above" in chunk 040, so a listener heard :630 without the limit. :630 now carries the limit itself: "no block at all under USA Hockey, and never a wrap, a grab or a push-off". The pointer is gone.

### forechecking :1068 and :1112 (W535(2))

The engaged-player check now reads "a mandatory major and game misconduct if reckless (640(g)) or on careless head contact (620(b))". The match stays on reckless.

- The quotation was shortened to "physically engaged for possession of the puck". The source continues after it, and no period was added inside the marks.
- Common Mistakes :1112 carries the same claim.

### uk_rules :415, the DOPS bands (W533(2))

The verifier read the whole of Appendix C.2 in both extractions and rendered PDF pages 9–10. Bands were missing from the sentence:
- kicking, slew-footing and throwing equipment share the 11+ band;
- head-butting shares the 20 band;
- verbal abuse of a player or official is "Up to 16+";
- physical abuse of an official is "Up to 18+".

The sentence now names them, with "among other bands". After the reviewer's minor it is split into two sentences, each opening "up to". The ⚠️ amber run now ends at the stick fouls.

The slur line gains "and its bands run to thirteen games or more". The slur rows go up to 11+ for inappropriate language and up to 13+ for malicious intent, so "at least a one-game ban" no longer reads as about one game.

Scope is England and Wales (§5), carried by the paragraph before.

### W531(3): closed as no reader cost

NHL 61.8 and PWHL 63.8 say "There are no specified fines or suspensions for slashing", and refer to Rule 28. Every slashing major there already carries a mandatory game misconduct (61.5, 63.5), and rules_primer :396 already carries the NHL's supplementary review.

## Review

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| safety-reviewer with rules check | none | 1 (forechecking :606/:602 arm block) | 5 | Major and 3 minors repaired; OZP :968 "plan on" twice and forechecking :630 "hands off" judged to need no action |

**C11.** No reviewer re-read the last repairs. Each is confined to its finding and follows the reviewer's sketch. The :630 pointer repair came from the coordinator's own render. The commit gate is asked to re-derive them.

## Rows

- **Closed:** W527(2); W531(3); W533(2); W535(2), (3) and (4).
- **New, from W536:**
  1. Arm-block permissions without the USA Hockey limit, in other files.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, run after every agent finished (`scratchpad/build_w536.log`).
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 4 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered by the verifier, agents and reviewer |
| D2 exceptions | Covered: 640(b)'s adult-male exception against 620; Casebook Situation 5's net-front steer; the DOPS first-offence starting maximums |
| D3 cross-book divergence | Covered: the arm block by book |
| D4/D5 citations | Covered: the 640(e) quotation was shortened with no period added |
| D6 negative existence | Covered: "no specified fines or suspensions" (NHL 61.8) |
| D7 cardinal rule | Covered: the forecheck seal is instruction, the arm permission is scoped by book |
| D8 numeric ownership | Covered: the DOPS bands are owned by uk_rules alone (grep) |
| D9 summary layers | Covered: forechecking In short, facts, Common Mistakes and KT6 checked |
| D10 facts layer | Covered: :606, :668, :968, :1068, :1474 |
| D11 reader safety | Covered by the safety-reviewer |
| D12 read-aloud integrity | Covered: body_contact and forechecking rendered |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered by `check_links` |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **Other files implying an arm block under USA Hockey** (W536(1)).
- **How the two-sentence DOPS tariff and the amber run look in a browser.**
- **Whether the DOPS bands reach Elite League fixtures.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.
