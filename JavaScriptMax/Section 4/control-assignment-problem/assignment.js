const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
randomNumber > 0.7 ? console.log(randomNumber) : null;
//randomNumber > 0.7 ? alert(randomNumber) : null;
//alert(randomNumber > 0.7 ? randomNumber : null);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const element of arr) {
  console.log(element);
}

console.log('The loop Ended !');

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log('The loop Ended !');

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
console.log('The Reversed loop Ended !');

let j = 0;
while (j < arr.length) {
  console.log(arr[j++]);
}
console.log('The loop Ended !');
// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

const randomNum = Math.random();
/*
if (
  (randomNum > 0.7 && randomNum > 0.7) ||
  !(randomNum > 0.2) ||
  !(randomNumber > 0.2)
) {
  // Displaying Both random numbers
  // one or two of them might be the answer
  console.log('2nd test', randomNum, randomNumber);
}
*/
// Max Soln
if (
  (randomNum > 0.7 && randomNumber > 0.7) ||
  randomNumber <= 0.2 ||
  randomNum <= 0.2
) {
  // Displaying Both random numbers
  // one or two of them might be the answer
  alert('Greater than 0.7 or smaller than 0.2 .');
}

console.log(randomNumber, randomNum);
