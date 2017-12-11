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

function aa (n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2

  let one_step_before = 2
  let two_steps_before = 1
  let all_ways = 0

  for (let i = 2; i < n; i++) {
    all_ways = one_step_before + two_steps_before
    two_steps_before = one_step_before
    one_step_before = all_ways
  }
  return all_ways
}

console.time('r')
console.log(climbStairs(44))
console.timeEnd('r')
console.time('D')
console.log(aa(44))
console.timeEnd('D')

// 4459.036 <==> 0.082