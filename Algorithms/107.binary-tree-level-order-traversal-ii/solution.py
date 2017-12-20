# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):
    def levelOrderBottom(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        answ, L = [], [root]
        while L and root:
            answ.insert(0, [n["val"] for n in L])
            a = []
            for node in L:
                print("N", node)
                for c in (node['left'], node["right"]):
                    print('c', c)
                    print('=' * 30)
                    if c:
                        a.append(c)
            L = a
            # L = [C for N in L for C in (N["left"], N["right"]) if C]
        return answ


data = {
    "val": 3,
    "left": {"val": 9, "left": {"val": 4, "left": None, "right": None}, "right": None},
    "right": {
        "val": 20,
        "left": {"val": 15, "left": None, "right": None},
        "right": {"val": 7, "left": None, "right": None},
    }
}
# print([i for a in [1, 2, 3] for i in [2, 3, 4]])
print(Solution().levelOrderBottom(data))
