'use strict';

module.exports = (moves, x, y) => {
  // create alternative x & y coordinates to track movement
  // b === y
  let b = 0;
  // a === x
  let a = 0;
  // loop through the input array
  for (const direction of moves) {
    // switch on the direction in the moves array to determine which coordinate should incremement or decrement
    switch (direction) {
      case `NORTH`:
        ++b;
        break;
      case `SOUTH`:
        --b;
        break;
      case `EAST`:
        ++a;
        break;
      default:
        --a;
    }
  }
  // return the boolean value of the conditional statement
  return b === y && a === x;
};
