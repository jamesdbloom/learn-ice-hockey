# Active work

## 📁 CLOSED ITEMS LIVE ELSEWHERE — read this before adding a ✅ section here

**This file holds OPEN work and the standing guidance for doing it. It holds NO completed items.**
When work closes it moves OUT, to a review record in `project/reviews/`, or to the archives
[`project/reviews/closed_plan_items_to_2026-09-24.md`](../reviews/closed_plan_items_to_2026-09-24.md)
and [`project/reviews/closed_plan_items_to_2026-09-30.md`](../reviews/closed_plan_items_to_2026-09-30.md).

⚠️ **That rule was written on 24 August 2026 and then quietly broken for a month.** The file reached
**15,429 lines**, of which **3,134 were work already finished**. The owner's verdict was that *"a plan
that long is too hard to work with"*. **100 closed sections were archived on 24 September 2026**, which
brought the file down to ~12,300 lines.

⚠️ **It was broken again within a week.** On 30 September 2026 the file was **33,328 lines** and held
458 ✅ rows, mostly the wave logs for waves 10–22 and the incident stories that went with them. **The
whole of that file is archived verbatim at
[`project/reviews/closed_plan_items_to_2026-09-30.md`](../reviews/closed_plan_items_to_2026-09-30.md)**,
so nothing is lost from the history. Every "(archive: snapshot line N)" and "(plan N)" pointer below
is a line number in that archive. The open rows were extracted by six triage agents, each working one
line range. The standing guidance was deduplicated from what they kept. An independent agent then
swept the old file for open-work signals (all 399 unchecked boxes, every open-worded heading, about
110 of 223 far signal lines read by hand) and audited 85 of ~400 items judged closed by later work;
it found 4 open items missing and 2 wrongly closed, all added back below. The evidence for every
item judged closed is kept at
[`project/reviews/closed_plan_items_to_2026-09-30_evidence.md`](../reviews/closed_plan_items_to_2026-09-30_evidence.md);
the unsampled remainder is an open row under *Records and misc*.

⚠️⚠️ **THE FAILURE MODE IS NOT LAZINESS. CLOSING AN ITEM TAKES TWO EDITS TO TWO FILES, AND NOTHING
CONNECTS THEM.** CLAUDE.md records the same mechanism behind the `scripts/` list going stale twice.
**So when you mark something ✅, MOVE IT IN THE SAME EDIT. A ✅ left in place is not a record. It is 300
lines a future reader has to read to discover they did not need to.** A wave log belongs in the wave's
review record, not here. Write one line here pointing at the record, if you must write anything.

⚠️ **The cost is measured, not theoretical.** On 22 September, answering *"is the readability work
done?"* took three files, and **two podcast items listed as open had been fixed days earlier** with
nobody noticing.

## Standing guidance

