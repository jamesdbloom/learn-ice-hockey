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
  caption:
    'The drill notation these diagrams use. Shape says the position — a circle is a ' +
    'forward, a triangle a defenceman — while fill says whose team it is, open for your own ' +
    'and solid for the opposition, which is this guide’s own convention rather than either ' +
    'published key’s. A goaltender is a bare G, and an X is a pylon and never a player.',

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
