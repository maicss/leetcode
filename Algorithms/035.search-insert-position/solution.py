class Solution:
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        for (i, n) in enumerate(nums):
            if n == target:
                return i
            elif n > target:
                return i
        return len(nums)


print(Solution().searchInsert([1, 3, 5, 6], 5))
print(Solution().searchInsert([1, 3, 5, 6], 2))
print(Solution().searchInsert([1, 3, 5, 6], 7))
print(Solution().searchInsert([1, 3, 5, 6], 0))
