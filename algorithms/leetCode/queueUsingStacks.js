'use strict';

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.array = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.array.unshift(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.array.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.array.length === 0;
};

// const myQueue = new MyQueue();
// console.log(`length`, myQueue.array.length, myQueue.empty());
// myQueue.push(1);
// myQueue.push(2);
// myQueue.push(3);
// console.log(`length`, myQueue.array.length, myQueue.empty());
// console.log(`peek`, myQueue.peek());
// console.log(myQueue.pop());
// console.log(myQueue.pop());
// console.log(myQueue.pop());
// console.log(`length`, myQueue.array.length, myQueue.empty());

module.exports = MyQueue;
