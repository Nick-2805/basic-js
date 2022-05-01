const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( num ) {
  const strNum = (''+num).split('')
  const minNum = (''+num).split('').sort().slice(0, 1).join('');
  let arr = []

  for(let i = 0; i <= strNum.length; i++){
    if(strNum.length == 2 && strNum[i] == minNum) {
    delete strNum[i]
  }
    
    if(strNum[i] < strNum[i +1]) {
     delete strNum[i]
    }
    arr.push(strNum[i])
  }
  return arr.join('')*1
}

module.exports = {
  deleteDigit
};
