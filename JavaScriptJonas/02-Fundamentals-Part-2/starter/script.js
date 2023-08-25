// Activating the strict mode for the entire script
'use strict';
// the above line has to be the very first statement in the script
// No code should be prior to the statement

/*
we actually can also activate strict mode,

only for a specific function or a specific block.

But I don't really see the point in doing that

and so I always just use it at the beginning of each script

and so I believe that you should do the same.

So always just put strict mode

in the beginning of your scripts

and like that write more secure code.

And when secure, I mean that strict mode

makes it easier for us developers

to avoid accidental errors.
*/

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;




function logger() {
  console.log('My name is jonas');
}

// calling / running / invoking function
logger();
// Even the above function does NOT produce any result but it does technically returns undefines
// I will try to capture it in the next few lines
const capturedValue = logger();
console.log(capturedValue);
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// function declaration
function calcAge1(birthYear) {
  //const age = 2037 - birthYear;
  //return age;
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);




// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function (Consider it as A special form from the function expression)
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));




// Separating this function (doing this task) supports
// DRY principle (if we need to alter the number of cut piece we will change it in single place instead of altering it in multiple spaces )
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));





const calcAge = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  // if (retirement > 0) {
  //   return retirement;
  // } else {
  //   return -1;
  // }
  // Another format of the above if else block
  return retirement > 0 ? retirement : -1;
  // return retirement;
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));




// Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Method 1 to create Arrays (Literal syntax)
// More Ususal
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Method 1 to create Arrays

// after the new keyword we use
// the array function
// const years = new Array(1991, 1984, 2008, 2020);

console.log(years);

console.log(friends[0]);
console.log(friends[friends.length - 1]);
// Displaying the elements of the array
// using .length property
// Note that the array is object which
// then have properties (keys and values)

// Retrieving the last element from the array
console.log(friends.length);

// changing elements at specific indices at the array
friends[2] = 'John';
console.log(friends);

// We can't replace the entire array
// friends = ['Bob', 'Alice'];
// Illegal!!!

// we can simply store arrays in arrays and varibles as well!

const firstName = 'Jonas';
// An array that holds all related info about jonas...
const jonas = [firstName, 'Schmedtmann', 'teacher', 2037 - 1991, friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);



const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Add elements

const returnedValue = friends.push('Jay');
// .push() adds an element to the end of the array & returns the length of the new array
console.log(returnedValue);
// .unshift() adds an element to the begining of the array & returns the length of the new array
const returnedValue2 = friends.unshift('John');
console.log(returnedValue2);
console.log(friends);

// Remove elements

// .pop() removes the last element end returns the removed item
friends.pop();
const poppedElement = friends.pop();
// const returnedValue4 = friends.pop();

console.log(friends);
console.log(poppedElement);

// .pop() removes the first element end returns the removed item
const returnedValue3 = friends.shift();
console.log(friends);
console.log(returnedValue3);

// indexOf(element), returns -1 if it does not exist...
// console.log(friends.indexOf('Steven') + 1);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// -------------------------------------
// there is a very similar method to the indexOf,

// but which is a bit more modern

// and in my opinion also more useful.

// So this one is an ES6 method and it's called includes.

// So includes, instead of returning the index of

// the element will simply return true if the element exist
// -------------------------------------

// includes (returns true of the element exists otherwise it returns false),
// Uses strict equality (does not do type coersion)

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// these methods is very useful in condiionals
if (friends.includes('peter')) {
  console.log('You have a friend called peter');
} else {
  console.log("You Don't have a friend called peter");
}








// Objects (key(property)-value pairs)

// All related data about jonas entity
const jonasArray = [
  'Jonas',
  'Schemdtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

// Creating an object
// the easies way (Object literal syntax)
// because we are literally writing down the entire object content

// transforming jonasArray to an object
//
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schemdtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

// Arrays: for more ordered data
// objects: for more unstructured data




const jonas = {
  firstName: 'Jonas',
  lastName: 'Schemdtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

// Retrieving (Getting) data from the object
// Bracket notation (object['key' wrapped in string]), dot notation

// Dot notation
console.log(jonas.lastName);
// Bracket notation
// we can use any expression in []
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas[`last${nameKey}`]);

const interestedIn = prompt(
  'What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends'
);

// When you try to access a property that does not exist in an object you will get ===> undefined

// console.log(jonas[interestedIn]);

// we want to handle the wrong user input
// note that undefined is falsy value
// if the user did not enter anything tht is also a falsy value
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    'Wrong request! choose between firstName, lastName, age, job, and friends'
  );
}

