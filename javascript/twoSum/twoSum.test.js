// test

const twoSum = require('./twoSum');

describe('twoSum', () => {
  test('returns the indices of the two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
  test('returns the indices of the two numbers that add up to the target', () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });
  test('returns the indices of the two numbers that add up to the target', () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
});
