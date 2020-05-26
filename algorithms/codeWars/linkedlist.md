This is a basic set up for a linked list, but it makes a loop. Key lines are commented:

```js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    let current;
    // a variable which will hold the place where the loop will start
    let loopStart;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
        // if the current node is 3
        if (current.element === 3) {
          // set this node to be the start of the loop
          loopStart = current;
        }
      }
      current.next = node;
      // if we are on the 13th node (the last by design)
      if (element === 13) {
        // set the next node to be the loop start, thus closing the circle
        node.next = loopStart;
      }
    }
    this.size++;
  }
}

const linkedList = new LinkedList();

for (let i = 0; i <= 13; ++i) {
  linkedList.add(i);
}
```
