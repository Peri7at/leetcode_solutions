// Given an integer array nums sorted in non-decreasing order, return an
// array of the squares of each number sorted in non-decreasing order.

// Find an O(n) solution!

const sortedSquares = function (nums) {
  let result = [];
  let lo = 0;
  let hi = nums.length - 1;
  let p = hi;

  while (lo <= hi) {
    if (nums[lo] ** 2 > nums[hi] ** 2) {
      result[p--] = nums[lo++] ** 2;
    } else {
      result[p--] = nums[hi--] ** 2;
    }
  }

  return result;
};

// Following should return [0,1,9,16,100]:
console.log(sortedSquares([-4, -1, 0, 3, 10]));
