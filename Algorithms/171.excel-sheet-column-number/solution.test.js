const titleToNumber = require('./solution')

describe('Excel Sheet Column Number', function () {
  it('test A', function () {
    expect(titleToNumber('A')).toBe(1)
  })
  it('test C', function () {
    expect(titleToNumber('C')).toBe(3)
  })
  it('test Z', function () {
    expect(titleToNumber('Z')).toBe(26)
  })
  it('test AA', function () {
    expect(titleToNumber('AA')).toBe(27)
  })
  it('test AB', function () {
    expect(titleToNumber('AB')).toBe(28)
  })
  it('test ZY', function () {
    expect(titleToNumber('ZY')).toBe(701)
  })
})
