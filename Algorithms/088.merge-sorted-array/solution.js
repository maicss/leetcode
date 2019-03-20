/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  if (!nums1.length || !nums2.length || n < 0 || m < 0) return
  let tempIndex = -1
  for (let i = 0; i < n; i++) {
    let nums2e = nums2[i]
    tempIndex = i
    while (nums2e >= nums1[tempIndex] && tempIndex < m + n) {
      if (tempIndex > m + i && nums1[tempIndex] !== 0) {
        tempIndex++
      } else {
        tempIndex++
      }
    }
    nums1.pop()
    nums1.splice(tempIndex, 0, nums2e)
    tempIndex += 1
  }
  console.log(nums1)
};


let nums1 = [1, 2, 3, 0, 0, 0],m = 3
let nums2 = [2, 5, 6],n = 3
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1,2,2,3,5,6]
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)
// console.log(nums1) // [1,2,2,3,5,6]
// [-1,0,0,1,2,2,3,3,3]