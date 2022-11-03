/* Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity. */

const searchInsert = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  if (target > nums[hi]) return hi + 1;
  if (target < nums[lo]) return 0;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};

// The following test case should output 2:
console.log(searchInsert([1, 3, 5, 6], 5));

// The following test case should output 1:
console.log(searchInsert([1, 3, 5, 6], 2));

// The following test case should output 4:
console.log(searchInsert([1, 3, 5, 6], 7));
