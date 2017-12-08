/**
 * @param {number[]} nums
 * @return {number}
 */

const aa = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// const aa = [-100, -10, -12]
var maxSubArraySum = function (nums) {
  let m = {}, len = nums.length
  // key: String(index) + length
  // value: sum
  for (let i = 0; i < len; i++) {
    let length = len
    while (length - i) {
      m[String(i) + String(length)] = nums.slice(i, length).reduce((a, b) => a + b, 0)
      length--
    }
  }
  // console.log(nums.slice())
  // console.log(m)
  return Math.max(...Object.values(m))
}

console.log(maxSubArraySum(aa))

// todo 这个有点不理解
var maximumSubArraySum = function (array) {

  let currentSum = 0
  let maxSum = -Infinity
  for (let i of array) {
    currentSum = Math.max(i, currentSum + i)
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum

}
console.log(maximumSubArraySum(aa))

function maxSubArray (array) {
  let temp = 0, sum = -Infinity, startIndex = 0, endIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > temp + array[i]) {
      temp = array[i]
      startIndex = i
    } else {
      temp = temp + array[i]
    }

    if (sum <= temp) {
      sum = temp
      endIndex = i + 1
    }
  }
  console.log(startIndex, endIndex, array.slice(startIndex, endIndex))
  return [sum]
}

console.log(maxSubArray(aa))