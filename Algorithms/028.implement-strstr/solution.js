/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let tL = haystack.length, uL = needle.length;
    if (tL < uL) return -1;

    for (let i=0; i<tL - uL; i++) {
        if (haystack.substr(i, uL) === needle) return i
    }
    return -1
};

console.log(strStr('hello', 'll'))
console.log(strStr('hello', 'll1'))