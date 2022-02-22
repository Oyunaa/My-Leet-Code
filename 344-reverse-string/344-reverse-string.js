/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let left = 0;
    let right = s.length - 1;
    
    while (left <= right) {
        let firstChar = s[left];
        let lastChar = s[right];
        s[left] = lastChar
        s[right] = firstChar;
        left++;
        right--;
    }
};