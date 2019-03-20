class TreeNode {
  constructor (value) {
    this.val = value
    this.left = null
    this.right = null
  }
}

class BST {

  constructor () {
    this.root = null
  }

  #insertNode (node, newNode) {
    if (node.val > newNode.val) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.#insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
      } else {
        this.#insertNode(node.right, newNode)
      }
    }
  }

  insert (val) {
    const node = new TreeNode(val)
    if (this.root === null) {
      this.root = node
    } else {
      this.#insertNode(this.root, node)
    }
  }
}

const bst = new BST()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)

bst.insert(6)

console.log(bst)
