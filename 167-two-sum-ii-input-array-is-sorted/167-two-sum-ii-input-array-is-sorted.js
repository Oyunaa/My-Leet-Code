/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0, right= nums.length - 1;
    while(left <right) {
       // console.log(nums[left], nums[right])
        if(nums[left] + nums[right] == target) {
            return [left+1, right +1]
        } 
        
        if(nums[left] + nums[right] < target) {
            left++
        }
        else {
            right--;
        }
    }
    
};