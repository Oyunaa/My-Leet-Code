/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
var cur = nums[0];
var sum = nums[0];
  
  nums.map((a,index)=>{
    if(index > 0) {
      cur = Math.max(a, cur + a);
      sum = cur > sum ? cur : sum;
    }
  })

  
  return sum;

};