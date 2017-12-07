/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';
    return count(countAndSay(n-1))
};

function count(numS) {
    if (numS.length === 1) return 1 + '1';
    let str = '', count = 1;
    for (let i = 1; i < numS.length; i++) {
        if (numS[i - 1] !== numS[i]) {
            str += String(count) + numS[i - 1];
            count = 1
        } else {
            count++
        }
        if (i === numS.length -1) {
            str += String(count) + numS[i];
        }
    }
    return str
}
console.log(countAndSay(10)==='13211311123113112211');
