/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
  let a;
  
    while(left <= right){
      
      a = (left + (right - left)/2) >> 0; // 2 == nums[2] = 3  //4 == nums[4] = 9
     
      if(nums[a] == target) return a; // false
      if(target < nums[a])  right = a - 1; 
      else  left = a + 1    //left = 3
      
    }
  return -1;
};