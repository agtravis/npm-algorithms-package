'use strict';

module.exports = (x0, y0, x1, y1, k) => {
  // for both x and y
  // subtract the secondary from the primary and square it
  // then find the square root
  // add the two results of x & y together and compare to the input k
  return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)) < k
    ? true
    : false;
};

// the euclidean distance is how to derive the distance between 2 points using the coordinates, and ultimately uses the pythagorean theorum
