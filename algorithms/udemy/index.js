'use strict';

const commonItems = require(`./commonItems`);
const {
  hasPairWithSumSortDoublePointer,
  hasPairWithSumSet,
} = require(`./hasPairWithSum`);
const reverseStringScratchArray = require(`./reverseStringScratchArray`);
const {
  mergeTwoSortedArraysDoublePointer,
  mergeTwoSortedArraysReverseSortFirst,
  mergeTwoSortedArraysSimpleWhile,
} = require(`./mergeTwoSortedArrays`);
const firstRecurringDuplicate = require(`./firstRecurringDuplicate`);

module.exports = {
  commonItems,
  hasPairWithSumSortDoublePointer,
  hasPairWithSumSet,
  reverseStringScratchArray,
  mergeTwoSortedArraysDoublePointer,
  mergeTwoSortedArraysReverseSortFirst,
  mergeTwoSortedArraysSimpleWhile,
  firstRecurringDuplicate,
};
