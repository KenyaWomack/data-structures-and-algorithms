'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}
function zipLists(list1, list2) {
  const newList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  while (current1 || current2) {
    if (current1) {
      newList.insert(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      newList.insert(current2.value);
      current2 = current2.next;
    }
  }
  return newList;
}
