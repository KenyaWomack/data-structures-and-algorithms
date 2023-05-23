# Challenge Title:  Array-Binary-Search

Write the following method for the Linked List class:

kth from end
argument: a number, k, as a parameter.
Return the node’s value that is k places from the tail of the linked list.
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process

![White Board - lab-07](/__test__/list-kth/lab07whiteboard.png)

## Approach & Efficiency

Start at the head of the linked list.

Initialize two pointers, slowPtr and fastPtr, both pointing to the head.

Move the fastPtr pointer k steps ahead in the linked list.

If the fastPtr pointer reaches the end of the linked list (i.e., becomes null), it means the length of the linked list is less than k. In this case, throw an error indicating that the value of k is invalid.

If the fastPtr pointer is not null, move both the slowPtr and fastPtr pointers one step at a time until the fastPtr pointer reaches the end of the linked list.

At this point, the slowPtr pointer will be k positions from the tail of the linked list.

Return the value stored in the node pointed to by the slowPtr pointer.



Efficiency: Binary search has a time complexity of O(log n) as it efficiently narrows down the search range by half in each iteration.

## Solution




## Collaborators

Collaborated with Kaeden and Hayden C.
