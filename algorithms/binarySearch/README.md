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

### Hip to be Square

Given a sorted list of integers, square the elements and give the output in sorted order.

Note: The integers can be 0 or negative.

```js
binarySearch.hipToBeSquare([-9, -2, 0, 2, 3]); // === [0, 4, 4, 9, 81]
```

### Acronym

Given a string s representing a phrase, return its acronym. Acronyms should be capitalized and should not include the word "and".

```js
binarySearch.acronym(`For your information`); // === `FYI`
```

### Uno Tree

Given a binary tree root, return whether all values in the tree are the same.
This needs a tree in order to work, use [this](./tree.md) as a simple tree

```js
binarySearch.unoTree(root); // === requires construction of a binary tree to run on
```

### FizzBuzz

Given an integer n, return a list of integers from 1 to n as strings except for multiples of 3 use “Fizz” instead of the integer and for the multiples of 5 use “Buzz”. For integers which are multiples of both 3 and 5 use “FizzBuzz”.

```js
binarySearch.fizzBuzz(15); // === ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

### Sorted Elements

Give a list of numbers nums, return the number of elements that are in the correct indices, if the list were to be sorted.

```js
binarySearch.sortedElements([1, 7, 3, 4, 10]); // === 2
```

### Interval Intersection

Given a two-dimensional integer list `intervals` representing unsorted inclusive intervals, return the intersection of the intervals.

```js
binarySearch.intervalIntersection([
  [1, 100],
  [10, 50],
  [15, 65],
]); // === [15, 50]
```

### Elephant Tree

Given a binary tree root, for each node adjust the value to be the sum of its pair of nodes values
This needs a tree in order to work, use [this](./tree.md) as a simple tree

```js
binarySearch.elephantTree(root); // === requires construction of a binary tree to run on
```

### Vowels and Consonants Sort

Given a lowercase alphabet string s, return a string with all the vowels of s in sorted order followed by all the consonants of s in sorted order.

```js
binarySearch.vowelsConsonantsSort(`decalin`); // === `aeicdln`
```

### Minimum Sort Cost

Given a list of integers nums, return the minimum cost of sorting the list in ascending or descending order. The cost is defined as the sum of differences between any element's old and new value.

```js
binarySearch.minimumSortCost([1, 4, 3]); // === 2
```

### Merge K Sorted Arrays

Given lists of sorted list of integers, merge them into one large sorted list.

```js
binarySearch.mergeKSortedArrays([
  [],
  [],
  [10, 12],
  [],
  [3, 3, 13],
  [3],
  [10],
  [0, 7],
]); // === [0, 3, 3, 3, 7, 10, 10, 12, 13]
```

### Sum of the Digits

Given a positive integer num, return the sum of its digits.

```js
binarySearch.sumOfTheDigits(123); // === 6
```

### Digital Sum

The same as above but without converting to a string

```js
binarySearch.digitalSum(123); // === 6
```

### String Sequence

Given strings s0, s1 and a positive integer n, return the nth term of the sequence A where:

    A[0] = s0
    A[1] = s1
    A[n] = A[n - 1] + A[n - 2] if n is even,
    otherwise A[n] = A[n - 2] + A[n - 1].

```js
binarySearch.stringSequence(`dx`, `a`, 4); // === `aadxadx`
```

### High Frequency

Given a list of integers `nums`, find the most frequently occurring element and return the number of occurrences of that element.

```js
binarySearch.highFrequency([1, 4, 1, 7, 1, 7, 1, 1]); // === 5
```

### Add Multiples of 3, 4, & 7

Given a positive integer `n`, return the sum of all numbers less than or equal to n that are multiples of 3, 4, or 7.

```js
binarySearch.addMultiplesOf347(10); // === 37
```

### Nth Fibonaccis

Write a function that takes an integer n and returns the nth Fibonacci number in the sequence.

```js
binarySearch.fibonacci(7); // === 13
binarySearch.fibonacciRecursion(7); // === 13
```

### Factorial Factory

Given an integer n less than or equal to 10, compute its factorial.

```js
binarySearch.factorialFactory(5); // === 120
binarySearch.factorialFactoryWithRecursion(5); // === 120
binarySearch.factorialFactoryWithReduce(5); // === 120
```

### Even Stevens

Given an integer list `nums`, swap every consecutive even integer with each other.

```js
binarySearch.evenStevens([2, 3, 4, 6, 8]); // === [4, 3, 2, 8, 6]
binarySearch.evenStevensConstantSpace([2, 3, 4, 6]); // === [4, 3, 2, 6]
```

### Median Minimization

Given a list of integers `nums`, split it into two lists of equal size where the absolute difference between each list's median is as small as possible and return this difference.

Note: `nums` is guaranteed to have an even length.

```js
binarySearch.medianMinimization([1, 9, 7, 4, 3, 6]); // === 2
```

### Merge Two Sorted Lists

Given two sorted lists of integers, merge them into one large sorted list.

```js
binarySearch.mergeTwoSortedLists([5, 10, 15], [3, 8, 9]); // === [3, 5, 8, 9, 10, 15]
```

### Remove Extraneous Spaces in a String

Given a string `s` representing a sentence, strip all irrelevant spaces. That is, remove all leading and trailing spaces as well as extraneous spaces between words.

```js
binarySearch.removeExtraneousSpaces(
  `     wise    as       an            owl         `
); // === `wise as an owl`
```

### Roomba

A Roomba robot is currently sitting in a cartesian plane at (0, 0). You are given a list of its moves that it will make, containing NORTH, SOUTH, WEST, and EAST.

Return whether after its moves it will end up in the coordinate (x, y).

```js
binarySearch.roomba([`NORTH`, `EAST`], 1, 1); // === true
```

### Length of a Linked List

Given a singly linked list, return its length. The linked list has fields `next` and `val`.
This needs a linked list in order to work, use [this](./linkedlist.md) as a simple linked list

```js
binarySearch.lengthOfALinkedList(list); // === requires construction of a linked list to run on
```

### Vigenère Cipher

You are given a lowercase alphabet string `text`, and another string `key`. Return a new string where every letter in `text[i]` is moved to the right with offset `key[i]`. Offset is equal to `key[i]`'s position in the alphabet (`A=0`, `B=1` etc.)

Note: If the letter overflows past `z`, it gets wrapped around the other side.

```js
binarySearch.vigenereCipher(`bcd`, `bbb`); // === `cde`
```

### Tacocat

Given a string `s`, return whether it is a palindrome. A palindrome is when the word is the same forwards and backwards.

For example, "tacocat" is a palindrome.

```js
binarySearch.tacocatDoublePointer(`tacocat`); // === true
binarySearch.tacocatSplitReverse(`burritocat`); // === false
```

### Largest Gap

Given a list of integers `nums`, return the largest difference of two consecutive integers in the sorted version of `nums`.

```js
binarySearch.largestGap([4, 1, 2, 8, 9, 10]); // === 4
```

### Consecutive Duplicates

Given a string `s`, consisting of "X" and "Y", delete the minimum number of characters such that there's no consecutive "X" and no consecutive "Y".

```js
binarySearch.consecutiveDuplicates(`YYYXYXX`); // === `YXYX`
```

### Numeronym

Given a string `s` with length greater than 2, return a new string where the first and last letter are the same, but the letters in between are replaced by their length.

```js
binarySearch.numeronym(`extracurricular`); // === `e13r`
```

### Narcissistic Number

Given an integer `n`, return whether it is equal to the sum of its own digits raised to the power of the number of digits.

```js
binarySearch.narcissisticNumber(153); // === true
```

### Galaxy Brain Scrum Master

You are given a two-dimensional list of integers `intervals` and an integer `time`. Each element contains `[start, end]` representing the times when a programmer worked.

Return the number of programmers that were working at `time`.

```js
binarySearch.galaxyBrainScrumMaster(
  [
    [1, 5],
    [3, 9],
    [4, 8],
    [10, 13],
  ],
  4
); // === 3
```

### Contains 3-6-9

Given an integer `n`, return a list with each number from 1 to n, except if it's a multiple of 3 or has a 3, 6, or 9 in the number, it should be the string `"clap"`.

```js
binarySearch.contains369(16); // === [`1`, `2`, `clap`, `4`, `5`, `clap`, `7`, `8`, `clap`, `10`, `11`, `clap`, `clap`, `14`, `clap`, `clap`]
```

### Sum of Two Numbers

Given a list of numbers `nums` and a number `k`, return whether any two numbers from the list add up to `k`. You may not use the same element twice.

```js
binarySearch.sumOfTwoNumbers([35, 8, 18, 3, 22], 11); // === true
```

### Run-Length Encoding

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

```js
binarySearch.runLengthEncoding(`AAAABBBCCDAA`); // === 4A3B2C1D2A
```

### Strictly Increasing or Decreasing

Given an list of numbers, determine whether the list is strictly increasing or strictly decreasing.

```js
binarySearch.strictlyIncOrDec([1, 2, 3, 4, 6]); // === true
binarySearch.strictlyIncOrDec([1, 2, 2, 4, 5]); // === false
```

### Largest by Double

Given a list of integers, return whether the largest number is bigger than the second-largest number by more than two times.

```js
binarySearch.largestByDouble([6, 3, 15]); // === true
```

### Generate Primes

Given a number `n`, return a list of all prime numbers smaller than or equal to `n` in ascending order.

```js
binarySearch.generatePrimes(10); // === [2, 3, 5, 7]
```

### A Unique String

Given a string `s`, determine whether it has all unique characters.

```js
binarySearch.uniqueString(`abcdefg`); // === true
```

### The Lonely Product

Given three numbers, `a`, `b`, and `c`, return their product, but if any two numbers are the same, they do not count.

```js
binarySearch.lonelyProduct(2, 3, 4); // === 24
binarySearch.lonelyProduct(2, 2, 4); // === 4
```

### Palindrome Integer

Given a non-negative integer `num`, return whether it is a palindrome.

```js
binarySearch.numberPalindrome(121); // === true
```

### Wolf Of Wall Street

Given a list of integers `prices` representing the stock prices of a company in chronological order, return the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it. You are not required to buy or sell the stock.

```js
binarySearch.wolfOfWallStreet([9, 11, 8, 5, 7, 10]); // === 5
```

### Recurring Character

Given a string, return the index of the first recurring character in it. If there are no recurring characters, return `-1`.

```js
binarySearch.recurringCharacter(`abcda`); // === 4
```

### Package Versioning

Given strings `older` and `newer`, each representing software package versions in the format `major.minor.patch`, return whether the `newer` version is actually newer than the `older`.

```js
binarySearch.packageVersioning(`11.1.2`, `11.1.3`); // === true
```

### Group Integers

Given a list of integers `nums`, return whether you can split the list into 1 or more groups where:

The size of each group is equal and larger than 1
All the integers in each group are the same.

```js
binarySearch.groupIntegers([2, 3, 5, 8, 3, 2, 5, 8]); // === true
```

### Unique Integers in an Array

Given a list of sorted integers `nums` return the number of unique integers in the list.

```js
binarySearch.uniqueIntegers([2, 2, 2, 3, 4, 6, 6]); // === 4
```
