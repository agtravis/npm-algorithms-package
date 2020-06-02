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

### Flatten Lists

Given a list of lists of integers, flatten the elements into a single list and return it.

```js
binarySearch.flattenLists([
  [1, 2],
  [3, 4, 5],
]); // === [1, 2, 3, 4, 5]
```

### Manhattan Distance

Given integers x0, y0, x1 and y1 return the sum of the absolute differences of their Cartesian coordinates (x0, y0) and (x1, y1).

```js
binarySearch.manhattanDistance(0, 1, 3, 2); // === 4
```

### Dot Product

The dot product of two lists is the sum of the products of their corresponding entries.

For example, given a = [1, 2, 3] and b = [4, 5, 6], the dot product is 32, since (1 × 4) + (2 × 5) + (3 × 6) = 32.

Given two lists of integers, compute their dot product.

```js
binarySearch.dotProductA([1, 2, 3], [4, 5, 6]); // === 32
binarySearch.dotProductB([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]); // === 217
```

### Multiplication Table

Given an integer n, return a two dimensional matrix representing an n by n multiplication table. For example, given n=3, return `[[1, 2, 3], [2, 4, 6], [3, 6, 9]]`

```js
binarySearch.multiplicationTable(5);
/*
[[1, 2, 3, 4, 5],
[2, 4, 6, 8, 10],
[3, 6, 9, 12, 15],
[4, 8, 12, 16, 20],
[5, 10, 15, 20, 25]]
*/
```

### Reverse Words

Given a string of words delimited by spaces, reverse the order of words. For example, given "hello there my friend", return "friend my there hello".

```js
binarySearch.reverseWordsWithReverse(`hello there my friend`); // === `friend my there hello`
binarySearch.reverseWordsWithoutReverse(`hello there my friend`); // === `friend my there hello`
```

### Reverse a List

Given a list of integers `nums`, return the reverse of the list.

```js
binarySearch.reverseAList([1, 5, 9, 4]); // === [4, 9, 5, 1]
```

### Number of Bits

Given an integer n greater than or equal to 0, return the number of 1 bits in n.

```js
binarySearch.numberOfBits(2); // === 1 (2 === 10)
binarySearch.numberOfBits(3); // === 2 (3 === 11)
```

### Euclidean Distance

Given integers x0, y0, x1, y1, and k, return whether the euclidean distance between (x0, y0) and (x1, y1) is less than k.

```js
binarySearch.euclideanDistance(0, 1, 3, 5, 6); // === true
```

### Atbash Cipher

You are given a lowercase alphabet string text. Return a new string where every character in text is mapped to its reverse in the alphabet, so that a becomes z, b becomes y, c becomes x, and so on.

```js
binarySearch.atbashCipherWithAlphabet(`abc`); // === `zyx`
binarySearch.atbashCipherWithAscii(`abc`); // === `zyx`
```

### Stairway To Heaven

Given a list of integers nums, for each element, add its index to its value and return the new list.

For example, given the list [5, 3, 7], return [5, 4, 9] since it's [5 + 0, 3 + 1, 7 + 2].

```js
binarySearch.stairwayToHeaven([5, 3, 7]); // === [5, 4, 9]
```

### Oddly Specific

Given an integer n (where n ≤ 1000), return the sum of the first n positive odd integers.

```js
binarySearch.oddlySpecific(5); // === 25
```

### Flip Case

Given an alphabetical string s, flip every uppercase character to lowercase and every lowercase character to uppercase.

```js
binarySearch.flipCaseWithAscii(`binarySEARCH`); // === `BINARYsearch`
binarySearch.flipCaseWithCaseChange(`binarySEARCH`); // === `BINARYsearch`
```

### Pig Latin

Given a string s, return a new string where for every word the first character is moved the end with the suffix "ay" added.

```js
binarySearch.pigLatin(`hello world`); // === ellohay orldway
```

### Pigeon Hole

You are given an array of length n + 1 picked from the range 1, 2, ..., n. By the pigeonhole principle,
there must be a duplicate. Find and return it. There is guaranteed to be exactly one duplicate.

Bonus: Can you do this in linear time and constant space?

```js
binarySearch.pigeonHole([1, 2, 3, 1]); // === 1
```

### Leap Year

Given an integer n, return whether it is a leap year. A leap year is:

A year that is divisible by 4.
Except for years that are also divisible by 100.
Unless that year is also divisible by 400.

```js
binarySearch.leapYear(1900); // === false
binarySearch.leapYear(2000); // === true
binarySearch.leapYear(1996); // === true
binarySearch.leapYear(1901); // === false
```

### Long Distance

Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element
in the original input array.

```js
binarySearch.longDistance([3, 4, 9, 6, 1]); // === [1, 1, 2, 1, 0]
```

### Even Numbers

Given a 2-dimensional list `matrix`, return the number of even numbers in the matrix.

```js
binarySearch.evenNumbers([
  [1, 2, 8],
  [3, 5, 5],
  [4, 6, 6],
]); // === 5
```

### Collatz Sequence

Given a positve integer n, find the length of its Collatz sequence. Collatz sequence is generated sequentially where:

n = n / 2 if n is even
n = 3 \* n + 1 if n is odd
And the sequence ends if n = 1

```js
binarySearch.collatzSequence(11); // === 15
```
