const sortedArrayToBST = require('./solution')

describe('sortedArrayToBST', () => {

  test('init', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual([0, -3, 9, -10, null, 5])
  })

})
