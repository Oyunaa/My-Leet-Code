/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var max = 0; prev = 0;
  
  var maxindex = 0;
  
  nums.map((i, index)=>{
    if(max < i) {
      max = i;
      maxindex = index;
    }
  });
  
  nums.map((i, index)=>{
    if(maxindex != index) {
      if(prev < i) {
        prev = i;
      }
    }
  })
  

  return (max-1) * (prev-1);
};