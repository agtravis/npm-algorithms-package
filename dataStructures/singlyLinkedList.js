'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    if (val || val === 0) {
      this.head = {
        val: val,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    } else {
      this.length = 0;
    }
  }
  append(val) {
    const node = new Node(val);
    if (this.head) {
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.head = {
        val: val,
        next: null,
      };
      this.tail = this.head;
    }
    ++this.length;
    return this;
  }
  prepend(val) {
    const node = new Node(val);
    if (this.head) {
      node.next = this.head;
      this.head = node;
      ++this.length;
      return this;
    } else {
      this.append(val);
    }
  }
  traverseToIndex(index) {
    let i = 0;
    let currentNode = this.head;
    while (i < index) {
      currentNode = currentNode.next;
      ++i;
    }
    return currentNode;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else if (index >= this.length - 1) {
      let currentNode = this.traverseToIndex(this.length - 2);
      currentNode.next = null;
      this.tail = currentNode;
    } else {
      let currentNode = this.traverseToIndex(index - 1);
      currentNode.next = currentNode.next.next;
    }
    --this.length;
  }
  insert(index, val) {
    if (index === 0) {
      this.prepend(val);
    } else if (index > this.length) {
      this.insert(this.length, val);
    } else if (this.head) {
      const node = new Node(val);
      let currentNode = this.traverseToIndex(index - 1);
      node.next = currentNode.next;
      currentNode.next = node;
      ++this.length;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
    } else {
      throw new Error(`Cannot insert at this index - there is no head`);
    }
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }
    this.head
      ? console.log(
          `HEAD: ${this.head.val}, TAIL: ${this.tail.val}, LENGTH: ${this.length}`
        )
      : console.log(`List has no data yet`);
    console.log(array.join(` --> `));
  }
}

module.exports = LinkedList;