// Adding elements to objects
// using dot notation
jonas.location = 'Portugal';
// in the below bracket notation we can use any expression between [] as above
jonas['twitter'] = '@jonasschmedtmann';

console.log(jonas);

// challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas['friends'][0]}`
);
//         Array.length
// jonas.friends.length
//        Array[0]
// ${jonas['friends'][0]}
// or simply to the abobe line
// jonas.friends[0]

// NOTE . dot just an operator like typeof, + - / * you can check its precedence




const jonas = {
  firstName: 'Jonas',
  lastName: 'Schemdtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDrivingLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // Calculating birthyear directly from the object itself
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  //   Now you might argue that maybe we don't even need
  // this confusing this keywords.
  // Why not just do jonas.birthYear, here instead?
  // Well, because that would actually still violate
  // the don't repeat yourself principle.
  // It would work just the same here now,
  // but then let's say
  // that we need to change the name of the object.
  // So we change it here to Jonas2
  // and then we call Jonas2 down here,
  // and then the code will no longer automatically work,
  // because now Jonas is not defined of course.

  calcAge: function () {
    // store the result in a new property
    this['age'] = 2037 - this.birthYear;
    // Alternative way
    // this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this['calcAge']()}-year old ${
      this.job
    }, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license `;
  },
};

// this
// So the this key word
// or the this variable is basically equal to the object
// on which the method is called,
// or in other words,
// it is equal to the object calling the method.
// So, let's see who is calling the method.
// So down here, here is calcAge,
// and the object that is calling the method is Jonas,

//            function call (args)
console.log(jonas['calcAge'](jonas.birthYear));
// console.log(jonas.calcAge(jonas['birthYear']));

// console.log(jonas.calcAge(jonas['birthYear']));
// console.log(jonas.calcAge(jonas['birthYear']));
// console.log(jonas.calcAge(jonas['birthYear']));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// we can instead of computing the age
// multiple times in multiple spaces
// which might be like a heavier
// computation we can make a new property
// the calls the function once then store it
// by this we avoided computing it multiple times .....

// we then replaced .calcAge() fun by .age property-key-

// Challenge
console.log(jonas.getSummary());




// calling functions  (note that these are just stored as values in the keys(proprties)) in arrays in the same way as objects (dot notation & bracket notation)
// const arr = [1, 2, 3];
// console.log(arr);
// console.log(arr['pop']());
// console.log(arr);

// 47. Loping Arrays, Breaking and Continuing

const jonasArray = [
  'Jonas',
  'Schemdtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const elementsTypes = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  // filling elementsTypes []
  // elementsTypes[i] = typeof jonasArray[i];
  // or
  elementsTypes.push(typeof jonasArray[i]);
}
console.log(elementsTypes);

const years = new Array(1991, 2007, 1969, 2020);

const ages = [];

let currentYear = 2037;
for (let i = 0; i < years.length; i++) {
  // ages[i] = currentYear - years[i];
  ages.push(currentYear - years[i]);
}

// continue and break
console.log('---ONLY STRINGS---');
for (let i = 0; i < jonasArray.length; i++) {
  // printing ONLY the strings elements
  if (typeof jonasArray[i] !== 'string') continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
console.log('---BREAK WITH NUMBERS---');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}



const jonas = [
  'Jonas',
  'Schemdtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// for of loop
// for (const element of jonas) {
//   console.log(element);
// }

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`${exercise}: Lifting weight repetition ${rep}🏋️‍♂️`);
  }
  console.log(`\n`);
}




// While loop Lecture

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
}

let rep = 1;
// may i check the condition and update
// the counter simultaneously
// rep++ <= 10
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
  rep++;
}



// Rolling a dice example
// random( returns a num between 0-1)
// for the extreme exapmle suppose it is = 1 multiply it by 6 to generate a num between 1&6 at most
// Math.trunc()
// parseInt

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
// stop condition reaching 6
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  // Generating new dice values
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end ...');
}

*/
