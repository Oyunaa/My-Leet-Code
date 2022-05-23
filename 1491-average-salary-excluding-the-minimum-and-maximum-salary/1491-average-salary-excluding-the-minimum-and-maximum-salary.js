/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    var max = 0;
    var min = salary[0];
  
  
    for(var i = 0; i < salary.length; i++) {
      if(max < salary[i]) {
        max = salary[i];
      }
      if(min > salary[i]) {
        min  = salary[i];
      }
    }
  var sum = 0;
   for(var i = 0; i < salary.length; i++) {
      if(min != salary[i] && max != salary[i]) {
        sum+=salary[i];
      }
    }
  

  
  return sum / (salary.length - 2)
  
 
};