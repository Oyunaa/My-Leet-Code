/**
 * @param {number} x
 * @return {boolean}
 */
  
    
var isPalindrome = function(x) {
   let aToo = x;
    let mod;
    let sum = 0;
    
    while(x >=1)
    {   
        mod = x % 10;
        sum = (sum * 10) + mod;
        x = Math.floor(x/10)
    }
    
    return aToo == sum
    
};