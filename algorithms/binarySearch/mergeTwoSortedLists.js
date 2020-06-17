'use strict';

module.exports = (lst0, lst1) => {
  // initialize pointers for left & right input arrays
  let l = 0;
  let r = 0;
  // establish an output array
  const output = [];
  // helper function to finish off whichever array may have elements left
  const finish = (list, pointer) => {
    // loop starting wherever the pointer paused at through the end of the list
    for (let i = pointer; i < list.length; ++i) {
      // pushing each
      output.push(list[i]);
    }
  };
  // as long as neither pointer has reached the end of its shared array
  while (l < lst0.length && r < lst1.length) {
    // compare the two elements currently being pointed at in their respective arrays
    // whichever is lower, push that element, and increment that pointer
    if (lst0[l] < lst1[r]) {
      output.push(lst0[l]);
      ++l;
    } else {
      output.push(lst1[r]);
      ++r;
    }
  }
  // if the left list element currently being poined at exists
  // then finish the left list, otherwise finish the right list
  // there will always be at least one element left
  lst0[l] ? finish(lst0, l) : finish(lst1, r);
  // return
  return output;
};
