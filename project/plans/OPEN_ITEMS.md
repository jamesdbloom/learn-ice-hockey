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

### P1 readability and the layers

- [W31 amber on citations] three W31 amber runs land on a rule number, leaving the instruction after them unhighlighted: risk_management :717 ("But CARHA's 86(b) is the clause, not the rule:"), game_management :179 ("640(g) and 640(h) reach only…"), body_contact :1124 ("…its 63(a)"; also "And the NHL, IIHF, PWHL and Hockey Canada write a permission…") — move the bold onto the instruction (P2)
- [W31 nits] game_management/rink_map/others: long spoken chunks >2,500 chars on many W31 units; shooting facts :308/:516 IIHF ceiling unstated; glossary :377 "reckless or deliberate" vs 602(a)'s "attempts to injure", 609(c) contrast clause omitted; DZC "one of the six" before PWHL/CARHA named and stale "four-book comparison" pointer; bc :1912 trailer "immediately after 603(a)"; forechecking :1002 trailer garbled; center :474 "appears nowhere in any edition on disk" narrates the corpus (readability)
- [USAH 640 Note 2 adult men] W31 wrote "where 640 does not reach the hit, 602(a) makes a reckless late hit a match" (forechecking :600, game_management :171/:179/:833/:864); forechecking's trailer cites 640 Note 2 as reaching an avoidable check on a player no longer in control of the puck with no classification exception — if so, 640 reaches adult men and ruling (ii) governs; verify Note 2 in usah.txt and adjust (direction: accuracy)
- [USAH 608(c) layer test] corpus — every site quoting USAH Casebook 608 Situation 1's "major plus a game misconduct, or a match penalty" must carry, in the same voiced unit, that 608(c) makes the match MANDATORY for a reckless check from behind "with excessive force while the opponent is in a vulnerable or defenseless position" (usah.txt:3728-3731; usah_casebook.txt:11777-11780). W31 fixed zone_entries, risk_management, defensive_zone_coverage. Carriers of Sit. 1 still to layer-test per unit (most cite 608(c) somewhere, not necessarily beside each Sit. 1 quote): glossary, rules_primer, pwp, center, defender, winger, goaltender, switching_positions, defending_the_rush, offensive_zone_play, forechecking_systems, body_contact, passing_and_receiving, special_teams (direction: permissive)
- [DZC long CM / glossary summary match] DZC CM :751 now ~3,450 chars; glossary Key focus :27 and KT :469 say a deliberate hit "can reach a match penalty" where HC/CARHA/USAH make it mandatory (readability; possibly permissive-soft)
- [USAH 602(a) reading — dissent] RESOLVED BY OWNER 1 Oct 2026: "plan on the match" (see [USAH 602(a) pre-existing reckless sites]); kept for the record. W31 ruled (rules-verifier) that a reckless act a specific USAH rule covers is that rule's major+GM OR its match (Casebook 621 Sit. 3, 634 Sit. 3, 607 Sit. 4; Appendix I "Match Penalty Option"; Discipline Policy levels), with 602(a) mandatory for attempts to injure and uncovered reckless acts. A safety-reviewer (rF) dissented: Casebook 602 Sit. 1 says "the match penalty must be assessed" for reckless action, 602(a) says "shall", and no precedence clause exists, so "the book does not settle" was the conservative wording. Both readings eject; suspension ranges differ (602(a) 6–10 games vs 3–5/4–8). Owner may want to rule; if the dissent is adopted, the W31 sites need "plan on the match" wording (direction: possibly permissive)
- [USAH 602(a) pre-existing reckless sites] corpus — OWNER RULING 1 Oct 2026 (supersedes the W31 rules-verifier reading below): for a reckless act a specific USAH rule covers, say "a mandatory major plus a game misconduct, and plan on a match penalty — 602(a) says one 'shall be assessed' for anyone who 'recklessly endangers or attempts to injure', though the rule's (c) says 'may also'"; never "instead"/"optional"/"allows"/"reaches" framing for the USAH reckless match. Pre-W31 sites to bring into line include body_contact :551 (628(c)), :609 (620(c) "reaches"), :631 facts (603(c) "allows a match penalty above it"), :1557 facts (621(c)), :1592 (639(c)), risk_management :642/:659 (639(c) "reaches"), and every corpus "may also be assessed" USAH match stated without 602(a). Earlier reading, kept for the record: apply scratchpad-recorded W31 ruling (review record round_2026-10-01_wave31): 602(a) is mandatory for an ATTEMPT to injure and for reckless acts NO specific rule prices (Casebook 602 Sits. 2–4); a reckless act a specific rule covers is that rule's major+GM OR its (c)/(e)/(h) match instead (Appendix I "Match Penalty Option"; Casebook 607 Sit. 4, 621 Sit. 3, 634 Sit. 3). HEAD sites to judge: body_contact :581/:584/:1503/:1523/:1534/:1779/:1912 ("tied to no named foul", late hit in adult men, interference outside 625); pwp :469/:481/:654/:898 and time_and_space :268/:282/:576 (reckless pick: "640(g)'s major plus GM … and 602(a)'s match" may read as stacking); game_management :171/:179/:833/:864; on_ice_communication :281; offensive_zone_play :867/:989/:1140 (late hit "reaches adult men" via 602(a) — likely CORRECT under ruling (iv) where 640 does not reach adult men; do not cut the reckless half there) and :1238 trailer; also 608(c) mandatory match for a reckless excessive-force check from behind on a defenceless opponent — check every USAH checking-from-behind price carries it (direction: mixed; 608(c) permissive)
- [NHL/PWHL 43.5 late hit] corpus — wherever the NHL/PWHL late-hit or interference ejection is said to "need an injury" (56.5), a late hit on a turned player is a check from behind: 43.3 major on an opponent "unable to protect or defend himself" + 43.5 mandatory game misconduct, injury or not (nhl_rules.txt:5475-5482; pwhl 43.3/43.5); W31 fixed game_management; candidates: the 56.5-citing docs in [NHL 21.1 / CARHA 48(a) general match] (direction: permissive)
- [freeze-for-whistle excused while checked] rules_primer, puck_handling, breakouts, faceoffs cite HC 10.1(i)/CARHA 74(b)'s "being checked" exception for pinning the puck but not HC 6.12(b) (deliberately making the puck unplayable to gain a stoppage → Rule 10.1) or CARHA 55(a) Note 2 (bench minor, "freezing the puck"); W31 fixed on_ice_communication — apply its ruling once read (direction: permissive)
- [NHL 21.1 / CARHA 48(a) general match] corpus — sites pricing the NHL/PWHL late hit or interference as "game misconduct needs an injury" (56.5) miss 21.1's mandatory match for a deliberate attempt to injure (nhl_rules.txt:2635-2637; pwhl 21.1); candidates citing 56.5 without 21.1: uk_rules, rink_map, on_ice_communication, scanning_and_anticipation, time_and_space, offensive_zone_play, defensive_zone_coverage, playing_without_the_puck; and CARHA ceilings given as 49(a)/52/53 alone miss 48(a) (carha.txt:2390-2392) (direction: permissive)
- [team_play CARHA 48(d) helmet] team_play :274-276 helmet paragraph prices five books but not CARHA 48(d) (match for grabbing a helmet as advantage/punishment, else double minor; carha.txt:2399-2407) — silence (direction: completeness)
- [uk_rules IIHF tables] uk_rules :369 cites "Table 7" for the discretionary major-plus-GM list — in the 2026/27 IIHF book those entries are Table 5's "MAJOR + GMP" column (Table 7 is misconducts); :371 "the IIHF book has no match-penalty tier at all" untested against 2026/27 (accuracy)
- [bc :661 CARHA intentionally] body_contact facts :661 "No CARHA rung leaves you on the ice" — CARHA 53(a) reaches only an intentional hit from behind; accidental falls to 49 (49(c) no penalty) — overstates in the stricter direction (accuracy)
- [general deliberate-injury routes] sweep whether Hockey Canada and CARHA (48(h)) have general deliberate-injury match routes not voiced where the corpus names only rule-specific ones; check shooting's high-stick "full ladder" carries USAH 602(a) (direction: permissive-if-found) — W31 1 Oct: SUPERSEDED for USA Hockey by rows [USAH 602(a) pre-existing reckless sites] and [USAH 602(a) reading — dissent] (plan lines 218-219), which carry the binding W31 ruling (scratchpad w31_602a_ruling.md); general deliberate-injury routes added in W31 files: CARHA 48(a) in center :474/:684/:693/:725 (lane F), risk_management facts :788/KT :897 and zone_entries CM :1071 (lane G), game_management CARHA body paragraph (lane H); NHL/PWHL 21.1 (mandatory match for attempt/deliberate injury, nhl_rules.txt:2635-2637, pwhl_rules.txt:2383-2384) added to game_management facts :170/:829, CM :179, body :860, KT16 (lane H); body_contact :357 already cites CARHA 48(h) (lane A); shooting high-stick facts :172 now carries 602(a) for an attempt to injure (lane F); Hockey Canada: lane A reads 7.1(c) as residual ('in any manner not otherwise covered', hc.txt:5918-5921); lane G cited HC Appendix D Note 1 (hc.txt:9102-9103) then removed it on coordinator instruction; IIHF books carry no match penalty (lane H); remaining: HC 7.1(c) vs Appendix D Note 1 scope needs a rules-verifier; NHL 21.1 census (uk_rules, rink_map, on_ice_communication, scanning_and_anticipation, time_and_space, offensive_zone_play, defensive_zone_coverage cite NHL 56.5 but never 21.1 — lane H); CARHA 48(a) census outside W31 files; USA Hockey half → the two newer 602(a) rows.
- [rules_primer amber placement] rules_primer :441 and :1001 new amber runs land on penalty statements ("USA Hockey gives you no bare-minor floor…", "Nor is it two minutes under USA Hockey…") rather than an instruction (direction: readability, P2)
- [USAH 602(a) deliberate-injury match] corpus — sentences naming USAH 621(c)/609(c)-style "may also be assessed" match as USA Hockey's answer to a DELIBERATE injury or attempt miss 602(a)'s mandatory "shall" match (usah.txt:3496-3500); check shooting's high-stick ladder and siblings; also HC's and CARHA 48's general deliberate-injury routes (direction: permissive) — W31 1 Oct: SUPERSEDED by rows [USAH 602(a) pre-existing reckless sites] and [USAH 602(a) reading — dissent] (plan lines 218-219). W31 applied the binding ruling (w31_602a_ruling.md: (i) attempt to injure = mandatory 602(a) match; (ii) covered reckless act = that rule's major+GM OR its (c)/(e)/(h) match instead, never stacked; (iii) 608(c) mandatory) in every W31 file that carried a site: body_contact :357/:640/:642 (A), pwp :641/:890 restored to HEAD and time_and_space :288/:482/:577 now '…or the referee may make it a match penalty instead (607(e))' (B), ozp facts :603 / body :624/:655/:887 / CM :1135/:1142 and saa :370/:372 (C), forechecking facts :762, CM :933, KT8 :994, body :600, trailer :1002 (D), DZC :519/:618 and glossary :363/:441 attempt-only, glossary :363 'shorthand' line → 'at least the major plus a game misconduct… The referee may make it a match penalty instead' (E), shooting :538/:308/:516/slap-shot blockquote and center :462/:474/:666/:693/facts :680 (F), zone_entries :741 (G), game_management facts :171/:833, CM :179/:1115, body :864 (H), OIC :267/:281 and DTR :319/:644/:657/:922 (I), rink_map :210/:424/:590/:657 (J; no 602(a) left in rink_map); 608(c) mandatory match added at DZC :177/:476/:751/new facts :464 (E) and zone_entries :219/:229/:775/:1071, risk_management :793 (G); remaining: see the two newer rows — body_contact :581/:584/:1503/:1523/:1534/:1779/:1912, pwp/time_and_space reckless-pick stacking candidates, ozp :867/:989/:1140 late hit, the dissent, and 608(c) in documents outside W31 (rules_primer, body_contact, defending_the_rush likely carry Casebook 608 'or a match' — lane G).
- [switching ask-your-league] switching_positions :213/:229/:496 scope the no-hit rule to the WNIHL but give no "ask your league" limb for other British women's competitions (winger has one) (consistency)
- [rink_map CARHA citation] rink_map carries the CARHA 79(a)/30(a) slap-shot tariff at :566/:571/KT8 with no 79/30(a)/32(d) citation anywhere incl. the trailer; summary lines omit the 32(d) one-game suspension; :485 "close the gap … with your stick" may be heard as stick on opponent — "your stick in the lane" (accuracy/readability)
- [switching :229 British women major] switching_positions :229 "In British women's hockey a major ends your game" (In-House Rule 101) — In-House reaches EIH/SIHA competition only, likely too broad; errs harsher (accuracy)
- [switching KT :563 length] switching_positions KT :563 ~3,110 spoken chars (readability, P1)
- [risk 36(a) 'may award'] risk_management body :520 "its 36(a)(4) may award the goal" can be heard as referee discretion — 36(a) is "will be awarded"; the uncertainty is scope, as facts :645 says (accuracy)
- [breakouts trapezoid books] breakouts KT9, facts :974/:998 and the trapezoid body name only USAH and HC as having no trapezoid — CARHA has none either and its 58(b) bars a goalie freezing the puck behind the goal line outside the crease; PWHL 1.8/27.8 enforce no trapezoid but its delay-of-game list still prints the designated-area minor (direction: accuracy)
- [goaltender CARHA 53(b)] goaltender facts :1235 and body :1243 price head-first checking from behind for USAH 608(b), HC 7.5(c), NHL/PWHL/IIHF 43.2 but omit CARHA 53(b) (mandatory match, same "unable to protect" words) — omission, not cheaper; facts at 282/300 (direction: accuracy)
- [DZC :37 USAH 620 vs 621] defensive_zone_coverage body :37 "USA Hockey 620(b) makes a careless stick to the head a mandatory major and game misconduct" — Casebook 621 Situation 1 sends non-check stick-to-head contact to 621 (minor / reckless major+GM / match); may cite the wrong rule for a loose-puck swing (direction: harsher, accuracy)
- [ozp CARHA 62(c)] offensive_zone_play facts :503, body :527, CM :1133 price CARHA 62(b) (major, GM per Note) but not 62(c) match for deliberate or attempted injury (carha.txt:2994-2996); facts :503 at 299/300 (direction: permissive-low) — W30 1 Oct: done in offensive_zone_play (lane E) — facts :503 split, new Rule line :504 gives CARHA 62(b) major/GM and 62(c) match (carha.txt 62(c) "A Match penalty shall be assessed to any player who deliberately attempts to injure or deliberately injures an opponent with a high stick"); body :528 now "Injure an opponent deliberately with a high stick, or try to, and in a CARHA-affiliated adult league it is a match penalty under 62(c) — as it is under NHL 60.4, PWHL 61.4 and USA Hockey 602(a), and under Hockey Canada through its Head Contact rule, 7.6(c) or 7.7(c)" (re-repaired twice after safety reads; IIHF correctly unnamed — 60.4 tops at major+automatic GM); CM tipping bullet :1138 adds the 62(c) match; remaining: CM :1138 still attaches the match penalty to CARHA alone after "None of those is capped at a minor" for NHL/USAH/HC — possible contrast for those readers; author offered the body's tail ("as it is under NHL 60.4, PWHL 61.4 and USA Hockey 602(a)…"), coordinator call.
- [winger CM :689 length] winger Common Mistakes cross-checking bullet (:689) is several thousand characters spoken — needs a per-limb layer test to slim it (direction: readability, P1)
- [uk_rules :601 EIHL instigator] uk_rules :601 "every other Rule 46 fighting offence — instigating… — still carries the IIHF's automatic ejection" follows the Elite League clause; under the EIHL Casebook an early instigator takes 2+5+10, no ejection (direction: harsher, accuracy)
- [defender :468 amber] defender :468 amber run opens on the citation "⚠️ Hockey Canada 7.4(b)" (wrapper formed; tariff after it black) — reword so the run opens on the hazard (direction: readability, P2; W27 site review)
- [glossary length] language_and_glossary Screen/Traffic/CM "Answering 'Screen!'" units are 1,800–2,700 spoken chars each after W27; further compression needs a decision on which quotations move to the trailer (direction: readability, P1)
- [risk_management] summary layers never checked in the HARSHER direction (overstated tariffs); negatives were lexical, so a takeaway describing the act without naming it was not found (direction: harsher) — (plan 2427–2434; added by verifier)

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

