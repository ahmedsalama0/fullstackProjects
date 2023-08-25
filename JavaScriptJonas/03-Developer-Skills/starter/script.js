// Remember, we're gonna use strict mode in all scripts now!
/*
'use strict';
// const x = 15;
// const pppppppppp = 15;
// console.log(5 + 6 + 7);

// use cl prefix for =>console.log()

// Even they did not tell us to write a function but that is a good thing to di
// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature1 = [3, -2, -6, -1, 'error'];
const temperature2 = [9, 13, 17, 15, 14, 9, 5];

function mergeTwoArray(arr1, arr2) {
  const headArray = [];
  for (let i = 0; i < arr1.length; i++) {
    headArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    headArray.push(arr2[i]);
  }
  // console.log(headArray);
  return headArray;
}

function calcTempAmplitude(arr1, arr2) {
  const arr = mergeTwoArray(arr1, arr2);

  let sum = 0;
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] < min) {
        min = arr[i];
      } else if (max < arr[i]) {
        max = arr[i];
      }
    } else continue;
  }
  const temperatureAmplitude = max - min;
  return temperatureAmplitude;
}
// console.log(mergeTwoArray([1, 2, 3], [7, 8, 9]));
console.log(calcTempAmplitude(temperature1, temperature2));
// const empo = [];
// console.log(pushArray([1, 2, 3, 4, 5], empo));



// Function that converts from celsius to kelvin
const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    // c) FIX
    // value: Number(prompt('Degrees celsuis:')),
  };
  // console.log(measurment);

  // B) FIND
  console.table(measurment);
  // console.log(measurment.value);
  // console.warn(measurment.value);
  // console.error(measurment.value);

  const kelvin = measurment.value + 273;
  return kelvin;
};

// A) IDENTIFY

// debugger; // opn dev tools in the debugger in current location
console.log(measureKelvin());
*/
