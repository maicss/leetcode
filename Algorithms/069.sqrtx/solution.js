/**
 * @param {number} x
 * @return {number}
 */
// todo 牛顿方法还是有点不理解
  // 这个是牛顿-拉弗森方法（Newton-Raphson method）方法, 一个求方程近似根的方法
var mySqrt = function (x) {
    let r = x
    while (r * r > x)
      r = ((r + x / r) / 2) | 0
    return r
  }

// 二分法
function sqrt2 (x) {
  if (x === 1) return x
  let low = 0, high = x, mid = (low + high) / 2
  while (Math.abs(mid * mid - x) > 0.00001) {
    // LeetCode必须小数点后面4个0才可以, 但是node9只要俩0就没有问题
    if (mid * mid < x) low = mid
    else high = mid
    mid = (low + high) / 2
  }
  return mid
}

// console.log(mySqrt(2147395599))
// console.log(Math.sqrt(8))

for (let i = 0; i < 100000000; i++) {
  if (sqrt2(9) < 3) console.log(1)

}
