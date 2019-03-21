/**
 * @param {number[]} prices
 * @return {number}
 */
module.exports = function (prices) {
  let totalProfile = 0
  let min = prices[0]

  for (let i = 1; i < prices.length; i++) {
    let p = prices[i]
    if (p > min) {
      totalProfile += p - min
    }
    min = p
  }
  return totalProfile
}
