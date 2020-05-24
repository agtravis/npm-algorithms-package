# Binary Search

Problems solved at [https://binarysearch.io/](https://binarysearch.io/)

Import the algorithms package as follows:

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure the Binary Search Algorithms:

```js
const { binarySearch } = algorithms;
```

Then you can run the following functions:

### Take 5 from each number in an array

```js
binarySearch.take5([8, 5, 0, 1, 2]); // === [3, 0, -5, -4, -3]
```

### Odd Number of Digits

Given a list of positive integers nums, return the number of integers that have odd number of digits.

```js
binarySearch.oddNumberOfDigits([1, 800, 2, 10, 3]); // === 4
```

### Mixed Sorting

Given a list of integers nums, sort the array such that:

All even numbers are sorted in increasing order
All odd numbers are sorted in decreasing order
The relative positions of the even and odd numbers remain the same

```js
binarySearch.mixedSorting([8, 13, 11, 90, -5, 4]); // === [4, 13, 11, 8, -5, 90]
```
