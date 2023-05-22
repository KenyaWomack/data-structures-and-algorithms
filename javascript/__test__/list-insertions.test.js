// Create a new linked list
const myList = new LinkedList();
// Test append method
myList.append(1);
myList.append(3);
myList.append(2);
console.log("Initial List:");
myList.display();
// Output: 1 3 2
// Test insertBefore method
myList.insertBefore(3, 4);
console.log("After insertBefore:");
myList.display();
// Output: 1 4 3 2
myList.insertBefore(5, 6); // Insert before non-existent value
console.log("After insertBefore non-existent value:");
myList.display();
// Output: 1 4 3 2
myList.insertBefore(1, 0); // Insert before head
console.log("After insertBefore head:");
myList.display();
// Output: 0 1 4 3 2
// Test insertAfter method
myList.insertAfter(3, 5);
console.log("After insertAfter:");
myList.display();
// Output: 0 1 4 3 5 2
myList.insertAfter(2, 6); // Insert after non-existent value
console.log("After insertAfter non-existent value:");
myList.display();
// Output: 0 1 4 3 5 2
myList.insertAfter(2, 7); // Insert after tail
console.log("After insertAfter tail:");
myList.display();
// Output: 0 1 4 3 5 2 7
