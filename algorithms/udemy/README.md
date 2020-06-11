# Udemy

These are the problems solved in the Udemy Course for interview practicing.

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure Udemy:

```js
const { udemy } = algorithms;
```

Then you can run the following functions:

### Find Common Items in Two arrays

```js
udemy.commonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'i']); // === false
udemy.commonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'c']); // === true
```

### Array has Pair that Sum to a Target

```js
udemy.hasPairWithSumSortDoublePointer([6, 4, 3, 2, 1, 7], 9); // === true
udemy.hasPairWithSumSet([6, 4, 3, 2, 1, 7], 9); // === true
```

### Reverse a String by Using a Scratch Built Array-Type Data Structure

See the code for the custom built array [here](./array.md)

```js
udemy.reverseStringScratchArray(`Hello, my name is George!`); // === `!egroeG si eman ym ,olleH`
```

### Merge Two Sorted Arrays

```js
udemy.mergeTwoSortedArraysDoublePointer(
  [4, 6, 30, 31, 32, 33, 34],
  [0, 3, 4, 31]
); // === [0,  3,  4,  4,  6, 30, 31, 31, 32, 33, 34]
udemy.mergeTwoSortedArraysReverseSortFirst(
  [0, 3, 4, 31],
  [4, 6, 30, 31, 32, 33, 34]
); // === [0,  3,  4,  4,  6, 30, 31, 31, 32, 33, 34]
udemy.mergeTwoSortedArraysSimpleWhile(
  [4, 6, 30, 31, 32, 33, 34],
  [0, 3, 4, 31]
); // === [0,  3,  4,  4,  6, 30, 31, 31, 32, 33, 34]
```
