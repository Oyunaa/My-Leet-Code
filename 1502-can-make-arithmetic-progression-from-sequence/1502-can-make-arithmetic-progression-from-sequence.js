/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    console.log(arr.sort(function(a, b) { return a - b;}))
  
  const aa = arr.sort(function(a, b) { return a - b;});
  var fir = aa[0];
  var diff = aa[1] - aa[0];
  console.log(diff)
  
  var returnVal = false;
  
   console.log(aa.length, "length")

  if(aa.length <= 2) {
    return true;
  }
  
    for(var i = 1; i< aa.length; i++) {
     var third = fir + (diff*i); // 
      
      if(aa[i] == third) {
        console.log(aa[i], third, "equal")
        returnVal = true;
        
      } else {
         returnVal = false;
        return false;
      }
    }
  
  return returnVal;
  
};