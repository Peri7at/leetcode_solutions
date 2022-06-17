// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

let findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
  let l1 = nums1.length
  let l2 = nums2.length
  let start = 0, end = l1
  while (start<=end) {
      const partL1 = Math.floor((start+end)/2)
      const partL2 = Math.floor((l1+l2+1)/2) - partL1
      
      const maxL1 = partL1 == 0 ? Number.NEGATIVE_INFINITY : nums1[partL1 - 1]
      const maxL2 = partL2 == 0 ? Number.NEGATIVE_INFINITY : nums2[partL2 - 1]
      
      const minL1 = partL1 == nums1.length ? Number.POSITIVE_INFINITY : nums1[partL1]
      const minL2 = partL2 == nums2.length ? Number.POSITIVE_INFINITY : nums2[partL2]
      
      if(maxL1 <= minL2 && maxL2 <= minL1) {
          const lowMax = Math.max(maxL1, maxL2)
          if( (l1 + l2) % 2 == 1) return lowMax
          return (lowMax + Math.min(minL1, minL2)) / 2
      } else if(maxL1 > minL2) {
          end = partL1 - 1 
      } else {
          start = partL1 + 1
      }
  }
};

console.log(findMedianSortedArrays([1,3,5,6,9], [2,4,5,7,8]));