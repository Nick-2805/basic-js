const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  
   let newArr1 = [];
  let newArr2 = []
  const obj = {};
  let str = '';
  
  arr.forEach(item =>{
    item = item.split('.').reverse()
    newArr1.push(item)
  })
  for (let i = 0; i < newArr1.length; i++) {
    str = '';
    for (let j = 0; j < newArr1[i].length; j++) {
      str = str + '.' + newArr1[i][j];
      newArr2.push(str);
    }
  } 
  for (let i = 0 ; i < newArr2.length; i++) {
    obj[newArr2[i]] = obj[newArr2[i]] + 1 || 1;
  }
  return obj
}

module.exports = {
  getDNSStats
};
