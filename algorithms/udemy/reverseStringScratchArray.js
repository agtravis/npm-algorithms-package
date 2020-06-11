'use strict';

const reverseStringScratchArray = (str) => {
  // a class to construct a new array with
  class MyArray {
    // constructor initializes an empty object with zero length and an empty data object
    constructor() {
      this.length = 0;
      this.data = {};
    }
    // this method simply returns the property value at the requested index O(1)
    get(index) {
      return this.data[index];
    }
    // this takes a new item O(1)
    push(item) {
      // takes the current length and makes a new property with the length as the name and the value as the new item
      this.data[this.length] = item;
      // increments the length
      ++this.length;
      // returns the length
      return this.length;
    }
    // called when removing the last item O(1)
    pop() {
      // saves the last item to a new variable
      const lastItem = this.data[this.length - 1];
      // deletes the last item
      delete this.data[this.length - 1];
      // decrements the length property
      --this.length;
      // returns the last item to the function call
      return lastItem;
    }
    // to delete any item, takes the index O(n)
    delete(index) {
      // save the item at the index property as a variable
      const item = this.data[index];
      // call the shiftItems method on the index
      this.shiftItems(index);
      // decrements the length property
      --this.length;
      // returns the item
      return item;
    }
    // helper for the above delete method
    shiftItems(index) {
      // loops through the items remaining starting at the index provided, until the second to last item
      for (let i = index; i < this.length - 1; ++i) {
        // for each one, reassigns the property to be the following property
        this.data[i] = this.data[i + 1];
      }
      // and finally deletes the last item
      delete this.data[this.length - 1];
    }
  }

  // create a new instance of the scratch array
  const newArray = new MyArray();

  // loop through the input
  for (const letter of str) {
    // push each letter into our custom array object
    newArray.push(letter);
  }
  // establish empty output string
  let output = ``;
  // loop until the zero index property no longer exists through deletion
  while (newArray.data[0]) {
    // append the returned value to the output string while deleting the last item in the custom array
    output += newArray.pop();
  }
  // return the output string
  return output;
};

module.exports = reverseStringScratchArray;
