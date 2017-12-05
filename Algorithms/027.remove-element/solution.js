/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr = []
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== val) arr.push(nums[i])
    }
    console.log(arr)
    return arr.length
};

console.log(removeElement([3, 2,2,3,3], 3))