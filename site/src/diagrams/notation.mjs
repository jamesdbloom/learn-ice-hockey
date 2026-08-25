/**
 * The notation key, as a registered diagram.
 *
 * It is rendered by `legendSvg`, which reads the same NOTATION table `playSvg`
 * draws from — so the picture explaining the symbols cannot disagree with the
 * symbols. That was the whole reason for removing the per-diagram legend: a key
 * maintained separately from its renderer is a second place for the notation to
 * be wrong, and this corpus has already had to rewrite its notation once wholesale.
 */
export default [{
  id: 'notation-key',
  kind: 'legend',
  // The document this key is embedded in and must agree with. It was
  // rink_map_and_glossary.md, which is the owner of the *coordinates* and contains
  // the string "notation" zero times — following the field sent a reviewer to a
  // document that says nothing about any of these symbols.
  owner: 'content/reading-diagrams/reading_ice_hockey_diagrams.md',
  width: 900,
  caption: 'The drill notation used by every diagram here. Lines: a plain arrow is ' +
    'forward skating; a long smooth wave is skate and stickhandle; a row of separate ' +
    'overlapping arches is backward skating — a C-cut turned on its side and repeated, ' +
    'which is how it is skated; a sharp zigzag ' +
    'is a backward crossover; a ' +
    'dashed arrow is a pass; a double line is a shot; a row of short bars across a line ' +
    'is lateral crossovers, the one line symbol here taken from the Hockey Eastern ' +
    'Ontario sheet because the IIHF key has none; a line ending in two bars terminates the route ' +
    'and means arrive and stop rather than continue through; a pair of slashes on their own ' +
    'is a stop; a curve turning back on itself is a pivot; a line with a marker part way ' +
    'along is dropping the puck — this guide\'s own version of that mark, since both keys ' +
    'begin it with a wave for the carry and these diagrams draw only the drop; a single arc at the end of a line is blocking or ' +
    'screening. Players: shape says the ' +
    'position — a circle is a forward and a triangle a defenceman — while fill says whose ' +
    'team it is, open for your own and solid for the opposition — reading fill as the team ' +
    'is this guide\'s own convention rather than the key\'s, which prints the pair without ' +
    'saying what it is for. A goaltender is a bare G ' +
    'with no shape around it, and an X is a pylon and never a player. The letters inside a ' +
    'glyph are the roles the surrounding text uses, not fixed positions. The puck is a small ' +
    'solid dot, about a third the width of a player; neither key publishes a mark for a ' +
    'single puck, so that one is this guide\'s own.',
  describe: 'A two-column key of line styles with their names, then rows showing the ' +
    'two player channels. Shape carries the position: a circle is a forward, a triangle a ' +
    'defenceman, which is the International Drill Symbols axis. Fill carries identity: an ' +
    'open glyph is the reader\'s own team, a solid one the opposition — that reading is this ' +
    'guide\'s own, not the key\'s. A last row shows the puck, a small solid dot about a third ' +
    'the width of a player. So a winger is an ' +
    'open circle whether attacking or backchecking, because the shape follows the player ' +
    'and not the moment. A goaltender is a bare letter G, and an X is a pylon and is never ' +
    'a player.',

}];
