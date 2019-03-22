/**
 * @param {string} s
 * @return {boolean}
 */
 function a (s) {
  if (!s.length)return true
  if (s.length ===1)return true
  const cleans = s.match(/[\w]/g)
  if (!cleans) return true
  const arrays = cleans.map(s => s.toLowerCase())
  return arrays.join('') === arrays.reverse().join('')
}

/**
 * 124ms 41.5mb
 * 72ms 37.2mb
 * */

module.exports = function s (s) {
  if (!s.length)return true
  if (s.length ===1)return true
  const cleaned = s.replace(/\W/g, '').toLowerCase()
  const length = cleaned.length
  if (!length) return true
  const len = Math.floor(length / 2)
  for (let i=0; i< len; i++) {
    if (cleaned[i] !== cleaned[length - i - 1]) {
      return false
    }
  }
  return true
}

/**
 * [a-z]: 97-122
 * [A-Z]: 64-90
 * */

function f (s) {

}
