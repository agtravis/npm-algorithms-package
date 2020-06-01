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
