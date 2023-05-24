// Test Cases
const list1 = new LinkedList();
list1.insert(1);
list1.insert(3);
list1.insert(2);
const list2 = new LinkedList();
list2.insert(5);
list2.insert(9);
list2.insert(4);
const zippedList = zipLists(list1, list2);
// Expected: {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null
let current = zippedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}
// Additional Test Case
const list3 = new LinkedList();
list3.insert(1);
list3.insert(3);
const list4 = new LinkedList();
list4.insert(5);
list4.insert(9);
list4.insert(4);
const zippedList2 = zipLists(list3, list4);
// Expected: {1} -> {5} -> {3} -> {9} -> {4} -> null
let current2 = zippedList2.head;
while (current2) {
  console.log(current2.value);
  current2 = current2.next;
}
5:49
i think this is the index js answers
5:49
*code lol
5:50
'use strict';
const LinkedList = require('./LinkedList');
const zipLists = require('./zipLists');
describe('zipLists', () => {
  it('should zip two linked lists together', () => {
    // Create the first linked list: 1 -> 3 -> 2 -> null
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);
    // Create the second linked list: 5 -> 9 -> 4 -> null
    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);
    // Zip the two linked lists
    const result = zipLists(list1, list2);
    // Assert the zipped linked list is as expected: 1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null
    expect(result.toString()).toBe('1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null');
  });
  it('should handle empty linked lists', () => {
    // Create an empty linked list
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    // Zip the two linked lists
    const result = zipLists(list1, list2);
    // Assert the zipped linked list is empty
    expect(result.toString()).toBe('null');
  });
  // Add more test cases to cover different scenarios and edge cases
});
