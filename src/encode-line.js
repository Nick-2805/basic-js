const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
 if (str === '') return '';
  let strArr = str.split('');
  let newStr = '';
  let count = 0;
  let lastLetter = strArr[0];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === lastLetter) {
      count++;
    } else {
      newStr += (count > 1 ? count : '') + lastLetter;
      count = 1;
      lastLetter = strArr[i];
    }
  }
  newStr += (count > 1 ? count : '') + lastLetter;
  return newStr;
}

module.exports = {
  encodeLine
};
