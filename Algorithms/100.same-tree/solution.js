/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (!p || !q) return false
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

const test1 = {
  val: 1,
  left: {val: 3, left: null, right: null},
  right: {val: 2, left: null, right: null}
}

const test2 = {
  val: 1,
  left: {val: 3, left: null, right: null},
  right: {val: 2, left: null, right: null}
}

console.log(isSameTree(test1, test2))