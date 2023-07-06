const twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(num, i);
  }
  return [];
};

module.exports = twoSum;


// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]


module.exports = twoSum;
