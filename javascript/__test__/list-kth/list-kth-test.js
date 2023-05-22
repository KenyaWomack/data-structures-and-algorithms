const LinkedList = require('./linked-list'); // Assuming the code is in a file named linked-list.js

describe('LinkedList', () => {
  describe('kthFromEnd', () => {
    it('should return the value of the node that is k places from the tail', () => {
      const list = new LinkedList();
      list.insertAtEnd(10);
      list.insertAtEnd(20);
      list.insertAtEnd(30);
      list.insertAtEnd(40);
      list.insertAtEnd(50);

      expect(list.kthFromEnd(0)).toBe(50); // The last node
      expect(list.kthFromEnd(2)).toBe(30); // 2nd node from the tail
      expect(list.kthFromEnd(4)).toBe(10); // The first node
    });

    it('should throw an error for an empty list', () => {
      const list = new LinkedList();

      expect(() => list.kthFromEnd(0)).toThrow('Linked List is empty.');
    });

    it('should throw an error for an invalid value of k', () => {
      const list = new LinkedList();
      list.insertAtEnd(10);
      list.insertAtEnd(20);

      expect(() => list.kthFromEnd(5)).toThrow('Invalid value of k: 5. The list has fewer than k nodes.');
    });
  });
});
