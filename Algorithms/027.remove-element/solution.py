class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        arr = []
        for i in nums:
            if i != val:
                arr.append(i)
        return len(arr)


print(Solution().removeElement([2, 2, 3, 3, 2], 3))
