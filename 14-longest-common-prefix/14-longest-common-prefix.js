/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let tmpStr = '';
    tmpStr = strs[0];
    for(let a = 0; a < strs.length;a++)
    {
         while((strs[a].indexOf(tmpStr)) != 0){
           tmpStr = tmpStr.substring(0, tmpStr.length - 1);
         }
    }
  return tmpStr
 
   
  
};