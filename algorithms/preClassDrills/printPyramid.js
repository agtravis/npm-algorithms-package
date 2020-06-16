'use strict';

module.exports = {
  printPyramid: (baseSize) => {
    // establish an output array
    const output = [];
    // loop down from the basesize decrementing by 2 each time
    for (let i = baseSize; i >= 1; i -= 2) {
      // push to the array `X` by the increment number
      // preceeded by enough characters to centralize the `X` characters (half the width of the amount of `X`s)
      output.push(` `.repeat((baseSize - i) / 2) + `X`.repeat(i));
    }
    // the return is the output array reverse and joined on a new line character
    const returnString = output.reverse().join(`\n`);
    // the function require a console log instead of a return
    console.log(returnString);
  },
  printPyramidWhile: (baseSize) => {
    let output = [];
    // set string up to be a string of `X`s repeated the length of the base input number
    let base = `X`.repeat(baseSize);
    // set up another string to equal the amount of space characters to precede with
    let side = ``;
    // loop until the base variable has no length, i.e. is an empty string
    while (base.length > 0) {
      // push the current version of the side and base strings concatenated
      output.push(side + base);
      // append the side with a space character
      side += ` `;
      // modify the base string to be the base string but starting after the 2nd character
      base = base.substring(2);
    }
    console.log(output.reverse().join(`\n`));
  },
  printPyramidForwards: (baseSize) => {
    // define a starting amount of space characters to equal half the basesize
    let initialSideSpaces = baseSize / 2;
    // decrementing by another 1 in the case it is an odd size
    if (baseSize % 2 === 0) {
      --initialSideSpaces;
    }
    // initialize an empty string
    let pyramid = ``;
    // loop
    for (
      // number of side spaces starts at the maximimum (the peak of the pyramid)
      let numSideSpaces = initialSideSpaces;
      // continue until zero
      numSideSpaces >= 0;
      // and decrement
      --numSideSpaces
    ) {
      // for each loop concatenate the current require amount of spaces
      let side = ` `.repeat(numSideSpaces);
      // x is a string containing `X` repeated double the amount of times of incoming space characters, subtracted from the base size
      // eventually the side string will be zero, thus `X` will repeat for the full basesize
      let x = `X`.repeat(baseSize - side.length * 2);
      // append the pyramid string with the concatenation
      pyramid += `${side}${x}\n`;
    }
    // log
    console.log(pyramid);
  },
};
