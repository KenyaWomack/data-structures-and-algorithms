# Merge Sort

## Collaborators

Coriana
Cisco

![blog](/blog2.png)
![whiteboard27](/codechallenge27.png)

The mergeSort function takes an array arr as input and recursively applies the Merge Sort algorithm to sort the array. It starts by declaring the length of the array as n.

If n is greater than 1, the function proceeds to split the array into two halves:

It calculates the midpoint mid as n / 2.
Since JavaScript performs floating-point division, the code uses Math.ceil() to ensure that mid is rounded up to the nearest integer. This ensures that the left half receives the extra element when n is odd.
The code then creates two new arrays, left and right, using the slice() method. The left array contains elements from index 0 to mid (exclusive), and the right array contains elements from index mid to n (exclusive).
The mergeSort function is recursively called on both left and right arrays, sorting them individually.

Finally, the merge function is called with left, right, and the original arr as arguments to merge the sorted left and right arrays together.
The mergeSort function takes an array arr as input and recursively applies the Merge Sort algorithm to sort the array. It starts by declaring the length of the array as n.

If n is greater than 1, the function proceeds to split the array into two halves:

It calculates the midpoint mid as n / 2.
Since JavaScript performs floating-point division, the code uses Math.ceil() to ensure that mid is rounded up to the nearest integer. This ensures that the left half receives the extra element when n is odd.
The code then creates two new arrays, left and right, using the slice() method. The left array contains elements from index 0 to mid (exclusive), and the right array contains elements from index mid to n (exclusive).
The mergeSort function is recursively called on both left and right arrays, sorting them individually.

Finally, the merge function is called with left, right, and the original arr as arguments to merge the sorted left and right arrays together.
