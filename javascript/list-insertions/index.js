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

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      // If the list is empty, insert the new node as the head
      this.head = newNode;
      return;
    }

    if (this.head.value === value) {
      // If the value to insert before is the head, update the head reference
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      // If the list is empty, insert the new node as the head
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
const myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(3);
myLinkedList.append(2);

console.log("Initial List:");
myLinkedList.display();

myLinkedList.append(5);
console.log("After append:");
myLinkedList.display();

myLinkedList.insertBefore(3, 4);
console.log("After insertBefore:");
myLinkedList.display();

myLinkedList.insertAfter(1, 0);
console.log("After insertAfter:");
myLinkedList.display();
