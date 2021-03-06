# Leet Code

Problems solved at [https://leetcode.com/](https://leetcode.com/)

Import the algorithms package as follows:

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure the Code Wars Algorithms:

```js
const { leetCode } = algorithms;
```

Then you can run the following functions:

### How Many Numbers are Smaller than the Current Number

[https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

```js
leetCode.smallerNumbersThanCurrent([8, 1, 2, 2, 3]); // === [4,0,1,1,3]
```

### Remove Duplicates

[https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

```js
leetCode.removeDuplicates(`abbaca`); // === `ca`
```

### Remove Duplicates II

[https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

```js
leetCode.removeDuplicatesII(`deeedbbcccbdaa`, 3); // === `aa`
```

### Base 7

[https://leetcode.com/problems/base-7/](https://leetcode.com/problems/base-7/)

```js
leetCode.base7(256); // === 514
```

### Subtract Product and Sum

[https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

```js
leetCode.subtractProductAndSum(234); // === 15
leetCode.subtractProductAndSumReduce(234); // === 15
```

### Replace Words

[https://leetcode.com/problems/replace-words/](https://leetcode.com/problems/replace-words/)

```js
leetCode.replaceWords(
  [`cat`, `bat`, `rat`],
  `the cattle was rattled by the battery`
); // === `the cat was rat by the bat`
```

### Best Time to Buy and Sell Stock

[https://leetcode.com/problems/best-time-to-buy-and-sell-stock/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

```js
leetCode.maxProfit([7, 1, 5, 3, 6, 4]); // === 5
leetCode.maxProfit([7, 6, 4, 3, 1]); // === 0
```

### Find All Numbers Disappeared in an Array

[https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

```js
leetCode.findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); // === [5, 6]
```

### N-Repeated Element in Size 2N Array

[https://leetcode.com/problems/n-repeated-element-in-size-2n-array/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/)

```js
leetCode.repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]); // === 5
```

### Two Sum

[https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

```js
leetCode.twoSum([2, 7, 11, 15], 9); // === [0, 1]
```

### Merge k Sorted Lists

[https://leetcode.com/problems/merge-k-sorted-lists/](https://leetcode.com/problems/merge-k-sorted-lists/)

NOTE: Needs [this code (maybe with minor edits to the list inputs to see effects)](./linkedList.md) to run successfully (`Linked List` set up)

```js
leetCode.mergeKSortedLists([linkedList1, linkedList2, linkedList3]);
```

### Last Stone Weight

[https://leetcode.com/problems/last-stone-weight/](https://leetcode.com/problems/last-stone-weight/)

```js
leetCode.lastStoneWeight([2, 7, 4, 1, 8, 1]); // === 1
```

### Defanging an IP Address

[https://leetcode.com/problems/defanging-an-ip-address/](https://leetcode.com/problems/defanging-an-ip-address/)

```js
leetCode.defangIPAddress(`255.100.50.0`); // === `255[.]100[.]50[.]0`
```

### Add Two Numbers Formed Each from Linked Lists, and Return a Linked List

[https://leetcode.com/problems/add-two-numbers/](https://leetcode.com/problems/add-two-numbers/)

NOTE: Needs [this code (maybe with minor edits to the list inputs to see effects)](./linkedList.md) to run successfully (`Linked List` set up)

```js
leetCode.addTwoNumbers(linkedList1, linkedList2);
```

### Fair Candy Swap

[https://leetcode.com/problems/fair-candy-swap/](https://leetcode.com/problems/fair-candy-swap/)

```js
leetCode.shareCandies([1, 2, 5], [2, 4]); // === [5, 4]
leetCode.shareCandiesWithSet([2, 4], [1, 2, 5]); // === [4, 5]
```

### Maximum Contiguous Sub Array

[https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)

```js
leetCode.maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // === 6
```

### Move Zeros to the End of an Array IN PLACE (No Copy)

[https://leetcode.com/problems/move-zeroes/](https://leetcode.com/problems/move-zeroes/)

```js
leetCode.moveZeros([0, 1, 0, 3, 12]); // === [1,3,12,0,0]
```

### Contains Duplicate

[https://leetcode.com/problems/contains-duplicate/](https://leetcode.com/problems/contains-duplicate/)

```js
leetCode.containsDuplicate([1, 2, 3, 1]); // === true
```

### Rotate Array

[https://leetcode.com/problems/rotate-array/](https://leetcode.com/problems/rotate-array/)

NOTE: This problem does not take a return statement on leetcode, I have added to make my functions work correctly

```js
leetCode.rotateArrayUnshift([1, 2, 3, 4, 5, 6, 7], 3); // === [5, 6, 7, 1, 2, 3, 4]
leetCode.rotateArrayLikeUnshift([1, 2, 3, 4, 5, 6, 7], 3); // === [5, 6, 7, 1, 2, 3, 4]
leetCode.rotateArrayWithCopy([1, 2, 3, 4, 5, 6, 7], 3); // === [5, 6, 7, 1, 2, 3, 4]
```

### Merge Two Sorted Lists

[https://leetcode.com/problems/merge-two-sorted-lists/](https://leetcode.com/problems/merge-two-sorted-lists/)

NOTE: Needs [this code (maybe with minor edits to the list inputs to see effects)](./linkedList.md) to run successfully (`Linked List` set up)

```js
leetCode.mergeTwoSortedLists(linkedList1, linkedList2);
```

### Remove the Nth Node from the End of a Linked List

[https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

NOTE: Needs [this code (maybe with minor edits to the list inputs to see effects)](./linkedList.md) to run successfully (`Linked List` set up)

```js
leetCode.removeNthFromEndNode(linkedList1, 2);
```

### Remove Duplicates from a Sorted Linked List

[https://leetcode.com/problems/remove-duplicates-from-sorted-list/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

NOTE: Needs [this code (maybe with minor edits to the list inputs to see effects)](./linkedList.md) to run successfully (`Linked List` set up)

```js
leetCode.removeDuplicatesFromSortedList(linkedList1);
```

### Does a Linked List Contain a Loop

[https://leetcode.com/problems/linked-list-cycle/](https://leetcode.com/problems/linked-list-cycle/)

```js
leetCode.linkedListCycle(loopedLinkList);
```

### Where do Two Linked Lists Intersect

[https://leetcode.com/problems/intersection-of-two-linked-lists/](https://leetcode.com/problems/intersection-of-two-linked-lists/)

```js
leetCode.intersectionTwoLinkedLists(linkedListA, linkedListB);
```

### Remove a Node that Matches an Input Value in a Linked List

[https://leetcode.com/problems/remove-linked-list-elements/](https://leetcode.com/problems/remove-linked-list-elements/)

```js
leetCode.removeLinkedListMatchedElement(linkedList, 6);
```

### Reverse a Linked List

[https://leetcode.com/problems/reverse-linked-list/](https://leetcode.com/problems/reverse-linked-list/)

```js
leetCode.reverseLinkedList(linkedList);
```

### Reverse a Number

[https://leetcode.com/problems/reverse-integer/](https://leetcode.com/problems/reverse-integer/)

```js
leetCode.reverseNumber(-123); // === -321;
```

### Palindrom Number

[https://leetcode.com/problems/palindrome-number/](https://leetcode.com/problems/palindrome-number/)

```js
leetCode.palindromeNumber(12321); // === true
```

### Roman Numeral to Integer Conversion

[https://leetcode.com/problems/roman-to-integer/](https://leetcode.com/problems/roman-to-integer/)

```js
leetCode.romanToInteger(`MCMXCIV`); // === 1994
```

### Implement Queue Using Stacks

[https://leetcode.com/problems/implement-queue-using-stacks](https://leetcode.com/problems/implement-queue-using-stacks)

```js
const MyQueue = leetCode.MyQueue;
const myQueue = new MyQueue();
console.log(`length`, myQueue.array.length, myQueue.empty());
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.log(`length`, myQueue.array.length, myQueue.empty());
console.log(`peek`, myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(`length`, myQueue.array.length, myQueue.empty());
```

### Search Insert Position

[https://leetcode.com/problems/search-insert-position](https://leetcode.com/problems/search-insert-position/)

```js
leetCode.searchInsertPosition([1, 3, 5, 6], 5); // === 2
```