How to work, not what is left to do. Each item is the rule in one to three sentences, with a pointer to where the full story sits in the archive ([`closed_plan_items_to_2026-09-30.md`](../reviews/closed_plan_items_to_2026-09-30.md), whose line numbers are the old plan's line numbers). **Where the archive carries a table or reference list, link it and do not retype it.**

### Already in CLAUDE.md — read it there, not here

These passages repeated CLAUDE.md nearly word for word. They are not restated here.

- **Tactics over rules, the owner's quotations, the up-to-ten quality bar and the ratio.** CLAUDE.md, "THE CORPUS TEACHES TACTICS". (archive: snapshot lines 12605–12698, 12748–12791)
- **The re-ordering reframe: lead with the instruction, follow with the tariff; ordering and restatement, not proportion.** CLAUDE.md, "THE REFRAME". (archive: snapshot lines 12474–12509)
- **Three rendering states, `WARNING_RE` anchored, `WARNING_LEAD_RE`, the fourth state (glyph inside a strong run), and the three moves (keep / move marker / strip).** CLAUDE.md, "READABLE BEATS DEFENDABLE". `important` is set per paragraph. (archive: snapshot lines 12110–12126, 12264–12281, 25414–25429, 26814–26833, 27926–27930)
- **`resize_window` no-ops; use the same-origin `<iframe width="400">`.** CLAUDE.md, build traps. (archive: snapshot lines 10630–10670, 13091–13104)
- **Four books versus the ten-plus on disk; `kickshot`-style label zeros.** CLAUDE.md, search failures. (archive: snapshot lines 15096–15113)
- **Competition scope versus geographic scope** ("in England and Scotland" versus the EIHL). CLAUDE.md. (archive: snapshot line 18588)
- **Test every agent's declared weakest negative.** CLAUDE.md. Test it, but never quote a hit rate: three of three broke, then two of two held. (archive: snapshot lines 3360–3374, 18982, 30075–30077, 30733–30735, 32901–32926)
- Silent-false-pass tool traps — nvm/npm shims (use absolute binaries), Astro markdown cache (`clean:cache`), `check_facts.py --quiet` exiting 0 through a pipe, `md_to_speech --only` wrong id exiting 0, ugrep complexity exit 2, no `timeout` on macOS — CLAUDE.md, *Writing content* step 6.
- `md_to_speech` output directories keep the layer's own hyphens (`hockey-iq__risk_management`, not `hockey_iq__…`). (archive: snapshot line 12812)

### Briefing and coordinating

- **A brief carries the DEFECT and the CONSTRAINT. The agent that read the document writes the sentence.** A sketch, a proposed wording or quoted evidence in a brief is a claim like any other. More than ten sketches were refused as defective, including ones "sized to one rule number" or to a character cap. (archive: snapshot lines 201, 965–979, 1362–1377, 3571–3581, 11764–11777, 25986, 28090–28092)
- **Brief a claim, never a line.** Name the ACT and ask for every rule that prices it. Never hand over one rule number to check. A brief that names one rule produces an agent that checks one rule. (archive: snapshot lines 15878–15886, 33160–33170)
- **Never relay a figure, locator, cap measurement or census result without re-measuring it.** Coordinator relays went wrong more than 25 times: stale line numbers, a character offset read as a line, "5 of 8" when the block was 8/8, fabricated quotations. Say "run `check_facts.py --near`" rather than quoting a fill. (archive: snapshot lines 9984–10008, 11201–11220, 22337–22351, 23855–23877, 28545–28548, 28683–28687, 28929–28941, 30764–30767, 31634–31637)
- **A brief names the layers to CHECK and the tool to run. It never asserts what a tool would say, or which layers are fine.** (archive: snapshot lines 11304–11321, 11350–11364)
- **A brief that says a claim is ABSENT is a claim about the whole corpus**, and a grep cannot support it. Check `content/` and the sibling documents before dispatching a gap. A gap is not automatically in scope. (archive: snapshot lines 17444–17447, 29383–29396, 32553–32565)
- **The direction of a brief's error decides whether review catches it.** A brief that is wrong in the harsher direction corrects itself. A brief that is wrong in the permissive direction recruits the reviewer into confirming it. (archive: snapshot lines 29785–29789)
- **A brief that names the wrong owner document manufactures false negatives and false positives.** Name an owner only when you have checked it. (archive: snapshot lines 3447–3455)
- **Relayed rule summaries are briefs, never sources.** One relay dropped both of the Casebook 46.13 jersey reliefs. (archive: snapshot lines 17031–17054)
- **A subagent's refutation is a claim.** The coordinator reproduced one and it was false. (archive: snapshot lines 21798–21817)
- **Every brief carries these lines:** "refute the brief", "verify every quotation and line number yourself", and "re-read your replacement text against the surrounding prose and report what you catch". Also carry the Python exact-string-replacement instruction whenever Edit is disabled. A missing boilerplate line left a verified Critical unapplied for a wave. (archive: snapshot lines 11795–11812, 15887–15894, 17647–17710)
- **Run every gate command in a brief once yourself before sending it out.** `check_quote_drift.py` needs a file argument. `check_instruction_first` needs `--file`. `check_layer_echo` takes `--doc`/`--show`, not `--file`. (archive: snapshot lines 281, 14399–14413)
- **Ownership is per CLAIM, not per file**, and disjointness is checked, not asserted. A brief that says "the tree is clean" can be false minutes later. (archive: snapshot lines 2658–2662, 13829–13840)
- **Before recording a violation, check that it is not the session's own earlier uncommitted wave.** (archive: snapshot lines 21079–21088)
- **Read adjacent line numbers as one unit before listing them as separate rows.** (archive: snapshot line 11888)
- **A finding can be right about the defect and wrong about the mechanism.** Verify the mechanism at the line before relaying it. (archive: snapshot lines 11866–11887)
- **"Almost certainly" is a guess.** Testing it costs one grep; acting on it costs a wave. (archive: snapshot line 28696)

### Reviewing, repairing and propagating

- **A repair is new text and may not self-certify (C6/C11).** The defect is usually in the adjacent text. Text inherited from the thing being repaired is unverified text. Shortening is a repair. (archive: snapshot lines 4708–4714, 5108–5117, 11848–11859, 24335–24337)
- **Summarising a tariff drifts toward the harsher, simpler rule.** Ten of twelve self-caught defects went that way. It also drifts the other way (softening), and truncations can drop a LIMIT as well as a harsher limb. Quote whole and read past the closing mark. (archive: snapshot lines 11662–11677, 11912–11929, 18511–18528, 22410–22422, 24395–24405)
- **A layer test is per LAYER, not per file.** It is not complete until the captions the document speaks have been checked (`check_caption_hosts.py --by-host`). (archive: snapshot lines 291, 2110–2112)
- **Ask which old answer each summary layer was written against.** Read the summary layers as if the body did not exist. (archive: snapshot lines 26620–26625)
- **Sideways propagation:** layers re-aimed in parallel from one body lose the same limb. The count of carve-outs is the first thing shortening drops. (archive: snapshot lines 20239–20249)
- **Summary layers inherit a body's loose words but not its scoping surroundings**, in both promotion and demotion. (archive: snapshot lines 11727–11739)
- **A demotion is safe when the remaining pointer names the material it drops** ("the cross-check and interference limbs CARHA adds"). A demotion that keeps a disclosure in a voiced layer is propagation, not stripping. (archive: snapshot lines 27830–27837, 27678–27682)
- **A verbatim fragment does not scope itself** ("in all instances", "in any manner", "whether or not injury results"). The rule's "when…" clause must travel with it. (archive: snapshot lines 1256–1277)
- **Proximity can make an omission worse.** A correct statement about another book, placed beside a gap, reads as a deliberate contrast. (archive: snapshot lines 2996–3005)
- **Shared-predicate flattening:** one verb spread over several books takes the strictest book's threshold and understates the rest. (archive: snapshot lines 2772–2776)
- **The asymmetry test:** does a passage that teaches a contact price one book up to its match penalty and another only up to its major? (archive: snapshot lines 11191–11194)
- **A citation that looks stray in a summary layer may be compressing a body argument.** Read the body first. (archive: snapshot lines 11414–11435)
- **A true quotation can sit inside a false sentence.** (archive: snapshot lines 3058–3079)
- **Literally true but substantively misleading is a defect. So is a half-scoped claim, because it reads as scoped.** (archive: snapshot lines 15385–15393, 15436–15451)
- **A sibling-only hedge leaves no trace.** Nothing mechanical enumerates the carve-outs a document has never heard of. (archive: snapshot lines 15005–15007, 15461–15469)
- **Read the sibling before writing.** Its absence caused three Criticals in one day, and it caught a fourth. (archive: snapshot lines 31920–31927)
- **Insertion point is a defect class.** An insertion can strand the next line's antecedent (three recorded instances), and one ordinal ("the second of them") silently changed meaning. (archive: snapshot lines 20870–20873, 21245–21259, 33089–33104)
- **Sweep for the sentence you are about to destroy before destroying it.** (archive: snapshot line 25281)
- **Conditionalising a superlative is not enough. First ask whether it is true at all.** (archive: snapshot lines 25054–25061)
- **The limb is owed where a reader is told to HIT, not where a reader is told to BE HIT.** (archive: snapshot lines 16020–16032)
- **Headings do not advertise safety.** A hazard whose heading does not name it is the reviewers' shared blind spot (named three times), and no tool covers it. Propagating a limb by heading missed `breakouts.md` §2 "The puck-retriever D". (archive: snapshot lines 16007–16009, 16306–16312, 16687–16691, 16788–16794)
- **A killed agent's edits are an unreviewed draft.** Run `git diff --name-only`, word-diff the index against the tree, re-run every gate and the marker check, and re-dispatch the verification it never reached. (archive: snapshot lines 3178–3219)
- **Every D1–D15 dimension is checked or declared out of scope in writing (C3).** Findings must reach a review record, not only this plan (C8). A scope declaration in a record is a claim about a diff, and a diff grows. (archive: snapshot lines 2893–2917, 26319–26325)
- **A coverage claim names its files and results.** C10 can be ruled N/A by measurement. (archive: snapshot lines 25570–25583)
- **A cross-layer consistency method is blind where every layer agrees on something wrong.** A second read scoped to new text inherits the first read's errors. (archive: snapshot lines 25027–25031, 25592–25595, 27504–27509)
- **A ruling is scoped to the document it was reasoned about. A caption is voiced into every host.** (archive: snapshot line 26083)
- **A disclosure that puts a rule inside the scope of "a coaching choice, not a law" inverts non-negotiable 7** once it is voiced alone. (archive: snapshot lines 28242–28253)
- **Where a disclosed insertion changes the ACTOR ("[your]"), make the books the grammatical subject.** It is safer, it survives the renderer, and it is usually shorter. (archive: snapshot lines 28119–28122)
- **The 26-limb trace is the method that clears a Key Takeaway restructure.** Enumerate every hedge, scope flag and safety caveat in HEAD and trace each one into the new text. (archive: snapshot lines 28993–28999)
- **Record deliberate non-carriage.** Example: USA Hockey 602(a)/608(c)/627(b) above 639(c) are real but change nothing a player does. (archive: snapshot lines 28628–28630)

### Searching the rulebooks

- **Sweep the ACT in several wordings, never the label or the rule number.** Label zeros are true negatives, and true negatives stop searches: plane, lacrosse, kickshot, `off–side`, `spin–o–rama`, `Progressive Suspension`, `Rule 410`, `fighting`. (archive: snapshot lines 2622–2636, 3827–3835, 4804–4808, 4874–4879, 15878–15886, 28946–28948, 29307–29313)
- **Flatten before trusting any count.** The extractions line-break phrases, so a raw grep misses them: "skating lane or foot / speed", "confine its / activity", "body / checks", "any / further games", "not required to move…" in all six books, "minor penalty for interference" in IIHF. Flattening can also manufacture matches. (archive: snapshot lines 13466–13475, 19923–19932, 28141–28144, 29035–29037, 31311–31319, 31765–31770)
- **Page furniture splices:** USA Hockey Casebook and PWHL footers, IIHF 5.3, NHL 42.1 and NHL 49.2 produce false "not found" results. Verify by deleting the footer lines and then flattening. A fragment that does not span the page break survives. A non-zero hit on a DIFFERENT rule is worse than a zero. (archive: snapshot lines 21423–21440, 22621–22623, 23823–23828, 25126–25128, 26913–26915, 27791–27798, 31656–31659)
- **Read the rule text, the casebook Situations AND the book's own reference tables.** A rule-text sweep can return a true negative that a table refutes. A casebook Note can widen or narrow its own rule. A Situation read only as far as its own citation is read half. (archive: snapshot lines 24185–24187, 30030–30035, 30220–30224)
- **A Note that points ("See Rule 36(b)") is not the rule.** Read the target. (archive: snapshot line 26125)
- **Read a rule end to end rather than skimming grep hits.** CARHA 48(h) was found that way. Confirm a rule by its printed `Rule N.` heading, never by a phrase. (archive: snapshot lines 18155–18157, 28421–28422)
- **Census negatives are the results in doubt.** Search the full vocabulary, and search facts lines separately from prose. A per-file zero is not a corpus-wide absence. (archive: snapshot lines 16383–16397, 20492–20496)
- **Design a search for an ABSENT BENEFIT, not only for a present prohibition.** Read the competition-format appendices. (archive: snapshot lines 20111–20117)
- **A negative scoped to one named rule is not a negative about the book.** (archive: snapshot lines 15344–15346)
- **Record a lexical sweep as a TESTED negative, not a clean bill.** A document that teaches the geometry without the searched verbs was never reachable. (archive: snapshot lines 28213–28218)
- **Name the IIHF EDITION in a brief, not only the filename.** `sources/README.md` says which of the five IIHF extractions is canonical. Read `sources/README.md` before "discovering" source oddities. (archive: snapshot lines 3641–3646, 26991–26995)
- **Give every concurrent agent a NAMED scratchpad subdirectory**, for flattened books as well as SSML. `--only` restricts output correctly when the id is right (a WRONG id prints "no markdown found" and exits 0 — check it says "1 documents"), and a collision means two agents shared a directory. (archive: snapshot lines 3839–3863, 28449–28462)
- **Rule numbers are book-specific.** NHL 63 is delay of game; PWHL 63 is slashing. Re-derive a citation in the new book's text whenever a claim moves between books. (archive: snapshot lines 11486–11520, 25642–25646)
- **Grep traps with a book attached:** `usah.txt` "The Referee shall report all incidents…" belongs to 626, not 627. USA Hockey's "danger zone" is only in `usah_casebook.txt`. USA Hockey's faceoff substitution exception is 204(a), not 613. CARHA 49(a) is an alphanumeric-flatten trap. `carha.txt` cross-refers to a non-existent "Rule 86(d)". (archive: snapshot lines 5725–5730, 19010–19012, 24347–24350, 29344–29350, 33006–33013)

### Book reference facts — the owners live in the archive; link them

- **PWHL renumbering table — THE OWNER.** The offset is NOT constant: interference +1 (56 → 57), later rules +2 (63 → 65, 69 → 71, 81 → 83); face-offs are 78, hand-play 69; PWHL 56.1 is hooking, 63.2 is slashing, puck-over-glass is 65.2(iii), 54.7 not 53.7. **Never derive a PWHL number; look it up.** Cite PWHL 82.3 for the crossbar test. (archive: snapshot lines 4044–4152, 10104–10150, 27200–27201, 27765–27767, 28051–28059, 28797–28801, 30388–30396)
- **PWHL extraction:** footers say "2024 – 2025" on some pages (Rule 42, 56, 60 regions). Take the edition from the title page. 43.3 cross-refers "45.5" (43.5 is meant). The Table 6 "NOTE – match penalty must be assessed when injury results" lost its asterisk and does NOT make the match mandatory for all rows. There is no PWHL casebook on disk, so every PWHL "agrees" is a rule-text agreement only. (archive: snapshot lines 22842–22847, 26651–26653, 29685–29691, 29997–30000, 32960–32969, 33059–33063)
- **PWHL trapezoid:** the book contradicts itself. 1.8/27.8 are operative; the rest is residue. (archive: snapshot lines 4019–4032)
- **IIHF:** 2026/27 merges Tables 5/6/7, so cite with the edition named. Table 5 column map: MAJOR ONLY / MAJOR+GMP. Ten acts carry the identical Rule 28 routing clause (41.5, 42.5, 45.5, 48.4, 49.4, 52.3, 58.4, 59.6, 61.6, 62.4). **The referral is mandatory (20.7, 23.2); the discipline itself is discretionary (28.1).** IIHF prints 70.4 twice. 201.1 "in any case" is not the British "in all cases". IIHF has no match category, so never write "the IIHF's is automatic" or "strictest book here". The model sentence is `body_contact_and_battles.md:1223`: "'the IIHF writes no match penalty' is not the lighter answer it sounds like". (archive: snapshot lines 1135–1156, 4543–4553, 13384–13402, 19687–19692, 22311–22314, 22369, 28729–28733, 28740–28741, 28769–28773)
- **Do not attribute the NHL's escalation text to the IIHF.** The NHL routes to Rule 21 Match on injury; the IIHF points to Rule 21 Dangerous Actions on "serious and severe". (archive: snapshot lines 31199–31202)
- **IIHF 101.1 verified facts** (identical across editions; tiers; permissive limbs; PWHL 52.1; the CARHA 49(a) contradiction; HC 7.3(a)). (archive: snapshot lines 19418–19444)
- **What a major costs, per book (reference table):** HC 4.4, USA Hockey 404(b), CARHA 30(a)/32(d) ("one game", with the accidental-high-stick exception), IIHF, NHL/PWHL. Also the age provisions and USA Hockey 640's classification scope, and the bare-major programme guidance. (archive: snapshot lines 19039–19073, 19231–19273)
- **Where the discipline chain genuinely stops:** HC 4.8 Note 1 (a Game Ejection triggers no automatic suspension; 4.8(b) counts stick minors, not majors). CARHA 32(d) is triggered by a major, not a tally. USA Hockey's vocabulary is only suspend/suspension. (archive: snapshot lines 28955–28956, 29125–29132, 29307–29313)
- **Hockey Canada double-adverb four forms (reference):** 7.1(c), 7.2(c), 7.3(c), 7.5(c) ¶2; 9.3(c) word order differs; also NHL/CARHA forms. HC 7.5(c) has two paragraphs. (archive: snapshot lines 22988–22990, 33202–33227)
- **Hockey Canada book quirks:** Interpretation 6's heading prints 7.10(d), a book typo, so do not "correct" the corpus. The crease-line wording is Glossary / 1.5(c), not 1.6(a). The late-hit window is in the 8.3 PREAMBLE. 8.3(i) is Hockey Canada (IIHF 8.3 is blood). The glossary high-sticking divergence was verified in `hc_layout.txt` only. (archive: snapshot lines 13271–13276, 14544–14561, 19617–19618, 20358–20365, 25169–25200)
- **CARHA book quirks and rulings:** slew-footing is 86(b), not 66(b). 66(b)'s deliberate-contact sentence is an unlettered paragraph; 54(a) prints "cross checks". 87(b) cross-refers to the wrong 46 clause; 46(a) is undefined. The 66 Note 1 inference was ruled unsound; Note 1 forecloses interference only. **66(a) Note 2 versus 49(a): the discriminator is PURPOSE, not possession — do not resolve the book's tension.** CARHA head-contact constraints: Rule 50 escalates on "intentionally"; keep 49(c) and qualify it. CARHA mandatory census reference list. (archive: snapshot lines 5635–5645, 5841–5864, 18699–18704, 20646–20659, 20985–20989, 21001–21009, 21358–21368, 28833–28836)
- **CARHA 72(c) Note 1 gives the on-side sentence without the plane definition. It is silent, so settle it neither way — do not let anyone "resolve" it.** (archive: snapshot lines 14377–14382)
- **USA Hockey rulings:** 607(b) major+GM is the mandatory FLOOR for a reckless charge. The match is an option (607(e)), and 602(a) "shall" is unreconciled, so never write 607(b) as a ceiling. 607(d)'s protective sentence has no location limit. Casebook 604 Sit. 2: holding an established position is legal; driving someone out of theirs is not. 618(a) Note and 625(b) Note are both real (same height, different scope). 640(c) has no Adult Male exception. **A rule number lifted from a per-book table is a TIER, not an ANSWER.** (archive: snapshot lines 160, 18458–18467, 19146–19170, 21181–21182, 26278–26292, 29485–29486)
- **USA Hockey "house form" look-alikes that are CORRECT.** Read before sweeping `match penalty for reckless endangerment`. (archive: snapshot lines 4888–4937)
- **The "fair game" sentence is in every book's charging rule.** NHL 42.1 is found only in the `-layout` twin. (archive: snapshot lines 18241–18244)
- **Puck-out-of-play book-specific limbs** (NHL 63.9, PWHL 65.2(ii) "her hand or her stick", HC 6.4(a) not a penalty, HC 10.1(v), CARHA 75(b), Casebook 610 Sit. 5). HC 10.1(a) is open-ended, not boards-only. (archive: snapshot lines 20504–20544, 21014–21020, 31208–31223)
- **Late-hit window per book** and the Vulnerable Position counterweight. (archive: snapshot lines 20077–20109)
- **The pronoun table:** NHL "his", IIHF "their", PWHL "her", HC "kicks another object". Find the FRAME, not the number. "Kicking" is Hockey Canada's verb; CARHA "deliberately throws" narrows. (archive: snapshot lines 18264–18292, 28389–28396, 28797–28801)

### Book counts and scope

- **Name the books; do not count them.** A numeral goes stale when the shelf grows. "Every book on this shelf" is true but vague, and it beats "all four books", which is affirmatively false at six. A count you cannot bound becomes "several". (archive: snapshot lines 4285–4309, 28678–28681, 30612–30621, 31950–31954)
- **Never sweep book-count framings. Read each hit and change it only where the missing book changes what a reader does.** The census script and its discriminators are at archive 30674–30713 (re-run; never quote). Most frames that name their members in the same or the previous sentence are local comparisons and correct. (archive: snapshot lines 5796–5810, 7700–7733, 14486–14499, 30800–30804, 31010–31018)
- **Where raising the count would make the text FALSE, keep it.** Example: "clipping and kneeing… in all four books", because CARHA writes no clipping rule. Hand-pass frames must STAY FOUR (CARHA 61(d) receiver test). `faceoffs.md` is six-scoped by design. (archive: snapshot lines 5567–5592, 32214–32233)
- **A closed count is a claim about what is ABSENT.** Every mechanical check passes it. The closed quantifier is the discriminator for the harsher-simpler shape. (archive: snapshot lines 28066–28077, 32806–32822)
- **After changing any count, sweep for most/only/alone/strictest.** Grep bookless universals ("every book", "whichever book") and ask which books the reader is choosing among. (archive: snapshot lines 4203–4220, 4358–4365)
- **When a wave adds a book to a document, sweep for self-referential scope phrases** ("checked here", "this document uses"). (archive: snapshot lines 3683–3705)
- **A declared narrower book scope is legitimate. Do not sweep it.** A shelf mismatch is a CANDIDATE: check the count, do not raise it. (archive: snapshot lines 26735–26740, 27300–27303)
- **A "four books" test covers only the books the sentence names.** `ls sources/*.txt` is the authority. The first "no minor in any book" claim was false in three of five books, and the corrected claim was SAFER. (archive: snapshot lines 16333–16345)

### British scope

- **The EIHL Casebook Preamble binds IIHF 2026/27 for the Elite League only. Elsewhere the In-House Rules contradict themselves. Keep both halves in every repair.** A "Britain" claim sourced only to the In-House Rules or the IIHF is unverified for the EIHL. The Casebook's three version stamps disagree, and in-season emails are invisible. (archive: snapshot lines 13349–13353, 14452–14465, 17136–17150)
- **In-House scope is read per rule, not per document** (Rule 46 is league-scoped). The In-House "call the foul what it is" instruction (§4) reaches EIH/SIHA only. (archive: snapshot lines 19142–19144, 28500–28503)
- **The Casebook mis-numbers itself** (its 46.2 is IIHF 46.3; 46.2 printed twice; "RULE 42 – ELBOWING"). Look Rule 46 up by heading. The EIHL Casebook has no Rule 76 and no checking content. (archive: snapshot lines 13663–13671, 17136–17150, 19014–19028)
- **The Proper Authorities answer is EIHL-scoped and must say so.** (archive: snapshot lines 17026–17030)
- **EIHL "2nd Major Penalty" is unscoped. Do not resolve it without asking the league. The Casebook crease criterion versus IIHF 69.7 is left open on purpose.** (archive: snapshot lines 17119–17135)
- **A competition regulation that changes a rule's consequence does not amend the rule's test** (U12 offside). In-House Rule 101's ejection bullet has no age limb. (archive: snapshot lines 2743–2748, 19492–19495, 19746–19759)
- **IHUK junior RoC checking table:** only the `_layout` twin shows the aligned table. It has been re-verified. (archive: snapshot lines 31530–31545)
- **The "English" / "England" EIHA naming trap.** (archive: snapshot lines 15601–15604)
- **BUIHA Varsity, SNL and Northern Ireland have no document on disk.** This is a known limit, not a cleared negative. (archive: snapshot line 8939)

### Quotations and `check_quote_drift`

- **A clean `check_quote_drift` run proves only that the characters inside the quote marks are real.** It is blind to a truncated quotation that scores as a shorter clean one, to a deleted word, to an ellipsis that swallows a negation, to a manufactured join, to attribution drift (it keeps the closest match across ALL sources) and to whitespace-only drift. "Notfound" is silence, not a pass. (archive: snapshot lines 6128–6140, 13112–13119, 14782–14797, 14832–14842, 14955–14957, 29593–29594, 31246–31248, 31330–31334)
- **Its `ADDED '.'` flag has two populations:** a truncation before a harsher tier, and a punctuation substitution in a list. Tell them apart by whether the text after the mark changes what the reader owes. (archive: snapshot lines 2332–2373)
- **Known false positives — recognise them, do not repair them:** a duplicated source sentence; a two-column IIHF table cell; the NHL wild-swing quote matched to the IIHF's; the Casebook altercation sentence (`body_contact_and_battles.md:1653`); `pwhl ... :337 ADDED '.'`; and shortening a fragment re-points it at another occurrence. There are four false-positive mechanisms in all. (archive: snapshot lines 4430–4436, 6205–6218, 13277–13294, 13409–13446, 14724–14747, 30245–30250, 30666–30670)
- **Moving a `*` silently drops a fragment from coverage.** The body-prose branch needs a literal `*` next to the opening quote. The tool does not resolve files outside `content/`. (archive: snapshot lines 12597–12604, 13149–13171)
- **Lowering an initial capital (Shape 1) is accepted house style. Do not sweep CASE.** The `[x]` exemption strips only a single letter. U1x expansion inside quotes is normalisation. (archive: snapshot lines 14757–14773, 15177–15202)

### Facts layer and caps

- **Two independent cap systems.** The line caps are 200, or 300 for `Rule:`/`Convention:`. The block caps are MIN 3 / MAX_COACHING_FACTS 8 / HARD_MAX 14; `Rule:` lines are exempt from the coaching cap. **A rulebook limb that will not fit is SPLIT, never evicted or shortened.** A cap constrains a form, not a claim: try restructuring or substitution first. (archive: snapshot lines 1852–1871, 2142–2158, 10780–10816, 27464–27469, 31634–31637)
- **Name the tool, not the number.** Run `check_facts.py --near` and measure every line yourself. It reports coaching-count fullness, but a block at 14 total with coaching slots spare needs a hand count. (archive: snapshot lines 7468–7501, 10740–10749, 21155–21168)
- **A line one character from its cap is where a rulebook limb gets evicted.** Take the shorter form. A facts line at 298/300 that is the sole voiced-alone carrier of a tariff must be re-checked after any nearby edit. (archive: snapshot lines 27869–27870, 27899–27903, 32881–32887)
- **About 90 blocks sit at exactly MAX_COACHING_FACTS=8.** Adding a line means fold, relabel to `Rule:`/`Convention:`, or split. Never treat a facts total as a baseline while agents are live. (archive: snapshot lines 14086–14129, 20469–20470)
- **`check_facts` reporting 0 on a file with no facts blocks is a true zero.** The facts-block carrier test is vacuous there. (archive: snapshot line 460)
- **Book-name proximity windows drop sites more than 160 characters from the tariff.** Never truncate long facts lines in a shell listing. (archive: snapshot lines 19331–19341)

### Renderer and audio

- **A slash between book names is voiced "or".** Ask whether each site means both, between or either; never sweep. Never put a slash inside a quoted compound heading. A source slash count is not a spoken count, because `CAN/BNQ` and season forms are special-cased. (archive: snapshot lines 3958–3974, 11272–11288, 13311–13327, 13627–13629)
- **Renderer traps:** `nine (9)` speaks "nine nine" (repair: close the quote before the numeral). "three (3) games" speaks "three (three)". A bare `N(x)` speaks wrongly, so write "Rule N(x)". `7.1(a), (b) and (c)(ii)` and `49.2(i) and (iii)` swallow the "and", so repeat the rule number. 🇬🇧 maps to "For British readers." and must PRECEDE a clause that ends in a full stop. Write around renderer artefacts; do not change the renderer mid-round. (archive: snapshot lines 13476–13504, 13687–13697, 15162–15170, 16761–16773, 25940–25942, 29542–29545, 31627–31628)
- **Established non-defects:** `2025/26` season forms, `F1/F2/F3`, and `and/or` inside quotations are correct. (archive: snapshot lines 30153–30159)
- **`important` is set PER PARAGRAPH, list item, blockquote inner paragraph and facts line — not once per chunk.** When a ⚠️ paragraph splits across chunks, the second chunk gets no spoken "Important.". Never split a paragraph at a mid-paragraph ⚠️. A glyph placed MID-ITEM in a list avoids turning one takeaway into a full panel. (archive: snapshot lines 22017–22019, 24710–24717, 29736–29768, 29878–29880)
- **Key Takeaways are PACKED by size, not each voiced alone.** Facts lines are voiced alone. `MAX_BILLED_CHARS` is 2,800, and chunks at 2,704 or 2,794 have no room for a clause. Render both candidate placements before pasting. (archive: snapshot lines 28338–28362, 29044–29057, 30627–30649, 32202–32204)
- **Chunk distance: record the DIRECTION, not only the distance.** A split after a universal warning is fine; a split after a permission is a defect. The condition and the claim must land in the same chunk. Chunk proximity is no correction if the neighbour is about a different act. A chunk number is valid only against a named render. Search SSML by words, never by figures. (archive: snapshot lines 3707–3725, 7834–7865, 26216–26218, 26568–26575)
- **Insertions into units over 2,000 characters need a chunk-boundary diff against a baseline render.** Ask whether each new chunk head names its own book and scope. (archive: snapshot lines 4313–4336)
- **A defect defined by absence (an unbooked pronoun in a multi-book paragraph) has no grep.** Render the chunk and ask which book the listener heard last. (archive: snapshot lines 22706–22709)
- **`md_to_speech` resolves `content/` from the repo root, not the cwd.** Use `--content <dir>`. (archive: snapshot lines 23364–23370)
- **Normalise apostrophes and quotes before searching rendered SSML.** (archive: snapshot lines 1670–1676, 3006–3010)

### Callouts, emphasis and the site

- **Callout classification is a reading job, not a keyword census.** The target is never zero. Dispatch per document, never as a sweep. Render every touched document and report a per-document before/after figure. Consolidation is not deletion. The owner's scope is all content, not just Key focus. (archive: snapshot lines 6573–6626, 12326–12346, 12843–12940, 13031–13036)
- **The LANE RULE (owner decision) and the gate hierarchy:** billed characters, then spoken count, then a stripped-text diff. A marker inside bold is still a panel inside a blockquote. Iterate per blockquote. (archive: snapshot lines 6856–7068)
- **The spoken "Important." count per document is the listener measure. `--panels` is the reader measure. `--by-section`/`--stacks` are the wrong instrument; the LINE is the unit.** (archive: snapshot lines 6470–6508, 6684–6742)
- **Paragraph-pairing (`check_marker_pairs`) also detects a MERGE** (+1 marked, no new key). A tool's silence is not a clearance when its unit of analysis is larger than the edit: a whole Key Takeaways list is one block to it. (archive: snapshot lines 2604–2614, 28964)
- **Bold/emphasis defects:** counting delimiters fails in both directions. The rendered artefact is the only test: literal `**` over `site/dist` `<main>` after a fresh build (one-liner at archive 1561–1566), plus an extent read of where `<strong>`/`warn-inline` begin and end. `(*"` is ambiguous under CommonMark, so the gate is the literal-asterisk count in dist. `uk_rules` and `conditioning_and_recovery` reproduce a source footnote asterisk on purpose. If `check_emphasis.py` is ever rebuilt, parse with `mdast-util-from-markdown`; it was written twice and deleted. (archive: snapshot lines 1307–1358, 1460–1589, 13058–13073, 13131–13144, 13175–13231)
- **Captions get warn-inline treatment via `splitCaptionAtWarning`** from the FIRST glyph to the end. `WARNING_NEAR_RE` rules do not apply to captions. (archive: snapshot lines 3279–3305)
- **Only a DOM check settles a glyph question.** Agents reason from the old mental model faster than they read. (archive: snapshot lines 27926–27930, 32729–32735)
- **Emphasis promotes:** moving a marker onto a tariff is sometimes deliberate. (archive: snapshot lines 7801–7833, 10326–10344)
- **D15 is a standing gate.** A passing build and correct-looking dist HTML do not verify legibility. A `site-reviewer` whose browser cannot load the page has not covered D15 and must say so. The preview server is `http://`; programmatic and coordinate clicks differ. (archive: snapshot lines 16112–16121, 24759–24762, 24781–24789)
- **`site/dist/analytics.js` sends nothing only because the GA meta tag is absent**, not because of the code. (archive: snapshot lines 13893–13903)
- **`site/package-lock.json` — NEVER STAGE.** A macOS `npm install` stripped its `libc` fields. (archive: snapshot lines 33323–33324)

### New page: Getting Better on Your Own (owner, 22 Oct)

- **PLAN AWAITING OWNER REVIEW:** project/getting_better_plan.md. Owner asked for a page on more ice (rec practices, teams, youth programmes, by location), solo skating drills at public sessions, off-ice stick drills and off-ice exercises, with step-by-step SVGs or animation, no own videos, links to good existing videos OK. Not to be published until ready. Decisions D1–D6 are open in the plan. Nothing is drafted yet.

### The Basics

- [basics wing slot collapse] the playing-wing Basics script omits the weak-side winger collapsing to the slot when the centre goes into the corner, which the centre list relies on (winger.md :55/:154/:182) — fix in a future Basics remake (record basics_page_redesign_2026-10-22.md).

### P1 readability and the layers

- **The P1 doctrine:** re-order before stripping; queue by rules-bearing WORDS via `check_tactics_ratio --by-layer` (never quote a figure); middle band first; a percentage is weaker evidence than an absence; the back two layers are dispatched on layer ratio; name the UNIT in re-aiming briefs. The ratio is not a gate condition (C1–C11). (archive: snapshot lines 6781–6834, 10441–10488, 10856–10861, 11002–11058, 27106–27114)
- **Metrics are worklists, never targets.** `check_instruction_first` measures position, not craft, and has false negatives and false positives. `check_tactics_ratio` counts form and can move the wrong way on a correct repair. A 0.0% `check_layer_echo` score is not evidence: truncating a safety list LOWERS it, a LOW score on a safety list is suspicious, and its ≤4-character filter is load-bearing. Read `check_caption_echo` and `check_layer_echo` together. Do not dispatch splitting or amber-stripping waves off a metric. (archive: snapshot lines 281, 2436–2478, 3865–3902, 4369–4407, 9628–9684, 14351–14368, 17778–17795, 17831–17859, 18617–18631, 21572–21582)
- **The next P1 brief pattern:** "find the section with no kernel and the bullet with no instruction". Every P1 edit needs a reader. (archive: snapshot lines 745–747, 863–871)
- **Register governs over count.** Twelve goaltender Key Takeaways stand against the style guide's 5–10, because reaching 10 would cut a limb (the `equipment.md` precedent). A kernel stricter than the book, with the limit carried in prose, is declined (third consistent ruling). (archive: snapshot lines 27595–27601, 28382–28387)
- **The layer-job table and the three MANDATORY repetitions.** Only the facts lines are each voiced alone; see the open row about correcting this passage. (archive: snapshot lines 17750–17777)
- **The readability layering approach:** keep the five-slot spine; never gather scattered cue sentences; read before writing (the counts are lexical); do not rename 39 body sections to a template. The spine header and parent-heading note, the 60-word caveat standard and the frozen back-layer baseline are in the archive. The design spec lives at `project/readability_and_dual_audience.md`. (archive: snapshot lines 7433–7448, 9815–9867, 17943–18002, 18095–18100)
- **"Who is the reader covering?"** A metric is blind to what happens inside a unit. (archive: snapshot lines 9685–9772)
- **The self-test is a seventh layer that GRADES the reader, and no checker knows it exists.** (archive: snapshot lines 25792–25795)
- **Corpus-internal agreement is not a source. No coaching source on disk settles the hybrid-system claims.** For SYSTEMS, a named, attributed secondary source is legitimate if labelled "well attested, not official". Never bulk-fetch Blue Seat Blogs (its footer bars AI training); cite its 2011–15 pieces as contemporaneous. Keep the comparison blocks. (archive: snapshot lines 14642–14652, 15296–15301, 17188–17256, 17332–17344)
- **The net-front exception to the five-family D-zone rule.** The Johnston & Walter taxonomy is not on disk; the current labelled-as-convention state is correct. (archive: snapshot lines 11643–11661, 14619–14622)
- **A new defect class: the tactic propagated but the system name did not**, so a reader cannot match the instruction to bench vocabulary. (archive: snapshot lines 11627–11631)
- **Not every "most" is a defect.** Decline to state unmeasured figures. (archive: snapshot lines 11678–11688, 11951–11959)
- **A single-source figure you cannot audit is disclosed, not stripped.** (archive: snapshot lines 14905–14911)

### Build, staging and concurrency

- **Censuses, checkers and builds count only after the last agent finishes.** Build freshness means: `pgrep` the chain, check the log reached `check:links`, and confirm dist is newer than every staged file. Never accept a wrapper exit code. `nohup … &` inside a background call is a silent false pass. (archive: snapshot lines 1990–2004, 2846–2866, 3483–3510)
- **A checker failure on a live file is a race until re-run.** A clean re-run while an agent is live proves nothing either. (archive: snapshot lines 10088–10103, 14232–14242, 28632–28637)
- **Staged bytes can hold pre-repair text while the tree passes every gate.** Use `git show :<path>`. If nothing is staged, `git diff --cached --name-only -- content/` is empty and the tree is what to review. (archive: snapshot lines 23312–23315, 31265–31269)
- **In a dirty round `git show HEAD:` is not the baseline.** Diff against the state the last agent inherited. (archive: snapshot lines 5926–5932, 14588–14599)
- **A rebase resets the index.** Commits that stage only `project/` are not checker-gated. (archive: snapshot lines 22169–22175)
- **The review record is written after the gate clears.** Put findings in this plan first, and re-verify `git diff --name-only -- content/` is empty AFTER the last repair agent finishes. (archive: snapshot lines 32071–32075)
- **The commit hook scans the whole command.** A scratchpad path containing "claude" blocks a commit, so commit in its own command. `git-guard.sh` matches the instruction-file name as a substring, so commit messages must say "the project instruction file". (archive: snapshot lines 133, 27093–27098)
- **A clean `check_absolutes` run certifies the tree, not the agent's own work.** Tell a second rebuilding agent whose work it republishes. It cannot see a ladder that stops one rung short, a bare duration or a reach claim, and should not be widened for them; put them in safety briefs instead. (archive: snapshot lines 11256–11260, 11436–11470, 15052–15061, 17906–17927)
- **An agent's prose description of its diff is not a measurement.** `git diff` is the authority. (archive: snapshot lines 11377–11413)
- **Push state is a live fact.** Re-check with `git fetch origin main && git rev-list --count origin/main..HEAD`, never quote a hash from this file, and remember push is always the owner's call. (archive: snapshot lines 28157–28189)
- **One plan.** A design specification is not a third category. (archive: snapshot lines 9933–9964)

### Sources and fetches

- **A live 200 and an unchanged URL prove nothing about the bytes.** Compare byte counts and re-extract. A baseline 200 is a claim about its date only. Sources have three revisions, and a byte mismatch is not evidence on its own. `purehockey.com` is inconsistent, not dead. (archive: snapshot lines 4505–4509, 14530–14541, 14929–14943)
- **Edition drift:** citations to IIHF v1.1 silently become wrong when IHUK adopts 2026/27. (archive: snapshot lines 14965–14979)
- **Line-based matching cannot work on 10–27k-character Sources trailers.** Split them into citations first. The trailer-census book column is a hint, and there is no SOFT pass. Name-match audits fail both ways. The big comparison table is dropped from speech, so its cell edits are site-only. (archive: snapshot lines 13963–13970, 15549–15582, 15666–15670)
- **A Notes-section sentence of the form "only X, Y, Z are reported" is unfalsifiable by every checker.** Re-derive it by enumeration whenever the document gains a section. (archive: snapshot lines 6120–6127)
- **Dual extraction:** the retracted measurement and the real reason for DUAL_EXTRACT. (archive: snapshot lines 15531–15539)

### Decisions on record — do not "fix" these

- `switching_positions.md:343` CARHA back-to-the-boards disclosure: no tidying pass may touch it. (archive: snapshot lines 16571–16574)
- `breakouts.md` Common Mistakes instruction+consequence stays in one voiced unit; do not move it into the facts block. (archive: snapshot lines 16654–16661)
- `center.md:26` and `forechecking_systems.md:63/:74` disclosures were re-attacked and upheld, and so were six further disclosures, which must not be hedged further. The wall-contact override, the `switching_positions.md` evidence-base disclosure, the centre-covers-most-ice inversion and the pass-speed disclosure are also upheld. (archive: snapshot lines 15817–15827, 16989–16998, 17614–17619)
- `faceoffs.md` §"Keeping it simple enough to work" declines a named-play library on purpose. (archive: snapshot lines 17345–17352)
- Faceoff items confirmed and not to be "fixed": CARHA 57(a), the stick-order ladders, IIHF 76.3(VI), and IIHF v1.1:6217, which is garbled in the book. "Put the whole blade down" is safe in all five. Do not "complete" offside-faceoff-location. (archive: snapshot lines 2134–2140, 5013–5017, 19014–19028)
- Captions support-angles, winger-arriving-at-the-line and breakout-stretch-pass omit CARHA deliberately. A count-free caption form is the answer to a multi-host collision. (archive: snapshot lines 2042–2069, 27024–27029)
- Never add Casebook 607 Sit. 5 or IIHF 42.1 incidental-contact permissions to a voiced-alone layer. Never carry "HC/CARHA no penalty" for an accidental clear into a goalie brief. Never write "all six books make a held stick-on-stick lift holding". (archive: snapshot lines 437, 3459–3469)
- Never harden or promote the CARHA 53(a) "could also be assessed" gloss. When folding CARHA 53 into a document, use "53(a) anywhere, 53(b) boards-conditioned, different tiers". (archive: snapshot lines 1812–1822, 5232–5247)
- Verified supersession carriers are already correct; do not re-litigate them. (archive: snapshot lines 2305–2317)
- Peacemaker facts are established. (archive: snapshot lines 3998–4013)
- The "recorded so nobody re-derives" rows: do NOT repair `rules_primer:285`; EIHL Rule 42 is listed twice; `goaltender:980` holds; the 2+10 server question is unanswerable; CARHA 49(a) versus 66(a) Note 2 is unsettled (do not resolve); the airborne skate under CARHA is settled neither way; USA Hockey 606; the quote-drift non-defect at `pwtp` 601(d)(7); USA Hockey 405(c) is not sole-carried. (archive: snapshot lines 8414–9477)
- Deliberate decisions in `offensive_zone_play.md` (CARHA 50(b) not written; the 49(a) governor sits in the next chunk) and the `body_contact_and_battles` "reported, not edited" set (:419, :1105, the :1498 table, :648). (archive: snapshot lines 18777–18797, 19646–19661)
- `defender.md` KT9's `Action:` shot-blocking line is the sole extraction-layer carrier and must not be trimmed. `defender.md:48` "costs your team two minutes … in all six books" holds; do not "improve" it. (archive: snapshot lines 25011–25013, 30970–30978)
- Cleared on the record: `shooting.md:905` KT4 is not voiced alone and enumerates its six books; the In-House 64 / 5.1 absence is a correct scope statement; the embellishment negative stands (PWHL renumbers it to 66). (archive: snapshot lines 15044–15047, 16077–16083, 30473–30492)
- The checking-ban books themselves say board contact stays legal. The posture limb belongs to the RECEIVING player: checker-side blocks, goaltender blocks and blocks already carrying the limb were excluded on principle, so do not re-report them. The `body_contact_and_battles.md` §6 walking-speed mechanism is linked, not restated, and is load-bearing. (archive: snapshot lines 15954–15961, 16457–16460, 16552–16560)
- The point-shot value figure in `shooting.md:404` carries two qualifications (misses in the denominator; even-strength only). Any wave that adds it elsewhere must carry both. (archive: snapshot lines 28329–28333)
- Outreach was removed at the owner's instruction. That is a removal, not a closure; do not re-add it. (archive: snapshot lines 18138–18142)
- The over-the-glass WATCH item; a brief error that comes back as corroboration. (archive: snapshot lines 7524–7556)
- Four "corpus-wide alarms" were refuted: 49(b) was in five documents, `(x)(roman)` gave 0 mangles, `uk_rules.md` was the reference implementation, and the PWHL footers were already recorded. (archive: snapshot lines 31117–31149, 31591–31699, 32391–32406)
- A single-line table cell biases toward permission. An antecedent defect can sit in a definition the claims were built on. The `passing_and_receiving.md:470` back-reference is a landmine; `usah.txt` splits "very dangerous / shot". (archive: snapshot lines 5614–5626, 6244–6248, 6316–6324)
- **"Never sweep" means read every hit, not skip every hit.** (archive: snapshot lines 7643–7671)
- **The sole-owner-by-reference shape:** a pointer that promises completeness must be answered by its target. Restate versus cross-reference is decided per layer: a cross-reference works in a body, not in a Common Mistakes bullet or a Key Takeaway. (archive: snapshot lines 7866–7922, 32136–32141)

### Podcast and environment

- **Two podcast styles:** "Discussion" and "Playing principles". The rejected names, the OpenAI voice caveat and the P3 compromise scope (constraint 7) are in the archive. (archive: snapshot lines 7990–8157)
- **Podcast orientation:** Polly generative Amy. The audio and the whisper model live OUTSIDE the repo and are not backed up. An expired `ice-hockey` AWS SSO token looks like a Polly outage, so check the token first. (archive: snapshot lines 18021–18033, 18080–18085)
- **Caption safety and rule-scope routing is open-ended.** The 25–50-word caption target is an accepted negative result. (archive: snapshot lines 18107–18117)

### Further standing notes (one line each)

- Two search traps: flatten first; "kept in motion" hits the shootout procedure. (archive: snapshot lines 5870–5882)
- Priority order, drift, the metric, and the frozen re-baseline. `check_instruction_first` has a third bug. (archive: snapshot lines 7148–7289)
- The accountability rule. (archive: snapshot lines 7290–7308)
- The Hockey Canada glossary line-break splice. (archive: snapshot lines 10009–10022)
- Contrast frames versus floor frames. "Searched the NHL's wording, not the act" is a failure. (archive: snapshot lines 10177–10207)
- Near-cap liability. Measure the exact string you supply, not a paraphrase of it. (archive: snapshot lines 10587–10594, 10671–10708)
- `cut`, `head` and character limits are display choices. Grep for the exact string before concluding it is absent. (archive: snapshot lines 10938–10980)
- Scope honestly or read the books. Do not widen to a count-free claim without reading all of them. (archive: snapshot lines 11712–11726)
- A unary sweep is not a worklist. (archive: snapshot lines 14562–14578)
- The three things a hedge-absence pass cannot find. A count in prose can be made wrong by a later insertion. (archive: snapshot lines 15256–15286)
- Coordinator site lists run short. They need a reading pass, not a grep. (archive: snapshot lines 15402–15414)
- An inference from silence is not a grant. Do not brief from it. (archive: snapshot lines 15734–15751)
- Read tables positionally. "Neither book" once had no antecedent. (archive: snapshot lines 15812–15815)
- A partially extracted list looks exactly like a fully extracted one: §6 quoted 8 of 9 "Angling In" points. (archive: snapshot lines 15895–15910)
- Bare-major sites cluster where a document talks about majors as a class. The `rules_primer` §10 table is not spoken. (archive: snapshot lines 19276–19296)
- NHL/PWHL 43.3 name only cross-check, push and charge. Do not widen. (archive: snapshot lines 19376–19377)
- A relayed "never cites" claim was false (101.1 appears at 176 sites). Measure before briefing. (archive: snapshot lines 19405–19413)
- Bare majors exist in British men's hockey. A tariff carried by a pronoun or paraphrase evades every tariff-noun sweep. A tariff stated as a negative ("no minor option") leaves the listener at whatever tier they assumed. (archive: snapshot lines 19728–19744, 19809)
- An mtime check cannot see a stale figure inside a record. No book has a general dangerous-play rule. (archive: snapshot lines 19871–19880)
- A chunk map is a candidate list, never a defect list. (archive: snapshot lines 20026, 20298–20302)
- Searched negative: there is no freeze-triggered no-change rule outside NHL/IIHF/PWHL. The own-save carve-out is in three books. HC 6.4 and CARHA 57(h) exist. (archive: snapshot lines 20047–20071, 20159–20161)
- `carha.txt` has been read in plain extraction only; reading by line range mitigates that. (archive: snapshot lines 20564–20565)
- Do not sweep the empty-bench attribution. The books split three ways. (archive: snapshot lines 20588–20597)
- Freeze negatives verified, and the safety hand-off was correctly declined. (archive: snapshot lines 20818–20834)
- Four consecutive asterisks moved the amber onto citations. Only a re-read of the raw bytes caught it. (archive: snapshot lines 21893–21897)
- The repetition hazard was the RIDER, not the counted string. (archive: snapshot lines 21912–21918)
- Hand-rolled paragraph censuses that do not mirror `md_to_speech` were wrong twice. (archive: snapshot lines 21929–21938)
- Corpus-wide figures are untrustworthy until every agent stops. (archive: snapshot lines 22621–22623, 22674–22675)
- Read the document before reporting a gap. A sweep says what the book says; only reading says what the corpus says. (archive: snapshot lines 23198–23268)
- Shortening and re-aiming waves produce defects in the flattering direction. An honest partial-read disclosure is a worklist. (archive: snapshot lines 23477–23487, 23682–23691, 23938–23943)
- `check_rule_scope` keys sub-clauses separately and measures book sets, not tariffs. A clean run does not mean the tariffs agree. (archive: snapshot lines 23695–23714)
- Refuse to sweep a look-alike: "their" can correctly mean the opponent's. (archive: snapshot lines 27988–27991)
- Line numbers in this file go stale. Name the identifier or the string. (archive: snapshot lines 11951–11959, 22337–22351)

## Open rows

**Re-triaged 22 October 2026 at HEAD a672681.** Four agents tested every row of the previous section against the files. About 280 verdicts: roughly 115 FIXED, 50 DONE-RECORD, 4 WRONG, about 80 still OPEN. The old section and every verdict table (with evidence and current locations) are in [plan_open_rows_archive_2026-10-22.md](../reviews/plan_open_rows_archive_2026-10-22.md); read the verdict row there before dispatching. **Line numbers below are as found on 22 Oct and will drift; name the string.** Test each row against HEAD before acting on it.

- **SG20 IN FLIGHT (22 Oct):** readability (z/brief.md) on every remaining page with a long paragraph or KT: forechecking+OZP; PWTP+game_management; special_teams+faceoffs; breakouts+DZC; defender+risk_management; on_ice_communication+NZ; getting_started+switching; mental_game+time_and_space+core_principles; scanning+practice_and_development+puck_support; rules_primer (:945, :855) + uk_rules KT9 follow-ups. Uncommitted until reviewed.

### Owner decisions needed

- **Getting Better page:** plan decisions D1–D6 (project/getting_better_plan.md).
- **Optional NotebookLM remakes:** Defenceman, Goalie, Faceoffs, Rules Primer, UK Rules, Game Management, Zone Entries.
- **"Contents" below 480 px:** keep ☰, or use a text label?
- **USAH 615(f):** does the three-game suspension stack with 404(b)'s next game? The book is silent. Keep "a three-game suspension" as worded unless the owner rules.
- **USAH 608(c) in Casebook 608 Sit. 1 units:** about 21 units quote "major plus GM, or a match" and say "plan on a match (602(a))" without naming 608(c). Is 602(a) enough, or must 608(c) be named in each unit? (sites listed in archive r1)
- **Wave 34 leftovers never answered:** USA Hockey Level 1 wording, caption trim policy, the centre-fly label. Also: delete the dead `creaseThePuckDecides` spec at center.mjs:777?
- **Research scope:** does the UK concussion guidance reach Scotland and Northern Ireland? Does IIHF 202.3 reach British U19 play? What is the British U10/U12 tariff for a hit in non-checking play?

### Content — rules accuracy (each needs a rules-verifier; the direction is noted)

- **SG13 DONE (22 Oct)** (record sg13_rules_accuracy_rows_2026-10-22.md). Closed: late hit ×3, OIC ×3, T&S 21.1, DZC ×2, puck_handling ×2, goaltender ×4, CARHA 62(b) ×3 pages, special_teams :776, PWTP ×3, passing. New from it: body_contact :1651 facts (300/300) and :637/:655 lack NHL/PWHL 21.1 / late-hit price; T&S goalie contact :556–562 no NHL 21.1; defender :244 'can be a shot too' vs HC Interp 5 (rules-verifier); CARHA follow-through limb in shooting.md?; optional 10.1→10.1(i) in breakouts :657, DZC :178, body_contact :1148.

- **zone_entries :235:** "only once made" errs safe.
- **SG18 follow-ups:** uk_rules KT9 "stricter IIHF edition" has no single answer; rules_primer :945 "touching the line is allowed" unscoped (NHL/IIHF wording); :855 "throwing it forward" omits "towards the opponent's net"; defending_the_rush has spoken "Important." runs of 5–6 not yet reviewed.
- **team_play :283 PWHL ceiling:** "can go higher … if it hurts them" is slightly broad for the PWHL (only 21.1, deliberate injury). Harsher direction.

### Content — safety layering and readability

- **SG14 DONE (22 Oct)** (record sg14_posture_followups_renderer_2026-10-22.md): board-posture calls for conditioning, getting_started, switching, zone_entries, defender, passing; body_contact late-hit NHL/PWHL + 10.1(i); time_and_space goalie contact; defender :244; 7 renderer fixes. New: renderer speaks sentence-initial rule numbers lowercase; HC 2.2(i) letter-or-numeral unchecked.

- **Facing-the-wall fallback** done (PWTP SG13, practice_and_development SG15).
- **Listener "Important." runs:** SG16/SG17 broke the worst. Still: rules_primer 6 (elbowing/helmets; crease contact), 5 (screening; CM faceoff/glass), 4s; body_contact 4 at :1735–1741.
- **Long units:** PWTP DONE in SG16. Corpus-wide 43 long paragraphs and 90 KTs over 60 words (check_readability); spoken chunks over 2,500 chars unmeasured; 92 of 204 captions over 800 chars.
- **Smaller items:** "every level of UK hockey runs the IIHF book" in 34 headers (low; "amended locally" may cover it).
- **rules_primer:** table :899 has 0 rows of headroom; the content of table :1018 (dropped from audio) has no recorded check that it is voiced inline; quote-drift flags at :430 and :1201.
- **Basics wing script** omits the weak-side collapse to the slot that the centre list relies on (winger.md :55/:154/:182). Fix in a future Basics remake.

### Diagrams and site

- **SG15 DONE (22 Oct)** (record sg15_captions_renderer_site_smalls_2026-10-22.md). New/open from it: pull-up wording consistency ("see the numbers on their back" vs "see their numbers" in ~18 files); puck-decides caption HC "also counts where you are" ambiguity (rules look); winger-arriving-at-the-line caption full posture on a blue-line stand-up; puck-on-the-far-side page-about-itself text; pinch/press captions ~2,850 chars; OZP :833 clause ii exception (optional); rules_primer :1038 "does not settle" (optional); breakouts.mjs rim comment says goaltender host (stale); renderer ~340 other lower-case sentence starts (cosmetic).

- **Captions:** 15 title echoes fixed in SG17; 16 kept on purpose.
- **Labels:** leader lines start at token centre and cross the token's own letter (placeLabels, all diagrams); other full-sheet labels may cross painted lines (no checker); dz-walk-down-man "goes with the carrier" may cross the blue line at 400 px.
- **Site:** a site-reviewer pass is still owed for the 400 px diagram scene, the 🇬🇧 wrap in conditioning's Key focus and a special_teams bold run.

### Renderer (md_to_speech) and podcast tooling

- Renderer: ~340 other lower-case sentence starts (list/heading numerals, formations, quantities) — cosmetic.
- podcast_queue.py has no `--style basics`; synthesize_style_b has no `--doc-id` (only matter if Basics production is tracked through them). Basics downloads/m3u DONE in SG16.

### Checkers and sources (scripts/ — change between waves, never during one)

- Checker tools: SG17 fixed readability, layer_echo, pointers, zones, caption_echo. Still: other scripts may exit 0 on an unknown flag; check_pointers can't see sibling-document pointers; check_callout_flow.classify() keys on how a line opens; check_facts --near has no 14-cap warning; check_quote_drift has no unflattened pass.
- Sources: hc_2026-08-print.txt not yet renamed; the EIHL roster and discipline documents and the IHUK policy documents are not on disk; about 28 equipment citations have never been refetched. Search the IIHF Situation Handbooks for a puck-carrier vulnerability ruling.

### UNCLEAR (needs a sharper question before dispatch)

- rules_primer :462 (original line not identifiable); uk_rules KT17 drops three limbs (probably a deliberate summary — likely close); body_contact EIHL mentions (the review question was never written down); readability item 2 "rules last"; IIHF Table 16/14 edition question; global.css :951 and podcast.xml.ts :36 stale text; AudioPlayer.astro resume key (looks deliberate); "the podcast upload check".