**Re-triaged 19 Oct 2026.** The previous 670-entry section and its per-row triage are archived in [project/reviews/plan_open_rows_archive_2026-10-19.md](../reviews/plan_open_rows_archive_2026-10-19.md). Of those entries, 339 were already done. **The 53 UNCLEAR rows were resolved on 19 Oct: 31 done, 16 removed, and 6 open (below). The archive records each verdict.** Line numbers below are from the triage and will drift, so brief each item as a CLAIM to find in every layer, never as a line.

**Recent rounds, all committed and pushed:** T1 277ece1, S5 30209b4, T2 6641032, site 9–11 a91aeef, IS 722e036, W 4435b6e, kk 92ca6e6, gg 65b14f5. Records are in project/reviews/.

### Owner decisions — ANSWERED 19 Oct 2026 (memory: project_owner_rulings_oct15)
- **Analytics:** keep GA; fix the infra/cloudfront.tf:120-121 comment (comment-only infra edit approved).
- **Layout:** keep both In-short and facts. "What it costs" stays label-only. KT count kept as is (no cap). Keep `## Check yourself`.
- **PWHL** is a standing sixth book wherever books are compared.
- **Head-reaching hit from behind (IIHF, NHL, PWHL):** state the HARSHER of Rule 43 and Rule 48. This supersedes the 15 Oct "keep Rule 43" IIHF ruling. → content wave.
- **CARHA 32(d):** "at least a one-game suspension" wherever a CARHA major, match or game misconduct is priced. → content wave.
- **EIH R&R reach to Scotland and Northern Ireland:** say it is unsettled; play as if it applies. → content wave.
- **USAH 602(a):** add the likely multi-game suspension where "plan on a match" is stated. → content wave.
- **HC head-first Q1–Q5:** treated as answered by the 18 Oct "harsher of 7.5 and 7.6" ruling and the goal-frame ruling.
- **HC goalie hit from behind:** harsher of 7.5 and 8.5. **HC slide:** note 8.6's exception but plan on 8.7 clipping. Both → content wave. **Podcast ear test:** DONE (owner, all fine).
- **Minor items the coordinator decides, no owner needed:** tactics-ratio target (none; worklist only); PNIHL/NIHL trailer; the five D-zone families; centre low-zone-collapse exception; panels per page; "(2) minor" shorthand; `*.local.md` stays gitignored.

