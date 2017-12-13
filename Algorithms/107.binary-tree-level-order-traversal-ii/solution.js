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
  postOrder(root, function (val) {
    console.log(val)
  })
}

const postOrder = function (node, cb) {
  if (!node) return cb(null)
  postOrder(node.left, cb)
  postOrder(node.right, cb)
  cb(node.val)
}

// todo 把leetcode给的二叉树数据转成真正的二叉树, 而不是每次手写
// const arr = [3, 9, 20, null, null, 15, 7]
// const tree = {}

const tree = {
  val: 3,
  left: {val: 9, left: null, right: null},
  right: {val: 20, left: {val: 15, left: null, right: null}, right: {val: 7, left: null, right: null}}
}

let res = [[15, 7], [9, 20], [3]]
console.log(levelOrderBottom(tree))

