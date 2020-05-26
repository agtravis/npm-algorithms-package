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
    let loopStart;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
        if (current.element === 3) {
          loopStart = current;
        }
      }
      current.next = node;
      if (element === 13) {
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
