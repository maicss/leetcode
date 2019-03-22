/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function(nums, k) {
  while (k) {
    const e = nums.pop()
    nums.unshift(e)
    k --
  }
};
