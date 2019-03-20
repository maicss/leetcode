/**
 * @param {number[]} prices
 * @return {number}
 */
module.exports = function (prices) {
  let totalProfile = 0
  let min = 0
  let max = 0

  for (let i = 0; i < prices.length; i++) {
    if (i ===0 ) {
      max = min = prices[i]
    } else {
      let p = prices[i]
      if (p > max) {
        totalProfile += p - min

      }
    }
  }

}


const merge = (arr) => {
  const res = []

  for (let i=0; i< arr.length; i++) {
    if (res[res.length - 1] !== arr[i]) {
      res.push(arr[i])
    }
  }

  return res

}

console.log(merge([3,2,2,4,5,5,6,2,1]))

const composeFunctions = function (...fns) {
  return fns.reduceRight((prev, next) => (...args) => prev(next(...args)))
}
const add = x => x + 1;
const multiply = (x, y) => x * y;
const multiplyAdd = composeFunctions(multiply, add);
console.log(multiplyAdd(3, 4)) // 返回 13
