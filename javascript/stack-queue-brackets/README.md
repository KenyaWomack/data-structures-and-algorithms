# Challenge: List Multi-bracket Validation.

## Approach & Efficiency

Big O Time: O(n) Space: O(n)

## Solution

Append :
Create an empty stack to store ‘opening’ brackets Iterate through each item of the input If the item is an ‘opening’ bracket, push it onto the stack If the item is a ‘closing’ bracket: if the stack is empty return = false pop the most recent ‘opening’ bracket if the popped ‘opening’ bracket don’t match the current ‘closing’ bracket return = false After iterating through all the items: if the stack is empty, return = true if the stack is not empty, return = false

Whiteboard Process
[lab13whiteboard](whiteboard13.png)

## Collaborator

Coriana Williams
