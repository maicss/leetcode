const Stack = require('./solution')

describe('min-stack', function () {
  it('test 1', function () {
    const stack = new Stack()
    stack.push(-2)
    stack.push(0)
    stack.push(-3)
    expect(stack.getMin()).toEqual(-3)
    stack.pop()
    expect(stack.top()).toEqual(0)
    expect(stack.getMin()).toEqual(-2)
  })
})
