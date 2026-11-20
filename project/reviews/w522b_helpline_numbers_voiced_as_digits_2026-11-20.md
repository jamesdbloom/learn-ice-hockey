# W522(1): helpline numbers voiced as digits (20 November 2026)

## The defect

A W522 safety-reviewer read the rendered SSML of mental_game's crisis callout. `md_to_speech.py` voiced each helpline number as a cardinal:

| Printed | Voiced |
|---|---|
| Samaritans 116 123 | "one hundred and sixteen one hundred and twenty-three" |
| SHOUT's 85258 | "eighty-five thousand two hundred and fifty-eight" |
| HELLO's 50808 | "fifty thousand eight hundred and eight" |
| The US 988 | "nine hundred and eighty-eight" |
| Quebec's 535353 and 1-866-277-3553 | runs of hundreds and thousands |

A listener in crisis would have to turn each back into keypad digits.

"24/7." voiced as "twenty-four or seven". The `ratio-slash` look-ahead `(?![\w./"])` refused a following full stop, so a later rule read the solidus as "or".

The existing `emergency-number` rule covered only 999/911/112/101/111.

## The fix (`scripts/md_to_speech.py`)

**New `helpline-number` rule.** It voices digit by digit, grouped with commas. It is kept to an explicit list so a sample size or a rule number can never be caught:
- 116 123, 85258, 50808 and 535353;
- 988 only when followed by "Suicide";
- the North American toll-free shape `1-8NN-NNN-NNNN`, or `1-8NN-` followed by letters.

**`ratio-slash`.** The look-ahead is now `(?![\w/"]|\.\d)`, which allows a following full stop and still refuses a decimal.

**Self-test.** Six cases added:
- 24/7 with a full stop;
- 116 123;
- 85258;
- 988 before "Suicide";
- the Quebec toll-free number and its lettered form;
- the counter-example "pooling 988 effect sizes", which must stay a cardinal.

Result: 313 assertions, 0 failures. "a 50/50 puck." and 7/16" are unchanged.

## Verification

The whole corpus was rendered with HEAD's renderer (through a shadow tree in the scratchpad) and with the new one, and the outputs diffed.

- **One SSML chunk changed:** mental_game 035, the crisis callout. The manifests and index.json changed only in their character counts and hashes.
- **Every changed spoken line is a helpline number or "twenty-four seven".**
- **Nothing else in 41 documents and 2,669 chunks moved.**

## What this method could not have found

- **How the production TTS engine voices digit groups separated by commas.** SSML was read; no audio was heard.
- **Helplines the corpus does not yet print.** The rule is a list, and a new number must be added to it by hand.
