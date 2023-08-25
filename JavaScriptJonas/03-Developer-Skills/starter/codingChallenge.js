'use strict';
const printForecast = function (arr) {
  let str = ''; // Empty string
  str = '...';
  //   : [17, 21, 23] will print "... 17ºC in 1
  // days ... 21ºC in 2 days ... 23ºC in 3 days ..."
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} days ... `;
  }
  return str;
};

const maxTemp1 = [17, 21, 23];
console.log(printForecast(maxTemp1));
const maxTemp2 = [12, 5, -5, 0, 4];
console.log(printForecast(maxTemp2));
