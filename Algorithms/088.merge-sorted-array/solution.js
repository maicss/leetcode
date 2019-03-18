/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  if (!nums1.length || !nums2.length || m < 0 || n < 0) return
  const total = m + n
  for (let i = 0; i < n; i++) {
    let tempIndex = i
    const num2e = nums2[i]
    while (nums1[tempIndex] < num2e && tempIndex < total) {
      if (tempIndex < m) {
        tempIndex++
      } else if (nums1[tempIndex]) {
        tempIndex++
      } else {
        break
      }
    }
    nums1.pop()
    nums1.splice(tempIndex, 0, num2e)
    tempIndex++
  }
  console.log(nums1)
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1,2,2,3,5,6]
merge([0], 0, [1], 1) // [1]
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3) // [-1,0,0,1,2,2,3,3,3]
merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6) // [-1,0,0,1,1,1,2,3,3]
merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5) //[-1,0,0,1,2,3,3]
