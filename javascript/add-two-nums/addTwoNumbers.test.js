// Definition for singly-linked list node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(l1, l2) {
  let node = new ListNode(0); // Node for the result linked list
  let curr = node; // Pointer to the current node in the result linked list
  let carry = 0; // Carry value for addition

  while (l1 || l2) {
    // Get the values of the current nodes (or 0 if node is null)
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    // Calculate the sum of current digits and carry
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // Calculate the carry
    let digit = sum % 10; // Calculate the current digit

    // Create a new node for the result linked list
    curr.next = new ListNode(digit);
    curr = curr.next;

    // Move to the next nodes in the input linked lists
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // If there's a remaining carry, add it as a new node
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return node.next; // Return the head of the result linked list
}

// Test cases
describe('addTwoNumbers', () => {
  test('returns the sum of two single-digit numbers', () => {
    let l1 = new ListNode(2);
    let l2 = new ListNode(3);
    let result = addTwoNumbers(l1, l2);
    expect(result.val).toEqual(5);
    expect(result.next).toBeNull();
  });

  test('returns the sum of two multi-digit numbers', () => {
    let l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);

    let l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    let result = addTwoNumbers(l1, l2);
    expect(result.val).toEqual(7);
    expect(result.next.val).toEqual(0);
    expect(result.next.next.val).toEqual(8);
    expect(result.next.next.next).toBeNull();
  });

  test('handles carry values', () => {
    let l1 = new ListNode(9);
    l1.next = new ListNode(9);
    l1.next.next = new ListNode(9);

    let l2 = new ListNode(1);

    let result = addTwoNumbers(l1, l2);
    expect(result.val).toEqual(0);
    expect(result.next.val).toEqual(0);
    expect(result.next.next.val).toEqual(0);
    expect(result.next.next.next.val).toEqual(1);
    expect(result.next.next.next.next).toBeNull();
  });
});
