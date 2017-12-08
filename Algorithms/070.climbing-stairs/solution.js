/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 这个node 可以跑,但是LeetCode不行
  if (n === 1) return 1
  if (n === 2) return 2
  return climbStairs(n - 1) + climbStairs(n - 2)
}
// todo 动态规划

console.log(climbStairs(44))

var i = 0

function aa () {
  i++
  aa()
}

try {
  aa()
} catch (e) {
  console.log(i, e)
}