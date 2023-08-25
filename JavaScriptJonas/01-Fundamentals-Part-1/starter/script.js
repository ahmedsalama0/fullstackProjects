/*
let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10, 'Ahmed');

let firstName = 'Ahmed';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;
// true;
let javascriptIsFun = true;
console.log(true, 'true');
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Ahmed');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;
// Reassigning a variable (aka:) mutate a variable

const birthYear = 1991;
// birthYear = 1990;
// Constant => immutable variable, a variable cannot be mutated

// Illegal declartion, Missing initializer
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Salama';
console.log(lastName);


// USE descriptive names for your variables
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 => 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schemdtmann';
console.log(firstName + ' ' + lastName);

// Comparison operators
const isFullAge = ageSarah >= 18;

console.log(currentYear - 1991 > currentYear - 2018);


const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(currentYear - 1991 > currentYear - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const avgAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avgAge);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2037;

const jonas =
  "I'm " +
  firstName +
  ', a ' +
  (currentYear - birthYear) +
  ' years old ' +
  job +
  '!';
console.log(jonas);

const strJonas = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(strJonas);
console.log(`just a regular string...`);

// Multiline string with regular quotes
console.log(
  'String with \n\
multiple \n\
lines'
);

console.log(`String with
multiple 
lines`);




const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
  console.log('The person can start her driving license🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion

// + operator in the below lines
//   converts a string to a number
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('I am ' + String(23) + ' years old');

// - * / operator below converts from
//   a string to a number ...
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

// guess the output
let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n); // 10 /counterintuitive\
console.log(2 + 3 + 4 + '5'); // '95'
console.log('10' - '4' - '3' - 2 + '5'); // '15'


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0; // or 100
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log('You should get a job!');
}

let height; // Define it with different scenarios with (0,100);
if (height) {
  console.log('YAY! height is defined');
} else {
  console.log('Height is UNDEFINED!');
}



const age = '18'; // 18
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

// Take an input from the user as a 'string'
// prompt('What is your favourite number?');

const favouriteNumber = Number(prompt('What is your favourite number?')); // The value is taken as a string ...
console.log(favouriteNumber);
console.log(typeof favouriteNumber);




// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


NOTE:
/// You can store conditions in variables
/// const variable = x > y;


// The switch Statement
const day = 'friday';

switch (day) {
  default:
    console.log('Not a valid day!');
    break;
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday')
  console.log('Write code examples');
else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else console.log('Not a valid day!');




const age = 75;
age >= 18 ? console.log('I like 🥧') : console.log('I like 🌭');

console.log(age >= 18 ? 'I like 🥧' : 'I like 🌭');

console.log(`I like to eat ${age >= 18 ? '🥧' : '🌭'}`);




*/
