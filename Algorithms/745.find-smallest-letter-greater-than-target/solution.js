/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
   var i, length = letters.length;

    for(i = 0; i < length; i++) {
        if (letters[i] > target) return letters[i];
    }
    
    return letters[0];
};
