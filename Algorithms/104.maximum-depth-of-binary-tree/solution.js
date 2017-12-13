/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) return 0
  let count = 1
  return walk(root, count)
}

const aa = {
  val: 11,
  left: {
    val: 7,
    left: {
      val: 5,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 6,
        left: null,
        right: null
      }
    },
    right: {
      val: 9,
      left: {val: 8, left: null, right: null},
      right: {val: 10, left: null, right: null}
    }
  },
  right: {
    val: 15,
    left: {
      val: 13,
      left: {val: 12, left: null, right: null},
      right: {val: 14, right: null, left: null}
    },
    right: {
      val: 20,
      left: {val: 18, left: null, right: null},
      right: {val: 25, left: null, right: {val: 36, left: null, right: null}}
    }
  }
}
const bb = {
  val: 1,
  left: {val: 2, left: {val: 4, left: null, right: null}, right: null},
  right: {val: 3, left: null, right: {val: 5, left: null, right: null}}
}
let cc = {val: 0, left: null, right: null}

const walk = function (node, count) {
  if (!node) return count
  if (node.left || node.right) count++
  let leftCount = Math.max(walk(node.left, count), count)
  count = Math.max(walk(node.right, count), leftCount)
  return count
}

console.log(maxDepth(bb), '===3')
console.log(maxDepth(cc))