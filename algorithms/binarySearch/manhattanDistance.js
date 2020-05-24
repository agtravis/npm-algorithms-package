'use strict';

module.exports = (x0, y0, x1, y1) => {
  // a helper function to calculate the absolute difference between two numbers
  const absDif = (zero, one) => {
    return Math.abs(zero - one);
  };
  // returns the sum of those two absolute differences
  return absDif(x0, x1) + absDif(y0, y1);
};

// the same function refactored as a class

class ManhattanDistance {
  solve(x0, y0, x1, y1) {
    return this.absDif(x0, x1) + this.absDif(y0, y1);
  }

  absDif = (zero, one) => {
    return Math.abs(zero - one);
  };
}

const manhattanDistance = new ManhattanDistance();

// console.log(manhattanDistance.solve(0, 1, 3, 2));
