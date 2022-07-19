/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = a = 0;
    let right = nums.length-1;
  
    while(left <= right){
      
      a = (left + (right - left)/2) >> 0;
     
      if(nums[a] == target) return a;
      if(target < nums[a])  right = a - 1; 
      else  left = a + 1;
      
    }
  return -1;
};