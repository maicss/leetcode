/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    const common = strs[0].split('');
    for (let i = 1; i < strs.length; i++) {
        let temp = strs[i].split('');
        let min = Math.min(common.length, temp.length);

        common.splice(min);
        for (let j = 0; j < min; j++) {
            if (common[j] !== temp[j]) {
                common.splice(j);
                break
            }
        }
    }
    return common.join('')
};