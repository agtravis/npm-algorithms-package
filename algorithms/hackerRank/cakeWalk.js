'use strict';

module.exports = (calorie) => {
  // return the input array
  return (
    calorie
      // first sorted in descending order
      .sort((a, b) => (b > a ? 1 : -1))
      // then map it to a new array where each element is 2^index * the cupcake calorie count
      // this is because the cupcake with the highest calories will be multiplied to the power of 0
      // and the lowest will be left with the highest power
      .map((cupcake, index) => Math.pow(2, index) * cupcake)
      // the solution requires the total sum reduction of that map
      .reduce((total, current) => total + current, 0)
  );
};
