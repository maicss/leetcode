/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const m = {
        I: 1,
        V:5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let a = s.split('');
    let int = 0;
    for (let i=0; i<a.length; i++) {
        int += m[a[i]];
        if (a[i-1] && m[a[i]] > m[a[i-1]]) {
            int -= m[a[i-1]] * 2
        }
    }
    return int
};

console.assert(romanToInt('XVIII') === 18, '18');
console.assert(romanToInt('XIX') === 19, '19');
console.assert(romanToInt('XL') === 40, '40');
console.assert(romanToInt('LXX') === 70, '70');
console.assert(romanToInt('VIII') === 8, '8');
console.assert(romanToInt('XCIX') === 99, '99');
console.assert(romanToInt('CXCIX') === 199, '199');
console.assert(romanToInt('MMMCCCXXXIII') === 3333, '3333');