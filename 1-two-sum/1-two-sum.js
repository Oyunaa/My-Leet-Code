/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const retArray = [];
    
    for(a=0; a< nums.length; a++){
        for(i=a+1; i< nums.length; i++){
            if(target == nums[i] + nums[a]){
                retArray.push(a, i); 
            }
        }
    }
  
  
    return retArray;
};