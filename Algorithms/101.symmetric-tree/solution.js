/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isSymmetric = function (root) {
  return root === null || isSame(root.left, root.right)
}

const isSame = function (node1, node2) {
  if (node1 === null || node2 === null) return node1 === node2
  if (node1.val !== node2.val) return false
  return isSame(node1.left, node2.right) && isSame(node1.right, node2.left)
}

let tree = {
  val: 1,
  left: {val: 2, left: {val: 3, left: null, right: null}, right: {val: 4, left: null, right: null}},
  right: {val: 2, left: {val: 4, left: null, right: null}, right: {val: 3, left: null, right: null}}
}

let tree2 = {
  val: 1,
  left: {val: 2, left: null, right: {val: 3, left: null, right: null}},
  right: {val: 2, left: null, right: {val: 3, left: null, right: null}}
}
// console.log(toJSON(change(tree)))
console.log(isSymmetric(tree))