const singleNumber = require('./solution')

describe('single number', function () {
  it('case 1', function () {
    expect(singleNumber([2, 2, 1])).toEqual(1)
  })
  it('case 2', function () {
    expect(singleNumber([4,1,2,1,2])).toEqual(4)
  })
})
