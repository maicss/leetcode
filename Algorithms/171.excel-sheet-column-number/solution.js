/**
 * @param {string} s
 * @return {number}
 */
module.exports = function (s) {
  let count = 0
  for (let i = s.length - 1; i >= 0; i--) {
    count += (s[i].codePointAt(0) - 64) * Math.pow(26, s.length - i - 1)
  }
  return count
}
