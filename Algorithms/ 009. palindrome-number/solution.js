/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const max = Math.pow(2, 31) - 1;
    if (x > max || x < 0) return false;
    return (x.toString().split('').reverse().join('')) * 1 === x
};