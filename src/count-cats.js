const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   let count = []
  arr.map(item => {
    
    if(Array.isArray(item)) {
      item.filter(cat => {
        if(cat == '^^'){
          count.push(cat)
          
        }
      })
    }
  })
  return count.length
}

module.exports = {
  countCats
};
