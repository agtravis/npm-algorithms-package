'use strict';

module.exports = (n, m) => {
  // return the area of the board (n multiplied by m), divided by 2, and removing any split dominoes (decimals)
  return Math.floor((n * m) / 2);
};
