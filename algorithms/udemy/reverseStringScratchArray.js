'use strict';

const reverseStringScratchArray = (str) => {
  class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }

    get(index) {
      return this.data[index];
    }

    push(item) {
      this.data[this.length] = item;
      ++this.length;
      return this.length;
    }

    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      --this.length;
      return lastItem;
    }

    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
      --this.length;
      return item;
    }

    shiftItems(index) {
      for (let i = index; i < this.length - 1; ++i) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
    }
  }

  const newArray = new MyArray();

  for (const letter of str) {
    newArray.push(letter);
  }
  let output = ``;
  while (newArray.data[0]) {
    output += newArray.pop();
  }
  return output;
};

module.exports = reverseStringScratchArray;
