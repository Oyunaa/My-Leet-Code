/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var five = 0, ten = 0;
    //var arr = [];
    //var retvalue = true;
  
  for(let i = 0; i < bills.length; i++) {
     if(bills[i] == 5) {
       five++;
     } else if(bills[i] == 10) {
       if(five > 0) {
         five--;
         ten++;
       } else {
         return false;
       }
     } else {
       if(five > 0 && ten > 0) {
         five--;
         ten--;
       } else if(ten == 0) {
         if(five > 2) {
           five -= 3;
         } else {
           return false
         }
       } else {
         return false;
       }
     }
  }
  return true;
    
};