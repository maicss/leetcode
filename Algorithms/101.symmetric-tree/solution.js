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
var isSymmetric = function (root) {
  // 这个其实就是翻转二叉树
  let left = root.left
  let right = root.right

  left = change(left)
  right = change(right)

}

function change (tree) {
  if (!tree) return
  [tree.left, tree.right] = [tree.right, tree.left]
  change(tree.left)
  change(tree.right)
  return tree
}

let tree = {
  val: 1,
  left: {val: 2, left: {val: 3, left: null, right: null}, right: {val: 4, left: null, right: null}},
  right: {val: 2, left: {val: 4, left: null, right: null}, right: {val: 3, left: null, right: null}}
}

console.log(isSymmetric(tree))