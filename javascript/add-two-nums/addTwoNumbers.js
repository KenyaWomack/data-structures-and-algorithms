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

// Example usage
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let result = addTwoNumbers(l1, l2);
console.log(result); // Output: ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }
