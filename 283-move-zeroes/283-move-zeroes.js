/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastnonzeroElement=0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] != 0) { 
            nums[lastnonzeroElement++] = nums[i];
        }
    }
    for(let i = lastnonzeroElement; i< nums.length; i++){
        //if(nums[i] != 0) { 
            nums[lastnonzeroElement++] = 0;
       // }
    }
    
    
    
};