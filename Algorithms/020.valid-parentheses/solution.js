/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!/[(){}\[]]*/.exec(s))return false;
    let arr = s.split('');
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let chr = arr[i];
        if (chr === '('){
            arr2.push(')')
        } else if (chr === '[') {
            arr2.push(']')
        } else if (chr === '{'){
            arr2.push('}')
        } else if (arr2.pop() !== chr){
            return false
        }
    }
    return !arr2.length
};
