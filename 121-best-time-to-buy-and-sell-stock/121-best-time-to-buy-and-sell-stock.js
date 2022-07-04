/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profitMax = 0;
  var minPrice = prices[0];
  
  prices.map(a=>{
    
    
    minPrice = Math.min(a, minPrice);
    profitMax = Math.max(profitMax, a - minPrice)
    // if(a < minPrice) {
    //   minPrice = a;
    // }
    // var b = a - minPrice;
    // if(b > profitMax) {
    //   profitMax = b;
    // }
      
  })
  
  
  return profitMax;
  
  
  
};