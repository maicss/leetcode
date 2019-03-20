const generate = require('./solution')

describe('Pascal\'s Triangle II', function () {
  it('test 1',() => {
    expect(generate(5).toEqual([
      [1],
      [1,1],
      [1,2,1],
      [1,3,3,1],
      [1,4,6,4,1]
    ]))
  })
});

