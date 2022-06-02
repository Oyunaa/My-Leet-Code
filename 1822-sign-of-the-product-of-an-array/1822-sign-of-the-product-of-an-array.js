/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  const s =  nums.reduce((prev, next)=> prev * next);
  console.log(s)
  if(s > 0) {
    return 1;
  } else if(s < 0) {
    return -1;
  } else {
    return 0;
  }
};