const merge = require('./solution')

describe('merge sorted array', () => {
  test('all zero ', () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1,2,2,3,5,6])
  })
  test('just zero', () => {
    expect(merge([0], 0, [1], 1)).toEqual([1])
  })
  test('zero in middle', () => {
    expect(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)).toEqual([-1,0,0,1,2,2,3,3,3])
  })
  test('lead zero', () => {
    expect(merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6)).toEqual([-1,0,0,1,1,1,2,3,3])
  })
  test('second has lead zero', () => {
    expect(merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5)).toEqual([-1,0,0,1,2,3,3])
  })
})


