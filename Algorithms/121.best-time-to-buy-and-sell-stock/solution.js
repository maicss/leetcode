/**
 * @param {number[]} prices
 * @return {number}
 */
module.exports = function(prices) {
  let min = 0
  let max = 0
  let maxProfile = 0
  for (let i=0; i < prices.length; i++) {
    if (i ===0 ) {
      min = max = prices[i]
    } else {
      const p = prices[i]
      if (p < min) {
        min = p
        max = p
      }
      if ( p > max) {
        max = p
        maxProfile = Math.max(maxProfile, max - min)
      }
    }
  }
  return maxProfile
};
