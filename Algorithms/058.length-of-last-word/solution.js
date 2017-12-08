/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(' ')
  return arr[arr.length - 1] ? arr[arr.length - 1].length : 0
}
console.log(lengthOfLastWord('a '))
console.log(lengthOfLastWord('hello world'))
console.log(lengthOfLastWord('hello world-kk'))