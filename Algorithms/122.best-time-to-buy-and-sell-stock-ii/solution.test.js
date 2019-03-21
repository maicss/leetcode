const solution = require('./solution')

describe('Best Time to Buy and Sell Stock II', function () {
  it('test 1', function () {
    expect(solution([7,1,5,3,6,4])).toEqual(7)
  })
  it('test 2', function () {
    expect(solution([1,2,3,4,5])).toEqual(4)
  })
  it('test 3', function () {
    expect(solution([7,6,4,3,1])).toEqual(0)
  })
})
