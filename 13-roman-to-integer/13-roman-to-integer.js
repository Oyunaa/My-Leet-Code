/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = s.split('');
    let aSum = 0;
    for(let i = 0; i< arr.length; i++)
    {
        
        if(arr[i] == 'I')
        {
            if(arr[i+1] == 'V') {
                aSum += 4;
            } else if (arr[i+1] == 'X') {
                aSum += 9;
            } else {
                aSum += 1;
            }
        } 
        if(arr[i] ==  'V') 
        {
          if (arr[i-1] != 'I') {
                 aSum += 5;
            }
        } 
        if(arr[i] == 'X') 
        { 
          if(arr[i-1] != 'I')
            {
              if(arr[i+1] == 'L'){
                  aSum += 40;
              } else if (arr[i+1] == 'C') {
                  aSum += 90;
              } else {
                  aSum += 10;
              }
            }
        }
         if(arr[i] ==  'L') 
         { 
           if (arr[i-1] != 'X') {
                 aSum += 50;
            }
         }
         if(arr[i] ==  'C') 
         {
            if(arr[i-1] != 'X')
            {
                if(arr[i+1] == 'D'){
                    aSum += 400;
                } else if (arr[i+1] == 'M') {
                    aSum += 900;
                } 
                 else {
                    aSum += 100;
                }
            }
             
         }
        if(arr[i] == 'D') 
        {
            if (arr[i-1] != 'C') {
                 aSum += 500;
            }
           
        }
         if(arr[i] == 'M') 
         {
            if (arr[i-1] != 'C') {
                aSum += 1000;
            }
             
            
         }
     
        } 
    
    
    return aSum;
    
   
};