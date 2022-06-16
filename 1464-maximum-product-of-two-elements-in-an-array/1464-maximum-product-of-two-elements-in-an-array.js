/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var a, b;
  var max = 0; prev = 0;
  
  var len = nums.length;
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
  
  console.log(max, prev)
  
  
 // nums.sort();
 // console.log(nums.sort())
  //if(len > 1) {
   // a = nums[len-1];
    //b = nums[len-2];
  //} 
  
  return (max-1) * (prev-1);
};