'use strict';
const { Queue } = require('./index');

describe('Stack', () => {
  // Existing test cases for the Stack class

  describe('Queue', () => {
    it('Can successfully enqueue multiple values into a queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.front.value).toEqual(1);
      expect(queue.front.next.value).toEqual(2);
      expect(queue.front.next.next.value).toEqual(3);
      expect(queue.front.next.next.next).toBeNull();
      expect(queue.back.value).toEqual(3);
    });

    it('Can successfully dequeue out of a queue the expected value', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.front.value).toEqual(2);
      expect(queue.front.next.value).toEqual(3);
      expect(queue.front.next.next).toBeNull();
      expect(queue.back.value).toEqual(3);
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.peek()).toEqual(1);
      expect(queue.front.value).toEqual(1);
      expect(queue.front.next.value).toEqual(2);
      expect(queue.front.next.next.value).toEqual(3);
      expect(queue.front.next.next.next).toBeNull();
      expect(queue.back.value).toEqual(3);
    });

    it('Can successfully empty a queue after multiple dequeues', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.front).toBeNull();
      expect(queue.back).toBeNull();
      expect(queue.isEmpty()).toBe(true);
    });

    it('Can successfully instantiate an empty queue', () => {
      let queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
      expect(queue.front).toBeNull();
      expect(queue.back).toBeNull();
    });

    it('Calling dequeue on empty queue raises an exception', () => {
      let queue = new Queue();
      expect(() => {
        queue.dequeue();
      }).toThrowError('Queue is empty. Cannot dequeue from an empty queue.');
    });

    it('Calling peek on empty queue raises an exception', () => {
      expect(() => {
        let queue = new Queue();
        queue.peek();
      }).toThrowError('Queue is empty. Cannot peek an empty queue.');
    });
  });
});