### Re-triaged dispatch list (19 Oct 2026)

Line numbers are working-tree lines at time of check. Brief each one as a CLAIM to find in every layer, not as a line.

**Cross-file claim sweeps (one agent per claim, or fold into per-file agents):**
- "take it on your forearm and hip" board-posture wording in inherited docs (owner's KEEP/DEMOTE ruling): on_ice_communication :108, defender :144/:906/:991, switching_positions :213, zone_entries :565/:1168/:1235, conditioning_and_recovery :212/:613/:685, getting_started :490. Body_contact :33/:51/:1973 is probably the owning doc (keep). passing_and_receiving board-posture limb in every layer (:195 … KT14 :905).
- "minor/female" misheard by TTS: body_contact :739, passing :437, winger :747, center :766, zone_entries :852, defensive_zone_coverage :180.
- Stale "four books" frames (corpus holds six): body_contact :563/:618/:1644 facts (+8 framings), game_management :143/:1133/:1141/:1169, team_play_and_culture :137, switching_positions :290, breakouts :562, defender :1003 and center :924 ("Rules Primer carries that four-book split"). faceoffs five-vs-six (:4/:656 vs :1031).
- CARHA 32(d) flat one-game suspension, with no "at least": breakouts :214, offensive_zone_play :715, shooting :161/:191, playing_without_the_puck :740, defensive_zone_coverage :598. Tied to owner question at plan :582.
- Slash voiced as "or": puck_support_and_spacing :587, defending_the_rush :731 (time_and_space :499 already fixed).
- HC 8.5(b)/7.1(c)(iii) injure limb missing: winger KT :864, center :833/:903, risk_management :755 (cites CARHA 48(c) without HC 7.1(c)(iii)), passing_and_receiving :486 (facts/CM/KT15 drop "deliberately").
- HC 6.1(g) net-off not named: goaltender, game_management :624/:637. game_management :637/:1006 also lacks USAH 610(d).
- Missing PWHL: goaltender :795 (81.1), special_teams :685 (68.2), rules_primer :775.
- "Hockey Canada 10.1(i)" citation form (cosmetic): breakouts :650/:656, defensive_zone_coverage :177/:203, body_contact :1145/:1161.

**Per file:**
- **rules_primer.md:** :462 HC ladder states condition before scope; :1157 KT "ask which IIHF edition" has no Elite League half; :961 heading level; :895 and :1014 tables at 0 headroom or dropped from audio (no inline-voicing check recorded); speech: a run of 19 consecutive "Important.", "Fourth, If", "under ten is" read in lower case; 2 quote-drift flags.
- **uk_rules.md:** KT9 :632 "ask which IIHF edition" (same as rules_primer); "five (5)" at :136 is spoken "five (five)"; "U12 is" read in lower case; trailer lacks R&R 3.1/17.1; EIHL Casebook cited as "Version 1.1" (:490/:666/:672) where the disk copy says 1.0; KT17 omits three EIHL Casebook 46 limbs (may be deliberate); 34 headers say "every level of UK hockey runs the IIHF book" (:759 row).
- **body_contact_and_battles.md:** :88/:89 near-duplicate CARHA facts; :814 "one (1)" spoken twice; :1656–1661 amber runs open on a citation; CM layer 78% rules-bearing; §5/§12 callout stacks; table at :1648 has 0 chars headroom; content-review question on 43 EIHL mentions.
- **game_management.md:** :939 HC J/S summary missing the cross-check limb; :894 facts at 299/300; :143 promises risk_management "carries all four books" (uncensused).
- **goaltender.md:** :1246 charging-ejection list lacks EIHL Casebook 42.
- **defender.md:** :244 crease cover lacks HC where-you-are limb; :867 USAH 639(b) without 602(a); :462 facts "doubles, two of the three penalties that eject you" (readability).
- **winger.md:** :98 "fallback" vs :126/:799 "last resort".
- **faceoffs.md:** :1152/:1160 "out or deep"; :1231 cheating-back given for In-House only; "Fourth, If"; Overview 78% and CM 67% rules-bearing.
- **breakouts.md:** :1107/:1140 "no book lets a goalie freeze a rim" against USAH Situation 11; :966 cites NHL 84.2 alone.
- **defending_the_rush.md:** :1045 and KT9 :1111 HC blind side at the end boards.
- **offensive_zone_play.md:** :784 no CARHA 48(a); :291 "five-man setup"; :929 "bodycheck" in a facts line.
- **puck_handling.md:** :340 flat "falls on … all six books" (Casebook 614 Situation 2); 63.2(v) Note against 67.4 still unresolved; :347 `[you]` insertion has no ruling.
- **passing_and_receiving.md:** no CM/KT carries the HC crease where-you-are test; :440 "7.6 itself" in a J/S line.
- **language_and_glossary.md:** :295 HC ladder condition before scope; :415 HC 7.5 hit from behind with no 7.6 head limb.
- **rink_map.md:** :224 calls any deliberate USAH contact with a goalie charging, with no Casebook 607 Situation 5 carve-out.
- **special_teams.md:** :674 "Every book reports a game misconduct to an authority" (USAH and PWHL limbs unverified); :626 prevalence claim flagged "not independently verified".
- **neutral_zone_systems.md:** :437 (:361/:395/:424) HC 7.4(c) mandatory match for charging a head-down carrier; needs a rules-verifier.
- **on_ice_communication.md:** :641 "need not move that player yourself"; :311 amber run opens on a citation.
- **switching_positions.md:** trailer :648 "only" list omits CARHA 66(a), which facts :172 cites.
- **skating.md:** :823/:833 "stick blade".
- **shooting.md:** :1007 trailer "IIHF runs the enforcement the other way".
- **practice_and_development.md:** :560/:607 concussion is a pointer only.
- **equipment.md:** "double minor" not defined; "CAN/CSA" spoken as "CAN or CSA" (fix in `md_to_speech.py` STANDARDS_BODIES); about 28 citations never refetched.
- **conditioning_and_recovery.md:** :5 "not medical advice" sits in the dropped header, so a listener never hears it; :695 NIHL link on the old path.
- **getting_started.md:** :224 "hockey 101" spoken as "one hundred and one".
- **how_to_watch_hockey.md:** :733 trailer says "local primary text" (low).
- **playing_without_the_puck.md:** paragraphs over 1,200 chars (9, longest 4,353); :715 "none in the IIHF" (optional).
- **center/switching_positions/winger:** "inside the faceoff dots" and "level with the opposing defenceman" are not defined in rink_map or the glossary.

**Diagrams (site/src/diagrams/):** special_teams.mjs pk-nz-1-3 / pk-nz-1-1-2 / pp-umbrella captions unread; offensive_zone_play.mjs:668 is the last citation-led amber run; puck_handling.mjs :427 title unscoped and :437 stale comment; breakouts.mjs :520–522 and wall_contact_clauses.mjs :71 cite a KT6 that no longer exists; winger-arriving-at-the-line lacks CARHA lifted-skate; over-long captions (breakout-wheel 2,651 chars; forecheck-pinch 617 words; two forechecking captions over 3,300 chars; 94 of 205 captions over 800 chars); dz-collapse-corner ends on the pointer "All six books are set out earlier".

**Readability, corpus-wide:** 56 paragraphs over 1,200 chars (language_and_glossary 10, playing_without_the_puck 9, defending_the_rush 4, faceoffs 4); 147 KTs over 60 words; KT counts above 10 in 14 documents (uk_rules 23 … puck_handling 13), which needs the owner to say whether 5–10 binds; item 2 "rules last" never applied to the 19 R1-only documents; IIHF Table 16/14 in 17 documents (the edition decision is open).

**Site:** ReadingTools.astro:9 stale path comment; callout `<aside>`s lack a role (remark-corpus.mjs); global.css:951 stale anchor comment; about 24 literal `*` in `<main>` on 13 pages; AudioPlayer.astro:27 unversioned resume key; podcast.xml.ts:36 stale heading.

**sources/ (coordinator):** rename `hc_2026-08-print.txt`; refresh ihuk_nihl_roc.pdf (325,259 B on disk vs 369,646 B published); README:2010 "NOT CONFIRMED" sits under the correction that confirmed it; README lacks a note on the HC 8.5(b) Note 1 slip; EIHL Roster/DOPS, EIH and IHUK policy documents not on disk.

**scripts/ (coordinator, between waves):** `check_layer_echo` swallows the Sources trailer into KT; `check_caption_echo` compares against the whole block; `md_to_speech.py` CAN/CSA, "engine" field at :3863, U12 casing, "Fourth, If", "hockey 101"; unknown-flag handling (two exit 0, two traceback); `check_callout_flow.classify()` keys on how a line opens; `check_pointers` hardcodes the content root; `check_facts --near` misses blocks at 14; `check_quote_drift` has no unflattened pass; synthesize_style_b lacks a `--doc-id` sidecar; the podcast upload check reads local, not the deployed feed. About ten requested tools were never built (listed in parts B/E/H).

**Owner decisions (collected):** IIHF 48.1 vs the "keep Rule 43" ruling; HC goalie hit under 7.5 (shooting :536); Wave 34 questions 2–6 (In-House reach to Scotland/NI, CARHA suspensions, USAH Level 1, caption trim, centre-fly label); the "What it costs" frame; Google Analytics (cloudfront.tf:120 comment contradicts production); In-short above facts in about 300 sections; HC 8.6 vs 8.7 puck-first slide; KT count ceiling; tactics-ratio target; `## Check yourself` in 36 documents; PWHL as standing sixth book and `Rule set:` headers; PNIHL/NIHL trailer; the five D-zone families; centre-low-zone-collapse exception; dead `creaseThePuckDecides` spec; panels per page; "(2) minor" shorthand; `*.local.md` in VCS; podcast ear test.


---


### From the UNCLEAR resolution (19 Oct)
- **body_contact:**
  - :1661, the Kneeing table cell: HC 7.8 says "an opponent's knee"; match facts :580.
  - :1148 facts and :1155 body: IIHF 101.1 also bars pushing a player into the boards or eliminating her from the play. As written, the permissive direction. Run --near first.
- **faceoffs :1051:** an empty penalty box is a bench minor under NHL and IIHF; add the PWHL.
- **rules_primer:**
  - :19-22: four Key focus items are a bulleted list; make them bold-lead paragraphs like the rest.
  - :1163: the NIHL 1 & 2 RoC path is superseded; the publisher now serves 2026/09/NIHL-1-and-2-ROC-2026-2027-1.pdf.
  - :1102: covering the puck with the net empty is not an awarded goal in every book; USAH 614(b) requires "obvious and imminent". Harsh direction.
- **conditioning_and_recovery :695:** the same superseded NIHL path.
- **equipment :935-936 and mental_game :781:** edition notes carry inline ⚠️ that changes nothing a player does. equipment :935 also narrates the corpus's own history (non-negotiable 6).
- **site global.css:**
  - the amber left bar contrast is 2.1:1 against the 3:1 expected for non-text marks; darken it or record why it is acceptable;
  - :951 has a stale anchor comment.
- **site-reviewer pass:** the diagram scene at 400 px, the 🇬🇧 wrap in conditioning's Key focus, and a special_teams bold run.

### 🔴 HIGH PRIORITY — Podcast improvements (owner, 20 Oct 2026, after listening to both formats)

**Sequence (owner):** finish the content corrections first if that can be done fairly easily, so the podcasts are remade from fixed content. Then do this work, finish it, and move on.

- **(a) NotebookLM (Deep Dive) episodes say "the document".**
  - The owner wants the hosts to talk about the content itself, not refer to a source at all.
  - Failing that, they should refer to the website, never "the document" or pasted content. That phrasing sounds AI-generated, which the owner wants to avoid.
  - Work: change the NotebookLM customisation prompt in `.claude/skills/notebooklm-episode/`. Test on one or two episodes before regenerating all 39.
  - Option to try: give NotebookLM a source framed as a web page, rather than a pasted file.
  - **Owner refinement (20 Oct):** the episode should sound like two hosts discussing the TOPIC (e.g. how to play wing), not two hosts discussing a piece of content, a document or a website. Referring to the website is no longer an acceptable fallback. The prompt should forbid any reference to a source ("this document", "the guide", "the website", "the article", "the source", "it says"). The hosts should present the material as their own knowledge of the sport. Test: listen to a pilot episode and count source references; the target is zero.
- **(b) NotebookLM episodes: fewer rules.** Minimise rulebook talk. Mention a rule only where it is relevant, and avoid comparing the rulebooks. This mirrors what was already done for the Principles (Style B) episodes (project/podcast_style_b_script_standard.md §2, "far less rules"). Work: add this to the NotebookLM prompt, then regenerate.
- **(c) The Principles (ElevenLabs Style B) episodes are too content-dense.** The owner leans towards doing both of these:
  1. **A clearer "detailed principles" series.** Rework the existing episodes to introduce topics more gradually, explain each system more clearly, and say why it makes sense. They may be 25–50% longer.
  2. **A new "core principles" series.** Simpler, covering the core concepts relevant at every age and level, including U10/U12 and newer recreational players.
  - Work: write a script standard for each (extend podcast_style_b_script_standard.md), pilot one episode of each for the owner to hear, then roll out.
  - **Credits:** ElevenLabs credits are short until 16 Nov (memory: project_principles_remake_approved). Plan the synthesis around that.
  - **Site:** a third format means the site's two-format episode UI needs a third slot (memory: project_two_podcast_formats). That is a site change.
- **Open questions for the owner before piloting (c):**
  - Run both series, or one?
  - Should the core series cover all 39 pages, or a smaller set of core topics?
  - What should each be called on the site, Spotify and Apple, and as separate feeds or not?

### From the OR, P and R rounds (19–20 Oct; done work is in or_owner_rulings, p_residuals and r_consistency records)
- **Diagram captions** voice the full board-posture mechanics in forechecking_systems (chunks 039, 044). Run check_caption_hosts on posture captions, and check for a shared constant first.
- **Puck_handling crease-cover siblings:** check that summaries elsewhere (goaltender, rules_primer) state HC "both ways round" consistently.
- **U wave done 20 Oct** (record u_wave_2026-10-20.md; committed and pushed as 684326e).
- **playing_without_the_puck ~:1124:** "…its own Situation 5 E, ⚠️ **And only one…**": a comma followed by a capitalised "And", with a mid-sentence glyph (pre-existing; X gate).
- **equipment :173:** it quotes the WNIHL's "Full-face covering or half visor and mouth guard" for the mouthguard rule; heard alone it can sound like an age-less half-visor permission. Add the age line or rephrase (x1S, 20 Oct).
- **Y wave done 20 Oct** (record y_readability_2026-10-20.md; committed and pushed as 4c85bd0): offensive_zone_play, special_teams, faceoffs.
- **defensive_zone_coverage :577 (rules-verifier):** says IIHF 101.1 "allows pushing and leaning only…". Both v1.1 and 2026/27 open 101.1 with "'bodychecking' is allowed when there is a clear intention of playing the puck". The page is stricter than the rule (W3, xcS).
- **CARHA 32(d) sites deliberately left without it** (to avoid repeating it everywhere): defensive_zone_coverage 54(a)/66/49(a)/80(a) body sites, :557 facts at cap; zone_entries :405/:452/KT10/KT11/CM :1171/facts. Scope traps: 32(d) does not reach the 53(a) minor+GM, 53(b) is a 34(a) match, and 62(b)'s accidental high stick is excepted. Revisit only if the owner wants it at every site.
- **NIHL RoC link update:** the source is refreshed (20 Oct; the only change is the British Trained definition). Update the two content links, rules_primer :1163 and conditioning_and_recovery :695, to https://englandicehockey.com/wp-content/uploads/2026/09/NIHL-1-and-2-ROC-2026-2027-1.pdf (so).
- **HC 2026-28 republication changes** (README, 20 Oct; hc.txt is operative, and hc_2026-08-print.txt is the superseded August printing). Check whether any corpus claim depends on the old text for:
  - 4.11 penalty-shot equipment (blocker/trapper) and crease cover;
  - Interp 6 crossbar on the lacrosse move;
  - refusing to start play: penalty shot "in lieu of a Minor";
  - 8.7 clipping "at or below the hips";
  - 4.7(a) Interp 2;
  - 7.1(f);
  - 10.4 leaving the bench;
  - 10.6(a) Interp 5.
- **Readability programme complete (20 Oct):** all 39 pages passed (W4/W5 record w4_w5_readability_2026-10-20.md).
- **SW sweep in progress (20 Oct):** s1–s9 across the other pages. Fixes are in the working tree and under review; commit them as each review clears.
- **Save-then-cover siblings:** IIHF Situation 63.1 (a freeze must come "straight off" the save) and HC 10.2(a) (a goalkeeper freezing outside the crease) are missing outside goaltender. Layer-test defender, time_and_space, defensive_zone_coverage, special_teams and on_ice_communication (s1R).
- **USAH 601(d)(9) spectator limb:** check every sibling that prices pucks fired out of play after a stoppage (s8R).
- **"five-man" leftovers:** the offensive_zone_play.mjs:1239 caption "standard five-man setup", puck_support :491 and the OZP §3 heading (s5R).
- **md_to_speech:** "U12 is" read in lower case at sentence start; "Jr/Sr" read as "Jr or Sr" (winger :747).
- **special_teams :626 prevalence claim** ("commonly described as a current NHL default"): weak; reword to "one common option" or source it (s7).
- **Siblings of the W2 corrections:** run a layer test for each of these:
  - save-then-cover being "out in front" only, with Hockey Canada "points both ways" (goaltender.md, defender.md);
  - the medical-cover rule scoped to an EIH fixture (equipment, conditioning_and_recovery, getting_started);
  - the Elite League practice neck guard (equipment);
  - CARHA 32(d) "at least a one-game suspension" across the corpus. The owner ruling of 19 Oct is only partly propagated.
- **neutral_zone_systems KT8:** lost the options "a stretch forward behind a wall… or a dump you chase", which narrows a tactical KT. Consider restoring one option. Also :946 trailer quote drift (ADDED '.') (Z gate).
- **Z wave done 20 Oct** (record z_readability_2026-10-20.md; committed and pushed as f7686ae).
- **W2 wave done 20 Oct** (record w2_readability_2026-10-20.md; committed and pushed as b05098f). 18 of 39 pages done.
- **W3 wave done 20 Oct** (record w3_readability_2026-10-20.md; committed and pushed as 0bd425a). 24 of 39 pages done.
- **W4 wave dispatched 20 Oct ~19:35:** readability for shooting, risk_management, getting_started, team_play_and_culture, switching_positions, mental_game, passing_and_receiving and time_and_space (brief w4/brief.md). W5 will take how_to_watch_hockey, skating, scanning_and_anticipation, practice_and_development, puck_support_and_spacing, core_principles and reading_ice_hockey_diagrams.
- **Principles series pilot (pp1) dispatched 20 Oct:** a plan at project/podcast_principles_series_plan.md, plus Winger pilot scripts for Detailed and Core. Core is for a typical U12 player on full ice and assumes non-checking (owner, 20 Oct). Scripts go to the owner before any synthesis.
- **NotebookLM pilot (owner action):** the Winger pilot files are in `.podcast_queue/notebooklm/pilot_winger/`. The shared instructions.md was rebuilt with the new text on 20 Oct. Waiting for the owner to generate the episode. Then review it for source-reference count (target 0), rules time, the checking gate, board posture and injury response.
- **NotebookLM prompt rewrite done 20 Oct** (record notebooklm_prompt_rewrite_2026-10-20.md; committed as 8539ca2).
- **special_teams KT10:** "Screen with both feet clear of the red crease line" dropped "outside the paint". Align it with offensive_zone_play KT4 ("clear of the crease and its red line") (Y gate).
- **faceoffs :874 and the header (rules-verifier):** the header's "the 2026/27 edition ejects the centre" is now flat too (Y gate). "Under the IIHF 2026/27 book the first violation now removes your centre" sits beside :361's "premature movement … only gets a re-drop". 2026/27 76.7 still re-drops for moving early. Scope :874 to encroachment, contact and positioning (Y wave, y3S3; the error is harsh-direction).
- **faceoffs "two minutes" shorthand** at :48, :759 and :780: USA Hockey 402 pro-rates youth minors (1:00/1:30). Consider "a minor" (Y wave, y3S3; informational).
- **Siblings of the faceoff second-violation, moving-early and replacement-taker claims:** centre.md, rules_primer.md and uk_rules.md need a layer test for the Hockey Canada 6.5(a)/6.2(d) early-movement ejection, the second-violation tiers and the "contact is never free" wording (Y wave).
- **conditioning KT14:** the British red flags name three examples, but not blood-thinning therapy. That flag fires on a player who looks fine, and only CM :610 and the body carry it. Consider adding it (Z wave, z3S).
- **neutral_zone_systems facts:** the trapezoid facts line names only USA Hockey and Hockey Canada. No facts line carries CARHA 58(b) or 61(b) (Z wave, z1S).
- **check_readability:** also joins blockquote paragraphs separated by a bare `>` line (z2, z3). Fix it together with the Related-line row, between waves.
- **faceoffs USAH 602(a):** "plan on the match" at about :615 (facts), :628 (body) and :1234 (CM) has no suspension limb. Under the OR ruling it may appear at most twice per document, so decide which two sites carry "a likely multi-game suspension" (Y wave, y3).
- **check_readability:** counts a whole blockquote, including a long `**Related:**` nav line, as one paragraph, so page headers are inflated. Exclude Related lines, or measure blockquote paragraphs separately (Y wave, y3).
- **Site-reviewer pass due:** the equipment checklist bullets and the playing_without_the_puck Notes list paragraphs (X wave), the special_teams `#### Overtime in Britain` heading and the faceoffs split Britain box (Y wave), the neutral_zone_systems trapezoid passage (de-blockquoted into five paragraphs, about :563–:569) and the split conditioning_and_recovery blockquotes (Z wave), and rink_map's new list items "Moving into his path" / "Screening in the other books" (W2 wave), zone_entries ~:869 split "What it costs" paragraph with the mid-paragraph "⚠️ **a mandatory match**" run, and defensive_zone_coverage ~:147 split screen bullets (W3 wave). Also check the amber bar on a --bg-inset surface in both themes (3.08–3.09:1, thin), and the phone audio bar: in the flow before play, sticky after (sa, 20 Oct) have not been seen in a browser. Use headless Chrome, because the extension blocks localhost.
- **equipment :441:** the IIHF prints "opposing Player(s)" with a capital P, while the shared quotation uses NHL/PWHL casing. Note it if the quote is ever credited to the IIHF alone.
- **X wave done 20 Oct** (record x_readability_2026-10-20.md; committed and pushed as d93a658): readability pages 5–7 (equipment, playing_without_the_puck, game_management). Next by ranking: offensive_zone_play, special_teams, faceoffs, defending_the_rush, breakouts, center, defensive_zone_coverage, zone_entries, shooting, defender, risk_management, …
- **V wave done 20 Oct** (record v_readability_2026-10-20.md; committed and pushed as b06fb8e): readability pages 2–4. check_readability's sentence splitter is fixed (it now splits after closing quotes and before ⚠️/flags), so mean and longest sentence figures dropped on marker-heavy pages: body_contact's longest went from 169 to 107, rules_primer's from 132 to 69. Next by ranking: equipment, playing_without_the_puck, game_management, offensive_zone_play, special_teams, faceoffs, defending_the_rush, breakouts, …
- **Owner answers, 20 Oct:** both content rulings are applied (U wave). Readability: page by page, worst first.
  - Still open (no owner needed): search the IIHF Situation Handbooks for any puck-carrier vulnerability ruling.
### Also open from this session
- **Decided 20 Oct:** the phone-bar `audio-idle` hook stays in essentials-view.js. It loads synchronously in <head>, while audio-player.js is deferred, so moving it would shift the layout on first paint (sa).
- offensive_zone_play "five-man setup" sits next to "five-man rotation" (:285/:286).
