/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
  
  var count = 0;
  var pivot = 1;
        var sum = 0;
        for (var i = 0; i < 32; i ++){
            var p = pivot << i;
         
            if ((n & p) == p)
                sum ++;
        }
        return sum;
};