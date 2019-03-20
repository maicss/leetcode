/**
 * @param {number} numRows
 * @return {number[][]}
 */
module.exports = function (numRows) {
  const g = (prev, num) => {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]

    const t = [1]
    for (let i = 1; i < prev.length; i++) {
      t.push(prev[i] + prev[i - 1])
    }
    return t.concat([1])
  }
  const res = []
  for (let i = 1; i <= numRows; i++) {
    const n = g(res[i - 2], i)
    res.push(n)
  }
  return res
}
