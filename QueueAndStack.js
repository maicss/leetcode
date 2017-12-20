function Queue () {
  this.prototype = Array.prototype
  this.enqueue = Array.prototype.push
  this.dequeue = Array.prototype.shift
  this.toString = Array.prototype.toString
  Object.defineProperties(this, {
    'size': {
      get: () => this.length,
      enumerable: true,
      configurable: true,
    },
    'isEmpty': {
      get () {
        return this.length === 0
      }
    },
    'clear': {
      get () {
        return this.length = 0
      }
    }
  })
}

function Stack () {
  this.prototype = Array.prototype
  this.push = Array.prototype.push
  this.pop = Array.prototype.pop
  Object.defineProperties(this, {
    'peek': {
      get: () => this[this.length - 1]
    },
    'size': {
      get: () => this.length,
      enumerable: true,
      configurable: true,
    },
    'isEmpty': {
      get () {
        return this.length === 0
      }
    },
    'clear': {
      get () {
        return this.length = 0
      }
    }
  })
}

module.exports = {
  Queue, Stack
}
