/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let m = [];
    for (let i=0; i< nums.length; i++) {
        if (!nums[i-1] || nums[i-1] !== nums[i]) {
            m.push(nums[i])
        }
    }
    console.log(m);
    return m.length
};
console.log(removeDuplicates([1, 2, 2, 3, 3]))