/* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
   Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
   Return k after placing the final result in the first k slots of nums.
   Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', (line) => {
  const arr = line.split(' ').map(Number);

  console.log(removeDuplicates(arr));
  process.exit();
});

const removeDuplicates = function(nums) {
  for (let i=0; i<nums.length; i++) {
      if (nums[i] === nums[i+1]) {
          nums.splice(i+1, 1);
          i--
      }
  }
  return 'Resulting array: ' + nums + '\n' + 'Length of resulting array: ' + nums.length;
};

