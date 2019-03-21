// 合并相邻的相同项
const merge = (arr) => {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    if (res[res.length - 1] !== arr[i]) {
      res.push(arr[i])
    }
  }

  return res

}

console.log(merge([3, 2, 2, 4, 5, 5, 6, 2, 1]))

// 写一个compose
const composeFunctions = function (...fns) {
  return fns.reduceRight((prev, next) => (...args) => prev(next(...args)))
}
const add = x => x + 1
const multiply = (x, y) => x * y
const multiplyAdd = composeFunctions(multiply, add)
console.log(multiplyAdd(3, 4)) // 返回 13
