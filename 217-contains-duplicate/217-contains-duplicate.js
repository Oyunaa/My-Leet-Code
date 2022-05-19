/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
  const toFindDuplicates = ((nums) => 
    nums.filter((item, index) => nums.indexOf(item) !== index)
  );
const duplicateElementa = toFindDuplicates(nums);
  
  if(duplicateElementa.length > 0) {
    return true;
  } else {
    return false;
  }
  
  
}