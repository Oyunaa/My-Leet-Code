/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    var len = n.toString().length;

  if(len <= 3) {
    return n.toString();
  }
  
  
 // console.log(len % 3)
  
 // var point = len % 3;
  var arr = n.toString().split('');
  var arr1=[];
  
  var count = 1;
  for(var i = arr.length - 1; i >= 0; i--) {
   // console.log(arr[i])
    if(count <= 3) {
      arr1.push(arr[i]);
      if(count == 3) {
        if (i != 0 ) { arr1.push('.') }
        count = 0;
      }
      //console.log("arr1",arr1)
    }
    
    count++;
    
  }
  
  
  
  //console.log(arr1.reverse().join(''));
  
  
  
  return arr1.reverse().join('');
  
};