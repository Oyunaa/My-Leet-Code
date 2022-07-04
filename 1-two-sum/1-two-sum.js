/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var initialValue;
    const retArray = [];
    
    for(a=0; a<= nums.length; a++){
        initialValue = a;
        for(i=0; i<= nums.length; i++){
            if(target-nums[initialValue] == nums[i] && a!=i){
                retArray.push(initialValue); 
            }
        }
    }
  
   
    return retArray;
};