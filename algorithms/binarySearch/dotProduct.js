'use strict';

const dotProductA = (a, b) => {
  const product = (one, two) => one * two;
  let output = 0;
  for (let i = 0; i < a.length; ++i) {
    output += product(a[i], b[i]);
  }
  return output;
};

const dotProductB = (a, b) =>
  a
    .map((num, index) => num * b[index])
    .reduce((total, current) => total + current, 0);

module.exports = {
  dotProductA,
  dotProductB,
};
