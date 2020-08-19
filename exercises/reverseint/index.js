// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseInt(n) {
    const isNegative = n < 0;
    return parseInt((isNegative ? '-' : '') + reverseString(Math.abs(n).toString()), 10);
}

module.exports = reverseInt;
