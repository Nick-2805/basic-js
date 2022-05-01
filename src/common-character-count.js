const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  const result = [];
   for (let item of s1) {
    console.log(item)
    if (s2.includes(item)) {
      result.push(item);
      s2 = s2.replace(item, '');
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
