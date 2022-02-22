/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   
    let arr = s.split(' ');
    for(let i=0; i<arr.length; i++) {
        
         let left = 0;
         let warr = arr[i].split('');
         let right = warr.length - 1;
        
        while(left<=right) {
            let stCh = warr[left];
            let enCh = warr[right];
            warr[left] = enCh;
            warr[right] = stCh;
            left++;
            right--;
        }
        arr[i] = warr.join('')
    }
    

    return arr.join(' ');
};