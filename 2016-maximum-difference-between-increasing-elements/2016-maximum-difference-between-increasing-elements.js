/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    var cur = nums[0];
    var max = 0;
  
    nums.map(a=>{
      if(cur > a) {
        cur = a;
      }
      var c = a-cur;
      if(c > max) {
        max = c;
      }
    })
  
  return max == 0 ? -1 : max;
};