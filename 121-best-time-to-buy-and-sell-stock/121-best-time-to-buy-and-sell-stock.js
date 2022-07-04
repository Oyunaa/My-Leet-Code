/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profitMax = 0;
  var minPrice = prices[0];
  
  prices.map((a)=>{
    minPrice = Math.min(a, minPrice);
    profitMax = Math.max(profitMax, a - minPrice) 
  })
  
  
  return profitMax;
  
  
  
};