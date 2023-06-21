'use strict';
function mergeSort(arr){
  let n = arr.length;
  if(n > 1){
    let mid = n/2;
    mid = Math.ceil(mid);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}
function merge(left, right, arr){
  let i = 0;
  let j = 0;
  let k = 0;
  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}


// run tests for above function

describe('mergeSort', () => {
  test('should sort an array', () => {
    expect(mergeSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });
  test('should sort an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });
  test('should sort a reverse-sorted array', () => {
    expect(mergeSort([20,18,12,8,5,-2])).toEqual([-2,5,8,12,18,20]);
  });
  test('should sort an array with few uniques', () => {
    expect(mergeSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);
  });
  test('should sort a nearly-sorted array', () => {
    expect(mergeSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
  });
});

