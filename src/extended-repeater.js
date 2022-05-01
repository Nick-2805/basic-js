const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (options.addition === undefined) {
    options.addition = '';
  }

  let add = options.addition;
  const additionSeparatorDefault = '|';
  const separatorDefault = '+';

  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    add = add + (options.additionSeparator || additionSeparatorDefault) + options.addition;
  }
  let result = str + add;
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    result = result + (options.separator || separatorDefault) + str + add;
  }
  return result;
}

module.exports = {
  repeater
};
