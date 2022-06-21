// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', (line) => {
  const arr = line.split(' ').map(Number);

  console.log(singleNumber(arr));
  process.exit();
});

// Solution 1: Using HashMap
let singleNumber = function(nums) {
  let uniqueSet = new Set();
  for (num of nums) {
    if (uniqueSet.has(num)) {
      uniqueSet.delete(num);
    } else {
      uniqueSet.add(num);
    }
  }
  return uniqueSet.values().next().value;
};

// Solution 2: Using XOR
let singleNumberXOR = function(nums) {
  return nums.reduce((a,b) => a^b)
};
