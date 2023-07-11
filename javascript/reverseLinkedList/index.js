function reverseLinkedList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

module.exports = reverseLinkedList;

// Example usage
const node1 = { value: 1, next: null };
const node2 = { value: 2, next: null };
const node3 = { value: 3, next: null };
const node4 = { value: 4, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

const reversedList = reverseLinkedList(node1);
console.log(reversedList);
