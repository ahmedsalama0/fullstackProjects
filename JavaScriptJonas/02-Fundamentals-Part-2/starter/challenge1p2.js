// /* Write your code below. Good luck! 🙂 */
// 'use strict';
// const calcAverage = (p1, p2, p3) => (p1 + p2 + p3) / 3;
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

// -------------------------------------
/* Write your code below. Good luck! 🙂 */

// CHALLENGE #2

// const calcTip = function (billValue) {
//   if (billValue <= 300 && billValue >= 50) {
//     return 0.15 * billValue;
//   } else {
//     return 0.2 * billValue;
//   }
// };
// Calculating the same above function using ternary operator
// as well as the arrow function
// const calcTip = (billValue) =>
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// console.log(calcTip(100));

// const bills = new Array(125, 555, 44);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = new Array(
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2]
// );
// console.log(total);

// ---------------------------------

// CHALLENGE #3
/* Write your code below. Good luck! 🙂 

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this['height'] * this['height']);
    // console.log(this.mass, this.height, this.bmi);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this['height'] * this['height']);
    // console.log(this.mass, this.height, this.bmi);
    return this.bmi;
  },
};
// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// call the calcBMI fun to establish bmi property
mark.calcBMI();
john.calcBMI();
console.log(`${mark.fullName}'s BMI (${mark.bmi}) is ${
  mark.bmi > john.bmi ? 'higher' : 'lower'
} than ${john.fullName}'s (${john.bmi})
!`);




const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [],
  totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  // const tips
  // .push()
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

// console.log(bills);
// console.log(tips);
// console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    //  console.log(sum, arr[i]);
  }
  // console.log('sum');
  const average = sum / arr.length;
  // console.log(average);
  // return sum / arr.length;
  return average;
};

// Calling a fun and put the argument directly on it
// console.log(calcAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(calcAverage(totals));
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


*/
