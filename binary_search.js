/* Given an array of integers nums which is sorted in ascending order, and an integer 
target, write a function to search target in nums. If target exists, then return its 
index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.*/

const search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

// Following test case should return index 4:
console.log(search([-1, 0, 3, 5, 9, 12], 9));

// Following test case should return index -1 as it doesn't exist:
console.log(search([-1, 0, 3, 5, 9, 12], 4));
