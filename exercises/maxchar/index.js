// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let countMap = {};
    let maxCharCount = 0;
    let currentMaxChar = '';
    for (let char of str) {
        countMap[char] = (countMap[char] || 0) + 1;
        if (countMap[char] > maxCharCount) {
            maxCharCount = countMap[char];
            currentMaxChar = char;
        }
    }

    return currentMaxChar;
}

module.exports = maxChar;
