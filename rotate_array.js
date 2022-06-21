// Given an array, rotate the array to the right by k steps, where k is non-negative.
// For example, given [1,2,3,4,5] and k = 2, return [4,5,1,2,3].

let arr = [1,2,3,4,5,6,7];

let rotate = function(nums, k) {
  k %= nums.length // k = k % nums.length
   
  let reverse = function(i, j){
   while(i < j){
       let temp = nums[i]
       nums[i] = nums[j]
       nums[j] = temp
       i++
       j--
   }
  } 
  reverse(0, nums.length-1); // reverse all
  reverse(0, k-1) // reverse until k
  reverse(k, nums.length-1)// reverse after k
  return nums;
};

console.log(rotate(arr, 3));