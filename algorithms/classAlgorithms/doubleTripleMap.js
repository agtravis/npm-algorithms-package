'use strict';

// this one line returns a map of an input array, each element is conditionally
// checked to establish if it is even or not, and assigned a calculation to be
// returned to the return
module.exports = (arr) => arr.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
