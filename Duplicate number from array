// Өгөгдсөн array -с давтагдсан утгыг олох код бичээрэй.
// Жишээ нь дараах array өгөгдөж болно :
// input = [10,1,2,3,5,4,6,7,8,6,6,7,7,7,10,1];
// output = [1, 6, 7, 10]


let input = [10, 1, 2, 3, 5, 4, 6, 7, 8, 6, 6, 7, 7, 7, 10, 1];
 
let arr = findDuplicate(input);

console.log(arr);
    
function findDuplicate(a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
      if (a.includes(a[i], i + 1)) {
        !arr.includes(a[i]) && arr.push(a[i]);
      }
    }
    return arr;
  }
