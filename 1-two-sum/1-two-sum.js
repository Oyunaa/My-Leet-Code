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
  
//    // initialValue = nums[0];
//   var cur = nums[0];
//   var b = 0;
  
//     nums.map((a,i)=>{
//       if(target - cur == a && i > b) {
//         retArray.push(b); 
//         retArray.push(i);
        
        
//       }
//       cur = a;
//       b = i;
      
//     })  
  
    return retArray;
};