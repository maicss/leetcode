function BinaryTree () {
  function Node (val) {
    this.val = val
    this.left = this.right = null
  }

  this.root = null

  const insertNode = function (root, node) {
    if (root.val > node.val) {
      // 存储在左边
      if (root.left) {
        insertNode(root.left, node)
      } else {
        root.left = node
      }
    } else {
      // 存储在右边
      if (root.right) {
        insertNode(root.right, node)
      } else {
        root.right = node
      }
    }
  }

  const getHeight = function (node) {
    if (!node) return -1
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1
  }

  const inOrderTraverseNode = function (root, cb) {
    if (!root) return
    inOrderTraverseNode(root.left, cb)
    cb(root)
    inOrderTraverseNode(root.right, cb)

  }

  const toJSON = function (node) {
    if (!node) return null
    let json = {
      val: node.val || null
    }
    json.left = toJSON(node.left)
    json.right = toJSON(node.right)
    return json
  }

  const preOrderTraverse = function (node, cb) {
    if (node) {
      cb(node)
      preOrderTraverse(node.left, cb)
      preOrderTraverse(node.right, cb)
    }
  }

  const postOrderTraverse = function (node, cb) {
    if (node) {
      postOrderTraverse(node.left, cb)
      postOrderTraverse(node.right, cb)
      cb(node)
    }
  }

  const minNode = function (node) {
    // 由于二叉树的左边放较小值的特点, 所以最小值肯定在整个树的左边
    if (!node) return null
    while (node && node.left) {
      node = node.left
    }
    return node
  }

  const maxNode = function (node) {
    // 由于二叉树的右边放较大值的特点, 所以最大值肯定在整个树的右边
    if (!node) return null
    while (node && node.right) {
      node = node.right
    }
    return node
  }

  const searchNode = function (node, val) {
    if (!node) return null
    if (node.val > val) {
      return searchNode(node.left, val)
    } else if (node.val < val) {
      return searchNode(node.right, val)
    } else {
      return node
    }
  }

  const removeNode = function (node, val) {
    let _node = searchNode(node, val)
    if (!_node) return 'not found'
    if (_node.left === null && _node.right === null) {
      _node = null
      return _node
    } else if (_node.left === null) {
      _node = _node.right
      return _node
    } else if (_node.right === null) {
      _node = _node.left
      return _node
    } else {
      // 本节点下有多个子节点, 找到最小的子节点
      // 因为左边的子节点比本节点小, 所以直接寻找右边子节点的最小值
      let min = minNode(_node.right)
      _node.val = min.val
      _node.right = removeNode(_node.right, _node.val)
      return _node
    }

  }

  const invertTree = function (node) {
    if (!node) return null


      [node.left, node.right] = [node.right, node.left]
    invertTree(node.left)
    invertTree(node.right)
    return node
  }

  this.insert = function (val) {

    let node = new Node(val)

    if (this.root === null) {
      this.root = node
    } else {
      insertNode(this.root, node)
    }

  }

  // 中序遍历: 从树的最左边最低端开始, 依次往最右边遍历
  this.inOrderTraverse = function () {
    let arr = []
    inOrderTraverseNode(this.root, function (node) {
      arr.push(node.val)
    })
    return arr
  }

  // 先序遍历: 从树的最顶端开始, 最左边依次遍历
  this.preOrderTraverse = function () {
    let arr = []
    preOrderTraverse(this.root, function (node) {
      arr.push(node.val)
    })
    return arr
  }

  // 后序遍历: 从树的最左边, 最低端开始, 依次遍历每个遇到的树
  this.postOrderTraverse = function () {
    let arr = []
    postOrderTraverse(this.root, function (node) {
      arr.push(node.val)
    })
    return arr
  }

  this.toJSON = function () {
    return toJSON(this.root)
  }

  this.min = function () {
    return minNode(this.root).val
  }

  this.max = function () {
    return maxNode(this.root).val
  }

  this.search = function (val) {
    return searchNode(this.root, val)
  }

  // 这里的删除节点, 是只删除本节点, 这个节点如果有子节点, 就把子节点上移. 简单上移的时候会有跟原树有冲突的情况, 需要处理
  this.remove = function (val) {
    return removeNode(this.root, val)
  }

  // 翻转二叉树
  this.invert = function () {
    this.root = invertTree(this.root)
  }

}

BinaryTree.from = function (arr) {
  const tree = new BinaryTree()
  for (let i of arr) {
    tree.invert(i)
  }
  return tree
}

module.exports = BinaryTree

if (require.main === module) {

  // const arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 50, 18, 25, 6]
  // const tree = BinaryTree.from(arr)
  // const tree = new BinaryTree()
  // tree.insert(11)
  // tree.insert(7)
  // tree.insert(15)
  // tree.insert(5)
  // tree.insert(3)
  // tree.insert(9)
  // tree.insert(8)
  // tree.insert(10)
  // tree.insert(13)
  // tree.insert(12)
  // tree.insert(14)
  // tree.insert(20)
  // tree.insert(18)
  // tree.insert(25)
  // tree.insert(6)

  // console.log(tree.inOrderTraverse())
  // tree.invert()

  // console.log(tree.inOrderTraverse())
// console.log(tree.preOrderTraverse())
// console.log(tree.postOrderTraverse())

// console.log(tree.min())
// console.log(tree.max())
// console.log(tree.search(30))

// console.log(JSON.stringify(tree.toJSON(), '\t'))
// console.log(tree)

  // console.log(tree.remove(5))
  // console.log(JSON.stringify(tree.toJSON(), '\t'))

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
        right: {val: 25, left: null, right: null}
      }
    }
  }

  const bb = {
    'val': 11,
    'left': {
      'val': 7,
      'left': {
        'val': 5,
        'left': {'val': 3, 'left': null, 'right': null},
        'right': {'val': 6, 'left': null, 'right': null}
      },
      'right': {
        'val': 9,
        'left': {'val': 8, 'left': null, 'right': null},
        'right': {'val': 10, 'left': null, 'right': null}
      }
    },
    'right': {
      'val': 15,
      'left': {
        'val': 13,
        'left': {'val': 12, 'left': null, 'right': null},
        'right': {'val': 14, 'left': null, 'right': null}
      },
      'right': {
        'val': 20,
        'left': {'val': 18, 'left': null, 'right': null},
        'right': {'val': 25, 'left': null, 'right': null}
      }
    }
  }

// const util = require('util')
// console.log(util.isDeepStrictEqual(aa, bb))

  // 平衡树的测试代码
  // tree.insert(26)
  // tree.insert(27)
  // tree.insert(28)
  // tree.insert(29)

}