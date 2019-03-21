const isPalindrome = require('./solution')

describe('valid-palindrome', function () {
  it('test 1', function () {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true)
  })
  it('test 2', function () {
    expect(isPalindrome("race a car")).toEqual(false)
  })
  it('test 3', function () {
    expect(isPalindrome("")).toEqual(true)
  })
  it('test 4', function () {
    expect(isPalindrome(",.")).toEqual(true)
  })
  it('test 5', function () {
    expect(isPalindrome("0P")).toEqual(false)
  })
})
