Here is some demo code for setting up and using linked list (specifically for k-way merge sort on sorted input linked lists)

```js
class Node {
  constructor(element) {
    this.val = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.val = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);

    let current;
    if (this.val === null) {
      this.val = node;
    } else {
      current = this.val;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();
let linkedList3 = new LinkedList();

const list1 = [1, 4, 5];
const list2 = [1, 3, 4];
const list3 = [2, 6];

for (const num of list1) {
  linkedList1.add(num);
}
for (const num of list2) {
  linkedList2.add(num);
}
for (const num of list3) {
  linkedList3.add(num);
}
```
