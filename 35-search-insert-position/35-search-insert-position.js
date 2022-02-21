/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let pivot, left=0, right = nums.length - 1;
  
  while (left <= right){ // 0 - 3
    pivot = (left + (right-left)/2) >> 0;
   
    if(nums[pivot] == target) return pivot;
    else  if(  target < nums[pivot]) right = pivot - 1; 
    else left = pivot + 1; 
  }
  return left;
  
};