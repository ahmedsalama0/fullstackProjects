'use strict';
// console.log('Fine!!!');

/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry('Egypt', 100, 'Cairo');
const country2 = describeCountry('Saudi', 30, 'Riyadh');
const country3 = describeCountry('America', 400, 'washington');

console.log(country1);
console.log(country2);
console.log(country3);

// --------------------------------------------------------------------------



function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}

const percentageEgypt = percentageOfWorld1(100);
const percentageChina = percentageOfWorld1(1441);
const percentageAmerica = percentageOfWorld1(400);

console.log(percentageEgypt, percentageChina, percentageAmerica);

const percentageOfWorld2 = function (population) {
  return `${(population / 7900) * 100}%`;
};

const percentageEgypt2 = percentageOfWorld2(100);
const percentageChina2 = percentageOfWorld2(1441);
const percentageAmerica2 = percentageOfWorld2(400);

console.log(percentageEgypt2, percentageChina2, percentageAmerica2);

// LECTURE: Arrow Functions assignment
const percentageOfWorld3 = (population) => `${(population / 7900) * 100}%`;
const percentageEgypt3 = percentageOfWorld2(100);
const percentageChina3 = percentageOfWorld2(1441);
const percentageAmerica3 = percentageOfWorld2(400);

console.log(percentageEgypt3, percentageChina3, percentageAmerica3);

// --------------------------------------------------------------------------

function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}

const describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about of ${percentageOfWorld1(
    population
  )}%`;

console.log(describePopulation('Egypt', 100));
console.log(describePopulation('China', 1441));
console.log(describePopulation('Saudi', 40));



// LECTURE: Introduction to Arrays
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}

const populations = new Array(100, 40, 300, 1140);
// The below line will produce true or false
// Jo Soln
console.log(populations.length === 4);
// Mine
// logs booleans NOT strings
console.log(populations.length === 4 ? true : false);

const percentages = new Array(
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
);

console.log(percentages);



// LECTURE: Basic Array Operations (Methods)

const neighbours = new Array('Libya', 'Greece', 'Sudan', 'Saudi', 'Palestine');

neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany'))
  console.log('Probably not a central European country :D');
console.log(neighbours);

// Good shortcut
neighbours[neighbours.indexOf('Greece')] = 'Republic of Greece';

// The same as

// const indexOfGreece = neighbours.indexOf('Greece');

// neighbours[indexOfGreece] = 'Republic of Greece';

console.log(neighbours);




// LECTURE: Introduction to Objects
const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 100,
  neighbours: ['Libya', 'Greece', 'Sudan', 'Saudi', 'Palestine'],
};

console.log(myCountry);





// LECTURE: Dot vs. Bracket Notation
const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 100,
  neighbours: ['Libya', 'Greece', 'Sudan', 'Saudi', 'Palestine'],
};

console.log(
  `${myCountry.country} has ${myCountry['population']} million ${myCountry.language}-speaking people, ${myCountry['neighbours'].length} countries and a capital ${myCountry['capital']} `
);

myCountry.population += 2;
// Accessing using DOT notation
console.log(myCountry.population);
// Accessing using bracket notation
myCountry['population'] -= 2;
console.log(myCountry['population']);




// LECTURE: Object Methods

const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 100,
  neighbours: ['Libya', 'Greece', 'Sudan', 'Saudi', 'Palestine'],

  // An empty array
  // neighbours: [],
  describe: function () {
    console.log(
      `${this.country} has ${this['population']} million ${this.language}-speaking people, ${this['neighbours'].length} countries and a capital ${this['capital']} `
    );
  },
  checkIsLand: function () {
    // if there are no neighbours the isLand is true
    // this['isIsland'] = this.neighbours['length'] ? false : true;
    // this['isIsland'] = this.neighbours['length'] === 0 ? true : false;

    // jonas Soln
    // its like assign a value to a variable like this
    // const example = 3 > 2;
    // const example = x <= y;
    // ----------------------------
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
    this.isIsland = !this['neighbours']['length'];
  },
};

myCountry['describe']();
myCountry.checkIsLand();
console.log(myCountry.isIsland);
console.log(myCountry);




// LECTURE: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}




// LECTURE: Looping Arrays, Breaking and Continuing

const populations = [10, 1441, 332, 83];
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);


// LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = new Array(
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
);

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
  console.log(`\n`);
}




// LECTURE: The while Loop
const populations = [10, 1441, 332, 83];
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}
const percentages3 = [];
/*for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);

*/
