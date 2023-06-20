'use strict';
// __test__/insertion.test.js
let insertionSort = require('./index.js');
describe('Insertion Sort', () => {
  it('should sort an array in ascending order', () => {
    let input = [8, 4, 23, 42, 16, 15];
    let sorted = insertionSort(input);
    expect(sorted).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('should handle an array with a single element', () => {
    let input = [3];
    let sorted = insertionSort(input);
    expect(sorted).toEqual([3]);
  });
  it('should handle an already sorted array', () => {
    let input = [1, 2, 3, 4, 5];
    let sorted = insertionSort(input);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });
  it('should handle an array with duplicate elements', () => {
    let input = [4, 2, 7, 2, 5];
    let sorted = insertionSort(input);
    expect(sorted).toEqual([2, 2, 4, 5, 7]);
  });
});
