const solution= require('./solution')

describe('linked list cycle', function () {
  it('case 1', function () {
    expect(solution([3,2,0,-4])).toEqual(true)
  })
  it('case 2', function () {
    expect(solution([1,2])).toEqual(true)
  })
  it('case 2', function () {
    expect(solution([1])).toEqual(false)
  })
})
