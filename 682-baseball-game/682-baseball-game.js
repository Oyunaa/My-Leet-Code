/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var arr = [];
  var sum = 0;
  
  if(ops.length == 1) {
    return ops[0];
  }
  
    ops.map((i)=>{
      if(i=="C" && arr.length > 0) {
        arr.pop();
      } else if(i=="D" && arr.length > 0) {
        arr.push(Number(arr[arr.length-1]) * 2);
      } else if(i=="+" && arr.length > 1) {
        arr.push(Number(arr[arr.length-1]) + Number(arr[arr.length-2]));
      } else {
        arr.push(Number(i));
      }
    });
  console.log(arr,"arr")
  if(arr.length > 0) {
  sum = arr.reduce(function (prev, next) {
    return prev + next;
  });
  }
  
  return sum;
};