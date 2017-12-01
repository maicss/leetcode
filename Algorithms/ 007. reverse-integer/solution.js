/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);
    if (x > max || x < min) return 0
    let a
    if (x<0){
        a = -((-x).toString().split('').reverse().join(''))
    } else {
        a = (x.toString().split('').reverse().join('')) * 1
    }
    if (a > max || a < min) return 0
    return a
};