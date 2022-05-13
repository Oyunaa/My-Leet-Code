/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var pat = pattern.split('');
    var str = s.split(' ');
  
  var patHash = {};
  var strHash = {};
  
  if (pat.length != str.length) return false;
  
  for(var i = 0; i<= pattern.length; i++) {
      if((pattern[i] in patHash && patHash[pattern[i]] !== str[i]) || 
         (str[i] in strHash && strHash[str[i]] !== pattern[i])
        ){
        return false;
       } else {
        patHash[pattern[i]] = str[i]; //a:dog
        strHash[str[i]] = pattern[i]; //dog:a
        // console.log(patHash)
         // console.log(patHash) //dog:a

    }
  }
  return true

  
};