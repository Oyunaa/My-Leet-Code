/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function isBadVersion(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
   
  
    return function(n) {

        let left = 1, right = n;
        while (left < right){
         let pivot = (left + (right - left)/ 2) >> 0;
          
          if(isBadVersion(pivot))
          {
             right = pivot;
          } else
            {
              left = pivot + 1
            }
          
        }
      return left
  
    };
};