/* Write your code below. Good luck! 🙂 */
/*
let scoreDolphins = (97 + 112 + 80) / 3;
let scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else {
  if (scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log('Both win the trophy');
  } else {
    console.log('NO one wins the trophy😭');
  }
}

/// You can store conditions in variables
/// const variable = x > y;
*/

const bill = 430;

/* Write your code below. Good luck! 🙂 */
const tip = bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
);
