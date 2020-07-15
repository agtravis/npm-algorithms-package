'use strict';

module.exports = (x) => {
  // we can exit early if x is 1 or 0
  if (x === 0 || x === 1) return x;
  // loop starting at 2 until x, although this is arbitrary in any cases except 0 & 1
  // since a solution will always be found
  for (let i = 2; i <= x; ++i) {
    // if it matches perfectly, return the iterator
    if (i * i === x) return i;
    // if it is greater than x, then we need to return the previous iterator
    // since the route would be a decimal starting with the previous integer as the iterator
    if (i * i > x) return i - 1;
  }
};
