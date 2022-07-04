/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profitMax = 0;
  var minPrice = prices[0];
  
  prices.map((a, i)=>{
    if(i > 0) {
    minPrice = Math.min(a, minPrice);
    profitMax = Math.max(profitMax, a - minPrice) 
    }
  })
  
  
  return profitMax;
  
  
  
};