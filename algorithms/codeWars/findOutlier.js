'use strict';

module.exports = (integers) => {
  let evenOrOdd = {
    even: 0,
    odd: 0,
  };
  let arrayIsEven = true;
  for (let i = 0; i < 3; ++i) {
    if (integers[i] % 2 === 0) {
      evenOrOdd.even += 1;
    } else {
      evenOrOdd.odd += 1;
    }
  }
  if (evenOrOdd.odd > evenOrOdd.even) {
    arrayIsEven = false;
  }
  for (const integer of integers) {
    if (integer % 2 === 0 && arrayIsEven === false) {
      return integer;
    } else if (Math.abs(integer) % 2 === 1 && arrayIsEven === true) {
      return integer;
    }
  }
};
