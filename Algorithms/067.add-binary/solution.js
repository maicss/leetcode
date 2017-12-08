/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinaryWrong = function (a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}

function addBinary (a, b) {
  let numA = a.split('').reverse()
  let numB = b.split('').reverse()
  let long, short
  if (numA.length > numB.length) {
    long = numA
    short = numB
  } else {
    long = numB
    short = numA
  }
  let index = 0
  let maxLen = long.length

  while (index < maxLen) {
    if (short[index]) {
      long[index] = Number(short[index]) + Number(long[index])
      binaryAdd(long, index)
      index++
    } else {
      break
    }
  }
  return long.reverse().join('')
}

function binaryAdd (binArr, index) {
  let diff = binArr[index] - 1
  if (diff > 0) {
    binArr[index] = 0
    binArr[index + 1] !== undefined ? binArr[index + 1] = Number(binArr[index + 1]) + diff : binArr.push(diff)
    return binaryAdd(binArr, index + 1)
  }
}

// console.log(addBinary('101', '11111') === addBinaryWrong('101', '11111'))
console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011') === "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000")

// console.log(binaryAdd([2, 1, 1], 0))