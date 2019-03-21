/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = function(s) {
  if (!s.length)return true
  if (s.length ===1)return true
  const cleans = s.match(/[\w]/g)
  if (!cleans) return true
  const arrays = cleans.map(s => s.toLowerCase())
  return arrays.join('') === arrays.reverse().join('')
};

function s (s) {
  if (!s.length)return true
  if (s.length ===1)return true
  const length = s.length
  const len = Math.floor(length / 2)
  for (let i=0; i< len; i++) {
    const diff = s[i].codePointAt(0) - s[length - i].codePointAt(0)
    if (diff === 0 || Math.abs(diff) === 26) {

    }
  }

}
