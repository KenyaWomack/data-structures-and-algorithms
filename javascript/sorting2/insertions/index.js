'use strict';
function insertionSort(input) {
  const sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
}
function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i = i + 1;
  }
  while (i < sorted.length) {
    const temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i = i + 1;
  }
  sorted.push(value);
}
// Testing the implementation
const input = [8, 4, 23, 42, 16, 15];
const sortedArray = insertionSort(input);
console.log(sortedArray);
module.exports = insertionSort;
