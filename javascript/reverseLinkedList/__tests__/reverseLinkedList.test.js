const reverseLinkedList = require('../index.js');

describe('reverseLinkedList', () => {
  test('should reverse a linked list', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4
    const node1 = { value: 1, next: null };
    const node2 = { value: 2, next: null };
    const node3 = { value: 3, next: null };
    const node4 = { value: 4, next: null };

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    // Reverse the linked list
    const reversedList = reverseLinkedList(node1);

    // Verify the reversed list: 4 -> 3 -> 2 -> 1
    expect(reversedList.value).toBe(4);
    expect(reversedList.next.value).toBe(3);
    expect(reversedList.next.next.value).toBe(2);
    expect(reversedList.next.next.next.value).toBe(1);
    expect(reversedList.next.next.next.next).toBeNull();
  });

  test('should return null for an empty linked list', () => {
    // Create an empty linked list
    const emptyList = null;

    // Reverse the empty list
    const reversedList = reverseLinkedList(emptyList);

    // Verify that the reversed list is also null
    expect(reversedList).toBeNull();
  });
});
