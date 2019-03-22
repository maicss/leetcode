/**
 * @param {number} n
 * @return {number}
 */
module.exports = function(n) {
  if (n < 5) return 0
  let count = 0
  while (n > 0) {
    count += Math.floor(n/5)
    n /= 5
  }
  return count
};
