/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let arr = [];
   
    

    let right = nums.length -1;
    let i = right;
    
        while (left <= right) {
           
            let aLeft = nums[left] ** 2;
            let aRight = nums[right]** 2;
            if(aLeft > aRight) {
                arr[i--] = aLeft;
                left++
            }
            else {
              
                arr[i--] = aRight;
                right--;

               
            }
        }
        
    
    
    console.log(arr)
    
   return arr;
};