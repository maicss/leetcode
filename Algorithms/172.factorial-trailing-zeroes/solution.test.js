const trailingZeroes = require('./solution')

describe('Factorial Trailing Zeroes', function () {
  it('test 3', function () {
    expect(trailingZeroes(3)).toBe(0)
  })
  it('test 5', function () {
    expect(trailingZeroes(5)).toBe(1)
  })
  it('test 0', function () {
    expect(trailingZeroes(0)).toBe(0)
  })
  it('test 30', function () {
    expect(trailingZeroes(30)).toBe(7)
  })
})
