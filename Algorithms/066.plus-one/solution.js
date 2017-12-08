/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1
  digits[index] += 1
  while (digits[index] > 9) {
    digits[index] = 0
    digits[index - 1] === undefined ? digits.unshift(1) : digits[index - 1] += 1
    index --
  }
  return digits
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
console.log(plusOne([9]))
console.log(plusOne([9, 9]))
console.log(plusOne([9, 9, 9, 9]))