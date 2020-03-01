module.exports = function getSeason(date) {
  let months = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.getOwnPropertyNames(date).length != 0) throw new Error();
  return months[date.getMonth()]
};
