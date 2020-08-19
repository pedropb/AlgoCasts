// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function stripNonLetters(str) {
    return str.toLowerCase().replace(/[^a-z]/g, "");
}

function buildCharMap(str) {
    const charMap = {};
    for (const char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    return charMap;
}

function anagrams(stringA, stringB) {
    const strippedStringA = stripNonLetters(stringA);
    const strippedStringB = stripNonLetters(stringB);

    if (strippedStringA.length != strippedStringB.length) {
        return false;
    }

    const charCountA = buildCharMap(strippedStringA);
    const charCountB = buildCharMap(strippedStringB);

    for (const char in charCountA) {
        if (charCountB[char] != charCountA[char]) {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
