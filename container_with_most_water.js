/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the 
ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the 
container contains the most water.
Return the maximum amount of water a container can store. */

const maxArea = function (height) {
  let container = 0;
  let i = 0,
    j = height.length - 1;
  while (i < j) {
    container = Math.max(container, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return container;
};

// The following test case should return 49.
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// The following test case should return 64.
console.log(maxArea([1, 8, 16, 2, 20, 4, 124, 3, 7]));
