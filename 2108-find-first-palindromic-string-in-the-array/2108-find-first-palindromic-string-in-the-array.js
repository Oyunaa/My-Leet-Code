/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  
  var IsFound = false;
    
  for(let i = 0; i < words.length; i++) {
    
    let aLen = Math.floor(words[i].length / 2);
    let wLen = words[i].length-1;
    
    var countTrue = 0;
    
    for(let a = 0; a < aLen; a++) {
      if(words[i][a] == words[i][wLen-a]){
          countTrue += 1;

      }
    }
    
    if(aLen == countTrue) {
      IsFound = true;
      return words[i];
    }
  }
  
  if(IsFound == false) {
    return "";
  }
  
  
  
};