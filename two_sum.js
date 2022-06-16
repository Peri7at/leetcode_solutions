// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = function(nums, target) {
  for (let index=0; index< nums.length; index++) {
      let diff = target - nums[index];
      let diffIndex = nums.indexOf(diff);
      if (diffIndex !== -1 && diffIndex !== index)
          return [index, diffIndex]
  }
};

console.log(twoSum([2, 7, 11, 15], 9));