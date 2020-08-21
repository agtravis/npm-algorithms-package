'use strict';

module.exports = (s) => {
  // these are boolean flags denoting if we have seen certain characters that will trigger value changes for other characters
  let seenDorM = false;
  let seenLorC = false;
  let seenVorX = false;
  // set a running total at zero
  let total = 0;
  // loop backwards through the input string
  for (let i = s.length - 1; i >= 0; --i) {
    // run a switch statement on each character
    switch (s.charAt(i)) {
      // if it is I then we will add 1 unless it precedes a V or X in which case it becomes negative
      case `I`:
        total += seenVorX ? -1 : 1;
        break;
      case `V`:
        // this character triggers a flag to be raised, then adds its value to the total
        seenVorX = true;
        total += 5;
        break;
      case `X`:
        seenVorX = true;
        total += seenLorC ? -10 : 10;
        break;
      case `L`:
        seenLorC = true;
        total += 50;
        break;
      case `C`:
        seenLorC = true;
        total += seenDorM ? -100 : 100;
        break;
      case `D`:
        seenDorM = true;
        total += 500;
        break;
      default:
        seenDorM = true;
        total += 1000;
    }
  }
  // return the accumulated total
  return total;
};
