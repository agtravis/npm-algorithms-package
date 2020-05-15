'use strict';

/**
 * Returns the sum of num1 and num2
 * @param {number} num1
 * @param {number} num2
 * @returns {number} num1 + num2
 */

const add = (num1, num2) => {
  return num1 + num2;
};

/**
 * Returns the difference of num1 minus num2
 * @param {number} num1
 * @param {number} num2
 * @returns {number} num1 - num2
 */

const subtract = (num1, num2) => {
  return num1 - num2;
};

/**
 * Returns the product of num1 and num2
 * @param {number} num1
 * @param {number} num2
 * @returns {number} num1 * num2
 */

const multiply = (num1, num2) => {
  return num1 * num2;
};

/**
 * Returns the quotient of num1 by num2
 * @param {number} num1
 * @param {number} num2
 * @returns {number} num1 / num2
 */

const divide = (num1, num2) => {
  return num1 / num2;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
