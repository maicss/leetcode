/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
  if (!root) return []
  const res = []
  let temp = [root]
  while (temp.length) {
    res.unshift(temp.map(node => node.val))
    const a = []
    for (let node of temp) {
      if (node.left) a.push(node.left)
      if (node.right) a.push(node.right)
    }
    temp = a
  }
  return res
}

data = {
  'val': 3,
  'left': {'val': 9, 'left': {'val': 4, 'left': null, 'right': null}, 'right': null},
  'right': {
    'val': 20,
    'left': {'val': 15, 'left': null, 'right': null},
    'right': {'val': 7, 'left': null, 'right': null},
  }
}

console.log(levelOrderBottom(data))
