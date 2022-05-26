/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var arr = n.toString().split("");
  console.log(arr)
  var sum = 0;
  var mul = 1;
  arr.map(item=>{
    sum += Number(item);
    mul = mul * Number(item);
  })
  
  return mul - sum;
};