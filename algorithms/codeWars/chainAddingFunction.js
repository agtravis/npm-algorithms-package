'use strict';
const chainAddingFunction = (arr) => {
  // helper function
  const chainAdd = (n) => {
    // an internal function that takes a parameter `y` and recursively adds that to the external parameter `n`
    const sum = (y) => chainAdd(n + y);
    // sets the `valueOf` the internal function to be a function that just returns the value of `n`
    // by setting this to be a function, when the next set of parentheses calls it, there is something to call
    // without it returning a function, the parentheses would just be trying to call a function on the first returned value
    // in this case, `n` becomes `y`
    // this is known as `currying`
    sum.valueOf = () => n;
    // what is actually returned to the function call is another function which when called returns the value of `n`
    return sum;
  };

  // constructing a string to be evaluated and called as javascript, in order to make the input easier
  let funcString = `chainAdd`;
  for (const num of arr) {
    funcString += `(${num})`;
  }
  funcString += `.valueOf()`;
  return eval(funcString);
};

module.exports = chainAddingFunction;
