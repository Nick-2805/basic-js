function getSeason(date) {
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
  }
  // if (date == undefined || date === null) return 'Unable to determine the time of year!'
  
  // let month = date.getMonth() 
  // // winter - 11,00,01 || 
  // if ((month >=0 && month <= 1) || month == 11) {
  //   return 'winter'
  // } else if (month >= 2 && month <= 4)  {
  //   return 'spring'
  // } else if (month >= 5 && month <= 7)  {
  //   return 'summer'
  // } else if (month >= 8 && month <= 10)  {
  //   return 'autumn'
  // }
}
getSeason(new Date(2020, 02, 31))// => 'spring'