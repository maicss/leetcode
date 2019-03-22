const rotate = require('./solution')

describe('rotate array', function () {
  it('test 1', function () {
    const nums = [1,2,3,4,5,6,7]
    rotate(nums, 3)
    expect(nums).toEqual([5,6,7,1,2,3,4])
  })
  it('test 2', function () {
    const nums = [-1,-100,3,99]
    rotate(nums, 2)
    expect(nums).toEqual([3,99,-1,-100])
  })
})
