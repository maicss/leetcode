/**
 * @param {number[]} nums
 * @return {number}
 */
const v1 = function(nums) {
  /**
   * 296ms
   * 37.6mb
   * */
  let res
  const s = new Set(nums)
  for (let i of s) {
    if (nums.indexOf(i) === nums.lastIndexOf(i)) {
      res = i
      break
    }
  }
  return res
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const v2 = function (nums) {
  /**
   * 360ms
   * 36.2mb
   * */
  let res
  for (let i of nums) {
    if (nums.indexOf(i) === nums.lastIndexOf(i)) {
      res = i
      break
    }
  }
  return res
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const v3 = function (nums) {
  /**
   * 360ms
   * 35.2mb
   * */
  let res
  for (let i = 0; i< nums.length; i++) {
    let e = nums[i]
    if (nums.indexOf(e) === nums.lastIndexOf(e)) {
      res = e
      break
    }
  }
  return res
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const v4 = function (nums) {
  /**
   * 72
   * 38.2mb
   * */
  let res
  const m = {}
  for (let i of nums) {
    if (m[i]) {
      m[i] ++
    } else {
      m[i] = 1
    }
  }
  for (let j in m) {
    if (m[j] === 1) {
      res = Number(j)
    }
  }
  return res
}

module.exports = function(nums) {
  let a = 0
  for(let i of nums) {
    a^=i
  }
  return a;
};
