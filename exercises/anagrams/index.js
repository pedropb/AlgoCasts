// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // remove everything but characters
    stringA = stringA.replace(/[^a-zA-Z]/g, "");
    stringB = stringB.replace(/[^a-zA-Z]/g, "");
    
    // make everything lower case
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();

    // count all chars on both strings
    charCntStrA = {};
    charCntStrB = {};
    stringA.split('').forEach((letter) => charCntStrA[letter] ? charCntStrA[letter]++ : charCntStrA[letter] = 1 );
    stringB.split('').forEach((letter) => charCntStrB[letter] ? charCntStrB[letter]++ : charCntStrB[letter] = 1 );

    // compare both counts
    // check if they have the same number of letters
    if (Object.keys(charCntStrA).length !== Object.keys(charCntStrB).length) {
        return false;
    }

    // now that we know that both hashes have the same amount of letters,
    // we can compare them in any order.
    for (let letter in charCntStrA) {
        if (charCntStrB[letter] != charCntStrA[letter])
            return false;
    }

    return true;
}

module.exports = anagrams;
