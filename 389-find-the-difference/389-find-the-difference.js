/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  
  // if(s==""){
  //   return t;
  // }
  let arr = t.split('');
  
  for(char of s) {
    let indexChar = arr.indexOf(char);
    if(indexChar!= -1) {
       arr.splice(indexChar, 1);
    }
  }
  
  if(arr.length > 0) {
    return arr[0];
  }
};