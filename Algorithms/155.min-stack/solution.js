/**
 * initialize your data structure here.
 */
module.exports = class MinStack {
  constructor () {
    this.stack = []
  }

  createNew () {
    this.constructor()
  }

  push (value) {
    this.stack.push(value)
  }

  pop() {
    this.stack.pop()
  }

  top () {
    return this.stack[this.stack.length - 1]
  }

  getMin () {
    return Math.min.apply(null, this.stack)
  }

  toJson () {
    return this.stack
  }
}
